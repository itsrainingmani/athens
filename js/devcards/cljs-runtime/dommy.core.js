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
var G__61092 = arguments.length;
switch (G__61092) {
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
var G__61102 = arguments.length;
switch (G__61102) {
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
var G__61118 = arguments.length;
switch (G__61118) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__61116_SHARP_){
return (!((p1__61116_SHARP_ === base)));
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
var len__4789__auto___61481 = arguments.length;
var i__4790__auto___61482 = (0);
while(true){
if((i__4790__auto___61482 < len__4789__auto___61481)){
args__4795__auto__.push((arguments[i__4790__auto___61482]));

var G__61483 = (i__4790__auto___61482 + (1));
i__4790__auto___61482 = G__61483;
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
var seq__61124_61484 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__61125_61485 = null;
var count__61126_61486 = (0);
var i__61127_61487 = (0);
while(true){
if((i__61127_61487 < count__61126_61486)){
var vec__61134_61488 = chunk__61125_61485.cljs$core$IIndexed$_nth$arity$2(null,i__61127_61487);
var k_61489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61134_61488,(0),null);
var v_61490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61134_61488,(1),null);
style.setProperty(dommy.utils.as_str(k_61489),v_61490);


var G__61491 = seq__61124_61484;
var G__61492 = chunk__61125_61485;
var G__61493 = count__61126_61486;
var G__61494 = (i__61127_61487 + (1));
seq__61124_61484 = G__61491;
chunk__61125_61485 = G__61492;
count__61126_61486 = G__61493;
i__61127_61487 = G__61494;
continue;
} else {
var temp__5735__auto___61495 = cljs.core.seq(seq__61124_61484);
if(temp__5735__auto___61495){
var seq__61124_61496__$1 = temp__5735__auto___61495;
if(cljs.core.chunked_seq_QMARK_(seq__61124_61496__$1)){
var c__4609__auto___61497 = cljs.core.chunk_first(seq__61124_61496__$1);
var G__61498 = cljs.core.chunk_rest(seq__61124_61496__$1);
var G__61499 = c__4609__auto___61497;
var G__61500 = cljs.core.count(c__4609__auto___61497);
var G__61501 = (0);
seq__61124_61484 = G__61498;
chunk__61125_61485 = G__61499;
count__61126_61486 = G__61500;
i__61127_61487 = G__61501;
continue;
} else {
var vec__61137_61502 = cljs.core.first(seq__61124_61496__$1);
var k_61503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61137_61502,(0),null);
var v_61504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61137_61502,(1),null);
style.setProperty(dommy.utils.as_str(k_61503),v_61504);


var G__61505 = cljs.core.next(seq__61124_61496__$1);
var G__61506 = null;
var G__61507 = (0);
var G__61508 = (0);
seq__61124_61484 = G__61505;
chunk__61125_61485 = G__61506;
count__61126_61486 = G__61507;
i__61127_61487 = G__61508;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq61122){
var G__61123 = cljs.core.first(seq61122);
var seq61122__$1 = cljs.core.next(seq61122);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61123,seq61122__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61513 = arguments.length;
var i__4790__auto___61514 = (0);
while(true){
if((i__4790__auto___61514 < len__4789__auto___61513)){
args__4795__auto__.push((arguments[i__4790__auto___61514]));

var G__61515 = (i__4790__auto___61514 + (1));
i__4790__auto___61514 = G__61515;
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
var seq__61142_61516 = cljs.core.seq(keywords);
var chunk__61143_61517 = null;
var count__61144_61518 = (0);
var i__61145_61519 = (0);
while(true){
if((i__61145_61519 < count__61144_61518)){
var kw_61520 = chunk__61143_61517.cljs$core$IIndexed$_nth$arity$2(null,i__61145_61519);
style.removeProperty(dommy.utils.as_str(kw_61520));


var G__61521 = seq__61142_61516;
var G__61522 = chunk__61143_61517;
var G__61523 = count__61144_61518;
var G__61524 = (i__61145_61519 + (1));
seq__61142_61516 = G__61521;
chunk__61143_61517 = G__61522;
count__61144_61518 = G__61523;
i__61145_61519 = G__61524;
continue;
} else {
var temp__5735__auto___61525 = cljs.core.seq(seq__61142_61516);
if(temp__5735__auto___61525){
var seq__61142_61526__$1 = temp__5735__auto___61525;
if(cljs.core.chunked_seq_QMARK_(seq__61142_61526__$1)){
var c__4609__auto___61527 = cljs.core.chunk_first(seq__61142_61526__$1);
var G__61528 = cljs.core.chunk_rest(seq__61142_61526__$1);
var G__61529 = c__4609__auto___61527;
var G__61530 = cljs.core.count(c__4609__auto___61527);
var G__61531 = (0);
seq__61142_61516 = G__61528;
chunk__61143_61517 = G__61529;
count__61144_61518 = G__61530;
i__61145_61519 = G__61531;
continue;
} else {
var kw_61532 = cljs.core.first(seq__61142_61526__$1);
style.removeProperty(dommy.utils.as_str(kw_61532));


var G__61533 = cljs.core.next(seq__61142_61526__$1);
var G__61534 = null;
var G__61535 = (0);
var G__61536 = (0);
seq__61142_61516 = G__61533;
chunk__61143_61517 = G__61534;
count__61144_61518 = G__61535;
i__61145_61519 = G__61536;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq61140){
var G__61141 = cljs.core.first(seq61140);
var seq61140__$1 = cljs.core.next(seq61140);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61141,seq61140__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61537 = arguments.length;
var i__4790__auto___61538 = (0);
while(true){
if((i__4790__auto___61538 < len__4789__auto___61537)){
args__4795__auto__.push((arguments[i__4790__auto___61538]));

var G__61539 = (i__4790__auto___61538 + (1));
i__4790__auto___61538 = G__61539;
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

var seq__61148_61540 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__61149_61541 = null;
var count__61150_61542 = (0);
var i__61151_61543 = (0);
while(true){
if((i__61151_61543 < count__61150_61542)){
var vec__61158_61544 = chunk__61149_61541.cljs$core$IIndexed$_nth$arity$2(null,i__61151_61543);
var k_61545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61158_61544,(0),null);
var v_61546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61158_61544,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61545,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_61546),"px"].join('')], 0));


var G__61547 = seq__61148_61540;
var G__61548 = chunk__61149_61541;
var G__61549 = count__61150_61542;
var G__61550 = (i__61151_61543 + (1));
seq__61148_61540 = G__61547;
chunk__61149_61541 = G__61548;
count__61150_61542 = G__61549;
i__61151_61543 = G__61550;
continue;
} else {
var temp__5735__auto___61552 = cljs.core.seq(seq__61148_61540);
if(temp__5735__auto___61552){
var seq__61148_61553__$1 = temp__5735__auto___61552;
if(cljs.core.chunked_seq_QMARK_(seq__61148_61553__$1)){
var c__4609__auto___61554 = cljs.core.chunk_first(seq__61148_61553__$1);
var G__61555 = cljs.core.chunk_rest(seq__61148_61553__$1);
var G__61556 = c__4609__auto___61554;
var G__61557 = cljs.core.count(c__4609__auto___61554);
var G__61558 = (0);
seq__61148_61540 = G__61555;
chunk__61149_61541 = G__61556;
count__61150_61542 = G__61557;
i__61151_61543 = G__61558;
continue;
} else {
var vec__61161_61559 = cljs.core.first(seq__61148_61553__$1);
var k_61560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161_61559,(0),null);
var v_61561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161_61559,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61560,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_61561),"px"].join('')], 0));


var G__61562 = cljs.core.next(seq__61148_61553__$1);
var G__61563 = null;
var G__61564 = (0);
var G__61565 = (0);
seq__61148_61540 = G__61562;
chunk__61149_61541 = G__61563;
count__61150_61542 = G__61564;
i__61151_61543 = G__61565;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq61146){
var G__61147 = cljs.core.first(seq61146);
var seq61146__$1 = cljs.core.next(seq61146);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61147,seq61146__$1);
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
var G__61169 = arguments.length;
switch (G__61169) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61571 = arguments.length;
var i__4790__auto___61572 = (0);
while(true){
if((i__4790__auto___61572 < len__4789__auto___61571)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61572]));

var G__61573 = (i__4790__auto___61572 + (1));
i__4790__auto___61572 = G__61573;
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
var G__61170 = elem;
(G__61170[k__$1] = v);

return G__61170;
} else {
var G__61171 = elem;
G__61171.setAttribute(k__$1,v);

return G__61171;
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

var seq__61172_61577 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__61173_61578 = null;
var count__61174_61579 = (0);
var i__61175_61580 = (0);
while(true){
if((i__61175_61580 < count__61174_61579)){
var vec__61182_61582 = chunk__61173_61578.cljs$core$IIndexed$_nth$arity$2(null,i__61175_61580);
var k_61583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61182_61582,(0),null);
var v_61584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61182_61582,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_61583__$1,v_61584__$1);


var G__61585 = seq__61172_61577;
var G__61586 = chunk__61173_61578;
var G__61587 = count__61174_61579;
var G__61588 = (i__61175_61580 + (1));
seq__61172_61577 = G__61585;
chunk__61173_61578 = G__61586;
count__61174_61579 = G__61587;
i__61175_61580 = G__61588;
continue;
} else {
var temp__5735__auto___61589 = cljs.core.seq(seq__61172_61577);
if(temp__5735__auto___61589){
var seq__61172_61591__$1 = temp__5735__auto___61589;
if(cljs.core.chunked_seq_QMARK_(seq__61172_61591__$1)){
var c__4609__auto___61593 = cljs.core.chunk_first(seq__61172_61591__$1);
var G__61595 = cljs.core.chunk_rest(seq__61172_61591__$1);
var G__61596 = c__4609__auto___61593;
var G__61597 = cljs.core.count(c__4609__auto___61593);
var G__61598 = (0);
seq__61172_61577 = G__61595;
chunk__61173_61578 = G__61596;
count__61174_61579 = G__61597;
i__61175_61580 = G__61598;
continue;
} else {
var vec__61185_61599 = cljs.core.first(seq__61172_61591__$1);
var k_61600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61185_61599,(0),null);
var v_61601__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61185_61599,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_61600__$1,v_61601__$1);


var G__61602 = cljs.core.next(seq__61172_61591__$1);
var G__61603 = null;
var G__61604 = (0);
var G__61605 = (0);
seq__61172_61577 = G__61602;
chunk__61173_61578 = G__61603;
count__61174_61579 = G__61604;
i__61175_61580 = G__61605;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq61165){
var G__61166 = cljs.core.first(seq61165);
var seq61165__$1 = cljs.core.next(seq61165);
var G__61167 = cljs.core.first(seq61165__$1);
var seq61165__$2 = cljs.core.next(seq61165__$1);
var G__61168 = cljs.core.first(seq61165__$2);
var seq61165__$3 = cljs.core.next(seq61165__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61166,G__61167,G__61168,seq61165__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__61192 = arguments.length;
switch (G__61192) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61607 = arguments.length;
var i__4790__auto___61608 = (0);
while(true){
if((i__4790__auto___61608 < len__4789__auto___61607)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61608]));

var G__61610 = (i__4790__auto___61608 + (1));
i__4790__auto___61608 = G__61610;
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
var k_61611__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__61193 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__61193.cljs$core$IFn$_invoke$arity$1 ? fexpr__61193.cljs$core$IFn$_invoke$arity$1(k_61611__$1) : fexpr__61193.call(null,k_61611__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_61611__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__61194_61612 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__61195_61613 = null;
var count__61196_61614 = (0);
var i__61197_61615 = (0);
while(true){
if((i__61197_61615 < count__61196_61614)){
var k_61616__$1 = chunk__61195_61613.cljs$core$IIndexed$_nth$arity$2(null,i__61197_61615);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_61616__$1);


var G__61617 = seq__61194_61612;
var G__61618 = chunk__61195_61613;
var G__61619 = count__61196_61614;
var G__61620 = (i__61197_61615 + (1));
seq__61194_61612 = G__61617;
chunk__61195_61613 = G__61618;
count__61196_61614 = G__61619;
i__61197_61615 = G__61620;
continue;
} else {
var temp__5735__auto___61621 = cljs.core.seq(seq__61194_61612);
if(temp__5735__auto___61621){
var seq__61194_61622__$1 = temp__5735__auto___61621;
if(cljs.core.chunked_seq_QMARK_(seq__61194_61622__$1)){
var c__4609__auto___61623 = cljs.core.chunk_first(seq__61194_61622__$1);
var G__61624 = cljs.core.chunk_rest(seq__61194_61622__$1);
var G__61625 = c__4609__auto___61623;
var G__61626 = cljs.core.count(c__4609__auto___61623);
var G__61627 = (0);
seq__61194_61612 = G__61624;
chunk__61195_61613 = G__61625;
count__61196_61614 = G__61626;
i__61197_61615 = G__61627;
continue;
} else {
var k_61628__$1 = cljs.core.first(seq__61194_61622__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_61628__$1);


var G__61629 = cljs.core.next(seq__61194_61622__$1);
var G__61630 = null;
var G__61631 = (0);
var G__61632 = (0);
seq__61194_61612 = G__61629;
chunk__61195_61613 = G__61630;
count__61196_61614 = G__61631;
i__61197_61615 = G__61632;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq61189){
var G__61190 = cljs.core.first(seq61189);
var seq61189__$1 = cljs.core.next(seq61189);
var G__61191 = cljs.core.first(seq61189__$1);
var seq61189__$2 = cljs.core.next(seq61189__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61190,G__61191,seq61189__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__61199 = arguments.length;
switch (G__61199) {
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
var G__61204 = arguments.length;
switch (G__61204) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61638 = arguments.length;
var i__4790__auto___61639 = (0);
while(true){
if((i__4790__auto___61639 < len__4789__auto___61638)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61639]));

var G__61640 = (i__4790__auto___61639 + (1));
i__4790__auto___61639 = G__61640;
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
var temp__5733__auto___61641 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___61641)){
var class_list_61642 = temp__5733__auto___61641;
var seq__61205_61643 = cljs.core.seq(classes__$1);
var chunk__61206_61644 = null;
var count__61207_61645 = (0);
var i__61208_61646 = (0);
while(true){
if((i__61208_61646 < count__61207_61645)){
var c_61647 = chunk__61206_61644.cljs$core$IIndexed$_nth$arity$2(null,i__61208_61646);
class_list_61642.add(c_61647);


var G__61648 = seq__61205_61643;
var G__61649 = chunk__61206_61644;
var G__61650 = count__61207_61645;
var G__61651 = (i__61208_61646 + (1));
seq__61205_61643 = G__61648;
chunk__61206_61644 = G__61649;
count__61207_61645 = G__61650;
i__61208_61646 = G__61651;
continue;
} else {
var temp__5735__auto___61652 = cljs.core.seq(seq__61205_61643);
if(temp__5735__auto___61652){
var seq__61205_61653__$1 = temp__5735__auto___61652;
if(cljs.core.chunked_seq_QMARK_(seq__61205_61653__$1)){
var c__4609__auto___61654 = cljs.core.chunk_first(seq__61205_61653__$1);
var G__61655 = cljs.core.chunk_rest(seq__61205_61653__$1);
var G__61656 = c__4609__auto___61654;
var G__61657 = cljs.core.count(c__4609__auto___61654);
var G__61658 = (0);
seq__61205_61643 = G__61655;
chunk__61206_61644 = G__61656;
count__61207_61645 = G__61657;
i__61208_61646 = G__61658;
continue;
} else {
var c_61659 = cljs.core.first(seq__61205_61653__$1);
class_list_61642.add(c_61659);


var G__61660 = cljs.core.next(seq__61205_61653__$1);
var G__61661 = null;
var G__61662 = (0);
var G__61663 = (0);
seq__61205_61643 = G__61660;
chunk__61206_61644 = G__61661;
count__61207_61645 = G__61662;
i__61208_61646 = G__61663;
continue;
}
} else {
}
}
break;
}
} else {
var seq__61209_61664 = cljs.core.seq(classes__$1);
var chunk__61210_61665 = null;
var count__61211_61666 = (0);
var i__61212_61667 = (0);
while(true){
if((i__61212_61667 < count__61211_61666)){
var c_61668 = chunk__61210_61665.cljs$core$IIndexed$_nth$arity$2(null,i__61212_61667);
var class_name_61669 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_61669,c_61668))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_61669 === ""))?c_61668:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_61669)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_61668)].join('')));
}


