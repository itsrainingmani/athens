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
var G__41179 = arguments.length;
switch (G__41179) {
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
var G__41181 = arguments.length;
switch (G__41181) {
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
var G__41184 = arguments.length;
switch (G__41184) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41182_SHARP_){
return (!((p1__41182_SHARP_ === base)));
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
var len__4789__auto___41626 = arguments.length;
var i__4790__auto___41627 = (0);
while(true){
if((i__4790__auto___41627 < len__4789__auto___41626)){
args__4795__auto__.push((arguments[i__4790__auto___41627]));

var G__41628 = (i__4790__auto___41627 + (1));
i__4790__auto___41627 = G__41628;
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
var seq__41189_41629 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41190_41630 = null;
var count__41191_41631 = (0);
var i__41192_41632 = (0);
while(true){
if((i__41192_41632 < count__41191_41631)){
var vec__41199_41633 = chunk__41190_41630.cljs$core$IIndexed$_nth$arity$2(null,i__41192_41632);
var k_41634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41633,(0),null);
var v_41635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41633,(1),null);
style.setProperty(dommy.utils.as_str(k_41634),v_41635);


var G__41636 = seq__41189_41629;
var G__41637 = chunk__41190_41630;
var G__41638 = count__41191_41631;
var G__41639 = (i__41192_41632 + (1));
seq__41189_41629 = G__41636;
chunk__41190_41630 = G__41637;
count__41191_41631 = G__41638;
i__41192_41632 = G__41639;
continue;
} else {
var temp__5735__auto___41640 = cljs.core.seq(seq__41189_41629);
if(temp__5735__auto___41640){
var seq__41189_41641__$1 = temp__5735__auto___41640;
if(cljs.core.chunked_seq_QMARK_(seq__41189_41641__$1)){
var c__4609__auto___41642 = cljs.core.chunk_first(seq__41189_41641__$1);
var G__41643 = cljs.core.chunk_rest(seq__41189_41641__$1);
var G__41644 = c__4609__auto___41642;
var G__41645 = cljs.core.count(c__4609__auto___41642);
var G__41646 = (0);
seq__41189_41629 = G__41643;
chunk__41190_41630 = G__41644;
count__41191_41631 = G__41645;
i__41192_41632 = G__41646;
continue;
} else {
var vec__41202_41647 = cljs.core.first(seq__41189_41641__$1);
var k_41648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41647,(0),null);
var v_41649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41647,(1),null);
style.setProperty(dommy.utils.as_str(k_41648),v_41649);


var G__41650 = cljs.core.next(seq__41189_41641__$1);
var G__41651 = null;
var G__41652 = (0);
var G__41653 = (0);
seq__41189_41629 = G__41650;
chunk__41190_41630 = G__41651;
count__41191_41631 = G__41652;
i__41192_41632 = G__41653;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41187){
var G__41188 = cljs.core.first(seq41187);
var seq41187__$1 = cljs.core.next(seq41187);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41188,seq41187__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41654 = arguments.length;
var i__4790__auto___41655 = (0);
while(true){
if((i__4790__auto___41655 < len__4789__auto___41654)){
args__4795__auto__.push((arguments[i__4790__auto___41655]));

var G__41656 = (i__4790__auto___41655 + (1));
i__4790__auto___41655 = G__41656;
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
var seq__41207_41657 = cljs.core.seq(keywords);
var chunk__41208_41658 = null;
var count__41209_41659 = (0);
var i__41210_41660 = (0);
while(true){
if((i__41210_41660 < count__41209_41659)){
var kw_41661 = chunk__41208_41658.cljs$core$IIndexed$_nth$arity$2(null,i__41210_41660);
style.removeProperty(dommy.utils.as_str(kw_41661));


var G__41662 = seq__41207_41657;
var G__41663 = chunk__41208_41658;
var G__41664 = count__41209_41659;
var G__41665 = (i__41210_41660 + (1));
seq__41207_41657 = G__41662;
chunk__41208_41658 = G__41663;
count__41209_41659 = G__41664;
i__41210_41660 = G__41665;
continue;
} else {
var temp__5735__auto___41666 = cljs.core.seq(seq__41207_41657);
if(temp__5735__auto___41666){
var seq__41207_41667__$1 = temp__5735__auto___41666;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41667__$1)){
var c__4609__auto___41668 = cljs.core.chunk_first(seq__41207_41667__$1);
var G__41669 = cljs.core.chunk_rest(seq__41207_41667__$1);
var G__41670 = c__4609__auto___41668;
var G__41671 = cljs.core.count(c__4609__auto___41668);
var G__41672 = (0);
seq__41207_41657 = G__41669;
chunk__41208_41658 = G__41670;
count__41209_41659 = G__41671;
i__41210_41660 = G__41672;
continue;
} else {
var kw_41673 = cljs.core.first(seq__41207_41667__$1);
style.removeProperty(dommy.utils.as_str(kw_41673));


var G__41674 = cljs.core.next(seq__41207_41667__$1);
var G__41675 = null;
var G__41676 = (0);
var G__41677 = (0);
seq__41207_41657 = G__41674;
chunk__41208_41658 = G__41675;
count__41209_41659 = G__41676;
i__41210_41660 = G__41677;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41205){
var G__41206 = cljs.core.first(seq41205);
var seq41205__$1 = cljs.core.next(seq41205);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41206,seq41205__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41678 = arguments.length;
var i__4790__auto___41679 = (0);
while(true){
if((i__4790__auto___41679 < len__4789__auto___41678)){
args__4795__auto__.push((arguments[i__4790__auto___41679]));

var G__41680 = (i__4790__auto___41679 + (1));
i__4790__auto___41679 = G__41680;
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

var seq__41214_41681 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41215_41682 = null;
var count__41216_41683 = (0);
var i__41217_41684 = (0);
while(true){
if((i__41217_41684 < count__41216_41683)){
var vec__41224_41685 = chunk__41215_41682.cljs$core$IIndexed$_nth$arity$2(null,i__41217_41684);
var k_41686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41685,(0),null);
var v_41687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41685,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41686,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41687),"px"].join('')], 0));


var G__41688 = seq__41214_41681;
var G__41689 = chunk__41215_41682;
var G__41690 = count__41216_41683;
var G__41691 = (i__41217_41684 + (1));
seq__41214_41681 = G__41688;
chunk__41215_41682 = G__41689;
count__41216_41683 = G__41690;
i__41217_41684 = G__41691;
continue;
} else {
var temp__5735__auto___41692 = cljs.core.seq(seq__41214_41681);
if(temp__5735__auto___41692){
var seq__41214_41693__$1 = temp__5735__auto___41692;
if(cljs.core.chunked_seq_QMARK_(seq__41214_41693__$1)){
var c__4609__auto___41694 = cljs.core.chunk_first(seq__41214_41693__$1);
var G__41695 = cljs.core.chunk_rest(seq__41214_41693__$1);
var G__41696 = c__4609__auto___41694;
var G__41697 = cljs.core.count(c__4609__auto___41694);
var G__41698 = (0);
seq__41214_41681 = G__41695;
chunk__41215_41682 = G__41696;
count__41216_41683 = G__41697;
i__41217_41684 = G__41698;
continue;
} else {
var vec__41227_41699 = cljs.core.first(seq__41214_41693__$1);
var k_41700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41699,(0),null);
var v_41701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41699,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41700,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41701),"px"].join('')], 0));


var G__41702 = cljs.core.next(seq__41214_41693__$1);
var G__41703 = null;
var G__41704 = (0);
var G__41705 = (0);
seq__41214_41681 = G__41702;
chunk__41215_41682 = G__41703;
count__41216_41683 = G__41704;
i__41217_41684 = G__41705;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41212){
var G__41213 = cljs.core.first(seq41212);
var seq41212__$1 = cljs.core.next(seq41212);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41213,seq41212__$1);
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
var G__41235 = arguments.length;
switch (G__41235) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41707 = arguments.length;
var i__4790__auto___41708 = (0);
while(true){
if((i__4790__auto___41708 < len__4789__auto___41707)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41708]));

