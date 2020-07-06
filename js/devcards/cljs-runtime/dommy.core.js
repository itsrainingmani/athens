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
var len__4789__auto___35163 = arguments.length;
var i__4790__auto___35164 = (0);
while(true){
if((i__4790__auto___35164 < len__4789__auto___35163)){
args__4795__auto__.push((arguments[i__4790__auto___35164]));

var G__35165 = (i__4790__auto___35164 + (1));
i__4790__auto___35164 = G__35165;
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
var seq__34724_35166 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34725_35167 = null;
var count__34726_35168 = (0);
var i__34727_35169 = (0);
while(true){
if((i__34727_35169 < count__34726_35168)){
var vec__34735_35170 = chunk__34725_35167.cljs$core$IIndexed$_nth$arity$2(null,i__34727_35169);
var k_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735_35170,(0),null);
var v_35172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735_35170,(1),null);
style.setProperty(dommy.utils.as_str(k_35171),v_35172);


var G__35173 = seq__34724_35166;
var G__35174 = chunk__34725_35167;
var G__35175 = count__34726_35168;
var G__35176 = (i__34727_35169 + (1));
seq__34724_35166 = G__35173;
chunk__34725_35167 = G__35174;
count__34726_35168 = G__35175;
i__34727_35169 = G__35176;
continue;
} else {
var temp__5735__auto___35177 = cljs.core.seq(seq__34724_35166);
if(temp__5735__auto___35177){
var seq__34724_35178__$1 = temp__5735__auto___35177;
if(cljs.core.chunked_seq_QMARK_(seq__34724_35178__$1)){
var c__4609__auto___35179 = cljs.core.chunk_first(seq__34724_35178__$1);
var G__35180 = cljs.core.chunk_rest(seq__34724_35178__$1);
var G__35181 = c__4609__auto___35179;
var G__35182 = cljs.core.count(c__4609__auto___35179);
var G__35183 = (0);
seq__34724_35166 = G__35180;
chunk__34725_35167 = G__35181;
count__34726_35168 = G__35182;
i__34727_35169 = G__35183;
continue;
} else {
var vec__34739_35184 = cljs.core.first(seq__34724_35178__$1);
var k_35185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35184,(0),null);
var v_35186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35184,(1),null);
style.setProperty(dommy.utils.as_str(k_35185),v_35186);


var G__35187 = cljs.core.next(seq__34724_35178__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__34724_35166 = G__35187;
chunk__34725_35167 = G__35188;
count__34726_35168 = G__35189;
i__34727_35169 = G__35190;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34722){
var G__34723 = cljs.core.first(seq34722);
var seq34722__$1 = cljs.core.next(seq34722);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34723,seq34722__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35191 = arguments.length;
var i__4790__auto___35192 = (0);
while(true){
if((i__4790__auto___35192 < len__4789__auto___35191)){
args__4795__auto__.push((arguments[i__4790__auto___35192]));

var G__35193 = (i__4790__auto___35192 + (1));
i__4790__auto___35192 = G__35193;
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
var seq__34744_35194 = cljs.core.seq(keywords);
var chunk__34745_35195 = null;
var count__34746_35196 = (0);
var i__34747_35197 = (0);
while(true){
if((i__34747_35197 < count__34746_35196)){
var kw_35198 = chunk__34745_35195.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35197);
style.removeProperty(dommy.utils.as_str(kw_35198));


var G__35199 = seq__34744_35194;
var G__35200 = chunk__34745_35195;
var G__35201 = count__34746_35196;
var G__35202 = (i__34747_35197 + (1));
seq__34744_35194 = G__35199;
chunk__34745_35195 = G__35200;
count__34746_35196 = G__35201;
i__34747_35197 = G__35202;
continue;
} else {
var temp__5735__auto___35203 = cljs.core.seq(seq__34744_35194);
if(temp__5735__auto___35203){
var seq__34744_35204__$1 = temp__5735__auto___35203;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35204__$1)){
var c__4609__auto___35205 = cljs.core.chunk_first(seq__34744_35204__$1);
var G__35206 = cljs.core.chunk_rest(seq__34744_35204__$1);
var G__35207 = c__4609__auto___35205;
var G__35208 = cljs.core.count(c__4609__auto___35205);
var G__35209 = (0);
seq__34744_35194 = G__35206;
chunk__34745_35195 = G__35207;
count__34746_35196 = G__35208;
i__34747_35197 = G__35209;
continue;
} else {
var kw_35210 = cljs.core.first(seq__34744_35204__$1);
style.removeProperty(dommy.utils.as_str(kw_35210));


var G__35211 = cljs.core.next(seq__34744_35204__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__34744_35194 = G__35211;
chunk__34745_35195 = G__35212;
count__34746_35196 = G__35213;
i__34747_35197 = G__35214;
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
var len__4789__auto___35215 = arguments.length;
var i__4790__auto___35216 = (0);
while(true){
if((i__4790__auto___35216 < len__4789__auto___35215)){
args__4795__auto__.push((arguments[i__4790__auto___35216]));

var G__35217 = (i__4790__auto___35216 + (1));
i__4790__auto___35216 = G__35217;
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

var seq__34750_35218 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34751_35219 = null;
var count__34752_35220 = (0);
var i__34753_35221 = (0);
while(true){
if((i__34753_35221 < count__34752_35220)){
var vec__34760_35222 = chunk__34751_35219.cljs$core$IIndexed$_nth$arity$2(null,i__34753_35221);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35225 = seq__34750_35218;
var G__35226 = chunk__34751_35219;
var G__35227 = count__34752_35220;
var G__35228 = (i__34753_35221 + (1));
seq__34750_35218 = G__35225;
chunk__34751_35219 = G__35226;
count__34752_35220 = G__35227;
i__34753_35221 = G__35228;
continue;
} else {
var temp__5735__auto___35229 = cljs.core.seq(seq__34750_35218);
if(temp__5735__auto___35229){
var seq__34750_35230__$1 = temp__5735__auto___35229;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35230__$1)){
var c__4609__auto___35231 = cljs.core.chunk_first(seq__34750_35230__$1);
var G__35232 = cljs.core.chunk_rest(seq__34750_35230__$1);
var G__35233 = c__4609__auto___35231;
var G__35234 = cljs.core.count(c__4609__auto___35231);
var G__35235 = (0);
seq__34750_35218 = G__35232;
chunk__34751_35219 = G__35233;
count__34752_35220 = G__35234;
i__34753_35221 = G__35235;
continue;
} else {
var vec__34763_35236 = cljs.core.first(seq__34750_35230__$1);
var k_35237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35236,(0),null);
var v_35238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35236,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35237,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35238),"px"].join('')], 0));


var G__35239 = cljs.core.next(seq__34750_35230__$1);
var G__35240 = null;
var G__35241 = (0);
var G__35242 = (0);
seq__34750_35218 = G__35239;
chunk__34751_35219 = G__35240;
count__34752_35220 = G__35241;
i__34753_35221 = G__35242;
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
var len__4789__auto___35244 = arguments.length;
var i__4790__auto___35245 = (0);
while(true){
if((i__4790__auto___35245 < len__4789__auto___35244)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35245]));

var G__35246 = (i__4790__auto___35245 + (1));
i__4790__auto___35245 = G__35246;
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

var seq__34775_35247 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35248 = null;
var count__34777_35249 = (0);
var i__34778_35250 = (0);
while(true){
if((i__34778_35250 < count__34777_35249)){
var vec__34785_35251 = chunk__34776_35248.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35250);
var k_35252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35251,(0),null);
var v_35253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35251,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35252__$1,v_35253__$1);


var G__35254 = seq__34775_35247;
var G__35255 = chunk__34776_35248;
var G__35256 = count__34777_35249;
var G__35257 = (i__34778_35250 + (1));
seq__34775_35247 = G__35254;
chunk__34776_35248 = G__35255;
count__34777_35249 = G__35256;
i__34778_35250 = G__35257;
continue;
} else {
var temp__5735__auto___35258 = cljs.core.seq(seq__34775_35247);
if(temp__5735__auto___35258){
var seq__34775_35259__$1 = temp__5735__auto___35258;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35259__$1)){
var c__4609__auto___35260 = cljs.core.chunk_first(seq__34775_35259__$1);
var G__35261 = cljs.core.chunk_rest(seq__34775_35259__$1);
var G__35262 = c__4609__auto___35260;
var G__35263 = cljs.core.count(c__4609__auto___35260);
var G__35264 = (0);
seq__34775_35247 = G__35261;
chunk__34776_35248 = G__35262;
count__34777_35249 = G__35263;
i__34778_35250 = G__35264;
continue;
} else {
var vec__34788_35265 = cljs.core.first(seq__34775_35259__$1);
var k_35266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(0),null);
var v_35267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35266__$1,v_35267__$1);


var G__35270 = cljs.core.next(seq__34775_35259__$1);
var G__35271 = null;
var G__35272 = (0);
var G__35273 = (0);
seq__34775_35247 = G__35270;
chunk__34776_35248 = G__35271;
count__34777_35249 = G__35272;
i__34778_35250 = G__35273;
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
var len__4789__auto___35275 = arguments.length;
var i__4790__auto___35276 = (0);
while(true){
if((i__4790__auto___35276 < len__4789__auto___35275)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35276]));

