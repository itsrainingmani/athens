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
var len__4736__auto___40590 = arguments.length;
var i__4737__auto___40591 = (0);
while(true){
if((i__4737__auto___40591 < len__4736__auto___40590)){
args__4742__auto__.push((arguments[i__4737__auto___40591]));

var G__40592 = (i__4737__auto___40591 + (1));
i__4737__auto___40591 = G__40592;
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
var seq__40146_40593 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40147_40594 = null;
var count__40148_40595 = (0);
var i__40149_40596 = (0);
while(true){
if((i__40149_40596 < count__40148_40595)){
var vec__40158_40597 = chunk__40147_40594.cljs$core$IIndexed$_nth$arity$2(null,i__40149_40596);
var k_40598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158_40597,(0),null);
var v_40599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158_40597,(1),null);
style.setProperty(dommy.utils.as_str(k_40598),v_40599);


var G__40600 = seq__40146_40593;
var G__40601 = chunk__40147_40594;
var G__40602 = count__40148_40595;
var G__40603 = (i__40149_40596 + (1));
seq__40146_40593 = G__40600;
chunk__40147_40594 = G__40601;
count__40148_40595 = G__40602;
i__40149_40596 = G__40603;
continue;
} else {
var temp__5735__auto___40604 = cljs.core.seq(seq__40146_40593);
if(temp__5735__auto___40604){
var seq__40146_40606__$1 = temp__5735__auto___40604;
if(cljs.core.chunked_seq_QMARK_(seq__40146_40606__$1)){
var c__4556__auto___40607 = cljs.core.chunk_first(seq__40146_40606__$1);
var G__40608 = cljs.core.chunk_rest(seq__40146_40606__$1);
var G__40609 = c__4556__auto___40607;
var G__40610 = cljs.core.count(c__4556__auto___40607);
var G__40611 = (0);
seq__40146_40593 = G__40608;
chunk__40147_40594 = G__40609;
count__40148_40595 = G__40610;
i__40149_40596 = G__40611;
continue;
} else {
var vec__40162_40613 = cljs.core.first(seq__40146_40606__$1);
var k_40614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162_40613,(0),null);
var v_40615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162_40613,(1),null);
style.setProperty(dommy.utils.as_str(k_40614),v_40615);


var G__40616 = cljs.core.next(seq__40146_40606__$1);
var G__40617 = null;
var G__40618 = (0);
var G__40619 = (0);
seq__40146_40593 = G__40616;
chunk__40147_40594 = G__40617;
count__40148_40595 = G__40618;
i__40149_40596 = G__40619;
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
var len__4736__auto___40620 = arguments.length;
var i__4737__auto___40621 = (0);
while(true){
if((i__4737__auto___40621 < len__4736__auto___40620)){
args__4742__auto__.push((arguments[i__4737__auto___40621]));

var G__40622 = (i__4737__auto___40621 + (1));
i__4737__auto___40621 = G__40622;
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
var seq__40170_40623 = cljs.core.seq(keywords);
var chunk__40171_40624 = null;
var count__40172_40625 = (0);
var i__40173_40626 = (0);
while(true){
if((i__40173_40626 < count__40172_40625)){
var kw_40627 = chunk__40171_40624.cljs$core$IIndexed$_nth$arity$2(null,i__40173_40626);
style.removeProperty(dommy.utils.as_str(kw_40627));


var G__40628 = seq__40170_40623;
var G__40629 = chunk__40171_40624;
var G__40630 = count__40172_40625;
var G__40631 = (i__40173_40626 + (1));
seq__40170_40623 = G__40628;
chunk__40171_40624 = G__40629;
count__40172_40625 = G__40630;
i__40173_40626 = G__40631;
continue;
} else {
var temp__5735__auto___40632 = cljs.core.seq(seq__40170_40623);
if(temp__5735__auto___40632){
var seq__40170_40633__$1 = temp__5735__auto___40632;
if(cljs.core.chunked_seq_QMARK_(seq__40170_40633__$1)){
var c__4556__auto___40634 = cljs.core.chunk_first(seq__40170_40633__$1);
var G__40635 = cljs.core.chunk_rest(seq__40170_40633__$1);
var G__40636 = c__4556__auto___40634;
var G__40637 = cljs.core.count(c__4556__auto___40634);
var G__40638 = (0);
seq__40170_40623 = G__40635;
chunk__40171_40624 = G__40636;
count__40172_40625 = G__40637;
i__40173_40626 = G__40638;
continue;
} else {
var kw_40639 = cljs.core.first(seq__40170_40633__$1);
style.removeProperty(dommy.utils.as_str(kw_40639));


var G__40640 = cljs.core.next(seq__40170_40633__$1);
var G__40641 = null;
var G__40642 = (0);
var G__40643 = (0);
seq__40170_40623 = G__40640;
chunk__40171_40624 = G__40641;
count__40172_40625 = G__40642;
i__40173_40626 = G__40643;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40166){
var G__40167 = cljs.core.first(seq40166);
var seq40166__$1 = cljs.core.next(seq40166);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40167,seq40166__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40646 = arguments.length;
var i__4737__auto___40647 = (0);
while(true){
if((i__4737__auto___40647 < len__4736__auto___40646)){
args__4742__auto__.push((arguments[i__4737__auto___40647]));

var G__40648 = (i__4737__auto___40647 + (1));
i__4737__auto___40647 = G__40648;
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

var seq__40178_40649 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40179_40650 = null;
var count__40180_40651 = (0);
var i__40181_40652 = (0);
while(true){
if((i__40181_40652 < count__40180_40651)){
var vec__40188_40653 = chunk__40179_40650.cljs$core$IIndexed$_nth$arity$2(null,i__40181_40652);
var k_40654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40653,(0),null);
var v_40655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40653,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40654,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40655),"px"].join('')], 0));


var G__40656 = seq__40178_40649;
var G__40657 = chunk__40179_40650;
var G__40658 = count__40180_40651;
var G__40659 = (i__40181_40652 + (1));
seq__40178_40649 = G__40656;
chunk__40179_40650 = G__40657;
count__40180_40651 = G__40658;
i__40181_40652 = G__40659;
continue;
} else {
var temp__5735__auto___40661 = cljs.core.seq(seq__40178_40649);
if(temp__5735__auto___40661){
var seq__40178_40662__$1 = temp__5735__auto___40661;
if(cljs.core.chunked_seq_QMARK_(seq__40178_40662__$1)){
var c__4556__auto___40664 = cljs.core.chunk_first(seq__40178_40662__$1);
var G__40665 = cljs.core.chunk_rest(seq__40178_40662__$1);
var G__40666 = c__4556__auto___40664;
var G__40667 = cljs.core.count(c__4556__auto___40664);
var G__40668 = (0);
seq__40178_40649 = G__40665;
chunk__40179_40650 = G__40666;
count__40180_40651 = G__40667;
i__40181_40652 = G__40668;
continue;
} else {
var vec__40191_40669 = cljs.core.first(seq__40178_40662__$1);
var k_40670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40669,(0),null);
var v_40671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40669,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40670,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40671),"px"].join('')], 0));


var G__40672 = cljs.core.next(seq__40178_40662__$1);
var G__40673 = null;
var G__40674 = (0);
var G__40675 = (0);
seq__40178_40649 = G__40672;
chunk__40179_40650 = G__40673;
count__40180_40651 = G__40674;
i__40181_40652 = G__40675;
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
var seq__40224_40710 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40225_40711 = null;
var count__40226_40712 = (0);
var i__40227_40713 = (0);
while(true){
if((i__40227_40713 < count__40226_40712)){
var k_40714__$1 = chunk__40225_40711.cljs$core$IIndexed$_nth$arity$2(null,i__40227_40713);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40714__$1);


var G__40715 = seq__40224_40710;
var G__40716 = chunk__40225_40711;
var G__40717 = count__40226_40712;
var G__40718 = (i__40227_40713 + (1));
seq__40224_40710 = G__40715;
chunk__40225_40711 = G__40716;
count__40226_40712 = G__40717;
i__40227_40713 = G__40718;
continue;
} else {
var temp__5735__auto___40719 = cljs.core.seq(seq__40224_40710);
if(temp__5735__auto___40719){
var seq__40224_40720__$1 = temp__5735__auto___40719;
if(cljs.core.chunked_seq_QMARK_(seq__40224_40720__$1)){
var c__4556__auto___40721 = cljs.core.chunk_first(seq__40224_40720__$1);
var G__40722 = cljs.core.chunk_rest(seq__40224_40720__$1);
var G__40723 = c__4556__auto___40721;
var G__40724 = cljs.core.count(c__4556__auto___40721);
var G__40725 = (0);
seq__40224_40710 = G__40722;
chunk__40225_40711 = G__40723;
count__40226_40712 = G__40724;
i__40227_40713 = G__40725;
continue;
} else {
var k_40726__$1 = cljs.core.first(seq__40224_40720__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40726__$1);


var G__40727 = cljs.core.next(seq__40224_40720__$1);
var G__40728 = null;
var G__40729 = (0);
var G__40730 = (0);
seq__40224_40710 = G__40727;
chunk__40225_40711 = G__40728;
count__40226_40712 = G__40729;
i__40227_40713 = G__40730;
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
var len__4736__auto___40733 = arguments.length;
var i__4737__auto___40734 = (0);
while(true){
if((i__4737__auto___40734 < len__4736__auto___40733)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40734]));

var G__40735 = (i__4737__auto___40734 + (1));
i__4737__auto___40734 = G__40735;
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
var temp__5733__auto___40736 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40736)){
var class_list_40737 = temp__5733__auto___40736;
var seq__40235_40738 = cljs.core.seq(classes__$1);
var chunk__40236_40739 = null;
var count__40237_40740 = (0);
var i__40238_40741 = (0);
while(true){
if((i__40238_40741 < count__40237_40740)){
var c_40742 = chunk__40236_40739.cljs$core$IIndexed$_nth$arity$2(null,i__40238_40741);
class_list_40737.add(c_40742);


var G__40743 = seq__40235_40738;
var G__40744 = chunk__40236_40739;
var G__40745 = count__40237_40740;
var G__40746 = (i__40238_40741 + (1));
seq__40235_40738 = G__40743;
chunk__40236_40739 = G__40744;
count__40237_40740 = G__40745;
i__40238_40741 = G__40746;
continue;
} else {
var temp__5735__auto___40747 = cljs.core.seq(seq__40235_40738);
if(temp__5735__auto___40747){
var seq__40235_40748__$1 = temp__5735__auto___40747;
if(cljs.core.chunked_seq_QMARK_(seq__40235_40748__$1)){
var c__4556__auto___40749 = cljs.core.chunk_first(seq__40235_40748__$1);
var G__40750 = cljs.core.chunk_rest(seq__40235_40748__$1);
var G__40751 = c__4556__auto___40749;
var G__40752 = cljs.core.count(c__4556__auto___40749);
var G__40753 = (0);
seq__40235_40738 = G__40750;
chunk__40236_40739 = G__40751;
count__40237_40740 = G__40752;
i__40238_40741 = G__40753;
continue;
} else {
var c_40754 = cljs.core.first(seq__40235_40748__$1);
class_list_40737.add(c_40754);


var G__40755 = cljs.core.next(seq__40235_40748__$1);
var G__40756 = null;
var G__40757 = (0);
var G__40758 = (0);
seq__40235_40738 = G__40755;
chunk__40236_40739 = G__40756;
count__40237_40740 = G__40757;
i__40238_40741 = G__40758;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40239_40759 = cljs.core.seq(classes__$1);
var chunk__40240_40760 = null;
var count__40241_40761 = (0);
var i__40242_40762 = (0);
while(true){
if((i__40242_40762 < count__40241_40761)){
var c_40763 = chunk__40240_40760.cljs$core$IIndexed$_nth$arity$2(null,i__40242_40762);
var class_name_40764 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40764,c_40763))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40764 === ""))?c_40763:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40764)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40763)].join('')));
}


