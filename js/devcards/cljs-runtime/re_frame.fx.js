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
var _STAR_current_trace_STAR__orig_val__46773 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46774 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46774);

try{try{var seq__46775 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46776 = null;
var count__46777 = (0);
var i__46778 = (0);
while(true){
if((i__46778 < count__46777)){
var vec__46785 = chunk__46776.cljs$core$IIndexed$_nth$arity$2(null,i__46778);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(1),null);
var temp__5733__auto___46830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46830)){
var effect_fn_46831 = temp__5733__auto___46830;
(effect_fn_46831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46832 = seq__46775;
var G__46833 = chunk__46776;
var G__46834 = count__46777;
var G__46835 = (i__46778 + (1));
seq__46775 = G__46832;
chunk__46776 = G__46833;
count__46777 = G__46834;
i__46778 = G__46835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46775);
if(temp__5735__auto__){
var seq__46775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46775__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46775__$1);
var G__46836 = cljs.core.chunk_rest(seq__46775__$1);
var G__46837 = c__4609__auto__;
var G__46838 = cljs.core.count(c__4609__auto__);
var G__46839 = (0);
seq__46775 = G__46836;
chunk__46776 = G__46837;
count__46777 = G__46838;
i__46778 = G__46839;
continue;
} else {
var vec__46788 = cljs.core.first(seq__46775__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46788,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46788,(1),null);
var temp__5733__auto___46840 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46840)){
var effect_fn_46841 = temp__5733__auto___46840;
(effect_fn_46841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46841.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46842 = cljs.core.next(seq__46775__$1);
var G__46843 = null;
var G__46844 = (0);
var G__46845 = (0);
seq__46775 = G__46842;
chunk__46776 = G__46843;
count__46777 = G__46844;
i__46778 = G__46845;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45939__auto___46846 = re_frame.interop.now();
var duration__45940__auto___46847 = (end__45939__auto___46846 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45940__auto___46847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45939__auto___46846);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46773);
}} else {
var seq__46791 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46792 = null;
var count__46793 = (0);
var i__46794 = (0);
while(true){
if((i__46794 < count__46793)){
var vec__46803 = chunk__46792.cljs$core$IIndexed$_nth$arity$2(null,i__46794);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46803,(1),null);
var temp__5733__auto___46848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46848)){
var effect_fn_46849 = temp__5733__auto___46848;
(effect_fn_46849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46850 = seq__46791;
var G__46851 = chunk__46792;
var G__46852 = count__46793;
var G__46853 = (i__46794 + (1));
seq__46791 = G__46850;
chunk__46792 = G__46851;
count__46793 = G__46852;
i__46794 = G__46853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46791);
if(temp__5735__auto__){
var seq__46791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46791__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46791__$1);
var G__46854 = cljs.core.chunk_rest(seq__46791__$1);
var G__46855 = c__4609__auto__;
var G__46856 = cljs.core.count(c__4609__auto__);
var G__46857 = (0);
seq__46791 = G__46854;
chunk__46792 = G__46855;
count__46793 = G__46856;
i__46794 = G__46857;
continue;
} else {
var vec__46806 = cljs.core.first(seq__46791__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(1),null);
var temp__5733__auto___46858 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46858)){
var effect_fn_46859 = temp__5733__auto___46858;
(effect_fn_46859.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46859.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46859.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46860 = cljs.core.next(seq__46791__$1);
var G__46861 = null;
var G__46862 = (0);
var G__46863 = (0);
seq__46791 = G__46860;
chunk__46792 = G__46861;
count__46793 = G__46862;
i__46794 = G__46863;
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
var seq__46809 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46810 = null;
var count__46811 = (0);
var i__46812 = (0);
while(true){
if((i__46812 < count__46811)){
var map__46818 = chunk__46810.cljs$core$IIndexed$_nth$arity$2(null,i__46812);
var map__46818__$1 = (((((!((map__46818 == null))))?(((((map__46818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46818):map__46818);
var effect = map__46818__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46818__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46818__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46809,chunk__46810,count__46811,i__46812,map__46818,map__46818__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46809,chunk__46810,count__46811,i__46812,map__46818,map__46818__$1,effect,ms,dispatch))
,ms);
}


var G__46864 = seq__46809;
var G__46865 = chunk__46810;
var G__46866 = count__46811;
var G__46867 = (i__46812 + (1));
seq__46809 = G__46864;
chunk__46810 = G__46865;
count__46811 = G__46866;
i__46812 = G__46867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46809);
if(temp__5735__auto__){
var seq__46809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46809__$1);
var G__46868 = cljs.core.chunk_rest(seq__46809__$1);
var G__46869 = c__4609__auto__;
var G__46870 = cljs.core.count(c__4609__auto__);
var G__46871 = (0);
seq__46809 = G__46868;
chunk__46810 = G__46869;
count__46811 = G__46870;
i__46812 = G__46871;
continue;
} else {
var map__46820 = cljs.core.first(seq__46809__$1);
var map__46820__$1 = (((((!((map__46820 == null))))?(((((map__46820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46820):map__46820);
var effect = map__46820__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46820__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46820__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46809,chunk__46810,count__46811,i__46812,map__46820,map__46820__$1,effect,ms,dispatch,seq__46809__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46809,chunk__46810,count__46811,i__46812,map__46820,map__46820__$1,effect,ms,dispatch,seq__46809__$1,temp__5735__auto__))
,ms);
}


var G__46872 = cljs.core.next(seq__46809__$1);
var G__46873 = null;
var G__46874 = (0);
var G__46875 = (0);
seq__46809 = G__46872;
chunk__46810 = G__46873;
count__46811 = G__46874;
i__46812 = G__46875;
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
var seq__46822 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46823 = null;
var count__46824 = (0);
var i__46825 = (0);
while(true){
if((i__46825 < count__46824)){
var event = chunk__46823.cljs$core$IIndexed$_nth$arity$2(null,i__46825);
re_frame.router.dispatch(event);


var G__46879 = seq__46822;
var G__46880 = chunk__46823;
var G__46881 = count__46824;
var G__46882 = (i__46825 + (1));
seq__46822 = G__46879;
chunk__46823 = G__46880;
count__46824 = G__46881;
i__46825 = G__46882;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46822);
if(temp__5735__auto__){
var seq__46822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46822__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46822__$1);
var G__46883 = cljs.core.chunk_rest(seq__46822__$1);
var G__46884 = c__4609__auto__;
var G__46885 = cljs.core.count(c__4609__auto__);
var G__46886 = (0);
seq__46822 = G__46883;
chunk__46823 = G__46884;
count__46824 = G__46885;
i__46825 = G__46886;
continue;
} else {
var event = cljs.core.first(seq__46822__$1);
re_frame.router.dispatch(event);


var G__46887 = cljs.core.next(seq__46822__$1);
var G__46888 = null;
var G__46889 = (0);
var G__46890 = (0);
seq__46822 = G__46887;
chunk__46823 = G__46888;
count__46824 = G__46889;
i__46825 = G__46890;
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
var seq__46826 = cljs.core.seq(value);
var chunk__46827 = null;
var count__46828 = (0);
var i__46829 = (0);
while(true){
if((i__46829 < count__46828)){
var event = chunk__46827.cljs$core$IIndexed$_nth$arity$2(null,i__46829);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46893 = seq__46826;
var G__46894 = chunk__46827;
var G__46895 = count__46828;
var G__46896 = (i__46829 + (1));
seq__46826 = G__46893;
chunk__46827 = G__46894;
count__46828 = G__46895;
i__46829 = G__46896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46826);
if(temp__5735__auto__){
var seq__46826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46826__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46826__$1);
var G__46899 = cljs.core.chunk_rest(seq__46826__$1);
var G__46900 = c__4609__auto__;
var G__46901 = cljs.core.count(c__4609__auto__);
var G__46902 = (0);
seq__46826 = G__46899;
chunk__46827 = G__46900;
count__46828 = G__46901;
i__46829 = G__46902;
continue;
} else {
var event = cljs.core.first(seq__46826__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46903 = cljs.core.next(seq__46826__$1);
var G__46904 = null;
var G__46905 = (0);
var G__46906 = (0);
seq__46826 = G__46903;
chunk__46827 = G__46904;
count__46828 = G__46905;
i__46829 = G__46906;
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
