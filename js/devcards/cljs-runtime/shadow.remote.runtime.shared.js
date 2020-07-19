goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61108,p__61109){
var map__61110 = p__61108;
var map__61110__$1 = (((((!((map__61110 == null))))?(((((map__61110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61110):map__61110);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61110__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61111 = p__61109;
var map__61111__$1 = (((((!((map__61111 == null))))?(((((map__61111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61111):map__61111);
var msg = map__61111__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61111__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61114,p__61115){
var map__61116 = p__61114;
var map__61116__$1 = (((((!((map__61116 == null))))?(((((map__61116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61116):map__61116);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61117 = p__61115;
var map__61117__$1 = (((((!((map__61117 == null))))?(((((map__61117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61117):map__61117);
var msg = map__61117__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61117__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61120 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61122 = null;
var count__61123 = (0);
var i__61124 = (0);
while(true){
if((i__61124 < count__61123)){
var map__61130 = chunk__61122.cljs$core$IIndexed$_nth$arity$2(null,i__61124);
var map__61130__$1 = (((((!((map__61130 == null))))?(((((map__61130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61130):map__61130);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61177 = seq__61120;
var G__61178 = chunk__61122;
var G__61179 = count__61123;
var G__61180 = (i__61124 + (1));
seq__61120 = G__61177;
chunk__61122 = G__61178;
count__61123 = G__61179;
i__61124 = G__61180;
continue;
} else {
var G__61181 = seq__61120;
var G__61182 = chunk__61122;
var G__61183 = count__61123;
var G__61184 = (i__61124 + (1));
seq__61120 = G__61181;
chunk__61122 = G__61182;
count__61123 = G__61183;
i__61124 = G__61184;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61120);
if(temp__5735__auto__){
var seq__61120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61120__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61120__$1);
var G__61185 = cljs.core.chunk_rest(seq__61120__$1);
var G__61186 = c__4609__auto__;
var G__61187 = cljs.core.count(c__4609__auto__);
var G__61188 = (0);
seq__61120 = G__61185;
chunk__61122 = G__61186;
count__61123 = G__61187;
i__61124 = G__61188;
continue;
} else {
var map__61132 = cljs.core.first(seq__61120__$1);
var map__61132__$1 = (((((!((map__61132 == null))))?(((((map__61132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61132):map__61132);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61132__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61189 = cljs.core.next(seq__61120__$1);
var G__61190 = null;
var G__61191 = (0);
var G__61192 = (0);
seq__61120 = G__61189;
chunk__61122 = G__61190;
count__61123 = G__61191;
i__61124 = G__61192;
continue;
} else {
var G__61193 = cljs.core.next(seq__61120__$1);
var G__61194 = null;
var G__61195 = (0);
var G__61196 = (0);
seq__61120 = G__61193;
chunk__61122 = G__61194;
count__61123 = G__61195;
i__61124 = G__61196;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61134,msg){
var map__61135 = p__61134;
var map__61135__$1 = (((((!((map__61135 == null))))?(((((map__61135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61135):map__61135);
var runtime = map__61135__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61137,key,p__61138){
var map__61139 = p__61137;
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var state = map__61139__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61140 = p__61138;
var map__61140__$1 = (((((!((map__61140 == null))))?(((((map__61140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61140):map__61140);
var spec = map__61140__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61140__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61143,key,spec){
var map__61144 = p__61143;
var map__61144__$1 = (((((!((map__61144 == null))))?(((((map__61144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61144):map__61144);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61151){
var map__61152 = p__61151;
var map__61152__$1 = (((((!((map__61152 == null))))?(((((map__61152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61152):map__61152);
var runtime = map__61152__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61146_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61146_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61147_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61147_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61148_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61148_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61149_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61149_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61150_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61150_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61154,key){
var map__61155 = p__61154;
var map__61155__$1 = (((((!((map__61155 == null))))?(((((map__61155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61155):map__61155);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61157,p__61158){
var map__61159 = p__61157;
var map__61159__$1 = (((((!((map__61159 == null))))?(((((map__61159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61159):map__61159);
var runtime = map__61159__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61160 = p__61158;
var map__61160__$1 = (((((!((map__61160 == null))))?(((((map__61160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61160):map__61160);
var msg = map__61160__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61163 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61165 = null;
var count__61166 = (0);
var i__61167 = (0);
while(true){
if((i__61167 < count__61166)){
var map__61173 = chunk__61165.cljs$core$IIndexed$_nth$arity$2(null,i__61167);
var map__61173__$1 = (((((!((map__61173 == null))))?(((((map__61173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61173):map__61173);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61197 = seq__61163;
var G__61198 = chunk__61165;
var G__61199 = count__61166;
var G__61200 = (i__61167 + (1));
seq__61163 = G__61197;
chunk__61165 = G__61198;
count__61166 = G__61199;
i__61167 = G__61200;
continue;
} else {
var G__61201 = seq__61163;
var G__61202 = chunk__61165;
var G__61203 = count__61166;
var G__61204 = (i__61167 + (1));
seq__61163 = G__61201;
chunk__61165 = G__61202;
count__61166 = G__61203;
i__61167 = G__61204;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61163);
if(temp__5735__auto__){
var seq__61163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61163__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61163__$1);
var G__61205 = cljs.core.chunk_rest(seq__61163__$1);
var G__61206 = c__4609__auto__;
var G__61207 = cljs.core.count(c__4609__auto__);
var G__61208 = (0);
seq__61163 = G__61205;
chunk__61165 = G__61206;
count__61166 = G__61207;
i__61167 = G__61208;
continue;
} else {
var map__61175 = cljs.core.first(seq__61163__$1);
var map__61175__$1 = (((((!((map__61175 == null))))?(((((map__61175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61175):map__61175);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61209 = cljs.core.next(seq__61163__$1);
var G__61210 = null;
var G__61211 = (0);
var G__61212 = (0);
seq__61163 = G__61209;
chunk__61165 = G__61210;
count__61166 = G__61211;
i__61167 = G__61212;
continue;
} else {
var G__61213 = cljs.core.next(seq__61163__$1);
var G__61214 = null;
var G__61215 = (0);
var G__61216 = (0);
seq__61163 = G__61213;
chunk__61165 = G__61214;
count__61166 = G__61215;
i__61167 = G__61216;
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
