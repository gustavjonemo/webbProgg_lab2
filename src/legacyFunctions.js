//"use strict";
//const imported = require("./inventory.ES6.js");

export default class Salad {
  static instanceCounter = 0;

  constructor() {
    this.ingredients = {};
    this.uuid = "salad_" + Salad.instanceCounter++;
  }

  add(name, properties) {
    this.ingredients[name] = properties;
    return this;
  }

  remove(name) {
    delete this.ingredients[name];
    return this;
  }
}

Salad.prototype.getPrice = function getPrice() {
  return Object.values(this.ingredients).reduce((totPrice, price) => {
    return totPrice + price["price"];
  }, 0);
};

Salad.prototype.count = function count(type) {
  return Object.values(this.ingredients).reduce((count, prop) => {
    if (!!prop[type]) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};
