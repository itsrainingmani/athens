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
var len__4789__auto___35164 = arguments.length;
var i__4790__auto___35166 = (0);
while(true){
if((i__4790__auto___35166 < len__4789__auto___35164)){
args__4795__auto__.push((arguments[i__4790__auto___35166]));

var G__35171 = (i__4790__auto___35166 + (1));
i__4790__auto___35166 = G__35171;
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
var seq__34742_35173 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34743_35174 = null;
var count__34744_35175 = (0);
var i__34745_35176 = (0);
while(true){
if((i__34745_35176 < count__34744_35175)){
var vec__34752_35177 = chunk__34743_35174.cljs$core$IIndexed$_nth$arity$2(null,i__34745_35176);
var k_35178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35177,(0),null);
var v_35179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35177,(1),null);
style.setProperty(dommy.utils.as_str(k_35178),v_35179);


var G__35180 = seq__34742_35173;
var G__35181 = chunk__34743_35174;
var G__35182 = count__34744_35175;
var G__35183 = (i__34745_35176 + (1));
seq__34742_35173 = G__35180;
chunk__34743_35174 = G__35181;
count__34744_35175 = G__35182;
i__34745_35176 = G__35183;
continue;
} else {
var temp__5735__auto___35184 = cljs.core.seq(seq__34742_35173);
if(temp__5735__auto___35184){
var seq__34742_35185__$1 = temp__5735__auto___35184;
if(cljs.core.chunked_seq_QMARK_(seq__34742_35185__$1)){
var c__4609__auto___35186 = cljs.core.chunk_first(seq__34742_35185__$1);
var G__35187 = cljs.core.chunk_rest(seq__34742_35185__$1);
var G__35188 = c__4609__auto___35186;
var G__35189 = cljs.core.count(c__4609__auto___35186);
var G__35190 = (0);
seq__34742_35173 = G__35187;
chunk__34743_35174 = G__35188;
count__34744_35175 = G__35189;
i__34745_35176 = G__35190;
continue;
} else {
var vec__34755_35191 = cljs.core.first(seq__34742_35185__$1);
var k_35192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35191,(0),null);
var v_35193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35191,(1),null);
style.setProperty(dommy.utils.as_str(k_35192),v_35193);


var G__35194 = cljs.core.next(seq__34742_35185__$1);
var G__35195 = null;
var G__35196 = (0);
var G__35197 = (0);
seq__34742_35173 = G__35194;
chunk__34743_35174 = G__35195;
count__34744_35175 = G__35196;
i__34745_35176 = G__35197;
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
var len__4789__auto___35198 = arguments.length;
var i__4790__auto___35199 = (0);
while(true){
if((i__4790__auto___35199 < len__4789__auto___35198)){
args__4795__auto__.push((arguments[i__4790__auto___35199]));

var G__35200 = (i__4790__auto___35199 + (1));
i__4790__auto___35199 = G__35200;
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
var seq__34760_35201 = cljs.core.seq(keywords);
var chunk__34761_35202 = null;
var count__34762_35203 = (0);
var i__34763_35204 = (0);
while(true){
if((i__34763_35204 < count__34762_35203)){
var kw_35209 = chunk__34761_35202.cljs$core$IIndexed$_nth$arity$2(null,i__34763_35204);
style.removeProperty(dommy.utils.as_str(kw_35209));


var G__35210 = seq__34760_35201;
var G__35211 = chunk__34761_35202;
var G__35212 = count__34762_35203;
var G__35213 = (i__34763_35204 + (1));
seq__34760_35201 = G__35210;
chunk__34761_35202 = G__35211;
count__34762_35203 = G__35212;
i__34763_35204 = G__35213;
continue;
} else {
var temp__5735__auto___35214 = cljs.core.seq(seq__34760_35201);
if(temp__5735__auto___35214){
var seq__34760_35215__$1 = temp__5735__auto___35214;
if(cljs.core.chunked_seq_QMARK_(seq__34760_35215__$1)){
var c__4609__auto___35216 = cljs.core.chunk_first(seq__34760_35215__$1);
var G__35217 = cljs.core.chunk_rest(seq__34760_35215__$1);
var G__35218 = c__4609__auto___35216;
var G__35219 = cljs.core.count(c__4609__auto___35216);
var G__35220 = (0);
seq__34760_35201 = G__35217;
chunk__34761_35202 = G__35218;
count__34762_35203 = G__35219;
i__34763_35204 = G__35220;
continue;
} else {
var kw_35221 = cljs.core.first(seq__34760_35215__$1);
style.removeProperty(dommy.utils.as_str(kw_35221));


var G__35222 = cljs.core.next(seq__34760_35215__$1);
var G__35223 = null;
var G__35224 = (0);
var G__35225 = (0);
seq__34760_35201 = G__35222;
chunk__34761_35202 = G__35223;
count__34762_35203 = G__35224;
i__34763_35204 = G__35225;
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
var len__4789__auto___35226 = arguments.length;
var i__4790__auto___35227 = (0);
while(true){
if((i__4790__auto___35227 < len__4789__auto___35226)){
args__4795__auto__.push((arguments[i__4790__auto___35227]));

var G__35228 = (i__4790__auto___35227 + (1));
i__4790__auto___35227 = G__35228;
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

var seq__34767_35229 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34768_35230 = null;
var count__34769_35231 = (0);
var i__34770_35232 = (0);
while(true){
if((i__34770_35232 < count__34769_35231)){
var vec__34777_35234 = chunk__34768_35230.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35232);
var k_35235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35234,(0),null);
var v_35236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35234,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35235,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35236),"px"].join('')], 0));


var G__35239 = seq__34767_35229;
var G__35240 = chunk__34768_35230;
var G__35241 = count__34769_35231;
var G__35242 = (i__34770_35232 + (1));
seq__34767_35229 = G__35239;
chunk__34768_35230 = G__35240;
count__34769_35231 = G__35241;
i__34770_35232 = G__35242;
continue;
} else {
var temp__5735__auto___35243 = cljs.core.seq(seq__34767_35229);
if(temp__5735__auto___35243){
var seq__34767_35244__$1 = temp__5735__auto___35243;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35244__$1)){
var c__4609__auto___35245 = cljs.core.chunk_first(seq__34767_35244__$1);
var G__35246 = cljs.core.chunk_rest(seq__34767_35244__$1);
var G__35247 = c__4609__auto___35245;
var G__35248 = cljs.core.count(c__4609__auto___35245);
var G__35249 = (0);
seq__34767_35229 = G__35246;
chunk__34768_35230 = G__35247;
count__34769_35231 = G__35248;
i__34770_35232 = G__35249;
continue;
} else {
var vec__34780_35250 = cljs.core.first(seq__34767_35244__$1);
var k_35251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35250,(0),null);
var v_35252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35250,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35251,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35252),"px"].join('')], 0));


