goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46685 = arguments.length;
var i__4737__auto___46686 = (0);
while(true){
if((i__4737__auto___46686 < len__4736__auto___46685)){
args__4742__auto__.push((arguments[i__4737__auto___46686]));

var G__46691 = (i__4737__auto___46686 + (1));
i__4737__auto___46686 = G__46691;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq46655){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46655));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46696 = arguments.length;
var i__4737__auto___46701 = (0);
while(true){
if((i__4737__auto___46701 < len__4736__auto___46696)){
args__4742__auto__.push((arguments[i__4737__auto___46701]));

var G__46702 = (i__4737__auto___46701 + (1));
i__4737__auto___46701 = G__46702;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq46656){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46656));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__46667 = "";
var G__46667__$1 = (cljs.core.truth_(re.ignoreCase)?[G__46667,"i"].join(''):G__46667);
var G__46667__$2 = (cljs.core.truth_(re.multiline)?[G__46667__$1,"m"].join(''):G__46667__$1);
if(cljs.core.truth_(re.unicode)){
return [G__46667__$2,"u"].join('');
} else {
return G__46667__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
