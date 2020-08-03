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
var G__41173 = arguments.length;
switch (G__41173) {
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
var G__41175 = arguments.length;
switch (G__41175) {
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
var G__41178 = arguments.length;
switch (G__41178) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41176_SHARP_){
return (!((p1__41176_SHARP_ === base)));
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
var len__4789__auto___41615 = arguments.length;
var i__4790__auto___41616 = (0);
while(true){
if((i__4790__auto___41616 < len__4789__auto___41615)){
args__4795__auto__.push((arguments[i__4790__auto___41616]));

var G__41617 = (i__4790__auto___41616 + (1));
i__4790__auto___41616 = G__41617;
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
var seq__41183_41621 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41184_41622 = null;
var count__41185_41623 = (0);
var i__41186_41624 = (0);
while(true){
if((i__41186_41624 < count__41185_41623)){
var vec__41193_41625 = chunk__41184_41622.cljs$core$IIndexed$_nth$arity$2(null,i__41186_41624);
var k_41626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41625,(0),null);
var v_41627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41625,(1),null);
style.setProperty(dommy.utils.as_str(k_41626),v_41627);


var G__41628 = seq__41183_41621;
var G__41629 = chunk__41184_41622;
var G__41630 = count__41185_41623;
var G__41631 = (i__41186_41624 + (1));
seq__41183_41621 = G__41628;
chunk__41184_41622 = G__41629;
count__41185_41623 = G__41630;
i__41186_41624 = G__41631;
continue;
} else {
var temp__5735__auto___41632 = cljs.core.seq(seq__41183_41621);
if(temp__5735__auto___41632){
var seq__41183_41633__$1 = temp__5735__auto___41632;
if(cljs.core.chunked_seq_QMARK_(seq__41183_41633__$1)){
var c__4609__auto___41634 = cljs.core.chunk_first(seq__41183_41633__$1);
var G__41635 = cljs.core.chunk_rest(seq__41183_41633__$1);
var G__41636 = c__4609__auto___41634;
var G__41637 = cljs.core.count(c__4609__auto___41634);
var G__41638 = (0);
seq__41183_41621 = G__41635;
chunk__41184_41622 = G__41636;
count__41185_41623 = G__41637;
i__41186_41624 = G__41638;
continue;
} else {
var vec__41196_41639 = cljs.core.first(seq__41183_41633__$1);
var k_41640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41639,(0),null);
var v_41641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41639,(1),null);
style.setProperty(dommy.utils.as_str(k_41640),v_41641);


var G__41642 = cljs.core.next(seq__41183_41633__$1);
var G__41643 = null;
var G__41644 = (0);
var G__41645 = (0);
seq__41183_41621 = G__41642;
chunk__41184_41622 = G__41643;
count__41185_41623 = G__41644;
i__41186_41624 = G__41645;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41181){
var G__41182 = cljs.core.first(seq41181);
var seq41181__$1 = cljs.core.next(seq41181);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41182,seq41181__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41647 = arguments.length;
var i__4790__auto___41648 = (0);
while(true){
if((i__4790__auto___41648 < len__4789__auto___41647)){
args__4795__auto__.push((arguments[i__4790__auto___41648]));

var G__41649 = (i__4790__auto___41648 + (1));
i__4790__auto___41648 = G__41649;
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
var seq__41202_41651 = cljs.core.seq(keywords);
var chunk__41203_41652 = null;
var count__41204_41653 = (0);
var i__41205_41654 = (0);
while(true){
if((i__41205_41654 < count__41204_41653)){
var kw_41655 = chunk__41203_41652.cljs$core$IIndexed$_nth$arity$2(null,i__41205_41654);
style.removeProperty(dommy.utils.as_str(kw_41655));


var G__41656 = seq__41202_41651;
var G__41657 = chunk__41203_41652;
var G__41658 = count__41204_41653;
var G__41659 = (i__41205_41654 + (1));
seq__41202_41651 = G__41656;
chunk__41203_41652 = G__41657;
count__41204_41653 = G__41658;
i__41205_41654 = G__41659;
continue;
} else {
var temp__5735__auto___41660 = cljs.core.seq(seq__41202_41651);
if(temp__5735__auto___41660){
var seq__41202_41661__$1 = temp__5735__auto___41660;
if(cljs.core.chunked_seq_QMARK_(seq__41202_41661__$1)){
var c__4609__auto___41662 = cljs.core.chunk_first(seq__41202_41661__$1);
var G__41663 = cljs.core.chunk_rest(seq__41202_41661__$1);
var G__41664 = c__4609__auto___41662;
var G__41665 = cljs.core.count(c__4609__auto___41662);
var G__41666 = (0);
seq__41202_41651 = G__41663;
chunk__41203_41652 = G__41664;
count__41204_41653 = G__41665;
i__41205_41654 = G__41666;
continue;
} else {
var kw_41667 = cljs.core.first(seq__41202_41661__$1);
style.removeProperty(dommy.utils.as_str(kw_41667));


var G__41668 = cljs.core.next(seq__41202_41661__$1);
var G__41669 = null;
var G__41670 = (0);
var G__41671 = (0);
seq__41202_41651 = G__41668;
chunk__41203_41652 = G__41669;
count__41204_41653 = G__41670;
i__41205_41654 = G__41671;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41199){
var G__41200 = cljs.core.first(seq41199);
var seq41199__$1 = cljs.core.next(seq41199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41200,seq41199__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41672 = arguments.length;
var i__4790__auto___41673 = (0);
while(true){
if((i__4790__auto___41673 < len__4789__auto___41672)){
args__4795__auto__.push((arguments[i__4790__auto___41673]));

var G__41674 = (i__4790__auto___41673 + (1));
i__4790__auto___41673 = G__41674;
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

var seq__41208_41675 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41209_41676 = null;
var count__41210_41677 = (0);
var i__41211_41678 = (0);
while(true){
if((i__41211_41678 < count__41210_41677)){
var vec__41218_41679 = chunk__41209_41676.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41678);
var k_41680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41679,(0),null);
var v_41681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41679,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41680,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41681),"px"].join('')], 0));


var G__41682 = seq__41208_41675;
var G__41683 = chunk__41209_41676;
var G__41684 = count__41210_41677;
var G__41685 = (i__41211_41678 + (1));
seq__41208_41675 = G__41682;
chunk__41209_41676 = G__41683;
count__41210_41677 = G__41684;
i__41211_41678 = G__41685;
continue;
} else {
var temp__5735__auto___41686 = cljs.core.seq(seq__41208_41675);
if(temp__5735__auto___41686){
var seq__41208_41687__$1 = temp__5735__auto___41686;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41687__$1)){
var c__4609__auto___41688 = cljs.core.chunk_first(seq__41208_41687__$1);
var G__41689 = cljs.core.chunk_rest(seq__41208_41687__$1);
var G__41690 = c__4609__auto___41688;
var G__41691 = cljs.core.count(c__4609__auto___41688);
var G__41692 = (0);
seq__41208_41675 = G__41689;
chunk__41209_41676 = G__41690;
count__41210_41677 = G__41691;
i__41211_41678 = G__41692;
continue;
} else {
var vec__41221_41693 = cljs.core.first(seq__41208_41687__$1);
var k_41694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41693,(0),null);
var v_41695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41693,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41694,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41695),"px"].join('')], 0));


var G__41696 = cljs.core.next(seq__41208_41687__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__41208_41675 = G__41696;
chunk__41209_41676 = G__41697;
count__41210_41677 = G__41698;
i__41211_41678 = G__41699;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
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
var G__41229 = arguments.length;
switch (G__41229) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41701 = arguments.length;
var i__4790__auto___41702 = (0);
while(true){
if((i__4790__auto___41702 < len__4789__auto___41701)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41702]));

var G__41703 = (i__4790__auto___41702 + (1));
i__4790__auto___41702 = G__41703;
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
var G__41230 = elem;
(G__41230[k__$1] = v);

return G__41230;
} else {
var G__41231 = elem;
G__41231.setAttribute(k__$1,v);

return G__41231;
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

var seq__41232_41704 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41233_41705 = null;
var count__41234_41706 = (0);
var i__41235_41707 = (0);
while(true){
if((i__41235_41707 < count__41234_41706)){
var vec__41242_41708 = chunk__41233_41705.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41707);
var k_41709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(0),null);
var v_41710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41709__$1,v_41710__$1);


var G__41711 = seq__41232_41704;
var G__41712 = chunk__41233_41705;
var G__41713 = count__41234_41706;
var G__41714 = (i__41235_41707 + (1));
seq__41232_41704 = G__41711;
chunk__41233_41705 = G__41712;
count__41234_41706 = G__41713;
i__41235_41707 = G__41714;
continue;
} else {
var temp__5735__auto___41715 = cljs.core.seq(seq__41232_41704);
if(temp__5735__auto___41715){
var seq__41232_41716__$1 = temp__5735__auto___41715;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41716__$1)){
var c__4609__auto___41717 = cljs.core.chunk_first(seq__41232_41716__$1);
var G__41718 = cljs.core.chunk_rest(seq__41232_41716__$1);
var G__41719 = c__4609__auto___41717;
var G__41720 = cljs.core.count(c__4609__auto___41717);
var G__41721 = (0);
seq__41232_41704 = G__41718;
chunk__41233_41705 = G__41719;
count__41234_41706 = G__41720;
i__41235_41707 = G__41721;
continue;
} else {
var vec__41245_41722 = cljs.core.first(seq__41232_41716__$1);
var k_41723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(0),null);
var v_41724__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41723__$1,v_41724__$1);


