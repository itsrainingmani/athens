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
var G__56156 = arguments.length;
switch (G__56156) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56157 = (function (f,blockable,meta56158){
this.f = f;
this.blockable = blockable;
this.meta56158 = meta56158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56159,meta56158__$1){
var self__ = this;
var _56159__$1 = this;
return (new cljs.core.async.t_cljs$core$async56157(self__.f,self__.blockable,meta56158__$1));
}));

(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56159){
var self__ = this;
var _56159__$1 = this;
return self__.meta56158;
}));

(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56158","meta56158",339738088,null)], null);
}));

(cljs.core.async.t_cljs$core$async56157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56157");

(cljs.core.async.t_cljs$core$async56157.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56157.
 */
cljs.core.async.__GT_t_cljs$core$async56157 = (function cljs$core$async$__GT_t_cljs$core$async56157(f__$1,blockable__$1,meta56158){
return (new cljs.core.async.t_cljs$core$async56157(f__$1,blockable__$1,meta56158));
});

}

return (new cljs.core.async.t_cljs$core$async56157(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56162 = arguments.length;
switch (G__56162) {
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
var G__56164 = arguments.length;
switch (G__56164) {
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
var G__56166 = arguments.length;
switch (G__56166) {
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
var val_57619 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57619) : fn1.call(null,val_57619));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57619) : fn1.call(null,val_57619));
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
var G__56168 = arguments.length;
switch (G__56168) {
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
var n__4666__auto___57631 = n;
var x_57632 = (0);
while(true){
if((x_57632 < n__4666__auto___57631)){
(a[x_57632] = x_57632);

var G__57633 = (x_57632 + (1));
x_57632 = G__57633;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56169 = (function (flag,meta56170){
this.flag = flag;
this.meta56170 = meta56170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56171,meta56170__$1){
var self__ = this;
var _56171__$1 = this;
return (new cljs.core.async.t_cljs$core$async56169(self__.flag,meta56170__$1));
}));

(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56171){
var self__ = this;
var _56171__$1 = this;
return self__.meta56170;
}));

(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56170","meta56170",-1239141326,null)], null);
}));

(cljs.core.async.t_cljs$core$async56169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56169");

(cljs.core.async.t_cljs$core$async56169.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56169.
 */
cljs.core.async.__GT_t_cljs$core$async56169 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56169(flag__$1,meta56170){
return (new cljs.core.async.t_cljs$core$async56169(flag__$1,meta56170));
});

}

return (new cljs.core.async.t_cljs$core$async56169(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56172 = (function (flag,cb,meta56173){
this.flag = flag;
this.cb = cb;
this.meta56173 = meta56173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56174,meta56173__$1){
var self__ = this;
var _56174__$1 = this;
return (new cljs.core.async.t_cljs$core$async56172(self__.flag,self__.cb,meta56173__$1));
}));

(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56174){
var self__ = this;
var _56174__$1 = this;
return self__.meta56173;
}));

(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56173","meta56173",-591413503,null)], null);
}));

(cljs.core.async.t_cljs$core$async56172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56172");

(cljs.core.async.t_cljs$core$async56172.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56172.
 */
cljs.core.async.__GT_t_cljs$core$async56172 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56172(flag__$1,cb__$1,meta56173){
return (new cljs.core.async.t_cljs$core$async56172(flag__$1,cb__$1,meta56173));
});

}

