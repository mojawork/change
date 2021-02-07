import {IMainChange} from "@/components/main/change/change.interface";
import {eMainTextAnimationNames} from "@/components/main/text-animation/text-animation.interface";

export const data: Array<IMainChange> = [
    {
        headline: 'Vader',
        animation: eMainTextAnimationNames.scaleX,
        count: 0
    },
    {
        headline: 'Master',
        animation: eMainTextAnimationNames.zoomInOut,
        count: 0
    },
    {
        headline: 'Mario',
        animation: eMainTextAnimationNames.moveIn,
        count: 0
    },

    {
        headline: 'sonic',
        animation: eMainTextAnimationNames.moveIn,
        count: 0
    },
    {
        headline: 'harley',
        animation: eMainTextAnimationNames.zoomInOut,
        count: 0
    },
    {
        headline: 'deadpool',
        animation: eMainTextAnimationNames.scaleX,
        count: 0
    },
    {
        headline: 'crash',
        animation: eMainTextAnimationNames.moveIn,
        count: 0
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