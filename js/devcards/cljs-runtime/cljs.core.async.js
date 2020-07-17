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
var G__37329 = arguments.length;
switch (G__37329) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37331 = (function (f,blockable,meta37332){
this.f = f;
this.blockable = blockable;
this.meta37332 = meta37332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37333,meta37332__$1){
var self__ = this;
var _37333__$1 = this;
return (new cljs.core.async.t_cljs$core$async37331(self__.f,self__.blockable,meta37332__$1));
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37333){
var self__ = this;
var _37333__$1 = this;
return self__.meta37332;
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37332","meta37332",-2107527381,null)], null);
}));

(cljs.core.async.t_cljs$core$async37331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37331");

(cljs.core.async.t_cljs$core$async37331.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37331.
 */
cljs.core.async.__GT_t_cljs$core$async37331 = (function cljs$core$async$__GT_t_cljs$core$async37331(f__$1,blockable__$1,meta37332){
return (new cljs.core.async.t_cljs$core$async37331(f__$1,blockable__$1,meta37332));
});

}

return (new cljs.core.async.t_cljs$core$async37331(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37336 = arguments.length;
switch (G__37336) {
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
var G__37338 = arguments.length;
switch (G__37338) {
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
var G__37340 = arguments.length;
switch (G__37340) {
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
var val_38790 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38790) : fn1.call(null,val_38790));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38790) : fn1.call(null,val_38790));
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
var G__37342 = arguments.length;
switch (G__37342) {
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
var n__4666__auto___38802 = n;
var x_38804 = (0);
while(true){
if((x_38804 < n__4666__auto___38802)){
(a[x_38804] = x_38804);

var G__38805 = (x_38804 + (1));
x_38804 = G__38805;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37346 = (function (flag,meta37347){
this.flag = flag;
this.meta37347 = meta37347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37348,meta37347__$1){
var self__ = this;
var _37348__$1 = this;
return (new cljs.core.async.t_cljs$core$async37346(self__.flag,meta37347__$1));
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37348){
var self__ = this;
var _37348__$1 = this;
return self__.meta37347;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37347","meta37347",1021605027,null)], null);
}));

(cljs.core.async.t_cljs$core$async37346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37346");

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37346.
 */
cljs.core.async.__GT_t_cljs$core$async37346 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37346(flag__$1,meta37347){
return (new cljs.core.async.t_cljs$core$async37346(flag__$1,meta37347));
});

}

return (new cljs.core.async.t_cljs$core$async37346(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37354 = (function (flag,cb,meta37355){
this.flag = flag;
this.cb = cb;
this.meta37355 = meta37355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37356,meta37355__$1){
var self__ = this;
var _37356__$1 = this;
return (new cljs.core.async.t_cljs$core$async37354(self__.flag,self__.cb,meta37355__$1));
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37356){
var self__ = this;
var _37356__$1 = this;
return self__.meta37355;
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37355","meta37355",910490531,null)], null);
}));

(cljs.core.async.t_cljs$core$async37354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37354");

(cljs.core.async.t_cljs$core$async37354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37354.
 */
cljs.core.async.__GT_t_cljs$core$async37354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37354(flag__$1,cb__$1,meta37355){
return (new cljs.core.async.t_cljs$core$async37354(flag__$1,cb__$1,meta37355));
});

}

return (new cljs.core.async.t_cljs$core$async37354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37358_SHARP_){
var G__37363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37358_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37363) : fret.call(null,G__37363));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37359_SHARP_){
var G__37364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37359_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37364) : fret.call(null,G__37364));
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
var G__38810 = (i + (1));
i = G__38810;
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
var len__4789__auto___38811 = arguments.length;
var i__4790__auto___38812 = (0);
while(true){
if((i__4790__auto___38812 < len__4789__auto___38811)){
args__4795__auto__.push((arguments[i__4790__auto___38812]));

var G__38813 = (i__4790__auto___38812 + (1));
i__4790__auto___38812 = G__38813;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37367){
var map__37368 = p__37367;
var map__37368__$1 = (((((!((map__37368 == null))))?(((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37368):map__37368);
var opts = map__37368__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37365){
var G__37366 = cljs.core.first(seq37365);
var seq37365__$1 = cljs.core.next(seq37365);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37366,seq37365__$1);
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
var G__37371 = arguments.length;
switch (G__37371) {
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
var c__37270__auto___38816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (7))){
var inst_37391 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37397_38817 = state_37395__$1;
(statearr_37397_38817[(2)] = inst_37391);

(statearr_37397_38817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (1))){
var state_37395__$1 = state_37395;
var statearr_37398_38818 = state_37395__$1;
(statearr_37398_38818[(2)] = null);

(statearr_37398_38818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (4))){
var inst_37374 = (state_37395[(7)]);
var inst_37374__$1 = (state_37395[(2)]);
var inst_37375 = (inst_37374__$1 == null);
var state_37395__$1 = (function (){var statearr_37399 = state_37395;
(statearr_37399[(7)] = inst_37374__$1);

return statearr_37399;
})();
if(cljs.core.truth_(inst_37375)){
var statearr_37400_38819 = state_37395__$1;
(statearr_37400_38819[(1)] = (5));

} else {
var statearr_37401_38820 = state_37395__$1;
(statearr_37401_38820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (13))){
var state_37395__$1 = state_37395;
var statearr_37402_38821 = state_37395__$1;
(statearr_37402_38821[(2)] = null);

(statearr_37402_38821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (6))){
var inst_37374 = (state_37395[(7)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37395__$1,(11),to,inst_37374);
} else {
if((state_val_37396 === (3))){
var inst_37393 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (12))){
var state_37395__$1 = state_37395;
var statearr_37403_38826 = state_37395__$1;
(statearr_37403_38826[(2)] = null);

(statearr_37403_38826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (2))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37395__$1,(4),from);
} else {
if((state_val_37396 === (11))){
var inst_37384 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
if(cljs.core.truth_(inst_37384)){
var statearr_37404_38827 = state_37395__$1;
(statearr_37404_38827[(1)] = (12));

} else {
var statearr_37405_38828 = state_37395__$1;
(statearr_37405_38828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (9))){
var state_37395__$1 = state_37395;
var statearr_37406_38830 = state_37395__$1;
(statearr_37406_38830[(2)] = null);

(statearr_37406_38830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (5))){
var state_37395__$1 = state_37395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37407_38833 = state_37395__$1;
(statearr_37407_38833[(1)] = (8));

} else {
var statearr_37408_38834 = state_37395__$1;
(statearr_37408_38834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (14))){
var inst_37389 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37409_38835 = state_37395__$1;
(statearr_37409_38835[(2)] = inst_37389);

(statearr_37409_38835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (10))){
var inst_37381 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37410_38837 = state_37395__$1;
(statearr_37410_38837[(2)] = inst_37381);

(statearr_37410_38837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (8))){
var inst_37378 = cljs.core.async.close_BANG_(to);
var state_37395__$1 = state_37395;
var statearr_37411_38838 = state_37395__$1;
(statearr_37411_38838[(2)] = inst_37378);

(statearr_37411_38838[(1)] = (10));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_37412 = [null,null,null,null,null,null,null,null];
(statearr_37412[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_37412[(1)] = (1));

return statearr_37412;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_37395){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37395);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37413){if((e37413 instanceof Object)){
var ex__37206__auto__ = e37413;
var statearr_37414_38842 = state_37395;
(statearr_37414_38842[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38843 = state_37395;
state_37395 = G__38843;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37415 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37415[(6)] = c__37270__auto___38816);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var process = (function (p__37416){
var vec__37417 = p__37416;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37417,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37417,(1),null);
var job = vec__37417;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37270__auto___38845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37424){
var state_val_37425 = (state_37424[(1)]);
if((state_val_37425 === (1))){
var state_37424__$1 = state_37424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37424__$1,(2),res,v);
} else {
if((state_val_37425 === (2))){
var inst_37421 = (state_37424[(2)]);
var inst_37422 = cljs.core.async.close_BANG_(res);
var state_37424__$1 = (function (){var statearr_37426 = state_37424;
(statearr_37426[(7)] = inst_37421);

return statearr_37426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37424__$1,inst_37422);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1 = (function (state_37424){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37424);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37428){if((e37428 instanceof Object)){
var ex__37206__auto__ = e37428;
var statearr_37429_38848 = state_37424;
(statearr_37429_38848[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38850 = state_37424;
state_37424 = G__38850;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = function(state_37424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1.call(this,state_37424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37430 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37430[(6)] = c__37270__auto___38845);

return statearr_37430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37431){
var vec__37432 = p__37431;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37432,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37432,(1),null);
var job = vec__37432;
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
var n__4666__auto___38851 = n;
var __38852 = (0);
while(true){
if((__38852 < n__4666__auto___38851)){
var G__37435_38853 = type;
var G__37435_38854__$1 = (((G__37435_38853 instanceof cljs.core.Keyword))?G__37435_38853.fqn:null);
switch (G__37435_38854__$1) {
case "compute":
var c__37270__auto___38856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38852,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = ((function (__38852,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function (state_37448){
var state_val_37449 = (state_37448[(1)]);
if((state_val_37449 === (1))){
var state_37448__$1 = state_37448;
var statearr_37450_38857 = state_37448__$1;
(statearr_37450_38857[(2)] = null);

(statearr_37450_38857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (2))){
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37448__$1,(4),jobs);
} else {
if((state_val_37449 === (3))){
var inst_37446 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37448__$1,inst_37446);
} else {
if((state_val_37449 === (4))){
var inst_37438 = (state_37448[(2)]);
var inst_37439 = process(inst_37438);
var state_37448__$1 = state_37448;
if(cljs.core.truth_(inst_37439)){
var statearr_37451_38858 = state_37448__$1;
(statearr_37451_38858[(1)] = (5));

} else {
var statearr_37452_38859 = state_37448__$1;
(statearr_37452_38859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (5))){
var state_37448__$1 = state_37448;
var statearr_37453_38860 = state_37448__$1;
(statearr_37453_38860[(2)] = null);

(statearr_37453_38860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (6))){
var state_37448__$1 = state_37448;
var statearr_37454_38861 = state_37448__$1;
(statearr_37454_38861[(2)] = null);

(statearr_37454_38861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (7))){
var inst_37444 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37455_38862 = state_37448__$1;
(statearr_37455_38862[(2)] = inst_37444);

(statearr_37455_38862[(1)] = (3));


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
});})(__38852,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
;
return ((function (__38852,switch__37202__auto__,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_37456 = [null,null,null,null,null,null,null];
(statearr_37456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__);

(statearr_37456[(1)] = (1));

return statearr_37456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1 = (function (state_37448){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37448);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37457){if((e37457 instanceof Object)){
var ex__37206__auto__ = e37457;
var statearr_37458_38863 = state_37448;
(statearr_37458_38863[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38864 = state_37448;
state_37448 = G__38864;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = function(state_37448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1.call(this,state_37448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__;
})()
;})(__38852,switch__37202__auto__,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
})();
var state__37272__auto__ = (function (){var statearr_37459 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37459[(6)] = c__37270__auto___38856);

return statearr_37459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
});})(__38852,c__37270__auto___38856,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
);


break;
case "async":
var c__37270__auto___38865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38852,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = ((function (__38852,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function (state_37472){
var state_val_37473 = (state_37472[(1)]);
if((state_val_37473 === (1))){
var state_37472__$1 = state_37472;
var statearr_37474_38866 = state_37472__$1;
(statearr_37474_38866[(2)] = null);

(statearr_37474_38866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (2))){
var state_37472__$1 = state_37472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37472__$1,(4),jobs);
} else {
if((state_val_37473 === (3))){
var inst_37470 = (state_37472[(2)]);
var state_37472__$1 = state_37472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37472__$1,inst_37470);
} else {
if((state_val_37473 === (4))){
var inst_37462 = (state_37472[(2)]);
var inst_37463 = async(inst_37462);
var state_37472__$1 = state_37472;
if(cljs.core.truth_(inst_37463)){
var statearr_37475_38867 = state_37472__$1;
(statearr_37475_38867[(1)] = (5));

} else {
var statearr_37476_38868 = state_37472__$1;
(statearr_37476_38868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (5))){
var state_37472__$1 = state_37472;
var statearr_37477_38869 = state_37472__$1;
(statearr_37477_38869[(2)] = null);

(statearr_37477_38869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (6))){
var state_37472__$1 = state_37472;
var statearr_37478_38870 = state_37472__$1;
(statearr_37478_38870[(2)] = null);

(statearr_37478_38870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (7))){
var inst_37468 = (state_37472[(2)]);
var state_37472__$1 = state_37472;
var statearr_37479_38875 = state_37472__$1;
(statearr_37479_38875[(2)] = inst_37468);

(statearr_37479_38875[(1)] = (3));


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
});})(__38852,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
;
return ((function (__38852,switch__37202__auto__,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_37480 = [null,null,null,null,null,null,null];
(statearr_37480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__);

(statearr_37480[(1)] = (1));

return statearr_37480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1 = (function (state_37472){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37472);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37481){if((e37481 instanceof Object)){
var ex__37206__auto__ = e37481;
var statearr_37482_38884 = state_37472;
(statearr_37482_38884[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38885 = state_37472;
state_37472 = G__38885;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = function(state_37472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1.call(this,state_37472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__;
})()
;})(__38852,switch__37202__auto__,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
})();
var state__37272__auto__ = (function (){var statearr_37483 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37483[(6)] = c__37270__auto___38865);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
});})(__38852,c__37270__auto___38865,G__37435_38853,G__37435_38854__$1,n__4666__auto___38851,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37435_38854__$1)].join('')));

}

var G__38886 = (__38852 + (1));
__38852 = G__38886;
continue;
} else {
}
break;
}

var c__37270__auto___38887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37505){
var state_val_37506 = (state_37505[(1)]);
if((state_val_37506 === (7))){
var inst_37501 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
var statearr_37507_38888 = state_37505__$1;
(statearr_37507_38888[(2)] = inst_37501);

(statearr_37507_38888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (1))){
var state_37505__$1 = state_37505;
var statearr_37508_38890 = state_37505__$1;
(statearr_37508_38890[(2)] = null);

(statearr_37508_38890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (4))){
var inst_37486 = (state_37505[(7)]);
var inst_37486__$1 = (state_37505[(2)]);
var inst_37487 = (inst_37486__$1 == null);
var state_37505__$1 = (function (){var statearr_37509 = state_37505;
(statearr_37509[(7)] = inst_37486__$1);

return statearr_37509;
})();
if(cljs.core.truth_(inst_37487)){
var statearr_37510_38891 = state_37505__$1;
(statearr_37510_38891[(1)] = (5));

} else {
var statearr_37511_38892 = state_37505__$1;
(statearr_37511_38892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (6))){
var inst_37486 = (state_37505[(7)]);
var inst_37491 = (state_37505[(8)]);
var inst_37491__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37493 = [inst_37486,inst_37491__$1];
var inst_37494 = (new cljs.core.PersistentVector(null,2,(5),inst_37492,inst_37493,null));
var state_37505__$1 = (function (){var statearr_37512 = state_37505;
(statearr_37512[(8)] = inst_37491__$1);

return statearr_37512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37505__$1,(8),jobs,inst_37494);
} else {
if((state_val_37506 === (3))){
var inst_37503 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37505__$1,inst_37503);
} else {
if((state_val_37506 === (2))){
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37505__$1,(4),from);
} else {
if((state_val_37506 === (9))){
var inst_37498 = (state_37505[(2)]);
var state_37505__$1 = (function (){var statearr_37513 = state_37505;
(statearr_37513[(9)] = inst_37498);

return statearr_37513;
})();
var statearr_37514_38894 = state_37505__$1;
(statearr_37514_38894[(2)] = null);

(statearr_37514_38894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (5))){
var inst_37489 = cljs.core.async.close_BANG_(jobs);
var state_37505__$1 = state_37505;
var statearr_37515_38896 = state_37505__$1;
(statearr_37515_38896[(2)] = inst_37489);

(statearr_37515_38896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (8))){
var inst_37491 = (state_37505[(8)]);
var inst_37496 = (state_37505[(2)]);
var state_37505__$1 = (function (){var statearr_37516 = state_37505;
(statearr_37516[(10)] = inst_37496);

return statearr_37516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37505__$1,(9),results,inst_37491);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_37517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__);

(statearr_37517[(1)] = (1));

return statearr_37517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1 = (function (state_37505){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37505);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37518){if((e37518 instanceof Object)){
var ex__37206__auto__ = e37518;
var statearr_37519_38898 = state_37505;
(statearr_37519_38898[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38899 = state_37505;
state_37505 = G__38899;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = function(state_37505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1.call(this,state_37505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37520 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37520[(6)] = c__37270__auto___38887);

return statearr_37520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37558){
var state_val_37559 = (state_37558[(1)]);
if((state_val_37559 === (7))){
var inst_37554 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
var statearr_37560_38900 = state_37558__$1;
(statearr_37560_38900[(2)] = inst_37554);

(statearr_37560_38900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (20))){
var state_37558__$1 = state_37558;
var statearr_37561_38901 = state_37558__$1;
(statearr_37561_38901[(2)] = null);

(statearr_37561_38901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (1))){
var state_37558__$1 = state_37558;
var statearr_37562_38902 = state_37558__$1;
(statearr_37562_38902[(2)] = null);

(statearr_37562_38902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (4))){
var inst_37523 = (state_37558[(7)]);
var inst_37523__$1 = (state_37558[(2)]);
var inst_37524 = (inst_37523__$1 == null);
var state_37558__$1 = (function (){var statearr_37563 = state_37558;
(statearr_37563[(7)] = inst_37523__$1);

return statearr_37563;
})();
if(cljs.core.truth_(inst_37524)){
var statearr_37564_38903 = state_37558__$1;
(statearr_37564_38903[(1)] = (5));

} else {
var statearr_37565_38904 = state_37558__$1;
(statearr_37565_38904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (15))){
var inst_37536 = (state_37558[(8)]);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37558__$1,(18),to,inst_37536);
} else {
if((state_val_37559 === (21))){
var inst_37549 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
var statearr_37566_38905 = state_37558__$1;
(statearr_37566_38905[(2)] = inst_37549);

(statearr_37566_38905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (13))){
var inst_37551 = (state_37558[(2)]);
var state_37558__$1 = (function (){var statearr_37567 = state_37558;
(statearr_37567[(9)] = inst_37551);

return statearr_37567;
})();
var statearr_37568_38906 = state_37558__$1;
(statearr_37568_38906[(2)] = null);

(statearr_37568_38906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (6))){
var inst_37523 = (state_37558[(7)]);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37558__$1,(11),inst_37523);
} else {
if((state_val_37559 === (17))){
var inst_37544 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
if(cljs.core.truth_(inst_37544)){
var statearr_37569_38907 = state_37558__$1;
(statearr_37569_38907[(1)] = (19));

} else {
var statearr_37570_38908 = state_37558__$1;
(statearr_37570_38908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (3))){
var inst_37556 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37558__$1,inst_37556);
} else {
if((state_val_37559 === (12))){
var inst_37533 = (state_37558[(10)]);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37558__$1,(14),inst_37533);
} else {
if((state_val_37559 === (2))){
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37558__$1,(4),results);
} else {
if((state_val_37559 === (19))){
var state_37558__$1 = state_37558;
var statearr_37571_38909 = state_37558__$1;
(statearr_37571_38909[(2)] = null);

(statearr_37571_38909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (11))){
var inst_37533 = (state_37558[(2)]);
var state_37558__$1 = (function (){var statearr_37572 = state_37558;
(statearr_37572[(10)] = inst_37533);

return statearr_37572;
})();
var statearr_37573_38910 = state_37558__$1;
(statearr_37573_38910[(2)] = null);

(statearr_37573_38910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (9))){
var state_37558__$1 = state_37558;
var statearr_37574_38911 = state_37558__$1;
(statearr_37574_38911[(2)] = null);

(statearr_37574_38911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (5))){
var state_37558__$1 = state_37558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37575_38912 = state_37558__$1;
(statearr_37575_38912[(1)] = (8));

} else {
var statearr_37576_38913 = state_37558__$1;
(statearr_37576_38913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (14))){
var inst_37536 = (state_37558[(8)]);
var inst_37536__$1 = (state_37558[(2)]);
var inst_37537 = (inst_37536__$1 == null);
var inst_37538 = cljs.core.not(inst_37537);
var state_37558__$1 = (function (){var statearr_37577 = state_37558;
(statearr_37577[(8)] = inst_37536__$1);

return statearr_37577;
})();
if(inst_37538){
var statearr_37578_38914 = state_37558__$1;
(statearr_37578_38914[(1)] = (15));

} else {
var statearr_37579_38915 = state_37558__$1;
(statearr_37579_38915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (16))){
var state_37558__$1 = state_37558;
var statearr_37580_38916 = state_37558__$1;
(statearr_37580_38916[(2)] = false);

(statearr_37580_38916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (10))){
var inst_37530 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
var statearr_37581_38917 = state_37558__$1;
(statearr_37581_38917[(2)] = inst_37530);

(statearr_37581_38917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (18))){
var inst_37541 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
var statearr_37582_38918 = state_37558__$1;
(statearr_37582_38918[(2)] = inst_37541);

(statearr_37582_38918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (8))){
var inst_37527 = cljs.core.async.close_BANG_(to);
var state_37558__$1 = state_37558;
var statearr_37583_38919 = state_37558__$1;
(statearr_37583_38919[(2)] = inst_37527);

(statearr_37583_38919[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_37584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__);

(statearr_37584[(1)] = (1));

return statearr_37584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1 = (function (state_37558){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37558);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37585){if((e37585 instanceof Object)){
var ex__37206__auto__ = e37585;
var statearr_37586_38920 = state_37558;
(statearr_37586_38920[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38921 = state_37558;
state_37558 = G__38921;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__ = function(state_37558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1.call(this,state_37558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37587 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37587[(6)] = c__37270__auto__);

return statearr_37587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
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
var G__37589 = arguments.length;
switch (G__37589) {
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
var G__37591 = arguments.length;
switch (G__37591) {
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
var G__37593 = arguments.length;
switch (G__37593) {
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
var c__37270__auto___38925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37619){
var state_val_37620 = (state_37619[(1)]);
if((state_val_37620 === (7))){
var inst_37615 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
var statearr_37621_38926 = state_37619__$1;
(statearr_37621_38926[(2)] = inst_37615);

(statearr_37621_38926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (1))){
var state_37619__$1 = state_37619;
var statearr_37622_38927 = state_37619__$1;
(statearr_37622_38927[(2)] = null);

(statearr_37622_38927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (4))){
var inst_37596 = (state_37619[(7)]);
var inst_37596__$1 = (state_37619[(2)]);
var inst_37597 = (inst_37596__$1 == null);
var state_37619__$1 = (function (){var statearr_37623 = state_37619;
(statearr_37623[(7)] = inst_37596__$1);

return statearr_37623;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37624_38928 = state_37619__$1;
(statearr_37624_38928[(1)] = (5));

} else {
var statearr_37625_38929 = state_37619__$1;
(statearr_37625_38929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (13))){
var state_37619__$1 = state_37619;
var statearr_37626_38930 = state_37619__$1;
(statearr_37626_38930[(2)] = null);

(statearr_37626_38930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (6))){
var inst_37596 = (state_37619[(7)]);
var inst_37602 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37596) : p.call(null,inst_37596));
var state_37619__$1 = state_37619;
if(cljs.core.truth_(inst_37602)){
var statearr_37627_38931 = state_37619__$1;
(statearr_37627_38931[(1)] = (9));

} else {
var statearr_37628_38932 = state_37619__$1;
(statearr_37628_38932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (3))){
var inst_37617 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37619__$1,inst_37617);
} else {
if((state_val_37620 === (12))){
var state_37619__$1 = state_37619;
var statearr_37629_38933 = state_37619__$1;
(statearr_37629_38933[(2)] = null);

(statearr_37629_38933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (2))){
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37619__$1,(4),ch);
} else {
if((state_val_37620 === (11))){
var inst_37596 = (state_37619[(7)]);
var inst_37606 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37619__$1,(8),inst_37606,inst_37596);
} else {
if((state_val_37620 === (9))){
var state_37619__$1 = state_37619;
var statearr_37630_38934 = state_37619__$1;
(statearr_37630_38934[(2)] = tc);

(statearr_37630_38934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (5))){
var inst_37599 = cljs.core.async.close_BANG_(tc);
var inst_37600 = cljs.core.async.close_BANG_(fc);
var state_37619__$1 = (function (){var statearr_37631 = state_37619;
(statearr_37631[(8)] = inst_37599);

return statearr_37631;
})();
var statearr_37632_38935 = state_37619__$1;
(statearr_37632_38935[(2)] = inst_37600);

(statearr_37632_38935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (14))){
var inst_37613 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
var statearr_37633_38936 = state_37619__$1;
(statearr_37633_38936[(2)] = inst_37613);

(statearr_37633_38936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (10))){
var state_37619__$1 = state_37619;
var statearr_37634_38937 = state_37619__$1;
(statearr_37634_38937[(2)] = fc);

(statearr_37634_38937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (8))){
var inst_37608 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
if(cljs.core.truth_(inst_37608)){
var statearr_37635_38938 = state_37619__$1;
(statearr_37635_38938[(1)] = (12));

} else {
var statearr_37636_38939 = state_37619__$1;
(statearr_37636_38939[(1)] = (13));

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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_37637 = [null,null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_37619){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37619);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__37206__auto__ = e37638;
var statearr_37639_38940 = state_37619;
(statearr_37639_38940[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38941 = state_37619;
state_37619 = G__38941;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_37619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_37619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37640 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37640[(6)] = c__37270__auto___38925);

return statearr_37640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37661){
var state_val_37662 = (state_37661[(1)]);
if((state_val_37662 === (7))){
var inst_37657 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
var statearr_37663_38942 = state_37661__$1;
(statearr_37663_38942[(2)] = inst_37657);

(statearr_37663_38942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (1))){
var inst_37641 = init;
var state_37661__$1 = (function (){var statearr_37664 = state_37661;
(statearr_37664[(7)] = inst_37641);

return statearr_37664;
})();
var statearr_37665_38943 = state_37661__$1;
(statearr_37665_38943[(2)] = null);

(statearr_37665_38943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (4))){
var inst_37644 = (state_37661[(8)]);
var inst_37644__$1 = (state_37661[(2)]);
var inst_37645 = (inst_37644__$1 == null);
var state_37661__$1 = (function (){var statearr_37666 = state_37661;
(statearr_37666[(8)] = inst_37644__$1);

return statearr_37666;
})();
if(cljs.core.truth_(inst_37645)){
var statearr_37667_38944 = state_37661__$1;
(statearr_37667_38944[(1)] = (5));

} else {
var statearr_37668_38945 = state_37661__$1;
(statearr_37668_38945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (6))){
var inst_37648 = (state_37661[(9)]);
var inst_37641 = (state_37661[(7)]);
var inst_37644 = (state_37661[(8)]);
var inst_37648__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37641,inst_37644) : f.call(null,inst_37641,inst_37644));
var inst_37649 = cljs.core.reduced_QMARK_(inst_37648__$1);
var state_37661__$1 = (function (){var statearr_37669 = state_37661;
(statearr_37669[(9)] = inst_37648__$1);

return statearr_37669;
})();
if(inst_37649){
var statearr_37670_38946 = state_37661__$1;
(statearr_37670_38946[(1)] = (8));

} else {
var statearr_37671_38947 = state_37661__$1;
(statearr_37671_38947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (3))){
var inst_37659 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37661__$1,inst_37659);
} else {
if((state_val_37662 === (2))){
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37661__$1,(4),ch);
} else {
if((state_val_37662 === (9))){
var inst_37648 = (state_37661[(9)]);
var inst_37641 = inst_37648;
var state_37661__$1 = (function (){var statearr_37672 = state_37661;
(statearr_37672[(7)] = inst_37641);

return statearr_37672;
})();
var statearr_37673_38948 = state_37661__$1;
(statearr_37673_38948[(2)] = null);

(statearr_37673_38948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (5))){
var inst_37641 = (state_37661[(7)]);
var state_37661__$1 = state_37661;
var statearr_37674_38949 = state_37661__$1;
(statearr_37674_38949[(2)] = inst_37641);

(statearr_37674_38949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (10))){
var inst_37655 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
var statearr_37675_38950 = state_37661__$1;
(statearr_37675_38950[(2)] = inst_37655);

(statearr_37675_38950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (8))){
var inst_37648 = (state_37661[(9)]);
var inst_37651 = cljs.core.deref(inst_37648);
var state_37661__$1 = state_37661;
var statearr_37676_38951 = state_37661__$1;
(statearr_37676_38951[(2)] = inst_37651);

(statearr_37676_38951[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37203__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37203__auto____0 = (function (){
var statearr_37677 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37677[(0)] = cljs$core$async$reduce_$_state_machine__37203__auto__);

(statearr_37677[(1)] = (1));

return statearr_37677;
});
var cljs$core$async$reduce_$_state_machine__37203__auto____1 = (function (state_37661){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37661);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37678){if((e37678 instanceof Object)){
var ex__37206__auto__ = e37678;
var statearr_37679_38952 = state_37661;
(statearr_37679_38952[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38953 = state_37661;
state_37661 = G__38953;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37203__auto__ = function(state_37661){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37203__auto____1.call(this,state_37661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37203__auto____0;
cljs$core$async$reduce_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37203__auto____1;
return cljs$core$async$reduce_$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37680 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37680[(6)] = c__37270__auto__);

return statearr_37680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37686){
var state_val_37687 = (state_37686[(1)]);
if((state_val_37687 === (1))){
var inst_37681 = cljs.core.async.reduce(f__$1,init,ch);
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37686__$1,(2),inst_37681);
} else {
if((state_val_37687 === (2))){
var inst_37683 = (state_37686[(2)]);
var inst_37684 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37683) : f__$1.call(null,inst_37683));
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37686__$1,inst_37684);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37203__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37203__auto____0 = (function (){
var statearr_37688 = [null,null,null,null,null,null,null];
(statearr_37688[(0)] = cljs$core$async$transduce_$_state_machine__37203__auto__);

(statearr_37688[(1)] = (1));

return statearr_37688;
});
var cljs$core$async$transduce_$_state_machine__37203__auto____1 = (function (state_37686){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37686);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37689){if((e37689 instanceof Object)){
var ex__37206__auto__ = e37689;
var statearr_37690_38954 = state_37686;
(statearr_37690_38954[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38955 = state_37686;
state_37686 = G__38955;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37203__auto__ = function(state_37686){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37203__auto____1.call(this,state_37686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37203__auto____0;
cljs$core$async$transduce_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37203__auto____1;
return cljs$core$async$transduce_$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37691 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37691[(6)] = c__37270__auto__);

return statearr_37691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
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
var G__37693 = arguments.length;
switch (G__37693) {
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
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37718){
var state_val_37719 = (state_37718[(1)]);
if((state_val_37719 === (7))){
var inst_37700 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37720_38957 = state_37718__$1;
(statearr_37720_38957[(2)] = inst_37700);

(statearr_37720_38957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (1))){
var inst_37694 = cljs.core.seq(coll);
var inst_37695 = inst_37694;
var state_37718__$1 = (function (){var statearr_37721 = state_37718;
(statearr_37721[(7)] = inst_37695);

return statearr_37721;
})();
var statearr_37722_38958 = state_37718__$1;
(statearr_37722_38958[(2)] = null);

(statearr_37722_38958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (4))){
var inst_37695 = (state_37718[(7)]);
var inst_37698 = cljs.core.first(inst_37695);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37718__$1,(7),ch,inst_37698);
} else {
if((state_val_37719 === (13))){
var inst_37712 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37723_38959 = state_37718__$1;
(statearr_37723_38959[(2)] = inst_37712);

(statearr_37723_38959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (6))){
var inst_37703 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37703)){
var statearr_37724_38960 = state_37718__$1;
(statearr_37724_38960[(1)] = (8));

} else {
var statearr_37725_38961 = state_37718__$1;
(statearr_37725_38961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (3))){
var inst_37716 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37718__$1,inst_37716);
} else {
if((state_val_37719 === (12))){
var state_37718__$1 = state_37718;
var statearr_37726_38962 = state_37718__$1;
(statearr_37726_38962[(2)] = null);

(statearr_37726_38962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (2))){
var inst_37695 = (state_37718[(7)]);
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37695)){
var statearr_37727_38963 = state_37718__$1;
(statearr_37727_38963[(1)] = (4));

} else {
var statearr_37728_38964 = state_37718__$1;
(statearr_37728_38964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (11))){
var inst_37709 = cljs.core.async.close_BANG_(ch);
var state_37718__$1 = state_37718;
var statearr_37729_38965 = state_37718__$1;
(statearr_37729_38965[(2)] = inst_37709);

(statearr_37729_38965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (9))){
var state_37718__$1 = state_37718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37730_38966 = state_37718__$1;
(statearr_37730_38966[(1)] = (11));

} else {
var statearr_37731_38967 = state_37718__$1;
(statearr_37731_38967[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (5))){
var inst_37695 = (state_37718[(7)]);
var state_37718__$1 = state_37718;
var statearr_37732_38968 = state_37718__$1;
(statearr_37732_38968[(2)] = inst_37695);

(statearr_37732_38968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (10))){
var inst_37714 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37733_38969 = state_37718__$1;
(statearr_37733_38969[(2)] = inst_37714);

(statearr_37733_38969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (8))){
var inst_37695 = (state_37718[(7)]);
var inst_37705 = cljs.core.next(inst_37695);
var inst_37695__$1 = inst_37705;
var state_37718__$1 = (function (){var statearr_37734 = state_37718;
(statearr_37734[(7)] = inst_37695__$1);

return statearr_37734;
})();
var statearr_37735_38970 = state_37718__$1;
(statearr_37735_38970[(2)] = null);

(statearr_37735_38970[(1)] = (2));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_37736 = [null,null,null,null,null,null,null,null];
(statearr_37736[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_37736[(1)] = (1));

return statearr_37736;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_37718){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37718);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37737){if((e37737 instanceof Object)){
var ex__37206__auto__ = e37737;
var statearr_37738_38971 = state_37718;
(statearr_37738_38971[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38972 = state_37718;
state_37718 = G__38972;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_37718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_37718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37739 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37739[(6)] = c__37270__auto__);

return statearr_37739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37740 = (function (ch,cs,meta37741){
this.ch = ch;
this.cs = cs;
this.meta37741 = meta37741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37742,meta37741__$1){
var self__ = this;
var _37742__$1 = this;
return (new cljs.core.async.t_cljs$core$async37740(self__.ch,self__.cs,meta37741__$1));
}));

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37742){
var self__ = this;
var _37742__$1 = this;
return self__.meta37741;
}));

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37740.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37741","meta37741",1209859777,null)], null);
}));

(cljs.core.async.t_cljs$core$async37740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37740");

(cljs.core.async.t_cljs$core$async37740.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37740.
 */
cljs.core.async.__GT_t_cljs$core$async37740 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37740(ch__$1,cs__$1,meta37741){
return (new cljs.core.async.t_cljs$core$async37740(ch__$1,cs__$1,meta37741));
});

}

return (new cljs.core.async.t_cljs$core$async37740(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37270__auto___38973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_37877){
var state_val_37878 = (state_37877[(1)]);
if((state_val_37878 === (7))){
var inst_37873 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37879_38974 = state_37877__$1;
(statearr_37879_38974[(2)] = inst_37873);

(statearr_37879_38974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (20))){
var inst_37776 = (state_37877[(7)]);
var inst_37788 = cljs.core.first(inst_37776);
var inst_37789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37788,(0),null);
var inst_37790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37788,(1),null);
var state_37877__$1 = (function (){var statearr_37880 = state_37877;
(statearr_37880[(8)] = inst_37789);

return statearr_37880;
})();
if(cljs.core.truth_(inst_37790)){
var statearr_37881_38975 = state_37877__$1;
(statearr_37881_38975[(1)] = (22));

} else {
var statearr_37882_38976 = state_37877__$1;
(statearr_37882_38976[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (27))){
var inst_37818 = (state_37877[(9)]);
var inst_37825 = (state_37877[(10)]);
var inst_37820 = (state_37877[(11)]);
var inst_37745 = (state_37877[(12)]);
var inst_37825__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37818,inst_37820);
var inst_37826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37825__$1,inst_37745,done);
var state_37877__$1 = (function (){var statearr_37883 = state_37877;
(statearr_37883[(10)] = inst_37825__$1);

return statearr_37883;
})();
if(cljs.core.truth_(inst_37826)){
var statearr_37884_38977 = state_37877__$1;
(statearr_37884_38977[(1)] = (30));

} else {
var statearr_37885_38978 = state_37877__$1;
(statearr_37885_38978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (1))){
var state_37877__$1 = state_37877;
var statearr_37886_38979 = state_37877__$1;
(statearr_37886_38979[(2)] = null);

(statearr_37886_38979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (24))){
var inst_37776 = (state_37877[(7)]);
var inst_37795 = (state_37877[(2)]);
var inst_37796 = cljs.core.next(inst_37776);
var inst_37754 = inst_37796;
var inst_37755 = null;
var inst_37756 = (0);
var inst_37757 = (0);
var state_37877__$1 = (function (){var statearr_37887 = state_37877;
(statearr_37887[(13)] = inst_37755);

(statearr_37887[(14)] = inst_37757);

(statearr_37887[(15)] = inst_37795);

(statearr_37887[(16)] = inst_37754);

(statearr_37887[(17)] = inst_37756);

return statearr_37887;
})();
var statearr_37888_38980 = state_37877__$1;
(statearr_37888_38980[(2)] = null);

(statearr_37888_38980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (39))){
var state_37877__$1 = state_37877;
var statearr_37892_38981 = state_37877__$1;
(statearr_37892_38981[(2)] = null);

(statearr_37892_38981[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (4))){
var inst_37745 = (state_37877[(12)]);
var inst_37745__$1 = (state_37877[(2)]);
var inst_37746 = (inst_37745__$1 == null);
var state_37877__$1 = (function (){var statearr_37893 = state_37877;
(statearr_37893[(12)] = inst_37745__$1);

return statearr_37893;
})();
if(cljs.core.truth_(inst_37746)){
var statearr_37894_38982 = state_37877__$1;
(statearr_37894_38982[(1)] = (5));

} else {
var statearr_37895_38983 = state_37877__$1;
(statearr_37895_38983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (15))){
var inst_37755 = (state_37877[(13)]);
var inst_37757 = (state_37877[(14)]);
var inst_37754 = (state_37877[(16)]);
var inst_37756 = (state_37877[(17)]);
var inst_37772 = (state_37877[(2)]);
var inst_37773 = (inst_37757 + (1));
var tmp37889 = inst_37755;
var tmp37890 = inst_37754;
var tmp37891 = inst_37756;
var inst_37754__$1 = tmp37890;
var inst_37755__$1 = tmp37889;
var inst_37756__$1 = tmp37891;
var inst_37757__$1 = inst_37773;
var state_37877__$1 = (function (){var statearr_37896 = state_37877;
(statearr_37896[(13)] = inst_37755__$1);

(statearr_37896[(18)] = inst_37772);

(statearr_37896[(14)] = inst_37757__$1);

(statearr_37896[(16)] = inst_37754__$1);

(statearr_37896[(17)] = inst_37756__$1);

return statearr_37896;
})();
var statearr_37897_38984 = state_37877__$1;
(statearr_37897_38984[(2)] = null);

(statearr_37897_38984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (21))){
var inst_37799 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37901_38985 = state_37877__$1;
(statearr_37901_38985[(2)] = inst_37799);

(statearr_37901_38985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (31))){
var inst_37825 = (state_37877[(10)]);
var inst_37829 = done(null);
var inst_37830 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37825);
var state_37877__$1 = (function (){var statearr_37902 = state_37877;
(statearr_37902[(19)] = inst_37829);

return statearr_37902;
})();
var statearr_37903_38986 = state_37877__$1;
(statearr_37903_38986[(2)] = inst_37830);

(statearr_37903_38986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (32))){
var inst_37817 = (state_37877[(20)]);
var inst_37819 = (state_37877[(21)]);
var inst_37818 = (state_37877[(9)]);
var inst_37820 = (state_37877[(11)]);
var inst_37832 = (state_37877[(2)]);
var inst_37833 = (inst_37820 + (1));
var tmp37898 = inst_37817;
var tmp37899 = inst_37819;
var tmp37900 = inst_37818;
var inst_37817__$1 = tmp37898;
var inst_37818__$1 = tmp37900;
var inst_37819__$1 = tmp37899;
var inst_37820__$1 = inst_37833;
var state_37877__$1 = (function (){var statearr_37904 = state_37877;
(statearr_37904[(20)] = inst_37817__$1);

(statearr_37904[(21)] = inst_37819__$1);

(statearr_37904[(9)] = inst_37818__$1);

(statearr_37904[(11)] = inst_37820__$1);

(statearr_37904[(22)] = inst_37832);

return statearr_37904;
})();
var statearr_37905_38995 = state_37877__$1;
(statearr_37905_38995[(2)] = null);

(statearr_37905_38995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (40))){
var inst_37845 = (state_37877[(23)]);
var inst_37849 = done(null);
var inst_37850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37845);
var state_37877__$1 = (function (){var statearr_37906 = state_37877;
(statearr_37906[(24)] = inst_37849);

return statearr_37906;
})();
var statearr_37907_38998 = state_37877__$1;
(statearr_37907_38998[(2)] = inst_37850);

(statearr_37907_38998[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (33))){
var inst_37836 = (state_37877[(25)]);
var inst_37838 = cljs.core.chunked_seq_QMARK_(inst_37836);
var state_37877__$1 = state_37877;
if(inst_37838){
var statearr_37908_39001 = state_37877__$1;
(statearr_37908_39001[(1)] = (36));

} else {
var statearr_37909_39002 = state_37877__$1;
(statearr_37909_39002[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (13))){
var inst_37766 = (state_37877[(26)]);
var inst_37769 = cljs.core.async.close_BANG_(inst_37766);
var state_37877__$1 = state_37877;
var statearr_37910_39005 = state_37877__$1;
(statearr_37910_39005[(2)] = inst_37769);

(statearr_37910_39005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (22))){
var inst_37789 = (state_37877[(8)]);
var inst_37792 = cljs.core.async.close_BANG_(inst_37789);
var state_37877__$1 = state_37877;
var statearr_37911_39006 = state_37877__$1;
(statearr_37911_39006[(2)] = inst_37792);

(statearr_37911_39006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (36))){
var inst_37836 = (state_37877[(25)]);
var inst_37840 = cljs.core.chunk_first(inst_37836);
var inst_37841 = cljs.core.chunk_rest(inst_37836);
var inst_37842 = cljs.core.count(inst_37840);
var inst_37817 = inst_37841;
var inst_37818 = inst_37840;
var inst_37819 = inst_37842;
var inst_37820 = (0);
var state_37877__$1 = (function (){var statearr_37912 = state_37877;
(statearr_37912[(20)] = inst_37817);

(statearr_37912[(21)] = inst_37819);

(statearr_37912[(9)] = inst_37818);

(statearr_37912[(11)] = inst_37820);

return statearr_37912;
})();
var statearr_37913_39009 = state_37877__$1;
(statearr_37913_39009[(2)] = null);

(statearr_37913_39009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (41))){
var inst_37836 = (state_37877[(25)]);
var inst_37852 = (state_37877[(2)]);
var inst_37853 = cljs.core.next(inst_37836);
var inst_37817 = inst_37853;
var inst_37818 = null;
var inst_37819 = (0);
var inst_37820 = (0);
var state_37877__$1 = (function (){var statearr_37914 = state_37877;
(statearr_37914[(20)] = inst_37817);

(statearr_37914[(21)] = inst_37819);

(statearr_37914[(9)] = inst_37818);

(statearr_37914[(11)] = inst_37820);

(statearr_37914[(27)] = inst_37852);

return statearr_37914;
})();
var statearr_37915_39011 = state_37877__$1;
(statearr_37915_39011[(2)] = null);

(statearr_37915_39011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (43))){
var state_37877__$1 = state_37877;
var statearr_37916_39012 = state_37877__$1;
(statearr_37916_39012[(2)] = null);

(statearr_37916_39012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (29))){
var inst_37861 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37917_39013 = state_37877__$1;
(statearr_37917_39013[(2)] = inst_37861);

(statearr_37917_39013[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (44))){
var inst_37870 = (state_37877[(2)]);
var state_37877__$1 = (function (){var statearr_37918 = state_37877;
(statearr_37918[(28)] = inst_37870);

return statearr_37918;
})();
var statearr_37919_39014 = state_37877__$1;
(statearr_37919_39014[(2)] = null);

(statearr_37919_39014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (6))){
var inst_37809 = (state_37877[(29)]);
var inst_37808 = cljs.core.deref(cs);
var inst_37809__$1 = cljs.core.keys(inst_37808);
var inst_37810 = cljs.core.count(inst_37809__$1);
var inst_37811 = cljs.core.reset_BANG_(dctr,inst_37810);
var inst_37816 = cljs.core.seq(inst_37809__$1);
var inst_37817 = inst_37816;
var inst_37818 = null;
var inst_37819 = (0);
var inst_37820 = (0);
var state_37877__$1 = (function (){var statearr_37920 = state_37877;
(statearr_37920[(29)] = inst_37809__$1);

(statearr_37920[(20)] = inst_37817);

(statearr_37920[(21)] = inst_37819);

(statearr_37920[(9)] = inst_37818);

(statearr_37920[(30)] = inst_37811);

(statearr_37920[(11)] = inst_37820);

return statearr_37920;
})();
var statearr_37921_39015 = state_37877__$1;
(statearr_37921_39015[(2)] = null);

(statearr_37921_39015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (28))){
var inst_37817 = (state_37877[(20)]);
var inst_37836 = (state_37877[(25)]);
var inst_37836__$1 = cljs.core.seq(inst_37817);
var state_37877__$1 = (function (){var statearr_37922 = state_37877;
(statearr_37922[(25)] = inst_37836__$1);

return statearr_37922;
})();
if(inst_37836__$1){
var statearr_37923_39016 = state_37877__$1;
(statearr_37923_39016[(1)] = (33));

} else {
var statearr_37924_39017 = state_37877__$1;
(statearr_37924_39017[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (25))){
var inst_37819 = (state_37877[(21)]);
var inst_37820 = (state_37877[(11)]);
var inst_37822 = (inst_37820 < inst_37819);
var inst_37823 = inst_37822;
var state_37877__$1 = state_37877;
if(cljs.core.truth_(inst_37823)){
var statearr_37925_39018 = state_37877__$1;
(statearr_37925_39018[(1)] = (27));

} else {
var statearr_37926_39019 = state_37877__$1;
(statearr_37926_39019[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (34))){
var state_37877__$1 = state_37877;
var statearr_37927_39020 = state_37877__$1;
(statearr_37927_39020[(2)] = null);

(statearr_37927_39020[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (17))){
var state_37877__$1 = state_37877;
var statearr_37928_39021 = state_37877__$1;
(statearr_37928_39021[(2)] = null);

(statearr_37928_39021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (3))){
var inst_37875 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37877__$1,inst_37875);
} else {
if((state_val_37878 === (12))){
var inst_37804 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37929_39022 = state_37877__$1;
(statearr_37929_39022[(2)] = inst_37804);

(statearr_37929_39022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (2))){
var state_37877__$1 = state_37877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37877__$1,(4),ch);
} else {
if((state_val_37878 === (23))){
var state_37877__$1 = state_37877;
var statearr_37930_39023 = state_37877__$1;
(statearr_37930_39023[(2)] = null);

(statearr_37930_39023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (35))){
var inst_37859 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37931_39024 = state_37877__$1;
(statearr_37931_39024[(2)] = inst_37859);

(statearr_37931_39024[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (19))){
var inst_37776 = (state_37877[(7)]);
var inst_37780 = cljs.core.chunk_first(inst_37776);
var inst_37781 = cljs.core.chunk_rest(inst_37776);
var inst_37782 = cljs.core.count(inst_37780);
var inst_37754 = inst_37781;
var inst_37755 = inst_37780;
var inst_37756 = inst_37782;
var inst_37757 = (0);
var state_37877__$1 = (function (){var statearr_37932 = state_37877;
(statearr_37932[(13)] = inst_37755);

(statearr_37932[(14)] = inst_37757);

(statearr_37932[(16)] = inst_37754);

(statearr_37932[(17)] = inst_37756);

return statearr_37932;
})();
var statearr_37933_39025 = state_37877__$1;
(statearr_37933_39025[(2)] = null);

(statearr_37933_39025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (11))){
var inst_37776 = (state_37877[(7)]);
var inst_37754 = (state_37877[(16)]);
var inst_37776__$1 = cljs.core.seq(inst_37754);
var state_37877__$1 = (function (){var statearr_37934 = state_37877;
(statearr_37934[(7)] = inst_37776__$1);

return statearr_37934;
})();
if(inst_37776__$1){
var statearr_37935_39026 = state_37877__$1;
(statearr_37935_39026[(1)] = (16));

} else {
var statearr_37936_39027 = state_37877__$1;
(statearr_37936_39027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (9))){
var inst_37806 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37937_39028 = state_37877__$1;
(statearr_37937_39028[(2)] = inst_37806);

(statearr_37937_39028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (5))){
var inst_37752 = cljs.core.deref(cs);
var inst_37753 = cljs.core.seq(inst_37752);
var inst_37754 = inst_37753;
var inst_37755 = null;
var inst_37756 = (0);
var inst_37757 = (0);
var state_37877__$1 = (function (){var statearr_37938 = state_37877;
(statearr_37938[(13)] = inst_37755);

(statearr_37938[(14)] = inst_37757);

(statearr_37938[(16)] = inst_37754);

(statearr_37938[(17)] = inst_37756);

return statearr_37938;
})();
var statearr_37939_39029 = state_37877__$1;
(statearr_37939_39029[(2)] = null);

(statearr_37939_39029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (14))){
var state_37877__$1 = state_37877;
var statearr_37940_39030 = state_37877__$1;
(statearr_37940_39030[(2)] = null);

(statearr_37940_39030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (45))){
var inst_37867 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37941_39031 = state_37877__$1;
(statearr_37941_39031[(2)] = inst_37867);

(statearr_37941_39031[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (26))){
var inst_37809 = (state_37877[(29)]);
var inst_37863 = (state_37877[(2)]);
var inst_37864 = cljs.core.seq(inst_37809);
var state_37877__$1 = (function (){var statearr_37942 = state_37877;
(statearr_37942[(31)] = inst_37863);

return statearr_37942;
})();
if(inst_37864){
var statearr_37943_39032 = state_37877__$1;
(statearr_37943_39032[(1)] = (42));

} else {
var statearr_37944_39033 = state_37877__$1;
(statearr_37944_39033[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (16))){
var inst_37776 = (state_37877[(7)]);
var inst_37778 = cljs.core.chunked_seq_QMARK_(inst_37776);
var state_37877__$1 = state_37877;
if(inst_37778){
var statearr_37945_39034 = state_37877__$1;
(statearr_37945_39034[(1)] = (19));

} else {
var statearr_37946_39035 = state_37877__$1;
(statearr_37946_39035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (38))){
var inst_37856 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37947_39036 = state_37877__$1;
(statearr_37947_39036[(2)] = inst_37856);

(statearr_37947_39036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (30))){
var state_37877__$1 = state_37877;
var statearr_37948_39039 = state_37877__$1;
(statearr_37948_39039[(2)] = null);

(statearr_37948_39039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (10))){
var inst_37755 = (state_37877[(13)]);
var inst_37757 = (state_37877[(14)]);
var inst_37765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37755,inst_37757);
var inst_37766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37765,(0),null);
var inst_37767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37765,(1),null);
var state_37877__$1 = (function (){var statearr_37949 = state_37877;
(statearr_37949[(26)] = inst_37766);

return statearr_37949;
})();
if(cljs.core.truth_(inst_37767)){
var statearr_37950_39042 = state_37877__$1;
(statearr_37950_39042[(1)] = (13));

} else {
var statearr_37951_39043 = state_37877__$1;
(statearr_37951_39043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (18))){
var inst_37802 = (state_37877[(2)]);
var state_37877__$1 = state_37877;
var statearr_37952_39044 = state_37877__$1;
(statearr_37952_39044[(2)] = inst_37802);

(statearr_37952_39044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (42))){
var state_37877__$1 = state_37877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37877__$1,(45),dchan);
} else {
if((state_val_37878 === (37))){
var inst_37845 = (state_37877[(23)]);
var inst_37836 = (state_37877[(25)]);
var inst_37745 = (state_37877[(12)]);
var inst_37845__$1 = cljs.core.first(inst_37836);
var inst_37846 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37845__$1,inst_37745,done);
var state_37877__$1 = (function (){var statearr_37953 = state_37877;
(statearr_37953[(23)] = inst_37845__$1);

return statearr_37953;
})();
if(cljs.core.truth_(inst_37846)){
var statearr_37954_39045 = state_37877__$1;
(statearr_37954_39045[(1)] = (39));

} else {
var statearr_37955_39046 = state_37877__$1;
(statearr_37955_39046[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37878 === (8))){
var inst_37757 = (state_37877[(14)]);
var inst_37756 = (state_37877[(17)]);
var inst_37759 = (inst_37757 < inst_37756);
var inst_37760 = inst_37759;
var state_37877__$1 = state_37877;
if(cljs.core.truth_(inst_37760)){
var statearr_37956_39048 = state_37877__$1;
(statearr_37956_39048[(1)] = (10));

} else {
var statearr_37957_39050 = state_37877__$1;
(statearr_37957_39050[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37203__auto__ = null;
var cljs$core$async$mult_$_state_machine__37203__auto____0 = (function (){
var statearr_37958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37958[(0)] = cljs$core$async$mult_$_state_machine__37203__auto__);

(statearr_37958[(1)] = (1));

return statearr_37958;
});
var cljs$core$async$mult_$_state_machine__37203__auto____1 = (function (state_37877){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_37877);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e37959){if((e37959 instanceof Object)){
var ex__37206__auto__ = e37959;
var statearr_37960_39054 = state_37877;
(statearr_37960_39054[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39055 = state_37877;
state_37877 = G__39055;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37203__auto__ = function(state_37877){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37203__auto____1.call(this,state_37877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37203__auto____0;
cljs$core$async$mult_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37203__auto____1;
return cljs$core$async$mult_$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_37961 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_37961[(6)] = c__37270__auto___38973);

return statearr_37961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var G__37963 = arguments.length;
switch (G__37963) {
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
var len__4789__auto___39062 = arguments.length;
var i__4790__auto___39065 = (0);
while(true){
if((i__4790__auto___39065 < len__4789__auto___39062)){
args__4795__auto__.push((arguments[i__4790__auto___39065]));

var G__39066 = (i__4790__auto___39065 + (1));
i__4790__auto___39065 = G__39066;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37968){
var map__37969 = p__37968;
var map__37969__$1 = (((((!((map__37969 == null))))?(((((map__37969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37969):map__37969);
var opts = map__37969__$1;
var statearr_37971_39077 = state;
(statearr_37971_39077[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37972_39078 = state;
(statearr_37972_39078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37973_39083 = state;
(statearr_37973_39083[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37964){
var G__37965 = cljs.core.first(seq37964);
var seq37964__$1 = cljs.core.next(seq37964);
var G__37966 = cljs.core.first(seq37964__$1);
var seq37964__$2 = cljs.core.next(seq37964__$1);
var G__37967 = cljs.core.first(seq37964__$2);
var seq37964__$3 = cljs.core.next(seq37964__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37965,G__37966,G__37967,seq37964__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37974 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37975){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37975 = meta37975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37976,meta37975__$1){
var self__ = this;
var _37976__$1 = this;
return (new cljs.core.async.t_cljs$core$async37974(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37975__$1));
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37976){
var self__ = this;
var _37976__$1 = this;
return self__.meta37975;
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37974.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37975","meta37975",1790094267,null)], null);
}));

(cljs.core.async.t_cljs$core$async37974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37974");

(cljs.core.async.t_cljs$core$async37974.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37974.
 */
cljs.core.async.__GT_t_cljs$core$async37974 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37974(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37975){
return (new cljs.core.async.t_cljs$core$async37974(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37975));
});

}

return (new cljs.core.async.t_cljs$core$async37974(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37270__auto___39087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38078){
var state_val_38079 = (state_38078[(1)]);
if((state_val_38079 === (7))){
var inst_37993 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38080_39088 = state_38078__$1;
(statearr_38080_39088[(2)] = inst_37993);

(statearr_38080_39088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (20))){
var inst_38005 = (state_38078[(7)]);
var state_38078__$1 = state_38078;
var statearr_38081_39089 = state_38078__$1;
(statearr_38081_39089[(2)] = inst_38005);

(statearr_38081_39089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (27))){
var state_38078__$1 = state_38078;
var statearr_38082_39091 = state_38078__$1;
(statearr_38082_39091[(2)] = null);

(statearr_38082_39091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (1))){
var inst_37980 = (state_38078[(8)]);
var inst_37980__$1 = calc_state();
var inst_37982 = (inst_37980__$1 == null);
var inst_37983 = cljs.core.not(inst_37982);
var state_38078__$1 = (function (){var statearr_38083 = state_38078;
(statearr_38083[(8)] = inst_37980__$1);

return statearr_38083;
})();
if(inst_37983){
var statearr_38084_39092 = state_38078__$1;
(statearr_38084_39092[(1)] = (2));

} else {
var statearr_38085_39093 = state_38078__$1;
(statearr_38085_39093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (24))){
var inst_38052 = (state_38078[(9)]);
var inst_38029 = (state_38078[(10)]);
var inst_38038 = (state_38078[(11)]);
var inst_38052__$1 = (inst_38029.cljs$core$IFn$_invoke$arity$1 ? inst_38029.cljs$core$IFn$_invoke$arity$1(inst_38038) : inst_38029.call(null,inst_38038));
var state_38078__$1 = (function (){var statearr_38086 = state_38078;
(statearr_38086[(9)] = inst_38052__$1);

return statearr_38086;
})();
if(cljs.core.truth_(inst_38052__$1)){
var statearr_38087_39099 = state_38078__$1;
(statearr_38087_39099[(1)] = (29));

} else {
var statearr_38088_39101 = state_38078__$1;
(statearr_38088_39101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (4))){
var inst_37996 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_37996)){
var statearr_38089_39102 = state_38078__$1;
(statearr_38089_39102[(1)] = (8));

} else {
var statearr_38090_39103 = state_38078__$1;
(statearr_38090_39103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (15))){
var inst_38023 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38023)){
var statearr_38091_39104 = state_38078__$1;
(statearr_38091_39104[(1)] = (19));

} else {
var statearr_38092_39105 = state_38078__$1;
(statearr_38092_39105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (21))){
var inst_38028 = (state_38078[(12)]);
var inst_38028__$1 = (state_38078[(2)]);
var inst_38029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38028__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38028__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38028__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38078__$1 = (function (){var statearr_38093 = state_38078;
(statearr_38093[(10)] = inst_38029);

(statearr_38093[(13)] = inst_38030);

(statearr_38093[(12)] = inst_38028__$1);

return statearr_38093;
})();
return cljs.core.async.ioc_alts_BANG_(state_38078__$1,(22),inst_38031);
} else {
if((state_val_38079 === (31))){
var inst_38060 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38060)){
var statearr_38094_39108 = state_38078__$1;
(statearr_38094_39108[(1)] = (32));

} else {
var statearr_38095_39109 = state_38078__$1;
(statearr_38095_39109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (32))){
var inst_38037 = (state_38078[(14)]);
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38078__$1,(35),out,inst_38037);
} else {
if((state_val_38079 === (33))){
var inst_38028 = (state_38078[(12)]);
var inst_38005 = inst_38028;
var state_38078__$1 = (function (){var statearr_38096 = state_38078;
(statearr_38096[(7)] = inst_38005);

return statearr_38096;
})();
var statearr_38097_39121 = state_38078__$1;
(statearr_38097_39121[(2)] = null);

(statearr_38097_39121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (13))){
var inst_38005 = (state_38078[(7)]);
var inst_38012 = inst_38005.cljs$lang$protocol_mask$partition0$;
var inst_38013 = (inst_38012 & (64));
var inst_38014 = inst_38005.cljs$core$ISeq$;
var inst_38015 = (cljs.core.PROTOCOL_SENTINEL === inst_38014);
var inst_38016 = ((inst_38013) || (inst_38015));
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38016)){
var statearr_38098_39125 = state_38078__$1;
(statearr_38098_39125[(1)] = (16));

} else {
var statearr_38099_39126 = state_38078__$1;
(statearr_38099_39126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (22))){
var inst_38037 = (state_38078[(14)]);
var inst_38038 = (state_38078[(11)]);
var inst_38036 = (state_38078[(2)]);
var inst_38037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38036,(0),null);
var inst_38038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38036,(1),null);
var inst_38039 = (inst_38037__$1 == null);
var inst_38040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38038__$1,change);
var inst_38041 = ((inst_38039) || (inst_38040));
var state_38078__$1 = (function (){var statearr_38100 = state_38078;
(statearr_38100[(14)] = inst_38037__$1);

(statearr_38100[(11)] = inst_38038__$1);

return statearr_38100;
})();
if(cljs.core.truth_(inst_38041)){
var statearr_38101_39131 = state_38078__$1;
(statearr_38101_39131[(1)] = (23));

} else {
var statearr_38102_39132 = state_38078__$1;
(statearr_38102_39132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (36))){
var inst_38028 = (state_38078[(12)]);
var inst_38005 = inst_38028;
var state_38078__$1 = (function (){var statearr_38103 = state_38078;
(statearr_38103[(7)] = inst_38005);

return statearr_38103;
})();
var statearr_38104_39133 = state_38078__$1;
(statearr_38104_39133[(2)] = null);

(statearr_38104_39133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (29))){
var inst_38052 = (state_38078[(9)]);
var state_38078__$1 = state_38078;
var statearr_38105_39134 = state_38078__$1;
(statearr_38105_39134[(2)] = inst_38052);

(statearr_38105_39134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (6))){
var state_38078__$1 = state_38078;
var statearr_38106_39135 = state_38078__$1;
(statearr_38106_39135[(2)] = false);

(statearr_38106_39135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (28))){
var inst_38048 = (state_38078[(2)]);
var inst_38049 = calc_state();
var inst_38005 = inst_38049;
var state_38078__$1 = (function (){var statearr_38107 = state_38078;
(statearr_38107[(15)] = inst_38048);

(statearr_38107[(7)] = inst_38005);

return statearr_38107;
})();
var statearr_38108_39136 = state_38078__$1;
(statearr_38108_39136[(2)] = null);

(statearr_38108_39136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (25))){
var inst_38074 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38109_39137 = state_38078__$1;
(statearr_38109_39137[(2)] = inst_38074);

(statearr_38109_39137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (34))){
var inst_38072 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38110_39138 = state_38078__$1;
(statearr_38110_39138[(2)] = inst_38072);

(statearr_38110_39138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (17))){
var state_38078__$1 = state_38078;
var statearr_38111_39139 = state_38078__$1;
(statearr_38111_39139[(2)] = false);

(statearr_38111_39139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (3))){
var state_38078__$1 = state_38078;
var statearr_38112_39140 = state_38078__$1;
(statearr_38112_39140[(2)] = false);

(statearr_38112_39140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (12))){
var inst_38076 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38078__$1,inst_38076);
} else {
if((state_val_38079 === (2))){
var inst_37980 = (state_38078[(8)]);
var inst_37985 = inst_37980.cljs$lang$protocol_mask$partition0$;
var inst_37986 = (inst_37985 & (64));
var inst_37987 = inst_37980.cljs$core$ISeq$;
var inst_37988 = (cljs.core.PROTOCOL_SENTINEL === inst_37987);
var inst_37989 = ((inst_37986) || (inst_37988));
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_37989)){
var statearr_38113_39141 = state_38078__$1;
(statearr_38113_39141[(1)] = (5));

} else {
var statearr_38114_39142 = state_38078__$1;
(statearr_38114_39142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (23))){
var inst_38037 = (state_38078[(14)]);
var inst_38043 = (inst_38037 == null);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38043)){
var statearr_38115_39143 = state_38078__$1;
(statearr_38115_39143[(1)] = (26));

} else {
var statearr_38116_39144 = state_38078__$1;
(statearr_38116_39144[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (35))){
var inst_38063 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38063)){
var statearr_38117_39145 = state_38078__$1;
(statearr_38117_39145[(1)] = (36));

} else {
var statearr_38118_39146 = state_38078__$1;
(statearr_38118_39146[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (19))){
var inst_38005 = (state_38078[(7)]);
var inst_38025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38005);
var state_38078__$1 = state_38078;
var statearr_38119_39147 = state_38078__$1;
(statearr_38119_39147[(2)] = inst_38025);

(statearr_38119_39147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (11))){
var inst_38005 = (state_38078[(7)]);
var inst_38009 = (inst_38005 == null);
var inst_38010 = cljs.core.not(inst_38009);
var state_38078__$1 = state_38078;
if(inst_38010){
var statearr_38120_39148 = state_38078__$1;
(statearr_38120_39148[(1)] = (13));

} else {
var statearr_38121_39149 = state_38078__$1;
(statearr_38121_39149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (9))){
var inst_37980 = (state_38078[(8)]);
var state_38078__$1 = state_38078;
var statearr_38122_39150 = state_38078__$1;
(statearr_38122_39150[(2)] = inst_37980);

(statearr_38122_39150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (5))){
var state_38078__$1 = state_38078;
var statearr_38123_39151 = state_38078__$1;
(statearr_38123_39151[(2)] = true);

(statearr_38123_39151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (14))){
var state_38078__$1 = state_38078;
var statearr_38124_39152 = state_38078__$1;
(statearr_38124_39152[(2)] = false);

(statearr_38124_39152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (26))){
var inst_38038 = (state_38078[(11)]);
var inst_38045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38038);
var state_38078__$1 = state_38078;
var statearr_38125_39153 = state_38078__$1;
(statearr_38125_39153[(2)] = inst_38045);

(statearr_38125_39153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (16))){
var state_38078__$1 = state_38078;
var statearr_38126_39154 = state_38078__$1;
(statearr_38126_39154[(2)] = true);

(statearr_38126_39154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (38))){
var inst_38068 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38127_39155 = state_38078__$1;
(statearr_38127_39155[(2)] = inst_38068);

(statearr_38127_39155[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (30))){
var inst_38029 = (state_38078[(10)]);
var inst_38038 = (state_38078[(11)]);
var inst_38030 = (state_38078[(13)]);
var inst_38055 = cljs.core.empty_QMARK_(inst_38029);
var inst_38056 = (inst_38030.cljs$core$IFn$_invoke$arity$1 ? inst_38030.cljs$core$IFn$_invoke$arity$1(inst_38038) : inst_38030.call(null,inst_38038));
var inst_38057 = cljs.core.not(inst_38056);
var inst_38058 = ((inst_38055) && (inst_38057));
var state_38078__$1 = state_38078;
var statearr_38128_39156 = state_38078__$1;
(statearr_38128_39156[(2)] = inst_38058);

(statearr_38128_39156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (10))){
var inst_37980 = (state_38078[(8)]);
var inst_38001 = (state_38078[(2)]);
var inst_38002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38001,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38001,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38001,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38005 = inst_37980;
var state_38078__$1 = (function (){var statearr_38129 = state_38078;
(statearr_38129[(16)] = inst_38002);

(statearr_38129[(17)] = inst_38003);

(statearr_38129[(7)] = inst_38005);

(statearr_38129[(18)] = inst_38004);

return statearr_38129;
})();
var statearr_38130_39157 = state_38078__$1;
(statearr_38130_39157[(2)] = null);

(statearr_38130_39157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (18))){
var inst_38020 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38131_39158 = state_38078__$1;
(statearr_38131_39158[(2)] = inst_38020);

(statearr_38131_39158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (37))){
var state_38078__$1 = state_38078;
var statearr_38132_39159 = state_38078__$1;
(statearr_38132_39159[(2)] = null);

(statearr_38132_39159[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (8))){
var inst_37980 = (state_38078[(8)]);
var inst_37998 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37980);
var state_38078__$1 = state_38078;
var statearr_38133_39160 = state_38078__$1;
(statearr_38133_39160[(2)] = inst_37998);

(statearr_38133_39160[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__37203__auto__ = null;
var cljs$core$async$mix_$_state_machine__37203__auto____0 = (function (){
var statearr_38134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38134[(0)] = cljs$core$async$mix_$_state_machine__37203__auto__);

(statearr_38134[(1)] = (1));

return statearr_38134;
});
var cljs$core$async$mix_$_state_machine__37203__auto____1 = (function (state_38078){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38078);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38135){if((e38135 instanceof Object)){
var ex__37206__auto__ = e38135;
var statearr_38136_39161 = state_38078;
(statearr_38136_39161[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39162 = state_38078;
state_38078 = G__39162;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37203__auto__ = function(state_38078){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37203__auto____1.call(this,state_38078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37203__auto____0;
cljs$core$async$mix_$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37203__auto____1;
return cljs$core$async$mix_$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38137 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38137[(6)] = c__37270__auto___39087);

return statearr_38137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var G__38139 = arguments.length;
switch (G__38139) {
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
var G__38142 = arguments.length;
switch (G__38142) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38140_SHARP_){
if(cljs.core.truth_((p1__38140_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38140_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38140_SHARP_.call(null,topic)))){
return p1__38140_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38140_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38143 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38144){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38144 = meta38144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38145,meta38144__$1){
var self__ = this;
var _38145__$1 = this;
return (new cljs.core.async.t_cljs$core$async38143(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38144__$1));
}));

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38145){
var self__ = this;
var _38145__$1 = this;
return self__.meta38144;
}));

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38144","meta38144",-877003207,null)], null);
}));

(cljs.core.async.t_cljs$core$async38143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38143");

(cljs.core.async.t_cljs$core$async38143.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38143.
 */
cljs.core.async.__GT_t_cljs$core$async38143 = (function cljs$core$async$__GT_t_cljs$core$async38143(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38144){
return (new cljs.core.async.t_cljs$core$async38143(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38144));
});

}

return (new cljs.core.async.t_cljs$core$async38143(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37270__auto___39166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38217){
var state_val_38218 = (state_38217[(1)]);
if((state_val_38218 === (7))){
var inst_38213 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38219_39168 = state_38217__$1;
(statearr_38219_39168[(2)] = inst_38213);

(statearr_38219_39168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (20))){
var state_38217__$1 = state_38217;
var statearr_38220_39169 = state_38217__$1;
(statearr_38220_39169[(2)] = null);

(statearr_38220_39169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (1))){
var state_38217__$1 = state_38217;
var statearr_38221_39170 = state_38217__$1;
(statearr_38221_39170[(2)] = null);

(statearr_38221_39170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (24))){
var inst_38196 = (state_38217[(7)]);
var inst_38205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38196);
var state_38217__$1 = state_38217;
var statearr_38222_39171 = state_38217__$1;
(statearr_38222_39171[(2)] = inst_38205);

(statearr_38222_39171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (4))){
var inst_38148 = (state_38217[(8)]);
var inst_38148__$1 = (state_38217[(2)]);
var inst_38149 = (inst_38148__$1 == null);
var state_38217__$1 = (function (){var statearr_38223 = state_38217;
(statearr_38223[(8)] = inst_38148__$1);

return statearr_38223;
})();
if(cljs.core.truth_(inst_38149)){
var statearr_38224_39172 = state_38217__$1;
(statearr_38224_39172[(1)] = (5));

} else {
var statearr_38225_39173 = state_38217__$1;
(statearr_38225_39173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (15))){
var inst_38190 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38226_39175 = state_38217__$1;
(statearr_38226_39175[(2)] = inst_38190);

(statearr_38226_39175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (21))){
var inst_38210 = (state_38217[(2)]);
var state_38217__$1 = (function (){var statearr_38227 = state_38217;
(statearr_38227[(9)] = inst_38210);

return statearr_38227;
})();
var statearr_38228_39177 = state_38217__$1;
(statearr_38228_39177[(2)] = null);

(statearr_38228_39177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (13))){
var inst_38172 = (state_38217[(10)]);
var inst_38174 = cljs.core.chunked_seq_QMARK_(inst_38172);
var state_38217__$1 = state_38217;
if(inst_38174){
var statearr_38229_39178 = state_38217__$1;
(statearr_38229_39178[(1)] = (16));

} else {
var statearr_38230_39179 = state_38217__$1;
(statearr_38230_39179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (22))){
var inst_38202 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38202)){
var statearr_38231_39180 = state_38217__$1;
(statearr_38231_39180[(1)] = (23));

} else {
var statearr_38232_39181 = state_38217__$1;
(statearr_38232_39181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (6))){
var inst_38196 = (state_38217[(7)]);
var inst_38198 = (state_38217[(11)]);
var inst_38148 = (state_38217[(8)]);
var inst_38196__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38148) : topic_fn.call(null,inst_38148));
var inst_38197 = cljs.core.deref(mults);
var inst_38198__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38197,inst_38196__$1);
var state_38217__$1 = (function (){var statearr_38233 = state_38217;
(statearr_38233[(7)] = inst_38196__$1);

(statearr_38233[(11)] = inst_38198__$1);

return statearr_38233;
})();
if(cljs.core.truth_(inst_38198__$1)){
var statearr_38234_39183 = state_38217__$1;
(statearr_38234_39183[(1)] = (19));

} else {
var statearr_38235_39185 = state_38217__$1;
(statearr_38235_39185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (25))){
var inst_38207 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38236_39186 = state_38217__$1;
(statearr_38236_39186[(2)] = inst_38207);

(statearr_38236_39186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (17))){
var inst_38172 = (state_38217[(10)]);
var inst_38181 = cljs.core.first(inst_38172);
var inst_38182 = cljs.core.async.muxch_STAR_(inst_38181);
var inst_38183 = cljs.core.async.close_BANG_(inst_38182);
var inst_38184 = cljs.core.next(inst_38172);
var inst_38158 = inst_38184;
var inst_38159 = null;
var inst_38160 = (0);
var inst_38161 = (0);
var state_38217__$1 = (function (){var statearr_38237 = state_38217;
(statearr_38237[(12)] = inst_38159);

(statearr_38237[(13)] = inst_38158);

(statearr_38237[(14)] = inst_38160);

(statearr_38237[(15)] = inst_38161);

(statearr_38237[(16)] = inst_38183);

return statearr_38237;
})();
var statearr_38238_39187 = state_38217__$1;
(statearr_38238_39187[(2)] = null);

(statearr_38238_39187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (3))){
var inst_38215 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38217__$1,inst_38215);
} else {
if((state_val_38218 === (12))){
var inst_38192 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38239_39188 = state_38217__$1;
(statearr_38239_39188[(2)] = inst_38192);

(statearr_38239_39188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (2))){
var state_38217__$1 = state_38217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38217__$1,(4),ch);
} else {
if((state_val_38218 === (23))){
var state_38217__$1 = state_38217;
var statearr_38240_39190 = state_38217__$1;
(statearr_38240_39190[(2)] = null);

(statearr_38240_39190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (19))){
var inst_38198 = (state_38217[(11)]);
var inst_38148 = (state_38217[(8)]);
var inst_38200 = cljs.core.async.muxch_STAR_(inst_38198);
var state_38217__$1 = state_38217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38217__$1,(22),inst_38200,inst_38148);
} else {
if((state_val_38218 === (11))){
var inst_38158 = (state_38217[(13)]);
var inst_38172 = (state_38217[(10)]);
var inst_38172__$1 = cljs.core.seq(inst_38158);
var state_38217__$1 = (function (){var statearr_38241 = state_38217;
(statearr_38241[(10)] = inst_38172__$1);

return statearr_38241;
})();
if(inst_38172__$1){
var statearr_38242_39192 = state_38217__$1;
(statearr_38242_39192[(1)] = (13));

} else {
var statearr_38243_39193 = state_38217__$1;
(statearr_38243_39193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (9))){
var inst_38194 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38244_39194 = state_38217__$1;
(statearr_38244_39194[(2)] = inst_38194);

(statearr_38244_39194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (5))){
var inst_38155 = cljs.core.deref(mults);
var inst_38156 = cljs.core.vals(inst_38155);
var inst_38157 = cljs.core.seq(inst_38156);
var inst_38158 = inst_38157;
var inst_38159 = null;
var inst_38160 = (0);
var inst_38161 = (0);
var state_38217__$1 = (function (){var statearr_38245 = state_38217;
(statearr_38245[(12)] = inst_38159);

(statearr_38245[(13)] = inst_38158);

(statearr_38245[(14)] = inst_38160);

(statearr_38245[(15)] = inst_38161);

return statearr_38245;
})();
var statearr_38246_39197 = state_38217__$1;
(statearr_38246_39197[(2)] = null);

(statearr_38246_39197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (14))){
var state_38217__$1 = state_38217;
var statearr_38250_39198 = state_38217__$1;
(statearr_38250_39198[(2)] = null);

(statearr_38250_39198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (16))){
var inst_38172 = (state_38217[(10)]);
var inst_38176 = cljs.core.chunk_first(inst_38172);
var inst_38177 = cljs.core.chunk_rest(inst_38172);
var inst_38178 = cljs.core.count(inst_38176);
var inst_38158 = inst_38177;
var inst_38159 = inst_38176;
var inst_38160 = inst_38178;
var inst_38161 = (0);
var state_38217__$1 = (function (){var statearr_38251 = state_38217;
(statearr_38251[(12)] = inst_38159);

(statearr_38251[(13)] = inst_38158);

(statearr_38251[(14)] = inst_38160);

(statearr_38251[(15)] = inst_38161);

return statearr_38251;
})();
var statearr_38252_39199 = state_38217__$1;
(statearr_38252_39199[(2)] = null);

(statearr_38252_39199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (10))){
var inst_38159 = (state_38217[(12)]);
var inst_38158 = (state_38217[(13)]);
var inst_38160 = (state_38217[(14)]);
var inst_38161 = (state_38217[(15)]);
var inst_38166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38159,inst_38161);
var inst_38167 = cljs.core.async.muxch_STAR_(inst_38166);
var inst_38168 = cljs.core.async.close_BANG_(inst_38167);
var inst_38169 = (inst_38161 + (1));
var tmp38247 = inst_38159;
var tmp38248 = inst_38158;
var tmp38249 = inst_38160;
var inst_38158__$1 = tmp38248;
var inst_38159__$1 = tmp38247;
var inst_38160__$1 = tmp38249;
var inst_38161__$1 = inst_38169;
var state_38217__$1 = (function (){var statearr_38253 = state_38217;
(statearr_38253[(17)] = inst_38168);

(statearr_38253[(12)] = inst_38159__$1);

(statearr_38253[(13)] = inst_38158__$1);

(statearr_38253[(14)] = inst_38160__$1);

(statearr_38253[(15)] = inst_38161__$1);

return statearr_38253;
})();
var statearr_38254_39200 = state_38217__$1;
(statearr_38254_39200[(2)] = null);

(statearr_38254_39200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (18))){
var inst_38187 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38255_39201 = state_38217__$1;
(statearr_38255_39201[(2)] = inst_38187);

(statearr_38255_39201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (8))){
var inst_38160 = (state_38217[(14)]);
var inst_38161 = (state_38217[(15)]);
var inst_38163 = (inst_38161 < inst_38160);
var inst_38164 = inst_38163;
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38164)){
var statearr_38256_39202 = state_38217__$1;
(statearr_38256_39202[(1)] = (10));

} else {
var statearr_38257_39203 = state_38217__$1;
(statearr_38257_39203[(1)] = (11));

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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38258[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38258[(1)] = (1));

return statearr_38258;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38217){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38217);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38259){if((e38259 instanceof Object)){
var ex__37206__auto__ = e38259;
var statearr_38260_39204 = state_38217;
(statearr_38260_39204[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39205 = state_38217;
state_38217 = G__39205;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38261 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38261[(6)] = c__37270__auto___39166);

return statearr_38261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var G__38263 = arguments.length;
switch (G__38263) {
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
var G__38265 = arguments.length;
switch (G__38265) {
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
var G__38267 = arguments.length;
switch (G__38267) {
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
var c__37270__auto___39209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38306){
var state_val_38307 = (state_38306[(1)]);
if((state_val_38307 === (7))){
var state_38306__$1 = state_38306;
var statearr_38308_39210 = state_38306__$1;
(statearr_38308_39210[(2)] = null);

(statearr_38308_39210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (1))){
var state_38306__$1 = state_38306;
var statearr_38309_39211 = state_38306__$1;
(statearr_38309_39211[(2)] = null);

(statearr_38309_39211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (4))){
var inst_38270 = (state_38306[(7)]);
var inst_38272 = (inst_38270 < cnt);
var state_38306__$1 = state_38306;
if(cljs.core.truth_(inst_38272)){
var statearr_38310_39212 = state_38306__$1;
(statearr_38310_39212[(1)] = (6));

} else {
var statearr_38311_39213 = state_38306__$1;
(statearr_38311_39213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (15))){
var inst_38302 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
var statearr_38312_39215 = state_38306__$1;
(statearr_38312_39215[(2)] = inst_38302);

(statearr_38312_39215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (13))){
var inst_38295 = cljs.core.async.close_BANG_(out);
var state_38306__$1 = state_38306;
var statearr_38313_39216 = state_38306__$1;
(statearr_38313_39216[(2)] = inst_38295);

(statearr_38313_39216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (6))){
var state_38306__$1 = state_38306;
var statearr_38314_39217 = state_38306__$1;
(statearr_38314_39217[(2)] = null);

(statearr_38314_39217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (3))){
var inst_38304 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38306__$1,inst_38304);
} else {
if((state_val_38307 === (12))){
var inst_38292 = (state_38306[(8)]);
var inst_38292__$1 = (state_38306[(2)]);
var inst_38293 = cljs.core.some(cljs.core.nil_QMARK_,inst_38292__$1);
var state_38306__$1 = (function (){var statearr_38315 = state_38306;
(statearr_38315[(8)] = inst_38292__$1);

return statearr_38315;
})();
if(cljs.core.truth_(inst_38293)){
var statearr_38316_39219 = state_38306__$1;
(statearr_38316_39219[(1)] = (13));

} else {
var statearr_38317_39220 = state_38306__$1;
(statearr_38317_39220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (2))){
var inst_38269 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38270 = (0);
var state_38306__$1 = (function (){var statearr_38318 = state_38306;
(statearr_38318[(9)] = inst_38269);

(statearr_38318[(7)] = inst_38270);

return statearr_38318;
})();
var statearr_38319_39221 = state_38306__$1;
(statearr_38319_39221[(2)] = null);

(statearr_38319_39221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (11))){
var inst_38270 = (state_38306[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38306,(10),Object,null,(9));
var inst_38279 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38270) : chs__$1.call(null,inst_38270));
var inst_38280 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38270) : done.call(null,inst_38270));
var inst_38281 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38279,inst_38280);
var state_38306__$1 = state_38306;
var statearr_38320_39225 = state_38306__$1;
(statearr_38320_39225[(2)] = inst_38281);


cljs.core.async.impl.ioc_helpers.process_exception(state_38306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (9))){
var inst_38270 = (state_38306[(7)]);
var inst_38283 = (state_38306[(2)]);
var inst_38284 = (inst_38270 + (1));
var inst_38270__$1 = inst_38284;
var state_38306__$1 = (function (){var statearr_38321 = state_38306;
(statearr_38321[(7)] = inst_38270__$1);

(statearr_38321[(10)] = inst_38283);

return statearr_38321;
})();
var statearr_38322_39226 = state_38306__$1;
(statearr_38322_39226[(2)] = null);

(statearr_38322_39226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (5))){
var inst_38290 = (state_38306[(2)]);
var state_38306__$1 = (function (){var statearr_38323 = state_38306;
(statearr_38323[(11)] = inst_38290);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38306__$1,(12),dchan);
} else {
if((state_val_38307 === (14))){
var inst_38292 = (state_38306[(8)]);
var inst_38297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38292);
var state_38306__$1 = state_38306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38306__$1,(16),out,inst_38297);
} else {
if((state_val_38307 === (16))){
var inst_38299 = (state_38306[(2)]);
var state_38306__$1 = (function (){var statearr_38324 = state_38306;
(statearr_38324[(12)] = inst_38299);

return statearr_38324;
})();
var statearr_38325_39228 = state_38306__$1;
(statearr_38325_39228[(2)] = null);

(statearr_38325_39228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (10))){
var inst_38274 = (state_38306[(2)]);
var inst_38275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38306__$1 = (function (){var statearr_38326 = state_38306;
(statearr_38326[(13)] = inst_38274);

return statearr_38326;
})();
var statearr_38327_39229 = state_38306__$1;
(statearr_38327_39229[(2)] = inst_38275);


cljs.core.async.impl.ioc_helpers.process_exception(state_38306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38307 === (8))){
var inst_38288 = (state_38306[(2)]);
var state_38306__$1 = state_38306;
var statearr_38328_39232 = state_38306__$1;
(statearr_38328_39232[(2)] = inst_38288);

(statearr_38328_39232[(1)] = (5));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38329[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38329[(1)] = (1));

return statearr_38329;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38306){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38306);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38330){if((e38330 instanceof Object)){
var ex__37206__auto__ = e38330;
var statearr_38331_39234 = state_38306;
(statearr_38331_39234[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39235 = state_38306;
state_38306 = G__39235;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38332 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38332[(6)] = c__37270__auto___39209);

return statearr_38332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var G__38335 = arguments.length;
switch (G__38335) {
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
var c__37270__auto___39237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (7))){
var inst_38347 = (state_38367[(7)]);
var inst_38346 = (state_38367[(8)]);
var inst_38346__$1 = (state_38367[(2)]);
var inst_38347__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38346__$1,(0),null);
var inst_38348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38346__$1,(1),null);
var inst_38349 = (inst_38347__$1 == null);
var state_38367__$1 = (function (){var statearr_38369 = state_38367;
(statearr_38369[(7)] = inst_38347__$1);

(statearr_38369[(9)] = inst_38348);

(statearr_38369[(8)] = inst_38346__$1);

return statearr_38369;
})();
if(cljs.core.truth_(inst_38349)){
var statearr_38370_39238 = state_38367__$1;
(statearr_38370_39238[(1)] = (8));

} else {
var statearr_38371_39239 = state_38367__$1;
(statearr_38371_39239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (1))){
var inst_38336 = cljs.core.vec(chs);
var inst_38337 = inst_38336;
var state_38367__$1 = (function (){var statearr_38372 = state_38367;
(statearr_38372[(10)] = inst_38337);

return statearr_38372;
})();
var statearr_38373_39240 = state_38367__$1;
(statearr_38373_39240[(2)] = null);

(statearr_38373_39240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (4))){
var inst_38337 = (state_38367[(10)]);
var state_38367__$1 = state_38367;
return cljs.core.async.ioc_alts_BANG_(state_38367__$1,(7),inst_38337);
} else {
if((state_val_38368 === (6))){
var inst_38363 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38374_39241 = state_38367__$1;
(statearr_38374_39241[(2)] = inst_38363);

(statearr_38374_39241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (3))){
var inst_38365 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38367__$1,inst_38365);
} else {
if((state_val_38368 === (2))){
var inst_38337 = (state_38367[(10)]);
var inst_38339 = cljs.core.count(inst_38337);
var inst_38340 = (inst_38339 > (0));
var state_38367__$1 = state_38367;
if(cljs.core.truth_(inst_38340)){
var statearr_38376_39242 = state_38367__$1;
(statearr_38376_39242[(1)] = (4));

} else {
var statearr_38377_39243 = state_38367__$1;
(statearr_38377_39243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (11))){
var inst_38337 = (state_38367[(10)]);
var inst_38356 = (state_38367[(2)]);
var tmp38375 = inst_38337;
var inst_38337__$1 = tmp38375;
var state_38367__$1 = (function (){var statearr_38378 = state_38367;
(statearr_38378[(11)] = inst_38356);

(statearr_38378[(10)] = inst_38337__$1);

return statearr_38378;
})();
var statearr_38379_39244 = state_38367__$1;
(statearr_38379_39244[(2)] = null);

(statearr_38379_39244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (9))){
var inst_38347 = (state_38367[(7)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38367__$1,(11),out,inst_38347);
} else {
if((state_val_38368 === (5))){
var inst_38361 = cljs.core.async.close_BANG_(out);
var state_38367__$1 = state_38367;
var statearr_38380_39245 = state_38367__$1;
(statearr_38380_39245[(2)] = inst_38361);

(statearr_38380_39245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (10))){
var inst_38359 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38381_39246 = state_38367__$1;
(statearr_38381_39246[(2)] = inst_38359);

(statearr_38381_39246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (8))){
var inst_38347 = (state_38367[(7)]);
var inst_38348 = (state_38367[(9)]);
var inst_38346 = (state_38367[(8)]);
var inst_38337 = (state_38367[(10)]);
var inst_38351 = (function (){var cs = inst_38337;
var vec__38342 = inst_38346;
var v = inst_38347;
var c = inst_38348;
return (function (p1__38333_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38333_SHARP_);
});
})();
var inst_38352 = cljs.core.filterv(inst_38351,inst_38337);
var inst_38337__$1 = inst_38352;
var state_38367__$1 = (function (){var statearr_38382 = state_38367;
(statearr_38382[(10)] = inst_38337__$1);

return statearr_38382;
})();
var statearr_38383_39247 = state_38367__$1;
(statearr_38383_39247[(2)] = null);

(statearr_38383_39247[(1)] = (2));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38384[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38384[(1)] = (1));

return statearr_38384;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38367){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38367);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38385){if((e38385 instanceof Object)){
var ex__37206__auto__ = e38385;
var statearr_38386_39248 = state_38367;
(statearr_38386_39248[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39249 = state_38367;
state_38367 = G__39249;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38387 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38387[(6)] = c__37270__auto___39237);

return statearr_38387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
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
var G__38389 = arguments.length;
switch (G__38389) {
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
var c__37270__auto___39251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38413){
var state_val_38414 = (state_38413[(1)]);
if((state_val_38414 === (7))){
var inst_38395 = (state_38413[(7)]);
var inst_38395__$1 = (state_38413[(2)]);
var inst_38396 = (inst_38395__$1 == null);
var inst_38397 = cljs.core.not(inst_38396);
var state_38413__$1 = (function (){var statearr_38415 = state_38413;
(statearr_38415[(7)] = inst_38395__$1);

return statearr_38415;
})();
if(inst_38397){
var statearr_38416_39252 = state_38413__$1;
(statearr_38416_39252[(1)] = (8));

} else {
var statearr_38417_39253 = state_38413__$1;
(statearr_38417_39253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (1))){
var inst_38390 = (0);
var state_38413__$1 = (function (){var statearr_38418 = state_38413;
(statearr_38418[(8)] = inst_38390);

return statearr_38418;
})();
var statearr_38419_39254 = state_38413__$1;
(statearr_38419_39254[(2)] = null);

(statearr_38419_39254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (4))){
var state_38413__$1 = state_38413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38413__$1,(7),ch);
} else {
if((state_val_38414 === (6))){
var inst_38408 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38420_39255 = state_38413__$1;
(statearr_38420_39255[(2)] = inst_38408);

(statearr_38420_39255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (3))){
var inst_38410 = (state_38413[(2)]);
var inst_38411 = cljs.core.async.close_BANG_(out);
var state_38413__$1 = (function (){var statearr_38421 = state_38413;
(statearr_38421[(9)] = inst_38410);

return statearr_38421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38413__$1,inst_38411);
} else {
if((state_val_38414 === (2))){
var inst_38390 = (state_38413[(8)]);
var inst_38392 = (inst_38390 < n);
var state_38413__$1 = state_38413;
if(cljs.core.truth_(inst_38392)){
var statearr_38422_39256 = state_38413__$1;
(statearr_38422_39256[(1)] = (4));

} else {
var statearr_38423_39257 = state_38413__$1;
(statearr_38423_39257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (11))){
var inst_38390 = (state_38413[(8)]);
var inst_38400 = (state_38413[(2)]);
var inst_38401 = (inst_38390 + (1));
var inst_38390__$1 = inst_38401;
var state_38413__$1 = (function (){var statearr_38424 = state_38413;
(statearr_38424[(10)] = inst_38400);

(statearr_38424[(8)] = inst_38390__$1);

return statearr_38424;
})();
var statearr_38425_39258 = state_38413__$1;
(statearr_38425_39258[(2)] = null);

(statearr_38425_39258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (9))){
var state_38413__$1 = state_38413;
var statearr_38426_39259 = state_38413__$1;
(statearr_38426_39259[(2)] = null);

(statearr_38426_39259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (5))){
var state_38413__$1 = state_38413;
var statearr_38427_39260 = state_38413__$1;
(statearr_38427_39260[(2)] = null);

(statearr_38427_39260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (10))){
var inst_38405 = (state_38413[(2)]);
var state_38413__$1 = state_38413;
var statearr_38428_39261 = state_38413__$1;
(statearr_38428_39261[(2)] = inst_38405);

(statearr_38428_39261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38414 === (8))){
var inst_38395 = (state_38413[(7)]);
var state_38413__$1 = state_38413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38413__$1,(11),out,inst_38395);
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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38429[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38429[(1)] = (1));

return statearr_38429;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38413){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38413);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38430){if((e38430 instanceof Object)){
var ex__37206__auto__ = e38430;
var statearr_38431_39262 = state_38413;
(statearr_38431_39262[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39263 = state_38413;
state_38413 = G__39263;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38432 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38432[(6)] = c__37270__auto___39251);

return statearr_38432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38434 = (function (f,ch,meta38435){
this.f = f;
this.ch = ch;
this.meta38435 = meta38435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38436,meta38435__$1){
var self__ = this;
var _38436__$1 = this;
return (new cljs.core.async.t_cljs$core$async38434(self__.f,self__.ch,meta38435__$1));
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38436){
var self__ = this;
var _38436__$1 = this;
return self__.meta38435;
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38437 = (function (f,ch,meta38435,_,fn1,meta38438){
this.f = f;
this.ch = ch;
this.meta38435 = meta38435;
this._ = _;
this.fn1 = fn1;
this.meta38438 = meta38438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38439,meta38438__$1){
var self__ = this;
var _38439__$1 = this;
return (new cljs.core.async.t_cljs$core$async38437(self__.f,self__.ch,self__.meta38435,self__._,self__.fn1,meta38438__$1));
}));

(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38439){
var self__ = this;
var _38439__$1 = this;
return self__.meta38438;
}));

(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38433_SHARP_){
var G__38440 = (((p1__38433_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38433_SHARP_) : self__.f.call(null,p1__38433_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38440) : f1.call(null,G__38440));
});
}));

(cljs.core.async.t_cljs$core$async38437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38435","meta38435",1748209632,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38434","cljs.core.async/t_cljs$core$async38434",-722205186,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38438","meta38438",-994765694,null)], null);
}));

(cljs.core.async.t_cljs$core$async38437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38437");

(cljs.core.async.t_cljs$core$async38437.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38437.
 */
cljs.core.async.__GT_t_cljs$core$async38437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38437(f__$1,ch__$1,meta38435__$1,___$2,fn1__$1,meta38438){
return (new cljs.core.async.t_cljs$core$async38437(f__$1,ch__$1,meta38435__$1,___$2,fn1__$1,meta38438));
});

}

return (new cljs.core.async.t_cljs$core$async38437(self__.f,self__.ch,self__.meta38435,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38441 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38441) : self__.f.call(null,G__38441));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38435","meta38435",1748209632,null)], null);
}));

(cljs.core.async.t_cljs$core$async38434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38434");

(cljs.core.async.t_cljs$core$async38434.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38434.
 */
cljs.core.async.__GT_t_cljs$core$async38434 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38434(f__$1,ch__$1,meta38435){
return (new cljs.core.async.t_cljs$core$async38434(f__$1,ch__$1,meta38435));
});

}

return (new cljs.core.async.t_cljs$core$async38434(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38442 = (function (f,ch,meta38443){
this.f = f;
this.ch = ch;
this.meta38443 = meta38443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38444,meta38443__$1){
var self__ = this;
var _38444__$1 = this;
return (new cljs.core.async.t_cljs$core$async38442(self__.f,self__.ch,meta38443__$1));
}));

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38444){
var self__ = this;
var _38444__$1 = this;
return self__.meta38443;
}));

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38443","meta38443",-1730399884,null)], null);
}));

(cljs.core.async.t_cljs$core$async38442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38442");

(cljs.core.async.t_cljs$core$async38442.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38442.
 */
cljs.core.async.__GT_t_cljs$core$async38442 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38442(f__$1,ch__$1,meta38443){
return (new cljs.core.async.t_cljs$core$async38442(f__$1,ch__$1,meta38443));
});

}

return (new cljs.core.async.t_cljs$core$async38442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38445 = (function (p,ch,meta38446){
this.p = p;
this.ch = ch;
this.meta38446 = meta38446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38447,meta38446__$1){
var self__ = this;
var _38447__$1 = this;
return (new cljs.core.async.t_cljs$core$async38445(self__.p,self__.ch,meta38446__$1));
}));

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38447){
var self__ = this;
var _38447__$1 = this;
return self__.meta38446;
}));

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38446","meta38446",1700985192,null)], null);
}));

(cljs.core.async.t_cljs$core$async38445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38445");

(cljs.core.async.t_cljs$core$async38445.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38445.
 */
cljs.core.async.__GT_t_cljs$core$async38445 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38445(p__$1,ch__$1,meta38446){
return (new cljs.core.async.t_cljs$core$async38445(p__$1,ch__$1,meta38446));
});

}

return (new cljs.core.async.t_cljs$core$async38445(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38449 = arguments.length;
switch (G__38449) {
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
var c__37270__auto___39268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38470){
var state_val_38471 = (state_38470[(1)]);
if((state_val_38471 === (7))){
var inst_38466 = (state_38470[(2)]);
var state_38470__$1 = state_38470;
var statearr_38472_39269 = state_38470__$1;
(statearr_38472_39269[(2)] = inst_38466);

(statearr_38472_39269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (1))){
var state_38470__$1 = state_38470;
var statearr_38473_39270 = state_38470__$1;
(statearr_38473_39270[(2)] = null);

(statearr_38473_39270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (4))){
var inst_38452 = (state_38470[(7)]);
var inst_38452__$1 = (state_38470[(2)]);
var inst_38453 = (inst_38452__$1 == null);
var state_38470__$1 = (function (){var statearr_38474 = state_38470;
(statearr_38474[(7)] = inst_38452__$1);

return statearr_38474;
})();
if(cljs.core.truth_(inst_38453)){
var statearr_38475_39272 = state_38470__$1;
(statearr_38475_39272[(1)] = (5));

} else {
var statearr_38476_39274 = state_38470__$1;
(statearr_38476_39274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (6))){
var inst_38452 = (state_38470[(7)]);
var inst_38457 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38452) : p.call(null,inst_38452));
var state_38470__$1 = state_38470;
if(cljs.core.truth_(inst_38457)){
var statearr_38477_39275 = state_38470__$1;
(statearr_38477_39275[(1)] = (8));

} else {
var statearr_38478_39276 = state_38470__$1;
(statearr_38478_39276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (3))){
var inst_38468 = (state_38470[(2)]);
var state_38470__$1 = state_38470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38470__$1,inst_38468);
} else {
if((state_val_38471 === (2))){
var state_38470__$1 = state_38470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38470__$1,(4),ch);
} else {
if((state_val_38471 === (11))){
var inst_38460 = (state_38470[(2)]);
var state_38470__$1 = state_38470;
var statearr_38479_39277 = state_38470__$1;
(statearr_38479_39277[(2)] = inst_38460);

(statearr_38479_39277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (9))){
var state_38470__$1 = state_38470;
var statearr_38480_39278 = state_38470__$1;
(statearr_38480_39278[(2)] = null);

(statearr_38480_39278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (5))){
var inst_38455 = cljs.core.async.close_BANG_(out);
var state_38470__$1 = state_38470;
var statearr_38481_39279 = state_38470__$1;
(statearr_38481_39279[(2)] = inst_38455);

(statearr_38481_39279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (10))){
var inst_38463 = (state_38470[(2)]);
var state_38470__$1 = (function (){var statearr_38482 = state_38470;
(statearr_38482[(8)] = inst_38463);

return statearr_38482;
})();
var statearr_38483_39280 = state_38470__$1;
(statearr_38483_39280[(2)] = null);

(statearr_38483_39280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (8))){
var inst_38452 = (state_38470[(7)]);
var state_38470__$1 = state_38470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38470__$1,(11),out,inst_38452);
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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38484 = [null,null,null,null,null,null,null,null,null];
(statearr_38484[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38484[(1)] = (1));

return statearr_38484;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38470){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38470);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38485){if((e38485 instanceof Object)){
var ex__37206__auto__ = e38485;
var statearr_38486_39281 = state_38470;
(statearr_38486_39281[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39282 = state_38470;
state_38470 = G__39282;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38487 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38487[(6)] = c__37270__auto___39268);

return statearr_38487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38489 = arguments.length;
switch (G__38489) {
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
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38551){
var state_val_38552 = (state_38551[(1)]);
if((state_val_38552 === (7))){
var inst_38547 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38553_39284 = state_38551__$1;
(statearr_38553_39284[(2)] = inst_38547);

(statearr_38553_39284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (20))){
var inst_38517 = (state_38551[(7)]);
var inst_38528 = (state_38551[(2)]);
var inst_38529 = cljs.core.next(inst_38517);
var inst_38503 = inst_38529;
var inst_38504 = null;
var inst_38505 = (0);
var inst_38506 = (0);
var state_38551__$1 = (function (){var statearr_38554 = state_38551;
(statearr_38554[(8)] = inst_38506);

(statearr_38554[(9)] = inst_38503);

(statearr_38554[(10)] = inst_38504);

(statearr_38554[(11)] = inst_38528);

(statearr_38554[(12)] = inst_38505);

return statearr_38554;
})();
var statearr_38555_39286 = state_38551__$1;
(statearr_38555_39286[(2)] = null);

(statearr_38555_39286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (1))){
var state_38551__$1 = state_38551;
var statearr_38556_39287 = state_38551__$1;
(statearr_38556_39287[(2)] = null);

(statearr_38556_39287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (4))){
var inst_38492 = (state_38551[(13)]);
var inst_38492__$1 = (state_38551[(2)]);
var inst_38493 = (inst_38492__$1 == null);
var state_38551__$1 = (function (){var statearr_38557 = state_38551;
(statearr_38557[(13)] = inst_38492__$1);

return statearr_38557;
})();
if(cljs.core.truth_(inst_38493)){
var statearr_38558_39288 = state_38551__$1;
(statearr_38558_39288[(1)] = (5));

} else {
var statearr_38559_39289 = state_38551__$1;
(statearr_38559_39289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (15))){
var state_38551__$1 = state_38551;
var statearr_38563_39290 = state_38551__$1;
(statearr_38563_39290[(2)] = null);

(statearr_38563_39290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (21))){
var state_38551__$1 = state_38551;
var statearr_38564_39291 = state_38551__$1;
(statearr_38564_39291[(2)] = null);

(statearr_38564_39291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (13))){
var inst_38506 = (state_38551[(8)]);
var inst_38503 = (state_38551[(9)]);
var inst_38504 = (state_38551[(10)]);
var inst_38505 = (state_38551[(12)]);
var inst_38513 = (state_38551[(2)]);
var inst_38514 = (inst_38506 + (1));
var tmp38560 = inst_38503;
var tmp38561 = inst_38504;
var tmp38562 = inst_38505;
var inst_38503__$1 = tmp38560;
var inst_38504__$1 = tmp38561;
var inst_38505__$1 = tmp38562;
var inst_38506__$1 = inst_38514;
var state_38551__$1 = (function (){var statearr_38565 = state_38551;
(statearr_38565[(8)] = inst_38506__$1);

(statearr_38565[(9)] = inst_38503__$1);

(statearr_38565[(10)] = inst_38504__$1);

(statearr_38565[(14)] = inst_38513);

(statearr_38565[(12)] = inst_38505__$1);

return statearr_38565;
})();
var statearr_38566_39292 = state_38551__$1;
(statearr_38566_39292[(2)] = null);

(statearr_38566_39292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (22))){
var state_38551__$1 = state_38551;
var statearr_38567_39293 = state_38551__$1;
(statearr_38567_39293[(2)] = null);

(statearr_38567_39293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (6))){
var inst_38492 = (state_38551[(13)]);
var inst_38501 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38492) : f.call(null,inst_38492));
var inst_38502 = cljs.core.seq(inst_38501);
var inst_38503 = inst_38502;
var inst_38504 = null;
var inst_38505 = (0);
var inst_38506 = (0);
var state_38551__$1 = (function (){var statearr_38568 = state_38551;
(statearr_38568[(8)] = inst_38506);

(statearr_38568[(9)] = inst_38503);

(statearr_38568[(10)] = inst_38504);

(statearr_38568[(12)] = inst_38505);

return statearr_38568;
})();
var statearr_38569_39294 = state_38551__$1;
(statearr_38569_39294[(2)] = null);

(statearr_38569_39294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (17))){
var inst_38517 = (state_38551[(7)]);
var inst_38521 = cljs.core.chunk_first(inst_38517);
var inst_38522 = cljs.core.chunk_rest(inst_38517);
var inst_38523 = cljs.core.count(inst_38521);
var inst_38503 = inst_38522;
var inst_38504 = inst_38521;
var inst_38505 = inst_38523;
var inst_38506 = (0);
var state_38551__$1 = (function (){var statearr_38570 = state_38551;
(statearr_38570[(8)] = inst_38506);

(statearr_38570[(9)] = inst_38503);

(statearr_38570[(10)] = inst_38504);

(statearr_38570[(12)] = inst_38505);

return statearr_38570;
})();
var statearr_38571_39295 = state_38551__$1;
(statearr_38571_39295[(2)] = null);

(statearr_38571_39295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (3))){
var inst_38549 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38551__$1,inst_38549);
} else {
if((state_val_38552 === (12))){
var inst_38537 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38572_39296 = state_38551__$1;
(statearr_38572_39296[(2)] = inst_38537);

(statearr_38572_39296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (2))){
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38551__$1,(4),in$);
} else {
if((state_val_38552 === (23))){
var inst_38545 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38573_39297 = state_38551__$1;
(statearr_38573_39297[(2)] = inst_38545);

(statearr_38573_39297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (19))){
var inst_38532 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38574_39298 = state_38551__$1;
(statearr_38574_39298[(2)] = inst_38532);

(statearr_38574_39298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (11))){
var inst_38503 = (state_38551[(9)]);
var inst_38517 = (state_38551[(7)]);
var inst_38517__$1 = cljs.core.seq(inst_38503);
var state_38551__$1 = (function (){var statearr_38575 = state_38551;
(statearr_38575[(7)] = inst_38517__$1);

return statearr_38575;
})();
if(inst_38517__$1){
var statearr_38576_39299 = state_38551__$1;
(statearr_38576_39299[(1)] = (14));

} else {
var statearr_38577_39300 = state_38551__$1;
(statearr_38577_39300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (9))){
var inst_38539 = (state_38551[(2)]);
var inst_38540 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38551__$1 = (function (){var statearr_38578 = state_38551;
(statearr_38578[(15)] = inst_38539);

return statearr_38578;
})();
if(cljs.core.truth_(inst_38540)){
var statearr_38579_39301 = state_38551__$1;
(statearr_38579_39301[(1)] = (21));

} else {
var statearr_38580_39302 = state_38551__$1;
(statearr_38580_39302[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (5))){
var inst_38495 = cljs.core.async.close_BANG_(out);
var state_38551__$1 = state_38551;
var statearr_38581_39303 = state_38551__$1;
(statearr_38581_39303[(2)] = inst_38495);

(statearr_38581_39303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (14))){
var inst_38517 = (state_38551[(7)]);
var inst_38519 = cljs.core.chunked_seq_QMARK_(inst_38517);
var state_38551__$1 = state_38551;
if(inst_38519){
var statearr_38582_39304 = state_38551__$1;
(statearr_38582_39304[(1)] = (17));

} else {
var statearr_38583_39305 = state_38551__$1;
(statearr_38583_39305[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (16))){
var inst_38535 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38584_39306 = state_38551__$1;
(statearr_38584_39306[(2)] = inst_38535);

(statearr_38584_39306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (10))){
var inst_38506 = (state_38551[(8)]);
var inst_38504 = (state_38551[(10)]);
var inst_38511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38504,inst_38506);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38551__$1,(13),out,inst_38511);
} else {
if((state_val_38552 === (18))){
var inst_38517 = (state_38551[(7)]);
var inst_38526 = cljs.core.first(inst_38517);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38551__$1,(20),out,inst_38526);
} else {
if((state_val_38552 === (8))){
var inst_38506 = (state_38551[(8)]);
var inst_38505 = (state_38551[(12)]);
var inst_38508 = (inst_38506 < inst_38505);
var inst_38509 = inst_38508;
var state_38551__$1 = state_38551;
if(cljs.core.truth_(inst_38509)){
var statearr_38585_39307 = state_38551__$1;
(statearr_38585_39307[(1)] = (10));

} else {
var statearr_38586_39308 = state_38551__$1;
(statearr_38586_39308[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____0 = (function (){
var statearr_38587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38587[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__);

(statearr_38587[(1)] = (1));

return statearr_38587;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____1 = (function (state_38551){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38551);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38588){if((e38588 instanceof Object)){
var ex__37206__auto__ = e38588;
var statearr_38589_39309 = state_38551;
(statearr_38589_39309[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39310 = state_38551;
state_38551 = G__39310;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37203__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38590 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38590[(6)] = c__37270__auto__);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38592 = arguments.length;
switch (G__38592) {
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
var G__38594 = arguments.length;
switch (G__38594) {
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
var G__38596 = arguments.length;
switch (G__38596) {
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
var c__37270__auto___39314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38620){
var state_val_38621 = (state_38620[(1)]);
if((state_val_38621 === (7))){
var inst_38615 = (state_38620[(2)]);
var state_38620__$1 = state_38620;
var statearr_38622_39315 = state_38620__$1;
(statearr_38622_39315[(2)] = inst_38615);

(statearr_38622_39315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (1))){
var inst_38597 = null;
var state_38620__$1 = (function (){var statearr_38623 = state_38620;
(statearr_38623[(7)] = inst_38597);

return statearr_38623;
})();
var statearr_38624_39316 = state_38620__$1;
(statearr_38624_39316[(2)] = null);

(statearr_38624_39316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (4))){
var inst_38600 = (state_38620[(8)]);
var inst_38600__$1 = (state_38620[(2)]);
var inst_38601 = (inst_38600__$1 == null);
var inst_38602 = cljs.core.not(inst_38601);
var state_38620__$1 = (function (){var statearr_38625 = state_38620;
(statearr_38625[(8)] = inst_38600__$1);

return statearr_38625;
})();
if(inst_38602){
var statearr_38626_39317 = state_38620__$1;
(statearr_38626_39317[(1)] = (5));

} else {
var statearr_38627_39318 = state_38620__$1;
(statearr_38627_39318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (6))){
var state_38620__$1 = state_38620;
var statearr_38628_39319 = state_38620__$1;
(statearr_38628_39319[(2)] = null);

(statearr_38628_39319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (3))){
var inst_38617 = (state_38620[(2)]);
var inst_38618 = cljs.core.async.close_BANG_(out);
var state_38620__$1 = (function (){var statearr_38629 = state_38620;
(statearr_38629[(9)] = inst_38617);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38620__$1,inst_38618);
} else {
if((state_val_38621 === (2))){
var state_38620__$1 = state_38620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38620__$1,(4),ch);
} else {
if((state_val_38621 === (11))){
var inst_38600 = (state_38620[(8)]);
var inst_38609 = (state_38620[(2)]);
var inst_38597 = inst_38600;
var state_38620__$1 = (function (){var statearr_38630 = state_38620;
(statearr_38630[(7)] = inst_38597);

(statearr_38630[(10)] = inst_38609);

return statearr_38630;
})();
var statearr_38631_39320 = state_38620__$1;
(statearr_38631_39320[(2)] = null);

(statearr_38631_39320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (9))){
var inst_38600 = (state_38620[(8)]);
var state_38620__$1 = state_38620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38620__$1,(11),out,inst_38600);
} else {
if((state_val_38621 === (5))){
var inst_38597 = (state_38620[(7)]);
var inst_38600 = (state_38620[(8)]);
var inst_38604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38600,inst_38597);
var state_38620__$1 = state_38620;
if(inst_38604){
var statearr_38633_39321 = state_38620__$1;
(statearr_38633_39321[(1)] = (8));

} else {
var statearr_38634_39322 = state_38620__$1;
(statearr_38634_39322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (10))){
var inst_38612 = (state_38620[(2)]);
var state_38620__$1 = state_38620;
var statearr_38635_39323 = state_38620__$1;
(statearr_38635_39323[(2)] = inst_38612);

(statearr_38635_39323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38621 === (8))){
var inst_38597 = (state_38620[(7)]);
var tmp38632 = inst_38597;
var inst_38597__$1 = tmp38632;
var state_38620__$1 = (function (){var statearr_38636 = state_38620;
(statearr_38636[(7)] = inst_38597__$1);

return statearr_38636;
})();
var statearr_38637_39324 = state_38620__$1;
(statearr_38637_39324[(2)] = null);

(statearr_38637_39324[(1)] = (2));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38638[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38638[(1)] = (1));

return statearr_38638;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38620){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38620);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38639){if((e38639 instanceof Object)){
var ex__37206__auto__ = e38639;
var statearr_38640_39325 = state_38620;
(statearr_38640_39325[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39326 = state_38620;
state_38620 = G__39326;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38641 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38641[(6)] = c__37270__auto___39314);

return statearr_38641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38643 = arguments.length;
switch (G__38643) {
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
var c__37270__auto___39328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38681){
var state_val_38682 = (state_38681[(1)]);
if((state_val_38682 === (7))){
var inst_38677 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38683_39329 = state_38681__$1;
(statearr_38683_39329[(2)] = inst_38677);

(statearr_38683_39329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (1))){
var inst_38644 = (new Array(n));
var inst_38645 = inst_38644;
var inst_38646 = (0);
var state_38681__$1 = (function (){var statearr_38684 = state_38681;
(statearr_38684[(7)] = inst_38646);

(statearr_38684[(8)] = inst_38645);

return statearr_38684;
})();
var statearr_38685_39330 = state_38681__$1;
(statearr_38685_39330[(2)] = null);

(statearr_38685_39330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (4))){
var inst_38649 = (state_38681[(9)]);
var inst_38649__$1 = (state_38681[(2)]);
var inst_38650 = (inst_38649__$1 == null);
var inst_38651 = cljs.core.not(inst_38650);
var state_38681__$1 = (function (){var statearr_38686 = state_38681;
(statearr_38686[(9)] = inst_38649__$1);

return statearr_38686;
})();
if(inst_38651){
var statearr_38687_39331 = state_38681__$1;
(statearr_38687_39331[(1)] = (5));

} else {
var statearr_38688_39332 = state_38681__$1;
(statearr_38688_39332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (15))){
var inst_38671 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38689_39333 = state_38681__$1;
(statearr_38689_39333[(2)] = inst_38671);

(statearr_38689_39333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (13))){
var state_38681__$1 = state_38681;
var statearr_38690_39334 = state_38681__$1;
(statearr_38690_39334[(2)] = null);

(statearr_38690_39334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (6))){
var inst_38646 = (state_38681[(7)]);
var inst_38667 = (inst_38646 > (0));
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38667)){
var statearr_38691_39335 = state_38681__$1;
(statearr_38691_39335[(1)] = (12));

} else {
var statearr_38692_39336 = state_38681__$1;
(statearr_38692_39336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (3))){
var inst_38679 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38681__$1,inst_38679);
} else {
if((state_val_38682 === (12))){
var inst_38645 = (state_38681[(8)]);
var inst_38669 = cljs.core.vec(inst_38645);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38681__$1,(15),out,inst_38669);
} else {
if((state_val_38682 === (2))){
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38681__$1,(4),ch);
} else {
if((state_val_38682 === (11))){
var inst_38661 = (state_38681[(2)]);
var inst_38662 = (new Array(n));
var inst_38645 = inst_38662;
var inst_38646 = (0);
var state_38681__$1 = (function (){var statearr_38693 = state_38681;
(statearr_38693[(7)] = inst_38646);

(statearr_38693[(10)] = inst_38661);

(statearr_38693[(8)] = inst_38645);

return statearr_38693;
})();
var statearr_38694_39337 = state_38681__$1;
(statearr_38694_39337[(2)] = null);

(statearr_38694_39337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (9))){
var inst_38645 = (state_38681[(8)]);
var inst_38659 = cljs.core.vec(inst_38645);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38681__$1,(11),out,inst_38659);
} else {
if((state_val_38682 === (5))){
var inst_38646 = (state_38681[(7)]);
var inst_38649 = (state_38681[(9)]);
var inst_38654 = (state_38681[(11)]);
var inst_38645 = (state_38681[(8)]);
var inst_38653 = (inst_38645[inst_38646] = inst_38649);
var inst_38654__$1 = (inst_38646 + (1));
var inst_38655 = (inst_38654__$1 < n);
var state_38681__$1 = (function (){var statearr_38695 = state_38681;
(statearr_38695[(12)] = inst_38653);

(statearr_38695[(11)] = inst_38654__$1);

return statearr_38695;
})();
if(cljs.core.truth_(inst_38655)){
var statearr_38696_39338 = state_38681__$1;
(statearr_38696_39338[(1)] = (8));

} else {
var statearr_38697_39339 = state_38681__$1;
(statearr_38697_39339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (14))){
var inst_38674 = (state_38681[(2)]);
var inst_38675 = cljs.core.async.close_BANG_(out);
var state_38681__$1 = (function (){var statearr_38699 = state_38681;
(statearr_38699[(13)] = inst_38674);

return statearr_38699;
})();
var statearr_38700_39340 = state_38681__$1;
(statearr_38700_39340[(2)] = inst_38675);

(statearr_38700_39340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (10))){
var inst_38665 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38701_39341 = state_38681__$1;
(statearr_38701_39341[(2)] = inst_38665);

(statearr_38701_39341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (8))){
var inst_38654 = (state_38681[(11)]);
var inst_38645 = (state_38681[(8)]);
var tmp38698 = inst_38645;
var inst_38645__$1 = tmp38698;
var inst_38646 = inst_38654;
var state_38681__$1 = (function (){var statearr_38702 = state_38681;
(statearr_38702[(7)] = inst_38646);

(statearr_38702[(8)] = inst_38645__$1);

return statearr_38702;
})();
var statearr_38703_39342 = state_38681__$1;
(statearr_38703_39342[(2)] = null);

(statearr_38703_39342[(1)] = (2));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38704[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38704[(1)] = (1));

return statearr_38704;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38681){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38681);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38705){if((e38705 instanceof Object)){
var ex__37206__auto__ = e38705;
var statearr_38706_39343 = state_38681;
(statearr_38706_39343[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39344 = state_38681;
state_38681 = G__39344;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38707 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38707[(6)] = c__37270__auto___39328);

return statearr_38707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38709 = arguments.length;
switch (G__38709) {
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
var c__37270__auto___39346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_38751){
var state_val_38752 = (state_38751[(1)]);
if((state_val_38752 === (7))){
var inst_38747 = (state_38751[(2)]);
var state_38751__$1 = state_38751;
var statearr_38753_39347 = state_38751__$1;
(statearr_38753_39347[(2)] = inst_38747);

(statearr_38753_39347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (1))){
var inst_38710 = [];
var inst_38711 = inst_38710;
var inst_38712 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38751__$1 = (function (){var statearr_38754 = state_38751;
(statearr_38754[(7)] = inst_38712);

(statearr_38754[(8)] = inst_38711);

return statearr_38754;
})();
var statearr_38755_39348 = state_38751__$1;
(statearr_38755_39348[(2)] = null);

(statearr_38755_39348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (4))){
var inst_38715 = (state_38751[(9)]);
var inst_38715__$1 = (state_38751[(2)]);
var inst_38716 = (inst_38715__$1 == null);
var inst_38717 = cljs.core.not(inst_38716);
var state_38751__$1 = (function (){var statearr_38756 = state_38751;
(statearr_38756[(9)] = inst_38715__$1);

return statearr_38756;
})();
if(inst_38717){
var statearr_38757_39349 = state_38751__$1;
(statearr_38757_39349[(1)] = (5));

} else {
var statearr_38758_39350 = state_38751__$1;
(statearr_38758_39350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (15))){
var inst_38741 = (state_38751[(2)]);
var state_38751__$1 = state_38751;
var statearr_38759_39351 = state_38751__$1;
(statearr_38759_39351[(2)] = inst_38741);

(statearr_38759_39351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (13))){
var state_38751__$1 = state_38751;
var statearr_38760_39352 = state_38751__$1;
(statearr_38760_39352[(2)] = null);

(statearr_38760_39352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (6))){
var inst_38711 = (state_38751[(8)]);
var inst_38736 = inst_38711.length;
var inst_38737 = (inst_38736 > (0));
var state_38751__$1 = state_38751;
if(cljs.core.truth_(inst_38737)){
var statearr_38761_39353 = state_38751__$1;
(statearr_38761_39353[(1)] = (12));

} else {
var statearr_38762_39354 = state_38751__$1;
(statearr_38762_39354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (3))){
var inst_38749 = (state_38751[(2)]);
var state_38751__$1 = state_38751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38751__$1,inst_38749);
} else {
if((state_val_38752 === (12))){
var inst_38711 = (state_38751[(8)]);
var inst_38739 = cljs.core.vec(inst_38711);
var state_38751__$1 = state_38751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38751__$1,(15),out,inst_38739);
} else {
if((state_val_38752 === (2))){
var state_38751__$1 = state_38751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38751__$1,(4),ch);
} else {
if((state_val_38752 === (11))){
var inst_38715 = (state_38751[(9)]);
var inst_38719 = (state_38751[(10)]);
var inst_38729 = (state_38751[(2)]);
var inst_38730 = [];
var inst_38731 = inst_38730.push(inst_38715);
var inst_38711 = inst_38730;
var inst_38712 = inst_38719;
var state_38751__$1 = (function (){var statearr_38763 = state_38751;
(statearr_38763[(7)] = inst_38712);

(statearr_38763[(11)] = inst_38731);

(statearr_38763[(12)] = inst_38729);

(statearr_38763[(8)] = inst_38711);

return statearr_38763;
})();
var statearr_38764_39355 = state_38751__$1;
(statearr_38764_39355[(2)] = null);

(statearr_38764_39355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (9))){
var inst_38711 = (state_38751[(8)]);
var inst_38727 = cljs.core.vec(inst_38711);
var state_38751__$1 = state_38751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38751__$1,(11),out,inst_38727);
} else {
if((state_val_38752 === (5))){
var inst_38715 = (state_38751[(9)]);
var inst_38719 = (state_38751[(10)]);
var inst_38712 = (state_38751[(7)]);
var inst_38719__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38715) : f.call(null,inst_38715));
var inst_38720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38719__$1,inst_38712);
var inst_38721 = cljs.core.keyword_identical_QMARK_(inst_38712,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38722 = ((inst_38720) || (inst_38721));
var state_38751__$1 = (function (){var statearr_38765 = state_38751;
(statearr_38765[(10)] = inst_38719__$1);

return statearr_38765;
})();
if(cljs.core.truth_(inst_38722)){
var statearr_38766_39356 = state_38751__$1;
(statearr_38766_39356[(1)] = (8));

} else {
var statearr_38767_39357 = state_38751__$1;
(statearr_38767_39357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (14))){
var inst_38744 = (state_38751[(2)]);
var inst_38745 = cljs.core.async.close_BANG_(out);
var state_38751__$1 = (function (){var statearr_38769 = state_38751;
(statearr_38769[(13)] = inst_38744);

return statearr_38769;
})();
var statearr_38770_39358 = state_38751__$1;
(statearr_38770_39358[(2)] = inst_38745);

(statearr_38770_39358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (10))){
var inst_38734 = (state_38751[(2)]);
var state_38751__$1 = state_38751;
var statearr_38771_39359 = state_38751__$1;
(statearr_38771_39359[(2)] = inst_38734);

(statearr_38771_39359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38752 === (8))){
var inst_38715 = (state_38751[(9)]);
var inst_38719 = (state_38751[(10)]);
var inst_38711 = (state_38751[(8)]);
var inst_38724 = inst_38711.push(inst_38715);
var tmp38768 = inst_38711;
var inst_38711__$1 = tmp38768;
var inst_38712 = inst_38719;
var state_38751__$1 = (function (){var statearr_38772 = state_38751;
(statearr_38772[(7)] = inst_38712);

(statearr_38772[(14)] = inst_38724);

(statearr_38772[(8)] = inst_38711__$1);

return statearr_38772;
})();
var statearr_38773_39360 = state_38751__$1;
(statearr_38773_39360[(2)] = null);

(statearr_38773_39360[(1)] = (2));


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
var cljs$core$async$state_machine__37203__auto__ = null;
var cljs$core$async$state_machine__37203__auto____0 = (function (){
var statearr_38774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38774[(0)] = cljs$core$async$state_machine__37203__auto__);

(statearr_38774[(1)] = (1));

return statearr_38774;
});
var cljs$core$async$state_machine__37203__auto____1 = (function (state_38751){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_38751);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e38775){if((e38775 instanceof Object)){
var ex__37206__auto__ = e38775;
var statearr_38776_39361 = state_38751;
(statearr_38776_39361[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39362 = state_38751;
state_38751 = G__39362;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
cljs$core$async$state_machine__37203__auto__ = function(state_38751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37203__auto____1.call(this,state_38751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37203__auto____0;
cljs$core$async$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37203__auto____1;
return cljs$core$async$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_38777 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_38777[(6)] = c__37270__auto___39346);

return statearr_38777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