var G__41709 = (i__4790__auto___41708 + (1));
i__4790__auto___41708 = G__41709;
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
var G__41236 = elem;
(G__41236[k__$1] = v);

return G__41236;
} else {
var G__41237 = elem;
G__41237.setAttribute(k__$1,v);

return G__41237;
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

var seq__41238_41710 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41239_41711 = null;
var count__41240_41712 = (0);
var i__41241_41713 = (0);
while(true){
if((i__41241_41713 < count__41240_41712)){
var vec__41248_41714 = chunk__41239_41711.cljs$core$IIndexed$_nth$arity$2(null,i__41241_41713);
var k_41715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41714,(0),null);
var v_41716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41714,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41715__$1,v_41716__$1);


var G__41717 = seq__41238_41710;
var G__41718 = chunk__41239_41711;
var G__41719 = count__41240_41712;
var G__41720 = (i__41241_41713 + (1));
seq__41238_41710 = G__41717;
chunk__41239_41711 = G__41718;
count__41240_41712 = G__41719;
i__41241_41713 = G__41720;
continue;
} else {
var temp__5735__auto___41721 = cljs.core.seq(seq__41238_41710);
if(temp__5735__auto___41721){
var seq__41238_41722__$1 = temp__5735__auto___41721;
if(cljs.core.chunked_seq_QMARK_(seq__41238_41722__$1)){
var c__4609__auto___41723 = cljs.core.chunk_first(seq__41238_41722__$1);
var G__41724 = cljs.core.chunk_rest(seq__41238_41722__$1);
var G__41725 = c__4609__auto___41723;
var G__41726 = cljs.core.count(c__4609__auto___41723);
var G__41727 = (0);
seq__41238_41710 = G__41724;
chunk__41239_41711 = G__41725;
count__41240_41712 = G__41726;
i__41241_41713 = G__41727;
continue;
} else {
var vec__41251_41728 = cljs.core.first(seq__41238_41722__$1);
var k_41729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41728,(0),null);
var v_41730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41728,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41729__$1,v_41730__$1);


var G__41731 = cljs.core.next(seq__41238_41722__$1);
var G__41732 = null;
var G__41733 = (0);
var G__41734 = (0);
seq__41238_41710 = G__41731;
chunk__41239_41711 = G__41732;
count__41240_41712 = G__41733;
i__41241_41713 = G__41734;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41231){
var G__41232 = cljs.core.first(seq41231);
var seq41231__$1 = cljs.core.next(seq41231);
var G__41233 = cljs.core.first(seq41231__$1);
var seq41231__$2 = cljs.core.next(seq41231__$1);
var G__41234 = cljs.core.first(seq41231__$2);
var seq41231__$3 = cljs.core.next(seq41231__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41232,G__41233,G__41234,seq41231__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41258 = arguments.length;
switch (G__41258) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41737 = arguments.length;
var i__4790__auto___41738 = (0);
while(true){
if((i__4790__auto___41738 < len__4789__auto___41737)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41738]));

var G__41740 = (i__4790__auto___41738 + (1));
i__4790__auto___41738 = G__41740;
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
var k_41741__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41259.cljs$core$IFn$_invoke$arity$1 ? fexpr__41259.cljs$core$IFn$_invoke$arity$1(k_41741__$1) : fexpr__41259.call(null,k_41741__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41741__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41260_41742 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41261_41743 = null;
var count__41262_41744 = (0);
var i__41263_41745 = (0);
while(true){
if((i__41263_41745 < count__41262_41744)){
var k_41746__$1 = chunk__41261_41743.cljs$core$IIndexed$_nth$arity$2(null,i__41263_41745);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41746__$1);


var G__41747 = seq__41260_41742;
var G__41748 = chunk__41261_41743;
var G__41749 = count__41262_41744;
var G__41750 = (i__41263_41745 + (1));
seq__41260_41742 = G__41747;
chunk__41261_41743 = G__41748;
count__41262_41744 = G__41749;
i__41263_41745 = G__41750;
continue;
} else {
var temp__5735__auto___41751 = cljs.core.seq(seq__41260_41742);
if(temp__5735__auto___41751){
var seq__41260_41752__$1 = temp__5735__auto___41751;
if(cljs.core.chunked_seq_QMARK_(seq__41260_41752__$1)){
var c__4609__auto___41753 = cljs.core.chunk_first(seq__41260_41752__$1);
var G__41754 = cljs.core.chunk_rest(seq__41260_41752__$1);
var G__41755 = c__4609__auto___41753;
var G__41756 = cljs.core.count(c__4609__auto___41753);
var G__41757 = (0);
seq__41260_41742 = G__41754;
chunk__41261_41743 = G__41755;
count__41262_41744 = G__41756;
i__41263_41745 = G__41757;
continue;
} else {
var k_41758__$1 = cljs.core.first(seq__41260_41752__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41758__$1);


var G__41759 = cljs.core.next(seq__41260_41752__$1);
var G__41760 = null;
var G__41761 = (0);
var G__41762 = (0);
seq__41260_41742 = G__41759;
chunk__41261_41743 = G__41760;
count__41262_41744 = G__41761;
i__41263_41745 = G__41762;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41255){
var G__41256 = cljs.core.first(seq41255);
var seq41255__$1 = cljs.core.next(seq41255);
var G__41257 = cljs.core.first(seq41255__$1);
var seq41255__$2 = cljs.core.next(seq41255__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41256,G__41257,seq41255__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
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
var G__41270 = arguments.length;
switch (G__41270) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41767 = arguments.length;
var i__4790__auto___41768 = (0);
while(true){
if((i__4790__auto___41768 < len__4789__auto___41767)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41768]));

var G__41769 = (i__4790__auto___41768 + (1));
i__4790__auto___41768 = G__41769;
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
var temp__5733__auto___41771 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41771)){
var class_list_41773 = temp__5733__auto___41771;
var seq__41271_41774 = cljs.core.seq(classes__$1);
var chunk__41272_41775 = null;
var count__41273_41776 = (0);
var i__41274_41777 = (0);
while(true){
if((i__41274_41777 < count__41273_41776)){
var c_41778 = chunk__41272_41775.cljs$core$IIndexed$_nth$arity$2(null,i__41274_41777);
class_list_41773.add(c_41778);


var G__41779 = seq__41271_41774;
var G__41780 = chunk__41272_41775;
var G__41781 = count__41273_41776;
var G__41782 = (i__41274_41777 + (1));
seq__41271_41774 = G__41779;
chunk__41272_41775 = G__41780;
count__41273_41776 = G__41781;
i__41274_41777 = G__41782;
continue;
} else {
var temp__5735__auto___41783 = cljs.core.seq(seq__41271_41774);
if(temp__5735__auto___41783){
var seq__41271_41784__$1 = temp__5735__auto___41783;
if(cljs.core.chunked_seq_QMARK_(seq__41271_41784__$1)){
var c__4609__auto___41785 = cljs.core.chunk_first(seq__41271_41784__$1);
var G__41786 = cljs.core.chunk_rest(seq__41271_41784__$1);
var G__41787 = c__4609__auto___41785;
var G__41788 = cljs.core.count(c__4609__auto___41785);
var G__41789 = (0);
seq__41271_41774 = G__41786;
chunk__41272_41775 = G__41787;
count__41273_41776 = G__41788;
i__41274_41777 = G__41789;
continue;
} else {
var c_41790 = cljs.core.first(seq__41271_41784__$1);
class_list_41773.add(c_41790);


var G__41791 = cljs.core.next(seq__41271_41784__$1);
var G__41792 = null;
var G__41793 = (0);
var G__41794 = (0);
seq__41271_41774 = G__41791;
chunk__41272_41775 = G__41792;
count__41273_41776 = G__41793;
i__41274_41777 = G__41794;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41275_41795 = cljs.core.seq(classes__$1);
var chunk__41276_41796 = null;
var count__41277_41797 = (0);
var i__41278_41798 = (0);
while(true){
if((i__41278_41798 < count__41277_41797)){
var c_41799 = chunk__41276_41796.cljs$core$IIndexed$_nth$arity$2(null,i__41278_41798);
var class_name_41800 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41800,c_41799))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41800 === ""))?c_41799:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41800)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41799)].join('')));
}


