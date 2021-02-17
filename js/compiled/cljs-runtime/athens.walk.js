goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__48634_48636 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__48638__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__48629_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48629_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__48630_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48630_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__48638 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__48639__i = 0, G__48639__a = new Array(arguments.length -  0);
while (G__48639__i < G__48639__a.length) {G__48639__a[G__48639__i] = arguments[G__48639__i + 0]; ++G__48639__i;}
  title = new cljs.core.IndexedSeq(G__48639__a,0,null);
} 
return G__48638__delegate.call(this,title);};
G__48638.cljs$lang$maxFixedArity = 0;
G__48638.cljs$lang$applyTo = (function (arglist__48640){
var title = cljs.core.seq(arglist__48640);
return G__48638__delegate(title);
});
G__48638.cljs$core$IFn$_invoke$arity$variadic = G__48638__delegate;
return G__48638;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__48641__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__48631_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48631_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__48632_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48632_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__48641 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__48642__i = 0, G__48642__a = new Array(arguments.length -  0);
while (G__48642__i < G__48642__a.length) {G__48642__a[G__48642__i] = arguments[G__48642__i + 0]; ++G__48642__i;}
  title = new cljs.core.IndexedSeq(G__48642__a,0,null);
} 
return G__48641__delegate.call(this,title);};
G__48641.cljs$lang$maxFixedArity = 0;
G__48641.cljs$lang$applyTo = (function (arglist__48643){
var title = cljs.core.seq(arglist__48643);
return G__48641__delegate(title);
});
G__48641.cljs$core$IFn$_invoke$arity$variadic = G__48641__delegate;
return G__48641;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__48633_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48633_SHARP_,uid);
}));
})], null);
var G__48635_48637 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__48634_48636,G__48635_48637) : instaparse.core.transform.call(null,G__48634_48636,G__48635_48637));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
