goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68278,p__68279){
var map__68280 = p__68278;
var map__68280__$1 = (((((!((map__68280 == null))))?(((((map__68280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68280):map__68280);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68280__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68281 = p__68279;
var map__68281__$1 = (((((!((map__68281 == null))))?(((((map__68281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68281):map__68281);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68284,p__68285){
var map__68286 = p__68284;
var map__68286__$1 = (((((!((map__68286 == null))))?(((((map__68286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68286):map__68286);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68286__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68287 = p__68285;
var map__68287__$1 = (((((!((map__68287 == null))))?(((((map__68287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68287):map__68287);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68287__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68292,p__68293){
var map__68294 = p__68292;
var map__68294__$1 = (((((!((map__68294 == null))))?(((((map__68294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68294):map__68294);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68294__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68294__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68295 = p__68293;
var map__68295__$1 = (((((!((map__68295 == null))))?(((((map__68295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68295):map__68295);
var msg = map__68295__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68295__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68298 = obj_support;
var map__68298__$1 = (((((!((map__68298 == null))))?(((((map__68298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68298):map__68298);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68298__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68291_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68291_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68290_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68290_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68300,tid){
var map__68301 = p__68300;
var map__68301__$1 = (((((!((map__68301 == null))))?(((((map__68301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68301):map__68301);
var svc = map__68301__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68301__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68307 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68308 = null;
var count__68309 = (0);
var i__68310 = (0);
while(true){
if((i__68310 < count__68309)){
var tid = chunk__68308.cljs$core$IIndexed$_nth$arity$2(null,i__68310);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68337 = seq__68307;
var G__68338 = chunk__68308;
var G__68339 = count__68309;
var G__68340 = (i__68310 + (1));
seq__68307 = G__68337;
chunk__68308 = G__68338;
count__68309 = G__68339;
i__68310 = G__68340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68307);
if(temp__5735__auto__){
var seq__68307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68307__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68307__$1);
var G__68341 = cljs.core.chunk_rest(seq__68307__$1);
var G__68342 = c__4609__auto__;
var G__68343 = cljs.core.count(c__4609__auto__);
var G__68344 = (0);
seq__68307 = G__68341;
chunk__68308 = G__68342;
count__68309 = G__68343;
i__68310 = G__68344;
continue;
} else {
var tid = cljs.core.first(seq__68307__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68345 = cljs.core.next(seq__68307__$1);
var G__68346 = null;
var G__68347 = (0);
var G__68348 = (0);
seq__68307 = G__68345;
chunk__68308 = G__68346;
count__68309 = G__68347;
i__68310 = G__68348;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68303_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68303_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68304_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68304_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68305_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68305_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68306_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68306_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68331){
var map__68332 = p__68331;
var map__68332__$1 = (((((!((map__68332 == null))))?(((((map__68332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68332):map__68332);
var svc = map__68332__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
