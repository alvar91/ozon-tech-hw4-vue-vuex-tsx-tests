import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import router from "@/router";

import HeaderNav from "@/components/header-nav.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HeaderNav.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderNav, {
      localVue,
      router,
    });
  });

  it("should correctly renders markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
