import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import Container from "@/components/container.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Container.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Container, {
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
    expect(wrapper.find(".container").text()).toContain("test-content");
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
