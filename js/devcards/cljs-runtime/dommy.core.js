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
var len__4789__auto___35434 = arguments.length;
var i__4790__auto___35435 = (0);
while(true){
if((i__4790__auto___35435 < len__4789__auto___35434)){
args__4795__auto__.push((arguments[i__4790__auto___35435]));

var G__35436 = (i__4790__auto___35435 + (1));
i__4790__auto___35435 = G__35436;
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
var seq__34997_35437 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34998_35438 = null;
var count__34999_35439 = (0);
var i__35000_35440 = (0);
while(true){
if((i__35000_35440 < count__34999_35439)){
var vec__35007_35441 = chunk__34998_35438.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35440);
var k_35442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35441,(0),null);
var v_35443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35441,(1),null);
style.setProperty(dommy.utils.as_str(k_35442),v_35443);


var G__35444 = seq__34997_35437;
var G__35445 = chunk__34998_35438;
var G__35446 = count__34999_35439;
var G__35447 = (i__35000_35440 + (1));
seq__34997_35437 = G__35444;
chunk__34998_35438 = G__35445;
count__34999_35439 = G__35446;
i__35000_35440 = G__35447;
continue;
} else {
var temp__5735__auto___35448 = cljs.core.seq(seq__34997_35437);
if(temp__5735__auto___35448){
var seq__34997_35449__$1 = temp__5735__auto___35448;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35449__$1)){
var c__4609__auto___35450 = cljs.core.chunk_first(seq__34997_35449__$1);
var G__35451 = cljs.core.chunk_rest(seq__34997_35449__$1);
var G__35452 = c__4609__auto___35450;
var G__35453 = cljs.core.count(c__4609__auto___35450);
var G__35454 = (0);
seq__34997_35437 = G__35451;
chunk__34998_35438 = G__35452;
count__34999_35439 = G__35453;
i__35000_35440 = G__35454;
continue;
} else {
var vec__35010_35455 = cljs.core.first(seq__34997_35449__$1);
var k_35456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35455,(0),null);
var v_35457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35455,(1),null);
style.setProperty(dommy.utils.as_str(k_35456),v_35457);


var G__35458 = cljs.core.next(seq__34997_35449__$1);
var G__35459 = null;
var G__35460 = (0);
var G__35461 = (0);
seq__34997_35437 = G__35458;
chunk__34998_35438 = G__35459;
count__34999_35439 = G__35460;
i__35000_35440 = G__35461;
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
var seq__35015_35476__$1 = temp__5735__auto___35474;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35476__$1)){
var c__4609__auto___35477 = cljs.core.chunk_first(seq__35015_35476__$1);
var G__35479 = cljs.core.chunk_rest(seq__35015_35476__$1);
var G__35480 = c__4609__auto___35477;
var G__35481 = cljs.core.count(c__4609__auto___35477);
var G__35482 = (0);
seq__35015_35465 = G__35479;
chunk__35016_35466 = G__35480;
count__35017_35467 = G__35481;
i__35018_35468 = G__35482;
continue;
} else {
var kw_35483 = cljs.core.first(seq__35015_35476__$1);
style.removeProperty(dommy.utils.as_str(kw_35483));


var G__35484 = cljs.core.next(seq__35015_35476__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__35015_35465 = G__35484;
chunk__35016_35466 = G__35485;
count__35017_35467 = G__35486;
i__35018_35468 = G__35487;
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
var len__4789__auto___35488 = arguments.length;
var i__4790__auto___35489 = (0);
while(true){
if((i__4790__auto___35489 < len__4789__auto___35488)){
args__4795__auto__.push((arguments[i__4790__auto___35489]));

var G__35490 = (i__4790__auto___35489 + (1));
i__4790__auto___35489 = G__35490;
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

var seq__35022_35491 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35023_35492 = null;
var count__35024_35493 = (0);
var i__35025_35494 = (0);
while(true){
if((i__35025_35494 < count__35024_35493)){
var vec__35032_35495 = chunk__35023_35492.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35494);
var k_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35495,(0),null);
var v_35497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35495,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35496,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35497),"px"].join('')], 0));


var G__35498 = seq__35022_35491;
var G__35499 = chunk__35023_35492;
var G__35500 = count__35024_35493;
var G__35501 = (i__35025_35494 + (1));
seq__35022_35491 = G__35498;
chunk__35023_35492 = G__35499;
count__35024_35493 = G__35500;
i__35025_35494 = G__35501;
continue;
} else {
var temp__5735__auto___35502 = cljs.core.seq(seq__35022_35491);
if(temp__5735__auto___35502){
var seq__35022_35504__$1 = temp__5735__auto___35502;
if(cljs.core.chunked_seq_QMARK_(seq__35022_35504__$1)){
var c__4609__auto___35505 = cljs.core.chunk_first(seq__35022_35504__$1);
var G__35507 = cljs.core.chunk_rest(seq__35022_35504__$1);
var G__35508 = c__4609__auto___35505;
var G__35509 = cljs.core.count(c__4609__auto___35505);
var G__35510 = (0);
seq__35022_35491 = G__35507;
chunk__35023_35492 = G__35508;
count__35024_35493 = G__35509;
i__35025_35494 = G__35510;
continue;
} else {
var vec__35035_35511 = cljs.core.first(seq__35022_35504__$1);
var k_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35511,(0),null);
var v_35513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35511,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35512,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35513),"px"].join('')], 0));


var G__35514 = cljs.core.next(seq__35022_35504__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__35022_35491 = G__35514;
chunk__35023_35492 = G__35515;
count__35024_35493 = G__35516;
i__35025_35494 = G__35517;
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
var len__4789__auto___35521 = arguments.length;
var i__4790__auto___35522 = (0);
while(true){
if((i__4790__auto___35522 < len__4789__auto___35521)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35522]));

