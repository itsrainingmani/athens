goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37061 = arguments.length;
switch (G__37061) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37062 = (function (f,blockable,meta37063){
this.f = f;
this.blockable = blockable;
this.meta37063 = meta37063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37064,meta37063__$1){
var self__ = this;
var _37064__$1 = this;
return (new cljs.core.async.t_cljs$core$async37062(self__.f,self__.blockable,meta37063__$1));
}));

(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37064){
var self__ = this;
var _37064__$1 = this;
return self__.meta37063;
}));

(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37063","meta37063",-378923262,null)], null);
}));

(cljs.core.async.t_cljs$core$async37062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37062");

(cljs.core.async.t_cljs$core$async37062.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37062.
 */
cljs.core.async.__GT_t_cljs$core$async37062 = (function cljs$core$async$__GT_t_cljs$core$async37062(f__$1,blockable__$1,meta37063){
return (new cljs.core.async.t_cljs$core$async37062(f__$1,blockable__$1,meta37063));
});

}

return (new cljs.core.async.t_cljs$core$async37062(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37069 = arguments.length;
switch (G__37069) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37071 = arguments.length;
switch (G__37071) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37073 = arguments.length;
switch (G__37073) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38534 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38534) : fn1.call(null,val_38534));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38534) : fn1.call(null,val_38534));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37075 = arguments.length;
switch (G__37075) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___38536 = n;
var x_38537 = (0);
while(true){
if((x_38537 < n__4666__auto___38536)){
(a[x_38537] = x_38537);

var G__38538 = (x_38537 + (1));
x_38537 = G__38538;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37076 = (function (flag,meta37077){
this.flag = flag;
this.meta37077 = meta37077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37078,meta37077__$1){
var self__ = this;
var _37078__$1 = this;
return (new cljs.core.async.t_cljs$core$async37076(self__.flag,meta37077__$1));
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37078){
var self__ = this;
var _37078__$1 = this;
return self__.meta37077;
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37077","meta37077",-225989788,null)], null);
}));

(cljs.core.async.t_cljs$core$async37076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37076");

(cljs.core.async.t_cljs$core$async37076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37076.
 */
cljs.core.async.__GT_t_cljs$core$async37076 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37076(flag__$1,meta37077){
return (new cljs.core.async.t_cljs$core$async37076(flag__$1,meta37077));
});

}

return (new cljs.core.async.t_cljs$core$async37076(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37079 = (function (flag,cb,meta37080){
this.flag = flag;
this.cb = cb;
this.meta37080 = meta37080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37081,meta37080__$1){
var self__ = this;
var _37081__$1 = this;
return (new cljs.core.async.t_cljs$core$async37079(self__.flag,self__.cb,meta37080__$1));
}));

(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37081){
var self__ = this;
var _37081__$1 = this;
return self__.meta37080;
}));

(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37080","meta37080",-773370516,null)], null);
}));

(cljs.core.async.t_cljs$core$async37079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37079");

(cljs.core.async.t_cljs$core$async37079.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37079.
 */
cljs.core.async.__GT_t_cljs$core$async37079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37079(flag__$1,cb__$1,meta37080){
return (new cljs.core.async.t_cljs$core$async37079(flag__$1,cb__$1,meta37080));
});

}

