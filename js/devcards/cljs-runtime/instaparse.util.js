goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56351 = arguments.length;
var i__4790__auto___56352 = (0);
while(true){
if((i__4790__auto___56352 < len__4789__auto___56351)){
args__4795__auto__.push((arguments[i__4790__auto___56352]));

var G__56353 = (i__4790__auto___56352 + (1));
i__4790__auto___56352 = G__56353;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56348){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56348));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56354 = arguments.length;
var i__4790__auto___56355 = (0);
while(true){
if((i__4790__auto___56355 < len__4789__auto___56354)){
args__4795__auto__.push((arguments[i__4790__auto___56355]));

var G__56356 = (i__4790__auto___56355 + (1));
i__4790__auto___56355 = G__56356;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56349){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56349));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56350 = "";
var G__56350__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56350,"i"].join(''):G__56350);
var G__56350__$2 = (cljs.core.truth_(re.multiline)?[G__56350__$1,"m"].join(''):G__56350__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56350__$2,"u"].join('');
} else {
return G__56350__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
