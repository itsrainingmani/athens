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
var len__4736__auto___54889 = arguments.length;
var i__4737__auto___54890 = (0);
while(true){
if((i__4737__auto___54890 < len__4736__auto___54889)){
args__4742__auto__.push((arguments[i__4737__auto___54890]));

var G__54891 = (i__4737__auto___54890 + (1));
i__4737__auto___54890 = G__54891;
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
var seq__54529_54892 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54530_54893 = null;
var count__54531_54894 = (0);
var i__54532_54895 = (0);
while(true){
if((i__54532_54895 < count__54531_54894)){
var vec__54539_54896 = chunk__54530_54893.cljs$core$IIndexed$_nth$arity$2(null,i__54532_54895);
var k_54897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539_54896,(0),null);
var v_54898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539_54896,(1),null);
style.setProperty(dommy.utils.as_str(k_54897),v_54898);


var G__54899 = seq__54529_54892;
var G__54900 = chunk__54530_54893;
var G__54901 = count__54531_54894;
var G__54902 = (i__54532_54895 + (1));
seq__54529_54892 = G__54899;
chunk__54530_54893 = G__54900;
count__54531_54894 = G__54901;
i__54532_54895 = G__54902;
continue;
} else {
var temp__5735__auto___54903 = cljs.core.seq(seq__54529_54892);
if(temp__5735__auto___54903){
var seq__54529_54904__$1 = temp__5735__auto___54903;
if(cljs.core.chunked_seq_QMARK_(seq__54529_54904__$1)){
var c__4556__auto___54905 = cljs.core.chunk_first(seq__54529_54904__$1);
var G__54906 = cljs.core.chunk_rest(seq__54529_54904__$1);
var G__54907 = c__4556__auto___54905;
var G__54908 = cljs.core.count(c__4556__auto___54905);
var G__54909 = (0);
seq__54529_54892 = G__54906;
chunk__54530_54893 = G__54907;
count__54531_54894 = G__54908;
i__54532_54895 = G__54909;
continue;
} else {
var vec__54542_54910 = cljs.core.first(seq__54529_54904__$1);
var k_54911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54542_54910,(0),null);
var v_54912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54542_54910,(1),null);
style.setProperty(dommy.utils.as_str(k_54911),v_54912);


var G__54913 = cljs.core.next(seq__54529_54904__$1);
var G__54914 = null;
var G__54915 = (0);
var G__54916 = (0);
seq__54529_54892 = G__54913;
chunk__54530_54893 = G__54914;
count__54531_54894 = G__54915;
i__54532_54895 = G__54916;
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
var len__4736__auto___54917 = arguments.length;
var i__4737__auto___54918 = (0);
while(true){
if((i__4737__auto___54918 < len__4736__auto___54917)){
args__4742__auto__.push((arguments[i__4737__auto___54918]));

var G__54919 = (i__4737__auto___54918 + (1));
i__4737__auto___54918 = G__54919;
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
var seq__54547_54920 = cljs.core.seq(keywords);
var chunk__54548_54921 = null;
var count__54549_54922 = (0);
var i__54550_54923 = (0);
while(true){
if((i__54550_54923 < count__54549_54922)){
var kw_54924 = chunk__54548_54921.cljs$core$IIndexed$_nth$arity$2(null,i__54550_54923);
style.removeProperty(dommy.utils.as_str(kw_54924));


var G__54925 = seq__54547_54920;
var G__54926 = chunk__54548_54921;
var G__54927 = count__54549_54922;
var G__54928 = (i__54550_54923 + (1));
seq__54547_54920 = G__54925;
chunk__54548_54921 = G__54926;
count__54549_54922 = G__54927;
i__54550_54923 = G__54928;
continue;
} else {
var temp__5735__auto___54929 = cljs.core.seq(seq__54547_54920);
if(temp__5735__auto___54929){
var seq__54547_54930__$1 = temp__5735__auto___54929;
if(cljs.core.chunked_seq_QMARK_(seq__54547_54930__$1)){
var c__4556__auto___54931 = cljs.core.chunk_first(seq__54547_54930__$1);
var G__54932 = cljs.core.chunk_rest(seq__54547_54930__$1);
var G__54933 = c__4556__auto___54931;
var G__54934 = cljs.core.count(c__4556__auto___54931);
var G__54935 = (0);
seq__54547_54920 = G__54932;
chunk__54548_54921 = G__54933;
count__54549_54922 = G__54934;
i__54550_54923 = G__54935;
continue;
} else {
var kw_54936 = cljs.core.first(seq__54547_54930__$1);
style.removeProperty(dommy.utils.as_str(kw_54936));


var G__54937 = cljs.core.next(seq__54547_54930__$1);
var G__54938 = null;
var G__54939 = (0);
var G__54940 = (0);
seq__54547_54920 = G__54937;
chunk__54548_54921 = G__54938;
count__54549_54922 = G__54939;
i__54550_54923 = G__54940;
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
var len__4736__auto___54942 = arguments.length;
var i__4737__auto___54943 = (0);
while(true){
if((i__4737__auto___54943 < len__4736__auto___54942)){
args__4742__auto__.push((arguments[i__4737__auto___54943]));

var G__54944 = (i__4737__auto___54943 + (1));
i__4737__auto___54943 = G__54944;
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

var seq__54553_54945 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54554_54946 = null;
var count__54555_54947 = (0);
var i__54556_54948 = (0);
while(true){
if((i__54556_54948 < count__54555_54947)){
var vec__54563_54949 = chunk__54554_54946.cljs$core$IIndexed$_nth$arity$2(null,i__54556_54948);
var k_54950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_54949,(0),null);
var v_54951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_54949,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54950,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54951),"px"].join('')], 0));


var G__54952 = seq__54553_54945;
var G__54953 = chunk__54554_54946;
var G__54954 = count__54555_54947;
var G__54955 = (i__54556_54948 + (1));
seq__54553_54945 = G__54952;
chunk__54554_54946 = G__54953;
count__54555_54947 = G__54954;
i__54556_54948 = G__54955;
continue;
} else {
var temp__5735__auto___54956 = cljs.core.seq(seq__54553_54945);
if(temp__5735__auto___54956){
var seq__54553_54957__$1 = temp__5735__auto___54956;
if(cljs.core.chunked_seq_QMARK_(seq__54553_54957__$1)){
var c__4556__auto___54960 = cljs.core.chunk_first(seq__54553_54957__$1);
var G__54963 = cljs.core.chunk_rest(seq__54553_54957__$1);
var G__54964 = c__4556__auto___54960;
var G__54965 = cljs.core.count(c__4556__auto___54960);
var G__54966 = (0);
seq__54553_54945 = G__54963;
chunk__54554_54946 = G__54964;
count__54555_54947 = G__54965;
i__54556_54948 = G__54966;
continue;
} else {
var vec__54566_54967 = cljs.core.first(seq__54553_54957__$1);
var k_54968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566_54967,(0),null);
var v_54969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54566_54967,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54968,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54969),"px"].join('')], 0));


var G__54970 = cljs.core.next(seq__54553_54957__$1);
var G__54971 = null;
var G__54972 = (0);
var G__54973 = (0);
seq__54553_54945 = G__54970;
chunk__54554_54946 = G__54971;
count__54555_54947 = G__54972;
i__54556_54948 = G__54973;
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
var len__4736__auto___54975 = arguments.length;
var i__4737__auto___54976 = (0);
while(true){
if((i__4737__auto___54976 < len__4736__auto___54975)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54976]));

var G__54977 = (i__4737__auto___54976 + (1));
i__4737__auto___54976 = G__54977;
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

var seq__54577_54983 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54578_54984 = null;
var count__54579_54985 = (0);
var i__54580_54986 = (0);
while(true){
if((i__54580_54986 < count__54579_54985)){
var vec__54587_54987 = chunk__54578_54984.cljs$core$IIndexed$_nth$arity$2(null,i__54580_54986);
var k_54988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54587_54987,(0),null);
var v_54989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54587_54987,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54988__$1,v_54989__$1);


var G__54993 = seq__54577_54983;
var G__54994 = chunk__54578_54984;
var G__54995 = count__54579_54985;
var G__54996 = (i__54580_54986 + (1));
seq__54577_54983 = G__54993;
chunk__54578_54984 = G__54994;
count__54579_54985 = G__54995;
i__54580_54986 = G__54996;
continue;
} else {
var temp__5735__auto___54997 = cljs.core.seq(seq__54577_54983);
if(temp__5735__auto___54997){
var seq__54577_54998__$1 = temp__5735__auto___54997;
if(cljs.core.chunked_seq_QMARK_(seq__54577_54998__$1)){
var c__4556__auto___54999 = cljs.core.chunk_first(seq__54577_54998__$1);
var G__55000 = cljs.core.chunk_rest(seq__54577_54998__$1);
var G__55001 = c__4556__auto___54999;
var G__55002 = cljs.core.count(c__4556__auto___54999);
var G__55003 = (0);
seq__54577_54983 = G__55000;
chunk__54578_54984 = G__55001;
count__54579_54985 = G__55002;
i__54580_54986 = G__55003;
continue;
} else {
var vec__54590_55004 = cljs.core.first(seq__54577_54998__$1);
var k_55005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590_55004,(0),null);
var v_55006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590_55004,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_55005__$1,v_55006__$1);


var G__55007 = cljs.core.next(seq__54577_54998__$1);
var G__55008 = null;
var G__55009 = (0);
var G__55010 = (0);
seq__54577_54983 = G__55007;
chunk__54578_54984 = G__55008;
count__54579_54985 = G__55009;
i__54580_54986 = G__55010;
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
var len__4736__auto___55013 = arguments.length;
var i__4737__auto___55014 = (0);
while(true){
if((i__4737__auto___55014 < len__4736__auto___55013)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55014]));

