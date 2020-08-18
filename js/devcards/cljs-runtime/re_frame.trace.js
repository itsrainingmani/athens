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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50294){
var map__50295 = p__50294;
var map__50295__$1 = (((((!((map__50295 == null))))?(((((map__50295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50295):map__50295);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__50299_50328 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50300_50329 = null;
var count__50301_50330 = (0);
var i__50302_50331 = (0);
while(true){
if((i__50302_50331 < count__50301_50330)){
var vec__50313_50332 = chunk__50300_50329.cljs$core$IIndexed$_nth$arity$2(null,i__50302_50331);
var k_50333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50313_50332,(0),null);
var cb_50334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50313_50332,(1),null);
try{var G__50317_50335 = cljs.core.deref(re_frame.trace.traces);
(cb_50334.cljs$core$IFn$_invoke$arity$1 ? cb_50334.cljs$core$IFn$_invoke$arity$1(G__50317_50335) : cb_50334.call(null,G__50317_50335));
}catch (e50316){var e_50336 = e50316;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50333,"while storing",cljs.core.deref(re_frame.trace.traces),e_50336], 0));
}

var G__50337 = seq__50299_50328;
var G__50338 = chunk__50300_50329;
var G__50339 = count__50301_50330;
var G__50340 = (i__50302_50331 + (1));
seq__50299_50328 = G__50337;
chunk__50300_50329 = G__50338;
count__50301_50330 = G__50339;
i__50302_50331 = G__50340;
continue;
} else {
var temp__5735__auto___50341 = cljs.core.seq(seq__50299_50328);
if(temp__5735__auto___50341){
var seq__50299_50342__$1 = temp__5735__auto___50341;
if(cljs.core.chunked_seq_QMARK_(seq__50299_50342__$1)){
var c__4556__auto___50343 = cljs.core.chunk_first(seq__50299_50342__$1);
var G__50344 = cljs.core.chunk_rest(seq__50299_50342__$1);
var G__50345 = c__4556__auto___50343;
var G__50346 = cljs.core.count(c__4556__auto___50343);
var G__50347 = (0);
seq__50299_50328 = G__50344;
chunk__50300_50329 = G__50345;
count__50301_50330 = G__50346;
i__50302_50331 = G__50347;
continue;
} else {
var vec__50318_50348 = cljs.core.first(seq__50299_50342__$1);
var k_50349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50318_50348,(0),null);
var cb_50350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50318_50348,(1),null);
try{var G__50322_50351 = cljs.core.deref(re_frame.trace.traces);
(cb_50350.cljs$core$IFn$_invoke$arity$1 ? cb_50350.cljs$core$IFn$_invoke$arity$1(G__50322_50351) : cb_50350.call(null,G__50322_50351));
}catch (e50321){var e_50352 = e50321;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50349,"while storing",cljs.core.deref(re_frame.trace.traces),e_50352], 0));
}

var G__50353 = cljs.core.next(seq__50299_50342__$1);
var G__50354 = null;
var G__50355 = (0);
var G__50356 = (0);
seq__50299_50328 = G__50353;
chunk__50300_50329 = G__50354;
count__50301_50330 = G__50355;
i__50302_50331 = G__50356;
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
