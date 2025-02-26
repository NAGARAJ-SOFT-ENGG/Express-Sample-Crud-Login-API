import { Schema } from "mongoose";
import { model } from "mongoose";

const loginUserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LoginUser = model("LoginUser", loginUserSchema);

export default LoginUser;