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
var seq__40144_40593 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40145_40594 = null;
var count__40146_40595 = (0);
var i__40147_40596 = (0);
while(true){
if((i__40147_40596 < count__40146_40595)){
var vec__40156_40597 = chunk__40145_40594.cljs$core$IIndexed$_nth$arity$2(null,i__40147_40596);
var k_40598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156_40597,(0),null);
var v_40599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156_40597,(1),null);
style.setProperty(dommy.utils.as_str(k_40598),v_40599);


var G__40600 = seq__40144_40593;
var G__40601 = chunk__40145_40594;
var G__40602 = count__40146_40595;
var G__40603 = (i__40147_40596 + (1));
seq__40144_40593 = G__40600;
chunk__40145_40594 = G__40601;
count__40146_40595 = G__40602;
i__40147_40596 = G__40603;
continue;
} else {
var temp__5735__auto___40604 = cljs.core.seq(seq__40144_40593);
if(temp__5735__auto___40604){
var seq__40144_40605__$1 = temp__5735__auto___40604;
if(cljs.core.chunked_seq_QMARK_(seq__40144_40605__$1)){
var c__4556__auto___40606 = cljs.core.chunk_first(seq__40144_40605__$1);
var G__40607 = cljs.core.chunk_rest(seq__40144_40605__$1);
var G__40608 = c__4556__auto___40606;
var G__40609 = cljs.core.count(c__4556__auto___40606);
var G__40610 = (0);
seq__40144_40593 = G__40607;
chunk__40145_40594 = G__40608;
count__40146_40595 = G__40609;
i__40147_40596 = G__40610;
continue;
} else {
var vec__40160_40611 = cljs.core.first(seq__40144_40605__$1);
var k_40612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40160_40611,(0),null);
var v_40613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40160_40611,(1),null);
style.setProperty(dommy.utils.as_str(k_40612),v_40613);


var G__40614 = cljs.core.next(seq__40144_40605__$1);
var G__40615 = null;
var G__40616 = (0);
var G__40617 = (0);
seq__40144_40593 = G__40614;
chunk__40145_40594 = G__40615;
count__40146_40595 = G__40616;
i__40147_40596 = G__40617;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40141){
var G__40142 = cljs.core.first(seq40141);
var seq40141__$1 = cljs.core.next(seq40141);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40142,seq40141__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40618 = arguments.length;
var i__4737__auto___40619 = (0);
while(true){
if((i__4737__auto___40619 < len__4736__auto___40618)){
args__4742__auto__.push((arguments[i__4737__auto___40619]));

var G__40620 = (i__4737__auto___40619 + (1));
i__4737__auto___40619 = G__40620;
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
var seq__40167_40621 = cljs.core.seq(keywords);
var chunk__40168_40622 = null;
var count__40169_40623 = (0);
var i__40170_40624 = (0);
while(true){
if((i__40170_40624 < count__40169_40623)){
var kw_40625 = chunk__40168_40622.cljs$core$IIndexed$_nth$arity$2(null,i__40170_40624);
style.removeProperty(dommy.utils.as_str(kw_40625));


var G__40626 = seq__40167_40621;
var G__40627 = chunk__40168_40622;
var G__40628 = count__40169_40623;
var G__40629 = (i__40170_40624 + (1));
seq__40167_40621 = G__40626;
chunk__40168_40622 = G__40627;
count__40169_40623 = G__40628;
i__40170_40624 = G__40629;
continue;
} else {
var temp__5735__auto___40630 = cljs.core.seq(seq__40167_40621);
if(temp__5735__auto___40630){
var seq__40167_40631__$1 = temp__5735__auto___40630;
if(cljs.core.chunked_seq_QMARK_(seq__40167_40631__$1)){
var c__4556__auto___40632 = cljs.core.chunk_first(seq__40167_40631__$1);
var G__40633 = cljs.core.chunk_rest(seq__40167_40631__$1);
var G__40634 = c__4556__auto___40632;
var G__40635 = cljs.core.count(c__4556__auto___40632);
var G__40636 = (0);
seq__40167_40621 = G__40633;
chunk__40168_40622 = G__40634;
count__40169_40623 = G__40635;
i__40170_40624 = G__40636;
continue;
} else {
var kw_40637 = cljs.core.first(seq__40167_40631__$1);
style.removeProperty(dommy.utils.as_str(kw_40637));


var G__40638 = cljs.core.next(seq__40167_40631__$1);
var G__40639 = null;
var G__40640 = (0);
var G__40641 = (0);
seq__40167_40621 = G__40638;
chunk__40168_40622 = G__40639;
count__40169_40623 = G__40640;
i__40170_40624 = G__40641;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40164){
var G__40165 = cljs.core.first(seq40164);
var seq40164__$1 = cljs.core.next(seq40164);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40165,seq40164__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40642 = arguments.length;
var i__4737__auto___40643 = (0);
while(true){
if((i__4737__auto___40643 < len__4736__auto___40642)){
args__4742__auto__.push((arguments[i__4737__auto___40643]));

var G__40644 = (i__4737__auto___40643 + (1));
i__4737__auto___40643 = G__40644;
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

var seq__40177_40645 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40178_40646 = null;
var count__40179_40647 = (0);
var i__40180_40648 = (0);
while(true){
if((i__40180_40648 < count__40179_40647)){
var vec__40188_40649 = chunk__40178_40646.cljs$core$IIndexed$_nth$arity$2(null,i__40180_40648);
var k_40650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40649,(0),null);
var v_40651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188_40649,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40650,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40651),"px"].join('')], 0));


var G__40652 = seq__40177_40645;
var G__40653 = chunk__40178_40646;
var G__40654 = count__40179_40647;
var G__40655 = (i__40180_40648 + (1));
seq__40177_40645 = G__40652;
chunk__40178_40646 = G__40653;
count__40179_40647 = G__40654;
i__40180_40648 = G__40655;
continue;
} else {
var temp__5735__auto___40656 = cljs.core.seq(seq__40177_40645);
if(temp__5735__auto___40656){
var seq__40177_40657__$1 = temp__5735__auto___40656;
if(cljs.core.chunked_seq_QMARK_(seq__40177_40657__$1)){
var c__4556__auto___40658 = cljs.core.chunk_first(seq__40177_40657__$1);
var G__40659 = cljs.core.chunk_rest(seq__40177_40657__$1);
var G__40660 = c__4556__auto___40658;
var G__40661 = cljs.core.count(c__4556__auto___40658);
var G__40662 = (0);
seq__40177_40645 = G__40659;
chunk__40178_40646 = G__40660;
count__40179_40647 = G__40661;
i__40180_40648 = G__40662;
continue;
} else {
var vec__40191_40663 = cljs.core.first(seq__40177_40657__$1);
var k_40664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40663,(0),null);
var v_40665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191_40663,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40664,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40665),"px"].join('')], 0));


var G__40666 = cljs.core.next(seq__40177_40657__$1);
var G__40667 = null;
var G__40668 = (0);
var G__40669 = (0);
seq__40177_40645 = G__40666;
chunk__40178_40646 = G__40667;
count__40179_40647 = G__40668;
i__40180_40648 = G__40669;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40174){
var G__40175 = cljs.core.first(seq40174);
var seq40174__$1 = cljs.core.next(seq40174);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40175,seq40174__$1);
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
var len__4736__auto___40672 = arguments.length;
var i__4737__auto___40674 = (0);
while(true){
if((i__4737__auto___40674 < len__4736__auto___40672)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40674]));

