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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50322){
var map__50323 = p__50322;
var map__50323__$1 = (((((!((map__50323 == null))))?(((((map__50323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50323):map__50323);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50323__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50323__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50323__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50323__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__50325_50352 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50326_50353 = null;
var count__50327_50354 = (0);
var i__50328_50355 = (0);
while(true){
if((i__50328_50355 < count__50327_50354)){
var vec__50339_50356 = chunk__50326_50353.cljs$core$IIndexed$_nth$arity$2(null,i__50328_50355);
var k_50357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339_50356,(0),null);
var cb_50358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339_50356,(1),null);
try{var G__50343_50359 = cljs.core.deref(re_frame.trace.traces);
(cb_50358.cljs$core$IFn$_invoke$arity$1 ? cb_50358.cljs$core$IFn$_invoke$arity$1(G__50343_50359) : cb_50358.call(null,G__50343_50359));
}catch (e50342){var e_50360 = e50342;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50357,"while storing",cljs.core.deref(re_frame.trace.traces),e_50360], 0));
}

var G__50361 = seq__50325_50352;
var G__50362 = chunk__50326_50353;
var G__50363 = count__50327_50354;
var G__50364 = (i__50328_50355 + (1));
seq__50325_50352 = G__50361;
chunk__50326_50353 = G__50362;
count__50327_50354 = G__50363;
i__50328_50355 = G__50364;
continue;
} else {
var temp__5735__auto___50365 = cljs.core.seq(seq__50325_50352);
if(temp__5735__auto___50365){
var seq__50325_50366__$1 = temp__5735__auto___50365;
if(cljs.core.chunked_seq_QMARK_(seq__50325_50366__$1)){
var c__4556__auto___50367 = cljs.core.chunk_first(seq__50325_50366__$1);
var G__50368 = cljs.core.chunk_rest(seq__50325_50366__$1);
var G__50369 = c__4556__auto___50367;
var G__50370 = cljs.core.count(c__4556__auto___50367);
var G__50371 = (0);
seq__50325_50352 = G__50368;
chunk__50326_50353 = G__50369;
count__50327_50354 = G__50370;
i__50328_50355 = G__50371;
continue;
} else {
var vec__50344_50372 = cljs.core.first(seq__50325_50366__$1);
var k_50373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344_50372,(0),null);
var cb_50374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344_50372,(1),null);
try{var G__50348_50375 = cljs.core.deref(re_frame.trace.traces);
(cb_50374.cljs$core$IFn$_invoke$arity$1 ? cb_50374.cljs$core$IFn$_invoke$arity$1(G__50348_50375) : cb_50374.call(null,G__50348_50375));
}catch (e50347){var e_50376 = e50347;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50373,"while storing",cljs.core.deref(re_frame.trace.traces),e_50376], 0));
}

var G__50377 = cljs.core.next(seq__50325_50366__$1);
var G__50378 = null;
var G__50379 = (0);
var G__50380 = (0);
seq__50325_50352 = G__50377;
chunk__50326_50353 = G__50378;
count__50327_50354 = G__50379;
i__50328_50355 = G__50380;
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
