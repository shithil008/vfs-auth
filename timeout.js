// timeout.js
function delayedFunction(callback, delay) {
    setTimeout(() => {
        callback();
    }, delay);
}

// Example usage: This function can be called from any script that imports this file
function exampleFunction() {
    console.log("This function was delayed!");
}

// To use this function with a delay
delayedFunction(exampleFunction, 3000); // Delays the exampleFunction by 3000 milliseconds (3 seconds)
