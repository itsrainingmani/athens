goog.provide('shadow.remote.runtime.cljs.env');
goog.require('cljs.core');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.remote !== 'undefined') && (typeof shadow.remote.runtime !== 'undefined') && (typeof shadow.remote.runtime.cljs !== 'undefined') && (typeof shadow.remote.runtime.cljs.env !== 'undefined') && (typeof shadow.remote.runtime.cljs.env.runtime_ref !== 'undefined')){
} else {
shadow.remote.runtime.cljs.env.runtime_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.remote !== 'undefined') && (typeof shadow.remote.runtime !== 'undefined') && (typeof shadow.remote.runtime.cljs !== 'undefined') && (typeof shadow.remote.runtime.cljs.env !== 'undefined') && (typeof shadow.remote.runtime.cljs.env.extensions_ref !== 'undefined')){
} else {
shadow.remote.runtime.cljs.env.extensions_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.remote.runtime.cljs.env.start_all_extensions_BANG_ = (function shadow$remote$runtime$cljs$env$start_all_extensions_BANG_(){
var started_set = cljs.core.set(cljs.core.keys(cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref)));
var exts = cljs.core.deref(shadow.remote.runtime.cljs.env.extensions_ref);
var ext_set = cljs.core.set(cljs.core.keys(exts));
var pending_set = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ext_set,started_set);
var pending_set__$1 = pending_set;
while(true){
if(cljs.core.empty_QMARK_(pending_set__$1)){
return new cljs.core.Keyword("shadow.remote.runtime.cljs.env","done!","shadow.remote.runtime.cljs.env/done!",615026485);
} else {
var G__59859 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pending_set__$1,started_set,exts,ext_set,pending_set){
return (function (pending_set__$2,ext_id){
var map__59854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exts,ext_id);
var map__59854__$1 = (((((!((map__59854 == null))))?(((((map__59854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59854):map__59854);
var ext = map__59854__$1;
var depends_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59854__$1,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022));
var init_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59854__$1,new cljs.core.Keyword(null,"init-fn","init-fn",777257971));
if(cljs.core.truth_(cljs.core.some(pending_set__$2,depends_on))){
return pending_set__$2;
} else {
var started = (function (){var G__59856 = cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref);
return (init_fn.cljs$core$IFn$_invoke$arity$1 ? init_fn.cljs$core$IFn$_invoke$arity$1(G__59856) : init_fn.call(null,G__59856));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.remote.runtime.cljs.env.runtime_ref,cljs.core.assoc,ext_id,started);

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending_set__$2,ext_id);
}
});})(pending_set__$1,started_set,exts,ext_set,pending_set))
,pending_set__$1,pending_set__$1);
pending_set__$1 = G__59859;
continue;

}
break;
}
});
shadow.remote.runtime.cljs.env.init_runtime_BANG_ = (function shadow$remote$runtime$cljs$env$init_runtime_BANG_(env){
cljs.core.reset_BANG_(shadow.remote.runtime.cljs.env.runtime_ref,env);

if(cljs.core.seq(cljs.core.deref(shadow.remote.runtime.cljs.env.extensions_ref))){
return shadow.remote.runtime.cljs.env.start_all_extensions_BANG_();
} else {
return null;
}
});
shadow.remote.runtime.cljs.env.init_extension_BANG_ = (function shadow$remote$runtime$cljs$env$init_extension_BANG_(ext_id,depends_on,init_fn,stop_fn){
var temp__5739__auto___59860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref),ext_id);
if((temp__5739__auto___59860 == null)){
} else {
var started_59861 = temp__5739__auto___59860;
var map__59857_59862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.remote.runtime.cljs.env.extensions_ref),ext_id);
var map__59857_59863__$1 = (((((!((map__59857_59862 == null))))?(((((map__59857_59862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59857_59862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59857_59862):map__59857_59862);
var old_59864 = map__59857_59863__$1;
var stop_fn_59865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857_59863__$1,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246));
(stop_fn_59865__$1.cljs$core$IFn$_invoke$arity$1 ? stop_fn_59865__$1.cljs$core$IFn$_invoke$arity$1(started_59861) : stop_fn_59865__$1.call(null,started_59861));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.remote.runtime.cljs.env.runtime_ref,cljs.core.dissoc,ext_id);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.remote.runtime.cljs.env.extensions_ref,cljs.core.assoc,ext_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ext-id","ext-id",-653860474),ext_id,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022),depends_on,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246),stop_fn], null));

if(cljs.core.truth_(cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref))){
return shadow.remote.runtime.cljs.env.start_all_extensions_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=shadow.remote.runtime.cljs.env.js.map
