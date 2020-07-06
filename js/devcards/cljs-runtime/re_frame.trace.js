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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__67627){
var map__67628 = p__67627;
var map__67628__$1 = (((((!((map__67628 == null))))?(((((map__67628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67628):map__67628);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67628__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67628__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67628__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67628__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__67630_67657 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__67631_67658 = null;
var count__67632_67659 = (0);
var i__67633_67660 = (0);
while(true){
if((i__67633_67660 < count__67632_67659)){
var vec__67644_67661 = chunk__67631_67658.cljs$core$IIndexed$_nth$arity$2(null,i__67633_67660);
var k_67662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67644_67661,(0),null);
var cb_67663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67644_67661,(1),null);
try{var G__67648_67664 = cljs.core.deref(re_frame.trace.traces);
(cb_67663.cljs$core$IFn$_invoke$arity$1 ? cb_67663.cljs$core$IFn$_invoke$arity$1(G__67648_67664) : cb_67663.call(null,G__67648_67664));
}catch (e67647){var e_67665 = e67647;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_67662,"while storing",cljs.core.deref(re_frame.trace.traces),e_67665], 0));
}

var G__67666 = seq__67630_67657;
var G__67667 = chunk__67631_67658;
var G__67668 = count__67632_67659;
var G__67669 = (i__67633_67660 + (1));
seq__67630_67657 = G__67666;
chunk__67631_67658 = G__67667;
count__67632_67659 = G__67668;
i__67633_67660 = G__67669;
continue;
} else {
var temp__5735__auto___67670 = cljs.core.seq(seq__67630_67657);
if(temp__5735__auto___67670){
var seq__67630_67671__$1 = temp__5735__auto___67670;
if(cljs.core.chunked_seq_QMARK_(seq__67630_67671__$1)){
var c__4609__auto___67672 = cljs.core.chunk_first(seq__67630_67671__$1);
var G__67673 = cljs.core.chunk_rest(seq__67630_67671__$1);
var G__67674 = c__4609__auto___67672;
var G__67675 = cljs.core.count(c__4609__auto___67672);
var G__67676 = (0);
seq__67630_67657 = G__67673;
chunk__67631_67658 = G__67674;
count__67632_67659 = G__67675;
i__67633_67660 = G__67676;
continue;
} else {
var vec__67649_67677 = cljs.core.first(seq__67630_67671__$1);
var k_67678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67649_67677,(0),null);
var cb_67679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67649_67677,(1),null);
try{var G__67653_67682 = cljs.core.deref(re_frame.trace.traces);
(cb_67679.cljs$core$IFn$_invoke$arity$1 ? cb_67679.cljs$core$IFn$_invoke$arity$1(G__67653_67682) : cb_67679.call(null,G__67653_67682));
}catch (e67652){var e_67683 = e67652;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_67678,"while storing",cljs.core.deref(re_frame.trace.traces),e_67683], 0));
}

var G__67684 = cljs.core.next(seq__67630_67671__$1);
var G__67685 = null;
var G__67686 = (0);
var G__67687 = (0);
seq__67630_67657 = G__67684;
chunk__67631_67658 = G__67685;
count__67632_67659 = G__67686;
i__67633_67660 = G__67687;
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
