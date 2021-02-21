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
var G__54511 = arguments.length;
switch (G__54511) {
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
var G__54521 = arguments.length;
switch (G__54521) {
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
var G__54525 = arguments.length;
switch (G__54525) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54522_SHARP_){
return (!((p1__54522_SHARP_ === base)));
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
var len__4736__auto___54891 = arguments.length;
var i__4737__auto___54892 = (0);
while(true){
if((i__4737__auto___54892 < len__4736__auto___54891)){
args__4742__auto__.push((arguments[i__4737__auto___54892]));

var G__54893 = (i__4737__auto___54892 + (1));
i__4737__auto___54892 = G__54893;
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
var seq__54531_54894 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54532_54895 = null;
var count__54533_54896 = (0);
var i__54534_54897 = (0);
while(true){
if((i__54534_54897 < count__54533_54896)){
var vec__54541_54898 = chunk__54532_54895.cljs$core$IIndexed$_nth$arity$2(null,i__54534_54897);
var k_54899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54898,(0),null);
var v_54900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54541_54898,(1),null);
style.setProperty(dommy.utils.as_str(k_54899),v_54900);


var G__54901 = seq__54531_54894;
var G__54902 = chunk__54532_54895;
var G__54903 = count__54533_54896;
var G__54904 = (i__54534_54897 + (1));
seq__54531_54894 = G__54901;
chunk__54532_54895 = G__54902;
count__54533_54896 = G__54903;
i__54534_54897 = G__54904;
continue;
} else {
var temp__5735__auto___54905 = cljs.core.seq(seq__54531_54894);
if(temp__5735__auto___54905){
var seq__54531_54906__$1 = temp__5735__auto___54905;
if(cljs.core.chunked_seq_QMARK_(seq__54531_54906__$1)){
var c__4556__auto___54907 = cljs.core.chunk_first(seq__54531_54906__$1);
var G__54908 = cljs.core.chunk_rest(seq__54531_54906__$1);
var G__54909 = c__4556__auto___54907;
var G__54910 = cljs.core.count(c__4556__auto___54907);
var G__54911 = (0);
seq__54531_54894 = G__54908;
chunk__54532_54895 = G__54909;
count__54533_54896 = G__54910;
i__54534_54897 = G__54911;
continue;
} else {
var vec__54544_54912 = cljs.core.first(seq__54531_54906__$1);
var k_54913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544_54912,(0),null);
var v_54914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544_54912,(1),null);
style.setProperty(dommy.utils.as_str(k_54913),v_54914);


var G__54915 = cljs.core.next(seq__54531_54906__$1);
var G__54916 = null;
var G__54917 = (0);
var G__54918 = (0);
seq__54531_54894 = G__54915;
chunk__54532_54895 = G__54916;
count__54533_54896 = G__54917;
i__54534_54897 = G__54918;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54529){
var G__54530 = cljs.core.first(seq54529);
var seq54529__$1 = cljs.core.next(seq54529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54530,seq54529__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54920 = arguments.length;
var i__4737__auto___54921 = (0);
while(true){
if((i__4737__auto___54921 < len__4736__auto___54920)){
args__4742__auto__.push((arguments[i__4737__auto___54921]));

var G__54922 = (i__4737__auto___54921 + (1));
i__4737__auto___54921 = G__54922;
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
var seq__54549_54923 = cljs.core.seq(keywords);
var chunk__54550_54924 = null;
var count__54551_54925 = (0);
var i__54552_54926 = (0);
while(true){
if((i__54552_54926 < count__54551_54925)){
var kw_54927 = chunk__54550_54924.cljs$core$IIndexed$_nth$arity$2(null,i__54552_54926);
style.removeProperty(dommy.utils.as_str(kw_54927));


var G__54928 = seq__54549_54923;
var G__54929 = chunk__54550_54924;
var G__54930 = count__54551_54925;
var G__54931 = (i__54552_54926 + (1));
seq__54549_54923 = G__54928;
chunk__54550_54924 = G__54929;
count__54551_54925 = G__54930;
i__54552_54926 = G__54931;
continue;
} else {
var temp__5735__auto___54932 = cljs.core.seq(seq__54549_54923);
if(temp__5735__auto___54932){
var seq__54549_54933__$1 = temp__5735__auto___54932;
if(cljs.core.chunked_seq_QMARK_(seq__54549_54933__$1)){
var c__4556__auto___54934 = cljs.core.chunk_first(seq__54549_54933__$1);
var G__54935 = cljs.core.chunk_rest(seq__54549_54933__$1);
var G__54936 = c__4556__auto___54934;
var G__54937 = cljs.core.count(c__4556__auto___54934);
var G__54938 = (0);
seq__54549_54923 = G__54935;
chunk__54550_54924 = G__54936;
count__54551_54925 = G__54937;
i__54552_54926 = G__54938;
continue;
} else {
var kw_54943 = cljs.core.first(seq__54549_54933__$1);
style.removeProperty(dommy.utils.as_str(kw_54943));


var G__54944 = cljs.core.next(seq__54549_54933__$1);
var G__54945 = null;
var G__54946 = (0);
var G__54947 = (0);
seq__54549_54923 = G__54944;
chunk__54550_54924 = G__54945;
count__54551_54925 = G__54946;
i__54552_54926 = G__54947;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54547){
var G__54548 = cljs.core.first(seq54547);
var seq54547__$1 = cljs.core.next(seq54547);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54548,seq54547__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54948 = arguments.length;
var i__4737__auto___54949 = (0);
while(true){
if((i__4737__auto___54949 < len__4736__auto___54948)){
args__4742__auto__.push((arguments[i__4737__auto___54949]));

var G__54951 = (i__4737__auto___54949 + (1));
i__4737__auto___54949 = G__54951;
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

var seq__54555_54955 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54556_54956 = null;
var count__54557_54957 = (0);
var i__54558_54958 = (0);
while(true){
if((i__54558_54958 < count__54557_54957)){
var vec__54565_54959 = chunk__54556_54956.cljs$core$IIndexed$_nth$arity$2(null,i__54558_54958);
var k_54960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54959,(0),null);
var v_54961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565_54959,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54960,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54961),"px"].join('')], 0));


var G__54963 = seq__54555_54955;
var G__54964 = chunk__54556_54956;
var G__54965 = count__54557_54957;
var G__54966 = (i__54558_54958 + (1));
seq__54555_54955 = G__54963;
chunk__54556_54956 = G__54964;
count__54557_54957 = G__54965;
i__54558_54958 = G__54966;
continue;
} else {
var temp__5735__auto___54967 = cljs.core.seq(seq__54555_54955);
if(temp__5735__auto___54967){
var seq__54555_54968__$1 = temp__5735__auto___54967;
if(cljs.core.chunked_seq_QMARK_(seq__54555_54968__$1)){
var c__4556__auto___54969 = cljs.core.chunk_first(seq__54555_54968__$1);
var G__54970 = cljs.core.chunk_rest(seq__54555_54968__$1);
var G__54971 = c__4556__auto___54969;
var G__54972 = cljs.core.count(c__4556__auto___54969);
var G__54973 = (0);
seq__54555_54955 = G__54970;
chunk__54556_54956 = G__54971;
count__54557_54957 = G__54972;
i__54558_54958 = G__54973;
continue;
} else {
var vec__54568_54977 = cljs.core.first(seq__54555_54968__$1);
var k_54978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568_54977,(0),null);
var v_54979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568_54977,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54978,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54979),"px"].join('')], 0));


var G__54980 = cljs.core.next(seq__54555_54968__$1);
var G__54981 = null;
var G__54982 = (0);
var G__54983 = (0);
seq__54555_54955 = G__54980;
chunk__54556_54956 = G__54981;
count__54557_54957 = G__54982;
i__54558_54958 = G__54983;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54553){
var G__54554 = cljs.core.first(seq54553);
var seq54553__$1 = cljs.core.next(seq54553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54554,seq54553__$1);
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
var G__54576 = arguments.length;
switch (G__54576) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54985 = arguments.length;
var i__4737__auto___54986 = (0);
while(true){
if((i__4737__auto___54986 < len__4736__auto___54985)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54986]));

var G__54988 = (i__4737__auto___54986 + (1));
i__4737__auto___54986 = G__54988;
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
var G__54577 = elem;
(G__54577[k__$1] = v);

return G__54577;
} else {
var G__54578 = elem;
G__54578.setAttribute(k__$1,v);

return G__54578;
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

var seq__54579_54989 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54580_54990 = null;
var count__54581_54991 = (0);
var i__54582_54992 = (0);
while(true){
if((i__54582_54992 < count__54581_54991)){
var vec__54589_54993 = chunk__54580_54990.cljs$core$IIndexed$_nth$arity$2(null,i__54582_54992);
var k_54994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_54993,(0),null);
var v_54995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54589_54993,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54994__$1,v_54995__$1);


var G__54999 = seq__54579_54989;
var G__55000 = chunk__54580_54990;
var G__55001 = count__54581_54991;
var G__55002 = (i__54582_54992 + (1));
seq__54579_54989 = G__54999;
chunk__54580_54990 = G__55000;
count__54581_54991 = G__55001;
i__54582_54992 = G__55002;
continue;
} else {
var temp__5735__auto___55003 = cljs.core.seq(seq__54579_54989);
if(temp__5735__auto___55003){
var seq__54579_55004__$1 = temp__5735__auto___55003;
if(cljs.core.chunked_seq_QMARK_(seq__54579_55004__$1)){
var c__4556__auto___55005 = cljs.core.chunk_first(seq__54579_55004__$1);
var G__55006 = cljs.core.chunk_rest(seq__54579_55004__$1);
var G__55007 = c__4556__auto___55005;
var G__55008 = cljs.core.count(c__4556__auto___55005);
var G__55009 = (0);
seq__54579_54989 = G__55006;
chunk__54580_54990 = G__55007;
count__54581_54991 = G__55008;
i__54582_54992 = G__55009;
continue;
} else {
var vec__54592_55010 = cljs.core.first(seq__54579_55004__$1);
var k_55011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_55010,(0),null);
var v_55012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_55010,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_55011__$1,v_55012__$1);


var G__55013 = cljs.core.next(seq__54579_55004__$1);
var G__55014 = null;
var G__55015 = (0);
var G__55016 = (0);
seq__54579_54989 = G__55013;
chunk__54580_54990 = G__55014;
count__54581_54991 = G__55015;
i__54582_54992 = G__55016;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54572){
var G__54573 = cljs.core.first(seq54572);
var seq54572__$1 = cljs.core.next(seq54572);
var G__54574 = cljs.core.first(seq54572__$1);
var seq54572__$2 = cljs.core.next(seq54572__$1);
var G__54575 = cljs.core.first(seq54572__$2);
var seq54572__$3 = cljs.core.next(seq54572__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54573,G__54574,G__54575,seq54572__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54599 = arguments.length;
switch (G__54599) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55018 = arguments.length;
var i__4737__auto___55019 = (0);
while(true){
if((i__4737__auto___55019 < len__4736__auto___55018)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55019]));

var G__55020 = (i__4737__auto___55019 + (1));
i__4737__auto___55019 = G__55020;
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
var k_55021__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54600.cljs$core$IFn$_invoke$arity$1 ? fexpr__54600.cljs$core$IFn$_invoke$arity$1(k_55021__$1) : fexpr__54600.call(null,k_55021__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55021__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54601_55022 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54602_55023 = null;
var count__54603_55024 = (0);
var i__54604_55025 = (0);
while(true){
if((i__54604_55025 < count__54603_55024)){
var k_55026__$1 = chunk__54602_55023.cljs$core$IIndexed$_nth$arity$2(null,i__54604_55025);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55026__$1);


var G__55027 = seq__54601_55022;
var G__55028 = chunk__54602_55023;
var G__55029 = count__54603_55024;
var G__55030 = (i__54604_55025 + (1));
seq__54601_55022 = G__55027;
chunk__54602_55023 = G__55028;
count__54603_55024 = G__55029;
i__54604_55025 = G__55030;
continue;
} else {
var temp__5735__auto___55031 = cljs.core.seq(seq__54601_55022);
if(temp__5735__auto___55031){
var seq__54601_55032__$1 = temp__5735__auto___55031;
if(cljs.core.chunked_seq_QMARK_(seq__54601_55032__$1)){
var c__4556__auto___55033 = cljs.core.chunk_first(seq__54601_55032__$1);
var G__55034 = cljs.core.chunk_rest(seq__54601_55032__$1);
var G__55035 = c__4556__auto___55033;
var G__55036 = cljs.core.count(c__4556__auto___55033);
var G__55037 = (0);
seq__54601_55022 = G__55034;
chunk__54602_55023 = G__55035;
count__54603_55024 = G__55036;
i__54604_55025 = G__55037;
continue;
} else {
var k_55038__$1 = cljs.core.first(seq__54601_55032__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55038__$1);


var G__55039 = cljs.core.next(seq__54601_55032__$1);
var G__55040 = null;
var G__55041 = (0);
var G__55042 = (0);
seq__54601_55022 = G__55039;
chunk__54602_55023 = G__55040;
count__54603_55024 = G__55041;
i__54604_55025 = G__55042;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54596){
var G__54597 = cljs.core.first(seq54596);
var seq54596__$1 = cljs.core.next(seq54596);
var G__54598 = cljs.core.first(seq54596__$1);
var seq54596__$2 = cljs.core.next(seq54596__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54597,G__54598,seq54596__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54606 = arguments.length;
switch (G__54606) {
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
var G__54611 = arguments.length;
switch (G__54611) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55045 = arguments.length;
var i__4737__auto___55046 = (0);
while(true){
if((i__4737__auto___55046 < len__4736__auto___55045)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55046]));

var G__55047 = (i__4737__auto___55046 + (1));
i__4737__auto___55046 = G__55047;
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
var temp__5733__auto___55052 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55052)){
var class_list_55057 = temp__5733__auto___55052;
var seq__54612_55058 = cljs.core.seq(classes__$1);
var chunk__54613_55059 = null;
var count__54614_55060 = (0);
var i__54615_55061 = (0);
while(true){
if((i__54615_55061 < count__54614_55060)){
var c_55062 = chunk__54613_55059.cljs$core$IIndexed$_nth$arity$2(null,i__54615_55061);
class_list_55057.add(c_55062);


var G__55067 = seq__54612_55058;
var G__55068 = chunk__54613_55059;
var G__55069 = count__54614_55060;
var G__55070 = (i__54615_55061 + (1));
seq__54612_55058 = G__55067;
chunk__54613_55059 = G__55068;
count__54614_55060 = G__55069;
i__54615_55061 = G__55070;
continue;
} else {
var temp__5735__auto___55071 = cljs.core.seq(seq__54612_55058);
if(temp__5735__auto___55071){
var seq__54612_55072__$1 = temp__5735__auto___55071;
if(cljs.core.chunked_seq_QMARK_(seq__54612_55072__$1)){
var c__4556__auto___55073 = cljs.core.chunk_first(seq__54612_55072__$1);
var G__55074 = cljs.core.chunk_rest(seq__54612_55072__$1);
var G__55075 = c__4556__auto___55073;
var G__55076 = cljs.core.count(c__4556__auto___55073);
var G__55077 = (0);
seq__54612_55058 = G__55074;
chunk__54613_55059 = G__55075;
count__54614_55060 = G__55076;
i__54615_55061 = G__55077;
continue;
} else {
var c_55078 = cljs.core.first(seq__54612_55072__$1);
class_list_55057.add(c_55078);


var G__55079 = cljs.core.next(seq__54612_55072__$1);
var G__55080 = null;
var G__55081 = (0);
var G__55082 = (0);
seq__54612_55058 = G__55079;
chunk__54613_55059 = G__55080;
count__54614_55060 = G__55081;
i__54615_55061 = G__55082;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54616_55083 = cljs.core.seq(classes__$1);
var chunk__54617_55084 = null;
var count__54618_55085 = (0);
var i__54619_55086 = (0);
while(true){
if((i__54619_55086 < count__54618_55085)){
var c_55087 = chunk__54617_55084.cljs$core$IIndexed$_nth$arity$2(null,i__54619_55086);
var class_name_55088 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55088,c_55087))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55088 === ""))?c_55087:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55088)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55087)].join('')));
}


var G__55090 = seq__54616_55083;
var G__55091 = chunk__54617_55084;
var G__55092 = count__54618_55085;
var G__55093 = (i__54619_55086 + (1));
seq__54616_55083 = G__55090;
chunk__54617_55084 = G__55091;
count__54618_55085 = G__55092;
i__54619_55086 = G__55093;
continue;
} else {
var temp__5735__auto___55094 = cljs.core.seq(seq__54616_55083);
if(temp__5735__auto___55094){
var seq__54616_55095__$1 = temp__5735__auto___55094;
if(cljs.core.chunked_seq_QMARK_(seq__54616_55095__$1)){
var c__4556__auto___55096 = cljs.core.chunk_first(seq__54616_55095__$1);
var G__55097 = cljs.core.chunk_rest(seq__54616_55095__$1);
var G__55098 = c__4556__auto___55096;
var G__55099 = cljs.core.count(c__4556__auto___55096);
var G__55100 = (0);
seq__54616_55083 = G__55097;
chunk__54617_55084 = G__55098;
count__54618_55085 = G__55099;
i__54619_55086 = G__55100;
continue;
} else {
var c_55102 = cljs.core.first(seq__54616_55095__$1);
var class_name_55103 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55103,c_55102))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55103 === ""))?c_55102:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55103)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55102)].join('')));
}


