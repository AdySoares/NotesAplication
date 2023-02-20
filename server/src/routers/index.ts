import { Router } from 'express';
import { notesRoutes } from './Notes.routes';
import { tagsRoutes } from './Tags.routes';
import { userRoutes } from './user.routes';
import { sessionRoutes } from './Session.routes';

export const routes = Router()

routes.use('/user', userRoutes)
routes.use('/session', sessionRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)