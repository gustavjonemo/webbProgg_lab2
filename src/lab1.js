"use strict";
const imported = require("./inventory.ES6.js");

//console.log('\n--- Assignment 1 ---------------------------------------')

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function makeOptions(inventory, type) {
  return Object.values(inventory).reduce((ing, newing) => {
    if (!!newing[type]) {
      let name = getKeyByValue(inventory, newing);
      return (
        '<option value ="' +
        name +
        ">" +
        name +
        " ," +
        newing["price"] +
        "kr </option>\n"
      );
    } else {
      return ing;
    }
  }, "");
}

//console.log('\n--- Assignment 2 ---------------------------------------')

class Salad {
  constructor() {}
  add(name, properties) {
    this[name] = properties;
    return this;
  }
  remove(name) {
    delete this[name];
    return this;
  }
}

console.log("\n--- Assignment 3 ---------------------------------------");
/*
Salad.prototype.getPrice = function getPrice(){
    return Object.values(this).reduce((prev, curr) => {
        return prev + curr['price'];
    }, 0);

}
*/
Salad.prototype.getPrice = function getPrice() {
  return Object.values(this).reduce((prev, curr) => {
    return prev + curr["price"];
  }, 0);
};

Salad.prototype.count = function count(type) {
  return Object.values(this).reduce((prev, curr) => {
    return prev + curr["price"];
  }, 0);
};

console.log("En ceasarsallad kostar " + myCaesarSalad.getPrice() + "kr");
// En ceasarsallad kostar 45kr
//console.log('En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

// reflection question 3
/*
console.log('typeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype);
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad)));
console.log('check 2: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype)));
*/

console.log("\n--- Assignment 4 ---------------------------------------");
/*
let myGourmetSalad = new GourmetSalad()
.add('Sallad', imported.inventory['Sallad'], 0.5)
.add('Kycklingfilé', imported.inventory['Kycklingfilé'], 2)
.add('Bacon', imported.inventory['Bacon'], 0.5)
.add('Krutonger', imported.inventory['Krutonger'])
.add('Parmesan', imported.inventory['Parmesan'], 2)
.add('Ceasardressing', imported.inventory['Ceasardressing']);
console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 1)
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');
*/

console.log("\n--- Assignment 5 ---------------------------------------");
//console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);

/**
 * Reflection question 4
 */
/**
 * Reflection question 5
 */
/**
 * Reflection question 6
 */
En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

/* reflection question 3
Classes are represented as functions, which in turn inherit the Object prototype. 
myCeasarSallad is a prototype of Salad and thus typeOf myCeasarSallad === typeOf Salad.prototype.
All functions have a default prototype.
You get the next object in the prototype chain with the . operator 
*/


console.log('----- Reflection question 3 -----\n')
console.log('typeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype);
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad)));
console.log('check 2: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype)));


console.log('\n--- Assignment 4 ---------------------------------------')

class GourmetSalad extends Salad {

    add(name, properties, size = 1){
        let propertiesWithSize = {...properties, size: 0}
        if(!!this.ingredients[name]){
            propertiesWithSize['size'] = this.ingredients[name]['size'] + size;
        } else {
            propertiesWithSize['size'] = size;
        }
        super.add(name, propertiesWithSize);
        return this;
    };

    getPrice(){
        return Object.values(this.ingredients).reduce((totPrice, ingr) => {
            return totPrice + (ingr['price'] * ingr['size']);
        }, 0);
    }
    
}

let myGourmetSalad = new GourmetSalad()
.add('Sallad', imported.inventory['Sallad'], 0.5)
.add('Kycklingfilé', imported.inventory['Kycklingfilé'], 2)
.add('Bacon', imported.inventory['Bacon'], 0.5)
.add('Krutonger', imported.inventory['Krutonger'])
.add('Parmesan', imported.inventory['Parmesan'], 2)
.add('Ceasardressing', imported.inventory['Ceasardressing']);
console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 1)
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');


console.log('\n--- Assignment 5 ---------------------------------------')

console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);

/**
 * Reflection question 4
 * The salad object
 */
/**
 * Reflection question 5
 * Yes, with defineProperties()
 */
/**
 * Reflection question 6
 * Yes, with the # symbol
 */