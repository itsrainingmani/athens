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
var G__43520 = arguments.length;
switch (G__43520) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43521 = (function (f,blockable,meta43522){
this.f = f;
this.blockable = blockable;
this.meta43522 = meta43522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43523,meta43522__$1){
var self__ = this;
var _43523__$1 = this;
return (new cljs.core.async.t_cljs$core$async43521(self__.f,self__.blockable,meta43522__$1));
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43523){
var self__ = this;
var _43523__$1 = this;
return self__.meta43522;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43522","meta43522",-1574154242,null)], null);
}));

(cljs.core.async.t_cljs$core$async43521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43521");

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43521.
 */
cljs.core.async.__GT_t_cljs$core$async43521 = (function cljs$core$async$__GT_t_cljs$core$async43521(f__$1,blockable__$1,meta43522){
return (new cljs.core.async.t_cljs$core$async43521(f__$1,blockable__$1,meta43522));
});

}

return (new cljs.core.async.t_cljs$core$async43521(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43528 = arguments.length;
switch (G__43528) {
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
var G__43530 = arguments.length;
switch (G__43530) {
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
var G__43532 = arguments.length;
switch (G__43532) {
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
var val_44989 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44989) : fn1.call(null,val_44989));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44989) : fn1.call(null,val_44989));
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
var G__43534 = arguments.length;
switch (G__43534) {
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
var n__4666__auto___44995 = n;
var x_44996 = (0);
while(true){
if((x_44996 < n__4666__auto___44995)){
(a[x_44996] = x_44996);

var G__44997 = (x_44996 + (1));
x_44996 = G__44997;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43535 = (function (flag,meta43536){
this.flag = flag;
this.meta43536 = meta43536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43537,meta43536__$1){
var self__ = this;
var _43537__$1 = this;
return (new cljs.core.async.t_cljs$core$async43535(self__.flag,meta43536__$1));
}));

(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43537){
var self__ = this;
var _43537__$1 = this;
return self__.meta43536;
}));

(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43536","meta43536",-2128494257,null)], null);
}));

(cljs.core.async.t_cljs$core$async43535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43535");

(cljs.core.async.t_cljs$core$async43535.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43535.
 */
cljs.core.async.__GT_t_cljs$core$async43535 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43535(flag__$1,meta43536){
return (new cljs.core.async.t_cljs$core$async43535(flag__$1,meta43536));
});

}

return (new cljs.core.async.t_cljs$core$async43535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43538 = (function (flag,cb,meta43539){
this.flag = flag;
this.cb = cb;
this.meta43539 = meta43539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43540,meta43539__$1){
var self__ = this;
var _43540__$1 = this;
return (new cljs.core.async.t_cljs$core$async43538(self__.flag,self__.cb,meta43539__$1));
}));

(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43540){
var self__ = this;
var _43540__$1 = this;
return self__.meta43539;
}));

(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43539","meta43539",-270625434,null)], null);
}));

(cljs.core.async.t_cljs$core$async43538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43538");

(cljs.core.async.t_cljs$core$async43538.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43538.
 */
cljs.core.async.__GT_t_cljs$core$async43538 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43538(flag__$1,cb__$1,meta43539){
return (new cljs.core.async.t_cljs$core$async43538(flag__$1,cb__$1,meta43539));
});

}

