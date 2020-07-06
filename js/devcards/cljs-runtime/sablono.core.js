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
var G__64250__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__64065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__64066 = cljs.core.seq(vec__64065);
var first__64067 = cljs.core.first(seq__64066);
var seq__64066__$1 = cljs.core.next(seq__64066);
var tag = first__64067;
var body = seq__64066__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__64250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64251__i = 0, G__64251__a = new Array(arguments.length -  0);
while (G__64251__i < G__64251__a.length) {G__64251__a[G__64251__i] = arguments[G__64251__i + 0]; ++G__64251__i;}
  args = new cljs.core.IndexedSeq(G__64251__a,0,null);
} 
return G__64250__delegate.call(this,args);};
G__64250.cljs$lang$maxFixedArity = 0;
G__64250.cljs$lang$applyTo = (function (arglist__64252){
var args = cljs.core.seq(arglist__64252);
return G__64250__delegate(args);
});
G__64250.cljs$core$IFn$_invoke$arity$variadic = G__64250__delegate;
return G__64250;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__64068(s__64069){
return (new cljs.core.LazySeq(null,(function (){
var s__64069__$1 = s__64069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64069__$1);
if(temp__5735__auto__){
var s__64069__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64069__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__64069__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__64071 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__64070 = (0);
while(true){
if((i__64070 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__64070);
cljs.core.chunk_append(b__64071,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__64256 = (i__64070 + (1));
i__64070 = G__64256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64071),sablono$core$update_arglists_$_iter__64068(cljs.core.chunk_rest(s__64069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64071),null);
}
} else {
var args = cljs.core.first(s__64069__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__64068(cljs.core.rest(s__64069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64275 = arguments.length;
var i__4790__auto___64276 = (0);
while(true){
if((i__4790__auto___64276 < len__4789__auto___64275)){
args__4795__auto__.push((arguments[i__4790__auto___64276]));

var G__64277 = (i__4790__auto___64276 + (1));
i__4790__auto___64276 = G__64277;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__64073(s__64074){
return (new cljs.core.LazySeq(null,(function (){
var s__64074__$1 = s__64074;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64074__$1);
if(temp__5735__auto__){
var s__64074__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64074__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__64074__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__64076 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__64075 = (0);
while(true){
if((i__64075 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__64075);
cljs.core.chunk_append(b__64076,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__64285 = (i__64075 + (1));
i__64075 = G__64285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64076),sablono$core$iter__64073(cljs.core.chunk_rest(s__64074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64076),null);
}
} else {
var style = cljs.core.first(s__64074__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__64073(cljs.core.rest(s__64074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq64072){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64072));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__64077 = goog.dom.getDocument().body;
var G__64078 = (function (){var G__64079 = "script";
var G__64080 = ({"src": src});
return goog.dom.createDom(G__64079,G__64080);
})();
return goog.dom.appendChild(G__64077,G__64078);
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
sablono.core.link_to64081 = (function sablono$core$link_to64081(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64287 = arguments.length;
var i__4790__auto___64288 = (0);
while(true){
if((i__4790__auto___64288 < len__4789__auto___64287)){
args__4795__auto__.push((arguments[i__4790__auto___64288]));

var G__64289 = (i__4790__auto___64288 + (1));
i__4790__auto___64288 = G__64289;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to64081.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to64081.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to64081.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to64081.cljs$lang$applyTo = (function (seq64082){
var G__64083 = cljs.core.first(seq64082);
var seq64082__$1 = cljs.core.next(seq64082);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64083,seq64082__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to64081);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to64084 = (function sablono$core$mail_to64084(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64296 = arguments.length;
var i__4790__auto___64297 = (0);
while(true){
if((i__4790__auto___64297 < len__4789__auto___64296)){
args__4795__auto__.push((arguments[i__4790__auto___64297]));

var G__64298 = (i__4790__auto___64297 + (1));
i__4790__auto___64297 = G__64298;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to64084.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to64084.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__64087){
var vec__64088 = p__64087;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64088,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to64084.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to64084.cljs$lang$applyTo = (function (seq64085){
var G__64086 = cljs.core.first(seq64085);
var seq64085__$1 = cljs.core.next(seq64085);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64086,seq64085__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to64084);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list64093 = (function sablono$core$unordered_list64093(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list64093_$_iter__64096(s__64097){
return (new cljs.core.LazySeq(null,(function (){
var s__64097__$1 = s__64097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64097__$1);
if(temp__5735__auto__){
var s__64097__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64097__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__64097__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__64099 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__64098 = (0);
while(true){
if((i__64098 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__64098);
cljs.core.chunk_append(b__64099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__64355 = (i__64098 + (1));
i__64098 = G__64355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64099),sablono$core$unordered_list64093_$_iter__64096(cljs.core.chunk_rest(s__64097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64099),null);
}
} else {
var x = cljs.core.first(s__64097__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list64093_$_iter__64096(cljs.core.rest(s__64097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list64093);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list64103 = (function sablono$core$ordered_list64103(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list64103_$_iter__64106(s__64107){
return (new cljs.core.LazySeq(null,(function (){
var s__64107__$1 = s__64107;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64107__$1);
if(temp__5735__auto__){
var s__64107__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64107__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__64107__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__64109 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__64108 = (0);
while(true){
if((i__64108 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__64108);
cljs.core.chunk_append(b__64109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__64357 = (i__64108 + (1));
i__64108 = G__64357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64109),sablono$core$ordered_list64103_$_iter__64106(cljs.core.chunk_rest(s__64107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64109),null);
}
} else {
var x = cljs.core.first(s__64107__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list64103_$_iter__64106(cljs.core.rest(s__64107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list64103);
/**
 * Create an image element.
 */
sablono.core.image64120 = (function sablono$core$image64120(var_args){
var G__64123 = arguments.length;
switch (G__64123) {
case 1:
return sablono.core.image64120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image64120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image64120.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image64120.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image64120.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image64120);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__64126_SHARP_,p2__64127_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64126_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__64127_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__64128_SHARP_,p2__64129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64128_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__64129_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__64131 = arguments.length;
switch (G__64131) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field64132 = (function sablono$core$color_field64132(var_args){
var G__64134 = arguments.length;
switch (G__64134) {
case 1:
return sablono.core.color_field64132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field64132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field64132.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__64057__auto__);
}));

(sablono.core.color_field64132.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.color_field64132.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field64132);

/**
 * Creates a date input field.
 */
sablono.core.date_field64135 = (function sablono$core$date_field64135(var_args){
var G__64137 = arguments.length;
switch (G__64137) {
case 1:
return sablono.core.date_field64135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field64135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field64135.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__64057__auto__);
}));

(sablono.core.date_field64135.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.date_field64135.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field64135);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field64138 = (function sablono$core$datetime_field64138(var_args){
var G__64140 = arguments.length;
switch (G__64140) {
case 1:
return sablono.core.datetime_field64138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field64138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field64138.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__64057__auto__);
}));

(sablono.core.datetime_field64138.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.datetime_field64138.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field64138);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field64141 = (function sablono$core$datetime_local_field64141(var_args){
var G__64143 = arguments.length;
switch (G__64143) {
case 1:
return sablono.core.datetime_local_field64141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field64141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field64141.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__64057__auto__);
}));

(sablono.core.datetime_local_field64141.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.datetime_local_field64141.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field64141);

/**
 * Creates a email input field.
 */
sablono.core.email_field64144 = (function sablono$core$email_field64144(var_args){
var G__64146 = arguments.length;
switch (G__64146) {
case 1:
return sablono.core.email_field64144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field64144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field64144.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__64057__auto__);
}));

(sablono.core.email_field64144.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.email_field64144.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field64144);

/**
 * Creates a file input field.
 */
sablono.core.file_field64147 = (function sablono$core$file_field64147(var_args){
var G__64149 = arguments.length;
switch (G__64149) {
case 1:
return sablono.core.file_field64147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field64147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field64147.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__64057__auto__);
}));

(sablono.core.file_field64147.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.file_field64147.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field64147);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field64150 = (function sablono$core$hidden_field64150(var_args){
var G__64152 = arguments.length;
switch (G__64152) {
case 1:
return sablono.core.hidden_field64150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field64150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field64150.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__64057__auto__);
}));

(sablono.core.hidden_field64150.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.hidden_field64150.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field64150);

/**
 * Creates a month input field.
 */
sablono.core.month_field64153 = (function sablono$core$month_field64153(var_args){
var G__64155 = arguments.length;
switch (G__64155) {
case 1:
return sablono.core.month_field64153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field64153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field64153.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__64057__auto__);
}));

(sablono.core.month_field64153.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.month_field64153.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field64153);

/**
 * Creates a number input field.
 */
sablono.core.number_field64156 = (function sablono$core$number_field64156(var_args){
var G__64158 = arguments.length;
switch (G__64158) {
case 1:
return sablono.core.number_field64156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field64156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field64156.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__64057__auto__);
}));

(sablono.core.number_field64156.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.number_field64156.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field64156);

/**
 * Creates a password input field.
 */
sablono.core.password_field64159 = (function sablono$core$password_field64159(var_args){
var G__64161 = arguments.length;
switch (G__64161) {
case 1:
return sablono.core.password_field64159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field64159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field64159.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__64057__auto__);
}));

(sablono.core.password_field64159.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.password_field64159.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field64159);

/**
 * Creates a range input field.
 */
sablono.core.range_field64162 = (function sablono$core$range_field64162(var_args){
var G__64164 = arguments.length;
switch (G__64164) {
case 1:
return sablono.core.range_field64162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field64162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field64162.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__64057__auto__);
}));

(sablono.core.range_field64162.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.range_field64162.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field64162);

/**
 * Creates a search input field.
 */
sablono.core.search_field64165 = (function sablono$core$search_field64165(var_args){
var G__64167 = arguments.length;
switch (G__64167) {
case 1:
return sablono.core.search_field64165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field64165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field64165.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__64057__auto__);
}));

(sablono.core.search_field64165.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.search_field64165.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field64165);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field64171 = (function sablono$core$tel_field64171(var_args){
var G__64173 = arguments.length;
switch (G__64173) {
case 1:
return sablono.core.tel_field64171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field64171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field64171.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__64057__auto__);
}));

(sablono.core.tel_field64171.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.tel_field64171.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field64171);

/**
 * Creates a text input field.
 */
sablono.core.text_field64177 = (function sablono$core$text_field64177(var_args){
var G__64179 = arguments.length;
switch (G__64179) {
case 1:
return sablono.core.text_field64177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field64177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field64177.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__64057__auto__);
}));

(sablono.core.text_field64177.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.text_field64177.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field64177);

/**
 * Creates a time input field.
 */
sablono.core.time_field64180 = (function sablono$core$time_field64180(var_args){
var G__64182 = arguments.length;
switch (G__64182) {
case 1:
return sablono.core.time_field64180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field64180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field64180.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__64057__auto__);
}));

(sablono.core.time_field64180.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.time_field64180.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field64180);

/**
 * Creates a url input field.
 */
sablono.core.url_field64183 = (function sablono$core$url_field64183(var_args){
var G__64185 = arguments.length;
switch (G__64185) {
case 1:
return sablono.core.url_field64183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field64183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field64183.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__64057__auto__);
}));

(sablono.core.url_field64183.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.url_field64183.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field64183);

/**
 * Creates a week input field.
 */
sablono.core.week_field64189 = (function sablono$core$week_field64189(var_args){
var G__64191 = arguments.length;
switch (G__64191) {
case 1:
return sablono.core.week_field64189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field64189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field64189.cljs$core$IFn$_invoke$arity$1 = (function (name__64057__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__64057__auto__);
}));

(sablono.core.week_field64189.cljs$core$IFn$_invoke$arity$2 = (function (name__64057__auto__,value__64058__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__64057__auto__,value__64058__auto__);
}));

(sablono.core.week_field64189.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field64189);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box64192 = (function sablono$core$check_box64192(var_args){
var G__64195 = arguments.length;
switch (G__64195) {
case 1:
return sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box64192.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box64192.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box64192);
/**
 * Creates a radio button.
 */
sablono.core.radio_button64197 = (function sablono$core$radio_button64197(var_args){
var G__64200 = arguments.length;
switch (G__64200) {
case 1:
return sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button64197.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button64197.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button64197);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__64201 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__64201);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options64202 = (function sablono$core$select_options64202(coll){
var iter__4582__auto__ = (function sablono$core$select_options64202_$_iter__64203(s__64204){
return (new cljs.core.LazySeq(null,(function (){
var s__64204__$1 = s__64204;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64204__$1);
if(temp__5735__auto__){
var s__64204__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64204__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__64204__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__64206 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__64205 = (0);
while(true){
if((i__64205 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__64205);
cljs.core.chunk_append(b__64206,((cljs.core.sequential_QMARK_(x))?(function (){var vec__64207 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64207,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64207,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64207,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options64202.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options64202.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options64202.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__64397 = (i__64205 + (1));
i__64205 = G__64397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64206),sablono$core$select_options64202_$_iter__64203(cljs.core.chunk_rest(s__64204__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64206),null);
}
} else {
var x = cljs.core.first(s__64204__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__64210 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options64202.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options64202.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options64202.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options64202_$_iter__64203(cljs.core.rest(s__64204__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options64202);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down64213 = (function sablono$core$drop_down64213(var_args){
var G__64215 = arguments.length;
switch (G__64215) {
case 2:
return sablono.core.drop_down64213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down64213.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down64213.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down64213.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down64213.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down64213.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down64213);
/**
 * Creates a text area element.
 */
sablono.core.text_area64218 = (function sablono$core$text_area64218(var_args){
var G__64221 = arguments.length;
switch (G__64221) {
case 1:
return sablono.core.text_area64218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area64218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area64218.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area64218.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area64218.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area64218);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label64229 = (function sablono$core$label64229(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label64229);
/**
 * Creates a submit button.
 */
sablono.core.submit_button64231 = (function sablono$core$submit_button64231(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button64231);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button64232 = (function sablono$core$reset_button64232(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button64232);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to64234 = (function sablono$core$form_to64234(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64407 = arguments.length;
var i__4790__auto___64408 = (0);
while(true){
if((i__4790__auto___64408 < len__4789__auto___64407)){
args__4795__auto__.push((arguments[i__4790__auto___64408]));

var G__64409 = (i__4790__auto___64408 + (1));
i__4790__auto___64408 = G__64409;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to64234.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to64234.cljs$core$IFn$_invoke$arity$variadic = (function (p__64239,body){
var vec__64241 = p__64239;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64241,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64241,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__64244 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__64245 = "_method";
var G__64246 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__64244,G__64245,G__64246) : sablono.core.hidden_field.call(null,G__64244,G__64245,G__64246));
})()], null)),body));
}));

(sablono.core.form_to64234.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to64234.cljs$lang$applyTo = (function (seq64236){
var G__64237 = cljs.core.first(seq64236);
var seq64236__$1 = cljs.core.next(seq64236);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64237,seq64236__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to64234);

//# sourceMappingURL=sablono.core.js.map
