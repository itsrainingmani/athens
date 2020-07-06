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
var G__34716 = arguments.length;
switch (G__34716) {
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
var G__34718 = arguments.length;
switch (G__34718) {
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
var G__34721 = arguments.length;
switch (G__34721) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34719_SHARP_){
return (!((p1__34719_SHARP_ === base)));
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
var len__4789__auto___35136 = arguments.length;
var i__4790__auto___35137 = (0);
while(true){
if((i__4790__auto___35137 < len__4789__auto___35136)){
args__4795__auto__.push((arguments[i__4790__auto___35137]));

var G__35138 = (i__4790__auto___35137 + (1));
i__4790__auto___35137 = G__35138;
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
var seq__34726_35139 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35140 = null;
var count__34728_35141 = (0);
var i__34729_35142 = (0);
while(true){
if((i__34729_35142 < count__34728_35141)){
var vec__34736_35143 = chunk__34727_35140.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35142);
var k_35144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35143,(0),null);
var v_35145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35143,(1),null);
style.setProperty(dommy.utils.as_str(k_35144),v_35145);


var G__35146 = seq__34726_35139;
var G__35147 = chunk__34727_35140;
var G__35148 = count__34728_35141;
var G__35149 = (i__34729_35142 + (1));
seq__34726_35139 = G__35146;
chunk__34727_35140 = G__35147;
count__34728_35141 = G__35148;
i__34729_35142 = G__35149;
continue;
} else {
var temp__5735__auto___35150 = cljs.core.seq(seq__34726_35139);
if(temp__5735__auto___35150){
var seq__34726_35151__$1 = temp__5735__auto___35150;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35151__$1)){
var c__4609__auto___35152 = cljs.core.chunk_first(seq__34726_35151__$1);
var G__35153 = cljs.core.chunk_rest(seq__34726_35151__$1);
var G__35154 = c__4609__auto___35152;
var G__35155 = cljs.core.count(c__4609__auto___35152);
var G__35156 = (0);
seq__34726_35139 = G__35153;
chunk__34727_35140 = G__35154;
count__34728_35141 = G__35155;
i__34729_35142 = G__35156;
continue;
} else {
var vec__34739_35157 = cljs.core.first(seq__34726_35151__$1);
var k_35158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35157,(0),null);
var v_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35157,(1),null);
style.setProperty(dommy.utils.as_str(k_35158),v_35159);


var G__35161 = cljs.core.next(seq__34726_35151__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__34726_35139 = G__35161;
chunk__34727_35140 = G__35162;
count__34728_35141 = G__35163;
i__34729_35142 = G__35164;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34724){
var G__34725 = cljs.core.first(seq34724);
var seq34724__$1 = cljs.core.next(seq34724);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34725,seq34724__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35170 = arguments.length;
var i__4790__auto___35171 = (0);
while(true){
if((i__4790__auto___35171 < len__4789__auto___35170)){
args__4795__auto__.push((arguments[i__4790__auto___35171]));

var G__35172 = (i__4790__auto___35171 + (1));
i__4790__auto___35171 = G__35172;
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
var seq__34744_35184 = cljs.core.seq(keywords);
var chunk__34745_35185 = null;
var count__34746_35186 = (0);
var i__34747_35187 = (0);
while(true){
if((i__34747_35187 < count__34746_35186)){
var kw_35188 = chunk__34745_35185.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35187);
style.removeProperty(dommy.utils.as_str(kw_35188));


var G__35190 = seq__34744_35184;
var G__35191 = chunk__34745_35185;
var G__35192 = count__34746_35186;
var G__35193 = (i__34747_35187 + (1));
seq__34744_35184 = G__35190;
chunk__34745_35185 = G__35191;
count__34746_35186 = G__35192;
i__34747_35187 = G__35193;
continue;
} else {
var temp__5735__auto___35194 = cljs.core.seq(seq__34744_35184);
if(temp__5735__auto___35194){
var seq__34744_35195__$1 = temp__5735__auto___35194;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35195__$1)){
var c__4609__auto___35200 = cljs.core.chunk_first(seq__34744_35195__$1);
var G__35201 = cljs.core.chunk_rest(seq__34744_35195__$1);
var G__35202 = c__4609__auto___35200;
var G__35203 = cljs.core.count(c__4609__auto___35200);
var G__35204 = (0);
seq__34744_35184 = G__35201;
chunk__34745_35185 = G__35202;
count__34746_35186 = G__35203;
i__34747_35187 = G__35204;
continue;
} else {
var kw_35205 = cljs.core.first(seq__34744_35195__$1);
style.removeProperty(dommy.utils.as_str(kw_35205));


var G__35206 = cljs.core.next(seq__34744_35195__$1);
var G__35207 = null;
var G__35208 = (0);
var G__35209 = (0);
seq__34744_35184 = G__35206;
chunk__34745_35185 = G__35207;
count__34746_35186 = G__35208;
i__34747_35187 = G__35209;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34742){
var G__34743 = cljs.core.first(seq34742);
var seq34742__$1 = cljs.core.next(seq34742);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34743,seq34742__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35210 = arguments.length;
var i__4790__auto___35211 = (0);
while(true){
if((i__4790__auto___35211 < len__4789__auto___35210)){
args__4795__auto__.push((arguments[i__4790__auto___35211]));

var G__35212 = (i__4790__auto___35211 + (1));
i__4790__auto___35211 = G__35212;
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

var seq__34750_35213 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34751_35214 = null;
var count__34752_35215 = (0);
var i__34753_35216 = (0);
while(true){
if((i__34753_35216 < count__34752_35215)){
var vec__34761_35217 = chunk__34751_35214.cljs$core$IIndexed$_nth$arity$2(null,i__34753_35216);
var k_35218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35217,(0),null);
var v_35219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35217,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35218,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35219),"px"].join('')], 0));


var G__35220 = seq__34750_35213;
var G__35221 = chunk__34751_35214;
var G__35222 = count__34752_35215;
var G__35223 = (i__34753_35216 + (1));
seq__34750_35213 = G__35220;
chunk__34751_35214 = G__35221;
count__34752_35215 = G__35222;
i__34753_35216 = G__35223;
continue;
} else {
var temp__5735__auto___35224 = cljs.core.seq(seq__34750_35213);
if(temp__5735__auto___35224){
var seq__34750_35225__$1 = temp__5735__auto___35224;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35225__$1)){
var c__4609__auto___35227 = cljs.core.chunk_first(seq__34750_35225__$1);
var G__35228 = cljs.core.chunk_rest(seq__34750_35225__$1);
var G__35229 = c__4609__auto___35227;
var G__35230 = cljs.core.count(c__4609__auto___35227);
var G__35231 = (0);
seq__34750_35213 = G__35228;
chunk__34751_35214 = G__35229;
count__34752_35215 = G__35230;
i__34753_35216 = G__35231;
continue;
} else {
var vec__34764_35234 = cljs.core.first(seq__34750_35225__$1);
var k_35235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35234,(0),null);
var v_35236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35234,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35235,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35236),"px"].join('')], 0));


