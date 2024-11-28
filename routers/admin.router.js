import { Router } from "express";
import AdminControllers from "../controllers/Admin.controllers.js";
import AdminMiddleware from "../middlewares/Admin.middleware.js";
const AdminRouter = Router();
AdminRouter.get('/teachers',AdminMiddleware.ifAdmin,AdminControllers.getTeachers);
AdminRouter.post('/teachers',AdminMiddleware.ifAdmin,AdminControllers.createTeacher);
AdminRouter.get('/teachers-positions',AdminMiddleware.ifAdmin,AdminControllers.getTeacherPositions);
AdminRouter.post('/teachers-positions',AdminMiddleware.ifAdmin,AdminControllers.createTeacherPosition)
export default AdminRouter;