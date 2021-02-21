goog.provide('dommy.core');
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
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var G__54509 = arguments.length;
switch (G__54509) {
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
var G__54519 = arguments.length;
switch (G__54519) {
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
var G__54522 = arguments.length;
switch (G__54522) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54520_SHARP_){
return (!((p1__54520_SHARP_ === base)));
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
var args__4742__auto__ = [];
var len__4736__auto___54890 = arguments.length;
var i__4737__auto___54891 = (0);
while(true){
if((i__4737__auto___54891 < len__4736__auto___54890)){
args__4742__auto__.push((arguments[i__4737__auto___54891]));

var G__54892 = (i__4737__auto___54891 + (1));
i__4737__auto___54891 = G__54892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__54529_54893 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54530_54894 = null;
var count__54531_54895 = (0);
var i__54532_54896 = (0);
while(true){
if((i__54532_54896 < count__54531_54895)){
var vec__54539_54897 = chunk__54530_54894.cljs$core$IIndexed$_nth$arity$2(null,i__54532_54896);
var k_54898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539_54897,(0),null);
var v_54899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539_54897,(1),null);
style.setProperty(dommy.utils.as_str(k_54898),v_54899);


var G__54902 = seq__54529_54893;
var G__54903 = chunk__54530_54894;
var G__54904 = count__54531_54895;
var G__54905 = (i__54532_54896 + (1));
seq__54529_54893 = G__54902;
chunk__54530_54894 = G__54903;
count__54531_54895 = G__54904;
i__54532_54896 = G__54905;
continue;
} else {
var temp__5735__auto___54908 = cljs.core.seq(seq__54529_54893);
if(temp__5735__auto___54908){
var seq__54529_54909__$1 = temp__5735__auto___54908;
if(cljs.core.chunked_seq_QMARK_(seq__54529_54909__$1)){
var c__4556__auto___54910 = cljs.core.chunk_first(seq__54529_54909__$1);
var G__54911 = cljs.core.chunk_rest(seq__54529_54909__$1);
var G__54912 = c__4556__auto___54910;
var G__54913 = cljs.core.count(c__4556__auto___54910);
var G__54914 = (0);
seq__54529_54893 = G__54911;
chunk__54530_54894 = G__54912;
count__54531_54895 = G__54913;
i__54532_54896 = G__54914;
continue;
} else {
var vec__54542_54915 = cljs.core.first(seq__54529_54909__$1);
var k_54916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54542_54915,(0),null);
var v_54917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54542_54915,(1),null);
style.setProperty(dommy.utils.as_str(k_54916),v_54917);


var G__54918 = cljs.core.next(seq__54529_54909__$1);
var G__54919 = null;
var G__54920 = (0);
var G__54921 = (0);
seq__54529_54893 = G__54918;
chunk__54530_54894 = G__54919;
count__54531_54895 = G__54920;
i__54532_54896 = G__54921;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54527){
var G__54528 = cljs.core.first(seq54527);
var seq54527__$1 = cljs.core.next(seq54527);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54528,seq54527__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54926 = arguments.length;
var i__4737__auto___54927 = (0);
while(true){
if((i__4737__auto___54927 < len__4736__auto___54926)){
args__4742__auto__.push((arguments[i__4737__auto___54927]));

var G__54928 = (i__4737__auto___54927 + (1));
i__4737__auto___54927 = G__54928;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__54547_54930 = cljs.core.seq(keywords);
var chunk__54548_54931 = null;
var count__54549_54932 = (0);
var i__54550_54933 = (0);
while(true){
if((i__54550_54933 < count__54549_54932)){
var kw_54934 = chunk__54548_54931.cljs$core$IIndexed$_nth$arity$2(null,i__54550_54933);
style.removeProperty(dommy.utils.as_str(kw_54934));


var G__54937 = seq__54547_54930;
var G__54938 = chunk__54548_54931;
var G__54939 = count__54549_54932;
var G__54940 = (i__54550_54933 + (1));
seq__54547_54930 = G__54937;
chunk__54548_54931 = G__54938;
count__54549_54932 = G__54939;
i__54550_54933 = G__54940;
continue;
} else {
var temp__5735__auto___54942 = cljs.core.seq(seq__54547_54930);
if(temp__5735__auto___54942){
var seq__54547_54943__$1 = temp__5735__auto___54942;
if(cljs.core.chunked_seq_QMARK_(seq__54547_54943__$1)){
var c__4556__auto___54944 = cljs.core.chunk_first(seq__54547_54943__$1);
var G__54945 = cljs.core.chunk_rest(seq__54547_54943__$1);
var G__54946 = c__4556__auto___54944;
var G__54947 = cljs.core.count(c__4556__auto___54944);
var G__54948 = (0);
seq__54547_54930 = G__54945;
chunk__54548_54931 = G__54946;
count__54549_54932 = G__54947;
i__54550_54933 = G__54948;
continue;
} else {
var kw_54949 = cljs.core.first(seq__54547_54943__$1);
style.removeProperty(dommy.utils.as_str(kw_54949));


var G__54950 = cljs.core.next(seq__54547_54943__$1);
var G__54951 = null;
var G__54952 = (0);
var G__54953 = (0);
seq__54547_54930 = G__54950;
chunk__54548_54931 = G__54951;
count__54549_54932 = G__54952;
i__54550_54933 = G__54953;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54545){
var G__54546 = cljs.core.first(seq54545);
var seq54545__$1 = cljs.core.next(seq54545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54546,seq54545__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54955 = arguments.length;
var i__4737__auto___54956 = (0);
while(true){
if((i__4737__auto___54956 < len__4736__auto___54955)){
args__4742__auto__.push((arguments[i__4737__auto___54956]));

var G__54957 = (i__4737__auto___54956 + (1));
i__4737__auto___54956 = G__54957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__54553_54958 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54554_54959 = null;
var count__54555_54960 = (0);
var i__54556_54961 = (0);
while(true){
if((i__54556_54961 < count__54555_54960)){
var vec__54563_54962 = chunk__54554_54959.cljs$core$IIndexed$_nth$arity$2(null,i__54556_54961);
var k_54963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_54962,(0),null);
var v_54964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_54962,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54963,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54964),"px"].join('')], 0));


var G__54968 = seq__54553_54958;
var G__54969 = chunk__54554_54959;
var G__54970 = count__54555_54960;
var G__54971 = (i__54556_54961 + (1));
seq__54553_54958 = G__54968;
chunk__54554_54959 = G__54969;
count__54555_54960 = G__54970;
i__54556_54961 = G__54971;
continue;
} else {
var temp__5735__auto___54972 = cljs.core.seq(seq__54553_54958);
if(temp__5735__auto___54972){
var seq__54553_54973__$1 = temp__5735__auto___54972;
if(cljs.core.chunked_seq_QMARK_(seq__54553_54973__$1)){
var c__4556__auto___54974 = cljs.core.chunk_first(seq__54553_54973__$1);
var G__54975 = cljs.core.chunk_rest(seq__54553_54973__$1);
var G__54976 = c__4556__auto___54974;
var G__54977 = cljs.core.count(c__4556__auto___54974);
var G__54978 = (0);
seq__54553_54958 = G__54975;
chunk__54554_54959 = G__54976;
count__54555_54960 = G__54977;
i__54556_54961 = G__54978;
continue;
} else {
var vec__54566_54979 = cljs.core.first(seq__54553_54973__$1);
var k_54980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566_54979,(0),null);
var v_54981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566_54979,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54980,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54981),"px"].join('')], 0));


var G__54982 = cljs.core.next(seq__54553_54973__$1);
var G__54983 = null;
var G__54984 = (0);
var G__54985 = (0);
seq__54553_54958 = G__54982;
chunk__54554_54959 = G__54983;
count__54555_54960 = G__54984;
i__54556_54961 = G__54985;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54551){
var G__54552 = cljs.core.first(seq54551);
var seq54551__$1 = cljs.core.next(seq54551);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54552,seq54551__$1);
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
var G__54574 = arguments.length;
switch (G__54574) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54987 = arguments.length;
var i__4737__auto___54988 = (0);
while(true){
if((i__4737__auto___54988 < len__4736__auto___54987)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54988]));

var G__54989 = (i__4737__auto___54988 + (1));
i__4737__auto___54988 = G__54989;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__54575 = elem;
(G__54575[k__$1] = v);

return G__54575;
} else {
var G__54576 = elem;
G__54576.setAttribute(k__$1,v);

return G__54576;
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

var seq__54577_54990 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54578_54991 = null;
var count__54579_54992 = (0);
var i__54580_54993 = (0);
while(true){
if((i__54580_54993 < count__54579_54992)){
var vec__54587_54994 = chunk__54578_54991.cljs$core$IIndexed$_nth$arity$2(null,i__54580_54993);
var k_54995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54587_54994,(0),null);
var v_54996__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54587_54994,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54995__$1,v_54996__$1);


var G__54997 = seq__54577_54990;
var G__54998 = chunk__54578_54991;
var G__54999 = count__54579_54992;
var G__55000 = (i__54580_54993 + (1));
seq__54577_54990 = G__54997;
chunk__54578_54991 = G__54998;
count__54579_54992 = G__54999;
i__54580_54993 = G__55000;
continue;
} else {
var temp__5735__auto___55001 = cljs.core.seq(seq__54577_54990);
if(temp__5735__auto___55001){
var seq__54577_55002__$1 = temp__5735__auto___55001;
if(cljs.core.chunked_seq_QMARK_(seq__54577_55002__$1)){
var c__4556__auto___55003 = cljs.core.chunk_first(seq__54577_55002__$1);
var G__55004 = cljs.core.chunk_rest(seq__54577_55002__$1);
var G__55005 = c__4556__auto___55003;
var G__55006 = cljs.core.count(c__4556__auto___55003);
var G__55007 = (0);
seq__54577_54990 = G__55004;
chunk__54578_54991 = G__55005;
count__54579_54992 = G__55006;
i__54580_54993 = G__55007;
continue;
} else {
var vec__54590_55008 = cljs.core.first(seq__54577_55002__$1);
var k_55009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590_55008,(0),null);
var v_55010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590_55008,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_55009__$1,v_55010__$1);


var G__55011 = cljs.core.next(seq__54577_55002__$1);
var G__55012 = null;
var G__55013 = (0);
var G__55014 = (0);
seq__54577_54990 = G__55011;
chunk__54578_54991 = G__55012;
count__54579_54992 = G__55013;
i__54580_54993 = G__55014;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54570){
var G__54571 = cljs.core.first(seq54570);
var seq54570__$1 = cljs.core.next(seq54570);
var G__54572 = cljs.core.first(seq54570__$1);
var seq54570__$2 = cljs.core.next(seq54570__$1);
var G__54573 = cljs.core.first(seq54570__$2);
var seq54570__$3 = cljs.core.next(seq54570__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54571,G__54572,G__54573,seq54570__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54597 = arguments.length;
switch (G__54597) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55024 = arguments.length;
var i__4737__auto___55025 = (0);
while(true){
if((i__4737__auto___55025 < len__4736__auto___55024)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55025]));

var G__55030 = (i__4737__auto___55025 + (1));
i__4737__auto___55025 = G__55030;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_55031__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54598.cljs$core$IFn$_invoke$arity$1 ? fexpr__54598.cljs$core$IFn$_invoke$arity$1(k_55031__$1) : fexpr__54598.call(null,k_55031__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55031__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54599_55032 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54600_55033 = null;
var count__54601_55034 = (0);
var i__54602_55035 = (0);
while(true){
if((i__54602_55035 < count__54601_55034)){
var k_55037__$1 = chunk__54600_55033.cljs$core$IIndexed$_nth$arity$2(null,i__54602_55035);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55037__$1);


var G__55038 = seq__54599_55032;
var G__55039 = chunk__54600_55033;
var G__55040 = count__54601_55034;
var G__55041 = (i__54602_55035 + (1));
seq__54599_55032 = G__55038;
chunk__54600_55033 = G__55039;
count__54601_55034 = G__55040;
i__54602_55035 = G__55041;
continue;
} else {
var temp__5735__auto___55043 = cljs.core.seq(seq__54599_55032);
if(temp__5735__auto___55043){
var seq__54599_55044__$1 = temp__5735__auto___55043;
if(cljs.core.chunked_seq_QMARK_(seq__54599_55044__$1)){
var c__4556__auto___55045 = cljs.core.chunk_first(seq__54599_55044__$1);
var G__55046 = cljs.core.chunk_rest(seq__54599_55044__$1);
var G__55047 = c__4556__auto___55045;
var G__55048 = cljs.core.count(c__4556__auto___55045);
var G__55049 = (0);
seq__54599_55032 = G__55046;
chunk__54600_55033 = G__55047;
count__54601_55034 = G__55048;
i__54602_55035 = G__55049;
continue;
} else {
var k_55050__$1 = cljs.core.first(seq__54599_55044__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55050__$1);


var G__55052 = cljs.core.next(seq__54599_55044__$1);
var G__55053 = null;
var G__55054 = (0);
var G__55055 = (0);
seq__54599_55032 = G__55052;
chunk__54600_55033 = G__55053;
count__54601_55034 = G__55054;
i__54602_55035 = G__55055;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54594){
var G__54595 = cljs.core.first(seq54594);
var seq54594__$1 = cljs.core.next(seq54594);
var G__54596 = cljs.core.first(seq54594__$1);
var seq54594__$2 = cljs.core.next(seq54594__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54595,G__54596,seq54594__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54604 = arguments.length;
switch (G__54604) {
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
var G__54609 = arguments.length;
switch (G__54609) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55060 = arguments.length;
var i__4737__auto___55061 = (0);
while(true){
if((i__4737__auto___55061 < len__4736__auto___55060)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55061]));

var G__55062 = (i__4737__auto___55061 + (1));
i__4737__auto___55061 = G__55062;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___55063 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55063)){
var class_list_55064 = temp__5733__auto___55063;
var seq__54610_55065 = cljs.core.seq(classes__$1);
var chunk__54611_55066 = null;
var count__54612_55067 = (0);
var i__54613_55068 = (0);
while(true){
if((i__54613_55068 < count__54612_55067)){
var c_55069 = chunk__54611_55066.cljs$core$IIndexed$_nth$arity$2(null,i__54613_55068);
class_list_55064.add(c_55069);


var G__55070 = seq__54610_55065;
var G__55071 = chunk__54611_55066;
var G__55072 = count__54612_55067;
var G__55073 = (i__54613_55068 + (1));
seq__54610_55065 = G__55070;
chunk__54611_55066 = G__55071;
count__54612_55067 = G__55072;
i__54613_55068 = G__55073;
continue;
} else {
var temp__5735__auto___55074 = cljs.core.seq(seq__54610_55065);
if(temp__5735__auto___55074){
var seq__54610_55075__$1 = temp__5735__auto___55074;
if(cljs.core.chunked_seq_QMARK_(seq__54610_55075__$1)){
var c__4556__auto___55076 = cljs.core.chunk_first(seq__54610_55075__$1);
var G__55077 = cljs.core.chunk_rest(seq__54610_55075__$1);
var G__55078 = c__4556__auto___55076;
var G__55079 = cljs.core.count(c__4556__auto___55076);
var G__55080 = (0);
seq__54610_55065 = G__55077;
chunk__54611_55066 = G__55078;
count__54612_55067 = G__55079;
i__54613_55068 = G__55080;
continue;
} else {
var c_55081 = cljs.core.first(seq__54610_55075__$1);
class_list_55064.add(c_55081);


var G__55082 = cljs.core.next(seq__54610_55075__$1);
var G__55083 = null;
var G__55084 = (0);
var G__55085 = (0);
seq__54610_55065 = G__55082;
chunk__54611_55066 = G__55083;
count__54612_55067 = G__55084;
i__54613_55068 = G__55085;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54614_55086 = cljs.core.seq(classes__$1);
var chunk__54615_55087 = null;
var count__54616_55088 = (0);
var i__54617_55089 = (0);
while(true){
if((i__54617_55089 < count__54616_55088)){
var c_55090 = chunk__54615_55087.cljs$core$IIndexed$_nth$arity$2(null,i__54617_55089);
var class_name_55091 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55091,c_55090))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55091 === ""))?c_55090:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55091)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55090)].join('')));
}


var G__55092 = seq__54614_55086;
var G__55093 = chunk__54615_55087;
var G__55094 = count__54616_55088;
var G__55095 = (i__54617_55089 + (1));
seq__54614_55086 = G__55092;
chunk__54615_55087 = G__55093;
count__54616_55088 = G__55094;
i__54617_55089 = G__55095;
continue;
} else {
var temp__5735__auto___55096 = cljs.core.seq(seq__54614_55086);
if(temp__5735__auto___55096){
var seq__54614_55097__$1 = temp__5735__auto___55096;
if(cljs.core.chunked_seq_QMARK_(seq__54614_55097__$1)){
var c__4556__auto___55098 = cljs.core.chunk_first(seq__54614_55097__$1);
var G__55099 = cljs.core.chunk_rest(seq__54614_55097__$1);
var G__55100 = c__4556__auto___55098;
var G__55101 = cljs.core.count(c__4556__auto___55098);
var G__55102 = (0);
seq__54614_55086 = G__55099;
chunk__54615_55087 = G__55100;
count__54616_55088 = G__55101;
i__54617_55089 = G__55102;
continue;
} else {
var c_55103 = cljs.core.first(seq__54614_55097__$1);
var class_name_55104 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55104,c_55103))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55104 === ""))?c_55103:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55104)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55103)].join('')));
}


