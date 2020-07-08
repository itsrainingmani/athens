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
var len__4789__auto___35179 = arguments.length;
var i__4790__auto___35180 = (0);
while(true){
if((i__4790__auto___35180 < len__4789__auto___35179)){
args__4795__auto__.push((arguments[i__4790__auto___35180]));

var G__35181 = (i__4790__auto___35180 + (1));
i__4790__auto___35180 = G__35181;
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
var seq__34742_35182 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34743_35183 = null;
var count__34744_35184 = (0);
var i__34745_35185 = (0);
while(true){
if((i__34745_35185 < count__34744_35184)){
var vec__34752_35186 = chunk__34743_35183.cljs$core$IIndexed$_nth$arity$2(null,i__34745_35185);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = seq__34742_35182;
var G__35190 = chunk__34743_35183;
var G__35191 = count__34744_35184;
var G__35192 = (i__34745_35185 + (1));
seq__34742_35182 = G__35189;
chunk__34743_35183 = G__35190;
count__34744_35184 = G__35191;
i__34745_35185 = G__35192;
continue;
} else {
var temp__5735__auto___35193 = cljs.core.seq(seq__34742_35182);
if(temp__5735__auto___35193){
var seq__34742_35194__$1 = temp__5735__auto___35193;
if(cljs.core.chunked_seq_QMARK_(seq__34742_35194__$1)){
var c__4609__auto___35195 = cljs.core.chunk_first(seq__34742_35194__$1);
var G__35196 = cljs.core.chunk_rest(seq__34742_35194__$1);
var G__35197 = c__4609__auto___35195;
var G__35198 = cljs.core.count(c__4609__auto___35195);
var G__35199 = (0);
seq__34742_35182 = G__35196;
chunk__34743_35183 = G__35197;
count__34744_35184 = G__35198;
i__34745_35185 = G__35199;
continue;
} else {
var vec__34755_35200 = cljs.core.first(seq__34742_35194__$1);
var k_35201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35200,(0),null);
var v_35202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35200,(1),null);
style.setProperty(dommy.utils.as_str(k_35201),v_35202);


var G__35204 = cljs.core.next(seq__34742_35194__$1);
var G__35205 = null;
var G__35206 = (0);
var G__35207 = (0);
seq__34742_35182 = G__35204;
chunk__34743_35183 = G__35205;
count__34744_35184 = G__35206;
i__34745_35185 = G__35207;
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
var len__4789__auto___35209 = arguments.length;
var i__4790__auto___35210 = (0);
while(true){
if((i__4790__auto___35210 < len__4789__auto___35209)){
args__4795__auto__.push((arguments[i__4790__auto___35210]));

var G__35211 = (i__4790__auto___35210 + (1));
i__4790__auto___35210 = G__35211;
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
var seq__34760_35212 = cljs.core.seq(keywords);
var chunk__34761_35213 = null;
var count__34762_35214 = (0);
var i__34763_35215 = (0);
while(true){
if((i__34763_35215 < count__34762_35214)){
var kw_35216 = chunk__34761_35213.cljs$core$IIndexed$_nth$arity$2(null,i__34763_35215);
style.removeProperty(dommy.utils.as_str(kw_35216));


var G__35217 = seq__34760_35212;
var G__35218 = chunk__34761_35213;
var G__35219 = count__34762_35214;
var G__35220 = (i__34763_35215 + (1));
seq__34760_35212 = G__35217;
chunk__34761_35213 = G__35218;
count__34762_35214 = G__35219;
i__34763_35215 = G__35220;
continue;
} else {
var temp__5735__auto___35221 = cljs.core.seq(seq__34760_35212);
if(temp__5735__auto___35221){
var seq__34760_35222__$1 = temp__5735__auto___35221;
if(cljs.core.chunked_seq_QMARK_(seq__34760_35222__$1)){
var c__4609__auto___35223 = cljs.core.chunk_first(seq__34760_35222__$1);
var G__35224 = cljs.core.chunk_rest(seq__34760_35222__$1);
var G__35225 = c__4609__auto___35223;
var G__35226 = cljs.core.count(c__4609__auto___35223);
var G__35227 = (0);
seq__34760_35212 = G__35224;
chunk__34761_35213 = G__35225;
count__34762_35214 = G__35226;
i__34763_35215 = G__35227;
continue;
} else {
var kw_35228 = cljs.core.first(seq__34760_35222__$1);
style.removeProperty(dommy.utils.as_str(kw_35228));


var G__35229 = cljs.core.next(seq__34760_35222__$1);
var G__35230 = null;
var G__35231 = (0);
var G__35232 = (0);
seq__34760_35212 = G__35229;
chunk__34761_35213 = G__35230;
count__34762_35214 = G__35231;
i__34763_35215 = G__35232;
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
var len__4789__auto___35233 = arguments.length;
var i__4790__auto___35234 = (0);
while(true){
if((i__4790__auto___35234 < len__4789__auto___35233)){
args__4795__auto__.push((arguments[i__4790__auto___35234]));

var G__35236 = (i__4790__auto___35234 + (1));
i__4790__auto___35234 = G__35236;
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

var seq__34767_35238 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34768_35239 = null;
var count__34769_35240 = (0);
var i__34770_35241 = (0);
while(true){
if((i__34770_35241 < count__34769_35240)){
var vec__34777_35242 = chunk__34768_35239.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35241);
var k_35243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35242,(0),null);
var v_35244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35242,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35243,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35244),"px"].join('')], 0));


var G__35245 = seq__34767_35238;
var G__35246 = chunk__34768_35239;
var G__35247 = count__34769_35240;
var G__35248 = (i__34770_35241 + (1));
seq__34767_35238 = G__35245;
chunk__34768_35239 = G__35246;
count__34769_35240 = G__35247;
i__34770_35241 = G__35248;
continue;
} else {
var temp__5735__auto___35249 = cljs.core.seq(seq__34767_35238);
if(temp__5735__auto___35249){
var seq__34767_35250__$1 = temp__5735__auto___35249;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35250__$1)){
var c__4609__auto___35251 = cljs.core.chunk_first(seq__34767_35250__$1);
var G__35253 = cljs.core.chunk_rest(seq__34767_35250__$1);
var G__35254 = c__4609__auto___35251;
var G__35255 = cljs.core.count(c__4609__auto___35251);
var G__35256 = (0);
seq__34767_35238 = G__35253;
chunk__34768_35239 = G__35254;
count__34769_35240 = G__35255;
i__34770_35241 = G__35256;
continue;
} else {
var vec__34780_35258 = cljs.core.first(seq__34767_35250__$1);
var k_35259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35258,(0),null);
var v_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35258,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35259,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35260),"px"].join('')], 0));


var G__35261 = cljs.core.next(seq__34767_35250__$1);
var G__35262 = null;
var G__35263 = (0);
var G__35264 = (0);
seq__34767_35238 = G__35261;
chunk__34768_35239 = G__35262;
count__34769_35240 = G__35263;
i__34770_35241 = G__35264;
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
var len__4789__auto___35266 = arguments.length;
var i__4790__auto___35267 = (0);
while(true){
if((i__4790__auto___35267 < len__4789__auto___35266)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35267]));

