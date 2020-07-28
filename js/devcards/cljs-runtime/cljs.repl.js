goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50481){
var map__50482 = p__50481;
var map__50482__$1 = (((((!((map__50482 == null))))?(((((map__50482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50482):map__50482);
var m = map__50482__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50484_50605 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50485_50606 = null;
var count__50486_50607 = (0);
var i__50487_50608 = (0);
while(true){
if((i__50487_50608 < count__50486_50607)){
var f_50609 = chunk__50485_50606.cljs$core$IIndexed$_nth$arity$2(null,i__50487_50608);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50609], 0));


var G__50610 = seq__50484_50605;
var G__50611 = chunk__50485_50606;
var G__50612 = count__50486_50607;
var G__50613 = (i__50487_50608 + (1));
seq__50484_50605 = G__50610;
chunk__50485_50606 = G__50611;
count__50486_50607 = G__50612;
i__50487_50608 = G__50613;
continue;
} else {
var temp__5735__auto___50614 = cljs.core.seq(seq__50484_50605);
if(temp__5735__auto___50614){
var seq__50484_50615__$1 = temp__5735__auto___50614;
if(cljs.core.chunked_seq_QMARK_(seq__50484_50615__$1)){
var c__4609__auto___50616 = cljs.core.chunk_first(seq__50484_50615__$1);
var G__50617 = cljs.core.chunk_rest(seq__50484_50615__$1);
var G__50618 = c__4609__auto___50616;
var G__50619 = cljs.core.count(c__4609__auto___50616);
var G__50620 = (0);
seq__50484_50605 = G__50617;
chunk__50485_50606 = G__50618;
count__50486_50607 = G__50619;
i__50487_50608 = G__50620;
continue;
} else {
var f_50621 = cljs.core.first(seq__50484_50615__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50621], 0));


var G__50622 = cljs.core.next(seq__50484_50615__$1);
var G__50623 = null;
var G__50624 = (0);
var G__50625 = (0);
seq__50484_50605 = G__50622;
chunk__50485_50606 = G__50623;
count__50486_50607 = G__50624;
i__50487_50608 = G__50625;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50626 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50626], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50626)))?cljs.core.second(arglists_50626):arglists_50626)], 0));
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
var seq__50489_50627 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50490_50628 = null;
var count__50491_50629 = (0);
var i__50492_50630 = (0);
while(true){
if((i__50492_50630 < count__50491_50629)){
var vec__50504_50631 = chunk__50490_50628.cljs$core$IIndexed$_nth$arity$2(null,i__50492_50630);
var name_50632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50504_50631,(0),null);
var map__50507_50633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50504_50631,(1),null);
var map__50507_50634__$1 = (((((!((map__50507_50633 == null))))?(((((map__50507_50633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50507_50633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50507_50633):map__50507_50633);
var doc_50635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507_50634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507_50634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50636], 0));

if(cljs.core.truth_(doc_50635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50635], 0));
} else {
}


var G__50641 = seq__50489_50627;
var G__50642 = chunk__50490_50628;
var G__50643 = count__50491_50629;
var G__50644 = (i__50492_50630 + (1));
seq__50489_50627 = G__50641;
chunk__50490_50628 = G__50642;
count__50491_50629 = G__50643;
i__50492_50630 = G__50644;
continue;
} else {
var temp__5735__auto___50645 = cljs.core.seq(seq__50489_50627);
if(temp__5735__auto___50645){
var seq__50489_50646__$1 = temp__5735__auto___50645;
if(cljs.core.chunked_seq_QMARK_(seq__50489_50646__$1)){
var c__4609__auto___50647 = cljs.core.chunk_first(seq__50489_50646__$1);
var G__50648 = cljs.core.chunk_rest(seq__50489_50646__$1);
var G__50649 = c__4609__auto___50647;
var G__50650 = cljs.core.count(c__4609__auto___50647);
var G__50651 = (0);
seq__50489_50627 = G__50648;
chunk__50490_50628 = G__50649;
count__50491_50629 = G__50650;
i__50492_50630 = G__50651;
continue;
} else {
var vec__50509_50652 = cljs.core.first(seq__50489_50646__$1);
var name_50653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509_50652,(0),null);
var map__50512_50654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509_50652,(1),null);
var map__50512_50655__$1 = (((((!((map__50512_50654 == null))))?(((((map__50512_50654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50512_50654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50512_50654):map__50512_50654);
var doc_50656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50512_50655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50512_50655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50653], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50657], 0));

if(cljs.core.truth_(doc_50656)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50656], 0));
} else {
}


var G__50658 = cljs.core.next(seq__50489_50646__$1);
var G__50659 = null;
var G__50660 = (0);
var G__50661 = (0);
seq__50489_50627 = G__50658;
chunk__50490_50628 = G__50659;
count__50491_50629 = G__50660;
i__50492_50630 = G__50661;
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

var seq__50514 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50515 = null;
var count__50516 = (0);
var i__50517 = (0);
while(true){
if((i__50517 < count__50516)){
var role = chunk__50515.cljs$core$IIndexed$_nth$arity$2(null,i__50517);
var temp__5735__auto___50663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50663__$1)){
var spec_50664 = temp__5735__auto___50663__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50664)], 0));
} else {
}


