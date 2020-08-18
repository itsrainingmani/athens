goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__59986,p__59987){
var map__59988 = p__59986;
var map__59988__$1 = (((((!((map__59988 == null))))?(((((map__59988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59988):map__59988);
var svc = map__59988__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59988__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59989 = p__59987;
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var msg = map__59989__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59989__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,tid,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__59992,p__59993){
var map__59994 = p__59992;
var map__59994__$1 = (((((!((map__59994 == null))))?(((((map__59994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59994):map__59994);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__59995 = p__59993;
var map__59995__$1 = (((((!((map__59995 == null))))?(((((map__59995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59995):map__59995);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__59998,p__59999){
var map__60000 = p__59998;
var map__60000__$1 = (((((!((map__60000 == null))))?(((((map__60000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60000):map__60000);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60000__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60000__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60001 = p__59999;
var map__60001__$1 = (((((!((map__60001 == null))))?(((((map__60001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60001):map__60001);
var msg = map__60001__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60001__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60004,tid){
var map__60005 = p__60004;
var map__60005__$1 = (((((!((map__60005 == null))))?(((((map__60005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60005):map__60005);
var svc = map__60005__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60011 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60012 = null;
var count__60013 = (0);
var i__60014 = (0);
while(true){
if((i__60014 < count__60013)){
var vec__60021 = chunk__60012.cljs$core$IIndexed$_nth$arity$2(null,i__60014);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60021,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60021,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60030 = seq__60011;
var G__60031 = chunk__60012;
var G__60032 = count__60013;
var G__60033 = (i__60014 + (1));
seq__60011 = G__60030;
chunk__60012 = G__60031;
count__60013 = G__60032;
i__60014 = G__60033;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60011);
if(temp__5735__auto__){
var seq__60011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60011__$1);
var G__60034 = cljs.core.chunk_rest(seq__60011__$1);
var G__60035 = c__4556__auto__;
var G__60036 = cljs.core.count(c__4556__auto__);
var G__60037 = (0);
seq__60011 = G__60034;
chunk__60012 = G__60035;
count__60013 = G__60036;
i__60014 = G__60037;
continue;
} else {
var vec__60024 = cljs.core.first(seq__60011__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60024,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60024,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60038 = cljs.core.next(seq__60011__$1);
var G__60039 = null;
var G__60040 = (0);
var G__60041 = (0);
seq__60011 = G__60038;
chunk__60012 = G__60039;
count__60013 = G__60040;
i__60014 = G__60041;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60007_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60007_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60008_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60008_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60009_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60009_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60010_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60010_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60027){
var map__60028 = p__60027;
var map__60028__$1 = (((((!((map__60028 == null))))?(((((map__60028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60028):map__60028);
var svc = map__60028__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60028__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60028__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
