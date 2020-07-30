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
var G__56307 = (line + (1));
var G__56308 = (1);
var G__56309 = (counter + (1));
line = G__56307;
col = G__56308;
counter = G__56309;
continue;
} else {
var G__56310 = line;
var G__56311 = (col + (1));
var G__56312 = (counter + (1));
line = G__56310;
col = G__56311;
counter = G__56312;
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
var G__56313 = cljs.core.next(chars);
var G__56314 = (n__$1 - (1));
chars = G__56313;
n__$1 = G__56314;
continue;
} else {
var G__56315 = cljs.core.next(chars);
var G__56316 = n__$1;
chars = G__56315;
n__$1 = G__56316;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56293){
var map__56294 = p__56293;
var map__56294__$1 = (((((!((map__56294 == null))))?(((((map__56294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56294):map__56294);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56296_56321 = cljs.core.seq(full_reasons);
var chunk__56297_56322 = null;
var count__56298_56323 = (0);
var i__56299_56324 = (0);
while(true){
if((i__56299_56324 < count__56298_56323)){
var r_56325 = chunk__56297_56322.cljs$core$IIndexed$_nth$arity$2(null,i__56299_56324);
instaparse.failure.print_reason(r_56325);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56326 = seq__56296_56321;
var G__56327 = chunk__56297_56322;
var G__56328 = count__56298_56323;
var G__56329 = (i__56299_56324 + (1));
seq__56296_56321 = G__56326;
chunk__56297_56322 = G__56327;
count__56298_56323 = G__56328;
i__56299_56324 = G__56329;
continue;
} else {
var temp__5735__auto___56330 = cljs.core.seq(seq__56296_56321);
if(temp__5735__auto___56330){
var seq__56296_56331__$1 = temp__5735__auto___56330;
if(cljs.core.chunked_seq_QMARK_(seq__56296_56331__$1)){
var c__4609__auto___56332 = cljs.core.chunk_first(seq__56296_56331__$1);
var G__56333 = cljs.core.chunk_rest(seq__56296_56331__$1);
var G__56334 = c__4609__auto___56332;
var G__56335 = cljs.core.count(c__4609__auto___56332);
var G__56336 = (0);
seq__56296_56321 = G__56333;
chunk__56297_56322 = G__56334;
count__56298_56323 = G__56335;
i__56299_56324 = G__56336;
continue;
} else {
var r_56337 = cljs.core.first(seq__56296_56331__$1);
instaparse.failure.print_reason(r_56337);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56338 = cljs.core.next(seq__56296_56331__$1);
var G__56339 = null;
var G__56340 = (0);
var G__56341 = (0);
seq__56296_56321 = G__56338;
chunk__56297_56322 = G__56339;
count__56298_56323 = G__56340;
i__56299_56324 = G__56341;
continue;
}
} else {
}
}
break;
}

var seq__56300 = cljs.core.seq(partial_reasons);
var chunk__56301 = null;
var count__56302 = (0);
var i__56303 = (0);
while(true){
if((i__56303 < count__56302)){
var r = chunk__56301.cljs$core$IIndexed$_nth$arity$2(null,i__56303);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56342 = seq__56300;
var G__56343 = chunk__56301;
var G__56344 = count__56302;
var G__56345 = (i__56303 + (1));
seq__56300 = G__56342;
chunk__56301 = G__56343;
count__56302 = G__56344;
i__56303 = G__56345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56300);
if(temp__5735__auto__){
var seq__56300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56300__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56300__$1);
var G__56346 = cljs.core.chunk_rest(seq__56300__$1);
var G__56347 = c__4609__auto__;
var G__56348 = cljs.core.count(c__4609__auto__);
var G__56349 = (0);
seq__56300 = G__56346;
chunk__56301 = G__56347;
count__56302 = G__56348;
i__56303 = G__56349;
continue;
} else {
var r = cljs.core.first(seq__56300__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56350 = cljs.core.next(seq__56300__$1);
var G__56351 = null;
var G__56352 = (0);
var G__56353 = (0);
seq__56300 = G__56350;
chunk__56301 = G__56351;
count__56302 = G__56352;
i__56303 = G__56353;
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
