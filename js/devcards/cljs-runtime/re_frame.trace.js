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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50246){
var map__50247 = p__50246;
var map__50247__$1 = (((((!((map__50247 == null))))?(((((map__50247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50247):map__50247);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__50249_50301 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50250_50302 = null;
var count__50251_50303 = (0);
var i__50252_50304 = (0);
while(true){
if((i__50252_50304 < count__50251_50303)){
var vec__50284_50305 = chunk__50250_50302.cljs$core$IIndexed$_nth$arity$2(null,i__50252_50304);
var k_50306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50284_50305,(0),null);
var cb_50307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50284_50305,(1),null);
try{var G__50292_50308 = cljs.core.deref(re_frame.trace.traces);
(cb_50307.cljs$core$IFn$_invoke$arity$1 ? cb_50307.cljs$core$IFn$_invoke$arity$1(G__50292_50308) : cb_50307.call(null,G__50292_50308));
}catch (e50287){var e_50311 = e50287;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50306,"while storing",cljs.core.deref(re_frame.trace.traces),e_50311], 0));
}

var G__50312 = seq__50249_50301;
var G__50313 = chunk__50250_50302;
var G__50314 = count__50251_50303;
var G__50315 = (i__50252_50304 + (1));
seq__50249_50301 = G__50312;
chunk__50250_50302 = G__50313;
count__50251_50303 = G__50314;
i__50252_50304 = G__50315;
continue;
} else {
var temp__5735__auto___50316 = cljs.core.seq(seq__50249_50301);
if(temp__5735__auto___50316){
var seq__50249_50317__$1 = temp__5735__auto___50316;
if(cljs.core.chunked_seq_QMARK_(seq__50249_50317__$1)){
var c__4556__auto___50318 = cljs.core.chunk_first(seq__50249_50317__$1);
var G__50319 = cljs.core.chunk_rest(seq__50249_50317__$1);
var G__50320 = c__4556__auto___50318;
var G__50321 = cljs.core.count(c__4556__auto___50318);
var G__50322 = (0);
seq__50249_50301 = G__50319;
chunk__50250_50302 = G__50320;
count__50251_50303 = G__50321;
i__50252_50304 = G__50322;
continue;
} else {
var vec__50293_50323 = cljs.core.first(seq__50249_50317__$1);
var k_50324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50293_50323,(0),null);
var cb_50325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50293_50323,(1),null);
try{var G__50297_50326 = cljs.core.deref(re_frame.trace.traces);
(cb_50325.cljs$core$IFn$_invoke$arity$1 ? cb_50325.cljs$core$IFn$_invoke$arity$1(G__50297_50326) : cb_50325.call(null,G__50297_50326));
}catch (e50296){var e_50327 = e50296;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50324,"while storing",cljs.core.deref(re_frame.trace.traces),e_50327], 0));
}

var G__50328 = cljs.core.next(seq__50249_50317__$1);
var G__50329 = null;
var G__50330 = (0);
var G__50331 = (0);
seq__50249_50301 = G__50328;
chunk__50250_50302 = G__50329;
count__50251_50303 = G__50330;
i__50252_50304 = G__50331;
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
