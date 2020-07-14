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
var G__55954 = (line + (1));
var G__55955 = (1);
var G__55956 = (counter + (1));
line = G__55954;
col = G__55955;
counter = G__55956;
continue;
} else {
var G__55957 = line;
var G__55958 = (col + (1));
var G__55959 = (counter + (1));
line = G__55957;
col = G__55958;
counter = G__55959;
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
var G__55960 = cljs.core.next(chars);
var G__55961 = (n__$1 - (1));
chars = G__55960;
n__$1 = G__55961;
continue;
} else {
var G__55962 = cljs.core.next(chars);
var G__55963 = n__$1;
chars = G__55962;
n__$1 = G__55963;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55932){
var map__55933 = p__55932;
var map__55933__$1 = (((((!((map__55933 == null))))?(((((map__55933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55933):map__55933);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55933__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55933__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55933__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55933__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55943_55964 = cljs.core.seq(full_reasons);
var chunk__55944_55965 = null;
var count__55945_55966 = (0);
var i__55946_55967 = (0);
while(true){
if((i__55946_55967 < count__55945_55966)){
var r_55968 = chunk__55944_55965.cljs$core$IIndexed$_nth$arity$2(null,i__55946_55967);
instaparse.failure.print_reason(r_55968);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55969 = seq__55943_55964;
var G__55970 = chunk__55944_55965;
var G__55971 = count__55945_55966;
var G__55972 = (i__55946_55967 + (1));
seq__55943_55964 = G__55969;
chunk__55944_55965 = G__55970;
count__55945_55966 = G__55971;
i__55946_55967 = G__55972;
continue;
} else {
var temp__5735__auto___55973 = cljs.core.seq(seq__55943_55964);
if(temp__5735__auto___55973){
var seq__55943_55974__$1 = temp__5735__auto___55973;
if(cljs.core.chunked_seq_QMARK_(seq__55943_55974__$1)){
var c__4609__auto___55975 = cljs.core.chunk_first(seq__55943_55974__$1);
var G__55976 = cljs.core.chunk_rest(seq__55943_55974__$1);
var G__55977 = c__4609__auto___55975;
var G__55978 = cljs.core.count(c__4609__auto___55975);
var G__55979 = (0);
seq__55943_55964 = G__55976;
chunk__55944_55965 = G__55977;
count__55945_55966 = G__55978;
i__55946_55967 = G__55979;
continue;
} else {
var r_55980 = cljs.core.first(seq__55943_55974__$1);
instaparse.failure.print_reason(r_55980);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55981 = cljs.core.next(seq__55943_55974__$1);
var G__55982 = null;
var G__55983 = (0);
var G__55984 = (0);
seq__55943_55964 = G__55981;
chunk__55944_55965 = G__55982;
count__55945_55966 = G__55983;
i__55946_55967 = G__55984;
continue;
}
} else {
}
}
break;
}

var seq__55947 = cljs.core.seq(partial_reasons);
var chunk__55948 = null;
var count__55949 = (0);
var i__55950 = (0);
while(true){
if((i__55950 < count__55949)){
var r = chunk__55948.cljs$core$IIndexed$_nth$arity$2(null,i__55950);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55985 = seq__55947;
var G__55986 = chunk__55948;
var G__55987 = count__55949;
var G__55988 = (i__55950 + (1));
seq__55947 = G__55985;
chunk__55948 = G__55986;
count__55949 = G__55987;
i__55950 = G__55988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55947);
if(temp__5735__auto__){
var seq__55947__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55947__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55947__$1);
var G__55989 = cljs.core.chunk_rest(seq__55947__$1);
var G__55990 = c__4609__auto__;
var G__55991 = cljs.core.count(c__4609__auto__);
var G__55992 = (0);
seq__55947 = G__55989;
chunk__55948 = G__55990;
count__55949 = G__55991;
i__55950 = G__55992;
continue;
} else {
var r = cljs.core.first(seq__55947__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55993 = cljs.core.next(seq__55947__$1);
var G__55994 = null;
var G__55995 = (0);
var G__55996 = (0);
seq__55947 = G__55993;
chunk__55948 = G__55994;
count__55949 = G__55995;
i__55950 = G__55996;
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
