import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    college_id: {
      type: String,
      required: true,
    },
    caption: {
        type:String
    },
    image: {
      type: String,
    },
     //Status of the User
    //1. Active
    //0. Inactive
    //-1. Deleted
    status: {
      type: Number,
      enum: [1, 0, -1],
      default: 1,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
