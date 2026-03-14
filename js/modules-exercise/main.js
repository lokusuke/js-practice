import createMessage, { isAdult } from "./userUtils.js";

const adultUser = {
  name: "Hiroku",
  age: 34,
};

const childUser = {
  name: "Jiro",
  age: 15,
};

console.log(createMessage(adultUser));
console.log(createMessage(childUser));
