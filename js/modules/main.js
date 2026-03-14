"use strict";

import MyCalculator, { GREETING_MESSAGE as MESSAGE, double } from "./utils.js";

console.log("--- moduleの動作確認---");
console.log(MESSAGE);
console.log(double(5));
const calc = new MyCalculator();
console.log(calc.add(2, 3));
