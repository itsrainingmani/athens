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
var G__55860 = (line + (1));
var G__55861 = (1);
var G__55862 = (counter + (1));
line = G__55860;
col = G__55861;
counter = G__55862;
continue;
} else {
var G__55863 = line;
var G__55864 = (col + (1));
var G__55865 = (counter + (1));
line = G__55863;
col = G__55864;
counter = G__55865;
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
var G__55869 = cljs.core.next(chars);
var G__55870 = (n__$1 - (1));
chars = G__55869;
n__$1 = G__55870;
continue;
} else {
var G__55871 = cljs.core.next(chars);
var G__55872 = n__$1;
chars = G__55871;
n__$1 = G__55872;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55849){
var map__55850 = p__55849;
var map__55850__$1 = (((((!((map__55850 == null))))?(((((map__55850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55850):map__55850);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55852_55881 = cljs.core.seq(full_reasons);
var chunk__55853_55882 = null;
var count__55854_55883 = (0);
var i__55855_55884 = (0);
while(true){
if((i__55855_55884 < count__55854_55883)){
var r_55885 = chunk__55853_55882.cljs$core$IIndexed$_nth$arity$2(null,i__55855_55884);
instaparse.failure.print_reason(r_55885);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55886 = seq__55852_55881;
var G__55887 = chunk__55853_55882;
var G__55888 = count__55854_55883;
var G__55889 = (i__55855_55884 + (1));
seq__55852_55881 = G__55886;
chunk__55853_55882 = G__55887;
count__55854_55883 = G__55888;
i__55855_55884 = G__55889;
continue;
} else {
var temp__5735__auto___55890 = cljs.core.seq(seq__55852_55881);
if(temp__5735__auto___55890){
var seq__55852_55891__$1 = temp__5735__auto___55890;
if(cljs.core.chunked_seq_QMARK_(seq__55852_55891__$1)){
var c__4609__auto___55892 = cljs.core.chunk_first(seq__55852_55891__$1);
var G__55893 = cljs.core.chunk_rest(seq__55852_55891__$1);
var G__55894 = c__4609__auto___55892;
var G__55895 = cljs.core.count(c__4609__auto___55892);
var G__55896 = (0);
seq__55852_55881 = G__55893;
chunk__55853_55882 = G__55894;
count__55854_55883 = G__55895;
i__55855_55884 = G__55896;
continue;
} else {
var r_55897 = cljs.core.first(seq__55852_55891__$1);
instaparse.failure.print_reason(r_55897);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55898 = cljs.core.next(seq__55852_55891__$1);
var G__55899 = null;
var G__55900 = (0);
var G__55901 = (0);
seq__55852_55881 = G__55898;
chunk__55853_55882 = G__55899;
count__55854_55883 = G__55900;
i__55855_55884 = G__55901;
continue;
}
} else {
}
}
break;
}

var seq__55856 = cljs.core.seq(partial_reasons);
var chunk__55857 = null;
var count__55858 = (0);
var i__55859 = (0);
while(true){
if((i__55859 < count__55858)){
var r = chunk__55857.cljs$core$IIndexed$_nth$arity$2(null,i__55859);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55902 = seq__55856;
var G__55903 = chunk__55857;
var G__55904 = count__55858;
var G__55905 = (i__55859 + (1));
seq__55856 = G__55902;
chunk__55857 = G__55903;
count__55858 = G__55904;
i__55859 = G__55905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55856);
if(temp__5735__auto__){
var seq__55856__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55856__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55856__$1);
var G__55906 = cljs.core.chunk_rest(seq__55856__$1);
var G__55907 = c__4609__auto__;
var G__55908 = cljs.core.count(c__4609__auto__);
var G__55909 = (0);
seq__55856 = G__55906;
chunk__55857 = G__55907;
count__55858 = G__55908;
i__55859 = G__55909;
continue;
} else {
var r = cljs.core.first(seq__55856__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55910 = cljs.core.next(seq__55856__$1);
var G__55911 = null;
var G__55912 = (0);
var G__55913 = (0);
seq__55856 = G__55910;
chunk__55857 = G__55911;
count__55858 = G__55912;
i__55859 = G__55913;
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
