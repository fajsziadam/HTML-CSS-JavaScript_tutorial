// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
            resolve("Walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }

        }, 2000);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const kitchenCleaned = true;

            if(kitchenCleaned){
            resolve("Clean the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen")
            }

        }, 3000);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const trashTakenOut = true;

            if(trashTakenOut){
            resolve("Take out trash ");
            }
            else{
                reject("You DIDN'T take out trash")
            }

        }, 1000);
    });

}

async function doChores() {

    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("DONE✅");
    }
    catch(error){
        console.error(error);
    }
}

doChores();