const postController = require("../controllers/postController");

const router = require("express").Router();

//ADD POST
router.post("/", postController.addPost);

//GET ALL POST
router.get("/", postController.getAllPosts);

//GET AN POST
router.get("/:id", postController.getAnPost);

//UPDATE AN POST
router.put("/:id", postController.updatePost);

//DELETE POST
router.delete("/:id", postController.deletePost);

module.exports = router;