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
var _STAR_current_trace_STAR__orig_val__68564 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__68565 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__68565);

try{try{var seq__68566 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__68567 = null;
var count__68568 = (0);
var i__68569 = (0);
while(true){
if((i__68569 < count__68568)){
var vec__68576 = chunk__68567.cljs$core$IIndexed$_nth$arity$2(null,i__68569);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68576,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68576,(1),null);
var temp__5733__auto___68657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___68657)){
var effect_fn_68658 = temp__5733__auto___68657;
(effect_fn_68658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_68658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_68658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__68660 = seq__68566;
var G__68661 = chunk__68567;
var G__68662 = count__68568;
var G__68663 = (i__68569 + (1));
seq__68566 = G__68660;
chunk__68567 = G__68661;
count__68568 = G__68662;
i__68569 = G__68663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68566);
if(temp__5735__auto__){
var seq__68566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68566__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68566__$1);
var G__68664 = cljs.core.chunk_rest(seq__68566__$1);
var G__68665 = c__4609__auto__;
var G__68666 = cljs.core.count(c__4609__auto__);
var G__68667 = (0);
seq__68566 = G__68664;
chunk__68567 = G__68665;
count__68568 = G__68666;
i__68569 = G__68667;
continue;
} else {
var vec__68579 = cljs.core.first(seq__68566__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68579,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68579,(1),null);
var temp__5733__auto___68669 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___68669)){
var effect_fn_68670 = temp__5733__auto___68669;
(effect_fn_68670.cljs$core$IFn$_invoke$arity$1 ? effect_fn_68670.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_68670.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__68673 = cljs.core.next(seq__68566__$1);
var G__68674 = null;
var G__68675 = (0);
var G__68676 = (0);
seq__68566 = G__68673;
chunk__68567 = G__68674;
count__68568 = G__68675;
i__68569 = G__68676;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__67607__auto___68677 = re_frame.interop.now();
var duration__67608__auto___68679 = (end__67607__auto___68677 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__67608__auto___68679,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__67607__auto___68677);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__68564);
}} else {
var seq__68589 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__68590 = null;
var count__68591 = (0);
var i__68592 = (0);
while(true){
if((i__68592 < count__68591)){
var vec__68617 = chunk__68590.cljs$core$IIndexed$_nth$arity$2(null,i__68592);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68617,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68617,(1),null);
var temp__5733__auto___68680 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___68680)){
var effect_fn_68681 = temp__5733__auto___68680;
(effect_fn_68681.cljs$core$IFn$_invoke$arity$1 ? effect_fn_68681.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_68681.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__68682 = seq__68589;
var G__68683 = chunk__68590;
var G__68684 = count__68591;
var G__68685 = (i__68592 + (1));
seq__68589 = G__68682;
chunk__68590 = G__68683;
count__68591 = G__68684;
i__68592 = G__68685;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68589);
if(temp__5735__auto__){
var seq__68589__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68589__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68589__$1);
var G__68686 = cljs.core.chunk_rest(seq__68589__$1);
var G__68687 = c__4609__auto__;
var G__68688 = cljs.core.count(c__4609__auto__);
var G__68689 = (0);
seq__68589 = G__68686;
chunk__68590 = G__68687;
count__68591 = G__68688;
i__68592 = G__68689;
continue;
} else {
var vec__68622 = cljs.core.first(seq__68589__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68622,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68622,(1),null);
var temp__5733__auto___68690 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___68690)){
var effect_fn_68691 = temp__5733__auto___68690;
(effect_fn_68691.cljs$core$IFn$_invoke$arity$1 ? effect_fn_68691.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_68691.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__68692 = cljs.core.next(seq__68589__$1);
var G__68693 = null;
var G__68694 = (0);
var G__68695 = (0);
seq__68589 = G__68692;
chunk__68590 = G__68693;
count__68591 = G__68694;
i__68592 = G__68695;
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
var seq__68626 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__68627 = null;
var count__68628 = (0);
var i__68629 = (0);
while(true){
if((i__68629 < count__68628)){
var map__68636 = chunk__68627.cljs$core$IIndexed$_nth$arity$2(null,i__68629);
var map__68636__$1 = (((((!((map__68636 == null))))?(((((map__68636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68636):map__68636);
var effect = map__68636__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68636__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68636__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__68626,chunk__68627,count__68628,i__68629,map__68636,map__68636__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__68626,chunk__68627,count__68628,i__68629,map__68636,map__68636__$1,effect,ms,dispatch))
,ms);
}


var G__68699 = seq__68626;
var G__68700 = chunk__68627;
var G__68701 = count__68628;
var G__68702 = (i__68629 + (1));
seq__68626 = G__68699;
chunk__68627 = G__68700;
count__68628 = G__68701;
i__68629 = G__68702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68626);
if(temp__5735__auto__){
var seq__68626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68626__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68626__$1);
var G__68703 = cljs.core.chunk_rest(seq__68626__$1);
var G__68704 = c__4609__auto__;
var G__68705 = cljs.core.count(c__4609__auto__);
var G__68706 = (0);
seq__68626 = G__68703;
chunk__68627 = G__68704;
count__68628 = G__68705;
i__68629 = G__68706;
continue;
} else {
var map__68640 = cljs.core.first(seq__68626__$1);
var map__68640__$1 = (((((!((map__68640 == null))))?(((((map__68640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68640):map__68640);
var effect = map__68640__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68640__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68640__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__68626,chunk__68627,count__68628,i__68629,map__68640,map__68640__$1,effect,ms,dispatch,seq__68626__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__68626,chunk__68627,count__68628,i__68629,map__68640,map__68640__$1,effect,ms,dispatch,seq__68626__$1,temp__5735__auto__))
,ms);
}


var G__68711 = cljs.core.next(seq__68626__$1);
var G__68712 = null;
var G__68713 = (0);
var G__68714 = (0);
seq__68626 = G__68711;
chunk__68627 = G__68712;
count__68628 = G__68713;
i__68629 = G__68714;
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
var seq__68646 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__68647 = null;
var count__68648 = (0);
var i__68649 = (0);
while(true){
if((i__68649 < count__68648)){
var event = chunk__68647.cljs$core$IIndexed$_nth$arity$2(null,i__68649);
re_frame.router.dispatch(event);


var G__68715 = seq__68646;
var G__68716 = chunk__68647;
var G__68717 = count__68648;
var G__68718 = (i__68649 + (1));
seq__68646 = G__68715;
chunk__68647 = G__68716;
count__68648 = G__68717;
i__68649 = G__68718;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68646);
if(temp__5735__auto__){
var seq__68646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68646__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68646__$1);
var G__68719 = cljs.core.chunk_rest(seq__68646__$1);
var G__68720 = c__4609__auto__;
var G__68721 = cljs.core.count(c__4609__auto__);
var G__68722 = (0);
seq__68646 = G__68719;
chunk__68647 = G__68720;
count__68648 = G__68721;
i__68649 = G__68722;
continue;
} else {
var event = cljs.core.first(seq__68646__$1);
re_frame.router.dispatch(event);


var G__68724 = cljs.core.next(seq__68646__$1);
var G__68725 = null;
var G__68726 = (0);
var G__68727 = (0);
seq__68646 = G__68724;
chunk__68647 = G__68725;
count__68648 = G__68726;
i__68649 = G__68727;
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
var seq__68650 = cljs.core.seq(value);
var chunk__68651 = null;
var count__68652 = (0);
var i__68653 = (0);
while(true){
if((i__68653 < count__68652)){
var event = chunk__68651.cljs$core$IIndexed$_nth$arity$2(null,i__68653);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__68728 = seq__68650;
var G__68729 = chunk__68651;
var G__68730 = count__68652;
var G__68731 = (i__68653 + (1));
seq__68650 = G__68728;
chunk__68651 = G__68729;
count__68652 = G__68730;
i__68653 = G__68731;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68650);
if(temp__5735__auto__){
var seq__68650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68650__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68650__$1);
var G__68732 = cljs.core.chunk_rest(seq__68650__$1);
var G__68733 = c__4609__auto__;
var G__68734 = cljs.core.count(c__4609__auto__);
var G__68735 = (0);
seq__68650 = G__68732;
chunk__68651 = G__68733;
count__68652 = G__68734;
i__68653 = G__68735;
continue;
} else {
var event = cljs.core.first(seq__68650__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__68738 = cljs.core.next(seq__68650__$1);
var G__68739 = null;
var G__68740 = (0);
var G__68741 = (0);
seq__68650 = G__68738;
chunk__68651 = G__68739;
count__68652 = G__68740;
i__68653 = G__68741;
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