var G__41725 = cljs.core.next(seq__41232_41716__$1);
var G__41726 = null;
var G__41727 = (0);
var G__41728 = (0);
seq__41232_41704 = G__41725;
chunk__41233_41705 = G__41726;
count__41234_41706 = G__41727;
i__41235_41707 = G__41728;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first(seq41225);
var seq41225__$1 = cljs.core.next(seq41225);
var G__41227 = cljs.core.first(seq41225__$1);
var seq41225__$2 = cljs.core.next(seq41225__$1);
var G__41228 = cljs.core.first(seq41225__$2);
var seq41225__$3 = cljs.core.next(seq41225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41730 = arguments.length;
var i__4790__auto___41731 = (0);
while(true){
if((i__4790__auto___41731 < len__4789__auto___41730)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41731]));

var G__41732 = (i__4790__auto___41731 + (1));
i__4790__auto___41731 = G__41732;
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
var k_41733__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41253.cljs$core$IFn$_invoke$arity$1 ? fexpr__41253.cljs$core$IFn$_invoke$arity$1(k_41733__$1) : fexpr__41253.call(null,k_41733__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41733__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41254_41734 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41255_41735 = null;
var count__41256_41736 = (0);
var i__41257_41737 = (0);
while(true){
if((i__41257_41737 < count__41256_41736)){
var k_41738__$1 = chunk__41255_41735.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41737);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41738__$1);


var G__41739 = seq__41254_41734;
var G__41740 = chunk__41255_41735;
var G__41741 = count__41256_41736;
var G__41742 = (i__41257_41737 + (1));
seq__41254_41734 = G__41739;
chunk__41255_41735 = G__41740;
count__41256_41736 = G__41741;
i__41257_41737 = G__41742;
continue;
} else {
var temp__5735__auto___41743 = cljs.core.seq(seq__41254_41734);
if(temp__5735__auto___41743){
var seq__41254_41744__$1 = temp__5735__auto___41743;
if(cljs.core.chunked_seq_QMARK_(seq__41254_41744__$1)){
var c__4609__auto___41745 = cljs.core.chunk_first(seq__41254_41744__$1);
var G__41746 = cljs.core.chunk_rest(seq__41254_41744__$1);
var G__41747 = c__4609__auto___41745;
var G__41748 = cljs.core.count(c__4609__auto___41745);
var G__41749 = (0);
seq__41254_41734 = G__41746;
chunk__41255_41735 = G__41747;
count__41256_41736 = G__41748;
i__41257_41737 = G__41749;
continue;
} else {
var k_41750__$1 = cljs.core.first(seq__41254_41744__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41750__$1);


var G__41751 = cljs.core.next(seq__41254_41744__$1);
var G__41752 = null;
var G__41753 = (0);
var G__41754 = (0);
seq__41254_41734 = G__41751;
chunk__41255_41735 = G__41752;
count__41256_41736 = G__41753;
i__41257_41737 = G__41754;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,seq41249__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
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
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41757 = arguments.length;
var i__4790__auto___41758 = (0);
while(true){
if((i__4790__auto___41758 < len__4789__auto___41757)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41758]));

var G__41759 = (i__4790__auto___41758 + (1));
i__4790__auto___41758 = G__41759;
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
var temp__5733__auto___41760 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41760)){
var class_list_41761 = temp__5733__auto___41760;
var seq__41265_41762 = cljs.core.seq(classes__$1);
var chunk__41266_41763 = null;
var count__41267_41764 = (0);
var i__41268_41765 = (0);
while(true){
if((i__41268_41765 < count__41267_41764)){
var c_41767 = chunk__41266_41763.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41765);
class_list_41761.add(c_41767);


var G__41768 = seq__41265_41762;
var G__41769 = chunk__41266_41763;
var G__41770 = count__41267_41764;
var G__41771 = (i__41268_41765 + (1));
seq__41265_41762 = G__41768;
chunk__41266_41763 = G__41769;
count__41267_41764 = G__41770;
i__41268_41765 = G__41771;
continue;
} else {
var temp__5735__auto___41773 = cljs.core.seq(seq__41265_41762);
if(temp__5735__auto___41773){
var seq__41265_41774__$1 = temp__5735__auto___41773;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41774__$1)){
var c__4609__auto___41775 = cljs.core.chunk_first(seq__41265_41774__$1);
var G__41776 = cljs.core.chunk_rest(seq__41265_41774__$1);
var G__41777 = c__4609__auto___41775;
var G__41778 = cljs.core.count(c__4609__auto___41775);
var G__41779 = (0);
seq__41265_41762 = G__41776;
chunk__41266_41763 = G__41777;
count__41267_41764 = G__41778;
i__41268_41765 = G__41779;
continue;
} else {
var c_41780 = cljs.core.first(seq__41265_41774__$1);
class_list_41761.add(c_41780);


var G__41781 = cljs.core.next(seq__41265_41774__$1);
var G__41782 = null;
var G__41783 = (0);
var G__41784 = (0);
seq__41265_41762 = G__41781;
chunk__41266_41763 = G__41782;
count__41267_41764 = G__41783;
i__41268_41765 = G__41784;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41269_41785 = cljs.core.seq(classes__$1);
var chunk__41270_41786 = null;
var count__41271_41787 = (0);
var i__41272_41788 = (0);
while(true){
if((i__41272_41788 < count__41271_41787)){
var c_41789 = chunk__41270_41786.cljs$core$IIndexed$_nth$arity$2(null,i__41272_41788);
var class_name_41790 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41790,c_41789))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41790 === ""))?c_41789:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41790)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41789)].join('')));
}


