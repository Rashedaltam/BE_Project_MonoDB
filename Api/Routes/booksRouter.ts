import express from "express";
import {
  getAllBooks,
  getBookById,
  bookCreate,
  bookUpdate,
  bookDelete,
} from "../Controlers/booksController";
import { upload } from "../MW/multer";

const router = express.Router();

// 1- GET /books: list all authors (Populate books)
router.get("/", getAllBooks);
// 2- GET /books/:id: get author by ID
router.get("/:id", getBookById);
// 3- POST /book: create author
router.post("/",upload.single("image") , bookCreate);
// 4- PUT /book/:id: update author’s name
router.put("/:id", bookUpdate);
// 5- DELETE /book/:id: delete author
router.delete("/:id", bookDelete);

export default router;
