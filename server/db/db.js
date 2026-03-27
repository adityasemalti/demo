import mongoose from 'mongoose'

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(
      "mongodb+srv://adityasemalti535_db_user:Aditya%402003@cluster0.wcg7dza.mongodb.net",
      {
        dbName: "User",
      }
    );

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
