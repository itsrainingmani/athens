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
var len__4789__auto___35380 = arguments.length;
var i__4790__auto___35381 = (0);
while(true){
if((i__4790__auto___35381 < len__4789__auto___35380)){
args__4795__auto__.push((arguments[i__4790__auto___35381]));

var G__35382 = (i__4790__auto___35381 + (1));
i__4790__auto___35381 = G__35382;
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
var seq__34995_35383 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34996_35384 = null;
var count__34997_35385 = (0);
var i__34998_35386 = (0);
while(true){
if((i__34998_35386 < count__34997_35385)){
var vec__35007_35387 = chunk__34996_35384.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35386);
var k_35388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35387,(0),null);
var v_35389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35387,(1),null);
style.setProperty(dommy.utils.as_str(k_35388),v_35389);


var G__35390 = seq__34995_35383;
var G__35391 = chunk__34996_35384;
var G__35392 = count__34997_35385;
var G__35393 = (i__34998_35386 + (1));
seq__34995_35383 = G__35390;
chunk__34996_35384 = G__35391;
count__34997_35385 = G__35392;
i__34998_35386 = G__35393;
continue;
} else {
var temp__5735__auto___35394 = cljs.core.seq(seq__34995_35383);
if(temp__5735__auto___35394){
var seq__34995_35395__$1 = temp__5735__auto___35394;
if(cljs.core.chunked_seq_QMARK_(seq__34995_35395__$1)){
var c__4609__auto___35396 = cljs.core.chunk_first(seq__34995_35395__$1);
var G__35397 = cljs.core.chunk_rest(seq__34995_35395__$1);
var G__35398 = c__4609__auto___35396;
var G__35399 = cljs.core.count(c__4609__auto___35396);
var G__35400 = (0);
seq__34995_35383 = G__35397;
chunk__34996_35384 = G__35398;
count__34997_35385 = G__35399;
i__34998_35386 = G__35400;
continue;
} else {
var vec__35010_35401 = cljs.core.first(seq__34995_35395__$1);
var k_35402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35401,(0),null);
var v_35403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35401,(1),null);
style.setProperty(dommy.utils.as_str(k_35402),v_35403);


var G__35404 = cljs.core.next(seq__34995_35395__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__34995_35383 = G__35404;
chunk__34996_35384 = G__35405;
count__34997_35385 = G__35406;
i__34998_35386 = G__35407;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34993){
var G__34994 = cljs.core.first(seq34993);
var seq34993__$1 = cljs.core.next(seq34993);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34994,seq34993__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35408 = arguments.length;
var i__4790__auto___35409 = (0);
while(true){
if((i__4790__auto___35409 < len__4789__auto___35408)){
args__4795__auto__.push((arguments[i__4790__auto___35409]));

var G__35410 = (i__4790__auto___35409 + (1));
i__4790__auto___35409 = G__35410;
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
var seq__35015_35415 = cljs.core.seq(keywords);
var chunk__35016_35416 = null;
var count__35017_35417 = (0);
var i__35018_35418 = (0);
while(true){
if((i__35018_35418 < count__35017_35417)){
var kw_35419 = chunk__35016_35416.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35418);
style.removeProperty(dommy.utils.as_str(kw_35419));


var G__35420 = seq__35015_35415;
var G__35421 = chunk__35016_35416;
var G__35422 = count__35017_35417;
var G__35423 = (i__35018_35418 + (1));
seq__35015_35415 = G__35420;
chunk__35016_35416 = G__35421;
count__35017_35417 = G__35422;
i__35018_35418 = G__35423;
continue;
} else {
var temp__5735__auto___35424 = cljs.core.seq(seq__35015_35415);
if(temp__5735__auto___35424){
var seq__35015_35425__$1 = temp__5735__auto___35424;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35425__$1)){
var c__4609__auto___35426 = cljs.core.chunk_first(seq__35015_35425__$1);
var G__35427 = cljs.core.chunk_rest(seq__35015_35425__$1);
var G__35428 = c__4609__auto___35426;
var G__35429 = cljs.core.count(c__4609__auto___35426);
var G__35430 = (0);
seq__35015_35415 = G__35427;
chunk__35016_35416 = G__35428;
count__35017_35417 = G__35429;
i__35018_35418 = G__35430;
continue;
} else {
var kw_35431 = cljs.core.first(seq__35015_35425__$1);
style.removeProperty(dommy.utils.as_str(kw_35431));


var G__35432 = cljs.core.next(seq__35015_35425__$1);
var G__35433 = null;
var G__35434 = (0);
var G__35435 = (0);
seq__35015_35415 = G__35432;
chunk__35016_35416 = G__35433;
count__35017_35417 = G__35434;
i__35018_35418 = G__35435;
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
var len__4789__auto___35436 = arguments.length;
var i__4790__auto___35437 = (0);
while(true){
if((i__4790__auto___35437 < len__4789__auto___35436)){
args__4795__auto__.push((arguments[i__4790__auto___35437]));

var G__35438 = (i__4790__auto___35437 + (1));
i__4790__auto___35437 = G__35438;
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

var seq__35021_35441 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35022_35442 = null;
var count__35023_35443 = (0);
var i__35024_35444 = (0);
while(true){
if((i__35024_35444 < count__35023_35443)){
var vec__35031_35449 = chunk__35022_35442.cljs$core$IIndexed$_nth$arity$2(null,i__35024_35444);
var k_35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031_35449,(0),null);
var v_35451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031_35449,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35450,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35451),"px"].join('')], 0));


var G__35457 = seq__35021_35441;
var G__35458 = chunk__35022_35442;
var G__35459 = count__35023_35443;
var G__35460 = (i__35024_35444 + (1));
seq__35021_35441 = G__35457;
chunk__35022_35442 = G__35458;
count__35023_35443 = G__35459;
i__35024_35444 = G__35460;
continue;
} else {
var temp__5735__auto___35462 = cljs.core.seq(seq__35021_35441);
if(temp__5735__auto___35462){
var seq__35021_35464__$1 = temp__5735__auto___35462;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35464__$1)){
var c__4609__auto___35466 = cljs.core.chunk_first(seq__35021_35464__$1);
var G__35471 = cljs.core.chunk_rest(seq__35021_35464__$1);
var G__35472 = c__4609__auto___35466;
var G__35473 = cljs.core.count(c__4609__auto___35466);
var G__35474 = (0);
seq__35021_35441 = G__35471;
chunk__35022_35442 = G__35472;
count__35023_35443 = G__35473;
i__35024_35444 = G__35474;
continue;
} else {
var vec__35034_35476 = cljs.core.first(seq__35021_35464__$1);
var k_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35476,(0),null);
var v_35478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35476,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35477,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35478),"px"].join('')], 0));


