import Vue from "vue";
import Vuex from 'vuex';
import { createVuexStore } from "vuex-simple";

// @ts-ignore
import { MainModule } from "./modules/main/main.ts";

Vue.use(Vuex);

const store = createVuexStore(new MainModule());

export default store;