return (new cljs.core.async.t_cljs$core$async43538(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43545_SHARP_){
var G__43549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43545_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43549) : fret.call(null,G__43549));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43546_SHARP_){
var G__43550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43546_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43550) : fret.call(null,G__43550));
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
var G__45003 = (i + (1));
i = G__45003;
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
var len__4789__auto___45008 = arguments.length;
var i__4790__auto___45009 = (0);
while(true){
if((i__4790__auto___45009 < len__4789__auto___45008)){
args__4795__auto__.push((arguments[i__4790__auto___45009]));

var G__45010 = (i__4790__auto___45009 + (1));
i__4790__auto___45009 = G__45010;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43555){
var map__43556 = p__43555;
var map__43556__$1 = (((((!((map__43556 == null))))?(((((map__43556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43556):map__43556);
var opts = map__43556__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43553){
var G__43554 = cljs.core.first(seq43553);
var seq43553__$1 = cljs.core.next(seq43553);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43554,seq43553__$1);
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
var G__43561 = arguments.length;
switch (G__43561) {
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
var c__43461__auto___45017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43587){
var state_val_43588 = (state_43587[(1)]);
if((state_val_43588 === (7))){
var inst_43583 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43589_45018 = state_43587__$1;
(statearr_43589_45018[(2)] = inst_43583);

(statearr_43589_45018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (1))){
var state_43587__$1 = state_43587;
var statearr_43590_45020 = state_43587__$1;
(statearr_43590_45020[(2)] = null);

(statearr_43590_45020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (4))){
var inst_43566 = (state_43587[(7)]);
var inst_43566__$1 = (state_43587[(2)]);
var inst_43567 = (inst_43566__$1 == null);
var state_43587__$1 = (function (){var statearr_43591 = state_43587;
(statearr_43591[(7)] = inst_43566__$1);

return statearr_43591;
})();
if(cljs.core.truth_(inst_43567)){
var statearr_43592_45022 = state_43587__$1;
(statearr_43592_45022[(1)] = (5));

} else {
var statearr_43593_45023 = state_43587__$1;
(statearr_43593_45023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (13))){
var state_43587__$1 = state_43587;
var statearr_43594_45024 = state_43587__$1;
(statearr_43594_45024[(2)] = null);

(statearr_43594_45024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (6))){
var inst_43566 = (state_43587[(7)]);
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43587__$1,(11),to,inst_43566);
} else {
if((state_val_43588 === (3))){
var inst_43585 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43587__$1,inst_43585);
} else {
if((state_val_43588 === (12))){
var state_43587__$1 = state_43587;
var statearr_43595_45025 = state_43587__$1;
(statearr_43595_45025[(2)] = null);

(statearr_43595_45025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (2))){
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43587__$1,(4),from);
} else {
if((state_val_43588 === (11))){
var inst_43576 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
if(cljs.core.truth_(inst_43576)){
var statearr_43596_45027 = state_43587__$1;
(statearr_43596_45027[(1)] = (12));

} else {
var statearr_43597_45028 = state_43587__$1;
(statearr_43597_45028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (9))){
var state_43587__$1 = state_43587;
var statearr_43598_45029 = state_43587__$1;
(statearr_43598_45029[(2)] = null);

(statearr_43598_45029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (5))){
var state_43587__$1 = state_43587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43599_45030 = state_43587__$1;
(statearr_43599_45030[(1)] = (8));

} else {
var statearr_43600_45031 = state_43587__$1;
(statearr_43600_45031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (14))){
var inst_43581 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43601_45032 = state_43587__$1;
(statearr_43601_45032[(2)] = inst_43581);

(statearr_43601_45032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (10))){
var inst_43573 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43602_45033 = state_43587__$1;
(statearr_43602_45033[(2)] = inst_43573);

(statearr_43602_45033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43588 === (8))){
var inst_43570 = cljs.core.async.close_BANG_(to);
var state_43587__$1 = state_43587;
var statearr_43603_45035 = state_43587__$1;
(statearr_43603_45035[(2)] = inst_43570);

(statearr_43603_45035[(1)] = (10));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_43604 = [null,null,null,null,null,null,null,null];
(statearr_43604[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_43604[(1)] = (1));

return statearr_43604;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_43587){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43587);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43605){if((e43605 instanceof Object)){
var ex__43398__auto__ = e43605;
var statearr_43606_45038 = state_43587;
(statearr_43606_45038[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45039 = state_43587;
state_43587 = G__45039;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_43587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_43587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43607 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43607[(6)] = c__43461__auto___45017);

return statearr_43607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var process = (function (p__43608){
var vec__43609 = p__43608;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43609,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43609,(1),null);
var job = vec__43609;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43461__auto___45040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43616){
var state_val_43617 = (state_43616[(1)]);
if((state_val_43617 === (1))){
var state_43616__$1 = state_43616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43616__$1,(2),res,v);
} else {
if((state_val_43617 === (2))){
var inst_43613 = (state_43616[(2)]);
var inst_43614 = cljs.core.async.close_BANG_(res);
var state_43616__$1 = (function (){var statearr_43618 = state_43616;
(statearr_43618[(7)] = inst_43613);

return statearr_43618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43616__$1,inst_43614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_43619 = [null,null,null,null,null,null,null,null];
(statearr_43619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__);

(statearr_43619[(1)] = (1));

return statearr_43619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1 = (function (state_43616){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43616);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43620){if((e43620 instanceof Object)){
var ex__43398__auto__ = e43620;
var statearr_43621_45041 = state_43616;
(statearr_43621_45041[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45042 = state_43616;
state_43616 = G__45042;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = function(state_43616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1.call(this,state_43616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43622 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43622[(6)] = c__43461__auto___45040);

return statearr_43622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43623){
var vec__43624 = p__43623;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43624,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43624,(1),null);
var job = vec__43624;
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
var n__4666__auto___45043 = n;
var __45044 = (0);
while(true){
if((__45044 < n__4666__auto___45043)){
var G__43627_45045 = type;
var G__43627_45046__$1 = (((G__43627_45045 instanceof cljs.core.Keyword))?G__43627_45045.fqn:null);
switch (G__43627_45046__$1) {
case "compute":
var c__43461__auto___45048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45044,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = ((function (__45044,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function (state_43640){
var state_val_43641 = (state_43640[(1)]);
if((state_val_43641 === (1))){
var state_43640__$1 = state_43640;
var statearr_43642_45049 = state_43640__$1;
(statearr_43642_45049[(2)] = null);

(statearr_43642_45049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (2))){
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43640__$1,(4),jobs);
} else {
if((state_val_43641 === (3))){
var inst_43638 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43640__$1,inst_43638);
} else {
if((state_val_43641 === (4))){
var inst_43630 = (state_43640[(2)]);
var inst_43631 = process(inst_43630);
var state_43640__$1 = state_43640;
if(cljs.core.truth_(inst_43631)){
var statearr_43643_45050 = state_43640__$1;
(statearr_43643_45050[(1)] = (5));

} else {
var statearr_43644_45051 = state_43640__$1;
(statearr_43644_45051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (5))){
var state_43640__$1 = state_43640;
var statearr_43645_45052 = state_43640__$1;
(statearr_43645_45052[(2)] = null);

(statearr_43645_45052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (6))){
var state_43640__$1 = state_43640;
var statearr_43646_45057 = state_43640__$1;
(statearr_43646_45057[(2)] = null);

(statearr_43646_45057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (7))){
var inst_43636 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
var statearr_43647_45058 = state_43640__$1;
(statearr_43647_45058[(2)] = inst_43636);

(statearr_43647_45058[(1)] = (3));


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
});})(__45044,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
;
return ((function (__45044,switch__43394__auto__,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_43648 = [null,null,null,null,null,null,null];
(statearr_43648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__);

(statearr_43648[(1)] = (1));

return statearr_43648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1 = (function (state_43640){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43640);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43649){if((e43649 instanceof Object)){
var ex__43398__auto__ = e43649;
var statearr_43650_45067 = state_43640;
(statearr_43650_45067[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45068 = state_43640;
state_43640 = G__45068;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = function(state_43640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1.call(this,state_43640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__;
})()
;})(__45044,switch__43394__auto__,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
})();
var state__43463__auto__ = (function (){var statearr_43651 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43651[(6)] = c__43461__auto___45048);

return statearr_43651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
});})(__45044,c__43461__auto___45048,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
);


break;
case "async":
var c__43461__auto___45070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45044,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = ((function (__45044,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function (state_43664){
var state_val_43665 = (state_43664[(1)]);
if((state_val_43665 === (1))){
var state_43664__$1 = state_43664;
var statearr_43666_45071 = state_43664__$1;
(statearr_43666_45071[(2)] = null);

(statearr_43666_45071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (2))){
var state_43664__$1 = state_43664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43664__$1,(4),jobs);
} else {
if((state_val_43665 === (3))){
var inst_43662 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43664__$1,inst_43662);
} else {
if((state_val_43665 === (4))){
var inst_43654 = (state_43664[(2)]);
var inst_43655 = async(inst_43654);
var state_43664__$1 = state_43664;
if(cljs.core.truth_(inst_43655)){
var statearr_43667_45073 = state_43664__$1;
(statearr_43667_45073[(1)] = (5));

} else {
var statearr_43668_45074 = state_43664__$1;
(statearr_43668_45074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (5))){
var state_43664__$1 = state_43664;
var statearr_43669_45075 = state_43664__$1;
(statearr_43669_45075[(2)] = null);

(statearr_43669_45075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (6))){
var state_43664__$1 = state_43664;
var statearr_43670_45077 = state_43664__$1;
(statearr_43670_45077[(2)] = null);

(statearr_43670_45077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43665 === (7))){
var inst_43660 = (state_43664[(2)]);
var state_43664__$1 = state_43664;
var statearr_43671_45079 = state_43664__$1;
(statearr_43671_45079[(2)] = inst_43660);

(statearr_43671_45079[(1)] = (3));


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
});})(__45044,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
;
return ((function (__45044,switch__43394__auto__,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_43672 = [null,null,null,null,null,null,null];
(statearr_43672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__);

(statearr_43672[(1)] = (1));

return statearr_43672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1 = (function (state_43664){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43664);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43673){if((e43673 instanceof Object)){
var ex__43398__auto__ = e43673;
var statearr_43674_45080 = state_43664;
(statearr_43674_45080[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45081 = state_43664;
state_43664 = G__45081;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = function(state_43664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1.call(this,state_43664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__;
})()
;})(__45044,switch__43394__auto__,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
})();
var state__43463__auto__ = (function (){var statearr_43675 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43675[(6)] = c__43461__auto___45070);

return statearr_43675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
});})(__45044,c__43461__auto___45070,G__43627_45045,G__43627_45046__$1,n__4666__auto___45043,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43627_45046__$1)].join('')));

}

var G__45082 = (__45044 + (1));
__45044 = G__45082;
continue;
} else {
}
break;
}

var c__43461__auto___45083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43697){
var state_val_43698 = (state_43697[(1)]);
if((state_val_43698 === (7))){
var inst_43693 = (state_43697[(2)]);
var state_43697__$1 = state_43697;
var statearr_43699_45084 = state_43697__$1;
(statearr_43699_45084[(2)] = inst_43693);

(statearr_43699_45084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43698 === (1))){
var state_43697__$1 = state_43697;
var statearr_43700_45085 = state_43697__$1;
(statearr_43700_45085[(2)] = null);

(statearr_43700_45085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43698 === (4))){
var inst_43678 = (state_43697[(7)]);
var inst_43678__$1 = (state_43697[(2)]);
var inst_43679 = (inst_43678__$1 == null);
var state_43697__$1 = (function (){var statearr_43701 = state_43697;
(statearr_43701[(7)] = inst_43678__$1);

return statearr_43701;
})();
if(cljs.core.truth_(inst_43679)){
var statearr_43702_45086 = state_43697__$1;
(statearr_43702_45086[(1)] = (5));

} else {
var statearr_43703_45087 = state_43697__$1;
(statearr_43703_45087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43698 === (6))){
var inst_43678 = (state_43697[(7)]);
var inst_43683 = (state_43697[(8)]);
var inst_43683__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43685 = [inst_43678,inst_43683__$1];
var inst_43686 = (new cljs.core.PersistentVector(null,2,(5),inst_43684,inst_43685,null));
var state_43697__$1 = (function (){var statearr_43704 = state_43697;
(statearr_43704[(8)] = inst_43683__$1);

return statearr_43704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43697__$1,(8),jobs,inst_43686);
} else {
if((state_val_43698 === (3))){
var inst_43695 = (state_43697[(2)]);
var state_43697__$1 = state_43697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43697__$1,inst_43695);
} else {
if((state_val_43698 === (2))){
var state_43697__$1 = state_43697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43697__$1,(4),from);
} else {
if((state_val_43698 === (9))){
var inst_43690 = (state_43697[(2)]);
var state_43697__$1 = (function (){var statearr_43705 = state_43697;
(statearr_43705[(9)] = inst_43690);

return statearr_43705;
})();
var statearr_43706_45088 = state_43697__$1;
(statearr_43706_45088[(2)] = null);

(statearr_43706_45088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43698 === (5))){
var inst_43681 = cljs.core.async.close_BANG_(jobs);
var state_43697__$1 = state_43697;
var statearr_43707_45089 = state_43697__$1;
(statearr_43707_45089[(2)] = inst_43681);

(statearr_43707_45089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43698 === (8))){
var inst_43683 = (state_43697[(8)]);
var inst_43688 = (state_43697[(2)]);
var state_43697__$1 = (function (){var statearr_43708 = state_43697;
(statearr_43708[(10)] = inst_43688);

return statearr_43708;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43697__$1,(9),results,inst_43683);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_43709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__);

(statearr_43709[(1)] = (1));

return statearr_43709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1 = (function (state_43697){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43697);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43710){if((e43710 instanceof Object)){
var ex__43398__auto__ = e43710;
var statearr_43711_45090 = state_43697;
(statearr_43711_45090[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45091 = state_43697;
state_43697 = G__45091;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = function(state_43697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1.call(this,state_43697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43712 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43712[(6)] = c__43461__auto___45083);

return statearr_43712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43750){
var state_val_43751 = (state_43750[(1)]);
if((state_val_43751 === (7))){
var inst_43746 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43752_45092 = state_43750__$1;
(statearr_43752_45092[(2)] = inst_43746);

(statearr_43752_45092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (20))){
var state_43750__$1 = state_43750;
var statearr_43753_45093 = state_43750__$1;
(statearr_43753_45093[(2)] = null);

(statearr_43753_45093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (1))){
var state_43750__$1 = state_43750;
var statearr_43754_45094 = state_43750__$1;
(statearr_43754_45094[(2)] = null);

(statearr_43754_45094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (4))){
var inst_43715 = (state_43750[(7)]);
var inst_43715__$1 = (state_43750[(2)]);
var inst_43716 = (inst_43715__$1 == null);
var state_43750__$1 = (function (){var statearr_43755 = state_43750;
(statearr_43755[(7)] = inst_43715__$1);

return statearr_43755;
})();
if(cljs.core.truth_(inst_43716)){
var statearr_43756_45095 = state_43750__$1;
(statearr_43756_45095[(1)] = (5));

} else {
var statearr_43757_45096 = state_43750__$1;
(statearr_43757_45096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (15))){
var inst_43728 = (state_43750[(8)]);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43750__$1,(18),to,inst_43728);
} else {
if((state_val_43751 === (21))){
var inst_43741 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43758_45097 = state_43750__$1;
(statearr_43758_45097[(2)] = inst_43741);

(statearr_43758_45097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (13))){
var inst_43743 = (state_43750[(2)]);
var state_43750__$1 = (function (){var statearr_43759 = state_43750;
(statearr_43759[(9)] = inst_43743);

return statearr_43759;
})();
var statearr_43760_45098 = state_43750__$1;
(statearr_43760_45098[(2)] = null);

(statearr_43760_45098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (6))){
var inst_43715 = (state_43750[(7)]);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43750__$1,(11),inst_43715);
} else {
if((state_val_43751 === (17))){
var inst_43736 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
if(cljs.core.truth_(inst_43736)){
var statearr_43761_45099 = state_43750__$1;
(statearr_43761_45099[(1)] = (19));

} else {
var statearr_43762_45100 = state_43750__$1;
(statearr_43762_45100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (3))){
var inst_43748 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43750__$1,inst_43748);
} else {
if((state_val_43751 === (12))){
var inst_43725 = (state_43750[(10)]);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43750__$1,(14),inst_43725);
} else {
if((state_val_43751 === (2))){
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43750__$1,(4),results);
} else {
if((state_val_43751 === (19))){
var state_43750__$1 = state_43750;
var statearr_43763_45101 = state_43750__$1;
(statearr_43763_45101[(2)] = null);

(statearr_43763_45101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (11))){
var inst_43725 = (state_43750[(2)]);
var state_43750__$1 = (function (){var statearr_43764 = state_43750;
(statearr_43764[(10)] = inst_43725);

return statearr_43764;
})();
var statearr_43765_45102 = state_43750__$1;
(statearr_43765_45102[(2)] = null);

(statearr_43765_45102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (9))){
var state_43750__$1 = state_43750;
var statearr_43766_45103 = state_43750__$1;
(statearr_43766_45103[(2)] = null);

(statearr_43766_45103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (5))){
var state_43750__$1 = state_43750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43767_45104 = state_43750__$1;
(statearr_43767_45104[(1)] = (8));

} else {
var statearr_43768_45105 = state_43750__$1;
(statearr_43768_45105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (14))){
var inst_43728 = (state_43750[(8)]);
var inst_43728__$1 = (state_43750[(2)]);
var inst_43729 = (inst_43728__$1 == null);
var inst_43730 = cljs.core.not(inst_43729);
var state_43750__$1 = (function (){var statearr_43769 = state_43750;
(statearr_43769[(8)] = inst_43728__$1);

return statearr_43769;
})();
if(inst_43730){
var statearr_43770_45106 = state_43750__$1;
(statearr_43770_45106[(1)] = (15));

} else {
var statearr_43771_45107 = state_43750__$1;
(statearr_43771_45107[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (16))){
var state_43750__$1 = state_43750;
var statearr_43772_45108 = state_43750__$1;
(statearr_43772_45108[(2)] = false);

(statearr_43772_45108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (10))){
var inst_43722 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43773_45109 = state_43750__$1;
(statearr_43773_45109[(2)] = inst_43722);

(statearr_43773_45109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (18))){
var inst_43733 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43774_45110 = state_43750__$1;
(statearr_43774_45110[(2)] = inst_43733);

(statearr_43774_45110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43751 === (8))){
var inst_43719 = cljs.core.async.close_BANG_(to);
var state_43750__$1 = state_43750;
var statearr_43775_45111 = state_43750__$1;
(statearr_43775_45111[(2)] = inst_43719);

(statearr_43775_45111[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_43776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__);

(statearr_43776[(1)] = (1));

return statearr_43776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1 = (function (state_43750){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43750);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43777){if((e43777 instanceof Object)){
var ex__43398__auto__ = e43777;
var statearr_43778_45112 = state_43750;
(statearr_43778_45112[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45113 = state_43750;
state_43750 = G__45113;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__ = function(state_43750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1.call(this,state_43750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43779 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43779[(6)] = c__43461__auto__);

return statearr_43779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
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
var G__43781 = arguments.length;
switch (G__43781) {
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
var G__43783 = arguments.length;
switch (G__43783) {
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
var G__43785 = arguments.length;
switch (G__43785) {
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
var c__43461__auto___45117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43811){
var state_val_43812 = (state_43811[(1)]);
if((state_val_43812 === (7))){
var inst_43807 = (state_43811[(2)]);
var state_43811__$1 = state_43811;
var statearr_43813_45118 = state_43811__$1;
(statearr_43813_45118[(2)] = inst_43807);

(statearr_43813_45118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (1))){
var state_43811__$1 = state_43811;
var statearr_43814_45119 = state_43811__$1;
(statearr_43814_45119[(2)] = null);

(statearr_43814_45119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (4))){
var inst_43788 = (state_43811[(7)]);
var inst_43788__$1 = (state_43811[(2)]);
var inst_43789 = (inst_43788__$1 == null);
var state_43811__$1 = (function (){var statearr_43815 = state_43811;
(statearr_43815[(7)] = inst_43788__$1);

return statearr_43815;
})();
if(cljs.core.truth_(inst_43789)){
var statearr_43816_45120 = state_43811__$1;
(statearr_43816_45120[(1)] = (5));

} else {
var statearr_43817_45121 = state_43811__$1;
(statearr_43817_45121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (13))){
var state_43811__$1 = state_43811;
var statearr_43818_45122 = state_43811__$1;
(statearr_43818_45122[(2)] = null);

(statearr_43818_45122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (6))){
var inst_43788 = (state_43811[(7)]);
var inst_43794 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43788) : p.call(null,inst_43788));
var state_43811__$1 = state_43811;
if(cljs.core.truth_(inst_43794)){
var statearr_43819_45123 = state_43811__$1;
(statearr_43819_45123[(1)] = (9));

} else {
var statearr_43820_45124 = state_43811__$1;
(statearr_43820_45124[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (3))){
var inst_43809 = (state_43811[(2)]);
var state_43811__$1 = state_43811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43811__$1,inst_43809);
} else {
if((state_val_43812 === (12))){
var state_43811__$1 = state_43811;
var statearr_43821_45125 = state_43811__$1;
(statearr_43821_45125[(2)] = null);

(statearr_43821_45125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (2))){
var state_43811__$1 = state_43811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43811__$1,(4),ch);
} else {
if((state_val_43812 === (11))){
var inst_43788 = (state_43811[(7)]);
var inst_43798 = (state_43811[(2)]);
var state_43811__$1 = state_43811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43811__$1,(8),inst_43798,inst_43788);
} else {
if((state_val_43812 === (9))){
var state_43811__$1 = state_43811;
var statearr_43822_45126 = state_43811__$1;
(statearr_43822_45126[(2)] = tc);

(statearr_43822_45126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (5))){
var inst_43791 = cljs.core.async.close_BANG_(tc);
var inst_43792 = cljs.core.async.close_BANG_(fc);
var state_43811__$1 = (function (){var statearr_43823 = state_43811;
(statearr_43823[(8)] = inst_43791);

return statearr_43823;
})();
var statearr_43824_45127 = state_43811__$1;
(statearr_43824_45127[(2)] = inst_43792);

(statearr_43824_45127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (14))){
var inst_43805 = (state_43811[(2)]);
var state_43811__$1 = state_43811;
var statearr_43825_45128 = state_43811__$1;
(statearr_43825_45128[(2)] = inst_43805);

(statearr_43825_45128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (10))){
var state_43811__$1 = state_43811;
var statearr_43826_45129 = state_43811__$1;
(statearr_43826_45129[(2)] = fc);

(statearr_43826_45129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43812 === (8))){
var inst_43800 = (state_43811[(2)]);
var state_43811__$1 = state_43811;
if(cljs.core.truth_(inst_43800)){
var statearr_43827_45130 = state_43811__$1;
(statearr_43827_45130[(1)] = (12));

} else {
var statearr_43828_45131 = state_43811__$1;
(statearr_43828_45131[(1)] = (13));

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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_43829 = [null,null,null,null,null,null,null,null,null];
(statearr_43829[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_43829[(1)] = (1));

return statearr_43829;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_43811){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43811);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43830){if((e43830 instanceof Object)){
var ex__43398__auto__ = e43830;
var statearr_43831_45132 = state_43811;
(statearr_43831_45132[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45133 = state_43811;
state_43811 = G__45133;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_43811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_43811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43832 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43832[(6)] = c__43461__auto___45117);

return statearr_43832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43853){
var state_val_43854 = (state_43853[(1)]);
if((state_val_43854 === (7))){
var inst_43849 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
var statearr_43855_45134 = state_43853__$1;
(statearr_43855_45134[(2)] = inst_43849);

(statearr_43855_45134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (1))){
var inst_43833 = init;
var state_43853__$1 = (function (){var statearr_43856 = state_43853;
(statearr_43856[(7)] = inst_43833);

return statearr_43856;
})();
var statearr_43857_45135 = state_43853__$1;
(statearr_43857_45135[(2)] = null);

(statearr_43857_45135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (4))){
var inst_43836 = (state_43853[(8)]);
var inst_43836__$1 = (state_43853[(2)]);
var inst_43837 = (inst_43836__$1 == null);
var state_43853__$1 = (function (){var statearr_43858 = state_43853;
(statearr_43858[(8)] = inst_43836__$1);

return statearr_43858;
})();
if(cljs.core.truth_(inst_43837)){
var statearr_43859_45136 = state_43853__$1;
(statearr_43859_45136[(1)] = (5));

} else {
var statearr_43860_45137 = state_43853__$1;
(statearr_43860_45137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (6))){
var inst_43836 = (state_43853[(8)]);
var inst_43840 = (state_43853[(9)]);
var inst_43833 = (state_43853[(7)]);
var inst_43840__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43833,inst_43836) : f.call(null,inst_43833,inst_43836));
var inst_43841 = cljs.core.reduced_QMARK_(inst_43840__$1);
var state_43853__$1 = (function (){var statearr_43861 = state_43853;
(statearr_43861[(9)] = inst_43840__$1);

return statearr_43861;
})();
if(inst_43841){
var statearr_43862_45138 = state_43853__$1;
(statearr_43862_45138[(1)] = (8));

} else {
var statearr_43863_45139 = state_43853__$1;
(statearr_43863_45139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (3))){
var inst_43851 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43853__$1,inst_43851);
} else {
if((state_val_43854 === (2))){
var state_43853__$1 = state_43853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43853__$1,(4),ch);
} else {
if((state_val_43854 === (9))){
var inst_43840 = (state_43853[(9)]);
var inst_43833 = inst_43840;
var state_43853__$1 = (function (){var statearr_43864 = state_43853;
(statearr_43864[(7)] = inst_43833);

return statearr_43864;
})();
var statearr_43865_45140 = state_43853__$1;
(statearr_43865_45140[(2)] = null);

(statearr_43865_45140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (5))){
var inst_43833 = (state_43853[(7)]);
var state_43853__$1 = state_43853;
var statearr_43866_45141 = state_43853__$1;
(statearr_43866_45141[(2)] = inst_43833);

(statearr_43866_45141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (10))){
var inst_43847 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
var statearr_43867_45142 = state_43853__$1;
(statearr_43867_45142[(2)] = inst_43847);

(statearr_43867_45142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (8))){
var inst_43840 = (state_43853[(9)]);
var inst_43843 = cljs.core.deref(inst_43840);
var state_43853__$1 = state_43853;
var statearr_43868_45143 = state_43853__$1;
(statearr_43868_45143[(2)] = inst_43843);

(statearr_43868_45143[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43395__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43395__auto____0 = (function (){
var statearr_43869 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43869[(0)] = cljs$core$async$reduce_$_state_machine__43395__auto__);

(statearr_43869[(1)] = (1));

return statearr_43869;
});
var cljs$core$async$reduce_$_state_machine__43395__auto____1 = (function (state_43853){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43853);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43870){if((e43870 instanceof Object)){
var ex__43398__auto__ = e43870;
var statearr_43871_45144 = state_43853;
(statearr_43871_45144[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45145 = state_43853;
state_43853 = G__45145;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43395__auto__ = function(state_43853){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43395__auto____1.call(this,state_43853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43395__auto____0;
cljs$core$async$reduce_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43395__auto____1;
return cljs$core$async$reduce_$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43872 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43872[(6)] = c__43461__auto__);

return statearr_43872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43878){
var state_val_43879 = (state_43878[(1)]);
if((state_val_43879 === (1))){
var inst_43873 = cljs.core.async.reduce(f__$1,init,ch);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43878__$1,(2),inst_43873);
} else {
if((state_val_43879 === (2))){
var inst_43875 = (state_43878[(2)]);
var inst_43876 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43875) : f__$1.call(null,inst_43875));
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43878__$1,inst_43876);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43395__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43395__auto____0 = (function (){
var statearr_43880 = [null,null,null,null,null,null,null];
(statearr_43880[(0)] = cljs$core$async$transduce_$_state_machine__43395__auto__);

(statearr_43880[(1)] = (1));

return statearr_43880;
});
var cljs$core$async$transduce_$_state_machine__43395__auto____1 = (function (state_43878){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43878);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43881){if((e43881 instanceof Object)){
var ex__43398__auto__ = e43881;
var statearr_43882_45146 = state_43878;
(statearr_43882_45146[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45147 = state_43878;
state_43878 = G__45147;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43395__auto__ = function(state_43878){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43395__auto____1.call(this,state_43878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43395__auto____0;
cljs$core$async$transduce_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43395__auto____1;
return cljs$core$async$transduce_$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43883 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43883[(6)] = c__43461__auto__);

return statearr_43883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
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
var G__43885 = arguments.length;
switch (G__43885) {
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
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_43910){
var state_val_43911 = (state_43910[(1)]);
if((state_val_43911 === (7))){
var inst_43892 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
var statearr_43912_45149 = state_43910__$1;
(statearr_43912_45149[(2)] = inst_43892);

(statearr_43912_45149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (1))){
var inst_43886 = cljs.core.seq(coll);
var inst_43887 = inst_43886;
var state_43910__$1 = (function (){var statearr_43913 = state_43910;
(statearr_43913[(7)] = inst_43887);

return statearr_43913;
})();
var statearr_43914_45150 = state_43910__$1;
(statearr_43914_45150[(2)] = null);

(statearr_43914_45150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (4))){
var inst_43887 = (state_43910[(7)]);
var inst_43890 = cljs.core.first(inst_43887);
var state_43910__$1 = state_43910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43910__$1,(7),ch,inst_43890);
} else {
if((state_val_43911 === (13))){
var inst_43904 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
var statearr_43915_45151 = state_43910__$1;
(statearr_43915_45151[(2)] = inst_43904);

(statearr_43915_45151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (6))){
var inst_43895 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
if(cljs.core.truth_(inst_43895)){
var statearr_43916_45152 = state_43910__$1;
(statearr_43916_45152[(1)] = (8));

} else {
var statearr_43917_45153 = state_43910__$1;
(statearr_43917_45153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (3))){
var inst_43908 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43910__$1,inst_43908);
} else {
if((state_val_43911 === (12))){
var state_43910__$1 = state_43910;
var statearr_43918_45154 = state_43910__$1;
(statearr_43918_45154[(2)] = null);

(statearr_43918_45154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (2))){
var inst_43887 = (state_43910[(7)]);
var state_43910__$1 = state_43910;
if(cljs.core.truth_(inst_43887)){
var statearr_43919_45155 = state_43910__$1;
(statearr_43919_45155[(1)] = (4));

} else {
var statearr_43920_45156 = state_43910__$1;
(statearr_43920_45156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (11))){
var inst_43901 = cljs.core.async.close_BANG_(ch);
var state_43910__$1 = state_43910;
var statearr_43921_45157 = state_43910__$1;
(statearr_43921_45157[(2)] = inst_43901);

(statearr_43921_45157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (9))){
var state_43910__$1 = state_43910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43922_45158 = state_43910__$1;
(statearr_43922_45158[(1)] = (11));

} else {
var statearr_43923_45159 = state_43910__$1;
(statearr_43923_45159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (5))){
var inst_43887 = (state_43910[(7)]);
var state_43910__$1 = state_43910;
var statearr_43924_45160 = state_43910__$1;
(statearr_43924_45160[(2)] = inst_43887);

(statearr_43924_45160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (10))){
var inst_43906 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
var statearr_43925_45161 = state_43910__$1;
(statearr_43925_45161[(2)] = inst_43906);

(statearr_43925_45161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (8))){
var inst_43887 = (state_43910[(7)]);
var inst_43897 = cljs.core.next(inst_43887);
var inst_43887__$1 = inst_43897;
var state_43910__$1 = (function (){var statearr_43926 = state_43910;
(statearr_43926[(7)] = inst_43887__$1);

return statearr_43926;
})();
var statearr_43927_45162 = state_43910__$1;
(statearr_43927_45162[(2)] = null);

(statearr_43927_45162[(1)] = (2));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_43928 = [null,null,null,null,null,null,null,null];
(statearr_43928[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_43928[(1)] = (1));

return statearr_43928;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_43910){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_43910);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e43929){if((e43929 instanceof Object)){
var ex__43398__auto__ = e43929;
var statearr_43930_45163 = state_43910;
(statearr_43930_45163[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45164 = state_43910;
state_43910 = G__45164;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_43910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_43910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_43931 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_43931[(6)] = c__43461__auto__);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43932 = (function (ch,cs,meta43933){
this.ch = ch;
this.cs = cs;
this.meta43933 = meta43933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43934,meta43933__$1){
var self__ = this;
var _43934__$1 = this;
return (new cljs.core.async.t_cljs$core$async43932(self__.ch,self__.cs,meta43933__$1));
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43934){
var self__ = this;
var _43934__$1 = this;
return self__.meta43933;
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43933","meta43933",871787387,null)], null);
}));

(cljs.core.async.t_cljs$core$async43932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43932");

(cljs.core.async.t_cljs$core$async43932.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43932.
 */
cljs.core.async.__GT_t_cljs$core$async43932 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43932(ch__$1,cs__$1,meta43933){
return (new cljs.core.async.t_cljs$core$async43932(ch__$1,cs__$1,meta43933));
});

}

return (new cljs.core.async.t_cljs$core$async43932(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43461__auto___45182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44069){
var state_val_44070 = (state_44069[(1)]);
if((state_val_44070 === (7))){
var inst_44065 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44071_45183 = state_44069__$1;
(statearr_44071_45183[(2)] = inst_44065);

(statearr_44071_45183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (20))){
var inst_43968 = (state_44069[(7)]);
var inst_43980 = cljs.core.first(inst_43968);
var inst_43981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43980,(0),null);
var inst_43982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43980,(1),null);
var state_44069__$1 = (function (){var statearr_44072 = state_44069;
(statearr_44072[(8)] = inst_43981);

return statearr_44072;
})();
if(cljs.core.truth_(inst_43982)){
var statearr_44073_45184 = state_44069__$1;
(statearr_44073_45184[(1)] = (22));

} else {
var statearr_44074_45185 = state_44069__$1;
(statearr_44074_45185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (27))){
var inst_44010 = (state_44069[(9)]);
var inst_44017 = (state_44069[(10)]);
var inst_43937 = (state_44069[(11)]);
var inst_44012 = (state_44069[(12)]);
var inst_44017__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44010,inst_44012);
var inst_44018 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44017__$1,inst_43937,done);
var state_44069__$1 = (function (){var statearr_44075 = state_44069;
(statearr_44075[(10)] = inst_44017__$1);

return statearr_44075;
})();
if(cljs.core.truth_(inst_44018)){
var statearr_44076_45186 = state_44069__$1;
(statearr_44076_45186[(1)] = (30));

} else {
var statearr_44077_45187 = state_44069__$1;
(statearr_44077_45187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (1))){
var state_44069__$1 = state_44069;
var statearr_44078_45188 = state_44069__$1;
(statearr_44078_45188[(2)] = null);

(statearr_44078_45188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (24))){
var inst_43968 = (state_44069[(7)]);
var inst_43987 = (state_44069[(2)]);
var inst_43988 = cljs.core.next(inst_43968);
var inst_43946 = inst_43988;
var inst_43947 = null;
var inst_43948 = (0);
var inst_43949 = (0);
var state_44069__$1 = (function (){var statearr_44079 = state_44069;
(statearr_44079[(13)] = inst_43987);

(statearr_44079[(14)] = inst_43949);

(statearr_44079[(15)] = inst_43946);

(statearr_44079[(16)] = inst_43947);

(statearr_44079[(17)] = inst_43948);

return statearr_44079;
})();
var statearr_44080_45189 = state_44069__$1;
(statearr_44080_45189[(2)] = null);

(statearr_44080_45189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (39))){
var state_44069__$1 = state_44069;
var statearr_44084_45190 = state_44069__$1;
(statearr_44084_45190[(2)] = null);

(statearr_44084_45190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (4))){
var inst_43937 = (state_44069[(11)]);
var inst_43937__$1 = (state_44069[(2)]);
var inst_43938 = (inst_43937__$1 == null);
var state_44069__$1 = (function (){var statearr_44085 = state_44069;
(statearr_44085[(11)] = inst_43937__$1);

return statearr_44085;
})();
if(cljs.core.truth_(inst_43938)){
var statearr_44086_45191 = state_44069__$1;
(statearr_44086_45191[(1)] = (5));

} else {
var statearr_44087_45192 = state_44069__$1;
(statearr_44087_45192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (15))){
var inst_43949 = (state_44069[(14)]);
var inst_43946 = (state_44069[(15)]);
var inst_43947 = (state_44069[(16)]);
var inst_43948 = (state_44069[(17)]);
var inst_43964 = (state_44069[(2)]);
var inst_43965 = (inst_43949 + (1));
var tmp44081 = inst_43946;
var tmp44082 = inst_43947;
var tmp44083 = inst_43948;
var inst_43946__$1 = tmp44081;
var inst_43947__$1 = tmp44082;
var inst_43948__$1 = tmp44083;
var inst_43949__$1 = inst_43965;
var state_44069__$1 = (function (){var statearr_44088 = state_44069;
(statearr_44088[(14)] = inst_43949__$1);

(statearr_44088[(18)] = inst_43964);

(statearr_44088[(15)] = inst_43946__$1);

(statearr_44088[(16)] = inst_43947__$1);

(statearr_44088[(17)] = inst_43948__$1);

return statearr_44088;
})();
var statearr_44089_45193 = state_44069__$1;
(statearr_44089_45193[(2)] = null);

(statearr_44089_45193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (21))){
var inst_43991 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44093_45194 = state_44069__$1;
(statearr_44093_45194[(2)] = inst_43991);

(statearr_44093_45194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (31))){
var inst_44017 = (state_44069[(10)]);
var inst_44021 = done(null);
var inst_44022 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44017);
var state_44069__$1 = (function (){var statearr_44094 = state_44069;
(statearr_44094[(19)] = inst_44021);

return statearr_44094;
})();
var statearr_44095_45195 = state_44069__$1;
(statearr_44095_45195[(2)] = inst_44022);

(statearr_44095_45195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (32))){
var inst_44009 = (state_44069[(20)]);
var inst_44010 = (state_44069[(9)]);
var inst_44012 = (state_44069[(12)]);
var inst_44011 = (state_44069[(21)]);
var inst_44024 = (state_44069[(2)]);
var inst_44025 = (inst_44012 + (1));
var tmp44090 = inst_44009;
var tmp44091 = inst_44010;
var tmp44092 = inst_44011;
var inst_44009__$1 = tmp44090;
var inst_44010__$1 = tmp44091;
var inst_44011__$1 = tmp44092;
var inst_44012__$1 = inst_44025;
var state_44069__$1 = (function (){var statearr_44096 = state_44069;
(statearr_44096[(20)] = inst_44009__$1);

(statearr_44096[(9)] = inst_44010__$1);

(statearr_44096[(22)] = inst_44024);

(statearr_44096[(12)] = inst_44012__$1);

(statearr_44096[(21)] = inst_44011__$1);

return statearr_44096;
})();
var statearr_44097_45196 = state_44069__$1;
(statearr_44097_45196[(2)] = null);

(statearr_44097_45196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (40))){
var inst_44037 = (state_44069[(23)]);
var inst_44041 = done(null);
var inst_44042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44037);
var state_44069__$1 = (function (){var statearr_44098 = state_44069;
(statearr_44098[(24)] = inst_44041);

return statearr_44098;
})();
var statearr_44099_45197 = state_44069__$1;
(statearr_44099_45197[(2)] = inst_44042);

(statearr_44099_45197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (33))){
var inst_44028 = (state_44069[(25)]);
var inst_44030 = cljs.core.chunked_seq_QMARK_(inst_44028);
var state_44069__$1 = state_44069;
if(inst_44030){
var statearr_44100_45198 = state_44069__$1;
(statearr_44100_45198[(1)] = (36));

} else {
var statearr_44101_45199 = state_44069__$1;
(statearr_44101_45199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (13))){
var inst_43958 = (state_44069[(26)]);
var inst_43961 = cljs.core.async.close_BANG_(inst_43958);
var state_44069__$1 = state_44069;
var statearr_44102_45200 = state_44069__$1;
(statearr_44102_45200[(2)] = inst_43961);

(statearr_44102_45200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (22))){
var inst_43981 = (state_44069[(8)]);
var inst_43984 = cljs.core.async.close_BANG_(inst_43981);
var state_44069__$1 = state_44069;
var statearr_44103_45201 = state_44069__$1;
(statearr_44103_45201[(2)] = inst_43984);

(statearr_44103_45201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (36))){
var inst_44028 = (state_44069[(25)]);
var inst_44032 = cljs.core.chunk_first(inst_44028);
var inst_44033 = cljs.core.chunk_rest(inst_44028);
var inst_44034 = cljs.core.count(inst_44032);
var inst_44009 = inst_44033;
var inst_44010 = inst_44032;
var inst_44011 = inst_44034;
var inst_44012 = (0);
var state_44069__$1 = (function (){var statearr_44104 = state_44069;
(statearr_44104[(20)] = inst_44009);

(statearr_44104[(9)] = inst_44010);

(statearr_44104[(12)] = inst_44012);

(statearr_44104[(21)] = inst_44011);

return statearr_44104;
})();
var statearr_44105_45202 = state_44069__$1;
(statearr_44105_45202[(2)] = null);

(statearr_44105_45202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (41))){
var inst_44028 = (state_44069[(25)]);
var inst_44044 = (state_44069[(2)]);
var inst_44045 = cljs.core.next(inst_44028);
var inst_44009 = inst_44045;
var inst_44010 = null;
var inst_44011 = (0);
var inst_44012 = (0);
var state_44069__$1 = (function (){var statearr_44106 = state_44069;
(statearr_44106[(20)] = inst_44009);

(statearr_44106[(9)] = inst_44010);

(statearr_44106[(27)] = inst_44044);

(statearr_44106[(12)] = inst_44012);

(statearr_44106[(21)] = inst_44011);

return statearr_44106;
})();
var statearr_44107_45203 = state_44069__$1;
(statearr_44107_45203[(2)] = null);

(statearr_44107_45203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (43))){
var state_44069__$1 = state_44069;
var statearr_44108_45204 = state_44069__$1;
(statearr_44108_45204[(2)] = null);

(statearr_44108_45204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (29))){
var inst_44053 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44109_45205 = state_44069__$1;
(statearr_44109_45205[(2)] = inst_44053);

(statearr_44109_45205[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (44))){
var inst_44062 = (state_44069[(2)]);
var state_44069__$1 = (function (){var statearr_44110 = state_44069;
(statearr_44110[(28)] = inst_44062);

return statearr_44110;
})();
var statearr_44111_45206 = state_44069__$1;
(statearr_44111_45206[(2)] = null);

(statearr_44111_45206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (6))){
var inst_44001 = (state_44069[(29)]);
var inst_44000 = cljs.core.deref(cs);
var inst_44001__$1 = cljs.core.keys(inst_44000);
var inst_44002 = cljs.core.count(inst_44001__$1);
var inst_44003 = cljs.core.reset_BANG_(dctr,inst_44002);
var inst_44008 = cljs.core.seq(inst_44001__$1);
var inst_44009 = inst_44008;
var inst_44010 = null;
var inst_44011 = (0);
var inst_44012 = (0);
var state_44069__$1 = (function (){var statearr_44112 = state_44069;
(statearr_44112[(20)] = inst_44009);

(statearr_44112[(9)] = inst_44010);

(statearr_44112[(12)] = inst_44012);

(statearr_44112[(21)] = inst_44011);

(statearr_44112[(30)] = inst_44003);

(statearr_44112[(29)] = inst_44001__$1);

return statearr_44112;
})();
var statearr_44113_45211 = state_44069__$1;
(statearr_44113_45211[(2)] = null);

(statearr_44113_45211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (28))){
var inst_44009 = (state_44069[(20)]);
var inst_44028 = (state_44069[(25)]);
var inst_44028__$1 = cljs.core.seq(inst_44009);
var state_44069__$1 = (function (){var statearr_44114 = state_44069;
(statearr_44114[(25)] = inst_44028__$1);

return statearr_44114;
})();
if(inst_44028__$1){
var statearr_44115_45212 = state_44069__$1;
(statearr_44115_45212[(1)] = (33));

} else {
var statearr_44116_45213 = state_44069__$1;
(statearr_44116_45213[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (25))){
var inst_44012 = (state_44069[(12)]);
var inst_44011 = (state_44069[(21)]);
var inst_44014 = (inst_44012 < inst_44011);
var inst_44015 = inst_44014;
var state_44069__$1 = state_44069;
if(cljs.core.truth_(inst_44015)){
var statearr_44117_45214 = state_44069__$1;
(statearr_44117_45214[(1)] = (27));

} else {
var statearr_44118_45215 = state_44069__$1;
(statearr_44118_45215[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (34))){
var state_44069__$1 = state_44069;
var statearr_44119_45216 = state_44069__$1;
(statearr_44119_45216[(2)] = null);

(statearr_44119_45216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (17))){
var state_44069__$1 = state_44069;
var statearr_44120_45217 = state_44069__$1;
(statearr_44120_45217[(2)] = null);

(statearr_44120_45217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (3))){
var inst_44067 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44069__$1,inst_44067);
} else {
if((state_val_44070 === (12))){
var inst_43996 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44121_45220 = state_44069__$1;
(statearr_44121_45220[(2)] = inst_43996);

(statearr_44121_45220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (2))){
var state_44069__$1 = state_44069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44069__$1,(4),ch);
} else {
if((state_val_44070 === (23))){
var state_44069__$1 = state_44069;
var statearr_44122_45221 = state_44069__$1;
(statearr_44122_45221[(2)] = null);

(statearr_44122_45221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (35))){
var inst_44051 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44123_45225 = state_44069__$1;
(statearr_44123_45225[(2)] = inst_44051);

(statearr_44123_45225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (19))){
var inst_43968 = (state_44069[(7)]);
var inst_43972 = cljs.core.chunk_first(inst_43968);
var inst_43973 = cljs.core.chunk_rest(inst_43968);
var inst_43974 = cljs.core.count(inst_43972);
var inst_43946 = inst_43973;
var inst_43947 = inst_43972;
var inst_43948 = inst_43974;
var inst_43949 = (0);
var state_44069__$1 = (function (){var statearr_44124 = state_44069;
(statearr_44124[(14)] = inst_43949);

(statearr_44124[(15)] = inst_43946);

(statearr_44124[(16)] = inst_43947);

(statearr_44124[(17)] = inst_43948);

return statearr_44124;
})();
var statearr_44125_45230 = state_44069__$1;
(statearr_44125_45230[(2)] = null);

(statearr_44125_45230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (11))){
var inst_43946 = (state_44069[(15)]);
var inst_43968 = (state_44069[(7)]);
var inst_43968__$1 = cljs.core.seq(inst_43946);
var state_44069__$1 = (function (){var statearr_44126 = state_44069;
(statearr_44126[(7)] = inst_43968__$1);

return statearr_44126;
})();
if(inst_43968__$1){
var statearr_44127_45231 = state_44069__$1;
(statearr_44127_45231[(1)] = (16));

} else {
var statearr_44128_45232 = state_44069__$1;
(statearr_44128_45232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (9))){
var inst_43998 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44129_45233 = state_44069__$1;
(statearr_44129_45233[(2)] = inst_43998);

(statearr_44129_45233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (5))){
var inst_43944 = cljs.core.deref(cs);
var inst_43945 = cljs.core.seq(inst_43944);
var inst_43946 = inst_43945;
var inst_43947 = null;
var inst_43948 = (0);
var inst_43949 = (0);
var state_44069__$1 = (function (){var statearr_44130 = state_44069;
(statearr_44130[(14)] = inst_43949);

(statearr_44130[(15)] = inst_43946);

(statearr_44130[(16)] = inst_43947);

(statearr_44130[(17)] = inst_43948);

return statearr_44130;
})();
var statearr_44131_45234 = state_44069__$1;
(statearr_44131_45234[(2)] = null);

(statearr_44131_45234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (14))){
var state_44069__$1 = state_44069;
var statearr_44132_45235 = state_44069__$1;
(statearr_44132_45235[(2)] = null);

(statearr_44132_45235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (45))){
var inst_44059 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44133_45236 = state_44069__$1;
(statearr_44133_45236[(2)] = inst_44059);

(statearr_44133_45236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (26))){
var inst_44001 = (state_44069[(29)]);
var inst_44055 = (state_44069[(2)]);
var inst_44056 = cljs.core.seq(inst_44001);
var state_44069__$1 = (function (){var statearr_44134 = state_44069;
(statearr_44134[(31)] = inst_44055);

return statearr_44134;
})();
if(inst_44056){
var statearr_44135_45237 = state_44069__$1;
(statearr_44135_45237[(1)] = (42));

} else {
var statearr_44136_45238 = state_44069__$1;
(statearr_44136_45238[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (16))){
var inst_43968 = (state_44069[(7)]);
var inst_43970 = cljs.core.chunked_seq_QMARK_(inst_43968);
var state_44069__$1 = state_44069;
if(inst_43970){
var statearr_44137_45239 = state_44069__$1;
(statearr_44137_45239[(1)] = (19));

} else {
var statearr_44138_45240 = state_44069__$1;
(statearr_44138_45240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (38))){
var inst_44048 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44139_45241 = state_44069__$1;
(statearr_44139_45241[(2)] = inst_44048);

(statearr_44139_45241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (30))){
var state_44069__$1 = state_44069;
var statearr_44140_45242 = state_44069__$1;
(statearr_44140_45242[(2)] = null);

(statearr_44140_45242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (10))){
var inst_43949 = (state_44069[(14)]);
var inst_43947 = (state_44069[(16)]);
var inst_43957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43947,inst_43949);
var inst_43958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43957,(0),null);
var inst_43959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43957,(1),null);
var state_44069__$1 = (function (){var statearr_44141 = state_44069;
(statearr_44141[(26)] = inst_43958);

return statearr_44141;
})();
if(cljs.core.truth_(inst_43959)){
var statearr_44142_45243 = state_44069__$1;
(statearr_44142_45243[(1)] = (13));

} else {
var statearr_44143_45244 = state_44069__$1;
(statearr_44143_45244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (18))){
var inst_43994 = (state_44069[(2)]);
var state_44069__$1 = state_44069;
var statearr_44144_45246 = state_44069__$1;
(statearr_44144_45246[(2)] = inst_43994);

(statearr_44144_45246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (42))){
var state_44069__$1 = state_44069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44069__$1,(45),dchan);
} else {
if((state_val_44070 === (37))){
var inst_43937 = (state_44069[(11)]);
var inst_44028 = (state_44069[(25)]);
var inst_44037 = (state_44069[(23)]);
var inst_44037__$1 = cljs.core.first(inst_44028);
var inst_44038 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44037__$1,inst_43937,done);
var state_44069__$1 = (function (){var statearr_44145 = state_44069;
(statearr_44145[(23)] = inst_44037__$1);

return statearr_44145;
})();
if(cljs.core.truth_(inst_44038)){
var statearr_44146_45249 = state_44069__$1;
(statearr_44146_45249[(1)] = (39));

} else {
var statearr_44147_45250 = state_44069__$1;
(statearr_44147_45250[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44070 === (8))){
var inst_43949 = (state_44069[(14)]);
var inst_43948 = (state_44069[(17)]);
var inst_43951 = (inst_43949 < inst_43948);
var inst_43952 = inst_43951;
var state_44069__$1 = state_44069;
if(cljs.core.truth_(inst_43952)){
var statearr_44148_45259 = state_44069__$1;
(statearr_44148_45259[(1)] = (10));

} else {
var statearr_44149_45260 = state_44069__$1;
(statearr_44149_45260[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43395__auto__ = null;
var cljs$core$async$mult_$_state_machine__43395__auto____0 = (function (){
var statearr_44150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44150[(0)] = cljs$core$async$mult_$_state_machine__43395__auto__);

(statearr_44150[(1)] = (1));

return statearr_44150;
});
var cljs$core$async$mult_$_state_machine__43395__auto____1 = (function (state_44069){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44069);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44151){if((e44151 instanceof Object)){
var ex__43398__auto__ = e44151;
var statearr_44152_45267 = state_44069;
(statearr_44152_45267[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45268 = state_44069;
state_44069 = G__45268;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43395__auto__ = function(state_44069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43395__auto____1.call(this,state_44069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43395__auto____0;
cljs$core$async$mult_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43395__auto____1;
return cljs$core$async$mult_$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44153 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44153[(6)] = c__43461__auto___45182);

return statearr_44153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var G__44155 = arguments.length;
switch (G__44155) {
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
var len__4789__auto___45273 = arguments.length;
var i__4790__auto___45274 = (0);
while(true){
if((i__4790__auto___45274 < len__4789__auto___45273)){
args__4795__auto__.push((arguments[i__4790__auto___45274]));

var G__45275 = (i__4790__auto___45274 + (1));
i__4790__auto___45274 = G__45275;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44160){
var map__44161 = p__44160;
var map__44161__$1 = (((((!((map__44161 == null))))?(((((map__44161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44161):map__44161);
var opts = map__44161__$1;
var statearr_44163_45277 = state;
(statearr_44163_45277[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44164_45278 = state;
(statearr_44164_45278[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44165_45279 = state;
(statearr_44165_45279[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44156){
var G__44157 = cljs.core.first(seq44156);
var seq44156__$1 = cljs.core.next(seq44156);
var G__44158 = cljs.core.first(seq44156__$1);
var seq44156__$2 = cljs.core.next(seq44156__$1);
var G__44159 = cljs.core.first(seq44156__$2);
var seq44156__$3 = cljs.core.next(seq44156__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44157,G__44158,G__44159,seq44156__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44166 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44167){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44167 = meta44167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44168,meta44167__$1){
var self__ = this;
var _44168__$1 = this;
return (new cljs.core.async.t_cljs$core$async44166(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44167__$1));
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44168){
var self__ = this;
var _44168__$1 = this;
return self__.meta44167;
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44166.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44167","meta44167",-1745151392,null)], null);
}));

(cljs.core.async.t_cljs$core$async44166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44166");

(cljs.core.async.t_cljs$core$async44166.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44166.
 */
cljs.core.async.__GT_t_cljs$core$async44166 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44166(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44167){
return (new cljs.core.async.t_cljs$core$async44166(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44167));
});

}

return (new cljs.core.async.t_cljs$core$async44166(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43461__auto___45306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44270){
var state_val_44271 = (state_44270[(1)]);
if((state_val_44271 === (7))){
var inst_44185 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44272_45307 = state_44270__$1;
(statearr_44272_45307[(2)] = inst_44185);

(statearr_44272_45307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (20))){
var inst_44197 = (state_44270[(7)]);
var state_44270__$1 = state_44270;
var statearr_44273_45308 = state_44270__$1;
(statearr_44273_45308[(2)] = inst_44197);

(statearr_44273_45308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (27))){
var state_44270__$1 = state_44270;
var statearr_44274_45309 = state_44270__$1;
(statearr_44274_45309[(2)] = null);

(statearr_44274_45309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (1))){
var inst_44172 = (state_44270[(8)]);
var inst_44172__$1 = calc_state();
var inst_44174 = (inst_44172__$1 == null);
var inst_44175 = cljs.core.not(inst_44174);
var state_44270__$1 = (function (){var statearr_44275 = state_44270;
(statearr_44275[(8)] = inst_44172__$1);

return statearr_44275;
})();
if(inst_44175){
var statearr_44276_45310 = state_44270__$1;
(statearr_44276_45310[(1)] = (2));

} else {
var statearr_44277_45311 = state_44270__$1;
(statearr_44277_45311[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (24))){
var inst_44244 = (state_44270[(9)]);
var inst_44221 = (state_44270[(10)]);
var inst_44230 = (state_44270[(11)]);
var inst_44244__$1 = (inst_44221.cljs$core$IFn$_invoke$arity$1 ? inst_44221.cljs$core$IFn$_invoke$arity$1(inst_44230) : inst_44221.call(null,inst_44230));
var state_44270__$1 = (function (){var statearr_44278 = state_44270;
(statearr_44278[(9)] = inst_44244__$1);

return statearr_44278;
})();
if(cljs.core.truth_(inst_44244__$1)){
var statearr_44279_45312 = state_44270__$1;
(statearr_44279_45312[(1)] = (29));

} else {
var statearr_44280_45313 = state_44270__$1;
(statearr_44280_45313[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (4))){
var inst_44188 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44188)){
var statearr_44281_45314 = state_44270__$1;
(statearr_44281_45314[(1)] = (8));

} else {
var statearr_44282_45315 = state_44270__$1;
(statearr_44282_45315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (15))){
var inst_44215 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44215)){
var statearr_44283_45316 = state_44270__$1;
(statearr_44283_45316[(1)] = (19));

} else {
var statearr_44284_45317 = state_44270__$1;
(statearr_44284_45317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (21))){
var inst_44220 = (state_44270[(12)]);
var inst_44220__$1 = (state_44270[(2)]);
var inst_44221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44220__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44220__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44220__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44270__$1 = (function (){var statearr_44285 = state_44270;
(statearr_44285[(12)] = inst_44220__$1);

(statearr_44285[(10)] = inst_44221);

(statearr_44285[(13)] = inst_44222);

return statearr_44285;
})();
return cljs.core.async.ioc_alts_BANG_(state_44270__$1,(22),inst_44223);
} else {
if((state_val_44271 === (31))){
var inst_44252 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44252)){
var statearr_44286_45318 = state_44270__$1;
(statearr_44286_45318[(1)] = (32));

} else {
var statearr_44287_45319 = state_44270__$1;
(statearr_44287_45319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (32))){
var inst_44229 = (state_44270[(14)]);
var state_44270__$1 = state_44270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44270__$1,(35),out,inst_44229);
} else {
if((state_val_44271 === (33))){
var inst_44220 = (state_44270[(12)]);
var inst_44197 = inst_44220;
var state_44270__$1 = (function (){var statearr_44288 = state_44270;
(statearr_44288[(7)] = inst_44197);

return statearr_44288;
})();
var statearr_44289_45320 = state_44270__$1;
(statearr_44289_45320[(2)] = null);

(statearr_44289_45320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (13))){
var inst_44197 = (state_44270[(7)]);
var inst_44204 = inst_44197.cljs$lang$protocol_mask$partition0$;
var inst_44205 = (inst_44204 & (64));
var inst_44206 = inst_44197.cljs$core$ISeq$;
var inst_44207 = (cljs.core.PROTOCOL_SENTINEL === inst_44206);
var inst_44208 = ((inst_44205) || (inst_44207));
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44208)){
var statearr_44290_45321 = state_44270__$1;
(statearr_44290_45321[(1)] = (16));

} else {
var statearr_44291_45322 = state_44270__$1;
(statearr_44291_45322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (22))){
var inst_44229 = (state_44270[(14)]);
var inst_44230 = (state_44270[(11)]);
var inst_44228 = (state_44270[(2)]);
var inst_44229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44228,(0),null);
var inst_44230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44228,(1),null);
var inst_44231 = (inst_44229__$1 == null);
var inst_44232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44230__$1,change);
var inst_44233 = ((inst_44231) || (inst_44232));
var state_44270__$1 = (function (){var statearr_44292 = state_44270;
(statearr_44292[(14)] = inst_44229__$1);

(statearr_44292[(11)] = inst_44230__$1);

return statearr_44292;
})();
if(cljs.core.truth_(inst_44233)){
var statearr_44293_45323 = state_44270__$1;
(statearr_44293_45323[(1)] = (23));

} else {
var statearr_44294_45324 = state_44270__$1;
(statearr_44294_45324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (36))){
var inst_44220 = (state_44270[(12)]);
var inst_44197 = inst_44220;
var state_44270__$1 = (function (){var statearr_44295 = state_44270;
(statearr_44295[(7)] = inst_44197);

return statearr_44295;
})();
var statearr_44296_45325 = state_44270__$1;
(statearr_44296_45325[(2)] = null);

(statearr_44296_45325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (29))){
var inst_44244 = (state_44270[(9)]);
var state_44270__$1 = state_44270;
var statearr_44297_45326 = state_44270__$1;
(statearr_44297_45326[(2)] = inst_44244);

(statearr_44297_45326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (6))){
var state_44270__$1 = state_44270;
var statearr_44298_45327 = state_44270__$1;
(statearr_44298_45327[(2)] = false);

(statearr_44298_45327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (28))){
var inst_44240 = (state_44270[(2)]);
var inst_44241 = calc_state();
var inst_44197 = inst_44241;
var state_44270__$1 = (function (){var statearr_44299 = state_44270;
(statearr_44299[(7)] = inst_44197);

(statearr_44299[(15)] = inst_44240);

return statearr_44299;
})();
var statearr_44300_45328 = state_44270__$1;
(statearr_44300_45328[(2)] = null);

(statearr_44300_45328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (25))){
var inst_44266 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44301_45329 = state_44270__$1;
(statearr_44301_45329[(2)] = inst_44266);

(statearr_44301_45329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (34))){
var inst_44264 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44302_45330 = state_44270__$1;
(statearr_44302_45330[(2)] = inst_44264);

(statearr_44302_45330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (17))){
var state_44270__$1 = state_44270;
var statearr_44303_45331 = state_44270__$1;
(statearr_44303_45331[(2)] = false);

(statearr_44303_45331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (3))){
var state_44270__$1 = state_44270;
var statearr_44304_45332 = state_44270__$1;
(statearr_44304_45332[(2)] = false);

(statearr_44304_45332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (12))){
var inst_44268 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44270__$1,inst_44268);
} else {
if((state_val_44271 === (2))){
var inst_44172 = (state_44270[(8)]);
var inst_44177 = inst_44172.cljs$lang$protocol_mask$partition0$;
var inst_44178 = (inst_44177 & (64));
var inst_44179 = inst_44172.cljs$core$ISeq$;
var inst_44180 = (cljs.core.PROTOCOL_SENTINEL === inst_44179);
var inst_44181 = ((inst_44178) || (inst_44180));
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44181)){
var statearr_44305_45333 = state_44270__$1;
(statearr_44305_45333[(1)] = (5));

} else {
var statearr_44306_45334 = state_44270__$1;
(statearr_44306_45334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (23))){
var inst_44229 = (state_44270[(14)]);
var inst_44235 = (inst_44229 == null);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44235)){
var statearr_44307_45335 = state_44270__$1;
(statearr_44307_45335[(1)] = (26));

} else {
var statearr_44308_45336 = state_44270__$1;
(statearr_44308_45336[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (35))){
var inst_44255 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44255)){
var statearr_44309_45337 = state_44270__$1;
(statearr_44309_45337[(1)] = (36));

} else {
var statearr_44310_45338 = state_44270__$1;
(statearr_44310_45338[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (19))){
var inst_44197 = (state_44270[(7)]);
var inst_44217 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44197);
var state_44270__$1 = state_44270;
var statearr_44311_45339 = state_44270__$1;
(statearr_44311_45339[(2)] = inst_44217);

(statearr_44311_45339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (11))){
var inst_44197 = (state_44270[(7)]);
var inst_44201 = (inst_44197 == null);
var inst_44202 = cljs.core.not(inst_44201);
var state_44270__$1 = state_44270;
if(inst_44202){
var statearr_44312_45340 = state_44270__$1;
(statearr_44312_45340[(1)] = (13));

} else {
var statearr_44313_45341 = state_44270__$1;
(statearr_44313_45341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (9))){
var inst_44172 = (state_44270[(8)]);
var state_44270__$1 = state_44270;
var statearr_44314_45342 = state_44270__$1;
(statearr_44314_45342[(2)] = inst_44172);

(statearr_44314_45342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (5))){
var state_44270__$1 = state_44270;
var statearr_44315_45343 = state_44270__$1;
(statearr_44315_45343[(2)] = true);

(statearr_44315_45343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (14))){
var state_44270__$1 = state_44270;
var statearr_44316_45344 = state_44270__$1;
(statearr_44316_45344[(2)] = false);

(statearr_44316_45344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (26))){
var inst_44230 = (state_44270[(11)]);
var inst_44237 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44230);
var state_44270__$1 = state_44270;
var statearr_44317_45345 = state_44270__$1;
(statearr_44317_45345[(2)] = inst_44237);

(statearr_44317_45345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (16))){
var state_44270__$1 = state_44270;
var statearr_44318_45346 = state_44270__$1;
(statearr_44318_45346[(2)] = true);

(statearr_44318_45346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (38))){
var inst_44260 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44319_45347 = state_44270__$1;
(statearr_44319_45347[(2)] = inst_44260);

(statearr_44319_45347[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (30))){
var inst_44221 = (state_44270[(10)]);
var inst_44222 = (state_44270[(13)]);
var inst_44230 = (state_44270[(11)]);
var inst_44247 = cljs.core.empty_QMARK_(inst_44221);
var inst_44248 = (inst_44222.cljs$core$IFn$_invoke$arity$1 ? inst_44222.cljs$core$IFn$_invoke$arity$1(inst_44230) : inst_44222.call(null,inst_44230));
var inst_44249 = cljs.core.not(inst_44248);
var inst_44250 = ((inst_44247) && (inst_44249));
var state_44270__$1 = state_44270;
var statearr_44320_45348 = state_44270__$1;
(statearr_44320_45348[(2)] = inst_44250);

(statearr_44320_45348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (10))){
var inst_44172 = (state_44270[(8)]);
var inst_44193 = (state_44270[(2)]);
var inst_44194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44193,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44193,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44193,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44197 = inst_44172;
var state_44270__$1 = (function (){var statearr_44321 = state_44270;
(statearr_44321[(16)] = inst_44194);

(statearr_44321[(7)] = inst_44197);

(statearr_44321[(17)] = inst_44196);

(statearr_44321[(18)] = inst_44195);

return statearr_44321;
})();
var statearr_44322_45349 = state_44270__$1;
(statearr_44322_45349[(2)] = null);

(statearr_44322_45349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (18))){
var inst_44212 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44323_45350 = state_44270__$1;
(statearr_44323_45350[(2)] = inst_44212);

(statearr_44323_45350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (37))){
var state_44270__$1 = state_44270;
var statearr_44324_45351 = state_44270__$1;
(statearr_44324_45351[(2)] = null);

(statearr_44324_45351[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (8))){
var inst_44172 = (state_44270[(8)]);
var inst_44190 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44172);
var state_44270__$1 = state_44270;
var statearr_44325_45352 = state_44270__$1;
(statearr_44325_45352[(2)] = inst_44190);

(statearr_44325_45352[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__43395__auto__ = null;
var cljs$core$async$mix_$_state_machine__43395__auto____0 = (function (){
var statearr_44326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44326[(0)] = cljs$core$async$mix_$_state_machine__43395__auto__);

(statearr_44326[(1)] = (1));

return statearr_44326;
});
var cljs$core$async$mix_$_state_machine__43395__auto____1 = (function (state_44270){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44270);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44327){if((e44327 instanceof Object)){
var ex__43398__auto__ = e44327;
var statearr_44328_45353 = state_44270;
(statearr_44328_45353[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45354 = state_44270;
state_44270 = G__45354;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43395__auto__ = function(state_44270){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43395__auto____1.call(this,state_44270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43395__auto____0;
cljs$core$async$mix_$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43395__auto____1;
return cljs$core$async$mix_$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44329 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44329[(6)] = c__43461__auto___45306);

return statearr_44329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var G__44331 = arguments.length;
switch (G__44331) {
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
var G__44334 = arguments.length;
switch (G__44334) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44332_SHARP_){
if(cljs.core.truth_((p1__44332_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44332_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44332_SHARP_.call(null,topic)))){
return p1__44332_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44332_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44335 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44336){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44336 = meta44336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44337,meta44336__$1){
var self__ = this;
var _44337__$1 = this;
return (new cljs.core.async.t_cljs$core$async44335(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44336__$1));
}));

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44337){
var self__ = this;
var _44337__$1 = this;
return self__.meta44336;
}));

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44336","meta44336",1630847425,null)], null);
}));

(cljs.core.async.t_cljs$core$async44335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44335");

(cljs.core.async.t_cljs$core$async44335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44335.
 */
cljs.core.async.__GT_t_cljs$core$async44335 = (function cljs$core$async$__GT_t_cljs$core$async44335(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44336){
return (new cljs.core.async.t_cljs$core$async44335(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44336));
});

}

return (new cljs.core.async.t_cljs$core$async44335(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43461__auto___45367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44409){
var state_val_44410 = (state_44409[(1)]);
if((state_val_44410 === (7))){
var inst_44405 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44411_45368 = state_44409__$1;
(statearr_44411_45368[(2)] = inst_44405);

(statearr_44411_45368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (20))){
var state_44409__$1 = state_44409;
var statearr_44412_45369 = state_44409__$1;
(statearr_44412_45369[(2)] = null);

(statearr_44412_45369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (1))){
var state_44409__$1 = state_44409;
var statearr_44413_45370 = state_44409__$1;
(statearr_44413_45370[(2)] = null);

(statearr_44413_45370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (24))){
var inst_44388 = (state_44409[(7)]);
var inst_44397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44388);
var state_44409__$1 = state_44409;
var statearr_44414_45371 = state_44409__$1;
(statearr_44414_45371[(2)] = inst_44397);

(statearr_44414_45371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (4))){
var inst_44340 = (state_44409[(8)]);
var inst_44340__$1 = (state_44409[(2)]);
var inst_44341 = (inst_44340__$1 == null);
var state_44409__$1 = (function (){var statearr_44415 = state_44409;
(statearr_44415[(8)] = inst_44340__$1);

return statearr_44415;
})();
if(cljs.core.truth_(inst_44341)){
var statearr_44416_45372 = state_44409__$1;
(statearr_44416_45372[(1)] = (5));

} else {
var statearr_44417_45373 = state_44409__$1;
(statearr_44417_45373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (15))){
var inst_44382 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44418_45374 = state_44409__$1;
(statearr_44418_45374[(2)] = inst_44382);

(statearr_44418_45374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (21))){
var inst_44402 = (state_44409[(2)]);
var state_44409__$1 = (function (){var statearr_44419 = state_44409;
(statearr_44419[(9)] = inst_44402);

return statearr_44419;
})();
var statearr_44420_45375 = state_44409__$1;
(statearr_44420_45375[(2)] = null);

(statearr_44420_45375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (13))){
var inst_44364 = (state_44409[(10)]);
var inst_44366 = cljs.core.chunked_seq_QMARK_(inst_44364);
var state_44409__$1 = state_44409;
if(inst_44366){
var statearr_44421_45376 = state_44409__$1;
(statearr_44421_45376[(1)] = (16));

} else {
var statearr_44422_45377 = state_44409__$1;
(statearr_44422_45377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (22))){
var inst_44394 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
if(cljs.core.truth_(inst_44394)){
var statearr_44423_45378 = state_44409__$1;
(statearr_44423_45378[(1)] = (23));

} else {
var statearr_44424_45379 = state_44409__$1;
(statearr_44424_45379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (6))){
var inst_44388 = (state_44409[(7)]);
var inst_44340 = (state_44409[(8)]);
var inst_44390 = (state_44409[(11)]);
var inst_44388__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44340) : topic_fn.call(null,inst_44340));
var inst_44389 = cljs.core.deref(mults);
var inst_44390__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44389,inst_44388__$1);
var state_44409__$1 = (function (){var statearr_44425 = state_44409;
(statearr_44425[(7)] = inst_44388__$1);

(statearr_44425[(11)] = inst_44390__$1);

return statearr_44425;
})();
if(cljs.core.truth_(inst_44390__$1)){
var statearr_44426_45380 = state_44409__$1;
(statearr_44426_45380[(1)] = (19));

} else {
var statearr_44427_45381 = state_44409__$1;
(statearr_44427_45381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (25))){
var inst_44399 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44428_45382 = state_44409__$1;
(statearr_44428_45382[(2)] = inst_44399);

(statearr_44428_45382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (17))){
var inst_44364 = (state_44409[(10)]);
var inst_44373 = cljs.core.first(inst_44364);
var inst_44374 = cljs.core.async.muxch_STAR_(inst_44373);
var inst_44375 = cljs.core.async.close_BANG_(inst_44374);
var inst_44376 = cljs.core.next(inst_44364);
var inst_44350 = inst_44376;
var inst_44351 = null;
var inst_44352 = (0);
var inst_44353 = (0);
var state_44409__$1 = (function (){var statearr_44429 = state_44409;
(statearr_44429[(12)] = inst_44351);

(statearr_44429[(13)] = inst_44375);

(statearr_44429[(14)] = inst_44353);

(statearr_44429[(15)] = inst_44352);

(statearr_44429[(16)] = inst_44350);

return statearr_44429;
})();
var statearr_44430_45383 = state_44409__$1;
(statearr_44430_45383[(2)] = null);

(statearr_44430_45383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (3))){
var inst_44407 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44409__$1,inst_44407);
} else {
if((state_val_44410 === (12))){
var inst_44384 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44431_45384 = state_44409__$1;
(statearr_44431_45384[(2)] = inst_44384);

(statearr_44431_45384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (2))){
var state_44409__$1 = state_44409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44409__$1,(4),ch);
} else {
if((state_val_44410 === (23))){
var state_44409__$1 = state_44409;
var statearr_44432_45385 = state_44409__$1;
(statearr_44432_45385[(2)] = null);

(statearr_44432_45385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (19))){
var inst_44340 = (state_44409[(8)]);
var inst_44390 = (state_44409[(11)]);
var inst_44392 = cljs.core.async.muxch_STAR_(inst_44390);
var state_44409__$1 = state_44409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44409__$1,(22),inst_44392,inst_44340);
} else {
if((state_val_44410 === (11))){
var inst_44364 = (state_44409[(10)]);
var inst_44350 = (state_44409[(16)]);
var inst_44364__$1 = cljs.core.seq(inst_44350);
var state_44409__$1 = (function (){var statearr_44433 = state_44409;
(statearr_44433[(10)] = inst_44364__$1);

return statearr_44433;
})();
if(inst_44364__$1){
var statearr_44434_45386 = state_44409__$1;
(statearr_44434_45386[(1)] = (13));

} else {
var statearr_44435_45387 = state_44409__$1;
(statearr_44435_45387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (9))){
var inst_44386 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44436_45388 = state_44409__$1;
(statearr_44436_45388[(2)] = inst_44386);

(statearr_44436_45388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (5))){
var inst_44347 = cljs.core.deref(mults);
var inst_44348 = cljs.core.vals(inst_44347);
var inst_44349 = cljs.core.seq(inst_44348);
var inst_44350 = inst_44349;
var inst_44351 = null;
var inst_44352 = (0);
var inst_44353 = (0);
var state_44409__$1 = (function (){var statearr_44437 = state_44409;
(statearr_44437[(12)] = inst_44351);

(statearr_44437[(14)] = inst_44353);

(statearr_44437[(15)] = inst_44352);

(statearr_44437[(16)] = inst_44350);

return statearr_44437;
})();
var statearr_44438_45390 = state_44409__$1;
(statearr_44438_45390[(2)] = null);

(statearr_44438_45390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (14))){
var state_44409__$1 = state_44409;
var statearr_44442_45391 = state_44409__$1;
(statearr_44442_45391[(2)] = null);

(statearr_44442_45391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (16))){
var inst_44364 = (state_44409[(10)]);
var inst_44368 = cljs.core.chunk_first(inst_44364);
var inst_44369 = cljs.core.chunk_rest(inst_44364);
var inst_44370 = cljs.core.count(inst_44368);
var inst_44350 = inst_44369;
var inst_44351 = inst_44368;
var inst_44352 = inst_44370;
var inst_44353 = (0);
var state_44409__$1 = (function (){var statearr_44443 = state_44409;
(statearr_44443[(12)] = inst_44351);

(statearr_44443[(14)] = inst_44353);

(statearr_44443[(15)] = inst_44352);

(statearr_44443[(16)] = inst_44350);

return statearr_44443;
})();
var statearr_44444_45393 = state_44409__$1;
(statearr_44444_45393[(2)] = null);

(statearr_44444_45393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (10))){
var inst_44351 = (state_44409[(12)]);
var inst_44353 = (state_44409[(14)]);
var inst_44352 = (state_44409[(15)]);
var inst_44350 = (state_44409[(16)]);
var inst_44358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44351,inst_44353);
var inst_44359 = cljs.core.async.muxch_STAR_(inst_44358);
var inst_44360 = cljs.core.async.close_BANG_(inst_44359);
var inst_44361 = (inst_44353 + (1));
var tmp44439 = inst_44351;
var tmp44440 = inst_44352;
var tmp44441 = inst_44350;
var inst_44350__$1 = tmp44441;
var inst_44351__$1 = tmp44439;
var inst_44352__$1 = tmp44440;
var inst_44353__$1 = inst_44361;
var state_44409__$1 = (function (){var statearr_44445 = state_44409;
(statearr_44445[(12)] = inst_44351__$1);

(statearr_44445[(14)] = inst_44353__$1);

(statearr_44445[(17)] = inst_44360);

(statearr_44445[(15)] = inst_44352__$1);

(statearr_44445[(16)] = inst_44350__$1);

return statearr_44445;
})();
var statearr_44446_45397 = state_44409__$1;
(statearr_44446_45397[(2)] = null);

(statearr_44446_45397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (18))){
var inst_44379 = (state_44409[(2)]);
var state_44409__$1 = state_44409;
var statearr_44447_45398 = state_44409__$1;
(statearr_44447_45398[(2)] = inst_44379);

(statearr_44447_45398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44410 === (8))){
var inst_44353 = (state_44409[(14)]);
var inst_44352 = (state_44409[(15)]);
var inst_44355 = (inst_44353 < inst_44352);
var inst_44356 = inst_44355;
var state_44409__$1 = state_44409;
if(cljs.core.truth_(inst_44356)){
var statearr_44448_45399 = state_44409__$1;
(statearr_44448_45399[(1)] = (10));

} else {
var statearr_44449_45401 = state_44409__$1;
(statearr_44449_45401[(1)] = (11));

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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44450[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44450[(1)] = (1));

return statearr_44450;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44409){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44409);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44451){if((e44451 instanceof Object)){
var ex__43398__auto__ = e44451;
var statearr_44452_45402 = state_44409;
(statearr_44452_45402[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45406 = state_44409;
state_44409 = G__45406;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44453 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44453[(6)] = c__43461__auto___45367);

return statearr_44453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var G__44455 = arguments.length;
switch (G__44455) {
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
var G__44457 = arguments.length;
switch (G__44457) {
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
var G__44459 = arguments.length;
switch (G__44459) {
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
var c__43461__auto___45410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44498){
var state_val_44499 = (state_44498[(1)]);
if((state_val_44499 === (7))){
var state_44498__$1 = state_44498;
var statearr_44500_45411 = state_44498__$1;
(statearr_44500_45411[(2)] = null);

(statearr_44500_45411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (1))){
var state_44498__$1 = state_44498;
var statearr_44501_45412 = state_44498__$1;
(statearr_44501_45412[(2)] = null);

(statearr_44501_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (4))){
var inst_44462 = (state_44498[(7)]);
var inst_44464 = (inst_44462 < cnt);
var state_44498__$1 = state_44498;
if(cljs.core.truth_(inst_44464)){
var statearr_44502_45413 = state_44498__$1;
(statearr_44502_45413[(1)] = (6));

} else {
var statearr_44503_45414 = state_44498__$1;
(statearr_44503_45414[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (15))){
var inst_44494 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44504_45415 = state_44498__$1;
(statearr_44504_45415[(2)] = inst_44494);

(statearr_44504_45415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (13))){
var inst_44487 = cljs.core.async.close_BANG_(out);
var state_44498__$1 = state_44498;
var statearr_44505_45416 = state_44498__$1;
(statearr_44505_45416[(2)] = inst_44487);

(statearr_44505_45416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (6))){
var state_44498__$1 = state_44498;
var statearr_44506_45417 = state_44498__$1;
(statearr_44506_45417[(2)] = null);

(statearr_44506_45417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (3))){
var inst_44496 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44498__$1,inst_44496);
} else {
if((state_val_44499 === (12))){
var inst_44484 = (state_44498[(8)]);
var inst_44484__$1 = (state_44498[(2)]);
var inst_44485 = cljs.core.some(cljs.core.nil_QMARK_,inst_44484__$1);
var state_44498__$1 = (function (){var statearr_44507 = state_44498;
(statearr_44507[(8)] = inst_44484__$1);

return statearr_44507;
})();
if(cljs.core.truth_(inst_44485)){
var statearr_44508_45418 = state_44498__$1;
(statearr_44508_45418[(1)] = (13));

} else {
var statearr_44509_45419 = state_44498__$1;
(statearr_44509_45419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (2))){
var inst_44461 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44462 = (0);
var state_44498__$1 = (function (){var statearr_44510 = state_44498;
(statearr_44510[(9)] = inst_44461);

(statearr_44510[(7)] = inst_44462);

return statearr_44510;
})();
var statearr_44511_45420 = state_44498__$1;
(statearr_44511_45420[(2)] = null);

(statearr_44511_45420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (11))){
var inst_44462 = (state_44498[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44498,(10),Object,null,(9));
var inst_44471 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44462) : chs__$1.call(null,inst_44462));
var inst_44472 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44462) : done.call(null,inst_44462));
var inst_44473 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44471,inst_44472);
var state_44498__$1 = state_44498;
var statearr_44512_45421 = state_44498__$1;
(statearr_44512_45421[(2)] = inst_44473);


cljs.core.async.impl.ioc_helpers.process_exception(state_44498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (9))){
var inst_44462 = (state_44498[(7)]);
var inst_44475 = (state_44498[(2)]);
var inst_44476 = (inst_44462 + (1));
var inst_44462__$1 = inst_44476;
var state_44498__$1 = (function (){var statearr_44513 = state_44498;
(statearr_44513[(7)] = inst_44462__$1);

(statearr_44513[(10)] = inst_44475);

return statearr_44513;
})();
var statearr_44514_45422 = state_44498__$1;
(statearr_44514_45422[(2)] = null);

(statearr_44514_45422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (5))){
var inst_44482 = (state_44498[(2)]);
var state_44498__$1 = (function (){var statearr_44515 = state_44498;
(statearr_44515[(11)] = inst_44482);

return statearr_44515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44498__$1,(12),dchan);
} else {
if((state_val_44499 === (14))){
var inst_44484 = (state_44498[(8)]);
var inst_44489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44484);
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44498__$1,(16),out,inst_44489);
} else {
if((state_val_44499 === (16))){
var inst_44491 = (state_44498[(2)]);
var state_44498__$1 = (function (){var statearr_44516 = state_44498;
(statearr_44516[(12)] = inst_44491);

return statearr_44516;
})();
var statearr_44517_45423 = state_44498__$1;
(statearr_44517_45423[(2)] = null);

(statearr_44517_45423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (10))){
var inst_44466 = (state_44498[(2)]);
var inst_44467 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44498__$1 = (function (){var statearr_44518 = state_44498;
(statearr_44518[(13)] = inst_44466);

return statearr_44518;
})();
var statearr_44519_45424 = state_44498__$1;
(statearr_44519_45424[(2)] = inst_44467);


cljs.core.async.impl.ioc_helpers.process_exception(state_44498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (8))){
var inst_44480 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44520_45425 = state_44498__$1;
(statearr_44520_45425[(2)] = inst_44480);

(statearr_44520_45425[(1)] = (5));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44521[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44521[(1)] = (1));

return statearr_44521;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44498){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44498);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44522){if((e44522 instanceof Object)){
var ex__43398__auto__ = e44522;
var statearr_44523_45426 = state_44498;
(statearr_44523_45426[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45427 = state_44498;
state_44498 = G__45427;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44524 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44524[(6)] = c__43461__auto___45410);

return statearr_44524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var G__44527 = arguments.length;
switch (G__44527) {
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
var c__43461__auto___45429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44559){
var state_val_44560 = (state_44559[(1)]);
if((state_val_44560 === (7))){
var inst_44538 = (state_44559[(7)]);
var inst_44539 = (state_44559[(8)]);
var inst_44538__$1 = (state_44559[(2)]);
var inst_44539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44538__$1,(0),null);
var inst_44540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44538__$1,(1),null);
var inst_44541 = (inst_44539__$1 == null);
var state_44559__$1 = (function (){var statearr_44561 = state_44559;
(statearr_44561[(7)] = inst_44538__$1);

(statearr_44561[(8)] = inst_44539__$1);

(statearr_44561[(9)] = inst_44540);

return statearr_44561;
})();
if(cljs.core.truth_(inst_44541)){
var statearr_44562_45430 = state_44559__$1;
(statearr_44562_45430[(1)] = (8));

} else {
var statearr_44563_45431 = state_44559__$1;
(statearr_44563_45431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (1))){
var inst_44528 = cljs.core.vec(chs);
var inst_44529 = inst_44528;
var state_44559__$1 = (function (){var statearr_44564 = state_44559;
(statearr_44564[(10)] = inst_44529);

return statearr_44564;
})();
var statearr_44565_45432 = state_44559__$1;
(statearr_44565_45432[(2)] = null);

(statearr_44565_45432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (4))){
var inst_44529 = (state_44559[(10)]);
var state_44559__$1 = state_44559;
return cljs.core.async.ioc_alts_BANG_(state_44559__$1,(7),inst_44529);
} else {
if((state_val_44560 === (6))){
var inst_44555 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44566_45433 = state_44559__$1;
(statearr_44566_45433[(2)] = inst_44555);

(statearr_44566_45433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (3))){
var inst_44557 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44559__$1,inst_44557);
} else {
if((state_val_44560 === (2))){
var inst_44529 = (state_44559[(10)]);
var inst_44531 = cljs.core.count(inst_44529);
var inst_44532 = (inst_44531 > (0));
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44532)){
var statearr_44568_45434 = state_44559__$1;
(statearr_44568_45434[(1)] = (4));

} else {
var statearr_44569_45435 = state_44559__$1;
(statearr_44569_45435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (11))){
var inst_44529 = (state_44559[(10)]);
var inst_44548 = (state_44559[(2)]);
var tmp44567 = inst_44529;
var inst_44529__$1 = tmp44567;
var state_44559__$1 = (function (){var statearr_44570 = state_44559;
(statearr_44570[(10)] = inst_44529__$1);

(statearr_44570[(11)] = inst_44548);

return statearr_44570;
})();
var statearr_44571_45436 = state_44559__$1;
(statearr_44571_45436[(2)] = null);

(statearr_44571_45436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (9))){
var inst_44539 = (state_44559[(8)]);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44559__$1,(11),out,inst_44539);
} else {
if((state_val_44560 === (5))){
var inst_44553 = cljs.core.async.close_BANG_(out);
var state_44559__$1 = state_44559;
var statearr_44572_45437 = state_44559__$1;
(statearr_44572_45437[(2)] = inst_44553);

(statearr_44572_45437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (10))){
var inst_44551 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44573_45438 = state_44559__$1;
(statearr_44573_45438[(2)] = inst_44551);

(statearr_44573_45438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (8))){
var inst_44529 = (state_44559[(10)]);
var inst_44538 = (state_44559[(7)]);
var inst_44539 = (state_44559[(8)]);
var inst_44540 = (state_44559[(9)]);
var inst_44543 = (function (){var cs = inst_44529;
var vec__44534 = inst_44538;
var v = inst_44539;
var c = inst_44540;
return (function (p1__44525_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44525_SHARP_);
});
})();
var inst_44544 = cljs.core.filterv(inst_44543,inst_44529);
var inst_44529__$1 = inst_44544;
var state_44559__$1 = (function (){var statearr_44574 = state_44559;
(statearr_44574[(10)] = inst_44529__$1);

return statearr_44574;
})();
var statearr_44575_45439 = state_44559__$1;
(statearr_44575_45439[(2)] = null);

(statearr_44575_45439[(1)] = (2));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44576[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44576[(1)] = (1));

return statearr_44576;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44559){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44559);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44577){if((e44577 instanceof Object)){
var ex__43398__auto__ = e44577;
var statearr_44578_45440 = state_44559;
(statearr_44578_45440[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45441 = state_44559;
state_44559 = G__45441;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44579 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44579[(6)] = c__43461__auto___45429);

return statearr_44579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
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
var G__44581 = arguments.length;
switch (G__44581) {
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
var c__43461__auto___45443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44605){
var state_val_44606 = (state_44605[(1)]);
if((state_val_44606 === (7))){
var inst_44587 = (state_44605[(7)]);
var inst_44587__$1 = (state_44605[(2)]);
var inst_44588 = (inst_44587__$1 == null);
var inst_44589 = cljs.core.not(inst_44588);
var state_44605__$1 = (function (){var statearr_44607 = state_44605;
(statearr_44607[(7)] = inst_44587__$1);

return statearr_44607;
})();
if(inst_44589){
var statearr_44608_45444 = state_44605__$1;
(statearr_44608_45444[(1)] = (8));

} else {
var statearr_44609_45445 = state_44605__$1;
(statearr_44609_45445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (1))){
var inst_44582 = (0);
var state_44605__$1 = (function (){var statearr_44610 = state_44605;
(statearr_44610[(8)] = inst_44582);

return statearr_44610;
})();
var statearr_44611_45446 = state_44605__$1;
(statearr_44611_45446[(2)] = null);

(statearr_44611_45446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (4))){
var state_44605__$1 = state_44605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44605__$1,(7),ch);
} else {
if((state_val_44606 === (6))){
var inst_44600 = (state_44605[(2)]);
var state_44605__$1 = state_44605;
var statearr_44612_45447 = state_44605__$1;
(statearr_44612_45447[(2)] = inst_44600);

(statearr_44612_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (3))){
var inst_44602 = (state_44605[(2)]);
var inst_44603 = cljs.core.async.close_BANG_(out);
var state_44605__$1 = (function (){var statearr_44613 = state_44605;
(statearr_44613[(9)] = inst_44602);

return statearr_44613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44605__$1,inst_44603);
} else {
if((state_val_44606 === (2))){
var inst_44582 = (state_44605[(8)]);
var inst_44584 = (inst_44582 < n);
var state_44605__$1 = state_44605;
if(cljs.core.truth_(inst_44584)){
var statearr_44614_45448 = state_44605__$1;
(statearr_44614_45448[(1)] = (4));

} else {
var statearr_44615_45449 = state_44605__$1;
(statearr_44615_45449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (11))){
var inst_44582 = (state_44605[(8)]);
var inst_44592 = (state_44605[(2)]);
var inst_44593 = (inst_44582 + (1));
var inst_44582__$1 = inst_44593;
var state_44605__$1 = (function (){var statearr_44616 = state_44605;
(statearr_44616[(10)] = inst_44592);

(statearr_44616[(8)] = inst_44582__$1);

return statearr_44616;
})();
var statearr_44617_45450 = state_44605__$1;
(statearr_44617_45450[(2)] = null);

(statearr_44617_45450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (9))){
var state_44605__$1 = state_44605;
var statearr_44618_45451 = state_44605__$1;
(statearr_44618_45451[(2)] = null);

(statearr_44618_45451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (5))){
var state_44605__$1 = state_44605;
var statearr_44619_45452 = state_44605__$1;
(statearr_44619_45452[(2)] = null);

(statearr_44619_45452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (10))){
var inst_44597 = (state_44605[(2)]);
var state_44605__$1 = state_44605;
var statearr_44620_45453 = state_44605__$1;
(statearr_44620_45453[(2)] = inst_44597);

(statearr_44620_45453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (8))){
var inst_44587 = (state_44605[(7)]);
var state_44605__$1 = state_44605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44605__$1,(11),out,inst_44587);
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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44621[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44621[(1)] = (1));

return statearr_44621;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44605){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44605);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44622){if((e44622 instanceof Object)){
var ex__43398__auto__ = e44622;
var statearr_44623_45457 = state_44605;
(statearr_44623_45457[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45458 = state_44605;
state_44605 = G__45458;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44624 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44624[(6)] = c__43461__auto___45443);

return statearr_44624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44626 = (function (f,ch,meta44627){
this.f = f;
this.ch = ch;
this.meta44627 = meta44627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44628,meta44627__$1){
var self__ = this;
var _44628__$1 = this;
return (new cljs.core.async.t_cljs$core$async44626(self__.f,self__.ch,meta44627__$1));
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44628){
var self__ = this;
var _44628__$1 = this;
return self__.meta44627;
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44629 = (function (f,ch,meta44627,_,fn1,meta44630){
this.f = f;
this.ch = ch;
this.meta44627 = meta44627;
this._ = _;
this.fn1 = fn1;
this.meta44630 = meta44630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44631,meta44630__$1){
var self__ = this;
var _44631__$1 = this;
return (new cljs.core.async.t_cljs$core$async44629(self__.f,self__.ch,self__.meta44627,self__._,self__.fn1,meta44630__$1));
}));

(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44631){
var self__ = this;
var _44631__$1 = this;
return self__.meta44630;
}));

(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44625_SHARP_){
var G__44632 = (((p1__44625_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44625_SHARP_) : self__.f.call(null,p1__44625_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44632) : f1.call(null,G__44632));
});
}));

(cljs.core.async.t_cljs$core$async44629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44627","meta44627",635488054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44626","cljs.core.async/t_cljs$core$async44626",1326556874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44630","meta44630",1692752209,null)], null);
}));

(cljs.core.async.t_cljs$core$async44629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44629");

(cljs.core.async.t_cljs$core$async44629.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44629.
 */
cljs.core.async.__GT_t_cljs$core$async44629 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44629(f__$1,ch__$1,meta44627__$1,___$2,fn1__$1,meta44630){
return (new cljs.core.async.t_cljs$core$async44629(f__$1,ch__$1,meta44627__$1,___$2,fn1__$1,meta44630));
});

}

return (new cljs.core.async.t_cljs$core$async44629(self__.f,self__.ch,self__.meta44627,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44633 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44633) : self__.f.call(null,G__44633));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44627","meta44627",635488054,null)], null);
}));

(cljs.core.async.t_cljs$core$async44626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44626");

(cljs.core.async.t_cljs$core$async44626.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44626.
 */
cljs.core.async.__GT_t_cljs$core$async44626 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44626(f__$1,ch__$1,meta44627){
return (new cljs.core.async.t_cljs$core$async44626(f__$1,ch__$1,meta44627));
});

}

return (new cljs.core.async.t_cljs$core$async44626(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44634 = (function (f,ch,meta44635){
this.f = f;
this.ch = ch;
this.meta44635 = meta44635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44636,meta44635__$1){
var self__ = this;
var _44636__$1 = this;
return (new cljs.core.async.t_cljs$core$async44634(self__.f,self__.ch,meta44635__$1));
}));

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44636){
var self__ = this;
var _44636__$1 = this;
return self__.meta44635;
}));

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44635","meta44635",-912954588,null)], null);
}));

(cljs.core.async.t_cljs$core$async44634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44634");

(cljs.core.async.t_cljs$core$async44634.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44634.
 */
cljs.core.async.__GT_t_cljs$core$async44634 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44634(f__$1,ch__$1,meta44635){
return (new cljs.core.async.t_cljs$core$async44634(f__$1,ch__$1,meta44635));
});

}

return (new cljs.core.async.t_cljs$core$async44634(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44637 = (function (p,ch,meta44638){
this.p = p;
this.ch = ch;
this.meta44638 = meta44638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44639,meta44638__$1){
var self__ = this;
var _44639__$1 = this;
return (new cljs.core.async.t_cljs$core$async44637(self__.p,self__.ch,meta44638__$1));
}));

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44639){
var self__ = this;
var _44639__$1 = this;
return self__.meta44638;
}));

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44638","meta44638",263300277,null)], null);
}));

(cljs.core.async.t_cljs$core$async44637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44637");

(cljs.core.async.t_cljs$core$async44637.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44637.
 */
cljs.core.async.__GT_t_cljs$core$async44637 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44637(p__$1,ch__$1,meta44638){
return (new cljs.core.async.t_cljs$core$async44637(p__$1,ch__$1,meta44638));
});

}

return (new cljs.core.async.t_cljs$core$async44637(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44641 = arguments.length;
switch (G__44641) {
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
var c__43461__auto___45463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44662){
var state_val_44663 = (state_44662[(1)]);
if((state_val_44663 === (7))){
var inst_44658 = (state_44662[(2)]);
var state_44662__$1 = state_44662;
var statearr_44664_45464 = state_44662__$1;
(statearr_44664_45464[(2)] = inst_44658);

(statearr_44664_45464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (1))){
var state_44662__$1 = state_44662;
var statearr_44665_45465 = state_44662__$1;
(statearr_44665_45465[(2)] = null);

(statearr_44665_45465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (4))){
var inst_44644 = (state_44662[(7)]);
var inst_44644__$1 = (state_44662[(2)]);
var inst_44645 = (inst_44644__$1 == null);
var state_44662__$1 = (function (){var statearr_44666 = state_44662;
(statearr_44666[(7)] = inst_44644__$1);

return statearr_44666;
})();
if(cljs.core.truth_(inst_44645)){
var statearr_44667_45466 = state_44662__$1;
(statearr_44667_45466[(1)] = (5));

} else {
var statearr_44668_45467 = state_44662__$1;
(statearr_44668_45467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (6))){
var inst_44644 = (state_44662[(7)]);
var inst_44649 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44644) : p.call(null,inst_44644));
var state_44662__$1 = state_44662;
if(cljs.core.truth_(inst_44649)){
var statearr_44669_45468 = state_44662__$1;
(statearr_44669_45468[(1)] = (8));

} else {
var statearr_44670_45469 = state_44662__$1;
(statearr_44670_45469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (3))){
var inst_44660 = (state_44662[(2)]);
var state_44662__$1 = state_44662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44662__$1,inst_44660);
} else {
if((state_val_44663 === (2))){
var state_44662__$1 = state_44662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44662__$1,(4),ch);
} else {
if((state_val_44663 === (11))){
var inst_44652 = (state_44662[(2)]);
var state_44662__$1 = state_44662;
var statearr_44671_45470 = state_44662__$1;
(statearr_44671_45470[(2)] = inst_44652);

(statearr_44671_45470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (9))){
var state_44662__$1 = state_44662;
var statearr_44672_45471 = state_44662__$1;
(statearr_44672_45471[(2)] = null);

(statearr_44672_45471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (5))){
var inst_44647 = cljs.core.async.close_BANG_(out);
var state_44662__$1 = state_44662;
var statearr_44673_45472 = state_44662__$1;
(statearr_44673_45472[(2)] = inst_44647);

(statearr_44673_45472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (10))){
var inst_44655 = (state_44662[(2)]);
var state_44662__$1 = (function (){var statearr_44674 = state_44662;
(statearr_44674[(8)] = inst_44655);

return statearr_44674;
})();
var statearr_44675_45473 = state_44662__$1;
(statearr_44675_45473[(2)] = null);

(statearr_44675_45473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44663 === (8))){
var inst_44644 = (state_44662[(7)]);
var state_44662__$1 = state_44662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44662__$1,(11),out,inst_44644);
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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44676 = [null,null,null,null,null,null,null,null,null];
(statearr_44676[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44676[(1)] = (1));

return statearr_44676;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44662){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44662);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44677){if((e44677 instanceof Object)){
var ex__43398__auto__ = e44677;
var statearr_44678_45474 = state_44662;
(statearr_44678_45474[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45475 = state_44662;
state_44662 = G__45475;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44679 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44679[(6)] = c__43461__auto___45463);

return statearr_44679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44681 = arguments.length;
switch (G__44681) {
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
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44743){
var state_val_44744 = (state_44743[(1)]);
if((state_val_44744 === (7))){
var inst_44739 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44745_45477 = state_44743__$1;
(statearr_44745_45477[(2)] = inst_44739);

(statearr_44745_45477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (20))){
var inst_44709 = (state_44743[(7)]);
var inst_44720 = (state_44743[(2)]);
var inst_44721 = cljs.core.next(inst_44709);
var inst_44695 = inst_44721;
var inst_44696 = null;
var inst_44697 = (0);
var inst_44698 = (0);
var state_44743__$1 = (function (){var statearr_44746 = state_44743;
(statearr_44746[(8)] = inst_44695);

(statearr_44746[(9)] = inst_44698);

(statearr_44746[(10)] = inst_44720);

(statearr_44746[(11)] = inst_44696);

(statearr_44746[(12)] = inst_44697);

return statearr_44746;
})();
var statearr_44747_45478 = state_44743__$1;
(statearr_44747_45478[(2)] = null);

(statearr_44747_45478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (1))){
var state_44743__$1 = state_44743;
var statearr_44748_45479 = state_44743__$1;
(statearr_44748_45479[(2)] = null);

(statearr_44748_45479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (4))){
var inst_44684 = (state_44743[(13)]);
var inst_44684__$1 = (state_44743[(2)]);
var inst_44685 = (inst_44684__$1 == null);
var state_44743__$1 = (function (){var statearr_44749 = state_44743;
(statearr_44749[(13)] = inst_44684__$1);

return statearr_44749;
})();
if(cljs.core.truth_(inst_44685)){
var statearr_44750_45480 = state_44743__$1;
(statearr_44750_45480[(1)] = (5));

} else {
var statearr_44751_45481 = state_44743__$1;
(statearr_44751_45481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (15))){
var state_44743__$1 = state_44743;
var statearr_44755_45482 = state_44743__$1;
(statearr_44755_45482[(2)] = null);

(statearr_44755_45482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (21))){
var state_44743__$1 = state_44743;
var statearr_44756_45483 = state_44743__$1;
(statearr_44756_45483[(2)] = null);

(statearr_44756_45483[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (13))){
var inst_44695 = (state_44743[(8)]);
var inst_44698 = (state_44743[(9)]);
var inst_44696 = (state_44743[(11)]);
var inst_44697 = (state_44743[(12)]);
var inst_44705 = (state_44743[(2)]);
var inst_44706 = (inst_44698 + (1));
var tmp44752 = inst_44695;
var tmp44753 = inst_44696;
var tmp44754 = inst_44697;
var inst_44695__$1 = tmp44752;
var inst_44696__$1 = tmp44753;
var inst_44697__$1 = tmp44754;
var inst_44698__$1 = inst_44706;
var state_44743__$1 = (function (){var statearr_44757 = state_44743;
(statearr_44757[(8)] = inst_44695__$1);

(statearr_44757[(9)] = inst_44698__$1);

(statearr_44757[(11)] = inst_44696__$1);

(statearr_44757[(12)] = inst_44697__$1);

(statearr_44757[(14)] = inst_44705);

return statearr_44757;
})();
var statearr_44758_45484 = state_44743__$1;
(statearr_44758_45484[(2)] = null);

(statearr_44758_45484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (22))){
var state_44743__$1 = state_44743;
var statearr_44759_45485 = state_44743__$1;
(statearr_44759_45485[(2)] = null);

(statearr_44759_45485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (6))){
var inst_44684 = (state_44743[(13)]);
var inst_44693 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44684) : f.call(null,inst_44684));
var inst_44694 = cljs.core.seq(inst_44693);
var inst_44695 = inst_44694;
var inst_44696 = null;
var inst_44697 = (0);
var inst_44698 = (0);
var state_44743__$1 = (function (){var statearr_44760 = state_44743;
(statearr_44760[(8)] = inst_44695);

(statearr_44760[(9)] = inst_44698);

(statearr_44760[(11)] = inst_44696);

(statearr_44760[(12)] = inst_44697);

return statearr_44760;
})();
var statearr_44761_45486 = state_44743__$1;
(statearr_44761_45486[(2)] = null);

(statearr_44761_45486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (17))){
var inst_44709 = (state_44743[(7)]);
var inst_44713 = cljs.core.chunk_first(inst_44709);
var inst_44714 = cljs.core.chunk_rest(inst_44709);
var inst_44715 = cljs.core.count(inst_44713);
var inst_44695 = inst_44714;
var inst_44696 = inst_44713;
var inst_44697 = inst_44715;
var inst_44698 = (0);
var state_44743__$1 = (function (){var statearr_44762 = state_44743;
(statearr_44762[(8)] = inst_44695);

(statearr_44762[(9)] = inst_44698);

(statearr_44762[(11)] = inst_44696);

(statearr_44762[(12)] = inst_44697);

return statearr_44762;
})();
var statearr_44763_45487 = state_44743__$1;
(statearr_44763_45487[(2)] = null);

(statearr_44763_45487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (3))){
var inst_44741 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44743__$1,inst_44741);
} else {
if((state_val_44744 === (12))){
var inst_44729 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44764_45488 = state_44743__$1;
(statearr_44764_45488[(2)] = inst_44729);

(statearr_44764_45488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (2))){
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44743__$1,(4),in$);
} else {
if((state_val_44744 === (23))){
var inst_44737 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44765_45489 = state_44743__$1;
(statearr_44765_45489[(2)] = inst_44737);

(statearr_44765_45489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (19))){
var inst_44724 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44766_45490 = state_44743__$1;
(statearr_44766_45490[(2)] = inst_44724);

(statearr_44766_45490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (11))){
var inst_44695 = (state_44743[(8)]);
var inst_44709 = (state_44743[(7)]);
var inst_44709__$1 = cljs.core.seq(inst_44695);
var state_44743__$1 = (function (){var statearr_44767 = state_44743;
(statearr_44767[(7)] = inst_44709__$1);

return statearr_44767;
})();
if(inst_44709__$1){
var statearr_44768_45491 = state_44743__$1;
(statearr_44768_45491[(1)] = (14));

} else {
var statearr_44769_45492 = state_44743__$1;
(statearr_44769_45492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (9))){
var inst_44731 = (state_44743[(2)]);
var inst_44732 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44743__$1 = (function (){var statearr_44770 = state_44743;
(statearr_44770[(15)] = inst_44731);

return statearr_44770;
})();
if(cljs.core.truth_(inst_44732)){
var statearr_44771_45493 = state_44743__$1;
(statearr_44771_45493[(1)] = (21));

} else {
var statearr_44772_45494 = state_44743__$1;
(statearr_44772_45494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (5))){
var inst_44687 = cljs.core.async.close_BANG_(out);
var state_44743__$1 = state_44743;
var statearr_44773_45495 = state_44743__$1;
(statearr_44773_45495[(2)] = inst_44687);

(statearr_44773_45495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (14))){
var inst_44709 = (state_44743[(7)]);
var inst_44711 = cljs.core.chunked_seq_QMARK_(inst_44709);
var state_44743__$1 = state_44743;
if(inst_44711){
var statearr_44774_45496 = state_44743__$1;
(statearr_44774_45496[(1)] = (17));

} else {
var statearr_44775_45497 = state_44743__$1;
(statearr_44775_45497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (16))){
var inst_44727 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44776_45498 = state_44743__$1;
(statearr_44776_45498[(2)] = inst_44727);

(statearr_44776_45498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (10))){
var inst_44698 = (state_44743[(9)]);
var inst_44696 = (state_44743[(11)]);
var inst_44703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44696,inst_44698);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44743__$1,(13),out,inst_44703);
} else {
if((state_val_44744 === (18))){
var inst_44709 = (state_44743[(7)]);
var inst_44718 = cljs.core.first(inst_44709);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44743__$1,(20),out,inst_44718);
} else {
if((state_val_44744 === (8))){
var inst_44698 = (state_44743[(9)]);
var inst_44697 = (state_44743[(12)]);
var inst_44700 = (inst_44698 < inst_44697);
var inst_44701 = inst_44700;
var state_44743__$1 = state_44743;
if(cljs.core.truth_(inst_44701)){
var statearr_44777_45499 = state_44743__$1;
(statearr_44777_45499[(1)] = (10));

} else {
var statearr_44778_45500 = state_44743__$1;
(statearr_44778_45500[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____0 = (function (){
var statearr_44779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44779[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__);

(statearr_44779[(1)] = (1));

return statearr_44779;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____1 = (function (state_44743){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44743);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44780){if((e44780 instanceof Object)){
var ex__43398__auto__ = e44780;
var statearr_44781_45501 = state_44743;
(statearr_44781_45501[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45502 = state_44743;
state_44743 = G__45502;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__ = function(state_44743){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____1.call(this,state_44743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43395__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44782 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44782[(6)] = c__43461__auto__);

return statearr_44782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44784 = arguments.length;
switch (G__44784) {
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
var G__44786 = arguments.length;
switch (G__44786) {
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
var G__44788 = arguments.length;
switch (G__44788) {
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
var c__43461__auto___45506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44812){
var state_val_44813 = (state_44812[(1)]);
if((state_val_44813 === (7))){
var inst_44807 = (state_44812[(2)]);
var state_44812__$1 = state_44812;
var statearr_44814_45507 = state_44812__$1;
(statearr_44814_45507[(2)] = inst_44807);

(statearr_44814_45507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (1))){
var inst_44789 = null;
var state_44812__$1 = (function (){var statearr_44815 = state_44812;
(statearr_44815[(7)] = inst_44789);

return statearr_44815;
})();
var statearr_44816_45508 = state_44812__$1;
(statearr_44816_45508[(2)] = null);

(statearr_44816_45508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (4))){
var inst_44792 = (state_44812[(8)]);
var inst_44792__$1 = (state_44812[(2)]);
var inst_44793 = (inst_44792__$1 == null);
var inst_44794 = cljs.core.not(inst_44793);
var state_44812__$1 = (function (){var statearr_44817 = state_44812;
(statearr_44817[(8)] = inst_44792__$1);

return statearr_44817;
})();
if(inst_44794){
var statearr_44818_45509 = state_44812__$1;
(statearr_44818_45509[(1)] = (5));

} else {
var statearr_44819_45510 = state_44812__$1;
(statearr_44819_45510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (6))){
var state_44812__$1 = state_44812;
var statearr_44820_45511 = state_44812__$1;
(statearr_44820_45511[(2)] = null);

(statearr_44820_45511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (3))){
var inst_44809 = (state_44812[(2)]);
var inst_44810 = cljs.core.async.close_BANG_(out);
var state_44812__$1 = (function (){var statearr_44821 = state_44812;
(statearr_44821[(9)] = inst_44809);

return statearr_44821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44812__$1,inst_44810);
} else {
if((state_val_44813 === (2))){
var state_44812__$1 = state_44812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44812__$1,(4),ch);
} else {
if((state_val_44813 === (11))){
var inst_44792 = (state_44812[(8)]);
var inst_44801 = (state_44812[(2)]);
var inst_44789 = inst_44792;
var state_44812__$1 = (function (){var statearr_44822 = state_44812;
(statearr_44822[(7)] = inst_44789);

(statearr_44822[(10)] = inst_44801);

return statearr_44822;
})();
var statearr_44823_45512 = state_44812__$1;
(statearr_44823_45512[(2)] = null);

(statearr_44823_45512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (9))){
var inst_44792 = (state_44812[(8)]);
var state_44812__$1 = state_44812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44812__$1,(11),out,inst_44792);
} else {
if((state_val_44813 === (5))){
var inst_44792 = (state_44812[(8)]);
var inst_44789 = (state_44812[(7)]);
var inst_44796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44792,inst_44789);
var state_44812__$1 = state_44812;
if(inst_44796){
var statearr_44825_45513 = state_44812__$1;
(statearr_44825_45513[(1)] = (8));

} else {
var statearr_44826_45514 = state_44812__$1;
(statearr_44826_45514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (10))){
var inst_44804 = (state_44812[(2)]);
var state_44812__$1 = state_44812;
var statearr_44827_45515 = state_44812__$1;
(statearr_44827_45515[(2)] = inst_44804);

(statearr_44827_45515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44813 === (8))){
var inst_44789 = (state_44812[(7)]);
var tmp44824 = inst_44789;
var inst_44789__$1 = tmp44824;
var state_44812__$1 = (function (){var statearr_44828 = state_44812;
(statearr_44828[(7)] = inst_44789__$1);

return statearr_44828;
})();
var statearr_44829_45516 = state_44812__$1;
(statearr_44829_45516[(2)] = null);

(statearr_44829_45516[(1)] = (2));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44830[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44830[(1)] = (1));

return statearr_44830;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44812){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44812);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44831){if((e44831 instanceof Object)){
var ex__43398__auto__ = e44831;
var statearr_44832_45517 = state_44812;
(statearr_44832_45517[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45518 = state_44812;
state_44812 = G__45518;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44833 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44833[(6)] = c__43461__auto___45506);

return statearr_44833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44835 = arguments.length;
switch (G__44835) {
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
var c__43461__auto___45520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44873){
var state_val_44874 = (state_44873[(1)]);
if((state_val_44874 === (7))){
var inst_44869 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
var statearr_44875_45521 = state_44873__$1;
(statearr_44875_45521[(2)] = inst_44869);

(statearr_44875_45521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (1))){
var inst_44836 = (new Array(n));
var inst_44837 = inst_44836;
var inst_44838 = (0);
var state_44873__$1 = (function (){var statearr_44876 = state_44873;
(statearr_44876[(7)] = inst_44837);

(statearr_44876[(8)] = inst_44838);

return statearr_44876;
})();
var statearr_44877_45522 = state_44873__$1;
(statearr_44877_45522[(2)] = null);

(statearr_44877_45522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (4))){
var inst_44841 = (state_44873[(9)]);
var inst_44841__$1 = (state_44873[(2)]);
var inst_44842 = (inst_44841__$1 == null);
var inst_44843 = cljs.core.not(inst_44842);
var state_44873__$1 = (function (){var statearr_44878 = state_44873;
(statearr_44878[(9)] = inst_44841__$1);

return statearr_44878;
})();
if(inst_44843){
var statearr_44879_45523 = state_44873__$1;
(statearr_44879_45523[(1)] = (5));

} else {
var statearr_44880_45524 = state_44873__$1;
(statearr_44880_45524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (15))){
var inst_44863 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
var statearr_44881_45525 = state_44873__$1;
(statearr_44881_45525[(2)] = inst_44863);

(statearr_44881_45525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (13))){
var state_44873__$1 = state_44873;
var statearr_44882_45526 = state_44873__$1;
(statearr_44882_45526[(2)] = null);

(statearr_44882_45526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (6))){
var inst_44838 = (state_44873[(8)]);
var inst_44859 = (inst_44838 > (0));
var state_44873__$1 = state_44873;
if(cljs.core.truth_(inst_44859)){
var statearr_44883_45527 = state_44873__$1;
(statearr_44883_45527[(1)] = (12));

} else {
var statearr_44884_45528 = state_44873__$1;
(statearr_44884_45528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (3))){
var inst_44871 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44873__$1,inst_44871);
} else {
if((state_val_44874 === (12))){
var inst_44837 = (state_44873[(7)]);
var inst_44861 = cljs.core.vec(inst_44837);
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44873__$1,(15),out,inst_44861);
} else {
if((state_val_44874 === (2))){
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44873__$1,(4),ch);
} else {
if((state_val_44874 === (11))){
var inst_44853 = (state_44873[(2)]);
var inst_44854 = (new Array(n));
var inst_44837 = inst_44854;
var inst_44838 = (0);
var state_44873__$1 = (function (){var statearr_44885 = state_44873;
(statearr_44885[(7)] = inst_44837);

(statearr_44885[(8)] = inst_44838);

(statearr_44885[(10)] = inst_44853);

return statearr_44885;
})();
var statearr_44886_45529 = state_44873__$1;
(statearr_44886_45529[(2)] = null);

(statearr_44886_45529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (9))){
var inst_44837 = (state_44873[(7)]);
var inst_44851 = cljs.core.vec(inst_44837);
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44873__$1,(11),out,inst_44851);
} else {
if((state_val_44874 === (5))){
var inst_44841 = (state_44873[(9)]);
var inst_44837 = (state_44873[(7)]);
var inst_44838 = (state_44873[(8)]);
var inst_44846 = (state_44873[(11)]);
var inst_44845 = (inst_44837[inst_44838] = inst_44841);
var inst_44846__$1 = (inst_44838 + (1));
var inst_44847 = (inst_44846__$1 < n);
var state_44873__$1 = (function (){var statearr_44887 = state_44873;
(statearr_44887[(12)] = inst_44845);

(statearr_44887[(11)] = inst_44846__$1);

return statearr_44887;
})();
if(cljs.core.truth_(inst_44847)){
var statearr_44888_45530 = state_44873__$1;
(statearr_44888_45530[(1)] = (8));

} else {
var statearr_44889_45531 = state_44873__$1;
(statearr_44889_45531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (14))){
var inst_44866 = (state_44873[(2)]);
var inst_44867 = cljs.core.async.close_BANG_(out);
var state_44873__$1 = (function (){var statearr_44891 = state_44873;
(statearr_44891[(13)] = inst_44866);

return statearr_44891;
})();
var statearr_44892_45532 = state_44873__$1;
(statearr_44892_45532[(2)] = inst_44867);

(statearr_44892_45532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (10))){
var inst_44857 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
var statearr_44893_45533 = state_44873__$1;
(statearr_44893_45533[(2)] = inst_44857);

(statearr_44893_45533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (8))){
var inst_44837 = (state_44873[(7)]);
var inst_44846 = (state_44873[(11)]);
var tmp44890 = inst_44837;
var inst_44837__$1 = tmp44890;
var inst_44838 = inst_44846;
var state_44873__$1 = (function (){var statearr_44894 = state_44873;
(statearr_44894[(7)] = inst_44837__$1);

(statearr_44894[(8)] = inst_44838);

return statearr_44894;
})();
var statearr_44895_45534 = state_44873__$1;
(statearr_44895_45534[(2)] = null);

(statearr_44895_45534[(1)] = (2));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44896[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44896[(1)] = (1));

return statearr_44896;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44873){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44873);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44897){if((e44897 instanceof Object)){
var ex__43398__auto__ = e44897;
var statearr_44898_45535 = state_44873;
(statearr_44898_45535[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45536 = state_44873;
state_44873 = G__45536;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44899 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44899[(6)] = c__43461__auto___45520);

return statearr_44899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44901 = arguments.length;
switch (G__44901) {
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
var c__43461__auto___45538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_44943){
var state_val_44944 = (state_44943[(1)]);
if((state_val_44944 === (7))){
var inst_44939 = (state_44943[(2)]);
var state_44943__$1 = state_44943;
var statearr_44945_45539 = state_44943__$1;
(statearr_44945_45539[(2)] = inst_44939);

(statearr_44945_45539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (1))){
var inst_44902 = [];
var inst_44903 = inst_44902;
var inst_44904 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44943__$1 = (function (){var statearr_44946 = state_44943;
(statearr_44946[(7)] = inst_44904);

(statearr_44946[(8)] = inst_44903);

return statearr_44946;
})();
var statearr_44947_45540 = state_44943__$1;
(statearr_44947_45540[(2)] = null);

(statearr_44947_45540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (4))){
var inst_44907 = (state_44943[(9)]);
var inst_44907__$1 = (state_44943[(2)]);
var inst_44908 = (inst_44907__$1 == null);
var inst_44909 = cljs.core.not(inst_44908);
var state_44943__$1 = (function (){var statearr_44948 = state_44943;
(statearr_44948[(9)] = inst_44907__$1);

return statearr_44948;
})();
if(inst_44909){
var statearr_44949_45541 = state_44943__$1;
(statearr_44949_45541[(1)] = (5));

} else {
var statearr_44950_45542 = state_44943__$1;
(statearr_44950_45542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (15))){
var inst_44933 = (state_44943[(2)]);
var state_44943__$1 = state_44943;
var statearr_44951_45545 = state_44943__$1;
(statearr_44951_45545[(2)] = inst_44933);

(statearr_44951_45545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (13))){
var state_44943__$1 = state_44943;
var statearr_44952_45548 = state_44943__$1;
(statearr_44952_45548[(2)] = null);

(statearr_44952_45548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (6))){
var inst_44903 = (state_44943[(8)]);
var inst_44928 = inst_44903.length;
var inst_44929 = (inst_44928 > (0));
var state_44943__$1 = state_44943;
if(cljs.core.truth_(inst_44929)){
var statearr_44953_45553 = state_44943__$1;
(statearr_44953_45553[(1)] = (12));

} else {
var statearr_44954_45554 = state_44943__$1;
(statearr_44954_45554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (3))){
var inst_44941 = (state_44943[(2)]);
var state_44943__$1 = state_44943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44943__$1,inst_44941);
} else {
if((state_val_44944 === (12))){
var inst_44903 = (state_44943[(8)]);
var inst_44931 = cljs.core.vec(inst_44903);
var state_44943__$1 = state_44943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44943__$1,(15),out,inst_44931);
} else {
if((state_val_44944 === (2))){
var state_44943__$1 = state_44943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44943__$1,(4),ch);
} else {
if((state_val_44944 === (11))){
var inst_44911 = (state_44943[(10)]);
var inst_44907 = (state_44943[(9)]);
var inst_44921 = (state_44943[(2)]);
var inst_44922 = [];
var inst_44923 = inst_44922.push(inst_44907);
var inst_44903 = inst_44922;
var inst_44904 = inst_44911;
var state_44943__$1 = (function (){var statearr_44955 = state_44943;
(statearr_44955[(11)] = inst_44923);

(statearr_44955[(7)] = inst_44904);

(statearr_44955[(12)] = inst_44921);

(statearr_44955[(8)] = inst_44903);

return statearr_44955;
})();
var statearr_44956_45557 = state_44943__$1;
(statearr_44956_45557[(2)] = null);

(statearr_44956_45557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (9))){
var inst_44903 = (state_44943[(8)]);
var inst_44919 = cljs.core.vec(inst_44903);
var state_44943__$1 = state_44943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44943__$1,(11),out,inst_44919);
} else {
if((state_val_44944 === (5))){
var inst_44904 = (state_44943[(7)]);
var inst_44911 = (state_44943[(10)]);
var inst_44907 = (state_44943[(9)]);
var inst_44911__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44907) : f.call(null,inst_44907));
var inst_44912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44911__$1,inst_44904);
var inst_44913 = cljs.core.keyword_identical_QMARK_(inst_44904,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44914 = ((inst_44912) || (inst_44913));
var state_44943__$1 = (function (){var statearr_44957 = state_44943;
(statearr_44957[(10)] = inst_44911__$1);

return statearr_44957;
})();
if(cljs.core.truth_(inst_44914)){
var statearr_44958_45561 = state_44943__$1;
(statearr_44958_45561[(1)] = (8));

} else {
var statearr_44959_45562 = state_44943__$1;
(statearr_44959_45562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (14))){
var inst_44936 = (state_44943[(2)]);
var inst_44937 = cljs.core.async.close_BANG_(out);
var state_44943__$1 = (function (){var statearr_44961 = state_44943;
(statearr_44961[(13)] = inst_44936);

return statearr_44961;
})();
var statearr_44962_45563 = state_44943__$1;
(statearr_44962_45563[(2)] = inst_44937);

(statearr_44962_45563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (10))){
var inst_44926 = (state_44943[(2)]);
var state_44943__$1 = state_44943;
var statearr_44963_45564 = state_44943__$1;
(statearr_44963_45564[(2)] = inst_44926);

(statearr_44963_45564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44944 === (8))){
var inst_44911 = (state_44943[(10)]);
var inst_44907 = (state_44943[(9)]);
var inst_44903 = (state_44943[(8)]);
var inst_44916 = inst_44903.push(inst_44907);
var tmp44960 = inst_44903;
var inst_44903__$1 = tmp44960;
var inst_44904 = inst_44911;
var state_44943__$1 = (function (){var statearr_44964 = state_44943;
(statearr_44964[(14)] = inst_44916);

(statearr_44964[(7)] = inst_44904);

(statearr_44964[(8)] = inst_44903__$1);

return statearr_44964;
})();
var statearr_44965_45565 = state_44943__$1;
(statearr_44965_45565[(2)] = null);

(statearr_44965_45565[(1)] = (2));


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
var cljs$core$async$state_machine__43395__auto__ = null;
var cljs$core$async$state_machine__43395__auto____0 = (function (){
var statearr_44966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44966[(0)] = cljs$core$async$state_machine__43395__auto__);

(statearr_44966[(1)] = (1));

return statearr_44966;
});
var cljs$core$async$state_machine__43395__auto____1 = (function (state_44943){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_44943);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e44967){if((e44967 instanceof Object)){
var ex__43398__auto__ = e44967;
var statearr_44968_45566 = state_44943;
(statearr_44968_45566[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45567 = state_44943;
state_44943 = G__45567;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
cljs$core$async$state_machine__43395__auto__ = function(state_44943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43395__auto____1.call(this,state_44943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43395__auto____0;
cljs$core$async$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43395__auto____1;
return cljs$core$async$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_44969 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_44969[(6)] = c__43461__auto___45538);

return statearr_44969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
