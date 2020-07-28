goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61120,p__61121){
var map__61122 = p__61120;
var map__61122__$1 = (((((!((map__61122 == null))))?(((((map__61122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61122):map__61122);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61123 = p__61121;
var map__61123__$1 = (((((!((map__61123 == null))))?(((((map__61123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61123):map__61123);
var msg = map__61123__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61126,p__61127){
var map__61128 = p__61126;
var map__61128__$1 = (((((!((map__61128 == null))))?(((((map__61128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61128):map__61128);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61129 = p__61127;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var msg = map__61129__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61132 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61134 = null;
var count__61135 = (0);
var i__61136 = (0);
while(true){
if((i__61136 < count__61135)){
var map__61142 = chunk__61134.cljs$core$IIndexed$_nth$arity$2(null,i__61136);
var map__61142__$1 = (((((!((map__61142 == null))))?(((((map__61142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61142):map__61142);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61189 = seq__61132;
var G__61190 = chunk__61134;
var G__61191 = count__61135;
var G__61192 = (i__61136 + (1));
seq__61132 = G__61189;
chunk__61134 = G__61190;
count__61135 = G__61191;
i__61136 = G__61192;
continue;
} else {
var G__61193 = seq__61132;
var G__61194 = chunk__61134;
var G__61195 = count__61135;
var G__61196 = (i__61136 + (1));
seq__61132 = G__61193;
chunk__61134 = G__61194;
count__61135 = G__61195;
i__61136 = G__61196;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61132);
if(temp__5735__auto__){
var seq__61132__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61132__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61132__$1);
var G__61197 = cljs.core.chunk_rest(seq__61132__$1);
var G__61198 = c__4609__auto__;
var G__61199 = cljs.core.count(c__4609__auto__);
var G__61200 = (0);
seq__61132 = G__61197;
chunk__61134 = G__61198;
count__61135 = G__61199;
i__61136 = G__61200;
continue;
} else {
var map__61144 = cljs.core.first(seq__61132__$1);
var map__61144__$1 = (((((!((map__61144 == null))))?(((((map__61144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61144):map__61144);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61201 = cljs.core.next(seq__61132__$1);
var G__61202 = null;
var G__61203 = (0);
var G__61204 = (0);
seq__61132 = G__61201;
chunk__61134 = G__61202;
count__61135 = G__61203;
i__61136 = G__61204;
continue;
} else {
var G__61205 = cljs.core.next(seq__61132__$1);
var G__61206 = null;
var G__61207 = (0);
var G__61208 = (0);
seq__61132 = G__61205;
chunk__61134 = G__61206;
count__61135 = G__61207;
i__61136 = G__61208;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61146,msg){
var map__61147 = p__61146;
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var runtime = map__61147__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61149,key,p__61150){
var map__61151 = p__61149;
var map__61151__$1 = (((((!((map__61151 == null))))?(((((map__61151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61151):map__61151);
var state = map__61151__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61152 = p__61150;
var map__61152__$1 = (((((!((map__61152 == null))))?(((((map__61152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61152):map__61152);
var spec = map__61152__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61155,key,spec){
var map__61156 = p__61155;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61163){
var map__61164 = p__61163;
var map__61164__$1 = (((((!((map__61164 == null))))?(((((map__61164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61164):map__61164);
var runtime = map__61164__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61158_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61158_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61159_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61159_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61160_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61160_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61161_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61161_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61162_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61162_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61166,key){
var map__61167 = p__61166;
var map__61167__$1 = (((((!((map__61167 == null))))?(((((map__61167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61167):map__61167);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61169,p__61170){
var map__61171 = p__61169;
var map__61171__$1 = (((((!((map__61171 == null))))?(((((map__61171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61171):map__61171);
var runtime = map__61171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61172 = p__61170;
var map__61172__$1 = (((((!((map__61172 == null))))?(((((map__61172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61172):map__61172);
var msg = map__61172__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61175 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61177 = null;
var count__61178 = (0);
var i__61179 = (0);
while(true){
if((i__61179 < count__61178)){
var map__61185 = chunk__61177.cljs$core$IIndexed$_nth$arity$2(null,i__61179);
var map__61185__$1 = (((((!((map__61185 == null))))?(((((map__61185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61185):map__61185);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61185__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61209 = seq__61175;
var G__61210 = chunk__61177;
var G__61211 = count__61178;
var G__61212 = (i__61179 + (1));
seq__61175 = G__61209;
chunk__61177 = G__61210;
count__61178 = G__61211;
i__61179 = G__61212;
continue;
} else {
var G__61213 = seq__61175;
var G__61214 = chunk__61177;
var G__61215 = count__61178;
var G__61216 = (i__61179 + (1));
seq__61175 = G__61213;
chunk__61177 = G__61214;
count__61178 = G__61215;
i__61179 = G__61216;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61175);
if(temp__5735__auto__){
var seq__61175__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61175__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61175__$1);
var G__61217 = cljs.core.chunk_rest(seq__61175__$1);
var G__61218 = c__4609__auto__;
var G__61219 = cljs.core.count(c__4609__auto__);
var G__61220 = (0);
seq__61175 = G__61217;
chunk__61177 = G__61218;
count__61178 = G__61219;
i__61179 = G__61220;
continue;
} else {
var map__61187 = cljs.core.first(seq__61175__$1);
var map__61187__$1 = (((((!((map__61187 == null))))?(((((map__61187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61187):map__61187);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61187__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61221 = cljs.core.next(seq__61175__$1);
var G__61222 = null;
var G__61223 = (0);
var G__61224 = (0);
seq__61175 = G__61221;
chunk__61177 = G__61222;
count__61178 = G__61223;
i__61179 = G__61224;
continue;
} else {
var G__61225 = cljs.core.next(seq__61175__$1);
var G__61226 = null;
var G__61227 = (0);
var G__61228 = (0);
seq__61175 = G__61225;
chunk__61177 = G__61226;
count__61178 = G__61227;
i__61179 = G__61228;
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