var G__35268 = (i__4790__auto___35267 + (1));
i__4790__auto___35267 = G__35268;
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

var seq__34791_35269 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35270 = null;
var count__34793_35271 = (0);
var i__34794_35272 = (0);
while(true){
if((i__34794_35272 < count__34793_35271)){
var vec__34801_35273 = chunk__34792_35270.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35272);
var k_35274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35273,(0),null);
var v_35275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35273,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35274__$1,v_35275__$1);


var G__35276 = seq__34791_35269;
var G__35277 = chunk__34792_35270;
var G__35278 = count__34793_35271;
var G__35279 = (i__34794_35272 + (1));
seq__34791_35269 = G__35276;
chunk__34792_35270 = G__35277;
count__34793_35271 = G__35278;
i__34794_35272 = G__35279;
continue;
} else {
var temp__5735__auto___35280 = cljs.core.seq(seq__34791_35269);
if(temp__5735__auto___35280){
var seq__34791_35281__$1 = temp__5735__auto___35280;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35281__$1)){
var c__4609__auto___35282 = cljs.core.chunk_first(seq__34791_35281__$1);
var G__35283 = cljs.core.chunk_rest(seq__34791_35281__$1);
var G__35284 = c__4609__auto___35282;
var G__35285 = cljs.core.count(c__4609__auto___35282);
var G__35286 = (0);
seq__34791_35269 = G__35283;
chunk__34792_35270 = G__35284;
count__34793_35271 = G__35285;
i__34794_35272 = G__35286;
continue;
} else {
var vec__34804_35287 = cljs.core.first(seq__34791_35281__$1);
var k_35288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35287,(0),null);
var v_35289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35287,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35288__$1,v_35289__$1);


var G__35290 = cljs.core.next(seq__34791_35281__$1);
var G__35291 = null;
var G__35292 = (0);
var G__35293 = (0);
seq__34791_35269 = G__35290;
chunk__34792_35270 = G__35291;
count__34793_35271 = G__35292;
i__34794_35272 = G__35293;
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
var len__4789__auto___35295 = arguments.length;
var i__4790__auto___35296 = (0);
while(true){
if((i__4790__auto___35296 < len__4789__auto___35295)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35296]));