var G__40765 = seq__40239_40759;
var G__40766 = chunk__40240_40760;
var G__40767 = count__40241_40761;
var G__40768 = (i__40242_40762 + (1));
seq__40239_40759 = G__40765;
chunk__40240_40760 = G__40766;
count__40241_40761 = G__40767;
i__40242_40762 = G__40768;
continue;
} else {
var temp__5735__auto___40769 = cljs.core.seq(seq__40239_40759);
if(temp__5735__auto___40769){
var seq__40239_40770__$1 = temp__5735__auto___40769;
if(cljs.core.chunked_seq_QMARK_(seq__40239_40770__$1)){
var c__4556__auto___40771 = cljs.core.chunk_first(seq__40239_40770__$1);
var G__40772 = cljs.core.chunk_rest(seq__40239_40770__$1);
var G__40773 = c__4556__auto___40771;
var G__40774 = cljs.core.count(c__4556__auto___40771);
var G__40775 = (0);
seq__40239_40759 = G__40772;
chunk__40240_40760 = G__40773;
count__40241_40761 = G__40774;
i__40242_40762 = G__40775;
continue;
} else {
var c_40776 = cljs.core.first(seq__40239_40770__$1);
var class_name_40777 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40777,c_40776))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40777 === ""))?c_40776:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40777)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40776)].join('')));
}


var G__40778 = cljs.core.next(seq__40239_40770__$1);
var G__40779 = null;
var G__40780 = (0);
var G__40781 = (0);
seq__40239_40759 = G__40778;
chunk__40240_40760 = G__40779;
count__40241_40761 = G__40780;
i__40242_40762 = G__40781;
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
var seq__40243_40783 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40244_40784 = null;
var count__40245_40785 = (0);
var i__40246_40786 = (0);
while(true){
if((i__40246_40786 < count__40245_40785)){
var c_40787 = chunk__40244_40784.cljs$core$IIndexed$_nth$arity$2(null,i__40246_40786);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40787);


var G__40788 = seq__40243_40783;
var G__40789 = chunk__40244_40784;
var G__40790 = count__40245_40785;
var G__40791 = (i__40246_40786 + (1));
seq__40243_40783 = G__40788;
chunk__40244_40784 = G__40789;
count__40245_40785 = G__40790;
i__40246_40786 = G__40791;
continue;
} else {
var temp__5735__auto___40793 = cljs.core.seq(seq__40243_40783);
if(temp__5735__auto___40793){
var seq__40243_40794__$1 = temp__5735__auto___40793;
if(cljs.core.chunked_seq_QMARK_(seq__40243_40794__$1)){
var c__4556__auto___40795 = cljs.core.chunk_first(seq__40243_40794__$1);
var G__40796 = cljs.core.chunk_rest(seq__40243_40794__$1);
var G__40797 = c__4556__auto___40795;
var G__40798 = cljs.core.count(c__4556__auto___40795);
var G__40799 = (0);
seq__40243_40783 = G__40796;
chunk__40244_40784 = G__40797;
count__40245_40785 = G__40798;
i__40246_40786 = G__40799;
continue;
} else {
var c_40800 = cljs.core.first(seq__40243_40794__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40800);


var G__40801 = cljs.core.next(seq__40243_40794__$1);
var G__40802 = null;
var G__40803 = (0);
var G__40804 = (0);
seq__40243_40783 = G__40801;
chunk__40244_40784 = G__40802;
count__40245_40785 = G__40803;
i__40246_40786 = G__40804;
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
var len__4736__auto___40807 = arguments.length;
var i__4737__auto___40808 = (0);
while(true){
if((i__4737__auto___40808 < len__4736__auto___40807)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40808]));

var G__40809 = (i__4737__auto___40808 + (1));
i__4737__auto___40808 = G__40809;
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
var temp__5733__auto___40812 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40812)){
var class_list_40813 = temp__5733__auto___40812;
class_list_40813.remove(c__$1);
} else {
var class_name_40814 = dommy.core.class$(elem);
var new_class_name_40815 = dommy.utils.remove_class_str(class_name_40814,c__$1);
if((class_name_40814 === new_class_name_40815)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40815);
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


var G__40817 = seq__40252;
var G__40818 = chunk__40253;
var G__40819 = count__40254;
var G__40820 = (i__40255 + (1));
seq__40252 = G__40817;
chunk__40253 = G__40818;
count__40254 = G__40819;
i__40255 = G__40820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40252);
if(temp__5735__auto__){
var seq__40252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40252__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40252__$1);
var G__40822 = cljs.core.chunk_rest(seq__40252__$1);
var G__40823 = c__4556__auto__;
var G__40824 = cljs.core.count(c__4556__auto__);
var G__40825 = (0);
seq__40252 = G__40822;
chunk__40253 = G__40823;
count__40254 = G__40824;
i__40255 = G__40825;
continue;
} else {
var c = cljs.core.first(seq__40252__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40830 = cljs.core.next(seq__40252__$1);
var G__40831 = null;
var G__40832 = (0);
var G__40833 = (0);
seq__40252 = G__40830;
chunk__40253 = G__40831;
count__40254 = G__40832;
i__40255 = G__40833;
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
var G__40258 = arguments.length;
switch (G__40258) {
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
var temp__5733__auto___40838 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40838)){
var class_list_40839 = temp__5733__auto___40838;
class_list_40839.toggle(c__$1);
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
var len__4736__auto___40856 = arguments.length;
var i__4737__auto___40857 = (0);
while(true){
if((i__4737__auto___40857 < len__4736__auto___40856)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40857]));

var G__40860 = (i__4737__auto___40857 + (1));
i__4737__auto___40857 = G__40860;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40292){
var G__40293 = cljs.core.first(seq40292);
var seq40292__$1 = cljs.core.next(seq40292);
var G__40294 = cljs.core.first(seq40292__$1);
var seq40292__$2 = cljs.core.next(seq40292__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40293,G__40294,seq40292__$2);
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
var len__4736__auto___40913 = arguments.length;
var i__4737__auto___40914 = (0);
while(true){
if((i__4737__auto___40914 < len__4736__auto___40913)){
args__4742__auto__.push((arguments[i__4737__auto___40914]));

var G__40915 = (i__4737__auto___40914 + (1));
i__4737__auto___40914 = G__40915;
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

var vec__40300_40916 = dommy.core.elem_and_selector(elem_sel);
var elem_40917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40300_40916,(0),null);
var selector_40918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40300_40916,(1),null);
var seq__40303_40919 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40310_40920 = null;
var count__40311_40921 = (0);
var i__40312_40922 = (0);
while(true){
if((i__40312_40922 < count__40311_40921)){
var vec__40368_40923 = chunk__40310_40920.cljs$core$IIndexed$_nth$arity$2(null,i__40312_40922);
var orig_type_40924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40923,(0),null);
var f_40925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40923,(1),null);
var seq__40313_40926 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40924,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40924,cljs.core.identity])));
var chunk__40315_40927 = null;
var count__40316_40928 = (0);
var i__40317_40929 = (0);
while(true){
if((i__40317_40929 < count__40316_40928)){
var vec__40381_40930 = chunk__40315_40927.cljs$core$IIndexed$_nth$arity$2(null,i__40317_40929);
var actual_type_40931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40930,(0),null);
var factory_40932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40930,(1),null);
var canonical_f_40933 = (function (){var G__40389 = (factory_40932.cljs$core$IFn$_invoke$arity$1 ? factory_40932.cljs$core$IFn$_invoke$arity$1(f_40925) : factory_40932.call(null,f_40925));
var fexpr__40388 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40388.cljs$core$IFn$_invoke$arity$1 ? fexpr__40388.cljs$core$IFn$_invoke$arity$1(G__40389) : fexpr__40388.call(null,G__40389));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40931,f_40925], null),canonical_f_40933], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40931),canonical_f_40933);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40931),canonical_f_40933);
}


var G__40934 = seq__40313_40926;
var G__40935 = chunk__40315_40927;
var G__40936 = count__40316_40928;
var G__40937 = (i__40317_40929 + (1));
seq__40313_40926 = G__40934;
chunk__40315_40927 = G__40935;
count__40316_40928 = G__40936;
i__40317_40929 = G__40937;
continue;
} else {
var temp__5735__auto___40938 = cljs.core.seq(seq__40313_40926);
if(temp__5735__auto___40938){
var seq__40313_40939__$1 = temp__5735__auto___40938;
if(cljs.core.chunked_seq_QMARK_(seq__40313_40939__$1)){
var c__4556__auto___40940 = cljs.core.chunk_first(seq__40313_40939__$1);
var G__40941 = cljs.core.chunk_rest(seq__40313_40939__$1);
var G__40942 = c__4556__auto___40940;
var G__40943 = cljs.core.count(c__4556__auto___40940);
var G__40944 = (0);
seq__40313_40926 = G__40941;
chunk__40315_40927 = G__40942;
count__40316_40928 = G__40943;
i__40317_40929 = G__40944;
continue;
} else {
var vec__40390_40945 = cljs.core.first(seq__40313_40939__$1);
var actual_type_40946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40390_40945,(0),null);
var factory_40947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40390_40945,(1),null);
var canonical_f_40948 = (function (){var G__40394 = (factory_40947.cljs$core$IFn$_invoke$arity$1 ? factory_40947.cljs$core$IFn$_invoke$arity$1(f_40925) : factory_40947.call(null,f_40925));
var fexpr__40393 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40393.cljs$core$IFn$_invoke$arity$1 ? fexpr__40393.cljs$core$IFn$_invoke$arity$1(G__40394) : fexpr__40393.call(null,G__40394));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40946,f_40925], null),canonical_f_40948], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40946),canonical_f_40948);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40946),canonical_f_40948);
}


var G__40949 = cljs.core.next(seq__40313_40939__$1);
var G__40950 = null;
var G__40951 = (0);
var G__40952 = (0);
seq__40313_40926 = G__40949;
chunk__40315_40927 = G__40950;
count__40316_40928 = G__40951;
i__40317_40929 = G__40952;
continue;
}
} else {
}
}
break;
}

var G__40953 = seq__40303_40919;
var G__40954 = chunk__40310_40920;
var G__40955 = count__40311_40921;
var G__40956 = (i__40312_40922 + (1));
seq__40303_40919 = G__40953;
chunk__40310_40920 = G__40954;
count__40311_40921 = G__40955;
i__40312_40922 = G__40956;
continue;
} else {
var temp__5735__auto___40957 = cljs.core.seq(seq__40303_40919);
if(temp__5735__auto___40957){
var seq__40303_40958__$1 = temp__5735__auto___40957;
if(cljs.core.chunked_seq_QMARK_(seq__40303_40958__$1)){
var c__4556__auto___40959 = cljs.core.chunk_first(seq__40303_40958__$1);
var G__40960 = cljs.core.chunk_rest(seq__40303_40958__$1);
var G__40961 = c__4556__auto___40959;
var G__40962 = cljs.core.count(c__4556__auto___40959);
var G__40963 = (0);
seq__40303_40919 = G__40960;
chunk__40310_40920 = G__40961;
count__40311_40921 = G__40962;
i__40312_40922 = G__40963;
continue;
} else {
var vec__40395_40964 = cljs.core.first(seq__40303_40958__$1);
var orig_type_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40964,(0),null);
var f_40966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40964,(1),null);
var seq__40304_40967 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40965,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40965,cljs.core.identity])));
var chunk__40306_40968 = null;
var count__40307_40969 = (0);
var i__40308_40970 = (0);
while(true){
if((i__40308_40970 < count__40307_40969)){
var vec__40411_40971 = chunk__40306_40968.cljs$core$IIndexed$_nth$arity$2(null,i__40308_40970);
var actual_type_40972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411_40971,(0),null);
var factory_40973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411_40971,(1),null);
var canonical_f_40974 = (function (){var G__40419 = (factory_40973.cljs$core$IFn$_invoke$arity$1 ? factory_40973.cljs$core$IFn$_invoke$arity$1(f_40966) : factory_40973.call(null,f_40966));
var fexpr__40418 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40418.cljs$core$IFn$_invoke$arity$1 ? fexpr__40418.cljs$core$IFn$_invoke$arity$1(G__40419) : fexpr__40418.call(null,G__40419));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40972,f_40966], null),canonical_f_40974], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40972),canonical_f_40974);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40972),canonical_f_40974);
}


var G__40975 = seq__40304_40967;
var G__40976 = chunk__40306_40968;
var G__40977 = count__40307_40969;
var G__40978 = (i__40308_40970 + (1));
seq__40304_40967 = G__40975;
chunk__40306_40968 = G__40976;
count__40307_40969 = G__40977;
i__40308_40970 = G__40978;
continue;
} else {
var temp__5735__auto___40979__$1 = cljs.core.seq(seq__40304_40967);
if(temp__5735__auto___40979__$1){
var seq__40304_40980__$1 = temp__5735__auto___40979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40304_40980__$1)){
var c__4556__auto___40981 = cljs.core.chunk_first(seq__40304_40980__$1);
var G__40982 = cljs.core.chunk_rest(seq__40304_40980__$1);
var G__40983 = c__4556__auto___40981;
var G__40984 = cljs.core.count(c__4556__auto___40981);
var G__40985 = (0);
seq__40304_40967 = G__40982;
chunk__40306_40968 = G__40983;
count__40307_40969 = G__40984;
i__40308_40970 = G__40985;
continue;
} else {
var vec__40420_40986 = cljs.core.first(seq__40304_40980__$1);
var actual_type_40987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40420_40986,(0),null);
var factory_40988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40420_40986,(1),null);
var canonical_f_40991 = (function (){var G__40424 = (factory_40988.cljs$core$IFn$_invoke$arity$1 ? factory_40988.cljs$core$IFn$_invoke$arity$1(f_40966) : factory_40988.call(null,f_40966));
var fexpr__40423 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40423.cljs$core$IFn$_invoke$arity$1 ? fexpr__40423.cljs$core$IFn$_invoke$arity$1(G__40424) : fexpr__40423.call(null,G__40424));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40987,f_40966], null),canonical_f_40991], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40987),canonical_f_40991);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40987),canonical_f_40991);
}


var G__40995 = cljs.core.next(seq__40304_40980__$1);
var G__40996 = null;
var G__40997 = (0);
var G__40998 = (0);
seq__40304_40967 = G__40995;
chunk__40306_40968 = G__40996;
count__40307_40969 = G__40997;
i__40308_40970 = G__40998;
continue;
}
} else {
}
}
break;
}

var G__41000 = cljs.core.next(seq__40303_40958__$1);
var G__41001 = null;
var G__41002 = (0);
var G__41003 = (0);
seq__40303_40919 = G__41000;
chunk__40310_40920 = G__41001;
count__40311_40921 = G__41002;
i__40312_40922 = G__41003;
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
var len__4736__auto___41004 = arguments.length;
var i__4737__auto___41005 = (0);
while(true){
if((i__4737__auto___41005 < len__4736__auto___41004)){
args__4742__auto__.push((arguments[i__4737__auto___41005]));

var G__41006 = (i__4737__auto___41005 + (1));
i__4737__auto___41005 = G__41006;
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

var vec__40427_41007 = dommy.core.elem_and_selector(elem_sel);
var elem_41008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427_41007,(0),null);
var selector_41009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427_41007,(1),null);
var seq__40430_41012 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40437_41013 = null;
var count__40438_41014 = (0);
var i__40439_41015 = (0);
while(true){
if((i__40439_41015 < count__40438_41014)){
var vec__40486_41018 = chunk__40437_41013.cljs$core$IIndexed$_nth$arity$2(null,i__40439_41015);
var orig_type_41019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_41018,(0),null);
var f_41020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_41018,(1),null);
var seq__40440_41021 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41019,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41019,cljs.core.identity])));
var chunk__40442_41022 = null;
var count__40443_41023 = (0);
var i__40444_41024 = (0);
while(true){
if((i__40444_41024 < count__40443_41023)){
var vec__40518_41025 = chunk__40442_41022.cljs$core$IIndexed$_nth$arity$2(null,i__40444_41024);
var actual_type_41026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518_41025,(0),null);
var __41027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518_41025,(1),null);
var keys_41031 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41009,actual_type_41026,f_41020], null);
var canonical_f_41032 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41008),keys_41031);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41008,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41031], 0));

if(cljs.core.truth_(elem_41008.removeEventListener)){
elem_41008.removeEventListener(cljs.core.name(actual_type_41026),canonical_f_41032);
} else {
elem_41008.detachEvent(cljs.core.name(actual_type_41026),canonical_f_41032);
}


var G__41033 = seq__40440_41021;
var G__41034 = chunk__40442_41022;
var G__41035 = count__40443_41023;
var G__41036 = (i__40444_41024 + (1));
seq__40440_41021 = G__41033;
chunk__40442_41022 = G__41034;
count__40443_41023 = G__41035;
i__40444_41024 = G__41036;
continue;
} else {
var temp__5735__auto___41037 = cljs.core.seq(seq__40440_41021);
if(temp__5735__auto___41037){
var seq__40440_41038__$1 = temp__5735__auto___41037;
if(cljs.core.chunked_seq_QMARK_(seq__40440_41038__$1)){
var c__4556__auto___41039 = cljs.core.chunk_first(seq__40440_41038__$1);
var G__41040 = cljs.core.chunk_rest(seq__40440_41038__$1);
var G__41041 = c__4556__auto___41039;
var G__41042 = cljs.core.count(c__4556__auto___41039);
var G__41043 = (0);
seq__40440_41021 = G__41040;
chunk__40442_41022 = G__41041;
count__40443_41023 = G__41042;
i__40444_41024 = G__41043;
continue;
} else {
var vec__40521_41045 = cljs.core.first(seq__40440_41038__$1);
var actual_type_41046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40521_41045,(0),null);
var __41047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40521_41045,(1),null);
var keys_41053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41009,actual_type_41046,f_41020], null);
var canonical_f_41054 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41008),keys_41053);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41008,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41053], 0));

