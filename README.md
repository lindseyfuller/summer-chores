# summer-chores
Project Title: Summer Chores To Do List

Description: Assignment to illustrate how to do callbacks, promises, and async and await functions. Times could be changed to complete all chores.

Installation Instructions/Usage: Clone the repo and use node js to run program

Examples: 
Callbacks:
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard`);
        callback(weedEat);
    }, 2000);
}

Promises:
function mowYard(name) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`${name} mowed the yard`);
    }, 2000);
    }) 
}

Async and Await:
async function doSummerChores(name)
{
    try {
        const mowYardResult = await mowYard(name);
        console.log(mowYardResult);

        const weedEatResult = await weedEat(name);
        console.log(weedEatResult);

Contributing:N/A

License: N/A

Credits: N/A