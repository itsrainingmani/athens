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
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var G__40132 = arguments.length;
switch (G__40132) {
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
var G__40134 = arguments.length;
switch (G__40134) {
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
var G__40137 = arguments.length;
switch (G__40137) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40135_SHARP_){
return (!((p1__40135_SHARP_ === base)));
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
var args__4742__auto__ = [];
var len__4736__auto___40594 = arguments.length;
var i__4737__auto___40595 = (0);
while(true){
if((i__4737__auto___40595 < len__4736__auto___40594)){
args__4742__auto__.push((arguments[i__4737__auto___40595]));

var G__40596 = (i__4737__auto___40595 + (1));
i__4737__auto___40595 = G__40596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__40147_40597 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40148_40598 = null;
var count__40149_40599 = (0);
var i__40150_40600 = (0);
while(true){
if((i__40150_40600 < count__40149_40599)){
var vec__40159_40601 = chunk__40148_40598.cljs$core$IIndexed$_nth$arity$2(null,i__40150_40600);
var k_40602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40159_40601,(0),null);
var v_40603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40159_40601,(1),null);
style.setProperty(dommy.utils.as_str(k_40602),v_40603);


var G__40605 = seq__40147_40597;
var G__40606 = chunk__40148_40598;
var G__40607 = count__40149_40599;
var G__40608 = (i__40150_40600 + (1));
seq__40147_40597 = G__40605;
chunk__40148_40598 = G__40606;
count__40149_40599 = G__40607;
i__40150_40600 = G__40608;
continue;
} else {
var temp__5735__auto___40610 = cljs.core.seq(seq__40147_40597);
if(temp__5735__auto___40610){
var seq__40147_40611__$1 = temp__5735__auto___40610;
if(cljs.core.chunked_seq_QMARK_(seq__40147_40611__$1)){
var c__4556__auto___40612 = cljs.core.chunk_first(seq__40147_40611__$1);
var G__40613 = cljs.core.chunk_rest(seq__40147_40611__$1);
var G__40614 = c__4556__auto___40612;
var G__40615 = cljs.core.count(c__4556__auto___40612);
var G__40616 = (0);
seq__40147_40597 = G__40613;
chunk__40148_40598 = G__40614;
count__40149_40599 = G__40615;
i__40150_40600 = G__40616;
continue;
} else {
var vec__40164_40617 = cljs.core.first(seq__40147_40611__$1);
var k_40618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40617,(0),null);
var v_40619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40617,(1),null);
style.setProperty(dommy.utils.as_str(k_40618),v_40619);


var G__40620 = cljs.core.next(seq__40147_40611__$1);
var G__40621 = null;
var G__40622 = (0);
var G__40623 = (0);
seq__40147_40597 = G__40620;
chunk__40148_40598 = G__40621;
count__40149_40599 = G__40622;
i__40150_40600 = G__40623;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40143){
var G__40144 = cljs.core.first(seq40143);
var seq40143__$1 = cljs.core.next(seq40143);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40144,seq40143__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40624 = arguments.length;
var i__4737__auto___40625 = (0);
while(true){
if((i__4737__auto___40625 < len__4736__auto___40624)){
args__4742__auto__.push((arguments[i__4737__auto___40625]));

var G__40626 = (i__4737__auto___40625 + (1));
i__4737__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__40171_40627 = cljs.core.seq(keywords);
var chunk__40172_40628 = null;
var count__40173_40629 = (0);
var i__40174_40630 = (0);
while(true){
if((i__40174_40630 < count__40173_40629)){
var kw_40631 = chunk__40172_40628.cljs$core$IIndexed$_nth$arity$2(null,i__40174_40630);
style.removeProperty(dommy.utils.as_str(kw_40631));


var G__40632 = seq__40171_40627;
var G__40633 = chunk__40172_40628;
var G__40634 = count__40173_40629;
var G__40635 = (i__40174_40630 + (1));
seq__40171_40627 = G__40632;
chunk__40172_40628 = G__40633;
count__40173_40629 = G__40634;
i__40174_40630 = G__40635;
continue;
} else {
var temp__5735__auto___40636 = cljs.core.seq(seq__40171_40627);
if(temp__5735__auto___40636){
var seq__40171_40637__$1 = temp__5735__auto___40636;
if(cljs.core.chunked_seq_QMARK_(seq__40171_40637__$1)){
var c__4556__auto___40638 = cljs.core.chunk_first(seq__40171_40637__$1);
var G__40639 = cljs.core.chunk_rest(seq__40171_40637__$1);
var G__40640 = c__4556__auto___40638;
var G__40641 = cljs.core.count(c__4556__auto___40638);
var G__40642 = (0);
seq__40171_40627 = G__40639;
chunk__40172_40628 = G__40640;
count__40173_40629 = G__40641;
i__40174_40630 = G__40642;
continue;
} else {
var kw_40643 = cljs.core.first(seq__40171_40637__$1);
style.removeProperty(dommy.utils.as_str(kw_40643));


var G__40644 = cljs.core.next(seq__40171_40637__$1);
var G__40645 = null;
var G__40646 = (0);
var G__40647 = (0);
seq__40171_40627 = G__40644;
chunk__40172_40628 = G__40645;
count__40173_40629 = G__40646;
i__40174_40630 = G__40647;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40168){
var G__40169 = cljs.core.first(seq40168);
var seq40168__$1 = cljs.core.next(seq40168);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40169,seq40168__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40648 = arguments.length;
var i__4737__auto___40649 = (0);
while(true){
if((i__4737__auto___40649 < len__4736__auto___40648)){
args__4742__auto__.push((arguments[i__4737__auto___40649]));

var G__40650 = (i__4737__auto___40649 + (1));
i__4737__auto___40649 = G__40650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40178_40651 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40179_40652 = null;
var count__40180_40653 = (0);
var i__40181_40654 = (0);
while(true){
if((i__40181_40654 < count__40180_40653)){
var vec__40188_40655 = chunk__40179_40652.cljs$core$IIndexed$_nth$arity$2(null,i__40181_40654);
var k_40656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40655,(0),null);
var v_40657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40655,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40656,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40657),"px"].join('')], 0));


var G__40658 = seq__40178_40651;
var G__40659 = chunk__40179_40652;
var G__40660 = count__40180_40653;
var G__40661 = (i__40181_40654 + (1));
seq__40178_40651 = G__40658;
chunk__40179_40652 = G__40659;
count__40180_40653 = G__40660;
i__40181_40654 = G__40661;
continue;
} else {
var temp__5735__auto___40662 = cljs.core.seq(seq__40178_40651);
if(temp__5735__auto___40662){
var seq__40178_40663__$1 = temp__5735__auto___40662;
if(cljs.core.chunked_seq_QMARK_(seq__40178_40663__$1)){
var c__4556__auto___40664 = cljs.core.chunk_first(seq__40178_40663__$1);
var G__40665 = cljs.core.chunk_rest(seq__40178_40663__$1);
var G__40666 = c__4556__auto___40664;
var G__40667 = cljs.core.count(c__4556__auto___40664);
var G__40668 = (0);
seq__40178_40651 = G__40665;
chunk__40179_40652 = G__40666;
count__40180_40653 = G__40667;
i__40181_40654 = G__40668;
continue;
} else {
var vec__40191_40669 = cljs.core.first(seq__40178_40663__$1);
var k_40670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40669,(0),null);
var v_40671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40669,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40670,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40671),"px"].join('')], 0));


var G__40672 = cljs.core.next(seq__40178_40663__$1);
var G__40673 = null;
var G__40674 = (0);
var G__40675 = (0);
seq__40178_40651 = G__40672;
chunk__40179_40652 = G__40673;
count__40180_40653 = G__40674;
i__40181_40654 = G__40675;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40176){
var G__40177 = cljs.core.first(seq40176);
var seq40176__$1 = cljs.core.next(seq40176);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40177,seq40176__$1);
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
var G__40199 = arguments.length;
switch (G__40199) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40677 = arguments.length;
var i__4737__auto___40678 = (0);
while(true){
if((i__4737__auto___40678 < len__4736__auto___40677)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40678]));

var G__40679 = (i__4737__auto___40678 + (1));
i__4737__auto___40678 = G__40679;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__40200 = elem;
(G__40200[k__$1] = v);

return G__40200;
} else {
var G__40201 = elem;
G__40201.setAttribute(k__$1,v);

return G__40201;
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

var seq__40202_40680 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40203_40681 = null;
var count__40204_40682 = (0);
var i__40205_40683 = (0);
while(true){
if((i__40205_40683 < count__40204_40682)){
var vec__40212_40684 = chunk__40203_40681.cljs$core$IIndexed$_nth$arity$2(null,i__40205_40683);
var k_40685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40212_40684,(0),null);
var v_40686__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40212_40684,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40685__$1,v_40686__$1);


var G__40687 = seq__40202_40680;
var G__40688 = chunk__40203_40681;
var G__40689 = count__40204_40682;
var G__40690 = (i__40205_40683 + (1));
seq__40202_40680 = G__40687;
chunk__40203_40681 = G__40688;
count__40204_40682 = G__40689;
i__40205_40683 = G__40690;
continue;
} else {
var temp__5735__auto___40691 = cljs.core.seq(seq__40202_40680);
if(temp__5735__auto___40691){
var seq__40202_40692__$1 = temp__5735__auto___40691;
if(cljs.core.chunked_seq_QMARK_(seq__40202_40692__$1)){
var c__4556__auto___40693 = cljs.core.chunk_first(seq__40202_40692__$1);
var G__40694 = cljs.core.chunk_rest(seq__40202_40692__$1);
var G__40695 = c__4556__auto___40693;
var G__40696 = cljs.core.count(c__4556__auto___40693);
var G__40697 = (0);
seq__40202_40680 = G__40694;
chunk__40203_40681 = G__40695;
count__40204_40682 = G__40696;
i__40205_40683 = G__40697;
continue;
} else {
var vec__40215_40698 = cljs.core.first(seq__40202_40692__$1);
var k_40699__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40698,(0),null);
var v_40700__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40698,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40699__$1,v_40700__$1);


var G__40701 = cljs.core.next(seq__40202_40692__$1);
var G__40702 = null;
var G__40703 = (0);
var G__40704 = (0);
seq__40202_40680 = G__40701;
chunk__40203_40681 = G__40702;
count__40204_40682 = G__40703;
i__40205_40683 = G__40704;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40195){
var G__40196 = cljs.core.first(seq40195);
var seq40195__$1 = cljs.core.next(seq40195);
var G__40197 = cljs.core.first(seq40195__$1);
var seq40195__$2 = cljs.core.next(seq40195__$1);
var G__40198 = cljs.core.first(seq40195__$2);
var seq40195__$3 = cljs.core.next(seq40195__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40196,G__40197,G__40198,seq40195__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40222 = arguments.length;
switch (G__40222) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40706 = arguments.length;
var i__4737__auto___40707 = (0);
while(true){
if((i__4737__auto___40707 < len__4736__auto___40706)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40707]));

var G__40708 = (i__4737__auto___40707 + (1));
i__4737__auto___40707 = G__40708;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_40709__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40223.cljs$core$IFn$_invoke$arity$1 ? fexpr__40223.cljs$core$IFn$_invoke$arity$1(k_40709__$1) : fexpr__40223.call(null,k_40709__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40709__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40224_40712 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40225_40713 = null;
var count__40226_40714 = (0);
var i__40227_40715 = (0);
while(true){
if((i__40227_40715 < count__40226_40714)){
var k_40716__$1 = chunk__40225_40713.cljs$core$IIndexed$_nth$arity$2(null,i__40227_40715);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40716__$1);


var G__40717 = seq__40224_40712;
var G__40718 = chunk__40225_40713;
var G__40719 = count__40226_40714;
var G__40720 = (i__40227_40715 + (1));
seq__40224_40712 = G__40717;
chunk__40225_40713 = G__40718;
count__40226_40714 = G__40719;
i__40227_40715 = G__40720;
continue;
} else {
var temp__5735__auto___40721 = cljs.core.seq(seq__40224_40712);
if(temp__5735__auto___40721){
var seq__40224_40722__$1 = temp__5735__auto___40721;
if(cljs.core.chunked_seq_QMARK_(seq__40224_40722__$1)){
var c__4556__auto___40723 = cljs.core.chunk_first(seq__40224_40722__$1);
var G__40724 = cljs.core.chunk_rest(seq__40224_40722__$1);
var G__40725 = c__4556__auto___40723;
var G__40726 = cljs.core.count(c__4556__auto___40723);
var G__40727 = (0);
seq__40224_40712 = G__40724;
chunk__40225_40713 = G__40725;
count__40226_40714 = G__40726;
i__40227_40715 = G__40727;
continue;
} else {
var k_40729__$1 = cljs.core.first(seq__40224_40722__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40729__$1);


var G__40730 = cljs.core.next(seq__40224_40722__$1);
var G__40731 = null;
var G__40732 = (0);
var G__40733 = (0);
seq__40224_40712 = G__40730;
chunk__40225_40713 = G__40731;
count__40226_40714 = G__40732;
i__40227_40715 = G__40733;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40219){
var G__40220 = cljs.core.first(seq40219);
var seq40219__$1 = cljs.core.next(seq40219);
var G__40221 = cljs.core.first(seq40219__$1);
var seq40219__$2 = cljs.core.next(seq40219__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40220,G__40221,seq40219__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40229 = arguments.length;
switch (G__40229) {
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
var G__40234 = arguments.length;
switch (G__40234) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40744 = arguments.length;
var i__4737__auto___40745 = (0);
while(true){
if((i__4737__auto___40745 < len__4736__auto___40744)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40745]));

var G__40746 = (i__4737__auto___40745 + (1));
i__4737__auto___40745 = G__40746;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___40749 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40749)){
var class_list_40750 = temp__5733__auto___40749;
var seq__40235_40751 = cljs.core.seq(classes__$1);
var chunk__40236_40752 = null;
var count__40237_40753 = (0);
var i__40238_40754 = (0);
while(true){
if((i__40238_40754 < count__40237_40753)){
var c_40756 = chunk__40236_40752.cljs$core$IIndexed$_nth$arity$2(null,i__40238_40754);
class_list_40750.add(c_40756);


var G__40758 = seq__40235_40751;
var G__40759 = chunk__40236_40752;
var G__40760 = count__40237_40753;
var G__40761 = (i__40238_40754 + (1));
seq__40235_40751 = G__40758;
chunk__40236_40752 = G__40759;
count__40237_40753 = G__40760;
i__40238_40754 = G__40761;
continue;
} else {
var temp__5735__auto___40762 = cljs.core.seq(seq__40235_40751);
if(temp__5735__auto___40762){
var seq__40235_40763__$1 = temp__5735__auto___40762;
if(cljs.core.chunked_seq_QMARK_(seq__40235_40763__$1)){
var c__4556__auto___40764 = cljs.core.chunk_first(seq__40235_40763__$1);
var G__40765 = cljs.core.chunk_rest(seq__40235_40763__$1);
var G__40766 = c__4556__auto___40764;
var G__40767 = cljs.core.count(c__4556__auto___40764);
var G__40768 = (0);
seq__40235_40751 = G__40765;
chunk__40236_40752 = G__40766;
count__40237_40753 = G__40767;
i__40238_40754 = G__40768;
continue;
} else {
var c_40770 = cljs.core.first(seq__40235_40763__$1);
class_list_40750.add(c_40770);


var G__40772 = cljs.core.next(seq__40235_40763__$1);
var G__40773 = null;
var G__40774 = (0);
var G__40775 = (0);
seq__40235_40751 = G__40772;
chunk__40236_40752 = G__40773;
count__40237_40753 = G__40774;
i__40238_40754 = G__40775;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40239_40777 = cljs.core.seq(classes__$1);
var chunk__40240_40778 = null;
var count__40241_40779 = (0);
var i__40242_40780 = (0);
while(true){
if((i__40242_40780 < count__40241_40779)){
var c_40782 = chunk__40240_40778.cljs$core$IIndexed$_nth$arity$2(null,i__40242_40780);
var class_name_40783 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40783,c_40782))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40783 === ""))?c_40782:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40783)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40782)].join('')));
}


var G__40784 = seq__40239_40777;
var G__40785 = chunk__40240_40778;
var G__40786 = count__40241_40779;
var G__40787 = (i__40242_40780 + (1));
seq__40239_40777 = G__40784;
chunk__40240_40778 = G__40785;
count__40241_40779 = G__40786;
i__40242_40780 = G__40787;
continue;
} else {
var temp__5735__auto___40788 = cljs.core.seq(seq__40239_40777);
if(temp__5735__auto___40788){
var seq__40239_40789__$1 = temp__5735__auto___40788;
if(cljs.core.chunked_seq_QMARK_(seq__40239_40789__$1)){
var c__4556__auto___40790 = cljs.core.chunk_first(seq__40239_40789__$1);
var G__40791 = cljs.core.chunk_rest(seq__40239_40789__$1);
var G__40792 = c__4556__auto___40790;
var G__40793 = cljs.core.count(c__4556__auto___40790);
var G__40794 = (0);
seq__40239_40777 = G__40791;
chunk__40240_40778 = G__40792;
count__40241_40779 = G__40793;
i__40242_40780 = G__40794;
continue;
} else {
var c_40798 = cljs.core.first(seq__40239_40789__$1);
var class_name_40800 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40800,c_40798))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40800 === ""))?c_40798:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40800)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40798)].join('')));
}


var G__40802 = cljs.core.next(seq__40239_40789__$1);
var G__40803 = null;
var G__40804 = (0);
var G__40805 = (0);
seq__40239_40777 = G__40802;
chunk__40240_40778 = G__40803;
count__40241_40779 = G__40804;
i__40242_40780 = G__40805;
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
var seq__40243_40806 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40244_40807 = null;
var count__40245_40808 = (0);
var i__40246_40809 = (0);
while(true){
if((i__40246_40809 < count__40245_40808)){
var c_40811 = chunk__40244_40807.cljs$core$IIndexed$_nth$arity$2(null,i__40246_40809);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40811);


var G__40814 = seq__40243_40806;
var G__40815 = chunk__40244_40807;
var G__40816 = count__40245_40808;
var G__40817 = (i__40246_40809 + (1));
seq__40243_40806 = G__40814;
chunk__40244_40807 = G__40815;
count__40245_40808 = G__40816;
i__40246_40809 = G__40817;
continue;
} else {
var temp__5735__auto___40820 = cljs.core.seq(seq__40243_40806);
if(temp__5735__auto___40820){
var seq__40243_40821__$1 = temp__5735__auto___40820;
if(cljs.core.chunked_seq_QMARK_(seq__40243_40821__$1)){
var c__4556__auto___40822 = cljs.core.chunk_first(seq__40243_40821__$1);
var G__40823 = cljs.core.chunk_rest(seq__40243_40821__$1);
var G__40824 = c__4556__auto___40822;
var G__40825 = cljs.core.count(c__4556__auto___40822);
var G__40826 = (0);
seq__40243_40806 = G__40823;
chunk__40244_40807 = G__40824;
count__40245_40808 = G__40825;
i__40246_40809 = G__40826;
continue;
} else {
var c_40827 = cljs.core.first(seq__40243_40821__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40827);


var G__40828 = cljs.core.next(seq__40243_40821__$1);
var G__40829 = null;
var G__40830 = (0);
var G__40831 = (0);
seq__40243_40806 = G__40828;
chunk__40244_40807 = G__40829;
count__40245_40808 = G__40830;
i__40246_40809 = G__40831;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40231){
var G__40232 = cljs.core.first(seq40231);
var seq40231__$1 = cljs.core.next(seq40231);
var G__40233 = cljs.core.first(seq40231__$1);
var seq40231__$2 = cljs.core.next(seq40231__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40232,G__40233,seq40231__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40251 = arguments.length;
switch (G__40251) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40833 = arguments.length;
var i__4737__auto___40834 = (0);
while(true){
if((i__4737__auto___40834 < len__4736__auto___40833)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40834]));

var G__40835 = (i__4737__auto___40834 + (1));
i__4737__auto___40834 = G__40835;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40836 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40836)){
var class_list_40837 = temp__5733__auto___40836;
class_list_40837.remove(c__$1);
} else {
var class_name_40838 = dommy.core.class$(elem);
var new_class_name_40839 = dommy.utils.remove_class_str(class_name_40838,c__$1);
if((class_name_40838 === new_class_name_40839)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40839);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40252 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40253 = null;
var count__40254 = (0);
var i__40255 = (0);
while(true){
if((i__40255 < count__40254)){
var c = chunk__40253.cljs$core$IIndexed$_nth$arity$2(null,i__40255);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40840 = seq__40252;
var G__40841 = chunk__40253;
var G__40842 = count__40254;
var G__40843 = (i__40255 + (1));
seq__40252 = G__40840;
chunk__40253 = G__40841;
count__40254 = G__40842;
i__40255 = G__40843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40252);
if(temp__5735__auto__){
var seq__40252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40252__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40252__$1);
var G__40844 = cljs.core.chunk_rest(seq__40252__$1);
var G__40845 = c__4556__auto__;
var G__40846 = cljs.core.count(c__4556__auto__);
var G__40847 = (0);
seq__40252 = G__40844;
chunk__40253 = G__40845;
count__40254 = G__40846;
i__40255 = G__40847;
continue;
} else {
var c = cljs.core.first(seq__40252__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40848 = cljs.core.next(seq__40252__$1);
var G__40849 = null;
var G__40850 = (0);
var G__40851 = (0);
seq__40252 = G__40848;
chunk__40253 = G__40849;
count__40254 = G__40850;
i__40255 = G__40851;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40248){
var G__40249 = cljs.core.first(seq40248);
var seq40248__$1 = cljs.core.next(seq40248);
var G__40250 = cljs.core.first(seq40248__$1);
var seq40248__$2 = cljs.core.next(seq40248__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40249,G__40250,seq40248__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40260 = arguments.length;
switch (G__40260) {
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
var temp__5733__auto___40853 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40853)){
var class_list_40854 = temp__5733__auto___40853;
class_list_40854.toggle(c__$1);
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
var G__40262 = arguments.length;
switch (G__40262) {
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
var G__40264 = arguments.length;
switch (G__40264) {
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
var G__40269 = arguments.length;
switch (G__40269) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40858 = arguments.length;
var i__4737__auto___40859 = (0);
while(true){
if((i__4737__auto___40859 < len__4736__auto___40858)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40859]));

var G__40860 = (i__4737__auto___40859 + (1));
i__4737__auto___40859 = G__40860;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40270 = parent;
G__40270.appendChild(child);

return G__40270;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40271_40861 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40272_40862 = null;
var count__40273_40863 = (0);
var i__40274_40864 = (0);
while(true){
if((i__40274_40864 < count__40273_40863)){
var c_40865 = chunk__40272_40862.cljs$core$IIndexed$_nth$arity$2(null,i__40274_40864);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40865);


var G__40866 = seq__40271_40861;
var G__40867 = chunk__40272_40862;
var G__40868 = count__40273_40863;
var G__40869 = (i__40274_40864 + (1));
seq__40271_40861 = G__40866;
chunk__40272_40862 = G__40867;
count__40273_40863 = G__40868;
i__40274_40864 = G__40869;
continue;
} else {
var temp__5735__auto___40870 = cljs.core.seq(seq__40271_40861);
if(temp__5735__auto___40870){
var seq__40271_40871__$1 = temp__5735__auto___40870;
if(cljs.core.chunked_seq_QMARK_(seq__40271_40871__$1)){
var c__4556__auto___40872 = cljs.core.chunk_first(seq__40271_40871__$1);
var G__40873 = cljs.core.chunk_rest(seq__40271_40871__$1);
var G__40874 = c__4556__auto___40872;
var G__40875 = cljs.core.count(c__4556__auto___40872);
var G__40876 = (0);
seq__40271_40861 = G__40873;
chunk__40272_40862 = G__40874;
count__40273_40863 = G__40875;
i__40274_40864 = G__40876;
continue;
} else {
var c_40877 = cljs.core.first(seq__40271_40871__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40877);


var G__40878 = cljs.core.next(seq__40271_40871__$1);
var G__40879 = null;
var G__40880 = (0);
var G__40881 = (0);
seq__40271_40861 = G__40878;
chunk__40272_40862 = G__40879;
count__40273_40863 = G__40880;
i__40274_40864 = G__40881;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40266){
var G__40267 = cljs.core.first(seq40266);
var seq40266__$1 = cljs.core.next(seq40266);
var G__40268 = cljs.core.first(seq40266__$1);
var seq40266__$2 = cljs.core.next(seq40266__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40267,G__40268,seq40266__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40279 = arguments.length;
switch (G__40279) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40883 = arguments.length;
var i__4737__auto___40884 = (0);
while(true){
if((i__4737__auto___40884 < len__4736__auto___40883)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40884]));

var G__40885 = (i__4737__auto___40884 + (1));
i__4737__auto___40884 = G__40885;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40280 = parent;
G__40280.insertBefore(child,parent.firstChild);

return G__40280;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40281_40886 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40282_40887 = null;
var count__40283_40888 = (0);
var i__40284_40889 = (0);
while(true){
if((i__40284_40889 < count__40283_40888)){
var c_40890 = chunk__40282_40887.cljs$core$IIndexed$_nth$arity$2(null,i__40284_40889);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40890);


var G__40891 = seq__40281_40886;
var G__40892 = chunk__40282_40887;
var G__40893 = count__40283_40888;
var G__40894 = (i__40284_40889 + (1));
seq__40281_40886 = G__40891;
chunk__40282_40887 = G__40892;
count__40283_40888 = G__40893;
i__40284_40889 = G__40894;
continue;
} else {
var temp__5735__auto___40895 = cljs.core.seq(seq__40281_40886);
if(temp__5735__auto___40895){
var seq__40281_40896__$1 = temp__5735__auto___40895;
if(cljs.core.chunked_seq_QMARK_(seq__40281_40896__$1)){
var c__4556__auto___40897 = cljs.core.chunk_first(seq__40281_40896__$1);
var G__40898 = cljs.core.chunk_rest(seq__40281_40896__$1);
var G__40899 = c__4556__auto___40897;
var G__40900 = cljs.core.count(c__4556__auto___40897);
var G__40901 = (0);
seq__40281_40886 = G__40898;
chunk__40282_40887 = G__40899;
count__40283_40888 = G__40900;
i__40284_40889 = G__40901;
continue;
} else {
var c_40902 = cljs.core.first(seq__40281_40896__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40902);


var G__40903 = cljs.core.next(seq__40281_40896__$1);
var G__40904 = null;
var G__40905 = (0);
var G__40906 = (0);
seq__40281_40886 = G__40903;
chunk__40282_40887 = G__40904;
count__40283_40888 = G__40905;
i__40284_40889 = G__40906;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40276){
var G__40277 = cljs.core.first(seq40276);
var seq40276__$1 = cljs.core.next(seq40276);
var G__40278 = cljs.core.first(seq40276__$1);
var seq40276__$2 = cljs.core.next(seq40276__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40277,G__40278,seq40276__$2);
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
var temp__5733__auto___40907 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40907)){
var next_40908 = temp__5733__auto___40907;
dommy.core.insert_before_BANG_(elem,next_40908);
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
var G__40286 = arguments.length;
switch (G__40286) {
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
var G__40287 = p;
G__40287.removeChild(elem);

return G__40287;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40288){
var vec__40289 = p__40288;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
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
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
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
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40910 = arguments.length;
var i__4737__auto___40911 = (0);
while(true){
if((i__4737__auto___40911 < len__4736__auto___40910)){
args__4742__auto__.push((arguments[i__4737__auto___40911]));

var G__40912 = (i__4737__auto___40911 + (1));
i__4737__auto___40911 = G__40912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40295){
var G__40296 = cljs.core.first(seq40295);
var seq40295__$1 = cljs.core.next(seq40295);
var G__40297 = cljs.core.first(seq40295__$1);
var seq40295__$2 = cljs.core.next(seq40295__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40296,G__40297,seq40295__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
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
var args__4742__auto__ = [];
var len__4736__auto___40917 = arguments.length;
var i__4737__auto___40918 = (0);
while(true){
if((i__4737__auto___40918 < len__4736__auto___40917)){
args__4742__auto__.push((arguments[i__4737__auto___40918]));

var G__40920 = (i__4737__auto___40918 + (1));
i__4737__auto___40918 = G__40920;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40300_40922 = dommy.core.elem_and_selector(elem_sel);
var elem_40923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40300_40922,(0),null);
var selector_40924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40300_40922,(1),null);
var seq__40303_40925 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40310_40926 = null;
var count__40311_40927 = (0);
var i__40312_40928 = (0);
while(true){
if((i__40312_40928 < count__40311_40927)){
var vec__40368_40929 = chunk__40310_40926.cljs$core$IIndexed$_nth$arity$2(null,i__40312_40928);
var orig_type_40930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40929,(0),null);
var f_40931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40929,(1),null);
var seq__40313_40932 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40930,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40930,cljs.core.identity])));
var chunk__40315_40933 = null;
var count__40316_40934 = (0);
var i__40317_40935 = (0);
while(true){
if((i__40317_40935 < count__40316_40934)){
var vec__40385_40936 = chunk__40315_40933.cljs$core$IIndexed$_nth$arity$2(null,i__40317_40935);
var actual_type_40937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385_40936,(0),null);
var factory_40938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385_40936,(1),null);
var canonical_f_40939 = (function (){var G__40389 = (factory_40938.cljs$core$IFn$_invoke$arity$1 ? factory_40938.cljs$core$IFn$_invoke$arity$1(f_40931) : factory_40938.call(null,f_40931));
var fexpr__40388 = (cljs.core.truth_(selector_40924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40923,selector_40924):cljs.core.identity);
return (fexpr__40388.cljs$core$IFn$_invoke$arity$1 ? fexpr__40388.cljs$core$IFn$_invoke$arity$1(G__40389) : fexpr__40388.call(null,G__40389));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40924,actual_type_40937,f_40931], null),canonical_f_40939], 0));

if(cljs.core.truth_(elem_40923.addEventListener)){
elem_40923.addEventListener(cljs.core.name(actual_type_40937),canonical_f_40939);
} else {
elem_40923.attachEvent(cljs.core.name(actual_type_40937),canonical_f_40939);
}


var G__40943 = seq__40313_40932;
var G__40944 = chunk__40315_40933;
var G__40945 = count__40316_40934;
var G__40946 = (i__40317_40935 + (1));
seq__40313_40932 = G__40943;
chunk__40315_40933 = G__40944;
count__40316_40934 = G__40945;
i__40317_40935 = G__40946;
continue;
} else {
var temp__5735__auto___40948 = cljs.core.seq(seq__40313_40932);
if(temp__5735__auto___40948){
var seq__40313_40949__$1 = temp__5735__auto___40948;
if(cljs.core.chunked_seq_QMARK_(seq__40313_40949__$1)){
var c__4556__auto___40950 = cljs.core.chunk_first(seq__40313_40949__$1);
var G__40951 = cljs.core.chunk_rest(seq__40313_40949__$1);
var G__40952 = c__4556__auto___40950;
var G__40953 = cljs.core.count(c__4556__auto___40950);
var G__40954 = (0);
seq__40313_40932 = G__40951;
chunk__40315_40933 = G__40952;
count__40316_40934 = G__40953;
i__40317_40935 = G__40954;
continue;
} else {
var vec__40393_40955 = cljs.core.first(seq__40313_40949__$1);
var actual_type_40956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40393_40955,(0),null);
var factory_40957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40393_40955,(1),null);
var canonical_f_40958 = (function (){var G__40397 = (factory_40957.cljs$core$IFn$_invoke$arity$1 ? factory_40957.cljs$core$IFn$_invoke$arity$1(f_40931) : factory_40957.call(null,f_40931));
var fexpr__40396 = (cljs.core.truth_(selector_40924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40923,selector_40924):cljs.core.identity);
return (fexpr__40396.cljs$core$IFn$_invoke$arity$1 ? fexpr__40396.cljs$core$IFn$_invoke$arity$1(G__40397) : fexpr__40396.call(null,G__40397));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40924,actual_type_40956,f_40931], null),canonical_f_40958], 0));

if(cljs.core.truth_(elem_40923.addEventListener)){
elem_40923.addEventListener(cljs.core.name(actual_type_40956),canonical_f_40958);
} else {
elem_40923.attachEvent(cljs.core.name(actual_type_40956),canonical_f_40958);
}


var G__40962 = cljs.core.next(seq__40313_40949__$1);
var G__40963 = null;
var G__40964 = (0);
var G__40965 = (0);
seq__40313_40932 = G__40962;
chunk__40315_40933 = G__40963;
count__40316_40934 = G__40964;
i__40317_40935 = G__40965;
continue;
}
} else {
}
}
break;
}

var G__40966 = seq__40303_40925;
var G__40967 = chunk__40310_40926;
var G__40968 = count__40311_40927;
var G__40969 = (i__40312_40928 + (1));
seq__40303_40925 = G__40966;
chunk__40310_40926 = G__40967;
count__40311_40927 = G__40968;
i__40312_40928 = G__40969;
continue;
} else {
var temp__5735__auto___40970 = cljs.core.seq(seq__40303_40925);
if(temp__5735__auto___40970){
var seq__40303_40971__$1 = temp__5735__auto___40970;
if(cljs.core.chunked_seq_QMARK_(seq__40303_40971__$1)){
var c__4556__auto___40972 = cljs.core.chunk_first(seq__40303_40971__$1);
var G__40973 = cljs.core.chunk_rest(seq__40303_40971__$1);
var G__40974 = c__4556__auto___40972;
var G__40975 = cljs.core.count(c__4556__auto___40972);
var G__40976 = (0);
seq__40303_40925 = G__40973;
chunk__40310_40926 = G__40974;
count__40311_40927 = G__40975;
i__40312_40928 = G__40976;
continue;
} else {
var vec__40402_40977 = cljs.core.first(seq__40303_40971__$1);
var orig_type_40978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40402_40977,(0),null);
var f_40979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40402_40977,(1),null);
var seq__40304_40982 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40978,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40978,cljs.core.identity])));
var chunk__40306_40983 = null;
var count__40307_40984 = (0);
var i__40308_40985 = (0);
while(true){
if((i__40308_40985 < count__40307_40984)){
var vec__40415_40990 = chunk__40306_40983.cljs$core$IIndexed$_nth$arity$2(null,i__40308_40985);
var actual_type_40991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40415_40990,(0),null);
var factory_40992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40415_40990,(1),null);
var canonical_f_40994 = (function (){var G__40419 = (factory_40992.cljs$core$IFn$_invoke$arity$1 ? factory_40992.cljs$core$IFn$_invoke$arity$1(f_40979) : factory_40992.call(null,f_40979));
var fexpr__40418 = (cljs.core.truth_(selector_40924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40923,selector_40924):cljs.core.identity);
return (fexpr__40418.cljs$core$IFn$_invoke$arity$1 ? fexpr__40418.cljs$core$IFn$_invoke$arity$1(G__40419) : fexpr__40418.call(null,G__40419));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40924,actual_type_40991,f_40979], null),canonical_f_40994], 0));

if(cljs.core.truth_(elem_40923.addEventListener)){
elem_40923.addEventListener(cljs.core.name(actual_type_40991),canonical_f_40994);
} else {
elem_40923.attachEvent(cljs.core.name(actual_type_40991),canonical_f_40994);
}


var G__40997 = seq__40304_40982;
var G__40998 = chunk__40306_40983;
var G__40999 = count__40307_40984;
var G__41000 = (i__40308_40985 + (1));
seq__40304_40982 = G__40997;
chunk__40306_40983 = G__40998;
count__40307_40984 = G__40999;
i__40308_40985 = G__41000;
continue;
} else {
var temp__5735__auto___41002__$1 = cljs.core.seq(seq__40304_40982);
if(temp__5735__auto___41002__$1){
var seq__40304_41004__$1 = temp__5735__auto___41002__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40304_41004__$1)){
var c__4556__auto___41005 = cljs.core.chunk_first(seq__40304_41004__$1);
var G__41006 = cljs.core.chunk_rest(seq__40304_41004__$1);
var G__41007 = c__4556__auto___41005;
var G__41008 = cljs.core.count(c__4556__auto___41005);
var G__41009 = (0);
seq__40304_40982 = G__41006;
chunk__40306_40983 = G__41007;
count__40307_40984 = G__41008;
i__40308_40985 = G__41009;
continue;
} else {
var vec__40420_41010 = cljs.core.first(seq__40304_41004__$1);
var actual_type_41011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40420_41010,(0),null);
var factory_41012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40420_41010,(1),null);
var canonical_f_41013 = (function (){var G__40424 = (factory_41012.cljs$core$IFn$_invoke$arity$1 ? factory_41012.cljs$core$IFn$_invoke$arity$1(f_40979) : factory_41012.call(null,f_40979));
var fexpr__40423 = (cljs.core.truth_(selector_40924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40923,selector_40924):cljs.core.identity);
return (fexpr__40423.cljs$core$IFn$_invoke$arity$1 ? fexpr__40423.cljs$core$IFn$_invoke$arity$1(G__40424) : fexpr__40423.call(null,G__40424));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40924,actual_type_41011,f_40979], null),canonical_f_41013], 0));

if(cljs.core.truth_(elem_40923.addEventListener)){
elem_40923.addEventListener(cljs.core.name(actual_type_41011),canonical_f_41013);
} else {
elem_40923.attachEvent(cljs.core.name(actual_type_41011),canonical_f_41013);
}


var G__41019 = cljs.core.next(seq__40304_41004__$1);
var G__41020 = null;
var G__41021 = (0);
var G__41022 = (0);
seq__40304_40982 = G__41019;
chunk__40306_40983 = G__41020;
count__40307_40984 = G__41021;
i__40308_40985 = G__41022;
continue;
}
} else {
}
}
break;
}

var G__41024 = cljs.core.next(seq__40303_40971__$1);
var G__41025 = null;
var G__41026 = (0);
var G__41027 = (0);
seq__40303_40925 = G__41024;
chunk__40310_40926 = G__41025;
count__40311_40927 = G__41026;
i__40312_40928 = G__41027;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40298){
var G__40299 = cljs.core.first(seq40298);
var seq40298__$1 = cljs.core.next(seq40298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40299,seq40298__$1);
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
var args__4742__auto__ = [];
var len__4736__auto___41029 = arguments.length;
var i__4737__auto___41032 = (0);
while(true){
if((i__4737__auto___41032 < len__4736__auto___41029)){
args__4742__auto__.push((arguments[i__4737__auto___41032]));

var G__41033 = (i__4737__auto___41032 + (1));
i__4737__auto___41032 = G__41033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40428_41036 = dommy.core.elem_and_selector(elem_sel);
var elem_41037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40428_41036,(0),null);
var selector_41038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40428_41036,(1),null);
var seq__40431_41040 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40438_41041 = null;
var count__40439_41042 = (0);
var i__40440_41043 = (0);
while(true){
if((i__40440_41043 < count__40439_41042)){
var vec__40510_41044 = chunk__40438_41041.cljs$core$IIndexed$_nth$arity$2(null,i__40440_41043);
var orig_type_41045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40510_41044,(0),null);
var f_41046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40510_41044,(1),null);
var seq__40441_41048 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41045,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41045,cljs.core.identity])));
var chunk__40443_41049 = null;
var count__40444_41050 = (0);
var i__40445_41051 = (0);
while(true){
if((i__40445_41051 < count__40444_41050)){
var vec__40540_41054 = chunk__40443_41049.cljs$core$IIndexed$_nth$arity$2(null,i__40445_41051);
var actual_type_41055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540_41054,(0),null);
var __41056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540_41054,(1),null);
var keys_41058 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41038,actual_type_41055,f_41046], null);
var canonical_f_41059 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41037),keys_41058);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41037,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41058], 0));

if(cljs.core.truth_(elem_41037.removeEventListener)){
elem_41037.removeEventListener(cljs.core.name(actual_type_41055),canonical_f_41059);
} else {
elem_41037.detachEvent(cljs.core.name(actual_type_41055),canonical_f_41059);
}


var G__41063 = seq__40441_41048;
var G__41064 = chunk__40443_41049;
var G__41065 = count__40444_41050;
var G__41066 = (i__40445_41051 + (1));
seq__40441_41048 = G__41063;
chunk__40443_41049 = G__41064;
count__40444_41050 = G__41065;
i__40445_41051 = G__41066;
continue;
} else {
var temp__5735__auto___41069 = cljs.core.seq(seq__40441_41048);
if(temp__5735__auto___41069){
var seq__40441_41070__$1 = temp__5735__auto___41069;
if(cljs.core.chunked_seq_QMARK_(seq__40441_41070__$1)){
var c__4556__auto___41071 = cljs.core.chunk_first(seq__40441_41070__$1);
var G__41072 = cljs.core.chunk_rest(seq__40441_41070__$1);
var G__41073 = c__4556__auto___41071;
var G__41074 = cljs.core.count(c__4556__auto___41071);
var G__41075 = (0);
seq__40441_41048 = G__41072;
chunk__40443_41049 = G__41073;
count__40444_41050 = G__41074;
i__40445_41051 = G__41075;
continue;
} else {
var vec__40546_41076 = cljs.core.first(seq__40441_41070__$1);
var actual_type_41077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546_41076,(0),null);
var __41078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546_41076,(1),null);
var keys_41082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41038,actual_type_41077,f_41046], null);
var canonical_f_41083 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41037),keys_41082);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41037,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41082], 0));

if(cljs.core.truth_(elem_41037.removeEventListener)){
elem_41037.removeEventListener(cljs.core.name(actual_type_41077),canonical_f_41083);
} else {
elem_41037.detachEvent(cljs.core.name(actual_type_41077),canonical_f_41083);
}


var G__41084 = cljs.core.next(seq__40441_41070__$1);
var G__41085 = null;
var G__41086 = (0);
var G__41087 = (0);
seq__40441_41048 = G__41084;
chunk__40443_41049 = G__41085;
count__40444_41050 = G__41086;
i__40445_41051 = G__41087;
continue;
}
} else {
}
}
break;
}

var G__41090 = seq__40431_41040;
var G__41091 = chunk__40438_41041;
var G__41092 = count__40439_41042;
var G__41093 = (i__40440_41043 + (1));
seq__40431_41040 = G__41090;
chunk__40438_41041 = G__41091;
count__40439_41042 = G__41092;
i__40440_41043 = G__41093;
continue;
} else {
var temp__5735__auto___41095 = cljs.core.seq(seq__40431_41040);
if(temp__5735__auto___41095){
var seq__40431_41096__$1 = temp__5735__auto___41095;
if(cljs.core.chunked_seq_QMARK_(seq__40431_41096__$1)){
var c__4556__auto___41097 = cljs.core.chunk_first(seq__40431_41096__$1);
var G__41098 = cljs.core.chunk_rest(seq__40431_41096__$1);
var G__41099 = c__4556__auto___41097;
var G__41100 = cljs.core.count(c__4556__auto___41097);
var G__41101 = (0);
seq__40431_41040 = G__41098;
chunk__40438_41041 = G__41099;
count__40439_41042 = G__41100;
i__40440_41043 = G__41101;
continue;
} else {
var vec__40549_41104 = cljs.core.first(seq__40431_41096__$1);
var orig_type_41105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40549_41104,(0),null);
var f_41106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40549_41104,(1),null);
var seq__40432_41108 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41105,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41105,cljs.core.identity])));
var chunk__40434_41109 = null;
var count__40435_41110 = (0);
var i__40436_41111 = (0);
while(true){
if((i__40436_41111 < count__40435_41110)){
var vec__40560_41112 = chunk__40434_41109.cljs$core$IIndexed$_nth$arity$2(null,i__40436_41111);
var actual_type_41113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40560_41112,(0),null);
var __41114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40560_41112,(1),null);
var keys_41116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41038,actual_type_41113,f_41106], null);
var canonical_f_41117 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41037),keys_41116);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41037,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41116], 0));

