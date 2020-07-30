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
var G__44464 = arguments.length;
switch (G__44464) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44465 = (function (f,blockable,meta44466){
this.f = f;
this.blockable = blockable;
this.meta44466 = meta44466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44467,meta44466__$1){
var self__ = this;
var _44467__$1 = this;
return (new cljs.core.async.t_cljs$core$async44465(self__.f,self__.blockable,meta44466__$1));
}));

(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44467){
var self__ = this;
var _44467__$1 = this;
return self__.meta44466;
}));

(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44466","meta44466",1139979236,null)], null);
}));

(cljs.core.async.t_cljs$core$async44465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44465");

(cljs.core.async.t_cljs$core$async44465.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44465.
 */
cljs.core.async.__GT_t_cljs$core$async44465 = (function cljs$core$async$__GT_t_cljs$core$async44465(f__$1,blockable__$1,meta44466){
return (new cljs.core.async.t_cljs$core$async44465(f__$1,blockable__$1,meta44466));
});

}

return (new cljs.core.async.t_cljs$core$async44465(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44470 = arguments.length;
switch (G__44470) {
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
var G__44474 = arguments.length;
switch (G__44474) {
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
var G__44476 = arguments.length;
switch (G__44476) {
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
var val_45935 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45935) : fn1.call(null,val_45935));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45935) : fn1.call(null,val_45935));
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
var G__44478 = arguments.length;
switch (G__44478) {
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
var n__4666__auto___45939 = n;
var x_45940 = (0);
while(true){
if((x_45940 < n__4666__auto___45939)){
(a[x_45940] = x_45940);

var G__45941 = (x_45940 + (1));
x_45940 = G__45941;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44479 = (function (flag,meta44480){
this.flag = flag;
this.meta44480 = meta44480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44481,meta44480__$1){
var self__ = this;
var _44481__$1 = this;
return (new cljs.core.async.t_cljs$core$async44479(self__.flag,meta44480__$1));
}));

(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44481){
var self__ = this;
var _44481__$1 = this;
return self__.meta44480;
}));

(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44480","meta44480",91339937,null)], null);
}));

(cljs.core.async.t_cljs$core$async44479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44479");

(cljs.core.async.t_cljs$core$async44479.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44479.
 */
cljs.core.async.__GT_t_cljs$core$async44479 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44479(flag__$1,meta44480){
return (new cljs.core.async.t_cljs$core$async44479(flag__$1,meta44480));
});

}

