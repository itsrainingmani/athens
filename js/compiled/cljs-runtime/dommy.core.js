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
var G__54510 = arguments.length;
switch (G__54510) {
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
var G__54520 = arguments.length;
switch (G__54520) {
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
var G__54523 = arguments.length;
switch (G__54523) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54521_SHARP_){
return (!((p1__54521_SHARP_ === base)));
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
var seq__54530_54893 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54531_54894 = null;
var count__54532_54895 = (0);
var i__54533_54896 = (0);
while(true){
if((i__54533_54896 < count__54532_54895)){
var vec__54540_54897 = chunk__54531_54894.cljs$core$IIndexed$_nth$arity$2(null,i__54533_54896);
var k_54898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54540_54897,(0),null);
var v_54899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54540_54897,(1),null);
style.setProperty(dommy.utils.as_str(k_54898),v_54899);


var G__54900 = seq__54530_54893;
var G__54901 = chunk__54531_54894;
var G__54902 = count__54532_54895;
var G__54903 = (i__54533_54896 + (1));
seq__54530_54893 = G__54900;
chunk__54531_54894 = G__54901;
count__54532_54895 = G__54902;
i__54533_54896 = G__54903;
continue;
} else {
var temp__5735__auto___54904 = cljs.core.seq(seq__54530_54893);
if(temp__5735__auto___54904){
var seq__54530_54905__$1 = temp__5735__auto___54904;
if(cljs.core.chunked_seq_QMARK_(seq__54530_54905__$1)){
var c__4556__auto___54906 = cljs.core.chunk_first(seq__54530_54905__$1);
var G__54907 = cljs.core.chunk_rest(seq__54530_54905__$1);
var G__54908 = c__4556__auto___54906;
var G__54909 = cljs.core.count(c__4556__auto___54906);
var G__54910 = (0);
seq__54530_54893 = G__54907;
chunk__54531_54894 = G__54908;
count__54532_54895 = G__54909;
i__54533_54896 = G__54910;
continue;
} else {
var vec__54543_54911 = cljs.core.first(seq__54530_54905__$1);
var k_54912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54543_54911,(0),null);
var v_54913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54543_54911,(1),null);
style.setProperty(dommy.utils.as_str(k_54912),v_54913);


var G__54914 = cljs.core.next(seq__54530_54905__$1);
var G__54915 = null;
var G__54916 = (0);
var G__54917 = (0);
seq__54530_54893 = G__54914;
chunk__54531_54894 = G__54915;
count__54532_54895 = G__54916;
i__54533_54896 = G__54917;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54528){
var G__54529 = cljs.core.first(seq54528);
var seq54528__$1 = cljs.core.next(seq54528);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54529,seq54528__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54919 = arguments.length;
var i__4737__auto___54920 = (0);
while(true){
if((i__4737__auto___54920 < len__4736__auto___54919)){
args__4742__auto__.push((arguments[i__4737__auto___54920]));

var G__54921 = (i__4737__auto___54920 + (1));
i__4737__auto___54920 = G__54921;
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
var seq__54548_54922 = cljs.core.seq(keywords);
var chunk__54549_54923 = null;
var count__54550_54924 = (0);
var i__54551_54925 = (0);
while(true){
if((i__54551_54925 < count__54550_54924)){
var kw_54926 = chunk__54549_54923.cljs$core$IIndexed$_nth$arity$2(null,i__54551_54925);
style.removeProperty(dommy.utils.as_str(kw_54926));


var G__54927 = seq__54548_54922;
var G__54928 = chunk__54549_54923;
var G__54929 = count__54550_54924;
var G__54930 = (i__54551_54925 + (1));
seq__54548_54922 = G__54927;
chunk__54549_54923 = G__54928;
count__54550_54924 = G__54929;
i__54551_54925 = G__54930;
continue;
} else {
var temp__5735__auto___54931 = cljs.core.seq(seq__54548_54922);
if(temp__5735__auto___54931){
var seq__54548_54932__$1 = temp__5735__auto___54931;
if(cljs.core.chunked_seq_QMARK_(seq__54548_54932__$1)){
var c__4556__auto___54933 = cljs.core.chunk_first(seq__54548_54932__$1);
var G__54934 = cljs.core.chunk_rest(seq__54548_54932__$1);
var G__54935 = c__4556__auto___54933;
var G__54936 = cljs.core.count(c__4556__auto___54933);
var G__54937 = (0);
seq__54548_54922 = G__54934;
chunk__54549_54923 = G__54935;
count__54550_54924 = G__54936;
i__54551_54925 = G__54937;
continue;
} else {
var kw_54942 = cljs.core.first(seq__54548_54932__$1);
style.removeProperty(dommy.utils.as_str(kw_54942));


var G__54943 = cljs.core.next(seq__54548_54932__$1);
var G__54944 = null;
var G__54945 = (0);
var G__54946 = (0);
seq__54548_54922 = G__54943;
chunk__54549_54923 = G__54944;
count__54550_54924 = G__54945;
i__54551_54925 = G__54946;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54546){
var G__54547 = cljs.core.first(seq54546);
var seq54546__$1 = cljs.core.next(seq54546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54547,seq54546__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54947 = arguments.length;
var i__4737__auto___54948 = (0);
while(true){
if((i__4737__auto___54948 < len__4736__auto___54947)){
args__4742__auto__.push((arguments[i__4737__auto___54948]));

var G__54949 = (i__4737__auto___54948 + (1));
i__4737__auto___54948 = G__54949;
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

var seq__54554_54953 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54555_54954 = null;
var count__54556_54955 = (0);
var i__54557_54956 = (0);
while(true){
if((i__54557_54956 < count__54556_54955)){
var vec__54564_54958 = chunk__54555_54954.cljs$core$IIndexed$_nth$arity$2(null,i__54557_54956);
var k_54959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54564_54958,(0),null);
var v_54960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54564_54958,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54959,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54960),"px"].join('')], 0));


var G__54961 = seq__54554_54953;
var G__54962 = chunk__54555_54954;
var G__54963 = count__54556_54955;
var G__54964 = (i__54557_54956 + (1));
seq__54554_54953 = G__54961;
chunk__54555_54954 = G__54962;
count__54556_54955 = G__54963;
i__54557_54956 = G__54964;
continue;
} else {
var temp__5735__auto___54966 = cljs.core.seq(seq__54554_54953);
if(temp__5735__auto___54966){
var seq__54554_54967__$1 = temp__5735__auto___54966;
if(cljs.core.chunked_seq_QMARK_(seq__54554_54967__$1)){
var c__4556__auto___54968 = cljs.core.chunk_first(seq__54554_54967__$1);
var G__54969 = cljs.core.chunk_rest(seq__54554_54967__$1);
var G__54970 = c__4556__auto___54968;
var G__54971 = cljs.core.count(c__4556__auto___54968);
var G__54972 = (0);
seq__54554_54953 = G__54969;
chunk__54555_54954 = G__54970;
count__54556_54955 = G__54971;
i__54557_54956 = G__54972;
continue;
} else {
var vec__54567_54973 = cljs.core.first(seq__54554_54967__$1);
var k_54974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567_54973,(0),null);
var v_54975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567_54973,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54974,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54975),"px"].join('')], 0));


var G__54978 = cljs.core.next(seq__54554_54967__$1);
var G__54979 = null;
var G__54980 = (0);
var G__54981 = (0);
seq__54554_54953 = G__54978;
chunk__54555_54954 = G__54979;
count__54556_54955 = G__54980;
i__54557_54956 = G__54981;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54552){
var G__54553 = cljs.core.first(seq54552);
var seq54552__$1 = cljs.core.next(seq54552);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54553,seq54552__$1);
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
var G__54575 = arguments.length;
switch (G__54575) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54984 = arguments.length;
var i__4737__auto___54985 = (0);
while(true){
if((i__4737__auto___54985 < len__4736__auto___54984)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54985]));

var G__54986 = (i__4737__auto___54985 + (1));
i__4737__auto___54985 = G__54986;
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
var G__54576 = elem;
(G__54576[k__$1] = v);

return G__54576;
} else {
var G__54577 = elem;
G__54577.setAttribute(k__$1,v);

return G__54577;
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

var seq__54578_54988 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54579_54989 = null;
var count__54580_54990 = (0);
var i__54581_54991 = (0);
while(true){
if((i__54581_54991 < count__54580_54990)){
var vec__54588_54992 = chunk__54579_54989.cljs$core$IIndexed$_nth$arity$2(null,i__54581_54991);
var k_54993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588_54992,(0),null);
var v_54994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588_54992,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54993__$1,v_54994__$1);


var G__54995 = seq__54578_54988;
var G__54996 = chunk__54579_54989;
var G__54997 = count__54580_54990;
var G__54998 = (i__54581_54991 + (1));
seq__54578_54988 = G__54995;
chunk__54579_54989 = G__54996;
count__54580_54990 = G__54997;
i__54581_54991 = G__54998;
continue;
} else {
var temp__5735__auto___54999 = cljs.core.seq(seq__54578_54988);
if(temp__5735__auto___54999){
var seq__54578_55000__$1 = temp__5735__auto___54999;
if(cljs.core.chunked_seq_QMARK_(seq__54578_55000__$1)){
var c__4556__auto___55001 = cljs.core.chunk_first(seq__54578_55000__$1);
var G__55002 = cljs.core.chunk_rest(seq__54578_55000__$1);
var G__55003 = c__4556__auto___55001;
var G__55004 = cljs.core.count(c__4556__auto___55001);
var G__55005 = (0);
seq__54578_54988 = G__55002;
chunk__54579_54989 = G__55003;
count__54580_54990 = G__55004;
i__54581_54991 = G__55005;
continue;
} else {
var vec__54591_55006 = cljs.core.first(seq__54578_55000__$1);
var k_55007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54591_55006,(0),null);
var v_55008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54591_55006,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_55007__$1,v_55008__$1);


var G__55009 = cljs.core.next(seq__54578_55000__$1);
var G__55010 = null;
var G__55011 = (0);
var G__55012 = (0);
seq__54578_54988 = G__55009;
chunk__54579_54989 = G__55010;
count__54580_54990 = G__55011;
i__54581_54991 = G__55012;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54571){
var G__54572 = cljs.core.first(seq54571);
var seq54571__$1 = cljs.core.next(seq54571);
var G__54573 = cljs.core.first(seq54571__$1);
var seq54571__$2 = cljs.core.next(seq54571__$1);
var G__54574 = cljs.core.first(seq54571__$2);
var seq54571__$3 = cljs.core.next(seq54571__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54572,G__54573,G__54574,seq54571__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54598 = arguments.length;
switch (G__54598) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55017 = arguments.length;
var i__4737__auto___55018 = (0);
while(true){
if((i__4737__auto___55018 < len__4736__auto___55017)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55018]));

var G__55019 = (i__4737__auto___55018 + (1));
i__4737__auto___55018 = G__55019;
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
var k_55020__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54599.cljs$core$IFn$_invoke$arity$1 ? fexpr__54599.cljs$core$IFn$_invoke$arity$1(k_55020__$1) : fexpr__54599.call(null,k_55020__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55020__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54600_55021 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54601_55022 = null;
var count__54602_55023 = (0);
var i__54603_55024 = (0);
while(true){
if((i__54603_55024 < count__54602_55023)){
var k_55025__$1 = chunk__54601_55022.cljs$core$IIndexed$_nth$arity$2(null,i__54603_55024);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55025__$1);


var G__55026 = seq__54600_55021;
var G__55027 = chunk__54601_55022;
var G__55028 = count__54602_55023;
var G__55029 = (i__54603_55024 + (1));
seq__54600_55021 = G__55026;
chunk__54601_55022 = G__55027;
count__54602_55023 = G__55028;
i__54603_55024 = G__55029;
continue;
} else {
var temp__5735__auto___55030 = cljs.core.seq(seq__54600_55021);
if(temp__5735__auto___55030){
var seq__54600_55031__$1 = temp__5735__auto___55030;
if(cljs.core.chunked_seq_QMARK_(seq__54600_55031__$1)){
var c__4556__auto___55032 = cljs.core.chunk_first(seq__54600_55031__$1);
var G__55033 = cljs.core.chunk_rest(seq__54600_55031__$1);
var G__55034 = c__4556__auto___55032;
var G__55035 = cljs.core.count(c__4556__auto___55032);
var G__55036 = (0);
seq__54600_55021 = G__55033;
chunk__54601_55022 = G__55034;
count__54602_55023 = G__55035;
i__54603_55024 = G__55036;
continue;
} else {
var k_55037__$1 = cljs.core.first(seq__54600_55031__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55037__$1);


var G__55038 = cljs.core.next(seq__54600_55031__$1);
var G__55039 = null;
var G__55040 = (0);
var G__55041 = (0);
seq__54600_55021 = G__55038;
chunk__54601_55022 = G__55039;
count__54602_55023 = G__55040;
i__54603_55024 = G__55041;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54595){
var G__54596 = cljs.core.first(seq54595);
var seq54595__$1 = cljs.core.next(seq54595);
var G__54597 = cljs.core.first(seq54595__$1);
var seq54595__$2 = cljs.core.next(seq54595__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54596,G__54597,seq54595__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54605 = arguments.length;
switch (G__54605) {
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
var G__54610 = arguments.length;
switch (G__54610) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55044 = arguments.length;
var i__4737__auto___55045 = (0);
while(true){
if((i__4737__auto___55045 < len__4736__auto___55044)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55045]));

var G__55046 = (i__4737__auto___55045 + (1));
i__4737__auto___55045 = G__55046;
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
var temp__5733__auto___55047 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55047)){
var class_list_55048 = temp__5733__auto___55047;
var seq__54611_55049 = cljs.core.seq(classes__$1);
var chunk__54612_55050 = null;
var count__54613_55051 = (0);
var i__54614_55052 = (0);
while(true){
if((i__54614_55052 < count__54613_55051)){
var c_55053 = chunk__54612_55050.cljs$core$IIndexed$_nth$arity$2(null,i__54614_55052);
class_list_55048.add(c_55053);


var G__55054 = seq__54611_55049;
var G__55055 = chunk__54612_55050;
var G__55056 = count__54613_55051;
var G__55057 = (i__54614_55052 + (1));
seq__54611_55049 = G__55054;
chunk__54612_55050 = G__55055;
count__54613_55051 = G__55056;
i__54614_55052 = G__55057;
continue;
} else {
var temp__5735__auto___55058 = cljs.core.seq(seq__54611_55049);
if(temp__5735__auto___55058){
var seq__54611_55059__$1 = temp__5735__auto___55058;
if(cljs.core.chunked_seq_QMARK_(seq__54611_55059__$1)){
var c__4556__auto___55060 = cljs.core.chunk_first(seq__54611_55059__$1);
var G__55061 = cljs.core.chunk_rest(seq__54611_55059__$1);
var G__55062 = c__4556__auto___55060;
var G__55063 = cljs.core.count(c__4556__auto___55060);
var G__55064 = (0);
seq__54611_55049 = G__55061;
chunk__54612_55050 = G__55062;
count__54613_55051 = G__55063;
i__54614_55052 = G__55064;
continue;
} else {
var c_55065 = cljs.core.first(seq__54611_55059__$1);
class_list_55048.add(c_55065);


var G__55066 = cljs.core.next(seq__54611_55059__$1);
var G__55067 = null;
var G__55068 = (0);
var G__55069 = (0);
seq__54611_55049 = G__55066;
chunk__54612_55050 = G__55067;
count__54613_55051 = G__55068;
i__54614_55052 = G__55069;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54615_55070 = cljs.core.seq(classes__$1);
var chunk__54616_55071 = null;
var count__54617_55072 = (0);
var i__54618_55073 = (0);
while(true){
if((i__54618_55073 < count__54617_55072)){
var c_55074 = chunk__54616_55071.cljs$core$IIndexed$_nth$arity$2(null,i__54618_55073);
var class_name_55075 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55075,c_55074))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55075 === ""))?c_55074:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55075)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55074)].join('')));
}


var G__55080 = seq__54615_55070;
var G__55081 = chunk__54616_55071;
var G__55082 = count__54617_55072;
var G__55083 = (i__54618_55073 + (1));
seq__54615_55070 = G__55080;
chunk__54616_55071 = G__55081;
count__54617_55072 = G__55082;
i__54618_55073 = G__55083;
continue;
} else {
var temp__5735__auto___55084 = cljs.core.seq(seq__54615_55070);
if(temp__5735__auto___55084){
var seq__54615_55085__$1 = temp__5735__auto___55084;
if(cljs.core.chunked_seq_QMARK_(seq__54615_55085__$1)){
var c__4556__auto___55090 = cljs.core.chunk_first(seq__54615_55085__$1);
var G__55091 = cljs.core.chunk_rest(seq__54615_55085__$1);
var G__55092 = c__4556__auto___55090;
var G__55093 = cljs.core.count(c__4556__auto___55090);
var G__55094 = (0);
seq__54615_55070 = G__55091;
chunk__54616_55071 = G__55092;
count__54617_55072 = G__55093;
i__54618_55073 = G__55094;
continue;
} else {
var c_55095 = cljs.core.first(seq__54615_55085__$1);
var class_name_55100 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55100,c_55095))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55100 === ""))?c_55095:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55100)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55095)].join('')));
}


