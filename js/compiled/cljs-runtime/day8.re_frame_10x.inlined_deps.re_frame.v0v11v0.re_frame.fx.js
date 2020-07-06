goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
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
var _STAR_current_trace_STAR__orig_val__47959 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47960 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47960);

try{try{var seq__47963 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47964 = null;
var count__47965 = (0);
var i__47966 = (0);
while(true){
if((i__47966 < count__47965)){
var vec__47974 = chunk__47964.cljs$core$IIndexed$_nth$arity$2(null,i__47966);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47974,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47974,(1),null);
var temp__5733__auto___48026 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48026)){
var effect_fn_48027 = temp__5733__auto___48026;
(effect_fn_48027.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48027.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48027.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48028 = seq__47963;
var G__48029 = chunk__47964;
var G__48030 = count__47965;
var G__48031 = (i__47966 + (1));
seq__47963 = G__48028;
chunk__47964 = G__48029;
count__47965 = G__48030;
i__47966 = G__48031;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47963);
if(temp__5735__auto__){
var seq__47963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47963__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47963__$1);
var G__48033 = cljs.core.chunk_rest(seq__47963__$1);
var G__48034 = c__4609__auto__;
var G__48035 = cljs.core.count(c__4609__auto__);
var G__48036 = (0);
seq__47963 = G__48033;
chunk__47964 = G__48034;
count__47965 = G__48035;
i__47966 = G__48036;
continue;
} else {
var vec__47977 = cljs.core.first(seq__47963__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47977,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47977,(1),null);
var temp__5733__auto___48037 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48037)){
var effect_fn_48038 = temp__5733__auto___48037;
(effect_fn_48038.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48038.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48038.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48039 = cljs.core.next(seq__47963__$1);
var G__48040 = null;
var G__48041 = (0);
var G__48042 = (0);
seq__47963 = G__48039;
chunk__47964 = G__48040;
count__47965 = G__48041;
i__47966 = G__48042;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47665__auto___48043 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47666__auto___48044 = (end__47665__auto___48043 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47666__auto___48044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47665__auto___48043);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47959);
}} else {
var seq__47980 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47981 = null;
var count__47982 = (0);
var i__47983 = (0);
while(true){
if((i__47983 < count__47982)){
var vec__47990 = chunk__47981.cljs$core$IIndexed$_nth$arity$2(null,i__47983);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47990,(1),null);
var temp__5733__auto___48050 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48050)){
var effect_fn_48051 = temp__5733__auto___48050;
(effect_fn_48051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48051.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48052 = seq__47980;
var G__48053 = chunk__47981;
var G__48054 = count__47982;
var G__48055 = (i__47983 + (1));
seq__47980 = G__48052;
chunk__47981 = G__48053;
count__47982 = G__48054;
i__47983 = G__48055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47980);
if(temp__5735__auto__){
var seq__47980__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47980__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47980__$1);
var G__48056 = cljs.core.chunk_rest(seq__47980__$1);
var G__48057 = c__4609__auto__;
var G__48058 = cljs.core.count(c__4609__auto__);
var G__48059 = (0);
seq__47980 = G__48056;
chunk__47981 = G__48057;
count__47982 = G__48058;
i__47983 = G__48059;
continue;
} else {
var vec__47995 = cljs.core.first(seq__47980__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47995,(1),null);
var temp__5733__auto___48060 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48060)){
var effect_fn_48061 = temp__5733__auto___48060;
(effect_fn_48061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48061.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48062 = cljs.core.next(seq__47980__$1);
var G__48063 = null;
var G__48064 = (0);
var G__48065 = (0);
seq__47980 = G__48062;
chunk__47981 = G__48063;
count__47982 = G__48064;
i__47983 = G__48065;
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
var seq__47999 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48000 = null;
var count__48001 = (0);
var i__48002 = (0);
while(true){
if((i__48002 < count__48001)){
var map__48009 = chunk__48000.cljs$core$IIndexed$_nth$arity$2(null,i__48002);
var map__48009__$1 = (((((!((map__48009 == null))))?(((((map__48009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48009):map__48009);
var effect = map__48009__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48009__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48009__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47999,chunk__48000,count__48001,i__48002,map__48009,map__48009__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47999,chunk__48000,count__48001,i__48002,map__48009,map__48009__$1,effect,ms,dispatch))
,ms);
}


var G__48067 = seq__47999;
var G__48068 = chunk__48000;
var G__48069 = count__48001;
var G__48070 = (i__48002 + (1));
seq__47999 = G__48067;
chunk__48000 = G__48068;
count__48001 = G__48069;
i__48002 = G__48070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47999);
if(temp__5735__auto__){
var seq__47999__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47999__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47999__$1);
var G__48071 = cljs.core.chunk_rest(seq__47999__$1);
var G__48072 = c__4609__auto__;
var G__48073 = cljs.core.count(c__4609__auto__);
var G__48074 = (0);
seq__47999 = G__48071;
chunk__48000 = G__48072;
count__48001 = G__48073;
i__48002 = G__48074;
continue;
} else {
var map__48013 = cljs.core.first(seq__47999__$1);
var map__48013__$1 = (((((!((map__48013 == null))))?(((((map__48013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48013):map__48013);
var effect = map__48013__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47999,chunk__48000,count__48001,i__48002,map__48013,map__48013__$1,effect,ms,dispatch,seq__47999__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47999,chunk__48000,count__48001,i__48002,map__48013,map__48013__$1,effect,ms,dispatch,seq__47999__$1,temp__5735__auto__))
,ms);
}


var G__48075 = cljs.core.next(seq__47999__$1);
var G__48076 = null;
var G__48077 = (0);
var G__48078 = (0);
seq__47999 = G__48075;
chunk__48000 = G__48076;
count__48001 = G__48077;
i__48002 = G__48078;
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
var seq__48018 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48019 = null;
var count__48020 = (0);
var i__48021 = (0);
while(true){
if((i__48021 < count__48020)){
var event = chunk__48019.cljs$core$IIndexed$_nth$arity$2(null,i__48021);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48079 = seq__48018;
var G__48080 = chunk__48019;
var G__48081 = count__48020;
var G__48082 = (i__48021 + (1));
seq__48018 = G__48079;
chunk__48019 = G__48080;
count__48020 = G__48081;
i__48021 = G__48082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48018);
if(temp__5735__auto__){
var seq__48018__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48018__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48018__$1);
var G__48087 = cljs.core.chunk_rest(seq__48018__$1);
var G__48088 = c__4609__auto__;
var G__48089 = cljs.core.count(c__4609__auto__);
var G__48090 = (0);
seq__48018 = G__48087;
chunk__48019 = G__48088;
count__48020 = G__48089;
i__48021 = G__48090;
continue;
} else {
var event = cljs.core.first(seq__48018__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48095 = cljs.core.next(seq__48018__$1);
var G__48096 = null;
var G__48097 = (0);
var G__48098 = (0);
seq__48018 = G__48095;
chunk__48019 = G__48096;
count__48020 = G__48097;
i__48021 = G__48098;
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
var seq__48022 = cljs.core.seq(value);
var chunk__48023 = null;
var count__48024 = (0);
var i__48025 = (0);
while(true){
if((i__48025 < count__48024)){
var event = chunk__48023.cljs$core$IIndexed$_nth$arity$2(null,i__48025);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48103 = seq__48022;
var G__48104 = chunk__48023;
var G__48105 = count__48024;
var G__48106 = (i__48025 + (1));
seq__48022 = G__48103;
chunk__48023 = G__48104;
count__48024 = G__48105;
i__48025 = G__48106;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48022);
if(temp__5735__auto__){
var seq__48022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48022__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48022__$1);
var G__48107 = cljs.core.chunk_rest(seq__48022__$1);
var G__48108 = c__4609__auto__;
var G__48109 = cljs.core.count(c__4609__auto__);
var G__48110 = (0);
seq__48022 = G__48107;
chunk__48023 = G__48108;
count__48024 = G__48109;
i__48025 = G__48110;
continue;
} else {
var event = cljs.core.first(seq__48022__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48111 = cljs.core.next(seq__48022__$1);
var G__48112 = null;
var G__48113 = (0);
var G__48114 = (0);
seq__48022 = G__48111;
chunk__48023 = G__48112;
count__48024 = G__48113;
i__48025 = G__48114;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
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
