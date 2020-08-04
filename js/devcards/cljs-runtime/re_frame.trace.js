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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51255){
var map__51256 = p__51255;
var map__51256__$1 = (((((!((map__51256 == null))))?(((((map__51256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51256):map__51256);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__51258_51314 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51259_51315 = null;
var count__51260_51316 = (0);
var i__51261_51317 = (0);
while(true){
if((i__51261_51317 < count__51260_51316)){
var vec__51272_51318 = chunk__51259_51315.cljs$core$IIndexed$_nth$arity$2(null,i__51261_51317);
var k_51319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272_51318,(0),null);
var cb_51320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272_51318,(1),null);
try{var G__51276_51321 = cljs.core.deref(re_frame.trace.traces);
(cb_51320.cljs$core$IFn$_invoke$arity$1 ? cb_51320.cljs$core$IFn$_invoke$arity$1(G__51276_51321) : cb_51320.call(null,G__51276_51321));
}catch (e51275){var e_51322 = e51275;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51319,"while storing",cljs.core.deref(re_frame.trace.traces),e_51322], 0));
}

var G__51323 = seq__51258_51314;
var G__51324 = chunk__51259_51315;
var G__51325 = count__51260_51316;
var G__51326 = (i__51261_51317 + (1));
seq__51258_51314 = G__51323;
chunk__51259_51315 = G__51324;
count__51260_51316 = G__51325;
i__51261_51317 = G__51326;
continue;
} else {
var temp__5735__auto___51327 = cljs.core.seq(seq__51258_51314);
if(temp__5735__auto___51327){
var seq__51258_51328__$1 = temp__5735__auto___51327;
if(cljs.core.chunked_seq_QMARK_(seq__51258_51328__$1)){
var c__4609__auto___51329 = cljs.core.chunk_first(seq__51258_51328__$1);
var G__51330 = cljs.core.chunk_rest(seq__51258_51328__$1);
var G__51331 = c__4609__auto___51329;
var G__51332 = cljs.core.count(c__4609__auto___51329);
var G__51333 = (0);
seq__51258_51314 = G__51330;
chunk__51259_51315 = G__51331;
count__51260_51316 = G__51332;
i__51261_51317 = G__51333;
continue;
} else {
var vec__51277_51334 = cljs.core.first(seq__51258_51328__$1);
var k_51335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51277_51334,(0),null);
var cb_51336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51277_51334,(1),null);
try{var G__51281_51337 = cljs.core.deref(re_frame.trace.traces);
(cb_51336.cljs$core$IFn$_invoke$arity$1 ? cb_51336.cljs$core$IFn$_invoke$arity$1(G__51281_51337) : cb_51336.call(null,G__51281_51337));
}catch (e51280){var e_51338 = e51280;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51335,"while storing",cljs.core.deref(re_frame.trace.traces),e_51338], 0));
}

var G__51339 = cljs.core.next(seq__51258_51328__$1);
var G__51340 = null;
var G__51341 = (0);
var G__51342 = (0);
seq__51258_51314 = G__51339;
chunk__51259_51315 = G__51340;
count__51260_51316 = G__51341;
i__51261_51317 = G__51342;
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
