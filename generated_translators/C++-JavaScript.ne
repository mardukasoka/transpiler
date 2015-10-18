
#The following expressions are the same in every language.

chunk -> _ (_series_of_statements | class | class_extends) _ {%function(d){return d[1][0];}%}
_series_of_statements -> series_of_statements _ statement {%function(d){return d[0] +"\n"+ d[2];}%} | statement {%function(d){return d[0];}%} | null
series_of_statements -> statement {%function(d){return d[0];}%} | series_of_statements _ statement {%function(d){return d[0] + "\n" + d[2];}%}

arithmetic_expression -> expression
boolean_expression -> expression
string_expression -> expression
array_expression -> expression

expression ->  accessArray | this | functionCall | varName | dictionary | declare_new_object
| parentheses_expression | string_to_int | add | subtract | multiply | mod | divide | number | pow | strlen | sin | cos | tan | sqrt | array_length
| String | concatenateString | substring | int_to_string | split | join
| initializerList
| false | true | not_equal | greaterThan | compareInts | strcmp | lessThanOrEqual | greaterThanOrEqual | lessThan | and | or | not | arrayContains

statement -> typeless_function | typeless_variable_declaration | plusEquals | minusEquals | declare_constant | initializeArray | print | comment | switch | setVar | initializeVar | func | functionCallStatement | return | if | while | forInRange
class_statement -> constructor | instance_method | static_method | comment

class_statements -> class_statement:+

type -> boolean | int | string | auto | arrayType | void
caseStatements -> caseStatements _ case {%function(d){return d[0] +"\n"+ d[2];}%} | case
elifStatements -> elifStatements _ elif {%function(d){return d[0] +"\n"+ d[2];}%} | elif #Match a series of elif statements
elifOrElse -> else | elifStatements _ else {%function(d){return d[0] +"\n"+ d[2];}%} #Match a series of elif statements followed by else

parameterList -> _parameterList | null
_parameterList -> _parameterList _ parameter_separator _ parameter {%function(d){return d[0]+d[2]+d[4]}%}
| parameter

typeless_parameters -> _typeless_parameters | null
_typeless_parameters -> _typeless_parameters _ parameter_separator _ typeless_parameter {%function(d){return d[0]+d[2]+d[4]}%}
| typeless_parameter

functionCallParameters -> functionCallParameters _ function_call_parameter_separator _ expression {% function(d) {return d.join(""); } %} | expression | null

keyValueList -> _keyValueList
_keyValueList -> _keyValueList _ keyValueSeparator _ keyValue {%function(d){return d[0]+d[2]+d[4]}%}
| keyValue

_initializerList -> _initializerList _ initializerListSeparator _ expression {%function(d){return d[0]+d[2]+d[4]}%}
| expression

# Primitives
# ==========

identifier -> _name {% function(d) {return d[0]; } %}

_name -> [a-zA-Z_] {% id %}
	| _name [\w_] {% function(d) {return d[0] + d[1]; } %}

# Numbers

number -> _number {% function(d) {return parseFloat(d[0])} %}

_posint ->
	[0-9] {% id %}
	| _posint [0-9] {% function(d) {return d[0] + d[1]} %}

_int ->
	"-" _posint {% function(d) {return d[0] + d[1]; }%}
	| _posint {% id %}

_float ->
	_int {% id %}
	| _int "." _posint {% function(d) {return d[0] + d[1] + d[2]; }%}

_number ->
	_float {% id %}
	| _float "e" _int {% function(d){return d[0] + d[1] + d[2]; } %}


#Strings

String -> "\"" _string "\"" {% function(d) {return '"' + d[1] + '"'; } %}

_string ->
	null {% function() {return ""; } %}
	| _string _stringchar {% function(d) {return d[0] + d[1];} %}

