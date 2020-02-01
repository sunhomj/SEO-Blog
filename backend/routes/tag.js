const express = require("express");
const router = express.Router();

//controllers
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { create, list, remove, read } = require("../controllers/tag.js");

//validators
const { runValidation } = require("../validators/index");
const { tagCreateValidator } = require("../validators/tag");

router.post("/tag", tagCreateValidator, runValidation, requireSignin, adminMiddleware, create);

router.get("/tags", list);
router.get("/tag/:slug", read);

router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