var G__55015 = (i__4737__auto___55014 + (1));
i__4737__auto___55014 = G__55015;
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
var k_55016__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54598.cljs$core$IFn$_invoke$arity$1 ? fexpr__54598.cljs$core$IFn$_invoke$arity$1(k_55016__$1) : fexpr__54598.call(null,k_55016__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55016__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54599_55020 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54600_55021 = null;
var count__54601_55022 = (0);
var i__54602_55023 = (0);
while(true){
if((i__54602_55023 < count__54601_55022)){
var k_55024__$1 = chunk__54600_55021.cljs$core$IIndexed$_nth$arity$2(null,i__54602_55023);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55024__$1);


var G__55025 = seq__54599_55020;
var G__55026 = chunk__54600_55021;
var G__55027 = count__54601_55022;
var G__55028 = (i__54602_55023 + (1));
seq__54599_55020 = G__55025;
chunk__54600_55021 = G__55026;
count__54601_55022 = G__55027;
i__54602_55023 = G__55028;
continue;
} else {
var temp__5735__auto___55029 = cljs.core.seq(seq__54599_55020);
if(temp__5735__auto___55029){
var seq__54599_55030__$1 = temp__5735__auto___55029;
if(cljs.core.chunked_seq_QMARK_(seq__54599_55030__$1)){
var c__4556__auto___55031 = cljs.core.chunk_first(seq__54599_55030__$1);
var G__55032 = cljs.core.chunk_rest(seq__54599_55030__$1);
var G__55033 = c__4556__auto___55031;
var G__55034 = cljs.core.count(c__4556__auto___55031);
var G__55035 = (0);
seq__54599_55020 = G__55032;
chunk__54600_55021 = G__55033;
count__54601_55022 = G__55034;
i__54602_55023 = G__55035;
continue;
} else {
var k_55036__$1 = cljs.core.first(seq__54599_55030__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55036__$1);


var G__55037 = cljs.core.next(seq__54599_55030__$1);
var G__55038 = null;
var G__55039 = (0);
var G__55040 = (0);
seq__54599_55020 = G__55037;
chunk__54600_55021 = G__55038;
count__54601_55022 = G__55039;
i__54602_55023 = G__55040;
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
var len__4736__auto___55043 = arguments.length;
var i__4737__auto___55044 = (0);
while(true){
if((i__4737__auto___55044 < len__4736__auto___55043)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55044]));

var G__55045 = (i__4737__auto___55044 + (1));
i__4737__auto___55044 = G__55045;
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
var temp__5733__auto___55046 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55046)){
var class_list_55047 = temp__5733__auto___55046;
var seq__54610_55048 = cljs.core.seq(classes__$1);
var chunk__54611_55049 = null;
var count__54612_55050 = (0);
var i__54613_55051 = (0);
while(true){
if((i__54613_55051 < count__54612_55050)){
var c_55052 = chunk__54611_55049.cljs$core$IIndexed$_nth$arity$2(null,i__54613_55051);
class_list_55047.add(c_55052);


var G__55053 = seq__54610_55048;
var G__55054 = chunk__54611_55049;
var G__55055 = count__54612_55050;
var G__55056 = (i__54613_55051 + (1));
seq__54610_55048 = G__55053;
chunk__54611_55049 = G__55054;
count__54612_55050 = G__55055;
i__54613_55051 = G__55056;
continue;
} else {
var temp__5735__auto___55057 = cljs.core.seq(seq__54610_55048);
if(temp__5735__auto___55057){
var seq__54610_55058__$1 = temp__5735__auto___55057;
if(cljs.core.chunked_seq_QMARK_(seq__54610_55058__$1)){
var c__4556__auto___55059 = cljs.core.chunk_first(seq__54610_55058__$1);
var G__55060 = cljs.core.chunk_rest(seq__54610_55058__$1);
var G__55061 = c__4556__auto___55059;
var G__55062 = cljs.core.count(c__4556__auto___55059);
var G__55063 = (0);
seq__54610_55048 = G__55060;
chunk__54611_55049 = G__55061;
count__54612_55050 = G__55062;
i__54613_55051 = G__55063;
continue;
} else {
var c_55064 = cljs.core.first(seq__54610_55058__$1);
class_list_55047.add(c_55064);


var G__55065 = cljs.core.next(seq__54610_55058__$1);
var G__55066 = null;
var G__55067 = (0);
var G__55068 = (0);
seq__54610_55048 = G__55065;
chunk__54611_55049 = G__55066;
count__54612_55050 = G__55067;
i__54613_55051 = G__55068;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54614_55069 = cljs.core.seq(classes__$1);
var chunk__54615_55070 = null;
var count__54616_55071 = (0);
var i__54617_55072 = (0);
while(true){
if((i__54617_55072 < count__54616_55071)){
var c_55073 = chunk__54615_55070.cljs$core$IIndexed$_nth$arity$2(null,i__54617_55072);
var class_name_55074 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55074,c_55073))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55074 === ""))?c_55073:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55074)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55073)].join('')));
}


