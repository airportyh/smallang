var x1 = 4;
var y1 = 8;
var x2 = 5;
var y2 = 12;
var dist = sqrt(add(pow(subtract(x1, x2), 2), pow(subtract(y1, y2), 2)));
print("The distance is", dist)
function print(...args) {
    console.log(...args);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function pow(x, y) {
    return Math.pow(x, y);
}