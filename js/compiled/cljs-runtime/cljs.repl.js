goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56897){
var map__56898 = p__56897;
var map__56898__$1 = (((((!((map__56898 == null))))?(((((map__56898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56898):map__56898);
var m = map__56898__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56901_57011 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56902_57012 = null;
var count__56903_57013 = (0);
var i__56904_57014 = (0);
while(true){
if((i__56904_57014 < count__56903_57013)){
var f_57015 = chunk__56902_57012.cljs$core$IIndexed$_nth$arity$2(null,i__56904_57014);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57015], 0));


var G__57016 = seq__56901_57011;
var G__57017 = chunk__56902_57012;
var G__57018 = count__56903_57013;
var G__57019 = (i__56904_57014 + (1));
seq__56901_57011 = G__57016;
chunk__56902_57012 = G__57017;
count__56903_57013 = G__57018;
i__56904_57014 = G__57019;
continue;
} else {
var temp__5735__auto___57020 = cljs.core.seq(seq__56901_57011);
if(temp__5735__auto___57020){
var seq__56901_57021__$1 = temp__5735__auto___57020;
if(cljs.core.chunked_seq_QMARK_(seq__56901_57021__$1)){
var c__4556__auto___57022 = cljs.core.chunk_first(seq__56901_57021__$1);
var G__57023 = cljs.core.chunk_rest(seq__56901_57021__$1);
var G__57024 = c__4556__auto___57022;
var G__57025 = cljs.core.count(c__4556__auto___57022);
var G__57026 = (0);
seq__56901_57011 = G__57023;
chunk__56902_57012 = G__57024;
count__56903_57013 = G__57025;
i__56904_57014 = G__57026;
continue;
} else {
var f_57027 = cljs.core.first(seq__56901_57021__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57027], 0));


var G__57028 = cljs.core.next(seq__56901_57021__$1);
var G__57029 = null;
var G__57030 = (0);
var G__57031 = (0);
seq__56901_57011 = G__57028;
chunk__56902_57012 = G__57029;
count__56903_57013 = G__57030;
i__56904_57014 = G__57031;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57032 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57032], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57032)))?cljs.core.second(arglists_57032):arglists_57032)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56905_57033 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56906_57034 = null;
var count__56907_57035 = (0);
var i__56908_57036 = (0);
while(true){
if((i__56908_57036 < count__56907_57035)){
var vec__56923_57037 = chunk__56906_57034.cljs$core$IIndexed$_nth$arity$2(null,i__56908_57036);
var name_57038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56923_57037,(0),null);
var map__56926_57039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56923_57037,(1),null);
var map__56926_57040__$1 = (((((!((map__56926_57039 == null))))?(((((map__56926_57039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56926_57039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56926_57039):map__56926_57039);
var doc_57041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926_57040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926_57040__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57038], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57042], 0));

if(cljs.core.truth_(doc_57041)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57041], 0));
} else {
}


var G__57043 = seq__56905_57033;
var G__57044 = chunk__56906_57034;
var G__57045 = count__56907_57035;
var G__57046 = (i__56908_57036 + (1));
seq__56905_57033 = G__57043;
chunk__56906_57034 = G__57044;
count__56907_57035 = G__57045;
i__56908_57036 = G__57046;
continue;
} else {
var temp__5735__auto___57047 = cljs.core.seq(seq__56905_57033);
if(temp__5735__auto___57047){
var seq__56905_57048__$1 = temp__5735__auto___57047;
if(cljs.core.chunked_seq_QMARK_(seq__56905_57048__$1)){
var c__4556__auto___57049 = cljs.core.chunk_first(seq__56905_57048__$1);
var G__57050 = cljs.core.chunk_rest(seq__56905_57048__$1);
var G__57051 = c__4556__auto___57049;
var G__57052 = cljs.core.count(c__4556__auto___57049);
var G__57053 = (0);
seq__56905_57033 = G__57050;
chunk__56906_57034 = G__57051;
count__56907_57035 = G__57052;
i__56908_57036 = G__57053;
continue;
} else {
var vec__56928_57054 = cljs.core.first(seq__56905_57048__$1);
var name_57055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56928_57054,(0),null);
var map__56931_57056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56928_57054,(1),null);
var map__56931_57057__$1 = (((((!((map__56931_57056 == null))))?(((((map__56931_57056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56931_57056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56931_57056):map__56931_57056);
var doc_57058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56931_57057__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56931_57057__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57055], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57059], 0));

if(cljs.core.truth_(doc_57058)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57058], 0));
} else {
}


var G__57060 = cljs.core.next(seq__56905_57048__$1);
var G__57061 = null;
var G__57062 = (0);
var G__57063 = (0);
seq__56905_57033 = G__57060;
chunk__56906_57034 = G__57061;
count__56907_57035 = G__57062;
i__56908_57036 = G__57063;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56933 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56934 = null;
var count__56935 = (0);
var i__56936 = (0);
while(true){
if((i__56936 < count__56935)){
var role = chunk__56934.cljs$core$IIndexed$_nth$arity$2(null,i__56936);
var temp__5735__auto___57064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57064__$1)){
var spec_57065 = temp__5735__auto___57064__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57065)], 0));
} else {
}


