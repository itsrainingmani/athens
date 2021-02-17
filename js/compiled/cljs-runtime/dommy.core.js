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
var G__54508 = arguments.length;
switch (G__54508) {
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
var G__54518 = arguments.length;
switch (G__54518) {
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
var G__54521 = arguments.length;
switch (G__54521) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54519_SHARP_){
return (!((p1__54519_SHARP_ === base)));
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
var len__4736__auto___54888 = arguments.length;
var i__4737__auto___54889 = (0);
while(true){
if((i__4737__auto___54889 < len__4736__auto___54888)){
args__4742__auto__.push((arguments[i__4737__auto___54889]));

var G__54890 = (i__4737__auto___54889 + (1));
i__4737__auto___54889 = G__54890;
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
var seq__54528_54891 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54529_54892 = null;
var count__54530_54893 = (0);
var i__54531_54894 = (0);
while(true){
if((i__54531_54894 < count__54530_54893)){
var vec__54538_54895 = chunk__54529_54892.cljs$core$IIndexed$_nth$arity$2(null,i__54531_54894);
var k_54896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54538_54895,(0),null);
var v_54897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54538_54895,(1),null);
style.setProperty(dommy.utils.as_str(k_54896),v_54897);


var G__54898 = seq__54528_54891;
var G__54899 = chunk__54529_54892;
var G__54900 = count__54530_54893;
var G__54901 = (i__54531_54894 + (1));
seq__54528_54891 = G__54898;
chunk__54529_54892 = G__54899;
count__54530_54893 = G__54900;
i__54531_54894 = G__54901;
continue;
} else {
var temp__5735__auto___54902 = cljs.core.seq(seq__54528_54891);
if(temp__5735__auto___54902){
var seq__54528_54903__$1 = temp__5735__auto___54902;
if(cljs.core.chunked_seq_QMARK_(seq__54528_54903__$1)){
var c__4556__auto___54904 = cljs.core.chunk_first(seq__54528_54903__$1);
var G__54905 = cljs.core.chunk_rest(seq__54528_54903__$1);
var G__54906 = c__4556__auto___54904;
var G__54907 = cljs.core.count(c__4556__auto___54904);
var G__54908 = (0);
seq__54528_54891 = G__54905;
chunk__54529_54892 = G__54906;
count__54530_54893 = G__54907;
i__54531_54894 = G__54908;
continue;
} else {
var vec__54541_54909 = cljs.core.first(seq__54528_54903__$1);
var k_54910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54909,(0),null);
var v_54911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54909,(1),null);
style.setProperty(dommy.utils.as_str(k_54910),v_54911);


var G__54912 = cljs.core.next(seq__54528_54903__$1);
var G__54913 = null;
var G__54914 = (0);
var G__54915 = (0);
seq__54528_54891 = G__54912;
chunk__54529_54892 = G__54913;
count__54530_54893 = G__54914;
i__54531_54894 = G__54915;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54526){
var G__54527 = cljs.core.first(seq54526);
var seq54526__$1 = cljs.core.next(seq54526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54527,seq54526__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54916 = arguments.length;
var i__4737__auto___54917 = (0);
while(true){
if((i__4737__auto___54917 < len__4736__auto___54916)){
args__4742__auto__.push((arguments[i__4737__auto___54917]));

var G__54918 = (i__4737__auto___54917 + (1));
i__4737__auto___54917 = G__54918;
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
var seq__54546_54919 = cljs.core.seq(keywords);
var chunk__54547_54920 = null;
var count__54548_54921 = (0);
var i__54549_54922 = (0);
while(true){
if((i__54549_54922 < count__54548_54921)){
var kw_54923 = chunk__54547_54920.cljs$core$IIndexed$_nth$arity$2(null,i__54549_54922);
style.removeProperty(dommy.utils.as_str(kw_54923));


var G__54924 = seq__54546_54919;
var G__54925 = chunk__54547_54920;
var G__54926 = count__54548_54921;
var G__54927 = (i__54549_54922 + (1));
seq__54546_54919 = G__54924;
chunk__54547_54920 = G__54925;
count__54548_54921 = G__54926;
i__54549_54922 = G__54927;
continue;
} else {
var temp__5735__auto___54928 = cljs.core.seq(seq__54546_54919);
if(temp__5735__auto___54928){
var seq__54546_54929__$1 = temp__5735__auto___54928;
if(cljs.core.chunked_seq_QMARK_(seq__54546_54929__$1)){
var c__4556__auto___54930 = cljs.core.chunk_first(seq__54546_54929__$1);
var G__54931 = cljs.core.chunk_rest(seq__54546_54929__$1);
var G__54932 = c__4556__auto___54930;
var G__54933 = cljs.core.count(c__4556__auto___54930);
var G__54934 = (0);
seq__54546_54919 = G__54931;
chunk__54547_54920 = G__54932;
count__54548_54921 = G__54933;
i__54549_54922 = G__54934;
continue;
} else {
var kw_54936 = cljs.core.first(seq__54546_54929__$1);
style.removeProperty(dommy.utils.as_str(kw_54936));


var G__54937 = cljs.core.next(seq__54546_54929__$1);
var G__54938 = null;
var G__54939 = (0);
var G__54940 = (0);
seq__54546_54919 = G__54937;
chunk__54547_54920 = G__54938;
count__54548_54921 = G__54939;
i__54549_54922 = G__54940;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54544){
var G__54545 = cljs.core.first(seq54544);
var seq54544__$1 = cljs.core.next(seq54544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54545,seq54544__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54941 = arguments.length;
var i__4737__auto___54942 = (0);
while(true){
if((i__4737__auto___54942 < len__4736__auto___54941)){
args__4742__auto__.push((arguments[i__4737__auto___54942]));

var G__54943 = (i__4737__auto___54942 + (1));
i__4737__auto___54942 = G__54943;
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

var seq__54552_54946 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54553_54947 = null;
var count__54554_54948 = (0);
var i__54555_54949 = (0);
while(true){
if((i__54555_54949 < count__54554_54948)){
var vec__54562_54952 = chunk__54553_54947.cljs$core$IIndexed$_nth$arity$2(null,i__54555_54949);
var k_54953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54562_54952,(0),null);
var v_54954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54562_54952,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54953,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54954),"px"].join('')], 0));


var G__54955 = seq__54552_54946;
var G__54956 = chunk__54553_54947;
var G__54957 = count__54554_54948;
var G__54958 = (i__54555_54949 + (1));
seq__54552_54946 = G__54955;
chunk__54553_54947 = G__54956;
count__54554_54948 = G__54957;
i__54555_54949 = G__54958;
continue;
} else {
var temp__5735__auto___54959 = cljs.core.seq(seq__54552_54946);
if(temp__5735__auto___54959){
var seq__54552_54960__$1 = temp__5735__auto___54959;
if(cljs.core.chunked_seq_QMARK_(seq__54552_54960__$1)){
var c__4556__auto___54961 = cljs.core.chunk_first(seq__54552_54960__$1);
var G__54962 = cljs.core.chunk_rest(seq__54552_54960__$1);
var G__54963 = c__4556__auto___54961;
var G__54964 = cljs.core.count(c__4556__auto___54961);
var G__54965 = (0);
seq__54552_54946 = G__54962;
chunk__54553_54947 = G__54963;
count__54554_54948 = G__54964;
i__54555_54949 = G__54965;
continue;
} else {
var vec__54565_54967 = cljs.core.first(seq__54552_54960__$1);
var k_54968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54967,(0),null);
var v_54969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54967,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54968,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54969),"px"].join('')], 0));


var G__54972 = cljs.core.next(seq__54552_54960__$1);
var G__54973 = null;
var G__54974 = (0);
var G__54975 = (0);
seq__54552_54946 = G__54972;
chunk__54553_54947 = G__54973;
count__54554_54948 = G__54974;
i__54555_54949 = G__54975;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54550){
var G__54551 = cljs.core.first(seq54550);
var seq54550__$1 = cljs.core.next(seq54550);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54551,seq54550__$1);
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
var G__54573 = arguments.length;
switch (G__54573) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54979 = arguments.length;
var i__4737__auto___54980 = (0);
while(true){
if((i__4737__auto___54980 < len__4736__auto___54979)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54980]));

var G__54981 = (i__4737__auto___54980 + (1));
i__4737__auto___54980 = G__54981;
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
var G__54574 = elem;
(G__54574[k__$1] = v);

return G__54574;
} else {
var G__54575 = elem;
G__54575.setAttribute(k__$1,v);

return G__54575;
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

var seq__54576_54985 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54577_54986 = null;
var count__54578_54987 = (0);
var i__54579_54988 = (0);
while(true){
if((i__54579_54988 < count__54578_54987)){
var vec__54586_54989 = chunk__54577_54986.cljs$core$IIndexed$_nth$arity$2(null,i__54579_54988);
var k_54990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54586_54989,(0),null);
var v_54991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54586_54989,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54990__$1,v_54991__$1);


var G__54993 = seq__54576_54985;
var G__54994 = chunk__54577_54986;
var G__54995 = count__54578_54987;
var G__54996 = (i__54579_54988 + (1));
seq__54576_54985 = G__54993;
chunk__54577_54986 = G__54994;
count__54578_54987 = G__54995;
i__54579_54988 = G__54996;
continue;
} else {
var temp__5735__auto___54997 = cljs.core.seq(seq__54576_54985);
if(temp__5735__auto___54997){
var seq__54576_54998__$1 = temp__5735__auto___54997;
if(cljs.core.chunked_seq_QMARK_(seq__54576_54998__$1)){
var c__4556__auto___54999 = cljs.core.chunk_first(seq__54576_54998__$1);
var G__55000 = cljs.core.chunk_rest(seq__54576_54998__$1);
var G__55001 = c__4556__auto___54999;
var G__55002 = cljs.core.count(c__4556__auto___54999);
var G__55003 = (0);
seq__54576_54985 = G__55000;
chunk__54577_54986 = G__55001;
count__54578_54987 = G__55002;
i__54579_54988 = G__55003;
continue;
} else {
var vec__54589_55004 = cljs.core.first(seq__54576_54998__$1);
var k_55005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_55004,(0),null);
var v_55006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_55004,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_55005__$1,v_55006__$1);


var G__55007 = cljs.core.next(seq__54576_54998__$1);
var G__55008 = null;
var G__55009 = (0);
var G__55010 = (0);
seq__54576_54985 = G__55007;
chunk__54577_54986 = G__55008;
count__54578_54987 = G__55009;
i__54579_54988 = G__55010;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54569){
var G__54570 = cljs.core.first(seq54569);
var seq54569__$1 = cljs.core.next(seq54569);
var G__54571 = cljs.core.first(seq54569__$1);
var seq54569__$2 = cljs.core.next(seq54569__$1);
var G__54572 = cljs.core.first(seq54569__$2);
var seq54569__$3 = cljs.core.next(seq54569__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54570,G__54571,G__54572,seq54569__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54596 = arguments.length;
switch (G__54596) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55015 = arguments.length;
var i__4737__auto___55016 = (0);
while(true){
if((i__4737__auto___55016 < len__4736__auto___55015)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55016]));

var G__55017 = (i__4737__auto___55016 + (1));
i__4737__auto___55016 = G__55017;
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
var k_55018__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54597.cljs$core$IFn$_invoke$arity$1 ? fexpr__54597.cljs$core$IFn$_invoke$arity$1(k_55018__$1) : fexpr__54597.call(null,k_55018__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55018__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54598_55019 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54599_55020 = null;
var count__54600_55021 = (0);
var i__54601_55022 = (0);
while(true){
if((i__54601_55022 < count__54600_55021)){
var k_55023__$1 = chunk__54599_55020.cljs$core$IIndexed$_nth$arity$2(null,i__54601_55022);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55023__$1);


var G__55024 = seq__54598_55019;
var G__55025 = chunk__54599_55020;
var G__55026 = count__54600_55021;
var G__55027 = (i__54601_55022 + (1));
seq__54598_55019 = G__55024;
chunk__54599_55020 = G__55025;
count__54600_55021 = G__55026;
i__54601_55022 = G__55027;
continue;
} else {
var temp__5735__auto___55028 = cljs.core.seq(seq__54598_55019);
if(temp__5735__auto___55028){
var seq__54598_55029__$1 = temp__5735__auto___55028;
if(cljs.core.chunked_seq_QMARK_(seq__54598_55029__$1)){
var c__4556__auto___55030 = cljs.core.chunk_first(seq__54598_55029__$1);
var G__55031 = cljs.core.chunk_rest(seq__54598_55029__$1);
var G__55032 = c__4556__auto___55030;
var G__55033 = cljs.core.count(c__4556__auto___55030);
var G__55034 = (0);
seq__54598_55019 = G__55031;
chunk__54599_55020 = G__55032;
count__54600_55021 = G__55033;
i__54601_55022 = G__55034;
continue;
} else {
var k_55035__$1 = cljs.core.first(seq__54598_55029__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55035__$1);


var G__55036 = cljs.core.next(seq__54598_55029__$1);
var G__55037 = null;
var G__55038 = (0);
var G__55039 = (0);
seq__54598_55019 = G__55036;
chunk__54599_55020 = G__55037;
count__54600_55021 = G__55038;
i__54601_55022 = G__55039;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54593){
var G__54594 = cljs.core.first(seq54593);
var seq54593__$1 = cljs.core.next(seq54593);
var G__54595 = cljs.core.first(seq54593__$1);
var seq54593__$2 = cljs.core.next(seq54593__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54594,G__54595,seq54593__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54603 = arguments.length;
switch (G__54603) {
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
var G__54608 = arguments.length;
switch (G__54608) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55042 = arguments.length;
var i__4737__auto___55043 = (0);
while(true){
if((i__4737__auto___55043 < len__4736__auto___55042)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55043]));

var G__55044 = (i__4737__auto___55043 + (1));
i__4737__auto___55043 = G__55044;
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
var temp__5733__auto___55045 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55045)){
var class_list_55046 = temp__5733__auto___55045;
var seq__54609_55047 = cljs.core.seq(classes__$1);
var chunk__54610_55048 = null;
var count__54611_55049 = (0);
var i__54612_55050 = (0);
while(true){
if((i__54612_55050 < count__54611_55049)){
var c_55051 = chunk__54610_55048.cljs$core$IIndexed$_nth$arity$2(null,i__54612_55050);
class_list_55046.add(c_55051);


var G__55052 = seq__54609_55047;
var G__55053 = chunk__54610_55048;
var G__55054 = count__54611_55049;
var G__55055 = (i__54612_55050 + (1));
seq__54609_55047 = G__55052;
chunk__54610_55048 = G__55053;
count__54611_55049 = G__55054;
i__54612_55050 = G__55055;
continue;
} else {
var temp__5735__auto___55056 = cljs.core.seq(seq__54609_55047);
if(temp__5735__auto___55056){
var seq__54609_55057__$1 = temp__5735__auto___55056;
if(cljs.core.chunked_seq_QMARK_(seq__54609_55057__$1)){
var c__4556__auto___55058 = cljs.core.chunk_first(seq__54609_55057__$1);
var G__55059 = cljs.core.chunk_rest(seq__54609_55057__$1);
var G__55060 = c__4556__auto___55058;
var G__55061 = cljs.core.count(c__4556__auto___55058);
var G__55062 = (0);
seq__54609_55047 = G__55059;
chunk__54610_55048 = G__55060;
count__54611_55049 = G__55061;
i__54612_55050 = G__55062;
continue;
} else {
var c_55063 = cljs.core.first(seq__54609_55057__$1);
class_list_55046.add(c_55063);


var G__55064 = cljs.core.next(seq__54609_55057__$1);
var G__55065 = null;
var G__55066 = (0);
var G__55067 = (0);
seq__54609_55047 = G__55064;
chunk__54610_55048 = G__55065;
count__54611_55049 = G__55066;
i__54612_55050 = G__55067;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54613_55068 = cljs.core.seq(classes__$1);
var chunk__54614_55069 = null;
var count__54615_55070 = (0);
var i__54616_55071 = (0);
while(true){
if((i__54616_55071 < count__54615_55070)){
var c_55072 = chunk__54614_55069.cljs$core$IIndexed$_nth$arity$2(null,i__54616_55071);
var class_name_55073 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55073,c_55072))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55073 === ""))?c_55072:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55073)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55072)].join('')));
}


var G__55078 = seq__54613_55068;
var G__55079 = chunk__54614_55069;
var G__55080 = count__54615_55070;
var G__55081 = (i__54616_55071 + (1));
seq__54613_55068 = G__55078;
chunk__54614_55069 = G__55079;
count__54615_55070 = G__55080;
i__54616_55071 = G__55081;
continue;
} else {
var temp__5735__auto___55082 = cljs.core.seq(seq__54613_55068);
if(temp__5735__auto___55082){
var seq__54613_55083__$1 = temp__5735__auto___55082;
if(cljs.core.chunked_seq_QMARK_(seq__54613_55083__$1)){
var c__4556__auto___55088 = cljs.core.chunk_first(seq__54613_55083__$1);
var G__55089 = cljs.core.chunk_rest(seq__54613_55083__$1);
var G__55090 = c__4556__auto___55088;
var G__55091 = cljs.core.count(c__4556__auto___55088);
var G__55092 = (0);
seq__54613_55068 = G__55089;
chunk__54614_55069 = G__55090;
count__54615_55070 = G__55091;
i__54616_55071 = G__55092;
continue;
} else {
var c_55093 = cljs.core.first(seq__54613_55083__$1);
var class_name_55098 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55098,c_55093))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55098 === ""))?c_55093:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55098)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55093)].join('')));
}