var G__61670 = seq__61209_61664;
var G__61671 = chunk__61210_61665;
var G__61672 = count__61211_61666;
var G__61673 = (i__61212_61667 + (1));
seq__61209_61664 = G__61670;
chunk__61210_61665 = G__61671;
count__61211_61666 = G__61672;
i__61212_61667 = G__61673;
continue;
} else {
var temp__5735__auto___61674 = cljs.core.seq(seq__61209_61664);
if(temp__5735__auto___61674){
var seq__61209_61675__$1 = temp__5735__auto___61674;
if(cljs.core.chunked_seq_QMARK_(seq__61209_61675__$1)){
var c__4609__auto___61676 = cljs.core.chunk_first(seq__61209_61675__$1);
var G__61677 = cljs.core.chunk_rest(seq__61209_61675__$1);
var G__61678 = c__4609__auto___61676;
var G__61679 = cljs.core.count(c__4609__auto___61676);
var G__61680 = (0);
seq__61209_61664 = G__61677;
chunk__61210_61665 = G__61678;
count__61211_61666 = G__61679;
i__61212_61667 = G__61680;
continue;
} else {
var c_61681 = cljs.core.first(seq__61209_61675__$1);
var class_name_61682 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_61682,c_61681))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_61682 === ""))?c_61681:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_61682)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_61681)].join('')));
}


