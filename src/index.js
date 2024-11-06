import dotenv from "dotenv";
import connectDB from "./db/index.js";

// as this is experimental features
dotenv.config({ path: "./.env" });

connectDB();