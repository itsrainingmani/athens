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
var _STAR_current_trace_STAR__orig_val__52201 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52202 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52202);

try{try{var seq__52203 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52204 = null;
var count__52205 = (0);
var i__52206 = (0);
while(true){
if((i__52206 < count__52205)){
var vec__52213 = chunk__52204.cljs$core$IIndexed$_nth$arity$2(null,i__52206);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52213,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52213,(1),null);
var temp__5733__auto___52258 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52258)){
var effect_fn_52259 = temp__5733__auto___52258;
(effect_fn_52259.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52259.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52259.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52260 = seq__52203;
var G__52261 = chunk__52204;
var G__52262 = count__52205;
var G__52263 = (i__52206 + (1));
seq__52203 = G__52260;
chunk__52204 = G__52261;
count__52205 = G__52262;
i__52206 = G__52263;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52203);
if(temp__5735__auto__){
var seq__52203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52203__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52203__$1);
var G__52264 = cljs.core.chunk_rest(seq__52203__$1);
var G__52265 = c__4609__auto__;
var G__52266 = cljs.core.count(c__4609__auto__);
var G__52267 = (0);
seq__52203 = G__52264;
chunk__52204 = G__52265;
count__52205 = G__52266;
i__52206 = G__52267;
continue;
} else {
var vec__52216 = cljs.core.first(seq__52203__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(1),null);
var temp__5733__auto___52268 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52268)){
var effect_fn_52269 = temp__5733__auto___52268;
(effect_fn_52269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52270 = cljs.core.next(seq__52203__$1);
var G__52271 = null;
var G__52272 = (0);
var G__52273 = (0);
seq__52203 = G__52270;
chunk__52204 = G__52271;
count__52205 = G__52272;
i__52206 = G__52273;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51231__auto___52274 = re_frame.interop.now();
var duration__51232__auto___52275 = (end__51231__auto___52274 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51232__auto___52275,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51231__auto___52274);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52201);
}} else {
var seq__52219 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52220 = null;
var count__52221 = (0);
var i__52222 = (0);
while(true){
if((i__52222 < count__52221)){
var vec__52229 = chunk__52220.cljs$core$IIndexed$_nth$arity$2(null,i__52222);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(1),null);
var temp__5733__auto___52276 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52276)){
var effect_fn_52277 = temp__5733__auto___52276;
(effect_fn_52277.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52277.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52277.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52278 = seq__52219;
var G__52279 = chunk__52220;
var G__52280 = count__52221;
var G__52281 = (i__52222 + (1));
seq__52219 = G__52278;
chunk__52220 = G__52279;
count__52221 = G__52280;
i__52222 = G__52281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52219);
if(temp__5735__auto__){
var seq__52219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52219__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52219__$1);
var G__52282 = cljs.core.chunk_rest(seq__52219__$1);
var G__52283 = c__4609__auto__;
var G__52284 = cljs.core.count(c__4609__auto__);
var G__52285 = (0);
seq__52219 = G__52282;
chunk__52220 = G__52283;
count__52221 = G__52284;
i__52222 = G__52285;
continue;
} else {
var vec__52232 = cljs.core.first(seq__52219__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52232,(1),null);
var temp__5733__auto___52286 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52286)){
var effect_fn_52287 = temp__5733__auto___52286;
(effect_fn_52287.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52287.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52287.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52288 = cljs.core.next(seq__52219__$1);
var G__52289 = null;
var G__52290 = (0);
var G__52291 = (0);
seq__52219 = G__52288;
chunk__52220 = G__52289;
count__52221 = G__52290;
i__52222 = G__52291;
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
var seq__52235 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52236 = null;
var count__52237 = (0);
var i__52238 = (0);
while(true){
if((i__52238 < count__52237)){
var map__52245 = chunk__52236.cljs$core$IIndexed$_nth$arity$2(null,i__52238);
var map__52245__$1 = (((((!((map__52245 == null))))?(((((map__52245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52245):map__52245);
var effect = map__52245__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52235,chunk__52236,count__52237,i__52238,map__52245,map__52245__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52235,chunk__52236,count__52237,i__52238,map__52245,map__52245__$1,effect,ms,dispatch))
,ms);
}


var G__52292 = seq__52235;
var G__52293 = chunk__52236;
var G__52294 = count__52237;
var G__52295 = (i__52238 + (1));
seq__52235 = G__52292;
chunk__52236 = G__52293;
count__52237 = G__52294;
i__52238 = G__52295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52235);
if(temp__5735__auto__){
var seq__52235__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52235__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52235__$1);
var G__52296 = cljs.core.chunk_rest(seq__52235__$1);
var G__52297 = c__4609__auto__;
var G__52298 = cljs.core.count(c__4609__auto__);
var G__52299 = (0);
seq__52235 = G__52296;
chunk__52236 = G__52297;
count__52237 = G__52298;
i__52238 = G__52299;
continue;
} else {
var map__52247 = cljs.core.first(seq__52235__$1);
var map__52247__$1 = (((((!((map__52247 == null))))?(((((map__52247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52247):map__52247);
var effect = map__52247__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52247__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52247__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52235,chunk__52236,count__52237,i__52238,map__52247,map__52247__$1,effect,ms,dispatch,seq__52235__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52235,chunk__52236,count__52237,i__52238,map__52247,map__52247__$1,effect,ms,dispatch,seq__52235__$1,temp__5735__auto__))
,ms);
}


var G__52300 = cljs.core.next(seq__52235__$1);
var G__52301 = null;
var G__52302 = (0);
var G__52303 = (0);
seq__52235 = G__52300;
chunk__52236 = G__52301;
count__52237 = G__52302;
i__52238 = G__52303;
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
var seq__52249 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52250 = null;
var count__52251 = (0);
var i__52252 = (0);
while(true){
if((i__52252 < count__52251)){
var event = chunk__52250.cljs$core$IIndexed$_nth$arity$2(null,i__52252);
re_frame.router.dispatch(event);


var G__52304 = seq__52249;
var G__52305 = chunk__52250;
var G__52306 = count__52251;
var G__52307 = (i__52252 + (1));
seq__52249 = G__52304;
chunk__52250 = G__52305;
count__52251 = G__52306;
i__52252 = G__52307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52249);
if(temp__5735__auto__){
var seq__52249__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52249__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52249__$1);
var G__52308 = cljs.core.chunk_rest(seq__52249__$1);
var G__52309 = c__4609__auto__;
var G__52310 = cljs.core.count(c__4609__auto__);
var G__52311 = (0);
seq__52249 = G__52308;
chunk__52250 = G__52309;
count__52251 = G__52310;
i__52252 = G__52311;
continue;
} else {
var event = cljs.core.first(seq__52249__$1);
re_frame.router.dispatch(event);


var G__52312 = cljs.core.next(seq__52249__$1);
var G__52313 = null;
var G__52314 = (0);
var G__52315 = (0);
seq__52249 = G__52312;
chunk__52250 = G__52313;
count__52251 = G__52314;
i__52252 = G__52315;
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
var seq__52254 = cljs.core.seq(value);
var chunk__52255 = null;
var count__52256 = (0);
var i__52257 = (0);
while(true){
if((i__52257 < count__52256)){
var event = chunk__52255.cljs$core$IIndexed$_nth$arity$2(null,i__52257);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52316 = seq__52254;
var G__52317 = chunk__52255;
var G__52318 = count__52256;
var G__52319 = (i__52257 + (1));
seq__52254 = G__52316;
chunk__52255 = G__52317;
count__52256 = G__52318;
i__52257 = G__52319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52254);
if(temp__5735__auto__){
var seq__52254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52254__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52254__$1);
var G__52320 = cljs.core.chunk_rest(seq__52254__$1);
var G__52321 = c__4609__auto__;
var G__52322 = cljs.core.count(c__4609__auto__);
var G__52323 = (0);
seq__52254 = G__52320;
chunk__52255 = G__52321;
count__52256 = G__52322;
i__52257 = G__52323;
continue;
} else {
var event = cljs.core.first(seq__52254__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52324 = cljs.core.next(seq__52254__$1);
var G__52325 = null;
var G__52326 = (0);
var G__52327 = (0);
seq__52254 = G__52324;
chunk__52255 = G__52325;
count__52256 = G__52326;
i__52257 = G__52327;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
