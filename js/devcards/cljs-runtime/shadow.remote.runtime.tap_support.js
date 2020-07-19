goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61335,p__61336){
var map__61337 = p__61335;
var map__61337__$1 = (((((!((map__61337 == null))))?(((((map__61337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61337):map__61337);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61337__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61338 = p__61336;
var map__61338__$1 = (((((!((map__61338 == null))))?(((((map__61338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61338):map__61338);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61341,p__61342){
var map__61343 = p__61341;
var map__61343__$1 = (((((!((map__61343 == null))))?(((((map__61343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61343):map__61343);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61344 = p__61342;
var map__61344__$1 = (((((!((map__61344 == null))))?(((((map__61344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61344):map__61344);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61344__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61349,p__61350){
var map__61351 = p__61349;
var map__61351__$1 = (((((!((map__61351 == null))))?(((((map__61351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61351):map__61351);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61352 = p__61350;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var msg = map__61352__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61352__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61355 = obj_support;
var map__61355__$1 = (((((!((map__61355 == null))))?(((((map__61355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61355):map__61355);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61355__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61348_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61348_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61347_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61347_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61357,tid){
var map__61358 = p__61357;
var map__61358__$1 = (((((!((map__61358 == null))))?(((((map__61358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61358):map__61358);
var svc = map__61358__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61358__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61364 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61365 = null;
var count__61366 = (0);
var i__61367 = (0);
while(true){
if((i__61367 < count__61366)){
var tid = chunk__61365.cljs$core$IIndexed$_nth$arity$2(null,i__61367);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61371 = seq__61364;
var G__61372 = chunk__61365;
var G__61373 = count__61366;
var G__61374 = (i__61367 + (1));
seq__61364 = G__61371;
chunk__61365 = G__61372;
count__61366 = G__61373;
i__61367 = G__61374;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61364);
if(temp__5735__auto__){
var seq__61364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61364__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61364__$1);
var G__61375 = cljs.core.chunk_rest(seq__61364__$1);
var G__61376 = c__4609__auto__;
var G__61377 = cljs.core.count(c__4609__auto__);
var G__61378 = (0);
seq__61364 = G__61375;
chunk__61365 = G__61376;
count__61366 = G__61377;
i__61367 = G__61378;
continue;
} else {
var tid = cljs.core.first(seq__61364__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61379 = cljs.core.next(seq__61364__$1);
var G__61380 = null;
var G__61381 = (0);
var G__61382 = (0);
seq__61364 = G__61379;
chunk__61365 = G__61380;
count__61366 = G__61381;
i__61367 = G__61382;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61360_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61360_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61361_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61361_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61362_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61362_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61363_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61363_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61368){
var map__61369 = p__61368;
var map__61369__$1 = (((((!((map__61369 == null))))?(((((map__61369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61369):map__61369);
var svc = map__61369__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
