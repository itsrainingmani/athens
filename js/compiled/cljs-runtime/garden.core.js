goog.provide('garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54342 = arguments.length;
var i__4737__auto___54343 = (0);
while(true){
if((i__4737__auto___54343 < len__4736__auto___54342)){
args__4742__auto__.push((arguments[i__4737__auto___54343]));

var G__54344 = (i__4737__auto___54343 + (1));
i__4737__auto___54343 = G__54344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq54339){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54339));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54345 = arguments.length;
var i__4737__auto___54346 = (0);
while(true){
if((i__4737__auto___54346 < len__4736__auto___54345)){
args__4742__auto__.push((arguments[i__4737__auto___54346]));

var G__54347 = (i__4737__auto___54346 + (1));
i__4737__auto___54346 = G__54347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq54340){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54340));
}));


//# sourceMappingURL=garden.core.js.map
