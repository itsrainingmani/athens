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
var G__34720 = arguments.length;
switch (G__34720) {
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
var G__34722 = arguments.length;
switch (G__34722) {
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
var G__34725 = arguments.length;
switch (G__34725) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34723_SHARP_){
return (!((p1__34723_SHARP_ === base)));
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
var len__4789__auto___35165 = arguments.length;
var i__4790__auto___35166 = (0);
while(true){
if((i__4790__auto___35166 < len__4789__auto___35165)){
args__4795__auto__.push((arguments[i__4790__auto___35166]));

var G__35167 = (i__4790__auto___35166 + (1));
i__4790__auto___35166 = G__35167;
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
var seq__34730_35169 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34731_35170 = null;
var count__34732_35171 = (0);
var i__34733_35172 = (0);
while(true){
if((i__34733_35172 < count__34732_35171)){
var vec__34740_35173 = chunk__34731_35170.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35172);
var k_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35173,(0),null);
var v_35175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35173,(1),null);
style.setProperty(dommy.utils.as_str(k_35174),v_35175);


var G__35177 = seq__34730_35169;
var G__35178 = chunk__34731_35170;
var G__35179 = count__34732_35171;
var G__35180 = (i__34733_35172 + (1));
seq__34730_35169 = G__35177;
chunk__34731_35170 = G__35178;
count__34732_35171 = G__35179;
i__34733_35172 = G__35180;
continue;
} else {
var temp__5735__auto___35181 = cljs.core.seq(seq__34730_35169);
if(temp__5735__auto___35181){
var seq__34730_35182__$1 = temp__5735__auto___35181;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35182__$1)){
var c__4609__auto___35183 = cljs.core.chunk_first(seq__34730_35182__$1);
var G__35184 = cljs.core.chunk_rest(seq__34730_35182__$1);
var G__35185 = c__4609__auto___35183;
var G__35186 = cljs.core.count(c__4609__auto___35183);
var G__35187 = (0);
seq__34730_35169 = G__35184;
chunk__34731_35170 = G__35185;
count__34732_35171 = G__35186;
i__34733_35172 = G__35187;
continue;
} else {
var vec__34743_35188 = cljs.core.first(seq__34730_35182__$1);
var k_35189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35188,(0),null);
var v_35190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35188,(1),null);
style.setProperty(dommy.utils.as_str(k_35189),v_35190);


var G__35191 = cljs.core.next(seq__34730_35182__$1);
var G__35192 = null;
var G__35193 = (0);
var G__35194 = (0);
seq__34730_35169 = G__35191;
chunk__34731_35170 = G__35192;
count__34732_35171 = G__35193;
i__34733_35172 = G__35194;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34728){
var G__34729 = cljs.core.first(seq34728);
var seq34728__$1 = cljs.core.next(seq34728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34729,seq34728__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35195 = arguments.length;
var i__4790__auto___35196 = (0);
while(true){
if((i__4790__auto___35196 < len__4789__auto___35195)){
args__4795__auto__.push((arguments[i__4790__auto___35196]));

var G__35197 = (i__4790__auto___35196 + (1));
i__4790__auto___35196 = G__35197;
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
var seq__34748_35198 = cljs.core.seq(keywords);
var chunk__34749_35199 = null;
var count__34750_35200 = (0);
var i__34751_35201 = (0);
while(true){
if((i__34751_35201 < count__34750_35200)){
var kw_35202 = chunk__34749_35199.cljs$core$IIndexed$_nth$arity$2(null,i__34751_35201);
style.removeProperty(dommy.utils.as_str(kw_35202));


var G__35203 = seq__34748_35198;
var G__35204 = chunk__34749_35199;
var G__35205 = count__34750_35200;
var G__35206 = (i__34751_35201 + (1));
seq__34748_35198 = G__35203;
chunk__34749_35199 = G__35204;
count__34750_35200 = G__35205;
i__34751_35201 = G__35206;
continue;
} else {
var temp__5735__auto___35207 = cljs.core.seq(seq__34748_35198);
if(temp__5735__auto___35207){
var seq__34748_35208__$1 = temp__5735__auto___35207;
if(cljs.core.chunked_seq_QMARK_(seq__34748_35208__$1)){
var c__4609__auto___35209 = cljs.core.chunk_first(seq__34748_35208__$1);
var G__35210 = cljs.core.chunk_rest(seq__34748_35208__$1);
var G__35211 = c__4609__auto___35209;
var G__35212 = cljs.core.count(c__4609__auto___35209);
var G__35213 = (0);
seq__34748_35198 = G__35210;
chunk__34749_35199 = G__35211;
count__34750_35200 = G__35212;
i__34751_35201 = G__35213;
continue;
} else {
var kw_35214 = cljs.core.first(seq__34748_35208__$1);
style.removeProperty(dommy.utils.as_str(kw_35214));


var G__35215 = cljs.core.next(seq__34748_35208__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__34748_35198 = G__35215;
chunk__34749_35199 = G__35216;
count__34750_35200 = G__35217;
i__34751_35201 = G__35218;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34746){
var G__34747 = cljs.core.first(seq34746);
var seq34746__$1 = cljs.core.next(seq34746);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34747,seq34746__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35219 = arguments.length;
var i__4790__auto___35220 = (0);
while(true){
if((i__4790__auto___35220 < len__4789__auto___35219)){
args__4795__auto__.push((arguments[i__4790__auto___35220]));

var G__35221 = (i__4790__auto___35220 + (1));
i__4790__auto___35220 = G__35221;
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

var seq__34754_35222 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34755_35223 = null;
var count__34756_35224 = (0);
var i__34757_35225 = (0);
while(true){
if((i__34757_35225 < count__34756_35224)){
var vec__34764_35226 = chunk__34755_35223.cljs$core$IIndexed$_nth$arity$2(null,i__34757_35225);
var k_35227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35226,(0),null);
var v_35228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35226,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35227,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35228),"px"].join('')], 0));


var G__35229 = seq__34754_35222;
var G__35230 = chunk__34755_35223;
var G__35231 = count__34756_35224;
var G__35232 = (i__34757_35225 + (1));
seq__34754_35222 = G__35229;
chunk__34755_35223 = G__35230;
count__34756_35224 = G__35231;
i__34757_35225 = G__35232;
continue;
} else {
var temp__5735__auto___35233 = cljs.core.seq(seq__34754_35222);
if(temp__5735__auto___35233){
var seq__34754_35234__$1 = temp__5735__auto___35233;
if(cljs.core.chunked_seq_QMARK_(seq__34754_35234__$1)){
var c__4609__auto___35235 = cljs.core.chunk_first(seq__34754_35234__$1);
var G__35236 = cljs.core.chunk_rest(seq__34754_35234__$1);
var G__35237 = c__4609__auto___35235;
var G__35238 = cljs.core.count(c__4609__auto___35235);
var G__35239 = (0);
seq__34754_35222 = G__35236;
chunk__34755_35223 = G__35237;
count__34756_35224 = G__35238;
i__34757_35225 = G__35239;
continue;
} else {
var vec__34768_35240 = cljs.core.first(seq__34754_35234__$1);
var k_35241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35240,(0),null);
var v_35242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35240,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35241,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35242),"px"].join('')], 0));


var G__35243 = cljs.core.next(seq__34754_35234__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__34754_35222 = G__35243;
chunk__34755_35223 = G__35244;
count__34756_35224 = G__35245;
i__34757_35225 = G__35246;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34752){
var G__34753 = cljs.core.first(seq34752);
var seq34752__$1 = cljs.core.next(seq34752);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34753,seq34752__$1);
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
var G__34776 = arguments.length;
switch (G__34776) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35248 = arguments.length;
var i__4790__auto___35249 = (0);
while(true){
if((i__4790__auto___35249 < len__4789__auto___35248)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35249]));

var G__35250 = (i__4790__auto___35249 + (1));
i__4790__auto___35249 = G__35250;
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
var G__34777 = elem;
(G__34777[k__$1] = v);

return G__34777;
} else {
var G__34778 = elem;
G__34778.setAttribute(k__$1,v);

return G__34778;
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

var seq__34779_35251 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34780_35252 = null;
var count__34781_35253 = (0);
var i__34782_35254 = (0);
while(true){
if((i__34782_35254 < count__34781_35253)){
var vec__34789_35255 = chunk__34780_35252.cljs$core$IIndexed$_nth$arity$2(null,i__34782_35254);
var k_35256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35255,(0),null);
var v_35257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35255,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35256__$1,v_35257__$1);


var G__35258 = seq__34779_35251;
var G__35259 = chunk__34780_35252;
var G__35260 = count__34781_35253;
var G__35261 = (i__34782_35254 + (1));
seq__34779_35251 = G__35258;
chunk__34780_35252 = G__35259;
count__34781_35253 = G__35260;
i__34782_35254 = G__35261;
continue;
} else {
var temp__5735__auto___35262 = cljs.core.seq(seq__34779_35251);
if(temp__5735__auto___35262){
var seq__34779_35263__$1 = temp__5735__auto___35262;
if(cljs.core.chunked_seq_QMARK_(seq__34779_35263__$1)){
var c__4609__auto___35264 = cljs.core.chunk_first(seq__34779_35263__$1);
var G__35265 = cljs.core.chunk_rest(seq__34779_35263__$1);
var G__35266 = c__4609__auto___35264;
var G__35267 = cljs.core.count(c__4609__auto___35264);
var G__35268 = (0);
seq__34779_35251 = G__35265;
chunk__34780_35252 = G__35266;
count__34781_35253 = G__35267;
i__34782_35254 = G__35268;
continue;
} else {
var vec__34792_35269 = cljs.core.first(seq__34779_35263__$1);
var k_35270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35269,(0),null);
var v_35271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35269,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35270__$1,v_35271__$1);


var G__35272 = cljs.core.next(seq__34779_35263__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__34779_35251 = G__35272;
chunk__34780_35252 = G__35273;
count__34781_35253 = G__35274;
i__34782_35254 = G__35275;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34772){
var G__34773 = cljs.core.first(seq34772);
var seq34772__$1 = cljs.core.next(seq34772);
var G__34774 = cljs.core.first(seq34772__$1);
var seq34772__$2 = cljs.core.next(seq34772__$1);
var G__34775 = cljs.core.first(seq34772__$2);
var seq34772__$3 = cljs.core.next(seq34772__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34773,G__34774,G__34775,seq34772__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34799 = arguments.length;
switch (G__34799) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35277 = arguments.length;
var i__4790__auto___35278 = (0);
while(true){
if((i__4790__auto___35278 < len__4789__auto___35277)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35278]));

var G__35279 = (i__4790__auto___35278 + (1));
i__4790__auto___35278 = G__35279;
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
var k_35280__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34800 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34800.cljs$core$IFn$_invoke$arity$1 ? fexpr__34800.cljs$core$IFn$_invoke$arity$1(k_35280__$1) : fexpr__34800.call(null,k_35280__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35280__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34801_35281 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34802_35282 = null;
var count__34803_35283 = (0);
var i__34804_35284 = (0);
while(true){
if((i__34804_35284 < count__34803_35283)){
var k_35285__$1 = chunk__34802_35282.cljs$core$IIndexed$_nth$arity$2(null,i__34804_35284);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35285__$1);


var G__35286 = seq__34801_35281;
var G__35287 = chunk__34802_35282;
var G__35288 = count__34803_35283;
var G__35289 = (i__34804_35284 + (1));
seq__34801_35281 = G__35286;
chunk__34802_35282 = G__35287;
count__34803_35283 = G__35288;
i__34804_35284 = G__35289;
continue;
} else {
var temp__5735__auto___35290 = cljs.core.seq(seq__34801_35281);
if(temp__5735__auto___35290){
var seq__34801_35291__$1 = temp__5735__auto___35290;
if(cljs.core.chunked_seq_QMARK_(seq__34801_35291__$1)){
var c__4609__auto___35292 = cljs.core.chunk_first(seq__34801_35291__$1);
var G__35293 = cljs.core.chunk_rest(seq__34801_35291__$1);
var G__35294 = c__4609__auto___35292;
var G__35295 = cljs.core.count(c__4609__auto___35292);
var G__35296 = (0);
seq__34801_35281 = G__35293;
chunk__34802_35282 = G__35294;
count__34803_35283 = G__35295;
i__34804_35284 = G__35296;
continue;
} else {
var k_35297__$1 = cljs.core.first(seq__34801_35291__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35297__$1);


var G__35299 = cljs.core.next(seq__34801_35291__$1);
var G__35300 = null;
var G__35301 = (0);
var G__35302 = (0);
seq__34801_35281 = G__35299;
chunk__34802_35282 = G__35300;
count__34803_35283 = G__35301;
i__34804_35284 = G__35302;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34796){
var G__34797 = cljs.core.first(seq34796);
var seq34796__$1 = cljs.core.next(seq34796);
var G__34798 = cljs.core.first(seq34796__$1);
var seq34796__$2 = cljs.core.next(seq34796__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34797,G__34798,seq34796__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34806 = arguments.length;
switch (G__34806) {
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
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35306 = arguments.length;
var i__4790__auto___35307 = (0);
while(true){
if((i__4790__auto___35307 < len__4789__auto___35306)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35307]));

var G__35308 = (i__4790__auto___35307 + (1));
i__4790__auto___35307 = G__35308;
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
var temp__5733__auto___35309 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35309)){
var class_list_35310 = temp__5733__auto___35309;
var seq__34812_35311 = cljs.core.seq(classes__$1);
var chunk__34813_35312 = null;
var count__34814_35313 = (0);
var i__34815_35314 = (0);
while(true){
if((i__34815_35314 < count__34814_35313)){
var c_35315 = chunk__34813_35312.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35314);
class_list_35310.add(c_35315);


var G__35317 = seq__34812_35311;
var G__35318 = chunk__34813_35312;
var G__35319 = count__34814_35313;
var G__35320 = (i__34815_35314 + (1));
seq__34812_35311 = G__35317;
chunk__34813_35312 = G__35318;
count__34814_35313 = G__35319;
i__34815_35314 = G__35320;
continue;
} else {
var temp__5735__auto___35322 = cljs.core.seq(seq__34812_35311);
if(temp__5735__auto___35322){
var seq__34812_35323__$1 = temp__5735__auto___35322;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35323__$1)){
var c__4609__auto___35324 = cljs.core.chunk_first(seq__34812_35323__$1);
var G__35325 = cljs.core.chunk_rest(seq__34812_35323__$1);
var G__35326 = c__4609__auto___35324;
var G__35327 = cljs.core.count(c__4609__auto___35324);
var G__35328 = (0);
seq__34812_35311 = G__35325;
chunk__34813_35312 = G__35326;
count__34814_35313 = G__35327;
i__34815_35314 = G__35328;
continue;
} else {
var c_35329 = cljs.core.first(seq__34812_35323__$1);
class_list_35310.add(c_35329);


var G__35330 = cljs.core.next(seq__34812_35323__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__34812_35311 = G__35330;
chunk__34813_35312 = G__35331;
count__34814_35313 = G__35332;
i__34815_35314 = G__35333;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34816_35334 = cljs.core.seq(classes__$1);
var chunk__34817_35335 = null;
var count__34818_35336 = (0);
var i__34819_35337 = (0);
while(true){
if((i__34819_35337 < count__34818_35336)){
var c_35338 = chunk__34817_35335.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35337);
var class_name_35339 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35339,c_35338))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35339 === ""))?c_35338:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35339)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35338)].join('')));
}


