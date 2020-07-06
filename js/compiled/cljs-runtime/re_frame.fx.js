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
var _STAR_current_trace_STAR__orig_val__52848 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52849 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52849);

try{try{var seq__52850 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52851 = null;
var count__52852 = (0);
var i__52853 = (0);
while(true){
if((i__52853 < count__52852)){
var vec__52860 = chunk__52851.cljs$core$IIndexed$_nth$arity$2(null,i__52853);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(1),null);
var temp__5733__auto___52907 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52907)){
var effect_fn_52908 = temp__5733__auto___52907;
(effect_fn_52908.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52908.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52908.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52909 = seq__52850;
var G__52910 = chunk__52851;
var G__52911 = count__52852;
var G__52912 = (i__52853 + (1));
seq__52850 = G__52909;
chunk__52851 = G__52910;
count__52852 = G__52911;
i__52853 = G__52912;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52850);
if(temp__5735__auto__){
var seq__52850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52850__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52850__$1);
var G__52913 = cljs.core.chunk_rest(seq__52850__$1);
var G__52914 = c__4609__auto__;
var G__52915 = cljs.core.count(c__4609__auto__);
var G__52916 = (0);
seq__52850 = G__52913;
chunk__52851 = G__52914;
count__52852 = G__52915;
i__52853 = G__52916;
continue;
} else {
var vec__52863 = cljs.core.first(seq__52850__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(1),null);
var temp__5733__auto___52921 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52921)){
var effect_fn_52922 = temp__5733__auto___52921;
(effect_fn_52922.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52922.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52922.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52923 = cljs.core.next(seq__52850__$1);
var G__52924 = null;
var G__52925 = (0);
var G__52926 = (0);
seq__52850 = G__52923;
chunk__52851 = G__52924;
count__52852 = G__52925;
i__52853 = G__52926;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52581__auto___52927 = re_frame.interop.now();
var duration__52582__auto___52928 = (end__52581__auto___52927 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52582__auto___52928,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52581__auto___52927);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52848);
}} else {
var seq__52866 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52867 = null;
var count__52868 = (0);
var i__52869 = (0);
while(true){
if((i__52869 < count__52868)){
var vec__52876 = chunk__52867.cljs$core$IIndexed$_nth$arity$2(null,i__52869);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(1),null);
var temp__5733__auto___52932 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52932)){
var effect_fn_52933 = temp__5733__auto___52932;
(effect_fn_52933.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52933.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52933.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52937 = seq__52866;
var G__52938 = chunk__52867;
var G__52939 = count__52868;
var G__52940 = (i__52869 + (1));
seq__52866 = G__52937;
chunk__52867 = G__52938;
count__52868 = G__52939;
i__52869 = G__52940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52866);
if(temp__5735__auto__){
var seq__52866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52866__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52866__$1);
var G__52945 = cljs.core.chunk_rest(seq__52866__$1);
var G__52946 = c__4609__auto__;
var G__52947 = cljs.core.count(c__4609__auto__);
var G__52948 = (0);
seq__52866 = G__52945;
chunk__52867 = G__52946;
count__52868 = G__52947;
i__52869 = G__52948;
continue;
} else {
var vec__52879 = cljs.core.first(seq__52866__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(1),null);
var temp__5733__auto___52949 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52949)){
var effect_fn_52950 = temp__5733__auto___52949;
(effect_fn_52950.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52950.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52950.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52958 = cljs.core.next(seq__52866__$1);
var G__52959 = null;
var G__52960 = (0);
var G__52961 = (0);
seq__52866 = G__52958;
chunk__52867 = G__52959;
count__52868 = G__52960;
i__52869 = G__52961;
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
var seq__52882 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52883 = null;
var count__52884 = (0);
var i__52885 = (0);
while(true){
if((i__52885 < count__52884)){
var map__52891 = chunk__52883.cljs$core$IIndexed$_nth$arity$2(null,i__52885);
var map__52891__$1 = (((((!((map__52891 == null))))?(((((map__52891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52891):map__52891);
var effect = map__52891__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52882,chunk__52883,count__52884,i__52885,map__52891,map__52891__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52882,chunk__52883,count__52884,i__52885,map__52891,map__52891__$1,effect,ms,dispatch))
,ms);
}


var G__52973 = seq__52882;
var G__52974 = chunk__52883;
var G__52975 = count__52884;
var G__52976 = (i__52885 + (1));
seq__52882 = G__52973;
chunk__52883 = G__52974;
count__52884 = G__52975;
i__52885 = G__52976;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52882);
if(temp__5735__auto__){
var seq__52882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52882__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52882__$1);
var G__52977 = cljs.core.chunk_rest(seq__52882__$1);
var G__52978 = c__4609__auto__;
var G__52979 = cljs.core.count(c__4609__auto__);
var G__52980 = (0);
seq__52882 = G__52977;
chunk__52883 = G__52978;
count__52884 = G__52979;
i__52885 = G__52980;
continue;
} else {
var map__52893 = cljs.core.first(seq__52882__$1);
var map__52893__$1 = (((((!((map__52893 == null))))?(((((map__52893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52893):map__52893);
var effect = map__52893__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52882,chunk__52883,count__52884,i__52885,map__52893,map__52893__$1,effect,ms,dispatch,seq__52882__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52882,chunk__52883,count__52884,i__52885,map__52893,map__52893__$1,effect,ms,dispatch,seq__52882__$1,temp__5735__auto__))
,ms);
}


var G__52981 = cljs.core.next(seq__52882__$1);
var G__52982 = null;
var G__52983 = (0);
var G__52984 = (0);
seq__52882 = G__52981;
chunk__52883 = G__52982;
count__52884 = G__52983;
i__52885 = G__52984;
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
var seq__52895 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52896 = null;
var count__52897 = (0);
var i__52898 = (0);
while(true){
if((i__52898 < count__52897)){
var event = chunk__52896.cljs$core$IIndexed$_nth$arity$2(null,i__52898);
re_frame.router.dispatch(event);


var G__52986 = seq__52895;
var G__52987 = chunk__52896;
var G__52988 = count__52897;
var G__52989 = (i__52898 + (1));
seq__52895 = G__52986;
chunk__52896 = G__52987;
count__52897 = G__52988;
i__52898 = G__52989;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52895);
if(temp__5735__auto__){
var seq__52895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52895__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52895__$1);
var G__52990 = cljs.core.chunk_rest(seq__52895__$1);
var G__52991 = c__4609__auto__;
var G__52992 = cljs.core.count(c__4609__auto__);
var G__52993 = (0);
seq__52895 = G__52990;
chunk__52896 = G__52991;
count__52897 = G__52992;
i__52898 = G__52993;
continue;
} else {
var event = cljs.core.first(seq__52895__$1);
re_frame.router.dispatch(event);


var G__52994 = cljs.core.next(seq__52895__$1);
var G__52995 = null;
var G__52996 = (0);
var G__52997 = (0);
seq__52895 = G__52994;
chunk__52896 = G__52995;
count__52897 = G__52996;
i__52898 = G__52997;
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
var seq__52902 = cljs.core.seq(value);
var chunk__52903 = null;
var count__52904 = (0);
var i__52905 = (0);
while(true){
if((i__52905 < count__52904)){
var event = chunk__52903.cljs$core$IIndexed$_nth$arity$2(null,i__52905);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52999 = seq__52902;
var G__53000 = chunk__52903;
var G__53001 = count__52904;
var G__53002 = (i__52905 + (1));
seq__52902 = G__52999;
chunk__52903 = G__53000;
count__52904 = G__53001;
i__52905 = G__53002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52902);
if(temp__5735__auto__){
var seq__52902__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52902__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52902__$1);
var G__53003 = cljs.core.chunk_rest(seq__52902__$1);
var G__53004 = c__4609__auto__;
var G__53005 = cljs.core.count(c__4609__auto__);
var G__53006 = (0);
seq__52902 = G__53003;
chunk__52903 = G__53004;
count__52904 = G__53005;
i__52905 = G__53006;
continue;
} else {
var event = cljs.core.first(seq__52902__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53007 = cljs.core.next(seq__52902__$1);
var G__53008 = null;
var G__53009 = (0);
var G__53010 = (0);
seq__52902 = G__53007;
chunk__52903 = G__53008;
count__52904 = G__53009;
i__52905 = G__53010;
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
