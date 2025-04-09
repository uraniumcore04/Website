import express from "express";
import 'dotenv/config'
import authRoutes from "./routes/auth/auth.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";


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

const __dirname = path.resolve();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})


// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 