if(cljs.core.truth_(elem_41008.removeEventListener)){
elem_41008.removeEventListener(cljs.core.name(actual_type_41046),canonical_f_41054);
} else {
elem_41008.detachEvent(cljs.core.name(actual_type_41046),canonical_f_41054);
}


var G__41056 = cljs.core.next(seq__40440_41038__$1);
var G__41057 = null;
var G__41058 = (0);
var G__41059 = (0);
seq__40440_41021 = G__41056;
chunk__40442_41022 = G__41057;
count__40443_41023 = G__41058;
i__40444_41024 = G__41059;
continue;
}
} else {
}
}
break;
}

var G__41060 = seq__40430_41012;
var G__41061 = chunk__40437_41013;
var G__41062 = count__40438_41014;
var G__41063 = (i__40439_41015 + (1));
seq__40430_41012 = G__41060;
chunk__40437_41013 = G__41061;
count__40438_41014 = G__41062;
i__40439_41015 = G__41063;
continue;
} else {
var temp__5735__auto___41066 = cljs.core.seq(seq__40430_41012);
if(temp__5735__auto___41066){
var seq__40430_41067__$1 = temp__5735__auto___41066;
if(cljs.core.chunked_seq_QMARK_(seq__40430_41067__$1)){
var c__4556__auto___41070 = cljs.core.chunk_first(seq__40430_41067__$1);
var G__41071 = cljs.core.chunk_rest(seq__40430_41067__$1);
var G__41072 = c__4556__auto___41070;
var G__41073 = cljs.core.count(c__4556__auto___41070);
var G__41074 = (0);
seq__40430_41012 = G__41071;
chunk__40437_41013 = G__41072;
count__40438_41014 = G__41073;
i__40439_41015 = G__41074;
continue;
} else {
var vec__40534_41075 = cljs.core.first(seq__40430_41067__$1);
var orig_type_41076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41075,(0),null);
var f_41077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41075,(1),null);
var seq__40431_41078 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41076,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41076,cljs.core.identity])));
var chunk__40433_41079 = null;
var count__40434_41080 = (0);
var i__40435_41081 = (0);
while(true){
if((i__40435_41081 < count__40434_41080)){
var vec__40555_41084 = chunk__40433_41079.cljs$core$IIndexed$_nth$arity$2(null,i__40435_41081);
var actual_type_41086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555_41084,(0),null);
var __41089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555_41084,(1),null);
var keys_41091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41009,actual_type_41086,f_41077], null);
var canonical_f_41092 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41008),keys_41091);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41008,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41091], 0));

if(cljs.core.truth_(elem_41008.removeEventListener)){
elem_41008.removeEventListener(cljs.core.name(actual_type_41086),canonical_f_41092);
} else {
elem_41008.detachEvent(cljs.core.name(actual_type_41086),canonical_f_41092);
}


var G__41094 = seq__40431_41078;
var G__41095 = chunk__40433_41079;
var G__41096 = count__40434_41080;
var G__41097 = (i__40435_41081 + (1));
seq__40431_41078 = G__41094;
chunk__40433_41079 = G__41095;
count__40434_41080 = G__41096;
i__40435_41081 = G__41097;
continue;
} else {
var temp__5735__auto___41100__$1 = cljs.core.seq(seq__40431_41078);
if(temp__5735__auto___41100__$1){
var seq__40431_41101__$1 = temp__5735__auto___41100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40431_41101__$1)){
var c__4556__auto___41104 = cljs.core.chunk_first(seq__40431_41101__$1);
var G__41105 = cljs.core.chunk_rest(seq__40431_41101__$1);
var G__41106 = c__4556__auto___41104;
var G__41107 = cljs.core.count(c__4556__auto___41104);
var G__41108 = (0);
seq__40431_41078 = G__41105;
chunk__40433_41079 = G__41106;
count__40434_41080 = G__41107;
i__40435_41081 = G__41108;
continue;
} else {
var vec__40561_41109 = cljs.core.first(seq__40431_41101__$1);
var actual_type_41110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40561_41109,(0),null);
var __41111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40561_41109,(1),null);
var keys_41113 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41009,actual_type_41110,f_41077], null);
var canonical_f_41114 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41008),keys_41113);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41008,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41113], 0));

