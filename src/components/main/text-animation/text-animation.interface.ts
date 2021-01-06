import {Prop} from "vue-property-decorator";

export enum eTextAnimationNames {
    zoomInOut = 'zoomInOut',
    scaleX = 'scaleX',
    moveIn = 'moveIn',
}

export interface  iTextAnimation {
    text: string;
    count:  string | number;
    animation : eTextAnimationNames
}
