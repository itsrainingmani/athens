goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45369){
var map__45370 = p__45369;
var map__45370__$1 = (((((!((map__45370 == null))))?(((((map__45370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45370):map__45370);
var m = map__45370__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45370__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45372_45579 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45373_45580 = null;
var count__45374_45581 = (0);
var i__45375_45582 = (0);
while(true){
if((i__45375_45582 < count__45374_45581)){
var f_45584 = chunk__45373_45580.cljs$core$IIndexed$_nth$arity$2(null,i__45375_45582);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45584], 0));


var G__45585 = seq__45372_45579;
var G__45586 = chunk__45373_45580;
var G__45587 = count__45374_45581;
var G__45588 = (i__45375_45582 + (1));
seq__45372_45579 = G__45585;
chunk__45373_45580 = G__45586;
count__45374_45581 = G__45587;
i__45375_45582 = G__45588;
continue;
} else {
var temp__5735__auto___45589 = cljs.core.seq(seq__45372_45579);
if(temp__5735__auto___45589){
var seq__45372_45590__$1 = temp__5735__auto___45589;
if(cljs.core.chunked_seq_QMARK_(seq__45372_45590__$1)){
var c__4609__auto___45591 = cljs.core.chunk_first(seq__45372_45590__$1);
var G__45592 = cljs.core.chunk_rest(seq__45372_45590__$1);
var G__45593 = c__4609__auto___45591;
var G__45594 = cljs.core.count(c__4609__auto___45591);
var G__45595 = (0);
seq__45372_45579 = G__45592;
chunk__45373_45580 = G__45593;
count__45374_45581 = G__45594;
i__45375_45582 = G__45595;
continue;
} else {
var f_45596 = cljs.core.first(seq__45372_45590__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45596], 0));


var G__45597 = cljs.core.next(seq__45372_45590__$1);
var G__45598 = null;
var G__45599 = (0);
var G__45600 = (0);
seq__45372_45579 = G__45597;
chunk__45373_45580 = G__45598;
count__45374_45581 = G__45599;
i__45375_45582 = G__45600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45601], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45601)))?cljs.core.second(arglists_45601):arglists_45601)], 0));
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
var seq__45377_45603 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45378_45604 = null;
var count__45379_45605 = (0);
var i__45380_45606 = (0);
while(true){
if((i__45380_45606 < count__45379_45605)){
var vec__45391_45607 = chunk__45378_45604.cljs$core$IIndexed$_nth$arity$2(null,i__45380_45606);
var name_45608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45391_45607,(0),null);
var map__45394_45609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45391_45607,(1),null);
var map__45394_45610__$1 = (((((!((map__45394_45609 == null))))?(((((map__45394_45609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45394_45609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45394_45609):map__45394_45609);
var doc_45611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45394_45610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45394_45610__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45608], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45612], 0));

if(cljs.core.truth_(doc_45611)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45611], 0));
} else {
}


var G__45613 = seq__45377_45603;
var G__45614 = chunk__45378_45604;
var G__45615 = count__45379_45605;
var G__45616 = (i__45380_45606 + (1));
seq__45377_45603 = G__45613;
chunk__45378_45604 = G__45614;
count__45379_45605 = G__45615;
i__45380_45606 = G__45616;
continue;
} else {
var temp__5735__auto___45617 = cljs.core.seq(seq__45377_45603);
if(temp__5735__auto___45617){
var seq__45377_45618__$1 = temp__5735__auto___45617;
if(cljs.core.chunked_seq_QMARK_(seq__45377_45618__$1)){
var c__4609__auto___45619 = cljs.core.chunk_first(seq__45377_45618__$1);
var G__45620 = cljs.core.chunk_rest(seq__45377_45618__$1);
var G__45621 = c__4609__auto___45619;
var G__45622 = cljs.core.count(c__4609__auto___45619);
var G__45623 = (0);
seq__45377_45603 = G__45620;
chunk__45378_45604 = G__45621;
count__45379_45605 = G__45622;
i__45380_45606 = G__45623;
continue;
} else {
var vec__45397_45624 = cljs.core.first(seq__45377_45618__$1);
var name_45625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45397_45624,(0),null);
var map__45400_45626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45397_45624,(1),null);
var map__45400_45627__$1 = (((((!((map__45400_45626 == null))))?(((((map__45400_45626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45400_45626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45400_45626):map__45400_45626);
var doc_45628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45400_45627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45400_45627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45625], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45629], 0));

if(cljs.core.truth_(doc_45628)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45628], 0));
} else {
}


var G__45630 = cljs.core.next(seq__45377_45618__$1);
var G__45631 = null;
var G__45632 = (0);
var G__45633 = (0);
seq__45377_45603 = G__45630;
chunk__45378_45604 = G__45631;
count__45379_45605 = G__45632;
i__45380_45606 = G__45633;
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

var seq__45402 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45403 = null;
var count__45404 = (0);
var i__45405 = (0);
while(true){
if((i__45405 < count__45404)){
var role = chunk__45403.cljs$core$IIndexed$_nth$arity$2(null,i__45405);
var temp__5735__auto___45634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45634__$1)){
var spec_45635 = temp__5735__auto___45634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45635)], 0));
} else {
}


