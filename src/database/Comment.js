import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  likeCount: { type: Number, required: true },
  postId: { type: String, required: true }
});

export const Comment = mongoose.model('Comment', CommentSchema);