var G__55075 = seq__54614_55069;
var G__55076 = chunk__54615_55070;
var G__55077 = count__54616_55071;
var G__55078 = (i__54617_55072 + (1));
seq__54614_55069 = G__55075;
chunk__54615_55070 = G__55076;
count__54616_55071 = G__55077;
i__54617_55072 = G__55078;
continue;
} else {
var temp__5735__auto___55079 = cljs.core.seq(seq__54614_55069);
if(temp__5735__auto___55079){
var seq__54614_55080__$1 = temp__5735__auto___55079;
if(cljs.core.chunked_seq_QMARK_(seq__54614_55080__$1)){
var c__4556__auto___55081 = cljs.core.chunk_first(seq__54614_55080__$1);
var G__55082 = cljs.core.chunk_rest(seq__54614_55080__$1);
var G__55083 = c__4556__auto___55081;
var G__55084 = cljs.core.count(c__4556__auto___55081);
var G__55085 = (0);
seq__54614_55069 = G__55082;
chunk__54615_55070 = G__55083;
count__54616_55071 = G__55084;
i__54617_55072 = G__55085;
continue;
} else {
var c_55086 = cljs.core.first(seq__54614_55080__$1);
var class_name_55087 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55087,c_55086))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55087 === ""))?c_55086:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55087)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55086)].join('')));
}


