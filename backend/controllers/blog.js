const Blog = require("../models/blog");
const Category = require("../models/category");
const Tag = require("../models/tag");

const formidable = require("formidable");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");
const _ = require("lodash");
// to send any mongoose error to client
const { errorHandler } = require("../helpers/errorHandler");
const fs = require("fs");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  console.log(form);
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload"
      });
    }

    const { title, body, categories, tags } = fields;
    let blog = new Blog();
    blog.title = title;
    blog.body = body;
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;
    // grap 160 charicters for description
    blog.mdesc = stripHtml(body.substring(0, 160));
    blog.postedBy = req.user._id;

    if (files.photo) {
      console.log(files.photo);
      if (files.photo.size > 10000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size"
        });
      }
      blog.photo.data = fs.readFileSync(files.photo.path);
      blog.photo.contentType = files.photo.type;
    }

    blog.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(result);
    });
  });
};
