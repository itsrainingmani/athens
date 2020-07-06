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
var G__50573__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50388 = cljs.core.seq(vec__50387);
var first__50389 = cljs.core.first(seq__50388);
var seq__50388__$1 = cljs.core.next(seq__50388);
var tag = first__50389;
var body = seq__50388__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__50573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50574__i = 0, G__50574__a = new Array(arguments.length -  0);
while (G__50574__i < G__50574__a.length) {G__50574__a[G__50574__i] = arguments[G__50574__i + 0]; ++G__50574__i;}
  args = new cljs.core.IndexedSeq(G__50574__a,0,null);
} 
return G__50573__delegate.call(this,args);};
G__50573.cljs$lang$maxFixedArity = 0;
G__50573.cljs$lang$applyTo = (function (arglist__50575){
var args = cljs.core.seq(arglist__50575);
return G__50573__delegate(args);
});
G__50573.cljs$core$IFn$_invoke$arity$variadic = G__50573__delegate;
return G__50573;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__50394(s__50395){
return (new cljs.core.LazySeq(null,(function (){
var s__50395__$1 = s__50395;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50395__$1);
if(temp__5735__auto__){
var s__50395__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50395__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50395__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50397 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50396 = (0);
while(true){
if((i__50396 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50396);
cljs.core.chunk_append(b__50397,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__50576 = (i__50396 + (1));
i__50396 = G__50576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50397),sablono$core$update_arglists_$_iter__50394(cljs.core.chunk_rest(s__50395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50397),null);
}
} else {
var args = cljs.core.first(s__50395__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50394(cljs.core.rest(s__50395__$2)));
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
var len__4789__auto___50577 = arguments.length;
var i__4790__auto___50578 = (0);
while(true){
if((i__4790__auto___50578 < len__4789__auto___50577)){
args__4795__auto__.push((arguments[i__4790__auto___50578]));

var G__50579 = (i__4790__auto___50578 + (1));
i__4790__auto___50578 = G__50579;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__50418(s__50419){
return (new cljs.core.LazySeq(null,(function (){
var s__50419__$1 = s__50419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50419__$1);
if(temp__5735__auto__){
var s__50419__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50419__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50419__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50421 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50420 = (0);
while(true){
if((i__50420 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50420);
cljs.core.chunk_append(b__50421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__50580 = (i__50420 + (1));
i__50420 = G__50580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50421),sablono$core$iter__50418(cljs.core.chunk_rest(s__50419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50421),null);
}
} else {
var style = cljs.core.first(s__50419__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__50418(cljs.core.rest(s__50419__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq50403){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50403));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__50431 = goog.dom.getDocument().body;
var G__50432 = (function (){var G__50433 = "script";
var G__50434 = ({"src": src});
return goog.dom.createDom(G__50433,G__50434);
})();
return goog.dom.appendChild(G__50431,G__50432);
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
sablono.core.link_to50439 = (function sablono$core$link_to50439(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50581 = arguments.length;
var i__4790__auto___50582 = (0);
while(true){
if((i__4790__auto___50582 < len__4789__auto___50581)){
args__4795__auto__.push((arguments[i__4790__auto___50582]));

var G__50583 = (i__4790__auto___50582 + (1));
i__4790__auto___50582 = G__50583;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to50439.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to50439.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to50439.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to50439.cljs$lang$applyTo = (function (seq50440){
var G__50441 = cljs.core.first(seq50440);
var seq50440__$1 = cljs.core.next(seq50440);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50441,seq50440__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to50439);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50447 = (function sablono$core$mail_to50447(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50585 = arguments.length;
var i__4790__auto___50587 = (0);
while(true){
if((i__4790__auto___50587 < len__4789__auto___50585)){
args__4795__auto__.push((arguments[i__4790__auto___50587]));

var G__50588 = (i__4790__auto___50587 + (1));
i__4790__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to50447.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to50447.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50452){
var vec__50453 = p__50452;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50453,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to50447.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to50447.cljs$lang$applyTo = (function (seq50448){
var G__50449 = cljs.core.first(seq50448);
var seq50448__$1 = cljs.core.next(seq50448);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50449,seq50448__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to50447);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50460 = (function sablono$core$unordered_list50460(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list50460_$_iter__50463(s__50464){
return (new cljs.core.LazySeq(null,(function (){
var s__50464__$1 = s__50464;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50464__$1);
if(temp__5735__auto__){
var s__50464__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50464__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50464__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50466 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50465 = (0);
while(true){
if((i__50465 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50465);
cljs.core.chunk_append(b__50466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50590 = (i__50465 + (1));
i__50465 = G__50590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50466),sablono$core$unordered_list50460_$_iter__50463(cljs.core.chunk_rest(s__50464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50466),null);
}
} else {
var x = cljs.core.first(s__50464__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list50460_$_iter__50463(cljs.core.rest(s__50464__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list50460);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50471 = (function sablono$core$ordered_list50471(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list50471_$_iter__50472(s__50473){
return (new cljs.core.LazySeq(null,(function (){
var s__50473__$1 = s__50473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50473__$1);
if(temp__5735__auto__){
var s__50473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50473__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50473__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50475 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50474 = (0);
while(true){
if((i__50474 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50474);
cljs.core.chunk_append(b__50475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50591 = (i__50474 + (1));
i__50474 = G__50591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50475),sablono$core$ordered_list50471_$_iter__50472(cljs.core.chunk_rest(s__50473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50475),null);
}
} else {
var x = cljs.core.first(s__50473__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list50471_$_iter__50472(cljs.core.rest(s__50473__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list50471);
/**
 * Create an image element.
 */
sablono.core.image50476 = (function sablono$core$image50476(var_args){
var G__50478 = arguments.length;
switch (G__50478) {
case 1:
return sablono.core.image50476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image50476.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image50476.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image50476.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image50476);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50479_SHARP_,p2__50480_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50479_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50480_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50481_SHARP_,p2__50482_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50481_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50482_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__50484 = arguments.length;
switch (G__50484) {
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
sablono.core.color_field50485 = (function sablono$core$color_field50485(var_args){
var G__50487 = arguments.length;
switch (G__50487) {
case 1:
return sablono.core.color_field50485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field50485.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50377__auto__);
}));

(sablono.core.color_field50485.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.color_field50485.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field50485);

/**
 * Creates a date input field.
 */
sablono.core.date_field50488 = (function sablono$core$date_field50488(var_args){
var G__50490 = arguments.length;
switch (G__50490) {
case 1:
return sablono.core.date_field50488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field50488.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50377__auto__);
}));

(sablono.core.date_field50488.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.date_field50488.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field50488);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50491 = (function sablono$core$datetime_field50491(var_args){
var G__50493 = arguments.length;
switch (G__50493) {
case 1:
return sablono.core.datetime_field50491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field50491.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50377__auto__);
}));

(sablono.core.datetime_field50491.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.datetime_field50491.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field50491);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50494 = (function sablono$core$datetime_local_field50494(var_args){
var G__50496 = arguments.length;
switch (G__50496) {
case 1:
return sablono.core.datetime_local_field50494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field50494.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50377__auto__);
}));

(sablono.core.datetime_local_field50494.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.datetime_local_field50494.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field50494);

/**
 * Creates a email input field.
 */
sablono.core.email_field50497 = (function sablono$core$email_field50497(var_args){
var G__50499 = arguments.length;
switch (G__50499) {
case 1:
return sablono.core.email_field50497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field50497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field50497.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50377__auto__);
}));

(sablono.core.email_field50497.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.email_field50497.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field50497);

/**
 * Creates a file input field.
 */
sablono.core.file_field50500 = (function sablono$core$file_field50500(var_args){
var G__50502 = arguments.length;
switch (G__50502) {
case 1:
return sablono.core.file_field50500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field50500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field50500.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50377__auto__);
}));

(sablono.core.file_field50500.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.file_field50500.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field50500);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field50503 = (function sablono$core$hidden_field50503(var_args){
var G__50505 = arguments.length;
switch (G__50505) {
case 1:
return sablono.core.hidden_field50503.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field50503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field50503.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50377__auto__);
}));

(sablono.core.hidden_field50503.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.hidden_field50503.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field50503);

/**
 * Creates a month input field.
 */
sablono.core.month_field50506 = (function sablono$core$month_field50506(var_args){
var G__50508 = arguments.length;
switch (G__50508) {
case 1:
return sablono.core.month_field50506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field50506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field50506.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50377__auto__);
}));

(sablono.core.month_field50506.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.month_field50506.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field50506);

/**
 * Creates a number input field.
 */
sablono.core.number_field50509 = (function sablono$core$number_field50509(var_args){
var G__50511 = arguments.length;
switch (G__50511) {
case 1:
return sablono.core.number_field50509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field50509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field50509.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50377__auto__);
}));

(sablono.core.number_field50509.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.number_field50509.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field50509);

/**
 * Creates a password input field.
 */
sablono.core.password_field50512 = (function sablono$core$password_field50512(var_args){
var G__50514 = arguments.length;
switch (G__50514) {
case 1:
return sablono.core.password_field50512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field50512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field50512.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50377__auto__);
}));

(sablono.core.password_field50512.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.password_field50512.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field50512);

/**
 * Creates a range input field.
 */
sablono.core.range_field50515 = (function sablono$core$range_field50515(var_args){
var G__50517 = arguments.length;
switch (G__50517) {
case 1:
return sablono.core.range_field50515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field50515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field50515.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50377__auto__);
}));

(sablono.core.range_field50515.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.range_field50515.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field50515);

/**
 * Creates a search input field.
 */
sablono.core.search_field50518 = (function sablono$core$search_field50518(var_args){
var G__50520 = arguments.length;
switch (G__50520) {
case 1:
return sablono.core.search_field50518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field50518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field50518.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50377__auto__);
}));

(sablono.core.search_field50518.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.search_field50518.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field50518);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field50521 = (function sablono$core$tel_field50521(var_args){
var G__50523 = arguments.length;
switch (G__50523) {
case 1:
return sablono.core.tel_field50521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field50521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field50521.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50377__auto__);
}));

(sablono.core.tel_field50521.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.tel_field50521.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field50521);

/**
 * Creates a text input field.
 */
sablono.core.text_field50524 = (function sablono$core$text_field50524(var_args){
var G__50526 = arguments.length;
switch (G__50526) {
case 1:
return sablono.core.text_field50524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field50524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field50524.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50377__auto__);
}));

(sablono.core.text_field50524.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.text_field50524.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field50524);

/**
 * Creates a time input field.
 */
sablono.core.time_field50527 = (function sablono$core$time_field50527(var_args){
var G__50529 = arguments.length;
switch (G__50529) {
case 1:
return sablono.core.time_field50527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field50527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field50527.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50377__auto__);
}));

(sablono.core.time_field50527.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.time_field50527.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field50527);

/**
 * Creates a url input field.
 */
sablono.core.url_field50530 = (function sablono$core$url_field50530(var_args){
var G__50532 = arguments.length;
switch (G__50532) {
case 1:
return sablono.core.url_field50530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field50530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field50530.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50377__auto__);
}));

(sablono.core.url_field50530.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.url_field50530.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field50530);

/**
 * Creates a week input field.
 */
sablono.core.week_field50533 = (function sablono$core$week_field50533(var_args){
var G__50535 = arguments.length;
switch (G__50535) {
case 1:
return sablono.core.week_field50533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field50533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field50533.cljs$core$IFn$_invoke$arity$1 = (function (name__50377__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50377__auto__);
}));

(sablono.core.week_field50533.cljs$core$IFn$_invoke$arity$2 = (function (name__50377__auto__,value__50378__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50377__auto__,value__50378__auto__);
}));

(sablono.core.week_field50533.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field50533);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box50536 = (function sablono$core$check_box50536(var_args){
var G__50538 = arguments.length;
switch (G__50538) {
case 1:
return sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50536.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50536.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box50536);
/**
 * Creates a radio button.
 */
sablono.core.radio_button50539 = (function sablono$core$radio_button50539(var_args){
var G__50541 = arguments.length;
switch (G__50541) {
case 1:
return sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50539.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50539.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button50539);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__50542 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__50542);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options50543 = (function sablono$core$select_options50543(coll){
var iter__4582__auto__ = (function sablono$core$select_options50543_$_iter__50544(s__50545){
return (new cljs.core.LazySeq(null,(function (){
var s__50545__$1 = s__50545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50545__$1);
if(temp__5735__auto__){
var s__50545__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50545__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50545__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50547 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50546 = (0);
while(true){
if((i__50546 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50546);
cljs.core.chunk_append(b__50547,((cljs.core.sequential_QMARK_(x))?(function (){var vec__50548 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50548,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50548,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50548,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50543.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50543.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50543.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__50619 = (i__50546 + (1));
i__50546 = G__50619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50547),sablono$core$select_options50543_$_iter__50544(cljs.core.chunk_rest(s__50545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50547),null);
}
} else {
var x = cljs.core.first(s__50545__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__50551 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50543.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50543.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50543.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options50543_$_iter__50544(cljs.core.rest(s__50545__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options50543);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down50554 = (function sablono$core$drop_down50554(var_args){
var G__50556 = arguments.length;
switch (G__50556) {
case 2:
return sablono.core.drop_down50554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down50554.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down50554.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down50554.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down50554.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down50554.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down50554);
/**
 * Creates a text area element.
 */
sablono.core.text_area50557 = (function sablono$core$text_area50557(var_args){
var G__50559 = arguments.length;
switch (G__50559) {
case 1:
return sablono.core.text_area50557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area50557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area50557.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area50557.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area50557.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area50557);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label50560 = (function sablono$core$label50560(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label50560);
/**
 * Creates a submit button.
 */
sablono.core.submit_button50561 = (function sablono$core$submit_button50561(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button50561);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button50562 = (function sablono$core$reset_button50562(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button50562);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to50563 = (function sablono$core$form_to50563(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50638 = arguments.length;
var i__4790__auto___50639 = (0);
while(true){
if((i__4790__auto___50639 < len__4789__auto___50638)){
args__4795__auto__.push((arguments[i__4790__auto___50639]));

var G__50640 = (i__4790__auto___50639 + (1));
i__4790__auto___50639 = G__50640;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to50563.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to50563.cljs$core$IFn$_invoke$arity$variadic = (function (p__50566,body){
var vec__50567 = p__50566;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__50570 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__50571 = "_method";
var G__50572 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__50570,G__50571,G__50572) : sablono.core.hidden_field.call(null,G__50570,G__50571,G__50572));
})()], null)),body));
}));

(sablono.core.form_to50563.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to50563.cljs$lang$applyTo = (function (seq50564){
var G__50565 = cljs.core.first(seq50564);
var seq50564__$1 = cljs.core.next(seq50564);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50565,seq50564__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to50563);

//# sourceMappingURL=sablono.core.js.map
