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
var len__4789__auto___35432 = arguments.length;
var i__4790__auto___35433 = (0);
while(true){
if((i__4790__auto___35433 < len__4789__auto___35432)){
args__4795__auto__.push((arguments[i__4790__auto___35433]));

var G__35434 = (i__4790__auto___35433 + (1));
i__4790__auto___35433 = G__35434;
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
var seq__34997_35435 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34998_35436 = null;
var count__34999_35437 = (0);
var i__35000_35438 = (0);
while(true){
if((i__35000_35438 < count__34999_35437)){
var vec__35007_35440 = chunk__34998_35436.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35438);
var k_35441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35440,(0),null);
var v_35442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35440,(1),null);
style.setProperty(dommy.utils.as_str(k_35441),v_35442);


var G__35443 = seq__34997_35435;
var G__35444 = chunk__34998_35436;
var G__35445 = count__34999_35437;
var G__35446 = (i__35000_35438 + (1));
seq__34997_35435 = G__35443;
chunk__34998_35436 = G__35444;
count__34999_35437 = G__35445;
i__35000_35438 = G__35446;
continue;
} else {
var temp__5735__auto___35447 = cljs.core.seq(seq__34997_35435);
if(temp__5735__auto___35447){
var seq__34997_35448__$1 = temp__5735__auto___35447;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35448__$1)){
var c__4609__auto___35449 = cljs.core.chunk_first(seq__34997_35448__$1);
var G__35450 = cljs.core.chunk_rest(seq__34997_35448__$1);
var G__35451 = c__4609__auto___35449;
var G__35452 = cljs.core.count(c__4609__auto___35449);
var G__35453 = (0);
seq__34997_35435 = G__35450;
chunk__34998_35436 = G__35451;
count__34999_35437 = G__35452;
i__35000_35438 = G__35453;
continue;
} else {
var vec__35010_35455 = cljs.core.first(seq__34997_35448__$1);
var k_35456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35455,(0),null);
var v_35457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35455,(1),null);
style.setProperty(dommy.utils.as_str(k_35456),v_35457);


var G__35458 = cljs.core.next(seq__34997_35448__$1);
var G__35459 = null;
var G__35460 = (0);
var G__35461 = (0);
seq__34997_35435 = G__35458;
chunk__34998_35436 = G__35459;
count__34999_35437 = G__35460;
i__35000_35438 = G__35461;
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
var len__4789__auto___35462 = arguments.length;
var i__4790__auto___35463 = (0);
while(true){
if((i__4790__auto___35463 < len__4789__auto___35462)){
args__4795__auto__.push((arguments[i__4790__auto___35463]));

var G__35464 = (i__4790__auto___35463 + (1));
i__4790__auto___35463 = G__35464;
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
var seq__35015_35465 = cljs.core.seq(keywords);
var chunk__35016_35466 = null;
var count__35017_35467 = (0);
var i__35018_35468 = (0);
while(true){
if((i__35018_35468 < count__35017_35467)){
var kw_35469 = chunk__35016_35466.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35468);
style.removeProperty(dommy.utils.as_str(kw_35469));


var G__35470 = seq__35015_35465;
var G__35471 = chunk__35016_35466;
var G__35472 = count__35017_35467;
var G__35473 = (i__35018_35468 + (1));
seq__35015_35465 = G__35470;
chunk__35016_35466 = G__35471;
count__35017_35467 = G__35472;
i__35018_35468 = G__35473;
continue;
} else {
var temp__5735__auto___35474 = cljs.core.seq(seq__35015_35465);
if(temp__5735__auto___35474){
var seq__35015_35475__$1 = temp__5735__auto___35474;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35475__$1)){
var c__4609__auto___35476 = cljs.core.chunk_first(seq__35015_35475__$1);
var G__35477 = cljs.core.chunk_rest(seq__35015_35475__$1);
var G__35478 = c__4609__auto___35476;
var G__35479 = cljs.core.count(c__4609__auto___35476);
var G__35480 = (0);
seq__35015_35465 = G__35477;
chunk__35016_35466 = G__35478;
count__35017_35467 = G__35479;
i__35018_35468 = G__35480;
continue;
} else {
var kw_35481 = cljs.core.first(seq__35015_35475__$1);
style.removeProperty(dommy.utils.as_str(kw_35481));


var G__35482 = cljs.core.next(seq__35015_35475__$1);
var G__35483 = null;
var G__35484 = (0);
var G__35485 = (0);
seq__35015_35465 = G__35482;
chunk__35016_35466 = G__35483;
count__35017_35467 = G__35484;
i__35018_35468 = G__35485;
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
var len__4789__auto___35486 = arguments.length;
var i__4790__auto___35487 = (0);
while(true){
if((i__4790__auto___35487 < len__4789__auto___35486)){
args__4795__auto__.push((arguments[i__4790__auto___35487]));

var G__35488 = (i__4790__auto___35487 + (1));
i__4790__auto___35487 = G__35488;
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

var seq__35022_35489 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35023_35490 = null;
var count__35024_35491 = (0);
var i__35025_35492 = (0);
while(true){
if((i__35025_35492 < count__35024_35491)){
var vec__35032_35493 = chunk__35023_35490.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35492);
var k_35494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35493,(0),null);
var v_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35493,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35494,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35495),"px"].join('')], 0));


