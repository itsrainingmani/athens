goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__61261_61267 = clojure.core.protocols.datafy;
var G__61262_61268 = "object";
var G__61263_61269 = (function (o){
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
goog.object.set(G__61261_61267,G__61262_61268,G__61263_61269);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__61264_61270 = clojure.core.protocols.datafy;
var G__61265_61271 = "array";
var G__61266_61272 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__61264_61270,G__61265_61271,G__61266_61272);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