var G__35483 = cljs.core.next(seq__35021_35464__$1);
var G__35484 = null;
var G__35485 = (0);
var G__35486 = (0);
seq__35021_35441 = G__35483;
chunk__35022_35442 = G__35484;
count__35023_35443 = G__35485;
i__35024_35444 = G__35486;
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
var len__4789__auto___35488 = arguments.length;
var i__4790__auto___35489 = (0);
while(true){
if((i__4790__auto___35489 < len__4789__auto___35488)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35489]));

var G__35490 = (i__4790__auto___35489 + (1));
i__4790__auto___35489 = G__35490;
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

var seq__35046_35491 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35047_35492 = null;
var count__35048_35493 = (0);
var i__35049_35494 = (0);
while(true){
if((i__35049_35494 < count__35048_35493)){
var vec__35056_35495 = chunk__35047_35492.cljs$core$IIndexed$_nth$arity$2(null,i__35049_35494);
var k_35496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35495,(0),null);
var v_35497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35495,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35496__$1,v_35497__$1);


var G__35499 = seq__35046_35491;
var G__35500 = chunk__35047_35492;
var G__35501 = count__35048_35493;
var G__35502 = (i__35049_35494 + (1));
seq__35046_35491 = G__35499;
chunk__35047_35492 = G__35500;
count__35048_35493 = G__35501;
i__35049_35494 = G__35502;
continue;
} else {
var temp__5735__auto___35503 = cljs.core.seq(seq__35046_35491);
if(temp__5735__auto___35503){
var seq__35046_35507__$1 = temp__5735__auto___35503;
if(cljs.core.chunked_seq_QMARK_(seq__35046_35507__$1)){
var c__4609__auto___35509 = cljs.core.chunk_first(seq__35046_35507__$1);
var G__35510 = cljs.core.chunk_rest(seq__35046_35507__$1);
var G__35511 = c__4609__auto___35509;
var G__35512 = cljs.core.count(c__4609__auto___35509);
var G__35513 = (0);
seq__35046_35491 = G__35510;
chunk__35047_35492 = G__35511;
count__35048_35493 = G__35512;
i__35049_35494 = G__35513;
continue;
} else {
var vec__35059_35515 = cljs.core.first(seq__35046_35507__$1);
var k_35516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35515,(0),null);
var v_35517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35515,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35516__$1,v_35517__$1);


var G__35518 = cljs.core.next(seq__35046_35507__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__35046_35491 = G__35518;
chunk__35047_35492 = G__35519;
count__35048_35493 = G__35520;
i__35049_35494 = G__35521;
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
var len__4789__auto___35535 = arguments.length;
var i__4790__auto___35536 = (0);
while(true){
if((i__4790__auto___35536 < len__4789__auto___35535)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35536]));

var G__35537 = (i__4790__auto___35536 + (1));
i__4790__auto___35536 = G__35537;
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
var k_35542__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35067.cljs$core$IFn$_invoke$arity$1 ? fexpr__35067.cljs$core$IFn$_invoke$arity$1(k_35542__$1) : fexpr__35067.call(null,k_35542__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35542__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35068_35543 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35069_35544 = null;
var count__35070_35545 = (0);
var i__35071_35546 = (0);
while(true){
if((i__35071_35546 < count__35070_35545)){
var k_35547__$1 = chunk__35069_35544.cljs$core$IIndexed$_nth$arity$2(null,i__35071_35546);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35547__$1);


var G__35548 = seq__35068_35543;
var G__35549 = chunk__35069_35544;
var G__35550 = count__35070_35545;
var G__35551 = (i__35071_35546 + (1));
seq__35068_35543 = G__35548;
chunk__35069_35544 = G__35549;
count__35070_35545 = G__35550;
i__35071_35546 = G__35551;
continue;
} else {
var temp__5735__auto___35552 = cljs.core.seq(seq__35068_35543);
if(temp__5735__auto___35552){
var seq__35068_35553__$1 = temp__5735__auto___35552;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35553__$1)){
var c__4609__auto___35554 = cljs.core.chunk_first(seq__35068_35553__$1);
var G__35555 = cljs.core.chunk_rest(seq__35068_35553__$1);
var G__35556 = c__4609__auto___35554;
var G__35557 = cljs.core.count(c__4609__auto___35554);
var G__35558 = (0);
seq__35068_35543 = G__35555;
chunk__35069_35544 = G__35556;
count__35070_35545 = G__35557;
i__35071_35546 = G__35558;
continue;
} else {
var k_35559__$1 = cljs.core.first(seq__35068_35553__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35559__$1);


var G__35560 = cljs.core.next(seq__35068_35553__$1);
var G__35561 = null;
var G__35562 = (0);
var G__35563 = (0);
seq__35068_35543 = G__35560;
chunk__35069_35544 = G__35561;
count__35070_35545 = G__35562;
i__35071_35546 = G__35563;
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
var len__4789__auto___35569 = arguments.length;
var i__4790__auto___35570 = (0);
while(true){
if((i__4790__auto___35570 < len__4789__auto___35569)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35570]));

var G__35571 = (i__4790__auto___35570 + (1));
i__4790__auto___35570 = G__35571;
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
var temp__5733__auto___35572 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35572)){
var class_list_35573 = temp__5733__auto___35572;
var seq__35079_35574 = cljs.core.seq(classes__$1);
var chunk__35080_35575 = null;
var count__35081_35576 = (0);
var i__35082_35577 = (0);
while(true){
if((i__35082_35577 < count__35081_35576)){
var c_35578 = chunk__35080_35575.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35577);
class_list_35573.add(c_35578);


var G__35579 = seq__35079_35574;
var G__35580 = chunk__35080_35575;
var G__35581 = count__35081_35576;
var G__35582 = (i__35082_35577 + (1));
seq__35079_35574 = G__35579;
chunk__35080_35575 = G__35580;
count__35081_35576 = G__35581;
i__35082_35577 = G__35582;
continue;
} else {
var temp__5735__auto___35583 = cljs.core.seq(seq__35079_35574);
if(temp__5735__auto___35583){
var seq__35079_35584__$1 = temp__5735__auto___35583;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35584__$1)){
var c__4609__auto___35585 = cljs.core.chunk_first(seq__35079_35584__$1);
var G__35586 = cljs.core.chunk_rest(seq__35079_35584__$1);
var G__35587 = c__4609__auto___35585;
var G__35588 = cljs.core.count(c__4609__auto___35585);
var G__35589 = (0);
seq__35079_35574 = G__35586;
chunk__35080_35575 = G__35587;
count__35081_35576 = G__35588;
i__35082_35577 = G__35589;
continue;
} else {
var c_35590 = cljs.core.first(seq__35079_35584__$1);
class_list_35573.add(c_35590);


var G__35591 = cljs.core.next(seq__35079_35584__$1);
var G__35592 = null;
var G__35593 = (0);
var G__35594 = (0);
seq__35079_35574 = G__35591;
chunk__35080_35575 = G__35592;
count__35081_35576 = G__35593;
i__35082_35577 = G__35594;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35083_35596 = cljs.core.seq(classes__$1);
var chunk__35084_35597 = null;
var count__35085_35598 = (0);
var i__35086_35599 = (0);
while(true){
if((i__35086_35599 < count__35085_35598)){
var c_35600 = chunk__35084_35597.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35599);
var class_name_35601 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35601,c_35600))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35601 === ""))?c_35600:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35601)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35600)].join('')));
}


var G__35602 = seq__35083_35596;
var G__35603 = chunk__35084_35597;
var G__35604 = count__35085_35598;
var G__35605 = (i__35086_35599 + (1));
seq__35083_35596 = G__35602;
chunk__35084_35597 = G__35603;
count__35085_35598 = G__35604;
i__35086_35599 = G__35605;
continue;
} else {
var temp__5735__auto___35606 = cljs.core.seq(seq__35083_35596);
if(temp__5735__auto___35606){
var seq__35083_35607__$1 = temp__5735__auto___35606;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35607__$1)){
var c__4609__auto___35608 = cljs.core.chunk_first(seq__35083_35607__$1);
var G__35609 = cljs.core.chunk_rest(seq__35083_35607__$1);
var G__35610 = c__4609__auto___35608;
var G__35611 = cljs.core.count(c__4609__auto___35608);
var G__35612 = (0);
seq__35083_35596 = G__35609;
chunk__35084_35597 = G__35610;
count__35085_35598 = G__35611;
i__35086_35599 = G__35612;
continue;
} else {
var c_35613 = cljs.core.first(seq__35083_35607__$1);
var class_name_35615 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35615,c_35613))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35615 === ""))?c_35613:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35615)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35613)].join('')));
}


var G__35616 = cljs.core.next(seq__35083_35607__$1);
var G__35617 = null;
var G__35618 = (0);
var G__35619 = (0);
seq__35083_35596 = G__35616;
chunk__35084_35597 = G__35617;
count__35085_35598 = G__35618;
i__35086_35599 = G__35619;
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
var len__4789__auto___35667 = arguments.length;
var i__4790__auto___35668 = (0);
while(true){
if((i__4790__auto___35668 < len__4789__auto___35667)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35668]));