var G__55104 = cljs.core.next(seq__54616_55095__$1);
var G__55105 = null;
var G__55106 = (0);
var G__55107 = (0);
seq__54616_55083 = G__55104;
chunk__54617_55084 = G__55105;
count__54618_55085 = G__55106;
i__54619_55086 = G__55107;
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
var seq__54620_55108 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54621_55109 = null;
var count__54622_55110 = (0);
var i__54623_55111 = (0);
while(true){
if((i__54623_55111 < count__54622_55110)){
var c_55112 = chunk__54621_55109.cljs$core$IIndexed$_nth$arity$2(null,i__54623_55111);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55112);


var G__55114 = seq__54620_55108;
var G__55115 = chunk__54621_55109;
var G__55116 = count__54622_55110;
var G__55117 = (i__54623_55111 + (1));
seq__54620_55108 = G__55114;
chunk__54621_55109 = G__55115;
count__54622_55110 = G__55116;
i__54623_55111 = G__55117;
continue;
} else {
var temp__5735__auto___55119 = cljs.core.seq(seq__54620_55108);
if(temp__5735__auto___55119){
var seq__54620_55120__$1 = temp__5735__auto___55119;
if(cljs.core.chunked_seq_QMARK_(seq__54620_55120__$1)){
var c__4556__auto___55122 = cljs.core.chunk_first(seq__54620_55120__$1);
var G__55123 = cljs.core.chunk_rest(seq__54620_55120__$1);
var G__55124 = c__4556__auto___55122;
var G__55125 = cljs.core.count(c__4556__auto___55122);
var G__55126 = (0);
seq__54620_55108 = G__55123;
chunk__54621_55109 = G__55124;
count__54622_55110 = G__55125;
i__54623_55111 = G__55126;
continue;
} else {
var c_55127 = cljs.core.first(seq__54620_55120__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55127);


var G__55128 = cljs.core.next(seq__54620_55120__$1);
var G__55129 = null;
var G__55130 = (0);
var G__55131 = (0);
seq__54620_55108 = G__55128;
chunk__54621_55109 = G__55129;
count__54622_55110 = G__55130;
i__54623_55111 = G__55131;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54608){
var G__54609 = cljs.core.first(seq54608);
var seq54608__$1 = cljs.core.next(seq54608);
var G__54610 = cljs.core.first(seq54608__$1);
var seq54608__$2 = cljs.core.next(seq54608__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54609,G__54610,seq54608__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55133 = arguments.length;
var i__4737__auto___55134 = (0);
while(true){
if((i__4737__auto___55134 < len__4736__auto___55133)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55134]));

var G__55135 = (i__4737__auto___55134 + (1));
i__4737__auto___55134 = G__55135;
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
var temp__5733__auto___55136 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55136)){
var class_list_55137 = temp__5733__auto___55136;
class_list_55137.remove(c__$1);
} else {
var class_name_55138 = dommy.core.class$(elem);
var new_class_name_55139 = dommy.utils.remove_class_str(class_name_55138,c__$1);
if((class_name_55138 === new_class_name_55139)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55139);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54629 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54630 = null;
var count__54631 = (0);
var i__54632 = (0);
while(true){
if((i__54632 < count__54631)){
var c = chunk__54630.cljs$core$IIndexed$_nth$arity$2(null,i__54632);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55140 = seq__54629;
var G__55141 = chunk__54630;
var G__55142 = count__54631;
var G__55143 = (i__54632 + (1));
seq__54629 = G__55140;
chunk__54630 = G__55141;
count__54631 = G__55142;
i__54632 = G__55143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54629);
if(temp__5735__auto__){
var seq__54629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54629__$1);
var G__55144 = cljs.core.chunk_rest(seq__54629__$1);
var G__55145 = c__4556__auto__;
var G__55146 = cljs.core.count(c__4556__auto__);
var G__55147 = (0);
seq__54629 = G__55144;
chunk__54630 = G__55145;
count__54631 = G__55146;
i__54632 = G__55147;
continue;
} else {
var c = cljs.core.first(seq__54629__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55148 = cljs.core.next(seq__54629__$1);
var G__55149 = null;
var G__55150 = (0);
var G__55151 = (0);
seq__54629 = G__55148;
chunk__54630 = G__55149;
count__54631 = G__55150;
i__54632 = G__55151;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54625){
var G__54626 = cljs.core.first(seq54625);
var seq54625__$1 = cljs.core.next(seq54625);
var G__54627 = cljs.core.first(seq54625__$1);
var seq54625__$2 = cljs.core.next(seq54625__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54626,G__54627,seq54625__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54634 = arguments.length;
switch (G__54634) {
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
var temp__5733__auto___55153 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55153)){
var class_list_55154 = temp__5733__auto___55153;
class_list_55154.toggle(c__$1);
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
var G__54636 = arguments.length;
switch (G__54636) {
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
var G__54638 = arguments.length;
switch (G__54638) {
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
var G__54643 = arguments.length;
switch (G__54643) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55158 = arguments.length;
var i__4737__auto___55159 = (0);
while(true){
if((i__4737__auto___55159 < len__4736__auto___55158)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55159]));

var G__55160 = (i__4737__auto___55159 + (1));
i__4737__auto___55159 = G__55160;
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
var G__54644 = parent;
G__54644.appendChild(child);

return G__54644;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54645_55161 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54646_55162 = null;
var count__54647_55163 = (0);
var i__54648_55164 = (0);
while(true){
if((i__54648_55164 < count__54647_55163)){
var c_55165 = chunk__54646_55162.cljs$core$IIndexed$_nth$arity$2(null,i__54648_55164);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55165);


var G__55166 = seq__54645_55161;
var G__55167 = chunk__54646_55162;
var G__55168 = count__54647_55163;
var G__55169 = (i__54648_55164 + (1));
seq__54645_55161 = G__55166;
chunk__54646_55162 = G__55167;
count__54647_55163 = G__55168;
i__54648_55164 = G__55169;
continue;
} else {
var temp__5735__auto___55170 = cljs.core.seq(seq__54645_55161);
if(temp__5735__auto___55170){
var seq__54645_55171__$1 = temp__5735__auto___55170;
if(cljs.core.chunked_seq_QMARK_(seq__54645_55171__$1)){
var c__4556__auto___55172 = cljs.core.chunk_first(seq__54645_55171__$1);
var G__55173 = cljs.core.chunk_rest(seq__54645_55171__$1);
var G__55174 = c__4556__auto___55172;
var G__55175 = cljs.core.count(c__4556__auto___55172);
var G__55176 = (0);
seq__54645_55161 = G__55173;
chunk__54646_55162 = G__55174;
count__54647_55163 = G__55175;
i__54648_55164 = G__55176;
continue;
} else {
var c_55177 = cljs.core.first(seq__54645_55171__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55177);


var G__55178 = cljs.core.next(seq__54645_55171__$1);
var G__55179 = null;
var G__55180 = (0);
var G__55181 = (0);
seq__54645_55161 = G__55178;
chunk__54646_55162 = G__55179;
count__54647_55163 = G__55180;
i__54648_55164 = G__55181;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54640){
var G__54641 = cljs.core.first(seq54640);
var seq54640__$1 = cljs.core.next(seq54640);
var G__54642 = cljs.core.first(seq54640__$1);
var seq54640__$2 = cljs.core.next(seq54640__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54641,G__54642,seq54640__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54653 = arguments.length;
switch (G__54653) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55183 = arguments.length;
var i__4737__auto___55184 = (0);
while(true){
if((i__4737__auto___55184 < len__4736__auto___55183)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55184]));

var G__55185 = (i__4737__auto___55184 + (1));
i__4737__auto___55184 = G__55185;
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
var G__54654 = parent;
G__54654.insertBefore(child,parent.firstChild);

return G__54654;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54655_55186 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54656_55187 = null;
var count__54657_55188 = (0);
var i__54658_55189 = (0);
while(true){
if((i__54658_55189 < count__54657_55188)){
var c_55190 = chunk__54656_55187.cljs$core$IIndexed$_nth$arity$2(null,i__54658_55189);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55190);


var G__55191 = seq__54655_55186;
var G__55192 = chunk__54656_55187;
var G__55193 = count__54657_55188;
var G__55194 = (i__54658_55189 + (1));
seq__54655_55186 = G__55191;
chunk__54656_55187 = G__55192;
count__54657_55188 = G__55193;
i__54658_55189 = G__55194;
continue;
} else {
var temp__5735__auto___55195 = cljs.core.seq(seq__54655_55186);
if(temp__5735__auto___55195){
var seq__54655_55196__$1 = temp__5735__auto___55195;
if(cljs.core.chunked_seq_QMARK_(seq__54655_55196__$1)){
var c__4556__auto___55197 = cljs.core.chunk_first(seq__54655_55196__$1);
var G__55198 = cljs.core.chunk_rest(seq__54655_55196__$1);
var G__55199 = c__4556__auto___55197;
var G__55200 = cljs.core.count(c__4556__auto___55197);
var G__55201 = (0);
seq__54655_55186 = G__55198;
chunk__54656_55187 = G__55199;
count__54657_55188 = G__55200;
i__54658_55189 = G__55201;
continue;
} else {
var c_55202 = cljs.core.first(seq__54655_55196__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55202);


var G__55203 = cljs.core.next(seq__54655_55196__$1);
var G__55204 = null;
var G__55205 = (0);
var G__55206 = (0);
seq__54655_55186 = G__55203;
chunk__54656_55187 = G__55204;
count__54657_55188 = G__55205;
i__54658_55189 = G__55206;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54650){
var G__54651 = cljs.core.first(seq54650);
var seq54650__$1 = cljs.core.next(seq54650);
var G__54652 = cljs.core.first(seq54650__$1);
var seq54650__$2 = cljs.core.next(seq54650__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54651,G__54652,seq54650__$2);
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
var temp__5733__auto___55207 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55207)){
var next_55208 = temp__5733__auto___55207;
dommy.core.insert_before_BANG_(elem,next_55208);
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
var G__54660 = arguments.length;
switch (G__54660) {
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
var G__54661 = p;
G__54661.removeChild(elem);

return G__54661;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54662){
var vec__54663 = p__54662;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663,(1),null);
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

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54666){
var G__54667 = cljs.core.first(seq54666);
var seq54666__$1 = cljs.core.next(seq54666);
var G__54668 = cljs.core.first(seq54666__$1);
var seq54666__$2 = cljs.core.next(seq54666__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54667,G__54668,seq54666__$2);
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
var len__4736__auto___55213 = arguments.length;
var i__4737__auto___55214 = (0);
while(true){
if((i__4737__auto___55214 < len__4736__auto___55213)){
args__4742__auto__.push((arguments[i__4737__auto___55214]));

var G__55215 = (i__4737__auto___55214 + (1));
i__4737__auto___55214 = G__55215;
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

var vec__54671_55216 = dommy.core.elem_and_selector(elem_sel);
var elem_55217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55216,(0),null);
var selector_55218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55216,(1),null);
var seq__54674_55219 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54681_55220 = null;
var count__54682_55221 = (0);
var i__54683_55222 = (0);
while(true){
if((i__54683_55222 < count__54682_55221)){
var vec__54736_55223 = chunk__54681_55220.cljs$core$IIndexed$_nth$arity$2(null,i__54683_55222);
var orig_type_55224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736_55223,(0),null);
var f_55225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736_55223,(1),null);
var seq__54684_55226 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55224,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55224,cljs.core.identity])));
var chunk__54686_55227 = null;
var count__54687_55228 = (0);
var i__54688_55229 = (0);
while(true){
if((i__54688_55229 < count__54687_55228)){
var vec__54749_55230 = chunk__54686_55227.cljs$core$IIndexed$_nth$arity$2(null,i__54688_55229);
var actual_type_55231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54749_55230,(0),null);
var factory_55232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54749_55230,(1),null);
var canonical_f_55233 = (function (){var G__54753 = (factory_55232.cljs$core$IFn$_invoke$arity$1 ? factory_55232.cljs$core$IFn$_invoke$arity$1(f_55225) : factory_55232.call(null,f_55225));
var fexpr__54752 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54752.cljs$core$IFn$_invoke$arity$1 ? fexpr__54752.cljs$core$IFn$_invoke$arity$1(G__54753) : fexpr__54752.call(null,G__54753));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55231,f_55225], null),canonical_f_55233], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55231),canonical_f_55233);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55231),canonical_f_55233);
}