var G__35277 = (i__4790__auto___35276 + (1));
i__4790__auto___35276 = G__35277;
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
var k_35278__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35278__$1) : fexpr__34796.call(null,k_35278__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35278__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35279 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35280 = null;
var count__34799_35281 = (0);
var i__34800_35282 = (0);
while(true){
if((i__34800_35282 < count__34799_35281)){
var k_35283__$1 = chunk__34798_35280.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35282);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35283__$1);


var G__35284 = seq__34797_35279;
var G__35285 = chunk__34798_35280;
var G__35286 = count__34799_35281;
var G__35287 = (i__34800_35282 + (1));
seq__34797_35279 = G__35284;
chunk__34798_35280 = G__35285;
count__34799_35281 = G__35286;
i__34800_35282 = G__35287;
continue;
} else {
var temp__5735__auto___35288 = cljs.core.seq(seq__34797_35279);
if(temp__5735__auto___35288){
var seq__34797_35289__$1 = temp__5735__auto___35288;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35289__$1)){
var c__4609__auto___35290 = cljs.core.chunk_first(seq__34797_35289__$1);
var G__35291 = cljs.core.chunk_rest(seq__34797_35289__$1);
var G__35292 = c__4609__auto___35290;
var G__35293 = cljs.core.count(c__4609__auto___35290);
var G__35294 = (0);
seq__34797_35279 = G__35291;
chunk__34798_35280 = G__35292;
count__34799_35281 = G__35293;
i__34800_35282 = G__35294;
continue;
} else {
var k_35295__$1 = cljs.core.first(seq__34797_35289__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35295__$1);


var G__35297 = cljs.core.next(seq__34797_35289__$1);
var G__35298 = null;
var G__35299 = (0);
var G__35300 = (0);
seq__34797_35279 = G__35297;
chunk__34798_35280 = G__35298;
count__34799_35281 = G__35299;
i__34800_35282 = G__35300;
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
var len__4789__auto___35305 = arguments.length;
var i__4790__auto___35307 = (0);
while(true){
if((i__4790__auto___35307 < len__4789__auto___35305)){
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
var seq__34808_35311 = cljs.core.seq(classes__$1);
var chunk__34809_35312 = null;
var count__34810_35313 = (0);
var i__34811_35314 = (0);
while(true){
if((i__34811_35314 < count__34810_35313)){
var c_35315 = chunk__34809_35312.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35314);
class_list_35310.add(c_35315);


var G__35316 = seq__34808_35311;
var G__35317 = chunk__34809_35312;
var G__35318 = count__34810_35313;
var G__35319 = (i__34811_35314 + (1));
seq__34808_35311 = G__35316;
chunk__34809_35312 = G__35317;
count__34810_35313 = G__35318;
i__34811_35314 = G__35319;
continue;
} else {
var temp__5735__auto___35320 = cljs.core.seq(seq__34808_35311);
if(temp__5735__auto___35320){
var seq__34808_35321__$1 = temp__5735__auto___35320;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35321__$1)){
var c__4609__auto___35322 = cljs.core.chunk_first(seq__34808_35321__$1);
var G__35323 = cljs.core.chunk_rest(seq__34808_35321__$1);
var G__35324 = c__4609__auto___35322;
var G__35325 = cljs.core.count(c__4609__auto___35322);
var G__35326 = (0);
seq__34808_35311 = G__35323;
chunk__34809_35312 = G__35324;
count__34810_35313 = G__35325;
i__34811_35314 = G__35326;
continue;
} else {
var c_35327 = cljs.core.first(seq__34808_35321__$1);
class_list_35310.add(c_35327);


var G__35328 = cljs.core.next(seq__34808_35321__$1);
var G__35329 = null;
var G__35330 = (0);
var G__35331 = (0);
seq__34808_35311 = G__35328;
chunk__34809_35312 = G__35329;
count__34810_35313 = G__35330;
i__34811_35314 = G__35331;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35332 = cljs.core.seq(classes__$1);
var chunk__34813_35333 = null;
var count__34814_35334 = (0);
var i__34815_35335 = (0);
while(true){
if((i__34815_35335 < count__34814_35334)){
var c_35336 = chunk__34813_35333.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35335);
var class_name_35337 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35337,c_35336))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35337 === ""))?c_35336:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35337)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35336)].join('')));
}


