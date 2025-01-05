import { Router } from "express";
import AdminControllers from "../controllers/Admin.controllers.js";
import AdminMiddleware from "../middlewares/Admin.middleware.js";
const AdminRouter = Router();
AdminRouter.get('/teachers',AdminControllers.getTeachers);
AdminRouter.post('/teachers',AdminControllers.createTeacher);
AdminRouter.get('/teachers-positions',AdminControllers.getTeacherPositions);
AdminRouter.post('/teachers-positions',AdminControllers.createTeacherPosition)
export default AdminRouter;