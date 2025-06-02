import { AuthRepository } from "../domain/authRepository";
import { User } from "../../users/domain/user";

export class GetUser {
  constructor(private repository: AuthRepository) {}
  async run(id: number): Promise<User | null> {
    return await this.repository.getUser(id);
  }
}
