import LoginUser from "../models/loginUser.model.js";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config()

export const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

        const user = await LoginUser.findOne({ email });

        if (user) return res.status(400).json({ message: "User Already Exist!" });

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new LoginUser({ userName, email, password: hashedPassword }).save();

        return res.status(201).json({ message: "User Created Sucessfully!" });

    } catch (error) {

        console.error(error);

        return res.status(500).json({ message: error.message });
    };
};

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await LoginUser.findOne({ email });

        if (!user) return res.status(404).json({ message: "User Not Found!" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: "Invalid Password!" });

        const secret = process.env.JWT_SECRET;

        if (!secret) return res.status(400).json({ message: "Invalid Credentials!" });

        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

        return res.status(200).json({ message: "Login Sucessful!" });

    } catch (error) {

        console.error(error);

        return res.status(500).json({ message: error.message })
    }
}