var G__41791 = seq__41269_41785;
var G__41792 = chunk__41270_41786;
var G__41793 = count__41271_41787;
var G__41794 = (i__41272_41788 + (1));
seq__41269_41785 = G__41791;
chunk__41270_41786 = G__41792;
count__41271_41787 = G__41793;
i__41272_41788 = G__41794;
continue;
} else {
var temp__5735__auto___41795 = cljs.core.seq(seq__41269_41785);
if(temp__5735__auto___41795){
var seq__41269_41796__$1 = temp__5735__auto___41795;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41796__$1)){
var c__4609__auto___41797 = cljs.core.chunk_first(seq__41269_41796__$1);
var G__41798 = cljs.core.chunk_rest(seq__41269_41796__$1);
var G__41799 = c__4609__auto___41797;
var G__41800 = cljs.core.count(c__4609__auto___41797);
var G__41801 = (0);
seq__41269_41785 = G__41798;
chunk__41270_41786 = G__41799;
count__41271_41787 = G__41800;
i__41272_41788 = G__41801;
continue;
} else {
var c_41802 = cljs.core.first(seq__41269_41796__$1);
var class_name_41803 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41803,c_41802))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41803 === ""))?c_41802:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41803)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41802)].join('')));
}


var G__41804 = cljs.core.next(seq__41269_41796__$1);
var G__41805 = null;
var G__41806 = (0);
var G__41807 = (0);
seq__41269_41785 = G__41804;
chunk__41270_41786 = G__41805;
count__41271_41787 = G__41806;
i__41272_41788 = G__41807;
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
var seq__41273_41808 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41274_41809 = null;
var count__41275_41810 = (0);
var i__41276_41811 = (0);
while(true){
if((i__41276_41811 < count__41275_41810)){
var c_41814 = chunk__41274_41809.cljs$core$IIndexed$_nth$arity$2(null,i__41276_41811);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41814);


var G__41815 = seq__41273_41808;
var G__41816 = chunk__41274_41809;
var G__41817 = count__41275_41810;
var G__41818 = (i__41276_41811 + (1));
seq__41273_41808 = G__41815;
chunk__41274_41809 = G__41816;
count__41275_41810 = G__41817;
i__41276_41811 = G__41818;
continue;
} else {
var temp__5735__auto___41819 = cljs.core.seq(seq__41273_41808);
if(temp__5735__auto___41819){
var seq__41273_41820__$1 = temp__5735__auto___41819;
if(cljs.core.chunked_seq_QMARK_(seq__41273_41820__$1)){
var c__4609__auto___41821 = cljs.core.chunk_first(seq__41273_41820__$1);
var G__41822 = cljs.core.chunk_rest(seq__41273_41820__$1);
var G__41823 = c__4609__auto___41821;
var G__41824 = cljs.core.count(c__4609__auto___41821);
var G__41825 = (0);
seq__41273_41808 = G__41822;
chunk__41274_41809 = G__41823;
count__41275_41810 = G__41824;
i__41276_41811 = G__41825;
continue;
} else {
var c_41826 = cljs.core.first(seq__41273_41820__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41826);


var G__41827 = cljs.core.next(seq__41273_41820__$1);
var G__41828 = null;
var G__41829 = (0);
var G__41830 = (0);
seq__41273_41808 = G__41827;
chunk__41274_41809 = G__41828;
count__41275_41810 = G__41829;
i__41276_41811 = G__41830;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41263 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41263,seq41261__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41281 = arguments.length;
switch (G__41281) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41834 = arguments.length;
var i__4790__auto___41835 = (0);
while(true){
if((i__4790__auto___41835 < len__4789__auto___41834)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41835]));

var G__41836 = (i__4790__auto___41835 + (1));
i__4790__auto___41835 = G__41836;
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
var temp__5733__auto___41837 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41837)){
var class_list_41838 = temp__5733__auto___41837;
class_list_41838.remove(c__$1);
} else {
var class_name_41839 = dommy.core.class$(elem);
var new_class_name_41840 = dommy.utils.remove_class_str(class_name_41839,c__$1);
if((class_name_41839 === new_class_name_41840)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41840);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41282 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41283 = null;
var count__41284 = (0);
var i__41285 = (0);
while(true){
if((i__41285 < count__41284)){
var c = chunk__41283.cljs$core$IIndexed$_nth$arity$2(null,i__41285);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41841 = seq__41282;
var G__41842 = chunk__41283;
var G__41843 = count__41284;
var G__41844 = (i__41285 + (1));
seq__41282 = G__41841;
chunk__41283 = G__41842;
count__41284 = G__41843;
i__41285 = G__41844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41282);
if(temp__5735__auto__){
var seq__41282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41282__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41282__$1);
var G__41845 = cljs.core.chunk_rest(seq__41282__$1);
var G__41846 = c__4609__auto__;
var G__41847 = cljs.core.count(c__4609__auto__);
var G__41848 = (0);
seq__41282 = G__41845;
chunk__41283 = G__41846;
count__41284 = G__41847;
i__41285 = G__41848;
continue;
} else {
var c = cljs.core.first(seq__41282__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41849 = cljs.core.next(seq__41282__$1);
var G__41850 = null;
var G__41851 = (0);
var G__41852 = (0);
seq__41282 = G__41849;
chunk__41283 = G__41850;
count__41284 = G__41851;
i__41285 = G__41852;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41278){
var G__41279 = cljs.core.first(seq41278);
var seq41278__$1 = cljs.core.next(seq41278);
var G__41280 = cljs.core.first(seq41278__$1);
var seq41278__$2 = cljs.core.next(seq41278__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41279,G__41280,seq41278__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41288 = arguments.length;
switch (G__41288) {
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
var temp__5733__auto___41854 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41854)){
var class_list_41855 = temp__5733__auto___41854;
class_list_41855.toggle(c__$1);
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
var G__41292 = arguments.length;
switch (G__41292) {
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
var G__41294 = arguments.length;
switch (G__41294) {
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
var G__41299 = arguments.length;
switch (G__41299) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41859 = arguments.length;
var i__4790__auto___41860 = (0);
while(true){
if((i__4790__auto___41860 < len__4789__auto___41859)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41860]));

var G__41861 = (i__4790__auto___41860 + (1));
i__4790__auto___41860 = G__41861;
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
var G__41300 = parent;
G__41300.appendChild(child);

return G__41300;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41301_41862 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41302_41863 = null;
var count__41303_41864 = (0);
var i__41304_41865 = (0);
while(true){
if((i__41304_41865 < count__41303_41864)){
var c_41866 = chunk__41302_41863.cljs$core$IIndexed$_nth$arity$2(null,i__41304_41865);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41866);


var G__41867 = seq__41301_41862;
var G__41868 = chunk__41302_41863;
var G__41869 = count__41303_41864;
var G__41870 = (i__41304_41865 + (1));
seq__41301_41862 = G__41867;
chunk__41302_41863 = G__41868;
count__41303_41864 = G__41869;
i__41304_41865 = G__41870;
continue;
} else {
var temp__5735__auto___41871 = cljs.core.seq(seq__41301_41862);
if(temp__5735__auto___41871){
var seq__41301_41872__$1 = temp__5735__auto___41871;
if(cljs.core.chunked_seq_QMARK_(seq__41301_41872__$1)){
var c__4609__auto___41873 = cljs.core.chunk_first(seq__41301_41872__$1);
var G__41874 = cljs.core.chunk_rest(seq__41301_41872__$1);
var G__41875 = c__4609__auto___41873;
var G__41876 = cljs.core.count(c__4609__auto___41873);
var G__41877 = (0);
seq__41301_41862 = G__41874;
chunk__41302_41863 = G__41875;
count__41303_41864 = G__41876;
i__41304_41865 = G__41877;
continue;
} else {
var c_41878 = cljs.core.first(seq__41301_41872__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41878);


var G__41879 = cljs.core.next(seq__41301_41872__$1);
var G__41880 = null;
var G__41881 = (0);
var G__41882 = (0);
seq__41301_41862 = G__41879;
chunk__41302_41863 = G__41880;
count__41303_41864 = G__41881;
i__41304_41865 = G__41882;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41296){
var G__41297 = cljs.core.first(seq41296);
var seq41296__$1 = cljs.core.next(seq41296);
var G__41298 = cljs.core.first(seq41296__$1);
var seq41296__$2 = cljs.core.next(seq41296__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41297,G__41298,seq41296__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41309 = arguments.length;
switch (G__41309) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41884 = arguments.length;
var i__4790__auto___41885 = (0);
while(true){
if((i__4790__auto___41885 < len__4789__auto___41884)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41885]));

var G__41886 = (i__4790__auto___41885 + (1));
i__4790__auto___41885 = G__41886;
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
var G__41310 = parent;
G__41310.insertBefore(child,parent.firstChild);

return G__41310;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41311_41887 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41312_41888 = null;
var count__41313_41889 = (0);
var i__41314_41890 = (0);
while(true){
if((i__41314_41890 < count__41313_41889)){
var c_41891 = chunk__41312_41888.cljs$core$IIndexed$_nth$arity$2(null,i__41314_41890);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41891);


var G__41892 = seq__41311_41887;
var G__41893 = chunk__41312_41888;
var G__41894 = count__41313_41889;
var G__41895 = (i__41314_41890 + (1));
seq__41311_41887 = G__41892;
chunk__41312_41888 = G__41893;
count__41313_41889 = G__41894;
i__41314_41890 = G__41895;
continue;
} else {
var temp__5735__auto___41896 = cljs.core.seq(seq__41311_41887);
if(temp__5735__auto___41896){
var seq__41311_41897__$1 = temp__5735__auto___41896;
if(cljs.core.chunked_seq_QMARK_(seq__41311_41897__$1)){
var c__4609__auto___41899 = cljs.core.chunk_first(seq__41311_41897__$1);
var G__41900 = cljs.core.chunk_rest(seq__41311_41897__$1);
var G__41901 = c__4609__auto___41899;
var G__41902 = cljs.core.count(c__4609__auto___41899);
var G__41903 = (0);
seq__41311_41887 = G__41900;
chunk__41312_41888 = G__41901;
count__41313_41889 = G__41902;
i__41314_41890 = G__41903;
continue;
} else {
var c_41904 = cljs.core.first(seq__41311_41897__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41904);


var G__41906 = cljs.core.next(seq__41311_41897__$1);
var G__41907 = null;
var G__41908 = (0);
var G__41909 = (0);
seq__41311_41887 = G__41906;
chunk__41312_41888 = G__41907;
count__41313_41889 = G__41908;
i__41314_41890 = G__41909;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41306){
var G__41307 = cljs.core.first(seq41306);
var seq41306__$1 = cljs.core.next(seq41306);
var G__41308 = cljs.core.first(seq41306__$1);
var seq41306__$2 = cljs.core.next(seq41306__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41307,G__41308,seq41306__$2);
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
var temp__5733__auto___41910 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41910)){
var next_41911 = temp__5733__auto___41910;
dommy.core.insert_before_BANG_(elem,next_41911);
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
var G__41316 = arguments.length;
switch (G__41316) {
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
var G__41317 = p;
G__41317.removeChild(elem);

return G__41317;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41318){
var vec__41319 = p__41318;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
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
var len__4789__auto___41926 = arguments.length;
var i__4790__auto___41927 = (0);
while(true){
if((i__4790__auto___41927 < len__4789__auto___41926)){
args__4795__auto__.push((arguments[i__4790__auto___41927]));

var G__41930 = (i__4790__auto___41927 + (1));
i__4790__auto___41927 = G__41930;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41322){
var G__41323 = cljs.core.first(seq41322);
var seq41322__$1 = cljs.core.next(seq41322);
var G__41324 = cljs.core.first(seq41322__$1);
var seq41322__$2 = cljs.core.next(seq41322__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41323,G__41324,seq41322__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41325 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41325.cljs$core$IFn$_invoke$arity$1 ? fexpr__41325.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41325.call(null,elem_sel));
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
var len__4789__auto___41941 = arguments.length;
var i__4790__auto___41942 = (0);
while(true){
if((i__4790__auto___41942 < len__4789__auto___41941)){
args__4795__auto__.push((arguments[i__4790__auto___41942]));

var G__41943 = (i__4790__auto___41942 + (1));
i__4790__auto___41942 = G__41943;
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

var vec__41331_41944 = dommy.core.elem_and_selector(elem_sel);
var elem_41945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331_41944,(0),null);
var selector_41946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331_41944,(1),null);
var seq__41334_41947 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41341_41948 = null;
var count__41342_41949 = (0);
var i__41343_41950 = (0);
while(true){
if((i__41343_41950 < count__41342_41949)){
var vec__41396_41951 = chunk__41341_41948.cljs$core$IIndexed$_nth$arity$2(null,i__41343_41950);
var orig_type_41952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396_41951,(0),null);
var f_41953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396_41951,(1),null);
var seq__41344_41954 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41952,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41952,cljs.core.identity])));
var chunk__41346_41955 = null;
var count__41347_41956 = (0);
var i__41348_41957 = (0);
while(true){
if((i__41348_41957 < count__41347_41956)){
var vec__41409_41958 = chunk__41346_41955.cljs$core$IIndexed$_nth$arity$2(null,i__41348_41957);
var actual_type_41959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41409_41958,(0),null);
var factory_41960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41409_41958,(1),null);
var canonical_f_41961 = (function (){var G__41413 = (factory_41960.cljs$core$IFn$_invoke$arity$1 ? factory_41960.cljs$core$IFn$_invoke$arity$1(f_41953) : factory_41960.call(null,f_41953));
var fexpr__41412 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41412.cljs$core$IFn$_invoke$arity$1 ? fexpr__41412.cljs$core$IFn$_invoke$arity$1(G__41413) : fexpr__41412.call(null,G__41413));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_41959,f_41953], null),canonical_f_41961], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_41959),canonical_f_41961);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_41959),canonical_f_41961);
}


var G__41962 = seq__41344_41954;
var G__41963 = chunk__41346_41955;
var G__41964 = count__41347_41956;
var G__41965 = (i__41348_41957 + (1));
seq__41344_41954 = G__41962;
chunk__41346_41955 = G__41963;
count__41347_41956 = G__41964;
i__41348_41957 = G__41965;
continue;
} else {
var temp__5735__auto___41966 = cljs.core.seq(seq__41344_41954);
if(temp__5735__auto___41966){
var seq__41344_41967__$1 = temp__5735__auto___41966;
if(cljs.core.chunked_seq_QMARK_(seq__41344_41967__$1)){
var c__4609__auto___41968 = cljs.core.chunk_first(seq__41344_41967__$1);
var G__41969 = cljs.core.chunk_rest(seq__41344_41967__$1);
var G__41970 = c__4609__auto___41968;
var G__41971 = cljs.core.count(c__4609__auto___41968);
var G__41972 = (0);
seq__41344_41954 = G__41969;
chunk__41346_41955 = G__41970;
count__41347_41956 = G__41971;
i__41348_41957 = G__41972;
continue;
} else {
var vec__41414_41973 = cljs.core.first(seq__41344_41967__$1);
var actual_type_41974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41973,(0),null);
var factory_41975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41973,(1),null);
var canonical_f_41976 = (function (){var G__41418 = (factory_41975.cljs$core$IFn$_invoke$arity$1 ? factory_41975.cljs$core$IFn$_invoke$arity$1(f_41953) : factory_41975.call(null,f_41953));
var fexpr__41417 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41417.cljs$core$IFn$_invoke$arity$1 ? fexpr__41417.cljs$core$IFn$_invoke$arity$1(G__41418) : fexpr__41417.call(null,G__41418));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_41974,f_41953], null),canonical_f_41976], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_41974),canonical_f_41976);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_41974),canonical_f_41976);
}


