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
var G__34987 = arguments.length;
switch (G__34987) {
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
var G__34989 = arguments.length;
switch (G__34989) {
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
var G__34992 = arguments.length;
switch (G__34992) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34990_SHARP_){
return (!((p1__34990_SHARP_ === base)));
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
var len__4789__auto___35390 = arguments.length;
var i__4790__auto___35391 = (0);
while(true){
if((i__4790__auto___35391 < len__4789__auto___35390)){
args__4795__auto__.push((arguments[i__4790__auto___35391]));

var G__35393 = (i__4790__auto___35391 + (1));
i__4790__auto___35391 = G__35393;
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
var seq__34997_35405 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34998_35406 = null;
var count__34999_35407 = (0);
var i__35000_35408 = (0);
while(true){
if((i__35000_35408 < count__34999_35407)){
var vec__35007_35414 = chunk__34998_35406.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35408);
var k_35415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35414,(0),null);
var v_35416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35414,(1),null);
style.setProperty(dommy.utils.as_str(k_35415),v_35416);


var G__35417 = seq__34997_35405;
var G__35418 = chunk__34998_35406;
var G__35419 = count__34999_35407;
var G__35420 = (i__35000_35408 + (1));
seq__34997_35405 = G__35417;
chunk__34998_35406 = G__35418;
count__34999_35407 = G__35419;
i__35000_35408 = G__35420;
continue;
} else {
var temp__5735__auto___35421 = cljs.core.seq(seq__34997_35405);
if(temp__5735__auto___35421){
var seq__34997_35422__$1 = temp__5735__auto___35421;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35422__$1)){
var c__4609__auto___35423 = cljs.core.chunk_first(seq__34997_35422__$1);
var G__35424 = cljs.core.chunk_rest(seq__34997_35422__$1);
var G__35425 = c__4609__auto___35423;
var G__35426 = cljs.core.count(c__4609__auto___35423);
var G__35427 = (0);
seq__34997_35405 = G__35424;
chunk__34998_35406 = G__35425;
count__34999_35407 = G__35426;
i__35000_35408 = G__35427;
continue;
} else {
var vec__35010_35428 = cljs.core.first(seq__34997_35422__$1);
var k_35429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35428,(0),null);
var v_35430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35428,(1),null);
style.setProperty(dommy.utils.as_str(k_35429),v_35430);


var G__35431 = cljs.core.next(seq__34997_35422__$1);
var G__35432 = null;
var G__35433 = (0);
var G__35434 = (0);
seq__34997_35405 = G__35431;
chunk__34998_35406 = G__35432;
count__34999_35407 = G__35433;
i__35000_35408 = G__35434;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34995){
var G__34996 = cljs.core.first(seq34995);
var seq34995__$1 = cljs.core.next(seq34995);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34996,seq34995__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35435 = arguments.length;
var i__4790__auto___35436 = (0);
while(true){
if((i__4790__auto___35436 < len__4789__auto___35435)){
args__4795__auto__.push((arguments[i__4790__auto___35436]));

var G__35437 = (i__4790__auto___35436 + (1));
i__4790__auto___35436 = G__35437;
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
var seq__35015_35439 = cljs.core.seq(keywords);
var chunk__35016_35440 = null;
var count__35017_35441 = (0);
var i__35018_35442 = (0);
while(true){
if((i__35018_35442 < count__35017_35441)){
var kw_35447 = chunk__35016_35440.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35442);
style.removeProperty(dommy.utils.as_str(kw_35447));


var G__35449 = seq__35015_35439;
var G__35450 = chunk__35016_35440;
var G__35451 = count__35017_35441;
var G__35452 = (i__35018_35442 + (1));
seq__35015_35439 = G__35449;
chunk__35016_35440 = G__35450;
count__35017_35441 = G__35451;
i__35018_35442 = G__35452;
continue;
} else {
var temp__5735__auto___35453 = cljs.core.seq(seq__35015_35439);
if(temp__5735__auto___35453){
var seq__35015_35454__$1 = temp__5735__auto___35453;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35454__$1)){
var c__4609__auto___35455 = cljs.core.chunk_first(seq__35015_35454__$1);
var G__35460 = cljs.core.chunk_rest(seq__35015_35454__$1);
var G__35461 = c__4609__auto___35455;
var G__35462 = cljs.core.count(c__4609__auto___35455);
var G__35463 = (0);
seq__35015_35439 = G__35460;
chunk__35016_35440 = G__35461;
count__35017_35441 = G__35462;
i__35018_35442 = G__35463;
continue;
} else {
var kw_35466 = cljs.core.first(seq__35015_35454__$1);
style.removeProperty(dommy.utils.as_str(kw_35466));


var G__35472 = cljs.core.next(seq__35015_35454__$1);
var G__35473 = null;
var G__35474 = (0);
var G__35475 = (0);
seq__35015_35439 = G__35472;
chunk__35016_35440 = G__35473;
count__35017_35441 = G__35474;
i__35018_35442 = G__35475;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35013){
var G__35014 = cljs.core.first(seq35013);
var seq35013__$1 = cljs.core.next(seq35013);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35014,seq35013__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35481 = arguments.length;
var i__4790__auto___35482 = (0);
while(true){
if((i__4790__auto___35482 < len__4789__auto___35481)){
args__4795__auto__.push((arguments[i__4790__auto___35482]));

var G__35483 = (i__4790__auto___35482 + (1));
i__4790__auto___35482 = G__35483;
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

var seq__35021_35484 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35022_35485 = null;
var count__35023_35486 = (0);
var i__35024_35487 = (0);
while(true){
if((i__35024_35487 < count__35023_35486)){
var vec__35032_35488 = chunk__35022_35485.cljs$core$IIndexed$_nth$arity$2(null,i__35024_35487);
var k_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35488,(0),null);
var v_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35488,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35489,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35490),"px"].join('')], 0));


var G__35491 = seq__35021_35484;
var G__35492 = chunk__35022_35485;
var G__35493 = count__35023_35486;
var G__35494 = (i__35024_35487 + (1));
seq__35021_35484 = G__35491;
chunk__35022_35485 = G__35492;
count__35023_35486 = G__35493;
i__35024_35487 = G__35494;
continue;
} else {
var temp__5735__auto___35495 = cljs.core.seq(seq__35021_35484);
if(temp__5735__auto___35495){
var seq__35021_35496__$1 = temp__5735__auto___35495;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35496__$1)){
var c__4609__auto___35497 = cljs.core.chunk_first(seq__35021_35496__$1);
var G__35498 = cljs.core.chunk_rest(seq__35021_35496__$1);
var G__35499 = c__4609__auto___35497;
var G__35500 = cljs.core.count(c__4609__auto___35497);
var G__35501 = (0);
seq__35021_35484 = G__35498;
chunk__35022_35485 = G__35499;
count__35023_35486 = G__35500;
i__35024_35487 = G__35501;
continue;
} else {
var vec__35035_35502 = cljs.core.first(seq__35021_35496__$1);
var k_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35502,(0),null);
var v_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35502,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35503,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35504),"px"].join('')], 0));


