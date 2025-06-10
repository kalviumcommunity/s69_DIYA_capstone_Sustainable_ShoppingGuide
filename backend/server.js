const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/stores", require("./routes/stores"));
app.use("/api/users", require("./routes/user"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> f3445015d50d6aa704435b582a174926f81b6c89