var G__35523 = (i__4790__auto___35522 + (1));
i__4790__auto___35522 = G__35523;
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

var seq__35046_35524 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35047_35525 = null;
var count__35048_35526 = (0);
var i__35049_35527 = (0);
while(true){
if((i__35049_35527 < count__35048_35526)){
var vec__35056_35528 = chunk__35047_35525.cljs$core$IIndexed$_nth$arity$2(null,i__35049_35527);
var k_35529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35528,(0),null);
var v_35530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35528,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35529__$1,v_35530__$1);


var G__35531 = seq__35046_35524;
var G__35532 = chunk__35047_35525;
var G__35533 = count__35048_35526;
var G__35534 = (i__35049_35527 + (1));
seq__35046_35524 = G__35531;
chunk__35047_35525 = G__35532;
count__35048_35526 = G__35533;
i__35049_35527 = G__35534;
continue;
} else {
var temp__5735__auto___35535 = cljs.core.seq(seq__35046_35524);
if(temp__5735__auto___35535){
var seq__35046_35536__$1 = temp__5735__auto___35535;
if(cljs.core.chunked_seq_QMARK_(seq__35046_35536__$1)){
var c__4609__auto___35537 = cljs.core.chunk_first(seq__35046_35536__$1);
var G__35538 = cljs.core.chunk_rest(seq__35046_35536__$1);
var G__35539 = c__4609__auto___35537;
var G__35540 = cljs.core.count(c__4609__auto___35537);
var G__35541 = (0);
seq__35046_35524 = G__35538;
chunk__35047_35525 = G__35539;
count__35048_35526 = G__35540;
i__35049_35527 = G__35541;
continue;
} else {
var vec__35059_35542 = cljs.core.first(seq__35046_35536__$1);
var k_35543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35542,(0),null);
var v_35544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35542,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35543__$1,v_35544__$1);


var G__35545 = cljs.core.next(seq__35046_35536__$1);
var G__35546 = null;
var G__35547 = (0);
var G__35548 = (0);
seq__35046_35524 = G__35545;
chunk__35047_35525 = G__35546;
count__35048_35526 = G__35547;
i__35049_35527 = G__35548;
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
var len__4789__auto___35550 = arguments.length;
var i__4790__auto___35551 = (0);
while(true){
if((i__4790__auto___35551 < len__4789__auto___35550)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35551]));

var G__35552 = (i__4790__auto___35551 + (1));
i__4790__auto___35551 = G__35552;
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
var k_35553__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35067.cljs$core$IFn$_invoke$arity$1 ? fexpr__35067.cljs$core$IFn$_invoke$arity$1(k_35553__$1) : fexpr__35067.call(null,k_35553__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35553__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35068_35554 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35069_35555 = null;
var count__35070_35556 = (0);
var i__35071_35557 = (0);
while(true){
if((i__35071_35557 < count__35070_35556)){
var k_35558__$1 = chunk__35069_35555.cljs$core$IIndexed$_nth$arity$2(null,i__35071_35557);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35558__$1);


var G__35559 = seq__35068_35554;
var G__35560 = chunk__35069_35555;
var G__35561 = count__35070_35556;
var G__35562 = (i__35071_35557 + (1));
seq__35068_35554 = G__35559;
chunk__35069_35555 = G__35560;
count__35070_35556 = G__35561;
i__35071_35557 = G__35562;
continue;
} else {
var temp__5735__auto___35563 = cljs.core.seq(seq__35068_35554);
if(temp__5735__auto___35563){
var seq__35068_35564__$1 = temp__5735__auto___35563;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35564__$1)){
var c__4609__auto___35565 = cljs.core.chunk_first(seq__35068_35564__$1);
var G__35566 = cljs.core.chunk_rest(seq__35068_35564__$1);
var G__35567 = c__4609__auto___35565;
var G__35568 = cljs.core.count(c__4609__auto___35565);
var G__35569 = (0);
seq__35068_35554 = G__35566;
chunk__35069_35555 = G__35567;
count__35070_35556 = G__35568;
i__35071_35557 = G__35569;
continue;
} else {
var k_35570__$1 = cljs.core.first(seq__35068_35564__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35570__$1);


var G__35571 = cljs.core.next(seq__35068_35564__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35068_35554 = G__35571;
chunk__35069_35555 = G__35572;
count__35070_35556 = G__35573;
i__35071_35557 = G__35574;
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
var len__4789__auto___35577 = arguments.length;
var i__4790__auto___35578 = (0);
while(true){
if((i__4790__auto___35578 < len__4789__auto___35577)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35578]));

var G__35579 = (i__4790__auto___35578 + (1));
i__4790__auto___35578 = G__35579;
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
var temp__5733__auto___35580 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35580)){
var class_list_35581 = temp__5733__auto___35580;
var seq__35079_35582 = cljs.core.seq(classes__$1);
var chunk__35080_35583 = null;
var count__35081_35584 = (0);
var i__35082_35585 = (0);
while(true){
if((i__35082_35585 < count__35081_35584)){
var c_35586 = chunk__35080_35583.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35585);
class_list_35581.add(c_35586);


var G__35587 = seq__35079_35582;
var G__35588 = chunk__35080_35583;
var G__35589 = count__35081_35584;
var G__35590 = (i__35082_35585 + (1));
seq__35079_35582 = G__35587;
chunk__35080_35583 = G__35588;
count__35081_35584 = G__35589;
i__35082_35585 = G__35590;
continue;
} else {
var temp__5735__auto___35591 = cljs.core.seq(seq__35079_35582);
if(temp__5735__auto___35591){
var seq__35079_35592__$1 = temp__5735__auto___35591;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35592__$1)){
var c__4609__auto___35593 = cljs.core.chunk_first(seq__35079_35592__$1);
var G__35594 = cljs.core.chunk_rest(seq__35079_35592__$1);
var G__35595 = c__4609__auto___35593;
var G__35596 = cljs.core.count(c__4609__auto___35593);
var G__35597 = (0);
seq__35079_35582 = G__35594;
chunk__35080_35583 = G__35595;
count__35081_35584 = G__35596;
i__35082_35585 = G__35597;
continue;
} else {
var c_35598 = cljs.core.first(seq__35079_35592__$1);
class_list_35581.add(c_35598);


var G__35599 = cljs.core.next(seq__35079_35592__$1);
var G__35600 = null;
var G__35601 = (0);
var G__35602 = (0);
seq__35079_35582 = G__35599;
chunk__35080_35583 = G__35600;
count__35081_35584 = G__35601;
i__35082_35585 = G__35602;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35083_35603 = cljs.core.seq(classes__$1);
var chunk__35084_35604 = null;
var count__35085_35605 = (0);
var i__35086_35606 = (0);
while(true){
if((i__35086_35606 < count__35085_35605)){
var c_35607 = chunk__35084_35604.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35606);
var class_name_35608 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35608,c_35607))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35608 === ""))?c_35607:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35608)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35607)].join('')));
}