return (new cljs.core.async.t_cljs$core$async56172(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56175_SHARP_){
var G__56177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56175_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56177) : fret.call(null,G__56177));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56176_SHARP_){
var G__56178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56176_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56178) : fret.call(null,G__56178));
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
var G__57660 = (i + (1));
i = G__57660;
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
var len__4789__auto___57665 = arguments.length;
var i__4790__auto___57666 = (0);
while(true){
if((i__4790__auto___57666 < len__4789__auto___57665)){
args__4795__auto__.push((arguments[i__4790__auto___57666]));

var G__57667 = (i__4790__auto___57666 + (1));
i__4790__auto___57666 = G__57667;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56181){
var map__56182 = p__56181;
var map__56182__$1 = (((((!((map__56182 == null))))?(((((map__56182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56182):map__56182);
var opts = map__56182__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56179){
var G__56180 = cljs.core.first(seq56179);
var seq56179__$1 = cljs.core.next(seq56179);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56180,seq56179__$1);
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
var G__56185 = arguments.length;
switch (G__56185) {
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
var c__56096__auto___57686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56209){
var state_val_56210 = (state_56209[(1)]);
if((state_val_56210 === (7))){
var inst_56205 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
var statearr_56211_57688 = state_56209__$1;
(statearr_56211_57688[(2)] = inst_56205);

(statearr_56211_57688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (1))){
var state_56209__$1 = state_56209;
var statearr_56212_57691 = state_56209__$1;
(statearr_56212_57691[(2)] = null);

(statearr_56212_57691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (4))){
var inst_56188 = (state_56209[(7)]);
var inst_56188__$1 = (state_56209[(2)]);
var inst_56189 = (inst_56188__$1 == null);
var state_56209__$1 = (function (){var statearr_56213 = state_56209;
(statearr_56213[(7)] = inst_56188__$1);

return statearr_56213;
})();
if(cljs.core.truth_(inst_56189)){
var statearr_56214_57694 = state_56209__$1;
(statearr_56214_57694[(1)] = (5));

} else {
var statearr_56215_57695 = state_56209__$1;
(statearr_56215_57695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (13))){
var state_56209__$1 = state_56209;
var statearr_56216_57696 = state_56209__$1;
(statearr_56216_57696[(2)] = null);

(statearr_56216_57696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (6))){
var inst_56188 = (state_56209[(7)]);
var state_56209__$1 = state_56209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56209__$1,(11),to,inst_56188);
} else {
if((state_val_56210 === (3))){
var inst_56207 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56209__$1,inst_56207);
} else {
if((state_val_56210 === (12))){
var state_56209__$1 = state_56209;
var statearr_56217_57697 = state_56209__$1;
(statearr_56217_57697[(2)] = null);

(statearr_56217_57697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (2))){
var state_56209__$1 = state_56209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56209__$1,(4),from);
} else {
if((state_val_56210 === (11))){
var inst_56198 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
if(cljs.core.truth_(inst_56198)){
var statearr_56218_57698 = state_56209__$1;
(statearr_56218_57698[(1)] = (12));

} else {
var statearr_56219_57699 = state_56209__$1;
(statearr_56219_57699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (9))){
var state_56209__$1 = state_56209;
var statearr_56220_57700 = state_56209__$1;
(statearr_56220_57700[(2)] = null);

(statearr_56220_57700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (5))){
var state_56209__$1 = state_56209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56221_57701 = state_56209__$1;
(statearr_56221_57701[(1)] = (8));

} else {
var statearr_56222_57702 = state_56209__$1;
(statearr_56222_57702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (14))){
var inst_56203 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
var statearr_56223_57703 = state_56209__$1;
(statearr_56223_57703[(2)] = inst_56203);

(statearr_56223_57703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (10))){
var inst_56195 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
var statearr_56224_57704 = state_56209__$1;
(statearr_56224_57704[(2)] = inst_56195);

(statearr_56224_57704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (8))){
var inst_56192 = cljs.core.async.close_BANG_(to);
var state_56209__$1 = state_56209;
var statearr_56225_57705 = state_56209__$1;
(statearr_56225_57705[(2)] = inst_56192);

(statearr_56225_57705[(1)] = (10));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_56226 = [null,null,null,null,null,null,null,null];
(statearr_56226[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_56226[(1)] = (1));

return statearr_56226;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_56209){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56209);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56227){if((e56227 instanceof Object)){
var ex__55999__auto__ = e56227;
var statearr_56228_57708 = state_56209;
(statearr_56228_57708[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57710 = state_56209;
state_56209 = G__57710;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_56209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_56209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56229 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56229[(6)] = c__56096__auto___57686);

return statearr_56229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var process = (function (p__56230){
var vec__56231 = p__56230;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(1),null);
var job = vec__56231;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56096__auto___57715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56238){
var state_val_56239 = (state_56238[(1)]);
if((state_val_56239 === (1))){
var state_56238__$1 = state_56238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56238__$1,(2),res,v);
} else {
if((state_val_56239 === (2))){
var inst_56235 = (state_56238[(2)]);
var inst_56236 = cljs.core.async.close_BANG_(res);
var state_56238__$1 = (function (){var statearr_56240 = state_56238;
(statearr_56240[(7)] = inst_56235);

return statearr_56240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56238__$1,inst_56236);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_56241 = [null,null,null,null,null,null,null,null];
(statearr_56241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__);

(statearr_56241[(1)] = (1));

return statearr_56241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1 = (function (state_56238){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56238);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56242){if((e56242 instanceof Object)){
var ex__55999__auto__ = e56242;
var statearr_56243_57724 = state_56238;
(statearr_56243_57724[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57726 = state_56238;
state_56238 = G__57726;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = function(state_56238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1.call(this,state_56238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56244 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56244[(6)] = c__56096__auto___57715);

return statearr_56244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56245){
var vec__56246 = p__56245;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56246,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56246,(1),null);
var job = vec__56246;
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
var n__4666__auto___57729 = n;
var __57730 = (0);
while(true){
if((__57730 < n__4666__auto___57729)){
var G__56249_57732 = type;
var G__56249_57733__$1 = (((G__56249_57732 instanceof cljs.core.Keyword))?G__56249_57732.fqn:null);
switch (G__56249_57733__$1) {
case "compute":
var c__56096__auto___57735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57730,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = ((function (__57730,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function (state_56262){
var state_val_56263 = (state_56262[(1)]);
if((state_val_56263 === (1))){
var state_56262__$1 = state_56262;
var statearr_56264_57736 = state_56262__$1;
(statearr_56264_57736[(2)] = null);

(statearr_56264_57736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (2))){
var state_56262__$1 = state_56262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56262__$1,(4),jobs);
} else {
if((state_val_56263 === (3))){
var inst_56260 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56262__$1,inst_56260);
} else {
if((state_val_56263 === (4))){
var inst_56252 = (state_56262[(2)]);
var inst_56253 = process(inst_56252);
var state_56262__$1 = state_56262;
if(cljs.core.truth_(inst_56253)){
var statearr_56265_57739 = state_56262__$1;
(statearr_56265_57739[(1)] = (5));

} else {
var statearr_56266_57740 = state_56262__$1;
(statearr_56266_57740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (5))){
var state_56262__$1 = state_56262;
var statearr_56267_57741 = state_56262__$1;
(statearr_56267_57741[(2)] = null);

(statearr_56267_57741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (6))){
var state_56262__$1 = state_56262;
var statearr_56268_57743 = state_56262__$1;
(statearr_56268_57743[(2)] = null);

(statearr_56268_57743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (7))){
var inst_56258 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
var statearr_56269_57745 = state_56262__$1;
(statearr_56269_57745[(2)] = inst_56258);

(statearr_56269_57745[(1)] = (3));


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
});})(__57730,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
;
return ((function (__57730,switch__55995__auto__,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_56270 = [null,null,null,null,null,null,null];
(statearr_56270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__);

(statearr_56270[(1)] = (1));

return statearr_56270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1 = (function (state_56262){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56262);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56271){if((e56271 instanceof Object)){
var ex__55999__auto__ = e56271;
var statearr_56272_57746 = state_56262;
(statearr_56272_57746[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57747 = state_56262;
state_56262 = G__57747;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = function(state_56262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1.call(this,state_56262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__;
})()
;})(__57730,switch__55995__auto__,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
})();
var state__56098__auto__ = (function (){var statearr_56273 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56273[(6)] = c__56096__auto___57735);

return statearr_56273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
});})(__57730,c__56096__auto___57735,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
);


break;
case "async":
var c__56096__auto___57750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57730,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = ((function (__57730,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function (state_56286){
var state_val_56287 = (state_56286[(1)]);
if((state_val_56287 === (1))){
var state_56286__$1 = state_56286;
var statearr_56288_57751 = state_56286__$1;
(statearr_56288_57751[(2)] = null);

(statearr_56288_57751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56287 === (2))){
var state_56286__$1 = state_56286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56286__$1,(4),jobs);
} else {
if((state_val_56287 === (3))){
var inst_56284 = (state_56286[(2)]);
var state_56286__$1 = state_56286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56286__$1,inst_56284);
} else {
if((state_val_56287 === (4))){
var inst_56276 = (state_56286[(2)]);
var inst_56277 = async(inst_56276);
var state_56286__$1 = state_56286;
if(cljs.core.truth_(inst_56277)){
var statearr_56289_57752 = state_56286__$1;
(statearr_56289_57752[(1)] = (5));

} else {
var statearr_56290_57753 = state_56286__$1;
(statearr_56290_57753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56287 === (5))){
var state_56286__$1 = state_56286;
var statearr_56291_57754 = state_56286__$1;
(statearr_56291_57754[(2)] = null);

(statearr_56291_57754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56287 === (6))){
var state_56286__$1 = state_56286;
var statearr_56292_57755 = state_56286__$1;
(statearr_56292_57755[(2)] = null);

(statearr_56292_57755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56287 === (7))){
var inst_56282 = (state_56286[(2)]);
var state_56286__$1 = state_56286;
var statearr_56293_57756 = state_56286__$1;
(statearr_56293_57756[(2)] = inst_56282);

(statearr_56293_57756[(1)] = (3));


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
});})(__57730,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
;
return ((function (__57730,switch__55995__auto__,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_56294 = [null,null,null,null,null,null,null];
(statearr_56294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__);

(statearr_56294[(1)] = (1));

return statearr_56294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1 = (function (state_56286){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56286);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56295){if((e56295 instanceof Object)){
var ex__55999__auto__ = e56295;
var statearr_56296_57757 = state_56286;
(statearr_56296_57757[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57758 = state_56286;
state_56286 = G__57758;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = function(state_56286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1.call(this,state_56286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__;
})()
;})(__57730,switch__55995__auto__,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
})();
var state__56098__auto__ = (function (){var statearr_56297 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56297[(6)] = c__56096__auto___57750);

return statearr_56297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
});})(__57730,c__56096__auto___57750,G__56249_57732,G__56249_57733__$1,n__4666__auto___57729,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56249_57733__$1)].join('')));

}

var G__57759 = (__57730 + (1));
__57730 = G__57759;
continue;
} else {
}
break;
}

var c__56096__auto___57760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56319){
var state_val_56320 = (state_56319[(1)]);
if((state_val_56320 === (7))){
var inst_56315 = (state_56319[(2)]);
var state_56319__$1 = state_56319;
var statearr_56321_57761 = state_56319__$1;
(statearr_56321_57761[(2)] = inst_56315);

(statearr_56321_57761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56320 === (1))){
var state_56319__$1 = state_56319;
var statearr_56322_57762 = state_56319__$1;
(statearr_56322_57762[(2)] = null);

(statearr_56322_57762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56320 === (4))){
var inst_56300 = (state_56319[(7)]);
var inst_56300__$1 = (state_56319[(2)]);
var inst_56301 = (inst_56300__$1 == null);
var state_56319__$1 = (function (){var statearr_56323 = state_56319;
(statearr_56323[(7)] = inst_56300__$1);

return statearr_56323;
})();
if(cljs.core.truth_(inst_56301)){
var statearr_56324_57763 = state_56319__$1;
(statearr_56324_57763[(1)] = (5));

} else {
var statearr_56325_57764 = state_56319__$1;
(statearr_56325_57764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56320 === (6))){
var inst_56305 = (state_56319[(8)]);
var inst_56300 = (state_56319[(7)]);
var inst_56305__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56307 = [inst_56300,inst_56305__$1];
var inst_56308 = (new cljs.core.PersistentVector(null,2,(5),inst_56306,inst_56307,null));
var state_56319__$1 = (function (){var statearr_56326 = state_56319;
(statearr_56326[(8)] = inst_56305__$1);

return statearr_56326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56319__$1,(8),jobs,inst_56308);
} else {
if((state_val_56320 === (3))){
var inst_56317 = (state_56319[(2)]);
var state_56319__$1 = state_56319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56319__$1,inst_56317);
} else {
if((state_val_56320 === (2))){
var state_56319__$1 = state_56319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56319__$1,(4),from);
} else {
if((state_val_56320 === (9))){
var inst_56312 = (state_56319[(2)]);
var state_56319__$1 = (function (){var statearr_56327 = state_56319;
(statearr_56327[(9)] = inst_56312);

return statearr_56327;
})();
var statearr_56328_57767 = state_56319__$1;
(statearr_56328_57767[(2)] = null);

(statearr_56328_57767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56320 === (5))){
var inst_56303 = cljs.core.async.close_BANG_(jobs);
var state_56319__$1 = state_56319;
var statearr_56329_57768 = state_56319__$1;
(statearr_56329_57768[(2)] = inst_56303);

(statearr_56329_57768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56320 === (8))){
var inst_56305 = (state_56319[(8)]);
var inst_56310 = (state_56319[(2)]);
var state_56319__$1 = (function (){var statearr_56330 = state_56319;
(statearr_56330[(10)] = inst_56310);

return statearr_56330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56319__$1,(9),results,inst_56305);
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
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_56331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__);

(statearr_56331[(1)] = (1));

return statearr_56331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1 = (function (state_56319){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56319);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56332){if((e56332 instanceof Object)){
var ex__55999__auto__ = e56332;
var statearr_56333_57773 = state_56319;
(statearr_56333_57773[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57776 = state_56319;
state_56319 = G__57776;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = function(state_56319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1.call(this,state_56319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56334 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56334[(6)] = c__56096__auto___57760);

return statearr_56334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


var c__56096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56372){
var state_val_56373 = (state_56372[(1)]);
if((state_val_56373 === (7))){
var inst_56368 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56374_57777 = state_56372__$1;
(statearr_56374_57777[(2)] = inst_56368);

(statearr_56374_57777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (20))){
var state_56372__$1 = state_56372;
var statearr_56375_57780 = state_56372__$1;
(statearr_56375_57780[(2)] = null);

(statearr_56375_57780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (1))){
var state_56372__$1 = state_56372;
var statearr_56376_57781 = state_56372__$1;
(statearr_56376_57781[(2)] = null);

(statearr_56376_57781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (4))){
var inst_56337 = (state_56372[(7)]);
var inst_56337__$1 = (state_56372[(2)]);
var inst_56338 = (inst_56337__$1 == null);
var state_56372__$1 = (function (){var statearr_56377 = state_56372;
(statearr_56377[(7)] = inst_56337__$1);

return statearr_56377;
})();
if(cljs.core.truth_(inst_56338)){
var statearr_56378_57782 = state_56372__$1;
(statearr_56378_57782[(1)] = (5));

} else {
var statearr_56379_57783 = state_56372__$1;
(statearr_56379_57783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (15))){
var inst_56350 = (state_56372[(8)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56372__$1,(18),to,inst_56350);
} else {
if((state_val_56373 === (21))){
var inst_56363 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56380_57784 = state_56372__$1;
(statearr_56380_57784[(2)] = inst_56363);

(statearr_56380_57784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (13))){
var inst_56365 = (state_56372[(2)]);
var state_56372__$1 = (function (){var statearr_56381 = state_56372;
(statearr_56381[(9)] = inst_56365);

return statearr_56381;
})();
var statearr_56382_57787 = state_56372__$1;
(statearr_56382_57787[(2)] = null);

(statearr_56382_57787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (6))){
var inst_56337 = (state_56372[(7)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56372__$1,(11),inst_56337);
} else {
if((state_val_56373 === (17))){
var inst_56358 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
if(cljs.core.truth_(inst_56358)){
var statearr_56383_57788 = state_56372__$1;
(statearr_56383_57788[(1)] = (19));

} else {
var statearr_56384_57789 = state_56372__$1;
(statearr_56384_57789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (3))){
var inst_56370 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56372__$1,inst_56370);
} else {
if((state_val_56373 === (12))){
var inst_56347 = (state_56372[(10)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56372__$1,(14),inst_56347);
} else {
if((state_val_56373 === (2))){
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56372__$1,(4),results);
} else {
if((state_val_56373 === (19))){
var state_56372__$1 = state_56372;
var statearr_56385_57792 = state_56372__$1;
(statearr_56385_57792[(2)] = null);

(statearr_56385_57792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (11))){
var inst_56347 = (state_56372[(2)]);
var state_56372__$1 = (function (){var statearr_56386 = state_56372;
(statearr_56386[(10)] = inst_56347);

return statearr_56386;
})();
var statearr_56387_57793 = state_56372__$1;
(statearr_56387_57793[(2)] = null);

(statearr_56387_57793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (9))){
var state_56372__$1 = state_56372;
var statearr_56388_57795 = state_56372__$1;
(statearr_56388_57795[(2)] = null);

(statearr_56388_57795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (5))){
var state_56372__$1 = state_56372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56389_57796 = state_56372__$1;
(statearr_56389_57796[(1)] = (8));

} else {
var statearr_56390_57797 = state_56372__$1;
(statearr_56390_57797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (14))){
var inst_56350 = (state_56372[(8)]);
var inst_56350__$1 = (state_56372[(2)]);
var inst_56351 = (inst_56350__$1 == null);
var inst_56352 = cljs.core.not(inst_56351);
var state_56372__$1 = (function (){var statearr_56391 = state_56372;
(statearr_56391[(8)] = inst_56350__$1);

return statearr_56391;
})();
if(inst_56352){
var statearr_56392_57798 = state_56372__$1;
(statearr_56392_57798[(1)] = (15));

} else {
var statearr_56393_57799 = state_56372__$1;
(statearr_56393_57799[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (16))){
var state_56372__$1 = state_56372;
var statearr_56394_57800 = state_56372__$1;
(statearr_56394_57800[(2)] = false);

(statearr_56394_57800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (10))){
var inst_56344 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56395_57801 = state_56372__$1;
(statearr_56395_57801[(2)] = inst_56344);

(statearr_56395_57801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (18))){
var inst_56355 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56396_57802 = state_56372__$1;
(statearr_56396_57802[(2)] = inst_56355);

(statearr_56396_57802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (8))){
var inst_56341 = cljs.core.async.close_BANG_(to);
var state_56372__$1 = state_56372;
var statearr_56397_57803 = state_56372__$1;
(statearr_56397_57803[(2)] = inst_56341);

(statearr_56397_57803[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_56398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__);

(statearr_56398[(1)] = (1));

return statearr_56398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1 = (function (state_56372){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56372);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56399){if((e56399 instanceof Object)){
var ex__55999__auto__ = e56399;
var statearr_56400_57811 = state_56372;
(statearr_56400_57811[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57812 = state_56372;
state_56372 = G__57812;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__ = function(state_56372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1.call(this,state_56372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56401 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56401[(6)] = c__56096__auto__);

return statearr_56401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

return c__56096__auto__;
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
var G__56403 = arguments.length;
switch (G__56403) {
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
var G__56405 = arguments.length;
switch (G__56405) {
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
var G__56407 = arguments.length;
switch (G__56407) {
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
var c__56096__auto___57827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56433){
var state_val_56434 = (state_56433[(1)]);
if((state_val_56434 === (7))){
var inst_56429 = (state_56433[(2)]);
var state_56433__$1 = state_56433;
var statearr_56435_57828 = state_56433__$1;
(statearr_56435_57828[(2)] = inst_56429);

(statearr_56435_57828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (1))){
var state_56433__$1 = state_56433;
var statearr_56436_57832 = state_56433__$1;
(statearr_56436_57832[(2)] = null);

(statearr_56436_57832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (4))){
var inst_56410 = (state_56433[(7)]);
var inst_56410__$1 = (state_56433[(2)]);
var inst_56411 = (inst_56410__$1 == null);
var state_56433__$1 = (function (){var statearr_56437 = state_56433;
(statearr_56437[(7)] = inst_56410__$1);

return statearr_56437;
})();
if(cljs.core.truth_(inst_56411)){
var statearr_56438_57833 = state_56433__$1;
(statearr_56438_57833[(1)] = (5));

} else {
var statearr_56439_57837 = state_56433__$1;
(statearr_56439_57837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (13))){
var state_56433__$1 = state_56433;
var statearr_56440_57838 = state_56433__$1;
(statearr_56440_57838[(2)] = null);

(statearr_56440_57838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (6))){
var inst_56410 = (state_56433[(7)]);
var inst_56416 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56410) : p.call(null,inst_56410));
var state_56433__$1 = state_56433;
if(cljs.core.truth_(inst_56416)){
var statearr_56441_57839 = state_56433__$1;
(statearr_56441_57839[(1)] = (9));

} else {
var statearr_56442_57840 = state_56433__$1;
(statearr_56442_57840[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (3))){
var inst_56431 = (state_56433[(2)]);
var state_56433__$1 = state_56433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56433__$1,inst_56431);
} else {
if((state_val_56434 === (12))){
var state_56433__$1 = state_56433;
var statearr_56443_57845 = state_56433__$1;
(statearr_56443_57845[(2)] = null);

(statearr_56443_57845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (2))){
var state_56433__$1 = state_56433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56433__$1,(4),ch);
} else {
if((state_val_56434 === (11))){
var inst_56410 = (state_56433[(7)]);
var inst_56420 = (state_56433[(2)]);
var state_56433__$1 = state_56433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56433__$1,(8),inst_56420,inst_56410);
} else {
if((state_val_56434 === (9))){
var state_56433__$1 = state_56433;
var statearr_56444_57849 = state_56433__$1;
(statearr_56444_57849[(2)] = tc);

(statearr_56444_57849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (5))){
var inst_56413 = cljs.core.async.close_BANG_(tc);
var inst_56414 = cljs.core.async.close_BANG_(fc);
var state_56433__$1 = (function (){var statearr_56445 = state_56433;
(statearr_56445[(8)] = inst_56413);

return statearr_56445;
})();
var statearr_56446_57850 = state_56433__$1;
(statearr_56446_57850[(2)] = inst_56414);

(statearr_56446_57850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (14))){
var inst_56427 = (state_56433[(2)]);
var state_56433__$1 = state_56433;
var statearr_56447_57854 = state_56433__$1;
(statearr_56447_57854[(2)] = inst_56427);

(statearr_56447_57854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (10))){
var state_56433__$1 = state_56433;
var statearr_56448_57855 = state_56433__$1;
(statearr_56448_57855[(2)] = fc);

(statearr_56448_57855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56434 === (8))){
var inst_56422 = (state_56433[(2)]);
var state_56433__$1 = state_56433;
if(cljs.core.truth_(inst_56422)){
var statearr_56449_57859 = state_56433__$1;
(statearr_56449_57859[(1)] = (12));

} else {
var statearr_56450_57860 = state_56433__$1;
(statearr_56450_57860[(1)] = (13));

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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_56451 = [null,null,null,null,null,null,null,null,null];
(statearr_56451[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_56451[(1)] = (1));

return statearr_56451;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_56433){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56433);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56452){if((e56452 instanceof Object)){
var ex__55999__auto__ = e56452;
var statearr_56453_57864 = state_56433;
(statearr_56453_57864[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57869 = state_56433;
state_56433 = G__57869;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_56433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_56433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56454 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56454[(6)] = c__56096__auto___57827);

return statearr_56454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var c__56096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56475){
var state_val_56476 = (state_56475[(1)]);
if((state_val_56476 === (7))){
var inst_56471 = (state_56475[(2)]);
var state_56475__$1 = state_56475;
var statearr_56477_57879 = state_56475__$1;
(statearr_56477_57879[(2)] = inst_56471);

(statearr_56477_57879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (1))){
var inst_56455 = init;
var state_56475__$1 = (function (){var statearr_56478 = state_56475;
(statearr_56478[(7)] = inst_56455);

return statearr_56478;
})();
var statearr_56479_57883 = state_56475__$1;
(statearr_56479_57883[(2)] = null);

(statearr_56479_57883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (4))){
var inst_56458 = (state_56475[(8)]);
var inst_56458__$1 = (state_56475[(2)]);
var inst_56459 = (inst_56458__$1 == null);
var state_56475__$1 = (function (){var statearr_56480 = state_56475;
(statearr_56480[(8)] = inst_56458__$1);

return statearr_56480;
})();
if(cljs.core.truth_(inst_56459)){
var statearr_56481_57890 = state_56475__$1;
(statearr_56481_57890[(1)] = (5));

} else {
var statearr_56482_57891 = state_56475__$1;
(statearr_56482_57891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (6))){
var inst_56462 = (state_56475[(9)]);
var inst_56455 = (state_56475[(7)]);
var inst_56458 = (state_56475[(8)]);
var inst_56462__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56455,inst_56458) : f.call(null,inst_56455,inst_56458));
var inst_56463 = cljs.core.reduced_QMARK_(inst_56462__$1);
var state_56475__$1 = (function (){var statearr_56483 = state_56475;
(statearr_56483[(9)] = inst_56462__$1);

return statearr_56483;
})();
if(inst_56463){
var statearr_56484_57898 = state_56475__$1;
(statearr_56484_57898[(1)] = (8));

} else {
var statearr_56485_57899 = state_56475__$1;
(statearr_56485_57899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (3))){
var inst_56473 = (state_56475[(2)]);
var state_56475__$1 = state_56475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56475__$1,inst_56473);
} else {
if((state_val_56476 === (2))){
var state_56475__$1 = state_56475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56475__$1,(4),ch);
} else {
if((state_val_56476 === (9))){
var inst_56462 = (state_56475[(9)]);
var inst_56455 = inst_56462;
var state_56475__$1 = (function (){var statearr_56486 = state_56475;
(statearr_56486[(7)] = inst_56455);

return statearr_56486;
})();
var statearr_56487_57900 = state_56475__$1;
(statearr_56487_57900[(2)] = null);

(statearr_56487_57900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (5))){
var inst_56455 = (state_56475[(7)]);
var state_56475__$1 = state_56475;
var statearr_56488_57902 = state_56475__$1;
(statearr_56488_57902[(2)] = inst_56455);

(statearr_56488_57902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (10))){
var inst_56469 = (state_56475[(2)]);
var state_56475__$1 = state_56475;
var statearr_56489_57903 = state_56475__$1;
(statearr_56489_57903[(2)] = inst_56469);

(statearr_56489_57903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56476 === (8))){
var inst_56462 = (state_56475[(9)]);
var inst_56465 = cljs.core.deref(inst_56462);
var state_56475__$1 = state_56475;
var statearr_56490_57904 = state_56475__$1;
(statearr_56490_57904[(2)] = inst_56465);

(statearr_56490_57904[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__55996__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55996__auto____0 = (function (){
var statearr_56491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56491[(0)] = cljs$core$async$reduce_$_state_machine__55996__auto__);

(statearr_56491[(1)] = (1));

return statearr_56491;
});
var cljs$core$async$reduce_$_state_machine__55996__auto____1 = (function (state_56475){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56475);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56492){if((e56492 instanceof Object)){
var ex__55999__auto__ = e56492;
var statearr_56493_57905 = state_56475;
(statearr_56493_57905[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57906 = state_56475;
state_56475 = G__57906;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55996__auto__ = function(state_56475){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55996__auto____1.call(this,state_56475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55996__auto____0;
cljs$core$async$reduce_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55996__auto____1;
return cljs$core$async$reduce_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56494 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56494[(6)] = c__56096__auto__);

return statearr_56494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

return c__56096__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56500){
var state_val_56501 = (state_56500[(1)]);
if((state_val_56501 === (1))){
var inst_56495 = cljs.core.async.reduce(f__$1,init,ch);
var state_56500__$1 = state_56500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56500__$1,(2),inst_56495);
} else {
if((state_val_56501 === (2))){
var inst_56497 = (state_56500[(2)]);
var inst_56498 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56497) : f__$1.call(null,inst_56497));
var state_56500__$1 = state_56500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56500__$1,inst_56498);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55996__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55996__auto____0 = (function (){
var statearr_56502 = [null,null,null,null,null,null,null];
(statearr_56502[(0)] = cljs$core$async$transduce_$_state_machine__55996__auto__);

(statearr_56502[(1)] = (1));

return statearr_56502;
});
var cljs$core$async$transduce_$_state_machine__55996__auto____1 = (function (state_56500){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56500);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56503){if((e56503 instanceof Object)){
var ex__55999__auto__ = e56503;
var statearr_56504_57909 = state_56500;
(statearr_56504_57909[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57910 = state_56500;
state_56500 = G__57910;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55996__auto__ = function(state_56500){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55996__auto____1.call(this,state_56500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55996__auto____0;
cljs$core$async$transduce_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55996__auto____1;
return cljs$core$async$transduce_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56505 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56505[(6)] = c__56096__auto__);

return statearr_56505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

return c__56096__auto__;
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
var G__56507 = arguments.length;
switch (G__56507) {
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
var c__56096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56532){
var state_val_56533 = (state_56532[(1)]);
if((state_val_56533 === (7))){
var inst_56514 = (state_56532[(2)]);
var state_56532__$1 = state_56532;
var statearr_56534_57912 = state_56532__$1;
(statearr_56534_57912[(2)] = inst_56514);

(statearr_56534_57912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (1))){
var inst_56508 = cljs.core.seq(coll);
var inst_56509 = inst_56508;
var state_56532__$1 = (function (){var statearr_56535 = state_56532;
(statearr_56535[(7)] = inst_56509);

return statearr_56535;
})();
var statearr_56536_57913 = state_56532__$1;
(statearr_56536_57913[(2)] = null);

(statearr_56536_57913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (4))){
var inst_56509 = (state_56532[(7)]);
var inst_56512 = cljs.core.first(inst_56509);
var state_56532__$1 = state_56532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56532__$1,(7),ch,inst_56512);
} else {
if((state_val_56533 === (13))){
var inst_56526 = (state_56532[(2)]);
var state_56532__$1 = state_56532;
var statearr_56537_57916 = state_56532__$1;
(statearr_56537_57916[(2)] = inst_56526);

(statearr_56537_57916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (6))){
var inst_56517 = (state_56532[(2)]);
var state_56532__$1 = state_56532;
if(cljs.core.truth_(inst_56517)){
var statearr_56538_57918 = state_56532__$1;
(statearr_56538_57918[(1)] = (8));

} else {
var statearr_56539_57919 = state_56532__$1;
(statearr_56539_57919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (3))){
var inst_56530 = (state_56532[(2)]);
var state_56532__$1 = state_56532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56532__$1,inst_56530);
} else {
if((state_val_56533 === (12))){
var state_56532__$1 = state_56532;
var statearr_56540_57923 = state_56532__$1;
(statearr_56540_57923[(2)] = null);

(statearr_56540_57923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (2))){
var inst_56509 = (state_56532[(7)]);
var state_56532__$1 = state_56532;
if(cljs.core.truth_(inst_56509)){
var statearr_56541_57924 = state_56532__$1;
(statearr_56541_57924[(1)] = (4));

} else {
var statearr_56542_57926 = state_56532__$1;
(statearr_56542_57926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (11))){
var inst_56523 = cljs.core.async.close_BANG_(ch);
var state_56532__$1 = state_56532;
var statearr_56543_57927 = state_56532__$1;
(statearr_56543_57927[(2)] = inst_56523);

(statearr_56543_57927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (9))){
var state_56532__$1 = state_56532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56544_57929 = state_56532__$1;
(statearr_56544_57929[(1)] = (11));

} else {
var statearr_56545_57931 = state_56532__$1;
(statearr_56545_57931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (5))){
var inst_56509 = (state_56532[(7)]);
var state_56532__$1 = state_56532;
var statearr_56546_57932 = state_56532__$1;
(statearr_56546_57932[(2)] = inst_56509);

(statearr_56546_57932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (10))){
var inst_56528 = (state_56532[(2)]);
var state_56532__$1 = state_56532;
var statearr_56547_57933 = state_56532__$1;
(statearr_56547_57933[(2)] = inst_56528);

(statearr_56547_57933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56533 === (8))){
var inst_56509 = (state_56532[(7)]);
var inst_56519 = cljs.core.next(inst_56509);
var inst_56509__$1 = inst_56519;
var state_56532__$1 = (function (){var statearr_56548 = state_56532;
(statearr_56548[(7)] = inst_56509__$1);

return statearr_56548;
})();
var statearr_56549_57934 = state_56532__$1;
(statearr_56549_57934[(2)] = null);

(statearr_56549_57934[(1)] = (2));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_56550 = [null,null,null,null,null,null,null,null];
(statearr_56550[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_56550[(1)] = (1));

return statearr_56550;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_56532){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56532);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56551){if((e56551 instanceof Object)){
var ex__55999__auto__ = e56551;
var statearr_56552_57935 = state_56532;
(statearr_56552_57935[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57936 = state_56532;
state_56532 = G__57936;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_56532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_56532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56553 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56553[(6)] = c__56096__auto__);

return statearr_56553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

return c__56096__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56554 = (function (ch,cs,meta56555){
this.ch = ch;
this.cs = cs;
this.meta56555 = meta56555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56556,meta56555__$1){
var self__ = this;
var _56556__$1 = this;
return (new cljs.core.async.t_cljs$core$async56554(self__.ch,self__.cs,meta56555__$1));
}));

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56556){
var self__ = this;
var _56556__$1 = this;
return self__.meta56555;
}));

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56554.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56555","meta56555",597797374,null)], null);
}));

(cljs.core.async.t_cljs$core$async56554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56554");

(cljs.core.async.t_cljs$core$async56554.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56554.
 */
cljs.core.async.__GT_t_cljs$core$async56554 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56554(ch__$1,cs__$1,meta56555){
return (new cljs.core.async.t_cljs$core$async56554(ch__$1,cs__$1,meta56555));
});

}

return (new cljs.core.async.t_cljs$core$async56554(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__56096__auto___57958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56691){
var state_val_56692 = (state_56691[(1)]);
if((state_val_56692 === (7))){
var inst_56687 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56693_57965 = state_56691__$1;
(statearr_56693_57965[(2)] = inst_56687);

(statearr_56693_57965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (20))){
var inst_56590 = (state_56691[(7)]);
var inst_56602 = cljs.core.first(inst_56590);
var inst_56603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56602,(0),null);
var inst_56604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56602,(1),null);
var state_56691__$1 = (function (){var statearr_56694 = state_56691;
(statearr_56694[(8)] = inst_56603);

return statearr_56694;
})();
if(cljs.core.truth_(inst_56604)){
var statearr_56695_57966 = state_56691__$1;
(statearr_56695_57966[(1)] = (22));

} else {
var statearr_56696_57967 = state_56691__$1;
(statearr_56696_57967[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (27))){
var inst_56634 = (state_56691[(9)]);
var inst_56632 = (state_56691[(10)]);
var inst_56639 = (state_56691[(11)]);
var inst_56559 = (state_56691[(12)]);
var inst_56639__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56632,inst_56634);
var inst_56640 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56639__$1,inst_56559,done);
var state_56691__$1 = (function (){var statearr_56697 = state_56691;
(statearr_56697[(11)] = inst_56639__$1);

return statearr_56697;
})();
if(cljs.core.truth_(inst_56640)){
var statearr_56698_57968 = state_56691__$1;
(statearr_56698_57968[(1)] = (30));

} else {
var statearr_56699_57969 = state_56691__$1;
(statearr_56699_57969[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (1))){
var state_56691__$1 = state_56691;
var statearr_56700_57970 = state_56691__$1;
(statearr_56700_57970[(2)] = null);

(statearr_56700_57970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (24))){
var inst_56590 = (state_56691[(7)]);
var inst_56609 = (state_56691[(2)]);
var inst_56610 = cljs.core.next(inst_56590);
var inst_56568 = inst_56610;
var inst_56569 = null;
var inst_56570 = (0);
var inst_56571 = (0);
var state_56691__$1 = (function (){var statearr_56701 = state_56691;
(statearr_56701[(13)] = inst_56609);

(statearr_56701[(14)] = inst_56570);

(statearr_56701[(15)] = inst_56571);

(statearr_56701[(16)] = inst_56568);

(statearr_56701[(17)] = inst_56569);

return statearr_56701;
})();
var statearr_56702_57971 = state_56691__$1;
(statearr_56702_57971[(2)] = null);

(statearr_56702_57971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (39))){
var state_56691__$1 = state_56691;
var statearr_56706_57972 = state_56691__$1;
(statearr_56706_57972[(2)] = null);

(statearr_56706_57972[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (4))){
var inst_56559 = (state_56691[(12)]);
var inst_56559__$1 = (state_56691[(2)]);
var inst_56560 = (inst_56559__$1 == null);
var state_56691__$1 = (function (){var statearr_56707 = state_56691;
(statearr_56707[(12)] = inst_56559__$1);

return statearr_56707;
})();
if(cljs.core.truth_(inst_56560)){
var statearr_56708_57979 = state_56691__$1;
(statearr_56708_57979[(1)] = (5));

} else {
var statearr_56709_57980 = state_56691__$1;
(statearr_56709_57980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (15))){
var inst_56570 = (state_56691[(14)]);
var inst_56571 = (state_56691[(15)]);
var inst_56568 = (state_56691[(16)]);
var inst_56569 = (state_56691[(17)]);
var inst_56586 = (state_56691[(2)]);
var inst_56587 = (inst_56571 + (1));
var tmp56703 = inst_56570;
var tmp56704 = inst_56568;
var tmp56705 = inst_56569;
var inst_56568__$1 = tmp56704;
var inst_56569__$1 = tmp56705;
var inst_56570__$1 = tmp56703;
var inst_56571__$1 = inst_56587;
var state_56691__$1 = (function (){var statearr_56710 = state_56691;
(statearr_56710[(18)] = inst_56586);

(statearr_56710[(14)] = inst_56570__$1);

(statearr_56710[(15)] = inst_56571__$1);

(statearr_56710[(16)] = inst_56568__$1);

(statearr_56710[(17)] = inst_56569__$1);

return statearr_56710;
})();
var statearr_56711_57981 = state_56691__$1;
(statearr_56711_57981[(2)] = null);

(statearr_56711_57981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (21))){
var inst_56613 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56715_57982 = state_56691__$1;
(statearr_56715_57982[(2)] = inst_56613);

(statearr_56715_57982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (31))){
var inst_56639 = (state_56691[(11)]);
var inst_56643 = done(null);
var inst_56644 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56639);
var state_56691__$1 = (function (){var statearr_56716 = state_56691;
(statearr_56716[(19)] = inst_56643);

return statearr_56716;
})();
var statearr_56717_57983 = state_56691__$1;
(statearr_56717_57983[(2)] = inst_56644);

(statearr_56717_57983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (32))){
var inst_56634 = (state_56691[(9)]);
var inst_56632 = (state_56691[(10)]);
var inst_56633 = (state_56691[(20)]);
var inst_56631 = (state_56691[(21)]);
var inst_56646 = (state_56691[(2)]);
var inst_56647 = (inst_56634 + (1));
var tmp56712 = inst_56632;
var tmp56713 = inst_56633;
var tmp56714 = inst_56631;
var inst_56631__$1 = tmp56714;
var inst_56632__$1 = tmp56712;
var inst_56633__$1 = tmp56713;
var inst_56634__$1 = inst_56647;
var state_56691__$1 = (function (){var statearr_56718 = state_56691;
(statearr_56718[(9)] = inst_56634__$1);

(statearr_56718[(10)] = inst_56632__$1);

(statearr_56718[(22)] = inst_56646);

(statearr_56718[(20)] = inst_56633__$1);

(statearr_56718[(21)] = inst_56631__$1);

return statearr_56718;
})();
var statearr_56719_57984 = state_56691__$1;
(statearr_56719_57984[(2)] = null);

(statearr_56719_57984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (40))){
var inst_56659 = (state_56691[(23)]);
var inst_56663 = done(null);
var inst_56664 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56659);
var state_56691__$1 = (function (){var statearr_56720 = state_56691;
(statearr_56720[(24)] = inst_56663);

return statearr_56720;
})();
var statearr_56721_57991 = state_56691__$1;
(statearr_56721_57991[(2)] = inst_56664);

(statearr_56721_57991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (33))){
var inst_56650 = (state_56691[(25)]);
var inst_56652 = cljs.core.chunked_seq_QMARK_(inst_56650);
var state_56691__$1 = state_56691;
if(inst_56652){
var statearr_56722_57992 = state_56691__$1;
(statearr_56722_57992[(1)] = (36));

} else {
var statearr_56723_57993 = state_56691__$1;
(statearr_56723_57993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (13))){
var inst_56580 = (state_56691[(26)]);
var inst_56583 = cljs.core.async.close_BANG_(inst_56580);
var state_56691__$1 = state_56691;
var statearr_56724_57994 = state_56691__$1;
(statearr_56724_57994[(2)] = inst_56583);

(statearr_56724_57994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (22))){
var inst_56603 = (state_56691[(8)]);
var inst_56606 = cljs.core.async.close_BANG_(inst_56603);
var state_56691__$1 = state_56691;
var statearr_56725_57995 = state_56691__$1;
(statearr_56725_57995[(2)] = inst_56606);

(statearr_56725_57995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (36))){
var inst_56650 = (state_56691[(25)]);
var inst_56654 = cljs.core.chunk_first(inst_56650);
var inst_56655 = cljs.core.chunk_rest(inst_56650);
var inst_56656 = cljs.core.count(inst_56654);
var inst_56631 = inst_56655;
var inst_56632 = inst_56654;
var inst_56633 = inst_56656;
var inst_56634 = (0);
var state_56691__$1 = (function (){var statearr_56726 = state_56691;
(statearr_56726[(9)] = inst_56634);

(statearr_56726[(10)] = inst_56632);

(statearr_56726[(20)] = inst_56633);

(statearr_56726[(21)] = inst_56631);

return statearr_56726;
})();
var statearr_56727_57996 = state_56691__$1;
(statearr_56727_57996[(2)] = null);

(statearr_56727_57996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (41))){
var inst_56650 = (state_56691[(25)]);
var inst_56666 = (state_56691[(2)]);
var inst_56667 = cljs.core.next(inst_56650);
var inst_56631 = inst_56667;
var inst_56632 = null;
var inst_56633 = (0);
var inst_56634 = (0);
var state_56691__$1 = (function (){var statearr_56728 = state_56691;
(statearr_56728[(9)] = inst_56634);

(statearr_56728[(27)] = inst_56666);

(statearr_56728[(10)] = inst_56632);

(statearr_56728[(20)] = inst_56633);

(statearr_56728[(21)] = inst_56631);

return statearr_56728;
})();
var statearr_56729_57997 = state_56691__$1;
(statearr_56729_57997[(2)] = null);

(statearr_56729_57997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (43))){
var state_56691__$1 = state_56691;
var statearr_56730_57998 = state_56691__$1;
(statearr_56730_57998[(2)] = null);

(statearr_56730_57998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (29))){
var inst_56675 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56731_57999 = state_56691__$1;
(statearr_56731_57999[(2)] = inst_56675);

(statearr_56731_57999[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (44))){
var inst_56684 = (state_56691[(2)]);
var state_56691__$1 = (function (){var statearr_56732 = state_56691;
(statearr_56732[(28)] = inst_56684);

return statearr_56732;
})();
var statearr_56733_58000 = state_56691__$1;
(statearr_56733_58000[(2)] = null);

(statearr_56733_58000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (6))){
var inst_56623 = (state_56691[(29)]);
var inst_56622 = cljs.core.deref(cs);
var inst_56623__$1 = cljs.core.keys(inst_56622);
var inst_56624 = cljs.core.count(inst_56623__$1);
var inst_56625 = cljs.core.reset_BANG_(dctr,inst_56624);
var inst_56630 = cljs.core.seq(inst_56623__$1);
var inst_56631 = inst_56630;
var inst_56632 = null;
var inst_56633 = (0);
var inst_56634 = (0);
var state_56691__$1 = (function (){var statearr_56734 = state_56691;
(statearr_56734[(9)] = inst_56634);

(statearr_56734[(29)] = inst_56623__$1);

(statearr_56734[(10)] = inst_56632);

(statearr_56734[(30)] = inst_56625);

(statearr_56734[(20)] = inst_56633);

(statearr_56734[(21)] = inst_56631);

return statearr_56734;
})();
var statearr_56735_58001 = state_56691__$1;
(statearr_56735_58001[(2)] = null);

(statearr_56735_58001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (28))){
var inst_56631 = (state_56691[(21)]);
var inst_56650 = (state_56691[(25)]);
var inst_56650__$1 = cljs.core.seq(inst_56631);
var state_56691__$1 = (function (){var statearr_56736 = state_56691;
(statearr_56736[(25)] = inst_56650__$1);

return statearr_56736;
})();
if(inst_56650__$1){
var statearr_56737_58002 = state_56691__$1;
(statearr_56737_58002[(1)] = (33));

} else {
var statearr_56738_58003 = state_56691__$1;
(statearr_56738_58003[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (25))){
var inst_56634 = (state_56691[(9)]);
var inst_56633 = (state_56691[(20)]);
var inst_56636 = (inst_56634 < inst_56633);
var inst_56637 = inst_56636;
var state_56691__$1 = state_56691;
if(cljs.core.truth_(inst_56637)){
var statearr_56739_58004 = state_56691__$1;
(statearr_56739_58004[(1)] = (27));

} else {
var statearr_56740_58005 = state_56691__$1;
(statearr_56740_58005[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (34))){
var state_56691__$1 = state_56691;
var statearr_56741_58006 = state_56691__$1;
(statearr_56741_58006[(2)] = null);

(statearr_56741_58006[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (17))){
var state_56691__$1 = state_56691;
var statearr_56742_58007 = state_56691__$1;
(statearr_56742_58007[(2)] = null);

(statearr_56742_58007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (3))){
var inst_56689 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56691__$1,inst_56689);
} else {
if((state_val_56692 === (12))){
var inst_56618 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56743_58009 = state_56691__$1;
(statearr_56743_58009[(2)] = inst_56618);

(statearr_56743_58009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (2))){
var state_56691__$1 = state_56691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56691__$1,(4),ch);
} else {
if((state_val_56692 === (23))){
var state_56691__$1 = state_56691;
var statearr_56744_58011 = state_56691__$1;
(statearr_56744_58011[(2)] = null);

(statearr_56744_58011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (35))){
var inst_56673 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56745_58012 = state_56691__$1;
(statearr_56745_58012[(2)] = inst_56673);

(statearr_56745_58012[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (19))){
var inst_56590 = (state_56691[(7)]);
var inst_56594 = cljs.core.chunk_first(inst_56590);
var inst_56595 = cljs.core.chunk_rest(inst_56590);
var inst_56596 = cljs.core.count(inst_56594);
var inst_56568 = inst_56595;
var inst_56569 = inst_56594;
var inst_56570 = inst_56596;
var inst_56571 = (0);
var state_56691__$1 = (function (){var statearr_56746 = state_56691;
(statearr_56746[(14)] = inst_56570);

(statearr_56746[(15)] = inst_56571);

(statearr_56746[(16)] = inst_56568);

(statearr_56746[(17)] = inst_56569);

return statearr_56746;
})();
var statearr_56747_58017 = state_56691__$1;
(statearr_56747_58017[(2)] = null);

(statearr_56747_58017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (11))){
var inst_56590 = (state_56691[(7)]);
var inst_56568 = (state_56691[(16)]);
var inst_56590__$1 = cljs.core.seq(inst_56568);
var state_56691__$1 = (function (){var statearr_56748 = state_56691;
(statearr_56748[(7)] = inst_56590__$1);

return statearr_56748;
})();
if(inst_56590__$1){
var statearr_56749_58018 = state_56691__$1;
(statearr_56749_58018[(1)] = (16));

} else {
var statearr_56750_58019 = state_56691__$1;
(statearr_56750_58019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (9))){
var inst_56620 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56751_58020 = state_56691__$1;
(statearr_56751_58020[(2)] = inst_56620);

(statearr_56751_58020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (5))){
var inst_56566 = cljs.core.deref(cs);
var inst_56567 = cljs.core.seq(inst_56566);
var inst_56568 = inst_56567;
var inst_56569 = null;
var inst_56570 = (0);
var inst_56571 = (0);
var state_56691__$1 = (function (){var statearr_56752 = state_56691;
(statearr_56752[(14)] = inst_56570);

(statearr_56752[(15)] = inst_56571);

(statearr_56752[(16)] = inst_56568);

(statearr_56752[(17)] = inst_56569);

return statearr_56752;
})();
var statearr_56753_58021 = state_56691__$1;
(statearr_56753_58021[(2)] = null);

(statearr_56753_58021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (14))){
var state_56691__$1 = state_56691;
var statearr_56754_58022 = state_56691__$1;
(statearr_56754_58022[(2)] = null);

(statearr_56754_58022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (45))){
var inst_56681 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56755_58023 = state_56691__$1;
(statearr_56755_58023[(2)] = inst_56681);

(statearr_56755_58023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (26))){
var inst_56623 = (state_56691[(29)]);
var inst_56677 = (state_56691[(2)]);
var inst_56678 = cljs.core.seq(inst_56623);
var state_56691__$1 = (function (){var statearr_56756 = state_56691;
(statearr_56756[(31)] = inst_56677);

return statearr_56756;
})();
if(inst_56678){
var statearr_56757_58026 = state_56691__$1;
(statearr_56757_58026[(1)] = (42));

} else {
var statearr_56758_58027 = state_56691__$1;
(statearr_56758_58027[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (16))){
var inst_56590 = (state_56691[(7)]);
var inst_56592 = cljs.core.chunked_seq_QMARK_(inst_56590);
var state_56691__$1 = state_56691;
if(inst_56592){
var statearr_56759_58030 = state_56691__$1;
(statearr_56759_58030[(1)] = (19));

} else {
var statearr_56760_58031 = state_56691__$1;
(statearr_56760_58031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (38))){
var inst_56670 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56761_58032 = state_56691__$1;
(statearr_56761_58032[(2)] = inst_56670);

(statearr_56761_58032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (30))){
var state_56691__$1 = state_56691;
var statearr_56762_58033 = state_56691__$1;
(statearr_56762_58033[(2)] = null);

(statearr_56762_58033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (10))){
var inst_56571 = (state_56691[(15)]);
var inst_56569 = (state_56691[(17)]);
var inst_56579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56569,inst_56571);
var inst_56580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56579,(0),null);
var inst_56581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56579,(1),null);
var state_56691__$1 = (function (){var statearr_56763 = state_56691;
(statearr_56763[(26)] = inst_56580);

return statearr_56763;
})();
if(cljs.core.truth_(inst_56581)){
var statearr_56764_58034 = state_56691__$1;
(statearr_56764_58034[(1)] = (13));

} else {
var statearr_56765_58035 = state_56691__$1;
(statearr_56765_58035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (18))){
var inst_56616 = (state_56691[(2)]);
var state_56691__$1 = state_56691;
var statearr_56766_58036 = state_56691__$1;
(statearr_56766_58036[(2)] = inst_56616);

(statearr_56766_58036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (42))){
var state_56691__$1 = state_56691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56691__$1,(45),dchan);
} else {
if((state_val_56692 === (37))){
var inst_56559 = (state_56691[(12)]);
var inst_56659 = (state_56691[(23)]);
var inst_56650 = (state_56691[(25)]);
var inst_56659__$1 = cljs.core.first(inst_56650);
var inst_56660 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56659__$1,inst_56559,done);
var state_56691__$1 = (function (){var statearr_56767 = state_56691;
(statearr_56767[(23)] = inst_56659__$1);

return statearr_56767;
})();
if(cljs.core.truth_(inst_56660)){
var statearr_56768_58039 = state_56691__$1;
(statearr_56768_58039[(1)] = (39));

} else {
var statearr_56769_58040 = state_56691__$1;
(statearr_56769_58040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56692 === (8))){
var inst_56570 = (state_56691[(14)]);
var inst_56571 = (state_56691[(15)]);
var inst_56573 = (inst_56571 < inst_56570);
var inst_56574 = inst_56573;
var state_56691__$1 = state_56691;
if(cljs.core.truth_(inst_56574)){
var statearr_56770_58041 = state_56691__$1;
(statearr_56770_58041[(1)] = (10));

} else {
var statearr_56771_58042 = state_56691__$1;
(statearr_56771_58042[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__55996__auto__ = null;
var cljs$core$async$mult_$_state_machine__55996__auto____0 = (function (){
var statearr_56772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56772[(0)] = cljs$core$async$mult_$_state_machine__55996__auto__);

(statearr_56772[(1)] = (1));

return statearr_56772;
});
var cljs$core$async$mult_$_state_machine__55996__auto____1 = (function (state_56691){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56691);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56773){if((e56773 instanceof Object)){
var ex__55999__auto__ = e56773;
var statearr_56774_58043 = state_56691;
(statearr_56774_58043[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58044 = state_56691;
state_56691 = G__58044;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55996__auto__ = function(state_56691){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55996__auto____1.call(this,state_56691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55996__auto____0;
cljs$core$async$mult_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55996__auto____1;
return cljs$core$async$mult_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56775 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56775[(6)] = c__56096__auto___57958);

return statearr_56775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var G__56777 = arguments.length;
switch (G__56777) {
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
var len__4789__auto___58048 = arguments.length;
var i__4790__auto___58049 = (0);
while(true){
if((i__4790__auto___58049 < len__4789__auto___58048)){
args__4795__auto__.push((arguments[i__4790__auto___58049]));

var G__58050 = (i__4790__auto___58049 + (1));
i__4790__auto___58049 = G__58050;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56782){
var map__56783 = p__56782;
var map__56783__$1 = (((((!((map__56783 == null))))?(((((map__56783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56783):map__56783);
var opts = map__56783__$1;
var statearr_56785_58051 = state;
(statearr_56785_58051[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56786_58052 = state;
(statearr_56786_58052[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_56787_58053 = state;
(statearr_56787_58053[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56778){
var G__56779 = cljs.core.first(seq56778);
var seq56778__$1 = cljs.core.next(seq56778);
var G__56780 = cljs.core.first(seq56778__$1);
var seq56778__$2 = cljs.core.next(seq56778__$1);
var G__56781 = cljs.core.first(seq56778__$2);
var seq56778__$3 = cljs.core.next(seq56778__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56779,G__56780,G__56781,seq56778__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56788 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56789){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56789 = meta56789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56790,meta56789__$1){
var self__ = this;
var _56790__$1 = this;
return (new cljs.core.async.t_cljs$core$async56788(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56789__$1));
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56790){
var self__ = this;
var _56790__$1 = this;
return self__.meta56789;
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56789","meta56789",-564945291,null)], null);
}));

(cljs.core.async.t_cljs$core$async56788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56788");

(cljs.core.async.t_cljs$core$async56788.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56788.
 */
cljs.core.async.__GT_t_cljs$core$async56788 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56788(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56789){
return (new cljs.core.async.t_cljs$core$async56788(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56789));
});

}

return (new cljs.core.async.t_cljs$core$async56788(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56096__auto___58069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_56892){
var state_val_56893 = (state_56892[(1)]);
if((state_val_56893 === (7))){
var inst_56807 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56894_58070 = state_56892__$1;
(statearr_56894_58070[(2)] = inst_56807);

(statearr_56894_58070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (20))){
var inst_56819 = (state_56892[(7)]);
var state_56892__$1 = state_56892;
var statearr_56895_58074 = state_56892__$1;
(statearr_56895_58074[(2)] = inst_56819);

(statearr_56895_58074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (27))){
var state_56892__$1 = state_56892;
var statearr_56896_58075 = state_56892__$1;
(statearr_56896_58075[(2)] = null);

(statearr_56896_58075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (1))){
var inst_56794 = (state_56892[(8)]);
var inst_56794__$1 = calc_state();
var inst_56796 = (inst_56794__$1 == null);
var inst_56797 = cljs.core.not(inst_56796);
var state_56892__$1 = (function (){var statearr_56897 = state_56892;
(statearr_56897[(8)] = inst_56794__$1);

return statearr_56897;
})();
if(inst_56797){
var statearr_56898_58079 = state_56892__$1;
(statearr_56898_58079[(1)] = (2));

} else {
var statearr_56899_58080 = state_56892__$1;
(statearr_56899_58080[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (24))){
var inst_56866 = (state_56892[(9)]);
var inst_56843 = (state_56892[(10)]);
var inst_56852 = (state_56892[(11)]);
var inst_56866__$1 = (inst_56843.cljs$core$IFn$_invoke$arity$1 ? inst_56843.cljs$core$IFn$_invoke$arity$1(inst_56852) : inst_56843.call(null,inst_56852));
var state_56892__$1 = (function (){var statearr_56900 = state_56892;
(statearr_56900[(9)] = inst_56866__$1);

return statearr_56900;
})();
if(cljs.core.truth_(inst_56866__$1)){
var statearr_56901_58085 = state_56892__$1;
(statearr_56901_58085[(1)] = (29));

} else {
var statearr_56902_58086 = state_56892__$1;
(statearr_56902_58086[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (4))){
var inst_56810 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56810)){
var statearr_56903_58087 = state_56892__$1;
(statearr_56903_58087[(1)] = (8));

} else {
var statearr_56904_58088 = state_56892__$1;
(statearr_56904_58088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (15))){
var inst_56837 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56837)){
var statearr_56905_58089 = state_56892__$1;
(statearr_56905_58089[(1)] = (19));

} else {
var statearr_56906_58090 = state_56892__$1;
(statearr_56906_58090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (21))){
var inst_56842 = (state_56892[(12)]);
var inst_56842__$1 = (state_56892[(2)]);
var inst_56843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56892__$1 = (function (){var statearr_56907 = state_56892;
(statearr_56907[(13)] = inst_56844);

(statearr_56907[(10)] = inst_56843);

(statearr_56907[(12)] = inst_56842__$1);

return statearr_56907;
})();
return cljs.core.async.ioc_alts_BANG_(state_56892__$1,(22),inst_56845);
} else {
if((state_val_56893 === (31))){
var inst_56874 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56874)){
var statearr_56908_58093 = state_56892__$1;
(statearr_56908_58093[(1)] = (32));

} else {
var statearr_56909_58094 = state_56892__$1;
(statearr_56909_58094[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (32))){
var inst_56851 = (state_56892[(14)]);
var state_56892__$1 = state_56892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56892__$1,(35),out,inst_56851);
} else {
if((state_val_56893 === (33))){
var inst_56842 = (state_56892[(12)]);
var inst_56819 = inst_56842;
var state_56892__$1 = (function (){var statearr_56910 = state_56892;
(statearr_56910[(7)] = inst_56819);

return statearr_56910;
})();
var statearr_56911_58097 = state_56892__$1;
(statearr_56911_58097[(2)] = null);

(statearr_56911_58097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (13))){
var inst_56819 = (state_56892[(7)]);
var inst_56826 = inst_56819.cljs$lang$protocol_mask$partition0$;
var inst_56827 = (inst_56826 & (64));
var inst_56828 = inst_56819.cljs$core$ISeq$;
var inst_56829 = (cljs.core.PROTOCOL_SENTINEL === inst_56828);
var inst_56830 = ((inst_56827) || (inst_56829));
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56830)){
var statearr_56912_58100 = state_56892__$1;
(statearr_56912_58100[(1)] = (16));

} else {
var statearr_56913_58101 = state_56892__$1;
(statearr_56913_58101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (22))){
var inst_56851 = (state_56892[(14)]);
var inst_56852 = (state_56892[(11)]);
var inst_56850 = (state_56892[(2)]);
var inst_56851__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56850,(0),null);
var inst_56852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56850,(1),null);
var inst_56853 = (inst_56851__$1 == null);
var inst_56854 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56852__$1,change);
var inst_56855 = ((inst_56853) || (inst_56854));
var state_56892__$1 = (function (){var statearr_56914 = state_56892;
(statearr_56914[(14)] = inst_56851__$1);

(statearr_56914[(11)] = inst_56852__$1);

return statearr_56914;
})();
if(cljs.core.truth_(inst_56855)){
var statearr_56915_58105 = state_56892__$1;
(statearr_56915_58105[(1)] = (23));

} else {
var statearr_56916_58106 = state_56892__$1;
(statearr_56916_58106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (36))){
var inst_56842 = (state_56892[(12)]);
var inst_56819 = inst_56842;
var state_56892__$1 = (function (){var statearr_56917 = state_56892;
(statearr_56917[(7)] = inst_56819);

return statearr_56917;
})();
var statearr_56918_58107 = state_56892__$1;
(statearr_56918_58107[(2)] = null);

(statearr_56918_58107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (29))){
var inst_56866 = (state_56892[(9)]);
var state_56892__$1 = state_56892;
var statearr_56919_58108 = state_56892__$1;
(statearr_56919_58108[(2)] = inst_56866);

(statearr_56919_58108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (6))){
var state_56892__$1 = state_56892;
var statearr_56920_58110 = state_56892__$1;
(statearr_56920_58110[(2)] = false);

(statearr_56920_58110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (28))){
var inst_56862 = (state_56892[(2)]);
var inst_56863 = calc_state();
var inst_56819 = inst_56863;
var state_56892__$1 = (function (){var statearr_56921 = state_56892;
(statearr_56921[(7)] = inst_56819);

(statearr_56921[(15)] = inst_56862);

return statearr_56921;
})();
var statearr_56922_58111 = state_56892__$1;
(statearr_56922_58111[(2)] = null);

(statearr_56922_58111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (25))){
var inst_56888 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56923_58114 = state_56892__$1;
(statearr_56923_58114[(2)] = inst_56888);

(statearr_56923_58114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (34))){
var inst_56886 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56924_58115 = state_56892__$1;
(statearr_56924_58115[(2)] = inst_56886);

(statearr_56924_58115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (17))){
var state_56892__$1 = state_56892;
var statearr_56925_58116 = state_56892__$1;
(statearr_56925_58116[(2)] = false);

(statearr_56925_58116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (3))){
var state_56892__$1 = state_56892;
var statearr_56926_58117 = state_56892__$1;
(statearr_56926_58117[(2)] = false);

(statearr_56926_58117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (12))){
var inst_56890 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56892__$1,inst_56890);
} else {
if((state_val_56893 === (2))){
var inst_56794 = (state_56892[(8)]);
var inst_56799 = inst_56794.cljs$lang$protocol_mask$partition0$;
var inst_56800 = (inst_56799 & (64));
var inst_56801 = inst_56794.cljs$core$ISeq$;
var inst_56802 = (cljs.core.PROTOCOL_SENTINEL === inst_56801);
var inst_56803 = ((inst_56800) || (inst_56802));
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56803)){
var statearr_56927_58118 = state_56892__$1;
(statearr_56927_58118[(1)] = (5));

} else {
var statearr_56928_58119 = state_56892__$1;
(statearr_56928_58119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (23))){
var inst_56851 = (state_56892[(14)]);
var inst_56857 = (inst_56851 == null);
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56857)){
var statearr_56929_58120 = state_56892__$1;
(statearr_56929_58120[(1)] = (26));

} else {
var statearr_56930_58121 = state_56892__$1;
(statearr_56930_58121[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (35))){
var inst_56877 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56877)){
var statearr_56931_58122 = state_56892__$1;
(statearr_56931_58122[(1)] = (36));

} else {
var statearr_56932_58123 = state_56892__$1;
(statearr_56932_58123[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (19))){
var inst_56819 = (state_56892[(7)]);
var inst_56839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56819);
var state_56892__$1 = state_56892;
var statearr_56933_58124 = state_56892__$1;
(statearr_56933_58124[(2)] = inst_56839);

(statearr_56933_58124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (11))){
var inst_56819 = (state_56892[(7)]);
var inst_56823 = (inst_56819 == null);
var inst_56824 = cljs.core.not(inst_56823);
var state_56892__$1 = state_56892;
if(inst_56824){
var statearr_56934_58125 = state_56892__$1;
(statearr_56934_58125[(1)] = (13));

} else {
var statearr_56935_58126 = state_56892__$1;
(statearr_56935_58126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (9))){
var inst_56794 = (state_56892[(8)]);
var state_56892__$1 = state_56892;
var statearr_56936_58127 = state_56892__$1;
(statearr_56936_58127[(2)] = inst_56794);

(statearr_56936_58127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (5))){
var state_56892__$1 = state_56892;
var statearr_56937_58128 = state_56892__$1;
(statearr_56937_58128[(2)] = true);

(statearr_56937_58128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (14))){
var state_56892__$1 = state_56892;
var statearr_56938_58133 = state_56892__$1;
(statearr_56938_58133[(2)] = false);

(statearr_56938_58133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (26))){
var inst_56852 = (state_56892[(11)]);
var inst_56859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56852);
var state_56892__$1 = state_56892;
var statearr_56939_58134 = state_56892__$1;
(statearr_56939_58134[(2)] = inst_56859);

(statearr_56939_58134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (16))){
var state_56892__$1 = state_56892;
var statearr_56940_58135 = state_56892__$1;
(statearr_56940_58135[(2)] = true);

(statearr_56940_58135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (38))){
var inst_56882 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56941_58136 = state_56892__$1;
(statearr_56941_58136[(2)] = inst_56882);

(statearr_56941_58136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (30))){
var inst_56844 = (state_56892[(13)]);
var inst_56843 = (state_56892[(10)]);
var inst_56852 = (state_56892[(11)]);
var inst_56869 = cljs.core.empty_QMARK_(inst_56843);
var inst_56870 = (inst_56844.cljs$core$IFn$_invoke$arity$1 ? inst_56844.cljs$core$IFn$_invoke$arity$1(inst_56852) : inst_56844.call(null,inst_56852));
var inst_56871 = cljs.core.not(inst_56870);
var inst_56872 = ((inst_56869) && (inst_56871));
var state_56892__$1 = state_56892;
var statearr_56942_58137 = state_56892__$1;
(statearr_56942_58137[(2)] = inst_56872);

(statearr_56942_58137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (10))){
var inst_56794 = (state_56892[(8)]);
var inst_56815 = (state_56892[(2)]);
var inst_56816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56815,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56815,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56815,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56819 = inst_56794;
var state_56892__$1 = (function (){var statearr_56943 = state_56892;
(statearr_56943[(7)] = inst_56819);

(statearr_56943[(16)] = inst_56818);

(statearr_56943[(17)] = inst_56816);

(statearr_56943[(18)] = inst_56817);

return statearr_56943;
})();
var statearr_56944_58142 = state_56892__$1;
(statearr_56944_58142[(2)] = null);

(statearr_56944_58142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (18))){
var inst_56834 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56945_58144 = state_56892__$1;
(statearr_56945_58144[(2)] = inst_56834);

(statearr_56945_58144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (37))){
var state_56892__$1 = state_56892;
var statearr_56946_58145 = state_56892__$1;
(statearr_56946_58145[(2)] = null);

(statearr_56946_58145[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (8))){
var inst_56794 = (state_56892[(8)]);
var inst_56812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56794);
var state_56892__$1 = state_56892;
var statearr_56947_58146 = state_56892__$1;
(statearr_56947_58146[(2)] = inst_56812);

(statearr_56947_58146[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__55996__auto__ = null;
var cljs$core$async$mix_$_state_machine__55996__auto____0 = (function (){
var statearr_56948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56948[(0)] = cljs$core$async$mix_$_state_machine__55996__auto__);

(statearr_56948[(1)] = (1));

return statearr_56948;
});
var cljs$core$async$mix_$_state_machine__55996__auto____1 = (function (state_56892){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_56892);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e56949){if((e56949 instanceof Object)){
var ex__55999__auto__ = e56949;
var statearr_56950_58148 = state_56892;
(statearr_56950_58148[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58149 = state_56892;
state_56892 = G__58149;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55996__auto__ = function(state_56892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55996__auto____1.call(this,state_56892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55996__auto____0;
cljs$core$async$mix_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55996__auto____1;
return cljs$core$async$mix_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_56951 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_56951[(6)] = c__56096__auto___58069);

return statearr_56951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var G__56953 = arguments.length;
switch (G__56953) {
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
var G__56956 = arguments.length;
switch (G__56956) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56954_SHARP_){
if(cljs.core.truth_((p1__56954_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56954_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56954_SHARP_.call(null,topic)))){
return p1__56954_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56954_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56957 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56958){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56958 = meta56958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56959,meta56958__$1){
var self__ = this;
var _56959__$1 = this;
return (new cljs.core.async.t_cljs$core$async56957(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56958__$1));
}));

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56959){
var self__ = this;
var _56959__$1 = this;
return self__.meta56958;
}));

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56957.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56958","meta56958",2117494501,null)], null);
}));

(cljs.core.async.t_cljs$core$async56957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56957");

(cljs.core.async.t_cljs$core$async56957.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56957.
 */
cljs.core.async.__GT_t_cljs$core$async56957 = (function cljs$core$async$__GT_t_cljs$core$async56957(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56958){
return (new cljs.core.async.t_cljs$core$async56957(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56958));
});

}

return (new cljs.core.async.t_cljs$core$async56957(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56096__auto___58166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57031){
var state_val_57032 = (state_57031[(1)]);
if((state_val_57032 === (7))){
var inst_57027 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57033_58168 = state_57031__$1;
(statearr_57033_58168[(2)] = inst_57027);

(statearr_57033_58168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (20))){
var state_57031__$1 = state_57031;
var statearr_57034_58169 = state_57031__$1;
(statearr_57034_58169[(2)] = null);

(statearr_57034_58169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (1))){
var state_57031__$1 = state_57031;
var statearr_57035_58170 = state_57031__$1;
(statearr_57035_58170[(2)] = null);

(statearr_57035_58170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (24))){
var inst_57010 = (state_57031[(7)]);
var inst_57019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57010);
var state_57031__$1 = state_57031;
var statearr_57036_58171 = state_57031__$1;
(statearr_57036_58171[(2)] = inst_57019);

(statearr_57036_58171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (4))){
var inst_56962 = (state_57031[(8)]);
var inst_56962__$1 = (state_57031[(2)]);
var inst_56963 = (inst_56962__$1 == null);
var state_57031__$1 = (function (){var statearr_57037 = state_57031;
(statearr_57037[(8)] = inst_56962__$1);

return statearr_57037;
})();
if(cljs.core.truth_(inst_56963)){
var statearr_57038_58173 = state_57031__$1;
(statearr_57038_58173[(1)] = (5));

} else {
var statearr_57039_58174 = state_57031__$1;
(statearr_57039_58174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (15))){
var inst_57004 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57040_58179 = state_57031__$1;
(statearr_57040_58179[(2)] = inst_57004);

(statearr_57040_58179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (21))){
var inst_57024 = (state_57031[(2)]);
var state_57031__$1 = (function (){var statearr_57041 = state_57031;
(statearr_57041[(9)] = inst_57024);

return statearr_57041;
})();
var statearr_57042_58180 = state_57031__$1;
(statearr_57042_58180[(2)] = null);

(statearr_57042_58180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (13))){
var inst_56986 = (state_57031[(10)]);
var inst_56988 = cljs.core.chunked_seq_QMARK_(inst_56986);
var state_57031__$1 = state_57031;
if(inst_56988){
var statearr_57043_58182 = state_57031__$1;
(statearr_57043_58182[(1)] = (16));

} else {
var statearr_57044_58183 = state_57031__$1;
(statearr_57044_58183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (22))){
var inst_57016 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
if(cljs.core.truth_(inst_57016)){
var statearr_57045_58184 = state_57031__$1;
(statearr_57045_58184[(1)] = (23));

} else {
var statearr_57046_58185 = state_57031__$1;
(statearr_57046_58185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (6))){
var inst_57012 = (state_57031[(11)]);
var inst_56962 = (state_57031[(8)]);
var inst_57010 = (state_57031[(7)]);
var inst_57010__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56962) : topic_fn.call(null,inst_56962));
var inst_57011 = cljs.core.deref(mults);
var inst_57012__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57011,inst_57010__$1);
var state_57031__$1 = (function (){var statearr_57047 = state_57031;
(statearr_57047[(11)] = inst_57012__$1);

(statearr_57047[(7)] = inst_57010__$1);

return statearr_57047;
})();
if(cljs.core.truth_(inst_57012__$1)){
var statearr_57048_58187 = state_57031__$1;
(statearr_57048_58187[(1)] = (19));

} else {
var statearr_57049_58188 = state_57031__$1;
(statearr_57049_58188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (25))){
var inst_57021 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57050_58189 = state_57031__$1;
(statearr_57050_58189[(2)] = inst_57021);

(statearr_57050_58189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (17))){
var inst_56986 = (state_57031[(10)]);
var inst_56995 = cljs.core.first(inst_56986);
var inst_56996 = cljs.core.async.muxch_STAR_(inst_56995);
var inst_56997 = cljs.core.async.close_BANG_(inst_56996);
var inst_56998 = cljs.core.next(inst_56986);
var inst_56972 = inst_56998;
var inst_56973 = null;
var inst_56974 = (0);
var inst_56975 = (0);
var state_57031__$1 = (function (){var statearr_57051 = state_57031;
(statearr_57051[(12)] = inst_56972);

(statearr_57051[(13)] = inst_56974);

(statearr_57051[(14)] = inst_56975);

(statearr_57051[(15)] = inst_56973);

(statearr_57051[(16)] = inst_56997);

return statearr_57051;
})();
var statearr_57052_58191 = state_57031__$1;
(statearr_57052_58191[(2)] = null);

(statearr_57052_58191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (3))){
var inst_57029 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57031__$1,inst_57029);
} else {
if((state_val_57032 === (12))){
var inst_57006 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57053_58195 = state_57031__$1;
(statearr_57053_58195[(2)] = inst_57006);

(statearr_57053_58195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (2))){
var state_57031__$1 = state_57031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57031__$1,(4),ch);
} else {
if((state_val_57032 === (23))){
var state_57031__$1 = state_57031;
var statearr_57054_58196 = state_57031__$1;
(statearr_57054_58196[(2)] = null);

(statearr_57054_58196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (19))){
var inst_57012 = (state_57031[(11)]);
var inst_56962 = (state_57031[(8)]);
var inst_57014 = cljs.core.async.muxch_STAR_(inst_57012);
var state_57031__$1 = state_57031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57031__$1,(22),inst_57014,inst_56962);
} else {
if((state_val_57032 === (11))){
var inst_56972 = (state_57031[(12)]);
var inst_56986 = (state_57031[(10)]);
var inst_56986__$1 = cljs.core.seq(inst_56972);
var state_57031__$1 = (function (){var statearr_57055 = state_57031;
(statearr_57055[(10)] = inst_56986__$1);

return statearr_57055;
})();
if(inst_56986__$1){
var statearr_57056_58197 = state_57031__$1;
(statearr_57056_58197[(1)] = (13));

} else {
var statearr_57057_58198 = state_57031__$1;
(statearr_57057_58198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (9))){
var inst_57008 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57058_58199 = state_57031__$1;
(statearr_57058_58199[(2)] = inst_57008);

(statearr_57058_58199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (5))){
var inst_56969 = cljs.core.deref(mults);
var inst_56970 = cljs.core.vals(inst_56969);
var inst_56971 = cljs.core.seq(inst_56970);
var inst_56972 = inst_56971;
var inst_56973 = null;
var inst_56974 = (0);
var inst_56975 = (0);
var state_57031__$1 = (function (){var statearr_57059 = state_57031;
(statearr_57059[(12)] = inst_56972);

(statearr_57059[(13)] = inst_56974);

(statearr_57059[(14)] = inst_56975);

(statearr_57059[(15)] = inst_56973);

return statearr_57059;
})();
var statearr_57060_58201 = state_57031__$1;
(statearr_57060_58201[(2)] = null);

(statearr_57060_58201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (14))){
var state_57031__$1 = state_57031;
var statearr_57064_58202 = state_57031__$1;
(statearr_57064_58202[(2)] = null);

(statearr_57064_58202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (16))){
var inst_56986 = (state_57031[(10)]);
var inst_56990 = cljs.core.chunk_first(inst_56986);
var inst_56991 = cljs.core.chunk_rest(inst_56986);
var inst_56992 = cljs.core.count(inst_56990);
var inst_56972 = inst_56991;
var inst_56973 = inst_56990;
var inst_56974 = inst_56992;
var inst_56975 = (0);
var state_57031__$1 = (function (){var statearr_57065 = state_57031;
(statearr_57065[(12)] = inst_56972);

(statearr_57065[(13)] = inst_56974);

(statearr_57065[(14)] = inst_56975);

(statearr_57065[(15)] = inst_56973);

return statearr_57065;
})();
var statearr_57066_58203 = state_57031__$1;
(statearr_57066_58203[(2)] = null);

(statearr_57066_58203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (10))){
var inst_56972 = (state_57031[(12)]);
var inst_56974 = (state_57031[(13)]);
var inst_56975 = (state_57031[(14)]);
var inst_56973 = (state_57031[(15)]);
var inst_56980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56973,inst_56975);
var inst_56981 = cljs.core.async.muxch_STAR_(inst_56980);
var inst_56982 = cljs.core.async.close_BANG_(inst_56981);
var inst_56983 = (inst_56975 + (1));
var tmp57061 = inst_56972;
var tmp57062 = inst_56974;
var tmp57063 = inst_56973;
var inst_56972__$1 = tmp57061;
var inst_56973__$1 = tmp57063;
var inst_56974__$1 = tmp57062;
var inst_56975__$1 = inst_56983;
var state_57031__$1 = (function (){var statearr_57067 = state_57031;
(statearr_57067[(12)] = inst_56972__$1);

(statearr_57067[(13)] = inst_56974__$1);

(statearr_57067[(14)] = inst_56975__$1);

(statearr_57067[(15)] = inst_56973__$1);

(statearr_57067[(17)] = inst_56982);

return statearr_57067;
})();
var statearr_57068_58211 = state_57031__$1;
(statearr_57068_58211[(2)] = null);

(statearr_57068_58211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (18))){
var inst_57001 = (state_57031[(2)]);
var state_57031__$1 = state_57031;
var statearr_57069_58212 = state_57031__$1;
(statearr_57069_58212[(2)] = inst_57001);

(statearr_57069_58212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57032 === (8))){
var inst_56974 = (state_57031[(13)]);
var inst_56975 = (state_57031[(14)]);
var inst_56977 = (inst_56975 < inst_56974);
var inst_56978 = inst_56977;
var state_57031__$1 = state_57031;
if(cljs.core.truth_(inst_56978)){
var statearr_57070_58213 = state_57031__$1;
(statearr_57070_58213[(1)] = (10));

} else {
var statearr_57071_58214 = state_57031__$1;
(statearr_57071_58214[(1)] = (11));

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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57072[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57072[(1)] = (1));

return statearr_57072;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57031){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57031);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57073){if((e57073 instanceof Object)){
var ex__55999__auto__ = e57073;
var statearr_57074_58215 = state_57031;
(statearr_57074_58215[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58216 = state_57031;
state_57031 = G__58216;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57075 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57075[(6)] = c__56096__auto___58166);

return statearr_57075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var G__57077 = arguments.length;
switch (G__57077) {
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
var G__57079 = arguments.length;
switch (G__57079) {
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
var G__57081 = arguments.length;
switch (G__57081) {
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
var c__56096__auto___58222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57120){
var state_val_57121 = (state_57120[(1)]);
if((state_val_57121 === (7))){
var state_57120__$1 = state_57120;
var statearr_57122_58223 = state_57120__$1;
(statearr_57122_58223[(2)] = null);

(statearr_57122_58223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (1))){
var state_57120__$1 = state_57120;
var statearr_57123_58224 = state_57120__$1;
(statearr_57123_58224[(2)] = null);

(statearr_57123_58224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (4))){
var inst_57084 = (state_57120[(7)]);
var inst_57086 = (inst_57084 < cnt);
var state_57120__$1 = state_57120;
if(cljs.core.truth_(inst_57086)){
var statearr_57124_58225 = state_57120__$1;
(statearr_57124_58225[(1)] = (6));

} else {
var statearr_57125_58226 = state_57120__$1;
(statearr_57125_58226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (15))){
var inst_57116 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57126_58227 = state_57120__$1;
(statearr_57126_58227[(2)] = inst_57116);

(statearr_57126_58227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (13))){
var inst_57109 = cljs.core.async.close_BANG_(out);
var state_57120__$1 = state_57120;
var statearr_57127_58228 = state_57120__$1;
(statearr_57127_58228[(2)] = inst_57109);

(statearr_57127_58228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (6))){
var state_57120__$1 = state_57120;
var statearr_57128_58229 = state_57120__$1;
(statearr_57128_58229[(2)] = null);

(statearr_57128_58229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (3))){
var inst_57118 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57120__$1,inst_57118);
} else {
if((state_val_57121 === (12))){
var inst_57106 = (state_57120[(8)]);
var inst_57106__$1 = (state_57120[(2)]);
var inst_57107 = cljs.core.some(cljs.core.nil_QMARK_,inst_57106__$1);
var state_57120__$1 = (function (){var statearr_57129 = state_57120;
(statearr_57129[(8)] = inst_57106__$1);

return statearr_57129;
})();
if(cljs.core.truth_(inst_57107)){
var statearr_57130_58234 = state_57120__$1;
(statearr_57130_58234[(1)] = (13));

} else {
var statearr_57131_58235 = state_57120__$1;
(statearr_57131_58235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (2))){
var inst_57083 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57084 = (0);
var state_57120__$1 = (function (){var statearr_57132 = state_57120;
(statearr_57132[(7)] = inst_57084);

(statearr_57132[(9)] = inst_57083);

return statearr_57132;
})();
var statearr_57133_58236 = state_57120__$1;
(statearr_57133_58236[(2)] = null);

(statearr_57133_58236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (11))){
var inst_57084 = (state_57120[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57120,(10),Object,null,(9));
var inst_57093 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57084) : chs__$1.call(null,inst_57084));
var inst_57094 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57084) : done.call(null,inst_57084));
var inst_57095 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57093,inst_57094);
var state_57120__$1 = state_57120;
var statearr_57134_58241 = state_57120__$1;
(statearr_57134_58241[(2)] = inst_57095);


cljs.core.async.impl.ioc_helpers.process_exception(state_57120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (9))){
var inst_57084 = (state_57120[(7)]);
var inst_57097 = (state_57120[(2)]);
var inst_57098 = (inst_57084 + (1));
var inst_57084__$1 = inst_57098;
var state_57120__$1 = (function (){var statearr_57135 = state_57120;
(statearr_57135[(10)] = inst_57097);

(statearr_57135[(7)] = inst_57084__$1);

return statearr_57135;
})();
var statearr_57136_58244 = state_57120__$1;
(statearr_57136_58244[(2)] = null);

(statearr_57136_58244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (5))){
var inst_57104 = (state_57120[(2)]);
var state_57120__$1 = (function (){var statearr_57137 = state_57120;
(statearr_57137[(11)] = inst_57104);

return statearr_57137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57120__$1,(12),dchan);
} else {
if((state_val_57121 === (14))){
var inst_57106 = (state_57120[(8)]);
var inst_57111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57106);
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57120__$1,(16),out,inst_57111);
} else {
if((state_val_57121 === (16))){
var inst_57113 = (state_57120[(2)]);
var state_57120__$1 = (function (){var statearr_57138 = state_57120;
(statearr_57138[(12)] = inst_57113);

return statearr_57138;
})();
var statearr_57139_58245 = state_57120__$1;
(statearr_57139_58245[(2)] = null);

(statearr_57139_58245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (10))){
var inst_57088 = (state_57120[(2)]);
var inst_57089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57120__$1 = (function (){var statearr_57140 = state_57120;
(statearr_57140[(13)] = inst_57088);

return statearr_57140;
})();
var statearr_57141_58246 = state_57120__$1;
(statearr_57141_58246[(2)] = inst_57089);


cljs.core.async.impl.ioc_helpers.process_exception(state_57120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (8))){
var inst_57102 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57142_58247 = state_57120__$1;
(statearr_57142_58247[(2)] = inst_57102);

(statearr_57142_58247[(1)] = (5));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57143[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57143[(1)] = (1));

return statearr_57143;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57120){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57120);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57144){if((e57144 instanceof Object)){
var ex__55999__auto__ = e57144;
var statearr_57145_58248 = state_57120;
(statearr_57145_58248[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58249 = state_57120;
state_57120 = G__58249;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57146 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57146[(6)] = c__56096__auto___58222);

return statearr_57146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var G__57149 = arguments.length;
switch (G__57149) {
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
var c__56096__auto___58253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57181){
var state_val_57182 = (state_57181[(1)]);
if((state_val_57182 === (7))){
var inst_57160 = (state_57181[(7)]);
var inst_57161 = (state_57181[(8)]);
var inst_57160__$1 = (state_57181[(2)]);
var inst_57161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57160__$1,(0),null);
var inst_57162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57160__$1,(1),null);
var inst_57163 = (inst_57161__$1 == null);
var state_57181__$1 = (function (){var statearr_57183 = state_57181;
(statearr_57183[(9)] = inst_57162);

(statearr_57183[(7)] = inst_57160__$1);

(statearr_57183[(8)] = inst_57161__$1);

return statearr_57183;
})();
if(cljs.core.truth_(inst_57163)){
var statearr_57184_58256 = state_57181__$1;
(statearr_57184_58256[(1)] = (8));

} else {
var statearr_57185_58257 = state_57181__$1;
(statearr_57185_58257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (1))){
var inst_57150 = cljs.core.vec(chs);
var inst_57151 = inst_57150;
var state_57181__$1 = (function (){var statearr_57186 = state_57181;
(statearr_57186[(10)] = inst_57151);

return statearr_57186;
})();
var statearr_57187_58258 = state_57181__$1;
(statearr_57187_58258[(2)] = null);

(statearr_57187_58258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (4))){
var inst_57151 = (state_57181[(10)]);
var state_57181__$1 = state_57181;
return cljs.core.async.ioc_alts_BANG_(state_57181__$1,(7),inst_57151);
} else {
if((state_val_57182 === (6))){
var inst_57177 = (state_57181[(2)]);
var state_57181__$1 = state_57181;
var statearr_57188_58259 = state_57181__$1;
(statearr_57188_58259[(2)] = inst_57177);

(statearr_57188_58259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (3))){
var inst_57179 = (state_57181[(2)]);
var state_57181__$1 = state_57181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57181__$1,inst_57179);
} else {
if((state_val_57182 === (2))){
var inst_57151 = (state_57181[(10)]);
var inst_57153 = cljs.core.count(inst_57151);
var inst_57154 = (inst_57153 > (0));
var state_57181__$1 = state_57181;
if(cljs.core.truth_(inst_57154)){
var statearr_57190_58260 = state_57181__$1;
(statearr_57190_58260[(1)] = (4));

} else {
var statearr_57191_58261 = state_57181__$1;
(statearr_57191_58261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (11))){
var inst_57151 = (state_57181[(10)]);
var inst_57170 = (state_57181[(2)]);
var tmp57189 = inst_57151;
var inst_57151__$1 = tmp57189;
var state_57181__$1 = (function (){var statearr_57192 = state_57181;
(statearr_57192[(11)] = inst_57170);

(statearr_57192[(10)] = inst_57151__$1);

return statearr_57192;
})();
var statearr_57193_58262 = state_57181__$1;
(statearr_57193_58262[(2)] = null);

(statearr_57193_58262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (9))){
var inst_57161 = (state_57181[(8)]);
var state_57181__$1 = state_57181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57181__$1,(11),out,inst_57161);
} else {
if((state_val_57182 === (5))){
var inst_57175 = cljs.core.async.close_BANG_(out);
var state_57181__$1 = state_57181;
var statearr_57194_58264 = state_57181__$1;
(statearr_57194_58264[(2)] = inst_57175);

(statearr_57194_58264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (10))){
var inst_57173 = (state_57181[(2)]);
var state_57181__$1 = state_57181;
var statearr_57195_58265 = state_57181__$1;
(statearr_57195_58265[(2)] = inst_57173);

(statearr_57195_58265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57182 === (8))){
var inst_57162 = (state_57181[(9)]);
var inst_57160 = (state_57181[(7)]);
var inst_57161 = (state_57181[(8)]);
var inst_57151 = (state_57181[(10)]);
var inst_57165 = (function (){var cs = inst_57151;
var vec__57156 = inst_57160;
var v = inst_57161;
var c = inst_57162;
return (function (p1__57147_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57147_SHARP_);
});
})();
var inst_57166 = cljs.core.filterv(inst_57165,inst_57151);
var inst_57151__$1 = inst_57166;
var state_57181__$1 = (function (){var statearr_57196 = state_57181;
(statearr_57196[(10)] = inst_57151__$1);

return statearr_57196;
})();
var statearr_57197_58266 = state_57181__$1;
(statearr_57197_58266[(2)] = null);

(statearr_57197_58266[(1)] = (2));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57198[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57198[(1)] = (1));

return statearr_57198;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57181){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57181);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57199){if((e57199 instanceof Object)){
var ex__55999__auto__ = e57199;
var statearr_57200_58268 = state_57181;
(statearr_57200_58268[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57199;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58269 = state_57181;
state_57181 = G__58269;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57201 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57201[(6)] = c__56096__auto___58253);

return statearr_57201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
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
var G__57203 = arguments.length;
switch (G__57203) {
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
var c__56096__auto___58275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57227){
var state_val_57228 = (state_57227[(1)]);
if((state_val_57228 === (7))){
var inst_57209 = (state_57227[(7)]);
var inst_57209__$1 = (state_57227[(2)]);
var inst_57210 = (inst_57209__$1 == null);
var inst_57211 = cljs.core.not(inst_57210);
var state_57227__$1 = (function (){var statearr_57229 = state_57227;
(statearr_57229[(7)] = inst_57209__$1);

return statearr_57229;
})();
if(inst_57211){
var statearr_57230_58276 = state_57227__$1;
(statearr_57230_58276[(1)] = (8));

} else {
var statearr_57231_58277 = state_57227__$1;
(statearr_57231_58277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (1))){
var inst_57204 = (0);
var state_57227__$1 = (function (){var statearr_57232 = state_57227;
(statearr_57232[(8)] = inst_57204);

return statearr_57232;
})();
var statearr_57233_58282 = state_57227__$1;
(statearr_57233_58282[(2)] = null);

(statearr_57233_58282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (4))){
var state_57227__$1 = state_57227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57227__$1,(7),ch);
} else {
if((state_val_57228 === (6))){
var inst_57222 = (state_57227[(2)]);
var state_57227__$1 = state_57227;
var statearr_57234_58286 = state_57227__$1;
(statearr_57234_58286[(2)] = inst_57222);

(statearr_57234_58286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (3))){
var inst_57224 = (state_57227[(2)]);
var inst_57225 = cljs.core.async.close_BANG_(out);
var state_57227__$1 = (function (){var statearr_57235 = state_57227;
(statearr_57235[(9)] = inst_57224);

return statearr_57235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57227__$1,inst_57225);
} else {
if((state_val_57228 === (2))){
var inst_57204 = (state_57227[(8)]);
var inst_57206 = (inst_57204 < n);
var state_57227__$1 = state_57227;
if(cljs.core.truth_(inst_57206)){
var statearr_57236_58287 = state_57227__$1;
(statearr_57236_58287[(1)] = (4));

} else {
var statearr_57237_58288 = state_57227__$1;
(statearr_57237_58288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (11))){
var inst_57204 = (state_57227[(8)]);
var inst_57214 = (state_57227[(2)]);
var inst_57215 = (inst_57204 + (1));
var inst_57204__$1 = inst_57215;
var state_57227__$1 = (function (){var statearr_57238 = state_57227;
(statearr_57238[(8)] = inst_57204__$1);

(statearr_57238[(10)] = inst_57214);

return statearr_57238;
})();
var statearr_57239_58289 = state_57227__$1;
(statearr_57239_58289[(2)] = null);

(statearr_57239_58289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (9))){
var state_57227__$1 = state_57227;
var statearr_57240_58293 = state_57227__$1;
(statearr_57240_58293[(2)] = null);

(statearr_57240_58293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (5))){
var state_57227__$1 = state_57227;
var statearr_57241_58294 = state_57227__$1;
(statearr_57241_58294[(2)] = null);

(statearr_57241_58294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (10))){
var inst_57219 = (state_57227[(2)]);
var state_57227__$1 = state_57227;
var statearr_57242_58295 = state_57227__$1;
(statearr_57242_58295[(2)] = inst_57219);

(statearr_57242_58295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (8))){
var inst_57209 = (state_57227[(7)]);
var state_57227__$1 = state_57227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57227__$1,(11),out,inst_57209);
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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57243[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57243[(1)] = (1));

return statearr_57243;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57227){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57227);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57244){if((e57244 instanceof Object)){
var ex__55999__auto__ = e57244;
var statearr_57245_58302 = state_57227;
(statearr_57245_58302[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58303 = state_57227;
state_57227 = G__58303;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57246 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57246[(6)] = c__56096__auto___58275);

return statearr_57246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57248 = (function (f,ch,meta57249){
this.f = f;
this.ch = ch;
this.meta57249 = meta57249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57250,meta57249__$1){
var self__ = this;
var _57250__$1 = this;
return (new cljs.core.async.t_cljs$core$async57248(self__.f,self__.ch,meta57249__$1));
}));

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57250){
var self__ = this;
var _57250__$1 = this;
return self__.meta57249;
}));

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57251 = (function (f,ch,meta57249,_,fn1,meta57252){
this.f = f;
this.ch = ch;
this.meta57249 = meta57249;
this._ = _;
this.fn1 = fn1;
this.meta57252 = meta57252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57253,meta57252__$1){
var self__ = this;
var _57253__$1 = this;
return (new cljs.core.async.t_cljs$core$async57251(self__.f,self__.ch,self__.meta57249,self__._,self__.fn1,meta57252__$1));
}));

(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57253){
var self__ = this;
var _57253__$1 = this;
return self__.meta57252;
}));

(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57247_SHARP_){
var G__57254 = (((p1__57247_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57247_SHARP_) : self__.f.call(null,p1__57247_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57254) : f1.call(null,G__57254));
});
}));

(cljs.core.async.t_cljs$core$async57251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57249","meta57249",-11038144,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57248","cljs.core.async/t_cljs$core$async57248",-751439762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57252","meta57252",-998619750,null)], null);
}));

(cljs.core.async.t_cljs$core$async57251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57251");

(cljs.core.async.t_cljs$core$async57251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57251.
 */
cljs.core.async.__GT_t_cljs$core$async57251 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57251(f__$1,ch__$1,meta57249__$1,___$2,fn1__$1,meta57252){
return (new cljs.core.async.t_cljs$core$async57251(f__$1,ch__$1,meta57249__$1,___$2,fn1__$1,meta57252));
});

}

return (new cljs.core.async.t_cljs$core$async57251(self__.f,self__.ch,self__.meta57249,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57255 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57255) : self__.f.call(null,G__57255));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57249","meta57249",-11038144,null)], null);
}));

(cljs.core.async.t_cljs$core$async57248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57248");

(cljs.core.async.t_cljs$core$async57248.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57248.
 */
cljs.core.async.__GT_t_cljs$core$async57248 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57248(f__$1,ch__$1,meta57249){
return (new cljs.core.async.t_cljs$core$async57248(f__$1,ch__$1,meta57249));
});

}

return (new cljs.core.async.t_cljs$core$async57248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57256 = (function (f,ch,meta57257){
this.f = f;
this.ch = ch;
this.meta57257 = meta57257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57258,meta57257__$1){
var self__ = this;
var _57258__$1 = this;
return (new cljs.core.async.t_cljs$core$async57256(self__.f,self__.ch,meta57257__$1));
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57258){
var self__ = this;
var _57258__$1 = this;
return self__.meta57257;
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57257","meta57257",114194212,null)], null);
}));

(cljs.core.async.t_cljs$core$async57256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57256");

(cljs.core.async.t_cljs$core$async57256.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57256.
 */
cljs.core.async.__GT_t_cljs$core$async57256 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57256(f__$1,ch__$1,meta57257){
return (new cljs.core.async.t_cljs$core$async57256(f__$1,ch__$1,meta57257));
});

}

return (new cljs.core.async.t_cljs$core$async57256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57259 = (function (p,ch,meta57260){
this.p = p;
this.ch = ch;
this.meta57260 = meta57260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57261,meta57260__$1){
var self__ = this;
var _57261__$1 = this;
return (new cljs.core.async.t_cljs$core$async57259(self__.p,self__.ch,meta57260__$1));
}));

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57261){
var self__ = this;
var _57261__$1 = this;
return self__.meta57260;
}));

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57260","meta57260",792432174,null)], null);
}));

(cljs.core.async.t_cljs$core$async57259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57259");

(cljs.core.async.t_cljs$core$async57259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57259.
 */
cljs.core.async.__GT_t_cljs$core$async57259 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57259(p__$1,ch__$1,meta57260){
return (new cljs.core.async.t_cljs$core$async57259(p__$1,ch__$1,meta57260));
});

}

return (new cljs.core.async.t_cljs$core$async57259(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57263 = arguments.length;
switch (G__57263) {
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
var c__56096__auto___58327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57284){
var state_val_57285 = (state_57284[(1)]);
if((state_val_57285 === (7))){
var inst_57280 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57286_58328 = state_57284__$1;
(statearr_57286_58328[(2)] = inst_57280);

(statearr_57286_58328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (1))){
var state_57284__$1 = state_57284;
var statearr_57287_58329 = state_57284__$1;
(statearr_57287_58329[(2)] = null);

(statearr_57287_58329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (4))){
var inst_57266 = (state_57284[(7)]);
var inst_57266__$1 = (state_57284[(2)]);
var inst_57267 = (inst_57266__$1 == null);
var state_57284__$1 = (function (){var statearr_57288 = state_57284;
(statearr_57288[(7)] = inst_57266__$1);

return statearr_57288;
})();
if(cljs.core.truth_(inst_57267)){
var statearr_57289_58330 = state_57284__$1;
(statearr_57289_58330[(1)] = (5));

} else {
var statearr_57290_58331 = state_57284__$1;
(statearr_57290_58331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (6))){
var inst_57266 = (state_57284[(7)]);
var inst_57271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57266) : p.call(null,inst_57266));
var state_57284__$1 = state_57284;
if(cljs.core.truth_(inst_57271)){
var statearr_57291_58332 = state_57284__$1;
(statearr_57291_58332[(1)] = (8));

} else {
var statearr_57292_58333 = state_57284__$1;
(statearr_57292_58333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (3))){
var inst_57282 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57284__$1,inst_57282);
} else {
if((state_val_57285 === (2))){
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57284__$1,(4),ch);
} else {
if((state_val_57285 === (11))){
var inst_57274 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57293_58334 = state_57284__$1;
(statearr_57293_58334[(2)] = inst_57274);

(statearr_57293_58334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (9))){
var state_57284__$1 = state_57284;
var statearr_57294_58335 = state_57284__$1;
(statearr_57294_58335[(2)] = null);

(statearr_57294_58335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (5))){
var inst_57269 = cljs.core.async.close_BANG_(out);
var state_57284__$1 = state_57284;
var statearr_57295_58337 = state_57284__$1;
(statearr_57295_58337[(2)] = inst_57269);

(statearr_57295_58337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (10))){
var inst_57277 = (state_57284[(2)]);
var state_57284__$1 = (function (){var statearr_57296 = state_57284;
(statearr_57296[(8)] = inst_57277);

return statearr_57296;
})();
var statearr_57297_58343 = state_57284__$1;
(statearr_57297_58343[(2)] = null);

(statearr_57297_58343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (8))){
var inst_57266 = (state_57284[(7)]);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57284__$1,(11),out,inst_57266);
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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57298 = [null,null,null,null,null,null,null,null,null];
(statearr_57298[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57298[(1)] = (1));

return statearr_57298;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57284){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57284);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57299){if((e57299 instanceof Object)){
var ex__55999__auto__ = e57299;
var statearr_57300_58344 = state_57284;
(statearr_57300_58344[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58345 = state_57284;
state_57284 = G__58345;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57301 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57301[(6)] = c__56096__auto___58327);

return statearr_57301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57303 = arguments.length;
switch (G__57303) {
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
var c__56096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57365){
var state_val_57366 = (state_57365[(1)]);
if((state_val_57366 === (7))){
var inst_57361 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
var statearr_57367_58347 = state_57365__$1;
(statearr_57367_58347[(2)] = inst_57361);

(statearr_57367_58347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (20))){
var inst_57331 = (state_57365[(7)]);
var inst_57342 = (state_57365[(2)]);
var inst_57343 = cljs.core.next(inst_57331);
var inst_57317 = inst_57343;
var inst_57318 = null;
var inst_57319 = (0);
var inst_57320 = (0);
var state_57365__$1 = (function (){var statearr_57368 = state_57365;
(statearr_57368[(8)] = inst_57318);

(statearr_57368[(9)] = inst_57320);

(statearr_57368[(10)] = inst_57319);

(statearr_57368[(11)] = inst_57342);

(statearr_57368[(12)] = inst_57317);

return statearr_57368;
})();
var statearr_57369_58348 = state_57365__$1;
(statearr_57369_58348[(2)] = null);

(statearr_57369_58348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (1))){
var state_57365__$1 = state_57365;
var statearr_57370_58349 = state_57365__$1;
(statearr_57370_58349[(2)] = null);

(statearr_57370_58349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (4))){
var inst_57306 = (state_57365[(13)]);
var inst_57306__$1 = (state_57365[(2)]);
var inst_57307 = (inst_57306__$1 == null);
var state_57365__$1 = (function (){var statearr_57371 = state_57365;
(statearr_57371[(13)] = inst_57306__$1);

return statearr_57371;
})();
if(cljs.core.truth_(inst_57307)){
var statearr_57372_58350 = state_57365__$1;
(statearr_57372_58350[(1)] = (5));

} else {
var statearr_57373_58351 = state_57365__$1;
(statearr_57373_58351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (15))){
var state_57365__$1 = state_57365;
var statearr_57377_58352 = state_57365__$1;
(statearr_57377_58352[(2)] = null);

(statearr_57377_58352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (21))){
var state_57365__$1 = state_57365;
var statearr_57378_58353 = state_57365__$1;
(statearr_57378_58353[(2)] = null);

(statearr_57378_58353[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (13))){
var inst_57318 = (state_57365[(8)]);
var inst_57320 = (state_57365[(9)]);
var inst_57319 = (state_57365[(10)]);
var inst_57317 = (state_57365[(12)]);
var inst_57327 = (state_57365[(2)]);
var inst_57328 = (inst_57320 + (1));
var tmp57374 = inst_57318;
var tmp57375 = inst_57319;
var tmp57376 = inst_57317;
var inst_57317__$1 = tmp57376;
var inst_57318__$1 = tmp57374;
var inst_57319__$1 = tmp57375;
var inst_57320__$1 = inst_57328;
var state_57365__$1 = (function (){var statearr_57379 = state_57365;
(statearr_57379[(8)] = inst_57318__$1);

(statearr_57379[(9)] = inst_57320__$1);

(statearr_57379[(14)] = inst_57327);

(statearr_57379[(10)] = inst_57319__$1);

(statearr_57379[(12)] = inst_57317__$1);

return statearr_57379;
})();
var statearr_57380_58360 = state_57365__$1;
(statearr_57380_58360[(2)] = null);

(statearr_57380_58360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (22))){
var state_57365__$1 = state_57365;
var statearr_57381_58361 = state_57365__$1;
(statearr_57381_58361[(2)] = null);

(statearr_57381_58361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (6))){
var inst_57306 = (state_57365[(13)]);
var inst_57315 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57306) : f.call(null,inst_57306));
var inst_57316 = cljs.core.seq(inst_57315);
var inst_57317 = inst_57316;
var inst_57318 = null;
var inst_57319 = (0);
var inst_57320 = (0);
var state_57365__$1 = (function (){var statearr_57382 = state_57365;
(statearr_57382[(8)] = inst_57318);

(statearr_57382[(9)] = inst_57320);

(statearr_57382[(10)] = inst_57319);

(statearr_57382[(12)] = inst_57317);

return statearr_57382;
})();
var statearr_57383_58362 = state_57365__$1;
(statearr_57383_58362[(2)] = null);

(statearr_57383_58362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (17))){
var inst_57331 = (state_57365[(7)]);
var inst_57335 = cljs.core.chunk_first(inst_57331);
var inst_57336 = cljs.core.chunk_rest(inst_57331);
var inst_57337 = cljs.core.count(inst_57335);
var inst_57317 = inst_57336;
var inst_57318 = inst_57335;
var inst_57319 = inst_57337;
var inst_57320 = (0);
var state_57365__$1 = (function (){var statearr_57384 = state_57365;
(statearr_57384[(8)] = inst_57318);

(statearr_57384[(9)] = inst_57320);

(statearr_57384[(10)] = inst_57319);

(statearr_57384[(12)] = inst_57317);

return statearr_57384;
})();
var statearr_57385_58363 = state_57365__$1;
(statearr_57385_58363[(2)] = null);

(statearr_57385_58363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (3))){
var inst_57363 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57365__$1,inst_57363);
} else {
if((state_val_57366 === (12))){
var inst_57351 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
var statearr_57386_58364 = state_57365__$1;
(statearr_57386_58364[(2)] = inst_57351);

(statearr_57386_58364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (2))){
var state_57365__$1 = state_57365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57365__$1,(4),in$);
} else {
if((state_val_57366 === (23))){
var inst_57359 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
var statearr_57387_58368 = state_57365__$1;
(statearr_57387_58368[(2)] = inst_57359);

(statearr_57387_58368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (19))){
var inst_57346 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
var statearr_57388_58369 = state_57365__$1;
(statearr_57388_58369[(2)] = inst_57346);

(statearr_57388_58369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (11))){
var inst_57331 = (state_57365[(7)]);
var inst_57317 = (state_57365[(12)]);
var inst_57331__$1 = cljs.core.seq(inst_57317);
var state_57365__$1 = (function (){var statearr_57389 = state_57365;
(statearr_57389[(7)] = inst_57331__$1);

return statearr_57389;
})();
if(inst_57331__$1){
var statearr_57390_58370 = state_57365__$1;
(statearr_57390_58370[(1)] = (14));

} else {
var statearr_57391_58371 = state_57365__$1;
(statearr_57391_58371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (9))){
var inst_57353 = (state_57365[(2)]);
var inst_57354 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57365__$1 = (function (){var statearr_57392 = state_57365;
(statearr_57392[(15)] = inst_57353);

return statearr_57392;
})();
if(cljs.core.truth_(inst_57354)){
var statearr_57393_58372 = state_57365__$1;
(statearr_57393_58372[(1)] = (21));

} else {
var statearr_57394_58373 = state_57365__$1;
(statearr_57394_58373[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (5))){
var inst_57309 = cljs.core.async.close_BANG_(out);
var state_57365__$1 = state_57365;
var statearr_57395_58374 = state_57365__$1;
(statearr_57395_58374[(2)] = inst_57309);

(statearr_57395_58374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (14))){
var inst_57331 = (state_57365[(7)]);
var inst_57333 = cljs.core.chunked_seq_QMARK_(inst_57331);
var state_57365__$1 = state_57365;
if(inst_57333){
var statearr_57396_58378 = state_57365__$1;
(statearr_57396_58378[(1)] = (17));

} else {
var statearr_57397_58379 = state_57365__$1;
(statearr_57397_58379[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (16))){
var inst_57349 = (state_57365[(2)]);
var state_57365__$1 = state_57365;
var statearr_57398_58382 = state_57365__$1;
(statearr_57398_58382[(2)] = inst_57349);

(statearr_57398_58382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57366 === (10))){
var inst_57318 = (state_57365[(8)]);
var inst_57320 = (state_57365[(9)]);
var inst_57325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57318,inst_57320);
var state_57365__$1 = state_57365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57365__$1,(13),out,inst_57325);
} else {
if((state_val_57366 === (18))){
var inst_57331 = (state_57365[(7)]);
var inst_57340 = cljs.core.first(inst_57331);
var state_57365__$1 = state_57365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57365__$1,(20),out,inst_57340);
} else {
if((state_val_57366 === (8))){
var inst_57320 = (state_57365[(9)]);
var inst_57319 = (state_57365[(10)]);
var inst_57322 = (inst_57320 < inst_57319);
var inst_57323 = inst_57322;
var state_57365__$1 = state_57365;
if(cljs.core.truth_(inst_57323)){
var statearr_57399_58383 = state_57365__$1;
(statearr_57399_58383[(1)] = (10));

} else {
var statearr_57400_58384 = state_57365__$1;
(statearr_57400_58384[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____0 = (function (){
var statearr_57401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57401[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__);

(statearr_57401[(1)] = (1));

return statearr_57401;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____1 = (function (state_57365){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57365);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57402){if((e57402 instanceof Object)){
var ex__55999__auto__ = e57402;
var statearr_57403_58387 = state_57365;
(statearr_57403_58387[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58388 = state_57365;
state_57365 = G__58388;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__ = function(state_57365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____1.call(this,state_57365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55996__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57404 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57404[(6)] = c__56096__auto__);

return statearr_57404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

return c__56096__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57406 = arguments.length;
switch (G__57406) {
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
var G__57408 = arguments.length;
switch (G__57408) {
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
var G__57410 = arguments.length;
switch (G__57410) {
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
var c__56096__auto___58403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57434){
var state_val_57435 = (state_57434[(1)]);
if((state_val_57435 === (7))){
var inst_57429 = (state_57434[(2)]);
var state_57434__$1 = state_57434;
var statearr_57436_58406 = state_57434__$1;
(statearr_57436_58406[(2)] = inst_57429);

(statearr_57436_58406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (1))){
var inst_57411 = null;
var state_57434__$1 = (function (){var statearr_57437 = state_57434;
(statearr_57437[(7)] = inst_57411);

return statearr_57437;
})();
var statearr_57438_58408 = state_57434__$1;
(statearr_57438_58408[(2)] = null);

(statearr_57438_58408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (4))){
var inst_57414 = (state_57434[(8)]);
var inst_57414__$1 = (state_57434[(2)]);
var inst_57415 = (inst_57414__$1 == null);
var inst_57416 = cljs.core.not(inst_57415);
var state_57434__$1 = (function (){var statearr_57439 = state_57434;
(statearr_57439[(8)] = inst_57414__$1);

return statearr_57439;
})();
if(inst_57416){
var statearr_57440_58409 = state_57434__$1;
(statearr_57440_58409[(1)] = (5));

} else {
var statearr_57441_58410 = state_57434__$1;
(statearr_57441_58410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (6))){
var state_57434__$1 = state_57434;
var statearr_57442_58411 = state_57434__$1;
(statearr_57442_58411[(2)] = null);

(statearr_57442_58411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (3))){
var inst_57431 = (state_57434[(2)]);
var inst_57432 = cljs.core.async.close_BANG_(out);
var state_57434__$1 = (function (){var statearr_57443 = state_57434;
(statearr_57443[(9)] = inst_57431);

return statearr_57443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57434__$1,inst_57432);
} else {
if((state_val_57435 === (2))){
var state_57434__$1 = state_57434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57434__$1,(4),ch);
} else {
if((state_val_57435 === (11))){
var inst_57414 = (state_57434[(8)]);
var inst_57423 = (state_57434[(2)]);
var inst_57411 = inst_57414;
var state_57434__$1 = (function (){var statearr_57444 = state_57434;
(statearr_57444[(10)] = inst_57423);

(statearr_57444[(7)] = inst_57411);

return statearr_57444;
})();
var statearr_57445_58412 = state_57434__$1;
(statearr_57445_58412[(2)] = null);

(statearr_57445_58412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (9))){
var inst_57414 = (state_57434[(8)]);
var state_57434__$1 = state_57434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57434__$1,(11),out,inst_57414);
} else {
if((state_val_57435 === (5))){
var inst_57414 = (state_57434[(8)]);
var inst_57411 = (state_57434[(7)]);
var inst_57418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57414,inst_57411);
var state_57434__$1 = state_57434;
if(inst_57418){
var statearr_57447_58413 = state_57434__$1;
(statearr_57447_58413[(1)] = (8));

} else {
var statearr_57448_58414 = state_57434__$1;
(statearr_57448_58414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (10))){
var inst_57426 = (state_57434[(2)]);
var state_57434__$1 = state_57434;
var statearr_57449_58415 = state_57434__$1;
(statearr_57449_58415[(2)] = inst_57426);

(statearr_57449_58415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57435 === (8))){
var inst_57411 = (state_57434[(7)]);
var tmp57446 = inst_57411;
var inst_57411__$1 = tmp57446;
var state_57434__$1 = (function (){var statearr_57450 = state_57434;
(statearr_57450[(7)] = inst_57411__$1);

return statearr_57450;
})();
var statearr_57451_58416 = state_57434__$1;
(statearr_57451_58416[(2)] = null);

(statearr_57451_58416[(1)] = (2));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57452[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57452[(1)] = (1));

return statearr_57452;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57434){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57434);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57453){if((e57453 instanceof Object)){
var ex__55999__auto__ = e57453;
var statearr_57454_58417 = state_57434;
(statearr_57454_58417[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58418 = state_57434;
state_57434 = G__58418;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57455 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57455[(6)] = c__56096__auto___58403);

return statearr_57455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57457 = arguments.length;
switch (G__57457) {
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
var c__56096__auto___58422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57495){
var state_val_57496 = (state_57495[(1)]);
if((state_val_57496 === (7))){
var inst_57491 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57497_58423 = state_57495__$1;
(statearr_57497_58423[(2)] = inst_57491);

(statearr_57497_58423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (1))){
var inst_57458 = (new Array(n));
var inst_57459 = inst_57458;
var inst_57460 = (0);
var state_57495__$1 = (function (){var statearr_57498 = state_57495;
(statearr_57498[(7)] = inst_57459);

(statearr_57498[(8)] = inst_57460);

return statearr_57498;
})();
var statearr_57499_58425 = state_57495__$1;
(statearr_57499_58425[(2)] = null);

(statearr_57499_58425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (4))){
var inst_57463 = (state_57495[(9)]);
var inst_57463__$1 = (state_57495[(2)]);
var inst_57464 = (inst_57463__$1 == null);
var inst_57465 = cljs.core.not(inst_57464);
var state_57495__$1 = (function (){var statearr_57500 = state_57495;
(statearr_57500[(9)] = inst_57463__$1);

return statearr_57500;
})();
if(inst_57465){
var statearr_57501_58427 = state_57495__$1;
(statearr_57501_58427[(1)] = (5));

} else {
var statearr_57502_58428 = state_57495__$1;
(statearr_57502_58428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (15))){
var inst_57485 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57503_58429 = state_57495__$1;
(statearr_57503_58429[(2)] = inst_57485);

(statearr_57503_58429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (13))){
var state_57495__$1 = state_57495;
var statearr_57504_58430 = state_57495__$1;
(statearr_57504_58430[(2)] = null);

(statearr_57504_58430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (6))){
var inst_57460 = (state_57495[(8)]);
var inst_57481 = (inst_57460 > (0));
var state_57495__$1 = state_57495;
if(cljs.core.truth_(inst_57481)){
var statearr_57505_58432 = state_57495__$1;
(statearr_57505_58432[(1)] = (12));

} else {
var statearr_57506_58433 = state_57495__$1;
(statearr_57506_58433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (3))){
var inst_57493 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57495__$1,inst_57493);
} else {
if((state_val_57496 === (12))){
var inst_57459 = (state_57495[(7)]);
var inst_57483 = cljs.core.vec(inst_57459);
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57495__$1,(15),out,inst_57483);
} else {
if((state_val_57496 === (2))){
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57495__$1,(4),ch);
} else {
if((state_val_57496 === (11))){
var inst_57475 = (state_57495[(2)]);
var inst_57476 = (new Array(n));
var inst_57459 = inst_57476;
var inst_57460 = (0);
var state_57495__$1 = (function (){var statearr_57507 = state_57495;
(statearr_57507[(10)] = inst_57475);

(statearr_57507[(7)] = inst_57459);

(statearr_57507[(8)] = inst_57460);

return statearr_57507;
})();
var statearr_57508_58434 = state_57495__$1;
(statearr_57508_58434[(2)] = null);

(statearr_57508_58434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (9))){
var inst_57459 = (state_57495[(7)]);
var inst_57473 = cljs.core.vec(inst_57459);
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57495__$1,(11),out,inst_57473);
} else {
if((state_val_57496 === (5))){
var inst_57463 = (state_57495[(9)]);
var inst_57468 = (state_57495[(11)]);
var inst_57459 = (state_57495[(7)]);
var inst_57460 = (state_57495[(8)]);
var inst_57467 = (inst_57459[inst_57460] = inst_57463);
var inst_57468__$1 = (inst_57460 + (1));
var inst_57469 = (inst_57468__$1 < n);
var state_57495__$1 = (function (){var statearr_57509 = state_57495;
(statearr_57509[(12)] = inst_57467);

(statearr_57509[(11)] = inst_57468__$1);

return statearr_57509;
})();
if(cljs.core.truth_(inst_57469)){
var statearr_57510_58438 = state_57495__$1;
(statearr_57510_58438[(1)] = (8));

} else {
var statearr_57511_58439 = state_57495__$1;
(statearr_57511_58439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (14))){
var inst_57488 = (state_57495[(2)]);
var inst_57489 = cljs.core.async.close_BANG_(out);
var state_57495__$1 = (function (){var statearr_57513 = state_57495;
(statearr_57513[(13)] = inst_57488);

return statearr_57513;
})();
var statearr_57514_58440 = state_57495__$1;
(statearr_57514_58440[(2)] = inst_57489);

(statearr_57514_58440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (10))){
var inst_57479 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57515_58441 = state_57495__$1;
(statearr_57515_58441[(2)] = inst_57479);

(statearr_57515_58441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (8))){
var inst_57468 = (state_57495[(11)]);
var inst_57459 = (state_57495[(7)]);
var tmp57512 = inst_57459;
var inst_57459__$1 = tmp57512;
var inst_57460 = inst_57468;
var state_57495__$1 = (function (){var statearr_57516 = state_57495;
(statearr_57516[(7)] = inst_57459__$1);

(statearr_57516[(8)] = inst_57460);

return statearr_57516;
})();
var statearr_57517_58443 = state_57495__$1;
(statearr_57517_58443[(2)] = null);

(statearr_57517_58443[(1)] = (2));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57518[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57518[(1)] = (1));

return statearr_57518;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57495){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57495);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57519){if((e57519 instanceof Object)){
var ex__55999__auto__ = e57519;
var statearr_57520_58455 = state_57495;
(statearr_57520_58455[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58457 = state_57495;
state_57495 = G__58457;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57521 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57521[(6)] = c__56096__auto___58422);

return statearr_57521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57523 = arguments.length;
switch (G__57523) {
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
var c__56096__auto___58467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_57565){
var state_val_57566 = (state_57565[(1)]);
if((state_val_57566 === (7))){
var inst_57561 = (state_57565[(2)]);
var state_57565__$1 = state_57565;
var statearr_57567_58469 = state_57565__$1;
(statearr_57567_58469[(2)] = inst_57561);

(statearr_57567_58469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (1))){
var inst_57524 = [];
var inst_57525 = inst_57524;
var inst_57526 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57565__$1 = (function (){var statearr_57568 = state_57565;
(statearr_57568[(7)] = inst_57526);

(statearr_57568[(8)] = inst_57525);

return statearr_57568;
})();
var statearr_57569_58470 = state_57565__$1;
(statearr_57569_58470[(2)] = null);

(statearr_57569_58470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (4))){
var inst_57529 = (state_57565[(9)]);
var inst_57529__$1 = (state_57565[(2)]);
var inst_57530 = (inst_57529__$1 == null);
var inst_57531 = cljs.core.not(inst_57530);
var state_57565__$1 = (function (){var statearr_57570 = state_57565;
(statearr_57570[(9)] = inst_57529__$1);

return statearr_57570;
})();
if(inst_57531){
var statearr_57571_58471 = state_57565__$1;
(statearr_57571_58471[(1)] = (5));

} else {
var statearr_57572_58472 = state_57565__$1;
(statearr_57572_58472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (15))){
var inst_57555 = (state_57565[(2)]);
var state_57565__$1 = state_57565;
var statearr_57573_58473 = state_57565__$1;
(statearr_57573_58473[(2)] = inst_57555);

(statearr_57573_58473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (13))){
var state_57565__$1 = state_57565;
var statearr_57574_58475 = state_57565__$1;
(statearr_57574_58475[(2)] = null);

(statearr_57574_58475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (6))){
var inst_57525 = (state_57565[(8)]);
var inst_57550 = inst_57525.length;
var inst_57551 = (inst_57550 > (0));
var state_57565__$1 = state_57565;
if(cljs.core.truth_(inst_57551)){
var statearr_57575_58476 = state_57565__$1;
(statearr_57575_58476[(1)] = (12));

} else {
var statearr_57576_58477 = state_57565__$1;
(statearr_57576_58477[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (3))){
var inst_57563 = (state_57565[(2)]);
var state_57565__$1 = state_57565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57565__$1,inst_57563);
} else {
if((state_val_57566 === (12))){
var inst_57525 = (state_57565[(8)]);
var inst_57553 = cljs.core.vec(inst_57525);
var state_57565__$1 = state_57565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57565__$1,(15),out,inst_57553);
} else {
if((state_val_57566 === (2))){
var state_57565__$1 = state_57565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57565__$1,(4),ch);
} else {
if((state_val_57566 === (11))){
var inst_57533 = (state_57565[(10)]);
var inst_57529 = (state_57565[(9)]);
var inst_57543 = (state_57565[(2)]);
var inst_57544 = [];
var inst_57545 = inst_57544.push(inst_57529);
var inst_57525 = inst_57544;
var inst_57526 = inst_57533;
var state_57565__$1 = (function (){var statearr_57577 = state_57565;
(statearr_57577[(7)] = inst_57526);

(statearr_57577[(11)] = inst_57543);

(statearr_57577[(8)] = inst_57525);

(statearr_57577[(12)] = inst_57545);

return statearr_57577;
})();
var statearr_57578_58480 = state_57565__$1;
(statearr_57578_58480[(2)] = null);

(statearr_57578_58480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (9))){
var inst_57525 = (state_57565[(8)]);
var inst_57541 = cljs.core.vec(inst_57525);
var state_57565__$1 = state_57565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57565__$1,(11),out,inst_57541);
} else {
if((state_val_57566 === (5))){
var inst_57526 = (state_57565[(7)]);
var inst_57533 = (state_57565[(10)]);
var inst_57529 = (state_57565[(9)]);
var inst_57533__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57529) : f.call(null,inst_57529));
var inst_57534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57533__$1,inst_57526);
var inst_57535 = cljs.core.keyword_identical_QMARK_(inst_57526,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57536 = ((inst_57534) || (inst_57535));
var state_57565__$1 = (function (){var statearr_57579 = state_57565;
(statearr_57579[(10)] = inst_57533__$1);

return statearr_57579;
})();
if(cljs.core.truth_(inst_57536)){
var statearr_57580_58481 = state_57565__$1;
(statearr_57580_58481[(1)] = (8));

} else {
var statearr_57581_58483 = state_57565__$1;
(statearr_57581_58483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (14))){
var inst_57558 = (state_57565[(2)]);
var inst_57559 = cljs.core.async.close_BANG_(out);
var state_57565__$1 = (function (){var statearr_57583 = state_57565;
(statearr_57583[(13)] = inst_57558);

return statearr_57583;
})();
var statearr_57584_58488 = state_57565__$1;
(statearr_57584_58488[(2)] = inst_57559);

(statearr_57584_58488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (10))){
var inst_57548 = (state_57565[(2)]);
var state_57565__$1 = state_57565;
var statearr_57585_58498 = state_57565__$1;
(statearr_57585_58498[(2)] = inst_57548);

(statearr_57585_58498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57566 === (8))){
var inst_57533 = (state_57565[(10)]);
var inst_57529 = (state_57565[(9)]);
var inst_57525 = (state_57565[(8)]);
var inst_57538 = inst_57525.push(inst_57529);
var tmp57582 = inst_57525;
var inst_57525__$1 = tmp57582;
var inst_57526 = inst_57533;
var state_57565__$1 = (function (){var statearr_57586 = state_57565;
(statearr_57586[(14)] = inst_57538);

(statearr_57586[(7)] = inst_57526);

(statearr_57586[(8)] = inst_57525__$1);

return statearr_57586;
})();
var statearr_57587_58503 = state_57565__$1;
(statearr_57587_58503[(2)] = null);

(statearr_57587_58503[(1)] = (2));


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
var cljs$core$async$state_machine__55996__auto__ = null;
var cljs$core$async$state_machine__55996__auto____0 = (function (){
var statearr_57588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57588[(0)] = cljs$core$async$state_machine__55996__auto__);

(statearr_57588[(1)] = (1));

return statearr_57588;
});
var cljs$core$async$state_machine__55996__auto____1 = (function (state_57565){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_57565);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e57589){if((e57589 instanceof Object)){
var ex__55999__auto__ = e57589;
var statearr_57590_58513 = state_57565;
(statearr_57590_58513[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58517 = state_57565;
state_57565 = G__58517;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs$core$async$state_machine__55996__auto__ = function(state_57565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55996__auto____1.call(this,state_57565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55996__auto____0;
cljs$core$async$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55996__auto____1;
return cljs$core$async$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_57591 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_57591[(6)] = c__56096__auto___58467);

return statearr_57591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
