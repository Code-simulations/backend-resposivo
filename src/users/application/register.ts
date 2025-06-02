import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class Register {
  constructor(private repository: UserRepository) {}
  async run(user: User): Promise<void> {
    await this.repository.register(user);
  }
}
