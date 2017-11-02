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
    const totals = document.createElement('th');
    totals.textContent = "Store Totals";
    table.appendChild(totals);
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
    const total = document.createElement('td');
    total.textContent = this.storeTotal;
    row.appendChild(total);
}

const form = document.getElementById('newStore');
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const avg = document.getElementById('avg').value;

    const newStore = new Store(name,min,max,avg);
   
    newStore.renderStore();
});









const pdxAirport = new Store ('PDX Airport',23,65,6.3);

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
// const mytablebody = document.getElementsByTagName("tbody")[0];
// const myrow = mytablebody.getElementsByTagName("tr")[0];
// const mycel = myrow.getElementsByTagName("td")[1];

// // // first item element of the childNodes list of mycel
// const myceltext=mycel.childNodes[0];
// console.log(myceltext);

// // // content of currenttext is the data content of myceltext
// // currenttext=document.createTextNode(myceltext.data);
// // mybody.appendChild(currenttext);


// // console.log(mytablebody);

// console.log(myrow);

// const tableLength = myrow.length
// console.log(tableLength);