var G__55234 = seq__54684_55226;
var G__55235 = chunk__54686_55227;
var G__55236 = count__54687_55228;
var G__55237 = (i__54688_55229 + (1));
seq__54684_55226 = G__55234;
chunk__54686_55227 = G__55235;
count__54687_55228 = G__55236;
i__54688_55229 = G__55237;
continue;
} else {
var temp__5735__auto___55238 = cljs.core.seq(seq__54684_55226);
if(temp__5735__auto___55238){
var seq__54684_55239__$1 = temp__5735__auto___55238;
if(cljs.core.chunked_seq_QMARK_(seq__54684_55239__$1)){
var c__4556__auto___55240 = cljs.core.chunk_first(seq__54684_55239__$1);
var G__55241 = cljs.core.chunk_rest(seq__54684_55239__$1);
var G__55242 = c__4556__auto___55240;
var G__55243 = cljs.core.count(c__4556__auto___55240);
var G__55244 = (0);
seq__54684_55226 = G__55241;
chunk__54686_55227 = G__55242;
count__54687_55228 = G__55243;
i__54688_55229 = G__55244;
continue;
} else {
var vec__54754_55245 = cljs.core.first(seq__54684_55239__$1);
var actual_type_55246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54754_55245,(0),null);
var factory_55247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54754_55245,(1),null);
var canonical_f_55248 = (function (){var G__54758 = (factory_55247.cljs$core$IFn$_invoke$arity$1 ? factory_55247.cljs$core$IFn$_invoke$arity$1(f_55225) : factory_55247.call(null,f_55225));
var fexpr__54757 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54757.cljs$core$IFn$_invoke$arity$1 ? fexpr__54757.cljs$core$IFn$_invoke$arity$1(G__54758) : fexpr__54757.call(null,G__54758));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55246,f_55225], null),canonical_f_55248], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55246),canonical_f_55248);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55246),canonical_f_55248);
}


