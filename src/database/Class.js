import mongoose, { Schema } from 'mongoose';

const ClassSchema = new Schema({
  classId: { type: String, required: true },
  title: { type: String, required: true },
  section: { type: String, required: true },
  posts: { type: Array, required: true },
  students: { type: Array, required: true },
  canPost: { type: Boolean, required: true },
  canComment: { type: Boolean, required: true },
  teachers: { type: Array, required: true }
});

export const Class = mongoose.model('Class', ClassSchema);
