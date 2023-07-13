
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reportPostSchema = new Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    user_id: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const ReportPost = mongoose.model("ReportPost", reportPostSchema);
export default ReportPost;
