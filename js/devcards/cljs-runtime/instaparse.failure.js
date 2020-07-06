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
var G__55887 = (line + (1));
var G__55888 = (1);
var G__55889 = (counter + (1));
line = G__55887;
col = G__55888;
counter = G__55889;
continue;
} else {
var G__55890 = line;
var G__55891 = (col + (1));
var G__55892 = (counter + (1));
line = G__55890;
col = G__55891;
counter = G__55892;
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
var G__55893 = cljs.core.next(chars);
var G__55894 = (n__$1 - (1));
chars = G__55893;
n__$1 = G__55894;
continue;
} else {
var G__55895 = cljs.core.next(chars);
var G__55896 = n__$1;
chars = G__55895;
n__$1 = G__55896;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55876){
var map__55877 = p__55876;
var map__55877__$1 = (((((!((map__55877 == null))))?(((((map__55877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55877):map__55877);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55879_55897 = cljs.core.seq(full_reasons);
var chunk__55880_55898 = null;
var count__55881_55899 = (0);
var i__55882_55900 = (0);
while(true){
if((i__55882_55900 < count__55881_55899)){
var r_55901 = chunk__55880_55898.cljs$core$IIndexed$_nth$arity$2(null,i__55882_55900);
instaparse.failure.print_reason(r_55901);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55902 = seq__55879_55897;
var G__55903 = chunk__55880_55898;
var G__55904 = count__55881_55899;
var G__55905 = (i__55882_55900 + (1));
seq__55879_55897 = G__55902;
chunk__55880_55898 = G__55903;
count__55881_55899 = G__55904;
i__55882_55900 = G__55905;
continue;
} else {
var temp__5735__auto___55906 = cljs.core.seq(seq__55879_55897);
if(temp__5735__auto___55906){
var seq__55879_55907__$1 = temp__5735__auto___55906;
if(cljs.core.chunked_seq_QMARK_(seq__55879_55907__$1)){
var c__4609__auto___55908 = cljs.core.chunk_first(seq__55879_55907__$1);
var G__55909 = cljs.core.chunk_rest(seq__55879_55907__$1);
var G__55910 = c__4609__auto___55908;
var G__55911 = cljs.core.count(c__4609__auto___55908);
var G__55912 = (0);
seq__55879_55897 = G__55909;
chunk__55880_55898 = G__55910;
count__55881_55899 = G__55911;
i__55882_55900 = G__55912;
continue;
} else {
var r_55913 = cljs.core.first(seq__55879_55907__$1);
instaparse.failure.print_reason(r_55913);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55914 = cljs.core.next(seq__55879_55907__$1);
var G__55915 = null;
var G__55916 = (0);
var G__55917 = (0);
seq__55879_55897 = G__55914;
chunk__55880_55898 = G__55915;
count__55881_55899 = G__55916;
i__55882_55900 = G__55917;
continue;
}
} else {
}
}
break;
}

var seq__55883 = cljs.core.seq(partial_reasons);
var chunk__55884 = null;
var count__55885 = (0);
var i__55886 = (0);
while(true){
if((i__55886 < count__55885)){
var r = chunk__55884.cljs$core$IIndexed$_nth$arity$2(null,i__55886);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55918 = seq__55883;
var G__55919 = chunk__55884;
var G__55920 = count__55885;
var G__55921 = (i__55886 + (1));
seq__55883 = G__55918;
chunk__55884 = G__55919;
count__55885 = G__55920;
i__55886 = G__55921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55883);
if(temp__5735__auto__){
var seq__55883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55883__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55883__$1);
var G__55922 = cljs.core.chunk_rest(seq__55883__$1);
var G__55923 = c__4609__auto__;
var G__55924 = cljs.core.count(c__4609__auto__);
var G__55925 = (0);
seq__55883 = G__55922;
chunk__55884 = G__55923;
count__55885 = G__55924;
i__55886 = G__55925;
continue;
} else {
var r = cljs.core.first(seq__55883__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55926 = cljs.core.next(seq__55883__$1);
var G__55927 = null;
var G__55928 = (0);
var G__55929 = (0);
seq__55883 = G__55926;
chunk__55884 = G__55927;
count__55885 = G__55928;
i__55886 = G__55929;
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
