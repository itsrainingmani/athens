goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61338,p__61339){
var map__61340 = p__61338;
var map__61340__$1 = (((((!((map__61340 == null))))?(((((map__61340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61340):map__61340);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61341 = p__61339;
var map__61341__$1 = (((((!((map__61341 == null))))?(((((map__61341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61341):map__61341);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61341__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61344,p__61345){
var map__61346 = p__61344;
var map__61346__$1 = (((((!((map__61346 == null))))?(((((map__61346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61346):map__61346);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61347 = p__61345;
var map__61347__$1 = (((((!((map__61347 == null))))?(((((map__61347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61347):map__61347);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61347__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61352,p__61353){
var map__61354 = p__61352;
var map__61354__$1 = (((((!((map__61354 == null))))?(((((map__61354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61354):map__61354);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61355 = p__61353;
var map__61355__$1 = (((((!((map__61355 == null))))?(((((map__61355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61355):map__61355);
var msg = map__61355__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61355__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61358 = obj_support;
var map__61358__$1 = (((((!((map__61358 == null))))?(((((map__61358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61358):map__61358);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61358__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61351_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61351_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61350_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61350_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61360,tid){
var map__61361 = p__61360;
var map__61361__$1 = (((((!((map__61361 == null))))?(((((map__61361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61361):map__61361);
var svc = map__61361__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61361__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61367 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61368 = null;
var count__61369 = (0);
var i__61370 = (0);
while(true){
if((i__61370 < count__61369)){
var tid = chunk__61368.cljs$core$IIndexed$_nth$arity$2(null,i__61370);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61374 = seq__61367;
var G__61375 = chunk__61368;
var G__61376 = count__61369;
var G__61377 = (i__61370 + (1));
seq__61367 = G__61374;
chunk__61368 = G__61375;
count__61369 = G__61376;
i__61370 = G__61377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61367);
if(temp__5735__auto__){
var seq__61367__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61367__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61367__$1);
var G__61378 = cljs.core.chunk_rest(seq__61367__$1);
var G__61379 = c__4609__auto__;
var G__61380 = cljs.core.count(c__4609__auto__);
var G__61381 = (0);
seq__61367 = G__61378;
chunk__61368 = G__61379;
count__61369 = G__61380;
i__61370 = G__61381;
continue;
} else {
var tid = cljs.core.first(seq__61367__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61382 = cljs.core.next(seq__61367__$1);
var G__61383 = null;
var G__61384 = (0);
var G__61385 = (0);
seq__61367 = G__61382;
chunk__61368 = G__61383;
count__61369 = G__61384;
i__61370 = G__61385;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61363_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61363_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61364_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61364_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61365_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61365_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61366_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61366_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61371){
var map__61372 = p__61371;
var map__61372__$1 = (((((!((map__61372 == null))))?(((((map__61372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61372):map__61372);
var svc = map__61372__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
