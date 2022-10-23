import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import InputText from "@/components/input-text.vue";

import { mockUserName, mockUserId, mockUser } from "../../mock/mockUser";

import {
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
} from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

const { middleName } = mockUser;
describe("InputText.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);
    store.commit(SET_CURRENT_USER, mockUserId);
  });

  it("should correctly renders markup with default props", () => {
    wrapper = mount(InputText, {
      localVue,
      propsData: {
        title: "Фамилия",
        name: "middleName",
        value: { middleName },
        placeholder: "Фамилия",
        isDisabled: false,
        isWide: false,
      },
      store,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correctly renders markup with wided input", () => {
    wrapper = mount(InputText, {
      localVue,
      propsData: {
        title: "Фамилия",
        name: "middleName",
        value: { middleName },
        placeholder: "Фамилия",
        isDisabled: false,
        isWide: true,
      },
      store,
    });

    expect(wrapper.find(".card__field--wide").exists()).toBeTruthy();
  });

  it("should correctly renders markup and don`t change the store with disabled input", () => {
    wrapper = mount(InputText, {
      localVue,
      propsData: {
        title: "Фамилия",
        name: "middleName",
        value: { middleName },
        placeholder: "Фамилия",
        isDisabled: true,
        isWide: false,
      },
      store,
    });

    expect(wrapper.find(".card__field--disabled").exists()).toBeTruthy();

    const input = wrapper.find(".card__input");
    input.element.value = mockUserName;
    input.trigger("input");

    expect(store.getters.currentUser.middleName).not.toBe(mockUserName);
  });

  it("should correctly input data and change the store", () => {
    wrapper = mount(InputText, {
      localVue,
      propsData: {
        title: "Фамилия",
        name: "middleName",
        value: { middleName },
        placeholder: "Фамилия",
        isDisabled: false,
        isWide: false,
      },
      store,
    });

    const input = wrapper.find(".card__input");
    input.element.value = mockUserName;
    input.trigger("input");

    expect(store.getters.currentUser.middleName).toBe(mockUserName);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
