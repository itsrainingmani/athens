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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__32808){
var map__32809 = p__32808;
var map__32809__$1 = (((((!((map__32809 == null))))?(((((map__32809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32809):map__32809);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__32811_32838 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__32812_32839 = null;
var count__32813_32840 = (0);
var i__32814_32841 = (0);
while(true){
if((i__32814_32841 < count__32813_32840)){
var vec__32825_32842 = chunk__32812_32839.cljs$core$IIndexed$_nth$arity$2(null,i__32814_32841);
var k_32843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825_32842,(0),null);
var cb_32844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825_32842,(1),null);
try{var G__32829_32845 = cljs.core.deref(re_frame.trace.traces);
(cb_32844.cljs$core$IFn$_invoke$arity$1 ? cb_32844.cljs$core$IFn$_invoke$arity$1(G__32829_32845) : cb_32844.call(null,G__32829_32845));
}catch (e32828){var e_32846 = e32828;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32843,"while storing",cljs.core.deref(re_frame.trace.traces),e_32846], 0));
}

var G__32848 = seq__32811_32838;
var G__32849 = chunk__32812_32839;
var G__32850 = count__32813_32840;
var G__32851 = (i__32814_32841 + (1));
seq__32811_32838 = G__32848;
chunk__32812_32839 = G__32849;
count__32813_32840 = G__32850;
i__32814_32841 = G__32851;
continue;
} else {
var temp__5735__auto___32852 = cljs.core.seq(seq__32811_32838);
if(temp__5735__auto___32852){
var seq__32811_32853__$1 = temp__5735__auto___32852;
if(cljs.core.chunked_seq_QMARK_(seq__32811_32853__$1)){
var c__4609__auto___32854 = cljs.core.chunk_first(seq__32811_32853__$1);
var G__32855 = cljs.core.chunk_rest(seq__32811_32853__$1);
var G__32856 = c__4609__auto___32854;
var G__32857 = cljs.core.count(c__4609__auto___32854);
var G__32858 = (0);
seq__32811_32838 = G__32855;
chunk__32812_32839 = G__32856;
count__32813_32840 = G__32857;
i__32814_32841 = G__32858;
continue;
} else {
var vec__32830_32859 = cljs.core.first(seq__32811_32853__$1);
var k_32860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32830_32859,(0),null);
var cb_32861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32830_32859,(1),null);
try{var G__32834_32862 = cljs.core.deref(re_frame.trace.traces);
(cb_32861.cljs$core$IFn$_invoke$arity$1 ? cb_32861.cljs$core$IFn$_invoke$arity$1(G__32834_32862) : cb_32861.call(null,G__32834_32862));
}catch (e32833){var e_32863 = e32833;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32860,"while storing",cljs.core.deref(re_frame.trace.traces),e_32863], 0));
}

var G__32865 = cljs.core.next(seq__32811_32853__$1);
var G__32866 = null;
var G__32867 = (0);
var G__32868 = (0);
seq__32811_32838 = G__32865;
chunk__32812_32839 = G__32866;
count__32813_32840 = G__32867;
i__32814_32841 = G__32868;
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