var G__35505 = cljs.core.next(seq__35021_35496__$1);
var G__35506 = null;
var G__35507 = (0);
var G__35508 = (0);
seq__35021_35484 = G__35505;
chunk__35022_35485 = G__35506;
count__35023_35486 = G__35507;
i__35024_35487 = G__35508;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35019){
var G__35020 = cljs.core.first(seq35019);
var seq35019__$1 = cljs.core.next(seq35019);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35020,seq35019__$1);
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
var G__35043 = arguments.length;
switch (G__35043) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35513 = arguments.length;
var i__4790__auto___35514 = (0);
while(true){
if((i__4790__auto___35514 < len__4789__auto___35513)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35514]));

var G__35515 = (i__4790__auto___35514 + (1));
i__4790__auto___35514 = G__35515;
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
var G__35044 = elem;
(G__35044[k__$1] = v);

return G__35044;
} else {
var G__35045 = elem;
G__35045.setAttribute(k__$1,v);

return G__35045;
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

var seq__35046_35516 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35047_35517 = null;
var count__35048_35518 = (0);
var i__35049_35519 = (0);
while(true){
if((i__35049_35519 < count__35048_35518)){
var vec__35056_35520 = chunk__35047_35517.cljs$core$IIndexed$_nth$arity$2(null,i__35049_35519);
var k_35521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35520,(0),null);
var v_35522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35520,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35521__$1,v_35522__$1);


var G__35524 = seq__35046_35516;
var G__35525 = chunk__35047_35517;
var G__35526 = count__35048_35518;
var G__35527 = (i__35049_35519 + (1));
seq__35046_35516 = G__35524;
chunk__35047_35517 = G__35525;
count__35048_35518 = G__35526;
i__35049_35519 = G__35527;
continue;
} else {
var temp__5735__auto___35528 = cljs.core.seq(seq__35046_35516);
if(temp__5735__auto___35528){
var seq__35046_35529__$1 = temp__5735__auto___35528;
if(cljs.core.chunked_seq_QMARK_(seq__35046_35529__$1)){
var c__4609__auto___35530 = cljs.core.chunk_first(seq__35046_35529__$1);
var G__35531 = cljs.core.chunk_rest(seq__35046_35529__$1);
var G__35532 = c__4609__auto___35530;
var G__35533 = cljs.core.count(c__4609__auto___35530);
var G__35534 = (0);
seq__35046_35516 = G__35531;
chunk__35047_35517 = G__35532;
count__35048_35518 = G__35533;
i__35049_35519 = G__35534;
continue;
} else {
var vec__35059_35535 = cljs.core.first(seq__35046_35529__$1);
var k_35536__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35535,(0),null);
var v_35537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35535,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35536__$1,v_35537__$1);


var G__35539 = cljs.core.next(seq__35046_35529__$1);
var G__35540 = null;
var G__35541 = (0);
var G__35542 = (0);
seq__35046_35516 = G__35539;
chunk__35047_35517 = G__35540;
count__35048_35518 = G__35541;
i__35049_35519 = G__35542;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35039){
var G__35040 = cljs.core.first(seq35039);
var seq35039__$1 = cljs.core.next(seq35039);
var G__35041 = cljs.core.first(seq35039__$1);
var seq35039__$2 = cljs.core.next(seq35039__$1);
var G__35042 = cljs.core.first(seq35039__$2);
var seq35039__$3 = cljs.core.next(seq35039__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35040,G__35041,G__35042,seq35039__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35066 = arguments.length;
switch (G__35066) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35544 = arguments.length;
var i__4790__auto___35545 = (0);
while(true){
if((i__4790__auto___35545 < len__4789__auto___35544)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35545]));

var G__35546 = (i__4790__auto___35545 + (1));
i__4790__auto___35545 = G__35546;
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
var k_35547__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35067.cljs$core$IFn$_invoke$arity$1 ? fexpr__35067.cljs$core$IFn$_invoke$arity$1(k_35547__$1) : fexpr__35067.call(null,k_35547__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35547__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35068_35548 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35069_35549 = null;
var count__35070_35550 = (0);
var i__35071_35551 = (0);
while(true){
if((i__35071_35551 < count__35070_35550)){
var k_35552__$1 = chunk__35069_35549.cljs$core$IIndexed$_nth$arity$2(null,i__35071_35551);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35552__$1);


var G__35553 = seq__35068_35548;
var G__35554 = chunk__35069_35549;
var G__35555 = count__35070_35550;
var G__35556 = (i__35071_35551 + (1));
seq__35068_35548 = G__35553;
chunk__35069_35549 = G__35554;
count__35070_35550 = G__35555;
i__35071_35551 = G__35556;
continue;
} else {
var temp__5735__auto___35557 = cljs.core.seq(seq__35068_35548);
if(temp__5735__auto___35557){
var seq__35068_35558__$1 = temp__5735__auto___35557;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35558__$1)){
var c__4609__auto___35559 = cljs.core.chunk_first(seq__35068_35558__$1);
var G__35560 = cljs.core.chunk_rest(seq__35068_35558__$1);
var G__35561 = c__4609__auto___35559;
var G__35562 = cljs.core.count(c__4609__auto___35559);
var G__35563 = (0);
seq__35068_35548 = G__35560;
chunk__35069_35549 = G__35561;
count__35070_35550 = G__35562;
i__35071_35551 = G__35563;
continue;
} else {
var k_35564__$1 = cljs.core.first(seq__35068_35558__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35564__$1);


var G__35565 = cljs.core.next(seq__35068_35558__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35068_35548 = G__35565;
chunk__35069_35549 = G__35566;
count__35070_35550 = G__35567;
i__35071_35551 = G__35568;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35063){
var G__35064 = cljs.core.first(seq35063);
var seq35063__$1 = cljs.core.next(seq35063);
var G__35065 = cljs.core.first(seq35063__$1);
var seq35063__$2 = cljs.core.next(seq35063__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35064,G__35065,seq35063__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__35073 = arguments.length;
switch (G__35073) {
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
var G__35078 = arguments.length;
switch (G__35078) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35571 = arguments.length;
var i__4790__auto___35572 = (0);
while(true){
if((i__4790__auto___35572 < len__4789__auto___35571)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35572]));

var G__35573 = (i__4790__auto___35572 + (1));
i__4790__auto___35572 = G__35573;
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
var temp__5733__auto___35574 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35574)){
var class_list_35575 = temp__5733__auto___35574;
var seq__35079_35576 = cljs.core.seq(classes__$1);
var chunk__35080_35577 = null;
var count__35081_35578 = (0);
var i__35082_35579 = (0);
while(true){
if((i__35082_35579 < count__35081_35578)){
var c_35580 = chunk__35080_35577.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35579);
class_list_35575.add(c_35580);


var G__35581 = seq__35079_35576;
var G__35582 = chunk__35080_35577;
var G__35583 = count__35081_35578;
var G__35584 = (i__35082_35579 + (1));
seq__35079_35576 = G__35581;
chunk__35080_35577 = G__35582;
count__35081_35578 = G__35583;
i__35082_35579 = G__35584;
continue;
} else {
var temp__5735__auto___35585 = cljs.core.seq(seq__35079_35576);
if(temp__5735__auto___35585){
var seq__35079_35586__$1 = temp__5735__auto___35585;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35586__$1)){
var c__4609__auto___35587 = cljs.core.chunk_first(seq__35079_35586__$1);
var G__35588 = cljs.core.chunk_rest(seq__35079_35586__$1);
var G__35589 = c__4609__auto___35587;
var G__35590 = cljs.core.count(c__4609__auto___35587);
var G__35591 = (0);
seq__35079_35576 = G__35588;
chunk__35080_35577 = G__35589;
count__35081_35578 = G__35590;
i__35082_35579 = G__35591;
continue;
} else {
var c_35592 = cljs.core.first(seq__35079_35586__$1);
class_list_35575.add(c_35592);


var G__35593 = cljs.core.next(seq__35079_35586__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__35079_35576 = G__35593;
chunk__35080_35577 = G__35594;
count__35081_35578 = G__35595;
i__35082_35579 = G__35596;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35083_35597 = cljs.core.seq(classes__$1);
var chunk__35084_35598 = null;
var count__35085_35599 = (0);
var i__35086_35600 = (0);
while(true){
if((i__35086_35600 < count__35085_35599)){
var c_35601 = chunk__35084_35598.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35600);
var class_name_35602 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35602,c_35601))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35602 === ""))?c_35601:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35602)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35601)].join('')));
}


