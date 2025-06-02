import { GetUser } from "../../auth/application/getUser";
import { Login } from "../../auth/application/login";
import { DbRepository } from "../../auth/infrastructure/dbRepository";

export const authService = {
  login: new Login(new DbRepository()),
  getUser: new GetUser(new DbRepository()),
};