var G__41801 = seq__41275_41795;
var G__41802 = chunk__41276_41796;
var G__41803 = count__41277_41797;
var G__41804 = (i__41278_41798 + (1));
seq__41275_41795 = G__41801;
chunk__41276_41796 = G__41802;
count__41277_41797 = G__41803;
i__41278_41798 = G__41804;
continue;
} else {
var temp__5735__auto___41805 = cljs.core.seq(seq__41275_41795);
if(temp__5735__auto___41805){
var seq__41275_41806__$1 = temp__5735__auto___41805;
if(cljs.core.chunked_seq_QMARK_(seq__41275_41806__$1)){
var c__4609__auto___41807 = cljs.core.chunk_first(seq__41275_41806__$1);
var G__41808 = cljs.core.chunk_rest(seq__41275_41806__$1);
var G__41809 = c__4609__auto___41807;
var G__41810 = cljs.core.count(c__4609__auto___41807);
var G__41811 = (0);
seq__41275_41795 = G__41808;
chunk__41276_41796 = G__41809;
count__41277_41797 = G__41810;
i__41278_41798 = G__41811;
continue;
} else {
var c_41812 = cljs.core.first(seq__41275_41806__$1);
var class_name_41813 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41813,c_41812))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41813 === ""))?c_41812:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41813)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41812)].join('')));
}


