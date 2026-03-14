"use strict";

// 問題1用オブジェクト
const user = {
  id: 1,
  name: "Taro",
  details: {
    age: 25,
    email: "taro@example.com",
  },
};

const {
  name,
  details: { age, email },
} = user;
console.log(name, age, email);
console.log(`ユーザ名: ${name}, 年齢: ${age}, Email: ${email} `);

// 問題2

// 2-1
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    console.log(`商品名: ${this.name}, 価格: ${this.price}円`);
  }
}

// 2-2
class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

// 2-3
const book = new Book("人間失格", "850", "太宰治");
console.log(book);
book.getInfo();

// 2-4
const bookWithStock = { ...book, stock: 10 };
console.log(bookWithStock);