var G__35253 = cljs.core.next(seq__34767_35244__$1);
var G__35254 = null;
var G__35255 = (0);
var G__35256 = (0);
seq__34767_35229 = G__35253;
chunk__34768_35230 = G__35254;
count__34769_35231 = G__35255;
i__34770_35232 = G__35256;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34764){
var G__34765 = cljs.core.first(seq34764);
var seq34764__$1 = cljs.core.next(seq34764);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34765,seq34764__$1);
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
var len__4789__auto___35258 = arguments.length;
var i__4790__auto___35259 = (0);
while(true){
if((i__4790__auto___35259 < len__4789__auto___35258)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35259]));

var G__35261 = (i__4790__auto___35259 + (1));
i__4790__auto___35259 = G__35261;
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

var seq__34791_35263 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35264 = null;
var count__34793_35265 = (0);
var i__34794_35266 = (0);
while(true){
if((i__34794_35266 < count__34793_35265)){
var vec__34801_35267 = chunk__34792_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35266);
var k_35268__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35267,(0),null);
var v_35269__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35267,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35268__$1,v_35269__$1);


var G__35270 = seq__34791_35263;
var G__35271 = chunk__34792_35264;
var G__35272 = count__34793_35265;
var G__35273 = (i__34794_35266 + (1));
seq__34791_35263 = G__35270;
chunk__34792_35264 = G__35271;
count__34793_35265 = G__35272;
i__34794_35266 = G__35273;
continue;
} else {
var temp__5735__auto___35274 = cljs.core.seq(seq__34791_35263);
if(temp__5735__auto___35274){
var seq__34791_35275__$1 = temp__5735__auto___35274;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35275__$1)){
var c__4609__auto___35276 = cljs.core.chunk_first(seq__34791_35275__$1);
var G__35277 = cljs.core.chunk_rest(seq__34791_35275__$1);
var G__35278 = c__4609__auto___35276;
var G__35279 = cljs.core.count(c__4609__auto___35276);
var G__35280 = (0);
seq__34791_35263 = G__35277;
chunk__34792_35264 = G__35278;
count__34793_35265 = G__35279;
i__34794_35266 = G__35280;
continue;
} else {
var vec__34804_35281 = cljs.core.first(seq__34791_35275__$1);
var k_35282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35281,(0),null);
var v_35283__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35281,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35282__$1,v_35283__$1);


var G__35284 = cljs.core.next(seq__34791_35275__$1);
var G__35285 = null;
var G__35286 = (0);
var G__35287 = (0);
seq__34791_35263 = G__35284;
chunk__34792_35264 = G__35285;
count__34793_35265 = G__35286;
i__34794_35266 = G__35287;
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
var len__4789__auto___35289 = arguments.length;
var i__4790__auto___35290 = (0);
while(true){
if((i__4790__auto___35290 < len__4789__auto___35289)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35290]));

