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


var G__35203 = cljs.core.next(seq__34742_35194__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34742_35182 = G__35203;
chunk__34743_35183 = G__35204;
count__34744_35184 = G__35205;
i__34745_35185 = G__35206;
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
var len__4789__auto___35207 = arguments.length;
var i__4790__auto___35208 = (0);
while(true){
if((i__4790__auto___35208 < len__4789__auto___35207)){
args__4795__auto__.push((arguments[i__4790__auto___35208]));

var G__35209 = (i__4790__auto___35208 + (1));
i__4790__auto___35208 = G__35209;
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
var seq__34760_35210 = cljs.core.seq(keywords);
var chunk__34761_35211 = null;
var count__34762_35212 = (0);
var i__34763_35213 = (0);
while(true){
if((i__34763_35213 < count__34762_35212)){
var kw_35214 = chunk__34761_35211.cljs$core$IIndexed$_nth$arity$2(null,i__34763_35213);
style.removeProperty(dommy.utils.as_str(kw_35214));


var G__35215 = seq__34760_35210;
var G__35216 = chunk__34761_35211;
var G__35217 = count__34762_35212;
var G__35218 = (i__34763_35213 + (1));
seq__34760_35210 = G__35215;
chunk__34761_35211 = G__35216;
count__34762_35212 = G__35217;
i__34763_35213 = G__35218;
continue;
} else {
var temp__5735__auto___35219 = cljs.core.seq(seq__34760_35210);
if(temp__5735__auto___35219){
var seq__34760_35220__$1 = temp__5735__auto___35219;
if(cljs.core.chunked_seq_QMARK_(seq__34760_35220__$1)){
var c__4609__auto___35221 = cljs.core.chunk_first(seq__34760_35220__$1);
var G__35222 = cljs.core.chunk_rest(seq__34760_35220__$1);
var G__35223 = c__4609__auto___35221;
var G__35224 = cljs.core.count(c__4609__auto___35221);
var G__35225 = (0);
seq__34760_35210 = G__35222;
chunk__34761_35211 = G__35223;
count__34762_35212 = G__35224;
i__34763_35213 = G__35225;
continue;
} else {
var kw_35226 = cljs.core.first(seq__34760_35220__$1);
style.removeProperty(dommy.utils.as_str(kw_35226));


var G__35227 = cljs.core.next(seq__34760_35220__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34760_35210 = G__35227;
chunk__34761_35211 = G__35228;
count__34762_35212 = G__35229;
i__34763_35213 = G__35230;
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
var len__4789__auto___35231 = arguments.length;
var i__4790__auto___35232 = (0);
while(true){
if((i__4790__auto___35232 < len__4789__auto___35231)){
args__4795__auto__.push((arguments[i__4790__auto___35232]));

var G__35233 = (i__4790__auto___35232 + (1));
i__4790__auto___35232 = G__35233;
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

var seq__34767_35234 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34768_35235 = null;
var count__34769_35236 = (0);
var i__34770_35237 = (0);
while(true){
if((i__34770_35237 < count__34769_35236)){
var vec__34777_35238 = chunk__34768_35235.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35237);
var k_35239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35238,(0),null);
var v_35240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35238,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35239,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35240),"px"].join('')], 0));


var G__35241 = seq__34767_35234;
var G__35242 = chunk__34768_35235;
var G__35243 = count__34769_35236;
var G__35244 = (i__34770_35237 + (1));
seq__34767_35234 = G__35241;
chunk__34768_35235 = G__35242;
count__34769_35236 = G__35243;
i__34770_35237 = G__35244;
continue;
} else {
var temp__5735__auto___35245 = cljs.core.seq(seq__34767_35234);
if(temp__5735__auto___35245){
var seq__34767_35246__$1 = temp__5735__auto___35245;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35246__$1)){
var c__4609__auto___35247 = cljs.core.chunk_first(seq__34767_35246__$1);
var G__35248 = cljs.core.chunk_rest(seq__34767_35246__$1);
var G__35249 = c__4609__auto___35247;
var G__35250 = cljs.core.count(c__4609__auto___35247);
var G__35251 = (0);
seq__34767_35234 = G__35248;
chunk__34768_35235 = G__35249;
count__34769_35236 = G__35250;
i__34770_35237 = G__35251;
continue;
} else {
var vec__34780_35252 = cljs.core.first(seq__34767_35246__$1);
var k_35253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35252,(0),null);
var v_35254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35252,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35253,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35254),"px"].join('')], 0));