var G__35237 = cljs.core.next(seq__34750_35225__$1);
var G__35238 = null;
var G__35239 = (0);
var G__35240 = (0);
seq__34750_35213 = G__35237;
chunk__34751_35214 = G__35238;
count__34752_35215 = G__35239;
i__34753_35216 = G__35240;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34748){
var G__34749 = cljs.core.first(seq34748);
var seq34748__$1 = cljs.core.next(seq34748);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34749,seq34748__$1);
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
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35242 = arguments.length;
var i__4790__auto___35243 = (0);
while(true){
if((i__4790__auto___35243 < len__4789__auto___35242)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35243]));

var G__35244 = (i__4790__auto___35243 + (1));
i__4790__auto___35243 = G__35244;
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
var G__34773 = elem;
(G__34773[k__$1] = v);

return G__34773;
} else {
var G__34774 = elem;
G__34774.setAttribute(k__$1,v);

return G__34774;
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

var seq__34775_35246 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35247 = null;
var count__34777_35248 = (0);
var i__34778_35249 = (0);
while(true){
if((i__34778_35249 < count__34777_35248)){
var vec__34785_35250 = chunk__34776_35247.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35249);
var k_35251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35250,(0),null);
var v_35252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35250,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35251__$1,v_35252__$1);


var G__35254 = seq__34775_35246;
var G__35255 = chunk__34776_35247;
var G__35256 = count__34777_35248;
var G__35257 = (i__34778_35249 + (1));
seq__34775_35246 = G__35254;
chunk__34776_35247 = G__35255;
count__34777_35248 = G__35256;
i__34778_35249 = G__35257;
continue;
} else {
var temp__5735__auto___35258 = cljs.core.seq(seq__34775_35246);
if(temp__5735__auto___35258){
var seq__34775_35259__$1 = temp__5735__auto___35258;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35259__$1)){
var c__4609__auto___35260 = cljs.core.chunk_first(seq__34775_35259__$1);
var G__35261 = cljs.core.chunk_rest(seq__34775_35259__$1);
var G__35262 = c__4609__auto___35260;
var G__35263 = cljs.core.count(c__4609__auto___35260);
var G__35264 = (0);
seq__34775_35246 = G__35261;
chunk__34776_35247 = G__35262;
count__34777_35248 = G__35263;
i__34778_35249 = G__35264;
continue;
} else {
var vec__34788_35265 = cljs.core.first(seq__34775_35259__$1);
var k_35266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(0),null);
var v_35267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35266__$1,v_35267__$1);