var G__40675 = (i__4737__auto___40674 + (1));
i__4737__auto___40674 = G__40675;
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

var seq__40202_40676 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40203_40677 = null;
var count__40204_40678 = (0);
var i__40205_40679 = (0);
while(true){
if((i__40205_40679 < count__40204_40678)){
var vec__40212_40680 = chunk__40203_40677.cljs$core$IIndexed$_nth$arity$2(null,i__40205_40679);
var k_40681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40212_40680,(0),null);
var v_40682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40212_40680,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40681__$1,v_40682__$1);


var G__40683 = seq__40202_40676;
var G__40684 = chunk__40203_40677;
var G__40685 = count__40204_40678;
var G__40686 = (i__40205_40679 + (1));
seq__40202_40676 = G__40683;
chunk__40203_40677 = G__40684;
count__40204_40678 = G__40685;
i__40205_40679 = G__40686;
continue;
} else {
var temp__5735__auto___40687 = cljs.core.seq(seq__40202_40676);
if(temp__5735__auto___40687){
var seq__40202_40688__$1 = temp__5735__auto___40687;
if(cljs.core.chunked_seq_QMARK_(seq__40202_40688__$1)){
var c__4556__auto___40689 = cljs.core.chunk_first(seq__40202_40688__$1);
var G__40690 = cljs.core.chunk_rest(seq__40202_40688__$1);
var G__40691 = c__4556__auto___40689;
var G__40692 = cljs.core.count(c__4556__auto___40689);
var G__40693 = (0);
seq__40202_40676 = G__40690;
chunk__40203_40677 = G__40691;
count__40204_40678 = G__40692;
i__40205_40679 = G__40693;
continue;
} else {
var vec__40215_40694 = cljs.core.first(seq__40202_40688__$1);
var k_40695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40694,(0),null);
var v_40696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40694,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40695__$1,v_40696__$1);


var G__40697 = cljs.core.next(seq__40202_40688__$1);
var G__40698 = null;
var G__40699 = (0);
var G__40700 = (0);
seq__40202_40676 = G__40697;
chunk__40203_40677 = G__40698;
count__40204_40678 = G__40699;
i__40205_40679 = G__40700;
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
var len__4736__auto___40704 = arguments.length;
var i__4737__auto___40705 = (0);
while(true){
if((i__4737__auto___40705 < len__4736__auto___40704)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40705]));

