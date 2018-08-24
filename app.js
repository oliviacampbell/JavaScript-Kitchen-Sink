let firstName = 'Olivia';
let middlename ='Caitlyn';
let lastName = 'Campbell';
let fullName = firstName + ' ' + middlename + ' ' + lastName;
console.log(fullName);
// console.log(firstName.charCodeAt(0));

const states = 50

let nine = 5 + 4;
console.log(nine);

if (firstName.charCodeAt(0) > 76 || firstName.charCodeAt(0) > 108) {
    alert('Back of the line!');
} else {
    alert('Next');
};

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
    };
}

checkAge('Charles', 21);

checkAge('Abby', 27);

checkAge('James', 18);

checkAge('Johnny', 17);

let vegetables = ['Corn', 'Carrots', 'Squash'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
};

let matthew = {
    name: 'Matthew',
    age: 26
};

let mollie = {
    name: 'Mollie',
    age: 20
};

let emily = {
    name: 'Emily',
    age: 43
};

let natasha = {
    name: 'Natasha',
    age: 39
};

let lennon = {
    name: 'Lennon',
    age: 1
};


let friends = [matthew, mollie, emily, natasha, lennon];

for (let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age); 
}

function getLength(word) {
    console.log(word.length);
    if (word.length % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    };
};

getLength("Hello World");