var G__35340 = seq__34816_35334;
var G__35341 = chunk__34817_35335;
var G__35342 = count__34818_35336;
var G__35343 = (i__34819_35337 + (1));
seq__34816_35334 = G__35340;
chunk__34817_35335 = G__35341;
count__34818_35336 = G__35342;
i__34819_35337 = G__35343;
continue;
} else {
var temp__5735__auto___35346 = cljs.core.seq(seq__34816_35334);
if(temp__5735__auto___35346){
var seq__34816_35347__$1 = temp__5735__auto___35346;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35347__$1)){
var c__4609__auto___35348 = cljs.core.chunk_first(seq__34816_35347__$1);
var G__35349 = cljs.core.chunk_rest(seq__34816_35347__$1);
var G__35350 = c__4609__auto___35348;
var G__35351 = cljs.core.count(c__4609__auto___35348);
var G__35352 = (0);
seq__34816_35334 = G__35349;
chunk__34817_35335 = G__35350;
count__34818_35336 = G__35351;
i__34819_35337 = G__35352;
continue;
} else {
var c_35353 = cljs.core.first(seq__34816_35347__$1);
var class_name_35354 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35354,c_35353))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35354 === ""))?c_35353:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35354)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35353)].join('')));
}


var G__35355 = cljs.core.next(seq__34816_35347__$1);
var G__35356 = null;
var G__35357 = (0);
var G__35358 = (0);
seq__34816_35334 = G__35355;
chunk__34817_35335 = G__35356;
count__34818_35336 = G__35357;
i__34819_35337 = G__35358;
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
var seq__34820_35359 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34821_35360 = null;
var count__34822_35361 = (0);
var i__34823_35362 = (0);
while(true){
if((i__34823_35362 < count__34822_35361)){
var c_35363 = chunk__34821_35360.cljs$core$IIndexed$_nth$arity$2(null,i__34823_35362);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35363);


var G__35364 = seq__34820_35359;
var G__35365 = chunk__34821_35360;
var G__35366 = count__34822_35361;
var G__35367 = (i__34823_35362 + (1));
seq__34820_35359 = G__35364;
chunk__34821_35360 = G__35365;
count__34822_35361 = G__35366;
i__34823_35362 = G__35367;
continue;
} else {
var temp__5735__auto___35368 = cljs.core.seq(seq__34820_35359);
if(temp__5735__auto___35368){
var seq__34820_35369__$1 = temp__5735__auto___35368;
if(cljs.core.chunked_seq_QMARK_(seq__34820_35369__$1)){
var c__4609__auto___35370 = cljs.core.chunk_first(seq__34820_35369__$1);
var G__35371 = cljs.core.chunk_rest(seq__34820_35369__$1);
var G__35372 = c__4609__auto___35370;
var G__35373 = cljs.core.count(c__4609__auto___35370);
var G__35374 = (0);
seq__34820_35359 = G__35371;
chunk__34821_35360 = G__35372;
count__34822_35361 = G__35373;
i__34823_35362 = G__35374;
continue;
} else {
var c_35375 = cljs.core.first(seq__34820_35369__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35375);


var G__35376 = cljs.core.next(seq__34820_35369__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__34820_35359 = G__35376;
chunk__34821_35360 = G__35377;
count__34822_35361 = G__35378;
i__34823_35362 = G__35379;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34828 = arguments.length;
switch (G__34828) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35381 = arguments.length;
var i__4790__auto___35382 = (0);
while(true){
if((i__4790__auto___35382 < len__4789__auto___35381)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35382]));

var G__35383 = (i__4790__auto___35382 + (1));
i__4790__auto___35382 = G__35383;
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
var temp__5733__auto___35384 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35384)){
var class_list_35385 = temp__5733__auto___35384;
class_list_35385.remove(c__$1);
} else {
var class_name_35386 = dommy.core.class$(elem);
var new_class_name_35387 = dommy.utils.remove_class_str(class_name_35386,c__$1);
if((class_name_35386 === new_class_name_35387)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35387);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34829 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34830 = null;
var count__34831 = (0);
var i__34832 = (0);
while(true){
if((i__34832 < count__34831)){
var c = chunk__34830.cljs$core$IIndexed$_nth$arity$2(null,i__34832);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35388 = seq__34829;
var G__35389 = chunk__34830;
var G__35390 = count__34831;
var G__35391 = (i__34832 + (1));
seq__34829 = G__35388;
chunk__34830 = G__35389;
count__34831 = G__35390;
i__34832 = G__35391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34829);
if(temp__5735__auto__){
var seq__34829__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34829__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34829__$1);
var G__35392 = cljs.core.chunk_rest(seq__34829__$1);
var G__35393 = c__4609__auto__;
var G__35394 = cljs.core.count(c__4609__auto__);
var G__35395 = (0);
seq__34829 = G__35392;
chunk__34830 = G__35393;
count__34831 = G__35394;
i__34832 = G__35395;
continue;
} else {
var c = cljs.core.first(seq__34829__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35396 = cljs.core.next(seq__34829__$1);
var G__35397 = null;
var G__35398 = (0);
var G__35399 = (0);
seq__34829 = G__35396;
chunk__34830 = G__35397;
count__34831 = G__35398;
i__34832 = G__35399;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34825){
var G__34826 = cljs.core.first(seq34825);
var seq34825__$1 = cljs.core.next(seq34825);
var G__34827 = cljs.core.first(seq34825__$1);
var seq34825__$2 = cljs.core.next(seq34825__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34826,G__34827,seq34825__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34834 = arguments.length;
switch (G__34834) {
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
var temp__5733__auto___35401 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35401)){
var class_list_35402 = temp__5733__auto___35401;
class_list_35402.toggle(c__$1);
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
var G__34836 = arguments.length;
switch (G__34836) {
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
var G__34839 = arguments.length;
switch (G__34839) {
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
var G__34846 = arguments.length;
switch (G__34846) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35406 = arguments.length;
var i__4790__auto___35407 = (0);
while(true){
if((i__4790__auto___35407 < len__4789__auto___35406)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35407]));

var G__35408 = (i__4790__auto___35407 + (1));
i__4790__auto___35407 = G__35408;
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
var G__34847 = parent;
G__34847.appendChild(child);

return G__34847;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34848_35409 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34849_35410 = null;
var count__34850_35411 = (0);
var i__34851_35412 = (0);
while(true){
if((i__34851_35412 < count__34850_35411)){
var c_35413 = chunk__34849_35410.cljs$core$IIndexed$_nth$arity$2(null,i__34851_35412);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35413);


var G__35414 = seq__34848_35409;
var G__35415 = chunk__34849_35410;
var G__35416 = count__34850_35411;
var G__35417 = (i__34851_35412 + (1));
seq__34848_35409 = G__35414;
chunk__34849_35410 = G__35415;
count__34850_35411 = G__35416;
i__34851_35412 = G__35417;
continue;
} else {
var temp__5735__auto___35418 = cljs.core.seq(seq__34848_35409);
if(temp__5735__auto___35418){
var seq__34848_35419__$1 = temp__5735__auto___35418;
if(cljs.core.chunked_seq_QMARK_(seq__34848_35419__$1)){
var c__4609__auto___35420 = cljs.core.chunk_first(seq__34848_35419__$1);
var G__35421 = cljs.core.chunk_rest(seq__34848_35419__$1);
var G__35422 = c__4609__auto___35420;
var G__35423 = cljs.core.count(c__4609__auto___35420);
var G__35424 = (0);
seq__34848_35409 = G__35421;
chunk__34849_35410 = G__35422;
count__34850_35411 = G__35423;
i__34851_35412 = G__35424;
continue;
} else {
var c_35425 = cljs.core.first(seq__34848_35419__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35425);


var G__35426 = cljs.core.next(seq__34848_35419__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__34848_35409 = G__35426;
chunk__34849_35410 = G__35427;
count__34850_35411 = G__35428;
i__34851_35412 = G__35429;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34842){
var G__34843 = cljs.core.first(seq34842);
var seq34842__$1 = cljs.core.next(seq34842);
var G__34844 = cljs.core.first(seq34842__$1);
var seq34842__$2 = cljs.core.next(seq34842__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34843,G__34844,seq34842__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34856 = arguments.length;
switch (G__34856) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35433 = arguments.length;
var i__4790__auto___35434 = (0);
while(true){
if((i__4790__auto___35434 < len__4789__auto___35433)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35434]));

var G__35435 = (i__4790__auto___35434 + (1));
i__4790__auto___35434 = G__35435;
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
var G__34857 = parent;
G__34857.insertBefore(child,parent.firstChild);

return G__34857;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34858_35436 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34859_35437 = null;
var count__34860_35438 = (0);
var i__34861_35439 = (0);
while(true){
if((i__34861_35439 < count__34860_35438)){
var c_35440 = chunk__34859_35437.cljs$core$IIndexed$_nth$arity$2(null,i__34861_35439);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35440);


var G__35441 = seq__34858_35436;
var G__35442 = chunk__34859_35437;
var G__35443 = count__34860_35438;
var G__35444 = (i__34861_35439 + (1));
seq__34858_35436 = G__35441;
chunk__34859_35437 = G__35442;
count__34860_35438 = G__35443;
i__34861_35439 = G__35444;
continue;
} else {
var temp__5735__auto___35445 = cljs.core.seq(seq__34858_35436);
if(temp__5735__auto___35445){
var seq__34858_35447__$1 = temp__5735__auto___35445;
if(cljs.core.chunked_seq_QMARK_(seq__34858_35447__$1)){
var c__4609__auto___35448 = cljs.core.chunk_first(seq__34858_35447__$1);
var G__35449 = cljs.core.chunk_rest(seq__34858_35447__$1);
var G__35450 = c__4609__auto___35448;
var G__35451 = cljs.core.count(c__4609__auto___35448);
var G__35452 = (0);
seq__34858_35436 = G__35449;
chunk__34859_35437 = G__35450;
count__34860_35438 = G__35451;
i__34861_35439 = G__35452;
continue;
} else {
var c_35453 = cljs.core.first(seq__34858_35447__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35453);


var G__35455 = cljs.core.next(seq__34858_35447__$1);
var G__35456 = null;
var G__35457 = (0);
var G__35458 = (0);
seq__34858_35436 = G__35455;
chunk__34859_35437 = G__35456;
count__34860_35438 = G__35457;
i__34861_35439 = G__35458;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34853){
var G__34854 = cljs.core.first(seq34853);
var seq34853__$1 = cljs.core.next(seq34853);
var G__34855 = cljs.core.first(seq34853__$1);
var seq34853__$2 = cljs.core.next(seq34853__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34854,G__34855,seq34853__$2);
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
var temp__5733__auto___35461 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35461)){
var next_35462 = temp__5733__auto___35461;
dommy.core.insert_before_BANG_(elem,next_35462);
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
var G__34863 = arguments.length;
switch (G__34863) {
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
var G__34864 = p;
G__34864.removeChild(elem);

return G__34864;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34865){
var vec__34866 = p__34865;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(1),null);
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
var len__4789__auto___35478 = arguments.length;
var i__4790__auto___35479 = (0);
while(true){
if((i__4790__auto___35479 < len__4789__auto___35478)){
args__4795__auto__.push((arguments[i__4790__auto___35479]));

var G__35482 = (i__4790__auto___35479 + (1));
i__4790__auto___35479 = G__35482;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first(seq34869);
var seq34869__$1 = cljs.core.next(seq34869);
var G__34871 = cljs.core.first(seq34869__$1);
var seq34869__$2 = cljs.core.next(seq34869__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34870,G__34871,seq34869__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34872 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34872.cljs$core$IFn$_invoke$arity$1 ? fexpr__34872.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34872.call(null,elem_sel));
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
var len__4789__auto___35488 = arguments.length;
var i__4790__auto___35489 = (0);
while(true){
if((i__4790__auto___35489 < len__4789__auto___35488)){
args__4795__auto__.push((arguments[i__4790__auto___35489]));

var G__35490 = (i__4790__auto___35489 + (1));
i__4790__auto___35489 = G__35490;
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

var vec__34875_35491 = dommy.core.elem_and_selector(elem_sel);
var elem_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35491,(0),null);
var selector_35493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35491,(1),null);
var seq__34878_35494 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34885_35495 = null;
var count__34886_35496 = (0);
var i__34887_35497 = (0);
while(true){
if((i__34887_35497 < count__34886_35496)){
var vec__34943_35498 = chunk__34885_35495.cljs$core$IIndexed$_nth$arity$2(null,i__34887_35497);
var orig_type_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35498,(0),null);
var f_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35498,(1),null);
var seq__34888_35501 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35499,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35499,cljs.core.identity])));
var chunk__34890_35502 = null;
var count__34891_35503 = (0);
var i__34892_35504 = (0);
while(true){
if((i__34892_35504 < count__34891_35503)){
var vec__34959_35505 = chunk__34890_35502.cljs$core$IIndexed$_nth$arity$2(null,i__34892_35504);
var actual_type_35506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34959_35505,(0),null);
var factory_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34959_35505,(1),null);
var canonical_f_35508 = (function (){var G__34963 = (factory_35507.cljs$core$IFn$_invoke$arity$1 ? factory_35507.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35507.call(null,f_35500));
var fexpr__34962 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34962.cljs$core$IFn$_invoke$arity$1 ? fexpr__34962.cljs$core$IFn$_invoke$arity$1(G__34963) : fexpr__34962.call(null,G__34963));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35506,f_35500], null),canonical_f_35508], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35506),canonical_f_35508);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35506),canonical_f_35508);
}


var G__35509 = seq__34888_35501;
var G__35510 = chunk__34890_35502;
var G__35511 = count__34891_35503;
var G__35512 = (i__34892_35504 + (1));
seq__34888_35501 = G__35509;
chunk__34890_35502 = G__35510;
count__34891_35503 = G__35511;
i__34892_35504 = G__35512;
continue;
} else {
var temp__5735__auto___35513 = cljs.core.seq(seq__34888_35501);
if(temp__5735__auto___35513){
var seq__34888_35514__$1 = temp__5735__auto___35513;
if(cljs.core.chunked_seq_QMARK_(seq__34888_35514__$1)){
var c__4609__auto___35515 = cljs.core.chunk_first(seq__34888_35514__$1);
var G__35516 = cljs.core.chunk_rest(seq__34888_35514__$1);
var G__35517 = c__4609__auto___35515;
var G__35518 = cljs.core.count(c__4609__auto___35515);
var G__35519 = (0);
seq__34888_35501 = G__35516;
chunk__34890_35502 = G__35517;
count__34891_35503 = G__35518;
i__34892_35504 = G__35519;
continue;
} else {
var vec__34964_35520 = cljs.core.first(seq__34888_35514__$1);
var actual_type_35521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35520,(0),null);
var factory_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35520,(1),null);
var canonical_f_35523 = (function (){var G__34968 = (factory_35522.cljs$core$IFn$_invoke$arity$1 ? factory_35522.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35522.call(null,f_35500));
var fexpr__34967 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34967.cljs$core$IFn$_invoke$arity$1 ? fexpr__34967.cljs$core$IFn$_invoke$arity$1(G__34968) : fexpr__34967.call(null,G__34968));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35521,f_35500], null),canonical_f_35523], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35521),canonical_f_35523);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35521),canonical_f_35523);
}