var G__55099 = cljs.core.next(seq__54613_55083__$1);
var G__55100 = null;
var G__55101 = (0);
var G__55102 = (0);
seq__54613_55068 = G__55099;
chunk__54614_55069 = G__55100;
count__54615_55070 = G__55101;
i__54616_55071 = G__55102;
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
var seq__54617_55103 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54618_55104 = null;
var count__54619_55105 = (0);
var i__54620_55106 = (0);
while(true){
if((i__54620_55106 < count__54619_55105)){
var c_55107 = chunk__54618_55104.cljs$core$IIndexed$_nth$arity$2(null,i__54620_55106);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55107);


var G__55108 = seq__54617_55103;
var G__55109 = chunk__54618_55104;
var G__55110 = count__54619_55105;
var G__55111 = (i__54620_55106 + (1));
seq__54617_55103 = G__55108;
chunk__54618_55104 = G__55109;
count__54619_55105 = G__55110;
i__54620_55106 = G__55111;
continue;
} else {
var temp__5735__auto___55112 = cljs.core.seq(seq__54617_55103);
if(temp__5735__auto___55112){
var seq__54617_55113__$1 = temp__5735__auto___55112;
if(cljs.core.chunked_seq_QMARK_(seq__54617_55113__$1)){
var c__4556__auto___55115 = cljs.core.chunk_first(seq__54617_55113__$1);
var G__55116 = cljs.core.chunk_rest(seq__54617_55113__$1);
var G__55117 = c__4556__auto___55115;
var G__55118 = cljs.core.count(c__4556__auto___55115);
var G__55119 = (0);
seq__54617_55103 = G__55116;
chunk__54618_55104 = G__55117;
count__54619_55105 = G__55118;
i__54620_55106 = G__55119;
continue;
} else {
var c_55120 = cljs.core.first(seq__54617_55113__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55120);


var G__55121 = cljs.core.next(seq__54617_55113__$1);
var G__55122 = null;
var G__55123 = (0);
var G__55124 = (0);
seq__54617_55103 = G__55121;
chunk__54618_55104 = G__55122;
count__54619_55105 = G__55123;
i__54620_55106 = G__55124;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54605){
var G__54606 = cljs.core.first(seq54605);
var seq54605__$1 = cljs.core.next(seq54605);
var G__54607 = cljs.core.first(seq54605__$1);
var seq54605__$2 = cljs.core.next(seq54605__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54606,G__54607,seq54605__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54625 = arguments.length;
switch (G__54625) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55127 = arguments.length;
var i__4737__auto___55128 = (0);
while(true){
if((i__4737__auto___55128 < len__4736__auto___55127)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55128]));

var G__55129 = (i__4737__auto___55128 + (1));
i__4737__auto___55128 = G__55129;
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
var temp__5733__auto___55132 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55132)){
var class_list_55134 = temp__5733__auto___55132;
class_list_55134.remove(c__$1);
} else {
var class_name_55135 = dommy.core.class$(elem);
var new_class_name_55136 = dommy.utils.remove_class_str(class_name_55135,c__$1);
if((class_name_55135 === new_class_name_55136)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55136);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54626 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54627 = null;
var count__54628 = (0);
var i__54629 = (0);
while(true){
if((i__54629 < count__54628)){
var c = chunk__54627.cljs$core$IIndexed$_nth$arity$2(null,i__54629);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55137 = seq__54626;
var G__55138 = chunk__54627;
var G__55139 = count__54628;
var G__55140 = (i__54629 + (1));
seq__54626 = G__55137;
chunk__54627 = G__55138;
count__54628 = G__55139;
i__54629 = G__55140;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54626);
if(temp__5735__auto__){
var seq__54626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54626__$1);
var G__55141 = cljs.core.chunk_rest(seq__54626__$1);
var G__55142 = c__4556__auto__;
var G__55143 = cljs.core.count(c__4556__auto__);
var G__55144 = (0);
seq__54626 = G__55141;
chunk__54627 = G__55142;
count__54628 = G__55143;
i__54629 = G__55144;
continue;
} else {
var c = cljs.core.first(seq__54626__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55145 = cljs.core.next(seq__54626__$1);
var G__55146 = null;
var G__55147 = (0);
var G__55148 = (0);
seq__54626 = G__55145;
chunk__54627 = G__55146;
count__54628 = G__55147;
i__54629 = G__55148;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54622){
var G__54623 = cljs.core.first(seq54622);
var seq54622__$1 = cljs.core.next(seq54622);
var G__54624 = cljs.core.first(seq54622__$1);
var seq54622__$2 = cljs.core.next(seq54622__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54623,G__54624,seq54622__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54631 = arguments.length;
switch (G__54631) {
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
var temp__5733__auto___55150 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55150)){
var class_list_55151 = temp__5733__auto___55150;
class_list_55151.toggle(c__$1);
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
var G__54633 = arguments.length;
switch (G__54633) {
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
var G__54635 = arguments.length;
switch (G__54635) {
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
var G__54640 = arguments.length;
switch (G__54640) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55155 = arguments.length;
var i__4737__auto___55156 = (0);
while(true){
if((i__4737__auto___55156 < len__4736__auto___55155)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55156]));

var G__55157 = (i__4737__auto___55156 + (1));
i__4737__auto___55156 = G__55157;
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
var G__54641 = parent;
G__54641.appendChild(child);

return G__54641;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54642_55158 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54643_55159 = null;
var count__54644_55160 = (0);
var i__54645_55161 = (0);
while(true){
if((i__54645_55161 < count__54644_55160)){
var c_55162 = chunk__54643_55159.cljs$core$IIndexed$_nth$arity$2(null,i__54645_55161);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55162);


var G__55163 = seq__54642_55158;
var G__55164 = chunk__54643_55159;
var G__55165 = count__54644_55160;
var G__55166 = (i__54645_55161 + (1));
seq__54642_55158 = G__55163;
chunk__54643_55159 = G__55164;
count__54644_55160 = G__55165;
i__54645_55161 = G__55166;
continue;
} else {
var temp__5735__auto___55167 = cljs.core.seq(seq__54642_55158);
if(temp__5735__auto___55167){
var seq__54642_55168__$1 = temp__5735__auto___55167;
if(cljs.core.chunked_seq_QMARK_(seq__54642_55168__$1)){
var c__4556__auto___55169 = cljs.core.chunk_first(seq__54642_55168__$1);
var G__55170 = cljs.core.chunk_rest(seq__54642_55168__$1);
var G__55171 = c__4556__auto___55169;
var G__55172 = cljs.core.count(c__4556__auto___55169);
var G__55173 = (0);
seq__54642_55158 = G__55170;
chunk__54643_55159 = G__55171;
count__54644_55160 = G__55172;
i__54645_55161 = G__55173;
continue;
} else {
var c_55174 = cljs.core.first(seq__54642_55168__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55174);


var G__55175 = cljs.core.next(seq__54642_55168__$1);
var G__55176 = null;
var G__55177 = (0);
var G__55178 = (0);
seq__54642_55158 = G__55175;
chunk__54643_55159 = G__55176;
count__54644_55160 = G__55177;
i__54645_55161 = G__55178;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54637){
var G__54638 = cljs.core.first(seq54637);
var seq54637__$1 = cljs.core.next(seq54637);
var G__54639 = cljs.core.first(seq54637__$1);
var seq54637__$2 = cljs.core.next(seq54637__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54638,G__54639,seq54637__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54650 = arguments.length;
switch (G__54650) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55180 = arguments.length;
var i__4737__auto___55181 = (0);
while(true){
if((i__4737__auto___55181 < len__4736__auto___55180)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55181]));

var G__55182 = (i__4737__auto___55181 + (1));
i__4737__auto___55181 = G__55182;
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
var G__54651 = parent;
G__54651.insertBefore(child,parent.firstChild);

return G__54651;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54652_55183 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54653_55184 = null;
var count__54654_55185 = (0);
var i__54655_55186 = (0);
while(true){
if((i__54655_55186 < count__54654_55185)){
var c_55187 = chunk__54653_55184.cljs$core$IIndexed$_nth$arity$2(null,i__54655_55186);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55187);


var G__55188 = seq__54652_55183;
var G__55189 = chunk__54653_55184;
var G__55190 = count__54654_55185;
var G__55191 = (i__54655_55186 + (1));
seq__54652_55183 = G__55188;
chunk__54653_55184 = G__55189;
count__54654_55185 = G__55190;
i__54655_55186 = G__55191;
continue;
} else {
var temp__5735__auto___55192 = cljs.core.seq(seq__54652_55183);
if(temp__5735__auto___55192){
var seq__54652_55193__$1 = temp__5735__auto___55192;
if(cljs.core.chunked_seq_QMARK_(seq__54652_55193__$1)){
var c__4556__auto___55194 = cljs.core.chunk_first(seq__54652_55193__$1);
var G__55195 = cljs.core.chunk_rest(seq__54652_55193__$1);
var G__55196 = c__4556__auto___55194;
var G__55197 = cljs.core.count(c__4556__auto___55194);
var G__55198 = (0);
seq__54652_55183 = G__55195;
chunk__54653_55184 = G__55196;
count__54654_55185 = G__55197;
i__54655_55186 = G__55198;
continue;
} else {
var c_55199 = cljs.core.first(seq__54652_55193__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55199);


var G__55200 = cljs.core.next(seq__54652_55193__$1);
var G__55201 = null;
var G__55202 = (0);
var G__55203 = (0);
seq__54652_55183 = G__55200;
chunk__54653_55184 = G__55201;
count__54654_55185 = G__55202;
i__54655_55186 = G__55203;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54647){
var G__54648 = cljs.core.first(seq54647);
var seq54647__$1 = cljs.core.next(seq54647);
var G__54649 = cljs.core.first(seq54647__$1);
var seq54647__$2 = cljs.core.next(seq54647__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54648,G__54649,seq54647__$2);
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
var temp__5733__auto___55204 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55204)){
var next_55205 = temp__5733__auto___55204;
dommy.core.insert_before_BANG_(elem,next_55205);
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
var G__54657 = arguments.length;
switch (G__54657) {
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
var G__54658 = p;
G__54658.removeChild(elem);

return G__54658;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54659){
var vec__54660 = p__54659;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660,(1),null);
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
var len__4736__auto___55207 = arguments.length;
var i__4737__auto___55208 = (0);
while(true){
if((i__4737__auto___55208 < len__4736__auto___55207)){
args__4742__auto__.push((arguments[i__4737__auto___55208]));

var G__55209 = (i__4737__auto___55208 + (1));
i__4737__auto___55208 = G__55209;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54663){
var G__54664 = cljs.core.first(seq54663);
var seq54663__$1 = cljs.core.next(seq54663);
var G__54665 = cljs.core.first(seq54663__$1);
var seq54663__$2 = cljs.core.next(seq54663__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54664,G__54665,seq54663__$2);
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
var len__4736__auto___55210 = arguments.length;
var i__4737__auto___55211 = (0);
while(true){
if((i__4737__auto___55211 < len__4736__auto___55210)){
args__4742__auto__.push((arguments[i__4737__auto___55211]));

var G__55212 = (i__4737__auto___55211 + (1));
i__4737__auto___55211 = G__55212;
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

var vec__54668_55213 = dommy.core.elem_and_selector(elem_sel);
var elem_55214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668_55213,(0),null);
var selector_55215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668_55213,(1),null);
var seq__54671_55216 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54678_55217 = null;
var count__54679_55218 = (0);
var i__54680_55219 = (0);
while(true){
if((i__54680_55219 < count__54679_55218)){
var vec__54733_55220 = chunk__54678_55217.cljs$core$IIndexed$_nth$arity$2(null,i__54680_55219);
var orig_type_55221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54733_55220,(0),null);
var f_55222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54733_55220,(1),null);
var seq__54681_55223 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55221,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55221,cljs.core.identity])));
var chunk__54683_55224 = null;
var count__54684_55225 = (0);
var i__54685_55226 = (0);
while(true){
if((i__54685_55226 < count__54684_55225)){
var vec__54746_55227 = chunk__54683_55224.cljs$core$IIndexed$_nth$arity$2(null,i__54685_55226);
var actual_type_55228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746_55227,(0),null);
var factory_55229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746_55227,(1),null);
var canonical_f_55230 = (function (){var G__54750 = (factory_55229.cljs$core$IFn$_invoke$arity$1 ? factory_55229.cljs$core$IFn$_invoke$arity$1(f_55222) : factory_55229.call(null,f_55222));
var fexpr__54749 = (cljs.core.truth_(selector_55215)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55214,selector_55215):cljs.core.identity);
return (fexpr__54749.cljs$core$IFn$_invoke$arity$1 ? fexpr__54749.cljs$core$IFn$_invoke$arity$1(G__54750) : fexpr__54749.call(null,G__54750));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55214,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55215,actual_type_55228,f_55222], null),canonical_f_55230], 0));

if(cljs.core.truth_(elem_55214.addEventListener)){
elem_55214.addEventListener(cljs.core.name(actual_type_55228),canonical_f_55230);
} else {
elem_55214.attachEvent(cljs.core.name(actual_type_55228),canonical_f_55230);
}


var G__55231 = seq__54681_55223;
var G__55232 = chunk__54683_55224;
var G__55233 = count__54684_55225;
var G__55234 = (i__54685_55226 + (1));
seq__54681_55223 = G__55231;
chunk__54683_55224 = G__55232;
count__54684_55225 = G__55233;
i__54685_55226 = G__55234;
continue;
} else {
var temp__5735__auto___55235 = cljs.core.seq(seq__54681_55223);
if(temp__5735__auto___55235){
var seq__54681_55236__$1 = temp__5735__auto___55235;
if(cljs.core.chunked_seq_QMARK_(seq__54681_55236__$1)){
var c__4556__auto___55237 = cljs.core.chunk_first(seq__54681_55236__$1);
var G__55238 = cljs.core.chunk_rest(seq__54681_55236__$1);
var G__55239 = c__4556__auto___55237;
var G__55240 = cljs.core.count(c__4556__auto___55237);
var G__55241 = (0);
seq__54681_55223 = G__55238;
chunk__54683_55224 = G__55239;
count__54684_55225 = G__55240;
i__54685_55226 = G__55241;
continue;
} else {
var vec__54751_55242 = cljs.core.first(seq__54681_55236__$1);
var actual_type_55243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54751_55242,(0),null);
var factory_55244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54751_55242,(1),null);
var canonical_f_55245 = (function (){var G__54755 = (factory_55244.cljs$core$IFn$_invoke$arity$1 ? factory_55244.cljs$core$IFn$_invoke$arity$1(f_55222) : factory_55244.call(null,f_55222));
var fexpr__54754 = (cljs.core.truth_(selector_55215)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55214,selector_55215):cljs.core.identity);
return (fexpr__54754.cljs$core$IFn$_invoke$arity$1 ? fexpr__54754.cljs$core$IFn$_invoke$arity$1(G__54755) : fexpr__54754.call(null,G__54755));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55214,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55215,actual_type_55243,f_55222], null),canonical_f_55245], 0));

if(cljs.core.truth_(elem_55214.addEventListener)){
elem_55214.addEventListener(cljs.core.name(actual_type_55243),canonical_f_55245);
} else {
elem_55214.attachEvent(cljs.core.name(actual_type_55243),canonical_f_55245);
}


var G__55246 = cljs.core.next(seq__54681_55236__$1);
var G__55247 = null;
var G__55248 = (0);
var G__55249 = (0);
seq__54681_55223 = G__55246;
chunk__54683_55224 = G__55247;
count__54684_55225 = G__55248;
i__54685_55226 = G__55249;
continue;
}
} else {
}
}
break;
}