if(cljs.core.truth_(elem_41037.removeEventListener)){
elem_41037.removeEventListener(cljs.core.name(actual_type_41113),canonical_f_41117);
} else {
elem_41037.detachEvent(cljs.core.name(actual_type_41113),canonical_f_41117);
}


var G__41127 = seq__40432_41108;
var G__41128 = chunk__40434_41109;
var G__41129 = count__40435_41110;
var G__41130 = (i__40436_41111 + (1));
seq__40432_41108 = G__41127;
chunk__40434_41109 = G__41128;
count__40435_41110 = G__41129;
i__40436_41111 = G__41130;
continue;
} else {
var temp__5735__auto___41132__$1 = cljs.core.seq(seq__40432_41108);
if(temp__5735__auto___41132__$1){
var seq__40432_41134__$1 = temp__5735__auto___41132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40432_41134__$1)){
var c__4556__auto___41135 = cljs.core.chunk_first(seq__40432_41134__$1);
var G__41136 = cljs.core.chunk_rest(seq__40432_41134__$1);
var G__41137 = c__4556__auto___41135;
var G__41138 = cljs.core.count(c__4556__auto___41135);
var G__41139 = (0);
seq__40432_41108 = G__41136;
chunk__40434_41109 = G__41137;
count__40435_41110 = G__41138;
i__40436_41111 = G__41139;
continue;
} else {
var vec__40563_41140 = cljs.core.first(seq__40432_41134__$1);
var actual_type_41141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40563_41140,(0),null);
var __41142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40563_41140,(1),null);
var keys_41145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41038,actual_type_41141,f_41106], null);
var canonical_f_41146 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41037),keys_41145);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41037,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41145], 0));

