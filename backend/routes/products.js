const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { body, validationResult } = require("express-validator");

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// POST create product
router.post(
    "/",
    [
        body("name").notEmpty(),
        body("category").notEmpty(),
        body("sustainabilityScore").isNumeric(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).json({ message: "Product added", product: newProduct });
        } catch {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

// PUT update product
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product updated", product: updatedProduct });
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// DELETE product
router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product deleted" });
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;