var G__55105 = cljs.core.next(seq__54614_55097__$1);
var G__55106 = null;
var G__55107 = (0);
var G__55108 = (0);
seq__54614_55086 = G__55105;
chunk__54615_55087 = G__55106;
count__54616_55088 = G__55107;
i__54617_55089 = G__55108;
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
var seq__54618_55109 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54619_55110 = null;
var count__54620_55111 = (0);
var i__54621_55112 = (0);
while(true){
if((i__54621_55112 < count__54620_55111)){
var c_55113 = chunk__54619_55110.cljs$core$IIndexed$_nth$arity$2(null,i__54621_55112);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55113);


var G__55114 = seq__54618_55109;
var G__55115 = chunk__54619_55110;
var G__55116 = count__54620_55111;
var G__55117 = (i__54621_55112 + (1));
seq__54618_55109 = G__55114;
chunk__54619_55110 = G__55115;
count__54620_55111 = G__55116;
i__54621_55112 = G__55117;
continue;
} else {
var temp__5735__auto___55118 = cljs.core.seq(seq__54618_55109);
if(temp__5735__auto___55118){
var seq__54618_55119__$1 = temp__5735__auto___55118;
if(cljs.core.chunked_seq_QMARK_(seq__54618_55119__$1)){
var c__4556__auto___55120 = cljs.core.chunk_first(seq__54618_55119__$1);
var G__55121 = cljs.core.chunk_rest(seq__54618_55119__$1);
var G__55122 = c__4556__auto___55120;
var G__55123 = cljs.core.count(c__4556__auto___55120);
var G__55124 = (0);
seq__54618_55109 = G__55121;
chunk__54619_55110 = G__55122;
count__54620_55111 = G__55123;
i__54621_55112 = G__55124;
continue;
} else {
var c_55125 = cljs.core.first(seq__54618_55119__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55125);


var G__55126 = cljs.core.next(seq__54618_55119__$1);
var G__55127 = null;
var G__55128 = (0);
var G__55129 = (0);
seq__54618_55109 = G__55126;
chunk__54619_55110 = G__55127;
count__54620_55111 = G__55128;
i__54621_55112 = G__55129;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54606){
var G__54607 = cljs.core.first(seq54606);
var seq54606__$1 = cljs.core.next(seq54606);
var G__54608 = cljs.core.first(seq54606__$1);
var seq54606__$2 = cljs.core.next(seq54606__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54607,G__54608,seq54606__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54626 = arguments.length;
switch (G__54626) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55131 = arguments.length;
var i__4737__auto___55132 = (0);
while(true){
if((i__4737__auto___55132 < len__4736__auto___55131)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55132]));

var G__55133 = (i__4737__auto___55132 + (1));
i__4737__auto___55132 = G__55133;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___55134 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55134)){
var class_list_55135 = temp__5733__auto___55134;
class_list_55135.remove(c__$1);
} else {
var class_name_55136 = dommy.core.class$(elem);
var new_class_name_55137 = dommy.utils.remove_class_str(class_name_55136,c__$1);
if((class_name_55136 === new_class_name_55137)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55137);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54627 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54628 = null;
var count__54629 = (0);
var i__54630 = (0);
while(true){
if((i__54630 < count__54629)){
var c = chunk__54628.cljs$core$IIndexed$_nth$arity$2(null,i__54630);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55138 = seq__54627;
var G__55139 = chunk__54628;
var G__55140 = count__54629;
var G__55141 = (i__54630 + (1));
seq__54627 = G__55138;
chunk__54628 = G__55139;
count__54629 = G__55140;
i__54630 = G__55141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54627);
if(temp__5735__auto__){
var seq__54627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54627__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54627__$1);
var G__55142 = cljs.core.chunk_rest(seq__54627__$1);
var G__55143 = c__4556__auto__;
var G__55144 = cljs.core.count(c__4556__auto__);
var G__55145 = (0);
seq__54627 = G__55142;
chunk__54628 = G__55143;
count__54629 = G__55144;
i__54630 = G__55145;
continue;
} else {
var c = cljs.core.first(seq__54627__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55146 = cljs.core.next(seq__54627__$1);
var G__55147 = null;
var G__55148 = (0);
var G__55149 = (0);
seq__54627 = G__55146;
chunk__54628 = G__55147;
count__54629 = G__55148;
i__54630 = G__55149;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54623){
var G__54624 = cljs.core.first(seq54623);
var seq54623__$1 = cljs.core.next(seq54623);
var G__54625 = cljs.core.first(seq54623__$1);
var seq54623__$2 = cljs.core.next(seq54623__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54624,G__54625,seq54623__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54632 = arguments.length;
switch (G__54632) {
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
var temp__5733__auto___55151 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55151)){
var class_list_55152 = temp__5733__auto___55151;
class_list_55152.toggle(c__$1);
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
var G__54634 = arguments.length;
switch (G__54634) {
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
var G__54636 = arguments.length;
switch (G__54636) {
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
var G__54641 = arguments.length;
switch (G__54641) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55156 = arguments.length;
var i__4737__auto___55157 = (0);
while(true){
if((i__4737__auto___55157 < len__4736__auto___55156)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55157]));

var G__55158 = (i__4737__auto___55157 + (1));
i__4737__auto___55157 = G__55158;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54642 = parent;
G__54642.appendChild(child);

return G__54642;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54643_55159 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54644_55160 = null;
var count__54645_55161 = (0);
var i__54646_55162 = (0);
while(true){
if((i__54646_55162 < count__54645_55161)){
var c_55163 = chunk__54644_55160.cljs$core$IIndexed$_nth$arity$2(null,i__54646_55162);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55163);


var G__55164 = seq__54643_55159;
var G__55165 = chunk__54644_55160;
var G__55166 = count__54645_55161;
var G__55167 = (i__54646_55162 + (1));
seq__54643_55159 = G__55164;
chunk__54644_55160 = G__55165;
count__54645_55161 = G__55166;
i__54646_55162 = G__55167;
continue;
} else {
var temp__5735__auto___55168 = cljs.core.seq(seq__54643_55159);
if(temp__5735__auto___55168){
var seq__54643_55169__$1 = temp__5735__auto___55168;
if(cljs.core.chunked_seq_QMARK_(seq__54643_55169__$1)){
var c__4556__auto___55170 = cljs.core.chunk_first(seq__54643_55169__$1);
var G__55171 = cljs.core.chunk_rest(seq__54643_55169__$1);
var G__55172 = c__4556__auto___55170;
var G__55173 = cljs.core.count(c__4556__auto___55170);
var G__55174 = (0);
seq__54643_55159 = G__55171;
chunk__54644_55160 = G__55172;
count__54645_55161 = G__55173;
i__54646_55162 = G__55174;
continue;
} else {
var c_55175 = cljs.core.first(seq__54643_55169__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55175);


var G__55176 = cljs.core.next(seq__54643_55169__$1);
var G__55177 = null;
var G__55178 = (0);
var G__55179 = (0);
seq__54643_55159 = G__55176;
chunk__54644_55160 = G__55177;
count__54645_55161 = G__55178;
i__54646_55162 = G__55179;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54638){
var G__54639 = cljs.core.first(seq54638);
var seq54638__$1 = cljs.core.next(seq54638);
var G__54640 = cljs.core.first(seq54638__$1);
var seq54638__$2 = cljs.core.next(seq54638__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54639,G__54640,seq54638__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54651 = arguments.length;
switch (G__54651) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55181 = arguments.length;
var i__4737__auto___55182 = (0);
while(true){
if((i__4737__auto___55182 < len__4736__auto___55181)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55182]));

var G__55183 = (i__4737__auto___55182 + (1));
i__4737__auto___55182 = G__55183;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54652 = parent;
G__54652.insertBefore(child,parent.firstChild);

return G__54652;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54653_55184 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54654_55185 = null;
var count__54655_55186 = (0);
var i__54656_55187 = (0);
while(true){
if((i__54656_55187 < count__54655_55186)){
var c_55188 = chunk__54654_55185.cljs$core$IIndexed$_nth$arity$2(null,i__54656_55187);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55188);


var G__55189 = seq__54653_55184;
var G__55190 = chunk__54654_55185;
var G__55191 = count__54655_55186;
var G__55192 = (i__54656_55187 + (1));
seq__54653_55184 = G__55189;
chunk__54654_55185 = G__55190;
count__54655_55186 = G__55191;
i__54656_55187 = G__55192;
continue;
} else {
var temp__5735__auto___55193 = cljs.core.seq(seq__54653_55184);
if(temp__5735__auto___55193){
var seq__54653_55194__$1 = temp__5735__auto___55193;
if(cljs.core.chunked_seq_QMARK_(seq__54653_55194__$1)){
var c__4556__auto___55195 = cljs.core.chunk_first(seq__54653_55194__$1);
var G__55196 = cljs.core.chunk_rest(seq__54653_55194__$1);
var G__55197 = c__4556__auto___55195;
var G__55198 = cljs.core.count(c__4556__auto___55195);
var G__55199 = (0);
seq__54653_55184 = G__55196;
chunk__54654_55185 = G__55197;
count__54655_55186 = G__55198;
i__54656_55187 = G__55199;
continue;
} else {
var c_55200 = cljs.core.first(seq__54653_55194__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55200);


var G__55201 = cljs.core.next(seq__54653_55194__$1);
var G__55202 = null;
var G__55203 = (0);
var G__55204 = (0);
seq__54653_55184 = G__55201;
chunk__54654_55185 = G__55202;
count__54655_55186 = G__55203;
i__54656_55187 = G__55204;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54648){
var G__54649 = cljs.core.first(seq54648);
var seq54648__$1 = cljs.core.next(seq54648);
var G__54650 = cljs.core.first(seq54648__$1);
var seq54648__$2 = cljs.core.next(seq54648__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54649,G__54650,seq54648__$2);
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
var temp__5733__auto___55205 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55205)){
var next_55206 = temp__5733__auto___55205;
dommy.core.insert_before_BANG_(elem,next_55206);
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
var G__54658 = arguments.length;
switch (G__54658) {
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
var G__54659 = p;
G__54659.removeChild(elem);

return G__54659;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54660){
var vec__54661 = p__54660;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54661,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54661,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
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
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
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
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55208 = arguments.length;
var i__4737__auto___55209 = (0);
while(true){
if((i__4737__auto___55209 < len__4736__auto___55208)){
args__4742__auto__.push((arguments[i__4737__auto___55209]));

var G__55210 = (i__4737__auto___55209 + (1));
i__4737__auto___55209 = G__55210;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54664){
var G__54665 = cljs.core.first(seq54664);
var seq54664__$1 = cljs.core.next(seq54664);
var G__54666 = cljs.core.first(seq54664__$1);
var seq54664__$2 = cljs.core.next(seq54664__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54665,G__54666,seq54664__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
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
var args__4742__auto__ = [];
var len__4736__auto___55211 = arguments.length;
var i__4737__auto___55212 = (0);
while(true){
if((i__4737__auto___55212 < len__4736__auto___55211)){
args__4742__auto__.push((arguments[i__4737__auto___55212]));

var G__55213 = (i__4737__auto___55212 + (1));
i__4737__auto___55212 = G__55213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54669_55214 = dommy.core.elem_and_selector(elem_sel);
var elem_55215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54669_55214,(0),null);
var selector_55216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54669_55214,(1),null);
var seq__54672_55217 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54679_55218 = null;
var count__54680_55219 = (0);
var i__54681_55220 = (0);
while(true){
if((i__54681_55220 < count__54680_55219)){
var vec__54734_55221 = chunk__54679_55218.cljs$core$IIndexed$_nth$arity$2(null,i__54681_55220);
var orig_type_55222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54734_55221,(0),null);
var f_55223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54734_55221,(1),null);
var seq__54682_55224 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55222,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55222,cljs.core.identity])));
var chunk__54684_55225 = null;
var count__54685_55226 = (0);
var i__54686_55227 = (0);
while(true){
if((i__54686_55227 < count__54685_55226)){
var vec__54747_55228 = chunk__54684_55225.cljs$core$IIndexed$_nth$arity$2(null,i__54686_55227);
var actual_type_55229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54747_55228,(0),null);
var factory_55230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54747_55228,(1),null);
var canonical_f_55231 = (function (){var G__54751 = (factory_55230.cljs$core$IFn$_invoke$arity$1 ? factory_55230.cljs$core$IFn$_invoke$arity$1(f_55223) : factory_55230.call(null,f_55223));
var fexpr__54750 = (cljs.core.truth_(selector_55216)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55215,selector_55216):cljs.core.identity);
return (fexpr__54750.cljs$core$IFn$_invoke$arity$1 ? fexpr__54750.cljs$core$IFn$_invoke$arity$1(G__54751) : fexpr__54750.call(null,G__54751));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55215,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55216,actual_type_55229,f_55223], null),canonical_f_55231], 0));

if(cljs.core.truth_(elem_55215.addEventListener)){
elem_55215.addEventListener(cljs.core.name(actual_type_55229),canonical_f_55231);
} else {
elem_55215.attachEvent(cljs.core.name(actual_type_55229),canonical_f_55231);
}


var G__55232 = seq__54682_55224;
var G__55233 = chunk__54684_55225;
var G__55234 = count__54685_55226;
var G__55235 = (i__54686_55227 + (1));
seq__54682_55224 = G__55232;
chunk__54684_55225 = G__55233;
count__54685_55226 = G__55234;
i__54686_55227 = G__55235;
continue;
} else {
var temp__5735__auto___55236 = cljs.core.seq(seq__54682_55224);
if(temp__5735__auto___55236){
var seq__54682_55237__$1 = temp__5735__auto___55236;
if(cljs.core.chunked_seq_QMARK_(seq__54682_55237__$1)){
var c__4556__auto___55238 = cljs.core.chunk_first(seq__54682_55237__$1);
var G__55239 = cljs.core.chunk_rest(seq__54682_55237__$1);
var G__55240 = c__4556__auto___55238;
var G__55241 = cljs.core.count(c__4556__auto___55238);
var G__55242 = (0);
seq__54682_55224 = G__55239;
chunk__54684_55225 = G__55240;
count__54685_55226 = G__55241;
i__54686_55227 = G__55242;
continue;
} else {
var vec__54752_55243 = cljs.core.first(seq__54682_55237__$1);
var actual_type_55244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54752_55243,(0),null);
var factory_55245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54752_55243,(1),null);
var canonical_f_55246 = (function (){var G__54756 = (factory_55245.cljs$core$IFn$_invoke$arity$1 ? factory_55245.cljs$core$IFn$_invoke$arity$1(f_55223) : factory_55245.call(null,f_55223));
var fexpr__54755 = (cljs.core.truth_(selector_55216)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55215,selector_55216):cljs.core.identity);
return (fexpr__54755.cljs$core$IFn$_invoke$arity$1 ? fexpr__54755.cljs$core$IFn$_invoke$arity$1(G__54756) : fexpr__54755.call(null,G__54756));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55215,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55216,actual_type_55244,f_55223], null),canonical_f_55246], 0));

if(cljs.core.truth_(elem_55215.addEventListener)){
elem_55215.addEventListener(cljs.core.name(actual_type_55244),canonical_f_55246);
} else {
elem_55215.attachEvent(cljs.core.name(actual_type_55244),canonical_f_55246);
}


var G__55247 = cljs.core.next(seq__54682_55237__$1);
var G__55248 = null;
var G__55249 = (0);
var G__55250 = (0);
seq__54682_55224 = G__55247;
chunk__54684_55225 = G__55248;
count__54685_55226 = G__55249;
i__54686_55227 = G__55250;
continue;
}
} else {
}
}
break;
}

