let Props = [
    {
      index: 1,
      img: "pt-14"
    },
    {
      index: 2,
      img: "-translate-y-14 scale-75"
    },
    {
      index: 3,
      img: "translate-x-16 -translate-y-6 scale-90"
    },
    {
      index: 4,
      img: "translate-x-10 -translate-y-5"
    },
    {
      index: 5,
      img: "-translate-y-16 translate-x-4"
    },
    {
      index: 6,
      img: "-translate-y-16 translate-x-4"
    },
    {
      index: 7,
      img: "-translate-y-10"
    },
    {
      index: 8,
      img: " scale-75 -translate-y-10"
    }
  ];
  
  export function getStyle(number) {
    return Props.find((course) => course.index === number);
  }
  