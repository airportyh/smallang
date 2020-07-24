var fib = function (n) {
    return $if(eq(n, 1), function () {
        return 1
    }, function () {
        return $if(eq(n, 2), function () {
            return 1
        }, function () {
            return add(fib(subtract(n, 1)), fib(subtract(n, 2)))
        })
    })
};
var result = fib(7);
print("The answer is", result)
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