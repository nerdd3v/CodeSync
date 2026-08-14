import { Router } from "express";
import { signupSchema } from "../Types/zodSchema.js";
import {userModel, interviewModel, messageModel} from "db";

const userRouter: Router = Router();

userRouter.post("/signup", async(req, res)=>{
    const {username, password, role} = req.body;
    
    if(!username || !password || !role){
        return res.status(401).json({
            message: "enough credentials not found"
        });
    }

    try {
        const validateCredentials = signupSchema.safeParse({username, password, role});

        if(!validateCredentials.success){
            return res.status(402).json({
                message: "iinvalid format of credentials"
            });
        }

        const checkUsername =await userModel.findOne({
            username
        });

        if(!checkUsername){
            const resp = await userModel.create({
                username,
                password,
                role
            });
            return res.status(200).json({
                message: "user on boarded",
                id: resp._id
            });
        }

        return res.status(400).json({
            message: "username already exists"
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        });
    }
})

export default userRouter;