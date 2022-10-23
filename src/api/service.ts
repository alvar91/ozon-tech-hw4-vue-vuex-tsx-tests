import users from "@/assets/data/mock.json";

import { UsersService } from "@/types/userService";

export const usersService: UsersService = {
  getUsers: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 0);
    });
  },
};