var G__35524 = cljs.core.next(seq__34888_35514__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__34888_35501 = G__35524;
chunk__34890_35502 = G__35525;
count__34891_35503 = G__35526;
i__34892_35504 = G__35527;
continue;
}
} else {
}
}
break;
}

var G__35528 = seq__34878_35494;
var G__35529 = chunk__34885_35495;
var G__35530 = count__34886_35496;
var G__35531 = (i__34887_35497 + (1));
seq__34878_35494 = G__35528;
chunk__34885_35495 = G__35529;
count__34886_35496 = G__35530;
i__34887_35497 = G__35531;
continue;
} else {
var temp__5735__auto___35532 = cljs.core.seq(seq__34878_35494);
if(temp__5735__auto___35532){
var seq__34878_35533__$1 = temp__5735__auto___35532;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35533__$1)){
var c__4609__auto___35534 = cljs.core.chunk_first(seq__34878_35533__$1);
var G__35535 = cljs.core.chunk_rest(seq__34878_35533__$1);
var G__35536 = c__4609__auto___35534;
var G__35537 = cljs.core.count(c__4609__auto___35534);
var G__35538 = (0);
seq__34878_35494 = G__35535;
chunk__34885_35495 = G__35536;
count__34886_35496 = G__35537;
i__34887_35497 = G__35538;
continue;
} else {
var vec__34969_35539 = cljs.core.first(seq__34878_35533__$1);
var orig_type_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35539,(0),null);
var f_35541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35539,(1),null);
var seq__34879_35542 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35540,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35540,cljs.core.identity])));
var chunk__34881_35543 = null;
var count__34882_35544 = (0);
var i__34883_35545 = (0);
while(true){
if((i__34883_35545 < count__34882_35544)){
var vec__34982_35546 = chunk__34881_35543.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35545);
var actual_type_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35546,(0),null);
var factory_35548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35546,(1),null);
var canonical_f_35549 = (function (){var G__34986 = (factory_35548.cljs$core$IFn$_invoke$arity$1 ? factory_35548.cljs$core$IFn$_invoke$arity$1(f_35541) : factory_35548.call(null,f_35541));
var fexpr__34985 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34985.cljs$core$IFn$_invoke$arity$1 ? fexpr__34985.cljs$core$IFn$_invoke$arity$1(G__34986) : fexpr__34985.call(null,G__34986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35547,f_35541], null),canonical_f_35549], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35547),canonical_f_35549);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35547),canonical_f_35549);
}


