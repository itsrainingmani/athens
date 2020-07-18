goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45377){
var map__45378 = p__45377;
var map__45378__$1 = (((((!((map__45378 == null))))?(((((map__45378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45378):map__45378);
var m = map__45378__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45378__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45380_45585 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45381_45586 = null;
var count__45382_45587 = (0);
var i__45383_45588 = (0);
while(true){
if((i__45383_45588 < count__45382_45587)){
var f_45589 = chunk__45381_45586.cljs$core$IIndexed$_nth$arity$2(null,i__45383_45588);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45589], 0));


var G__45590 = seq__45380_45585;
var G__45591 = chunk__45381_45586;
var G__45592 = count__45382_45587;
var G__45593 = (i__45383_45588 + (1));
seq__45380_45585 = G__45590;
chunk__45381_45586 = G__45591;
count__45382_45587 = G__45592;
i__45383_45588 = G__45593;
continue;
} else {
var temp__5735__auto___45594 = cljs.core.seq(seq__45380_45585);
if(temp__5735__auto___45594){
var seq__45380_45595__$1 = temp__5735__auto___45594;
if(cljs.core.chunked_seq_QMARK_(seq__45380_45595__$1)){
var c__4609__auto___45596 = cljs.core.chunk_first(seq__45380_45595__$1);
var G__45597 = cljs.core.chunk_rest(seq__45380_45595__$1);
var G__45598 = c__4609__auto___45596;
var G__45599 = cljs.core.count(c__4609__auto___45596);
var G__45600 = (0);
seq__45380_45585 = G__45597;
chunk__45381_45586 = G__45598;
count__45382_45587 = G__45599;
i__45383_45588 = G__45600;
continue;
} else {
var f_45601 = cljs.core.first(seq__45380_45595__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45601], 0));


var G__45602 = cljs.core.next(seq__45380_45595__$1);
var G__45603 = null;
var G__45604 = (0);
var G__45605 = (0);
seq__45380_45585 = G__45602;
chunk__45381_45586 = G__45603;
count__45382_45587 = G__45604;
i__45383_45588 = G__45605;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45607], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45607)))?cljs.core.second(arglists_45607):arglists_45607)], 0));
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
var seq__45385_45609 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45386_45610 = null;
var count__45387_45611 = (0);
var i__45388_45612 = (0);
while(true){
if((i__45388_45612 < count__45387_45611)){
var vec__45399_45613 = chunk__45386_45610.cljs$core$IIndexed$_nth$arity$2(null,i__45388_45612);
var name_45614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399_45613,(0),null);
var map__45402_45615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399_45613,(1),null);
var map__45402_45616__$1 = (((((!((map__45402_45615 == null))))?(((((map__45402_45615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45402_45615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45402_45615):map__45402_45615);
var doc_45617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45402_45616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45402_45616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45618], 0));

if(cljs.core.truth_(doc_45617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45617], 0));
} else {
}


var G__45620 = seq__45385_45609;
var G__45621 = chunk__45386_45610;
var G__45622 = count__45387_45611;
var G__45623 = (i__45388_45612 + (1));
seq__45385_45609 = G__45620;
chunk__45386_45610 = G__45621;
count__45387_45611 = G__45622;
i__45388_45612 = G__45623;
continue;
} else {
var temp__5735__auto___45624 = cljs.core.seq(seq__45385_45609);
if(temp__5735__auto___45624){
var seq__45385_45625__$1 = temp__5735__auto___45624;
if(cljs.core.chunked_seq_QMARK_(seq__45385_45625__$1)){
var c__4609__auto___45626 = cljs.core.chunk_first(seq__45385_45625__$1);
var G__45627 = cljs.core.chunk_rest(seq__45385_45625__$1);
var G__45628 = c__4609__auto___45626;
var G__45629 = cljs.core.count(c__4609__auto___45626);
var G__45630 = (0);
seq__45385_45609 = G__45627;
chunk__45386_45610 = G__45628;
count__45387_45611 = G__45629;
i__45388_45612 = G__45630;
continue;
} else {
var vec__45405_45631 = cljs.core.first(seq__45385_45625__$1);
var name_45632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45631,(0),null);
var map__45408_45633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45631,(1),null);
var map__45408_45634__$1 = (((((!((map__45408_45633 == null))))?(((((map__45408_45633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45408_45633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45408_45633):map__45408_45633);
var doc_45635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45408_45634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45408_45634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45636], 0));

if(cljs.core.truth_(doc_45635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45635], 0));
} else {
}


var G__45637 = cljs.core.next(seq__45385_45625__$1);
var G__45638 = null;
var G__45639 = (0);
var G__45640 = (0);
seq__45385_45609 = G__45637;
chunk__45386_45610 = G__45638;
count__45387_45611 = G__45639;
i__45388_45612 = G__45640;
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

var seq__45410 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45411 = null;
var count__45412 = (0);
var i__45413 = (0);
while(true){
if((i__45413 < count__45412)){
var role = chunk__45411.cljs$core$IIndexed$_nth$arity$2(null,i__45413);
var temp__5735__auto___45642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45642__$1)){
var spec_45643 = temp__5735__auto___45642__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45643)], 0));
} else {
}


