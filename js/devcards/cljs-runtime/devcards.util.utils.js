goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47112_47123 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47113_47124 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47114_47125 = true;
var _STAR_print_fn_STAR__temp_val__47115_47126 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47114_47125);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47115_47126);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47113_47124);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47112_47123);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e47106){if((e47106 instanceof Error)){
var e1 = e47106;
try{return obj.toString();
}catch (e47111){if((e47111 instanceof Error)){
var e2 = e47111;
return "<<Un-printable Type>>";
} else {
throw e47111;

}
}} else {
throw e47106;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__47121 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__47122 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__47122);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__47121);
}});

//# sourceMappingURL=devcards.util.utils.js.map
