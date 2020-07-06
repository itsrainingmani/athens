goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__62037 = arguments.length;
switch (G__62037) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__62047 = arguments.length;
switch (G__62047) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__62050 = arguments.length;
switch (G__62050) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__62048_SHARP_){
return (!((p1__62048_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62414 = arguments.length;
var i__4790__auto___62415 = (0);
while(true){
if((i__4790__auto___62415 < len__4789__auto___62414)){
args__4795__auto__.push((arguments[i__4790__auto___62415]));

var G__62416 = (i__4790__auto___62415 + (1));
i__4790__auto___62415 = G__62416;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__62053_62418 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__62054_62419 = null;
var count__62055_62420 = (0);
var i__62056_62421 = (0);
while(true){
if((i__62056_62421 < count__62055_62420)){
var vec__62063_62422 = chunk__62054_62419.cljs$core$IIndexed$_nth$arity$2(null,i__62056_62421);
var k_62423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063_62422,(0),null);
var v_62424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063_62422,(1),null);
style.setProperty(dommy.utils.as_str(k_62423),v_62424);


var G__62425 = seq__62053_62418;
var G__62426 = chunk__62054_62419;
var G__62427 = count__62055_62420;
var G__62428 = (i__62056_62421 + (1));
seq__62053_62418 = G__62425;
chunk__62054_62419 = G__62426;
count__62055_62420 = G__62427;
i__62056_62421 = G__62428;
continue;
} else {
var temp__5735__auto___62429 = cljs.core.seq(seq__62053_62418);
if(temp__5735__auto___62429){
var seq__62053_62430__$1 = temp__5735__auto___62429;
if(cljs.core.chunked_seq_QMARK_(seq__62053_62430__$1)){
var c__4609__auto___62431 = cljs.core.chunk_first(seq__62053_62430__$1);
var G__62432 = cljs.core.chunk_rest(seq__62053_62430__$1);
var G__62433 = c__4609__auto___62431;
var G__62434 = cljs.core.count(c__4609__auto___62431);
var G__62435 = (0);
seq__62053_62418 = G__62432;
chunk__62054_62419 = G__62433;
count__62055_62420 = G__62434;
i__62056_62421 = G__62435;
continue;
} else {
var vec__62066_62440 = cljs.core.first(seq__62053_62430__$1);
var k_62441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62066_62440,(0),null);
var v_62442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62066_62440,(1),null);
style.setProperty(dommy.utils.as_str(k_62441),v_62442);


var G__62443 = cljs.core.next(seq__62053_62430__$1);
var G__62444 = null;
var G__62445 = (0);
var G__62446 = (0);
seq__62053_62418 = G__62443;
chunk__62054_62419 = G__62444;
count__62055_62420 = G__62445;
i__62056_62421 = G__62446;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq62051){
var G__62052 = cljs.core.first(seq62051);
var seq62051__$1 = cljs.core.next(seq62051);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62052,seq62051__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62447 = arguments.length;
var i__4790__auto___62448 = (0);
while(true){
if((i__4790__auto___62448 < len__4789__auto___62447)){
args__4795__auto__.push((arguments[i__4790__auto___62448]));

var G__62450 = (i__4790__auto___62448 + (1));
i__4790__auto___62448 = G__62450;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__62071_62453 = cljs.core.seq(keywords);
var chunk__62072_62454 = null;
var count__62073_62455 = (0);
var i__62074_62456 = (0);
while(true){
if((i__62074_62456 < count__62073_62455)){
var kw_62457 = chunk__62072_62454.cljs$core$IIndexed$_nth$arity$2(null,i__62074_62456);
style.removeProperty(dommy.utils.as_str(kw_62457));


var G__62458 = seq__62071_62453;
var G__62459 = chunk__62072_62454;
var G__62460 = count__62073_62455;
var G__62461 = (i__62074_62456 + (1));
seq__62071_62453 = G__62458;
chunk__62072_62454 = G__62459;
count__62073_62455 = G__62460;
i__62074_62456 = G__62461;
continue;
} else {
var temp__5735__auto___62463 = cljs.core.seq(seq__62071_62453);
if(temp__5735__auto___62463){
var seq__62071_62464__$1 = temp__5735__auto___62463;
if(cljs.core.chunked_seq_QMARK_(seq__62071_62464__$1)){
var c__4609__auto___62465 = cljs.core.chunk_first(seq__62071_62464__$1);
var G__62466 = cljs.core.chunk_rest(seq__62071_62464__$1);
var G__62467 = c__4609__auto___62465;
var G__62468 = cljs.core.count(c__4609__auto___62465);
var G__62469 = (0);
seq__62071_62453 = G__62466;
chunk__62072_62454 = G__62467;
count__62073_62455 = G__62468;
i__62074_62456 = G__62469;
continue;
} else {
var kw_62470 = cljs.core.first(seq__62071_62464__$1);
style.removeProperty(dommy.utils.as_str(kw_62470));


var G__62471 = cljs.core.next(seq__62071_62464__$1);
var G__62472 = null;
var G__62473 = (0);
var G__62474 = (0);
seq__62071_62453 = G__62471;
chunk__62072_62454 = G__62472;
count__62073_62455 = G__62473;
i__62074_62456 = G__62474;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq62069){
var G__62070 = cljs.core.first(seq62069);
var seq62069__$1 = cljs.core.next(seq62069);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62070,seq62069__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62478 = arguments.length;
var i__4790__auto___62479 = (0);
while(true){
if((i__4790__auto___62479 < len__4789__auto___62478)){
args__4795__auto__.push((arguments[i__4790__auto___62479]));

var G__62480 = (i__4790__auto___62479 + (1));
i__4790__auto___62479 = G__62480;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__62077_62481 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__62078_62482 = null;
var count__62079_62483 = (0);
var i__62080_62484 = (0);
while(true){
if((i__62080_62484 < count__62079_62483)){
var vec__62087_62485 = chunk__62078_62482.cljs$core$IIndexed$_nth$arity$2(null,i__62080_62484);
var k_62486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087_62485,(0),null);
var v_62487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087_62485,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_62486,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_62487),"px"].join('')], 0));


var G__62489 = seq__62077_62481;
var G__62490 = chunk__62078_62482;
var G__62491 = count__62079_62483;
var G__62492 = (i__62080_62484 + (1));
seq__62077_62481 = G__62489;
chunk__62078_62482 = G__62490;
count__62079_62483 = G__62491;
i__62080_62484 = G__62492;
continue;
} else {
var temp__5735__auto___62493 = cljs.core.seq(seq__62077_62481);
if(temp__5735__auto___62493){
var seq__62077_62494__$1 = temp__5735__auto___62493;
if(cljs.core.chunked_seq_QMARK_(seq__62077_62494__$1)){
var c__4609__auto___62495 = cljs.core.chunk_first(seq__62077_62494__$1);
var G__62496 = cljs.core.chunk_rest(seq__62077_62494__$1);
var G__62497 = c__4609__auto___62495;
var G__62498 = cljs.core.count(c__4609__auto___62495);
var G__62499 = (0);
seq__62077_62481 = G__62496;
chunk__62078_62482 = G__62497;
count__62079_62483 = G__62498;
i__62080_62484 = G__62499;
continue;
} else {
var vec__62090_62500 = cljs.core.first(seq__62077_62494__$1);
var k_62501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62500,(0),null);
var v_62502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62500,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_62501,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_62502),"px"].join('')], 0));


var G__62503 = cljs.core.next(seq__62077_62494__$1);
var G__62504 = null;
var G__62505 = (0);
var G__62506 = (0);
seq__62077_62481 = G__62503;
chunk__62078_62482 = G__62504;
count__62079_62483 = G__62505;
i__62080_62484 = G__62506;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq62075){
var G__62076 = cljs.core.first(seq62075);
var seq62075__$1 = cljs.core.next(seq62075);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62076,seq62075__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__62098 = arguments.length;
switch (G__62098) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62511 = arguments.length;
var i__4790__auto___62512 = (0);
while(true){
if((i__4790__auto___62512 < len__4789__auto___62511)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62512]));

var G__62513 = (i__4790__auto___62512 + (1));
i__4790__auto___62512 = G__62513;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__62099 = elem;
(G__62099[k__$1] = v);

return G__62099;
} else {
var G__62100 = elem;
G__62100.setAttribute(k__$1,v);

return G__62100;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__62101_62514 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__62102_62515 = null;
var count__62103_62516 = (0);
var i__62104_62517 = (0);
while(true){
if((i__62104_62517 < count__62103_62516)){
var vec__62111_62518 = chunk__62102_62515.cljs$core$IIndexed$_nth$arity$2(null,i__62104_62517);
var k_62519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62111_62518,(0),null);
var v_62520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62111_62518,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_62519__$1,v_62520__$1);


var G__62521 = seq__62101_62514;
var G__62522 = chunk__62102_62515;
var G__62523 = count__62103_62516;
var G__62524 = (i__62104_62517 + (1));
seq__62101_62514 = G__62521;
chunk__62102_62515 = G__62522;
count__62103_62516 = G__62523;
i__62104_62517 = G__62524;
continue;
} else {
var temp__5735__auto___62525 = cljs.core.seq(seq__62101_62514);
if(temp__5735__auto___62525){
var seq__62101_62526__$1 = temp__5735__auto___62525;
if(cljs.core.chunked_seq_QMARK_(seq__62101_62526__$1)){
var c__4609__auto___62527 = cljs.core.chunk_first(seq__62101_62526__$1);
var G__62528 = cljs.core.chunk_rest(seq__62101_62526__$1);
var G__62529 = c__4609__auto___62527;
var G__62530 = cljs.core.count(c__4609__auto___62527);
var G__62531 = (0);
seq__62101_62514 = G__62528;
chunk__62102_62515 = G__62529;
count__62103_62516 = G__62530;
i__62104_62517 = G__62531;
continue;
} else {
var vec__62114_62532 = cljs.core.first(seq__62101_62526__$1);
var k_62533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62114_62532,(0),null);
var v_62534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62114_62532,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_62533__$1,v_62534__$1);


var G__62535 = cljs.core.next(seq__62101_62526__$1);
var G__62536 = null;
var G__62537 = (0);
var G__62538 = (0);
seq__62101_62514 = G__62535;
chunk__62102_62515 = G__62536;
count__62103_62516 = G__62537;
i__62104_62517 = G__62538;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq62094){
var G__62095 = cljs.core.first(seq62094);
var seq62094__$1 = cljs.core.next(seq62094);
var G__62096 = cljs.core.first(seq62094__$1);
var seq62094__$2 = cljs.core.next(seq62094__$1);
var G__62097 = cljs.core.first(seq62094__$2);
var seq62094__$3 = cljs.core.next(seq62094__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62095,G__62096,G__62097,seq62094__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__62121 = arguments.length;
switch (G__62121) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62540 = arguments.length;
var i__4790__auto___62541 = (0);
while(true){
if((i__4790__auto___62541 < len__4789__auto___62540)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62541]));

var G__62542 = (i__4790__auto___62541 + (1));
i__4790__auto___62541 = G__62542;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_62543__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__62122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__62122.cljs$core$IFn$_invoke$arity$1 ? fexpr__62122.cljs$core$IFn$_invoke$arity$1(k_62543__$1) : fexpr__62122.call(null,k_62543__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_62543__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__62123_62544 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__62124_62545 = null;
var count__62125_62546 = (0);
var i__62126_62547 = (0);
while(true){
if((i__62126_62547 < count__62125_62546)){
var k_62548__$1 = chunk__62124_62545.cljs$core$IIndexed$_nth$arity$2(null,i__62126_62547);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_62548__$1);


var G__62549 = seq__62123_62544;
var G__62550 = chunk__62124_62545;
var G__62551 = count__62125_62546;
var G__62552 = (i__62126_62547 + (1));
seq__62123_62544 = G__62549;
chunk__62124_62545 = G__62550;
count__62125_62546 = G__62551;
i__62126_62547 = G__62552;
continue;
} else {
var temp__5735__auto___62553 = cljs.core.seq(seq__62123_62544);
if(temp__5735__auto___62553){
var seq__62123_62554__$1 = temp__5735__auto___62553;
if(cljs.core.chunked_seq_QMARK_(seq__62123_62554__$1)){
var c__4609__auto___62555 = cljs.core.chunk_first(seq__62123_62554__$1);
var G__62556 = cljs.core.chunk_rest(seq__62123_62554__$1);
var G__62557 = c__4609__auto___62555;
var G__62558 = cljs.core.count(c__4609__auto___62555);
var G__62559 = (0);
seq__62123_62544 = G__62556;
chunk__62124_62545 = G__62557;
count__62125_62546 = G__62558;
i__62126_62547 = G__62559;
continue;
} else {
var k_62560__$1 = cljs.core.first(seq__62123_62554__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_62560__$1);


var G__62561 = cljs.core.next(seq__62123_62554__$1);
var G__62562 = null;
var G__62563 = (0);
var G__62564 = (0);
seq__62123_62544 = G__62561;
chunk__62124_62545 = G__62562;
count__62125_62546 = G__62563;
i__62126_62547 = G__62564;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq62118){
var G__62119 = cljs.core.first(seq62118);
var seq62118__$1 = cljs.core.next(seq62118);
var G__62120 = cljs.core.first(seq62118__$1);
var seq62118__$2 = cljs.core.next(seq62118__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62119,G__62120,seq62118__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__62128 = arguments.length;
switch (G__62128) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__62133 = arguments.length;
switch (G__62133) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62579 = arguments.length;
var i__4790__auto___62580 = (0);
while(true){
if((i__4790__auto___62580 < len__4789__auto___62579)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62580]));

var G__62581 = (i__4790__auto___62580 + (1));
i__4790__auto___62580 = G__62581;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___62582 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62582)){
var class_list_62583 = temp__5733__auto___62582;
var seq__62134_62584 = cljs.core.seq(classes__$1);
var chunk__62135_62585 = null;
var count__62136_62586 = (0);
var i__62137_62587 = (0);
while(true){
if((i__62137_62587 < count__62136_62586)){
var c_62589 = chunk__62135_62585.cljs$core$IIndexed$_nth$arity$2(null,i__62137_62587);
class_list_62583.add(c_62589);


var G__62590 = seq__62134_62584;
var G__62591 = chunk__62135_62585;
var G__62592 = count__62136_62586;
var G__62593 = (i__62137_62587 + (1));
seq__62134_62584 = G__62590;
chunk__62135_62585 = G__62591;
count__62136_62586 = G__62592;
i__62137_62587 = G__62593;
continue;
} else {
var temp__5735__auto___62594 = cljs.core.seq(seq__62134_62584);
if(temp__5735__auto___62594){
var seq__62134_62596__$1 = temp__5735__auto___62594;
if(cljs.core.chunked_seq_QMARK_(seq__62134_62596__$1)){
var c__4609__auto___62598 = cljs.core.chunk_first(seq__62134_62596__$1);
var G__62599 = cljs.core.chunk_rest(seq__62134_62596__$1);
var G__62600 = c__4609__auto___62598;
var G__62601 = cljs.core.count(c__4609__auto___62598);
var G__62602 = (0);
seq__62134_62584 = G__62599;
chunk__62135_62585 = G__62600;
count__62136_62586 = G__62601;
i__62137_62587 = G__62602;
continue;
} else {
var c_62605 = cljs.core.first(seq__62134_62596__$1);
class_list_62583.add(c_62605);


var G__62606 = cljs.core.next(seq__62134_62596__$1);
var G__62607 = null;
var G__62608 = (0);
var G__62609 = (0);
seq__62134_62584 = G__62606;
chunk__62135_62585 = G__62607;
count__62136_62586 = G__62608;
i__62137_62587 = G__62609;
continue;
}
} else {
}
}
break;
}
} else {
var seq__62138_62610 = cljs.core.seq(classes__$1);
var chunk__62139_62611 = null;
var count__62140_62612 = (0);
var i__62141_62613 = (0);
while(true){
if((i__62141_62613 < count__62140_62612)){
var c_62615 = chunk__62139_62611.cljs$core$IIndexed$_nth$arity$2(null,i__62141_62613);
var class_name_62616 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_62616,c_62615))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_62616 === ""))?c_62615:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_62616)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_62615)].join('')));
}


