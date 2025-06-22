let name= 'Lindsey';

function mowYard(name) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`${name} mowed the yard`);
    }, 2000);

    }) 
}

function weedEat(name) {
    return new Promise ((resolve, reject) => {
          setTimeout(() => {
                if (Math.random() > 0.01) {
                     resolve(`${name} finished using the weed eater`);
                } else {
                    reject(`${name} fell asleep after mowing the yard`);
                }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                 resolve(`${name} finished trimming the hedges`);
            } else {
                reject(`${name} fell asleep after weed eating the yard`);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >0.03) {
                 resolve(`${name} finished collecting the wood`);
            } else  {
                 reject(`${name} fell asleep after trimming the hedges`);
            }
    }, 2500);

    }); 
}

function waterGarden(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >0.01) {
                 resolve(`${name} finished watering the garden`);
            } else  {
                 reject(`${name} fell asleep after collecting wood`);
            }
    }, 500);

    }); 
}



function doSummerChores(name)
{
    mowYard(name).then(value => { console.log(value); return weedEat(name) })
                 .then(value => { console.log(value); return trimHedges(name) })
                 .then(value => {console.log(value); return collectWood(name) })
                 .then(value => {console.log(value); return waterGarden(name) })
                 .then(value => {console.log(value); return finishedChores(name) })
                 .catch(error => console.error(error));
}
   

function finishedChores(name)
{
    console.log(`${name} finished all their chores!`);
}

doSummerChores("Lindsey");