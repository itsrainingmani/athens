goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45226){
var map__45227 = p__45226;
var map__45227__$1 = (((((!((map__45227 == null))))?(((((map__45227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45227):map__45227);
var m = map__45227__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45227__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45229_45343 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45230_45344 = null;
var count__45231_45345 = (0);
var i__45232_45346 = (0);
while(true){
if((i__45232_45346 < count__45231_45345)){
var f_45347 = chunk__45230_45344.cljs$core$IIndexed$_nth$arity$2(null,i__45232_45346);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45347], 0));


var G__45348 = seq__45229_45343;
var G__45349 = chunk__45230_45344;
var G__45350 = count__45231_45345;
var G__45351 = (i__45232_45346 + (1));
seq__45229_45343 = G__45348;
chunk__45230_45344 = G__45349;
count__45231_45345 = G__45350;
i__45232_45346 = G__45351;
continue;
} else {
var temp__5735__auto___45352 = cljs.core.seq(seq__45229_45343);
if(temp__5735__auto___45352){
var seq__45229_45353__$1 = temp__5735__auto___45352;
if(cljs.core.chunked_seq_QMARK_(seq__45229_45353__$1)){
var c__4609__auto___45354 = cljs.core.chunk_first(seq__45229_45353__$1);
var G__45355 = cljs.core.chunk_rest(seq__45229_45353__$1);
var G__45356 = c__4609__auto___45354;
var G__45357 = cljs.core.count(c__4609__auto___45354);
var G__45358 = (0);
seq__45229_45343 = G__45355;
chunk__45230_45344 = G__45356;
count__45231_45345 = G__45357;
i__45232_45346 = G__45358;
continue;
} else {
var f_45360 = cljs.core.first(seq__45229_45353__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45360], 0));


var G__45361 = cljs.core.next(seq__45229_45353__$1);
var G__45362 = null;
var G__45363 = (0);
var G__45364 = (0);
seq__45229_45343 = G__45361;
chunk__45230_45344 = G__45362;
count__45231_45345 = G__45363;
i__45232_45346 = G__45364;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45365 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45365], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45365)))?cljs.core.second(arglists_45365):arglists_45365)], 0));
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
var seq__45235_45366 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45236_45367 = null;
var count__45237_45368 = (0);
var i__45238_45369 = (0);
while(true){
if((i__45238_45369 < count__45237_45368)){
var vec__45250_45370 = chunk__45236_45367.cljs$core$IIndexed$_nth$arity$2(null,i__45238_45369);
var name_45371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250_45370,(0),null);
var map__45253_45372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250_45370,(1),null);
var map__45253_45373__$1 = (((((!((map__45253_45372 == null))))?(((((map__45253_45372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45253_45372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45253_45372):map__45253_45372);
var doc_45374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253_45373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253_45373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45375], 0));

if(cljs.core.truth_(doc_45374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45374], 0));
} else {
}


var G__45376 = seq__45235_45366;
var G__45377 = chunk__45236_45367;
var G__45378 = count__45237_45368;
var G__45379 = (i__45238_45369 + (1));
seq__45235_45366 = G__45376;
chunk__45236_45367 = G__45377;
count__45237_45368 = G__45378;
i__45238_45369 = G__45379;
continue;
} else {
var temp__5735__auto___45380 = cljs.core.seq(seq__45235_45366);
if(temp__5735__auto___45380){
var seq__45235_45381__$1 = temp__5735__auto___45380;
if(cljs.core.chunked_seq_QMARK_(seq__45235_45381__$1)){
var c__4609__auto___45382 = cljs.core.chunk_first(seq__45235_45381__$1);
var G__45383 = cljs.core.chunk_rest(seq__45235_45381__$1);
var G__45384 = c__4609__auto___45382;
var G__45385 = cljs.core.count(c__4609__auto___45382);
var G__45386 = (0);
seq__45235_45366 = G__45383;
chunk__45236_45367 = G__45384;
count__45237_45368 = G__45385;
i__45238_45369 = G__45386;
continue;
} else {
var vec__45256_45387 = cljs.core.first(seq__45235_45381__$1);
var name_45388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256_45387,(0),null);
var map__45259_45389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256_45387,(1),null);
var map__45259_45390__$1 = (((((!((map__45259_45389 == null))))?(((((map__45259_45389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45259_45389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45259_45389):map__45259_45389);
var doc_45391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45259_45390__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45259_45390__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45388], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45392], 0));

if(cljs.core.truth_(doc_45391)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45391], 0));
} else {
}


var G__45393 = cljs.core.next(seq__45235_45381__$1);
var G__45394 = null;
var G__45395 = (0);
var G__45396 = (0);
seq__45235_45366 = G__45393;
chunk__45236_45367 = G__45394;
count__45237_45368 = G__45395;
i__45238_45369 = G__45396;
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

var seq__45261 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45262 = null;
var count__45263 = (0);
var i__45264 = (0);
while(true){
if((i__45264 < count__45263)){
var role = chunk__45262.cljs$core$IIndexed$_nth$arity$2(null,i__45264);
var temp__5735__auto___45397__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45397__$1)){
var spec_45398 = temp__5735__auto___45397__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45398)], 0));
} else {
}


