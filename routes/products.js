const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET a single product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, category, sustainabilityScore } = req.body;

        // Validate request body
        if (!name || !category || sustainabilityScore === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create new product
        const newProduct = new Product({
            name,
            category,
            sustainabilityScore
        });

        // Save to database
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// PUT: Update an existing product by ID
router.put("/:id", async (req, res) => {
    try {
        const { name, category, sustainabilityScore } = req.body;

        // Validate request body
        if (!name && !category && sustainabilityScore === undefined) {
            return res.status(400).json({ error: "At least one field is required to update" });
        }

        // Find and update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, category, sustainabilityScore },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json({ message: "Product updated successfully", product: updatedProduct });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;
