goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45467){
var map__45468 = p__45467;
var map__45468__$1 = (((((!((map__45468 == null))))?(((((map__45468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45468):map__45468);
var m = map__45468__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45474_45591 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45475_45592 = null;
var count__45476_45593 = (0);
var i__45477_45594 = (0);
while(true){
if((i__45477_45594 < count__45476_45593)){
var f_45595 = chunk__45475_45592.cljs$core$IIndexed$_nth$arity$2(null,i__45477_45594);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45595], 0));


var G__45596 = seq__45474_45591;
var G__45597 = chunk__45475_45592;
var G__45598 = count__45476_45593;
var G__45599 = (i__45477_45594 + (1));
seq__45474_45591 = G__45596;
chunk__45475_45592 = G__45597;
count__45476_45593 = G__45598;
i__45477_45594 = G__45599;
continue;
} else {
var temp__5735__auto___45600 = cljs.core.seq(seq__45474_45591);
if(temp__5735__auto___45600){
var seq__45474_45601__$1 = temp__5735__auto___45600;
if(cljs.core.chunked_seq_QMARK_(seq__45474_45601__$1)){
var c__4609__auto___45602 = cljs.core.chunk_first(seq__45474_45601__$1);
var G__45603 = cljs.core.chunk_rest(seq__45474_45601__$1);
var G__45604 = c__4609__auto___45602;
var G__45605 = cljs.core.count(c__4609__auto___45602);
var G__45606 = (0);
seq__45474_45591 = G__45603;
chunk__45475_45592 = G__45604;
count__45476_45593 = G__45605;
i__45477_45594 = G__45606;
continue;
} else {
var f_45607 = cljs.core.first(seq__45474_45601__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45607], 0));


var G__45608 = cljs.core.next(seq__45474_45601__$1);
var G__45609 = null;
var G__45610 = (0);
var G__45611 = (0);
seq__45474_45591 = G__45608;
chunk__45475_45592 = G__45609;
count__45476_45593 = G__45610;
i__45477_45594 = G__45611;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45612 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45612], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45612)))?cljs.core.second(arglists_45612):arglists_45612)], 0));
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
var seq__45479_45613 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45480_45614 = null;
var count__45481_45615 = (0);
var i__45482_45616 = (0);
while(true){
if((i__45482_45616 < count__45481_45615)){
var vec__45494_45617 = chunk__45480_45614.cljs$core$IIndexed$_nth$arity$2(null,i__45482_45616);
var name_45618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494_45617,(0),null);
var map__45497_45619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494_45617,(1),null);
var map__45497_45620__$1 = (((((!((map__45497_45619 == null))))?(((((map__45497_45619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45497_45619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45497_45619):map__45497_45619);
var doc_45621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497_45620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497_45620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45618], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45622], 0));

if(cljs.core.truth_(doc_45621)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45621], 0));
} else {
}


var G__45623 = seq__45479_45613;
var G__45624 = chunk__45480_45614;
var G__45625 = count__45481_45615;
var G__45626 = (i__45482_45616 + (1));
seq__45479_45613 = G__45623;
chunk__45480_45614 = G__45624;
count__45481_45615 = G__45625;
i__45482_45616 = G__45626;
continue;
} else {
var temp__5735__auto___45627 = cljs.core.seq(seq__45479_45613);
if(temp__5735__auto___45627){
var seq__45479_45628__$1 = temp__5735__auto___45627;
if(cljs.core.chunked_seq_QMARK_(seq__45479_45628__$1)){
var c__4609__auto___45629 = cljs.core.chunk_first(seq__45479_45628__$1);
var G__45631 = cljs.core.chunk_rest(seq__45479_45628__$1);
var G__45632 = c__4609__auto___45629;
var G__45633 = cljs.core.count(c__4609__auto___45629);
var G__45634 = (0);
seq__45479_45613 = G__45631;
chunk__45480_45614 = G__45632;
count__45481_45615 = G__45633;
i__45482_45616 = G__45634;
continue;
} else {
var vec__45500_45635 = cljs.core.first(seq__45479_45628__$1);
var name_45636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45500_45635,(0),null);
var map__45503_45637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45500_45635,(1),null);
var map__45503_45638__$1 = (((((!((map__45503_45637 == null))))?(((((map__45503_45637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45503_45637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45503_45637):map__45503_45637);
var doc_45639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45503_45638__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45503_45638__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45636], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45640], 0));

if(cljs.core.truth_(doc_45639)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45639], 0));
} else {
}


var G__45641 = cljs.core.next(seq__45479_45628__$1);
var G__45642 = null;
var G__45643 = (0);
var G__45644 = (0);
seq__45479_45613 = G__45641;
chunk__45480_45614 = G__45642;
count__45481_45615 = G__45643;
i__45482_45616 = G__45644;
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

var seq__45505 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45506 = null;
var count__45507 = (0);
var i__45508 = (0);
while(true){
if((i__45508 < count__45507)){
var role = chunk__45506.cljs$core$IIndexed$_nth$arity$2(null,i__45508);
var temp__5735__auto___45645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45645__$1)){
var spec_45646 = temp__5735__auto___45645__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45646)], 0));
} else {
}