var G__35291 = (i__4790__auto___35290 + (1));
i__4790__auto___35290 = G__35291;
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
var k_35292__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34812.cljs$core$IFn$_invoke$arity$1 ? fexpr__34812.cljs$core$IFn$_invoke$arity$1(k_35292__$1) : fexpr__34812.call(null,k_35292__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35292__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34813_35293 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34814_35294 = null;
var count__34815_35295 = (0);
var i__34816_35296 = (0);
while(true){
if((i__34816_35296 < count__34815_35295)){
var k_35297__$1 = chunk__34814_35294.cljs$core$IIndexed$_nth$arity$2(null,i__34816_35296);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35297__$1);


var G__35298 = seq__34813_35293;
var G__35299 = chunk__34814_35294;
var G__35300 = count__34815_35295;
var G__35301 = (i__34816_35296 + (1));
seq__34813_35293 = G__35298;
chunk__34814_35294 = G__35299;
count__34815_35295 = G__35300;
i__34816_35296 = G__35301;
continue;
} else {
var temp__5735__auto___35302 = cljs.core.seq(seq__34813_35293);
if(temp__5735__auto___35302){
var seq__34813_35303__$1 = temp__5735__auto___35302;
if(cljs.core.chunked_seq_QMARK_(seq__34813_35303__$1)){
var c__4609__auto___35304 = cljs.core.chunk_first(seq__34813_35303__$1);
var G__35305 = cljs.core.chunk_rest(seq__34813_35303__$1);
var G__35306 = c__4609__auto___35304;
var G__35307 = cljs.core.count(c__4609__auto___35304);
var G__35308 = (0);
seq__34813_35293 = G__35305;
chunk__34814_35294 = G__35306;
count__34815_35295 = G__35307;
i__34816_35296 = G__35308;
continue;
} else {
var k_35309__$1 = cljs.core.first(seq__34813_35303__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35309__$1);


var G__35310 = cljs.core.next(seq__34813_35303__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__34813_35293 = G__35310;
chunk__34814_35294 = G__35311;
count__34815_35295 = G__35312;
i__34816_35296 = G__35313;
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


var G__35396 = seq__34841;
var G__35397 = chunk__34842;
var G__35398 = count__34843;
var G__35399 = (i__34844 + (1));
seq__34841 = G__35396;
chunk__34842 = G__35397;
count__34843 = G__35398;
i__34844 = G__35399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34841);
if(temp__5735__auto__){
var seq__34841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35400 = cljs.core.chunk_rest(seq__34841__$1);
var G__35401 = c__4609__auto__;
var G__35402 = cljs.core.count(c__4609__auto__);
var G__35403 = (0);
seq__34841 = G__35400;
chunk__34842 = G__35401;
count__34843 = G__35402;
i__34844 = G__35403;
continue;
} else {
var c = cljs.core.first(seq__34841__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35404 = cljs.core.next(seq__34841__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__34841 = G__35404;
chunk__34842 = G__35405;
count__34843 = G__35406;
i__34844 = G__35407;
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
var temp__5733__auto___35409 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35409)){
var class_list_35410 = temp__5733__auto___35409;
class_list_35410.toggle(c__$1);
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
var G__34855 = arguments.length;
switch (G__34855) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35418 = arguments.length;
var i__4790__auto___35419 = (0);
while(true){
if((i__4790__auto___35419 < len__4789__auto___35418)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35419]));

var G__35420 = (i__4790__auto___35419 + (1));
i__4790__auto___35419 = G__35420;
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
var seq__34858_35421 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34859_35422 = null;
var count__34860_35423 = (0);
var i__34861_35424 = (0);
while(true){
if((i__34861_35424 < count__34860_35423)){
var c_35425 = chunk__34859_35422.cljs$core$IIndexed$_nth$arity$2(null,i__34861_35424);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35425);


var G__35426 = seq__34858_35421;
var G__35427 = chunk__34859_35422;
var G__35428 = count__34860_35423;
var G__35429 = (i__34861_35424 + (1));
seq__34858_35421 = G__35426;
chunk__34859_35422 = G__35427;
count__34860_35423 = G__35428;
i__34861_35424 = G__35429;
continue;
} else {
var temp__5735__auto___35430 = cljs.core.seq(seq__34858_35421);
if(temp__5735__auto___35430){
var seq__34858_35431__$1 = temp__5735__auto___35430;
if(cljs.core.chunked_seq_QMARK_(seq__34858_35431__$1)){
var c__4609__auto___35432 = cljs.core.chunk_first(seq__34858_35431__$1);
var G__35433 = cljs.core.chunk_rest(seq__34858_35431__$1);
var G__35434 = c__4609__auto___35432;
var G__35435 = cljs.core.count(c__4609__auto___35432);
var G__35436 = (0);
seq__34858_35421 = G__35433;
chunk__34859_35422 = G__35434;
count__34860_35423 = G__35435;
i__34861_35424 = G__35436;
continue;
} else {
var c_35437 = cljs.core.first(seq__34858_35431__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35437);


var G__35438 = cljs.core.next(seq__34858_35431__$1);
var G__35439 = null;
var G__35440 = (0);
var G__35441 = (0);
seq__34858_35421 = G__35438;
chunk__34859_35422 = G__35439;
count__34860_35423 = G__35440;
i__34861_35424 = G__35441;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34852){
var G__34853 = cljs.core.first(seq34852);
var seq34852__$1 = cljs.core.next(seq34852);
var G__34854 = cljs.core.first(seq34852__$1);
var seq34852__$2 = cljs.core.next(seq34852__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34853,G__34854,seq34852__$2);
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
var len__4789__auto___35443 = arguments.length;
var i__4790__auto___35444 = (0);
while(true){
if((i__4790__auto___35444 < len__4789__auto___35443)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35444]));

var G__35445 = (i__4790__auto___35444 + (1));
i__4790__auto___35444 = G__35445;
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
var seq__34870_35446 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34871_35447 = null;
var count__34872_35448 = (0);
var i__34873_35449 = (0);
while(true){
if((i__34873_35449 < count__34872_35448)){
var c_35450 = chunk__34871_35447.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35449);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35450);


var G__35451 = seq__34870_35446;
var G__35452 = chunk__34871_35447;
var G__35453 = count__34872_35448;
var G__35454 = (i__34873_35449 + (1));
seq__34870_35446 = G__35451;
chunk__34871_35447 = G__35452;
count__34872_35448 = G__35453;
i__34873_35449 = G__35454;
continue;
} else {
var temp__5735__auto___35455 = cljs.core.seq(seq__34870_35446);
if(temp__5735__auto___35455){
var seq__34870_35456__$1 = temp__5735__auto___35455;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35456__$1)){
var c__4609__auto___35457 = cljs.core.chunk_first(seq__34870_35456__$1);
var G__35458 = cljs.core.chunk_rest(seq__34870_35456__$1);
var G__35459 = c__4609__auto___35457;
var G__35460 = cljs.core.count(c__4609__auto___35457);
var G__35461 = (0);
seq__34870_35446 = G__35458;
chunk__34871_35447 = G__35459;
count__34872_35448 = G__35460;
i__34873_35449 = G__35461;
continue;
} else {
var c_35462 = cljs.core.first(seq__34870_35456__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35462);


var G__35463 = cljs.core.next(seq__34870_35456__$1);
var G__35464 = null;
var G__35465 = (0);
var G__35466 = (0);
seq__34870_35446 = G__35463;
chunk__34871_35447 = G__35464;
count__34872_35448 = G__35465;
i__34873_35449 = G__35466;
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
var temp__5733__auto___35467 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35467)){
var next_35468 = temp__5733__auto___35467;
dommy.core.insert_before_BANG_(elem,next_35468);
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
var len__4789__auto___35474 = arguments.length;
var i__4790__auto___35475 = (0);
while(true){
if((i__4790__auto___35475 < len__4789__auto___35474)){
args__4795__auto__.push((arguments[i__4790__auto___35475]));

var G__35476 = (i__4790__auto___35475 + (1));
i__4790__auto___35475 = G__35476;
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

var vec__34887_35478 = dommy.core.elem_and_selector(elem_sel);
var elem_35479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35478,(0),null);
var selector_35480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35478,(1),null);
var seq__34890_35481 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34897_35482 = null;
var count__34898_35483 = (0);
var i__34899_35484 = (0);
while(true){
if((i__34899_35484 < count__34898_35483)){
var vec__34955_35485 = chunk__34897_35482.cljs$core$IIndexed$_nth$arity$2(null,i__34899_35484);
var orig_type_35486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35485,(0),null);
var f_35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35485,(1),null);
var seq__34900_35488 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35486,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35486,cljs.core.identity])));
var chunk__34902_35489 = null;
var count__34903_35490 = (0);
var i__34904_35491 = (0);
while(true){
if((i__34904_35491 < count__34903_35490)){
var vec__34968_35493 = chunk__34902_35489.cljs$core$IIndexed$_nth$arity$2(null,i__34904_35491);
var actual_type_35494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35493,(0),null);
var factory_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35493,(1),null);
var canonical_f_35496 = (function (){var G__34972 = (factory_35495.cljs$core$IFn$_invoke$arity$1 ? factory_35495.cljs$core$IFn$_invoke$arity$1(f_35487) : factory_35495.call(null,f_35487));
var fexpr__34971 = (cljs.core.truth_(selector_35480)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35479,selector_35480):cljs.core.identity);
return (fexpr__34971.cljs$core$IFn$_invoke$arity$1 ? fexpr__34971.cljs$core$IFn$_invoke$arity$1(G__34972) : fexpr__34971.call(null,G__34972));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35479,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35480,actual_type_35494,f_35487], null),canonical_f_35496], 0));

