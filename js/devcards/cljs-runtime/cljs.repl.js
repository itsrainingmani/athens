goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45475){
var map__45476 = p__45475;
var map__45476__$1 = (((((!((map__45476 == null))))?(((((map__45476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45476):map__45476);
var m = map__45476__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45482_45597 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45483_45598 = null;
var count__45484_45599 = (0);
var i__45485_45600 = (0);
while(true){
if((i__45485_45600 < count__45484_45599)){
var f_45601 = chunk__45483_45598.cljs$core$IIndexed$_nth$arity$2(null,i__45485_45600);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45601], 0));


var G__45603 = seq__45482_45597;
var G__45604 = chunk__45483_45598;
var G__45605 = count__45484_45599;
var G__45606 = (i__45485_45600 + (1));
seq__45482_45597 = G__45603;
chunk__45483_45598 = G__45604;
count__45484_45599 = G__45605;
i__45485_45600 = G__45606;
continue;
} else {
var temp__5735__auto___45607 = cljs.core.seq(seq__45482_45597);
if(temp__5735__auto___45607){
var seq__45482_45608__$1 = temp__5735__auto___45607;
if(cljs.core.chunked_seq_QMARK_(seq__45482_45608__$1)){
var c__4609__auto___45609 = cljs.core.chunk_first(seq__45482_45608__$1);
var G__45610 = cljs.core.chunk_rest(seq__45482_45608__$1);
var G__45611 = c__4609__auto___45609;
var G__45612 = cljs.core.count(c__4609__auto___45609);
var G__45613 = (0);
seq__45482_45597 = G__45610;
chunk__45483_45598 = G__45611;
count__45484_45599 = G__45612;
i__45485_45600 = G__45613;
continue;
} else {
var f_45614 = cljs.core.first(seq__45482_45608__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45614], 0));


var G__45615 = cljs.core.next(seq__45482_45608__$1);
var G__45616 = null;
var G__45617 = (0);
var G__45618 = (0);
seq__45482_45597 = G__45615;
chunk__45483_45598 = G__45616;
count__45484_45599 = G__45617;
i__45485_45600 = G__45618;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45619 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45619], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45619)))?cljs.core.second(arglists_45619):arglists_45619)], 0));
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
var seq__45488_45620 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45489_45621 = null;
var count__45490_45622 = (0);
var i__45491_45623 = (0);
while(true){
if((i__45491_45623 < count__45490_45622)){
var vec__45502_45624 = chunk__45489_45621.cljs$core$IIndexed$_nth$arity$2(null,i__45491_45623);
var name_45625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45502_45624,(0),null);
var map__45505_45626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45502_45624,(1),null);
var map__45505_45627__$1 = (((((!((map__45505_45626 == null))))?(((((map__45505_45626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45505_45626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45505_45626):map__45505_45626);
var doc_45628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45505_45627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45505_45627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45625], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45629], 0));

if(cljs.core.truth_(doc_45628)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45628], 0));
} else {
}


var G__45630 = seq__45488_45620;
var G__45631 = chunk__45489_45621;
var G__45632 = count__45490_45622;
var G__45633 = (i__45491_45623 + (1));
seq__45488_45620 = G__45630;
chunk__45489_45621 = G__45631;
count__45490_45622 = G__45632;
i__45491_45623 = G__45633;
continue;
} else {
var temp__5735__auto___45634 = cljs.core.seq(seq__45488_45620);
if(temp__5735__auto___45634){
var seq__45488_45635__$1 = temp__5735__auto___45634;
if(cljs.core.chunked_seq_QMARK_(seq__45488_45635__$1)){
var c__4609__auto___45636 = cljs.core.chunk_first(seq__45488_45635__$1);
var G__45637 = cljs.core.chunk_rest(seq__45488_45635__$1);
var G__45638 = c__4609__auto___45636;
var G__45639 = cljs.core.count(c__4609__auto___45636);
var G__45640 = (0);
seq__45488_45620 = G__45637;
chunk__45489_45621 = G__45638;
count__45490_45622 = G__45639;
i__45491_45623 = G__45640;
continue;
} else {
var vec__45508_45641 = cljs.core.first(seq__45488_45635__$1);
var name_45642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508_45641,(0),null);
var map__45511_45643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508_45641,(1),null);
var map__45511_45644__$1 = (((((!((map__45511_45643 == null))))?(((((map__45511_45643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45511_45643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45511_45643):map__45511_45643);
var doc_45645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511_45644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511_45644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45642], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45646], 0));

if(cljs.core.truth_(doc_45645)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45645], 0));
} else {
}


var G__45648 = cljs.core.next(seq__45488_45635__$1);
var G__45649 = null;
var G__45650 = (0);
var G__45651 = (0);
seq__45488_45620 = G__45648;
chunk__45489_45621 = G__45649;
count__45490_45622 = G__45650;
i__45491_45623 = G__45651;
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

var seq__45514 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45515 = null;
var count__45516 = (0);
var i__45517 = (0);
while(true){
if((i__45517 < count__45516)){
var role = chunk__45515.cljs$core$IIndexed$_nth$arity$2(null,i__45517);
var temp__5735__auto___45652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45652__$1)){
var spec_45653 = temp__5735__auto___45652__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45653)], 0));
} else {
}


