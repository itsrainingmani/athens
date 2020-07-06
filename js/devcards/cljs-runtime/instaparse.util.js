goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77782 = arguments.length;
var i__4790__auto___77783 = (0);
while(true){
if((i__4790__auto___77783 < len__4789__auto___77782)){
args__4795__auto__.push((arguments[i__4790__auto___77783]));

var G__77784 = (i__4790__auto___77783 + (1));
i__4790__auto___77783 = G__77784;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq77761){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77761));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77785 = arguments.length;
var i__4790__auto___77786 = (0);
while(true){
if((i__4790__auto___77786 < len__4789__auto___77785)){
args__4795__auto__.push((arguments[i__4790__auto___77786]));

var G__77787 = (i__4790__auto___77786 + (1));
i__4790__auto___77786 = G__77787;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq77766){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77766));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__77771 = "";
var G__77771__$1 = (cljs.core.truth_(re.ignoreCase)?[G__77771,"i"].join(''):G__77771);
var G__77771__$2 = (cljs.core.truth_(re.multiline)?[G__77771__$1,"m"].join(''):G__77771__$1);
if(cljs.core.truth_(re.unicode)){
return [G__77771__$2,"u"].join('');
} else {
return G__77771__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