var G__35550 = seq__34879_35542;
var G__35551 = chunk__34881_35543;
var G__35552 = count__34882_35544;
var G__35553 = (i__34883_35545 + (1));
seq__34879_35542 = G__35550;
chunk__34881_35543 = G__35551;
count__34882_35544 = G__35552;
i__34883_35545 = G__35553;
continue;
} else {
var temp__5735__auto___35554__$1 = cljs.core.seq(seq__34879_35542);
if(temp__5735__auto___35554__$1){
var seq__34879_35555__$1 = temp__5735__auto___35554__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34879_35555__$1)){
var c__4609__auto___35556 = cljs.core.chunk_first(seq__34879_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__34879_35555__$1);
var G__35558 = c__4609__auto___35556;
var G__35559 = cljs.core.count(c__4609__auto___35556);
var G__35560 = (0);
seq__34879_35542 = G__35557;
chunk__34881_35543 = G__35558;
count__34882_35544 = G__35559;
i__34883_35545 = G__35560;
continue;
} else {
var vec__34987_35561 = cljs.core.first(seq__34879_35555__$1);
var actual_type_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35561,(0),null);
var factory_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35561,(1),null);
var canonical_f_35564 = (function (){var G__34991 = (factory_35563.cljs$core$IFn$_invoke$arity$1 ? factory_35563.cljs$core$IFn$_invoke$arity$1(f_35541) : factory_35563.call(null,f_35541));
var fexpr__34990 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34990.cljs$core$IFn$_invoke$arity$1 ? fexpr__34990.cljs$core$IFn$_invoke$arity$1(G__34991) : fexpr__34990.call(null,G__34991));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35562,f_35541], null),canonical_f_35564], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35562),canonical_f_35564);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35562),canonical_f_35564);
}