var G__35603 = seq__35083_35597;
var G__35604 = chunk__35084_35598;
var G__35605 = count__35085_35599;
var G__35606 = (i__35086_35600 + (1));
seq__35083_35597 = G__35603;
chunk__35084_35598 = G__35604;
count__35085_35599 = G__35605;
i__35086_35600 = G__35606;
continue;
} else {
var temp__5735__auto___35607 = cljs.core.seq(seq__35083_35597);
if(temp__5735__auto___35607){
var seq__35083_35608__$1 = temp__5735__auto___35607;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35608__$1)){
var c__4609__auto___35609 = cljs.core.chunk_first(seq__35083_35608__$1);
var G__35610 = cljs.core.chunk_rest(seq__35083_35608__$1);
var G__35611 = c__4609__auto___35609;
var G__35612 = cljs.core.count(c__4609__auto___35609);
var G__35613 = (0);
seq__35083_35597 = G__35610;
chunk__35084_35598 = G__35611;
count__35085_35599 = G__35612;
i__35086_35600 = G__35613;
continue;
} else {
var c_35614 = cljs.core.first(seq__35083_35608__$1);
var class_name_35615 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35615,c_35614))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35615 === ""))?c_35614:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35615)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35614)].join('')));
}


var G__35616 = cljs.core.next(seq__35083_35608__$1);
var G__35617 = null;
var G__35618 = (0);
var G__35619 = (0);
seq__35083_35597 = G__35616;
chunk__35084_35598 = G__35617;
count__35085_35599 = G__35618;
i__35086_35600 = G__35619;
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
var seq__35087_35620 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35088_35621 = null;
var count__35089_35622 = (0);
var i__35090_35623 = (0);
while(true){
if((i__35090_35623 < count__35089_35622)){
var c_35624 = chunk__35088_35621.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35623);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35624);