if(cljs.core.truth_(elem_41037.removeEventListener)){
elem_41037.removeEventListener(cljs.core.name(actual_type_41141),canonical_f_41146);
} else {
elem_41037.detachEvent(cljs.core.name(actual_type_41141),canonical_f_41146);
}


var G__41148 = cljs.core.next(seq__40432_41134__$1);
var G__41149 = null;
var G__41150 = (0);
var G__41151 = (0);
seq__40432_41108 = G__41148;
chunk__40434_41109 = G__41149;
count__40435_41110 = G__41150;
i__40436_41111 = G__41151;
continue;
}
} else {
}
}
break;
}

var G__41152 = cljs.core.next(seq__40431_41096__$1);
var G__41153 = null;
var G__41154 = (0);
var G__41155 = (0);
seq__40431_41040 = G__41152;
chunk__40438_41041 = G__41153;
count__40439_41042 = G__41154;
i__40440_41043 = G__41155;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40425){
var G__40426 = cljs.core.first(seq40425);
var seq40425__$1 = cljs.core.next(seq40425);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40426,seq40425__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41159 = arguments.length;
var i__4737__auto___41160 = (0);
while(true){
if((i__4737__auto___41160 < len__4736__auto___41159)){
args__4742__auto__.push((arguments[i__4737__auto___41160]));

var G__41163 = (i__4737__auto___41160 + (1));
i__4737__auto___41160 = G__41163;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40568_41165 = dommy.core.elem_and_selector(elem_sel);
var elem_41167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40568_41165,(0),null);
var selector_41168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40568_41165,(1),null);
var seq__40571_41171 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40572_41172 = null;
var count__40573_41173 = (0);
var i__40574_41174 = (0);
while(true){
if((i__40574_41174 < count__40573_41173)){
var vec__40581_41175 = chunk__40572_41172.cljs$core$IIndexed$_nth$arity$2(null,i__40574_41174);
var type_41176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40581_41175,(0),null);
var f_41177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40581_41175,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41176,((function (seq__40571_41171,chunk__40572_41172,count__40573_41173,i__40574_41174,vec__40581_41175,type_41176,f_41177,vec__40568_41165,elem_41167,selector_41168){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41176,dommy$core$this_fn], 0));

return (f_41177.cljs$core$IFn$_invoke$arity$1 ? f_41177.cljs$core$IFn$_invoke$arity$1(e) : f_41177.call(null,e));
});})(seq__40571_41171,chunk__40572_41172,count__40573_41173,i__40574_41174,vec__40581_41175,type_41176,f_41177,vec__40568_41165,elem_41167,selector_41168))
], 0));


var G__41181 = seq__40571_41171;
var G__41182 = chunk__40572_41172;
var G__41183 = count__40573_41173;
var G__41184 = (i__40574_41174 + (1));
seq__40571_41171 = G__41181;
chunk__40572_41172 = G__41182;
count__40573_41173 = G__41183;
i__40574_41174 = G__41184;
continue;
} else {
var temp__5735__auto___41187 = cljs.core.seq(seq__40571_41171);
if(temp__5735__auto___41187){
var seq__40571_41189__$1 = temp__5735__auto___41187;
if(cljs.core.chunked_seq_QMARK_(seq__40571_41189__$1)){
var c__4556__auto___41190 = cljs.core.chunk_first(seq__40571_41189__$1);
var G__41191 = cljs.core.chunk_rest(seq__40571_41189__$1);
var G__41192 = c__4556__auto___41190;
var G__41193 = cljs.core.count(c__4556__auto___41190);
var G__41194 = (0);
seq__40571_41171 = G__41191;
chunk__40572_41172 = G__41192;
count__40573_41173 = G__41193;
i__40574_41174 = G__41194;
continue;
} else {
var vec__40584_41195 = cljs.core.first(seq__40571_41189__$1);
var type_41196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584_41195,(0),null);
var f_41197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584_41195,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41196,((function (seq__40571_41171,chunk__40572_41172,count__40573_41173,i__40574_41174,vec__40584_41195,type_41196,f_41197,seq__40571_41189__$1,temp__5735__auto___41187,vec__40568_41165,elem_41167,selector_41168){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41196,dommy$core$this_fn], 0));

return (f_41197.cljs$core$IFn$_invoke$arity$1 ? f_41197.cljs$core$IFn$_invoke$arity$1(e) : f_41197.call(null,e));
});})(seq__40571_41171,chunk__40572_41172,count__40573_41173,i__40574_41174,vec__40584_41195,type_41196,f_41197,seq__40571_41189__$1,temp__5735__auto___41187,vec__40568_41165,elem_41167,selector_41168))
], 0));


var G__41200 = cljs.core.next(seq__40571_41189__$1);
var G__41201 = null;
var G__41202 = (0);
var G__41203 = (0);
seq__40571_41171 = G__41200;
chunk__40572_41172 = G__41201;
count__40573_41173 = G__41202;
i__40574_41174 = G__41203;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40566){
var G__40567 = cljs.core.first(seq40566);
var seq40566__$1 = cljs.core.next(seq40566);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40567,seq40566__$1);
}));


//# sourceMappingURL=dommy.core.js.map
