'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function hourSale () {
    const salesByHour = [];
    for (let i = 0; i < hours.length; i++ ) {
        const hour = hours[i];
        const custPerHour = getRandomIntInclusive(this.min,this.max);
        const numCookies = custPerHour * this.avgCookie;
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;

}


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


const pdxAirport = {
    min: 23,
    max: 65,
    avgCookie: 6.3,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale
    
}

pdxAirport.hourSale();
console.log(pdxAirport);


// console.log('this is hourTotal ' + hourTotal);
// console.log('this is numperhour var ' + numPerHour);
// console.log(pdxAirport.custPerHour(pdxAirport.min,pdxAirport.max));

const pioneerSquare = {
    min: 3,
    max: 24,
    avgCookie: 1.2,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale
}

// console.log(pioneerSquare.custPerHour(pioneerSquare.min,pioneerSquaree.max));

const powell = {
    min: 11,
    max: 38,
    avgCookie: 3.7,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale
}

// console.log(pioneerSquare.custPerHour(powell.min,powell.max));


const stJohn = {
    min: 20,
    max: 38,
    avgCookie: 2.3,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale
}


const waterfront = {
    min: 2,
    max: 16,
    avgCookie: 4.6,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale
}

// console.log('this is waterfront custperHour ' + waterfront.custPerHour())