var G__61683 = cljs.core.next(seq__61209_61675__$1);
var G__61684 = null;
var G__61685 = (0);
var G__61686 = (0);
seq__61209_61664 = G__61683;
chunk__61210_61665 = G__61684;
count__61211_61666 = G__61685;
i__61212_61667 = G__61686;
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
var seq__61213_61687 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__61214_61688 = null;
var count__61215_61689 = (0);
var i__61216_61690 = (0);
while(true){
if((i__61216_61690 < count__61215_61689)){
var c_61691 = chunk__61214_61688.cljs$core$IIndexed$_nth$arity$2(null,i__61216_61690);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_61691);


var G__61692 = seq__61213_61687;
var G__61693 = chunk__61214_61688;
var G__61694 = count__61215_61689;
var G__61695 = (i__61216_61690 + (1));
seq__61213_61687 = G__61692;
chunk__61214_61688 = G__61693;
count__61215_61689 = G__61694;
i__61216_61690 = G__61695;
continue;
} else {
var temp__5735__auto___61696 = cljs.core.seq(seq__61213_61687);
if(temp__5735__auto___61696){
var seq__61213_61697__$1 = temp__5735__auto___61696;
if(cljs.core.chunked_seq_QMARK_(seq__61213_61697__$1)){
var c__4609__auto___61698 = cljs.core.chunk_first(seq__61213_61697__$1);
var G__61699 = cljs.core.chunk_rest(seq__61213_61697__$1);
var G__61700 = c__4609__auto___61698;
var G__61701 = cljs.core.count(c__4609__auto___61698);
var G__61702 = (0);
seq__61213_61687 = G__61699;
chunk__61214_61688 = G__61700;
count__61215_61689 = G__61701;
i__61216_61690 = G__61702;
continue;
} else {
var c_61707 = cljs.core.first(seq__61213_61697__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_61707);


var G__61708 = cljs.core.next(seq__61213_61697__$1);
var G__61709 = null;
var G__61710 = (0);
var G__61711 = (0);
seq__61213_61687 = G__61708;
chunk__61214_61688 = G__61709;
count__61215_61689 = G__61710;
i__61216_61690 = G__61711;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq61201){
var G__61202 = cljs.core.first(seq61201);
var seq61201__$1 = cljs.core.next(seq61201);
var G__61203 = cljs.core.first(seq61201__$1);
var seq61201__$2 = cljs.core.next(seq61201__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61202,G__61203,seq61201__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__61221 = arguments.length;
switch (G__61221) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61728 = arguments.length;
var i__4790__auto___61729 = (0);
while(true){
if((i__4790__auto___61729 < len__4789__auto___61728)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61729]));

var G__61730 = (i__4790__auto___61729 + (1));
i__4790__auto___61729 = G__61730;
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
var temp__5733__auto___61736 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___61736)){
var class_list_61737 = temp__5733__auto___61736;
class_list_61737.remove(c__$1);
} else {
var class_name_61738 = dommy.core.class$(elem);
var new_class_name_61739 = dommy.utils.remove_class_str(class_name_61738,c__$1);
if((class_name_61738 === new_class_name_61739)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_61739);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__61222 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__61223 = null;
var count__61224 = (0);
var i__61225 = (0);
while(true){
if((i__61225 < count__61224)){
var c = chunk__61223.cljs$core$IIndexed$_nth$arity$2(null,i__61225);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__61748 = seq__61222;
var G__61749 = chunk__61223;
var G__61750 = count__61224;
var G__61751 = (i__61225 + (1));
seq__61222 = G__61748;
chunk__61223 = G__61749;
count__61224 = G__61750;
i__61225 = G__61751;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61222);
if(temp__5735__auto__){
var seq__61222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61222__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61222__$1);
var G__61752 = cljs.core.chunk_rest(seq__61222__$1);
var G__61753 = c__4609__auto__;
var G__61754 = cljs.core.count(c__4609__auto__);
var G__61755 = (0);
seq__61222 = G__61752;
chunk__61223 = G__61753;
count__61224 = G__61754;
i__61225 = G__61755;
continue;
} else {
var c = cljs.core.first(seq__61222__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__61756 = cljs.core.next(seq__61222__$1);
var G__61757 = null;
var G__61758 = (0);
var G__61759 = (0);
seq__61222 = G__61756;
chunk__61223 = G__61757;
count__61224 = G__61758;
i__61225 = G__61759;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq61218){
var G__61219 = cljs.core.first(seq61218);
var seq61218__$1 = cljs.core.next(seq61218);
var G__61220 = cljs.core.first(seq61218__$1);
var seq61218__$2 = cljs.core.next(seq61218__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61219,G__61220,seq61218__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__61227 = arguments.length;
switch (G__61227) {
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
var temp__5733__auto___61762 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___61762)){
var class_list_61763 = temp__5733__auto___61762;
class_list_61763.toggle(c__$1);
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
var G__61229 = arguments.length;
switch (G__61229) {
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
var G__61231 = arguments.length;
switch (G__61231) {
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
var G__61236 = arguments.length;
switch (G__61236) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61771 = arguments.length;
var i__4790__auto___61772 = (0);
while(true){
if((i__4790__auto___61772 < len__4789__auto___61771)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61772]));

var G__61773 = (i__4790__auto___61772 + (1));
i__4790__auto___61772 = G__61773;
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
var G__61237 = parent;
G__61237.appendChild(child);

return G__61237;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__61238_61776 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__61239_61777 = null;
var count__61240_61778 = (0);
var i__61241_61779 = (0);
while(true){
if((i__61241_61779 < count__61240_61778)){
var c_61780 = chunk__61239_61777.cljs$core$IIndexed$_nth$arity$2(null,i__61241_61779);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61780);


var G__61781 = seq__61238_61776;
var G__61782 = chunk__61239_61777;
var G__61783 = count__61240_61778;
var G__61784 = (i__61241_61779 + (1));
seq__61238_61776 = G__61781;
chunk__61239_61777 = G__61782;
count__61240_61778 = G__61783;
i__61241_61779 = G__61784;
continue;
} else {
var temp__5735__auto___61786 = cljs.core.seq(seq__61238_61776);
if(temp__5735__auto___61786){
var seq__61238_61789__$1 = temp__5735__auto___61786;
if(cljs.core.chunked_seq_QMARK_(seq__61238_61789__$1)){
var c__4609__auto___61790 = cljs.core.chunk_first(seq__61238_61789__$1);
var G__61791 = cljs.core.chunk_rest(seq__61238_61789__$1);
var G__61792 = c__4609__auto___61790;
var G__61793 = cljs.core.count(c__4609__auto___61790);
var G__61794 = (0);
seq__61238_61776 = G__61791;
chunk__61239_61777 = G__61792;
count__61240_61778 = G__61793;
i__61241_61779 = G__61794;
continue;
} else {
var c_61795 = cljs.core.first(seq__61238_61789__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61795);


var G__61800 = cljs.core.next(seq__61238_61789__$1);
var G__61801 = null;
var G__61802 = (0);
var G__61803 = (0);
seq__61238_61776 = G__61800;
chunk__61239_61777 = G__61801;
count__61240_61778 = G__61802;
i__61241_61779 = G__61803;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq61233){
var G__61234 = cljs.core.first(seq61233);
var seq61233__$1 = cljs.core.next(seq61233);
var G__61235 = cljs.core.first(seq61233__$1);
var seq61233__$2 = cljs.core.next(seq61233__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61234,G__61235,seq61233__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__61246 = arguments.length;
switch (G__61246) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___61805 = arguments.length;
var i__4790__auto___61806 = (0);
while(true){
if((i__4790__auto___61806 < len__4789__auto___61805)){
args_arr__4810__auto__.push((arguments[i__4790__auto___61806]));

var G__61807 = (i__4790__auto___61806 + (1));
i__4790__auto___61806 = G__61807;
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
var G__61247 = parent;
G__61247.insertBefore(child,parent.firstChild);

return G__61247;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__61248_61808 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__61249_61809 = null;
var count__61250_61810 = (0);
var i__61251_61811 = (0);
while(true){
if((i__61251_61811 < count__61250_61810)){
var c_61812 = chunk__61249_61809.cljs$core$IIndexed$_nth$arity$2(null,i__61251_61811);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61812);


var G__61813 = seq__61248_61808;
var G__61814 = chunk__61249_61809;
var G__61815 = count__61250_61810;
var G__61816 = (i__61251_61811 + (1));
seq__61248_61808 = G__61813;
chunk__61249_61809 = G__61814;
count__61250_61810 = G__61815;
i__61251_61811 = G__61816;
continue;
} else {
var temp__5735__auto___61817 = cljs.core.seq(seq__61248_61808);
if(temp__5735__auto___61817){
var seq__61248_61818__$1 = temp__5735__auto___61817;
if(cljs.core.chunked_seq_QMARK_(seq__61248_61818__$1)){
var c__4609__auto___61819 = cljs.core.chunk_first(seq__61248_61818__$1);
var G__61820 = cljs.core.chunk_rest(seq__61248_61818__$1);
var G__61821 = c__4609__auto___61819;
var G__61822 = cljs.core.count(c__4609__auto___61819);
var G__61823 = (0);
seq__61248_61808 = G__61820;
chunk__61249_61809 = G__61821;
count__61250_61810 = G__61822;
i__61251_61811 = G__61823;
continue;
} else {
var c_61824 = cljs.core.first(seq__61248_61818__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61824);


var G__61825 = cljs.core.next(seq__61248_61818__$1);
var G__61826 = null;
var G__61827 = (0);
var G__61828 = (0);
seq__61248_61808 = G__61825;
chunk__61249_61809 = G__61826;
count__61250_61810 = G__61827;
i__61251_61811 = G__61828;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq61243){
var G__61244 = cljs.core.first(seq61243);
var seq61243__$1 = cljs.core.next(seq61243);
var G__61245 = cljs.core.first(seq61243__$1);
var seq61243__$2 = cljs.core.next(seq61243__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61244,G__61245,seq61243__$2);
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
var temp__5733__auto___61829 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61829)){
var next_61830 = temp__5733__auto___61829;
dommy.core.insert_before_BANG_(elem,next_61830);
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
var G__61253 = arguments.length;
switch (G__61253) {
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
var G__61254 = p;
G__61254.removeChild(elem);

return G__61254;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61255){
var vec__61256 = p__61255;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61256,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61256,(1),null);
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
var len__4789__auto___61889 = arguments.length;
var i__4790__auto___61890 = (0);
while(true){
if((i__4790__auto___61890 < len__4789__auto___61889)){
args__4795__auto__.push((arguments[i__4790__auto___61890]));

var G__61891 = (i__4790__auto___61890 + (1));
i__4790__auto___61890 = G__61891;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq61259){
var G__61260 = cljs.core.first(seq61259);
var seq61259__$1 = cljs.core.next(seq61259);
var G__61261 = cljs.core.first(seq61259__$1);
var seq61259__$2 = cljs.core.next(seq61259__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61260,G__61261,seq61259__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__61262 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__61262.cljs$core$IFn$_invoke$arity$1 ? fexpr__61262.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__61262.call(null,elem_sel));
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
var len__4789__auto___61892 = arguments.length;
var i__4790__auto___61893 = (0);
while(true){
if((i__4790__auto___61893 < len__4789__auto___61892)){
args__4795__auto__.push((arguments[i__4790__auto___61893]));

var G__61894 = (i__4790__auto___61893 + (1));
i__4790__auto___61893 = G__61894;
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

var vec__61265_61895 = dommy.core.elem_and_selector(elem_sel);
var elem_61896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61265_61895,(0),null);
var selector_61897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61265_61895,(1),null);
var seq__61268_61898 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__61275_61899 = null;
var count__61276_61900 = (0);
var i__61277_61901 = (0);
while(true){
if((i__61277_61901 < count__61276_61900)){
var vec__61330_61902 = chunk__61275_61899.cljs$core$IIndexed$_nth$arity$2(null,i__61277_61901);
var orig_type_61903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330_61902,(0),null);
var f_61904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330_61902,(1),null);
var seq__61278_61905 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61903,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61903,cljs.core.identity])));
var chunk__61280_61906 = null;
var count__61281_61907 = (0);
var i__61282_61908 = (0);
while(true){
if((i__61282_61908 < count__61281_61907)){
var vec__61343_61909 = chunk__61280_61906.cljs$core$IIndexed$_nth$arity$2(null,i__61282_61908);
var actual_type_61910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61343_61909,(0),null);
var factory_61911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61343_61909,(1),null);
var canonical_f_61912 = (function (){var G__61347 = (factory_61911.cljs$core$IFn$_invoke$arity$1 ? factory_61911.cljs$core$IFn$_invoke$arity$1(f_61904) : factory_61911.call(null,f_61904));
var fexpr__61346 = (cljs.core.truth_(selector_61897)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61896,selector_61897):cljs.core.identity);
return (fexpr__61346.cljs$core$IFn$_invoke$arity$1 ? fexpr__61346.cljs$core$IFn$_invoke$arity$1(G__61347) : fexpr__61346.call(null,G__61347));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61896,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61897,actual_type_61910,f_61904], null),canonical_f_61912], 0));

if(cljs.core.truth_(elem_61896.addEventListener)){
elem_61896.addEventListener(cljs.core.name(actual_type_61910),canonical_f_61912);
} else {
elem_61896.attachEvent(cljs.core.name(actual_type_61910),canonical_f_61912);
}


var G__61913 = seq__61278_61905;
var G__61914 = chunk__61280_61906;
var G__61915 = count__61281_61907;
var G__61916 = (i__61282_61908 + (1));
seq__61278_61905 = G__61913;
chunk__61280_61906 = G__61914;
count__61281_61907 = G__61915;
i__61282_61908 = G__61916;
continue;
} else {
var temp__5735__auto___61917 = cljs.core.seq(seq__61278_61905);
if(temp__5735__auto___61917){
var seq__61278_61918__$1 = temp__5735__auto___61917;
if(cljs.core.chunked_seq_QMARK_(seq__61278_61918__$1)){
var c__4609__auto___61919 = cljs.core.chunk_first(seq__61278_61918__$1);
var G__61920 = cljs.core.chunk_rest(seq__61278_61918__$1);
var G__61921 = c__4609__auto___61919;
var G__61922 = cljs.core.count(c__4609__auto___61919);
var G__61923 = (0);
seq__61278_61905 = G__61920;
chunk__61280_61906 = G__61921;
count__61281_61907 = G__61922;
i__61282_61908 = G__61923;
continue;
} else {
var vec__61348_61924 = cljs.core.first(seq__61278_61918__$1);
var actual_type_61925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61348_61924,(0),null);
var factory_61926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61348_61924,(1),null);
var canonical_f_61927 = (function (){var G__61352 = (factory_61926.cljs$core$IFn$_invoke$arity$1 ? factory_61926.cljs$core$IFn$_invoke$arity$1(f_61904) : factory_61926.call(null,f_61904));
var fexpr__61351 = (cljs.core.truth_(selector_61897)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61896,selector_61897):cljs.core.identity);
return (fexpr__61351.cljs$core$IFn$_invoke$arity$1 ? fexpr__61351.cljs$core$IFn$_invoke$arity$1(G__61352) : fexpr__61351.call(null,G__61352));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61896,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61897,actual_type_61925,f_61904], null),canonical_f_61927], 0));

if(cljs.core.truth_(elem_61896.addEventListener)){
elem_61896.addEventListener(cljs.core.name(actual_type_61925),canonical_f_61927);
} else {
elem_61896.attachEvent(cljs.core.name(actual_type_61925),canonical_f_61927);
}


var G__61928 = cljs.core.next(seq__61278_61918__$1);
var G__61929 = null;
var G__61930 = (0);
var G__61931 = (0);
seq__61278_61905 = G__61928;
chunk__61280_61906 = G__61929;
count__61281_61907 = G__61930;
i__61282_61908 = G__61931;
continue;
}
} else {
}
}
break;
}