var G__41814 = cljs.core.next(seq__41275_41806__$1);
var G__41815 = null;
var G__41816 = (0);
var G__41817 = (0);
seq__41275_41795 = G__41814;
chunk__41276_41796 = G__41815;
count__41277_41797 = G__41816;
i__41278_41798 = G__41817;
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
var seq__41279_41818 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41280_41819 = null;
var count__41281_41820 = (0);
var i__41282_41821 = (0);
while(true){
if((i__41282_41821 < count__41281_41820)){
var c_41822 = chunk__41280_41819.cljs$core$IIndexed$_nth$arity$2(null,i__41282_41821);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41822);


var G__41823 = seq__41279_41818;
var G__41824 = chunk__41280_41819;
var G__41825 = count__41281_41820;
var G__41826 = (i__41282_41821 + (1));
seq__41279_41818 = G__41823;
chunk__41280_41819 = G__41824;
count__41281_41820 = G__41825;
i__41282_41821 = G__41826;
continue;
} else {
var temp__5735__auto___41827 = cljs.core.seq(seq__41279_41818);
if(temp__5735__auto___41827){
var seq__41279_41828__$1 = temp__5735__auto___41827;
if(cljs.core.chunked_seq_QMARK_(seq__41279_41828__$1)){
var c__4609__auto___41829 = cljs.core.chunk_first(seq__41279_41828__$1);
var G__41830 = cljs.core.chunk_rest(seq__41279_41828__$1);
var G__41831 = c__4609__auto___41829;
var G__41832 = cljs.core.count(c__4609__auto___41829);
var G__41833 = (0);
seq__41279_41818 = G__41830;
chunk__41280_41819 = G__41831;
count__41281_41820 = G__41832;
i__41282_41821 = G__41833;
continue;
} else {
var c_41834 = cljs.core.first(seq__41279_41828__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41834);


var G__41835 = cljs.core.next(seq__41279_41828__$1);
var G__41836 = null;
var G__41837 = (0);
var G__41838 = (0);
seq__41279_41818 = G__41835;
chunk__41280_41819 = G__41836;
count__41281_41820 = G__41837;
i__41282_41821 = G__41838;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41267){
var G__41268 = cljs.core.first(seq41267);
var seq41267__$1 = cljs.core.next(seq41267);
var G__41269 = cljs.core.first(seq41267__$1);
var seq41267__$2 = cljs.core.next(seq41267__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41268,G__41269,seq41267__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41287 = arguments.length;
switch (G__41287) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41840 = arguments.length;
var i__4790__auto___41841 = (0);
while(true){
if((i__4790__auto___41841 < len__4789__auto___41840)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41841]));

var G__41842 = (i__4790__auto___41841 + (1));
i__4790__auto___41841 = G__41842;
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
var temp__5733__auto___41843 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41843)){
var class_list_41844 = temp__5733__auto___41843;
class_list_41844.remove(c__$1);
} else {
var class_name_41845 = dommy.core.class$(elem);
var new_class_name_41846 = dommy.utils.remove_class_str(class_name_41845,c__$1);
if((class_name_41845 === new_class_name_41846)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41846);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41288 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41289 = null;
var count__41290 = (0);
var i__41291 = (0);
while(true){
if((i__41291 < count__41290)){
var c = chunk__41289.cljs$core$IIndexed$_nth$arity$2(null,i__41291);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41847 = seq__41288;
var G__41848 = chunk__41289;
var G__41849 = count__41290;
var G__41850 = (i__41291 + (1));
seq__41288 = G__41847;
chunk__41289 = G__41848;
count__41290 = G__41849;
i__41291 = G__41850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41288);
if(temp__5735__auto__){
var seq__41288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41288__$1);
var G__41851 = cljs.core.chunk_rest(seq__41288__$1);
var G__41852 = c__4609__auto__;
var G__41853 = cljs.core.count(c__4609__auto__);
var G__41854 = (0);
seq__41288 = G__41851;
chunk__41289 = G__41852;
count__41290 = G__41853;
i__41291 = G__41854;
continue;
} else {
var c = cljs.core.first(seq__41288__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41855 = cljs.core.next(seq__41288__$1);
var G__41856 = null;
var G__41857 = (0);
var G__41858 = (0);
seq__41288 = G__41855;
chunk__41289 = G__41856;
count__41290 = G__41857;
i__41291 = G__41858;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41284){
var G__41285 = cljs.core.first(seq41284);
var seq41284__$1 = cljs.core.next(seq41284);
var G__41286 = cljs.core.first(seq41284__$1);
var seq41284__$2 = cljs.core.next(seq41284__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41285,G__41286,seq41284__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41293 = arguments.length;
switch (G__41293) {
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
var temp__5733__auto___41860 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41860)){
var class_list_41861 = temp__5733__auto___41860;
class_list_41861.toggle(c__$1);
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
var G__41296 = arguments.length;
switch (G__41296) {
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
var G__41300 = arguments.length;
switch (G__41300) {
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
var G__41305 = arguments.length;
switch (G__41305) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41865 = arguments.length;
var i__4790__auto___41866 = (0);
while(true){
if((i__4790__auto___41866 < len__4789__auto___41865)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41866]));

var G__41867 = (i__4790__auto___41866 + (1));
i__4790__auto___41866 = G__41867;
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
var G__41306 = parent;
G__41306.appendChild(child);

return G__41306;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41307_41869 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41308_41870 = null;
var count__41309_41871 = (0);
var i__41310_41872 = (0);
while(true){
if((i__41310_41872 < count__41309_41871)){
var c_41873 = chunk__41308_41870.cljs$core$IIndexed$_nth$arity$2(null,i__41310_41872);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41873);


var G__41875 = seq__41307_41869;
var G__41876 = chunk__41308_41870;
var G__41877 = count__41309_41871;
var G__41878 = (i__41310_41872 + (1));
seq__41307_41869 = G__41875;
chunk__41308_41870 = G__41876;
count__41309_41871 = G__41877;
i__41310_41872 = G__41878;
continue;
} else {
var temp__5735__auto___41879 = cljs.core.seq(seq__41307_41869);
if(temp__5735__auto___41879){
var seq__41307_41880__$1 = temp__5735__auto___41879;
if(cljs.core.chunked_seq_QMARK_(seq__41307_41880__$1)){
var c__4609__auto___41881 = cljs.core.chunk_first(seq__41307_41880__$1);
var G__41882 = cljs.core.chunk_rest(seq__41307_41880__$1);
var G__41883 = c__4609__auto___41881;
var G__41884 = cljs.core.count(c__4609__auto___41881);
var G__41885 = (0);
seq__41307_41869 = G__41882;
chunk__41308_41870 = G__41883;
count__41309_41871 = G__41884;
i__41310_41872 = G__41885;
continue;
} else {
var c_41886 = cljs.core.first(seq__41307_41880__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41886);


var G__41887 = cljs.core.next(seq__41307_41880__$1);
var G__41888 = null;
var G__41889 = (0);
var G__41890 = (0);
seq__41307_41869 = G__41887;
chunk__41308_41870 = G__41888;
count__41309_41871 = G__41889;
i__41310_41872 = G__41890;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first(seq41302);
var seq41302__$1 = cljs.core.next(seq41302);
var G__41304 = cljs.core.first(seq41302__$1);
var seq41302__$2 = cljs.core.next(seq41302__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41315 = arguments.length;
switch (G__41315) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41893 = arguments.length;
var i__4790__auto___41894 = (0);
while(true){
if((i__4790__auto___41894 < len__4789__auto___41893)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41894]));

var G__41896 = (i__4790__auto___41894 + (1));
i__4790__auto___41894 = G__41896;
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
var G__41316 = parent;
G__41316.insertBefore(child,parent.firstChild);

return G__41316;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41317_41899 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41318_41900 = null;
var count__41319_41901 = (0);
var i__41320_41902 = (0);
while(true){
if((i__41320_41902 < count__41319_41901)){
var c_41903 = chunk__41318_41900.cljs$core$IIndexed$_nth$arity$2(null,i__41320_41902);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41903);


var G__41904 = seq__41317_41899;
var G__41905 = chunk__41318_41900;
var G__41906 = count__41319_41901;
var G__41907 = (i__41320_41902 + (1));
seq__41317_41899 = G__41904;
chunk__41318_41900 = G__41905;
count__41319_41901 = G__41906;
i__41320_41902 = G__41907;
continue;
} else {
var temp__5735__auto___41908 = cljs.core.seq(seq__41317_41899);
if(temp__5735__auto___41908){
var seq__41317_41909__$1 = temp__5735__auto___41908;
if(cljs.core.chunked_seq_QMARK_(seq__41317_41909__$1)){
var c__4609__auto___41911 = cljs.core.chunk_first(seq__41317_41909__$1);
var G__41912 = cljs.core.chunk_rest(seq__41317_41909__$1);
var G__41913 = c__4609__auto___41911;
var G__41914 = cljs.core.count(c__4609__auto___41911);
var G__41915 = (0);
seq__41317_41899 = G__41912;
chunk__41318_41900 = G__41913;
count__41319_41901 = G__41914;
i__41320_41902 = G__41915;
continue;
} else {
var c_41920 = cljs.core.first(seq__41317_41909__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41920);


var G__41921 = cljs.core.next(seq__41317_41909__$1);
var G__41922 = null;
var G__41923 = (0);
var G__41924 = (0);
seq__41317_41899 = G__41921;
chunk__41318_41900 = G__41922;
count__41319_41901 = G__41923;
i__41320_41902 = G__41924;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41312){
var G__41313 = cljs.core.first(seq41312);
var seq41312__$1 = cljs.core.next(seq41312);
var G__41314 = cljs.core.first(seq41312__$1);
var seq41312__$2 = cljs.core.next(seq41312__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41313,G__41314,seq41312__$2);
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
var temp__5733__auto___41927 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41927)){
var next_41928 = temp__5733__auto___41927;
dommy.core.insert_before_BANG_(elem,next_41928);
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
var G__41322 = arguments.length;
switch (G__41322) {
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
var G__41323 = p;
G__41323.removeChild(elem);

return G__41323;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41324){
var vec__41325 = p__41324;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41325,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41325,(1),null);
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
var len__4789__auto___41944 = arguments.length;
var i__4790__auto___41945 = (0);
while(true){
if((i__4790__auto___41945 < len__4789__auto___41944)){
args__4795__auto__.push((arguments[i__4790__auto___41945]));

var G__41946 = (i__4790__auto___41945 + (1));
i__4790__auto___41945 = G__41946;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41328){
var G__41329 = cljs.core.first(seq41328);
var seq41328__$1 = cljs.core.next(seq41328);
var G__41330 = cljs.core.first(seq41328__$1);
var seq41328__$2 = cljs.core.next(seq41328__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41329,G__41330,seq41328__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41331 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41331.cljs$core$IFn$_invoke$arity$1 ? fexpr__41331.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41331.call(null,elem_sel));
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
var len__4789__auto___41947 = arguments.length;
var i__4790__auto___41948 = (0);
while(true){
if((i__4790__auto___41948 < len__4789__auto___41947)){
args__4795__auto__.push((arguments[i__4790__auto___41948]));

var G__41949 = (i__4790__auto___41948 + (1));
i__4790__auto___41948 = G__41949;
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

var vec__41334_41950 = dommy.core.elem_and_selector(elem_sel);
var elem_41951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41334_41950,(0),null);
var selector_41952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41334_41950,(1),null);
var seq__41337_41953 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41344_41954 = null;
var count__41345_41955 = (0);
var i__41346_41956 = (0);
while(true){
if((i__41346_41956 < count__41345_41955)){
var vec__41405_41957 = chunk__41344_41954.cljs$core$IIndexed$_nth$arity$2(null,i__41346_41956);
var orig_type_41958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405_41957,(0),null);
var f_41959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405_41957,(1),null);
var seq__41347_41960 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41958,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41958,cljs.core.identity])));
var chunk__41349_41961 = null;
var count__41350_41962 = (0);
var i__41351_41963 = (0);
while(true){
if((i__41351_41963 < count__41350_41962)){
var vec__41418_41964 = chunk__41349_41961.cljs$core$IIndexed$_nth$arity$2(null,i__41351_41963);
var actual_type_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41964,(0),null);
var factory_41966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41964,(1),null);
var canonical_f_41967 = (function (){var G__41422 = (factory_41966.cljs$core$IFn$_invoke$arity$1 ? factory_41966.cljs$core$IFn$_invoke$arity$1(f_41959) : factory_41966.call(null,f_41959));
var fexpr__41421 = (cljs.core.truth_(selector_41952)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41951,selector_41952):cljs.core.identity);
return (fexpr__41421.cljs$core$IFn$_invoke$arity$1 ? fexpr__41421.cljs$core$IFn$_invoke$arity$1(G__41422) : fexpr__41421.call(null,G__41422));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41951,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41952,actual_type_41965,f_41959], null),canonical_f_41967], 0));

if(cljs.core.truth_(elem_41951.addEventListener)){
elem_41951.addEventListener(cljs.core.name(actual_type_41965),canonical_f_41967);
} else {
elem_41951.attachEvent(cljs.core.name(actual_type_41965),canonical_f_41967);
}


var G__41968 = seq__41347_41960;
var G__41969 = chunk__41349_41961;
var G__41970 = count__41350_41962;
var G__41971 = (i__41351_41963 + (1));
seq__41347_41960 = G__41968;
chunk__41349_41961 = G__41969;
count__41350_41962 = G__41970;
i__41351_41963 = G__41971;
continue;
} else {
var temp__5735__auto___41972 = cljs.core.seq(seq__41347_41960);
if(temp__5735__auto___41972){
var seq__41347_41973__$1 = temp__5735__auto___41972;
if(cljs.core.chunked_seq_QMARK_(seq__41347_41973__$1)){
var c__4609__auto___41974 = cljs.core.chunk_first(seq__41347_41973__$1);
var G__41975 = cljs.core.chunk_rest(seq__41347_41973__$1);
var G__41976 = c__4609__auto___41974;
var G__41977 = cljs.core.count(c__4609__auto___41974);
var G__41978 = (0);
seq__41347_41960 = G__41975;
chunk__41349_41961 = G__41976;
count__41350_41962 = G__41977;
i__41351_41963 = G__41978;
continue;
} else {
var vec__41423_41979 = cljs.core.first(seq__41347_41973__$1);
var actual_type_41980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41423_41979,(0),null);
var factory_41981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41423_41979,(1),null);
var canonical_f_41982 = (function (){var G__41427 = (factory_41981.cljs$core$IFn$_invoke$arity$1 ? factory_41981.cljs$core$IFn$_invoke$arity$1(f_41959) : factory_41981.call(null,f_41959));
var fexpr__41426 = (cljs.core.truth_(selector_41952)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41951,selector_41952):cljs.core.identity);
return (fexpr__41426.cljs$core$IFn$_invoke$arity$1 ? fexpr__41426.cljs$core$IFn$_invoke$arity$1(G__41427) : fexpr__41426.call(null,G__41427));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41951,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41952,actual_type_41980,f_41959], null),canonical_f_41982], 0));

if(cljs.core.truth_(elem_41951.addEventListener)){
elem_41951.addEventListener(cljs.core.name(actual_type_41980),canonical_f_41982);
} else {
elem_41951.attachEvent(cljs.core.name(actual_type_41980),canonical_f_41982);
}


var G__41983 = cljs.core.next(seq__41347_41973__$1);
var G__41984 = null;
var G__41985 = (0);
var G__41986 = (0);
seq__41347_41960 = G__41983;
chunk__41349_41961 = G__41984;
count__41350_41962 = G__41985;
i__41351_41963 = G__41986;
continue;
}
} else {
}
}
break;
}

