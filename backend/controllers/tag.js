const Tag = require("../models/category");
const slugify = require("slugify");
const { errorHandler } = require("../helpers/errorHandler");

exports.create = (req, res) => {
  const { name } = req.body;
  let slug = slugify(name).toLowerCase();

  let tag = new Tag({ name, slug });

  tag.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Tag.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  });
};

exports.read = (req, res) => {
  console.log(req);
  const slug = req.params.slug.toLowerCase();

  Tag.find({ slug }).exec((err, tag) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(tag);
  });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Tag.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    // Category.find({}).exec((err, data) => {
    //   if (err) {
    //     return res.status(400).json({
    //       error: errorHandler(err)
    //     });
    //   }
    //   res.json(data);
    // });
    res.json({
      message: "Tag deleted successfully"
    });
  });
};