var G__35609 = seq__35083_35603;
var G__35610 = chunk__35084_35604;
var G__35611 = count__35085_35605;
var G__35612 = (i__35086_35606 + (1));
seq__35083_35603 = G__35609;
chunk__35084_35604 = G__35610;
count__35085_35605 = G__35611;
i__35086_35606 = G__35612;
continue;
} else {
var temp__5735__auto___35614 = cljs.core.seq(seq__35083_35603);
if(temp__5735__auto___35614){
var seq__35083_35615__$1 = temp__5735__auto___35614;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35615__$1)){
var c__4609__auto___35616 = cljs.core.chunk_first(seq__35083_35615__$1);
var G__35617 = cljs.core.chunk_rest(seq__35083_35615__$1);
var G__35618 = c__4609__auto___35616;
var G__35619 = cljs.core.count(c__4609__auto___35616);
var G__35620 = (0);
seq__35083_35603 = G__35617;
chunk__35084_35604 = G__35618;
count__35085_35605 = G__35619;
i__35086_35606 = G__35620;
continue;
} else {
var c_35622 = cljs.core.first(seq__35083_35615__$1);
var class_name_35623 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35623,c_35622))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35623 === ""))?c_35622:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35623)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35622)].join('')));
}


var G__35624 = cljs.core.next(seq__35083_35615__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__35083_35603 = G__35624;
chunk__35084_35604 = G__35625;
count__35085_35605 = G__35626;
i__35086_35606 = G__35627;
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
var seq__35087_35628 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35088_35629 = null;
var count__35089_35630 = (0);
var i__35090_35631 = (0);
while(true){
if((i__35090_35631 < count__35089_35630)){
var c_35632 = chunk__35088_35629.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35631);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35632);


var G__35634 = seq__35087_35628;
var G__35635 = chunk__35088_35629;
var G__35636 = count__35089_35630;
var G__35637 = (i__35090_35631 + (1));
seq__35087_35628 = G__35634;
chunk__35088_35629 = G__35635;
count__35089_35630 = G__35636;
i__35090_35631 = G__35637;
continue;
} else {
var temp__5735__auto___35638 = cljs.core.seq(seq__35087_35628);
if(temp__5735__auto___35638){
var seq__35087_35639__$1 = temp__5735__auto___35638;
if(cljs.core.chunked_seq_QMARK_(seq__35087_35639__$1)){
var c__4609__auto___35640 = cljs.core.chunk_first(seq__35087_35639__$1);
var G__35641 = cljs.core.chunk_rest(seq__35087_35639__$1);
var G__35642 = c__4609__auto___35640;
var G__35643 = cljs.core.count(c__4609__auto___35640);
var G__35644 = (0);
seq__35087_35628 = G__35641;
chunk__35088_35629 = G__35642;
count__35089_35630 = G__35643;
i__35090_35631 = G__35644;
continue;
} else {
var c_35647 = cljs.core.first(seq__35087_35639__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35647);


var G__35648 = cljs.core.next(seq__35087_35639__$1);
var G__35649 = null;
var G__35650 = (0);
var G__35651 = (0);
seq__35087_35628 = G__35648;
chunk__35088_35629 = G__35649;
count__35089_35630 = G__35650;
i__35090_35631 = G__35651;
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
var len__4789__auto___35654 = arguments.length;
var i__4790__auto___35655 = (0);
while(true){
if((i__4790__auto___35655 < len__4789__auto___35654)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35655]));

var G__35657 = (i__4790__auto___35655 + (1));
i__4790__auto___35655 = G__35657;
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
var temp__5733__auto___35662 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35662)){
var class_list_35663 = temp__5733__auto___35662;
class_list_35663.remove(c__$1);
} else {
var class_name_35664 = dommy.core.class$(elem);
var new_class_name_35665 = dommy.utils.remove_class_str(class_name_35664,c__$1);
if((class_name_35664 === new_class_name_35665)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35665);
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


var G__35668 = seq__35096;
var G__35669 = chunk__35097;
var G__35670 = count__35098;
var G__35671 = (i__35099 + (1));
seq__35096 = G__35668;
chunk__35097 = G__35669;
count__35098 = G__35670;
i__35099 = G__35671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35096);
if(temp__5735__auto__){
var seq__35096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35096__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35096__$1);
var G__35672 = cljs.core.chunk_rest(seq__35096__$1);
var G__35673 = c__4609__auto__;
var G__35674 = cljs.core.count(c__4609__auto__);
var G__35675 = (0);
seq__35096 = G__35672;
chunk__35097 = G__35673;
count__35098 = G__35674;
i__35099 = G__35675;
continue;
} else {
var c = cljs.core.first(seq__35096__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35678 = cljs.core.next(seq__35096__$1);
var G__35679 = null;
var G__35680 = (0);
var G__35681 = (0);
seq__35096 = G__35678;
chunk__35097 = G__35679;
count__35098 = G__35680;
i__35099 = G__35681;
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
var G__35102 = arguments.length;
switch (G__35102) {
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
var temp__5733__auto___35690 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35690)){
var class_list_35691 = temp__5733__auto___35690;
class_list_35691.toggle(c__$1);
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
var G__35105 = arguments.length;
switch (G__35105) {
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
var G__35108 = arguments.length;
switch (G__35108) {
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
var G__35113 = arguments.length;
switch (G__35113) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35700 = arguments.length;
var i__4790__auto___35701 = (0);
while(true){
if((i__4790__auto___35701 < len__4789__auto___35700)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35701]));

var G__35702 = (i__4790__auto___35701 + (1));
i__4790__auto___35701 = G__35702;
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
var seq__35115_35703 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35116_35704 = null;
var count__35117_35705 = (0);
var i__35118_35706 = (0);
while(true){
if((i__35118_35706 < count__35117_35705)){
var c_35707 = chunk__35116_35704.cljs$core$IIndexed$_nth$arity$2(null,i__35118_35706);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35707);


var G__35708 = seq__35115_35703;
var G__35709 = chunk__35116_35704;
var G__35710 = count__35117_35705;
var G__35711 = (i__35118_35706 + (1));
seq__35115_35703 = G__35708;
chunk__35116_35704 = G__35709;
count__35117_35705 = G__35710;
i__35118_35706 = G__35711;
continue;
} else {
var temp__5735__auto___35712 = cljs.core.seq(seq__35115_35703);
if(temp__5735__auto___35712){
var seq__35115_35713__$1 = temp__5735__auto___35712;
if(cljs.core.chunked_seq_QMARK_(seq__35115_35713__$1)){
var c__4609__auto___35714 = cljs.core.chunk_first(seq__35115_35713__$1);
var G__35715 = cljs.core.chunk_rest(seq__35115_35713__$1);
var G__35716 = c__4609__auto___35714;
var G__35717 = cljs.core.count(c__4609__auto___35714);
var G__35718 = (0);
seq__35115_35703 = G__35715;
chunk__35116_35704 = G__35716;
count__35117_35705 = G__35717;
i__35118_35706 = G__35718;
continue;
} else {
var c_35719 = cljs.core.first(seq__35115_35713__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35719);


var G__35720 = cljs.core.next(seq__35115_35713__$1);
var G__35721 = null;
var G__35722 = (0);
var G__35723 = (0);
seq__35115_35703 = G__35720;
chunk__35116_35704 = G__35721;
count__35117_35705 = G__35722;
i__35118_35706 = G__35723;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35110){
var G__35111 = cljs.core.first(seq35110);
var seq35110__$1 = cljs.core.next(seq35110);
var G__35112 = cljs.core.first(seq35110__$1);
var seq35110__$2 = cljs.core.next(seq35110__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35111,G__35112,seq35110__$2);
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
var len__4789__auto___35725 = arguments.length;
var i__4790__auto___35726 = (0);
while(true){
if((i__4790__auto___35726 < len__4789__auto___35725)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35726]));

var G__35727 = (i__4790__auto___35726 + (1));
i__4790__auto___35726 = G__35727;
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
var seq__35125_35728 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35126_35729 = null;
var count__35127_35730 = (0);
var i__35128_35731 = (0);
while(true){
if((i__35128_35731 < count__35127_35730)){
var c_35732 = chunk__35126_35729.cljs$core$IIndexed$_nth$arity$2(null,i__35128_35731);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35732);


var G__35733 = seq__35125_35728;
var G__35734 = chunk__35126_35729;
var G__35735 = count__35127_35730;
var G__35736 = (i__35128_35731 + (1));
seq__35125_35728 = G__35733;
chunk__35126_35729 = G__35734;
count__35127_35730 = G__35735;
i__35128_35731 = G__35736;
continue;
} else {
var temp__5735__auto___35737 = cljs.core.seq(seq__35125_35728);
if(temp__5735__auto___35737){
var seq__35125_35738__$1 = temp__5735__auto___35737;
if(cljs.core.chunked_seq_QMARK_(seq__35125_35738__$1)){
var c__4609__auto___35739 = cljs.core.chunk_first(seq__35125_35738__$1);
var G__35740 = cljs.core.chunk_rest(seq__35125_35738__$1);
var G__35741 = c__4609__auto___35739;
var G__35742 = cljs.core.count(c__4609__auto___35739);
var G__35743 = (0);
seq__35125_35728 = G__35740;
chunk__35126_35729 = G__35741;
count__35127_35730 = G__35742;
i__35128_35731 = G__35743;
continue;
} else {
var c_35744 = cljs.core.first(seq__35125_35738__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35744);


var G__35745 = cljs.core.next(seq__35125_35738__$1);
var G__35746 = null;
var G__35747 = (0);
var G__35748 = (0);
seq__35125_35728 = G__35745;
chunk__35126_35729 = G__35746;
count__35127_35730 = G__35747;
i__35128_35731 = G__35748;
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
var temp__5733__auto___35749 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35749)){
var next_35750 = temp__5733__auto___35749;
dommy.core.insert_before_BANG_(elem,next_35750);
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
var len__4789__auto___35752 = arguments.length;
var i__4790__auto___35753 = (0);
while(true){
if((i__4790__auto___35753 < len__4789__auto___35752)){
args__4795__auto__.push((arguments[i__4790__auto___35753]));

var G__35754 = (i__4790__auto___35753 + (1));
i__4790__auto___35753 = G__35754;
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
var len__4789__auto___35759 = arguments.length;
var i__4790__auto___35760 = (0);
while(true){
if((i__4790__auto___35760 < len__4789__auto___35759)){
args__4795__auto__.push((arguments[i__4790__auto___35760]));

var G__35762 = (i__4790__auto___35760 + (1));
i__4790__auto___35760 = G__35762;
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

var vec__35145_35764 = dommy.core.elem_and_selector(elem_sel);
var elem_35765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35764,(0),null);
var selector_35766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35764,(1),null);
var seq__35148_35767 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35155_35768 = null;
var count__35156_35769 = (0);
var i__35157_35770 = (0);
while(true){
if((i__35157_35770 < count__35156_35769)){
var vec__35213_35771 = chunk__35155_35768.cljs$core$IIndexed$_nth$arity$2(null,i__35157_35770);
var orig_type_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213_35771,(0),null);
var f_35773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213_35771,(1),null);
var seq__35158_35774 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35772,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35772,cljs.core.identity])));
var chunk__35160_35775 = null;
var count__35161_35776 = (0);
var i__35162_35777 = (0);
while(true){
if((i__35162_35777 < count__35161_35776)){
var vec__35226_35782 = chunk__35160_35775.cljs$core$IIndexed$_nth$arity$2(null,i__35162_35777);
var actual_type_35783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226_35782,(0),null);
var factory_35784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226_35782,(1),null);
var canonical_f_35785 = (function (){var G__35230 = (factory_35784.cljs$core$IFn$_invoke$arity$1 ? factory_35784.cljs$core$IFn$_invoke$arity$1(f_35773) : factory_35784.call(null,f_35773));
var fexpr__35229 = (cljs.core.truth_(selector_35766)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35765,selector_35766):cljs.core.identity);
return (fexpr__35229.cljs$core$IFn$_invoke$arity$1 ? fexpr__35229.cljs$core$IFn$_invoke$arity$1(G__35230) : fexpr__35229.call(null,G__35230));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35765,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35766,actual_type_35783,f_35773], null),canonical_f_35785], 0));

if(cljs.core.truth_(elem_35765.addEventListener)){
elem_35765.addEventListener(cljs.core.name(actual_type_35783),canonical_f_35785);
} else {
elem_35765.attachEvent(cljs.core.name(actual_type_35783),canonical_f_35785);
}


var G__35789 = seq__35158_35774;
var G__35790 = chunk__35160_35775;
var G__35791 = count__35161_35776;
var G__35792 = (i__35162_35777 + (1));
seq__35158_35774 = G__35789;
chunk__35160_35775 = G__35790;
count__35161_35776 = G__35791;
i__35162_35777 = G__35792;
continue;
} else {
var temp__5735__auto___35793 = cljs.core.seq(seq__35158_35774);
if(temp__5735__auto___35793){
var seq__35158_35794__$1 = temp__5735__auto___35793;
if(cljs.core.chunked_seq_QMARK_(seq__35158_35794__$1)){
var c__4609__auto___35795 = cljs.core.chunk_first(seq__35158_35794__$1);
var G__35796 = cljs.core.chunk_rest(seq__35158_35794__$1);
var G__35797 = c__4609__auto___35795;
var G__35798 = cljs.core.count(c__4609__auto___35795);
var G__35799 = (0);
seq__35158_35774 = G__35796;
chunk__35160_35775 = G__35797;
count__35161_35776 = G__35798;
i__35162_35777 = G__35799;
continue;
} else {
var vec__35231_35802 = cljs.core.first(seq__35158_35794__$1);
var actual_type_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35802,(0),null);
var factory_35804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35802,(1),null);
var canonical_f_35809 = (function (){var G__35235 = (factory_35804.cljs$core$IFn$_invoke$arity$1 ? factory_35804.cljs$core$IFn$_invoke$arity$1(f_35773) : factory_35804.call(null,f_35773));
var fexpr__35234 = (cljs.core.truth_(selector_35766)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35765,selector_35766):cljs.core.identity);
return (fexpr__35234.cljs$core$IFn$_invoke$arity$1 ? fexpr__35234.cljs$core$IFn$_invoke$arity$1(G__35235) : fexpr__35234.call(null,G__35235));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35765,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35766,actual_type_35803,f_35773], null),canonical_f_35809], 0));