var G__45644 = seq__45410;
var G__45645 = chunk__45411;
var G__45646 = count__45412;
var G__45647 = (i__45413 + (1));
seq__45410 = G__45644;
chunk__45411 = G__45645;
count__45412 = G__45646;
i__45413 = G__45647;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45410);
if(temp__5735__auto____$1){
var seq__45410__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45410__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45410__$1);
var G__45648 = cljs.core.chunk_rest(seq__45410__$1);
var G__45649 = c__4609__auto__;
var G__45650 = cljs.core.count(c__4609__auto__);
var G__45651 = (0);
seq__45410 = G__45648;
chunk__45411 = G__45649;
count__45412 = G__45650;
i__45413 = G__45651;
continue;
} else {
var role = cljs.core.first(seq__45410__$1);
var temp__5735__auto___45652__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45652__$2)){
var spec_45653 = temp__5735__auto___45652__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45653)], 0));
} else {
}


var G__45654 = cljs.core.next(seq__45410__$1);
var G__45655 = null;
var G__45656 = (0);
var G__45657 = (0);
seq__45410 = G__45654;
chunk__45411 = G__45655;
count__45412 = G__45656;
i__45413 = G__45657;
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
var G__45658 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45659 = cljs.core.ex_cause(t);
via = G__45658;
t = G__45659;
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
var map__45429 = datafied_throwable;
var map__45429__$1 = (((((!((map__45429 == null))))?(((((map__45429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45429):map__45429);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45429__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45429__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45429__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45430 = cljs.core.last(via);
var map__45430__$1 = (((((!((map__45430 == null))))?(((((map__45430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45430):map__45430);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45431 = data;
var map__45431__$1 = (((((!((map__45431 == null))))?(((((map__45431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45431):map__45431);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45432 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45432__$1 = (((((!((map__45432 == null))))?(((((map__45432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45432):map__45432);
var top_data = map__45432__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45432__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45446 = phase;
var G__45446__$1 = (((G__45446 instanceof cljs.core.Keyword))?G__45446.fqn:null);
switch (G__45446__$1) {
case "read-source":
var map__45454 = data;
var map__45454__$1 = (((((!((map__45454 == null))))?(((((map__45454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45454):map__45454);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45454__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45454__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45456__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45456,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45456);
var G__45456__$2 = (cljs.core.truth_((function (){var fexpr__45457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45457.cljs$core$IFn$_invoke$arity$1 ? fexpr__45457.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45457.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45456__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45456__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45456__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45458 = top_data;
var G__45458__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45458,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45458);
var G__45458__$2 = (cljs.core.truth_((function (){var fexpr__45463 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45463.cljs$core$IFn$_invoke$arity$1 ? fexpr__45463.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45463.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45458__$1);
var G__45458__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45458__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45458__$2);
var G__45458__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45458__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45458__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45458__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45458__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45474 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(3),null);
var G__45477 = top_data;
var G__45477__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45477);
var G__45477__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45477__$1);
var G__45477__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45477__$2);
var G__45477__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45477__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45477__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45477__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45477__$4;
}

break;
case "execution":
var vec__45486 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45420_SHARP_){
var or__4185__auto__ = (p1__45420_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45506.cljs$core$IFn$_invoke$arity$1 ? fexpr__45506.cljs$core$IFn$_invoke$arity$1(p1__45420_SHARP_) : fexpr__45506.call(null,p1__45420_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45507);
var G__45507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45507__$1);
var G__45507__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45507__$2);
var G__45507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45446__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45517){
var map__45518 = p__45517;
var map__45518__$1 = (((((!((map__45518 == null))))?(((((map__45518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45518):map__45518);
var triage_data = map__45518__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45518__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45534 = phase;
var G__45534__$1 = (((G__45534 instanceof cljs.core.Keyword))?G__45534.fqn:null);
switch (G__45534__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45539 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45541 = loc;
var G__45542 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45547_45670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45548_45671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45549_45672 = true;
var _STAR_print_fn_STAR__temp_val__45550_45673 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45549_45672);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45550_45673);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45512_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45512_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45548_45671);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45547_45670);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45539,G__45540,G__45541,G__45542) : format.call(null,G__45539,G__45540,G__45541,G__45542));

break;
case "macroexpansion":
var G__45555 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45556 = cause_type;
var G__45557 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45558 = loc;
var G__45559 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45555,G__45556,G__45557,G__45558,G__45559) : format.call(null,G__45555,G__45556,G__45557,G__45558,G__45559));

break;
case "compile-syntax-check":
var G__45560 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45561 = cause_type;
var G__45562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45563 = loc;
var G__45564 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45560,G__45561,G__45562,G__45563,G__45564) : format.call(null,G__45560,G__45561,G__45562,G__45563,G__45564));

break;
case "compilation":
var G__45565 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45566 = cause_type;
var G__45567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45568 = loc;
var G__45569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45565,G__45566,G__45567,G__45568,G__45569) : format.call(null,G__45565,G__45566,G__45567,G__45568,G__45569));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45570 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45571 = symbol;
var G__45572 = loc;
var G__45573 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45574_45675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45575_45676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45576_45677 = true;
var _STAR_print_fn_STAR__temp_val__45577_45678 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45576_45677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45577_45678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45516_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45516_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45575_45676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45574_45675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45570,G__45571,G__45572,G__45573) : format.call(null,G__45570,G__45571,G__45572,G__45573));
} else {
var G__45579 = "Execution error%s at %s(%s).\n%s\n";
var G__45580 = cause_type;
var G__45581 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45582 = loc;
var G__45583 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45579,G__45580,G__45581,G__45582,G__45583) : format.call(null,G__45579,G__45580,G__45581,G__45582,G__45583));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45534__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