var G__41987 = seq__41337_41953;
var G__41988 = chunk__41344_41954;
var G__41989 = count__41345_41955;
var G__41990 = (i__41346_41956 + (1));
seq__41337_41953 = G__41987;
chunk__41344_41954 = G__41988;
count__41345_41955 = G__41989;
i__41346_41956 = G__41990;
continue;
} else {
var temp__5735__auto___41991 = cljs.core.seq(seq__41337_41953);
if(temp__5735__auto___41991){
var seq__41337_41992__$1 = temp__5735__auto___41991;
if(cljs.core.chunked_seq_QMARK_(seq__41337_41992__$1)){
var c__4609__auto___41993 = cljs.core.chunk_first(seq__41337_41992__$1);
var G__41994 = cljs.core.chunk_rest(seq__41337_41992__$1);
var G__41995 = c__4609__auto___41993;
var G__41996 = cljs.core.count(c__4609__auto___41993);
var G__41997 = (0);
seq__41337_41953 = G__41994;
chunk__41344_41954 = G__41995;
count__41345_41955 = G__41996;
i__41346_41956 = G__41997;
continue;
} else {
var vec__41428_41998 = cljs.core.first(seq__41337_41992__$1);
var orig_type_41999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428_41998,(0),null);
var f_42000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428_41998,(1),null);
var seq__41338_42001 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41999,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41999,cljs.core.identity])));
var chunk__41340_42002 = null;
var count__41341_42003 = (0);
var i__41342_42004 = (0);
while(true){
if((i__41342_42004 < count__41341_42003)){
var vec__41441_42005 = chunk__41340_42002.cljs$core$IIndexed$_nth$arity$2(null,i__41342_42004);
var actual_type_42006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41441_42005,(0),null);
var factory_42007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41441_42005,(1),null);
var canonical_f_42008 = (function (){var G__41445 = (factory_42007.cljs$core$IFn$_invoke$arity$1 ? factory_42007.cljs$core$IFn$_invoke$arity$1(f_42000) : factory_42007.call(null,f_42000));
var fexpr__41444 = (cljs.core.truth_(selector_41952)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41951,selector_41952):cljs.core.identity);
return (fexpr__41444.cljs$core$IFn$_invoke$arity$1 ? fexpr__41444.cljs$core$IFn$_invoke$arity$1(G__41445) : fexpr__41444.call(null,G__41445));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41951,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41952,actual_type_42006,f_42000], null),canonical_f_42008], 0));

