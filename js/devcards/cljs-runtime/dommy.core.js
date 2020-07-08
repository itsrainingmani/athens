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
var G__34732 = arguments.length;
switch (G__34732) {
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
var G__34734 = arguments.length;
switch (G__34734) {
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
var G__34737 = arguments.length;
switch (G__34737) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34735_SHARP_){
return (!((p1__34735_SHARP_ === base)));
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
var len__4789__auto___35125 = arguments.length;
var i__4790__auto___35126 = (0);
while(true){
if((i__4790__auto___35126 < len__4789__auto___35125)){
args__4795__auto__.push((arguments[i__4790__auto___35126]));

var G__35127 = (i__4790__auto___35126 + (1));
i__4790__auto___35126 = G__35127;
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
var seq__34742_35128 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34743_35129 = null;
var count__34744_35130 = (0);
var i__34745_35131 = (0);
while(true){
if((i__34745_35131 < count__34744_35130)){
var vec__34752_35135 = chunk__34743_35129.cljs$core$IIndexed$_nth$arity$2(null,i__34745_35131);
var k_35136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35135,(0),null);
var v_35137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35135,(1),null);
style.setProperty(dommy.utils.as_str(k_35136),v_35137);


var G__35139 = seq__34742_35128;
var G__35140 = chunk__34743_35129;
var G__35141 = count__34744_35130;
var G__35142 = (i__34745_35131 + (1));
seq__34742_35128 = G__35139;
chunk__34743_35129 = G__35140;
count__34744_35130 = G__35141;
i__34745_35131 = G__35142;
continue;
} else {
var temp__5735__auto___35143 = cljs.core.seq(seq__34742_35128);
if(temp__5735__auto___35143){
var seq__34742_35144__$1 = temp__5735__auto___35143;
if(cljs.core.chunked_seq_QMARK_(seq__34742_35144__$1)){
var c__4609__auto___35145 = cljs.core.chunk_first(seq__34742_35144__$1);
var G__35146 = cljs.core.chunk_rest(seq__34742_35144__$1);
var G__35147 = c__4609__auto___35145;
var G__35148 = cljs.core.count(c__4609__auto___35145);
var G__35149 = (0);
seq__34742_35128 = G__35146;
chunk__34743_35129 = G__35147;
count__34744_35130 = G__35148;
i__34745_35131 = G__35149;
continue;
} else {
var vec__34755_35150 = cljs.core.first(seq__34742_35144__$1);
var k_35151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35150,(0),null);
var v_35152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35150,(1),null);
style.setProperty(dommy.utils.as_str(k_35151),v_35152);


var G__35153 = cljs.core.next(seq__34742_35144__$1);
var G__35154 = null;
var G__35155 = (0);
var G__35156 = (0);
seq__34742_35128 = G__35153;
chunk__34743_35129 = G__35154;
count__34744_35130 = G__35155;
i__34745_35131 = G__35156;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34740){
var G__34741 = cljs.core.first(seq34740);
var seq34740__$1 = cljs.core.next(seq34740);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34741,seq34740__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35158 = arguments.length;
var i__4790__auto___35159 = (0);
while(true){
if((i__4790__auto___35159 < len__4789__auto___35158)){
args__4795__auto__.push((arguments[i__4790__auto___35159]));

var G__35161 = (i__4790__auto___35159 + (1));
i__4790__auto___35159 = G__35161;
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
var seq__34761_35171 = cljs.core.seq(keywords);
var chunk__34762_35172 = null;
var count__34763_35173 = (0);
var i__34764_35174 = (0);
while(true){
if((i__34764_35174 < count__34763_35173)){
var kw_35176 = chunk__34762_35172.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35174);
style.removeProperty(dommy.utils.as_str(kw_35176));


var G__35179 = seq__34761_35171;
var G__35180 = chunk__34762_35172;
var G__35181 = count__34763_35173;
var G__35182 = (i__34764_35174 + (1));
seq__34761_35171 = G__35179;
chunk__34762_35172 = G__35180;
count__34763_35173 = G__35181;
i__34764_35174 = G__35182;
continue;
} else {
var temp__5735__auto___35187 = cljs.core.seq(seq__34761_35171);
if(temp__5735__auto___35187){
var seq__34761_35189__$1 = temp__5735__auto___35187;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35189__$1)){
var c__4609__auto___35194 = cljs.core.chunk_first(seq__34761_35189__$1);
var G__35195 = cljs.core.chunk_rest(seq__34761_35189__$1);
var G__35196 = c__4609__auto___35194;
var G__35197 = cljs.core.count(c__4609__auto___35194);
var G__35198 = (0);
seq__34761_35171 = G__35195;
chunk__34762_35172 = G__35196;
count__34763_35173 = G__35197;
i__34764_35174 = G__35198;
continue;
} else {
var kw_35199 = cljs.core.first(seq__34761_35189__$1);
style.removeProperty(dommy.utils.as_str(kw_35199));


var G__35200 = cljs.core.next(seq__34761_35189__$1);
var G__35201 = null;
var G__35202 = (0);
var G__35203 = (0);
seq__34761_35171 = G__35200;
chunk__34762_35172 = G__35201;
count__34763_35173 = G__35202;
i__34764_35174 = G__35203;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34758){
var G__34759 = cljs.core.first(seq34758);
var seq34758__$1 = cljs.core.next(seq34758);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34759,seq34758__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35204 = arguments.length;
var i__4790__auto___35205 = (0);
while(true){
if((i__4790__auto___35205 < len__4789__auto___35204)){
args__4795__auto__.push((arguments[i__4790__auto___35205]));

var G__35206 = (i__4790__auto___35205 + (1));
i__4790__auto___35205 = G__35206;
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

var seq__34767_35207 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34768_35208 = null;
var count__34769_35209 = (0);
var i__34770_35210 = (0);
while(true){
if((i__34770_35210 < count__34769_35209)){
var vec__34777_35211 = chunk__34768_35208.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35210);
var k_35212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35211,(0),null);
var v_35213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35211,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35212,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35213),"px"].join('')], 0));


var G__35214 = seq__34767_35207;
var G__35215 = chunk__34768_35208;
var G__35216 = count__34769_35209;
var G__35217 = (i__34770_35210 + (1));
seq__34767_35207 = G__35214;
chunk__34768_35208 = G__35215;
count__34769_35209 = G__35216;
i__34770_35210 = G__35217;
continue;
} else {
var temp__5735__auto___35219 = cljs.core.seq(seq__34767_35207);
if(temp__5735__auto___35219){
var seq__34767_35220__$1 = temp__5735__auto___35219;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35220__$1)){
var c__4609__auto___35221 = cljs.core.chunk_first(seq__34767_35220__$1);
var G__35222 = cljs.core.chunk_rest(seq__34767_35220__$1);
var G__35223 = c__4609__auto___35221;
var G__35224 = cljs.core.count(c__4609__auto___35221);
var G__35225 = (0);
seq__34767_35207 = G__35222;
chunk__34768_35208 = G__35223;
count__34769_35209 = G__35224;
i__34770_35210 = G__35225;
continue;
} else {
var vec__34780_35230 = cljs.core.first(seq__34767_35220__$1);
var k_35231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35230,(0),null);
var v_35232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35230,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35231,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35232),"px"].join('')], 0));