var G__55101 = cljs.core.next(seq__54615_55085__$1);
var G__55102 = null;
var G__55103 = (0);
var G__55104 = (0);
seq__54615_55070 = G__55101;
chunk__54616_55071 = G__55102;
count__54617_55072 = G__55103;
i__54618_55073 = G__55104;
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
var seq__54619_55105 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54620_55106 = null;
var count__54621_55107 = (0);
var i__54622_55108 = (0);
while(true){
if((i__54622_55108 < count__54621_55107)){
var c_55109 = chunk__54620_55106.cljs$core$IIndexed$_nth$arity$2(null,i__54622_55108);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55109);


var G__55110 = seq__54619_55105;
var G__55111 = chunk__54620_55106;
var G__55112 = count__54621_55107;
var G__55113 = (i__54622_55108 + (1));
seq__54619_55105 = G__55110;
chunk__54620_55106 = G__55111;
count__54621_55107 = G__55112;
i__54622_55108 = G__55113;
continue;
} else {
var temp__5735__auto___55114 = cljs.core.seq(seq__54619_55105);
if(temp__5735__auto___55114){
var seq__54619_55116__$1 = temp__5735__auto___55114;
if(cljs.core.chunked_seq_QMARK_(seq__54619_55116__$1)){
var c__4556__auto___55117 = cljs.core.chunk_first(seq__54619_55116__$1);
var G__55118 = cljs.core.chunk_rest(seq__54619_55116__$1);
var G__55119 = c__4556__auto___55117;
var G__55120 = cljs.core.count(c__4556__auto___55117);
var G__55121 = (0);
seq__54619_55105 = G__55118;
chunk__54620_55106 = G__55119;
count__54621_55107 = G__55120;
i__54622_55108 = G__55121;
continue;
} else {
var c_55122 = cljs.core.first(seq__54619_55116__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55122);


var G__55123 = cljs.core.next(seq__54619_55116__$1);
var G__55124 = null;
var G__55125 = (0);
var G__55126 = (0);
seq__54619_55105 = G__55123;
chunk__54620_55106 = G__55124;
count__54621_55107 = G__55125;
i__54622_55108 = G__55126;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54607){
var G__54608 = cljs.core.first(seq54607);
var seq54607__$1 = cljs.core.next(seq54607);
var G__54609 = cljs.core.first(seq54607__$1);
var seq54607__$2 = cljs.core.next(seq54607__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54608,G__54609,seq54607__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54627 = arguments.length;
switch (G__54627) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55129 = arguments.length;
var i__4737__auto___55130 = (0);
while(true){
if((i__4737__auto___55130 < len__4736__auto___55129)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55130]));

var G__55131 = (i__4737__auto___55130 + (1));
i__4737__auto___55130 = G__55131;
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
var class_list_55136 = temp__5733__auto___55134;
class_list_55136.remove(c__$1);
} else {
var class_name_55137 = dommy.core.class$(elem);
var new_class_name_55138 = dommy.utils.remove_class_str(class_name_55137,c__$1);
if((class_name_55137 === new_class_name_55138)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55138);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54628 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54629 = null;
var count__54630 = (0);
var i__54631 = (0);
while(true){
if((i__54631 < count__54630)){
var c = chunk__54629.cljs$core$IIndexed$_nth$arity$2(null,i__54631);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55139 = seq__54628;
var G__55140 = chunk__54629;
var G__55141 = count__54630;
var G__55142 = (i__54631 + (1));
seq__54628 = G__55139;
chunk__54629 = G__55140;
count__54630 = G__55141;
i__54631 = G__55142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54628);
if(temp__5735__auto__){
var seq__54628__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54628__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54628__$1);
var G__55143 = cljs.core.chunk_rest(seq__54628__$1);
var G__55144 = c__4556__auto__;
var G__55145 = cljs.core.count(c__4556__auto__);
var G__55146 = (0);
seq__54628 = G__55143;
chunk__54629 = G__55144;
count__54630 = G__55145;
i__54631 = G__55146;
continue;
} else {
var c = cljs.core.first(seq__54628__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55147 = cljs.core.next(seq__54628__$1);
var G__55148 = null;
var G__55149 = (0);
var G__55150 = (0);
seq__54628 = G__55147;
chunk__54629 = G__55148;
count__54630 = G__55149;
i__54631 = G__55150;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54624){
var G__54625 = cljs.core.first(seq54624);
var seq54624__$1 = cljs.core.next(seq54624);
var G__54626 = cljs.core.first(seq54624__$1);
var seq54624__$2 = cljs.core.next(seq54624__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54625,G__54626,seq54624__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54633 = arguments.length;
switch (G__54633) {
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
var temp__5733__auto___55152 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55152)){
var class_list_55153 = temp__5733__auto___55152;
class_list_55153.toggle(c__$1);
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
var G__54635 = arguments.length;
switch (G__54635) {
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
var G__54637 = arguments.length;
switch (G__54637) {
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
var G__54642 = arguments.length;
switch (G__54642) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55157 = arguments.length;
var i__4737__auto___55158 = (0);
while(true){
if((i__4737__auto___55158 < len__4736__auto___55157)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55158]));

var G__55159 = (i__4737__auto___55158 + (1));
i__4737__auto___55158 = G__55159;
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
var G__54643 = parent;
G__54643.appendChild(child);

return G__54643;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54644_55160 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54645_55161 = null;
var count__54646_55162 = (0);
var i__54647_55163 = (0);
while(true){
if((i__54647_55163 < count__54646_55162)){
var c_55164 = chunk__54645_55161.cljs$core$IIndexed$_nth$arity$2(null,i__54647_55163);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55164);


var G__55165 = seq__54644_55160;
var G__55166 = chunk__54645_55161;
var G__55167 = count__54646_55162;
var G__55168 = (i__54647_55163 + (1));
seq__54644_55160 = G__55165;
chunk__54645_55161 = G__55166;
count__54646_55162 = G__55167;
i__54647_55163 = G__55168;
continue;
} else {
var temp__5735__auto___55169 = cljs.core.seq(seq__54644_55160);
if(temp__5735__auto___55169){
var seq__54644_55170__$1 = temp__5735__auto___55169;
if(cljs.core.chunked_seq_QMARK_(seq__54644_55170__$1)){
var c__4556__auto___55171 = cljs.core.chunk_first(seq__54644_55170__$1);
var G__55172 = cljs.core.chunk_rest(seq__54644_55170__$1);
var G__55173 = c__4556__auto___55171;
var G__55174 = cljs.core.count(c__4556__auto___55171);
var G__55175 = (0);
seq__54644_55160 = G__55172;
chunk__54645_55161 = G__55173;
count__54646_55162 = G__55174;
i__54647_55163 = G__55175;
continue;
} else {
var c_55176 = cljs.core.first(seq__54644_55170__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55176);


var G__55177 = cljs.core.next(seq__54644_55170__$1);
var G__55178 = null;
var G__55179 = (0);
var G__55180 = (0);
seq__54644_55160 = G__55177;
chunk__54645_55161 = G__55178;
count__54646_55162 = G__55179;
i__54647_55163 = G__55180;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54639){
var G__54640 = cljs.core.first(seq54639);
var seq54639__$1 = cljs.core.next(seq54639);
var G__54641 = cljs.core.first(seq54639__$1);
var seq54639__$2 = cljs.core.next(seq54639__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54640,G__54641,seq54639__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54652 = arguments.length;
switch (G__54652) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55182 = arguments.length;
var i__4737__auto___55183 = (0);
while(true){
if((i__4737__auto___55183 < len__4736__auto___55182)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55183]));

var G__55184 = (i__4737__auto___55183 + (1));
i__4737__auto___55183 = G__55184;
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
var G__54653 = parent;
G__54653.insertBefore(child,parent.firstChild);

return G__54653;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54654_55185 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54655_55186 = null;
var count__54656_55187 = (0);
var i__54657_55188 = (0);
while(true){
if((i__54657_55188 < count__54656_55187)){
var c_55189 = chunk__54655_55186.cljs$core$IIndexed$_nth$arity$2(null,i__54657_55188);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55189);


var G__55190 = seq__54654_55185;
var G__55191 = chunk__54655_55186;
var G__55192 = count__54656_55187;
var G__55193 = (i__54657_55188 + (1));
seq__54654_55185 = G__55190;
chunk__54655_55186 = G__55191;
count__54656_55187 = G__55192;
i__54657_55188 = G__55193;
continue;
} else {
var temp__5735__auto___55194 = cljs.core.seq(seq__54654_55185);
if(temp__5735__auto___55194){
var seq__54654_55195__$1 = temp__5735__auto___55194;
if(cljs.core.chunked_seq_QMARK_(seq__54654_55195__$1)){
var c__4556__auto___55196 = cljs.core.chunk_first(seq__54654_55195__$1);
var G__55197 = cljs.core.chunk_rest(seq__54654_55195__$1);
var G__55198 = c__4556__auto___55196;
var G__55199 = cljs.core.count(c__4556__auto___55196);
var G__55200 = (0);
seq__54654_55185 = G__55197;
chunk__54655_55186 = G__55198;
count__54656_55187 = G__55199;
i__54657_55188 = G__55200;
continue;
} else {
var c_55201 = cljs.core.first(seq__54654_55195__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55201);


var G__55202 = cljs.core.next(seq__54654_55195__$1);
var G__55203 = null;
var G__55204 = (0);
var G__55205 = (0);
seq__54654_55185 = G__55202;
chunk__54655_55186 = G__55203;
count__54656_55187 = G__55204;
i__54657_55188 = G__55205;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54649){
var G__54650 = cljs.core.first(seq54649);
var seq54649__$1 = cljs.core.next(seq54649);
var G__54651 = cljs.core.first(seq54649__$1);
var seq54649__$2 = cljs.core.next(seq54649__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54650,G__54651,seq54649__$2);
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
var temp__5733__auto___55206 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55206)){
var next_55207 = temp__5733__auto___55206;
dommy.core.insert_before_BANG_(elem,next_55207);
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
var G__54659 = arguments.length;
switch (G__54659) {
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
var G__54660 = p;
G__54660.removeChild(elem);

return G__54660;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54661){
var vec__54662 = p__54661;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54662,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54662,(1),null);
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
var len__4736__auto___55209 = arguments.length;
var i__4737__auto___55210 = (0);
while(true){
if((i__4737__auto___55210 < len__4736__auto___55209)){
args__4742__auto__.push((arguments[i__4737__auto___55210]));

var G__55211 = (i__4737__auto___55210 + (1));
i__4737__auto___55210 = G__55211;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54665){
var G__54666 = cljs.core.first(seq54665);
var seq54665__$1 = cljs.core.next(seq54665);
var G__54667 = cljs.core.first(seq54665__$1);
var seq54665__$2 = cljs.core.next(seq54665__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54666,G__54667,seq54665__$2);
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
var len__4736__auto___55212 = arguments.length;
var i__4737__auto___55213 = (0);
while(true){
if((i__4737__auto___55213 < len__4736__auto___55212)){
args__4742__auto__.push((arguments[i__4737__auto___55213]));

var G__55214 = (i__4737__auto___55213 + (1));
i__4737__auto___55213 = G__55214;
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

var vec__54670_55215 = dommy.core.elem_and_selector(elem_sel);
var elem_55216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54670_55215,(0),null);
var selector_55217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54670_55215,(1),null);
var seq__54673_55218 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54680_55219 = null;
var count__54681_55220 = (0);
var i__54682_55221 = (0);
while(true){
if((i__54682_55221 < count__54681_55220)){
var vec__54735_55222 = chunk__54680_55219.cljs$core$IIndexed$_nth$arity$2(null,i__54682_55221);
var orig_type_55223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54735_55222,(0),null);
var f_55224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54735_55222,(1),null);
var seq__54683_55225 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55223,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55223,cljs.core.identity])));
var chunk__54685_55226 = null;
var count__54686_55227 = (0);
var i__54687_55228 = (0);
while(true){
if((i__54687_55228 < count__54686_55227)){
var vec__54748_55229 = chunk__54685_55226.cljs$core$IIndexed$_nth$arity$2(null,i__54687_55228);
var actual_type_55230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54748_55229,(0),null);
var factory_55231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54748_55229,(1),null);
var canonical_f_55232 = (function (){var G__54752 = (factory_55231.cljs$core$IFn$_invoke$arity$1 ? factory_55231.cljs$core$IFn$_invoke$arity$1(f_55224) : factory_55231.call(null,f_55224));
var fexpr__54751 = (cljs.core.truth_(selector_55217)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55216,selector_55217):cljs.core.identity);
return (fexpr__54751.cljs$core$IFn$_invoke$arity$1 ? fexpr__54751.cljs$core$IFn$_invoke$arity$1(G__54752) : fexpr__54751.call(null,G__54752));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55216,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55217,actual_type_55230,f_55224], null),canonical_f_55232], 0));

if(cljs.core.truth_(elem_55216.addEventListener)){
elem_55216.addEventListener(cljs.core.name(actual_type_55230),canonical_f_55232);
} else {
elem_55216.attachEvent(cljs.core.name(actual_type_55230),canonical_f_55232);
}


var G__55233 = seq__54683_55225;
var G__55234 = chunk__54685_55226;
var G__55235 = count__54686_55227;
var G__55236 = (i__54687_55228 + (1));
seq__54683_55225 = G__55233;
chunk__54685_55226 = G__55234;
count__54686_55227 = G__55235;
i__54687_55228 = G__55236;
continue;
} else {
var temp__5735__auto___55237 = cljs.core.seq(seq__54683_55225);
if(temp__5735__auto___55237){
var seq__54683_55238__$1 = temp__5735__auto___55237;
if(cljs.core.chunked_seq_QMARK_(seq__54683_55238__$1)){
var c__4556__auto___55239 = cljs.core.chunk_first(seq__54683_55238__$1);
var G__55240 = cljs.core.chunk_rest(seq__54683_55238__$1);
var G__55241 = c__4556__auto___55239;
var G__55242 = cljs.core.count(c__4556__auto___55239);
var G__55243 = (0);
seq__54683_55225 = G__55240;
chunk__54685_55226 = G__55241;
count__54686_55227 = G__55242;
i__54687_55228 = G__55243;
continue;
} else {
var vec__54753_55244 = cljs.core.first(seq__54683_55238__$1);
var actual_type_55245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54753_55244,(0),null);
var factory_55246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54753_55244,(1),null);
var canonical_f_55247 = (function (){var G__54757 = (factory_55246.cljs$core$IFn$_invoke$arity$1 ? factory_55246.cljs$core$IFn$_invoke$arity$1(f_55224) : factory_55246.call(null,f_55224));
var fexpr__54756 = (cljs.core.truth_(selector_55217)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55216,selector_55217):cljs.core.identity);
return (fexpr__54756.cljs$core$IFn$_invoke$arity$1 ? fexpr__54756.cljs$core$IFn$_invoke$arity$1(G__54757) : fexpr__54756.call(null,G__54757));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55216,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55217,actual_type_55245,f_55224], null),canonical_f_55247], 0));

if(cljs.core.truth_(elem_55216.addEventListener)){
elem_55216.addEventListener(cljs.core.name(actual_type_55245),canonical_f_55247);
} else {
elem_55216.attachEvent(cljs.core.name(actual_type_55245),canonical_f_55247);
}


var G__55248 = cljs.core.next(seq__54683_55238__$1);
var G__55249 = null;
var G__55250 = (0);
var G__55251 = (0);
seq__54683_55225 = G__55248;
chunk__54685_55226 = G__55249;
count__54686_55227 = G__55250;
i__54687_55228 = G__55251;
continue;
}
} else {
}
}
break;
}

