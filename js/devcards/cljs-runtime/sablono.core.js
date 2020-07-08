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
var G__41704__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41520 = cljs.core.seq(vec__41519);
var first__41521 = cljs.core.first(seq__41520);
var seq__41520__$1 = cljs.core.next(seq__41520);
var tag = first__41521;
var body = seq__41520__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41705__i = 0, G__41705__a = new Array(arguments.length -  0);
while (G__41705__i < G__41705__a.length) {G__41705__a[G__41705__i] = arguments[G__41705__i + 0]; ++G__41705__i;}
  args = new cljs.core.IndexedSeq(G__41705__a,0,null);
} 
return G__41704__delegate.call(this,args);};
G__41704.cljs$lang$maxFixedArity = 0;
G__41704.cljs$lang$applyTo = (function (arglist__41706){
var args = cljs.core.seq(arglist__41706);
return G__41704__delegate(args);
});
G__41704.cljs$core$IFn$_invoke$arity$variadic = G__41704__delegate;
return G__41704;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41525(s__41526){
return (new cljs.core.LazySeq(null,(function (){
var s__41526__$1 = s__41526;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41526__$1);
if(temp__5735__auto__){
var s__41526__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41526__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41526__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41528 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41527 = (0);
while(true){
if((i__41527 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41527);
cljs.core.chunk_append(b__41528,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41707 = (i__41527 + (1));
i__41527 = G__41707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41528),sablono$core$update_arglists_$_iter__41525(cljs.core.chunk_rest(s__41526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41528),null);
}
} else {
var args = cljs.core.first(s__41526__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41525(cljs.core.rest(s__41526__$2)));
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
var len__4789__auto___41708 = arguments.length;
var i__4790__auto___41709 = (0);
while(true){
if((i__4790__auto___41709 < len__4789__auto___41708)){
args__4795__auto__.push((arguments[i__4790__auto___41709]));

var G__41710 = (i__4790__auto___41709 + (1));
i__4790__auto___41709 = G__41710;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41548(s__41549){
return (new cljs.core.LazySeq(null,(function (){
var s__41549__$1 = s__41549;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41549__$1);
if(temp__5735__auto__){
var s__41549__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41549__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41549__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41551 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41550 = (0);
while(true){
if((i__41550 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41550);
cljs.core.chunk_append(b__41551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41711 = (i__41550 + (1));
i__41550 = G__41711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41551),sablono$core$iter__41548(cljs.core.chunk_rest(s__41549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41551),null);
}
} else {
var style = cljs.core.first(s__41549__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41548(cljs.core.rest(s__41549__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41534){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41534));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41559 = goog.dom.getDocument().body;
var G__41560 = (function (){var G__41563 = "script";
var G__41564 = ({"src": src});
return goog.dom.createDom(G__41563,G__41564);
})();
return goog.dom.appendChild(G__41559,G__41560);
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
sablono.core.link_to41568 = (function sablono$core$link_to41568(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41712 = arguments.length;
var i__4790__auto___41713 = (0);
while(true){
if((i__4790__auto___41713 < len__4789__auto___41712)){
args__4795__auto__.push((arguments[i__4790__auto___41713]));

var G__41714 = (i__4790__auto___41713 + (1));
i__4790__auto___41713 = G__41714;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41568.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41568.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41568.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41568.cljs$lang$applyTo = (function (seq41571){
var G__41572 = cljs.core.first(seq41571);
var seq41571__$1 = cljs.core.next(seq41571);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41572,seq41571__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41568);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41578 = (function sablono$core$mail_to41578(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41715 = arguments.length;
var i__4790__auto___41716 = (0);
while(true){
if((i__4790__auto___41716 < len__4789__auto___41715)){
args__4795__auto__.push((arguments[i__4790__auto___41716]));

var G__41717 = (i__4790__auto___41716 + (1));
i__4790__auto___41716 = G__41717;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41578.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41578.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41581){
var vec__41582 = p__41581;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41582,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41578.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41578.cljs$lang$applyTo = (function (seq41579){
var G__41580 = cljs.core.first(seq41579);
var seq41579__$1 = cljs.core.next(seq41579);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41580,seq41579__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41578);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41591 = (function sablono$core$unordered_list41591(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41591_$_iter__41592(s__41593){
return (new cljs.core.LazySeq(null,(function (){
var s__41593__$1 = s__41593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41593__$1);
if(temp__5735__auto__){
var s__41593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41593__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41593__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41595 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41594 = (0);
while(true){
if((i__41594 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41594);
cljs.core.chunk_append(b__41595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41720 = (i__41594 + (1));
i__41594 = G__41720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41595),sablono$core$unordered_list41591_$_iter__41592(cljs.core.chunk_rest(s__41593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41595),null);
}
} else {
var x = cljs.core.first(s__41593__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41591_$_iter__41592(cljs.core.rest(s__41593__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41591);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41598 = (function sablono$core$ordered_list41598(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41598_$_iter__41603(s__41604){
return (new cljs.core.LazySeq(null,(function (){
var s__41604__$1 = s__41604;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41604__$1);
if(temp__5735__auto__){
var s__41604__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41604__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41604__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41606 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41605 = (0);
while(true){
if((i__41605 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41605);
cljs.core.chunk_append(b__41606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41722 = (i__41605 + (1));
i__41605 = G__41722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41606),sablono$core$ordered_list41598_$_iter__41603(cljs.core.chunk_rest(s__41604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41606),null);
}
} else {
var x = cljs.core.first(s__41604__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41598_$_iter__41603(cljs.core.rest(s__41604__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41598);
/**
 * Create an image element.
 */
sablono.core.image41607 = (function sablono$core$image41607(var_args){
var G__41609 = arguments.length;
switch (G__41609) {
case 1:
return sablono.core.image41607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41607.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41607.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41607.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41607);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41610_SHARP_,p2__41611_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41610_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41611_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41612_SHARP_,p2__41613_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41612_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41613_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41615 = arguments.length;
switch (G__41615) {
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
sablono.core.color_field41616 = (function sablono$core$color_field41616(var_args){
var G__41618 = arguments.length;
switch (G__41618) {
case 1:
return sablono.core.color_field41616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41616.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41508__auto__);
}));

(sablono.core.color_field41616.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.color_field41616.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41616);

/**
 * Creates a date input field.
 */
sablono.core.date_field41619 = (function sablono$core$date_field41619(var_args){
var G__41621 = arguments.length;
switch (G__41621) {
case 1:
return sablono.core.date_field41619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41619.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41508__auto__);
}));

(sablono.core.date_field41619.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.date_field41619.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41619);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41622 = (function sablono$core$datetime_field41622(var_args){
var G__41624 = arguments.length;
switch (G__41624) {
case 1:
return sablono.core.datetime_field41622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41622.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41508__auto__);
}));

(sablono.core.datetime_field41622.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.datetime_field41622.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41622);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41625 = (function sablono$core$datetime_local_field41625(var_args){
var G__41627 = arguments.length;
switch (G__41627) {
case 1:
return sablono.core.datetime_local_field41625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41625.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41508__auto__);
}));

(sablono.core.datetime_local_field41625.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.datetime_local_field41625.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41625);

/**
 * Creates a email input field.
 */
sablono.core.email_field41628 = (function sablono$core$email_field41628(var_args){
var G__41630 = arguments.length;
switch (G__41630) {
case 1:
return sablono.core.email_field41628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41628.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41508__auto__);
}));

(sablono.core.email_field41628.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.email_field41628.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41628);

/**
 * Creates a file input field.
 */
sablono.core.file_field41631 = (function sablono$core$file_field41631(var_args){
var G__41633 = arguments.length;
switch (G__41633) {
case 1:
return sablono.core.file_field41631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41631.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41508__auto__);
}));

(sablono.core.file_field41631.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.file_field41631.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41631);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41634 = (function sablono$core$hidden_field41634(var_args){
var G__41636 = arguments.length;
switch (G__41636) {
case 1:
return sablono.core.hidden_field41634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41634.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41508__auto__);
}));

(sablono.core.hidden_field41634.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.hidden_field41634.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41634);

/**
 * Creates a month input field.
 */
sablono.core.month_field41637 = (function sablono$core$month_field41637(var_args){
var G__41639 = arguments.length;
switch (G__41639) {
case 1:
return sablono.core.month_field41637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41637.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41508__auto__);
}));

(sablono.core.month_field41637.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.month_field41637.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41637);

/**
 * Creates a number input field.
 */
sablono.core.number_field41640 = (function sablono$core$number_field41640(var_args){
var G__41642 = arguments.length;
switch (G__41642) {
case 1:
return sablono.core.number_field41640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41640.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41508__auto__);
}));

(sablono.core.number_field41640.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.number_field41640.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41640);

/**
 * Creates a password input field.
 */
sablono.core.password_field41643 = (function sablono$core$password_field41643(var_args){
var G__41645 = arguments.length;
switch (G__41645) {
case 1:
return sablono.core.password_field41643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41643.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41508__auto__);
}));

(sablono.core.password_field41643.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.password_field41643.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41643);

/**
 * Creates a range input field.
 */
sablono.core.range_field41646 = (function sablono$core$range_field41646(var_args){
var G__41648 = arguments.length;
switch (G__41648) {
case 1:
return sablono.core.range_field41646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41646.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41508__auto__);
}));

(sablono.core.range_field41646.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.range_field41646.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41646);

/**
 * Creates a search input field.
 */
sablono.core.search_field41649 = (function sablono$core$search_field41649(var_args){
var G__41651 = arguments.length;
switch (G__41651) {
case 1:
return sablono.core.search_field41649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41649.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41508__auto__);
}));

(sablono.core.search_field41649.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.search_field41649.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41649);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41652 = (function sablono$core$tel_field41652(var_args){
var G__41654 = arguments.length;
switch (G__41654) {
case 1:
return sablono.core.tel_field41652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41652.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41508__auto__);
}));

(sablono.core.tel_field41652.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.tel_field41652.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41652);

/**
 * Creates a text input field.
 */
sablono.core.text_field41655 = (function sablono$core$text_field41655(var_args){
var G__41657 = arguments.length;
switch (G__41657) {
case 1:
return sablono.core.text_field41655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41655.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41508__auto__);
}));

(sablono.core.text_field41655.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.text_field41655.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41655);

/**
 * Creates a time input field.
 */
sablono.core.time_field41658 = (function sablono$core$time_field41658(var_args){
var G__41660 = arguments.length;
switch (G__41660) {
case 1:
return sablono.core.time_field41658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41658.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41508__auto__);
}));

(sablono.core.time_field41658.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.time_field41658.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41658);

/**
 * Creates a url input field.
 */
sablono.core.url_field41661 = (function sablono$core$url_field41661(var_args){
var G__41663 = arguments.length;
switch (G__41663) {
case 1:
return sablono.core.url_field41661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41661.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41508__auto__);
}));

(sablono.core.url_field41661.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.url_field41661.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41661);

/**
 * Creates a week input field.
 */
sablono.core.week_field41664 = (function sablono$core$week_field41664(var_args){
var G__41666 = arguments.length;
switch (G__41666) {
case 1:
return sablono.core.week_field41664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41664.cljs$core$IFn$_invoke$arity$1 = (function (name__41508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41508__auto__);
}));

(sablono.core.week_field41664.cljs$core$IFn$_invoke$arity$2 = (function (name__41508__auto__,value__41509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41508__auto__,value__41509__auto__);
}));

(sablono.core.week_field41664.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41664);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41667 = (function sablono$core$check_box41667(var_args){
var G__41669 = arguments.length;
switch (G__41669) {
case 1:
return sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41667.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41667.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41667);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41670 = (function sablono$core$radio_button41670(var_args){
var G__41672 = arguments.length;
switch (G__41672) {
case 1:
return sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41670.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41670.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41670);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41673 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41673);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41674 = (function sablono$core$select_options41674(coll){
var iter__4582__auto__ = (function sablono$core$select_options41674_$_iter__41675(s__41676){
return (new cljs.core.LazySeq(null,(function (){
var s__41676__$1 = s__41676;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41676__$1);
if(temp__5735__auto__){
var s__41676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41676__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41676__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41678 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41677 = (0);
while(true){
if((i__41677 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41677);
cljs.core.chunk_append(b__41678,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41679 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41674.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41674.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41674.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41750 = (i__41677 + (1));
i__41677 = G__41750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41678),sablono$core$select_options41674_$_iter__41675(cljs.core.chunk_rest(s__41676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41678),null);
}
} else {
var x = cljs.core.first(s__41676__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41682 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41682,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41682,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41682,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41674.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41674.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41674.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41674_$_iter__41675(cljs.core.rest(s__41676__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41674);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41685 = (function sablono$core$drop_down41685(var_args){
var G__41687 = arguments.length;
switch (G__41687) {
case 2:
return sablono.core.drop_down41685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41685.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41685.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41685.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41685.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41685.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41685);
/**
 * Creates a text area element.
 */
sablono.core.text_area41688 = (function sablono$core$text_area41688(var_args){
var G__41690 = arguments.length;
switch (G__41690) {
case 1:
return sablono.core.text_area41688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41688.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41688.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41688.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41688);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41691 = (function sablono$core$label41691(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41691);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41692 = (function sablono$core$submit_button41692(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41692);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41693 = (function sablono$core$reset_button41693(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41693);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41694 = (function sablono$core$form_to41694(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41753 = arguments.length;
var i__4790__auto___41754 = (0);
while(true){
if((i__4790__auto___41754 < len__4789__auto___41753)){
args__4795__auto__.push((arguments[i__4790__auto___41754]));

var G__41755 = (i__4790__auto___41754 + (1));
i__4790__auto___41754 = G__41755;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41694.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41694.cljs$core$IFn$_invoke$arity$variadic = (function (p__41697,body){
var vec__41698 = p__41697;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41698,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41698,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41701 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41702 = "_method";
var G__41703 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41701,G__41702,G__41703) : sablono.core.hidden_field.call(null,G__41701,G__41702,G__41703));
})()], null)),body));
}));

(sablono.core.form_to41694.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41694.cljs$lang$applyTo = (function (seq41695){
var G__41696 = cljs.core.first(seq41695);
var seq41695__$1 = cljs.core.next(seq41695);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41696,seq41695__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41694);

//# sourceMappingURL=sablono.core.js.map