var G__61932 = seq__61268_61898;
var G__61933 = chunk__61275_61899;
var G__61934 = count__61276_61900;
var G__61935 = (i__61277_61901 + (1));
seq__61268_61898 = G__61932;
chunk__61275_61899 = G__61933;
count__61276_61900 = G__61934;
i__61277_61901 = G__61935;
continue;
} else {
var temp__5735__auto___61936 = cljs.core.seq(seq__61268_61898);
if(temp__5735__auto___61936){
var seq__61268_61937__$1 = temp__5735__auto___61936;
if(cljs.core.chunked_seq_QMARK_(seq__61268_61937__$1)){
var c__4609__auto___61938 = cljs.core.chunk_first(seq__61268_61937__$1);
var G__61939 = cljs.core.chunk_rest(seq__61268_61937__$1);
var G__61940 = c__4609__auto___61938;
var G__61941 = cljs.core.count(c__4609__auto___61938);
var G__61942 = (0);
seq__61268_61898 = G__61939;
chunk__61275_61899 = G__61940;
count__61276_61900 = G__61941;
i__61277_61901 = G__61942;
continue;
} else {
var vec__61353_61943 = cljs.core.first(seq__61268_61937__$1);
var orig_type_61944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61353_61943,(0),null);
var f_61945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61353_61943,(1),null);
var seq__61269_61946 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61944,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61944,cljs.core.identity])));
var chunk__61271_61947 = null;
var count__61272_61948 = (0);
var i__61273_61949 = (0);
while(true){
if((i__61273_61949 < count__61272_61948)){
var vec__61366_61950 = chunk__61271_61947.cljs$core$IIndexed$_nth$arity$2(null,i__61273_61949);
var actual_type_61951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61366_61950,(0),null);
var factory_61952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61366_61950,(1),null);
var canonical_f_61954 = (function (){var G__61370 = (factory_61952.cljs$core$IFn$_invoke$arity$1 ? factory_61952.cljs$core$IFn$_invoke$arity$1(f_61945) : factory_61952.call(null,f_61945));
var fexpr__61369 = (cljs.core.truth_(selector_61897)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61896,selector_61897):cljs.core.identity);
return (fexpr__61369.cljs$core$IFn$_invoke$arity$1 ? fexpr__61369.cljs$core$IFn$_invoke$arity$1(G__61370) : fexpr__61369.call(null,G__61370));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61896,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61897,actual_type_61951,f_61945], null),canonical_f_61954], 0));

