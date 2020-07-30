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
var G__42123 = arguments.length;
switch (G__42123) {
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
var G__42125 = arguments.length;
switch (G__42125) {
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
var G__42128 = arguments.length;
switch (G__42128) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__42126_SHARP_){
return (!((p1__42126_SHARP_ === base)));
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
var len__4789__auto___42520 = arguments.length;
var i__4790__auto___42521 = (0);
while(true){
if((i__4790__auto___42521 < len__4789__auto___42520)){
args__4795__auto__.push((arguments[i__4790__auto___42521]));

var G__42522 = (i__4790__auto___42521 + (1));
i__4790__auto___42521 = G__42522;
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
var seq__42133_42523 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42134_42524 = null;
var count__42135_42525 = (0);
var i__42136_42526 = (0);
while(true){
if((i__42136_42526 < count__42135_42525)){
var vec__42143_42527 = chunk__42134_42524.cljs$core$IIndexed$_nth$arity$2(null,i__42136_42526);
var k_42528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42143_42527,(0),null);
var v_42529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42143_42527,(1),null);
style.setProperty(dommy.utils.as_str(k_42528),v_42529);


var G__42531 = seq__42133_42523;
var G__42532 = chunk__42134_42524;
var G__42533 = count__42135_42525;
var G__42534 = (i__42136_42526 + (1));
seq__42133_42523 = G__42531;
chunk__42134_42524 = G__42532;
count__42135_42525 = G__42533;
i__42136_42526 = G__42534;
continue;
} else {
var temp__5735__auto___42536 = cljs.core.seq(seq__42133_42523);
if(temp__5735__auto___42536){
var seq__42133_42537__$1 = temp__5735__auto___42536;
if(cljs.core.chunked_seq_QMARK_(seq__42133_42537__$1)){
var c__4609__auto___42538 = cljs.core.chunk_first(seq__42133_42537__$1);
var G__42543 = cljs.core.chunk_rest(seq__42133_42537__$1);
var G__42544 = c__4609__auto___42538;
var G__42545 = cljs.core.count(c__4609__auto___42538);
var G__42546 = (0);
seq__42133_42523 = G__42543;
chunk__42134_42524 = G__42544;
count__42135_42525 = G__42545;
i__42136_42526 = G__42546;
continue;
} else {
var vec__42146_42548 = cljs.core.first(seq__42133_42537__$1);
var k_42549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42146_42548,(0),null);
var v_42550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42146_42548,(1),null);
style.setProperty(dommy.utils.as_str(k_42549),v_42550);


var G__42556 = cljs.core.next(seq__42133_42537__$1);
var G__42557 = null;
var G__42558 = (0);
var G__42559 = (0);
seq__42133_42523 = G__42556;
chunk__42134_42524 = G__42557;
count__42135_42525 = G__42558;
i__42136_42526 = G__42559;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq42131){
var G__42132 = cljs.core.first(seq42131);
var seq42131__$1 = cljs.core.next(seq42131);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42132,seq42131__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42571 = arguments.length;
var i__4790__auto___42572 = (0);
while(true){
if((i__4790__auto___42572 < len__4789__auto___42571)){
args__4795__auto__.push((arguments[i__4790__auto___42572]));

var G__42573 = (i__4790__auto___42572 + (1));
i__4790__auto___42572 = G__42573;
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
var seq__42151_42574 = cljs.core.seq(keywords);
var chunk__42152_42575 = null;
var count__42153_42576 = (0);
var i__42154_42577 = (0);
while(true){
if((i__42154_42577 < count__42153_42576)){
var kw_42578 = chunk__42152_42575.cljs$core$IIndexed$_nth$arity$2(null,i__42154_42577);
style.removeProperty(dommy.utils.as_str(kw_42578));


var G__42579 = seq__42151_42574;
var G__42580 = chunk__42152_42575;
var G__42581 = count__42153_42576;
var G__42582 = (i__42154_42577 + (1));
seq__42151_42574 = G__42579;
chunk__42152_42575 = G__42580;
count__42153_42576 = G__42581;
i__42154_42577 = G__42582;
continue;
} else {
var temp__5735__auto___42583 = cljs.core.seq(seq__42151_42574);
if(temp__5735__auto___42583){
var seq__42151_42584__$1 = temp__5735__auto___42583;
if(cljs.core.chunked_seq_QMARK_(seq__42151_42584__$1)){
var c__4609__auto___42585 = cljs.core.chunk_first(seq__42151_42584__$1);
var G__42586 = cljs.core.chunk_rest(seq__42151_42584__$1);
var G__42587 = c__4609__auto___42585;
var G__42588 = cljs.core.count(c__4609__auto___42585);
var G__42589 = (0);
seq__42151_42574 = G__42586;
chunk__42152_42575 = G__42587;
count__42153_42576 = G__42588;
i__42154_42577 = G__42589;
continue;
} else {
var kw_42590 = cljs.core.first(seq__42151_42584__$1);
style.removeProperty(dommy.utils.as_str(kw_42590));


var G__42591 = cljs.core.next(seq__42151_42584__$1);
var G__42592 = null;
var G__42593 = (0);
var G__42594 = (0);
seq__42151_42574 = G__42591;
chunk__42152_42575 = G__42592;
count__42153_42576 = G__42593;
i__42154_42577 = G__42594;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq42149){
var G__42150 = cljs.core.first(seq42149);
var seq42149__$1 = cljs.core.next(seq42149);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42150,seq42149__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42595 = arguments.length;
var i__4790__auto___42596 = (0);
while(true){
if((i__4790__auto___42596 < len__4789__auto___42595)){
args__4795__auto__.push((arguments[i__4790__auto___42596]));

var G__42597 = (i__4790__auto___42596 + (1));
i__4790__auto___42596 = G__42597;
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

var seq__42158_42599 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42159_42600 = null;
var count__42160_42601 = (0);
var i__42161_42602 = (0);
while(true){
if((i__42161_42602 < count__42160_42601)){
var vec__42168_42607 = chunk__42159_42600.cljs$core$IIndexed$_nth$arity$2(null,i__42161_42602);
var k_42608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168_42607,(0),null);
var v_42609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168_42607,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42608,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42609),"px"].join('')], 0));


var G__42611 = seq__42158_42599;
var G__42612 = chunk__42159_42600;
var G__42613 = count__42160_42601;
var G__42614 = (i__42161_42602 + (1));
seq__42158_42599 = G__42611;
chunk__42159_42600 = G__42612;
count__42160_42601 = G__42613;
i__42161_42602 = G__42614;
continue;
} else {
var temp__5735__auto___42619 = cljs.core.seq(seq__42158_42599);
if(temp__5735__auto___42619){
var seq__42158_42620__$1 = temp__5735__auto___42619;
if(cljs.core.chunked_seq_QMARK_(seq__42158_42620__$1)){
var c__4609__auto___42622 = cljs.core.chunk_first(seq__42158_42620__$1);
var G__42624 = cljs.core.chunk_rest(seq__42158_42620__$1);
var G__42625 = c__4609__auto___42622;
var G__42626 = cljs.core.count(c__4609__auto___42622);
var G__42627 = (0);
seq__42158_42599 = G__42624;
chunk__42159_42600 = G__42625;
count__42160_42601 = G__42626;
i__42161_42602 = G__42627;
continue;
} else {
var vec__42171_42633 = cljs.core.first(seq__42158_42620__$1);
var k_42634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171_42633,(0),null);
var v_42635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171_42633,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42634,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42635),"px"].join('')], 0));


var G__42637 = cljs.core.next(seq__42158_42620__$1);
var G__42638 = null;
var G__42639 = (0);
var G__42640 = (0);
seq__42158_42599 = G__42637;
chunk__42159_42600 = G__42638;
count__42160_42601 = G__42639;
i__42161_42602 = G__42640;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq42155){
var G__42156 = cljs.core.first(seq42155);
var seq42155__$1 = cljs.core.next(seq42155);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42156,seq42155__$1);
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
var G__42179 = arguments.length;
switch (G__42179) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42646 = arguments.length;
var i__4790__auto___42647 = (0);
while(true){
if((i__4790__auto___42647 < len__4789__auto___42646)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42647]));

var G__42648 = (i__4790__auto___42647 + (1));
i__4790__auto___42647 = G__42648;
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
var G__42180 = elem;
(G__42180[k__$1] = v);

return G__42180;
} else {
var G__42181 = elem;
G__42181.setAttribute(k__$1,v);

return G__42181;
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

var seq__42182_42649 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__42183_42650 = null;
var count__42184_42651 = (0);
var i__42185_42652 = (0);
while(true){
if((i__42185_42652 < count__42184_42651)){
var vec__42192_42653 = chunk__42183_42650.cljs$core$IIndexed$_nth$arity$2(null,i__42185_42652);
var k_42654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192_42653,(0),null);
var v_42655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192_42653,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_42654__$1,v_42655__$1);


var G__42657 = seq__42182_42649;
var G__42658 = chunk__42183_42650;
var G__42659 = count__42184_42651;
var G__42660 = (i__42185_42652 + (1));
seq__42182_42649 = G__42657;
chunk__42183_42650 = G__42658;
count__42184_42651 = G__42659;
i__42185_42652 = G__42660;
continue;
} else {
var temp__5735__auto___42663 = cljs.core.seq(seq__42182_42649);
if(temp__5735__auto___42663){
var seq__42182_42664__$1 = temp__5735__auto___42663;
if(cljs.core.chunked_seq_QMARK_(seq__42182_42664__$1)){
var c__4609__auto___42665 = cljs.core.chunk_first(seq__42182_42664__$1);
var G__42666 = cljs.core.chunk_rest(seq__42182_42664__$1);
var G__42667 = c__4609__auto___42665;
var G__42668 = cljs.core.count(c__4609__auto___42665);
var G__42669 = (0);
seq__42182_42649 = G__42666;
chunk__42183_42650 = G__42667;
count__42184_42651 = G__42668;
i__42185_42652 = G__42669;
continue;
} else {
var vec__42195_42670 = cljs.core.first(seq__42182_42664__$1);
var k_42671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42195_42670,(0),null);
var v_42672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42195_42670,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_42671__$1,v_42672__$1);


var G__42673 = cljs.core.next(seq__42182_42664__$1);
var G__42674 = null;
var G__42675 = (0);
var G__42676 = (0);
seq__42182_42649 = G__42673;
chunk__42183_42650 = G__42674;
count__42184_42651 = G__42675;
i__42185_42652 = G__42676;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq42175){
var G__42176 = cljs.core.first(seq42175);
var seq42175__$1 = cljs.core.next(seq42175);
var G__42177 = cljs.core.first(seq42175__$1);
var seq42175__$2 = cljs.core.next(seq42175__$1);
var G__42178 = cljs.core.first(seq42175__$2);
var seq42175__$3 = cljs.core.next(seq42175__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42176,G__42177,G__42178,seq42175__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__42202 = arguments.length;
switch (G__42202) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42678 = arguments.length;
var i__4790__auto___42679 = (0);
while(true){
if((i__4790__auto___42679 < len__4789__auto___42678)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42679]));

var G__42680 = (i__4790__auto___42679 + (1));
i__4790__auto___42679 = G__42680;
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
var k_42681__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__42203 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__42203.cljs$core$IFn$_invoke$arity$1 ? fexpr__42203.cljs$core$IFn$_invoke$arity$1(k_42681__$1) : fexpr__42203.call(null,k_42681__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_42681__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__42204_42683 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__42205_42684 = null;
var count__42206_42685 = (0);
var i__42207_42686 = (0);
while(true){
if((i__42207_42686 < count__42206_42685)){
var k_42687__$1 = chunk__42205_42684.cljs$core$IIndexed$_nth$arity$2(null,i__42207_42686);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_42687__$1);


var G__42688 = seq__42204_42683;
var G__42689 = chunk__42205_42684;
var G__42690 = count__42206_42685;
var G__42691 = (i__42207_42686 + (1));
seq__42204_42683 = G__42688;
chunk__42205_42684 = G__42689;
count__42206_42685 = G__42690;
i__42207_42686 = G__42691;
continue;
} else {
var temp__5735__auto___42692 = cljs.core.seq(seq__42204_42683);
if(temp__5735__auto___42692){
var seq__42204_42694__$1 = temp__5735__auto___42692;
if(cljs.core.chunked_seq_QMARK_(seq__42204_42694__$1)){
var c__4609__auto___42695 = cljs.core.chunk_first(seq__42204_42694__$1);
var G__42696 = cljs.core.chunk_rest(seq__42204_42694__$1);
var G__42697 = c__4609__auto___42695;
var G__42698 = cljs.core.count(c__4609__auto___42695);
var G__42699 = (0);
seq__42204_42683 = G__42696;
chunk__42205_42684 = G__42697;
count__42206_42685 = G__42698;
i__42207_42686 = G__42699;
continue;
} else {
var k_42700__$1 = cljs.core.first(seq__42204_42694__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_42700__$1);


var G__42701 = cljs.core.next(seq__42204_42694__$1);
var G__42702 = null;
var G__42703 = (0);
var G__42704 = (0);
seq__42204_42683 = G__42701;
chunk__42205_42684 = G__42702;
count__42206_42685 = G__42703;
i__42207_42686 = G__42704;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq42199){
var G__42200 = cljs.core.first(seq42199);
var seq42199__$1 = cljs.core.next(seq42199);
var G__42201 = cljs.core.first(seq42199__$1);
var seq42199__$2 = cljs.core.next(seq42199__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42200,G__42201,seq42199__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__42209 = arguments.length;
switch (G__42209) {
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
var G__42214 = arguments.length;
switch (G__42214) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42707 = arguments.length;
var i__4790__auto___42708 = (0);
while(true){
if((i__4790__auto___42708 < len__4789__auto___42707)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42708]));

var G__42709 = (i__4790__auto___42708 + (1));
i__4790__auto___42708 = G__42709;
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
var temp__5733__auto___42710 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42710)){
var class_list_42711 = temp__5733__auto___42710;
var seq__42215_42712 = cljs.core.seq(classes__$1);
var chunk__42216_42713 = null;
var count__42217_42714 = (0);
var i__42218_42715 = (0);
while(true){
if((i__42218_42715 < count__42217_42714)){
var c_42716 = chunk__42216_42713.cljs$core$IIndexed$_nth$arity$2(null,i__42218_42715);
class_list_42711.add(c_42716);


var G__42717 = seq__42215_42712;
var G__42718 = chunk__42216_42713;
var G__42719 = count__42217_42714;
var G__42720 = (i__42218_42715 + (1));
seq__42215_42712 = G__42717;
chunk__42216_42713 = G__42718;
count__42217_42714 = G__42719;
i__42218_42715 = G__42720;
continue;
} else {
var temp__5735__auto___42721 = cljs.core.seq(seq__42215_42712);
if(temp__5735__auto___42721){
var seq__42215_42722__$1 = temp__5735__auto___42721;
if(cljs.core.chunked_seq_QMARK_(seq__42215_42722__$1)){
var c__4609__auto___42723 = cljs.core.chunk_first(seq__42215_42722__$1);
var G__42724 = cljs.core.chunk_rest(seq__42215_42722__$1);
var G__42725 = c__4609__auto___42723;
var G__42726 = cljs.core.count(c__4609__auto___42723);
var G__42727 = (0);
seq__42215_42712 = G__42724;
chunk__42216_42713 = G__42725;
count__42217_42714 = G__42726;
i__42218_42715 = G__42727;
continue;
} else {
var c_42728 = cljs.core.first(seq__42215_42722__$1);
class_list_42711.add(c_42728);


var G__42729 = cljs.core.next(seq__42215_42722__$1);
var G__42730 = null;
var G__42731 = (0);
var G__42732 = (0);
seq__42215_42712 = G__42729;
chunk__42216_42713 = G__42730;
count__42217_42714 = G__42731;
i__42218_42715 = G__42732;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42219_42733 = cljs.core.seq(classes__$1);
var chunk__42220_42734 = null;
var count__42221_42735 = (0);
var i__42222_42736 = (0);
while(true){
if((i__42222_42736 < count__42221_42735)){
var c_42737 = chunk__42220_42734.cljs$core$IIndexed$_nth$arity$2(null,i__42222_42736);
var class_name_42738 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_42738,c_42737))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_42738 === ""))?c_42737:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42738)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42737)].join('')));
}


var G__42739 = seq__42219_42733;
var G__42740 = chunk__42220_42734;
var G__42741 = count__42221_42735;
var G__42742 = (i__42222_42736 + (1));
seq__42219_42733 = G__42739;
chunk__42220_42734 = G__42740;
count__42221_42735 = G__42741;
i__42222_42736 = G__42742;
continue;
} else {
var temp__5735__auto___42743 = cljs.core.seq(seq__42219_42733);
if(temp__5735__auto___42743){
var seq__42219_42744__$1 = temp__5735__auto___42743;
if(cljs.core.chunked_seq_QMARK_(seq__42219_42744__$1)){
var c__4609__auto___42745 = cljs.core.chunk_first(seq__42219_42744__$1);
var G__42746 = cljs.core.chunk_rest(seq__42219_42744__$1);
var G__42747 = c__4609__auto___42745;
var G__42748 = cljs.core.count(c__4609__auto___42745);
var G__42749 = (0);
seq__42219_42733 = G__42746;
chunk__42220_42734 = G__42747;
count__42221_42735 = G__42748;
i__42222_42736 = G__42749;
continue;
} else {
var c_42750 = cljs.core.first(seq__42219_42744__$1);
var class_name_42751 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_42751,c_42750))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_42751 === ""))?c_42750:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42751)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42750)].join('')));
}