var G__35234 = cljs.core.next(seq__34767_35220__$1);
var G__35235 = null;
var G__35236 = (0);
var G__35237 = (0);
seq__34767_35207 = G__35234;
chunk__34768_35208 = G__35235;
count__34769_35209 = G__35236;
i__34770_35210 = G__35237;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34765){
var G__34766 = cljs.core.first(seq34765);
var seq34765__$1 = cljs.core.next(seq34765);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34766,seq34765__$1);
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
var G__34788 = arguments.length;
switch (G__34788) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35251 = arguments.length;
var i__4790__auto___35252 = (0);
while(true){
if((i__4790__auto___35252 < len__4789__auto___35251)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35252]));

var G__35253 = (i__4790__auto___35252 + (1));
i__4790__auto___35252 = G__35253;
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
var G__34789 = elem;
(G__34789[k__$1] = v);

return G__34789;
} else {
var G__34790 = elem;
G__34790.setAttribute(k__$1,v);

return G__34790;
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

var seq__34791_35258 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35259 = null;
var count__34793_35260 = (0);
var i__34794_35261 = (0);
while(true){
if((i__34794_35261 < count__34793_35260)){
var vec__34801_35262 = chunk__34792_35259.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35261);
var k_35263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35262,(0),null);
var v_35264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35262,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35263__$1,v_35264__$1);


var G__35265 = seq__34791_35258;
var G__35266 = chunk__34792_35259;
var G__35267 = count__34793_35260;
var G__35268 = (i__34794_35261 + (1));
seq__34791_35258 = G__35265;
chunk__34792_35259 = G__35266;
count__34793_35260 = G__35267;
i__34794_35261 = G__35268;
continue;
} else {
var temp__5735__auto___35269 = cljs.core.seq(seq__34791_35258);
if(temp__5735__auto___35269){
var seq__34791_35270__$1 = temp__5735__auto___35269;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35270__$1)){
var c__4609__auto___35271 = cljs.core.chunk_first(seq__34791_35270__$1);
var G__35272 = cljs.core.chunk_rest(seq__34791_35270__$1);
var G__35273 = c__4609__auto___35271;
var G__35274 = cljs.core.count(c__4609__auto___35271);
var G__35275 = (0);
seq__34791_35258 = G__35272;
chunk__34792_35259 = G__35273;
count__34793_35260 = G__35274;
i__34794_35261 = G__35275;
continue;
} else {
var vec__34804_35276 = cljs.core.first(seq__34791_35270__$1);
var k_35277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35276,(0),null);
var v_35278__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35276,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35277__$1,v_35278__$1);


var G__35282 = cljs.core.next(seq__34791_35270__$1);
var G__35283 = null;
var G__35284 = (0);
var G__35285 = (0);
seq__34791_35258 = G__35282;
chunk__34792_35259 = G__35283;
count__34793_35260 = G__35284;
i__34794_35261 = G__35285;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first(seq34784);
var seq34784__$1 = cljs.core.next(seq34784);
var G__34786 = cljs.core.first(seq34784__$1);
var seq34784__$2 = cljs.core.next(seq34784__$1);
var G__34787 = cljs.core.first(seq34784__$2);
var seq34784__$3 = cljs.core.next(seq34784__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34785,G__34786,G__34787,seq34784__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35287 = arguments.length;
var i__4790__auto___35288 = (0);
while(true){
if((i__4790__auto___35288 < len__4789__auto___35287)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35288]));