var G__35496 = seq__35022_35489;
var G__35497 = chunk__35023_35490;
var G__35498 = count__35024_35491;
var G__35499 = (i__35025_35492 + (1));
seq__35022_35489 = G__35496;
chunk__35023_35490 = G__35497;
count__35024_35491 = G__35498;
i__35025_35492 = G__35499;
continue;
} else {
var temp__5735__auto___35500 = cljs.core.seq(seq__35022_35489);
if(temp__5735__auto___35500){
var seq__35022_35501__$1 = temp__5735__auto___35500;
if(cljs.core.chunked_seq_QMARK_(seq__35022_35501__$1)){
var c__4609__auto___35502 = cljs.core.chunk_first(seq__35022_35501__$1);
var G__35503 = cljs.core.chunk_rest(seq__35022_35501__$1);
var G__35504 = c__4609__auto___35502;
var G__35505 = cljs.core.count(c__4609__auto___35502);
var G__35506 = (0);
seq__35022_35489 = G__35503;
chunk__35023_35490 = G__35504;
count__35024_35491 = G__35505;
i__35025_35492 = G__35506;
continue;
} else {
var vec__35035_35507 = cljs.core.first(seq__35022_35501__$1);
var k_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35507,(0),null);
var v_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35507,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35508,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35509),"px"].join('')], 0));


var G__35510 = cljs.core.next(seq__35022_35501__$1);
var G__35511 = null;
var G__35512 = (0);
var G__35513 = (0);
seq__35022_35489 = G__35510;
chunk__35023_35490 = G__35511;
count__35024_35491 = G__35512;
i__35025_35492 = G__35513;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35020){
var G__35021 = cljs.core.first(seq35020);
var seq35020__$1 = cljs.core.next(seq35020);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35021,seq35020__$1);
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
var len__4789__auto___35515 = arguments.length;
var i__4790__auto___35516 = (0);
while(true){
if((i__4790__auto___35516 < len__4789__auto___35515)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35516]));

var G__35517 = (i__4790__auto___35516 + (1));
i__4790__auto___35516 = G__35517;
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

var seq__35046_35518 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35047_35519 = null;
var count__35048_35520 = (0);
var i__35049_35521 = (0);
while(true){
if((i__35049_35521 < count__35048_35520)){
var vec__35056_35522 = chunk__35047_35519.cljs$core$IIndexed$_nth$arity$2(null,i__35049_35521);
var k_35523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35522,(0),null);
var v_35524__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35522,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35523__$1,v_35524__$1);


var G__35525 = seq__35046_35518;
var G__35526 = chunk__35047_35519;
var G__35527 = count__35048_35520;
var G__35528 = (i__35049_35521 + (1));
seq__35046_35518 = G__35525;
chunk__35047_35519 = G__35526;
count__35048_35520 = G__35527;
i__35049_35521 = G__35528;
continue;
} else {
var temp__5735__auto___35529 = cljs.core.seq(seq__35046_35518);
if(temp__5735__auto___35529){
var seq__35046_35530__$1 = temp__5735__auto___35529;
if(cljs.core.chunked_seq_QMARK_(seq__35046_35530__$1)){
var c__4609__auto___35531 = cljs.core.chunk_first(seq__35046_35530__$1);
var G__35532 = cljs.core.chunk_rest(seq__35046_35530__$1);
var G__35533 = c__4609__auto___35531;
var G__35534 = cljs.core.count(c__4609__auto___35531);
var G__35535 = (0);
seq__35046_35518 = G__35532;
chunk__35047_35519 = G__35533;
count__35048_35520 = G__35534;
i__35049_35521 = G__35535;
continue;
} else {
var vec__35059_35536 = cljs.core.first(seq__35046_35530__$1);
var k_35537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35536,(0),null);
var v_35538__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35536,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35537__$1,v_35538__$1);


var G__35539 = cljs.core.next(seq__35046_35530__$1);
var G__35540 = null;
var G__35541 = (0);
var G__35542 = (0);
seq__35046_35518 = G__35539;
chunk__35047_35519 = G__35540;
count__35048_35520 = G__35541;
i__35049_35521 = G__35542;
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
var c_35602 = chunk__35084_35598.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35600);
var class_name_35603 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35603,c_35602))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35603 === ""))?c_35602:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35603)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35602)].join('')));
}


var G__35605 = seq__35083_35597;
var G__35606 = chunk__35084_35598;
var G__35607 = count__35085_35599;
var G__35608 = (i__35086_35600 + (1));
seq__35083_35597 = G__35605;
chunk__35084_35598 = G__35606;
count__35085_35599 = G__35607;
i__35086_35600 = G__35608;
continue;
} else {
var temp__5735__auto___35609 = cljs.core.seq(seq__35083_35597);
if(temp__5735__auto___35609){
var seq__35083_35610__$1 = temp__5735__auto___35609;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35610__$1)){
var c__4609__auto___35611 = cljs.core.chunk_first(seq__35083_35610__$1);
var G__35612 = cljs.core.chunk_rest(seq__35083_35610__$1);
var G__35613 = c__4609__auto___35611;
var G__35614 = cljs.core.count(c__4609__auto___35611);
var G__35615 = (0);
seq__35083_35597 = G__35612;
chunk__35084_35598 = G__35613;
count__35085_35599 = G__35614;
i__35086_35600 = G__35615;
continue;
} else {
var c_35616 = cljs.core.first(seq__35083_35610__$1);
var class_name_35617 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35617,c_35616))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35617 === ""))?c_35616:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35617)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35616)].join('')));
}


