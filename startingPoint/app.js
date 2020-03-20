/**
 * This stores our menu in our JS file and adds all the menu items to our HTML page
 */
const menu = [
    {name: 'Burger', qty: 10},
    {name: 'Fries', qty: 10},
    {name: 'Shakes', qty: 10}
];
let displayMenu = document.getElementById('menu');
for(item of menu) {
    displayMenu.innerHTML += `${item.name}, `;
};

/**
 * Eventlistener for submit button to run everytime button is clicked 
 */
let submitBtn = document.getElementById('submitBtn');
let showOrder = document.getElementById('showOrder');
submitBtn.addEventListener('click', () => {
    // We need to get value out of input box everytime they click the submit order button 
    let customerOrder = document.getElementById('order');
    // This is where we take user input and just write it to webpage
    showOrder.innerHTML = customerOrder.value;
    let order = parseOrder(customerOrder.value);
    console.log(order);
    /**
     * Compare your order object to your menu object to see if the names in the order object match that of the menu object
     * see if the qty's in the order object are less than that of the menu object and if all are true then you want to subtract
     * the qty ordered from the qty in your menu.
     * For in loop, inside of that for in loop your going to need some if else if else stmts 
     */
    
    customerOrder.value = '';
});

/**
 * Takes a string from the user and converts into an array where each element of the array 
 * is an object that contains the name of the item and the qty ordered.
 * @param {a string input from the user} customerOrder 
 */
function parseOrder(customerOrder) {
    // "apple: 2, orange: 4" <- this is what we are starting with
    // [{name: apple, qty: 2}, {name: orange, qty: 4}] <- this is what we want to turn that string into 
    // just wanted to know how it would look on the webpage
    const parsedObj = [];
    let parsedInput = customerOrder
        .split(',')
        .map(x => x.trim())
        .map(y => y.split(':'))
        .map(z => z.map(q => q.trim()))
    for(item of parsedInput) {
        let obj = {
            name: item[0],
            qty: item[1]
        };
        parsedObj.push(obj);
    }
    return parsedObj;
};