import { User } from "./user";

export interface UserRepository {
  register: (user: User) => Promise<void>;
}
