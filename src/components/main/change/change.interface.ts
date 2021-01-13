import {eMainTextAnimationNames} from "@/components/main/text-animation/text-animation.interface";

export enum IMainCangeDirection {
    'left' = 'left',
    'right' = 'right'

}

export interface IMainChange {
    headline: string;
    animation:eMainTextAnimationNames;
    count?:number;
    imageSet?: Array<string>;
}