var G__35289 = (i__4790__auto___35288 + (1));
i__4790__auto___35288 = G__35289;
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
var k_35290__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34812.cljs$core$IFn$_invoke$arity$1 ? fexpr__34812.cljs$core$IFn$_invoke$arity$1(k_35290__$1) : fexpr__34812.call(null,k_35290__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35290__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34813_35292 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34814_35293 = null;
var count__34815_35294 = (0);
var i__34816_35295 = (0);
while(true){
if((i__34816_35295 < count__34815_35294)){
var k_35296__$1 = chunk__34814_35293.cljs$core$IIndexed$_nth$arity$2(null,i__34816_35295);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35296__$1);


var G__35297 = seq__34813_35292;
var G__35298 = chunk__34814_35293;
var G__35299 = count__34815_35294;
var G__35300 = (i__34816_35295 + (1));
seq__34813_35292 = G__35297;
chunk__34814_35293 = G__35298;
count__34815_35294 = G__35299;
i__34816_35295 = G__35300;
continue;
} else {
var temp__5735__auto___35301 = cljs.core.seq(seq__34813_35292);
if(temp__5735__auto___35301){
var seq__34813_35302__$1 = temp__5735__auto___35301;
if(cljs.core.chunked_seq_QMARK_(seq__34813_35302__$1)){
var c__4609__auto___35303 = cljs.core.chunk_first(seq__34813_35302__$1);
var G__35304 = cljs.core.chunk_rest(seq__34813_35302__$1);
var G__35305 = c__4609__auto___35303;
var G__35306 = cljs.core.count(c__4609__auto___35303);
var G__35307 = (0);
seq__34813_35292 = G__35304;
chunk__34814_35293 = G__35305;
count__34815_35294 = G__35306;
i__34816_35295 = G__35307;
continue;
} else {
var k_35308__$1 = cljs.core.first(seq__34813_35302__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35308__$1);


var G__35310 = cljs.core.next(seq__34813_35302__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__34813_35292 = G__35310;
chunk__34814_35293 = G__35311;
count__34815_35294 = G__35312;
i__34816_35295 = G__35313;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
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
var G__34823 = arguments.length;
switch (G__34823) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35316 = arguments.length;
var i__4790__auto___35317 = (0);
while(true){
if((i__4790__auto___35317 < len__4789__auto___35316)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35317]));

var G__35318 = (i__4790__auto___35317 + (1));
i__4790__auto___35317 = G__35318;
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
var temp__5733__auto___35319 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35319)){
var class_list_35320 = temp__5733__auto___35319;
var seq__34824_35321 = cljs.core.seq(classes__$1);
var chunk__34825_35322 = null;
var count__34826_35323 = (0);
var i__34827_35324 = (0);
while(true){
if((i__34827_35324 < count__34826_35323)){
var c_35325 = chunk__34825_35322.cljs$core$IIndexed$_nth$arity$2(null,i__34827_35324);
class_list_35320.add(c_35325);


var G__35326 = seq__34824_35321;
var G__35327 = chunk__34825_35322;
var G__35328 = count__34826_35323;
var G__35329 = (i__34827_35324 + (1));
seq__34824_35321 = G__35326;
chunk__34825_35322 = G__35327;
count__34826_35323 = G__35328;
i__34827_35324 = G__35329;
continue;
} else {
var temp__5735__auto___35330 = cljs.core.seq(seq__34824_35321);
if(temp__5735__auto___35330){
var seq__34824_35331__$1 = temp__5735__auto___35330;
if(cljs.core.chunked_seq_QMARK_(seq__34824_35331__$1)){
var c__4609__auto___35332 = cljs.core.chunk_first(seq__34824_35331__$1);
var G__35333 = cljs.core.chunk_rest(seq__34824_35331__$1);
var G__35334 = c__4609__auto___35332;
var G__35335 = cljs.core.count(c__4609__auto___35332);
var G__35336 = (0);
seq__34824_35321 = G__35333;
chunk__34825_35322 = G__35334;
count__34826_35323 = G__35335;
i__34827_35324 = G__35336;
continue;
} else {
var c_35337 = cljs.core.first(seq__34824_35331__$1);
class_list_35320.add(c_35337);


var G__35338 = cljs.core.next(seq__34824_35331__$1);
var G__35339 = null;
var G__35340 = (0);
var G__35341 = (0);
seq__34824_35321 = G__35338;
chunk__34825_35322 = G__35339;
count__34826_35323 = G__35340;
i__34827_35324 = G__35341;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34828_35342 = cljs.core.seq(classes__$1);
var chunk__34829_35343 = null;
var count__34830_35344 = (0);
var i__34831_35345 = (0);
while(true){
if((i__34831_35345 < count__34830_35344)){
var c_35346 = chunk__34829_35343.cljs$core$IIndexed$_nth$arity$2(null,i__34831_35345);
var class_name_35347 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35347,c_35346))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35347 === ""))?c_35346:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35347)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35346)].join('')));
}


var G__35348 = seq__34828_35342;
var G__35349 = chunk__34829_35343;
var G__35350 = count__34830_35344;
var G__35351 = (i__34831_35345 + (1));
seq__34828_35342 = G__35348;
chunk__34829_35343 = G__35349;
count__34830_35344 = G__35350;
i__34831_35345 = G__35351;
continue;
} else {
var temp__5735__auto___35352 = cljs.core.seq(seq__34828_35342);
if(temp__5735__auto___35352){
var seq__34828_35353__$1 = temp__5735__auto___35352;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35353__$1)){
var c__4609__auto___35354 = cljs.core.chunk_first(seq__34828_35353__$1);
var G__35355 = cljs.core.chunk_rest(seq__34828_35353__$1);
var G__35356 = c__4609__auto___35354;
var G__35357 = cljs.core.count(c__4609__auto___35354);
var G__35358 = (0);
seq__34828_35342 = G__35355;
chunk__34829_35343 = G__35356;
count__34830_35344 = G__35357;
i__34831_35345 = G__35358;
continue;
} else {
var c_35359 = cljs.core.first(seq__34828_35353__$1);
var class_name_35360 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35360,c_35359))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35360 === ""))?c_35359:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35360)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35359)].join('')));
}


var G__35361 = cljs.core.next(seq__34828_35353__$1);
var G__35362 = null;
var G__35363 = (0);
var G__35364 = (0);
seq__34828_35342 = G__35361;
chunk__34829_35343 = G__35362;
count__34830_35344 = G__35363;
i__34831_35345 = G__35364;
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
var seq__34832_35365 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34833_35366 = null;
var count__34834_35367 = (0);
var i__34835_35368 = (0);
while(true){
if((i__34835_35368 < count__34834_35367)){
var c_35369 = chunk__34833_35366.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35368);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35369);


