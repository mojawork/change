import axios from "axios";
import store from "@/store";
import {staticData} from "@/data/data"

export class dataService {

    public staticData(): void {
        store.state.data = staticData
        store.commit("updateState", store.state);
    }

    public data(query:  string) {

        axios({
            method: "POST",
            url: '',

            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },

        }).then(
            result => {
                store.state.data = result.data;
                store.commit("updateState", store.state);
            },
            error => {
                console.error('error')
            }
        );
    }

}
