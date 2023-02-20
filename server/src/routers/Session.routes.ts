import { Router } from "express";
import { SessionsControllers } from "../controllers/sessions.controllers";

export const sessionRoutes = Router()

const sessionsController = new SessionsControllers



sessionRoutes.get('/', sessionsController.create)