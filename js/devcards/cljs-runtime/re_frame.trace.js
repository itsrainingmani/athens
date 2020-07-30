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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__33578){
var map__33579 = p__33578;
var map__33579__$1 = (((((!((map__33579 == null))))?(((((map__33579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33579):map__33579);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__33581_33612 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__33582_33613 = null;
var count__33583_33614 = (0);
var i__33584_33615 = (0);
while(true){
if((i__33584_33615 < count__33583_33614)){
var vec__33595_33616 = chunk__33582_33613.cljs$core$IIndexed$_nth$arity$2(null,i__33584_33615);
var k_33617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33595_33616,(0),null);
var cb_33618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33595_33616,(1),null);
try{var G__33599_33619 = cljs.core.deref(re_frame.trace.traces);
(cb_33618.cljs$core$IFn$_invoke$arity$1 ? cb_33618.cljs$core$IFn$_invoke$arity$1(G__33599_33619) : cb_33618.call(null,G__33599_33619));
}catch (e33598){var e_33620 = e33598;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33617,"while storing",cljs.core.deref(re_frame.trace.traces),e_33620], 0));
}

var G__33621 = seq__33581_33612;
var G__33622 = chunk__33582_33613;
var G__33623 = count__33583_33614;
var G__33624 = (i__33584_33615 + (1));
seq__33581_33612 = G__33621;
chunk__33582_33613 = G__33622;
count__33583_33614 = G__33623;
i__33584_33615 = G__33624;
continue;
} else {
var temp__5735__auto___33626 = cljs.core.seq(seq__33581_33612);
if(temp__5735__auto___33626){
var seq__33581_33627__$1 = temp__5735__auto___33626;
if(cljs.core.chunked_seq_QMARK_(seq__33581_33627__$1)){
var c__4609__auto___33629 = cljs.core.chunk_first(seq__33581_33627__$1);
var G__33630 = cljs.core.chunk_rest(seq__33581_33627__$1);
var G__33631 = c__4609__auto___33629;
var G__33632 = cljs.core.count(c__4609__auto___33629);
var G__33633 = (0);
seq__33581_33612 = G__33630;
chunk__33582_33613 = G__33631;
count__33583_33614 = G__33632;
i__33584_33615 = G__33633;
continue;
} else {
var vec__33600_33634 = cljs.core.first(seq__33581_33627__$1);
var k_33635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600_33634,(0),null);
var cb_33636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33600_33634,(1),null);
try{var G__33604_33637 = cljs.core.deref(re_frame.trace.traces);
(cb_33636.cljs$core$IFn$_invoke$arity$1 ? cb_33636.cljs$core$IFn$_invoke$arity$1(G__33604_33637) : cb_33636.call(null,G__33604_33637));
}catch (e33603){var e_33638 = e33603;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33635,"while storing",cljs.core.deref(re_frame.trace.traces),e_33638], 0));
}

var G__33639 = cljs.core.next(seq__33581_33627__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__33581_33612 = G__33639;
chunk__33582_33613 = G__33640;
count__33583_33614 = G__33641;
i__33584_33615 = G__33642;
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
