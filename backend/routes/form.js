const express = require("express");
const router = express.Router();

//controllers

const { contactForm } = require("../controllers/form.js");

//validators
const { runValidation } = require("../validators/index");
const { contactFormValidator } = require("../validators/form");

router.post("/contact", contactFormValidator, runValidation, contactForm);

module.exports = router;
