// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
  return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers);
};

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
