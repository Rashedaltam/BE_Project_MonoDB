import mongoose, { model } from "mongoose";

// categories Schema
const { Schema } = mongoose;

const categoriesSchema = new Schema(
  {
    name: { type: String, required: true },
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book" }] ////Books (array of ObjectId ref to Books)
  },
  { timestamps: true }
);

// model for categories
const Category = model("Category", categoriesSchema);
export default Category;