if(cljs.core.truth_(elem_35479.addEventListener)){
elem_35479.addEventListener(cljs.core.name(actual_type_35494),canonical_f_35496);
} else {
elem_35479.attachEvent(cljs.core.name(actual_type_35494),canonical_f_35496);
}


var G__35499 = seq__34900_35488;
var G__35500 = chunk__34902_35489;
var G__35501 = count__34903_35490;
var G__35502 = (i__34904_35491 + (1));
seq__34900_35488 = G__35499;
chunk__34902_35489 = G__35500;
count__34903_35490 = G__35501;
i__34904_35491 = G__35502;
continue;
} else {
var temp__5735__auto___35504 = cljs.core.seq(seq__34900_35488);
if(temp__5735__auto___35504){
var seq__34900_35505__$1 = temp__5735__auto___35504;
if(cljs.core.chunked_seq_QMARK_(seq__34900_35505__$1)){
var c__4609__auto___35506 = cljs.core.chunk_first(seq__34900_35505__$1);
var G__35507 = cljs.core.chunk_rest(seq__34900_35505__$1);
var G__35508 = c__4609__auto___35506;
var G__35509 = cljs.core.count(c__4609__auto___35506);
var G__35510 = (0);
seq__34900_35488 = G__35507;
chunk__34902_35489 = G__35508;
count__34903_35490 = G__35509;
i__34904_35491 = G__35510;
continue;
} else {
var vec__34973_35511 = cljs.core.first(seq__34900_35505__$1);
var actual_type_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35511,(0),null);
var factory_35513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35511,(1),null);
var canonical_f_35514 = (function (){var G__34977 = (factory_35513.cljs$core$IFn$_invoke$arity$1 ? factory_35513.cljs$core$IFn$_invoke$arity$1(f_35487) : factory_35513.call(null,f_35487));
var fexpr__34976 = (cljs.core.truth_(selector_35480)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35479,selector_35480):cljs.core.identity);
return (fexpr__34976.cljs$core$IFn$_invoke$arity$1 ? fexpr__34976.cljs$core$IFn$_invoke$arity$1(G__34977) : fexpr__34976.call(null,G__34977));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35479,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35480,actual_type_35512,f_35487], null),canonical_f_35514], 0));

