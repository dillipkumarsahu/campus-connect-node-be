import express from "express";
import {
  addCollegeAdmin,
  deleteCollegeAdmin,
  getAllCollegeAdmin,
  updateCollegeAdmin,
} from "../controllers/college-admin.controller";

const collegeAdminRouter = express.Router();

collegeAdminRouter.post( "/", addCollegeAdmin);

collegeAdminRouter.get("/", getAllCollegeAdmin);
collegeAdminRouter.put("/:id", updateCollegeAdmin);
collegeAdminRouter.delete("/:id", deleteCollegeAdmin);

export default collegeAdminRouter;