if(cljs.core.truth_(elem_41951.addEventListener)){
elem_41951.addEventListener(cljs.core.name(actual_type_42006),canonical_f_42008);
} else {
elem_41951.attachEvent(cljs.core.name(actual_type_42006),canonical_f_42008);
}


var G__42009 = seq__41338_42001;
var G__42010 = chunk__41340_42002;
var G__42011 = count__41341_42003;
var G__42012 = (i__41342_42004 + (1));
seq__41338_42001 = G__42009;
chunk__41340_42002 = G__42010;
count__41341_42003 = G__42011;
i__41342_42004 = G__42012;
continue;
} else {
var temp__5735__auto___42013__$1 = cljs.core.seq(seq__41338_42001);
if(temp__5735__auto___42013__$1){
var seq__41338_42014__$1 = temp__5735__auto___42013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41338_42014__$1)){
var c__4609__auto___42015 = cljs.core.chunk_first(seq__41338_42014__$1);
var G__42016 = cljs.core.chunk_rest(seq__41338_42014__$1);
var G__42017 = c__4609__auto___42015;
var G__42018 = cljs.core.count(c__4609__auto___42015);
var G__42019 = (0);
seq__41338_42001 = G__42016;
chunk__41340_42002 = G__42017;
count__41341_42003 = G__42018;
i__41342_42004 = G__42019;
continue;
} else {
var vec__41450_42020 = cljs.core.first(seq__41338_42014__$1);
var actual_type_42021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_42020,(0),null);
var factory_42022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_42020,(1),null);
var canonical_f_42023 = (function (){var G__41454 = (factory_42022.cljs$core$IFn$_invoke$arity$1 ? factory_42022.cljs$core$IFn$_invoke$arity$1(f_42000) : factory_42022.call(null,f_42000));
var fexpr__41453 = (cljs.core.truth_(selector_41952)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41951,selector_41952):cljs.core.identity);
return (fexpr__41453.cljs$core$IFn$_invoke$arity$1 ? fexpr__41453.cljs$core$IFn$_invoke$arity$1(G__41454) : fexpr__41453.call(null,G__41454));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41951,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41952,actual_type_42021,f_42000], null),canonical_f_42023], 0));

