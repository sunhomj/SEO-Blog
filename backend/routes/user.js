const express = require("express");
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require("../controllers/auth");
const { read, publicProfile } = require("../controllers/user");

router.get("/profile", requireSignin, authMiddleware, read);

router.get("/user/:username", publicProfile);

// //test

// router.get("/secret", requireSignin, (req, res) => {
//   res.json({
//     user: req.user
//   });
// });

module.exports = router;