var G__40706 = (i__4737__auto___40705 + (1));
i__4737__auto___40705 = G__40706;
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
var k_40707__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40223.cljs$core$IFn$_invoke$arity$1 ? fexpr__40223.cljs$core$IFn$_invoke$arity$1(k_40707__$1) : fexpr__40223.call(null,k_40707__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40707__$1);
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
var seq__40243_40782 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40244_40783 = null;
var count__40245_40784 = (0);
var i__40246_40785 = (0);
while(true){
if((i__40246_40785 < count__40245_40784)){
var c_40786 = chunk__40244_40783.cljs$core$IIndexed$_nth$arity$2(null,i__40246_40785);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40786);


var G__40787 = seq__40243_40782;
var G__40788 = chunk__40244_40783;
var G__40789 = count__40245_40784;
var G__40790 = (i__40246_40785 + (1));
seq__40243_40782 = G__40787;
chunk__40244_40783 = G__40788;
count__40245_40784 = G__40789;
i__40246_40785 = G__40790;
continue;
} else {
var temp__5735__auto___40791 = cljs.core.seq(seq__40243_40782);
if(temp__5735__auto___40791){
var seq__40243_40792__$1 = temp__5735__auto___40791;
if(cljs.core.chunked_seq_QMARK_(seq__40243_40792__$1)){
var c__4556__auto___40793 = cljs.core.chunk_first(seq__40243_40792__$1);
var G__40794 = cljs.core.chunk_rest(seq__40243_40792__$1);
var G__40795 = c__4556__auto___40793;
var G__40796 = cljs.core.count(c__4556__auto___40793);
var G__40797 = (0);
seq__40243_40782 = G__40794;
chunk__40244_40783 = G__40795;
count__40245_40784 = G__40796;
i__40246_40785 = G__40797;
continue;
} else {
var c_40798 = cljs.core.first(seq__40243_40792__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40798);


var G__40799 = cljs.core.next(seq__40243_40792__$1);
var G__40800 = null;
var G__40801 = (0);
var G__40802 = (0);
seq__40243_40782 = G__40799;
chunk__40244_40783 = G__40800;
count__40245_40784 = G__40801;
i__40246_40785 = G__40802;
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
var len__4736__auto___40804 = arguments.length;
var i__4737__auto___40805 = (0);
while(true){
if((i__4737__auto___40805 < len__4736__auto___40804)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40805]));

var G__40806 = (i__4737__auto___40805 + (1));
i__4737__auto___40805 = G__40806;
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
var temp__5733__auto___40807 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40807)){
var class_list_40808 = temp__5733__auto___40807;
class_list_40808.remove(c__$1);
} else {
var class_name_40809 = dommy.core.class$(elem);
var new_class_name_40810 = dommy.utils.remove_class_str(class_name_40809,c__$1);
if((class_name_40809 === new_class_name_40810)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40810);
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


var G__40811 = seq__40252;
var G__40812 = chunk__40253;
var G__40813 = count__40254;
var G__40814 = (i__40255 + (1));
seq__40252 = G__40811;
chunk__40253 = G__40812;
count__40254 = G__40813;
i__40255 = G__40814;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40252);
if(temp__5735__auto__){
var seq__40252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40252__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40252__$1);
var G__40815 = cljs.core.chunk_rest(seq__40252__$1);
var G__40816 = c__4556__auto__;
var G__40817 = cljs.core.count(c__4556__auto__);
var G__40818 = (0);
seq__40252 = G__40815;
chunk__40253 = G__40816;
count__40254 = G__40817;
i__40255 = G__40818;
continue;
} else {
var c = cljs.core.first(seq__40252__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40819 = cljs.core.next(seq__40252__$1);
var G__40820 = null;
var G__40821 = (0);
var G__40822 = (0);
seq__40252 = G__40819;
chunk__40253 = G__40820;
count__40254 = G__40821;
i__40255 = G__40822;
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
var G__40257 = arguments.length;
switch (G__40257) {
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
var temp__5733__auto___40824 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40824)){
var class_list_40825 = temp__5733__auto___40824;
class_list_40825.toggle(c__$1);
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
var G__40259 = arguments.length;
switch (G__40259) {
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
var G__40262 = arguments.length;
switch (G__40262) {
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
var len__4736__auto___40832 = arguments.length;
var i__4737__auto___40833 = (0);
while(true){
if((i__4737__auto___40833 < len__4736__auto___40832)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40833]));

var G__40834 = (i__4737__auto___40833 + (1));
i__4737__auto___40833 = G__40834;
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
var seq__40271_40837 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40272_40838 = null;
var count__40273_40839 = (0);
var i__40274_40840 = (0);
while(true){
if((i__40274_40840 < count__40273_40839)){
var c_40842 = chunk__40272_40838.cljs$core$IIndexed$_nth$arity$2(null,i__40274_40840);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40842);


var G__40843 = seq__40271_40837;
var G__40844 = chunk__40272_40838;
var G__40845 = count__40273_40839;
var G__40846 = (i__40274_40840 + (1));
seq__40271_40837 = G__40843;
chunk__40272_40838 = G__40844;
count__40273_40839 = G__40845;
i__40274_40840 = G__40846;
continue;
} else {
var temp__5735__auto___40847 = cljs.core.seq(seq__40271_40837);
if(temp__5735__auto___40847){
var seq__40271_40848__$1 = temp__5735__auto___40847;
if(cljs.core.chunked_seq_QMARK_(seq__40271_40848__$1)){
var c__4556__auto___40849 = cljs.core.chunk_first(seq__40271_40848__$1);
var G__40850 = cljs.core.chunk_rest(seq__40271_40848__$1);
var G__40851 = c__4556__auto___40849;
var G__40852 = cljs.core.count(c__4556__auto___40849);
var G__40853 = (0);
seq__40271_40837 = G__40850;
chunk__40272_40838 = G__40851;
count__40273_40839 = G__40852;
i__40274_40840 = G__40853;
continue;
} else {
var c_40854 = cljs.core.first(seq__40271_40848__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40854);


var G__40856 = cljs.core.next(seq__40271_40848__$1);
var G__40857 = null;
var G__40858 = (0);
var G__40859 = (0);
seq__40271_40837 = G__40856;
chunk__40272_40838 = G__40857;
count__40273_40839 = G__40858;
i__40274_40840 = G__40859;
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
var len__4736__auto___40865 = arguments.length;
var i__4737__auto___40866 = (0);
while(true){
if((i__4737__auto___40866 < len__4736__auto___40865)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40866]));

var G__40868 = (i__4737__auto___40866 + (1));
i__4737__auto___40866 = G__40868;
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
var seq__40281_40871 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40282_40872 = null;
var count__40283_40873 = (0);
var i__40284_40874 = (0);
while(true){
if((i__40284_40874 < count__40283_40873)){
var c_40876 = chunk__40282_40872.cljs$core$IIndexed$_nth$arity$2(null,i__40284_40874);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40876);


var G__40877 = seq__40281_40871;
var G__40878 = chunk__40282_40872;
var G__40879 = count__40283_40873;
var G__40880 = (i__40284_40874 + (1));
seq__40281_40871 = G__40877;
chunk__40282_40872 = G__40878;
count__40283_40873 = G__40879;
i__40284_40874 = G__40880;
continue;
} else {
var temp__5735__auto___40881 = cljs.core.seq(seq__40281_40871);
if(temp__5735__auto___40881){
var seq__40281_40882__$1 = temp__5735__auto___40881;
if(cljs.core.chunked_seq_QMARK_(seq__40281_40882__$1)){
var c__4556__auto___40884 = cljs.core.chunk_first(seq__40281_40882__$1);
var G__40886 = cljs.core.chunk_rest(seq__40281_40882__$1);
var G__40887 = c__4556__auto___40884;
var G__40888 = cljs.core.count(c__4556__auto___40884);
var G__40889 = (0);
seq__40281_40871 = G__40886;
chunk__40282_40872 = G__40887;
count__40283_40873 = G__40888;
i__40284_40874 = G__40889;
continue;
} else {
var c_40890 = cljs.core.first(seq__40281_40882__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40890);


var G__40893 = cljs.core.next(seq__40281_40882__$1);
var G__40894 = null;
var G__40895 = (0);
var G__40896 = (0);
seq__40281_40871 = G__40893;
chunk__40282_40872 = G__40894;
count__40283_40873 = G__40895;
i__40284_40874 = G__40896;
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
var temp__5733__auto___40900 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40900)){
var next_40903 = temp__5733__auto___40900;
dommy.core.insert_before_BANG_(elem,next_40903);
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

var vec__40297_40916 = dommy.core.elem_and_selector(elem_sel);
var elem_40917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40297_40916,(0),null);
var selector_40918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40297_40916,(1),null);
var seq__40300_40919 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40307_40920 = null;
var count__40308_40921 = (0);
var i__40309_40922 = (0);
while(true){
if((i__40309_40922 < count__40308_40921)){
var vec__40368_40923 = chunk__40307_40920.cljs$core$IIndexed$_nth$arity$2(null,i__40309_40922);
var orig_type_40924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40923,(0),null);
var f_40925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368_40923,(1),null);
var seq__40310_40926 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40924,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40924,cljs.core.identity])));
var chunk__40312_40927 = null;
var count__40313_40928 = (0);
var i__40314_40929 = (0);
while(true){
if((i__40314_40929 < count__40313_40928)){
var vec__40381_40930 = chunk__40312_40927.cljs$core$IIndexed$_nth$arity$2(null,i__40314_40929);
var actual_type_40931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40930,(0),null);
var factory_40932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40930,(1),null);
var canonical_f_40933 = (function (){var G__40385 = (factory_40932.cljs$core$IFn$_invoke$arity$1 ? factory_40932.cljs$core$IFn$_invoke$arity$1(f_40925) : factory_40932.call(null,f_40925));
var fexpr__40384 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40384.cljs$core$IFn$_invoke$arity$1 ? fexpr__40384.cljs$core$IFn$_invoke$arity$1(G__40385) : fexpr__40384.call(null,G__40385));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40931,f_40925], null),canonical_f_40933], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40931),canonical_f_40933);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40931),canonical_f_40933);
}


var G__40934 = seq__40310_40926;
var G__40935 = chunk__40312_40927;
var G__40936 = count__40313_40928;
var G__40937 = (i__40314_40929 + (1));
seq__40310_40926 = G__40934;
chunk__40312_40927 = G__40935;
count__40313_40928 = G__40936;
i__40314_40929 = G__40937;
continue;
} else {
var temp__5735__auto___40938 = cljs.core.seq(seq__40310_40926);
if(temp__5735__auto___40938){
var seq__40310_40939__$1 = temp__5735__auto___40938;
if(cljs.core.chunked_seq_QMARK_(seq__40310_40939__$1)){
var c__4556__auto___40940 = cljs.core.chunk_first(seq__40310_40939__$1);
var G__40941 = cljs.core.chunk_rest(seq__40310_40939__$1);
var G__40942 = c__4556__auto___40940;
var G__40943 = cljs.core.count(c__4556__auto___40940);
var G__40944 = (0);
seq__40310_40926 = G__40941;
chunk__40312_40927 = G__40942;
count__40313_40928 = G__40943;
i__40314_40929 = G__40944;
continue;
} else {
var vec__40386_40945 = cljs.core.first(seq__40310_40939__$1);
var actual_type_40946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40386_40945,(0),null);
var factory_40947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40386_40945,(1),null);
var canonical_f_40948 = (function (){var G__40390 = (factory_40947.cljs$core$IFn$_invoke$arity$1 ? factory_40947.cljs$core$IFn$_invoke$arity$1(f_40925) : factory_40947.call(null,f_40925));
var fexpr__40389 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40389.cljs$core$IFn$_invoke$arity$1 ? fexpr__40389.cljs$core$IFn$_invoke$arity$1(G__40390) : fexpr__40389.call(null,G__40390));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40946,f_40925], null),canonical_f_40948], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40946),canonical_f_40948);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40946),canonical_f_40948);
}


var G__40949 = cljs.core.next(seq__40310_40939__$1);
var G__40950 = null;
var G__40951 = (0);
var G__40952 = (0);
seq__40310_40926 = G__40949;
chunk__40312_40927 = G__40950;
count__40313_40928 = G__40951;
i__40314_40929 = G__40952;
continue;
}
} else {
}
}
break;
}

var G__40953 = seq__40300_40919;
var G__40954 = chunk__40307_40920;
var G__40955 = count__40308_40921;
var G__40956 = (i__40309_40922 + (1));
seq__40300_40919 = G__40953;
chunk__40307_40920 = G__40954;
count__40308_40921 = G__40955;
i__40309_40922 = G__40956;
continue;
} else {
var temp__5735__auto___40957 = cljs.core.seq(seq__40300_40919);
if(temp__5735__auto___40957){
var seq__40300_40958__$1 = temp__5735__auto___40957;
if(cljs.core.chunked_seq_QMARK_(seq__40300_40958__$1)){
var c__4556__auto___40959 = cljs.core.chunk_first(seq__40300_40958__$1);
var G__40960 = cljs.core.chunk_rest(seq__40300_40958__$1);
var G__40961 = c__4556__auto___40959;
var G__40962 = cljs.core.count(c__4556__auto___40959);
var G__40963 = (0);
seq__40300_40919 = G__40960;
chunk__40307_40920 = G__40961;
count__40308_40921 = G__40962;
i__40309_40922 = G__40963;
continue;
} else {
var vec__40391_40964 = cljs.core.first(seq__40300_40958__$1);
var orig_type_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40391_40964,(0),null);
var f_40966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40391_40964,(1),null);
var seq__40301_40967 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40965,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40965,cljs.core.identity])));
var chunk__40303_40968 = null;
var count__40304_40969 = (0);
var i__40305_40970 = (0);
while(true){
if((i__40305_40970 < count__40304_40969)){
var vec__40404_40971 = chunk__40303_40968.cljs$core$IIndexed$_nth$arity$2(null,i__40305_40970);
var actual_type_40972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40971,(0),null);
var factory_40973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40971,(1),null);
var canonical_f_40974 = (function (){var G__40412 = (factory_40973.cljs$core$IFn$_invoke$arity$1 ? factory_40973.cljs$core$IFn$_invoke$arity$1(f_40966) : factory_40973.call(null,f_40966));
var fexpr__40411 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40411.cljs$core$IFn$_invoke$arity$1 ? fexpr__40411.cljs$core$IFn$_invoke$arity$1(G__40412) : fexpr__40411.call(null,G__40412));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40972,f_40966], null),canonical_f_40974], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40972),canonical_f_40974);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40972),canonical_f_40974);
}


