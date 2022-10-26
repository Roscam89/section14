'use strict';

const Person = function (firstName, birthYear, job) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.job = job;
};

const max = new Person('Maxim', 1989, 'truck driver');
Person.hey = function () {
  // console.log('Hey');
};
//Person.hey();

//console.log(max);
//console.log(max instanceof Person);

//=============Prototypes===========//
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// max.calcAge();

// console.log(max.__proto__);
// console.log(max.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(max));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
//console.log(max.hasOwnProperty('firstName'));
//console.log(max.hasOwnProperty('species'));

const arr = [3, 6, 6, 5, 6, 9, 9];

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

//------------------------------------------------

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
// console.log(mercedes);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  // console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  // console.log(`${this.make} going at ${this.speed} km/h`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

//=====Classes=====//

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    // console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      this.fullName = `${name} Snow`;
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('heey');
  }
}

const maxim = new PersonCl('Maxim Rosca', 1989);
const john = new PersonCl('John', 1900);
const constantine = new PersonCl('Constantine', 1902);
// console.log(maxim);
// console.log(constantine);
// console.log(john);
//maxim.calcAge();
//console.log(maxim.age);

//=======Setters and getters====//

const account = {
  owner: 'maxim',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
//console.log(account.latest);
account.latest = 50;
//console.log(account.movements);

//PersonCl.hey();

//--------Object create------------//

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2010;
//steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2002);
//sarah.calcAge();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speedUS} mi/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speedUS} mi/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speedUS = spd * 1.6;
    console.log(spd);
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford);

//console.log(ford.speedUS);
