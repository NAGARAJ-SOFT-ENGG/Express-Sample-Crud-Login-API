import { Schema } from "mongoose";
import { model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }
})

const User = model("User", userSchema);

export default User;