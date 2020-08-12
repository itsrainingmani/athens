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
var G__42586 = arguments.length;
switch (G__42586) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42587 = (function (f,blockable,meta42588){
this.f = f;
this.blockable = blockable;
this.meta42588 = meta42588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42589,meta42588__$1){
var self__ = this;
var _42589__$1 = this;
return (new cljs.core.async.t_cljs$core$async42587(self__.f,self__.blockable,meta42588__$1));
}));

(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42589){
var self__ = this;
var _42589__$1 = this;
return self__.meta42588;
}));

(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42588","meta42588",-1728604623,null)], null);
}));

(cljs.core.async.t_cljs$core$async42587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42587");

(cljs.core.async.t_cljs$core$async42587.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42587.
 */
cljs.core.async.__GT_t_cljs$core$async42587 = (function cljs$core$async$__GT_t_cljs$core$async42587(f__$1,blockable__$1,meta42588){
return (new cljs.core.async.t_cljs$core$async42587(f__$1,blockable__$1,meta42588));
});

}

return (new cljs.core.async.t_cljs$core$async42587(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42598 = arguments.length;
switch (G__42598) {
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
var G__42602 = arguments.length;
switch (G__42602) {
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
var G__42605 = arguments.length;
switch (G__42605) {
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
var val_44085 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44085) : fn1.call(null,val_44085));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44085) : fn1.call(null,val_44085));
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
var G__42610 = arguments.length;
switch (G__42610) {
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
var n__4613__auto___44087 = n;
var x_44088 = (0);
while(true){
if((x_44088 < n__4613__auto___44087)){
(a[x_44088] = x_44088);

var G__44089 = (x_44088 + (1));
x_44088 = G__44089;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42611 = (function (flag,meta42612){
this.flag = flag;
this.meta42612 = meta42612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42613,meta42612__$1){
var self__ = this;
var _42613__$1 = this;
return (new cljs.core.async.t_cljs$core$async42611(self__.flag,meta42612__$1));
}));

(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42613){
var self__ = this;
var _42613__$1 = this;
return self__.meta42612;
}));

(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42612","meta42612",1157197276,null)], null);
}));

(cljs.core.async.t_cljs$core$async42611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42611");

(cljs.core.async.t_cljs$core$async42611.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42611.
 */
cljs.core.async.__GT_t_cljs$core$async42611 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42611(flag__$1,meta42612){
return (new cljs.core.async.t_cljs$core$async42611(flag__$1,meta42612));
});

}

return (new cljs.core.async.t_cljs$core$async42611(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42614 = (function (flag,cb,meta42615){
this.flag = flag;
this.cb = cb;
this.meta42615 = meta42615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42616,meta42615__$1){
var self__ = this;
var _42616__$1 = this;
return (new cljs.core.async.t_cljs$core$async42614(self__.flag,self__.cb,meta42615__$1));
}));

(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42616){
var self__ = this;
var _42616__$1 = this;
return self__.meta42615;
}));

(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42615","meta42615",-1168003434,null)], null);
}));

(cljs.core.async.t_cljs$core$async42614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42614");

(cljs.core.async.t_cljs$core$async42614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42614.
 */
cljs.core.async.__GT_t_cljs$core$async42614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42614(flag__$1,cb__$1,meta42615){
return (new cljs.core.async.t_cljs$core$async42614(flag__$1,cb__$1,meta42615));
});

}

