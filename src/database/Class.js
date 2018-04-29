import mongoose, { Schema } from 'mongoose';

const ClassSchema = new Schema({
  title: { type: String, required: true },
  section: { type: String, required: true },
  posts: { type: Array, required: true },
  students: { type: Array, required: true }
});

export const Class = mongoose.model('Class', ClassSchema);
