goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__89735,p__89736){
var map__89737 = p__89735;
var map__89737__$1 = (((((!((map__89737 == null))))?(((((map__89737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89737):map__89737);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89737__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__89738 = p__89736;
var map__89738__$1 = (((((!((map__89738 == null))))?(((((map__89738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89738):map__89738);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89738__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__89741,p__89742){
var map__89743 = p__89741;
var map__89743__$1 = (((((!((map__89743 == null))))?(((((map__89743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89743):map__89743);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__89744 = p__89742;
var map__89744__$1 = (((((!((map__89744 == null))))?(((((map__89744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89744):map__89744);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89744__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__89749,p__89750){
var map__89751 = p__89749;
var map__89751__$1 = (((((!((map__89751 == null))))?(((((map__89751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89751):map__89751);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89751__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89751__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__89752 = p__89750;
var map__89752__$1 = (((((!((map__89752 == null))))?(((((map__89752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89752):map__89752);
var msg = map__89752__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89752__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__89755 = obj_support;
var map__89755__$1 = (((((!((map__89755 == null))))?(((((map__89755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89755):map__89755);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__89748_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__89748_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__89747_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__89747_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__89757,tid){
var map__89758 = p__89757;
var map__89758__$1 = (((((!((map__89758 == null))))?(((((map__89758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89758):map__89758);
var svc = map__89758__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89758__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__89764 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__89765 = null;
var count__89766 = (0);
var i__89767 = (0);
while(true){
if((i__89767 < count__89766)){
var tid = chunk__89765.cljs$core$IIndexed$_nth$arity$2(null,i__89767);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__89771 = seq__89764;
var G__89772 = chunk__89765;
var G__89773 = count__89766;
var G__89774 = (i__89767 + (1));
seq__89764 = G__89771;
chunk__89765 = G__89772;
count__89766 = G__89773;
i__89767 = G__89774;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__89764);
if(temp__5735__auto__){
var seq__89764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__89764__$1);
var G__89775 = cljs.core.chunk_rest(seq__89764__$1);
var G__89776 = c__4609__auto__;
var G__89777 = cljs.core.count(c__4609__auto__);
var G__89778 = (0);
seq__89764 = G__89775;
chunk__89765 = G__89776;
count__89766 = G__89777;
i__89767 = G__89778;
continue;
} else {
var tid = cljs.core.first(seq__89764__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__89779 = cljs.core.next(seq__89764__$1);
var G__89780 = null;
var G__89781 = (0);
var G__89782 = (0);
seq__89764 = G__89779;
chunk__89765 = G__89780;
count__89766 = G__89781;
i__89767 = G__89782;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__89760_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__89760_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__89761_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__89761_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__89762_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__89762_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__89763_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__89763_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__89768){
var map__89769 = p__89768;
var map__89769__$1 = (((((!((map__89769 == null))))?(((((map__89769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89769):map__89769);
var svc = map__89769__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89769__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89769__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
