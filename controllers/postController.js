const { Post } = require("../models/model");

const postController = {
  //ADD POST
  addPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();
      return res.status(200).json(savedPost);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //GET ALL POST
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //GET AN POST
  getAnPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //UPDATE POST
  updatePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      await post.updateOne({ $set: req.body });
      return res.status(200).json("Updated successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //DELETE POST
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("Deleted successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = postController;