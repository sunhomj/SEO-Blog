const User = require("../models/user");
const Blog = require("../models/blog");
const { errorHandler } = require("../helpers/errorHandler");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;
  let user;

  User.findOne({ username }).exec((err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(400).json({
        error: "User not Found"
      });
    }
    user = userFromDB;
    let userId = user._id;
    Blog.find({ postedBy: userId })
      .populate("categories", "_id name slug")
      .populate("tags", "_id name slug")
      .populate("postedBy", "_id name")
      .limit(10)
      .select("_id title slug excerpt categories tags postedBy createdAt updatedAt")
      .exec((err, data) => {
        if (err || !userFromDB) {
          return res.status(400).json({
            error: errorHandler(err)
          });
        }
        user.photo = undefined;
        res.json({
          user,
          blogs: data
        });
      });
  });
};
