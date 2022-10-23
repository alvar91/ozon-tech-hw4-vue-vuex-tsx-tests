import { Mutation, State, Action, Getter } from "vuex-simple";

import {
  FETCH_USERS,
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
  SET_FILTER_KEYWORD,
  SET_FORM_INPUT,
} from "@/store/mutationsVariables";

import { User, MainUserInfo, UserKeys } from "@/types/user";

import { api } from "../../../api/index";

export class MainModule {
  @State()
  users: User[] = [];

  @State()
  filterKeyword: string = "";

  @State()
  currentUserId: string = "";

  @Mutation()
  [FETCH_USERS](users: User[]) {
    this.users = users;
  }

  @Mutation()
  [SET_CURRENT_USER](userId: string) {
    this.currentUserId = userId;
  }

  @Mutation()
  [SET_FILTER_KEYWORD](filterKeyword: string) {
    this.filterKeyword = filterKeyword;
  }

  @Mutation()
  [SET_FORM_INPUT](target) {
    if (this.currentUser === undefined) return;

    const value: string = target.value;
    const name: UserKeys = target.name;

    this.currentUser[name] = value;

    const updatedUsers: User[] = this.users.map((user) => {
      return user.id === this.currentUserId ? this.currentUser : user;
    });

    this.users = updatedUsers;

    // console.log(this.currentUser[name]);
  }

  @Action()
  async [FETCH_USERS_ACTION](): Promise<void> {
    const data = await api.getUsers();

    this[FETCH_USERS](data);
  }

  @Getter()
  get filteredUsers(): User[] {
    return this.filterKeyword
      ? this.users.filter(
          ({ firstName, middleName, lastName }: MainUserInfo) => {
            return (
              firstName.toLowerCase().includes(this.filterKeyword) ||
              middleName.toLowerCase().includes(this.filterKeyword) ||
              lastName.toLowerCase().includes(this.filterKeyword)
            );
          }
        )
      : this.users;
  }

  @Getter()
  get currentUser(): User {
    if (this.currentUserId === "") return this.users[0];

    return this.users.find((user) => user.id === this.currentUserId) as User;
  }
}