var G__35625 = seq__35087_35620;
var G__35626 = chunk__35088_35621;
var G__35627 = count__35089_35622;
var G__35628 = (i__35090_35623 + (1));
seq__35087_35620 = G__35625;
chunk__35088_35621 = G__35626;
count__35089_35622 = G__35627;
i__35090_35623 = G__35628;
continue;
} else {
var temp__5735__auto___35629 = cljs.core.seq(seq__35087_35620);
if(temp__5735__auto___35629){
var seq__35087_35630__$1 = temp__5735__auto___35629;
if(cljs.core.chunked_seq_QMARK_(seq__35087_35630__$1)){
var c__4609__auto___35631 = cljs.core.chunk_first(seq__35087_35630__$1);
var G__35632 = cljs.core.chunk_rest(seq__35087_35630__$1);
var G__35633 = c__4609__auto___35631;
var G__35634 = cljs.core.count(c__4609__auto___35631);
var G__35635 = (0);
seq__35087_35620 = G__35632;
chunk__35088_35621 = G__35633;
count__35089_35622 = G__35634;
i__35090_35623 = G__35635;
continue;
} else {
var c_35636 = cljs.core.first(seq__35087_35630__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35636);


var G__35637 = cljs.core.next(seq__35087_35630__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__35087_35620 = G__35637;
chunk__35088_35621 = G__35638;
count__35089_35622 = G__35639;
i__35090_35623 = G__35640;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35075){
var G__35076 = cljs.core.first(seq35075);
var seq35075__$1 = cljs.core.next(seq35075);
var G__35077 = cljs.core.first(seq35075__$1);
var seq35075__$2 = cljs.core.next(seq35075__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35076,G__35077,seq35075__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__35095 = arguments.length;
switch (G__35095) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35642 = arguments.length;
var i__4790__auto___35643 = (0);
while(true){
if((i__4790__auto___35643 < len__4789__auto___35642)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35643]));

var G__35644 = (i__4790__auto___35643 + (1));
i__4790__auto___35643 = G__35644;
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
var temp__5733__auto___35645 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35645)){
var class_list_35646 = temp__5733__auto___35645;
class_list_35646.remove(c__$1);
} else {
var class_name_35647 = dommy.core.class$(elem);
var new_class_name_35648 = dommy.utils.remove_class_str(class_name_35647,c__$1);
if((class_name_35647 === new_class_name_35648)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35648);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35096 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__35097 = null;
var count__35098 = (0);
var i__35099 = (0);
while(true){
if((i__35099 < count__35098)){
var c = chunk__35097.cljs$core$IIndexed$_nth$arity$2(null,i__35099);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35649 = seq__35096;
var G__35650 = chunk__35097;
var G__35651 = count__35098;
var G__35652 = (i__35099 + (1));
seq__35096 = G__35649;
chunk__35097 = G__35650;
count__35098 = G__35651;
i__35099 = G__35652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35096);
if(temp__5735__auto__){
var seq__35096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35096__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35096__$1);
var G__35653 = cljs.core.chunk_rest(seq__35096__$1);
var G__35654 = c__4609__auto__;
var G__35655 = cljs.core.count(c__4609__auto__);
var G__35656 = (0);
seq__35096 = G__35653;
chunk__35097 = G__35654;
count__35098 = G__35655;
i__35099 = G__35656;
continue;
} else {
var c = cljs.core.first(seq__35096__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35657 = cljs.core.next(seq__35096__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35096 = G__35657;
chunk__35097 = G__35658;
count__35098 = G__35659;
i__35099 = G__35660;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35092){
var G__35093 = cljs.core.first(seq35092);
var seq35092__$1 = cljs.core.next(seq35092);
var G__35094 = cljs.core.first(seq35092__$1);
var seq35092__$2 = cljs.core.next(seq35092__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35093,G__35094,seq35092__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__35101 = arguments.length;
switch (G__35101) {
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
var temp__5733__auto___35662 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35662)){
var class_list_35663 = temp__5733__auto___35662;
class_list_35663.toggle(c__$1);
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
var G__35103 = arguments.length;
switch (G__35103) {
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
var G__35105 = arguments.length;
switch (G__35105) {
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
var G__35110 = arguments.length;
switch (G__35110) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35669 = arguments.length;
var i__4790__auto___35670 = (0);
while(true){
if((i__4790__auto___35670 < len__4789__auto___35669)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35670]));

var G__35671 = (i__4790__auto___35670 + (1));
i__4790__auto___35670 = G__35671;
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
var G__35111 = parent;
G__35111.appendChild(child);

return G__35111;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35112_35672 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35113_35673 = null;
var count__35114_35674 = (0);
var i__35115_35675 = (0);
while(true){
if((i__35115_35675 < count__35114_35674)){
var c_35676 = chunk__35113_35673.cljs$core$IIndexed$_nth$arity$2(null,i__35115_35675);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35676);


var G__35677 = seq__35112_35672;
var G__35678 = chunk__35113_35673;
var G__35679 = count__35114_35674;
var G__35680 = (i__35115_35675 + (1));
seq__35112_35672 = G__35677;
chunk__35113_35673 = G__35678;
count__35114_35674 = G__35679;
i__35115_35675 = G__35680;
continue;
} else {
var temp__5735__auto___35681 = cljs.core.seq(seq__35112_35672);
if(temp__5735__auto___35681){
var seq__35112_35682__$1 = temp__5735__auto___35681;
if(cljs.core.chunked_seq_QMARK_(seq__35112_35682__$1)){
var c__4609__auto___35683 = cljs.core.chunk_first(seq__35112_35682__$1);
var G__35684 = cljs.core.chunk_rest(seq__35112_35682__$1);
var G__35685 = c__4609__auto___35683;
var G__35686 = cljs.core.count(c__4609__auto___35683);
var G__35687 = (0);
seq__35112_35672 = G__35684;
chunk__35113_35673 = G__35685;
count__35114_35674 = G__35686;
i__35115_35675 = G__35687;
continue;
} else {
var c_35688 = cljs.core.first(seq__35112_35682__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35688);


var G__35689 = cljs.core.next(seq__35112_35682__$1);
var G__35690 = null;
var G__35691 = (0);
var G__35692 = (0);
seq__35112_35672 = G__35689;
chunk__35113_35673 = G__35690;
count__35114_35674 = G__35691;
i__35115_35675 = G__35692;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35107){
var G__35108 = cljs.core.first(seq35107);
var seq35107__$1 = cljs.core.next(seq35107);
var G__35109 = cljs.core.first(seq35107__$1);
var seq35107__$2 = cljs.core.next(seq35107__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35108,G__35109,seq35107__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35121 = arguments.length;
switch (G__35121) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35694 = arguments.length;
var i__4790__auto___35695 = (0);
while(true){
if((i__4790__auto___35695 < len__4789__auto___35694)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35695]));

var G__35696 = (i__4790__auto___35695 + (1));
i__4790__auto___35695 = G__35696;
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
var G__35124 = parent;
G__35124.insertBefore(child,parent.firstChild);

return G__35124;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35125_35699 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35126_35700 = null;
var count__35127_35701 = (0);
var i__35128_35702 = (0);
while(true){
if((i__35128_35702 < count__35127_35701)){
var c_35703 = chunk__35126_35700.cljs$core$IIndexed$_nth$arity$2(null,i__35128_35702);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35703);


var G__35704 = seq__35125_35699;
var G__35705 = chunk__35126_35700;
var G__35706 = count__35127_35701;
var G__35707 = (i__35128_35702 + (1));
seq__35125_35699 = G__35704;
chunk__35126_35700 = G__35705;
count__35127_35701 = G__35706;
i__35128_35702 = G__35707;
continue;
} else {
var temp__5735__auto___35708 = cljs.core.seq(seq__35125_35699);
if(temp__5735__auto___35708){
var seq__35125_35709__$1 = temp__5735__auto___35708;
if(cljs.core.chunked_seq_QMARK_(seq__35125_35709__$1)){
var c__4609__auto___35710 = cljs.core.chunk_first(seq__35125_35709__$1);
var G__35711 = cljs.core.chunk_rest(seq__35125_35709__$1);
var G__35712 = c__4609__auto___35710;
var G__35713 = cljs.core.count(c__4609__auto___35710);
var G__35714 = (0);
seq__35125_35699 = G__35711;
chunk__35126_35700 = G__35712;
count__35127_35701 = G__35713;
i__35128_35702 = G__35714;
continue;
} else {
var c_35715 = cljs.core.first(seq__35125_35709__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35715);


var G__35716 = cljs.core.next(seq__35125_35709__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__35125_35699 = G__35716;
chunk__35126_35700 = G__35717;
count__35127_35701 = G__35718;
i__35128_35702 = G__35719;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35118){
var G__35119 = cljs.core.first(seq35118);
var seq35118__$1 = cljs.core.next(seq35118);
var G__35120 = cljs.core.first(seq35118__$1);
var seq35118__$2 = cljs.core.next(seq35118__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35119,G__35120,seq35118__$2);
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
var temp__5733__auto___35722 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35722)){
var next_35723 = temp__5733__auto___35722;
dommy.core.insert_before_BANG_(elem,next_35723);
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
var G__35130 = arguments.length;
switch (G__35130) {
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
var G__35131 = p;
G__35131.removeChild(elem);

return G__35131;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35132){
var vec__35133 = p__35132;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(1),null);
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
var len__4789__auto___35725 = arguments.length;
var i__4790__auto___35726 = (0);
while(true){
if((i__4790__auto___35726 < len__4789__auto___35725)){
args__4795__auto__.push((arguments[i__4790__auto___35726]));

var G__35727 = (i__4790__auto___35726 + (1));
i__4790__auto___35726 = G__35727;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35136){
var G__35137 = cljs.core.first(seq35136);
var seq35136__$1 = cljs.core.next(seq35136);
var G__35138 = cljs.core.first(seq35136__$1);
var seq35136__$2 = cljs.core.next(seq35136__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35137,G__35138,seq35136__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__35139 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__35139.cljs$core$IFn$_invoke$arity$1 ? fexpr__35139.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__35139.call(null,elem_sel));
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
var len__4789__auto___35728 = arguments.length;
var i__4790__auto___35729 = (0);
while(true){
if((i__4790__auto___35729 < len__4789__auto___35728)){
args__4795__auto__.push((arguments[i__4790__auto___35729]));

var G__35730 = (i__4790__auto___35729 + (1));
i__4790__auto___35729 = G__35730;
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

var vec__35142_35731 = dommy.core.elem_and_selector(elem_sel);
var elem_35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35731,(0),null);
var selector_35733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35731,(1),null);
var seq__35145_35734 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35735 = null;
var count__35153_35736 = (0);
var i__35154_35737 = (0);
while(true){
if((i__35154_35737 < count__35153_35736)){
var vec__35210_35738 = chunk__35152_35735.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35737);
var orig_type_35739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210_35738,(0),null);
var f_35740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210_35738,(1),null);
var seq__35155_35741 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35739,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35739,cljs.core.identity])));
var chunk__35157_35742 = null;
var count__35158_35743 = (0);
var i__35159_35744 = (0);
while(true){
if((i__35159_35744 < count__35158_35743)){
var vec__35223_35745 = chunk__35157_35742.cljs$core$IIndexed$_nth$arity$2(null,i__35159_35744);
var actual_type_35746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35745,(0),null);
var factory_35747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35745,(1),null);
var canonical_f_35748 = (function (){var G__35227 = (factory_35747.cljs$core$IFn$_invoke$arity$1 ? factory_35747.cljs$core$IFn$_invoke$arity$1(f_35740) : factory_35747.call(null,f_35740));
var fexpr__35226 = (cljs.core.truth_(selector_35733)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35732,selector_35733):cljs.core.identity);
return (fexpr__35226.cljs$core$IFn$_invoke$arity$1 ? fexpr__35226.cljs$core$IFn$_invoke$arity$1(G__35227) : fexpr__35226.call(null,G__35227));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35732,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35733,actual_type_35746,f_35740], null),canonical_f_35748], 0));

if(cljs.core.truth_(elem_35732.addEventListener)){
elem_35732.addEventListener(cljs.core.name(actual_type_35746),canonical_f_35748);
} else {
elem_35732.attachEvent(cljs.core.name(actual_type_35746),canonical_f_35748);
}


var G__35749 = seq__35155_35741;
var G__35750 = chunk__35157_35742;
var G__35751 = count__35158_35743;
var G__35752 = (i__35159_35744 + (1));
seq__35155_35741 = G__35749;
chunk__35157_35742 = G__35750;
count__35158_35743 = G__35751;
i__35159_35744 = G__35752;
continue;
} else {
var temp__5735__auto___35753 = cljs.core.seq(seq__35155_35741);
if(temp__5735__auto___35753){
var seq__35155_35754__$1 = temp__5735__auto___35753;
if(cljs.core.chunked_seq_QMARK_(seq__35155_35754__$1)){
var c__4609__auto___35755 = cljs.core.chunk_first(seq__35155_35754__$1);
var G__35756 = cljs.core.chunk_rest(seq__35155_35754__$1);
var G__35757 = c__4609__auto___35755;
var G__35758 = cljs.core.count(c__4609__auto___35755);
var G__35759 = (0);
seq__35155_35741 = G__35756;
chunk__35157_35742 = G__35757;
count__35158_35743 = G__35758;
i__35159_35744 = G__35759;
continue;
} else {
var vec__35228_35760 = cljs.core.first(seq__35155_35754__$1);
var actual_type_35761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228_35760,(0),null);
var factory_35762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228_35760,(1),null);
var canonical_f_35763 = (function (){var G__35232 = (factory_35762.cljs$core$IFn$_invoke$arity$1 ? factory_35762.cljs$core$IFn$_invoke$arity$1(f_35740) : factory_35762.call(null,f_35740));
var fexpr__35231 = (cljs.core.truth_(selector_35733)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35732,selector_35733):cljs.core.identity);
return (fexpr__35231.cljs$core$IFn$_invoke$arity$1 ? fexpr__35231.cljs$core$IFn$_invoke$arity$1(G__35232) : fexpr__35231.call(null,G__35232));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35732,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35733,actual_type_35761,f_35740], null),canonical_f_35763], 0));

if(cljs.core.truth_(elem_35732.addEventListener)){
elem_35732.addEventListener(cljs.core.name(actual_type_35761),canonical_f_35763);
} else {
elem_35732.attachEvent(cljs.core.name(actual_type_35761),canonical_f_35763);
}


var G__35764 = cljs.core.next(seq__35155_35754__$1);
var G__35765 = null;
var G__35766 = (0);
var G__35767 = (0);
seq__35155_35741 = G__35764;
chunk__35157_35742 = G__35765;
count__35158_35743 = G__35766;
i__35159_35744 = G__35767;
continue;
}
} else {
}
}
break;
}