var G__42752 = cljs.core.next(seq__42219_42744__$1);
var G__42753 = null;
var G__42754 = (0);
var G__42755 = (0);
seq__42219_42733 = G__42752;
chunk__42220_42734 = G__42753;
count__42221_42735 = G__42754;
i__42222_42736 = G__42755;
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
var seq__42223_42756 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__42224_42757 = null;
var count__42225_42758 = (0);
var i__42226_42759 = (0);
while(true){
if((i__42226_42759 < count__42225_42758)){
var c_42760 = chunk__42224_42757.cljs$core$IIndexed$_nth$arity$2(null,i__42226_42759);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_42760);


var G__42761 = seq__42223_42756;
var G__42762 = chunk__42224_42757;
var G__42763 = count__42225_42758;
var G__42764 = (i__42226_42759 + (1));
seq__42223_42756 = G__42761;
chunk__42224_42757 = G__42762;
count__42225_42758 = G__42763;
i__42226_42759 = G__42764;
continue;
} else {
var temp__5735__auto___42765 = cljs.core.seq(seq__42223_42756);
if(temp__5735__auto___42765){
var seq__42223_42766__$1 = temp__5735__auto___42765;
if(cljs.core.chunked_seq_QMARK_(seq__42223_42766__$1)){
var c__4609__auto___42767 = cljs.core.chunk_first(seq__42223_42766__$1);
var G__42768 = cljs.core.chunk_rest(seq__42223_42766__$1);
var G__42769 = c__4609__auto___42767;
var G__42770 = cljs.core.count(c__4609__auto___42767);
var G__42771 = (0);
seq__42223_42756 = G__42768;
chunk__42224_42757 = G__42769;
count__42225_42758 = G__42770;
i__42226_42759 = G__42771;
continue;
} else {
var c_42772 = cljs.core.first(seq__42223_42766__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_42772);


var G__42773 = cljs.core.next(seq__42223_42766__$1);
var G__42774 = null;
var G__42775 = (0);
var G__42776 = (0);
seq__42223_42756 = G__42773;
chunk__42224_42757 = G__42774;
count__42225_42758 = G__42775;
i__42226_42759 = G__42776;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq42211){
var G__42212 = cljs.core.first(seq42211);
var seq42211__$1 = cljs.core.next(seq42211);
var G__42213 = cljs.core.first(seq42211__$1);
var seq42211__$2 = cljs.core.next(seq42211__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42212,G__42213,seq42211__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__42231 = arguments.length;
switch (G__42231) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42778 = arguments.length;
var i__4790__auto___42779 = (0);
while(true){
if((i__4790__auto___42779 < len__4789__auto___42778)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42779]));

var G__42780 = (i__4790__auto___42779 + (1));
i__4790__auto___42779 = G__42780;
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
var temp__5733__auto___42781 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42781)){
var class_list_42782 = temp__5733__auto___42781;
class_list_42782.remove(c__$1);
} else {
var class_name_42783 = dommy.core.class$(elem);
var new_class_name_42784 = dommy.utils.remove_class_str(class_name_42783,c__$1);
if((class_name_42783 === new_class_name_42784)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_42784);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__42232 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__42233 = null;
var count__42234 = (0);
var i__42235 = (0);
while(true){
if((i__42235 < count__42234)){
var c = chunk__42233.cljs$core$IIndexed$_nth$arity$2(null,i__42235);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__42785 = seq__42232;
var G__42786 = chunk__42233;
var G__42787 = count__42234;
var G__42788 = (i__42235 + (1));
seq__42232 = G__42785;
chunk__42233 = G__42786;
count__42234 = G__42787;
i__42235 = G__42788;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42232);
if(temp__5735__auto__){
var seq__42232__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42232__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42232__$1);
var G__42789 = cljs.core.chunk_rest(seq__42232__$1);
var G__42790 = c__4609__auto__;
var G__42791 = cljs.core.count(c__4609__auto__);
var G__42792 = (0);
seq__42232 = G__42789;
chunk__42233 = G__42790;
count__42234 = G__42791;
i__42235 = G__42792;
continue;
} else {
var c = cljs.core.first(seq__42232__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__42793 = cljs.core.next(seq__42232__$1);
var G__42794 = null;
var G__42795 = (0);
var G__42796 = (0);
seq__42232 = G__42793;
chunk__42233 = G__42794;
count__42234 = G__42795;
i__42235 = G__42796;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq42228){
var G__42229 = cljs.core.first(seq42228);
var seq42228__$1 = cljs.core.next(seq42228);
var G__42230 = cljs.core.first(seq42228__$1);
var seq42228__$2 = cljs.core.next(seq42228__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42229,G__42230,seq42228__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__42237 = arguments.length;
switch (G__42237) {
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
var temp__5733__auto___42798 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42798)){
var class_list_42799 = temp__5733__auto___42798;
class_list_42799.toggle(c__$1);
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
var G__42239 = arguments.length;
switch (G__42239) {
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
var G__42241 = arguments.length;
switch (G__42241) {
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
var G__42247 = arguments.length;
switch (G__42247) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42803 = arguments.length;
var i__4790__auto___42804 = (0);
while(true){
if((i__4790__auto___42804 < len__4789__auto___42803)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42804]));

var G__42806 = (i__4790__auto___42804 + (1));
i__4790__auto___42804 = G__42806;
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
var G__42248 = parent;
G__42248.appendChild(child);

return G__42248;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__42249_42808 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__42250_42809 = null;
var count__42251_42810 = (0);
var i__42252_42811 = (0);
while(true){
if((i__42252_42811 < count__42251_42810)){
var c_42812 = chunk__42250_42809.cljs$core$IIndexed$_nth$arity$2(null,i__42252_42811);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42812);


var G__42813 = seq__42249_42808;
var G__42814 = chunk__42250_42809;
var G__42815 = count__42251_42810;
var G__42816 = (i__42252_42811 + (1));
seq__42249_42808 = G__42813;
chunk__42250_42809 = G__42814;
count__42251_42810 = G__42815;
i__42252_42811 = G__42816;
continue;
} else {
var temp__5735__auto___42817 = cljs.core.seq(seq__42249_42808);
if(temp__5735__auto___42817){
var seq__42249_42818__$1 = temp__5735__auto___42817;
if(cljs.core.chunked_seq_QMARK_(seq__42249_42818__$1)){
var c__4609__auto___42819 = cljs.core.chunk_first(seq__42249_42818__$1);
var G__42820 = cljs.core.chunk_rest(seq__42249_42818__$1);
var G__42821 = c__4609__auto___42819;
var G__42822 = cljs.core.count(c__4609__auto___42819);
var G__42823 = (0);
seq__42249_42808 = G__42820;
chunk__42250_42809 = G__42821;
count__42251_42810 = G__42822;
i__42252_42811 = G__42823;
continue;
} else {
var c_42824 = cljs.core.first(seq__42249_42818__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42824);


var G__42825 = cljs.core.next(seq__42249_42818__$1);
var G__42826 = null;
var G__42827 = (0);
var G__42828 = (0);
seq__42249_42808 = G__42825;
chunk__42250_42809 = G__42826;
count__42251_42810 = G__42827;
i__42252_42811 = G__42828;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq42244){
var G__42245 = cljs.core.first(seq42244);
var seq42244__$1 = cljs.core.next(seq42244);
var G__42246 = cljs.core.first(seq42244__$1);
var seq42244__$2 = cljs.core.next(seq42244__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42245,G__42246,seq42244__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__42259 = arguments.length;
switch (G__42259) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42830 = arguments.length;
var i__4790__auto___42831 = (0);
while(true){
if((i__4790__auto___42831 < len__4789__auto___42830)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42831]));

var G__42832 = (i__4790__auto___42831 + (1));
i__4790__auto___42831 = G__42832;
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
var G__42260 = parent;
G__42260.insertBefore(child,parent.firstChild);

return G__42260;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__42261_42833 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__42262_42834 = null;
var count__42263_42835 = (0);
var i__42264_42836 = (0);
while(true){
if((i__42264_42836 < count__42263_42835)){
var c_42837 = chunk__42262_42834.cljs$core$IIndexed$_nth$arity$2(null,i__42264_42836);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42837);


var G__42838 = seq__42261_42833;
var G__42839 = chunk__42262_42834;
var G__42840 = count__42263_42835;
var G__42841 = (i__42264_42836 + (1));
seq__42261_42833 = G__42838;
chunk__42262_42834 = G__42839;
count__42263_42835 = G__42840;
i__42264_42836 = G__42841;
continue;
} else {
var temp__5735__auto___42842 = cljs.core.seq(seq__42261_42833);
if(temp__5735__auto___42842){
var seq__42261_42843__$1 = temp__5735__auto___42842;
if(cljs.core.chunked_seq_QMARK_(seq__42261_42843__$1)){
var c__4609__auto___42844 = cljs.core.chunk_first(seq__42261_42843__$1);
var G__42845 = cljs.core.chunk_rest(seq__42261_42843__$1);
var G__42846 = c__4609__auto___42844;
var G__42847 = cljs.core.count(c__4609__auto___42844);
var G__42848 = (0);
seq__42261_42833 = G__42845;
chunk__42262_42834 = G__42846;
count__42263_42835 = G__42847;
i__42264_42836 = G__42848;
continue;
} else {
var c_42849 = cljs.core.first(seq__42261_42843__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42849);


var G__42850 = cljs.core.next(seq__42261_42843__$1);
var G__42851 = null;
var G__42852 = (0);
var G__42853 = (0);
seq__42261_42833 = G__42850;
chunk__42262_42834 = G__42851;
count__42263_42835 = G__42852;
i__42264_42836 = G__42853;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq42256){
var G__42257 = cljs.core.first(seq42256);
var seq42256__$1 = cljs.core.next(seq42256);
var G__42258 = cljs.core.first(seq42256__$1);
var seq42256__$2 = cljs.core.next(seq42256__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42257,G__42258,seq42256__$2);
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
var temp__5733__auto___42856 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___42856)){
var next_42857 = temp__5733__auto___42856;
dommy.core.insert_before_BANG_(elem,next_42857);
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
var G__42266 = arguments.length;
switch (G__42266) {
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
var G__42267 = p;
G__42267.removeChild(elem);

return G__42267;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42268){
var vec__42269 = p__42268;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42269,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42269,(1),null);
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
var len__4789__auto___42861 = arguments.length;
var i__4790__auto___42862 = (0);
while(true){
if((i__4790__auto___42862 < len__4789__auto___42861)){
args__4795__auto__.push((arguments[i__4790__auto___42862]));

var G__42863 = (i__4790__auto___42862 + (1));
i__4790__auto___42862 = G__42863;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq42272){
var G__42273 = cljs.core.first(seq42272);
var seq42272__$1 = cljs.core.next(seq42272);
var G__42274 = cljs.core.first(seq42272__$1);
var seq42272__$2 = cljs.core.next(seq42272__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42273,G__42274,seq42272__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__42275 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__42275.cljs$core$IFn$_invoke$arity$1 ? fexpr__42275.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__42275.call(null,elem_sel));
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
var len__4789__auto___42864 = arguments.length;
var i__4790__auto___42865 = (0);
while(true){
if((i__4790__auto___42865 < len__4789__auto___42864)){
args__4795__auto__.push((arguments[i__4790__auto___42865]));

var G__42866 = (i__4790__auto___42865 + (1));
i__4790__auto___42865 = G__42866;
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

var vec__42278_42867 = dommy.core.elem_and_selector(elem_sel);
var elem_42868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42278_42867,(0),null);
var selector_42869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42278_42867,(1),null);
var seq__42281_42870 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42288_42871 = null;
var count__42289_42872 = (0);
var i__42290_42873 = (0);
while(true){
if((i__42290_42873 < count__42289_42872)){
var vec__42346_42874 = chunk__42288_42871.cljs$core$IIndexed$_nth$arity$2(null,i__42290_42873);
var orig_type_42875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42346_42874,(0),null);
var f_42876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42346_42874,(1),null);
var seq__42291_42877 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42875,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42875,cljs.core.identity])));
var chunk__42293_42878 = null;
var count__42294_42879 = (0);
var i__42295_42880 = (0);
while(true){
if((i__42295_42880 < count__42294_42879)){
var vec__42359_42881 = chunk__42293_42878.cljs$core$IIndexed$_nth$arity$2(null,i__42295_42880);
var actual_type_42882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359_42881,(0),null);
var factory_42883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359_42881,(1),null);
var canonical_f_42884 = (function (){var G__42363 = (factory_42883.cljs$core$IFn$_invoke$arity$1 ? factory_42883.cljs$core$IFn$_invoke$arity$1(f_42876) : factory_42883.call(null,f_42876));
var fexpr__42362 = (cljs.core.truth_(selector_42869)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42868,selector_42869):cljs.core.identity);
return (fexpr__42362.cljs$core$IFn$_invoke$arity$1 ? fexpr__42362.cljs$core$IFn$_invoke$arity$1(G__42363) : fexpr__42362.call(null,G__42363));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42868,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42869,actual_type_42882,f_42876], null),canonical_f_42884], 0));

if(cljs.core.truth_(elem_42868.addEventListener)){
elem_42868.addEventListener(cljs.core.name(actual_type_42882),canonical_f_42884);
} else {
elem_42868.attachEvent(cljs.core.name(actual_type_42882),canonical_f_42884);
}


var G__42885 = seq__42291_42877;
var G__42886 = chunk__42293_42878;
var G__42887 = count__42294_42879;
var G__42888 = (i__42295_42880 + (1));
seq__42291_42877 = G__42885;
chunk__42293_42878 = G__42886;
count__42294_42879 = G__42887;
i__42295_42880 = G__42888;
continue;
} else {
var temp__5735__auto___42889 = cljs.core.seq(seq__42291_42877);
if(temp__5735__auto___42889){
var seq__42291_42890__$1 = temp__5735__auto___42889;
if(cljs.core.chunked_seq_QMARK_(seq__42291_42890__$1)){
var c__4609__auto___42891 = cljs.core.chunk_first(seq__42291_42890__$1);
var G__42892 = cljs.core.chunk_rest(seq__42291_42890__$1);
var G__42893 = c__4609__auto___42891;
var G__42894 = cljs.core.count(c__4609__auto___42891);
var G__42895 = (0);
seq__42291_42877 = G__42892;
chunk__42293_42878 = G__42893;
count__42294_42879 = G__42894;
i__42295_42880 = G__42895;
continue;
} else {
var vec__42364_42896 = cljs.core.first(seq__42291_42890__$1);
var actual_type_42897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364_42896,(0),null);
var factory_42898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364_42896,(1),null);
var canonical_f_42899 = (function (){var G__42368 = (factory_42898.cljs$core$IFn$_invoke$arity$1 ? factory_42898.cljs$core$IFn$_invoke$arity$1(f_42876) : factory_42898.call(null,f_42876));
var fexpr__42367 = (cljs.core.truth_(selector_42869)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42868,selector_42869):cljs.core.identity);
return (fexpr__42367.cljs$core$IFn$_invoke$arity$1 ? fexpr__42367.cljs$core$IFn$_invoke$arity$1(G__42368) : fexpr__42367.call(null,G__42368));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42868,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42869,actual_type_42897,f_42876], null),canonical_f_42899], 0));

if(cljs.core.truth_(elem_42868.addEventListener)){
elem_42868.addEventListener(cljs.core.name(actual_type_42897),canonical_f_42899);
} else {
elem_42868.attachEvent(cljs.core.name(actual_type_42897),canonical_f_42899);
}


var G__42900 = cljs.core.next(seq__42291_42890__$1);
var G__42901 = null;
var G__42902 = (0);
var G__42903 = (0);
seq__42291_42877 = G__42900;
chunk__42293_42878 = G__42901;
count__42294_42879 = G__42902;
i__42295_42880 = G__42903;
continue;
}
} else {
}
}
break;
}

var G__42904 = seq__42281_42870;
var G__42905 = chunk__42288_42871;
var G__42906 = count__42289_42872;
var G__42907 = (i__42290_42873 + (1));
seq__42281_42870 = G__42904;
chunk__42288_42871 = G__42905;
count__42289_42872 = G__42906;
i__42290_42873 = G__42907;
continue;
} else {
var temp__5735__auto___42908 = cljs.core.seq(seq__42281_42870);
if(temp__5735__auto___42908){
var seq__42281_42909__$1 = temp__5735__auto___42908;
if(cljs.core.chunked_seq_QMARK_(seq__42281_42909__$1)){
var c__4609__auto___42910 = cljs.core.chunk_first(seq__42281_42909__$1);
var G__42911 = cljs.core.chunk_rest(seq__42281_42909__$1);
var G__42912 = c__4609__auto___42910;
var G__42913 = cljs.core.count(c__4609__auto___42910);
var G__42914 = (0);
seq__42281_42870 = G__42911;
chunk__42288_42871 = G__42912;
count__42289_42872 = G__42913;
i__42290_42873 = G__42914;
continue;
} else {
var vec__42369_42915 = cljs.core.first(seq__42281_42909__$1);
var orig_type_42916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42369_42915,(0),null);
var f_42917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42369_42915,(1),null);
var seq__42282_42918 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42916,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42916,cljs.core.identity])));
var chunk__42284_42919 = null;
var count__42285_42920 = (0);
var i__42286_42921 = (0);
while(true){
if((i__42286_42921 < count__42285_42920)){
var vec__42382_42922 = chunk__42284_42919.cljs$core$IIndexed$_nth$arity$2(null,i__42286_42921);
var actual_type_42923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382_42922,(0),null);
var factory_42924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382_42922,(1),null);
var canonical_f_42925 = (function (){var G__42386 = (factory_42924.cljs$core$IFn$_invoke$arity$1 ? factory_42924.cljs$core$IFn$_invoke$arity$1(f_42917) : factory_42924.call(null,f_42917));
var fexpr__42385 = (cljs.core.truth_(selector_42869)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42868,selector_42869):cljs.core.identity);
return (fexpr__42385.cljs$core$IFn$_invoke$arity$1 ? fexpr__42385.cljs$core$IFn$_invoke$arity$1(G__42386) : fexpr__42385.call(null,G__42386));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42868,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42869,actual_type_42923,f_42917], null),canonical_f_42925], 0));

if(cljs.core.truth_(elem_42868.addEventListener)){
elem_42868.addEventListener(cljs.core.name(actual_type_42923),canonical_f_42925);
} else {
elem_42868.attachEvent(cljs.core.name(actual_type_42923),canonical_f_42925);
}


var G__42926 = seq__42282_42918;
var G__42927 = chunk__42284_42919;
var G__42928 = count__42285_42920;
var G__42929 = (i__42286_42921 + (1));
seq__42282_42918 = G__42926;
chunk__42284_42919 = G__42927;
count__42285_42920 = G__42928;
i__42286_42921 = G__42929;
continue;
} else {
var temp__5735__auto___42930__$1 = cljs.core.seq(seq__42282_42918);
if(temp__5735__auto___42930__$1){
var seq__42282_42931__$1 = temp__5735__auto___42930__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42282_42931__$1)){
var c__4609__auto___42932 = cljs.core.chunk_first(seq__42282_42931__$1);
var G__42933 = cljs.core.chunk_rest(seq__42282_42931__$1);
var G__42934 = c__4609__auto___42932;
var G__42935 = cljs.core.count(c__4609__auto___42932);
var G__42936 = (0);
seq__42282_42918 = G__42933;
chunk__42284_42919 = G__42934;
count__42285_42920 = G__42935;
i__42286_42921 = G__42936;
continue;
} else {
var vec__42387_42937 = cljs.core.first(seq__42282_42931__$1);
var actual_type_42938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387_42937,(0),null);
var factory_42939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387_42937,(1),null);
var canonical_f_42940 = (function (){var G__42394 = (factory_42939.cljs$core$IFn$_invoke$arity$1 ? factory_42939.cljs$core$IFn$_invoke$arity$1(f_42917) : factory_42939.call(null,f_42917));
var fexpr__42393 = (cljs.core.truth_(selector_42869)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42868,selector_42869):cljs.core.identity);
return (fexpr__42393.cljs$core$IFn$_invoke$arity$1 ? fexpr__42393.cljs$core$IFn$_invoke$arity$1(G__42394) : fexpr__42393.call(null,G__42394));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42868,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42869,actual_type_42938,f_42917], null),canonical_f_42940], 0));

if(cljs.core.truth_(elem_42868.addEventListener)){
elem_42868.addEventListener(cljs.core.name(actual_type_42938),canonical_f_42940);
} else {
elem_42868.attachEvent(cljs.core.name(actual_type_42938),canonical_f_42940);
}


var G__42941 = cljs.core.next(seq__42282_42931__$1);
var G__42942 = null;
var G__42943 = (0);
var G__42944 = (0);
seq__42282_42918 = G__42941;
chunk__42284_42919 = G__42942;
count__42285_42920 = G__42943;
i__42286_42921 = G__42944;
continue;
}
} else {
}
}
break;
}

var G__42945 = cljs.core.next(seq__42281_42909__$1);
var G__42946 = null;
var G__42947 = (0);
var G__42948 = (0);
seq__42281_42870 = G__42945;
chunk__42288_42871 = G__42946;
count__42289_42872 = G__42947;
i__42290_42873 = G__42948;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq42276){
var G__42277 = cljs.core.first(seq42276);
var seq42276__$1 = cljs.core.next(seq42276);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42277,seq42276__$1);
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
var len__4789__auto___42949 = arguments.length;
var i__4790__auto___42950 = (0);
while(true){
if((i__4790__auto___42950 < len__4789__auto___42949)){
args__4795__auto__.push((arguments[i__4790__auto___42950]));

var G__42951 = (i__4790__auto___42950 + (1));
i__4790__auto___42950 = G__42951;
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

var vec__42397_42952 = dommy.core.elem_and_selector(elem_sel);
var elem_42953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397_42952,(0),null);
var selector_42954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397_42952,(1),null);
var seq__42400_42955 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42407_42956 = null;
var count__42408_42957 = (0);
var i__42409_42958 = (0);
while(true){
if((i__42409_42958 < count__42408_42957)){
var vec__42450_42960 = chunk__42407_42956.cljs$core$IIndexed$_nth$arity$2(null,i__42409_42958);
var orig_type_42961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42450_42960,(0),null);
var f_42962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42450_42960,(1),null);
var seq__42410_42963 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42961,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42961,cljs.core.identity])));
var chunk__42412_42964 = null;
var count__42413_42965 = (0);
var i__42414_42966 = (0);
while(true){
if((i__42414_42966 < count__42413_42965)){
var vec__42459_42968 = chunk__42412_42964.cljs$core$IIndexed$_nth$arity$2(null,i__42414_42966);
var actual_type_42969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42459_42968,(0),null);
var __42970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42459_42968,(1),null);
var keys_42971 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42954,actual_type_42969,f_42962], null);
var canonical_f_42972 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42953),keys_42971);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42953,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42971], 0));

if(cljs.core.truth_(elem_42953.removeEventListener)){
elem_42953.removeEventListener(cljs.core.name(actual_type_42969),canonical_f_42972);
} else {
elem_42953.detachEvent(cljs.core.name(actual_type_42969),canonical_f_42972);
}


var G__42973 = seq__42410_42963;
var G__42974 = chunk__42412_42964;
var G__42975 = count__42413_42965;
var G__42976 = (i__42414_42966 + (1));
seq__42410_42963 = G__42973;
chunk__42412_42964 = G__42974;
count__42413_42965 = G__42975;
i__42414_42966 = G__42976;
continue;
} else {
var temp__5735__auto___42977 = cljs.core.seq(seq__42410_42963);
if(temp__5735__auto___42977){
var seq__42410_42978__$1 = temp__5735__auto___42977;
if(cljs.core.chunked_seq_QMARK_(seq__42410_42978__$1)){
var c__4609__auto___42979 = cljs.core.chunk_first(seq__42410_42978__$1);
var G__42980 = cljs.core.chunk_rest(seq__42410_42978__$1);
var G__42981 = c__4609__auto___42979;
var G__42982 = cljs.core.count(c__4609__auto___42979);
var G__42983 = (0);
seq__42410_42963 = G__42980;
chunk__42412_42964 = G__42981;
count__42413_42965 = G__42982;
i__42414_42966 = G__42983;
continue;
} else {
var vec__42465_42984 = cljs.core.first(seq__42410_42978__$1);
var actual_type_42985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465_42984,(0),null);
var __42986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465_42984,(1),null);
var keys_42987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42954,actual_type_42985,f_42962], null);
var canonical_f_42988 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42953),keys_42987);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42953,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42987], 0));