var G__35268 = cljs.core.next(seq__34775_35259__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__34775_35246 = G__35268;
chunk__34776_35247 = G__35269;
count__34777_35248 = G__35270;
i__34778_35249 = G__35271;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34768){
var G__34769 = cljs.core.first(seq34768);
var seq34768__$1 = cljs.core.next(seq34768);
var G__34770 = cljs.core.first(seq34768__$1);
var seq34768__$2 = cljs.core.next(seq34768__$1);
var G__34771 = cljs.core.first(seq34768__$2);
var seq34768__$3 = cljs.core.next(seq34768__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34769,G__34770,G__34771,seq34768__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34795 = arguments.length;
switch (G__34795) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35273 = arguments.length;
var i__4790__auto___35274 = (0);
while(true){
if((i__4790__auto___35274 < len__4789__auto___35273)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35274]));

var G__35275 = (i__4790__auto___35274 + (1));
i__4790__auto___35274 = G__35275;
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
var k_35276__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35276__$1) : fexpr__34796.call(null,k_35276__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35276__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35277 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35278 = null;
var count__34799_35279 = (0);
var i__34800_35280 = (0);
while(true){
if((i__34800_35280 < count__34799_35279)){
var k_35281__$1 = chunk__34798_35278.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35280);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35281__$1);


var G__35282 = seq__34797_35277;
var G__35283 = chunk__34798_35278;
var G__35284 = count__34799_35279;
var G__35285 = (i__34800_35280 + (1));
seq__34797_35277 = G__35282;
chunk__34798_35278 = G__35283;
count__34799_35279 = G__35284;
i__34800_35280 = G__35285;
continue;
} else {
var temp__5735__auto___35286 = cljs.core.seq(seq__34797_35277);
if(temp__5735__auto___35286){
var seq__34797_35287__$1 = temp__5735__auto___35286;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35287__$1)){
var c__4609__auto___35288 = cljs.core.chunk_first(seq__34797_35287__$1);
var G__35289 = cljs.core.chunk_rest(seq__34797_35287__$1);
var G__35290 = c__4609__auto___35288;
var G__35291 = cljs.core.count(c__4609__auto___35288);
var G__35292 = (0);
seq__34797_35277 = G__35289;
chunk__34798_35278 = G__35290;
count__34799_35279 = G__35291;
i__34800_35280 = G__35292;
continue;
} else {
var k_35293__$1 = cljs.core.first(seq__34797_35287__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35293__$1);


var G__35294 = cljs.core.next(seq__34797_35287__$1);
var G__35295 = null;
var G__35296 = (0);
var G__35297 = (0);
seq__34797_35277 = G__35294;
chunk__34798_35278 = G__35295;
count__34799_35279 = G__35296;
i__34800_35280 = G__35297;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34792){
var G__34793 = cljs.core.first(seq34792);
var seq34792__$1 = cljs.core.next(seq34792);
var G__34794 = cljs.core.first(seq34792__$1);
var seq34792__$2 = cljs.core.next(seq34792__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34793,G__34794,seq34792__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34802 = arguments.length;
switch (G__34802) {
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
var G__34807 = arguments.length;
switch (G__34807) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35300 = arguments.length;
var i__4790__auto___35301 = (0);
while(true){
if((i__4790__auto___35301 < len__4789__auto___35300)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35301]));

var G__35302 = (i__4790__auto___35301 + (1));
i__4790__auto___35301 = G__35302;
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
var temp__5733__auto___35303 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35303)){
var class_list_35304 = temp__5733__auto___35303;
var seq__34808_35305 = cljs.core.seq(classes__$1);
var chunk__34809_35306 = null;
var count__34810_35307 = (0);
var i__34811_35308 = (0);
while(true){
if((i__34811_35308 < count__34810_35307)){
var c_35309 = chunk__34809_35306.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35308);
class_list_35304.add(c_35309);


var G__35310 = seq__34808_35305;
var G__35311 = chunk__34809_35306;
var G__35312 = count__34810_35307;
var G__35313 = (i__34811_35308 + (1));
seq__34808_35305 = G__35310;
chunk__34809_35306 = G__35311;
count__34810_35307 = G__35312;
i__34811_35308 = G__35313;
continue;
} else {
var temp__5735__auto___35314 = cljs.core.seq(seq__34808_35305);
if(temp__5735__auto___35314){
var seq__34808_35315__$1 = temp__5735__auto___35314;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35315__$1)){
var c__4609__auto___35316 = cljs.core.chunk_first(seq__34808_35315__$1);
var G__35317 = cljs.core.chunk_rest(seq__34808_35315__$1);
var G__35318 = c__4609__auto___35316;
var G__35319 = cljs.core.count(c__4609__auto___35316);
var G__35320 = (0);
seq__34808_35305 = G__35317;
chunk__34809_35306 = G__35318;
count__34810_35307 = G__35319;
i__34811_35308 = G__35320;
continue;
} else {
var c_35321 = cljs.core.first(seq__34808_35315__$1);
class_list_35304.add(c_35321);


var G__35322 = cljs.core.next(seq__34808_35315__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__34808_35305 = G__35322;
chunk__34809_35306 = G__35323;
count__34810_35307 = G__35324;
i__34811_35308 = G__35325;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35326 = cljs.core.seq(classes__$1);
var chunk__34813_35327 = null;
var count__34814_35328 = (0);
var i__34815_35329 = (0);
while(true){
if((i__34815_35329 < count__34814_35328)){
var c_35330 = chunk__34813_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35329);
var class_name_35331 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35331,c_35330))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35331 === ""))?c_35330:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35331)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35330)].join('')));
}


var G__35332 = seq__34812_35326;
var G__35333 = chunk__34813_35327;
var G__35334 = count__34814_35328;
var G__35335 = (i__34815_35329 + (1));
seq__34812_35326 = G__35332;
chunk__34813_35327 = G__35333;
count__34814_35328 = G__35334;
i__34815_35329 = G__35335;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34812_35326);
if(temp__5735__auto___35336){
var seq__34812_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35337__$1)){
var c__4609__auto___35338 = cljs.core.chunk_first(seq__34812_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34812_35337__$1);
var G__35340 = c__4609__auto___35338;
var G__35341 = cljs.core.count(c__4609__auto___35338);
var G__35342 = (0);
seq__34812_35326 = G__35339;
chunk__34813_35327 = G__35340;
count__34814_35328 = G__35341;
i__34815_35329 = G__35342;
continue;
} else {
var c_35343 = cljs.core.first(seq__34812_35337__$1);
var class_name_35344 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35344,c_35343))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35344 === ""))?c_35343:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35344)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35343)].join('')));
}


