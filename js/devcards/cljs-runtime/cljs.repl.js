goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49441){
var map__49442 = p__49441;
var map__49442__$1 = (((((!((map__49442 == null))))?(((((map__49442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49442):map__49442);
var m = map__49442__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49442__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49444_49570 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49445_49571 = null;
var count__49446_49572 = (0);
var i__49447_49573 = (0);
while(true){
if((i__49447_49573 < count__49446_49572)){
var f_49574 = chunk__49445_49571.cljs$core$IIndexed$_nth$arity$2(null,i__49447_49573);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49574], 0));


var G__49575 = seq__49444_49570;
var G__49576 = chunk__49445_49571;
var G__49577 = count__49446_49572;
var G__49578 = (i__49447_49573 + (1));
seq__49444_49570 = G__49575;
chunk__49445_49571 = G__49576;
count__49446_49572 = G__49577;
i__49447_49573 = G__49578;
continue;
} else {
var temp__5735__auto___49579 = cljs.core.seq(seq__49444_49570);
if(temp__5735__auto___49579){
var seq__49444_49580__$1 = temp__5735__auto___49579;
if(cljs.core.chunked_seq_QMARK_(seq__49444_49580__$1)){
var c__4556__auto___49581 = cljs.core.chunk_first(seq__49444_49580__$1);
var G__49582 = cljs.core.chunk_rest(seq__49444_49580__$1);
var G__49583 = c__4556__auto___49581;
var G__49584 = cljs.core.count(c__4556__auto___49581);
var G__49585 = (0);
seq__49444_49570 = G__49582;
chunk__49445_49571 = G__49583;
count__49446_49572 = G__49584;
i__49447_49573 = G__49585;
continue;
} else {
var f_49589 = cljs.core.first(seq__49444_49580__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49589], 0));


var G__49590 = cljs.core.next(seq__49444_49580__$1);
var G__49591 = null;
var G__49592 = (0);
var G__49593 = (0);
seq__49444_49570 = G__49590;
chunk__49445_49571 = G__49591;
count__49446_49572 = G__49592;
i__49447_49573 = G__49593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49595], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49595)))?cljs.core.second(arglists_49595):arglists_49595)], 0));
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
var seq__49450_49597 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49451_49598 = null;
var count__49452_49599 = (0);
var i__49453_49600 = (0);
while(true){
if((i__49453_49600 < count__49452_49599)){
var vec__49464_49601 = chunk__49451_49598.cljs$core$IIndexed$_nth$arity$2(null,i__49453_49600);
var name_49602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49464_49601,(0),null);
var map__49467_49603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49464_49601,(1),null);
var map__49467_49604__$1 = (((((!((map__49467_49603 == null))))?(((((map__49467_49603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49467_49603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49467_49603):map__49467_49603);
var doc_49605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49467_49604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49467_49604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49602], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49606], 0));

if(cljs.core.truth_(doc_49605)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49605], 0));
} else {
}


var G__49607 = seq__49450_49597;
var G__49608 = chunk__49451_49598;
var G__49609 = count__49452_49599;
var G__49610 = (i__49453_49600 + (1));
seq__49450_49597 = G__49607;
chunk__49451_49598 = G__49608;
count__49452_49599 = G__49609;
i__49453_49600 = G__49610;
continue;
} else {
var temp__5735__auto___49611 = cljs.core.seq(seq__49450_49597);
if(temp__5735__auto___49611){
var seq__49450_49612__$1 = temp__5735__auto___49611;
if(cljs.core.chunked_seq_QMARK_(seq__49450_49612__$1)){
var c__4556__auto___49613 = cljs.core.chunk_first(seq__49450_49612__$1);
var G__49614 = cljs.core.chunk_rest(seq__49450_49612__$1);
var G__49615 = c__4556__auto___49613;
var G__49616 = cljs.core.count(c__4556__auto___49613);
var G__49617 = (0);
seq__49450_49597 = G__49614;
chunk__49451_49598 = G__49615;
count__49452_49599 = G__49616;
i__49453_49600 = G__49617;
continue;
} else {
var vec__49469_49618 = cljs.core.first(seq__49450_49612__$1);
var name_49619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49469_49618,(0),null);
var map__49472_49620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49469_49618,(1),null);
var map__49472_49621__$1 = (((((!((map__49472_49620 == null))))?(((((map__49472_49620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49472_49620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49472_49620):map__49472_49620);
var doc_49622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472_49621__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472_49621__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49619], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49623], 0));

if(cljs.core.truth_(doc_49622)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49622], 0));
} else {
}


var G__49624 = cljs.core.next(seq__49450_49612__$1);
var G__49625 = null;
var G__49626 = (0);
var G__49627 = (0);
seq__49450_49597 = G__49624;
chunk__49451_49598 = G__49625;
count__49452_49599 = G__49626;
i__49453_49600 = G__49627;
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

var seq__49475 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49476 = null;
var count__49477 = (0);
var i__49478 = (0);
while(true){
if((i__49478 < count__49477)){
var role = chunk__49476.cljs$core$IIndexed$_nth$arity$2(null,i__49478);
var temp__5735__auto___49628__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49628__$1)){
var spec_49629 = temp__5735__auto___49628__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49629)], 0));
} else {
}


