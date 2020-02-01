const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  //   const { name, email, password } = req.body;
  //   res.json({
  //     user: { name, email, password }
  //   });

  // handle exist user id by matching email
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is already exist"
      });
    }

    // create username, profile=clientaddress and save to DB
    const { name, email, password } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;
    let newUser = new User({ name, email, password, profile, username });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      //   res.json({
      //     user: success
      //   });
      res.json({
        message: "Signup Success! Please Signin."
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: " User with that email does not exist. Please sign up."
      });
    }
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: " Email and password do not match."
      });
    }
    // generate a JWT and send to client. create process.env.JWT_SECRET random key in .env
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role }
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout success"
  });
};

// check incoming token secret and compare to JWT_SECRET then return true or false
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET
});

// user middleware

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User not found"
      });
    }
    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
  const adminhUserId = req.user._id;
  User.findById({ _id: adminhUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "Admin not found"
      });
    }

    if (user.role !== 1) {
      return res.status(400).json({
        err: "Admin resource. Access denied"
      });
    }

    req.profile = user;
    next();
  });
};