var G__62621 = seq__62138_62610;
var G__62622 = chunk__62139_62611;
var G__62623 = count__62140_62612;
var G__62624 = (i__62141_62613 + (1));
seq__62138_62610 = G__62621;
chunk__62139_62611 = G__62622;
count__62140_62612 = G__62623;
i__62141_62613 = G__62624;
continue;
} else {
var temp__5735__auto___62629 = cljs.core.seq(seq__62138_62610);
if(temp__5735__auto___62629){
var seq__62138_62630__$1 = temp__5735__auto___62629;
if(cljs.core.chunked_seq_QMARK_(seq__62138_62630__$1)){
var c__4609__auto___62631 = cljs.core.chunk_first(seq__62138_62630__$1);
var G__62632 = cljs.core.chunk_rest(seq__62138_62630__$1);
var G__62633 = c__4609__auto___62631;
var G__62634 = cljs.core.count(c__4609__auto___62631);
var G__62635 = (0);
seq__62138_62610 = G__62632;
chunk__62139_62611 = G__62633;
count__62140_62612 = G__62634;
i__62141_62613 = G__62635;
continue;
} else {
var c_62638 = cljs.core.first(seq__62138_62630__$1);
var class_name_62639 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_62639,c_62638))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_62639 === ""))?c_62638:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_62639)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_62638)].join('')));
}