var G__35768 = seq__35145_35734;
var G__35769 = chunk__35152_35735;
var G__35770 = count__35153_35736;
var G__35771 = (i__35154_35737 + (1));
seq__35145_35734 = G__35768;
chunk__35152_35735 = G__35769;
count__35153_35736 = G__35770;
i__35154_35737 = G__35771;
continue;
} else {
var temp__5735__auto___35772 = cljs.core.seq(seq__35145_35734);
if(temp__5735__auto___35772){
var seq__35145_35773__$1 = temp__5735__auto___35772;
if(cljs.core.chunked_seq_QMARK_(seq__35145_35773__$1)){
var c__4609__auto___35774 = cljs.core.chunk_first(seq__35145_35773__$1);
var G__35775 = cljs.core.chunk_rest(seq__35145_35773__$1);
var G__35776 = c__4609__auto___35774;
var G__35777 = cljs.core.count(c__4609__auto___35774);
var G__35778 = (0);
seq__35145_35734 = G__35775;
chunk__35152_35735 = G__35776;
count__35153_35736 = G__35777;
i__35154_35737 = G__35778;
continue;
} else {
var vec__35233_35779 = cljs.core.first(seq__35145_35773__$1);
var orig_type_35780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233_35779,(0),null);
var f_35781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233_35779,(1),null);
var seq__35146_35782 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35780,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35780,cljs.core.identity])));
var chunk__35148_35783 = null;
var count__35149_35784 = (0);
var i__35150_35785 = (0);
while(true){
if((i__35150_35785 < count__35149_35784)){
var vec__35246_35786 = chunk__35148_35783.cljs$core$IIndexed$_nth$arity$2(null,i__35150_35785);
var actual_type_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35246_35786,(0),null);
var factory_35788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35246_35786,(1),null);
var canonical_f_35789 = (function (){var G__35250 = (factory_35788.cljs$core$IFn$_invoke$arity$1 ? factory_35788.cljs$core$IFn$_invoke$arity$1(f_35781) : factory_35788.call(null,f_35781));
var fexpr__35249 = (cljs.core.truth_(selector_35733)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35732,selector_35733):cljs.core.identity);
return (fexpr__35249.cljs$core$IFn$_invoke$arity$1 ? fexpr__35249.cljs$core$IFn$_invoke$arity$1(G__35250) : fexpr__35249.call(null,G__35250));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35732,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35733,actual_type_35787,f_35781], null),canonical_f_35789], 0));

