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
var len__4789__auto___42570 = arguments.length;
var i__4790__auto___42571 = (0);
while(true){
if((i__4790__auto___42571 < len__4789__auto___42570)){
args__4795__auto__.push((arguments[i__4790__auto___42571]));

var G__42572 = (i__4790__auto___42571 + (1));
i__4790__auto___42571 = G__42572;
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
var seq__42133_42573 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42134_42574 = null;
var count__42135_42575 = (0);
var i__42136_42576 = (0);
while(true){
if((i__42136_42576 < count__42135_42575)){
var vec__42143_42577 = chunk__42134_42574.cljs$core$IIndexed$_nth$arity$2(null,i__42136_42576);
var k_42578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42143_42577,(0),null);
var v_42579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42143_42577,(1),null);
style.setProperty(dommy.utils.as_str(k_42578),v_42579);


var G__42580 = seq__42133_42573;
var G__42581 = chunk__42134_42574;
var G__42582 = count__42135_42575;
var G__42583 = (i__42136_42576 + (1));
seq__42133_42573 = G__42580;
chunk__42134_42574 = G__42581;
count__42135_42575 = G__42582;
i__42136_42576 = G__42583;
continue;
} else {
var temp__5735__auto___42584 = cljs.core.seq(seq__42133_42573);
if(temp__5735__auto___42584){
var seq__42133_42585__$1 = temp__5735__auto___42584;
if(cljs.core.chunked_seq_QMARK_(seq__42133_42585__$1)){
var c__4609__auto___42586 = cljs.core.chunk_first(seq__42133_42585__$1);
var G__42587 = cljs.core.chunk_rest(seq__42133_42585__$1);
var G__42588 = c__4609__auto___42586;
var G__42589 = cljs.core.count(c__4609__auto___42586);
var G__42590 = (0);
seq__42133_42573 = G__42587;
chunk__42134_42574 = G__42588;
count__42135_42575 = G__42589;
i__42136_42576 = G__42590;
continue;
} else {
var vec__42147_42591 = cljs.core.first(seq__42133_42585__$1);
var k_42592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42147_42591,(0),null);
var v_42593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42147_42591,(1),null);
style.setProperty(dommy.utils.as_str(k_42592),v_42593);


var G__42594 = cljs.core.next(seq__42133_42585__$1);
var G__42595 = null;
var G__42596 = (0);
var G__42597 = (0);
seq__42133_42573 = G__42594;
chunk__42134_42574 = G__42595;
count__42135_42575 = G__42596;
i__42136_42576 = G__42597;
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
var len__4789__auto___42598 = arguments.length;
var i__4790__auto___42599 = (0);
while(true){
if((i__4790__auto___42599 < len__4789__auto___42598)){
args__4795__auto__.push((arguments[i__4790__auto___42599]));

var G__42600 = (i__4790__auto___42599 + (1));
i__4790__auto___42599 = G__42600;
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
var seq__42152_42601 = cljs.core.seq(keywords);
var chunk__42153_42602 = null;
var count__42154_42603 = (0);
var i__42155_42604 = (0);
while(true){
if((i__42155_42604 < count__42154_42603)){
var kw_42605 = chunk__42153_42602.cljs$core$IIndexed$_nth$arity$2(null,i__42155_42604);
style.removeProperty(dommy.utils.as_str(kw_42605));


var G__42606 = seq__42152_42601;
var G__42607 = chunk__42153_42602;
var G__42608 = count__42154_42603;
var G__42609 = (i__42155_42604 + (1));
seq__42152_42601 = G__42606;
chunk__42153_42602 = G__42607;
count__42154_42603 = G__42608;
i__42155_42604 = G__42609;
continue;
} else {
var temp__5735__auto___42610 = cljs.core.seq(seq__42152_42601);
if(temp__5735__auto___42610){
var seq__42152_42611__$1 = temp__5735__auto___42610;
if(cljs.core.chunked_seq_QMARK_(seq__42152_42611__$1)){
var c__4609__auto___42612 = cljs.core.chunk_first(seq__42152_42611__$1);
var G__42613 = cljs.core.chunk_rest(seq__42152_42611__$1);
var G__42614 = c__4609__auto___42612;
var G__42615 = cljs.core.count(c__4609__auto___42612);
var G__42616 = (0);
seq__42152_42601 = G__42613;
chunk__42153_42602 = G__42614;
count__42154_42603 = G__42615;
i__42155_42604 = G__42616;
continue;
} else {
var kw_42617 = cljs.core.first(seq__42152_42611__$1);
style.removeProperty(dommy.utils.as_str(kw_42617));


var G__42618 = cljs.core.next(seq__42152_42611__$1);
var G__42619 = null;
var G__42620 = (0);
var G__42621 = (0);
seq__42152_42601 = G__42618;
chunk__42153_42602 = G__42619;
count__42154_42603 = G__42620;
i__42155_42604 = G__42621;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq42150){
var G__42151 = cljs.core.first(seq42150);
var seq42150__$1 = cljs.core.next(seq42150);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42151,seq42150__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42622 = arguments.length;
var i__4790__auto___42623 = (0);
while(true){
if((i__4790__auto___42623 < len__4789__auto___42622)){
args__4795__auto__.push((arguments[i__4790__auto___42623]));

var G__42624 = (i__4790__auto___42623 + (1));
i__4790__auto___42623 = G__42624;
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

var seq__42158_42625 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42159_42626 = null;
var count__42160_42627 = (0);
var i__42161_42628 = (0);
while(true){
if((i__42161_42628 < count__42160_42627)){
var vec__42168_42629 = chunk__42159_42626.cljs$core$IIndexed$_nth$arity$2(null,i__42161_42628);
var k_42630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168_42629,(0),null);
var v_42631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168_42629,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42630,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42631),"px"].join('')], 0));


var G__42632 = seq__42158_42625;
var G__42633 = chunk__42159_42626;
var G__42634 = count__42160_42627;
var G__42635 = (i__42161_42628 + (1));
seq__42158_42625 = G__42632;
chunk__42159_42626 = G__42633;
count__42160_42627 = G__42634;
i__42161_42628 = G__42635;
continue;
} else {
var temp__5735__auto___42636 = cljs.core.seq(seq__42158_42625);
if(temp__5735__auto___42636){
var seq__42158_42637__$1 = temp__5735__auto___42636;
if(cljs.core.chunked_seq_QMARK_(seq__42158_42637__$1)){
var c__4609__auto___42638 = cljs.core.chunk_first(seq__42158_42637__$1);
var G__42639 = cljs.core.chunk_rest(seq__42158_42637__$1);
var G__42640 = c__4609__auto___42638;
var G__42641 = cljs.core.count(c__4609__auto___42638);
var G__42642 = (0);
seq__42158_42625 = G__42639;
chunk__42159_42626 = G__42640;
count__42160_42627 = G__42641;
i__42161_42628 = G__42642;
continue;
} else {
var vec__42171_42643 = cljs.core.first(seq__42158_42637__$1);
var k_42644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171_42643,(0),null);
var v_42645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42171_42643,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_42644,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42645),"px"].join('')], 0));


var G__42647 = cljs.core.next(seq__42158_42637__$1);
var G__42648 = null;
var G__42649 = (0);
var G__42650 = (0);
seq__42158_42625 = G__42647;
chunk__42159_42626 = G__42648;
count__42160_42627 = G__42649;
i__42161_42628 = G__42650;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq42156){
var G__42157 = cljs.core.first(seq42156);
var seq42156__$1 = cljs.core.next(seq42156);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42157,seq42156__$1);
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
var len__4789__auto___42653 = arguments.length;
var i__4790__auto___42654 = (0);
while(true){
if((i__4790__auto___42654 < len__4789__auto___42653)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42654]));

