goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61134,p__61135){
var map__61136 = p__61134;
var map__61136__$1 = (((((!((map__61136 == null))))?(((((map__61136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61136):map__61136);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61137 = p__61135;
var map__61137__$1 = (((((!((map__61137 == null))))?(((((map__61137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61137):map__61137);
var msg = map__61137__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61140,p__61141){
var map__61142 = p__61140;
var map__61142__$1 = (((((!((map__61142 == null))))?(((((map__61142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61142):map__61142);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61143 = p__61141;
var map__61143__$1 = (((((!((map__61143 == null))))?(((((map__61143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61143):map__61143);
var msg = map__61143__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61146 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61148 = null;
var count__61149 = (0);
var i__61150 = (0);
while(true){
if((i__61150 < count__61149)){
var map__61156 = chunk__61148.cljs$core$IIndexed$_nth$arity$2(null,i__61150);
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61203 = seq__61146;
var G__61204 = chunk__61148;
var G__61205 = count__61149;
var G__61206 = (i__61150 + (1));
seq__61146 = G__61203;
chunk__61148 = G__61204;
count__61149 = G__61205;
i__61150 = G__61206;
continue;
} else {
var G__61207 = seq__61146;
var G__61208 = chunk__61148;
var G__61209 = count__61149;
var G__61210 = (i__61150 + (1));
seq__61146 = G__61207;
chunk__61148 = G__61208;
count__61149 = G__61209;
i__61150 = G__61210;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61146);
if(temp__5735__auto__){
var seq__61146__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61146__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61146__$1);
var G__61211 = cljs.core.chunk_rest(seq__61146__$1);
var G__61212 = c__4609__auto__;
var G__61213 = cljs.core.count(c__4609__auto__);
var G__61214 = (0);
seq__61146 = G__61211;
chunk__61148 = G__61212;
count__61149 = G__61213;
i__61150 = G__61214;
continue;
} else {
var map__61158 = cljs.core.first(seq__61146__$1);
var map__61158__$1 = (((((!((map__61158 == null))))?(((((map__61158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61158):map__61158);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61215 = cljs.core.next(seq__61146__$1);
var G__61216 = null;
var G__61217 = (0);
var G__61218 = (0);
seq__61146 = G__61215;
chunk__61148 = G__61216;
count__61149 = G__61217;
i__61150 = G__61218;
continue;
} else {
var G__61219 = cljs.core.next(seq__61146__$1);
var G__61220 = null;
var G__61221 = (0);
var G__61222 = (0);
seq__61146 = G__61219;
chunk__61148 = G__61220;
count__61149 = G__61221;
i__61150 = G__61222;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61160,msg){
var map__61161 = p__61160;
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var runtime = map__61161__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61163,key,p__61164){
var map__61165 = p__61163;
var map__61165__$1 = (((((!((map__61165 == null))))?(((((map__61165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61165):map__61165);
var state = map__61165__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61166 = p__61164;
var map__61166__$1 = (((((!((map__61166 == null))))?(((((map__61166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61166):map__61166);
var spec = map__61166__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61166__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61169,key,spec){
var map__61170 = p__61169;
var map__61170__$1 = (((((!((map__61170 == null))))?(((((map__61170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61170):map__61170);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61177){
var map__61178 = p__61177;
var map__61178__$1 = (((((!((map__61178 == null))))?(((((map__61178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61178):map__61178);
var runtime = map__61178__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61178__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61172_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61172_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61173_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61173_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61174_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61174_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61175_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61175_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61176_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61176_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61180,key){
var map__61181 = p__61180;
var map__61181__$1 = (((((!((map__61181 == null))))?(((((map__61181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61181):map__61181);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61181__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61183,p__61184){
var map__61185 = p__61183;
var map__61185__$1 = (((((!((map__61185 == null))))?(((((map__61185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61185):map__61185);
var runtime = map__61185__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61185__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61186 = p__61184;
var map__61186__$1 = (((((!((map__61186 == null))))?(((((map__61186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61186):map__61186);
var msg = map__61186__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61186__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61189 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61191 = null;
var count__61192 = (0);
var i__61193 = (0);
while(true){
if((i__61193 < count__61192)){
var map__61199 = chunk__61191.cljs$core$IIndexed$_nth$arity$2(null,i__61193);
var map__61199__$1 = (((((!((map__61199 == null))))?(((((map__61199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61199):map__61199);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61199__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61223 = seq__61189;
var G__61224 = chunk__61191;
var G__61225 = count__61192;
var G__61226 = (i__61193 + (1));
seq__61189 = G__61223;
chunk__61191 = G__61224;
count__61192 = G__61225;
i__61193 = G__61226;
continue;
} else {
var G__61227 = seq__61189;
var G__61228 = chunk__61191;
var G__61229 = count__61192;
var G__61230 = (i__61193 + (1));
seq__61189 = G__61227;
chunk__61191 = G__61228;
count__61192 = G__61229;
i__61193 = G__61230;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61189);
if(temp__5735__auto__){
var seq__61189__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61189__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61189__$1);
var G__61231 = cljs.core.chunk_rest(seq__61189__$1);
var G__61232 = c__4609__auto__;
var G__61233 = cljs.core.count(c__4609__auto__);
var G__61234 = (0);
seq__61189 = G__61231;
chunk__61191 = G__61232;
count__61192 = G__61233;
i__61193 = G__61234;
continue;
} else {
var map__61201 = cljs.core.first(seq__61189__$1);
var map__61201__$1 = (((((!((map__61201 == null))))?(((((map__61201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61201):map__61201);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61201__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61235 = cljs.core.next(seq__61189__$1);
var G__61236 = null;
var G__61237 = (0);
var G__61238 = (0);
seq__61189 = G__61235;
chunk__61191 = G__61236;
count__61192 = G__61237;
i__61193 = G__61238;
continue;
} else {
var G__61239 = cljs.core.next(seq__61189__$1);
var G__61240 = null;
var G__61241 = (0);
var G__61242 = (0);
seq__61189 = G__61239;
chunk__61191 = G__61240;
count__61192 = G__61241;
i__61193 = G__61242;
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