var G__35618 = cljs.core.next(seq__35083_35610__$1);
var G__35619 = null;
var G__35620 = (0);
var G__35621 = (0);
seq__35083_35597 = G__35618;
chunk__35084_35598 = G__35619;
count__35085_35599 = G__35620;
i__35086_35600 = G__35621;
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
var seq__35087_35622 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35088_35623 = null;
var count__35089_35624 = (0);
var i__35090_35625 = (0);
while(true){
if((i__35090_35625 < count__35089_35624)){
var c_35626 = chunk__35088_35623.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35625);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35626);


var G__35627 = seq__35087_35622;
var G__35628 = chunk__35088_35623;
var G__35629 = count__35089_35624;
var G__35630 = (i__35090_35625 + (1));
seq__35087_35622 = G__35627;
chunk__35088_35623 = G__35628;
count__35089_35624 = G__35629;
i__35090_35625 = G__35630;
continue;
} else {
var temp__5735__auto___35631 = cljs.core.seq(seq__35087_35622);
if(temp__5735__auto___35631){
var seq__35087_35632__$1 = temp__5735__auto___35631;
if(cljs.core.chunked_seq_QMARK_(seq__35087_35632__$1)){
var c__4609__auto___35633 = cljs.core.chunk_first(seq__35087_35632__$1);
var G__35634 = cljs.core.chunk_rest(seq__35087_35632__$1);
var G__35635 = c__4609__auto___35633;
var G__35636 = cljs.core.count(c__4609__auto___35633);
var G__35637 = (0);
seq__35087_35622 = G__35634;
chunk__35088_35623 = G__35635;
count__35089_35624 = G__35636;
i__35090_35625 = G__35637;
continue;
} else {
var c_35638 = cljs.core.first(seq__35087_35632__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35638);


var G__35639 = cljs.core.next(seq__35087_35632__$1);
var G__35640 = null;
var G__35641 = (0);
var G__35642 = (0);
seq__35087_35622 = G__35639;
chunk__35088_35623 = G__35640;
count__35089_35624 = G__35641;
i__35090_35625 = G__35642;
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
var len__4789__auto___35645 = arguments.length;
var i__4790__auto___35646 = (0);
while(true){
if((i__4790__auto___35646 < len__4789__auto___35645)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35646]));

var G__35648 = (i__4790__auto___35646 + (1));
i__4790__auto___35646 = G__35648;
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
var temp__5733__auto___35649 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35649)){
var class_list_35650 = temp__5733__auto___35649;
class_list_35650.remove(c__$1);
} else {
var class_name_35651 = dommy.core.class$(elem);
var new_class_name_35652 = dommy.utils.remove_class_str(class_name_35651,c__$1);
if((class_name_35651 === new_class_name_35652)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35652);
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


var G__35653 = seq__35096;
var G__35654 = chunk__35097;
var G__35655 = count__35098;
var G__35656 = (i__35099 + (1));
seq__35096 = G__35653;
chunk__35097 = G__35654;
count__35098 = G__35655;
i__35099 = G__35656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35096);
if(temp__5735__auto__){
var seq__35096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35096__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35096__$1);
var G__35658 = cljs.core.chunk_rest(seq__35096__$1);
var G__35659 = c__4609__auto__;
var G__35660 = cljs.core.count(c__4609__auto__);
var G__35661 = (0);
seq__35096 = G__35658;
chunk__35097 = G__35659;
count__35098 = G__35660;
i__35099 = G__35661;
continue;
} else {
var c = cljs.core.first(seq__35096__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35663 = cljs.core.next(seq__35096__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35096 = G__35663;
chunk__35097 = G__35664;
count__35098 = G__35665;
i__35099 = G__35666;
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
var temp__5733__auto___35668 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35668)){
var class_list_35669 = temp__5733__auto___35668;
class_list_35669.toggle(c__$1);
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
var G__35111 = arguments.length;
switch (G__35111) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35673 = arguments.length;
var i__4790__auto___35674 = (0);
while(true){
if((i__4790__auto___35674 < len__4789__auto___35673)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35674]));

var G__35675 = (i__4790__auto___35674 + (1));
i__4790__auto___35674 = G__35675;
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
var G__35114 = parent;
G__35114.appendChild(child);

return G__35114;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35115_35676 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35116_35677 = null;
var count__35117_35678 = (0);
var i__35118_35679 = (0);
while(true){
if((i__35118_35679 < count__35117_35678)){
var c_35680 = chunk__35116_35677.cljs$core$IIndexed$_nth$arity$2(null,i__35118_35679);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35680);


var G__35681 = seq__35115_35676;
var G__35682 = chunk__35116_35677;
var G__35683 = count__35117_35678;
var G__35684 = (i__35118_35679 + (1));
seq__35115_35676 = G__35681;
chunk__35116_35677 = G__35682;
count__35117_35678 = G__35683;
i__35118_35679 = G__35684;
continue;
} else {
var temp__5735__auto___35685 = cljs.core.seq(seq__35115_35676);
if(temp__5735__auto___35685){
var seq__35115_35686__$1 = temp__5735__auto___35685;
if(cljs.core.chunked_seq_QMARK_(seq__35115_35686__$1)){
var c__4609__auto___35687 = cljs.core.chunk_first(seq__35115_35686__$1);
var G__35688 = cljs.core.chunk_rest(seq__35115_35686__$1);
var G__35689 = c__4609__auto___35687;
var G__35690 = cljs.core.count(c__4609__auto___35687);
var G__35691 = (0);
seq__35115_35676 = G__35688;
chunk__35116_35677 = G__35689;
count__35117_35678 = G__35690;
i__35118_35679 = G__35691;
continue;
} else {
var c_35692 = cljs.core.first(seq__35115_35686__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35692);


var G__35693 = cljs.core.next(seq__35115_35686__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35115_35676 = G__35693;
chunk__35116_35677 = G__35694;
count__35117_35678 = G__35695;
i__35118_35679 = G__35696;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35108){
var G__35109 = cljs.core.first(seq35108);
var seq35108__$1 = cljs.core.next(seq35108);
var G__35110 = cljs.core.first(seq35108__$1);
var seq35108__$2 = cljs.core.next(seq35108__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35109,G__35110,seq35108__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35123 = arguments.length;
switch (G__35123) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35698 = arguments.length;
var i__4790__auto___35699 = (0);
while(true){
if((i__4790__auto___35699 < len__4789__auto___35698)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35699]));

var G__35700 = (i__4790__auto___35699 + (1));
i__4790__auto___35699 = G__35700;
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
var seq__35125_35701 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35126_35702 = null;
var count__35127_35703 = (0);
var i__35128_35704 = (0);
while(true){
if((i__35128_35704 < count__35127_35703)){
var c_35705 = chunk__35126_35702.cljs$core$IIndexed$_nth$arity$2(null,i__35128_35704);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35705);


var G__35706 = seq__35125_35701;
var G__35707 = chunk__35126_35702;
var G__35708 = count__35127_35703;
var G__35709 = (i__35128_35704 + (1));
seq__35125_35701 = G__35706;
chunk__35126_35702 = G__35707;
count__35127_35703 = G__35708;
i__35128_35704 = G__35709;
continue;
} else {
var temp__5735__auto___35710 = cljs.core.seq(seq__35125_35701);
if(temp__5735__auto___35710){
var seq__35125_35711__$1 = temp__5735__auto___35710;
if(cljs.core.chunked_seq_QMARK_(seq__35125_35711__$1)){
var c__4609__auto___35712 = cljs.core.chunk_first(seq__35125_35711__$1);
var G__35713 = cljs.core.chunk_rest(seq__35125_35711__$1);
var G__35714 = c__4609__auto___35712;
var G__35715 = cljs.core.count(c__4609__auto___35712);
var G__35716 = (0);
seq__35125_35701 = G__35713;
chunk__35126_35702 = G__35714;
count__35127_35703 = G__35715;
i__35128_35704 = G__35716;
continue;
} else {
var c_35717 = cljs.core.first(seq__35125_35711__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35717);


var G__35718 = cljs.core.next(seq__35125_35711__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__35125_35701 = G__35718;
chunk__35126_35702 = G__35719;
count__35127_35703 = G__35720;
i__35128_35704 = G__35721;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35120){
var G__35121 = cljs.core.first(seq35120);
var seq35120__$1 = cljs.core.next(seq35120);
var G__35122 = cljs.core.first(seq35120__$1);
var seq35120__$2 = cljs.core.next(seq35120__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35121,G__35122,seq35120__$2);
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
var i__4790__auto___35727 = (0);
while(true){
if((i__4790__auto___35727 < len__4789__auto___35725)){
args__4795__auto__.push((arguments[i__4790__auto___35727]));

var G__35728 = (i__4790__auto___35727 + (1));
i__4790__auto___35727 = G__35728;
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
var len__4789__auto___35730 = arguments.length;
var i__4790__auto___35731 = (0);
while(true){
if((i__4790__auto___35731 < len__4789__auto___35730)){
args__4795__auto__.push((arguments[i__4790__auto___35731]));

var G__35733 = (i__4790__auto___35731 + (1));
i__4790__auto___35731 = G__35733;
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

var vec__35142_35734 = dommy.core.elem_and_selector(elem_sel);
var elem_35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35734,(0),null);
var selector_35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35734,(1),null);
var seq__35145_35739 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35740 = null;
var count__35153_35741 = (0);
var i__35154_35742 = (0);
while(true){
if((i__35154_35742 < count__35153_35741)){
var vec__35210_35744 = chunk__35152_35740.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35742);
var orig_type_35745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210_35744,(0),null);
var f_35746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210_35744,(1),null);
var seq__35155_35747 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35745,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35745,cljs.core.identity])));
var chunk__35157_35748 = null;
var count__35158_35749 = (0);
var i__35159_35750 = (0);
while(true){
if((i__35159_35750 < count__35158_35749)){
var vec__35223_35751 = chunk__35157_35748.cljs$core$IIndexed$_nth$arity$2(null,i__35159_35750);
var actual_type_35752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35751,(0),null);
var factory_35753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35751,(1),null);
var canonical_f_35754 = (function (){var G__35230 = (factory_35753.cljs$core$IFn$_invoke$arity$1 ? factory_35753.cljs$core$IFn$_invoke$arity$1(f_35746) : factory_35753.call(null,f_35746));
var fexpr__35229 = (cljs.core.truth_(selector_35736)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35735,selector_35736):cljs.core.identity);
return (fexpr__35229.cljs$core$IFn$_invoke$arity$1 ? fexpr__35229.cljs$core$IFn$_invoke$arity$1(G__35230) : fexpr__35229.call(null,G__35230));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35735,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35736,actual_type_35752,f_35746], null),canonical_f_35754], 0));

if(cljs.core.truth_(elem_35735.addEventListener)){
elem_35735.addEventListener(cljs.core.name(actual_type_35752),canonical_f_35754);
} else {
elem_35735.attachEvent(cljs.core.name(actual_type_35752),canonical_f_35754);
}


var G__35760 = seq__35155_35747;
var G__35761 = chunk__35157_35748;
var G__35762 = count__35158_35749;
var G__35763 = (i__35159_35750 + (1));
seq__35155_35747 = G__35760;
chunk__35157_35748 = G__35761;
count__35158_35749 = G__35762;
i__35159_35750 = G__35763;
continue;
} else {
var temp__5735__auto___35764 = cljs.core.seq(seq__35155_35747);
if(temp__5735__auto___35764){
var seq__35155_35765__$1 = temp__5735__auto___35764;
if(cljs.core.chunked_seq_QMARK_(seq__35155_35765__$1)){
var c__4609__auto___35766 = cljs.core.chunk_first(seq__35155_35765__$1);
var G__35767 = cljs.core.chunk_rest(seq__35155_35765__$1);
var G__35768 = c__4609__auto___35766;
var G__35769 = cljs.core.count(c__4609__auto___35766);
var G__35770 = (0);
seq__35155_35747 = G__35767;
chunk__35157_35748 = G__35768;
count__35158_35749 = G__35769;
i__35159_35750 = G__35770;
continue;
} else {
var vec__35231_35771 = cljs.core.first(seq__35155_35765__$1);
var actual_type_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35771,(0),null);
var factory_35773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35771,(1),null);
var canonical_f_35776 = (function (){var G__35235 = (factory_35773.cljs$core$IFn$_invoke$arity$1 ? factory_35773.cljs$core$IFn$_invoke$arity$1(f_35746) : factory_35773.call(null,f_35746));
var fexpr__35234 = (cljs.core.truth_(selector_35736)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35735,selector_35736):cljs.core.identity);
return (fexpr__35234.cljs$core$IFn$_invoke$arity$1 ? fexpr__35234.cljs$core$IFn$_invoke$arity$1(G__35235) : fexpr__35234.call(null,G__35235));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35735,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35736,actual_type_35772,f_35746], null),canonical_f_35776], 0));