var G__45399 = seq__45261;
var G__45400 = chunk__45262;
var G__45401 = count__45263;
var G__45402 = (i__45264 + (1));
seq__45261 = G__45399;
chunk__45262 = G__45400;
count__45263 = G__45401;
i__45264 = G__45402;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45261);
if(temp__5735__auto____$1){
var seq__45261__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45261__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45261__$1);
var G__45403 = cljs.core.chunk_rest(seq__45261__$1);
var G__45404 = c__4609__auto__;
var G__45405 = cljs.core.count(c__4609__auto__);
var G__45406 = (0);
seq__45261 = G__45403;
chunk__45262 = G__45404;
count__45263 = G__45405;
i__45264 = G__45406;
continue;
} else {
var role = cljs.core.first(seq__45261__$1);
var temp__5735__auto___45407__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45407__$2)){
var spec_45408 = temp__5735__auto___45407__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45408)], 0));
} else {
}


var G__45409 = cljs.core.next(seq__45261__$1);
var G__45410 = null;
var G__45411 = (0);
var G__45412 = (0);
seq__45261 = G__45409;
chunk__45262 = G__45410;
count__45263 = G__45411;
i__45264 = G__45412;
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
var G__45413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45414 = cljs.core.ex_cause(t);
via = G__45413;
t = G__45414;
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
var map__45271 = datafied_throwable;
var map__45271__$1 = (((((!((map__45271 == null))))?(((((map__45271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45271):map__45271);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45271__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45272 = cljs.core.last(via);
var map__45272__$1 = (((((!((map__45272 == null))))?(((((map__45272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45272):map__45272);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45273 = data;
var map__45273__$1 = (((((!((map__45273 == null))))?(((((map__45273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45273):map__45273);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45273__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45273__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45273__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45274 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45274__$1 = (((((!((map__45274 == null))))?(((((map__45274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45274):map__45274);
var top_data = map__45274__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45283 = phase;
var G__45283__$1 = (((G__45283 instanceof cljs.core.Keyword))?G__45283.fqn:null);
switch (G__45283__$1) {
case "read-source":
var map__45284 = data;
var map__45284__$1 = (((((!((map__45284 == null))))?(((((map__45284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45284):map__45284);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45284__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45284__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45286 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45286__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45286);
var G__45286__$2 = (cljs.core.truth_((function (){var fexpr__45287 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45287.cljs$core$IFn$_invoke$arity$1 ? fexpr__45287.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45287.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45286__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45286__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45286__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45288 = top_data;
var G__45288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45288);
var G__45288__$2 = (cljs.core.truth_((function (){var fexpr__45289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45289.cljs$core$IFn$_invoke$arity$1 ? fexpr__45289.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45289.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45288__$1);
var G__45288__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45288__$2);
var G__45288__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45288__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45290 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(3),null);
var G__45293 = top_data;
var G__45293__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45293,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45293);
var G__45293__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45293__$1);
var G__45293__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45293__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45293__$2);
var G__45293__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45293__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45293__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45293__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45293__$4;
}

break;
case "execution":
var vec__45294 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45270_SHARP_){
var or__4185__auto__ = (p1__45270_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45298 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45298.cljs$core$IFn$_invoke$arity$1 ? fexpr__45298.cljs$core$IFn$_invoke$arity$1(p1__45270_SHARP_) : fexpr__45298.call(null,p1__45270_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45299 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45299__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45299,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45299);
var G__45299__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45299__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45299__$1);
var G__45299__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45299__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45299__$2);
var G__45299__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45299__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45299__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45299__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45299__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45283__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45302){
var map__45303 = p__45302;
var map__45303__$1 = (((((!((map__45303 == null))))?(((((map__45303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45303):map__45303);
var triage_data = map__45303__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45303__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45305 = phase;
var G__45305__$1 = (((G__45305 instanceof cljs.core.Keyword))?G__45305.fqn:null);
switch (G__45305__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45306 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45308 = loc;
var G__45309 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45310_45424 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45311_45425 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45312_45426 = true;
var _STAR_print_fn_STAR__temp_val__45313_45427 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45312_45426);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45313_45427);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45300_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45300_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45311_45425);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45310_45424);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45306,G__45307,G__45308,G__45309) : format.call(null,G__45306,G__45307,G__45308,G__45309));

break;
case "macroexpansion":
var G__45315 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45316 = cause_type;
var G__45317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45318 = loc;
var G__45319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45315,G__45316,G__45317,G__45318,G__45319) : format.call(null,G__45315,G__45316,G__45317,G__45318,G__45319));

break;
case "compile-syntax-check":
var G__45320 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45321 = cause_type;
var G__45322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45323 = loc;
var G__45324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45320,G__45321,G__45322,G__45323,G__45324) : format.call(null,G__45320,G__45321,G__45322,G__45323,G__45324));

break;
case "compilation":
var G__45325 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45326 = cause_type;
var G__45327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45328 = loc;
var G__45329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45325,G__45326,G__45327,G__45328,G__45329) : format.call(null,G__45325,G__45326,G__45327,G__45328,G__45329));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45330 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45331 = symbol;
var G__45332 = loc;
var G__45333 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45334_45428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45335_45429 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45336_45430 = true;
var _STAR_print_fn_STAR__temp_val__45337_45431 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45336_45430);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45337_45431);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45301_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45301_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45335_45429);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45334_45428);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45330,G__45331,G__45332,G__45333) : format.call(null,G__45330,G__45331,G__45332,G__45333));
} else {
var G__45338 = "Execution error%s at %s(%s).\n%s\n";
var G__45339 = cause_type;
var G__45340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45341 = loc;
var G__45342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45338,G__45339,G__45340,G__45341,G__45342) : format.call(null,G__45338,G__45339,G__45340,G__45341,G__45342));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45305__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