if(cljs.core.truth_(elem_61896.addEventListener)){
elem_61896.addEventListener(cljs.core.name(actual_type_61951),canonical_f_61954);
} else {
elem_61896.attachEvent(cljs.core.name(actual_type_61951),canonical_f_61954);
}


var G__61955 = seq__61269_61946;
var G__61956 = chunk__61271_61947;
var G__61957 = count__61272_61948;
var G__61958 = (i__61273_61949 + (1));
seq__61269_61946 = G__61955;
chunk__61271_61947 = G__61956;
count__61272_61948 = G__61957;
i__61273_61949 = G__61958;
continue;
} else {
var temp__5735__auto___61959__$1 = cljs.core.seq(seq__61269_61946);
if(temp__5735__auto___61959__$1){
var seq__61269_61960__$1 = temp__5735__auto___61959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61269_61960__$1)){
var c__4609__auto___61961 = cljs.core.chunk_first(seq__61269_61960__$1);
var G__61962 = cljs.core.chunk_rest(seq__61269_61960__$1);
var G__61963 = c__4609__auto___61961;
var G__61964 = cljs.core.count(c__4609__auto___61961);
var G__61965 = (0);
seq__61269_61946 = G__61962;
chunk__61271_61947 = G__61963;
count__61272_61948 = G__61964;
i__61273_61949 = G__61965;
continue;
} else {
var vec__61371_61966 = cljs.core.first(seq__61269_61960__$1);
var actual_type_61967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61371_61966,(0),null);
var factory_61968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61371_61966,(1),null);
var canonical_f_61969 = (function (){var G__61375 = (factory_61968.cljs$core$IFn$_invoke$arity$1 ? factory_61968.cljs$core$IFn$_invoke$arity$1(f_61945) : factory_61968.call(null,f_61945));
var fexpr__61374 = (cljs.core.truth_(selector_61897)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61896,selector_61897):cljs.core.identity);
return (fexpr__61374.cljs$core$IFn$_invoke$arity$1 ? fexpr__61374.cljs$core$IFn$_invoke$arity$1(G__61375) : fexpr__61374.call(null,G__61375));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61896,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61897,actual_type_61967,f_61945], null),canonical_f_61969], 0));

