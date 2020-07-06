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
var G__77772 = (line + (1));
var G__77773 = (1);
var G__77774 = (counter + (1));
line = G__77772;
col = G__77773;
counter = G__77774;
continue;
} else {
var G__77775 = line;
var G__77776 = (col + (1));
var G__77777 = (counter + (1));
line = G__77775;
col = G__77776;
counter = G__77777;
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
var G__77778 = cljs.core.next(chars);
var G__77779 = (n__$1 - (1));
chars = G__77778;
n__$1 = G__77779;
continue;
} else {
var G__77780 = cljs.core.next(chars);
var G__77781 = n__$1;
chars = G__77780;
n__$1 = G__77781;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__77758){
var map__77759 = p__77758;
var map__77759__$1 = (((((!((map__77759 == null))))?(((((map__77759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77759):map__77759);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77759__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77759__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77759__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77759__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__77762_77788 = cljs.core.seq(full_reasons);
var chunk__77763_77789 = null;
var count__77764_77790 = (0);
var i__77765_77791 = (0);
while(true){
if((i__77765_77791 < count__77764_77790)){
var r_77792 = chunk__77763_77789.cljs$core$IIndexed$_nth$arity$2(null,i__77765_77791);
instaparse.failure.print_reason(r_77792);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__77793 = seq__77762_77788;
var G__77794 = chunk__77763_77789;
var G__77795 = count__77764_77790;
var G__77796 = (i__77765_77791 + (1));
seq__77762_77788 = G__77793;
chunk__77763_77789 = G__77794;
count__77764_77790 = G__77795;
i__77765_77791 = G__77796;
continue;
} else {
var temp__5735__auto___77797 = cljs.core.seq(seq__77762_77788);
if(temp__5735__auto___77797){
var seq__77762_77798__$1 = temp__5735__auto___77797;
if(cljs.core.chunked_seq_QMARK_(seq__77762_77798__$1)){
var c__4609__auto___77799 = cljs.core.chunk_first(seq__77762_77798__$1);
var G__77800 = cljs.core.chunk_rest(seq__77762_77798__$1);
var G__77801 = c__4609__auto___77799;
var G__77802 = cljs.core.count(c__4609__auto___77799);
var G__77803 = (0);
seq__77762_77788 = G__77800;
chunk__77763_77789 = G__77801;
count__77764_77790 = G__77802;
i__77765_77791 = G__77803;
continue;
} else {
var r_77804 = cljs.core.first(seq__77762_77798__$1);
instaparse.failure.print_reason(r_77804);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__77805 = cljs.core.next(seq__77762_77798__$1);
var G__77806 = null;
var G__77807 = (0);
var G__77808 = (0);
seq__77762_77788 = G__77805;
chunk__77763_77789 = G__77806;
count__77764_77790 = G__77807;
i__77765_77791 = G__77808;
continue;
}
} else {
}
}
break;
}

var seq__77767 = cljs.core.seq(partial_reasons);
var chunk__77768 = null;
var count__77769 = (0);
var i__77770 = (0);
while(true){
if((i__77770 < count__77769)){
var r = chunk__77768.cljs$core$IIndexed$_nth$arity$2(null,i__77770);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__77809 = seq__77767;
var G__77810 = chunk__77768;
var G__77811 = count__77769;
var G__77812 = (i__77770 + (1));
seq__77767 = G__77809;
chunk__77768 = G__77810;
count__77769 = G__77811;
i__77770 = G__77812;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77767);
if(temp__5735__auto__){
var seq__77767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77767__$1);
var G__77813 = cljs.core.chunk_rest(seq__77767__$1);
var G__77814 = c__4609__auto__;
var G__77815 = cljs.core.count(c__4609__auto__);
var G__77816 = (0);
seq__77767 = G__77813;
chunk__77768 = G__77814;
count__77769 = G__77815;
i__77770 = G__77816;
continue;
} else {
var r = cljs.core.first(seq__77767__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__77817 = cljs.core.next(seq__77767__$1);
var G__77818 = null;
var G__77819 = (0);
var G__77820 = (0);
seq__77767 = G__77817;
chunk__77768 = G__77818;
count__77769 = G__77819;
i__77770 = G__77820;
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