var G__42655 = (i__4790__auto___42654 + (1));
i__4790__auto___42654 = G__42655;
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

var seq__42182_42656 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__42183_42657 = null;
var count__42184_42658 = (0);
var i__42185_42659 = (0);
while(true){
if((i__42185_42659 < count__42184_42658)){
var vec__42192_42660 = chunk__42183_42657.cljs$core$IIndexed$_nth$arity$2(null,i__42185_42659);
var k_42661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192_42660,(0),null);
var v_42662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192_42660,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_42661__$1,v_42662__$1);


var G__42663 = seq__42182_42656;
var G__42664 = chunk__42183_42657;
var G__42665 = count__42184_42658;
var G__42666 = (i__42185_42659 + (1));
seq__42182_42656 = G__42663;
chunk__42183_42657 = G__42664;
count__42184_42658 = G__42665;
i__42185_42659 = G__42666;
continue;
} else {
var temp__5735__auto___42667 = cljs.core.seq(seq__42182_42656);
if(temp__5735__auto___42667){
var seq__42182_42668__$1 = temp__5735__auto___42667;
if(cljs.core.chunked_seq_QMARK_(seq__42182_42668__$1)){
var c__4609__auto___42669 = cljs.core.chunk_first(seq__42182_42668__$1);
var G__42670 = cljs.core.chunk_rest(seq__42182_42668__$1);
var G__42671 = c__4609__auto___42669;
var G__42672 = cljs.core.count(c__4609__auto___42669);
var G__42673 = (0);
seq__42182_42656 = G__42670;
chunk__42183_42657 = G__42671;
count__42184_42658 = G__42672;
i__42185_42659 = G__42673;
continue;
} else {
var vec__42195_42675 = cljs.core.first(seq__42182_42668__$1);
var k_42676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42195_42675,(0),null);
var v_42677__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42195_42675,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_42676__$1,v_42677__$1);


var G__42679 = cljs.core.next(seq__42182_42668__$1);
var G__42680 = null;
var G__42681 = (0);
var G__42682 = (0);
seq__42182_42656 = G__42679;
chunk__42183_42657 = G__42680;
count__42184_42658 = G__42681;
i__42185_42659 = G__42682;
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
var len__4789__auto___42684 = arguments.length;
var i__4790__auto___42685 = (0);
while(true){
if((i__4790__auto___42685 < len__4789__auto___42684)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42685]));

