'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const stores = ["pdxAirport", "pioneerSquare", "powell", "stJohn", "waterfront"];


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//code from Marty and Charly Help
//populates saleByHour property of object with array of hour and numCookies
Store.prototype.hourSale = function () {
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

//constructor function for stores
function Store (name,min,max,avgCookie) {
    
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.hours = hours;    
    this.storeTotal = 0
    this.hourSale();
    for(let i = 0; i < this.hours.length; i ++){
        this.storeTotal += this.salesByHour[i].cookiesSold;
    }
    console.log(this.name + 'this is storeTotal ' + this.storeTotal);
    
        
    
    // this.render = render
    
}



//creates the table header 
function renderTimes(){
    const table = document.getElementById('firstRow');
    const blank = document.createElement('th');
    blank.textContent = ' ';
    table.appendChild(blank);
    
    for (let i =0; i < hours.length; i++){
    const head = document.createElement('th');
    head.textContent = hours[i];
    table.appendChild(head);
    
    }
}

renderTimes();


//creates table footer that is the sum of the column
function renderFooter(){
    const foot = document.getElementById('tfoot');
    const total = document.createElement('td');
    foot.appendChild(total);
}


//constructor function that lets stores create their row of table data
Store.prototype.renderStore = function (){
    
    const body = document.getElementById('tableBody');
    const row = document.createElement('tr');
    body.appendChild(row);
    const name = document.createElement('td')
    name.textContent = this.name;
    row.appendChild(name);
    for (let i = 0; i < hours.length; i++){
        
        const td = document.createElement('td');
        td.textContent = this.salesByHour[i].cookiesSold;
        row.appendChild(td);
    }
    // table.appendChild(body);
}

const form = document.getElementById('newStore');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('event happened');
    const name = document.getElementById('name').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const avg = document.getElementById('avg').value;

    const newStore = new Store(name,min,max,avg);
    newStore.hourSale();
    newStore.renderStore();
});









const pdxAirport = new Store ('PDX Airport',23,65,6.3);
console.log(pdxAirport);
const pioneerSquare = new Store('Pioneer Square', 3,24,1.2);
const powell = new Store('Powell\'s',11,38,3.7);
const stJohn = new Store('St John',20,38,2.3);
const waterfront = new Store('Waterfront', 2,16,4.6);

waterfront.renderStore();

pdxAirport.renderStore();

pioneerSquare.renderStore();

powell.renderStore();

stJohn.renderStore();


//code to navigate table from https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
// const mybody = document.getElementsByTagName("body")[0];
// const mytable = mybody.getElementsByTagName("table")[0];
const mytablebody = document.getElementsByTagName("tbody")[0];
const myrow = mytablebody.getElementsByTagName("tr")[0];
const mycel = myrow.getElementsByTagName("td")[1];

// // first item element of the childNodes list of mycel
const myceltext=mycel.childNodes[0];
console.log(myceltext);

// // content of currenttext is the data content of myceltext
// currenttext=document.createTextNode(myceltext.data);
// mybody.appendChild(currenttext);


// console.log(mytablebody);

console.log(myrow);
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
// const div = document.getElementById('div');
// const h2 = document.createElement('h2');
// h2.textContent = pdxAirport.name;
// div.appendChild(h2);

// const list = document.getElementById('ul');
// for( let i = 0; i < pdxAirport.salesByHour.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = pdxAirport.salesByHour[i].hour + ' - ' + pdxAirport.salesByHour[i].cookiesSold
//         list.appendChild(li);
//     }
    
    
// const pioneerSquare = {        
//     name: 'Pioneer Square',
//     min: 3,
//     max: 24,
//     avgCookie: 1.2,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
//     }
    
   
    // const pioneerdiv = document.getElementById('pioneerDiv');
    // const pioneerh2 = document.createElement('h2');
    // pioneerh2.textContent = pioneerSquare.name;
    // pioneerdiv.appendChild(pioneerh2);
    
    // const pioneerlist = document.getElementById('pioneerUl');
    // for( let i = 0; i < pioneerSquare.salesByHour.length; i++) {
    //         const li = document.createElement('li');
    //         li.textContent = pioneerSquare.salesByHour[i].hour + ' - ' + pioneerSquare.salesByHour[i].cookiesSold;
    //         pioneerlist.appendChild(li);
    //     }
    
//     const powell = {
//     name: 'Powell\'s',
//     min: 11,
//     max: 38,
//     avgCookie: 3.7,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }


// const powelldiv = document.getElementById('powellDiv');
// const powellh2 = document.createElement('h2');
// powellh2.textContent = powell.name;
// powelldiv.appendChild(powellh2);

// const powellList = document.getElementById('powellUl');
// for( let i = 0; i < powell.salesByHour.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = powell.salesByHour[i].hour + ' - ' + powell.salesByHour[i].cookiesSold;
//         powellList.appendChild(li);
//     }




// const stJohn = {
//     name: 'St John',
//     min: 20,
//     max: 38,
//     avgCookie: 2.3,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }


// const stJohnDiv = document.getElementById('stJohnDiv');
// const stJohnh2 = document.createElement('h2');
// stJohnh2.textContent = stJohn.name;
// stJohnDiv.appendChild(stJohnh2);

// const stJohnList = document.getElementById('stJohnUl');
// for( let i = 0; i < powell.salesByHour.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = stJohn.salesByHour[i].hour + ' - ' + stJohn.salesByHour[i].cookiesSold;
//         stJohnList.appendChild(li);
//     }


// const waterfront = {
//     name: 'Waterfront',
//     min: 2,
//     max: 16,
//     avgCookie: 4.6,
//     custPerHour: getRandomIntInclusive,
//     salesByHour: hourSale,
//     // render: render
// }



// const waterfrontDiv = document.getElementById('waterfrontDiv');
// const waterfronth2 = document.createElement('h2');
// waterfronth2.textContent = waterfront.name;
// waterfrontDiv.appendChild(waterfronth2);

// const waterfrontList = document.getElementById('waterfrontUl');
// for( let i = 0; i < powell.salesByHour.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = waterfront.salesByHour[i].hour + ' - ' + waterfront.salesByHour[i].cookiesSold;
//         waterfrontList.appendChild(li);
//     }