if(cljs.core.truth_(elem_35765.addEventListener)){
elem_35765.addEventListener(cljs.core.name(actual_type_35803),canonical_f_35809);
} else {
elem_35765.attachEvent(cljs.core.name(actual_type_35803),canonical_f_35809);
}


var G__35815 = cljs.core.next(seq__35158_35794__$1);
var G__35816 = null;
var G__35817 = (0);
var G__35818 = (0);
seq__35158_35774 = G__35815;
chunk__35160_35775 = G__35816;
count__35161_35776 = G__35817;
i__35162_35777 = G__35818;
continue;
}
} else {
}
}
break;
}

var G__35819 = seq__35148_35767;
var G__35820 = chunk__35155_35768;
var G__35821 = count__35156_35769;
var G__35822 = (i__35157_35770 + (1));
seq__35148_35767 = G__35819;
chunk__35155_35768 = G__35820;
count__35156_35769 = G__35821;
i__35157_35770 = G__35822;
continue;
} else {
var temp__5735__auto___35823 = cljs.core.seq(seq__35148_35767);
if(temp__5735__auto___35823){
var seq__35148_35824__$1 = temp__5735__auto___35823;
if(cljs.core.chunked_seq_QMARK_(seq__35148_35824__$1)){
var c__4609__auto___35825 = cljs.core.chunk_first(seq__35148_35824__$1);
var G__35826 = cljs.core.chunk_rest(seq__35148_35824__$1);
var G__35827 = c__4609__auto___35825;
var G__35828 = cljs.core.count(c__4609__auto___35825);
var G__35829 = (0);
seq__35148_35767 = G__35826;
chunk__35155_35768 = G__35827;
count__35156_35769 = G__35828;
i__35157_35770 = G__35829;
continue;
} else {
var vec__35240_35835 = cljs.core.first(seq__35148_35824__$1);
var orig_type_35836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240_35835,(0),null);
var f_35837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240_35835,(1),null);
var seq__35149_35839 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35836,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35836,cljs.core.identity])));
var chunk__35151_35840 = null;
var count__35152_35841 = (0);
var i__35153_35842 = (0);
while(true){
if((i__35153_35842 < count__35152_35841)){
var vec__35253_35844 = chunk__35151_35840.cljs$core$IIndexed$_nth$arity$2(null,i__35153_35842);
var actual_type_35845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35253_35844,(0),null);
var factory_35846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35253_35844,(1),null);
var canonical_f_35851 = (function (){var G__35257 = (factory_35846.cljs$core$IFn$_invoke$arity$1 ? factory_35846.cljs$core$IFn$_invoke$arity$1(f_35837) : factory_35846.call(null,f_35837));
var fexpr__35256 = (cljs.core.truth_(selector_35766)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35765,selector_35766):cljs.core.identity);
return (fexpr__35256.cljs$core$IFn$_invoke$arity$1 ? fexpr__35256.cljs$core$IFn$_invoke$arity$1(G__35257) : fexpr__35256.call(null,G__35257));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35765,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35766,actual_type_35845,f_35837], null),canonical_f_35851], 0));

