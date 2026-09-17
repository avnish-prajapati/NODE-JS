import mongoose from "mongoose";


export const connectdb = async () => {
  try {

    await mongoose.connect( // Ye function MongoDB se connection banane ke liye ..
      "mongodb://localhost:27017/employeeDB"
    );

    console.log("MongoDB Connected...");

  } catch (error) {

    console.log(
      "Database connection error:",
      error.message
    );
          
  }
};