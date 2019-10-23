//Variables
const name='Simeone';
const age= 21;


// Concatenate
console.log('my name is ' + name + ' and I am ' + age)

const hello =`My name is ${name} and I am ${age}`;

console.log(hello)

const b = 30
const s = 'Hello World';
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toUpperCase())
console.log(b.toString())
console.log(s.substring(0,7).toUpperCase())

// convert strings to arrays
const f = 'nene, praise, tobi, python';


console.log(f.split(''));

console.log(f.split(', '))


// Arrays

const numbers = new Array(1,2,3,4);

console.log(numbers);

const fruits = ['apple','oranges','pears'];

console.log(fruits);

const heroes = new Array('arrow','flash','knightwing');
console.log(heroes);
console.log(heroes[1])
heroes[3] = 'supergirl'
console.log(heroes[3])
heroes.push('starfire')
console.log(heroes);

heroes.unshift('batman')
console.log(heroes[0])

heroes.pop()
console.log(heroes)


console.log(Array.isArray(heroes));
console.log(Array.isArray(fruits));

console.log(heroes.indexOf('arrow'))





// Object literals

const person = {
    firstname:'Kalson',
    lastname:'Saint',
    age:28,
    hobbies:['music','code','movies'],
    address: {
        street: '50 javastreet',
        city:'vscode',
        state:'localhost'
    }


}

console.log(person)

console.log(person.hobbies[1])

console.log(person.address.city)

const { firstname,lastname, address:{ city }}= person;

console.log(firstname)
console.log(city) 

person.email = 'kalson@gmail.com'
person.club = 'Barcelona'

console.log(person)

const todos = [
    {
        id:1,
        text: 'Go to work',
        isCompleted:true
    },
    {
        id:2,
        text: 'Study Django',
        isCompleted:false
    },
    {
        id:3,
        text: 'Study Javascript',
        isCompleted:false
    }
]

console.log(todos)

console.log(todos[1].text)

//Convert to JS

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)


//For loops