var G__35256 = cljs.core.next(seq__34767_35246__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__34767_35234 = G__35256;
chunk__34768_35235 = G__35257;
count__34769_35236 = G__35258;
i__34770_35237 = G__35259;
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
var len__4789__auto___35262 = arguments.length;
var i__4790__auto___35263 = (0);
while(true){
if((i__4790__auto___35263 < len__4789__auto___35262)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35263]));

var G__35264 = (i__4790__auto___35263 + (1));
i__4790__auto___35263 = G__35264;
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

var seq__34791_35265 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35266 = null;
var count__34793_35267 = (0);
var i__34794_35268 = (0);
while(true){
if((i__34794_35268 < count__34793_35267)){
var vec__34801_35269 = chunk__34792_35266.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35268);
var k_35270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35269,(0),null);
var v_35271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35269,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35270__$1,v_35271__$1);


var G__35273 = seq__34791_35265;
var G__35274 = chunk__34792_35266;
var G__35275 = count__34793_35267;
var G__35276 = (i__34794_35268 + (1));
seq__34791_35265 = G__35273;
chunk__34792_35266 = G__35274;
count__34793_35267 = G__35275;
i__34794_35268 = G__35276;
continue;
} else {
var temp__5735__auto___35278 = cljs.core.seq(seq__34791_35265);
if(temp__5735__auto___35278){
var seq__34791_35279__$1 = temp__5735__auto___35278;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35279__$1)){
var c__4609__auto___35280 = cljs.core.chunk_first(seq__34791_35279__$1);
var G__35281 = cljs.core.chunk_rest(seq__34791_35279__$1);
var G__35282 = c__4609__auto___35280;
var G__35283 = cljs.core.count(c__4609__auto___35280);
var G__35284 = (0);
seq__34791_35265 = G__35281;
chunk__34792_35266 = G__35282;
count__34793_35267 = G__35283;
i__34794_35268 = G__35284;
continue;
} else {
var vec__34804_35285 = cljs.core.first(seq__34791_35279__$1);
var k_35286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35285,(0),null);
var v_35287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35285,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35286__$1,v_35287__$1);


var G__35288 = cljs.core.next(seq__34791_35279__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__34791_35265 = G__35288;
chunk__34792_35266 = G__35289;
count__34793_35267 = G__35290;
i__34794_35268 = G__35291;
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
var c__4609__auto___35360 = cljs.core.chunk_first(seq__34828_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34828_35359__$1);
var G__35362 = c__4609__auto___35360;
var G__35363 = cljs.core.count(c__4609__auto___35360);
var G__35364 = (0);
seq__34828_35348 = G__35361;
chunk__34829_35349 = G__35362;
count__34830_35350 = G__35363;
i__34831_35351 = G__35364;
continue;
} else {
var c_35365 = cljs.core.first(seq__34828_35359__$1);
var class_name_35366 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35366,c_35365))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35366 === ""))?c_35365:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35366)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35365)].join('')));
}


var G__35367 = cljs.core.next(seq__34828_35359__$1);
var G__35368 = null;
var G__35369 = (0);
var G__35370 = (0);
seq__34828_35348 = G__35367;
chunk__34829_35349 = G__35368;
count__34830_35350 = G__35369;
i__34831_35351 = G__35370;
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
var seq__34832_35371 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34833_35372 = null;
var count__34834_35373 = (0);
var i__34835_35374 = (0);
while(true){
if((i__34835_35374 < count__34834_35373)){
var c_35375 = chunk__34833_35372.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35374);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35375);


