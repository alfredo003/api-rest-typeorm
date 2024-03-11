import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControler";

const routes = Router()

routes.post('/subjects',(new SubjectController).create)
routes.post('/rooms',(new SubjectController).create)

export default routes