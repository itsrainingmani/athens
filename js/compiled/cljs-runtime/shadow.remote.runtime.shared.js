goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__88781,p__88782){
var map__88783 = p__88781;
var map__88783__$1 = (((((!((map__88783 == null))))?(((((map__88783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88783):map__88783);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88783__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__88784 = p__88782;
var map__88784__$1 = (((((!((map__88784 == null))))?(((((map__88784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88784):map__88784);
var msg = map__88784__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88784__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__88787,p__88788){
var map__88789 = p__88787;
var map__88789__$1 = (((((!((map__88789 == null))))?(((((map__88789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88789):map__88789);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__88791 = p__88788;
var map__88791__$1 = (((((!((map__88791 == null))))?(((((map__88791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88791):map__88791);
var msg = map__88791__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88791__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__88797 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__88799 = null;
var count__88800 = (0);
var i__88801 = (0);
while(true){
if((i__88801 < count__88800)){
var map__88815 = chunk__88799.cljs$core$IIndexed$_nth$arity$2(null,i__88801);
var map__88815__$1 = (((((!((map__88815 == null))))?(((((map__88815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88815):map__88815);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88815__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__89201 = seq__88797;
var G__89202 = chunk__88799;
var G__89203 = count__88800;
var G__89204 = (i__88801 + (1));
seq__88797 = G__89201;
chunk__88799 = G__89202;
count__88800 = G__89203;
i__88801 = G__89204;
continue;
} else {
var G__89205 = seq__88797;
var G__89206 = chunk__88799;
var G__89207 = count__88800;
var G__89208 = (i__88801 + (1));
seq__88797 = G__89205;
chunk__88799 = G__89206;
count__88800 = G__89207;
i__88801 = G__89208;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__88797);
if(temp__5735__auto__){
var seq__88797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88797__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__88797__$1);
var G__89215 = cljs.core.chunk_rest(seq__88797__$1);
var G__89216 = c__4609__auto__;
var G__89217 = cljs.core.count(c__4609__auto__);
var G__89218 = (0);
seq__88797 = G__89215;
chunk__88799 = G__89216;
count__88800 = G__89217;
i__88801 = G__89218;
continue;
} else {
var map__88817 = cljs.core.first(seq__88797__$1);
var map__88817__$1 = (((((!((map__88817 == null))))?(((((map__88817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88817):map__88817);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88817__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__89223 = cljs.core.next(seq__88797__$1);
var G__89224 = null;
var G__89225 = (0);
var G__89226 = (0);
seq__88797 = G__89223;
chunk__88799 = G__89224;
count__88800 = G__89225;
i__88801 = G__89226;
continue;
} else {
var G__89241 = cljs.core.next(seq__88797__$1);
var G__89242 = null;
var G__89243 = (0);
var G__89244 = (0);
seq__88797 = G__89241;
chunk__88799 = G__89242;
count__88800 = G__89243;
i__88801 = G__89244;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__88819,msg){
var map__88820 = p__88819;
var map__88820__$1 = (((((!((map__88820 == null))))?(((((map__88820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88820):map__88820);
var runtime = map__88820__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88820__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__88826,key,p__88827){
var map__88828 = p__88826;
var map__88828__$1 = (((((!((map__88828 == null))))?(((((map__88828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88828):map__88828);
var state = map__88828__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88828__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__88829 = p__88827;
var map__88829__$1 = (((((!((map__88829 == null))))?(((((map__88829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88829):map__88829);
var spec = map__88829__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88829__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__88843,key,spec){
var map__88845 = p__88843;
var map__88845__$1 = (((((!((map__88845 == null))))?(((((map__88845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88845):map__88845);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88845__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__88852){
var map__88853 = p__88852;
var map__88853__$1 = (((((!((map__88853 == null))))?(((((map__88853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88853):map__88853);
var runtime = map__88853__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88853__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__88847_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__88847_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__88848_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__88848_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__88849_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__88849_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__88850_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__88850_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__88851_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__88851_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__89055,key){
var map__89065 = p__89055;
var map__89065__$1 = (((((!((map__89065 == null))))?(((((map__89065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89065):map__89065);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__89079,p__89080){
var map__89082 = p__89079;
var map__89082__$1 = (((((!((map__89082 == null))))?(((((map__89082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89082):map__89082);
var runtime = map__89082__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__89085 = p__89080;
var map__89085__$1 = (((((!((map__89085 == null))))?(((((map__89085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89085):map__89085);
var msg = map__89085__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89085__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__89107 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__89109 = null;
var count__89110 = (0);
var i__89111 = (0);
while(true){
if((i__89111 < count__89110)){
var map__89138 = chunk__89109.cljs$core$IIndexed$_nth$arity$2(null,i__89111);
var map__89138__$1 = (((((!((map__89138 == null))))?(((((map__89138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89138):map__89138);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89138__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__89325 = seq__89107;
var G__89326 = chunk__89109;
var G__89327 = count__89110;
var G__89328 = (i__89111 + (1));
seq__89107 = G__89325;
chunk__89109 = G__89326;
count__89110 = G__89327;
i__89111 = G__89328;
continue;
} else {
var G__89329 = seq__89107;
var G__89330 = chunk__89109;
var G__89331 = count__89110;
var G__89332 = (i__89111 + (1));
seq__89107 = G__89329;
chunk__89109 = G__89330;
count__89110 = G__89331;
i__89111 = G__89332;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__89107);
if(temp__5735__auto__){
var seq__89107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89107__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__89107__$1);
var G__89333 = cljs.core.chunk_rest(seq__89107__$1);
var G__89334 = c__4609__auto__;
var G__89335 = cljs.core.count(c__4609__auto__);
var G__89336 = (0);
seq__89107 = G__89333;
chunk__89109 = G__89334;
count__89110 = G__89335;
i__89111 = G__89336;
continue;
} else {
var map__89152 = cljs.core.first(seq__89107__$1);
var map__89152__$1 = (((((!((map__89152 == null))))?(((((map__89152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89152):map__89152);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89152__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__89337 = cljs.core.next(seq__89107__$1);
var G__89338 = null;
var G__89339 = (0);
var G__89340 = (0);
seq__89107 = G__89337;
chunk__89109 = G__89338;
count__89110 = G__89339;
i__89111 = G__89340;
continue;
} else {
var G__89341 = cljs.core.next(seq__89107__$1);
var G__89342 = null;
var G__89343 = (0);
var G__89344 = (0);
seq__89107 = G__89341;
chunk__89109 = G__89342;
count__89110 = G__89343;
i__89111 = G__89344;
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