var G__55249 = cljs.core.next(seq__54684_55239__$1);
var G__55250 = null;
var G__55251 = (0);
var G__55252 = (0);
seq__54684_55226 = G__55249;
chunk__54686_55227 = G__55250;
count__54687_55228 = G__55251;
i__54688_55229 = G__55252;
continue;
}
} else {
}
}
break;
}

var G__55253 = seq__54674_55219;
var G__55254 = chunk__54681_55220;
var G__55255 = count__54682_55221;
var G__55256 = (i__54683_55222 + (1));
seq__54674_55219 = G__55253;
chunk__54681_55220 = G__55254;
count__54682_55221 = G__55255;
i__54683_55222 = G__55256;
continue;
} else {
var temp__5735__auto___55257 = cljs.core.seq(seq__54674_55219);
if(temp__5735__auto___55257){
var seq__54674_55258__$1 = temp__5735__auto___55257;
if(cljs.core.chunked_seq_QMARK_(seq__54674_55258__$1)){
var c__4556__auto___55259 = cljs.core.chunk_first(seq__54674_55258__$1);
var G__55260 = cljs.core.chunk_rest(seq__54674_55258__$1);
var G__55261 = c__4556__auto___55259;
var G__55262 = cljs.core.count(c__4556__auto___55259);
var G__55263 = (0);
seq__54674_55219 = G__55260;
chunk__54681_55220 = G__55261;
count__54682_55221 = G__55262;
i__54683_55222 = G__55263;
continue;
} else {
var vec__54759_55264 = cljs.core.first(seq__54674_55258__$1);
var orig_type_55265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54759_55264,(0),null);
var f_55266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54759_55264,(1),null);
var seq__54675_55267 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55265,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55265,cljs.core.identity])));
var chunk__54677_55268 = null;
var count__54678_55269 = (0);
var i__54679_55270 = (0);
while(true){
if((i__54679_55270 < count__54678_55269)){
var vec__54772_55271 = chunk__54677_55268.cljs$core$IIndexed$_nth$arity$2(null,i__54679_55270);
var actual_type_55272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772_55271,(0),null);
var factory_55273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772_55271,(1),null);
var canonical_f_55274 = (function (){var G__54776 = (factory_55273.cljs$core$IFn$_invoke$arity$1 ? factory_55273.cljs$core$IFn$_invoke$arity$1(f_55266) : factory_55273.call(null,f_55266));
var fexpr__54775 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54775.cljs$core$IFn$_invoke$arity$1 ? fexpr__54775.cljs$core$IFn$_invoke$arity$1(G__54776) : fexpr__54775.call(null,G__54776));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55272,f_55266], null),canonical_f_55274], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55272),canonical_f_55274);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55272),canonical_f_55274);
}