var G__55251 = seq__54672_55217;
var G__55252 = chunk__54679_55218;
var G__55253 = count__54680_55219;
var G__55254 = (i__54681_55220 + (1));
seq__54672_55217 = G__55251;
chunk__54679_55218 = G__55252;
count__54680_55219 = G__55253;
i__54681_55220 = G__55254;
continue;
} else {
var temp__5735__auto___55255 = cljs.core.seq(seq__54672_55217);
if(temp__5735__auto___55255){
var seq__54672_55256__$1 = temp__5735__auto___55255;
if(cljs.core.chunked_seq_QMARK_(seq__54672_55256__$1)){
var c__4556__auto___55257 = cljs.core.chunk_first(seq__54672_55256__$1);
var G__55258 = cljs.core.chunk_rest(seq__54672_55256__$1);
var G__55259 = c__4556__auto___55257;
var G__55260 = cljs.core.count(c__4556__auto___55257);
var G__55261 = (0);
seq__54672_55217 = G__55258;
chunk__54679_55218 = G__55259;
count__54680_55219 = G__55260;
i__54681_55220 = G__55261;
continue;
} else {
var vec__54757_55262 = cljs.core.first(seq__54672_55256__$1);
var orig_type_55263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54757_55262,(0),null);
var f_55264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54757_55262,(1),null);
var seq__54673_55265 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55263,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55263,cljs.core.identity])));
var chunk__54675_55266 = null;
var count__54676_55267 = (0);
var i__54677_55268 = (0);
while(true){
if((i__54677_55268 < count__54676_55267)){
var vec__54770_55269 = chunk__54675_55266.cljs$core$IIndexed$_nth$arity$2(null,i__54677_55268);
var actual_type_55270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770_55269,(0),null);
var factory_55271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770_55269,(1),null);
var canonical_f_55272 = (function (){var G__54774 = (factory_55271.cljs$core$IFn$_invoke$arity$1 ? factory_55271.cljs$core$IFn$_invoke$arity$1(f_55264) : factory_55271.call(null,f_55264));
var fexpr__54773 = (cljs.core.truth_(selector_55216)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55215,selector_55216):cljs.core.identity);
return (fexpr__54773.cljs$core$IFn$_invoke$arity$1 ? fexpr__54773.cljs$core$IFn$_invoke$arity$1(G__54774) : fexpr__54773.call(null,G__54774));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55215,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55216,actual_type_55270,f_55264], null),canonical_f_55272], 0));

