import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth/auth.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to database
const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);

// Serve static files from client build
const clientPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(clientPath));

// Catch-all route for SPA - must be after API routes
app.use((req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
