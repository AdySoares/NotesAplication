import { Router } from "express";
import { TagsControllers } from "../controllers/tags.controllers";


export const tagsRoutes = Router()
const tagsControllers =  new TagsControllers

tagsRoutes.get('/:userId', tagsControllers.show)

