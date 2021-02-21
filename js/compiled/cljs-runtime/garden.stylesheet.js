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
var len__4736__auto___54366 = arguments.length;
var i__4737__auto___54367 = (0);
while(true){
if((i__4737__auto___54367 < len__4736__auto___54366)){
args__4742__auto__.push((arguments[i__4737__auto___54367]));

var G__54368 = (i__4737__auto___54367 + (1));
i__4737__auto___54367 = G__54368;
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
var G__54369__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__54369 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__54370__i = 0, G__54370__a = new Array(arguments.length -  0);
while (G__54370__i < G__54370__a.length) {G__54370__a[G__54370__i] = arguments[G__54370__i + 0]; ++G__54370__i;}
  children = new cljs.core.IndexedSeq(G__54370__a,0,null);
} 
return G__54369__delegate.call(this,children);};
G__54369.cljs$lang$maxFixedArity = 0;
G__54369.cljs$lang$applyTo = (function (arglist__54371){
var children = cljs.core.seq(arglist__54371);
return G__54369__delegate(children);
});
G__54369.cljs$core$IFn$_invoke$arity$variadic = G__54369__delegate;
return G__54369;
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
var G__54372__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__54372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54373__i = 0, G__54373__a = new Array(arguments.length -  0);
while (G__54373__i < G__54373__a.length) {G__54373__a[G__54373__i] = arguments[G__54373__i + 0]; ++G__54373__i;}
  args = new cljs.core.IndexedSeq(G__54373__a,0,null);
} 
return G__54372__delegate.call(this,args);};
G__54372.cljs$lang$maxFixedArity = 0;
G__54372.cljs$lang$applyTo = (function (arglist__54374){
var args = cljs.core.seq(arglist__54374);
return G__54372__delegate(args);
});
G__54372.cljs$core$IFn$_invoke$arity$variadic = G__54372__delegate;
return G__54372;
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
var len__4736__auto___54375 = arguments.length;
var i__4737__auto___54376 = (0);
while(true){
if((i__4737__auto___54376 < len__4736__auto___54375)){
args__4742__auto__.push((arguments[i__4737__auto___54376]));

var G__54377 = (i__4737__auto___54376 + (1));
i__4737__auto___54376 = G__54377;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq54350){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54350));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__54355 = arguments.length;
switch (G__54355) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54379 = arguments.length;
var i__4737__auto___54380 = (0);
while(true){
if((i__4737__auto___54380 < len__4736__auto___54379)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54380]));

var G__54381 = (i__4737__auto___54380 + (1));
i__4737__auto___54380 = G__54381;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq54353){
var G__54354 = cljs.core.first(seq54353);
var seq54353__$1 = cljs.core.next(seq54353);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54354,seq54353__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54382 = arguments.length;
var i__4737__auto___54383 = (0);
while(true){
if((i__4737__auto___54383 < len__4736__auto___54382)){
args__4742__auto__.push((arguments[i__4737__auto___54383]));

var G__54384 = (i__4737__auto___54383 + (1));
i__4737__auto___54383 = G__54384;
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
var len__4736__auto___54385 = arguments.length;
var i__4737__auto___54386 = (0);
while(true){
if((i__4737__auto___54386 < len__4736__auto___54385)){
args__4742__auto__.push((arguments[i__4737__auto___54386]));

var G__54387 = (i__4737__auto___54386 + (1));
i__4737__auto___54386 = G__54387;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq54361){
var G__54362 = cljs.core.first(seq54361);
var seq54361__$1 = cljs.core.next(seq54361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54362,seq54361__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54388 = arguments.length;
var i__4737__auto___54389 = (0);
while(true){
if((i__4737__auto___54389 < len__4736__auto___54388)){
args__4742__auto__.push((arguments[i__4737__auto___54389]));

var G__54390 = (i__4737__auto___54389 + (1));
i__4737__auto___54389 = G__54390;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq54363){
var G__54364 = cljs.core.first(seq54363);
var seq54363__$1 = cljs.core.next(seq54363);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54364,seq54363__$1);
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