if(cljs.core.truth_(elem_35735.addEventListener)){
elem_35735.addEventListener(cljs.core.name(actual_type_35772),canonical_f_35776);
} else {
elem_35735.attachEvent(cljs.core.name(actual_type_35772),canonical_f_35776);
}


var G__35777 = cljs.core.next(seq__35155_35765__$1);
var G__35778 = null;
var G__35779 = (0);
var G__35780 = (0);
seq__35155_35747 = G__35777;
chunk__35157_35748 = G__35778;
count__35158_35749 = G__35779;
i__35159_35750 = G__35780;
continue;
}
} else {
}
}
break;
}

var G__35781 = seq__35145_35739;
var G__35782 = chunk__35152_35740;
var G__35783 = count__35153_35741;
var G__35784 = (i__35154_35742 + (1));
seq__35145_35739 = G__35781;
chunk__35152_35740 = G__35782;
count__35153_35741 = G__35783;
i__35154_35742 = G__35784;
continue;
} else {
var temp__5735__auto___35786 = cljs.core.seq(seq__35145_35739);
if(temp__5735__auto___35786){
var seq__35145_35788__$1 = temp__5735__auto___35786;
if(cljs.core.chunked_seq_QMARK_(seq__35145_35788__$1)){
var c__4609__auto___35789 = cljs.core.chunk_first(seq__35145_35788__$1);
var G__35790 = cljs.core.chunk_rest(seq__35145_35788__$1);
var G__35791 = c__4609__auto___35789;
var G__35792 = cljs.core.count(c__4609__auto___35789);
var G__35793 = (0);
seq__35145_35739 = G__35790;
chunk__35152_35740 = G__35791;
count__35153_35741 = G__35792;
i__35154_35742 = G__35793;
continue;
} else {
var vec__35236_35796 = cljs.core.first(seq__35145_35788__$1);
var orig_type_35797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35236_35796,(0),null);
var f_35798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35236_35796,(1),null);
var seq__35146_35799 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35797,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35797,cljs.core.identity])));
var chunk__35148_35800 = null;
var count__35149_35801 = (0);
var i__35150_35802 = (0);
while(true){
if((i__35150_35802 < count__35149_35801)){
var vec__35249_35803 = chunk__35148_35800.cljs$core$IIndexed$_nth$arity$2(null,i__35150_35802);
var actual_type_35804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249_35803,(0),null);
var factory_35805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249_35803,(1),null);
var canonical_f_35806 = (function (){var G__35253 = (factory_35805.cljs$core$IFn$_invoke$arity$1 ? factory_35805.cljs$core$IFn$_invoke$arity$1(f_35798) : factory_35805.call(null,f_35798));
var fexpr__35252 = (cljs.core.truth_(selector_35736)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35735,selector_35736):cljs.core.identity);
return (fexpr__35252.cljs$core$IFn$_invoke$arity$1 ? fexpr__35252.cljs$core$IFn$_invoke$arity$1(G__35253) : fexpr__35252.call(null,G__35253));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35735,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35736,actual_type_35804,f_35798], null),canonical_f_35806], 0));

