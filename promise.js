const ing = {
    flavors: ["vanilla", "lemon", "strawberry"],
    cupholder: ["cone", "cup"],
    topping: ["flakes", "fruits", "maple syrup"]
};

const isOpen = false;

const order = (time, work) => {
   return new Promise((resolve, reject) => { 
        if (isOpen) {
           setTimeout(() => {
               resolve(work());
           }, time);    
        } else {
           reject(console.log("Sorry, we are closed"));
        }
    });
};

// Execute the sequence of actions in order
order(2000, () => console.log(`${ing.flavors[0]} was added`))
    .then(() => order(1000, () => console.log(`${ing.cupholder[0]} was added`)))
    .then(() => order(1000, () => console.log("Machine was started")))
    .then(() => order(1000, () => console.log(`${ing.topping[0]} was added`)))
    .then(() => order(500, () => console.log("Customer served")))
    .catch(() => console.error("Customer left")).finally(() => setTimeout( ( ) => {console.log("Day Ended")} , 2000) );
