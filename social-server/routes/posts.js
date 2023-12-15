const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();

//create a post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The Post has been updated successfully");
    } else {
      res.status(403).json("You can update only your posts.!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The Post has been deleted");
    } else {
      res.status(403).json("You Can delete only your posts.!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//like or dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await Post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked..!");
    } else {
      await Post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been Disliked..!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get timeline posts
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await User.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.findOne({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(error.status).json(error);
  }
});

module.exports = router;