var G__62640 = cljs.core.next(seq__62138_62630__$1);
var G__62641 = null;
var G__62642 = (0);
var G__62643 = (0);
seq__62138_62610 = G__62640;
chunk__62139_62611 = G__62641;
count__62140_62612 = G__62642;
i__62141_62613 = G__62643;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__62142_62644 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__62143_62645 = null;
var count__62144_62646 = (0);
var i__62145_62647 = (0);
while(true){
if((i__62145_62647 < count__62144_62646)){
var c_62650 = chunk__62143_62645.cljs$core$IIndexed$_nth$arity$2(null,i__62145_62647);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_62650);


var G__62653 = seq__62142_62644;
var G__62654 = chunk__62143_62645;
var G__62655 = count__62144_62646;
var G__62656 = (i__62145_62647 + (1));
seq__62142_62644 = G__62653;
chunk__62143_62645 = G__62654;
count__62144_62646 = G__62655;
i__62145_62647 = G__62656;
continue;
} else {
var temp__5735__auto___62657 = cljs.core.seq(seq__62142_62644);
if(temp__5735__auto___62657){
var seq__62142_62658__$1 = temp__5735__auto___62657;
if(cljs.core.chunked_seq_QMARK_(seq__62142_62658__$1)){
var c__4609__auto___62659 = cljs.core.chunk_first(seq__62142_62658__$1);
var G__62660 = cljs.core.chunk_rest(seq__62142_62658__$1);
var G__62661 = c__4609__auto___62659;
var G__62662 = cljs.core.count(c__4609__auto___62659);
var G__62663 = (0);
seq__62142_62644 = G__62660;
chunk__62143_62645 = G__62661;
count__62144_62646 = G__62662;
i__62145_62647 = G__62663;
continue;
} else {
var c_62664 = cljs.core.first(seq__62142_62658__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_62664);


var G__62665 = cljs.core.next(seq__62142_62658__$1);
var G__62666 = null;
var G__62667 = (0);
var G__62668 = (0);
seq__62142_62644 = G__62665;
chunk__62143_62645 = G__62666;
count__62144_62646 = G__62667;
i__62145_62647 = G__62668;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq62130){
var G__62131 = cljs.core.first(seq62130);
var seq62130__$1 = cljs.core.next(seq62130);
var G__62132 = cljs.core.first(seq62130__$1);
var seq62130__$2 = cljs.core.next(seq62130__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62131,G__62132,seq62130__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__62150 = arguments.length;
switch (G__62150) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62671 = arguments.length;
var i__4790__auto___62672 = (0);
while(true){
if((i__4790__auto___62672 < len__4789__auto___62671)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62672]));

var G__62673 = (i__4790__auto___62672 + (1));
i__4790__auto___62672 = G__62673;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___62674 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62674)){
var class_list_62675 = temp__5733__auto___62674;
class_list_62675.remove(c__$1);
} else {
var class_name_62676 = dommy.core.class$(elem);
var new_class_name_62677 = dommy.utils.remove_class_str(class_name_62676,c__$1);
if((class_name_62676 === new_class_name_62677)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_62677);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__62151 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__62152 = null;
var count__62153 = (0);
var i__62154 = (0);
while(true){
if((i__62154 < count__62153)){
var c = chunk__62152.cljs$core$IIndexed$_nth$arity$2(null,i__62154);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__62678 = seq__62151;
var G__62679 = chunk__62152;
var G__62680 = count__62153;
var G__62681 = (i__62154 + (1));
seq__62151 = G__62678;
chunk__62152 = G__62679;
count__62153 = G__62680;
i__62154 = G__62681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62151);
if(temp__5735__auto__){
var seq__62151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62151__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62151__$1);
var G__62682 = cljs.core.chunk_rest(seq__62151__$1);
var G__62683 = c__4609__auto__;
var G__62684 = cljs.core.count(c__4609__auto__);
var G__62685 = (0);
seq__62151 = G__62682;
chunk__62152 = G__62683;
count__62153 = G__62684;
i__62154 = G__62685;
continue;
} else {
var c = cljs.core.first(seq__62151__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__62686 = cljs.core.next(seq__62151__$1);
var G__62687 = null;
var G__62688 = (0);
var G__62689 = (0);
seq__62151 = G__62686;
chunk__62152 = G__62687;
count__62153 = G__62688;
i__62154 = G__62689;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq62147){
var G__62148 = cljs.core.first(seq62147);
var seq62147__$1 = cljs.core.next(seq62147);
var G__62149 = cljs.core.first(seq62147__$1);
var seq62147__$2 = cljs.core.next(seq62147__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62148,G__62149,seq62147__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__62156 = arguments.length;
switch (G__62156) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___62691 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62691)){
var class_list_62692 = temp__5733__auto___62691;
class_list_62692.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__62158 = arguments.length;
switch (G__62158) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__62160 = arguments.length;
switch (G__62160) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__62165 = arguments.length;
switch (G__62165) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62696 = arguments.length;
var i__4790__auto___62697 = (0);
while(true){
if((i__4790__auto___62697 < len__4789__auto___62696)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62697]));

var G__62698 = (i__4790__auto___62697 + (1));
i__4790__auto___62697 = G__62698;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__62166 = parent;
G__62166.appendChild(child);

return G__62166;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__62167_62699 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__62168_62700 = null;
var count__62169_62701 = (0);
var i__62170_62702 = (0);
while(true){
if((i__62170_62702 < count__62169_62701)){
var c_62705 = chunk__62168_62700.cljs$core$IIndexed$_nth$arity$2(null,i__62170_62702);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62705);


var G__62706 = seq__62167_62699;
var G__62707 = chunk__62168_62700;
var G__62708 = count__62169_62701;
var G__62709 = (i__62170_62702 + (1));
seq__62167_62699 = G__62706;
chunk__62168_62700 = G__62707;
count__62169_62701 = G__62708;
i__62170_62702 = G__62709;
continue;
} else {
var temp__5735__auto___62712 = cljs.core.seq(seq__62167_62699);
if(temp__5735__auto___62712){
var seq__62167_62713__$1 = temp__5735__auto___62712;
if(cljs.core.chunked_seq_QMARK_(seq__62167_62713__$1)){
var c__4609__auto___62714 = cljs.core.chunk_first(seq__62167_62713__$1);
var G__62715 = cljs.core.chunk_rest(seq__62167_62713__$1);
var G__62716 = c__4609__auto___62714;
var G__62717 = cljs.core.count(c__4609__auto___62714);
var G__62718 = (0);
seq__62167_62699 = G__62715;
chunk__62168_62700 = G__62716;
count__62169_62701 = G__62717;
i__62170_62702 = G__62718;
continue;
} else {
var c_62719 = cljs.core.first(seq__62167_62713__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62719);


var G__62720 = cljs.core.next(seq__62167_62713__$1);
var G__62721 = null;
var G__62722 = (0);
var G__62723 = (0);
seq__62167_62699 = G__62720;
chunk__62168_62700 = G__62721;
count__62169_62701 = G__62722;
i__62170_62702 = G__62723;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq62162){
var G__62163 = cljs.core.first(seq62162);
var seq62162__$1 = cljs.core.next(seq62162);
var G__62164 = cljs.core.first(seq62162__$1);
var seq62162__$2 = cljs.core.next(seq62162__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62163,G__62164,seq62162__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__62175 = arguments.length;
switch (G__62175) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62725 = arguments.length;
var i__4790__auto___62726 = (0);
while(true){
if((i__4790__auto___62726 < len__4789__auto___62725)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62726]));

var G__62727 = (i__4790__auto___62726 + (1));
i__4790__auto___62726 = G__62727;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__62176 = parent;
G__62176.insertBefore(child,parent.firstChild);

return G__62176;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__62177_62728 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__62178_62729 = null;
var count__62179_62730 = (0);
var i__62180_62731 = (0);
while(true){
if((i__62180_62731 < count__62179_62730)){
var c_62732 = chunk__62178_62729.cljs$core$IIndexed$_nth$arity$2(null,i__62180_62731);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62732);


var G__62734 = seq__62177_62728;
var G__62735 = chunk__62178_62729;
var G__62736 = count__62179_62730;
var G__62737 = (i__62180_62731 + (1));
seq__62177_62728 = G__62734;
chunk__62178_62729 = G__62735;
count__62179_62730 = G__62736;
i__62180_62731 = G__62737;
continue;
} else {
var temp__5735__auto___62739 = cljs.core.seq(seq__62177_62728);
if(temp__5735__auto___62739){
var seq__62177_62740__$1 = temp__5735__auto___62739;
if(cljs.core.chunked_seq_QMARK_(seq__62177_62740__$1)){
var c__4609__auto___62741 = cljs.core.chunk_first(seq__62177_62740__$1);
var G__62742 = cljs.core.chunk_rest(seq__62177_62740__$1);
var G__62743 = c__4609__auto___62741;
var G__62744 = cljs.core.count(c__4609__auto___62741);
var G__62745 = (0);
seq__62177_62728 = G__62742;
chunk__62178_62729 = G__62743;
count__62179_62730 = G__62744;
i__62180_62731 = G__62745;
continue;
} else {
var c_62746 = cljs.core.first(seq__62177_62740__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62746);


var G__62747 = cljs.core.next(seq__62177_62740__$1);
var G__62748 = null;
var G__62749 = (0);
var G__62750 = (0);
seq__62177_62728 = G__62747;
chunk__62178_62729 = G__62748;
count__62179_62730 = G__62749;
i__62180_62731 = G__62750;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq62172){
var G__62173 = cljs.core.first(seq62172);
var seq62172__$1 = cljs.core.next(seq62172);
var G__62174 = cljs.core.first(seq62172__$1);
var seq62172__$2 = cljs.core.next(seq62172__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62173,G__62174,seq62172__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___62754 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___62754)){
var next_62759 = temp__5733__auto___62754;
dommy.core.insert_before_BANG_(elem,next_62759);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__62182 = arguments.length;
switch (G__62182) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__62183 = p;
G__62183.removeChild(elem);

return G__62183;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62184){
var vec__62185 = p__62184;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62185,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62185,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62761 = arguments.length;
var i__4790__auto___62762 = (0);
while(true){
if((i__4790__auto___62762 < len__4789__auto___62761)){
args__4795__auto__.push((arguments[i__4790__auto___62762]));

var G__62763 = (i__4790__auto___62762 + (1));
i__4790__auto___62762 = G__62763;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq62188){
var G__62189 = cljs.core.first(seq62188);
var seq62188__$1 = cljs.core.next(seq62188);
var G__62190 = cljs.core.first(seq62188__$1);
var seq62188__$2 = cljs.core.next(seq62188__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62189,G__62190,seq62188__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__62191 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__62191.cljs$core$IFn$_invoke$arity$1 ? fexpr__62191.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__62191.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62767 = arguments.length;
var i__4790__auto___62768 = (0);
while(true){
if((i__4790__auto___62768 < len__4789__auto___62767)){
args__4795__auto__.push((arguments[i__4790__auto___62768]));

var G__62785 = (i__4790__auto___62768 + (1));
i__4790__auto___62768 = G__62785;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__62194_62786 = dommy.core.elem_and_selector(elem_sel);
var elem_62787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62194_62786,(0),null);
var selector_62788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62194_62786,(1),null);
var seq__62197_62789 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62204_62790 = null;
var count__62205_62791 = (0);
var i__62206_62792 = (0);
while(true){
if((i__62206_62792 < count__62205_62791)){
var vec__62259_62793 = chunk__62204_62790.cljs$core$IIndexed$_nth$arity$2(null,i__62206_62792);
var orig_type_62794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62259_62793,(0),null);
var f_62795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62259_62793,(1),null);
var seq__62207_62798 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62794,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62794,cljs.core.identity])));
var chunk__62209_62799 = null;
var count__62210_62800 = (0);
var i__62211_62801 = (0);
while(true){
if((i__62211_62801 < count__62210_62800)){
var vec__62272_62802 = chunk__62209_62799.cljs$core$IIndexed$_nth$arity$2(null,i__62211_62801);
var actual_type_62803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62272_62802,(0),null);
var factory_62804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62272_62802,(1),null);
var canonical_f_62805 = (function (){var G__62276 = (factory_62804.cljs$core$IFn$_invoke$arity$1 ? factory_62804.cljs$core$IFn$_invoke$arity$1(f_62795) : factory_62804.call(null,f_62795));
var fexpr__62275 = (cljs.core.truth_(selector_62788)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62787,selector_62788):cljs.core.identity);
return (fexpr__62275.cljs$core$IFn$_invoke$arity$1 ? fexpr__62275.cljs$core$IFn$_invoke$arity$1(G__62276) : fexpr__62275.call(null,G__62276));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62787,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62788,actual_type_62803,f_62795], null),canonical_f_62805], 0));

if(cljs.core.truth_(elem_62787.addEventListener)){
elem_62787.addEventListener(cljs.core.name(actual_type_62803),canonical_f_62805);
} else {
elem_62787.attachEvent(cljs.core.name(actual_type_62803),canonical_f_62805);
}


var G__62808 = seq__62207_62798;
var G__62809 = chunk__62209_62799;
var G__62810 = count__62210_62800;
var G__62811 = (i__62211_62801 + (1));
seq__62207_62798 = G__62808;
chunk__62209_62799 = G__62809;
count__62210_62800 = G__62810;
i__62211_62801 = G__62811;
continue;
} else {
var temp__5735__auto___62814 = cljs.core.seq(seq__62207_62798);
if(temp__5735__auto___62814){
var seq__62207_62815__$1 = temp__5735__auto___62814;
if(cljs.core.chunked_seq_QMARK_(seq__62207_62815__$1)){
var c__4609__auto___62817 = cljs.core.chunk_first(seq__62207_62815__$1);
var G__62818 = cljs.core.chunk_rest(seq__62207_62815__$1);
var G__62819 = c__4609__auto___62817;
var G__62820 = cljs.core.count(c__4609__auto___62817);
var G__62821 = (0);
seq__62207_62798 = G__62818;
chunk__62209_62799 = G__62819;
count__62210_62800 = G__62820;
i__62211_62801 = G__62821;
continue;
} else {
var vec__62277_62822 = cljs.core.first(seq__62207_62815__$1);
var actual_type_62823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62277_62822,(0),null);
var factory_62824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62277_62822,(1),null);
var canonical_f_62825 = (function (){var G__62281 = (factory_62824.cljs$core$IFn$_invoke$arity$1 ? factory_62824.cljs$core$IFn$_invoke$arity$1(f_62795) : factory_62824.call(null,f_62795));
var fexpr__62280 = (cljs.core.truth_(selector_62788)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62787,selector_62788):cljs.core.identity);
return (fexpr__62280.cljs$core$IFn$_invoke$arity$1 ? fexpr__62280.cljs$core$IFn$_invoke$arity$1(G__62281) : fexpr__62280.call(null,G__62281));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62787,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62788,actual_type_62823,f_62795], null),canonical_f_62825], 0));

