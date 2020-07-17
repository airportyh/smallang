@{%
const myLexer = require("./lexer");
%}

@lexer myLexer

statements
    -> statement
        {% 
            (data) => {
                return [data[0]];
            }
        %}
    |  statements %NL statement
        {%
            (data) => {
                return [...data[0], data[2]];
            }
        %}

statement
    -> var_assign  {% id %}
    |  fun_call    {% id %}

var_assign
    -> %identifier _ "=" _ expr
        {%
            (data) => {
                return {
                    type: "var_assign",
                    var_name: data[0],
                    value: data[4]
                }
            }
        %}

fun_call
    -> %identifier _ "(" _ (arg_list _):? ")"
        {%
            (data) => {
                return {
                    type: "fun_call",
                    fun_name: data[0],
                    arguments: data[4] ? data[4][0] : []
                }
            }
        %}

arg_list
    -> expr
        {%
            (data) => {
                return [data[0]];
            }
        %}
    |  arg_list __ expr
        {%
            (data) => {
                return [...data[0], data[2]];
            }
        %}

expr
    -> %string     {% id %}
    |  %number     {% id %}
    |  %identifier {% id %}
    |  fun_call    {% id %}

# Optional whitespace    
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+