if(cljs.core.truth_(elem_55215.addEventListener)){
elem_55215.addEventListener(cljs.core.name(actual_type_55270),canonical_f_55272);
} else {
elem_55215.attachEvent(cljs.core.name(actual_type_55270),canonical_f_55272);
}


var G__55273 = seq__54673_55265;
var G__55274 = chunk__54675_55266;
var G__55275 = count__54676_55267;
var G__55276 = (i__54677_55268 + (1));
seq__54673_55265 = G__55273;
chunk__54675_55266 = G__55274;
count__54676_55267 = G__55275;
i__54677_55268 = G__55276;
continue;
} else {
var temp__5735__auto___55277__$1 = cljs.core.seq(seq__54673_55265);
if(temp__5735__auto___55277__$1){
var seq__54673_55278__$1 = temp__5735__auto___55277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54673_55278__$1)){
var c__4556__auto___55279 = cljs.core.chunk_first(seq__54673_55278__$1);
var G__55280 = cljs.core.chunk_rest(seq__54673_55278__$1);
var G__55281 = c__4556__auto___55279;
var G__55282 = cljs.core.count(c__4556__auto___55279);
var G__55283 = (0);
seq__54673_55265 = G__55280;
chunk__54675_55266 = G__55281;
count__54676_55267 = G__55282;
i__54677_55268 = G__55283;
continue;
} else {
var vec__54775_55284 = cljs.core.first(seq__54673_55278__$1);
var actual_type_55285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54775_55284,(0),null);
var factory_55286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54775_55284,(1),null);
var canonical_f_55287 = (function (){var G__54779 = (factory_55286.cljs$core$IFn$_invoke$arity$1 ? factory_55286.cljs$core$IFn$_invoke$arity$1(f_55264) : factory_55286.call(null,f_55264));
var fexpr__54778 = (cljs.core.truth_(selector_55216)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55215,selector_55216):cljs.core.identity);
return (fexpr__54778.cljs$core$IFn$_invoke$arity$1 ? fexpr__54778.cljs$core$IFn$_invoke$arity$1(G__54779) : fexpr__54778.call(null,G__54779));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55215,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55216,actual_type_55285,f_55264], null),canonical_f_55287], 0));