if(cljs.core.truth_(elem_62787.addEventListener)){
elem_62787.addEventListener(cljs.core.name(actual_type_62823),canonical_f_62825);
} else {
elem_62787.attachEvent(cljs.core.name(actual_type_62823),canonical_f_62825);
}


var G__62829 = cljs.core.next(seq__62207_62815__$1);
var G__62830 = null;
var G__62831 = (0);
var G__62832 = (0);
seq__62207_62798 = G__62829;
chunk__62209_62799 = G__62830;
count__62210_62800 = G__62831;
i__62211_62801 = G__62832;
continue;
}
} else {
}
}
break;
}

var G__62833 = seq__62197_62789;
var G__62834 = chunk__62204_62790;
var G__62835 = count__62205_62791;
var G__62836 = (i__62206_62792 + (1));
seq__62197_62789 = G__62833;
chunk__62204_62790 = G__62834;
count__62205_62791 = G__62835;
i__62206_62792 = G__62836;
continue;
} else {
var temp__5735__auto___62837 = cljs.core.seq(seq__62197_62789);
if(temp__5735__auto___62837){
var seq__62197_62838__$1 = temp__5735__auto___62837;
if(cljs.core.chunked_seq_QMARK_(seq__62197_62838__$1)){
var c__4609__auto___62839 = cljs.core.chunk_first(seq__62197_62838__$1);
var G__62840 = cljs.core.chunk_rest(seq__62197_62838__$1);
var G__62841 = c__4609__auto___62839;
var G__62842 = cljs.core.count(c__4609__auto___62839);
var G__62843 = (0);
seq__62197_62789 = G__62840;
chunk__62204_62790 = G__62841;
count__62205_62791 = G__62842;
i__62206_62792 = G__62843;
continue;
} else {
var vec__62282_62844 = cljs.core.first(seq__62197_62838__$1);
var orig_type_62845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62282_62844,(0),null);
var f_62846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62282_62844,(1),null);
var seq__62198_62848 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62845,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62845,cljs.core.identity])));
var chunk__62200_62849 = null;
var count__62201_62850 = (0);
var i__62202_62851 = (0);
while(true){
if((i__62202_62851 < count__62201_62850)){
var vec__62295_62857 = chunk__62200_62849.cljs$core$IIndexed$_nth$arity$2(null,i__62202_62851);
var actual_type_62858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62295_62857,(0),null);
var factory_62859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62295_62857,(1),null);
var canonical_f_62864 = (function (){var G__62299 = (factory_62859.cljs$core$IFn$_invoke$arity$1 ? factory_62859.cljs$core$IFn$_invoke$arity$1(f_62846) : factory_62859.call(null,f_62846));
var fexpr__62298 = (cljs.core.truth_(selector_62788)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62787,selector_62788):cljs.core.identity);
return (fexpr__62298.cljs$core$IFn$_invoke$arity$1 ? fexpr__62298.cljs$core$IFn$_invoke$arity$1(G__62299) : fexpr__62298.call(null,G__62299));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62787,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62788,actual_type_62858,f_62846], null),canonical_f_62864], 0));

