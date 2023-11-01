import Mountain from "./models/Mountain";

// export const findNameOfTallestMountain = () => {};
// export const mountains: Mountain[] = [];


export const mountains: Mountain[] = [
    {
      name: "Kilimanjaro",
      height: 19341,
    },
    {
      name: "Everest",
      height: 29029,
    },
    {
      name: "Denali",
      height: 20310,
    },
  ];

 export const findNameOfTallestMountain = (mountains: Mountain[]): string => {
    if (mountains.length === 0) {
        return ""; 
      }
    
      let tallestMountain: Mountain = mountains[0];
    
      for (const mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
          tallestMountain = mountain;
        }
      }
    
      return tallestMountain.name;
    };