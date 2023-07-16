import express from "express";
import {
  addPostLike,
  deletePostLike,
  getAllpostLike,
} from "../controllers/post-like.controller";

const postLikeRoutes = express.Router();

postLikeRoutes.post("/", addPostLike);

postLikeRoutes.get("/", getAllpostLike);
postLikeRoutes.delete("/:id", deletePostLike);

export default postLikeRoutes;