if(cljs.core.truth_(elem_61896.addEventListener)){
elem_61896.addEventListener(cljs.core.name(actual_type_61967),canonical_f_61969);
} else {
elem_61896.attachEvent(cljs.core.name(actual_type_61967),canonical_f_61969);
}


var G__61974 = cljs.core.next(seq__61269_61960__$1);
var G__61975 = null;
var G__61976 = (0);
var G__61977 = (0);
seq__61269_61946 = G__61974;
chunk__61271_61947 = G__61975;
count__61272_61948 = G__61976;
i__61273_61949 = G__61977;
continue;
}
} else {
}
}
break;
}

var G__61978 = cljs.core.next(seq__61268_61937__$1);
var G__61979 = null;
var G__61980 = (0);
var G__61981 = (0);
seq__61268_61898 = G__61978;
chunk__61275_61899 = G__61979;
count__61276_61900 = G__61980;
i__61277_61901 = G__61981;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq61263){
var G__61264 = cljs.core.first(seq61263);
var seq61263__$1 = cljs.core.next(seq61263);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61264,seq61263__$1);
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
var len__4789__auto___61984 = arguments.length;
var i__4790__auto___61986 = (0);
while(true){
if((i__4790__auto___61986 < len__4789__auto___61984)){
args__4795__auto__.push((arguments[i__4790__auto___61986]));

var G__61987 = (i__4790__auto___61986 + (1));
i__4790__auto___61986 = G__61987;
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

var vec__61378_61991 = dommy.core.elem_and_selector(elem_sel);
var elem_61992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61378_61991,(0),null);
var selector_61993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61378_61991,(1),null);
var seq__61381_61994 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__61388_61995 = null;
var count__61389_61996 = (0);
var i__61390_61997 = (0);
while(true){
if((i__61390_61997 < count__61389_61996)){
var vec__61427_62000 = chunk__61388_61995.cljs$core$IIndexed$_nth$arity$2(null,i__61390_61997);
var orig_type_62001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61427_62000,(0),null);
var f_62002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61427_62000,(1),null);
var seq__61391_62004 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62001,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62001,cljs.core.identity])));
var chunk__61393_62005 = null;
var count__61394_62006 = (0);
var i__61395_62007 = (0);
while(true){
if((i__61395_62007 < count__61394_62006)){
var vec__61436_62008 = chunk__61393_62005.cljs$core$IIndexed$_nth$arity$2(null,i__61395_62007);
var actual_type_62009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61436_62008,(0),null);
var __62010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61436_62008,(1),null);
var keys_62011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61993,actual_type_62009,f_62002], null);
var canonical_f_62012 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61992),keys_62011);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61992,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62011], 0));