var G__55252 = seq__54673_55218;
var G__55253 = chunk__54680_55219;
var G__55254 = count__54681_55220;
var G__55255 = (i__54682_55221 + (1));
seq__54673_55218 = G__55252;
chunk__54680_55219 = G__55253;
count__54681_55220 = G__55254;
i__54682_55221 = G__55255;
continue;
} else {
var temp__5735__auto___55256 = cljs.core.seq(seq__54673_55218);
if(temp__5735__auto___55256){
var seq__54673_55257__$1 = temp__5735__auto___55256;
if(cljs.core.chunked_seq_QMARK_(seq__54673_55257__$1)){
var c__4556__auto___55258 = cljs.core.chunk_first(seq__54673_55257__$1);
var G__55259 = cljs.core.chunk_rest(seq__54673_55257__$1);
var G__55260 = c__4556__auto___55258;
var G__55261 = cljs.core.count(c__4556__auto___55258);
var G__55262 = (0);
seq__54673_55218 = G__55259;
chunk__54680_55219 = G__55260;
count__54681_55220 = G__55261;
i__54682_55221 = G__55262;
continue;
} else {
var vec__54758_55263 = cljs.core.first(seq__54673_55257__$1);
var orig_type_55264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758_55263,(0),null);
var f_55265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758_55263,(1),null);
var seq__54674_55266 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55264,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55264,cljs.core.identity])));
var chunk__54676_55267 = null;
var count__54677_55268 = (0);
var i__54678_55269 = (0);
while(true){
if((i__54678_55269 < count__54677_55268)){
var vec__54771_55270 = chunk__54676_55267.cljs$core$IIndexed$_nth$arity$2(null,i__54678_55269);
var actual_type_55271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54771_55270,(0),null);
var factory_55272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54771_55270,(1),null);
var canonical_f_55273 = (function (){var G__54775 = (factory_55272.cljs$core$IFn$_invoke$arity$1 ? factory_55272.cljs$core$IFn$_invoke$arity$1(f_55265) : factory_55272.call(null,f_55265));
var fexpr__54774 = (cljs.core.truth_(selector_55217)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55216,selector_55217):cljs.core.identity);
return (fexpr__54774.cljs$core$IFn$_invoke$arity$1 ? fexpr__54774.cljs$core$IFn$_invoke$arity$1(G__54775) : fexpr__54774.call(null,G__54775));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55216,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55217,actual_type_55271,f_55265], null),canonical_f_55273], 0));

