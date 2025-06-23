import { Request, Response } from "express";
import Categories from "../Models/categoriesModel";

// GET /categories: list all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Categories.find().populate("books");
    res.status(200).json({ status: "Success", categories });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// GET /categories/:id: get category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Categories.findById(id).populate("books");
    if (!category) {
      return res.status(404).json({ status: "Failed", message: "Category not found" });
    }
    res.status(200).json({ status: "Success", category });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// POST /categories: create category
export const categoryCreate = async (req: Request, res: Response) => {
  try {
    const { name, books } = req.body;
    const category = await Categories.create({ name, books });
    res.status(201).json({ status: "Success", category });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// PUT /categories/:id: update category name
export const categoryUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, books } = req.body;
    const updatedCategory = await Categories.findByIdAndUpdate(
      id,
      { name, books },
      { new: true }
    ).populate("books");
    if (!updatedCategory) {
      return res.status(404).json({ status: "Failed", message: "Category not found" });
    }
    res.status(200).json({ status: "Success", category: updatedCategory });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};

// DELETE /categories/:id: delete category
export const categoryDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Categories.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ status: "Failed", message: "Category not found" });
    }
    res.status(200).json({ status: "Success", category: deletedCategory });
  } catch (error) {
    res.status(500).json({ status: "Failed", error });
  }
};
