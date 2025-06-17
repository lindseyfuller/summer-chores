let name= 'Lindsey';

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard`);
        callback(weedEat);
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.01) {
            console.log(`${name} finished using the weed eater`);
            callback(trimHedges);
        } else {
            console.log(`${name} fell asleep after mowing the yard`);
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.05) {
            console.log(`${name} finished trimming the hedges`);
             callback();
        } else {
            console.log(`${name} fell asleep after weed eating the yard`);
        }
    }, 1000);

}

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() >0.03) {
            console.log(`${name} finished collecting the wood`);
            callback();  
        } else  {
            console.log(`${name} fell asleep after trimming the hedges`);
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() >0.01) {
            console.log(`${name} finished watering the garden`);
            callback();  
        } else  {
            console.log(`${name} fell asleep after collecting wood`)
        }
            }, 500);
}

function doSummerChores(name)
{
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        finishedChores(name);
                    });
                });
            });
        });
    });
}



function finishedChores(name)
{
    console.log(`${name} finished all their chores!`);
}

doSummerChores("Lindsey");
