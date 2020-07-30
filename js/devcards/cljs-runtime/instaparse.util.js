goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56358 = arguments.length;
var i__4790__auto___56359 = (0);
while(true){
if((i__4790__auto___56359 < len__4789__auto___56358)){
args__4795__auto__.push((arguments[i__4790__auto___56359]));

var G__56360 = (i__4790__auto___56359 + (1));
i__4790__auto___56359 = G__56360;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56355){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56355));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56361 = arguments.length;
var i__4790__auto___56362 = (0);
while(true){
if((i__4790__auto___56362 < len__4789__auto___56361)){
args__4795__auto__.push((arguments[i__4790__auto___56362]));

var G__56363 = (i__4790__auto___56362 + (1));
i__4790__auto___56362 = G__56363;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56356){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56356));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56357 = "";
var G__56357__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56357,"i"].join(''):G__56357);
var G__56357__$2 = (cljs.core.truth_(re.multiline)?[G__56357__$1,"m"].join(''):G__56357__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56357__$2,"u"].join('');
} else {
return G__56357__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
