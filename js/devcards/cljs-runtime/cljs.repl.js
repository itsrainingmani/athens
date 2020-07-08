goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45221){
var map__45222 = p__45221;
var map__45222__$1 = (((((!((map__45222 == null))))?(((((map__45222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45222):map__45222);
var m = map__45222__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45225_45336 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45226_45337 = null;
var count__45227_45338 = (0);
var i__45228_45339 = (0);
while(true){
if((i__45228_45339 < count__45227_45338)){
var f_45340 = chunk__45226_45337.cljs$core$IIndexed$_nth$arity$2(null,i__45228_45339);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45340], 0));


var G__45341 = seq__45225_45336;
var G__45342 = chunk__45226_45337;
var G__45343 = count__45227_45338;
var G__45344 = (i__45228_45339 + (1));
seq__45225_45336 = G__45341;
chunk__45226_45337 = G__45342;
count__45227_45338 = G__45343;
i__45228_45339 = G__45344;
continue;
} else {
var temp__5735__auto___45345 = cljs.core.seq(seq__45225_45336);
if(temp__5735__auto___45345){
var seq__45225_45346__$1 = temp__5735__auto___45345;
if(cljs.core.chunked_seq_QMARK_(seq__45225_45346__$1)){
var c__4609__auto___45347 = cljs.core.chunk_first(seq__45225_45346__$1);
var G__45348 = cljs.core.chunk_rest(seq__45225_45346__$1);
var G__45349 = c__4609__auto___45347;
var G__45350 = cljs.core.count(c__4609__auto___45347);
var G__45351 = (0);
seq__45225_45336 = G__45348;
chunk__45226_45337 = G__45349;
count__45227_45338 = G__45350;
i__45228_45339 = G__45351;
continue;
} else {
var f_45352 = cljs.core.first(seq__45225_45346__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45352], 0));


var G__45353 = cljs.core.next(seq__45225_45346__$1);
var G__45354 = null;
var G__45355 = (0);
var G__45356 = (0);
seq__45225_45336 = G__45353;
chunk__45226_45337 = G__45354;
count__45227_45338 = G__45355;
i__45228_45339 = G__45356;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45357 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45357], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45357)))?cljs.core.second(arglists_45357):arglists_45357)], 0));
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
var seq__45229_45359 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45230_45360 = null;
var count__45231_45361 = (0);
var i__45232_45362 = (0);
while(true){
if((i__45232_45362 < count__45231_45361)){
var vec__45243_45363 = chunk__45230_45360.cljs$core$IIndexed$_nth$arity$2(null,i__45232_45362);
var name_45364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243_45363,(0),null);
var map__45246_45365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243_45363,(1),null);
var map__45246_45366__$1 = (((((!((map__45246_45365 == null))))?(((((map__45246_45365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45246_45365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45246_45365):map__45246_45365);
var doc_45367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45246_45366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45246_45366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45364], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45368], 0));

if(cljs.core.truth_(doc_45367)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45367], 0));
} else {
}


var G__45369 = seq__45229_45359;
var G__45370 = chunk__45230_45360;
var G__45371 = count__45231_45361;
var G__45372 = (i__45232_45362 + (1));
seq__45229_45359 = G__45369;
chunk__45230_45360 = G__45370;
count__45231_45361 = G__45371;
i__45232_45362 = G__45372;
continue;
} else {
var temp__5735__auto___45373 = cljs.core.seq(seq__45229_45359);
if(temp__5735__auto___45373){
var seq__45229_45374__$1 = temp__5735__auto___45373;
if(cljs.core.chunked_seq_QMARK_(seq__45229_45374__$1)){
var c__4609__auto___45375 = cljs.core.chunk_first(seq__45229_45374__$1);
var G__45376 = cljs.core.chunk_rest(seq__45229_45374__$1);
var G__45377 = c__4609__auto___45375;
var G__45378 = cljs.core.count(c__4609__auto___45375);
var G__45379 = (0);
seq__45229_45359 = G__45376;
chunk__45230_45360 = G__45377;
count__45231_45361 = G__45378;
i__45232_45362 = G__45379;
continue;
} else {
var vec__45252_45380 = cljs.core.first(seq__45229_45374__$1);
var name_45381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45252_45380,(0),null);
var map__45255_45382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45252_45380,(1),null);
var map__45255_45383__$1 = (((((!((map__45255_45382 == null))))?(((((map__45255_45382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45255_45382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45255_45382):map__45255_45382);
var doc_45384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255_45383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255_45383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45381], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45385], 0));

if(cljs.core.truth_(doc_45384)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45384], 0));
} else {
}


var G__45388 = cljs.core.next(seq__45229_45374__$1);
var G__45389 = null;
var G__45390 = (0);
var G__45391 = (0);
seq__45229_45359 = G__45388;
chunk__45230_45360 = G__45389;
count__45231_45361 = G__45390;
i__45232_45362 = G__45391;
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

var seq__45257 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45258 = null;
var count__45259 = (0);
var i__45260 = (0);
while(true){
if((i__45260 < count__45259)){
var role = chunk__45258.cljs$core$IIndexed$_nth$arity$2(null,i__45260);
var temp__5735__auto___45394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45394__$1)){
var spec_45395 = temp__5735__auto___45394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45395)], 0));
} else {
}