var G__35297 = (i__4790__auto___35296 + (1));
i__4790__auto___35296 = G__35297;
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
var k_35298__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34812.cljs$core$IFn$_invoke$arity$1 ? fexpr__34812.cljs$core$IFn$_invoke$arity$1(k_35298__$1) : fexpr__34812.call(null,k_35298__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35298__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34813_35299 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34814_35300 = null;
var count__34815_35301 = (0);
var i__34816_35302 = (0);
while(true){
if((i__34816_35302 < count__34815_35301)){
var k_35303__$1 = chunk__34814_35300.cljs$core$IIndexed$_nth$arity$2(null,i__34816_35302);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35303__$1);


var G__35304 = seq__34813_35299;
var G__35305 = chunk__34814_35300;
var G__35306 = count__34815_35301;
var G__35307 = (i__34816_35302 + (1));
seq__34813_35299 = G__35304;
chunk__34814_35300 = G__35305;
count__34815_35301 = G__35306;
i__34816_35302 = G__35307;
continue;
} else {
var temp__5735__auto___35308 = cljs.core.seq(seq__34813_35299);
if(temp__5735__auto___35308){
var seq__34813_35309__$1 = temp__5735__auto___35308;
if(cljs.core.chunked_seq_QMARK_(seq__34813_35309__$1)){
var c__4609__auto___35310 = cljs.core.chunk_first(seq__34813_35309__$1);
var G__35311 = cljs.core.chunk_rest(seq__34813_35309__$1);
var G__35312 = c__4609__auto___35310;
var G__35313 = cljs.core.count(c__4609__auto___35310);
var G__35314 = (0);
seq__34813_35299 = G__35311;
chunk__34814_35300 = G__35312;
count__34815_35301 = G__35313;
i__34816_35302 = G__35314;
continue;
} else {
var k_35315__$1 = cljs.core.first(seq__34813_35309__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35315__$1);


var G__35316 = cljs.core.next(seq__34813_35309__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__34813_35299 = G__35316;
chunk__34814_35300 = G__35317;
count__34815_35301 = G__35318;
i__34816_35302 = G__35319;
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
var len__4789__auto___35322 = arguments.length;
var i__4790__auto___35323 = (0);
while(true){
if((i__4790__auto___35323 < len__4789__auto___35322)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35323]));

var G__35324 = (i__4790__auto___35323 + (1));
i__4790__auto___35323 = G__35324;
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
var temp__5733__auto___35325 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35325)){
var class_list_35326 = temp__5733__auto___35325;
var seq__34824_35327 = cljs.core.seq(classes__$1);
var chunk__34825_35328 = null;
var count__34826_35329 = (0);
var i__34827_35330 = (0);
while(true){
if((i__34827_35330 < count__34826_35329)){
var c_35331 = chunk__34825_35328.cljs$core$IIndexed$_nth$arity$2(null,i__34827_35330);
class_list_35326.add(c_35331);


var G__35332 = seq__34824_35327;
var G__35333 = chunk__34825_35328;
var G__35334 = count__34826_35329;
var G__35335 = (i__34827_35330 + (1));
seq__34824_35327 = G__35332;
chunk__34825_35328 = G__35333;
count__34826_35329 = G__35334;
i__34827_35330 = G__35335;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34824_35327);
if(temp__5735__auto___35336){
var seq__34824_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34824_35337__$1)){
var c__4609__auto___35338 = cljs.core.chunk_first(seq__34824_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34824_35337__$1);
var G__35340 = c__4609__auto___35338;
var G__35341 = cljs.core.count(c__4609__auto___35338);
var G__35342 = (0);
seq__34824_35327 = G__35339;
chunk__34825_35328 = G__35340;
count__34826_35329 = G__35341;
i__34827_35330 = G__35342;
continue;
} else {
var c_35343 = cljs.core.first(seq__34824_35337__$1);
class_list_35326.add(c_35343);


var G__35344 = cljs.core.next(seq__34824_35337__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__34824_35327 = G__35344;
chunk__34825_35328 = G__35345;
count__34826_35329 = G__35346;
i__34827_35330 = G__35347;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34828_35348 = cljs.core.seq(classes__$1);
var chunk__34829_35349 = null;
var count__34830_35350 = (0);
var i__34831_35351 = (0);
while(true){
if((i__34831_35351 < count__34830_35350)){
var c_35352 = chunk__34829_35349.cljs$core$IIndexed$_nth$arity$2(null,i__34831_35351);
var class_name_35353 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35353,c_35352))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35353 === ""))?c_35352:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35353)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35352)].join('')));
}


var G__35354 = seq__34828_35348;
var G__35355 = chunk__34829_35349;
var G__35356 = count__34830_35350;
var G__35357 = (i__34831_35351 + (1));
seq__34828_35348 = G__35354;
chunk__34829_35349 = G__35355;
count__34830_35350 = G__35356;
i__34831_35351 = G__35357;
continue;
} else {
var temp__5735__auto___35358 = cljs.core.seq(seq__34828_35348);
if(temp__5735__auto___35358){
var seq__34828_35359__$1 = temp__5735__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35359__$1)){
var c__4609__auto___35361 = cljs.core.chunk_first(seq__34828_35359__$1);
var G__35362 = cljs.core.chunk_rest(seq__34828_35359__$1);
var G__35363 = c__4609__auto___35361;
var G__35364 = cljs.core.count(c__4609__auto___35361);
var G__35365 = (0);
seq__34828_35348 = G__35362;
chunk__34829_35349 = G__35363;
count__34830_35350 = G__35364;
i__34831_35351 = G__35365;
continue;
} else {
var c_35366 = cljs.core.first(seq__34828_35359__$1);
var class_name_35367 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35367,c_35366))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35367 === ""))?c_35366:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35367)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35366)].join('')));
}


var G__35369 = cljs.core.next(seq__34828_35359__$1);
var G__35370 = null;
var G__35371 = (0);
var G__35372 = (0);
seq__34828_35348 = G__35369;
chunk__34829_35349 = G__35370;
count__34830_35350 = G__35371;
i__34831_35351 = G__35372;
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
var seq__34832_35373 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34833_35374 = null;
var count__34834_35375 = (0);
var i__34835_35376 = (0);
while(true){
if((i__34835_35376 < count__34834_35375)){
var c_35377 = chunk__34833_35374.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35376);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35377);


