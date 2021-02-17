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
var G__46663 = cljs.core.next(chars);
var G__46664 = (n__$1 - (1));
chars = G__46663;
n__$1 = G__46664;
continue;
} else {
var G__46665 = cljs.core.next(chars);
var G__46666 = n__$1;
chars = G__46665;
n__$1 = G__46666;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46643){
var map__46644 = p__46643;
var map__46644__$1 = (((((!((map__46644 == null))))?(((((map__46644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46644):map__46644);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46644__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46644__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46644__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46644__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__46646_46667 = cljs.core.seq(full_reasons);
var chunk__46647_46668 = null;
var count__46648_46669 = (0);
var i__46649_46670 = (0);
while(true){
if((i__46649_46670 < count__46648_46669)){
var r_46671 = chunk__46647_46668.cljs$core$IIndexed$_nth$arity$2(null,i__46649_46670);
instaparse.failure.print_reason(r_46671);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46672 = seq__46646_46667;
var G__46673 = chunk__46647_46668;
var G__46674 = count__46648_46669;
var G__46675 = (i__46649_46670 + (1));
seq__46646_46667 = G__46672;
chunk__46647_46668 = G__46673;
count__46648_46669 = G__46674;
i__46649_46670 = G__46675;
continue;
} else {
var temp__5735__auto___46676 = cljs.core.seq(seq__46646_46667);
if(temp__5735__auto___46676){
var seq__46646_46677__$1 = temp__5735__auto___46676;
if(cljs.core.chunked_seq_QMARK_(seq__46646_46677__$1)){
var c__4556__auto___46678 = cljs.core.chunk_first(seq__46646_46677__$1);
var G__46679 = cljs.core.chunk_rest(seq__46646_46677__$1);
var G__46680 = c__4556__auto___46678;
var G__46681 = cljs.core.count(c__4556__auto___46678);
var G__46682 = (0);
seq__46646_46667 = G__46679;
chunk__46647_46668 = G__46680;
count__46648_46669 = G__46681;
i__46649_46670 = G__46682;
continue;
} else {
var r_46684 = cljs.core.first(seq__46646_46677__$1);
instaparse.failure.print_reason(r_46684);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46686 = cljs.core.next(seq__46646_46677__$1);
var G__46687 = null;
var G__46688 = (0);
var G__46689 = (0);
seq__46646_46667 = G__46686;
chunk__46647_46668 = G__46687;
count__46648_46669 = G__46688;
i__46649_46670 = G__46689;
continue;
}
} else {
}
}
break;
}

var seq__46651 = cljs.core.seq(partial_reasons);
var chunk__46652 = null;
var count__46653 = (0);
var i__46654 = (0);
while(true){
if((i__46654 < count__46653)){
var r = chunk__46652.cljs$core$IIndexed$_nth$arity$2(null,i__46654);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46691 = seq__46651;
var G__46692 = chunk__46652;
var G__46693 = count__46653;
var G__46694 = (i__46654 + (1));
seq__46651 = G__46691;
chunk__46652 = G__46692;
count__46653 = G__46693;
i__46654 = G__46694;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46651);
if(temp__5735__auto__){
var seq__46651__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46651__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46651__$1);
var G__46697 = cljs.core.chunk_rest(seq__46651__$1);
var G__46698 = c__4556__auto__;
var G__46699 = cljs.core.count(c__4556__auto__);
var G__46700 = (0);
seq__46651 = G__46697;
chunk__46652 = G__46698;
count__46653 = G__46699;
i__46654 = G__46700;
continue;
} else {
var r = cljs.core.first(seq__46651__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46702 = cljs.core.next(seq__46651__$1);
var G__46703 = null;
var G__46704 = (0);
var G__46705 = (0);
seq__46651 = G__46702;
chunk__46652 = G__46703;
count__46653 = G__46704;
i__46654 = G__46705;
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
