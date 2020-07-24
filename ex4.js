var f = function () {
    return 1
};
var g = function (a, b) {
    return add(multiply(2, a), b)
};
var h = function (x, y) {
    print("x =", x);
    print("y =", y);
    return g(x, y)
};
var result = h(3, 4);
print("result =", result)
print("f =", f())
print("g(f f) =", g(f(), f()))
function print(...args) {
    console.log(...args);
}

function add(x, y) {
    return x + y;
}

function concat(s1, s2) {
    return s1 + s2;
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

function eq(x, y) {
    return x === y;
}

function $if(cond, consequent, alternate) {
    if (cond) {
        return consequent();
    } else {
        return alternate();
    }
}