if(cljs.core.truth_(elem_55216.addEventListener)){
elem_55216.addEventListener(cljs.core.name(actual_type_55271),canonical_f_55273);
} else {
elem_55216.attachEvent(cljs.core.name(actual_type_55271),canonical_f_55273);
}


var G__55274 = seq__54674_55266;
var G__55275 = chunk__54676_55267;
var G__55276 = count__54677_55268;
var G__55277 = (i__54678_55269 + (1));
seq__54674_55266 = G__55274;
chunk__54676_55267 = G__55275;
count__54677_55268 = G__55276;
i__54678_55269 = G__55277;
continue;
} else {
var temp__5735__auto___55278__$1 = cljs.core.seq(seq__54674_55266);
if(temp__5735__auto___55278__$1){
var seq__54674_55279__$1 = temp__5735__auto___55278__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54674_55279__$1)){
var c__4556__auto___55280 = cljs.core.chunk_first(seq__54674_55279__$1);
var G__55281 = cljs.core.chunk_rest(seq__54674_55279__$1);
var G__55282 = c__4556__auto___55280;
var G__55283 = cljs.core.count(c__4556__auto___55280);
var G__55284 = (0);
seq__54674_55266 = G__55281;
chunk__54676_55267 = G__55282;
count__54677_55268 = G__55283;
i__54678_55269 = G__55284;
continue;
} else {
var vec__54776_55285 = cljs.core.first(seq__54674_55279__$1);
var actual_type_55286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54776_55285,(0),null);
var factory_55287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54776_55285,(1),null);
var canonical_f_55288 = (function (){var G__54780 = (factory_55287.cljs$core$IFn$_invoke$arity$1 ? factory_55287.cljs$core$IFn$_invoke$arity$1(f_55265) : factory_55287.call(null,f_55265));
var fexpr__54779 = (cljs.core.truth_(selector_55217)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55216,selector_55217):cljs.core.identity);
return (fexpr__54779.cljs$core$IFn$_invoke$arity$1 ? fexpr__54779.cljs$core$IFn$_invoke$arity$1(G__54780) : fexpr__54779.call(null,G__54780));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55216,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55217,actual_type_55286,f_55265], null),canonical_f_55288], 0));