var G__35345 = cljs.core.next(seq__34812_35337__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__34812_35326 = G__35345;
chunk__34813_35327 = G__35346;
count__34814_35328 = G__35347;
i__34815_35329 = G__35348;
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
var seq__34816_35349 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35350 = null;
var count__34818_35351 = (0);
var i__34819_35352 = (0);
while(true){
if((i__34819_35352 < count__34818_35351)){
var c_35353 = chunk__34817_35350.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35352);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35353);


var G__35354 = seq__34816_35349;
var G__35355 = chunk__34817_35350;
var G__35356 = count__34818_35351;
var G__35357 = (i__34819_35352 + (1));
seq__34816_35349 = G__35354;
chunk__34817_35350 = G__35355;
count__34818_35351 = G__35356;
i__34819_35352 = G__35357;
continue;
} else {
var temp__5735__auto___35358 = cljs.core.seq(seq__34816_35349);
if(temp__5735__auto___35358){
var seq__34816_35359__$1 = temp__5735__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35359__$1)){
var c__4609__auto___35360 = cljs.core.chunk_first(seq__34816_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34816_35359__$1);
var G__35362 = c__4609__auto___35360;
var G__35363 = cljs.core.count(c__4609__auto___35360);
var G__35364 = (0);
seq__34816_35349 = G__35361;
chunk__34817_35350 = G__35362;
count__34818_35351 = G__35363;
i__34819_35352 = G__35364;
continue;
} else {
var c_35365 = cljs.core.first(seq__34816_35359__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35365);


var G__35366 = cljs.core.next(seq__34816_35359__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__34816_35349 = G__35366;
chunk__34817_35350 = G__35367;
count__34818_35351 = G__35368;
i__34819_35352 = G__35369;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first(seq34804);
var seq34804__$1 = cljs.core.next(seq34804);
var G__34806 = cljs.core.first(seq34804__$1);
var seq34804__$2 = cljs.core.next(seq34804__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34805,G__34806,seq34804__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34824 = arguments.length;
switch (G__34824) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35371 = arguments.length;
var i__4790__auto___35372 = (0);
while(true){
if((i__4790__auto___35372 < len__4789__auto___35371)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35372]));

var G__35373 = (i__4790__auto___35372 + (1));
i__4790__auto___35372 = G__35373;
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
var temp__5733__auto___35374 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35374)){
var class_list_35375 = temp__5733__auto___35374;
class_list_35375.remove(c__$1);
} else {
var class_name_35376 = dommy.core.class$(elem);
var new_class_name_35377 = dommy.utils.remove_class_str(class_name_35376,c__$1);
if((class_name_35376 === new_class_name_35377)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35377);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34825 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34826 = null;
var count__34827 = (0);
var i__34828 = (0);
while(true){
if((i__34828 < count__34827)){
var c = chunk__34826.cljs$core$IIndexed$_nth$arity$2(null,i__34828);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35378 = seq__34825;
var G__35379 = chunk__34826;
var G__35380 = count__34827;
var G__35381 = (i__34828 + (1));
seq__34825 = G__35378;
chunk__34826 = G__35379;
count__34827 = G__35380;
i__34828 = G__35381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35384 = cljs.core.chunk_rest(seq__34825__$1);
var G__35385 = c__4609__auto__;
var G__35386 = cljs.core.count(c__4609__auto__);
var G__35387 = (0);
seq__34825 = G__35384;
chunk__34826 = G__35385;
count__34827 = G__35386;
i__34828 = G__35387;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35388 = cljs.core.next(seq__34825__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__34825 = G__35388;
chunk__34826 = G__35389;
count__34827 = G__35390;
i__34828 = G__35391;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34821){
var G__34822 = cljs.core.first(seq34821);
var seq34821__$1 = cljs.core.next(seq34821);
var G__34823 = cljs.core.first(seq34821__$1);
var seq34821__$2 = cljs.core.next(seq34821__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34822,G__34823,seq34821__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
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
var temp__5733__auto___35393 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35393)){
var class_list_35394 = temp__5733__auto___35393;
class_list_35394.toggle(c__$1);
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
var G__34832 = arguments.length;
switch (G__34832) {
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
var G__34834 = arguments.length;
switch (G__34834) {
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
var G__34839 = arguments.length;
switch (G__34839) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35402 = arguments.length;
var i__4790__auto___35403 = (0);
while(true){
if((i__4790__auto___35403 < len__4789__auto___35402)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35403]));

var G__35404 = (i__4790__auto___35403 + (1));
i__4790__auto___35403 = G__35404;
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
var G__34840 = parent;
G__34840.appendChild(child);

return G__34840;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34841_35405 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34842_35406 = null;
var count__34843_35407 = (0);
var i__34844_35408 = (0);
while(true){
if((i__34844_35408 < count__34843_35407)){
var c_35409 = chunk__34842_35406.cljs$core$IIndexed$_nth$arity$2(null,i__34844_35408);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35409);


var G__35410 = seq__34841_35405;
var G__35411 = chunk__34842_35406;
var G__35412 = count__34843_35407;
var G__35413 = (i__34844_35408 + (1));
seq__34841_35405 = G__35410;
chunk__34842_35406 = G__35411;
count__34843_35407 = G__35412;
i__34844_35408 = G__35413;
continue;
} else {
var temp__5735__auto___35414 = cljs.core.seq(seq__34841_35405);
if(temp__5735__auto___35414){
var seq__34841_35415__$1 = temp__5735__auto___35414;
if(cljs.core.chunked_seq_QMARK_(seq__34841_35415__$1)){
var c__4609__auto___35416 = cljs.core.chunk_first(seq__34841_35415__$1);
var G__35417 = cljs.core.chunk_rest(seq__34841_35415__$1);
var G__35418 = c__4609__auto___35416;
var G__35419 = cljs.core.count(c__4609__auto___35416);
var G__35420 = (0);
seq__34841_35405 = G__35417;
chunk__34842_35406 = G__35418;
count__34843_35407 = G__35419;
i__34844_35408 = G__35420;
continue;
} else {
var c_35421 = cljs.core.first(seq__34841_35415__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35421);


var G__35422 = cljs.core.next(seq__34841_35415__$1);
var G__35423 = null;
var G__35424 = (0);
var G__35425 = (0);
seq__34841_35405 = G__35422;
chunk__34842_35406 = G__35423;
count__34843_35407 = G__35424;
i__34844_35408 = G__35425;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34836){
var G__34837 = cljs.core.first(seq34836);
var seq34836__$1 = cljs.core.next(seq34836);
var G__34838 = cljs.core.first(seq34836__$1);
var seq34836__$2 = cljs.core.next(seq34836__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34837,G__34838,seq34836__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34850 = arguments.length;
switch (G__34850) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35427 = arguments.length;
var i__4790__auto___35428 = (0);
while(true){
if((i__4790__auto___35428 < len__4789__auto___35427)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35428]));

var G__35429 = (i__4790__auto___35428 + (1));
i__4790__auto___35428 = G__35429;
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
var G__34851 = parent;
G__34851.insertBefore(child,parent.firstChild);

return G__34851;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34852_35430 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34853_35431 = null;
var count__34854_35432 = (0);
var i__34855_35433 = (0);
while(true){
if((i__34855_35433 < count__34854_35432)){
var c_35434 = chunk__34853_35431.cljs$core$IIndexed$_nth$arity$2(null,i__34855_35433);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35434);


var G__35435 = seq__34852_35430;
var G__35436 = chunk__34853_35431;
var G__35437 = count__34854_35432;
var G__35438 = (i__34855_35433 + (1));
seq__34852_35430 = G__35435;
chunk__34853_35431 = G__35436;
count__34854_35432 = G__35437;
i__34855_35433 = G__35438;
continue;
} else {
var temp__5735__auto___35439 = cljs.core.seq(seq__34852_35430);
if(temp__5735__auto___35439){
var seq__34852_35440__$1 = temp__5735__auto___35439;
if(cljs.core.chunked_seq_QMARK_(seq__34852_35440__$1)){
var c__4609__auto___35441 = cljs.core.chunk_first(seq__34852_35440__$1);
var G__35442 = cljs.core.chunk_rest(seq__34852_35440__$1);
var G__35443 = c__4609__auto___35441;
var G__35444 = cljs.core.count(c__4609__auto___35441);
var G__35445 = (0);
seq__34852_35430 = G__35442;
chunk__34853_35431 = G__35443;
count__34854_35432 = G__35444;
i__34855_35433 = G__35445;
continue;
} else {
var c_35446 = cljs.core.first(seq__34852_35440__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35446);


var G__35447 = cljs.core.next(seq__34852_35440__$1);
var G__35448 = null;
var G__35449 = (0);
var G__35450 = (0);
seq__34852_35430 = G__35447;
chunk__34853_35431 = G__35448;
count__34854_35432 = G__35449;
i__34855_35433 = G__35450;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34847){
var G__34848 = cljs.core.first(seq34847);
var seq34847__$1 = cljs.core.next(seq34847);
var G__34849 = cljs.core.first(seq34847__$1);
var seq34847__$2 = cljs.core.next(seq34847__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34848,G__34849,seq34847__$2);
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
var temp__5733__auto___35451 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35451)){
var next_35452 = temp__5733__auto___35451;
dommy.core.insert_before_BANG_(elem,next_35452);
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
var G__34859 = arguments.length;
switch (G__34859) {
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
var G__34860 = p;
G__34860.removeChild(elem);

return G__34860;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34861){
var vec__34862 = p__34861;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
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
var len__4789__auto___35454 = arguments.length;
var i__4790__auto___35455 = (0);
while(true){
if((i__4790__auto___35455 < len__4789__auto___35454)){
args__4795__auto__.push((arguments[i__4790__auto___35455]));

var G__35456 = (i__4790__auto___35455 + (1));
i__4790__auto___35455 = G__35456;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34868 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34868.cljs$core$IFn$_invoke$arity$1 ? fexpr__34868.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34868.call(null,elem_sel));
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
var len__4789__auto___35457 = arguments.length;
var i__4790__auto___35458 = (0);
while(true){
if((i__4790__auto___35458 < len__4789__auto___35457)){
args__4795__auto__.push((arguments[i__4790__auto___35458]));

var G__35459 = (i__4790__auto___35458 + (1));
i__4790__auto___35458 = G__35459;
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

var vec__34871_35460 = dommy.core.elem_and_selector(elem_sel);
var elem_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(0),null);
var selector_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(1),null);
var seq__34874_35464 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35465 = null;
var count__34882_35466 = (0);
var i__34883_35467 = (0);
while(true){
if((i__34883_35467 < count__34882_35466)){
var vec__34936_35468 = chunk__34881_35465.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35467);
var orig_type_35469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35468,(0),null);
var f_35470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35468,(1),null);
var seq__34884_35472 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35469,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35469,cljs.core.identity])));
var chunk__34886_35473 = null;
var count__34887_35474 = (0);
var i__34888_35475 = (0);
while(true){
if((i__34888_35475 < count__34887_35474)){
var vec__34952_35476 = chunk__34886_35473.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35475);
var actual_type_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35476,(0),null);
var factory_35478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35476,(1),null);
var canonical_f_35479 = (function (){var G__34956 = (factory_35478.cljs$core$IFn$_invoke$arity$1 ? factory_35478.cljs$core$IFn$_invoke$arity$1(f_35470) : factory_35478.call(null,f_35470));
var fexpr__34955 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34955.cljs$core$IFn$_invoke$arity$1 ? fexpr__34955.cljs$core$IFn$_invoke$arity$1(G__34956) : fexpr__34955.call(null,G__34956));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35477,f_35470], null),canonical_f_35479], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35477),canonical_f_35479);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35477),canonical_f_35479);
}