_stringchar ->
	[^\\"] {% id %}
	| "\\" [^] {% function(d) {return JSON.parse("\"" + d[0] + d[1] + "\""); } %}

# Whitespace
_ -> null | _ [\s] {% function() {} %}
__ -> [\s] | __ [\s] {% function() {} %}


#The next two lines are the languages for the translator.
typeless_parameter -> "auto" _ __ _ identifier{%function(d){
	return d[4];
}%}
typeless_function -> "auto" _ __ _ identifier _ "(" _ typeless_parameters _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "function" + " " + d[4] + "(" + d[8] + ")" + "{" + d[14] + "}";
}%}
typeless_variable_declaration -> "auto" _ __ _ "a" _ "=" _ identifier _ ";"{%function(d){
	return "var" + " " + "a" + "=" + d[8] + ";";
}%}
int_to_string -> "std" _ "::" _ "to_string" _ "(" _ expression _ ")"{%function(d){
	return "String" + "(" + d[8] + ")";
}%}
function_call_parameter_separator -> ","{%function(d){
	return ",";
}%}
string_to_int -> "atoi" _ "(" _ expression _ "." _ "c_str" _ "(" _ ")" _ ")"{%function(d){
	return "parseInt" + "(" + d[4] + ")";
}%}
initializeArray -> arrayType _ __ _ identifier _ "=" _ array_expression _ ";"{%function(d){
	return "var" + " " + d[4] + "=" + d[8] + ";";
}%}
accessArray -> identifier _ "[" _ arithmetic_expression _ "]"{%function(d){
	return d[0] + "[" + d[4] + "]";
}%}
arrayType -> type _ "[]"{%function(d){
	return "Array";
}%}
initializerListSeparator -> ","{%function(d){
	return ",";
}%}
initializerList -> "{" _ _initializerList _ "}"{%function(d){
	return "[" + d[2] + "]";
}%}
keyValue -> "{" _ identifier _ "," _ expression _ "}"{%function(d){
	return d[2] + ":" + d[6];
}%}
charAt -> expression _ "[" _ expression _ "]"{%function(d){
	return d[0] + "." + "charAt" + "(" + d[4] + ")";
}%}
anonymousFunction -> "[" _ "=" _ "]" _ "(" _ parameterList _ ")" _ "->" _ "int" _ "{" _ series_of_statements _ "}"{%function(d){
	return "function" + "(" + d[8] + ")" + "{" + d[18] + "}";
}%}
auto -> "auto"{%function(d){
	return "var";
}%}
void -> "void"{%function(d){
	return "";
}%}
sin -> "std" _ "::" _ "sin" _ "(" _ expression _ ")"{%function(d){
	return "Math" + "." + "sin" + "(" + d[8] + ")";
}%}
sqrt -> "std" _ "::" _ "sqrt" _ "(" _ expression _ ")"{%function(d){
	return "Math" + "." + "sqrt" + "(" + d[8] + ")";
}%}
cos -> "std" _ "::" _ "cos" _ "(" _ expression _ ")"{%function(d){
	return "Math" + "." + "cos" + "(" + d[8] + ")";
}%}
tan -> "std" _ "::" _ "tan" _ "(" _ expression _ ")"{%function(d){
	return "Math" + "." + "tan" + "(" + d[8] + ")";
}%}
dictionary -> "{" _ keyValueList _ "}"{%function(d){
	return "{" + d[2] + "}";
}%}
keyValueSeparator -> ","{%function(d){
	return ",";
}%}
true -> "true"{%function(d){
	return "true";
}%}
false -> "false"{%function(d){
	return "false";
}%}
compareInts -> arithmetic_expression _ "==" _ arithmetic_expression{%function(d){
	return d[0] + "===" + d[4];
}%}
parentheses_expression -> "(" _ expression _ ")"{%function(d){
	return "(" + d[2] + ")";
}%}
greaterThan -> arithmetic_expression _ ">" _ arithmetic_expression{%function(d){
	return d[0] + ">" + d[4];
}%}
lessThan -> arithmetic_expression _ "<" _ arithmetic_expression{%function(d){
	return d[0] + "<" + d[4];
}%}
class_extends -> "class" _ __ _ identifier _ ":" _ "public" _ __ _ identifier _ "{" _ class_statements _ "}"{%function(d){
	return "class" + " " + d[4] + " " + "extends" + " " + d[12] + "{" + d[16] + "}";
}%}
class -> "class" _ __ _ identifier _ "{" _ class_statements _ "}"{%function(d){
	return "class" + " " + d[4] + "{" + d[8] + "}";
}%}
this -> "this" _ "." _ varName{%function(d){
	return "this" + "." + d[4];
}%}
pow -> "pow" _ "(" _ arithmetic_expression _ "," _ arithmetic_expression _ ")"{%function(d){
	return "Math" + "." + "pow" + "(" + d[4] + "," + d[8] + ")";
}%}
_or -> arithmetic_expression _ "||" _ arithmetic_expression{%function(d){
	return d[0] + "||" + d[4];
}%}
or -> _or{%function(d){
	return d[0];
}%}
_and -> boolean_expression _ "&&" _ boolean_expression{%function(d){
	return d[0] + "&&" + d[4];
}%}
and -> _and{%function(d){
	return d[0];
}%}
not -> "!" _ boolean_expression{%function(d){
	return "!" + d[2];
}%}
_multiply -> arithmetic_expression _ "*" _ arithmetic_expression{%function(d){
	return d[0] + "*" + d[4];
}%}
multiply -> _multiply{%function(d){
	return d[0];
}%}
_divide -> arithmetic_expression _ "/" _ arithmetic_expression{%function(d){
	return d[0] + "/" + d[4];
}%}
divide -> _divide{%function(d){
	return d[0];
}%}
_add -> arithmetic_expression _ "+" _ arithmetic_expression{%function(d){
	return d[0] + "+" + d[4];
}%}
add -> _add{%function(d){
	return d[0];
}%}
_subtract -> arithmetic_expression _ "-" _ arithmetic_expression{%function(d){
	return d[0] + "-" + d[4];
}%}
subtract -> _subtract{%function(d){
	return d[0];
}%}
functionCall -> identifier _ "(" _ functionCallParameters _ ")"{%function(d){
	return d[0] + "(" + d[4] + ")";
}%}
concatenateString -> string_expression _ "+" _ string_expression{%function(d){
	return d[0] + "+" + d[4];
}%}
initializeVar -> type _ __ _ varName _ "=" _ expression _ ";"{%function(d){
	return "var" + " " + d[4] + "=" + d[8] + ";";
}%}
return -> "return" _ __ _ expression _ ";"{%function(d){
	return "return" + " " + d[4] + ";";
}%}
varName -> identifier{%function(d){
	return d[0];
}%}
func -> type _ __ _ identifier _ "(" _ parameterList _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "function" + " " + d[4] + "(" + d[8] + ")" + "{" + d[14] + "}";
}%}
if -> "if" _ "(" _ boolean_expression _ ")" _ "{" _ series_of_statements _ "}" _ elifOrElse{%function(d){
	return "if" + "(" + d[4] + ")" + "{" + d[10] + "}" + d[14];
}%}
elif -> "else" _ __ _ "if" _ "(" _ boolean_expression _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "else" + " " + "if" + "(" + d[8] + ")" + "{" + d[14] + "}";
}%}
plusEquals -> expression _ "+=" _ expression _ ";"{%function(d){
	return d[0] + "+=" + d[4] + ";";
}%}
minusEquals -> expression _ "-=" _ expression _ ";"{%function(d){
	return d[0] + "-=" + d[4] + ";";
}%}
else -> "else" _ "{" _ series_of_statements _ "}"{%function(d){
	return "else" + "{" + d[4] + "}";
}%}
while -> "while" _ "(" _ boolean_expression _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "while" + "(" + d[4] + ")" + "{" + d[10] + "}";
}%}
forInRange -> "for" _ "(" _ "int" _ __ _ varName _ "=" _ arithmetic_expression _ ";" _ varName _ "<" _ arithmetic_expression _ ";" _ varName _ "++" _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "for" + "(" + "var" + " " + d[8] + "=" + d[12] + ";" + d[8] + "<" + d[20] + ";" + d[8] + "++" + ")" + "{" + d[32] + "}";
}%}
print -> "cout" _ "<<" _ expression _ ";"{%function(d){
	return "console" + "." + "log" + "(" + d[4] + ")" + ";";
}%}
comment -> "//" _ _string _ "\n"{%function(d){
	return "//" + d[2] + "\n";
}%}
mod -> arithmetic_expression _ "%" _ arithmetic_expression{%function(d){
	return d[0] + "%" + d[4];
}%}
setVar -> varName _ "=" _ expression _ ";"{%function(d){
	return d[0] + "=" + d[4] + ";";
}%}
parameter -> type _ __ _ varName{%function(d){
	return d[4];
}%}
boolean -> "bool"{%function(d){
	return "boolean";
}%}
int -> "int"{%function(d){
	return "number";
}%}
string -> "string"{%function(d){
	return "string";
}%}
functionCallStatement -> functionCall _ ";"{%function(d){
	return d[0] + ";";
}%}
greaterThanOrEqual -> arithmetic_expression _ ">=" _ arithmetic_expression{%function(d){
	return d[0] + ">=" + d[4];
}%}
lessThanOrEqual -> arithmetic_expression _ "<=" _ arithmetic_expression{%function(d){
	return d[0] + "<=" + d[4];
}%}
switch -> "switch" _ "(" _ expression _ ")" _ "{" _ caseStatements _ __ _ default _ "}"{%function(d){
	return "switch" + "(" + d[4] + ")" + "{" + d[10] + " " + d[14] + "}";
}%}
case -> "case" _ __ _ expression _ ":" _ series_of_statements _ "break" _ ";"{%function(d){
	return "case" + " " + d[4] + ":" + d[8] + "break" + ";";
}%}
foreach -> "for" _ "(" _ "getCorrespondingType" _ __ _ type _ __ _ "&" _ __ _ expression _ ":" _ expression _ "){" _ series_of_statements _ "}"{%function(d){
	return d[20] + "." + "forEach" + "(" + "function" + "(" + d[16] + ")" + "{" + d[24] + "}" + ")" + ";";
}%}
default -> "default" _ ":" _ series_of_statements{%function(d){
	return "default" + ":" + d[4];
}%}
substring -> string_expression _ "." _ "substring" _ "(" _ arithmetic_expression _ "," _ arithmetic_expression _ "-" _ arithmetic_expression _ ")"{%function(d){
	return d[0] + "." + "substring" + "(" + d[8] + "," + d[12] + ")";
}%}
strcmp -> string_expression _ "." _ "compare" _ "(" _ string_expression _ ")"{%function(d){
	return d[0] + "===" + d[8];
}%}
array_length -> array_expression _ "." _ "size" _ "(" _ ")"{%function(d){
	return d[0] + "." + "length";
}%}
strlen -> string_expression _ "." _ "length" _ "(" _ ")"{%function(d){
	return d[0] + "." + "length";
}%}
parameter_separator -> ","{%function(d){
	return ",";
}%}
not_equal -> expression _ "!=" _ expression{%function(d){
	return d[0] + "!==" + d[4];
}%}
instance_method -> type _ __ _ identifier _ "(" _ parameterList _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return d[4] + "(" + d[8] + ")" + "{" + d[14] + "}";
}%}
static_method -> "static" _ __ _ type _ __ _ identifier _ "(" _ parameterList _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "static" + " " + d[8] + "(" + d[12] + ")" + "{" + d[18] + "}";
}%}
constructor -> identifier _ "(" _ parameterList _ ")" _ "{" _ series_of_statements _ "}"{%function(d){
	return "constructor" + "(" + d[4] + ")" + "{" + d[10] + "}";
}%}
declare_new_object -> identifier _ __ _ varName _ "(" _ functionCallParameters _ ")" _ ";"{%function(d){
	return "var" + " " + d[4] + "=" + "new" + " " + d[0] + "(" + d[8] + ")" + ";";
}%}
