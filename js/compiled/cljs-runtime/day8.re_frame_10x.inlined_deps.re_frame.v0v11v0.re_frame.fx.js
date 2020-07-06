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
var _STAR_current_trace_STAR__orig_val__28153 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28154 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28154);

try{try{var seq__28155 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28156 = null;
var count__28157 = (0);
var i__28158 = (0);
while(true){
if((i__28158 < count__28157)){
var vec__28165 = chunk__28156.cljs$core$IIndexed$_nth$arity$2(null,i__28158);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(1),null);
var temp__5733__auto___28210 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28210)){
var effect_fn_28211 = temp__5733__auto___28210;
(effect_fn_28211.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28211.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28211.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28212 = seq__28155;
var G__28213 = chunk__28156;
var G__28214 = count__28157;
var G__28215 = (i__28158 + (1));
seq__28155 = G__28212;
chunk__28156 = G__28213;
count__28157 = G__28214;
i__28158 = G__28215;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28155);
if(temp__5735__auto__){
var seq__28155__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28155__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28155__$1);
var G__28216 = cljs.core.chunk_rest(seq__28155__$1);
var G__28217 = c__4609__auto__;
var G__28218 = cljs.core.count(c__4609__auto__);
var G__28219 = (0);
seq__28155 = G__28216;
chunk__28156 = G__28217;
count__28157 = G__28218;
i__28158 = G__28219;
continue;
} else {
var vec__28168 = cljs.core.first(seq__28155__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
var temp__5733__auto___28220 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28220)){
var effect_fn_28221 = temp__5733__auto___28220;
(effect_fn_28221.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28221.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28221.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28222 = cljs.core.next(seq__28155__$1);
var G__28223 = null;
var G__28224 = (0);
var G__28225 = (0);
seq__28155 = G__28222;
chunk__28156 = G__28223;
count__28157 = G__28224;
i__28158 = G__28225;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27872__auto___28226 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__27873__auto___28227 = (end__27872__auto___28226 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27873__auto___28227,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__27872__auto___28226);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28153);
}} else {
var seq__28171 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28172 = null;
var count__28173 = (0);
var i__28174 = (0);
while(true){
if((i__28174 < count__28173)){
var vec__28183 = chunk__28172.cljs$core$IIndexed$_nth$arity$2(null,i__28174);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183,(1),null);
var temp__5733__auto___28228 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28228)){
var effect_fn_28229 = temp__5733__auto___28228;
(effect_fn_28229.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28229.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28229.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28230 = seq__28171;
var G__28231 = chunk__28172;
var G__28232 = count__28173;
var G__28233 = (i__28174 + (1));
seq__28171 = G__28230;
chunk__28172 = G__28231;
count__28173 = G__28232;
i__28174 = G__28233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28171);
if(temp__5735__auto__){
var seq__28171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28171__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28171__$1);
var G__28234 = cljs.core.chunk_rest(seq__28171__$1);
var G__28235 = c__4609__auto__;
var G__28236 = cljs.core.count(c__4609__auto__);
var G__28237 = (0);
seq__28171 = G__28234;
chunk__28172 = G__28235;
count__28173 = G__28236;
i__28174 = G__28237;
continue;
} else {
var vec__28186 = cljs.core.first(seq__28171__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28186,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28186,(1),null);
var temp__5733__auto___28238 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28238)){
var effect_fn_28239 = temp__5733__auto___28238;
(effect_fn_28239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28239.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28240 = cljs.core.next(seq__28171__$1);
var G__28241 = null;
var G__28242 = (0);
var G__28243 = (0);
seq__28171 = G__28240;
chunk__28172 = G__28241;
count__28173 = G__28242;
i__28174 = G__28243;
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
var seq__28189 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28190 = null;
var count__28191 = (0);
var i__28192 = (0);
while(true){
if((i__28192 < count__28191)){
var map__28198 = chunk__28190.cljs$core$IIndexed$_nth$arity$2(null,i__28192);
var map__28198__$1 = (((((!((map__28198 == null))))?(((((map__28198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28198):map__28198);
var effect = map__28198__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28198__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28198__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__28189,chunk__28190,count__28191,i__28192,map__28198,map__28198__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__28189,chunk__28190,count__28191,i__28192,map__28198,map__28198__$1,effect,ms,dispatch))
,ms);
}


var G__28247 = seq__28189;
var G__28248 = chunk__28190;
var G__28249 = count__28191;
var G__28250 = (i__28192 + (1));
seq__28189 = G__28247;
chunk__28190 = G__28248;
count__28191 = G__28249;
i__28192 = G__28250;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28189);
if(temp__5735__auto__){
var seq__28189__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28189__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28189__$1);
var G__28251 = cljs.core.chunk_rest(seq__28189__$1);
var G__28252 = c__4609__auto__;
var G__28253 = cljs.core.count(c__4609__auto__);
var G__28254 = (0);
seq__28189 = G__28251;
chunk__28190 = G__28252;
count__28191 = G__28253;
i__28192 = G__28254;
continue;
} else {
var map__28200 = cljs.core.first(seq__28189__$1);
var map__28200__$1 = (((((!((map__28200 == null))))?(((((map__28200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28200):map__28200);
var effect = map__28200__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28200__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28200__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__28189,chunk__28190,count__28191,i__28192,map__28200,map__28200__$1,effect,ms,dispatch,seq__28189__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__28189,chunk__28190,count__28191,i__28192,map__28200,map__28200__$1,effect,ms,dispatch,seq__28189__$1,temp__5735__auto__))
,ms);
}


var G__28255 = cljs.core.next(seq__28189__$1);
var G__28256 = null;
var G__28257 = (0);
var G__28258 = (0);
seq__28189 = G__28255;
chunk__28190 = G__28256;
count__28191 = G__28257;
i__28192 = G__28258;
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
var seq__28202 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28203 = null;
var count__28204 = (0);
var i__28205 = (0);
while(true){
if((i__28205 < count__28204)){
var event = chunk__28203.cljs$core$IIndexed$_nth$arity$2(null,i__28205);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__28263 = seq__28202;
var G__28264 = chunk__28203;
var G__28265 = count__28204;
var G__28266 = (i__28205 + (1));
seq__28202 = G__28263;
chunk__28203 = G__28264;
count__28204 = G__28265;
i__28205 = G__28266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28202);
if(temp__5735__auto__){
var seq__28202__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28202__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28202__$1);
var G__28269 = cljs.core.chunk_rest(seq__28202__$1);
var G__28270 = c__4609__auto__;
var G__28271 = cljs.core.count(c__4609__auto__);
var G__28272 = (0);
seq__28202 = G__28269;
chunk__28203 = G__28270;
count__28204 = G__28271;
i__28205 = G__28272;
continue;
} else {
var event = cljs.core.first(seq__28202__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__28273 = cljs.core.next(seq__28202__$1);
var G__28274 = null;
var G__28275 = (0);
var G__28276 = (0);
seq__28202 = G__28273;
chunk__28203 = G__28274;
count__28204 = G__28275;
i__28205 = G__28276;
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
var seq__28206 = cljs.core.seq(value);
var chunk__28207 = null;
var count__28208 = (0);
var i__28209 = (0);
while(true){
if((i__28209 < count__28208)){
var event = chunk__28207.cljs$core$IIndexed$_nth$arity$2(null,i__28209);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__28277 = seq__28206;
var G__28278 = chunk__28207;
var G__28279 = count__28208;
var G__28280 = (i__28209 + (1));
seq__28206 = G__28277;
chunk__28207 = G__28278;
count__28208 = G__28279;
i__28209 = G__28280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28206);
if(temp__5735__auto__){
var seq__28206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28206__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28206__$1);
var G__28281 = cljs.core.chunk_rest(seq__28206__$1);
var G__28282 = c__4609__auto__;
var G__28283 = cljs.core.count(c__4609__auto__);
var G__28284 = (0);
seq__28206 = G__28281;
chunk__28207 = G__28282;
count__28208 = G__28283;
i__28209 = G__28284;
continue;
} else {
var event = cljs.core.first(seq__28206__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__28287 = cljs.core.next(seq__28206__$1);
var G__28288 = null;
var G__28289 = (0);
var G__28290 = (0);
seq__28206 = G__28287;
chunk__28207 = G__28288;
count__28208 = G__28289;
i__28209 = G__28290;
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