if(cljs.core.truth_(elem_62787.addEventListener)){
elem_62787.addEventListener(cljs.core.name(actual_type_62858),canonical_f_62864);
} else {
elem_62787.attachEvent(cljs.core.name(actual_type_62858),canonical_f_62864);
}


var G__62878 = seq__62198_62848;
var G__62879 = chunk__62200_62849;
var G__62880 = count__62201_62850;
var G__62881 = (i__62202_62851 + (1));
seq__62198_62848 = G__62878;
chunk__62200_62849 = G__62879;
count__62201_62850 = G__62880;
i__62202_62851 = G__62881;
continue;
} else {
var temp__5735__auto___62883__$1 = cljs.core.seq(seq__62198_62848);
if(temp__5735__auto___62883__$1){
var seq__62198_62884__$1 = temp__5735__auto___62883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62198_62884__$1)){
var c__4609__auto___62885 = cljs.core.chunk_first(seq__62198_62884__$1);
var G__62890 = cljs.core.chunk_rest(seq__62198_62884__$1);
var G__62891 = c__4609__auto___62885;
var G__62892 = cljs.core.count(c__4609__auto___62885);
var G__62893 = (0);
seq__62198_62848 = G__62890;
chunk__62200_62849 = G__62891;
count__62201_62850 = G__62892;
i__62202_62851 = G__62893;
continue;
} else {
var vec__62300_62894 = cljs.core.first(seq__62198_62884__$1);
var actual_type_62895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300_62894,(0),null);
var factory_62896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300_62894,(1),null);
var canonical_f_62897 = (function (){var G__62304 = (factory_62896.cljs$core$IFn$_invoke$arity$1 ? factory_62896.cljs$core$IFn$_invoke$arity$1(f_62846) : factory_62896.call(null,f_62846));
var fexpr__62303 = (cljs.core.truth_(selector_62788)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62787,selector_62788):cljs.core.identity);
return (fexpr__62303.cljs$core$IFn$_invoke$arity$1 ? fexpr__62303.cljs$core$IFn$_invoke$arity$1(G__62304) : fexpr__62303.call(null,G__62304));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62787,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62788,actual_type_62895,f_62846], null),canonical_f_62897], 0));

