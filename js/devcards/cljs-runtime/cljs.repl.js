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
var seq__49456_49585 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49457_49586 = null;
var count__49458_49587 = (0);
var i__49459_49588 = (0);
while(true){
if((i__49459_49588 < count__49458_49587)){
var f_49589 = chunk__49457_49586.cljs$core$IIndexed$_nth$arity$2(null,i__49459_49588);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49589], 0));


var G__49590 = seq__49456_49585;
var G__49591 = chunk__49457_49586;
var G__49592 = count__49458_49587;
var G__49593 = (i__49459_49588 + (1));
seq__49456_49585 = G__49590;
chunk__49457_49586 = G__49591;
count__49458_49587 = G__49592;
i__49459_49588 = G__49593;
continue;
} else {
var temp__5735__auto___49594 = cljs.core.seq(seq__49456_49585);
if(temp__5735__auto___49594){
var seq__49456_49595__$1 = temp__5735__auto___49594;
if(cljs.core.chunked_seq_QMARK_(seq__49456_49595__$1)){
var c__4556__auto___49596 = cljs.core.chunk_first(seq__49456_49595__$1);
var G__49597 = cljs.core.chunk_rest(seq__49456_49595__$1);
var G__49598 = c__4556__auto___49596;
var G__49599 = cljs.core.count(c__4556__auto___49596);
var G__49600 = (0);
seq__49456_49585 = G__49597;
chunk__49457_49586 = G__49598;
count__49458_49587 = G__49599;
i__49459_49588 = G__49600;
continue;
} else {
var f_49602 = cljs.core.first(seq__49456_49595__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49602], 0));


var G__49603 = cljs.core.next(seq__49456_49595__$1);
var G__49604 = null;
var G__49605 = (0);
var G__49606 = (0);
seq__49456_49585 = G__49603;
chunk__49457_49586 = G__49604;
count__49458_49587 = G__49605;
i__49459_49588 = G__49606;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49607], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49607)))?cljs.core.second(arglists_49607):arglists_49607)], 0));
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
var seq__49473_49609 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49474_49610 = null;
var count__49475_49611 = (0);
var i__49476_49612 = (0);
while(true){
if((i__49476_49612 < count__49475_49611)){
var vec__49488_49613 = chunk__49474_49610.cljs$core$IIndexed$_nth$arity$2(null,i__49476_49612);
var name_49614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488_49613,(0),null);
var map__49491_49615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488_49613,(1),null);
var map__49491_49616__$1 = (((((!((map__49491_49615 == null))))?(((((map__49491_49615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49491_49615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49491_49615):map__49491_49615);
var doc_49617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49491_49616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49491_49616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49618], 0));

if(cljs.core.truth_(doc_49617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49617], 0));
} else {
}


var G__49619 = seq__49473_49609;
var G__49620 = chunk__49474_49610;
var G__49621 = count__49475_49611;
var G__49622 = (i__49476_49612 + (1));
seq__49473_49609 = G__49619;
chunk__49474_49610 = G__49620;
count__49475_49611 = G__49621;
i__49476_49612 = G__49622;
continue;
} else {
var temp__5735__auto___49623 = cljs.core.seq(seq__49473_49609);
if(temp__5735__auto___49623){
var seq__49473_49624__$1 = temp__5735__auto___49623;
if(cljs.core.chunked_seq_QMARK_(seq__49473_49624__$1)){
var c__4556__auto___49625 = cljs.core.chunk_first(seq__49473_49624__$1);
var G__49626 = cljs.core.chunk_rest(seq__49473_49624__$1);
var G__49627 = c__4556__auto___49625;
var G__49628 = cljs.core.count(c__4556__auto___49625);
var G__49629 = (0);
seq__49473_49609 = G__49626;
chunk__49474_49610 = G__49627;
count__49475_49611 = G__49628;
i__49476_49612 = G__49629;
continue;
} else {
var vec__49493_49630 = cljs.core.first(seq__49473_49624__$1);
var name_49631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493_49630,(0),null);
var map__49496_49632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493_49630,(1),null);
var map__49496_49633__$1 = (((((!((map__49496_49632 == null))))?(((((map__49496_49632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49496_49632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49496_49632):map__49496_49632);
var doc_49634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496_49633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496_49633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49635], 0));

if(cljs.core.truth_(doc_49634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49634], 0));
} else {
}


var G__49636 = cljs.core.next(seq__49473_49624__$1);
var G__49637 = null;
var G__49638 = (0);
var G__49639 = (0);
seq__49473_49609 = G__49636;
chunk__49474_49610 = G__49637;
count__49475_49611 = G__49638;
i__49476_49612 = G__49639;
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

var seq__49499 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49500 = null;
var count__49501 = (0);
var i__49502 = (0);
while(true){
if((i__49502 < count__49501)){
var role = chunk__49500.cljs$core$IIndexed$_nth$arity$2(null,i__49502);
var temp__5735__auto___49640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49640__$1)){
var spec_49641 = temp__5735__auto___49640__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49641)], 0));
} else {
}