if(cljs.core.truth_(elem_35735.addEventListener)){
elem_35735.addEventListener(cljs.core.name(actual_type_35804),canonical_f_35806);
} else {
elem_35735.attachEvent(cljs.core.name(actual_type_35804),canonical_f_35806);
}


var G__35812 = seq__35146_35799;
var G__35813 = chunk__35148_35800;
var G__35814 = count__35149_35801;
var G__35815 = (i__35150_35802 + (1));
seq__35146_35799 = G__35812;
chunk__35148_35800 = G__35813;
count__35149_35801 = G__35814;
i__35150_35802 = G__35815;
continue;
} else {
var temp__5735__auto___35816__$1 = cljs.core.seq(seq__35146_35799);
if(temp__5735__auto___35816__$1){
var seq__35146_35818__$1 = temp__5735__auto___35816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35146_35818__$1)){
var c__4609__auto___35819 = cljs.core.chunk_first(seq__35146_35818__$1);
var G__35822 = cljs.core.chunk_rest(seq__35146_35818__$1);
var G__35823 = c__4609__auto___35819;
var G__35824 = cljs.core.count(c__4609__auto___35819);
var G__35825 = (0);
seq__35146_35799 = G__35822;
chunk__35148_35800 = G__35823;
count__35149_35801 = G__35824;
i__35150_35802 = G__35825;
continue;
} else {
var vec__35254_35828 = cljs.core.first(seq__35146_35818__$1);
var actual_type_35829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254_35828,(0),null);
var factory_35830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254_35828,(1),null);
var canonical_f_35831 = (function (){var G__35258 = (factory_35830.cljs$core$IFn$_invoke$arity$1 ? factory_35830.cljs$core$IFn$_invoke$arity$1(f_35798) : factory_35830.call(null,f_35798));
var fexpr__35257 = (cljs.core.truth_(selector_35736)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35735,selector_35736):cljs.core.identity);
return (fexpr__35257.cljs$core$IFn$_invoke$arity$1 ? fexpr__35257.cljs$core$IFn$_invoke$arity$1(G__35258) : fexpr__35257.call(null,G__35258));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35735,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35736,actual_type_35829,f_35798], null),canonical_f_35831], 0));

