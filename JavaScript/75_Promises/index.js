// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                     PENDING --> RESOLVED or REJECTED
//                     new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

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

            const trashTakenOut = false;

            if(trashTakenOut){
            resolve("Take out trash ");
            }
            else{
                reject("You DIDN'T take out trash")
            }

        }, 1000);
    });

}

walkDog().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
                .then(value => {console.log(value); console.log("DONE✅")})
                .catch(error => console.error(error));
/*
//CALLBACK HELL
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("DONE✅")
        });
    });

});
*/