if(cljs.core.truth_(elem_55216.addEventListener)){
elem_55216.addEventListener(cljs.core.name(actual_type_55286),canonical_f_55288);
} else {
elem_55216.attachEvent(cljs.core.name(actual_type_55286),canonical_f_55288);
}


var G__55289 = cljs.core.next(seq__54674_55279__$1);
var G__55290 = null;
var G__55291 = (0);
var G__55292 = (0);
seq__54674_55266 = G__55289;
chunk__54676_55267 = G__55290;
count__54677_55268 = G__55291;
i__54678_55269 = G__55292;
continue;
}
} else {
}
}
break;
}

var G__55293 = cljs.core.next(seq__54673_55257__$1);
var G__55294 = null;
var G__55295 = (0);
var G__55296 = (0);
seq__54673_55218 = G__55293;
chunk__54680_55219 = G__55294;
count__54681_55220 = G__55295;
i__54682_55221 = G__55296;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54668){
var G__54669 = cljs.core.first(seq54668);
var seq54668__$1 = cljs.core.next(seq54668);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54669,seq54668__$1);
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
var len__4736__auto___55297 = arguments.length;
var i__4737__auto___55298 = (0);
while(true){
if((i__4737__auto___55298 < len__4736__auto___55297)){
args__4742__auto__.push((arguments[i__4737__auto___55298]));

var G__55299 = (i__4737__auto___55298 + (1));
i__4737__auto___55298 = G__55299;
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

var vec__54783_55300 = dommy.core.elem_and_selector(elem_sel);
var elem_55301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54783_55300,(0),null);
var selector_55302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54783_55300,(1),null);
var seq__54786_55303 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54793_55304 = null;
var count__54794_55305 = (0);
var i__54795_55306 = (0);
while(true){
if((i__54795_55306 < count__54794_55305)){
var vec__54832_55307 = chunk__54793_55304.cljs$core$IIndexed$_nth$arity$2(null,i__54795_55306);
var orig_type_55308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54832_55307,(0),null);
var f_55309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54832_55307,(1),null);
var seq__54796_55310 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55308,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55308,cljs.core.identity])));
var chunk__54798_55311 = null;
var count__54799_55312 = (0);
var i__54800_55313 = (0);
while(true){
if((i__54800_55313 < count__54799_55312)){
var vec__54841_55314 = chunk__54798_55311.cljs$core$IIndexed$_nth$arity$2(null,i__54800_55313);
var actual_type_55315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54841_55314,(0),null);
var __55316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54841_55314,(1),null);
var keys_55317 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55302,actual_type_55315,f_55309], null);
var canonical_f_55318 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55301),keys_55317);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55301,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55317], 0));

