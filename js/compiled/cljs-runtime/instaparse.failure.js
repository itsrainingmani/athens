goog.provide('instaparse.failure');
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
var G__46657 = (line + (1));
var G__46658 = (1);
var G__46659 = (counter + (1));
line = G__46657;
col = G__46658;
counter = G__46659;
continue;
} else {
var G__46660 = line;
var G__46661 = (col + (1));
var G__46662 = (counter + (1));
line = G__46660;
col = G__46661;
counter = G__46662;
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
var G__46664 = cljs.core.next(chars);
var G__46665 = (n__$1 - (1));
chars = G__46664;
n__$1 = G__46665;
continue;
} else {
var G__46666 = cljs.core.next(chars);
var G__46667 = n__$1;
chars = G__46666;
n__$1 = G__46667;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46644){
var map__46645 = p__46644;
var map__46645__$1 = (((((!((map__46645 == null))))?(((((map__46645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46645):map__46645);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46645__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46645__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46645__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46645__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__46647_46668 = cljs.core.seq(full_reasons);
var chunk__46648_46669 = null;
var count__46649_46670 = (0);
var i__46650_46671 = (0);
while(true){
if((i__46650_46671 < count__46649_46670)){
var r_46672 = chunk__46648_46669.cljs$core$IIndexed$_nth$arity$2(null,i__46650_46671);
instaparse.failure.print_reason(r_46672);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46673 = seq__46647_46668;
var G__46674 = chunk__46648_46669;
var G__46675 = count__46649_46670;
var G__46676 = (i__46650_46671 + (1));
seq__46647_46668 = G__46673;
chunk__46648_46669 = G__46674;
count__46649_46670 = G__46675;
i__46650_46671 = G__46676;
continue;
} else {
var temp__5735__auto___46677 = cljs.core.seq(seq__46647_46668);
if(temp__5735__auto___46677){
var seq__46647_46678__$1 = temp__5735__auto___46677;
if(cljs.core.chunked_seq_QMARK_(seq__46647_46678__$1)){
var c__4556__auto___46679 = cljs.core.chunk_first(seq__46647_46678__$1);
var G__46680 = cljs.core.chunk_rest(seq__46647_46678__$1);
var G__46681 = c__4556__auto___46679;
var G__46682 = cljs.core.count(c__4556__auto___46679);
var G__46683 = (0);
seq__46647_46668 = G__46680;
chunk__46648_46669 = G__46681;
count__46649_46670 = G__46682;
i__46650_46671 = G__46683;
continue;
} else {
var r_46684 = cljs.core.first(seq__46647_46678__$1);
instaparse.failure.print_reason(r_46684);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46685 = cljs.core.next(seq__46647_46678__$1);
var G__46686 = null;
var G__46687 = (0);
var G__46688 = (0);
seq__46647_46668 = G__46685;
chunk__46648_46669 = G__46686;
count__46649_46670 = G__46687;
i__46650_46671 = G__46688;
continue;
}
} else {
}
}
break;
}

var seq__46652 = cljs.core.seq(partial_reasons);
var chunk__46653 = null;
var count__46654 = (0);
var i__46655 = (0);
while(true){
if((i__46655 < count__46654)){
var r = chunk__46653.cljs$core$IIndexed$_nth$arity$2(null,i__46655);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46689 = seq__46652;
var G__46690 = chunk__46653;
var G__46691 = count__46654;
var G__46692 = (i__46655 + (1));
seq__46652 = G__46689;
chunk__46653 = G__46690;
count__46654 = G__46691;
i__46655 = G__46692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46652);
if(temp__5735__auto__){
var seq__46652__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46652__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46652__$1);
var G__46693 = cljs.core.chunk_rest(seq__46652__$1);
var G__46694 = c__4556__auto__;
var G__46695 = cljs.core.count(c__4556__auto__);
var G__46696 = (0);
seq__46652 = G__46693;
chunk__46653 = G__46694;
count__46654 = G__46695;
i__46655 = G__46696;
continue;
} else {
var r = cljs.core.first(seq__46652__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46699 = cljs.core.next(seq__46652__$1);
var G__46700 = null;
var G__46701 = (0);
var G__46702 = (0);
seq__46652 = G__46699;
chunk__46653 = G__46700;
count__46654 = G__46701;
i__46655 = G__46702;
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
