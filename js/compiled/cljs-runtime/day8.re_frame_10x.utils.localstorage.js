goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__53123 = arguments.length;
switch (G__53123) {
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
var seq__53162 = cljs.core.seq(Object.keys(localStorage));
var chunk__53163 = null;
var count__53164 = (0);
var i__53165 = (0);
while(true){
if((i__53165 < count__53164)){
var k = chunk__53163.cljs$core$IIndexed$_nth$arity$2(null,i__53165);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53226 = seq__53162;
var G__53227 = chunk__53163;
var G__53228 = count__53164;
var G__53229 = (i__53165 + (1));
seq__53162 = G__53226;
chunk__53163 = G__53227;
count__53164 = G__53228;
i__53165 = G__53229;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53162);
if(temp__5735__auto__){
var seq__53162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53162__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53162__$1);
var G__53231 = cljs.core.chunk_rest(seq__53162__$1);
var G__53232 = c__4609__auto__;
var G__53233 = cljs.core.count(c__4609__auto__);
var G__53234 = (0);
seq__53162 = G__53231;
chunk__53163 = G__53232;
count__53164 = G__53233;
i__53165 = G__53234;
continue;
} else {
var k = cljs.core.first(seq__53162__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53238 = cljs.core.next(seq__53162__$1);
var G__53239 = null;
var G__53240 = (0);
var G__53241 = (0);
seq__53162 = G__53238;
chunk__53163 = G__53239;
count__53164 = G__53240;
i__53165 = G__53241;
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
