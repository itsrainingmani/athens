goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
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
var args__4795__auto__ = [];
var len__4789__auto___34832 = arguments.length;
var i__4790__auto___34833 = (0);
while(true){
if((i__4790__auto___34833 < len__4789__auto___34832)){
args__4795__auto__.push((arguments[i__4790__auto___34833]));

var G__34834 = (i__4790__auto___34833 + (1));
i__4790__auto___34833 = G__34834;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__34835__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__34835 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__34836__i = 0, G__34836__a = new Array(arguments.length -  0);
while (G__34836__i < G__34836__a.length) {G__34836__a[G__34836__i] = arguments[G__34836__i + 0]; ++G__34836__i;}
  children = new cljs.core.IndexedSeq(G__34836__a,0,null);
} 
return G__34835__delegate.call(this,children);};
G__34835.cljs$lang$maxFixedArity = 0;
G__34835.cljs$lang$applyTo = (function (arglist__34837){
var children = cljs.core.seq(arglist__34837);
return G__34835__delegate(children);
});
G__34835.cljs$core$IFn$_invoke$arity$variadic = G__34835__delegate;
return G__34835;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq34816){
var G__34817 = cljs.core.first(seq34816);
var seq34816__$1 = cljs.core.next(seq34816);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34817,seq34816__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__34838__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__34838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34839__i = 0, G__34839__a = new Array(arguments.length -  0);
while (G__34839__i < G__34839__a.length) {G__34839__a[G__34839__i] = arguments[G__34839__i + 0]; ++G__34839__i;}
  args = new cljs.core.IndexedSeq(G__34839__a,0,null);
} 
return G__34838__delegate.call(this,args);};
G__34838.cljs$lang$maxFixedArity = 0;
G__34838.cljs$lang$applyTo = (function (arglist__34840){
var args = cljs.core.seq(arglist__34840);
return G__34838__delegate(args);
});
G__34838.cljs$core$IFn$_invoke$arity$variadic = G__34838__delegate;
return G__34838;
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
var args__4795__auto__ = [];
var len__4789__auto___34841 = arguments.length;
var i__4790__auto___34842 = (0);
while(true){
if((i__4790__auto___34842 < len__4789__auto___34841)){
args__4795__auto__.push((arguments[i__4790__auto___34842]));

var G__34843 = (i__4790__auto___34842 + (1));
i__4790__auto___34842 = G__34843;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq34818){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34818));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__34822 = arguments.length;
switch (G__34822) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___34846 = arguments.length;
var i__4790__auto___34847 = (0);
while(true){
if((i__4790__auto___34847 < len__4789__auto___34846)){
args_arr__4810__auto__.push((arguments[i__4790__auto___34847]));

var G__34848 = (i__4790__auto___34847 + (1));
i__4790__auto___34847 = G__34848;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq34820){
var G__34821 = cljs.core.first(seq34820);
var seq34820__$1 = cljs.core.next(seq34820);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34821,seq34820__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34849 = arguments.length;
var i__4790__auto___34850 = (0);
while(true){
if((i__4790__auto___34850 < len__4789__auto___34849)){
args__4795__auto__.push((arguments[i__4790__auto___34850]));

var G__34851 = (i__4790__auto___34850 + (1));
i__4790__auto___34850 = G__34851;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq34823){
var G__34824 = cljs.core.first(seq34823);
var seq34823__$1 = cljs.core.next(seq34823);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34824,seq34823__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34852 = arguments.length;
var i__4790__auto___34853 = (0);
while(true){
if((i__4790__auto___34853 < len__4789__auto___34852)){
args__4795__auto__.push((arguments[i__4790__auto___34853]));

var G__34854 = (i__4790__auto___34853 + (1));
i__4790__auto___34853 = G__34854;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq34826){
var G__34827 = cljs.core.first(seq34826);
var seq34826__$1 = cljs.core.next(seq34826);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34827,seq34826__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34855 = arguments.length;
var i__4790__auto___34856 = (0);
while(true){
if((i__4790__auto___34856 < len__4789__auto___34855)){
args__4795__auto__.push((arguments[i__4790__auto___34856]));

var G__34857 = (i__4790__auto___34856 + (1));
i__4790__auto___34856 = G__34857;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq34830){
var G__34831 = cljs.core.first(seq34830);
var seq34830__$1 = cljs.core.next(seq34830);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34831,seq34830__$1);
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