var G__40975 = seq__40301_40967;
var G__40976 = chunk__40303_40968;
var G__40977 = count__40304_40969;
var G__40978 = (i__40305_40970 + (1));
seq__40301_40967 = G__40975;
chunk__40303_40968 = G__40976;
count__40304_40969 = G__40977;
i__40305_40970 = G__40978;
continue;
} else {
var temp__5735__auto___40979__$1 = cljs.core.seq(seq__40301_40967);
if(temp__5735__auto___40979__$1){
var seq__40301_40980__$1 = temp__5735__auto___40979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40301_40980__$1)){
var c__4556__auto___40981 = cljs.core.chunk_first(seq__40301_40980__$1);
var G__40982 = cljs.core.chunk_rest(seq__40301_40980__$1);
var G__40983 = c__4556__auto___40981;
var G__40984 = cljs.core.count(c__4556__auto___40981);
var G__40985 = (0);
seq__40301_40967 = G__40982;
chunk__40303_40968 = G__40983;
count__40304_40969 = G__40984;
i__40305_40970 = G__40985;
continue;
} else {
var vec__40413_40986 = cljs.core.first(seq__40301_40980__$1);
var actual_type_40987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40413_40986,(0),null);
var factory_40988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40413_40986,(1),null);
var canonical_f_40989 = (function (){var G__40417 = (factory_40988.cljs$core$IFn$_invoke$arity$1 ? factory_40988.cljs$core$IFn$_invoke$arity$1(f_40966) : factory_40988.call(null,f_40966));
var fexpr__40416 = (cljs.core.truth_(selector_40918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40917,selector_40918):cljs.core.identity);
return (fexpr__40416.cljs$core$IFn$_invoke$arity$1 ? fexpr__40416.cljs$core$IFn$_invoke$arity$1(G__40417) : fexpr__40416.call(null,G__40417));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40918,actual_type_40987,f_40966], null),canonical_f_40989], 0));

if(cljs.core.truth_(elem_40917.addEventListener)){
elem_40917.addEventListener(cljs.core.name(actual_type_40987),canonical_f_40989);
} else {
elem_40917.attachEvent(cljs.core.name(actual_type_40987),canonical_f_40989);
}


var G__40990 = cljs.core.next(seq__40301_40980__$1);
var G__40991 = null;
var G__40992 = (0);
var G__40993 = (0);
seq__40301_40967 = G__40990;
chunk__40303_40968 = G__40991;
count__40304_40969 = G__40992;
i__40305_40970 = G__40993;
continue;
}
} else {
}
}
break;
}

var G__40994 = cljs.core.next(seq__40300_40958__$1);
var G__40995 = null;
var G__40996 = (0);
var G__40997 = (0);
seq__40300_40919 = G__40994;
chunk__40307_40920 = G__40995;
count__40308_40921 = G__40996;
i__40309_40922 = G__40997;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40295){
var G__40296 = cljs.core.first(seq40295);
var seq40295__$1 = cljs.core.next(seq40295);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40296,seq40295__$1);
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
var len__4736__auto___40998 = arguments.length;
var i__4737__auto___40999 = (0);
while(true){
if((i__4737__auto___40999 < len__4736__auto___40998)){
args__4742__auto__.push((arguments[i__4737__auto___40999]));

var G__41000 = (i__4737__auto___40999 + (1));
i__4737__auto___40999 = G__41000;
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

var vec__40423_41001 = dommy.core.elem_and_selector(elem_sel);
var elem_41002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40423_41001,(0),null);
var selector_41003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40423_41001,(1),null);
var seq__40426_41004 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40433_41005 = null;
var count__40434_41006 = (0);
var i__40435_41007 = (0);
while(true){
if((i__40435_41007 < count__40434_41006)){
var vec__40479_41008 = chunk__40433_41005.cljs$core$IIndexed$_nth$arity$2(null,i__40435_41007);
var orig_type_41009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41008,(0),null);
var f_41010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41008,(1),null);
var seq__40436_41013 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41009,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41009,cljs.core.identity])));
var chunk__40438_41014 = null;
var count__40439_41015 = (0);
var i__40440_41016 = (0);
while(true){
if((i__40440_41016 < count__40439_41015)){
var vec__40490_41018 = chunk__40438_41014.cljs$core$IIndexed$_nth$arity$2(null,i__40440_41016);
var actual_type_41019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41018,(0),null);
var __41020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41018,(1),null);
var keys_41022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41003,actual_type_41019,f_41010], null);
var canonical_f_41023 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41002),keys_41022);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41022], 0));

if(cljs.core.truth_(elem_41002.removeEventListener)){
elem_41002.removeEventListener(cljs.core.name(actual_type_41019),canonical_f_41023);
} else {
elem_41002.detachEvent(cljs.core.name(actual_type_41019),canonical_f_41023);
}


