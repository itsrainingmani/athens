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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51329){
var map__51330 = p__51329;
var map__51330__$1 = (((((!((map__51330 == null))))?(((((map__51330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51330):map__51330);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__51332_51383 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51333_51384 = null;
var count__51334_51385 = (0);
var i__51335_51386 = (0);
while(true){
if((i__51335_51386 < count__51334_51385)){
var vec__51346_51387 = chunk__51333_51384.cljs$core$IIndexed$_nth$arity$2(null,i__51335_51386);
var k_51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51387,(0),null);
var cb_51389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51387,(1),null);
try{var G__51350_51390 = cljs.core.deref(re_frame.trace.traces);
(cb_51389.cljs$core$IFn$_invoke$arity$1 ? cb_51389.cljs$core$IFn$_invoke$arity$1(G__51350_51390) : cb_51389.call(null,G__51350_51390));
}catch (e51349){var e_51391 = e51349;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51388,"while storing",cljs.core.deref(re_frame.trace.traces),e_51391], 0));
}

var G__51392 = seq__51332_51383;
var G__51393 = chunk__51333_51384;
var G__51394 = count__51334_51385;
var G__51395 = (i__51335_51386 + (1));
seq__51332_51383 = G__51392;
chunk__51333_51384 = G__51393;
count__51334_51385 = G__51394;
i__51335_51386 = G__51395;
continue;
} else {
var temp__5735__auto___51396 = cljs.core.seq(seq__51332_51383);
if(temp__5735__auto___51396){
var seq__51332_51397__$1 = temp__5735__auto___51396;
if(cljs.core.chunked_seq_QMARK_(seq__51332_51397__$1)){
var c__4609__auto___51398 = cljs.core.chunk_first(seq__51332_51397__$1);
var G__51399 = cljs.core.chunk_rest(seq__51332_51397__$1);
var G__51400 = c__4609__auto___51398;
var G__51401 = cljs.core.count(c__4609__auto___51398);
var G__51402 = (0);
seq__51332_51383 = G__51399;
chunk__51333_51384 = G__51400;
count__51334_51385 = G__51401;
i__51335_51386 = G__51402;
continue;
} else {
var vec__51351_51403 = cljs.core.first(seq__51332_51397__$1);
var k_51404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51403,(0),null);
var cb_51405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51403,(1),null);
try{var G__51355_51406 = cljs.core.deref(re_frame.trace.traces);
(cb_51405.cljs$core$IFn$_invoke$arity$1 ? cb_51405.cljs$core$IFn$_invoke$arity$1(G__51355_51406) : cb_51405.call(null,G__51355_51406));
}catch (e51354){var e_51407 = e51354;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51404,"while storing",cljs.core.deref(re_frame.trace.traces),e_51407], 0));
}

var G__51408 = cljs.core.next(seq__51332_51397__$1);
var G__51409 = null;
var G__51410 = (0);
var G__51411 = (0);
seq__51332_51383 = G__51408;
chunk__51333_51384 = G__51409;
count__51334_51385 = G__51410;
i__51335_51386 = G__51411;
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