var G__57066 = seq__56933;
var G__57067 = chunk__56934;
var G__57068 = count__56935;
var G__57069 = (i__56936 + (1));
seq__56933 = G__57066;
chunk__56934 = G__57067;
count__56935 = G__57068;
i__56936 = G__57069;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56933);
if(temp__5735__auto____$1){
var seq__56933__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56933__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56933__$1);
var G__57070 = cljs.core.chunk_rest(seq__56933__$1);
var G__57071 = c__4556__auto__;
var G__57072 = cljs.core.count(c__4556__auto__);
var G__57073 = (0);
seq__56933 = G__57070;
chunk__56934 = G__57071;
count__56935 = G__57072;
i__56936 = G__57073;
continue;
} else {
var role = cljs.core.first(seq__56933__$1);
var temp__5735__auto___57074__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57074__$2)){
var spec_57075 = temp__5735__auto___57074__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57075)], 0));
} else {
}


var G__57076 = cljs.core.next(seq__56933__$1);
var G__57077 = null;
var G__57078 = (0);
var G__57079 = (0);
seq__56933 = G__57076;
chunk__56934 = G__57077;
count__56935 = G__57078;
i__56936 = G__57079;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57080 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57081 = cljs.core.ex_cause(t);
via = G__57080;
t = G__57081;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56941 = datafied_throwable;
var map__56941__$1 = (((((!((map__56941 == null))))?(((((map__56941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56941):map__56941);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56941__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56942 = cljs.core.last(via);
var map__56942__$1 = (((((!((map__56942 == null))))?(((((map__56942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56942):map__56942);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56943 = data;
var map__56943__$1 = (((((!((map__56943 == null))))?(((((map__56943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56943):map__56943);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56944 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56944__$1 = (((((!((map__56944 == null))))?(((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944):map__56944);
var top_data = map__56944__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56949 = phase;
var G__56949__$1 = (((G__56949 instanceof cljs.core.Keyword))?G__56949.fqn:null);
switch (G__56949__$1) {
case "read-source":
var map__56950 = data;
var map__56950__$1 = (((((!((map__56950 == null))))?(((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56950):map__56950);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56952 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56952);
var G__56952__$2 = (cljs.core.truth_((function (){var fexpr__56953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56953.cljs$core$IFn$_invoke$arity$1 ? fexpr__56953.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56953.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56952__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56952__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56952__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56954 = top_data;
var G__56954__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56954);
var G__56954__$2 = (cljs.core.truth_((function (){var fexpr__56955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56955.cljs$core$IFn$_invoke$arity$1 ? fexpr__56955.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56955.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56954__$1);
var G__56954__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56954__$2);
var G__56954__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56954__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56954__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56956 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(3),null);
var G__56959 = top_data;
var G__56959__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56959,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56959);
var G__56959__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56959__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56959__$1);
var G__56959__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56959__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56959__$2);
var G__56959__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56959__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56959__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56959__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56959__$4;
}

break;
case "execution":
var vec__56960 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56960,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56960,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56960,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56960,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56940_SHARP_){
var or__4126__auto__ = (p1__56940_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56964.cljs$core$IFn$_invoke$arity$1 ? fexpr__56964.cljs$core$IFn$_invoke$arity$1(p1__56940_SHARP_) : fexpr__56964.call(null,p1__56940_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56965 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56965__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56965);
var G__56965__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56965__$1);
var G__56965__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56965__$2);
var G__56965__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56965__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56949__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56968){
var map__56969 = p__56968;
var map__56969__$1 = (((((!((map__56969 == null))))?(((((map__56969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56969):map__56969);
var triage_data = map__56969__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56969__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56971 = phase;
var G__56971__$1 = (((G__56971 instanceof cljs.core.Keyword))?G__56971.fqn:null);
switch (G__56971__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56972 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56973 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56974 = loc;
var G__56975 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56976_57091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56977_57092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56978_57093 = true;
var _STAR_print_fn_STAR__temp_val__56979_57094 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56978_57093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56979_57094);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56977_57092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56976_57091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56972,G__56973,G__56974,G__56975) : format.call(null,G__56972,G__56973,G__56974,G__56975));

break;
case "macroexpansion":
var G__56980 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56981 = cause_type;
var G__56982 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56983 = loc;
var G__56984 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56980,G__56981,G__56982,G__56983,G__56984) : format.call(null,G__56980,G__56981,G__56982,G__56983,G__56984));

break;
case "compile-syntax-check":
var G__56985 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56986 = cause_type;
var G__56987 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56988 = loc;
var G__56989 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56985,G__56986,G__56987,G__56988,G__56989) : format.call(null,G__56985,G__56986,G__56987,G__56988,G__56989));

break;
case "compilation":
var G__56990 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56991 = cause_type;
var G__56992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56993 = loc;
var G__56994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56990,G__56991,G__56992,G__56993,G__56994) : format.call(null,G__56990,G__56991,G__56992,G__56993,G__56994));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56995 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56996 = symbol;
var G__56997 = loc;
var G__56998 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56999_57095 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57000_57096 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57001_57097 = true;
var _STAR_print_fn_STAR__temp_val__57002_57098 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57001_57097);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57002_57098);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56967_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56967_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57000_57096);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56999_57095);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56995,G__56996,G__56997,G__56998) : format.call(null,G__56995,G__56996,G__56997,G__56998));
} else {
var G__57003 = "Execution error%s at %s(%s).\n%s\n";
var G__57004 = cause_type;
var G__57005 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57006 = loc;
var G__57007 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57003,G__57004,G__57005,G__57006,G__57007) : format.call(null,G__57003,G__57004,G__57005,G__57006,G__57007));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56971__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
