'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//code from Marty and Charly Help
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

function Store (name,min,max,avgCookie) {
    
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    
    this.salesByHour = hourSale;
    // this.render = render
}

const pdxAirport = new Store ('PDX Airport',23,65,6.3);
const pioneerSquare = new Store('Pioneer Square', 3,24,1.2);
const powell = new Store('Powell\'s',11,38,3.7);
const stJohn = new Store('St John',20,38,2.3);
const waterfront = new Store('Waterfront', 2,16,4.6);







// const pdxAirport = {
//     name: 'PDX Airport',
//     min: 23,
//     max: 65,
//     avgCookie: 6.3,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
    
    
// }
// pdxAirport.render();
pdxAirport.salesByHour();
// pdxAirport.render();


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
    
    
// const pioneerSquare = {        
//     name: 'Pioneer Square',
//     min: 3,
//     max: 24,
//     avgCookie: 1.2,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
//     }
    pioneerSquare.salesByHour();
   
    const pioneerdiv = document.getElementById('pioneerDiv');
    const pioneerh2 = document.createElement('h2');
    pioneerh2.textContent = pioneerSquare.name;
    pioneerdiv.appendChild(pioneerh2);
    
    const pioneerlist = document.getElementById('pioneerUl');
    for( let i = 0; i < pioneerSquare.salesByHour.length; i++) {
            const li = document.createElement('li');
            li.textContent = pioneerSquare.salesByHour[i].hour + ' - ' + pioneerSquare.salesByHour[i].cookiesSold;
            pioneerlist.appendChild(li);
        }
    
//     const powell = {
//     name: 'Powell\'s',
//     min: 11,
//     max: 38,
//     avgCookie: 3.7,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }
powell.salesByHour();

const powelldiv = document.getElementById('powellDiv');
const powellh2 = document.createElement('h2');
powellh2.textContent = powell.name;
powelldiv.appendChild(powellh2);

const powellList = document.getElementById('powellUl');
for( let i = 0; i < powell.salesByHour.length; i++) {
        const li = document.createElement('li');
        li.textContent = powell.salesByHour[i].hour + ' - ' + powell.salesByHour[i].cookiesSold;
        powellList.appendChild(li);
    }




// const stJohn = {
//     name: 'St John',
//     min: 20,
//     max: 38,
//     avgCookie: 2.3,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }
stJohn.salesByHour();

const stJohnDiv = document.getElementById('stJohnDiv');
const stJohnh2 = document.createElement('h2');
stJohnh2.textContent = stJohn.name;
stJohnDiv.appendChild(stJohnh2);

const stJohnList = document.getElementById('stJohnUl');
for( let i = 0; i < powell.salesByHour.length; i++) {
        const li = document.createElement('li');
        li.textContent = stJohn.salesByHour[i].hour + ' - ' + stJohn.salesByHour[i].cookiesSold;
        stJohnList.appendChild(li);
    }


// const waterfront = {
//     name: 'Waterfront',
//     min: 2,
//     max: 16,
//     avgCookie: 4.6,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }

waterfront.salesByHour();

const waterfrontDiv = document.getElementById('waterfrontDiv');
const waterfronth2 = document.createElement('h2');
waterfronth2.textContent = waterfront.name;
waterfrontDiv.appendChild(waterfronth2);

const waterfrontList = document.getElementById('waterfrontUl');
for( let i = 0; i < powell.salesByHour.length; i++) {
        const li = document.createElement('li');
        li.textContent = waterfront.salesByHour[i].hour + ' - ' + waterfront.salesByHour[i].cookiesSold;
        waterfrontList.appendChild(li);
    }

const stores = ["pdxAirport", "pioneerSquare", "powell", "stJohn", "waterfront"];