var G__35370 = seq__34832_35365;
var G__35371 = chunk__34833_35366;
var G__35372 = count__34834_35367;
var G__35373 = (i__34835_35368 + (1));
seq__34832_35365 = G__35370;
chunk__34833_35366 = G__35371;
count__34834_35367 = G__35372;
i__34835_35368 = G__35373;
continue;
} else {
var temp__5735__auto___35374 = cljs.core.seq(seq__34832_35365);
if(temp__5735__auto___35374){
var seq__34832_35375__$1 = temp__5735__auto___35374;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35375__$1)){
var c__4609__auto___35376 = cljs.core.chunk_first(seq__34832_35375__$1);
var G__35377 = cljs.core.chunk_rest(seq__34832_35375__$1);
var G__35378 = c__4609__auto___35376;
var G__35379 = cljs.core.count(c__4609__auto___35376);
var G__35380 = (0);
seq__34832_35365 = G__35377;
chunk__34833_35366 = G__35378;
count__34834_35367 = G__35379;
i__34835_35368 = G__35380;
continue;
} else {
var c_35381 = cljs.core.first(seq__34832_35375__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35381);


var G__35382 = cljs.core.next(seq__34832_35375__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__34832_35365 = G__35382;
chunk__34833_35366 = G__35383;
count__34834_35367 = G__35384;
i__34835_35368 = G__35385;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34820){
var G__34821 = cljs.core.first(seq34820);
var seq34820__$1 = cljs.core.next(seq34820);
var G__34822 = cljs.core.first(seq34820__$1);
var seq34820__$2 = cljs.core.next(seq34820__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34821,G__34822,seq34820__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35387 = arguments.length;
var i__4790__auto___35388 = (0);
while(true){
if((i__4790__auto___35388 < len__4789__auto___35387)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35388]));

var G__35389 = (i__4790__auto___35388 + (1));
i__4790__auto___35388 = G__35389;
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
var temp__5733__auto___35390 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35390)){
var class_list_35391 = temp__5733__auto___35390;
class_list_35391.remove(c__$1);
} else {
var class_name_35392 = dommy.core.class$(elem);
var new_class_name_35393 = dommy.utils.remove_class_str(class_name_35392,c__$1);
if((class_name_35392 === new_class_name_35393)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35393);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34841 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var c = chunk__34842.cljs$core$IIndexed$_nth$arity$2(null,i__34844);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35394 = seq__34841;
var G__35395 = chunk__34842;
var G__35396 = count__34843;
var G__35397 = (i__34844 + (1));
seq__34841 = G__35394;
chunk__34842 = G__35395;
count__34843 = G__35396;
i__34844 = G__35397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34841);
if(temp__5735__auto__){
var seq__34841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35398 = cljs.core.chunk_rest(seq__34841__$1);
var G__35399 = c__4609__auto__;
var G__35400 = cljs.core.count(c__4609__auto__);
var G__35401 = (0);
seq__34841 = G__35398;
chunk__34842 = G__35399;
count__34843 = G__35400;
i__34844 = G__35401;
continue;
} else {
var c = cljs.core.first(seq__34841__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35402 = cljs.core.next(seq__34841__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__34841 = G__35402;
chunk__34842 = G__35403;
count__34843 = G__35404;
i__34844 = G__35405;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34846 = arguments.length;
switch (G__34846) {
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
var temp__5733__auto___35407 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35407)){
var class_list_35408 = temp__5733__auto___35407;
class_list_35408.toggle(c__$1);
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
var G__34848 = arguments.length;
switch (G__34848) {
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
var G__34850 = arguments.length;
switch (G__34850) {
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
var G__34856 = arguments.length;
switch (G__34856) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35412 = arguments.length;
var i__4790__auto___35413 = (0);
while(true){
if((i__4790__auto___35413 < len__4789__auto___35412)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35413]));

var G__35414 = (i__4790__auto___35413 + (1));
i__4790__auto___35413 = G__35414;
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
var G__34857 = parent;
G__34857.appendChild(child);

return G__34857;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34858_35415 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34859_35416 = null;
var count__34860_35417 = (0);
var i__34861_35418 = (0);
while(true){
if((i__34861_35418 < count__34860_35417)){
var c_35419 = chunk__34859_35416.cljs$core$IIndexed$_nth$arity$2(null,i__34861_35418);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35419);


var G__35420 = seq__34858_35415;
var G__35421 = chunk__34859_35416;
var G__35422 = count__34860_35417;
var G__35423 = (i__34861_35418 + (1));
seq__34858_35415 = G__35420;
chunk__34859_35416 = G__35421;
count__34860_35417 = G__35422;
i__34861_35418 = G__35423;
continue;
} else {
var temp__5735__auto___35424 = cljs.core.seq(seq__34858_35415);
if(temp__5735__auto___35424){
var seq__34858_35425__$1 = temp__5735__auto___35424;
if(cljs.core.chunked_seq_QMARK_(seq__34858_35425__$1)){
var c__4609__auto___35426 = cljs.core.chunk_first(seq__34858_35425__$1);
var G__35427 = cljs.core.chunk_rest(seq__34858_35425__$1);
var G__35428 = c__4609__auto___35426;
var G__35429 = cljs.core.count(c__4609__auto___35426);
var G__35430 = (0);
seq__34858_35415 = G__35427;
chunk__34859_35416 = G__35428;
count__34860_35417 = G__35429;
i__34861_35418 = G__35430;
continue;
} else {
var c_35431 = cljs.core.first(seq__34858_35425__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35431);


var G__35432 = cljs.core.next(seq__34858_35425__$1);
var G__35433 = null;
var G__35434 = (0);
var G__35435 = (0);
seq__34858_35415 = G__35432;
chunk__34859_35416 = G__35433;
count__34860_35417 = G__35434;
i__34861_35418 = G__35435;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34853){
var G__34854 = cljs.core.first(seq34853);
var seq34853__$1 = cljs.core.next(seq34853);
var G__34855 = cljs.core.first(seq34853__$1);
var seq34853__$2 = cljs.core.next(seq34853__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34854,G__34855,seq34853__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35437 = arguments.length;
var i__4790__auto___35438 = (0);
while(true){
if((i__4790__auto___35438 < len__4789__auto___35437)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35438]));

var G__35439 = (i__4790__auto___35438 + (1));
i__4790__auto___35438 = G__35439;
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
var G__34869 = parent;
G__34869.insertBefore(child,parent.firstChild);

return G__34869;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34870_35442 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34871_35443 = null;
var count__34872_35444 = (0);
var i__34873_35445 = (0);
while(true){
if((i__34873_35445 < count__34872_35444)){
var c_35446 = chunk__34871_35443.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35445);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35446);


var G__35447 = seq__34870_35442;
var G__35448 = chunk__34871_35443;
var G__35449 = count__34872_35444;
var G__35450 = (i__34873_35445 + (1));
seq__34870_35442 = G__35447;
chunk__34871_35443 = G__35448;
count__34872_35444 = G__35449;
i__34873_35445 = G__35450;
continue;
} else {
var temp__5735__auto___35451 = cljs.core.seq(seq__34870_35442);
if(temp__5735__auto___35451){
var seq__34870_35452__$1 = temp__5735__auto___35451;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35452__$1)){
var c__4609__auto___35453 = cljs.core.chunk_first(seq__34870_35452__$1);
var G__35454 = cljs.core.chunk_rest(seq__34870_35452__$1);
var G__35455 = c__4609__auto___35453;
var G__35456 = cljs.core.count(c__4609__auto___35453);
var G__35457 = (0);
seq__34870_35442 = G__35454;
chunk__34871_35443 = G__35455;
count__34872_35444 = G__35456;
i__34873_35445 = G__35457;
continue;
} else {
var c_35458 = cljs.core.first(seq__34870_35452__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35458);


var G__35459 = cljs.core.next(seq__34870_35452__$1);
var G__35460 = null;
var G__35461 = (0);
var G__35462 = (0);
seq__34870_35442 = G__35459;
chunk__34871_35443 = G__35460;
count__34872_35444 = G__35461;
i__34873_35445 = G__35462;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
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
var temp__5733__auto___35463 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35463)){
var next_35464 = temp__5733__auto___35463;
dommy.core.insert_before_BANG_(elem,next_35464);
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
var G__34875 = arguments.length;
switch (G__34875) {
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
var G__34876 = p;
G__34876.removeChild(elem);

return G__34876;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34877){
var vec__34878 = p__34877;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(1),null);
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
var len__4789__auto___35470 = arguments.length;
var i__4790__auto___35471 = (0);
while(true){
if((i__4790__auto___35471 < len__4789__auto___35470)){
args__4795__auto__.push((arguments[i__4790__auto___35471]));

var G__35472 = (i__4790__auto___35471 + (1));
i__4790__auto___35471 = G__35472;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34881){
var G__34882 = cljs.core.first(seq34881);
var seq34881__$1 = cljs.core.next(seq34881);
var G__34883 = cljs.core.first(seq34881__$1);
var seq34881__$2 = cljs.core.next(seq34881__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34882,G__34883,seq34881__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34884 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34884.cljs$core$IFn$_invoke$arity$1 ? fexpr__34884.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34884.call(null,elem_sel));
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
var len__4789__auto___35473 = arguments.length;
var i__4790__auto___35474 = (0);
while(true){
if((i__4790__auto___35474 < len__4789__auto___35473)){
args__4795__auto__.push((arguments[i__4790__auto___35474]));

var G__35475 = (i__4790__auto___35474 + (1));
i__4790__auto___35474 = G__35475;
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

var vec__34887_35476 = dommy.core.elem_and_selector(elem_sel);
var elem_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35476,(0),null);
var selector_35478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35476,(1),null);
var seq__34890_35479 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34897_35480 = null;
var count__34898_35481 = (0);
var i__34899_35482 = (0);
while(true){
if((i__34899_35482 < count__34898_35481)){
var vec__34955_35483 = chunk__34897_35480.cljs$core$IIndexed$_nth$arity$2(null,i__34899_35482);
var orig_type_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35483,(0),null);
var f_35485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35483,(1),null);
var seq__34900_35486 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35484,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35484,cljs.core.identity])));
var chunk__34902_35487 = null;
var count__34903_35488 = (0);
var i__34904_35489 = (0);
while(true){
if((i__34904_35489 < count__34903_35488)){
var vec__34968_35490 = chunk__34902_35487.cljs$core$IIndexed$_nth$arity$2(null,i__34904_35489);
var actual_type_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35490,(0),null);
var factory_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35490,(1),null);
var canonical_f_35493 = (function (){var G__34972 = (factory_35492.cljs$core$IFn$_invoke$arity$1 ? factory_35492.cljs$core$IFn$_invoke$arity$1(f_35485) : factory_35492.call(null,f_35485));
var fexpr__34971 = (cljs.core.truth_(selector_35478)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35477,selector_35478):cljs.core.identity);
return (fexpr__34971.cljs$core$IFn$_invoke$arity$1 ? fexpr__34971.cljs$core$IFn$_invoke$arity$1(G__34972) : fexpr__34971.call(null,G__34972));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35477,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35478,actual_type_35491,f_35485], null),canonical_f_35493], 0));

