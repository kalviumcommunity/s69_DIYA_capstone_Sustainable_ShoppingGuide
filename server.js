const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Middleware
app.use(express.json());

// API Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/stores", require("./routes/stores"));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
