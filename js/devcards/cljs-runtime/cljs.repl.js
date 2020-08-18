goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49452){
var map__49453 = p__49452;
var map__49453__$1 = (((((!((map__49453 == null))))?(((((map__49453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49453):map__49453);
var m = map__49453__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49455_49584 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49456_49585 = null;
var count__49457_49586 = (0);
var i__49458_49587 = (0);
while(true){
if((i__49458_49587 < count__49457_49586)){
var f_49588 = chunk__49456_49585.cljs$core$IIndexed$_nth$arity$2(null,i__49458_49587);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49588], 0));


var G__49589 = seq__49455_49584;
var G__49590 = chunk__49456_49585;
var G__49591 = count__49457_49586;
var G__49592 = (i__49458_49587 + (1));
seq__49455_49584 = G__49589;
chunk__49456_49585 = G__49590;
count__49457_49586 = G__49591;
i__49458_49587 = G__49592;
continue;
} else {
var temp__5735__auto___49593 = cljs.core.seq(seq__49455_49584);
if(temp__5735__auto___49593){
var seq__49455_49594__$1 = temp__5735__auto___49593;
if(cljs.core.chunked_seq_QMARK_(seq__49455_49594__$1)){
var c__4556__auto___49595 = cljs.core.chunk_first(seq__49455_49594__$1);
var G__49596 = cljs.core.chunk_rest(seq__49455_49594__$1);
var G__49597 = c__4556__auto___49595;
var G__49598 = cljs.core.count(c__4556__auto___49595);
var G__49599 = (0);
seq__49455_49584 = G__49596;
chunk__49456_49585 = G__49597;
count__49457_49586 = G__49598;
i__49458_49587 = G__49599;
continue;
} else {
var f_49600 = cljs.core.first(seq__49455_49594__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49600], 0));


var G__49601 = cljs.core.next(seq__49455_49594__$1);
var G__49602 = null;
var G__49603 = (0);
var G__49604 = (0);
seq__49455_49584 = G__49601;
chunk__49456_49585 = G__49602;
count__49457_49586 = G__49603;
i__49458_49587 = G__49604;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49605 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49605], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49605)))?cljs.core.second(arglists_49605):arglists_49605)], 0));
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
var seq__49460_49607 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49461_49608 = null;
var count__49462_49609 = (0);
var i__49463_49610 = (0);
while(true){
if((i__49463_49610 < count__49462_49609)){
var vec__49486_49611 = chunk__49461_49608.cljs$core$IIndexed$_nth$arity$2(null,i__49463_49610);
var name_49612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486_49611,(0),null);
var map__49489_49613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486_49611,(1),null);
var map__49489_49614__$1 = (((((!((map__49489_49613 == null))))?(((((map__49489_49613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49489_49613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49489_49613):map__49489_49613);
var doc_49615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489_49614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489_49614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49612], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49616], 0));

if(cljs.core.truth_(doc_49615)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49615], 0));
} else {
}


var G__49617 = seq__49460_49607;
var G__49618 = chunk__49461_49608;
var G__49619 = count__49462_49609;
var G__49620 = (i__49463_49610 + (1));
seq__49460_49607 = G__49617;
chunk__49461_49608 = G__49618;
count__49462_49609 = G__49619;
i__49463_49610 = G__49620;
continue;
} else {
var temp__5735__auto___49621 = cljs.core.seq(seq__49460_49607);
if(temp__5735__auto___49621){
var seq__49460_49622__$1 = temp__5735__auto___49621;
if(cljs.core.chunked_seq_QMARK_(seq__49460_49622__$1)){
var c__4556__auto___49623 = cljs.core.chunk_first(seq__49460_49622__$1);
var G__49624 = cljs.core.chunk_rest(seq__49460_49622__$1);
var G__49625 = c__4556__auto___49623;
var G__49626 = cljs.core.count(c__4556__auto___49623);
var G__49627 = (0);
seq__49460_49607 = G__49624;
chunk__49461_49608 = G__49625;
count__49462_49609 = G__49626;
i__49463_49610 = G__49627;
continue;
} else {
var vec__49492_49628 = cljs.core.first(seq__49460_49622__$1);
var name_49629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49492_49628,(0),null);
var map__49495_49630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49492_49628,(1),null);
var map__49495_49631__$1 = (((((!((map__49495_49630 == null))))?(((((map__49495_49630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49495_49630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49495_49630):map__49495_49630);
var doc_49632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49495_49631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49495_49631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49629], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49633], 0));

if(cljs.core.truth_(doc_49632)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49632], 0));
} else {
}


var G__49634 = cljs.core.next(seq__49460_49622__$1);
var G__49635 = null;
var G__49636 = (0);
var G__49637 = (0);
seq__49460_49607 = G__49634;
chunk__49461_49608 = G__49635;
count__49462_49609 = G__49636;
i__49463_49610 = G__49637;
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

var seq__49498 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49499 = null;
var count__49500 = (0);
var i__49501 = (0);
while(true){
if((i__49501 < count__49500)){
var role = chunk__49499.cljs$core$IIndexed$_nth$arity$2(null,i__49501);
var temp__5735__auto___49638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49638__$1)){
var spec_49639 = temp__5735__auto___49638__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49639)], 0));
} else {
}