var G__55250 = seq__54671_55216;
var G__55251 = chunk__54678_55217;
var G__55252 = count__54679_55218;
var G__55253 = (i__54680_55219 + (1));
seq__54671_55216 = G__55250;
chunk__54678_55217 = G__55251;
count__54679_55218 = G__55252;
i__54680_55219 = G__55253;
continue;
} else {
var temp__5735__auto___55254 = cljs.core.seq(seq__54671_55216);
if(temp__5735__auto___55254){
var seq__54671_55255__$1 = temp__5735__auto___55254;
if(cljs.core.chunked_seq_QMARK_(seq__54671_55255__$1)){
var c__4556__auto___55256 = cljs.core.chunk_first(seq__54671_55255__$1);
var G__55257 = cljs.core.chunk_rest(seq__54671_55255__$1);
var G__55258 = c__4556__auto___55256;
var G__55259 = cljs.core.count(c__4556__auto___55256);
var G__55260 = (0);
seq__54671_55216 = G__55257;
chunk__54678_55217 = G__55258;
count__54679_55218 = G__55259;
i__54680_55219 = G__55260;
continue;
} else {
var vec__54756_55261 = cljs.core.first(seq__54671_55255__$1);
var orig_type_55262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756_55261,(0),null);
var f_55263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756_55261,(1),null);
var seq__54672_55264 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55262,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55262,cljs.core.identity])));
var chunk__54674_55265 = null;
var count__54675_55266 = (0);
var i__54676_55267 = (0);
while(true){
if((i__54676_55267 < count__54675_55266)){
var vec__54769_55268 = chunk__54674_55265.cljs$core$IIndexed$_nth$arity$2(null,i__54676_55267);
var actual_type_55269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769_55268,(0),null);
var factory_55270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769_55268,(1),null);
var canonical_f_55271 = (function (){var G__54773 = (factory_55270.cljs$core$IFn$_invoke$arity$1 ? factory_55270.cljs$core$IFn$_invoke$arity$1(f_55263) : factory_55270.call(null,f_55263));
var fexpr__54772 = (cljs.core.truth_(selector_55215)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55214,selector_55215):cljs.core.identity);
return (fexpr__54772.cljs$core$IFn$_invoke$arity$1 ? fexpr__54772.cljs$core$IFn$_invoke$arity$1(G__54773) : fexpr__54772.call(null,G__54773));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55214,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55215,actual_type_55269,f_55263], null),canonical_f_55271], 0));

