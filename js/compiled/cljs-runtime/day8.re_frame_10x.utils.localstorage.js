goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__32983 = arguments.length;
switch (G__32983) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__32998 = cljs.core.seq(Object.keys(localStorage));
var chunk__32999 = null;
var count__33000 = (0);
var i__33001 = (0);
while(true){
if((i__33001 < count__33000)){
var k = chunk__32999.cljs$core$IIndexed$_nth$arity$2(null,i__33001);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33016 = seq__32998;
var G__33017 = chunk__32999;
var G__33018 = count__33000;
var G__33019 = (i__33001 + (1));
seq__32998 = G__33016;
chunk__32999 = G__33017;
count__33000 = G__33018;
i__33001 = G__33019;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32998);
if(temp__5735__auto__){
var seq__32998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32998__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32998__$1);
var G__33020 = cljs.core.chunk_rest(seq__32998__$1);
var G__33021 = c__4556__auto__;
var G__33022 = cljs.core.count(c__4556__auto__);
var G__33023 = (0);
seq__32998 = G__33020;
chunk__32999 = G__33021;
count__33000 = G__33022;
i__33001 = G__33023;
continue;
} else {
var k = cljs.core.first(seq__32998__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33025 = cljs.core.next(seq__32998__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__32998 = G__33025;
chunk__32999 = G__33026;
count__33000 = G__33027;
i__33001 = G__33028;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
