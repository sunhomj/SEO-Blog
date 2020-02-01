const express = require("express");
const router = express.Router();
const { create, list, remove, read } = require("../controllers/category.js");

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

router.get("/categories", list);
router.get("/category/:slug", read);
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