var G__42686 = (i__4790__auto___42685 + (1));
i__4790__auto___42685 = G__42686;
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
var k_42688__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__42203 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__42203.cljs$core$IFn$_invoke$arity$1 ? fexpr__42203.cljs$core$IFn$_invoke$arity$1(k_42688__$1) : fexpr__42203.call(null,k_42688__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_42688__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__42204_42690 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__42205_42691 = null;
var count__42206_42692 = (0);
var i__42207_42693 = (0);
while(true){
if((i__42207_42693 < count__42206_42692)){
var k_42694__$1 = chunk__42205_42691.cljs$core$IIndexed$_nth$arity$2(null,i__42207_42693);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_42694__$1);


var G__42695 = seq__42204_42690;
var G__42696 = chunk__42205_42691;
var G__42697 = count__42206_42692;
var G__42698 = (i__42207_42693 + (1));
seq__42204_42690 = G__42695;
chunk__42205_42691 = G__42696;
count__42206_42692 = G__42697;
i__42207_42693 = G__42698;
continue;
} else {
var temp__5735__auto___42699 = cljs.core.seq(seq__42204_42690);
if(temp__5735__auto___42699){
var seq__42204_42700__$1 = temp__5735__auto___42699;
if(cljs.core.chunked_seq_QMARK_(seq__42204_42700__$1)){
var c__4609__auto___42701 = cljs.core.chunk_first(seq__42204_42700__$1);
var G__42702 = cljs.core.chunk_rest(seq__42204_42700__$1);
var G__42703 = c__4609__auto___42701;
var G__42704 = cljs.core.count(c__4609__auto___42701);
var G__42705 = (0);
seq__42204_42690 = G__42702;
chunk__42205_42691 = G__42703;
count__42206_42692 = G__42704;
i__42207_42693 = G__42705;
continue;
} else {
var k_42706__$1 = cljs.core.first(seq__42204_42700__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_42706__$1);


var G__42707 = cljs.core.next(seq__42204_42700__$1);
var G__42708 = null;
var G__42709 = (0);
var G__42710 = (0);
seq__42204_42690 = G__42707;
chunk__42205_42691 = G__42708;
count__42206_42692 = G__42709;
i__42207_42693 = G__42710;
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
var len__4789__auto___42713 = arguments.length;
var i__4790__auto___42714 = (0);
while(true){
if((i__4790__auto___42714 < len__4789__auto___42713)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42714]));

var G__42715 = (i__4790__auto___42714 + (1));
i__4790__auto___42714 = G__42715;
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
var temp__5733__auto___42716 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42716)){
var class_list_42717 = temp__5733__auto___42716;
var seq__42215_42718 = cljs.core.seq(classes__$1);
var chunk__42216_42719 = null;
var count__42217_42720 = (0);
var i__42218_42721 = (0);
while(true){
if((i__42218_42721 < count__42217_42720)){
var c_42722 = chunk__42216_42719.cljs$core$IIndexed$_nth$arity$2(null,i__42218_42721);
class_list_42717.add(c_42722);


var G__42723 = seq__42215_42718;
var G__42724 = chunk__42216_42719;
var G__42725 = count__42217_42720;
var G__42726 = (i__42218_42721 + (1));
seq__42215_42718 = G__42723;
chunk__42216_42719 = G__42724;
count__42217_42720 = G__42725;
i__42218_42721 = G__42726;
continue;
} else {
var temp__5735__auto___42727 = cljs.core.seq(seq__42215_42718);
if(temp__5735__auto___42727){
var seq__42215_42728__$1 = temp__5735__auto___42727;
if(cljs.core.chunked_seq_QMARK_(seq__42215_42728__$1)){
var c__4609__auto___42729 = cljs.core.chunk_first(seq__42215_42728__$1);
var G__42730 = cljs.core.chunk_rest(seq__42215_42728__$1);
var G__42731 = c__4609__auto___42729;
var G__42732 = cljs.core.count(c__4609__auto___42729);
var G__42733 = (0);
seq__42215_42718 = G__42730;
chunk__42216_42719 = G__42731;
count__42217_42720 = G__42732;
i__42218_42721 = G__42733;
continue;
} else {
var c_42734 = cljs.core.first(seq__42215_42728__$1);
class_list_42717.add(c_42734);


var G__42735 = cljs.core.next(seq__42215_42728__$1);
var G__42736 = null;
var G__42737 = (0);
var G__42738 = (0);
seq__42215_42718 = G__42735;
chunk__42216_42719 = G__42736;
count__42217_42720 = G__42737;
i__42218_42721 = G__42738;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42219_42739 = cljs.core.seq(classes__$1);
var chunk__42220_42740 = null;
var count__42221_42741 = (0);
var i__42222_42742 = (0);
while(true){
if((i__42222_42742 < count__42221_42741)){
var c_42743 = chunk__42220_42740.cljs$core$IIndexed$_nth$arity$2(null,i__42222_42742);
var class_name_42744 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_42744,c_42743))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_42744 === ""))?c_42743:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42744)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42743)].join('')));
}


var G__42745 = seq__42219_42739;
var G__42746 = chunk__42220_42740;
var G__42747 = count__42221_42741;
var G__42748 = (i__42222_42742 + (1));
seq__42219_42739 = G__42745;
chunk__42220_42740 = G__42746;
count__42221_42741 = G__42747;
i__42222_42742 = G__42748;
continue;
} else {
var temp__5735__auto___42749 = cljs.core.seq(seq__42219_42739);
if(temp__5735__auto___42749){
var seq__42219_42750__$1 = temp__5735__auto___42749;
if(cljs.core.chunked_seq_QMARK_(seq__42219_42750__$1)){
var c__4609__auto___42751 = cljs.core.chunk_first(seq__42219_42750__$1);
var G__42752 = cljs.core.chunk_rest(seq__42219_42750__$1);
var G__42753 = c__4609__auto___42751;
var G__42754 = cljs.core.count(c__4609__auto___42751);
var G__42755 = (0);
seq__42219_42739 = G__42752;
chunk__42220_42740 = G__42753;
count__42221_42741 = G__42754;
i__42222_42742 = G__42755;
continue;
} else {
var c_42756 = cljs.core.first(seq__42219_42750__$1);
var class_name_42757 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_42757,c_42756))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_42757 === ""))?c_42756:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42757)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42756)].join('')));
}


var G__42758 = cljs.core.next(seq__42219_42750__$1);
var G__42759 = null;
var G__42760 = (0);
var G__42761 = (0);
seq__42219_42739 = G__42758;
chunk__42220_42740 = G__42759;
count__42221_42741 = G__42760;
i__42222_42742 = G__42761;
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
var seq__42223_42762 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__42224_42763 = null;
var count__42225_42764 = (0);
var i__42226_42765 = (0);
while(true){
if((i__42226_42765 < count__42225_42764)){
var c_42766 = chunk__42224_42763.cljs$core$IIndexed$_nth$arity$2(null,i__42226_42765);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_42766);


var G__42767 = seq__42223_42762;
var G__42768 = chunk__42224_42763;
var G__42769 = count__42225_42764;
var G__42770 = (i__42226_42765 + (1));
seq__42223_42762 = G__42767;
chunk__42224_42763 = G__42768;
count__42225_42764 = G__42769;
i__42226_42765 = G__42770;
continue;
} else {
var temp__5735__auto___42771 = cljs.core.seq(seq__42223_42762);
if(temp__5735__auto___42771){
var seq__42223_42772__$1 = temp__5735__auto___42771;
if(cljs.core.chunked_seq_QMARK_(seq__42223_42772__$1)){
var c__4609__auto___42773 = cljs.core.chunk_first(seq__42223_42772__$1);
var G__42774 = cljs.core.chunk_rest(seq__42223_42772__$1);
var G__42775 = c__4609__auto___42773;
var G__42776 = cljs.core.count(c__4609__auto___42773);
var G__42777 = (0);
seq__42223_42762 = G__42774;
chunk__42224_42763 = G__42775;
count__42225_42764 = G__42776;
i__42226_42765 = G__42777;
continue;
} else {
var c_42778 = cljs.core.first(seq__42223_42772__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_42778);


var G__42779 = cljs.core.next(seq__42223_42772__$1);
var G__42780 = null;
var G__42781 = (0);
var G__42782 = (0);
seq__42223_42762 = G__42779;
chunk__42224_42763 = G__42780;
count__42225_42764 = G__42781;
i__42226_42765 = G__42782;
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
var len__4789__auto___42784 = arguments.length;
var i__4790__auto___42785 = (0);
while(true){
if((i__4790__auto___42785 < len__4789__auto___42784)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42785]));

var G__42786 = (i__4790__auto___42785 + (1));
i__4790__auto___42785 = G__42786;
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
var temp__5733__auto___42787 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42787)){
var class_list_42788 = temp__5733__auto___42787;
class_list_42788.remove(c__$1);
} else {
var class_name_42789 = dommy.core.class$(elem);
var new_class_name_42790 = dommy.utils.remove_class_str(class_name_42789,c__$1);
if((class_name_42789 === new_class_name_42790)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_42790);
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


var G__42791 = seq__42232;
var G__42792 = chunk__42233;
var G__42793 = count__42234;
var G__42794 = (i__42235 + (1));
seq__42232 = G__42791;
chunk__42233 = G__42792;
count__42234 = G__42793;
i__42235 = G__42794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42232);
if(temp__5735__auto__){
var seq__42232__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42232__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42232__$1);
var G__42795 = cljs.core.chunk_rest(seq__42232__$1);
var G__42796 = c__4609__auto__;
var G__42797 = cljs.core.count(c__4609__auto__);
var G__42798 = (0);
seq__42232 = G__42795;
chunk__42233 = G__42796;
count__42234 = G__42797;
i__42235 = G__42798;
continue;
} else {
var c = cljs.core.first(seq__42232__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__42799 = cljs.core.next(seq__42232__$1);
var G__42800 = null;
var G__42801 = (0);
var G__42802 = (0);
seq__42232 = G__42799;
chunk__42233 = G__42800;
count__42234 = G__42801;
i__42235 = G__42802;
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
var G__42239 = arguments.length;
switch (G__42239) {
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
var temp__5733__auto___42804 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42804)){
var class_list_42805 = temp__5733__auto___42804;
class_list_42805.toggle(c__$1);
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
var G__42242 = arguments.length;
switch (G__42242) {
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
var G__42244 = arguments.length;
switch (G__42244) {
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
var G__42249 = arguments.length;
switch (G__42249) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42812 = arguments.length;
var i__4790__auto___42813 = (0);
while(true){
if((i__4790__auto___42813 < len__4789__auto___42812)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42813]));

var G__42814 = (i__4790__auto___42813 + (1));
i__4790__auto___42813 = G__42814;
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
var G__42250 = parent;
G__42250.appendChild(child);

return G__42250;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__42251_42817 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__42252_42818 = null;
var count__42253_42819 = (0);
var i__42254_42820 = (0);
while(true){
if((i__42254_42820 < count__42253_42819)){
var c_42821 = chunk__42252_42818.cljs$core$IIndexed$_nth$arity$2(null,i__42254_42820);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42821);


var G__42823 = seq__42251_42817;
var G__42824 = chunk__42252_42818;
var G__42825 = count__42253_42819;
var G__42826 = (i__42254_42820 + (1));
seq__42251_42817 = G__42823;
chunk__42252_42818 = G__42824;
count__42253_42819 = G__42825;
i__42254_42820 = G__42826;
continue;
} else {
var temp__5735__auto___42827 = cljs.core.seq(seq__42251_42817);
if(temp__5735__auto___42827){
var seq__42251_42828__$1 = temp__5735__auto___42827;
if(cljs.core.chunked_seq_QMARK_(seq__42251_42828__$1)){
var c__4609__auto___42829 = cljs.core.chunk_first(seq__42251_42828__$1);
var G__42830 = cljs.core.chunk_rest(seq__42251_42828__$1);
var G__42831 = c__4609__auto___42829;
var G__42832 = cljs.core.count(c__4609__auto___42829);
var G__42833 = (0);
seq__42251_42817 = G__42830;
chunk__42252_42818 = G__42831;
count__42253_42819 = G__42832;
i__42254_42820 = G__42833;
continue;
} else {
var c_42834 = cljs.core.first(seq__42251_42828__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42834);


var G__42835 = cljs.core.next(seq__42251_42828__$1);
var G__42836 = null;
var G__42837 = (0);
var G__42838 = (0);
seq__42251_42817 = G__42835;
chunk__42252_42818 = G__42836;
count__42253_42819 = G__42837;
i__42254_42820 = G__42838;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq42246){
var G__42247 = cljs.core.first(seq42246);
var seq42246__$1 = cljs.core.next(seq42246);
var G__42248 = cljs.core.first(seq42246__$1);
var seq42246__$2 = cljs.core.next(seq42246__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42247,G__42248,seq42246__$2);
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
var len__4789__auto___42845 = arguments.length;
var i__4790__auto___42846 = (0);
while(true){
if((i__4790__auto___42846 < len__4789__auto___42845)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42846]));

var G__42847 = (i__4790__auto___42846 + (1));
i__4790__auto___42846 = G__42847;
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
var seq__42261_42850 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__42262_42851 = null;
var count__42263_42852 = (0);
var i__42264_42853 = (0);
while(true){
if((i__42264_42853 < count__42263_42852)){
var c_42854 = chunk__42262_42851.cljs$core$IIndexed$_nth$arity$2(null,i__42264_42853);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42854);


var G__42855 = seq__42261_42850;
var G__42856 = chunk__42262_42851;
var G__42857 = count__42263_42852;
var G__42858 = (i__42264_42853 + (1));
seq__42261_42850 = G__42855;
chunk__42262_42851 = G__42856;
count__42263_42852 = G__42857;
i__42264_42853 = G__42858;
continue;
} else {
var temp__5735__auto___42859 = cljs.core.seq(seq__42261_42850);
if(temp__5735__auto___42859){
var seq__42261_42860__$1 = temp__5735__auto___42859;
if(cljs.core.chunked_seq_QMARK_(seq__42261_42860__$1)){
var c__4609__auto___42861 = cljs.core.chunk_first(seq__42261_42860__$1);
var G__42863 = cljs.core.chunk_rest(seq__42261_42860__$1);
var G__42864 = c__4609__auto___42861;
var G__42865 = cljs.core.count(c__4609__auto___42861);
var G__42866 = (0);
seq__42261_42850 = G__42863;
chunk__42262_42851 = G__42864;
count__42263_42852 = G__42865;
i__42264_42853 = G__42866;
continue;
} else {
var c_42868 = cljs.core.first(seq__42261_42860__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42868);


var G__42870 = cljs.core.next(seq__42261_42860__$1);
var G__42871 = null;
var G__42872 = (0);
var G__42873 = (0);
seq__42261_42850 = G__42870;
chunk__42262_42851 = G__42871;
count__42263_42852 = G__42872;
i__42264_42853 = G__42873;
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
var temp__5733__auto___42878 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___42878)){
var next_42881 = temp__5733__auto___42878;
dommy.core.insert_before_BANG_(elem,next_42881);
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
var len__4789__auto___42888 = arguments.length;
var i__4790__auto___42889 = (0);
while(true){
if((i__4790__auto___42889 < len__4789__auto___42888)){
args__4795__auto__.push((arguments[i__4790__auto___42889]));

var G__42890 = (i__4790__auto___42889 + (1));
i__4790__auto___42889 = G__42890;
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
var fexpr__42278 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__42278.cljs$core$IFn$_invoke$arity$1 ? fexpr__42278.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__42278.call(null,elem_sel));
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
var len__4789__auto___42891 = arguments.length;
var i__4790__auto___42892 = (0);
while(true){
if((i__4790__auto___42892 < len__4789__auto___42891)){
args__4795__auto__.push((arguments[i__4790__auto___42892]));

var G__42893 = (i__4790__auto___42892 + (1));
i__4790__auto___42892 = G__42893;
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

var vec__42281_42894 = dommy.core.elem_and_selector(elem_sel);
var elem_42895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281_42894,(0),null);
var selector_42896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42281_42894,(1),null);
var seq__42284_42897 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42291_42898 = null;
var count__42292_42899 = (0);
var i__42293_42900 = (0);
while(true){
if((i__42293_42900 < count__42292_42899)){
var vec__42349_42901 = chunk__42291_42898.cljs$core$IIndexed$_nth$arity$2(null,i__42293_42900);
var orig_type_42902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349_42901,(0),null);
var f_42903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349_42901,(1),null);
var seq__42294_42904 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42902,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42902,cljs.core.identity])));
var chunk__42296_42905 = null;
var count__42297_42906 = (0);
var i__42298_42907 = (0);
while(true){
if((i__42298_42907 < count__42297_42906)){
var vec__42366_42908 = chunk__42296_42905.cljs$core$IIndexed$_nth$arity$2(null,i__42298_42907);
var actual_type_42909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366_42908,(0),null);
var factory_42910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42366_42908,(1),null);
var canonical_f_42911 = (function (){var G__42370 = (factory_42910.cljs$core$IFn$_invoke$arity$1 ? factory_42910.cljs$core$IFn$_invoke$arity$1(f_42903) : factory_42910.call(null,f_42903));
var fexpr__42369 = (cljs.core.truth_(selector_42896)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42895,selector_42896):cljs.core.identity);
return (fexpr__42369.cljs$core$IFn$_invoke$arity$1 ? fexpr__42369.cljs$core$IFn$_invoke$arity$1(G__42370) : fexpr__42369.call(null,G__42370));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42895,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42896,actual_type_42909,f_42903], null),canonical_f_42911], 0));