var G__35376 = seq__34832_35371;
var G__35377 = chunk__34833_35372;
var G__35378 = count__34834_35373;
var G__35379 = (i__34835_35374 + (1));
seq__34832_35371 = G__35376;
chunk__34833_35372 = G__35377;
count__34834_35373 = G__35378;
i__34835_35374 = G__35379;
continue;
} else {
var temp__5735__auto___35380 = cljs.core.seq(seq__34832_35371);
if(temp__5735__auto___35380){
var seq__34832_35381__$1 = temp__5735__auto___35380;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35381__$1)){
var c__4609__auto___35382 = cljs.core.chunk_first(seq__34832_35381__$1);
var G__35383 = cljs.core.chunk_rest(seq__34832_35381__$1);
var G__35384 = c__4609__auto___35382;
var G__35385 = cljs.core.count(c__4609__auto___35382);
var G__35386 = (0);
seq__34832_35371 = G__35383;
chunk__34833_35372 = G__35384;
count__34834_35373 = G__35385;
i__34835_35374 = G__35386;
continue;
} else {
var c_35387 = cljs.core.first(seq__34832_35381__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35387);


var G__35388 = cljs.core.next(seq__34832_35381__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__34832_35371 = G__35388;
chunk__34833_35372 = G__35389;
count__34834_35373 = G__35390;
i__34835_35374 = G__35391;
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
var len__4789__auto___35393 = arguments.length;
var i__4790__auto___35394 = (0);
while(true){
if((i__4790__auto___35394 < len__4789__auto___35393)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35394]));

var G__35395 = (i__4790__auto___35394 + (1));
i__4790__auto___35394 = G__35395;
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
var temp__5733__auto___35396 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35396)){
var class_list_35397 = temp__5733__auto___35396;
class_list_35397.remove(c__$1);
} else {
var class_name_35398 = dommy.core.class$(elem);
var new_class_name_35399 = dommy.utils.remove_class_str(class_name_35398,c__$1);
if((class_name_35398 === new_class_name_35399)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35399);
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


var G__35400 = seq__34844;
var G__35401 = chunk__34845;
var G__35402 = count__34846;
var G__35403 = (i__34847 + (1));
seq__34844 = G__35400;
chunk__34845 = G__35401;
count__34846 = G__35402;
i__34847 = G__35403;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34844);
if(temp__5735__auto__){
var seq__34844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34844__$1);
var G__35405 = cljs.core.chunk_rest(seq__34844__$1);
var G__35406 = c__4609__auto__;
var G__35407 = cljs.core.count(c__4609__auto__);
var G__35408 = (0);
seq__34844 = G__35405;
chunk__34845 = G__35406;
count__34846 = G__35407;
i__34847 = G__35408;
continue;
} else {
var c = cljs.core.first(seq__34844__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35410 = cljs.core.next(seq__34844__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__34844 = G__35410;
chunk__34845 = G__35411;
count__34846 = G__35412;
i__34847 = G__35413;
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
var temp__5733__auto___35415 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35415)){
var class_list_35416 = temp__5733__auto___35415;
class_list_35416.toggle(c__$1);
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
var len__4789__auto___35430 = arguments.length;
var i__4790__auto___35431 = (0);
while(true){
if((i__4790__auto___35431 < len__4789__auto___35430)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35431]));

var G__35433 = (i__4790__auto___35431 + (1));
i__4790__auto___35431 = G__35433;
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
var seq__34860_35434 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34861_35435 = null;
var count__34862_35436 = (0);
var i__34863_35437 = (0);
while(true){
if((i__34863_35437 < count__34862_35436)){
var c_35438 = chunk__34861_35435.cljs$core$IIndexed$_nth$arity$2(null,i__34863_35437);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35438);


var G__35440 = seq__34860_35434;
var G__35441 = chunk__34861_35435;
var G__35442 = count__34862_35436;
var G__35443 = (i__34863_35437 + (1));
seq__34860_35434 = G__35440;
chunk__34861_35435 = G__35441;
count__34862_35436 = G__35442;
i__34863_35437 = G__35443;
continue;
} else {
var temp__5735__auto___35445 = cljs.core.seq(seq__34860_35434);
if(temp__5735__auto___35445){
var seq__34860_35446__$1 = temp__5735__auto___35445;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35446__$1)){
var c__4609__auto___35449 = cljs.core.chunk_first(seq__34860_35446__$1);
var G__35450 = cljs.core.chunk_rest(seq__34860_35446__$1);
var G__35451 = c__4609__auto___35449;
var G__35452 = cljs.core.count(c__4609__auto___35449);
var G__35453 = (0);
seq__34860_35434 = G__35450;
chunk__34861_35435 = G__35451;
count__34862_35436 = G__35452;
i__34863_35437 = G__35453;
continue;
} else {
var c_35454 = cljs.core.first(seq__34860_35446__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35454);


var G__35455 = cljs.core.next(seq__34860_35446__$1);
var G__35456 = null;
var G__35457 = (0);
var G__35458 = (0);
seq__34860_35434 = G__35455;
chunk__34861_35435 = G__35456;
count__34862_35436 = G__35457;
i__34863_35437 = G__35458;
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
var len__4789__auto___35465 = arguments.length;
var i__4790__auto___35466 = (0);
while(true){
if((i__4790__auto___35466 < len__4789__auto___35465)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35466]));

var G__35467 = (i__4790__auto___35466 + (1));
i__4790__auto___35466 = G__35467;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first(seq34884);
var seq34884__$1 = cljs.core.next(seq34884);
var G__34886 = cljs.core.first(seq34884__$1);
var seq34884__$2 = cljs.core.next(seq34884__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34885,G__34886,seq34884__$2);
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
var vec__34975_35517 = chunk__34905_35514.cljs$core$IIndexed$_nth$arity$2(null,i__34907_35516);
var actual_type_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35517,(0),null);
var factory_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35517,(1),null);
var canonical_f_35520 = (function (){var G__34979 = (factory_35519.cljs$core$IFn$_invoke$arity$1 ? factory_35519.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35519.call(null,f_35512));
var fexpr__34978 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35518,f_35512], null),canonical_f_35520], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35518),canonical_f_35520);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35518),canonical_f_35520);
}


