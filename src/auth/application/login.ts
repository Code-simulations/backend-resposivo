import { AuthRepository } from "../domain/authRepository";
import { Auth } from "../domain/auth";
import { User } from "../../users/domain/user";

export class Login {
  constructor(private repository: AuthRepository) {}

  async run(params: Auth): Promise<{ isLogin: boolean; user?: User }> {
    return this.repository.login(params);
  }
}