if(cljs.core.truth_(elem_42895.addEventListener)){
elem_42895.addEventListener(cljs.core.name(actual_type_42909),canonical_f_42911);
} else {
elem_42895.attachEvent(cljs.core.name(actual_type_42909),canonical_f_42911);
}


var G__42912 = seq__42294_42904;
var G__42913 = chunk__42296_42905;
var G__42914 = count__42297_42906;
var G__42915 = (i__42298_42907 + (1));
seq__42294_42904 = G__42912;
chunk__42296_42905 = G__42913;
count__42297_42906 = G__42914;
i__42298_42907 = G__42915;
continue;
} else {
var temp__5735__auto___42916 = cljs.core.seq(seq__42294_42904);
if(temp__5735__auto___42916){
var seq__42294_42917__$1 = temp__5735__auto___42916;
if(cljs.core.chunked_seq_QMARK_(seq__42294_42917__$1)){
var c__4609__auto___42918 = cljs.core.chunk_first(seq__42294_42917__$1);
var G__42919 = cljs.core.chunk_rest(seq__42294_42917__$1);
var G__42920 = c__4609__auto___42918;
var G__42921 = cljs.core.count(c__4609__auto___42918);
var G__42922 = (0);
seq__42294_42904 = G__42919;
chunk__42296_42905 = G__42920;
count__42297_42906 = G__42921;
i__42298_42907 = G__42922;
continue;
} else {
var vec__42371_42923 = cljs.core.first(seq__42294_42917__$1);
var actual_type_42924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42371_42923,(0),null);
var factory_42925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42371_42923,(1),null);
var canonical_f_42926 = (function (){var G__42375 = (factory_42925.cljs$core$IFn$_invoke$arity$1 ? factory_42925.cljs$core$IFn$_invoke$arity$1(f_42903) : factory_42925.call(null,f_42903));
var fexpr__42374 = (cljs.core.truth_(selector_42896)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42895,selector_42896):cljs.core.identity);
return (fexpr__42374.cljs$core$IFn$_invoke$arity$1 ? fexpr__42374.cljs$core$IFn$_invoke$arity$1(G__42375) : fexpr__42374.call(null,G__42375));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42895,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42896,actual_type_42924,f_42903], null),canonical_f_42926], 0));

if(cljs.core.truth_(elem_42895.addEventListener)){
elem_42895.addEventListener(cljs.core.name(actual_type_42924),canonical_f_42926);
} else {
elem_42895.attachEvent(cljs.core.name(actual_type_42924),canonical_f_42926);
}


var G__42927 = cljs.core.next(seq__42294_42917__$1);
var G__42928 = null;
var G__42929 = (0);
var G__42930 = (0);
seq__42294_42904 = G__42927;
chunk__42296_42905 = G__42928;
count__42297_42906 = G__42929;
i__42298_42907 = G__42930;
continue;
}
} else {
}
}
break;
}

