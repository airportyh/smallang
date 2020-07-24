var convert_number_to_roman = function (number) {
    return convert_number_to_roman_helper(number, 1)
};
var convert_number_to_roman_helper = function (number, place) {
    return $if(eq(number, 0), function () {
        return ""
    }, function () {
        var digit = modulus(number, 10);;
        var right_part = convert_digit_to_roman(digit, place);;
        var remaining = floor(divide(number, 10));;
        var left_part = convert_number_to_roman_helper(remaining, add(place, 1));;
        return concat(left_part, right_part)
    })
};




var convert_digit_to_roman = function (digit, place) {
    return $if(eq(digit, 0), function () {
        return ""
    }, function () {
        return $if(or(eq(digit, 1), or(eq(digit, 2), eq(digit, 3))), function () {
            return repeat(one(place), digit)
        }, function () {
            return $if(eq(digit, 4), function () {
                return concat(one(place), five(place))
            }, function () {
                return $if(eq(digit, 5), function () {
                    return five(place)
                }, function () {
                    return $if(or(eq(digit, 6), or(eq(digit, 7), eq(digit, 8))), function () {
                        return concat(five(place), repeat(one(place), subtract(digit, 5)))
                    }, function () {
                        return $if(eq(digit, 9), function () {
                            return concat(one(place), one(add(place, 1)))
                        }, function () {
                            return concat("!", "!")
                        })
                    })
                })
            })
        })
    })
};
var one = function (place) {
    return at("IXCMↂ", subtract(place, 1))
};
var five = function (place) {
    return at("VLDↁ", subtract(place, 1))
};









each(range(1, 10001), function (number) {
    var roman = convert_number_to_roman(number);;
    return print(concat(number, concat(" = ", roman)))
})
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

function modulus(x, y) {
    return x % y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function pow(x, y) {
    return Math.pow(x, y);
}

function floor(x) {
    return Math.floor(x);
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

function or(cond1, cond2) {
    return cond1 || cond2;
}

function at(arrayLike, index) {
    return arrayLike[index];
}

function repeat(string, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function each(arr, fun) {
    arr.forEach(fun);
}