'use strict';

const Person = function (firsName, birthYear, job) {
  this.firsName = firsName;
  this.birthYear = birthYear;
  this.job = job;
};

const max = new Person('Maxim', 1989, 'truck driver');
console.log(max);
