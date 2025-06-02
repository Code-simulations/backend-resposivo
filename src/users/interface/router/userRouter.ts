import { Router } from "express";
import { ControllerUser } from "../controllers/user.controller";
import type { Response, Request } from "express";
const controller = new ControllerUser();

const userRouter = Router();

userRouter.post("/register", (req: Request, res: Response) => {
  controller.register(req, res);
});

export default userRouter;
