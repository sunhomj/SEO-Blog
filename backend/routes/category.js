const express = require("express");
const router = express.Router();
const { create } = require("../controllers/category.js");

//validators
const { runValidation } = require("../validators/index");
const { categoryCreateValidator } = require("../validators/category");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

module.exports = router;
