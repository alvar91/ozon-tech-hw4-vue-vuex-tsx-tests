import store from "@/store/index";

import {
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
  SET_FILTER_KEYWORD,
  SET_FORM_INPUT,
} from "@/store/mutationsVariables";

import {
  mockUserName,
  mockUserId,
  mockUser,
  mockUsersArr,
} from "../../mock/mockUser";

describe("Vuex Store", () => {
  beforeAll(() => {
    store;
  });

  it("should have correct count of users list", async () => {
    await store.dispatch(FETCH_USERS_ACTION);
    expect(store.state.users.length).toEqual(mockUsersArr.length);
  });

  it("should have correct user id", () => {
    store.commit(SET_CURRENT_USER, mockUserId);
    expect(store.state.currentUserId).toBe(mockUserId);
  });

  it("should have correct filter keyword", () => {
    store.commit(SET_FILTER_KEYWORD, mockUserName);
    expect(store.state.filterKeyword).toBe(mockUserName);
  });

  it("should have correct count of filtered users", () => {
    expect(store.getters.filteredUsers.length).toBe(1);
  });

  it("should have correct current user", () => {
    expect(store.getters.currentUser).toMatchObject(mockUser);
  });

  it("should have correct updated user name", () => {
    store.commit(SET_FORM_INPUT, { name: "firstName", value: "Алексей" });
    expect(store.getters.currentUser.firstName).toBe("Алексей");
  });
});
