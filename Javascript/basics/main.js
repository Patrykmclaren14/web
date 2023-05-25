/* // var, let, const

const isCool = true;

console.log(isCool)

const Patryk = null;

console.log(typeof isCool)

//

const name = 'Patryk'
const age = 18

console.log('My name is '+ name +' and I am ' + age +' years old')

const Hello = 'My name is Patryk and I am 18 years old'

console.log(Hello.length)
console.log(Hello.toUpperCase())
console.log(Hello.substring(0,7))

const g = 'technology, computers, it, code'

console.log(g.split(',')) */

// Arrays 

/* const fruits = ['bananas', 'apples', 'oranges', 'pears']

fruits[3] = 'grapes' //changing 3 th place in array

fruits.push('mangos') // adding to array

fruits.unshift('strawberries') //adding to 0 th place array

fruits.pop();

console.log(Array.isArray('fruits'))

console.log(fruits.indexOf('oranges'))

console.log(fruits) */

// Dict

/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName)
console.log(person.address.city)
console.log(person.hobbies[1])

const {firstName, lastName, address: {city}} = person;

console.log(firstName)
console.log(city)

person.email = 'john@gmail.com' */

// 

/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].id)
console.log(todos[2].text)
console.log(todos[0].isCompleted)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON) */

// For

/* 
for(let i = 0; i < 100; i++ ) {
    console.log(i)
}

let i = 0

while(i<10) {
    i ++
    console.log(i)
}

 */
/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
]


for(let todo of todos) {
    console.log(todo.text)
}


//

const todoText = todos.map(function(todo) {
    return todo.text
})

const todoId = todos.filter(function(todo) {
    return todo.id
}).map(function(todo) {
    return todo.text
})

console.log(todoText)
console.log(todoId) */


// if

/* const x = 2;

if(x === 10) {
    console.log('x is 10')
} 
else if(x > 10) {
    console.log('x is greater than 10')
}

else {
    console.log('x is not 10')
} */

// switch

/* const a = '2'

const color = 'green'

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is NOT red or blue')
        break
} */


// function 

/* function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}

let b = addNums(5, 5);

console.log(b)

const addNums2 = (num1 = 1, num2 = 2) => num1 + num2


console.log(addNums2(5, 12)) */

// Constructor function

/* function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

// Instantiate object

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}
 */

// class

/* class Person {
    constructor(firstName,lastName,dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName

    }
}



const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Merry', 'Smith', '6-12-1984')

console.log(person1.firstName)
console.log(person2.lastName)
console.log(person2.dob)

console.log(person2.getBirthYear())

console.log(person2.getFullName()) */


// Single element 

/* const form = (document.getElementById('my-form'))
console.log(document.querySelector('.container')) */

// Multiple selection 

/* console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li')) */


/* const items = document.getElementsByClassName('.item')

items.forEach((item) => console.log(item)) */

/* const ul = document.querySelector('.items') */

/* ul.remove() */

/* ul.lastElementChild.remove() */

/* ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h4> Hello </h4>' */

/* const btn = document.querySelector('.btn')

btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
/*     console.log(e.target.className) 
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>' 
}) */


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault()
/* 
    console.log(nameInput.value) */

    if(nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + ' ' + ":" + ' ' + emailInput.value))
        userList.appendChild(li)

        // Clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}






