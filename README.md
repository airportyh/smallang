# Small Lang

Small Lang is a small programming language which you are do build yourself
as your first programming language. It is a part of [a course for learning
how to build a programming language using JavaScript](https://www.youtube.com/watch?v=5CS0CNVsn4I&list=PLSq9OFrD2Q3DasoOa54Vm9Mr8CATyTbLF).

This language is small, as its name suggests. But it is also powerful
as it follows the example of LISP in leveraging the expressive power of
lambda functions.

## Features

* numbers
* strings
* variables
* functions
* lambda functions
* other data types (like arrays and dictionaries) can be supported via
adding runtime functions

## Code Example

The following code example contains all of the features of the language:

```
print("Hello, world")
print("3 + 5 =" add(3 5))

hello = (subject) => {
    print(concat("Hello, " subject))
    print(concat("Hello, " subject))
}

doIt = () => {
    print("Do it!")
}

doIt()

hello("Brother")

classmates = split("Jerry Jordan Johnny Jack Jeffery" " ")

each(classmates (peep) =>
    print(concat("Hello " peep))
)

fib = (n) =>
    if(eq(n 1)
        () => 1
        () =>
            if(eq(n 2)
                () => 1
                () =>
                    add(
                        fib(subtract(n 1))
                        fib(subtract(n 2))
                    )
            )
        )

print(fib(9))
```

## Todo List

If you'd like to build out this language, you may use this todo list as a guide:

* parser
    * define moo lexer
        * number literal
        * string literal
        * assignment operator
        * identifier
        * parans
        * braces
        * fat arrow
        * whitespace
        * newline
    * make a parse.js that creates .ast files
    * variable assignment
    * function call
    * multiple lines
    * lambda function
* generator
    * make a generate.js that creates .js files
    * variable assignment
    * function call
    * runtime functions
    * lambda function