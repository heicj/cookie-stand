'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


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
        const numCookies = Math.round(custPerHour * this.avgCookie);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
}










// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const ul = document.createElement('ul');

// for (let i = 0; i < fruits.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = fruits[i];
//     ul.appendChild(li);
// }

// // add the ul to the dom...
// document.body.appendChild(ul);




const pdxAirport = {
    name: 'PDX Airport',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    custPerHour: getRandomIntInclusive,
    salesByHour: hourSale,
    // render: render
    
    
}
// pdxAirport.render();
pdxAirport.salesByHour();
// pdxAirport.render();
console.log(pdxAirport);
console.log(pdxAirport.salesByHour[1]);

// function render() {
//     const div = document.getElementById('div');
//     const h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     div.appendChild(h2);
    
//     const list = document.getElementById('ul');
//     for( let i = 0; i < this.salesByHour.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.salesByHour[i].hour + ' ' + this.salesByHour[i].cookiesSold
//         list.appendChild(li);
//     }   
// }
const div = document.getElementById('div');
const h2 = document.createElement('h2');
h2.textContent = pdxAirport.name;
div.appendChild(h2);

const list = document.getElementById('ul');
for( let i = 0; i < pdxAirport.salesByHour.length; i++) {
        const li = document.createElement('li');
        li.textContent = pdxAirport.salesByHour[i].hour + ' - ' + pdxAirport.salesByHour[i].cookiesSold
        list.appendChild(li);
    }
    
    
    const pioneerSquare = {
        name: 'Pioneer Square',
        min: 3,
        max: 24,
        avgCookie: 1.2,
        custPerHour: getRandomIntInclusive,
        hourSale: hourSale,
        // render: render
    }
    
    // console.log(pioneerSquare.custPerHour(pioneerSquare.min,pioneerSquaree.max));
    
    const powell = {
        name: 'Powell\'s',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale,
    // render: render
}

// console.log(pioneerSquare.custPerHour(powell.min,powell.max));


const stJohn = {
    name: 'St John',
    min: 20,
    max: 38,
    avgCookie: 2.3,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale,
    // render: render
}


const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avgCookie: 4.6,
    custPerHour: getRandomIntInclusive,
    hourSale: hourSale,
    // render: render
}

const stores = ["pdxAirport", "pioneerSquare", "powell", "stJohn", "waterfront"];
// for (let i = 0; i < stores.length; i ++){
//     stores[i].render();
// }

// console.log('this is waterfront custperHour ' + waterfront.custPerHour())

// const cars = [pinto, tesla, gremlin];

// const ul = document.getElementById('car-list');

// for(let i = 0; i < cars.length; i++) {
    //     const li = cars[i].render();
    //     ul.appendChild(li);
    // }
    
    