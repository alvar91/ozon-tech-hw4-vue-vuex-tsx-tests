import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import Select from "@/components/select.vue";

import { mockUserName, mockUserId, mockUser } from "../../mock/mockUser";

import {
  FETCH_USERS_ACTION,
  SET_CURRENT_USER,
} from "@/store/mutationsVariables";

import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

const { citizenship } = mockUser;
describe("Select.vue", () => {
  let wrapper;

  beforeEach(async () => {
    await store.dispatch(FETCH_USERS_ACTION);
    store.commit(SET_CURRENT_USER, mockUserId);
  });

  it("should correctly renders markup with default props", () => {
    wrapper = mount(Select, {
      localVue,
      propsData: {
        title: "Гражданство",
        name: "citizenship",
        value: { citizenship },
      },
      store,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correctly select data and change the store", () => {
    wrapper = mount(Select, {
      localVue,
      propsData: {
        title: "Гражданство",
        name: "citizenship",
        value: { citizenship },
      },
      store,
    });

    const oldCitizenship = store.getters.currentUser.citizenship;

    const select = wrapper.find("select");
    const options = select.findAll("option");

    let count = 0;
    while (options.at(count).text() === citizenship) {
      count++;
    }

    const newCitizenOption = options.at(count);
    select.element.value = newCitizenOption.text();
    select.trigger("change");

    expect(store.getters.currentUser.citizenship).not.toBe(oldCitizenship);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
