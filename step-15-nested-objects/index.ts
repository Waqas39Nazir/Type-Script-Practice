interface IAuthor {
  firstName: string;
  lastName: string;
}

interface IBook {
  name: string;
  author: IAuthor;
}

let book: IBook;

book = {
  name: "Accursed World",
  author: {
    firstName: "Waqas",
    lastName: "Nazir",
  },
};

console.log("Book:", book);