if(cljs.core.truth_(elem_55214.addEventListener)){
elem_55214.addEventListener(cljs.core.name(actual_type_55269),canonical_f_55271);
} else {
elem_55214.attachEvent(cljs.core.name(actual_type_55269),canonical_f_55271);
}


var G__55272 = seq__54672_55264;
var G__55273 = chunk__54674_55265;
var G__55274 = count__54675_55266;
var G__55275 = (i__54676_55267 + (1));
seq__54672_55264 = G__55272;
chunk__54674_55265 = G__55273;
count__54675_55266 = G__55274;
i__54676_55267 = G__55275;
continue;
} else {
var temp__5735__auto___55276__$1 = cljs.core.seq(seq__54672_55264);
if(temp__5735__auto___55276__$1){
var seq__54672_55277__$1 = temp__5735__auto___55276__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54672_55277__$1)){
var c__4556__auto___55278 = cljs.core.chunk_first(seq__54672_55277__$1);
var G__55279 = cljs.core.chunk_rest(seq__54672_55277__$1);
var G__55280 = c__4556__auto___55278;
var G__55281 = cljs.core.count(c__4556__auto___55278);
var G__55282 = (0);
seq__54672_55264 = G__55279;
chunk__54674_55265 = G__55280;
count__54675_55266 = G__55281;
i__54676_55267 = G__55282;
continue;
} else {
var vec__54774_55283 = cljs.core.first(seq__54672_55277__$1);
var actual_type_55284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54774_55283,(0),null);
var factory_55285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54774_55283,(1),null);
var canonical_f_55286 = (function (){var G__54778 = (factory_55285.cljs$core$IFn$_invoke$arity$1 ? factory_55285.cljs$core$IFn$_invoke$arity$1(f_55263) : factory_55285.call(null,f_55263));
var fexpr__54777 = (cljs.core.truth_(selector_55215)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55214,selector_55215):cljs.core.identity);
return (fexpr__54777.cljs$core$IFn$_invoke$arity$1 ? fexpr__54777.cljs$core$IFn$_invoke$arity$1(G__54778) : fexpr__54777.call(null,G__54778));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55214,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55215,actual_type_55284,f_55263], null),canonical_f_55286], 0));

