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
var G__54998 = (line + (1));
var G__54999 = (1);
var G__55000 = (counter + (1));
line = G__54998;
col = G__54999;
counter = G__55000;
continue;
} else {
var G__55001 = line;
var G__55002 = (col + (1));
var G__55003 = (counter + (1));
line = G__55001;
col = G__55002;
counter = G__55003;
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
var G__55004 = cljs.core.next(chars);
var G__55005 = (n__$1 - (1));
chars = G__55004;
n__$1 = G__55005;
continue;
} else {
var G__55006 = cljs.core.next(chars);
var G__55007 = n__$1;
chars = G__55006;
n__$1 = G__55007;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54982){
var map__54983 = p__54982;
var map__54983__$1 = (((((!((map__54983 == null))))?(((((map__54983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54983):map__54983);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54987_55009 = cljs.core.seq(full_reasons);
var chunk__54988_55010 = null;
var count__54989_55011 = (0);
var i__54990_55012 = (0);
while(true){
if((i__54990_55012 < count__54989_55011)){
var r_55013 = chunk__54988_55010.cljs$core$IIndexed$_nth$arity$2(null,i__54990_55012);
instaparse.failure.print_reason(r_55013);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55014 = seq__54987_55009;
var G__55015 = chunk__54988_55010;
var G__55016 = count__54989_55011;
var G__55017 = (i__54990_55012 + (1));
seq__54987_55009 = G__55014;
chunk__54988_55010 = G__55015;
count__54989_55011 = G__55016;
i__54990_55012 = G__55017;
continue;
} else {
var temp__5735__auto___55018 = cljs.core.seq(seq__54987_55009);
if(temp__5735__auto___55018){
var seq__54987_55019__$1 = temp__5735__auto___55018;
if(cljs.core.chunked_seq_QMARK_(seq__54987_55019__$1)){
var c__4556__auto___55022 = cljs.core.chunk_first(seq__54987_55019__$1);
var G__55023 = cljs.core.chunk_rest(seq__54987_55019__$1);
var G__55024 = c__4556__auto___55022;
var G__55025 = cljs.core.count(c__4556__auto___55022);
var G__55026 = (0);
seq__54987_55009 = G__55023;
chunk__54988_55010 = G__55024;
count__54989_55011 = G__55025;
i__54990_55012 = G__55026;
continue;
} else {
var r_55027 = cljs.core.first(seq__54987_55019__$1);
instaparse.failure.print_reason(r_55027);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55028 = cljs.core.next(seq__54987_55019__$1);
var G__55029 = null;
var G__55030 = (0);
var G__55031 = (0);
seq__54987_55009 = G__55028;
chunk__54988_55010 = G__55029;
count__54989_55011 = G__55030;
i__54990_55012 = G__55031;
continue;
}
} else {
}
}
break;
}

var seq__54994 = cljs.core.seq(partial_reasons);
var chunk__54995 = null;
var count__54996 = (0);
var i__54997 = (0);
while(true){
if((i__54997 < count__54996)){
var r = chunk__54995.cljs$core$IIndexed$_nth$arity$2(null,i__54997);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55032 = seq__54994;
var G__55033 = chunk__54995;
var G__55034 = count__54996;
var G__55035 = (i__54997 + (1));
seq__54994 = G__55032;
chunk__54995 = G__55033;
count__54996 = G__55034;
i__54997 = G__55035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54994);
if(temp__5735__auto__){
var seq__54994__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54994__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54994__$1);
var G__55036 = cljs.core.chunk_rest(seq__54994__$1);
var G__55037 = c__4556__auto__;
var G__55038 = cljs.core.count(c__4556__auto__);
var G__55039 = (0);
seq__54994 = G__55036;
chunk__54995 = G__55037;
count__54996 = G__55038;
i__54997 = G__55039;
continue;
} else {
var r = cljs.core.first(seq__54994__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55042 = cljs.core.next(seq__54994__$1);
var G__55043 = null;
var G__55044 = (0);
var G__55045 = (0);
seq__54994 = G__55042;
chunk__54995 = G__55043;
count__54996 = G__55044;
i__54997 = G__55045;
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
