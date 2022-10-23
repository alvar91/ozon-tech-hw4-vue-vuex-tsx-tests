import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import Card from "@/components/card.vue";

import { FETCH_USERS_ACTION } from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Card.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);

    wrapper = mount(Card, {
      localVue,
      store,
    });
  });

  it("should correctly renders markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
