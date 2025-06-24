import { Request, Response } from "express";
import Author from "../Models/authorsModel";

// 1- GET /authors: list all authors (Populate books)
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    // const authors = await Author.find();
    const authors = await Author.find().populate("books"); // with populate

    res.status(200).json({
      status: "Success",
      message: "Data are fetched Successfully.",
      authors,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: `authors not found! ${error}`,
    });
  }
};

// 2- GET /authors/:id: get author by ID
export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // const author = await Author.findById(id);
    const author = await Author.findById(id).populate("books"); // with populate

    if (!author) {
      res.status(404).json({
        status: "Failed",
        message: "Author not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Author fetched successfully.",
      author,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: `Error fetching author: ${error}`,
    });
  }
};

// 3- POST /authors: create author
export const authorCreate = async (req: Request, res: Response) => {
  try {
    const { name, country, books } = req.body;

    const author = await Author.create({
      name,
      country,
      books,
    });

    res.status(200).json({
      status: "Success",
      message: "you have creatted a new Author Successfully.",
      author, //// what should be here ?(data)
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: `coudnt create a new Author ${error}`,
    });
  }
};

// 4- PUT /authors/:id: update author’s name
export const authorUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, country, books } = req.body;

    const updateAuthor = await Author.findByIdAndUpdate(
      id,
      { name, country, books },
      { new: true }
    ).populate("books"); /// why ?

    if (!updateAuthor) {
      res.status(404).json({
        status: "Failed",
        message: "Author not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Author updated successfully.",
      author: updateAuthor,
    });
  
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: `coudnt create a new Author ${error}`,
    });
  }
};

// 5- DELETE /authors/:id: delete author
export const authorDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      res.status(404).json({
        status: "Failed",
        message: "Author not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Author deleted",
      author: deletedAuthor,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: `coudnt delete the sellected author: ${error}`,
    });
  }
};