var G__55088 = cljs.core.next(seq__54614_55080__$1);
var G__55089 = null;
var G__55090 = (0);
var G__55092 = (0);
seq__54614_55069 = G__55088;
chunk__54615_55070 = G__55089;
count__54616_55071 = G__55090;
i__54617_55072 = G__55092;
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
var seq__54618_55096 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54619_55097 = null;
var count__54620_55098 = (0);
var i__54621_55099 = (0);
while(true){
if((i__54621_55099 < count__54620_55098)){
var c_55108 = chunk__54619_55097.cljs$core$IIndexed$_nth$arity$2(null,i__54621_55099);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55108);


var G__55109 = seq__54618_55096;
var G__55110 = chunk__54619_55097;
var G__55111 = count__54620_55098;
var G__55112 = (i__54621_55099 + (1));
seq__54618_55096 = G__55109;
chunk__54619_55097 = G__55110;
count__54620_55098 = G__55111;
i__54621_55099 = G__55112;
continue;
} else {
var temp__5735__auto___55113 = cljs.core.seq(seq__54618_55096);
if(temp__5735__auto___55113){
var seq__54618_55114__$1 = temp__5735__auto___55113;
if(cljs.core.chunked_seq_QMARK_(seq__54618_55114__$1)){
var c__4556__auto___55115 = cljs.core.chunk_first(seq__54618_55114__$1);
var G__55116 = cljs.core.chunk_rest(seq__54618_55114__$1);
var G__55117 = c__4556__auto___55115;
var G__55118 = cljs.core.count(c__4556__auto___55115);
var G__55119 = (0);
seq__54618_55096 = G__55116;
chunk__54619_55097 = G__55117;
count__54620_55098 = G__55118;
i__54621_55099 = G__55119;
continue;
} else {
var c_55120 = cljs.core.first(seq__54618_55114__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55120);


var G__55121 = cljs.core.next(seq__54618_55114__$1);
var G__55122 = null;
var G__55123 = (0);
var G__55124 = (0);
seq__54618_55096 = G__55121;
chunk__54619_55097 = G__55122;
count__54620_55098 = G__55123;
i__54621_55099 = G__55124;
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
var len__4736__auto___55128 = arguments.length;
var i__4737__auto___55129 = (0);
while(true){
if((i__4737__auto___55129 < len__4736__auto___55128)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55129]));

var G__55130 = (i__4737__auto___55129 + (1));
i__4737__auto___55129 = G__55130;
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
var temp__5733__auto___55131 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55131)){
var class_list_55132 = temp__5733__auto___55131;
class_list_55132.remove(c__$1);
} else {
var class_name_55133 = dommy.core.class$(elem);
var new_class_name_55134 = dommy.utils.remove_class_str(class_name_55133,c__$1);
if((class_name_55133 === new_class_name_55134)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55134);
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
var len__4736__auto___55385 = arguments.length;
var i__4737__auto___55386 = (0);
while(true){
if((i__4737__auto___55386 < len__4736__auto___55385)){
args__4742__auto__.push((arguments[i__4737__auto___55386]));

var G__55387 = (i__4737__auto___55386 + (1));
i__4737__auto___55386 = G__55387;
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

var vec__54863_55388 = dommy.core.elem_and_selector(elem_sel);
var elem_55389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54863_55388,(0),null);
var selector_55390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54863_55388,(1),null);
var seq__54866_55391 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54867_55392 = null;
var count__54868_55393 = (0);
var i__54869_55394 = (0);
while(true){
if((i__54869_55394 < count__54868_55393)){
var vec__54876_55395 = chunk__54867_55392.cljs$core$IIndexed$_nth$arity$2(null,i__54869_55394);
var type_55396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54876_55395,(0),null);
var f_55397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54876_55395,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55396,((function (seq__54866_55391,chunk__54867_55392,count__54868_55393,i__54869_55394,vec__54876_55395,type_55396,f_55397,vec__54863_55388,elem_55389,selector_55390){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55396,dommy$core$this_fn], 0));

return (f_55397.cljs$core$IFn$_invoke$arity$1 ? f_55397.cljs$core$IFn$_invoke$arity$1(e) : f_55397.call(null,e));
});})(seq__54866_55391,chunk__54867_55392,count__54868_55393,i__54869_55394,vec__54876_55395,type_55396,f_55397,vec__54863_55388,elem_55389,selector_55390))
], 0));


