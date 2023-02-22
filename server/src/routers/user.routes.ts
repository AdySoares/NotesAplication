import { Router } from "express";
import { UserController } from "../controllers/user.controllers";
import { authenticator } from "../middlewares/authenticator";
import multer from "multer";
import { MULTER } from "../config/uploads";

export const userRoutes = Router()

const upload = multer(MULTER)
const userController = new UserController

userRoutes.post('/create', userController.create)
userRoutes.put('/update', authenticator , userController.update)
userRoutes.patch('/avatar', authenticator , upload.single('avatar') , userController.avatarUpdate)