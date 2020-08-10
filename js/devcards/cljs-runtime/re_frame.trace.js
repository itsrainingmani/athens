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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50244){
var map__50245 = p__50244;
var map__50245__$1 = (((((!((map__50245 == null))))?(((((map__50245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50245):map__50245);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50245__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__50247_50301 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50248_50302 = null;
var count__50249_50303 = (0);
var i__50250_50304 = (0);
while(true){
if((i__50250_50304 < count__50249_50303)){
var vec__50263_50305 = chunk__50248_50302.cljs$core$IIndexed$_nth$arity$2(null,i__50250_50304);
var k_50306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50263_50305,(0),null);
var cb_50307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50263_50305,(1),null);
try{var G__50267_50308 = cljs.core.deref(re_frame.trace.traces);
(cb_50307.cljs$core$IFn$_invoke$arity$1 ? cb_50307.cljs$core$IFn$_invoke$arity$1(G__50267_50308) : cb_50307.call(null,G__50267_50308));
}catch (e50266){var e_50309 = e50266;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50306,"while storing",cljs.core.deref(re_frame.trace.traces),e_50309], 0));
}

var G__50310 = seq__50247_50301;
var G__50311 = chunk__50248_50302;
var G__50312 = count__50249_50303;
var G__50313 = (i__50250_50304 + (1));
seq__50247_50301 = G__50310;
chunk__50248_50302 = G__50311;
count__50249_50303 = G__50312;
i__50250_50304 = G__50313;
continue;
} else {
var temp__5735__auto___50314 = cljs.core.seq(seq__50247_50301);
if(temp__5735__auto___50314){
var seq__50247_50315__$1 = temp__5735__auto___50314;
if(cljs.core.chunked_seq_QMARK_(seq__50247_50315__$1)){
var c__4556__auto___50316 = cljs.core.chunk_first(seq__50247_50315__$1);
var G__50317 = cljs.core.chunk_rest(seq__50247_50315__$1);
var G__50318 = c__4556__auto___50316;
var G__50319 = cljs.core.count(c__4556__auto___50316);
var G__50320 = (0);
seq__50247_50301 = G__50317;
chunk__50248_50302 = G__50318;
count__50249_50303 = G__50319;
i__50250_50304 = G__50320;
continue;
} else {
var vec__50268_50321 = cljs.core.first(seq__50247_50315__$1);
var k_50322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50268_50321,(0),null);
var cb_50323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50268_50321,(1),null);
try{var G__50272_50324 = cljs.core.deref(re_frame.trace.traces);
(cb_50323.cljs$core$IFn$_invoke$arity$1 ? cb_50323.cljs$core$IFn$_invoke$arity$1(G__50272_50324) : cb_50323.call(null,G__50272_50324));
}catch (e50271){var e_50325 = e50271;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50322,"while storing",cljs.core.deref(re_frame.trace.traces),e_50325], 0));
}

var G__50326 = cljs.core.next(seq__50247_50315__$1);
var G__50327 = null;
var G__50328 = (0);
var G__50329 = (0);
seq__50247_50301 = G__50326;
chunk__50248_50302 = G__50327;
count__50249_50303 = G__50328;
i__50250_50304 = G__50329;
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
