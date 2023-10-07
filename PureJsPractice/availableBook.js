//------Code in Class------

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  checkAvailablility(numCopies) {
    if (numCopies === 0) {
      return "Out of Stocks";
    } else if (numCopies <= 10) {
      return `${this.numCopies}`;
    } else {
      return "In Stock";
    }
  }

  sell(numCopies) {
    if (this.checkAvailablility(numCopies) > 0) {
      this.numCopies = this.numCopies - numCopies;
      return `You have sold ${numCopies} copies`;
    }
  }

  restock(num) {
    if (this.numCopies < 10) {
      this.numCopies = this.numCopies + num;
      return `Total stock is updated with ${this.numCopies}`;
    }
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);

    this.edition = edition;
  }

  getEdition() {
    return this.edition;
  }
}

const Book1 = new TechnicalBook(
  "bhagvadGeeta",
  "krishna",
  3438477949,
  10,
  30.209
);

console.log(Book1.sell(2));
console.log(Book1.numCopies);
console.log(Book1.getEdition());

//-----------code in function----------------------

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.checkAvailability = function () {
//   if (this.numCopies === 0) {
//     return "Out of Stock";
//   } else if (this.numCopies <= 10) {
//     return `Low Stock: ${this.numCopies} copies left`;
//   } else {
//     return "In Stock";
//   }
// };

// Book.prototype.sell = function (numCopies) {
//   if (this.checkAvailability() === "In Stock" && numCopies <= this.numCopies) {
//     this.numCopies -= numCopies;
//     return `You have sold ${numCopies} copies. Remaining: ${this.numCopies} copies`;
//   } else if (
//     this.checkAvailability() === "Low Stock" &&
//     numCopies <= this.numCopies
//   ) {
//     this.numCopies -= numCopies;
//     return `You have sold ${numCopies} copies. Hurry, low stock! Remaining: ${this.numCopies} copies`;
//   } else if (this.checkAvailability() === "Out of Stock") {
//     return "Sorry, out of stock!";
//   } else {
//     return "Invalid quantity or stock level.";
//   }
// };

// Book.prototype.restock = function (num) {
//   this.numCopies += num;
//   return `Stock has been replenished. Total stock: ${this.numCopies} copies`;
// };

// const Book1 = new Book("Bhagavad Gita", "Krishna", 3438477949, 10);

// console.log(Book1);
// console.log(Book1.checkAvailability());

// console.log(Book1.sell(5)); // Sell 5 copies
// console.log(Book1.sell(10)); // Try to sell 10 more copies
// console.log(Book1.checkAvailability());

// console.log(Book1.restock(20)); // Add 20 copies to stock
// console.log(Book1.checkAvailability());