var G__42931 = seq__42284_42897;
var G__42932 = chunk__42291_42898;
var G__42933 = count__42292_42899;
var G__42934 = (i__42293_42900 + (1));
seq__42284_42897 = G__42931;
chunk__42291_42898 = G__42932;
count__42292_42899 = G__42933;
i__42293_42900 = G__42934;
continue;
} else {
var temp__5735__auto___42935 = cljs.core.seq(seq__42284_42897);
if(temp__5735__auto___42935){
var seq__42284_42936__$1 = temp__5735__auto___42935;
if(cljs.core.chunked_seq_QMARK_(seq__42284_42936__$1)){
var c__4609__auto___42937 = cljs.core.chunk_first(seq__42284_42936__$1);
var G__42938 = cljs.core.chunk_rest(seq__42284_42936__$1);
var G__42939 = c__4609__auto___42937;
var G__42940 = cljs.core.count(c__4609__auto___42937);
var G__42941 = (0);
seq__42284_42897 = G__42938;
chunk__42291_42898 = G__42939;
count__42292_42899 = G__42940;
i__42293_42900 = G__42941;
continue;
} else {
var vec__42376_42942 = cljs.core.first(seq__42284_42936__$1);
var orig_type_42943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376_42942,(0),null);
var f_42944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376_42942,(1),null);
var seq__42285_42945 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42943,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42943,cljs.core.identity])));
var chunk__42287_42946 = null;
var count__42288_42947 = (0);
var i__42289_42948 = (0);
while(true){
if((i__42289_42948 < count__42288_42947)){
var vec__42396_42949 = chunk__42287_42946.cljs$core$IIndexed$_nth$arity$2(null,i__42289_42948);
var actual_type_42950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396_42949,(0),null);
var factory_42951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396_42949,(1),null);
var canonical_f_42952 = (function (){var G__42400 = (factory_42951.cljs$core$IFn$_invoke$arity$1 ? factory_42951.cljs$core$IFn$_invoke$arity$1(f_42944) : factory_42951.call(null,f_42944));
var fexpr__42399 = (cljs.core.truth_(selector_42896)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42895,selector_42896):cljs.core.identity);
return (fexpr__42399.cljs$core$IFn$_invoke$arity$1 ? fexpr__42399.cljs$core$IFn$_invoke$arity$1(G__42400) : fexpr__42399.call(null,G__42400));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42895,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42896,actual_type_42950,f_42944], null),canonical_f_42952], 0));

if(cljs.core.truth_(elem_42895.addEventListener)){
elem_42895.addEventListener(cljs.core.name(actual_type_42950),canonical_f_42952);
} else {
elem_42895.attachEvent(cljs.core.name(actual_type_42950),canonical_f_42952);
}


var G__42953 = seq__42285_42945;
var G__42954 = chunk__42287_42946;
var G__42955 = count__42288_42947;
var G__42956 = (i__42289_42948 + (1));
seq__42285_42945 = G__42953;
chunk__42287_42946 = G__42954;
count__42288_42947 = G__42955;
i__42289_42948 = G__42956;
continue;
} else {
var temp__5735__auto___42957__$1 = cljs.core.seq(seq__42285_42945);
if(temp__5735__auto___42957__$1){
var seq__42285_42958__$1 = temp__5735__auto___42957__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42285_42958__$1)){
var c__4609__auto___42959 = cljs.core.chunk_first(seq__42285_42958__$1);
var G__42960 = cljs.core.chunk_rest(seq__42285_42958__$1);
var G__42961 = c__4609__auto___42959;
var G__42962 = cljs.core.count(c__4609__auto___42959);
var G__42963 = (0);
seq__42285_42945 = G__42960;
chunk__42287_42946 = G__42961;
count__42288_42947 = G__42962;
i__42289_42948 = G__42963;
continue;
} else {
var vec__42401_42964 = cljs.core.first(seq__42285_42958__$1);
var actual_type_42965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401_42964,(0),null);
var factory_42966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401_42964,(1),null);
var canonical_f_42967 = (function (){var G__42405 = (factory_42966.cljs$core$IFn$_invoke$arity$1 ? factory_42966.cljs$core$IFn$_invoke$arity$1(f_42944) : factory_42966.call(null,f_42944));
var fexpr__42404 = (cljs.core.truth_(selector_42896)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42895,selector_42896):cljs.core.identity);
return (fexpr__42404.cljs$core$IFn$_invoke$arity$1 ? fexpr__42404.cljs$core$IFn$_invoke$arity$1(G__42405) : fexpr__42404.call(null,G__42405));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42895,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42896,actual_type_42965,f_42944], null),canonical_f_42967], 0));

if(cljs.core.truth_(elem_42895.addEventListener)){
elem_42895.addEventListener(cljs.core.name(actual_type_42965),canonical_f_42967);
} else {
elem_42895.attachEvent(cljs.core.name(actual_type_42965),canonical_f_42967);
}


var G__42968 = cljs.core.next(seq__42285_42958__$1);
var G__42969 = null;
var G__42970 = (0);
var G__42971 = (0);
seq__42285_42945 = G__42968;
chunk__42287_42946 = G__42969;
count__42288_42947 = G__42970;
i__42289_42948 = G__42971;
continue;
}
} else {
}
}
break;
}

