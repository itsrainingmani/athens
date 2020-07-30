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
var _STAR_current_trace_STAR__orig_val__33839 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33840 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33840);

try{try{var seq__33841 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33842 = null;
var count__33843 = (0);
var i__33844 = (0);
while(true){
if((i__33844 < count__33843)){
var vec__33851 = chunk__33842.cljs$core$IIndexed$_nth$arity$2(null,i__33844);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(1),null);
var temp__5733__auto___33896 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33896)){
var effect_fn_33897 = temp__5733__auto___33896;
(effect_fn_33897.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33897.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33897.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33898 = seq__33841;
var G__33899 = chunk__33842;
var G__33900 = count__33843;
var G__33901 = (i__33844 + (1));
seq__33841 = G__33898;
chunk__33842 = G__33899;
count__33843 = G__33900;
i__33844 = G__33901;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33841);
if(temp__5735__auto__){
var seq__33841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33841__$1);
var G__33902 = cljs.core.chunk_rest(seq__33841__$1);
var G__33903 = c__4609__auto__;
var G__33904 = cljs.core.count(c__4609__auto__);
var G__33905 = (0);
seq__33841 = G__33902;
chunk__33842 = G__33903;
count__33843 = G__33904;
i__33844 = G__33905;
continue;
} else {
var vec__33854 = cljs.core.first(seq__33841__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33854,(1),null);
var temp__5733__auto___33906 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33906)){
var effect_fn_33907 = temp__5733__auto___33906;
(effect_fn_33907.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33907.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33907.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33908 = cljs.core.next(seq__33841__$1);
var G__33909 = null;
var G__33910 = (0);
var G__33911 = (0);
seq__33841 = G__33908;
chunk__33842 = G__33909;
count__33843 = G__33910;
i__33844 = G__33911;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__33558__auto___33912 = re_frame.interop.now();
var duration__33559__auto___33913 = (end__33558__auto___33912 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33559__auto___33913,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__33558__auto___33912);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33839);
}} else {
var seq__33857 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33858 = null;
var count__33859 = (0);
var i__33860 = (0);
while(true){
if((i__33860 < count__33859)){
var vec__33867 = chunk__33858.cljs$core$IIndexed$_nth$arity$2(null,i__33860);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,(1),null);
var temp__5733__auto___33914 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33914)){
var effect_fn_33915 = temp__5733__auto___33914;
(effect_fn_33915.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33915.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33915.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33916 = seq__33857;
var G__33917 = chunk__33858;
var G__33918 = count__33859;
var G__33919 = (i__33860 + (1));
seq__33857 = G__33916;
chunk__33858 = G__33917;
count__33859 = G__33918;
i__33860 = G__33919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33857);
if(temp__5735__auto__){
var seq__33857__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33857__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33857__$1);
var G__33920 = cljs.core.chunk_rest(seq__33857__$1);
var G__33921 = c__4609__auto__;
var G__33922 = cljs.core.count(c__4609__auto__);
var G__33923 = (0);
seq__33857 = G__33920;
chunk__33858 = G__33921;
count__33859 = G__33922;
i__33860 = G__33923;
continue;
} else {
var vec__33872 = cljs.core.first(seq__33857__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872,(1),null);
var temp__5733__auto___33924 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33924)){
var effect_fn_33925 = temp__5733__auto___33924;
(effect_fn_33925.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33925.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33925.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33926 = cljs.core.next(seq__33857__$1);
var G__33927 = null;
var G__33928 = (0);
var G__33929 = (0);
seq__33857 = G__33926;
chunk__33858 = G__33927;
count__33859 = G__33928;
i__33860 = G__33929;
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
var seq__33875 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33876 = null;
var count__33877 = (0);
var i__33878 = (0);
while(true){
if((i__33878 < count__33877)){
var map__33883 = chunk__33876.cljs$core$IIndexed$_nth$arity$2(null,i__33878);
var map__33883__$1 = (((((!((map__33883 == null))))?(((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33883):map__33883);
var effect = map__33883__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33883__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33883__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33875,chunk__33876,count__33877,i__33878,map__33883,map__33883__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33875,chunk__33876,count__33877,i__33878,map__33883,map__33883__$1,effect,ms,dispatch))
,ms);
}


var G__33930 = seq__33875;
var G__33931 = chunk__33876;
var G__33932 = count__33877;
var G__33933 = (i__33878 + (1));
seq__33875 = G__33930;
chunk__33876 = G__33931;
count__33877 = G__33932;
i__33878 = G__33933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33875);
if(temp__5735__auto__){
var seq__33875__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33875__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33875__$1);
var G__33934 = cljs.core.chunk_rest(seq__33875__$1);
var G__33935 = c__4609__auto__;
var G__33936 = cljs.core.count(c__4609__auto__);
var G__33937 = (0);
seq__33875 = G__33934;
chunk__33876 = G__33935;
count__33877 = G__33936;
i__33878 = G__33937;
continue;
} else {
var map__33886 = cljs.core.first(seq__33875__$1);
var map__33886__$1 = (((((!((map__33886 == null))))?(((((map__33886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33886):map__33886);
var effect = map__33886__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33886__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33886__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33875,chunk__33876,count__33877,i__33878,map__33886,map__33886__$1,effect,ms,dispatch,seq__33875__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33875,chunk__33876,count__33877,i__33878,map__33886,map__33886__$1,effect,ms,dispatch,seq__33875__$1,temp__5735__auto__))
,ms);
}


var G__33941 = cljs.core.next(seq__33875__$1);
var G__33942 = null;
var G__33943 = (0);
var G__33944 = (0);
seq__33875 = G__33941;
chunk__33876 = G__33942;
count__33877 = G__33943;
i__33878 = G__33944;
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
var seq__33888 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33889 = null;
var count__33890 = (0);
var i__33891 = (0);
while(true){
if((i__33891 < count__33890)){
var event = chunk__33889.cljs$core$IIndexed$_nth$arity$2(null,i__33891);
re_frame.router.dispatch(event);


var G__33945 = seq__33888;
var G__33946 = chunk__33889;
var G__33947 = count__33890;
var G__33948 = (i__33891 + (1));
seq__33888 = G__33945;
chunk__33889 = G__33946;
count__33890 = G__33947;
i__33891 = G__33948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33888);
if(temp__5735__auto__){
var seq__33888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33888__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33888__$1);
var G__33949 = cljs.core.chunk_rest(seq__33888__$1);
var G__33950 = c__4609__auto__;
var G__33951 = cljs.core.count(c__4609__auto__);
var G__33952 = (0);
seq__33888 = G__33949;
chunk__33889 = G__33950;
count__33890 = G__33951;
i__33891 = G__33952;
continue;
} else {
var event = cljs.core.first(seq__33888__$1);
re_frame.router.dispatch(event);


var G__33953 = cljs.core.next(seq__33888__$1);
var G__33954 = null;
var G__33955 = (0);
var G__33956 = (0);
seq__33888 = G__33953;
chunk__33889 = G__33954;
count__33890 = G__33955;
i__33891 = G__33956;
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
var seq__33892 = cljs.core.seq(value);
var chunk__33893 = null;
var count__33894 = (0);
var i__33895 = (0);
while(true){
if((i__33895 < count__33894)){
var event = chunk__33893.cljs$core$IIndexed$_nth$arity$2(null,i__33895);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33963 = seq__33892;
var G__33964 = chunk__33893;
var G__33965 = count__33894;
var G__33966 = (i__33895 + (1));
seq__33892 = G__33963;
chunk__33893 = G__33964;
count__33894 = G__33965;
i__33895 = G__33966;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33892);
if(temp__5735__auto__){
var seq__33892__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33892__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33892__$1);
var G__33967 = cljs.core.chunk_rest(seq__33892__$1);
var G__33968 = c__4609__auto__;
var G__33969 = cljs.core.count(c__4609__auto__);
var G__33970 = (0);
seq__33892 = G__33967;
chunk__33893 = G__33968;
count__33894 = G__33969;
i__33895 = G__33970;
continue;
} else {
var event = cljs.core.first(seq__33892__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33973 = cljs.core.next(seq__33892__$1);
var G__33974 = null;
var G__33975 = (0);
var G__33976 = (0);
seq__33892 = G__33973;
chunk__33893 = G__33974;
count__33894 = G__33975;
i__33895 = G__33976;
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
