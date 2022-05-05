let Props = [
  {
    index: 1,
    img: "-translate-y-12 scale-90",
  },
  {
    index: 2,
    img: "-translate-y-12 scale-90",
  },
  {
    index: 3,
    img: "-translate-y-20 translate-x-12 scale-125",
  },
  {
    index: 4,
    img: "-translate-y-10 scale-90",
  },
  {
    index: 5,
    img: "-translate-y-10 -translate-x-10 scale-125",
  },
  {
    index: 6,
    img: "-translate-y-10 scale-90",
  },
  {
    index: 7,
    img: "-translate-y-16 translate-x-16 scale-90",
  },
  {
    index: 8,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 9,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 10,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 11,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 12,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 13,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 14,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 15,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 16,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 17,
    img: "-translate-y-16 scale-90",
  },
  {
    index: 18,
    img: "-translate-y-16 scale-90",
  },
  
];

export function getStyle(number) {
  return Props.find((course) => course.index === number);
}