if(cljs.core.truth_(elem_35765.addEventListener)){
elem_35765.addEventListener(cljs.core.name(actual_type_35845),canonical_f_35851);
} else {
elem_35765.attachEvent(cljs.core.name(actual_type_35845),canonical_f_35851);
}


var G__35855 = seq__35149_35839;
var G__35856 = chunk__35151_35840;
var G__35857 = count__35152_35841;
var G__35858 = (i__35153_35842 + (1));
seq__35149_35839 = G__35855;
chunk__35151_35840 = G__35856;
count__35152_35841 = G__35857;
i__35153_35842 = G__35858;
continue;
} else {
var temp__5735__auto___35861__$1 = cljs.core.seq(seq__35149_35839);
if(temp__5735__auto___35861__$1){
var seq__35149_35862__$1 = temp__5735__auto___35861__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35149_35862__$1)){
var c__4609__auto___35863 = cljs.core.chunk_first(seq__35149_35862__$1);
var G__35864 = cljs.core.chunk_rest(seq__35149_35862__$1);
var G__35865 = c__4609__auto___35863;
var G__35866 = cljs.core.count(c__4609__auto___35863);
var G__35867 = (0);
seq__35149_35839 = G__35864;
chunk__35151_35840 = G__35865;
count__35152_35841 = G__35866;
i__35153_35842 = G__35867;
continue;
} else {
var vec__35261_35872 = cljs.core.first(seq__35149_35862__$1);
var actual_type_35873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35872,(0),null);
var factory_35874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35872,(1),null);
var canonical_f_35876 = (function (){var G__35265 = (factory_35874.cljs$core$IFn$_invoke$arity$1 ? factory_35874.cljs$core$IFn$_invoke$arity$1(f_35837) : factory_35874.call(null,f_35837));
var fexpr__35264 = (cljs.core.truth_(selector_35766)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35765,selector_35766):cljs.core.identity);
return (fexpr__35264.cljs$core$IFn$_invoke$arity$1 ? fexpr__35264.cljs$core$IFn$_invoke$arity$1(G__35265) : fexpr__35264.call(null,G__35265));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35765,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35766,actual_type_35873,f_35837], null),canonical_f_35876], 0));

