goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61347,p__61348){
var map__61349 = p__61347;
var map__61349__$1 = (((((!((map__61349 == null))))?(((((map__61349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61349):map__61349);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61350 = p__61348;
var map__61350__$1 = (((((!((map__61350 == null))))?(((((map__61350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61350):map__61350);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61353,p__61354){
var map__61355 = p__61353;
var map__61355__$1 = (((((!((map__61355 == null))))?(((((map__61355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61355):map__61355);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61355__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61356 = p__61354;
var map__61356__$1 = (((((!((map__61356 == null))))?(((((map__61356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61356):map__61356);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61361,p__61362){
var map__61363 = p__61361;
var map__61363__$1 = (((((!((map__61363 == null))))?(((((map__61363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61363):map__61363);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61363__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61363__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61364 = p__61362;
var map__61364__$1 = (((((!((map__61364 == null))))?(((((map__61364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61364):map__61364);
var msg = map__61364__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61364__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61367 = obj_support;
var map__61367__$1 = (((((!((map__61367 == null))))?(((((map__61367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61367):map__61367);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61360_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61360_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61359_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61359_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61369,tid){
var map__61370 = p__61369;
var map__61370__$1 = (((((!((map__61370 == null))))?(((((map__61370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61370):map__61370);
var svc = map__61370__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61376 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61377 = null;
var count__61378 = (0);
var i__61379 = (0);
while(true){
if((i__61379 < count__61378)){
var tid = chunk__61377.cljs$core$IIndexed$_nth$arity$2(null,i__61379);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61383 = seq__61376;
var G__61384 = chunk__61377;
var G__61385 = count__61378;
var G__61386 = (i__61379 + (1));
seq__61376 = G__61383;
chunk__61377 = G__61384;
count__61378 = G__61385;
i__61379 = G__61386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61376);
if(temp__5735__auto__){
var seq__61376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61376__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61376__$1);
var G__61387 = cljs.core.chunk_rest(seq__61376__$1);
var G__61388 = c__4609__auto__;
var G__61389 = cljs.core.count(c__4609__auto__);
var G__61390 = (0);
seq__61376 = G__61387;
chunk__61377 = G__61388;
count__61378 = G__61389;
i__61379 = G__61390;
continue;
} else {
var tid = cljs.core.first(seq__61376__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61391 = cljs.core.next(seq__61376__$1);
var G__61392 = null;
var G__61393 = (0);
var G__61394 = (0);
seq__61376 = G__61391;
chunk__61377 = G__61392;
count__61378 = G__61393;
i__61379 = G__61394;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61372_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61372_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61373_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61373_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61374_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61374_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61375_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61375_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61380){
var map__61381 = p__61380;
var map__61381__$1 = (((((!((map__61381 == null))))?(((((map__61381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61381):map__61381);
var svc = map__61381__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