var G__55275 = seq__54675_55267;
var G__55276 = chunk__54677_55268;
var G__55277 = count__54678_55269;
var G__55278 = (i__54679_55270 + (1));
seq__54675_55267 = G__55275;
chunk__54677_55268 = G__55276;
count__54678_55269 = G__55277;
i__54679_55270 = G__55278;
continue;
} else {
var temp__5735__auto___55279__$1 = cljs.core.seq(seq__54675_55267);
if(temp__5735__auto___55279__$1){
var seq__54675_55280__$1 = temp__5735__auto___55279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54675_55280__$1)){
var c__4556__auto___55281 = cljs.core.chunk_first(seq__54675_55280__$1);
var G__55282 = cljs.core.chunk_rest(seq__54675_55280__$1);
var G__55283 = c__4556__auto___55281;
var G__55284 = cljs.core.count(c__4556__auto___55281);
var G__55285 = (0);
seq__54675_55267 = G__55282;
chunk__54677_55268 = G__55283;
count__54678_55269 = G__55284;
i__54679_55270 = G__55285;
continue;
} else {
var vec__54777_55286 = cljs.core.first(seq__54675_55280__$1);
var actual_type_55287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54777_55286,(0),null);
var factory_55288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54777_55286,(1),null);
var canonical_f_55289 = (function (){var G__54781 = (factory_55288.cljs$core$IFn$_invoke$arity$1 ? factory_55288.cljs$core$IFn$_invoke$arity$1(f_55266) : factory_55288.call(null,f_55266));
var fexpr__54780 = (cljs.core.truth_(selector_55218)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55217,selector_55218):cljs.core.identity);
return (fexpr__54780.cljs$core$IFn$_invoke$arity$1 ? fexpr__54780.cljs$core$IFn$_invoke$arity$1(G__54781) : fexpr__54780.call(null,G__54781));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55217,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55218,actual_type_55287,f_55266], null),canonical_f_55289], 0));

