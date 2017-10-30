// 'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function hourlyTotal(perHour,cookie) {
    perHour = this.custPerHour;
    cookie = this.avgCookie;
    return (perHour * cookie);
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];




const pdxAirport = {
    min: 23,
    max: 65,
    avgCookie: 6.3,
    custPerHour: getRandomIntInclusive,
    hourlyTotal: hourlyTotal
}

// console.log(pdxAirport.hourlyTotal());
console.log(pdxAirport.custPerHour());

const pioneerSquare = {
    min: 3,
    max: 24,
    avgCookie: 1.2,
    custPerHour: getRandomIntInclusive,
}
console.log(pioneerSquare.custPerHour());

const powell = {
    min: 11,
    max: 38,
    avgCookie: 3.7,
    custPerHour: getRandomIntInclusive
}


const stJohn = {
    min: 20,
    max: 38,
    avgCookie: 2.3,
    custPerHour: getRandomIntInclusive
}


const waterfront = {
    min: 2,
    max: 16,
    avgCookie: 4.6,
    custPerHour: getRandomIntInclusive
}

console.log('this is waterfront custperHour ' + waterfront.custPerHour())