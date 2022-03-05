import express from "express";
import { getPosts, updatePosts, deletePosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/:userId", getPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);

export default router;