if(cljs.core.truth_(elem_35479.addEventListener)){
elem_35479.addEventListener(cljs.core.name(actual_type_35512),canonical_f_35514);
} else {
elem_35479.attachEvent(cljs.core.name(actual_type_35512),canonical_f_35514);
}


var G__35520 = cljs.core.next(seq__34900_35505__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34900_35488 = G__35520;
chunk__34902_35489 = G__35521;
count__34903_35490 = G__35522;
i__34904_35491 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35524 = seq__34890_35481;
var G__35525 = chunk__34897_35482;
var G__35526 = count__34898_35483;
var G__35527 = (i__34899_35484 + (1));
seq__34890_35481 = G__35524;
chunk__34897_35482 = G__35525;
count__34898_35483 = G__35526;
i__34899_35484 = G__35527;
continue;
} else {
var temp__5735__auto___35528 = cljs.core.seq(seq__34890_35481);
if(temp__5735__auto___35528){
var seq__34890_35529__$1 = temp__5735__auto___35528;
if(cljs.core.chunked_seq_QMARK_(seq__34890_35529__$1)){
var c__4609__auto___35530 = cljs.core.chunk_first(seq__34890_35529__$1);
var G__35532 = cljs.core.chunk_rest(seq__34890_35529__$1);
var G__35533 = c__4609__auto___35530;
var G__35534 = cljs.core.count(c__4609__auto___35530);
var G__35535 = (0);
seq__34890_35481 = G__35532;
chunk__34897_35482 = G__35533;
count__34898_35483 = G__35534;
i__34899_35484 = G__35535;
continue;
} else {
var vec__34978_35537 = cljs.core.first(seq__34890_35529__$1);
var orig_type_35538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35537,(0),null);
var f_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35537,(1),null);
var seq__34891_35540 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35538,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35538,cljs.core.identity])));
var chunk__34893_35541 = null;
var count__34894_35542 = (0);
var i__34895_35543 = (0);
while(true){
if((i__34895_35543 < count__34894_35542)){
var vec__34994_35544 = chunk__34893_35541.cljs$core$IIndexed$_nth$arity$2(null,i__34895_35543);
var actual_type_35545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35544,(0),null);
var factory_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35544,(1),null);
var canonical_f_35547 = (function (){var G__34998 = (factory_35546.cljs$core$IFn$_invoke$arity$1 ? factory_35546.cljs$core$IFn$_invoke$arity$1(f_35539) : factory_35546.call(null,f_35539));
var fexpr__34997 = (cljs.core.truth_(selector_35480)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35479,selector_35480):cljs.core.identity);
return (fexpr__34997.cljs$core$IFn$_invoke$arity$1 ? fexpr__34997.cljs$core$IFn$_invoke$arity$1(G__34998) : fexpr__34997.call(null,G__34998));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35479,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35480,actual_type_35545,f_35539], null),canonical_f_35547], 0));