if(cljs.core.truth_(elem_35477.addEventListener)){
elem_35477.addEventListener(cljs.core.name(actual_type_35491),canonical_f_35493);
} else {
elem_35477.attachEvent(cljs.core.name(actual_type_35491),canonical_f_35493);
}


var G__35494 = seq__34900_35486;
var G__35495 = chunk__34902_35487;
var G__35496 = count__34903_35488;
var G__35497 = (i__34904_35489 + (1));
seq__34900_35486 = G__35494;
chunk__34902_35487 = G__35495;
count__34903_35488 = G__35496;
i__34904_35489 = G__35497;
continue;
} else {
var temp__5735__auto___35498 = cljs.core.seq(seq__34900_35486);
if(temp__5735__auto___35498){
var seq__34900_35499__$1 = temp__5735__auto___35498;
if(cljs.core.chunked_seq_QMARK_(seq__34900_35499__$1)){
var c__4609__auto___35500 = cljs.core.chunk_first(seq__34900_35499__$1);
var G__35501 = cljs.core.chunk_rest(seq__34900_35499__$1);
var G__35502 = c__4609__auto___35500;
var G__35503 = cljs.core.count(c__4609__auto___35500);
var G__35504 = (0);
seq__34900_35486 = G__35501;
chunk__34902_35487 = G__35502;
count__34903_35488 = G__35503;
i__34904_35489 = G__35504;
continue;
} else {
var vec__34973_35505 = cljs.core.first(seq__34900_35499__$1);
var actual_type_35506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35505,(0),null);
var factory_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35505,(1),null);
var canonical_f_35508 = (function (){var G__34977 = (factory_35507.cljs$core$IFn$_invoke$arity$1 ? factory_35507.cljs$core$IFn$_invoke$arity$1(f_35485) : factory_35507.call(null,f_35485));
var fexpr__34976 = (cljs.core.truth_(selector_35478)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35477,selector_35478):cljs.core.identity);
return (fexpr__34976.cljs$core$IFn$_invoke$arity$1 ? fexpr__34976.cljs$core$IFn$_invoke$arity$1(G__34977) : fexpr__34976.call(null,G__34977));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35477,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35478,actual_type_35506,f_35485], null),canonical_f_35508], 0));