var G__41977 = cljs.core.next(seq__41344_41967__$1);
var G__41978 = null;
var G__41979 = (0);
var G__41980 = (0);
seq__41344_41954 = G__41977;
chunk__41346_41955 = G__41978;
count__41347_41956 = G__41979;
i__41348_41957 = G__41980;
continue;
}
} else {
}
}
break;
}

var G__41981 = seq__41334_41947;
var G__41982 = chunk__41341_41948;
var G__41983 = count__41342_41949;
var G__41984 = (i__41343_41950 + (1));
seq__41334_41947 = G__41981;
chunk__41341_41948 = G__41982;
count__41342_41949 = G__41983;
i__41343_41950 = G__41984;
continue;
} else {
var temp__5735__auto___41985 = cljs.core.seq(seq__41334_41947);
if(temp__5735__auto___41985){
var seq__41334_41986__$1 = temp__5735__auto___41985;
if(cljs.core.chunked_seq_QMARK_(seq__41334_41986__$1)){
var c__4609__auto___41987 = cljs.core.chunk_first(seq__41334_41986__$1);
var G__41988 = cljs.core.chunk_rest(seq__41334_41986__$1);
var G__41989 = c__4609__auto___41987;
var G__41990 = cljs.core.count(c__4609__auto___41987);
var G__41991 = (0);
seq__41334_41947 = G__41988;
chunk__41341_41948 = G__41989;
count__41342_41949 = G__41990;
i__41343_41950 = G__41991;
continue;
} else {
var vec__41419_41992 = cljs.core.first(seq__41334_41986__$1);
var orig_type_41993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41419_41992,(0),null);
var f_41994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41419_41992,(1),null);
var seq__41335_41995 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41993,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41993,cljs.core.identity])));
var chunk__41337_41996 = null;
var count__41338_41997 = (0);
var i__41339_41998 = (0);
while(true){
if((i__41339_41998 < count__41338_41997)){
var vec__41432_41999 = chunk__41337_41996.cljs$core$IIndexed$_nth$arity$2(null,i__41339_41998);
var actual_type_42000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41999,(0),null);
var factory_42001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41999,(1),null);
var canonical_f_42002 = (function (){var G__41436 = (factory_42001.cljs$core$IFn$_invoke$arity$1 ? factory_42001.cljs$core$IFn$_invoke$arity$1(f_41994) : factory_42001.call(null,f_41994));
var fexpr__41435 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41435.cljs$core$IFn$_invoke$arity$1 ? fexpr__41435.cljs$core$IFn$_invoke$arity$1(G__41436) : fexpr__41435.call(null,G__41436));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_42000,f_41994], null),canonical_f_42002], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_42000),canonical_f_42002);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_42000),canonical_f_42002);
}