var G__35565 = cljs.core.next(seq__34879_35555__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__34879_35542 = G__35565;
chunk__34881_35543 = G__35566;
count__34882_35544 = G__35567;
i__34883_35545 = G__35568;
continue;
}
} else {
}
}
break;
}

var G__35569 = cljs.core.next(seq__34878_35533__$1);
var G__35570 = null;
var G__35571 = (0);
var G__35572 = (0);
seq__34878_35494 = G__35569;
chunk__34885_35495 = G__35570;
count__34886_35496 = G__35571;
i__34887_35497 = G__35572;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34873){
var G__34874 = cljs.core.first(seq34873);
var seq34873__$1 = cljs.core.next(seq34873);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34874,seq34873__$1);
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
var len__4789__auto___35573 = arguments.length;
var i__4790__auto___35574 = (0);
while(true){
if((i__4790__auto___35574 < len__4789__auto___35573)){
args__4795__auto__.push((arguments[i__4790__auto___35574]));

var G__35575 = (i__4790__auto___35574 + (1));
i__4790__auto___35574 = G__35575;
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

var vec__34994_35576 = dommy.core.elem_and_selector(elem_sel);
var elem_35577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35576,(0),null);
var selector_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35576,(1),null);
var seq__35001_35579 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35008_35580 = null;
var count__35009_35581 = (0);
var i__35010_35582 = (0);
while(true){
if((i__35010_35582 < count__35009_35581)){
var vec__35054_35583 = chunk__35008_35580.cljs$core$IIndexed$_nth$arity$2(null,i__35010_35582);
var orig_type_35584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35583,(0),null);
var f_35585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35583,(1),null);
var seq__35011_35586 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35584,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35584,cljs.core.identity])));
var chunk__35013_35587 = null;
var count__35014_35588 = (0);
var i__35015_35589 = (0);
while(true){
if((i__35015_35589 < count__35014_35588)){
var vec__35063_35590 = chunk__35013_35587.cljs$core$IIndexed$_nth$arity$2(null,i__35015_35589);
var actual_type_35591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35590,(0),null);
var __35592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35590,(1),null);
var keys_35593 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35591,f_35585], null);
var canonical_f_35594 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35593);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35593], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35591),canonical_f_35594);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35591),canonical_f_35594);
}


