// Module 3 Intermediate Labs

// Exercise 1

function ucFirstLetters(str) {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

}
console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters("san antonio"))
console.log(ucFirstLetters("new york city"))


// Exercise 2

// a)
function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + "...";
    } else {
        return str;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))

// b)
function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate('This text will be truncated if it is too long', 25));


// Exercise 3

// a)
const animals = ['Tiger', 'Giraffe']
animals.push('Lion', 'Elephant')
console.log(animals)

// b)
animals.unshift('Turtle', 'Bear')
console.log(animals)

// c)
animals.sort()
console.log(animals)

// d)
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals.splice(middleIndex, 1, newValue)
}

replaceMiddleAnimal('newValue'); // replaces Giraffe with newValue
console.log(animals);


// e)
function findMatchingAnimals(beginsWith) {
    const lowerCaseStart = beginsWith.toLowerCase();
    return animals.filter(animal =>
        animal.toLowerCase().startsWith(lowerCaseStart)
    );
}

console.log(findMatchingAnimals('T'));
console.log(findMatchingAnimals('t'));


// Exercise 4
// a)
function camelCase(cssProp) {
let result = '';
let capitalizeNext = false;

for (let i = 0; i < cssProp.length; i++) {
    if (cssProp[i] === '-') {
        capitalizeNext = true;
    } else {
        result += capitalizeNext ? cssProp[i].toUpperCase() : cssProp[i];
        capitalizeNext = false;
    }
}

return result;
}

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('display'));

// b)
function camelCase(cssProp) {
    let result = '';
    let capitalizeNext = false;

    for (const char of cssProp) {
        if (char === '-') {
            capitalizeNext = true;
        } else {
            result += capitalizeNext ? char.toUpperCase() : char;
            capitalizeNext = false;
        }
    }
    return result;
}

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('display'));

// c)
function camelCase(cssProp) {
    const parts = cssProp.split('-');
    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {
        result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }
    return result;
}

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('display'));


// Exercise 5

let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen)

// a)
// the above code returns the wrong answer because it is performing string concatenation instead of numeric addition.

// b)
function currencyAddition(float1, float2) {
    const factor = 100;
    return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(currencyAddition(0.1, 0.2));
console.log(0.3 == currencyAddition(0.1, 0.2));

// c) - the below is commented out to make D work
// function currencyOperation(float1, float2, operation) {
//     const factor2 = 100;
//     const int1 = Math.round(float1 * factor2);
//     const int2 = Math.round(float2 * factor2);
//     let result;

//     switch (operation) {
//         case '+':
//             result = (int1 + int2) / factor2;
//             break;
//     }
// }

// d)

function currencyOperation(float1, float2, operation, numDecmials = 2) {
    const factor2 = Math.pow(10, numDecimals);
    const int1 = Math.round(float1 * factor2)
    const int2 = Math.round(float2 * factor2)
    let result;

    switch (operation) {
        case '-':
            result = (int1 - int2) / factor2;
            break;
            default:
                throw new Error('Invalid operation');
    }
    return Number(result.toFixed(numDecimals));
}


// Exercise 6

function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colors));
console.log(unique(testScores));

const vegetables = ['carrot', 'squash', 'broccoli', 'carrot', 'turnip', 'onion', 'onion'];
console.log(unique(vegetables));


// Exercise 7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a)
function getBookTitle(bookId) {
    const book = books.find(b => b.id === bookId);
    return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3));


// b)
function getOldBooks() {
    return books.filter(b => b.year < 1950);
}

console.log(getOldBooks());


// c)
function addGenre() {
    return books.map(b => ({ ...b, genre: 'classic' }));
}

console.log(addGenre());


// d)
function getTitles(authorInitial) {
    return books
    .filter(b => b.author.startsWith(authorInitial))
    .map(b => b.title);
}

console.log(getTitles('G'));
console.log(getTitles('H'));


// e)
function latestBook() {
    let latestYear = 0;
    let latest = null;

    books.forEach(b => {
        if (b.year > latestYear) {
            latestYear = b.year;
            latest = b;
        }
    });

    return latest;
}

console.log(latestBook());


// Exercise 8

const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a)
const phoneBookDEF = new Map()

// b)
phoneBookDEF.set('Debra', '0436885421')
phoneBookDEF.set('Emily', '0479665332')
phoneBookDEF.set('Frank', '0412225874')

// c)
phoneBookABC.set('Caroline', '0417445296')

// d)
function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
        console.log(`${name}: ${number}`)
    })
}

console.log("PhoneBook ABC:")
printPhoneBook(phoneBookABC)

// e)
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

// f)
console.log("\nCombined PhoneBook:")
printPhoneBook(phoneBook)


// Exercise 9

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

// a)
function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}
console.log(sumSalaries(salaries));

// b)
function topEarner(salaries) {
    let highest = 0;
    let topPerson = "";

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > highest) {
            highest = salary;
            topPerson = name;
        }
    }
    return topPerson;
}
console.log(topEarner(salaries));


// Exercise 10

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')

// a)
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b)
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c)
const birthDate = new Date('1998-04-28');
let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

console.log(`I am ${ageYears} years, ${ageMonths} months and ${ageDays} days old`);

// d)
function daysInBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = Math.abs(date2 - date1);
    return Math.floor(diffInTime / oneDay);
}

const date1 = new Date('2025-01-01');
const date2 = new Date('2025-10-01');
console.log(daysInBetween(date1, date2));