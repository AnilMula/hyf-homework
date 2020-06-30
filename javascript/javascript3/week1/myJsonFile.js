const myComputers = {
  firstComputer: {
    boughtInYear: 2002,
    type: "desktop",
    RAM: "256MB",
    processsor: ["IntelPentium5", "2.0GHZ"],
  },
  secondComputer: {
    boughtInYear: 2011,
    type: "laptop",
    RAM: "2GB",
    processsor: ["IntelPentium", "2.0GHZ"],
  },
  ThirdComputer: {
    boughtInYear: 2020,
    type: "laptop",
    RAM: "4GB",
    processsor: ["IntelCore i5", "2.0GHZ"],
  },
};
console.log(myComputers);

const myJsonFile = JSON.stringify(myComputers);
console.log(myJsonFile);
