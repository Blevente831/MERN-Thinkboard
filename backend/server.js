import express from "express";
import cors from "cors"
import dotenv from "dotenv";


import NoteRoutes from "./routes/NoteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;



// middleware 
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", NoteRoutes);

connectDB().then(() => {

app.listen(PORT, () => {
console.log("Server running on Port:",PORT);
});
});