if(cljs.core.truth_(elem_55214.addEventListener)){
elem_55214.addEventListener(cljs.core.name(actual_type_55284),canonical_f_55286);
} else {
elem_55214.attachEvent(cljs.core.name(actual_type_55284),canonical_f_55286);
}


var G__55287 = cljs.core.next(seq__54672_55277__$1);
var G__55288 = null;
var G__55289 = (0);
var G__55290 = (0);
seq__54672_55264 = G__55287;
chunk__54674_55265 = G__55288;
count__54675_55266 = G__55289;
i__54676_55267 = G__55290;
continue;
}
} else {
}
}
break;
}

var G__55291 = cljs.core.next(seq__54671_55255__$1);
var G__55292 = null;
var G__55293 = (0);
var G__55294 = (0);
seq__54671_55216 = G__55291;
chunk__54678_55217 = G__55292;
count__54679_55218 = G__55293;
i__54680_55219 = G__55294;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54666){
var G__54667 = cljs.core.first(seq54666);
var seq54666__$1 = cljs.core.next(seq54666);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54667,seq54666__$1);
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
var len__4736__auto___55295 = arguments.length;
var i__4737__auto___55296 = (0);
while(true){
if((i__4737__auto___55296 < len__4736__auto___55295)){
args__4742__auto__.push((arguments[i__4737__auto___55296]));

var G__55297 = (i__4737__auto___55296 + (1));
i__4737__auto___55296 = G__55297;
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

var vec__54781_55298 = dommy.core.elem_and_selector(elem_sel);
var elem_55299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781_55298,(0),null);
var selector_55300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781_55298,(1),null);
var seq__54784_55301 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54791_55302 = null;
var count__54792_55303 = (0);
var i__54793_55304 = (0);
while(true){
if((i__54793_55304 < count__54792_55303)){
var vec__54830_55305 = chunk__54791_55302.cljs$core$IIndexed$_nth$arity$2(null,i__54793_55304);
var orig_type_55306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830_55305,(0),null);
var f_55307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830_55305,(1),null);
var seq__54794_55308 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55306,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55306,cljs.core.identity])));
var chunk__54796_55309 = null;
var count__54797_55310 = (0);
var i__54798_55311 = (0);
while(true){
if((i__54798_55311 < count__54797_55310)){
var vec__54839_55312 = chunk__54796_55309.cljs$core$IIndexed$_nth$arity$2(null,i__54798_55311);
var actual_type_55313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54839_55312,(0),null);
var __55314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54839_55312,(1),null);
var keys_55315 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55313,f_55307], null);
var canonical_f_55316 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55315);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55315], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55313),canonical_f_55316);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55313),canonical_f_55316);
}


