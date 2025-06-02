import { db } from "../../../shader/config/db/db";
import { userService } from "../../../shader/services/userServices";
import type { Response, Request } from "express";
export class ControllerUser {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body;
      await userService.register.run(user);

      return res.status(200).json({ msg: "usuario registrado correctamente" });
    } catch (error) {
      console.log("----------------------------------------------------------------------------------------------------");
      console.log("error en el controlador de: register ");
      console.log("----------------------------------------------------------------------------------------------------");
      console.log(error);
      console.log("----------------------------------------------------------------------------------------------------");
      return res.status(200).json({ msg: "ocurrió u error inesperado por favor intente de nuevo " });
    }
  }
}