if(cljs.core.truth_(elem_55217.addEventListener)){
elem_55217.addEventListener(cljs.core.name(actual_type_55287),canonical_f_55289);
} else {
elem_55217.attachEvent(cljs.core.name(actual_type_55287),canonical_f_55289);
}


var G__55290 = cljs.core.next(seq__54675_55280__$1);
var G__55291 = null;
var G__55292 = (0);
var G__55293 = (0);
seq__54675_55267 = G__55290;
chunk__54677_55268 = G__55291;
count__54678_55269 = G__55292;
i__54679_55270 = G__55293;
continue;
}
} else {
}
}
break;
}

var G__55294 = cljs.core.next(seq__54674_55258__$1);
var G__55295 = null;
var G__55296 = (0);
var G__55297 = (0);
seq__54674_55219 = G__55294;
chunk__54681_55220 = G__55295;
count__54682_55221 = G__55296;
i__54683_55222 = G__55297;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54669){
var G__54670 = cljs.core.first(seq54669);
var seq54669__$1 = cljs.core.next(seq54669);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54670,seq54669__$1);
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
var len__4736__auto___55298 = arguments.length;
var i__4737__auto___55299 = (0);
while(true){
if((i__4737__auto___55299 < len__4736__auto___55298)){
args__4742__auto__.push((arguments[i__4737__auto___55299]));

var G__55300 = (i__4737__auto___55299 + (1));
i__4737__auto___55299 = G__55300;
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

var vec__54784_55301 = dommy.core.elem_and_selector(elem_sel);
var elem_55302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_55301,(0),null);
var selector_55303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54784_55301,(1),null);
var seq__54787_55304 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54794_55305 = null;
var count__54795_55306 = (0);
var i__54796_55307 = (0);
while(true){
if((i__54796_55307 < count__54795_55306)){
var vec__54833_55308 = chunk__54794_55305.cljs$core$IIndexed$_nth$arity$2(null,i__54796_55307);
var orig_type_55309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54833_55308,(0),null);
var f_55310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54833_55308,(1),null);
var seq__54797_55311 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55309,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55309,cljs.core.identity])));
var chunk__54799_55312 = null;
var count__54800_55313 = (0);
var i__54801_55314 = (0);
while(true){
if((i__54801_55314 < count__54800_55313)){
var vec__54842_55315 = chunk__54799_55312.cljs$core$IIndexed$_nth$arity$2(null,i__54801_55314);
var actual_type_55316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55315,(0),null);
var __55317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55315,(1),null);
var keys_55318 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55316,f_55310], null);
var canonical_f_55319 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55318);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55318], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55316),canonical_f_55319);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55316),canonical_f_55319);
}