var G__35595 = seq__35011_35586;
var G__35596 = chunk__35013_35587;
var G__35597 = count__35014_35588;
var G__35598 = (i__35015_35589 + (1));
seq__35011_35586 = G__35595;
chunk__35013_35587 = G__35596;
count__35014_35588 = G__35597;
i__35015_35589 = G__35598;
continue;
} else {
var temp__5735__auto___35599 = cljs.core.seq(seq__35011_35586);
if(temp__5735__auto___35599){
var seq__35011_35600__$1 = temp__5735__auto___35599;
if(cljs.core.chunked_seq_QMARK_(seq__35011_35600__$1)){
var c__4609__auto___35601 = cljs.core.chunk_first(seq__35011_35600__$1);
var G__35602 = cljs.core.chunk_rest(seq__35011_35600__$1);
var G__35603 = c__4609__auto___35601;
var G__35604 = cljs.core.count(c__4609__auto___35601);
var G__35605 = (0);
seq__35011_35586 = G__35602;
chunk__35013_35587 = G__35603;
count__35014_35588 = G__35604;
i__35015_35589 = G__35605;
continue;
} else {
var vec__35067_35606 = cljs.core.first(seq__35011_35600__$1);
var actual_type_35607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35606,(0),null);
var __35608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35606,(1),null);
var keys_35609 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35607,f_35585], null);
var canonical_f_35610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35609);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35609], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35607),canonical_f_35610);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35607),canonical_f_35610);
}


var G__35611 = cljs.core.next(seq__35011_35600__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__35011_35586 = G__35611;
chunk__35013_35587 = G__35612;
count__35014_35588 = G__35613;
i__35015_35589 = G__35614;
continue;
}
} else {
}
}
break;
}

var G__35615 = seq__35001_35579;
var G__35616 = chunk__35008_35580;
var G__35617 = count__35009_35581;
var G__35618 = (i__35010_35582 + (1));
seq__35001_35579 = G__35615;
chunk__35008_35580 = G__35616;
count__35009_35581 = G__35617;
i__35010_35582 = G__35618;
continue;
} else {
var temp__5735__auto___35619 = cljs.core.seq(seq__35001_35579);
if(temp__5735__auto___35619){
var seq__35001_35620__$1 = temp__5735__auto___35619;
if(cljs.core.chunked_seq_QMARK_(seq__35001_35620__$1)){
var c__4609__auto___35621 = cljs.core.chunk_first(seq__35001_35620__$1);
var G__35622 = cljs.core.chunk_rest(seq__35001_35620__$1);
var G__35623 = c__4609__auto___35621;
var G__35624 = cljs.core.count(c__4609__auto___35621);
var G__35625 = (0);
seq__35001_35579 = G__35622;
chunk__35008_35580 = G__35623;
count__35009_35581 = G__35624;
i__35010_35582 = G__35625;
continue;
} else {
var vec__35072_35626 = cljs.core.first(seq__35001_35620__$1);
var orig_type_35627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072_35626,(0),null);
var f_35628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072_35626,(1),null);
var seq__35002_35629 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35627,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35627,cljs.core.identity])));
var chunk__35004_35630 = null;
var count__35005_35631 = (0);
var i__35006_35632 = (0);
while(true){
if((i__35006_35632 < count__35005_35631)){
var vec__35083_35635 = chunk__35004_35630.cljs$core$IIndexed$_nth$arity$2(null,i__35006_35632);
var actual_type_35636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35635,(0),null);
var __35637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35635,(1),null);
var keys_35638 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35636,f_35628], null);
var canonical_f_35639 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35638);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35638], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35636),canonical_f_35639);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35636),canonical_f_35639);
}


