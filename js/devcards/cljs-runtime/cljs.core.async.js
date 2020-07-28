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
var G__43512 = arguments.length;
switch (G__43512) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43513 = (function (f,blockable,meta43514){
this.f = f;
this.blockable = blockable;
this.meta43514 = meta43514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43515,meta43514__$1){
var self__ = this;
var _43515__$1 = this;
return (new cljs.core.async.t_cljs$core$async43513(self__.f,self__.blockable,meta43514__$1));
}));

(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43515){
var self__ = this;
var _43515__$1 = this;
return self__.meta43514;
}));

(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43514","meta43514",2137654627,null)], null);
}));

(cljs.core.async.t_cljs$core$async43513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43513");

(cljs.core.async.t_cljs$core$async43513.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43513.
 */
cljs.core.async.__GT_t_cljs$core$async43513 = (function cljs$core$async$__GT_t_cljs$core$async43513(f__$1,blockable__$1,meta43514){
return (new cljs.core.async.t_cljs$core$async43513(f__$1,blockable__$1,meta43514));
});

}

return (new cljs.core.async.t_cljs$core$async43513(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43518 = arguments.length;
switch (G__43518) {
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
var G__43520 = arguments.length;
switch (G__43520) {
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
var G__43522 = arguments.length;
switch (G__43522) {
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
var val_44970 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44970) : fn1.call(null,val_44970));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44970) : fn1.call(null,val_44970));
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
var G__43524 = arguments.length;
switch (G__43524) {
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
var n__4666__auto___44979 = n;
var x_44980 = (0);
while(true){
if((x_44980 < n__4666__auto___44979)){
(a[x_44980] = x_44980);

var G__44983 = (x_44980 + (1));
x_44980 = G__44983;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43526 = (function (flag,meta43527){
this.flag = flag;
this.meta43527 = meta43527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43528,meta43527__$1){
var self__ = this;
var _43528__$1 = this;
return (new cljs.core.async.t_cljs$core$async43526(self__.flag,meta43527__$1));
}));

(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43528){
var self__ = this;
var _43528__$1 = this;
return self__.meta43527;
}));

(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43527","meta43527",1650757262,null)], null);
}));

(cljs.core.async.t_cljs$core$async43526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43526");

(cljs.core.async.t_cljs$core$async43526.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43526.
 */
cljs.core.async.__GT_t_cljs$core$async43526 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43526(flag__$1,meta43527){
return (new cljs.core.async.t_cljs$core$async43526(flag__$1,meta43527));
});

}

return (new cljs.core.async.t_cljs$core$async43526(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43534 = (function (flag,cb,meta43535){
this.flag = flag;
this.cb = cb;
this.meta43535 = meta43535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43536,meta43535__$1){
var self__ = this;
var _43536__$1 = this;
return (new cljs.core.async.t_cljs$core$async43534(self__.flag,self__.cb,meta43535__$1));
}));

(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43536){
var self__ = this;
var _43536__$1 = this;
return self__.meta43535;
}));

(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43535","meta43535",106339510,null)], null);
}));

(cljs.core.async.t_cljs$core$async43534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43534");

(cljs.core.async.t_cljs$core$async43534.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43534.
 */
cljs.core.async.__GT_t_cljs$core$async43534 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43534(flag__$1,cb__$1,meta43535){
return (new cljs.core.async.t_cljs$core$async43534(flag__$1,cb__$1,meta43535));
});

}