if(cljs.core.truth_(elem_61992.removeEventListener)){
elem_61992.removeEventListener(cljs.core.name(actual_type_62009),canonical_f_62012);
} else {
elem_61992.detachEvent(cljs.core.name(actual_type_62009),canonical_f_62012);
}


var G__62013 = seq__61391_62004;
var G__62014 = chunk__61393_62005;
var G__62015 = count__61394_62006;
var G__62016 = (i__61395_62007 + (1));
seq__61391_62004 = G__62013;
chunk__61393_62005 = G__62014;
count__61394_62006 = G__62015;
i__61395_62007 = G__62016;
continue;
} else {
var temp__5735__auto___62017 = cljs.core.seq(seq__61391_62004);
if(temp__5735__auto___62017){
var seq__61391_62018__$1 = temp__5735__auto___62017;
if(cljs.core.chunked_seq_QMARK_(seq__61391_62018__$1)){
var c__4609__auto___62019 = cljs.core.chunk_first(seq__61391_62018__$1);
var G__62020 = cljs.core.chunk_rest(seq__61391_62018__$1);
var G__62021 = c__4609__auto___62019;
var G__62022 = cljs.core.count(c__4609__auto___62019);
var G__62023 = (0);
seq__61391_62004 = G__62020;
chunk__61393_62005 = G__62021;
count__61394_62006 = G__62022;
i__61395_62007 = G__62023;
continue;
} else {
var vec__61439_62024 = cljs.core.first(seq__61391_62018__$1);
var actual_type_62025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61439_62024,(0),null);
var __62026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61439_62024,(1),null);
var keys_62027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61993,actual_type_62025,f_62002], null);
var canonical_f_62028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61992),keys_62027);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61992,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62027], 0));

if(cljs.core.truth_(elem_61992.removeEventListener)){
elem_61992.removeEventListener(cljs.core.name(actual_type_62025),canonical_f_62028);
} else {
elem_61992.detachEvent(cljs.core.name(actual_type_62025),canonical_f_62028);
}


var G__62030 = cljs.core.next(seq__61391_62018__$1);
var G__62031 = null;
var G__62032 = (0);
var G__62033 = (0);
seq__61391_62004 = G__62030;
chunk__61393_62005 = G__62031;
count__61394_62006 = G__62032;
i__61395_62007 = G__62033;
continue;
}
} else {
}
}
break;
}

var G__62034 = seq__61381_61994;
var G__62035 = chunk__61388_61995;
var G__62036 = count__61389_61996;
var G__62037 = (i__61390_61997 + (1));
seq__61381_61994 = G__62034;
chunk__61388_61995 = G__62035;
count__61389_61996 = G__62036;
i__61390_61997 = G__62037;
continue;
} else {
var temp__5735__auto___62038 = cljs.core.seq(seq__61381_61994);
if(temp__5735__auto___62038){
var seq__61381_62039__$1 = temp__5735__auto___62038;
if(cljs.core.chunked_seq_QMARK_(seq__61381_62039__$1)){
var c__4609__auto___62040 = cljs.core.chunk_first(seq__61381_62039__$1);
var G__62041 = cljs.core.chunk_rest(seq__61381_62039__$1);
var G__62042 = c__4609__auto___62040;
var G__62043 = cljs.core.count(c__4609__auto___62040);
var G__62044 = (0);
seq__61381_61994 = G__62041;
chunk__61388_61995 = G__62042;
count__61389_61996 = G__62043;
i__61390_61997 = G__62044;
continue;
} else {
var vec__61442_62045 = cljs.core.first(seq__61381_62039__$1);
var orig_type_62046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61442_62045,(0),null);
var f_62047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61442_62045,(1),null);
var seq__61382_62048 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62046,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62046,cljs.core.identity])));
var chunk__61384_62049 = null;
var count__61385_62050 = (0);
var i__61386_62051 = (0);
while(true){
if((i__61386_62051 < count__61385_62050)){
var vec__61451_62052 = chunk__61384_62049.cljs$core$IIndexed$_nth$arity$2(null,i__61386_62051);
var actual_type_62053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61451_62052,(0),null);
var __62054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61451_62052,(1),null);
var keys_62055 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61993,actual_type_62053,f_62047], null);
var canonical_f_62056 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61992),keys_62055);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61992,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62055], 0));

if(cljs.core.truth_(elem_61992.removeEventListener)){
elem_61992.removeEventListener(cljs.core.name(actual_type_62053),canonical_f_62056);
} else {
elem_61992.detachEvent(cljs.core.name(actual_type_62053),canonical_f_62056);
}


