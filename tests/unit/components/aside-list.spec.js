import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import AsideList from "@/components/aside-list.vue";

import { mockUsersArr } from "../../mock/mockUser";

import { FETCH_USERS_ACTION } from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AsideList.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);

    wrapper = mount(AsideList, {
      localVue,
      store,
    });
  });

  it("should correctly renders markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should be called on the second user card and change the store", () => {
    const { id: secondUserMockId } = mockUsersArr[1];
    const secondCardLink = wrapper.findAll(".aside__user-link").at(1);
    secondCardLink.trigger("click");
    expect(secondUserMockId).toBe(store.state.currentUserId);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
