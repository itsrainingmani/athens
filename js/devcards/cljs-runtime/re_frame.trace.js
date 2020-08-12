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
var vec__50339_50359 = chunk__50326_50353.cljs$core$IIndexed$_nth$arity$2(null,i__50328_50355);
var k_50360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339_50359,(0),null);
var cb_50361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339_50359,(1),null);
try{var G__50343_50362 = cljs.core.deref(re_frame.trace.traces);
(cb_50361.cljs$core$IFn$_invoke$arity$1 ? cb_50361.cljs$core$IFn$_invoke$arity$1(G__50343_50362) : cb_50361.call(null,G__50343_50362));
}catch (e50342){var e_50363 = e50342;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50360,"while storing",cljs.core.deref(re_frame.trace.traces),e_50363], 0));
}

var G__50364 = seq__50325_50352;
var G__50365 = chunk__50326_50353;
var G__50366 = count__50327_50354;
var G__50367 = (i__50328_50355 + (1));
seq__50325_50352 = G__50364;
chunk__50326_50353 = G__50365;
count__50327_50354 = G__50366;
i__50328_50355 = G__50367;
continue;
} else {
var temp__5735__auto___50368 = cljs.core.seq(seq__50325_50352);
if(temp__5735__auto___50368){
var seq__50325_50369__$1 = temp__5735__auto___50368;
if(cljs.core.chunked_seq_QMARK_(seq__50325_50369__$1)){
var c__4556__auto___50370 = cljs.core.chunk_first(seq__50325_50369__$1);
var G__50371 = cljs.core.chunk_rest(seq__50325_50369__$1);
var G__50372 = c__4556__auto___50370;
var G__50373 = cljs.core.count(c__4556__auto___50370);
var G__50374 = (0);
seq__50325_50352 = G__50371;
chunk__50326_50353 = G__50372;
count__50327_50354 = G__50373;
i__50328_50355 = G__50374;
continue;
} else {
var vec__50344_50376 = cljs.core.first(seq__50325_50369__$1);
var k_50377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344_50376,(0),null);
var cb_50378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344_50376,(1),null);
try{var G__50348_50379 = cljs.core.deref(re_frame.trace.traces);
(cb_50378.cljs$core$IFn$_invoke$arity$1 ? cb_50378.cljs$core$IFn$_invoke$arity$1(G__50348_50379) : cb_50378.call(null,G__50348_50379));
}catch (e50347){var e_50380 = e50347;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50377,"while storing",cljs.core.deref(re_frame.trace.traces),e_50380], 0));
}

var G__50382 = cljs.core.next(seq__50325_50369__$1);
var G__50383 = null;
var G__50384 = (0);
var G__50385 = (0);
seq__50325_50352 = G__50382;
chunk__50326_50353 = G__50383;
count__50327_50354 = G__50384;
i__50328_50355 = G__50385;
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