if(cljs.core.truth_(elem_35765.addEventListener)){
elem_35765.addEventListener(cljs.core.name(actual_type_35873),canonical_f_35876);
} else {
elem_35765.attachEvent(cljs.core.name(actual_type_35873),canonical_f_35876);
}


var G__35883 = cljs.core.next(seq__35149_35862__$1);
var G__35884 = null;
var G__35885 = (0);
var G__35886 = (0);
seq__35149_35839 = G__35883;
chunk__35151_35840 = G__35884;
count__35152_35841 = G__35885;
i__35153_35842 = G__35886;
continue;
}
} else {
}
}
break;
}

var G__35887 = cljs.core.next(seq__35148_35824__$1);
var G__35888 = null;
var G__35889 = (0);
var G__35890 = (0);
seq__35148_35767 = G__35887;
chunk__35155_35768 = G__35888;
count__35156_35769 = G__35889;
i__35157_35770 = G__35890;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35143){
var G__35144 = cljs.core.first(seq35143);
var seq35143__$1 = cljs.core.next(seq35143);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35144,seq35143__$1);
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
var len__4789__auto___35900 = arguments.length;
var i__4790__auto___35901 = (0);
while(true){
if((i__4790__auto___35901 < len__4789__auto___35900)){
args__4795__auto__.push((arguments[i__4790__auto___35901]));

var G__35906 = (i__4790__auto___35901 + (1));
i__4790__auto___35901 = G__35906;
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

var vec__35272_35912 = dommy.core.elem_and_selector(elem_sel);
var elem_35913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35272_35912,(0),null);
var selector_35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35272_35912,(1),null);
var seq__35275_35915 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35282_35916 = null;
var count__35283_35917 = (0);
var i__35284_35918 = (0);
while(true){
if((i__35284_35918 < count__35283_35917)){
var vec__35326_35922 = chunk__35282_35916.cljs$core$IIndexed$_nth$arity$2(null,i__35284_35918);
var orig_type_35923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35922,(0),null);
var f_35924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35922,(1),null);
var seq__35285_35925 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35923,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35923,cljs.core.identity])));
var chunk__35287_35926 = null;
var count__35288_35927 = (0);
var i__35289_35928 = (0);
while(true){
if((i__35289_35928 < count__35288_35927)){
var vec__35340_35932 = chunk__35287_35926.cljs$core$IIndexed$_nth$arity$2(null,i__35289_35928);
var actual_type_35933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340_35932,(0),null);
var __35934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340_35932,(1),null);
var keys_35935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35914,actual_type_35933,f_35924], null);
var canonical_f_35936 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35913),keys_35935);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35913,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35935], 0));

