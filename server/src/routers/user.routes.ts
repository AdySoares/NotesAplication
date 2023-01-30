import { Router } from "express";
import { UserController } from "../controllers/user.controllers";

export const userRoutes = Router()

const userController = new UserController

userRoutes.post('/create', userController.create)
userRoutes.post('/update/:id', userController.update)