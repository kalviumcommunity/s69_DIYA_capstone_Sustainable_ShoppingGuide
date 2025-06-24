const express = require("express");
const router = express.Router();
const Store = require("../models/Store");
const { body, validationResult } = require("express-validator");

// read
router.get("/", async (req, res) => {
    try {
        const stores = await Store.find();
        res.json(stores);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET store by ID
router.get("/:id", async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        if (!store) return res.status(404).json({ error: "Store not found" });
        res.json(store);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// write
router.post(
    "/",
    [
        body("name").notEmpty(),
        body("location").notEmpty(),
        body("category").notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const newStore = new Store(req.body);
            await newStore.save();
            res.status(201).json({ message: "Store added", store: newStore });
        } catch {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

// write
router.put("/:id", async (req, res) => {
    try {
        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedStore) return res.status(404).json({ error: "Store not found" });
        res.json({ message: "Store updated", store: updatedStore });
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
