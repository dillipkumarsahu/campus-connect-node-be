import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/database";

// import middlewares
import checkUserAuthentication from "./middlewares/common/checkUserAuthentication";

// import routers
import userRouter from "./routes/user.routes";
import authenticationRouter from "./authenticate";
import collegeRouter from "./routes/college.routes";
import collegeAdminRouter from "./routes/college-admin.routes";
import postRoutes from "./routes/post.routs";
import postLikeRoutes from "./routes/post-like.routes";


dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(checkUserAuthentication);

// base routers
app.use("/user", userRouter);
app.use("/authentication", authenticationRouter);
app.use("/college", collegeRouter)
app.use("/college-admin", collegeAdminRouter)
app.use("/post", postRoutes)
app.use("/post-like", postLikeRoutes)





// Connect to the database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
