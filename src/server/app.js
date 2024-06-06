const express = require("express");
const connectDB = require("./utils/database");
const errorHandler = require("./utils/errorHandler");
const cors = require("cors");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000"
}));


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
