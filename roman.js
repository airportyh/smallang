var toRoman = function (number) {
    return $if(eq(number, 1), function () {
        return "I"
    }, function () {
        return $if(eq(number, 2), function () {
            return "II"
        }, function () {
            return $if(eq(number, 3), function () {
                return "III"
            }, function () {
                return $if(eq(number, 4), function () {
                    return "IV"
                }, function () {
                    return $if(eq(number, 5), function () {
                        return "V"
                    }, function () {
                        return concat("V", toRoman(subtract(number, 5)))
                    })
                })
            })
        })
    })
};
print("1 >", toRoman(1))
print("2 >", toRoman(2))
print("3 >", toRoman(3))
print("4 >", toRoman(4))
print("5 >", toRoman(5))
print("6 >", toRoman(6))
print("7 >", toRoman(7))
print("8 >", toRoman(8))
print("9 >", toRoman(9))
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