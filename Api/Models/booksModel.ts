import mongoose, { model } from "mongoose";

// books Schema
const { Schema } = mongoose;

const booksSchema = new Schema(
  {
    title: { type: String, required: true }, 
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true }, //// Author (ObjectId ref to Author, required)
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}] //// Categories (array of ObjectId ref to Category) 
  },
  { timestamps: true }
);

// model for books
const Book = model("Book", booksSchema);
export default Book;