var G__35521 = seq__34903_35513;
var G__35522 = chunk__34905_35514;
var G__35523 = count__34906_35515;
var G__35524 = (i__34907_35516 + (1));
seq__34903_35513 = G__35521;
chunk__34905_35514 = G__35522;
count__34906_35515 = G__35523;
i__34907_35516 = G__35524;
continue;
} else {
var temp__5735__auto___35525 = cljs.core.seq(seq__34903_35513);
if(temp__5735__auto___35525){
var seq__34903_35526__$1 = temp__5735__auto___35525;
if(cljs.core.chunked_seq_QMARK_(seq__34903_35526__$1)){
var c__4609__auto___35527 = cljs.core.chunk_first(seq__34903_35526__$1);
var G__35528 = cljs.core.chunk_rest(seq__34903_35526__$1);
var G__35529 = c__4609__auto___35527;
var G__35530 = cljs.core.count(c__4609__auto___35527);
var G__35531 = (0);
seq__34903_35513 = G__35528;
chunk__34905_35514 = G__35529;
count__34906_35515 = G__35530;
i__34907_35516 = G__35531;
continue;
} else {
var vec__34980_35532 = cljs.core.first(seq__34903_35526__$1);
var actual_type_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35532,(0),null);
var factory_35534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35532,(1),null);
var canonical_f_35535 = (function (){var G__34984 = (factory_35534.cljs$core$IFn$_invoke$arity$1 ? factory_35534.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35534.call(null,f_35512));
var fexpr__34983 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35533,f_35512], null),canonical_f_35535], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35533),canonical_f_35535);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35533),canonical_f_35535);
}


var G__35536 = cljs.core.next(seq__34903_35526__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__34903_35513 = G__35536;
chunk__34905_35514 = G__35537;
count__34906_35515 = G__35538;
i__34907_35516 = G__35539;
continue;
}
} else {
}
}
break;
}

