goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__27711 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27712 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27712);

try{try{var seq__27713 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27714 = null;
var count__27715 = (0);
var i__27716 = (0);
while(true){
if((i__27716 < count__27715)){
var vec__27723 = chunk__27714.cljs$core$IIndexed$_nth$arity$2(null,i__27716);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,(1),null);
var temp__5733__auto___27768 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27768)){
var effect_fn_27769 = temp__5733__auto___27768;
(effect_fn_27769.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27769.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27769.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27770 = seq__27713;
var G__27771 = chunk__27714;
var G__27772 = count__27715;
var G__27773 = (i__27716 + (1));
seq__27713 = G__27770;
chunk__27714 = G__27771;
count__27715 = G__27772;
i__27716 = G__27773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27713);
if(temp__5735__auto__){
var seq__27713__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27713__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27713__$1);
var G__27774 = cljs.core.chunk_rest(seq__27713__$1);
var G__27775 = c__4556__auto__;
var G__27776 = cljs.core.count(c__4556__auto__);
var G__27777 = (0);
seq__27713 = G__27774;
chunk__27714 = G__27775;
count__27715 = G__27776;
i__27716 = G__27777;
continue;
} else {
var vec__27726 = cljs.core.first(seq__27713__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27726,(1),null);
var temp__5733__auto___27778 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27778)){
var effect_fn_27779 = temp__5733__auto___27778;
(effect_fn_27779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27779.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27780 = cljs.core.next(seq__27713__$1);
var G__27781 = null;
var G__27782 = (0);
var G__27783 = (0);
seq__27713 = G__27780;
chunk__27714 = G__27781;
count__27715 = G__27782;
i__27716 = G__27783;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27417__auto___27784 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__27418__auto___27785 = (end__27417__auto___27784 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27418__auto___27785,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__27417__auto___27784);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27711);
}} else {
var seq__27731 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27732 = null;
var count__27733 = (0);
var i__27734 = (0);
while(true){
if((i__27734 < count__27733)){
var vec__27741 = chunk__27732.cljs$core$IIndexed$_nth$arity$2(null,i__27734);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(1),null);
var temp__5733__auto___27786 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27786)){
var effect_fn_27787 = temp__5733__auto___27786;
(effect_fn_27787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27787.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27788 = seq__27731;
var G__27789 = chunk__27732;
var G__27790 = count__27733;
var G__27791 = (i__27734 + (1));
seq__27731 = G__27788;
chunk__27732 = G__27789;
count__27733 = G__27790;
i__27734 = G__27791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27731);
if(temp__5735__auto__){
var seq__27731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27731__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27731__$1);
var G__27792 = cljs.core.chunk_rest(seq__27731__$1);
var G__27793 = c__4556__auto__;
var G__27794 = cljs.core.count(c__4556__auto__);
var G__27795 = (0);
seq__27731 = G__27792;
chunk__27732 = G__27793;
count__27733 = G__27794;
i__27734 = G__27795;
continue;
} else {
var vec__27744 = cljs.core.first(seq__27731__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(1),null);
var temp__5733__auto___27796 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___27796)){
var effect_fn_27797 = temp__5733__auto___27796;
(effect_fn_27797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27797.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27798 = cljs.core.next(seq__27731__$1);
var G__27799 = null;
var G__27800 = (0);
var G__27801 = (0);
seq__27731 = G__27798;
chunk__27732 = G__27799;
count__27733 = G__27800;
i__27734 = G__27801;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27748 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27749 = null;
var count__27750 = (0);
var i__27751 = (0);
while(true){
if((i__27751 < count__27750)){
var map__27756 = chunk__27749.cljs$core$IIndexed$_nth$arity$2(null,i__27751);
var map__27756__$1 = (((((!((map__27756 == null))))?(((((map__27756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27756):map__27756);
var effect = map__27756__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27748,chunk__27749,count__27750,i__27751,map__27756,map__27756__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27748,chunk__27749,count__27750,i__27751,map__27756,map__27756__$1,effect,ms,dispatch))
,ms);
}


var G__27802 = seq__27748;
var G__27803 = chunk__27749;
var G__27804 = count__27750;
var G__27805 = (i__27751 + (1));
seq__27748 = G__27802;
chunk__27749 = G__27803;
count__27750 = G__27804;
i__27751 = G__27805;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27748);
if(temp__5735__auto__){
var seq__27748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27748__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27748__$1);
var G__27809 = cljs.core.chunk_rest(seq__27748__$1);
var G__27810 = c__4556__auto__;
var G__27811 = cljs.core.count(c__4556__auto__);
var G__27812 = (0);
seq__27748 = G__27809;
chunk__27749 = G__27810;
count__27750 = G__27811;
i__27751 = G__27812;
continue;
} else {
var map__27758 = cljs.core.first(seq__27748__$1);
var map__27758__$1 = (((((!((map__27758 == null))))?(((((map__27758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27758):map__27758);
var effect = map__27758__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27758__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27758__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__27748,chunk__27749,count__27750,i__27751,map__27758,map__27758__$1,effect,ms,dispatch,seq__27748__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__27748,chunk__27749,count__27750,i__27751,map__27758,map__27758__$1,effect,ms,dispatch,seq__27748__$1,temp__5735__auto__))
,ms);
}


var G__27813 = cljs.core.next(seq__27748__$1);
var G__27814 = null;
var G__27815 = (0);
var G__27816 = (0);
seq__27748 = G__27813;
chunk__27749 = G__27814;
count__27750 = G__27815;
i__27751 = G__27816;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27760 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27761 = null;
var count__27762 = (0);
var i__27763 = (0);
while(true){
if((i__27763 < count__27762)){
var event = chunk__27761.cljs$core$IIndexed$_nth$arity$2(null,i__27763);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27817 = seq__27760;
var G__27818 = chunk__27761;
var G__27819 = count__27762;
var G__27820 = (i__27763 + (1));
seq__27760 = G__27817;
chunk__27761 = G__27818;
count__27762 = G__27819;
i__27763 = G__27820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27760);
if(temp__5735__auto__){
var seq__27760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27760__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27760__$1);
var G__27821 = cljs.core.chunk_rest(seq__27760__$1);
var G__27822 = c__4556__auto__;
var G__27824 = cljs.core.count(c__4556__auto__);
var G__27825 = (0);
seq__27760 = G__27821;
chunk__27761 = G__27822;
count__27762 = G__27824;
i__27763 = G__27825;
continue;
} else {
var event = cljs.core.first(seq__27760__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__27827 = cljs.core.next(seq__27760__$1);
var G__27828 = null;
var G__27829 = (0);
var G__27830 = (0);
seq__27760 = G__27827;
chunk__27761 = G__27828;
count__27762 = G__27829;
i__27763 = G__27830;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27764 = cljs.core.seq(value);
var chunk__27765 = null;
var count__27766 = (0);
var i__27767 = (0);
while(true){
if((i__27767 < count__27766)){
var event = chunk__27765.cljs$core$IIndexed$_nth$arity$2(null,i__27767);
clear_event(event);


var G__27833 = seq__27764;
var G__27834 = chunk__27765;
var G__27835 = count__27766;
var G__27836 = (i__27767 + (1));
seq__27764 = G__27833;
chunk__27765 = G__27834;
count__27766 = G__27835;
i__27767 = G__27836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27764);
if(temp__5735__auto__){
var seq__27764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27764__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27764__$1);
var G__27837 = cljs.core.chunk_rest(seq__27764__$1);
var G__27838 = c__4556__auto__;
var G__27839 = cljs.core.count(c__4556__auto__);
var G__27840 = (0);
seq__27764 = G__27837;
chunk__27765 = G__27838;
count__27766 = G__27839;
i__27767 = G__27840;
continue;
} else {
var event = cljs.core.first(seq__27764__$1);
clear_event(event);


var G__27842 = cljs.core.next(seq__27764__$1);
var G__27843 = null;
var G__27844 = (0);
var G__27845 = (0);
seq__27764 = G__27842;
chunk__27765 = G__27843;
count__27766 = G__27844;
i__27767 = G__27845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
