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
var _STAR_current_trace_STAR__orig_val__52205 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52206 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52206);

try{try{var seq__52207 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52208 = null;
var count__52209 = (0);
var i__52210 = (0);
while(true){
if((i__52210 < count__52209)){
var vec__52217 = chunk__52208.cljs$core$IIndexed$_nth$arity$2(null,i__52210);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52217,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52217,(1),null);
var temp__5733__auto___52262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52262)){
var effect_fn_52263 = temp__5733__auto___52262;
(effect_fn_52263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52263.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52264 = seq__52207;
var G__52265 = chunk__52208;
var G__52266 = count__52209;
var G__52267 = (i__52210 + (1));
seq__52207 = G__52264;
chunk__52208 = G__52265;
count__52209 = G__52266;
i__52210 = G__52267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52207);
if(temp__5735__auto__){
var seq__52207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52207__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52207__$1);
var G__52268 = cljs.core.chunk_rest(seq__52207__$1);
var G__52269 = c__4609__auto__;
var G__52270 = cljs.core.count(c__4609__auto__);
var G__52271 = (0);
seq__52207 = G__52268;
chunk__52208 = G__52269;
count__52209 = G__52270;
i__52210 = G__52271;
continue;
} else {
var vec__52220 = cljs.core.first(seq__52207__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220,(1),null);
var temp__5733__auto___52272 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52272)){
var effect_fn_52273 = temp__5733__auto___52272;
(effect_fn_52273.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52273.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52273.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52274 = cljs.core.next(seq__52207__$1);
var G__52275 = null;
var G__52276 = (0);
var G__52277 = (0);
seq__52207 = G__52274;
chunk__52208 = G__52275;
count__52209 = G__52276;
i__52210 = G__52277;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51201__auto___52278 = re_frame.interop.now();
var duration__51202__auto___52279 = (end__51201__auto___52278 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51202__auto___52279,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51201__auto___52278);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52205);
}} else {
var seq__52223 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52224 = null;
var count__52225 = (0);
var i__52226 = (0);
while(true){
if((i__52226 < count__52225)){
var vec__52233 = chunk__52224.cljs$core$IIndexed$_nth$arity$2(null,i__52226);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52233,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52233,(1),null);
var temp__5733__auto___52280 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52280)){
var effect_fn_52281 = temp__5733__auto___52280;
(effect_fn_52281.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52281.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52281.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52282 = seq__52223;
var G__52283 = chunk__52224;
var G__52284 = count__52225;
var G__52285 = (i__52226 + (1));
seq__52223 = G__52282;
chunk__52224 = G__52283;
count__52225 = G__52284;
i__52226 = G__52285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52223);
if(temp__5735__auto__){
var seq__52223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52223__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52223__$1);
var G__52286 = cljs.core.chunk_rest(seq__52223__$1);
var G__52287 = c__4609__auto__;
var G__52288 = cljs.core.count(c__4609__auto__);
var G__52289 = (0);
seq__52223 = G__52286;
chunk__52224 = G__52287;
count__52225 = G__52288;
i__52226 = G__52289;
continue;
} else {
var vec__52236 = cljs.core.first(seq__52223__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52236,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52236,(1),null);
var temp__5733__auto___52290 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52290)){
var effect_fn_52291 = temp__5733__auto___52290;
(effect_fn_52291.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52291.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52291.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52292 = cljs.core.next(seq__52223__$1);
var G__52293 = null;
var G__52294 = (0);
var G__52295 = (0);
seq__52223 = G__52292;
chunk__52224 = G__52293;
count__52225 = G__52294;
i__52226 = G__52295;
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
var seq__52239 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52240 = null;
var count__52241 = (0);
var i__52242 = (0);
while(true){
if((i__52242 < count__52241)){
var map__52249 = chunk__52240.cljs$core$IIndexed$_nth$arity$2(null,i__52242);
var map__52249__$1 = (((((!((map__52249 == null))))?(((((map__52249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52249):map__52249);
var effect = map__52249__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52249__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52249__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52239,chunk__52240,count__52241,i__52242,map__52249,map__52249__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52239,chunk__52240,count__52241,i__52242,map__52249,map__52249__$1,effect,ms,dispatch))
,ms);
}


var G__52296 = seq__52239;
var G__52297 = chunk__52240;
var G__52298 = count__52241;
var G__52299 = (i__52242 + (1));
seq__52239 = G__52296;
chunk__52240 = G__52297;
count__52241 = G__52298;
i__52242 = G__52299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52239);
if(temp__5735__auto__){
var seq__52239__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52239__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52239__$1);
var G__52300 = cljs.core.chunk_rest(seq__52239__$1);
var G__52301 = c__4609__auto__;
var G__52302 = cljs.core.count(c__4609__auto__);
var G__52303 = (0);
seq__52239 = G__52300;
chunk__52240 = G__52301;
count__52241 = G__52302;
i__52242 = G__52303;
continue;
} else {
var map__52252 = cljs.core.first(seq__52239__$1);
var map__52252__$1 = (((((!((map__52252 == null))))?(((((map__52252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52252):map__52252);
var effect = map__52252__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52239,chunk__52240,count__52241,i__52242,map__52252,map__52252__$1,effect,ms,dispatch,seq__52239__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52239,chunk__52240,count__52241,i__52242,map__52252,map__52252__$1,effect,ms,dispatch,seq__52239__$1,temp__5735__auto__))
,ms);
}


var G__52307 = cljs.core.next(seq__52239__$1);
var G__52308 = null;
var G__52309 = (0);
var G__52310 = (0);
seq__52239 = G__52307;
chunk__52240 = G__52308;
count__52241 = G__52309;
i__52242 = G__52310;
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
var seq__52254 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52255 = null;
var count__52256 = (0);
var i__52257 = (0);
while(true){
if((i__52257 < count__52256)){
var event = chunk__52255.cljs$core$IIndexed$_nth$arity$2(null,i__52257);
re_frame.router.dispatch(event);


var G__52311 = seq__52254;
var G__52312 = chunk__52255;
var G__52313 = count__52256;
var G__52314 = (i__52257 + (1));
seq__52254 = G__52311;
chunk__52255 = G__52312;
count__52256 = G__52313;
i__52257 = G__52314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52254);
if(temp__5735__auto__){
var seq__52254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52254__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52254__$1);
var G__52315 = cljs.core.chunk_rest(seq__52254__$1);
var G__52316 = c__4609__auto__;
var G__52317 = cljs.core.count(c__4609__auto__);
var G__52318 = (0);
seq__52254 = G__52315;
chunk__52255 = G__52316;
count__52256 = G__52317;
i__52257 = G__52318;
continue;
} else {
var event = cljs.core.first(seq__52254__$1);
re_frame.router.dispatch(event);


var G__52319 = cljs.core.next(seq__52254__$1);
var G__52320 = null;
var G__52321 = (0);
var G__52322 = (0);
seq__52254 = G__52319;
chunk__52255 = G__52320;
count__52256 = G__52321;
i__52257 = G__52322;
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
var seq__52258 = cljs.core.seq(value);
var chunk__52259 = null;
var count__52260 = (0);
var i__52261 = (0);
while(true){
if((i__52261 < count__52260)){
var event = chunk__52259.cljs$core$IIndexed$_nth$arity$2(null,i__52261);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52325 = seq__52258;
var G__52326 = chunk__52259;
var G__52327 = count__52260;
var G__52328 = (i__52261 + (1));
seq__52258 = G__52325;
chunk__52259 = G__52326;
count__52260 = G__52327;
i__52261 = G__52328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52258);
if(temp__5735__auto__){
var seq__52258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52258__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52258__$1);
var G__52329 = cljs.core.chunk_rest(seq__52258__$1);
var G__52330 = c__4609__auto__;
var G__52331 = cljs.core.count(c__4609__auto__);
var G__52332 = (0);
seq__52258 = G__52329;
chunk__52259 = G__52330;
count__52260 = G__52331;
i__52261 = G__52332;
continue;
} else {
var event = cljs.core.first(seq__52258__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52335 = cljs.core.next(seq__52258__$1);
var G__52336 = null;
var G__52337 = (0);
var G__52338 = (0);
seq__52258 = G__52335;
chunk__52259 = G__52336;
count__52260 = G__52337;
i__52261 = G__52338;
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
