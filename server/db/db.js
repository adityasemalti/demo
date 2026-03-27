import mongoose from 'mongoose'

export const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/",{
            dbName: "User"
        }).then(()=>console.log("Database connected"))
    } catch (error) {
        console.log(error)
    }
}