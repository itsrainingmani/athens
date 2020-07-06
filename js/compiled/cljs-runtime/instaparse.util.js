goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63686 = arguments.length;
var i__4790__auto___63687 = (0);
while(true){
if((i__4790__auto___63687 < len__4789__auto___63686)){
args__4795__auto__.push((arguments[i__4790__auto___63687]));

var G__63688 = (i__4790__auto___63687 + (1));
i__4790__auto___63687 = G__63688;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq63669){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63669));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63689 = arguments.length;
var i__4790__auto___63690 = (0);
while(true){
if((i__4790__auto___63690 < len__4789__auto___63689)){
args__4795__auto__.push((arguments[i__4790__auto___63690]));

var G__63691 = (i__4790__auto___63690 + (1));
i__4790__auto___63690 = G__63691;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq63670){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63670));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__63675 = "";
var G__63675__$1 = (cljs.core.truth_(re.ignoreCase)?[G__63675,"i"].join(''):G__63675);
var G__63675__$2 = (cljs.core.truth_(re.multiline)?[G__63675__$1,"m"].join(''):G__63675__$1);
if(cljs.core.truth_(re.unicode)){
return [G__63675__$2,"u"].join('');
} else {
return G__63675__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
