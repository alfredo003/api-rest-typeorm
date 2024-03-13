import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControler";
import { RoomController } from "./controllers/RoomController";

const routes = Router()

routes.post('/subjects',(new SubjectController).create)

routes.get('/rooms',(new RoomController).getAll)
routes.post('/rooms',(new RoomController).create)
routes.post('/videos/:idRoom/create',(new RoomController).createVideo)
routes.post('/rooms/:idRoom/subject',(new RoomController).roomSubject)

export default routes