return (new cljs.core.async.t_cljs$core$async44479(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44482 = (function (flag,cb,meta44483){
this.flag = flag;
this.cb = cb;
this.meta44483 = meta44483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44484,meta44483__$1){
var self__ = this;
var _44484__$1 = this;
return (new cljs.core.async.t_cljs$core$async44482(self__.flag,self__.cb,meta44483__$1));
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44484){
var self__ = this;
var _44484__$1 = this;
return self__.meta44483;
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44483","meta44483",1157485471,null)], null);
}));

(cljs.core.async.t_cljs$core$async44482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44482");

(cljs.core.async.t_cljs$core$async44482.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44482.
 */
cljs.core.async.__GT_t_cljs$core$async44482 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44482(flag__$1,cb__$1,meta44483){
return (new cljs.core.async.t_cljs$core$async44482(flag__$1,cb__$1,meta44483));
});

}

return (new cljs.core.async.t_cljs$core$async44482(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44485_SHARP_){
var G__44489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44485_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44489) : fret.call(null,G__44489));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44486_SHARP_){
var G__44490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44486_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44490) : fret.call(null,G__44490));
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
var G__45946 = (i + (1));
i = G__45946;
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
var len__4789__auto___45948 = arguments.length;
var i__4790__auto___45949 = (0);
while(true){
if((i__4790__auto___45949 < len__4789__auto___45948)){
args__4795__auto__.push((arguments[i__4790__auto___45949]));

var G__45950 = (i__4790__auto___45949 + (1));
i__4790__auto___45949 = G__45950;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44497){
var map__44498 = p__44497;
var map__44498__$1 = (((((!((map__44498 == null))))?(((((map__44498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44498):map__44498);
var opts = map__44498__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44494){
var G__44495 = cljs.core.first(seq44494);
var seq44494__$1 = cljs.core.next(seq44494);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44495,seq44494__$1);
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
var G__44503 = arguments.length;
switch (G__44503) {
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
var c__44403__auto___45959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44531){
var state_val_44532 = (state_44531[(1)]);
if((state_val_44532 === (7))){
var inst_44527 = (state_44531[(2)]);
var state_44531__$1 = state_44531;
var statearr_44533_45961 = state_44531__$1;
(statearr_44533_45961[(2)] = inst_44527);

(statearr_44533_45961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (1))){
var state_44531__$1 = state_44531;
var statearr_44534_45962 = state_44531__$1;
(statearr_44534_45962[(2)] = null);

(statearr_44534_45962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (4))){
var inst_44510 = (state_44531[(7)]);
var inst_44510__$1 = (state_44531[(2)]);
var inst_44511 = (inst_44510__$1 == null);
var state_44531__$1 = (function (){var statearr_44535 = state_44531;
(statearr_44535[(7)] = inst_44510__$1);

return statearr_44535;
})();
if(cljs.core.truth_(inst_44511)){
var statearr_44536_45966 = state_44531__$1;
(statearr_44536_45966[(1)] = (5));

} else {
var statearr_44537_45967 = state_44531__$1;
(statearr_44537_45967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (13))){
var state_44531__$1 = state_44531;
var statearr_44538_45968 = state_44531__$1;
(statearr_44538_45968[(2)] = null);

(statearr_44538_45968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (6))){
var inst_44510 = (state_44531[(7)]);
var state_44531__$1 = state_44531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44531__$1,(11),to,inst_44510);
} else {
if((state_val_44532 === (3))){
var inst_44529 = (state_44531[(2)]);
var state_44531__$1 = state_44531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44531__$1,inst_44529);
} else {
if((state_val_44532 === (12))){
var state_44531__$1 = state_44531;
var statearr_44539_45970 = state_44531__$1;
(statearr_44539_45970[(2)] = null);

(statearr_44539_45970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (2))){
var state_44531__$1 = state_44531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44531__$1,(4),from);
} else {
if((state_val_44532 === (11))){
var inst_44520 = (state_44531[(2)]);
var state_44531__$1 = state_44531;
if(cljs.core.truth_(inst_44520)){
var statearr_44540_45971 = state_44531__$1;
(statearr_44540_45971[(1)] = (12));

} else {
var statearr_44541_45972 = state_44531__$1;
(statearr_44541_45972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (9))){
var state_44531__$1 = state_44531;
var statearr_44542_45973 = state_44531__$1;
(statearr_44542_45973[(2)] = null);

(statearr_44542_45973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (5))){
var state_44531__$1 = state_44531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44543_45974 = state_44531__$1;
(statearr_44543_45974[(1)] = (8));

} else {
var statearr_44544_45976 = state_44531__$1;
(statearr_44544_45976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (14))){
var inst_44525 = (state_44531[(2)]);
var state_44531__$1 = state_44531;
var statearr_44545_45979 = state_44531__$1;
(statearr_44545_45979[(2)] = inst_44525);

(statearr_44545_45979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (10))){
var inst_44517 = (state_44531[(2)]);
var state_44531__$1 = state_44531;
var statearr_44546_45980 = state_44531__$1;
(statearr_44546_45980[(2)] = inst_44517);

(statearr_44546_45980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44532 === (8))){
var inst_44514 = cljs.core.async.close_BANG_(to);
var state_44531__$1 = state_44531;
var statearr_44547_45981 = state_44531__$1;
(statearr_44547_45981[(2)] = inst_44514);

(statearr_44547_45981[(1)] = (10));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_44548 = [null,null,null,null,null,null,null,null];
(statearr_44548[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_44548[(1)] = (1));

return statearr_44548;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_44531){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44531);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44549){if((e44549 instanceof Object)){
var ex__44342__auto__ = e44549;
var statearr_44550_45982 = state_44531;
(statearr_44550_45982[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45983 = state_44531;
state_44531 = G__45983;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_44531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_44531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44551 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44551[(6)] = c__44403__auto___45959);

return statearr_44551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var process = (function (p__44552){
var vec__44553 = p__44552;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44553,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44553,(1),null);
var job = vec__44553;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44403__auto___45984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44560){
var state_val_44561 = (state_44560[(1)]);
if((state_val_44561 === (1))){
var state_44560__$1 = state_44560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44560__$1,(2),res,v);
} else {
if((state_val_44561 === (2))){
var inst_44557 = (state_44560[(2)]);
var inst_44558 = cljs.core.async.close_BANG_(res);
var state_44560__$1 = (function (){var statearr_44562 = state_44560;
(statearr_44562[(7)] = inst_44557);

return statearr_44562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44560__$1,inst_44558);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_44563 = [null,null,null,null,null,null,null,null];
(statearr_44563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__);

(statearr_44563[(1)] = (1));

return statearr_44563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1 = (function (state_44560){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44560);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44564){if((e44564 instanceof Object)){
var ex__44342__auto__ = e44564;
var statearr_44565_45985 = state_44560;
(statearr_44565_45985[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45986 = state_44560;
state_44560 = G__45986;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = function(state_44560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1.call(this,state_44560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44566 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44566[(6)] = c__44403__auto___45984);

return statearr_44566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44567){
var vec__44568 = p__44567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(1),null);
var job = vec__44568;
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
var n__4666__auto___45987 = n;
var __45988 = (0);
while(true){
if((__45988 < n__4666__auto___45987)){
var G__44571_45989 = type;
var G__44571_45990__$1 = (((G__44571_45989 instanceof cljs.core.Keyword))?G__44571_45989.fqn:null);
switch (G__44571_45990__$1) {
case "compute":
var c__44403__auto___45996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45988,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = ((function (__45988,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function (state_44584){
var state_val_44585 = (state_44584[(1)]);
if((state_val_44585 === (1))){
var state_44584__$1 = state_44584;
var statearr_44586_45997 = state_44584__$1;
(statearr_44586_45997[(2)] = null);

(statearr_44586_45997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44585 === (2))){
var state_44584__$1 = state_44584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44584__$1,(4),jobs);
} else {
if((state_val_44585 === (3))){
var inst_44582 = (state_44584[(2)]);
var state_44584__$1 = state_44584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44584__$1,inst_44582);
} else {
if((state_val_44585 === (4))){
var inst_44574 = (state_44584[(2)]);
var inst_44575 = process(inst_44574);
var state_44584__$1 = state_44584;
if(cljs.core.truth_(inst_44575)){
var statearr_44587_46002 = state_44584__$1;
(statearr_44587_46002[(1)] = (5));

} else {
var statearr_44588_46007 = state_44584__$1;
(statearr_44588_46007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44585 === (5))){
var state_44584__$1 = state_44584;
var statearr_44589_46008 = state_44584__$1;
(statearr_44589_46008[(2)] = null);

(statearr_44589_46008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44585 === (6))){
var state_44584__$1 = state_44584;
var statearr_44590_46009 = state_44584__$1;
(statearr_44590_46009[(2)] = null);

(statearr_44590_46009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44585 === (7))){
var inst_44580 = (state_44584[(2)]);
var state_44584__$1 = state_44584;
var statearr_44591_46010 = state_44584__$1;
(statearr_44591_46010[(2)] = inst_44580);

(statearr_44591_46010[(1)] = (3));


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
});})(__45988,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
;
return ((function (__45988,switch__44338__auto__,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_44592 = [null,null,null,null,null,null,null];
(statearr_44592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__);

(statearr_44592[(1)] = (1));

return statearr_44592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1 = (function (state_44584){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44584);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44593){if((e44593 instanceof Object)){
var ex__44342__auto__ = e44593;
var statearr_44594_46012 = state_44584;
(statearr_44594_46012[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46014 = state_44584;
state_44584 = G__46014;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = function(state_44584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1.call(this,state_44584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__;
})()
;})(__45988,switch__44338__auto__,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
})();
var state__44405__auto__ = (function (){var statearr_44595 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44595[(6)] = c__44403__auto___45996);

return statearr_44595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
});})(__45988,c__44403__auto___45996,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
);


break;
case "async":
var c__44403__auto___46015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45988,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = ((function (__45988,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function (state_44608){
var state_val_44609 = (state_44608[(1)]);
if((state_val_44609 === (1))){
var state_44608__$1 = state_44608;
var statearr_44610_46017 = state_44608__$1;
(statearr_44610_46017[(2)] = null);

(statearr_44610_46017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44609 === (2))){
var state_44608__$1 = state_44608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44608__$1,(4),jobs);
} else {
if((state_val_44609 === (3))){
var inst_44606 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44608__$1,inst_44606);
} else {
if((state_val_44609 === (4))){
var inst_44598 = (state_44608[(2)]);
var inst_44599 = async(inst_44598);
var state_44608__$1 = state_44608;
if(cljs.core.truth_(inst_44599)){
var statearr_44611_46019 = state_44608__$1;
(statearr_44611_46019[(1)] = (5));

} else {
var statearr_44612_46020 = state_44608__$1;
(statearr_44612_46020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44609 === (5))){
var state_44608__$1 = state_44608;
var statearr_44613_46021 = state_44608__$1;
(statearr_44613_46021[(2)] = null);

(statearr_44613_46021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44609 === (6))){
var state_44608__$1 = state_44608;
var statearr_44614_46022 = state_44608__$1;
(statearr_44614_46022[(2)] = null);

(statearr_44614_46022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44609 === (7))){
var inst_44604 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44615_46023 = state_44608__$1;
(statearr_44615_46023[(2)] = inst_44604);

(statearr_44615_46023[(1)] = (3));


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
});})(__45988,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
;
return ((function (__45988,switch__44338__auto__,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_44616 = [null,null,null,null,null,null,null];
(statearr_44616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__);

(statearr_44616[(1)] = (1));

return statearr_44616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1 = (function (state_44608){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44608);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44617){if((e44617 instanceof Object)){
var ex__44342__auto__ = e44617;
var statearr_44618_46024 = state_44608;
(statearr_44618_46024[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46025 = state_44608;
state_44608 = G__46025;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = function(state_44608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1.call(this,state_44608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__;
})()
;})(__45988,switch__44338__auto__,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
})();
var state__44405__auto__ = (function (){var statearr_44619 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44619[(6)] = c__44403__auto___46015);

return statearr_44619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
});})(__45988,c__44403__auto___46015,G__44571_45989,G__44571_45990__$1,n__4666__auto___45987,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44571_45990__$1)].join('')));

}

var G__46026 = (__45988 + (1));
__45988 = G__46026;
continue;
} else {
}
break;
}

var c__44403__auto___46027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44641){
var state_val_44642 = (state_44641[(1)]);
if((state_val_44642 === (7))){
var inst_44637 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
var statearr_44643_46028 = state_44641__$1;
(statearr_44643_46028[(2)] = inst_44637);

(statearr_44643_46028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (1))){
var state_44641__$1 = state_44641;
var statearr_44644_46029 = state_44641__$1;
(statearr_44644_46029[(2)] = null);

(statearr_44644_46029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (4))){
var inst_44622 = (state_44641[(7)]);
var inst_44622__$1 = (state_44641[(2)]);
var inst_44623 = (inst_44622__$1 == null);
var state_44641__$1 = (function (){var statearr_44645 = state_44641;
(statearr_44645[(7)] = inst_44622__$1);

return statearr_44645;
})();
if(cljs.core.truth_(inst_44623)){
var statearr_44646_46030 = state_44641__$1;
(statearr_44646_46030[(1)] = (5));

} else {
var statearr_44647_46031 = state_44641__$1;
(statearr_44647_46031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (6))){
var inst_44627 = (state_44641[(8)]);
var inst_44622 = (state_44641[(7)]);
var inst_44627__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44629 = [inst_44622,inst_44627__$1];
var inst_44630 = (new cljs.core.PersistentVector(null,2,(5),inst_44628,inst_44629,null));
var state_44641__$1 = (function (){var statearr_44648 = state_44641;
(statearr_44648[(8)] = inst_44627__$1);

return statearr_44648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44641__$1,(8),jobs,inst_44630);
} else {
if((state_val_44642 === (3))){
var inst_44639 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44641__$1,inst_44639);
} else {
if((state_val_44642 === (2))){
var state_44641__$1 = state_44641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44641__$1,(4),from);
} else {
if((state_val_44642 === (9))){
var inst_44634 = (state_44641[(2)]);
var state_44641__$1 = (function (){var statearr_44649 = state_44641;
(statearr_44649[(9)] = inst_44634);

return statearr_44649;
})();
var statearr_44650_46032 = state_44641__$1;
(statearr_44650_46032[(2)] = null);

(statearr_44650_46032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (5))){
var inst_44625 = cljs.core.async.close_BANG_(jobs);
var state_44641__$1 = state_44641;
var statearr_44651_46033 = state_44641__$1;
(statearr_44651_46033[(2)] = inst_44625);

(statearr_44651_46033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (8))){
var inst_44627 = (state_44641[(8)]);
var inst_44632 = (state_44641[(2)]);
var state_44641__$1 = (function (){var statearr_44652 = state_44641;
(statearr_44652[(10)] = inst_44632);

return statearr_44652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44641__$1,(9),results,inst_44627);
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
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_44653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__);

(statearr_44653[(1)] = (1));

return statearr_44653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1 = (function (state_44641){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44641);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44654){if((e44654 instanceof Object)){
var ex__44342__auto__ = e44654;
var statearr_44655_46034 = state_44641;
(statearr_44655_46034[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46035 = state_44641;
state_44641 = G__46035;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = function(state_44641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1.call(this,state_44641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44656 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44656[(6)] = c__44403__auto___46027);

return statearr_44656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44694){
var state_val_44695 = (state_44694[(1)]);
if((state_val_44695 === (7))){
var inst_44690 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44696_46036 = state_44694__$1;
(statearr_44696_46036[(2)] = inst_44690);

(statearr_44696_46036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (20))){
var state_44694__$1 = state_44694;
var statearr_44697_46037 = state_44694__$1;
(statearr_44697_46037[(2)] = null);

(statearr_44697_46037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (1))){
var state_44694__$1 = state_44694;
var statearr_44698_46038 = state_44694__$1;
(statearr_44698_46038[(2)] = null);

(statearr_44698_46038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (4))){
var inst_44659 = (state_44694[(7)]);
var inst_44659__$1 = (state_44694[(2)]);
var inst_44660 = (inst_44659__$1 == null);
var state_44694__$1 = (function (){var statearr_44699 = state_44694;
(statearr_44699[(7)] = inst_44659__$1);

return statearr_44699;
})();
if(cljs.core.truth_(inst_44660)){
var statearr_44700_46039 = state_44694__$1;
(statearr_44700_46039[(1)] = (5));

} else {
var statearr_44701_46040 = state_44694__$1;
(statearr_44701_46040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (15))){
var inst_44672 = (state_44694[(8)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44694__$1,(18),to,inst_44672);
} else {
if((state_val_44695 === (21))){
var inst_44685 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44702_46041 = state_44694__$1;
(statearr_44702_46041[(2)] = inst_44685);

(statearr_44702_46041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (13))){
var inst_44687 = (state_44694[(2)]);
var state_44694__$1 = (function (){var statearr_44703 = state_44694;
(statearr_44703[(9)] = inst_44687);

return statearr_44703;
})();
var statearr_44704_46042 = state_44694__$1;
(statearr_44704_46042[(2)] = null);

(statearr_44704_46042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (6))){
var inst_44659 = (state_44694[(7)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44694__$1,(11),inst_44659);
} else {
if((state_val_44695 === (17))){
var inst_44680 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44680)){
var statearr_44705_46043 = state_44694__$1;
(statearr_44705_46043[(1)] = (19));

} else {
var statearr_44706_46044 = state_44694__$1;
(statearr_44706_46044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (3))){
var inst_44692 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44694__$1,inst_44692);
} else {
if((state_val_44695 === (12))){
var inst_44669 = (state_44694[(10)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44694__$1,(14),inst_44669);
} else {
if((state_val_44695 === (2))){
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44694__$1,(4),results);
} else {
if((state_val_44695 === (19))){
var state_44694__$1 = state_44694;
var statearr_44707_46045 = state_44694__$1;
(statearr_44707_46045[(2)] = null);

(statearr_44707_46045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (11))){
var inst_44669 = (state_44694[(2)]);
var state_44694__$1 = (function (){var statearr_44708 = state_44694;
(statearr_44708[(10)] = inst_44669);

return statearr_44708;
})();
var statearr_44709_46046 = state_44694__$1;
(statearr_44709_46046[(2)] = null);

(statearr_44709_46046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (9))){
var state_44694__$1 = state_44694;
var statearr_44710_46047 = state_44694__$1;
(statearr_44710_46047[(2)] = null);

(statearr_44710_46047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (5))){
var state_44694__$1 = state_44694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44711_46048 = state_44694__$1;
(statearr_44711_46048[(1)] = (8));

} else {
var statearr_44712_46049 = state_44694__$1;
(statearr_44712_46049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (14))){
var inst_44672 = (state_44694[(8)]);
var inst_44672__$1 = (state_44694[(2)]);
var inst_44673 = (inst_44672__$1 == null);
var inst_44674 = cljs.core.not(inst_44673);
var state_44694__$1 = (function (){var statearr_44713 = state_44694;
(statearr_44713[(8)] = inst_44672__$1);

return statearr_44713;
})();
if(inst_44674){
var statearr_44714_46050 = state_44694__$1;
(statearr_44714_46050[(1)] = (15));

} else {
var statearr_44715_46051 = state_44694__$1;
(statearr_44715_46051[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (16))){
var state_44694__$1 = state_44694;
var statearr_44716_46052 = state_44694__$1;
(statearr_44716_46052[(2)] = false);

(statearr_44716_46052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (10))){
var inst_44666 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44717_46053 = state_44694__$1;
(statearr_44717_46053[(2)] = inst_44666);

(statearr_44717_46053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (18))){
var inst_44677 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44718_46054 = state_44694__$1;
(statearr_44718_46054[(2)] = inst_44677);

(statearr_44718_46054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (8))){
var inst_44663 = cljs.core.async.close_BANG_(to);
var state_44694__$1 = state_44694;
var statearr_44719_46055 = state_44694__$1;
(statearr_44719_46055[(2)] = inst_44663);

(statearr_44719_46055[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_44720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__);

(statearr_44720[(1)] = (1));

return statearr_44720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1 = (function (state_44694){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44694);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44721){if((e44721 instanceof Object)){
var ex__44342__auto__ = e44721;
var statearr_44722_46056 = state_44694;
(statearr_44722_46056[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46057 = state_44694;
state_44694 = G__46057;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__ = function(state_44694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1.call(this,state_44694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44723 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44723[(6)] = c__44403__auto__);

return statearr_44723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
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
var G__44725 = arguments.length;
switch (G__44725) {
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
var G__44727 = arguments.length;
switch (G__44727) {
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
var G__44729 = arguments.length;
switch (G__44729) {
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
var c__44403__auto___46061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44755){
var state_val_44756 = (state_44755[(1)]);
if((state_val_44756 === (7))){
var inst_44751 = (state_44755[(2)]);
var state_44755__$1 = state_44755;
var statearr_44757_46062 = state_44755__$1;
(statearr_44757_46062[(2)] = inst_44751);

(statearr_44757_46062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (1))){
var state_44755__$1 = state_44755;
var statearr_44758_46063 = state_44755__$1;
(statearr_44758_46063[(2)] = null);

(statearr_44758_46063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (4))){
var inst_44732 = (state_44755[(7)]);
var inst_44732__$1 = (state_44755[(2)]);
var inst_44733 = (inst_44732__$1 == null);
var state_44755__$1 = (function (){var statearr_44759 = state_44755;
(statearr_44759[(7)] = inst_44732__$1);

return statearr_44759;
})();
if(cljs.core.truth_(inst_44733)){
var statearr_44760_46064 = state_44755__$1;
(statearr_44760_46064[(1)] = (5));

} else {
var statearr_44761_46065 = state_44755__$1;
(statearr_44761_46065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (13))){
var state_44755__$1 = state_44755;
var statearr_44762_46066 = state_44755__$1;
(statearr_44762_46066[(2)] = null);

(statearr_44762_46066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (6))){
var inst_44732 = (state_44755[(7)]);
var inst_44738 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44732) : p.call(null,inst_44732));
var state_44755__$1 = state_44755;
if(cljs.core.truth_(inst_44738)){
var statearr_44763_46067 = state_44755__$1;
(statearr_44763_46067[(1)] = (9));

} else {
var statearr_44764_46068 = state_44755__$1;
(statearr_44764_46068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (3))){
var inst_44753 = (state_44755[(2)]);
var state_44755__$1 = state_44755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44755__$1,inst_44753);
} else {
if((state_val_44756 === (12))){
var state_44755__$1 = state_44755;
var statearr_44765_46069 = state_44755__$1;
(statearr_44765_46069[(2)] = null);

(statearr_44765_46069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (2))){
var state_44755__$1 = state_44755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44755__$1,(4),ch);
} else {
if((state_val_44756 === (11))){
var inst_44732 = (state_44755[(7)]);
var inst_44742 = (state_44755[(2)]);
var state_44755__$1 = state_44755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44755__$1,(8),inst_44742,inst_44732);
} else {
if((state_val_44756 === (9))){
var state_44755__$1 = state_44755;
var statearr_44766_46070 = state_44755__$1;
(statearr_44766_46070[(2)] = tc);

(statearr_44766_46070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (5))){
var inst_44735 = cljs.core.async.close_BANG_(tc);
var inst_44736 = cljs.core.async.close_BANG_(fc);
var state_44755__$1 = (function (){var statearr_44767 = state_44755;
(statearr_44767[(8)] = inst_44735);

return statearr_44767;
})();
var statearr_44768_46071 = state_44755__$1;
(statearr_44768_46071[(2)] = inst_44736);

(statearr_44768_46071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (14))){
var inst_44749 = (state_44755[(2)]);
var state_44755__$1 = state_44755;
var statearr_44769_46072 = state_44755__$1;
(statearr_44769_46072[(2)] = inst_44749);

(statearr_44769_46072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (10))){
var state_44755__$1 = state_44755;
var statearr_44770_46073 = state_44755__$1;
(statearr_44770_46073[(2)] = fc);

(statearr_44770_46073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44756 === (8))){
var inst_44744 = (state_44755[(2)]);
var state_44755__$1 = state_44755;
if(cljs.core.truth_(inst_44744)){
var statearr_44771_46074 = state_44755__$1;
(statearr_44771_46074[(1)] = (12));

} else {
var statearr_44772_46075 = state_44755__$1;
(statearr_44772_46075[(1)] = (13));

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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_44773 = [null,null,null,null,null,null,null,null,null];
(statearr_44773[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_44773[(1)] = (1));

return statearr_44773;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_44755){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44755);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44774){if((e44774 instanceof Object)){
var ex__44342__auto__ = e44774;
var statearr_44775_46076 = state_44755;
(statearr_44775_46076[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46077 = state_44755;
state_44755 = G__46077;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_44755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_44755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44776 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44776[(6)] = c__44403__auto___46061);

return statearr_44776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44797){
var state_val_44798 = (state_44797[(1)]);
if((state_val_44798 === (7))){
var inst_44793 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
var statearr_44799_46078 = state_44797__$1;
(statearr_44799_46078[(2)] = inst_44793);

(statearr_44799_46078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (1))){
var inst_44777 = init;
var state_44797__$1 = (function (){var statearr_44800 = state_44797;
(statearr_44800[(7)] = inst_44777);

return statearr_44800;
})();
var statearr_44801_46079 = state_44797__$1;
(statearr_44801_46079[(2)] = null);

(statearr_44801_46079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (4))){
var inst_44780 = (state_44797[(8)]);
var inst_44780__$1 = (state_44797[(2)]);
var inst_44781 = (inst_44780__$1 == null);
var state_44797__$1 = (function (){var statearr_44802 = state_44797;
(statearr_44802[(8)] = inst_44780__$1);

return statearr_44802;
})();
if(cljs.core.truth_(inst_44781)){
var statearr_44803_46080 = state_44797__$1;
(statearr_44803_46080[(1)] = (5));

} else {
var statearr_44804_46081 = state_44797__$1;
(statearr_44804_46081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (6))){
var inst_44780 = (state_44797[(8)]);
var inst_44777 = (state_44797[(7)]);
var inst_44784 = (state_44797[(9)]);
var inst_44784__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44777,inst_44780) : f.call(null,inst_44777,inst_44780));
var inst_44785 = cljs.core.reduced_QMARK_(inst_44784__$1);
var state_44797__$1 = (function (){var statearr_44805 = state_44797;
(statearr_44805[(9)] = inst_44784__$1);

return statearr_44805;
})();
if(inst_44785){
var statearr_44806_46082 = state_44797__$1;
(statearr_44806_46082[(1)] = (8));

} else {
var statearr_44807_46083 = state_44797__$1;
(statearr_44807_46083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (3))){
var inst_44795 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44797__$1,inst_44795);
} else {
if((state_val_44798 === (2))){
var state_44797__$1 = state_44797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44797__$1,(4),ch);
} else {
if((state_val_44798 === (9))){
var inst_44784 = (state_44797[(9)]);
var inst_44777 = inst_44784;
var state_44797__$1 = (function (){var statearr_44808 = state_44797;
(statearr_44808[(7)] = inst_44777);

return statearr_44808;
})();
var statearr_44809_46084 = state_44797__$1;
(statearr_44809_46084[(2)] = null);

(statearr_44809_46084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (5))){
var inst_44777 = (state_44797[(7)]);
var state_44797__$1 = state_44797;
var statearr_44810_46085 = state_44797__$1;
(statearr_44810_46085[(2)] = inst_44777);

(statearr_44810_46085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (10))){
var inst_44791 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
var statearr_44811_46086 = state_44797__$1;
(statearr_44811_46086[(2)] = inst_44791);

(statearr_44811_46086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (8))){
var inst_44784 = (state_44797[(9)]);
var inst_44787 = cljs.core.deref(inst_44784);
var state_44797__$1 = state_44797;
var statearr_44812_46087 = state_44797__$1;
(statearr_44812_46087[(2)] = inst_44787);

(statearr_44812_46087[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__44339__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44339__auto____0 = (function (){
var statearr_44813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44813[(0)] = cljs$core$async$reduce_$_state_machine__44339__auto__);

(statearr_44813[(1)] = (1));

return statearr_44813;
});
var cljs$core$async$reduce_$_state_machine__44339__auto____1 = (function (state_44797){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44797);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44814){if((e44814 instanceof Object)){
var ex__44342__auto__ = e44814;
var statearr_44815_46088 = state_44797;
(statearr_44815_46088[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46089 = state_44797;
state_44797 = G__46089;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44339__auto__ = function(state_44797){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44339__auto____1.call(this,state_44797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44339__auto____0;
cljs$core$async$reduce_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44339__auto____1;
return cljs$core$async$reduce_$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44816 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44816[(6)] = c__44403__auto__);

return statearr_44816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44822){
var state_val_44823 = (state_44822[(1)]);
if((state_val_44823 === (1))){
var inst_44817 = cljs.core.async.reduce(f__$1,init,ch);
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44822__$1,(2),inst_44817);
} else {
if((state_val_44823 === (2))){
var inst_44819 = (state_44822[(2)]);
var inst_44820 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44819) : f__$1.call(null,inst_44819));
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44822__$1,inst_44820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44339__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44339__auto____0 = (function (){
var statearr_44824 = [null,null,null,null,null,null,null];
(statearr_44824[(0)] = cljs$core$async$transduce_$_state_machine__44339__auto__);

(statearr_44824[(1)] = (1));

return statearr_44824;
});
var cljs$core$async$transduce_$_state_machine__44339__auto____1 = (function (state_44822){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44822);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44825){if((e44825 instanceof Object)){
var ex__44342__auto__ = e44825;
var statearr_44826_46090 = state_44822;
(statearr_44826_46090[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46091 = state_44822;
state_44822 = G__46091;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44339__auto__ = function(state_44822){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44339__auto____1.call(this,state_44822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44339__auto____0;
cljs$core$async$transduce_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44339__auto____1;
return cljs$core$async$transduce_$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44827 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44827[(6)] = c__44403__auto__);

return statearr_44827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
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
var G__44829 = arguments.length;
switch (G__44829) {
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
var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_44854){
var state_val_44855 = (state_44854[(1)]);
if((state_val_44855 === (7))){
var inst_44836 = (state_44854[(2)]);
var state_44854__$1 = state_44854;
var statearr_44856_46093 = state_44854__$1;
(statearr_44856_46093[(2)] = inst_44836);

(statearr_44856_46093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (1))){
var inst_44830 = cljs.core.seq(coll);
var inst_44831 = inst_44830;
var state_44854__$1 = (function (){var statearr_44857 = state_44854;
(statearr_44857[(7)] = inst_44831);

return statearr_44857;
})();
var statearr_44858_46094 = state_44854__$1;
(statearr_44858_46094[(2)] = null);

(statearr_44858_46094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (4))){
var inst_44831 = (state_44854[(7)]);
var inst_44834 = cljs.core.first(inst_44831);
var state_44854__$1 = state_44854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44854__$1,(7),ch,inst_44834);
} else {
if((state_val_44855 === (13))){
var inst_44848 = (state_44854[(2)]);
var state_44854__$1 = state_44854;
var statearr_44859_46095 = state_44854__$1;
(statearr_44859_46095[(2)] = inst_44848);

(statearr_44859_46095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (6))){
var inst_44839 = (state_44854[(2)]);
var state_44854__$1 = state_44854;
if(cljs.core.truth_(inst_44839)){
var statearr_44860_46096 = state_44854__$1;
(statearr_44860_46096[(1)] = (8));

} else {
var statearr_44861_46097 = state_44854__$1;
(statearr_44861_46097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (3))){
var inst_44852 = (state_44854[(2)]);
var state_44854__$1 = state_44854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44854__$1,inst_44852);
} else {
if((state_val_44855 === (12))){
var state_44854__$1 = state_44854;
var statearr_44862_46098 = state_44854__$1;
(statearr_44862_46098[(2)] = null);

(statearr_44862_46098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (2))){
var inst_44831 = (state_44854[(7)]);
var state_44854__$1 = state_44854;
if(cljs.core.truth_(inst_44831)){
var statearr_44863_46099 = state_44854__$1;
(statearr_44863_46099[(1)] = (4));

} else {
var statearr_44864_46100 = state_44854__$1;
(statearr_44864_46100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (11))){
var inst_44845 = cljs.core.async.close_BANG_(ch);
var state_44854__$1 = state_44854;
var statearr_44865_46101 = state_44854__$1;
(statearr_44865_46101[(2)] = inst_44845);

(statearr_44865_46101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (9))){
var state_44854__$1 = state_44854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44866_46102 = state_44854__$1;
(statearr_44866_46102[(1)] = (11));

} else {
var statearr_44867_46103 = state_44854__$1;
(statearr_44867_46103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (5))){
var inst_44831 = (state_44854[(7)]);
var state_44854__$1 = state_44854;
var statearr_44868_46104 = state_44854__$1;
(statearr_44868_46104[(2)] = inst_44831);

(statearr_44868_46104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (10))){
var inst_44850 = (state_44854[(2)]);
var state_44854__$1 = state_44854;
var statearr_44869_46105 = state_44854__$1;
(statearr_44869_46105[(2)] = inst_44850);

(statearr_44869_46105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (8))){
var inst_44831 = (state_44854[(7)]);
var inst_44841 = cljs.core.next(inst_44831);
var inst_44831__$1 = inst_44841;
var state_44854__$1 = (function (){var statearr_44870 = state_44854;
(statearr_44870[(7)] = inst_44831__$1);

return statearr_44870;
})();
var statearr_44871_46106 = state_44854__$1;
(statearr_44871_46106[(2)] = null);

(statearr_44871_46106[(1)] = (2));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_44872 = [null,null,null,null,null,null,null,null];
(statearr_44872[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_44872[(1)] = (1));

return statearr_44872;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_44854){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_44854);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e44873){if((e44873 instanceof Object)){
var ex__44342__auto__ = e44873;
var statearr_44874_46107 = state_44854;
(statearr_44874_46107[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46108 = state_44854;
state_44854 = G__46108;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_44854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_44854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_44875 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_44875[(6)] = c__44403__auto__);

return statearr_44875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44876 = (function (ch,cs,meta44877){
this.ch = ch;
this.cs = cs;
this.meta44877 = meta44877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44878,meta44877__$1){
var self__ = this;
var _44878__$1 = this;
return (new cljs.core.async.t_cljs$core$async44876(self__.ch,self__.cs,meta44877__$1));
}));

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44878){
var self__ = this;
var _44878__$1 = this;
return self__.meta44877;
}));

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44877","meta44877",217413223,null)], null);
}));

(cljs.core.async.t_cljs$core$async44876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44876");

(cljs.core.async.t_cljs$core$async44876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44876.
 */
cljs.core.async.__GT_t_cljs$core$async44876 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44876(ch__$1,cs__$1,meta44877){
return (new cljs.core.async.t_cljs$core$async44876(ch__$1,cs__$1,meta44877));
});

}

return (new cljs.core.async.t_cljs$core$async44876(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44403__auto___46126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45013){
var state_val_45014 = (state_45013[(1)]);
if((state_val_45014 === (7))){
var inst_45009 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45015_46127 = state_45013__$1;
(statearr_45015_46127[(2)] = inst_45009);

(statearr_45015_46127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (20))){
var inst_44912 = (state_45013[(7)]);
var inst_44924 = cljs.core.first(inst_44912);
var inst_44925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44924,(0),null);
var inst_44926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44924,(1),null);
var state_45013__$1 = (function (){var statearr_45016 = state_45013;
(statearr_45016[(8)] = inst_44925);

return statearr_45016;
})();
if(cljs.core.truth_(inst_44926)){
var statearr_45017_46128 = state_45013__$1;
(statearr_45017_46128[(1)] = (22));

} else {
var statearr_45018_46129 = state_45013__$1;
(statearr_45018_46129[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (27))){
var inst_44954 = (state_45013[(9)]);
var inst_44956 = (state_45013[(10)]);
var inst_44881 = (state_45013[(11)]);
var inst_44961 = (state_45013[(12)]);
var inst_44961__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44954,inst_44956);
var inst_44962 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44961__$1,inst_44881,done);
var state_45013__$1 = (function (){var statearr_45019 = state_45013;
(statearr_45019[(12)] = inst_44961__$1);

return statearr_45019;
})();
if(cljs.core.truth_(inst_44962)){
var statearr_45020_46130 = state_45013__$1;
(statearr_45020_46130[(1)] = (30));

} else {
var statearr_45021_46131 = state_45013__$1;
(statearr_45021_46131[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (1))){
var state_45013__$1 = state_45013;
var statearr_45022_46132 = state_45013__$1;
(statearr_45022_46132[(2)] = null);

(statearr_45022_46132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (24))){
var inst_44912 = (state_45013[(7)]);
var inst_44931 = (state_45013[(2)]);
var inst_44932 = cljs.core.next(inst_44912);
var inst_44890 = inst_44932;
var inst_44891 = null;
var inst_44892 = (0);
var inst_44893 = (0);
var state_45013__$1 = (function (){var statearr_45023 = state_45013;
(statearr_45023[(13)] = inst_44892);

(statearr_45023[(14)] = inst_44891);

(statearr_45023[(15)] = inst_44931);

(statearr_45023[(16)] = inst_44890);

(statearr_45023[(17)] = inst_44893);

return statearr_45023;
})();
var statearr_45024_46133 = state_45013__$1;
(statearr_45024_46133[(2)] = null);

(statearr_45024_46133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (39))){
var state_45013__$1 = state_45013;
var statearr_45028_46134 = state_45013__$1;
(statearr_45028_46134[(2)] = null);

(statearr_45028_46134[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (4))){
var inst_44881 = (state_45013[(11)]);
var inst_44881__$1 = (state_45013[(2)]);
var inst_44882 = (inst_44881__$1 == null);
var state_45013__$1 = (function (){var statearr_45029 = state_45013;
(statearr_45029[(11)] = inst_44881__$1);

return statearr_45029;
})();
if(cljs.core.truth_(inst_44882)){
var statearr_45030_46135 = state_45013__$1;
(statearr_45030_46135[(1)] = (5));

} else {
var statearr_45031_46136 = state_45013__$1;
(statearr_45031_46136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (15))){
var inst_44892 = (state_45013[(13)]);
var inst_44891 = (state_45013[(14)]);
var inst_44890 = (state_45013[(16)]);
var inst_44893 = (state_45013[(17)]);
var inst_44908 = (state_45013[(2)]);
var inst_44909 = (inst_44893 + (1));
var tmp45025 = inst_44892;
var tmp45026 = inst_44891;
var tmp45027 = inst_44890;
var inst_44890__$1 = tmp45027;
var inst_44891__$1 = tmp45026;
var inst_44892__$1 = tmp45025;
var inst_44893__$1 = inst_44909;
var state_45013__$1 = (function (){var statearr_45032 = state_45013;
(statearr_45032[(13)] = inst_44892__$1);

(statearr_45032[(14)] = inst_44891__$1);

(statearr_45032[(18)] = inst_44908);

(statearr_45032[(16)] = inst_44890__$1);

(statearr_45032[(17)] = inst_44893__$1);

return statearr_45032;
})();
var statearr_45033_46137 = state_45013__$1;
(statearr_45033_46137[(2)] = null);

(statearr_45033_46137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (21))){
var inst_44935 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45037_46138 = state_45013__$1;
(statearr_45037_46138[(2)] = inst_44935);

(statearr_45037_46138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (31))){
var inst_44961 = (state_45013[(12)]);
var inst_44965 = done(null);
var inst_44966 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44961);
var state_45013__$1 = (function (){var statearr_45038 = state_45013;
(statearr_45038[(19)] = inst_44965);

return statearr_45038;
})();
var statearr_45039_46139 = state_45013__$1;
(statearr_45039_46139[(2)] = inst_44966);

(statearr_45039_46139[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (32))){
var inst_44954 = (state_45013[(9)]);
var inst_44956 = (state_45013[(10)]);
var inst_44953 = (state_45013[(20)]);
var inst_44955 = (state_45013[(21)]);
var inst_44968 = (state_45013[(2)]);
var inst_44969 = (inst_44956 + (1));
var tmp45034 = inst_44954;
var tmp45035 = inst_44953;
var tmp45036 = inst_44955;
var inst_44953__$1 = tmp45035;
var inst_44954__$1 = tmp45034;
var inst_44955__$1 = tmp45036;
var inst_44956__$1 = inst_44969;
var state_45013__$1 = (function (){var statearr_45040 = state_45013;
(statearr_45040[(22)] = inst_44968);

(statearr_45040[(9)] = inst_44954__$1);

(statearr_45040[(10)] = inst_44956__$1);

(statearr_45040[(20)] = inst_44953__$1);

(statearr_45040[(21)] = inst_44955__$1);

return statearr_45040;
})();
var statearr_45041_46140 = state_45013__$1;
(statearr_45041_46140[(2)] = null);

(statearr_45041_46140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (40))){
var inst_44981 = (state_45013[(23)]);
var inst_44985 = done(null);
var inst_44986 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44981);
var state_45013__$1 = (function (){var statearr_45042 = state_45013;
(statearr_45042[(24)] = inst_44985);

return statearr_45042;
})();
var statearr_45043_46141 = state_45013__$1;
(statearr_45043_46141[(2)] = inst_44986);

(statearr_45043_46141[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (33))){
var inst_44972 = (state_45013[(25)]);
var inst_44974 = cljs.core.chunked_seq_QMARK_(inst_44972);
var state_45013__$1 = state_45013;
if(inst_44974){
var statearr_45044_46142 = state_45013__$1;
(statearr_45044_46142[(1)] = (36));

} else {
var statearr_45045_46143 = state_45013__$1;
(statearr_45045_46143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (13))){
var inst_44902 = (state_45013[(26)]);
var inst_44905 = cljs.core.async.close_BANG_(inst_44902);
var state_45013__$1 = state_45013;
var statearr_45046_46144 = state_45013__$1;
(statearr_45046_46144[(2)] = inst_44905);

(statearr_45046_46144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (22))){
var inst_44925 = (state_45013[(8)]);
var inst_44928 = cljs.core.async.close_BANG_(inst_44925);
var state_45013__$1 = state_45013;
var statearr_45047_46145 = state_45013__$1;
(statearr_45047_46145[(2)] = inst_44928);

(statearr_45047_46145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (36))){
var inst_44972 = (state_45013[(25)]);
var inst_44976 = cljs.core.chunk_first(inst_44972);
var inst_44977 = cljs.core.chunk_rest(inst_44972);
var inst_44978 = cljs.core.count(inst_44976);
var inst_44953 = inst_44977;
var inst_44954 = inst_44976;
var inst_44955 = inst_44978;
var inst_44956 = (0);
var state_45013__$1 = (function (){var statearr_45048 = state_45013;
(statearr_45048[(9)] = inst_44954);

(statearr_45048[(10)] = inst_44956);

(statearr_45048[(20)] = inst_44953);

(statearr_45048[(21)] = inst_44955);

return statearr_45048;
})();
var statearr_45049_46146 = state_45013__$1;
(statearr_45049_46146[(2)] = null);

(statearr_45049_46146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (41))){
var inst_44972 = (state_45013[(25)]);
var inst_44988 = (state_45013[(2)]);
var inst_44989 = cljs.core.next(inst_44972);
var inst_44953 = inst_44989;
var inst_44954 = null;
var inst_44955 = (0);
var inst_44956 = (0);
var state_45013__$1 = (function (){var statearr_45050 = state_45013;
(statearr_45050[(9)] = inst_44954);

(statearr_45050[(10)] = inst_44956);

(statearr_45050[(27)] = inst_44988);

(statearr_45050[(20)] = inst_44953);

(statearr_45050[(21)] = inst_44955);

return statearr_45050;
})();
var statearr_45051_46151 = state_45013__$1;
(statearr_45051_46151[(2)] = null);

(statearr_45051_46151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (43))){
var state_45013__$1 = state_45013;
var statearr_45052_46152 = state_45013__$1;
(statearr_45052_46152[(2)] = null);

(statearr_45052_46152[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (29))){
var inst_44997 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45053_46153 = state_45013__$1;
(statearr_45053_46153[(2)] = inst_44997);

(statearr_45053_46153[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (44))){
var inst_45006 = (state_45013[(2)]);
var state_45013__$1 = (function (){var statearr_45054 = state_45013;
(statearr_45054[(28)] = inst_45006);

return statearr_45054;
})();
var statearr_45055_46154 = state_45013__$1;
(statearr_45055_46154[(2)] = null);

(statearr_45055_46154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (6))){
var inst_44945 = (state_45013[(29)]);
var inst_44944 = cljs.core.deref(cs);
var inst_44945__$1 = cljs.core.keys(inst_44944);
var inst_44946 = cljs.core.count(inst_44945__$1);
var inst_44947 = cljs.core.reset_BANG_(dctr,inst_44946);
var inst_44952 = cljs.core.seq(inst_44945__$1);
var inst_44953 = inst_44952;
var inst_44954 = null;
var inst_44955 = (0);
var inst_44956 = (0);
var state_45013__$1 = (function (){var statearr_45056 = state_45013;
(statearr_45056[(9)] = inst_44954);

(statearr_45056[(10)] = inst_44956);

(statearr_45056[(20)] = inst_44953);

(statearr_45056[(29)] = inst_44945__$1);

(statearr_45056[(30)] = inst_44947);

(statearr_45056[(21)] = inst_44955);

return statearr_45056;
})();
var statearr_45057_46155 = state_45013__$1;
(statearr_45057_46155[(2)] = null);

(statearr_45057_46155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (28))){
var inst_44972 = (state_45013[(25)]);
var inst_44953 = (state_45013[(20)]);
var inst_44972__$1 = cljs.core.seq(inst_44953);
var state_45013__$1 = (function (){var statearr_45058 = state_45013;
(statearr_45058[(25)] = inst_44972__$1);

return statearr_45058;
})();
if(inst_44972__$1){
var statearr_45059_46158 = state_45013__$1;
(statearr_45059_46158[(1)] = (33));

} else {
var statearr_45060_46159 = state_45013__$1;
(statearr_45060_46159[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (25))){
var inst_44956 = (state_45013[(10)]);
var inst_44955 = (state_45013[(21)]);
var inst_44958 = (inst_44956 < inst_44955);
var inst_44959 = inst_44958;
var state_45013__$1 = state_45013;
if(cljs.core.truth_(inst_44959)){
var statearr_45061_46163 = state_45013__$1;
(statearr_45061_46163[(1)] = (27));

} else {
var statearr_45062_46164 = state_45013__$1;
(statearr_45062_46164[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (34))){
var state_45013__$1 = state_45013;
var statearr_45063_46165 = state_45013__$1;
(statearr_45063_46165[(2)] = null);

(statearr_45063_46165[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (17))){
var state_45013__$1 = state_45013;
var statearr_45064_46170 = state_45013__$1;
(statearr_45064_46170[(2)] = null);

(statearr_45064_46170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (3))){
var inst_45011 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45013__$1,inst_45011);
} else {
if((state_val_45014 === (12))){
var inst_44940 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45065_46171 = state_45013__$1;
(statearr_45065_46171[(2)] = inst_44940);

(statearr_45065_46171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (2))){
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45013__$1,(4),ch);
} else {
if((state_val_45014 === (23))){
var state_45013__$1 = state_45013;
var statearr_45066_46172 = state_45013__$1;
(statearr_45066_46172[(2)] = null);

(statearr_45066_46172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (35))){
var inst_44995 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45067_46173 = state_45013__$1;
(statearr_45067_46173[(2)] = inst_44995);

(statearr_45067_46173[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (19))){
var inst_44912 = (state_45013[(7)]);
var inst_44916 = cljs.core.chunk_first(inst_44912);
var inst_44917 = cljs.core.chunk_rest(inst_44912);
var inst_44918 = cljs.core.count(inst_44916);
var inst_44890 = inst_44917;
var inst_44891 = inst_44916;
var inst_44892 = inst_44918;
var inst_44893 = (0);
var state_45013__$1 = (function (){var statearr_45068 = state_45013;
(statearr_45068[(13)] = inst_44892);

(statearr_45068[(14)] = inst_44891);

(statearr_45068[(16)] = inst_44890);

(statearr_45068[(17)] = inst_44893);

return statearr_45068;
})();
var statearr_45069_46174 = state_45013__$1;
(statearr_45069_46174[(2)] = null);

(statearr_45069_46174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (11))){
var inst_44890 = (state_45013[(16)]);
var inst_44912 = (state_45013[(7)]);
var inst_44912__$1 = cljs.core.seq(inst_44890);
var state_45013__$1 = (function (){var statearr_45070 = state_45013;
(statearr_45070[(7)] = inst_44912__$1);

return statearr_45070;
})();
if(inst_44912__$1){
var statearr_45071_46175 = state_45013__$1;
(statearr_45071_46175[(1)] = (16));

} else {
var statearr_45072_46176 = state_45013__$1;
(statearr_45072_46176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (9))){
var inst_44942 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45073_46177 = state_45013__$1;
(statearr_45073_46177[(2)] = inst_44942);

(statearr_45073_46177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (5))){
var inst_44888 = cljs.core.deref(cs);
var inst_44889 = cljs.core.seq(inst_44888);
var inst_44890 = inst_44889;
var inst_44891 = null;
var inst_44892 = (0);
var inst_44893 = (0);
var state_45013__$1 = (function (){var statearr_45074 = state_45013;
(statearr_45074[(13)] = inst_44892);

(statearr_45074[(14)] = inst_44891);

(statearr_45074[(16)] = inst_44890);

(statearr_45074[(17)] = inst_44893);

return statearr_45074;
})();
var statearr_45075_46178 = state_45013__$1;
(statearr_45075_46178[(2)] = null);

(statearr_45075_46178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (14))){
var state_45013__$1 = state_45013;
var statearr_45076_46179 = state_45013__$1;
(statearr_45076_46179[(2)] = null);

(statearr_45076_46179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (45))){
var inst_45003 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45077_46180 = state_45013__$1;
(statearr_45077_46180[(2)] = inst_45003);

(statearr_45077_46180[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (26))){
var inst_44945 = (state_45013[(29)]);
var inst_44999 = (state_45013[(2)]);
var inst_45000 = cljs.core.seq(inst_44945);
var state_45013__$1 = (function (){var statearr_45078 = state_45013;
(statearr_45078[(31)] = inst_44999);

return statearr_45078;
})();
if(inst_45000){
var statearr_45079_46181 = state_45013__$1;
(statearr_45079_46181[(1)] = (42));

} else {
var statearr_45080_46183 = state_45013__$1;
(statearr_45080_46183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (16))){
var inst_44912 = (state_45013[(7)]);
var inst_44914 = cljs.core.chunked_seq_QMARK_(inst_44912);
var state_45013__$1 = state_45013;
if(inst_44914){
var statearr_45081_46184 = state_45013__$1;
(statearr_45081_46184[(1)] = (19));

} else {
var statearr_45082_46185 = state_45013__$1;
(statearr_45082_46185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (38))){
var inst_44992 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45083_46188 = state_45013__$1;
(statearr_45083_46188[(2)] = inst_44992);

(statearr_45083_46188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (30))){
var state_45013__$1 = state_45013;
var statearr_45084_46193 = state_45013__$1;
(statearr_45084_46193[(2)] = null);

(statearr_45084_46193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (10))){
var inst_44891 = (state_45013[(14)]);
var inst_44893 = (state_45013[(17)]);
var inst_44901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44891,inst_44893);
var inst_44902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44901,(0),null);
var inst_44903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44901,(1),null);
var state_45013__$1 = (function (){var statearr_45085 = state_45013;
(statearr_45085[(26)] = inst_44902);

return statearr_45085;
})();
if(cljs.core.truth_(inst_44903)){
var statearr_45086_46200 = state_45013__$1;
(statearr_45086_46200[(1)] = (13));

} else {
var statearr_45087_46201 = state_45013__$1;
(statearr_45087_46201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (18))){
var inst_44938 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45088_46206 = state_45013__$1;
(statearr_45088_46206[(2)] = inst_44938);

(statearr_45088_46206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (42))){
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45013__$1,(45),dchan);
} else {
if((state_val_45014 === (37))){
var inst_44972 = (state_45013[(25)]);
var inst_44881 = (state_45013[(11)]);
var inst_44981 = (state_45013[(23)]);
var inst_44981__$1 = cljs.core.first(inst_44972);
var inst_44982 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44981__$1,inst_44881,done);
var state_45013__$1 = (function (){var statearr_45089 = state_45013;
(statearr_45089[(23)] = inst_44981__$1);

return statearr_45089;
})();
if(cljs.core.truth_(inst_44982)){
var statearr_45090_46207 = state_45013__$1;
(statearr_45090_46207[(1)] = (39));

} else {
var statearr_45091_46208 = state_45013__$1;
(statearr_45091_46208[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (8))){
var inst_44892 = (state_45013[(13)]);
var inst_44893 = (state_45013[(17)]);
var inst_44895 = (inst_44893 < inst_44892);
var inst_44896 = inst_44895;
var state_45013__$1 = state_45013;
if(cljs.core.truth_(inst_44896)){
var statearr_45092_46209 = state_45013__$1;
(statearr_45092_46209[(1)] = (10));

} else {
var statearr_45093_46210 = state_45013__$1;
(statearr_45093_46210[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__44339__auto__ = null;
var cljs$core$async$mult_$_state_machine__44339__auto____0 = (function (){
var statearr_45094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45094[(0)] = cljs$core$async$mult_$_state_machine__44339__auto__);

(statearr_45094[(1)] = (1));

return statearr_45094;
});
var cljs$core$async$mult_$_state_machine__44339__auto____1 = (function (state_45013){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45013);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45095){if((e45095 instanceof Object)){
var ex__44342__auto__ = e45095;
var statearr_45096_46211 = state_45013;
(statearr_45096_46211[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46212 = state_45013;
state_45013 = G__46212;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44339__auto__ = function(state_45013){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44339__auto____1.call(this,state_45013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44339__auto____0;
cljs$core$async$mult_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44339__auto____1;
return cljs$core$async$mult_$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45097 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45097[(6)] = c__44403__auto___46126);

return statearr_45097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var G__45099 = arguments.length;
switch (G__45099) {
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
var len__4789__auto___46225 = arguments.length;
var i__4790__auto___46226 = (0);
while(true){
if((i__4790__auto___46226 < len__4789__auto___46225)){
args__4795__auto__.push((arguments[i__4790__auto___46226]));

var G__46228 = (i__4790__auto___46226 + (1));
i__4790__auto___46226 = G__46228;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45104){
var map__45105 = p__45104;
var map__45105__$1 = (((((!((map__45105 == null))))?(((((map__45105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45105):map__45105);
var opts = map__45105__$1;
var statearr_45107_46241 = state;
(statearr_45107_46241[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45108_46243 = state;
(statearr_45108_46243[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45109_46245 = state;
(statearr_45109_46245[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45100){
var G__45101 = cljs.core.first(seq45100);
var seq45100__$1 = cljs.core.next(seq45100);
var G__45102 = cljs.core.first(seq45100__$1);
var seq45100__$2 = cljs.core.next(seq45100__$1);
var G__45103 = cljs.core.first(seq45100__$2);
var seq45100__$3 = cljs.core.next(seq45100__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45101,G__45102,G__45103,seq45100__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45110 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45111){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45111 = meta45111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45112,meta45111__$1){
var self__ = this;
var _45112__$1 = this;
return (new cljs.core.async.t_cljs$core$async45110(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45111__$1));
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45112){
var self__ = this;
var _45112__$1 = this;
return self__.meta45111;
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45110.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45111","meta45111",578361938,null)], null);
}));

(cljs.core.async.t_cljs$core$async45110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45110");

(cljs.core.async.t_cljs$core$async45110.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45110.
 */
cljs.core.async.__GT_t_cljs$core$async45110 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45110(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45111){
return (new cljs.core.async.t_cljs$core$async45110(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45111));
});

}

return (new cljs.core.async.t_cljs$core$async45110(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44403__auto___46250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45214){
var state_val_45215 = (state_45214[(1)]);
if((state_val_45215 === (7))){
var inst_45129 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
var statearr_45216_46251 = state_45214__$1;
(statearr_45216_46251[(2)] = inst_45129);

(statearr_45216_46251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (20))){
var inst_45141 = (state_45214[(7)]);
var state_45214__$1 = state_45214;
var statearr_45217_46252 = state_45214__$1;
(statearr_45217_46252[(2)] = inst_45141);

(statearr_45217_46252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (27))){
var state_45214__$1 = state_45214;
var statearr_45218_46253 = state_45214__$1;
(statearr_45218_46253[(2)] = null);

(statearr_45218_46253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (1))){
var inst_45116 = (state_45214[(8)]);
var inst_45116__$1 = calc_state();
var inst_45118 = (inst_45116__$1 == null);
var inst_45119 = cljs.core.not(inst_45118);
var state_45214__$1 = (function (){var statearr_45219 = state_45214;
(statearr_45219[(8)] = inst_45116__$1);

return statearr_45219;
})();
if(inst_45119){
var statearr_45220_46254 = state_45214__$1;
(statearr_45220_46254[(1)] = (2));

} else {
var statearr_45221_46255 = state_45214__$1;
(statearr_45221_46255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (24))){
var inst_45165 = (state_45214[(9)]);
var inst_45188 = (state_45214[(10)]);
var inst_45174 = (state_45214[(11)]);
var inst_45188__$1 = (inst_45165.cljs$core$IFn$_invoke$arity$1 ? inst_45165.cljs$core$IFn$_invoke$arity$1(inst_45174) : inst_45165.call(null,inst_45174));
var state_45214__$1 = (function (){var statearr_45222 = state_45214;
(statearr_45222[(10)] = inst_45188__$1);

return statearr_45222;
})();
if(cljs.core.truth_(inst_45188__$1)){
var statearr_45223_46256 = state_45214__$1;
(statearr_45223_46256[(1)] = (29));

} else {
var statearr_45224_46257 = state_45214__$1;
(statearr_45224_46257[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (4))){
var inst_45132 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45132)){
var statearr_45225_46258 = state_45214__$1;
(statearr_45225_46258[(1)] = (8));

} else {
var statearr_45226_46259 = state_45214__$1;
(statearr_45226_46259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (15))){
var inst_45159 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45159)){
var statearr_45227_46260 = state_45214__$1;
(statearr_45227_46260[(1)] = (19));

} else {
var statearr_45228_46261 = state_45214__$1;
(statearr_45228_46261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (21))){
var inst_45164 = (state_45214[(12)]);
var inst_45164__$1 = (state_45214[(2)]);
var inst_45165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45164__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45164__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45164__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45214__$1 = (function (){var statearr_45229 = state_45214;
(statearr_45229[(12)] = inst_45164__$1);

(statearr_45229[(9)] = inst_45165);

(statearr_45229[(13)] = inst_45166);

return statearr_45229;
})();
return cljs.core.async.ioc_alts_BANG_(state_45214__$1,(22),inst_45167);
} else {
if((state_val_45215 === (31))){
var inst_45196 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45196)){
var statearr_45230_46262 = state_45214__$1;
(statearr_45230_46262[(1)] = (32));

} else {
var statearr_45231_46263 = state_45214__$1;
(statearr_45231_46263[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (32))){
var inst_45173 = (state_45214[(14)]);
var state_45214__$1 = state_45214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45214__$1,(35),out,inst_45173);
} else {
if((state_val_45215 === (33))){
var inst_45164 = (state_45214[(12)]);
var inst_45141 = inst_45164;
var state_45214__$1 = (function (){var statearr_45232 = state_45214;
(statearr_45232[(7)] = inst_45141);

return statearr_45232;
})();
var statearr_45233_46264 = state_45214__$1;
(statearr_45233_46264[(2)] = null);

(statearr_45233_46264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (13))){
var inst_45141 = (state_45214[(7)]);
var inst_45148 = inst_45141.cljs$lang$protocol_mask$partition0$;
var inst_45149 = (inst_45148 & (64));
var inst_45150 = inst_45141.cljs$core$ISeq$;
var inst_45151 = (cljs.core.PROTOCOL_SENTINEL === inst_45150);
var inst_45152 = ((inst_45149) || (inst_45151));
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45152)){
var statearr_45234_46265 = state_45214__$1;
(statearr_45234_46265[(1)] = (16));

} else {
var statearr_45235_46266 = state_45214__$1;
(statearr_45235_46266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (22))){
var inst_45173 = (state_45214[(14)]);
var inst_45174 = (state_45214[(11)]);
var inst_45172 = (state_45214[(2)]);
var inst_45173__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45172,(0),null);
var inst_45174__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45172,(1),null);
var inst_45175 = (inst_45173__$1 == null);
var inst_45176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45174__$1,change);
var inst_45177 = ((inst_45175) || (inst_45176));
var state_45214__$1 = (function (){var statearr_45236 = state_45214;
(statearr_45236[(14)] = inst_45173__$1);

(statearr_45236[(11)] = inst_45174__$1);

return statearr_45236;
})();
if(cljs.core.truth_(inst_45177)){
var statearr_45237_46267 = state_45214__$1;
(statearr_45237_46267[(1)] = (23));

} else {
var statearr_45238_46268 = state_45214__$1;
(statearr_45238_46268[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (36))){
var inst_45164 = (state_45214[(12)]);
var inst_45141 = inst_45164;
var state_45214__$1 = (function (){var statearr_45239 = state_45214;
(statearr_45239[(7)] = inst_45141);

return statearr_45239;
})();
var statearr_45240_46269 = state_45214__$1;
(statearr_45240_46269[(2)] = null);

(statearr_45240_46269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (29))){
var inst_45188 = (state_45214[(10)]);
var state_45214__$1 = state_45214;
var statearr_45241_46270 = state_45214__$1;
(statearr_45241_46270[(2)] = inst_45188);

(statearr_45241_46270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (6))){
var state_45214__$1 = state_45214;
var statearr_45242_46271 = state_45214__$1;
(statearr_45242_46271[(2)] = false);

(statearr_45242_46271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (28))){
var inst_45184 = (state_45214[(2)]);
var inst_45185 = calc_state();
var inst_45141 = inst_45185;
var state_45214__$1 = (function (){var statearr_45243 = state_45214;
(statearr_45243[(15)] = inst_45184);

(statearr_45243[(7)] = inst_45141);

return statearr_45243;
})();
var statearr_45244_46272 = state_45214__$1;
(statearr_45244_46272[(2)] = null);

(statearr_45244_46272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (25))){
var inst_45210 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
var statearr_45245_46273 = state_45214__$1;
(statearr_45245_46273[(2)] = inst_45210);

(statearr_45245_46273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (34))){
var inst_45208 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
var statearr_45246_46274 = state_45214__$1;
(statearr_45246_46274[(2)] = inst_45208);

(statearr_45246_46274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (17))){
var state_45214__$1 = state_45214;
var statearr_45247_46275 = state_45214__$1;
(statearr_45247_46275[(2)] = false);

(statearr_45247_46275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (3))){
var state_45214__$1 = state_45214;
var statearr_45248_46276 = state_45214__$1;
(statearr_45248_46276[(2)] = false);

(statearr_45248_46276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (12))){
var inst_45212 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45214__$1,inst_45212);
} else {
if((state_val_45215 === (2))){
var inst_45116 = (state_45214[(8)]);
var inst_45121 = inst_45116.cljs$lang$protocol_mask$partition0$;
var inst_45122 = (inst_45121 & (64));
var inst_45123 = inst_45116.cljs$core$ISeq$;
var inst_45124 = (cljs.core.PROTOCOL_SENTINEL === inst_45123);
var inst_45125 = ((inst_45122) || (inst_45124));
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45125)){
var statearr_45249_46277 = state_45214__$1;
(statearr_45249_46277[(1)] = (5));

} else {
var statearr_45250_46278 = state_45214__$1;
(statearr_45250_46278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (23))){
var inst_45173 = (state_45214[(14)]);
var inst_45179 = (inst_45173 == null);
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45179)){
var statearr_45251_46279 = state_45214__$1;
(statearr_45251_46279[(1)] = (26));

} else {
var statearr_45252_46280 = state_45214__$1;
(statearr_45252_46280[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (35))){
var inst_45199 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
if(cljs.core.truth_(inst_45199)){
var statearr_45253_46281 = state_45214__$1;
(statearr_45253_46281[(1)] = (36));

} else {
var statearr_45254_46282 = state_45214__$1;
(statearr_45254_46282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (19))){
var inst_45141 = (state_45214[(7)]);
var inst_45161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45141);
var state_45214__$1 = state_45214;
var statearr_45255_46283 = state_45214__$1;
(statearr_45255_46283[(2)] = inst_45161);

(statearr_45255_46283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (11))){
var inst_45141 = (state_45214[(7)]);
var inst_45145 = (inst_45141 == null);
var inst_45146 = cljs.core.not(inst_45145);
var state_45214__$1 = state_45214;
if(inst_45146){
var statearr_45256_46284 = state_45214__$1;
(statearr_45256_46284[(1)] = (13));

} else {
var statearr_45257_46285 = state_45214__$1;
(statearr_45257_46285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (9))){
var inst_45116 = (state_45214[(8)]);
var state_45214__$1 = state_45214;
var statearr_45258_46286 = state_45214__$1;
(statearr_45258_46286[(2)] = inst_45116);

(statearr_45258_46286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (5))){
var state_45214__$1 = state_45214;
var statearr_45259_46289 = state_45214__$1;
(statearr_45259_46289[(2)] = true);

(statearr_45259_46289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (14))){
var state_45214__$1 = state_45214;
var statearr_45260_46290 = state_45214__$1;
(statearr_45260_46290[(2)] = false);

(statearr_45260_46290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (26))){
var inst_45174 = (state_45214[(11)]);
var inst_45181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45174);
var state_45214__$1 = state_45214;
var statearr_45261_46291 = state_45214__$1;
(statearr_45261_46291[(2)] = inst_45181);

(statearr_45261_46291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (16))){
var state_45214__$1 = state_45214;
var statearr_45262_46292 = state_45214__$1;
(statearr_45262_46292[(2)] = true);

(statearr_45262_46292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (38))){
var inst_45204 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
var statearr_45263_46293 = state_45214__$1;
(statearr_45263_46293[(2)] = inst_45204);

(statearr_45263_46293[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (30))){
var inst_45165 = (state_45214[(9)]);
var inst_45166 = (state_45214[(13)]);
var inst_45174 = (state_45214[(11)]);
var inst_45191 = cljs.core.empty_QMARK_(inst_45165);
var inst_45192 = (inst_45166.cljs$core$IFn$_invoke$arity$1 ? inst_45166.cljs$core$IFn$_invoke$arity$1(inst_45174) : inst_45166.call(null,inst_45174));
var inst_45193 = cljs.core.not(inst_45192);
var inst_45194 = ((inst_45191) && (inst_45193));
var state_45214__$1 = state_45214;
var statearr_45264_46296 = state_45214__$1;
(statearr_45264_46296[(2)] = inst_45194);

(statearr_45264_46296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (10))){
var inst_45116 = (state_45214[(8)]);
var inst_45137 = (state_45214[(2)]);
var inst_45138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45137,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45137,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45137,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45141 = inst_45116;
var state_45214__$1 = (function (){var statearr_45265 = state_45214;
(statearr_45265[(16)] = inst_45139);

(statearr_45265[(17)] = inst_45140);

(statearr_45265[(7)] = inst_45141);

(statearr_45265[(18)] = inst_45138);

return statearr_45265;
})();
var statearr_45266_46297 = state_45214__$1;
(statearr_45266_46297[(2)] = null);

(statearr_45266_46297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (18))){
var inst_45156 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
var statearr_45267_46298 = state_45214__$1;
(statearr_45267_46298[(2)] = inst_45156);

(statearr_45267_46298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (37))){
var state_45214__$1 = state_45214;
var statearr_45268_46299 = state_45214__$1;
(statearr_45268_46299[(2)] = null);

(statearr_45268_46299[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (8))){
var inst_45116 = (state_45214[(8)]);
var inst_45134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45116);
var state_45214__$1 = state_45214;
var statearr_45269_46302 = state_45214__$1;
(statearr_45269_46302[(2)] = inst_45134);

(statearr_45269_46302[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__44339__auto__ = null;
var cljs$core$async$mix_$_state_machine__44339__auto____0 = (function (){
var statearr_45270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45270[(0)] = cljs$core$async$mix_$_state_machine__44339__auto__);

(statearr_45270[(1)] = (1));

return statearr_45270;
});
var cljs$core$async$mix_$_state_machine__44339__auto____1 = (function (state_45214){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45214);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45271){if((e45271 instanceof Object)){
var ex__44342__auto__ = e45271;
var statearr_45272_46303 = state_45214;
(statearr_45272_46303[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46304 = state_45214;
state_45214 = G__46304;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44339__auto__ = function(state_45214){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44339__auto____1.call(this,state_45214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44339__auto____0;
cljs$core$async$mix_$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44339__auto____1;
return cljs$core$async$mix_$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45273 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45273[(6)] = c__44403__auto___46250);

return statearr_45273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var G__45275 = arguments.length;
switch (G__45275) {
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
var G__45278 = arguments.length;
switch (G__45278) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45276_SHARP_){
if(cljs.core.truth_((p1__45276_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45276_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45276_SHARP_.call(null,topic)))){
return p1__45276_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45276_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45279 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45280){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45280 = meta45280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45281,meta45280__$1){
var self__ = this;
var _45281__$1 = this;
return (new cljs.core.async.t_cljs$core$async45279(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45280__$1));
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45281){
var self__ = this;
var _45281__$1 = this;
return self__.meta45280;
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45280","meta45280",-1832027069,null)], null);
}));

(cljs.core.async.t_cljs$core$async45279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45279");

(cljs.core.async.t_cljs$core$async45279.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45279.
 */
cljs.core.async.__GT_t_cljs$core$async45279 = (function cljs$core$async$__GT_t_cljs$core$async45279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45280){
return (new cljs.core.async.t_cljs$core$async45279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45280));
});

}

return (new cljs.core.async.t_cljs$core$async45279(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44403__auto___46316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45353){
var state_val_45354 = (state_45353[(1)]);
if((state_val_45354 === (7))){
var inst_45349 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45355_46317 = state_45353__$1;
(statearr_45355_46317[(2)] = inst_45349);

(statearr_45355_46317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (20))){
var state_45353__$1 = state_45353;
var statearr_45356_46318 = state_45353__$1;
(statearr_45356_46318[(2)] = null);

(statearr_45356_46318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (1))){
var state_45353__$1 = state_45353;
var statearr_45357_46320 = state_45353__$1;
(statearr_45357_46320[(2)] = null);

(statearr_45357_46320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (24))){
var inst_45332 = (state_45353[(7)]);
var inst_45341 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45332);
var state_45353__$1 = state_45353;
var statearr_45358_46321 = state_45353__$1;
(statearr_45358_46321[(2)] = inst_45341);

(statearr_45358_46321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (4))){
var inst_45284 = (state_45353[(8)]);
var inst_45284__$1 = (state_45353[(2)]);
var inst_45285 = (inst_45284__$1 == null);
var state_45353__$1 = (function (){var statearr_45359 = state_45353;
(statearr_45359[(8)] = inst_45284__$1);

return statearr_45359;
})();
if(cljs.core.truth_(inst_45285)){
var statearr_45360_46325 = state_45353__$1;
(statearr_45360_46325[(1)] = (5));

} else {
var statearr_45361_46326 = state_45353__$1;
(statearr_45361_46326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (15))){
var inst_45326 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45362_46327 = state_45353__$1;
(statearr_45362_46327[(2)] = inst_45326);

(statearr_45362_46327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (21))){
var inst_45346 = (state_45353[(2)]);
var state_45353__$1 = (function (){var statearr_45363 = state_45353;
(statearr_45363[(9)] = inst_45346);

return statearr_45363;
})();
var statearr_45364_46328 = state_45353__$1;
(statearr_45364_46328[(2)] = null);

(statearr_45364_46328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (13))){
var inst_45308 = (state_45353[(10)]);
var inst_45310 = cljs.core.chunked_seq_QMARK_(inst_45308);
var state_45353__$1 = state_45353;
if(inst_45310){
var statearr_45365_46329 = state_45353__$1;
(statearr_45365_46329[(1)] = (16));

} else {
var statearr_45366_46330 = state_45353__$1;
(statearr_45366_46330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (22))){
var inst_45338 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
if(cljs.core.truth_(inst_45338)){
var statearr_45367_46331 = state_45353__$1;
(statearr_45367_46331[(1)] = (23));

} else {
var statearr_45368_46332 = state_45353__$1;
(statearr_45368_46332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (6))){
var inst_45332 = (state_45353[(7)]);
var inst_45334 = (state_45353[(11)]);
var inst_45284 = (state_45353[(8)]);
var inst_45332__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45284) : topic_fn.call(null,inst_45284));
var inst_45333 = cljs.core.deref(mults);
var inst_45334__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45333,inst_45332__$1);
var state_45353__$1 = (function (){var statearr_45369 = state_45353;
(statearr_45369[(7)] = inst_45332__$1);

(statearr_45369[(11)] = inst_45334__$1);

return statearr_45369;
})();
if(cljs.core.truth_(inst_45334__$1)){
var statearr_45370_46333 = state_45353__$1;
(statearr_45370_46333[(1)] = (19));

} else {
var statearr_45371_46334 = state_45353__$1;
(statearr_45371_46334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (25))){
var inst_45343 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45372_46335 = state_45353__$1;
(statearr_45372_46335[(2)] = inst_45343);

(statearr_45372_46335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (17))){
var inst_45308 = (state_45353[(10)]);
var inst_45317 = cljs.core.first(inst_45308);
var inst_45318 = cljs.core.async.muxch_STAR_(inst_45317);
var inst_45319 = cljs.core.async.close_BANG_(inst_45318);
var inst_45320 = cljs.core.next(inst_45308);
var inst_45294 = inst_45320;
var inst_45295 = null;
var inst_45296 = (0);
var inst_45297 = (0);
var state_45353__$1 = (function (){var statearr_45373 = state_45353;
(statearr_45373[(12)] = inst_45295);

(statearr_45373[(13)] = inst_45297);

(statearr_45373[(14)] = inst_45296);

(statearr_45373[(15)] = inst_45294);

(statearr_45373[(16)] = inst_45319);

return statearr_45373;
})();
var statearr_45374_46336 = state_45353__$1;
(statearr_45374_46336[(2)] = null);

(statearr_45374_46336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (3))){
var inst_45351 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45353__$1,inst_45351);
} else {
if((state_val_45354 === (12))){
var inst_45328 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45375_46337 = state_45353__$1;
(statearr_45375_46337[(2)] = inst_45328);

(statearr_45375_46337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (2))){
var state_45353__$1 = state_45353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45353__$1,(4),ch);
} else {
if((state_val_45354 === (23))){
var state_45353__$1 = state_45353;
var statearr_45376_46338 = state_45353__$1;
(statearr_45376_46338[(2)] = null);

(statearr_45376_46338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (19))){
var inst_45334 = (state_45353[(11)]);
var inst_45284 = (state_45353[(8)]);
var inst_45336 = cljs.core.async.muxch_STAR_(inst_45334);
var state_45353__$1 = state_45353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45353__$1,(22),inst_45336,inst_45284);
} else {
if((state_val_45354 === (11))){
var inst_45308 = (state_45353[(10)]);
var inst_45294 = (state_45353[(15)]);
var inst_45308__$1 = cljs.core.seq(inst_45294);
var state_45353__$1 = (function (){var statearr_45377 = state_45353;
(statearr_45377[(10)] = inst_45308__$1);

return statearr_45377;
})();
if(inst_45308__$1){
var statearr_45378_46339 = state_45353__$1;
(statearr_45378_46339[(1)] = (13));

} else {
var statearr_45379_46340 = state_45353__$1;
(statearr_45379_46340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (9))){
var inst_45330 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45380_46341 = state_45353__$1;
(statearr_45380_46341[(2)] = inst_45330);

(statearr_45380_46341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (5))){
var inst_45291 = cljs.core.deref(mults);
var inst_45292 = cljs.core.vals(inst_45291);
var inst_45293 = cljs.core.seq(inst_45292);
var inst_45294 = inst_45293;
var inst_45295 = null;
var inst_45296 = (0);
var inst_45297 = (0);
var state_45353__$1 = (function (){var statearr_45381 = state_45353;
(statearr_45381[(12)] = inst_45295);

(statearr_45381[(13)] = inst_45297);

(statearr_45381[(14)] = inst_45296);

(statearr_45381[(15)] = inst_45294);

return statearr_45381;
})();
var statearr_45382_46342 = state_45353__$1;
(statearr_45382_46342[(2)] = null);

(statearr_45382_46342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (14))){
var state_45353__$1 = state_45353;
var statearr_45386_46343 = state_45353__$1;
(statearr_45386_46343[(2)] = null);

(statearr_45386_46343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (16))){
var inst_45308 = (state_45353[(10)]);
var inst_45312 = cljs.core.chunk_first(inst_45308);
var inst_45313 = cljs.core.chunk_rest(inst_45308);
var inst_45314 = cljs.core.count(inst_45312);
var inst_45294 = inst_45313;
var inst_45295 = inst_45312;
var inst_45296 = inst_45314;
var inst_45297 = (0);
var state_45353__$1 = (function (){var statearr_45387 = state_45353;
(statearr_45387[(12)] = inst_45295);

(statearr_45387[(13)] = inst_45297);

(statearr_45387[(14)] = inst_45296);

(statearr_45387[(15)] = inst_45294);

return statearr_45387;
})();
var statearr_45388_46344 = state_45353__$1;
(statearr_45388_46344[(2)] = null);

(statearr_45388_46344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (10))){
var inst_45295 = (state_45353[(12)]);
var inst_45297 = (state_45353[(13)]);
var inst_45296 = (state_45353[(14)]);
var inst_45294 = (state_45353[(15)]);
var inst_45302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45295,inst_45297);
var inst_45303 = cljs.core.async.muxch_STAR_(inst_45302);
var inst_45304 = cljs.core.async.close_BANG_(inst_45303);
var inst_45305 = (inst_45297 + (1));
var tmp45383 = inst_45295;
var tmp45384 = inst_45296;
var tmp45385 = inst_45294;
var inst_45294__$1 = tmp45385;
var inst_45295__$1 = tmp45383;
var inst_45296__$1 = tmp45384;
var inst_45297__$1 = inst_45305;
var state_45353__$1 = (function (){var statearr_45389 = state_45353;
(statearr_45389[(12)] = inst_45295__$1);

(statearr_45389[(13)] = inst_45297__$1);

(statearr_45389[(14)] = inst_45296__$1);

(statearr_45389[(15)] = inst_45294__$1);

(statearr_45389[(17)] = inst_45304);

return statearr_45389;
})();
var statearr_45390_46345 = state_45353__$1;
(statearr_45390_46345[(2)] = null);

(statearr_45390_46345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (18))){
var inst_45323 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45391_46346 = state_45353__$1;
(statearr_45391_46346[(2)] = inst_45323);

(statearr_45391_46346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (8))){
var inst_45297 = (state_45353[(13)]);
var inst_45296 = (state_45353[(14)]);
var inst_45299 = (inst_45297 < inst_45296);
var inst_45300 = inst_45299;
var state_45353__$1 = state_45353;
if(cljs.core.truth_(inst_45300)){
var statearr_45392_46347 = state_45353__$1;
(statearr_45392_46347[(1)] = (10));

} else {
var statearr_45393_46348 = state_45353__$1;
(statearr_45393_46348[(1)] = (11));

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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45394[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45394[(1)] = (1));

return statearr_45394;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45353){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45353);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45395){if((e45395 instanceof Object)){
var ex__44342__auto__ = e45395;
var statearr_45396_46349 = state_45353;
(statearr_45396_46349[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46350 = state_45353;
state_45353 = G__46350;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45397 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45397[(6)] = c__44403__auto___46316);

return statearr_45397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var G__45399 = arguments.length;
switch (G__45399) {
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
var G__45401 = arguments.length;
switch (G__45401) {
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
var G__45403 = arguments.length;
switch (G__45403) {
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
var c__44403__auto___46354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45442){
var state_val_45443 = (state_45442[(1)]);
if((state_val_45443 === (7))){
var state_45442__$1 = state_45442;
var statearr_45444_46355 = state_45442__$1;
(statearr_45444_46355[(2)] = null);

(statearr_45444_46355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (1))){
var state_45442__$1 = state_45442;
var statearr_45445_46356 = state_45442__$1;
(statearr_45445_46356[(2)] = null);

(statearr_45445_46356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (4))){
var inst_45406 = (state_45442[(7)]);
var inst_45408 = (inst_45406 < cnt);
var state_45442__$1 = state_45442;
if(cljs.core.truth_(inst_45408)){
var statearr_45446_46357 = state_45442__$1;
(statearr_45446_46357[(1)] = (6));

} else {
var statearr_45447_46358 = state_45442__$1;
(statearr_45447_46358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (15))){
var inst_45438 = (state_45442[(2)]);
var state_45442__$1 = state_45442;
var statearr_45448_46359 = state_45442__$1;
(statearr_45448_46359[(2)] = inst_45438);

(statearr_45448_46359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (13))){
var inst_45431 = cljs.core.async.close_BANG_(out);
var state_45442__$1 = state_45442;
var statearr_45449_46360 = state_45442__$1;
(statearr_45449_46360[(2)] = inst_45431);

(statearr_45449_46360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (6))){
var state_45442__$1 = state_45442;
var statearr_45450_46361 = state_45442__$1;
(statearr_45450_46361[(2)] = null);

(statearr_45450_46361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (3))){
var inst_45440 = (state_45442[(2)]);
var state_45442__$1 = state_45442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45442__$1,inst_45440);
} else {
if((state_val_45443 === (12))){
var inst_45428 = (state_45442[(8)]);
var inst_45428__$1 = (state_45442[(2)]);
var inst_45429 = cljs.core.some(cljs.core.nil_QMARK_,inst_45428__$1);
var state_45442__$1 = (function (){var statearr_45451 = state_45442;
(statearr_45451[(8)] = inst_45428__$1);

return statearr_45451;
})();
if(cljs.core.truth_(inst_45429)){
var statearr_45452_46365 = state_45442__$1;
(statearr_45452_46365[(1)] = (13));

} else {
var statearr_45453_46366 = state_45442__$1;
(statearr_45453_46366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (2))){
var inst_45405 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45406 = (0);
var state_45442__$1 = (function (){var statearr_45454 = state_45442;
(statearr_45454[(9)] = inst_45405);

(statearr_45454[(7)] = inst_45406);

return statearr_45454;
})();
var statearr_45455_46367 = state_45442__$1;
(statearr_45455_46367[(2)] = null);

(statearr_45455_46367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (11))){
var inst_45406 = (state_45442[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45442,(10),Object,null,(9));
var inst_45415 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45406) : chs__$1.call(null,inst_45406));
var inst_45416 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45406) : done.call(null,inst_45406));
var inst_45417 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45415,inst_45416);
var state_45442__$1 = state_45442;
var statearr_45456_46368 = state_45442__$1;
(statearr_45456_46368[(2)] = inst_45417);


cljs.core.async.impl.ioc_helpers.process_exception(state_45442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (9))){
var inst_45406 = (state_45442[(7)]);
var inst_45419 = (state_45442[(2)]);
var inst_45420 = (inst_45406 + (1));
var inst_45406__$1 = inst_45420;
var state_45442__$1 = (function (){var statearr_45457 = state_45442;
(statearr_45457[(10)] = inst_45419);

(statearr_45457[(7)] = inst_45406__$1);

return statearr_45457;
})();
var statearr_45458_46371 = state_45442__$1;
(statearr_45458_46371[(2)] = null);

(statearr_45458_46371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (5))){
var inst_45426 = (state_45442[(2)]);
var state_45442__$1 = (function (){var statearr_45459 = state_45442;
(statearr_45459[(11)] = inst_45426);

return statearr_45459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45442__$1,(12),dchan);
} else {
if((state_val_45443 === (14))){
var inst_45428 = (state_45442[(8)]);
var inst_45433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45428);
var state_45442__$1 = state_45442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45442__$1,(16),out,inst_45433);
} else {
if((state_val_45443 === (16))){
var inst_45435 = (state_45442[(2)]);
var state_45442__$1 = (function (){var statearr_45460 = state_45442;
(statearr_45460[(12)] = inst_45435);

return statearr_45460;
})();
var statearr_45461_46372 = state_45442__$1;
(statearr_45461_46372[(2)] = null);

(statearr_45461_46372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (10))){
var inst_45410 = (state_45442[(2)]);
var inst_45411 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45442__$1 = (function (){var statearr_45462 = state_45442;
(statearr_45462[(13)] = inst_45410);

return statearr_45462;
})();
var statearr_45463_46373 = state_45442__$1;
(statearr_45463_46373[(2)] = inst_45411);


cljs.core.async.impl.ioc_helpers.process_exception(state_45442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45443 === (8))){
var inst_45424 = (state_45442[(2)]);
var state_45442__$1 = state_45442;
var statearr_45464_46374 = state_45442__$1;
(statearr_45464_46374[(2)] = inst_45424);

(statearr_45464_46374[(1)] = (5));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45465[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45465[(1)] = (1));

return statearr_45465;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45442){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45442);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45466){if((e45466 instanceof Object)){
var ex__44342__auto__ = e45466;
var statearr_45467_46375 = state_45442;
(statearr_45467_46375[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46376 = state_45442;
state_45442 = G__46376;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45468 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45468[(6)] = c__44403__auto___46354);

return statearr_45468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var G__45471 = arguments.length;
switch (G__45471) {
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
var c__44403__auto___46378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45503){
var state_val_45504 = (state_45503[(1)]);
if((state_val_45504 === (7))){
var inst_45482 = (state_45503[(7)]);
var inst_45483 = (state_45503[(8)]);
var inst_45482__$1 = (state_45503[(2)]);
var inst_45483__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45482__$1,(0),null);
var inst_45484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45482__$1,(1),null);
var inst_45485 = (inst_45483__$1 == null);
var state_45503__$1 = (function (){var statearr_45505 = state_45503;
(statearr_45505[(7)] = inst_45482__$1);

(statearr_45505[(9)] = inst_45484);

(statearr_45505[(8)] = inst_45483__$1);

return statearr_45505;
})();
if(cljs.core.truth_(inst_45485)){
var statearr_45506_46380 = state_45503__$1;
(statearr_45506_46380[(1)] = (8));

} else {
var statearr_45507_46381 = state_45503__$1;
(statearr_45507_46381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (1))){
var inst_45472 = cljs.core.vec(chs);
var inst_45473 = inst_45472;
var state_45503__$1 = (function (){var statearr_45508 = state_45503;
(statearr_45508[(10)] = inst_45473);

return statearr_45508;
})();
var statearr_45509_46382 = state_45503__$1;
(statearr_45509_46382[(2)] = null);

(statearr_45509_46382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (4))){
var inst_45473 = (state_45503[(10)]);
var state_45503__$1 = state_45503;
return cljs.core.async.ioc_alts_BANG_(state_45503__$1,(7),inst_45473);
} else {
if((state_val_45504 === (6))){
var inst_45499 = (state_45503[(2)]);
var state_45503__$1 = state_45503;
var statearr_45510_46383 = state_45503__$1;
(statearr_45510_46383[(2)] = inst_45499);

(statearr_45510_46383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (3))){
var inst_45501 = (state_45503[(2)]);
var state_45503__$1 = state_45503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45503__$1,inst_45501);
} else {
if((state_val_45504 === (2))){
var inst_45473 = (state_45503[(10)]);
var inst_45475 = cljs.core.count(inst_45473);
var inst_45476 = (inst_45475 > (0));
var state_45503__$1 = state_45503;
if(cljs.core.truth_(inst_45476)){
var statearr_45512_46384 = state_45503__$1;
(statearr_45512_46384[(1)] = (4));

} else {
var statearr_45513_46385 = state_45503__$1;
(statearr_45513_46385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (11))){
var inst_45473 = (state_45503[(10)]);
var inst_45492 = (state_45503[(2)]);
var tmp45511 = inst_45473;
var inst_45473__$1 = tmp45511;
var state_45503__$1 = (function (){var statearr_45514 = state_45503;
(statearr_45514[(10)] = inst_45473__$1);

(statearr_45514[(11)] = inst_45492);

return statearr_45514;
})();
var statearr_45515_46386 = state_45503__$1;
(statearr_45515_46386[(2)] = null);

(statearr_45515_46386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (9))){
var inst_45483 = (state_45503[(8)]);
var state_45503__$1 = state_45503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45503__$1,(11),out,inst_45483);
} else {
if((state_val_45504 === (5))){
var inst_45497 = cljs.core.async.close_BANG_(out);
var state_45503__$1 = state_45503;
var statearr_45516_46387 = state_45503__$1;
(statearr_45516_46387[(2)] = inst_45497);

(statearr_45516_46387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (10))){
var inst_45495 = (state_45503[(2)]);
var state_45503__$1 = state_45503;
var statearr_45517_46388 = state_45503__$1;
(statearr_45517_46388[(2)] = inst_45495);

(statearr_45517_46388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45504 === (8))){
var inst_45473 = (state_45503[(10)]);
var inst_45482 = (state_45503[(7)]);
var inst_45484 = (state_45503[(9)]);
var inst_45483 = (state_45503[(8)]);
var inst_45487 = (function (){var cs = inst_45473;
var vec__45478 = inst_45482;
var v = inst_45483;
var c = inst_45484;
return (function (p1__45469_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45469_SHARP_);
});
})();
var inst_45488 = cljs.core.filterv(inst_45487,inst_45473);
var inst_45473__$1 = inst_45488;
var state_45503__$1 = (function (){var statearr_45518 = state_45503;
(statearr_45518[(10)] = inst_45473__$1);

return statearr_45518;
})();
var statearr_45519_46389 = state_45503__$1;
(statearr_45519_46389[(2)] = null);

(statearr_45519_46389[(1)] = (2));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45520[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45520[(1)] = (1));

return statearr_45520;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45503){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45503);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45521){if((e45521 instanceof Object)){
var ex__44342__auto__ = e45521;
var statearr_45522_46390 = state_45503;
(statearr_45522_46390[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46391 = state_45503;
state_45503 = G__46391;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45523 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45523[(6)] = c__44403__auto___46378);

return statearr_45523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
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
var G__45525 = arguments.length;
switch (G__45525) {
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
var c__44403__auto___46393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45549){
var state_val_45550 = (state_45549[(1)]);
if((state_val_45550 === (7))){
var inst_45531 = (state_45549[(7)]);
var inst_45531__$1 = (state_45549[(2)]);
var inst_45532 = (inst_45531__$1 == null);
var inst_45533 = cljs.core.not(inst_45532);
var state_45549__$1 = (function (){var statearr_45551 = state_45549;
(statearr_45551[(7)] = inst_45531__$1);

return statearr_45551;
})();
if(inst_45533){
var statearr_45552_46394 = state_45549__$1;
(statearr_45552_46394[(1)] = (8));

} else {
var statearr_45553_46395 = state_45549__$1;
(statearr_45553_46395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (1))){
var inst_45526 = (0);
var state_45549__$1 = (function (){var statearr_45554 = state_45549;
(statearr_45554[(8)] = inst_45526);

return statearr_45554;
})();
var statearr_45555_46396 = state_45549__$1;
(statearr_45555_46396[(2)] = null);

(statearr_45555_46396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (4))){
var state_45549__$1 = state_45549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45549__$1,(7),ch);
} else {
if((state_val_45550 === (6))){
var inst_45544 = (state_45549[(2)]);
var state_45549__$1 = state_45549;
var statearr_45556_46397 = state_45549__$1;
(statearr_45556_46397[(2)] = inst_45544);

(statearr_45556_46397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (3))){
var inst_45546 = (state_45549[(2)]);
var inst_45547 = cljs.core.async.close_BANG_(out);
var state_45549__$1 = (function (){var statearr_45557 = state_45549;
(statearr_45557[(9)] = inst_45546);

return statearr_45557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45549__$1,inst_45547);
} else {
if((state_val_45550 === (2))){
var inst_45526 = (state_45549[(8)]);
var inst_45528 = (inst_45526 < n);
var state_45549__$1 = state_45549;
if(cljs.core.truth_(inst_45528)){
var statearr_45558_46398 = state_45549__$1;
(statearr_45558_46398[(1)] = (4));

} else {
var statearr_45559_46399 = state_45549__$1;
(statearr_45559_46399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (11))){
var inst_45526 = (state_45549[(8)]);
var inst_45536 = (state_45549[(2)]);
var inst_45537 = (inst_45526 + (1));
var inst_45526__$1 = inst_45537;
var state_45549__$1 = (function (){var statearr_45560 = state_45549;
(statearr_45560[(10)] = inst_45536);

(statearr_45560[(8)] = inst_45526__$1);

return statearr_45560;
})();
var statearr_45561_46400 = state_45549__$1;
(statearr_45561_46400[(2)] = null);

(statearr_45561_46400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (9))){
var state_45549__$1 = state_45549;
var statearr_45562_46401 = state_45549__$1;
(statearr_45562_46401[(2)] = null);

(statearr_45562_46401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (5))){
var state_45549__$1 = state_45549;
var statearr_45563_46402 = state_45549__$1;
(statearr_45563_46402[(2)] = null);

(statearr_45563_46402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (10))){
var inst_45541 = (state_45549[(2)]);
var state_45549__$1 = state_45549;
var statearr_45564_46403 = state_45549__$1;
(statearr_45564_46403[(2)] = inst_45541);

(statearr_45564_46403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45550 === (8))){
var inst_45531 = (state_45549[(7)]);
var state_45549__$1 = state_45549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45549__$1,(11),out,inst_45531);
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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45565[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45565[(1)] = (1));

return statearr_45565;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45549){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45549);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45566){if((e45566 instanceof Object)){
var ex__44342__auto__ = e45566;
var statearr_45567_46404 = state_45549;
(statearr_45567_46404[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46405 = state_45549;
state_45549 = G__46405;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45568 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45568[(6)] = c__44403__auto___46393);

return statearr_45568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45570 = (function (f,ch,meta45571){
this.f = f;
this.ch = ch;
this.meta45571 = meta45571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45572,meta45571__$1){
var self__ = this;
var _45572__$1 = this;
return (new cljs.core.async.t_cljs$core$async45570(self__.f,self__.ch,meta45571__$1));
}));

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45572){
var self__ = this;
var _45572__$1 = this;
return self__.meta45571;
}));

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45573 = (function (f,ch,meta45571,_,fn1,meta45574){
this.f = f;
this.ch = ch;
this.meta45571 = meta45571;
this._ = _;
this.fn1 = fn1;
this.meta45574 = meta45574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45575,meta45574__$1){
var self__ = this;
var _45575__$1 = this;
return (new cljs.core.async.t_cljs$core$async45573(self__.f,self__.ch,self__.meta45571,self__._,self__.fn1,meta45574__$1));
}));

(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45575){
var self__ = this;
var _45575__$1 = this;
return self__.meta45574;
}));

(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45569_SHARP_){
var G__45576 = (((p1__45569_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45569_SHARP_) : self__.f.call(null,p1__45569_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45576) : f1.call(null,G__45576));
});
}));

(cljs.core.async.t_cljs$core$async45573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45571","meta45571",-733068054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45570","cljs.core.async/t_cljs$core$async45570",-1393174008,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45574","meta45574",968087964,null)], null);
}));

(cljs.core.async.t_cljs$core$async45573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45573");

(cljs.core.async.t_cljs$core$async45573.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45573.
 */
cljs.core.async.__GT_t_cljs$core$async45573 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45573(f__$1,ch__$1,meta45571__$1,___$2,fn1__$1,meta45574){
return (new cljs.core.async.t_cljs$core$async45573(f__$1,ch__$1,meta45571__$1,___$2,fn1__$1,meta45574));
});

}

return (new cljs.core.async.t_cljs$core$async45573(self__.f,self__.ch,self__.meta45571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45577 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45577) : self__.f.call(null,G__45577));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45571","meta45571",-733068054,null)], null);
}));

(cljs.core.async.t_cljs$core$async45570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45570");

(cljs.core.async.t_cljs$core$async45570.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45570.
 */
cljs.core.async.__GT_t_cljs$core$async45570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45570(f__$1,ch__$1,meta45571){
return (new cljs.core.async.t_cljs$core$async45570(f__$1,ch__$1,meta45571));
});

}

return (new cljs.core.async.t_cljs$core$async45570(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45578 = (function (f,ch,meta45579){
this.f = f;
this.ch = ch;
this.meta45579 = meta45579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45580,meta45579__$1){
var self__ = this;
var _45580__$1 = this;
return (new cljs.core.async.t_cljs$core$async45578(self__.f,self__.ch,meta45579__$1));
}));

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45580){
var self__ = this;
var _45580__$1 = this;
return self__.meta45579;
}));

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45579","meta45579",520643189,null)], null);
}));

(cljs.core.async.t_cljs$core$async45578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45578");

(cljs.core.async.t_cljs$core$async45578.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45578.
 */
cljs.core.async.__GT_t_cljs$core$async45578 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45578(f__$1,ch__$1,meta45579){
return (new cljs.core.async.t_cljs$core$async45578(f__$1,ch__$1,meta45579));
});

}

return (new cljs.core.async.t_cljs$core$async45578(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45581 = (function (p,ch,meta45582){
this.p = p;
this.ch = ch;
this.meta45582 = meta45582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45583,meta45582__$1){
var self__ = this;
var _45583__$1 = this;
return (new cljs.core.async.t_cljs$core$async45581(self__.p,self__.ch,meta45582__$1));
}));

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45583){
var self__ = this;
var _45583__$1 = this;
return self__.meta45582;
}));

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45582","meta45582",1541223849,null)], null);
}));

(cljs.core.async.t_cljs$core$async45581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45581");

(cljs.core.async.t_cljs$core$async45581.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45581.
 */
cljs.core.async.__GT_t_cljs$core$async45581 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45581(p__$1,ch__$1,meta45582){
return (new cljs.core.async.t_cljs$core$async45581(p__$1,ch__$1,meta45582));
});

}

return (new cljs.core.async.t_cljs$core$async45581(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45585 = arguments.length;
switch (G__45585) {
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
var c__44403__auto___46407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45606){
var state_val_45607 = (state_45606[(1)]);
if((state_val_45607 === (7))){
var inst_45602 = (state_45606[(2)]);
var state_45606__$1 = state_45606;
var statearr_45608_46408 = state_45606__$1;
(statearr_45608_46408[(2)] = inst_45602);

(statearr_45608_46408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (1))){
var state_45606__$1 = state_45606;
var statearr_45609_46409 = state_45606__$1;
(statearr_45609_46409[(2)] = null);

(statearr_45609_46409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (4))){
var inst_45588 = (state_45606[(7)]);
var inst_45588__$1 = (state_45606[(2)]);
var inst_45589 = (inst_45588__$1 == null);
var state_45606__$1 = (function (){var statearr_45610 = state_45606;
(statearr_45610[(7)] = inst_45588__$1);

return statearr_45610;
})();
if(cljs.core.truth_(inst_45589)){
var statearr_45611_46410 = state_45606__$1;
(statearr_45611_46410[(1)] = (5));

} else {
var statearr_45612_46411 = state_45606__$1;
(statearr_45612_46411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (6))){
var inst_45588 = (state_45606[(7)]);
var inst_45593 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45588) : p.call(null,inst_45588));
var state_45606__$1 = state_45606;
if(cljs.core.truth_(inst_45593)){
var statearr_45613_46412 = state_45606__$1;
(statearr_45613_46412[(1)] = (8));

} else {
var statearr_45614_46413 = state_45606__$1;
(statearr_45614_46413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (3))){
var inst_45604 = (state_45606[(2)]);
var state_45606__$1 = state_45606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45606__$1,inst_45604);
} else {
if((state_val_45607 === (2))){
var state_45606__$1 = state_45606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45606__$1,(4),ch);
} else {
if((state_val_45607 === (11))){
var inst_45596 = (state_45606[(2)]);
var state_45606__$1 = state_45606;
var statearr_45615_46414 = state_45606__$1;
(statearr_45615_46414[(2)] = inst_45596);

(statearr_45615_46414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (9))){
var state_45606__$1 = state_45606;
var statearr_45616_46415 = state_45606__$1;
(statearr_45616_46415[(2)] = null);

(statearr_45616_46415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (5))){
var inst_45591 = cljs.core.async.close_BANG_(out);
var state_45606__$1 = state_45606;
var statearr_45617_46416 = state_45606__$1;
(statearr_45617_46416[(2)] = inst_45591);

(statearr_45617_46416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (10))){
var inst_45599 = (state_45606[(2)]);
var state_45606__$1 = (function (){var statearr_45618 = state_45606;
(statearr_45618[(8)] = inst_45599);

return statearr_45618;
})();
var statearr_45619_46417 = state_45606__$1;
(statearr_45619_46417[(2)] = null);

(statearr_45619_46417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45607 === (8))){
var inst_45588 = (state_45606[(7)]);
var state_45606__$1 = state_45606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45606__$1,(11),out,inst_45588);
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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45620 = [null,null,null,null,null,null,null,null,null];
(statearr_45620[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45620[(1)] = (1));

return statearr_45620;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45606){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45606);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45621){if((e45621 instanceof Object)){
var ex__44342__auto__ = e45621;
var statearr_45622_46418 = state_45606;
(statearr_45622_46418[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46419 = state_45606;
state_45606 = G__46419;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45623 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45623[(6)] = c__44403__auto___46407);

return statearr_45623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45625 = arguments.length;
switch (G__45625) {
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
var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45687){
var state_val_45688 = (state_45687[(1)]);
if((state_val_45688 === (7))){
var inst_45683 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
var statearr_45689_46424 = state_45687__$1;
(statearr_45689_46424[(2)] = inst_45683);

(statearr_45689_46424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (20))){
var inst_45653 = (state_45687[(7)]);
var inst_45664 = (state_45687[(2)]);
var inst_45665 = cljs.core.next(inst_45653);
var inst_45639 = inst_45665;
var inst_45640 = null;
var inst_45641 = (0);
var inst_45642 = (0);
var state_45687__$1 = (function (){var statearr_45690 = state_45687;
(statearr_45690[(8)] = inst_45664);

(statearr_45690[(9)] = inst_45642);

(statearr_45690[(10)] = inst_45640);

(statearr_45690[(11)] = inst_45641);

(statearr_45690[(12)] = inst_45639);

return statearr_45690;
})();
var statearr_45691_46430 = state_45687__$1;
(statearr_45691_46430[(2)] = null);

(statearr_45691_46430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (1))){
var state_45687__$1 = state_45687;
var statearr_45692_46433 = state_45687__$1;
(statearr_45692_46433[(2)] = null);

(statearr_45692_46433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (4))){
var inst_45628 = (state_45687[(13)]);
var inst_45628__$1 = (state_45687[(2)]);
var inst_45629 = (inst_45628__$1 == null);
var state_45687__$1 = (function (){var statearr_45693 = state_45687;
(statearr_45693[(13)] = inst_45628__$1);

return statearr_45693;
})();
if(cljs.core.truth_(inst_45629)){
var statearr_45694_46437 = state_45687__$1;
(statearr_45694_46437[(1)] = (5));

} else {
var statearr_45695_46438 = state_45687__$1;
(statearr_45695_46438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (15))){
var state_45687__$1 = state_45687;
var statearr_45699_46439 = state_45687__$1;
(statearr_45699_46439[(2)] = null);

(statearr_45699_46439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (21))){
var state_45687__$1 = state_45687;
var statearr_45700_46440 = state_45687__$1;
(statearr_45700_46440[(2)] = null);

(statearr_45700_46440[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (13))){
var inst_45642 = (state_45687[(9)]);
var inst_45640 = (state_45687[(10)]);
var inst_45641 = (state_45687[(11)]);
var inst_45639 = (state_45687[(12)]);
var inst_45649 = (state_45687[(2)]);
var inst_45650 = (inst_45642 + (1));
var tmp45696 = inst_45640;
var tmp45697 = inst_45641;
var tmp45698 = inst_45639;
var inst_45639__$1 = tmp45698;
var inst_45640__$1 = tmp45696;
var inst_45641__$1 = tmp45697;
var inst_45642__$1 = inst_45650;
var state_45687__$1 = (function (){var statearr_45701 = state_45687;
(statearr_45701[(9)] = inst_45642__$1);

(statearr_45701[(14)] = inst_45649);

(statearr_45701[(10)] = inst_45640__$1);

(statearr_45701[(11)] = inst_45641__$1);

(statearr_45701[(12)] = inst_45639__$1);

return statearr_45701;
})();
var statearr_45702_46441 = state_45687__$1;
(statearr_45702_46441[(2)] = null);

(statearr_45702_46441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (22))){
var state_45687__$1 = state_45687;
var statearr_45703_46442 = state_45687__$1;
(statearr_45703_46442[(2)] = null);

(statearr_45703_46442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (6))){
var inst_45628 = (state_45687[(13)]);
var inst_45637 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45628) : f.call(null,inst_45628));
var inst_45638 = cljs.core.seq(inst_45637);
var inst_45639 = inst_45638;
var inst_45640 = null;
var inst_45641 = (0);
var inst_45642 = (0);
var state_45687__$1 = (function (){var statearr_45704 = state_45687;
(statearr_45704[(9)] = inst_45642);

(statearr_45704[(10)] = inst_45640);

(statearr_45704[(11)] = inst_45641);

(statearr_45704[(12)] = inst_45639);

return statearr_45704;
})();
var statearr_45705_46443 = state_45687__$1;
(statearr_45705_46443[(2)] = null);

(statearr_45705_46443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (17))){
var inst_45653 = (state_45687[(7)]);
var inst_45657 = cljs.core.chunk_first(inst_45653);
var inst_45658 = cljs.core.chunk_rest(inst_45653);
var inst_45659 = cljs.core.count(inst_45657);
var inst_45639 = inst_45658;
var inst_45640 = inst_45657;
var inst_45641 = inst_45659;
var inst_45642 = (0);
var state_45687__$1 = (function (){var statearr_45706 = state_45687;
(statearr_45706[(9)] = inst_45642);

(statearr_45706[(10)] = inst_45640);

(statearr_45706[(11)] = inst_45641);

(statearr_45706[(12)] = inst_45639);

return statearr_45706;
})();
var statearr_45707_46444 = state_45687__$1;
(statearr_45707_46444[(2)] = null);

(statearr_45707_46444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (3))){
var inst_45685 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45687__$1,inst_45685);
} else {
if((state_val_45688 === (12))){
var inst_45673 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
var statearr_45708_46445 = state_45687__$1;
(statearr_45708_46445[(2)] = inst_45673);

(statearr_45708_46445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (2))){
var state_45687__$1 = state_45687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45687__$1,(4),in$);
} else {
if((state_val_45688 === (23))){
var inst_45681 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
var statearr_45709_46447 = state_45687__$1;
(statearr_45709_46447[(2)] = inst_45681);

(statearr_45709_46447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (19))){
var inst_45668 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
var statearr_45710_46448 = state_45687__$1;
(statearr_45710_46448[(2)] = inst_45668);

(statearr_45710_46448[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (11))){
var inst_45653 = (state_45687[(7)]);
var inst_45639 = (state_45687[(12)]);
var inst_45653__$1 = cljs.core.seq(inst_45639);
var state_45687__$1 = (function (){var statearr_45711 = state_45687;
(statearr_45711[(7)] = inst_45653__$1);

return statearr_45711;
})();
if(inst_45653__$1){
var statearr_45712_46449 = state_45687__$1;
(statearr_45712_46449[(1)] = (14));

} else {
var statearr_45713_46450 = state_45687__$1;
(statearr_45713_46450[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (9))){
var inst_45675 = (state_45687[(2)]);
var inst_45676 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45687__$1 = (function (){var statearr_45714 = state_45687;
(statearr_45714[(15)] = inst_45675);

return statearr_45714;
})();
if(cljs.core.truth_(inst_45676)){
var statearr_45715_46451 = state_45687__$1;
(statearr_45715_46451[(1)] = (21));

} else {
var statearr_45716_46452 = state_45687__$1;
(statearr_45716_46452[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (5))){
var inst_45631 = cljs.core.async.close_BANG_(out);
var state_45687__$1 = state_45687;
var statearr_45717_46453 = state_45687__$1;
(statearr_45717_46453[(2)] = inst_45631);

(statearr_45717_46453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (14))){
var inst_45653 = (state_45687[(7)]);
var inst_45655 = cljs.core.chunked_seq_QMARK_(inst_45653);
var state_45687__$1 = state_45687;
if(inst_45655){
var statearr_45718_46454 = state_45687__$1;
(statearr_45718_46454[(1)] = (17));

} else {
var statearr_45719_46455 = state_45687__$1;
(statearr_45719_46455[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (16))){
var inst_45671 = (state_45687[(2)]);
var state_45687__$1 = state_45687;
var statearr_45720_46456 = state_45687__$1;
(statearr_45720_46456[(2)] = inst_45671);

(statearr_45720_46456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (10))){
var inst_45642 = (state_45687[(9)]);
var inst_45640 = (state_45687[(10)]);
var inst_45647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45640,inst_45642);
var state_45687__$1 = state_45687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45687__$1,(13),out,inst_45647);
} else {
if((state_val_45688 === (18))){
var inst_45653 = (state_45687[(7)]);
var inst_45662 = cljs.core.first(inst_45653);
var state_45687__$1 = state_45687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45687__$1,(20),out,inst_45662);
} else {
if((state_val_45688 === (8))){
var inst_45642 = (state_45687[(9)]);
var inst_45641 = (state_45687[(11)]);
var inst_45644 = (inst_45642 < inst_45641);
var inst_45645 = inst_45644;
var state_45687__$1 = state_45687;
if(cljs.core.truth_(inst_45645)){
var statearr_45721_46457 = state_45687__$1;
(statearr_45721_46457[(1)] = (10));

} else {
var statearr_45722_46458 = state_45687__$1;
(statearr_45722_46458[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____0 = (function (){
var statearr_45723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45723[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__);

(statearr_45723[(1)] = (1));

return statearr_45723;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____1 = (function (state_45687){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45687);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45724){if((e45724 instanceof Object)){
var ex__44342__auto__ = e45724;
var statearr_45725_46459 = state_45687;
(statearr_45725_46459[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46460 = state_45687;
state_45687 = G__46460;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__ = function(state_45687){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____1.call(this,state_45687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44339__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45726 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45726[(6)] = c__44403__auto__);

return statearr_45726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45728 = arguments.length;
switch (G__45728) {
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
var G__45730 = arguments.length;
switch (G__45730) {
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
var G__45732 = arguments.length;
switch (G__45732) {
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
var c__44403__auto___46464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45756){
var state_val_45757 = (state_45756[(1)]);
if((state_val_45757 === (7))){
var inst_45751 = (state_45756[(2)]);
var state_45756__$1 = state_45756;
var statearr_45758_46465 = state_45756__$1;
(statearr_45758_46465[(2)] = inst_45751);

(statearr_45758_46465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (1))){
var inst_45733 = null;
var state_45756__$1 = (function (){var statearr_45759 = state_45756;
(statearr_45759[(7)] = inst_45733);

return statearr_45759;
})();
var statearr_45760_46466 = state_45756__$1;
(statearr_45760_46466[(2)] = null);

(statearr_45760_46466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (4))){
var inst_45736 = (state_45756[(8)]);
var inst_45736__$1 = (state_45756[(2)]);
var inst_45737 = (inst_45736__$1 == null);
var inst_45738 = cljs.core.not(inst_45737);
var state_45756__$1 = (function (){var statearr_45761 = state_45756;
(statearr_45761[(8)] = inst_45736__$1);

return statearr_45761;
})();
if(inst_45738){
var statearr_45762_46467 = state_45756__$1;
(statearr_45762_46467[(1)] = (5));

} else {
var statearr_45763_46468 = state_45756__$1;
(statearr_45763_46468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (6))){
var state_45756__$1 = state_45756;
var statearr_45764_46469 = state_45756__$1;
(statearr_45764_46469[(2)] = null);

(statearr_45764_46469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (3))){
var inst_45753 = (state_45756[(2)]);
var inst_45754 = cljs.core.async.close_BANG_(out);
var state_45756__$1 = (function (){var statearr_45765 = state_45756;
(statearr_45765[(9)] = inst_45753);

return statearr_45765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45756__$1,inst_45754);
} else {
if((state_val_45757 === (2))){
var state_45756__$1 = state_45756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45756__$1,(4),ch);
} else {
if((state_val_45757 === (11))){
var inst_45736 = (state_45756[(8)]);
var inst_45745 = (state_45756[(2)]);
var inst_45733 = inst_45736;
var state_45756__$1 = (function (){var statearr_45766 = state_45756;
(statearr_45766[(7)] = inst_45733);

(statearr_45766[(10)] = inst_45745);

return statearr_45766;
})();
var statearr_45767_46470 = state_45756__$1;
(statearr_45767_46470[(2)] = null);

(statearr_45767_46470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (9))){
var inst_45736 = (state_45756[(8)]);
var state_45756__$1 = state_45756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45756__$1,(11),out,inst_45736);
} else {
if((state_val_45757 === (5))){
var inst_45733 = (state_45756[(7)]);
var inst_45736 = (state_45756[(8)]);
var inst_45740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45736,inst_45733);
var state_45756__$1 = state_45756;
if(inst_45740){
var statearr_45769_46471 = state_45756__$1;
(statearr_45769_46471[(1)] = (8));

} else {
var statearr_45770_46472 = state_45756__$1;
(statearr_45770_46472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (10))){
var inst_45748 = (state_45756[(2)]);
var state_45756__$1 = state_45756;
var statearr_45771_46473 = state_45756__$1;
(statearr_45771_46473[(2)] = inst_45748);

(statearr_45771_46473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45757 === (8))){
var inst_45733 = (state_45756[(7)]);
var tmp45768 = inst_45733;
var inst_45733__$1 = tmp45768;
var state_45756__$1 = (function (){var statearr_45772 = state_45756;
(statearr_45772[(7)] = inst_45733__$1);

return statearr_45772;
})();
var statearr_45773_46474 = state_45756__$1;
(statearr_45773_46474[(2)] = null);

(statearr_45773_46474[(1)] = (2));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45774[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45774[(1)] = (1));

return statearr_45774;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45756){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45756);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45775){if((e45775 instanceof Object)){
var ex__44342__auto__ = e45775;
var statearr_45776_46475 = state_45756;
(statearr_45776_46475[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46476 = state_45756;
state_45756 = G__46476;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45777 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45777[(6)] = c__44403__auto___46464);

return statearr_45777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45779 = arguments.length;
switch (G__45779) {
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
var c__44403__auto___46478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45817){
var state_val_45818 = (state_45817[(1)]);
if((state_val_45818 === (7))){
var inst_45813 = (state_45817[(2)]);
var state_45817__$1 = state_45817;
var statearr_45819_46479 = state_45817__$1;
(statearr_45819_46479[(2)] = inst_45813);

(statearr_45819_46479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (1))){
var inst_45780 = (new Array(n));
var inst_45781 = inst_45780;
var inst_45782 = (0);
var state_45817__$1 = (function (){var statearr_45820 = state_45817;
(statearr_45820[(7)] = inst_45782);

(statearr_45820[(8)] = inst_45781);

return statearr_45820;
})();
var statearr_45821_46480 = state_45817__$1;
(statearr_45821_46480[(2)] = null);

(statearr_45821_46480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (4))){
var inst_45785 = (state_45817[(9)]);
var inst_45785__$1 = (state_45817[(2)]);
var inst_45786 = (inst_45785__$1 == null);
var inst_45787 = cljs.core.not(inst_45786);
var state_45817__$1 = (function (){var statearr_45822 = state_45817;
(statearr_45822[(9)] = inst_45785__$1);

return statearr_45822;
})();
if(inst_45787){
var statearr_45823_46481 = state_45817__$1;
(statearr_45823_46481[(1)] = (5));

} else {
var statearr_45824_46482 = state_45817__$1;
(statearr_45824_46482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (15))){
var inst_45807 = (state_45817[(2)]);
var state_45817__$1 = state_45817;
var statearr_45825_46483 = state_45817__$1;
(statearr_45825_46483[(2)] = inst_45807);

(statearr_45825_46483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (13))){
var state_45817__$1 = state_45817;
var statearr_45826_46484 = state_45817__$1;
(statearr_45826_46484[(2)] = null);

(statearr_45826_46484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (6))){
var inst_45782 = (state_45817[(7)]);
var inst_45803 = (inst_45782 > (0));
var state_45817__$1 = state_45817;
if(cljs.core.truth_(inst_45803)){
var statearr_45827_46485 = state_45817__$1;
(statearr_45827_46485[(1)] = (12));

} else {
var statearr_45828_46486 = state_45817__$1;
(statearr_45828_46486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (3))){
var inst_45815 = (state_45817[(2)]);
var state_45817__$1 = state_45817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45817__$1,inst_45815);
} else {
if((state_val_45818 === (12))){
var inst_45781 = (state_45817[(8)]);
var inst_45805 = cljs.core.vec(inst_45781);
var state_45817__$1 = state_45817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45817__$1,(15),out,inst_45805);
} else {
if((state_val_45818 === (2))){
var state_45817__$1 = state_45817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45817__$1,(4),ch);
} else {
if((state_val_45818 === (11))){
var inst_45797 = (state_45817[(2)]);
var inst_45798 = (new Array(n));
var inst_45781 = inst_45798;
var inst_45782 = (0);
var state_45817__$1 = (function (){var statearr_45829 = state_45817;
(statearr_45829[(7)] = inst_45782);

(statearr_45829[(10)] = inst_45797);

(statearr_45829[(8)] = inst_45781);

return statearr_45829;
})();
var statearr_45830_46487 = state_45817__$1;
(statearr_45830_46487[(2)] = null);

(statearr_45830_46487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (9))){
var inst_45781 = (state_45817[(8)]);
var inst_45795 = cljs.core.vec(inst_45781);
var state_45817__$1 = state_45817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45817__$1,(11),out,inst_45795);
} else {
if((state_val_45818 === (5))){
var inst_45782 = (state_45817[(7)]);
var inst_45790 = (state_45817[(11)]);
var inst_45781 = (state_45817[(8)]);
var inst_45785 = (state_45817[(9)]);
var inst_45789 = (inst_45781[inst_45782] = inst_45785);
var inst_45790__$1 = (inst_45782 + (1));
var inst_45791 = (inst_45790__$1 < n);
var state_45817__$1 = (function (){var statearr_45831 = state_45817;
(statearr_45831[(12)] = inst_45789);

(statearr_45831[(11)] = inst_45790__$1);

return statearr_45831;
})();
if(cljs.core.truth_(inst_45791)){
var statearr_45832_46488 = state_45817__$1;
(statearr_45832_46488[(1)] = (8));

} else {
var statearr_45833_46489 = state_45817__$1;
(statearr_45833_46489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (14))){
var inst_45810 = (state_45817[(2)]);
var inst_45811 = cljs.core.async.close_BANG_(out);
var state_45817__$1 = (function (){var statearr_45835 = state_45817;
(statearr_45835[(13)] = inst_45810);

return statearr_45835;
})();
var statearr_45836_46490 = state_45817__$1;
(statearr_45836_46490[(2)] = inst_45811);

(statearr_45836_46490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (10))){
var inst_45801 = (state_45817[(2)]);
var state_45817__$1 = state_45817;
var statearr_45837_46491 = state_45817__$1;
(statearr_45837_46491[(2)] = inst_45801);

(statearr_45837_46491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45818 === (8))){
var inst_45790 = (state_45817[(11)]);
var inst_45781 = (state_45817[(8)]);
var tmp45834 = inst_45781;
var inst_45781__$1 = tmp45834;
var inst_45782 = inst_45790;
var state_45817__$1 = (function (){var statearr_45838 = state_45817;
(statearr_45838[(7)] = inst_45782);

(statearr_45838[(8)] = inst_45781__$1);

return statearr_45838;
})();
var statearr_45839_46492 = state_45817__$1;
(statearr_45839_46492[(2)] = null);

(statearr_45839_46492[(1)] = (2));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45840[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45840[(1)] = (1));

return statearr_45840;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45817){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45817);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45841){if((e45841 instanceof Object)){
var ex__44342__auto__ = e45841;
var statearr_45842_46493 = state_45817;
(statearr_45842_46493[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46494 = state_45817;
state_45817 = G__46494;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45843 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45843[(6)] = c__44403__auto___46478);

return statearr_45843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45845 = arguments.length;
switch (G__45845) {
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
var c__44403__auto___46496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_45887){
var state_val_45888 = (state_45887[(1)]);
if((state_val_45888 === (7))){
var inst_45883 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45889_46497 = state_45887__$1;
(statearr_45889_46497[(2)] = inst_45883);

(statearr_45889_46497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (1))){
var inst_45846 = [];
var inst_45847 = inst_45846;
var inst_45848 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45887__$1 = (function (){var statearr_45890 = state_45887;
(statearr_45890[(7)] = inst_45847);

(statearr_45890[(8)] = inst_45848);

return statearr_45890;
})();
var statearr_45891_46498 = state_45887__$1;
(statearr_45891_46498[(2)] = null);

(statearr_45891_46498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (4))){
var inst_45851 = (state_45887[(9)]);
var inst_45851__$1 = (state_45887[(2)]);
var inst_45852 = (inst_45851__$1 == null);
var inst_45853 = cljs.core.not(inst_45852);
var state_45887__$1 = (function (){var statearr_45892 = state_45887;
(statearr_45892[(9)] = inst_45851__$1);

return statearr_45892;
})();
if(inst_45853){
var statearr_45893_46499 = state_45887__$1;
(statearr_45893_46499[(1)] = (5));

} else {
var statearr_45894_46500 = state_45887__$1;
(statearr_45894_46500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (15))){
var inst_45877 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45895_46505 = state_45887__$1;
(statearr_45895_46505[(2)] = inst_45877);

(statearr_45895_46505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (13))){
var state_45887__$1 = state_45887;
var statearr_45896_46506 = state_45887__$1;
(statearr_45896_46506[(2)] = null);

(statearr_45896_46506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (6))){
var inst_45847 = (state_45887[(7)]);
var inst_45872 = inst_45847.length;
var inst_45873 = (inst_45872 > (0));
var state_45887__$1 = state_45887;
if(cljs.core.truth_(inst_45873)){
var statearr_45897_46507 = state_45887__$1;
(statearr_45897_46507[(1)] = (12));

} else {
var statearr_45898_46508 = state_45887__$1;
(statearr_45898_46508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (3))){
var inst_45885 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45887__$1,inst_45885);
} else {
if((state_val_45888 === (12))){
var inst_45847 = (state_45887[(7)]);
var inst_45875 = cljs.core.vec(inst_45847);
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45887__$1,(15),out,inst_45875);
} else {
if((state_val_45888 === (2))){
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45887__$1,(4),ch);
} else {
if((state_val_45888 === (11))){
var inst_45855 = (state_45887[(10)]);
var inst_45851 = (state_45887[(9)]);
var inst_45865 = (state_45887[(2)]);
var inst_45866 = [];
var inst_45867 = inst_45866.push(inst_45851);
var inst_45847 = inst_45866;
var inst_45848 = inst_45855;
var state_45887__$1 = (function (){var statearr_45899 = state_45887;
(statearr_45899[(7)] = inst_45847);

(statearr_45899[(8)] = inst_45848);

(statearr_45899[(11)] = inst_45865);

(statearr_45899[(12)] = inst_45867);

return statearr_45899;
})();
var statearr_45900_46509 = state_45887__$1;
(statearr_45900_46509[(2)] = null);

(statearr_45900_46509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (9))){
var inst_45847 = (state_45887[(7)]);
var inst_45863 = cljs.core.vec(inst_45847);
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45887__$1,(11),out,inst_45863);
} else {
if((state_val_45888 === (5))){
var inst_45855 = (state_45887[(10)]);
var inst_45851 = (state_45887[(9)]);
var inst_45848 = (state_45887[(8)]);
var inst_45855__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45851) : f.call(null,inst_45851));
var inst_45856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45855__$1,inst_45848);
var inst_45857 = cljs.core.keyword_identical_QMARK_(inst_45848,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45858 = ((inst_45856) || (inst_45857));
var state_45887__$1 = (function (){var statearr_45901 = state_45887;
(statearr_45901[(10)] = inst_45855__$1);

return statearr_45901;
})();
if(cljs.core.truth_(inst_45858)){
var statearr_45902_46510 = state_45887__$1;
(statearr_45902_46510[(1)] = (8));

} else {
var statearr_45903_46511 = state_45887__$1;
(statearr_45903_46511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (14))){
var inst_45880 = (state_45887[(2)]);
var inst_45881 = cljs.core.async.close_BANG_(out);
var state_45887__$1 = (function (){var statearr_45905 = state_45887;
(statearr_45905[(13)] = inst_45880);

return statearr_45905;
})();
var statearr_45906_46512 = state_45887__$1;
(statearr_45906_46512[(2)] = inst_45881);

(statearr_45906_46512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (10))){
var inst_45870 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45907_46513 = state_45887__$1;
(statearr_45907_46513[(2)] = inst_45870);

(statearr_45907_46513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (8))){
var inst_45855 = (state_45887[(10)]);
var inst_45847 = (state_45887[(7)]);
var inst_45851 = (state_45887[(9)]);
var inst_45860 = inst_45847.push(inst_45851);
var tmp45904 = inst_45847;
var inst_45847__$1 = tmp45904;
var inst_45848 = inst_45855;
var state_45887__$1 = (function (){var statearr_45908 = state_45887;
(statearr_45908[(14)] = inst_45860);

(statearr_45908[(7)] = inst_45847__$1);

(statearr_45908[(8)] = inst_45848);

return statearr_45908;
})();
var statearr_45909_46514 = state_45887__$1;
(statearr_45909_46514[(2)] = null);

(statearr_45909_46514[(1)] = (2));


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
var cljs$core$async$state_machine__44339__auto__ = null;
var cljs$core$async$state_machine__44339__auto____0 = (function (){
var statearr_45910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45910[(0)] = cljs$core$async$state_machine__44339__auto__);

(statearr_45910[(1)] = (1));

return statearr_45910;
});
var cljs$core$async$state_machine__44339__auto____1 = (function (state_45887){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_45887);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e45911){if((e45911 instanceof Object)){
var ex__44342__auto__ = e45911;
var statearr_45912_46519 = state_45887;
(statearr_45912_46519[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46520 = state_45887;
state_45887 = G__46520;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
cljs$core$async$state_machine__44339__auto__ = function(state_45887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44339__auto____1.call(this,state_45887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44339__auto____0;
cljs$core$async$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44339__auto____1;
return cljs$core$async$state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_45913 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_45913[(6)] = c__44403__auto___46496);

return statearr_45913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
