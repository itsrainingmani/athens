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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45949){
var map__45950 = p__45949;
var map__45950__$1 = (((((!((map__45950 == null))))?(((((map__45950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45950):map__45950);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__45952_45979 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45953_45980 = null;
var count__45954_45981 = (0);
var i__45955_45982 = (0);
while(true){
if((i__45955_45982 < count__45954_45981)){
var vec__45966_45983 = chunk__45953_45980.cljs$core$IIndexed$_nth$arity$2(null,i__45955_45982);
var k_45984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966_45983,(0),null);
var cb_45985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966_45983,(1),null);
try{var G__45970_45986 = cljs.core.deref(re_frame.trace.traces);
(cb_45985.cljs$core$IFn$_invoke$arity$1 ? cb_45985.cljs$core$IFn$_invoke$arity$1(G__45970_45986) : cb_45985.call(null,G__45970_45986));
}catch (e45969){var e_45987 = e45969;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45984,"while storing",cljs.core.deref(re_frame.trace.traces),e_45987], 0));
}

var G__45988 = seq__45952_45979;
var G__45989 = chunk__45953_45980;
var G__45990 = count__45954_45981;
var G__45991 = (i__45955_45982 + (1));
seq__45952_45979 = G__45988;
chunk__45953_45980 = G__45989;
count__45954_45981 = G__45990;
i__45955_45982 = G__45991;
continue;
} else {
var temp__5735__auto___45992 = cljs.core.seq(seq__45952_45979);
if(temp__5735__auto___45992){
var seq__45952_45993__$1 = temp__5735__auto___45992;
if(cljs.core.chunked_seq_QMARK_(seq__45952_45993__$1)){
var c__4609__auto___45994 = cljs.core.chunk_first(seq__45952_45993__$1);
var G__45995 = cljs.core.chunk_rest(seq__45952_45993__$1);
var G__45996 = c__4609__auto___45994;
var G__45997 = cljs.core.count(c__4609__auto___45994);
var G__45998 = (0);
seq__45952_45979 = G__45995;
chunk__45953_45980 = G__45996;
count__45954_45981 = G__45997;
i__45955_45982 = G__45998;
continue;
} else {
var vec__45971_45999 = cljs.core.first(seq__45952_45993__$1);
var k_46000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45971_45999,(0),null);
var cb_46001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45971_45999,(1),null);
try{var G__45975_46002 = cljs.core.deref(re_frame.trace.traces);
(cb_46001.cljs$core$IFn$_invoke$arity$1 ? cb_46001.cljs$core$IFn$_invoke$arity$1(G__45975_46002) : cb_46001.call(null,G__45975_46002));
}catch (e45974){var e_46003 = e45974;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46000,"while storing",cljs.core.deref(re_frame.trace.traces),e_46003], 0));
}

var G__46004 = cljs.core.next(seq__45952_45993__$1);
var G__46005 = null;
var G__46006 = (0);
var G__46007 = (0);
seq__45952_45979 = G__46004;
chunk__45953_45980 = G__46005;
count__45954_45981 = G__46006;
i__45955_45982 = G__46007;
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
