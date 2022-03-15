import { getScreenWidth } from "../../Common/helper";


// colors setting
export const comparisionColor = "#700B97"
export const foundColor = "#00ADB5"
export const visistedColor = "#FF0000"

// time setting
export let compareTime = 500;

// init array
export let searchingArray = initArrayForScreenSize();

export const searchingAlgorithms = [
    {title: "Linear", name: "Linear Search"},
    {title: "Binary", name: "Binary Search"},
]

function initArrayForScreenSize() {
    const screenSize = getScreenWidth();
    if (screenSize < 460) return [4, 3, 2, 1];
    else if (screenSize < 720) return [8, 7, 6, 5, 4, 3, 2, 1];
    return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }