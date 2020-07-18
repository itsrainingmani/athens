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
var G__41979__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41792 = cljs.core.seq(vec__41791);
var first__41793 = cljs.core.first(seq__41792);
var seq__41792__$1 = cljs.core.next(seq__41792);
var tag = first__41793;
var body = seq__41792__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41980__i = 0, G__41980__a = new Array(arguments.length -  0);
while (G__41980__i < G__41980__a.length) {G__41980__a[G__41980__i] = arguments[G__41980__i + 0]; ++G__41980__i;}
  args = new cljs.core.IndexedSeq(G__41980__a,0,null);
} 
return G__41979__delegate.call(this,args);};
G__41979.cljs$lang$maxFixedArity = 0;
G__41979.cljs$lang$applyTo = (function (arglist__41981){
var args = cljs.core.seq(arglist__41981);
return G__41979__delegate(args);
});
G__41979.cljs$core$IFn$_invoke$arity$variadic = G__41979__delegate;
return G__41979;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41798(s__41799){
return (new cljs.core.LazySeq(null,(function (){
var s__41799__$1 = s__41799;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41799__$1);
if(temp__5735__auto__){
var s__41799__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41799__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41799__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41801 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41800 = (0);
while(true){
if((i__41800 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41800);
cljs.core.chunk_append(b__41801,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41982 = (i__41800 + (1));
i__41800 = G__41982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41801),sablono$core$update_arglists_$_iter__41798(cljs.core.chunk_rest(s__41799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41801),null);
}
} else {
var args = cljs.core.first(s__41799__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41798(cljs.core.rest(s__41799__$2)));
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
var len__4789__auto___41983 = arguments.length;
var i__4790__auto___41984 = (0);
while(true){
if((i__4790__auto___41984 < len__4789__auto___41983)){
args__4795__auto__.push((arguments[i__4790__auto___41984]));

var G__41985 = (i__4790__auto___41984 + (1));
i__4790__auto___41984 = G__41985;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41809(s__41810){
return (new cljs.core.LazySeq(null,(function (){
var s__41810__$1 = s__41810;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41810__$1);
if(temp__5735__auto__){
var s__41810__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41810__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41810__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41812 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41811 = (0);
while(true){
if((i__41811 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41811);
cljs.core.chunk_append(b__41812,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41986 = (i__41811 + (1));
i__41811 = G__41986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41812),sablono$core$iter__41809(cljs.core.chunk_rest(s__41810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41812),null);
}
} else {
var style = cljs.core.first(s__41810__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41809(cljs.core.rest(s__41810__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41804){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41804));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41829 = goog.dom.getDocument().body;
var G__41830 = (function (){var G__41831 = "script";
var G__41832 = ({"src": src});
return goog.dom.createDom(G__41831,G__41832);
})();
return goog.dom.appendChild(G__41829,G__41830);
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
sablono.core.link_to41837 = (function sablono$core$link_to41837(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41987 = arguments.length;
var i__4790__auto___41988 = (0);
while(true){
if((i__4790__auto___41988 < len__4789__auto___41987)){
args__4795__auto__.push((arguments[i__4790__auto___41988]));

var G__41989 = (i__4790__auto___41988 + (1));
i__4790__auto___41988 = G__41989;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41837.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41837.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41837.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41837.cljs$lang$applyTo = (function (seq41838){
var G__41839 = cljs.core.first(seq41838);
var seq41838__$1 = cljs.core.next(seq41838);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41839,seq41838__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41837);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41848 = (function sablono$core$mail_to41848(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41990 = arguments.length;
var i__4790__auto___41991 = (0);
while(true){
if((i__4790__auto___41991 < len__4789__auto___41990)){
args__4795__auto__.push((arguments[i__4790__auto___41991]));

var G__41992 = (i__4790__auto___41991 + (1));
i__4790__auto___41991 = G__41992;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41848.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41848.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41852){
var vec__41854 = p__41852;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41854,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41848.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41848.cljs$lang$applyTo = (function (seq41849){
var G__41850 = cljs.core.first(seq41849);
var seq41849__$1 = cljs.core.next(seq41849);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41850,seq41849__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41848);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41860 = (function sablono$core$unordered_list41860(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41860_$_iter__41861(s__41862){
return (new cljs.core.LazySeq(null,(function (){
var s__41862__$1 = s__41862;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41862__$1);
if(temp__5735__auto__){
var s__41862__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41862__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41862__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41864 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41863 = (0);
while(true){
if((i__41863 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41863);
cljs.core.chunk_append(b__41864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41993 = (i__41863 + (1));
i__41863 = G__41993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41864),sablono$core$unordered_list41860_$_iter__41861(cljs.core.chunk_rest(s__41862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41864),null);
}
} else {
var x = cljs.core.first(s__41862__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41860_$_iter__41861(cljs.core.rest(s__41862__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41860);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41871 = (function sablono$core$ordered_list41871(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41871_$_iter__41872(s__41873){
return (new cljs.core.LazySeq(null,(function (){
var s__41873__$1 = s__41873;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41873__$1);
if(temp__5735__auto__){
var s__41873__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41873__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41873__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41875 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41874 = (0);
while(true){
if((i__41874 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41874);
cljs.core.chunk_append(b__41875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41996 = (i__41874 + (1));
i__41874 = G__41996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),sablono$core$ordered_list41871_$_iter__41872(cljs.core.chunk_rest(s__41873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41875),null);
}
} else {
var x = cljs.core.first(s__41873__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41871_$_iter__41872(cljs.core.rest(s__41873__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41871);
/**
 * Create an image element.
 */
sablono.core.image41882 = (function sablono$core$image41882(var_args){
var G__41884 = arguments.length;
switch (G__41884) {
case 1:
return sablono.core.image41882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41882.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41882.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41882.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41882);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41885_SHARP_,p2__41886_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41885_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41886_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41887_SHARP_,p2__41888_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41887_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41888_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41890 = arguments.length;
switch (G__41890) {
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
sablono.core.color_field41891 = (function sablono$core$color_field41891(var_args){
var G__41893 = arguments.length;
switch (G__41893) {
case 1:
return sablono.core.color_field41891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41891.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41783__auto__);
}));

(sablono.core.color_field41891.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.color_field41891.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41891);

/**
 * Creates a date input field.
 */
sablono.core.date_field41894 = (function sablono$core$date_field41894(var_args){
var G__41896 = arguments.length;
switch (G__41896) {
case 1:
return sablono.core.date_field41894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41894.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41783__auto__);
}));

(sablono.core.date_field41894.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.date_field41894.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41894);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41897 = (function sablono$core$datetime_field41897(var_args){
var G__41899 = arguments.length;
switch (G__41899) {
case 1:
return sablono.core.datetime_field41897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41897.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41783__auto__);
}));

(sablono.core.datetime_field41897.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.datetime_field41897.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41897);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41900 = (function sablono$core$datetime_local_field41900(var_args){
var G__41902 = arguments.length;
switch (G__41902) {
case 1:
return sablono.core.datetime_local_field41900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41900.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41783__auto__);
}));

(sablono.core.datetime_local_field41900.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.datetime_local_field41900.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41900);

/**
 * Creates a email input field.
 */
sablono.core.email_field41903 = (function sablono$core$email_field41903(var_args){
var G__41905 = arguments.length;
switch (G__41905) {
case 1:
return sablono.core.email_field41903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41903.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41783__auto__);
}));

(sablono.core.email_field41903.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.email_field41903.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41903);

/**
 * Creates a file input field.
 */
sablono.core.file_field41906 = (function sablono$core$file_field41906(var_args){
var G__41908 = arguments.length;
switch (G__41908) {
case 1:
return sablono.core.file_field41906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41906.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41783__auto__);
}));

(sablono.core.file_field41906.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.file_field41906.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41906);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41909 = (function sablono$core$hidden_field41909(var_args){
var G__41911 = arguments.length;
switch (G__41911) {
case 1:
return sablono.core.hidden_field41909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41909.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41783__auto__);
}));

(sablono.core.hidden_field41909.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.hidden_field41909.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41909);

/**
 * Creates a month input field.
 */
sablono.core.month_field41912 = (function sablono$core$month_field41912(var_args){
var G__41914 = arguments.length;
switch (G__41914) {
case 1:
return sablono.core.month_field41912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41912.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41783__auto__);
}));

(sablono.core.month_field41912.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.month_field41912.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41912);

/**
 * Creates a number input field.
 */
sablono.core.number_field41915 = (function sablono$core$number_field41915(var_args){
var G__41917 = arguments.length;
switch (G__41917) {
case 1:
return sablono.core.number_field41915.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41915.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41783__auto__);
}));

(sablono.core.number_field41915.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.number_field41915.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41915);

/**
 * Creates a password input field.
 */
sablono.core.password_field41918 = (function sablono$core$password_field41918(var_args){
var G__41920 = arguments.length;
switch (G__41920) {
case 1:
return sablono.core.password_field41918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41918.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41783__auto__);
}));

(sablono.core.password_field41918.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.password_field41918.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41918);

/**
 * Creates a range input field.
 */
sablono.core.range_field41921 = (function sablono$core$range_field41921(var_args){
var G__41923 = arguments.length;
switch (G__41923) {
case 1:
return sablono.core.range_field41921.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41921.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41783__auto__);
}));

(sablono.core.range_field41921.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.range_field41921.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41921);

/**
 * Creates a search input field.
 */
sablono.core.search_field41924 = (function sablono$core$search_field41924(var_args){
var G__41926 = arguments.length;
switch (G__41926) {
case 1:
return sablono.core.search_field41924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41924.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41783__auto__);
}));

(sablono.core.search_field41924.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.search_field41924.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41924);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41927 = (function sablono$core$tel_field41927(var_args){
var G__41929 = arguments.length;
switch (G__41929) {
case 1:
return sablono.core.tel_field41927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41927.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41783__auto__);
}));

(sablono.core.tel_field41927.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.tel_field41927.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41927);

/**
 * Creates a text input field.
 */
sablono.core.text_field41930 = (function sablono$core$text_field41930(var_args){
var G__41932 = arguments.length;
switch (G__41932) {
case 1:
return sablono.core.text_field41930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41930.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41783__auto__);
}));

(sablono.core.text_field41930.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.text_field41930.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41930);

/**
 * Creates a time input field.
 */
sablono.core.time_field41933 = (function sablono$core$time_field41933(var_args){
var G__41935 = arguments.length;
switch (G__41935) {
case 1:
return sablono.core.time_field41933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41933.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41783__auto__);
}));

(sablono.core.time_field41933.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.time_field41933.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41933);

/**
 * Creates a url input field.
 */
sablono.core.url_field41936 = (function sablono$core$url_field41936(var_args){
var G__41938 = arguments.length;
switch (G__41938) {
case 1:
return sablono.core.url_field41936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41936.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41783__auto__);
}));

(sablono.core.url_field41936.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.url_field41936.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41936);

/**
 * Creates a week input field.
 */
sablono.core.week_field41939 = (function sablono$core$week_field41939(var_args){
var G__41941 = arguments.length;
switch (G__41941) {
case 1:
return sablono.core.week_field41939.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41939.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41939.cljs$core$IFn$_invoke$arity$1 = (function (name__41783__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41783__auto__);
}));

(sablono.core.week_field41939.cljs$core$IFn$_invoke$arity$2 = (function (name__41783__auto__,value__41784__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41783__auto__,value__41784__auto__);
}));

(sablono.core.week_field41939.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41939);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41942 = (function sablono$core$check_box41942(var_args){
var G__41944 = arguments.length;
switch (G__41944) {
case 1:
return sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41942.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41942.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41942);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41945 = (function sablono$core$radio_button41945(var_args){
var G__41947 = arguments.length;
switch (G__41947) {
case 1:
return sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41945.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41945.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41945);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41948 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41948);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41949 = (function sablono$core$select_options41949(coll){
var iter__4582__auto__ = (function sablono$core$select_options41949_$_iter__41950(s__41951){
return (new cljs.core.LazySeq(null,(function (){
var s__41951__$1 = s__41951;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41951__$1);
if(temp__5735__auto__){
var s__41951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41951__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41951__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41953 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41952 = (0);
while(true){
if((i__41952 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41952);
cljs.core.chunk_append(b__41953,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41954 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41949.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41949.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41949.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42025 = (i__41952 + (1));
i__41952 = G__42025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41953),sablono$core$select_options41949_$_iter__41950(cljs.core.chunk_rest(s__41951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41953),null);
}
} else {
var x = cljs.core.first(s__41951__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41957 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41957,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41957,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41957,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41949.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41949.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41949.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41949_$_iter__41950(cljs.core.rest(s__41951__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41949);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41960 = (function sablono$core$drop_down41960(var_args){
var G__41962 = arguments.length;
switch (G__41962) {
case 2:
return sablono.core.drop_down41960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41960.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41960.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41960.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41960.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41960.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41960);
/**
 * Creates a text area element.
 */
sablono.core.text_area41963 = (function sablono$core$text_area41963(var_args){
var G__41965 = arguments.length;
switch (G__41965) {
case 1:
return sablono.core.text_area41963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41963.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41963.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41963.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41963);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41966 = (function sablono$core$label41966(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41966);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41967 = (function sablono$core$submit_button41967(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41967);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41968 = (function sablono$core$reset_button41968(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41968);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41969 = (function sablono$core$form_to41969(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42028 = arguments.length;
var i__4790__auto___42029 = (0);
while(true){
if((i__4790__auto___42029 < len__4789__auto___42028)){
args__4795__auto__.push((arguments[i__4790__auto___42029]));

var G__42030 = (i__4790__auto___42029 + (1));
i__4790__auto___42029 = G__42030;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41969.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41969.cljs$core$IFn$_invoke$arity$variadic = (function (p__41972,body){
var vec__41973 = p__41972;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41973,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41973,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41976 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41977 = "_method";
var G__41978 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41976,G__41977,G__41978) : sablono.core.hidden_field.call(null,G__41976,G__41977,G__41978));
})()], null)),body));
}));

(sablono.core.form_to41969.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41969.cljs$lang$applyTo = (function (seq41970){
var G__41971 = cljs.core.first(seq41970);
var seq41970__$1 = cljs.core.next(seq41970);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41971,seq41970__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41969);

//# sourceMappingURL=sablono.core.js.map
