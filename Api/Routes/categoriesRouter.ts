import express from "express";
import {
  getAllCategories,
  getCategoryById,
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from "../Controlers/categoriesController";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", categoryCreate);
router.put("/:id", categoryUpdate);
router.delete("/:id", categoryDelete);

export default router;
