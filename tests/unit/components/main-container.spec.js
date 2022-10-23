import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import MainContainer from "@/components/main-container.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MainContainer.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainContainer, {
      localVue,
      slots: {
        default: "test-content",
      },
    });
  });

  it("should correctly renders markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correct render slot content", () => {
    expect(wrapper.find(".main-container").text()).toContain("test-content");
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
