// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Civic", model: "Honda ", year: 2000 },
  { make: "Rush", model: "Toyota ", year: 1995 },
  { make: "Vezel", model: "Honda ", year: 2010 },
];

//asceding mane boro 0 theke 10 example

const ascendingOrder = (carsArray) => {
  const copy = carsArray.slice();

  //sort by ascending year
  copy.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });

  return copy;
};

console.log(ascendingOrder(cars));