var G__35338 = seq__34812_35332;
var G__35339 = chunk__34813_35333;
var G__35340 = count__34814_35334;
var G__35341 = (i__34815_35335 + (1));
seq__34812_35332 = G__35338;
chunk__34813_35333 = G__35339;
count__34814_35334 = G__35340;
i__34815_35335 = G__35341;
continue;
} else {
var temp__5735__auto___35342 = cljs.core.seq(seq__34812_35332);
if(temp__5735__auto___35342){
var seq__34812_35343__$1 = temp__5735__auto___35342;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35343__$1)){
var c__4609__auto___35344 = cljs.core.chunk_first(seq__34812_35343__$1);
var G__35345 = cljs.core.chunk_rest(seq__34812_35343__$1);
var G__35346 = c__4609__auto___35344;
var G__35347 = cljs.core.count(c__4609__auto___35344);
var G__35348 = (0);
seq__34812_35332 = G__35345;
chunk__34813_35333 = G__35346;
count__34814_35334 = G__35347;
i__34815_35335 = G__35348;
continue;
} else {
var c_35349 = cljs.core.first(seq__34812_35343__$1);
var class_name_35350 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35350,c_35349))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35350 === ""))?c_35349:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35350)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35349)].join('')));
}


var G__35351 = cljs.core.next(seq__34812_35343__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__34812_35332 = G__35351;
chunk__34813_35333 = G__35352;
count__34814_35334 = G__35353;
i__34815_35335 = G__35354;
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
var seq__34816_35355 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35356 = null;
var count__34818_35357 = (0);
var i__34819_35358 = (0);
while(true){
if((i__34819_35358 < count__34818_35357)){
var c_35359 = chunk__34817_35356.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35358);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35359);


var G__35360 = seq__34816_35355;
var G__35361 = chunk__34817_35356;
var G__35362 = count__34818_35357;
var G__35363 = (i__34819_35358 + (1));
seq__34816_35355 = G__35360;
chunk__34817_35356 = G__35361;
count__34818_35357 = G__35362;
i__34819_35358 = G__35363;
continue;
} else {
var temp__5735__auto___35364 = cljs.core.seq(seq__34816_35355);
if(temp__5735__auto___35364){
var seq__34816_35365__$1 = temp__5735__auto___35364;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35365__$1)){
var c__4609__auto___35366 = cljs.core.chunk_first(seq__34816_35365__$1);
var G__35367 = cljs.core.chunk_rest(seq__34816_35365__$1);
var G__35368 = c__4609__auto___35366;
var G__35369 = cljs.core.count(c__4609__auto___35366);
var G__35370 = (0);
seq__34816_35355 = G__35367;
chunk__34817_35356 = G__35368;
count__34818_35357 = G__35369;
i__34819_35358 = G__35370;
continue;
} else {
var c_35371 = cljs.core.first(seq__34816_35365__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35371);


var G__35372 = cljs.core.next(seq__34816_35365__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34816_35355 = G__35372;
chunk__34817_35356 = G__35373;
count__34818_35357 = G__35374;
i__34819_35358 = G__35375;
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
var len__4789__auto___35377 = arguments.length;
var i__4790__auto___35378 = (0);
while(true){
if((i__4790__auto___35378 < len__4789__auto___35377)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35378]));

var G__35379 = (i__4790__auto___35378 + (1));
i__4790__auto___35378 = G__35379;
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
var temp__5733__auto___35380 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35380)){
var class_list_35381 = temp__5733__auto___35380;
class_list_35381.remove(c__$1);
} else {
var class_name_35382 = dommy.core.class$(elem);
var new_class_name_35383 = dommy.utils.remove_class_str(class_name_35382,c__$1);
if((class_name_35382 === new_class_name_35383)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35383);
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


var G__35384 = seq__34825;
var G__35385 = chunk__34826;
var G__35386 = count__34827;
var G__35387 = (i__34828 + (1));
seq__34825 = G__35384;
chunk__34826 = G__35385;
count__34827 = G__35386;
i__34828 = G__35387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35388 = cljs.core.chunk_rest(seq__34825__$1);
var G__35389 = c__4609__auto__;
var G__35390 = cljs.core.count(c__4609__auto__);
var G__35391 = (0);
seq__34825 = G__35388;
chunk__34826 = G__35389;
count__34827 = G__35390;
i__34828 = G__35391;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35392 = cljs.core.next(seq__34825__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34825 = G__35392;
chunk__34826 = G__35393;
count__34827 = G__35394;
i__34828 = G__35395;
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
var temp__5733__auto___35397 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35397)){
var class_list_35398 = temp__5733__auto___35397;
class_list_35398.toggle(c__$1);
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
var G__34835 = arguments.length;
switch (G__34835) {
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
var G__34842 = arguments.length;
switch (G__34842) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35403 = arguments.length;
var i__4790__auto___35404 = (0);
while(true){
if((i__4790__auto___35404 < len__4789__auto___35403)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35404]));

var G__35405 = (i__4790__auto___35404 + (1));
i__4790__auto___35404 = G__35405;
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
var G__34843 = parent;
G__34843.appendChild(child);

return G__34843;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34844_35407 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34845_35408 = null;
var count__34846_35409 = (0);
var i__34847_35410 = (0);
while(true){
if((i__34847_35410 < count__34846_35409)){
var c_35411 = chunk__34845_35408.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35410);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35411);


var G__35412 = seq__34844_35407;
var G__35413 = chunk__34845_35408;
var G__35414 = count__34846_35409;
var G__35415 = (i__34847_35410 + (1));
seq__34844_35407 = G__35412;
chunk__34845_35408 = G__35413;
count__34846_35409 = G__35414;
i__34847_35410 = G__35415;
continue;
} else {
var temp__5735__auto___35416 = cljs.core.seq(seq__34844_35407);
if(temp__5735__auto___35416){
var seq__34844_35417__$1 = temp__5735__auto___35416;
if(cljs.core.chunked_seq_QMARK_(seq__34844_35417__$1)){
var c__4609__auto___35418 = cljs.core.chunk_first(seq__34844_35417__$1);
var G__35419 = cljs.core.chunk_rest(seq__34844_35417__$1);
var G__35420 = c__4609__auto___35418;
var G__35421 = cljs.core.count(c__4609__auto___35418);
var G__35422 = (0);
seq__34844_35407 = G__35419;
chunk__34845_35408 = G__35420;
count__34846_35409 = G__35421;
i__34847_35410 = G__35422;
continue;
} else {
var c_35424 = cljs.core.first(seq__34844_35417__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35424);


var G__35425 = cljs.core.next(seq__34844_35417__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__34844_35407 = G__35425;
chunk__34845_35408 = G__35426;
count__34846_35409 = G__35427;
i__34847_35410 = G__35428;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34839){
var G__34840 = cljs.core.first(seq34839);
var seq34839__$1 = cljs.core.next(seq34839);
var G__34841 = cljs.core.first(seq34839__$1);
var seq34839__$2 = cljs.core.next(seq34839__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34840,G__34841,seq34839__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
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
var G__34853 = parent;
G__34853.insertBefore(child,parent.firstChild);

return G__34853;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34854_35436 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34855_35437 = null;
var count__34856_35438 = (0);
var i__34857_35439 = (0);
while(true){
if((i__34857_35439 < count__34856_35438)){
var c_35445 = chunk__34855_35437.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35439);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35445);


var G__35446 = seq__34854_35436;
var G__35447 = chunk__34855_35437;
var G__35448 = count__34856_35438;
var G__35449 = (i__34857_35439 + (1));
seq__34854_35436 = G__35446;
chunk__34855_35437 = G__35447;
count__34856_35438 = G__35448;
i__34857_35439 = G__35449;
continue;
} else {
var temp__5735__auto___35450 = cljs.core.seq(seq__34854_35436);
if(temp__5735__auto___35450){
var seq__34854_35451__$1 = temp__5735__auto___35450;
if(cljs.core.chunked_seq_QMARK_(seq__34854_35451__$1)){
var c__4609__auto___35452 = cljs.core.chunk_first(seq__34854_35451__$1);
var G__35453 = cljs.core.chunk_rest(seq__34854_35451__$1);
var G__35454 = c__4609__auto___35452;
var G__35455 = cljs.core.count(c__4609__auto___35452);
var G__35456 = (0);
seq__34854_35436 = G__35453;
chunk__34855_35437 = G__35454;
count__34856_35438 = G__35455;
i__34857_35439 = G__35456;
continue;
} else {
var c_35457 = cljs.core.first(seq__34854_35451__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35457);


var G__35458 = cljs.core.next(seq__34854_35451__$1);
var G__35459 = null;
var G__35460 = (0);
var G__35461 = (0);
seq__34854_35436 = G__35458;
chunk__34855_35437 = G__35459;
count__34856_35438 = G__35460;
i__34857_35439 = G__35461;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first(seq34849);
var seq34849__$1 = cljs.core.next(seq34849);
var G__34851 = cljs.core.first(seq34849__$1);
var seq34849__$2 = cljs.core.next(seq34849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34850,G__34851,seq34849__$2);
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
var temp__5733__auto___35464 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35464)){
var next_35465 = temp__5733__auto___35464;
dommy.core.insert_before_BANG_(elem,next_35465);
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
var len__4789__auto___35481 = arguments.length;
var i__4790__auto___35482 = (0);
while(true){
if((i__4790__auto___35482 < len__4789__auto___35481)){
args__4795__auto__.push((arguments[i__4790__auto___35482]));

var G__35483 = (i__4790__auto___35482 + (1));
i__4790__auto___35482 = G__35483;
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
var len__4789__auto___35484 = arguments.length;
var i__4790__auto___35485 = (0);
while(true){
if((i__4790__auto___35485 < len__4789__auto___35484)){
args__4795__auto__.push((arguments[i__4790__auto___35485]));

var G__35486 = (i__4790__auto___35485 + (1));
i__4790__auto___35485 = G__35486;
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

var vec__34871_35487 = dommy.core.elem_and_selector(elem_sel);
var elem_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35487,(0),null);
var selector_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35487,(1),null);
var seq__34874_35490 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35491 = null;
var count__34882_35492 = (0);
var i__34883_35493 = (0);
while(true){
if((i__34883_35493 < count__34882_35492)){
var vec__34942_35494 = chunk__34881_35491.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35493);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35494,(1),null);
var seq__34884_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34886_35498 = null;
var count__34887_35499 = (0);
var i__34888_35500 = (0);
while(true){
if((i__34888_35500 < count__34887_35499)){
var vec__34955_35501 = chunk__34886_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35501,(1),null);
var canonical_f_35504 = (function (){var G__34959 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34958 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34958.cljs$core$IFn$_invoke$arity$1 ? fexpr__34958.cljs$core$IFn$_invoke$arity$1(G__34959) : fexpr__34958.call(null,G__34959));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35505 = seq__34884_35497;
var G__35506 = chunk__34886_35498;
var G__35507 = count__34887_35499;
var G__35508 = (i__34888_35500 + (1));
seq__34884_35497 = G__35505;
chunk__34886_35498 = G__35506;
count__34887_35499 = G__35507;
i__34888_35500 = G__35508;
continue;
} else {
var temp__5735__auto___35509 = cljs.core.seq(seq__34884_35497);
if(temp__5735__auto___35509){
var seq__34884_35510__$1 = temp__5735__auto___35509;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35510__$1)){
var c__4609__auto___35511 = cljs.core.chunk_first(seq__34884_35510__$1);
var G__35512 = cljs.core.chunk_rest(seq__34884_35510__$1);
var G__35513 = c__4609__auto___35511;
var G__35514 = cljs.core.count(c__4609__auto___35511);
var G__35515 = (0);
seq__34884_35497 = G__35512;
chunk__34886_35498 = G__35513;
count__34887_35499 = G__35514;
i__34888_35500 = G__35515;
continue;
} else {
var vec__34960_35516 = cljs.core.first(seq__34884_35510__$1);
var actual_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35516,(0),null);
var factory_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35516,(1),null);
var canonical_f_35519 = (function (){var G__34964 = (factory_35518.cljs$core$IFn$_invoke$arity$1 ? factory_35518.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35518.call(null,f_35496));
var fexpr__34963 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34963.cljs$core$IFn$_invoke$arity$1 ? fexpr__34963.cljs$core$IFn$_invoke$arity$1(G__34964) : fexpr__34963.call(null,G__34964));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35517,f_35496], null),canonical_f_35519], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35517),canonical_f_35519);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35517),canonical_f_35519);
}


var G__35520 = cljs.core.next(seq__34884_35510__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34884_35497 = G__35520;
chunk__34886_35498 = G__35521;
count__34887_35499 = G__35522;
i__34888_35500 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35524 = seq__34874_35490;
var G__35525 = chunk__34881_35491;
var G__35526 = count__34882_35492;
var G__35527 = (i__34883_35493 + (1));
seq__34874_35490 = G__35524;
chunk__34881_35491 = G__35525;
count__34882_35492 = G__35526;
i__34883_35493 = G__35527;
continue;
} else {
var temp__5735__auto___35528 = cljs.core.seq(seq__34874_35490);
if(temp__5735__auto___35528){
var seq__34874_35529__$1 = temp__5735__auto___35528;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35529__$1)){
var c__4609__auto___35530 = cljs.core.chunk_first(seq__34874_35529__$1);
var G__35531 = cljs.core.chunk_rest(seq__34874_35529__$1);
var G__35532 = c__4609__auto___35530;
var G__35533 = cljs.core.count(c__4609__auto___35530);
var G__35534 = (0);
seq__34874_35490 = G__35531;
chunk__34881_35491 = G__35532;
count__34882_35492 = G__35533;
i__34883_35493 = G__35534;
continue;
} else {
var vec__34965_35535 = cljs.core.first(seq__34874_35529__$1);
var orig_type_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35535,(0),null);
var f_35537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35535,(1),null);
var seq__34875_35538 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35536,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35536,cljs.core.identity])));
var chunk__34877_35539 = null;
var count__34878_35540 = (0);
var i__34879_35541 = (0);
while(true){
if((i__34879_35541 < count__34878_35540)){
var vec__34978_35542 = chunk__34877_35539.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35541);
var actual_type_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35542,(0),null);
var factory_35544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35542,(1),null);
var canonical_f_35545 = (function (){var G__34986 = (factory_35544.cljs$core$IFn$_invoke$arity$1 ? factory_35544.cljs$core$IFn$_invoke$arity$1(f_35537) : factory_35544.call(null,f_35537));
var fexpr__34985 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34985.cljs$core$IFn$_invoke$arity$1 ? fexpr__34985.cljs$core$IFn$_invoke$arity$1(G__34986) : fexpr__34985.call(null,G__34986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35543,f_35537], null),canonical_f_35545], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35543),canonical_f_35545);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35543),canonical_f_35545);
}