var G__35669 = (i__4790__auto___35668 + (1));
i__4790__auto___35668 = G__35669;
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
var seq__35112_35670 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35113_35671 = null;
var count__35114_35672 = (0);
var i__35115_35673 = (0);
while(true){
if((i__35115_35673 < count__35114_35672)){
var c_35674 = chunk__35113_35671.cljs$core$IIndexed$_nth$arity$2(null,i__35115_35673);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35674);


var G__35675 = seq__35112_35670;
var G__35676 = chunk__35113_35671;
var G__35677 = count__35114_35672;
var G__35678 = (i__35115_35673 + (1));
seq__35112_35670 = G__35675;
chunk__35113_35671 = G__35676;
count__35114_35672 = G__35677;
i__35115_35673 = G__35678;
continue;
} else {
var temp__5735__auto___35679 = cljs.core.seq(seq__35112_35670);
if(temp__5735__auto___35679){
var seq__35112_35680__$1 = temp__5735__auto___35679;
if(cljs.core.chunked_seq_QMARK_(seq__35112_35680__$1)){
var c__4609__auto___35681 = cljs.core.chunk_first(seq__35112_35680__$1);
var G__35682 = cljs.core.chunk_rest(seq__35112_35680__$1);
var G__35683 = c__4609__auto___35681;
var G__35684 = cljs.core.count(c__4609__auto___35681);
var G__35685 = (0);
seq__35112_35670 = G__35682;
chunk__35113_35671 = G__35683;
count__35114_35672 = G__35684;
i__35115_35673 = G__35685;
continue;
} else {
var c_35686 = cljs.core.first(seq__35112_35680__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35686);


var G__35687 = cljs.core.next(seq__35112_35680__$1);
var G__35688 = null;
var G__35689 = (0);
var G__35690 = (0);
seq__35112_35670 = G__35687;
chunk__35113_35671 = G__35688;
count__35114_35672 = G__35689;
i__35115_35673 = G__35690;
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
var G__35120 = arguments.length;
switch (G__35120) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35692 = arguments.length;
var i__4790__auto___35693 = (0);
while(true){
if((i__4790__auto___35693 < len__4789__auto___35692)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35693]));

var G__35694 = (i__4790__auto___35693 + (1));
i__4790__auto___35693 = G__35694;
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
var G__35121 = parent;
G__35121.insertBefore(child,parent.firstChild);

return G__35121;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35122_35695 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35123_35696 = null;
var count__35124_35697 = (0);
var i__35125_35698 = (0);
while(true){
if((i__35125_35698 < count__35124_35697)){
var c_35699 = chunk__35123_35696.cljs$core$IIndexed$_nth$arity$2(null,i__35125_35698);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35699);


var G__35700 = seq__35122_35695;
var G__35701 = chunk__35123_35696;
var G__35702 = count__35124_35697;
var G__35703 = (i__35125_35698 + (1));
seq__35122_35695 = G__35700;
chunk__35123_35696 = G__35701;
count__35124_35697 = G__35702;
i__35125_35698 = G__35703;
continue;
} else {
var temp__5735__auto___35704 = cljs.core.seq(seq__35122_35695);
if(temp__5735__auto___35704){
var seq__35122_35705__$1 = temp__5735__auto___35704;
if(cljs.core.chunked_seq_QMARK_(seq__35122_35705__$1)){
var c__4609__auto___35706 = cljs.core.chunk_first(seq__35122_35705__$1);
var G__35707 = cljs.core.chunk_rest(seq__35122_35705__$1);
var G__35708 = c__4609__auto___35706;
var G__35709 = cljs.core.count(c__4609__auto___35706);
var G__35710 = (0);
seq__35122_35695 = G__35707;
chunk__35123_35696 = G__35708;
count__35124_35697 = G__35709;
i__35125_35698 = G__35710;
continue;
} else {
var c_35711 = cljs.core.first(seq__35122_35705__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35711);


var G__35712 = cljs.core.next(seq__35122_35705__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35122_35695 = G__35712;
chunk__35123_35696 = G__35713;
count__35124_35697 = G__35714;
i__35125_35698 = G__35715;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35117){
var G__35118 = cljs.core.first(seq35117);
var seq35117__$1 = cljs.core.next(seq35117);
var G__35119 = cljs.core.first(seq35117__$1);
var seq35117__$2 = cljs.core.next(seq35117__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35118,G__35119,seq35117__$2);
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
var temp__5733__auto___35716 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35716)){
var next_35717 = temp__5733__auto___35716;
dommy.core.insert_before_BANG_(elem,next_35717);
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
var len__4789__auto___35721 = arguments.length;
var i__4790__auto___35722 = (0);
while(true){
if((i__4790__auto___35722 < len__4789__auto___35721)){
args__4795__auto__.push((arguments[i__4790__auto___35722]));

var G__35723 = (i__4790__auto___35722 + (1));
i__4790__auto___35722 = G__35723;
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
var len__4789__auto___35724 = arguments.length;
var i__4790__auto___35725 = (0);
while(true){
if((i__4790__auto___35725 < len__4789__auto___35724)){
args__4795__auto__.push((arguments[i__4790__auto___35725]));

var G__35726 = (i__4790__auto___35725 + (1));
i__4790__auto___35725 = G__35726;
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

var vec__35142_35729 = dommy.core.elem_and_selector(elem_sel);
var elem_35730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35729,(0),null);
var selector_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35729,(1),null);
var seq__35145_35732 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35733 = null;
var count__35153_35734 = (0);
var i__35154_35735 = (0);
while(true){
if((i__35154_35735 < count__35153_35734)){
var vec__35207_35736 = chunk__35152_35733.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35735);
var orig_type_35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35207_35736,(0),null);
var f_35738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35207_35736,(1),null);
var seq__35155_35739 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35737,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35737,cljs.core.identity])));
var chunk__35157_35740 = null;
var count__35158_35741 = (0);
var i__35159_35742 = (0);
while(true){
if((i__35159_35742 < count__35158_35741)){
var vec__35223_35743 = chunk__35157_35740.cljs$core$IIndexed$_nth$arity$2(null,i__35159_35742);
var actual_type_35744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35743,(0),null);
var factory_35745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223_35743,(1),null);
var canonical_f_35746 = (function (){var G__35227 = (factory_35745.cljs$core$IFn$_invoke$arity$1 ? factory_35745.cljs$core$IFn$_invoke$arity$1(f_35738) : factory_35745.call(null,f_35738));
var fexpr__35226 = (cljs.core.truth_(selector_35731)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35730,selector_35731):cljs.core.identity);
return (fexpr__35226.cljs$core$IFn$_invoke$arity$1 ? fexpr__35226.cljs$core$IFn$_invoke$arity$1(G__35227) : fexpr__35226.call(null,G__35227));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35730,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35731,actual_type_35744,f_35738], null),canonical_f_35746], 0));