var G__55317 = seq__54794_55308;
var G__55318 = chunk__54796_55309;
var G__55319 = count__54797_55310;
var G__55320 = (i__54798_55311 + (1));
seq__54794_55308 = G__55317;
chunk__54796_55309 = G__55318;
count__54797_55310 = G__55319;
i__54798_55311 = G__55320;
continue;
} else {
var temp__5735__auto___55321 = cljs.core.seq(seq__54794_55308);
if(temp__5735__auto___55321){
var seq__54794_55322__$1 = temp__5735__auto___55321;
if(cljs.core.chunked_seq_QMARK_(seq__54794_55322__$1)){
var c__4556__auto___55323 = cljs.core.chunk_first(seq__54794_55322__$1);
var G__55324 = cljs.core.chunk_rest(seq__54794_55322__$1);
var G__55325 = c__4556__auto___55323;
var G__55326 = cljs.core.count(c__4556__auto___55323);
var G__55327 = (0);
seq__54794_55308 = G__55324;
chunk__54796_55309 = G__55325;
count__54797_55310 = G__55326;
i__54798_55311 = G__55327;
continue;
} else {
var vec__54842_55328 = cljs.core.first(seq__54794_55322__$1);
var actual_type_55329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55328,(0),null);
var __55330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55328,(1),null);
var keys_55331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55329,f_55307], null);
var canonical_f_55332 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55331);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55331], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55329),canonical_f_55332);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55329),canonical_f_55332);
}