var G__35546 = seq__34875_35538;
var G__35547 = chunk__34877_35539;
var G__35548 = count__34878_35540;
var G__35549 = (i__34879_35541 + (1));
seq__34875_35538 = G__35546;
chunk__34877_35539 = G__35547;
count__34878_35540 = G__35548;
i__34879_35541 = G__35549;
continue;
} else {
var temp__5735__auto___35550__$1 = cljs.core.seq(seq__34875_35538);
if(temp__5735__auto___35550__$1){
var seq__34875_35551__$1 = temp__5735__auto___35550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35551__$1)){
var c__4609__auto___35552 = cljs.core.chunk_first(seq__34875_35551__$1);
var G__35553 = cljs.core.chunk_rest(seq__34875_35551__$1);
var G__35554 = c__4609__auto___35552;
var G__35555 = cljs.core.count(c__4609__auto___35552);
var G__35556 = (0);
seq__34875_35538 = G__35553;
chunk__34877_35539 = G__35554;
count__34878_35540 = G__35555;
i__34879_35541 = G__35556;
continue;
} else {
var vec__34987_35557 = cljs.core.first(seq__34875_35551__$1);
var actual_type_35558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35557,(0),null);
var factory_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35557,(1),null);
var canonical_f_35560 = (function (){var G__34991 = (factory_35559.cljs$core$IFn$_invoke$arity$1 ? factory_35559.cljs$core$IFn$_invoke$arity$1(f_35537) : factory_35559.call(null,f_35537));
var fexpr__34990 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34990.cljs$core$IFn$_invoke$arity$1 ? fexpr__34990.cljs$core$IFn$_invoke$arity$1(G__34991) : fexpr__34990.call(null,G__34991));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35558,f_35537], null),canonical_f_35560], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35558),canonical_f_35560);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35558),canonical_f_35560);
}


