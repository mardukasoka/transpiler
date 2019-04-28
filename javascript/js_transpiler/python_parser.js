/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var python_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,15],$V2=[1,6],$V3=[1,10],$V4=[1,11],$V5=[1,13],$V6=[5,10,11,19,26,30,37],$V7=[1,29],$V8=[1,25],$V9=[1,21],$Va=[1,26],$Vb=[1,27],$Vc=[1,28],$Vd=[1,30],$Ve=[1,31],$Vf=[5,9,10,11,19,26,30,37,81,82],$Vg=[1,45],$Vh=[1,46],$Vi=[1,47],$Vj=[1,48],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,55],$Vr=[1,56],$Vs=[1,57],$Vt=[1,58],$Vu=[1,59],$Vv=[1,60],$Vw=[5,9,10,11,14,15,19,26,30,31,36,37,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,63,65,74,81,82],$Vx=[2,53],$Vy=[5,9,10,11,14,15,19,26,30,31,36,37,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,62,63,65,74,81,82],$Vz=[2,81],$VA=[1,75],$VB=[5,9,10,11,19,26,30,36,37,81,82],$VC=[1,86],$VD=[1,90],$VE=[1,98],$VF=[2,90],$VG=[1,121],$VH=[65,74],$VI=[1,125],$VJ=[1,128],$VK=[14,15],$VL=[1,143],$VM=[1,144],$VN=[5,9,10,11,14,15,19,26,30,31,36,37,43,44,45,46,47,48,49,50,63,65,74,81,82],$VO=[5,9,10,11,14,15,19,26,30,31,36,37,43,44,45,46,47,48,49,50,51,52,53,63,65,74,81,82],$VP=[5,9,10,11,14,15,19,26,30,31,36,37,43,44,45,46,47,48,49,50,51,52,53,54,55,56,63,65,74,81,82],$VQ=[14,65],$VR=[14,63,74],$VS=[1,160],$VT=[26,63];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement_":6,"class_statements":7,"class_statement":8,"@staticmethod":9,"def":10,"IDENTIFIER":11,"(":12,"parameters":13,")":14,":":15,"statements":16,"function":17,"if_statement":18,"class":19,"foreach":20,"statement_with_semicolon":21,"types":22,"->":23,"statement":24,"while_loop":25,"if":26,"e":27,"elif_statement":28,"while":29,"for":30,"in":31,"declare_var":32,"=":33,"declare_vars":34,"statement_with_semicolon_":35,";":36,"return":37,"access_array_":38,"+=":39,"-=":40,"*=":41,"/=":42,"or":43,"and":44,"==":45,"<=":46,"<":47,">=":48,">":49,"!=":50,"++":51,"+":52,"-":53,"*":54,"/":55,"mod":56,"**":57,"^":58,"parentheses_expr":59,"access_array":60,"parentheses_expr_":61,"[":62,"]":63,"named_parameters":64,",":65,"named_parameter":66,"key_values":67,"key_value":68,"key_values_":69,"key_value_":70,"lambda":71,"exprs":72,"{":73,"}":74,"dict":75,"list_comprehensions":76,"NUMBER":77,"STRING_LITERAL":78,"parameter":79,"args":80,"elif":81,"else":82,"identifiers":83,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"@staticmethod",10:"def",11:"IDENTIFIER",12:"(",14:")",15:":",19:"class",23:"->",26:"if",29:"while",30:"for",31:"in",33:"=",36:";",37:"return",39:"+=",40:"-=",41:"*=",42:"/=",43:"or",44:"and",45:"==",46:"<=",47:"<",48:">=",49:">",50:"!=",51:"++",52:"+",53:"-",54:"*",55:"/",56:"mod",57:"**",58:"^",62:"[",63:"]",65:",",71:"lambda",73:"{",74:"}",75:"dict",77:"NUMBER",78:"STRING_LITERAL",81:"elif",82:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,2],[7,1],[8,8],[6,1],[6,1],[6,4],[6,1],[6,1],[17,6],[17,7],[22,3],[22,1],[24,1],[24,1],[24,1],[24,1],[24,1],[18,5],[25,4],[20,6],[32,3],[34,2],[34,1],[21,2],[21,1],[35,2],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,1],[60,4],[38,4],[59,1],[59,1],[64,3],[64,1],[66,3],[67,3],[67,1],[68,3],[69,3],[69,1],[70,3],[61,6],[61,2],[61,3],[61,2],[61,3],[61,4],[61,3],[61,5],[61,7],[61,9],[61,3],[61,4],[61,4],[61,1],[61,1],[61,3],[61,1],[76,5],[76,1],[79,1],[13,3],[13,1],[72,3],[72,1],[80,2],[80,1],[28,5],[28,3],[83,3],[83,1],[16,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 4: case 25: case 91:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 5: case 15: case 26: case 88:
this.$ =
 [$$[$0]];