var G__41026 = seq__40436_41013;
var G__41027 = chunk__40438_41014;
var G__41028 = count__40439_41015;
var G__41029 = (i__40440_41016 + (1));
seq__40436_41013 = G__41026;
chunk__40438_41014 = G__41027;
count__40439_41015 = G__41028;
i__40440_41016 = G__41029;
continue;
} else {
var temp__5735__auto___41030 = cljs.core.seq(seq__40436_41013);
if(temp__5735__auto___41030){
var seq__40436_41031__$1 = temp__5735__auto___41030;
if(cljs.core.chunked_seq_QMARK_(seq__40436_41031__$1)){
var c__4556__auto___41032 = cljs.core.chunk_first(seq__40436_41031__$1);
var G__41033 = cljs.core.chunk_rest(seq__40436_41031__$1);
var G__41034 = c__4556__auto___41032;
var G__41035 = cljs.core.count(c__4556__auto___41032);
var G__41036 = (0);
seq__40436_41013 = G__41033;
chunk__40438_41014 = G__41034;
count__40439_41015 = G__41035;
i__40440_41016 = G__41036;
continue;
} else {
var vec__40493_41037 = cljs.core.first(seq__40436_41031__$1);
var actual_type_41038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40493_41037,(0),null);
var __41039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40493_41037,(1),null);
var keys_41040 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41003,actual_type_41038,f_41010], null);
var canonical_f_41041 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41002),keys_41040);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41040], 0));

if(cljs.core.truth_(elem_41002.removeEventListener)){
elem_41002.removeEventListener(cljs.core.name(actual_type_41038),canonical_f_41041);
} else {
elem_41002.detachEvent(cljs.core.name(actual_type_41038),canonical_f_41041);
}


var G__41042 = cljs.core.next(seq__40436_41031__$1);
var G__41043 = null;
var G__41044 = (0);
var G__41045 = (0);
seq__40436_41013 = G__41042;
chunk__40438_41014 = G__41043;
count__40439_41015 = G__41044;
i__40440_41016 = G__41045;
continue;
}
} else {
}
}
break;
}

var G__41046 = seq__40426_41004;
var G__41047 = chunk__40433_41005;
var G__41048 = count__40434_41006;
var G__41049 = (i__40435_41007 + (1));
seq__40426_41004 = G__41046;
chunk__40433_41005 = G__41047;
count__40434_41006 = G__41048;
i__40435_41007 = G__41049;
continue;
} else {
var temp__5735__auto___41051 = cljs.core.seq(seq__40426_41004);
if(temp__5735__auto___41051){
var seq__40426_41054__$1 = temp__5735__auto___41051;
if(cljs.core.chunked_seq_QMARK_(seq__40426_41054__$1)){
var c__4556__auto___41056 = cljs.core.chunk_first(seq__40426_41054__$1);
var G__41057 = cljs.core.chunk_rest(seq__40426_41054__$1);
var G__41058 = c__4556__auto___41056;
var G__41059 = cljs.core.count(c__4556__auto___41056);
var G__41060 = (0);
seq__40426_41004 = G__41057;
chunk__40433_41005 = G__41058;
count__40434_41006 = G__41059;
i__40435_41007 = G__41060;
continue;
} else {
var vec__40497_41061 = cljs.core.first(seq__40426_41054__$1);
var orig_type_41062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497_41061,(0),null);
var f_41063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497_41061,(1),null);
var seq__40427_41064 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41062,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41062,cljs.core.identity])));
var chunk__40429_41065 = null;
var count__40430_41066 = (0);
var i__40431_41067 = (0);
while(true){
if((i__40431_41067 < count__40430_41066)){
var vec__40521_41071 = chunk__40429_41065.cljs$core$IIndexed$_nth$arity$2(null,i__40431_41067);
var actual_type_41072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40521_41071,(0),null);
var __41073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40521_41071,(1),null);
var keys_41074 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41003,actual_type_41072,f_41063], null);
var canonical_f_41075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41002),keys_41074);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41074], 0));

if(cljs.core.truth_(elem_41002.removeEventListener)){
elem_41002.removeEventListener(cljs.core.name(actual_type_41072),canonical_f_41075);
} else {
elem_41002.detachEvent(cljs.core.name(actual_type_41072),canonical_f_41075);
}


var G__41076 = seq__40427_41064;
var G__41077 = chunk__40429_41065;
var G__41078 = count__40430_41066;
var G__41079 = (i__40431_41067 + (1));
seq__40427_41064 = G__41076;
chunk__40429_41065 = G__41077;
count__40430_41066 = G__41078;
i__40431_41067 = G__41079;
continue;
} else {
var temp__5735__auto___41080__$1 = cljs.core.seq(seq__40427_41064);
if(temp__5735__auto___41080__$1){
var seq__40427_41081__$1 = temp__5735__auto___41080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40427_41081__$1)){
var c__4556__auto___41082 = cljs.core.chunk_first(seq__40427_41081__$1);
var G__41085 = cljs.core.chunk_rest(seq__40427_41081__$1);
var G__41086 = c__4556__auto___41082;
var G__41087 = cljs.core.count(c__4556__auto___41082);
var G__41088 = (0);
seq__40427_41064 = G__41085;
chunk__40429_41065 = G__41086;
count__40430_41066 = G__41087;
i__40431_41067 = G__41088;
continue;
} else {
var vec__40536_41093 = cljs.core.first(seq__40427_41081__$1);
var actual_type_41094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536_41093,(0),null);
var __41095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536_41093,(1),null);
var keys_41097 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41003,actual_type_41094,f_41063], null);
var canonical_f_41098 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41002),keys_41097);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41097], 0));