var G__35561 = cljs.core.next(seq__34875_35551__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__34875_35538 = G__35561;
chunk__34877_35539 = G__35562;
count__34878_35540 = G__35563;
i__34879_35541 = G__35564;
continue;
}
} else {
}
}
break;
}

var G__35565 = cljs.core.next(seq__34874_35529__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__34874_35490 = G__35565;
chunk__34881_35491 = G__35566;
count__34882_35492 = G__35567;
i__34883_35493 = G__35568;
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
var len__4789__auto___35569 = arguments.length;
var i__4790__auto___35570 = (0);
while(true){
if((i__4790__auto___35570 < len__4789__auto___35569)){
args__4795__auto__.push((arguments[i__4790__auto___35570]));

var G__35571 = (i__4790__auto___35570 + (1));
i__4790__auto___35570 = G__35571;
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

var vec__34997_35572 = dommy.core.elem_and_selector(elem_sel);
var elem_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35572,(0),null);
var selector_35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35572,(1),null);
var seq__35000_35575 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35007_35576 = null;
var count__35008_35577 = (0);
var i__35009_35578 = (0);
while(true){
if((i__35009_35578 < count__35008_35577)){
var vec__35051_35579 = chunk__35007_35576.cljs$core$IIndexed$_nth$arity$2(null,i__35009_35578);
var orig_type_35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35579,(0),null);
var f_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35579,(1),null);
var seq__35010_35582 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35580,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35580,cljs.core.identity])));
var chunk__35012_35583 = null;
var count__35013_35584 = (0);
var i__35014_35585 = (0);
while(true){
if((i__35014_35585 < count__35013_35584)){
var vec__35064_35586 = chunk__35012_35583.cljs$core$IIndexed$_nth$arity$2(null,i__35014_35585);
var actual_type_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064_35586,(0),null);
var __35588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064_35586,(1),null);
var keys_35589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35587,f_35581], null);
var canonical_f_35590 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35589);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35589], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35587),canonical_f_35590);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35587),canonical_f_35590);
}