if(cljs.core.truth_(elem_35732.addEventListener)){
elem_35732.addEventListener(cljs.core.name(actual_type_35787),canonical_f_35789);
} else {
elem_35732.attachEvent(cljs.core.name(actual_type_35787),canonical_f_35789);
}


var G__35790 = seq__35146_35782;
var G__35791 = chunk__35148_35783;
var G__35792 = count__35149_35784;
var G__35793 = (i__35150_35785 + (1));
seq__35146_35782 = G__35790;
chunk__35148_35783 = G__35791;
count__35149_35784 = G__35792;
i__35150_35785 = G__35793;
continue;
} else {
var temp__5735__auto___35794__$1 = cljs.core.seq(seq__35146_35782);
if(temp__5735__auto___35794__$1){
var seq__35146_35795__$1 = temp__5735__auto___35794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35146_35795__$1)){
var c__4609__auto___35796 = cljs.core.chunk_first(seq__35146_35795__$1);
var G__35797 = cljs.core.chunk_rest(seq__35146_35795__$1);
var G__35798 = c__4609__auto___35796;
var G__35799 = cljs.core.count(c__4609__auto___35796);
var G__35800 = (0);
seq__35146_35782 = G__35797;
chunk__35148_35783 = G__35798;
count__35149_35784 = G__35799;
i__35150_35785 = G__35800;
continue;
} else {
var vec__35251_35801 = cljs.core.first(seq__35146_35795__$1);
var actual_type_35802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251_35801,(0),null);
var factory_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251_35801,(1),null);
var canonical_f_35804 = (function (){var G__35255 = (factory_35803.cljs$core$IFn$_invoke$arity$1 ? factory_35803.cljs$core$IFn$_invoke$arity$1(f_35781) : factory_35803.call(null,f_35781));
var fexpr__35254 = (cljs.core.truth_(selector_35733)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35732,selector_35733):cljs.core.identity);
return (fexpr__35254.cljs$core$IFn$_invoke$arity$1 ? fexpr__35254.cljs$core$IFn$_invoke$arity$1(G__35255) : fexpr__35254.call(null,G__35255));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35732,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35733,actual_type_35802,f_35781], null),canonical_f_35804], 0));

if(cljs.core.truth_(elem_35732.addEventListener)){
elem_35732.addEventListener(cljs.core.name(actual_type_35802),canonical_f_35804);
} else {
elem_35732.attachEvent(cljs.core.name(actual_type_35802),canonical_f_35804);
}


var G__35805 = cljs.core.next(seq__35146_35795__$1);
var G__35806 = null;
var G__35807 = (0);
var G__35808 = (0);
seq__35146_35782 = G__35805;
chunk__35148_35783 = G__35806;
count__35149_35784 = G__35807;
i__35150_35785 = G__35808;
continue;
}
} else {
}
}
break;
}

