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
var _STAR_current_trace_STAR__orig_val__33069 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33070 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33070);

try{try{var seq__33071 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33072 = null;
var count__33073 = (0);
var i__33074 = (0);
while(true){
if((i__33074 < count__33073)){
var vec__33081 = chunk__33072.cljs$core$IIndexed$_nth$arity$2(null,i__33074);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33081,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33081,(1),null);
var temp__5733__auto___33126 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33126)){
var effect_fn_33127 = temp__5733__auto___33126;
(effect_fn_33127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33127.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33128 = seq__33071;
var G__33129 = chunk__33072;
var G__33130 = count__33073;
var G__33131 = (i__33074 + (1));
seq__33071 = G__33128;
chunk__33072 = G__33129;
count__33073 = G__33130;
i__33074 = G__33131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33071);
if(temp__5735__auto__){
var seq__33071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33071__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33071__$1);
var G__33132 = cljs.core.chunk_rest(seq__33071__$1);
var G__33133 = c__4609__auto__;
var G__33134 = cljs.core.count(c__4609__auto__);
var G__33135 = (0);
seq__33071 = G__33132;
chunk__33072 = G__33133;
count__33073 = G__33134;
i__33074 = G__33135;
continue;
} else {
var vec__33084 = cljs.core.first(seq__33071__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(1),null);
var temp__5733__auto___33136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33136)){
var effect_fn_33137 = temp__5733__auto___33136;
(effect_fn_33137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33137.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33138 = cljs.core.next(seq__33071__$1);
var G__33139 = null;
var G__33140 = (0);
var G__33141 = (0);
seq__33071 = G__33138;
chunk__33072 = G__33139;
count__33073 = G__33140;
i__33074 = G__33141;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32788__auto___33142 = re_frame.interop.now();
var duration__32789__auto___33143 = (end__32788__auto___33142 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32789__auto___33143,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32788__auto___33142);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33069);
}} else {
var seq__33087 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33088 = null;
var count__33089 = (0);
var i__33090 = (0);
while(true){
if((i__33090 < count__33089)){
var vec__33097 = chunk__33088.cljs$core$IIndexed$_nth$arity$2(null,i__33090);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var temp__5733__auto___33144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33144)){
var effect_fn_33145 = temp__5733__auto___33144;
(effect_fn_33145.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33145.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33145.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33146 = seq__33087;
var G__33147 = chunk__33088;
var G__33148 = count__33089;
var G__33149 = (i__33090 + (1));
seq__33087 = G__33146;
chunk__33088 = G__33147;
count__33089 = G__33148;
i__33090 = G__33149;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33087);
if(temp__5735__auto__){
var seq__33087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33087__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33087__$1);
var G__33150 = cljs.core.chunk_rest(seq__33087__$1);
var G__33151 = c__4609__auto__;
var G__33152 = cljs.core.count(c__4609__auto__);
var G__33153 = (0);
seq__33087 = G__33150;
chunk__33088 = G__33151;
count__33089 = G__33152;
i__33090 = G__33153;
continue;
} else {
var vec__33100 = cljs.core.first(seq__33087__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(1),null);
var temp__5733__auto___33154 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33154)){
var effect_fn_33155 = temp__5733__auto___33154;
(effect_fn_33155.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33155.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33155.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33156 = cljs.core.next(seq__33087__$1);
var G__33157 = null;
var G__33158 = (0);
var G__33159 = (0);
seq__33087 = G__33156;
chunk__33088 = G__33157;
count__33089 = G__33158;
i__33090 = G__33159;
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
var seq__33105 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33106 = null;
var count__33107 = (0);
var i__33108 = (0);
while(true){
if((i__33108 < count__33107)){
var map__33113 = chunk__33106.cljs$core$IIndexed$_nth$arity$2(null,i__33108);
var map__33113__$1 = (((((!((map__33113 == null))))?(((((map__33113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33113):map__33113);
var effect = map__33113__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33113__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33113__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33105,chunk__33106,count__33107,i__33108,map__33113,map__33113__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33105,chunk__33106,count__33107,i__33108,map__33113,map__33113__$1,effect,ms,dispatch))
,ms);
}


var G__33164 = seq__33105;
var G__33165 = chunk__33106;
var G__33166 = count__33107;
var G__33167 = (i__33108 + (1));
seq__33105 = G__33164;
chunk__33106 = G__33165;
count__33107 = G__33166;
i__33108 = G__33167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33105);
if(temp__5735__auto__){
var seq__33105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33105__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33105__$1);
var G__33171 = cljs.core.chunk_rest(seq__33105__$1);
var G__33172 = c__4609__auto__;
var G__33173 = cljs.core.count(c__4609__auto__);
var G__33174 = (0);
seq__33105 = G__33171;
chunk__33106 = G__33172;
count__33107 = G__33173;
i__33108 = G__33174;
continue;
} else {
var map__33116 = cljs.core.first(seq__33105__$1);
var map__33116__$1 = (((((!((map__33116 == null))))?(((((map__33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33116):map__33116);
var effect = map__33116__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33105,chunk__33106,count__33107,i__33108,map__33116,map__33116__$1,effect,ms,dispatch,seq__33105__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33105,chunk__33106,count__33107,i__33108,map__33116,map__33116__$1,effect,ms,dispatch,seq__33105__$1,temp__5735__auto__))
,ms);
}


var G__33178 = cljs.core.next(seq__33105__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__33105 = G__33178;
chunk__33106 = G__33179;
count__33107 = G__33180;
i__33108 = G__33181;
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
var seq__33118 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33119 = null;
var count__33120 = (0);
var i__33121 = (0);
while(true){
if((i__33121 < count__33120)){
var event = chunk__33119.cljs$core$IIndexed$_nth$arity$2(null,i__33121);
re_frame.router.dispatch(event);


var G__33189 = seq__33118;
var G__33190 = chunk__33119;
var G__33191 = count__33120;
var G__33192 = (i__33121 + (1));
seq__33118 = G__33189;
chunk__33119 = G__33190;
count__33120 = G__33191;
i__33121 = G__33192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33118);
if(temp__5735__auto__){
var seq__33118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33118__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33118__$1);
var G__33196 = cljs.core.chunk_rest(seq__33118__$1);
var G__33197 = c__4609__auto__;
var G__33198 = cljs.core.count(c__4609__auto__);
var G__33199 = (0);
seq__33118 = G__33196;
chunk__33119 = G__33197;
count__33120 = G__33198;
i__33121 = G__33199;
continue;
} else {
var event = cljs.core.first(seq__33118__$1);
re_frame.router.dispatch(event);


var G__33200 = cljs.core.next(seq__33118__$1);
var G__33201 = null;
var G__33202 = (0);
var G__33203 = (0);
seq__33118 = G__33200;
chunk__33119 = G__33201;
count__33120 = G__33202;
i__33121 = G__33203;
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
var seq__33122 = cljs.core.seq(value);
var chunk__33123 = null;
var count__33124 = (0);
var i__33125 = (0);
while(true){
if((i__33125 < count__33124)){
var event = chunk__33123.cljs$core$IIndexed$_nth$arity$2(null,i__33125);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33204 = seq__33122;
var G__33205 = chunk__33123;
var G__33206 = count__33124;
var G__33207 = (i__33125 + (1));
seq__33122 = G__33204;
chunk__33123 = G__33205;
count__33124 = G__33206;
i__33125 = G__33207;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33122);
if(temp__5735__auto__){
var seq__33122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33122__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33122__$1);
var G__33208 = cljs.core.chunk_rest(seq__33122__$1);
var G__33209 = c__4609__auto__;
var G__33210 = cljs.core.count(c__4609__auto__);
var G__33211 = (0);
seq__33122 = G__33208;
chunk__33123 = G__33209;
count__33124 = G__33210;
i__33125 = G__33211;
continue;
} else {
var event = cljs.core.first(seq__33122__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33212 = cljs.core.next(seq__33122__$1);
var G__33213 = null;
var G__33214 = (0);
var G__33215 = (0);
seq__33122 = G__33212;
chunk__33123 = G__33213;
count__33124 = G__33214;
i__33125 = G__33215;
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