if(cljs.core.truth_(elem_42953.removeEventListener)){
elem_42953.removeEventListener(cljs.core.name(actual_type_42985),canonical_f_42988);
} else {
elem_42953.detachEvent(cljs.core.name(actual_type_42985),canonical_f_42988);
}


var G__42990 = cljs.core.next(seq__42410_42978__$1);
var G__42991 = null;
var G__42992 = (0);
var G__42993 = (0);
seq__42410_42963 = G__42990;
chunk__42412_42964 = G__42991;
count__42413_42965 = G__42992;
i__42414_42966 = G__42993;
continue;
}
} else {
}
}
break;
}

var G__42994 = seq__42400_42955;
var G__42995 = chunk__42407_42956;
var G__42996 = count__42408_42957;
var G__42997 = (i__42409_42958 + (1));
seq__42400_42955 = G__42994;
chunk__42407_42956 = G__42995;
count__42408_42957 = G__42996;
i__42409_42958 = G__42997;
continue;
} else {
var temp__5735__auto___42998 = cljs.core.seq(seq__42400_42955);
if(temp__5735__auto___42998){
var seq__42400_42999__$1 = temp__5735__auto___42998;
if(cljs.core.chunked_seq_QMARK_(seq__42400_42999__$1)){
var c__4609__auto___43001 = cljs.core.chunk_first(seq__42400_42999__$1);
var G__43002 = cljs.core.chunk_rest(seq__42400_42999__$1);
var G__43003 = c__4609__auto___43001;
var G__43004 = cljs.core.count(c__4609__auto___43001);
var G__43005 = (0);
seq__42400_42955 = G__43002;
chunk__42407_42956 = G__43003;
count__42408_42957 = G__43004;
i__42409_42958 = G__43005;
continue;
} else {
var vec__42468_43007 = cljs.core.first(seq__42400_42999__$1);
var orig_type_43008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42468_43007,(0),null);
var f_43009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42468_43007,(1),null);
var seq__42401_43010 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43008,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43008,cljs.core.identity])));
var chunk__42403_43011 = null;
var count__42404_43012 = (0);
var i__42405_43013 = (0);
while(true){
if((i__42405_43013 < count__42404_43012)){
var vec__42481_43015 = chunk__42403_43011.cljs$core$IIndexed$_nth$arity$2(null,i__42405_43013);
var actual_type_43016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481_43015,(0),null);
var __43017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481_43015,(1),null);
var keys_43018 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42954,actual_type_43016,f_43009], null);
var canonical_f_43019 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42953),keys_43018);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42953,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43018], 0));

if(cljs.core.truth_(elem_42953.removeEventListener)){
elem_42953.removeEventListener(cljs.core.name(actual_type_43016),canonical_f_43019);
} else {
elem_42953.detachEvent(cljs.core.name(actual_type_43016),canonical_f_43019);
}


