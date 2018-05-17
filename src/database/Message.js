import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  userId: { type: String, required: true },
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  isRead: { type: Boolean, required: true }
});

export const Message = mongoose.model('Message', MessageSchema);
