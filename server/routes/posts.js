import express from "express";
import { getPosts, updatePosts, deletePosts } from "../controllers/posts.js";
import { getStaff } from "../controllers/staff.js";

const router = express.Router();

router.get("/:userId", getPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);

router.get("/", getStaff);

export default router;
