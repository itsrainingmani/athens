goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61137,p__61138){
var map__61139 = p__61137;
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61140 = p__61138;
var map__61140__$1 = (((((!((map__61140 == null))))?(((((map__61140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61140):map__61140);
var msg = map__61140__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61140__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61143,p__61144){
var map__61145 = p__61143;
var map__61145__$1 = (((((!((map__61145 == null))))?(((((map__61145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61145):map__61145);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61146 = p__61144;
var map__61146__$1 = (((((!((map__61146 == null))))?(((((map__61146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61146):map__61146);
var msg = map__61146__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61149 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61151 = null;
var count__61152 = (0);
var i__61153 = (0);
while(true){
if((i__61153 < count__61152)){
var map__61159 = chunk__61151.cljs$core$IIndexed$_nth$arity$2(null,i__61153);
var map__61159__$1 = (((((!((map__61159 == null))))?(((((map__61159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61159):map__61159);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61206 = seq__61149;
var G__61207 = chunk__61151;
var G__61208 = count__61152;
var G__61209 = (i__61153 + (1));
seq__61149 = G__61206;
chunk__61151 = G__61207;
count__61152 = G__61208;
i__61153 = G__61209;
continue;
} else {
var G__61210 = seq__61149;
var G__61211 = chunk__61151;
var G__61212 = count__61152;
var G__61213 = (i__61153 + (1));
seq__61149 = G__61210;
chunk__61151 = G__61211;
count__61152 = G__61212;
i__61153 = G__61213;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61149);
if(temp__5735__auto__){
var seq__61149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61149__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61149__$1);
var G__61214 = cljs.core.chunk_rest(seq__61149__$1);
var G__61215 = c__4609__auto__;
var G__61216 = cljs.core.count(c__4609__auto__);
var G__61217 = (0);
seq__61149 = G__61214;
chunk__61151 = G__61215;
count__61152 = G__61216;
i__61153 = G__61217;
continue;
} else {
var map__61161 = cljs.core.first(seq__61149__$1);
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61218 = cljs.core.next(seq__61149__$1);
var G__61219 = null;
var G__61220 = (0);
var G__61221 = (0);
seq__61149 = G__61218;
chunk__61151 = G__61219;
count__61152 = G__61220;
i__61153 = G__61221;
continue;
} else {
var G__61222 = cljs.core.next(seq__61149__$1);
var G__61223 = null;
var G__61224 = (0);
var G__61225 = (0);
seq__61149 = G__61222;
chunk__61151 = G__61223;
count__61152 = G__61224;
i__61153 = G__61225;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61163,msg){
var map__61164 = p__61163;
var map__61164__$1 = (((((!((map__61164 == null))))?(((((map__61164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61164):map__61164);
var runtime = map__61164__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61166,key,p__61167){
var map__61168 = p__61166;
var map__61168__$1 = (((((!((map__61168 == null))))?(((((map__61168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61168):map__61168);
var state = map__61168__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61169 = p__61167;
var map__61169__$1 = (((((!((map__61169 == null))))?(((((map__61169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61169):map__61169);
var spec = map__61169__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61169__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61172,key,spec){
var map__61173 = p__61172;
var map__61173__$1 = (((((!((map__61173 == null))))?(((((map__61173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61173):map__61173);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61180){
var map__61181 = p__61180;
var map__61181__$1 = (((((!((map__61181 == null))))?(((((map__61181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61181):map__61181);
var runtime = map__61181__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61181__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61175_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61175_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61176_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61176_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61177_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61177_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61178_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61178_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61179_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61179_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61183,key){
var map__61184 = p__61183;
var map__61184__$1 = (((((!((map__61184 == null))))?(((((map__61184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61184):map__61184);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61186,p__61187){
var map__61188 = p__61186;
var map__61188__$1 = (((((!((map__61188 == null))))?(((((map__61188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61188):map__61188);
var runtime = map__61188__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61189 = p__61187;
var map__61189__$1 = (((((!((map__61189 == null))))?(((((map__61189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61189):map__61189);
var msg = map__61189__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61189__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61192 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61194 = null;
var count__61195 = (0);
var i__61196 = (0);
while(true){
if((i__61196 < count__61195)){
var map__61202 = chunk__61194.cljs$core$IIndexed$_nth$arity$2(null,i__61196);
var map__61202__$1 = (((((!((map__61202 == null))))?(((((map__61202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61202):map__61202);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61202__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61226 = seq__61192;
var G__61227 = chunk__61194;
var G__61228 = count__61195;
var G__61229 = (i__61196 + (1));
seq__61192 = G__61226;
chunk__61194 = G__61227;
count__61195 = G__61228;
i__61196 = G__61229;
continue;
} else {
var G__61230 = seq__61192;
var G__61231 = chunk__61194;
var G__61232 = count__61195;
var G__61233 = (i__61196 + (1));
seq__61192 = G__61230;
chunk__61194 = G__61231;
count__61195 = G__61232;
i__61196 = G__61233;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61192);
if(temp__5735__auto__){
var seq__61192__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61192__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61192__$1);
var G__61234 = cljs.core.chunk_rest(seq__61192__$1);
var G__61235 = c__4609__auto__;
var G__61236 = cljs.core.count(c__4609__auto__);
var G__61237 = (0);
seq__61192 = G__61234;
chunk__61194 = G__61235;
count__61195 = G__61236;
i__61196 = G__61237;
continue;
} else {
var map__61204 = cljs.core.first(seq__61192__$1);
var map__61204__$1 = (((((!((map__61204 == null))))?(((((map__61204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61204):map__61204);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61204__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61238 = cljs.core.next(seq__61192__$1);
var G__61239 = null;
var G__61240 = (0);
var G__61241 = (0);
seq__61192 = G__61238;
chunk__61194 = G__61239;
count__61195 = G__61240;
i__61196 = G__61241;
continue;
} else {
var G__61242 = cljs.core.next(seq__61192__$1);
var G__61243 = null;
var G__61244 = (0);
var G__61245 = (0);
seq__61192 = G__61242;
chunk__61194 = G__61243;
count__61195 = G__61244;
i__61196 = G__61245;
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