var G__35591 = seq__35010_35582;
var G__35592 = chunk__35012_35583;
var G__35593 = count__35013_35584;
var G__35594 = (i__35014_35585 + (1));
seq__35010_35582 = G__35591;
chunk__35012_35583 = G__35592;
count__35013_35584 = G__35593;
i__35014_35585 = G__35594;
continue;
} else {
var temp__5735__auto___35595 = cljs.core.seq(seq__35010_35582);
if(temp__5735__auto___35595){
var seq__35010_35596__$1 = temp__5735__auto___35595;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35596__$1)){
var c__4609__auto___35597 = cljs.core.chunk_first(seq__35010_35596__$1);
var G__35598 = cljs.core.chunk_rest(seq__35010_35596__$1);
var G__35599 = c__4609__auto___35597;
var G__35600 = cljs.core.count(c__4609__auto___35597);
var G__35601 = (0);
seq__35010_35582 = G__35598;
chunk__35012_35583 = G__35599;
count__35013_35584 = G__35600;
i__35014_35585 = G__35601;
continue;
} else {
var vec__35067_35602 = cljs.core.first(seq__35010_35596__$1);
var actual_type_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35602,(0),null);
var __35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35602,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35603,f_35581], null);
var canonical_f_35606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35605);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35605], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35603),canonical_f_35606);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35603),canonical_f_35606);
}


