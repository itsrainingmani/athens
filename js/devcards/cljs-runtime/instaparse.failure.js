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
var G__56288 = (line + (1));
var G__56289 = (1);
var G__56290 = (counter + (1));
line = G__56288;
col = G__56289;
counter = G__56290;
continue;
} else {
var G__56291 = line;
var G__56292 = (col + (1));
var G__56293 = (counter + (1));
line = G__56291;
col = G__56292;
counter = G__56293;
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
var G__56296 = cljs.core.next(chars);
var G__56297 = (n__$1 - (1));
chars = G__56296;
n__$1 = G__56297;
continue;
} else {
var G__56298 = cljs.core.next(chars);
var G__56299 = n__$1;
chars = G__56298;
n__$1 = G__56299;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56269){
var map__56270 = p__56269;
var map__56270__$1 = (((((!((map__56270 == null))))?(((((map__56270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56270):map__56270);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56272_56301 = cljs.core.seq(full_reasons);
var chunk__56273_56302 = null;
var count__56274_56303 = (0);
var i__56275_56304 = (0);
while(true){
if((i__56275_56304 < count__56274_56303)){
var r_56305 = chunk__56273_56302.cljs$core$IIndexed$_nth$arity$2(null,i__56275_56304);
instaparse.failure.print_reason(r_56305);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56306 = seq__56272_56301;
var G__56307 = chunk__56273_56302;
var G__56308 = count__56274_56303;
var G__56309 = (i__56275_56304 + (1));
seq__56272_56301 = G__56306;
chunk__56273_56302 = G__56307;
count__56274_56303 = G__56308;
i__56275_56304 = G__56309;
continue;
} else {
var temp__5735__auto___56310 = cljs.core.seq(seq__56272_56301);
if(temp__5735__auto___56310){
var seq__56272_56311__$1 = temp__5735__auto___56310;
if(cljs.core.chunked_seq_QMARK_(seq__56272_56311__$1)){
var c__4609__auto___56312 = cljs.core.chunk_first(seq__56272_56311__$1);
var G__56313 = cljs.core.chunk_rest(seq__56272_56311__$1);
var G__56314 = c__4609__auto___56312;
var G__56315 = cljs.core.count(c__4609__auto___56312);
var G__56316 = (0);
seq__56272_56301 = G__56313;
chunk__56273_56302 = G__56314;
count__56274_56303 = G__56315;
i__56275_56304 = G__56316;
continue;
} else {
var r_56317 = cljs.core.first(seq__56272_56311__$1);
instaparse.failure.print_reason(r_56317);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56318 = cljs.core.next(seq__56272_56311__$1);
var G__56319 = null;
var G__56320 = (0);
var G__56321 = (0);
seq__56272_56301 = G__56318;
chunk__56273_56302 = G__56319;
count__56274_56303 = G__56320;
i__56275_56304 = G__56321;
continue;
}
} else {
}
}
break;
}

var seq__56276 = cljs.core.seq(partial_reasons);
var chunk__56277 = null;
var count__56278 = (0);
var i__56279 = (0);
while(true){
if((i__56279 < count__56278)){
var r = chunk__56277.cljs$core$IIndexed$_nth$arity$2(null,i__56279);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56322 = seq__56276;
var G__56323 = chunk__56277;
var G__56324 = count__56278;
var G__56325 = (i__56279 + (1));
seq__56276 = G__56322;
chunk__56277 = G__56323;
count__56278 = G__56324;
i__56279 = G__56325;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56276);
if(temp__5735__auto__){
var seq__56276__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56276__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56276__$1);
var G__56326 = cljs.core.chunk_rest(seq__56276__$1);
var G__56327 = c__4609__auto__;
var G__56328 = cljs.core.count(c__4609__auto__);
var G__56329 = (0);
seq__56276 = G__56326;
chunk__56277 = G__56327;
count__56278 = G__56328;
i__56279 = G__56329;
continue;
} else {
var r = cljs.core.first(seq__56276__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56330 = cljs.core.next(seq__56276__$1);
var G__56331 = null;
var G__56332 = (0);
var G__56333 = (0);
seq__56276 = G__56330;
chunk__56277 = G__56331;
count__56278 = G__56332;
i__56279 = G__56333;
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
