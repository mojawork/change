import Vue from "vue";
import Vuex from "vuex";
import {IRootState} from "@/store/state.interface";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
    state: {
        data: {
            header: "header",
            main: null,
            footer: "footer",
        }
    },
    mutations: {
        // --- updateState ------------------------------------------------------------
        updateState(state: IRootState, payload: IRootState) {
            state = payload;
        }
    },
    actions: {},
    modules: {}
});
