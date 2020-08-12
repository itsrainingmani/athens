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
var G__55016 = (line + (1));
var G__55017 = (1);
var G__55018 = (counter + (1));
line = G__55016;
col = G__55017;
counter = G__55018;
continue;
} else {
var G__55019 = line;
var G__55020 = (col + (1));
var G__55021 = (counter + (1));
line = G__55019;
col = G__55020;
counter = G__55021;
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
var G__55022 = cljs.core.next(chars);
var G__55023 = (n__$1 - (1));
chars = G__55022;
n__$1 = G__55023;
continue;
} else {
var G__55024 = cljs.core.next(chars);
var G__55025 = n__$1;
chars = G__55024;
n__$1 = G__55025;
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

var seq__55007_55026 = cljs.core.seq(full_reasons);
var chunk__55008_55027 = null;
var count__55009_55028 = (0);
var i__55010_55029 = (0);
while(true){
if((i__55010_55029 < count__55009_55028)){
var r_55030 = chunk__55008_55027.cljs$core$IIndexed$_nth$arity$2(null,i__55010_55029);
instaparse.failure.print_reason(r_55030);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55031 = seq__55007_55026;
var G__55032 = chunk__55008_55027;
var G__55033 = count__55009_55028;
var G__55034 = (i__55010_55029 + (1));
seq__55007_55026 = G__55031;
chunk__55008_55027 = G__55032;
count__55009_55028 = G__55033;
i__55010_55029 = G__55034;
continue;
} else {
var temp__5735__auto___55035 = cljs.core.seq(seq__55007_55026);
if(temp__5735__auto___55035){
var seq__55007_55036__$1 = temp__5735__auto___55035;
if(cljs.core.chunked_seq_QMARK_(seq__55007_55036__$1)){
var c__4556__auto___55037 = cljs.core.chunk_first(seq__55007_55036__$1);
var G__55038 = cljs.core.chunk_rest(seq__55007_55036__$1);
var G__55039 = c__4556__auto___55037;
var G__55040 = cljs.core.count(c__4556__auto___55037);
var G__55041 = (0);
seq__55007_55026 = G__55038;
chunk__55008_55027 = G__55039;
count__55009_55028 = G__55040;
i__55010_55029 = G__55041;
continue;
} else {
var r_55042 = cljs.core.first(seq__55007_55036__$1);
instaparse.failure.print_reason(r_55042);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55043 = cljs.core.next(seq__55007_55036__$1);
var G__55044 = null;
var G__55045 = (0);
var G__55046 = (0);
seq__55007_55026 = G__55043;
chunk__55008_55027 = G__55044;
count__55009_55028 = G__55045;
i__55010_55029 = G__55046;
continue;
}
} else {
}
}
break;
}

var seq__55012 = cljs.core.seq(partial_reasons);
var chunk__55013 = null;
var count__55014 = (0);
var i__55015 = (0);
while(true){
if((i__55015 < count__55014)){
var r = chunk__55013.cljs$core$IIndexed$_nth$arity$2(null,i__55015);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55047 = seq__55012;
var G__55048 = chunk__55013;
var G__55049 = count__55014;
var G__55050 = (i__55015 + (1));
seq__55012 = G__55047;
chunk__55013 = G__55048;
count__55014 = G__55049;
i__55015 = G__55050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55012);
if(temp__5735__auto__){
var seq__55012__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55012__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55012__$1);
var G__55051 = cljs.core.chunk_rest(seq__55012__$1);
var G__55052 = c__4556__auto__;
var G__55053 = cljs.core.count(c__4556__auto__);
var G__55054 = (0);
seq__55012 = G__55051;
chunk__55013 = G__55052;
count__55014 = G__55053;
i__55015 = G__55054;
continue;
} else {
var r = cljs.core.first(seq__55012__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55055 = cljs.core.next(seq__55012__$1);
var G__55056 = null;
var G__55057 = (0);
var G__55058 = (0);
seq__55012 = G__55055;
chunk__55013 = G__55056;
count__55014 = G__55057;
i__55015 = G__55058;
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
