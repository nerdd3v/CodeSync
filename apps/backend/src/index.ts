import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import {userModel, interviewModel, messageModel} from "db"

env.config()

const app = express();

app.get("/", (req, res)=>{
    return res.status(200).json({
        message: "hello world"
    })
})



const PORT = process.env.PORT || 3000;


const startServer = async()=>{
    await mongoose.connect("localhost:27017")
    app.listen(PORT ,()=>{
        console.log("listening on ", PORT)
    })
}

await startServer();