const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true
  },
  postTitle: {
    type: String,
    required: true
  },
  postTags: {
    type: String,
    required: true
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
});

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
  }
});

let Post = mongoose.model("Post", postSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Post, User };