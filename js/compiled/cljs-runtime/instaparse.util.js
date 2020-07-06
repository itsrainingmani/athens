goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63719 = arguments.length;
var i__4790__auto___63720 = (0);
while(true){
if((i__4790__auto___63720 < len__4789__auto___63719)){
args__4795__auto__.push((arguments[i__4790__auto___63720]));

var G__63721 = (i__4790__auto___63720 + (1));
i__4790__auto___63720 = G__63721;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq63716){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63716));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63722 = arguments.length;
var i__4790__auto___63723 = (0);
while(true){
if((i__4790__auto___63723 < len__4789__auto___63722)){
args__4795__auto__.push((arguments[i__4790__auto___63723]));

var G__63724 = (i__4790__auto___63723 + (1));
i__4790__auto___63723 = G__63724;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq63717){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63717));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__63718 = "";
var G__63718__$1 = (cljs.core.truth_(re.ignoreCase)?[G__63718,"i"].join(''):G__63718);
var G__63718__$2 = (cljs.core.truth_(re.multiline)?[G__63718__$1,"m"].join(''):G__63718__$1);
if(cljs.core.truth_(re.unicode)){
return [G__63718__$2,"u"].join('');
} else {
return G__63718__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
