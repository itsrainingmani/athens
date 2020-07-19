goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56322 = arguments.length;
var i__4790__auto___56323 = (0);
while(true){
if((i__4790__auto___56323 < len__4789__auto___56322)){
args__4795__auto__.push((arguments[i__4790__auto___56323]));

var G__56324 = (i__4790__auto___56323 + (1));
i__4790__auto___56323 = G__56324;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56319){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56319));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56325 = arguments.length;
var i__4790__auto___56326 = (0);
while(true){
if((i__4790__auto___56326 < len__4789__auto___56325)){
args__4795__auto__.push((arguments[i__4790__auto___56326]));

var G__56327 = (i__4790__auto___56326 + (1));
i__4790__auto___56326 = G__56327;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56320){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56320));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56321 = "";
var G__56321__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56321,"i"].join(''):G__56321);
var G__56321__$2 = (cljs.core.truth_(re.multiline)?[G__56321__$1,"m"].join(''):G__56321__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56321__$2,"u"].join('');
} else {
return G__56321__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