var G__35809 = cljs.core.next(seq__35145_35773__$1);
var G__35810 = null;
var G__35811 = (0);
var G__35812 = (0);
seq__35145_35734 = G__35809;
chunk__35152_35735 = G__35810;
count__35153_35736 = G__35811;
i__35154_35737 = G__35812;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35140){
var G__35141 = cljs.core.first(seq35140);
var seq35140__$1 = cljs.core.next(seq35140);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35141,seq35140__$1);
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
var len__4789__auto___35815 = arguments.length;
var i__4790__auto___35816 = (0);
while(true){
if((i__4790__auto___35816 < len__4789__auto___35815)){
args__4795__auto__.push((arguments[i__4790__auto___35816]));

var G__35817 = (i__4790__auto___35816 + (1));
i__4790__auto___35816 = G__35817;
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

var vec__35261_35818 = dommy.core.elem_and_selector(elem_sel);
var elem_35819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35818,(0),null);
var selector_35820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35818,(1),null);
var seq__35264_35821 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35271_35822 = null;
var count__35272_35823 = (0);
var i__35273_35824 = (0);
while(true){
if((i__35273_35824 < count__35272_35823)){
var vec__35310_35825 = chunk__35271_35822.cljs$core$IIndexed$_nth$arity$2(null,i__35273_35824);
var orig_type_35826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35825,(0),null);
var f_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35825,(1),null);
var seq__35274_35829 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35826,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35826,cljs.core.identity])));
var chunk__35276_35830 = null;
var count__35277_35831 = (0);
var i__35278_35832 = (0);
while(true){
if((i__35278_35832 < count__35277_35831)){
var vec__35323_35833 = chunk__35276_35830.cljs$core$IIndexed$_nth$arity$2(null,i__35278_35832);
var actual_type_35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323_35833,(0),null);
var __35835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323_35833,(1),null);
var keys_35837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35820,actual_type_35834,f_35827], null);
var canonical_f_35838 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35819),keys_35837);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35819,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35837], 0));

if(cljs.core.truth_(elem_35819.removeEventListener)){
elem_35819.removeEventListener(cljs.core.name(actual_type_35834),canonical_f_35838);
} else {
elem_35819.detachEvent(cljs.core.name(actual_type_35834),canonical_f_35838);
}


var G__35841 = seq__35274_35829;
var G__35842 = chunk__35276_35830;
var G__35843 = count__35277_35831;
var G__35844 = (i__35278_35832 + (1));
seq__35274_35829 = G__35841;
chunk__35276_35830 = G__35842;
count__35277_35831 = G__35843;
i__35278_35832 = G__35844;
continue;
} else {
var temp__5735__auto___35845 = cljs.core.seq(seq__35274_35829);
if(temp__5735__auto___35845){
var seq__35274_35846__$1 = temp__5735__auto___35845;
if(cljs.core.chunked_seq_QMARK_(seq__35274_35846__$1)){
var c__4609__auto___35847 = cljs.core.chunk_first(seq__35274_35846__$1);
var G__35848 = cljs.core.chunk_rest(seq__35274_35846__$1);
var G__35849 = c__4609__auto___35847;
var G__35850 = cljs.core.count(c__4609__auto___35847);
var G__35851 = (0);
seq__35274_35829 = G__35848;
chunk__35276_35830 = G__35849;
count__35277_35831 = G__35850;
i__35278_35832 = G__35851;
continue;
} else {
var vec__35326_35852 = cljs.core.first(seq__35274_35846__$1);
var actual_type_35853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35852,(0),null);
var __35854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35852,(1),null);
var keys_35855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35820,actual_type_35853,f_35827], null);
var canonical_f_35856 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35819),keys_35855);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35819,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35855], 0));

if(cljs.core.truth_(elem_35819.removeEventListener)){
elem_35819.removeEventListener(cljs.core.name(actual_type_35853),canonical_f_35856);
} else {
elem_35819.detachEvent(cljs.core.name(actual_type_35853),canonical_f_35856);
}


var G__35862 = cljs.core.next(seq__35274_35846__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35274_35829 = G__35862;
chunk__35276_35830 = G__35863;
count__35277_35831 = G__35864;
i__35278_35832 = G__35865;
continue;
}
} else {
}
}
break;
}

var G__35866 = seq__35264_35821;
var G__35867 = chunk__35271_35822;
var G__35868 = count__35272_35823;
var G__35869 = (i__35273_35824 + (1));
seq__35264_35821 = G__35866;
chunk__35271_35822 = G__35867;
count__35272_35823 = G__35868;
i__35273_35824 = G__35869;
continue;
} else {
var temp__5735__auto___35874 = cljs.core.seq(seq__35264_35821);
if(temp__5735__auto___35874){
var seq__35264_35875__$1 = temp__5735__auto___35874;
if(cljs.core.chunked_seq_QMARK_(seq__35264_35875__$1)){
var c__4609__auto___35877 = cljs.core.chunk_first(seq__35264_35875__$1);
var G__35879 = cljs.core.chunk_rest(seq__35264_35875__$1);
var G__35880 = c__4609__auto___35877;
var G__35881 = cljs.core.count(c__4609__auto___35877);
var G__35882 = (0);
seq__35264_35821 = G__35879;
chunk__35271_35822 = G__35880;
count__35272_35823 = G__35881;
i__35273_35824 = G__35882;
continue;
} else {
var vec__35332_35883 = cljs.core.first(seq__35264_35875__$1);
var orig_type_35884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332_35883,(0),null);
var f_35885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332_35883,(1),null);
var seq__35265_35886 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35884,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35884,cljs.core.identity])));
var chunk__35267_35887 = null;
var count__35268_35888 = (0);
var i__35269_35889 = (0);
while(true){
if((i__35269_35889 < count__35268_35888)){
var vec__35345_35893 = chunk__35267_35887.cljs$core$IIndexed$_nth$arity$2(null,i__35269_35889);
var actual_type_35894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35893,(0),null);
var __35895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35893,(1),null);
var keys_35898 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35820,actual_type_35894,f_35885], null);
var canonical_f_35899 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35819),keys_35898);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35819,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35898], 0));

if(cljs.core.truth_(elem_35819.removeEventListener)){
elem_35819.removeEventListener(cljs.core.name(actual_type_35894),canonical_f_35899);
} else {
elem_35819.detachEvent(cljs.core.name(actual_type_35894),canonical_f_35899);
}