var G__50665 = seq__50514;
var G__50666 = chunk__50515;
var G__50667 = count__50516;
var G__50668 = (i__50517 + (1));
seq__50514 = G__50665;
chunk__50515 = G__50666;
count__50516 = G__50667;
i__50517 = G__50668;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50514);
if(temp__5735__auto____$1){
var seq__50514__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50514__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50514__$1);
var G__50669 = cljs.core.chunk_rest(seq__50514__$1);
var G__50670 = c__4609__auto__;
var G__50671 = cljs.core.count(c__4609__auto__);
var G__50672 = (0);
seq__50514 = G__50669;
chunk__50515 = G__50670;
count__50516 = G__50671;
i__50517 = G__50672;
continue;
} else {
var role = cljs.core.first(seq__50514__$1);
var temp__5735__auto___50673__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50673__$2)){
var spec_50674 = temp__5735__auto___50673__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50674)], 0));
} else {
}


var G__50675 = cljs.core.next(seq__50514__$1);
var G__50676 = null;
var G__50677 = (0);
var G__50678 = (0);
seq__50514 = G__50675;
chunk__50515 = G__50676;
count__50516 = G__50677;
i__50517 = G__50678;
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
var G__50679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50680 = cljs.core.ex_cause(t);
via = G__50679;
t = G__50680;
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
var map__50534 = datafied_throwable;
var map__50534__$1 = (((((!((map__50534 == null))))?(((((map__50534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50534):map__50534);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50534__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50535 = cljs.core.last(via);
var map__50535__$1 = (((((!((map__50535 == null))))?(((((map__50535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50535):map__50535);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50536 = data;
var map__50536__$1 = (((((!((map__50536 == null))))?(((((map__50536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50536):map__50536);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50536__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50536__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50536__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50537 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50537__$1 = (((((!((map__50537 == null))))?(((((map__50537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50537):map__50537);
var top_data = map__50537__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50543 = phase;
var G__50543__$1 = (((G__50543 instanceof cljs.core.Keyword))?G__50543.fqn:null);
switch (G__50543__$1) {
case "read-source":
var map__50544 = data;
var map__50544__$1 = (((((!((map__50544 == null))))?(((((map__50544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50544):map__50544);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50546 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50546);
var G__50546__$2 = (cljs.core.truth_((function (){var fexpr__50547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50547.cljs$core$IFn$_invoke$arity$1 ? fexpr__50547.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50547.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50546__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50546__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50546__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50548 = top_data;
var G__50548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50548);
var G__50548__$2 = (cljs.core.truth_((function (){var fexpr__50549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50549.cljs$core$IFn$_invoke$arity$1 ? fexpr__50549.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50549.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50548__$1);
var G__50548__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50548__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50548__$2);
var G__50548__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50548__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50548__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50548__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50548__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50550 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(3),null);
var G__50553 = top_data;
var G__50553__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50553);
var G__50553__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50553__$1);
var G__50553__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50553__$2);
var G__50553__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50553__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50553__$4;
}

break;
case "execution":
var vec__50554 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50532_SHARP_){
var or__4185__auto__ = (p1__50532_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50558.cljs$core$IFn$_invoke$arity$1 ? fexpr__50558.cljs$core$IFn$_invoke$arity$1(p1__50532_SHARP_) : fexpr__50558.call(null,p1__50532_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50559 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50559__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50559);
var G__50559__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50559__$1);
var G__50559__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50559__$2);
var G__50559__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50559__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50559__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50543__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50563){
var map__50564 = p__50563;
var map__50564__$1 = (((((!((map__50564 == null))))?(((((map__50564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50564):map__50564);
var triage_data = map__50564__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50566 = phase;
var G__50566__$1 = (((G__50566 instanceof cljs.core.Keyword))?G__50566.fqn:null);
switch (G__50566__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50567 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50569 = loc;
var G__50570 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50571_50688 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50572_50689 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50573_50690 = true;
var _STAR_print_fn_STAR__temp_val__50574_50691 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50573_50690);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50574_50691);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50560_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50560_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50572_50689);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50571_50688);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50567,G__50568,G__50569,G__50570) : format.call(null,G__50567,G__50568,G__50569,G__50570));

break;
case "macroexpansion":
var G__50576 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50577 = cause_type;
var G__50578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50579 = loc;
var G__50580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50576,G__50577,G__50578,G__50579,G__50580) : format.call(null,G__50576,G__50577,G__50578,G__50579,G__50580));

break;
case "compile-syntax-check":
var G__50581 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50582 = cause_type;
var G__50583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50584 = loc;
var G__50585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50581,G__50582,G__50583,G__50584,G__50585) : format.call(null,G__50581,G__50582,G__50583,G__50584,G__50585));

break;
case "compilation":
var G__50587 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50588 = cause_type;
var G__50589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50590 = loc;
var G__50591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50587,G__50588,G__50589,G__50590,G__50591) : format.call(null,G__50587,G__50588,G__50589,G__50590,G__50591));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50592 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50593 = symbol;
var G__50594 = loc;
var G__50595 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50596_50693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50597_50694 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50598_50695 = true;
var _STAR_print_fn_STAR__temp_val__50599_50696 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50598_50695);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50599_50696);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50562_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50562_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50597_50694);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50596_50693);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50592,G__50593,G__50594,G__50595) : format.call(null,G__50592,G__50593,G__50594,G__50595));
} else {
var G__50600 = "Execution error%s at %s(%s).\n%s\n";
var G__50601 = cause_type;
var G__50602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50603 = loc;
var G__50604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50600,G__50601,G__50602,G__50603,G__50604) : format.call(null,G__50600,G__50601,G__50602,G__50603,G__50604));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50566__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