return (new cljs.core.async.t_cljs$core$async43534(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43539_SHARP_){
var G__43542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43539_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43542) : fret.call(null,G__43542));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43540_SHARP_){
var G__43543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43540_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43543) : fret.call(null,G__43543));
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
var G__44992 = (i + (1));
i = G__44992;
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
var len__4789__auto___44993 = arguments.length;
var i__4790__auto___44994 = (0);
while(true){
if((i__4790__auto___44994 < len__4789__auto___44993)){
args__4795__auto__.push((arguments[i__4790__auto___44994]));

var G__44995 = (i__4790__auto___44994 + (1));
i__4790__auto___44994 = G__44995;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43549){
var map__43550 = p__43549;
var map__43550__$1 = (((((!((map__43550 == null))))?(((((map__43550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43550):map__43550);
var opts = map__43550__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43546){
var G__43547 = cljs.core.first(seq43546);
var seq43546__$1 = cljs.core.next(seq43546);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43547,seq43546__$1);
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
var G__43553 = arguments.length;
switch (G__43553) {
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
var c__43452__auto___44997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43577){
var state_val_43578 = (state_43577[(1)]);
if((state_val_43578 === (7))){
var inst_43573 = (state_43577[(2)]);
var state_43577__$1 = state_43577;
var statearr_43579_44999 = state_43577__$1;
(statearr_43579_44999[(2)] = inst_43573);

(statearr_43579_44999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (1))){
var state_43577__$1 = state_43577;
var statearr_43580_45000 = state_43577__$1;
(statearr_43580_45000[(2)] = null);

(statearr_43580_45000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (4))){
var inst_43556 = (state_43577[(7)]);
var inst_43556__$1 = (state_43577[(2)]);
var inst_43557 = (inst_43556__$1 == null);
var state_43577__$1 = (function (){var statearr_43581 = state_43577;
(statearr_43581[(7)] = inst_43556__$1);

return statearr_43581;
})();
if(cljs.core.truth_(inst_43557)){
var statearr_43582_45001 = state_43577__$1;
(statearr_43582_45001[(1)] = (5));

} else {
var statearr_43583_45002 = state_43577__$1;
(statearr_43583_45002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (13))){
var state_43577__$1 = state_43577;
var statearr_43584_45003 = state_43577__$1;
(statearr_43584_45003[(2)] = null);

(statearr_43584_45003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (6))){
var inst_43556 = (state_43577[(7)]);
var state_43577__$1 = state_43577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43577__$1,(11),to,inst_43556);
} else {
if((state_val_43578 === (3))){
var inst_43575 = (state_43577[(2)]);
var state_43577__$1 = state_43577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43577__$1,inst_43575);
} else {
if((state_val_43578 === (12))){
var state_43577__$1 = state_43577;
var statearr_43585_45008 = state_43577__$1;
(statearr_43585_45008[(2)] = null);

(statearr_43585_45008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (2))){
var state_43577__$1 = state_43577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43577__$1,(4),from);
} else {
if((state_val_43578 === (11))){
var inst_43566 = (state_43577[(2)]);
var state_43577__$1 = state_43577;
if(cljs.core.truth_(inst_43566)){
var statearr_43586_45009 = state_43577__$1;
(statearr_43586_45009[(1)] = (12));

} else {
var statearr_43587_45010 = state_43577__$1;
(statearr_43587_45010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (9))){
var state_43577__$1 = state_43577;
var statearr_43588_45012 = state_43577__$1;
(statearr_43588_45012[(2)] = null);

(statearr_43588_45012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (5))){
var state_43577__$1 = state_43577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43589_45015 = state_43577__$1;
(statearr_43589_45015[(1)] = (8));

} else {
var statearr_43590_45016 = state_43577__$1;
(statearr_43590_45016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (14))){
var inst_43571 = (state_43577[(2)]);
var state_43577__$1 = state_43577;
var statearr_43591_45017 = state_43577__$1;
(statearr_43591_45017[(2)] = inst_43571);

(statearr_43591_45017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (10))){
var inst_43563 = (state_43577[(2)]);
var state_43577__$1 = state_43577;
var statearr_43592_45019 = state_43577__$1;
(statearr_43592_45019[(2)] = inst_43563);

(statearr_43592_45019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43578 === (8))){
var inst_43560 = cljs.core.async.close_BANG_(to);
var state_43577__$1 = state_43577;
var statearr_43593_45020 = state_43577__$1;
(statearr_43593_45020[(2)] = inst_43560);

(statearr_43593_45020[(1)] = (10));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_43594 = [null,null,null,null,null,null,null,null];
(statearr_43594[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_43594[(1)] = (1));

return statearr_43594;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_43577){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43577);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43595){if((e43595 instanceof Object)){
var ex__43388__auto__ = e43595;
var statearr_43596_45024 = state_43577;
(statearr_43596_45024[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45025 = state_43577;
state_43577 = G__45025;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_43577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_43577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43597 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43597[(6)] = c__43452__auto___44997);

return statearr_43597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var process = (function (p__43598){
var vec__43599 = p__43598;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43599,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43599,(1),null);
var job = vec__43599;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43452__auto___45027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43606){
var state_val_43607 = (state_43606[(1)]);
if((state_val_43607 === (1))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43606__$1,(2),res,v);
} else {
if((state_val_43607 === (2))){
var inst_43603 = (state_43606[(2)]);
var inst_43604 = cljs.core.async.close_BANG_(res);
var state_43606__$1 = (function (){var statearr_43608 = state_43606;
(statearr_43608[(7)] = inst_43603);

return statearr_43608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43606__$1,inst_43604);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_43609 = [null,null,null,null,null,null,null,null];
(statearr_43609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__);

(statearr_43609[(1)] = (1));

return statearr_43609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1 = (function (state_43606){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43606);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43610){if((e43610 instanceof Object)){
var ex__43388__auto__ = e43610;
var statearr_43611_45029 = state_43606;
(statearr_43611_45029[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45032 = state_43606;
state_43606 = G__45032;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43612 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43612[(6)] = c__43452__auto___45027);

return statearr_43612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43613){
var vec__43614 = p__43613;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43614,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43614,(1),null);
var job = vec__43614;
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
var n__4666__auto___45033 = n;
var __45034 = (0);
while(true){
if((__45034 < n__4666__auto___45033)){
var G__43617_45035 = type;
var G__43617_45036__$1 = (((G__43617_45035 instanceof cljs.core.Keyword))?G__43617_45035.fqn:null);
switch (G__43617_45036__$1) {
case "compute":
var c__43452__auto___45038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45034,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = ((function (__45034,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function (state_43630){
var state_val_43631 = (state_43630[(1)]);
if((state_val_43631 === (1))){
var state_43630__$1 = state_43630;
var statearr_43632_45039 = state_43630__$1;
(statearr_43632_45039[(2)] = null);

(statearr_43632_45039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43631 === (2))){
var state_43630__$1 = state_43630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43630__$1,(4),jobs);
} else {
if((state_val_43631 === (3))){
var inst_43628 = (state_43630[(2)]);
var state_43630__$1 = state_43630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43630__$1,inst_43628);
} else {
if((state_val_43631 === (4))){
var inst_43620 = (state_43630[(2)]);
var inst_43621 = process(inst_43620);
var state_43630__$1 = state_43630;
if(cljs.core.truth_(inst_43621)){
var statearr_43633_45040 = state_43630__$1;
(statearr_43633_45040[(1)] = (5));

} else {
var statearr_43634_45041 = state_43630__$1;
(statearr_43634_45041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43631 === (5))){
var state_43630__$1 = state_43630;
var statearr_43635_45042 = state_43630__$1;
(statearr_43635_45042[(2)] = null);

(statearr_43635_45042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43631 === (6))){
var state_43630__$1 = state_43630;
var statearr_43636_45043 = state_43630__$1;
(statearr_43636_45043[(2)] = null);

(statearr_43636_45043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43631 === (7))){
var inst_43626 = (state_43630[(2)]);
var state_43630__$1 = state_43630;
var statearr_43637_45044 = state_43630__$1;
(statearr_43637_45044[(2)] = inst_43626);

(statearr_43637_45044[(1)] = (3));


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
});})(__45034,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
;
return ((function (__45034,switch__43384__auto__,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_43638 = [null,null,null,null,null,null,null];
(statearr_43638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__);

(statearr_43638[(1)] = (1));

return statearr_43638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1 = (function (state_43630){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43630);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43639){if((e43639 instanceof Object)){
var ex__43388__auto__ = e43639;
var statearr_43640_45045 = state_43630;
(statearr_43640_45045[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45046 = state_43630;
state_43630 = G__45046;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = function(state_43630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1.call(this,state_43630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__;
})()
;})(__45034,switch__43384__auto__,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
})();
var state__43454__auto__ = (function (){var statearr_43641 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43641[(6)] = c__43452__auto___45038);

return statearr_43641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
});})(__45034,c__43452__auto___45038,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
);


break;
case "async":
var c__43452__auto___45047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45034,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = ((function (__45034,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function (state_43654){
var state_val_43655 = (state_43654[(1)]);
if((state_val_43655 === (1))){
var state_43654__$1 = state_43654;
var statearr_43656_45048 = state_43654__$1;
(statearr_43656_45048[(2)] = null);

(statearr_43656_45048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (2))){
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43654__$1,(4),jobs);
} else {
if((state_val_43655 === (3))){
var inst_43652 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43654__$1,inst_43652);
} else {
if((state_val_43655 === (4))){
var inst_43644 = (state_43654[(2)]);
var inst_43645 = async(inst_43644);
var state_43654__$1 = state_43654;
if(cljs.core.truth_(inst_43645)){
var statearr_43657_45049 = state_43654__$1;
(statearr_43657_45049[(1)] = (5));

} else {
var statearr_43658_45050 = state_43654__$1;
(statearr_43658_45050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (5))){
var state_43654__$1 = state_43654;
var statearr_43659_45051 = state_43654__$1;
(statearr_43659_45051[(2)] = null);

(statearr_43659_45051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (6))){
var state_43654__$1 = state_43654;
var statearr_43660_45056 = state_43654__$1;
(statearr_43660_45056[(2)] = null);

(statearr_43660_45056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (7))){
var inst_43650 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43661_45057 = state_43654__$1;
(statearr_43661_45057[(2)] = inst_43650);

(statearr_43661_45057[(1)] = (3));


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
});})(__45034,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
;
return ((function (__45034,switch__43384__auto__,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_43662 = [null,null,null,null,null,null,null];
(statearr_43662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__);

(statearr_43662[(1)] = (1));

return statearr_43662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1 = (function (state_43654){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43654);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43663){if((e43663 instanceof Object)){
var ex__43388__auto__ = e43663;
var statearr_43664_45066 = state_43654;
(statearr_43664_45066[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45067 = state_43654;
state_43654 = G__45067;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = function(state_43654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1.call(this,state_43654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__;
})()
;})(__45034,switch__43384__auto__,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
})();
var state__43454__auto__ = (function (){var statearr_43665 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43665[(6)] = c__43452__auto___45047);

return statearr_43665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
});})(__45034,c__43452__auto___45047,G__43617_45035,G__43617_45036__$1,n__4666__auto___45033,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43617_45036__$1)].join('')));

}

var G__45069 = (__45034 + (1));
__45034 = G__45069;
continue;
} else {
}
break;
}

var c__43452__auto___45070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43687){
var state_val_43688 = (state_43687[(1)]);
if((state_val_43688 === (7))){
var inst_43683 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
var statearr_43689_45072 = state_43687__$1;
(statearr_43689_45072[(2)] = inst_43683);

(statearr_43689_45072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (1))){
var state_43687__$1 = state_43687;
var statearr_43690_45073 = state_43687__$1;
(statearr_43690_45073[(2)] = null);

(statearr_43690_45073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (4))){
var inst_43668 = (state_43687[(7)]);
var inst_43668__$1 = (state_43687[(2)]);
var inst_43669 = (inst_43668__$1 == null);
var state_43687__$1 = (function (){var statearr_43691 = state_43687;
(statearr_43691[(7)] = inst_43668__$1);

return statearr_43691;
})();
if(cljs.core.truth_(inst_43669)){
var statearr_43692_45074 = state_43687__$1;
(statearr_43692_45074[(1)] = (5));

} else {
var statearr_43693_45075 = state_43687__$1;
(statearr_43693_45075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (6))){
var inst_43673 = (state_43687[(8)]);
var inst_43668 = (state_43687[(7)]);
var inst_43673__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43675 = [inst_43668,inst_43673__$1];
var inst_43676 = (new cljs.core.PersistentVector(null,2,(5),inst_43674,inst_43675,null));
var state_43687__$1 = (function (){var statearr_43694 = state_43687;
(statearr_43694[(8)] = inst_43673__$1);

return statearr_43694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43687__$1,(8),jobs,inst_43676);
} else {
if((state_val_43688 === (3))){
var inst_43685 = (state_43687[(2)]);
var state_43687__$1 = state_43687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43687__$1,inst_43685);
} else {
if((state_val_43688 === (2))){
var state_43687__$1 = state_43687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43687__$1,(4),from);
} else {
if((state_val_43688 === (9))){
var inst_43680 = (state_43687[(2)]);
var state_43687__$1 = (function (){var statearr_43695 = state_43687;
(statearr_43695[(9)] = inst_43680);

return statearr_43695;
})();
var statearr_43696_45078 = state_43687__$1;
(statearr_43696_45078[(2)] = null);

(statearr_43696_45078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (5))){
var inst_43671 = cljs.core.async.close_BANG_(jobs);
var state_43687__$1 = state_43687;
var statearr_43697_45079 = state_43687__$1;
(statearr_43697_45079[(2)] = inst_43671);

(statearr_43697_45079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43688 === (8))){
var inst_43673 = (state_43687[(8)]);
var inst_43678 = (state_43687[(2)]);
var state_43687__$1 = (function (){var statearr_43698 = state_43687;
(statearr_43698[(10)] = inst_43678);

return statearr_43698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43687__$1,(9),results,inst_43673);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_43699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__);

(statearr_43699[(1)] = (1));

return statearr_43699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1 = (function (state_43687){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43687);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43700){if((e43700 instanceof Object)){
var ex__43388__auto__ = e43700;
var statearr_43701_45080 = state_43687;
(statearr_43701_45080[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45081 = state_43687;
state_43687 = G__45081;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = function(state_43687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1.call(this,state_43687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43702 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43702[(6)] = c__43452__auto___45070);

return statearr_43702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43740){
var state_val_43741 = (state_43740[(1)]);
if((state_val_43741 === (7))){
var inst_43736 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43742_45082 = state_43740__$1;
(statearr_43742_45082[(2)] = inst_43736);

(statearr_43742_45082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (20))){
var state_43740__$1 = state_43740;
var statearr_43743_45083 = state_43740__$1;
(statearr_43743_45083[(2)] = null);

(statearr_43743_45083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (1))){
var state_43740__$1 = state_43740;
var statearr_43744_45084 = state_43740__$1;
(statearr_43744_45084[(2)] = null);

(statearr_43744_45084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (4))){
var inst_43705 = (state_43740[(7)]);
var inst_43705__$1 = (state_43740[(2)]);
var inst_43706 = (inst_43705__$1 == null);
var state_43740__$1 = (function (){var statearr_43745 = state_43740;
(statearr_43745[(7)] = inst_43705__$1);

return statearr_43745;
})();
if(cljs.core.truth_(inst_43706)){
var statearr_43746_45085 = state_43740__$1;
(statearr_43746_45085[(1)] = (5));

} else {
var statearr_43747_45086 = state_43740__$1;
(statearr_43747_45086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (15))){
var inst_43718 = (state_43740[(8)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43740__$1,(18),to,inst_43718);
} else {
if((state_val_43741 === (21))){
var inst_43731 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43748_45087 = state_43740__$1;
(statearr_43748_45087[(2)] = inst_43731);

(statearr_43748_45087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (13))){
var inst_43733 = (state_43740[(2)]);
var state_43740__$1 = (function (){var statearr_43749 = state_43740;
(statearr_43749[(9)] = inst_43733);

return statearr_43749;
})();
var statearr_43750_45088 = state_43740__$1;
(statearr_43750_45088[(2)] = null);

(statearr_43750_45088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (6))){
var inst_43705 = (state_43740[(7)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43740__$1,(11),inst_43705);
} else {
if((state_val_43741 === (17))){
var inst_43726 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
if(cljs.core.truth_(inst_43726)){
var statearr_43751_45089 = state_43740__$1;
(statearr_43751_45089[(1)] = (19));

} else {
var statearr_43752_45090 = state_43740__$1;
(statearr_43752_45090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (3))){
var inst_43738 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43740__$1,inst_43738);
} else {
if((state_val_43741 === (12))){
var inst_43715 = (state_43740[(10)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43740__$1,(14),inst_43715);
} else {
if((state_val_43741 === (2))){
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43740__$1,(4),results);
} else {
if((state_val_43741 === (19))){
var state_43740__$1 = state_43740;
var statearr_43753_45091 = state_43740__$1;
(statearr_43753_45091[(2)] = null);

(statearr_43753_45091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (11))){
var inst_43715 = (state_43740[(2)]);
var state_43740__$1 = (function (){var statearr_43754 = state_43740;
(statearr_43754[(10)] = inst_43715);

return statearr_43754;
})();
var statearr_43755_45092 = state_43740__$1;
(statearr_43755_45092[(2)] = null);

(statearr_43755_45092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (9))){
var state_43740__$1 = state_43740;
var statearr_43756_45093 = state_43740__$1;
(statearr_43756_45093[(2)] = null);

(statearr_43756_45093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (5))){
var state_43740__$1 = state_43740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43757_45094 = state_43740__$1;
(statearr_43757_45094[(1)] = (8));

} else {
var statearr_43758_45095 = state_43740__$1;
(statearr_43758_45095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (14))){
var inst_43718 = (state_43740[(8)]);
var inst_43718__$1 = (state_43740[(2)]);
var inst_43719 = (inst_43718__$1 == null);
var inst_43720 = cljs.core.not(inst_43719);
var state_43740__$1 = (function (){var statearr_43759 = state_43740;
(statearr_43759[(8)] = inst_43718__$1);

return statearr_43759;
})();
if(inst_43720){
var statearr_43760_45096 = state_43740__$1;
(statearr_43760_45096[(1)] = (15));

} else {
var statearr_43761_45097 = state_43740__$1;
(statearr_43761_45097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (16))){
var state_43740__$1 = state_43740;
var statearr_43762_45098 = state_43740__$1;
(statearr_43762_45098[(2)] = false);

(statearr_43762_45098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (10))){
var inst_43712 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43763_45099 = state_43740__$1;
(statearr_43763_45099[(2)] = inst_43712);

(statearr_43763_45099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (18))){
var inst_43723 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43764_45100 = state_43740__$1;
(statearr_43764_45100[(2)] = inst_43723);

(statearr_43764_45100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (8))){
var inst_43709 = cljs.core.async.close_BANG_(to);
var state_43740__$1 = state_43740;
var statearr_43765_45101 = state_43740__$1;
(statearr_43765_45101[(2)] = inst_43709);

(statearr_43765_45101[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_43766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__);

(statearr_43766[(1)] = (1));

return statearr_43766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1 = (function (state_43740){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43740);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43767){if((e43767 instanceof Object)){
var ex__43388__auto__ = e43767;
var statearr_43768_45102 = state_43740;
(statearr_43768_45102[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45103 = state_43740;
state_43740 = G__45103;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__ = function(state_43740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1.call(this,state_43740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43769 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43769[(6)] = c__43452__auto__);

return statearr_43769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
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
var G__43771 = arguments.length;
switch (G__43771) {
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
var G__43773 = arguments.length;
switch (G__43773) {
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
var G__43775 = arguments.length;
switch (G__43775) {
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
var c__43452__auto___45107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43801){
var state_val_43802 = (state_43801[(1)]);
if((state_val_43802 === (7))){
var inst_43797 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43803_45108 = state_43801__$1;
(statearr_43803_45108[(2)] = inst_43797);

(statearr_43803_45108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (1))){
var state_43801__$1 = state_43801;
var statearr_43804_45109 = state_43801__$1;
(statearr_43804_45109[(2)] = null);

(statearr_43804_45109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (4))){
var inst_43778 = (state_43801[(7)]);
var inst_43778__$1 = (state_43801[(2)]);
var inst_43779 = (inst_43778__$1 == null);
var state_43801__$1 = (function (){var statearr_43805 = state_43801;
(statearr_43805[(7)] = inst_43778__$1);

return statearr_43805;
})();
if(cljs.core.truth_(inst_43779)){
var statearr_43806_45110 = state_43801__$1;
(statearr_43806_45110[(1)] = (5));

} else {
var statearr_43807_45111 = state_43801__$1;
(statearr_43807_45111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (13))){
var state_43801__$1 = state_43801;
var statearr_43808_45112 = state_43801__$1;
(statearr_43808_45112[(2)] = null);

(statearr_43808_45112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (6))){
var inst_43778 = (state_43801[(7)]);
var inst_43784 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43778) : p.call(null,inst_43778));
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43784)){
var statearr_43809_45113 = state_43801__$1;
(statearr_43809_45113[(1)] = (9));

} else {
var statearr_43810_45114 = state_43801__$1;
(statearr_43810_45114[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (3))){
var inst_43799 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43801__$1,inst_43799);
} else {
if((state_val_43802 === (12))){
var state_43801__$1 = state_43801;
var statearr_43811_45115 = state_43801__$1;
(statearr_43811_45115[(2)] = null);

(statearr_43811_45115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (2))){
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43801__$1,(4),ch);
} else {
if((state_val_43802 === (11))){
var inst_43778 = (state_43801[(7)]);
var inst_43788 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43801__$1,(8),inst_43788,inst_43778);
} else {
if((state_val_43802 === (9))){
var state_43801__$1 = state_43801;
var statearr_43812_45116 = state_43801__$1;
(statearr_43812_45116[(2)] = tc);

(statearr_43812_45116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (5))){
var inst_43781 = cljs.core.async.close_BANG_(tc);
var inst_43782 = cljs.core.async.close_BANG_(fc);
var state_43801__$1 = (function (){var statearr_43813 = state_43801;
(statearr_43813[(8)] = inst_43781);

return statearr_43813;
})();
var statearr_43814_45117 = state_43801__$1;
(statearr_43814_45117[(2)] = inst_43782);

(statearr_43814_45117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (14))){
var inst_43795 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43815_45118 = state_43801__$1;
(statearr_43815_45118[(2)] = inst_43795);

(statearr_43815_45118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (10))){
var state_43801__$1 = state_43801;
var statearr_43816_45119 = state_43801__$1;
(statearr_43816_45119[(2)] = fc);

(statearr_43816_45119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (8))){
var inst_43790 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43790)){
var statearr_43817_45120 = state_43801__$1;
(statearr_43817_45120[(1)] = (12));

} else {
var statearr_43818_45121 = state_43801__$1;
(statearr_43818_45121[(1)] = (13));

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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_43819 = [null,null,null,null,null,null,null,null,null];
(statearr_43819[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_43819[(1)] = (1));

return statearr_43819;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_43801){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43801);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43820){if((e43820 instanceof Object)){
var ex__43388__auto__ = e43820;
var statearr_43821_45122 = state_43801;
(statearr_43821_45122[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45123 = state_43801;
state_43801 = G__45123;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_43801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_43801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43822 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43822[(6)] = c__43452__auto___45107);

return statearr_43822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43843){
var state_val_43844 = (state_43843[(1)]);
if((state_val_43844 === (7))){
var inst_43839 = (state_43843[(2)]);
var state_43843__$1 = state_43843;
var statearr_43845_45124 = state_43843__$1;
(statearr_43845_45124[(2)] = inst_43839);

(statearr_43845_45124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (1))){
var inst_43823 = init;
var state_43843__$1 = (function (){var statearr_43846 = state_43843;
(statearr_43846[(7)] = inst_43823);

return statearr_43846;
})();
var statearr_43847_45125 = state_43843__$1;
(statearr_43847_45125[(2)] = null);

(statearr_43847_45125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (4))){
var inst_43826 = (state_43843[(8)]);
var inst_43826__$1 = (state_43843[(2)]);
var inst_43827 = (inst_43826__$1 == null);
var state_43843__$1 = (function (){var statearr_43848 = state_43843;
(statearr_43848[(8)] = inst_43826__$1);

return statearr_43848;
})();
if(cljs.core.truth_(inst_43827)){
var statearr_43849_45126 = state_43843__$1;
(statearr_43849_45126[(1)] = (5));

} else {
var statearr_43850_45127 = state_43843__$1;
(statearr_43850_45127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (6))){
var inst_43830 = (state_43843[(9)]);
var inst_43823 = (state_43843[(7)]);
var inst_43826 = (state_43843[(8)]);
var inst_43830__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43823,inst_43826) : f.call(null,inst_43823,inst_43826));
var inst_43831 = cljs.core.reduced_QMARK_(inst_43830__$1);
var state_43843__$1 = (function (){var statearr_43851 = state_43843;
(statearr_43851[(9)] = inst_43830__$1);

return statearr_43851;
})();
if(inst_43831){
var statearr_43852_45128 = state_43843__$1;
(statearr_43852_45128[(1)] = (8));

} else {
var statearr_43853_45129 = state_43843__$1;
(statearr_43853_45129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (3))){
var inst_43841 = (state_43843[(2)]);
var state_43843__$1 = state_43843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43843__$1,inst_43841);
} else {
if((state_val_43844 === (2))){
var state_43843__$1 = state_43843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43843__$1,(4),ch);
} else {
if((state_val_43844 === (9))){
var inst_43830 = (state_43843[(9)]);
var inst_43823 = inst_43830;
var state_43843__$1 = (function (){var statearr_43854 = state_43843;
(statearr_43854[(7)] = inst_43823);

return statearr_43854;
})();
var statearr_43855_45130 = state_43843__$1;
(statearr_43855_45130[(2)] = null);

(statearr_43855_45130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (5))){
var inst_43823 = (state_43843[(7)]);
var state_43843__$1 = state_43843;
var statearr_43856_45131 = state_43843__$1;
(statearr_43856_45131[(2)] = inst_43823);

(statearr_43856_45131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (10))){
var inst_43837 = (state_43843[(2)]);
var state_43843__$1 = state_43843;
var statearr_43857_45132 = state_43843__$1;
(statearr_43857_45132[(2)] = inst_43837);

(statearr_43857_45132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43844 === (8))){
var inst_43830 = (state_43843[(9)]);
var inst_43833 = cljs.core.deref(inst_43830);
var state_43843__$1 = state_43843;
var statearr_43858_45133 = state_43843__$1;
(statearr_43858_45133[(2)] = inst_43833);

(statearr_43858_45133[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43385__auto____0 = (function (){
var statearr_43859 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43859[(0)] = cljs$core$async$reduce_$_state_machine__43385__auto__);

(statearr_43859[(1)] = (1));

return statearr_43859;
});
var cljs$core$async$reduce_$_state_machine__43385__auto____1 = (function (state_43843){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43843);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43860){if((e43860 instanceof Object)){
var ex__43388__auto__ = e43860;
var statearr_43861_45134 = state_43843;
(statearr_43861_45134[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45135 = state_43843;
state_43843 = G__45135;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43385__auto__ = function(state_43843){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43385__auto____1.call(this,state_43843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43385__auto____0;
cljs$core$async$reduce_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43385__auto____1;
return cljs$core$async$reduce_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43862 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43862[(6)] = c__43452__auto__);

return statearr_43862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43868){
var state_val_43869 = (state_43868[(1)]);
if((state_val_43869 === (1))){
var inst_43863 = cljs.core.async.reduce(f__$1,init,ch);
var state_43868__$1 = state_43868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43868__$1,(2),inst_43863);
} else {
if((state_val_43869 === (2))){
var inst_43865 = (state_43868[(2)]);
var inst_43866 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43865) : f__$1.call(null,inst_43865));
var state_43868__$1 = state_43868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43868__$1,inst_43866);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43385__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43385__auto____0 = (function (){
var statearr_43870 = [null,null,null,null,null,null,null];
(statearr_43870[(0)] = cljs$core$async$transduce_$_state_machine__43385__auto__);

(statearr_43870[(1)] = (1));

return statearr_43870;
});
var cljs$core$async$transduce_$_state_machine__43385__auto____1 = (function (state_43868){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43868);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43871){if((e43871 instanceof Object)){
var ex__43388__auto__ = e43871;
var statearr_43872_45136 = state_43868;
(statearr_43872_45136[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45137 = state_43868;
state_43868 = G__45137;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43385__auto__ = function(state_43868){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43385__auto____1.call(this,state_43868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43385__auto____0;
cljs$core$async$transduce_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43385__auto____1;
return cljs$core$async$transduce_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43873 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43873[(6)] = c__43452__auto__);

return statearr_43873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
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
var G__43875 = arguments.length;
switch (G__43875) {
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
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_43900){
var state_val_43901 = (state_43900[(1)]);
if((state_val_43901 === (7))){
var inst_43882 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43902_45139 = state_43900__$1;
(statearr_43902_45139[(2)] = inst_43882);

(statearr_43902_45139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (1))){
var inst_43876 = cljs.core.seq(coll);
var inst_43877 = inst_43876;
var state_43900__$1 = (function (){var statearr_43903 = state_43900;
(statearr_43903[(7)] = inst_43877);

return statearr_43903;
})();
var statearr_43904_45140 = state_43900__$1;
(statearr_43904_45140[(2)] = null);

(statearr_43904_45140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (4))){
var inst_43877 = (state_43900[(7)]);
var inst_43880 = cljs.core.first(inst_43877);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43900__$1,(7),ch,inst_43880);
} else {
if((state_val_43901 === (13))){
var inst_43894 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43905_45141 = state_43900__$1;
(statearr_43905_45141[(2)] = inst_43894);

(statearr_43905_45141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (6))){
var inst_43885 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
if(cljs.core.truth_(inst_43885)){
var statearr_43906_45142 = state_43900__$1;
(statearr_43906_45142[(1)] = (8));

} else {
var statearr_43907_45143 = state_43900__$1;
(statearr_43907_45143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (3))){
var inst_43898 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43900__$1,inst_43898);
} else {
if((state_val_43901 === (12))){
var state_43900__$1 = state_43900;
var statearr_43908_45144 = state_43900__$1;
(statearr_43908_45144[(2)] = null);

(statearr_43908_45144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (2))){
var inst_43877 = (state_43900[(7)]);
var state_43900__$1 = state_43900;
if(cljs.core.truth_(inst_43877)){
var statearr_43909_45145 = state_43900__$1;
(statearr_43909_45145[(1)] = (4));

} else {
var statearr_43910_45146 = state_43900__$1;
(statearr_43910_45146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (11))){
var inst_43891 = cljs.core.async.close_BANG_(ch);
var state_43900__$1 = state_43900;
var statearr_43911_45147 = state_43900__$1;
(statearr_43911_45147[(2)] = inst_43891);

(statearr_43911_45147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (9))){
var state_43900__$1 = state_43900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43912_45148 = state_43900__$1;
(statearr_43912_45148[(1)] = (11));

} else {
var statearr_43913_45149 = state_43900__$1;
(statearr_43913_45149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (5))){
var inst_43877 = (state_43900[(7)]);
var state_43900__$1 = state_43900;
var statearr_43914_45150 = state_43900__$1;
(statearr_43914_45150[(2)] = inst_43877);

(statearr_43914_45150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (10))){
var inst_43896 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43915_45151 = state_43900__$1;
(statearr_43915_45151[(2)] = inst_43896);

(statearr_43915_45151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (8))){
var inst_43877 = (state_43900[(7)]);
var inst_43887 = cljs.core.next(inst_43877);
var inst_43877__$1 = inst_43887;
var state_43900__$1 = (function (){var statearr_43916 = state_43900;
(statearr_43916[(7)] = inst_43877__$1);

return statearr_43916;
})();
var statearr_43917_45152 = state_43900__$1;
(statearr_43917_45152[(2)] = null);

(statearr_43917_45152[(1)] = (2));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_43918 = [null,null,null,null,null,null,null,null];
(statearr_43918[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_43918[(1)] = (1));

return statearr_43918;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_43900){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_43900);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e43919){if((e43919 instanceof Object)){
var ex__43388__auto__ = e43919;
var statearr_43920_45153 = state_43900;
(statearr_43920_45153[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45154 = state_43900;
state_43900 = G__45154;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_43900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_43900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_43921 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_43921[(6)] = c__43452__auto__);

return statearr_43921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43922 = (function (ch,cs,meta43923){
this.ch = ch;
this.cs = cs;
this.meta43923 = meta43923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43924,meta43923__$1){
var self__ = this;
var _43924__$1 = this;
return (new cljs.core.async.t_cljs$core$async43922(self__.ch,self__.cs,meta43923__$1));
}));

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43924){
var self__ = this;
var _43924__$1 = this;
return self__.meta43923;
}));

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43922.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43923","meta43923",-829569854,null)], null);
}));

(cljs.core.async.t_cljs$core$async43922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43922");

(cljs.core.async.t_cljs$core$async43922.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43922.
 */
cljs.core.async.__GT_t_cljs$core$async43922 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43922(ch__$1,cs__$1,meta43923){
return (new cljs.core.async.t_cljs$core$async43922(ch__$1,cs__$1,meta43923));
});

}

return (new cljs.core.async.t_cljs$core$async43922(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43452__auto___45155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44059){
var state_val_44060 = (state_44059[(1)]);
if((state_val_44060 === (7))){
var inst_44055 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44061_45156 = state_44059__$1;
(statearr_44061_45156[(2)] = inst_44055);

(statearr_44061_45156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (20))){
var inst_43958 = (state_44059[(7)]);
var inst_43970 = cljs.core.first(inst_43958);
var inst_43971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43970,(0),null);
var inst_43972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43970,(1),null);
var state_44059__$1 = (function (){var statearr_44062 = state_44059;
(statearr_44062[(8)] = inst_43971);

return statearr_44062;
})();
if(cljs.core.truth_(inst_43972)){
var statearr_44063_45157 = state_44059__$1;
(statearr_44063_45157[(1)] = (22));

} else {
var statearr_44064_45158 = state_44059__$1;
(statearr_44064_45158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (27))){
var inst_44002 = (state_44059[(9)]);
var inst_43927 = (state_44059[(10)]);
var inst_44007 = (state_44059[(11)]);
var inst_44000 = (state_44059[(12)]);
var inst_44007__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44000,inst_44002);
var inst_44008 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44007__$1,inst_43927,done);
var state_44059__$1 = (function (){var statearr_44065 = state_44059;
(statearr_44065[(11)] = inst_44007__$1);

return statearr_44065;
})();
if(cljs.core.truth_(inst_44008)){
var statearr_44066_45159 = state_44059__$1;
(statearr_44066_45159[(1)] = (30));

} else {
var statearr_44067_45160 = state_44059__$1;
(statearr_44067_45160[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (1))){
var state_44059__$1 = state_44059;
var statearr_44068_45161 = state_44059__$1;
(statearr_44068_45161[(2)] = null);

(statearr_44068_45161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (24))){
var inst_43958 = (state_44059[(7)]);
var inst_43977 = (state_44059[(2)]);
var inst_43978 = cljs.core.next(inst_43958);
var inst_43936 = inst_43978;
var inst_43937 = null;
var inst_43938 = (0);
var inst_43939 = (0);
var state_44059__$1 = (function (){var statearr_44069 = state_44059;
(statearr_44069[(13)] = inst_43977);

(statearr_44069[(14)] = inst_43937);

(statearr_44069[(15)] = inst_43938);

(statearr_44069[(16)] = inst_43936);

(statearr_44069[(17)] = inst_43939);

return statearr_44069;
})();
var statearr_44070_45162 = state_44059__$1;
(statearr_44070_45162[(2)] = null);

(statearr_44070_45162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (39))){
var state_44059__$1 = state_44059;
var statearr_44074_45163 = state_44059__$1;
(statearr_44074_45163[(2)] = null);

(statearr_44074_45163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (4))){
var inst_43927 = (state_44059[(10)]);
var inst_43927__$1 = (state_44059[(2)]);
var inst_43928 = (inst_43927__$1 == null);
var state_44059__$1 = (function (){var statearr_44075 = state_44059;
(statearr_44075[(10)] = inst_43927__$1);

return statearr_44075;
})();
if(cljs.core.truth_(inst_43928)){
var statearr_44076_45164 = state_44059__$1;
(statearr_44076_45164[(1)] = (5));

} else {
var statearr_44077_45165 = state_44059__$1;
(statearr_44077_45165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (15))){
var inst_43937 = (state_44059[(14)]);
var inst_43938 = (state_44059[(15)]);
var inst_43936 = (state_44059[(16)]);
var inst_43939 = (state_44059[(17)]);
var inst_43954 = (state_44059[(2)]);
var inst_43955 = (inst_43939 + (1));
var tmp44071 = inst_43937;
var tmp44072 = inst_43938;
var tmp44073 = inst_43936;
var inst_43936__$1 = tmp44073;
var inst_43937__$1 = tmp44071;
var inst_43938__$1 = tmp44072;
var inst_43939__$1 = inst_43955;
var state_44059__$1 = (function (){var statearr_44078 = state_44059;
(statearr_44078[(18)] = inst_43954);

(statearr_44078[(14)] = inst_43937__$1);

(statearr_44078[(15)] = inst_43938__$1);

(statearr_44078[(16)] = inst_43936__$1);

(statearr_44078[(17)] = inst_43939__$1);

return statearr_44078;
})();
var statearr_44079_45166 = state_44059__$1;
(statearr_44079_45166[(2)] = null);

(statearr_44079_45166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (21))){
var inst_43981 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44083_45167 = state_44059__$1;
(statearr_44083_45167[(2)] = inst_43981);

(statearr_44083_45167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (31))){
var inst_44007 = (state_44059[(11)]);
var inst_44011 = done(null);
var inst_44012 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44007);
var state_44059__$1 = (function (){var statearr_44084 = state_44059;
(statearr_44084[(19)] = inst_44011);

return statearr_44084;
})();
var statearr_44085_45168 = state_44059__$1;
(statearr_44085_45168[(2)] = inst_44012);

(statearr_44085_45168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (32))){
var inst_44002 = (state_44059[(9)]);
var inst_43999 = (state_44059[(20)]);
var inst_44000 = (state_44059[(12)]);
var inst_44001 = (state_44059[(21)]);
var inst_44014 = (state_44059[(2)]);
var inst_44015 = (inst_44002 + (1));
var tmp44080 = inst_43999;
var tmp44081 = inst_44000;
var tmp44082 = inst_44001;
var inst_43999__$1 = tmp44080;
var inst_44000__$1 = tmp44081;
var inst_44001__$1 = tmp44082;
var inst_44002__$1 = inst_44015;
var state_44059__$1 = (function (){var statearr_44086 = state_44059;
(statearr_44086[(9)] = inst_44002__$1);

(statearr_44086[(20)] = inst_43999__$1);

(statearr_44086[(12)] = inst_44000__$1);

(statearr_44086[(22)] = inst_44014);

(statearr_44086[(21)] = inst_44001__$1);

return statearr_44086;
})();
var statearr_44087_45169 = state_44059__$1;
(statearr_44087_45169[(2)] = null);

(statearr_44087_45169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (40))){
var inst_44027 = (state_44059[(23)]);
var inst_44031 = done(null);
var inst_44032 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44027);
var state_44059__$1 = (function (){var statearr_44088 = state_44059;
(statearr_44088[(24)] = inst_44031);

return statearr_44088;
})();
var statearr_44089_45170 = state_44059__$1;
(statearr_44089_45170[(2)] = inst_44032);

(statearr_44089_45170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (33))){
var inst_44018 = (state_44059[(25)]);
var inst_44020 = cljs.core.chunked_seq_QMARK_(inst_44018);
var state_44059__$1 = state_44059;
if(inst_44020){
var statearr_44090_45171 = state_44059__$1;
(statearr_44090_45171[(1)] = (36));

} else {
var statearr_44091_45172 = state_44059__$1;
(statearr_44091_45172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (13))){
var inst_43948 = (state_44059[(26)]);
var inst_43951 = cljs.core.async.close_BANG_(inst_43948);
var state_44059__$1 = state_44059;
var statearr_44092_45173 = state_44059__$1;
(statearr_44092_45173[(2)] = inst_43951);

(statearr_44092_45173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (22))){
var inst_43971 = (state_44059[(8)]);
var inst_43974 = cljs.core.async.close_BANG_(inst_43971);
var state_44059__$1 = state_44059;
var statearr_44093_45174 = state_44059__$1;
(statearr_44093_45174[(2)] = inst_43974);

(statearr_44093_45174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (36))){
var inst_44018 = (state_44059[(25)]);
var inst_44022 = cljs.core.chunk_first(inst_44018);
var inst_44023 = cljs.core.chunk_rest(inst_44018);
var inst_44024 = cljs.core.count(inst_44022);
var inst_43999 = inst_44023;
var inst_44000 = inst_44022;
var inst_44001 = inst_44024;
var inst_44002 = (0);
var state_44059__$1 = (function (){var statearr_44094 = state_44059;
(statearr_44094[(9)] = inst_44002);

(statearr_44094[(20)] = inst_43999);

(statearr_44094[(12)] = inst_44000);

(statearr_44094[(21)] = inst_44001);

return statearr_44094;
})();
var statearr_44095_45175 = state_44059__$1;
(statearr_44095_45175[(2)] = null);

(statearr_44095_45175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (41))){
var inst_44018 = (state_44059[(25)]);
var inst_44034 = (state_44059[(2)]);
var inst_44035 = cljs.core.next(inst_44018);
var inst_43999 = inst_44035;
var inst_44000 = null;
var inst_44001 = (0);
var inst_44002 = (0);
var state_44059__$1 = (function (){var statearr_44096 = state_44059;
(statearr_44096[(9)] = inst_44002);

(statearr_44096[(20)] = inst_43999);

(statearr_44096[(12)] = inst_44000);

(statearr_44096[(27)] = inst_44034);

(statearr_44096[(21)] = inst_44001);

return statearr_44096;
})();
var statearr_44097_45176 = state_44059__$1;
(statearr_44097_45176[(2)] = null);

(statearr_44097_45176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (43))){
var state_44059__$1 = state_44059;
var statearr_44098_45177 = state_44059__$1;
(statearr_44098_45177[(2)] = null);

(statearr_44098_45177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (29))){
var inst_44043 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44099_45178 = state_44059__$1;
(statearr_44099_45178[(2)] = inst_44043);

(statearr_44099_45178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (44))){
var inst_44052 = (state_44059[(2)]);
var state_44059__$1 = (function (){var statearr_44100 = state_44059;
(statearr_44100[(28)] = inst_44052);

return statearr_44100;
})();
var statearr_44101_45179 = state_44059__$1;
(statearr_44101_45179[(2)] = null);

(statearr_44101_45179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (6))){
var inst_43991 = (state_44059[(29)]);
var inst_43990 = cljs.core.deref(cs);
var inst_43991__$1 = cljs.core.keys(inst_43990);
var inst_43992 = cljs.core.count(inst_43991__$1);
var inst_43993 = cljs.core.reset_BANG_(dctr,inst_43992);
var inst_43998 = cljs.core.seq(inst_43991__$1);
var inst_43999 = inst_43998;
var inst_44000 = null;
var inst_44001 = (0);
var inst_44002 = (0);
var state_44059__$1 = (function (){var statearr_44102 = state_44059;
(statearr_44102[(9)] = inst_44002);

(statearr_44102[(20)] = inst_43999);

(statearr_44102[(29)] = inst_43991__$1);

(statearr_44102[(12)] = inst_44000);

(statearr_44102[(30)] = inst_43993);

(statearr_44102[(21)] = inst_44001);

return statearr_44102;
})();
var statearr_44103_45184 = state_44059__$1;
(statearr_44103_45184[(2)] = null);

(statearr_44103_45184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (28))){
var inst_43999 = (state_44059[(20)]);
var inst_44018 = (state_44059[(25)]);
var inst_44018__$1 = cljs.core.seq(inst_43999);
var state_44059__$1 = (function (){var statearr_44104 = state_44059;
(statearr_44104[(25)] = inst_44018__$1);

return statearr_44104;
})();
if(inst_44018__$1){
var statearr_44105_45191 = state_44059__$1;
(statearr_44105_45191[(1)] = (33));

} else {
var statearr_44106_45192 = state_44059__$1;
(statearr_44106_45192[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (25))){
var inst_44002 = (state_44059[(9)]);
var inst_44001 = (state_44059[(21)]);
var inst_44004 = (inst_44002 < inst_44001);
var inst_44005 = inst_44004;
var state_44059__$1 = state_44059;
if(cljs.core.truth_(inst_44005)){
var statearr_44107_45193 = state_44059__$1;
(statearr_44107_45193[(1)] = (27));

} else {
var statearr_44108_45196 = state_44059__$1;
(statearr_44108_45196[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (34))){
var state_44059__$1 = state_44059;
var statearr_44109_45197 = state_44059__$1;
(statearr_44109_45197[(2)] = null);

(statearr_44109_45197[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (17))){
var state_44059__$1 = state_44059;
var statearr_44110_45200 = state_44059__$1;
(statearr_44110_45200[(2)] = null);

(statearr_44110_45200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (3))){
var inst_44057 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44059__$1,inst_44057);
} else {
if((state_val_44060 === (12))){
var inst_43986 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44111_45201 = state_44059__$1;
(statearr_44111_45201[(2)] = inst_43986);

(statearr_44111_45201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (2))){
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44059__$1,(4),ch);
} else {
if((state_val_44060 === (23))){
var state_44059__$1 = state_44059;
var statearr_44112_45204 = state_44059__$1;
(statearr_44112_45204[(2)] = null);

(statearr_44112_45204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (35))){
var inst_44041 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44113_45205 = state_44059__$1;
(statearr_44113_45205[(2)] = inst_44041);

(statearr_44113_45205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (19))){
var inst_43958 = (state_44059[(7)]);
var inst_43962 = cljs.core.chunk_first(inst_43958);
var inst_43963 = cljs.core.chunk_rest(inst_43958);
var inst_43964 = cljs.core.count(inst_43962);
var inst_43936 = inst_43963;
var inst_43937 = inst_43962;
var inst_43938 = inst_43964;
var inst_43939 = (0);
var state_44059__$1 = (function (){var statearr_44114 = state_44059;
(statearr_44114[(14)] = inst_43937);

(statearr_44114[(15)] = inst_43938);

(statearr_44114[(16)] = inst_43936);

(statearr_44114[(17)] = inst_43939);

return statearr_44114;
})();
var statearr_44115_45206 = state_44059__$1;
(statearr_44115_45206[(2)] = null);

(statearr_44115_45206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (11))){
var inst_43958 = (state_44059[(7)]);
var inst_43936 = (state_44059[(16)]);
var inst_43958__$1 = cljs.core.seq(inst_43936);
var state_44059__$1 = (function (){var statearr_44116 = state_44059;
(statearr_44116[(7)] = inst_43958__$1);

return statearr_44116;
})();
if(inst_43958__$1){
var statearr_44117_45208 = state_44059__$1;
(statearr_44117_45208[(1)] = (16));

} else {
var statearr_44118_45209 = state_44059__$1;
(statearr_44118_45209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (9))){
var inst_43988 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44119_45210 = state_44059__$1;
(statearr_44119_45210[(2)] = inst_43988);

(statearr_44119_45210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (5))){
var inst_43934 = cljs.core.deref(cs);
var inst_43935 = cljs.core.seq(inst_43934);
var inst_43936 = inst_43935;
var inst_43937 = null;
var inst_43938 = (0);
var inst_43939 = (0);
var state_44059__$1 = (function (){var statearr_44120 = state_44059;
(statearr_44120[(14)] = inst_43937);

(statearr_44120[(15)] = inst_43938);

(statearr_44120[(16)] = inst_43936);

(statearr_44120[(17)] = inst_43939);

return statearr_44120;
})();
var statearr_44121_45211 = state_44059__$1;
(statearr_44121_45211[(2)] = null);

(statearr_44121_45211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (14))){
var state_44059__$1 = state_44059;
var statearr_44122_45212 = state_44059__$1;
(statearr_44122_45212[(2)] = null);

(statearr_44122_45212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (45))){
var inst_44049 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44123_45213 = state_44059__$1;
(statearr_44123_45213[(2)] = inst_44049);

(statearr_44123_45213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (26))){
var inst_43991 = (state_44059[(29)]);
var inst_44045 = (state_44059[(2)]);
var inst_44046 = cljs.core.seq(inst_43991);
var state_44059__$1 = (function (){var statearr_44124 = state_44059;
(statearr_44124[(31)] = inst_44045);

return statearr_44124;
})();
if(inst_44046){
var statearr_44125_45214 = state_44059__$1;
(statearr_44125_45214[(1)] = (42));

} else {
var statearr_44126_45215 = state_44059__$1;
(statearr_44126_45215[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (16))){
var inst_43958 = (state_44059[(7)]);
var inst_43960 = cljs.core.chunked_seq_QMARK_(inst_43958);
var state_44059__$1 = state_44059;
if(inst_43960){
var statearr_44127_45216 = state_44059__$1;
(statearr_44127_45216[(1)] = (19));

} else {
var statearr_44128_45217 = state_44059__$1;
(statearr_44128_45217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (38))){
var inst_44038 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44129_45218 = state_44059__$1;
(statearr_44129_45218[(2)] = inst_44038);

(statearr_44129_45218[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (30))){
var state_44059__$1 = state_44059;
var statearr_44130_45219 = state_44059__$1;
(statearr_44130_45219[(2)] = null);

(statearr_44130_45219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (10))){
var inst_43937 = (state_44059[(14)]);
var inst_43939 = (state_44059[(17)]);
var inst_43947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43937,inst_43939);
var inst_43948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43947,(0),null);
var inst_43949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43947,(1),null);
var state_44059__$1 = (function (){var statearr_44131 = state_44059;
(statearr_44131[(26)] = inst_43948);

return statearr_44131;
})();
if(cljs.core.truth_(inst_43949)){
var statearr_44132_45220 = state_44059__$1;
(statearr_44132_45220[(1)] = (13));

} else {
var statearr_44133_45221 = state_44059__$1;
(statearr_44133_45221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (18))){
var inst_43984 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44134_45222 = state_44059__$1;
(statearr_44134_45222[(2)] = inst_43984);

(statearr_44134_45222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (42))){
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44059__$1,(45),dchan);
} else {
if((state_val_44060 === (37))){
var inst_43927 = (state_44059[(10)]);
var inst_44018 = (state_44059[(25)]);
var inst_44027 = (state_44059[(23)]);
var inst_44027__$1 = cljs.core.first(inst_44018);
var inst_44028 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44027__$1,inst_43927,done);
var state_44059__$1 = (function (){var statearr_44135 = state_44059;
(statearr_44135[(23)] = inst_44027__$1);

return statearr_44135;
})();
if(cljs.core.truth_(inst_44028)){
var statearr_44136_45223 = state_44059__$1;
(statearr_44136_45223[(1)] = (39));

} else {
var statearr_44137_45224 = state_44059__$1;
(statearr_44137_45224[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (8))){
var inst_43938 = (state_44059[(15)]);
var inst_43939 = (state_44059[(17)]);
var inst_43941 = (inst_43939 < inst_43938);
var inst_43942 = inst_43941;
var state_44059__$1 = state_44059;
if(cljs.core.truth_(inst_43942)){
var statearr_44138_45225 = state_44059__$1;
(statearr_44138_45225[(1)] = (10));

} else {
var statearr_44139_45226 = state_44059__$1;
(statearr_44139_45226[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43385__auto__ = null;
var cljs$core$async$mult_$_state_machine__43385__auto____0 = (function (){
var statearr_44140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44140[(0)] = cljs$core$async$mult_$_state_machine__43385__auto__);

(statearr_44140[(1)] = (1));

return statearr_44140;
});
var cljs$core$async$mult_$_state_machine__43385__auto____1 = (function (state_44059){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44059);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44141){if((e44141 instanceof Object)){
var ex__43388__auto__ = e44141;
var statearr_44142_45227 = state_44059;
(statearr_44142_45227[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45228 = state_44059;
state_44059 = G__45228;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43385__auto__ = function(state_44059){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43385__auto____1.call(this,state_44059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43385__auto____0;
cljs$core$async$mult_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43385__auto____1;
return cljs$core$async$mult_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44143 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44143[(6)] = c__43452__auto___45155);

return statearr_44143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var G__44145 = arguments.length;
switch (G__44145) {
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
var len__4789__auto___45230 = arguments.length;
var i__4790__auto___45231 = (0);
while(true){
if((i__4790__auto___45231 < len__4789__auto___45230)){
args__4795__auto__.push((arguments[i__4790__auto___45231]));

var G__45232 = (i__4790__auto___45231 + (1));
i__4790__auto___45231 = G__45232;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44150){
var map__44151 = p__44150;
var map__44151__$1 = (((((!((map__44151 == null))))?(((((map__44151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44151):map__44151);
var opts = map__44151__$1;
var statearr_44153_45237 = state;
(statearr_44153_45237[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44154_45238 = state;
(statearr_44154_45238[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44155_45239 = state;
(statearr_44155_45239[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44146){
var G__44147 = cljs.core.first(seq44146);
var seq44146__$1 = cljs.core.next(seq44146);
var G__44148 = cljs.core.first(seq44146__$1);
var seq44146__$2 = cljs.core.next(seq44146__$1);
var G__44149 = cljs.core.first(seq44146__$2);
var seq44146__$3 = cljs.core.next(seq44146__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44147,G__44148,G__44149,seq44146__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44156 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44157){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44157 = meta44157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44158,meta44157__$1){
var self__ = this;
var _44158__$1 = this;
return (new cljs.core.async.t_cljs$core$async44156(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44157__$1));
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44158){
var self__ = this;
var _44158__$1 = this;
return self__.meta44157;
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44156.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44157","meta44157",-475954424,null)], null);
}));

(cljs.core.async.t_cljs$core$async44156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44156");

(cljs.core.async.t_cljs$core$async44156.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44156.
 */
cljs.core.async.__GT_t_cljs$core$async44156 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44156(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44157){
return (new cljs.core.async.t_cljs$core$async44156(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44157));
});

}

return (new cljs.core.async.t_cljs$core$async44156(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43452__auto___45249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44260){
var state_val_44261 = (state_44260[(1)]);
if((state_val_44261 === (7))){
var inst_44175 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44262_45250 = state_44260__$1;
(statearr_44262_45250[(2)] = inst_44175);

(statearr_44262_45250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (20))){
var inst_44187 = (state_44260[(7)]);
var state_44260__$1 = state_44260;
var statearr_44263_45251 = state_44260__$1;
(statearr_44263_45251[(2)] = inst_44187);

(statearr_44263_45251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (27))){
var state_44260__$1 = state_44260;
var statearr_44264_45252 = state_44260__$1;
(statearr_44264_45252[(2)] = null);

(statearr_44264_45252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (1))){
var inst_44162 = (state_44260[(8)]);
var inst_44162__$1 = calc_state();
var inst_44164 = (inst_44162__$1 == null);
var inst_44165 = cljs.core.not(inst_44164);
var state_44260__$1 = (function (){var statearr_44265 = state_44260;
(statearr_44265[(8)] = inst_44162__$1);

return statearr_44265;
})();
if(inst_44165){
var statearr_44266_45253 = state_44260__$1;
(statearr_44266_45253[(1)] = (2));

} else {
var statearr_44267_45254 = state_44260__$1;
(statearr_44267_45254[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (24))){
var inst_44220 = (state_44260[(9)]);
var inst_44234 = (state_44260[(10)]);
var inst_44211 = (state_44260[(11)]);
var inst_44234__$1 = (inst_44211.cljs$core$IFn$_invoke$arity$1 ? inst_44211.cljs$core$IFn$_invoke$arity$1(inst_44220) : inst_44211.call(null,inst_44220));
var state_44260__$1 = (function (){var statearr_44268 = state_44260;
(statearr_44268[(10)] = inst_44234__$1);

return statearr_44268;
})();
if(cljs.core.truth_(inst_44234__$1)){
var statearr_44269_45255 = state_44260__$1;
(statearr_44269_45255[(1)] = (29));

} else {
var statearr_44270_45256 = state_44260__$1;
(statearr_44270_45256[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (4))){
var inst_44178 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44178)){
var statearr_44271_45257 = state_44260__$1;
(statearr_44271_45257[(1)] = (8));

} else {
var statearr_44272_45258 = state_44260__$1;
(statearr_44272_45258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (15))){
var inst_44205 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44205)){
var statearr_44273_45259 = state_44260__$1;
(statearr_44273_45259[(1)] = (19));

} else {
var statearr_44274_45260 = state_44260__$1;
(statearr_44274_45260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (21))){
var inst_44210 = (state_44260[(12)]);
var inst_44210__$1 = (state_44260[(2)]);
var inst_44211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44260__$1 = (function (){var statearr_44275 = state_44260;
(statearr_44275[(13)] = inst_44212);

(statearr_44275[(12)] = inst_44210__$1);

(statearr_44275[(11)] = inst_44211);

return statearr_44275;
})();
return cljs.core.async.ioc_alts_BANG_(state_44260__$1,(22),inst_44213);
} else {
if((state_val_44261 === (31))){
var inst_44242 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44242)){
var statearr_44276_45261 = state_44260__$1;
(statearr_44276_45261[(1)] = (32));

} else {
var statearr_44277_45262 = state_44260__$1;
(statearr_44277_45262[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (32))){
var inst_44219 = (state_44260[(14)]);
var state_44260__$1 = state_44260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44260__$1,(35),out,inst_44219);
} else {
if((state_val_44261 === (33))){
var inst_44210 = (state_44260[(12)]);
var inst_44187 = inst_44210;
var state_44260__$1 = (function (){var statearr_44278 = state_44260;
(statearr_44278[(7)] = inst_44187);

return statearr_44278;
})();
var statearr_44279_45264 = state_44260__$1;
(statearr_44279_45264[(2)] = null);

(statearr_44279_45264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (13))){
var inst_44187 = (state_44260[(7)]);
var inst_44194 = inst_44187.cljs$lang$protocol_mask$partition0$;
var inst_44195 = (inst_44194 & (64));
var inst_44196 = inst_44187.cljs$core$ISeq$;
var inst_44197 = (cljs.core.PROTOCOL_SENTINEL === inst_44196);
var inst_44198 = ((inst_44195) || (inst_44197));
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44198)){
var statearr_44280_45267 = state_44260__$1;
(statearr_44280_45267[(1)] = (16));

} else {
var statearr_44281_45268 = state_44260__$1;
(statearr_44281_45268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (22))){
var inst_44220 = (state_44260[(9)]);
var inst_44219 = (state_44260[(14)]);
var inst_44218 = (state_44260[(2)]);
var inst_44219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44218,(0),null);
var inst_44220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44218,(1),null);
var inst_44221 = (inst_44219__$1 == null);
var inst_44222 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44220__$1,change);
var inst_44223 = ((inst_44221) || (inst_44222));
var state_44260__$1 = (function (){var statearr_44282 = state_44260;
(statearr_44282[(9)] = inst_44220__$1);

(statearr_44282[(14)] = inst_44219__$1);

return statearr_44282;
})();
if(cljs.core.truth_(inst_44223)){
var statearr_44283_45279 = state_44260__$1;
(statearr_44283_45279[(1)] = (23));

} else {
var statearr_44284_45280 = state_44260__$1;
(statearr_44284_45280[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (36))){
var inst_44210 = (state_44260[(12)]);
var inst_44187 = inst_44210;
var state_44260__$1 = (function (){var statearr_44285 = state_44260;
(statearr_44285[(7)] = inst_44187);

return statearr_44285;
})();
var statearr_44286_45285 = state_44260__$1;
(statearr_44286_45285[(2)] = null);

(statearr_44286_45285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (29))){
var inst_44234 = (state_44260[(10)]);
var state_44260__$1 = state_44260;
var statearr_44287_45286 = state_44260__$1;
(statearr_44287_45286[(2)] = inst_44234);

(statearr_44287_45286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (6))){
var state_44260__$1 = state_44260;
var statearr_44288_45287 = state_44260__$1;
(statearr_44288_45287[(2)] = false);

(statearr_44288_45287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (28))){
var inst_44230 = (state_44260[(2)]);
var inst_44231 = calc_state();
var inst_44187 = inst_44231;
var state_44260__$1 = (function (){var statearr_44289 = state_44260;
(statearr_44289[(7)] = inst_44187);

(statearr_44289[(15)] = inst_44230);

return statearr_44289;
})();
var statearr_44290_45288 = state_44260__$1;
(statearr_44290_45288[(2)] = null);

(statearr_44290_45288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (25))){
var inst_44256 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44291_45289 = state_44260__$1;
(statearr_44291_45289[(2)] = inst_44256);

(statearr_44291_45289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (34))){
var inst_44254 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44292_45290 = state_44260__$1;
(statearr_44292_45290[(2)] = inst_44254);

(statearr_44292_45290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (17))){
var state_44260__$1 = state_44260;
var statearr_44293_45291 = state_44260__$1;
(statearr_44293_45291[(2)] = false);

(statearr_44293_45291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (3))){
var state_44260__$1 = state_44260;
var statearr_44294_45292 = state_44260__$1;
(statearr_44294_45292[(2)] = false);

(statearr_44294_45292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (12))){
var inst_44258 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44260__$1,inst_44258);
} else {
if((state_val_44261 === (2))){
var inst_44162 = (state_44260[(8)]);
var inst_44167 = inst_44162.cljs$lang$protocol_mask$partition0$;
var inst_44168 = (inst_44167 & (64));
var inst_44169 = inst_44162.cljs$core$ISeq$;
var inst_44170 = (cljs.core.PROTOCOL_SENTINEL === inst_44169);
var inst_44171 = ((inst_44168) || (inst_44170));
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44171)){
var statearr_44295_45293 = state_44260__$1;
(statearr_44295_45293[(1)] = (5));

} else {
var statearr_44296_45294 = state_44260__$1;
(statearr_44296_45294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (23))){
var inst_44219 = (state_44260[(14)]);
var inst_44225 = (inst_44219 == null);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44225)){
var statearr_44297_45295 = state_44260__$1;
(statearr_44297_45295[(1)] = (26));

} else {
var statearr_44298_45296 = state_44260__$1;
(statearr_44298_45296[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (35))){
var inst_44245 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
if(cljs.core.truth_(inst_44245)){
var statearr_44299_45297 = state_44260__$1;
(statearr_44299_45297[(1)] = (36));

} else {
var statearr_44300_45298 = state_44260__$1;
(statearr_44300_45298[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (19))){
var inst_44187 = (state_44260[(7)]);
var inst_44207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44187);
var state_44260__$1 = state_44260;
var statearr_44301_45299 = state_44260__$1;
(statearr_44301_45299[(2)] = inst_44207);

(statearr_44301_45299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (11))){
var inst_44187 = (state_44260[(7)]);
var inst_44191 = (inst_44187 == null);
var inst_44192 = cljs.core.not(inst_44191);
var state_44260__$1 = state_44260;
if(inst_44192){
var statearr_44302_45300 = state_44260__$1;
(statearr_44302_45300[(1)] = (13));

} else {
var statearr_44303_45301 = state_44260__$1;
(statearr_44303_45301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (9))){
var inst_44162 = (state_44260[(8)]);
var state_44260__$1 = state_44260;
var statearr_44304_45302 = state_44260__$1;
(statearr_44304_45302[(2)] = inst_44162);

(statearr_44304_45302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (5))){
var state_44260__$1 = state_44260;
var statearr_44305_45303 = state_44260__$1;
(statearr_44305_45303[(2)] = true);

(statearr_44305_45303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (14))){
var state_44260__$1 = state_44260;
var statearr_44306_45304 = state_44260__$1;
(statearr_44306_45304[(2)] = false);

(statearr_44306_45304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (26))){
var inst_44220 = (state_44260[(9)]);
var inst_44227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44220);
var state_44260__$1 = state_44260;
var statearr_44307_45305 = state_44260__$1;
(statearr_44307_45305[(2)] = inst_44227);

(statearr_44307_45305[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (16))){
var state_44260__$1 = state_44260;
var statearr_44308_45308 = state_44260__$1;
(statearr_44308_45308[(2)] = true);

(statearr_44308_45308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (38))){
var inst_44250 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44309_45310 = state_44260__$1;
(statearr_44309_45310[(2)] = inst_44250);

(statearr_44309_45310[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (30))){
var inst_44220 = (state_44260[(9)]);
var inst_44212 = (state_44260[(13)]);
var inst_44211 = (state_44260[(11)]);
var inst_44237 = cljs.core.empty_QMARK_(inst_44211);
var inst_44238 = (inst_44212.cljs$core$IFn$_invoke$arity$1 ? inst_44212.cljs$core$IFn$_invoke$arity$1(inst_44220) : inst_44212.call(null,inst_44220));
var inst_44239 = cljs.core.not(inst_44238);
var inst_44240 = ((inst_44237) && (inst_44239));
var state_44260__$1 = state_44260;
var statearr_44310_45311 = state_44260__$1;
(statearr_44310_45311[(2)] = inst_44240);

(statearr_44310_45311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (10))){
var inst_44162 = (state_44260[(8)]);
var inst_44183 = (state_44260[(2)]);
var inst_44184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44187 = inst_44162;
var state_44260__$1 = (function (){var statearr_44311 = state_44260;
(statearr_44311[(7)] = inst_44187);

(statearr_44311[(16)] = inst_44185);

(statearr_44311[(17)] = inst_44184);

(statearr_44311[(18)] = inst_44186);

return statearr_44311;
})();
var statearr_44312_45313 = state_44260__$1;
(statearr_44312_45313[(2)] = null);

(statearr_44312_45313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (18))){
var inst_44202 = (state_44260[(2)]);
var state_44260__$1 = state_44260;
var statearr_44313_45314 = state_44260__$1;
(statearr_44313_45314[(2)] = inst_44202);

(statearr_44313_45314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (37))){
var state_44260__$1 = state_44260;
var statearr_44314_45315 = state_44260__$1;
(statearr_44314_45315[(2)] = null);

(statearr_44314_45315[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44261 === (8))){
var inst_44162 = (state_44260[(8)]);
var inst_44180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44162);
var state_44260__$1 = state_44260;
var statearr_44315_45322 = state_44260__$1;
(statearr_44315_45322[(2)] = inst_44180);

(statearr_44315_45322[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__43385__auto__ = null;
var cljs$core$async$mix_$_state_machine__43385__auto____0 = (function (){
var statearr_44316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44316[(0)] = cljs$core$async$mix_$_state_machine__43385__auto__);

(statearr_44316[(1)] = (1));

return statearr_44316;
});
var cljs$core$async$mix_$_state_machine__43385__auto____1 = (function (state_44260){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44260);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44317){if((e44317 instanceof Object)){
var ex__43388__auto__ = e44317;
var statearr_44318_45332 = state_44260;
(statearr_44318_45332[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45338 = state_44260;
state_44260 = G__45338;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43385__auto__ = function(state_44260){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43385__auto____1.call(this,state_44260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43385__auto____0;
cljs$core$async$mix_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43385__auto____1;
return cljs$core$async$mix_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44319 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44319[(6)] = c__43452__auto___45249);

return statearr_44319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var G__44321 = arguments.length;
switch (G__44321) {
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
var G__44324 = arguments.length;
switch (G__44324) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44322_SHARP_){
if(cljs.core.truth_((p1__44322_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44322_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44322_SHARP_.call(null,topic)))){
return p1__44322_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44322_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44325 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44326){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44326 = meta44326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44327,meta44326__$1){
var self__ = this;
var _44327__$1 = this;
return (new cljs.core.async.t_cljs$core$async44325(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44326__$1));
}));

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44327){
var self__ = this;
var _44327__$1 = this;
return self__.meta44326;
}));

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44325.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44326","meta44326",78376960,null)], null);
}));

(cljs.core.async.t_cljs$core$async44325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44325");

(cljs.core.async.t_cljs$core$async44325.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44325.
 */
cljs.core.async.__GT_t_cljs$core$async44325 = (function cljs$core$async$__GT_t_cljs$core$async44325(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44326){
return (new cljs.core.async.t_cljs$core$async44325(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44326));
});

}

return (new cljs.core.async.t_cljs$core$async44325(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43452__auto___45347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44399){
var state_val_44400 = (state_44399[(1)]);
if((state_val_44400 === (7))){
var inst_44395 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44401_45348 = state_44399__$1;
(statearr_44401_45348[(2)] = inst_44395);

(statearr_44401_45348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (20))){
var state_44399__$1 = state_44399;
var statearr_44402_45349 = state_44399__$1;
(statearr_44402_45349[(2)] = null);

(statearr_44402_45349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (1))){
var state_44399__$1 = state_44399;
var statearr_44403_45350 = state_44399__$1;
(statearr_44403_45350[(2)] = null);

(statearr_44403_45350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (24))){
var inst_44378 = (state_44399[(7)]);
var inst_44387 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44378);
var state_44399__$1 = state_44399;
var statearr_44404_45351 = state_44399__$1;
(statearr_44404_45351[(2)] = inst_44387);

(statearr_44404_45351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (4))){
var inst_44330 = (state_44399[(8)]);
var inst_44330__$1 = (state_44399[(2)]);
var inst_44331 = (inst_44330__$1 == null);
var state_44399__$1 = (function (){var statearr_44405 = state_44399;
(statearr_44405[(8)] = inst_44330__$1);

return statearr_44405;
})();
if(cljs.core.truth_(inst_44331)){
var statearr_44406_45352 = state_44399__$1;
(statearr_44406_45352[(1)] = (5));

} else {
var statearr_44407_45353 = state_44399__$1;
(statearr_44407_45353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (15))){
var inst_44372 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44408_45354 = state_44399__$1;
(statearr_44408_45354[(2)] = inst_44372);

(statearr_44408_45354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (21))){
var inst_44392 = (state_44399[(2)]);
var state_44399__$1 = (function (){var statearr_44409 = state_44399;
(statearr_44409[(9)] = inst_44392);

return statearr_44409;
})();
var statearr_44410_45355 = state_44399__$1;
(statearr_44410_45355[(2)] = null);

(statearr_44410_45355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (13))){
var inst_44354 = (state_44399[(10)]);
var inst_44356 = cljs.core.chunked_seq_QMARK_(inst_44354);
var state_44399__$1 = state_44399;
if(inst_44356){
var statearr_44411_45356 = state_44399__$1;
(statearr_44411_45356[(1)] = (16));

} else {
var statearr_44412_45357 = state_44399__$1;
(statearr_44412_45357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (22))){
var inst_44384 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
if(cljs.core.truth_(inst_44384)){
var statearr_44413_45358 = state_44399__$1;
(statearr_44413_45358[(1)] = (23));

} else {
var statearr_44414_45359 = state_44399__$1;
(statearr_44414_45359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (6))){
var inst_44330 = (state_44399[(8)]);
var inst_44378 = (state_44399[(7)]);
var inst_44380 = (state_44399[(11)]);
var inst_44378__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44330) : topic_fn.call(null,inst_44330));
var inst_44379 = cljs.core.deref(mults);
var inst_44380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44379,inst_44378__$1);
var state_44399__$1 = (function (){var statearr_44415 = state_44399;
(statearr_44415[(7)] = inst_44378__$1);

(statearr_44415[(11)] = inst_44380__$1);

return statearr_44415;
})();
if(cljs.core.truth_(inst_44380__$1)){
var statearr_44416_45360 = state_44399__$1;
(statearr_44416_45360[(1)] = (19));

} else {
var statearr_44417_45361 = state_44399__$1;
(statearr_44417_45361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (25))){
var inst_44389 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44418_45362 = state_44399__$1;
(statearr_44418_45362[(2)] = inst_44389);

(statearr_44418_45362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (17))){
var inst_44354 = (state_44399[(10)]);
var inst_44363 = cljs.core.first(inst_44354);
var inst_44364 = cljs.core.async.muxch_STAR_(inst_44363);
var inst_44365 = cljs.core.async.close_BANG_(inst_44364);
var inst_44366 = cljs.core.next(inst_44354);
var inst_44340 = inst_44366;
var inst_44341 = null;
var inst_44342 = (0);
var inst_44343 = (0);
var state_44399__$1 = (function (){var statearr_44419 = state_44399;
(statearr_44419[(12)] = inst_44343);

(statearr_44419[(13)] = inst_44341);

(statearr_44419[(14)] = inst_44342);

(statearr_44419[(15)] = inst_44340);

(statearr_44419[(16)] = inst_44365);

return statearr_44419;
})();
var statearr_44420_45363 = state_44399__$1;
(statearr_44420_45363[(2)] = null);

(statearr_44420_45363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (3))){
var inst_44397 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44399__$1,inst_44397);
} else {
if((state_val_44400 === (12))){
var inst_44374 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44421_45364 = state_44399__$1;
(statearr_44421_45364[(2)] = inst_44374);

(statearr_44421_45364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (2))){
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44399__$1,(4),ch);
} else {
if((state_val_44400 === (23))){
var state_44399__$1 = state_44399;
var statearr_44422_45365 = state_44399__$1;
(statearr_44422_45365[(2)] = null);

(statearr_44422_45365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (19))){
var inst_44330 = (state_44399[(8)]);
var inst_44380 = (state_44399[(11)]);
var inst_44382 = cljs.core.async.muxch_STAR_(inst_44380);
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44399__$1,(22),inst_44382,inst_44330);
} else {
if((state_val_44400 === (11))){
var inst_44354 = (state_44399[(10)]);
var inst_44340 = (state_44399[(15)]);
var inst_44354__$1 = cljs.core.seq(inst_44340);
var state_44399__$1 = (function (){var statearr_44423 = state_44399;
(statearr_44423[(10)] = inst_44354__$1);

return statearr_44423;
})();
if(inst_44354__$1){
var statearr_44424_45366 = state_44399__$1;
(statearr_44424_45366[(1)] = (13));

} else {
var statearr_44425_45367 = state_44399__$1;
(statearr_44425_45367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (9))){
var inst_44376 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44426_45368 = state_44399__$1;
(statearr_44426_45368[(2)] = inst_44376);

(statearr_44426_45368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (5))){
var inst_44337 = cljs.core.deref(mults);
var inst_44338 = cljs.core.vals(inst_44337);
var inst_44339 = cljs.core.seq(inst_44338);
var inst_44340 = inst_44339;
var inst_44341 = null;
var inst_44342 = (0);
var inst_44343 = (0);
var state_44399__$1 = (function (){var statearr_44427 = state_44399;
(statearr_44427[(12)] = inst_44343);

(statearr_44427[(13)] = inst_44341);

(statearr_44427[(14)] = inst_44342);

(statearr_44427[(15)] = inst_44340);

return statearr_44427;
})();
var statearr_44428_45369 = state_44399__$1;
(statearr_44428_45369[(2)] = null);

(statearr_44428_45369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (14))){
var state_44399__$1 = state_44399;
var statearr_44432_45370 = state_44399__$1;
(statearr_44432_45370[(2)] = null);

(statearr_44432_45370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (16))){
var inst_44354 = (state_44399[(10)]);
var inst_44358 = cljs.core.chunk_first(inst_44354);
var inst_44359 = cljs.core.chunk_rest(inst_44354);
var inst_44360 = cljs.core.count(inst_44358);
var inst_44340 = inst_44359;
var inst_44341 = inst_44358;
var inst_44342 = inst_44360;
var inst_44343 = (0);
var state_44399__$1 = (function (){var statearr_44433 = state_44399;
(statearr_44433[(12)] = inst_44343);

(statearr_44433[(13)] = inst_44341);

(statearr_44433[(14)] = inst_44342);

(statearr_44433[(15)] = inst_44340);

return statearr_44433;
})();
var statearr_44434_45371 = state_44399__$1;
(statearr_44434_45371[(2)] = null);

(statearr_44434_45371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (10))){
var inst_44343 = (state_44399[(12)]);
var inst_44341 = (state_44399[(13)]);
var inst_44342 = (state_44399[(14)]);
var inst_44340 = (state_44399[(15)]);
var inst_44348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44341,inst_44343);
var inst_44349 = cljs.core.async.muxch_STAR_(inst_44348);
var inst_44350 = cljs.core.async.close_BANG_(inst_44349);
var inst_44351 = (inst_44343 + (1));
var tmp44429 = inst_44341;
var tmp44430 = inst_44342;
var tmp44431 = inst_44340;
var inst_44340__$1 = tmp44431;
var inst_44341__$1 = tmp44429;
var inst_44342__$1 = tmp44430;
var inst_44343__$1 = inst_44351;
var state_44399__$1 = (function (){var statearr_44435 = state_44399;
(statearr_44435[(12)] = inst_44343__$1);

(statearr_44435[(13)] = inst_44341__$1);

(statearr_44435[(14)] = inst_44342__$1);

(statearr_44435[(15)] = inst_44340__$1);

(statearr_44435[(17)] = inst_44350);

return statearr_44435;
})();
var statearr_44436_45372 = state_44399__$1;
(statearr_44436_45372[(2)] = null);

(statearr_44436_45372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (18))){
var inst_44369 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44437_45373 = state_44399__$1;
(statearr_44437_45373[(2)] = inst_44369);

(statearr_44437_45373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44400 === (8))){
var inst_44343 = (state_44399[(12)]);
var inst_44342 = (state_44399[(14)]);
var inst_44345 = (inst_44343 < inst_44342);
var inst_44346 = inst_44345;
var state_44399__$1 = state_44399;
if(cljs.core.truth_(inst_44346)){
var statearr_44438_45374 = state_44399__$1;
(statearr_44438_45374[(1)] = (10));

} else {
var statearr_44439_45375 = state_44399__$1;
(statearr_44439_45375[(1)] = (11));

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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44440[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44440[(1)] = (1));

return statearr_44440;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44399){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44399);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44441){if((e44441 instanceof Object)){
var ex__43388__auto__ = e44441;
var statearr_44442_45376 = state_44399;
(statearr_44442_45376[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45377 = state_44399;
state_44399 = G__45377;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44443 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44443[(6)] = c__43452__auto___45347);

return statearr_44443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var G__44445 = arguments.length;
switch (G__44445) {
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
var G__44447 = arguments.length;
switch (G__44447) {
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
var G__44449 = arguments.length;
switch (G__44449) {
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
var c__43452__auto___45381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44488){
var state_val_44489 = (state_44488[(1)]);
if((state_val_44489 === (7))){
var state_44488__$1 = state_44488;
var statearr_44490_45382 = state_44488__$1;
(statearr_44490_45382[(2)] = null);

(statearr_44490_45382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (1))){
var state_44488__$1 = state_44488;
var statearr_44491_45383 = state_44488__$1;
(statearr_44491_45383[(2)] = null);

(statearr_44491_45383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (4))){
var inst_44452 = (state_44488[(7)]);
var inst_44454 = (inst_44452 < cnt);
var state_44488__$1 = state_44488;
if(cljs.core.truth_(inst_44454)){
var statearr_44492_45384 = state_44488__$1;
(statearr_44492_45384[(1)] = (6));

} else {
var statearr_44493_45385 = state_44488__$1;
(statearr_44493_45385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (15))){
var inst_44484 = (state_44488[(2)]);
var state_44488__$1 = state_44488;
var statearr_44494_45386 = state_44488__$1;
(statearr_44494_45386[(2)] = inst_44484);

(statearr_44494_45386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (13))){
var inst_44477 = cljs.core.async.close_BANG_(out);
var state_44488__$1 = state_44488;
var statearr_44495_45388 = state_44488__$1;
(statearr_44495_45388[(2)] = inst_44477);

(statearr_44495_45388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (6))){
var state_44488__$1 = state_44488;
var statearr_44496_45390 = state_44488__$1;
(statearr_44496_45390[(2)] = null);

(statearr_44496_45390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (3))){
var inst_44486 = (state_44488[(2)]);
var state_44488__$1 = state_44488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44488__$1,inst_44486);
} else {
if((state_val_44489 === (12))){
var inst_44474 = (state_44488[(8)]);
var inst_44474__$1 = (state_44488[(2)]);
var inst_44475 = cljs.core.some(cljs.core.nil_QMARK_,inst_44474__$1);
var state_44488__$1 = (function (){var statearr_44497 = state_44488;
(statearr_44497[(8)] = inst_44474__$1);

return statearr_44497;
})();
if(cljs.core.truth_(inst_44475)){
var statearr_44498_45391 = state_44488__$1;
(statearr_44498_45391[(1)] = (13));

} else {
var statearr_44499_45392 = state_44488__$1;
(statearr_44499_45392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (2))){
var inst_44451 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44452 = (0);
var state_44488__$1 = (function (){var statearr_44500 = state_44488;
(statearr_44500[(7)] = inst_44452);

(statearr_44500[(9)] = inst_44451);

return statearr_44500;
})();
var statearr_44501_45393 = state_44488__$1;
(statearr_44501_45393[(2)] = null);

(statearr_44501_45393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (11))){
var inst_44452 = (state_44488[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44488,(10),Object,null,(9));
var inst_44461 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44452) : chs__$1.call(null,inst_44452));
var inst_44462 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44452) : done.call(null,inst_44452));
var inst_44463 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44461,inst_44462);
var state_44488__$1 = state_44488;
var statearr_44502_45394 = state_44488__$1;
(statearr_44502_45394[(2)] = inst_44463);


cljs.core.async.impl.ioc_helpers.process_exception(state_44488__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (9))){
var inst_44452 = (state_44488[(7)]);
var inst_44465 = (state_44488[(2)]);
var inst_44466 = (inst_44452 + (1));
var inst_44452__$1 = inst_44466;
var state_44488__$1 = (function (){var statearr_44503 = state_44488;
(statearr_44503[(7)] = inst_44452__$1);

(statearr_44503[(10)] = inst_44465);

return statearr_44503;
})();
var statearr_44504_45396 = state_44488__$1;
(statearr_44504_45396[(2)] = null);

(statearr_44504_45396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (5))){
var inst_44472 = (state_44488[(2)]);
var state_44488__$1 = (function (){var statearr_44505 = state_44488;
(statearr_44505[(11)] = inst_44472);

return statearr_44505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44488__$1,(12),dchan);
} else {
if((state_val_44489 === (14))){
var inst_44474 = (state_44488[(8)]);
var inst_44479 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44474);
var state_44488__$1 = state_44488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44488__$1,(16),out,inst_44479);
} else {
if((state_val_44489 === (16))){
var inst_44481 = (state_44488[(2)]);
var state_44488__$1 = (function (){var statearr_44506 = state_44488;
(statearr_44506[(12)] = inst_44481);

return statearr_44506;
})();
var statearr_44507_45398 = state_44488__$1;
(statearr_44507_45398[(2)] = null);

(statearr_44507_45398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (10))){
var inst_44456 = (state_44488[(2)]);
var inst_44457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44488__$1 = (function (){var statearr_44508 = state_44488;
(statearr_44508[(13)] = inst_44456);

return statearr_44508;
})();
var statearr_44509_45399 = state_44488__$1;
(statearr_44509_45399[(2)] = inst_44457);


cljs.core.async.impl.ioc_helpers.process_exception(state_44488__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44489 === (8))){
var inst_44470 = (state_44488[(2)]);
var state_44488__$1 = state_44488;
var statearr_44510_45400 = state_44488__$1;
(statearr_44510_45400[(2)] = inst_44470);

(statearr_44510_45400[(1)] = (5));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44511[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44511[(1)] = (1));

return statearr_44511;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44488){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44488);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44512){if((e44512 instanceof Object)){
var ex__43388__auto__ = e44512;
var statearr_44513_45403 = state_44488;
(statearr_44513_45403[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45404 = state_44488;
state_44488 = G__45404;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44514 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44514[(6)] = c__43452__auto___45381);

return statearr_44514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var G__44517 = arguments.length;
switch (G__44517) {
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
var c__43452__auto___45406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44549){
var state_val_44550 = (state_44549[(1)]);
if((state_val_44550 === (7))){
var inst_44529 = (state_44549[(7)]);
var inst_44528 = (state_44549[(8)]);
var inst_44528__$1 = (state_44549[(2)]);
var inst_44529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44528__$1,(0),null);
var inst_44530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44528__$1,(1),null);
var inst_44531 = (inst_44529__$1 == null);
var state_44549__$1 = (function (){var statearr_44551 = state_44549;
(statearr_44551[(9)] = inst_44530);

(statearr_44551[(7)] = inst_44529__$1);

(statearr_44551[(8)] = inst_44528__$1);

return statearr_44551;
})();
if(cljs.core.truth_(inst_44531)){
var statearr_44552_45409 = state_44549__$1;
(statearr_44552_45409[(1)] = (8));

} else {
var statearr_44553_45410 = state_44549__$1;
(statearr_44553_45410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (1))){
var inst_44518 = cljs.core.vec(chs);
var inst_44519 = inst_44518;
var state_44549__$1 = (function (){var statearr_44554 = state_44549;
(statearr_44554[(10)] = inst_44519);

return statearr_44554;
})();
var statearr_44555_45411 = state_44549__$1;
(statearr_44555_45411[(2)] = null);

(statearr_44555_45411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (4))){
var inst_44519 = (state_44549[(10)]);
var state_44549__$1 = state_44549;
return cljs.core.async.ioc_alts_BANG_(state_44549__$1,(7),inst_44519);
} else {
if((state_val_44550 === (6))){
var inst_44545 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44556_45412 = state_44549__$1;
(statearr_44556_45412[(2)] = inst_44545);

(statearr_44556_45412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (3))){
var inst_44547 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44549__$1,inst_44547);
} else {
if((state_val_44550 === (2))){
var inst_44519 = (state_44549[(10)]);
var inst_44521 = cljs.core.count(inst_44519);
var inst_44522 = (inst_44521 > (0));
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44522)){
var statearr_44558_45415 = state_44549__$1;
(statearr_44558_45415[(1)] = (4));

} else {
var statearr_44559_45416 = state_44549__$1;
(statearr_44559_45416[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (11))){
var inst_44519 = (state_44549[(10)]);
var inst_44538 = (state_44549[(2)]);
var tmp44557 = inst_44519;
var inst_44519__$1 = tmp44557;
var state_44549__$1 = (function (){var statearr_44560 = state_44549;
(statearr_44560[(10)] = inst_44519__$1);

(statearr_44560[(11)] = inst_44538);

return statearr_44560;
})();
var statearr_44561_45417 = state_44549__$1;
(statearr_44561_45417[(2)] = null);

(statearr_44561_45417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (9))){
var inst_44529 = (state_44549[(7)]);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44549__$1,(11),out,inst_44529);
} else {
if((state_val_44550 === (5))){
var inst_44543 = cljs.core.async.close_BANG_(out);
var state_44549__$1 = state_44549;
var statearr_44562_45418 = state_44549__$1;
(statearr_44562_45418[(2)] = inst_44543);

(statearr_44562_45418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (10))){
var inst_44541 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44563_45419 = state_44549__$1;
(statearr_44563_45419[(2)] = inst_44541);

(statearr_44563_45419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (8))){
var inst_44530 = (state_44549[(9)]);
var inst_44519 = (state_44549[(10)]);
var inst_44529 = (state_44549[(7)]);
var inst_44528 = (state_44549[(8)]);
var inst_44533 = (function (){var cs = inst_44519;
var vec__44524 = inst_44528;
var v = inst_44529;
var c = inst_44530;
return (function (p1__44515_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44515_SHARP_);
});
})();
var inst_44534 = cljs.core.filterv(inst_44533,inst_44519);
var inst_44519__$1 = inst_44534;
var state_44549__$1 = (function (){var statearr_44564 = state_44549;
(statearr_44564[(10)] = inst_44519__$1);

return statearr_44564;
})();
var statearr_44565_45420 = state_44549__$1;
(statearr_44565_45420[(2)] = null);

(statearr_44565_45420[(1)] = (2));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44566[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44566[(1)] = (1));

return statearr_44566;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44549){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44549);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44567){if((e44567 instanceof Object)){
var ex__43388__auto__ = e44567;
var statearr_44568_45421 = state_44549;
(statearr_44568_45421[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45422 = state_44549;
state_44549 = G__45422;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44569 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44569[(6)] = c__43452__auto___45406);

return statearr_44569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
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
var G__44571 = arguments.length;
switch (G__44571) {
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
var c__43452__auto___45424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44595){
var state_val_44596 = (state_44595[(1)]);
if((state_val_44596 === (7))){
var inst_44577 = (state_44595[(7)]);
var inst_44577__$1 = (state_44595[(2)]);
var inst_44578 = (inst_44577__$1 == null);
var inst_44579 = cljs.core.not(inst_44578);
var state_44595__$1 = (function (){var statearr_44597 = state_44595;
(statearr_44597[(7)] = inst_44577__$1);

return statearr_44597;
})();
if(inst_44579){
var statearr_44598_45425 = state_44595__$1;
(statearr_44598_45425[(1)] = (8));

} else {
var statearr_44599_45426 = state_44595__$1;
(statearr_44599_45426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (1))){
var inst_44572 = (0);
var state_44595__$1 = (function (){var statearr_44600 = state_44595;
(statearr_44600[(8)] = inst_44572);

return statearr_44600;
})();
var statearr_44601_45427 = state_44595__$1;
(statearr_44601_45427[(2)] = null);

(statearr_44601_45427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (4))){
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44595__$1,(7),ch);
} else {
if((state_val_44596 === (6))){
var inst_44590 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
var statearr_44602_45428 = state_44595__$1;
(statearr_44602_45428[(2)] = inst_44590);

(statearr_44602_45428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (3))){
var inst_44592 = (state_44595[(2)]);
var inst_44593 = cljs.core.async.close_BANG_(out);
var state_44595__$1 = (function (){var statearr_44603 = state_44595;
(statearr_44603[(9)] = inst_44592);

return statearr_44603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44595__$1,inst_44593);
} else {
if((state_val_44596 === (2))){
var inst_44572 = (state_44595[(8)]);
var inst_44574 = (inst_44572 < n);
var state_44595__$1 = state_44595;
if(cljs.core.truth_(inst_44574)){
var statearr_44604_45429 = state_44595__$1;
(statearr_44604_45429[(1)] = (4));

} else {
var statearr_44605_45430 = state_44595__$1;
(statearr_44605_45430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (11))){
var inst_44572 = (state_44595[(8)]);
var inst_44582 = (state_44595[(2)]);
var inst_44583 = (inst_44572 + (1));
var inst_44572__$1 = inst_44583;
var state_44595__$1 = (function (){var statearr_44606 = state_44595;
(statearr_44606[(10)] = inst_44582);

(statearr_44606[(8)] = inst_44572__$1);

return statearr_44606;
})();
var statearr_44607_45431 = state_44595__$1;
(statearr_44607_45431[(2)] = null);

(statearr_44607_45431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (9))){
var state_44595__$1 = state_44595;
var statearr_44608_45432 = state_44595__$1;
(statearr_44608_45432[(2)] = null);

(statearr_44608_45432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (5))){
var state_44595__$1 = state_44595;
var statearr_44609_45433 = state_44595__$1;
(statearr_44609_45433[(2)] = null);

(statearr_44609_45433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (10))){
var inst_44587 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
var statearr_44610_45434 = state_44595__$1;
(statearr_44610_45434[(2)] = inst_44587);

(statearr_44610_45434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (8))){
var inst_44577 = (state_44595[(7)]);
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44595__$1,(11),out,inst_44577);
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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44611[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44611[(1)] = (1));

return statearr_44611;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44595){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44595);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44612){if((e44612 instanceof Object)){
var ex__43388__auto__ = e44612;
var statearr_44613_45436 = state_44595;
(statearr_44613_45436[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45437 = state_44595;
state_44595 = G__45437;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44614 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44614[(6)] = c__43452__auto___45424);

return statearr_44614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44616 = (function (f,ch,meta44617){
this.f = f;
this.ch = ch;
this.meta44617 = meta44617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44618,meta44617__$1){
var self__ = this;
var _44618__$1 = this;
return (new cljs.core.async.t_cljs$core$async44616(self__.f,self__.ch,meta44617__$1));
}));

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44618){
var self__ = this;
var _44618__$1 = this;
return self__.meta44617;
}));

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44619 = (function (f,ch,meta44617,_,fn1,meta44620){
this.f = f;
this.ch = ch;
this.meta44617 = meta44617;
this._ = _;
this.fn1 = fn1;
this.meta44620 = meta44620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44621,meta44620__$1){
var self__ = this;
var _44621__$1 = this;
return (new cljs.core.async.t_cljs$core$async44619(self__.f,self__.ch,self__.meta44617,self__._,self__.fn1,meta44620__$1));
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44621){
var self__ = this;
var _44621__$1 = this;
return self__.meta44620;
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44615_SHARP_){
var G__44622 = (((p1__44615_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44615_SHARP_) : self__.f.call(null,p1__44615_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44622) : f1.call(null,G__44622));
});
}));

(cljs.core.async.t_cljs$core$async44619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44617","meta44617",793130823,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44616","cljs.core.async/t_cljs$core$async44616",654034198,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44620","meta44620",-117290288,null)], null);
}));

(cljs.core.async.t_cljs$core$async44619.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44619");

(cljs.core.async.t_cljs$core$async44619.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44619");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44619.
 */
cljs.core.async.__GT_t_cljs$core$async44619 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44619(f__$1,ch__$1,meta44617__$1,___$2,fn1__$1,meta44620){
return (new cljs.core.async.t_cljs$core$async44619(f__$1,ch__$1,meta44617__$1,___$2,fn1__$1,meta44620));
});

}

return (new cljs.core.async.t_cljs$core$async44619(self__.f,self__.ch,self__.meta44617,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44623 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44623) : self__.f.call(null,G__44623));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44617","meta44617",793130823,null)], null);
}));

(cljs.core.async.t_cljs$core$async44616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44616");

(cljs.core.async.t_cljs$core$async44616.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44616.
 */
cljs.core.async.__GT_t_cljs$core$async44616 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44616(f__$1,ch__$1,meta44617){
return (new cljs.core.async.t_cljs$core$async44616(f__$1,ch__$1,meta44617));
});

}

return (new cljs.core.async.t_cljs$core$async44616(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44624 = (function (f,ch,meta44625){
this.f = f;
this.ch = ch;
this.meta44625 = meta44625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44626,meta44625__$1){
var self__ = this;
var _44626__$1 = this;
return (new cljs.core.async.t_cljs$core$async44624(self__.f,self__.ch,meta44625__$1));
}));

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44626){
var self__ = this;
var _44626__$1 = this;
return self__.meta44625;
}));

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44625","meta44625",1346316077,null)], null);
}));

(cljs.core.async.t_cljs$core$async44624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44624");

(cljs.core.async.t_cljs$core$async44624.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44624.
 */
cljs.core.async.__GT_t_cljs$core$async44624 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44624(f__$1,ch__$1,meta44625){
return (new cljs.core.async.t_cljs$core$async44624(f__$1,ch__$1,meta44625));
});

}

return (new cljs.core.async.t_cljs$core$async44624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44627 = (function (p,ch,meta44628){
this.p = p;
this.ch = ch;
this.meta44628 = meta44628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44629,meta44628__$1){
var self__ = this;
var _44629__$1 = this;
return (new cljs.core.async.t_cljs$core$async44627(self__.p,self__.ch,meta44628__$1));
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44629){
var self__ = this;
var _44629__$1 = this;
return self__.meta44628;
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44628","meta44628",-490455192,null)], null);
}));

(cljs.core.async.t_cljs$core$async44627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44627");

(cljs.core.async.t_cljs$core$async44627.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44627.
 */
cljs.core.async.__GT_t_cljs$core$async44627 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44627(p__$1,ch__$1,meta44628){
return (new cljs.core.async.t_cljs$core$async44627(p__$1,ch__$1,meta44628));
});

}

return (new cljs.core.async.t_cljs$core$async44627(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44631 = arguments.length;
switch (G__44631) {
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
var c__43452__auto___45447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44652){
var state_val_44653 = (state_44652[(1)]);
if((state_val_44653 === (7))){
var inst_44648 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44654_45448 = state_44652__$1;
(statearr_44654_45448[(2)] = inst_44648);

(statearr_44654_45448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (1))){
var state_44652__$1 = state_44652;
var statearr_44655_45449 = state_44652__$1;
(statearr_44655_45449[(2)] = null);

(statearr_44655_45449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (4))){
var inst_44634 = (state_44652[(7)]);
var inst_44634__$1 = (state_44652[(2)]);
var inst_44635 = (inst_44634__$1 == null);
var state_44652__$1 = (function (){var statearr_44656 = state_44652;
(statearr_44656[(7)] = inst_44634__$1);

return statearr_44656;
})();
if(cljs.core.truth_(inst_44635)){
var statearr_44657_45450 = state_44652__$1;
(statearr_44657_45450[(1)] = (5));

} else {
var statearr_44658_45451 = state_44652__$1;
(statearr_44658_45451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (6))){
var inst_44634 = (state_44652[(7)]);
var inst_44639 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44634) : p.call(null,inst_44634));
var state_44652__$1 = state_44652;
if(cljs.core.truth_(inst_44639)){
var statearr_44659_45452 = state_44652__$1;
(statearr_44659_45452[(1)] = (8));

} else {
var statearr_44660_45453 = state_44652__$1;
(statearr_44660_45453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (3))){
var inst_44650 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44652__$1,inst_44650);
} else {
if((state_val_44653 === (2))){
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44652__$1,(4),ch);
} else {
if((state_val_44653 === (11))){
var inst_44642 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44661_45454 = state_44652__$1;
(statearr_44661_45454[(2)] = inst_44642);

(statearr_44661_45454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (9))){
var state_44652__$1 = state_44652;
var statearr_44662_45455 = state_44652__$1;
(statearr_44662_45455[(2)] = null);

(statearr_44662_45455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (5))){
var inst_44637 = cljs.core.async.close_BANG_(out);
var state_44652__$1 = state_44652;
var statearr_44663_45456 = state_44652__$1;
(statearr_44663_45456[(2)] = inst_44637);

(statearr_44663_45456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (10))){
var inst_44645 = (state_44652[(2)]);
var state_44652__$1 = (function (){var statearr_44664 = state_44652;
(statearr_44664[(8)] = inst_44645);

return statearr_44664;
})();
var statearr_44665_45457 = state_44652__$1;
(statearr_44665_45457[(2)] = null);

(statearr_44665_45457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (8))){
var inst_44634 = (state_44652[(7)]);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44652__$1,(11),out,inst_44634);
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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44666 = [null,null,null,null,null,null,null,null,null];
(statearr_44666[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44666[(1)] = (1));

return statearr_44666;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44652){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44652);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44667){if((e44667 instanceof Object)){
var ex__43388__auto__ = e44667;
var statearr_44668_45458 = state_44652;
(statearr_44668_45458[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45459 = state_44652;
state_44652 = G__45459;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44669 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44669[(6)] = c__43452__auto___45447);

return statearr_44669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44671 = arguments.length;
switch (G__44671) {
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
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44733){
var state_val_44734 = (state_44733[(1)]);
if((state_val_44734 === (7))){
var inst_44729 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
var statearr_44735_45461 = state_44733__$1;
(statearr_44735_45461[(2)] = inst_44729);

(statearr_44735_45461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (20))){
var inst_44699 = (state_44733[(7)]);
var inst_44710 = (state_44733[(2)]);
var inst_44711 = cljs.core.next(inst_44699);
var inst_44685 = inst_44711;
var inst_44686 = null;
var inst_44687 = (0);
var inst_44688 = (0);
var state_44733__$1 = (function (){var statearr_44736 = state_44733;
(statearr_44736[(8)] = inst_44686);

(statearr_44736[(9)] = inst_44688);

(statearr_44736[(10)] = inst_44685);

(statearr_44736[(11)] = inst_44687);

(statearr_44736[(12)] = inst_44710);

return statearr_44736;
})();
var statearr_44737_45462 = state_44733__$1;
(statearr_44737_45462[(2)] = null);

(statearr_44737_45462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (1))){
var state_44733__$1 = state_44733;
var statearr_44738_45463 = state_44733__$1;
(statearr_44738_45463[(2)] = null);

(statearr_44738_45463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (4))){
var inst_44674 = (state_44733[(13)]);
var inst_44674__$1 = (state_44733[(2)]);
var inst_44675 = (inst_44674__$1 == null);
var state_44733__$1 = (function (){var statearr_44739 = state_44733;
(statearr_44739[(13)] = inst_44674__$1);

return statearr_44739;
})();
if(cljs.core.truth_(inst_44675)){
var statearr_44740_45464 = state_44733__$1;
(statearr_44740_45464[(1)] = (5));

} else {
var statearr_44741_45465 = state_44733__$1;
(statearr_44741_45465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (15))){
var state_44733__$1 = state_44733;
var statearr_44745_45466 = state_44733__$1;
(statearr_44745_45466[(2)] = null);

(statearr_44745_45466[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (21))){
var state_44733__$1 = state_44733;
var statearr_44746_45467 = state_44733__$1;
(statearr_44746_45467[(2)] = null);

(statearr_44746_45467[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (13))){
var inst_44686 = (state_44733[(8)]);
var inst_44688 = (state_44733[(9)]);
var inst_44685 = (state_44733[(10)]);
var inst_44687 = (state_44733[(11)]);
var inst_44695 = (state_44733[(2)]);
var inst_44696 = (inst_44688 + (1));
var tmp44742 = inst_44686;
var tmp44743 = inst_44685;
var tmp44744 = inst_44687;
var inst_44685__$1 = tmp44743;
var inst_44686__$1 = tmp44742;
var inst_44687__$1 = tmp44744;
var inst_44688__$1 = inst_44696;
var state_44733__$1 = (function (){var statearr_44747 = state_44733;
(statearr_44747[(14)] = inst_44695);

(statearr_44747[(8)] = inst_44686__$1);

(statearr_44747[(9)] = inst_44688__$1);

(statearr_44747[(10)] = inst_44685__$1);

(statearr_44747[(11)] = inst_44687__$1);

return statearr_44747;
})();
var statearr_44748_45468 = state_44733__$1;
(statearr_44748_45468[(2)] = null);

(statearr_44748_45468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (22))){
var state_44733__$1 = state_44733;
var statearr_44749_45469 = state_44733__$1;
(statearr_44749_45469[(2)] = null);

(statearr_44749_45469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (6))){
var inst_44674 = (state_44733[(13)]);
var inst_44683 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44674) : f.call(null,inst_44674));
var inst_44684 = cljs.core.seq(inst_44683);
var inst_44685 = inst_44684;
var inst_44686 = null;
var inst_44687 = (0);
var inst_44688 = (0);
var state_44733__$1 = (function (){var statearr_44750 = state_44733;
(statearr_44750[(8)] = inst_44686);

(statearr_44750[(9)] = inst_44688);

(statearr_44750[(10)] = inst_44685);

(statearr_44750[(11)] = inst_44687);

return statearr_44750;
})();
var statearr_44751_45470 = state_44733__$1;
(statearr_44751_45470[(2)] = null);

(statearr_44751_45470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (17))){
var inst_44699 = (state_44733[(7)]);
var inst_44703 = cljs.core.chunk_first(inst_44699);
var inst_44704 = cljs.core.chunk_rest(inst_44699);
var inst_44705 = cljs.core.count(inst_44703);
var inst_44685 = inst_44704;
var inst_44686 = inst_44703;
var inst_44687 = inst_44705;
var inst_44688 = (0);
var state_44733__$1 = (function (){var statearr_44752 = state_44733;
(statearr_44752[(8)] = inst_44686);

(statearr_44752[(9)] = inst_44688);

(statearr_44752[(10)] = inst_44685);

(statearr_44752[(11)] = inst_44687);

return statearr_44752;
})();
var statearr_44753_45471 = state_44733__$1;
(statearr_44753_45471[(2)] = null);

(statearr_44753_45471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (3))){
var inst_44731 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44733__$1,inst_44731);
} else {
if((state_val_44734 === (12))){
var inst_44719 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
var statearr_44754_45472 = state_44733__$1;
(statearr_44754_45472[(2)] = inst_44719);

(statearr_44754_45472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (2))){
var state_44733__$1 = state_44733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44733__$1,(4),in$);
} else {
if((state_val_44734 === (23))){
var inst_44727 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
var statearr_44755_45473 = state_44733__$1;
(statearr_44755_45473[(2)] = inst_44727);

(statearr_44755_45473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (19))){
var inst_44714 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
var statearr_44756_45474 = state_44733__$1;
(statearr_44756_45474[(2)] = inst_44714);

(statearr_44756_45474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (11))){
var inst_44699 = (state_44733[(7)]);
var inst_44685 = (state_44733[(10)]);
var inst_44699__$1 = cljs.core.seq(inst_44685);
var state_44733__$1 = (function (){var statearr_44757 = state_44733;
(statearr_44757[(7)] = inst_44699__$1);

return statearr_44757;
})();
if(inst_44699__$1){
var statearr_44758_45475 = state_44733__$1;
(statearr_44758_45475[(1)] = (14));

} else {
var statearr_44759_45476 = state_44733__$1;
(statearr_44759_45476[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (9))){
var inst_44721 = (state_44733[(2)]);
var inst_44722 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44733__$1 = (function (){var statearr_44760 = state_44733;
(statearr_44760[(15)] = inst_44721);

return statearr_44760;
})();
if(cljs.core.truth_(inst_44722)){
var statearr_44761_45477 = state_44733__$1;
(statearr_44761_45477[(1)] = (21));

} else {
var statearr_44762_45478 = state_44733__$1;
(statearr_44762_45478[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (5))){
var inst_44677 = cljs.core.async.close_BANG_(out);
var state_44733__$1 = state_44733;
var statearr_44763_45479 = state_44733__$1;
(statearr_44763_45479[(2)] = inst_44677);

(statearr_44763_45479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (14))){
var inst_44699 = (state_44733[(7)]);
var inst_44701 = cljs.core.chunked_seq_QMARK_(inst_44699);
var state_44733__$1 = state_44733;
if(inst_44701){
var statearr_44764_45480 = state_44733__$1;
(statearr_44764_45480[(1)] = (17));

} else {
var statearr_44765_45481 = state_44733__$1;
(statearr_44765_45481[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (16))){
var inst_44717 = (state_44733[(2)]);
var state_44733__$1 = state_44733;
var statearr_44766_45482 = state_44733__$1;
(statearr_44766_45482[(2)] = inst_44717);

(statearr_44766_45482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44734 === (10))){
var inst_44686 = (state_44733[(8)]);
var inst_44688 = (state_44733[(9)]);
var inst_44693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44686,inst_44688);
var state_44733__$1 = state_44733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44733__$1,(13),out,inst_44693);
} else {
if((state_val_44734 === (18))){
var inst_44699 = (state_44733[(7)]);
var inst_44708 = cljs.core.first(inst_44699);
var state_44733__$1 = state_44733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44733__$1,(20),out,inst_44708);
} else {
if((state_val_44734 === (8))){
var inst_44688 = (state_44733[(9)]);
var inst_44687 = (state_44733[(11)]);
var inst_44690 = (inst_44688 < inst_44687);
var inst_44691 = inst_44690;
var state_44733__$1 = state_44733;
if(cljs.core.truth_(inst_44691)){
var statearr_44767_45483 = state_44733__$1;
(statearr_44767_45483[(1)] = (10));

} else {
var statearr_44768_45484 = state_44733__$1;
(statearr_44768_45484[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____0 = (function (){
var statearr_44769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44769[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__);

(statearr_44769[(1)] = (1));

return statearr_44769;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____1 = (function (state_44733){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44733);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44770){if((e44770 instanceof Object)){
var ex__43388__auto__ = e44770;
var statearr_44771_45485 = state_44733;
(statearr_44771_45485[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45486 = state_44733;
state_44733 = G__45486;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__ = function(state_44733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____1.call(this,state_44733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44772 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44772[(6)] = c__43452__auto__);

return statearr_44772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44774 = arguments.length;
switch (G__44774) {
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
var G__44776 = arguments.length;
switch (G__44776) {
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
var G__44778 = arguments.length;
switch (G__44778) {
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
var c__43452__auto___45490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44802){
var state_val_44803 = (state_44802[(1)]);
if((state_val_44803 === (7))){
var inst_44797 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
var statearr_44804_45491 = state_44802__$1;
(statearr_44804_45491[(2)] = inst_44797);

(statearr_44804_45491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (1))){
var inst_44779 = null;
var state_44802__$1 = (function (){var statearr_44805 = state_44802;
(statearr_44805[(7)] = inst_44779);

return statearr_44805;
})();
var statearr_44806_45492 = state_44802__$1;
(statearr_44806_45492[(2)] = null);

(statearr_44806_45492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (4))){
var inst_44782 = (state_44802[(8)]);
var inst_44782__$1 = (state_44802[(2)]);
var inst_44783 = (inst_44782__$1 == null);
var inst_44784 = cljs.core.not(inst_44783);
var state_44802__$1 = (function (){var statearr_44807 = state_44802;
(statearr_44807[(8)] = inst_44782__$1);

return statearr_44807;
})();
if(inst_44784){
var statearr_44808_45493 = state_44802__$1;
(statearr_44808_45493[(1)] = (5));

} else {
var statearr_44809_45494 = state_44802__$1;
(statearr_44809_45494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (6))){
var state_44802__$1 = state_44802;
var statearr_44810_45495 = state_44802__$1;
(statearr_44810_45495[(2)] = null);

(statearr_44810_45495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (3))){
var inst_44799 = (state_44802[(2)]);
var inst_44800 = cljs.core.async.close_BANG_(out);
var state_44802__$1 = (function (){var statearr_44811 = state_44802;
(statearr_44811[(9)] = inst_44799);

return statearr_44811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44802__$1,inst_44800);
} else {
if((state_val_44803 === (2))){
var state_44802__$1 = state_44802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44802__$1,(4),ch);
} else {
if((state_val_44803 === (11))){
var inst_44782 = (state_44802[(8)]);
var inst_44791 = (state_44802[(2)]);
var inst_44779 = inst_44782;
var state_44802__$1 = (function (){var statearr_44812 = state_44802;
(statearr_44812[(10)] = inst_44791);

(statearr_44812[(7)] = inst_44779);

return statearr_44812;
})();
var statearr_44813_45496 = state_44802__$1;
(statearr_44813_45496[(2)] = null);

(statearr_44813_45496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (9))){
var inst_44782 = (state_44802[(8)]);
var state_44802__$1 = state_44802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44802__$1,(11),out,inst_44782);
} else {
if((state_val_44803 === (5))){
var inst_44779 = (state_44802[(7)]);
var inst_44782 = (state_44802[(8)]);
var inst_44786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44782,inst_44779);
var state_44802__$1 = state_44802;
if(inst_44786){
var statearr_44815_45497 = state_44802__$1;
(statearr_44815_45497[(1)] = (8));

} else {
var statearr_44816_45501 = state_44802__$1;
(statearr_44816_45501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (10))){
var inst_44794 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
var statearr_44817_45502 = state_44802__$1;
(statearr_44817_45502[(2)] = inst_44794);

(statearr_44817_45502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (8))){
var inst_44779 = (state_44802[(7)]);
var tmp44814 = inst_44779;
var inst_44779__$1 = tmp44814;
var state_44802__$1 = (function (){var statearr_44818 = state_44802;
(statearr_44818[(7)] = inst_44779__$1);

return statearr_44818;
})();
var statearr_44819_45503 = state_44802__$1;
(statearr_44819_45503[(2)] = null);

(statearr_44819_45503[(1)] = (2));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44820[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44820[(1)] = (1));

return statearr_44820;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44802){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44802);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44821){if((e44821 instanceof Object)){
var ex__43388__auto__ = e44821;
var statearr_44822_45504 = state_44802;
(statearr_44822_45504[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45505 = state_44802;
state_44802 = G__45505;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44823 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44823[(6)] = c__43452__auto___45490);

return statearr_44823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44825 = arguments.length;
switch (G__44825) {
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
var c__43452__auto___45509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44863){
var state_val_44864 = (state_44863[(1)]);
if((state_val_44864 === (7))){
var inst_44859 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44865_45510 = state_44863__$1;
(statearr_44865_45510[(2)] = inst_44859);

(statearr_44865_45510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (1))){
var inst_44826 = (new Array(n));
var inst_44827 = inst_44826;
var inst_44828 = (0);
var state_44863__$1 = (function (){var statearr_44866 = state_44863;
(statearr_44866[(7)] = inst_44827);

(statearr_44866[(8)] = inst_44828);

return statearr_44866;
})();
var statearr_44867_45511 = state_44863__$1;
(statearr_44867_45511[(2)] = null);

(statearr_44867_45511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (4))){
var inst_44831 = (state_44863[(9)]);
var inst_44831__$1 = (state_44863[(2)]);
var inst_44832 = (inst_44831__$1 == null);
var inst_44833 = cljs.core.not(inst_44832);
var state_44863__$1 = (function (){var statearr_44868 = state_44863;
(statearr_44868[(9)] = inst_44831__$1);

return statearr_44868;
})();
if(inst_44833){
var statearr_44869_45512 = state_44863__$1;
(statearr_44869_45512[(1)] = (5));

} else {
var statearr_44870_45513 = state_44863__$1;
(statearr_44870_45513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (15))){
var inst_44853 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44871_45514 = state_44863__$1;
(statearr_44871_45514[(2)] = inst_44853);

(statearr_44871_45514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (13))){
var state_44863__$1 = state_44863;
var statearr_44872_45515 = state_44863__$1;
(statearr_44872_45515[(2)] = null);

(statearr_44872_45515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (6))){
var inst_44828 = (state_44863[(8)]);
var inst_44849 = (inst_44828 > (0));
var state_44863__$1 = state_44863;
if(cljs.core.truth_(inst_44849)){
var statearr_44873_45516 = state_44863__$1;
(statearr_44873_45516[(1)] = (12));

} else {
var statearr_44874_45517 = state_44863__$1;
(statearr_44874_45517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (3))){
var inst_44861 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44863__$1,inst_44861);
} else {
if((state_val_44864 === (12))){
var inst_44827 = (state_44863[(7)]);
var inst_44851 = cljs.core.vec(inst_44827);
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44863__$1,(15),out,inst_44851);
} else {
if((state_val_44864 === (2))){
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44863__$1,(4),ch);
} else {
if((state_val_44864 === (11))){
var inst_44843 = (state_44863[(2)]);
var inst_44844 = (new Array(n));
var inst_44827 = inst_44844;
var inst_44828 = (0);
var state_44863__$1 = (function (){var statearr_44875 = state_44863;
(statearr_44875[(7)] = inst_44827);

(statearr_44875[(10)] = inst_44843);

(statearr_44875[(8)] = inst_44828);

return statearr_44875;
})();
var statearr_44876_45519 = state_44863__$1;
(statearr_44876_45519[(2)] = null);

(statearr_44876_45519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (9))){
var inst_44827 = (state_44863[(7)]);
var inst_44841 = cljs.core.vec(inst_44827);
var state_44863__$1 = state_44863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44863__$1,(11),out,inst_44841);
} else {
if((state_val_44864 === (5))){
var inst_44831 = (state_44863[(9)]);
var inst_44827 = (state_44863[(7)]);
var inst_44836 = (state_44863[(11)]);
var inst_44828 = (state_44863[(8)]);
var inst_44835 = (inst_44827[inst_44828] = inst_44831);
var inst_44836__$1 = (inst_44828 + (1));
var inst_44837 = (inst_44836__$1 < n);
var state_44863__$1 = (function (){var statearr_44877 = state_44863;
(statearr_44877[(12)] = inst_44835);

(statearr_44877[(11)] = inst_44836__$1);

return statearr_44877;
})();
if(cljs.core.truth_(inst_44837)){
var statearr_44878_45520 = state_44863__$1;
(statearr_44878_45520[(1)] = (8));

} else {
var statearr_44879_45521 = state_44863__$1;
(statearr_44879_45521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (14))){
var inst_44856 = (state_44863[(2)]);
var inst_44857 = cljs.core.async.close_BANG_(out);
var state_44863__$1 = (function (){var statearr_44881 = state_44863;
(statearr_44881[(13)] = inst_44856);

return statearr_44881;
})();
var statearr_44882_45522 = state_44863__$1;
(statearr_44882_45522[(2)] = inst_44857);

(statearr_44882_45522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (10))){
var inst_44847 = (state_44863[(2)]);
var state_44863__$1 = state_44863;
var statearr_44883_45523 = state_44863__$1;
(statearr_44883_45523[(2)] = inst_44847);

(statearr_44883_45523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44864 === (8))){
var inst_44827 = (state_44863[(7)]);
var inst_44836 = (state_44863[(11)]);
var tmp44880 = inst_44827;
var inst_44827__$1 = tmp44880;
var inst_44828 = inst_44836;
var state_44863__$1 = (function (){var statearr_44884 = state_44863;
(statearr_44884[(7)] = inst_44827__$1);

(statearr_44884[(8)] = inst_44828);

return statearr_44884;
})();
var statearr_44885_45524 = state_44863__$1;
(statearr_44885_45524[(2)] = null);

(statearr_44885_45524[(1)] = (2));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44886[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44886[(1)] = (1));

return statearr_44886;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44863){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44863);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44887){if((e44887 instanceof Object)){
var ex__43388__auto__ = e44887;
var statearr_44888_45525 = state_44863;
(statearr_44888_45525[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45526 = state_44863;
state_44863 = G__45526;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44889 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44889[(6)] = c__43452__auto___45509);

return statearr_44889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44891 = arguments.length;
switch (G__44891) {
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
var c__43452__auto___45528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_44933){
var state_val_44934 = (state_44933[(1)]);
if((state_val_44934 === (7))){
var inst_44929 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44935_45529 = state_44933__$1;
(statearr_44935_45529[(2)] = inst_44929);

(statearr_44935_45529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (1))){
var inst_44892 = [];
var inst_44893 = inst_44892;
var inst_44894 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44933__$1 = (function (){var statearr_44936 = state_44933;
(statearr_44936[(7)] = inst_44893);

(statearr_44936[(8)] = inst_44894);

return statearr_44936;
})();
var statearr_44937_45530 = state_44933__$1;
(statearr_44937_45530[(2)] = null);

(statearr_44937_45530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (4))){
var inst_44897 = (state_44933[(9)]);
var inst_44897__$1 = (state_44933[(2)]);
var inst_44898 = (inst_44897__$1 == null);
var inst_44899 = cljs.core.not(inst_44898);
var state_44933__$1 = (function (){var statearr_44938 = state_44933;
(statearr_44938[(9)] = inst_44897__$1);

return statearr_44938;
})();
if(inst_44899){
var statearr_44939_45531 = state_44933__$1;
(statearr_44939_45531[(1)] = (5));

} else {
var statearr_44940_45532 = state_44933__$1;
(statearr_44940_45532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (15))){
var inst_44923 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44941_45533 = state_44933__$1;
(statearr_44941_45533[(2)] = inst_44923);

(statearr_44941_45533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (13))){
var state_44933__$1 = state_44933;
var statearr_44942_45534 = state_44933__$1;
(statearr_44942_45534[(2)] = null);

(statearr_44942_45534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (6))){
var inst_44893 = (state_44933[(7)]);
var inst_44918 = inst_44893.length;
var inst_44919 = (inst_44918 > (0));
var state_44933__$1 = state_44933;
if(cljs.core.truth_(inst_44919)){
var statearr_44943_45535 = state_44933__$1;
(statearr_44943_45535[(1)] = (12));

} else {
var statearr_44944_45536 = state_44933__$1;
(statearr_44944_45536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (3))){
var inst_44931 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44933__$1,inst_44931);
} else {
if((state_val_44934 === (12))){
var inst_44893 = (state_44933[(7)]);
var inst_44921 = cljs.core.vec(inst_44893);
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44933__$1,(15),out,inst_44921);
} else {
if((state_val_44934 === (2))){
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44933__$1,(4),ch);
} else {
if((state_val_44934 === (11))){
var inst_44897 = (state_44933[(9)]);
var inst_44901 = (state_44933[(10)]);
var inst_44911 = (state_44933[(2)]);
var inst_44912 = [];
var inst_44913 = inst_44912.push(inst_44897);
var inst_44893 = inst_44912;
var inst_44894 = inst_44901;
var state_44933__$1 = (function (){var statearr_44945 = state_44933;
(statearr_44945[(11)] = inst_44913);

(statearr_44945[(12)] = inst_44911);

(statearr_44945[(7)] = inst_44893);

(statearr_44945[(8)] = inst_44894);

return statearr_44945;
})();
var statearr_44946_45537 = state_44933__$1;
(statearr_44946_45537[(2)] = null);

(statearr_44946_45537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (9))){
var inst_44893 = (state_44933[(7)]);
var inst_44909 = cljs.core.vec(inst_44893);
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44933__$1,(11),out,inst_44909);
} else {
if((state_val_44934 === (5))){
var inst_44897 = (state_44933[(9)]);
var inst_44901 = (state_44933[(10)]);
var inst_44894 = (state_44933[(8)]);
var inst_44901__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44897) : f.call(null,inst_44897));
var inst_44902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44901__$1,inst_44894);
var inst_44903 = cljs.core.keyword_identical_QMARK_(inst_44894,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44904 = ((inst_44902) || (inst_44903));
var state_44933__$1 = (function (){var statearr_44947 = state_44933;
(statearr_44947[(10)] = inst_44901__$1);

return statearr_44947;
})();
if(cljs.core.truth_(inst_44904)){
var statearr_44948_45538 = state_44933__$1;
(statearr_44948_45538[(1)] = (8));

} else {
var statearr_44949_45539 = state_44933__$1;
(statearr_44949_45539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (14))){
var inst_44926 = (state_44933[(2)]);
var inst_44927 = cljs.core.async.close_BANG_(out);
var state_44933__$1 = (function (){var statearr_44951 = state_44933;
(statearr_44951[(13)] = inst_44926);

return statearr_44951;
})();
var statearr_44952_45540 = state_44933__$1;
(statearr_44952_45540[(2)] = inst_44927);

(statearr_44952_45540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (10))){
var inst_44916 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44953_45541 = state_44933__$1;
(statearr_44953_45541[(2)] = inst_44916);

(statearr_44953_45541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (8))){
var inst_44897 = (state_44933[(9)]);
var inst_44901 = (state_44933[(10)]);
var inst_44893 = (state_44933[(7)]);
var inst_44906 = inst_44893.push(inst_44897);
var tmp44950 = inst_44893;
var inst_44893__$1 = tmp44950;
var inst_44894 = inst_44901;
var state_44933__$1 = (function (){var statearr_44954 = state_44933;
(statearr_44954[(14)] = inst_44906);

(statearr_44954[(7)] = inst_44893__$1);

(statearr_44954[(8)] = inst_44894);

return statearr_44954;
})();
var statearr_44955_45542 = state_44933__$1;
(statearr_44955_45542[(2)] = null);

(statearr_44955_45542[(1)] = (2));


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
var cljs$core$async$state_machine__43385__auto__ = null;
var cljs$core$async$state_machine__43385__auto____0 = (function (){
var statearr_44956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44956[(0)] = cljs$core$async$state_machine__43385__auto__);

(statearr_44956[(1)] = (1));

return statearr_44956;
});
var cljs$core$async$state_machine__43385__auto____1 = (function (state_44933){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_44933);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e44957){if((e44957 instanceof Object)){
var ex__43388__auto__ = e44957;
var statearr_44958_45543 = state_44933;
(statearr_44958_45543[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45544 = state_44933;
state_44933 = G__45544;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs$core$async$state_machine__43385__auto__ = function(state_44933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43385__auto____1.call(this,state_44933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43385__auto____0;
cljs$core$async$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43385__auto____1;
return cljs$core$async$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_44959 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_44959[(6)] = c__43452__auto___45528);

return statearr_44959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