if(cljs.core.truth_(elem_35735.addEventListener)){
elem_35735.addEventListener(cljs.core.name(actual_type_35829),canonical_f_35831);
} else {
elem_35735.attachEvent(cljs.core.name(actual_type_35829),canonical_f_35831);
}


var G__35832 = cljs.core.next(seq__35146_35818__$1);
var G__35833 = null;
var G__35834 = (0);
var G__35835 = (0);
seq__35146_35799 = G__35832;
chunk__35148_35800 = G__35833;
count__35149_35801 = G__35834;
i__35150_35802 = G__35835;
continue;
}
} else {
}
}
break;
}

var G__35836 = cljs.core.next(seq__35145_35788__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__35145_35739 = G__35836;
chunk__35152_35740 = G__35837;
count__35153_35741 = G__35838;
i__35154_35742 = G__35839;
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
var len__4789__auto___35840 = arguments.length;
var i__4790__auto___35841 = (0);
while(true){
if((i__4790__auto___35841 < len__4789__auto___35840)){
args__4795__auto__.push((arguments[i__4790__auto___35841]));

var G__35842 = (i__4790__auto___35841 + (1));
i__4790__auto___35841 = G__35842;
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

var vec__35261_35843 = dommy.core.elem_and_selector(elem_sel);
var elem_35844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35843,(0),null);
var selector_35845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35843,(1),null);
var seq__35264_35846 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35271_35847 = null;
var count__35272_35848 = (0);
var i__35273_35849 = (0);
while(true){
if((i__35273_35849 < count__35272_35848)){
var vec__35321_35850 = chunk__35271_35847.cljs$core$IIndexed$_nth$arity$2(null,i__35273_35849);
var orig_type_35851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321_35850,(0),null);
var f_35852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321_35850,(1),null);
var seq__35274_35853 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35851,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35851,cljs.core.identity])));
var chunk__35276_35854 = null;
var count__35277_35855 = (0);
var i__35278_35856 = (0);
while(true){
if((i__35278_35856 < count__35277_35855)){
var vec__35330_35857 = chunk__35276_35854.cljs$core$IIndexed$_nth$arity$2(null,i__35278_35856);
var actual_type_35858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35857,(0),null);
var __35859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35857,(1),null);
var keys_35860 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35845,actual_type_35858,f_35852], null);
var canonical_f_35861 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35844),keys_35860);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35844,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35860], 0));

