import express from "express";
import {
  getAllBooks,
  getBookById,
  bookCreate,
  bookUpdate,
  bookDelete,
} from "../Controlers/booksController";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", bookCreate);
router.put("/:id", bookUpdate);
router.delete("/:id", bookDelete);

export default router;
