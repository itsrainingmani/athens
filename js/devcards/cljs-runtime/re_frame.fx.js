goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51197 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51198 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51198);

try{try{var seq__51199 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51200 = null;
var count__51201 = (0);
var i__51202 = (0);
while(true){
if((i__51202 < count__51201)){
var vec__51209 = chunk__51200.cljs$core$IIndexed$_nth$arity$2(null,i__51202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51209,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51209,(1),null);
var temp__5733__auto___51254 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51254)){
var effect_fn_51255 = temp__5733__auto___51254;
(effect_fn_51255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51255.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51256 = seq__51199;
var G__51257 = chunk__51200;
var G__51258 = count__51201;
var G__51259 = (i__51202 + (1));
seq__51199 = G__51256;
chunk__51200 = G__51257;
count__51201 = G__51258;
i__51202 = G__51259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51199);
if(temp__5735__auto__){
var seq__51199__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51199__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51199__$1);
var G__51260 = cljs.core.chunk_rest(seq__51199__$1);
var G__51261 = c__4556__auto__;
var G__51262 = cljs.core.count(c__4556__auto__);
var G__51263 = (0);
seq__51199 = G__51260;
chunk__51200 = G__51261;
count__51201 = G__51262;
i__51202 = G__51263;
continue;
} else {
var vec__51212 = cljs.core.first(seq__51199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51212,(1),null);
var temp__5733__auto___51264 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51264)){
var effect_fn_51265 = temp__5733__auto___51264;
(effect_fn_51265.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51265.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51265.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51266 = cljs.core.next(seq__51199__$1);
var G__51267 = null;
var G__51268 = (0);
var G__51269 = (0);
seq__51199 = G__51266;
chunk__51200 = G__51267;
count__51201 = G__51268;
i__51202 = G__51269;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__50300__auto___51270 = re_frame.interop.now();
var duration__50301__auto___51271 = (end__50300__auto___51270 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__50301__auto___51271,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__50300__auto___51270);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51197);
}} else {
var seq__51217 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51218 = null;
var count__51219 = (0);
var i__51220 = (0);
while(true){
if((i__51220 < count__51219)){
var vec__51227 = chunk__51218.cljs$core$IIndexed$_nth$arity$2(null,i__51220);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227,(1),null);
var temp__5733__auto___51272 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51272)){
var effect_fn_51273 = temp__5733__auto___51272;
(effect_fn_51273.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51273.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51273.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51274 = seq__51217;
var G__51275 = chunk__51218;
var G__51276 = count__51219;
var G__51277 = (i__51220 + (1));
seq__51217 = G__51274;
chunk__51218 = G__51275;
count__51219 = G__51276;
i__51220 = G__51277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51217);
if(temp__5735__auto__){
var seq__51217__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51217__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51217__$1);
var G__51278 = cljs.core.chunk_rest(seq__51217__$1);
var G__51279 = c__4556__auto__;
var G__51280 = cljs.core.count(c__4556__auto__);
var G__51281 = (0);
seq__51217 = G__51278;
chunk__51218 = G__51279;
count__51219 = G__51280;
i__51220 = G__51281;
continue;
} else {
var vec__51230 = cljs.core.first(seq__51217__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51230,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51230,(1),null);
var temp__5733__auto___51282 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51282)){
var effect_fn_51283 = temp__5733__auto___51282;
(effect_fn_51283.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51283.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51283.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51284 = cljs.core.next(seq__51217__$1);
var G__51285 = null;
var G__51286 = (0);
var G__51287 = (0);
seq__51217 = G__51284;
chunk__51218 = G__51285;
count__51219 = G__51286;
i__51220 = G__51287;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51234 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51235 = null;
var count__51236 = (0);
var i__51237 = (0);
while(true){
if((i__51237 < count__51236)){
var map__51242 = chunk__51235.cljs$core$IIndexed$_nth$arity$2(null,i__51237);
var map__51242__$1 = (((((!((map__51242 == null))))?(((((map__51242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51242):map__51242);
var effect = map__51242__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51242__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51242__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51234,chunk__51235,count__51236,i__51237,map__51242,map__51242__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51234,chunk__51235,count__51236,i__51237,map__51242,map__51242__$1,effect,ms,dispatch))
,ms);
}


var G__51288 = seq__51234;
var G__51289 = chunk__51235;
var G__51290 = count__51236;
var G__51291 = (i__51237 + (1));
seq__51234 = G__51288;
chunk__51235 = G__51289;
count__51236 = G__51290;
i__51237 = G__51291;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51234);
if(temp__5735__auto__){
var seq__51234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51234__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51234__$1);
var G__51292 = cljs.core.chunk_rest(seq__51234__$1);
var G__51293 = c__4556__auto__;
var G__51294 = cljs.core.count(c__4556__auto__);
var G__51295 = (0);
seq__51234 = G__51292;
chunk__51235 = G__51293;
count__51236 = G__51294;
i__51237 = G__51295;
continue;
} else {
var map__51244 = cljs.core.first(seq__51234__$1);
var map__51244__$1 = (((((!((map__51244 == null))))?(((((map__51244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51244):map__51244);
var effect = map__51244__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51234,chunk__51235,count__51236,i__51237,map__51244,map__51244__$1,effect,ms,dispatch,seq__51234__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51234,chunk__51235,count__51236,i__51237,map__51244,map__51244__$1,effect,ms,dispatch,seq__51234__$1,temp__5735__auto__))
,ms);
}


var G__51299 = cljs.core.next(seq__51234__$1);
var G__51300 = null;
var G__51301 = (0);
var G__51302 = (0);
seq__51234 = G__51299;
chunk__51235 = G__51300;
count__51236 = G__51301;
i__51237 = G__51302;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51246 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51247 = null;
var count__51248 = (0);
var i__51249 = (0);
while(true){
if((i__51249 < count__51248)){
var event = chunk__51247.cljs$core$IIndexed$_nth$arity$2(null,i__51249);
re_frame.router.dispatch(event);


var G__51303 = seq__51246;
var G__51304 = chunk__51247;
var G__51305 = count__51248;
var G__51306 = (i__51249 + (1));
seq__51246 = G__51303;
chunk__51247 = G__51304;
count__51248 = G__51305;
i__51249 = G__51306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51246);
if(temp__5735__auto__){
var seq__51246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51246__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51246__$1);
var G__51307 = cljs.core.chunk_rest(seq__51246__$1);
var G__51308 = c__4556__auto__;
var G__51309 = cljs.core.count(c__4556__auto__);
var G__51310 = (0);
seq__51246 = G__51307;
chunk__51247 = G__51308;
count__51248 = G__51309;
i__51249 = G__51310;
continue;
} else {
var event = cljs.core.first(seq__51246__$1);
re_frame.router.dispatch(event);


var G__51311 = cljs.core.next(seq__51246__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51246 = G__51311;
chunk__51247 = G__51312;
count__51248 = G__51313;
i__51249 = G__51314;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51250 = cljs.core.seq(value);
var chunk__51251 = null;
var count__51252 = (0);
var i__51253 = (0);
while(true){
if((i__51253 < count__51252)){
var event = chunk__51251.cljs$core$IIndexed$_nth$arity$2(null,i__51253);
clear_event(event);


var G__51317 = seq__51250;
var G__51318 = chunk__51251;
var G__51319 = count__51252;
var G__51320 = (i__51253 + (1));
seq__51250 = G__51317;
chunk__51251 = G__51318;
count__51252 = G__51319;
i__51253 = G__51320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51250);
if(temp__5735__auto__){
var seq__51250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51250__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51250__$1);
var G__51322 = cljs.core.chunk_rest(seq__51250__$1);
var G__51323 = c__4556__auto__;
var G__51324 = cljs.core.count(c__4556__auto__);
var G__51325 = (0);
seq__51250 = G__51322;
chunk__51251 = G__51323;
count__51252 = G__51324;
i__51253 = G__51325;
continue;
} else {
var event = cljs.core.first(seq__51250__$1);
clear_event(event);


var G__51327 = cljs.core.next(seq__51250__$1);
var G__51328 = null;
var G__51329 = (0);
var G__51330 = (0);
seq__51250 = G__51327;
chunk__51251 = G__51328;
count__51252 = G__51329;
i__51253 = G__51330;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
