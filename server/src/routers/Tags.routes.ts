import { Router } from "express";
import { TagsControllers } from "../controllers/tags.controllers";
import { authenticator } from "../middlewares/authenticator";


export const tagsRoutes = Router()
const tagsControllers =  new TagsControllers

tagsRoutes.get('/', authenticator , tagsControllers.show)