var G__49630 = seq__49475;
var G__49631 = chunk__49476;
var G__49632 = count__49477;
var G__49633 = (i__49478 + (1));
seq__49475 = G__49630;
chunk__49476 = G__49631;
count__49477 = G__49632;
i__49478 = G__49633;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49475);
if(temp__5735__auto____$1){
var seq__49475__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49475__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49475__$1);
var G__49634 = cljs.core.chunk_rest(seq__49475__$1);
var G__49635 = c__4556__auto__;
var G__49636 = cljs.core.count(c__4556__auto__);
var G__49637 = (0);
seq__49475 = G__49634;
chunk__49476 = G__49635;
count__49477 = G__49636;
i__49478 = G__49637;
continue;
} else {
var role = cljs.core.first(seq__49475__$1);
var temp__5735__auto___49638__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49638__$2)){
var spec_49639 = temp__5735__auto___49638__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49639)], 0));
} else {
}


var G__49640 = cljs.core.next(seq__49475__$1);
var G__49641 = null;
var G__49642 = (0);
var G__49643 = (0);
seq__49475 = G__49640;
chunk__49476 = G__49641;
count__49477 = G__49642;
i__49478 = G__49643;
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
var G__49644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49645 = cljs.core.ex_cause(t);
via = G__49644;
t = G__49645;
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
var map__49495 = datafied_throwable;
var map__49495__$1 = (((((!((map__49495 == null))))?(((((map__49495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49495):map__49495);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49495__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49495__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49495__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49496 = cljs.core.last(via);
var map__49496__$1 = (((((!((map__49496 == null))))?(((((map__49496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49496):map__49496);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49497 = data;
var map__49497__$1 = (((((!((map__49497 == null))))?(((((map__49497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49497):map__49497);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49498 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49498__$1 = (((((!((map__49498 == null))))?(((((map__49498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49498):map__49498);
var top_data = map__49498__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49503 = phase;
var G__49503__$1 = (((G__49503 instanceof cljs.core.Keyword))?G__49503.fqn:null);
switch (G__49503__$1) {
case "read-source":
var map__49504 = data;
var map__49504__$1 = (((((!((map__49504 == null))))?(((((map__49504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49504):map__49504);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49504__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49504__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49507 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49507__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49507);
var G__49507__$2 = (cljs.core.truth_((function (){var fexpr__49508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49508.cljs$core$IFn$_invoke$arity$1 ? fexpr__49508.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49508.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49507__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49507__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49509 = top_data;
var G__49509__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49509);
var G__49509__$2 = (cljs.core.truth_((function (){var fexpr__49510 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49510.cljs$core$IFn$_invoke$arity$1 ? fexpr__49510.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49510.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49509__$1);
var G__49509__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49509__$2);
var G__49509__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49509__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49509__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49511 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(3),null);
var G__49514 = top_data;
var G__49514__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49514);
var G__49514__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49514__$1);
var G__49514__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49514__$2);
var G__49514__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49514__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49514__$4;
}

break;
case "execution":
var vec__49516 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49494_SHARP_){
var or__4126__auto__ = (p1__49494_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49521.cljs$core$IFn$_invoke$arity$1 ? fexpr__49521.cljs$core$IFn$_invoke$arity$1(p1__49494_SHARP_) : fexpr__49521.call(null,p1__49494_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49522 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49522__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49522);
var G__49522__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49522__$1);
var G__49522__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49522__$2);
var G__49522__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49522__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49522__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49503__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49525){
var map__49526 = p__49525;
var map__49526__$1 = (((((!((map__49526 == null))))?(((((map__49526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49526):map__49526);
var triage_data = map__49526__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49528 = phase;
var G__49528__$1 = (((G__49528 instanceof cljs.core.Keyword))?G__49528.fqn:null);
switch (G__49528__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49529 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49531 = loc;
var G__49532 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49533_49654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49534_49655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49535_49656 = true;
var _STAR_print_fn_STAR__temp_val__49536_49657 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49535_49656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49536_49657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49534_49655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49533_49654);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49529,G__49530,G__49531,G__49532) : format.call(null,G__49529,G__49530,G__49531,G__49532));

break;
case "macroexpansion":
var G__49537 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49538 = cause_type;
var G__49539 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49540 = loc;
var G__49541 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49537,G__49538,G__49539,G__49540,G__49541) : format.call(null,G__49537,G__49538,G__49539,G__49540,G__49541));

break;
case "compile-syntax-check":
var G__49543 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49544 = cause_type;
var G__49545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49546 = loc;
var G__49547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49543,G__49544,G__49545,G__49546,G__49547) : format.call(null,G__49543,G__49544,G__49545,G__49546,G__49547));

break;
case "compilation":
var G__49549 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49550 = cause_type;
var G__49551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49552 = loc;
var G__49553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49549,G__49550,G__49551,G__49552,G__49553) : format.call(null,G__49549,G__49550,G__49551,G__49552,G__49553));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49556 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49557 = symbol;
var G__49558 = loc;
var G__49559 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49560_49662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49561_49663 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49562_49664 = true;
var _STAR_print_fn_STAR__temp_val__49563_49665 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49562_49664);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49563_49665);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49524_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49524_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49561_49663);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49560_49662);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49556,G__49557,G__49558,G__49559) : format.call(null,G__49556,G__49557,G__49558,G__49559));
} else {
var G__49564 = "Execution error%s at %s(%s).\n%s\n";
var G__49565 = cause_type;
var G__49566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49567 = loc;
var G__49568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49564,G__49565,G__49566,G__49567,G__49568) : format.call(null,G__49564,G__49565,G__49566,G__49567,G__49568));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49528__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