if(cljs.core.truth_(elem_55301.removeEventListener)){
elem_55301.removeEventListener(cljs.core.name(actual_type_55315),canonical_f_55318);
} else {
elem_55301.detachEvent(cljs.core.name(actual_type_55315),canonical_f_55318);
}


var G__55319 = seq__54796_55310;
var G__55320 = chunk__54798_55311;
var G__55321 = count__54799_55312;
var G__55322 = (i__54800_55313 + (1));
seq__54796_55310 = G__55319;
chunk__54798_55311 = G__55320;
count__54799_55312 = G__55321;
i__54800_55313 = G__55322;
continue;
} else {
var temp__5735__auto___55323 = cljs.core.seq(seq__54796_55310);
if(temp__5735__auto___55323){
var seq__54796_55324__$1 = temp__5735__auto___55323;
if(cljs.core.chunked_seq_QMARK_(seq__54796_55324__$1)){
var c__4556__auto___55325 = cljs.core.chunk_first(seq__54796_55324__$1);
var G__55326 = cljs.core.chunk_rest(seq__54796_55324__$1);
var G__55327 = c__4556__auto___55325;
var G__55328 = cljs.core.count(c__4556__auto___55325);
var G__55329 = (0);
seq__54796_55310 = G__55326;
chunk__54798_55311 = G__55327;
count__54799_55312 = G__55328;
i__54800_55313 = G__55329;
continue;
} else {
var vec__54844_55330 = cljs.core.first(seq__54796_55324__$1);
var actual_type_55331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54844_55330,(0),null);
var __55332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54844_55330,(1),null);
var keys_55333 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55302,actual_type_55331,f_55309], null);
var canonical_f_55334 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55301),keys_55333);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55301,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55333], 0));

if(cljs.core.truth_(elem_55301.removeEventListener)){
elem_55301.removeEventListener(cljs.core.name(actual_type_55331),canonical_f_55334);
} else {
elem_55301.detachEvent(cljs.core.name(actual_type_55331),canonical_f_55334);
}


var G__55335 = cljs.core.next(seq__54796_55324__$1);
var G__55336 = null;
var G__55337 = (0);
var G__55338 = (0);
seq__54796_55310 = G__55335;
chunk__54798_55311 = G__55336;
count__54799_55312 = G__55337;
i__54800_55313 = G__55338;
continue;
}
} else {
}
}
break;
}

var G__55339 = seq__54786_55303;
var G__55340 = chunk__54793_55304;
var G__55341 = count__54794_55305;
var G__55342 = (i__54795_55306 + (1));
seq__54786_55303 = G__55339;
chunk__54793_55304 = G__55340;
count__54794_55305 = G__55341;
i__54795_55306 = G__55342;
continue;
} else {
var temp__5735__auto___55343 = cljs.core.seq(seq__54786_55303);
if(temp__5735__auto___55343){
var seq__54786_55344__$1 = temp__5735__auto___55343;
if(cljs.core.chunked_seq_QMARK_(seq__54786_55344__$1)){
var c__4556__auto___55345 = cljs.core.chunk_first(seq__54786_55344__$1);
var G__55346 = cljs.core.chunk_rest(seq__54786_55344__$1);
var G__55347 = c__4556__auto___55345;
var G__55348 = cljs.core.count(c__4556__auto___55345);
var G__55349 = (0);
seq__54786_55303 = G__55346;
chunk__54793_55304 = G__55347;
count__54794_55305 = G__55348;
i__54795_55306 = G__55349;
continue;
} else {
var vec__54847_55350 = cljs.core.first(seq__54786_55344__$1);
var orig_type_55351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54847_55350,(0),null);
var f_55352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54847_55350,(1),null);
var seq__54787_55353 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55351,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55351,cljs.core.identity])));
var chunk__54789_55354 = null;
var count__54790_55355 = (0);
var i__54791_55356 = (0);
while(true){
if((i__54791_55356 < count__54790_55355)){
var vec__54856_55357 = chunk__54789_55354.cljs$core$IIndexed$_nth$arity$2(null,i__54791_55356);
var actual_type_55358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54856_55357,(0),null);
var __55359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54856_55357,(1),null);
var keys_55360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55302,actual_type_55358,f_55352], null);
var canonical_f_55361 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55301),keys_55360);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55301,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55360], 0));

if(cljs.core.truth_(elem_55301.removeEventListener)){
elem_55301.removeEventListener(cljs.core.name(actual_type_55358),canonical_f_55361);
} else {
elem_55301.detachEvent(cljs.core.name(actual_type_55358),canonical_f_55361);
}