return (new cljs.core.async.t_cljs$core$async42614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42617_SHARP_){
var G__42619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42617_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42619) : fret.call(null,G__42619));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42618_SHARP_){
var G__42620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42618_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42620) : fret.call(null,G__42620));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44095 = (i + (1));
i = G__44095;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___44100 = arguments.length;
var i__4737__auto___44101 = (0);
while(true){
if((i__4737__auto___44101 < len__4736__auto___44100)){
args__4742__auto__.push((arguments[i__4737__auto___44101]));

var G__44102 = (i__4737__auto___44101 + (1));
i__4737__auto___44101 = G__44102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42623){
var map__42624 = p__42623;
var map__42624__$1 = (((((!((map__42624 == null))))?(((((map__42624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42624):map__42624);
var opts = map__42624__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42621){
var G__42622 = cljs.core.first(seq42621);
var seq42621__$1 = cljs.core.next(seq42621);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42622,seq42621__$1);
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
var G__42627 = arguments.length;
switch (G__42627) {
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
var c__42528__auto___44112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42651){
var state_val_42652 = (state_42651[(1)]);
if((state_val_42652 === (7))){
var inst_42647 = (state_42651[(2)]);
var state_42651__$1 = state_42651;
var statearr_42653_44113 = state_42651__$1;
(statearr_42653_44113[(2)] = inst_42647);

(statearr_42653_44113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (1))){
var state_42651__$1 = state_42651;
var statearr_42654_44115 = state_42651__$1;
(statearr_42654_44115[(2)] = null);

(statearr_42654_44115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (4))){
var inst_42630 = (state_42651[(7)]);
var inst_42630__$1 = (state_42651[(2)]);
var inst_42631 = (inst_42630__$1 == null);
var state_42651__$1 = (function (){var statearr_42655 = state_42651;
(statearr_42655[(7)] = inst_42630__$1);

return statearr_42655;
})();
if(cljs.core.truth_(inst_42631)){
var statearr_42656_44116 = state_42651__$1;
(statearr_42656_44116[(1)] = (5));

} else {
var statearr_42657_44117 = state_42651__$1;
(statearr_42657_44117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (13))){
var state_42651__$1 = state_42651;
var statearr_42658_44118 = state_42651__$1;
(statearr_42658_44118[(2)] = null);

(statearr_42658_44118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (6))){
var inst_42630 = (state_42651[(7)]);
var state_42651__$1 = state_42651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42651__$1,(11),to,inst_42630);
} else {
if((state_val_42652 === (3))){
var inst_42649 = (state_42651[(2)]);
var state_42651__$1 = state_42651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42651__$1,inst_42649);
} else {
if((state_val_42652 === (12))){
var state_42651__$1 = state_42651;
var statearr_42659_44119 = state_42651__$1;
(statearr_42659_44119[(2)] = null);

(statearr_42659_44119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (2))){
var state_42651__$1 = state_42651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42651__$1,(4),from);
} else {
if((state_val_42652 === (11))){
var inst_42640 = (state_42651[(2)]);
var state_42651__$1 = state_42651;
if(cljs.core.truth_(inst_42640)){
var statearr_42660_44123 = state_42651__$1;
(statearr_42660_44123[(1)] = (12));

} else {
var statearr_42661_44124 = state_42651__$1;
(statearr_42661_44124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (9))){
var state_42651__$1 = state_42651;
var statearr_42662_44125 = state_42651__$1;
(statearr_42662_44125[(2)] = null);

(statearr_42662_44125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (5))){
var state_42651__$1 = state_42651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42663_44126 = state_42651__$1;
(statearr_42663_44126[(1)] = (8));

} else {
var statearr_42664_44127 = state_42651__$1;
(statearr_42664_44127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (14))){
var inst_42645 = (state_42651[(2)]);
var state_42651__$1 = state_42651;
var statearr_42665_44128 = state_42651__$1;
(statearr_42665_44128[(2)] = inst_42645);

(statearr_42665_44128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (10))){
var inst_42637 = (state_42651[(2)]);
var state_42651__$1 = state_42651;
var statearr_42666_44129 = state_42651__$1;
(statearr_42666_44129[(2)] = inst_42637);

(statearr_42666_44129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42652 === (8))){
var inst_42634 = cljs.core.async.close_BANG_(to);
var state_42651__$1 = state_42651;
var statearr_42667_44130 = state_42651__$1;
(statearr_42667_44130[(2)] = inst_42634);

(statearr_42667_44130[(1)] = (10));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_42668 = [null,null,null,null,null,null,null,null];
(statearr_42668[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_42668[(1)] = (1));

return statearr_42668;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_42651){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42651);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42669){var ex__42496__auto__ = e42669;
var statearr_42670_44131 = state_42651;
(statearr_42670_44131[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42651[(4)]))){
var statearr_42671_44132 = state_42651;
(statearr_42671_44132[(1)] = cljs.core.first((state_42651[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44133 = state_42651;
state_42651 = G__44133;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_42651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_42651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42672 = f__42529__auto__();
(statearr_42672[(6)] = c__42528__auto___44112);

return statearr_42672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var process = (function (p__42673){
var vec__42674 = p__42673;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(1),null);
var job = vec__42674;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42528__auto___44134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42681){
var state_val_42682 = (state_42681[(1)]);
if((state_val_42682 === (1))){
var state_42681__$1 = state_42681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42681__$1,(2),res,v);
} else {
if((state_val_42682 === (2))){
var inst_42678 = (state_42681[(2)]);
var inst_42679 = cljs.core.async.close_BANG_(res);
var state_42681__$1 = (function (){var statearr_42683 = state_42681;
(statearr_42683[(7)] = inst_42678);

return statearr_42683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42681__$1,inst_42679);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_42684 = [null,null,null,null,null,null,null,null];
(statearr_42684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__);

(statearr_42684[(1)] = (1));

return statearr_42684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1 = (function (state_42681){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42681);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42685){var ex__42496__auto__ = e42685;
var statearr_42686_44135 = state_42681;
(statearr_42686_44135[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42681[(4)]))){
var statearr_42687_44136 = state_42681;
(statearr_42687_44136[(1)] = cljs.core.first((state_42681[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44137 = state_42681;
state_42681 = G__44137;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = function(state_42681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1.call(this,state_42681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42688 = f__42529__auto__();
(statearr_42688[(6)] = c__42528__auto___44134);

return statearr_42688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42689){
var vec__42690 = p__42689;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42690,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42690,(1),null);
var job = vec__42690;
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
var n__4613__auto___44150 = n;
var __44151 = (0);
while(true){
if((__44151 < n__4613__auto___44150)){
var G__42693_44152 = type;
var G__42693_44153__$1 = (((G__42693_44152 instanceof cljs.core.Keyword))?G__42693_44152.fqn:null);
switch (G__42693_44153__$1) {
case "compute":
var c__42528__auto___44155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44151,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = ((function (__44151,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function (state_42706){
var state_val_42707 = (state_42706[(1)]);
if((state_val_42707 === (1))){
var state_42706__$1 = state_42706;
var statearr_42708_44156 = state_42706__$1;
(statearr_42708_44156[(2)] = null);

(statearr_42708_44156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42707 === (2))){
var state_42706__$1 = state_42706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42706__$1,(4),jobs);
} else {
if((state_val_42707 === (3))){
var inst_42704 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42706__$1,inst_42704);
} else {
if((state_val_42707 === (4))){
var inst_42696 = (state_42706[(2)]);
var inst_42697 = process(inst_42696);
var state_42706__$1 = state_42706;
if(cljs.core.truth_(inst_42697)){
var statearr_42709_44158 = state_42706__$1;
(statearr_42709_44158[(1)] = (5));

} else {
var statearr_42710_44160 = state_42706__$1;
(statearr_42710_44160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42707 === (5))){
var state_42706__$1 = state_42706;
var statearr_42711_44161 = state_42706__$1;
(statearr_42711_44161[(2)] = null);

(statearr_42711_44161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42707 === (6))){
var state_42706__$1 = state_42706;
var statearr_42712_44162 = state_42706__$1;
(statearr_42712_44162[(2)] = null);

(statearr_42712_44162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42707 === (7))){
var inst_42702 = (state_42706[(2)]);
var state_42706__$1 = state_42706;
var statearr_42713_44163 = state_42706__$1;
(statearr_42713_44163[(2)] = inst_42702);

(statearr_42713_44163[(1)] = (3));


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
});})(__44151,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
;
return ((function (__44151,switch__42492__auto__,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_42714 = [null,null,null,null,null,null,null];
(statearr_42714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__);

(statearr_42714[(1)] = (1));

return statearr_42714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1 = (function (state_42706){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42706);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42715){var ex__42496__auto__ = e42715;
var statearr_42716_44167 = state_42706;
(statearr_42716_44167[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42706[(4)]))){
var statearr_42717_44168 = state_42706;
(statearr_42717_44168[(1)] = cljs.core.first((state_42706[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44169 = state_42706;
state_42706 = G__44169;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = function(state_42706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1.call(this,state_42706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__;
})()
;})(__44151,switch__42492__auto__,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
})();
var state__42530__auto__ = (function (){var statearr_42718 = f__42529__auto__();
(statearr_42718[(6)] = c__42528__auto___44155);

return statearr_42718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
});})(__44151,c__42528__auto___44155,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
);


break;
case "async":
var c__42528__auto___44170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44151,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = ((function (__44151,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function (state_42731){
var state_val_42732 = (state_42731[(1)]);
if((state_val_42732 === (1))){
var state_42731__$1 = state_42731;
var statearr_42733_44171 = state_42731__$1;
(statearr_42733_44171[(2)] = null);

(statearr_42733_44171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (2))){
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42731__$1,(4),jobs);
} else {
if((state_val_42732 === (3))){
var inst_42729 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42731__$1,inst_42729);
} else {
if((state_val_42732 === (4))){
var inst_42721 = (state_42731[(2)]);
var inst_42722 = async(inst_42721);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42722)){
var statearr_42734_44172 = state_42731__$1;
(statearr_42734_44172[(1)] = (5));

} else {
var statearr_42735_44173 = state_42731__$1;
(statearr_42735_44173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (5))){
var state_42731__$1 = state_42731;
var statearr_42736_44174 = state_42731__$1;
(statearr_42736_44174[(2)] = null);

(statearr_42736_44174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (6))){
var state_42731__$1 = state_42731;
var statearr_42737_44175 = state_42731__$1;
(statearr_42737_44175[(2)] = null);

(statearr_42737_44175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (7))){
var inst_42727 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42738_44176 = state_42731__$1;
(statearr_42738_44176[(2)] = inst_42727);

(statearr_42738_44176[(1)] = (3));


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
});})(__44151,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
;
return ((function (__44151,switch__42492__auto__,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_42739 = [null,null,null,null,null,null,null];
(statearr_42739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__);

(statearr_42739[(1)] = (1));

return statearr_42739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1 = (function (state_42731){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42731);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42740){var ex__42496__auto__ = e42740;
var statearr_42741_44177 = state_42731;
(statearr_42741_44177[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42731[(4)]))){
var statearr_42742_44178 = state_42731;
(statearr_42742_44178[(1)] = cljs.core.first((state_42731[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44179 = state_42731;
state_42731 = G__44179;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = function(state_42731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1.call(this,state_42731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__;
})()
;})(__44151,switch__42492__auto__,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
})();
var state__42530__auto__ = (function (){var statearr_42743 = f__42529__auto__();
(statearr_42743[(6)] = c__42528__auto___44170);

return statearr_42743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
});})(__44151,c__42528__auto___44170,G__42693_44152,G__42693_44153__$1,n__4613__auto___44150,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42693_44153__$1)].join('')));

}

var G__44180 = (__44151 + (1));
__44151 = G__44180;
continue;
} else {
}
break;
}

var c__42528__auto___44181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42765){
var state_val_42766 = (state_42765[(1)]);
if((state_val_42766 === (7))){
var inst_42761 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42767_44182 = state_42765__$1;
(statearr_42767_44182[(2)] = inst_42761);

(statearr_42767_44182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (1))){
var state_42765__$1 = state_42765;
var statearr_42768_44183 = state_42765__$1;
(statearr_42768_44183[(2)] = null);

(statearr_42768_44183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (4))){
var inst_42746 = (state_42765[(7)]);
var inst_42746__$1 = (state_42765[(2)]);
var inst_42747 = (inst_42746__$1 == null);
var state_42765__$1 = (function (){var statearr_42769 = state_42765;
(statearr_42769[(7)] = inst_42746__$1);

return statearr_42769;
})();
if(cljs.core.truth_(inst_42747)){
var statearr_42770_44184 = state_42765__$1;
(statearr_42770_44184[(1)] = (5));

} else {
var statearr_42771_44185 = state_42765__$1;
(statearr_42771_44185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (6))){
var inst_42746 = (state_42765[(7)]);
var inst_42751 = (state_42765[(8)]);
var inst_42751__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42753 = [inst_42746,inst_42751__$1];
var inst_42754 = (new cljs.core.PersistentVector(null,2,(5),inst_42752,inst_42753,null));
var state_42765__$1 = (function (){var statearr_42772 = state_42765;
(statearr_42772[(8)] = inst_42751__$1);

return statearr_42772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42765__$1,(8),jobs,inst_42754);
} else {
if((state_val_42766 === (3))){
var inst_42763 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42765__$1,inst_42763);
} else {
if((state_val_42766 === (2))){
var state_42765__$1 = state_42765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42765__$1,(4),from);
} else {
if((state_val_42766 === (9))){
var inst_42758 = (state_42765[(2)]);
var state_42765__$1 = (function (){var statearr_42773 = state_42765;
(statearr_42773[(9)] = inst_42758);

return statearr_42773;
})();
var statearr_42774_44186 = state_42765__$1;
(statearr_42774_44186[(2)] = null);

(statearr_42774_44186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (5))){
var inst_42749 = cljs.core.async.close_BANG_(jobs);
var state_42765__$1 = state_42765;
var statearr_42775_44187 = state_42765__$1;
(statearr_42775_44187[(2)] = inst_42749);

(statearr_42775_44187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (8))){
var inst_42751 = (state_42765[(8)]);
var inst_42756 = (state_42765[(2)]);
var state_42765__$1 = (function (){var statearr_42776 = state_42765;
(statearr_42776[(10)] = inst_42756);

return statearr_42776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42765__$1,(9),results,inst_42751);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_42777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__);

(statearr_42777[(1)] = (1));

return statearr_42777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1 = (function (state_42765){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42765);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42778){var ex__42496__auto__ = e42778;
var statearr_42779_44188 = state_42765;
(statearr_42779_44188[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42765[(4)]))){
var statearr_42780_44189 = state_42765;
(statearr_42780_44189[(1)] = cljs.core.first((state_42765[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44190 = state_42765;
state_42765 = G__44190;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = function(state_42765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1.call(this,state_42765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42781 = f__42529__auto__();
(statearr_42781[(6)] = c__42528__auto___44181);

return statearr_42781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42819){
var state_val_42820 = (state_42819[(1)]);
if((state_val_42820 === (7))){
var inst_42815 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42821_44191 = state_42819__$1;
(statearr_42821_44191[(2)] = inst_42815);

(statearr_42821_44191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (20))){
var state_42819__$1 = state_42819;
var statearr_42822_44192 = state_42819__$1;
(statearr_42822_44192[(2)] = null);

(statearr_42822_44192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (1))){
var state_42819__$1 = state_42819;
var statearr_42823_44193 = state_42819__$1;
(statearr_42823_44193[(2)] = null);

(statearr_42823_44193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (4))){
var inst_42784 = (state_42819[(7)]);
var inst_42784__$1 = (state_42819[(2)]);
var inst_42785 = (inst_42784__$1 == null);
var state_42819__$1 = (function (){var statearr_42824 = state_42819;
(statearr_42824[(7)] = inst_42784__$1);

return statearr_42824;
})();
if(cljs.core.truth_(inst_42785)){
var statearr_42825_44194 = state_42819__$1;
(statearr_42825_44194[(1)] = (5));

} else {
var statearr_42826_44195 = state_42819__$1;
(statearr_42826_44195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (15))){
var inst_42797 = (state_42819[(8)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42819__$1,(18),to,inst_42797);
} else {
if((state_val_42820 === (21))){
var inst_42810 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42827_44196 = state_42819__$1;
(statearr_42827_44196[(2)] = inst_42810);

(statearr_42827_44196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (13))){
var inst_42812 = (state_42819[(2)]);
var state_42819__$1 = (function (){var statearr_42828 = state_42819;
(statearr_42828[(9)] = inst_42812);

return statearr_42828;
})();
var statearr_42829_44197 = state_42819__$1;
(statearr_42829_44197[(2)] = null);

(statearr_42829_44197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (6))){
var inst_42784 = (state_42819[(7)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42819__$1,(11),inst_42784);
} else {
if((state_val_42820 === (17))){
var inst_42805 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
if(cljs.core.truth_(inst_42805)){
var statearr_42830_44198 = state_42819__$1;
(statearr_42830_44198[(1)] = (19));

} else {
var statearr_42831_44199 = state_42819__$1;
(statearr_42831_44199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (3))){
var inst_42817 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42819__$1,inst_42817);
} else {
if((state_val_42820 === (12))){
var inst_42794 = (state_42819[(10)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42819__$1,(14),inst_42794);
} else {
if((state_val_42820 === (2))){
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42819__$1,(4),results);
} else {
if((state_val_42820 === (19))){
var state_42819__$1 = state_42819;
var statearr_42832_44200 = state_42819__$1;
(statearr_42832_44200[(2)] = null);

(statearr_42832_44200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (11))){
var inst_42794 = (state_42819[(2)]);
var state_42819__$1 = (function (){var statearr_42833 = state_42819;
(statearr_42833[(10)] = inst_42794);

return statearr_42833;
})();
var statearr_42834_44201 = state_42819__$1;
(statearr_42834_44201[(2)] = null);

(statearr_42834_44201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (9))){
var state_42819__$1 = state_42819;
var statearr_42835_44202 = state_42819__$1;
(statearr_42835_44202[(2)] = null);

(statearr_42835_44202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (5))){
var state_42819__$1 = state_42819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42836_44203 = state_42819__$1;
(statearr_42836_44203[(1)] = (8));

} else {
var statearr_42837_44204 = state_42819__$1;
(statearr_42837_44204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (14))){
var inst_42797 = (state_42819[(8)]);
var inst_42797__$1 = (state_42819[(2)]);
var inst_42798 = (inst_42797__$1 == null);
var inst_42799 = cljs.core.not(inst_42798);
var state_42819__$1 = (function (){var statearr_42838 = state_42819;
(statearr_42838[(8)] = inst_42797__$1);

return statearr_42838;
})();
if(inst_42799){
var statearr_42839_44205 = state_42819__$1;
(statearr_42839_44205[(1)] = (15));

} else {
var statearr_42840_44206 = state_42819__$1;
(statearr_42840_44206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (16))){
var state_42819__$1 = state_42819;
var statearr_42841_44207 = state_42819__$1;
(statearr_42841_44207[(2)] = false);

(statearr_42841_44207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (10))){
var inst_42791 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42842_44208 = state_42819__$1;
(statearr_42842_44208[(2)] = inst_42791);

(statearr_42842_44208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (18))){
var inst_42802 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42843_44209 = state_42819__$1;
(statearr_42843_44209[(2)] = inst_42802);

(statearr_42843_44209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (8))){
var inst_42788 = cljs.core.async.close_BANG_(to);
var state_42819__$1 = state_42819;
var statearr_42844_44210 = state_42819__$1;
(statearr_42844_44210[(2)] = inst_42788);

(statearr_42844_44210[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_42845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__);

(statearr_42845[(1)] = (1));

return statearr_42845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1 = (function (state_42819){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42819);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42846){var ex__42496__auto__ = e42846;
var statearr_42847_44211 = state_42819;
(statearr_42847_44211[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42819[(4)]))){
var statearr_42848_44212 = state_42819;
(statearr_42848_44212[(1)] = cljs.core.first((state_42819[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44213 = state_42819;
state_42819 = G__44213;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__ = function(state_42819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1.call(this,state_42819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42849 = f__42529__auto__();
(statearr_42849[(6)] = c__42528__auto__);

return statearr_42849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
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
var G__42851 = arguments.length;
switch (G__42851) {
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
var G__42853 = arguments.length;
switch (G__42853) {
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
var G__42855 = arguments.length;
switch (G__42855) {
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
var c__42528__auto___44217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42881){
var state_val_42882 = (state_42881[(1)]);
if((state_val_42882 === (7))){
var inst_42877 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
var statearr_42883_44218 = state_42881__$1;
(statearr_42883_44218[(2)] = inst_42877);

(statearr_42883_44218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (1))){
var state_42881__$1 = state_42881;
var statearr_42884_44219 = state_42881__$1;
(statearr_42884_44219[(2)] = null);

(statearr_42884_44219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (4))){
var inst_42858 = (state_42881[(7)]);
var inst_42858__$1 = (state_42881[(2)]);
var inst_42859 = (inst_42858__$1 == null);
var state_42881__$1 = (function (){var statearr_42885 = state_42881;
(statearr_42885[(7)] = inst_42858__$1);

return statearr_42885;
})();
if(cljs.core.truth_(inst_42859)){
var statearr_42886_44220 = state_42881__$1;
(statearr_42886_44220[(1)] = (5));

} else {
var statearr_42887_44221 = state_42881__$1;
(statearr_42887_44221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (13))){
var state_42881__$1 = state_42881;
var statearr_42888_44222 = state_42881__$1;
(statearr_42888_44222[(2)] = null);

(statearr_42888_44222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (6))){
var inst_42858 = (state_42881[(7)]);
var inst_42864 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42858) : p.call(null,inst_42858));
var state_42881__$1 = state_42881;
if(cljs.core.truth_(inst_42864)){
var statearr_42889_44223 = state_42881__$1;
(statearr_42889_44223[(1)] = (9));

} else {
var statearr_42890_44224 = state_42881__$1;
(statearr_42890_44224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (3))){
var inst_42879 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42881__$1,inst_42879);
} else {
if((state_val_42882 === (12))){
var state_42881__$1 = state_42881;
var statearr_42891_44225 = state_42881__$1;
(statearr_42891_44225[(2)] = null);

(statearr_42891_44225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (2))){
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42881__$1,(4),ch);
} else {
if((state_val_42882 === (11))){
var inst_42858 = (state_42881[(7)]);
var inst_42868 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42881__$1,(8),inst_42868,inst_42858);
} else {
if((state_val_42882 === (9))){
var state_42881__$1 = state_42881;
var statearr_42892_44226 = state_42881__$1;
(statearr_42892_44226[(2)] = tc);

(statearr_42892_44226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (5))){
var inst_42861 = cljs.core.async.close_BANG_(tc);
var inst_42862 = cljs.core.async.close_BANG_(fc);
var state_42881__$1 = (function (){var statearr_42893 = state_42881;
(statearr_42893[(8)] = inst_42861);

return statearr_42893;
})();
var statearr_42894_44227 = state_42881__$1;
(statearr_42894_44227[(2)] = inst_42862);

(statearr_42894_44227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (14))){
var inst_42875 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
var statearr_42895_44228 = state_42881__$1;
(statearr_42895_44228[(2)] = inst_42875);

(statearr_42895_44228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (10))){
var state_42881__$1 = state_42881;
var statearr_42896_44229 = state_42881__$1;
(statearr_42896_44229[(2)] = fc);

(statearr_42896_44229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42882 === (8))){
var inst_42870 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
if(cljs.core.truth_(inst_42870)){
var statearr_42897_44230 = state_42881__$1;
(statearr_42897_44230[(1)] = (12));

} else {
var statearr_42898_44231 = state_42881__$1;
(statearr_42898_44231[(1)] = (13));

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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_42899 = [null,null,null,null,null,null,null,null,null];
(statearr_42899[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_42899[(1)] = (1));

return statearr_42899;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_42881){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42881);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42900){var ex__42496__auto__ = e42900;
var statearr_42901_44232 = state_42881;
(statearr_42901_44232[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42881[(4)]))){
var statearr_42902_44233 = state_42881;
(statearr_42902_44233[(1)] = cljs.core.first((state_42881[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44234 = state_42881;
state_42881 = G__44234;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_42881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_42881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42903 = f__42529__auto__();
(statearr_42903[(6)] = c__42528__auto___44217);

return statearr_42903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42925){
var state_val_42926 = (state_42925[(1)]);
if((state_val_42926 === (7))){
var inst_42921 = (state_42925[(2)]);
var state_42925__$1 = state_42925;
var statearr_42927_44235 = state_42925__$1;
(statearr_42927_44235[(2)] = inst_42921);

(statearr_42927_44235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (1))){
var inst_42904 = init;
var inst_42905 = inst_42904;
var state_42925__$1 = (function (){var statearr_42928 = state_42925;
(statearr_42928[(7)] = inst_42905);

return statearr_42928;
})();
var statearr_42929_44236 = state_42925__$1;
(statearr_42929_44236[(2)] = null);

(statearr_42929_44236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (4))){
var inst_42908 = (state_42925[(8)]);
var inst_42908__$1 = (state_42925[(2)]);
var inst_42909 = (inst_42908__$1 == null);
var state_42925__$1 = (function (){var statearr_42930 = state_42925;
(statearr_42930[(8)] = inst_42908__$1);

return statearr_42930;
})();
if(cljs.core.truth_(inst_42909)){
var statearr_42931_44237 = state_42925__$1;
(statearr_42931_44237[(1)] = (5));

} else {
var statearr_42932_44238 = state_42925__$1;
(statearr_42932_44238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (6))){
var inst_42905 = (state_42925[(7)]);
var inst_42908 = (state_42925[(8)]);
var inst_42912 = (state_42925[(9)]);
var inst_42912__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42905,inst_42908) : f.call(null,inst_42905,inst_42908));
var inst_42913 = cljs.core.reduced_QMARK_(inst_42912__$1);
var state_42925__$1 = (function (){var statearr_42933 = state_42925;
(statearr_42933[(9)] = inst_42912__$1);

return statearr_42933;
})();
if(inst_42913){
var statearr_42934_44239 = state_42925__$1;
(statearr_42934_44239[(1)] = (8));

} else {
var statearr_42935_44240 = state_42925__$1;
(statearr_42935_44240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (3))){
var inst_42923 = (state_42925[(2)]);
var state_42925__$1 = state_42925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42925__$1,inst_42923);
} else {
if((state_val_42926 === (2))){
var state_42925__$1 = state_42925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42925__$1,(4),ch);
} else {
if((state_val_42926 === (9))){
var inst_42912 = (state_42925[(9)]);
var inst_42905 = inst_42912;
var state_42925__$1 = (function (){var statearr_42936 = state_42925;
(statearr_42936[(7)] = inst_42905);

return statearr_42936;
})();
var statearr_42937_44241 = state_42925__$1;
(statearr_42937_44241[(2)] = null);

(statearr_42937_44241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (5))){
var inst_42905 = (state_42925[(7)]);
var state_42925__$1 = state_42925;
var statearr_42938_44242 = state_42925__$1;
(statearr_42938_44242[(2)] = inst_42905);

(statearr_42938_44242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (10))){
var inst_42919 = (state_42925[(2)]);
var state_42925__$1 = state_42925;
var statearr_42939_44243 = state_42925__$1;
(statearr_42939_44243[(2)] = inst_42919);

(statearr_42939_44243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42926 === (8))){
var inst_42912 = (state_42925[(9)]);
var inst_42915 = cljs.core.deref(inst_42912);
var state_42925__$1 = state_42925;
var statearr_42940_44244 = state_42925__$1;
(statearr_42940_44244[(2)] = inst_42915);

(statearr_42940_44244[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42493__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42493__auto____0 = (function (){
var statearr_42941 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42941[(0)] = cljs$core$async$reduce_$_state_machine__42493__auto__);

(statearr_42941[(1)] = (1));

return statearr_42941;
});
var cljs$core$async$reduce_$_state_machine__42493__auto____1 = (function (state_42925){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42925);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42942){var ex__42496__auto__ = e42942;
var statearr_42943_44245 = state_42925;
(statearr_42943_44245[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42925[(4)]))){
var statearr_42944_44246 = state_42925;
(statearr_42944_44246[(1)] = cljs.core.first((state_42925[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44247 = state_42925;
state_42925 = G__44247;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42493__auto__ = function(state_42925){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42493__auto____1.call(this,state_42925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42493__auto____0;
cljs$core$async$reduce_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42493__auto____1;
return cljs$core$async$reduce_$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42945 = f__42529__auto__();
(statearr_42945[(6)] = c__42528__auto__);

return statearr_42945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42951){
var state_val_42952 = (state_42951[(1)]);
if((state_val_42952 === (1))){
var inst_42946 = cljs.core.async.reduce(f__$1,init,ch);
var state_42951__$1 = state_42951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42951__$1,(2),inst_42946);
} else {
if((state_val_42952 === (2))){
var inst_42948 = (state_42951[(2)]);
var inst_42949 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42948) : f__$1.call(null,inst_42948));
var state_42951__$1 = state_42951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42951__$1,inst_42949);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42493__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42493__auto____0 = (function (){
var statearr_42953 = [null,null,null,null,null,null,null];
(statearr_42953[(0)] = cljs$core$async$transduce_$_state_machine__42493__auto__);

(statearr_42953[(1)] = (1));

return statearr_42953;
});
var cljs$core$async$transduce_$_state_machine__42493__auto____1 = (function (state_42951){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42951);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e42954){var ex__42496__auto__ = e42954;
var statearr_42955_44248 = state_42951;
(statearr_42955_44248[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42951[(4)]))){
var statearr_42956_44249 = state_42951;
(statearr_42956_44249[(1)] = cljs.core.first((state_42951[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44250 = state_42951;
state_42951 = G__44250;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42493__auto__ = function(state_42951){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42493__auto____1.call(this,state_42951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42493__auto____0;
cljs$core$async$transduce_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42493__auto____1;
return cljs$core$async$transduce_$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_42957 = f__42529__auto__();
(statearr_42957[(6)] = c__42528__auto__);

return statearr_42957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
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
var G__42959 = arguments.length;
switch (G__42959) {
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
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_42984){
var state_val_42985 = (state_42984[(1)]);
if((state_val_42985 === (7))){
var inst_42966 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
var statearr_42986_44252 = state_42984__$1;
(statearr_42986_44252[(2)] = inst_42966);

(statearr_42986_44252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (1))){
var inst_42960 = cljs.core.seq(coll);
var inst_42961 = inst_42960;
var state_42984__$1 = (function (){var statearr_42987 = state_42984;
(statearr_42987[(7)] = inst_42961);

return statearr_42987;
})();
var statearr_42988_44253 = state_42984__$1;
(statearr_42988_44253[(2)] = null);

(statearr_42988_44253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (4))){
var inst_42961 = (state_42984[(7)]);
var inst_42964 = cljs.core.first(inst_42961);
var state_42984__$1 = state_42984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42984__$1,(7),ch,inst_42964);
} else {
if((state_val_42985 === (13))){
var inst_42978 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
var statearr_42989_44254 = state_42984__$1;
(statearr_42989_44254[(2)] = inst_42978);

(statearr_42989_44254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (6))){
var inst_42969 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
if(cljs.core.truth_(inst_42969)){
var statearr_42990_44255 = state_42984__$1;
(statearr_42990_44255[(1)] = (8));

} else {
var statearr_42991_44256 = state_42984__$1;
(statearr_42991_44256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (3))){
var inst_42982 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42984__$1,inst_42982);
} else {
if((state_val_42985 === (12))){
var state_42984__$1 = state_42984;
var statearr_42992_44257 = state_42984__$1;
(statearr_42992_44257[(2)] = null);

(statearr_42992_44257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (2))){
var inst_42961 = (state_42984[(7)]);
var state_42984__$1 = state_42984;
if(cljs.core.truth_(inst_42961)){
var statearr_42993_44258 = state_42984__$1;
(statearr_42993_44258[(1)] = (4));

} else {
var statearr_42994_44259 = state_42984__$1;
(statearr_42994_44259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (11))){
var inst_42975 = cljs.core.async.close_BANG_(ch);
var state_42984__$1 = state_42984;
var statearr_42995_44260 = state_42984__$1;
(statearr_42995_44260[(2)] = inst_42975);

(statearr_42995_44260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (9))){
var state_42984__$1 = state_42984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42996_44261 = state_42984__$1;
(statearr_42996_44261[(1)] = (11));

} else {
var statearr_42997_44262 = state_42984__$1;
(statearr_42997_44262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (5))){
var inst_42961 = (state_42984[(7)]);
var state_42984__$1 = state_42984;
var statearr_42998_44263 = state_42984__$1;
(statearr_42998_44263[(2)] = inst_42961);

(statearr_42998_44263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (10))){
var inst_42980 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
var statearr_42999_44264 = state_42984__$1;
(statearr_42999_44264[(2)] = inst_42980);

(statearr_42999_44264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42985 === (8))){
var inst_42961 = (state_42984[(7)]);
var inst_42971 = cljs.core.next(inst_42961);
var inst_42961__$1 = inst_42971;
var state_42984__$1 = (function (){var statearr_43000 = state_42984;
(statearr_43000[(7)] = inst_42961__$1);

return statearr_43000;
})();
var statearr_43001_44265 = state_42984__$1;
(statearr_43001_44265[(2)] = null);

(statearr_43001_44265[(1)] = (2));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43002 = [null,null,null,null,null,null,null,null];
(statearr_43002[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43002[(1)] = (1));

return statearr_43002;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_42984){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_42984);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43003){var ex__42496__auto__ = e43003;
var statearr_43004_44266 = state_42984;
(statearr_43004_44266[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_42984[(4)]))){
var statearr_43005_44267 = state_42984;
(statearr_43005_44267[(1)] = cljs.core.first((state_42984[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44268 = state_42984;
state_42984 = G__44268;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_42984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_42984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43006 = f__42529__auto__();
(statearr_43006[(6)] = c__42528__auto__);

return statearr_43006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44269 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44269(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44273 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44273(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44281 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44281(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44284 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44284(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43007 = (function (ch,cs,meta43008){
this.ch = ch;
this.cs = cs;
this.meta43008 = meta43008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43009,meta43008__$1){
var self__ = this;
var _43009__$1 = this;
return (new cljs.core.async.t_cljs$core$async43007(self__.ch,self__.cs,meta43008__$1));
}));

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43009){
var self__ = this;
var _43009__$1 = this;
return self__.meta43008;
}));

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43008","meta43008",-658625489,null)], null);
}));

(cljs.core.async.t_cljs$core$async43007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43007");

(cljs.core.async.t_cljs$core$async43007.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43007.
 */
cljs.core.async.__GT_t_cljs$core$async43007 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43007(ch__$1,cs__$1,meta43008){
return (new cljs.core.async.t_cljs$core$async43007(ch__$1,cs__$1,meta43008));
});

}

return (new cljs.core.async.t_cljs$core$async43007(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42528__auto___44290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43142){
var state_val_43143 = (state_43142[(1)]);
if((state_val_43143 === (7))){
var inst_43138 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43144_44291 = state_43142__$1;
(statearr_43144_44291[(2)] = inst_43138);

(statearr_43144_44291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (20))){
var inst_43043 = (state_43142[(7)]);
var inst_43055 = cljs.core.first(inst_43043);
var inst_43056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43055,(0),null);
var inst_43057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43055,(1),null);
var state_43142__$1 = (function (){var statearr_43145 = state_43142;
(statearr_43145[(8)] = inst_43056);

return statearr_43145;
})();
if(cljs.core.truth_(inst_43057)){
var statearr_43146_44292 = state_43142__$1;
(statearr_43146_44292[(1)] = (22));

} else {
var statearr_43147_44293 = state_43142__$1;
(statearr_43147_44293[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (27))){
var inst_43085 = (state_43142[(9)]);
var inst_43012 = (state_43142[(10)]);
var inst_43092 = (state_43142[(11)]);
var inst_43087 = (state_43142[(12)]);
var inst_43092__$1 = cljs.core._nth(inst_43085,inst_43087);
var inst_43093 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43092__$1,inst_43012,done);
var state_43142__$1 = (function (){var statearr_43148 = state_43142;
(statearr_43148[(11)] = inst_43092__$1);

return statearr_43148;
})();
if(cljs.core.truth_(inst_43093)){
var statearr_43149_44294 = state_43142__$1;
(statearr_43149_44294[(1)] = (30));

} else {
var statearr_43150_44295 = state_43142__$1;
(statearr_43150_44295[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (1))){
var state_43142__$1 = state_43142;
var statearr_43151_44296 = state_43142__$1;
(statearr_43151_44296[(2)] = null);

(statearr_43151_44296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (24))){
var inst_43043 = (state_43142[(7)]);
var inst_43062 = (state_43142[(2)]);
var inst_43063 = cljs.core.next(inst_43043);
var inst_43021 = inst_43063;
var inst_43022 = null;
var inst_43023 = (0);
var inst_43024 = (0);
var state_43142__$1 = (function (){var statearr_43152 = state_43142;
(statearr_43152[(13)] = inst_43062);

(statearr_43152[(14)] = inst_43024);

(statearr_43152[(15)] = inst_43023);

(statearr_43152[(16)] = inst_43021);

(statearr_43152[(17)] = inst_43022);

return statearr_43152;
})();
var statearr_43153_44297 = state_43142__$1;
(statearr_43153_44297[(2)] = null);

(statearr_43153_44297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (39))){
var state_43142__$1 = state_43142;
var statearr_43157_44298 = state_43142__$1;
(statearr_43157_44298[(2)] = null);

(statearr_43157_44298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (4))){
var inst_43012 = (state_43142[(10)]);
var inst_43012__$1 = (state_43142[(2)]);
var inst_43013 = (inst_43012__$1 == null);
var state_43142__$1 = (function (){var statearr_43158 = state_43142;
(statearr_43158[(10)] = inst_43012__$1);

return statearr_43158;
})();
if(cljs.core.truth_(inst_43013)){
var statearr_43159_44299 = state_43142__$1;
(statearr_43159_44299[(1)] = (5));

} else {
var statearr_43160_44300 = state_43142__$1;
(statearr_43160_44300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (15))){
var inst_43024 = (state_43142[(14)]);
var inst_43023 = (state_43142[(15)]);
var inst_43021 = (state_43142[(16)]);
var inst_43022 = (state_43142[(17)]);
var inst_43039 = (state_43142[(2)]);
var inst_43040 = (inst_43024 + (1));
var tmp43154 = inst_43023;
var tmp43155 = inst_43021;
var tmp43156 = inst_43022;
var inst_43021__$1 = tmp43155;
var inst_43022__$1 = tmp43156;
var inst_43023__$1 = tmp43154;
var inst_43024__$1 = inst_43040;
var state_43142__$1 = (function (){var statearr_43161 = state_43142;
(statearr_43161[(18)] = inst_43039);

(statearr_43161[(14)] = inst_43024__$1);

(statearr_43161[(15)] = inst_43023__$1);

(statearr_43161[(16)] = inst_43021__$1);

(statearr_43161[(17)] = inst_43022__$1);

return statearr_43161;
})();
var statearr_43162_44301 = state_43142__$1;
(statearr_43162_44301[(2)] = null);

(statearr_43162_44301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (21))){
var inst_43066 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43166_44302 = state_43142__$1;
(statearr_43166_44302[(2)] = inst_43066);

(statearr_43166_44302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (31))){
var inst_43092 = (state_43142[(11)]);
var inst_43096 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43092);
var state_43142__$1 = state_43142;
var statearr_43167_44303 = state_43142__$1;
(statearr_43167_44303[(2)] = inst_43096);

(statearr_43167_44303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (32))){
var inst_43084 = (state_43142[(19)]);
var inst_43085 = (state_43142[(9)]);
var inst_43086 = (state_43142[(20)]);
var inst_43087 = (state_43142[(12)]);
var inst_43098 = (state_43142[(2)]);
var inst_43099 = (inst_43087 + (1));
var tmp43163 = inst_43084;
var tmp43164 = inst_43085;
var tmp43165 = inst_43086;
var inst_43084__$1 = tmp43163;
var inst_43085__$1 = tmp43164;
var inst_43086__$1 = tmp43165;
var inst_43087__$1 = inst_43099;
var state_43142__$1 = (function (){var statearr_43168 = state_43142;
(statearr_43168[(19)] = inst_43084__$1);

(statearr_43168[(9)] = inst_43085__$1);

(statearr_43168[(20)] = inst_43086__$1);

(statearr_43168[(21)] = inst_43098);

(statearr_43168[(12)] = inst_43087__$1);

return statearr_43168;
})();
var statearr_43169_44304 = state_43142__$1;
(statearr_43169_44304[(2)] = null);

(statearr_43169_44304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (40))){
var inst_43111 = (state_43142[(22)]);
var inst_43115 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43111);
var state_43142__$1 = state_43142;
var statearr_43170_44305 = state_43142__$1;
(statearr_43170_44305[(2)] = inst_43115);

(statearr_43170_44305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (33))){
var inst_43102 = (state_43142[(23)]);
var inst_43104 = cljs.core.chunked_seq_QMARK_(inst_43102);
var state_43142__$1 = state_43142;
if(inst_43104){
var statearr_43171_44306 = state_43142__$1;
(statearr_43171_44306[(1)] = (36));

} else {
var statearr_43172_44307 = state_43142__$1;
(statearr_43172_44307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (13))){
var inst_43033 = (state_43142[(24)]);
var inst_43036 = cljs.core.async.close_BANG_(inst_43033);
var state_43142__$1 = state_43142;
var statearr_43173_44308 = state_43142__$1;
(statearr_43173_44308[(2)] = inst_43036);

(statearr_43173_44308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (22))){
var inst_43056 = (state_43142[(8)]);
var inst_43059 = cljs.core.async.close_BANG_(inst_43056);
var state_43142__$1 = state_43142;
var statearr_43174_44309 = state_43142__$1;
(statearr_43174_44309[(2)] = inst_43059);

(statearr_43174_44309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (36))){
var inst_43102 = (state_43142[(23)]);
var inst_43106 = cljs.core.chunk_first(inst_43102);
var inst_43107 = cljs.core.chunk_rest(inst_43102);
var inst_43108 = cljs.core.count(inst_43106);
var inst_43084 = inst_43107;
var inst_43085 = inst_43106;
var inst_43086 = inst_43108;
var inst_43087 = (0);
var state_43142__$1 = (function (){var statearr_43175 = state_43142;
(statearr_43175[(19)] = inst_43084);

(statearr_43175[(9)] = inst_43085);

(statearr_43175[(20)] = inst_43086);

(statearr_43175[(12)] = inst_43087);

return statearr_43175;
})();
var statearr_43176_44310 = state_43142__$1;
(statearr_43176_44310[(2)] = null);

(statearr_43176_44310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (41))){
var inst_43102 = (state_43142[(23)]);
var inst_43117 = (state_43142[(2)]);
var inst_43118 = cljs.core.next(inst_43102);
var inst_43084 = inst_43118;
var inst_43085 = null;
var inst_43086 = (0);
var inst_43087 = (0);
var state_43142__$1 = (function (){var statearr_43177 = state_43142;
(statearr_43177[(25)] = inst_43117);

(statearr_43177[(19)] = inst_43084);

(statearr_43177[(9)] = inst_43085);

(statearr_43177[(20)] = inst_43086);

(statearr_43177[(12)] = inst_43087);

return statearr_43177;
})();
var statearr_43178_44311 = state_43142__$1;
(statearr_43178_44311[(2)] = null);

(statearr_43178_44311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (43))){
var state_43142__$1 = state_43142;
var statearr_43179_44312 = state_43142__$1;
(statearr_43179_44312[(2)] = null);

(statearr_43179_44312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (29))){
var inst_43126 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43180_44313 = state_43142__$1;
(statearr_43180_44313[(2)] = inst_43126);

(statearr_43180_44313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (44))){
var inst_43135 = (state_43142[(2)]);
var state_43142__$1 = (function (){var statearr_43181 = state_43142;
(statearr_43181[(26)] = inst_43135);

return statearr_43181;
})();
var statearr_43182_44314 = state_43142__$1;
(statearr_43182_44314[(2)] = null);

(statearr_43182_44314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (6))){
var inst_43076 = (state_43142[(27)]);
var inst_43075 = cljs.core.deref(cs);
var inst_43076__$1 = cljs.core.keys(inst_43075);
var inst_43077 = cljs.core.count(inst_43076__$1);
var inst_43078 = cljs.core.reset_BANG_(dctr,inst_43077);
var inst_43083 = cljs.core.seq(inst_43076__$1);
var inst_43084 = inst_43083;
var inst_43085 = null;
var inst_43086 = (0);
var inst_43087 = (0);
var state_43142__$1 = (function (){var statearr_43183 = state_43142;
(statearr_43183[(19)] = inst_43084);

(statearr_43183[(27)] = inst_43076__$1);

(statearr_43183[(9)] = inst_43085);

(statearr_43183[(28)] = inst_43078);

(statearr_43183[(20)] = inst_43086);

(statearr_43183[(12)] = inst_43087);

return statearr_43183;
})();
var statearr_43184_44319 = state_43142__$1;
(statearr_43184_44319[(2)] = null);

(statearr_43184_44319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (28))){
var inst_43084 = (state_43142[(19)]);
var inst_43102 = (state_43142[(23)]);
var inst_43102__$1 = cljs.core.seq(inst_43084);
var state_43142__$1 = (function (){var statearr_43185 = state_43142;
(statearr_43185[(23)] = inst_43102__$1);

return statearr_43185;
})();
if(inst_43102__$1){
var statearr_43186_44320 = state_43142__$1;
(statearr_43186_44320[(1)] = (33));

} else {
var statearr_43187_44321 = state_43142__$1;
(statearr_43187_44321[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (25))){
var inst_43086 = (state_43142[(20)]);
var inst_43087 = (state_43142[(12)]);
var inst_43089 = (inst_43087 < inst_43086);
var inst_43090 = inst_43089;
var state_43142__$1 = state_43142;
if(cljs.core.truth_(inst_43090)){
var statearr_43188_44322 = state_43142__$1;
(statearr_43188_44322[(1)] = (27));

} else {
var statearr_43189_44323 = state_43142__$1;
(statearr_43189_44323[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (34))){
var state_43142__$1 = state_43142;
var statearr_43190_44324 = state_43142__$1;
(statearr_43190_44324[(2)] = null);

(statearr_43190_44324[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (17))){
var state_43142__$1 = state_43142;
var statearr_43191_44325 = state_43142__$1;
(statearr_43191_44325[(2)] = null);

(statearr_43191_44325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (3))){
var inst_43140 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43142__$1,inst_43140);
} else {
if((state_val_43143 === (12))){
var inst_43071 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43192_44327 = state_43142__$1;
(statearr_43192_44327[(2)] = inst_43071);

(statearr_43192_44327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (2))){
var state_43142__$1 = state_43142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43142__$1,(4),ch);
} else {
if((state_val_43143 === (23))){
var state_43142__$1 = state_43142;
var statearr_43193_44329 = state_43142__$1;
(statearr_43193_44329[(2)] = null);

(statearr_43193_44329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (35))){
var inst_43124 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43194_44330 = state_43142__$1;
(statearr_43194_44330[(2)] = inst_43124);

(statearr_43194_44330[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (19))){
var inst_43043 = (state_43142[(7)]);
var inst_43047 = cljs.core.chunk_first(inst_43043);
var inst_43048 = cljs.core.chunk_rest(inst_43043);
var inst_43049 = cljs.core.count(inst_43047);
var inst_43021 = inst_43048;
var inst_43022 = inst_43047;
var inst_43023 = inst_43049;
var inst_43024 = (0);
var state_43142__$1 = (function (){var statearr_43195 = state_43142;
(statearr_43195[(14)] = inst_43024);

(statearr_43195[(15)] = inst_43023);

(statearr_43195[(16)] = inst_43021);

(statearr_43195[(17)] = inst_43022);

return statearr_43195;
})();
var statearr_43196_44338 = state_43142__$1;
(statearr_43196_44338[(2)] = null);

(statearr_43196_44338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (11))){
var inst_43021 = (state_43142[(16)]);
var inst_43043 = (state_43142[(7)]);
var inst_43043__$1 = cljs.core.seq(inst_43021);
var state_43142__$1 = (function (){var statearr_43197 = state_43142;
(statearr_43197[(7)] = inst_43043__$1);

return statearr_43197;
})();
if(inst_43043__$1){
var statearr_43198_44339 = state_43142__$1;
(statearr_43198_44339[(1)] = (16));

} else {
var statearr_43199_44340 = state_43142__$1;
(statearr_43199_44340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (9))){
var inst_43073 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43200_44341 = state_43142__$1;
(statearr_43200_44341[(2)] = inst_43073);

(statearr_43200_44341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (5))){
var inst_43019 = cljs.core.deref(cs);
var inst_43020 = cljs.core.seq(inst_43019);
var inst_43021 = inst_43020;
var inst_43022 = null;
var inst_43023 = (0);
var inst_43024 = (0);
var state_43142__$1 = (function (){var statearr_43201 = state_43142;
(statearr_43201[(14)] = inst_43024);

(statearr_43201[(15)] = inst_43023);

(statearr_43201[(16)] = inst_43021);

(statearr_43201[(17)] = inst_43022);

return statearr_43201;
})();
var statearr_43202_44342 = state_43142__$1;
(statearr_43202_44342[(2)] = null);

(statearr_43202_44342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (14))){
var state_43142__$1 = state_43142;
var statearr_43203_44343 = state_43142__$1;
(statearr_43203_44343[(2)] = null);

(statearr_43203_44343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (45))){
var inst_43132 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43204_44344 = state_43142__$1;
(statearr_43204_44344[(2)] = inst_43132);

(statearr_43204_44344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (26))){
var inst_43076 = (state_43142[(27)]);
var inst_43128 = (state_43142[(2)]);
var inst_43129 = cljs.core.seq(inst_43076);
var state_43142__$1 = (function (){var statearr_43205 = state_43142;
(statearr_43205[(29)] = inst_43128);

return statearr_43205;
})();
if(inst_43129){
var statearr_43206_44345 = state_43142__$1;
(statearr_43206_44345[(1)] = (42));

} else {
var statearr_43207_44346 = state_43142__$1;
(statearr_43207_44346[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (16))){
var inst_43043 = (state_43142[(7)]);
var inst_43045 = cljs.core.chunked_seq_QMARK_(inst_43043);
var state_43142__$1 = state_43142;
if(inst_43045){
var statearr_43208_44347 = state_43142__$1;
(statearr_43208_44347[(1)] = (19));

} else {
var statearr_43209_44348 = state_43142__$1;
(statearr_43209_44348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (38))){
var inst_43121 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43210_44349 = state_43142__$1;
(statearr_43210_44349[(2)] = inst_43121);

(statearr_43210_44349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (30))){
var state_43142__$1 = state_43142;
var statearr_43211_44350 = state_43142__$1;
(statearr_43211_44350[(2)] = null);

(statearr_43211_44350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (10))){
var inst_43024 = (state_43142[(14)]);
var inst_43022 = (state_43142[(17)]);
var inst_43032 = cljs.core._nth(inst_43022,inst_43024);
var inst_43033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43032,(0),null);
var inst_43034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43032,(1),null);
var state_43142__$1 = (function (){var statearr_43212 = state_43142;
(statearr_43212[(24)] = inst_43033);

return statearr_43212;
})();
if(cljs.core.truth_(inst_43034)){
var statearr_43213_44351 = state_43142__$1;
(statearr_43213_44351[(1)] = (13));

} else {
var statearr_43214_44352 = state_43142__$1;
(statearr_43214_44352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (18))){
var inst_43069 = (state_43142[(2)]);
var state_43142__$1 = state_43142;
var statearr_43215_44353 = state_43142__$1;
(statearr_43215_44353[(2)] = inst_43069);

(statearr_43215_44353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (42))){
var state_43142__$1 = state_43142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43142__$1,(45),dchan);
} else {
if((state_val_43143 === (37))){
var inst_43012 = (state_43142[(10)]);
var inst_43111 = (state_43142[(22)]);
var inst_43102 = (state_43142[(23)]);
var inst_43111__$1 = cljs.core.first(inst_43102);
var inst_43112 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43111__$1,inst_43012,done);
var state_43142__$1 = (function (){var statearr_43216 = state_43142;
(statearr_43216[(22)] = inst_43111__$1);

return statearr_43216;
})();
if(cljs.core.truth_(inst_43112)){
var statearr_43217_44355 = state_43142__$1;
(statearr_43217_44355[(1)] = (39));

} else {
var statearr_43218_44356 = state_43142__$1;
(statearr_43218_44356[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43143 === (8))){
var inst_43024 = (state_43142[(14)]);
var inst_43023 = (state_43142[(15)]);
var inst_43026 = (inst_43024 < inst_43023);
var inst_43027 = inst_43026;
var state_43142__$1 = state_43142;
if(cljs.core.truth_(inst_43027)){
var statearr_43219_44359 = state_43142__$1;
(statearr_43219_44359[(1)] = (10));

} else {
var statearr_43220_44360 = state_43142__$1;
(statearr_43220_44360[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42493__auto__ = null;
var cljs$core$async$mult_$_state_machine__42493__auto____0 = (function (){
var statearr_43221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43221[(0)] = cljs$core$async$mult_$_state_machine__42493__auto__);

(statearr_43221[(1)] = (1));

return statearr_43221;
});
var cljs$core$async$mult_$_state_machine__42493__auto____1 = (function (state_43142){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43142);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43222){var ex__42496__auto__ = e43222;
var statearr_43223_44371 = state_43142;
(statearr_43223_44371[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43142[(4)]))){
var statearr_43224_44376 = state_43142;
(statearr_43224_44376[(1)] = cljs.core.first((state_43142[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44377 = state_43142;
state_43142 = G__44377;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42493__auto__ = function(state_43142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42493__auto____1.call(this,state_43142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42493__auto____0;
cljs$core$async$mult_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42493__auto____1;
return cljs$core$async$mult_$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43225 = f__42529__auto__();
(statearr_43225[(6)] = c__42528__auto___44290);

return statearr_43225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var G__43227 = arguments.length;
switch (G__43227) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44379 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44379(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44380 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44380(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44381 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44381(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44382 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44382(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44386 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44386(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44387 = arguments.length;
var i__4737__auto___44388 = (0);
while(true){
if((i__4737__auto___44388 < len__4736__auto___44387)){
args__4742__auto__.push((arguments[i__4737__auto___44388]));

var G__44390 = (i__4737__auto___44388 + (1));
i__4737__auto___44388 = G__44390;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43232){
var map__43233 = p__43232;
var map__43233__$1 = (((((!((map__43233 == null))))?(((((map__43233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43233):map__43233);
var opts = map__43233__$1;
var statearr_43235_44391 = state;
(statearr_43235_44391[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43236_44393 = state;
(statearr_43236_44393[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43237_44399 = state;
(statearr_43237_44399[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43228){
var G__43229 = cljs.core.first(seq43228);
var seq43228__$1 = cljs.core.next(seq43228);
var G__43230 = cljs.core.first(seq43228__$1);
var seq43228__$2 = cljs.core.next(seq43228__$1);
var G__43231 = cljs.core.first(seq43228__$2);
var seq43228__$3 = cljs.core.next(seq43228__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43229,G__43230,G__43231,seq43228__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43238 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43239){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43239 = meta43239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43240,meta43239__$1){
var self__ = this;
var _43240__$1 = this;
return (new cljs.core.async.t_cljs$core$async43238(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43239__$1));
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43240){
var self__ = this;
var _43240__$1 = this;
return self__.meta43239;
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43238.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43239","meta43239",-399844141,null)], null);
}));

(cljs.core.async.t_cljs$core$async43238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43238");

(cljs.core.async.t_cljs$core$async43238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43238.
 */
cljs.core.async.__GT_t_cljs$core$async43238 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43238(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43239){
return (new cljs.core.async.t_cljs$core$async43238(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43239));
});

}

return (new cljs.core.async.t_cljs$core$async43238(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42528__auto___44420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43342){
var state_val_43343 = (state_43342[(1)]);
if((state_val_43343 === (7))){
var inst_43257 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
var statearr_43344_44421 = state_43342__$1;
(statearr_43344_44421[(2)] = inst_43257);

(statearr_43344_44421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (20))){
var inst_43269 = (state_43342[(7)]);
var state_43342__$1 = state_43342;
var statearr_43345_44422 = state_43342__$1;
(statearr_43345_44422[(2)] = inst_43269);

(statearr_43345_44422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (27))){
var state_43342__$1 = state_43342;
var statearr_43346_44423 = state_43342__$1;
(statearr_43346_44423[(2)] = null);

(statearr_43346_44423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (1))){
var inst_43244 = (state_43342[(8)]);
var inst_43244__$1 = calc_state();
var inst_43246 = (inst_43244__$1 == null);
var inst_43247 = cljs.core.not(inst_43246);
var state_43342__$1 = (function (){var statearr_43347 = state_43342;
(statearr_43347[(8)] = inst_43244__$1);

return statearr_43347;
})();
if(inst_43247){
var statearr_43348_44424 = state_43342__$1;
(statearr_43348_44424[(1)] = (2));

} else {
var statearr_43349_44425 = state_43342__$1;
(statearr_43349_44425[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (24))){
var inst_43293 = (state_43342[(9)]);
var inst_43302 = (state_43342[(10)]);
var inst_43316 = (state_43342[(11)]);
var inst_43316__$1 = (inst_43293.cljs$core$IFn$_invoke$arity$1 ? inst_43293.cljs$core$IFn$_invoke$arity$1(inst_43302) : inst_43293.call(null,inst_43302));
var state_43342__$1 = (function (){var statearr_43350 = state_43342;
(statearr_43350[(11)] = inst_43316__$1);

return statearr_43350;
})();
if(cljs.core.truth_(inst_43316__$1)){
var statearr_43351_44426 = state_43342__$1;
(statearr_43351_44426[(1)] = (29));

} else {
var statearr_43352_44427 = state_43342__$1;
(statearr_43352_44427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (4))){
var inst_43260 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43260)){
var statearr_43353_44428 = state_43342__$1;
(statearr_43353_44428[(1)] = (8));

} else {
var statearr_43354_44429 = state_43342__$1;
(statearr_43354_44429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (15))){
var inst_43287 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43287)){
var statearr_43355_44430 = state_43342__$1;
(statearr_43355_44430[(1)] = (19));

} else {
var statearr_43356_44431 = state_43342__$1;
(statearr_43356_44431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (21))){
var inst_43292 = (state_43342[(12)]);
var inst_43292__$1 = (state_43342[(2)]);
var inst_43293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43292__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43292__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43292__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43342__$1 = (function (){var statearr_43357 = state_43342;
(statearr_43357[(9)] = inst_43293);

(statearr_43357[(12)] = inst_43292__$1);

(statearr_43357[(13)] = inst_43294);

return statearr_43357;
})();
return cljs.core.async.ioc_alts_BANG_(state_43342__$1,(22),inst_43295);
} else {
if((state_val_43343 === (31))){
var inst_43324 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43324)){
var statearr_43358_44432 = state_43342__$1;
(statearr_43358_44432[(1)] = (32));

} else {
var statearr_43359_44433 = state_43342__$1;
(statearr_43359_44433[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (32))){
var inst_43301 = (state_43342[(14)]);
var state_43342__$1 = state_43342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43342__$1,(35),out,inst_43301);
} else {
if((state_val_43343 === (33))){
var inst_43292 = (state_43342[(12)]);
var inst_43269 = inst_43292;
var state_43342__$1 = (function (){var statearr_43360 = state_43342;
(statearr_43360[(7)] = inst_43269);

return statearr_43360;
})();
var statearr_43361_44434 = state_43342__$1;
(statearr_43361_44434[(2)] = null);

(statearr_43361_44434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (13))){
var inst_43269 = (state_43342[(7)]);
var inst_43276 = inst_43269.cljs$lang$protocol_mask$partition0$;
var inst_43277 = (inst_43276 & (64));
var inst_43278 = inst_43269.cljs$core$ISeq$;
var inst_43279 = (cljs.core.PROTOCOL_SENTINEL === inst_43278);
var inst_43280 = ((inst_43277) || (inst_43279));
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43280)){
var statearr_43362_44435 = state_43342__$1;
(statearr_43362_44435[(1)] = (16));

} else {
var statearr_43363_44436 = state_43342__$1;
(statearr_43363_44436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (22))){
var inst_43302 = (state_43342[(10)]);
var inst_43301 = (state_43342[(14)]);
var inst_43300 = (state_43342[(2)]);
var inst_43301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43300,(0),null);
var inst_43302__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43300,(1),null);
var inst_43303 = (inst_43301__$1 == null);
var inst_43304 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43302__$1,change);
var inst_43305 = ((inst_43303) || (inst_43304));
var state_43342__$1 = (function (){var statearr_43364 = state_43342;
(statearr_43364[(10)] = inst_43302__$1);

(statearr_43364[(14)] = inst_43301__$1);

return statearr_43364;
})();
if(cljs.core.truth_(inst_43305)){
var statearr_43365_44437 = state_43342__$1;
(statearr_43365_44437[(1)] = (23));

} else {
var statearr_43366_44438 = state_43342__$1;
(statearr_43366_44438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (36))){
var inst_43292 = (state_43342[(12)]);
var inst_43269 = inst_43292;
var state_43342__$1 = (function (){var statearr_43367 = state_43342;
(statearr_43367[(7)] = inst_43269);

return statearr_43367;
})();
var statearr_43368_44439 = state_43342__$1;
(statearr_43368_44439[(2)] = null);

(statearr_43368_44439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (29))){
var inst_43316 = (state_43342[(11)]);
var state_43342__$1 = state_43342;
var statearr_43369_44440 = state_43342__$1;
(statearr_43369_44440[(2)] = inst_43316);

(statearr_43369_44440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (6))){
var state_43342__$1 = state_43342;
var statearr_43370_44441 = state_43342__$1;
(statearr_43370_44441[(2)] = false);

(statearr_43370_44441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (28))){
var inst_43312 = (state_43342[(2)]);
var inst_43313 = calc_state();
var inst_43269 = inst_43313;
var state_43342__$1 = (function (){var statearr_43371 = state_43342;
(statearr_43371[(7)] = inst_43269);

(statearr_43371[(15)] = inst_43312);

return statearr_43371;
})();
var statearr_43372_44442 = state_43342__$1;
(statearr_43372_44442[(2)] = null);

(statearr_43372_44442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (25))){
var inst_43338 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
var statearr_43373_44443 = state_43342__$1;
(statearr_43373_44443[(2)] = inst_43338);

(statearr_43373_44443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (34))){
var inst_43336 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
var statearr_43374_44444 = state_43342__$1;
(statearr_43374_44444[(2)] = inst_43336);

(statearr_43374_44444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (17))){
var state_43342__$1 = state_43342;
var statearr_43375_44445 = state_43342__$1;
(statearr_43375_44445[(2)] = false);

(statearr_43375_44445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (3))){
var state_43342__$1 = state_43342;
var statearr_43376_44446 = state_43342__$1;
(statearr_43376_44446[(2)] = false);

(statearr_43376_44446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (12))){
var inst_43340 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43342__$1,inst_43340);
} else {
if((state_val_43343 === (2))){
var inst_43244 = (state_43342[(8)]);
var inst_43249 = inst_43244.cljs$lang$protocol_mask$partition0$;
var inst_43250 = (inst_43249 & (64));
var inst_43251 = inst_43244.cljs$core$ISeq$;
var inst_43252 = (cljs.core.PROTOCOL_SENTINEL === inst_43251);
var inst_43253 = ((inst_43250) || (inst_43252));
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43253)){
var statearr_43377_44447 = state_43342__$1;
(statearr_43377_44447[(1)] = (5));

} else {
var statearr_43378_44448 = state_43342__$1;
(statearr_43378_44448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (23))){
var inst_43301 = (state_43342[(14)]);
var inst_43307 = (inst_43301 == null);
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43307)){
var statearr_43379_44449 = state_43342__$1;
(statearr_43379_44449[(1)] = (26));

} else {
var statearr_43380_44450 = state_43342__$1;
(statearr_43380_44450[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (35))){
var inst_43327 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
if(cljs.core.truth_(inst_43327)){
var statearr_43381_44451 = state_43342__$1;
(statearr_43381_44451[(1)] = (36));

} else {
var statearr_43382_44452 = state_43342__$1;
(statearr_43382_44452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (19))){
var inst_43269 = (state_43342[(7)]);
var inst_43289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43269);
var state_43342__$1 = state_43342;
var statearr_43383_44453 = state_43342__$1;
(statearr_43383_44453[(2)] = inst_43289);

(statearr_43383_44453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (11))){
var inst_43269 = (state_43342[(7)]);
var inst_43273 = (inst_43269 == null);
var inst_43274 = cljs.core.not(inst_43273);
var state_43342__$1 = state_43342;
if(inst_43274){
var statearr_43384_44454 = state_43342__$1;
(statearr_43384_44454[(1)] = (13));

} else {
var statearr_43385_44455 = state_43342__$1;
(statearr_43385_44455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (9))){
var inst_43244 = (state_43342[(8)]);
var state_43342__$1 = state_43342;
var statearr_43386_44456 = state_43342__$1;
(statearr_43386_44456[(2)] = inst_43244);

(statearr_43386_44456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (5))){
var state_43342__$1 = state_43342;
var statearr_43387_44457 = state_43342__$1;
(statearr_43387_44457[(2)] = true);

(statearr_43387_44457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (14))){
var state_43342__$1 = state_43342;
var statearr_43388_44458 = state_43342__$1;
(statearr_43388_44458[(2)] = false);

(statearr_43388_44458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (26))){
var inst_43302 = (state_43342[(10)]);
var inst_43309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43302);
var state_43342__$1 = state_43342;
var statearr_43389_44459 = state_43342__$1;
(statearr_43389_44459[(2)] = inst_43309);

(statearr_43389_44459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (16))){
var state_43342__$1 = state_43342;
var statearr_43390_44460 = state_43342__$1;
(statearr_43390_44460[(2)] = true);

(statearr_43390_44460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (38))){
var inst_43332 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
var statearr_43391_44461 = state_43342__$1;
(statearr_43391_44461[(2)] = inst_43332);

(statearr_43391_44461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (30))){
var inst_43293 = (state_43342[(9)]);
var inst_43302 = (state_43342[(10)]);
var inst_43294 = (state_43342[(13)]);
var inst_43319 = cljs.core.empty_QMARK_(inst_43293);
var inst_43320 = (inst_43294.cljs$core$IFn$_invoke$arity$1 ? inst_43294.cljs$core$IFn$_invoke$arity$1(inst_43302) : inst_43294.call(null,inst_43302));
var inst_43321 = cljs.core.not(inst_43320);
var inst_43322 = ((inst_43319) && (inst_43321));
var state_43342__$1 = state_43342;
var statearr_43392_44462 = state_43342__$1;
(statearr_43392_44462[(2)] = inst_43322);

(statearr_43392_44462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (10))){
var inst_43244 = (state_43342[(8)]);
var inst_43265 = (state_43342[(2)]);
var inst_43266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43265,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43265,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43265,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43269 = inst_43244;
var state_43342__$1 = (function (){var statearr_43393 = state_43342;
(statearr_43393[(7)] = inst_43269);

(statearr_43393[(16)] = inst_43267);

(statearr_43393[(17)] = inst_43268);

(statearr_43393[(18)] = inst_43266);

return statearr_43393;
})();
var statearr_43394_44463 = state_43342__$1;
(statearr_43394_44463[(2)] = null);

(statearr_43394_44463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (18))){
var inst_43284 = (state_43342[(2)]);
var state_43342__$1 = state_43342;
var statearr_43395_44464 = state_43342__$1;
(statearr_43395_44464[(2)] = inst_43284);

(statearr_43395_44464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (37))){
var state_43342__$1 = state_43342;
var statearr_43396_44465 = state_43342__$1;
(statearr_43396_44465[(2)] = null);

(statearr_43396_44465[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43343 === (8))){
var inst_43244 = (state_43342[(8)]);
var inst_43262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43244);
var state_43342__$1 = state_43342;
var statearr_43397_44466 = state_43342__$1;
(statearr_43397_44466[(2)] = inst_43262);

(statearr_43397_44466[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42493__auto__ = null;
var cljs$core$async$mix_$_state_machine__42493__auto____0 = (function (){
var statearr_43398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43398[(0)] = cljs$core$async$mix_$_state_machine__42493__auto__);

(statearr_43398[(1)] = (1));

return statearr_43398;
});
var cljs$core$async$mix_$_state_machine__42493__auto____1 = (function (state_43342){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43342);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43399){var ex__42496__auto__ = e43399;
var statearr_43400_44468 = state_43342;
(statearr_43400_44468[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43342[(4)]))){
var statearr_43401_44470 = state_43342;
(statearr_43401_44470[(1)] = cljs.core.first((state_43342[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44471 = state_43342;
state_43342 = G__44471;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42493__auto__ = function(state_43342){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42493__auto____1.call(this,state_43342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42493__auto____0;
cljs$core$async$mix_$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42493__auto____1;
return cljs$core$async$mix_$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43402 = f__42529__auto__();
(statearr_43402[(6)] = c__42528__auto___44420);

return statearr_43402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44472 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44472(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44474 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44474(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44476 = (function() {
var G__44477 = null;
var G__44477__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44477__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44477 = function(p,v){
switch(arguments.length){
case 1:
return G__44477__1.call(this,p);
case 2:
return G__44477__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44477.cljs$core$IFn$_invoke$arity$1 = G__44477__1;
G__44477.cljs$core$IFn$_invoke$arity$2 = G__44477__2;
return G__44477;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43404 = arguments.length;
switch (G__43404) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44476(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44476(p,v);
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
var G__43407 = arguments.length;
switch (G__43407) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43405_SHARP_){
if(cljs.core.truth_((p1__43405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43405_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43405_SHARP_.call(null,topic)))){
return p1__43405_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43405_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43408 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43409){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43409 = meta43409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43410,meta43409__$1){
var self__ = this;
var _43410__$1 = this;
return (new cljs.core.async.t_cljs$core$async43408(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43409__$1));
}));

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43410){
var self__ = this;
var _43410__$1 = this;
return self__.meta43409;
}));

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43409","meta43409",-1394840513,null)], null);
}));

(cljs.core.async.t_cljs$core$async43408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43408");

(cljs.core.async.t_cljs$core$async43408.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43408.
 */
cljs.core.async.__GT_t_cljs$core$async43408 = (function cljs$core$async$__GT_t_cljs$core$async43408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43409){
return (new cljs.core.async.t_cljs$core$async43408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43409));
});

}

return (new cljs.core.async.t_cljs$core$async43408(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42528__auto___44486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43482){
var state_val_43483 = (state_43482[(1)]);
if((state_val_43483 === (7))){
var inst_43478 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43484_44487 = state_43482__$1;
(statearr_43484_44487[(2)] = inst_43478);

(statearr_43484_44487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (20))){
var state_43482__$1 = state_43482;
var statearr_43485_44488 = state_43482__$1;
(statearr_43485_44488[(2)] = null);

(statearr_43485_44488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (1))){
var state_43482__$1 = state_43482;
var statearr_43486_44489 = state_43482__$1;
(statearr_43486_44489[(2)] = null);

(statearr_43486_44489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (24))){
var inst_43461 = (state_43482[(7)]);
var inst_43470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43461);
var state_43482__$1 = state_43482;
var statearr_43487_44490 = state_43482__$1;
(statearr_43487_44490[(2)] = inst_43470);

(statearr_43487_44490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (4))){
var inst_43413 = (state_43482[(8)]);
var inst_43413__$1 = (state_43482[(2)]);
var inst_43414 = (inst_43413__$1 == null);
var state_43482__$1 = (function (){var statearr_43488 = state_43482;
(statearr_43488[(8)] = inst_43413__$1);

return statearr_43488;
})();
if(cljs.core.truth_(inst_43414)){
var statearr_43489_44491 = state_43482__$1;
(statearr_43489_44491[(1)] = (5));

} else {
var statearr_43490_44492 = state_43482__$1;
(statearr_43490_44492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (15))){
var inst_43455 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43491_44493 = state_43482__$1;
(statearr_43491_44493[(2)] = inst_43455);

(statearr_43491_44493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (21))){
var inst_43475 = (state_43482[(2)]);
var state_43482__$1 = (function (){var statearr_43492 = state_43482;
(statearr_43492[(9)] = inst_43475);

return statearr_43492;
})();
var statearr_43493_44494 = state_43482__$1;
(statearr_43493_44494[(2)] = null);

(statearr_43493_44494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (13))){
var inst_43437 = (state_43482[(10)]);
var inst_43439 = cljs.core.chunked_seq_QMARK_(inst_43437);
var state_43482__$1 = state_43482;
if(inst_43439){
var statearr_43494_44495 = state_43482__$1;
(statearr_43494_44495[(1)] = (16));

} else {
var statearr_43495_44496 = state_43482__$1;
(statearr_43495_44496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (22))){
var inst_43467 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
if(cljs.core.truth_(inst_43467)){
var statearr_43496_44497 = state_43482__$1;
(statearr_43496_44497[(1)] = (23));

} else {
var statearr_43497_44498 = state_43482__$1;
(statearr_43497_44498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (6))){
var inst_43413 = (state_43482[(8)]);
var inst_43461 = (state_43482[(7)]);
var inst_43463 = (state_43482[(11)]);
var inst_43461__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43413) : topic_fn.call(null,inst_43413));
var inst_43462 = cljs.core.deref(mults);
var inst_43463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43462,inst_43461__$1);
var state_43482__$1 = (function (){var statearr_43498 = state_43482;
(statearr_43498[(7)] = inst_43461__$1);

(statearr_43498[(11)] = inst_43463__$1);

return statearr_43498;
})();
if(cljs.core.truth_(inst_43463__$1)){
var statearr_43499_44499 = state_43482__$1;
(statearr_43499_44499[(1)] = (19));

} else {
var statearr_43500_44500 = state_43482__$1;
(statearr_43500_44500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (25))){
var inst_43472 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43501_44501 = state_43482__$1;
(statearr_43501_44501[(2)] = inst_43472);

(statearr_43501_44501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (17))){
var inst_43437 = (state_43482[(10)]);
var inst_43446 = cljs.core.first(inst_43437);
var inst_43447 = cljs.core.async.muxch_STAR_(inst_43446);
var inst_43448 = cljs.core.async.close_BANG_(inst_43447);
var inst_43449 = cljs.core.next(inst_43437);
var inst_43423 = inst_43449;
var inst_43424 = null;
var inst_43425 = (0);
var inst_43426 = (0);
var state_43482__$1 = (function (){var statearr_43502 = state_43482;
(statearr_43502[(12)] = inst_43448);

(statearr_43502[(13)] = inst_43426);

(statearr_43502[(14)] = inst_43424);

(statearr_43502[(15)] = inst_43425);

(statearr_43502[(16)] = inst_43423);

return statearr_43502;
})();
var statearr_43503_44502 = state_43482__$1;
(statearr_43503_44502[(2)] = null);

(statearr_43503_44502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (3))){
var inst_43480 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43482__$1,inst_43480);
} else {
if((state_val_43483 === (12))){
var inst_43457 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43504_44503 = state_43482__$1;
(statearr_43504_44503[(2)] = inst_43457);

(statearr_43504_44503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (2))){
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43482__$1,(4),ch);
} else {
if((state_val_43483 === (23))){
var state_43482__$1 = state_43482;
var statearr_43505_44504 = state_43482__$1;
(statearr_43505_44504[(2)] = null);

(statearr_43505_44504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (19))){
var inst_43413 = (state_43482[(8)]);
var inst_43463 = (state_43482[(11)]);
var inst_43465 = cljs.core.async.muxch_STAR_(inst_43463);
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43482__$1,(22),inst_43465,inst_43413);
} else {
if((state_val_43483 === (11))){
var inst_43437 = (state_43482[(10)]);
var inst_43423 = (state_43482[(16)]);
var inst_43437__$1 = cljs.core.seq(inst_43423);
var state_43482__$1 = (function (){var statearr_43506 = state_43482;
(statearr_43506[(10)] = inst_43437__$1);

return statearr_43506;
})();
if(inst_43437__$1){
var statearr_43507_44505 = state_43482__$1;
(statearr_43507_44505[(1)] = (13));

} else {
var statearr_43508_44506 = state_43482__$1;
(statearr_43508_44506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (9))){
var inst_43459 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43509_44508 = state_43482__$1;
(statearr_43509_44508[(2)] = inst_43459);

(statearr_43509_44508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (5))){
var inst_43420 = cljs.core.deref(mults);
var inst_43421 = cljs.core.vals(inst_43420);
var inst_43422 = cljs.core.seq(inst_43421);
var inst_43423 = inst_43422;
var inst_43424 = null;
var inst_43425 = (0);
var inst_43426 = (0);
var state_43482__$1 = (function (){var statearr_43510 = state_43482;
(statearr_43510[(13)] = inst_43426);

(statearr_43510[(14)] = inst_43424);

(statearr_43510[(15)] = inst_43425);

(statearr_43510[(16)] = inst_43423);

return statearr_43510;
})();
var statearr_43511_44509 = state_43482__$1;
(statearr_43511_44509[(2)] = null);

(statearr_43511_44509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (14))){
var state_43482__$1 = state_43482;
var statearr_43515_44510 = state_43482__$1;
(statearr_43515_44510[(2)] = null);

(statearr_43515_44510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (16))){
var inst_43437 = (state_43482[(10)]);
var inst_43441 = cljs.core.chunk_first(inst_43437);
var inst_43442 = cljs.core.chunk_rest(inst_43437);
var inst_43443 = cljs.core.count(inst_43441);
var inst_43423 = inst_43442;
var inst_43424 = inst_43441;
var inst_43425 = inst_43443;
var inst_43426 = (0);
var state_43482__$1 = (function (){var statearr_43516 = state_43482;
(statearr_43516[(13)] = inst_43426);

(statearr_43516[(14)] = inst_43424);

(statearr_43516[(15)] = inst_43425);

(statearr_43516[(16)] = inst_43423);

return statearr_43516;
})();
var statearr_43517_44512 = state_43482__$1;
(statearr_43517_44512[(2)] = null);

(statearr_43517_44512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (10))){
var inst_43426 = (state_43482[(13)]);
var inst_43424 = (state_43482[(14)]);
var inst_43425 = (state_43482[(15)]);
var inst_43423 = (state_43482[(16)]);
var inst_43431 = cljs.core._nth(inst_43424,inst_43426);
var inst_43432 = cljs.core.async.muxch_STAR_(inst_43431);
var inst_43433 = cljs.core.async.close_BANG_(inst_43432);
var inst_43434 = (inst_43426 + (1));
var tmp43512 = inst_43424;
var tmp43513 = inst_43425;
var tmp43514 = inst_43423;
var inst_43423__$1 = tmp43514;
var inst_43424__$1 = tmp43512;
var inst_43425__$1 = tmp43513;
var inst_43426__$1 = inst_43434;
var state_43482__$1 = (function (){var statearr_43518 = state_43482;
(statearr_43518[(17)] = inst_43433);

(statearr_43518[(13)] = inst_43426__$1);

(statearr_43518[(14)] = inst_43424__$1);

(statearr_43518[(15)] = inst_43425__$1);

(statearr_43518[(16)] = inst_43423__$1);

return statearr_43518;
})();
var statearr_43519_44516 = state_43482__$1;
(statearr_43519_44516[(2)] = null);

(statearr_43519_44516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (18))){
var inst_43452 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43520_44517 = state_43482__$1;
(statearr_43520_44517[(2)] = inst_43452);

(statearr_43520_44517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (8))){
var inst_43426 = (state_43482[(13)]);
var inst_43425 = (state_43482[(15)]);
var inst_43428 = (inst_43426 < inst_43425);
var inst_43429 = inst_43428;
var state_43482__$1 = state_43482;
if(cljs.core.truth_(inst_43429)){
var statearr_43521_44519 = state_43482__$1;
(statearr_43521_44519[(1)] = (10));

} else {
var statearr_43522_44520 = state_43482__$1;
(statearr_43522_44520[(1)] = (11));

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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43523[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43523[(1)] = (1));

return statearr_43523;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43482){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43482);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43524){var ex__42496__auto__ = e43524;
var statearr_43525_44523 = state_43482;
(statearr_43525_44523[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43482[(4)]))){
var statearr_43526_44525 = state_43482;
(statearr_43526_44525[(1)] = cljs.core.first((state_43482[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44526 = state_43482;
state_43482 = G__44526;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43527 = f__42529__auto__();
(statearr_43527[(6)] = c__42528__auto___44486);

return statearr_43527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var G__43529 = arguments.length;
switch (G__43529) {
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
var G__43531 = arguments.length;
switch (G__43531) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__43533 = arguments.length;
switch (G__43533) {
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
var c__42528__auto___44530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43576){
var state_val_43577 = (state_43576[(1)]);
if((state_val_43577 === (7))){
var state_43576__$1 = state_43576;
var statearr_43578_44531 = state_43576__$1;
(statearr_43578_44531[(2)] = null);

(statearr_43578_44531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (1))){
var state_43576__$1 = state_43576;
var statearr_43579_44532 = state_43576__$1;
(statearr_43579_44532[(2)] = null);

(statearr_43579_44532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (4))){
var inst_43536 = (state_43576[(7)]);
var inst_43537 = (state_43576[(8)]);
var inst_43539 = (inst_43537 < inst_43536);
var state_43576__$1 = state_43576;
if(cljs.core.truth_(inst_43539)){
var statearr_43580_44533 = state_43576__$1;
(statearr_43580_44533[(1)] = (6));

} else {
var statearr_43581_44534 = state_43576__$1;
(statearr_43581_44534[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (15))){
var inst_43562 = (state_43576[(9)]);
var inst_43567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43562);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43576__$1,(17),out,inst_43567);
} else {
if((state_val_43577 === (13))){
var inst_43562 = (state_43576[(9)]);
var inst_43562__$1 = (state_43576[(2)]);
var inst_43563 = cljs.core.some(cljs.core.nil_QMARK_,inst_43562__$1);
var state_43576__$1 = (function (){var statearr_43582 = state_43576;
(statearr_43582[(9)] = inst_43562__$1);

return statearr_43582;
})();
if(cljs.core.truth_(inst_43563)){
var statearr_43583_44535 = state_43576__$1;
(statearr_43583_44535[(1)] = (14));

} else {
var statearr_43584_44536 = state_43576__$1;
(statearr_43584_44536[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (6))){
var state_43576__$1 = state_43576;
var statearr_43585_44537 = state_43576__$1;
(statearr_43585_44537[(2)] = null);

(statearr_43585_44537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (17))){
var inst_43569 = (state_43576[(2)]);
var state_43576__$1 = (function (){var statearr_43587 = state_43576;
(statearr_43587[(10)] = inst_43569);

return statearr_43587;
})();
var statearr_43588_44538 = state_43576__$1;
(statearr_43588_44538[(2)] = null);

(statearr_43588_44538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (3))){
var inst_43574 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43576__$1,inst_43574);
} else {
if((state_val_43577 === (12))){
var _ = (function (){var statearr_43589 = state_43576;
(statearr_43589[(4)] = cljs.core.rest((state_43576[(4)])));

return statearr_43589;
})();
var state_43576__$1 = state_43576;
var ex43586 = (state_43576__$1[(2)]);
var statearr_43590_44539 = state_43576__$1;
(statearr_43590_44539[(5)] = ex43586);


if((ex43586 instanceof Object)){
var statearr_43591_44540 = state_43576__$1;
(statearr_43591_44540[(1)] = (11));

(statearr_43591_44540[(5)] = null);

} else {
throw ex43586;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (2))){
var inst_43535 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43536 = cnt;
var inst_43537 = (0);
var state_43576__$1 = (function (){var statearr_43592 = state_43576;
(statearr_43592[(7)] = inst_43536);

(statearr_43592[(11)] = inst_43535);

(statearr_43592[(8)] = inst_43537);

return statearr_43592;
})();
var statearr_43593_44541 = state_43576__$1;
(statearr_43593_44541[(2)] = null);

(statearr_43593_44541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (11))){
var inst_43541 = (state_43576[(2)]);
var inst_43542 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43576__$1 = (function (){var statearr_43594 = state_43576;
(statearr_43594[(12)] = inst_43541);

return statearr_43594;
})();
var statearr_43595_44542 = state_43576__$1;
(statearr_43595_44542[(2)] = inst_43542);

(statearr_43595_44542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (9))){
var inst_43537 = (state_43576[(8)]);
var _ = (function (){var statearr_43596 = state_43576;
(statearr_43596[(4)] = cljs.core.cons((12),(state_43576[(4)])));

return statearr_43596;
})();
var inst_43548 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43537) : chs__$1.call(null,inst_43537));
var inst_43549 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43537) : done.call(null,inst_43537));
var inst_43550 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43548,inst_43549);
var ___$1 = (function (){var statearr_43597 = state_43576;
(statearr_43597[(4)] = cljs.core.rest((state_43576[(4)])));

return statearr_43597;
})();
var state_43576__$1 = state_43576;
var statearr_43598_44543 = state_43576__$1;
(statearr_43598_44543[(2)] = inst_43550);

(statearr_43598_44543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (5))){
var inst_43560 = (state_43576[(2)]);
var state_43576__$1 = (function (){var statearr_43599 = state_43576;
(statearr_43599[(13)] = inst_43560);

return statearr_43599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43576__$1,(13),dchan);
} else {
if((state_val_43577 === (14))){
var inst_43565 = cljs.core.async.close_BANG_(out);
var state_43576__$1 = state_43576;
var statearr_43600_44544 = state_43576__$1;
(statearr_43600_44544[(2)] = inst_43565);

(statearr_43600_44544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (16))){
var inst_43572 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
var statearr_43601_44545 = state_43576__$1;
(statearr_43601_44545[(2)] = inst_43572);

(statearr_43601_44545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (10))){
var inst_43537 = (state_43576[(8)]);
var inst_43553 = (state_43576[(2)]);
var inst_43554 = (inst_43537 + (1));
var inst_43537__$1 = inst_43554;
var state_43576__$1 = (function (){var statearr_43602 = state_43576;
(statearr_43602[(14)] = inst_43553);

(statearr_43602[(8)] = inst_43537__$1);

return statearr_43602;
})();
var statearr_43603_44546 = state_43576__$1;
(statearr_43603_44546[(2)] = null);

(statearr_43603_44546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (8))){
var inst_43558 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
var statearr_43604_44547 = state_43576__$1;
(statearr_43604_44547[(2)] = inst_43558);

(statearr_43604_44547[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43605[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43605[(1)] = (1));

return statearr_43605;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43576){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43576);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43606){var ex__42496__auto__ = e43606;
var statearr_43607_44548 = state_43576;
(statearr_43607_44548[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43576[(4)]))){
var statearr_43608_44549 = state_43576;
(statearr_43608_44549[(1)] = cljs.core.first((state_43576[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44550 = state_43576;
state_43576 = G__44550;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43609 = f__42529__auto__();
(statearr_43609[(6)] = c__42528__auto___44530);

return statearr_43609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var G__43612 = arguments.length;
switch (G__43612) {
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
var c__42528__auto___44552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43644){
var state_val_43645 = (state_43644[(1)]);
if((state_val_43645 === (7))){
var inst_43624 = (state_43644[(7)]);
var inst_43623 = (state_43644[(8)]);
var inst_43623__$1 = (state_43644[(2)]);
var inst_43624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43623__$1,(0),null);
var inst_43625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43623__$1,(1),null);
var inst_43626 = (inst_43624__$1 == null);
var state_43644__$1 = (function (){var statearr_43646 = state_43644;
(statearr_43646[(9)] = inst_43625);

(statearr_43646[(7)] = inst_43624__$1);

(statearr_43646[(8)] = inst_43623__$1);

return statearr_43646;
})();
if(cljs.core.truth_(inst_43626)){
var statearr_43647_44553 = state_43644__$1;
(statearr_43647_44553[(1)] = (8));

} else {
var statearr_43648_44554 = state_43644__$1;
(statearr_43648_44554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (1))){
var inst_43613 = cljs.core.vec(chs);
var inst_43614 = inst_43613;
var state_43644__$1 = (function (){var statearr_43649 = state_43644;
(statearr_43649[(10)] = inst_43614);

return statearr_43649;
})();
var statearr_43650_44555 = state_43644__$1;
(statearr_43650_44555[(2)] = null);

(statearr_43650_44555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (4))){
var inst_43614 = (state_43644[(10)]);
var state_43644__$1 = state_43644;
return cljs.core.async.ioc_alts_BANG_(state_43644__$1,(7),inst_43614);
} else {
if((state_val_43645 === (6))){
var inst_43640 = (state_43644[(2)]);
var state_43644__$1 = state_43644;
var statearr_43651_44556 = state_43644__$1;
(statearr_43651_44556[(2)] = inst_43640);

(statearr_43651_44556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (3))){
var inst_43642 = (state_43644[(2)]);
var state_43644__$1 = state_43644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43644__$1,inst_43642);
} else {
if((state_val_43645 === (2))){
var inst_43614 = (state_43644[(10)]);
var inst_43616 = cljs.core.count(inst_43614);
var inst_43617 = (inst_43616 > (0));
var state_43644__$1 = state_43644;
if(cljs.core.truth_(inst_43617)){
var statearr_43653_44557 = state_43644__$1;
(statearr_43653_44557[(1)] = (4));

} else {
var statearr_43654_44558 = state_43644__$1;
(statearr_43654_44558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (11))){
var inst_43614 = (state_43644[(10)]);
var inst_43633 = (state_43644[(2)]);
var tmp43652 = inst_43614;
var inst_43614__$1 = tmp43652;
var state_43644__$1 = (function (){var statearr_43655 = state_43644;
(statearr_43655[(10)] = inst_43614__$1);

(statearr_43655[(11)] = inst_43633);

return statearr_43655;
})();
var statearr_43656_44559 = state_43644__$1;
(statearr_43656_44559[(2)] = null);

(statearr_43656_44559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (9))){
var inst_43624 = (state_43644[(7)]);
var state_43644__$1 = state_43644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43644__$1,(11),out,inst_43624);
} else {
if((state_val_43645 === (5))){
var inst_43638 = cljs.core.async.close_BANG_(out);
var state_43644__$1 = state_43644;
var statearr_43657_44560 = state_43644__$1;
(statearr_43657_44560[(2)] = inst_43638);

(statearr_43657_44560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (10))){
var inst_43636 = (state_43644[(2)]);
var state_43644__$1 = state_43644;
var statearr_43658_44561 = state_43644__$1;
(statearr_43658_44561[(2)] = inst_43636);

(statearr_43658_44561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43645 === (8))){
var inst_43614 = (state_43644[(10)]);
var inst_43625 = (state_43644[(9)]);
var inst_43624 = (state_43644[(7)]);
var inst_43623 = (state_43644[(8)]);
var inst_43628 = (function (){var cs = inst_43614;
var vec__43619 = inst_43623;
var v = inst_43624;
var c = inst_43625;
return (function (p1__43610_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43610_SHARP_);
});
})();
var inst_43629 = cljs.core.filterv(inst_43628,inst_43614);
var inst_43614__$1 = inst_43629;
var state_43644__$1 = (function (){var statearr_43659 = state_43644;
(statearr_43659[(10)] = inst_43614__$1);

return statearr_43659;
})();
var statearr_43660_44562 = state_43644__$1;
(statearr_43660_44562[(2)] = null);

(statearr_43660_44562[(1)] = (2));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43661 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43661[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43661[(1)] = (1));

return statearr_43661;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43644){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43644);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43662){var ex__42496__auto__ = e43662;
var statearr_43663_44563 = state_43644;
(statearr_43663_44563[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43644[(4)]))){
var statearr_43664_44564 = state_43644;
(statearr_43664_44564[(1)] = cljs.core.first((state_43644[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44565 = state_43644;
state_43644 = G__44565;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43665 = f__42529__auto__();
(statearr_43665[(6)] = c__42528__auto___44552);

return statearr_43665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
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
var G__43667 = arguments.length;
switch (G__43667) {
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
var c__42528__auto___44567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43691){
var state_val_43692 = (state_43691[(1)]);
if((state_val_43692 === (7))){
var inst_43673 = (state_43691[(7)]);
var inst_43673__$1 = (state_43691[(2)]);
var inst_43674 = (inst_43673__$1 == null);
var inst_43675 = cljs.core.not(inst_43674);
var state_43691__$1 = (function (){var statearr_43693 = state_43691;
(statearr_43693[(7)] = inst_43673__$1);

return statearr_43693;
})();
if(inst_43675){
var statearr_43694_44568 = state_43691__$1;
(statearr_43694_44568[(1)] = (8));

} else {
var statearr_43695_44569 = state_43691__$1;
(statearr_43695_44569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (1))){
var inst_43668 = (0);
var state_43691__$1 = (function (){var statearr_43696 = state_43691;
(statearr_43696[(8)] = inst_43668);

return statearr_43696;
})();
var statearr_43697_44570 = state_43691__$1;
(statearr_43697_44570[(2)] = null);

(statearr_43697_44570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (4))){
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43691__$1,(7),ch);
} else {
if((state_val_43692 === (6))){
var inst_43686 = (state_43691[(2)]);
var state_43691__$1 = state_43691;
var statearr_43698_44571 = state_43691__$1;
(statearr_43698_44571[(2)] = inst_43686);

(statearr_43698_44571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (3))){
var inst_43688 = (state_43691[(2)]);
var inst_43689 = cljs.core.async.close_BANG_(out);
var state_43691__$1 = (function (){var statearr_43699 = state_43691;
(statearr_43699[(9)] = inst_43688);

return statearr_43699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43691__$1,inst_43689);
} else {
if((state_val_43692 === (2))){
var inst_43668 = (state_43691[(8)]);
var inst_43670 = (inst_43668 < n);
var state_43691__$1 = state_43691;
if(cljs.core.truth_(inst_43670)){
var statearr_43700_44572 = state_43691__$1;
(statearr_43700_44572[(1)] = (4));

} else {
var statearr_43701_44573 = state_43691__$1;
(statearr_43701_44573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (11))){
var inst_43668 = (state_43691[(8)]);
var inst_43678 = (state_43691[(2)]);
var inst_43679 = (inst_43668 + (1));
var inst_43668__$1 = inst_43679;
var state_43691__$1 = (function (){var statearr_43702 = state_43691;
(statearr_43702[(8)] = inst_43668__$1);

(statearr_43702[(10)] = inst_43678);

return statearr_43702;
})();
var statearr_43703_44574 = state_43691__$1;
(statearr_43703_44574[(2)] = null);

(statearr_43703_44574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (9))){
var state_43691__$1 = state_43691;
var statearr_43704_44578 = state_43691__$1;
(statearr_43704_44578[(2)] = null);

(statearr_43704_44578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (5))){
var state_43691__$1 = state_43691;
var statearr_43705_44579 = state_43691__$1;
(statearr_43705_44579[(2)] = null);

(statearr_43705_44579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (10))){
var inst_43683 = (state_43691[(2)]);
var state_43691__$1 = state_43691;
var statearr_43706_44580 = state_43691__$1;
(statearr_43706_44580[(2)] = inst_43683);

(statearr_43706_44580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (8))){
var inst_43673 = (state_43691[(7)]);
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43691__$1,(11),out,inst_43673);
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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43707[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43707[(1)] = (1));

return statearr_43707;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43691){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43691);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43708){var ex__42496__auto__ = e43708;
var statearr_43709_44581 = state_43691;
(statearr_43709_44581[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43691[(4)]))){
var statearr_43710_44582 = state_43691;
(statearr_43710_44582[(1)] = cljs.core.first((state_43691[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44584 = state_43691;
state_43691 = G__44584;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43711 = f__42529__auto__();
(statearr_43711[(6)] = c__42528__auto___44567);

return statearr_43711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43713 = (function (f,ch,meta43714){
this.f = f;
this.ch = ch;
this.meta43714 = meta43714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43715,meta43714__$1){
var self__ = this;
var _43715__$1 = this;
return (new cljs.core.async.t_cljs$core$async43713(self__.f,self__.ch,meta43714__$1));
}));

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43715){
var self__ = this;
var _43715__$1 = this;
return self__.meta43714;
}));

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43716 = (function (f,ch,meta43714,_,fn1,meta43717){
this.f = f;
this.ch = ch;
this.meta43714 = meta43714;
this._ = _;
this.fn1 = fn1;
this.meta43717 = meta43717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43718,meta43717__$1){
var self__ = this;
var _43718__$1 = this;
return (new cljs.core.async.t_cljs$core$async43716(self__.f,self__.ch,self__.meta43714,self__._,self__.fn1,meta43717__$1));
}));

(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43718){
var self__ = this;
var _43718__$1 = this;
return self__.meta43717;
}));

(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43712_SHARP_){
var G__43719 = (((p1__43712_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43712_SHARP_) : self__.f.call(null,p1__43712_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43719) : f1.call(null,G__43719));
});
}));

(cljs.core.async.t_cljs$core$async43716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43714","meta43714",-1555098433,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43713","cljs.core.async/t_cljs$core$async43713",-1906033240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43717","meta43717",-862711489,null)], null);
}));

(cljs.core.async.t_cljs$core$async43716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43716");

(cljs.core.async.t_cljs$core$async43716.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43716.
 */
cljs.core.async.__GT_t_cljs$core$async43716 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43716(f__$1,ch__$1,meta43714__$1,___$2,fn1__$1,meta43717){
return (new cljs.core.async.t_cljs$core$async43716(f__$1,ch__$1,meta43714__$1,___$2,fn1__$1,meta43717));
});

}

return (new cljs.core.async.t_cljs$core$async43716(self__.f,self__.ch,self__.meta43714,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43720 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43720) : self__.f.call(null,G__43720));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43714","meta43714",-1555098433,null)], null);
}));

(cljs.core.async.t_cljs$core$async43713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43713");

(cljs.core.async.t_cljs$core$async43713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43713.
 */
cljs.core.async.__GT_t_cljs$core$async43713 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43713(f__$1,ch__$1,meta43714){
return (new cljs.core.async.t_cljs$core$async43713(f__$1,ch__$1,meta43714));
});

}

return (new cljs.core.async.t_cljs$core$async43713(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43721 = (function (f,ch,meta43722){
this.f = f;
this.ch = ch;
this.meta43722 = meta43722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43723,meta43722__$1){
var self__ = this;
var _43723__$1 = this;
return (new cljs.core.async.t_cljs$core$async43721(self__.f,self__.ch,meta43722__$1));
}));

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43723){
var self__ = this;
var _43723__$1 = this;
return self__.meta43722;
}));

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43722","meta43722",1025321634,null)], null);
}));

(cljs.core.async.t_cljs$core$async43721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43721");

(cljs.core.async.t_cljs$core$async43721.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43721.
 */
cljs.core.async.__GT_t_cljs$core$async43721 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43721(f__$1,ch__$1,meta43722){
return (new cljs.core.async.t_cljs$core$async43721(f__$1,ch__$1,meta43722));
});

}

return (new cljs.core.async.t_cljs$core$async43721(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43724 = (function (p,ch,meta43725){
this.p = p;
this.ch = ch;
this.meta43725 = meta43725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43726,meta43725__$1){
var self__ = this;
var _43726__$1 = this;
return (new cljs.core.async.t_cljs$core$async43724(self__.p,self__.ch,meta43725__$1));
}));

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43726){
var self__ = this;
var _43726__$1 = this;
return self__.meta43725;
}));

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43725","meta43725",-373924048,null)], null);
}));

(cljs.core.async.t_cljs$core$async43724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43724");

(cljs.core.async.t_cljs$core$async43724.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43724.
 */
cljs.core.async.__GT_t_cljs$core$async43724 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43724(p__$1,ch__$1,meta43725){
return (new cljs.core.async.t_cljs$core$async43724(p__$1,ch__$1,meta43725));
});

}

return (new cljs.core.async.t_cljs$core$async43724(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43728 = arguments.length;
switch (G__43728) {
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
var c__42528__auto___44588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43749){
var state_val_43750 = (state_43749[(1)]);
if((state_val_43750 === (7))){
var inst_43745 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43751_44589 = state_43749__$1;
(statearr_43751_44589[(2)] = inst_43745);

(statearr_43751_44589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (1))){
var state_43749__$1 = state_43749;
var statearr_43752_44590 = state_43749__$1;
(statearr_43752_44590[(2)] = null);

(statearr_43752_44590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (4))){
var inst_43731 = (state_43749[(7)]);
var inst_43731__$1 = (state_43749[(2)]);
var inst_43732 = (inst_43731__$1 == null);
var state_43749__$1 = (function (){var statearr_43753 = state_43749;
(statearr_43753[(7)] = inst_43731__$1);

return statearr_43753;
})();
if(cljs.core.truth_(inst_43732)){
var statearr_43754_44591 = state_43749__$1;
(statearr_43754_44591[(1)] = (5));

} else {
var statearr_43755_44592 = state_43749__$1;
(statearr_43755_44592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (6))){
var inst_43731 = (state_43749[(7)]);
var inst_43736 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43731) : p.call(null,inst_43731));
var state_43749__$1 = state_43749;
if(cljs.core.truth_(inst_43736)){
var statearr_43756_44593 = state_43749__$1;
(statearr_43756_44593[(1)] = (8));

} else {
var statearr_43757_44594 = state_43749__$1;
(statearr_43757_44594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (3))){
var inst_43747 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43749__$1,inst_43747);
} else {
if((state_val_43750 === (2))){
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43749__$1,(4),ch);
} else {
if((state_val_43750 === (11))){
var inst_43739 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43758_44595 = state_43749__$1;
(statearr_43758_44595[(2)] = inst_43739);

(statearr_43758_44595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (9))){
var state_43749__$1 = state_43749;
var statearr_43759_44596 = state_43749__$1;
(statearr_43759_44596[(2)] = null);

(statearr_43759_44596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (5))){
var inst_43734 = cljs.core.async.close_BANG_(out);
var state_43749__$1 = state_43749;
var statearr_43760_44597 = state_43749__$1;
(statearr_43760_44597[(2)] = inst_43734);

(statearr_43760_44597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (10))){
var inst_43742 = (state_43749[(2)]);
var state_43749__$1 = (function (){var statearr_43761 = state_43749;
(statearr_43761[(8)] = inst_43742);

return statearr_43761;
})();
var statearr_43762_44598 = state_43749__$1;
(statearr_43762_44598[(2)] = null);

(statearr_43762_44598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (8))){
var inst_43731 = (state_43749[(7)]);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43749__$1,(11),out,inst_43731);
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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43763 = [null,null,null,null,null,null,null,null,null];
(statearr_43763[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43763[(1)] = (1));

return statearr_43763;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43749){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43749);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43764){var ex__42496__auto__ = e43764;
var statearr_43765_44599 = state_43749;
(statearr_43765_44599[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43749[(4)]))){
var statearr_43766_44600 = state_43749;
(statearr_43766_44600[(1)] = cljs.core.first((state_43749[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44601 = state_43749;
state_43749 = G__44601;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43767 = f__42529__auto__();
(statearr_43767[(6)] = c__42528__auto___44588);

return statearr_43767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43769 = arguments.length;
switch (G__43769) {
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
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43831){
var state_val_43832 = (state_43831[(1)]);
if((state_val_43832 === (7))){
var inst_43827 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43833_44603 = state_43831__$1;
(statearr_43833_44603[(2)] = inst_43827);

(statearr_43833_44603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (20))){
var inst_43797 = (state_43831[(7)]);
var inst_43808 = (state_43831[(2)]);
var inst_43809 = cljs.core.next(inst_43797);
var inst_43783 = inst_43809;
var inst_43784 = null;
var inst_43785 = (0);
var inst_43786 = (0);
var state_43831__$1 = (function (){var statearr_43834 = state_43831;
(statearr_43834[(8)] = inst_43784);

(statearr_43834[(9)] = inst_43783);

(statearr_43834[(10)] = inst_43808);

(statearr_43834[(11)] = inst_43785);

(statearr_43834[(12)] = inst_43786);

return statearr_43834;
})();
var statearr_43835_44604 = state_43831__$1;
(statearr_43835_44604[(2)] = null);

(statearr_43835_44604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (1))){
var state_43831__$1 = state_43831;
var statearr_43836_44605 = state_43831__$1;
(statearr_43836_44605[(2)] = null);

(statearr_43836_44605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (4))){
var inst_43772 = (state_43831[(13)]);
var inst_43772__$1 = (state_43831[(2)]);
var inst_43773 = (inst_43772__$1 == null);
var state_43831__$1 = (function (){var statearr_43837 = state_43831;
(statearr_43837[(13)] = inst_43772__$1);

return statearr_43837;
})();
if(cljs.core.truth_(inst_43773)){
var statearr_43838_44606 = state_43831__$1;
(statearr_43838_44606[(1)] = (5));

} else {
var statearr_43839_44607 = state_43831__$1;
(statearr_43839_44607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (15))){
var state_43831__$1 = state_43831;
var statearr_43843_44608 = state_43831__$1;
(statearr_43843_44608[(2)] = null);

(statearr_43843_44608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (21))){
var state_43831__$1 = state_43831;
var statearr_43844_44609 = state_43831__$1;
(statearr_43844_44609[(2)] = null);

(statearr_43844_44609[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (13))){
var inst_43784 = (state_43831[(8)]);
var inst_43783 = (state_43831[(9)]);
var inst_43785 = (state_43831[(11)]);
var inst_43786 = (state_43831[(12)]);
var inst_43793 = (state_43831[(2)]);
var inst_43794 = (inst_43786 + (1));
var tmp43840 = inst_43784;
var tmp43841 = inst_43783;
var tmp43842 = inst_43785;
var inst_43783__$1 = tmp43841;
var inst_43784__$1 = tmp43840;
var inst_43785__$1 = tmp43842;
var inst_43786__$1 = inst_43794;
var state_43831__$1 = (function (){var statearr_43845 = state_43831;
(statearr_43845[(8)] = inst_43784__$1);

(statearr_43845[(9)] = inst_43783__$1);

(statearr_43845[(14)] = inst_43793);

(statearr_43845[(11)] = inst_43785__$1);

(statearr_43845[(12)] = inst_43786__$1);

return statearr_43845;
})();
var statearr_43846_44610 = state_43831__$1;
(statearr_43846_44610[(2)] = null);

(statearr_43846_44610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (22))){
var state_43831__$1 = state_43831;
var statearr_43847_44611 = state_43831__$1;
(statearr_43847_44611[(2)] = null);

(statearr_43847_44611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (6))){
var inst_43772 = (state_43831[(13)]);
var inst_43781 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43772) : f.call(null,inst_43772));
var inst_43782 = cljs.core.seq(inst_43781);
var inst_43783 = inst_43782;
var inst_43784 = null;
var inst_43785 = (0);
var inst_43786 = (0);
var state_43831__$1 = (function (){var statearr_43848 = state_43831;
(statearr_43848[(8)] = inst_43784);

(statearr_43848[(9)] = inst_43783);

(statearr_43848[(11)] = inst_43785);

(statearr_43848[(12)] = inst_43786);

return statearr_43848;
})();
var statearr_43849_44612 = state_43831__$1;
(statearr_43849_44612[(2)] = null);

(statearr_43849_44612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (17))){
var inst_43797 = (state_43831[(7)]);
var inst_43801 = cljs.core.chunk_first(inst_43797);
var inst_43802 = cljs.core.chunk_rest(inst_43797);
var inst_43803 = cljs.core.count(inst_43801);
var inst_43783 = inst_43802;
var inst_43784 = inst_43801;
var inst_43785 = inst_43803;
var inst_43786 = (0);
var state_43831__$1 = (function (){var statearr_43850 = state_43831;
(statearr_43850[(8)] = inst_43784);

(statearr_43850[(9)] = inst_43783);

(statearr_43850[(11)] = inst_43785);

(statearr_43850[(12)] = inst_43786);

return statearr_43850;
})();
var statearr_43851_44613 = state_43831__$1;
(statearr_43851_44613[(2)] = null);

(statearr_43851_44613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (3))){
var inst_43829 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43831__$1,inst_43829);
} else {
if((state_val_43832 === (12))){
var inst_43817 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43852_44614 = state_43831__$1;
(statearr_43852_44614[(2)] = inst_43817);

(statearr_43852_44614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (2))){
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43831__$1,(4),in$);
} else {
if((state_val_43832 === (23))){
var inst_43825 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43853_44615 = state_43831__$1;
(statearr_43853_44615[(2)] = inst_43825);

(statearr_43853_44615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (19))){
var inst_43812 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43854_44616 = state_43831__$1;
(statearr_43854_44616[(2)] = inst_43812);

(statearr_43854_44616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (11))){
var inst_43797 = (state_43831[(7)]);
var inst_43783 = (state_43831[(9)]);
var inst_43797__$1 = cljs.core.seq(inst_43783);
var state_43831__$1 = (function (){var statearr_43855 = state_43831;
(statearr_43855[(7)] = inst_43797__$1);

return statearr_43855;
})();
if(inst_43797__$1){
var statearr_43856_44617 = state_43831__$1;
(statearr_43856_44617[(1)] = (14));

} else {
var statearr_43857_44618 = state_43831__$1;
(statearr_43857_44618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (9))){
var inst_43819 = (state_43831[(2)]);
var inst_43820 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43831__$1 = (function (){var statearr_43858 = state_43831;
(statearr_43858[(15)] = inst_43819);

return statearr_43858;
})();
if(cljs.core.truth_(inst_43820)){
var statearr_43859_44619 = state_43831__$1;
(statearr_43859_44619[(1)] = (21));

} else {
var statearr_43860_44620 = state_43831__$1;
(statearr_43860_44620[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (5))){
var inst_43775 = cljs.core.async.close_BANG_(out);
var state_43831__$1 = state_43831;
var statearr_43861_44621 = state_43831__$1;
(statearr_43861_44621[(2)] = inst_43775);

(statearr_43861_44621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (14))){
var inst_43797 = (state_43831[(7)]);
var inst_43799 = cljs.core.chunked_seq_QMARK_(inst_43797);
var state_43831__$1 = state_43831;
if(inst_43799){
var statearr_43862_44622 = state_43831__$1;
(statearr_43862_44622[(1)] = (17));

} else {
var statearr_43863_44623 = state_43831__$1;
(statearr_43863_44623[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (16))){
var inst_43815 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43864_44624 = state_43831__$1;
(statearr_43864_44624[(2)] = inst_43815);

(statearr_43864_44624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (10))){
var inst_43784 = (state_43831[(8)]);
var inst_43786 = (state_43831[(12)]);
var inst_43791 = cljs.core._nth(inst_43784,inst_43786);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43831__$1,(13),out,inst_43791);
} else {
if((state_val_43832 === (18))){
var inst_43797 = (state_43831[(7)]);
var inst_43806 = cljs.core.first(inst_43797);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43831__$1,(20),out,inst_43806);
} else {
if((state_val_43832 === (8))){
var inst_43785 = (state_43831[(11)]);
var inst_43786 = (state_43831[(12)]);
var inst_43788 = (inst_43786 < inst_43785);
var inst_43789 = inst_43788;
var state_43831__$1 = state_43831;
if(cljs.core.truth_(inst_43789)){
var statearr_43865_44625 = state_43831__$1;
(statearr_43865_44625[(1)] = (10));

} else {
var statearr_43866_44626 = state_43831__$1;
(statearr_43866_44626[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____0 = (function (){
var statearr_43867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43867[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__);

(statearr_43867[(1)] = (1));

return statearr_43867;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____1 = (function (state_43831){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43831);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43868){var ex__42496__auto__ = e43868;
var statearr_43869_44627 = state_43831;
(statearr_43869_44627[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43831[(4)]))){
var statearr_43870_44628 = state_43831;
(statearr_43870_44628[(1)] = cljs.core.first((state_43831[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44629 = state_43831;
state_43831 = G__44629;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__ = function(state_43831){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____1.call(this,state_43831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42493__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43871 = f__42529__auto__();
(statearr_43871[(6)] = c__42528__auto__);

return statearr_43871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43873 = arguments.length;
switch (G__43873) {
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
var G__43875 = arguments.length;
switch (G__43875) {
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
var G__43877 = arguments.length;
switch (G__43877) {
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
var c__42528__auto___44633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43901){
var state_val_43902 = (state_43901[(1)]);
if((state_val_43902 === (7))){
var inst_43896 = (state_43901[(2)]);
var state_43901__$1 = state_43901;
var statearr_43903_44634 = state_43901__$1;
(statearr_43903_44634[(2)] = inst_43896);

(statearr_43903_44634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (1))){
var inst_43878 = null;
var state_43901__$1 = (function (){var statearr_43904 = state_43901;
(statearr_43904[(7)] = inst_43878);

return statearr_43904;
})();
var statearr_43905_44635 = state_43901__$1;
(statearr_43905_44635[(2)] = null);

(statearr_43905_44635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (4))){
var inst_43881 = (state_43901[(8)]);
var inst_43881__$1 = (state_43901[(2)]);
var inst_43882 = (inst_43881__$1 == null);
var inst_43883 = cljs.core.not(inst_43882);
var state_43901__$1 = (function (){var statearr_43906 = state_43901;
(statearr_43906[(8)] = inst_43881__$1);

return statearr_43906;
})();
if(inst_43883){
var statearr_43907_44636 = state_43901__$1;
(statearr_43907_44636[(1)] = (5));

} else {
var statearr_43908_44637 = state_43901__$1;
(statearr_43908_44637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (6))){
var state_43901__$1 = state_43901;
var statearr_43909_44638 = state_43901__$1;
(statearr_43909_44638[(2)] = null);

(statearr_43909_44638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (3))){
var inst_43898 = (state_43901[(2)]);
var inst_43899 = cljs.core.async.close_BANG_(out);
var state_43901__$1 = (function (){var statearr_43910 = state_43901;
(statearr_43910[(9)] = inst_43898);

return statearr_43910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43901__$1,inst_43899);
} else {
if((state_val_43902 === (2))){
var state_43901__$1 = state_43901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43901__$1,(4),ch);
} else {
if((state_val_43902 === (11))){
var inst_43881 = (state_43901[(8)]);
var inst_43890 = (state_43901[(2)]);
var inst_43878 = inst_43881;
var state_43901__$1 = (function (){var statearr_43911 = state_43901;
(statearr_43911[(7)] = inst_43878);

(statearr_43911[(10)] = inst_43890);

return statearr_43911;
})();
var statearr_43912_44639 = state_43901__$1;
(statearr_43912_44639[(2)] = null);

(statearr_43912_44639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (9))){
var inst_43881 = (state_43901[(8)]);
var state_43901__$1 = state_43901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43901__$1,(11),out,inst_43881);
} else {
if((state_val_43902 === (5))){
var inst_43878 = (state_43901[(7)]);
var inst_43881 = (state_43901[(8)]);
var inst_43885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43881,inst_43878);
var state_43901__$1 = state_43901;
if(inst_43885){
var statearr_43914_44640 = state_43901__$1;
(statearr_43914_44640[(1)] = (8));

} else {
var statearr_43915_44641 = state_43901__$1;
(statearr_43915_44641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (10))){
var inst_43893 = (state_43901[(2)]);
var state_43901__$1 = state_43901;
var statearr_43916_44642 = state_43901__$1;
(statearr_43916_44642[(2)] = inst_43893);

(statearr_43916_44642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43902 === (8))){
var inst_43878 = (state_43901[(7)]);
var tmp43913 = inst_43878;
var inst_43878__$1 = tmp43913;
var state_43901__$1 = (function (){var statearr_43917 = state_43901;
(statearr_43917[(7)] = inst_43878__$1);

return statearr_43917;
})();
var statearr_43918_44643 = state_43901__$1;
(statearr_43918_44643[(2)] = null);

(statearr_43918_44643[(1)] = (2));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43919[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43919[(1)] = (1));

return statearr_43919;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43901){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43901);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43920){var ex__42496__auto__ = e43920;
var statearr_43921_44644 = state_43901;
(statearr_43921_44644[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43901[(4)]))){
var statearr_43922_44645 = state_43901;
(statearr_43922_44645[(1)] = cljs.core.first((state_43901[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44646 = state_43901;
state_43901 = G__44646;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43923 = f__42529__auto__();
(statearr_43923[(6)] = c__42528__auto___44633);

return statearr_43923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43925 = arguments.length;
switch (G__43925) {
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
var c__42528__auto___44648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_43963){
var state_val_43964 = (state_43963[(1)]);
if((state_val_43964 === (7))){
var inst_43959 = (state_43963[(2)]);
var state_43963__$1 = state_43963;
var statearr_43965_44649 = state_43963__$1;
(statearr_43965_44649[(2)] = inst_43959);

(statearr_43965_44649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (1))){
var inst_43926 = (new Array(n));
var inst_43927 = inst_43926;
var inst_43928 = (0);
var state_43963__$1 = (function (){var statearr_43966 = state_43963;
(statearr_43966[(7)] = inst_43927);

(statearr_43966[(8)] = inst_43928);

return statearr_43966;
})();
var statearr_43967_44650 = state_43963__$1;
(statearr_43967_44650[(2)] = null);

(statearr_43967_44650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (4))){
var inst_43931 = (state_43963[(9)]);
var inst_43931__$1 = (state_43963[(2)]);
var inst_43932 = (inst_43931__$1 == null);
var inst_43933 = cljs.core.not(inst_43932);
var state_43963__$1 = (function (){var statearr_43968 = state_43963;
(statearr_43968[(9)] = inst_43931__$1);

return statearr_43968;
})();
if(inst_43933){
var statearr_43969_44651 = state_43963__$1;
(statearr_43969_44651[(1)] = (5));

} else {
var statearr_43970_44652 = state_43963__$1;
(statearr_43970_44652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (15))){
var inst_43953 = (state_43963[(2)]);
var state_43963__$1 = state_43963;
var statearr_43971_44653 = state_43963__$1;
(statearr_43971_44653[(2)] = inst_43953);

(statearr_43971_44653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (13))){
var state_43963__$1 = state_43963;
var statearr_43972_44654 = state_43963__$1;
(statearr_43972_44654[(2)] = null);

(statearr_43972_44654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (6))){
var inst_43928 = (state_43963[(8)]);
var inst_43949 = (inst_43928 > (0));
var state_43963__$1 = state_43963;
if(cljs.core.truth_(inst_43949)){
var statearr_43973_44655 = state_43963__$1;
(statearr_43973_44655[(1)] = (12));

} else {
var statearr_43974_44656 = state_43963__$1;
(statearr_43974_44656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (3))){
var inst_43961 = (state_43963[(2)]);
var state_43963__$1 = state_43963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43963__$1,inst_43961);
} else {
if((state_val_43964 === (12))){
var inst_43927 = (state_43963[(7)]);
var inst_43951 = cljs.core.vec(inst_43927);
var state_43963__$1 = state_43963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43963__$1,(15),out,inst_43951);
} else {
if((state_val_43964 === (2))){
var state_43963__$1 = state_43963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43963__$1,(4),ch);
} else {
if((state_val_43964 === (11))){
var inst_43943 = (state_43963[(2)]);
var inst_43944 = (new Array(n));
var inst_43927 = inst_43944;
var inst_43928 = (0);
var state_43963__$1 = (function (){var statearr_43975 = state_43963;
(statearr_43975[(7)] = inst_43927);

(statearr_43975[(8)] = inst_43928);

(statearr_43975[(10)] = inst_43943);

return statearr_43975;
})();
var statearr_43976_44657 = state_43963__$1;
(statearr_43976_44657[(2)] = null);

(statearr_43976_44657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (9))){
var inst_43927 = (state_43963[(7)]);
var inst_43941 = cljs.core.vec(inst_43927);
var state_43963__$1 = state_43963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43963__$1,(11),out,inst_43941);
} else {
if((state_val_43964 === (5))){
var inst_43927 = (state_43963[(7)]);
var inst_43928 = (state_43963[(8)]);
var inst_43936 = (state_43963[(11)]);
var inst_43931 = (state_43963[(9)]);
var inst_43935 = (inst_43927[inst_43928] = inst_43931);
var inst_43936__$1 = (inst_43928 + (1));
var inst_43937 = (inst_43936__$1 < n);
var state_43963__$1 = (function (){var statearr_43977 = state_43963;
(statearr_43977[(11)] = inst_43936__$1);

(statearr_43977[(12)] = inst_43935);

return statearr_43977;
})();
if(cljs.core.truth_(inst_43937)){
var statearr_43978_44660 = state_43963__$1;
(statearr_43978_44660[(1)] = (8));

} else {
var statearr_43979_44661 = state_43963__$1;
(statearr_43979_44661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (14))){
var inst_43956 = (state_43963[(2)]);
var inst_43957 = cljs.core.async.close_BANG_(out);
var state_43963__$1 = (function (){var statearr_43981 = state_43963;
(statearr_43981[(13)] = inst_43956);

return statearr_43981;
})();
var statearr_43982_44666 = state_43963__$1;
(statearr_43982_44666[(2)] = inst_43957);

(statearr_43982_44666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (10))){
var inst_43947 = (state_43963[(2)]);
var state_43963__$1 = state_43963;
var statearr_43983_44669 = state_43963__$1;
(statearr_43983_44669[(2)] = inst_43947);

(statearr_43983_44669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43964 === (8))){
var inst_43927 = (state_43963[(7)]);
var inst_43936 = (state_43963[(11)]);
var tmp43980 = inst_43927;
var inst_43927__$1 = tmp43980;
var inst_43928 = inst_43936;
var state_43963__$1 = (function (){var statearr_43984 = state_43963;
(statearr_43984[(7)] = inst_43927__$1);

(statearr_43984[(8)] = inst_43928);

return statearr_43984;
})();
var statearr_43985_44670 = state_43963__$1;
(statearr_43985_44670[(2)] = null);

(statearr_43985_44670[(1)] = (2));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_43986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43986[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_43986[(1)] = (1));

return statearr_43986;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_43963){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_43963);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e43987){var ex__42496__auto__ = e43987;
var statearr_43988_44673 = state_43963;
(statearr_43988_44673[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_43963[(4)]))){
var statearr_43989_44674 = state_43963;
(statearr_43989_44674[(1)] = cljs.core.first((state_43963[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44678 = state_43963;
state_43963 = G__44678;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_43963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_43963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_43990 = f__42529__auto__();
(statearr_43990[(6)] = c__42528__auto___44648);

return statearr_43990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43992 = arguments.length;
switch (G__43992) {
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
var c__42528__auto___44680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_44034){
var state_val_44035 = (state_44034[(1)]);
if((state_val_44035 === (7))){
var inst_44030 = (state_44034[(2)]);
var state_44034__$1 = state_44034;
var statearr_44036_44681 = state_44034__$1;
(statearr_44036_44681[(2)] = inst_44030);

(statearr_44036_44681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (1))){
var inst_43993 = [];
var inst_43994 = inst_43993;
var inst_43995 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44034__$1 = (function (){var statearr_44037 = state_44034;
(statearr_44037[(7)] = inst_43994);

(statearr_44037[(8)] = inst_43995);

return statearr_44037;
})();
var statearr_44038_44682 = state_44034__$1;
(statearr_44038_44682[(2)] = null);

(statearr_44038_44682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (4))){
var inst_43998 = (state_44034[(9)]);
var inst_43998__$1 = (state_44034[(2)]);
var inst_43999 = (inst_43998__$1 == null);
var inst_44000 = cljs.core.not(inst_43999);
var state_44034__$1 = (function (){var statearr_44039 = state_44034;
(statearr_44039[(9)] = inst_43998__$1);

return statearr_44039;
})();
if(inst_44000){
var statearr_44040_44683 = state_44034__$1;
(statearr_44040_44683[(1)] = (5));

} else {
var statearr_44041_44684 = state_44034__$1;
(statearr_44041_44684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (15))){
var inst_44024 = (state_44034[(2)]);
var state_44034__$1 = state_44034;
var statearr_44042_44685 = state_44034__$1;
(statearr_44042_44685[(2)] = inst_44024);

(statearr_44042_44685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (13))){
var state_44034__$1 = state_44034;
var statearr_44043_44686 = state_44034__$1;
(statearr_44043_44686[(2)] = null);

(statearr_44043_44686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (6))){
var inst_43994 = (state_44034[(7)]);
var inst_44019 = inst_43994.length;
var inst_44020 = (inst_44019 > (0));
var state_44034__$1 = state_44034;
if(cljs.core.truth_(inst_44020)){
var statearr_44044_44687 = state_44034__$1;
(statearr_44044_44687[(1)] = (12));

} else {
var statearr_44045_44688 = state_44034__$1;
(statearr_44045_44688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (3))){
var inst_44032 = (state_44034[(2)]);
var state_44034__$1 = state_44034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44034__$1,inst_44032);
} else {
if((state_val_44035 === (12))){
var inst_43994 = (state_44034[(7)]);
var inst_44022 = cljs.core.vec(inst_43994);
var state_44034__$1 = state_44034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44034__$1,(15),out,inst_44022);
} else {
if((state_val_44035 === (2))){
var state_44034__$1 = state_44034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44034__$1,(4),ch);
} else {
if((state_val_44035 === (11))){
var inst_44002 = (state_44034[(10)]);
var inst_43998 = (state_44034[(9)]);
var inst_44012 = (state_44034[(2)]);
var inst_44013 = [];
var inst_44014 = inst_44013.push(inst_43998);
var inst_43994 = inst_44013;
var inst_43995 = inst_44002;
var state_44034__$1 = (function (){var statearr_44046 = state_44034;
(statearr_44046[(7)] = inst_43994);

(statearr_44046[(11)] = inst_44012);

(statearr_44046[(12)] = inst_44014);

(statearr_44046[(8)] = inst_43995);

return statearr_44046;
})();
var statearr_44047_44689 = state_44034__$1;
(statearr_44047_44689[(2)] = null);

(statearr_44047_44689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (9))){
var inst_43994 = (state_44034[(7)]);
var inst_44010 = cljs.core.vec(inst_43994);
var state_44034__$1 = state_44034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44034__$1,(11),out,inst_44010);
} else {
if((state_val_44035 === (5))){
var inst_44002 = (state_44034[(10)]);
var inst_43998 = (state_44034[(9)]);
var inst_43995 = (state_44034[(8)]);
var inst_44002__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43998) : f.call(null,inst_43998));
var inst_44003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44002__$1,inst_43995);
var inst_44004 = cljs.core.keyword_identical_QMARK_(inst_43995,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44005 = ((inst_44003) || (inst_44004));
var state_44034__$1 = (function (){var statearr_44048 = state_44034;
(statearr_44048[(10)] = inst_44002__$1);

return statearr_44048;
})();
if(cljs.core.truth_(inst_44005)){
var statearr_44049_44691 = state_44034__$1;
(statearr_44049_44691[(1)] = (8));

} else {
var statearr_44050_44692 = state_44034__$1;
(statearr_44050_44692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (14))){
var inst_44027 = (state_44034[(2)]);
var inst_44028 = cljs.core.async.close_BANG_(out);
var state_44034__$1 = (function (){var statearr_44052 = state_44034;
(statearr_44052[(13)] = inst_44027);

return statearr_44052;
})();
var statearr_44053_44693 = state_44034__$1;
(statearr_44053_44693[(2)] = inst_44028);

(statearr_44053_44693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (10))){
var inst_44017 = (state_44034[(2)]);
var state_44034__$1 = state_44034;
var statearr_44054_44694 = state_44034__$1;
(statearr_44054_44694[(2)] = inst_44017);

(statearr_44054_44694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44035 === (8))){
var inst_44002 = (state_44034[(10)]);
var inst_43998 = (state_44034[(9)]);
var inst_43994 = (state_44034[(7)]);
var inst_44007 = inst_43994.push(inst_43998);
var tmp44051 = inst_43994;
var inst_43994__$1 = tmp44051;
var inst_43995 = inst_44002;
var state_44034__$1 = (function (){var statearr_44055 = state_44034;
(statearr_44055[(14)] = inst_44007);

(statearr_44055[(7)] = inst_43994__$1);

(statearr_44055[(8)] = inst_43995);

return statearr_44055;
})();
var statearr_44056_44695 = state_44034__$1;
(statearr_44056_44695[(2)] = null);

(statearr_44056_44695[(1)] = (2));


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
var cljs$core$async$state_machine__42493__auto__ = null;
var cljs$core$async$state_machine__42493__auto____0 = (function (){
var statearr_44057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44057[(0)] = cljs$core$async$state_machine__42493__auto__);

(statearr_44057[(1)] = (1));

return statearr_44057;
});
var cljs$core$async$state_machine__42493__auto____1 = (function (state_44034){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_44034);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e44058){var ex__42496__auto__ = e44058;
var statearr_44059_44696 = state_44034;
(statearr_44059_44696[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_44034[(4)]))){
var statearr_44060_44697 = state_44034;
(statearr_44060_44697[(1)] = cljs.core.first((state_44034[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44698 = state_44034;
state_44034 = G__44698;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
cljs$core$async$state_machine__42493__auto__ = function(state_44034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42493__auto____1.call(this,state_44034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42493__auto____0;
cljs$core$async$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42493__auto____1;
return cljs$core$async$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_44061 = f__42529__auto__();
(statearr_44061[(6)] = c__42528__auto___44680);

return statearr_44061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
