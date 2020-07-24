
convert_number_to_roman = (number) => 
    convert_number_to_roman_helper(number 1)

convert_number_to_roman_helper = (number place) => {
    if (eq(number 0)
        () => ""
        () => {
            digit = modulus(number 10)
            right_part = convert_digit_to_roman(digit place)
            remaining = floor(divide(number 10))
            left_part = convert_number_to_roman_helper(remaining add(place 1))
            concat(left_part right_part)
        }
    )
}

// Converts a single digit to roman numeral
// digit - is a number between 0 - 9
// place - is a number represening what place you are doing
//      the conversion for (1 - ones, 2 - tens, 3 - hundreds, 4 - thousands)
convert_digit_to_roman = (digit place) => {
    if (eq(digit 0)
        () => ""
        () => 
            if (or(eq(digit 1) or(eq(digit 2) eq(digit 3)))
                () => repeat(one(place) digit)
                () =>
                    if (eq(digit 4)
                        () => concat(one(place) five(place))
                        () =>
                            if (eq(digit 5)
                                () => five(place)
                                () =>
                                    if (or(eq(digit 6) or(eq(digit 7) eq(digit 8)))
                                        () => concat(five(place) repeat(one(place) subtract(digit 5)))
                                        () =>
                                            if (eq(digit 9)
                                                () => concat(one(place) one(add(place 1)))
                                                () => concat("!" "!")
                                            )
                                    )
                            )
                    )
            )
    )
}

one = (place) => at("IXCMↂ" subtract(place 1))
five = (place) => at("VLDↁ" subtract(place 1))

// print(convert_digit_to_roman(1 1))
// print(convert_digit_to_roman(2 1))
// print(convert_digit_to_roman(3 1))
// print(convert_digit_to_roman(4 1))
// print(convert_digit_to_roman(5 1))
// print(convert_digit_to_roman(6 1))
// print(convert_digit_to_roman(7 1))
// print(convert_digit_to_roman(8 1))
// print(convert_digit_to_roman(9 1))

each(range(1 10001)
    (number) => {
        roman = convert_number_to_roman(number)
        print(concat(number concat(" = " roman)))
    }
)