if(cljs.core.truth_(elem_55215.addEventListener)){
elem_55215.addEventListener(cljs.core.name(actual_type_55285),canonical_f_55287);
} else {
elem_55215.attachEvent(cljs.core.name(actual_type_55285),canonical_f_55287);
}


var G__55288 = cljs.core.next(seq__54673_55278__$1);
var G__55289 = null;
var G__55290 = (0);
var G__55291 = (0);
seq__54673_55265 = G__55288;
chunk__54675_55266 = G__55289;
count__54676_55267 = G__55290;
i__54677_55268 = G__55291;
continue;
}
} else {
}
}
break;
}

var G__55292 = cljs.core.next(seq__54672_55256__$1);
var G__55293 = null;
var G__55294 = (0);
var G__55295 = (0);
seq__54672_55217 = G__55292;
chunk__54679_55218 = G__55293;
count__54680_55219 = G__55294;
i__54681_55220 = G__55295;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54667){
var G__54668 = cljs.core.first(seq54667);
var seq54667__$1 = cljs.core.next(seq54667);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54668,seq54667__$1);
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
var args__4742__auto__ = [];
var len__4736__auto___55296 = arguments.length;
var i__4737__auto___55297 = (0);
while(true){
if((i__4737__auto___55297 < len__4736__auto___55296)){
args__4742__auto__.push((arguments[i__4737__auto___55297]));

var G__55298 = (i__4737__auto___55297 + (1));
i__4737__auto___55297 = G__55298;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54782_55299 = dommy.core.elem_and_selector(elem_sel);
var elem_55300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54782_55299,(0),null);
var selector_55301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54782_55299,(1),null);
var seq__54785_55302 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54792_55303 = null;
var count__54793_55304 = (0);
var i__54794_55305 = (0);
while(true){
if((i__54794_55305 < count__54793_55304)){
var vec__54831_55306 = chunk__54792_55303.cljs$core$IIndexed$_nth$arity$2(null,i__54794_55305);
var orig_type_55307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54831_55306,(0),null);
var f_55308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54831_55306,(1),null);
var seq__54795_55309 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55307,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55307,cljs.core.identity])));
var chunk__54797_55310 = null;
var count__54798_55311 = (0);
var i__54799_55312 = (0);
while(true){
if((i__54799_55312 < count__54798_55311)){
var vec__54840_55313 = chunk__54797_55310.cljs$core$IIndexed$_nth$arity$2(null,i__54799_55312);
var actual_type_55314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840_55313,(0),null);
var __55315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840_55313,(1),null);
var keys_55316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55301,actual_type_55314,f_55308], null);
var canonical_f_55317 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55300),keys_55316);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55316], 0));

