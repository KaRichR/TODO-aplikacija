import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const password = process.env.PASSWORD

export const uri = `mongodb+srv://LukasKa:${password}@todo.pdofzul.mongodb.net/?retryWrites=true&w=majority&appName=Todo`;

export default async function runDB() {
    try {
      await mongoose.connect(uri);
      console.log("Successfully connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

export const connection = mongoose.connection;