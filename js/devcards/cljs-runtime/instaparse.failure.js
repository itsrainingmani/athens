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
var G__55018 = (line + (1));
var G__55019 = (1);
var G__55020 = (counter + (1));
line = G__55018;
col = G__55019;
counter = G__55020;
continue;
} else {
var G__55021 = line;
var G__55022 = (col + (1));
var G__55023 = (counter + (1));
line = G__55021;
col = G__55022;
counter = G__55023;
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
var G__55028 = cljs.core.next(chars);
var G__55029 = (n__$1 - (1));
chars = G__55028;
n__$1 = G__55029;
continue;
} else {
var G__55030 = cljs.core.next(chars);
var G__55031 = n__$1;
chars = G__55030;
n__$1 = G__55031;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55004){
var map__55005 = p__55004;
var map__55005__$1 = (((((!((map__55005 == null))))?(((((map__55005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55005):map__55005);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55007_55033 = cljs.core.seq(full_reasons);
var chunk__55008_55034 = null;
var count__55009_55035 = (0);
var i__55010_55036 = (0);
while(true){
if((i__55010_55036 < count__55009_55035)){
var r_55037 = chunk__55008_55034.cljs$core$IIndexed$_nth$arity$2(null,i__55010_55036);
instaparse.failure.print_reason(r_55037);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55038 = seq__55007_55033;
var G__55039 = chunk__55008_55034;
var G__55040 = count__55009_55035;
var G__55041 = (i__55010_55036 + (1));
seq__55007_55033 = G__55038;
chunk__55008_55034 = G__55039;
count__55009_55035 = G__55040;
i__55010_55036 = G__55041;
continue;
} else {
var temp__5735__auto___55042 = cljs.core.seq(seq__55007_55033);
if(temp__5735__auto___55042){
var seq__55007_55043__$1 = temp__5735__auto___55042;
if(cljs.core.chunked_seq_QMARK_(seq__55007_55043__$1)){
var c__4556__auto___55044 = cljs.core.chunk_first(seq__55007_55043__$1);
var G__55045 = cljs.core.chunk_rest(seq__55007_55043__$1);
var G__55046 = c__4556__auto___55044;
var G__55047 = cljs.core.count(c__4556__auto___55044);
var G__55048 = (0);
seq__55007_55033 = G__55045;
chunk__55008_55034 = G__55046;
count__55009_55035 = G__55047;
i__55010_55036 = G__55048;
continue;
} else {
var r_55049 = cljs.core.first(seq__55007_55043__$1);
instaparse.failure.print_reason(r_55049);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55050 = cljs.core.next(seq__55007_55043__$1);
var G__55051 = null;
var G__55052 = (0);
var G__55053 = (0);
seq__55007_55033 = G__55050;
chunk__55008_55034 = G__55051;
count__55009_55035 = G__55052;
i__55010_55036 = G__55053;
continue;
}
} else {
}
}
break;
}

var seq__55011 = cljs.core.seq(partial_reasons);
var chunk__55012 = null;
var count__55013 = (0);
var i__55014 = (0);
while(true){
if((i__55014 < count__55013)){
var r = chunk__55012.cljs$core$IIndexed$_nth$arity$2(null,i__55014);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55054 = seq__55011;
var G__55055 = chunk__55012;
var G__55056 = count__55013;
var G__55057 = (i__55014 + (1));
seq__55011 = G__55054;
chunk__55012 = G__55055;
count__55013 = G__55056;
i__55014 = G__55057;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55011);
if(temp__5735__auto__){
var seq__55011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55011__$1);
var G__55058 = cljs.core.chunk_rest(seq__55011__$1);
var G__55059 = c__4556__auto__;
var G__55060 = cljs.core.count(c__4556__auto__);
var G__55061 = (0);
seq__55011 = G__55058;
chunk__55012 = G__55059;
count__55013 = G__55060;
i__55014 = G__55061;
continue;
} else {
var r = cljs.core.first(seq__55011__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55062 = cljs.core.next(seq__55011__$1);
var G__55063 = null;
var G__55064 = (0);
var G__55065 = (0);
seq__55011 = G__55062;
chunk__55012 = G__55063;
count__55013 = G__55064;
i__55014 = G__55065;
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
