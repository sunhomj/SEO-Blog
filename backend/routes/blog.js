const express = require("express");
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require("../controllers/auth");
const { create } = require("../controllers/blog");

router.post("/blog", requireSignin, adminMiddleware, create);

module.exports = router;