if(cljs.core.truth_(elem_35844.removeEventListener)){
elem_35844.removeEventListener(cljs.core.name(actual_type_35858),canonical_f_35861);
} else {
elem_35844.detachEvent(cljs.core.name(actual_type_35858),canonical_f_35861);
}


var G__35862 = seq__35274_35853;
var G__35863 = chunk__35276_35854;
var G__35864 = count__35277_35855;
var G__35865 = (i__35278_35856 + (1));
seq__35274_35853 = G__35862;
chunk__35276_35854 = G__35863;
count__35277_35855 = G__35864;
i__35278_35856 = G__35865;
continue;
} else {
var temp__5735__auto___35866 = cljs.core.seq(seq__35274_35853);
if(temp__5735__auto___35866){
var seq__35274_35867__$1 = temp__5735__auto___35866;
if(cljs.core.chunked_seq_QMARK_(seq__35274_35867__$1)){
var c__4609__auto___35868 = cljs.core.chunk_first(seq__35274_35867__$1);
var G__35869 = cljs.core.chunk_rest(seq__35274_35867__$1);
var G__35870 = c__4609__auto___35868;
var G__35871 = cljs.core.count(c__4609__auto___35868);
var G__35872 = (0);
seq__35274_35853 = G__35869;
chunk__35276_35854 = G__35870;
count__35277_35855 = G__35871;
i__35278_35856 = G__35872;
continue;
} else {
var vec__35333_35873 = cljs.core.first(seq__35274_35867__$1);
var actual_type_35874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333_35873,(0),null);
var __35875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333_35873,(1),null);
var keys_35876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35845,actual_type_35874,f_35852], null);
var canonical_f_35877 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35844),keys_35876);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35844,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35876], 0));

if(cljs.core.truth_(elem_35844.removeEventListener)){
elem_35844.removeEventListener(cljs.core.name(actual_type_35874),canonical_f_35877);
} else {
elem_35844.detachEvent(cljs.core.name(actual_type_35874),canonical_f_35877);
}


var G__35878 = cljs.core.next(seq__35274_35867__$1);
var G__35879 = null;
var G__35880 = (0);
var G__35881 = (0);
seq__35274_35853 = G__35878;
chunk__35276_35854 = G__35879;
count__35277_35855 = G__35880;
i__35278_35856 = G__35881;
continue;
}
} else {
}
}
break;
}

var G__35882 = seq__35264_35846;
var G__35883 = chunk__35271_35847;
var G__35884 = count__35272_35848;
var G__35885 = (i__35273_35849 + (1));
seq__35264_35846 = G__35882;
chunk__35271_35847 = G__35883;
count__35272_35848 = G__35884;
i__35273_35849 = G__35885;
continue;
} else {
var temp__5735__auto___35886 = cljs.core.seq(seq__35264_35846);
if(temp__5735__auto___35886){
var seq__35264_35887__$1 = temp__5735__auto___35886;
if(cljs.core.chunked_seq_QMARK_(seq__35264_35887__$1)){
var c__4609__auto___35888 = cljs.core.chunk_first(seq__35264_35887__$1);
var G__35889 = cljs.core.chunk_rest(seq__35264_35887__$1);
var G__35890 = c__4609__auto___35888;
var G__35891 = cljs.core.count(c__4609__auto___35888);
var G__35892 = (0);
seq__35264_35846 = G__35889;
chunk__35271_35847 = G__35890;
count__35272_35848 = G__35891;
i__35273_35849 = G__35892;
continue;
} else {
var vec__35338_35893 = cljs.core.first(seq__35264_35887__$1);
var orig_type_35894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35338_35893,(0),null);
var f_35895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35338_35893,(1),null);
var seq__35265_35896 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35894,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35894,cljs.core.identity])));
var chunk__35267_35897 = null;
var count__35268_35898 = (0);
var i__35269_35899 = (0);
while(true){
if((i__35269_35899 < count__35268_35898)){
var vec__35350_35900 = chunk__35267_35897.cljs$core$IIndexed$_nth$arity$2(null,i__35269_35899);
var actual_type_35901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350_35900,(0),null);
var __35902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350_35900,(1),null);
var keys_35903 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35845,actual_type_35901,f_35895], null);
var canonical_f_35904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35844),keys_35903);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35844,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35903], 0));

if(cljs.core.truth_(elem_35844.removeEventListener)){
elem_35844.removeEventListener(cljs.core.name(actual_type_35901),canonical_f_35904);
} else {
elem_35844.detachEvent(cljs.core.name(actual_type_35901),canonical_f_35904);
}