if(cljs.core.truth_(elem_35479.addEventListener)){
elem_35479.addEventListener(cljs.core.name(actual_type_35545),canonical_f_35547);
} else {
elem_35479.attachEvent(cljs.core.name(actual_type_35545),canonical_f_35547);
}


var G__35552 = seq__34891_35540;
var G__35553 = chunk__34893_35541;
var G__35554 = count__34894_35542;
var G__35555 = (i__34895_35543 + (1));
seq__34891_35540 = G__35552;
chunk__34893_35541 = G__35553;
count__34894_35542 = G__35554;
i__34895_35543 = G__35555;
continue;
} else {
var temp__5735__auto___35556__$1 = cljs.core.seq(seq__34891_35540);
if(temp__5735__auto___35556__$1){
var seq__34891_35557__$1 = temp__5735__auto___35556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34891_35557__$1)){
var c__4609__auto___35558 = cljs.core.chunk_first(seq__34891_35557__$1);
var G__35559 = cljs.core.chunk_rest(seq__34891_35557__$1);
var G__35560 = c__4609__auto___35558;
var G__35561 = cljs.core.count(c__4609__auto___35558);
var G__35562 = (0);
seq__34891_35540 = G__35559;
chunk__34893_35541 = G__35560;
count__34894_35542 = G__35561;
i__34895_35543 = G__35562;
continue;
} else {
var vec__34999_35563 = cljs.core.first(seq__34891_35557__$1);
var actual_type_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999_35563,(0),null);
var factory_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999_35563,(1),null);
var canonical_f_35567 = (function (){var G__35003 = (factory_35565.cljs$core$IFn$_invoke$arity$1 ? factory_35565.cljs$core$IFn$_invoke$arity$1(f_35539) : factory_35565.call(null,f_35539));
var fexpr__35002 = (cljs.core.truth_(selector_35480)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35479,selector_35480):cljs.core.identity);
return (fexpr__35002.cljs$core$IFn$_invoke$arity$1 ? fexpr__35002.cljs$core$IFn$_invoke$arity$1(G__35003) : fexpr__35002.call(null,G__35003));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35479,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35480,actual_type_35564,f_35539], null),canonical_f_35567], 0));

if(cljs.core.truth_(elem_35479.addEventListener)){
elem_35479.addEventListener(cljs.core.name(actual_type_35564),canonical_f_35567);
} else {
elem_35479.attachEvent(cljs.core.name(actual_type_35564),canonical_f_35567);
}


var G__35572 = cljs.core.next(seq__34891_35557__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__34891_35540 = G__35572;
chunk__34893_35541 = G__35573;
count__34894_35542 = G__35574;
i__34895_35543 = G__35575;
continue;
}
} else {
}
}
break;
}

var G__35577 = cljs.core.next(seq__34890_35529__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__34890_35481 = G__35577;
chunk__34897_35482 = G__35578;
count__34898_35483 = G__35579;
i__34899_35484 = G__35580;
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
var len__4789__auto___35585 = arguments.length;
var i__4790__auto___35586 = (0);
while(true){
if((i__4790__auto___35586 < len__4789__auto___35585)){
args__4795__auto__.push((arguments[i__4790__auto___35586]));

var G__35587 = (i__4790__auto___35586 + (1));
i__4790__auto___35586 = G__35587;
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

var vec__35006_35588 = dommy.core.elem_and_selector(elem_sel);
var elem_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35588,(0),null);
var selector_35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35588,(1),null);
var seq__35009_35591 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35016_35592 = null;
var count__35017_35593 = (0);
var i__35018_35594 = (0);
while(true){
if((i__35018_35594 < count__35017_35593)){
var vec__35062_35595 = chunk__35016_35592.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35594);
var orig_type_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062_35595,(0),null);
var f_35597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062_35595,(1),null);
var seq__35019_35598 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35596,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35596,cljs.core.identity])));
var chunk__35021_35599 = null;
var count__35022_35600 = (0);
var i__35023_35601 = (0);
while(true){
if((i__35023_35601 < count__35022_35600)){
var vec__35075_35602 = chunk__35021_35599.cljs$core$IIndexed$_nth$arity$2(null,i__35023_35601);
var actual_type_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075_35602,(0),null);
var __35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075_35602,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35603,f_35597], null);
var canonical_f_35606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35605);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35605], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35603),canonical_f_35606);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35603),canonical_f_35606);
}