if(cljs.core.truth_(elem_35730.addEventListener)){
elem_35730.addEventListener(cljs.core.name(actual_type_35744),canonical_f_35746);
} else {
elem_35730.attachEvent(cljs.core.name(actual_type_35744),canonical_f_35746);
}


var G__35748 = seq__35155_35739;
var G__35749 = chunk__35157_35740;
var G__35750 = count__35158_35741;
var G__35751 = (i__35159_35742 + (1));
seq__35155_35739 = G__35748;
chunk__35157_35740 = G__35749;
count__35158_35741 = G__35750;
i__35159_35742 = G__35751;
continue;
} else {
var temp__5735__auto___35753 = cljs.core.seq(seq__35155_35739);
if(temp__5735__auto___35753){
var seq__35155_35754__$1 = temp__5735__auto___35753;
if(cljs.core.chunked_seq_QMARK_(seq__35155_35754__$1)){
var c__4609__auto___35755 = cljs.core.chunk_first(seq__35155_35754__$1);
var G__35756 = cljs.core.chunk_rest(seq__35155_35754__$1);
var G__35757 = c__4609__auto___35755;
var G__35758 = cljs.core.count(c__4609__auto___35755);
var G__35759 = (0);
seq__35155_35739 = G__35756;
chunk__35157_35740 = G__35757;
count__35158_35741 = G__35758;
i__35159_35742 = G__35759;
continue;
} else {
var vec__35228_35760 = cljs.core.first(seq__35155_35754__$1);
var actual_type_35761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228_35760,(0),null);
var factory_35762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228_35760,(1),null);
var canonical_f_35763 = (function (){var G__35232 = (factory_35762.cljs$core$IFn$_invoke$arity$1 ? factory_35762.cljs$core$IFn$_invoke$arity$1(f_35738) : factory_35762.call(null,f_35738));
var fexpr__35231 = (cljs.core.truth_(selector_35731)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35730,selector_35731):cljs.core.identity);
return (fexpr__35231.cljs$core$IFn$_invoke$arity$1 ? fexpr__35231.cljs$core$IFn$_invoke$arity$1(G__35232) : fexpr__35231.call(null,G__35232));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35730,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35731,actual_type_35761,f_35738], null),canonical_f_35763], 0));

