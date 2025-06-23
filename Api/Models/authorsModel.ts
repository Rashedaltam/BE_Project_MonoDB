import mongoose, { model } from "mongoose";

// Authors Schema
const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

// model for authors
const Author = model("Author", authorSchema);
export default Author;
