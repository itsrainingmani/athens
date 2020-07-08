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
var G__41716__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41546 = cljs.core.seq(vec__41545);
var first__41547 = cljs.core.first(seq__41546);
var seq__41546__$1 = cljs.core.next(seq__41546);
var tag = first__41547;
var body = seq__41546__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41717__i = 0, G__41717__a = new Array(arguments.length -  0);
while (G__41717__i < G__41717__a.length) {G__41717__a[G__41717__i] = arguments[G__41717__i + 0]; ++G__41717__i;}
  args = new cljs.core.IndexedSeq(G__41717__a,0,null);
} 
return G__41716__delegate.call(this,args);};
G__41716.cljs$lang$maxFixedArity = 0;
G__41716.cljs$lang$applyTo = (function (arglist__41718){
var args = cljs.core.seq(arglist__41718);
return G__41716__delegate(args);
});
G__41716.cljs$core$IFn$_invoke$arity$variadic = G__41716__delegate;
return G__41716;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41557(s__41558){
return (new cljs.core.LazySeq(null,(function (){
var s__41558__$1 = s__41558;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41558__$1);
if(temp__5735__auto__){
var s__41558__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41558__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41558__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41560 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41559 = (0);
while(true){
if((i__41559 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41559);
cljs.core.chunk_append(b__41560,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41719 = (i__41559 + (1));
i__41559 = G__41719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41560),sablono$core$update_arglists_$_iter__41557(cljs.core.chunk_rest(s__41558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41560),null);
}
} else {
var args = cljs.core.first(s__41558__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41557(cljs.core.rest(s__41558__$2)));
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
var len__4789__auto___41720 = arguments.length;
var i__4790__auto___41721 = (0);
while(true){
if((i__4790__auto___41721 < len__4789__auto___41720)){
args__4795__auto__.push((arguments[i__4790__auto___41721]));

var G__41722 = (i__4790__auto___41721 + (1));
i__4790__auto___41721 = G__41722;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41572(s__41573){
return (new cljs.core.LazySeq(null,(function (){
var s__41573__$1 = s__41573;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41573__$1);
if(temp__5735__auto__){
var s__41573__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41573__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41573__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41575 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41574 = (0);
while(true){
if((i__41574 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41574);
cljs.core.chunk_append(b__41575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41723 = (i__41574 + (1));
i__41574 = G__41723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41575),sablono$core$iter__41572(cljs.core.chunk_rest(s__41573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41575),null);
}
} else {
var style = cljs.core.first(s__41573__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41572(cljs.core.rest(s__41573__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41566){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41566));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41583 = goog.dom.getDocument().body;
var G__41584 = (function (){var G__41585 = "script";
var G__41586 = ({"src": src});
return goog.dom.createDom(G__41585,G__41586);
})();
return goog.dom.appendChild(G__41583,G__41584);
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
sablono.core.link_to41587 = (function sablono$core$link_to41587(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41724 = arguments.length;
var i__4790__auto___41725 = (0);
while(true){
if((i__4790__auto___41725 < len__4789__auto___41724)){
args__4795__auto__.push((arguments[i__4790__auto___41725]));

var G__41726 = (i__4790__auto___41725 + (1));
i__4790__auto___41725 = G__41726;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41587.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41587.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41587.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41587.cljs$lang$applyTo = (function (seq41588){
var G__41589 = cljs.core.first(seq41588);
var seq41588__$1 = cljs.core.next(seq41588);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41589,seq41588__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41587);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41596 = (function sablono$core$mail_to41596(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41727 = arguments.length;
var i__4790__auto___41728 = (0);
while(true){
if((i__4790__auto___41728 < len__4789__auto___41727)){
args__4795__auto__.push((arguments[i__4790__auto___41728]));

var G__41729 = (i__4790__auto___41728 + (1));
i__4790__auto___41728 = G__41729;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41596.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41596.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41601){
var vec__41606 = p__41601;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41606,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41596.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41596.cljs$lang$applyTo = (function (seq41597){
var G__41598 = cljs.core.first(seq41597);
var seq41597__$1 = cljs.core.next(seq41597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41598,seq41597__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41596);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41609 = (function sablono$core$unordered_list41609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41609_$_iter__41610(s__41611){
return (new cljs.core.LazySeq(null,(function (){
var s__41611__$1 = s__41611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41611__$1);
if(temp__5735__auto__){
var s__41611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41611__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41611__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41613 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41612 = (0);
while(true){
if((i__41612 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41612);
cljs.core.chunk_append(b__41613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41730 = (i__41612 + (1));
i__41612 = G__41730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41613),sablono$core$unordered_list41609_$_iter__41610(cljs.core.chunk_rest(s__41611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41613),null);
}
} else {
var x = cljs.core.first(s__41611__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41609_$_iter__41610(cljs.core.rest(s__41611__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41609);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41614 = (function sablono$core$ordered_list41614(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41614_$_iter__41615(s__41616){
return (new cljs.core.LazySeq(null,(function (){
var s__41616__$1 = s__41616;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41616__$1);
if(temp__5735__auto__){
var s__41616__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41616__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41616__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41618 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41617 = (0);
while(true){
if((i__41617 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41617);
cljs.core.chunk_append(b__41618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41731 = (i__41617 + (1));
i__41617 = G__41731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41618),sablono$core$ordered_list41614_$_iter__41615(cljs.core.chunk_rest(s__41616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41618),null);
}
} else {
var x = cljs.core.first(s__41616__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41614_$_iter__41615(cljs.core.rest(s__41616__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41614);
/**
 * Create an image element.
 */
sablono.core.image41619 = (function sablono$core$image41619(var_args){
var G__41621 = arguments.length;
switch (G__41621) {
case 1:
return sablono.core.image41619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41619.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41619.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41619.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41619);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41622_SHARP_,p2__41623_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41622_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41623_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41624_SHARP_,p2__41625_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41624_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41625_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41627 = arguments.length;
switch (G__41627) {
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
sablono.core.color_field41628 = (function sablono$core$color_field41628(var_args){
var G__41630 = arguments.length;
switch (G__41630) {
case 1:
return sablono.core.color_field41628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41628.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41520__auto__);
}));

(sablono.core.color_field41628.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.color_field41628.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41628);

/**
 * Creates a date input field.
 */
sablono.core.date_field41631 = (function sablono$core$date_field41631(var_args){
var G__41633 = arguments.length;
switch (G__41633) {
case 1:
return sablono.core.date_field41631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41631.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41520__auto__);
}));

(sablono.core.date_field41631.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.date_field41631.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41631);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41634 = (function sablono$core$datetime_field41634(var_args){
var G__41636 = arguments.length;
switch (G__41636) {
case 1:
return sablono.core.datetime_field41634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41634.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41520__auto__);
}));

(sablono.core.datetime_field41634.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.datetime_field41634.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41634);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41637 = (function sablono$core$datetime_local_field41637(var_args){
var G__41639 = arguments.length;
switch (G__41639) {
case 1:
return sablono.core.datetime_local_field41637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41637.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41520__auto__);
}));

(sablono.core.datetime_local_field41637.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.datetime_local_field41637.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41637);

/**
 * Creates a email input field.
 */
sablono.core.email_field41640 = (function sablono$core$email_field41640(var_args){
var G__41642 = arguments.length;
switch (G__41642) {
case 1:
return sablono.core.email_field41640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41640.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41520__auto__);
}));

(sablono.core.email_field41640.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.email_field41640.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41640);

/**
 * Creates a file input field.
 */
sablono.core.file_field41643 = (function sablono$core$file_field41643(var_args){
var G__41645 = arguments.length;
switch (G__41645) {
case 1:
return sablono.core.file_field41643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41643.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41520__auto__);
}));

(sablono.core.file_field41643.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.file_field41643.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41643);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41646 = (function sablono$core$hidden_field41646(var_args){
var G__41648 = arguments.length;
switch (G__41648) {
case 1:
return sablono.core.hidden_field41646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41646.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41520__auto__);
}));

(sablono.core.hidden_field41646.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.hidden_field41646.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41646);

/**
 * Creates a month input field.
 */
sablono.core.month_field41649 = (function sablono$core$month_field41649(var_args){
var G__41651 = arguments.length;
switch (G__41651) {
case 1:
return sablono.core.month_field41649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41649.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41520__auto__);
}));

(sablono.core.month_field41649.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.month_field41649.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41649);

/**
 * Creates a number input field.
 */
sablono.core.number_field41652 = (function sablono$core$number_field41652(var_args){
var G__41654 = arguments.length;
switch (G__41654) {
case 1:
return sablono.core.number_field41652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41652.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41520__auto__);
}));

(sablono.core.number_field41652.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.number_field41652.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41652);

/**
 * Creates a password input field.
 */
sablono.core.password_field41655 = (function sablono$core$password_field41655(var_args){
var G__41657 = arguments.length;
switch (G__41657) {
case 1:
return sablono.core.password_field41655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41655.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41520__auto__);
}));

(sablono.core.password_field41655.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.password_field41655.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41655);

/**
 * Creates a range input field.
 */
sablono.core.range_field41658 = (function sablono$core$range_field41658(var_args){
var G__41660 = arguments.length;
switch (G__41660) {
case 1:
return sablono.core.range_field41658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41658.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41520__auto__);
}));

(sablono.core.range_field41658.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.range_field41658.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41658);

/**
 * Creates a search input field.
 */
sablono.core.search_field41661 = (function sablono$core$search_field41661(var_args){
var G__41663 = arguments.length;
switch (G__41663) {
case 1:
return sablono.core.search_field41661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41661.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41520__auto__);
}));

(sablono.core.search_field41661.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.search_field41661.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41661);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41664 = (function sablono$core$tel_field41664(var_args){
var G__41666 = arguments.length;
switch (G__41666) {
case 1:
return sablono.core.tel_field41664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41664.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41520__auto__);
}));

(sablono.core.tel_field41664.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.tel_field41664.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41664);

/**
 * Creates a text input field.
 */
sablono.core.text_field41667 = (function sablono$core$text_field41667(var_args){
var G__41669 = arguments.length;
switch (G__41669) {
case 1:
return sablono.core.text_field41667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41667.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41520__auto__);
}));

(sablono.core.text_field41667.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.text_field41667.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41667);

/**
 * Creates a time input field.
 */
sablono.core.time_field41670 = (function sablono$core$time_field41670(var_args){
var G__41672 = arguments.length;
switch (G__41672) {
case 1:
return sablono.core.time_field41670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41670.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41520__auto__);
}));

(sablono.core.time_field41670.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.time_field41670.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41670);

/**
 * Creates a url input field.
 */
sablono.core.url_field41673 = (function sablono$core$url_field41673(var_args){
var G__41675 = arguments.length;
switch (G__41675) {
case 1:
return sablono.core.url_field41673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41673.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41520__auto__);
}));

(sablono.core.url_field41673.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.url_field41673.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41673);

/**
 * Creates a week input field.
 */
sablono.core.week_field41676 = (function sablono$core$week_field41676(var_args){
var G__41678 = arguments.length;
switch (G__41678) {
case 1:
return sablono.core.week_field41676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41676.cljs$core$IFn$_invoke$arity$1 = (function (name__41520__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41520__auto__);
}));

(sablono.core.week_field41676.cljs$core$IFn$_invoke$arity$2 = (function (name__41520__auto__,value__41521__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41520__auto__,value__41521__auto__);
}));

(sablono.core.week_field41676.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41676);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41679 = (function sablono$core$check_box41679(var_args){
var G__41681 = arguments.length;
switch (G__41681) {
case 1:
return sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41679.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41679.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41679);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41682 = (function sablono$core$radio_button41682(var_args){
var G__41684 = arguments.length;
switch (G__41684) {
case 1:
return sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41682.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41682.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41682);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41685 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41685);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41686 = (function sablono$core$select_options41686(coll){
var iter__4582__auto__ = (function sablono$core$select_options41686_$_iter__41687(s__41688){
return (new cljs.core.LazySeq(null,(function (){
var s__41688__$1 = s__41688;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41688__$1);
if(temp__5735__auto__){
var s__41688__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41688__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41688__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41690 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41689 = (0);
while(true){
if((i__41689 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41689);
cljs.core.chunk_append(b__41690,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41691 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41691,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41691,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41691,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41686.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41686.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41686.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41762 = (i__41689 + (1));
i__41689 = G__41762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41690),sablono$core$select_options41686_$_iter__41687(cljs.core.chunk_rest(s__41688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41690),null);
}
} else {
var x = cljs.core.first(s__41688__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41694 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41694,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41694,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41694,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41686.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41686.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41686.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41686_$_iter__41687(cljs.core.rest(s__41688__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41686);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41697 = (function sablono$core$drop_down41697(var_args){
var G__41699 = arguments.length;
switch (G__41699) {
case 2:
return sablono.core.drop_down41697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41697.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41697.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41697.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41697.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41697.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41697);
/**
 * Creates a text area element.
 */
sablono.core.text_area41700 = (function sablono$core$text_area41700(var_args){
var G__41702 = arguments.length;
switch (G__41702) {
case 1:
return sablono.core.text_area41700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41700.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41700.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41700.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41700);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41703 = (function sablono$core$label41703(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41703);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41704 = (function sablono$core$submit_button41704(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41704);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41705 = (function sablono$core$reset_button41705(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41705);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41706 = (function sablono$core$form_to41706(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41765 = arguments.length;
var i__4790__auto___41766 = (0);
while(true){
if((i__4790__auto___41766 < len__4789__auto___41765)){
args__4795__auto__.push((arguments[i__4790__auto___41766]));

var G__41767 = (i__4790__auto___41766 + (1));
i__4790__auto___41766 = G__41767;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41706.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41706.cljs$core$IFn$_invoke$arity$variadic = (function (p__41709,body){
var vec__41710 = p__41709;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41713 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41714 = "_method";
var G__41715 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41713,G__41714,G__41715) : sablono.core.hidden_field.call(null,G__41713,G__41714,G__41715));
})()], null)),body));
}));

(sablono.core.form_to41706.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41706.cljs$lang$applyTo = (function (seq41707){
var G__41708 = cljs.core.first(seq41707);
var seq41707__$1 = cljs.core.next(seq41707);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41708,seq41707__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41706);

//# sourceMappingURL=sablono.core.js.map
