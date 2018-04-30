import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  classes: { type: Array, required: true }
});

export const User = mongoose.model('User', UserSchema);
