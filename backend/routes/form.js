const express = require("express");
const router = express.Router();
//controllers
const { contactForm, contactBlogAuthroForm } = require("../controllers/form.js");
//validators
const { runValidation } = require("../validators/index");
const { contactFormValidator } = require("../validators/form");

router.post("/contact", contactFormValidator, runValidation, contactForm);
router.post("/contact-blog-author", contactFormValidator, runValidation, contactBlogAuthroForm);

module.exports = router;