var G__35378 = seq__34832_35373;
var G__35379 = chunk__34833_35374;
var G__35380 = count__34834_35375;
var G__35381 = (i__34835_35376 + (1));
seq__34832_35373 = G__35378;
chunk__34833_35374 = G__35379;
count__34834_35375 = G__35380;
i__34835_35376 = G__35381;
continue;
} else {
var temp__5735__auto___35382 = cljs.core.seq(seq__34832_35373);
if(temp__5735__auto___35382){
var seq__34832_35383__$1 = temp__5735__auto___35382;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35383__$1)){
var c__4609__auto___35384 = cljs.core.chunk_first(seq__34832_35383__$1);
var G__35385 = cljs.core.chunk_rest(seq__34832_35383__$1);
var G__35386 = c__4609__auto___35384;
var G__35387 = cljs.core.count(c__4609__auto___35384);
var G__35388 = (0);
seq__34832_35373 = G__35385;
chunk__34833_35374 = G__35386;
count__34834_35375 = G__35387;
i__34835_35376 = G__35388;
continue;
} else {
var c_35390 = cljs.core.first(seq__34832_35383__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35390);


var G__35391 = cljs.core.next(seq__34832_35383__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__34832_35373 = G__35391;
chunk__34833_35374 = G__35392;
count__34834_35375 = G__35393;
i__34835_35376 = G__35394;
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
var G__34841 = arguments.length;
switch (G__34841) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35399 = arguments.length;
var i__4790__auto___35400 = (0);
while(true){
if((i__4790__auto___35400 < len__4789__auto___35399)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35400]));

var G__35401 = (i__4790__auto___35400 + (1));
i__4790__auto___35400 = G__35401;
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
var temp__5733__auto___35402 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35402)){
var class_list_35403 = temp__5733__auto___35402;
class_list_35403.remove(c__$1);
} else {
var class_name_35404 = dommy.core.class$(elem);
var new_class_name_35405 = dommy.utils.remove_class_str(class_name_35404,c__$1);
if((class_name_35404 === new_class_name_35405)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35405);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34844 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34845 = null;
var count__34846 = (0);
var i__34847 = (0);
while(true){
if((i__34847 < count__34846)){
var c = chunk__34845.cljs$core$IIndexed$_nth$arity$2(null,i__34847);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35411 = seq__34844;
var G__35412 = chunk__34845;
var G__35413 = count__34846;
var G__35414 = (i__34847 + (1));
seq__34844 = G__35411;
chunk__34845 = G__35412;
count__34846 = G__35413;
i__34847 = G__35414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34844);
if(temp__5735__auto__){
var seq__34844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34844__$1);
var G__35415 = cljs.core.chunk_rest(seq__34844__$1);
var G__35416 = c__4609__auto__;
var G__35417 = cljs.core.count(c__4609__auto__);
var G__35418 = (0);
seq__34844 = G__35415;
chunk__34845 = G__35416;
count__34846 = G__35417;
i__34847 = G__35418;
continue;
} else {
var c = cljs.core.first(seq__34844__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35421 = cljs.core.next(seq__34844__$1);
var G__35422 = null;
var G__35423 = (0);
var G__35424 = (0);
seq__34844 = G__35421;
chunk__34845 = G__35422;
count__34846 = G__35423;
i__34847 = G__35424;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34838){
var G__34839 = cljs.core.first(seq34838);
var seq34838__$1 = cljs.core.next(seq34838);
var G__34840 = cljs.core.first(seq34838__$1);
var seq34838__$2 = cljs.core.next(seq34838__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34839,G__34840,seq34838__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34849 = arguments.length;
switch (G__34849) {
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
var temp__5733__auto___35428 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35428)){
var class_list_35429 = temp__5733__auto___35428;
class_list_35429.toggle(c__$1);
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
var G__34851 = arguments.length;
switch (G__34851) {
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
var G__34853 = arguments.length;
switch (G__34853) {
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
var G__34858 = arguments.length;
switch (G__34858) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35445 = arguments.length;
var i__4790__auto___35446 = (0);
while(true){
if((i__4790__auto___35446 < len__4789__auto___35445)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35446]));

var G__35447 = (i__4790__auto___35446 + (1));
i__4790__auto___35446 = G__35447;
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
var G__34859 = parent;
G__34859.appendChild(child);

return G__34859;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34860_35448 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34861_35449 = null;
var count__34862_35450 = (0);
var i__34863_35451 = (0);
while(true){
if((i__34863_35451 < count__34862_35450)){
var c_35452 = chunk__34861_35449.cljs$core$IIndexed$_nth$arity$2(null,i__34863_35451);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35452);


var G__35453 = seq__34860_35448;
var G__35454 = chunk__34861_35449;
var G__35455 = count__34862_35450;
var G__35456 = (i__34863_35451 + (1));
seq__34860_35448 = G__35453;
chunk__34861_35449 = G__35454;
count__34862_35450 = G__35455;
i__34863_35451 = G__35456;
continue;
} else {
var temp__5735__auto___35457 = cljs.core.seq(seq__34860_35448);
if(temp__5735__auto___35457){
var seq__34860_35458__$1 = temp__5735__auto___35457;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35458__$1)){
var c__4609__auto___35459 = cljs.core.chunk_first(seq__34860_35458__$1);
var G__35460 = cljs.core.chunk_rest(seq__34860_35458__$1);
var G__35461 = c__4609__auto___35459;
var G__35462 = cljs.core.count(c__4609__auto___35459);
var G__35463 = (0);
seq__34860_35448 = G__35460;
chunk__34861_35449 = G__35461;
count__34862_35450 = G__35462;
i__34863_35451 = G__35463;
continue;
} else {
var c_35464 = cljs.core.first(seq__34860_35458__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35464);


var G__35465 = cljs.core.next(seq__34860_35458__$1);
var G__35466 = null;
var G__35467 = (0);
var G__35468 = (0);
seq__34860_35448 = G__35465;
chunk__34861_35449 = G__35466;
count__34862_35450 = G__35467;
i__34863_35451 = G__35468;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34855){
var G__34856 = cljs.core.first(seq34855);
var seq34855__$1 = cljs.core.next(seq34855);
var G__34857 = cljs.core.first(seq34855__$1);
var seq34855__$2 = cljs.core.next(seq34855__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34856,G__34857,seq34855__$2);
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
var len__4789__auto___35470 = arguments.length;
var i__4790__auto___35471 = (0);
while(true){
if((i__4790__auto___35471 < len__4789__auto___35470)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35471]));

var G__35472 = (i__4790__auto___35471 + (1));
i__4790__auto___35471 = G__35472;
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
var seq__34870_35473 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34871_35474 = null;
var count__34872_35475 = (0);
var i__34873_35476 = (0);
while(true){
if((i__34873_35476 < count__34872_35475)){
var c_35477 = chunk__34871_35474.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35476);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35477);


var G__35478 = seq__34870_35473;
var G__35479 = chunk__34871_35474;
var G__35480 = count__34872_35475;
var G__35481 = (i__34873_35476 + (1));
seq__34870_35473 = G__35478;
chunk__34871_35474 = G__35479;
count__34872_35475 = G__35480;
i__34873_35476 = G__35481;
continue;
} else {
var temp__5735__auto___35482 = cljs.core.seq(seq__34870_35473);
if(temp__5735__auto___35482){
var seq__34870_35483__$1 = temp__5735__auto___35482;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35483__$1)){
var c__4609__auto___35484 = cljs.core.chunk_first(seq__34870_35483__$1);
var G__35485 = cljs.core.chunk_rest(seq__34870_35483__$1);
var G__35486 = c__4609__auto___35484;
var G__35487 = cljs.core.count(c__4609__auto___35484);
var G__35488 = (0);
seq__34870_35473 = G__35485;
chunk__34871_35474 = G__35486;
count__34872_35475 = G__35487;
i__34873_35476 = G__35488;
continue;
} else {
var c_35489 = cljs.core.first(seq__34870_35483__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35489);


var G__35490 = cljs.core.next(seq__34870_35483__$1);
var G__35491 = null;
var G__35492 = (0);
var G__35493 = (0);
seq__34870_35473 = G__35490;
chunk__34871_35474 = G__35491;
count__34872_35475 = G__35492;
i__34873_35476 = G__35493;
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
var temp__5733__auto___35494 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35494)){
var next_35495 = temp__5733__auto___35494;
dommy.core.insert_before_BANG_(elem,next_35495);
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
var len__4789__auto___35497 = arguments.length;
var i__4790__auto___35498 = (0);
while(true){
if((i__4790__auto___35498 < len__4789__auto___35497)){
args__4795__auto__.push((arguments[i__4790__auto___35498]));

var G__35499 = (i__4790__auto___35498 + (1));
i__4790__auto___35498 = G__35499;
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
var fexpr__34887 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34887.cljs$core$IFn$_invoke$arity$1 ? fexpr__34887.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34887.call(null,elem_sel));
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
var len__4789__auto___35500 = arguments.length;
var i__4790__auto___35501 = (0);
while(true){
if((i__4790__auto___35501 < len__4789__auto___35500)){
args__4795__auto__.push((arguments[i__4790__auto___35501]));

var G__35502 = (i__4790__auto___35501 + (1));
i__4790__auto___35501 = G__35502;
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

var vec__34890_35503 = dommy.core.elem_and_selector(elem_sel);
var elem_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35503,(0),null);
var selector_35505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35503,(1),null);
var seq__34893_35506 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34900_35507 = null;
var count__34901_35508 = (0);
var i__34902_35509 = (0);
while(true){
if((i__34902_35509 < count__34901_35508)){
var vec__34958_35510 = chunk__34900_35507.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35509);
var orig_type_35511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35510,(0),null);
var f_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35510,(1),null);
var seq__34903_35513 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35511,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35511,cljs.core.identity])));
var chunk__34905_35514 = null;
var count__34906_35515 = (0);
var i__34907_35516 = (0);
while(true){
if((i__34907_35516 < count__34906_35515)){
var vec__34971_35517 = chunk__34905_35514.cljs$core$IIndexed$_nth$arity$2(null,i__34907_35516);
var actual_type_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35517,(0),null);
var factory_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35517,(1),null);
var canonical_f_35520 = (function (){var G__34975 = (factory_35519.cljs$core$IFn$_invoke$arity$1 ? factory_35519.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35519.call(null,f_35512));
var fexpr__34974 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35518,f_35512], null),canonical_f_35520], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35518),canonical_f_35520);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35518),canonical_f_35520);
}


