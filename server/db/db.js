import mongoose from 'mongoose'

export const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://adityasemalti535_db_user:Aditya@2003@cluster0.wcg7dza.mongodb.net",{
            dbName: "User"
        }).then(()=>console.log("Database connected"))
    } catch (error) {
        console.log(error)
    }
}
