import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";

env.config()

const app = express();

app.use(express.json());
app.use("/user", userRouter)

app.get("/", (req, res)=>{
    return res.status(200).json({
        message: "hello world"
    })
})



const PORT = process.env.PORT || 3000;


const startServer = async()=>{
    await mongoose.connect("mongodb://localhost:27017/db")
    app.listen(PORT ,()=>{
        console.log("listening on ", PORT)
    })
}

await startServer();