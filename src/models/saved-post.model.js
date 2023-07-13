import mongoose from "mongoose";
const Schema = mongoose.Schema;

const savedPostSchema = new Schema(
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

const SavedPost = mongoose.model("SavedPost", savedPostSchema);
export default SavedPost;