var G__55362 = seq__54787_55353;
var G__55363 = chunk__54789_55354;
var G__55364 = count__54790_55355;
var G__55365 = (i__54791_55356 + (1));
seq__54787_55353 = G__55362;
chunk__54789_55354 = G__55363;
count__54790_55355 = G__55364;
i__54791_55356 = G__55365;
continue;
} else {
var temp__5735__auto___55366__$1 = cljs.core.seq(seq__54787_55353);
if(temp__5735__auto___55366__$1){
var seq__54787_55367__$1 = temp__5735__auto___55366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54787_55367__$1)){
var c__4556__auto___55368 = cljs.core.chunk_first(seq__54787_55367__$1);
var G__55369 = cljs.core.chunk_rest(seq__54787_55367__$1);
var G__55370 = c__4556__auto___55368;
var G__55371 = cljs.core.count(c__4556__auto___55368);
var G__55372 = (0);
seq__54787_55353 = G__55369;
chunk__54789_55354 = G__55370;
count__54790_55355 = G__55371;
i__54791_55356 = G__55372;
continue;
} else {
var vec__54859_55373 = cljs.core.first(seq__54787_55367__$1);
var actual_type_55374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54859_55373,(0),null);
var __55375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54859_55373,(1),null);
var keys_55376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55302,actual_type_55374,f_55352], null);
var canonical_f_55377 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55301),keys_55376);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55301,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55376], 0));

if(cljs.core.truth_(elem_55301.removeEventListener)){
elem_55301.removeEventListener(cljs.core.name(actual_type_55374),canonical_f_55377);
} else {
elem_55301.detachEvent(cljs.core.name(actual_type_55374),canonical_f_55377);
}


var G__55378 = cljs.core.next(seq__54787_55367__$1);
var G__55379 = null;
var G__55380 = (0);
var G__55381 = (0);
seq__54787_55353 = G__55378;
chunk__54789_55354 = G__55379;
count__54790_55355 = G__55380;
i__54791_55356 = G__55381;
continue;
}
} else {
}
}
break;
}

var G__55382 = cljs.core.next(seq__54786_55344__$1);
var G__55383 = null;
var G__55384 = (0);
var G__55385 = (0);
seq__54786_55303 = G__55382;
chunk__54793_55304 = G__55383;
count__54794_55305 = G__55384;
i__54795_55306 = G__55385;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54781){
var G__54782 = cljs.core.first(seq54781);
var seq54781__$1 = cljs.core.next(seq54781);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54782,seq54781__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55386 = arguments.length;
var i__4737__auto___55387 = (0);
while(true){
if((i__4737__auto___55387 < len__4736__auto___55386)){
args__4742__auto__.push((arguments[i__4737__auto___55387]));

var G__55388 = (i__4737__auto___55387 + (1));
i__4737__auto___55387 = G__55388;
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

var vec__54864_55389 = dommy.core.elem_and_selector(elem_sel);
var elem_55390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864_55389,(0),null);
var selector_55391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864_55389,(1),null);
var seq__54867_55392 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54868_55393 = null;
var count__54869_55394 = (0);
var i__54870_55395 = (0);
while(true){
if((i__54870_55395 < count__54869_55394)){
var vec__54877_55396 = chunk__54868_55393.cljs$core$IIndexed$_nth$arity$2(null,i__54870_55395);
var type_55397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54877_55396,(0),null);
var f_55398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54877_55396,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55397,((function (seq__54867_55392,chunk__54868_55393,count__54869_55394,i__54870_55395,vec__54877_55396,type_55397,f_55398,vec__54864_55389,elem_55390,selector_55391){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55397,dommy$core$this_fn], 0));

return (f_55398.cljs$core$IFn$_invoke$arity$1 ? f_55398.cljs$core$IFn$_invoke$arity$1(e) : f_55398.call(null,e));
});})(seq__54867_55392,chunk__54868_55393,count__54869_55394,i__54870_55395,vec__54877_55396,type_55397,f_55398,vec__54864_55389,elem_55390,selector_55391))
], 0));


var G__55399 = seq__54867_55392;
var G__55400 = chunk__54868_55393;
var G__55401 = count__54869_55394;
var G__55402 = (i__54870_55395 + (1));
seq__54867_55392 = G__55399;
chunk__54868_55393 = G__55400;
count__54869_55394 = G__55401;
i__54870_55395 = G__55402;
continue;
} else {
var temp__5735__auto___55403 = cljs.core.seq(seq__54867_55392);
if(temp__5735__auto___55403){
var seq__54867_55404__$1 = temp__5735__auto___55403;
if(cljs.core.chunked_seq_QMARK_(seq__54867_55404__$1)){
var c__4556__auto___55405 = cljs.core.chunk_first(seq__54867_55404__$1);
var G__55406 = cljs.core.chunk_rest(seq__54867_55404__$1);
var G__55407 = c__4556__auto___55405;
var G__55408 = cljs.core.count(c__4556__auto___55405);
var G__55409 = (0);
seq__54867_55392 = G__55406;
chunk__54868_55393 = G__55407;
count__54869_55394 = G__55408;
i__54870_55395 = G__55409;
continue;
} else {
var vec__54880_55410 = cljs.core.first(seq__54867_55404__$1);
var type_55411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880_55410,(0),null);
var f_55412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54880_55410,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55411,((function (seq__54867_55392,chunk__54868_55393,count__54869_55394,i__54870_55395,vec__54880_55410,type_55411,f_55412,seq__54867_55404__$1,temp__5735__auto___55403,vec__54864_55389,elem_55390,selector_55391){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55411,dommy$core$this_fn], 0));

return (f_55412.cljs$core$IFn$_invoke$arity$1 ? f_55412.cljs$core$IFn$_invoke$arity$1(e) : f_55412.call(null,e));
});})(seq__54867_55392,chunk__54868_55393,count__54869_55394,i__54870_55395,vec__54880_55410,type_55411,f_55412,seq__54867_55404__$1,temp__5735__auto___55403,vec__54864_55389,elem_55390,selector_55391))
], 0));


var G__55413 = cljs.core.next(seq__54867_55404__$1);
var G__55414 = null;
var G__55415 = (0);
var G__55416 = (0);
seq__54867_55392 = G__55413;
chunk__54868_55393 = G__55414;
count__54869_55394 = G__55415;
i__54870_55395 = G__55416;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54862){
var G__54863 = cljs.core.first(seq54862);
var seq54862__$1 = cljs.core.next(seq54862);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54863,seq54862__$1);
}));


//# sourceMappingURL=dommy.core.js.map
