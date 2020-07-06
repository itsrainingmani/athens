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
var _STAR_current_trace_STAR__orig_val__46763 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46764 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46764);

try{try{var seq__46765 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46766 = null;
var count__46767 = (0);
var i__46768 = (0);
while(true){
if((i__46768 < count__46767)){
var vec__46775 = chunk__46766.cljs$core$IIndexed$_nth$arity$2(null,i__46768);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(1),null);
var temp__5733__auto___46820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46820)){
var effect_fn_46821 = temp__5733__auto___46820;
(effect_fn_46821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46822 = seq__46765;
var G__46823 = chunk__46766;
var G__46824 = count__46767;
var G__46825 = (i__46768 + (1));
seq__46765 = G__46822;
chunk__46766 = G__46823;
count__46767 = G__46824;
i__46768 = G__46825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46765);
if(temp__5735__auto__){
var seq__46765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46765__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46765__$1);
var G__46826 = cljs.core.chunk_rest(seq__46765__$1);
var G__46827 = c__4609__auto__;
var G__46828 = cljs.core.count(c__4609__auto__);
var G__46829 = (0);
seq__46765 = G__46826;
chunk__46766 = G__46827;
count__46767 = G__46828;
i__46768 = G__46829;
continue;
} else {
var vec__46778 = cljs.core.first(seq__46765__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(1),null);
var temp__5733__auto___46830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46830)){
var effect_fn_46831 = temp__5733__auto___46830;
(effect_fn_46831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46832 = cljs.core.next(seq__46765__$1);
var G__46833 = null;
var G__46834 = (0);
var G__46835 = (0);
seq__46765 = G__46832;
chunk__46766 = G__46833;
count__46767 = G__46834;
i__46768 = G__46835;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45929__auto___46836 = re_frame.interop.now();
var duration__45930__auto___46837 = (end__45929__auto___46836 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45930__auto___46837,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45929__auto___46836);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46763);
}} else {
var seq__46781 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46782 = null;
var count__46783 = (0);
var i__46784 = (0);
while(true){
if((i__46784 < count__46783)){
var vec__46792 = chunk__46782.cljs$core$IIndexed$_nth$arity$2(null,i__46784);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(1),null);
var temp__5733__auto___46838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46838)){
var effect_fn_46839 = temp__5733__auto___46838;
(effect_fn_46839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46840 = seq__46781;
var G__46841 = chunk__46782;
var G__46842 = count__46783;
var G__46843 = (i__46784 + (1));
seq__46781 = G__46840;
chunk__46782 = G__46841;
count__46783 = G__46842;
i__46784 = G__46843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46781);
if(temp__5735__auto__){
var seq__46781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46781__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46781__$1);
var G__46844 = cljs.core.chunk_rest(seq__46781__$1);
var G__46845 = c__4609__auto__;
var G__46846 = cljs.core.count(c__4609__auto__);
var G__46847 = (0);
seq__46781 = G__46844;
chunk__46782 = G__46845;
count__46783 = G__46846;
i__46784 = G__46847;
continue;
} else {
var vec__46796 = cljs.core.first(seq__46781__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796,(1),null);
var temp__5733__auto___46848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46848)){
var effect_fn_46849 = temp__5733__auto___46848;
(effect_fn_46849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46850 = cljs.core.next(seq__46781__$1);
var G__46851 = null;
var G__46852 = (0);
var G__46853 = (0);
seq__46781 = G__46850;
chunk__46782 = G__46851;
count__46783 = G__46852;
i__46784 = G__46853;
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
var seq__46799 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46800 = null;
var count__46801 = (0);
var i__46802 = (0);
while(true){
if((i__46802 < count__46801)){
var map__46808 = chunk__46800.cljs$core$IIndexed$_nth$arity$2(null,i__46802);
var map__46808__$1 = (((((!((map__46808 == null))))?(((((map__46808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46808):map__46808);
var effect = map__46808__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46808__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46808__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46799,chunk__46800,count__46801,i__46802,map__46808,map__46808__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46799,chunk__46800,count__46801,i__46802,map__46808,map__46808__$1,effect,ms,dispatch))
,ms);
}


var G__46857 = seq__46799;
var G__46858 = chunk__46800;
var G__46859 = count__46801;
var G__46860 = (i__46802 + (1));
seq__46799 = G__46857;
chunk__46800 = G__46858;
count__46801 = G__46859;
i__46802 = G__46860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46799);
if(temp__5735__auto__){
var seq__46799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46799__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46799__$1);
var G__46861 = cljs.core.chunk_rest(seq__46799__$1);
var G__46862 = c__4609__auto__;
var G__46863 = cljs.core.count(c__4609__auto__);
var G__46864 = (0);
seq__46799 = G__46861;
chunk__46800 = G__46862;
count__46801 = G__46863;
i__46802 = G__46864;
continue;
} else {
var map__46810 = cljs.core.first(seq__46799__$1);
var map__46810__$1 = (((((!((map__46810 == null))))?(((((map__46810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46810):map__46810);
var effect = map__46810__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46810__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46810__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46799,chunk__46800,count__46801,i__46802,map__46810,map__46810__$1,effect,ms,dispatch,seq__46799__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46799,chunk__46800,count__46801,i__46802,map__46810,map__46810__$1,effect,ms,dispatch,seq__46799__$1,temp__5735__auto__))
,ms);
}


var G__46867 = cljs.core.next(seq__46799__$1);
var G__46868 = null;
var G__46869 = (0);
var G__46870 = (0);
seq__46799 = G__46867;
chunk__46800 = G__46868;
count__46801 = G__46869;
i__46802 = G__46870;
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
var seq__46812 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46813 = null;
var count__46814 = (0);
var i__46815 = (0);
while(true){
if((i__46815 < count__46814)){
var event = chunk__46813.cljs$core$IIndexed$_nth$arity$2(null,i__46815);
re_frame.router.dispatch(event);


var G__46875 = seq__46812;
var G__46876 = chunk__46813;
var G__46877 = count__46814;
var G__46878 = (i__46815 + (1));
seq__46812 = G__46875;
chunk__46813 = G__46876;
count__46814 = G__46877;
i__46815 = G__46878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46812);
if(temp__5735__auto__){
var seq__46812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46812__$1);
var G__46879 = cljs.core.chunk_rest(seq__46812__$1);
var G__46880 = c__4609__auto__;
var G__46881 = cljs.core.count(c__4609__auto__);
var G__46882 = (0);
seq__46812 = G__46879;
chunk__46813 = G__46880;
count__46814 = G__46881;
i__46815 = G__46882;
continue;
} else {
var event = cljs.core.first(seq__46812__$1);
re_frame.router.dispatch(event);


var G__46883 = cljs.core.next(seq__46812__$1);
var G__46884 = null;
var G__46885 = (0);
var G__46886 = (0);
seq__46812 = G__46883;
chunk__46813 = G__46884;
count__46814 = G__46885;
i__46815 = G__46886;
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
var seq__46816 = cljs.core.seq(value);
var chunk__46817 = null;
var count__46818 = (0);
var i__46819 = (0);
while(true){
if((i__46819 < count__46818)){
var event = chunk__46817.cljs$core$IIndexed$_nth$arity$2(null,i__46819);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46889 = seq__46816;
var G__46890 = chunk__46817;
var G__46891 = count__46818;
var G__46892 = (i__46819 + (1));
seq__46816 = G__46889;
chunk__46817 = G__46890;
count__46818 = G__46891;
i__46819 = G__46892;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46816);
if(temp__5735__auto__){
var seq__46816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46816__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46816__$1);
var G__46895 = cljs.core.chunk_rest(seq__46816__$1);
var G__46896 = c__4609__auto__;
var G__46897 = cljs.core.count(c__4609__auto__);
var G__46898 = (0);
seq__46816 = G__46895;
chunk__46817 = G__46896;
count__46818 = G__46897;
i__46819 = G__46898;
continue;
} else {
var event = cljs.core.first(seq__46816__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46899 = cljs.core.next(seq__46816__$1);
var G__46900 = null;
var G__46901 = (0);
var G__46902 = (0);
seq__46816 = G__46899;
chunk__46817 = G__46900;
count__46818 = G__46901;
i__46819 = G__46902;
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
