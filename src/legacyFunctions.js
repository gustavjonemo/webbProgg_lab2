"use strict";

const imported = require("./inventory.ES6.js");

//console.log('\n--- Assignment 1 ---------------------------------------');

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function makeOptions(inventory, type) {
  return Object.keys(inventory)
    .filter((name) => inventory[name][type])
    .map(
      (name) =>
        '<option value="' +
        name +
        '"> ' +
        name +
        ", " +
        inventory[name]["price"] +
        " kr</option>\n"
    )
    .reduce((acc, curr) => acc + curr);
}

//console.log('\n--- Assignment 2 ---------------------------------------')

class Salad {
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

//console.log('\n--- Assignment 3 ---------------------------------------')

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

//console.log('\n--- Assignment 4 ---------------------------------------')

class GourmetSalad extends Salad {
  add(name, properties, size = 1) {
    let propertiesWithSize = { ...properties, size: 0 };
    if (!!this.ingredients[name]) {
      propertiesWithSize["size"] = this.ingredients[name]["size"] + size;
    } else {
      propertiesWithSize["size"] = size;
    }
    super.add(name, propertiesWithSize);
    return this;
  }

  getPrice() {
    return Object.values(this.ingredients).reduce((totPrice, ingr) => {
      return totPrice + ingr["price"] * ingr["size"];
    }, 0);
  }
}

//console.log('\n--- Assignment 5 ---------------------------------------')

//console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);
