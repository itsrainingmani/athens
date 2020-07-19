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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46214){
var map__46215 = p__46214;
var map__46215__$1 = (((((!((map__46215 == null))))?(((((map__46215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46215):map__46215);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__46217_46244 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46218_46245 = null;
var count__46219_46246 = (0);
var i__46220_46247 = (0);
while(true){
if((i__46220_46247 < count__46219_46246)){
var vec__46231_46248 = chunk__46218_46245.cljs$core$IIndexed$_nth$arity$2(null,i__46220_46247);
var k_46249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46231_46248,(0),null);
var cb_46250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46231_46248,(1),null);
try{var G__46235_46251 = cljs.core.deref(re_frame.trace.traces);
(cb_46250.cljs$core$IFn$_invoke$arity$1 ? cb_46250.cljs$core$IFn$_invoke$arity$1(G__46235_46251) : cb_46250.call(null,G__46235_46251));
}catch (e46234){var e_46252 = e46234;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46249,"while storing",cljs.core.deref(re_frame.trace.traces),e_46252], 0));
}

var G__46253 = seq__46217_46244;
var G__46254 = chunk__46218_46245;
var G__46255 = count__46219_46246;
var G__46256 = (i__46220_46247 + (1));
seq__46217_46244 = G__46253;
chunk__46218_46245 = G__46254;
count__46219_46246 = G__46255;
i__46220_46247 = G__46256;
continue;
} else {
var temp__5735__auto___46257 = cljs.core.seq(seq__46217_46244);
if(temp__5735__auto___46257){
var seq__46217_46258__$1 = temp__5735__auto___46257;
if(cljs.core.chunked_seq_QMARK_(seq__46217_46258__$1)){
var c__4609__auto___46259 = cljs.core.chunk_first(seq__46217_46258__$1);
var G__46260 = cljs.core.chunk_rest(seq__46217_46258__$1);
var G__46261 = c__4609__auto___46259;
var G__46262 = cljs.core.count(c__4609__auto___46259);
var G__46263 = (0);
seq__46217_46244 = G__46260;
chunk__46218_46245 = G__46261;
count__46219_46246 = G__46262;
i__46220_46247 = G__46263;
continue;
} else {
var vec__46236_46264 = cljs.core.first(seq__46217_46258__$1);
var k_46265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236_46264,(0),null);
var cb_46266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236_46264,(1),null);
try{var G__46240_46267 = cljs.core.deref(re_frame.trace.traces);
(cb_46266.cljs$core$IFn$_invoke$arity$1 ? cb_46266.cljs$core$IFn$_invoke$arity$1(G__46240_46267) : cb_46266.call(null,G__46240_46267));
}catch (e46239){var e_46268 = e46239;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46265,"while storing",cljs.core.deref(re_frame.trace.traces),e_46268], 0));
}

var G__46269 = cljs.core.next(seq__46217_46258__$1);
var G__46270 = null;
var G__46271 = (0);
var G__46272 = (0);
seq__46217_46244 = G__46269;
chunk__46218_46245 = G__46270;
count__46219_46246 = G__46271;
i__46220_46247 = G__46272;
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