var G__42003 = seq__41335_41995;
var G__42004 = chunk__41337_41996;
var G__42005 = count__41338_41997;
var G__42006 = (i__41339_41998 + (1));
seq__41335_41995 = G__42003;
chunk__41337_41996 = G__42004;
count__41338_41997 = G__42005;
i__41339_41998 = G__42006;
continue;
} else {
var temp__5735__auto___42007__$1 = cljs.core.seq(seq__41335_41995);
if(temp__5735__auto___42007__$1){
var seq__41335_42008__$1 = temp__5735__auto___42007__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41335_42008__$1)){
var c__4609__auto___42009 = cljs.core.chunk_first(seq__41335_42008__$1);
var G__42010 = cljs.core.chunk_rest(seq__41335_42008__$1);
var G__42011 = c__4609__auto___42009;
var G__42012 = cljs.core.count(c__4609__auto___42009);
var G__42013 = (0);
seq__41335_41995 = G__42010;
chunk__41337_41996 = G__42011;
count__41338_41997 = G__42012;
i__41339_41998 = G__42013;
continue;
} else {
var vec__41437_42014 = cljs.core.first(seq__41335_42008__$1);
var actual_type_42015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_42014,(0),null);
var factory_42016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_42014,(1),null);
var canonical_f_42017 = (function (){var G__41441 = (factory_42016.cljs$core$IFn$_invoke$arity$1 ? factory_42016.cljs$core$IFn$_invoke$arity$1(f_41994) : factory_42016.call(null,f_41994));
var fexpr__41440 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41440.cljs$core$IFn$_invoke$arity$1 ? fexpr__41440.cljs$core$IFn$_invoke$arity$1(G__41441) : fexpr__41440.call(null,G__41441));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_42015,f_41994], null),canonical_f_42017], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_42015),canonical_f_42017);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_42015),canonical_f_42017);
}


var G__42018 = cljs.core.next(seq__41335_42008__$1);
var G__42019 = null;
var G__42020 = (0);
var G__42021 = (0);
seq__41335_41995 = G__42018;
chunk__41337_41996 = G__42019;
count__41338_41997 = G__42020;
i__41339_41998 = G__42021;
continue;
}
} else {
}
}
break;
}

var G__42022 = cljs.core.next(seq__41334_41986__$1);
var G__42023 = null;
var G__42024 = (0);
var G__42025 = (0);
seq__41334_41947 = G__42022;
chunk__41341_41948 = G__42023;
count__41342_41949 = G__42024;
i__41343_41950 = G__42025;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41326){
var G__41327 = cljs.core.first(seq41326);
var seq41326__$1 = cljs.core.next(seq41326);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41327,seq41326__$1);
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
var len__4789__auto___42026 = arguments.length;
var i__4790__auto___42027 = (0);
while(true){
if((i__4790__auto___42027 < len__4789__auto___42026)){
args__4795__auto__.push((arguments[i__4790__auto___42027]));

var G__42028 = (i__4790__auto___42027 + (1));
i__4790__auto___42027 = G__42028;
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

var vec__41447_42029 = dommy.core.elem_and_selector(elem_sel);
var elem_42030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42029,(0),null);
var selector_42031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42029,(1),null);
var seq__41450_42032 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41457_42033 = null;
var count__41458_42034 = (0);
var i__41459_42035 = (0);
while(true){
if((i__41459_42035 < count__41458_42034)){
var vec__41500_42036 = chunk__41457_42033.cljs$core$IIndexed$_nth$arity$2(null,i__41459_42035);
var orig_type_42037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500_42036,(0),null);
var f_42038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500_42036,(1),null);
var seq__41460_42039 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42037,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42037,cljs.core.identity])));
var chunk__41462_42040 = null;
var count__41463_42041 = (0);
var i__41464_42042 = (0);
while(true){
if((i__41464_42042 < count__41463_42041)){
var vec__41512_42043 = chunk__41462_42040.cljs$core$IIndexed$_nth$arity$2(null,i__41464_42042);
var actual_type_42044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512_42043,(0),null);
var __42045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512_42043,(1),null);
var keys_42046 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42044,f_42038], null);
var canonical_f_42047 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42046);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42046], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42044),canonical_f_42047);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42044),canonical_f_42047);
}