if(cljs.core.truth_(elem_35477.addEventListener)){
elem_35477.addEventListener(cljs.core.name(actual_type_35506),canonical_f_35508);
} else {
elem_35477.attachEvent(cljs.core.name(actual_type_35506),canonical_f_35508);
}


var G__35509 = cljs.core.next(seq__34900_35499__$1);
var G__35510 = null;
var G__35511 = (0);
var G__35512 = (0);
seq__34900_35486 = G__35509;
chunk__34902_35487 = G__35510;
count__34903_35488 = G__35511;
i__34904_35489 = G__35512;
continue;
}
} else {
}
}
break;
}

var G__35513 = seq__34890_35479;
var G__35514 = chunk__34897_35480;
var G__35515 = count__34898_35481;
var G__35516 = (i__34899_35482 + (1));
seq__34890_35479 = G__35513;
chunk__34897_35480 = G__35514;
count__34898_35481 = G__35515;
i__34899_35482 = G__35516;
continue;
} else {
var temp__5735__auto___35517 = cljs.core.seq(seq__34890_35479);
if(temp__5735__auto___35517){
var seq__34890_35518__$1 = temp__5735__auto___35517;
if(cljs.core.chunked_seq_QMARK_(seq__34890_35518__$1)){
var c__4609__auto___35519 = cljs.core.chunk_first(seq__34890_35518__$1);
var G__35520 = cljs.core.chunk_rest(seq__34890_35518__$1);
var G__35521 = c__4609__auto___35519;
var G__35522 = cljs.core.count(c__4609__auto___35519);
var G__35523 = (0);
seq__34890_35479 = G__35520;
chunk__34897_35480 = G__35521;
count__34898_35481 = G__35522;
i__34899_35482 = G__35523;
continue;
} else {
var vec__34978_35524 = cljs.core.first(seq__34890_35518__$1);
var orig_type_35525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35524,(0),null);
var f_35526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35524,(1),null);
var seq__34891_35527 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35525,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35525,cljs.core.identity])));
var chunk__34893_35528 = null;
var count__34894_35529 = (0);
var i__34895_35530 = (0);
while(true){
if((i__34895_35530 < count__34894_35529)){
var vec__34994_35531 = chunk__34893_35528.cljs$core$IIndexed$_nth$arity$2(null,i__34895_35530);
var actual_type_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35531,(0),null);
var factory_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35531,(1),null);
var canonical_f_35534 = (function (){var G__34998 = (factory_35533.cljs$core$IFn$_invoke$arity$1 ? factory_35533.cljs$core$IFn$_invoke$arity$1(f_35526) : factory_35533.call(null,f_35526));
var fexpr__34997 = (cljs.core.truth_(selector_35478)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35477,selector_35478):cljs.core.identity);
return (fexpr__34997.cljs$core$IFn$_invoke$arity$1 ? fexpr__34997.cljs$core$IFn$_invoke$arity$1(G__34998) : fexpr__34997.call(null,G__34998));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35477,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35478,actual_type_35532,f_35526], null),canonical_f_35534], 0));

if(cljs.core.truth_(elem_35477.addEventListener)){
elem_35477.addEventListener(cljs.core.name(actual_type_35532),canonical_f_35534);
} else {
elem_35477.attachEvent(cljs.core.name(actual_type_35532),canonical_f_35534);
}


var G__35535 = seq__34891_35527;
var G__35536 = chunk__34893_35528;
var G__35537 = count__34894_35529;
var G__35538 = (i__34895_35530 + (1));
seq__34891_35527 = G__35535;
chunk__34893_35528 = G__35536;
count__34894_35529 = G__35537;
i__34895_35530 = G__35538;
continue;
} else {
var temp__5735__auto___35539__$1 = cljs.core.seq(seq__34891_35527);
if(temp__5735__auto___35539__$1){
var seq__34891_35540__$1 = temp__5735__auto___35539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34891_35540__$1)){
var c__4609__auto___35541 = cljs.core.chunk_first(seq__34891_35540__$1);
var G__35542 = cljs.core.chunk_rest(seq__34891_35540__$1);
var G__35543 = c__4609__auto___35541;
var G__35544 = cljs.core.count(c__4609__auto___35541);
var G__35545 = (0);
seq__34891_35527 = G__35542;
chunk__34893_35528 = G__35543;
count__34894_35529 = G__35544;
i__34895_35530 = G__35545;
continue;
} else {
var vec__34999_35546 = cljs.core.first(seq__34891_35540__$1);
var actual_type_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999_35546,(0),null);
var factory_35548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999_35546,(1),null);
var canonical_f_35549 = (function (){var G__35003 = (factory_35548.cljs$core$IFn$_invoke$arity$1 ? factory_35548.cljs$core$IFn$_invoke$arity$1(f_35526) : factory_35548.call(null,f_35526));
var fexpr__35002 = (cljs.core.truth_(selector_35478)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35477,selector_35478):cljs.core.identity);
return (fexpr__35002.cljs$core$IFn$_invoke$arity$1 ? fexpr__35002.cljs$core$IFn$_invoke$arity$1(G__35003) : fexpr__35002.call(null,G__35003));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35477,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35478,actual_type_35547,f_35526], null),canonical_f_35549], 0));

if(cljs.core.truth_(elem_35477.addEventListener)){
elem_35477.addEventListener(cljs.core.name(actual_type_35547),canonical_f_35549);
} else {
elem_35477.attachEvent(cljs.core.name(actual_type_35547),canonical_f_35549);
}


var G__35550 = cljs.core.next(seq__34891_35540__$1);
var G__35551 = null;
var G__35552 = (0);
var G__35553 = (0);
seq__34891_35527 = G__35550;
chunk__34893_35528 = G__35551;
count__34894_35529 = G__35552;
i__34895_35530 = G__35553;
continue;
}
} else {
}
}
break;
}

