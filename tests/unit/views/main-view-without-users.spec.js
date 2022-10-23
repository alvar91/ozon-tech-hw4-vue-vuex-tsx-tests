import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import MainView from "@/views/main-view.vue";

import store from "@/store/index";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MainView.vue without users", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainView, {
      localVue,
      store,
      router,
    });
  });

  it("should correctly renders markup when users not loaded", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