if(cljs.core.truth_(elem_41951.addEventListener)){
elem_41951.addEventListener(cljs.core.name(actual_type_42021),canonical_f_42023);
} else {
elem_41951.attachEvent(cljs.core.name(actual_type_42021),canonical_f_42023);
}


var G__42024 = cljs.core.next(seq__41338_42014__$1);
var G__42025 = null;
var G__42026 = (0);
var G__42027 = (0);
seq__41338_42001 = G__42024;
chunk__41340_42002 = G__42025;
count__41341_42003 = G__42026;
i__41342_42004 = G__42027;
continue;
}
} else {
}
}
break;
}

var G__42028 = cljs.core.next(seq__41337_41992__$1);
var G__42029 = null;
var G__42030 = (0);
var G__42031 = (0);
seq__41337_41953 = G__42028;
chunk__41344_41954 = G__42029;
count__41345_41955 = G__42030;
i__41346_41956 = G__42031;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41332){
var G__41333 = cljs.core.first(seq41332);
var seq41332__$1 = cljs.core.next(seq41332);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41333,seq41332__$1);
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
var len__4789__auto___42032 = arguments.length;
var i__4790__auto___42033 = (0);
while(true){
if((i__4790__auto___42033 < len__4789__auto___42032)){
args__4795__auto__.push((arguments[i__4790__auto___42033]));

var G__42034 = (i__4790__auto___42033 + (1));
i__4790__auto___42033 = G__42034;
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

var vec__41457_42035 = dommy.core.elem_and_selector(elem_sel);
var elem_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_42035,(0),null);
var selector_42037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_42035,(1),null);
var seq__41463_42038 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41470_42039 = null;
var count__41471_42040 = (0);
var i__41472_42041 = (0);
while(true){
if((i__41472_42041 < count__41471_42040)){
var vec__41514_42042 = chunk__41470_42039.cljs$core$IIndexed$_nth$arity$2(null,i__41472_42041);
var orig_type_42043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41514_42042,(0),null);
var f_42044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41514_42042,(1),null);
var seq__41473_42045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42043,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42043,cljs.core.identity])));
var chunk__41475_42046 = null;
var count__41476_42047 = (0);
var i__41477_42048 = (0);
while(true){
if((i__41477_42048 < count__41476_42047)){
var vec__41526_42049 = chunk__41475_42046.cljs$core$IIndexed$_nth$arity$2(null,i__41477_42048);
var actual_type_42050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526_42049,(0),null);
var __42051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526_42049,(1),null);
var keys_42052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42050,f_42044], null);
var canonical_f_42053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42052], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42050),canonical_f_42053);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42050),canonical_f_42053);
}


var G__42054 = seq__41473_42045;
var G__42055 = chunk__41475_42046;
var G__42056 = count__41476_42047;
var G__42057 = (i__41477_42048 + (1));
seq__41473_42045 = G__42054;
chunk__41475_42046 = G__42055;
count__41476_42047 = G__42056;
i__41477_42048 = G__42057;
continue;
} else {
var temp__5735__auto___42058 = cljs.core.seq(seq__41473_42045);
if(temp__5735__auto___42058){
var seq__41473_42059__$1 = temp__5735__auto___42058;
if(cljs.core.chunked_seq_QMARK_(seq__41473_42059__$1)){
var c__4609__auto___42060 = cljs.core.chunk_first(seq__41473_42059__$1);
var G__42061 = cljs.core.chunk_rest(seq__41473_42059__$1);
var G__42062 = c__4609__auto___42060;
var G__42063 = cljs.core.count(c__4609__auto___42060);
var G__42064 = (0);
seq__41473_42045 = G__42061;
chunk__41475_42046 = G__42062;
count__41476_42047 = G__42063;
i__41477_42048 = G__42064;
continue;
} else {
var vec__41530_42065 = cljs.core.first(seq__41473_42059__$1);
var actual_type_42066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42065,(0),null);
var __42067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42065,(1),null);
var keys_42068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42066,f_42044], null);
var canonical_f_42069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42068);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42068], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42066),canonical_f_42069);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42066),canonical_f_42069);
}


var G__42070 = cljs.core.next(seq__41473_42059__$1);
var G__42071 = null;
var G__42072 = (0);
var G__42073 = (0);
seq__41473_42045 = G__42070;
chunk__41475_42046 = G__42071;
count__41476_42047 = G__42072;
i__41477_42048 = G__42073;
continue;
}
} else {
}
}
break;
}

var G__42074 = seq__41463_42038;
var G__42075 = chunk__41470_42039;
var G__42076 = count__41471_42040;
var G__42077 = (i__41472_42041 + (1));
seq__41463_42038 = G__42074;
chunk__41470_42039 = G__42075;
count__41471_42040 = G__42076;
i__41472_42041 = G__42077;
continue;
} else {
var temp__5735__auto___42078 = cljs.core.seq(seq__41463_42038);
if(temp__5735__auto___42078){
var seq__41463_42079__$1 = temp__5735__auto___42078;
if(cljs.core.chunked_seq_QMARK_(seq__41463_42079__$1)){
var c__4609__auto___42080 = cljs.core.chunk_first(seq__41463_42079__$1);
var G__42081 = cljs.core.chunk_rest(seq__41463_42079__$1);
var G__42082 = c__4609__auto___42080;
var G__42083 = cljs.core.count(c__4609__auto___42080);
var G__42084 = (0);
seq__41463_42038 = G__42081;
chunk__41470_42039 = G__42082;
count__41471_42040 = G__42083;
i__41472_42041 = G__42084;
continue;
} else {
var vec__41533_42085 = cljs.core.first(seq__41463_42079__$1);
var orig_type_42086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42085,(0),null);
var f_42087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42085,(1),null);
var seq__41464_42088 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42086,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42086,cljs.core.identity])));
var chunk__41466_42089 = null;
var count__41467_42090 = (0);
var i__41468_42091 = (0);
while(true){
if((i__41468_42091 < count__41467_42090)){
var vec__41546_42092 = chunk__41466_42089.cljs$core$IIndexed$_nth$arity$2(null,i__41468_42091);
var actual_type_42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41546_42092,(0),null);
var __42094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41546_42092,(1),null);
var keys_42095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42093,f_42087], null);
var canonical_f_42096 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42095);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42095], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42093),canonical_f_42096);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42093),canonical_f_42096);
}