var G__35525 = seq__34903_35513;
var G__35526 = chunk__34905_35514;
var G__35527 = count__34906_35515;
var G__35528 = (i__34907_35516 + (1));
seq__34903_35513 = G__35525;
chunk__34905_35514 = G__35526;
count__34906_35515 = G__35527;
i__34907_35516 = G__35528;
continue;
} else {
var temp__5735__auto___35530 = cljs.core.seq(seq__34903_35513);
if(temp__5735__auto___35530){
var seq__34903_35532__$1 = temp__5735__auto___35530;
if(cljs.core.chunked_seq_QMARK_(seq__34903_35532__$1)){
var c__4609__auto___35533 = cljs.core.chunk_first(seq__34903_35532__$1);
var G__35534 = cljs.core.chunk_rest(seq__34903_35532__$1);
var G__35535 = c__4609__auto___35533;
var G__35536 = cljs.core.count(c__4609__auto___35533);
var G__35537 = (0);
seq__34903_35513 = G__35534;
chunk__34905_35514 = G__35535;
count__34906_35515 = G__35536;
i__34907_35516 = G__35537;
continue;
} else {
var vec__34976_35538 = cljs.core.first(seq__34903_35532__$1);
var actual_type_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35538,(0),null);
var factory_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35538,(1),null);
var canonical_f_35541 = (function (){var G__34984 = (factory_35540.cljs$core$IFn$_invoke$arity$1 ? factory_35540.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35540.call(null,f_35512));
var fexpr__34983 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35539,f_35512], null),canonical_f_35541], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35539),canonical_f_35541);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35539),canonical_f_35541);
}


