const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const productRoutes = require("./routes/products");
const storeRoutes = require("./routes/stores");
const userRoutes = require("./routes/user");

app.use("/products", product);
app.use("/stores", store);
app.use("/users", user);  // ✅ This must exist to handle POST /users

// Default route
app.get("/", (req, res) => {
    res.send("API is working");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
