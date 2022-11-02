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
  console.log(`${this.make} going at ${this.speed} km/h`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
//bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
//mercedes.brake();
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
    // console.log(`${this.make} going at ${this.speedUS} mi/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speedUS = spd * 1.6;
    console.log(spd);
  }
}

//const ford = new CarCl('Ford', 120);

// // ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.brake();
// ford.accelerate();
//console.log(ford);

//console.log(ford.speedUS);

//=====================Inheritance between "Classes", using constructor functions=======//

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes//

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};

const mike = new Student('Michael', 2001, 'Computer Science');
//mike.introduce();
//mike.calcAge();

//=====Challenge==//

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  // console.log(`
  // ${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
//tesla.brake();
tesla.accelerate();
//tesla.brake();
tesla.accelerate();

//console.log(tesla);

//===Inheritance between "Classes", using ES6 classes==//

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer science');
//martha.introduce();
//martha.calcAge();

//=============Inheritance between "Classes", Object.create()==//

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jaycob', 1999, 'Computer Science');
//jay.introduce();
//jay.calcAge();

//=====class ex====//

class Account {
  //public fields
  locale = navigator.language;
  //private fields
  #pin;
  #movements;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = [];
  }

  getMovement() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  //private method
  #approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
      return this;
    }
  }
}

const acc1 = new Account('Maxim', 'USD', 2846);
acc1.deposit(200);
acc1.withdraw(260);

acc1.requestLoan(1000);
//====Chaining======= //
acc1
  .deposit(1000)
  .deposit(1000)
  .withdraw(200)
  .requestLoan(10000)
  .withdraw(1000)
  .deposit(2000);
//console.log(acc1);

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`
     ${this.make} going at ${this.speed} km/h with a charge of ${
      this.#charge
    }%`);
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  // brake() {
  //  this.speed -= 5;
  // this.#charge++;
  // console.log(
  //   `${this.make} going at ${this.speed} km/h with a charge of ${
  //    this.#charge
  //   }%`
  //  );
  //  return this;
  // }
}

const rivian = new EVCL('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(33).accelerate().brake();
console.log(rivian);