var G__35543 = cljs.core.next(seq__34903_35532__$1);
var G__35544 = null;
var G__35545 = (0);
var G__35546 = (0);
seq__34903_35513 = G__35543;
chunk__34905_35514 = G__35544;
count__34906_35515 = G__35545;
i__34907_35516 = G__35546;
continue;
}
} else {
}
}
break;
}

var G__35549 = seq__34893_35506;
var G__35550 = chunk__34900_35507;
var G__35551 = count__34901_35508;
var G__35552 = (i__34902_35509 + (1));
seq__34893_35506 = G__35549;
chunk__34900_35507 = G__35550;
count__34901_35508 = G__35551;
i__34902_35509 = G__35552;
continue;
} else {
var temp__5735__auto___35554 = cljs.core.seq(seq__34893_35506);
if(temp__5735__auto___35554){
var seq__34893_35555__$1 = temp__5735__auto___35554;
if(cljs.core.chunked_seq_QMARK_(seq__34893_35555__$1)){
var c__4609__auto___35556 = cljs.core.chunk_first(seq__34893_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__34893_35555__$1);
var G__35558 = c__4609__auto___35556;
var G__35559 = cljs.core.count(c__4609__auto___35556);
var G__35560 = (0);
seq__34893_35506 = G__35557;
chunk__34900_35507 = G__35558;
count__34901_35508 = G__35559;
i__34902_35509 = G__35560;
continue;
} else {
var vec__34985_35562 = cljs.core.first(seq__34893_35555__$1);
var orig_type_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35562,(0),null);
var f_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35562,(1),null);
var seq__34894_35567 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35563,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35563,cljs.core.identity])));
var chunk__34896_35568 = null;
var count__34897_35569 = (0);
var i__34898_35570 = (0);
while(true){
if((i__34898_35570 < count__34897_35569)){
var vec__35001_35571 = chunk__34896_35568.cljs$core$IIndexed$_nth$arity$2(null,i__34898_35570);
var actual_type_35572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35571,(0),null);
var factory_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35571,(1),null);
var canonical_f_35574 = (function (){var G__35005 = (factory_35573.cljs$core$IFn$_invoke$arity$1 ? factory_35573.cljs$core$IFn$_invoke$arity$1(f_35565) : factory_35573.call(null,f_35565));
var fexpr__35004 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35004.cljs$core$IFn$_invoke$arity$1 ? fexpr__35004.cljs$core$IFn$_invoke$arity$1(G__35005) : fexpr__35004.call(null,G__35005));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35572,f_35565], null),canonical_f_35574], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35572),canonical_f_35574);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35572),canonical_f_35574);
}


var G__35582 = seq__34894_35567;
var G__35583 = chunk__34896_35568;
var G__35584 = count__34897_35569;
var G__35585 = (i__34898_35570 + (1));
seq__34894_35567 = G__35582;
chunk__34896_35568 = G__35583;
count__34897_35569 = G__35584;
i__34898_35570 = G__35585;
continue;
} else {
var temp__5735__auto___35586__$1 = cljs.core.seq(seq__34894_35567);
if(temp__5735__auto___35586__$1){
var seq__34894_35587__$1 = temp__5735__auto___35586__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34894_35587__$1)){
var c__4609__auto___35589 = cljs.core.chunk_first(seq__34894_35587__$1);
var G__35591 = cljs.core.chunk_rest(seq__34894_35587__$1);
var G__35592 = c__4609__auto___35589;
var G__35593 = cljs.core.count(c__4609__auto___35589);
var G__35594 = (0);
seq__34894_35567 = G__35591;
chunk__34896_35568 = G__35592;
count__34897_35569 = G__35593;
i__34898_35570 = G__35594;
continue;
} else {
var vec__35006_35597 = cljs.core.first(seq__34894_35587__$1);
var actual_type_35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35597,(0),null);
var factory_35599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35597,(1),null);
var canonical_f_35600 = (function (){var G__35010 = (factory_35599.cljs$core$IFn$_invoke$arity$1 ? factory_35599.cljs$core$IFn$_invoke$arity$1(f_35565) : factory_35599.call(null,f_35565));
var fexpr__35009 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35009.cljs$core$IFn$_invoke$arity$1 ? fexpr__35009.cljs$core$IFn$_invoke$arity$1(G__35010) : fexpr__35009.call(null,G__35010));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35598,f_35565], null),canonical_f_35600], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35598),canonical_f_35600);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35598),canonical_f_35600);
}


var G__35607 = cljs.core.next(seq__34894_35587__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__34894_35567 = G__35607;
chunk__34896_35568 = G__35608;
count__34897_35569 = G__35609;
i__34898_35570 = G__35610;
continue;
}
} else {
}
}
break;
}

var G__35611 = cljs.core.next(seq__34893_35555__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__34893_35506 = G__35611;
chunk__34900_35507 = G__35612;
count__34901_35508 = G__35613;
i__34902_35509 = G__35614;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34888){
var G__34889 = cljs.core.first(seq34888);
var seq34888__$1 = cljs.core.next(seq34888);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34889,seq34888__$1);
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
var len__4789__auto___35620 = arguments.length;
var i__4790__auto___35621 = (0);
while(true){
if((i__4790__auto___35621 < len__4789__auto___35620)){
args__4795__auto__.push((arguments[i__4790__auto___35621]));

var G__35622 = (i__4790__auto___35621 + (1));
i__4790__auto___35621 = G__35622;
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

var vec__35017_35626 = dommy.core.elem_and_selector(elem_sel);
var elem_35627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35626,(0),null);
var selector_35628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35626,(1),null);
var seq__35020_35631 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35027_35632 = null;
var count__35028_35633 = (0);
var i__35029_35634 = (0);
while(true){
if((i__35029_35634 < count__35028_35633)){
var vec__35071_35636 = chunk__35027_35632.cljs$core$IIndexed$_nth$arity$2(null,i__35029_35634);
var orig_type_35638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35636,(0),null);
var f_35639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35636,(1),null);
var seq__35030_35643 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35638,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35638,cljs.core.identity])));
var chunk__35032_35644 = null;
var count__35033_35645 = (0);
var i__35034_35646 = (0);
while(true){
if((i__35034_35646 < count__35033_35645)){
var vec__35080_35647 = chunk__35032_35644.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35646);
var actual_type_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35647,(0),null);
var __35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35647,(1),null);
var keys_35653 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35648,f_35639], null);
var canonical_f_35654 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35653);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35653], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35648),canonical_f_35654);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35648),canonical_f_35654);
}


var G__35658 = seq__35030_35643;
var G__35659 = chunk__35032_35644;
var G__35660 = count__35033_35645;
var G__35661 = (i__35034_35646 + (1));
seq__35030_35643 = G__35658;
chunk__35032_35644 = G__35659;
count__35033_35645 = G__35660;
i__35034_35646 = G__35661;
continue;
} else {
var temp__5735__auto___35662 = cljs.core.seq(seq__35030_35643);
if(temp__5735__auto___35662){
var seq__35030_35663__$1 = temp__5735__auto___35662;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35663__$1)){
var c__4609__auto___35666 = cljs.core.chunk_first(seq__35030_35663__$1);
var G__35668 = cljs.core.chunk_rest(seq__35030_35663__$1);
var G__35669 = c__4609__auto___35666;
var G__35670 = cljs.core.count(c__4609__auto___35666);
var G__35671 = (0);
seq__35030_35643 = G__35668;
chunk__35032_35644 = G__35669;
count__35033_35645 = G__35670;
i__35034_35646 = G__35671;
continue;
} else {
var vec__35087_35672 = cljs.core.first(seq__35030_35663__$1);
var actual_type_35673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35672,(0),null);
var __35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35672,(1),null);
var keys_35676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35673,f_35639], null);
var canonical_f_35677 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35676);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35676], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35673),canonical_f_35677);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35673),canonical_f_35677);
}


var G__35687 = cljs.core.next(seq__35030_35663__$1);
var G__35688 = null;
var G__35689 = (0);
var G__35690 = (0);
seq__35030_35643 = G__35687;
chunk__35032_35644 = G__35688;
count__35033_35645 = G__35689;
i__35034_35646 = G__35690;
continue;
}
} else {
}
}
break;
}

var G__35693 = seq__35020_35631;
var G__35694 = chunk__35027_35632;
var G__35695 = count__35028_35633;
var G__35696 = (i__35029_35634 + (1));
seq__35020_35631 = G__35693;
chunk__35027_35632 = G__35694;
count__35028_35633 = G__35695;
i__35029_35634 = G__35696;
continue;
} else {
var temp__5735__auto___35697 = cljs.core.seq(seq__35020_35631);
if(temp__5735__auto___35697){
var seq__35020_35698__$1 = temp__5735__auto___35697;
if(cljs.core.chunked_seq_QMARK_(seq__35020_35698__$1)){
var c__4609__auto___35700 = cljs.core.chunk_first(seq__35020_35698__$1);
var G__35702 = cljs.core.chunk_rest(seq__35020_35698__$1);
var G__35703 = c__4609__auto___35700;
var G__35704 = cljs.core.count(c__4609__auto___35700);
var G__35705 = (0);
seq__35020_35631 = G__35702;
chunk__35027_35632 = G__35703;
count__35028_35633 = G__35704;
i__35029_35634 = G__35705;
continue;
} else {
var vec__35090_35707 = cljs.core.first(seq__35020_35698__$1);
var orig_type_35708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35707,(0),null);
var f_35709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35707,(1),null);
var seq__35021_35710 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35708,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35708,cljs.core.identity])));
var chunk__35023_35711 = null;
var count__35024_35712 = (0);
var i__35025_35713 = (0);
while(true){
if((i__35025_35713 < count__35024_35712)){
var vec__35122_35717 = chunk__35023_35711.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35713);
var actual_type_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35717,(0),null);
var __35719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35717,(1),null);
var keys_35720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35718,f_35709], null);
var canonical_f_35721 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35720);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35720], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35718),canonical_f_35721);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35718),canonical_f_35721);
}