if(cljs.core.truth_(elem_41002.removeEventListener)){
elem_41002.removeEventListener(cljs.core.name(actual_type_41094),canonical_f_41098);
} else {
elem_41002.detachEvent(cljs.core.name(actual_type_41094),canonical_f_41098);
}


var G__41101 = cljs.core.next(seq__40427_41081__$1);
var G__41102 = null;
var G__41103 = (0);
var G__41104 = (0);
seq__40427_41064 = G__41101;
chunk__40429_41065 = G__41102;
count__40430_41066 = G__41103;
i__40431_41067 = G__41104;
continue;
}
} else {
}
}
break;
}

var G__41105 = cljs.core.next(seq__40426_41054__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__40426_41004 = G__41105;
chunk__40433_41005 = G__41106;
count__40434_41006 = G__41107;
i__40435_41007 = G__41108;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40418){
var G__40419 = cljs.core.first(seq40418);
var seq40418__$1 = cljs.core.next(seq40418);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40419,seq40418__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41111 = arguments.length;
var i__4737__auto___41112 = (0);
while(true){
if((i__4737__auto___41112 < len__4736__auto___41111)){
args__4742__auto__.push((arguments[i__4737__auto___41112]));

var G__41118 = (i__4737__auto___41112 + (1));
i__4737__auto___41112 = G__41118;
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

var vec__40547_41121 = dommy.core.elem_and_selector(elem_sel);
var elem_41122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40547_41121,(0),null);
var selector_41123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40547_41121,(1),null);
var seq__40550_41125 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40552_41126 = null;
var count__40554_41127 = (0);
var i__40555_41128 = (0);
while(true){
if((i__40555_41128 < count__40554_41127)){
var vec__40576_41132 = chunk__40552_41126.cljs$core$IIndexed$_nth$arity$2(null,i__40555_41128);
var type_41133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40576_41132,(0),null);
var f_41134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40576_41132,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41133,((function (seq__40550_41125,chunk__40552_41126,count__40554_41127,i__40555_41128,vec__40576_41132,type_41133,f_41134,vec__40547_41121,elem_41122,selector_41123){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41133,dommy$core$this_fn], 0));

return (f_41134.cljs$core$IFn$_invoke$arity$1 ? f_41134.cljs$core$IFn$_invoke$arity$1(e) : f_41134.call(null,e));
});})(seq__40550_41125,chunk__40552_41126,count__40554_41127,i__40555_41128,vec__40576_41132,type_41133,f_41134,vec__40547_41121,elem_41122,selector_41123))
], 0));


var G__41136 = seq__40550_41125;
var G__41137 = chunk__40552_41126;
var G__41138 = count__40554_41127;
var G__41139 = (i__40555_41128 + (1));
seq__40550_41125 = G__41136;
chunk__40552_41126 = G__41137;
count__40554_41127 = G__41138;
i__40555_41128 = G__41139;
continue;
} else {
var temp__5735__auto___41141 = cljs.core.seq(seq__40550_41125);
if(temp__5735__auto___41141){
var seq__40550_41143__$1 = temp__5735__auto___41141;
if(cljs.core.chunked_seq_QMARK_(seq__40550_41143__$1)){
var c__4556__auto___41145 = cljs.core.chunk_first(seq__40550_41143__$1);
var G__41146 = cljs.core.chunk_rest(seq__40550_41143__$1);
var G__41147 = c__4556__auto___41145;
var G__41148 = cljs.core.count(c__4556__auto___41145);
var G__41149 = (0);
seq__40550_41125 = G__41146;
chunk__40552_41126 = G__41147;
count__40554_41127 = G__41148;
i__40555_41128 = G__41149;
continue;
} else {
var vec__40579_41151 = cljs.core.first(seq__40550_41143__$1);
var type_41152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579_41151,(0),null);
var f_41153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579_41151,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41152,((function (seq__40550_41125,chunk__40552_41126,count__40554_41127,i__40555_41128,vec__40579_41151,type_41152,f_41153,seq__40550_41143__$1,temp__5735__auto___41141,vec__40547_41121,elem_41122,selector_41123){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41152,dommy$core$this_fn], 0));

return (f_41153.cljs$core$IFn$_invoke$arity$1 ? f_41153.cljs$core$IFn$_invoke$arity$1(e) : f_41153.call(null,e));
});})(seq__40550_41125,chunk__40552_41126,count__40554_41127,i__40555_41128,vec__40579_41151,type_41152,f_41153,seq__40550_41143__$1,temp__5735__auto___41141,vec__40547_41121,elem_41122,selector_41123))
], 0));


var G__41159 = cljs.core.next(seq__40550_41143__$1);
var G__41160 = null;
var G__41161 = (0);
var G__41162 = (0);
seq__40550_41125 = G__41159;
chunk__40552_41126 = G__41160;
count__40554_41127 = G__41161;
i__40555_41128 = G__41162;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40539){
var G__40540 = cljs.core.first(seq40539);
var seq40539__$1 = cljs.core.next(seq40539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40540,seq40539__$1);
}));


//# sourceMappingURL=dommy.core.js.map
