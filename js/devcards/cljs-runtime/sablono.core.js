goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__47225__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__47047 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__47048 = cljs.core.seq(vec__47047);
var first__47049 = cljs.core.first(seq__47048);
var seq__47048__$1 = cljs.core.next(seq__47048);
var tag = first__47049;
var body = seq__47048__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__47225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47226__i = 0, G__47226__a = new Array(arguments.length -  0);
while (G__47226__i < G__47226__a.length) {G__47226__a[G__47226__i] = arguments[G__47226__i + 0]; ++G__47226__i;}
  args = new cljs.core.IndexedSeq(G__47226__a,0,null);
} 
return G__47225__delegate.call(this,args);};
G__47225.cljs$lang$maxFixedArity = 0;
G__47225.cljs$lang$applyTo = (function (arglist__47227){
var args = cljs.core.seq(arglist__47227);
return G__47225__delegate(args);
});
G__47225.cljs$core$IFn$_invoke$arity$variadic = G__47225__delegate;
return G__47225;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__47052(s__47053){
return (new cljs.core.LazySeq(null,(function (){
var s__47053__$1 = s__47053;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47053__$1);
if(temp__5735__auto__){
var s__47053__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47053__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47053__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47055 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47054 = (0);
while(true){
if((i__47054 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__47054);
cljs.core.chunk_append(b__47055,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__47228 = (i__47054 + (1));
i__47054 = G__47228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47055),sablono$core$update_arglists_$_iter__47052(cljs.core.chunk_rest(s__47053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47055),null);
}
} else {
var args = cljs.core.first(s__47053__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__47052(cljs.core.rest(s__47053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47229 = arguments.length;
var i__4737__auto___47230 = (0);
while(true){
if((i__4737__auto___47230 < len__4736__auto___47229)){
args__4742__auto__.push((arguments[i__4737__auto___47230]));

var G__47231 = (i__4737__auto___47230 + (1));
i__4737__auto___47230 = G__47231;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__47059(s__47060){
return (new cljs.core.LazySeq(null,(function (){
var s__47060__$1 = s__47060;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47060__$1);
if(temp__5735__auto__){
var s__47060__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47060__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47060__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47062 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47061 = (0);
while(true){
if((i__47061 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__47061);
cljs.core.chunk_append(b__47062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__47232 = (i__47061 + (1));
i__47061 = G__47232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47062),sablono$core$iter__47059(cljs.core.chunk_rest(s__47060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47062),null);
}
} else {
var style = cljs.core.first(s__47060__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__47059(cljs.core.rest(s__47060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq47058){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47058));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to47083 = (function sablono$core$link_to47083(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47233 = arguments.length;
var i__4737__auto___47234 = (0);
while(true){
if((i__4737__auto___47234 < len__4736__auto___47233)){
args__4742__auto__.push((arguments[i__4737__auto___47234]));

var G__47235 = (i__4737__auto___47234 + (1));
i__4737__auto___47234 = G__47235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to47083.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to47083.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to47083.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to47083.cljs$lang$applyTo = (function (seq47086){
var G__47087 = cljs.core.first(seq47086);
var seq47086__$1 = cljs.core.next(seq47086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47087,seq47086__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to47083);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to47091 = (function sablono$core$mail_to47091(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47236 = arguments.length;
var i__4737__auto___47237 = (0);
while(true){
if((i__4737__auto___47237 < len__4736__auto___47236)){
args__4742__auto__.push((arguments[i__4737__auto___47237]));

var G__47238 = (i__4737__auto___47237 + (1));
i__4737__auto___47237 = G__47238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to47091.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to47091.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__47099){
var vec__47102 = p__47099;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47102,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to47091.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to47091.cljs$lang$applyTo = (function (seq47092){
var G__47093 = cljs.core.first(seq47092);
var seq47092__$1 = cljs.core.next(seq47092);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47093,seq47092__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to47091);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list47106 = (function sablono$core$unordered_list47106(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list47106_$_iter__47111(s__47112){
return (new cljs.core.LazySeq(null,(function (){
var s__47112__$1 = s__47112;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47112__$1);
if(temp__5735__auto__){
var s__47112__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47112__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47112__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47114 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47113 = (0);
while(true){
if((i__47113 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47113);
cljs.core.chunk_append(b__47114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__47241 = (i__47113 + (1));
i__47113 = G__47241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47114),sablono$core$unordered_list47106_$_iter__47111(cljs.core.chunk_rest(s__47112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47114),null);
}
} else {
var x = cljs.core.first(s__47112__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list47106_$_iter__47111(cljs.core.rest(s__47112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list47106);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list47115 = (function sablono$core$ordered_list47115(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list47115_$_iter__47118(s__47119){
return (new cljs.core.LazySeq(null,(function (){
var s__47119__$1 = s__47119;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47119__$1);
if(temp__5735__auto__){
var s__47119__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47119__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47119__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47121 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47120 = (0);
while(true){
if((i__47120 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47120);
cljs.core.chunk_append(b__47121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__47243 = (i__47120 + (1));
i__47120 = G__47243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47121),sablono$core$ordered_list47115_$_iter__47118(cljs.core.chunk_rest(s__47119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47121),null);
}
} else {
var x = cljs.core.first(s__47119__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list47115_$_iter__47118(cljs.core.rest(s__47119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list47115);
/**
 * Create an image element.
 */
sablono.core.image47128 = (function sablono$core$image47128(var_args){
var G__47130 = arguments.length;
switch (G__47130) {
case 1:
return sablono.core.image47128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image47128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image47128.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image47128.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image47128.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image47128);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47135_SHARP_,p2__47136_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47135_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47136_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47137_SHARP_,p2__47138_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47137_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47138_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__47140 = arguments.length;
switch (G__47140) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field47141 = (function sablono$core$color_field47141(var_args){
var G__47143 = arguments.length;
switch (G__47143) {
case 1:
return sablono.core.color_field47141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field47141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field47141.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47037__auto__);
}));

(sablono.core.color_field47141.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.color_field47141.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field47141);

/**
 * Creates a date input field.
 */
sablono.core.date_field47144 = (function sablono$core$date_field47144(var_args){
var G__47146 = arguments.length;
switch (G__47146) {
case 1:
return sablono.core.date_field47144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field47144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field47144.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47037__auto__);
}));

(sablono.core.date_field47144.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.date_field47144.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field47144);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field47147 = (function sablono$core$datetime_field47147(var_args){
var G__47149 = arguments.length;
switch (G__47149) {
case 1:
return sablono.core.datetime_field47147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field47147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field47147.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47037__auto__);
}));

(sablono.core.datetime_field47147.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.datetime_field47147.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field47147);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field47150 = (function sablono$core$datetime_local_field47150(var_args){
var G__47152 = arguments.length;
switch (G__47152) {
case 1:
return sablono.core.datetime_local_field47150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field47150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field47150.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47037__auto__);
}));

(sablono.core.datetime_local_field47150.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.datetime_local_field47150.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field47150);

/**
 * Creates a email input field.
 */
sablono.core.email_field47153 = (function sablono$core$email_field47153(var_args){
var G__47155 = arguments.length;
switch (G__47155) {
case 1:
return sablono.core.email_field47153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field47153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field47153.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47037__auto__);
}));

(sablono.core.email_field47153.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.email_field47153.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field47153);

/**
 * Creates a file input field.
 */
sablono.core.file_field47156 = (function sablono$core$file_field47156(var_args){
var G__47158 = arguments.length;
switch (G__47158) {
case 1:
return sablono.core.file_field47156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field47156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field47156.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47037__auto__);
}));

(sablono.core.file_field47156.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.file_field47156.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field47156);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field47159 = (function sablono$core$hidden_field47159(var_args){
var G__47161 = arguments.length;
switch (G__47161) {
case 1:
return sablono.core.hidden_field47159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field47159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field47159.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47037__auto__);
}));

(sablono.core.hidden_field47159.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.hidden_field47159.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field47159);

/**
 * Creates a month input field.
 */
sablono.core.month_field47162 = (function sablono$core$month_field47162(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 1:
return sablono.core.month_field47162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field47162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field47162.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47037__auto__);
}));

(sablono.core.month_field47162.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.month_field47162.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field47162);

/**
 * Creates a number input field.
 */
sablono.core.number_field47165 = (function sablono$core$number_field47165(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 1:
return sablono.core.number_field47165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field47165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field47165.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47037__auto__);
}));

(sablono.core.number_field47165.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.number_field47165.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field47165);

/**
 * Creates a password input field.
 */
sablono.core.password_field47168 = (function sablono$core$password_field47168(var_args){
var G__47170 = arguments.length;
switch (G__47170) {
case 1:
return sablono.core.password_field47168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field47168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field47168.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47037__auto__);
}));

(sablono.core.password_field47168.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.password_field47168.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field47168);

/**
 * Creates a range input field.
 */
sablono.core.range_field47171 = (function sablono$core$range_field47171(var_args){
var G__47173 = arguments.length;
switch (G__47173) {
case 1:
return sablono.core.range_field47171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field47171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field47171.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47037__auto__);
}));

(sablono.core.range_field47171.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.range_field47171.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field47171);

/**
 * Creates a search input field.
 */
sablono.core.search_field47174 = (function sablono$core$search_field47174(var_args){
var G__47176 = arguments.length;
switch (G__47176) {
case 1:
return sablono.core.search_field47174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field47174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field47174.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47037__auto__);
}));

(sablono.core.search_field47174.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.search_field47174.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field47174);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field47177 = (function sablono$core$tel_field47177(var_args){
var G__47179 = arguments.length;
switch (G__47179) {
case 1:
return sablono.core.tel_field47177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field47177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field47177.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47037__auto__);
}));

(sablono.core.tel_field47177.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.tel_field47177.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field47177);

/**
 * Creates a text input field.
 */
sablono.core.text_field47180 = (function sablono$core$text_field47180(var_args){
var G__47182 = arguments.length;
switch (G__47182) {
case 1:
return sablono.core.text_field47180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field47180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field47180.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47037__auto__);
}));

(sablono.core.text_field47180.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.text_field47180.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field47180);

/**
 * Creates a time input field.
 */
sablono.core.time_field47183 = (function sablono$core$time_field47183(var_args){
var G__47185 = arguments.length;
switch (G__47185) {
case 1:
return sablono.core.time_field47183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field47183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field47183.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47037__auto__);
}));

(sablono.core.time_field47183.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.time_field47183.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field47183);

/**
 * Creates a url input field.
 */
sablono.core.url_field47186 = (function sablono$core$url_field47186(var_args){
var G__47188 = arguments.length;
switch (G__47188) {
case 1:
return sablono.core.url_field47186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field47186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field47186.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47037__auto__);
}));

(sablono.core.url_field47186.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.url_field47186.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field47186);

/**
 * Creates a week input field.
 */
sablono.core.week_field47189 = (function sablono$core$week_field47189(var_args){
var G__47191 = arguments.length;
switch (G__47191) {
case 1:
return sablono.core.week_field47189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field47189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field47189.cljs$core$IFn$_invoke$arity$1 = (function (name__47037__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47037__auto__);
}));

(sablono.core.week_field47189.cljs$core$IFn$_invoke$arity$2 = (function (name__47037__auto__,value__47038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47037__auto__,value__47038__auto__);
}));

(sablono.core.week_field47189.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field47189);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box47192 = (function sablono$core$check_box47192(var_args){
var G__47194 = arguments.length;
switch (G__47194) {
case 1:
return sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box47192.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box47192.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box47192);
/**
 * Creates a radio button.
 */
sablono.core.radio_button47195 = (function sablono$core$radio_button47195(var_args){
var G__47197 = arguments.length;
switch (G__47197) {
case 1:
return sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button47195.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button47195.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button47195);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options47198 = (function sablono$core$select_options47198(coll){
var iter__4529__auto__ = (function sablono$core$select_options47198_$_iter__47199(s__47200){
return (new cljs.core.LazySeq(null,(function (){
var s__47200__$1 = s__47200;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47200__$1);
if(temp__5735__auto__){
var s__47200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47200__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47200__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47202 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47201 = (0);
while(true){
if((i__47201 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47201);
cljs.core.chunk_append(b__47202,((cljs.core.sequential_QMARK_(x))?(function (){var vec__47203 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options47198.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options47198.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options47198.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__47271 = (i__47201 + (1));
i__47201 = G__47271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47202),sablono$core$select_options47198_$_iter__47199(cljs.core.chunk_rest(s__47200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47202),null);
}
} else {
var x = cljs.core.first(s__47200__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__47206 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options47198.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options47198.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options47198.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options47198_$_iter__47199(cljs.core.rest(s__47200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options47198);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down47209 = (function sablono$core$drop_down47209(var_args){
var G__47211 = arguments.length;
switch (G__47211) {
case 2:
return sablono.core.drop_down47209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down47209.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down47209.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down47209.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down47209.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down47209.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down47209);
/**
 * Creates a text area element.
 */
sablono.core.text_area47212 = (function sablono$core$text_area47212(var_args){
var G__47214 = arguments.length;
switch (G__47214) {
case 1:
return sablono.core.text_area47212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area47212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area47212.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area47212.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area47212.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area47212);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label47215 = (function sablono$core$label47215(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label47215);
/**
 * Creates a submit button.
 */
sablono.core.submit_button47216 = (function sablono$core$submit_button47216(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button47216);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button47217 = (function sablono$core$reset_button47217(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button47217);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to47218 = (function sablono$core$form_to47218(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47274 = arguments.length;
var i__4737__auto___47275 = (0);
while(true){
if((i__4737__auto___47275 < len__4736__auto___47274)){
args__4742__auto__.push((arguments[i__4737__auto___47275]));

var G__47276 = (i__4737__auto___47275 + (1));
i__4737__auto___47275 = G__47276;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to47218.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to47218.cljs$core$IFn$_invoke$arity$variadic = (function (p__47221,body){
var vec__47222 = p__47221;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to47218.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to47218.cljs$lang$applyTo = (function (seq47219){
var G__47220 = cljs.core.first(seq47219);
var seq47219__$1 = cljs.core.next(seq47219);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47220,seq47219__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to47218);

//# sourceMappingURL=sablono.core.js.map
