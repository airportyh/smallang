# Small Lang

Small Lang is a small programming language you can build yourself
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

## Video Episodes

* [Episode 1: The Lexer](http://tobyho.com/video/Make-Your-Own-Language-1-The-Lexer.html) - ([code branch 01-lexer](https://github.com/airportyh/smallang/tree/01-lexer))
* [Episode 2: The Parser](http://tobyho.com/video/Make-Your-Own-Language-2-The-Parser.html) - ([code branch 02-parse-script-and-var-assign](https://github.com/airportyh/smallang/tree/02-parse-script-and-var-assign))
* [Episode 3: Parsing Function Calls](http://tobyho.com/video/Make-Your-Own-Language-3-Parsing-Function-Calls.html) - ([code branch 03-fun-call-and-multi-line](https://github.com/airportyh/smallang/tree/03-fun-call-and-multi-line))
* [Episode 4: The Generator](http://tobyho.com/video/Make-Your-Own-Language-4-The-Generator.html) - ([code branch 04-generator](https://github.com/airportyh/smallang/tree/04-generator))
* [Episode 5: Runtime Functions](http://tobyho.com/video/Make-Your-Own-Language-5-Runtime-Functions.html) - ([code branch 05-runtime-functions](https://github.com/airportyh/smallang/tree/05-runtime-functions))
* [Episode 6: Parsing Lambda Functions](http://tobyho.com/video/Make-Your-Own-Language-6-Parsing-Lambda-Functions.html) - ([code branch 06-lambda-function](https://github.com/airportyh/smallang/tree/06-lambda-function))
* [Episode 7: White Space and Ambiguous Grammar](http://tobyho.com/video/Make-Your-Own-Language-7-White-Space-and-Ambiguous-Grammar.html) - ([code branch 07-whitespaces-and-ambiguous-grammars](https://github.com/airportyh/smallang/tree/07-whitespaces-and-ambiguous-grammars))
* [Episode 8: Generator for Lambda](http://tobyho.com/video/Make-Your-Own-Language-8-Code-Generator-for-Lambda.html) - ([code branch 08-code-gen-lambda](https://github.com/airportyh/smallang/tree/08-code-gen-lambda))
* [Episode 9: Comments and More Ambiguous grammar](http://tobyho.com/video/Make-Your-Own-Language-9-Comments-and-More-Ambiguous-grammar.html) - ([code branch 09-code-challenge-part-A](https://github.com/airportyh/smallang/tree/09-code-challenge-part-A))
* [Episode 10: Coding Challenge](http://tobyho.com/video/Make-Your-Own-Language-10-Coding-Challenge.html) - ([code branch 10-code-challenge-part-B](https://github.com/airportyh/smallang/tree/10-code-challenge-part-B))

## Todo List

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
    * comments
* generator
    * make a generate.js that creates .js files
    * variable assignment
    * function call
    * runtime functions
    * lambda function
    * comments
* code challenges

## Troubleshooting FAQ

If you are on Windows, you will encounter a lexer error similar to:

```
name = "Bob"
                         ^
Unexpected input (lexer error). Instead, I was expecting to see one of the following:

A NL token based on:
    statements → statements ● %NL statement

    at Parser.feed (C:\Users\dflyn\thingscript_test\node_modules\nearley\lib\nearley.js:295:27)
    at main (C:\Users\dflyn\thingscript_test\parse.js:19:8)
```

The fix is to change the following line in `lexer.js`:

```
NL:  { match: /[\n]+/, lineBreaks: true }
```

to

```
NL:  { match: /[\r\n]+/, lineBreaks: true }
```

Thank you very much to Derek for finding this fix!

## My Other Stuff on Programming Languages

* Checkout my full video series on [How to Make a Programming Language](https://www.youtube.com/playlist?list=PLSq9OFrD2Q3DasoOa54Vm9Mr8CATyTbLF)
* [Live Code a Programming Language Series](https://github.com/airportyh/x-lang)
* A few other programming languages:
    * [Fun Lang](https://github.com/airportyh/fun-lang)
    * [Play Lang](https://github.com/airportyh/play-lang)
    * [Chameleon Lang](https://github.com/airportyh/chameleon-lang)
* [LLVM Tutorial Walkthrough](https://www.youtube.com/playlist?list=PLSq9OFrD2Q3ChEc_ejnBcO5u9JeT0ufkg)
