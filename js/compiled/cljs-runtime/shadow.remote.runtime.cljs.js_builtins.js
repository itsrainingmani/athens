goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__89533_89540 = clojure.core.protocols.datafy;
var G__89534_89541 = "object";
var G__89535_89542 = (function (o){
if((!((o.__proto__ === Object.prototype)))){
return o;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,key){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,key,goog.object.get(o,key));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),goog.object.getKeys(o))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (coll,k,v){
return goog.object.get(o,k);
})], null));
}
});
goog.object.set(G__89533_89540,G__89534_89541,G__89535_89542);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__89537_89543 = clojure.core.protocols.datafy;
var G__89538_89544 = "array";
var G__89539_89545 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__89537_89543,G__89538_89544,G__89539_89545);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