if(cljs.core.truth_(elem_41008.removeEventListener)){
elem_41008.removeEventListener(cljs.core.name(actual_type_41110),canonical_f_41114);
} else {
elem_41008.detachEvent(cljs.core.name(actual_type_41110),canonical_f_41114);
}


var G__41117 = cljs.core.next(seq__40431_41101__$1);
var G__41118 = null;
var G__41119 = (0);
var G__41120 = (0);
seq__40431_41078 = G__41117;
chunk__40433_41079 = G__41118;
count__40434_41080 = G__41119;
i__40435_41081 = G__41120;
continue;
}
} else {
}
}
break;
}

var G__41123 = cljs.core.next(seq__40430_41067__$1);
var G__41124 = null;
var G__41125 = (0);
var G__41126 = (0);
seq__40430_41012 = G__41123;
chunk__40437_41013 = G__41124;
count__40438_41014 = G__41125;
i__40439_41015 = G__41126;
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
var len__4736__auto___41132 = arguments.length;
var i__4737__auto___41133 = (0);
while(true){
if((i__4737__auto___41133 < len__4736__auto___41132)){
args__4742__auto__.push((arguments[i__4737__auto___41133]));

var G__41134 = (i__4737__auto___41133 + (1));
i__4737__auto___41133 = G__41134;
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

var vec__40568_41138 = dommy.core.elem_and_selector(elem_sel);
var elem_41139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40568_41138,(0),null);
var selector_41140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40568_41138,(1),null);
var seq__40571_41144 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40572_41145 = null;
var count__40573_41146 = (0);
var i__40574_41147 = (0);
while(true){
if((i__40574_41147 < count__40573_41146)){
var vec__40581_41148 = chunk__40572_41145.cljs$core$IIndexed$_nth$arity$2(null,i__40574_41147);
var type_41149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40581_41148,(0),null);
var f_41150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40581_41148,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41149,((function (seq__40571_41144,chunk__40572_41145,count__40573_41146,i__40574_41147,vec__40581_41148,type_41149,f_41150,vec__40568_41138,elem_41139,selector_41140){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41149,dommy$core$this_fn], 0));

return (f_41150.cljs$core$IFn$_invoke$arity$1 ? f_41150.cljs$core$IFn$_invoke$arity$1(e) : f_41150.call(null,e));
});})(seq__40571_41144,chunk__40572_41145,count__40573_41146,i__40574_41147,vec__40581_41148,type_41149,f_41150,vec__40568_41138,elem_41139,selector_41140))
], 0));


var G__41155 = seq__40571_41144;
var G__41156 = chunk__40572_41145;
var G__41157 = count__40573_41146;
var G__41158 = (i__40574_41147 + (1));
seq__40571_41144 = G__41155;
chunk__40572_41145 = G__41156;
count__40573_41146 = G__41157;
i__40574_41147 = G__41158;
continue;
} else {
var temp__5735__auto___41161 = cljs.core.seq(seq__40571_41144);
if(temp__5735__auto___41161){
var seq__40571_41165__$1 = temp__5735__auto___41161;
if(cljs.core.chunked_seq_QMARK_(seq__40571_41165__$1)){
var c__4556__auto___41166 = cljs.core.chunk_first(seq__40571_41165__$1);
var G__41170 = cljs.core.chunk_rest(seq__40571_41165__$1);
var G__41171 = c__4556__auto___41166;
var G__41172 = cljs.core.count(c__4556__auto___41166);
var G__41173 = (0);
seq__40571_41144 = G__41170;
chunk__40572_41145 = G__41171;
count__40573_41146 = G__41172;
i__40574_41147 = G__41173;
continue;
} else {
var vec__40584_41176 = cljs.core.first(seq__40571_41165__$1);
var type_41177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584_41176,(0),null);
var f_41178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584_41176,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41177,((function (seq__40571_41144,chunk__40572_41145,count__40573_41146,i__40574_41147,vec__40584_41176,type_41177,f_41178,seq__40571_41165__$1,temp__5735__auto___41161,vec__40568_41138,elem_41139,selector_41140){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41177,dommy$core$this_fn], 0));

return (f_41178.cljs$core$IFn$_invoke$arity$1 ? f_41178.cljs$core$IFn$_invoke$arity$1(e) : f_41178.call(null,e));
});})(seq__40571_41144,chunk__40572_41145,count__40573_41146,i__40574_41147,vec__40584_41176,type_41177,f_41178,seq__40571_41165__$1,temp__5735__auto___41161,vec__40568_41138,elem_41139,selector_41140))
], 0));


var G__41183 = cljs.core.next(seq__40571_41165__$1);
var G__41184 = null;
var G__41185 = (0);
var G__41186 = (0);
seq__40571_41144 = G__41183;
chunk__40572_41145 = G__41184;
count__40573_41146 = G__41185;
i__40574_41147 = G__41186;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40564){
var G__40565 = cljs.core.first(seq40564);
var seq40564__$1 = cljs.core.next(seq40564);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40565,seq40564__$1);
}));


//# sourceMappingURL=dommy.core.js.map