var G__35554 = cljs.core.next(seq__34890_35518__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__34890_35479 = G__35554;
chunk__34897_35480 = G__35555;
count__34898_35481 = G__35556;
i__34899_35482 = G__35557;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34885){
var G__34886 = cljs.core.first(seq34885);
var seq34885__$1 = cljs.core.next(seq34885);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34886,seq34885__$1);
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
var len__4789__auto___35558 = arguments.length;
var i__4790__auto___35559 = (0);
while(true){
if((i__4790__auto___35559 < len__4789__auto___35558)){
args__4795__auto__.push((arguments[i__4790__auto___35559]));

var G__35560 = (i__4790__auto___35559 + (1));
i__4790__auto___35559 = G__35560;
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

var vec__35006_35561 = dommy.core.elem_and_selector(elem_sel);
var elem_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35561,(0),null);
var selector_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35561,(1),null);
var seq__35009_35564 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35016_35565 = null;
var count__35017_35566 = (0);
var i__35018_35567 = (0);
while(true){
if((i__35018_35567 < count__35017_35566)){
var vec__35059_35568 = chunk__35016_35565.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35567);
var orig_type_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35568,(0),null);
var f_35570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35568,(1),null);
var seq__35019_35571 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35569,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35569,cljs.core.identity])));
var chunk__35021_35572 = null;
var count__35022_35573 = (0);
var i__35023_35574 = (0);
while(true){
if((i__35023_35574 < count__35022_35573)){
var vec__35068_35575 = chunk__35021_35572.cljs$core$IIndexed$_nth$arity$2(null,i__35023_35574);
var actual_type_35576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35575,(0),null);
var __35577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35575,(1),null);
var keys_35578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35563,actual_type_35576,f_35570], null);
var canonical_f_35579 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35562),keys_35578);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35562,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35578], 0));

if(cljs.core.truth_(elem_35562.removeEventListener)){
elem_35562.removeEventListener(cljs.core.name(actual_type_35576),canonical_f_35579);
} else {
elem_35562.detachEvent(cljs.core.name(actual_type_35576),canonical_f_35579);
}


var G__35581 = seq__35019_35571;
var G__35582 = chunk__35021_35572;
var G__35583 = count__35022_35573;
var G__35584 = (i__35023_35574 + (1));
seq__35019_35571 = G__35581;
chunk__35021_35572 = G__35582;
count__35022_35573 = G__35583;
i__35023_35574 = G__35584;
continue;
} else {
var temp__5735__auto___35586 = cljs.core.seq(seq__35019_35571);
if(temp__5735__auto___35586){
var seq__35019_35587__$1 = temp__5735__auto___35586;
if(cljs.core.chunked_seq_QMARK_(seq__35019_35587__$1)){
var c__4609__auto___35588 = cljs.core.chunk_first(seq__35019_35587__$1);
var G__35589 = cljs.core.chunk_rest(seq__35019_35587__$1);
var G__35590 = c__4609__auto___35588;
var G__35591 = cljs.core.count(c__4609__auto___35588);
var G__35592 = (0);
seq__35019_35571 = G__35589;
chunk__35021_35572 = G__35590;
count__35022_35573 = G__35591;
i__35023_35574 = G__35592;
continue;
} else {
var vec__35071_35593 = cljs.core.first(seq__35019_35587__$1);
var actual_type_35594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35593,(0),null);
var __35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35593,(1),null);
var keys_35596 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35563,actual_type_35594,f_35570], null);
var canonical_f_35597 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35562),keys_35596);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35562,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35596], 0));

if(cljs.core.truth_(elem_35562.removeEventListener)){
elem_35562.removeEventListener(cljs.core.name(actual_type_35594),canonical_f_35597);
} else {
elem_35562.detachEvent(cljs.core.name(actual_type_35594),canonical_f_35597);
}


var G__35598 = cljs.core.next(seq__35019_35587__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__35019_35571 = G__35598;
chunk__35021_35572 = G__35599;
count__35022_35573 = G__35600;
i__35023_35574 = G__35601;
continue;
}
} else {
}
}
break;
}

var G__35602 = seq__35009_35564;
var G__35603 = chunk__35016_35565;
var G__35604 = count__35017_35566;
var G__35605 = (i__35018_35567 + (1));
seq__35009_35564 = G__35602;
chunk__35016_35565 = G__35603;
count__35017_35566 = G__35604;
i__35018_35567 = G__35605;
continue;
} else {
var temp__5735__auto___35607 = cljs.core.seq(seq__35009_35564);
if(temp__5735__auto___35607){
var seq__35009_35608__$1 = temp__5735__auto___35607;
if(cljs.core.chunked_seq_QMARK_(seq__35009_35608__$1)){
var c__4609__auto___35609 = cljs.core.chunk_first(seq__35009_35608__$1);
var G__35610 = cljs.core.chunk_rest(seq__35009_35608__$1);
var G__35611 = c__4609__auto___35609;
var G__35612 = cljs.core.count(c__4609__auto___35609);
var G__35613 = (0);
seq__35009_35564 = G__35610;
chunk__35016_35565 = G__35611;
count__35017_35566 = G__35612;
i__35018_35567 = G__35613;
continue;
} else {
var vec__35074_35614 = cljs.core.first(seq__35009_35608__$1);
var orig_type_35615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35614,(0),null);
var f_35616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35614,(1),null);
var seq__35010_35619 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35615,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35615,cljs.core.identity])));
var chunk__35012_35620 = null;
var count__35013_35621 = (0);
var i__35014_35622 = (0);
while(true){
if((i__35014_35622 < count__35013_35621)){
var vec__35086_35624 = chunk__35012_35620.cljs$core$IIndexed$_nth$arity$2(null,i__35014_35622);
var actual_type_35625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35624,(0),null);
var __35626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35624,(1),null);
var keys_35627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35563,actual_type_35625,f_35616], null);
var canonical_f_35628 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35562),keys_35627);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35562,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35627], 0));

if(cljs.core.truth_(elem_35562.removeEventListener)){
elem_35562.removeEventListener(cljs.core.name(actual_type_35625),canonical_f_35628);
} else {
elem_35562.detachEvent(cljs.core.name(actual_type_35625),canonical_f_35628);
}


