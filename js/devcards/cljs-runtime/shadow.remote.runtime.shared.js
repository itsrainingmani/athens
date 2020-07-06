goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__82306,p__82307){
var map__82308 = p__82306;
var map__82308__$1 = (((((!((map__82308 == null))))?(((((map__82308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82308):map__82308);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82308__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__82309 = p__82307;
var map__82309__$1 = (((((!((map__82309 == null))))?(((((map__82309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82309):map__82309);
var msg = map__82309__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82309__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__82312,p__82313){
var map__82314 = p__82312;
var map__82314__$1 = (((((!((map__82314 == null))))?(((((map__82314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82314):map__82314);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__82315 = p__82313;
var map__82315__$1 = (((((!((map__82315 == null))))?(((((map__82315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82315):map__82315);
var msg = map__82315__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82315__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__82318 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__82320 = null;
var count__82321 = (0);
var i__82322 = (0);
while(true){
if((i__82322 < count__82321)){
var map__82328 = chunk__82320.cljs$core$IIndexed$_nth$arity$2(null,i__82322);
var map__82328__$1 = (((((!((map__82328 == null))))?(((((map__82328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82328):map__82328);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82328__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__82387 = seq__82318;
var G__82388 = chunk__82320;
var G__82389 = count__82321;
var G__82390 = (i__82322 + (1));
seq__82318 = G__82387;
chunk__82320 = G__82388;
count__82321 = G__82389;
i__82322 = G__82390;
continue;
} else {
var G__82391 = seq__82318;
var G__82392 = chunk__82320;
var G__82393 = count__82321;
var G__82394 = (i__82322 + (1));
seq__82318 = G__82391;
chunk__82320 = G__82392;
count__82321 = G__82393;
i__82322 = G__82394;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82318);
if(temp__5735__auto__){
var seq__82318__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82318__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82318__$1);
var G__82395 = cljs.core.chunk_rest(seq__82318__$1);
var G__82396 = c__4609__auto__;
var G__82397 = cljs.core.count(c__4609__auto__);
var G__82398 = (0);
seq__82318 = G__82395;
chunk__82320 = G__82396;
count__82321 = G__82397;
i__82322 = G__82398;
continue;
} else {
var map__82330 = cljs.core.first(seq__82318__$1);
var map__82330__$1 = (((((!((map__82330 == null))))?(((((map__82330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82330):map__82330);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82330__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__82399 = cljs.core.next(seq__82318__$1);
var G__82400 = null;
var G__82401 = (0);
var G__82402 = (0);
seq__82318 = G__82399;
chunk__82320 = G__82400;
count__82321 = G__82401;
i__82322 = G__82402;
continue;
} else {
var G__82403 = cljs.core.next(seq__82318__$1);
var G__82404 = null;
var G__82405 = (0);
var G__82406 = (0);
seq__82318 = G__82403;
chunk__82320 = G__82404;
count__82321 = G__82405;
i__82322 = G__82406;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__82332,msg){
var map__82333 = p__82332;
var map__82333__$1 = (((((!((map__82333 == null))))?(((((map__82333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82333):map__82333);
var runtime = map__82333__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82333__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__82335,key,p__82336){
var map__82337 = p__82335;
var map__82337__$1 = (((((!((map__82337 == null))))?(((((map__82337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82337):map__82337);
var state = map__82337__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82337__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__82338 = p__82336;
var map__82338__$1 = (((((!((map__82338 == null))))?(((((map__82338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82338):map__82338);
var spec = map__82338__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82338__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__82341,key,spec){
var map__82342 = p__82341;
var map__82342__$1 = (((((!((map__82342 == null))))?(((((map__82342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82342):map__82342);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82342__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__82349){
var map__82350 = p__82349;
var map__82350__$1 = (((((!((map__82350 == null))))?(((((map__82350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82350):map__82350);
var runtime = map__82350__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82350__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__82344_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__82344_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__82345_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__82345_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__82346_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__82346_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__82347_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__82347_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__82348_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__82348_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__82352,key){
var map__82353 = p__82352;
var map__82353__$1 = (((((!((map__82353 == null))))?(((((map__82353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82353):map__82353);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82353__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__82355,p__82356){
var map__82357 = p__82355;
var map__82357__$1 = (((((!((map__82357 == null))))?(((((map__82357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82357):map__82357);
var runtime = map__82357__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82357__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__82358 = p__82356;
var map__82358__$1 = (((((!((map__82358 == null))))?(((((map__82358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82358):map__82358);
var msg = map__82358__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82358__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__82364 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__82366 = null;
var count__82367 = (0);
var i__82368 = (0);
while(true){
if((i__82368 < count__82367)){
var map__82383 = chunk__82366.cljs$core$IIndexed$_nth$arity$2(null,i__82368);
var map__82383__$1 = (((((!((map__82383 == null))))?(((((map__82383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82383):map__82383);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82383__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__82412 = seq__82364;
var G__82413 = chunk__82366;
var G__82414 = count__82367;
var G__82415 = (i__82368 + (1));
seq__82364 = G__82412;
chunk__82366 = G__82413;
count__82367 = G__82414;
i__82368 = G__82415;
continue;
} else {
var G__82416 = seq__82364;
var G__82417 = chunk__82366;
var G__82418 = count__82367;
var G__82419 = (i__82368 + (1));
seq__82364 = G__82416;
chunk__82366 = G__82417;
count__82367 = G__82418;
i__82368 = G__82419;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82364);
if(temp__5735__auto__){
var seq__82364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82364__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82364__$1);
var G__82420 = cljs.core.chunk_rest(seq__82364__$1);
var G__82421 = c__4609__auto__;
var G__82422 = cljs.core.count(c__4609__auto__);
var G__82423 = (0);
seq__82364 = G__82420;
chunk__82366 = G__82421;
count__82367 = G__82422;
i__82368 = G__82423;
continue;
} else {
var map__82385 = cljs.core.first(seq__82364__$1);
var map__82385__$1 = (((((!((map__82385 == null))))?(((((map__82385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82385):map__82385);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82385__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__82425 = cljs.core.next(seq__82364__$1);
var G__82426 = null;
var G__82427 = (0);
var G__82428 = (0);
seq__82364 = G__82425;
chunk__82366 = G__82426;
count__82367 = G__82427;
i__82368 = G__82428;
continue;
} else {
var G__82429 = cljs.core.next(seq__82364__$1);
var G__82430 = null;
var G__82431 = (0);
var G__82432 = (0);
seq__82364 = G__82429;
chunk__82366 = G__82430;
count__82367 = G__82431;
i__82368 = G__82432;
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
