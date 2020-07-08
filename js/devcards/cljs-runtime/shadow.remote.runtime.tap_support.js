goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60926,p__60927){
var map__60928 = p__60926;
var map__60928__$1 = (((((!((map__60928 == null))))?(((((map__60928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60928):map__60928);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60928__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60929 = p__60927;
var map__60929__$1 = (((((!((map__60929 == null))))?(((((map__60929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60929):map__60929);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60929__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60932,p__60933){
var map__60934 = p__60932;
var map__60934__$1 = (((((!((map__60934 == null))))?(((((map__60934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60934):map__60934);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60935 = p__60933;
var map__60935__$1 = (((((!((map__60935 == null))))?(((((map__60935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60935):map__60935);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60935__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60940,p__60941){
var map__60942 = p__60940;
var map__60942__$1 = (((((!((map__60942 == null))))?(((((map__60942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60942):map__60942);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60943 = p__60941;
var map__60943__$1 = (((((!((map__60943 == null))))?(((((map__60943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60943):map__60943);
var msg = map__60943__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60943__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60946 = obj_support;
var map__60946__$1 = (((((!((map__60946 == null))))?(((((map__60946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60946):map__60946);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60939_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60939_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60938_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60938_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60948,tid){
var map__60949 = p__60948;
var map__60949__$1 = (((((!((map__60949 == null))))?(((((map__60949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60949):map__60949);
var svc = map__60949__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60949__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60955 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60956 = null;
var count__60957 = (0);
var i__60958 = (0);
while(true){
if((i__60958 < count__60957)){
var tid = chunk__60956.cljs$core$IIndexed$_nth$arity$2(null,i__60958);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60962 = seq__60955;
var G__60963 = chunk__60956;
var G__60964 = count__60957;
var G__60965 = (i__60958 + (1));
seq__60955 = G__60962;
chunk__60956 = G__60963;
count__60957 = G__60964;
i__60958 = G__60965;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60955);
if(temp__5735__auto__){
var seq__60955__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60955__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60955__$1);
var G__60966 = cljs.core.chunk_rest(seq__60955__$1);
var G__60967 = c__4609__auto__;
var G__60968 = cljs.core.count(c__4609__auto__);
var G__60969 = (0);
seq__60955 = G__60966;
chunk__60956 = G__60967;
count__60957 = G__60968;
i__60958 = G__60969;
continue;
} else {
var tid = cljs.core.first(seq__60955__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60970 = cljs.core.next(seq__60955__$1);
var G__60971 = null;
var G__60972 = (0);
var G__60973 = (0);
seq__60955 = G__60970;
chunk__60956 = G__60971;
count__60957 = G__60972;
i__60958 = G__60973;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60951_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60951_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60952_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60952_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60953_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60953_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60954_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60954_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60959){
var map__60960 = p__60959;
var map__60960__$1 = (((((!((map__60960 == null))))?(((((map__60960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60960):map__60960);
var svc = map__60960__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
