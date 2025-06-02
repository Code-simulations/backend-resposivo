import { Router, type Request, type Response } from "express";
import { authControllers } from "../controllers/auth.controller";

const controller = new authControllers();

const authRouter = Router();

authRouter.post("/login", (req: Request, res: Response) => {
  controller.login(req, res);
});

authRouter.get("/getUser", (req: Request, res: Response) => {
  controller.getUser(req, res);
});

export default authRouter;
