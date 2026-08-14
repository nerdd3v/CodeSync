import mongoose from "mongoose"
import  { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        minlength: 6
    },
    role:{
        type: String,
        enum: ["Candidate","Interviewer"],
        default: "Candidate",
        required: true
    }
})

const interviewSchema = new Schema({
    interviewerId: mongoose.Types.ObjectId, //id of the user (interviewer)
    candidateId: mongoose.Types.ObjectId, //id of the user (candidate)
    status: {
        type: String,
        enum: ["Failed", "Passed", "Hold"],
        default: "Hold"
    }
})

const messageSchema = new Schema({
    interviewId: mongoose.Types.ObjectId,
    to: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    from: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    content:{
        type: String
    }
})

const userModel = mongoose.model("user", userSchema);
const interviewModel = mongoose.model("interview", interviewSchema);
const messageModel = mongoose.model("message", messageSchema);

export {userModel, interviewModel, messageModel}