if(cljs.core.truth_(elem_55300.removeEventListener)){
elem_55300.removeEventListener(cljs.core.name(actual_type_55314),canonical_f_55317);
} else {
elem_55300.detachEvent(cljs.core.name(actual_type_55314),canonical_f_55317);
}


var G__55318 = seq__54795_55309;
var G__55319 = chunk__54797_55310;
var G__55320 = count__54798_55311;
var G__55321 = (i__54799_55312 + (1));
seq__54795_55309 = G__55318;
chunk__54797_55310 = G__55319;
count__54798_55311 = G__55320;
i__54799_55312 = G__55321;
continue;
} else {
var temp__5735__auto___55322 = cljs.core.seq(seq__54795_55309);
if(temp__5735__auto___55322){
var seq__54795_55323__$1 = temp__5735__auto___55322;
if(cljs.core.chunked_seq_QMARK_(seq__54795_55323__$1)){
var c__4556__auto___55324 = cljs.core.chunk_first(seq__54795_55323__$1);
var G__55325 = cljs.core.chunk_rest(seq__54795_55323__$1);
var G__55326 = c__4556__auto___55324;
var G__55327 = cljs.core.count(c__4556__auto___55324);
var G__55328 = (0);
seq__54795_55309 = G__55325;
chunk__54797_55310 = G__55326;
count__54798_55311 = G__55327;
i__54799_55312 = G__55328;
continue;
} else {
var vec__54843_55329 = cljs.core.first(seq__54795_55323__$1);
var actual_type_55330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54843_55329,(0),null);
var __55331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54843_55329,(1),null);
var keys_55332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55301,actual_type_55330,f_55308], null);
var canonical_f_55333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55300),keys_55332);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55332], 0));