var G__45396 = seq__45257;
var G__45397 = chunk__45258;
var G__45398 = count__45259;
var G__45399 = (i__45260 + (1));
seq__45257 = G__45396;
chunk__45258 = G__45397;
count__45259 = G__45398;
i__45260 = G__45399;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45257);
if(temp__5735__auto____$1){
var seq__45257__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45257__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45257__$1);
var G__45400 = cljs.core.chunk_rest(seq__45257__$1);
var G__45401 = c__4609__auto__;
var G__45402 = cljs.core.count(c__4609__auto__);
var G__45403 = (0);
seq__45257 = G__45400;
chunk__45258 = G__45401;
count__45259 = G__45402;
i__45260 = G__45403;
continue;
} else {
var role = cljs.core.first(seq__45257__$1);
var temp__5735__auto___45404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45404__$2)){
var spec_45405 = temp__5735__auto___45404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45405)], 0));
} else {
}


var G__45406 = cljs.core.next(seq__45257__$1);
var G__45407 = null;
var G__45408 = (0);
var G__45409 = (0);
seq__45257 = G__45406;
chunk__45258 = G__45407;
count__45259 = G__45408;
i__45260 = G__45409;
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
var G__45410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45411 = cljs.core.ex_cause(t);
via = G__45410;
t = G__45411;
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
var map__45267 = datafied_throwable;
var map__45267__$1 = (((((!((map__45267 == null))))?(((((map__45267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45267):map__45267);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45267__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45268 = cljs.core.last(via);
var map__45268__$1 = (((((!((map__45268 == null))))?(((((map__45268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45268):map__45268);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45269 = data;
var map__45269__$1 = (((((!((map__45269 == null))))?(((((map__45269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45269):map__45269);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45270 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45270__$1 = (((((!((map__45270 == null))))?(((((map__45270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45270):map__45270);
var top_data = map__45270__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45275 = phase;
var G__45275__$1 = (((G__45275 instanceof cljs.core.Keyword))?G__45275.fqn:null);
switch (G__45275__$1) {
case "read-source":
var map__45276 = data;
var map__45276__$1 = (((((!((map__45276 == null))))?(((((map__45276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45276):map__45276);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45276__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45276__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45278 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45278__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45278,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45278);
var G__45278__$2 = (cljs.core.truth_((function (){var fexpr__45280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45280.cljs$core$IFn$_invoke$arity$1 ? fexpr__45280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45278__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45278__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45278__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45281 = top_data;
var G__45281__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45281);
var G__45281__$2 = (cljs.core.truth_((function (){var fexpr__45282 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45282.cljs$core$IFn$_invoke$arity$1 ? fexpr__45282.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45282.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45281__$1);
var G__45281__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45281__$2);
var G__45281__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45281__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45281__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45283 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(3),null);
var G__45286 = top_data;
var G__45286__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45286);
var G__45286__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45286__$1);
var G__45286__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45286__$2);
var G__45286__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45286__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45286__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45286__$4;
}

break;
case "execution":
var vec__45287 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45266_SHARP_){
var or__4185__auto__ = (p1__45266_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45291.cljs$core$IFn$_invoke$arity$1 ? fexpr__45291.cljs$core$IFn$_invoke$arity$1(p1__45266_SHARP_) : fexpr__45291.call(null,p1__45266_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45292 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45292__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45292);
var G__45292__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45292__$1);
var G__45292__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45292__$2);
var G__45292__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45292__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45292__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45275__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45295){
var map__45296 = p__45295;
var map__45296__$1 = (((((!((map__45296 == null))))?(((((map__45296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45296):map__45296);
var triage_data = map__45296__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45296__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45299 = phase;
var G__45299__$1 = (((G__45299 instanceof cljs.core.Keyword))?G__45299.fqn:null);
switch (G__45299__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45300 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45302 = loc;
var G__45303 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45304_45419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45305_45420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45306_45421 = true;
var _STAR_print_fn_STAR__temp_val__45307_45422 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45306_45421);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45307_45422);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45305_45420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45304_45419);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45300,G__45301,G__45302,G__45303) : format.call(null,G__45300,G__45301,G__45302,G__45303));

break;
case "macroexpansion":
var G__45308 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45309 = cause_type;
var G__45310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45311 = loc;
var G__45312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45308,G__45309,G__45310,G__45311,G__45312) : format.call(null,G__45308,G__45309,G__45310,G__45311,G__45312));

break;
case "compile-syntax-check":
var G__45313 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45314 = cause_type;
var G__45315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45316 = loc;
var G__45317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45313,G__45314,G__45315,G__45316,G__45317) : format.call(null,G__45313,G__45314,G__45315,G__45316,G__45317));

break;
case "compilation":
var G__45318 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45319 = cause_type;
var G__45320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45321 = loc;
var G__45322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45318,G__45319,G__45320,G__45321,G__45322) : format.call(null,G__45318,G__45319,G__45320,G__45321,G__45322));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45323 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45324 = symbol;
var G__45325 = loc;
var G__45326 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45327_45427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45328_45428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45329_45429 = true;
var _STAR_print_fn_STAR__temp_val__45330_45430 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45329_45429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45330_45430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45328_45428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45327_45427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45323,G__45324,G__45325,G__45326) : format.call(null,G__45323,G__45324,G__45325,G__45326));
} else {
var G__45331 = "Execution error%s at %s(%s).\n%s\n";
var G__45332 = cause_type;
var G__45333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45334 = loc;
var G__45335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45331,G__45332,G__45333,G__45334,G__45335) : format.call(null,G__45331,G__45332,G__45333,G__45334,G__45335));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45299__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
