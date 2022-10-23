import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import Aside from "@/components/aside.vue";

import { FETCH_USERS_ACTION } from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Aside.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);

    wrapper = mount(Aside, {
      localVue,
      store,
    });
  });

  it("should correctly renders markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should be input data to search field and change the store", () => {
    const searchInput = wrapper.find(".aside__input");
    searchInput.element.value = "михаил";
    searchInput.trigger("input");
    expect(store.state.filterKeyword).toBe(searchInput.element.value);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
