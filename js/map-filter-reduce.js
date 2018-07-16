
"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    }
];
// Problem 2
let newUsers = users.filter((user) => {
    return user.languages.length >= 3;
});

console.log(newUsers);


// Problem 3
let userEmailString = users.map(user => user.email);

console.log(userEmailString);

// Problem 4
let reducedArrayObject = users.reduce((accumulation, user) => {
    accumulation+= user.id: user;
        // [user.id] = user;
    return accumulation;
}, {});



console.log(reducedArrayObject);

