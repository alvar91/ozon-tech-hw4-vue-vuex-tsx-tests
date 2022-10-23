import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import InputRadio from "@/components/input-radio.vue";

import {
  mockUserId,
  mockUser,
} from "../../mock/mockUser";

import {
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
} from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

const { gender } = mockUser;
describe("InputRadio.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);
    store.commit(SET_CURRENT_USER, mockUserId);
  });

  it("should correctly renders markup with default props", () => {
    wrapper = mount(InputRadio, {
      localVue,
      propsData: {
        title: "Пол",
        name: "gender",
        value: { gender },
      },
      store,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correctly input data and change the store", () => {
    wrapper = mount(InputRadio, {
      localVue,
      propsData: {
        title: "Пол",
        name: "gender",
        value: { gender },
      },
      store,
    });

    const prevGender = store.getters.currentUser.gender;

    const inputs = wrapper.findAll(".card__input-radio");
    const maleInput = inputs.at(0);
    const femaleInput = inputs.at(1);

    if (store.getters.currentUser.gender === "male") {
      femaleInput.trigger("change");
    } else {
      maleInput.trigger("change");
    }

    expect(store.getters.currentUser.gender).not.toBe(prevGender);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
