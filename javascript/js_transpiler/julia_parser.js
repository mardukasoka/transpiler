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
var julia_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,7],$V2=[1,12],$V3=[1,9],$V4=[1,10],$V5=[1,14],$V6=[5,12,58,60],$V7=[5,9,12,13,14,22,24,58,60,61],$V8=[1,30],$V9=[1,23],$Va=[1,24],$Vb=[1,18],$Vc=[1,20],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,31],$Vh=[1,39],$Vi=[1,38],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[5,9,11,12,13,14,17,20,22,24,29,30,31,32,33,34,35,36,37,38,39,40,46,50,58,60,61],$Vw=[5,9,11,12,13,14,17,20,22,24,27,29,30,31,32,33,34,35,36,37,38,39,40,46,50,55,58,60,61],$Vx=[1,64],$Vy=[1,93],$Vz=[2,51],$VA=[20,46],$VB=[17,50],$VC=[1,107],$VD=[1,109],$VE=[5,9,11,12,13,14,17,20,22,24,29,30,31,32,33,34,46,50,58,60,61],$VF=[5,9,11,12,13,14,17,20,22,24,29,30,31,32,33,34,35,36,37,46,50,58,60,61];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements":4,"EOF":5,"statements_":6,"statement":7,"statement_with_semicolon":8,"while":9,"e":10,"do":11,"end":12,"for":13,"IDENTIFIER":14,"in":15,"dot_expr":16,",":17,"pairs":18,"(":19,")":20,"if_statement":21,"function":22,"parameters":23,"return":24,"access_array":25,"=":26,".":27,"function_call":28,"or":29,"and":30,"<=":31,"<":32,">=":33,">":34,"+":35,"-":36,"..":37,"*":38,"/":39,"%":40,"not_expr":41,"!":42,"parentheses_expr":43,"[":44,"access_arr":45,"]":46,"exprs":47,"{":48,"key_values":49,"}":50,"NUMBER":51,"STRING_LITERAL":52,"type":53,"parameter":54,"][":55,"types":56,"elif":57,"elseif":58,"else_statement":59,"else":60,"if":61,"identifiers":62,"key_value":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",11:"do",12:"end",13:"for",14:"IDENTIFIER",15:"in",17:",",18:"pairs",19:"(",20:")",22:"function",24:"return",26:"=",27:".",29:"or",30:"and",31:"<=",32:"<",33:">=",34:">",35:"+",36:"-",37:"..",38:"*",39:"/",40:"%",42:"!",44:"[",46:"]",48:"{",50:"}",51:"NUMBER",52:"STRING_LITERAL",55:"][",58:"elseif",60:"else",61:"if"},
productions_: [0,[3,2],[6,2],[6,1],[4,1],[7,1],[7,5],[7,6],[7,12],[7,1],[7,7],[8,2],[8,3],[8,3],[8,3],[8,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[41,2],[41,1],[16,3],[16,1],[25,4],[28,3],[28,4],[43,3],[43,6],[43,1],[43,1],[43,2],[43,3],[43,3],[43,1],[43,1],[43,1],[53,1],[54,1],[23,3],[23,1],[23,0],[45,3],[45,1],[47,3],[47,1],[56,3],[56,1],[57,4],[57,3],[57,1],[59,2],[21,5],[21,4],[62,3],[62,1],[49,3],[49,1],[63,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 33: case 50: case 53:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["semicolon",$$[$0]];
break;
case 6:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 7:
this.$ = ["foreach","Object",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 8:
this.$ = ["foreach_with_index","Object",$$[$0-10],$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["return",$$[$0]];
break;
case 12: case 13:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 14:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 16:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["-",$$[$0]];
break;
case 30:
this.$ = ["!", [".",$$[$0]]];
break;
case 31:
this.$ = [".", $$[$0]];
break;
case 32: case 49: case 52: case 54: case 56: case 64:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 34:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 35:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 36:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 37:
this.$ = $$[$0-1];
break;
case 38:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 41:
this.$ = ["initializer_list","Object",[]];
break;
case 42:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 43:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 44: case 45: case 46:
this.$ = yytext;
break;
case 48:
this.$ = ["Object", $$[$0]];
break;
case 51:
this.$ = [];
break;
case 55: case 57: case 65: case 67:
this.$ = [$$[$0]];
break;
case 58:
this.$ = ["elif",$$[$0-2],$$[$0-1],$$[$0]]
break;
case 59:
this.$ = ["elif",$$[$0-1],$$[$0]]
break;
case 61:
this.$ = ["else",$$[$0]];
break;
case 62:
this.$ = ["if",$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 63:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 66:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 68:
this.$ = [$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{1:[3]},{5:[1,15]},o($V6,[2,4]),o($V6,[2,3],{7:4,8:5,21:8,25:11,28:13,6:16,9:$V0,13:$V1,14:$V2,22:$V3,24:$V4,61:$V5}),o($V7,[2,5]),{10:17,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{14:[1,32]},o($V7,[2,9]),{14:[1,33]},{10:34,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{26:[1,35]},{19:$Vh,26:[1,36],27:[1,37],44:$Vi},o($V7,[2,15]),{10:40,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{1:[2,1]},o($V6,[2,2]),{11:[1,41],29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{10:54,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},o($Vv,[2,29]),{14:$V8,16:55,19:$V9,22:$Va,25:25,28:26,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},o($Vv,[2,31]),o($Vv,[2,33],{27:[1,56]}),{10:57,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{19:[1,58]},o($Vw,[2,39]),o($Vw,[2,40]),{10:61,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,46:[1,59],47:60,48:$Ve,51:$Vf,52:$Vg},{49:62,52:$Vx,63:63},o($Vw,[2,44]),o($Vw,[2,45],{19:$Vh,44:$Vi}),o($Vw,[2,46]),{15:[1,65],17:[1,66]},{19:[1,67]},o($V7,[2,11],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),{10:68,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:69,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{14:$V8,16:70,19:$V9,22:$Va,25:25,28:26,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{14:$V8,19:$V9,22:$Va,25:25,28:26,43:72,44:$Vd,45:71,48:$Ve,51:$Vf,52:$Vg},{10:61,14:$V8,16:21,19:$V9,20:[1,73],22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,47:74,48:$Ve,51:$Vf,52:$Vg},{4:75,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,61:$V5},{4:76,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{10:77,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:78,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:79,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:80,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:81,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:82,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:83,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:84,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:85,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:86,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:87,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{10:88,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},o($Vv,[2,28]),o($Vv,[2,30]),{14:$V8,16:89,19:$V9,22:$Va,25:25,28:26,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{20:[1,90],29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{14:$Vy,20:$Vz,23:91,54:92},o($Vw,[2,41]),{46:[1,94]},o($VA,[2,55],{17:[1,95],29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),{17:[1,97],50:[1,96]},o($VB,[2,67]),{26:[1,98]},{14:$V8,16:99,19:$V9,22:$Va,25:25,28:26,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{14:[1,100]},{14:$Vy,20:$Vz,23:101,54:92},o($V7,[2,12],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($V7,[2,13],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($V7,[2,14]),{46:[1,102]},{46:[2,53],55:[1,103]},o($Vw,[2,35]),{20:[1,104]},{12:[1,106],57:105,58:$VC,59:108,60:$VD},{12:[1,110]},o([5,9,11,12,13,14,17,20,22,24,29,46,50,58,60,61],[2,16],{30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o([5,9,11,12,13,14,17,20,22,24,29,30,46,50,58,60,61],[2,17],{31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,18],{35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,19],{35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,20],{35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,21],{35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VF,[2,22],{38:$Vs,39:$Vt,40:$Vu}),o($VF,[2,23],{38:$Vs,39:$Vt,40:$Vu}),o($VF,[2,24],{38:$Vs,39:$Vt,40:$Vu}),o($Vv,[2,25]),o($Vv,[2,26]),o($Vv,[2,27]),o($Vv,[2,32]),o($Vw,[2,37]),{20:[1,111]},{17:[1,112],20:[2,50]},o([17,20],[2,48]),o($Vw,[2,42]),{10:61,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,47:113,48:$Ve,51:$Vf,52:$Vg},o($Vw,[2,43]),{52:$Vx,63:114},{10:115,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{4:116,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{15:[1,117]},{20:[1,118]},o([5,9,11,12,13,14,17,20,22,24,26,27,29,30,31,32,33,34,35,36,37,38,39,40,46,50,55,58,60,61],[2,34]),{14:$V8,19:$V9,22:$Va,25:25,28:26,43:72,44:$Vd,45:119,48:$Ve,51:$Vf,52:$Vg},o($Vw,[2,36]),{12:[1,120]},o($V7,[2,63]),{10:121,14:$V8,16:21,19:$V9,22:$Va,25:25,28:26,36:$Vb,41:19,42:$Vc,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},{12:[2,60]},{4:122,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},o($V7,[2,6]),{4:123,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{14:$Vy,20:$Vz,23:124,54:92},o($VA,[2,54]),o($VB,[2,66]),o($VB,[2,68],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),{12:[1,125]},{18:[1,126]},{4:127,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{46:[2,52]},o($V7,[2,62]),{4:128,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,61:$V5},{12:[2,61]},{12:[1,129]},{20:[2,49]},o($V7,[2,7]),{19:[1,130]},{12:[1,131]},{12:[2,59],57:132,58:$VC,59:108,60:$VD},o($Vw,[2,38]),{14:$V8,16:133,19:$V9,22:$Va,25:25,28:26,43:22,44:$Vd,48:$Ve,51:$Vf,52:$Vg},o($V7,[2,10]),{12:[2,58]},{20:[1,134]},{11:[1,135]},{4:136,6:3,7:4,8:5,9:$V0,13:$V1,14:$V2,21:8,22:$V3,24:$V4,25:11,28:13,61:$V5},{12:[1,137]},o($V7,[2,8])],
defaultActions: {15:[2,1],108:[2,60],119:[2,52],122:[2,61],124:[2,49],132:[2,58]},
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
case 1:return 51
break;
case 2:return 52
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return 58
break;
case 7:return 61
break;
case 8:return 60
break;
case 9:return 24
break;
case 10:return 9
break;
case 11:return 13
break;
case 12:return 'of'
break;
case 13:return 'not'
break;
case 14:return 17
break;
case 15:return 37
break;
case 16:return 27
break;
case 17:return ':'
break;
case 18:return 30
break;
case 19:return 29
break;
case 20:return 33
break;
case 21:return 34
break;
case 22:return 31
break;
case 23:return 32
break;
case 24:return '=='
break;
case 25:return 26
break;
case 26:return '*='
break;
case 27:return 38
break;
case 28:return 39
break;
case 29:return 40
break;
case 30:return 36
break;
case 31:return 35
break;
case 32:return '^'
break;
case 33:return 48
break;
case 34:return 50
break;
case 35:return 55
break;
case 36:return 44
break;
case 37:return 46
break;
case 38:return 19
break;
case 39:return 20
break;
case 40:return '_'
break;
case 41:return 18
break;
case 42:return 15
break;
case 43:return 11
break;
case 44:return 14
break;
case 45:return 5
break;
case 46:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
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
exports.parser = julia_parser;
exports.Parser = julia_parser.Parser;
exports.parse = function () { return julia_parser.parse.apply(julia_parser, arguments); };
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