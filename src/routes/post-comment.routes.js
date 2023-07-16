import express from "express";
import {
    addPostComment,
  deleteComment,
  getAllpostComment,
  updateComment,
} from "../controllers/post-comment.controller";

const postCommentRoutes = express.Router();

postCommentRoutes.post( "/", addPostComment);

postCommentRoutes.get("/", getAllpostComment);
postCommentRoutes.put("/:id", updateComment);
postCommentRoutes.delete("/:id", deleteComment);

export default postCommentRoutes;