var G__55333 = cljs.core.next(seq__54794_55322__$1);
var G__55334 = null;
var G__55335 = (0);
var G__55336 = (0);
seq__54794_55308 = G__55333;
chunk__54796_55309 = G__55334;
count__54797_55310 = G__55335;
i__54798_55311 = G__55336;
continue;
}
} else {
}
}
break;
}

var G__55337 = seq__54784_55301;
var G__55338 = chunk__54791_55302;
var G__55339 = count__54792_55303;
var G__55340 = (i__54793_55304 + (1));
seq__54784_55301 = G__55337;
chunk__54791_55302 = G__55338;
count__54792_55303 = G__55339;
i__54793_55304 = G__55340;
continue;
} else {
var temp__5735__auto___55341 = cljs.core.seq(seq__54784_55301);
if(temp__5735__auto___55341){
var seq__54784_55342__$1 = temp__5735__auto___55341;
if(cljs.core.chunked_seq_QMARK_(seq__54784_55342__$1)){
var c__4556__auto___55343 = cljs.core.chunk_first(seq__54784_55342__$1);
var G__55344 = cljs.core.chunk_rest(seq__54784_55342__$1);
var G__55345 = c__4556__auto___55343;
var G__55346 = cljs.core.count(c__4556__auto___55343);
var G__55347 = (0);
seq__54784_55301 = G__55344;
chunk__54791_55302 = G__55345;
count__54792_55303 = G__55346;
i__54793_55304 = G__55347;
continue;
} else {
var vec__54845_55348 = cljs.core.first(seq__54784_55342__$1);
var orig_type_55349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55348,(0),null);
var f_55350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55348,(1),null);
var seq__54785_55351 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55349,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55349,cljs.core.identity])));
var chunk__54787_55352 = null;
var count__54788_55353 = (0);
var i__54789_55354 = (0);
while(true){
if((i__54789_55354 < count__54788_55353)){
var vec__54854_55355 = chunk__54787_55352.cljs$core$IIndexed$_nth$arity$2(null,i__54789_55354);
var actual_type_55356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854_55355,(0),null);
var __55357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854_55355,(1),null);
var keys_55358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55356,f_55350], null);
var canonical_f_55359 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55358);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55358], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55356),canonical_f_55359);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55356),canonical_f_55359);
}


