import mongoose from 'mongoose'

export const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://adityasemalti535:Aditya%402003@cluster0.ta1t5q6.mongodb.net/",{
            dbName: "User"
        }).then(()=>console.log("Database connected"))
    } catch (error) {
        console.log(error)
    }
}