var G__35629 = seq__35010_35619;
var G__35630 = chunk__35012_35620;
var G__35631 = count__35013_35621;
var G__35632 = (i__35014_35622 + (1));
seq__35010_35619 = G__35629;
chunk__35012_35620 = G__35630;
count__35013_35621 = G__35631;
i__35014_35622 = G__35632;
continue;
} else {
var temp__5735__auto___35633__$1 = cljs.core.seq(seq__35010_35619);
if(temp__5735__auto___35633__$1){
var seq__35010_35635__$1 = temp__5735__auto___35633__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35635__$1)){
var c__4609__auto___35636 = cljs.core.chunk_first(seq__35010_35635__$1);
var G__35637 = cljs.core.chunk_rest(seq__35010_35635__$1);
var G__35638 = c__4609__auto___35636;
var G__35639 = cljs.core.count(c__4609__auto___35636);
var G__35640 = (0);
seq__35010_35619 = G__35637;
chunk__35012_35620 = G__35638;
count__35013_35621 = G__35639;
i__35014_35622 = G__35640;
continue;
} else {
var vec__35093_35645 = cljs.core.first(seq__35010_35635__$1);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35093_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35093_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35563,actual_type_35646,f_35616], null);
var canonical_f_35649 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35562),keys_35648);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35562,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35648], 0));

if(cljs.core.truth_(elem_35562.removeEventListener)){
elem_35562.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35649);
} else {
elem_35562.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35649);
}


var G__35650 = cljs.core.next(seq__35010_35635__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__35010_35619 = G__35650;
chunk__35012_35620 = G__35651;
count__35013_35621 = G__35652;
i__35014_35622 = G__35653;
continue;
}
} else {
}
}
break;
}

var G__35655 = cljs.core.next(seq__35009_35608__$1);
var G__35656 = null;
var G__35657 = (0);
var G__35658 = (0);
seq__35009_35564 = G__35655;
chunk__35016_35565 = G__35656;
count__35017_35566 = G__35657;
i__35018_35567 = G__35658;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35004){
var G__35005 = cljs.core.first(seq35004);
var seq35004__$1 = cljs.core.next(seq35004);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35005,seq35004__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35660 = arguments.length;
var i__4790__auto___35661 = (0);
while(true){
if((i__4790__auto___35661 < len__4789__auto___35660)){
args__4795__auto__.push((arguments[i__4790__auto___35661]));

var G__35662 = (i__4790__auto___35661 + (1));
i__4790__auto___35661 = G__35662;
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

var vec__35098_35665 = dommy.core.elem_and_selector(elem_sel);
var elem_35666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35665,(0),null);
var selector_35667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35665,(1),null);
var seq__35101_35670 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35102_35671 = null;
var count__35103_35672 = (0);
var i__35104_35673 = (0);
while(true){
if((i__35104_35673 < count__35103_35672)){
var vec__35111_35674 = chunk__35102_35671.cljs$core$IIndexed$_nth$arity$2(null,i__35104_35673);
var type_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35674,(0),null);
var f_35676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35674,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35675,((function (seq__35101_35670,chunk__35102_35671,count__35103_35672,i__35104_35673,vec__35111_35674,type_35675,f_35676,vec__35098_35665,elem_35666,selector_35667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35675,dommy$core$this_fn], 0));

return (f_35676.cljs$core$IFn$_invoke$arity$1 ? f_35676.cljs$core$IFn$_invoke$arity$1(e) : f_35676.call(null,e));
});})(seq__35101_35670,chunk__35102_35671,count__35103_35672,i__35104_35673,vec__35111_35674,type_35675,f_35676,vec__35098_35665,elem_35666,selector_35667))
], 0));


var G__35682 = seq__35101_35670;
var G__35683 = chunk__35102_35671;
var G__35684 = count__35103_35672;
var G__35685 = (i__35104_35673 + (1));
seq__35101_35670 = G__35682;
chunk__35102_35671 = G__35683;
count__35103_35672 = G__35684;
i__35104_35673 = G__35685;
continue;
} else {
var temp__5735__auto___35686 = cljs.core.seq(seq__35101_35670);
if(temp__5735__auto___35686){
var seq__35101_35687__$1 = temp__5735__auto___35686;
if(cljs.core.chunked_seq_QMARK_(seq__35101_35687__$1)){
var c__4609__auto___35688 = cljs.core.chunk_first(seq__35101_35687__$1);
var G__35689 = cljs.core.chunk_rest(seq__35101_35687__$1);
var G__35690 = c__4609__auto___35688;
var G__35691 = cljs.core.count(c__4609__auto___35688);
var G__35692 = (0);
seq__35101_35670 = G__35689;
chunk__35102_35671 = G__35690;
count__35103_35672 = G__35691;
i__35104_35673 = G__35692;
continue;
} else {
var vec__35114_35693 = cljs.core.first(seq__35101_35687__$1);
var type_35694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35693,(0),null);
var f_35695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35693,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35694,((function (seq__35101_35670,chunk__35102_35671,count__35103_35672,i__35104_35673,vec__35114_35693,type_35694,f_35695,seq__35101_35687__$1,temp__5735__auto___35686,vec__35098_35665,elem_35666,selector_35667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35694,dommy$core$this_fn], 0));

return (f_35695.cljs$core$IFn$_invoke$arity$1 ? f_35695.cljs$core$IFn$_invoke$arity$1(e) : f_35695.call(null,e));
});})(seq__35101_35670,chunk__35102_35671,count__35103_35672,i__35104_35673,vec__35114_35693,type_35694,f_35695,seq__35101_35687__$1,temp__5735__auto___35686,vec__35098_35665,elem_35666,selector_35667))
], 0));


var G__35701 = cljs.core.next(seq__35101_35687__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35101_35670 = G__35701;
chunk__35102_35671 = G__35702;
count__35103_35672 = G__35703;
i__35104_35673 = G__35704;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35096){
var G__35097 = cljs.core.first(seq35096);
var seq35096__$1 = cljs.core.next(seq35096);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35097,seq35096__$1);
}));


//# sourceMappingURL=dommy.core.js.map
