goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55053 = arguments.length;
var i__4737__auto___55054 = (0);
while(true){
if((i__4737__auto___55054 < len__4736__auto___55053)){
args__4742__auto__.push((arguments[i__4737__auto___55054]));

var G__55055 = (i__4737__auto___55054 + (1));
i__4737__auto___55054 = G__55055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55049));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55056 = arguments.length;
var i__4737__auto___55057 = (0);
while(true){
if((i__4737__auto___55057 < len__4736__auto___55056)){
args__4742__auto__.push((arguments[i__4737__auto___55057]));

var G__55058 = (i__4737__auto___55057 + (1));
i__4737__auto___55057 = G__55058;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55050){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55050));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55052 = "";
var G__55052__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55052,"i"].join(''):G__55052);
var G__55052__$2 = (cljs.core.truth_(re.multiline)?[G__55052__$1,"m"].join(''):G__55052__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55052__$2,"u"].join('');
} else {
return G__55052__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
