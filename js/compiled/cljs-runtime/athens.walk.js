goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__48635_48637 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__48639__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__48630_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48630_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__48631_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48631_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__48639 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__48640__i = 0, G__48640__a = new Array(arguments.length -  0);
while (G__48640__i < G__48640__a.length) {G__48640__a[G__48640__i] = arguments[G__48640__i + 0]; ++G__48640__i;}
  title = new cljs.core.IndexedSeq(G__48640__a,0,null);
} 
return G__48639__delegate.call(this,title);};
G__48639.cljs$lang$maxFixedArity = 0;
G__48639.cljs$lang$applyTo = (function (arglist__48641){
var title = cljs.core.seq(arglist__48641);
return G__48639__delegate(title);
});
G__48639.cljs$core$IFn$_invoke$arity$variadic = G__48639__delegate;
return G__48639;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__48642__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__48632_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48632_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__48633_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48633_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__48642 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__48643__i = 0, G__48643__a = new Array(arguments.length -  0);
while (G__48643__i < G__48643__a.length) {G__48643__a[G__48643__i] = arguments[G__48643__i + 0]; ++G__48643__i;}
  title = new cljs.core.IndexedSeq(G__48643__a,0,null);
} 
return G__48642__delegate.call(this,title);};
G__48642.cljs$lang$maxFixedArity = 0;
G__48642.cljs$lang$applyTo = (function (arglist__48644){
var title = cljs.core.seq(arglist__48644);
return G__48642__delegate(title);
});
G__48642.cljs$core$IFn$_invoke$arity$variadic = G__48642__delegate;
return G__48642;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__48634_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48634_SHARP_,uid);
}));
})], null);
var G__48636_48638 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__48635_48637,G__48636_48638) : instaparse.core.transform.call(null,G__48635_48637,G__48636_48638));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
