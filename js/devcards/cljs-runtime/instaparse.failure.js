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
var G__56276 = (line + (1));
var G__56277 = (1);
var G__56278 = (counter + (1));
line = G__56276;
col = G__56277;
counter = G__56278;
continue;
} else {
var G__56279 = line;
var G__56280 = (col + (1));
var G__56281 = (counter + (1));
line = G__56279;
col = G__56280;
counter = G__56281;
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
var G__56282 = cljs.core.next(chars);
var G__56283 = (n__$1 - (1));
chars = G__56282;
n__$1 = G__56283;
continue;
} else {
var G__56284 = cljs.core.next(chars);
var G__56285 = n__$1;
chars = G__56284;
n__$1 = G__56285;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56254){
var map__56255 = p__56254;
var map__56255__$1 = (((((!((map__56255 == null))))?(((((map__56255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56255):map__56255);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56257_56286 = cljs.core.seq(full_reasons);
var chunk__56258_56287 = null;
var count__56259_56288 = (0);
var i__56260_56289 = (0);
while(true){
if((i__56260_56289 < count__56259_56288)){
var r_56290 = chunk__56258_56287.cljs$core$IIndexed$_nth$arity$2(null,i__56260_56289);
instaparse.failure.print_reason(r_56290);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56291 = seq__56257_56286;
var G__56292 = chunk__56258_56287;
var G__56293 = count__56259_56288;
var G__56294 = (i__56260_56289 + (1));
seq__56257_56286 = G__56291;
chunk__56258_56287 = G__56292;
count__56259_56288 = G__56293;
i__56260_56289 = G__56294;
continue;
} else {
var temp__5735__auto___56295 = cljs.core.seq(seq__56257_56286);
if(temp__5735__auto___56295){
var seq__56257_56296__$1 = temp__5735__auto___56295;
if(cljs.core.chunked_seq_QMARK_(seq__56257_56296__$1)){
var c__4609__auto___56297 = cljs.core.chunk_first(seq__56257_56296__$1);
var G__56298 = cljs.core.chunk_rest(seq__56257_56296__$1);
var G__56299 = c__4609__auto___56297;
var G__56300 = cljs.core.count(c__4609__auto___56297);
var G__56301 = (0);
seq__56257_56286 = G__56298;
chunk__56258_56287 = G__56299;
count__56259_56288 = G__56300;
i__56260_56289 = G__56301;
continue;
} else {
var r_56302 = cljs.core.first(seq__56257_56296__$1);
instaparse.failure.print_reason(r_56302);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56303 = cljs.core.next(seq__56257_56296__$1);
var G__56304 = null;
var G__56305 = (0);
var G__56306 = (0);
seq__56257_56286 = G__56303;
chunk__56258_56287 = G__56304;
count__56259_56288 = G__56305;
i__56260_56289 = G__56306;
continue;
}
} else {
}
}
break;
}

var seq__56269 = cljs.core.seq(partial_reasons);
var chunk__56270 = null;
var count__56271 = (0);
var i__56272 = (0);
while(true){
if((i__56272 < count__56271)){
var r = chunk__56270.cljs$core$IIndexed$_nth$arity$2(null,i__56272);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56307 = seq__56269;
var G__56308 = chunk__56270;
var G__56309 = count__56271;
var G__56310 = (i__56272 + (1));
seq__56269 = G__56307;
chunk__56270 = G__56308;
count__56271 = G__56309;
i__56272 = G__56310;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56269);
if(temp__5735__auto__){
var seq__56269__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56269__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56269__$1);
var G__56311 = cljs.core.chunk_rest(seq__56269__$1);
var G__56312 = c__4609__auto__;
var G__56313 = cljs.core.count(c__4609__auto__);
var G__56314 = (0);
seq__56269 = G__56311;
chunk__56270 = G__56312;
count__56271 = G__56313;
i__56272 = G__56314;
continue;
} else {
var r = cljs.core.first(seq__56269__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56315 = cljs.core.next(seq__56269__$1);
var G__56316 = null;
var G__56317 = (0);
var G__56318 = (0);
seq__56269 = G__56315;
chunk__56270 = G__56316;
count__56271 = G__56317;
i__56272 = G__56318;
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