break;
case 6:
this.$ = ["static_method","public","Object",$$[$0-5],$$[$0-3],$$[$0]];
break;
case 9:
this.$ = [$$[$0-3],"public",$$[$0-2],$$[$0]];
break;
case 11: case 19:
this.$ = ["semicolon",$$[$0]];
break;
case 12:
this.$ = ["function","public","Object",$$[$0-4],[],$$[$0]];
break;
case 13:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]];
break;
case 14: case 87: case 89: case 95:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 21:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 22:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 23:
this.$ = ["foreach","Object",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 24:
this.$ = ["lexically_scoped_var","Object",$$[$0-2],$$[$0]]
break;
case 27:
this.$=$$[$0-1];
break;
case 29:
this.$ = ["return",$$[$0]];
break;
case 30: case 31:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 32: case 33: case 34: case 35: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 50:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["||",$$[$0-2],$$[$0]];
break;
case 37:
this.$ = ["&&",$$[$0-2],$$[$0]];
break;
case 49:
this.$ = ["%",$$[$0-2],$$[$0]];
break;
case 51:
this.$ = ["**",$$[$0-2],$$[$0]];
break;
case 52:
this.$ = ["-",$$[$0]];
break;
case 53:
this.$ = $$[$0];
break;
case 54: case 55:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 58: case 61: case 64:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 59: case 62: case 65: case 90: case 92: case 96:
this.$ = [$$[$0]];
break;
case 60:
this.$ = ["named_parameter",$$[$0-2],$$[$0]]
break;
case 63:
this.$ = [$$[$0-2],$$[$0]]
break;
case 66:
this.$ = ["\""+$$[$0-2]+"\"",$$[$0]]
break;
case 67:
this.$ = ["anonymous_function","Object",$$[$0-3],["statements",[["semicolon",["return",$$[$0-1]]]]]];
break;
case 68:
this.$ = ["initializer_list","Object",[]];
break;
case 69:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 70:
this.$ = ["associative_array","Object","Object",[]];
break;
case 71: case 72:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 73:
this.$ = ["initialize_set","Object",$$[$0-1]];
break;
case 74:
this.$ = ["in",$$[$0-3],$$[$0-1]];
break;
case 75:
this.$ = ["list_comprehension",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 76:
this.$ = ["list_comprehension",$$[$0-7],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 77:
this.$= ["function_call",$$[$0-2],[]];
break;
case 78:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 79:
this.$= ["function_call",$$[$0-3],$$[$0-1]];
break;
case 80: case 83:
this.$ = yytext;
break;
case 82:
this.$ = ["parentheses",$$[$0-1]]
break;
case 84:
this.$ = ["list_comprehensions",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 86:
this.$ = ["Object",$$[$0]];
break;
case 93:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 94:
this.$ = ["else",$$[$0]];
break;
case 97:
this.$ = ["statements",[$$[$0]]]
break;
}
},
table: [{3:1,4:2,6:3,10:$V0,11:$V1,17:4,18:5,19:$V2,20:7,21:8,26:$V3,30:$V4,35:12,37:$V5,38:14},{1:[3]},{5:[1,16]},{4:17,5:[2,3],6:3,10:$V0,11:$V1,17:4,18:5,19:$V2,20:7,21:8,26:$V3,30:$V4,35:12,37:$V5,38:14},o($V6,[2,7]),o($V6,[2,8]),{11:[1,18]},o($V6,[2,10]),o($V6,[2,11]),{11:[1,19]},{11:$V7,12:$V8,27:20,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:[1,32]},o($Vf,[2,28],{36:[1,33]}),{11:$V7,12:$V8,27:34,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{33:[1,35]},{33:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],62:[1,41]},{1:[2,1]},{5:[2,2]},{15:[1,42]},{12:[1,43]},{15:[1,44],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},{11:$V7,12:$V8,27:61,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vw,$Vx),o($Vw,[2,56]),o($Vw,[2,57],{62:[1,62]}),{11:$V7,12:$V8,27:65,53:$V9,59:64,60:23,61:24,62:$Va,71:[1,63],73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:68,53:$V9,59:22,60:23,61:24,62:$Va,63:[1,66],72:67,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:73,53:$V9,59:22,60:23,61:24,62:$Va,67:70,68:72,72:71,73:$Vb,74:[1,69],75:$Vc,77:$Vd,78:$Ve},{12:[1,74]},o($Vy,$Vz,{12:$VA}),o($Vy,[2,80]),o($Vy,[2,83]),{31:[1,76]},o($Vf,[2,27]),o($VB,[2,29],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),{11:$V7,12:$V8,27:77,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:78,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:79,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:80,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:81,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:82,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:83,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{7:84,8:85,9:$VC},{11:$VD,13:88,14:[1,87],79:89},{10:$V0,11:$V1,16:91,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},{11:$V7,12:$V8,27:99,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:100,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:101,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:102,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:103,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:104,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:105,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:106,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:107,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:108,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:109,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:110,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:111,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:112,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:113,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:114,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vw,[2,52]),{11:$V7,12:$V8,27:115,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$VD,13:116,79:89},o([14,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],$Vx,{31:[1,117]}),{14:[1,118],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},o($Vy,[2,68]),{63:[1,119]},{30:[1,120],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,63:$VF,65:$VG},o($Vy,[2,70]),{65:[1,123],74:[1,122]},{74:[1,124]},o($VH,[2,62]),{15:$VI,43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,65:$VG,74:$VF},{11:$VJ,69:126,70:127},{11:[1,134],12:$V8,14:[1,129],27:133,53:$V9,59:22,60:23,61:24,62:$Va,64:130,66:132,72:131,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:135,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($VB,[2,30],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VB,[2,31],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VB,[2,32],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VB,[2,33],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VB,[2,34],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VB,[2,35],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,63:[1,136]},o($V6,[2,9]),o($V6,[2,5],{8:85,7:137,9:$VC}),{10:[1,138]},{15:[1,139]},{14:[1,140]},o($VK,[2,88],{65:[1,141]}),o([14,15,65],[2,86]),{28:142,81:$VL,82:$VM},o($Vf,[2,97]),o($Vf,[2,16]),o($Vf,[2,17]),o($Vf,[2,18]),o($Vf,[2,19]),o($Vf,[2,20]),{11:$V7,12:$V8,27:145,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o([5,9,10,11,14,15,19,26,30,31,36,37,43,63,65,74,81,82],[2,36],{44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o([5,9,10,11,14,15,19,26,30,31,36,37,43,44,63,65,74,81,82],[2,37],{45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,38],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,39],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,40],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,41],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,42],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VN,[2,43],{51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VO,[2,44],{54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VO,[2,45],{54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VO,[2,46],{54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VP,[2,47],{57:$Vu,58:$Vv}),o($VP,[2,48],{57:$Vu,58:$Vv}),o($VP,[2,49],{57:$Vu,58:$Vv}),o($Vw,[2,50]),o($Vw,[2,51]),{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,63:[1,146]},{15:[1,147]},{11:$V7,12:$V8,59:148,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vy,[2,82]),o($Vy,[2,69]),{11:$V7,12:$V8,27:149,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:133,53:$V9,59:22,60:23,61:24,62:$Va,72:150,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vy,[2,71]),{11:$V7,12:$V8,27:152,53:$V9,59:22,60:23,61:24,62:$Va,68:151,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vy,[2,73]),{11:$V7,12:$V8,27:153,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{14:[1,154],65:[1,155]},o($VQ,[2,65]),{33:[1,156]},o($Vy,[2,77]),{14:[1,157],65:[1,158]},{14:[1,159]},o($VQ,[2,59]),o($VR,$VF,{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,65:$VG}),o([14,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,62,65],$Vz,{12:$VA,33:$VS}),{15:[1,161],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},{33:[2,55]},o($V6,[2,4]),{11:[1,162]},{10:$V0,11:$V1,16:163,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},{15:[1,164]},{11:$VD,13:165,79:89},o($Vf,[2,21]),{11:$V7,12:$V8,27:166,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{15:[1,167]},{15:[1,168],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},o($Vw,[2,54]),{11:$V7,12:$V8,27:169,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{14:[1,170]},{31:[1,171],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},o($VR,[2,89]),o($VH,[2,61]),{15:$VI,43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},o($VH,[2,63],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($Vy,[2,72]),{11:$VJ,70:172},{11:$V7,12:$V8,27:173,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},o($Vy,[2,78]),{11:[1,175],66:174},o($Vy,[2,79]),{11:$V7,12:$V8,27:176,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{10:$V0,11:$V1,16:177,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},{12:[1,178]},o($Vf,[2,12]),{10:$V0,11:$V1,16:179,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},o($VK,[2,87]),{15:[1,180],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},{10:$V0,11:$V1,16:181,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},{10:$V0,11:$V1,16:182,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},{14:[1,183],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},o($Vy,[2,74]),{11:$V7,12:$V8,27:185,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,76:184,77:$Vd,78:$Ve},o($VQ,[2,64]),o($VQ,[2,66],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($VQ,[2,58]),{33:$VS},o($VQ,[2,60],{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),o($Vf,[2,23]),{11:$VD,13:186,79:89},o($Vf,[2,13]),{10:$V0,11:$V1,16:187,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},o($Vf,[2,94]),o($Vf,[2,22]),o($Vy,[2,67]),{26:[1,189],63:[1,188]},o($VT,[2,85],{30:[1,190],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv}),{14:[1,191]},{28:192,81:$VL,82:$VM},o($Vy,[2,75]),{11:$V7,12:$V8,27:193,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{11:$V7,12:$V8,27:194,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,77:$Vd,78:$Ve},{15:[1,195]},o($Vf,[2,93]),{43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,63:[1,196]},{31:[1,197],43:$Vg,44:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv},{10:$V0,11:$V1,16:198,17:97,18:93,20:95,21:96,24:92,25:94,26:$V3,29:$VE,30:$V4,35:12,37:$V5,38:14},o($Vy,[2,76]),{11:$V7,12:$V8,27:185,53:$V9,59:22,60:23,61:24,62:$Va,73:$Vb,75:$Vc,76:199,77:$Vd,78:$Ve},o([5,9,10,11,19,26,30,37],[2,6]),o($VT,[2,84])],
defaultActions: {16:[2,1],17:[2,2],136:[2,55]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 77
break;
case 2:return 78
break;
case 3:return 9
break;
case 4:return 19
break;
case 5:return "def"
break;
case 6:return "dict"
break;
case 7:return "if"
break;
case 8:return 'of'
break;
case 9:return 30
break;
case 10:return "in"
break;
case 11:return "else"
break;
case 12:return "elif"
break;
case 13:return "while"
break;
case 14:return "return"
break;
case 15:return "lambda"
break;
case 16:return 65
break;
case 17:return '.'
break;
case 18:return 15
break;
case 19:return 36
break;
case 20:return 44
break;
case 21:return 43
break;
case 22:return 39
break;
case 23:return 40
break;
case 24:return 41
break;
case 25:return 42
break;
case 26:return 48
break;
case 27:return '>>'
break;
case 28:return 49
break;
case 29:return 46
break;
case 30:return '<<'
break;
case 31:return 47
break;
case 32:return 50
break;
case 33:return 45
break;
case 34:return 33
break;
case 35:return 57
break;
case 36:return 41
break;
case 37:return 54
break;
case 38:return 55
break;
case 39:return '%'
break;
case 40:return 53
break;
case 41:return 52
break;
case 42:return 58
break;
case 43:return 73
break;
case 44:return 74
break;
case 45:return 62
break;
case 46:return 63
break;
case 47:return 12
break;
case 48:return 14
break;
case 49:return '_'
break;
case 50:return 11
break;
case 51:return 5
break;
case 52:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:@staticmethod\b)/,/^(?:class\b)/,/^(?:def\b)/,/^(?:dict\b)/,/^(?:if\b)/,/^(?:of\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:else\b)/,/^(?:elif\b)/,/^(?:while\b)/,/^(?:return\b)/,/^(?:lambda\b)/,/^(?:,)/,/^(?:\.)/,/^(?::)/,/^(?:;)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:>=)/,/^(?:>>)/,/^(?:>)/,/^(?:<=)/,/^(?:<<)/,/^(?:<)/,/^(?:!=)/,/^(?:==)/,/^(?:=)/,/^(?:\*\*)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = python_parser;
exports.Parser = python_parser.Parser;
exports.parse = function () { return python_parser.parse.apply(python_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}