var G__45636 = seq__45402;
var G__45637 = chunk__45403;
var G__45638 = count__45404;
var G__45639 = (i__45405 + (1));
seq__45402 = G__45636;
chunk__45403 = G__45637;
count__45404 = G__45638;
i__45405 = G__45639;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45402);
if(temp__5735__auto____$1){
var seq__45402__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45402__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45402__$1);
var G__45640 = cljs.core.chunk_rest(seq__45402__$1);
var G__45641 = c__4609__auto__;
var G__45642 = cljs.core.count(c__4609__auto__);
var G__45643 = (0);
seq__45402 = G__45640;
chunk__45403 = G__45641;
count__45404 = G__45642;
i__45405 = G__45643;
continue;
} else {
var role = cljs.core.first(seq__45402__$1);
var temp__5735__auto___45644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45644__$2)){
var spec_45645 = temp__5735__auto___45644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45645)], 0));
} else {
}


var G__45646 = cljs.core.next(seq__45402__$1);
var G__45647 = null;
var G__45648 = (0);
var G__45649 = (0);
seq__45402 = G__45646;
chunk__45403 = G__45647;
count__45404 = G__45648;
i__45405 = G__45649;
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
var G__45652 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45653 = cljs.core.ex_cause(t);
via = G__45652;
t = G__45653;
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
var map__45430 = datafied_throwable;
var map__45430__$1 = (((((!((map__45430 == null))))?(((((map__45430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45430):map__45430);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45430__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45431 = cljs.core.last(via);
var map__45431__$1 = (((((!((map__45431 == null))))?(((((map__45431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45431):map__45431);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45432 = data;
var map__45432__$1 = (((((!((map__45432 == null))))?(((((map__45432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45432):map__45432);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45432__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45432__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45432__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45433 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45433__$1 = (((((!((map__45433 == null))))?(((((map__45433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45433):map__45433);
var top_data = map__45433__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45451 = phase;
var G__45451__$1 = (((G__45451 instanceof cljs.core.Keyword))?G__45451.fqn:null);
switch (G__45451__$1) {
case "read-source":
var map__45460 = data;
var map__45460__$1 = (((((!((map__45460 == null))))?(((((map__45460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45460):map__45460);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45460__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45460__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45466 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45466__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45466,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45466);
var G__45466__$2 = (cljs.core.truth_((function (){var fexpr__45474 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45474.cljs$core$IFn$_invoke$arity$1 ? fexpr__45474.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45474.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45466__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45466__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45466__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45488 = top_data;
var G__45488__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45488,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45488);
var G__45488__$2 = (cljs.core.truth_((function (){var fexpr__45489 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45489.cljs$core$IFn$_invoke$arity$1 ? fexpr__45489.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45489.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45488__$1);
var G__45488__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45488__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45488__$2);
var G__45488__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45488__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45488__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45488__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45488__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45490 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(3),null);
var G__45497 = top_data;
var G__45497__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45497,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45497);
var G__45497__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45497__$1);
var G__45497__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45497__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45497__$2);
var G__45497__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45497__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45497__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45497__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45497__$4;
}

break;
case "execution":
var vec__45512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45429_SHARP_){
var or__4185__auto__ = (p1__45429_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45519.cljs$core$IFn$_invoke$arity$1 ? fexpr__45519.cljs$core$IFn$_invoke$arity$1(p1__45429_SHARP_) : fexpr__45519.call(null,p1__45429_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45520__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45520,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45520);
var G__45520__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45520__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45520__$1);
var G__45520__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45520__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45520__$2);
var G__45520__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45520__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45520__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45451__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45535){
var map__45536 = p__45535;
var map__45536__$1 = (((((!((map__45536 == null))))?(((((map__45536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45536):map__45536);
var triage_data = map__45536__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45536__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45539 = phase;
var G__45539__$1 = (((G__45539 instanceof cljs.core.Keyword))?G__45539.fqn:null);
switch (G__45539__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45540 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45542 = loc;
var G__45543 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45545_45663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45546_45664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45547_45665 = true;
var _STAR_print_fn_STAR__temp_val__45548_45666 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45547_45665);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45548_45666);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45533_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45533_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45546_45664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45545_45663);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45540,G__45541,G__45542,G__45543) : format.call(null,G__45540,G__45541,G__45542,G__45543));

break;
case "macroexpansion":
var G__45549 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45550 = cause_type;
var G__45551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45552 = loc;
var G__45553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45549,G__45550,G__45551,G__45552,G__45553) : format.call(null,G__45549,G__45550,G__45551,G__45552,G__45553));

break;
case "compile-syntax-check":
var G__45554 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45555 = cause_type;
var G__45556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45557 = loc;
var G__45558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45554,G__45555,G__45556,G__45557,G__45558) : format.call(null,G__45554,G__45555,G__45556,G__45557,G__45558));

break;
case "compilation":
var G__45559 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45560 = cause_type;
var G__45561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45562 = loc;
var G__45563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45559,G__45560,G__45561,G__45562,G__45563) : format.call(null,G__45559,G__45560,G__45561,G__45562,G__45563));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45564 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45565 = symbol;
var G__45566 = loc;
var G__45567 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45568_45668 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45569_45669 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45570_45670 = true;
var _STAR_print_fn_STAR__temp_val__45571_45671 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45570_45670);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45571_45671);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45534_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45534_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45569_45669);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45568_45668);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45564,G__45565,G__45566,G__45567) : format.call(null,G__45564,G__45565,G__45566,G__45567));
} else {
var G__45573 = "Execution error%s at %s(%s).\n%s\n";
var G__45574 = cause_type;
var G__45575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45576 = loc;
var G__45577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45573,G__45574,G__45575,G__45576,G__45577) : format.call(null,G__45573,G__45574,G__45575,G__45576,G__45577));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45539__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
