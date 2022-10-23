import { User } from "./user";

export interface UsersService {
  getUsers: () => Promise<User[]>;
}
