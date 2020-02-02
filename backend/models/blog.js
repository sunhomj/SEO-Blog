const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            //trim = white space will be trimmed out.
            trim: true,
            min: 3,
            max: 160,
            index: true,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        body: {
            type: {},
            min: 200,
            max: 2000000,
            required: true,
            unique: true,
            lowercase: true
        },
        excerpt: {
            type: String,
            max: 1000
        },
        mtitle: {
            type: String
        },
        mdesc: {
            type: String
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        categories: [{ type: ObjectId, ref: "Category", required: true }],
        tags: [{ type: ObjectId, ref: "Tag", required: true }],
        postedBy: {
            type: ObjectId,
            ref: "User"
        }
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Blog", blogSchema);
