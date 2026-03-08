"use strict";

console.log("chap4-exercise.jsが読み込まれました！");

// practice 1
const calculateTicketPrice = (age) => {
  if (age <= 12) {
    return 500;
  } else if (age >= 13 && age <= 18) {
    return 1000;
  } else {
    return 1800;
  }
};

const ticketPrice = calculateTicketPrice(3);

console.log(ticketPrice);

// practice 2
const sumArray = (numbers) => {
  let result = 0;

  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  } else {
    return result;
  }
};

let numbers = [];
console.log(sumArray(numbers));

// practice 3
function createUser(lastName, firstName) {
  const user = {
    lastName: lastName,
    firstName: firstName,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return user;
}

const user1 = createUser("Suzuki", "Hiroku");
console.log(user1.getFullName()); // Hiroku Suzuki
