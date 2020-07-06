goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60771,p__60772){
var map__60773 = p__60771;
var map__60773__$1 = (((((!((map__60773 == null))))?(((((map__60773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60773):map__60773);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60774 = p__60772;
var map__60774__$1 = (((((!((map__60774 == null))))?(((((map__60774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60774):map__60774);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60774__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60777,p__60778){
var map__60779 = p__60777;
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60780 = p__60778;
var map__60780__$1 = (((((!((map__60780 == null))))?(((((map__60780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60780):map__60780);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60785,p__60786){
var map__60787 = p__60785;
var map__60787__$1 = (((((!((map__60787 == null))))?(((((map__60787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60787):map__60787);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60788 = p__60786;
var map__60788__$1 = (((((!((map__60788 == null))))?(((((map__60788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60788):map__60788);
var msg = map__60788__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60788__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60792 = obj_support;
var map__60792__$1 = (((((!((map__60792 == null))))?(((((map__60792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60792):map__60792);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60784_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60784_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60783_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60783_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60799,tid){
var map__60800 = p__60799;
var map__60800__$1 = (((((!((map__60800 == null))))?(((((map__60800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60800):map__60800);
var svc = map__60800__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60812 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60813 = null;
var count__60814 = (0);
var i__60815 = (0);
while(true){
if((i__60815 < count__60814)){
var tid = chunk__60813.cljs$core$IIndexed$_nth$arity$2(null,i__60815);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60837 = seq__60812;
var G__60838 = chunk__60813;
var G__60839 = count__60814;
var G__60840 = (i__60815 + (1));
seq__60812 = G__60837;
chunk__60813 = G__60838;
count__60814 = G__60839;
i__60815 = G__60840;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60812);
if(temp__5735__auto__){
var seq__60812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60812__$1);
var G__60841 = cljs.core.chunk_rest(seq__60812__$1);
var G__60842 = c__4609__auto__;
var G__60843 = cljs.core.count(c__4609__auto__);
var G__60844 = (0);
seq__60812 = G__60841;
chunk__60813 = G__60842;
count__60814 = G__60843;
i__60815 = G__60844;
continue;
} else {
var tid = cljs.core.first(seq__60812__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60845 = cljs.core.next(seq__60812__$1);
var G__60846 = null;
var G__60847 = (0);
var G__60848 = (0);
seq__60812 = G__60845;
chunk__60813 = G__60846;
count__60814 = G__60847;
i__60815 = G__60848;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60808_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60808_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60809_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60809_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60810_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60810_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60811_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60811_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60822){
var map__60823 = p__60822;
var map__60823__$1 = (((((!((map__60823 == null))))?(((((map__60823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60823):map__60823);
var svc = map__60823__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
