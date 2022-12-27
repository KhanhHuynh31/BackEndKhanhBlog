const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
      unique: true,
    },
    postTitle: {
      type: String,
      required: true,
      unique: true,
    },
    postTags: {
      type: String,
      required: true,
    },
    postType: {
      type: String,
      required: true
    },
    postImage: {
      type: String,
      required: true
    },
    postDate: {
      type: String,
      required: true
    },
    postContent: {
      type: String,
      required: true
    },
    postDescription: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    userEmail: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    userPassword: {
      type: String,
      min: 6,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

let Post = mongoose.model("Post", postSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Post, User };