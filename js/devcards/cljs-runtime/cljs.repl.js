goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51437){
var map__51438 = p__51437;
var map__51438__$1 = (((((!((map__51438 == null))))?(((((map__51438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51438):map__51438);
var m = map__51438__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51441_51569 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51442_51570 = null;
var count__51443_51571 = (0);
var i__51444_51572 = (0);
while(true){
if((i__51444_51572 < count__51443_51571)){
var f_51573 = chunk__51442_51570.cljs$core$IIndexed$_nth$arity$2(null,i__51444_51572);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51573], 0));


var G__51574 = seq__51441_51569;
var G__51575 = chunk__51442_51570;
var G__51576 = count__51443_51571;
var G__51577 = (i__51444_51572 + (1));
seq__51441_51569 = G__51574;
chunk__51442_51570 = G__51575;
count__51443_51571 = G__51576;
i__51444_51572 = G__51577;
continue;
} else {
var temp__5735__auto___51578 = cljs.core.seq(seq__51441_51569);
if(temp__5735__auto___51578){
var seq__51441_51579__$1 = temp__5735__auto___51578;
if(cljs.core.chunked_seq_QMARK_(seq__51441_51579__$1)){
var c__4609__auto___51580 = cljs.core.chunk_first(seq__51441_51579__$1);
var G__51581 = cljs.core.chunk_rest(seq__51441_51579__$1);
var G__51582 = c__4609__auto___51580;
var G__51583 = cljs.core.count(c__4609__auto___51580);
var G__51584 = (0);
seq__51441_51569 = G__51581;
chunk__51442_51570 = G__51582;
count__51443_51571 = G__51583;
i__51444_51572 = G__51584;
continue;
} else {
var f_51585 = cljs.core.first(seq__51441_51579__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51585], 0));


var G__51586 = cljs.core.next(seq__51441_51579__$1);
var G__51587 = null;
var G__51588 = (0);
var G__51589 = (0);
seq__51441_51569 = G__51586;
chunk__51442_51570 = G__51587;
count__51443_51571 = G__51588;
i__51444_51572 = G__51589;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51590 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51590], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51590)))?cljs.core.second(arglists_51590):arglists_51590)], 0));
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
var seq__51457_51591 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51458_51592 = null;
var count__51459_51593 = (0);
var i__51460_51594 = (0);
while(true){
if((i__51460_51594 < count__51459_51593)){
var vec__51473_51595 = chunk__51458_51592.cljs$core$IIndexed$_nth$arity$2(null,i__51460_51594);
var name_51596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51473_51595,(0),null);
var map__51476_51597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51473_51595,(1),null);
var map__51476_51598__$1 = (((((!((map__51476_51597 == null))))?(((((map__51476_51597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51476_51597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51476_51597):map__51476_51597);
var doc_51599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476_51598__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476_51598__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51596], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51600], 0));

if(cljs.core.truth_(doc_51599)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51599], 0));
} else {
}


var G__51601 = seq__51457_51591;
var G__51602 = chunk__51458_51592;
var G__51603 = count__51459_51593;
var G__51604 = (i__51460_51594 + (1));
seq__51457_51591 = G__51601;
chunk__51458_51592 = G__51602;
count__51459_51593 = G__51603;
i__51460_51594 = G__51604;
continue;
} else {
var temp__5735__auto___51605 = cljs.core.seq(seq__51457_51591);
if(temp__5735__auto___51605){
var seq__51457_51606__$1 = temp__5735__auto___51605;
if(cljs.core.chunked_seq_QMARK_(seq__51457_51606__$1)){
var c__4609__auto___51607 = cljs.core.chunk_first(seq__51457_51606__$1);
var G__51608 = cljs.core.chunk_rest(seq__51457_51606__$1);
var G__51609 = c__4609__auto___51607;
var G__51610 = cljs.core.count(c__4609__auto___51607);
var G__51611 = (0);
seq__51457_51591 = G__51608;
chunk__51458_51592 = G__51609;
count__51459_51593 = G__51610;
i__51460_51594 = G__51611;
continue;
} else {
var vec__51478_51612 = cljs.core.first(seq__51457_51606__$1);
var name_51613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51478_51612,(0),null);
var map__51481_51614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51478_51612,(1),null);
var map__51481_51615__$1 = (((((!((map__51481_51614 == null))))?(((((map__51481_51614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481_51614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51481_51614):map__51481_51614);
var doc_51616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481_51615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481_51615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51613], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51617], 0));

if(cljs.core.truth_(doc_51616)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51616], 0));
} else {
}


var G__51619 = cljs.core.next(seq__51457_51606__$1);
var G__51620 = null;
var G__51621 = (0);
var G__51622 = (0);
seq__51457_51591 = G__51619;
chunk__51458_51592 = G__51620;
count__51459_51593 = G__51621;
i__51460_51594 = G__51622;
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

var seq__51483 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51484 = null;
var count__51485 = (0);
var i__51486 = (0);
while(true){
if((i__51486 < count__51485)){
var role = chunk__51484.cljs$core$IIndexed$_nth$arity$2(null,i__51486);
var temp__5735__auto___51624__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51624__$1)){
var spec_51625 = temp__5735__auto___51624__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51625)], 0));
} else {
}


