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
var G__41178__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__40993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__40994 = cljs.core.seq(vec__40993);
var first__40995 = cljs.core.first(seq__40994);
var seq__40994__$1 = cljs.core.next(seq__40994);
var tag = first__40995;
var body = seq__40994__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41179__i = 0, G__41179__a = new Array(arguments.length -  0);
while (G__41179__i < G__41179__a.length) {G__41179__a[G__41179__i] = arguments[G__41179__i + 0]; ++G__41179__i;}
  args = new cljs.core.IndexedSeq(G__41179__a,0,null);
} 
return G__41178__delegate.call(this,args);};
G__41178.cljs$lang$maxFixedArity = 0;
G__41178.cljs$lang$applyTo = (function (arglist__41180){
var args = cljs.core.seq(arglist__41180);
return G__41178__delegate(args);
});
G__41178.cljs$core$IFn$_invoke$arity$variadic = G__41178__delegate;
return G__41178;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__40999(s__41000){
return (new cljs.core.LazySeq(null,(function (){
var s__41000__$1 = s__41000;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41000__$1);
if(temp__5735__auto__){
var s__41000__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41000__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41000__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41002 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41001 = (0);
while(true){
if((i__41001 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41001);
cljs.core.chunk_append(b__41002,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41181 = (i__41001 + (1));
i__41001 = G__41181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41002),sablono$core$update_arglists_$_iter__40999(cljs.core.chunk_rest(s__41000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41002),null);
}
} else {
var args = cljs.core.first(s__41000__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40999(cljs.core.rest(s__41000__$2)));
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
var len__4789__auto___41182 = arguments.length;
var i__4790__auto___41183 = (0);
while(true){
if((i__4790__auto___41183 < len__4789__auto___41182)){
args__4795__auto__.push((arguments[i__4790__auto___41183]));

var G__41184 = (i__4790__auto___41183 + (1));
i__4790__auto___41183 = G__41184;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41024(s__41025){
return (new cljs.core.LazySeq(null,(function (){
var s__41025__$1 = s__41025;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41025__$1);
if(temp__5735__auto__){
var s__41025__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41025__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41025__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41027 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41026 = (0);
while(true){
if((i__41026 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41026);
cljs.core.chunk_append(b__41027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41185 = (i__41026 + (1));
i__41026 = G__41185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41027),sablono$core$iter__41024(cljs.core.chunk_rest(s__41025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41027),null);
}
} else {
var style = cljs.core.first(s__41025__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41024(cljs.core.rest(s__41025__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41008){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41008));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41041 = goog.dom.getDocument().body;
var G__41042 = (function (){var G__41043 = "script";
var G__41044 = ({"src": src});
return goog.dom.createDom(G__41043,G__41044);
})();
return goog.dom.appendChild(G__41041,G__41042);
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
sablono.core.link_to41049 = (function sablono$core$link_to41049(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41186 = arguments.length;
var i__4790__auto___41187 = (0);
while(true){
if((i__4790__auto___41187 < len__4789__auto___41186)){
args__4795__auto__.push((arguments[i__4790__auto___41187]));

var G__41188 = (i__4790__auto___41187 + (1));
i__4790__auto___41187 = G__41188;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41049.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41049.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41049.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41049.cljs$lang$applyTo = (function (seq41050){
var G__41051 = cljs.core.first(seq41050);
var seq41050__$1 = cljs.core.next(seq41050);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41051,seq41050__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41049);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41054 = (function sablono$core$mail_to41054(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41189 = arguments.length;
var i__4790__auto___41190 = (0);
while(true){
if((i__4790__auto___41190 < len__4789__auto___41189)){
args__4795__auto__.push((arguments[i__4790__auto___41190]));

var G__41191 = (i__4790__auto___41190 + (1));
i__4790__auto___41190 = G__41191;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41054.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41054.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41061){
var vec__41062 = p__41061;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41054.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41054.cljs$lang$applyTo = (function (seq41055){
var G__41056 = cljs.core.first(seq41055);
var seq41055__$1 = cljs.core.next(seq41055);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41056,seq41055__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41054);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41067 = (function sablono$core$unordered_list41067(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41067_$_iter__41068(s__41069){
return (new cljs.core.LazySeq(null,(function (){
var s__41069__$1 = s__41069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41069__$1);
if(temp__5735__auto__){
var s__41069__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41069__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41069__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41071 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41070 = (0);
while(true){
if((i__41070 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41070);
cljs.core.chunk_append(b__41071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41192 = (i__41070 + (1));
i__41070 = G__41192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41071),sablono$core$unordered_list41067_$_iter__41068(cljs.core.chunk_rest(s__41069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41071),null);
}
} else {
var x = cljs.core.first(s__41069__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41067_$_iter__41068(cljs.core.rest(s__41069__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41067);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41076 = (function sablono$core$ordered_list41076(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41076_$_iter__41077(s__41078){
return (new cljs.core.LazySeq(null,(function (){
var s__41078__$1 = s__41078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41078__$1);
if(temp__5735__auto__){
var s__41078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41078__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41078__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41080 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41079 = (0);
while(true){
if((i__41079 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41079);
cljs.core.chunk_append(b__41080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41195 = (i__41079 + (1));
i__41079 = G__41195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41080),sablono$core$ordered_list41076_$_iter__41077(cljs.core.chunk_rest(s__41078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41080),null);
}
} else {
var x = cljs.core.first(s__41078__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41076_$_iter__41077(cljs.core.rest(s__41078__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41076);
/**
 * Create an image element.
 */
sablono.core.image41081 = (function sablono$core$image41081(var_args){
var G__41083 = arguments.length;
switch (G__41083) {
case 1:
return sablono.core.image41081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41081.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41081.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41081.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41081);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41084_SHARP_,p2__41085_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41084_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41085_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41086_SHARP_,p2__41087_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41086_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41087_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41089 = arguments.length;
switch (G__41089) {
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
sablono.core.color_field41090 = (function sablono$core$color_field41090(var_args){
var G__41092 = arguments.length;
switch (G__41092) {
case 1:
return sablono.core.color_field41090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41090.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40982__auto__);
}));

(sablono.core.color_field41090.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.color_field41090.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41090);

/**
 * Creates a date input field.
 */
sablono.core.date_field41093 = (function sablono$core$date_field41093(var_args){
var G__41095 = arguments.length;
switch (G__41095) {
case 1:
return sablono.core.date_field41093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41093.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40982__auto__);
}));

(sablono.core.date_field41093.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.date_field41093.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41093);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41096 = (function sablono$core$datetime_field41096(var_args){
var G__41098 = arguments.length;
switch (G__41098) {
case 1:
return sablono.core.datetime_field41096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41096.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40982__auto__);
}));

(sablono.core.datetime_field41096.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.datetime_field41096.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41096);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41099 = (function sablono$core$datetime_local_field41099(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 1:
return sablono.core.datetime_local_field41099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41099.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40982__auto__);
}));

(sablono.core.datetime_local_field41099.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.datetime_local_field41099.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41099);

/**
 * Creates a email input field.
 */
sablono.core.email_field41102 = (function sablono$core$email_field41102(var_args){
var G__41104 = arguments.length;
switch (G__41104) {
case 1:
return sablono.core.email_field41102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41102.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40982__auto__);
}));

(sablono.core.email_field41102.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.email_field41102.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41102);

/**
 * Creates a file input field.
 */
sablono.core.file_field41105 = (function sablono$core$file_field41105(var_args){
var G__41107 = arguments.length;
switch (G__41107) {
case 1:
return sablono.core.file_field41105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41105.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40982__auto__);
}));

(sablono.core.file_field41105.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.file_field41105.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41105);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41108 = (function sablono$core$hidden_field41108(var_args){
var G__41110 = arguments.length;
switch (G__41110) {
case 1:
return sablono.core.hidden_field41108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41108.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40982__auto__);
}));

(sablono.core.hidden_field41108.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.hidden_field41108.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41108);

/**
 * Creates a month input field.
 */
sablono.core.month_field41111 = (function sablono$core$month_field41111(var_args){
var G__41113 = arguments.length;
switch (G__41113) {
case 1:
return sablono.core.month_field41111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41111.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40982__auto__);
}));

(sablono.core.month_field41111.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.month_field41111.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41111);

/**
 * Creates a number input field.
 */
sablono.core.number_field41114 = (function sablono$core$number_field41114(var_args){
var G__41116 = arguments.length;
switch (G__41116) {
case 1:
return sablono.core.number_field41114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41114.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40982__auto__);
}));

(sablono.core.number_field41114.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.number_field41114.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41114);

/**
 * Creates a password input field.
 */
sablono.core.password_field41117 = (function sablono$core$password_field41117(var_args){
var G__41119 = arguments.length;
switch (G__41119) {
case 1:
return sablono.core.password_field41117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41117.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40982__auto__);
}));

(sablono.core.password_field41117.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.password_field41117.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41117);

/**
 * Creates a range input field.
 */
sablono.core.range_field41120 = (function sablono$core$range_field41120(var_args){
var G__41122 = arguments.length;
switch (G__41122) {
case 1:
return sablono.core.range_field41120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41120.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40982__auto__);
}));

(sablono.core.range_field41120.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.range_field41120.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41120);

/**
 * Creates a search input field.
 */
sablono.core.search_field41123 = (function sablono$core$search_field41123(var_args){
var G__41125 = arguments.length;
switch (G__41125) {
case 1:
return sablono.core.search_field41123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41123.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40982__auto__);
}));

(sablono.core.search_field41123.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.search_field41123.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41123);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41126 = (function sablono$core$tel_field41126(var_args){
var G__41128 = arguments.length;
switch (G__41128) {
case 1:
return sablono.core.tel_field41126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41126.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40982__auto__);
}));

(sablono.core.tel_field41126.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.tel_field41126.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41126);

/**
 * Creates a text input field.
 */
sablono.core.text_field41129 = (function sablono$core$text_field41129(var_args){
var G__41131 = arguments.length;
switch (G__41131) {
case 1:
return sablono.core.text_field41129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41129.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40982__auto__);
}));

(sablono.core.text_field41129.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.text_field41129.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41129);

/**
 * Creates a time input field.
 */
sablono.core.time_field41132 = (function sablono$core$time_field41132(var_args){
var G__41134 = arguments.length;
switch (G__41134) {
case 1:
return sablono.core.time_field41132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41132.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40982__auto__);
}));

(sablono.core.time_field41132.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.time_field41132.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41132);

/**
 * Creates a url input field.
 */
sablono.core.url_field41135 = (function sablono$core$url_field41135(var_args){
var G__41137 = arguments.length;
switch (G__41137) {
case 1:
return sablono.core.url_field41135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41135.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40982__auto__);
}));

(sablono.core.url_field41135.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.url_field41135.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41135);

/**
 * Creates a week input field.
 */
sablono.core.week_field41138 = (function sablono$core$week_field41138(var_args){
var G__41140 = arguments.length;
switch (G__41140) {
case 1:
return sablono.core.week_field41138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41138.cljs$core$IFn$_invoke$arity$1 = (function (name__40982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40982__auto__);
}));

(sablono.core.week_field41138.cljs$core$IFn$_invoke$arity$2 = (function (name__40982__auto__,value__40983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40982__auto__,value__40983__auto__);
}));

(sablono.core.week_field41138.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41138);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41141 = (function sablono$core$check_box41141(var_args){
var G__41143 = arguments.length;
switch (G__41143) {
case 1:
return sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41141.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41141.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41141);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41144 = (function sablono$core$radio_button41144(var_args){
var G__41146 = arguments.length;
switch (G__41146) {
case 1:
return sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41144.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41144.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41144);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41147 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41147);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41148 = (function sablono$core$select_options41148(coll){
var iter__4582__auto__ = (function sablono$core$select_options41148_$_iter__41149(s__41150){
return (new cljs.core.LazySeq(null,(function (){
var s__41150__$1 = s__41150;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41150__$1);
if(temp__5735__auto__){
var s__41150__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41150__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41150__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41152 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41151 = (0);
while(true){
if((i__41151 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41151);
cljs.core.chunk_append(b__41152,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41153 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41153,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41153,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41153,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41148.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41148.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41148.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41224 = (i__41151 + (1));
i__41151 = G__41224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41152),sablono$core$select_options41148_$_iter__41149(cljs.core.chunk_rest(s__41150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41152),null);
}
} else {
var x = cljs.core.first(s__41150__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41156 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41148.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41148.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41148.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41148_$_iter__41149(cljs.core.rest(s__41150__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41148);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41159 = (function sablono$core$drop_down41159(var_args){
var G__41161 = arguments.length;
switch (G__41161) {
case 2:
return sablono.core.drop_down41159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41159.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41159.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41159.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41159.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41159.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41159);
/**
 * Creates a text area element.
 */
sablono.core.text_area41162 = (function sablono$core$text_area41162(var_args){
var G__41164 = arguments.length;
switch (G__41164) {
case 1:
return sablono.core.text_area41162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41162.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41162.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41162.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41162);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41165 = (function sablono$core$label41165(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41165);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41166 = (function sablono$core$submit_button41166(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41166);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41167 = (function sablono$core$reset_button41167(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41167);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41168 = (function sablono$core$form_to41168(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41227 = arguments.length;
var i__4790__auto___41228 = (0);
while(true){
if((i__4790__auto___41228 < len__4789__auto___41227)){
args__4795__auto__.push((arguments[i__4790__auto___41228]));

var G__41229 = (i__4790__auto___41228 + (1));
i__4790__auto___41228 = G__41229;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41168.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41168.cljs$core$IFn$_invoke$arity$variadic = (function (p__41171,body){
var vec__41172 = p__41171;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41176 = "_method";
var G__41177 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41175,G__41176,G__41177) : sablono.core.hidden_field.call(null,G__41175,G__41176,G__41177));
})()], null)),body));
}));

(sablono.core.form_to41168.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41168.cljs$lang$applyTo = (function (seq41169){
var G__41170 = cljs.core.first(seq41169);
var seq41169__$1 = cljs.core.next(seq41169);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41170,seq41169__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41168);

//# sourceMappingURL=sablono.core.js.map
