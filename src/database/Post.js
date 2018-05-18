import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], //{ type: Array, required: true, ref: 'Comment' },
  classId: { type: String, required: true }
});

export const Post = mongoose.model('Post', PostSchema);
