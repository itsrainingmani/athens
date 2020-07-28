goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51282){
var map__51283 = p__51282;
var map__51283__$1 = (((((!((map__51283 == null))))?(((((map__51283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51283):map__51283);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51283__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51283__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51283__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51283__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51285_51337 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51286_51338 = null;
var count__51287_51339 = (0);
var i__51288_51340 = (0);
while(true){
if((i__51288_51340 < count__51287_51339)){
var vec__51306_51341 = chunk__51286_51338.cljs$core$IIndexed$_nth$arity$2(null,i__51288_51340);
var k_51342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51306_51341,(0),null);
var cb_51343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51306_51341,(1),null);
try{var G__51310_51344 = cljs.core.deref(re_frame.trace.traces);
(cb_51343.cljs$core$IFn$_invoke$arity$1 ? cb_51343.cljs$core$IFn$_invoke$arity$1(G__51310_51344) : cb_51343.call(null,G__51310_51344));
}catch (e51309){var e_51345 = e51309;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51342,"while storing",cljs.core.deref(re_frame.trace.traces),e_51345], 0));
}

var G__51348 = seq__51285_51337;
var G__51349 = chunk__51286_51338;
var G__51350 = count__51287_51339;
var G__51351 = (i__51288_51340 + (1));
seq__51285_51337 = G__51348;
chunk__51286_51338 = G__51349;
count__51287_51339 = G__51350;
i__51288_51340 = G__51351;
continue;
} else {
var temp__5735__auto___51352 = cljs.core.seq(seq__51285_51337);
if(temp__5735__auto___51352){
var seq__51285_51353__$1 = temp__5735__auto___51352;
if(cljs.core.chunked_seq_QMARK_(seq__51285_51353__$1)){
var c__4609__auto___51354 = cljs.core.chunk_first(seq__51285_51353__$1);
var G__51355 = cljs.core.chunk_rest(seq__51285_51353__$1);
var G__51356 = c__4609__auto___51354;
var G__51357 = cljs.core.count(c__4609__auto___51354);
var G__51358 = (0);
seq__51285_51337 = G__51355;
chunk__51286_51338 = G__51356;
count__51287_51339 = G__51357;
i__51288_51340 = G__51358;
continue;
} else {
var vec__51322_51359 = cljs.core.first(seq__51285_51353__$1);
var k_51360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51322_51359,(0),null);
var cb_51361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51322_51359,(1),null);
try{var G__51329_51362 = cljs.core.deref(re_frame.trace.traces);
(cb_51361.cljs$core$IFn$_invoke$arity$1 ? cb_51361.cljs$core$IFn$_invoke$arity$1(G__51329_51362) : cb_51361.call(null,G__51329_51362));
}catch (e51328){var e_51363 = e51328;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51360,"while storing",cljs.core.deref(re_frame.trace.traces),e_51363], 0));
}

var G__51364 = cljs.core.next(seq__51285_51353__$1);
var G__51365 = null;
var G__51366 = (0);
var G__51367 = (0);
seq__51285_51337 = G__51364;
chunk__51286_51338 = G__51365;
count__51287_51339 = G__51366;
i__51288_51340 = G__51367;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
