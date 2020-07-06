goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___85486 = arguments.length;
var i__4790__auto___85487 = (0);
while(true){
if((i__4790__auto___85487 < len__4789__auto___85486)){
args__4795__auto__.push((arguments[i__4790__auto___85487]));

var G__85488 = (i__4790__auto___85487 + (1));
i__4790__auto___85487 = G__85488;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq85483){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85483));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___85489 = arguments.length;
var i__4790__auto___85490 = (0);
while(true){
if((i__4790__auto___85490 < len__4789__auto___85489)){
args__4795__auto__.push((arguments[i__4790__auto___85490]));

var G__85491 = (i__4790__auto___85490 + (1));
i__4790__auto___85490 = G__85491;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq85484){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85484));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__85485 = "";
var G__85485__$1 = (cljs.core.truth_(re.ignoreCase)?[G__85485,"i"].join(''):G__85485);
var G__85485__$2 = (cljs.core.truth_(re.multiline)?[G__85485__$1,"m"].join(''):G__85485__$1);
if(cljs.core.truth_(re.unicode)){
return [G__85485__$2,"u"].join('');
} else {
return G__85485__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