var G__49642 = seq__49499;
var G__49643 = chunk__49500;
var G__49644 = count__49501;
var G__49645 = (i__49502 + (1));
seq__49499 = G__49642;
chunk__49500 = G__49643;
count__49501 = G__49644;
i__49502 = G__49645;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49499);
if(temp__5735__auto____$1){
var seq__49499__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49499__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49499__$1);
var G__49646 = cljs.core.chunk_rest(seq__49499__$1);
var G__49647 = c__4556__auto__;
var G__49648 = cljs.core.count(c__4556__auto__);
var G__49649 = (0);
seq__49499 = G__49646;
chunk__49500 = G__49647;
count__49501 = G__49648;
i__49502 = G__49649;
continue;
} else {
var role = cljs.core.first(seq__49499__$1);
var temp__5735__auto___49650__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49650__$2)){
var spec_49652 = temp__5735__auto___49650__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49652)], 0));
} else {
}


var G__49655 = cljs.core.next(seq__49499__$1);
var G__49656 = null;
var G__49657 = (0);
var G__49658 = (0);
seq__49499 = G__49655;
chunk__49500 = G__49656;
count__49501 = G__49657;
i__49502 = G__49658;
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
var G__49659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49660 = cljs.core.ex_cause(t);
via = G__49659;
t = G__49660;
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
var map__49507 = datafied_throwable;
var map__49507__$1 = (((((!((map__49507 == null))))?(((((map__49507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49507):map__49507);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49507__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49519 = phase;
var G__49519__$1 = (((G__49519 instanceof cljs.core.Keyword))?G__49519.fqn:null);
switch (G__49519__$1) {
case "read-source":
var map__49520 = data;
var map__49520__$1 = (((((!((map__49520 == null))))?(((((map__49520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49520):map__49520);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49522 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49522__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49522);
var G__49522__$2 = (cljs.core.truth_((function (){var fexpr__49523 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49523.cljs$core$IFn$_invoke$arity$1 ? fexpr__49523.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49523.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49522__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49522__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49524 = top_data;
var G__49524__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49524,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49524);
var G__49524__$2 = (cljs.core.truth_((function (){var fexpr__49525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49525.cljs$core$IFn$_invoke$arity$1 ? fexpr__49525.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49525.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49524__$1);
var G__49524__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49524__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49524__$2);
var G__49524__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49524__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49524__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49524__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49524__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49527 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(3),null);
var G__49530 = top_data;
var G__49530__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49530);
var G__49530__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49530__$1);
var G__49530__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49530__$2);
var G__49530__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49530__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49530__$4;
}

break;
case "execution":
var vec__49535 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49506_SHARP_){
var or__4126__auto__ = (p1__49506_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49539 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49539.cljs$core$IFn$_invoke$arity$1 ? fexpr__49539.cljs$core$IFn$_invoke$arity$1(p1__49506_SHARP_) : fexpr__49539.call(null,p1__49506_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49541 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49541__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49541,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49541);
var G__49541__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49541__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49541__$1);
var G__49541__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49541__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49541__$2);
var G__49541__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49541__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49541__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49541__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49541__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49519__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49544){
var map__49545 = p__49544;
var map__49545__$1 = (((((!((map__49545 == null))))?(((((map__49545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49545):map__49545);
var triage_data = map__49545__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49547 = phase;
var G__49547__$1 = (((G__49547 instanceof cljs.core.Keyword))?G__49547.fqn:null);
switch (G__49547__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49548 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49550 = loc;
var G__49551 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49552_49686 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49553_49687 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49554_49688 = true;
var _STAR_print_fn_STAR__temp_val__49555_49689 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49554_49688);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49555_49689);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49542_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49542_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49553_49687);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49552_49686);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49548,G__49549,G__49550,G__49551) : format.call(null,G__49548,G__49549,G__49550,G__49551));

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
var G__49567 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49568 = cause_type;
var G__49569 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49570 = loc;
var G__49571 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49567,G__49568,G__49569,G__49570,G__49571) : format.call(null,G__49567,G__49568,G__49569,G__49570,G__49571));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49572 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49573 = symbol;
var G__49574 = loc;
var G__49575 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49576_49690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49577_49691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49578_49692 = true;
var _STAR_print_fn_STAR__temp_val__49579_49693 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49578_49692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49579_49693);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49543_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49543_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49577_49691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49576_49690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49572,G__49573,G__49574,G__49575) : format.call(null,G__49572,G__49573,G__49574,G__49575));
} else {
var G__49580 = "Execution error%s at %s(%s).\n%s\n";
var G__49581 = cause_type;
var G__49582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49583 = loc;
var G__49584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49580,G__49581,G__49582,G__49583,G__49584) : format.call(null,G__49580,G__49581,G__49582,G__49583,G__49584));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49547__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