var G__35609 = cljs.core.next(seq__35010_35596__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__35010_35582 = G__35609;
chunk__35012_35583 = G__35610;
count__35013_35584 = G__35611;
i__35014_35585 = G__35612;
continue;
}
} else {
}
}
break;
}

var G__35615 = seq__35000_35575;
var G__35616 = chunk__35007_35576;
var G__35617 = count__35008_35577;
var G__35618 = (i__35009_35578 + (1));
seq__35000_35575 = G__35615;
chunk__35007_35576 = G__35616;
count__35008_35577 = G__35617;
i__35009_35578 = G__35618;
continue;
} else {
var temp__5735__auto___35619 = cljs.core.seq(seq__35000_35575);
if(temp__5735__auto___35619){
var seq__35000_35621__$1 = temp__5735__auto___35619;
if(cljs.core.chunked_seq_QMARK_(seq__35000_35621__$1)){
var c__4609__auto___35622 = cljs.core.chunk_first(seq__35000_35621__$1);
var G__35623 = cljs.core.chunk_rest(seq__35000_35621__$1);
var G__35624 = c__4609__auto___35622;
var G__35625 = cljs.core.count(c__4609__auto___35622);
var G__35626 = (0);
seq__35000_35575 = G__35623;
chunk__35007_35576 = G__35624;
count__35008_35577 = G__35625;
i__35009_35578 = G__35626;
continue;
} else {
var vec__35070_35628 = cljs.core.first(seq__35000_35621__$1);
var orig_type_35629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35628,(0),null);
var f_35630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35628,(1),null);
var seq__35001_35631 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35629,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35629,cljs.core.identity])));
var chunk__35003_35632 = null;
var count__35004_35633 = (0);
var i__35005_35634 = (0);
while(true){
if((i__35005_35634 < count__35004_35633)){
var vec__35083_35635 = chunk__35003_35632.cljs$core$IIndexed$_nth$arity$2(null,i__35005_35634);
var actual_type_35636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35635,(0),null);
var __35637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35635,(1),null);
var keys_35638 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35636,f_35630], null);
var canonical_f_35639 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35638);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35638], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35636),canonical_f_35639);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35636),canonical_f_35639);
}


