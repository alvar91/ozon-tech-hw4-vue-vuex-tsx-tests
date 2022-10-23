import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import InputDate from "@/components/input-date.vue";

import { mockUserId, mockUser, mockUserAge } from "../../mock/mockUser";

import {
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
} from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

const { age } = mockUser;
describe("InputDate.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);
    store.commit(SET_CURRENT_USER, mockUserId);
  });

  it("should correctly renders markup with default props", () => {
    wrapper = mount(InputDate, {
      localVue,
      propsData: {
        title: "Дата рождения",
        name: "age",
        value: { age },
      },
      store,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correctly input data and change the store", () => {
    wrapper = mount(InputDate, {
      localVue,
      propsData: {
        title: "Дата рождения",
        name: "age",
        value: { age },
      },
      store,
    });

    const input = wrapper.find(".card__input");
    input.element.value = mockUserAge;
    input.trigger("input");

    expect(store.getters.currentUser.age).toBe(mockUserAge);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
