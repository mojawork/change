import {Component, Prop, Vue} from "vue-property-decorator";
import {iTextAnimation} from "@/components/main/text-animation/text-animation.interface";


@Component
export default class GlobalTextAnimation extends Vue {

    @Prop({required: true})
    private options!: iTextAnimation;


    get letters(): Array<string> {
        return this.options.text.split('');
    }


    private filterLetter(item: string): string {
        if (item === ' ') {
            item = '&nbsp;';
        }
        return item;
    }

    private cssStyles(index: number): string {
        return `
            animation-delay: ${index * 0.075 + 0.5}s;
            animation-iteration-count: ${this.options.count};
            `;
    }

    //  --- Lifecycle hooks ---
    private mounted() {

    }

}


