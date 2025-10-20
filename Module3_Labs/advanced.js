// Exercise 1

function makeCounter() {
    let currentCount = 0;

    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();

counter1();
counter1();

// a)
let counter2 = makeCounter();

counter1();
counter1();
counter2();
counter2();

// b)
function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}
let counter3 = makeCounter(0);
let counter4 = makeCounter(10);

counter3();
counter3();
counter4();
counter4();

// c)
function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter5 = makeCounter(0, 1);
let counter6 = makeCounter(10, 5);

counter5();
counter5();
counter6();
counter6();


// Exercise 2

function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// a)
// Order printed: #4, #3, #2, #1
// #4 has no delay, #3 prints after 0ms (not immediately), #2 prints after 20ms, #1 prints after 100ms


// b)
const delayMsg2 = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

console.log(delayMsg2());

// c)
const timeoutId = setTimeout(delayMsg, 12000, '#5: Delayed by 13 seconds');

// d)
clearTimeout(timeoutId);


// Exercise 3

function printMe() {
    console.log('printing debounced message')
}

printMe = debounce(printMe);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// a)
function debounce(func) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 1000);
    };
}

// b)
function debounce(func, ms = 1000) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, ms);
    };
}
printMe = debounce(printMe, 1000);

// c)
function debounce(func, ms = 1000) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), ms);
    };
}

setTimeout(() => printMe('first'), 100);
setTimeout(() => printMe('second'), 200);
setTimeout(() => printMe('third'), 300);


// Exercise 4

function printFibonacci () {
    let a = 0, b = 1;
    console.log(b)

    setInterval(() => {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }, 1000);
}
// printFibonacci(); //commented out to not have constant numbers when testing

// b)
function printFibonacciTimeouts() {
    let a = 0, b = 1;

    function printNext() {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;

        setTimeout(printNext, 1000);
    }

    console.log(b);
    setTimeout(printNext, 1000);
}

// printFibonacciTimeouts(); //commented out to not have constant numbers when testing

// c)
function printFibonacci(limit) {
    let a = 0, b = 1;
    let count = 1;
    console.log(b);

    const intervalId = setInterval(() => {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
        count++;

        if (count >= limit) {
            clearInterval(intervalId);
            console.log("Finished printing.");
        }
    }, 1000);
}

// printFibonacci(9); //commented out to not have constant numbers when testing


// Exercise 5

let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();

setTimeout(car.description, 200);

// a)
setTimeout(() => car.description(), 200);

// b)
let newCar = { ...car, year: 2025 };
newCar.description();

// c)
// it uses the current values because it looks up properties dynamically from the car object at time of execution.

// d)
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);

// e)
let newerCar = { ...car, model: "Cayenne" };
setTimeout(boundDescription, 200);


// Exercise 6

function multiply(a, b) {
    console.log( a * b );
}

// multiply.delay(500)(5, 5);

// a)
Function.prototype.delay = function(ms) {
    const originalFunc = this;
    return function(a, b) {
        setTimeout(() => originalFunc(a, b), ms);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5);

// b)
Function.prototype.delay = function(ms) {
    const originalFunc = this;
    return function(...args) {
        setTimeout(() => originalFunc.apply(this, args), ms);
    };
};

multiply.delay(500)(2, 5);

// c)
function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(500)(1, 2, 3, 4);


// Exercise 7

class DigitalClock {

    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

const myClock = new DigitalClock('my clock:')
// myClock.start(); //commented out to not clog up console

// a)
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const preciseClock = new PrecisionClock('precise clock:', 200);
// preciseClock.start(); //commented out to not clog up console

// b)
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        super.display();

        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let mins = now.getMinutes().toString().padStart(2, '0');
        let currentTime = `${hours}:${mins}`;

        if (currentTime === this.wakeupTime) {
            console.log('Time to wake up!');
            this.stop();
        }
    }
}

const alarm = new AlarmClock('alarm clock:', '07:00');
// alarm.start(); //commented out to not clog up console


// Exercise 8

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const ValidatedOrderItem = validateStringArg(orderItems);

// console.log(validatedOrderItem("Apple Watch"));
// console.log(validatedOrderItem(123));

// a)
function validateStringArg(fn) {
    return function(arg) {
        if (typeof arg !== 'string') {
            throw new Error(`Invalid argument: ${arg} is not a string`);
        }
        return fn(arg);
    };
}

const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch"));

// b)
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}

console.log(orderItems("Apple Watch", "iPhone", "iPad"));

// c)
function validateStringArg(fn) {
    return function(...args) {
        for (let arg of args) {
            if (typeof arg !== 'string') {
                throw new Error(`Invalid argument: ${arg} is not a string`);
            }
        }
        return fn(...args);
    };
}

// d)
const validatedOrderItem2 = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem2("Apple Watch", "iPhone", "iPad"));
} catch (err) {
    console.error(err.message);
}

try {
    console.log(validatedOrderItem2("Apple Watch", 123));
} catch (err) {
    console.error(err.message);
}


// Exercise 9

function randomDelay() {
    // a)
    const delaySeconds = Math.floor(Math.random() * 20) + 1;
    const delayMs = delaySeconds * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
    // b)
    if (delaySeconds % 2 === 0) {
        resolve(delaySeconds);
    } else {
        reject(delaySeconds);
    }
    }, delayMs);
    });
}

// c) & d)
randomDelay()
.then((delay) => {
    console.log(`Success. Delay of ${delay} seconds completed.`);
})
.catch((delay) => {
    console.log(`Failed. Delay of ${delay} seconds was odd.`);
});


// Exercise 10

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });

    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

// a)
async function fetchURLDataAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
}

(async () => {
    try {
        const data = await fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
    } catch(err) {
        console.error(err.message);
    }
})();

// b)
(async () => {
    try {
        const data = await fetchURLDataAsync('https://jsonplaceholder.typicode.com/invalid');
        console.log(data);
    } catch(err) {
        console.error(err.message);
    }
})();

// c)
async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLDataAsync(url));
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (err) {
        throw new Error(`Fetch request failed: ${err.message}`);
    }
}

(async () => {
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://jsonplaceholder.typicode.com/todos/3'
    ];

    try {
        const results = await fetchMultipleURLs(urls);
        console.log(results);
    } catch (err) {
        console.error(err.message);
    }
})();