var G__42048 = seq__41460_42039;
var G__42049 = chunk__41462_42040;
var G__42050 = count__41463_42041;
var G__42051 = (i__41464_42042 + (1));
seq__41460_42039 = G__42048;
chunk__41462_42040 = G__42049;
count__41463_42041 = G__42050;
i__41464_42042 = G__42051;
continue;
} else {
var temp__5735__auto___42052 = cljs.core.seq(seq__41460_42039);
if(temp__5735__auto___42052){
var seq__41460_42053__$1 = temp__5735__auto___42052;
if(cljs.core.chunked_seq_QMARK_(seq__41460_42053__$1)){
var c__4609__auto___42054 = cljs.core.chunk_first(seq__41460_42053__$1);
var G__42055 = cljs.core.chunk_rest(seq__41460_42053__$1);
var G__42056 = c__4609__auto___42054;
var G__42057 = cljs.core.count(c__4609__auto___42054);
var G__42058 = (0);
seq__41460_42039 = G__42055;
chunk__41462_42040 = G__42056;
count__41463_42041 = G__42057;
i__41464_42042 = G__42058;
continue;
} else {
var vec__41519_42059 = cljs.core.first(seq__41460_42053__$1);
var actual_type_42060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519_42059,(0),null);
var __42061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519_42059,(1),null);
var keys_42062 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42060,f_42038], null);
var canonical_f_42063 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42062);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42062], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42060),canonical_f_42063);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42060),canonical_f_42063);
}


var G__42064 = cljs.core.next(seq__41460_42053__$1);
var G__42065 = null;
var G__42066 = (0);
var G__42067 = (0);
seq__41460_42039 = G__42064;
chunk__41462_42040 = G__42065;
count__41463_42041 = G__42066;
i__41464_42042 = G__42067;
continue;
}
} else {
}
}
break;
}

var G__42068 = seq__41450_42032;
var G__42069 = chunk__41457_42033;
var G__42070 = count__41458_42034;
var G__42071 = (i__41459_42035 + (1));
seq__41450_42032 = G__42068;
chunk__41457_42033 = G__42069;
count__41458_42034 = G__42070;
i__41459_42035 = G__42071;
continue;
} else {
var temp__5735__auto___42072 = cljs.core.seq(seq__41450_42032);
if(temp__5735__auto___42072){
var seq__41450_42073__$1 = temp__5735__auto___42072;
if(cljs.core.chunked_seq_QMARK_(seq__41450_42073__$1)){
var c__4609__auto___42074 = cljs.core.chunk_first(seq__41450_42073__$1);
var G__42075 = cljs.core.chunk_rest(seq__41450_42073__$1);
var G__42076 = c__4609__auto___42074;
var G__42077 = cljs.core.count(c__4609__auto___42074);
var G__42078 = (0);
seq__41450_42032 = G__42075;
chunk__41457_42033 = G__42076;
count__41458_42034 = G__42077;
i__41459_42035 = G__42078;
continue;
} else {
var vec__41522_42079 = cljs.core.first(seq__41450_42073__$1);
var orig_type_42080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42079,(0),null);
var f_42081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42079,(1),null);
var seq__41451_42084 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42080,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42080,cljs.core.identity])));
var chunk__41453_42085 = null;
var count__41454_42086 = (0);
var i__41455_42087 = (0);
while(true){
if((i__41455_42087 < count__41454_42086)){
var vec__41531_42089 = chunk__41453_42085.cljs$core$IIndexed$_nth$arity$2(null,i__41455_42087);
var actual_type_42090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41531_42089,(0),null);
var __42091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41531_42089,(1),null);
var keys_42093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42090,f_42081], null);
var canonical_f_42094 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42093);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42093], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42090),canonical_f_42094);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42090),canonical_f_42094);
}