var G__35642 = seq__35002_35629;
var G__35643 = chunk__35004_35630;
var G__35644 = count__35005_35631;
var G__35645 = (i__35006_35632 + (1));
seq__35002_35629 = G__35642;
chunk__35004_35630 = G__35643;
count__35005_35631 = G__35644;
i__35006_35632 = G__35645;
continue;
} else {
var temp__5735__auto___35647__$1 = cljs.core.seq(seq__35002_35629);
if(temp__5735__auto___35647__$1){
var seq__35002_35648__$1 = temp__5735__auto___35647__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35002_35648__$1)){
var c__4609__auto___35650 = cljs.core.chunk_first(seq__35002_35648__$1);
var G__35651 = cljs.core.chunk_rest(seq__35002_35648__$1);
var G__35652 = c__4609__auto___35650;
var G__35653 = cljs.core.count(c__4609__auto___35650);
var G__35654 = (0);
seq__35002_35629 = G__35651;
chunk__35004_35630 = G__35652;
count__35005_35631 = G__35653;
i__35006_35632 = G__35654;
continue;
} else {
var vec__35086_35655 = cljs.core.first(seq__35002_35648__$1);
var actual_type_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35655,(0),null);
var __35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35655,(1),null);
var keys_35658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35656,f_35628], null);
var canonical_f_35659 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35658);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35658], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35656),canonical_f_35659);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35656),canonical_f_35659);
}


var G__35660 = cljs.core.next(seq__35002_35648__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35002_35629 = G__35660;
chunk__35004_35630 = G__35661;
count__35005_35631 = G__35662;
i__35006_35632 = G__35663;
continue;
}
} else {
}
}
break;
}

var G__35664 = cljs.core.next(seq__35001_35620__$1);
var G__35665 = null;
var G__35666 = (0);
var G__35667 = (0);
seq__35001_35579 = G__35664;
chunk__35008_35580 = G__35665;
count__35009_35581 = G__35666;
i__35010_35582 = G__35667;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34992){
var G__34993 = cljs.core.first(seq34992);
var seq34992__$1 = cljs.core.next(seq34992);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34993,seq34992__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35672 = arguments.length;
var i__4790__auto___35674 = (0);
while(true){
if((i__4790__auto___35674 < len__4789__auto___35672)){
args__4795__auto__.push((arguments[i__4790__auto___35674]));

var G__35677 = (i__4790__auto___35674 + (1));
i__4790__auto___35674 = G__35677;
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

var vec__35095_35678 = dommy.core.elem_and_selector(elem_sel);
var elem_35679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35678,(0),null);
var selector_35680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35678,(1),null);
var seq__35099_35681 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35100_35682 = null;
var count__35101_35683 = (0);
var i__35102_35684 = (0);
while(true){
if((i__35102_35684 < count__35101_35683)){
var vec__35131_35696 = chunk__35100_35682.cljs$core$IIndexed$_nth$arity$2(null,i__35102_35684);
var type_35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131_35696,(0),null);
var f_35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131_35696,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35697,((function (seq__35099_35681,chunk__35100_35682,count__35101_35683,i__35102_35684,vec__35131_35696,type_35697,f_35698,vec__35095_35678,elem_35679,selector_35680){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35697,dommy$core$this_fn], 0));

return (f_35698.cljs$core$IFn$_invoke$arity$1 ? f_35698.cljs$core$IFn$_invoke$arity$1(e) : f_35698.call(null,e));
});})(seq__35099_35681,chunk__35100_35682,count__35101_35683,i__35102_35684,vec__35131_35696,type_35697,f_35698,vec__35095_35678,elem_35679,selector_35680))
], 0));


var G__35704 = seq__35099_35681;
var G__35705 = chunk__35100_35682;
var G__35706 = count__35101_35683;
var G__35707 = (i__35102_35684 + (1));
seq__35099_35681 = G__35704;
chunk__35100_35682 = G__35705;
count__35101_35683 = G__35706;
i__35102_35684 = G__35707;
continue;
} else {
var temp__5735__auto___35709 = cljs.core.seq(seq__35099_35681);
if(temp__5735__auto___35709){
var seq__35099_35710__$1 = temp__5735__auto___35709;
if(cljs.core.chunked_seq_QMARK_(seq__35099_35710__$1)){
var c__4609__auto___35712 = cljs.core.chunk_first(seq__35099_35710__$1);
var G__35713 = cljs.core.chunk_rest(seq__35099_35710__$1);
var G__35714 = c__4609__auto___35712;
var G__35715 = cljs.core.count(c__4609__auto___35712);
var G__35716 = (0);
seq__35099_35681 = G__35713;
chunk__35100_35682 = G__35714;
count__35101_35683 = G__35715;
i__35102_35684 = G__35716;
continue;
} else {
var vec__35134_35717 = cljs.core.first(seq__35099_35710__$1);
var type_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134_35717,(0),null);
var f_35719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134_35717,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,((function (seq__35099_35681,chunk__35100_35682,count__35101_35683,i__35102_35684,vec__35134_35717,type_35718,f_35719,seq__35099_35710__$1,temp__5735__auto___35709,vec__35095_35678,elem_35679,selector_35680){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,dommy$core$this_fn], 0));

return (f_35719.cljs$core$IFn$_invoke$arity$1 ? f_35719.cljs$core$IFn$_invoke$arity$1(e) : f_35719.call(null,e));
});})(seq__35099_35681,chunk__35100_35682,count__35101_35683,i__35102_35684,vec__35134_35717,type_35718,f_35719,seq__35099_35710__$1,temp__5735__auto___35709,vec__35095_35678,elem_35679,selector_35680))
], 0));


var G__35725 = cljs.core.next(seq__35099_35710__$1);
var G__35726 = null;
var G__35727 = (0);
var G__35728 = (0);
seq__35099_35681 = G__35725;
chunk__35100_35682 = G__35726;
count__35101_35683 = G__35727;
i__35102_35684 = G__35728;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35093){
var G__35094 = cljs.core.first(seq35093);
var seq35093__$1 = cljs.core.next(seq35093);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35094,seq35093__$1);
}));


//# sourceMappingURL=dommy.core.js.map
