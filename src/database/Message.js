import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true }
});

export const Message = mongoose.model('Message', MessageSchema);
