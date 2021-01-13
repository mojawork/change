import {IMainChange} from "@/components/main/change/change.interface";
import {eMainTextAnimationNames} from "@/components/main/text-animation/text-animation.interface";

export const data: Array<IMainChange> = [
    {
        headline: 'Vader',
        animation: eMainTextAnimationNames.scaleX
    },
    {
        headline: 'Master',
        animation: eMainTextAnimationNames.zoomInOut
    },
    {
        headline: 'Mario',
        animation: eMainTextAnimationNames.moveIn
    },

    {
        headline: 'sonic',
        animation: eMainTextAnimationNames.moveIn
    },
    {
        headline: 'harley',
        animation: eMainTextAnimationNames.moveIn
    },
    {
        headline: 'deadpool',
        animation: eMainTextAnimationNames.moveIn
    },
    {
        headline: 'crash',
        animation: eMainTextAnimationNames.moveIn
    }
]

export const imageSet: Array<string> = [
    'vader',
    'master',
    'mario',
    'sonic',
    'harley',
    'deadpool',
    'crash'
];