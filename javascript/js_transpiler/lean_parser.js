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
var lean_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,16],$V3=[1,30],$V4=[1,24],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,26],$V9=[1,28],$Va=[1,29],$Vb=[1,31],$Vc=[5,10,12],$Vd=[5,9,10,12,13,15,33,37,60,63,65,71],$Ve=[1,38],$Vf=[1,42],$Vg=[1,47],$Vh=[1,44],$Vi=[1,48],$Vj=[1,49],$Vk=[1,50],$Vl=[1,51],$Vm=[1,52],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[1,58],$Vt=[1,59],$Vu=[1,60],$Vv=[1,61],$Vw=[1,62],$Vx=[1,63],$Vy=[5,9,10,12,13,15,24,32,33,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,60,61,63,65,67,71],$Vz=[5,9,10,12,13,15,24,28,32,33,35,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,60,61,63,65,67,71],$VA=[2,47],$VB=[5,8,10,12],$VC=[15,67],$VD=[5,9,10,12,13,15,24,32,33,37,39,40,41,42,43,44,45,46,47,60,61,63,65,67,71],$VE=[5,9,10,12,13,15,24,32,33,37,39,40,41,42,43,44,45,46,47,48,49,50,60,61,63,65,67,71],$VF=[5,9,10,12,13,15,24,32,33,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,60,61,63,65,67,71];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement_":6,"data_type_or":7,"|":8,"IDENTIFIER":9,"inductive":10,"=":11,"def":12,"(":13,"parameters":14,")":15,":":16,":=":17,"statements":18,"statement":19,"statement_with_parentheses":20,"statement_with_semicolon":21,"if":22,"e":23,"then":24,"elif":25,"case":26,"parentheses_expr":27,"of":28,"case_statements":29,"let":30,"declare_vars":31,"in":32,"end":33,"case_statement":34,"=>":35,"case_statements_":36,"_":37,"declare_var":38,"and":39,"||":40,"&&":41,"==":42,"/=":43,"<=":44,"<":45,">=":46,">":47,"++":48,"+":49,"-":50,"*":51,"/":52,"mod":53,"**":54,"^":55,"access_array":56,"!!":57,"access_arr":58,"lam":59,"[":60,"]":61,"exprs":62,"NUMBER":63,"args":64,"STRING_LITERAL":65,"list_comprehensions":66,",":67,"<-":68,"type":69,"parameter":70,"else":71,"identifiers":72,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"|",9:"IDENTIFIER",10:"inductive",11:"=",12:"def",13:"(",15:")",16:":",17:":=",22:"if",24:"then",26:"case",28:"of",30:"let",32:"in",33:"end",35:"=>",37:"_",39:"and",40:"||",41:"&&",42:"==",43:"/=",44:"<=",45:"<",46:">=",47:">",48:"++",49:"+",50:"-",51:"*",52:"/",53:"mod",54:"**",55:"^",57:"!!",59:"lam",60:"[",61:"]",63:"NUMBER",65:"STRING_LITERAL",67:",",68:"<-",71:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,3],[7,1],[6,5],[6,9],[6,4],[19,1],[19,1],[20,5],[20,4],[20,5],[20,3],[34,3],[36,2],[36,1],[29,4],[38,3],[31,3],[31,1],[21,1],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,1],[56,3],[27,10],[27,3],[27,2],[27,3],[27,1],[27,1],[27,3],[27,4],[27,1],[66,5],[66,1],[69,1],[70,3],[14,3],[14,1],[58,3],[58,1],[62,3],[62,1],[64,2],[64,1],[25,2],[72,3],[72,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 16: case 61:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 17: case 21: case 56: case 58:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["data_type_or",$$[$0-2],$$[$0]];
break;
case 6:
this.$ = ["algebraic_data_type",$$[$0-3],$$[$0]];
break;
case 7:
this.$ = ["function","public",$$[$0-2],$$[$0-7],$$[$0-5],$$[$0]];
break;
case 8:
this.$ = ["function","public","Object",$$[$0-2],[],$$[$0]];
break;
case 9: case 40:
this.$ = $$[$0];
break;
case 10:
this.$ = ["semicolon",$$[$0]];
break;
case 11:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 12:
this.$ = ["switch",$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["lexically_scoped_vars",$$[$0-3],$$[$0-1]];
break;
case 14: case 43: case 48:
this.$ = $$[$0-1]
break;
case 15:
this.$ = ["case",$$[$0-2],$$[$0]]
break;
case 18:
this.$ = $$[$0-3].concat([["default",["statements",$$[$0]]]])
break;
case 19:
this.$ = ["lexically_scoped_var","Object",$$[$0-2],$$[$0]]
break;
case 20: case 55: case 57: case 59: case 64:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 22:
this.$ = ["return",$$[$0]];
break;
case 23: case 24: case 25: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 37:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ['!=',$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["%",$$[$0-2],$$[$0]];
break;
case 38:
this.$ = ["**",$$[$0-2],$$[$0]];
break;
case 39:
this.$ = ["-",$$[$0]];
break;
case 41:
this.$ = ["access_array",$$[$0-2],[$$[$0]]];
break;
case 42:
this.$ = ["anonymous_function",$$[$0-3],$$[$0-6],["statements",[["semicolon",["return",$$[$0-1]]]]]];
break;
case 44:
this.$ = ["initializer_list","Object",[]];
break;
case 45:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 46: case 50:
this.$ = yytext;
break;
case 49:

			if($$[$0-2] === "not"){
				this.$ = ["!",$$[$0-1]];
			}
			else{
				this.$ = ["function_call",$$[$0-2],$$[$0-1]];
			}
		
break;
case 51:
this.$ = ["list_comprehensions",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 54:
this.$ = [$$[$0], $$[$0-2]];
break;
case 60: case 62: case 65:
this.$ = [$$[$0]];
break;
case 63:
this.$ = ["else",$$[$0]];
break;
case 66:
this.$ = ["statements",[$$[$0]]]
break;
}
},
table: [{3:1,4:2,6:3,10:$V0,12:$V1},{1:[3]},{5:[1,6]},{4:7,5:[2,3],6:3,10:$V0,12:$V1},{9:[1,8]},{9:[1,9]},{1:[2,1]},{5:[2,2]},{11:[1,10]},{13:[1,11],17:[1,12]},{8:[1,13]},{9:$V2,14:14,70:15},{9:$V3,13:$V4,18:17,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},{7:32,9:[1,33]},{15:[1,34]},{15:[2,56],67:[1,35]},{16:[1,36]},o($Vc,[2,8]),o($Vd,[2,66]),o($Vd,[2,9]),o($Vd,[2,10]),{9:$V3,13:$Ve,23:37,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,27:39,60:$V9,63:$Va,65:$Vb},{9:$Vf,31:40,38:41},{9:$Vg,13:$V4,20:43,22:$V5,23:46,26:$V6,27:27,30:$V7,50:$V8,56:45,59:$Vh,60:$V9,63:$Va,65:$Vb},o($Vd,[2,22],{40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),{9:$V3,13:$Ve,23:64,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},o($Vy,[2,40]),{9:$V3,13:$Ve,23:67,27:27,50:$V8,60:$V9,61:[1,65],62:66,63:$Va,65:$Vb},o($Vz,[2,46]),o($Vz,$VA),o($Vz,[2,50]),o($Vc,[2,6],{8:[1,68]}),o($VB,[2,5]),{16:[1,69]},{9:$V2,14:70,70:15},{9:[1,72],69:71},{24:[1,73],40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx},{9:$Vg,13:$Ve,23:46,27:27,50:$V8,56:45,59:$Vh,60:$V9,63:$Va,65:$Vb},{28:[1,74]},{32:[1,75]},{32:[2,21],39:[1,76]},{11:[1,77]},{15:[1,78]},{13:[1,79]},{15:[1,80]},{15:[1,81],40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx},o([15,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],$VA,{64:82,27:84,9:$V3,13:$Ve,57:[1,83],60:$V9,63:$Va,65:$Vb}),{9:$V3,13:$Ve,23:85,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:86,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:87,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:88,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:89,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:90,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:91,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:92,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:93,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:94,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:95,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:96,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:97,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:98,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:99,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,23:100,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},o($Vy,[2,39]),o($Vz,[2,44]),{61:[1,101]},{40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,61:[2,60],67:[1,102]},{9:[1,103]},{9:[1,104]},{15:[2,55]},o($VC,[2,54]),o($VC,[2,53]),{9:$V3,13:$V4,18:105,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,27:109,29:106,34:108,36:107,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$V4,18:110,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},{9:$Vf,31:111,38:41},{9:$V3,13:$Ve,23:112,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},o($Vd,[2,14]),{9:$V2,14:113,70:15},o($Vz,[2,43]),o($Vz,[2,48]),{15:[1,114]},{9:$V3,13:$Ve,27:116,58:115,60:$V9,63:$Va,65:$Vb},{9:$V3,13:$Ve,15:[2,62],27:84,60:$V9,63:$Va,64:117,65:$Vb},o([5,9,10,12,13,15,24,32,33,37,39,40,60,61,63,65,67,71],[2,23],{41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o([5,9,10,12,13,15,24,32,33,37,39,40,41,60,61,63,65,67,71],[2,24],{42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,25],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,26],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,27],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,28],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,29],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VD,[2,30],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VE,[2,31],{51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VE,[2,32],{51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VE,[2,33],{51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),o($VF,[2,34],{54:$Vw,55:$Vx}),o($VF,[2,35],{54:$Vw,55:$Vx}),o($VF,[2,36],{54:$Vw,55:$Vx}),o($Vy,[2,37]),o($Vy,[2,38]),o($Vz,[2,45]),{9:$V3,13:$Ve,23:67,27:27,50:$V8,60:$V9,62:118,63:$Va,65:$Vb},o($VB,[2,4]),{17:[1,119]},{25:120,71:[1,121]},o($Vd,[2,12]),{37:[1,122]},{9:$V3,13:$Ve,27:109,34:108,36:123,37:[2,17],60:$V9,63:$Va,65:$Vb},{35:[1,124]},{33:[1,125]},{32:[2,20]},o([32,39],[2,19],{40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx}),{15:[1,126]},o($Vz,[2,49]),{15:[2,41]},{15:[2,58],57:[1,127]},{15:[2,61]},{61:[2,59]},{9:$V3,13:$V4,18:128,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},o($Vd,[2,11]),{9:$V3,13:$V4,18:129,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},{35:[1,130]},{37:[2,16]},{9:$V3,13:$V4,18:131,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},o($Vd,[2,13]),{16:[1,132]},{9:$V3,13:$Ve,27:116,58:133,60:$V9,63:$Va,65:$Vb},o($Vc,[2,7]),o($Vd,[2,63]),{9:$V3,13:$V4,18:134,19:18,20:19,21:20,22:$V5,23:25,26:$V6,27:27,30:$V7,50:$V8,60:$V9,63:$Va,65:$Vb},o([9,13,37,60,63,65],[2,15]),{9:[1,135]},{15:[2,57]},o($Vd,[2,18]),{35:[1,136]},{9:$V3,13:$Ve,23:137,27:27,50:$V8,60:$V9,63:$Va,65:$Vb},{15:[1,138],40:$Vi,41:$Vj,42:$Vk,43:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx},o($Vz,[2,42])],
defaultActions: {6:[2,1],7:[2,2],70:[2,55],111:[2,20],115:[2,41],117:[2,61],118:[2,59],123:[2,16],133:[2,57]},
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
case 1:return 63
break;
case 2:return 65
break;
case 3:return "otherwise"
break;
case 4:return "if"
break;
case 5:return 28
break;
case 6:return 'orelse'
break;
case 7:return 'andalso'
break;
case 8:return 39
break;
case 9:return "in"
break;
case 10:return "let"
break;
case 11:return "else"
break;
case 12:return "case"
break;
case 13:return "then"
break;
case 14:return 59
break;
case 15:return "inductive"
break;
case 16:return "return"
break;
case 17:return 33
break;
case 18:return 53
break;
case 19:return 12
break;
case 20:return 67
break;
case 21:return ';'
break;
case 22:return '.'
break;
case 23:return 17
break;
case 24:return '::'
break;
case 25:return 16
break;
case 26:return 41
break;
case 27:return 40
break;
case 28:return 8
break;
case 29:return 46
break;
case 30:return 47
break;
case 31:return 44
break;
case 32:return 68
break;
case 33:return '->'
break;
case 34:return 45
break;
case 35:return 42
break;
case 36:return 11
break;
case 37:return 55
break;
case 38:return '*='
break;
case 39:return 54
break;
case 40:return 51
break;
case 41:return 43
break;
case 42:return 52
break;
case 43:return '-='
break;
case 44:return '--'
break;
case 45:return 50
break;
case 46:return 48
break;
case 47:return '+='
break;
case 48:return 49
break;
case 49:return '{'
break;
case 50:return '}'
break;
case 51:return 57
break;
case 52:return 60
break;
case 53:return 61
break;
case 54:return 13
break;
case 55:return 15
break;
case 56:return 37
break;
case 57:return 9
break;
case 58:return 5
break;
case 59:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:otherwise\b)/,/^(?:if\b)/,/^(?:of\b)/,/^(?:orelse\b)/,/^(?:andalso\b)/,/^(?:and\b)/,/^(?:in\b)/,/^(?:let\b)/,/^(?:else\b)/,/^(?:case\b)/,/^(?:then\b)/,/^(?:lam\b)/,/^(?:inductive\b)/,/^(?:return\b)/,/^(?:end\b)/,/^(?:mod\b)/,/^(?:def\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::=)/,/^(?:::)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<-)/,/^(?:->)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\^)/,/^(?:\*=)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\{)/,/^(?:\})/,/^(?:!!)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],"inclusive":true}}
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
exports.parser = lean_parser;
exports.Parser = lean_parser.Parser;
exports.parse = function () { return lean_parser.parse.apply(lean_parser, arguments); };
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