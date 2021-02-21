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
var G__32918 = arguments.length;
switch (G__32918) {
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
var seq__32933 = cljs.core.seq(Object.keys(localStorage));
var chunk__32934 = null;
var count__32935 = (0);
var i__32936 = (0);
while(true){
if((i__32936 < count__32935)){
var k = chunk__32934.cljs$core$IIndexed$_nth$arity$2(null,i__32936);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__32961 = seq__32933;
var G__32962 = chunk__32934;
var G__32963 = count__32935;
var G__32964 = (i__32936 + (1));
seq__32933 = G__32961;
chunk__32934 = G__32962;
count__32935 = G__32963;
i__32936 = G__32964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32933);
if(temp__5735__auto__){
var seq__32933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32933__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32933__$1);
var G__32969 = cljs.core.chunk_rest(seq__32933__$1);
var G__32970 = c__4556__auto__;
var G__32971 = cljs.core.count(c__4556__auto__);
var G__32972 = (0);
seq__32933 = G__32969;
chunk__32934 = G__32970;
count__32935 = G__32971;
i__32936 = G__32972;
continue;
} else {
var k = cljs.core.first(seq__32933__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__32974 = cljs.core.next(seq__32933__$1);
var G__32975 = null;
var G__32976 = (0);
var G__32977 = (0);
seq__32933 = G__32974;
chunk__32934 = G__32975;
count__32935 = G__32976;
i__32936 = G__32977;
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
