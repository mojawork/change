import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import GlobalTextAnimation from "@/components/main/text-animation/text-animation.vue";
import {eMainTextAnimationNames, iTextAnimation} from "@/components/main/text-animation/text-animation.interface";
import {IMainCangeDirection, IMainChange} from "@/components/main/change/change.interface";

@Component({
    components: {
        GlobalTextAnimation
    },
})
export default class MainChange extends Vue {

    @Prop({required: true})
    private options!: IMainChange;

    public direction = IMainCangeDirection;
    public topCount = this.options.count;
    public bottomCount =  this.options.count;

    public styleTop() {
        return 'margin-left:-' + this.topCount + '00%';
    }

    public styleBottom() {
        return 'margin-left:-' + this.bottomCount + '00%';
    }

    public moveTop(direction: IMainCangeDirection) {

        if (this.options.imageSet && this.topCount) {

            if (direction === this.direction.left) {
                if (this.topCount < this.options.imageSet.length - 1) {
                    this.topCount++;
                }
            }
            if (direction === this.direction.right) {
                if (this.topCount > 0) {
                    this.topCount--;
                }
            }
        }
    }

    public moveBottom(direction: IMainCangeDirection) {
        if (this.options.imageSet && this.bottomCount) {
            if (direction === this.direction.left) {
                if (this.bottomCount < this.options.imageSet.length - 1) {
                    this.bottomCount++;
                }
            }
            if (direction === this.direction.right) {
                if (this.bottomCount > 0) {
                    this.bottomCount--;
                }
            }
        }
    }

    //  --- Lifecycle hooks ---
    private mounted() {

    }
}