var G__35901 = seq__35265_35886;
var G__35902 = chunk__35267_35887;
var G__35903 = count__35268_35888;
var G__35904 = (i__35269_35889 + (1));
seq__35265_35886 = G__35901;
chunk__35267_35887 = G__35902;
count__35268_35888 = G__35903;
i__35269_35889 = G__35904;
continue;
} else {
var temp__5735__auto___35907__$1 = cljs.core.seq(seq__35265_35886);
if(temp__5735__auto___35907__$1){
var seq__35265_35910__$1 = temp__5735__auto___35907__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35265_35910__$1)){
var c__4609__auto___35911 = cljs.core.chunk_first(seq__35265_35910__$1);
var G__35912 = cljs.core.chunk_rest(seq__35265_35910__$1);
var G__35913 = c__4609__auto___35911;
var G__35914 = cljs.core.count(c__4609__auto___35911);
var G__35915 = (0);
seq__35265_35886 = G__35912;
chunk__35267_35887 = G__35913;
count__35268_35888 = G__35914;
i__35269_35889 = G__35915;
continue;
} else {
var vec__35348_35916 = cljs.core.first(seq__35265_35910__$1);
var actual_type_35917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35916,(0),null);
var __35918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35916,(1),null);
var keys_35919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35820,actual_type_35917,f_35885], null);
var canonical_f_35920 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35819),keys_35919);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35819,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35919], 0));

if(cljs.core.truth_(elem_35819.removeEventListener)){
elem_35819.removeEventListener(cljs.core.name(actual_type_35917),canonical_f_35920);
} else {
elem_35819.detachEvent(cljs.core.name(actual_type_35917),canonical_f_35920);
}


var G__35921 = cljs.core.next(seq__35265_35910__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35265_35886 = G__35921;
chunk__35267_35887 = G__35922;
count__35268_35888 = G__35923;
i__35269_35889 = G__35924;
continue;
}
} else {
}
}
break;
}

var G__35925 = cljs.core.next(seq__35264_35875__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35264_35821 = G__35925;
chunk__35271_35822 = G__35926;
count__35272_35823 = G__35927;
i__35273_35824 = G__35928;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35259){
var G__35260 = cljs.core.first(seq35259);
var seq35259__$1 = cljs.core.next(seq35259);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35260,seq35259__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35929 = arguments.length;
var i__4790__auto___35930 = (0);
while(true){
if((i__4790__auto___35930 < len__4789__auto___35929)){
args__4795__auto__.push((arguments[i__4790__auto___35930]));

var G__35931 = (i__4790__auto___35930 + (1));
i__4790__auto___35930 = G__35931;
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

var vec__35353_35932 = dommy.core.elem_and_selector(elem_sel);
var elem_35933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35932,(0),null);
var selector_35934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35932,(1),null);
var seq__35356_35935 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35357_35936 = null;
var count__35358_35937 = (0);
var i__35359_35938 = (0);
while(true){
if((i__35359_35938 < count__35358_35937)){
var vec__35367_35939 = chunk__35357_35936.cljs$core$IIndexed$_nth$arity$2(null,i__35359_35938);
var type_35940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367_35939,(0),null);
var f_35941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367_35939,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35940,((function (seq__35356_35935,chunk__35357_35936,count__35358_35937,i__35359_35938,vec__35367_35939,type_35940,f_35941,vec__35353_35932,elem_35933,selector_35934){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35940,dommy$core$this_fn], 0));

return (f_35941.cljs$core$IFn$_invoke$arity$1 ? f_35941.cljs$core$IFn$_invoke$arity$1(e) : f_35941.call(null,e));
});})(seq__35356_35935,chunk__35357_35936,count__35358_35937,i__35359_35938,vec__35367_35939,type_35940,f_35941,vec__35353_35932,elem_35933,selector_35934))
], 0));


var G__35942 = seq__35356_35935;
var G__35943 = chunk__35357_35936;
var G__35944 = count__35358_35937;
var G__35945 = (i__35359_35938 + (1));
seq__35356_35935 = G__35942;
chunk__35357_35936 = G__35943;
count__35358_35937 = G__35944;
i__35359_35938 = G__35945;
continue;
} else {
var temp__5735__auto___35946 = cljs.core.seq(seq__35356_35935);
if(temp__5735__auto___35946){
var seq__35356_35947__$1 = temp__5735__auto___35946;
if(cljs.core.chunked_seq_QMARK_(seq__35356_35947__$1)){
var c__4609__auto___35948 = cljs.core.chunk_first(seq__35356_35947__$1);
var G__35949 = cljs.core.chunk_rest(seq__35356_35947__$1);
var G__35950 = c__4609__auto___35948;
var G__35951 = cljs.core.count(c__4609__auto___35948);
var G__35952 = (0);
seq__35356_35935 = G__35949;
chunk__35357_35936 = G__35950;
count__35358_35937 = G__35951;
i__35359_35938 = G__35952;
continue;
} else {
var vec__35371_35953 = cljs.core.first(seq__35356_35947__$1);
var type_35954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371_35953,(0),null);
var f_35955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35371_35953,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35954,((function (seq__35356_35935,chunk__35357_35936,count__35358_35937,i__35359_35938,vec__35371_35953,type_35954,f_35955,seq__35356_35947__$1,temp__5735__auto___35946,vec__35353_35932,elem_35933,selector_35934){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35954,dommy$core$this_fn], 0));

return (f_35955.cljs$core$IFn$_invoke$arity$1 ? f_35955.cljs$core$IFn$_invoke$arity$1(e) : f_35955.call(null,e));
});})(seq__35356_35935,chunk__35357_35936,count__35358_35937,i__35359_35938,vec__35371_35953,type_35954,f_35955,seq__35356_35947__$1,temp__5735__auto___35946,vec__35353_35932,elem_35933,selector_35934))
], 0));


var G__35956 = cljs.core.next(seq__35356_35947__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35356_35935 = G__35956;
chunk__35357_35936 = G__35957;
count__35358_35937 = G__35958;
i__35359_35938 = G__35959;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35351){
var G__35352 = cljs.core.first(seq35351);
var seq35351__$1 = cljs.core.next(seq35351);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35352,seq35351__$1);
}));


//# sourceMappingURL=dommy.core.js.map