var G__35905 = seq__35265_35896;
var G__35906 = chunk__35267_35897;
var G__35907 = count__35268_35898;
var G__35908 = (i__35269_35899 + (1));
seq__35265_35896 = G__35905;
chunk__35267_35897 = G__35906;
count__35268_35898 = G__35907;
i__35269_35899 = G__35908;
continue;
} else {
var temp__5735__auto___35909__$1 = cljs.core.seq(seq__35265_35896);
if(temp__5735__auto___35909__$1){
var seq__35265_35910__$1 = temp__5735__auto___35909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35265_35910__$1)){
var c__4609__auto___35911 = cljs.core.chunk_first(seq__35265_35910__$1);
var G__35912 = cljs.core.chunk_rest(seq__35265_35910__$1);
var G__35913 = c__4609__auto___35911;
var G__35914 = cljs.core.count(c__4609__auto___35911);
var G__35915 = (0);
seq__35265_35896 = G__35912;
chunk__35267_35897 = G__35913;
count__35268_35898 = G__35914;
i__35269_35899 = G__35915;
continue;
} else {
var vec__35353_35916 = cljs.core.first(seq__35265_35910__$1);
var actual_type_35917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35916,(0),null);
var __35918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35916,(1),null);
var keys_35919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35845,actual_type_35917,f_35895], null);
var canonical_f_35920 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35844),keys_35919);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35844,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35919], 0));

if(cljs.core.truth_(elem_35844.removeEventListener)){
elem_35844.removeEventListener(cljs.core.name(actual_type_35917),canonical_f_35920);
} else {
elem_35844.detachEvent(cljs.core.name(actual_type_35917),canonical_f_35920);
}


var G__35921 = cljs.core.next(seq__35265_35910__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35265_35896 = G__35921;
chunk__35267_35897 = G__35922;
count__35268_35898 = G__35923;
i__35269_35899 = G__35924;
continue;
}
} else {
}
}
break;
}

var G__35925 = cljs.core.next(seq__35264_35887__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35264_35846 = G__35925;
chunk__35271_35847 = G__35926;
count__35272_35848 = G__35927;
i__35273_35849 = G__35928;
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

var vec__35362_35932 = dommy.core.elem_and_selector(elem_sel);
var elem_35933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35932,(0),null);
var selector_35934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35932,(1),null);
var seq__35365_35935 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35366_35936 = null;
var count__35367_35937 = (0);
var i__35368_35938 = (0);
while(true){
if((i__35368_35938 < count__35367_35937)){
var vec__35394_35939 = chunk__35366_35936.cljs$core$IIndexed$_nth$arity$2(null,i__35368_35938);
var type_35940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394_35939,(0),null);
var f_35941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394_35939,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35940,((function (seq__35365_35935,chunk__35366_35936,count__35367_35937,i__35368_35938,vec__35394_35939,type_35940,f_35941,vec__35362_35932,elem_35933,selector_35934){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35940,dommy$core$this_fn], 0));

return (f_35941.cljs$core$IFn$_invoke$arity$1 ? f_35941.cljs$core$IFn$_invoke$arity$1(e) : f_35941.call(null,e));
});})(seq__35365_35935,chunk__35366_35936,count__35367_35937,i__35368_35938,vec__35394_35939,type_35940,f_35941,vec__35362_35932,elem_35933,selector_35934))
], 0));


var G__35942 = seq__35365_35935;
var G__35943 = chunk__35366_35936;
var G__35944 = count__35367_35937;
var G__35945 = (i__35368_35938 + (1));
seq__35365_35935 = G__35942;
chunk__35366_35936 = G__35943;
count__35367_35937 = G__35944;
i__35368_35938 = G__35945;
continue;
} else {
var temp__5735__auto___35946 = cljs.core.seq(seq__35365_35935);
if(temp__5735__auto___35946){
var seq__35365_35947__$1 = temp__5735__auto___35946;
if(cljs.core.chunked_seq_QMARK_(seq__35365_35947__$1)){
var c__4609__auto___35948 = cljs.core.chunk_first(seq__35365_35947__$1);
var G__35949 = cljs.core.chunk_rest(seq__35365_35947__$1);
var G__35950 = c__4609__auto___35948;
var G__35951 = cljs.core.count(c__4609__auto___35948);
var G__35952 = (0);
seq__35365_35935 = G__35949;
chunk__35366_35936 = G__35950;
count__35367_35937 = G__35951;
i__35368_35938 = G__35952;
continue;
} else {
var vec__35401_35953 = cljs.core.first(seq__35365_35947__$1);
var type_35954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401_35953,(0),null);
var f_35955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401_35953,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35954,((function (seq__35365_35935,chunk__35366_35936,count__35367_35937,i__35368_35938,vec__35401_35953,type_35954,f_35955,seq__35365_35947__$1,temp__5735__auto___35946,vec__35362_35932,elem_35933,selector_35934){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35954,dommy$core$this_fn], 0));

return (f_35955.cljs$core$IFn$_invoke$arity$1 ? f_35955.cljs$core$IFn$_invoke$arity$1(e) : f_35955.call(null,e));
});})(seq__35365_35935,chunk__35366_35936,count__35367_35937,i__35368_35938,vec__35401_35953,type_35954,f_35955,seq__35365_35947__$1,temp__5735__auto___35946,vec__35362_35932,elem_35933,selector_35934))
], 0));


var G__35956 = cljs.core.next(seq__35365_35947__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35365_35935 = G__35956;
chunk__35366_35936 = G__35957;
count__35367_35937 = G__35958;
i__35368_35938 = G__35959;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35356){
var G__35357 = cljs.core.first(seq35356);
var seq35356__$1 = cljs.core.next(seq35356);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35357,seq35356__$1);
}));


//# sourceMappingURL=dommy.core.js.map