if(cljs.core.truth_(elem_55300.removeEventListener)){
elem_55300.removeEventListener(cljs.core.name(actual_type_55330),canonical_f_55333);
} else {
elem_55300.detachEvent(cljs.core.name(actual_type_55330),canonical_f_55333);
}


var G__55334 = cljs.core.next(seq__54795_55323__$1);
var G__55335 = null;
var G__55336 = (0);
var G__55337 = (0);
seq__54795_55309 = G__55334;
chunk__54797_55310 = G__55335;
count__54798_55311 = G__55336;
i__54799_55312 = G__55337;
continue;
}
} else {
}
}
break;
}

var G__55338 = seq__54785_55302;
var G__55339 = chunk__54792_55303;
var G__55340 = count__54793_55304;
var G__55341 = (i__54794_55305 + (1));
seq__54785_55302 = G__55338;
chunk__54792_55303 = G__55339;
count__54793_55304 = G__55340;
i__54794_55305 = G__55341;
continue;
} else {
var temp__5735__auto___55342 = cljs.core.seq(seq__54785_55302);
if(temp__5735__auto___55342){
var seq__54785_55343__$1 = temp__5735__auto___55342;
if(cljs.core.chunked_seq_QMARK_(seq__54785_55343__$1)){
var c__4556__auto___55344 = cljs.core.chunk_first(seq__54785_55343__$1);
var G__55345 = cljs.core.chunk_rest(seq__54785_55343__$1);
var G__55346 = c__4556__auto___55344;
var G__55347 = cljs.core.count(c__4556__auto___55344);
var G__55348 = (0);
seq__54785_55302 = G__55345;
chunk__54792_55303 = G__55346;
count__54793_55304 = G__55347;
i__54794_55305 = G__55348;
continue;
} else {
var vec__54846_55349 = cljs.core.first(seq__54785_55343__$1);
var orig_type_55350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54846_55349,(0),null);
var f_55351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54846_55349,(1),null);
var seq__54786_55352 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55350,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55350,cljs.core.identity])));
var chunk__54788_55353 = null;
var count__54789_55354 = (0);
var i__54790_55355 = (0);
while(true){
if((i__54790_55355 < count__54789_55354)){
var vec__54855_55356 = chunk__54788_55353.cljs$core$IIndexed$_nth$arity$2(null,i__54790_55355);
var actual_type_55357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54855_55356,(0),null);
var __55358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54855_55356,(1),null);
var keys_55359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55301,actual_type_55357,f_55351], null);
var canonical_f_55360 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55300),keys_55359);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55359], 0));

if(cljs.core.truth_(elem_55300.removeEventListener)){
elem_55300.removeEventListener(cljs.core.name(actual_type_55357),canonical_f_55360);
} else {
elem_55300.detachEvent(cljs.core.name(actual_type_55357),canonical_f_55360);
}


