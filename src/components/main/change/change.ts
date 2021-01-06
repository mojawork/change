import {Component, Prop, Vue} from "vue-property-decorator";
import GlobalTextAnimation from "@/components/main/text-animation/text-animation.vue";
import {eTextAnimationNames} from "@/components/main/text-animation/text-animation.interface";
import {IMainChange} from "@/components/main/change/change.interface";

@Component({
    components: {
        GlobalTextAnimation
    },
})
export default class MainChange extends Vue {
    @Prop({required: false})
    public options!: IMainChange

    public textAnimationNames = eTextAnimationNames;

    //  --- Lifecycle hooks ---
    private mounted() {

    }
}