var G__45647 = seq__45505;
var G__45648 = chunk__45506;
var G__45649 = count__45507;
var G__45650 = (i__45508 + (1));
seq__45505 = G__45647;
chunk__45506 = G__45648;
count__45507 = G__45649;
i__45508 = G__45650;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45505);
if(temp__5735__auto____$1){
var seq__45505__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45505__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45505__$1);
var G__45653 = cljs.core.chunk_rest(seq__45505__$1);
var G__45654 = c__4609__auto__;
var G__45655 = cljs.core.count(c__4609__auto__);
var G__45656 = (0);
seq__45505 = G__45653;
chunk__45506 = G__45654;
count__45507 = G__45655;
i__45508 = G__45656;
continue;
} else {
var role = cljs.core.first(seq__45505__$1);
var temp__5735__auto___45657__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45657__$2)){
var spec_45658 = temp__5735__auto___45657__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45658)], 0));
} else {
}


var G__45659 = cljs.core.next(seq__45505__$1);
var G__45660 = null;
var G__45661 = (0);
var G__45662 = (0);
seq__45505 = G__45659;
chunk__45506 = G__45660;
count__45507 = G__45661;
i__45508 = G__45662;
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
var G__45665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45666 = cljs.core.ex_cause(t);
via = G__45665;
t = G__45666;
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
var map__45514 = datafied_throwable;
var map__45514__$1 = (((((!((map__45514 == null))))?(((((map__45514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45514):map__45514);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45514__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45515 = cljs.core.last(via);
var map__45515__$1 = (((((!((map__45515 == null))))?(((((map__45515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45515):map__45515);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45515__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45515__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45515__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45516 = data;
var map__45516__$1 = (((((!((map__45516 == null))))?(((((map__45516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45516):map__45516);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45516__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45516__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45516__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45517 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45517__$1 = (((((!((map__45517 == null))))?(((((map__45517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45517):map__45517);
var top_data = map__45517__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45522 = phase;
var G__45522__$1 = (((G__45522 instanceof cljs.core.Keyword))?G__45522.fqn:null);
switch (G__45522__$1) {
case "read-source":
var map__45523 = data;
var map__45523__$1 = (((((!((map__45523 == null))))?(((((map__45523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45523):map__45523);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45525 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45525__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45525,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45525);
var G__45525__$2 = (cljs.core.truth_((function (){var fexpr__45526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45526.cljs$core$IFn$_invoke$arity$1 ? fexpr__45526.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45526.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45525__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45525__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45525__$2;
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
var G__45540 = top_data;
var G__45540__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45540,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45540);
var G__45540__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45540__$1);
var G__45540__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45540__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45540__$2);
var G__45540__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45540__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45540__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45540__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45540__$4;
}

break;
case "execution":
var vec__45541 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45541,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45541,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45541,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45541,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45513_SHARP_){
var or__4185__auto__ = (p1__45513_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45545 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45545.cljs$core$IFn$_invoke$arity$1 ? fexpr__45545.cljs$core$IFn$_invoke$arity$1(p1__45513_SHARP_) : fexpr__45545.call(null,p1__45513_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45546__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45546,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45546);
var G__45546__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45546__$1);
var G__45546__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45546__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45546__$2);
var G__45546__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45546__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45546__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45546__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45546__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45522__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45550){
var map__45551 = p__45550;
var map__45551__$1 = (((((!((map__45551 == null))))?(((((map__45551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45551):map__45551);
var triage_data = map__45551__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45551__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45553 = phase;
var G__45553__$1 = (((G__45553 instanceof cljs.core.Keyword))?G__45553.fqn:null);
switch (G__45553__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45554 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45556 = loc;
var G__45557 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45558_45671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45559_45672 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45560_45673 = true;
var _STAR_print_fn_STAR__temp_val__45561_45674 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45560_45673);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45561_45674);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45548_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45548_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45559_45672);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45558_45671);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45554,G__45555,G__45556,G__45557) : format.call(null,G__45554,G__45555,G__45556,G__45557));

break;
case "macroexpansion":
var G__45562 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45563 = cause_type;
var G__45564 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45565 = loc;
var G__45566 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45562,G__45563,G__45564,G__45565,G__45566) : format.call(null,G__45562,G__45563,G__45564,G__45565,G__45566));

break;
case "compile-syntax-check":
var G__45568 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45569 = cause_type;
var G__45570 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45571 = loc;
var G__45572 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45568,G__45569,G__45570,G__45571,G__45572) : format.call(null,G__45568,G__45569,G__45570,G__45571,G__45572));

break;
case "compilation":
var G__45573 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45574 = cause_type;
var G__45575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45576 = loc;
var G__45577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45573,G__45574,G__45575,G__45576,G__45577) : format.call(null,G__45573,G__45574,G__45575,G__45576,G__45577));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45578 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45579 = symbol;
var G__45580 = loc;
var G__45581 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45582_45678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45583_45679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45584_45680 = true;
var _STAR_print_fn_STAR__temp_val__45585_45681 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45584_45680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45585_45681);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45549_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45549_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45583_45679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45582_45678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45578,G__45579,G__45580,G__45581) : format.call(null,G__45578,G__45579,G__45580,G__45581));
} else {
var G__45586 = "Execution error%s at %s(%s).\n%s\n";
var G__45587 = cause_type;
var G__45588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45589 = loc;
var G__45590 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45586,G__45587,G__45588,G__45589,G__45590) : format.call(null,G__45586,G__45587,G__45588,G__45589,G__45590));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45553__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
