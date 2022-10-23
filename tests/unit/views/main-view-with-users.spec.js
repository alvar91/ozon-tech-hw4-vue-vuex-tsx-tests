import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import MainView from "@/views/main-view.vue";
import { FETCH_USERS_ACTION } from "@/store/mutationsVariables";
import store from "@/store/index";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MainView.vue with users", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);

    wrapper = mount(MainView, {
      localVue,
      store,
      router,
    });
  });

  it("should correctly renders markup when users loaded", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
