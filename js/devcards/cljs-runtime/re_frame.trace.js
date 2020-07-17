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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46210){
var map__46211 = p__46210;
var map__46211__$1 = (((((!((map__46211 == null))))?(((((map__46211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46211):map__46211);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__46213_46247 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46214_46248 = null;
var count__46215_46249 = (0);
var i__46216_46250 = (0);
while(true){
if((i__46216_46250 < count__46215_46249)){
var vec__46227_46251 = chunk__46214_46248.cljs$core$IIndexed$_nth$arity$2(null,i__46216_46250);
var k_46252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227_46251,(0),null);
var cb_46253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227_46251,(1),null);
try{var G__46231_46254 = cljs.core.deref(re_frame.trace.traces);
(cb_46253.cljs$core$IFn$_invoke$arity$1 ? cb_46253.cljs$core$IFn$_invoke$arity$1(G__46231_46254) : cb_46253.call(null,G__46231_46254));
}catch (e46230){var e_46255 = e46230;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46252,"while storing",cljs.core.deref(re_frame.trace.traces),e_46255], 0));
}

var G__46256 = seq__46213_46247;
var G__46257 = chunk__46214_46248;
var G__46258 = count__46215_46249;
var G__46259 = (i__46216_46250 + (1));
seq__46213_46247 = G__46256;
chunk__46214_46248 = G__46257;
count__46215_46249 = G__46258;
i__46216_46250 = G__46259;
continue;
} else {
var temp__5735__auto___46260 = cljs.core.seq(seq__46213_46247);
if(temp__5735__auto___46260){
var seq__46213_46261__$1 = temp__5735__auto___46260;
if(cljs.core.chunked_seq_QMARK_(seq__46213_46261__$1)){
var c__4609__auto___46262 = cljs.core.chunk_first(seq__46213_46261__$1);
var G__46263 = cljs.core.chunk_rest(seq__46213_46261__$1);
var G__46264 = c__4609__auto___46262;
var G__46265 = cljs.core.count(c__4609__auto___46262);
var G__46266 = (0);
seq__46213_46247 = G__46263;
chunk__46214_46248 = G__46264;
count__46215_46249 = G__46265;
i__46216_46250 = G__46266;
continue;
} else {
var vec__46232_46267 = cljs.core.first(seq__46213_46261__$1);
var k_46268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232_46267,(0),null);
var cb_46269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232_46267,(1),null);
try{var G__46236_46270 = cljs.core.deref(re_frame.trace.traces);
(cb_46269.cljs$core$IFn$_invoke$arity$1 ? cb_46269.cljs$core$IFn$_invoke$arity$1(G__46236_46270) : cb_46269.call(null,G__46236_46270));
}catch (e46235){var e_46271 = e46235;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46268,"while storing",cljs.core.deref(re_frame.trace.traces),e_46271], 0));
}

var G__46272 = cljs.core.next(seq__46213_46261__$1);
var G__46273 = null;
var G__46274 = (0);
var G__46275 = (0);
seq__46213_46247 = G__46272;
chunk__46214_46248 = G__46273;
count__46215_46249 = G__46274;
i__46216_46250 = G__46275;
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
