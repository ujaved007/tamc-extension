import express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/:userId", getPosts);
router.post("/", createPosts);

export default router;
