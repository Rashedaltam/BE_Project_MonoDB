import { Request, Response } from "express";
import Books from "../Models/booksModel";

// GET /books: list all books (populate author + categories)
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Books.find()
      .populate("author")
      .populate("categories");
    res.status(200).json({
      status: "Success",
      message: "Data are fetched Successfully.",
      books,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// GET /books/:id: get book by ID (populate)
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id)
      .populate("author")
      .populate("categories");
    if (!book) {
       res.status(404).json({ status: "Failed", message: "Book not found" });
    }
    res.status(200).json({ status: "Success", book });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// POST /books: create book
export const bookCreate = async (req: Request, res: Response) => {
  try {
    const { title, author, categories, image } = req.body;
    let imagePath;
    if (req.file) {
      imagePath = req.file.path
    }
    const book = await Books.create({ title, author, categories, image:imagePath});
    res.status(201).json({ status: "Success", book });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// PUT /books/:id: update book details
export const bookUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, categories } = req.body;
    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { title, author, categories },
      { new: true }
    ).populate("author").populate("categories");
    if (!updatedBook) {
       res.status(404).json({ status: "Failed", message: "Book not found" });
    }
    res.status(200).json({ status: "Success", book: updatedBook });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// DELETE /books/:id: delete book
export const bookDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await Books.findByIdAndDelete(id);
    if (!deletedBook) {
       res.status(404).json({ 
        status: "Failed",
        message: "Book not found" });
    }
    res.status(200).json({ 
      status: "Success", 
      book: deletedBook });
  } catch (error) {
    res.status(500).json({ 
      status: "Failed", 
      error: `coudnt delete the sellected author: ${error}` });
  }
};
