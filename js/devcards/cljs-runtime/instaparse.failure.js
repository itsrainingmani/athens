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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56258){
var map__56259 = p__56258;
var map__56259__$1 = (((((!((map__56259 == null))))?(((((map__56259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56259):map__56259);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56262_56286 = cljs.core.seq(full_reasons);
var chunk__56263_56287 = null;
var count__56264_56288 = (0);
var i__56265_56289 = (0);
while(true){
if((i__56265_56289 < count__56264_56288)){
var r_56290 = chunk__56263_56287.cljs$core$IIndexed$_nth$arity$2(null,i__56265_56289);
instaparse.failure.print_reason(r_56290);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56291 = seq__56262_56286;
var G__56292 = chunk__56263_56287;
var G__56293 = count__56264_56288;
var G__56294 = (i__56265_56289 + (1));
seq__56262_56286 = G__56291;
chunk__56263_56287 = G__56292;
count__56264_56288 = G__56293;
i__56265_56289 = G__56294;
continue;
} else {
var temp__5735__auto___56296 = cljs.core.seq(seq__56262_56286);
if(temp__5735__auto___56296){
var seq__56262_56297__$1 = temp__5735__auto___56296;
if(cljs.core.chunked_seq_QMARK_(seq__56262_56297__$1)){
var c__4609__auto___56298 = cljs.core.chunk_first(seq__56262_56297__$1);
var G__56299 = cljs.core.chunk_rest(seq__56262_56297__$1);
var G__56300 = c__4609__auto___56298;
var G__56301 = cljs.core.count(c__4609__auto___56298);
var G__56302 = (0);
seq__56262_56286 = G__56299;
chunk__56263_56287 = G__56300;
count__56264_56288 = G__56301;
i__56265_56289 = G__56302;
continue;
} else {
var r_56303 = cljs.core.first(seq__56262_56297__$1);
instaparse.failure.print_reason(r_56303);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56304 = cljs.core.next(seq__56262_56297__$1);
var G__56305 = null;
var G__56306 = (0);
var G__56307 = (0);
seq__56262_56286 = G__56304;
chunk__56263_56287 = G__56305;
count__56264_56288 = G__56306;
i__56265_56289 = G__56307;
continue;
}
} else {
}
}
break;
}

var seq__56268 = cljs.core.seq(partial_reasons);
var chunk__56269 = null;
var count__56270 = (0);
var i__56271 = (0);
while(true){
if((i__56271 < count__56270)){
var r = chunk__56269.cljs$core$IIndexed$_nth$arity$2(null,i__56271);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56308 = seq__56268;
var G__56309 = chunk__56269;
var G__56310 = count__56270;
var G__56311 = (i__56271 + (1));
seq__56268 = G__56308;
chunk__56269 = G__56309;
count__56270 = G__56310;
i__56271 = G__56311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56268);
if(temp__5735__auto__){
var seq__56268__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56268__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56268__$1);
var G__56312 = cljs.core.chunk_rest(seq__56268__$1);
var G__56313 = c__4609__auto__;
var G__56314 = cljs.core.count(c__4609__auto__);
var G__56315 = (0);
seq__56268 = G__56312;
chunk__56269 = G__56313;
count__56270 = G__56314;
i__56271 = G__56315;
continue;
} else {
var r = cljs.core.first(seq__56268__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56316 = cljs.core.next(seq__56268__$1);
var G__56317 = null;
var G__56318 = (0);
var G__56319 = (0);
seq__56268 = G__56316;
chunk__56269 = G__56317;
count__56270 = G__56318;
i__56271 = G__56319;
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