var G__62057 = seq__61382_62048;
var G__62058 = chunk__61384_62049;
var G__62059 = count__61385_62050;
var G__62060 = (i__61386_62051 + (1));
seq__61382_62048 = G__62057;
chunk__61384_62049 = G__62058;
count__61385_62050 = G__62059;
i__61386_62051 = G__62060;
continue;
} else {
var temp__5735__auto___62061__$1 = cljs.core.seq(seq__61382_62048);
if(temp__5735__auto___62061__$1){
var seq__61382_62062__$1 = temp__5735__auto___62061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61382_62062__$1)){
var c__4609__auto___62063 = cljs.core.chunk_first(seq__61382_62062__$1);
var G__62064 = cljs.core.chunk_rest(seq__61382_62062__$1);
var G__62065 = c__4609__auto___62063;
var G__62066 = cljs.core.count(c__4609__auto___62063);
var G__62067 = (0);
seq__61382_62048 = G__62064;
chunk__61384_62049 = G__62065;
count__61385_62050 = G__62066;
i__61386_62051 = G__62067;
continue;
} else {
var vec__61454_62068 = cljs.core.first(seq__61382_62062__$1);
var actual_type_62069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454_62068,(0),null);
var __62070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454_62068,(1),null);
var keys_62071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61993,actual_type_62069,f_62047], null);
var canonical_f_62072 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61992),keys_62071);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61992,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62071], 0));

if(cljs.core.truth_(elem_61992.removeEventListener)){
elem_61992.removeEventListener(cljs.core.name(actual_type_62069),canonical_f_62072);
} else {
elem_61992.detachEvent(cljs.core.name(actual_type_62069),canonical_f_62072);
}


var G__62073 = cljs.core.next(seq__61382_62062__$1);
var G__62074 = null;
var G__62075 = (0);
var G__62076 = (0);
seq__61382_62048 = G__62073;
chunk__61384_62049 = G__62074;
count__61385_62050 = G__62075;
i__61386_62051 = G__62076;
continue;
}
} else {
}
}
break;
}

var G__62077 = cljs.core.next(seq__61381_62039__$1);
var G__62078 = null;
var G__62079 = (0);
var G__62080 = (0);
seq__61381_61994 = G__62077;
chunk__61388_61995 = G__62078;
count__61389_61996 = G__62079;
i__61390_61997 = G__62080;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq61376){
var G__61377 = cljs.core.first(seq61376);
var seq61376__$1 = cljs.core.next(seq61376);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61377,seq61376__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62081 = arguments.length;
var i__4790__auto___62082 = (0);
while(true){
if((i__4790__auto___62082 < len__4789__auto___62081)){
args__4795__auto__.push((arguments[i__4790__auto___62082]));

var G__62083 = (i__4790__auto___62082 + (1));
i__4790__auto___62082 = G__62083;
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

var vec__61459_62084 = dommy.core.elem_and_selector(elem_sel);
var elem_62085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61459_62084,(0),null);
var selector_62086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61459_62084,(1),null);
var seq__61462_62087 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__61463_62088 = null;
var count__61464_62089 = (0);
var i__61465_62090 = (0);
while(true){
if((i__61465_62090 < count__61464_62089)){
var vec__61472_62091 = chunk__61463_62088.cljs$core$IIndexed$_nth$arity$2(null,i__61465_62090);
var type_62092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61472_62091,(0),null);
var f_62093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61472_62091,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62092,((function (seq__61462_62087,chunk__61463_62088,count__61464_62089,i__61465_62090,vec__61472_62091,type_62092,f_62093,vec__61459_62084,elem_62085,selector_62086){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62092,dommy$core$this_fn], 0));

return (f_62093.cljs$core$IFn$_invoke$arity$1 ? f_62093.cljs$core$IFn$_invoke$arity$1(e) : f_62093.call(null,e));
});})(seq__61462_62087,chunk__61463_62088,count__61464_62089,i__61465_62090,vec__61472_62091,type_62092,f_62093,vec__61459_62084,elem_62085,selector_62086))
], 0));


var G__62094 = seq__61462_62087;
var G__62095 = chunk__61463_62088;
var G__62096 = count__61464_62089;
var G__62097 = (i__61465_62090 + (1));
seq__61462_62087 = G__62094;
chunk__61463_62088 = G__62095;
count__61464_62089 = G__62096;
i__61465_62090 = G__62097;
continue;
} else {
var temp__5735__auto___62098 = cljs.core.seq(seq__61462_62087);
if(temp__5735__auto___62098){
var seq__61462_62099__$1 = temp__5735__auto___62098;
if(cljs.core.chunked_seq_QMARK_(seq__61462_62099__$1)){
var c__4609__auto___62100 = cljs.core.chunk_first(seq__61462_62099__$1);
var G__62101 = cljs.core.chunk_rest(seq__61462_62099__$1);
var G__62102 = c__4609__auto___62100;
var G__62103 = cljs.core.count(c__4609__auto___62100);
var G__62104 = (0);
seq__61462_62087 = G__62101;
chunk__61463_62088 = G__62102;
count__61464_62089 = G__62103;
i__61465_62090 = G__62104;
continue;
} else {
var vec__61475_62105 = cljs.core.first(seq__61462_62099__$1);
var type_62106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61475_62105,(0),null);
var f_62107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61475_62105,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62106,((function (seq__61462_62087,chunk__61463_62088,count__61464_62089,i__61465_62090,vec__61475_62105,type_62106,f_62107,seq__61462_62099__$1,temp__5735__auto___62098,vec__61459_62084,elem_62085,selector_62086){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62106,dommy$core$this_fn], 0));

return (f_62107.cljs$core$IFn$_invoke$arity$1 ? f_62107.cljs$core$IFn$_invoke$arity$1(e) : f_62107.call(null,e));
});})(seq__61462_62087,chunk__61463_62088,count__61464_62089,i__61465_62090,vec__61475_62105,type_62106,f_62107,seq__61462_62099__$1,temp__5735__auto___62098,vec__61459_62084,elem_62085,selector_62086))
], 0));


var G__62108 = cljs.core.next(seq__61462_62099__$1);
var G__62109 = null;
var G__62110 = (0);
var G__62111 = (0);
seq__61462_62087 = G__62108;
chunk__61463_62088 = G__62109;
count__61464_62089 = G__62110;
i__61465_62090 = G__62111;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq61457){
var G__61458 = cljs.core.first(seq61457);
var seq61457__$1 = cljs.core.next(seq61457);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61458,seq61457__$1);
}));


//# sourceMappingURL=dommy.core.js.map
