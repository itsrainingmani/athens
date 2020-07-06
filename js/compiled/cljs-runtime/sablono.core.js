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
var G__72722__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__72518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__72519 = cljs.core.seq(vec__72518);
var first__72520 = cljs.core.first(seq__72519);
var seq__72519__$1 = cljs.core.next(seq__72519);
var tag = first__72520;
var body = seq__72519__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__72722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72724__i = 0, G__72724__a = new Array(arguments.length -  0);
while (G__72724__i < G__72724__a.length) {G__72724__a[G__72724__i] = arguments[G__72724__i + 0]; ++G__72724__i;}
  args = new cljs.core.IndexedSeq(G__72724__a,0,null);
} 
return G__72722__delegate.call(this,args);};
G__72722.cljs$lang$maxFixedArity = 0;
G__72722.cljs$lang$applyTo = (function (arglist__72725){
var args = cljs.core.seq(arglist__72725);
return G__72722__delegate(args);
});
G__72722.cljs$core$IFn$_invoke$arity$variadic = G__72722__delegate;
return G__72722;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__72521(s__72522){
return (new cljs.core.LazySeq(null,(function (){
var s__72522__$1 = s__72522;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72522__$1);
if(temp__5735__auto__){
var s__72522__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72522__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72522__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72524 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72523 = (0);
while(true){
if((i__72523 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72523);
cljs.core.chunk_append(b__72524,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__72727 = (i__72523 + (1));
i__72523 = G__72727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72524),sablono$core$update_arglists_$_iter__72521(cljs.core.chunk_rest(s__72522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72524),null);
}
} else {
var args = cljs.core.first(s__72522__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__72521(cljs.core.rest(s__72522__$2)));
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
var len__4789__auto___72728 = arguments.length;
var i__4790__auto___72729 = (0);
while(true){
if((i__4790__auto___72729 < len__4789__auto___72728)){
args__4795__auto__.push((arguments[i__4790__auto___72729]));

var G__72730 = (i__4790__auto___72729 + (1));
i__4790__auto___72729 = G__72730;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__72526(s__72527){
return (new cljs.core.LazySeq(null,(function (){
var s__72527__$1 = s__72527;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72527__$1);
if(temp__5735__auto__){
var s__72527__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72527__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72527__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72529 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72528 = (0);
while(true){
if((i__72528 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72528);
cljs.core.chunk_append(b__72529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__72733 = (i__72528 + (1));
i__72528 = G__72733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72529),sablono$core$iter__72526(cljs.core.chunk_rest(s__72527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72529),null);
}
} else {
var style = cljs.core.first(s__72527__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__72526(cljs.core.rest(s__72527__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq72525){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72525));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__72535 = goog.dom.getDocument().body;
var G__72536 = (function (){var G__72539 = "script";
var G__72540 = ({"src": src});
return goog.dom.createDom(G__72539,G__72540);
})();
return goog.dom.appendChild(G__72535,G__72536);
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
sablono.core.link_to72544 = (function sablono$core$link_to72544(var_args){
var args__4795__auto__ = [];
var len__4789__auto___72737 = arguments.length;
var i__4790__auto___72738 = (0);
while(true){
if((i__4790__auto___72738 < len__4789__auto___72737)){
args__4795__auto__.push((arguments[i__4790__auto___72738]));

var G__72739 = (i__4790__auto___72738 + (1));
i__4790__auto___72738 = G__72739;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to72544.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to72544.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to72544.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to72544.cljs$lang$applyTo = (function (seq72545){
var G__72546 = cljs.core.first(seq72545);
var seq72545__$1 = cljs.core.next(seq72545);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72546,seq72545__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to72544);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to72553 = (function sablono$core$mail_to72553(var_args){
var args__4795__auto__ = [];
var len__4789__auto___72741 = arguments.length;
var i__4790__auto___72743 = (0);
while(true){
if((i__4790__auto___72743 < len__4789__auto___72741)){
args__4795__auto__.push((arguments[i__4790__auto___72743]));

var G__72744 = (i__4790__auto___72743 + (1));
i__4790__auto___72743 = G__72744;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to72553.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to72553.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__72557){
var vec__72558 = p__72557;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72558,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to72553.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to72553.cljs$lang$applyTo = (function (seq72554){
var G__72555 = cljs.core.first(seq72554);
var seq72554__$1 = cljs.core.next(seq72554);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72555,seq72554__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to72553);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list72563 = (function sablono$core$unordered_list72563(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list72563_$_iter__72565(s__72566){
return (new cljs.core.LazySeq(null,(function (){
var s__72566__$1 = s__72566;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72566__$1);
if(temp__5735__auto__){
var s__72566__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72566__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72566__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72568 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72567 = (0);
while(true){
if((i__72567 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72567);
cljs.core.chunk_append(b__72568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__72748 = (i__72567 + (1));
i__72567 = G__72748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72568),sablono$core$unordered_list72563_$_iter__72565(cljs.core.chunk_rest(s__72566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72568),null);
}
} else {
var x = cljs.core.first(s__72566__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list72563_$_iter__72565(cljs.core.rest(s__72566__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list72563);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list72571 = (function sablono$core$ordered_list72571(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list72571_$_iter__72572(s__72573){
return (new cljs.core.LazySeq(null,(function (){
var s__72573__$1 = s__72573;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72573__$1);
if(temp__5735__auto__){
var s__72573__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72573__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72573__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72575 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72574 = (0);
while(true){
if((i__72574 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72574);
cljs.core.chunk_append(b__72575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__72751 = (i__72574 + (1));
i__72574 = G__72751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72575),sablono$core$ordered_list72571_$_iter__72572(cljs.core.chunk_rest(s__72573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72575),null);
}
} else {
var x = cljs.core.first(s__72573__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list72571_$_iter__72572(cljs.core.rest(s__72573__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list72571);
/**
 * Create an image element.
 */
sablono.core.image72576 = (function sablono$core$image72576(var_args){
var G__72578 = arguments.length;
switch (G__72578) {
case 1:
return sablono.core.image72576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image72576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image72576.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image72576.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image72576.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image72576);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__72579_SHARP_,p2__72580_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72579_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__72580_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__72581_SHARP_,p2__72582_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72581_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__72582_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__72584 = arguments.length;
switch (G__72584) {
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
sablono.core.color_field72585 = (function sablono$core$color_field72585(var_args){
var G__72587 = arguments.length;
switch (G__72587) {
case 1:
return sablono.core.color_field72585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field72585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field72585.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__72510__auto__);
}));

(sablono.core.color_field72585.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.color_field72585.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field72585);

/**
 * Creates a date input field.
 */
sablono.core.date_field72588 = (function sablono$core$date_field72588(var_args){
var G__72590 = arguments.length;
switch (G__72590) {
case 1:
return sablono.core.date_field72588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field72588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field72588.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__72510__auto__);
}));

(sablono.core.date_field72588.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.date_field72588.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field72588);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field72591 = (function sablono$core$datetime_field72591(var_args){
var G__72593 = arguments.length;
switch (G__72593) {
case 1:
return sablono.core.datetime_field72591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field72591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field72591.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__72510__auto__);
}));

(sablono.core.datetime_field72591.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.datetime_field72591.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field72591);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field72594 = (function sablono$core$datetime_local_field72594(var_args){
var G__72596 = arguments.length;
switch (G__72596) {
case 1:
return sablono.core.datetime_local_field72594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field72594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field72594.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__72510__auto__);
}));

(sablono.core.datetime_local_field72594.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.datetime_local_field72594.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field72594);

/**
 * Creates a email input field.
 */
sablono.core.email_field72597 = (function sablono$core$email_field72597(var_args){
var G__72599 = arguments.length;
switch (G__72599) {
case 1:
return sablono.core.email_field72597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field72597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field72597.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__72510__auto__);
}));

(sablono.core.email_field72597.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.email_field72597.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field72597);

/**
 * Creates a file input field.
 */
sablono.core.file_field72600 = (function sablono$core$file_field72600(var_args){
var G__72602 = arguments.length;
switch (G__72602) {
case 1:
return sablono.core.file_field72600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field72600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field72600.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__72510__auto__);
}));

(sablono.core.file_field72600.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.file_field72600.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field72600);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field72603 = (function sablono$core$hidden_field72603(var_args){
var G__72605 = arguments.length;
switch (G__72605) {
case 1:
return sablono.core.hidden_field72603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field72603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field72603.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__72510__auto__);
}));

(sablono.core.hidden_field72603.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.hidden_field72603.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field72603);

/**
 * Creates a month input field.
 */
sablono.core.month_field72606 = (function sablono$core$month_field72606(var_args){
var G__72610 = arguments.length;
switch (G__72610) {
case 1:
return sablono.core.month_field72606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field72606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field72606.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__72510__auto__);
}));

(sablono.core.month_field72606.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.month_field72606.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field72606);

/**
 * Creates a number input field.
 */
sablono.core.number_field72612 = (function sablono$core$number_field72612(var_args){
var G__72617 = arguments.length;
switch (G__72617) {
case 1:
return sablono.core.number_field72612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field72612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field72612.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__72510__auto__);
}));

(sablono.core.number_field72612.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.number_field72612.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field72612);

/**
 * Creates a password input field.
 */
sablono.core.password_field72618 = (function sablono$core$password_field72618(var_args){
var G__72620 = arguments.length;
switch (G__72620) {
case 1:
return sablono.core.password_field72618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field72618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field72618.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__72510__auto__);
}));

(sablono.core.password_field72618.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.password_field72618.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field72618);

/**
 * Creates a range input field.
 */
sablono.core.range_field72622 = (function sablono$core$range_field72622(var_args){
var G__72626 = arguments.length;
switch (G__72626) {
case 1:
return sablono.core.range_field72622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field72622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field72622.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__72510__auto__);
}));

(sablono.core.range_field72622.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.range_field72622.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field72622);

/**
 * Creates a search input field.
 */
sablono.core.search_field72627 = (function sablono$core$search_field72627(var_args){
var G__72629 = arguments.length;
switch (G__72629) {
case 1:
return sablono.core.search_field72627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field72627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field72627.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__72510__auto__);
}));

(sablono.core.search_field72627.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.search_field72627.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field72627);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field72631 = (function sablono$core$tel_field72631(var_args){
var G__72633 = arguments.length;
switch (G__72633) {
case 1:
return sablono.core.tel_field72631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field72631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field72631.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__72510__auto__);
}));

(sablono.core.tel_field72631.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.tel_field72631.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field72631);

/**
 * Creates a text input field.
 */
sablono.core.text_field72634 = (function sablono$core$text_field72634(var_args){
var G__72636 = arguments.length;
switch (G__72636) {
case 1:
return sablono.core.text_field72634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field72634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field72634.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__72510__auto__);
}));

(sablono.core.text_field72634.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.text_field72634.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field72634);

/**
 * Creates a time input field.
 */
sablono.core.time_field72639 = (function sablono$core$time_field72639(var_args){
var G__72641 = arguments.length;
switch (G__72641) {
case 1:
return sablono.core.time_field72639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field72639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field72639.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__72510__auto__);
}));

(sablono.core.time_field72639.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.time_field72639.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field72639);

/**
 * Creates a url input field.
 */
sablono.core.url_field72642 = (function sablono$core$url_field72642(var_args){
var G__72644 = arguments.length;
switch (G__72644) {
case 1:
return sablono.core.url_field72642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field72642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field72642.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__72510__auto__);
}));

(sablono.core.url_field72642.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.url_field72642.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field72642);

/**
 * Creates a week input field.
 */
sablono.core.week_field72645 = (function sablono$core$week_field72645(var_args){
var G__72647 = arguments.length;
switch (G__72647) {
case 1:
return sablono.core.week_field72645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field72645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field72645.cljs$core$IFn$_invoke$arity$1 = (function (name__72510__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__72510__auto__);
}));

(sablono.core.week_field72645.cljs$core$IFn$_invoke$arity$2 = (function (name__72510__auto__,value__72511__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__72510__auto__,value__72511__auto__);
}));

(sablono.core.week_field72645.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field72645);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box72649 = (function sablono$core$check_box72649(var_args){
var G__72651 = arguments.length;
switch (G__72651) {
case 1:
return sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box72649.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box72649.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box72649);
/**
 * Creates a radio button.
 */
sablono.core.radio_button72653 = (function sablono$core$radio_button72653(var_args){
var G__72662 = arguments.length;
switch (G__72662) {
case 1:
return sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button72653.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button72653.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button72653);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__72665 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__72665);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options72666 = (function sablono$core$select_options72666(coll){
var iter__4582__auto__ = (function sablono$core$select_options72666_$_iter__72668(s__72669){
return (new cljs.core.LazySeq(null,(function (){
var s__72669__$1 = s__72669;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72669__$1);
if(temp__5735__auto__){
var s__72669__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72669__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72669__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72671 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72670 = (0);
while(true){
if((i__72670 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72670);
cljs.core.chunk_append(b__72671,((cljs.core.sequential_QMARK_(x))?(function (){var vec__72675 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72675,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72675,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72675,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options72666.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options72666.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options72666.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__72844 = (i__72670 + (1));
i__72670 = G__72844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72671),sablono$core$select_options72666_$_iter__72668(cljs.core.chunk_rest(s__72669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72671),null);
}
} else {
var x = cljs.core.first(s__72669__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__72680 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72680,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72680,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72680,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options72666.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options72666.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options72666.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options72666_$_iter__72668(cljs.core.rest(s__72669__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options72666);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down72683 = (function sablono$core$drop_down72683(var_args){
var G__72685 = arguments.length;
switch (G__72685) {
case 2:
return sablono.core.drop_down72683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down72683.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down72683.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down72683.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down72683.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down72683.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down72683);
/**
 * Creates a text area element.
 */
sablono.core.text_area72687 = (function sablono$core$text_area72687(var_args){
var G__72689 = arguments.length;
switch (G__72689) {
case 1:
return sablono.core.text_area72687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area72687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area72687.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area72687.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area72687.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area72687);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label72690 = (function sablono$core$label72690(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label72690);
/**
 * Creates a submit button.
 */
sablono.core.submit_button72694 = (function sablono$core$submit_button72694(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button72694);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button72698 = (function sablono$core$reset_button72698(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button72698);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to72699 = (function sablono$core$form_to72699(var_args){
var args__4795__auto__ = [];
var len__4789__auto___72851 = arguments.length;
var i__4790__auto___72852 = (0);
while(true){
if((i__4790__auto___72852 < len__4789__auto___72851)){
args__4795__auto__.push((arguments[i__4790__auto___72852]));

var G__72855 = (i__4790__auto___72852 + (1));
i__4790__auto___72852 = G__72855;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to72699.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to72699.cljs$core$IFn$_invoke$arity$variadic = (function (p__72707,body){
var vec__72710 = p__72707;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72710,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72710,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__72718 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__72719 = "_method";
var G__72720 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__72718,G__72719,G__72720) : sablono.core.hidden_field.call(null,G__72718,G__72719,G__72720));
})()], null)),body));
}));

(sablono.core.form_to72699.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to72699.cljs$lang$applyTo = (function (seq72700){
var G__72701 = cljs.core.first(seq72700);
var seq72700__$1 = cljs.core.next(seq72700);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72701,seq72700__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to72699);

//# sourceMappingURL=sablono.core.js.map