var G__42097 = seq__41451_42084;
var G__42098 = chunk__41453_42085;
var G__42099 = count__41454_42086;
var G__42100 = (i__41455_42087 + (1));
seq__41451_42084 = G__42097;
chunk__41453_42085 = G__42098;
count__41454_42086 = G__42099;
i__41455_42087 = G__42100;
continue;
} else {
var temp__5735__auto___42101__$1 = cljs.core.seq(seq__41451_42084);
if(temp__5735__auto___42101__$1){
var seq__41451_42102__$1 = temp__5735__auto___42101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41451_42102__$1)){
var c__4609__auto___42103 = cljs.core.chunk_first(seq__41451_42102__$1);
var G__42104 = cljs.core.chunk_rest(seq__41451_42102__$1);
var G__42105 = c__4609__auto___42103;
var G__42106 = cljs.core.count(c__4609__auto___42103);
var G__42107 = (0);
seq__41451_42084 = G__42104;
chunk__41453_42085 = G__42105;
count__41454_42086 = G__42106;
i__41455_42087 = G__42107;
continue;
} else {
var vec__41534_42108 = cljs.core.first(seq__41451_42102__$1);
var actual_type_42109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41534_42108,(0),null);
var __42110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41534_42108,(1),null);
var keys_42111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42109,f_42081], null);
var canonical_f_42112 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42111);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42111], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42109),canonical_f_42112);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42109),canonical_f_42112);
}


var G__42114 = cljs.core.next(seq__41451_42102__$1);
var G__42115 = null;
var G__42116 = (0);
var G__42117 = (0);
seq__41451_42084 = G__42114;
chunk__41453_42085 = G__42115;
count__41454_42086 = G__42116;
i__41455_42087 = G__42117;
continue;
}
} else {
}
}
break;
}

var G__42120 = cljs.core.next(seq__41450_42073__$1);
var G__42121 = null;
var G__42122 = (0);
var G__42123 = (0);
seq__41450_42032 = G__42120;
chunk__41457_42033 = G__42121;
count__41458_42034 = G__42122;
i__41459_42035 = G__42123;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41445){
var G__41446 = cljs.core.first(seq41445);
var seq41445__$1 = cljs.core.next(seq41445);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41446,seq41445__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42125 = arguments.length;
var i__4790__auto___42127 = (0);
while(true){
if((i__4790__auto___42127 < len__4789__auto___42125)){
args__4795__auto__.push((arguments[i__4790__auto___42127]));

var G__42130 = (i__4790__auto___42127 + (1));
i__4790__auto___42127 = G__42130;
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

var vec__41544_42131 = dommy.core.elem_and_selector(elem_sel);
var elem_42132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41544_42131,(0),null);
var selector_42133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41544_42131,(1),null);
var seq__41547_42134 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41548_42135 = null;
var count__41549_42136 = (0);
var i__41550_42137 = (0);
while(true){
if((i__41550_42137 < count__41549_42136)){
var vec__41557_42138 = chunk__41548_42135.cljs$core$IIndexed$_nth$arity$2(null,i__41550_42137);
var type_42139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557_42138,(0),null);
var f_42140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557_42138,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42139,((function (seq__41547_42134,chunk__41548_42135,count__41549_42136,i__41550_42137,vec__41557_42138,type_42139,f_42140,vec__41544_42131,elem_42132,selector_42133){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42139,dommy$core$this_fn], 0));

return (f_42140.cljs$core$IFn$_invoke$arity$1 ? f_42140.cljs$core$IFn$_invoke$arity$1(e) : f_42140.call(null,e));
});})(seq__41547_42134,chunk__41548_42135,count__41549_42136,i__41550_42137,vec__41557_42138,type_42139,f_42140,vec__41544_42131,elem_42132,selector_42133))
], 0));


var G__42148 = seq__41547_42134;
var G__42149 = chunk__41548_42135;
var G__42150 = count__41549_42136;
var G__42151 = (i__41550_42137 + (1));
seq__41547_42134 = G__42148;
chunk__41548_42135 = G__42149;
count__41549_42136 = G__42150;
i__41550_42137 = G__42151;
continue;
} else {
var temp__5735__auto___42152 = cljs.core.seq(seq__41547_42134);
if(temp__5735__auto___42152){
var seq__41547_42154__$1 = temp__5735__auto___42152;
if(cljs.core.chunked_seq_QMARK_(seq__41547_42154__$1)){
var c__4609__auto___42156 = cljs.core.chunk_first(seq__41547_42154__$1);
var G__42157 = cljs.core.chunk_rest(seq__41547_42154__$1);
var G__42158 = c__4609__auto___42156;
var G__42159 = cljs.core.count(c__4609__auto___42156);
var G__42160 = (0);
seq__41547_42134 = G__42157;
chunk__41548_42135 = G__42158;
count__41549_42136 = G__42159;
i__41550_42137 = G__42160;
continue;
} else {
var vec__41564_42163 = cljs.core.first(seq__41547_42154__$1);
var type_42164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41564_42163,(0),null);
var f_42165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41564_42163,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42164,((function (seq__41547_42134,chunk__41548_42135,count__41549_42136,i__41550_42137,vec__41564_42163,type_42164,f_42165,seq__41547_42154__$1,temp__5735__auto___42152,vec__41544_42131,elem_42132,selector_42133){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42164,dommy$core$this_fn], 0));

return (f_42165.cljs$core$IFn$_invoke$arity$1 ? f_42165.cljs$core$IFn$_invoke$arity$1(e) : f_42165.call(null,e));
});})(seq__41547_42134,chunk__41548_42135,count__41549_42136,i__41550_42137,vec__41564_42163,type_42164,f_42165,seq__41547_42154__$1,temp__5735__auto___42152,vec__41544_42131,elem_42132,selector_42133))
], 0));


var G__42168 = cljs.core.next(seq__41547_42154__$1);
var G__42169 = null;
var G__42170 = (0);
var G__42171 = (0);
seq__41547_42134 = G__42168;
chunk__41548_42135 = G__42169;
count__41549_42136 = G__42170;
i__41550_42137 = G__42171;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41540){
var G__41541 = cljs.core.first(seq41540);
var seq41540__$1 = cljs.core.next(seq41540);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41541,seq41540__$1);
}));


//# sourceMappingURL=dommy.core.js.map
