import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import router from "@/router";

import WaitingView from "@/views/waiting-view.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("WaitingView.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(WaitingView, {
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
