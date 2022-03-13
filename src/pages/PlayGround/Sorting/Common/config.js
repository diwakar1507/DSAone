import { getScreenWidth } from "./helper.js";
import { BubbleSort } from "../SortFunctions/BubbleSort";
import { SelectionSort } from "../SortFunctions/SelectionSort";
import { InsertionSort } from "../SortFunctions/InsertionSort";
import { QuickSort } from "../SortFunctions/QuickSort";
import { HeapSort } from "../SortFunctions/HeapSort";
import { MergeSort } from "../SortFunctions/MergeSort";

// colors setting
export const comparisionColor = "#700B97";
export const swapColor = "#FF8BA0";
export const sortedColor = "#00ADB5";
export const pivotColor = "#FF0000";

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [4, 3, 2, 1];
  else if (screenSize < 720) return [8, 7, 6, 5, 4, 3, 2, 1];
  return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}