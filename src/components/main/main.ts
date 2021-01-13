import {Component, Vue} from "vue-property-decorator";
import MainChange from "@/components/main/change/change.vue";
import {IMainChange} from "@/components/main/change/change.interface";
import { imageSet, data } from "@/data/data";

@Component({
    components: {
        MainChange
    }
})
export default class Main extends Vue {
    public data: Array<IMainChange> = data;
    public imageSet: Array<string> = imageSet;
}