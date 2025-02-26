import express from "express";
import { login, register } from "../controllers/loginUser.controller.js";

const router = express.Router();

router.post('/', register);

router.post('/Authenticate', login);

export default router;

