goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60789,p__60790){
var map__60791 = p__60789;
var map__60791__$1 = (((((!((map__60791 == null))))?(((((map__60791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60791):map__60791);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60792 = p__60790;
var map__60792__$1 = (((((!((map__60792 == null))))?(((((map__60792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60792):map__60792);
var msg = map__60792__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60795,p__60796){
var map__60797 = p__60795;
var map__60797__$1 = (((((!((map__60797 == null))))?(((((map__60797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60797):map__60797);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60798 = p__60796;
var map__60798__$1 = (((((!((map__60798 == null))))?(((((map__60798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60798):map__60798);
var msg = map__60798__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60801 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60803 = null;
var count__60804 = (0);
var i__60805 = (0);
while(true){
if((i__60805 < count__60804)){
var map__60811 = chunk__60803.cljs$core$IIndexed$_nth$arity$2(null,i__60805);
var map__60811__$1 = (((((!((map__60811 == null))))?(((((map__60811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60811):map__60811);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60811__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60858 = seq__60801;
var G__60859 = chunk__60803;
var G__60860 = count__60804;
var G__60861 = (i__60805 + (1));
seq__60801 = G__60858;
chunk__60803 = G__60859;
count__60804 = G__60860;
i__60805 = G__60861;
continue;
} else {
var G__60862 = seq__60801;
var G__60863 = chunk__60803;
var G__60864 = count__60804;
var G__60865 = (i__60805 + (1));
seq__60801 = G__60862;
chunk__60803 = G__60863;
count__60804 = G__60864;
i__60805 = G__60865;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60801);
if(temp__5735__auto__){
var seq__60801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60801__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60801__$1);
var G__60866 = cljs.core.chunk_rest(seq__60801__$1);
var G__60867 = c__4609__auto__;
var G__60868 = cljs.core.count(c__4609__auto__);
var G__60869 = (0);
seq__60801 = G__60866;
chunk__60803 = G__60867;
count__60804 = G__60868;
i__60805 = G__60869;
continue;
} else {
var map__60813 = cljs.core.first(seq__60801__$1);
var map__60813__$1 = (((((!((map__60813 == null))))?(((((map__60813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60813):map__60813);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60870 = cljs.core.next(seq__60801__$1);
var G__60871 = null;
var G__60872 = (0);
var G__60873 = (0);
seq__60801 = G__60870;
chunk__60803 = G__60871;
count__60804 = G__60872;
i__60805 = G__60873;
continue;
} else {
var G__60874 = cljs.core.next(seq__60801__$1);
var G__60875 = null;
var G__60876 = (0);
var G__60877 = (0);
seq__60801 = G__60874;
chunk__60803 = G__60875;
count__60804 = G__60876;
i__60805 = G__60877;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60815,msg){
var map__60816 = p__60815;
var map__60816__$1 = (((((!((map__60816 == null))))?(((((map__60816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60816):map__60816);
var runtime = map__60816__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60818,key,p__60819){
var map__60820 = p__60818;
var map__60820__$1 = (((((!((map__60820 == null))))?(((((map__60820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60820):map__60820);
var state = map__60820__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60821 = p__60819;
var map__60821__$1 = (((((!((map__60821 == null))))?(((((map__60821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60821):map__60821);
var spec = map__60821__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60824,key,spec){
var map__60825 = p__60824;
var map__60825__$1 = (((((!((map__60825 == null))))?(((((map__60825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60825):map__60825);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60832){
var map__60833 = p__60832;
var map__60833__$1 = (((((!((map__60833 == null))))?(((((map__60833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60833):map__60833);
var runtime = map__60833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60827_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60827_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60828_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60828_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60829_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60829_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60830_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60830_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60831_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60831_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60835,key){
var map__60836 = p__60835;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60838,p__60839){
var map__60840 = p__60838;
var map__60840__$1 = (((((!((map__60840 == null))))?(((((map__60840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60840):map__60840);
var runtime = map__60840__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60840__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60841 = p__60839;
var map__60841__$1 = (((((!((map__60841 == null))))?(((((map__60841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60841):map__60841);
var msg = map__60841__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60844 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60846 = null;
var count__60847 = (0);
var i__60848 = (0);
while(true){
if((i__60848 < count__60847)){
var map__60854 = chunk__60846.cljs$core$IIndexed$_nth$arity$2(null,i__60848);
var map__60854__$1 = (((((!((map__60854 == null))))?(((((map__60854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60854):map__60854);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60878 = seq__60844;
var G__60879 = chunk__60846;
var G__60880 = count__60847;
var G__60881 = (i__60848 + (1));
seq__60844 = G__60878;
chunk__60846 = G__60879;
count__60847 = G__60880;
i__60848 = G__60881;
continue;
} else {
var G__60882 = seq__60844;
var G__60883 = chunk__60846;
var G__60884 = count__60847;
var G__60885 = (i__60848 + (1));
seq__60844 = G__60882;
chunk__60846 = G__60883;
count__60847 = G__60884;
i__60848 = G__60885;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60844);
if(temp__5735__auto__){
var seq__60844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60844__$1);
var G__60886 = cljs.core.chunk_rest(seq__60844__$1);
var G__60887 = c__4609__auto__;
var G__60888 = cljs.core.count(c__4609__auto__);
var G__60889 = (0);
seq__60844 = G__60886;
chunk__60846 = G__60887;
count__60847 = G__60888;
i__60848 = G__60889;
continue;
} else {
var map__60856 = cljs.core.first(seq__60844__$1);
var map__60856__$1 = (((((!((map__60856 == null))))?(((((map__60856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60856):map__60856);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60856__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60890 = cljs.core.next(seq__60844__$1);
var G__60891 = null;
var G__60892 = (0);
var G__60893 = (0);
seq__60844 = G__60890;
chunk__60846 = G__60891;
count__60847 = G__60892;
i__60848 = G__60893;
continue;
} else {
var G__60894 = cljs.core.next(seq__60844__$1);
var G__60895 = null;
var G__60896 = (0);
var G__60897 = (0);
seq__60844 = G__60894;
chunk__60846 = G__60895;
count__60847 = G__60896;
i__60848 = G__60897;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
