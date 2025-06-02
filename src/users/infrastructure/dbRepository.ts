import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { db } from "../../shader/config/db/db";
import bcript from "bcrypt";
export class DbRepository implements UserRepository {
  async register(user: User): Promise<void> {
    const id = db.length + 1;
    const hashPassword = bcript.hashSync(user.password, 10);
    db.push({ ...user, id, password: hashPassword });
  }
}
