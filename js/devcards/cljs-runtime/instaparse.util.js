goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55070 = arguments.length;
var i__4737__auto___55071 = (0);
while(true){
if((i__4737__auto___55071 < len__4736__auto___55070)){
args__4742__auto__.push((arguments[i__4737__auto___55071]));

var G__55072 = (i__4737__auto___55071 + (1));
i__4737__auto___55071 = G__55072;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55067){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55067));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55073 = arguments.length;
var i__4737__auto___55074 = (0);
while(true){
if((i__4737__auto___55074 < len__4736__auto___55073)){
args__4742__auto__.push((arguments[i__4737__auto___55074]));

var G__55075 = (i__4737__auto___55074 + (1));
i__4737__auto___55074 = G__55075;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55068){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55068));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55069 = "";
var G__55069__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55069,"i"].join(''):G__55069);
var G__55069__$2 = (cljs.core.truth_(re.multiline)?[G__55069__$1,"m"].join(''):G__55069__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55069__$2,"u"].join('');
} else {
return G__55069__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