if(cljs.core.truth_(elem_35730.addEventListener)){
elem_35730.addEventListener(cljs.core.name(actual_type_35761),canonical_f_35763);
} else {
elem_35730.attachEvent(cljs.core.name(actual_type_35761),canonical_f_35763);
}


var G__35764 = cljs.core.next(seq__35155_35754__$1);
var G__35765 = null;
var G__35766 = (0);
var G__35767 = (0);
seq__35155_35739 = G__35764;
chunk__35157_35740 = G__35765;
count__35158_35741 = G__35766;
i__35159_35742 = G__35767;
continue;
}
} else {
}
}
break;
}

var G__35768 = seq__35145_35732;
var G__35769 = chunk__35152_35733;
var G__35770 = count__35153_35734;
var G__35771 = (i__35154_35735 + (1));
seq__35145_35732 = G__35768;
chunk__35152_35733 = G__35769;
count__35153_35734 = G__35770;
i__35154_35735 = G__35771;
continue;
} else {
var temp__5735__auto___35772 = cljs.core.seq(seq__35145_35732);
if(temp__5735__auto___35772){
var seq__35145_35773__$1 = temp__5735__auto___35772;
if(cljs.core.chunked_seq_QMARK_(seq__35145_35773__$1)){
var c__4609__auto___35774 = cljs.core.chunk_first(seq__35145_35773__$1);
var G__35775 = cljs.core.chunk_rest(seq__35145_35773__$1);
var G__35776 = c__4609__auto___35774;
var G__35777 = cljs.core.count(c__4609__auto___35774);
var G__35778 = (0);
seq__35145_35732 = G__35775;
chunk__35152_35733 = G__35776;
count__35153_35734 = G__35777;
i__35154_35735 = G__35778;
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
var fexpr__35249 = (cljs.core.truth_(selector_35731)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35730,selector_35731):cljs.core.identity);
return (fexpr__35249.cljs$core$IFn$_invoke$arity$1 ? fexpr__35249.cljs$core$IFn$_invoke$arity$1(G__35250) : fexpr__35249.call(null,G__35250));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35730,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35731,actual_type_35787,f_35781], null),canonical_f_35789], 0));

if(cljs.core.truth_(elem_35730.addEventListener)){
elem_35730.addEventListener(cljs.core.name(actual_type_35787),canonical_f_35789);
} else {
elem_35730.attachEvent(cljs.core.name(actual_type_35787),canonical_f_35789);
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
var fexpr__35254 = (cljs.core.truth_(selector_35731)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35730,selector_35731):cljs.core.identity);
return (fexpr__35254.cljs$core$IFn$_invoke$arity$1 ? fexpr__35254.cljs$core$IFn$_invoke$arity$1(G__35255) : fexpr__35254.call(null,G__35255));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35730,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35731,actual_type_35802,f_35781], null),canonical_f_35804], 0));

if(cljs.core.truth_(elem_35730.addEventListener)){
elem_35730.addEventListener(cljs.core.name(actual_type_35802),canonical_f_35804);
} else {
elem_35730.attachEvent(cljs.core.name(actual_type_35802),canonical_f_35804);
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
seq__35145_35732 = G__35809;
chunk__35152_35733 = G__35810;
count__35153_35734 = G__35811;
i__35154_35735 = G__35812;
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
var len__4789__auto___35813 = arguments.length;
var i__4790__auto___35814 = (0);
while(true){
if((i__4790__auto___35814 < len__4789__auto___35813)){
args__4795__auto__.push((arguments[i__4790__auto___35814]));

var G__35815 = (i__4790__auto___35814 + (1));
i__4790__auto___35814 = G__35815;
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

var vec__35258_35816 = dommy.core.elem_and_selector(elem_sel);
var elem_35817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35816,(0),null);
var selector_35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35816,(1),null);
var seq__35261_35819 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35268_35820 = null;
var count__35269_35821 = (0);
var i__35270_35822 = (0);
while(true){
if((i__35270_35822 < count__35269_35821)){
var vec__35310_35823 = chunk__35268_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35270_35822);
var orig_type_35824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35823,(0),null);
var f_35825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35823,(1),null);
var seq__35271_35826 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35824,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35824,cljs.core.identity])));
var chunk__35273_35827 = null;
var count__35274_35828 = (0);
var i__35275_35829 = (0);
while(true){
if((i__35275_35829 < count__35274_35828)){
var vec__35323_35830 = chunk__35273_35827.cljs$core$IIndexed$_nth$arity$2(null,i__35275_35829);
var actual_type_35831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323_35830,(0),null);
var __35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323_35830,(1),null);
var keys_35833 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35831,f_35825], null);
var canonical_f_35834 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35833);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35833], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35831),canonical_f_35834);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35831),canonical_f_35834);
}