var G__35540 = seq__34893_35506;
var G__35541 = chunk__34900_35507;
var G__35542 = count__34901_35508;
var G__35543 = (i__34902_35509 + (1));
seq__34893_35506 = G__35540;
chunk__34900_35507 = G__35541;
count__34901_35508 = G__35542;
i__34902_35509 = G__35543;
continue;
} else {
var temp__5735__auto___35544 = cljs.core.seq(seq__34893_35506);
if(temp__5735__auto___35544){
var seq__34893_35545__$1 = temp__5735__auto___35544;
if(cljs.core.chunked_seq_QMARK_(seq__34893_35545__$1)){
var c__4609__auto___35546 = cljs.core.chunk_first(seq__34893_35545__$1);
var G__35547 = cljs.core.chunk_rest(seq__34893_35545__$1);
var G__35548 = c__4609__auto___35546;
var G__35549 = cljs.core.count(c__4609__auto___35546);
var G__35550 = (0);
seq__34893_35506 = G__35547;
chunk__34900_35507 = G__35548;
count__34901_35508 = G__35549;
i__34902_35509 = G__35550;
continue;
} else {
var vec__34985_35551 = cljs.core.first(seq__34893_35545__$1);
var orig_type_35552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35551,(0),null);
var f_35553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35551,(1),null);
var seq__34894_35554 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35552,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35552,cljs.core.identity])));
var chunk__34896_35555 = null;
var count__34897_35556 = (0);
var i__34898_35557 = (0);
while(true){
if((i__34898_35557 < count__34897_35556)){
var vec__35005_35558 = chunk__34896_35555.cljs$core$IIndexed$_nth$arity$2(null,i__34898_35557);
var actual_type_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35558,(0),null);
var factory_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35558,(1),null);
var canonical_f_35561 = (function (){var G__35009 = (factory_35560.cljs$core$IFn$_invoke$arity$1 ? factory_35560.cljs$core$IFn$_invoke$arity$1(f_35553) : factory_35560.call(null,f_35553));
var fexpr__35008 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35008.cljs$core$IFn$_invoke$arity$1 ? fexpr__35008.cljs$core$IFn$_invoke$arity$1(G__35009) : fexpr__35008.call(null,G__35009));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35559,f_35553], null),canonical_f_35561], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35559),canonical_f_35561);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35559),canonical_f_35561);
}


var G__35564 = seq__34894_35554;
var G__35565 = chunk__34896_35555;
var G__35566 = count__34897_35556;
var G__35567 = (i__34898_35557 + (1));
seq__34894_35554 = G__35564;
chunk__34896_35555 = G__35565;
count__34897_35556 = G__35566;
i__34898_35557 = G__35567;
continue;
} else {
var temp__5735__auto___35569__$1 = cljs.core.seq(seq__34894_35554);
if(temp__5735__auto___35569__$1){
var seq__34894_35571__$1 = temp__5735__auto___35569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34894_35571__$1)){
var c__4609__auto___35572 = cljs.core.chunk_first(seq__34894_35571__$1);
var G__35573 = cljs.core.chunk_rest(seq__34894_35571__$1);
var G__35574 = c__4609__auto___35572;
var G__35575 = cljs.core.count(c__4609__auto___35572);
var G__35576 = (0);
seq__34894_35554 = G__35573;
chunk__34896_35555 = G__35574;
count__34897_35556 = G__35575;
i__34898_35557 = G__35576;
continue;
} else {
var vec__35010_35578 = cljs.core.first(seq__34894_35571__$1);
var actual_type_35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35578,(0),null);
var factory_35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35578,(1),null);
var canonical_f_35582 = (function (){var G__35014 = (factory_35580.cljs$core$IFn$_invoke$arity$1 ? factory_35580.cljs$core$IFn$_invoke$arity$1(f_35553) : factory_35580.call(null,f_35553));
var fexpr__35013 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35013.cljs$core$IFn$_invoke$arity$1 ? fexpr__35013.cljs$core$IFn$_invoke$arity$1(G__35014) : fexpr__35013.call(null,G__35014));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35579,f_35553], null),canonical_f_35582], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35579),canonical_f_35582);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35579),canonical_f_35582);
}


var G__35583 = cljs.core.next(seq__34894_35571__$1);
var G__35584 = null;
var G__35585 = (0);
var G__35586 = (0);
seq__34894_35554 = G__35583;
chunk__34896_35555 = G__35584;
count__34897_35556 = G__35585;
i__34898_35557 = G__35586;
continue;
}
} else {
}
}
break;
}

