import express from "express";
import {
  authorCreate,
  authorDelete,
  authorUpdate,
  getAllAuthors,
  getAuthorById
} from "../Controlers/authorsController";

const router = express.Router();

// 1- GET /authors: list all authors (Populate books)
router.get("/", getAllAuthors); 

// 2- GET /authors/:id: get author by ID
router.get("/:id", getAuthorById);

// 3- POST /authors: create author
router.post("/", authorCreate);

// 4- PUT /authors/:id: update author’s name
router.put("/:id", authorUpdate);

// 5- DELETE /authors/:id: delete author
router.delete("/:id", authorDelete);

export default router;