var G__45654 = seq__45514;
var G__45655 = chunk__45515;
var G__45656 = count__45516;
var G__45657 = (i__45517 + (1));
seq__45514 = G__45654;
chunk__45515 = G__45655;
count__45516 = G__45656;
i__45517 = G__45657;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45514);
if(temp__5735__auto____$1){
var seq__45514__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45514__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45514__$1);
var G__45658 = cljs.core.chunk_rest(seq__45514__$1);
var G__45659 = c__4609__auto__;
var G__45660 = cljs.core.count(c__4609__auto__);
var G__45661 = (0);
seq__45514 = G__45658;
chunk__45515 = G__45659;
count__45516 = G__45660;
i__45517 = G__45661;
continue;
} else {
var role = cljs.core.first(seq__45514__$1);
var temp__5735__auto___45662__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45662__$2)){
var spec_45663 = temp__5735__auto___45662__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45663)], 0));
} else {
}


var G__45664 = cljs.core.next(seq__45514__$1);
var G__45665 = null;
var G__45666 = (0);
var G__45667 = (0);
seq__45514 = G__45664;
chunk__45515 = G__45665;
count__45516 = G__45666;
i__45517 = G__45667;
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
var G__45668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45669 = cljs.core.ex_cause(t);
via = G__45668;
t = G__45669;
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
var map__45522 = datafied_throwable;
var map__45522__$1 = (((((!((map__45522 == null))))?(((((map__45522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45522):map__45522);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45522__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45522__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45523 = cljs.core.last(via);
var map__45523__$1 = (((((!((map__45523 == null))))?(((((map__45523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45523):map__45523);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45524 = data;
var map__45524__$1 = (((((!((map__45524 == null))))?(((((map__45524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45524):map__45524);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45525 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45525__$1 = (((((!((map__45525 == null))))?(((((map__45525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45525):map__45525);
var top_data = map__45525__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45530 = phase;
var G__45530__$1 = (((G__45530 instanceof cljs.core.Keyword))?G__45530.fqn:null);
switch (G__45530__$1) {
case "read-source":
var map__45531 = data;
var map__45531__$1 = (((((!((map__45531 == null))))?(((((map__45531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45531):map__45531);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45533 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45533__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45533,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45533);
var G__45533__$2 = (cljs.core.truth_((function (){var fexpr__45534 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45534.cljs$core$IFn$_invoke$arity$1 ? fexpr__45534.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45534.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45533__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45533__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45533__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45535 = top_data;
var G__45535__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45535);
var G__45535__$2 = (cljs.core.truth_((function (){var fexpr__45536 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45536.cljs$core$IFn$_invoke$arity$1 ? fexpr__45536.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45536.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45535__$1);
var G__45535__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45535__$2);
var G__45535__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45535__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45535__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45537 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(3),null);
var G__45542 = top_data;
var G__45542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45542);
var G__45542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45542__$1);
var G__45542__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45542__$2);
var G__45542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45542__$4;
}

break;
case "execution":
var vec__45545 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45521_SHARP_){
var or__4185__auto__ = (p1__45521_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45549.cljs$core$IFn$_invoke$arity$1 ? fexpr__45549.cljs$core$IFn$_invoke$arity$1(p1__45521_SHARP_) : fexpr__45549.call(null,p1__45521_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45552__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45552,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45552);
var G__45552__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45552__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45552__$1);
var G__45552__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45552__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45552__$2);
var G__45552__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45552__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45552__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45552__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45552__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45530__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45557){
var map__45558 = p__45557;
var map__45558__$1 = (((((!((map__45558 == null))))?(((((map__45558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45558):map__45558);
var triage_data = map__45558__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45558__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45560 = phase;
var G__45560__$1 = (((G__45560 instanceof cljs.core.Keyword))?G__45560.fqn:null);
switch (G__45560__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45561 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45563 = loc;
var G__45564 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45565_45677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45566_45678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45567_45679 = true;
var _STAR_print_fn_STAR__temp_val__45568_45680 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45567_45679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45568_45680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45555_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45566_45678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45565_45677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45561,G__45562,G__45563,G__45564) : format.call(null,G__45561,G__45562,G__45563,G__45564));

break;
case "macroexpansion":
var G__45569 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45570 = cause_type;
var G__45571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45572 = loc;
var G__45573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45569,G__45570,G__45571,G__45572,G__45573) : format.call(null,G__45569,G__45570,G__45571,G__45572,G__45573));

break;
case "compile-syntax-check":
var G__45574 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45575 = cause_type;
var G__45576 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45577 = loc;
var G__45578 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45574,G__45575,G__45576,G__45577,G__45578) : format.call(null,G__45574,G__45575,G__45576,G__45577,G__45578));

break;
case "compilation":
var G__45579 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45580 = cause_type;
var G__45581 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45582 = loc;
var G__45583 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45579,G__45580,G__45581,G__45582,G__45583) : format.call(null,G__45579,G__45580,G__45581,G__45582,G__45583));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45584 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45585 = symbol;
var G__45586 = loc;
var G__45587 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45588_45682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45589_45683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45590_45684 = true;
var _STAR_print_fn_STAR__temp_val__45591_45685 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45590_45684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45591_45685);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45556_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45556_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45589_45683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45588_45682);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45584,G__45585,G__45586,G__45587) : format.call(null,G__45584,G__45585,G__45586,G__45587));
} else {
var G__45592 = "Execution error%s at %s(%s).\n%s\n";
var G__45593 = cause_type;
var G__45594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45595 = loc;
var G__45596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45592,G__45593,G__45594,G__45595,G__45596) : format.call(null,G__45592,G__45593,G__45594,G__45595,G__45596));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45560__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