var G__55360 = seq__54785_55351;
var G__55361 = chunk__54787_55352;
var G__55362 = count__54788_55353;
var G__55363 = (i__54789_55354 + (1));
seq__54785_55351 = G__55360;
chunk__54787_55352 = G__55361;
count__54788_55353 = G__55362;
i__54789_55354 = G__55363;
continue;
} else {
var temp__5735__auto___55364__$1 = cljs.core.seq(seq__54785_55351);
if(temp__5735__auto___55364__$1){
var seq__54785_55365__$1 = temp__5735__auto___55364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54785_55365__$1)){
var c__4556__auto___55366 = cljs.core.chunk_first(seq__54785_55365__$1);
var G__55367 = cljs.core.chunk_rest(seq__54785_55365__$1);
var G__55368 = c__4556__auto___55366;
var G__55369 = cljs.core.count(c__4556__auto___55366);
var G__55370 = (0);
seq__54785_55351 = G__55367;
chunk__54787_55352 = G__55368;
count__54788_55353 = G__55369;
i__54789_55354 = G__55370;
continue;
} else {
var vec__54857_55371 = cljs.core.first(seq__54785_55365__$1);
var actual_type_55372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55371,(0),null);
var __55373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55371,(1),null);
var keys_55374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55372,f_55350], null);
var canonical_f_55375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55374);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55374], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55372),canonical_f_55375);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55372),canonical_f_55375);
}


var G__55376 = cljs.core.next(seq__54785_55365__$1);
var G__55377 = null;
var G__55378 = (0);
var G__55379 = (0);
seq__54785_55351 = G__55376;
chunk__54787_55352 = G__55377;
count__54788_55353 = G__55378;
i__54789_55354 = G__55379;
continue;
}
} else {
}
}
break;
}

var G__55380 = cljs.core.next(seq__54784_55342__$1);
var G__55381 = null;
var G__55382 = (0);
var G__55383 = (0);
seq__54784_55301 = G__55380;
chunk__54791_55302 = G__55381;
count__54792_55303 = G__55382;
i__54793_55304 = G__55383;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54779){
var G__54780 = cljs.core.first(seq54779);
var seq54779__$1 = cljs.core.next(seq54779);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54780,seq54779__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55384 = arguments.length;
var i__4737__auto___55385 = (0);
while(true){
if((i__4737__auto___55385 < len__4736__auto___55384)){
args__4742__auto__.push((arguments[i__4737__auto___55385]));

var G__55386 = (i__4737__auto___55385 + (1));
i__4737__auto___55385 = G__55386;
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

var vec__54862_55387 = dommy.core.elem_and_selector(elem_sel);
var elem_55388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54862_55387,(0),null);
var selector_55389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54862_55387,(1),null);
var seq__54865_55390 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54866_55391 = null;
var count__54867_55392 = (0);
var i__54868_55393 = (0);
while(true){
if((i__54868_55393 < count__54867_55392)){
var vec__54875_55394 = chunk__54866_55391.cljs$core$IIndexed$_nth$arity$2(null,i__54868_55393);
var type_55395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875_55394,(0),null);
var f_55396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875_55394,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55395,((function (seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54875_55394,type_55395,f_55396,vec__54862_55387,elem_55388,selector_55389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55395,dommy$core$this_fn], 0));

return (f_55396.cljs$core$IFn$_invoke$arity$1 ? f_55396.cljs$core$IFn$_invoke$arity$1(e) : f_55396.call(null,e));
});})(seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54875_55394,type_55395,f_55396,vec__54862_55387,elem_55388,selector_55389))
], 0));


var G__55397 = seq__54865_55390;
var G__55398 = chunk__54866_55391;
var G__55399 = count__54867_55392;
var G__55400 = (i__54868_55393 + (1));
seq__54865_55390 = G__55397;
chunk__54866_55391 = G__55398;
count__54867_55392 = G__55399;
i__54868_55393 = G__55400;
continue;
} else {
var temp__5735__auto___55401 = cljs.core.seq(seq__54865_55390);
if(temp__5735__auto___55401){
var seq__54865_55402__$1 = temp__5735__auto___55401;
if(cljs.core.chunked_seq_QMARK_(seq__54865_55402__$1)){
var c__4556__auto___55403 = cljs.core.chunk_first(seq__54865_55402__$1);
var G__55404 = cljs.core.chunk_rest(seq__54865_55402__$1);
var G__55405 = c__4556__auto___55403;
var G__55406 = cljs.core.count(c__4556__auto___55403);
var G__55407 = (0);
seq__54865_55390 = G__55404;
chunk__54866_55391 = G__55405;
count__54867_55392 = G__55406;
i__54868_55393 = G__55407;
continue;
} else {
var vec__54878_55408 = cljs.core.first(seq__54865_55402__$1);
var type_55409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55408,(0),null);
var f_55410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55408,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55409,((function (seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54878_55408,type_55409,f_55410,seq__54865_55402__$1,temp__5735__auto___55401,vec__54862_55387,elem_55388,selector_55389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55409,dommy$core$this_fn], 0));

return (f_55410.cljs$core$IFn$_invoke$arity$1 ? f_55410.cljs$core$IFn$_invoke$arity$1(e) : f_55410.call(null,e));
});})(seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54878_55408,type_55409,f_55410,seq__54865_55402__$1,temp__5735__auto___55401,vec__54862_55387,elem_55388,selector_55389))
], 0));


var G__55411 = cljs.core.next(seq__54865_55402__$1);
var G__55412 = null;
var G__55413 = (0);
var G__55414 = (0);
seq__54865_55390 = G__55411;
chunk__54866_55391 = G__55412;
count__54867_55392 = G__55413;
i__54868_55393 = G__55414;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54860){
var G__54861 = cljs.core.first(seq54860);
var seq54860__$1 = cljs.core.next(seq54860);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54861,seq54860__$1);
}));


//# sourceMappingURL=dommy.core.js.map
