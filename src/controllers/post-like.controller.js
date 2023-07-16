import PostLike from "../models/post-like.model";


export const addPostLike= async (req, res, next) => {

  try {
    const postLike = await PostLike.create(req.body);

    return res.status(201).json(postLike);
  } catch (err) {
    return next(err);
  }jh
};

export const getAllpostLike = async (req, res, next) => {
    try {
      const postLikeList = await PostLike.find().populate("college_id").populate("user_id");
      return res.status(200).json(postLikeList);
    } catch (err) {
      return next(err);
    }
  };
  
  
  export const deletePostLike = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedPostLike = await PostLike.findByIdAndDelete(id);
      if (!deletedPostLike) {
        return res.status(404).json({ message: "Like Admin not found" });
      }
      return res.status(200).json({ message: "Like Admin deleted successfully" });
    } catch (err) {
      return next(err);
    }
  };