var G__35481 = seq__34884_35472;
var G__35482 = chunk__34886_35473;
var G__35483 = count__34887_35474;
var G__35484 = (i__34888_35475 + (1));
seq__34884_35472 = G__35481;
chunk__34886_35473 = G__35482;
count__34887_35474 = G__35483;
i__34888_35475 = G__35484;
continue;
} else {
var temp__5735__auto___35485 = cljs.core.seq(seq__34884_35472);
if(temp__5735__auto___35485){
var seq__34884_35486__$1 = temp__5735__auto___35485;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35486__$1)){
var c__4609__auto___35487 = cljs.core.chunk_first(seq__34884_35486__$1);
var G__35488 = cljs.core.chunk_rest(seq__34884_35486__$1);
var G__35489 = c__4609__auto___35487;
var G__35490 = cljs.core.count(c__4609__auto___35487);
var G__35491 = (0);
seq__34884_35472 = G__35488;
chunk__34886_35473 = G__35489;
count__34887_35474 = G__35490;
i__34888_35475 = G__35491;
continue;
} else {
var vec__34957_35494 = cljs.core.first(seq__34884_35486__$1);
var actual_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35494,(0),null);
var factory_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35494,(1),null);
var canonical_f_35497 = (function (){var G__34961 = (factory_35496.cljs$core$IFn$_invoke$arity$1 ? factory_35496.cljs$core$IFn$_invoke$arity$1(f_35470) : factory_35496.call(null,f_35470));
var fexpr__34960 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34960.cljs$core$IFn$_invoke$arity$1 ? fexpr__34960.cljs$core$IFn$_invoke$arity$1(G__34961) : fexpr__34960.call(null,G__34961));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35495,f_35470], null),canonical_f_35497], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35495),canonical_f_35497);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35495),canonical_f_35497);
}


