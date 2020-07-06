goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__82530,p__82531){
var map__82532 = p__82530;
var map__82532__$1 = (((((!((map__82532 == null))))?(((((map__82532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82532):map__82532);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82532__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__82533 = p__82531;
var map__82533__$1 = (((((!((map__82533 == null))))?(((((map__82533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82533):map__82533);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82533__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__82536,p__82537){
var map__82538 = p__82536;
var map__82538__$1 = (((((!((map__82538 == null))))?(((((map__82538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82538):map__82538);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82538__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__82539 = p__82537;
var map__82539__$1 = (((((!((map__82539 == null))))?(((((map__82539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82539):map__82539);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82539__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__82544,p__82545){
var map__82546 = p__82544;
var map__82546__$1 = (((((!((map__82546 == null))))?(((((map__82546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82546):map__82546);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82546__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__82547 = p__82545;
var map__82547__$1 = (((((!((map__82547 == null))))?(((((map__82547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82547):map__82547);
var msg = map__82547__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82547__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__82550 = obj_support;
var map__82550__$1 = (((((!((map__82550 == null))))?(((((map__82550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82550):map__82550);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__82543_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__82543_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__82542_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__82542_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__82552,tid){
var map__82553 = p__82552;
var map__82553__$1 = (((((!((map__82553 == null))))?(((((map__82553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82553):map__82553);
var svc = map__82553__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82553__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__82559 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__82560 = null;
var count__82561 = (0);
var i__82562 = (0);
while(true){
if((i__82562 < count__82561)){
var tid = chunk__82560.cljs$core$IIndexed$_nth$arity$2(null,i__82562);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__82566 = seq__82559;
var G__82567 = chunk__82560;
var G__82568 = count__82561;
var G__82569 = (i__82562 + (1));
seq__82559 = G__82566;
chunk__82560 = G__82567;
count__82561 = G__82568;
i__82562 = G__82569;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82559);
if(temp__5735__auto__){
var seq__82559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82559__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82559__$1);
var G__82570 = cljs.core.chunk_rest(seq__82559__$1);
var G__82571 = c__4609__auto__;
var G__82572 = cljs.core.count(c__4609__auto__);
var G__82573 = (0);
seq__82559 = G__82570;
chunk__82560 = G__82571;
count__82561 = G__82572;
i__82562 = G__82573;
continue;
} else {
var tid = cljs.core.first(seq__82559__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__82574 = cljs.core.next(seq__82559__$1);
var G__82575 = null;
var G__82576 = (0);
var G__82577 = (0);
seq__82559 = G__82574;
chunk__82560 = G__82575;
count__82561 = G__82576;
i__82562 = G__82577;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__82555_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__82555_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__82556_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__82556_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__82557_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__82557_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__82558_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__82558_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__82563){
var map__82564 = p__82563;
var map__82564__$1 = (((((!((map__82564 == null))))?(((((map__82564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82564):map__82564);
var svc = map__82564__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82564__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82564__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
