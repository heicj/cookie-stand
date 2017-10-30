const pdxAirport = {
    min: 23,
    max: 65,
    avgCookie: 6.3,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    custPerHour: function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            
        }
    }
console.log(pdxAirport.custPerHour);

const pioneerSquare = {
    min: 3,
    max: 24,
    avgCookie: 1.2
}


const powell = {
    min: 11,
    max: 38,
    avgCookie: 3.7
}


const stJohn = {
    min: 20,
    max: 38,
    avgCookie: 2.3
}


const waterfront = {
    min: 2,
    max: 16,
    avgCookie: 4.6
}