var G__51626 = seq__51483;
var G__51627 = chunk__51484;
var G__51628 = count__51485;
var G__51629 = (i__51486 + (1));
seq__51483 = G__51626;
chunk__51484 = G__51627;
count__51485 = G__51628;
i__51486 = G__51629;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51483);
if(temp__5735__auto____$1){
var seq__51483__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51483__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51483__$1);
var G__51630 = cljs.core.chunk_rest(seq__51483__$1);
var G__51631 = c__4609__auto__;
var G__51632 = cljs.core.count(c__4609__auto__);
var G__51633 = (0);
seq__51483 = G__51630;
chunk__51484 = G__51631;
count__51485 = G__51632;
i__51486 = G__51633;
continue;
} else {
var role = cljs.core.first(seq__51483__$1);
var temp__5735__auto___51634__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51634__$2)){
var spec_51635 = temp__5735__auto___51634__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51635)], 0));
} else {
}


var G__51636 = cljs.core.next(seq__51483__$1);
var G__51637 = null;
var G__51638 = (0);
var G__51639 = (0);
seq__51483 = G__51636;
chunk__51484 = G__51637;
count__51485 = G__51638;
i__51486 = G__51639;
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
var G__51643 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51644 = cljs.core.ex_cause(t);
via = G__51643;
t = G__51644;
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
var map__51492 = datafied_throwable;
var map__51492__$1 = (((((!((map__51492 == null))))?(((((map__51492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51492):map__51492);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51492__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51492__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51492__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51493 = cljs.core.last(via);
var map__51493__$1 = (((((!((map__51493 == null))))?(((((map__51493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51493):map__51493);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51493__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51494 = data;
var map__51494__$1 = (((((!((map__51494 == null))))?(((((map__51494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51494):map__51494);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51494__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51494__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51494__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51495 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51495__$1 = (((((!((map__51495 == null))))?(((((map__51495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51495):map__51495);
var top_data = map__51495__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51500 = phase;
var G__51500__$1 = (((G__51500 instanceof cljs.core.Keyword))?G__51500.fqn:null);
switch (G__51500__$1) {
case "read-source":
var map__51501 = data;
var map__51501__$1 = (((((!((map__51501 == null))))?(((((map__51501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51501):map__51501);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51503 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51503__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51503,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51503);
var G__51503__$2 = (cljs.core.truth_((function (){var fexpr__51504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51504.cljs$core$IFn$_invoke$arity$1 ? fexpr__51504.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51504.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51503__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51503__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51503__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51505 = top_data;
var G__51505__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51505,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51505);
var G__51505__$2 = (cljs.core.truth_((function (){var fexpr__51506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51506.cljs$core$IFn$_invoke$arity$1 ? fexpr__51506.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51506.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51505__$1);
var G__51505__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51505__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51505__$2);
var G__51505__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51505__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51505__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51509 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(3),null);
var G__51514 = top_data;
var G__51514__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51514);
var G__51514__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51514__$1);
var G__51514__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51514__$2);
var G__51514__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51514__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51514__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51514__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51514__$4;
}

break;
case "execution":
var vec__51515 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51491_SHARP_){
var or__4185__auto__ = (p1__51491_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51519.cljs$core$IFn$_invoke$arity$1 ? fexpr__51519.cljs$core$IFn$_invoke$arity$1(p1__51491_SHARP_) : fexpr__51519.call(null,p1__51491_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51520__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51520,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51520);
var G__51520__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51520__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51520__$1);
var G__51520__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51520__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51520__$2);
var G__51520__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51520__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51520__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51500__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51524){
var map__51525 = p__51524;
var map__51525__$1 = (((((!((map__51525 == null))))?(((((map__51525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51525):map__51525);
var triage_data = map__51525__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__51531 = phase;
var G__51531__$1 = (((G__51531 instanceof cljs.core.Keyword))?G__51531.fqn:null);
switch (G__51531__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51532 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51534 = loc;
var G__51535 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51536_51669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51537_51670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51538_51671 = true;
var _STAR_print_fn_STAR__temp_val__51539_51672 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51538_51671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51539_51672);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51522_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51522_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51537_51670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51536_51669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51532,G__51533,G__51534,G__51535) : format.call(null,G__51532,G__51533,G__51534,G__51535));

break;
case "macroexpansion":
var G__51541 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51542 = cause_type;
var G__51543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51544 = loc;
var G__51545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51541,G__51542,G__51543,G__51544,G__51545) : format.call(null,G__51541,G__51542,G__51543,G__51544,G__51545));

break;
case "compile-syntax-check":
var G__51546 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51547 = cause_type;
var G__51548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51549 = loc;
var G__51550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51546,G__51547,G__51548,G__51549,G__51550) : format.call(null,G__51546,G__51547,G__51548,G__51549,G__51550));

break;
case "compilation":
var G__51551 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51552 = cause_type;
var G__51553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51554 = loc;
var G__51555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51551,G__51552,G__51553,G__51554,G__51555) : format.call(null,G__51551,G__51552,G__51553,G__51554,G__51555));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51556 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51557 = symbol;
var G__51558 = loc;
var G__51559 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51560_51673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51561_51674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51562_51675 = true;
var _STAR_print_fn_STAR__temp_val__51563_51676 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51562_51675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51563_51676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51561_51674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51560_51673);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51556,G__51557,G__51558,G__51559) : format.call(null,G__51556,G__51557,G__51558,G__51559));
} else {
var G__51564 = "Execution error%s at %s(%s).\n%s\n";
var G__51565 = cause_type;
var G__51566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51567 = loc;
var G__51568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51564,G__51565,G__51566,G__51567,G__51568) : format.call(null,G__51564,G__51565,G__51566,G__51567,G__51568));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51531__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
