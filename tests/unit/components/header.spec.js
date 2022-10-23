import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import router from "@/router";

import Header from "@/components/header.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Header.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header, {
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
