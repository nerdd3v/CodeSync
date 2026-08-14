import express from "express";
import env from "dotenv";

env.config()

const app = express();

app.get("/", (req, res)=>{
    return res.status(200).json({
        message: "hello world"
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT ,()=>{

    console.log("listening on ", PORT)
})