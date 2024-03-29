import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export  async function connectDB() {
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connection established',db.connection.name)
    }
    catch (error) {
        console.log(error)
    }
} 