var G__55398 = seq__54866_55391;
var G__55399 = chunk__54867_55392;
var G__55400 = count__54868_55393;
var G__55401 = (i__54869_55394 + (1));
seq__54866_55391 = G__55398;
chunk__54867_55392 = G__55399;
count__54868_55393 = G__55400;
i__54869_55394 = G__55401;
continue;
} else {
var temp__5735__auto___55402 = cljs.core.seq(seq__54866_55391);
if(temp__5735__auto___55402){
var seq__54866_55403__$1 = temp__5735__auto___55402;
if(cljs.core.chunked_seq_QMARK_(seq__54866_55403__$1)){
var c__4556__auto___55404 = cljs.core.chunk_first(seq__54866_55403__$1);
var G__55405 = cljs.core.chunk_rest(seq__54866_55403__$1);
var G__55406 = c__4556__auto___55404;
var G__55407 = cljs.core.count(c__4556__auto___55404);
var G__55408 = (0);
seq__54866_55391 = G__55405;
chunk__54867_55392 = G__55406;
count__54868_55393 = G__55407;
i__54869_55394 = G__55408;
continue;
} else {
var vec__54879_55409 = cljs.core.first(seq__54866_55403__$1);
var type_55410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54879_55409,(0),null);
var f_55411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54879_55409,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55410,((function (seq__54866_55391,chunk__54867_55392,count__54868_55393,i__54869_55394,vec__54879_55409,type_55410,f_55411,seq__54866_55403__$1,temp__5735__auto___55402,vec__54863_55388,elem_55389,selector_55390){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55410,dommy$core$this_fn], 0));

return (f_55411.cljs$core$IFn$_invoke$arity$1 ? f_55411.cljs$core$IFn$_invoke$arity$1(e) : f_55411.call(null,e));
});})(seq__54866_55391,chunk__54867_55392,count__54868_55393,i__54869_55394,vec__54879_55409,type_55410,f_55411,seq__54866_55403__$1,temp__5735__auto___55402,vec__54863_55388,elem_55389,selector_55390))
], 0));


var G__55412 = cljs.core.next(seq__54866_55403__$1);
var G__55413 = null;
var G__55414 = (0);
var G__55415 = (0);
seq__54866_55391 = G__55412;
chunk__54867_55392 = G__55413;
count__54868_55393 = G__55414;
i__54869_55394 = G__55415;
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
