// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (input === true) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}