return (new cljs.core.async.t_cljs$core$async37079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37085_SHARP_){
var G__37090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37085_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37090) : fret.call(null,G__37090));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37087_SHARP_){
var G__37091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37087_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37091) : fret.call(null,G__37091));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38544 = (i + (1));
i = G__38544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38549 = arguments.length;
var i__4790__auto___38550 = (0);
while(true){
if((i__4790__auto___38550 < len__4789__auto___38549)){
args__4795__auto__.push((arguments[i__4790__auto___38550]));

var G__38551 = (i__4790__auto___38550 + (1));
i__4790__auto___38550 = G__38551;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37096){
var map__37097 = p__37096;
var map__37097__$1 = (((((!((map__37097 == null))))?(((((map__37097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37097):map__37097);
var opts = map__37097__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37093){
var G__37094 = cljs.core.first(seq37093);
var seq37093__$1 = cljs.core.next(seq37093);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37094,seq37093__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37101 = arguments.length;
switch (G__37101) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37003__auto___38560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37128){
var state_val_37129 = (state_37128[(1)]);
if((state_val_37129 === (7))){
var inst_37124 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37130_38561 = state_37128__$1;
(statearr_37130_38561[(2)] = inst_37124);

(statearr_37130_38561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (1))){
var state_37128__$1 = state_37128;
var statearr_37131_38563 = state_37128__$1;
(statearr_37131_38563[(2)] = null);

(statearr_37131_38563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (4))){
var inst_37107 = (state_37128[(7)]);
var inst_37107__$1 = (state_37128[(2)]);
var inst_37108 = (inst_37107__$1 == null);
var state_37128__$1 = (function (){var statearr_37132 = state_37128;
(statearr_37132[(7)] = inst_37107__$1);

return statearr_37132;
})();
if(cljs.core.truth_(inst_37108)){
var statearr_37133_38564 = state_37128__$1;
(statearr_37133_38564[(1)] = (5));

} else {
var statearr_37134_38565 = state_37128__$1;
(statearr_37134_38565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (13))){
var state_37128__$1 = state_37128;
var statearr_37135_38566 = state_37128__$1;
(statearr_37135_38566[(2)] = null);

(statearr_37135_38566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (6))){
var inst_37107 = (state_37128[(7)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37128__$1,(11),to,inst_37107);
} else {
if((state_val_37129 === (3))){
var inst_37126 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37128__$1,inst_37126);
} else {
if((state_val_37129 === (12))){
var state_37128__$1 = state_37128;
var statearr_37136_38569 = state_37128__$1;
(statearr_37136_38569[(2)] = null);

(statearr_37136_38569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (2))){
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37128__$1,(4),from);
} else {
if((state_val_37129 === (11))){
var inst_37117 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37117)){
var statearr_37137_38571 = state_37128__$1;
(statearr_37137_38571[(1)] = (12));

} else {
var statearr_37138_38572 = state_37128__$1;
(statearr_37138_38572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (9))){
var state_37128__$1 = state_37128;
var statearr_37139_38573 = state_37128__$1;
(statearr_37139_38573[(2)] = null);

(statearr_37139_38573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (5))){
var state_37128__$1 = state_37128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37140_38574 = state_37128__$1;
(statearr_37140_38574[(1)] = (8));

} else {
var statearr_37141_38575 = state_37128__$1;
(statearr_37141_38575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (14))){
var inst_37122 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37142_38576 = state_37128__$1;
(statearr_37142_38576[(2)] = inst_37122);

(statearr_37142_38576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (10))){
var inst_37114 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37143_38577 = state_37128__$1;
(statearr_37143_38577[(2)] = inst_37114);

(statearr_37143_38577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (8))){
var inst_37111 = cljs.core.async.close_BANG_(to);
var state_37128__$1 = state_37128;
var statearr_37144_38578 = state_37128__$1;
(statearr_37144_38578[(2)] = inst_37111);

(statearr_37144_38578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_37145 = [null,null,null,null,null,null,null,null];
(statearr_37145[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_37145[(1)] = (1));

return statearr_37145;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_37128){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37128);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37146){if((e37146 instanceof Object)){
var ex__36939__auto__ = e37146;
var statearr_37147_38579 = state_37128;
(statearr_37147_38579[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38580 = state_37128;
state_37128 = G__38580;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_37128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_37128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37148 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37148[(6)] = c__37003__auto___38560);

return statearr_37148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__37149){
var vec__37150 = p__37149;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37150,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37150,(1),null);
var job = vec__37150;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37003__auto___38581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37157){
var state_val_37158 = (state_37157[(1)]);
if((state_val_37158 === (1))){
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37157__$1,(2),res,v);
} else {
if((state_val_37158 === (2))){
var inst_37154 = (state_37157[(2)]);
var inst_37155 = cljs.core.async.close_BANG_(res);
var state_37157__$1 = (function (){var statearr_37159 = state_37157;
(statearr_37159[(7)] = inst_37154);

return statearr_37159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37157__$1,inst_37155);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_37160 = [null,null,null,null,null,null,null,null];
(statearr_37160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__);

(statearr_37160[(1)] = (1));

return statearr_37160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1 = (function (state_37157){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37157);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37161){if((e37161 instanceof Object)){
var ex__36939__auto__ = e37161;
var statearr_37162_38582 = state_37157;
(statearr_37162_38582[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38583 = state_37157;
state_37157 = G__38583;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = function(state_37157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1.call(this,state_37157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37163 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37163[(6)] = c__37003__auto___38581);

return statearr_37163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37164){
var vec__37165 = p__37164;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37165,(1),null);
var job = vec__37165;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___38596 = n;
var __38597 = (0);
while(true){
if((__38597 < n__4666__auto___38596)){
var G__37168_38598 = type;
var G__37168_38599__$1 = (((G__37168_38598 instanceof cljs.core.Keyword))?G__37168_38598.fqn:null);
switch (G__37168_38599__$1) {
case "compute":
var c__37003__auto___38601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38597,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = ((function (__38597,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function (state_37181){
var state_val_37182 = (state_37181[(1)]);
if((state_val_37182 === (1))){
var state_37181__$1 = state_37181;
var statearr_37183_38602 = state_37181__$1;
(statearr_37183_38602[(2)] = null);

(statearr_37183_38602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (2))){
var state_37181__$1 = state_37181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37181__$1,(4),jobs);
} else {
if((state_val_37182 === (3))){
var inst_37179 = (state_37181[(2)]);
var state_37181__$1 = state_37181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37181__$1,inst_37179);
} else {
if((state_val_37182 === (4))){
var inst_37171 = (state_37181[(2)]);
var inst_37172 = process(inst_37171);
var state_37181__$1 = state_37181;
if(cljs.core.truth_(inst_37172)){
var statearr_37184_38604 = state_37181__$1;
(statearr_37184_38604[(1)] = (5));

} else {
var statearr_37185_38606 = state_37181__$1;
(statearr_37185_38606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (5))){
var state_37181__$1 = state_37181;
var statearr_37186_38607 = state_37181__$1;
(statearr_37186_38607[(2)] = null);

(statearr_37186_38607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (6))){
var state_37181__$1 = state_37181;
var statearr_37187_38608 = state_37181__$1;
(statearr_37187_38608[(2)] = null);

(statearr_37187_38608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37182 === (7))){
var inst_37177 = (state_37181[(2)]);
var state_37181__$1 = state_37181;
var statearr_37188_38609 = state_37181__$1;
(statearr_37188_38609[(2)] = inst_37177);

(statearr_37188_38609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38597,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
;
return ((function (__38597,switch__36935__auto__,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_37189 = [null,null,null,null,null,null,null];
(statearr_37189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__);

(statearr_37189[(1)] = (1));

return statearr_37189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1 = (function (state_37181){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37181);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37190){if((e37190 instanceof Object)){
var ex__36939__auto__ = e37190;
var statearr_37191_38612 = state_37181;
(statearr_37191_38612[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38613 = state_37181;
state_37181 = G__38613;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = function(state_37181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1.call(this,state_37181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__;
})()
;})(__38597,switch__36935__auto__,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
})();
var state__37005__auto__ = (function (){var statearr_37192 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37192[(6)] = c__37003__auto___38601);

return statearr_37192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
});})(__38597,c__37003__auto___38601,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
);


break;
case "async":
var c__37003__auto___38614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38597,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = ((function (__38597,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function (state_37205){
var state_val_37206 = (state_37205[(1)]);
if((state_val_37206 === (1))){
var state_37205__$1 = state_37205;
var statearr_37207_38615 = state_37205__$1;
(statearr_37207_38615[(2)] = null);

(statearr_37207_38615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (2))){
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37205__$1,(4),jobs);
} else {
if((state_val_37206 === (3))){
var inst_37203 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37205__$1,inst_37203);
} else {
if((state_val_37206 === (4))){
var inst_37195 = (state_37205[(2)]);
var inst_37196 = async(inst_37195);
var state_37205__$1 = state_37205;
if(cljs.core.truth_(inst_37196)){
var statearr_37208_38616 = state_37205__$1;
(statearr_37208_38616[(1)] = (5));

} else {
var statearr_37209_38617 = state_37205__$1;
(statearr_37209_38617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (5))){
var state_37205__$1 = state_37205;
var statearr_37210_38618 = state_37205__$1;
(statearr_37210_38618[(2)] = null);

(statearr_37210_38618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (6))){
var state_37205__$1 = state_37205;
var statearr_37211_38619 = state_37205__$1;
(statearr_37211_38619[(2)] = null);

(statearr_37211_38619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (7))){
var inst_37201 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37212_38620 = state_37205__$1;
(statearr_37212_38620[(2)] = inst_37201);

(statearr_37212_38620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38597,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
;
return ((function (__38597,switch__36935__auto__,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_37213 = [null,null,null,null,null,null,null];
(statearr_37213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__);

(statearr_37213[(1)] = (1));

return statearr_37213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1 = (function (state_37205){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37205);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37214){if((e37214 instanceof Object)){
var ex__36939__auto__ = e37214;
var statearr_37215_38621 = state_37205;
(statearr_37215_38621[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38622 = state_37205;
state_37205 = G__38622;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = function(state_37205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1.call(this,state_37205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__;
})()
;})(__38597,switch__36935__auto__,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
})();
var state__37005__auto__ = (function (){var statearr_37216 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37216[(6)] = c__37003__auto___38614);

return statearr_37216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
});})(__38597,c__37003__auto___38614,G__37168_38598,G__37168_38599__$1,n__4666__auto___38596,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37168_38599__$1)].join('')));

}

var G__38623 = (__38597 + (1));
__38597 = G__38623;
continue;
} else {
}
break;
}

var c__37003__auto___38624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37238){
var state_val_37239 = (state_37238[(1)]);
if((state_val_37239 === (7))){
var inst_37234 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
var statearr_37240_38625 = state_37238__$1;
(statearr_37240_38625[(2)] = inst_37234);

(statearr_37240_38625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (1))){
var state_37238__$1 = state_37238;
var statearr_37241_38626 = state_37238__$1;
(statearr_37241_38626[(2)] = null);

(statearr_37241_38626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (4))){
var inst_37219 = (state_37238[(7)]);
var inst_37219__$1 = (state_37238[(2)]);
var inst_37220 = (inst_37219__$1 == null);
var state_37238__$1 = (function (){var statearr_37242 = state_37238;
(statearr_37242[(7)] = inst_37219__$1);

return statearr_37242;
})();
if(cljs.core.truth_(inst_37220)){
var statearr_37243_38627 = state_37238__$1;
(statearr_37243_38627[(1)] = (5));

} else {
var statearr_37244_38628 = state_37238__$1;
(statearr_37244_38628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (6))){
var inst_37219 = (state_37238[(7)]);
var inst_37224 = (state_37238[(8)]);
var inst_37224__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37226 = [inst_37219,inst_37224__$1];
var inst_37227 = (new cljs.core.PersistentVector(null,2,(5),inst_37225,inst_37226,null));
var state_37238__$1 = (function (){var statearr_37245 = state_37238;
(statearr_37245[(8)] = inst_37224__$1);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37238__$1,(8),jobs,inst_37227);
} else {
if((state_val_37239 === (3))){
var inst_37236 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37238__$1,inst_37236);
} else {
if((state_val_37239 === (2))){
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37238__$1,(4),from);
} else {
if((state_val_37239 === (9))){
var inst_37231 = (state_37238[(2)]);
var state_37238__$1 = (function (){var statearr_37246 = state_37238;
(statearr_37246[(9)] = inst_37231);

return statearr_37246;
})();
var statearr_37247_38629 = state_37238__$1;
(statearr_37247_38629[(2)] = null);

(statearr_37247_38629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (5))){
var inst_37222 = cljs.core.async.close_BANG_(jobs);
var state_37238__$1 = state_37238;
var statearr_37248_38630 = state_37238__$1;
(statearr_37248_38630[(2)] = inst_37222);

(statearr_37248_38630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (8))){
var inst_37224 = (state_37238[(8)]);
var inst_37229 = (state_37238[(2)]);
var state_37238__$1 = (function (){var statearr_37249 = state_37238;
(statearr_37249[(10)] = inst_37229);

return statearr_37249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37238__$1,(9),results,inst_37224);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_37250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__);

(statearr_37250[(1)] = (1));

return statearr_37250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1 = (function (state_37238){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37238);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37251){if((e37251 instanceof Object)){
var ex__36939__auto__ = e37251;
var statearr_37252_38631 = state_37238;
(statearr_37252_38631[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38632 = state_37238;
state_37238 = G__38632;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = function(state_37238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1.call(this,state_37238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37253 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37253[(6)] = c__37003__auto___38624);

return statearr_37253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37291){
var state_val_37292 = (state_37291[(1)]);
if((state_val_37292 === (7))){
var inst_37287 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37293_38633 = state_37291__$1;
(statearr_37293_38633[(2)] = inst_37287);

(statearr_37293_38633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (20))){
var state_37291__$1 = state_37291;
var statearr_37294_38634 = state_37291__$1;
(statearr_37294_38634[(2)] = null);

(statearr_37294_38634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (1))){
var state_37291__$1 = state_37291;
var statearr_37295_38635 = state_37291__$1;
(statearr_37295_38635[(2)] = null);

(statearr_37295_38635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (4))){
var inst_37256 = (state_37291[(7)]);
var inst_37256__$1 = (state_37291[(2)]);
var inst_37257 = (inst_37256__$1 == null);
var state_37291__$1 = (function (){var statearr_37296 = state_37291;
(statearr_37296[(7)] = inst_37256__$1);

return statearr_37296;
})();
if(cljs.core.truth_(inst_37257)){
var statearr_37297_38636 = state_37291__$1;
(statearr_37297_38636[(1)] = (5));

} else {
var statearr_37298_38637 = state_37291__$1;
(statearr_37298_38637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (15))){
var inst_37269 = (state_37291[(8)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37291__$1,(18),to,inst_37269);
} else {
if((state_val_37292 === (21))){
var inst_37282 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37299_38638 = state_37291__$1;
(statearr_37299_38638[(2)] = inst_37282);

(statearr_37299_38638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (13))){
var inst_37284 = (state_37291[(2)]);
var state_37291__$1 = (function (){var statearr_37300 = state_37291;
(statearr_37300[(9)] = inst_37284);

return statearr_37300;
})();
var statearr_37301_38639 = state_37291__$1;
(statearr_37301_38639[(2)] = null);

(statearr_37301_38639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (6))){
var inst_37256 = (state_37291[(7)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37291__$1,(11),inst_37256);
} else {
if((state_val_37292 === (17))){
var inst_37277 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
if(cljs.core.truth_(inst_37277)){
var statearr_37302_38640 = state_37291__$1;
(statearr_37302_38640[(1)] = (19));

} else {
var statearr_37303_38641 = state_37291__$1;
(statearr_37303_38641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (3))){
var inst_37289 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37291__$1,inst_37289);
} else {
if((state_val_37292 === (12))){
var inst_37266 = (state_37291[(10)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37291__$1,(14),inst_37266);
} else {
if((state_val_37292 === (2))){
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37291__$1,(4),results);
} else {
if((state_val_37292 === (19))){
var state_37291__$1 = state_37291;
var statearr_37304_38642 = state_37291__$1;
(statearr_37304_38642[(2)] = null);

(statearr_37304_38642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (11))){
var inst_37266 = (state_37291[(2)]);
var state_37291__$1 = (function (){var statearr_37305 = state_37291;
(statearr_37305[(10)] = inst_37266);

return statearr_37305;
})();
var statearr_37306_38643 = state_37291__$1;
(statearr_37306_38643[(2)] = null);

(statearr_37306_38643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (9))){
var state_37291__$1 = state_37291;
var statearr_37307_38644 = state_37291__$1;
(statearr_37307_38644[(2)] = null);

(statearr_37307_38644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (5))){
var state_37291__$1 = state_37291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37308_38645 = state_37291__$1;
(statearr_37308_38645[(1)] = (8));

} else {
var statearr_37309_38646 = state_37291__$1;
(statearr_37309_38646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (14))){
var inst_37269 = (state_37291[(8)]);
var inst_37269__$1 = (state_37291[(2)]);
var inst_37270 = (inst_37269__$1 == null);
var inst_37271 = cljs.core.not(inst_37270);
var state_37291__$1 = (function (){var statearr_37310 = state_37291;
(statearr_37310[(8)] = inst_37269__$1);

return statearr_37310;
})();
if(inst_37271){
var statearr_37311_38647 = state_37291__$1;
(statearr_37311_38647[(1)] = (15));

} else {
var statearr_37312_38648 = state_37291__$1;
(statearr_37312_38648[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (16))){
var state_37291__$1 = state_37291;
var statearr_37313_38649 = state_37291__$1;
(statearr_37313_38649[(2)] = false);

(statearr_37313_38649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (10))){
var inst_37263 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37314_38650 = state_37291__$1;
(statearr_37314_38650[(2)] = inst_37263);

(statearr_37314_38650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (18))){
var inst_37274 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37315_38651 = state_37291__$1;
(statearr_37315_38651[(2)] = inst_37274);

(statearr_37315_38651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (8))){
var inst_37260 = cljs.core.async.close_BANG_(to);
var state_37291__$1 = state_37291;
var statearr_37316_38652 = state_37291__$1;
(statearr_37316_38652[(2)] = inst_37260);

(statearr_37316_38652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_37317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__);

(statearr_37317[(1)] = (1));

return statearr_37317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1 = (function (state_37291){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37291);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37318){if((e37318 instanceof Object)){
var ex__36939__auto__ = e37318;
var statearr_37319_38653 = state_37291;
(statearr_37319_38653[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38654 = state_37291;
state_37291 = G__38654;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__ = function(state_37291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1.call(this,state_37291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37320 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37320[(6)] = c__37003__auto__);

return statearr_37320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37322 = arguments.length;
switch (G__37322) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37324 = arguments.length;
switch (G__37324) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37326 = arguments.length;
switch (G__37326) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37003__auto___38658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37352){
var state_val_37353 = (state_37352[(1)]);
if((state_val_37353 === (7))){
var inst_37348 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
var statearr_37354_38659 = state_37352__$1;
(statearr_37354_38659[(2)] = inst_37348);

(statearr_37354_38659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (1))){
var state_37352__$1 = state_37352;
var statearr_37355_38660 = state_37352__$1;
(statearr_37355_38660[(2)] = null);

(statearr_37355_38660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (4))){
var inst_37329 = (state_37352[(7)]);
var inst_37329__$1 = (state_37352[(2)]);
var inst_37330 = (inst_37329__$1 == null);
var state_37352__$1 = (function (){var statearr_37356 = state_37352;
(statearr_37356[(7)] = inst_37329__$1);

return statearr_37356;
})();
if(cljs.core.truth_(inst_37330)){
var statearr_37357_38661 = state_37352__$1;
(statearr_37357_38661[(1)] = (5));

} else {
var statearr_37358_38662 = state_37352__$1;
(statearr_37358_38662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (13))){
var state_37352__$1 = state_37352;
var statearr_37359_38663 = state_37352__$1;
(statearr_37359_38663[(2)] = null);

(statearr_37359_38663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (6))){
var inst_37329 = (state_37352[(7)]);
var inst_37335 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37329) : p.call(null,inst_37329));
var state_37352__$1 = state_37352;
if(cljs.core.truth_(inst_37335)){
var statearr_37360_38664 = state_37352__$1;
(statearr_37360_38664[(1)] = (9));

} else {
var statearr_37361_38665 = state_37352__$1;
(statearr_37361_38665[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (3))){
var inst_37350 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37352__$1,inst_37350);
} else {
if((state_val_37353 === (12))){
var state_37352__$1 = state_37352;
var statearr_37362_38666 = state_37352__$1;
(statearr_37362_38666[(2)] = null);

(statearr_37362_38666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (2))){
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37352__$1,(4),ch);
} else {
if((state_val_37353 === (11))){
var inst_37329 = (state_37352[(7)]);
var inst_37339 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37352__$1,(8),inst_37339,inst_37329);
} else {
if((state_val_37353 === (9))){
var state_37352__$1 = state_37352;
var statearr_37363_38667 = state_37352__$1;
(statearr_37363_38667[(2)] = tc);

(statearr_37363_38667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (5))){
var inst_37332 = cljs.core.async.close_BANG_(tc);
var inst_37333 = cljs.core.async.close_BANG_(fc);
var state_37352__$1 = (function (){var statearr_37364 = state_37352;
(statearr_37364[(8)] = inst_37332);

return statearr_37364;
})();
var statearr_37365_38668 = state_37352__$1;
(statearr_37365_38668[(2)] = inst_37333);

(statearr_37365_38668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (14))){
var inst_37346 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
var statearr_37366_38669 = state_37352__$1;
(statearr_37366_38669[(2)] = inst_37346);

(statearr_37366_38669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (10))){
var state_37352__$1 = state_37352;
var statearr_37367_38670 = state_37352__$1;
(statearr_37367_38670[(2)] = fc);

(statearr_37367_38670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (8))){
var inst_37341 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
if(cljs.core.truth_(inst_37341)){
var statearr_37368_38671 = state_37352__$1;
(statearr_37368_38671[(1)] = (12));

} else {
var statearr_37369_38672 = state_37352__$1;
(statearr_37369_38672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_37370 = [null,null,null,null,null,null,null,null,null];
(statearr_37370[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_37370[(1)] = (1));

return statearr_37370;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_37352){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37352);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37371){if((e37371 instanceof Object)){
var ex__36939__auto__ = e37371;
var statearr_37372_38673 = state_37352;
(statearr_37372_38673[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38674 = state_37352;
state_37352 = G__38674;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_37352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_37352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37373 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37373[(6)] = c__37003__auto___38658);

return statearr_37373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37394){
var state_val_37395 = (state_37394[(1)]);
if((state_val_37395 === (7))){
var inst_37390 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
var statearr_37396_38675 = state_37394__$1;
(statearr_37396_38675[(2)] = inst_37390);

(statearr_37396_38675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (1))){
var inst_37374 = init;
var state_37394__$1 = (function (){var statearr_37397 = state_37394;
(statearr_37397[(7)] = inst_37374);

return statearr_37397;
})();
var statearr_37398_38676 = state_37394__$1;
(statearr_37398_38676[(2)] = null);

(statearr_37398_38676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (4))){
var inst_37377 = (state_37394[(8)]);
var inst_37377__$1 = (state_37394[(2)]);
var inst_37378 = (inst_37377__$1 == null);
var state_37394__$1 = (function (){var statearr_37399 = state_37394;
(statearr_37399[(8)] = inst_37377__$1);

return statearr_37399;
})();
if(cljs.core.truth_(inst_37378)){
var statearr_37400_38677 = state_37394__$1;
(statearr_37400_38677[(1)] = (5));

} else {
var statearr_37401_38678 = state_37394__$1;
(statearr_37401_38678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (6))){
var inst_37374 = (state_37394[(7)]);
var inst_37377 = (state_37394[(8)]);
var inst_37381 = (state_37394[(9)]);
var inst_37381__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37374,inst_37377) : f.call(null,inst_37374,inst_37377));
var inst_37382 = cljs.core.reduced_QMARK_(inst_37381__$1);
var state_37394__$1 = (function (){var statearr_37402 = state_37394;
(statearr_37402[(9)] = inst_37381__$1);

return statearr_37402;
})();
if(inst_37382){
var statearr_37403_38679 = state_37394__$1;
(statearr_37403_38679[(1)] = (8));

} else {
var statearr_37404_38680 = state_37394__$1;
(statearr_37404_38680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (3))){
var inst_37392 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37394__$1,inst_37392);
} else {
if((state_val_37395 === (2))){
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37394__$1,(4),ch);
} else {
if((state_val_37395 === (9))){
var inst_37381 = (state_37394[(9)]);
var inst_37374 = inst_37381;
var state_37394__$1 = (function (){var statearr_37405 = state_37394;
(statearr_37405[(7)] = inst_37374);

return statearr_37405;
})();
var statearr_37406_38681 = state_37394__$1;
(statearr_37406_38681[(2)] = null);

(statearr_37406_38681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (5))){
var inst_37374 = (state_37394[(7)]);
var state_37394__$1 = state_37394;
var statearr_37407_38682 = state_37394__$1;
(statearr_37407_38682[(2)] = inst_37374);

(statearr_37407_38682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (10))){
var inst_37388 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
var statearr_37408_38683 = state_37394__$1;
(statearr_37408_38683[(2)] = inst_37388);

(statearr_37408_38683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (8))){
var inst_37381 = (state_37394[(9)]);
var inst_37384 = cljs.core.deref(inst_37381);
var state_37394__$1 = state_37394;
var statearr_37409_38684 = state_37394__$1;
(statearr_37409_38684[(2)] = inst_37384);

(statearr_37409_38684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36936__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36936__auto____0 = (function (){
var statearr_37410 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37410[(0)] = cljs$core$async$reduce_$_state_machine__36936__auto__);

(statearr_37410[(1)] = (1));

return statearr_37410;
});
var cljs$core$async$reduce_$_state_machine__36936__auto____1 = (function (state_37394){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37394);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37411){if((e37411 instanceof Object)){
var ex__36939__auto__ = e37411;
var statearr_37412_38685 = state_37394;
(statearr_37412_38685[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38686 = state_37394;
state_37394 = G__38686;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36936__auto__ = function(state_37394){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36936__auto____1.call(this,state_37394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36936__auto____0;
cljs$core$async$reduce_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36936__auto____1;
return cljs$core$async$reduce_$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37413 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37413[(6)] = c__37003__auto__);

return statearr_37413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37419){
var state_val_37420 = (state_37419[(1)]);
if((state_val_37420 === (1))){
var inst_37414 = cljs.core.async.reduce(f__$1,init,ch);
var state_37419__$1 = state_37419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37419__$1,(2),inst_37414);
} else {
if((state_val_37420 === (2))){
var inst_37416 = (state_37419[(2)]);
var inst_37417 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37416) : f__$1.call(null,inst_37416));
var state_37419__$1 = state_37419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37419__$1,inst_37417);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36936__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36936__auto____0 = (function (){
var statearr_37421 = [null,null,null,null,null,null,null];
(statearr_37421[(0)] = cljs$core$async$transduce_$_state_machine__36936__auto__);

(statearr_37421[(1)] = (1));

return statearr_37421;
});
var cljs$core$async$transduce_$_state_machine__36936__auto____1 = (function (state_37419){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37419);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37422){if((e37422 instanceof Object)){
var ex__36939__auto__ = e37422;
var statearr_37423_38687 = state_37419;
(statearr_37423_38687[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38688 = state_37419;
state_37419 = G__38688;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36936__auto__ = function(state_37419){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36936__auto____1.call(this,state_37419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36936__auto____0;
cljs$core$async$transduce_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36936__auto____1;
return cljs$core$async$transduce_$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37424 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37424[(6)] = c__37003__auto__);

return statearr_37424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37426 = arguments.length;
switch (G__37426) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37451){
var state_val_37452 = (state_37451[(1)]);
if((state_val_37452 === (7))){
var inst_37433 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37453_38690 = state_37451__$1;
(statearr_37453_38690[(2)] = inst_37433);

(statearr_37453_38690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (1))){
var inst_37427 = cljs.core.seq(coll);
var inst_37428 = inst_37427;
var state_37451__$1 = (function (){var statearr_37454 = state_37451;
(statearr_37454[(7)] = inst_37428);

return statearr_37454;
})();
var statearr_37455_38691 = state_37451__$1;
(statearr_37455_38691[(2)] = null);

(statearr_37455_38691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (4))){
var inst_37428 = (state_37451[(7)]);
var inst_37431 = cljs.core.first(inst_37428);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37451__$1,(7),ch,inst_37431);
} else {
if((state_val_37452 === (13))){
var inst_37445 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37456_38692 = state_37451__$1;
(statearr_37456_38692[(2)] = inst_37445);

(statearr_37456_38692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (6))){
var inst_37436 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37436)){
var statearr_37457_38693 = state_37451__$1;
(statearr_37457_38693[(1)] = (8));

} else {
var statearr_37458_38694 = state_37451__$1;
(statearr_37458_38694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (3))){
var inst_37449 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37451__$1,inst_37449);
} else {
if((state_val_37452 === (12))){
var state_37451__$1 = state_37451;
var statearr_37459_38695 = state_37451__$1;
(statearr_37459_38695[(2)] = null);

(statearr_37459_38695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (2))){
var inst_37428 = (state_37451[(7)]);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37428)){
var statearr_37460_38696 = state_37451__$1;
(statearr_37460_38696[(1)] = (4));

} else {
var statearr_37461_38697 = state_37451__$1;
(statearr_37461_38697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (11))){
var inst_37442 = cljs.core.async.close_BANG_(ch);
var state_37451__$1 = state_37451;
var statearr_37462_38698 = state_37451__$1;
(statearr_37462_38698[(2)] = inst_37442);

(statearr_37462_38698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (9))){
var state_37451__$1 = state_37451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37463_38699 = state_37451__$1;
(statearr_37463_38699[(1)] = (11));

} else {
var statearr_37464_38700 = state_37451__$1;
(statearr_37464_38700[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (5))){
var inst_37428 = (state_37451[(7)]);
var state_37451__$1 = state_37451;
var statearr_37465_38701 = state_37451__$1;
(statearr_37465_38701[(2)] = inst_37428);

(statearr_37465_38701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (10))){
var inst_37447 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37466_38702 = state_37451__$1;
(statearr_37466_38702[(2)] = inst_37447);

(statearr_37466_38702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (8))){
var inst_37428 = (state_37451[(7)]);
var inst_37438 = cljs.core.next(inst_37428);
var inst_37428__$1 = inst_37438;
var state_37451__$1 = (function (){var statearr_37467 = state_37451;
(statearr_37467[(7)] = inst_37428__$1);

return statearr_37467;
})();
var statearr_37468_38703 = state_37451__$1;
(statearr_37468_38703[(2)] = null);

(statearr_37468_38703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_37469 = [null,null,null,null,null,null,null,null];
(statearr_37469[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_37469[(1)] = (1));

return statearr_37469;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_37451){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37451);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37470){if((e37470 instanceof Object)){
var ex__36939__auto__ = e37470;
var statearr_37471_38704 = state_37451;
(statearr_37471_38704[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38705 = state_37451;
state_37451 = G__38705;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_37451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_37451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37472 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37472[(6)] = c__37003__auto__);

return statearr_37472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37473 = (function (ch,cs,meta37474){
this.ch = ch;
this.cs = cs;
this.meta37474 = meta37474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37475,meta37474__$1){
var self__ = this;
var _37475__$1 = this;
return (new cljs.core.async.t_cljs$core$async37473(self__.ch,self__.cs,meta37474__$1));
}));

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37475){
var self__ = this;
var _37475__$1 = this;
return self__.meta37474;
}));

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37473.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37474","meta37474",-459406283,null)], null);
}));

(cljs.core.async.t_cljs$core$async37473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37473");

(cljs.core.async.t_cljs$core$async37473.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37473.
 */
cljs.core.async.__GT_t_cljs$core$async37473 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37473(ch__$1,cs__$1,meta37474){
return (new cljs.core.async.t_cljs$core$async37473(ch__$1,cs__$1,meta37474));
});

}

return (new cljs.core.async.t_cljs$core$async37473(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37003__auto___38723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37610){
var state_val_37611 = (state_37610[(1)]);
if((state_val_37611 === (7))){
var inst_37606 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37612_38724 = state_37610__$1;
(statearr_37612_38724[(2)] = inst_37606);

(statearr_37612_38724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (20))){
var inst_37509 = (state_37610[(7)]);
var inst_37521 = cljs.core.first(inst_37509);
var inst_37522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37521,(0),null);
var inst_37523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37521,(1),null);
var state_37610__$1 = (function (){var statearr_37613 = state_37610;
(statearr_37613[(8)] = inst_37522);

return statearr_37613;
})();
if(cljs.core.truth_(inst_37523)){
var statearr_37614_38725 = state_37610__$1;
(statearr_37614_38725[(1)] = (22));

} else {
var statearr_37615_38726 = state_37610__$1;
(statearr_37615_38726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (27))){
var inst_37551 = (state_37610[(9)]);
var inst_37478 = (state_37610[(10)]);
var inst_37558 = (state_37610[(11)]);
var inst_37553 = (state_37610[(12)]);
var inst_37558__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37551,inst_37553);
var inst_37559 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37558__$1,inst_37478,done);
var state_37610__$1 = (function (){var statearr_37616 = state_37610;
(statearr_37616[(11)] = inst_37558__$1);

return statearr_37616;
})();
if(cljs.core.truth_(inst_37559)){
var statearr_37617_38727 = state_37610__$1;
(statearr_37617_38727[(1)] = (30));

} else {
var statearr_37618_38728 = state_37610__$1;
(statearr_37618_38728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (1))){
var state_37610__$1 = state_37610;
var statearr_37619_38729 = state_37610__$1;
(statearr_37619_38729[(2)] = null);

(statearr_37619_38729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (24))){
var inst_37509 = (state_37610[(7)]);
var inst_37528 = (state_37610[(2)]);
var inst_37529 = cljs.core.next(inst_37509);
var inst_37487 = inst_37529;
var inst_37488 = null;
var inst_37489 = (0);
var inst_37490 = (0);
var state_37610__$1 = (function (){var statearr_37620 = state_37610;
(statearr_37620[(13)] = inst_37490);

(statearr_37620[(14)] = inst_37488);

(statearr_37620[(15)] = inst_37489);

(statearr_37620[(16)] = inst_37487);

(statearr_37620[(17)] = inst_37528);

return statearr_37620;
})();
var statearr_37621_38730 = state_37610__$1;
(statearr_37621_38730[(2)] = null);

(statearr_37621_38730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (39))){
var state_37610__$1 = state_37610;
var statearr_37625_38731 = state_37610__$1;
(statearr_37625_38731[(2)] = null);

(statearr_37625_38731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (4))){
var inst_37478 = (state_37610[(10)]);
var inst_37478__$1 = (state_37610[(2)]);
var inst_37479 = (inst_37478__$1 == null);
var state_37610__$1 = (function (){var statearr_37626 = state_37610;
(statearr_37626[(10)] = inst_37478__$1);

return statearr_37626;
})();
if(cljs.core.truth_(inst_37479)){
var statearr_37627_38732 = state_37610__$1;
(statearr_37627_38732[(1)] = (5));

} else {
var statearr_37628_38733 = state_37610__$1;
(statearr_37628_38733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (15))){
var inst_37490 = (state_37610[(13)]);
var inst_37488 = (state_37610[(14)]);
var inst_37489 = (state_37610[(15)]);
var inst_37487 = (state_37610[(16)]);
var inst_37505 = (state_37610[(2)]);
var inst_37506 = (inst_37490 + (1));
var tmp37622 = inst_37488;
var tmp37623 = inst_37489;
var tmp37624 = inst_37487;
var inst_37487__$1 = tmp37624;
var inst_37488__$1 = tmp37622;
var inst_37489__$1 = tmp37623;
var inst_37490__$1 = inst_37506;
var state_37610__$1 = (function (){var statearr_37629 = state_37610;
(statearr_37629[(18)] = inst_37505);

(statearr_37629[(13)] = inst_37490__$1);

(statearr_37629[(14)] = inst_37488__$1);

(statearr_37629[(15)] = inst_37489__$1);

(statearr_37629[(16)] = inst_37487__$1);

return statearr_37629;
})();
var statearr_37630_38734 = state_37610__$1;
(statearr_37630_38734[(2)] = null);

(statearr_37630_38734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (21))){
var inst_37532 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37634_38735 = state_37610__$1;
(statearr_37634_38735[(2)] = inst_37532);

(statearr_37634_38735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (31))){
var inst_37558 = (state_37610[(11)]);
var inst_37562 = done(null);
var inst_37563 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37558);
var state_37610__$1 = (function (){var statearr_37635 = state_37610;
(statearr_37635[(19)] = inst_37562);

return statearr_37635;
})();
var statearr_37636_38736 = state_37610__$1;
(statearr_37636_38736[(2)] = inst_37563);

(statearr_37636_38736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (32))){
var inst_37551 = (state_37610[(9)]);
var inst_37552 = (state_37610[(20)]);
var inst_37553 = (state_37610[(12)]);
var inst_37550 = (state_37610[(21)]);
var inst_37565 = (state_37610[(2)]);
var inst_37566 = (inst_37553 + (1));
var tmp37631 = inst_37551;
var tmp37632 = inst_37552;
var tmp37633 = inst_37550;
var inst_37550__$1 = tmp37633;
var inst_37551__$1 = tmp37631;
var inst_37552__$1 = tmp37632;
var inst_37553__$1 = inst_37566;
var state_37610__$1 = (function (){var statearr_37637 = state_37610;
(statearr_37637[(22)] = inst_37565);

(statearr_37637[(9)] = inst_37551__$1);

(statearr_37637[(20)] = inst_37552__$1);

(statearr_37637[(12)] = inst_37553__$1);

(statearr_37637[(21)] = inst_37550__$1);

return statearr_37637;
})();
var statearr_37638_38737 = state_37610__$1;
(statearr_37638_38737[(2)] = null);

(statearr_37638_38737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (40))){
var inst_37578 = (state_37610[(23)]);
var inst_37582 = done(null);
var inst_37583 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37578);
var state_37610__$1 = (function (){var statearr_37639 = state_37610;
(statearr_37639[(24)] = inst_37582);

return statearr_37639;
})();
var statearr_37640_38738 = state_37610__$1;
(statearr_37640_38738[(2)] = inst_37583);

(statearr_37640_38738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (33))){
var inst_37569 = (state_37610[(25)]);
var inst_37571 = cljs.core.chunked_seq_QMARK_(inst_37569);
var state_37610__$1 = state_37610;
if(inst_37571){
var statearr_37641_38741 = state_37610__$1;
(statearr_37641_38741[(1)] = (36));

} else {
var statearr_37642_38742 = state_37610__$1;
(statearr_37642_38742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (13))){
var inst_37499 = (state_37610[(26)]);
var inst_37502 = cljs.core.async.close_BANG_(inst_37499);
var state_37610__$1 = state_37610;
var statearr_37643_38745 = state_37610__$1;
(statearr_37643_38745[(2)] = inst_37502);

(statearr_37643_38745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (22))){
var inst_37522 = (state_37610[(8)]);
var inst_37525 = cljs.core.async.close_BANG_(inst_37522);
var state_37610__$1 = state_37610;
var statearr_37644_38746 = state_37610__$1;
(statearr_37644_38746[(2)] = inst_37525);

(statearr_37644_38746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (36))){
var inst_37569 = (state_37610[(25)]);
var inst_37573 = cljs.core.chunk_first(inst_37569);
var inst_37574 = cljs.core.chunk_rest(inst_37569);
var inst_37575 = cljs.core.count(inst_37573);
var inst_37550 = inst_37574;
var inst_37551 = inst_37573;
var inst_37552 = inst_37575;
var inst_37553 = (0);
var state_37610__$1 = (function (){var statearr_37645 = state_37610;
(statearr_37645[(9)] = inst_37551);

(statearr_37645[(20)] = inst_37552);

(statearr_37645[(12)] = inst_37553);

(statearr_37645[(21)] = inst_37550);

return statearr_37645;
})();
var statearr_37646_38747 = state_37610__$1;
(statearr_37646_38747[(2)] = null);

(statearr_37646_38747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (41))){
var inst_37569 = (state_37610[(25)]);
var inst_37585 = (state_37610[(2)]);
var inst_37586 = cljs.core.next(inst_37569);
var inst_37550 = inst_37586;
var inst_37551 = null;
var inst_37552 = (0);
var inst_37553 = (0);
var state_37610__$1 = (function (){var statearr_37647 = state_37610;
(statearr_37647[(9)] = inst_37551);

(statearr_37647[(20)] = inst_37552);

(statearr_37647[(27)] = inst_37585);

(statearr_37647[(12)] = inst_37553);

(statearr_37647[(21)] = inst_37550);

return statearr_37647;
})();
var statearr_37648_38750 = state_37610__$1;
(statearr_37648_38750[(2)] = null);

(statearr_37648_38750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (43))){
var state_37610__$1 = state_37610;
var statearr_37649_38751 = state_37610__$1;
(statearr_37649_38751[(2)] = null);

(statearr_37649_38751[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (29))){
var inst_37594 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37650_38752 = state_37610__$1;
(statearr_37650_38752[(2)] = inst_37594);

(statearr_37650_38752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (44))){
var inst_37603 = (state_37610[(2)]);
var state_37610__$1 = (function (){var statearr_37651 = state_37610;
(statearr_37651[(28)] = inst_37603);

return statearr_37651;
})();
var statearr_37652_38756 = state_37610__$1;
(statearr_37652_38756[(2)] = null);

(statearr_37652_38756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (6))){
var inst_37542 = (state_37610[(29)]);
var inst_37541 = cljs.core.deref(cs);
var inst_37542__$1 = cljs.core.keys(inst_37541);
var inst_37543 = cljs.core.count(inst_37542__$1);
var inst_37544 = cljs.core.reset_BANG_(dctr,inst_37543);
var inst_37549 = cljs.core.seq(inst_37542__$1);
var inst_37550 = inst_37549;
var inst_37551 = null;
var inst_37552 = (0);
var inst_37553 = (0);
var state_37610__$1 = (function (){var statearr_37653 = state_37610;
(statearr_37653[(9)] = inst_37551);

(statearr_37653[(20)] = inst_37552);

(statearr_37653[(29)] = inst_37542__$1);

(statearr_37653[(30)] = inst_37544);

(statearr_37653[(12)] = inst_37553);

(statearr_37653[(21)] = inst_37550);

return statearr_37653;
})();
var statearr_37654_38761 = state_37610__$1;
(statearr_37654_38761[(2)] = null);

(statearr_37654_38761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (28))){
var inst_37569 = (state_37610[(25)]);
var inst_37550 = (state_37610[(21)]);
var inst_37569__$1 = cljs.core.seq(inst_37550);
var state_37610__$1 = (function (){var statearr_37655 = state_37610;
(statearr_37655[(25)] = inst_37569__$1);

return statearr_37655;
})();
if(inst_37569__$1){
var statearr_37656_38762 = state_37610__$1;
(statearr_37656_38762[(1)] = (33));

} else {
var statearr_37657_38763 = state_37610__$1;
(statearr_37657_38763[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (25))){
var inst_37552 = (state_37610[(20)]);
var inst_37553 = (state_37610[(12)]);
var inst_37555 = (inst_37553 < inst_37552);
var inst_37556 = inst_37555;
var state_37610__$1 = state_37610;
if(cljs.core.truth_(inst_37556)){
var statearr_37658_38764 = state_37610__$1;
(statearr_37658_38764[(1)] = (27));

} else {
var statearr_37659_38765 = state_37610__$1;
(statearr_37659_38765[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (34))){
var state_37610__$1 = state_37610;
var statearr_37660_38766 = state_37610__$1;
(statearr_37660_38766[(2)] = null);

(statearr_37660_38766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (17))){
var state_37610__$1 = state_37610;
var statearr_37661_38767 = state_37610__$1;
(statearr_37661_38767[(2)] = null);

(statearr_37661_38767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (3))){
var inst_37608 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37610__$1,inst_37608);
} else {
if((state_val_37611 === (12))){
var inst_37537 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37662_38768 = state_37610__$1;
(statearr_37662_38768[(2)] = inst_37537);

(statearr_37662_38768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (2))){
var state_37610__$1 = state_37610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37610__$1,(4),ch);
} else {
if((state_val_37611 === (23))){
var state_37610__$1 = state_37610;
var statearr_37663_38769 = state_37610__$1;
(statearr_37663_38769[(2)] = null);

(statearr_37663_38769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (35))){
var inst_37592 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37664_38770 = state_37610__$1;
(statearr_37664_38770[(2)] = inst_37592);

(statearr_37664_38770[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (19))){
var inst_37509 = (state_37610[(7)]);
var inst_37513 = cljs.core.chunk_first(inst_37509);
var inst_37514 = cljs.core.chunk_rest(inst_37509);
var inst_37515 = cljs.core.count(inst_37513);
var inst_37487 = inst_37514;
var inst_37488 = inst_37513;
var inst_37489 = inst_37515;
var inst_37490 = (0);
var state_37610__$1 = (function (){var statearr_37665 = state_37610;
(statearr_37665[(13)] = inst_37490);

(statearr_37665[(14)] = inst_37488);

(statearr_37665[(15)] = inst_37489);

(statearr_37665[(16)] = inst_37487);

return statearr_37665;
})();
var statearr_37666_38771 = state_37610__$1;
(statearr_37666_38771[(2)] = null);

(statearr_37666_38771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (11))){
var inst_37487 = (state_37610[(16)]);
var inst_37509 = (state_37610[(7)]);
var inst_37509__$1 = cljs.core.seq(inst_37487);
var state_37610__$1 = (function (){var statearr_37667 = state_37610;
(statearr_37667[(7)] = inst_37509__$1);

return statearr_37667;
})();
if(inst_37509__$1){
var statearr_37668_38772 = state_37610__$1;
(statearr_37668_38772[(1)] = (16));

} else {
var statearr_37669_38773 = state_37610__$1;
(statearr_37669_38773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (9))){
var inst_37539 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37670_38775 = state_37610__$1;
(statearr_37670_38775[(2)] = inst_37539);

(statearr_37670_38775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (5))){
var inst_37485 = cljs.core.deref(cs);
var inst_37486 = cljs.core.seq(inst_37485);
var inst_37487 = inst_37486;
var inst_37488 = null;
var inst_37489 = (0);
var inst_37490 = (0);
var state_37610__$1 = (function (){var statearr_37671 = state_37610;
(statearr_37671[(13)] = inst_37490);

(statearr_37671[(14)] = inst_37488);

(statearr_37671[(15)] = inst_37489);

(statearr_37671[(16)] = inst_37487);

return statearr_37671;
})();
var statearr_37672_38782 = state_37610__$1;
(statearr_37672_38782[(2)] = null);

(statearr_37672_38782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (14))){
var state_37610__$1 = state_37610;
var statearr_37673_38783 = state_37610__$1;
(statearr_37673_38783[(2)] = null);

(statearr_37673_38783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (45))){
var inst_37600 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37674_38788 = state_37610__$1;
(statearr_37674_38788[(2)] = inst_37600);

(statearr_37674_38788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (26))){
var inst_37542 = (state_37610[(29)]);
var inst_37596 = (state_37610[(2)]);
var inst_37597 = cljs.core.seq(inst_37542);
var state_37610__$1 = (function (){var statearr_37675 = state_37610;
(statearr_37675[(31)] = inst_37596);

return statearr_37675;
})();
if(inst_37597){
var statearr_37676_38795 = state_37610__$1;
(statearr_37676_38795[(1)] = (42));

} else {
var statearr_37677_38796 = state_37610__$1;
(statearr_37677_38796[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (16))){
var inst_37509 = (state_37610[(7)]);
var inst_37511 = cljs.core.chunked_seq_QMARK_(inst_37509);
var state_37610__$1 = state_37610;
if(inst_37511){
var statearr_37678_38797 = state_37610__$1;
(statearr_37678_38797[(1)] = (19));

} else {
var statearr_37679_38798 = state_37610__$1;
(statearr_37679_38798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (38))){
var inst_37589 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37680_38799 = state_37610__$1;
(statearr_37680_38799[(2)] = inst_37589);

(statearr_37680_38799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (30))){
var state_37610__$1 = state_37610;
var statearr_37681_38800 = state_37610__$1;
(statearr_37681_38800[(2)] = null);

(statearr_37681_38800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (10))){
var inst_37490 = (state_37610[(13)]);
var inst_37488 = (state_37610[(14)]);
var inst_37498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37488,inst_37490);
var inst_37499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37498,(0),null);
var inst_37500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37498,(1),null);
var state_37610__$1 = (function (){var statearr_37682 = state_37610;
(statearr_37682[(26)] = inst_37499);

return statearr_37682;
})();
if(cljs.core.truth_(inst_37500)){
var statearr_37683_38801 = state_37610__$1;
(statearr_37683_38801[(1)] = (13));

} else {
var statearr_37684_38802 = state_37610__$1;
(statearr_37684_38802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (18))){
var inst_37535 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
var statearr_37685_38803 = state_37610__$1;
(statearr_37685_38803[(2)] = inst_37535);

(statearr_37685_38803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (42))){
var state_37610__$1 = state_37610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37610__$1,(45),dchan);
} else {
if((state_val_37611 === (37))){
var inst_37478 = (state_37610[(10)]);
var inst_37569 = (state_37610[(25)]);
var inst_37578 = (state_37610[(23)]);
var inst_37578__$1 = cljs.core.first(inst_37569);
var inst_37579 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37578__$1,inst_37478,done);
var state_37610__$1 = (function (){var statearr_37686 = state_37610;
(statearr_37686[(23)] = inst_37578__$1);

return statearr_37686;
})();
if(cljs.core.truth_(inst_37579)){
var statearr_37687_38804 = state_37610__$1;
(statearr_37687_38804[(1)] = (39));

} else {
var statearr_37688_38805 = state_37610__$1;
(statearr_37688_38805[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (8))){
var inst_37490 = (state_37610[(13)]);
var inst_37489 = (state_37610[(15)]);
var inst_37492 = (inst_37490 < inst_37489);
var inst_37493 = inst_37492;
var state_37610__$1 = state_37610;
if(cljs.core.truth_(inst_37493)){
var statearr_37689_38806 = state_37610__$1;
(statearr_37689_38806[(1)] = (10));

} else {
var statearr_37690_38807 = state_37610__$1;
(statearr_37690_38807[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36936__auto__ = null;
var cljs$core$async$mult_$_state_machine__36936__auto____0 = (function (){
var statearr_37691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37691[(0)] = cljs$core$async$mult_$_state_machine__36936__auto__);

(statearr_37691[(1)] = (1));

return statearr_37691;
});
var cljs$core$async$mult_$_state_machine__36936__auto____1 = (function (state_37610){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37610);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37692){if((e37692 instanceof Object)){
var ex__36939__auto__ = e37692;
var statearr_37693_38808 = state_37610;
(statearr_37693_38808[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38809 = state_37610;
state_37610 = G__38809;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36936__auto__ = function(state_37610){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36936__auto____1.call(this,state_37610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36936__auto____0;
cljs$core$async$mult_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36936__auto____1;
return cljs$core$async$mult_$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37694 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37694[(6)] = c__37003__auto___38723);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37696 = arguments.length;
switch (G__37696) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38841 = arguments.length;
var i__4790__auto___38842 = (0);
while(true){
if((i__4790__auto___38842 < len__4789__auto___38841)){
args__4795__auto__.push((arguments[i__4790__auto___38842]));

var G__38843 = (i__4790__auto___38842 + (1));
i__4790__auto___38842 = G__38843;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37701){
var map__37702 = p__37701;
var map__37702__$1 = (((((!((map__37702 == null))))?(((((map__37702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37702):map__37702);
var opts = map__37702__$1;
var statearr_37704_38844 = state;
(statearr_37704_38844[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37705_38845 = state;
(statearr_37705_38845[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37706_38846 = state;
(statearr_37706_38846[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37697){
var G__37698 = cljs.core.first(seq37697);
var seq37697__$1 = cljs.core.next(seq37697);
var G__37699 = cljs.core.first(seq37697__$1);
var seq37697__$2 = cljs.core.next(seq37697__$1);
var G__37700 = cljs.core.first(seq37697__$2);
var seq37697__$3 = cljs.core.next(seq37697__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37698,G__37699,G__37700,seq37697__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37707 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37708){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37708 = meta37708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37709,meta37708__$1){
var self__ = this;
var _37709__$1 = this;
return (new cljs.core.async.t_cljs$core$async37707(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37708__$1));
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37709){
var self__ = this;
var _37709__$1 = this;
return self__.meta37708;
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37707.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37708","meta37708",1373542428,null)], null);
}));

(cljs.core.async.t_cljs$core$async37707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37707");

(cljs.core.async.t_cljs$core$async37707.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37707.
 */
cljs.core.async.__GT_t_cljs$core$async37707 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37707(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37708){
return (new cljs.core.async.t_cljs$core$async37707(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37708));
});

}

return (new cljs.core.async.t_cljs$core$async37707(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37003__auto___38847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37811){
var state_val_37812 = (state_37811[(1)]);
if((state_val_37812 === (7))){
var inst_37726 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37813_38848 = state_37811__$1;
(statearr_37813_38848[(2)] = inst_37726);

(statearr_37813_38848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (20))){
var inst_37738 = (state_37811[(7)]);
var state_37811__$1 = state_37811;
var statearr_37814_38849 = state_37811__$1;
(statearr_37814_38849[(2)] = inst_37738);

(statearr_37814_38849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (27))){
var state_37811__$1 = state_37811;
var statearr_37815_38850 = state_37811__$1;
(statearr_37815_38850[(2)] = null);

(statearr_37815_38850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (1))){
var inst_37713 = (state_37811[(8)]);
var inst_37713__$1 = calc_state();
var inst_37715 = (inst_37713__$1 == null);
var inst_37716 = cljs.core.not(inst_37715);
var state_37811__$1 = (function (){var statearr_37816 = state_37811;
(statearr_37816[(8)] = inst_37713__$1);

return statearr_37816;
})();
if(inst_37716){
var statearr_37817_38851 = state_37811__$1;
(statearr_37817_38851[(1)] = (2));

} else {
var statearr_37818_38852 = state_37811__$1;
(statearr_37818_38852[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (24))){
var inst_37762 = (state_37811[(9)]);
var inst_37771 = (state_37811[(10)]);
var inst_37785 = (state_37811[(11)]);
var inst_37785__$1 = (inst_37762.cljs$core$IFn$_invoke$arity$1 ? inst_37762.cljs$core$IFn$_invoke$arity$1(inst_37771) : inst_37762.call(null,inst_37771));
var state_37811__$1 = (function (){var statearr_37819 = state_37811;
(statearr_37819[(11)] = inst_37785__$1);

return statearr_37819;
})();
if(cljs.core.truth_(inst_37785__$1)){
var statearr_37820_38853 = state_37811__$1;
(statearr_37820_38853[(1)] = (29));

} else {
var statearr_37821_38854 = state_37811__$1;
(statearr_37821_38854[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (4))){
var inst_37729 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37729)){
var statearr_37822_38855 = state_37811__$1;
(statearr_37822_38855[(1)] = (8));

} else {
var statearr_37823_38856 = state_37811__$1;
(statearr_37823_38856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (15))){
var inst_37756 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37756)){
var statearr_37824_38857 = state_37811__$1;
(statearr_37824_38857[(1)] = (19));

} else {
var statearr_37825_38858 = state_37811__$1;
(statearr_37825_38858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (21))){
var inst_37761 = (state_37811[(12)]);
var inst_37761__$1 = (state_37811[(2)]);
var inst_37762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37761__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37761__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37761__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37811__$1 = (function (){var statearr_37826 = state_37811;
(statearr_37826[(9)] = inst_37762);

(statearr_37826[(13)] = inst_37763);

(statearr_37826[(12)] = inst_37761__$1);

return statearr_37826;
})();
return cljs.core.async.ioc_alts_BANG_(state_37811__$1,(22),inst_37764);
} else {
if((state_val_37812 === (31))){
var inst_37793 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37793)){
var statearr_37827_38859 = state_37811__$1;
(statearr_37827_38859[(1)] = (32));

} else {
var statearr_37828_38860 = state_37811__$1;
(statearr_37828_38860[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (32))){
var inst_37770 = (state_37811[(14)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37811__$1,(35),out,inst_37770);
} else {
if((state_val_37812 === (33))){
var inst_37761 = (state_37811[(12)]);
var inst_37738 = inst_37761;
var state_37811__$1 = (function (){var statearr_37829 = state_37811;
(statearr_37829[(7)] = inst_37738);

return statearr_37829;
})();
var statearr_37830_38861 = state_37811__$1;
(statearr_37830_38861[(2)] = null);

(statearr_37830_38861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (13))){
var inst_37738 = (state_37811[(7)]);
var inst_37745 = inst_37738.cljs$lang$protocol_mask$partition0$;
var inst_37746 = (inst_37745 & (64));
var inst_37747 = inst_37738.cljs$core$ISeq$;
var inst_37748 = (cljs.core.PROTOCOL_SENTINEL === inst_37747);
var inst_37749 = ((inst_37746) || (inst_37748));
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37749)){
var statearr_37831_38862 = state_37811__$1;
(statearr_37831_38862[(1)] = (16));

} else {
var statearr_37832_38863 = state_37811__$1;
(statearr_37832_38863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (22))){
var inst_37770 = (state_37811[(14)]);
var inst_37771 = (state_37811[(10)]);
var inst_37769 = (state_37811[(2)]);
var inst_37770__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37769,(0),null);
var inst_37771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37769,(1),null);
var inst_37772 = (inst_37770__$1 == null);
var inst_37773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37771__$1,change);
var inst_37774 = ((inst_37772) || (inst_37773));
var state_37811__$1 = (function (){var statearr_37833 = state_37811;
(statearr_37833[(14)] = inst_37770__$1);

(statearr_37833[(10)] = inst_37771__$1);

return statearr_37833;
})();
if(cljs.core.truth_(inst_37774)){
var statearr_37834_38864 = state_37811__$1;
(statearr_37834_38864[(1)] = (23));

} else {
var statearr_37835_38865 = state_37811__$1;
(statearr_37835_38865[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (36))){
var inst_37761 = (state_37811[(12)]);
var inst_37738 = inst_37761;
var state_37811__$1 = (function (){var statearr_37836 = state_37811;
(statearr_37836[(7)] = inst_37738);

return statearr_37836;
})();
var statearr_37837_38866 = state_37811__$1;
(statearr_37837_38866[(2)] = null);

(statearr_37837_38866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (29))){
var inst_37785 = (state_37811[(11)]);
var state_37811__$1 = state_37811;
var statearr_37838_38867 = state_37811__$1;
(statearr_37838_38867[(2)] = inst_37785);

(statearr_37838_38867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (6))){
var state_37811__$1 = state_37811;
var statearr_37839_38868 = state_37811__$1;
(statearr_37839_38868[(2)] = false);

(statearr_37839_38868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (28))){
var inst_37781 = (state_37811[(2)]);
var inst_37782 = calc_state();
var inst_37738 = inst_37782;
var state_37811__$1 = (function (){var statearr_37840 = state_37811;
(statearr_37840[(7)] = inst_37738);

(statearr_37840[(15)] = inst_37781);

return statearr_37840;
})();
var statearr_37841_38869 = state_37811__$1;
(statearr_37841_38869[(2)] = null);

(statearr_37841_38869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (25))){
var inst_37807 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37842_38870 = state_37811__$1;
(statearr_37842_38870[(2)] = inst_37807);

(statearr_37842_38870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (34))){
var inst_37805 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37843_38871 = state_37811__$1;
(statearr_37843_38871[(2)] = inst_37805);

(statearr_37843_38871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (17))){
var state_37811__$1 = state_37811;
var statearr_37844_38872 = state_37811__$1;
(statearr_37844_38872[(2)] = false);

(statearr_37844_38872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (3))){
var state_37811__$1 = state_37811;
var statearr_37845_38873 = state_37811__$1;
(statearr_37845_38873[(2)] = false);

(statearr_37845_38873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (12))){
var inst_37809 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37811__$1,inst_37809);
} else {
if((state_val_37812 === (2))){
var inst_37713 = (state_37811[(8)]);
var inst_37718 = inst_37713.cljs$lang$protocol_mask$partition0$;
var inst_37719 = (inst_37718 & (64));
var inst_37720 = inst_37713.cljs$core$ISeq$;
var inst_37721 = (cljs.core.PROTOCOL_SENTINEL === inst_37720);
var inst_37722 = ((inst_37719) || (inst_37721));
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37722)){
var statearr_37846_38874 = state_37811__$1;
(statearr_37846_38874[(1)] = (5));

} else {
var statearr_37847_38875 = state_37811__$1;
(statearr_37847_38875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (23))){
var inst_37770 = (state_37811[(14)]);
var inst_37776 = (inst_37770 == null);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37776)){
var statearr_37848_38876 = state_37811__$1;
(statearr_37848_38876[(1)] = (26));

} else {
var statearr_37849_38877 = state_37811__$1;
(statearr_37849_38877[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (35))){
var inst_37796 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37796)){
var statearr_37850_38878 = state_37811__$1;
(statearr_37850_38878[(1)] = (36));

} else {
var statearr_37851_38879 = state_37811__$1;
(statearr_37851_38879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (19))){
var inst_37738 = (state_37811[(7)]);
var inst_37758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37738);
var state_37811__$1 = state_37811;
var statearr_37852_38880 = state_37811__$1;
(statearr_37852_38880[(2)] = inst_37758);

(statearr_37852_38880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (11))){
var inst_37738 = (state_37811[(7)]);
var inst_37742 = (inst_37738 == null);
var inst_37743 = cljs.core.not(inst_37742);
var state_37811__$1 = state_37811;
if(inst_37743){
var statearr_37853_38881 = state_37811__$1;
(statearr_37853_38881[(1)] = (13));

} else {
var statearr_37854_38882 = state_37811__$1;
(statearr_37854_38882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (9))){
var inst_37713 = (state_37811[(8)]);
var state_37811__$1 = state_37811;
var statearr_37855_38884 = state_37811__$1;
(statearr_37855_38884[(2)] = inst_37713);

(statearr_37855_38884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (5))){
var state_37811__$1 = state_37811;
var statearr_37856_38886 = state_37811__$1;
(statearr_37856_38886[(2)] = true);

(statearr_37856_38886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (14))){
var state_37811__$1 = state_37811;
var statearr_37857_38887 = state_37811__$1;
(statearr_37857_38887[(2)] = false);

(statearr_37857_38887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (26))){
var inst_37771 = (state_37811[(10)]);
var inst_37778 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37771);
var state_37811__$1 = state_37811;
var statearr_37858_38888 = state_37811__$1;
(statearr_37858_38888[(2)] = inst_37778);

(statearr_37858_38888[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (16))){
var state_37811__$1 = state_37811;
var statearr_37859_38889 = state_37811__$1;
(statearr_37859_38889[(2)] = true);

(statearr_37859_38889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (38))){
var inst_37801 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37860_38890 = state_37811__$1;
(statearr_37860_38890[(2)] = inst_37801);

(statearr_37860_38890[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (30))){
var inst_37762 = (state_37811[(9)]);
var inst_37763 = (state_37811[(13)]);
var inst_37771 = (state_37811[(10)]);
var inst_37788 = cljs.core.empty_QMARK_(inst_37762);
var inst_37789 = (inst_37763.cljs$core$IFn$_invoke$arity$1 ? inst_37763.cljs$core$IFn$_invoke$arity$1(inst_37771) : inst_37763.call(null,inst_37771));
var inst_37790 = cljs.core.not(inst_37789);
var inst_37791 = ((inst_37788) && (inst_37790));
var state_37811__$1 = state_37811;
var statearr_37861_38891 = state_37811__$1;
(statearr_37861_38891[(2)] = inst_37791);

(statearr_37861_38891[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (10))){
var inst_37713 = (state_37811[(8)]);
var inst_37734 = (state_37811[(2)]);
var inst_37735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37734,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37734,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37738 = inst_37713;
var state_37811__$1 = (function (){var statearr_37862 = state_37811;
(statearr_37862[(16)] = inst_37736);

(statearr_37862[(7)] = inst_37738);

(statearr_37862[(17)] = inst_37735);

(statearr_37862[(18)] = inst_37737);

return statearr_37862;
})();
var statearr_37863_38894 = state_37811__$1;
(statearr_37863_38894[(2)] = null);

(statearr_37863_38894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (18))){
var inst_37753 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37864_38895 = state_37811__$1;
(statearr_37864_38895[(2)] = inst_37753);

(statearr_37864_38895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (37))){
var state_37811__$1 = state_37811;
var statearr_37865_38896 = state_37811__$1;
(statearr_37865_38896[(2)] = null);

(statearr_37865_38896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (8))){
var inst_37713 = (state_37811[(8)]);
var inst_37731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37713);
var state_37811__$1 = state_37811;
var statearr_37866_38897 = state_37811__$1;
(statearr_37866_38897[(2)] = inst_37731);

(statearr_37866_38897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36936__auto__ = null;
var cljs$core$async$mix_$_state_machine__36936__auto____0 = (function (){
var statearr_37867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37867[(0)] = cljs$core$async$mix_$_state_machine__36936__auto__);

(statearr_37867[(1)] = (1));

return statearr_37867;
});
var cljs$core$async$mix_$_state_machine__36936__auto____1 = (function (state_37811){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37811);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37868){if((e37868 instanceof Object)){
var ex__36939__auto__ = e37868;
var statearr_37869_38900 = state_37811;
(statearr_37869_38900[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38901 = state_37811;
state_37811 = G__38901;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36936__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36936__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36936__auto____0;
cljs$core$async$mix_$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36936__auto____1;
return cljs$core$async$mix_$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37870 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37870[(6)] = c__37003__auto___38847);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37872 = arguments.length;
switch (G__37872) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37875 = arguments.length;
switch (G__37875) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37873_SHARP_){
if(cljs.core.truth_((p1__37873_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37873_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37873_SHARP_.call(null,topic)))){
return p1__37873_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37873_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37876 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37877){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37877 = meta37877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37878,meta37877__$1){
var self__ = this;
var _37878__$1 = this;
return (new cljs.core.async.t_cljs$core$async37876(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37877__$1));
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37878){
var self__ = this;
var _37878__$1 = this;
return self__.meta37877;
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37877","meta37877",-92092558,null)], null);
}));

(cljs.core.async.t_cljs$core$async37876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37876");

(cljs.core.async.t_cljs$core$async37876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37876.
 */
cljs.core.async.__GT_t_cljs$core$async37876 = (function cljs$core$async$__GT_t_cljs$core$async37876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37877){
return (new cljs.core.async.t_cljs$core$async37876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37877));
});

}

return (new cljs.core.async.t_cljs$core$async37876(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37003__auto___38908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_37950){
var state_val_37951 = (state_37950[(1)]);
if((state_val_37951 === (7))){
var inst_37946 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37952_38909 = state_37950__$1;
(statearr_37952_38909[(2)] = inst_37946);

(statearr_37952_38909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (20))){
var state_37950__$1 = state_37950;
var statearr_37953_38910 = state_37950__$1;
(statearr_37953_38910[(2)] = null);

(statearr_37953_38910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (1))){
var state_37950__$1 = state_37950;
var statearr_37954_38911 = state_37950__$1;
(statearr_37954_38911[(2)] = null);

(statearr_37954_38911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (24))){
var inst_37929 = (state_37950[(7)]);
var inst_37938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37929);
var state_37950__$1 = state_37950;
var statearr_37955_38912 = state_37950__$1;
(statearr_37955_38912[(2)] = inst_37938);

(statearr_37955_38912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (4))){
var inst_37881 = (state_37950[(8)]);
var inst_37881__$1 = (state_37950[(2)]);
var inst_37882 = (inst_37881__$1 == null);
var state_37950__$1 = (function (){var statearr_37956 = state_37950;
(statearr_37956[(8)] = inst_37881__$1);

return statearr_37956;
})();
if(cljs.core.truth_(inst_37882)){
var statearr_37957_38913 = state_37950__$1;
(statearr_37957_38913[(1)] = (5));

} else {
var statearr_37958_38914 = state_37950__$1;
(statearr_37958_38914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (15))){
var inst_37923 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37959_38915 = state_37950__$1;
(statearr_37959_38915[(2)] = inst_37923);

(statearr_37959_38915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (21))){
var inst_37943 = (state_37950[(2)]);
var state_37950__$1 = (function (){var statearr_37960 = state_37950;
(statearr_37960[(9)] = inst_37943);

return statearr_37960;
})();
var statearr_37961_38916 = state_37950__$1;
(statearr_37961_38916[(2)] = null);

(statearr_37961_38916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (13))){
var inst_37905 = (state_37950[(10)]);
var inst_37907 = cljs.core.chunked_seq_QMARK_(inst_37905);
var state_37950__$1 = state_37950;
if(inst_37907){
var statearr_37962_38918 = state_37950__$1;
(statearr_37962_38918[(1)] = (16));

} else {
var statearr_37963_38919 = state_37950__$1;
(statearr_37963_38919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (22))){
var inst_37935 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
if(cljs.core.truth_(inst_37935)){
var statearr_37964_38920 = state_37950__$1;
(statearr_37964_38920[(1)] = (23));

} else {
var statearr_37965_38921 = state_37950__$1;
(statearr_37965_38921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (6))){
var inst_37931 = (state_37950[(11)]);
var inst_37929 = (state_37950[(7)]);
var inst_37881 = (state_37950[(8)]);
var inst_37929__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37881) : topic_fn.call(null,inst_37881));
var inst_37930 = cljs.core.deref(mults);
var inst_37931__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37930,inst_37929__$1);
var state_37950__$1 = (function (){var statearr_37966 = state_37950;
(statearr_37966[(11)] = inst_37931__$1);

(statearr_37966[(7)] = inst_37929__$1);

return statearr_37966;
})();
if(cljs.core.truth_(inst_37931__$1)){
var statearr_37967_38923 = state_37950__$1;
(statearr_37967_38923[(1)] = (19));

} else {
var statearr_37968_38924 = state_37950__$1;
(statearr_37968_38924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (25))){
var inst_37940 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37969_38925 = state_37950__$1;
(statearr_37969_38925[(2)] = inst_37940);

(statearr_37969_38925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (17))){
var inst_37905 = (state_37950[(10)]);
var inst_37914 = cljs.core.first(inst_37905);
var inst_37915 = cljs.core.async.muxch_STAR_(inst_37914);
var inst_37916 = cljs.core.async.close_BANG_(inst_37915);
var inst_37917 = cljs.core.next(inst_37905);
var inst_37891 = inst_37917;
var inst_37892 = null;
var inst_37893 = (0);
var inst_37894 = (0);
var state_37950__$1 = (function (){var statearr_37970 = state_37950;
(statearr_37970[(12)] = inst_37892);

(statearr_37970[(13)] = inst_37894);

(statearr_37970[(14)] = inst_37891);

(statearr_37970[(15)] = inst_37893);

(statearr_37970[(16)] = inst_37916);

return statearr_37970;
})();
var statearr_37971_38929 = state_37950__$1;
(statearr_37971_38929[(2)] = null);

(statearr_37971_38929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (3))){
var inst_37948 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37950__$1,inst_37948);
} else {
if((state_val_37951 === (12))){
var inst_37925 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37972_38930 = state_37950__$1;
(statearr_37972_38930[(2)] = inst_37925);

(statearr_37972_38930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (2))){
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37950__$1,(4),ch);
} else {
if((state_val_37951 === (23))){
var state_37950__$1 = state_37950;
var statearr_37973_38931 = state_37950__$1;
(statearr_37973_38931[(2)] = null);

(statearr_37973_38931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (19))){
var inst_37931 = (state_37950[(11)]);
var inst_37881 = (state_37950[(8)]);
var inst_37933 = cljs.core.async.muxch_STAR_(inst_37931);
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37950__$1,(22),inst_37933,inst_37881);
} else {
if((state_val_37951 === (11))){
var inst_37891 = (state_37950[(14)]);
var inst_37905 = (state_37950[(10)]);
var inst_37905__$1 = cljs.core.seq(inst_37891);
var state_37950__$1 = (function (){var statearr_37974 = state_37950;
(statearr_37974[(10)] = inst_37905__$1);

return statearr_37974;
})();
if(inst_37905__$1){
var statearr_37975_38933 = state_37950__$1;
(statearr_37975_38933[(1)] = (13));

} else {
var statearr_37976_38934 = state_37950__$1;
(statearr_37976_38934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (9))){
var inst_37927 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37977_38937 = state_37950__$1;
(statearr_37977_38937[(2)] = inst_37927);

(statearr_37977_38937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (5))){
var inst_37888 = cljs.core.deref(mults);
var inst_37889 = cljs.core.vals(inst_37888);
var inst_37890 = cljs.core.seq(inst_37889);
var inst_37891 = inst_37890;
var inst_37892 = null;
var inst_37893 = (0);
var inst_37894 = (0);
var state_37950__$1 = (function (){var statearr_37978 = state_37950;
(statearr_37978[(12)] = inst_37892);

(statearr_37978[(13)] = inst_37894);

(statearr_37978[(14)] = inst_37891);

(statearr_37978[(15)] = inst_37893);

return statearr_37978;
})();
var statearr_37979_38939 = state_37950__$1;
(statearr_37979_38939[(2)] = null);

(statearr_37979_38939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (14))){
var state_37950__$1 = state_37950;
var statearr_37983_38940 = state_37950__$1;
(statearr_37983_38940[(2)] = null);

(statearr_37983_38940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (16))){
var inst_37905 = (state_37950[(10)]);
var inst_37909 = cljs.core.chunk_first(inst_37905);
var inst_37910 = cljs.core.chunk_rest(inst_37905);
var inst_37911 = cljs.core.count(inst_37909);
var inst_37891 = inst_37910;
var inst_37892 = inst_37909;
var inst_37893 = inst_37911;
var inst_37894 = (0);
var state_37950__$1 = (function (){var statearr_37984 = state_37950;
(statearr_37984[(12)] = inst_37892);

(statearr_37984[(13)] = inst_37894);

(statearr_37984[(14)] = inst_37891);

(statearr_37984[(15)] = inst_37893);

return statearr_37984;
})();
var statearr_37985_38941 = state_37950__$1;
(statearr_37985_38941[(2)] = null);

(statearr_37985_38941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (10))){
var inst_37892 = (state_37950[(12)]);
var inst_37894 = (state_37950[(13)]);
var inst_37891 = (state_37950[(14)]);
var inst_37893 = (state_37950[(15)]);
var inst_37899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37892,inst_37894);
var inst_37900 = cljs.core.async.muxch_STAR_(inst_37899);
var inst_37901 = cljs.core.async.close_BANG_(inst_37900);
var inst_37902 = (inst_37894 + (1));
var tmp37980 = inst_37892;
var tmp37981 = inst_37891;
var tmp37982 = inst_37893;
var inst_37891__$1 = tmp37981;
var inst_37892__$1 = tmp37980;
var inst_37893__$1 = tmp37982;
var inst_37894__$1 = inst_37902;
var state_37950__$1 = (function (){var statearr_37986 = state_37950;
(statearr_37986[(12)] = inst_37892__$1);

(statearr_37986[(17)] = inst_37901);

(statearr_37986[(13)] = inst_37894__$1);

(statearr_37986[(14)] = inst_37891__$1);

(statearr_37986[(15)] = inst_37893__$1);

return statearr_37986;
})();
var statearr_37987_38942 = state_37950__$1;
(statearr_37987_38942[(2)] = null);

(statearr_37987_38942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (18))){
var inst_37920 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37988_38943 = state_37950__$1;
(statearr_37988_38943[(2)] = inst_37920);

(statearr_37988_38943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (8))){
var inst_37894 = (state_37950[(13)]);
var inst_37893 = (state_37950[(15)]);
var inst_37896 = (inst_37894 < inst_37893);
var inst_37897 = inst_37896;
var state_37950__$1 = state_37950;
if(cljs.core.truth_(inst_37897)){
var statearr_37989_38944 = state_37950__$1;
(statearr_37989_38944[(1)] = (10));

} else {
var statearr_37990_38945 = state_37950__$1;
(statearr_37990_38945[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_37991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37991[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_37991[(1)] = (1));

return statearr_37991;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_37950){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_37950);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e37992){if((e37992 instanceof Object)){
var ex__36939__auto__ = e37992;
var statearr_37993_38946 = state_37950;
(statearr_37993_38946[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38947 = state_37950;
state_37950 = G__38947;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_37950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_37950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_37994 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_37994[(6)] = c__37003__auto___38908);

return statearr_37994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37996 = arguments.length;
switch (G__37996) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37998 = arguments.length;
switch (G__37998) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38000 = arguments.length;
switch (G__38000) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37003__auto___38951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38039){
var state_val_38040 = (state_38039[(1)]);
if((state_val_38040 === (7))){
var state_38039__$1 = state_38039;
var statearr_38041_38952 = state_38039__$1;
(statearr_38041_38952[(2)] = null);

(statearr_38041_38952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (1))){
var state_38039__$1 = state_38039;
var statearr_38042_38953 = state_38039__$1;
(statearr_38042_38953[(2)] = null);

(statearr_38042_38953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (4))){
var inst_38003 = (state_38039[(7)]);
var inst_38005 = (inst_38003 < cnt);
var state_38039__$1 = state_38039;
if(cljs.core.truth_(inst_38005)){
var statearr_38043_38954 = state_38039__$1;
(statearr_38043_38954[(1)] = (6));

} else {
var statearr_38044_38955 = state_38039__$1;
(statearr_38044_38955[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (15))){
var inst_38035 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38045_38956 = state_38039__$1;
(statearr_38045_38956[(2)] = inst_38035);

(statearr_38045_38956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (13))){
var inst_38028 = cljs.core.async.close_BANG_(out);
var state_38039__$1 = state_38039;
var statearr_38046_38957 = state_38039__$1;
(statearr_38046_38957[(2)] = inst_38028);

(statearr_38046_38957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (6))){
var state_38039__$1 = state_38039;
var statearr_38047_38958 = state_38039__$1;
(statearr_38047_38958[(2)] = null);

(statearr_38047_38958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (3))){
var inst_38037 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38039__$1,inst_38037);
} else {
if((state_val_38040 === (12))){
var inst_38025 = (state_38039[(8)]);
var inst_38025__$1 = (state_38039[(2)]);
var inst_38026 = cljs.core.some(cljs.core.nil_QMARK_,inst_38025__$1);
var state_38039__$1 = (function (){var statearr_38048 = state_38039;
(statearr_38048[(8)] = inst_38025__$1);

return statearr_38048;
})();
if(cljs.core.truth_(inst_38026)){
var statearr_38049_38959 = state_38039__$1;
(statearr_38049_38959[(1)] = (13));

} else {
var statearr_38050_38960 = state_38039__$1;
(statearr_38050_38960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (2))){
var inst_38002 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38003 = (0);
var state_38039__$1 = (function (){var statearr_38051 = state_38039;
(statearr_38051[(9)] = inst_38002);

(statearr_38051[(7)] = inst_38003);

return statearr_38051;
})();
var statearr_38052_38961 = state_38039__$1;
(statearr_38052_38961[(2)] = null);

(statearr_38052_38961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (11))){
var inst_38003 = (state_38039[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38039,(10),Object,null,(9));
var inst_38012 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38003) : chs__$1.call(null,inst_38003));
var inst_38013 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38003) : done.call(null,inst_38003));
var inst_38014 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38012,inst_38013);
var state_38039__$1 = state_38039;
var statearr_38053_38962 = state_38039__$1;
(statearr_38053_38962[(2)] = inst_38014);


cljs.core.async.impl.ioc_helpers.process_exception(state_38039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (9))){
var inst_38003 = (state_38039[(7)]);
var inst_38016 = (state_38039[(2)]);
var inst_38017 = (inst_38003 + (1));
var inst_38003__$1 = inst_38017;
var state_38039__$1 = (function (){var statearr_38054 = state_38039;
(statearr_38054[(10)] = inst_38016);

(statearr_38054[(7)] = inst_38003__$1);

return statearr_38054;
})();
var statearr_38055_38963 = state_38039__$1;
(statearr_38055_38963[(2)] = null);

(statearr_38055_38963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (5))){
var inst_38023 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38056 = state_38039;
(statearr_38056[(11)] = inst_38023);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38039__$1,(12),dchan);
} else {
if((state_val_38040 === (14))){
var inst_38025 = (state_38039[(8)]);
var inst_38030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38025);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38039__$1,(16),out,inst_38030);
} else {
if((state_val_38040 === (16))){
var inst_38032 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38057 = state_38039;
(statearr_38057[(12)] = inst_38032);

return statearr_38057;
})();
var statearr_38058_38964 = state_38039__$1;
(statearr_38058_38964[(2)] = null);

(statearr_38058_38964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (10))){
var inst_38007 = (state_38039[(2)]);
var inst_38008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38039__$1 = (function (){var statearr_38059 = state_38039;
(statearr_38059[(13)] = inst_38007);

return statearr_38059;
})();
var statearr_38060_38965 = state_38039__$1;
(statearr_38060_38965[(2)] = inst_38008);


cljs.core.async.impl.ioc_helpers.process_exception(state_38039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (8))){
var inst_38021 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38061_38966 = state_38039__$1;
(statearr_38061_38966[(2)] = inst_38021);

(statearr_38061_38966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38062[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38062[(1)] = (1));

return statearr_38062;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38039){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38039);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38063){if((e38063 instanceof Object)){
var ex__36939__auto__ = e38063;
var statearr_38064_38967 = state_38039;
(statearr_38064_38967[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38968 = state_38039;
state_38039 = G__38968;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38065 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38065[(6)] = c__37003__auto___38951);

return statearr_38065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___38970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38100){
var state_val_38101 = (state_38100[(1)]);
if((state_val_38101 === (7))){
var inst_38080 = (state_38100[(7)]);
var inst_38079 = (state_38100[(8)]);
var inst_38079__$1 = (state_38100[(2)]);
var inst_38080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38079__$1,(0),null);
var inst_38081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38079__$1,(1),null);
var inst_38082 = (inst_38080__$1 == null);
var state_38100__$1 = (function (){var statearr_38102 = state_38100;
(statearr_38102[(9)] = inst_38081);

(statearr_38102[(7)] = inst_38080__$1);

(statearr_38102[(8)] = inst_38079__$1);

return statearr_38102;
})();
if(cljs.core.truth_(inst_38082)){
var statearr_38103_38971 = state_38100__$1;
(statearr_38103_38971[(1)] = (8));

} else {
var statearr_38104_38972 = state_38100__$1;
(statearr_38104_38972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (1))){
var inst_38069 = cljs.core.vec(chs);
var inst_38070 = inst_38069;
var state_38100__$1 = (function (){var statearr_38105 = state_38100;
(statearr_38105[(10)] = inst_38070);

return statearr_38105;
})();
var statearr_38106_38973 = state_38100__$1;
(statearr_38106_38973[(2)] = null);

(statearr_38106_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (4))){
var inst_38070 = (state_38100[(10)]);
var state_38100__$1 = state_38100;
return cljs.core.async.ioc_alts_BANG_(state_38100__$1,(7),inst_38070);
} else {
if((state_val_38101 === (6))){
var inst_38096 = (state_38100[(2)]);
var state_38100__$1 = state_38100;
var statearr_38107_38974 = state_38100__$1;
(statearr_38107_38974[(2)] = inst_38096);

(statearr_38107_38974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (3))){
var inst_38098 = (state_38100[(2)]);
var state_38100__$1 = state_38100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38100__$1,inst_38098);
} else {
if((state_val_38101 === (2))){
var inst_38070 = (state_38100[(10)]);
var inst_38072 = cljs.core.count(inst_38070);
var inst_38073 = (inst_38072 > (0));
var state_38100__$1 = state_38100;
if(cljs.core.truth_(inst_38073)){
var statearr_38109_38975 = state_38100__$1;
(statearr_38109_38975[(1)] = (4));

} else {
var statearr_38110_38976 = state_38100__$1;
(statearr_38110_38976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (11))){
var inst_38070 = (state_38100[(10)]);
var inst_38089 = (state_38100[(2)]);
var tmp38108 = inst_38070;
var inst_38070__$1 = tmp38108;
var state_38100__$1 = (function (){var statearr_38111 = state_38100;
(statearr_38111[(11)] = inst_38089);

(statearr_38111[(10)] = inst_38070__$1);

return statearr_38111;
})();
var statearr_38112_38977 = state_38100__$1;
(statearr_38112_38977[(2)] = null);

(statearr_38112_38977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (9))){
var inst_38080 = (state_38100[(7)]);
var state_38100__$1 = state_38100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38100__$1,(11),out,inst_38080);
} else {
if((state_val_38101 === (5))){
var inst_38094 = cljs.core.async.close_BANG_(out);
var state_38100__$1 = state_38100;
var statearr_38113_38978 = state_38100__$1;
(statearr_38113_38978[(2)] = inst_38094);

(statearr_38113_38978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (10))){
var inst_38092 = (state_38100[(2)]);
var state_38100__$1 = state_38100;
var statearr_38114_38979 = state_38100__$1;
(statearr_38114_38979[(2)] = inst_38092);

(statearr_38114_38979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38101 === (8))){
var inst_38081 = (state_38100[(9)]);
var inst_38080 = (state_38100[(7)]);
var inst_38079 = (state_38100[(8)]);
var inst_38070 = (state_38100[(10)]);
var inst_38084 = (function (){var cs = inst_38070;
var vec__38075 = inst_38079;
var v = inst_38080;
var c = inst_38081;
return (function (p1__38066_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38066_SHARP_);
});
})();
var inst_38085 = cljs.core.filterv(inst_38084,inst_38070);
var inst_38070__$1 = inst_38085;
var state_38100__$1 = (function (){var statearr_38115 = state_38100;
(statearr_38115[(10)] = inst_38070__$1);

return statearr_38115;
})();
var statearr_38116_38980 = state_38100__$1;
(statearr_38116_38980[(2)] = null);

(statearr_38116_38980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38117[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38117[(1)] = (1));

return statearr_38117;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38100){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38100);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38118){if((e38118 instanceof Object)){
var ex__36939__auto__ = e38118;
var statearr_38119_38981 = state_38100;
(statearr_38119_38981[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38984 = state_38100;
state_38100 = G__38984;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38120 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38120[(6)] = c__37003__auto___38970);

return statearr_38120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38122 = arguments.length;
switch (G__38122) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___38987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38146){
var state_val_38147 = (state_38146[(1)]);
if((state_val_38147 === (7))){
var inst_38128 = (state_38146[(7)]);
var inst_38128__$1 = (state_38146[(2)]);
var inst_38129 = (inst_38128__$1 == null);
var inst_38130 = cljs.core.not(inst_38129);
var state_38146__$1 = (function (){var statearr_38148 = state_38146;
(statearr_38148[(7)] = inst_38128__$1);

return statearr_38148;
})();
if(inst_38130){
var statearr_38149_38990 = state_38146__$1;
(statearr_38149_38990[(1)] = (8));

} else {
var statearr_38150_38991 = state_38146__$1;
(statearr_38150_38991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (1))){
var inst_38123 = (0);
var state_38146__$1 = (function (){var statearr_38151 = state_38146;
(statearr_38151[(8)] = inst_38123);

return statearr_38151;
})();
var statearr_38152_38992 = state_38146__$1;
(statearr_38152_38992[(2)] = null);

(statearr_38152_38992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (4))){
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38146__$1,(7),ch);
} else {
if((state_val_38147 === (6))){
var inst_38141 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38153_38993 = state_38146__$1;
(statearr_38153_38993[(2)] = inst_38141);

(statearr_38153_38993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (3))){
var inst_38143 = (state_38146[(2)]);
var inst_38144 = cljs.core.async.close_BANG_(out);
var state_38146__$1 = (function (){var statearr_38154 = state_38146;
(statearr_38154[(9)] = inst_38143);

return statearr_38154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38146__$1,inst_38144);
} else {
if((state_val_38147 === (2))){
var inst_38123 = (state_38146[(8)]);
var inst_38125 = (inst_38123 < n);
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38125)){
var statearr_38155_38994 = state_38146__$1;
(statearr_38155_38994[(1)] = (4));

} else {
var statearr_38156_38995 = state_38146__$1;
(statearr_38156_38995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (11))){
var inst_38123 = (state_38146[(8)]);
var inst_38133 = (state_38146[(2)]);
var inst_38134 = (inst_38123 + (1));
var inst_38123__$1 = inst_38134;
var state_38146__$1 = (function (){var statearr_38157 = state_38146;
(statearr_38157[(10)] = inst_38133);

(statearr_38157[(8)] = inst_38123__$1);

return statearr_38157;
})();
var statearr_38158_38996 = state_38146__$1;
(statearr_38158_38996[(2)] = null);

(statearr_38158_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (9))){
var state_38146__$1 = state_38146;
var statearr_38159_38997 = state_38146__$1;
(statearr_38159_38997[(2)] = null);

(statearr_38159_38997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (5))){
var state_38146__$1 = state_38146;
var statearr_38160_38998 = state_38146__$1;
(statearr_38160_38998[(2)] = null);

(statearr_38160_38998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (10))){
var inst_38138 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38161_38999 = state_38146__$1;
(statearr_38161_38999[(2)] = inst_38138);

(statearr_38161_38999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (8))){
var inst_38128 = (state_38146[(7)]);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38146__$1,(11),out,inst_38128);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38162[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38162[(1)] = (1));

return statearr_38162;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38146){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38146);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38163){if((e38163 instanceof Object)){
var ex__36939__auto__ = e38163;
var statearr_38164_39001 = state_38146;
(statearr_38164_39001[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39002 = state_38146;
state_38146 = G__39002;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38165 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38165[(6)] = c__37003__auto___38987);

return statearr_38165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38167 = (function (f,ch,meta38168){
this.f = f;
this.ch = ch;
this.meta38168 = meta38168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38169,meta38168__$1){
var self__ = this;
var _38169__$1 = this;
return (new cljs.core.async.t_cljs$core$async38167(self__.f,self__.ch,meta38168__$1));
}));

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38169){
var self__ = this;
var _38169__$1 = this;
return self__.meta38168;
}));

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38170 = (function (f,ch,meta38168,_,fn1,meta38171){
this.f = f;
this.ch = ch;
this.meta38168 = meta38168;
this._ = _;
this.fn1 = fn1;
this.meta38171 = meta38171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38172,meta38171__$1){
var self__ = this;
var _38172__$1 = this;
return (new cljs.core.async.t_cljs$core$async38170(self__.f,self__.ch,self__.meta38168,self__._,self__.fn1,meta38171__$1));
}));

(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38172){
var self__ = this;
var _38172__$1 = this;
return self__.meta38171;
}));

(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38166_SHARP_){
var G__38173 = (((p1__38166_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38166_SHARP_) : self__.f.call(null,p1__38166_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38173) : f1.call(null,G__38173));
});
}));

(cljs.core.async.t_cljs$core$async38170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38168","meta38168",143585318,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38167","cljs.core.async/t_cljs$core$async38167",-783654789,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38171","meta38171",1371108062,null)], null);
}));

(cljs.core.async.t_cljs$core$async38170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38170");

(cljs.core.async.t_cljs$core$async38170.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38170.
 */
cljs.core.async.__GT_t_cljs$core$async38170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38170(f__$1,ch__$1,meta38168__$1,___$2,fn1__$1,meta38171){
return (new cljs.core.async.t_cljs$core$async38170(f__$1,ch__$1,meta38168__$1,___$2,fn1__$1,meta38171));
});

}

return (new cljs.core.async.t_cljs$core$async38170(self__.f,self__.ch,self__.meta38168,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38174 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38174) : self__.f.call(null,G__38174));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38168","meta38168",143585318,null)], null);
}));

(cljs.core.async.t_cljs$core$async38167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38167");

(cljs.core.async.t_cljs$core$async38167.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38167.
 */
cljs.core.async.__GT_t_cljs$core$async38167 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38167(f__$1,ch__$1,meta38168){
return (new cljs.core.async.t_cljs$core$async38167(f__$1,ch__$1,meta38168));
});

}

return (new cljs.core.async.t_cljs$core$async38167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38175 = (function (f,ch,meta38176){
this.f = f;
this.ch = ch;
this.meta38176 = meta38176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38177,meta38176__$1){
var self__ = this;
var _38177__$1 = this;
return (new cljs.core.async.t_cljs$core$async38175(self__.f,self__.ch,meta38176__$1));
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38177){
var self__ = this;
var _38177__$1 = this;
return self__.meta38176;
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38176","meta38176",-1353815147,null)], null);
}));

(cljs.core.async.t_cljs$core$async38175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38175");

(cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38175.
 */
cljs.core.async.__GT_t_cljs$core$async38175 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38175(f__$1,ch__$1,meta38176){
return (new cljs.core.async.t_cljs$core$async38175(f__$1,ch__$1,meta38176));
});

}

return (new cljs.core.async.t_cljs$core$async38175(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38178 = (function (p,ch,meta38179){
this.p = p;
this.ch = ch;
this.meta38179 = meta38179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38180,meta38179__$1){
var self__ = this;
var _38180__$1 = this;
return (new cljs.core.async.t_cljs$core$async38178(self__.p,self__.ch,meta38179__$1));
}));

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38180){
var self__ = this;
var _38180__$1 = this;
return self__.meta38179;
}));

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38179","meta38179",-170709254,null)], null);
}));

(cljs.core.async.t_cljs$core$async38178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38178");

(cljs.core.async.t_cljs$core$async38178.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38178.
 */
cljs.core.async.__GT_t_cljs$core$async38178 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38178(p__$1,ch__$1,meta38179){
return (new cljs.core.async.t_cljs$core$async38178(p__$1,ch__$1,meta38179));
});

}

return (new cljs.core.async.t_cljs$core$async38178(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38182 = arguments.length;
switch (G__38182) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___39004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38203){
var state_val_38204 = (state_38203[(1)]);
if((state_val_38204 === (7))){
var inst_38199 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38205_39005 = state_38203__$1;
(statearr_38205_39005[(2)] = inst_38199);

(statearr_38205_39005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (1))){
var state_38203__$1 = state_38203;
var statearr_38206_39006 = state_38203__$1;
(statearr_38206_39006[(2)] = null);

(statearr_38206_39006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (4))){
var inst_38185 = (state_38203[(7)]);
var inst_38185__$1 = (state_38203[(2)]);
var inst_38186 = (inst_38185__$1 == null);
var state_38203__$1 = (function (){var statearr_38207 = state_38203;
(statearr_38207[(7)] = inst_38185__$1);

return statearr_38207;
})();
if(cljs.core.truth_(inst_38186)){
var statearr_38208_39007 = state_38203__$1;
(statearr_38208_39007[(1)] = (5));

} else {
var statearr_38209_39008 = state_38203__$1;
(statearr_38209_39008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (6))){
var inst_38185 = (state_38203[(7)]);
var inst_38190 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38185) : p.call(null,inst_38185));
var state_38203__$1 = state_38203;
if(cljs.core.truth_(inst_38190)){
var statearr_38210_39009 = state_38203__$1;
(statearr_38210_39009[(1)] = (8));

} else {
var statearr_38211_39010 = state_38203__$1;
(statearr_38211_39010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (3))){
var inst_38201 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38203__$1,inst_38201);
} else {
if((state_val_38204 === (2))){
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38203__$1,(4),ch);
} else {
if((state_val_38204 === (11))){
var inst_38193 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38212_39011 = state_38203__$1;
(statearr_38212_39011[(2)] = inst_38193);

(statearr_38212_39011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (9))){
var state_38203__$1 = state_38203;
var statearr_38213_39012 = state_38203__$1;
(statearr_38213_39012[(2)] = null);

(statearr_38213_39012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (5))){
var inst_38188 = cljs.core.async.close_BANG_(out);
var state_38203__$1 = state_38203;
var statearr_38214_39013 = state_38203__$1;
(statearr_38214_39013[(2)] = inst_38188);

(statearr_38214_39013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (10))){
var inst_38196 = (state_38203[(2)]);
var state_38203__$1 = (function (){var statearr_38215 = state_38203;
(statearr_38215[(8)] = inst_38196);

return statearr_38215;
})();
var statearr_38216_39014 = state_38203__$1;
(statearr_38216_39014[(2)] = null);

(statearr_38216_39014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (8))){
var inst_38185 = (state_38203[(7)]);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38203__$1,(11),out,inst_38185);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38217 = [null,null,null,null,null,null,null,null,null];
(statearr_38217[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38217[(1)] = (1));

return statearr_38217;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38203){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38203);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38218){if((e38218 instanceof Object)){
var ex__36939__auto__ = e38218;
var statearr_38219_39015 = state_38203;
(statearr_38219_39015[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39016 = state_38203;
state_38203 = G__39016;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38220 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38220[(6)] = c__37003__auto___39004);

return statearr_38220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38222 = arguments.length;
switch (G__38222) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38284){
var state_val_38285 = (state_38284[(1)]);
if((state_val_38285 === (7))){
var inst_38280 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38286_39018 = state_38284__$1;
(statearr_38286_39018[(2)] = inst_38280);

(statearr_38286_39018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (20))){
var inst_38250 = (state_38284[(7)]);
var inst_38261 = (state_38284[(2)]);
var inst_38262 = cljs.core.next(inst_38250);
var inst_38236 = inst_38262;
var inst_38237 = null;
var inst_38238 = (0);
var inst_38239 = (0);
var state_38284__$1 = (function (){var statearr_38287 = state_38284;
(statearr_38287[(8)] = inst_38236);

(statearr_38287[(9)] = inst_38238);

(statearr_38287[(10)] = inst_38261);

(statearr_38287[(11)] = inst_38239);

(statearr_38287[(12)] = inst_38237);

return statearr_38287;
})();
var statearr_38288_39019 = state_38284__$1;
(statearr_38288_39019[(2)] = null);

(statearr_38288_39019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (1))){
var state_38284__$1 = state_38284;
var statearr_38289_39020 = state_38284__$1;
(statearr_38289_39020[(2)] = null);

(statearr_38289_39020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (4))){
var inst_38225 = (state_38284[(13)]);
var inst_38225__$1 = (state_38284[(2)]);
var inst_38226 = (inst_38225__$1 == null);
var state_38284__$1 = (function (){var statearr_38290 = state_38284;
(statearr_38290[(13)] = inst_38225__$1);

return statearr_38290;
})();
if(cljs.core.truth_(inst_38226)){
var statearr_38291_39021 = state_38284__$1;
(statearr_38291_39021[(1)] = (5));

} else {
var statearr_38292_39022 = state_38284__$1;
(statearr_38292_39022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (15))){
var state_38284__$1 = state_38284;
var statearr_38296_39023 = state_38284__$1;
(statearr_38296_39023[(2)] = null);

(statearr_38296_39023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (21))){
var state_38284__$1 = state_38284;
var statearr_38297_39024 = state_38284__$1;
(statearr_38297_39024[(2)] = null);

(statearr_38297_39024[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (13))){
var inst_38236 = (state_38284[(8)]);
var inst_38238 = (state_38284[(9)]);
var inst_38239 = (state_38284[(11)]);
var inst_38237 = (state_38284[(12)]);
var inst_38246 = (state_38284[(2)]);
var inst_38247 = (inst_38239 + (1));
var tmp38293 = inst_38236;
var tmp38294 = inst_38238;
var tmp38295 = inst_38237;
var inst_38236__$1 = tmp38293;
var inst_38237__$1 = tmp38295;
var inst_38238__$1 = tmp38294;
var inst_38239__$1 = inst_38247;
var state_38284__$1 = (function (){var statearr_38298 = state_38284;
(statearr_38298[(8)] = inst_38236__$1);

(statearr_38298[(9)] = inst_38238__$1);

(statearr_38298[(11)] = inst_38239__$1);

(statearr_38298[(12)] = inst_38237__$1);

(statearr_38298[(14)] = inst_38246);

return statearr_38298;
})();
var statearr_38299_39025 = state_38284__$1;
(statearr_38299_39025[(2)] = null);

(statearr_38299_39025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (22))){
var state_38284__$1 = state_38284;
var statearr_38300_39026 = state_38284__$1;
(statearr_38300_39026[(2)] = null);

(statearr_38300_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (6))){
var inst_38225 = (state_38284[(13)]);
var inst_38234 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38225) : f.call(null,inst_38225));
var inst_38235 = cljs.core.seq(inst_38234);
var inst_38236 = inst_38235;
var inst_38237 = null;
var inst_38238 = (0);
var inst_38239 = (0);
var state_38284__$1 = (function (){var statearr_38301 = state_38284;
(statearr_38301[(8)] = inst_38236);

(statearr_38301[(9)] = inst_38238);

(statearr_38301[(11)] = inst_38239);

(statearr_38301[(12)] = inst_38237);

return statearr_38301;
})();
var statearr_38302_39027 = state_38284__$1;
(statearr_38302_39027[(2)] = null);

(statearr_38302_39027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (17))){
var inst_38250 = (state_38284[(7)]);
var inst_38254 = cljs.core.chunk_first(inst_38250);
var inst_38255 = cljs.core.chunk_rest(inst_38250);
var inst_38256 = cljs.core.count(inst_38254);
var inst_38236 = inst_38255;
var inst_38237 = inst_38254;
var inst_38238 = inst_38256;
var inst_38239 = (0);
var state_38284__$1 = (function (){var statearr_38303 = state_38284;
(statearr_38303[(8)] = inst_38236);

(statearr_38303[(9)] = inst_38238);

(statearr_38303[(11)] = inst_38239);

(statearr_38303[(12)] = inst_38237);

return statearr_38303;
})();
var statearr_38304_39028 = state_38284__$1;
(statearr_38304_39028[(2)] = null);

(statearr_38304_39028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (3))){
var inst_38282 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38284__$1,inst_38282);
} else {
if((state_val_38285 === (12))){
var inst_38270 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38305_39029 = state_38284__$1;
(statearr_38305_39029[(2)] = inst_38270);

(statearr_38305_39029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (2))){
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38284__$1,(4),in$);
} else {
if((state_val_38285 === (23))){
var inst_38278 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38306_39030 = state_38284__$1;
(statearr_38306_39030[(2)] = inst_38278);

(statearr_38306_39030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (19))){
var inst_38265 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38307_39031 = state_38284__$1;
(statearr_38307_39031[(2)] = inst_38265);

(statearr_38307_39031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (11))){
var inst_38236 = (state_38284[(8)]);
var inst_38250 = (state_38284[(7)]);
var inst_38250__$1 = cljs.core.seq(inst_38236);
var state_38284__$1 = (function (){var statearr_38308 = state_38284;
(statearr_38308[(7)] = inst_38250__$1);

return statearr_38308;
})();
if(inst_38250__$1){
var statearr_38309_39032 = state_38284__$1;
(statearr_38309_39032[(1)] = (14));

} else {
var statearr_38310_39033 = state_38284__$1;
(statearr_38310_39033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (9))){
var inst_38272 = (state_38284[(2)]);
var inst_38273 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38284__$1 = (function (){var statearr_38311 = state_38284;
(statearr_38311[(15)] = inst_38272);

return statearr_38311;
})();
if(cljs.core.truth_(inst_38273)){
var statearr_38312_39034 = state_38284__$1;
(statearr_38312_39034[(1)] = (21));

} else {
var statearr_38313_39035 = state_38284__$1;
(statearr_38313_39035[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (5))){
var inst_38228 = cljs.core.async.close_BANG_(out);
var state_38284__$1 = state_38284;
var statearr_38314_39036 = state_38284__$1;
(statearr_38314_39036[(2)] = inst_38228);

(statearr_38314_39036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (14))){
var inst_38250 = (state_38284[(7)]);
var inst_38252 = cljs.core.chunked_seq_QMARK_(inst_38250);
var state_38284__$1 = state_38284;
if(inst_38252){
var statearr_38315_39037 = state_38284__$1;
(statearr_38315_39037[(1)] = (17));

} else {
var statearr_38316_39038 = state_38284__$1;
(statearr_38316_39038[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (16))){
var inst_38268 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38317_39039 = state_38284__$1;
(statearr_38317_39039[(2)] = inst_38268);

(statearr_38317_39039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (10))){
var inst_38239 = (state_38284[(11)]);
var inst_38237 = (state_38284[(12)]);
var inst_38244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38237,inst_38239);
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38284__$1,(13),out,inst_38244);
} else {
if((state_val_38285 === (18))){
var inst_38250 = (state_38284[(7)]);
var inst_38259 = cljs.core.first(inst_38250);
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38284__$1,(20),out,inst_38259);
} else {
if((state_val_38285 === (8))){
var inst_38238 = (state_38284[(9)]);
var inst_38239 = (state_38284[(11)]);
var inst_38241 = (inst_38239 < inst_38238);
var inst_38242 = inst_38241;
var state_38284__$1 = state_38284;
if(cljs.core.truth_(inst_38242)){
var statearr_38318_39040 = state_38284__$1;
(statearr_38318_39040[(1)] = (10));

} else {
var statearr_38319_39041 = state_38284__$1;
(statearr_38319_39041[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____0 = (function (){
var statearr_38320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38320[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__);

(statearr_38320[(1)] = (1));

return statearr_38320;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____1 = (function (state_38284){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38284);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38321){if((e38321 instanceof Object)){
var ex__36939__auto__ = e38321;
var statearr_38322_39042 = state_38284;
(statearr_38322_39042[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39043 = state_38284;
state_38284 = G__39043;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__ = function(state_38284){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____1.call(this,state_38284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36936__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38323 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38323[(6)] = c__37003__auto__);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38325 = arguments.length;
switch (G__38325) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38327 = arguments.length;
switch (G__38327) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38329 = arguments.length;
switch (G__38329) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___39047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38353){
var state_val_38354 = (state_38353[(1)]);
if((state_val_38354 === (7))){
var inst_38348 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38355_39048 = state_38353__$1;
(statearr_38355_39048[(2)] = inst_38348);

(statearr_38355_39048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (1))){
var inst_38330 = null;
var state_38353__$1 = (function (){var statearr_38356 = state_38353;
(statearr_38356[(7)] = inst_38330);

return statearr_38356;
})();
var statearr_38357_39051 = state_38353__$1;
(statearr_38357_39051[(2)] = null);

(statearr_38357_39051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (4))){
var inst_38333 = (state_38353[(8)]);
var inst_38333__$1 = (state_38353[(2)]);
var inst_38334 = (inst_38333__$1 == null);
var inst_38335 = cljs.core.not(inst_38334);
var state_38353__$1 = (function (){var statearr_38358 = state_38353;
(statearr_38358[(8)] = inst_38333__$1);

return statearr_38358;
})();
if(inst_38335){
var statearr_38359_39058 = state_38353__$1;
(statearr_38359_39058[(1)] = (5));

} else {
var statearr_38360_39059 = state_38353__$1;
(statearr_38360_39059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (6))){
var state_38353__$1 = state_38353;
var statearr_38361_39060 = state_38353__$1;
(statearr_38361_39060[(2)] = null);

(statearr_38361_39060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (3))){
var inst_38350 = (state_38353[(2)]);
var inst_38351 = cljs.core.async.close_BANG_(out);
var state_38353__$1 = (function (){var statearr_38362 = state_38353;
(statearr_38362[(9)] = inst_38350);

return statearr_38362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38353__$1,inst_38351);
} else {
if((state_val_38354 === (2))){
var state_38353__$1 = state_38353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38353__$1,(4),ch);
} else {
if((state_val_38354 === (11))){
var inst_38333 = (state_38353[(8)]);
var inst_38342 = (state_38353[(2)]);
var inst_38330 = inst_38333;
var state_38353__$1 = (function (){var statearr_38363 = state_38353;
(statearr_38363[(10)] = inst_38342);

(statearr_38363[(7)] = inst_38330);

return statearr_38363;
})();
var statearr_38364_39064 = state_38353__$1;
(statearr_38364_39064[(2)] = null);

(statearr_38364_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (9))){
var inst_38333 = (state_38353[(8)]);
var state_38353__$1 = state_38353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38353__$1,(11),out,inst_38333);
} else {
if((state_val_38354 === (5))){
var inst_38333 = (state_38353[(8)]);
var inst_38330 = (state_38353[(7)]);
var inst_38337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38333,inst_38330);
var state_38353__$1 = state_38353;
if(inst_38337){
var statearr_38366_39068 = state_38353__$1;
(statearr_38366_39068[(1)] = (8));

} else {
var statearr_38367_39069 = state_38353__$1;
(statearr_38367_39069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (10))){
var inst_38345 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38368_39070 = state_38353__$1;
(statearr_38368_39070[(2)] = inst_38345);

(statearr_38368_39070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (8))){
var inst_38330 = (state_38353[(7)]);
var tmp38365 = inst_38330;
var inst_38330__$1 = tmp38365;
var state_38353__$1 = (function (){var statearr_38369 = state_38353;
(statearr_38369[(7)] = inst_38330__$1);

return statearr_38369;
})();
var statearr_38370_39071 = state_38353__$1;
(statearr_38370_39071[(2)] = null);

(statearr_38370_39071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38371[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38371[(1)] = (1));

return statearr_38371;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38353){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38353);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38372){if((e38372 instanceof Object)){
var ex__36939__auto__ = e38372;
var statearr_38373_39072 = state_38353;
(statearr_38373_39072[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39073 = state_38353;
state_38353 = G__39073;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38374 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38374[(6)] = c__37003__auto___39047);

return statearr_38374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38376 = arguments.length;
switch (G__38376) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___39075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38414){
var state_val_38415 = (state_38414[(1)]);
if((state_val_38415 === (7))){
var inst_38410 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38416_39076 = state_38414__$1;
(statearr_38416_39076[(2)] = inst_38410);

(statearr_38416_39076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (1))){
var inst_38377 = (new Array(n));
var inst_38378 = inst_38377;
var inst_38379 = (0);
var state_38414__$1 = (function (){var statearr_38417 = state_38414;
(statearr_38417[(7)] = inst_38378);

(statearr_38417[(8)] = inst_38379);

return statearr_38417;
})();
var statearr_38418_39077 = state_38414__$1;
(statearr_38418_39077[(2)] = null);

(statearr_38418_39077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (4))){
var inst_38382 = (state_38414[(9)]);
var inst_38382__$1 = (state_38414[(2)]);
var inst_38383 = (inst_38382__$1 == null);
var inst_38384 = cljs.core.not(inst_38383);
var state_38414__$1 = (function (){var statearr_38419 = state_38414;
(statearr_38419[(9)] = inst_38382__$1);

return statearr_38419;
})();
if(inst_38384){
var statearr_38420_39078 = state_38414__$1;
(statearr_38420_39078[(1)] = (5));

} else {
var statearr_38421_39079 = state_38414__$1;
(statearr_38421_39079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (15))){
var inst_38404 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38422_39080 = state_38414__$1;
(statearr_38422_39080[(2)] = inst_38404);

(statearr_38422_39080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (13))){
var state_38414__$1 = state_38414;
var statearr_38423_39081 = state_38414__$1;
(statearr_38423_39081[(2)] = null);

(statearr_38423_39081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (6))){
var inst_38379 = (state_38414[(8)]);
var inst_38400 = (inst_38379 > (0));
var state_38414__$1 = state_38414;
if(cljs.core.truth_(inst_38400)){
var statearr_38424_39082 = state_38414__$1;
(statearr_38424_39082[(1)] = (12));

} else {
var statearr_38425_39083 = state_38414__$1;
(statearr_38425_39083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (3))){
var inst_38412 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38414__$1,inst_38412);
} else {
if((state_val_38415 === (12))){
var inst_38378 = (state_38414[(7)]);
var inst_38402 = cljs.core.vec(inst_38378);
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38414__$1,(15),out,inst_38402);
} else {
if((state_val_38415 === (2))){
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38414__$1,(4),ch);
} else {
if((state_val_38415 === (11))){
var inst_38394 = (state_38414[(2)]);
var inst_38395 = (new Array(n));
var inst_38378 = inst_38395;
var inst_38379 = (0);
var state_38414__$1 = (function (){var statearr_38426 = state_38414;
(statearr_38426[(7)] = inst_38378);

(statearr_38426[(8)] = inst_38379);

(statearr_38426[(10)] = inst_38394);

return statearr_38426;
})();
var statearr_38427_39084 = state_38414__$1;
(statearr_38427_39084[(2)] = null);

(statearr_38427_39084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (9))){
var inst_38378 = (state_38414[(7)]);
var inst_38392 = cljs.core.vec(inst_38378);
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38414__$1,(11),out,inst_38392);
} else {
if((state_val_38415 === (5))){
var inst_38378 = (state_38414[(7)]);
var inst_38379 = (state_38414[(8)]);
var inst_38387 = (state_38414[(11)]);
var inst_38382 = (state_38414[(9)]);
var inst_38386 = (inst_38378[inst_38379] = inst_38382);
var inst_38387__$1 = (inst_38379 + (1));
var inst_38388 = (inst_38387__$1 < n);
var state_38414__$1 = (function (){var statearr_38428 = state_38414;
(statearr_38428[(12)] = inst_38386);

(statearr_38428[(11)] = inst_38387__$1);

return statearr_38428;
})();
if(cljs.core.truth_(inst_38388)){
var statearr_38429_39085 = state_38414__$1;
(statearr_38429_39085[(1)] = (8));

} else {
var statearr_38430_39086 = state_38414__$1;
(statearr_38430_39086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (14))){
var inst_38407 = (state_38414[(2)]);
var inst_38408 = cljs.core.async.close_BANG_(out);
var state_38414__$1 = (function (){var statearr_38432 = state_38414;
(statearr_38432[(13)] = inst_38407);

return statearr_38432;
})();
var statearr_38433_39087 = state_38414__$1;
(statearr_38433_39087[(2)] = inst_38408);

(statearr_38433_39087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (10))){
var inst_38398 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38434_39088 = state_38414__$1;
(statearr_38434_39088[(2)] = inst_38398);

(statearr_38434_39088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (8))){
var inst_38378 = (state_38414[(7)]);
var inst_38387 = (state_38414[(11)]);
var tmp38431 = inst_38378;
var inst_38378__$1 = tmp38431;
var inst_38379 = inst_38387;
var state_38414__$1 = (function (){var statearr_38435 = state_38414;
(statearr_38435[(7)] = inst_38378__$1);

(statearr_38435[(8)] = inst_38379);

return statearr_38435;
})();
var statearr_38436_39089 = state_38414__$1;
(statearr_38436_39089[(2)] = null);

(statearr_38436_39089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38437[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38437[(1)] = (1));

return statearr_38437;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38414){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38414);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38438){if((e38438 instanceof Object)){
var ex__36939__auto__ = e38438;
var statearr_38439_39090 = state_38414;
(statearr_38439_39090[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39091 = state_38414;
state_38414 = G__39091;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38440 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38440[(6)] = c__37003__auto___39075);

return statearr_38440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38442 = arguments.length;
switch (G__38442) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37003__auto___39093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_38484){
var state_val_38485 = (state_38484[(1)]);
if((state_val_38485 === (7))){
var inst_38480 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38486_39094 = state_38484__$1;
(statearr_38486_39094[(2)] = inst_38480);

(statearr_38486_39094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (1))){
var inst_38443 = [];
var inst_38444 = inst_38443;
var inst_38445 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38484__$1 = (function (){var statearr_38487 = state_38484;
(statearr_38487[(7)] = inst_38445);

(statearr_38487[(8)] = inst_38444);

return statearr_38487;
})();
var statearr_38488_39095 = state_38484__$1;
(statearr_38488_39095[(2)] = null);

(statearr_38488_39095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (4))){
var inst_38448 = (state_38484[(9)]);
var inst_38448__$1 = (state_38484[(2)]);
var inst_38449 = (inst_38448__$1 == null);
var inst_38450 = cljs.core.not(inst_38449);
var state_38484__$1 = (function (){var statearr_38489 = state_38484;
(statearr_38489[(9)] = inst_38448__$1);

return statearr_38489;
})();
if(inst_38450){
var statearr_38490_39096 = state_38484__$1;
(statearr_38490_39096[(1)] = (5));

} else {
var statearr_38491_39097 = state_38484__$1;
(statearr_38491_39097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (15))){
var inst_38474 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38492_39098 = state_38484__$1;
(statearr_38492_39098[(2)] = inst_38474);

(statearr_38492_39098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (13))){
var state_38484__$1 = state_38484;
var statearr_38493_39099 = state_38484__$1;
(statearr_38493_39099[(2)] = null);

(statearr_38493_39099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (6))){
var inst_38444 = (state_38484[(8)]);
var inst_38469 = inst_38444.length;
var inst_38470 = (inst_38469 > (0));
var state_38484__$1 = state_38484;
if(cljs.core.truth_(inst_38470)){
var statearr_38494_39100 = state_38484__$1;
(statearr_38494_39100[(1)] = (12));

} else {
var statearr_38495_39101 = state_38484__$1;
(statearr_38495_39101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (3))){
var inst_38482 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38484__$1,inst_38482);
} else {
if((state_val_38485 === (12))){
var inst_38444 = (state_38484[(8)]);
var inst_38472 = cljs.core.vec(inst_38444);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38484__$1,(15),out,inst_38472);
} else {
if((state_val_38485 === (2))){
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38484__$1,(4),ch);
} else {
if((state_val_38485 === (11))){
var inst_38452 = (state_38484[(10)]);
var inst_38448 = (state_38484[(9)]);
var inst_38462 = (state_38484[(2)]);
var inst_38463 = [];
var inst_38464 = inst_38463.push(inst_38448);
var inst_38444 = inst_38463;
var inst_38445 = inst_38452;
var state_38484__$1 = (function (){var statearr_38496 = state_38484;
(statearr_38496[(7)] = inst_38445);

(statearr_38496[(11)] = inst_38462);

(statearr_38496[(8)] = inst_38444);

(statearr_38496[(12)] = inst_38464);

return statearr_38496;
})();
var statearr_38497_39102 = state_38484__$1;
(statearr_38497_39102[(2)] = null);

(statearr_38497_39102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (9))){
var inst_38444 = (state_38484[(8)]);
var inst_38460 = cljs.core.vec(inst_38444);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38484__$1,(11),out,inst_38460);
} else {
if((state_val_38485 === (5))){
var inst_38452 = (state_38484[(10)]);
var inst_38445 = (state_38484[(7)]);
var inst_38448 = (state_38484[(9)]);
var inst_38452__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38448) : f.call(null,inst_38448));
var inst_38453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38452__$1,inst_38445);
var inst_38454 = cljs.core.keyword_identical_QMARK_(inst_38445,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38455 = ((inst_38453) || (inst_38454));
var state_38484__$1 = (function (){var statearr_38498 = state_38484;
(statearr_38498[(10)] = inst_38452__$1);

return statearr_38498;
})();
if(cljs.core.truth_(inst_38455)){
var statearr_38499_39103 = state_38484__$1;
(statearr_38499_39103[(1)] = (8));

} else {
var statearr_38500_39104 = state_38484__$1;
(statearr_38500_39104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (14))){
var inst_38477 = (state_38484[(2)]);
var inst_38478 = cljs.core.async.close_BANG_(out);
var state_38484__$1 = (function (){var statearr_38502 = state_38484;
(statearr_38502[(13)] = inst_38477);

return statearr_38502;
})();
var statearr_38503_39105 = state_38484__$1;
(statearr_38503_39105[(2)] = inst_38478);

(statearr_38503_39105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (10))){
var inst_38467 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38504_39106 = state_38484__$1;
(statearr_38504_39106[(2)] = inst_38467);

(statearr_38504_39106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (8))){
var inst_38452 = (state_38484[(10)]);
var inst_38444 = (state_38484[(8)]);
var inst_38448 = (state_38484[(9)]);
var inst_38457 = inst_38444.push(inst_38448);
var tmp38501 = inst_38444;
var inst_38444__$1 = tmp38501;
var inst_38445 = inst_38452;
var state_38484__$1 = (function (){var statearr_38505 = state_38484;
(statearr_38505[(7)] = inst_38445);

(statearr_38505[(8)] = inst_38444__$1);

(statearr_38505[(14)] = inst_38457);

return statearr_38505;
})();
var statearr_38506_39107 = state_38484__$1;
(statearr_38506_39107[(2)] = null);

(statearr_38506_39107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36936__auto__ = null;
var cljs$core$async$state_machine__36936__auto____0 = (function (){
var statearr_38507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38507[(0)] = cljs$core$async$state_machine__36936__auto__);

(statearr_38507[(1)] = (1));

return statearr_38507;
});
var cljs$core$async$state_machine__36936__auto____1 = (function (state_38484){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_38484);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e38508){if((e38508 instanceof Object)){
var ex__36939__auto__ = e38508;
var statearr_38509_39108 = state_38484;
(statearr_38509_39108[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39109 = state_38484;
state_38484 = G__39109;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
cljs$core$async$state_machine__36936__auto__ = function(state_38484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36936__auto____1.call(this,state_38484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36936__auto____0;
cljs$core$async$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36936__auto____1;
return cljs$core$async$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_38510 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_38510[(6)] = c__37003__auto___39093);

return statearr_38510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