var G__35499 = cljs.core.next(seq__34884_35486__$1);
var G__35500 = null;
var G__35501 = (0);
var G__35502 = (0);
seq__34884_35472 = G__35499;
chunk__34886_35473 = G__35500;
count__34887_35474 = G__35501;
i__34888_35475 = G__35502;
continue;
}
} else {
}
}
break;
}

var G__35503 = seq__34874_35464;
var G__35504 = chunk__34881_35465;
var G__35505 = count__34882_35466;
var G__35506 = (i__34883_35467 + (1));
seq__34874_35464 = G__35503;
chunk__34881_35465 = G__35504;
count__34882_35466 = G__35505;
i__34883_35467 = G__35506;
continue;
} else {
var temp__5735__auto___35508 = cljs.core.seq(seq__34874_35464);
if(temp__5735__auto___35508){
var seq__34874_35509__$1 = temp__5735__auto___35508;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35509__$1)){
var c__4609__auto___35514 = cljs.core.chunk_first(seq__34874_35509__$1);
var G__35515 = cljs.core.chunk_rest(seq__34874_35509__$1);
var G__35516 = c__4609__auto___35514;
var G__35517 = cljs.core.count(c__4609__auto___35514);
var G__35518 = (0);
seq__34874_35464 = G__35515;
chunk__34881_35465 = G__35516;
count__34882_35466 = G__35517;
i__34883_35467 = G__35518;
continue;
} else {
var vec__34962_35519 = cljs.core.first(seq__34874_35509__$1);
var orig_type_35520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35519,(0),null);
var f_35521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35519,(1),null);
var seq__34875_35522 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35520,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35520,cljs.core.identity])));
var chunk__34877_35523 = null;
var count__34878_35524 = (0);
var i__34879_35525 = (0);
while(true){
if((i__34879_35525 < count__34878_35524)){
var vec__34975_35526 = chunk__34877_35523.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35525);
var actual_type_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35526,(0),null);
var factory_35528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35526,(1),null);
var canonical_f_35531 = (function (){var G__34979 = (factory_35528.cljs$core$IFn$_invoke$arity$1 ? factory_35528.cljs$core$IFn$_invoke$arity$1(f_35521) : factory_35528.call(null,f_35521));
var fexpr__34978 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35527,f_35521], null),canonical_f_35531], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35527),canonical_f_35531);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35527),canonical_f_35531);
}


var G__35532 = seq__34875_35522;
var G__35533 = chunk__34877_35523;
var G__35534 = count__34878_35524;
var G__35535 = (i__34879_35525 + (1));
seq__34875_35522 = G__35532;
chunk__34877_35523 = G__35533;
count__34878_35524 = G__35534;
i__34879_35525 = G__35535;
continue;
} else {
var temp__5735__auto___35536__$1 = cljs.core.seq(seq__34875_35522);
if(temp__5735__auto___35536__$1){
var seq__34875_35538__$1 = temp__5735__auto___35536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35538__$1)){
var c__4609__auto___35540 = cljs.core.chunk_first(seq__34875_35538__$1);
var G__35541 = cljs.core.chunk_rest(seq__34875_35538__$1);
var G__35542 = c__4609__auto___35540;
var G__35543 = cljs.core.count(c__4609__auto___35540);
var G__35544 = (0);
seq__34875_35522 = G__35541;
chunk__34877_35523 = G__35542;
count__34878_35524 = G__35543;
i__34879_35525 = G__35544;
continue;
} else {
var vec__34980_35545 = cljs.core.first(seq__34875_35538__$1);
var actual_type_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35545,(0),null);
var factory_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35545,(1),null);
var canonical_f_35550 = (function (){var G__34984 = (factory_35547.cljs$core$IFn$_invoke$arity$1 ? factory_35547.cljs$core$IFn$_invoke$arity$1(f_35521) : factory_35547.call(null,f_35521));
var fexpr__34983 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35546,f_35521], null),canonical_f_35550], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35546),canonical_f_35550);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35546),canonical_f_35550);
}


