// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Arbindo", author: "Abdul", year: "2000" },
  { title: "Leaflet", author: "JPG", year: "2001" },
  { title: "House of fire", author: "Kalam", year: "2002" },
];

const bookTitleNames = () => {
  const bookTitle = books.map((b) => b.title);
  return bookTitle;
};

console.log(bookTitleNames());
