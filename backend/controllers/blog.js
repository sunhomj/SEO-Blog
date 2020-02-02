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
const { smartTrim } = require("../helpers/blog");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  console.log(form);
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    const { title, body, categories, tags } = fields;
    if (err) {
      return res.status(400).json({
        error: "Image could not upload"
      });
    }

    if (!title || !title.length) {
      return res.status(400).json({
        error: "title is required"
      });
    }
    if (!body || body.length < 200) {
      return res.status(400).json({
        error: "Content is too short"
      });
    }
    if (!categories || categories.length === 0) {
      return res.status(400).json({
        error: "At least one category is required"
      });
    }

    if (!tags || tags.length === 0) {
      return res.status(400).json({
        error: "At least one tag is required"
      });
    }

    let blog = new Blog();
    blog.title = title;
    blog.body = body;
    blog.excerpt = smartTrim(body, 320, " ", " ...");
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;
    // grap 160 charicters for description
    blog.mdesc = stripHtml(body.substring(0, 160));
    blog.postedBy = req.user._id;

    //handle data of categories and tags

    let arrayOfCategories = categories && categories.split(",");
    let arrayOfTags = tags && tags.split(",");

    if (files.photo) {
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
      //   res.json(result);
      Blog.findByIdAndUpdate(
        result._id,
        { $push: { categories: arrayOfCategories } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err)
          });
        } else {
          Blog.findByIdAndUpdate(result._id, { $push: { tags: arrayOfTags } }, { new: true }).exec(
            (err, result) => {
              if (err) {
                return res.status(400).json({
                  error: errorHandler(err)
                });
              } else {
                res.json(result);
              }
            }
          );
        }
      });
    });
  });
};
