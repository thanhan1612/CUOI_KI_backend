import { Router } from "express";
import AdminRouter from "./admin.router.js";
const RootRouter = Router();
RootRouter.use('/admin',AdminRouter);
export default RootRouter;