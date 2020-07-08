goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45121){
var map__45122 = p__45121;
var map__45122__$1 = (((((!((map__45122 == null))))?(((((map__45122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45122):map__45122);
var m = map__45122__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45122__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45122__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__45128_45326 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45129_45327 = null;
var count__45130_45328 = (0);
var i__45131_45329 = (0);
while(true){
if((i__45131_45329 < count__45130_45328)){
var f_45330 = chunk__45129_45327.cljs$core$IIndexed$_nth$arity$2(null,i__45131_45329);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45330], 0));


var G__45331 = seq__45128_45326;
var G__45332 = chunk__45129_45327;
var G__45333 = count__45130_45328;
var G__45334 = (i__45131_45329 + (1));
seq__45128_45326 = G__45331;
chunk__45129_45327 = G__45332;
count__45130_45328 = G__45333;
i__45131_45329 = G__45334;
continue;
} else {
var temp__5735__auto___45335 = cljs.core.seq(seq__45128_45326);
if(temp__5735__auto___45335){
var seq__45128_45336__$1 = temp__5735__auto___45335;
if(cljs.core.chunked_seq_QMARK_(seq__45128_45336__$1)){
var c__4609__auto___45337 = cljs.core.chunk_first(seq__45128_45336__$1);
var G__45338 = cljs.core.chunk_rest(seq__45128_45336__$1);
var G__45339 = c__4609__auto___45337;
var G__45340 = cljs.core.count(c__4609__auto___45337);
var G__45341 = (0);
seq__45128_45326 = G__45338;
chunk__45129_45327 = G__45339;
count__45130_45328 = G__45340;
i__45131_45329 = G__45341;
continue;
} else {
var f_45342 = cljs.core.first(seq__45128_45336__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45342], 0));


var G__45343 = cljs.core.next(seq__45128_45336__$1);
var G__45344 = null;
var G__45345 = (0);
var G__45346 = (0);
seq__45128_45326 = G__45343;
chunk__45129_45327 = G__45344;
count__45130_45328 = G__45345;
i__45131_45329 = G__45346;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45349 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45349], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45349)))?cljs.core.second(arglists_45349):arglists_45349)], 0));
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
var seq__45152_45354 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45153_45355 = null;
var count__45154_45356 = (0);
var i__45155_45357 = (0);
while(true){
if((i__45155_45357 < count__45154_45356)){
var vec__45180_45360 = chunk__45153_45355.cljs$core$IIndexed$_nth$arity$2(null,i__45155_45357);
var name_45361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180_45360,(0),null);
var map__45183_45362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180_45360,(1),null);
var map__45183_45363__$1 = (((((!((map__45183_45362 == null))))?(((((map__45183_45362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45183_45362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45183_45362):map__45183_45362);
var doc_45364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183_45363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183_45363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45361], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45365], 0));

if(cljs.core.truth_(doc_45364)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45364], 0));
} else {
}


var G__45366 = seq__45152_45354;
var G__45367 = chunk__45153_45355;
var G__45368 = count__45154_45356;
var G__45369 = (i__45155_45357 + (1));
seq__45152_45354 = G__45366;
chunk__45153_45355 = G__45367;
count__45154_45356 = G__45368;
i__45155_45357 = G__45369;
continue;
} else {
var temp__5735__auto___45370 = cljs.core.seq(seq__45152_45354);
if(temp__5735__auto___45370){
var seq__45152_45371__$1 = temp__5735__auto___45370;
if(cljs.core.chunked_seq_QMARK_(seq__45152_45371__$1)){
var c__4609__auto___45372 = cljs.core.chunk_first(seq__45152_45371__$1);
var G__45373 = cljs.core.chunk_rest(seq__45152_45371__$1);
var G__45374 = c__4609__auto___45372;
var G__45375 = cljs.core.count(c__4609__auto___45372);
var G__45376 = (0);
seq__45152_45354 = G__45373;
chunk__45153_45355 = G__45374;
count__45154_45356 = G__45375;
i__45155_45357 = G__45376;
continue;
} else {
var vec__45209_45377 = cljs.core.first(seq__45152_45371__$1);
var name_45378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45209_45377,(0),null);
var map__45212_45379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45209_45377,(1),null);
var map__45212_45380__$1 = (((((!((map__45212_45379 == null))))?(((((map__45212_45379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45212_45379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45212_45379):map__45212_45379);
var doc_45381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45212_45380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45212_45380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45378], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45382], 0));

if(cljs.core.truth_(doc_45381)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45381], 0));
} else {
}


var G__45383 = cljs.core.next(seq__45152_45371__$1);
var G__45384 = null;
var G__45385 = (0);
var G__45386 = (0);
seq__45152_45354 = G__45383;
chunk__45153_45355 = G__45384;
count__45154_45356 = G__45385;
i__45155_45357 = G__45386;
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

var seq__45214 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45215 = null;
var count__45216 = (0);
var i__45217 = (0);
while(true){
if((i__45217 < count__45216)){
var role = chunk__45215.cljs$core$IIndexed$_nth$arity$2(null,i__45217);
var temp__5735__auto___45387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45387__$1)){
var spec_45388 = temp__5735__auto___45387__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45388)], 0));
} else {
}


