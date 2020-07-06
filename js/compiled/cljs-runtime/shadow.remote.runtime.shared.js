goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68051,p__68052){
var map__68053 = p__68051;
var map__68053__$1 = (((((!((map__68053 == null))))?(((((map__68053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68053):map__68053);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68054 = p__68052;
var map__68054__$1 = (((((!((map__68054 == null))))?(((((map__68054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68054):map__68054);
var msg = map__68054__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68057,p__68058){
var map__68059 = p__68057;
var map__68059__$1 = (((((!((map__68059 == null))))?(((((map__68059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68059):map__68059);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68059__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68060 = p__68058;
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var msg = map__68060__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68063 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68065 = null;
var count__68066 = (0);
var i__68067 = (0);
while(true){
if((i__68067 < count__68066)){
var map__68073 = chunk__68065.cljs$core$IIndexed$_nth$arity$2(null,i__68067);
var map__68073__$1 = (((((!((map__68073 == null))))?(((((map__68073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68073):map__68073);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68073__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68120 = seq__68063;
var G__68121 = chunk__68065;
var G__68122 = count__68066;
var G__68123 = (i__68067 + (1));
seq__68063 = G__68120;
chunk__68065 = G__68121;
count__68066 = G__68122;
i__68067 = G__68123;
continue;
} else {
var G__68124 = seq__68063;
var G__68125 = chunk__68065;
var G__68126 = count__68066;
var G__68127 = (i__68067 + (1));
seq__68063 = G__68124;
chunk__68065 = G__68125;
count__68066 = G__68126;
i__68067 = G__68127;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68063);
if(temp__5735__auto__){
var seq__68063__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68063__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68063__$1);
var G__68128 = cljs.core.chunk_rest(seq__68063__$1);
var G__68129 = c__4609__auto__;
var G__68130 = cljs.core.count(c__4609__auto__);
var G__68131 = (0);
seq__68063 = G__68128;
chunk__68065 = G__68129;
count__68066 = G__68130;
i__68067 = G__68131;
continue;
} else {
var map__68075 = cljs.core.first(seq__68063__$1);
var map__68075__$1 = (((((!((map__68075 == null))))?(((((map__68075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68075):map__68075);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68132 = cljs.core.next(seq__68063__$1);
var G__68133 = null;
var G__68134 = (0);
var G__68135 = (0);
seq__68063 = G__68132;
chunk__68065 = G__68133;
count__68066 = G__68134;
i__68067 = G__68135;
continue;
} else {
var G__68136 = cljs.core.next(seq__68063__$1);
var G__68137 = null;
var G__68138 = (0);
var G__68139 = (0);
seq__68063 = G__68136;
chunk__68065 = G__68137;
count__68066 = G__68138;
i__68067 = G__68139;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68077,msg){
var map__68078 = p__68077;
var map__68078__$1 = (((((!((map__68078 == null))))?(((((map__68078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68078):map__68078);
var runtime = map__68078__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68080,key,p__68081){
var map__68082 = p__68080;
var map__68082__$1 = (((((!((map__68082 == null))))?(((((map__68082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68082):map__68082);
var state = map__68082__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68082__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68083 = p__68081;
var map__68083__$1 = (((((!((map__68083 == null))))?(((((map__68083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68083):map__68083);
var spec = map__68083__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68083__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68086,key,spec){
var map__68087 = p__68086;
var map__68087__$1 = (((((!((map__68087 == null))))?(((((map__68087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68087):map__68087);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68087__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68094){
var map__68095 = p__68094;
var map__68095__$1 = (((((!((map__68095 == null))))?(((((map__68095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68095):map__68095);
var runtime = map__68095__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68089_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68089_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68090_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68090_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68091_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68091_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68092_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68092_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68093_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68093_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68097,key){
var map__68098 = p__68097;
var map__68098__$1 = (((((!((map__68098 == null))))?(((((map__68098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68098):map__68098);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68100,p__68101){
var map__68102 = p__68100;
var map__68102__$1 = (((((!((map__68102 == null))))?(((((map__68102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68102):map__68102);
var runtime = map__68102__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68102__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68103 = p__68101;
var map__68103__$1 = (((((!((map__68103 == null))))?(((((map__68103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68103):map__68103);
var msg = map__68103__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68103__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68106 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68108 = null;
var count__68109 = (0);
var i__68110 = (0);
while(true){
if((i__68110 < count__68109)){
var map__68116 = chunk__68108.cljs$core$IIndexed$_nth$arity$2(null,i__68110);
var map__68116__$1 = (((((!((map__68116 == null))))?(((((map__68116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68116):map__68116);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68116__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68140 = seq__68106;
var G__68141 = chunk__68108;
var G__68142 = count__68109;
var G__68143 = (i__68110 + (1));
seq__68106 = G__68140;
chunk__68108 = G__68141;
count__68109 = G__68142;
i__68110 = G__68143;
continue;
} else {
var G__68144 = seq__68106;
var G__68145 = chunk__68108;
var G__68146 = count__68109;
var G__68147 = (i__68110 + (1));
seq__68106 = G__68144;
chunk__68108 = G__68145;
count__68109 = G__68146;
i__68110 = G__68147;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68106);
if(temp__5735__auto__){
var seq__68106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68106__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68106__$1);
var G__68148 = cljs.core.chunk_rest(seq__68106__$1);
var G__68149 = c__4609__auto__;
var G__68150 = cljs.core.count(c__4609__auto__);
var G__68151 = (0);
seq__68106 = G__68148;
chunk__68108 = G__68149;
count__68109 = G__68150;
i__68110 = G__68151;
continue;
} else {
var map__68118 = cljs.core.first(seq__68106__$1);
var map__68118__$1 = (((((!((map__68118 == null))))?(((((map__68118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68118):map__68118);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68118__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68152 = cljs.core.next(seq__68106__$1);
var G__68153 = null;
var G__68154 = (0);
var G__68155 = (0);
seq__68106 = G__68152;
chunk__68108 = G__68153;
count__68109 = G__68154;
i__68110 = G__68155;
continue;
} else {
var G__68156 = cljs.core.next(seq__68106__$1);
var G__68157 = null;
var G__68158 = (0);
var G__68159 = (0);
seq__68106 = G__68156;
chunk__68108 = G__68157;
count__68109 = G__68158;
i__68110 = G__68159;
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
