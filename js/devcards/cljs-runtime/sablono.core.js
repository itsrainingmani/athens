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
var G__49107__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__48921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__48922 = cljs.core.seq(vec__48921);
var first__48923 = cljs.core.first(seq__48922);
var seq__48922__$1 = cljs.core.next(seq__48922);
var tag = first__48923;
var body = seq__48922__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__49107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49108__i = 0, G__49108__a = new Array(arguments.length -  0);
while (G__49108__i < G__49108__a.length) {G__49108__a[G__49108__i] = arguments[G__49108__i + 0]; ++G__49108__i;}
  args = new cljs.core.IndexedSeq(G__49108__a,0,null);
} 
return G__49107__delegate.call(this,args);};
G__49107.cljs$lang$maxFixedArity = 0;
G__49107.cljs$lang$applyTo = (function (arglist__49109){
var args = cljs.core.seq(arglist__49109);
return G__49107__delegate(args);
});
G__49107.cljs$core$IFn$_invoke$arity$variadic = G__49107__delegate;
return G__49107;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__48928(s__48929){
return (new cljs.core.LazySeq(null,(function (){
var s__48929__$1 = s__48929;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48929__$1);
if(temp__5735__auto__){
var s__48929__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48929__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48929__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48931 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48930 = (0);
while(true){
if((i__48930 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48930);
cljs.core.chunk_append(b__48931,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__49110 = (i__48930 + (1));
i__48930 = G__49110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48931),sablono$core$update_arglists_$_iter__48928(cljs.core.chunk_rest(s__48929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48931),null);
}
} else {
var args = cljs.core.first(s__48929__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__48928(cljs.core.rest(s__48929__$2)));
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
var len__4789__auto___49111 = arguments.length;
var i__4790__auto___49112 = (0);
while(true){
if((i__4790__auto___49112 < len__4789__auto___49111)){
args__4795__auto__.push((arguments[i__4790__auto___49112]));

var G__49113 = (i__4790__auto___49112 + (1));
i__4790__auto___49112 = G__49113;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__48944(s__48945){
return (new cljs.core.LazySeq(null,(function (){
var s__48945__$1 = s__48945;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48945__$1);
if(temp__5735__auto__){
var s__48945__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48945__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48945__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48947 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48946 = (0);
while(true){
if((i__48946 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48946);
cljs.core.chunk_append(b__48947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__49114 = (i__48946 + (1));
i__48946 = G__49114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48947),sablono$core$iter__48944(cljs.core.chunk_rest(s__48945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48947),null);
}
} else {
var style = cljs.core.first(s__48945__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__48944(cljs.core.rest(s__48945__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq48936){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48936));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__48961 = goog.dom.getDocument().body;
var G__48963 = (function (){var G__48964 = "script";
var G__48965 = ({"src": src});
return goog.dom.createDom(G__48964,G__48965);
})();
return goog.dom.appendChild(G__48961,G__48963);
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
sablono.core.link_to48969 = (function sablono$core$link_to48969(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49115 = arguments.length;
var i__4790__auto___49116 = (0);
while(true){
if((i__4790__auto___49116 < len__4789__auto___49115)){
args__4795__auto__.push((arguments[i__4790__auto___49116]));

var G__49117 = (i__4790__auto___49116 + (1));
i__4790__auto___49116 = G__49117;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48969.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to48969.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to48969.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to48969.cljs$lang$applyTo = (function (seq48970){
var G__48971 = cljs.core.first(seq48970);
var seq48970__$1 = cljs.core.next(seq48970);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48971,seq48970__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to48969);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48977 = (function sablono$core$mail_to48977(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49118 = arguments.length;
var i__4790__auto___49119 = (0);
while(true){
if((i__4790__auto___49119 < len__4789__auto___49118)){
args__4795__auto__.push((arguments[i__4790__auto___49119]));

var G__49120 = (i__4790__auto___49119 + (1));
i__4790__auto___49119 = G__49120;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48977.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to48977.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48984){
var vec__48985 = p__48984;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to48977.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to48977.cljs$lang$applyTo = (function (seq48979){
var G__48980 = cljs.core.first(seq48979);
var seq48979__$1 = cljs.core.next(seq48979);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48980,seq48979__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to48977);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48988 = (function sablono$core$unordered_list48988(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list48988_$_iter__48990(s__48991){
return (new cljs.core.LazySeq(null,(function (){
var s__48991__$1 = s__48991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48991__$1);
if(temp__5735__auto__){
var s__48991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48991__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48991__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48993 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48992 = (0);
while(true){
if((i__48992 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48992);
cljs.core.chunk_append(b__48993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__49124 = (i__48992 + (1));
i__48992 = G__49124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48993),sablono$core$unordered_list48988_$_iter__48990(cljs.core.chunk_rest(s__48991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48993),null);
}
} else {
var x = cljs.core.first(s__48991__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list48988_$_iter__48990(cljs.core.rest(s__48991__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list48988);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list49001 = (function sablono$core$ordered_list49001(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list49001_$_iter__49002(s__49003){
return (new cljs.core.LazySeq(null,(function (){
var s__49003__$1 = s__49003;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49003__$1);
if(temp__5735__auto__){
var s__49003__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49003__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49003__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49005 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49004 = (0);
while(true){
if((i__49004 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49004);
cljs.core.chunk_append(b__49005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__49125 = (i__49004 + (1));
i__49004 = G__49125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49005),sablono$core$ordered_list49001_$_iter__49002(cljs.core.chunk_rest(s__49003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49005),null);
}
} else {
var x = cljs.core.first(s__49003__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list49001_$_iter__49002(cljs.core.rest(s__49003__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list49001);
/**
 * Create an image element.
 */
sablono.core.image49010 = (function sablono$core$image49010(var_args){
var G__49012 = arguments.length;
switch (G__49012) {
case 1:
return sablono.core.image49010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image49010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image49010.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image49010.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image49010.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image49010);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49013_SHARP_,p2__49014_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49013_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49014_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49015_SHARP_,p2__49016_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49015_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49016_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__49018 = arguments.length;
switch (G__49018) {
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
sablono.core.color_field49019 = (function sablono$core$color_field49019(var_args){
var G__49021 = arguments.length;
switch (G__49021) {
case 1:
return sablono.core.color_field49019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field49019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field49019.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__48911__auto__);
}));

(sablono.core.color_field49019.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.color_field49019.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field49019);

/**
 * Creates a date input field.
 */
sablono.core.date_field49022 = (function sablono$core$date_field49022(var_args){
var G__49024 = arguments.length;
switch (G__49024) {
case 1:
return sablono.core.date_field49022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field49022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field49022.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__48911__auto__);
}));

(sablono.core.date_field49022.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.date_field49022.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field49022);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field49025 = (function sablono$core$datetime_field49025(var_args){
var G__49027 = arguments.length;
switch (G__49027) {
case 1:
return sablono.core.datetime_field49025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field49025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field49025.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__48911__auto__);
}));

(sablono.core.datetime_field49025.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.datetime_field49025.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field49025);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field49028 = (function sablono$core$datetime_local_field49028(var_args){
var G__49030 = arguments.length;
switch (G__49030) {
case 1:
return sablono.core.datetime_local_field49028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field49028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field49028.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__48911__auto__);
}));

(sablono.core.datetime_local_field49028.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.datetime_local_field49028.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field49028);

/**
 * Creates a email input field.
 */
sablono.core.email_field49031 = (function sablono$core$email_field49031(var_args){
var G__49033 = arguments.length;
switch (G__49033) {
case 1:
return sablono.core.email_field49031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field49031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field49031.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__48911__auto__);
}));

(sablono.core.email_field49031.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.email_field49031.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field49031);

/**
 * Creates a file input field.
 */
sablono.core.file_field49034 = (function sablono$core$file_field49034(var_args){
var G__49036 = arguments.length;
switch (G__49036) {
case 1:
return sablono.core.file_field49034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field49034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field49034.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__48911__auto__);
}));

(sablono.core.file_field49034.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.file_field49034.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field49034);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field49037 = (function sablono$core$hidden_field49037(var_args){
var G__49039 = arguments.length;
switch (G__49039) {
case 1:
return sablono.core.hidden_field49037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field49037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field49037.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__48911__auto__);
}));

(sablono.core.hidden_field49037.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.hidden_field49037.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field49037);

/**
 * Creates a month input field.
 */
sablono.core.month_field49040 = (function sablono$core$month_field49040(var_args){
var G__49042 = arguments.length;
switch (G__49042) {
case 1:
return sablono.core.month_field49040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field49040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field49040.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__48911__auto__);
}));

(sablono.core.month_field49040.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.month_field49040.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field49040);

/**
 * Creates a number input field.
 */
sablono.core.number_field49043 = (function sablono$core$number_field49043(var_args){
var G__49045 = arguments.length;
switch (G__49045) {
case 1:
return sablono.core.number_field49043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field49043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field49043.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__48911__auto__);
}));

(sablono.core.number_field49043.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.number_field49043.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field49043);

/**
 * Creates a password input field.
 */
sablono.core.password_field49046 = (function sablono$core$password_field49046(var_args){
var G__49048 = arguments.length;
switch (G__49048) {
case 1:
return sablono.core.password_field49046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field49046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field49046.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__48911__auto__);
}));

(sablono.core.password_field49046.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.password_field49046.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field49046);

/**
 * Creates a range input field.
 */
sablono.core.range_field49049 = (function sablono$core$range_field49049(var_args){
var G__49051 = arguments.length;
switch (G__49051) {
case 1:
return sablono.core.range_field49049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field49049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field49049.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__48911__auto__);
}));

(sablono.core.range_field49049.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.range_field49049.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field49049);

/**
 * Creates a search input field.
 */
sablono.core.search_field49052 = (function sablono$core$search_field49052(var_args){
var G__49054 = arguments.length;
switch (G__49054) {
case 1:
return sablono.core.search_field49052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field49052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field49052.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__48911__auto__);
}));

(sablono.core.search_field49052.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.search_field49052.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field49052);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field49055 = (function sablono$core$tel_field49055(var_args){
var G__49057 = arguments.length;
switch (G__49057) {
case 1:
return sablono.core.tel_field49055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field49055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field49055.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__48911__auto__);
}));

(sablono.core.tel_field49055.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.tel_field49055.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field49055);

/**
 * Creates a text input field.
 */
sablono.core.text_field49058 = (function sablono$core$text_field49058(var_args){
var G__49060 = arguments.length;
switch (G__49060) {
case 1:
return sablono.core.text_field49058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field49058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field49058.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__48911__auto__);
}));

(sablono.core.text_field49058.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.text_field49058.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field49058);

/**
 * Creates a time input field.
 */
sablono.core.time_field49061 = (function sablono$core$time_field49061(var_args){
var G__49063 = arguments.length;
switch (G__49063) {
case 1:
return sablono.core.time_field49061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field49061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field49061.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__48911__auto__);
}));

(sablono.core.time_field49061.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.time_field49061.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field49061);

/**
 * Creates a url input field.
 */
sablono.core.url_field49064 = (function sablono$core$url_field49064(var_args){
var G__49066 = arguments.length;
switch (G__49066) {
case 1:
return sablono.core.url_field49064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field49064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field49064.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__48911__auto__);
}));

(sablono.core.url_field49064.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.url_field49064.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field49064);

/**
 * Creates a week input field.
 */
sablono.core.week_field49067 = (function sablono$core$week_field49067(var_args){
var G__49069 = arguments.length;
switch (G__49069) {
case 1:
return sablono.core.week_field49067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field49067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field49067.cljs$core$IFn$_invoke$arity$1 = (function (name__48911__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__48911__auto__);
}));

(sablono.core.week_field49067.cljs$core$IFn$_invoke$arity$2 = (function (name__48911__auto__,value__48912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__48911__auto__,value__48912__auto__);
}));

(sablono.core.week_field49067.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field49067);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box49070 = (function sablono$core$check_box49070(var_args){
var G__49072 = arguments.length;
switch (G__49072) {
case 1:
return sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box49070.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box49070.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box49070);
/**
 * Creates a radio button.
 */
sablono.core.radio_button49073 = (function sablono$core$radio_button49073(var_args){
var G__49075 = arguments.length;
switch (G__49075) {
case 1:
return sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button49073.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button49073.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button49073);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__49076 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__49076);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options49077 = (function sablono$core$select_options49077(coll){
var iter__4582__auto__ = (function sablono$core$select_options49077_$_iter__49078(s__49079){
return (new cljs.core.LazySeq(null,(function (){
var s__49079__$1 = s__49079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49079__$1);
if(temp__5735__auto__){
var s__49079__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49079__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49079__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49081 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49080 = (0);
while(true){
if((i__49080 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49080);
cljs.core.chunk_append(b__49081,((cljs.core.sequential_QMARK_(x))?(function (){var vec__49082 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options49077.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options49077.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options49077.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__49159 = (i__49080 + (1));
i__49080 = G__49159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49081),sablono$core$select_options49077_$_iter__49078(cljs.core.chunk_rest(s__49079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49081),null);
}
} else {
var x = cljs.core.first(s__49079__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__49085 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49085,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49085,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49085,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options49077.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options49077.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options49077.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options49077_$_iter__49078(cljs.core.rest(s__49079__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options49077);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down49088 = (function sablono$core$drop_down49088(var_args){
var G__49090 = arguments.length;
switch (G__49090) {
case 2:
return sablono.core.drop_down49088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down49088.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down49088.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down49088.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down49088.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down49088.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down49088);
/**
 * Creates a text area element.
 */
sablono.core.text_area49091 = (function sablono$core$text_area49091(var_args){
var G__49093 = arguments.length;
switch (G__49093) {
case 1:
return sablono.core.text_area49091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area49091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area49091.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area49091.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area49091.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area49091);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label49094 = (function sablono$core$label49094(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label49094);
/**
 * Creates a submit button.
 */
sablono.core.submit_button49095 = (function sablono$core$submit_button49095(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button49095);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button49096 = (function sablono$core$reset_button49096(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button49096);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to49097 = (function sablono$core$form_to49097(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49172 = arguments.length;
var i__4790__auto___49173 = (0);
while(true){
if((i__4790__auto___49173 < len__4789__auto___49172)){
args__4795__auto__.push((arguments[i__4790__auto___49173]));

var G__49174 = (i__4790__auto___49173 + (1));
i__4790__auto___49173 = G__49174;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to49097.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to49097.cljs$core$IFn$_invoke$arity$variadic = (function (p__49100,body){
var vec__49101 = p__49100;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__49104 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__49105 = "_method";
var G__49106 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__49104,G__49105,G__49106) : sablono.core.hidden_field.call(null,G__49104,G__49105,G__49106));
})()], null)),body));
}));

(sablono.core.form_to49097.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to49097.cljs$lang$applyTo = (function (seq49098){
var G__49099 = cljs.core.first(seq49098);
var seq49098__$1 = cljs.core.next(seq49098);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49099,seq49098__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to49097);

//# sourceMappingURL=sablono.core.js.map