var G__35835 = seq__35271_35826;
var G__35836 = chunk__35273_35827;
var G__35837 = count__35274_35828;
var G__35838 = (i__35275_35829 + (1));
seq__35271_35826 = G__35835;
chunk__35273_35827 = G__35836;
count__35274_35828 = G__35837;
i__35275_35829 = G__35838;
continue;
} else {
var temp__5735__auto___35839 = cljs.core.seq(seq__35271_35826);
if(temp__5735__auto___35839){
var seq__35271_35840__$1 = temp__5735__auto___35839;
if(cljs.core.chunked_seq_QMARK_(seq__35271_35840__$1)){
var c__4609__auto___35841 = cljs.core.chunk_first(seq__35271_35840__$1);
var G__35842 = cljs.core.chunk_rest(seq__35271_35840__$1);
var G__35843 = c__4609__auto___35841;
var G__35844 = cljs.core.count(c__4609__auto___35841);
var G__35845 = (0);
seq__35271_35826 = G__35842;
chunk__35273_35827 = G__35843;
count__35274_35828 = G__35844;
i__35275_35829 = G__35845;
continue;
} else {
var vec__35326_35846 = cljs.core.first(seq__35271_35840__$1);
var actual_type_35847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35846,(0),null);
var __35848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326_35846,(1),null);
var keys_35849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35847,f_35825], null);
var canonical_f_35850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35849);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35849], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35847),canonical_f_35850);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35847),canonical_f_35850);
}


var G__35851 = cljs.core.next(seq__35271_35840__$1);
var G__35852 = null;
var G__35853 = (0);
var G__35854 = (0);
seq__35271_35826 = G__35851;
chunk__35273_35827 = G__35852;
count__35274_35828 = G__35853;
i__35275_35829 = G__35854;
continue;
}
} else {
}
}
break;
}

var G__35855 = seq__35261_35819;
var G__35856 = chunk__35268_35820;
var G__35857 = count__35269_35821;
var G__35858 = (i__35270_35822 + (1));
seq__35261_35819 = G__35855;
chunk__35268_35820 = G__35856;
count__35269_35821 = G__35857;
i__35270_35822 = G__35858;
continue;
} else {
var temp__5735__auto___35859 = cljs.core.seq(seq__35261_35819);
if(temp__5735__auto___35859){
var seq__35261_35860__$1 = temp__5735__auto___35859;
if(cljs.core.chunked_seq_QMARK_(seq__35261_35860__$1)){
var c__4609__auto___35861 = cljs.core.chunk_first(seq__35261_35860__$1);
var G__35862 = cljs.core.chunk_rest(seq__35261_35860__$1);
var G__35863 = c__4609__auto___35861;
var G__35864 = cljs.core.count(c__4609__auto___35861);
var G__35865 = (0);
seq__35261_35819 = G__35862;
chunk__35268_35820 = G__35863;
count__35269_35821 = G__35864;
i__35270_35822 = G__35865;
continue;
} else {
var vec__35329_35866 = cljs.core.first(seq__35261_35860__$1);
var orig_type_35867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35329_35866,(0),null);
var f_35868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35329_35866,(1),null);
var seq__35262_35869 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35867,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35867,cljs.core.identity])));
var chunk__35264_35870 = null;
var count__35265_35871 = (0);
var i__35266_35872 = (0);
while(true){
if((i__35266_35872 < count__35265_35871)){
var vec__35341_35873 = chunk__35264_35870.cljs$core$IIndexed$_nth$arity$2(null,i__35266_35872);
var actual_type_35874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35341_35873,(0),null);
var __35875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35341_35873,(1),null);
var keys_35876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35874,f_35868], null);
var canonical_f_35877 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35876);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35876], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35874),canonical_f_35877);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35874),canonical_f_35877);
}


var G__35878 = seq__35262_35869;
var G__35879 = chunk__35264_35870;
var G__35880 = count__35265_35871;
var G__35881 = (i__35266_35872 + (1));
seq__35262_35869 = G__35878;
chunk__35264_35870 = G__35879;
count__35265_35871 = G__35880;
i__35266_35872 = G__35881;
continue;
} else {
var temp__5735__auto___35882__$1 = cljs.core.seq(seq__35262_35869);
if(temp__5735__auto___35882__$1){
var seq__35262_35883__$1 = temp__5735__auto___35882__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35262_35883__$1)){
var c__4609__auto___35884 = cljs.core.chunk_first(seq__35262_35883__$1);
var G__35885 = cljs.core.chunk_rest(seq__35262_35883__$1);
var G__35886 = c__4609__auto___35884;
var G__35887 = cljs.core.count(c__4609__auto___35884);
var G__35888 = (0);
seq__35262_35869 = G__35885;
chunk__35264_35870 = G__35886;
count__35265_35871 = G__35887;
i__35266_35872 = G__35888;
continue;
} else {
var vec__35348_35889 = cljs.core.first(seq__35262_35883__$1);
var actual_type_35890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35889,(0),null);
var __35891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35889,(1),null);
var keys_35892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35890,f_35868], null);
var canonical_f_35893 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35892);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35892], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35890),canonical_f_35893);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35890),canonical_f_35893);
}