var G__42972 = cljs.core.next(seq__42284_42936__$1);
var G__42973 = null;
var G__42974 = (0);
var G__42975 = (0);
seq__42284_42897 = G__42972;
chunk__42291_42898 = G__42973;
count__42292_42899 = G__42974;
i__42293_42900 = G__42975;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq42279){
var G__42280 = cljs.core.first(seq42279);
var seq42279__$1 = cljs.core.next(seq42279);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42280,seq42279__$1);
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
var len__4789__auto___42976 = arguments.length;
var i__4790__auto___42977 = (0);
while(true){
if((i__4790__auto___42977 < len__4789__auto___42976)){
args__4795__auto__.push((arguments[i__4790__auto___42977]));

var G__42978 = (i__4790__auto___42977 + (1));
i__4790__auto___42977 = G__42978;
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

var vec__42408_42979 = dommy.core.elem_and_selector(elem_sel);
var elem_42980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42408_42979,(0),null);
var selector_42981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42408_42979,(1),null);
var seq__42411_42982 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42418_42983 = null;
var count__42419_42984 = (0);
var i__42420_42985 = (0);
while(true){
if((i__42420_42985 < count__42419_42984)){
var vec__42466_42986 = chunk__42418_42983.cljs$core$IIndexed$_nth$arity$2(null,i__42420_42985);
var orig_type_42987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42466_42986,(0),null);
var f_42988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42466_42986,(1),null);
var seq__42421_42989 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42987,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42987,cljs.core.identity])));
var chunk__42423_42990 = null;
var count__42424_42991 = (0);
var i__42425_42992 = (0);
while(true){
if((i__42425_42992 < count__42424_42991)){
var vec__42498_42993 = chunk__42423_42990.cljs$core$IIndexed$_nth$arity$2(null,i__42425_42992);
var actual_type_42994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42498_42993,(0),null);
var __42995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42498_42993,(1),null);
var keys_42996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42981,actual_type_42994,f_42988], null);
var canonical_f_42997 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42980),keys_42996);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42980,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42996], 0));

if(cljs.core.truth_(elem_42980.removeEventListener)){
elem_42980.removeEventListener(cljs.core.name(actual_type_42994),canonical_f_42997);
} else {
elem_42980.detachEvent(cljs.core.name(actual_type_42994),canonical_f_42997);
}


var G__42998 = seq__42421_42989;
var G__42999 = chunk__42423_42990;
var G__43000 = count__42424_42991;
var G__43001 = (i__42425_42992 + (1));
seq__42421_42989 = G__42998;
chunk__42423_42990 = G__42999;
count__42424_42991 = G__43000;
i__42425_42992 = G__43001;
continue;
} else {
var temp__5735__auto___43002 = cljs.core.seq(seq__42421_42989);
if(temp__5735__auto___43002){
var seq__42421_43003__$1 = temp__5735__auto___43002;
if(cljs.core.chunked_seq_QMARK_(seq__42421_43003__$1)){
var c__4609__auto___43004 = cljs.core.chunk_first(seq__42421_43003__$1);
var G__43005 = cljs.core.chunk_rest(seq__42421_43003__$1);
var G__43006 = c__4609__auto___43004;
var G__43007 = cljs.core.count(c__4609__auto___43004);
var G__43008 = (0);
seq__42421_42989 = G__43005;
chunk__42423_42990 = G__43006;
count__42424_42991 = G__43007;
i__42425_42992 = G__43008;
continue;
} else {
var vec__42501_43009 = cljs.core.first(seq__42421_43003__$1);
var actual_type_43010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501_43009,(0),null);
var __43011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501_43009,(1),null);
var keys_43012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42981,actual_type_43010,f_42988], null);
var canonical_f_43013 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42980),keys_43012);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42980,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43012], 0));

if(cljs.core.truth_(elem_42980.removeEventListener)){
elem_42980.removeEventListener(cljs.core.name(actual_type_43010),canonical_f_43013);
} else {
elem_42980.detachEvent(cljs.core.name(actual_type_43010),canonical_f_43013);
}


var G__43014 = cljs.core.next(seq__42421_43003__$1);
var G__43015 = null;
var G__43016 = (0);
var G__43017 = (0);
seq__42421_42989 = G__43014;
chunk__42423_42990 = G__43015;
count__42424_42991 = G__43016;
i__42425_42992 = G__43017;
continue;
}
} else {
}
}
break;
}

var G__43018 = seq__42411_42982;
var G__43019 = chunk__42418_42983;
var G__43020 = count__42419_42984;
var G__43021 = (i__42420_42985 + (1));
seq__42411_42982 = G__43018;
chunk__42418_42983 = G__43019;
count__42419_42984 = G__43020;
i__42420_42985 = G__43021;
continue;
} else {
var temp__5735__auto___43022 = cljs.core.seq(seq__42411_42982);
if(temp__5735__auto___43022){
var seq__42411_43023__$1 = temp__5735__auto___43022;
if(cljs.core.chunked_seq_QMARK_(seq__42411_43023__$1)){
var c__4609__auto___43024 = cljs.core.chunk_first(seq__42411_43023__$1);
var G__43025 = cljs.core.chunk_rest(seq__42411_43023__$1);
var G__43026 = c__4609__auto___43024;
var G__43027 = cljs.core.count(c__4609__auto___43024);
var G__43028 = (0);
seq__42411_42982 = G__43025;
chunk__42418_42983 = G__43026;
count__42419_42984 = G__43027;
i__42420_42985 = G__43028;
continue;
} else {
var vec__42510_43029 = cljs.core.first(seq__42411_43023__$1);
var orig_type_43030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42510_43029,(0),null);
var f_43031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42510_43029,(1),null);
var seq__42412_43034 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43030,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43030,cljs.core.identity])));
var chunk__42414_43035 = null;
var count__42415_43036 = (0);
var i__42416_43037 = (0);
while(true){
if((i__42416_43037 < count__42415_43036)){
var vec__42535_43038 = chunk__42414_43035.cljs$core$IIndexed$_nth$arity$2(null,i__42416_43037);
var actual_type_43039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42535_43038,(0),null);
var __43040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42535_43038,(1),null);
var keys_43043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42981,actual_type_43039,f_43031], null);
var canonical_f_43044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42980),keys_43043);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42980,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43043], 0));

if(cljs.core.truth_(elem_42980.removeEventListener)){
elem_42980.removeEventListener(cljs.core.name(actual_type_43039),canonical_f_43044);
} else {
elem_42980.detachEvent(cljs.core.name(actual_type_43039),canonical_f_43044);
}