var G__35607 = seq__35019_35598;
var G__35608 = chunk__35021_35599;
var G__35609 = count__35022_35600;
var G__35610 = (i__35023_35601 + (1));
seq__35019_35598 = G__35607;
chunk__35021_35599 = G__35608;
count__35022_35600 = G__35609;
i__35023_35601 = G__35610;
continue;
} else {
var temp__5735__auto___35611 = cljs.core.seq(seq__35019_35598);
if(temp__5735__auto___35611){
var seq__35019_35612__$1 = temp__5735__auto___35611;
if(cljs.core.chunked_seq_QMARK_(seq__35019_35612__$1)){
var c__4609__auto___35613 = cljs.core.chunk_first(seq__35019_35612__$1);
var G__35614 = cljs.core.chunk_rest(seq__35019_35612__$1);
var G__35615 = c__4609__auto___35613;
var G__35616 = cljs.core.count(c__4609__auto___35613);
var G__35617 = (0);
seq__35019_35598 = G__35614;
chunk__35021_35599 = G__35615;
count__35022_35600 = G__35616;
i__35023_35601 = G__35617;
continue;
} else {
var vec__35078_35618 = cljs.core.first(seq__35019_35612__$1);
var actual_type_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078_35618,(0),null);
var __35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078_35618,(1),null);
var keys_35621 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35619,f_35597], null);
var canonical_f_35622 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35621);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35621], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35619),canonical_f_35622);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35619),canonical_f_35622);
}


var G__35623 = cljs.core.next(seq__35019_35612__$1);
var G__35624 = null;
var G__35625 = (0);
var G__35626 = (0);
seq__35019_35598 = G__35623;
chunk__35021_35599 = G__35624;
count__35022_35600 = G__35625;
i__35023_35601 = G__35626;
continue;
}
} else {
}
}
break;
}

var G__35627 = seq__35009_35591;
var G__35628 = chunk__35016_35592;
var G__35629 = count__35017_35593;
var G__35630 = (i__35018_35594 + (1));
seq__35009_35591 = G__35627;
chunk__35016_35592 = G__35628;
count__35017_35593 = G__35629;
i__35018_35594 = G__35630;
continue;
} else {
var temp__5735__auto___35631 = cljs.core.seq(seq__35009_35591);
if(temp__5735__auto___35631){
var seq__35009_35632__$1 = temp__5735__auto___35631;
if(cljs.core.chunked_seq_QMARK_(seq__35009_35632__$1)){
var c__4609__auto___35633 = cljs.core.chunk_first(seq__35009_35632__$1);
var G__35634 = cljs.core.chunk_rest(seq__35009_35632__$1);
var G__35635 = c__4609__auto___35633;
var G__35636 = cljs.core.count(c__4609__auto___35633);
var G__35637 = (0);
seq__35009_35591 = G__35634;
chunk__35016_35592 = G__35635;
count__35017_35593 = G__35636;
i__35018_35594 = G__35637;
continue;
} else {
var vec__35081_35638 = cljs.core.first(seq__35009_35632__$1);
var orig_type_35639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35638,(0),null);
var f_35640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35638,(1),null);
var seq__35010_35641 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35639,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35639,cljs.core.identity])));
var chunk__35012_35642 = null;
var count__35013_35643 = (0);
var i__35014_35644 = (0);
while(true){
if((i__35014_35644 < count__35013_35643)){
var vec__35090_35645 = chunk__35012_35642.cljs$core$IIndexed$_nth$arity$2(null,i__35014_35644);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35646,f_35640], null);
var canonical_f_35649 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35648);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35648], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35649);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35649);
}


var G__35650 = seq__35010_35641;
var G__35651 = chunk__35012_35642;
var G__35652 = count__35013_35643;
var G__35653 = (i__35014_35644 + (1));
seq__35010_35641 = G__35650;
chunk__35012_35642 = G__35651;
count__35013_35643 = G__35652;
i__35014_35644 = G__35653;
continue;
} else {
var temp__5735__auto___35654__$1 = cljs.core.seq(seq__35010_35641);
if(temp__5735__auto___35654__$1){
var seq__35010_35655__$1 = temp__5735__auto___35654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35655__$1)){
var c__4609__auto___35656 = cljs.core.chunk_first(seq__35010_35655__$1);
var G__35657 = cljs.core.chunk_rest(seq__35010_35655__$1);
var G__35658 = c__4609__auto___35656;
var G__35659 = cljs.core.count(c__4609__auto___35656);
var G__35660 = (0);
seq__35010_35641 = G__35657;
chunk__35012_35642 = G__35658;
count__35013_35643 = G__35659;
i__35014_35644 = G__35660;
continue;
} else {
var vec__35094_35661 = cljs.core.first(seq__35010_35655__$1);
var actual_type_35662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094_35661,(0),null);
var __35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094_35661,(1),null);
var keys_35664 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35662,f_35640], null);
var canonical_f_35665 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35664);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35664], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35662),canonical_f_35665);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35662),canonical_f_35665);
}


