goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54364 = arguments.length;
var i__4737__auto___54365 = (0);
while(true){
if((i__4737__auto___54365 < len__4736__auto___54364)){
args__4742__auto__.push((arguments[i__4737__auto___54365]));

var G__54366 = (i__4737__auto___54365 + (1));
i__4737__auto___54365 = G__54366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__54367__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__54367 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__54368__i = 0, G__54368__a = new Array(arguments.length -  0);
while (G__54368__i < G__54368__a.length) {G__54368__a[G__54368__i] = arguments[G__54368__i + 0]; ++G__54368__i;}
  children = new cljs.core.IndexedSeq(G__54368__a,0,null);
} 
return G__54367__delegate.call(this,children);};
G__54367.cljs$lang$maxFixedArity = 0;
G__54367.cljs$lang$applyTo = (function (arglist__54369){
var children = cljs.core.seq(arglist__54369);
return G__54367__delegate(children);
});
G__54367.cljs$core$IFn$_invoke$arity$variadic = G__54367__delegate;
return G__54367;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq54348){
var G__54349 = cljs.core.first(seq54348);
var seq54348__$1 = cljs.core.next(seq54348);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54349,seq54348__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__54370__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__54370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54371__i = 0, G__54371__a = new Array(arguments.length -  0);
while (G__54371__i < G__54371__a.length) {G__54371__a[G__54371__i] = arguments[G__54371__i + 0]; ++G__54371__i;}
  args = new cljs.core.IndexedSeq(G__54371__a,0,null);
} 
return G__54370__delegate.call(this,args);};
G__54370.cljs$lang$maxFixedArity = 0;
G__54370.cljs$lang$applyTo = (function (arglist__54372){
var args = cljs.core.seq(arglist__54372);
return G__54370__delegate(args);
});
G__54370.cljs$core$IFn$_invoke$arity$variadic = G__54370__delegate;
return G__54370;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54373 = arguments.length;
var i__4737__auto___54374 = (0);
while(true){
if((i__4737__auto___54374 < len__4736__auto___54373)){
args__4742__auto__.push((arguments[i__4737__auto___54374]));

var G__54375 = (i__4737__auto___54374 + (1));
i__4737__auto___54374 = G__54375;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq54352){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54352));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__54357 = arguments.length;
switch (G__54357) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54377 = arguments.length;
var i__4737__auto___54378 = (0);
while(true){
if((i__4737__auto___54378 < len__4736__auto___54377)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54378]));

var G__54379 = (i__4737__auto___54378 + (1));
i__4737__auto___54378 = G__54379;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq54355){
var G__54356 = cljs.core.first(seq54355);
var seq54355__$1 = cljs.core.next(seq54355);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54356,seq54355__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54380 = arguments.length;
var i__4737__auto___54381 = (0);
while(true){
if((i__4737__auto___54381 < len__4736__auto___54380)){
args__4742__auto__.push((arguments[i__4737__auto___54381]));

var G__54382 = (i__4737__auto___54381 + (1));
i__4737__auto___54381 = G__54382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq54358){
var G__54359 = cljs.core.first(seq54358);
var seq54358__$1 = cljs.core.next(seq54358);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54359,seq54358__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54383 = arguments.length;
var i__4737__auto___54384 = (0);
while(true){
if((i__4737__auto___54384 < len__4736__auto___54383)){
args__4742__auto__.push((arguments[i__4737__auto___54384]));

var G__54385 = (i__4737__auto___54384 + (1));
i__4737__auto___54384 = G__54385;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq54360){
var G__54361 = cljs.core.first(seq54360);
var seq54360__$1 = cljs.core.next(seq54360);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54361,seq54360__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54386 = arguments.length;
var i__4737__auto___54387 = (0);
while(true){
if((i__4737__auto___54387 < len__4736__auto___54386)){
args__4742__auto__.push((arguments[i__4737__auto___54387]));

var G__54388 = (i__4737__auto___54387 + (1));
i__4737__auto___54387 = G__54388;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq54362){
var G__54363 = cljs.core.first(seq54362);
var seq54362__$1 = cljs.core.next(seq54362);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54363,seq54362__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
