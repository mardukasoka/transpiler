[![Build Status](https://api.travis-ci.org/jarble/transpiler.svg)](https://travis-ci.org/jarble/transpiler)

# Universal-transpiler

*Universal-transpiler* is a source-to-source compiler that translates a small subset of several programming languages into several others.
It is also able to translate several metasyntax notations, such as EBNF and ABNF. The translation is not always 100% accurate, but I hope it will still be useful.

The [online version of this translator](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22public%20class%20Python%7B%5Cn%5Cn%5Ctpublic%20static%20int%20round(double%20a)%7B%5Cn%5Ctreturn%20Math.round(a%2B0.5)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20int%20floor(double%20a)%7B%5Cn%5Ctreturn%20Math.floor(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20int%20ceil(double%20a)%7B%5Cn%5Ctreturn%20Math.ceil(0.5)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ctpublic%20class%20math%7B%5Cn%5Ctpublic%20static%20double%20sin(double%20a)%7B%5Cn%5Ctreturn%20Math.sin(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20pow(double%20a%2Cdouble%20b)%7B%5Cn%5Ctreturn%20Math.pow(a%2Cb)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20cos(double%20a)%7B%5Cn%5Ctreturn%20Math.cos(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20tan(double%20a)%7B%5Cn%5Ctreturn%20Math.tan(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20asin(double%20a)%7B%5Cn%5Ctreturn%20Math.asin(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20acos(double%20a)%7B%5Cn%5Ctreturn%20Math.acos(a)%3B%5Cn%5Ct%7D%5Cn%5Ctpublic%20static%20double%20atan(double%20a)%7B%5Cn%5Ctreturn%20Math.atan(a)%3B%5Cn%5Ct%7D%5Cn%5Ct%7D%5Cn%7D%22%2C%22inputLang%22%3A%22java%22%2C%22outputLang%22%3A%22c%23%22%7D) is written in JavaScript, but an experimental version is also being written in Prolog.

Universal-transpiler is designed to translate simple "wrapper classes," like this one for Python in Java:

	public class Python{

		public static int round(double a){
		return Math.round(a+0.5);
		}
		public static int floor(double a){
		return Math.floor(a);
		}
		public static int ceil(double a){
		return Math.ceil(0.5);
		}

		public class math{
		public static double sin(double a){
		return Math.sin(a);
		}
		public static double pow(double a,double b){
		return Math.pow(a,b);
		}
		public static double cos(double a){
		return Math.cos(a);
		}
		public static double tan(double a){
		return Math.tan(a);
		}
		public static double asin(double a){
		return Math.asin(a);
		}
		public static double acos(double a){
		return Math.acos(a);
		}
		public static double atan(double a){
		return Math.atan(a);
		}
		}
	}

This is its output in C#:

	public class Python{
		
		public static int round(double a){
			return Math.Round(a+0.5);
		}
		
		public static int floor(double a){
			return Math.Floor(a);
		}
		
		public static int ceil(double a){
			return Math.Ceiling(0.5);
		}
		
		public class math{
		
			public static double sin(double a){
				return Math.Sin(a);
			}
		
			public static double pow(double a,double b){
				return Math.Pow(a,b);
			}
		
			public static double cos(double a){
				return Math.Cos(a);
			}
		
			public static double tan(double a){
				return Math.Tan(a);
			}
		
			public static double asin(double a){
				return Math.Asin(a);
			}
		
			public static double acos(double a){
				return Math.Acos(a);
			}
		
			public static double atan(double a){
				return Math.Atan(a);
			}
		}
	}

The translator also includes a proof-of-concept implementation of a [natural language programming](file:///C:/Users/jarbl/Dropbox/All%20source%20code%20goes%20here%20-%20don't%20put%20this%20folder%20inside%20any%20other%20folder/Prolog%20projects/universal-transpiler/javascript/js_transpiler/to_do_list.html#%7B%22inputText%22%3A%22product%20of%20A%20and%20B%20means%20A%20*%20B.%5Cnquotient%20of%20A%20and%20B%20means%20A%20%2F%20B.%5Cnbigger%20means%20greater.%5Cngreater%20means%20more.%5CnA%20is%20no%20B%20than%20C%20means%20A%20is%20not%20B%20than%20C.%5CnA%20is%20more%20than%20B%20means%20A%20%3E%20B.%5CnA%20is%20less%20than%20B%20means%20A%20%3C%20B.%5CnA%20plus%20B%20means%20A%20%2B%20B.%5CnA%20or%20B%20means%20A%20%7C%7C%20B.%5CnA%20and%20B%20means%20A%20%26%26%20B.%5CnA%20is%20equal%20to%20B%20means%20A%20equals%20B.%5CnA%20equals%20B%20means%20A%20%3D%3D%20B.%5CnA%20minus%20B%20means%20A%20-%20B.%5CnA%20is%20not%20equal%20to%20B%20means%20A%20!%3D%20B.%5CnX%20is%20a%20Y%20means%20isa%7BX%2CY%7D.%5CnA%20is%20B%20means%20A%20%3D%3D%20B.%5CnA%20is%20not%20a%20B%20means%20(A%20is%20a%20B)%20is%20false.%5CnA%20is%20not%20more%20than%20B%20means%20A%20%3C%3D%20B.%5CnA%20is%20not%20less%20than%20B%20means%20A%20%3E%3D%20B.%5Cna%20%3D%201.%5Cnb%20%3D%202.%5Cn%5Cna4%20%3D%20(the%20quotient%20of%20a%20and%20b)%20plus%20(the%20product%20of%20a%20and%20b)%20is%20not%20less%20%20than%20100.%22%2C%22inputLang%22%3A%22english%22%2C%22outputLang%22%3A%22python%22%7D) system.

# How to use the online translator

This translator can convert many languages into many others:

* [JavaScript to Prolog](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20is_an_animal(thing)%7B%5Cn%20%20%20%20return%20%5B%5C%22dog%5C%22%2C%5C%22horse%5C%22%2C%5C%22cat%5C%22%5D.indexOf(thing)%20!%3D%3D%20-1%3B%5Cn%7D%22%2C%22inputLang%22%3A%22javascript%22%2C%22outputLang%22%3A%22prolog%22%7D)
* [C to C#](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2C%20int%20b)%7B%5Cn%20%20%20%20return%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22c%23%22%7D)
* [PHP to Python](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20add(%24a%2C%24b)%7B%5Cn%20%20%20%20return%20%24a%2B%24b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22php%22%2C%22outputLang%22%3A%22python%22%7D)
* [Lua to Perl](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20add(a%2Cb)%20%5Cn%20%20%20%20return%20a%2Bb%5Cnend%22%2C%22inputLang%22%3A%22lua%22%2C%22outputLang%22%3A%22perl%22%7D) or [PHP](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20add(a%2Cb)%20%5Cn%20%20%20%20return%20a..b%5Cnend%22%2C%22inputLang%22%3A%22lua%22%2C%22outputLang%22%3A%22php%22%7D)
* [C to Haskell](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2C%20int%20b)%7B%5Cn%20%20%20%20return%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22haskell%22%7D)
* [C# to Fortran](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22%5Cnpublic%20static%20int%20add(int%20a%2Cint%20b)%7B%5Cn%20%20%20%20return%20a%2Bb%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%23%22%2C%22outputLang%22%3A%22fortran%22%7D)
* [Java to OCaml](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22public%20class%20Example%7B%5Cn%20%20%20%20private%20int%20a1%20%3D%201%3B%5Cn%20%20%20%20public%20static%20int%20add(int%20a%2C%20int%20b)%7B%5Cn%20%20%20%20%20%20%20%20return%20a%20%2B%20b%3B%5Cn%20%20%20%20%7D%5Cn%7D%22%2C%22inputLang%22%3A%22java%22%2C%22outputLang%22%3A%22ocaml%22%7D) or [GLSL][1]
## Constraint programming and automated reasoning
Universal-transpiler is able to generate code in several constraint programming languages and computer algebra systems, including [MiniZinc](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2Cint%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22minizinc%22%7D), [Maxima](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2Cint%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22maxima%22%7D), [Sage](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2Cint%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22sage%22%7D), [Algebrite](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22z%20%3D%20Math.pow(2%2C4)%2BMath.sqrt(2)%3B%22%2C%22inputLang%22%3A%22javascript%22%2C%22outputLang%22%3A%22algebrite%22%7D), and [Axiom](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22z%20%3D%20Math.pow(2%2C4)%2BMath.sqrt(2)%3B%22%2C%22inputLang%22%3A%22javascript%22%2C%22outputLang%22%3A%22axiom%22%7D). Some languages can also be translated into the [SMT-LIB](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22%5Cnint%20add1(int%20a%2C%20int%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22smt-lib%22%7D), [TPTP](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22function%20is_greater_than(a)%7B%5Cnreturn%20a%3Eb%3B%5Cn%7D%22%2C%22inputLang%22%3A%22javascript%22%2C%22outputLang%22%3A%22tptp%22%7D), [Coq](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2C%20int%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22coq%22%7D), [Isabelle/HOL](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22%5Cnexample%3A%3ABool%20-%3E%20Bool%20-%3E%20Bool%5Cnexample%20a%20b%20%3D%20%5Cn%20%20%20%20(not%20(a%7C%7Cb))%22%2C%22inputLang%22%3A%22haskell%22%2C%22outputLang%22%3A%22isabelle%2Fhol%22%7D), and [alt-ergo](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22boolean%20is_greater_than(int%20a)%7B%5Cn%20%20%20%20return%20a%3Eb%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22alt-ergo%22%7D) languages for automated theorem proving. As an experimental feature, it also converts a subset of Prolog into the [PDDL](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22%5Cnis_alive(A%2CB)%20%3A-%20%5Cn%20%20%20%20is_awake(A)%3Bis_asleep(B).%22%2C%22inputLang%22%3A%22prolog%22%2C%22outputLang%22%3A%22pddl%22%7D) automated planning language.

Similarly, it can translate [constraint handing rules from Prolog into CLIPS](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22rule1%20%40%20is_alive(A%2CB)%20%3D%3D%3E%20%5Cn%20%20%20%20is_awake(A)%3Bis_asleep(B).%22%2C%22inputLang%22%3A%22prolog%22%2C%22outputLang%22%3A%22clips%22%7D) and [vice-versa](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22%5Cn(defrule%20rule1%20(is_alive%20%3FA%20%3FB)%20%3D%3E%20(assert%20(or%20(is_awake%20%3FA)%20(is_asleep%20%3FB))))%22%2C%22inputLang%22%3A%22clips%22%2C%22outputLang%22%3A%22prolog%22%7D).

## Ontology languages

Universal-transpiler can also translate programming languages into the [KIF](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22int%20add(int%20a%2Cint%20b)%7B%5Cnreturn%20a%20%2B%20b%3B%5Cn%7D%22%2C%22inputLang%22%3A%22c%22%2C%22outputLang%22%3A%22kif%22%7D) ontology language.

## Generating parsers with universal-transpiler

Universal-transpiler can also translate various grammar notations, such as [jison](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22add_or_subtract%3A%20symbol%20%5C%22%2B%5C%22%20symbol%20%7C%20symbol%20%5C%22-%5C%22%20symbol%3B%22%2C%22inputLang%22%3A%22jison%22%2C%22outputLang%22%3A%22lpeg%22%7D), [marpa](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22add_or_subtract%3A%20symbol%20%5C%22%2B%5C%22%20symbol%20%7C%20symbol%20%5C%22-%5C%22%20symbol%3B%22%2C%22inputLang%22%3A%22jison%22%2C%22outputLang%22%3A%22marpa%22%7D), [peg.js](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22add_or_subtract%3A%20symbol%20%5C%22%2B%5C%22%20symbol%20%7C%20symbol%20%5C%22-%5C%22%20symbol%3B%22%2C%22inputLang%22%3A%22jison%22%2C%22outputLang%22%3A%22peg.js%22%7D), and [nearley](https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22add_or_subtract%3A%20symbol%20%5C%22%2B%5C%22%20symbol%20%7C%20symbol%20%5C%22-%5C%22%20symbol%3B%22%2C%22inputLang%22%3A%22jison%22%2C%22outputLang%22%3A%22nearley%22%7D).

# How to use the Prolog translator

The Prolog translator is still unfinished and experimental. You can install the package by typing `pack_install(transpiler)` in the SWI-Prolog console.
Now, you can use the translator to convert JavaScript source code into Lua:

	:- use_module(library(transpiler)).
	:- set_prolog_flag(double_quotes,chars).
	:- initialization(main).

	main :- 
		translate("function add(a,b){return a + b;}",javascript,lua,X),
		atom_chars(Y,X),
		writeln(Y).


# How to extend the Prolog translator

A limited number of translation rules are provided here, but you can easily add your own rules to `transpiler.pl`.
This is a simplified version of one of its translation rules, implementing the sine function:

	%The type of this expression is double.
	parentheses_expr(Data,double,sin(Var1_)) -->
        {
			%The parameter of the sine function can be an integer or double.
			Var1 = expr(Data,double,Var1_)
		},
        langs_to_output(Data,sin,[
        ['java','javascript']:
                ("Math",ws,".",ws,"sin",ws,"(",ws,Var1,ws,")"),
        ['lua','python']:
                ("math",python_ws,".",python_ws,"sin",python_ws,"(",python_ws,Var1,python_ws,")"),
        ]).

## Other planned features:
* Add a translator for [lens languages](https://www.google.com/search?q=%22lens+language%22+programming) such as Augeas and Boomerang
* Simplify and refactor the code generator using [string interpolation](https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript)
* Converting [SQL to Linq](https://stackoverflow.com/questions/296972/sql-to-linq-tool) and vice-versa
* Simultaneous editing of two programming languages in two text areas
* [Translate list comprehensions](https://stackoverflow.com/questions/23035186/translate-list-comprehension-to-prolog) from other languages into Prolog.
* Try to translate markup languages, similar to [Pandoc](https://pandoc.org/index.html).
* Try to convert SVG into other vector graphics formats
* Try to convert X3D into other vector graphics formats

# Similar projects
There are several other source-to-source compilers and code generators that are similar to this one.

[JTransc](https://github.com/jtransc/jtransc) compiles Java, Kotlin, and Scala into several other programming languages.
[Pandoc](https://pandoc.org/index.html) is a universal document converter

This [universal code generator](http://codeworker.free.fr/) is one example.

[1]: https://jarble.github.io/transpiler/javascript/js_transpiler/test_parser.html#%7B%22inputText%22%3A%22public%20class%20Rectangle%7B%5Cn%20%20%20%20public%20double%20width%3B%5Cn%20%20%20%20public%20double%20height%3B%5Cn%20%20%20%20public%20Rectangle(double%20width%2C%20double%20height)%7B%5Cn%20%20%20%20%20%20%20%20this.width%20%3D%20width%3B%5Cn%20%20%20%20%20%20%20%20this.height%20%3D%20height%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20public%20double%20area()%7B%5Cn%20%20%20%20%20%20%20%20return%20this.width*this.height%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20public%20double%20perimeter()%7B%5Cn%20%20%20%20%20%20%20%20return%20(this.width%2Bthis.height)*2.0%3B%5Cn%20%20%20%20%7D%5Cn%7D%22%2C%22inputLang%22%3A%22java%22%2C%22outputLang%22%3A%22glsl%22%7D