var G__35552 = cljs.core.next(seq__34875_35538__$1);
var G__35553 = null;
var G__35554 = (0);
var G__35555 = (0);
seq__34875_35522 = G__35552;
chunk__34877_35523 = G__35553;
count__34878_35524 = G__35554;
i__34879_35525 = G__35555;
continue;
}
} else {
}
}
break;
}

var G__35558 = cljs.core.next(seq__34874_35509__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__34874_35464 = G__35558;
chunk__34881_35465 = G__35559;
count__34882_35466 = G__35560;
i__34883_35467 = G__35561;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first(seq34869);
var seq34869__$1 = cljs.core.next(seq34869);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34870,seq34869__$1);
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
var len__4789__auto___35565 = arguments.length;
var i__4790__auto___35566 = (0);
while(true){
if((i__4790__auto___35566 < len__4789__auto___35565)){
args__4795__auto__.push((arguments[i__4790__auto___35566]));

var G__35569 = (i__4790__auto___35566 + (1));
i__4790__auto___35566 = G__35569;
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

var vec__34990_35572 = dommy.core.elem_and_selector(elem_sel);
var elem_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35572,(0),null);
var selector_35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35572,(1),null);
var seq__34993_35575 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35000_35576 = null;
var count__35001_35577 = (0);
var i__35002_35578 = (0);
while(true){
if((i__35002_35578 < count__35001_35577)){
var vec__35043_35579 = chunk__35000_35576.cljs$core$IIndexed$_nth$arity$2(null,i__35002_35578);
var orig_type_35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043_35579,(0),null);
var f_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043_35579,(1),null);
var seq__35003_35582 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35580,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35580,cljs.core.identity])));
var chunk__35005_35583 = null;
var count__35006_35584 = (0);
var i__35007_35585 = (0);
while(true){
if((i__35007_35585 < count__35006_35584)){
var vec__35052_35586 = chunk__35005_35583.cljs$core$IIndexed$_nth$arity$2(null,i__35007_35585);
var actual_type_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35586,(0),null);
var __35588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35586,(1),null);
var keys_35589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35587,f_35581], null);
var canonical_f_35590 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35589);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35589], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35587),canonical_f_35590);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35587),canonical_f_35590);
}


var G__35591 = seq__35003_35582;
var G__35592 = chunk__35005_35583;
var G__35593 = count__35006_35584;
var G__35594 = (i__35007_35585 + (1));
seq__35003_35582 = G__35591;
chunk__35005_35583 = G__35592;
count__35006_35584 = G__35593;
i__35007_35585 = G__35594;
continue;
} else {
var temp__5735__auto___35595 = cljs.core.seq(seq__35003_35582);
if(temp__5735__auto___35595){
var seq__35003_35596__$1 = temp__5735__auto___35595;
if(cljs.core.chunked_seq_QMARK_(seq__35003_35596__$1)){
var c__4609__auto___35597 = cljs.core.chunk_first(seq__35003_35596__$1);
var G__35598 = cljs.core.chunk_rest(seq__35003_35596__$1);
var G__35599 = c__4609__auto___35597;
var G__35600 = cljs.core.count(c__4609__auto___35597);
var G__35601 = (0);
seq__35003_35582 = G__35598;
chunk__35005_35583 = G__35599;
count__35006_35584 = G__35600;
i__35007_35585 = G__35601;
continue;
} else {
var vec__35058_35602 = cljs.core.first(seq__35003_35596__$1);
var actual_type_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35602,(0),null);
var __35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35602,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35603,f_35581], null);
var canonical_f_35606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35605);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35605], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35603),canonical_f_35606);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35603),canonical_f_35606);
}


var G__35607 = cljs.core.next(seq__35003_35596__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35003_35582 = G__35607;
chunk__35005_35583 = G__35608;
count__35006_35584 = G__35609;
i__35007_35585 = G__35610;
continue;
}
} else {
}
}
break;
}

var G__35611 = seq__34993_35575;
var G__35612 = chunk__35000_35576;
var G__35613 = count__35001_35577;
var G__35614 = (i__35002_35578 + (1));
seq__34993_35575 = G__35611;
chunk__35000_35576 = G__35612;
count__35001_35577 = G__35613;
i__35002_35578 = G__35614;
continue;
} else {
var temp__5735__auto___35615 = cljs.core.seq(seq__34993_35575);
if(temp__5735__auto___35615){
var seq__34993_35616__$1 = temp__5735__auto___35615;
if(cljs.core.chunked_seq_QMARK_(seq__34993_35616__$1)){
var c__4609__auto___35617 = cljs.core.chunk_first(seq__34993_35616__$1);
var G__35618 = cljs.core.chunk_rest(seq__34993_35616__$1);
var G__35619 = c__4609__auto___35617;
var G__35620 = cljs.core.count(c__4609__auto___35617);
var G__35621 = (0);
seq__34993_35575 = G__35618;
chunk__35000_35576 = G__35619;
count__35001_35577 = G__35620;
i__35002_35578 = G__35621;
continue;
} else {
var vec__35065_35622 = cljs.core.first(seq__34993_35616__$1);
var orig_type_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35622,(0),null);
var f_35624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35622,(1),null);
var seq__34994_35625 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35623,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35623,cljs.core.identity])));
var chunk__34996_35626 = null;
var count__34997_35627 = (0);
var i__34998_35628 = (0);
while(true){
if((i__34998_35628 < count__34997_35627)){
var vec__35074_35629 = chunk__34996_35626.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35628);
var actual_type_35630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35629,(0),null);
var __35631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35629,(1),null);
var keys_35632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35630,f_35624], null);
var canonical_f_35633 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35632);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35632], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35630),canonical_f_35633);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35630),canonical_f_35633);
}