var G__43046 = seq__42412_43034;
var G__43047 = chunk__42414_43035;
var G__43048 = count__42415_43036;
var G__43049 = (i__42416_43037 + (1));
seq__42412_43034 = G__43046;
chunk__42414_43035 = G__43047;
count__42415_43036 = G__43048;
i__42416_43037 = G__43049;
continue;
} else {
var temp__5735__auto___43051__$1 = cljs.core.seq(seq__42412_43034);
if(temp__5735__auto___43051__$1){
var seq__42412_43052__$1 = temp__5735__auto___43051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42412_43052__$1)){
var c__4609__auto___43053 = cljs.core.chunk_first(seq__42412_43052__$1);
var G__43054 = cljs.core.chunk_rest(seq__42412_43052__$1);
var G__43055 = c__4609__auto___43053;
var G__43056 = cljs.core.count(c__4609__auto___43053);
var G__43057 = (0);
seq__42412_43034 = G__43054;
chunk__42414_43035 = G__43055;
count__42415_43036 = G__43056;
i__42416_43037 = G__43057;
continue;
} else {
var vec__42538_43058 = cljs.core.first(seq__42412_43052__$1);
var actual_type_43059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538_43058,(0),null);
var __43060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538_43058,(1),null);
var keys_43061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42981,actual_type_43059,f_43031], null);
var canonical_f_43062 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42980),keys_43061);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42980,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43061], 0));

if(cljs.core.truth_(elem_42980.removeEventListener)){
elem_42980.removeEventListener(cljs.core.name(actual_type_43059),canonical_f_43062);
} else {
elem_42980.detachEvent(cljs.core.name(actual_type_43059),canonical_f_43062);
}


var G__43063 = cljs.core.next(seq__42412_43052__$1);
var G__43064 = null;
var G__43065 = (0);
var G__43066 = (0);
seq__42412_43034 = G__43063;
chunk__42414_43035 = G__43064;
count__42415_43036 = G__43065;
i__42416_43037 = G__43066;
continue;
}
} else {
}
}
break;
}

var G__43067 = cljs.core.next(seq__42411_43023__$1);
var G__43068 = null;
var G__43069 = (0);
var G__43070 = (0);
seq__42411_42982 = G__43067;
chunk__42418_42983 = G__43068;
count__42419_42984 = G__43069;
i__42420_42985 = G__43070;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq42406){
var G__42407 = cljs.core.first(seq42406);
var seq42406__$1 = cljs.core.next(seq42406);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42407,seq42406__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43072 = arguments.length;
var i__4790__auto___43073 = (0);
while(true){
if((i__4790__auto___43073 < len__4789__auto___43072)){
args__4795__auto__.push((arguments[i__4790__auto___43073]));

var G__43076 = (i__4790__auto___43073 + (1));
i__4790__auto___43073 = G__43076;
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

var vec__42547_43078 = dommy.core.elem_and_selector(elem_sel);
var elem_43079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42547_43078,(0),null);
var selector_43080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42547_43078,(1),null);
var seq__42550_43081 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__42551_43082 = null;
var count__42552_43083 = (0);
var i__42553_43084 = (0);
while(true){
if((i__42553_43084 < count__42552_43083)){
var vec__42561_43088 = chunk__42551_43082.cljs$core$IIndexed$_nth$arity$2(null,i__42553_43084);
var type_43089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561_43088,(0),null);
var f_43090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561_43088,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43089,((function (seq__42550_43081,chunk__42551_43082,count__42552_43083,i__42553_43084,vec__42561_43088,type_43089,f_43090,vec__42547_43078,elem_43079,selector_43080){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43089,dommy$core$this_fn], 0));

return (f_43090.cljs$core$IFn$_invoke$arity$1 ? f_43090.cljs$core$IFn$_invoke$arity$1(e) : f_43090.call(null,e));
});})(seq__42550_43081,chunk__42551_43082,count__42552_43083,i__42553_43084,vec__42561_43088,type_43089,f_43090,vec__42547_43078,elem_43079,selector_43080))
], 0));


var G__43091 = seq__42550_43081;
var G__43092 = chunk__42551_43082;
var G__43093 = count__42552_43083;
var G__43094 = (i__42553_43084 + (1));
seq__42550_43081 = G__43091;
chunk__42551_43082 = G__43092;
count__42552_43083 = G__43093;
i__42553_43084 = G__43094;
continue;
} else {
var temp__5735__auto___43095 = cljs.core.seq(seq__42550_43081);
if(temp__5735__auto___43095){
var seq__42550_43096__$1 = temp__5735__auto___43095;
if(cljs.core.chunked_seq_QMARK_(seq__42550_43096__$1)){
var c__4609__auto___43097 = cljs.core.chunk_first(seq__42550_43096__$1);
var G__43098 = cljs.core.chunk_rest(seq__42550_43096__$1);
var G__43099 = c__4609__auto___43097;
var G__43100 = cljs.core.count(c__4609__auto___43097);
var G__43101 = (0);
seq__42550_43081 = G__43098;
chunk__42551_43082 = G__43099;
count__42552_43083 = G__43100;
i__42553_43084 = G__43101;
continue;
} else {
var vec__42564_43104 = cljs.core.first(seq__42550_43096__$1);
var type_43105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42564_43104,(0),null);
var f_43106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42564_43104,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43105,((function (seq__42550_43081,chunk__42551_43082,count__42552_43083,i__42553_43084,vec__42564_43104,type_43105,f_43106,seq__42550_43096__$1,temp__5735__auto___43095,vec__42547_43078,elem_43079,selector_43080){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43105,dommy$core$this_fn], 0));

return (f_43106.cljs$core$IFn$_invoke$arity$1 ? f_43106.cljs$core$IFn$_invoke$arity$1(e) : f_43106.call(null,e));
});})(seq__42550_43081,chunk__42551_43082,count__42552_43083,i__42553_43084,vec__42564_43104,type_43105,f_43106,seq__42550_43096__$1,temp__5735__auto___43095,vec__42547_43078,elem_43079,selector_43080))
], 0));


var G__43112 = cljs.core.next(seq__42550_43096__$1);
var G__43113 = null;
var G__43114 = (0);
var G__43115 = (0);
seq__42550_43081 = G__43112;
chunk__42551_43082 = G__43113;
count__42552_43083 = G__43114;
i__42553_43084 = G__43115;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq42544){
var G__42545 = cljs.core.first(seq42544);
var seq42544__$1 = cljs.core.next(seq42544);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42545,seq42544__$1);
}));


//# sourceMappingURL=dommy.core.js.map
