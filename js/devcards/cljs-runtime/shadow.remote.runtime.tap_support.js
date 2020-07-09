goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60940,p__60941){
var map__60942 = p__60940;
var map__60942__$1 = (((((!((map__60942 == null))))?(((((map__60942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60942):map__60942);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60943 = p__60941;
var map__60943__$1 = (((((!((map__60943 == null))))?(((((map__60943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60943):map__60943);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60946,p__60947){
var map__60948 = p__60946;
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60949 = p__60947;
var map__60949__$1 = (((((!((map__60949 == null))))?(((((map__60949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60949):map__60949);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60949__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60954,p__60955){
var map__60956 = p__60954;
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60957 = p__60955;
var map__60957__$1 = (((((!((map__60957 == null))))?(((((map__60957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60957):map__60957);
var msg = map__60957__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60957__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60960 = obj_support;
var map__60960__$1 = (((((!((map__60960 == null))))?(((((map__60960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60960):map__60960);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60953_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60953_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60952_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60952_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60962,tid){
var map__60963 = p__60962;
var map__60963__$1 = (((((!((map__60963 == null))))?(((((map__60963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60963):map__60963);
var svc = map__60963__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60969 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60970 = null;
var count__60971 = (0);
var i__60972 = (0);
while(true){
if((i__60972 < count__60971)){
var tid = chunk__60970.cljs$core$IIndexed$_nth$arity$2(null,i__60972);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60976 = seq__60969;
var G__60977 = chunk__60970;
var G__60978 = count__60971;
var G__60979 = (i__60972 + (1));
seq__60969 = G__60976;
chunk__60970 = G__60977;
count__60971 = G__60978;
i__60972 = G__60979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60969);
if(temp__5735__auto__){
var seq__60969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60969__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60969__$1);
var G__60980 = cljs.core.chunk_rest(seq__60969__$1);
var G__60981 = c__4609__auto__;
var G__60982 = cljs.core.count(c__4609__auto__);
var G__60983 = (0);
seq__60969 = G__60980;
chunk__60970 = G__60981;
count__60971 = G__60982;
i__60972 = G__60983;
continue;
} else {
var tid = cljs.core.first(seq__60969__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60984 = cljs.core.next(seq__60969__$1);
var G__60985 = null;
var G__60986 = (0);
var G__60987 = (0);
seq__60969 = G__60984;
chunk__60970 = G__60985;
count__60971 = G__60986;
i__60972 = G__60987;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60965_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60965_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60966_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60966_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60967_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60967_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60968_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60968_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60973){
var map__60974 = p__60973;
var map__60974__$1 = (((((!((map__60974 == null))))?(((((map__60974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60974):map__60974);
var svc = map__60974__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