var G__42099 = seq__41464_42088;
var G__42100 = chunk__41466_42089;
var G__42101 = count__41467_42090;
var G__42102 = (i__41468_42091 + (1));
seq__41464_42088 = G__42099;
chunk__41466_42089 = G__42100;
count__41467_42090 = G__42101;
i__41468_42091 = G__42102;
continue;
} else {
var temp__5735__auto___42104__$1 = cljs.core.seq(seq__41464_42088);
if(temp__5735__auto___42104__$1){
var seq__41464_42106__$1 = temp__5735__auto___42104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41464_42106__$1)){
var c__4609__auto___42107 = cljs.core.chunk_first(seq__41464_42106__$1);
var G__42108 = cljs.core.chunk_rest(seq__41464_42106__$1);
var G__42109 = c__4609__auto___42107;
var G__42110 = cljs.core.count(c__4609__auto___42107);
var G__42111 = (0);
seq__41464_42088 = G__42108;
chunk__41466_42089 = G__42109;
count__41467_42090 = G__42110;
i__41468_42091 = G__42111;
continue;
} else {
var vec__41550_42113 = cljs.core.first(seq__41464_42106__$1);
var actual_type_42114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42113,(0),null);
var __42115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42113,(1),null);
var keys_42117 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42114,f_42087], null);
var canonical_f_42118 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42117);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42117], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42114),canonical_f_42118);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42114),canonical_f_42118);
}


var G__42119 = cljs.core.next(seq__41464_42106__$1);
var G__42120 = null;
var G__42121 = (0);
var G__42122 = (0);
seq__41464_42088 = G__42119;
chunk__41466_42089 = G__42120;
count__41467_42090 = G__42121;
i__41468_42091 = G__42122;
continue;
}
} else {
}
}
break;
}

var G__42123 = cljs.core.next(seq__41463_42079__$1);
var G__42124 = null;
var G__42125 = (0);
var G__42126 = (0);
seq__41463_42038 = G__42123;
chunk__41470_42039 = G__42124;
count__41471_42040 = G__42125;
i__41472_42041 = G__42126;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41455){
var G__41456 = cljs.core.first(seq41455);
var seq41455__$1 = cljs.core.next(seq41455);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41456,seq41455__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42127 = arguments.length;
var i__4790__auto___42129 = (0);
while(true){
if((i__4790__auto___42129 < len__4789__auto___42127)){
args__4795__auto__.push((arguments[i__4790__auto___42129]));

var G__42132 = (i__4790__auto___42129 + (1));
i__4790__auto___42129 = G__42132;
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

var vec__41577_42134 = dommy.core.elem_and_selector(elem_sel);
var elem_42135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577_42134,(0),null);
var selector_42136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577_42134,(1),null);
var seq__41580_42139 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41581_42140 = null;
var count__41582_42141 = (0);
var i__41583_42142 = (0);
while(true){
if((i__41583_42142 < count__41582_42141)){
var vec__41596_42144 = chunk__41581_42140.cljs$core$IIndexed$_nth$arity$2(null,i__41583_42142);
var type_42145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41596_42144,(0),null);
var f_42146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41596_42144,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42145,((function (seq__41580_42139,chunk__41581_42140,count__41582_42141,i__41583_42142,vec__41596_42144,type_42145,f_42146,vec__41577_42134,elem_42135,selector_42136){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42145,dommy$core$this_fn], 0));

return (f_42146.cljs$core$IFn$_invoke$arity$1 ? f_42146.cljs$core$IFn$_invoke$arity$1(e) : f_42146.call(null,e));
});})(seq__41580_42139,chunk__41581_42140,count__41582_42141,i__41583_42142,vec__41596_42144,type_42145,f_42146,vec__41577_42134,elem_42135,selector_42136))
], 0));


var G__42147 = seq__41580_42139;
var G__42148 = chunk__41581_42140;
var G__42149 = count__41582_42141;
var G__42150 = (i__41583_42142 + (1));
seq__41580_42139 = G__42147;
chunk__41581_42140 = G__42148;
count__41582_42141 = G__42149;
i__41583_42142 = G__42150;
continue;
} else {
var temp__5735__auto___42153 = cljs.core.seq(seq__41580_42139);
if(temp__5735__auto___42153){
var seq__41580_42157__$1 = temp__5735__auto___42153;
if(cljs.core.chunked_seq_QMARK_(seq__41580_42157__$1)){
var c__4609__auto___42159 = cljs.core.chunk_first(seq__41580_42157__$1);
var G__42160 = cljs.core.chunk_rest(seq__41580_42157__$1);
var G__42161 = c__4609__auto___42159;
var G__42162 = cljs.core.count(c__4609__auto___42159);
var G__42163 = (0);
seq__41580_42139 = G__42160;
chunk__41581_42140 = G__42161;
count__41582_42141 = G__42162;
i__41583_42142 = G__42163;
continue;
} else {
var vec__41611_42165 = cljs.core.first(seq__41580_42157__$1);
var type_42166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611_42165,(0),null);
var f_42167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611_42165,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42166,((function (seq__41580_42139,chunk__41581_42140,count__41582_42141,i__41583_42142,vec__41611_42165,type_42166,f_42167,seq__41580_42157__$1,temp__5735__auto___42153,vec__41577_42134,elem_42135,selector_42136){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42166,dommy$core$this_fn], 0));

return (f_42167.cljs$core$IFn$_invoke$arity$1 ? f_42167.cljs$core$IFn$_invoke$arity$1(e) : f_42167.call(null,e));
});})(seq__41580_42139,chunk__41581_42140,count__41582_42141,i__41583_42142,vec__41611_42165,type_42166,f_42167,seq__41580_42157__$1,temp__5735__auto___42153,vec__41577_42134,elem_42135,selector_42136))
], 0));


var G__42172 = cljs.core.next(seq__41580_42157__$1);
var G__42173 = null;
var G__42174 = (0);
var G__42175 = (0);
seq__41580_42139 = G__42172;
chunk__41581_42140 = G__42173;
count__41582_42141 = G__42174;
i__41583_42142 = G__42175;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41575){
var G__41576 = cljs.core.first(seq41575);
var seq41575__$1 = cljs.core.next(seq41575);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41576,seq41575__$1);
}));


//# sourceMappingURL=dommy.core.js.map