var G__43020 = seq__42401_43010;
var G__43021 = chunk__42403_43011;
var G__43022 = count__42404_43012;
var G__43023 = (i__42405_43013 + (1));
seq__42401_43010 = G__43020;
chunk__42403_43011 = G__43021;
count__42404_43012 = G__43022;
i__42405_43013 = G__43023;
continue;
} else {
var temp__5735__auto___43024__$1 = cljs.core.seq(seq__42401_43010);
if(temp__5735__auto___43024__$1){
var seq__42401_43025__$1 = temp__5735__auto___43024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42401_43025__$1)){
var c__4609__auto___43027 = cljs.core.chunk_first(seq__42401_43025__$1);
var G__43028 = cljs.core.chunk_rest(seq__42401_43025__$1);
var G__43029 = c__4609__auto___43027;
var G__43030 = cljs.core.count(c__4609__auto___43027);
var G__43031 = (0);
seq__42401_43010 = G__43028;
chunk__42403_43011 = G__43029;
count__42404_43012 = G__43030;
i__42405_43013 = G__43031;
continue;
} else {
var vec__42484_43036 = cljs.core.first(seq__42401_43025__$1);
var actual_type_43037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484_43036,(0),null);
var __43038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484_43036,(1),null);
var keys_43039 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42954,actual_type_43037,f_43009], null);
var canonical_f_43040 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42953),keys_43039);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42953,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43039], 0));

if(cljs.core.truth_(elem_42953.removeEventListener)){
elem_42953.removeEventListener(cljs.core.name(actual_type_43037),canonical_f_43040);
} else {
elem_42953.detachEvent(cljs.core.name(actual_type_43037),canonical_f_43040);
}


var G__43041 = cljs.core.next(seq__42401_43025__$1);
var G__43042 = null;
var G__43043 = (0);
var G__43044 = (0);
seq__42401_43010 = G__43041;
chunk__42403_43011 = G__43042;
count__42404_43012 = G__43043;
i__42405_43013 = G__43044;
continue;
}
} else {
}
}
break;
}

var G__43045 = cljs.core.next(seq__42400_42999__$1);
var G__43046 = null;
var G__43047 = (0);
var G__43048 = (0);
seq__42400_42955 = G__43045;
chunk__42407_42956 = G__43046;
count__42408_42957 = G__43047;
i__42409_42958 = G__43048;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq42395){
var G__42396 = cljs.core.first(seq42395);
var seq42395__$1 = cljs.core.next(seq42395);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42396,seq42395__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43051 = arguments.length;
var i__4790__auto___43052 = (0);
while(true){
if((i__4790__auto___43052 < len__4789__auto___43051)){
args__4795__auto__.push((arguments[i__4790__auto___43052]));

var G__43053 = (i__4790__auto___43052 + (1));
i__4790__auto___43052 = G__43053;
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

var vec__42489_43054 = dommy.core.elem_and_selector(elem_sel);
var elem_43055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489_43054,(0),null);
var selector_43056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489_43054,(1),null);
var seq__42492_43059 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42493_43060 = null;
var count__42494_43061 = (0);
var i__42495_43062 = (0);
while(true){
if((i__42495_43062 < count__42494_43061)){
var vec__42502_43064 = chunk__42493_43060.cljs$core$IIndexed$_nth$arity$2(null,i__42495_43062);
var type_43065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502_43064,(0),null);
var f_43066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502_43064,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43065,((function (seq__42492_43059,chunk__42493_43060,count__42494_43061,i__42495_43062,vec__42502_43064,type_43065,f_43066,vec__42489_43054,elem_43055,selector_43056){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43065,dommy$core$this_fn], 0));

return (f_43066.cljs$core$IFn$_invoke$arity$1 ? f_43066.cljs$core$IFn$_invoke$arity$1(e) : f_43066.call(null,e));
});})(seq__42492_43059,chunk__42493_43060,count__42494_43061,i__42495_43062,vec__42502_43064,type_43065,f_43066,vec__42489_43054,elem_43055,selector_43056))
], 0));


var G__43068 = seq__42492_43059;
var G__43069 = chunk__42493_43060;
var G__43070 = count__42494_43061;
var G__43071 = (i__42495_43062 + (1));
seq__42492_43059 = G__43068;
chunk__42493_43060 = G__43069;
count__42494_43061 = G__43070;
i__42495_43062 = G__43071;
continue;
} else {
var temp__5735__auto___43072 = cljs.core.seq(seq__42492_43059);
if(temp__5735__auto___43072){
var seq__42492_43073__$1 = temp__5735__auto___43072;
if(cljs.core.chunked_seq_QMARK_(seq__42492_43073__$1)){
var c__4609__auto___43074 = cljs.core.chunk_first(seq__42492_43073__$1);
var G__43075 = cljs.core.chunk_rest(seq__42492_43073__$1);
var G__43076 = c__4609__auto___43074;
var G__43077 = cljs.core.count(c__4609__auto___43074);
var G__43078 = (0);
seq__42492_43059 = G__43075;
chunk__42493_43060 = G__43076;
count__42494_43061 = G__43077;
i__42495_43062 = G__43078;
continue;
} else {
var vec__42505_43080 = cljs.core.first(seq__42492_43073__$1);
var type_43081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505_43080,(0),null);
var f_43082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505_43080,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43081,((function (seq__42492_43059,chunk__42493_43060,count__42494_43061,i__42495_43062,vec__42505_43080,type_43081,f_43082,seq__42492_43073__$1,temp__5735__auto___43072,vec__42489_43054,elem_43055,selector_43056){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43081,dommy$core$this_fn], 0));

return (f_43082.cljs$core$IFn$_invoke$arity$1 ? f_43082.cljs$core$IFn$_invoke$arity$1(e) : f_43082.call(null,e));
});})(seq__42492_43059,chunk__42493_43060,count__42494_43061,i__42495_43062,vec__42505_43080,type_43081,f_43082,seq__42492_43073__$1,temp__5735__auto___43072,vec__42489_43054,elem_43055,selector_43056))
], 0));


var G__43087 = cljs.core.next(seq__42492_43073__$1);
var G__43088 = null;
var G__43089 = (0);
var G__43090 = (0);
seq__42492_43059 = G__43087;
chunk__42493_43060 = G__43088;
count__42494_43061 = G__43089;
i__42495_43062 = G__43090;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq42487){
var G__42488 = cljs.core.first(seq42487);
var seq42487__$1 = cljs.core.next(seq42487);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42488,seq42487__$1);
}));


//# sourceMappingURL=dommy.core.js.map