if(cljs.core.truth_(elem_62787.addEventListener)){
elem_62787.addEventListener(cljs.core.name(actual_type_62895),canonical_f_62897);
} else {
elem_62787.attachEvent(cljs.core.name(actual_type_62895),canonical_f_62897);
}


var G__62898 = cljs.core.next(seq__62198_62884__$1);
var G__62899 = null;
var G__62900 = (0);
var G__62901 = (0);
seq__62198_62848 = G__62898;
chunk__62200_62849 = G__62899;
count__62201_62850 = G__62900;
i__62202_62851 = G__62901;
continue;
}
} else {
}
}
break;
}

var G__62902 = cljs.core.next(seq__62197_62838__$1);
var G__62903 = null;
var G__62904 = (0);
var G__62905 = (0);
seq__62197_62789 = G__62902;
chunk__62204_62790 = G__62903;
count__62205_62791 = G__62904;
i__62206_62792 = G__62905;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq62192){
var G__62193 = cljs.core.first(seq62192);
var seq62192__$1 = cljs.core.next(seq62192);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62193,seq62192__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62906 = arguments.length;
var i__4790__auto___62907 = (0);
while(true){
if((i__4790__auto___62907 < len__4789__auto___62906)){
args__4795__auto__.push((arguments[i__4790__auto___62907]));

var G__62908 = (i__4790__auto___62907 + (1));
i__4790__auto___62907 = G__62908;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__62307_62909 = dommy.core.elem_and_selector(elem_sel);
var elem_62910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62307_62909,(0),null);
var selector_62911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62307_62909,(1),null);
var seq__62310_62912 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62317_62913 = null;
var count__62318_62914 = (0);
var i__62319_62915 = (0);
while(true){
if((i__62319_62915 < count__62318_62914)){
var vec__62356_62916 = chunk__62317_62913.cljs$core$IIndexed$_nth$arity$2(null,i__62319_62915);
var orig_type_62917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62356_62916,(0),null);
var f_62918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62356_62916,(1),null);
var seq__62320_62919 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62917,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62917,cljs.core.identity])));
var chunk__62322_62920 = null;
var count__62323_62921 = (0);
var i__62324_62922 = (0);
while(true){
if((i__62324_62922 < count__62323_62921)){
var vec__62365_62923 = chunk__62322_62920.cljs$core$IIndexed$_nth$arity$2(null,i__62324_62922);
var actual_type_62924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62365_62923,(0),null);
var __62925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62365_62923,(1),null);
var keys_62926 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62911,actual_type_62924,f_62918], null);
var canonical_f_62927 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62910),keys_62926);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62910,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62926], 0));

