import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      'Please provide a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    maxlength: [1000, 'Message cannot be more than 1000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
