"use strict";

function wait (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, number);

    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// wait.then(() => console.log('You\'ll see this after ' + number + ' seconds'));



// ***************Personal Access Token Exercise *****



const access = (username) => {
    const token = 'e4e29eeb74c1c4da15dab81adfaaddfaeb08e47b';
    const url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${token}`}})
       .then(response => response.json())
        .then(results => results[0].created_at)
        .then(results => console.log(results))
};

access('amos-davis');