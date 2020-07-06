goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__85440 = (line + (1));
var G__85441 = (1);
var G__85442 = (counter + (1));
line = G__85440;
col = G__85441;
counter = G__85442;
continue;
} else {
var G__85443 = line;
var G__85444 = (col + (1));
var G__85445 = (counter + (1));
line = G__85443;
col = G__85444;
counter = G__85445;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__85446 = cljs.core.next(chars);
var G__85447 = (n__$1 - (1));
chars = G__85446;
n__$1 = G__85447;
continue;
} else {
var G__85448 = cljs.core.next(chars);
var G__85449 = n__$1;
chars = G__85448;
n__$1 = G__85449;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__85429){
var map__85430 = p__85429;
var map__85430__$1 = (((((!((map__85430 == null))))?(((((map__85430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85430):map__85430);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85430__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85430__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85430__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__85432_85450 = cljs.core.seq(full_reasons);
var chunk__85433_85451 = null;
var count__85434_85452 = (0);
var i__85435_85453 = (0);
while(true){
if((i__85435_85453 < count__85434_85452)){
var r_85454 = chunk__85433_85451.cljs$core$IIndexed$_nth$arity$2(null,i__85435_85453);
instaparse.failure.print_reason(r_85454);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__85455 = seq__85432_85450;
var G__85456 = chunk__85433_85451;
var G__85457 = count__85434_85452;
var G__85458 = (i__85435_85453 + (1));
seq__85432_85450 = G__85455;
chunk__85433_85451 = G__85456;
count__85434_85452 = G__85457;
i__85435_85453 = G__85458;
continue;
} else {
var temp__5735__auto___85459 = cljs.core.seq(seq__85432_85450);
if(temp__5735__auto___85459){
var seq__85432_85460__$1 = temp__5735__auto___85459;
if(cljs.core.chunked_seq_QMARK_(seq__85432_85460__$1)){
var c__4609__auto___85461 = cljs.core.chunk_first(seq__85432_85460__$1);
var G__85462 = cljs.core.chunk_rest(seq__85432_85460__$1);
var G__85463 = c__4609__auto___85461;
var G__85464 = cljs.core.count(c__4609__auto___85461);
var G__85465 = (0);
seq__85432_85450 = G__85462;
chunk__85433_85451 = G__85463;
count__85434_85452 = G__85464;
i__85435_85453 = G__85465;
continue;
} else {
var r_85466 = cljs.core.first(seq__85432_85460__$1);
instaparse.failure.print_reason(r_85466);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__85467 = cljs.core.next(seq__85432_85460__$1);
var G__85468 = null;
var G__85469 = (0);
var G__85470 = (0);
seq__85432_85450 = G__85467;
chunk__85433_85451 = G__85468;
count__85434_85452 = G__85469;
i__85435_85453 = G__85470;
continue;
}
} else {
}
}
break;
}

var seq__85436 = cljs.core.seq(partial_reasons);
var chunk__85437 = null;
var count__85438 = (0);
var i__85439 = (0);
while(true){
if((i__85439 < count__85438)){
var r = chunk__85437.cljs$core$IIndexed$_nth$arity$2(null,i__85439);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__85471 = seq__85436;
var G__85472 = chunk__85437;
var G__85473 = count__85438;
var G__85474 = (i__85439 + (1));
seq__85436 = G__85471;
chunk__85437 = G__85472;
count__85438 = G__85473;
i__85439 = G__85474;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__85436);
if(temp__5735__auto__){
var seq__85436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__85436__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__85436__$1);
var G__85475 = cljs.core.chunk_rest(seq__85436__$1);
var G__85476 = c__4609__auto__;
var G__85477 = cljs.core.count(c__4609__auto__);
var G__85478 = (0);
seq__85436 = G__85475;
chunk__85437 = G__85476;
count__85438 = G__85477;
i__85439 = G__85478;
continue;
} else {
var r = cljs.core.first(seq__85436__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__85479 = cljs.core.next(seq__85436__$1);
var G__85480 = null;
var G__85481 = (0);
var G__85482 = (0);
seq__85436 = G__85479;
chunk__85437 = G__85480;
count__85438 = G__85481;
i__85439 = G__85482;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