var G__35634 = seq__34994_35625;
var G__35635 = chunk__34996_35626;
var G__35636 = count__34997_35627;
var G__35637 = (i__34998_35628 + (1));
seq__34994_35625 = G__35634;
chunk__34996_35626 = G__35635;
count__34997_35627 = G__35636;
i__34998_35628 = G__35637;
continue;
} else {
var temp__5735__auto___35638__$1 = cljs.core.seq(seq__34994_35625);
if(temp__5735__auto___35638__$1){
var seq__34994_35639__$1 = temp__5735__auto___35638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34994_35639__$1)){
var c__4609__auto___35640 = cljs.core.chunk_first(seq__34994_35639__$1);
var G__35641 = cljs.core.chunk_rest(seq__34994_35639__$1);
var G__35642 = c__4609__auto___35640;
var G__35643 = cljs.core.count(c__4609__auto___35640);
var G__35644 = (0);
seq__34994_35625 = G__35641;
chunk__34996_35626 = G__35642;
count__34997_35627 = G__35643;
i__34998_35628 = G__35644;
continue;
} else {
var vec__35077_35645 = cljs.core.first(seq__34994_35639__$1);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35646,f_35624], null);
var canonical_f_35649 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35648);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35648], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35649);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35649);
}


var G__35650 = cljs.core.next(seq__34994_35639__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__34994_35625 = G__35650;
chunk__34996_35626 = G__35651;
count__34997_35627 = G__35652;
i__34998_35628 = G__35653;
continue;
}
} else {
}
}
break;
}

var G__35654 = cljs.core.next(seq__34993_35616__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__34993_35575 = G__35654;
chunk__35000_35576 = G__35655;
count__35001_35577 = G__35656;
i__35002_35578 = G__35657;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34988){
var G__34989 = cljs.core.first(seq34988);
var seq34988__$1 = cljs.core.next(seq34988);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34989,seq34988__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35658 = arguments.length;
var i__4790__auto___35659 = (0);
while(true){
if((i__4790__auto___35659 < len__4789__auto___35658)){
args__4795__auto__.push((arguments[i__4790__auto___35659]));

var G__35660 = (i__4790__auto___35659 + (1));
i__4790__auto___35659 = G__35660;
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

var vec__35082_35661 = dommy.core.elem_and_selector(elem_sel);
var elem_35662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35661,(0),null);
var selector_35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35661,(1),null);
var seq__35085_35664 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35086_35665 = null;
var count__35087_35666 = (0);
var i__35088_35667 = (0);
while(true){
if((i__35088_35667 < count__35087_35666)){
var vec__35098_35668 = chunk__35086_35665.cljs$core$IIndexed$_nth$arity$2(null,i__35088_35667);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35098_35668,type_35669,f_35670,vec__35082_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35098_35668,type_35669,f_35670,vec__35082_35661,elem_35662,selector_35663))
], 0));


var G__35671 = seq__35085_35664;
var G__35672 = chunk__35086_35665;
var G__35673 = count__35087_35666;
var G__35674 = (i__35088_35667 + (1));
seq__35085_35664 = G__35671;
chunk__35086_35665 = G__35672;
count__35087_35666 = G__35673;
i__35088_35667 = G__35674;
continue;
} else {
var temp__5735__auto___35675 = cljs.core.seq(seq__35085_35664);
if(temp__5735__auto___35675){
var seq__35085_35676__$1 = temp__5735__auto___35675;
if(cljs.core.chunked_seq_QMARK_(seq__35085_35676__$1)){
var c__4609__auto___35677 = cljs.core.chunk_first(seq__35085_35676__$1);
var G__35678 = cljs.core.chunk_rest(seq__35085_35676__$1);
var G__35679 = c__4609__auto___35677;
var G__35680 = cljs.core.count(c__4609__auto___35677);
var G__35681 = (0);
seq__35085_35664 = G__35678;
chunk__35086_35665 = G__35679;
count__35087_35666 = G__35680;
i__35088_35667 = G__35681;
continue;
} else {
var vec__35101_35682 = cljs.core.first(seq__35085_35676__$1);
var type_35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35101_35682,(0),null);
var f_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35101_35682,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,((function (seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35101_35682,type_35683,f_35684,seq__35085_35676__$1,temp__5735__auto___35675,vec__35082_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,dommy$core$this_fn], 0));

return (f_35684.cljs$core$IFn$_invoke$arity$1 ? f_35684.cljs$core$IFn$_invoke$arity$1(e) : f_35684.call(null,e));
});})(seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35101_35682,type_35683,f_35684,seq__35085_35676__$1,temp__5735__auto___35675,vec__35082_35661,elem_35662,selector_35663))
], 0));


var G__35685 = cljs.core.next(seq__35085_35676__$1);
var G__35686 = null;
var G__35687 = (0);
var G__35688 = (0);
seq__35085_35664 = G__35685;
chunk__35086_35665 = G__35686;
count__35087_35666 = G__35687;
i__35088_35667 = G__35688;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35080){
var G__35081 = cljs.core.first(seq35080);
var seq35080__$1 = cljs.core.next(seq35080);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35081,seq35080__$1);
}));


//# sourceMappingURL=dommy.core.js.map
