import express from "express";
import { getStaff } from "../controllers/staff.js";

const staffRouter = express.Router();

staffRouter.get("/", getStaff);

export default staffRouter;
