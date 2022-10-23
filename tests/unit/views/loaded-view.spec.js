import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import router from "@/router";

import LoadedView from "@/views/loaded-view.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("LoadedView.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LoadedView, {
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
