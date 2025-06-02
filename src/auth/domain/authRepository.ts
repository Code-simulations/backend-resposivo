import { User } from "../../users/domain/user";
import { Auth } from "./auth";

export interface AuthRepository {
  login: (params: Auth) => Promise<{ isLogin: boolean; user?: User }>;
  getUser: (id: number) => Promise<User | null>;
}