if(cljs.core.truth_(elem_35913.removeEventListener)){
elem_35913.removeEventListener(cljs.core.name(actual_type_35933),canonical_f_35936);
} else {
elem_35913.detachEvent(cljs.core.name(actual_type_35933),canonical_f_35936);
}


var G__35940 = seq__35285_35925;
var G__35941 = chunk__35287_35926;
var G__35942 = count__35288_35927;
var G__35943 = (i__35289_35928 + (1));
seq__35285_35925 = G__35940;
chunk__35287_35926 = G__35941;
count__35288_35927 = G__35942;
i__35289_35928 = G__35943;
continue;
} else {
var temp__5735__auto___35947 = cljs.core.seq(seq__35285_35925);
if(temp__5735__auto___35947){
var seq__35285_35948__$1 = temp__5735__auto___35947;
if(cljs.core.chunked_seq_QMARK_(seq__35285_35948__$1)){
var c__4609__auto___35949 = cljs.core.chunk_first(seq__35285_35948__$1);
var G__35950 = cljs.core.chunk_rest(seq__35285_35948__$1);
var G__35951 = c__4609__auto___35949;
var G__35952 = cljs.core.count(c__4609__auto___35949);
var G__35953 = (0);
seq__35285_35925 = G__35950;
chunk__35287_35926 = G__35951;
count__35288_35927 = G__35952;
i__35289_35928 = G__35953;
continue;
} else {
var vec__35360_35957 = cljs.core.first(seq__35285_35948__$1);
var actual_type_35958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360_35957,(0),null);
var __35959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360_35957,(1),null);
var keys_35960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35914,actual_type_35958,f_35924], null);
var canonical_f_35961 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35913),keys_35960);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35913,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35960], 0));

if(cljs.core.truth_(elem_35913.removeEventListener)){
elem_35913.removeEventListener(cljs.core.name(actual_type_35958),canonical_f_35961);
} else {
elem_35913.detachEvent(cljs.core.name(actual_type_35958),canonical_f_35961);
}


var G__35964 = cljs.core.next(seq__35285_35948__$1);
var G__35965 = null;
var G__35966 = (0);
var G__35967 = (0);
seq__35285_35925 = G__35964;
chunk__35287_35926 = G__35965;
count__35288_35927 = G__35966;
i__35289_35928 = G__35967;
continue;
}
} else {
}
}
break;
}

var G__35968 = seq__35275_35915;
var G__35969 = chunk__35282_35916;
var G__35970 = count__35283_35917;
var G__35971 = (i__35284_35918 + (1));
seq__35275_35915 = G__35968;
chunk__35282_35916 = G__35969;
count__35283_35917 = G__35970;
i__35284_35918 = G__35971;
continue;
} else {
var temp__5735__auto___35993 = cljs.core.seq(seq__35275_35915);
if(temp__5735__auto___35993){
var seq__35275_35994__$1 = temp__5735__auto___35993;
if(cljs.core.chunked_seq_QMARK_(seq__35275_35994__$1)){
var c__4609__auto___35995 = cljs.core.chunk_first(seq__35275_35994__$1);
var G__35996 = cljs.core.chunk_rest(seq__35275_35994__$1);
var G__35997 = c__4609__auto___35995;
var G__35998 = cljs.core.count(c__4609__auto___35995);
var G__35999 = (0);
seq__35275_35915 = G__35996;
chunk__35282_35916 = G__35997;
count__35283_35917 = G__35998;
i__35284_35918 = G__35999;
continue;
} else {
var vec__35368_36001 = cljs.core.first(seq__35275_35994__$1);
var orig_type_36002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35368_36001,(0),null);
var f_36003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35368_36001,(1),null);
var seq__35276_36005 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_36002,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_36002,cljs.core.identity])));
var chunk__35278_36006 = null;
var count__35279_36007 = (0);
var i__35280_36008 = (0);
while(true){
if((i__35280_36008 < count__35279_36007)){
var vec__35387_36010 = chunk__35278_36006.cljs$core$IIndexed$_nth$arity$2(null,i__35280_36008);
var actual_type_36011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387_36010,(0),null);
var __36012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387_36010,(1),null);
var keys_36013 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35914,actual_type_36011,f_36003], null);
var canonical_f_36014 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35913),keys_36013);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35913,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36013], 0));

if(cljs.core.truth_(elem_35913.removeEventListener)){
elem_35913.removeEventListener(cljs.core.name(actual_type_36011),canonical_f_36014);
} else {
elem_35913.detachEvent(cljs.core.name(actual_type_36011),canonical_f_36014);
}


