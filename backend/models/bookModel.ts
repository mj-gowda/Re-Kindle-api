import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    image:{
      type: String,
      reuired : false,
      default : 'https://live.staticflickr.com/3505/3923739128_2d986b7ea3_b.jpg',
      }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