var G__55320 = seq__54797_55311;
var G__55321 = chunk__54799_55312;
var G__55322 = count__54800_55313;
var G__55323 = (i__54801_55314 + (1));
seq__54797_55311 = G__55320;
chunk__54799_55312 = G__55321;
count__54800_55313 = G__55322;
i__54801_55314 = G__55323;
continue;
} else {
var temp__5735__auto___55324 = cljs.core.seq(seq__54797_55311);
if(temp__5735__auto___55324){
var seq__54797_55325__$1 = temp__5735__auto___55324;
if(cljs.core.chunked_seq_QMARK_(seq__54797_55325__$1)){
var c__4556__auto___55326 = cljs.core.chunk_first(seq__54797_55325__$1);
var G__55327 = cljs.core.chunk_rest(seq__54797_55325__$1);
var G__55328 = c__4556__auto___55326;
var G__55329 = cljs.core.count(c__4556__auto___55326);
var G__55330 = (0);
seq__54797_55311 = G__55327;
chunk__54799_55312 = G__55328;
count__54800_55313 = G__55329;
i__54801_55314 = G__55330;
continue;
} else {
var vec__54845_55331 = cljs.core.first(seq__54797_55325__$1);
var actual_type_55332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55331,(0),null);
var __55333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55331,(1),null);
var keys_55334 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55332,f_55310], null);
var canonical_f_55335 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55334);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55334], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55332),canonical_f_55335);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55332),canonical_f_55335);
}


var G__55336 = cljs.core.next(seq__54797_55325__$1);
var G__55337 = null;
var G__55338 = (0);
var G__55339 = (0);
seq__54797_55311 = G__55336;
chunk__54799_55312 = G__55337;
count__54800_55313 = G__55338;
i__54801_55314 = G__55339;
continue;
}
} else {
}
}
break;
}

var G__55340 = seq__54787_55304;
var G__55341 = chunk__54794_55305;
var G__55342 = count__54795_55306;
var G__55343 = (i__54796_55307 + (1));
seq__54787_55304 = G__55340;
chunk__54794_55305 = G__55341;
count__54795_55306 = G__55342;
i__54796_55307 = G__55343;
continue;
} else {
var temp__5735__auto___55344 = cljs.core.seq(seq__54787_55304);
if(temp__5735__auto___55344){
var seq__54787_55345__$1 = temp__5735__auto___55344;
if(cljs.core.chunked_seq_QMARK_(seq__54787_55345__$1)){
var c__4556__auto___55346 = cljs.core.chunk_first(seq__54787_55345__$1);
var G__55347 = cljs.core.chunk_rest(seq__54787_55345__$1);
var G__55348 = c__4556__auto___55346;
var G__55349 = cljs.core.count(c__4556__auto___55346);
var G__55350 = (0);
seq__54787_55304 = G__55347;
chunk__54794_55305 = G__55348;
count__54795_55306 = G__55349;
i__54796_55307 = G__55350;
continue;
} else {
var vec__54848_55351 = cljs.core.first(seq__54787_55345__$1);
var orig_type_55352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54848_55351,(0),null);
var f_55353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54848_55351,(1),null);
var seq__54788_55354 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55352,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55352,cljs.core.identity])));
var chunk__54790_55355 = null;
var count__54791_55356 = (0);
var i__54792_55357 = (0);
while(true){
if((i__54792_55357 < count__54791_55356)){
var vec__54857_55358 = chunk__54790_55355.cljs$core$IIndexed$_nth$arity$2(null,i__54792_55357);
var actual_type_55359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55358,(0),null);
var __55360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55358,(1),null);
var keys_55361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55359,f_55353], null);
var canonical_f_55362 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55361);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55361], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55359),canonical_f_55362);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55359),canonical_f_55362);
}


