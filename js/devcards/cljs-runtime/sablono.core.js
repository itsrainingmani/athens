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
var G__48153__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__47967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__47968 = cljs.core.seq(vec__47967);
var first__47969 = cljs.core.first(seq__47968);
var seq__47968__$1 = cljs.core.next(seq__47968);
var tag = first__47969;
var body = seq__47968__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__48153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48154__i = 0, G__48154__a = new Array(arguments.length -  0);
while (G__48154__i < G__48154__a.length) {G__48154__a[G__48154__i] = arguments[G__48154__i + 0]; ++G__48154__i;}
  args = new cljs.core.IndexedSeq(G__48154__a,0,null);
} 
return G__48153__delegate.call(this,args);};
G__48153.cljs$lang$maxFixedArity = 0;
G__48153.cljs$lang$applyTo = (function (arglist__48155){
var args = cljs.core.seq(arglist__48155);
return G__48153__delegate(args);
});
G__48153.cljs$core$IFn$_invoke$arity$variadic = G__48153__delegate;
return G__48153;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__47974(s__47975){
return (new cljs.core.LazySeq(null,(function (){
var s__47975__$1 = s__47975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47975__$1);
if(temp__5735__auto__){
var s__47975__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47975__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47975__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47977 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47976 = (0);
while(true){
if((i__47976 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47976);
cljs.core.chunk_append(b__47977,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__48156 = (i__47976 + (1));
i__47976 = G__48156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47977),sablono$core$update_arglists_$_iter__47974(cljs.core.chunk_rest(s__47975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47977),null);
}
} else {
var args = cljs.core.first(s__47975__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__47974(cljs.core.rest(s__47975__$2)));
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
var len__4789__auto___48157 = arguments.length;
var i__4790__auto___48158 = (0);
while(true){
if((i__4790__auto___48158 < len__4789__auto___48157)){
args__4795__auto__.push((arguments[i__4790__auto___48158]));

var G__48159 = (i__4790__auto___48158 + (1));
i__4790__auto___48158 = G__48159;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__47985(s__47986){
return (new cljs.core.LazySeq(null,(function (){
var s__47986__$1 = s__47986;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47986__$1);
if(temp__5735__auto__){
var s__47986__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47986__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47986__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47988 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47987 = (0);
while(true){
if((i__47987 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47987);
cljs.core.chunk_append(b__47988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__48160 = (i__47987 + (1));
i__47987 = G__48160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47988),sablono$core$iter__47985(cljs.core.chunk_rest(s__47986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47988),null);
}
} else {
var style = cljs.core.first(s__47986__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__47985(cljs.core.rest(s__47986__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq47982){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47982));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__48007 = goog.dom.getDocument().body;
var G__48008 = (function (){var G__48009 = "script";
var G__48010 = ({"src": src});
return goog.dom.createDom(G__48009,G__48010);
})();
return goog.dom.appendChild(G__48007,G__48008);
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
sablono.core.link_to48012 = (function sablono$core$link_to48012(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48161 = arguments.length;
var i__4790__auto___48162 = (0);
while(true){
if((i__4790__auto___48162 < len__4789__auto___48161)){
args__4795__auto__.push((arguments[i__4790__auto___48162]));

var G__48163 = (i__4790__auto___48162 + (1));
i__4790__auto___48162 = G__48163;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48012.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to48012.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to48012.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to48012.cljs$lang$applyTo = (function (seq48016){
var G__48017 = cljs.core.first(seq48016);
var seq48016__$1 = cljs.core.next(seq48016);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48017,seq48016__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to48012);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48023 = (function sablono$core$mail_to48023(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48164 = arguments.length;
var i__4790__auto___48165 = (0);
while(true){
if((i__4790__auto___48165 < len__4789__auto___48164)){
args__4795__auto__.push((arguments[i__4790__auto___48165]));

var G__48166 = (i__4790__auto___48165 + (1));
i__4790__auto___48165 = G__48166;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48023.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to48023.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48030){
var vec__48031 = p__48030;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48031,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to48023.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to48023.cljs$lang$applyTo = (function (seq48024){
var G__48025 = cljs.core.first(seq48024);
var seq48024__$1 = cljs.core.next(seq48024);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48025,seq48024__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to48023);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48034 = (function sablono$core$unordered_list48034(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list48034_$_iter__48035(s__48036){
return (new cljs.core.LazySeq(null,(function (){
var s__48036__$1 = s__48036;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48036__$1);
if(temp__5735__auto__){
var s__48036__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48036__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48036__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48038 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48037 = (0);
while(true){
if((i__48037 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48037);
cljs.core.chunk_append(b__48038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48167 = (i__48037 + (1));
i__48037 = G__48167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48038),sablono$core$unordered_list48034_$_iter__48035(cljs.core.chunk_rest(s__48036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48038),null);
}
} else {
var x = cljs.core.first(s__48036__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list48034_$_iter__48035(cljs.core.rest(s__48036__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list48034);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list48045 = (function sablono$core$ordered_list48045(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list48045_$_iter__48048(s__48049){
return (new cljs.core.LazySeq(null,(function (){
var s__48049__$1 = s__48049;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48049__$1);
if(temp__5735__auto__){
var s__48049__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48049__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48049__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48051 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48050 = (0);
while(true){
if((i__48050 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48050);
cljs.core.chunk_append(b__48051,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48170 = (i__48050 + (1));
i__48050 = G__48170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48051),sablono$core$ordered_list48045_$_iter__48048(cljs.core.chunk_rest(s__48049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48051),null);
}
} else {
var x = cljs.core.first(s__48049__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list48045_$_iter__48048(cljs.core.rest(s__48049__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list48045);
/**
 * Create an image element.
 */
sablono.core.image48056 = (function sablono$core$image48056(var_args){
var G__48058 = arguments.length;
switch (G__48058) {
case 1:
return sablono.core.image48056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image48056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image48056.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image48056.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image48056.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image48056);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48059_SHARP_,p2__48060_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48059_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48060_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48061_SHARP_,p2__48062_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48061_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48062_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__48064 = arguments.length;
switch (G__48064) {
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
sablono.core.color_field48065 = (function sablono$core$color_field48065(var_args){
var G__48067 = arguments.length;
switch (G__48067) {
case 1:
return sablono.core.color_field48065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field48065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field48065.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47957__auto__);
}));

(sablono.core.color_field48065.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.color_field48065.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field48065);

/**
 * Creates a date input field.
 */
sablono.core.date_field48068 = (function sablono$core$date_field48068(var_args){
var G__48070 = arguments.length;
switch (G__48070) {
case 1:
return sablono.core.date_field48068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field48068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field48068.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47957__auto__);
}));

(sablono.core.date_field48068.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.date_field48068.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field48068);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field48071 = (function sablono$core$datetime_field48071(var_args){
var G__48073 = arguments.length;
switch (G__48073) {
case 1:
return sablono.core.datetime_field48071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field48071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field48071.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47957__auto__);
}));

(sablono.core.datetime_field48071.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.datetime_field48071.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field48071);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field48074 = (function sablono$core$datetime_local_field48074(var_args){
var G__48076 = arguments.length;
switch (G__48076) {
case 1:
return sablono.core.datetime_local_field48074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field48074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field48074.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47957__auto__);
}));

(sablono.core.datetime_local_field48074.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.datetime_local_field48074.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field48074);

/**
 * Creates a email input field.
 */
sablono.core.email_field48077 = (function sablono$core$email_field48077(var_args){
var G__48079 = arguments.length;
switch (G__48079) {
case 1:
return sablono.core.email_field48077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field48077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field48077.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47957__auto__);
}));

(sablono.core.email_field48077.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.email_field48077.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field48077);

/**
 * Creates a file input field.
 */
sablono.core.file_field48080 = (function sablono$core$file_field48080(var_args){
var G__48082 = arguments.length;
switch (G__48082) {
case 1:
return sablono.core.file_field48080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field48080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field48080.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47957__auto__);
}));

(sablono.core.file_field48080.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.file_field48080.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field48080);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field48083 = (function sablono$core$hidden_field48083(var_args){
var G__48085 = arguments.length;
switch (G__48085) {
case 1:
return sablono.core.hidden_field48083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field48083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field48083.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47957__auto__);
}));

(sablono.core.hidden_field48083.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.hidden_field48083.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field48083);

/**
 * Creates a month input field.
 */
sablono.core.month_field48086 = (function sablono$core$month_field48086(var_args){
var G__48088 = arguments.length;
switch (G__48088) {
case 1:
return sablono.core.month_field48086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field48086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field48086.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47957__auto__);
}));

(sablono.core.month_field48086.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.month_field48086.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field48086);

/**
 * Creates a number input field.
 */
sablono.core.number_field48089 = (function sablono$core$number_field48089(var_args){
var G__48091 = arguments.length;
switch (G__48091) {
case 1:
return sablono.core.number_field48089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field48089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field48089.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47957__auto__);
}));

(sablono.core.number_field48089.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.number_field48089.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field48089);

/**
 * Creates a password input field.
 */
sablono.core.password_field48092 = (function sablono$core$password_field48092(var_args){
var G__48094 = arguments.length;
switch (G__48094) {
case 1:
return sablono.core.password_field48092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field48092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field48092.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47957__auto__);
}));

(sablono.core.password_field48092.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.password_field48092.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field48092);

/**
 * Creates a range input field.
 */
sablono.core.range_field48095 = (function sablono$core$range_field48095(var_args){
var G__48097 = arguments.length;
switch (G__48097) {
case 1:
return sablono.core.range_field48095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field48095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field48095.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47957__auto__);
}));

(sablono.core.range_field48095.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.range_field48095.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field48095);

/**
 * Creates a search input field.
 */
sablono.core.search_field48098 = (function sablono$core$search_field48098(var_args){
var G__48100 = arguments.length;
switch (G__48100) {
case 1:
return sablono.core.search_field48098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field48098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field48098.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47957__auto__);
}));

(sablono.core.search_field48098.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.search_field48098.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field48098);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field48101 = (function sablono$core$tel_field48101(var_args){
var G__48103 = arguments.length;
switch (G__48103) {
case 1:
return sablono.core.tel_field48101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field48101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field48101.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47957__auto__);
}));

(sablono.core.tel_field48101.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.tel_field48101.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field48101);

/**
 * Creates a text input field.
 */
sablono.core.text_field48104 = (function sablono$core$text_field48104(var_args){
var G__48106 = arguments.length;
switch (G__48106) {
case 1:
return sablono.core.text_field48104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field48104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field48104.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47957__auto__);
}));

(sablono.core.text_field48104.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.text_field48104.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field48104);

/**
 * Creates a time input field.
 */
sablono.core.time_field48107 = (function sablono$core$time_field48107(var_args){
var G__48109 = arguments.length;
switch (G__48109) {
case 1:
return sablono.core.time_field48107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field48107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field48107.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47957__auto__);
}));

(sablono.core.time_field48107.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.time_field48107.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field48107);

/**
 * Creates a url input field.
 */
sablono.core.url_field48110 = (function sablono$core$url_field48110(var_args){
var G__48112 = arguments.length;
switch (G__48112) {
case 1:
return sablono.core.url_field48110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field48110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field48110.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47957__auto__);
}));

(sablono.core.url_field48110.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.url_field48110.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field48110);

/**
 * Creates a week input field.
 */
sablono.core.week_field48113 = (function sablono$core$week_field48113(var_args){
var G__48115 = arguments.length;
switch (G__48115) {
case 1:
return sablono.core.week_field48113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field48113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field48113.cljs$core$IFn$_invoke$arity$1 = (function (name__47957__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47957__auto__);
}));

(sablono.core.week_field48113.cljs$core$IFn$_invoke$arity$2 = (function (name__47957__auto__,value__47958__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47957__auto__,value__47958__auto__);
}));

(sablono.core.week_field48113.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field48113);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box48116 = (function sablono$core$check_box48116(var_args){
var G__48118 = arguments.length;
switch (G__48118) {
case 1:
return sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box48116.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box48116.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box48116);
/**
 * Creates a radio button.
 */
sablono.core.radio_button48119 = (function sablono$core$radio_button48119(var_args){
var G__48121 = arguments.length;
switch (G__48121) {
case 1:
return sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button48119.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button48119.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button48119);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__48122 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__48122);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options48123 = (function sablono$core$select_options48123(coll){
var iter__4582__auto__ = (function sablono$core$select_options48123_$_iter__48124(s__48125){
return (new cljs.core.LazySeq(null,(function (){
var s__48125__$1 = s__48125;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48125__$1);
if(temp__5735__auto__){
var s__48125__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48125__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48125__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48127 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48126 = (0);
while(true){
if((i__48126 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48126);
cljs.core.chunk_append(b__48127,((cljs.core.sequential_QMARK_(x))?(function (){var vec__48128 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options48123.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48123.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48123.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__48199 = (i__48126 + (1));
i__48126 = G__48199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48127),sablono$core$select_options48123_$_iter__48124(cljs.core.chunk_rest(s__48125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48127),null);
}
} else {
var x = cljs.core.first(s__48125__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__48131 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options48123.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48123.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48123.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options48123_$_iter__48124(cljs.core.rest(s__48125__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options48123);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down48134 = (function sablono$core$drop_down48134(var_args){
var G__48136 = arguments.length;
switch (G__48136) {
case 2:
return sablono.core.drop_down48134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down48134.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down48134.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down48134.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down48134.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down48134.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down48134);
/**
 * Creates a text area element.
 */
sablono.core.text_area48137 = (function sablono$core$text_area48137(var_args){
var G__48139 = arguments.length;
switch (G__48139) {
case 1:
return sablono.core.text_area48137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area48137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area48137.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area48137.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area48137.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area48137);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label48140 = (function sablono$core$label48140(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label48140);
/**
 * Creates a submit button.
 */
sablono.core.submit_button48141 = (function sablono$core$submit_button48141(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button48141);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button48142 = (function sablono$core$reset_button48142(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button48142);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to48143 = (function sablono$core$form_to48143(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48202 = arguments.length;
var i__4790__auto___48203 = (0);
while(true){
if((i__4790__auto___48203 < len__4789__auto___48202)){
args__4795__auto__.push((arguments[i__4790__auto___48203]));

var G__48204 = (i__4790__auto___48203 + (1));
i__4790__auto___48203 = G__48204;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to48143.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to48143.cljs$core$IFn$_invoke$arity$variadic = (function (p__48146,body){
var vec__48147 = p__48146;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48147,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48147,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__48150 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__48151 = "_method";
var G__48152 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__48150,G__48151,G__48152) : sablono.core.hidden_field.call(null,G__48150,G__48151,G__48152));
})()], null)),body));
}));

(sablono.core.form_to48143.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to48143.cljs$lang$applyTo = (function (seq48144){
var G__48145 = cljs.core.first(seq48144);
var seq48144__$1 = cljs.core.next(seq48144);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48145,seq48144__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to48143);

//# sourceMappingURL=sablono.core.js.map