var G__36017 = seq__35276_36005;
var G__36018 = chunk__35278_36006;
var G__36019 = count__35279_36007;
var G__36020 = (i__35280_36008 + (1));
seq__35276_36005 = G__36017;
chunk__35278_36006 = G__36018;
count__35279_36007 = G__36019;
i__35280_36008 = G__36020;
continue;
} else {
var temp__5735__auto___36027__$1 = cljs.core.seq(seq__35276_36005);
if(temp__5735__auto___36027__$1){
var seq__35276_36029__$1 = temp__5735__auto___36027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35276_36029__$1)){
var c__4609__auto___36031 = cljs.core.chunk_first(seq__35276_36029__$1);
var G__36032 = cljs.core.chunk_rest(seq__35276_36029__$1);
var G__36033 = c__4609__auto___36031;
var G__36034 = cljs.core.count(c__4609__auto___36031);
var G__36035 = (0);
seq__35276_36005 = G__36032;
chunk__35278_36006 = G__36033;
count__35279_36007 = G__36034;
i__35280_36008 = G__36035;
continue;
} else {
var vec__35402_36036 = cljs.core.first(seq__35276_36029__$1);
var actual_type_36037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402_36036,(0),null);
var __36038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402_36036,(1),null);
var keys_36046 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35914,actual_type_36037,f_36003], null);
var canonical_f_36047 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35913),keys_36046);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35913,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36046], 0));

if(cljs.core.truth_(elem_35913.removeEventListener)){
elem_35913.removeEventListener(cljs.core.name(actual_type_36037),canonical_f_36047);
} else {
elem_35913.detachEvent(cljs.core.name(actual_type_36037),canonical_f_36047);
}


var G__36051 = cljs.core.next(seq__35276_36029__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__35276_36005 = G__36051;
chunk__35278_36006 = G__36052;
count__35279_36007 = G__36053;
i__35280_36008 = G__36054;
continue;
}
} else {
}
}
break;
}

var G__36056 = cljs.core.next(seq__35275_35994__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__35275_35915 = G__36056;
chunk__35282_35916 = G__36057;
count__35283_35917 = G__36058;
i__35284_35918 = G__36059;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35270){
var G__35271 = cljs.core.first(seq35270);
var seq35270__$1 = cljs.core.next(seq35270);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35271,seq35270__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36063 = arguments.length;
var i__4790__auto___36064 = (0);
while(true){
if((i__4790__auto___36064 < len__4789__auto___36063)){
args__4795__auto__.push((arguments[i__4790__auto___36064]));

var G__36068 = (i__4790__auto___36064 + (1));
i__4790__auto___36064 = G__36068;
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

var vec__35410_36077 = dommy.core.elem_and_selector(elem_sel);
var elem_36078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_36077,(0),null);
var selector_36079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_36077,(1),null);
var seq__35413_36082 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35414_36083 = null;
var count__35415_36084 = (0);
var i__35416_36085 = (0);
while(true){
if((i__35416_36085 < count__35415_36084)){
var vec__35424_36090 = chunk__35414_36083.cljs$core$IIndexed$_nth$arity$2(null,i__35416_36085);
var type_36091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35424_36090,(0),null);
var f_36092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35424_36090,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36091,((function (seq__35413_36082,chunk__35414_36083,count__35415_36084,i__35416_36085,vec__35424_36090,type_36091,f_36092,vec__35410_36077,elem_36078,selector_36079){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36091,dommy$core$this_fn], 0));

return (f_36092.cljs$core$IFn$_invoke$arity$1 ? f_36092.cljs$core$IFn$_invoke$arity$1(e) : f_36092.call(null,e));
});})(seq__35413_36082,chunk__35414_36083,count__35415_36084,i__35416_36085,vec__35424_36090,type_36091,f_36092,vec__35410_36077,elem_36078,selector_36079))
], 0));


var G__36103 = seq__35413_36082;
var G__36104 = chunk__35414_36083;
var G__36105 = count__35415_36084;
var G__36106 = (i__35416_36085 + (1));
seq__35413_36082 = G__36103;
chunk__35414_36083 = G__36104;
count__35415_36084 = G__36105;
i__35416_36085 = G__36106;
continue;
} else {
var temp__5735__auto___36108 = cljs.core.seq(seq__35413_36082);
if(temp__5735__auto___36108){
var seq__35413_36112__$1 = temp__5735__auto___36108;
if(cljs.core.chunked_seq_QMARK_(seq__35413_36112__$1)){
var c__4609__auto___36115 = cljs.core.chunk_first(seq__35413_36112__$1);
var G__36117 = cljs.core.chunk_rest(seq__35413_36112__$1);
var G__36118 = c__4609__auto___36115;
var G__36119 = cljs.core.count(c__4609__auto___36115);
var G__36120 = (0);
seq__35413_36082 = G__36117;
chunk__35414_36083 = G__36118;
count__35415_36084 = G__36119;
i__35416_36085 = G__36120;
continue;
} else {
var vec__35428_36121 = cljs.core.first(seq__35413_36112__$1);
var type_36122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428_36121,(0),null);
var f_36123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428_36121,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36122,((function (seq__35413_36082,chunk__35414_36083,count__35415_36084,i__35416_36085,vec__35428_36121,type_36122,f_36123,seq__35413_36112__$1,temp__5735__auto___36108,vec__35410_36077,elem_36078,selector_36079){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36122,dommy$core$this_fn], 0));

return (f_36123.cljs$core$IFn$_invoke$arity$1 ? f_36123.cljs$core$IFn$_invoke$arity$1(e) : f_36123.call(null,e));
});})(seq__35413_36082,chunk__35414_36083,count__35415_36084,i__35416_36085,vec__35428_36121,type_36122,f_36123,seq__35413_36112__$1,temp__5735__auto___36108,vec__35410_36077,elem_36078,selector_36079))
], 0));


var G__36126 = cljs.core.next(seq__35413_36112__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__35413_36082 = G__36126;
chunk__35414_36083 = G__36127;
count__35415_36084 = G__36128;
i__35416_36085 = G__36129;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35405){
var G__35406 = cljs.core.first(seq35405);
var seq35405__$1 = cljs.core.next(seq35405);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35406,seq35405__$1);
}));


//# sourceMappingURL=dommy.core.js.map