var G__35666 = cljs.core.next(seq__35010_35655__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35010_35641 = G__35666;
chunk__35012_35642 = G__35667;
count__35013_35643 = G__35668;
i__35014_35644 = G__35669;
continue;
}
} else {
}
}
break;
}

var G__35670 = cljs.core.next(seq__35009_35632__$1);
var G__35671 = null;
var G__35672 = (0);
var G__35673 = (0);
seq__35009_35591 = G__35670;
chunk__35016_35592 = G__35671;
count__35017_35593 = G__35672;
i__35018_35594 = G__35673;
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
var len__4789__auto___35674 = arguments.length;
var i__4790__auto___35675 = (0);
while(true){
if((i__4790__auto___35675 < len__4789__auto___35674)){
args__4795__auto__.push((arguments[i__4790__auto___35675]));

var G__35676 = (i__4790__auto___35675 + (1));
i__4790__auto___35675 = G__35676;
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

var vec__35103_35677 = dommy.core.elem_and_selector(elem_sel);
var elem_35678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103_35677,(0),null);
var selector_35679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103_35677,(1),null);
var seq__35106_35680 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35107_35681 = null;
var count__35108_35682 = (0);
var i__35109_35683 = (0);
while(true){
if((i__35109_35683 < count__35108_35682)){
var vec__35116_35684 = chunk__35107_35681.cljs$core$IIndexed$_nth$arity$2(null,i__35109_35683);
var type_35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35684,(0),null);
var f_35686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35684,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35685,((function (seq__35106_35680,chunk__35107_35681,count__35108_35682,i__35109_35683,vec__35116_35684,type_35685,f_35686,vec__35103_35677,elem_35678,selector_35679){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35685,dommy$core$this_fn], 0));

return (f_35686.cljs$core$IFn$_invoke$arity$1 ? f_35686.cljs$core$IFn$_invoke$arity$1(e) : f_35686.call(null,e));
});})(seq__35106_35680,chunk__35107_35681,count__35108_35682,i__35109_35683,vec__35116_35684,type_35685,f_35686,vec__35103_35677,elem_35678,selector_35679))
], 0));


var G__35687 = seq__35106_35680;
var G__35688 = chunk__35107_35681;
var G__35689 = count__35108_35682;
var G__35690 = (i__35109_35683 + (1));
seq__35106_35680 = G__35687;
chunk__35107_35681 = G__35688;
count__35108_35682 = G__35689;
i__35109_35683 = G__35690;
continue;
} else {
var temp__5735__auto___35691 = cljs.core.seq(seq__35106_35680);
if(temp__5735__auto___35691){
var seq__35106_35692__$1 = temp__5735__auto___35691;
if(cljs.core.chunked_seq_QMARK_(seq__35106_35692__$1)){
var c__4609__auto___35693 = cljs.core.chunk_first(seq__35106_35692__$1);
var G__35694 = cljs.core.chunk_rest(seq__35106_35692__$1);
var G__35695 = c__4609__auto___35693;
var G__35696 = cljs.core.count(c__4609__auto___35693);
var G__35697 = (0);
seq__35106_35680 = G__35694;
chunk__35107_35681 = G__35695;
count__35108_35682 = G__35696;
i__35109_35683 = G__35697;
continue;
} else {
var vec__35119_35698 = cljs.core.first(seq__35106_35692__$1);
var type_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35698,(0),null);
var f_35700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35698,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35699,((function (seq__35106_35680,chunk__35107_35681,count__35108_35682,i__35109_35683,vec__35119_35698,type_35699,f_35700,seq__35106_35692__$1,temp__5735__auto___35691,vec__35103_35677,elem_35678,selector_35679){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35699,dommy$core$this_fn], 0));

return (f_35700.cljs$core$IFn$_invoke$arity$1 ? f_35700.cljs$core$IFn$_invoke$arity$1(e) : f_35700.call(null,e));
});})(seq__35106_35680,chunk__35107_35681,count__35108_35682,i__35109_35683,vec__35119_35698,type_35699,f_35700,seq__35106_35692__$1,temp__5735__auto___35691,vec__35103_35677,elem_35678,selector_35679))
], 0));


var G__35701 = cljs.core.next(seq__35106_35692__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35106_35680 = G__35701;
chunk__35107_35681 = G__35702;
count__35108_35682 = G__35703;
i__35109_35683 = G__35704;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35099){
var G__35100 = cljs.core.first(seq35099);
var seq35099__$1 = cljs.core.next(seq35099);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35100,seq35099__$1);
}));


//# sourceMappingURL=dommy.core.js.map