var G__55361 = seq__54786_55352;
var G__55362 = chunk__54788_55353;
var G__55363 = count__54789_55354;
var G__55364 = (i__54790_55355 + (1));
seq__54786_55352 = G__55361;
chunk__54788_55353 = G__55362;
count__54789_55354 = G__55363;
i__54790_55355 = G__55364;
continue;
} else {
var temp__5735__auto___55365__$1 = cljs.core.seq(seq__54786_55352);
if(temp__5735__auto___55365__$1){
var seq__54786_55366__$1 = temp__5735__auto___55365__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54786_55366__$1)){
var c__4556__auto___55367 = cljs.core.chunk_first(seq__54786_55366__$1);
var G__55368 = cljs.core.chunk_rest(seq__54786_55366__$1);
var G__55369 = c__4556__auto___55367;
var G__55370 = cljs.core.count(c__4556__auto___55367);
var G__55371 = (0);
seq__54786_55352 = G__55368;
chunk__54788_55353 = G__55369;
count__54789_55354 = G__55370;
i__54790_55355 = G__55371;
continue;
} else {
var vec__54858_55372 = cljs.core.first(seq__54786_55366__$1);
var actual_type_55373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54858_55372,(0),null);
var __55374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54858_55372,(1),null);
var keys_55375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55301,actual_type_55373,f_55351], null);
var canonical_f_55376 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55300),keys_55375);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55375], 0));

if(cljs.core.truth_(elem_55300.removeEventListener)){
elem_55300.removeEventListener(cljs.core.name(actual_type_55373),canonical_f_55376);
} else {
elem_55300.detachEvent(cljs.core.name(actual_type_55373),canonical_f_55376);
}


var G__55377 = cljs.core.next(seq__54786_55366__$1);
var G__55378 = null;
var G__55379 = (0);
var G__55380 = (0);
seq__54786_55352 = G__55377;
chunk__54788_55353 = G__55378;
count__54789_55354 = G__55379;
i__54790_55355 = G__55380;
continue;
}
} else {
}
}
break;
}

var G__55381 = cljs.core.next(seq__54785_55343__$1);
var G__55382 = null;
var G__55383 = (0);
var G__55384 = (0);
seq__54785_55302 = G__55381;
chunk__54792_55303 = G__55382;
count__54793_55304 = G__55383;
i__54794_55305 = G__55384;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54780){
var G__54781 = cljs.core.first(seq54780);
var seq54780__$1 = cljs.core.next(seq54780);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54781,seq54780__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55388 = arguments.length;
var i__4737__auto___55389 = (0);
while(true){
if((i__4737__auto___55389 < len__4736__auto___55388)){
args__4742__auto__.push((arguments[i__4737__auto___55389]));

var G__55390 = (i__4737__auto___55389 + (1));
i__4737__auto___55389 = G__55390;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54863_55398 = dommy.core.elem_and_selector(elem_sel);
var elem_55399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54863_55398,(0),null);
var selector_55400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54863_55398,(1),null);
var seq__54866_55401 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54867_55402 = null;
var count__54868_55403 = (0);
var i__54869_55404 = (0);
while(true){
if((i__54869_55404 < count__54868_55403)){
var vec__54876_55405 = chunk__54867_55402.cljs$core$IIndexed$_nth$arity$2(null,i__54869_55404);
var type_55406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54876_55405,(0),null);
var f_55407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54876_55405,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55406,((function (seq__54866_55401,chunk__54867_55402,count__54868_55403,i__54869_55404,vec__54876_55405,type_55406,f_55407,vec__54863_55398,elem_55399,selector_55400){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55406,dommy$core$this_fn], 0));

return (f_55407.cljs$core$IFn$_invoke$arity$1 ? f_55407.cljs$core$IFn$_invoke$arity$1(e) : f_55407.call(null,e));
});})(seq__54866_55401,chunk__54867_55402,count__54868_55403,i__54869_55404,vec__54876_55405,type_55406,f_55407,vec__54863_55398,elem_55399,selector_55400))
], 0));


var G__55410 = seq__54866_55401;
var G__55411 = chunk__54867_55402;
var G__55412 = count__54868_55403;
var G__55413 = (i__54869_55404 + (1));
seq__54866_55401 = G__55410;
chunk__54867_55402 = G__55411;
count__54868_55403 = G__55412;
i__54869_55404 = G__55413;
continue;
} else {
var temp__5735__auto___55416 = cljs.core.seq(seq__54866_55401);
if(temp__5735__auto___55416){
var seq__54866_55417__$1 = temp__5735__auto___55416;
if(cljs.core.chunked_seq_QMARK_(seq__54866_55417__$1)){
var c__4556__auto___55418 = cljs.core.chunk_first(seq__54866_55417__$1);
var G__55419 = cljs.core.chunk_rest(seq__54866_55417__$1);
var G__55420 = c__4556__auto___55418;
var G__55421 = cljs.core.count(c__4556__auto___55418);
var G__55422 = (0);
seq__54866_55401 = G__55419;
chunk__54867_55402 = G__55420;
count__54868_55403 = G__55421;
i__54869_55404 = G__55422;
continue;
} else {
var vec__54879_55423 = cljs.core.first(seq__54866_55417__$1);
var type_55424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54879_55423,(0),null);
var f_55425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54879_55423,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55424,((function (seq__54866_55401,chunk__54867_55402,count__54868_55403,i__54869_55404,vec__54879_55423,type_55424,f_55425,seq__54866_55417__$1,temp__5735__auto___55416,vec__54863_55398,elem_55399,selector_55400){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55424,dommy$core$this_fn], 0));

return (f_55425.cljs$core$IFn$_invoke$arity$1 ? f_55425.cljs$core$IFn$_invoke$arity$1(e) : f_55425.call(null,e));
});})(seq__54866_55401,chunk__54867_55402,count__54868_55403,i__54869_55404,vec__54879_55423,type_55424,f_55425,seq__54866_55417__$1,temp__5735__auto___55416,vec__54863_55398,elem_55399,selector_55400))
], 0));


var G__55428 = cljs.core.next(seq__54866_55417__$1);
var G__55429 = null;
var G__55430 = (0);
var G__55431 = (0);
seq__54866_55401 = G__55428;
chunk__54867_55402 = G__55429;
count__54868_55403 = G__55430;
i__54869_55404 = G__55431;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54861){
var G__54862 = cljs.core.first(seq54861);
var seq54861__$1 = cljs.core.next(seq54861);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54862,seq54861__$1);
}));


//# sourceMappingURL=dommy.core.js.map
