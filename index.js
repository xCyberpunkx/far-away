const ing = {
    flavors: ["vanilla", "lemon", "strawberry"],
    cupholder: ["cone", "cup"],
    topping: ["flakes", "fruits", "maple syrup"]
};

const placeOrder = (flavorIndex, callProd) => {
    setTimeout(() => {
        console.log(`${ing.flavors[flavorIndex]} flavor was selected`);
        callProd();
    }, 2000);
};

const production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log(`${ing.flavors[0]} flavor was selected`);
            
            setTimeout(() => {
                console.log(`${ing.cupholder[0]} was selected`); // Selecting 'cone' for example

                setTimeout(() => {
                    console.log("Machine has started");

                    setTimeout(() => {
                        console.log(`${ing.topping[0]} topping was selected`); // Selecting 'flakes' for example

                        setTimeout(() => {
                            console.log("Order is served");
                        }, 1000); // Serve the order
                        
                    }, 1000); // Select topping

                }, 1000); // Start machine

            }, 1000); // Select cupholder

        }, 1000); // Select flavor

    }, 0); // Start production
};

// Execute the process
placeOrder(0, production); // Choosing 'vanilla' flavor as an example