var G__35894 = cljs.core.next(seq__35262_35883__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35262_35869 = G__35894;
chunk__35264_35870 = G__35895;
count__35265_35871 = G__35896;
i__35266_35872 = G__35897;
continue;
}
} else {
}
}
break;
}

var G__35898 = cljs.core.next(seq__35261_35860__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__35261_35819 = G__35898;
chunk__35268_35820 = G__35899;
count__35269_35821 = G__35900;
i__35270_35822 = G__35901;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35256){
var G__35257 = cljs.core.first(seq35256);
var seq35256__$1 = cljs.core.next(seq35256);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35257,seq35256__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35902 = arguments.length;
var i__4790__auto___35903 = (0);
while(true){
if((i__4790__auto___35903 < len__4789__auto___35902)){
args__4795__auto__.push((arguments[i__4790__auto___35903]));

var G__35904 = (i__4790__auto___35903 + (1));
i__4790__auto___35903 = G__35904;
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

var vec__35353_35905 = dommy.core.elem_and_selector(elem_sel);
var elem_35906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35905,(0),null);
var selector_35907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353_35905,(1),null);
var seq__35356_35908 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35357_35909 = null;
var count__35358_35910 = (0);
var i__35359_35911 = (0);
while(true){
if((i__35359_35911 < count__35358_35910)){
var vec__35366_35912 = chunk__35357_35909.cljs$core$IIndexed$_nth$arity$2(null,i__35359_35911);
var type_35913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366_35912,(0),null);
var f_35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366_35912,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35913,((function (seq__35356_35908,chunk__35357_35909,count__35358_35910,i__35359_35911,vec__35366_35912,type_35913,f_35914,vec__35353_35905,elem_35906,selector_35907){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35913,dommy$core$this_fn], 0));

return (f_35914.cljs$core$IFn$_invoke$arity$1 ? f_35914.cljs$core$IFn$_invoke$arity$1(e) : f_35914.call(null,e));
});})(seq__35356_35908,chunk__35357_35909,count__35358_35910,i__35359_35911,vec__35366_35912,type_35913,f_35914,vec__35353_35905,elem_35906,selector_35907))
], 0));


var G__35916 = seq__35356_35908;
var G__35917 = chunk__35357_35909;
var G__35918 = count__35358_35910;
var G__35919 = (i__35359_35911 + (1));
seq__35356_35908 = G__35916;
chunk__35357_35909 = G__35917;
count__35358_35910 = G__35918;
i__35359_35911 = G__35919;
continue;
} else {
var temp__5735__auto___35920 = cljs.core.seq(seq__35356_35908);
if(temp__5735__auto___35920){
var seq__35356_35922__$1 = temp__5735__auto___35920;
if(cljs.core.chunked_seq_QMARK_(seq__35356_35922__$1)){
var c__4609__auto___35923 = cljs.core.chunk_first(seq__35356_35922__$1);
var G__35924 = cljs.core.chunk_rest(seq__35356_35922__$1);
var G__35925 = c__4609__auto___35923;
var G__35926 = cljs.core.count(c__4609__auto___35923);
var G__35927 = (0);
seq__35356_35908 = G__35924;
chunk__35357_35909 = G__35925;
count__35358_35910 = G__35926;
i__35359_35911 = G__35927;
continue;
} else {
var vec__35369_35928 = cljs.core.first(seq__35356_35922__$1);
var type_35929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35928,(0),null);
var f_35930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35928,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35929,((function (seq__35356_35908,chunk__35357_35909,count__35358_35910,i__35359_35911,vec__35369_35928,type_35929,f_35930,seq__35356_35922__$1,temp__5735__auto___35920,vec__35353_35905,elem_35906,selector_35907){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35929,dommy$core$this_fn], 0));

return (f_35930.cljs$core$IFn$_invoke$arity$1 ? f_35930.cljs$core$IFn$_invoke$arity$1(e) : f_35930.call(null,e));
});})(seq__35356_35908,chunk__35357_35909,count__35358_35910,i__35359_35911,vec__35369_35928,type_35929,f_35930,seq__35356_35922__$1,temp__5735__auto___35920,vec__35353_35905,elem_35906,selector_35907))
], 0));


var G__35931 = cljs.core.next(seq__35356_35922__$1);
var G__35932 = null;
var G__35933 = (0);
var G__35934 = (0);
seq__35356_35908 = G__35931;
chunk__35357_35909 = G__35932;
count__35358_35910 = G__35933;
i__35359_35911 = G__35934;
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