var G__55363 = seq__54788_55354;
var G__55364 = chunk__54790_55355;
var G__55365 = count__54791_55356;
var G__55366 = (i__54792_55357 + (1));
seq__54788_55354 = G__55363;
chunk__54790_55355 = G__55364;
count__54791_55356 = G__55365;
i__54792_55357 = G__55366;
continue;
} else {
var temp__5735__auto___55367__$1 = cljs.core.seq(seq__54788_55354);
if(temp__5735__auto___55367__$1){
var seq__54788_55368__$1 = temp__5735__auto___55367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54788_55368__$1)){
var c__4556__auto___55369 = cljs.core.chunk_first(seq__54788_55368__$1);
var G__55370 = cljs.core.chunk_rest(seq__54788_55368__$1);
var G__55371 = c__4556__auto___55369;
var G__55372 = cljs.core.count(c__4556__auto___55369);
var G__55373 = (0);
seq__54788_55354 = G__55370;
chunk__54790_55355 = G__55371;
count__54791_55356 = G__55372;
i__54792_55357 = G__55373;
continue;
} else {
var vec__54860_55374 = cljs.core.first(seq__54788_55368__$1);
var actual_type_55375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54860_55374,(0),null);
var __55376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54860_55374,(1),null);
var keys_55377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55303,actual_type_55375,f_55353], null);
var canonical_f_55378 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55302),keys_55377);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55302,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55377], 0));

if(cljs.core.truth_(elem_55302.removeEventListener)){
elem_55302.removeEventListener(cljs.core.name(actual_type_55375),canonical_f_55378);
} else {
elem_55302.detachEvent(cljs.core.name(actual_type_55375),canonical_f_55378);
}


var G__55379 = cljs.core.next(seq__54788_55368__$1);
var G__55380 = null;
var G__55381 = (0);
var G__55382 = (0);
seq__54788_55354 = G__55379;
chunk__54790_55355 = G__55380;
count__54791_55356 = G__55381;
i__54792_55357 = G__55382;
continue;
}
} else {
}
}
break;
}

var G__55383 = cljs.core.next(seq__54787_55345__$1);
var G__55384 = null;
var G__55385 = (0);
var G__55386 = (0);
seq__54787_55304 = G__55383;
chunk__54794_55305 = G__55384;
count__54795_55306 = G__55385;
i__54796_55307 = G__55386;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54782){
var G__54783 = cljs.core.first(seq54782);
var seq54782__$1 = cljs.core.next(seq54782);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54783,seq54782__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55387 = arguments.length;
var i__4737__auto___55388 = (0);
while(true){
if((i__4737__auto___55388 < len__4736__auto___55387)){
args__4742__auto__.push((arguments[i__4737__auto___55388]));

var G__55389 = (i__4737__auto___55388 + (1));
i__4737__auto___55388 = G__55389;
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

var vec__54865_55390 = dommy.core.elem_and_selector(elem_sel);
var elem_55391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865_55390,(0),null);
var selector_55392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865_55390,(1),null);
var seq__54868_55393 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54869_55394 = null;
var count__54870_55395 = (0);
var i__54871_55396 = (0);
while(true){
if((i__54871_55396 < count__54870_55395)){
var vec__54878_55397 = chunk__54869_55394.cljs$core$IIndexed$_nth$arity$2(null,i__54871_55396);
var type_55398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55397,(0),null);
var f_55399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55397,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55398,((function (seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54878_55397,type_55398,f_55399,vec__54865_55390,elem_55391,selector_55392){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55398,dommy$core$this_fn], 0));

return (f_55399.cljs$core$IFn$_invoke$arity$1 ? f_55399.cljs$core$IFn$_invoke$arity$1(e) : f_55399.call(null,e));
});})(seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54878_55397,type_55398,f_55399,vec__54865_55390,elem_55391,selector_55392))
], 0));


var G__55400 = seq__54868_55393;
var G__55401 = chunk__54869_55394;
var G__55402 = count__54870_55395;
var G__55403 = (i__54871_55396 + (1));
seq__54868_55393 = G__55400;
chunk__54869_55394 = G__55401;
count__54870_55395 = G__55402;
i__54871_55396 = G__55403;
continue;
} else {
var temp__5735__auto___55404 = cljs.core.seq(seq__54868_55393);
if(temp__5735__auto___55404){
var seq__54868_55405__$1 = temp__5735__auto___55404;
if(cljs.core.chunked_seq_QMARK_(seq__54868_55405__$1)){
var c__4556__auto___55406 = cljs.core.chunk_first(seq__54868_55405__$1);
var G__55407 = cljs.core.chunk_rest(seq__54868_55405__$1);
var G__55408 = c__4556__auto___55406;
var G__55409 = cljs.core.count(c__4556__auto___55406);
var G__55410 = (0);
seq__54868_55393 = G__55407;
chunk__54869_55394 = G__55408;
count__54870_55395 = G__55409;
i__54871_55396 = G__55410;
continue;
} else {
var vec__54881_55411 = cljs.core.first(seq__54868_55405__$1);
var type_55412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54881_55411,(0),null);
var f_55413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54881_55411,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55412,((function (seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54881_55411,type_55412,f_55413,seq__54868_55405__$1,temp__5735__auto___55404,vec__54865_55390,elem_55391,selector_55392){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55412,dommy$core$this_fn], 0));

return (f_55413.cljs$core$IFn$_invoke$arity$1 ? f_55413.cljs$core$IFn$_invoke$arity$1(e) : f_55413.call(null,e));
});})(seq__54868_55393,chunk__54869_55394,count__54870_55395,i__54871_55396,vec__54881_55411,type_55412,f_55413,seq__54868_55405__$1,temp__5735__auto___55404,vec__54865_55390,elem_55391,selector_55392))
], 0));


var G__55414 = cljs.core.next(seq__54868_55405__$1);
var G__55415 = null;
var G__55416 = (0);
var G__55417 = (0);
seq__54868_55393 = G__55414;
chunk__54869_55394 = G__55415;
count__54870_55395 = G__55416;
i__54871_55396 = G__55417;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54863){
var G__54864 = cljs.core.first(seq54863);
var seq54863__$1 = cljs.core.next(seq54863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54864,seq54863__$1);
}));


//# sourceMappingURL=dommy.core.js.map