if(cljs.core.truth_(elem_62910.removeEventListener)){
elem_62910.removeEventListener(cljs.core.name(actual_type_62924),canonical_f_62927);
} else {
elem_62910.detachEvent(cljs.core.name(actual_type_62924),canonical_f_62927);
}


var G__62928 = seq__62320_62919;
var G__62929 = chunk__62322_62920;
var G__62930 = count__62323_62921;
var G__62931 = (i__62324_62922 + (1));
seq__62320_62919 = G__62928;
chunk__62322_62920 = G__62929;
count__62323_62921 = G__62930;
i__62324_62922 = G__62931;
continue;
} else {
var temp__5735__auto___62932 = cljs.core.seq(seq__62320_62919);
if(temp__5735__auto___62932){
var seq__62320_62933__$1 = temp__5735__auto___62932;
if(cljs.core.chunked_seq_QMARK_(seq__62320_62933__$1)){
var c__4609__auto___62934 = cljs.core.chunk_first(seq__62320_62933__$1);
var G__62935 = cljs.core.chunk_rest(seq__62320_62933__$1);
var G__62936 = c__4609__auto___62934;
var G__62937 = cljs.core.count(c__4609__auto___62934);
var G__62938 = (0);
seq__62320_62919 = G__62935;
chunk__62322_62920 = G__62936;
count__62323_62921 = G__62937;
i__62324_62922 = G__62938;
continue;
} else {
var vec__62368_62939 = cljs.core.first(seq__62320_62933__$1);
var actual_type_62940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62368_62939,(0),null);
var __62941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62368_62939,(1),null);
var keys_62942 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62911,actual_type_62940,f_62918], null);
var canonical_f_62943 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62910),keys_62942);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62910,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62942], 0));

if(cljs.core.truth_(elem_62910.removeEventListener)){
elem_62910.removeEventListener(cljs.core.name(actual_type_62940),canonical_f_62943);
} else {
elem_62910.detachEvent(cljs.core.name(actual_type_62940),canonical_f_62943);
}


var G__62945 = cljs.core.next(seq__62320_62933__$1);
var G__62946 = null;
var G__62947 = (0);
var G__62948 = (0);
seq__62320_62919 = G__62945;
chunk__62322_62920 = G__62946;
count__62323_62921 = G__62947;
i__62324_62922 = G__62948;
continue;
}
} else {
}
}
break;
}

var G__62949 = seq__62310_62912;
var G__62950 = chunk__62317_62913;
var G__62951 = count__62318_62914;
var G__62952 = (i__62319_62915 + (1));
seq__62310_62912 = G__62949;
chunk__62317_62913 = G__62950;
count__62318_62914 = G__62951;
i__62319_62915 = G__62952;
continue;
} else {
var temp__5735__auto___62953 = cljs.core.seq(seq__62310_62912);
if(temp__5735__auto___62953){
var seq__62310_62954__$1 = temp__5735__auto___62953;
if(cljs.core.chunked_seq_QMARK_(seq__62310_62954__$1)){
var c__4609__auto___62955 = cljs.core.chunk_first(seq__62310_62954__$1);
var G__62957 = cljs.core.chunk_rest(seq__62310_62954__$1);
var G__62958 = c__4609__auto___62955;
var G__62959 = cljs.core.count(c__4609__auto___62955);
var G__62960 = (0);
seq__62310_62912 = G__62957;
chunk__62317_62913 = G__62958;
count__62318_62914 = G__62959;
i__62319_62915 = G__62960;
continue;
} else {
var vec__62371_62961 = cljs.core.first(seq__62310_62954__$1);
var orig_type_62962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62371_62961,(0),null);
var f_62963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62371_62961,(1),null);
var seq__62311_62964 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62962,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62962,cljs.core.identity])));
var chunk__62313_62965 = null;
var count__62314_62966 = (0);
var i__62315_62967 = (0);
while(true){
if((i__62315_62967 < count__62314_62966)){
var vec__62380_62971 = chunk__62313_62965.cljs$core$IIndexed$_nth$arity$2(null,i__62315_62967);
var actual_type_62972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62380_62971,(0),null);
var __62973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62380_62971,(1),null);
var keys_62974 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62911,actual_type_62972,f_62963], null);
var canonical_f_62975 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62910),keys_62974);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62910,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62974], 0));

if(cljs.core.truth_(elem_62910.removeEventListener)){
elem_62910.removeEventListener(cljs.core.name(actual_type_62972),canonical_f_62975);
} else {
elem_62910.detachEvent(cljs.core.name(actual_type_62972),canonical_f_62975);
}