var G__35641 = seq__35001_35631;
var G__35642 = chunk__35003_35632;
var G__35643 = count__35004_35633;
var G__35644 = (i__35005_35634 + (1));
seq__35001_35631 = G__35641;
chunk__35003_35632 = G__35642;
count__35004_35633 = G__35643;
i__35005_35634 = G__35644;
continue;
} else {
var temp__5735__auto___35647__$1 = cljs.core.seq(seq__35001_35631);
if(temp__5735__auto___35647__$1){
var seq__35001_35649__$1 = temp__5735__auto___35647__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35001_35649__$1)){
var c__4609__auto___35650 = cljs.core.chunk_first(seq__35001_35649__$1);
var G__35651 = cljs.core.chunk_rest(seq__35001_35649__$1);
var G__35652 = c__4609__auto___35650;
var G__35653 = cljs.core.count(c__4609__auto___35650);
var G__35654 = (0);
seq__35001_35631 = G__35651;
chunk__35003_35632 = G__35652;
count__35004_35633 = G__35653;
i__35005_35634 = G__35654;
continue;
} else {
var vec__35087_35655 = cljs.core.first(seq__35001_35649__$1);
var actual_type_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35655,(0),null);
var __35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35655,(1),null);
var keys_35660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35656,f_35630], null);
var canonical_f_35661 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35660);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35660], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35656),canonical_f_35661);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35656),canonical_f_35661);
}


var G__35663 = cljs.core.next(seq__35001_35649__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35001_35631 = G__35663;
chunk__35003_35632 = G__35664;
count__35004_35633 = G__35665;
i__35005_35634 = G__35666;
continue;
}
} else {
}
}
break;
}

var G__35667 = cljs.core.next(seq__35000_35621__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35000_35575 = G__35667;
chunk__35007_35576 = G__35668;
count__35008_35577 = G__35669;
i__35009_35578 = G__35670;
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
var len__4789__auto___35677 = arguments.length;
var i__4790__auto___35678 = (0);
while(true){
if((i__4790__auto___35678 < len__4789__auto___35677)){
args__4795__auto__.push((arguments[i__4790__auto___35678]));

var G__35680 = (i__4790__auto___35678 + (1));
i__4790__auto___35678 = G__35680;
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

var vec__35114_35685 = dommy.core.elem_and_selector(elem_sel);
var elem_35686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35685,(0),null);
var selector_35687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35685,(1),null);
var seq__35117_35688 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35118_35689 = null;
var count__35119_35690 = (0);
var i__35120_35691 = (0);
while(true){
if((i__35120_35691 < count__35119_35690)){
var vec__35139_35692 = chunk__35118_35689.cljs$core$IIndexed$_nth$arity$2(null,i__35120_35691);
var type_35693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35139_35692,(0),null);
var f_35694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35139_35692,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35693,((function (seq__35117_35688,chunk__35118_35689,count__35119_35690,i__35120_35691,vec__35139_35692,type_35693,f_35694,vec__35114_35685,elem_35686,selector_35687){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35693,dommy$core$this_fn], 0));

return (f_35694.cljs$core$IFn$_invoke$arity$1 ? f_35694.cljs$core$IFn$_invoke$arity$1(e) : f_35694.call(null,e));
});})(seq__35117_35688,chunk__35118_35689,count__35119_35690,i__35120_35691,vec__35139_35692,type_35693,f_35694,vec__35114_35685,elem_35686,selector_35687))
], 0));


var G__35702 = seq__35117_35688;
var G__35703 = chunk__35118_35689;
var G__35704 = count__35119_35690;
var G__35705 = (i__35120_35691 + (1));
seq__35117_35688 = G__35702;
chunk__35118_35689 = G__35703;
count__35119_35690 = G__35704;
i__35120_35691 = G__35705;
continue;
} else {
var temp__5735__auto___35706 = cljs.core.seq(seq__35117_35688);
if(temp__5735__auto___35706){
var seq__35117_35709__$1 = temp__5735__auto___35706;
if(cljs.core.chunked_seq_QMARK_(seq__35117_35709__$1)){
var c__4609__auto___35710 = cljs.core.chunk_first(seq__35117_35709__$1);
var G__35712 = cljs.core.chunk_rest(seq__35117_35709__$1);
var G__35713 = c__4609__auto___35710;
var G__35714 = cljs.core.count(c__4609__auto___35710);
var G__35715 = (0);
seq__35117_35688 = G__35712;
chunk__35118_35689 = G__35713;
count__35119_35690 = G__35714;
i__35120_35691 = G__35715;
continue;
} else {
var vec__35152_35717 = cljs.core.first(seq__35117_35709__$1);
var type_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35717,(0),null);
var f_35719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35717,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,((function (seq__35117_35688,chunk__35118_35689,count__35119_35690,i__35120_35691,vec__35152_35717,type_35718,f_35719,seq__35117_35709__$1,temp__5735__auto___35706,vec__35114_35685,elem_35686,selector_35687){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,dommy$core$this_fn], 0));

return (f_35719.cljs$core$IFn$_invoke$arity$1 ? f_35719.cljs$core$IFn$_invoke$arity$1(e) : f_35719.call(null,e));
});})(seq__35117_35688,chunk__35118_35689,count__35119_35690,i__35120_35691,vec__35152_35717,type_35718,f_35719,seq__35117_35709__$1,temp__5735__auto___35706,vec__35114_35685,elem_35686,selector_35687))
], 0));


var G__35723 = cljs.core.next(seq__35117_35709__$1);
var G__35724 = null;
var G__35725 = (0);
var G__35726 = (0);
seq__35117_35688 = G__35723;
chunk__35118_35689 = G__35724;
count__35119_35690 = G__35725;
i__35120_35691 = G__35726;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35112){
var G__35113 = cljs.core.first(seq35112);
var seq35112__$1 = cljs.core.next(seq35112);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35113,seq35112__$1);
}));


//# sourceMappingURL=dommy.core.js.map
