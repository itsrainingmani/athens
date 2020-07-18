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
var G__56283 = (line + (1));
var G__56284 = (1);
var G__56285 = (counter + (1));
line = G__56283;
col = G__56284;
counter = G__56285;
continue;
} else {
var G__56286 = line;
var G__56287 = (col + (1));
var G__56288 = (counter + (1));
line = G__56286;
col = G__56287;
counter = G__56288;
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
var G__56289 = cljs.core.next(chars);
var G__56290 = (n__$1 - (1));
chars = G__56289;
n__$1 = G__56290;
continue;
} else {
var G__56291 = cljs.core.next(chars);
var G__56292 = n__$1;
chars = G__56291;
n__$1 = G__56292;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56268){
var map__56269 = p__56268;
var map__56269__$1 = (((((!((map__56269 == null))))?(((((map__56269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56269):map__56269);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56275_56294 = cljs.core.seq(full_reasons);
var chunk__56276_56295 = null;
var count__56277_56296 = (0);
var i__56278_56297 = (0);
while(true){
if((i__56278_56297 < count__56277_56296)){
var r_56298 = chunk__56276_56295.cljs$core$IIndexed$_nth$arity$2(null,i__56278_56297);
instaparse.failure.print_reason(r_56298);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56299 = seq__56275_56294;
var G__56300 = chunk__56276_56295;
var G__56301 = count__56277_56296;
var G__56302 = (i__56278_56297 + (1));
seq__56275_56294 = G__56299;
chunk__56276_56295 = G__56300;
count__56277_56296 = G__56301;
i__56278_56297 = G__56302;
continue;
} else {
var temp__5735__auto___56303 = cljs.core.seq(seq__56275_56294);
if(temp__5735__auto___56303){
var seq__56275_56304__$1 = temp__5735__auto___56303;
if(cljs.core.chunked_seq_QMARK_(seq__56275_56304__$1)){
var c__4609__auto___56305 = cljs.core.chunk_first(seq__56275_56304__$1);
var G__56306 = cljs.core.chunk_rest(seq__56275_56304__$1);
var G__56307 = c__4609__auto___56305;
var G__56308 = cljs.core.count(c__4609__auto___56305);
var G__56309 = (0);
seq__56275_56294 = G__56306;
chunk__56276_56295 = G__56307;
count__56277_56296 = G__56308;
i__56278_56297 = G__56309;
continue;
} else {
var r_56310 = cljs.core.first(seq__56275_56304__$1);
instaparse.failure.print_reason(r_56310);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56311 = cljs.core.next(seq__56275_56304__$1);
var G__56312 = null;
var G__56313 = (0);
var G__56314 = (0);
seq__56275_56294 = G__56311;
chunk__56276_56295 = G__56312;
count__56277_56296 = G__56313;
i__56278_56297 = G__56314;
continue;
}
} else {
}
}
break;
}

var seq__56279 = cljs.core.seq(partial_reasons);
var chunk__56280 = null;
var count__56281 = (0);
var i__56282 = (0);
while(true){
if((i__56282 < count__56281)){
var r = chunk__56280.cljs$core$IIndexed$_nth$arity$2(null,i__56282);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56315 = seq__56279;
var G__56316 = chunk__56280;
var G__56317 = count__56281;
var G__56318 = (i__56282 + (1));
seq__56279 = G__56315;
chunk__56280 = G__56316;
count__56281 = G__56317;
i__56282 = G__56318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56279);
if(temp__5735__auto__){
var seq__56279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56279__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56279__$1);
var G__56319 = cljs.core.chunk_rest(seq__56279__$1);
var G__56320 = c__4609__auto__;
var G__56321 = cljs.core.count(c__4609__auto__);
var G__56322 = (0);
seq__56279 = G__56319;
chunk__56280 = G__56320;
count__56281 = G__56321;
i__56282 = G__56322;
continue;
} else {
var r = cljs.core.first(seq__56279__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56323 = cljs.core.next(seq__56279__$1);
var G__56324 = null;
var G__56325 = (0);
var G__56326 = (0);
seq__56279 = G__56323;
chunk__56280 = G__56324;
count__56281 = G__56325;
i__56282 = G__56326;
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