var G__45389 = seq__45214;
var G__45390 = chunk__45215;
var G__45391 = count__45216;
var G__45392 = (i__45217 + (1));
seq__45214 = G__45389;
chunk__45215 = G__45390;
count__45216 = G__45391;
i__45217 = G__45392;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45214);
if(temp__5735__auto____$1){
var seq__45214__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45214__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45214__$1);
var G__45393 = cljs.core.chunk_rest(seq__45214__$1);
var G__45394 = c__4609__auto__;
var G__45395 = cljs.core.count(c__4609__auto__);
var G__45396 = (0);
seq__45214 = G__45393;
chunk__45215 = G__45394;
count__45216 = G__45395;
i__45217 = G__45396;
continue;
} else {
var role = cljs.core.first(seq__45214__$1);
var temp__5735__auto___45397__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45397__$2)){
var spec_45398 = temp__5735__auto___45397__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45398)], 0));
} else {
}


var G__45399 = cljs.core.next(seq__45214__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__45214 = G__45399;
chunk__45215 = G__45400;
count__45216 = G__45401;
i__45217 = G__45402;
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
var G__45403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45404 = cljs.core.ex_cause(t);
via = G__45403;
t = G__45404;
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
var map__45254 = datafied_throwable;
var map__45254__$1 = (((((!((map__45254 == null))))?(((((map__45254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45254):map__45254);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45254__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45255 = cljs.core.last(via);
var map__45255__$1 = (((((!((map__45255 == null))))?(((((map__45255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45255):map__45255);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45256 = data;
var map__45256__$1 = (((((!((map__45256 == null))))?(((((map__45256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45256):map__45256);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45257 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45257__$1 = (((((!((map__45257 == null))))?(((((map__45257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45257):map__45257);
var top_data = map__45257__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45263 = phase;
var G__45263__$1 = (((G__45263 instanceof cljs.core.Keyword))?G__45263.fqn:null);
switch (G__45263__$1) {
case "read-source":
var map__45264 = data;
var map__45264__$1 = (((((!((map__45264 == null))))?(((((map__45264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45264):map__45264);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45264__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45264__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45266 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45266__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45266);
var G__45266__$2 = (cljs.core.truth_((function (){var fexpr__45267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45267.cljs$core$IFn$_invoke$arity$1 ? fexpr__45267.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45267.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45266__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45266__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45268 = top_data;
var G__45268__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45268,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45268);
var G__45268__$2 = (cljs.core.truth_((function (){var fexpr__45269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45269.cljs$core$IFn$_invoke$arity$1 ? fexpr__45269.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45269.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45268__$1);
var G__45268__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45268__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45268__$2);
var G__45268__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45268__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45268__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45271 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45271,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45271,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45271,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45271,(3),null);
var G__45274 = top_data;
var G__45274__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45274);
var G__45274__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45274__$1);
var G__45274__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45274__$2);
var G__45274__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45274__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45274__$4;
}

break;
case "execution":
var vec__45275 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45253_SHARP_){
var or__4185__auto__ = (p1__45253_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45280.cljs$core$IFn$_invoke$arity$1 ? fexpr__45280.cljs$core$IFn$_invoke$arity$1(p1__45253_SHARP_) : fexpr__45280.call(null,p1__45253_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45281 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45281__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45281);
var G__45281__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45281__$1);
var G__45281__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45281__$2);
var G__45281__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45281__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45281__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45263__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45285){
var map__45286 = p__45285;
var map__45286__$1 = (((((!((map__45286 == null))))?(((((map__45286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45286):map__45286);
var triage_data = map__45286__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45289 = phase;
var G__45289__$1 = (((G__45289 instanceof cljs.core.Keyword))?G__45289.fqn:null);
switch (G__45289__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45290 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45292 = loc;
var G__45293 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45294_45409 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45295_45410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45296_45411 = true;
var _STAR_print_fn_STAR__temp_val__45297_45412 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45296_45411);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45297_45412);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45283_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45283_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45295_45410);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45294_45409);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45290,G__45291,G__45292,G__45293) : format.call(null,G__45290,G__45291,G__45292,G__45293));

break;
case "macroexpansion":
var G__45298 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45299 = cause_type;
var G__45300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45301 = loc;
var G__45302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45298,G__45299,G__45300,G__45301,G__45302) : format.call(null,G__45298,G__45299,G__45300,G__45301,G__45302));

break;
case "compile-syntax-check":
var G__45303 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45304 = cause_type;
var G__45305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45306 = loc;
var G__45307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45303,G__45304,G__45305,G__45306,G__45307) : format.call(null,G__45303,G__45304,G__45305,G__45306,G__45307));

break;
case "compilation":
var G__45308 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45309 = cause_type;
var G__45310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45311 = loc;
var G__45312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45308,G__45309,G__45310,G__45311,G__45312) : format.call(null,G__45308,G__45309,G__45310,G__45311,G__45312));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45313 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45314 = symbol;
var G__45315 = loc;
var G__45316 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45317_45413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45318_45414 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45319_45415 = true;
var _STAR_print_fn_STAR__temp_val__45320_45416 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45319_45415);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45320_45416);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45284_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45284_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45318_45414);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45317_45413);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45313,G__45314,G__45315,G__45316) : format.call(null,G__45313,G__45314,G__45315,G__45316));
} else {
var G__45321 = "Execution error%s at %s(%s).\n%s\n";
var G__45322 = cause_type;
var G__45323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45324 = loc;
var G__45325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45321,G__45322,G__45323,G__45324,G__45325) : format.call(null,G__45321,G__45322,G__45323,G__45324,G__45325));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45289__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