var G__49640 = seq__49498;
var G__49641 = chunk__49499;
var G__49642 = count__49500;
var G__49643 = (i__49501 + (1));
seq__49498 = G__49640;
chunk__49499 = G__49641;
count__49500 = G__49642;
i__49501 = G__49643;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49498);
if(temp__5735__auto____$1){
var seq__49498__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49498__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49498__$1);
var G__49645 = cljs.core.chunk_rest(seq__49498__$1);
var G__49646 = c__4556__auto__;
var G__49647 = cljs.core.count(c__4556__auto__);
var G__49648 = (0);
seq__49498 = G__49645;
chunk__49499 = G__49646;
count__49500 = G__49647;
i__49501 = G__49648;
continue;
} else {
var role = cljs.core.first(seq__49498__$1);
var temp__5735__auto___49649__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49649__$2)){
var spec_49650 = temp__5735__auto___49649__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49650)], 0));
} else {
}


var G__49651 = cljs.core.next(seq__49498__$1);
var G__49652 = null;
var G__49653 = (0);
var G__49654 = (0);
seq__49498 = G__49651;
chunk__49499 = G__49652;
count__49500 = G__49653;
i__49501 = G__49654;
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
var G__49656 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49657 = cljs.core.ex_cause(t);
via = G__49656;
t = G__49657;
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
var map__49506 = datafied_throwable;
var map__49506__$1 = (((((!((map__49506 == null))))?(((((map__49506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49506):map__49506);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49506__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49508 = cljs.core.last(via);
var map__49508__$1 = (((((!((map__49508 == null))))?(((((map__49508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49508):map__49508);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49509 = data;
var map__49509__$1 = (((((!((map__49509 == null))))?(((((map__49509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49509):map__49509);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49510 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49510__$1 = (((((!((map__49510 == null))))?(((((map__49510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49510):map__49510);
var top_data = map__49510__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49515 = phase;
var G__49515__$1 = (((G__49515 instanceof cljs.core.Keyword))?G__49515.fqn:null);
switch (G__49515__$1) {
case "read-source":
var map__49516 = data;
var map__49516__$1 = (((((!((map__49516 == null))))?(((((map__49516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49516):map__49516);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49516__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49516__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49518 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49518__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49518);
var G__49518__$2 = (cljs.core.truth_((function (){var fexpr__49519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49519.cljs$core$IFn$_invoke$arity$1 ? fexpr__49519.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49519.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49518__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49518__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49520 = top_data;
var G__49520__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49520);
var G__49520__$2 = (cljs.core.truth_((function (){var fexpr__49521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49521.cljs$core$IFn$_invoke$arity$1 ? fexpr__49521.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49521.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49520__$1);
var G__49520__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49520__$2);
var G__49520__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49520__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49522 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49522,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49522,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49522,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49522,(3),null);
var G__49525 = top_data;
var G__49525__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49525);
var G__49525__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49525__$1);
var G__49525__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49525__$2);
var G__49525__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49525__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49525__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49525__$4;
}

break;
case "execution":
var vec__49526 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49526,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49526,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49526,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49526,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49505_SHARP_){
var or__4126__auto__ = (p1__49505_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49534 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49534.cljs$core$IFn$_invoke$arity$1 ? fexpr__49534.cljs$core$IFn$_invoke$arity$1(p1__49505_SHARP_) : fexpr__49534.call(null,p1__49505_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49535 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49535__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49535,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49535);
var G__49535__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49535__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49535__$1);
var G__49535__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49535__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49535__$2);
var G__49535__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49535__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49535__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49535__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49535__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49515__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49539){
var map__49540 = p__49539;
var map__49540__$1 = (((((!((map__49540 == null))))?(((((map__49540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49540):map__49540);
var triage_data = map__49540__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49546 = phase;
var G__49546__$1 = (((G__49546 instanceof cljs.core.Keyword))?G__49546.fqn:null);
switch (G__49546__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49547 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49549 = loc;
var G__49550 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49551_49686 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49552_49687 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49553_49688 = true;
var _STAR_print_fn_STAR__temp_val__49554_49689 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49553_49688);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49554_49689);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49536_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49536_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49552_49687);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49551_49686);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49547,G__49548,G__49549,G__49550) : format.call(null,G__49547,G__49548,G__49549,G__49550));

break;
case "macroexpansion":
var G__49556 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49557 = cause_type;
var G__49558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49559 = loc;
var G__49560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49556,G__49557,G__49558,G__49559,G__49560) : format.call(null,G__49556,G__49557,G__49558,G__49559,G__49560));

break;
case "compile-syntax-check":
var G__49561 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49562 = cause_type;
var G__49563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49564 = loc;
var G__49565 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49561,G__49562,G__49563,G__49564,G__49565) : format.call(null,G__49561,G__49562,G__49563,G__49564,G__49565));

break;
case "compilation":
var G__49566 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49567 = cause_type;
var G__49568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49569 = loc;
var G__49570 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49566,G__49567,G__49568,G__49569,G__49570) : format.call(null,G__49566,G__49567,G__49568,G__49569,G__49570));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49571 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49572 = symbol;
var G__49573 = loc;
var G__49574 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49575_49690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49576_49691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49577_49692 = true;
var _STAR_print_fn_STAR__temp_val__49578_49693 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49577_49692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49578_49693);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49538_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49538_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49576_49691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49575_49690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49571,G__49572,G__49573,G__49574) : format.call(null,G__49571,G__49572,G__49573,G__49574));
} else {
var G__49579 = "Execution error%s at %s(%s).\n%s\n";
var G__49580 = cause_type;
var G__49581 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49582 = loc;
var G__49583 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49579,G__49580,G__49581,G__49582,G__49583) : format.call(null,G__49579,G__49580,G__49581,G__49582,G__49583));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49546__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
