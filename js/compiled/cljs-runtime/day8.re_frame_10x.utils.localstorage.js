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
var G__32886 = arguments.length;
switch (G__32886) {
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
var seq__32903 = cljs.core.seq(Object.keys(localStorage));
var chunk__32904 = null;
var count__32905 = (0);
var i__32906 = (0);
while(true){
if((i__32906 < count__32905)){
var k = chunk__32904.cljs$core$IIndexed$_nth$arity$2(null,i__32906);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__32948 = seq__32903;
var G__32949 = chunk__32904;
var G__32950 = count__32905;
var G__32951 = (i__32906 + (1));
seq__32903 = G__32948;
chunk__32904 = G__32949;
count__32905 = G__32950;
i__32906 = G__32951;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32903);
if(temp__5735__auto__){
var seq__32903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32903__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32903__$1);
var G__32956 = cljs.core.chunk_rest(seq__32903__$1);
var G__32957 = c__4556__auto__;
var G__32958 = cljs.core.count(c__4556__auto__);
var G__32959 = (0);
seq__32903 = G__32956;
chunk__32904 = G__32957;
count__32905 = G__32958;
i__32906 = G__32959;
continue;
} else {
var k = cljs.core.first(seq__32903__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__32961 = cljs.core.next(seq__32903__$1);
var G__32962 = null;
var G__32963 = (0);
var G__32964 = (0);
seq__32903 = G__32961;
chunk__32904 = G__32962;
count__32905 = G__32963;
i__32906 = G__32964;
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