var G__35587 = cljs.core.next(seq__34893_35545__$1);
var G__35588 = null;
var G__35589 = (0);
var G__35590 = (0);
seq__34893_35506 = G__35587;
chunk__34900_35507 = G__35588;
count__34901_35508 = G__35589;
i__34902_35509 = G__35590;
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
var len__4789__auto___35595 = arguments.length;
var i__4790__auto___35596 = (0);
while(true){
if((i__4790__auto___35596 < len__4789__auto___35595)){
args__4795__auto__.push((arguments[i__4790__auto___35596]));

var G__35597 = (i__4790__auto___35596 + (1));
i__4790__auto___35596 = G__35597;
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

var vec__35017_35601 = dommy.core.elem_and_selector(elem_sel);
var elem_35602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35601,(0),null);
var selector_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35601,(1),null);
var seq__35020_35604 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35027_35605 = null;
var count__35028_35606 = (0);
var i__35029_35607 = (0);
while(true){
if((i__35029_35607 < count__35028_35606)){
var vec__35074_35608 = chunk__35027_35605.cljs$core$IIndexed$_nth$arity$2(null,i__35029_35607);
var orig_type_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35608,(0),null);
var f_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35608,(1),null);
var seq__35030_35611 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35609,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35609,cljs.core.identity])));
var chunk__35032_35612 = null;
var count__35033_35613 = (0);
var i__35034_35614 = (0);
while(true){
if((i__35034_35614 < count__35033_35613)){
var vec__35086_35620 = chunk__35032_35612.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35614);
var actual_type_35621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35620,(0),null);
var __35622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35620,(1),null);
var keys_35625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35603,actual_type_35621,f_35610], null);
var canonical_f_35626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35602),keys_35625);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35602,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35625], 0));

if(cljs.core.truth_(elem_35602.removeEventListener)){
elem_35602.removeEventListener(cljs.core.name(actual_type_35621),canonical_f_35626);
} else {
elem_35602.detachEvent(cljs.core.name(actual_type_35621),canonical_f_35626);
}


var G__35629 = seq__35030_35611;
var G__35630 = chunk__35032_35612;
var G__35631 = count__35033_35613;
var G__35632 = (i__35034_35614 + (1));
seq__35030_35611 = G__35629;
chunk__35032_35612 = G__35630;
count__35033_35613 = G__35631;
i__35034_35614 = G__35632;
continue;
} else {
var temp__5735__auto___35635 = cljs.core.seq(seq__35030_35611);
if(temp__5735__auto___35635){
var seq__35030_35636__$1 = temp__5735__auto___35635;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35636__$1)){
var c__4609__auto___35637 = cljs.core.chunk_first(seq__35030_35636__$1);
var G__35638 = cljs.core.chunk_rest(seq__35030_35636__$1);
var G__35639 = c__4609__auto___35637;
var G__35640 = cljs.core.count(c__4609__auto___35637);
var G__35641 = (0);
seq__35030_35611 = G__35638;
chunk__35032_35612 = G__35639;
count__35033_35613 = G__35640;
i__35034_35614 = G__35641;
continue;
} else {
var vec__35105_35642 = cljs.core.first(seq__35030_35636__$1);
var actual_type_35643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105_35642,(0),null);
var __35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105_35642,(1),null);
var keys_35650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35603,actual_type_35643,f_35610], null);
var canonical_f_35651 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35602),keys_35650);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35602,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35650], 0));

if(cljs.core.truth_(elem_35602.removeEventListener)){
elem_35602.removeEventListener(cljs.core.name(actual_type_35643),canonical_f_35651);
} else {
elem_35602.detachEvent(cljs.core.name(actual_type_35643),canonical_f_35651);
}


var G__35654 = cljs.core.next(seq__35030_35636__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__35030_35611 = G__35654;
chunk__35032_35612 = G__35655;
count__35033_35613 = G__35656;
i__35034_35614 = G__35657;
continue;
}
} else {
}
}
break;
}

