@{%
const myLexer = require("./lexer");
%}

@lexer myLexer

statements
    -> _ statement _
        {% 
            (data) => {
                return [data[1]];
            }
        %}
    |  statements %NL _ statement _
        {%
            (data) => {
                return [...data[0], data[3]];
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
    |  lambda      {% id %}

lambda -> "(" _ (param_list _):? ")" _ "=>" _ lambda_body
    {%
        (data) => {
            return {
                type: "lambda",
                parameters: data[2] ? data[2][0] : [],
                body: data[7]
            }
        }
    %}
    
param_list
    -> %identifier (__ %identifier):*
        {%
            (data) => {
                const repeatedPieces = data[1];
                const restParams = repeatedPieces.map(piece => piece[1]);
                return [data[0], ...restParams];
            }
        %}

lambda_body
    -> expr
        {%
            (data) => {
                return [data[0]];
            }
        %}
    |  "{" _ %NL statements %NL _ "}"
        {%
            (data) => {
                return data[3];
            }
        %}

# Optional whitespace    
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+