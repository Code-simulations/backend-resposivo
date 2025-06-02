import { Auth } from "../domain/auth";
import { AuthRepository } from "../domain/authRepository";
import { db } from "../../shader/config/db/db";
import bcrypt from "bcrypt";
import { User } from "../../users/domain/user";

export class DbRepository implements AuthRepository {
  async login(params: Auth): Promise<{ isLogin: boolean; user?: User }> {
    const user = db.find((data) => data.email === params.email);

    if (!user) return { isLogin: false };

    const isPassword = bcrypt.compareSync(params.password, user.password);

    if (!isPassword) return { isLogin: false };

    return { isLogin: true, user };
  }

  async getUser(id: number): Promise<User | null> {
    const user = db.find((user) => user.id === id);
    if (!user) return null;
    return user;
  }
}
