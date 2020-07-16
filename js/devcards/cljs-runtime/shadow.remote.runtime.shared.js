goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61111,p__61112){
var map__61113 = p__61111;
var map__61113__$1 = (((((!((map__61113 == null))))?(((((map__61113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61113):map__61113);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61113__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61114 = p__61112;
var map__61114__$1 = (((((!((map__61114 == null))))?(((((map__61114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61114):map__61114);
var msg = map__61114__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61114__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61117,p__61118){
var map__61119 = p__61117;
var map__61119__$1 = (((((!((map__61119 == null))))?(((((map__61119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61119):map__61119);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61120 = p__61118;
var map__61120__$1 = (((((!((map__61120 == null))))?(((((map__61120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61120):map__61120);
var msg = map__61120__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61120__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61123 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61125 = null;
var count__61126 = (0);
var i__61127 = (0);
while(true){
if((i__61127 < count__61126)){
var map__61133 = chunk__61125.cljs$core$IIndexed$_nth$arity$2(null,i__61127);
var map__61133__$1 = (((((!((map__61133 == null))))?(((((map__61133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61133):map__61133);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61133__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61180 = seq__61123;
var G__61181 = chunk__61125;
var G__61182 = count__61126;
var G__61183 = (i__61127 + (1));
seq__61123 = G__61180;
chunk__61125 = G__61181;
count__61126 = G__61182;
i__61127 = G__61183;
continue;
} else {
var G__61184 = seq__61123;
var G__61185 = chunk__61125;
var G__61186 = count__61126;
var G__61187 = (i__61127 + (1));
seq__61123 = G__61184;
chunk__61125 = G__61185;
count__61126 = G__61186;
i__61127 = G__61187;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61123);
if(temp__5735__auto__){
var seq__61123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61123__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61123__$1);
var G__61188 = cljs.core.chunk_rest(seq__61123__$1);
var G__61189 = c__4609__auto__;
var G__61190 = cljs.core.count(c__4609__auto__);
var G__61191 = (0);
seq__61123 = G__61188;
chunk__61125 = G__61189;
count__61126 = G__61190;
i__61127 = G__61191;
continue;
} else {
var map__61135 = cljs.core.first(seq__61123__$1);
var map__61135__$1 = (((((!((map__61135 == null))))?(((((map__61135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61135):map__61135);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61192 = cljs.core.next(seq__61123__$1);
var G__61193 = null;
var G__61194 = (0);
var G__61195 = (0);
seq__61123 = G__61192;
chunk__61125 = G__61193;
count__61126 = G__61194;
i__61127 = G__61195;
continue;
} else {
var G__61196 = cljs.core.next(seq__61123__$1);
var G__61197 = null;
var G__61198 = (0);
var G__61199 = (0);
seq__61123 = G__61196;
chunk__61125 = G__61197;
count__61126 = G__61198;
i__61127 = G__61199;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61137,msg){
var map__61138 = p__61137;
var map__61138__$1 = (((((!((map__61138 == null))))?(((((map__61138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61138):map__61138);
var runtime = map__61138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61140,key,p__61141){
var map__61142 = p__61140;
var map__61142__$1 = (((((!((map__61142 == null))))?(((((map__61142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61142):map__61142);
var state = map__61142__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61143 = p__61141;
var map__61143__$1 = (((((!((map__61143 == null))))?(((((map__61143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61143):map__61143);
var spec = map__61143__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61146,key,spec){
var map__61147 = p__61146;
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61154){
var map__61155 = p__61154;
var map__61155__$1 = (((((!((map__61155 == null))))?(((((map__61155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61155):map__61155);
var runtime = map__61155__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61149_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61149_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61150_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61151_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61151_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61152_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61152_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61153_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61153_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61157,key){
var map__61158 = p__61157;
var map__61158__$1 = (((((!((map__61158 == null))))?(((((map__61158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61158):map__61158);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61160,p__61161){
var map__61162 = p__61160;
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var runtime = map__61162__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61163 = p__61161;
var map__61163__$1 = (((((!((map__61163 == null))))?(((((map__61163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61163):map__61163);
var msg = map__61163__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61163__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61166 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61168 = null;
var count__61169 = (0);
var i__61170 = (0);
while(true){
if((i__61170 < count__61169)){
var map__61176 = chunk__61168.cljs$core$IIndexed$_nth$arity$2(null,i__61170);
var map__61176__$1 = (((((!((map__61176 == null))))?(((((map__61176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61176):map__61176);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61200 = seq__61166;
var G__61201 = chunk__61168;
var G__61202 = count__61169;
var G__61203 = (i__61170 + (1));
seq__61166 = G__61200;
chunk__61168 = G__61201;
count__61169 = G__61202;
i__61170 = G__61203;
continue;
} else {
var G__61204 = seq__61166;
var G__61205 = chunk__61168;
var G__61206 = count__61169;
var G__61207 = (i__61170 + (1));
seq__61166 = G__61204;
chunk__61168 = G__61205;
count__61169 = G__61206;
i__61170 = G__61207;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61166);
if(temp__5735__auto__){
var seq__61166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61166__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61166__$1);
var G__61208 = cljs.core.chunk_rest(seq__61166__$1);
var G__61209 = c__4609__auto__;
var G__61210 = cljs.core.count(c__4609__auto__);
var G__61211 = (0);
seq__61166 = G__61208;
chunk__61168 = G__61209;
count__61169 = G__61210;
i__61170 = G__61211;
continue;
} else {
var map__61178 = cljs.core.first(seq__61166__$1);
var map__61178__$1 = (((((!((map__61178 == null))))?(((((map__61178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61178):map__61178);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61178__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61212 = cljs.core.next(seq__61166__$1);
var G__61213 = null;
var G__61214 = (0);
var G__61215 = (0);
seq__61166 = G__61212;
chunk__61168 = G__61213;
count__61169 = G__61214;
i__61170 = G__61215;
continue;
} else {
var G__61216 = cljs.core.next(seq__61166__$1);
var G__61217 = null;
var G__61218 = (0);
var G__61219 = (0);
seq__61166 = G__61216;
chunk__61168 = G__61217;
count__61169 = G__61218;
i__61170 = G__61219;
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
