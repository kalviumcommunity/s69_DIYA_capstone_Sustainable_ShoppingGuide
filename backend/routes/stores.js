const express = require("express");
const router = express.Router();
const Store = require("../models/Store"); // Create this model later

// GET all stores
router.get("/", async (req, res) => {
    try {
        const stores = await Store.find().populate('products');
  res.json(stores);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET a store by ID
router.get("/:id", async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        if (!store) return res.status(404).json({ error: "Store not found" });
        res.json(store);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//POST method
router.post("/", async (req, res) => {
    try {
        const { name, location, category } = req.body;

        if (!name || !location || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newStore = new Store({
            name,
            location,
            category
        });

        await newStore.save();
        res.status(201).json({ message: "Store added successfully", store: newStore });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// PUT: Update an existing store by ID
router.put("/:id", async (req, res) => {
    try {
        const { name, location, category } = req.body;

        if (!name && !location && !category) {
            return res.status(400).json({ error: "At least one field is required to update" });
        }

        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            { name, location, category },
            { new: true, runValidators: true }
        );

        if (!updatedStore) {
            return res.status(404).json({ error: "Store not found" });
        }

        res.json({ message: "Store updated successfully", store: updatedStore });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
