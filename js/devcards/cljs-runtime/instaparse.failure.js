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
var G__56312 = (line + (1));
var G__56313 = (1);
var G__56314 = (counter + (1));
line = G__56312;
col = G__56313;
counter = G__56314;
continue;
} else {
var G__56315 = line;
var G__56316 = (col + (1));
var G__56317 = (counter + (1));
line = G__56315;
col = G__56316;
counter = G__56317;
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
var G__56318 = cljs.core.next(chars);
var G__56319 = (n__$1 - (1));
chars = G__56318;
n__$1 = G__56319;
continue;
} else {
var G__56320 = cljs.core.next(chars);
var G__56321 = n__$1;
chars = G__56320;
n__$1 = G__56321;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56300){
var map__56301 = p__56300;
var map__56301__$1 = (((((!((map__56301 == null))))?(((((map__56301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56301):map__56301);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56303_56322 = cljs.core.seq(full_reasons);
var chunk__56304_56323 = null;
var count__56305_56324 = (0);
var i__56306_56325 = (0);
while(true){
if((i__56306_56325 < count__56305_56324)){
var r_56326 = chunk__56304_56323.cljs$core$IIndexed$_nth$arity$2(null,i__56306_56325);
instaparse.failure.print_reason(r_56326);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56327 = seq__56303_56322;
var G__56328 = chunk__56304_56323;
var G__56329 = count__56305_56324;
var G__56330 = (i__56306_56325 + (1));
seq__56303_56322 = G__56327;
chunk__56304_56323 = G__56328;
count__56305_56324 = G__56329;
i__56306_56325 = G__56330;
continue;
} else {
var temp__5735__auto___56331 = cljs.core.seq(seq__56303_56322);
if(temp__5735__auto___56331){
var seq__56303_56332__$1 = temp__5735__auto___56331;
if(cljs.core.chunked_seq_QMARK_(seq__56303_56332__$1)){
var c__4609__auto___56333 = cljs.core.chunk_first(seq__56303_56332__$1);
var G__56334 = cljs.core.chunk_rest(seq__56303_56332__$1);
var G__56335 = c__4609__auto___56333;
var G__56336 = cljs.core.count(c__4609__auto___56333);
var G__56337 = (0);
seq__56303_56322 = G__56334;
chunk__56304_56323 = G__56335;
count__56305_56324 = G__56336;
i__56306_56325 = G__56337;
continue;
} else {
var r_56338 = cljs.core.first(seq__56303_56332__$1);
instaparse.failure.print_reason(r_56338);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56339 = cljs.core.next(seq__56303_56332__$1);
var G__56340 = null;
var G__56341 = (0);
var G__56342 = (0);
seq__56303_56322 = G__56339;
chunk__56304_56323 = G__56340;
count__56305_56324 = G__56341;
i__56306_56325 = G__56342;
continue;
}
} else {
}
}
break;
}

var seq__56307 = cljs.core.seq(partial_reasons);
var chunk__56308 = null;
var count__56309 = (0);
var i__56310 = (0);
while(true){
if((i__56310 < count__56309)){
var r = chunk__56308.cljs$core$IIndexed$_nth$arity$2(null,i__56310);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56343 = seq__56307;
var G__56344 = chunk__56308;
var G__56345 = count__56309;
var G__56346 = (i__56310 + (1));
seq__56307 = G__56343;
chunk__56308 = G__56344;
count__56309 = G__56345;
i__56310 = G__56346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56307);
if(temp__5735__auto__){
var seq__56307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56307__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56307__$1);
var G__56347 = cljs.core.chunk_rest(seq__56307__$1);
var G__56348 = c__4609__auto__;
var G__56349 = cljs.core.count(c__4609__auto__);
var G__56350 = (0);
seq__56307 = G__56347;
chunk__56308 = G__56348;
count__56309 = G__56349;
i__56310 = G__56350;
continue;
} else {
var r = cljs.core.first(seq__56307__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56351 = cljs.core.next(seq__56307__$1);
var G__56352 = null;
var G__56353 = (0);
var G__56354 = (0);
seq__56307 = G__56351;
chunk__56308 = G__56352;
count__56309 = G__56353;
i__56310 = G__56354;
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
