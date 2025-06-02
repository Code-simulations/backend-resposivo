import { authService } from "../../../shader/services/authServices";
import jwt, { JwtPayload } from "jsonwebtoken";
import type { Request, Response } from "express";
import { generateJWT } from "../../../shader/utils/generateJWT";

export class authControllers {
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const deviceType = req.headers["x-device-type"];

      const status = await authService.login.run(data);

      if (!status.isLogin) return res.status(404).json({ msg: "la contraseña o el correo es incorrecta" });

      if (!status.user) return res.status(404).json({ msg: "no existe el usuario" });

      const token = generateJWT(status.user?.id);

      if (deviceType === "mobile") {
        return res.status(200).json({ sessionToken: token, msg: "acceso concedido" });
      } else {
        return res.cookie("user_session", token, { httpOnly: true, secure: true, sameSite: "strict" });
      }
    } catch (error) {
      console.log("----------------------------------------------------------------------------------------------------");
      console.log("error en el controlador de: register ");
      console.log("----------------------------------------------------------------------------------------------------");
      console.log(error);
      console.log("----------------------------------------------------------------------------------------------------");
      return res.status(200).json({ msg: "ocurrió u error inesperado por favor intente de nuevo " });
    }
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      console.log(token);

      if (!token) return res.status(401).json({ error: "Token requerido" });

      const decoded = jwt.verify(token, "MySecretKey") as JwtPayload;

      if (typeof decoded !== "string" && "idUser" in decoded) {
        const user = await authService.getUser.run(decoded.idUser);
        console.log(user);

        return res.status(200).json(user);
      }

      return res.status(400).json({ msg: "no tiene acceso " });
    } catch (error) {
      console.log("----------------------------------------------------------------------------------------------------");
      console.log("error en el controlador de: getUser ");
      console.log("----------------------------------------------------------------------------------------------------");
      console.log(error);
      console.log("----------------------------------------------------------------------------------------------------");
      return res.status(200).json({ msg: "ocurrió u error inesperado por favor intente de nuevo " });
    }
  }
}
