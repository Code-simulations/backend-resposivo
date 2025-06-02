import { Register } from "../../users/application/register";
import { DbRepository } from "../../users/infrastructure/dbRepository";

export const userService = {
  register: new Register(new DbRepository()),
};