var G__35658 = seq__35020_35604;
var G__35659 = chunk__35027_35605;
var G__35660 = count__35028_35606;
var G__35661 = (i__35029_35607 + (1));
seq__35020_35604 = G__35658;
chunk__35027_35605 = G__35659;
count__35028_35606 = G__35660;
i__35029_35607 = G__35661;
continue;
} else {
var temp__5735__auto___35664 = cljs.core.seq(seq__35020_35604);
if(temp__5735__auto___35664){
var seq__35020_35667__$1 = temp__5735__auto___35664;
if(cljs.core.chunked_seq_QMARK_(seq__35020_35667__$1)){
var c__4609__auto___35668 = cljs.core.chunk_first(seq__35020_35667__$1);
var G__35669 = cljs.core.chunk_rest(seq__35020_35667__$1);
var G__35670 = c__4609__auto___35668;
var G__35671 = cljs.core.count(c__4609__auto___35668);
var G__35672 = (0);
seq__35020_35604 = G__35669;
chunk__35027_35605 = G__35670;
count__35028_35606 = G__35671;
i__35029_35607 = G__35672;
continue;
} else {
var vec__35113_35674 = cljs.core.first(seq__35020_35667__$1);
var orig_type_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35674,(0),null);
var f_35676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35674,(1),null);
var seq__35021_35677 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35675,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35675,cljs.core.identity])));
var chunk__35023_35678 = null;
var count__35024_35679 = (0);
var i__35025_35680 = (0);
while(true){
if((i__35025_35680 < count__35024_35679)){
var vec__35127_35684 = chunk__35023_35678.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35680);
var actual_type_35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35684,(0),null);
var __35686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35684,(1),null);
var keys_35688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35603,actual_type_35685,f_35676], null);
var canonical_f_35689 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35602),keys_35688);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35602,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35688], 0));

if(cljs.core.truth_(elem_35602.removeEventListener)){
elem_35602.removeEventListener(cljs.core.name(actual_type_35685),canonical_f_35689);
} else {
elem_35602.detachEvent(cljs.core.name(actual_type_35685),canonical_f_35689);
}


var G__35695 = seq__35021_35677;
var G__35696 = chunk__35023_35678;
var G__35697 = count__35024_35679;
var G__35698 = (i__35025_35680 + (1));
seq__35021_35677 = G__35695;
chunk__35023_35678 = G__35696;
count__35024_35679 = G__35697;
i__35025_35680 = G__35698;
continue;
} else {
var temp__5735__auto___35699__$1 = cljs.core.seq(seq__35021_35677);
if(temp__5735__auto___35699__$1){
var seq__35021_35700__$1 = temp__5735__auto___35699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35700__$1)){
var c__4609__auto___35703 = cljs.core.chunk_first(seq__35021_35700__$1);
var G__35704 = cljs.core.chunk_rest(seq__35021_35700__$1);
var G__35705 = c__4609__auto___35703;
var G__35706 = cljs.core.count(c__4609__auto___35703);
var G__35707 = (0);
seq__35021_35677 = G__35704;
chunk__35023_35678 = G__35705;
count__35024_35679 = G__35706;
i__35025_35680 = G__35707;
continue;
} else {
var vec__35142_35709 = cljs.core.first(seq__35021_35700__$1);
var actual_type_35710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35709,(0),null);
var __35711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35709,(1),null);
var keys_35714 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35603,actual_type_35710,f_35676], null);
var canonical_f_35715 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35602),keys_35714);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35602,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35714], 0));

if(cljs.core.truth_(elem_35602.removeEventListener)){
elem_35602.removeEventListener(cljs.core.name(actual_type_35710),canonical_f_35715);
} else {
elem_35602.detachEvent(cljs.core.name(actual_type_35710),canonical_f_35715);
}


var G__35719 = cljs.core.next(seq__35021_35700__$1);
var G__35720 = null;
var G__35721 = (0);
var G__35722 = (0);
seq__35021_35677 = G__35719;
chunk__35023_35678 = G__35720;
count__35024_35679 = G__35721;
i__35025_35680 = G__35722;
continue;
}
} else {
}
}
break;
}

