
export enum eMainTextAnimationNames {
    zoomInOut = 'zoomInOut',
    scaleX = 'scaleX',
    moveIn = 'moveIn',
}

export interface  iTextAnimation {
    text: string;
    count:  string | number;
    animation : eMainTextAnimationNames
}
