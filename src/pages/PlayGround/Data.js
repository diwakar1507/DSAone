import Sorting from "./Sorting/SortPlayground";

let Visualizations = [
  {
    index: 1,
    name: "Sorting",
    page: Sorting,
  },
];

export function getVisualizations() {
  return Visualizations;
}

export function getVisualizer(number) {
  return Visualizations.find((Visualizer) => Visualizer.index === number).page;
}
