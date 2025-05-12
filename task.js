//Task 1 -> Array filtering and Mapping - Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const humanObject = [
  { name: "Farhan", age: 20, gender: "male" },
  { name: "Abdul", age: 24, gender: "male" },
  { name: "Preeti", age: 22, gender: "female" },
];

const filterOutFemales = () => {
  const filter = humanObject.filter((person) => person.gender !== "female");
  const name = filter.map((person) => person.name);
  return name;
};

console.log(filterOutFemales());
