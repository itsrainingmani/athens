goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__59933,p__59934){
var map__59935 = p__59933;
var map__59935__$1 = (((((!((map__59935 == null))))?(((((map__59935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59935):map__59935);
var svc = map__59935__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59936 = p__59934;
var map__59936__$1 = (((((!((map__59936 == null))))?(((((map__59936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59936):map__59936);
var msg = map__59936__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59936__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59936__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59936__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59936__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,tid,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__59939,p__59940){
var map__59941 = p__59939;
var map__59941__$1 = (((((!((map__59941 == null))))?(((((map__59941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59941):map__59941);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__59942 = p__59940;
var map__59942__$1 = (((((!((map__59942 == null))))?(((((map__59942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59942):map__59942);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__59945,p__59946){
var map__59947 = p__59945;
var map__59947__$1 = (((((!((map__59947 == null))))?(((((map__59947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59947):map__59947);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59947__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59948 = p__59946;
var map__59948__$1 = (((((!((map__59948 == null))))?(((((map__59948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59948):map__59948);
var msg = map__59948__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59948__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__59951,tid){
var map__59952 = p__59951;
var map__59952__$1 = (((((!((map__59952 == null))))?(((((map__59952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59952):map__59952);
var svc = map__59952__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59952__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__59958 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__59959 = null;
var count__59960 = (0);
var i__59961 = (0);
while(true){
if((i__59961 < count__59960)){
var vec__59968 = chunk__59959.cljs$core$IIndexed$_nth$arity$2(null,i__59961);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59977 = seq__59958;
var G__59978 = chunk__59959;
var G__59979 = count__59960;
var G__59980 = (i__59961 + (1));
seq__59958 = G__59977;
chunk__59959 = G__59978;
count__59960 = G__59979;
i__59961 = G__59980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59958);
if(temp__5735__auto__){
var seq__59958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59958__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59958__$1);
var G__59981 = cljs.core.chunk_rest(seq__59958__$1);
var G__59982 = c__4556__auto__;
var G__59983 = cljs.core.count(c__4556__auto__);
var G__59984 = (0);
seq__59958 = G__59981;
chunk__59959 = G__59982;
count__59960 = G__59983;
i__59961 = G__59984;
continue;
} else {
var vec__59971 = cljs.core.first(seq__59958__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59985 = cljs.core.next(seq__59958__$1);
var G__59986 = null;
var G__59987 = (0);
var G__59988 = (0);
seq__59958 = G__59985;
chunk__59959 = G__59986;
count__59960 = G__59987;
i__59961 = G__59988;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__59954_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__59954_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__59955_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__59955_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__59956_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__59956_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__59957_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__59957_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59974){
var map__59975 = p__59974;
var map__59975__$1 = (((((!((map__59975 == null))))?(((((map__59975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59975):map__59975);
var svc = map__59975__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59975__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59975__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
