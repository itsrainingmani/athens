goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61016,p__61017){
var map__61018 = p__61016;
var map__61018__$1 = (((((!((map__61018 == null))))?(((((map__61018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61018):map__61018);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61018__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61019 = p__61017;
var map__61019__$1 = (((((!((map__61019 == null))))?(((((map__61019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61019):map__61019);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61022,p__61023){
var map__61024 = p__61022;
var map__61024__$1 = (((((!((map__61024 == null))))?(((((map__61024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61024):map__61024);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61024__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61025 = p__61023;
var map__61025__$1 = (((((!((map__61025 == null))))?(((((map__61025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61025):map__61025);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61025__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61030,p__61031){
var map__61032 = p__61030;
var map__61032__$1 = (((((!((map__61032 == null))))?(((((map__61032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61032):map__61032);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61033 = p__61031;
var map__61033__$1 = (((((!((map__61033 == null))))?(((((map__61033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61033):map__61033);
var msg = map__61033__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61033__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61036 = obj_support;
var map__61036__$1 = (((((!((map__61036 == null))))?(((((map__61036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61036):map__61036);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61029_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61029_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61028_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61028_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61038,tid){
var map__61039 = p__61038;
var map__61039__$1 = (((((!((map__61039 == null))))?(((((map__61039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61039):map__61039);
var svc = map__61039__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61045 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61046 = null;
var count__61047 = (0);
var i__61048 = (0);
while(true){
if((i__61048 < count__61047)){
var tid = chunk__61046.cljs$core$IIndexed$_nth$arity$2(null,i__61048);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61052 = seq__61045;
var G__61053 = chunk__61046;
var G__61054 = count__61047;
var G__61055 = (i__61048 + (1));
seq__61045 = G__61052;
chunk__61046 = G__61053;
count__61047 = G__61054;
i__61048 = G__61055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61045);
if(temp__5735__auto__){
var seq__61045__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61045__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61045__$1);
var G__61056 = cljs.core.chunk_rest(seq__61045__$1);
var G__61057 = c__4609__auto__;
var G__61058 = cljs.core.count(c__4609__auto__);
var G__61059 = (0);
seq__61045 = G__61056;
chunk__61046 = G__61057;
count__61047 = G__61058;
i__61048 = G__61059;
continue;
} else {
var tid = cljs.core.first(seq__61045__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61060 = cljs.core.next(seq__61045__$1);
var G__61061 = null;
var G__61062 = (0);
var G__61063 = (0);
seq__61045 = G__61060;
chunk__61046 = G__61061;
count__61047 = G__61062;
i__61048 = G__61063;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61041_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61041_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61042_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61042_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61043_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61043_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61044_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61044_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61049){
var map__61050 = p__61049;
var map__61050__$1 = (((((!((map__61050 == null))))?(((((map__61050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61050):map__61050);
var svc = map__61050__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
