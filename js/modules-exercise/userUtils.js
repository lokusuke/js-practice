"use strict";

// 問題3
// 3-1
export const isAdult = (user) => {
  if (user.age >= 20) {
    return true;
  }
  return false;
};

export default function createMessage(user) {
  const result = isAdult(user);

  if (result) {
    return `ようこそ、${user.name}さん。`;
  }
  return `${user.name}さんはまだ未成年です。`;
}