var G__62979 = seq__62311_62964;
var G__62980 = chunk__62313_62965;
var G__62981 = count__62314_62966;
var G__62982 = (i__62315_62967 + (1));
seq__62311_62964 = G__62979;
chunk__62313_62965 = G__62980;
count__62314_62966 = G__62981;
i__62315_62967 = G__62982;
continue;
} else {
var temp__5735__auto___62983__$1 = cljs.core.seq(seq__62311_62964);
if(temp__5735__auto___62983__$1){
var seq__62311_62984__$1 = temp__5735__auto___62983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62311_62984__$1)){
var c__4609__auto___62985 = cljs.core.chunk_first(seq__62311_62984__$1);
var G__62986 = cljs.core.chunk_rest(seq__62311_62984__$1);
var G__62987 = c__4609__auto___62985;
var G__62988 = cljs.core.count(c__4609__auto___62985);
var G__62989 = (0);
seq__62311_62964 = G__62986;
chunk__62313_62965 = G__62987;
count__62314_62966 = G__62988;
i__62315_62967 = G__62989;
continue;
} else {
var vec__62383_62990 = cljs.core.first(seq__62311_62984__$1);
var actual_type_62991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62383_62990,(0),null);
var __62992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62383_62990,(1),null);
var keys_62995 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62911,actual_type_62991,f_62963], null);
var canonical_f_62996 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62910),keys_62995);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62910,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62995], 0));

if(cljs.core.truth_(elem_62910.removeEventListener)){
elem_62910.removeEventListener(cljs.core.name(actual_type_62991),canonical_f_62996);
} else {
elem_62910.detachEvent(cljs.core.name(actual_type_62991),canonical_f_62996);
}


var G__63001 = cljs.core.next(seq__62311_62984__$1);
var G__63002 = null;
var G__63003 = (0);
var G__63004 = (0);
seq__62311_62964 = G__63001;
chunk__62313_62965 = G__63002;
count__62314_62966 = G__63003;
i__62315_62967 = G__63004;
continue;
}
} else {
}
}
break;
}

var G__63005 = cljs.core.next(seq__62310_62954__$1);
var G__63006 = null;
var G__63007 = (0);
var G__63008 = (0);
seq__62310_62912 = G__63005;
chunk__62317_62913 = G__63006;
count__62318_62914 = G__63007;
i__62319_62915 = G__63008;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq62305){
var G__62306 = cljs.core.first(seq62305);
var seq62305__$1 = cljs.core.next(seq62305);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62306,seq62305__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63010 = arguments.length;
var i__4790__auto___63011 = (0);
while(true){
if((i__4790__auto___63011 < len__4789__auto___63010)){
args__4795__auto__.push((arguments[i__4790__auto___63011]));

var G__63012 = (i__4790__auto___63011 + (1));
i__4790__auto___63011 = G__63012;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__62388_63013 = dommy.core.elem_and_selector(elem_sel);
var elem_63014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62388_63013,(0),null);
var selector_63015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62388_63013,(1),null);
var seq__62391_63016 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62392_63017 = null;
var count__62393_63018 = (0);
var i__62394_63019 = (0);
while(true){
if((i__62394_63019 < count__62393_63018)){
var vec__62401_63020 = chunk__62392_63017.cljs$core$IIndexed$_nth$arity$2(null,i__62394_63019);
var type_63021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401_63020,(0),null);
var f_63022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401_63020,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_63021,((function (seq__62391_63016,chunk__62392_63017,count__62393_63018,i__62394_63019,vec__62401_63020,type_63021,f_63022,vec__62388_63013,elem_63014,selector_63015){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_63021,dommy$core$this_fn], 0));

return (f_63022.cljs$core$IFn$_invoke$arity$1 ? f_63022.cljs$core$IFn$_invoke$arity$1(e) : f_63022.call(null,e));
});})(seq__62391_63016,chunk__62392_63017,count__62393_63018,i__62394_63019,vec__62401_63020,type_63021,f_63022,vec__62388_63013,elem_63014,selector_63015))
], 0));


var G__63023 = seq__62391_63016;
var G__63024 = chunk__62392_63017;
var G__63025 = count__62393_63018;
var G__63026 = (i__62394_63019 + (1));
seq__62391_63016 = G__63023;
chunk__62392_63017 = G__63024;
count__62393_63018 = G__63025;
i__62394_63019 = G__63026;
continue;
} else {
var temp__5735__auto___63027 = cljs.core.seq(seq__62391_63016);
if(temp__5735__auto___63027){
var seq__62391_63028__$1 = temp__5735__auto___63027;
if(cljs.core.chunked_seq_QMARK_(seq__62391_63028__$1)){
var c__4609__auto___63029 = cljs.core.chunk_first(seq__62391_63028__$1);
var G__63030 = cljs.core.chunk_rest(seq__62391_63028__$1);
var G__63031 = c__4609__auto___63029;
var G__63032 = cljs.core.count(c__4609__auto___63029);
var G__63033 = (0);
seq__62391_63016 = G__63030;
chunk__62392_63017 = G__63031;
count__62393_63018 = G__63032;
i__62394_63019 = G__63033;
continue;
} else {
var vec__62404_63034 = cljs.core.first(seq__62391_63028__$1);
var type_63035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404_63034,(0),null);
var f_63036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404_63034,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_63035,((function (seq__62391_63016,chunk__62392_63017,count__62393_63018,i__62394_63019,vec__62404_63034,type_63035,f_63036,seq__62391_63028__$1,temp__5735__auto___63027,vec__62388_63013,elem_63014,selector_63015){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_63035,dommy$core$this_fn], 0));

return (f_63036.cljs$core$IFn$_invoke$arity$1 ? f_63036.cljs$core$IFn$_invoke$arity$1(e) : f_63036.call(null,e));
});})(seq__62391_63016,chunk__62392_63017,count__62393_63018,i__62394_63019,vec__62404_63034,type_63035,f_63036,seq__62391_63028__$1,temp__5735__auto___63027,vec__62388_63013,elem_63014,selector_63015))
], 0));


var G__63037 = cljs.core.next(seq__62391_63028__$1);
var G__63038 = null;
var G__63039 = (0);
var G__63040 = (0);
seq__62391_63016 = G__63037;
chunk__62392_63017 = G__63038;
count__62393_63018 = G__63039;
i__62394_63019 = G__63040;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq62386){
var G__62387 = cljs.core.first(seq62386);
var seq62386__$1 = cljs.core.next(seq62386);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62387,seq62386__$1);
}));


//# sourceMappingURL=dommy.core.js.map
