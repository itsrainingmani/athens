goog.provide('re_frame.trace');
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__32169){
var map__32170 = p__32169;
var map__32170__$1 = (((((!((map__32170 == null))))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32170):map__32170);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__32172_32199 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__32173_32200 = null;
var count__32174_32201 = (0);
var i__32175_32202 = (0);
while(true){
if((i__32175_32202 < count__32174_32201)){
var vec__32186_32203 = chunk__32173_32200.cljs$core$IIndexed$_nth$arity$2(null,i__32175_32202);
var k_32204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186_32203,(0),null);
var cb_32205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186_32203,(1),null);
try{var G__32190_32206 = cljs.core.deref(re_frame.trace.traces);
(cb_32205.cljs$core$IFn$_invoke$arity$1 ? cb_32205.cljs$core$IFn$_invoke$arity$1(G__32190_32206) : cb_32205.call(null,G__32190_32206));
}catch (e32189){var e_32207 = e32189;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32204,"while storing",cljs.core.deref(re_frame.trace.traces),e_32207], 0));
}

var G__32209 = seq__32172_32199;
var G__32210 = chunk__32173_32200;
var G__32211 = count__32174_32201;
var G__32212 = (i__32175_32202 + (1));
seq__32172_32199 = G__32209;
chunk__32173_32200 = G__32210;
count__32174_32201 = G__32211;
i__32175_32202 = G__32212;
continue;
} else {
var temp__5735__auto___32213 = cljs.core.seq(seq__32172_32199);
if(temp__5735__auto___32213){
var seq__32172_32214__$1 = temp__5735__auto___32213;
if(cljs.core.chunked_seq_QMARK_(seq__32172_32214__$1)){
var c__4556__auto___32215 = cljs.core.chunk_first(seq__32172_32214__$1);
var G__32216 = cljs.core.chunk_rest(seq__32172_32214__$1);
var G__32217 = c__4556__auto___32215;
var G__32218 = cljs.core.count(c__4556__auto___32215);
var G__32219 = (0);
seq__32172_32199 = G__32216;
chunk__32173_32200 = G__32217;
count__32174_32201 = G__32218;
i__32175_32202 = G__32219;
continue;
} else {
var vec__32191_32220 = cljs.core.first(seq__32172_32214__$1);
var k_32221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191_32220,(0),null);
var cb_32222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191_32220,(1),null);
try{var G__32195_32224 = cljs.core.deref(re_frame.trace.traces);
(cb_32222.cljs$core$IFn$_invoke$arity$1 ? cb_32222.cljs$core$IFn$_invoke$arity$1(G__32195_32224) : cb_32222.call(null,G__32195_32224));
}catch (e32194){var e_32227 = e32194;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32221,"while storing",cljs.core.deref(re_frame.trace.traces),e_32227], 0));
}

var G__32228 = cljs.core.next(seq__32172_32214__$1);
var G__32229 = null;
var G__32230 = (0);
var G__32231 = (0);
seq__32172_32199 = G__32228;
chunk__32173_32200 = G__32229;
count__32174_32201 = G__32230;
i__32175_32202 = G__32231;
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