var G__35725 = seq__35021_35710;
var G__35727 = chunk__35023_35711;
var G__35728 = count__35024_35712;
var G__35729 = (i__35025_35713 + (1));
seq__35021_35710 = G__35725;
chunk__35023_35711 = G__35727;
count__35024_35712 = G__35728;
i__35025_35713 = G__35729;
continue;
} else {
var temp__5735__auto___35732__$1 = cljs.core.seq(seq__35021_35710);
if(temp__5735__auto___35732__$1){
var seq__35021_35733__$1 = temp__5735__auto___35732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35733__$1)){
var c__4609__auto___35734 = cljs.core.chunk_first(seq__35021_35733__$1);
var G__35735 = cljs.core.chunk_rest(seq__35021_35733__$1);
var G__35736 = c__4609__auto___35734;
var G__35737 = cljs.core.count(c__4609__auto___35734);
var G__35738 = (0);
seq__35021_35710 = G__35735;
chunk__35023_35711 = G__35736;
count__35024_35712 = G__35737;
i__35025_35713 = G__35738;
continue;
} else {
var vec__35125_35742 = cljs.core.first(seq__35021_35733__$1);
var actual_type_35743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35742,(0),null);
var __35744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35742,(1),null);
var keys_35745 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35743,f_35709], null);
var canonical_f_35746 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35745);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35745], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35743),canonical_f_35746);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35743),canonical_f_35746);
}


var G__35750 = cljs.core.next(seq__35021_35733__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35021_35710 = G__35750;
chunk__35023_35711 = G__35751;
count__35024_35712 = G__35752;
i__35025_35713 = G__35753;
continue;
}
} else {
}
}
break;
}

var G__35755 = cljs.core.next(seq__35020_35698__$1);
var G__35756 = null;
var G__35757 = (0);
var G__35758 = (0);
seq__35020_35631 = G__35755;
chunk__35027_35632 = G__35756;
count__35028_35633 = G__35757;
i__35029_35634 = G__35758;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35015){
var G__35016 = cljs.core.first(seq35015);
var seq35015__$1 = cljs.core.next(seq35015);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35016,seq35015__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35781 = arguments.length;
var i__4790__auto___35782 = (0);
while(true){
if((i__4790__auto___35782 < len__4789__auto___35781)){
args__4795__auto__.push((arguments[i__4790__auto___35782]));

var G__35783 = (i__4790__auto___35782 + (1));
i__4790__auto___35782 = G__35783;
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

var vec__35147_35786 = dommy.core.elem_and_selector(elem_sel);
var elem_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35786,(0),null);
var selector_35788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35786,(1),null);
var seq__35151_35790 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35791 = null;
var count__35153_35792 = (0);
var i__35154_35793 = (0);
while(true){
if((i__35154_35793 < count__35153_35792)){
var vec__35168_35794 = chunk__35152_35791.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35793);
var type_35795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35794,(0),null);
var f_35796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35794,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35795,((function (seq__35151_35790,chunk__35152_35791,count__35153_35792,i__35154_35793,vec__35168_35794,type_35795,f_35796,vec__35147_35786,elem_35787,selector_35788){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35795,dommy$core$this_fn], 0));

return (f_35796.cljs$core$IFn$_invoke$arity$1 ? f_35796.cljs$core$IFn$_invoke$arity$1(e) : f_35796.call(null,e));
});})(seq__35151_35790,chunk__35152_35791,count__35153_35792,i__35154_35793,vec__35168_35794,type_35795,f_35796,vec__35147_35786,elem_35787,selector_35788))
], 0));


var G__35807 = seq__35151_35790;
var G__35808 = chunk__35152_35791;
var G__35809 = count__35153_35792;
var G__35810 = (i__35154_35793 + (1));
seq__35151_35790 = G__35807;
chunk__35152_35791 = G__35808;
count__35153_35792 = G__35809;
i__35154_35793 = G__35810;
continue;
} else {
var temp__5735__auto___35811 = cljs.core.seq(seq__35151_35790);
if(temp__5735__auto___35811){
var seq__35151_35816__$1 = temp__5735__auto___35811;
if(cljs.core.chunked_seq_QMARK_(seq__35151_35816__$1)){
var c__4609__auto___35820 = cljs.core.chunk_first(seq__35151_35816__$1);
var G__35822 = cljs.core.chunk_rest(seq__35151_35816__$1);
var G__35823 = c__4609__auto___35820;
var G__35824 = cljs.core.count(c__4609__auto___35820);
var G__35825 = (0);
seq__35151_35790 = G__35822;
chunk__35152_35791 = G__35823;
count__35153_35792 = G__35824;
i__35154_35793 = G__35825;
continue;
} else {
var vec__35171_35827 = cljs.core.first(seq__35151_35816__$1);
var type_35828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171_35827,(0),null);
var f_35829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171_35827,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35828,((function (seq__35151_35790,chunk__35152_35791,count__35153_35792,i__35154_35793,vec__35171_35827,type_35828,f_35829,seq__35151_35816__$1,temp__5735__auto___35811,vec__35147_35786,elem_35787,selector_35788){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35828,dommy$core$this_fn], 0));

return (f_35829.cljs$core$IFn$_invoke$arity$1 ? f_35829.cljs$core$IFn$_invoke$arity$1(e) : f_35829.call(null,e));
});})(seq__35151_35790,chunk__35152_35791,count__35153_35792,i__35154_35793,vec__35171_35827,type_35828,f_35829,seq__35151_35816__$1,temp__5735__auto___35811,vec__35147_35786,elem_35787,selector_35788))
], 0));


var G__35834 = cljs.core.next(seq__35151_35816__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35151_35790 = G__35834;
chunk__35152_35791 = G__35835;
count__35153_35792 = G__35836;
i__35154_35793 = G__35837;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35129){
var G__35130 = cljs.core.first(seq35129);
var seq35129__$1 = cljs.core.next(seq35129);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35130,seq35129__$1);
}));


//# sourceMappingURL=dommy.core.js.map
