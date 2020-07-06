goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$start_trace(p__27892){
var map__27893 = p__27892;
var map__27893__$1 = (((((!((map__27893 == null))))?(((((map__27893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27893):map__27893);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$tracing_cb_debounced(){
var seq__27895_27924 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs));
var chunk__27896_27925 = null;
var count__27897_27926 = (0);
var i__27898_27927 = (0);
while(true){
if((i__27898_27927 < count__27897_27926)){
var vec__27909_27930 = chunk__27896_27925.cljs$core$IIndexed$_nth$arity$2(null,i__27898_27927);
var k_27931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909_27930,(0),null);
var cb_27932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909_27930,(1),null);
try{var G__27913_27933 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces);
(cb_27932.cljs$core$IFn$_invoke$arity$1 ? cb_27932.cljs$core$IFn$_invoke$arity$1(G__27913_27933) : cb_27932.call(null,G__27913_27933));
}catch (e27912){var e_27934 = e27912;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27931,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces),e_27934], 0));
}

var G__27935 = seq__27895_27924;
var G__27936 = chunk__27896_27925;
var G__27937 = count__27897_27926;
var G__27938 = (i__27898_27927 + (1));
seq__27895_27924 = G__27935;
chunk__27896_27925 = G__27936;
count__27897_27926 = G__27937;
i__27898_27927 = G__27938;
continue;
} else {
var temp__5735__auto___27939 = cljs.core.seq(seq__27895_27924);
if(temp__5735__auto___27939){
var seq__27895_27940__$1 = temp__5735__auto___27939;
if(cljs.core.chunked_seq_QMARK_(seq__27895_27940__$1)){
var c__4609__auto___27941 = cljs.core.chunk_first(seq__27895_27940__$1);
var G__27942 = cljs.core.chunk_rest(seq__27895_27940__$1);
var G__27943 = c__4609__auto___27941;
var G__27944 = cljs.core.count(c__4609__auto___27941);
var G__27945 = (0);
seq__27895_27924 = G__27942;
chunk__27896_27925 = G__27943;
count__27897_27926 = G__27944;
i__27898_27927 = G__27945;
continue;
} else {
var vec__27914_27946 = cljs.core.first(seq__27895_27940__$1);
var k_27947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914_27946,(0),null);
var cb_27948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914_27946,(1),null);
try{var G__27918_27949 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces);
(cb_27948.cljs$core$IFn$_invoke$arity$1 ? cb_27948.cljs$core$IFn$_invoke$arity$1(G__27918_27949) : cb_27948.call(null,G__27918_27949));
}catch (e27917){var e_27950 = e27917;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27947,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces),e_27950], 0));
}

var G__27951 = cljs.core.next(seq__27895_27940__$1);
var G__27952 = null;
var G__27953 = (0);
var G__27954 = (0);
seq__27895_27924 = G__27951;
chunk__27896_27925 = G__27952;
count__27897_27926 = G__27953;
i__27898_27927 = G__27954;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.js.map
