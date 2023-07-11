import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/database";

// import middlewares
import checkUserAuthentication from "./middlewares/common/checkUserAuthentication";

// import routers
import userRouter from "./routes/user.routes";
import authenticationRouter from "./authenticate";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(checkUserAuthentication);

// base routers
app.use("/user", userRouter);
app.use("/authentication", authenticationRouter);

// Connect to the database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
