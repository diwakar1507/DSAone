import Sorting from "./Sorting/SortPlayground";
import Searching from "./Searching/SearchPlayground";

let Visualizations = [
  {
    index: 1,
    name: "Sorting",
    page: Sorting,
  },
  {
    index : 2,
    name: "Searching",
    page: Searching,
  }
];

export function getVisualizations() {
  return Visualizations;
}

export function getVisualizer(number) {
  return Visualizations.find((Visualizer) => Visualizer.index === number).page;
}
