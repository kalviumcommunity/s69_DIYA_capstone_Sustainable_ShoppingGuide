const express = require("express");
const router = express.Router();
const Store = require("../models/Store"); // Create this model later

// GET all stores
router.get("/", async (req, res) => {
    try {
        const stores = await Store.find();
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

module.exports = router;
