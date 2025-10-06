// Exercise 1

console.log("" + 1 + 0) // answer is 10
console.log("" - 1 + 0) // answer is -1
console.log(true + false) // answer is 1
console.log(!true) // answer is false
console.log(6 / "3") // answer is 2
console.log("2" * "3") // answer is 6
console.log(4 + 5 + "px") // answer is 9px
console.log("$" + 4 + 5) // answer is $45
console.log("4" - 2) // answer is 2
console.log("4px - 2") // answer is 4px - 2
console.log("  -9  " + 5) // answer is -9  5
console.log("  -9  " - 5) // answer is -14
console.log(null + 1) // answer is 1
console.log(undefined + 1) // answer is NaN
console.log(undefined == null) // answer is true
console.log(undefined === null) // answer is false
console.log(" \t \n" - 2) // answer is -2


// Exercise 2

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // 34
let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1

let lessThan1 = three < four // true
let lessThan2 = thirty < four // true because the "3" in "30" comes before "4" in lexicographical order. 

// the addition is not giving the right answer because "3" and "4" are strings so they equal 34 instead of 7.
// this can be fixed by doing +three + +four .


// Exercise 3

// the three messages that will print are:
if ("0") console.log('#2 zero is true') // because it is a non-empty string
if (-1) console.log('negative is true') // because it is a non-zero number
if (1) console.log('positive is true') // because it is a non-zero number

// the two messages that will not print are:
if (0) console.log('#1 zero is true') // because it has zero value
if (null) console.log('null is true') // because it has no value


// Exercise 4

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// result += (a + b < 10) ? 'less than 10' : 'greater than 10';
// console.log(result);

let a = 7, b = 6;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';
console.log(result);

// += adds something to an existing variable.


// Exercise 5

// a)
// const getGreeting = function(name) {
//     return 'Hello' + name + '!';
// };
// console.log(getGreeting(' Chase'));

// b)
const getGreeting = (name) => 'Hello' + name + '!';
console.log(getGreeting(' Chase'));


// Exercise 6

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers === 6 ? 'Prepare to die.' : 'Nice to meet you.'
  };

inigo.greeting(westley)
inigo.greeting(rugen)


// Exercise 7

const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow() {
        this.score++;
        return this;
    },

    basket() {
        this.score += 2
        return this;
    },

    threePointer() {
        this.score += 3;
        return this;
    },

    foul() {
        this.fouls++;
        return this;
    },

    halfTime() {
        console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
        return this;
    },

    fullTime() {
        console.log(`Final score is ${this.score}. Total fouls: ${this.fouls}`);
        return this;
    }
};

// basketballGame.freeThrow().basket().threePointer().foul().halfTime().fullTime()
basketballGame.basket().threePointer().freeThrow().foul().halfTime().fullTime()


// Exercise 8

// a)
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

for (let key in sydney) {
    console.log('key: ' + key);
    console.log('value: ' + sydney[key]);
}

// b)
const denver = {
    name: 'Denver',
    population: 729_019,
    state: 'Colorado',
    founded: '22 November 1858',
    timezone: 'Mountain Daylight Time'
}
for (let key in denver) {
    console.log('key: ' + key);
    console.log('value: ' + denver[key]);
}


// Exercise 9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a)
// let moreSports = teamSports;
// moreSports.push('Baseball');
// moreSports.unshift('Rugby');

// b)
let dog2 = dog1;
dog2 = 'Iris';

// c)
// let cat2 = cat1;
// cat2.name = 'Cosmo';

// d)
console.log(teamSports);
console.log(dog1);
console.log(cat1);
// teamSports changed because more values were added using push and unshift.
// cat1 was changed because the name value was changed when cat2's name value changed.

// e)
let moreSports = [...teamSports];
moreSports.push('Baseball');
moreSports.unshift('Rugby');

let cat2 = { ...cat1 };
cat2.name = 'Cosmo';

console.log(teamSports)
console.log(cat1)

// ^ commented out a & c to make the above work.


// Exercise 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}

// a)
const person1 = new Person('Chase', 27);

// b)
const person2 = new Person('Alex', 28);

// c)
console.log(person1);
console.log(person2);

// d)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
}
const person3 = new PersonClass('Nick', 25);
console.log(person3);

// e)
function Person(name ,age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function() {
        return this.age >= 16;
    };
}
const person4 = new Person('Luz', 14);
console.log(person4.canDrive());