var G__35724 = cljs.core.next(seq__35020_35667__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35020_35604 = G__35724;
chunk__35027_35605 = G__35725;
count__35028_35606 = G__35726;
i__35029_35607 = G__35727;
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
var len__4789__auto___35737 = arguments.length;
var i__4790__auto___35739 = (0);
while(true){
if((i__4790__auto___35739 < len__4789__auto___35737)){
args__4795__auto__.push((arguments[i__4790__auto___35739]));

var G__35741 = (i__4790__auto___35739 + (1));
i__4790__auto___35739 = G__35741;
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

var vec__35152_35746 = dommy.core.elem_and_selector(elem_sel);
var elem_35747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35746,(0),null);
var selector_35748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35746,(1),null);
var seq__35155_35749 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35156_35750 = null;
var count__35157_35751 = (0);
var i__35158_35752 = (0);
while(true){
if((i__35158_35752 < count__35157_35751)){
var vec__35168_35755 = chunk__35156_35750.cljs$core$IIndexed$_nth$arity$2(null,i__35158_35752);
var type_35756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35755,(0),null);
var f_35757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35755,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35756,((function (seq__35155_35749,chunk__35156_35750,count__35157_35751,i__35158_35752,vec__35168_35755,type_35756,f_35757,vec__35152_35746,elem_35747,selector_35748){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35756,dommy$core$this_fn], 0));

return (f_35757.cljs$core$IFn$_invoke$arity$1 ? f_35757.cljs$core$IFn$_invoke$arity$1(e) : f_35757.call(null,e));
});})(seq__35155_35749,chunk__35156_35750,count__35157_35751,i__35158_35752,vec__35168_35755,type_35756,f_35757,vec__35152_35746,elem_35747,selector_35748))
], 0));


var G__35762 = seq__35155_35749;
var G__35763 = chunk__35156_35750;
var G__35764 = count__35157_35751;
var G__35765 = (i__35158_35752 + (1));
seq__35155_35749 = G__35762;
chunk__35156_35750 = G__35763;
count__35157_35751 = G__35764;
i__35158_35752 = G__35765;
continue;
} else {
var temp__5735__auto___35766 = cljs.core.seq(seq__35155_35749);
if(temp__5735__auto___35766){
var seq__35155_35769__$1 = temp__5735__auto___35766;
if(cljs.core.chunked_seq_QMARK_(seq__35155_35769__$1)){
var c__4609__auto___35771 = cljs.core.chunk_first(seq__35155_35769__$1);
var G__35772 = cljs.core.chunk_rest(seq__35155_35769__$1);
var G__35773 = c__4609__auto___35771;
var G__35774 = cljs.core.count(c__4609__auto___35771);
var G__35775 = (0);
seq__35155_35749 = G__35772;
chunk__35156_35750 = G__35773;
count__35157_35751 = G__35774;
i__35158_35752 = G__35775;
continue;
} else {
var vec__35171_35776 = cljs.core.first(seq__35155_35769__$1);
var type_35777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171_35776,(0),null);
var f_35778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171_35776,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35777,((function (seq__35155_35749,chunk__35156_35750,count__35157_35751,i__35158_35752,vec__35171_35776,type_35777,f_35778,seq__35155_35769__$1,temp__5735__auto___35766,vec__35152_35746,elem_35747,selector_35748){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35777,dommy$core$this_fn], 0));

return (f_35778.cljs$core$IFn$_invoke$arity$1 ? f_35778.cljs$core$IFn$_invoke$arity$1(e) : f_35778.call(null,e));
});})(seq__35155_35749,chunk__35156_35750,count__35157_35751,i__35158_35752,vec__35171_35776,type_35777,f_35778,seq__35155_35769__$1,temp__5735__auto___35766,vec__35152_35746,elem_35747,selector_35748))
], 0));


var G__35785 = cljs.core.next(seq__35155_35769__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__35155_35749 = G__35785;
chunk__35156_35750 = G__35786;
count__35157_35751 = G__35787;
i__35158_35752 = G__35788;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35150){
var G__35151 = cljs.core.first(seq35150);
var seq35150__$1 = cljs.core.next(seq35150);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35151,seq35150__$1);
}));


//# sourceMappingURL=dommy.core.js.map
