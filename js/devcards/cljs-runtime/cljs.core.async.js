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
var G__46155 = arguments.length;
switch (G__46155) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46157 = (function (f,blockable,meta46158){
this.f = f;
this.blockable = blockable;
this.meta46158 = meta46158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46159,meta46158__$1){
var self__ = this;
var _46159__$1 = this;
return (new cljs.core.async.t_cljs$core$async46157(self__.f,self__.blockable,meta46158__$1));
}));

(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46159){
var self__ = this;
var _46159__$1 = this;
return self__.meta46158;
}));

(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46158","meta46158",-1710661498,null)], null);
}));

(cljs.core.async.t_cljs$core$async46157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46157");

(cljs.core.async.t_cljs$core$async46157.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46157.
 */
cljs.core.async.__GT_t_cljs$core$async46157 = (function cljs$core$async$__GT_t_cljs$core$async46157(f__$1,blockable__$1,meta46158){
return (new cljs.core.async.t_cljs$core$async46157(f__$1,blockable__$1,meta46158));
});

}

return (new cljs.core.async.t_cljs$core$async46157(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46163 = arguments.length;
switch (G__46163) {
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
var G__46165 = arguments.length;
switch (G__46165) {
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
var G__46167 = arguments.length;
switch (G__46167) {
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
var val_47646 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47646) : fn1.call(null,val_47646));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47646) : fn1.call(null,val_47646));
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
var G__46169 = arguments.length;
switch (G__46169) {
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
var n__4666__auto___47682 = n;
var x_47683 = (0);
while(true){
if((x_47683 < n__4666__auto___47682)){
(a[x_47683] = x_47683);

var G__47684 = (x_47683 + (1));
x_47683 = G__47684;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46170 = (function (flag,meta46171){
this.flag = flag;
this.meta46171 = meta46171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46172,meta46171__$1){
var self__ = this;
var _46172__$1 = this;
return (new cljs.core.async.t_cljs$core$async46170(self__.flag,meta46171__$1));
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46172){
var self__ = this;
var _46172__$1 = this;
return self__.meta46171;
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46171","meta46171",-737645579,null)], null);
}));

(cljs.core.async.t_cljs$core$async46170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46170");

(cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46170.
 */
cljs.core.async.__GT_t_cljs$core$async46170 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46170(flag__$1,meta46171){
return (new cljs.core.async.t_cljs$core$async46170(flag__$1,meta46171));
});

}

return (new cljs.core.async.t_cljs$core$async46170(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46175 = (function (flag,cb,meta46176){
this.flag = flag;
this.cb = cb;
this.meta46176 = meta46176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46177,meta46176__$1){
var self__ = this;
var _46177__$1 = this;
return (new cljs.core.async.t_cljs$core$async46175(self__.flag,self__.cb,meta46176__$1));
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46177){
var self__ = this;
var _46177__$1 = this;
return self__.meta46176;
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46176","meta46176",282398075,null)], null);
}));

(cljs.core.async.t_cljs$core$async46175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46175");

(cljs.core.async.t_cljs$core$async46175.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46175.
 */
cljs.core.async.__GT_t_cljs$core$async46175 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46175(flag__$1,cb__$1,meta46176){
return (new cljs.core.async.t_cljs$core$async46175(flag__$1,cb__$1,meta46176));
});

}

return (new cljs.core.async.t_cljs$core$async46175(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46178_SHARP_){
var G__46180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46178_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46180) : fret.call(null,G__46180));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46179_SHARP_){
var G__46181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46179_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46181) : fret.call(null,G__46181));
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
var G__47724 = (i + (1));
i = G__47724;
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
var len__4789__auto___47727 = arguments.length;
var i__4790__auto___47728 = (0);
while(true){
if((i__4790__auto___47728 < len__4789__auto___47727)){
args__4795__auto__.push((arguments[i__4790__auto___47728]));

var G__47729 = (i__4790__auto___47728 + (1));
i__4790__auto___47728 = G__47729;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46184){
var map__46185 = p__46184;
var map__46185__$1 = (((((!((map__46185 == null))))?(((((map__46185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46185):map__46185);
var opts = map__46185__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46182){
var G__46183 = cljs.core.first(seq46182);
var seq46182__$1 = cljs.core.next(seq46182);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46183,seq46182__$1);
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
var G__46188 = arguments.length;
switch (G__46188) {
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
var c__46094__auto___47741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46212){
var state_val_46213 = (state_46212[(1)]);
if((state_val_46213 === (7))){
var inst_46208 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46214_47745 = state_46212__$1;
(statearr_46214_47745[(2)] = inst_46208);

(statearr_46214_47745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (1))){
var state_46212__$1 = state_46212;
var statearr_46215_47749 = state_46212__$1;
(statearr_46215_47749[(2)] = null);

(statearr_46215_47749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (4))){
var inst_46191 = (state_46212[(7)]);
var inst_46191__$1 = (state_46212[(2)]);
var inst_46192 = (inst_46191__$1 == null);
var state_46212__$1 = (function (){var statearr_46216 = state_46212;
(statearr_46216[(7)] = inst_46191__$1);

return statearr_46216;
})();
if(cljs.core.truth_(inst_46192)){
var statearr_46217_47750 = state_46212__$1;
(statearr_46217_47750[(1)] = (5));

} else {
var statearr_46218_47754 = state_46212__$1;
(statearr_46218_47754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (13))){
var state_46212__$1 = state_46212;
var statearr_46219_47755 = state_46212__$1;
(statearr_46219_47755[(2)] = null);

(statearr_46219_47755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (6))){
var inst_46191 = (state_46212[(7)]);
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46212__$1,(11),to,inst_46191);
} else {
if((state_val_46213 === (3))){
var inst_46210 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46212__$1,inst_46210);
} else {
if((state_val_46213 === (12))){
var state_46212__$1 = state_46212;
var statearr_46220_47758 = state_46212__$1;
(statearr_46220_47758[(2)] = null);

(statearr_46220_47758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (2))){
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46212__$1,(4),from);
} else {
if((state_val_46213 === (11))){
var inst_46201 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
if(cljs.core.truth_(inst_46201)){
var statearr_46221_47759 = state_46212__$1;
(statearr_46221_47759[(1)] = (12));

} else {
var statearr_46222_47760 = state_46212__$1;
(statearr_46222_47760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (9))){
var state_46212__$1 = state_46212;
var statearr_46223_47764 = state_46212__$1;
(statearr_46223_47764[(2)] = null);

(statearr_46223_47764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (5))){
var state_46212__$1 = state_46212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46224_47765 = state_46212__$1;
(statearr_46224_47765[(1)] = (8));

} else {
var statearr_46225_47766 = state_46212__$1;
(statearr_46225_47766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (14))){
var inst_46206 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46226_47767 = state_46212__$1;
(statearr_46226_47767[(2)] = inst_46206);

(statearr_46226_47767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (10))){
var inst_46198 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46227_47771 = state_46212__$1;
(statearr_46227_47771[(2)] = inst_46198);

(statearr_46227_47771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (8))){
var inst_46195 = cljs.core.async.close_BANG_(to);
var state_46212__$1 = state_46212;
var statearr_46228_47772 = state_46212__$1;
(statearr_46228_47772[(2)] = inst_46195);

(statearr_46228_47772[(1)] = (10));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_46229 = [null,null,null,null,null,null,null,null];
(statearr_46229[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_46229[(1)] = (1));

return statearr_46229;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_46212){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46212);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46230){if((e46230 instanceof Object)){
var ex__46002__auto__ = e46230;
var statearr_46231_47783 = state_46212;
(statearr_46231_47783[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47787 = state_46212;
state_46212 = G__47787;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_46212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_46212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46232 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46232[(6)] = c__46094__auto___47741);

return statearr_46232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var process = (function (p__46233){
var vec__46234 = p__46233;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234,(1),null);
var job = vec__46234;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46094__auto___47798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46241){
var state_val_46242 = (state_46241[(1)]);
if((state_val_46242 === (1))){
var state_46241__$1 = state_46241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46241__$1,(2),res,v);
} else {
if((state_val_46242 === (2))){
var inst_46238 = (state_46241[(2)]);
var inst_46239 = cljs.core.async.close_BANG_(res);
var state_46241__$1 = (function (){var statearr_46243 = state_46241;
(statearr_46243[(7)] = inst_46238);

return statearr_46243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46241__$1,inst_46239);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_46244 = [null,null,null,null,null,null,null,null];
(statearr_46244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__);

(statearr_46244[(1)] = (1));

return statearr_46244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1 = (function (state_46241){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46241);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46245){if((e46245 instanceof Object)){
var ex__46002__auto__ = e46245;
var statearr_46246_47814 = state_46241;
(statearr_46246_47814[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47815 = state_46241;
state_46241 = G__47815;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = function(state_46241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1.call(this,state_46241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46247 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46247[(6)] = c__46094__auto___47798);

return statearr_46247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46248){
var vec__46249 = p__46248;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(1),null);
var job = vec__46249;
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
var n__4666__auto___47822 = n;
var __47823 = (0);
while(true){
if((__47823 < n__4666__auto___47822)){
var G__46252_47824 = type;
var G__46252_47825__$1 = (((G__46252_47824 instanceof cljs.core.Keyword))?G__46252_47824.fqn:null);
switch (G__46252_47825__$1) {
case "compute":
var c__46094__auto___47827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47823,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = ((function (__47823,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function (state_46265){
var state_val_46266 = (state_46265[(1)]);
if((state_val_46266 === (1))){
var state_46265__$1 = state_46265;
var statearr_46267_47828 = state_46265__$1;
(statearr_46267_47828[(2)] = null);

(statearr_46267_47828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (2))){
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46265__$1,(4),jobs);
} else {
if((state_val_46266 === (3))){
var inst_46263 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46265__$1,inst_46263);
} else {
if((state_val_46266 === (4))){
var inst_46255 = (state_46265[(2)]);
var inst_46256 = process(inst_46255);
var state_46265__$1 = state_46265;
if(cljs.core.truth_(inst_46256)){
var statearr_46268_47830 = state_46265__$1;
(statearr_46268_47830[(1)] = (5));

} else {
var statearr_46269_47831 = state_46265__$1;
(statearr_46269_47831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (5))){
var state_46265__$1 = state_46265;
var statearr_46270_47832 = state_46265__$1;
(statearr_46270_47832[(2)] = null);

(statearr_46270_47832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (6))){
var state_46265__$1 = state_46265;
var statearr_46271_47833 = state_46265__$1;
(statearr_46271_47833[(2)] = null);

(statearr_46271_47833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (7))){
var inst_46261 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46272_47834 = state_46265__$1;
(statearr_46272_47834[(2)] = inst_46261);

(statearr_46272_47834[(1)] = (3));


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
});})(__47823,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
;
return ((function (__47823,switch__45998__auto__,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_46273 = [null,null,null,null,null,null,null];
(statearr_46273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__);

(statearr_46273[(1)] = (1));

return statearr_46273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1 = (function (state_46265){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46265);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46274){if((e46274 instanceof Object)){
var ex__46002__auto__ = e46274;
var statearr_46275_47835 = state_46265;
(statearr_46275_47835[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47836 = state_46265;
state_46265 = G__47836;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = function(state_46265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1.call(this,state_46265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__;
})()
;})(__47823,switch__45998__auto__,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
})();
var state__46096__auto__ = (function (){var statearr_46276 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46276[(6)] = c__46094__auto___47827);

return statearr_46276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
});})(__47823,c__46094__auto___47827,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
);


break;
case "async":
var c__46094__auto___47839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47823,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = ((function (__47823,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function (state_46289){
var state_val_46290 = (state_46289[(1)]);
if((state_val_46290 === (1))){
var state_46289__$1 = state_46289;
var statearr_46291_47840 = state_46289__$1;
(statearr_46291_47840[(2)] = null);

(statearr_46291_47840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (2))){
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46289__$1,(4),jobs);
} else {
if((state_val_46290 === (3))){
var inst_46287 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46289__$1,inst_46287);
} else {
if((state_val_46290 === (4))){
var inst_46279 = (state_46289[(2)]);
var inst_46280 = async(inst_46279);
var state_46289__$1 = state_46289;
if(cljs.core.truth_(inst_46280)){
var statearr_46292_47841 = state_46289__$1;
(statearr_46292_47841[(1)] = (5));

} else {
var statearr_46293_47842 = state_46289__$1;
(statearr_46293_47842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (5))){
var state_46289__$1 = state_46289;
var statearr_46294_47843 = state_46289__$1;
(statearr_46294_47843[(2)] = null);

(statearr_46294_47843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (6))){
var state_46289__$1 = state_46289;
var statearr_46295_47844 = state_46289__$1;
(statearr_46295_47844[(2)] = null);

(statearr_46295_47844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (7))){
var inst_46285 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46296_47848 = state_46289__$1;
(statearr_46296_47848[(2)] = inst_46285);

(statearr_46296_47848[(1)] = (3));


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
});})(__47823,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
;
return ((function (__47823,switch__45998__auto__,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_46297 = [null,null,null,null,null,null,null];
(statearr_46297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__);

(statearr_46297[(1)] = (1));

return statearr_46297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1 = (function (state_46289){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46289);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46298){if((e46298 instanceof Object)){
var ex__46002__auto__ = e46298;
var statearr_46299_47853 = state_46289;
(statearr_46299_47853[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47854 = state_46289;
state_46289 = G__47854;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = function(state_46289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1.call(this,state_46289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__;
})()
;})(__47823,switch__45998__auto__,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
})();
var state__46096__auto__ = (function (){var statearr_46300 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46300[(6)] = c__46094__auto___47839);

return statearr_46300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
});})(__47823,c__46094__auto___47839,G__46252_47824,G__46252_47825__$1,n__4666__auto___47822,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46252_47825__$1)].join('')));

}

var G__47857 = (__47823 + (1));
__47823 = G__47857;
continue;
} else {
}
break;
}

var c__46094__auto___47858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46322){
var state_val_46323 = (state_46322[(1)]);
if((state_val_46323 === (7))){
var inst_46318 = (state_46322[(2)]);
var state_46322__$1 = state_46322;
var statearr_46324_47859 = state_46322__$1;
(statearr_46324_47859[(2)] = inst_46318);

(statearr_46324_47859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46323 === (1))){
var state_46322__$1 = state_46322;
var statearr_46325_47860 = state_46322__$1;
(statearr_46325_47860[(2)] = null);

(statearr_46325_47860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46323 === (4))){
var inst_46303 = (state_46322[(7)]);
var inst_46303__$1 = (state_46322[(2)]);
var inst_46304 = (inst_46303__$1 == null);
var state_46322__$1 = (function (){var statearr_46326 = state_46322;
(statearr_46326[(7)] = inst_46303__$1);

return statearr_46326;
})();
if(cljs.core.truth_(inst_46304)){
var statearr_46327_47861 = state_46322__$1;
(statearr_46327_47861[(1)] = (5));

} else {
var statearr_46328_47862 = state_46322__$1;
(statearr_46328_47862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46323 === (6))){
var inst_46303 = (state_46322[(7)]);
var inst_46308 = (state_46322[(8)]);
var inst_46308__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46310 = [inst_46303,inst_46308__$1];
var inst_46311 = (new cljs.core.PersistentVector(null,2,(5),inst_46309,inst_46310,null));
var state_46322__$1 = (function (){var statearr_46329 = state_46322;
(statearr_46329[(8)] = inst_46308__$1);

return statearr_46329;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46322__$1,(8),jobs,inst_46311);
} else {
if((state_val_46323 === (3))){
var inst_46320 = (state_46322[(2)]);
var state_46322__$1 = state_46322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46322__$1,inst_46320);
} else {
if((state_val_46323 === (2))){
var state_46322__$1 = state_46322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46322__$1,(4),from);
} else {
if((state_val_46323 === (9))){
var inst_46315 = (state_46322[(2)]);
var state_46322__$1 = (function (){var statearr_46330 = state_46322;
(statearr_46330[(9)] = inst_46315);

return statearr_46330;
})();
var statearr_46331_47867 = state_46322__$1;
(statearr_46331_47867[(2)] = null);

(statearr_46331_47867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46323 === (5))){
var inst_46306 = cljs.core.async.close_BANG_(jobs);
var state_46322__$1 = state_46322;
var statearr_46332_47870 = state_46322__$1;
(statearr_46332_47870[(2)] = inst_46306);

(statearr_46332_47870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46323 === (8))){
var inst_46308 = (state_46322[(8)]);
var inst_46313 = (state_46322[(2)]);
var state_46322__$1 = (function (){var statearr_46333 = state_46322;
(statearr_46333[(10)] = inst_46313);

return statearr_46333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46322__$1,(9),results,inst_46308);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_46334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__);

(statearr_46334[(1)] = (1));

return statearr_46334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1 = (function (state_46322){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46322);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46335){if((e46335 instanceof Object)){
var ex__46002__auto__ = e46335;
var statearr_46336_47876 = state_46322;
(statearr_46336_47876[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47881 = state_46322;
state_46322 = G__47881;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = function(state_46322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1.call(this,state_46322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46337 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46337[(6)] = c__46094__auto___47858);

return statearr_46337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46375){
var state_val_46376 = (state_46375[(1)]);
if((state_val_46376 === (7))){
var inst_46371 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
var statearr_46377_47888 = state_46375__$1;
(statearr_46377_47888[(2)] = inst_46371);

(statearr_46377_47888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (20))){
var state_46375__$1 = state_46375;
var statearr_46378_47889 = state_46375__$1;
(statearr_46378_47889[(2)] = null);

(statearr_46378_47889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (1))){
var state_46375__$1 = state_46375;
var statearr_46379_47896 = state_46375__$1;
(statearr_46379_47896[(2)] = null);

(statearr_46379_47896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (4))){
var inst_46340 = (state_46375[(7)]);
var inst_46340__$1 = (state_46375[(2)]);
var inst_46341 = (inst_46340__$1 == null);
var state_46375__$1 = (function (){var statearr_46380 = state_46375;
(statearr_46380[(7)] = inst_46340__$1);

return statearr_46380;
})();
if(cljs.core.truth_(inst_46341)){
var statearr_46381_47897 = state_46375__$1;
(statearr_46381_47897[(1)] = (5));

} else {
var statearr_46382_47898 = state_46375__$1;
(statearr_46382_47898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (15))){
var inst_46353 = (state_46375[(8)]);
var state_46375__$1 = state_46375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46375__$1,(18),to,inst_46353);
} else {
if((state_val_46376 === (21))){
var inst_46366 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
var statearr_46383_47899 = state_46375__$1;
(statearr_46383_47899[(2)] = inst_46366);

(statearr_46383_47899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (13))){
var inst_46368 = (state_46375[(2)]);
var state_46375__$1 = (function (){var statearr_46384 = state_46375;
(statearr_46384[(9)] = inst_46368);

return statearr_46384;
})();
var statearr_46385_47905 = state_46375__$1;
(statearr_46385_47905[(2)] = null);

(statearr_46385_47905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (6))){
var inst_46340 = (state_46375[(7)]);
var state_46375__$1 = state_46375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46375__$1,(11),inst_46340);
} else {
if((state_val_46376 === (17))){
var inst_46361 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
if(cljs.core.truth_(inst_46361)){
var statearr_46386_47907 = state_46375__$1;
(statearr_46386_47907[(1)] = (19));

} else {
var statearr_46387_47908 = state_46375__$1;
(statearr_46387_47908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (3))){
var inst_46373 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46375__$1,inst_46373);
} else {
if((state_val_46376 === (12))){
var inst_46350 = (state_46375[(10)]);
var state_46375__$1 = state_46375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46375__$1,(14),inst_46350);
} else {
if((state_val_46376 === (2))){
var state_46375__$1 = state_46375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46375__$1,(4),results);
} else {
if((state_val_46376 === (19))){
var state_46375__$1 = state_46375;
var statearr_46388_47909 = state_46375__$1;
(statearr_46388_47909[(2)] = null);

(statearr_46388_47909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (11))){
var inst_46350 = (state_46375[(2)]);
var state_46375__$1 = (function (){var statearr_46389 = state_46375;
(statearr_46389[(10)] = inst_46350);

return statearr_46389;
})();
var statearr_46390_47910 = state_46375__$1;
(statearr_46390_47910[(2)] = null);

(statearr_46390_47910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (9))){
var state_46375__$1 = state_46375;
var statearr_46391_47911 = state_46375__$1;
(statearr_46391_47911[(2)] = null);

(statearr_46391_47911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (5))){
var state_46375__$1 = state_46375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46392_47918 = state_46375__$1;
(statearr_46392_47918[(1)] = (8));

} else {
var statearr_46393_47919 = state_46375__$1;
(statearr_46393_47919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (14))){
var inst_46353 = (state_46375[(8)]);
var inst_46353__$1 = (state_46375[(2)]);
var inst_46354 = (inst_46353__$1 == null);
var inst_46355 = cljs.core.not(inst_46354);
var state_46375__$1 = (function (){var statearr_46394 = state_46375;
(statearr_46394[(8)] = inst_46353__$1);

return statearr_46394;
})();
if(inst_46355){
var statearr_46395_47920 = state_46375__$1;
(statearr_46395_47920[(1)] = (15));

} else {
var statearr_46396_47922 = state_46375__$1;
(statearr_46396_47922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (16))){
var state_46375__$1 = state_46375;
var statearr_46397_47923 = state_46375__$1;
(statearr_46397_47923[(2)] = false);

(statearr_46397_47923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (10))){
var inst_46347 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
var statearr_46398_47925 = state_46375__$1;
(statearr_46398_47925[(2)] = inst_46347);

(statearr_46398_47925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (18))){
var inst_46358 = (state_46375[(2)]);
var state_46375__$1 = state_46375;
var statearr_46399_47926 = state_46375__$1;
(statearr_46399_47926[(2)] = inst_46358);

(statearr_46399_47926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46376 === (8))){
var inst_46344 = cljs.core.async.close_BANG_(to);
var state_46375__$1 = state_46375;
var statearr_46400_47931 = state_46375__$1;
(statearr_46400_47931[(2)] = inst_46344);

(statearr_46400_47931[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_46401 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__);

(statearr_46401[(1)] = (1));

return statearr_46401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1 = (function (state_46375){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46375);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46402){if((e46402 instanceof Object)){
var ex__46002__auto__ = e46402;
var statearr_46403_47932 = state_46375;
(statearr_46403_47932[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47933 = state_46375;
state_46375 = G__47933;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__ = function(state_46375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1.call(this,state_46375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46404 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46404[(6)] = c__46094__auto__);

return statearr_46404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
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
var G__46406 = arguments.length;
switch (G__46406) {
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
var G__46408 = arguments.length;
switch (G__46408) {
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
var G__46410 = arguments.length;
switch (G__46410) {
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
var c__46094__auto___47943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46436){
var state_val_46437 = (state_46436[(1)]);
if((state_val_46437 === (7))){
var inst_46432 = (state_46436[(2)]);
var state_46436__$1 = state_46436;
var statearr_46438_47944 = state_46436__$1;
(statearr_46438_47944[(2)] = inst_46432);

(statearr_46438_47944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (1))){
var state_46436__$1 = state_46436;
var statearr_46439_47945 = state_46436__$1;
(statearr_46439_47945[(2)] = null);

(statearr_46439_47945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (4))){
var inst_46413 = (state_46436[(7)]);
var inst_46413__$1 = (state_46436[(2)]);
var inst_46414 = (inst_46413__$1 == null);
var state_46436__$1 = (function (){var statearr_46440 = state_46436;
(statearr_46440[(7)] = inst_46413__$1);

return statearr_46440;
})();
if(cljs.core.truth_(inst_46414)){
var statearr_46441_47946 = state_46436__$1;
(statearr_46441_47946[(1)] = (5));

} else {
var statearr_46442_47947 = state_46436__$1;
(statearr_46442_47947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (13))){
var state_46436__$1 = state_46436;
var statearr_46443_47948 = state_46436__$1;
(statearr_46443_47948[(2)] = null);

(statearr_46443_47948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (6))){
var inst_46413 = (state_46436[(7)]);
var inst_46419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46413) : p.call(null,inst_46413));
var state_46436__$1 = state_46436;
if(cljs.core.truth_(inst_46419)){
var statearr_46444_47951 = state_46436__$1;
(statearr_46444_47951[(1)] = (9));

} else {
var statearr_46445_47952 = state_46436__$1;
(statearr_46445_47952[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (3))){
var inst_46434 = (state_46436[(2)]);
var state_46436__$1 = state_46436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46436__$1,inst_46434);
} else {
if((state_val_46437 === (12))){
var state_46436__$1 = state_46436;
var statearr_46446_47953 = state_46436__$1;
(statearr_46446_47953[(2)] = null);

(statearr_46446_47953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (2))){
var state_46436__$1 = state_46436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46436__$1,(4),ch);
} else {
if((state_val_46437 === (11))){
var inst_46413 = (state_46436[(7)]);
var inst_46423 = (state_46436[(2)]);
var state_46436__$1 = state_46436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46436__$1,(8),inst_46423,inst_46413);
} else {
if((state_val_46437 === (9))){
var state_46436__$1 = state_46436;
var statearr_46447_47954 = state_46436__$1;
(statearr_46447_47954[(2)] = tc);

(statearr_46447_47954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (5))){
var inst_46416 = cljs.core.async.close_BANG_(tc);
var inst_46417 = cljs.core.async.close_BANG_(fc);
var state_46436__$1 = (function (){var statearr_46448 = state_46436;
(statearr_46448[(8)] = inst_46416);

return statearr_46448;
})();
var statearr_46449_47955 = state_46436__$1;
(statearr_46449_47955[(2)] = inst_46417);

(statearr_46449_47955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (14))){
var inst_46430 = (state_46436[(2)]);
var state_46436__$1 = state_46436;
var statearr_46450_47956 = state_46436__$1;
(statearr_46450_47956[(2)] = inst_46430);

(statearr_46450_47956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (10))){
var state_46436__$1 = state_46436;
var statearr_46451_47957 = state_46436__$1;
(statearr_46451_47957[(2)] = fc);

(statearr_46451_47957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46437 === (8))){
var inst_46425 = (state_46436[(2)]);
var state_46436__$1 = state_46436;
if(cljs.core.truth_(inst_46425)){
var statearr_46452_47958 = state_46436__$1;
(statearr_46452_47958[(1)] = (12));

} else {
var statearr_46453_47959 = state_46436__$1;
(statearr_46453_47959[(1)] = (13));

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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_46454 = [null,null,null,null,null,null,null,null,null];
(statearr_46454[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_46454[(1)] = (1));

return statearr_46454;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_46436){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46436);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46455){if((e46455 instanceof Object)){
var ex__46002__auto__ = e46455;
var statearr_46456_47961 = state_46436;
(statearr_46456_47961[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47962 = state_46436;
state_46436 = G__47962;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_46436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_46436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46457 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46457[(6)] = c__46094__auto___47943);

return statearr_46457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46478){
var state_val_46479 = (state_46478[(1)]);
if((state_val_46479 === (7))){
var inst_46474 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46480_47967 = state_46478__$1;
(statearr_46480_47967[(2)] = inst_46474);

(statearr_46480_47967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (1))){
var inst_46458 = init;
var state_46478__$1 = (function (){var statearr_46481 = state_46478;
(statearr_46481[(7)] = inst_46458);

return statearr_46481;
})();
var statearr_46482_47968 = state_46478__$1;
(statearr_46482_47968[(2)] = null);

(statearr_46482_47968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (4))){
var inst_46461 = (state_46478[(8)]);
var inst_46461__$1 = (state_46478[(2)]);
var inst_46462 = (inst_46461__$1 == null);
var state_46478__$1 = (function (){var statearr_46483 = state_46478;
(statearr_46483[(8)] = inst_46461__$1);

return statearr_46483;
})();
if(cljs.core.truth_(inst_46462)){
var statearr_46484_47969 = state_46478__$1;
(statearr_46484_47969[(1)] = (5));

} else {
var statearr_46485_47974 = state_46478__$1;
(statearr_46485_47974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (6))){
var inst_46461 = (state_46478[(8)]);
var inst_46458 = (state_46478[(7)]);
var inst_46465 = (state_46478[(9)]);
var inst_46465__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46458,inst_46461) : f.call(null,inst_46458,inst_46461));
var inst_46466 = cljs.core.reduced_QMARK_(inst_46465__$1);
var state_46478__$1 = (function (){var statearr_46486 = state_46478;
(statearr_46486[(9)] = inst_46465__$1);

return statearr_46486;
})();
if(inst_46466){
var statearr_46487_47981 = state_46478__$1;
(statearr_46487_47981[(1)] = (8));

} else {
var statearr_46488_47985 = state_46478__$1;
(statearr_46488_47985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (3))){
var inst_46476 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46478__$1,inst_46476);
} else {
if((state_val_46479 === (2))){
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46478__$1,(4),ch);
} else {
if((state_val_46479 === (9))){
var inst_46465 = (state_46478[(9)]);
var inst_46458 = inst_46465;
var state_46478__$1 = (function (){var statearr_46489 = state_46478;
(statearr_46489[(7)] = inst_46458);

return statearr_46489;
})();
var statearr_46490_47989 = state_46478__$1;
(statearr_46490_47989[(2)] = null);

(statearr_46490_47989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (5))){
var inst_46458 = (state_46478[(7)]);
var state_46478__$1 = state_46478;
var statearr_46491_47990 = state_46478__$1;
(statearr_46491_47990[(2)] = inst_46458);

(statearr_46491_47990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (10))){
var inst_46472 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46492_47995 = state_46478__$1;
(statearr_46492_47995[(2)] = inst_46472);

(statearr_46492_47995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (8))){
var inst_46465 = (state_46478[(9)]);
var inst_46468 = cljs.core.deref(inst_46465);
var state_46478__$1 = state_46478;
var statearr_46493_47996 = state_46478__$1;
(statearr_46493_47996[(2)] = inst_46468);

(statearr_46493_47996[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45999__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45999__auto____0 = (function (){
var statearr_46494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46494[(0)] = cljs$core$async$reduce_$_state_machine__45999__auto__);

(statearr_46494[(1)] = (1));

return statearr_46494;
});
var cljs$core$async$reduce_$_state_machine__45999__auto____1 = (function (state_46478){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46478);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46495){if((e46495 instanceof Object)){
var ex__46002__auto__ = e46495;
var statearr_46496_47997 = state_46478;
(statearr_46496_47997[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47998 = state_46478;
state_46478 = G__47998;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45999__auto__ = function(state_46478){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45999__auto____1.call(this,state_46478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45999__auto____0;
cljs$core$async$reduce_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45999__auto____1;
return cljs$core$async$reduce_$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46497 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46497[(6)] = c__46094__auto__);

return statearr_46497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46503){
var state_val_46504 = (state_46503[(1)]);
if((state_val_46504 === (1))){
var inst_46498 = cljs.core.async.reduce(f__$1,init,ch);
var state_46503__$1 = state_46503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46503__$1,(2),inst_46498);
} else {
if((state_val_46504 === (2))){
var inst_46500 = (state_46503[(2)]);
var inst_46501 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46500) : f__$1.call(null,inst_46500));
var state_46503__$1 = state_46503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46503__$1,inst_46501);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45999__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45999__auto____0 = (function (){
var statearr_46505 = [null,null,null,null,null,null,null];
(statearr_46505[(0)] = cljs$core$async$transduce_$_state_machine__45999__auto__);

(statearr_46505[(1)] = (1));

return statearr_46505;
});
var cljs$core$async$transduce_$_state_machine__45999__auto____1 = (function (state_46503){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46503);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46506){if((e46506 instanceof Object)){
var ex__46002__auto__ = e46506;
var statearr_46507_48008 = state_46503;
(statearr_46507_48008[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48009 = state_46503;
state_46503 = G__48009;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45999__auto__ = function(state_46503){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45999__auto____1.call(this,state_46503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45999__auto____0;
cljs$core$async$transduce_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45999__auto____1;
return cljs$core$async$transduce_$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46508 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46508[(6)] = c__46094__auto__);

return statearr_46508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
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
var G__46510 = arguments.length;
switch (G__46510) {
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
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46535){
var state_val_46536 = (state_46535[(1)]);
if((state_val_46536 === (7))){
var inst_46517 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46537_48014 = state_46535__$1;
(statearr_46537_48014[(2)] = inst_46517);

(statearr_46537_48014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (1))){
var inst_46511 = cljs.core.seq(coll);
var inst_46512 = inst_46511;
var state_46535__$1 = (function (){var statearr_46538 = state_46535;
(statearr_46538[(7)] = inst_46512);

return statearr_46538;
})();
var statearr_46539_48015 = state_46535__$1;
(statearr_46539_48015[(2)] = null);

(statearr_46539_48015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (4))){
var inst_46512 = (state_46535[(7)]);
var inst_46515 = cljs.core.first(inst_46512);
var state_46535__$1 = state_46535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46535__$1,(7),ch,inst_46515);
} else {
if((state_val_46536 === (13))){
var inst_46529 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46540_48016 = state_46535__$1;
(statearr_46540_48016[(2)] = inst_46529);

(statearr_46540_48016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (6))){
var inst_46520 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
if(cljs.core.truth_(inst_46520)){
var statearr_46541_48021 = state_46535__$1;
(statearr_46541_48021[(1)] = (8));

} else {
var statearr_46542_48022 = state_46535__$1;
(statearr_46542_48022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (3))){
var inst_46533 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46535__$1,inst_46533);
} else {
if((state_val_46536 === (12))){
var state_46535__$1 = state_46535;
var statearr_46543_48023 = state_46535__$1;
(statearr_46543_48023[(2)] = null);

(statearr_46543_48023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (2))){
var inst_46512 = (state_46535[(7)]);
var state_46535__$1 = state_46535;
if(cljs.core.truth_(inst_46512)){
var statearr_46544_48024 = state_46535__$1;
(statearr_46544_48024[(1)] = (4));

} else {
var statearr_46545_48025 = state_46535__$1;
(statearr_46545_48025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (11))){
var inst_46526 = cljs.core.async.close_BANG_(ch);
var state_46535__$1 = state_46535;
var statearr_46546_48026 = state_46535__$1;
(statearr_46546_48026[(2)] = inst_46526);

(statearr_46546_48026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (9))){
var state_46535__$1 = state_46535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46547_48027 = state_46535__$1;
(statearr_46547_48027[(1)] = (11));

} else {
var statearr_46548_48028 = state_46535__$1;
(statearr_46548_48028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (5))){
var inst_46512 = (state_46535[(7)]);
var state_46535__$1 = state_46535;
var statearr_46549_48029 = state_46535__$1;
(statearr_46549_48029[(2)] = inst_46512);

(statearr_46549_48029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (10))){
var inst_46531 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46550_48034 = state_46535__$1;
(statearr_46550_48034[(2)] = inst_46531);

(statearr_46550_48034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (8))){
var inst_46512 = (state_46535[(7)]);
var inst_46522 = cljs.core.next(inst_46512);
var inst_46512__$1 = inst_46522;
var state_46535__$1 = (function (){var statearr_46551 = state_46535;
(statearr_46551[(7)] = inst_46512__$1);

return statearr_46551;
})();
var statearr_46552_48036 = state_46535__$1;
(statearr_46552_48036[(2)] = null);

(statearr_46552_48036[(1)] = (2));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_46553 = [null,null,null,null,null,null,null,null];
(statearr_46553[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_46553[(1)] = (1));

return statearr_46553;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_46535){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46535);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46554){if((e46554 instanceof Object)){
var ex__46002__auto__ = e46554;
var statearr_46555_48037 = state_46535;
(statearr_46555_48037[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48038 = state_46535;
state_46535 = G__48038;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_46535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_46535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46556 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46556[(6)] = c__46094__auto__);

return statearr_46556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46557 = (function (ch,cs,meta46558){
this.ch = ch;
this.cs = cs;
this.meta46558 = meta46558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46559,meta46558__$1){
var self__ = this;
var _46559__$1 = this;
return (new cljs.core.async.t_cljs$core$async46557(self__.ch,self__.cs,meta46558__$1));
}));

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46559){
var self__ = this;
var _46559__$1 = this;
return self__.meta46558;
}));

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46558","meta46558",-1372800059,null)], null);
}));

(cljs.core.async.t_cljs$core$async46557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46557");

(cljs.core.async.t_cljs$core$async46557.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46557.
 */
cljs.core.async.__GT_t_cljs$core$async46557 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46557(ch__$1,cs__$1,meta46558){
return (new cljs.core.async.t_cljs$core$async46557(ch__$1,cs__$1,meta46558));
});

}

return (new cljs.core.async.t_cljs$core$async46557(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46094__auto___48054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46694){
var state_val_46695 = (state_46694[(1)]);
if((state_val_46695 === (7))){
var inst_46690 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46696_48056 = state_46694__$1;
(statearr_46696_48056[(2)] = inst_46690);

(statearr_46696_48056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (20))){
var inst_46593 = (state_46694[(7)]);
var inst_46605 = cljs.core.first(inst_46593);
var inst_46606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46605,(0),null);
var inst_46607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46605,(1),null);
var state_46694__$1 = (function (){var statearr_46697 = state_46694;
(statearr_46697[(8)] = inst_46606);

return statearr_46697;
})();
if(cljs.core.truth_(inst_46607)){
var statearr_46698_48058 = state_46694__$1;
(statearr_46698_48058[(1)] = (22));

} else {
var statearr_46699_48059 = state_46694__$1;
(statearr_46699_48059[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (27))){
var inst_46637 = (state_46694[(9)]);
var inst_46562 = (state_46694[(10)]);
var inst_46642 = (state_46694[(11)]);
var inst_46635 = (state_46694[(12)]);
var inst_46642__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46635,inst_46637);
var inst_46643 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46642__$1,inst_46562,done);
var state_46694__$1 = (function (){var statearr_46700 = state_46694;
(statearr_46700[(11)] = inst_46642__$1);

return statearr_46700;
})();
if(cljs.core.truth_(inst_46643)){
var statearr_46701_48065 = state_46694__$1;
(statearr_46701_48065[(1)] = (30));

} else {
var statearr_46702_48066 = state_46694__$1;
(statearr_46702_48066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (1))){
var state_46694__$1 = state_46694;
var statearr_46703_48067 = state_46694__$1;
(statearr_46703_48067[(2)] = null);

(statearr_46703_48067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (24))){
var inst_46593 = (state_46694[(7)]);
var inst_46612 = (state_46694[(2)]);
var inst_46613 = cljs.core.next(inst_46593);
var inst_46571 = inst_46613;
var inst_46572 = null;
var inst_46573 = (0);
var inst_46574 = (0);
var state_46694__$1 = (function (){var statearr_46704 = state_46694;
(statearr_46704[(13)] = inst_46574);

(statearr_46704[(14)] = inst_46571);

(statearr_46704[(15)] = inst_46612);

(statearr_46704[(16)] = inst_46573);

(statearr_46704[(17)] = inst_46572);

return statearr_46704;
})();
var statearr_46705_48069 = state_46694__$1;
(statearr_46705_48069[(2)] = null);

(statearr_46705_48069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (39))){
var state_46694__$1 = state_46694;
var statearr_46709_48070 = state_46694__$1;
(statearr_46709_48070[(2)] = null);

(statearr_46709_48070[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (4))){
var inst_46562 = (state_46694[(10)]);
var inst_46562__$1 = (state_46694[(2)]);
var inst_46563 = (inst_46562__$1 == null);
var state_46694__$1 = (function (){var statearr_46710 = state_46694;
(statearr_46710[(10)] = inst_46562__$1);

return statearr_46710;
})();
if(cljs.core.truth_(inst_46563)){
var statearr_46711_48075 = state_46694__$1;
(statearr_46711_48075[(1)] = (5));

} else {
var statearr_46712_48076 = state_46694__$1;
(statearr_46712_48076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (15))){
var inst_46574 = (state_46694[(13)]);
var inst_46571 = (state_46694[(14)]);
var inst_46573 = (state_46694[(16)]);
var inst_46572 = (state_46694[(17)]);
var inst_46589 = (state_46694[(2)]);
var inst_46590 = (inst_46574 + (1));
var tmp46706 = inst_46571;
var tmp46707 = inst_46573;
var tmp46708 = inst_46572;
var inst_46571__$1 = tmp46706;
var inst_46572__$1 = tmp46708;
var inst_46573__$1 = tmp46707;
var inst_46574__$1 = inst_46590;
var state_46694__$1 = (function (){var statearr_46713 = state_46694;
(statearr_46713[(13)] = inst_46574__$1);

(statearr_46713[(14)] = inst_46571__$1);

(statearr_46713[(16)] = inst_46573__$1);

(statearr_46713[(17)] = inst_46572__$1);

(statearr_46713[(18)] = inst_46589);

return statearr_46713;
})();
var statearr_46714_48077 = state_46694__$1;
(statearr_46714_48077[(2)] = null);

(statearr_46714_48077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (21))){
var inst_46616 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46718_48078 = state_46694__$1;
(statearr_46718_48078[(2)] = inst_46616);

(statearr_46718_48078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (31))){
var inst_46642 = (state_46694[(11)]);
var inst_46646 = done(null);
var inst_46647 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46642);
var state_46694__$1 = (function (){var statearr_46719 = state_46694;
(statearr_46719[(19)] = inst_46646);

return statearr_46719;
})();
var statearr_46720_48079 = state_46694__$1;
(statearr_46720_48079[(2)] = inst_46647);

(statearr_46720_48079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (32))){
var inst_46637 = (state_46694[(9)]);
var inst_46636 = (state_46694[(20)]);
var inst_46634 = (state_46694[(21)]);
var inst_46635 = (state_46694[(12)]);
var inst_46649 = (state_46694[(2)]);
var inst_46650 = (inst_46637 + (1));
var tmp46715 = inst_46636;
var tmp46716 = inst_46634;
var tmp46717 = inst_46635;
var inst_46634__$1 = tmp46716;
var inst_46635__$1 = tmp46717;
var inst_46636__$1 = tmp46715;
var inst_46637__$1 = inst_46650;
var state_46694__$1 = (function (){var statearr_46721 = state_46694;
(statearr_46721[(9)] = inst_46637__$1);

(statearr_46721[(20)] = inst_46636__$1);

(statearr_46721[(21)] = inst_46634__$1);

(statearr_46721[(22)] = inst_46649);

(statearr_46721[(12)] = inst_46635__$1);

return statearr_46721;
})();
var statearr_46722_48081 = state_46694__$1;
(statearr_46722_48081[(2)] = null);

(statearr_46722_48081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (40))){
var inst_46662 = (state_46694[(23)]);
var inst_46666 = done(null);
var inst_46667 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46662);
var state_46694__$1 = (function (){var statearr_46723 = state_46694;
(statearr_46723[(24)] = inst_46666);

return statearr_46723;
})();
var statearr_46724_48082 = state_46694__$1;
(statearr_46724_48082[(2)] = inst_46667);

(statearr_46724_48082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (33))){
var inst_46653 = (state_46694[(25)]);
var inst_46655 = cljs.core.chunked_seq_QMARK_(inst_46653);
var state_46694__$1 = state_46694;
if(inst_46655){
var statearr_46725_48083 = state_46694__$1;
(statearr_46725_48083[(1)] = (36));

} else {
var statearr_46726_48084 = state_46694__$1;
(statearr_46726_48084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (13))){
var inst_46583 = (state_46694[(26)]);
var inst_46586 = cljs.core.async.close_BANG_(inst_46583);
var state_46694__$1 = state_46694;
var statearr_46727_48090 = state_46694__$1;
(statearr_46727_48090[(2)] = inst_46586);

(statearr_46727_48090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (22))){
var inst_46606 = (state_46694[(8)]);
var inst_46609 = cljs.core.async.close_BANG_(inst_46606);
var state_46694__$1 = state_46694;
var statearr_46728_48093 = state_46694__$1;
(statearr_46728_48093[(2)] = inst_46609);

(statearr_46728_48093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (36))){
var inst_46653 = (state_46694[(25)]);
var inst_46657 = cljs.core.chunk_first(inst_46653);
var inst_46658 = cljs.core.chunk_rest(inst_46653);
var inst_46659 = cljs.core.count(inst_46657);
var inst_46634 = inst_46658;
var inst_46635 = inst_46657;
var inst_46636 = inst_46659;
var inst_46637 = (0);
var state_46694__$1 = (function (){var statearr_46729 = state_46694;
(statearr_46729[(9)] = inst_46637);

(statearr_46729[(20)] = inst_46636);

(statearr_46729[(21)] = inst_46634);

(statearr_46729[(12)] = inst_46635);

return statearr_46729;
})();
var statearr_46730_48094 = state_46694__$1;
(statearr_46730_48094[(2)] = null);

(statearr_46730_48094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (41))){
var inst_46653 = (state_46694[(25)]);
var inst_46669 = (state_46694[(2)]);
var inst_46670 = cljs.core.next(inst_46653);
var inst_46634 = inst_46670;
var inst_46635 = null;
var inst_46636 = (0);
var inst_46637 = (0);
var state_46694__$1 = (function (){var statearr_46731 = state_46694;
(statearr_46731[(27)] = inst_46669);

(statearr_46731[(9)] = inst_46637);

(statearr_46731[(20)] = inst_46636);

(statearr_46731[(21)] = inst_46634);

(statearr_46731[(12)] = inst_46635);

return statearr_46731;
})();
var statearr_46732_48095 = state_46694__$1;
(statearr_46732_48095[(2)] = null);

(statearr_46732_48095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (43))){
var state_46694__$1 = state_46694;
var statearr_46733_48096 = state_46694__$1;
(statearr_46733_48096[(2)] = null);

(statearr_46733_48096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (29))){
var inst_46678 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46734_48097 = state_46694__$1;
(statearr_46734_48097[(2)] = inst_46678);

(statearr_46734_48097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (44))){
var inst_46687 = (state_46694[(2)]);
var state_46694__$1 = (function (){var statearr_46735 = state_46694;
(statearr_46735[(28)] = inst_46687);

return statearr_46735;
})();
var statearr_46736_48099 = state_46694__$1;
(statearr_46736_48099[(2)] = null);

(statearr_46736_48099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (6))){
var inst_46626 = (state_46694[(29)]);
var inst_46625 = cljs.core.deref(cs);
var inst_46626__$1 = cljs.core.keys(inst_46625);
var inst_46627 = cljs.core.count(inst_46626__$1);
var inst_46628 = cljs.core.reset_BANG_(dctr,inst_46627);
var inst_46633 = cljs.core.seq(inst_46626__$1);
var inst_46634 = inst_46633;
var inst_46635 = null;
var inst_46636 = (0);
var inst_46637 = (0);
var state_46694__$1 = (function (){var statearr_46737 = state_46694;
(statearr_46737[(29)] = inst_46626__$1);

(statearr_46737[(9)] = inst_46637);

(statearr_46737[(30)] = inst_46628);

(statearr_46737[(20)] = inst_46636);

(statearr_46737[(21)] = inst_46634);

(statearr_46737[(12)] = inst_46635);

return statearr_46737;
})();
var statearr_46738_48100 = state_46694__$1;
(statearr_46738_48100[(2)] = null);

(statearr_46738_48100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (28))){
var inst_46634 = (state_46694[(21)]);
var inst_46653 = (state_46694[(25)]);
var inst_46653__$1 = cljs.core.seq(inst_46634);
var state_46694__$1 = (function (){var statearr_46739 = state_46694;
(statearr_46739[(25)] = inst_46653__$1);

return statearr_46739;
})();
if(inst_46653__$1){
var statearr_46740_48102 = state_46694__$1;
(statearr_46740_48102[(1)] = (33));

} else {
var statearr_46741_48103 = state_46694__$1;
(statearr_46741_48103[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (25))){
var inst_46637 = (state_46694[(9)]);
var inst_46636 = (state_46694[(20)]);
var inst_46639 = (inst_46637 < inst_46636);
var inst_46640 = inst_46639;
var state_46694__$1 = state_46694;
if(cljs.core.truth_(inst_46640)){
var statearr_46742_48104 = state_46694__$1;
(statearr_46742_48104[(1)] = (27));

} else {
var statearr_46743_48105 = state_46694__$1;
(statearr_46743_48105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (34))){
var state_46694__$1 = state_46694;
var statearr_46744_48106 = state_46694__$1;
(statearr_46744_48106[(2)] = null);

(statearr_46744_48106[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (17))){
var state_46694__$1 = state_46694;
var statearr_46745_48107 = state_46694__$1;
(statearr_46745_48107[(2)] = null);

(statearr_46745_48107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (3))){
var inst_46692 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46694__$1,inst_46692);
} else {
if((state_val_46695 === (12))){
var inst_46621 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46746_48108 = state_46694__$1;
(statearr_46746_48108[(2)] = inst_46621);

(statearr_46746_48108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (2))){
var state_46694__$1 = state_46694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46694__$1,(4),ch);
} else {
if((state_val_46695 === (23))){
var state_46694__$1 = state_46694;
var statearr_46747_48109 = state_46694__$1;
(statearr_46747_48109[(2)] = null);

(statearr_46747_48109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (35))){
var inst_46676 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46748_48110 = state_46694__$1;
(statearr_46748_48110[(2)] = inst_46676);

(statearr_46748_48110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (19))){
var inst_46593 = (state_46694[(7)]);
var inst_46597 = cljs.core.chunk_first(inst_46593);
var inst_46598 = cljs.core.chunk_rest(inst_46593);
var inst_46599 = cljs.core.count(inst_46597);
var inst_46571 = inst_46598;
var inst_46572 = inst_46597;
var inst_46573 = inst_46599;
var inst_46574 = (0);
var state_46694__$1 = (function (){var statearr_46749 = state_46694;
(statearr_46749[(13)] = inst_46574);

(statearr_46749[(14)] = inst_46571);

(statearr_46749[(16)] = inst_46573);

(statearr_46749[(17)] = inst_46572);

return statearr_46749;
})();
var statearr_46750_48116 = state_46694__$1;
(statearr_46750_48116[(2)] = null);

(statearr_46750_48116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (11))){
var inst_46571 = (state_46694[(14)]);
var inst_46593 = (state_46694[(7)]);
var inst_46593__$1 = cljs.core.seq(inst_46571);
var state_46694__$1 = (function (){var statearr_46751 = state_46694;
(statearr_46751[(7)] = inst_46593__$1);

return statearr_46751;
})();
if(inst_46593__$1){
var statearr_46752_48120 = state_46694__$1;
(statearr_46752_48120[(1)] = (16));

} else {
var statearr_46753_48121 = state_46694__$1;
(statearr_46753_48121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (9))){
var inst_46623 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46754_48123 = state_46694__$1;
(statearr_46754_48123[(2)] = inst_46623);

(statearr_46754_48123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (5))){
var inst_46569 = cljs.core.deref(cs);
var inst_46570 = cljs.core.seq(inst_46569);
var inst_46571 = inst_46570;
var inst_46572 = null;
var inst_46573 = (0);
var inst_46574 = (0);
var state_46694__$1 = (function (){var statearr_46755 = state_46694;
(statearr_46755[(13)] = inst_46574);

(statearr_46755[(14)] = inst_46571);

(statearr_46755[(16)] = inst_46573);

(statearr_46755[(17)] = inst_46572);

return statearr_46755;
})();
var statearr_46756_48125 = state_46694__$1;
(statearr_46756_48125[(2)] = null);

(statearr_46756_48125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (14))){
var state_46694__$1 = state_46694;
var statearr_46757_48126 = state_46694__$1;
(statearr_46757_48126[(2)] = null);

(statearr_46757_48126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (45))){
var inst_46684 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46758_48127 = state_46694__$1;
(statearr_46758_48127[(2)] = inst_46684);

(statearr_46758_48127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (26))){
var inst_46626 = (state_46694[(29)]);
var inst_46680 = (state_46694[(2)]);
var inst_46681 = cljs.core.seq(inst_46626);
var state_46694__$1 = (function (){var statearr_46759 = state_46694;
(statearr_46759[(31)] = inst_46680);

return statearr_46759;
})();
if(inst_46681){
var statearr_46760_48128 = state_46694__$1;
(statearr_46760_48128[(1)] = (42));

} else {
var statearr_46761_48129 = state_46694__$1;
(statearr_46761_48129[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (16))){
var inst_46593 = (state_46694[(7)]);
var inst_46595 = cljs.core.chunked_seq_QMARK_(inst_46593);
var state_46694__$1 = state_46694;
if(inst_46595){
var statearr_46762_48130 = state_46694__$1;
(statearr_46762_48130[(1)] = (19));

} else {
var statearr_46763_48131 = state_46694__$1;
(statearr_46763_48131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (38))){
var inst_46673 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46764_48134 = state_46694__$1;
(statearr_46764_48134[(2)] = inst_46673);

(statearr_46764_48134[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (30))){
var state_46694__$1 = state_46694;
var statearr_46765_48135 = state_46694__$1;
(statearr_46765_48135[(2)] = null);

(statearr_46765_48135[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (10))){
var inst_46574 = (state_46694[(13)]);
var inst_46572 = (state_46694[(17)]);
var inst_46582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46572,inst_46574);
var inst_46583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46582,(0),null);
var inst_46584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46582,(1),null);
var state_46694__$1 = (function (){var statearr_46766 = state_46694;
(statearr_46766[(26)] = inst_46583);

return statearr_46766;
})();
if(cljs.core.truth_(inst_46584)){
var statearr_46767_48138 = state_46694__$1;
(statearr_46767_48138[(1)] = (13));

} else {
var statearr_46768_48139 = state_46694__$1;
(statearr_46768_48139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (18))){
var inst_46619 = (state_46694[(2)]);
var state_46694__$1 = state_46694;
var statearr_46769_48140 = state_46694__$1;
(statearr_46769_48140[(2)] = inst_46619);

(statearr_46769_48140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (42))){
var state_46694__$1 = state_46694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46694__$1,(45),dchan);
} else {
if((state_val_46695 === (37))){
var inst_46662 = (state_46694[(23)]);
var inst_46653 = (state_46694[(25)]);
var inst_46562 = (state_46694[(10)]);
var inst_46662__$1 = cljs.core.first(inst_46653);
var inst_46663 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46662__$1,inst_46562,done);
var state_46694__$1 = (function (){var statearr_46770 = state_46694;
(statearr_46770[(23)] = inst_46662__$1);

return statearr_46770;
})();
if(cljs.core.truth_(inst_46663)){
var statearr_46771_48147 = state_46694__$1;
(statearr_46771_48147[(1)] = (39));

} else {
var statearr_46772_48148 = state_46694__$1;
(statearr_46772_48148[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46695 === (8))){
var inst_46574 = (state_46694[(13)]);
var inst_46573 = (state_46694[(16)]);
var inst_46576 = (inst_46574 < inst_46573);
var inst_46577 = inst_46576;
var state_46694__$1 = state_46694;
if(cljs.core.truth_(inst_46577)){
var statearr_46773_48149 = state_46694__$1;
(statearr_46773_48149[(1)] = (10));

} else {
var statearr_46774_48154 = state_46694__$1;
(statearr_46774_48154[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45999__auto__ = null;
var cljs$core$async$mult_$_state_machine__45999__auto____0 = (function (){
var statearr_46775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46775[(0)] = cljs$core$async$mult_$_state_machine__45999__auto__);

(statearr_46775[(1)] = (1));

return statearr_46775;
});
var cljs$core$async$mult_$_state_machine__45999__auto____1 = (function (state_46694){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46694);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46776){if((e46776 instanceof Object)){
var ex__46002__auto__ = e46776;
var statearr_46777_48158 = state_46694;
(statearr_46777_48158[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48159 = state_46694;
state_46694 = G__48159;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45999__auto__ = function(state_46694){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45999__auto____1.call(this,state_46694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45999__auto____0;
cljs$core$async$mult_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45999__auto____1;
return cljs$core$async$mult_$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46778 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46778[(6)] = c__46094__auto___48054);

return statearr_46778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var G__46780 = arguments.length;
switch (G__46780) {
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
var len__4789__auto___48186 = arguments.length;
var i__4790__auto___48187 = (0);
while(true){
if((i__4790__auto___48187 < len__4789__auto___48186)){
args__4795__auto__.push((arguments[i__4790__auto___48187]));

var G__48188 = (i__4790__auto___48187 + (1));
i__4790__auto___48187 = G__48188;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46785){
var map__46786 = p__46785;
var map__46786__$1 = (((((!((map__46786 == null))))?(((((map__46786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46786):map__46786);
var opts = map__46786__$1;
var statearr_46788_48189 = state;
(statearr_46788_48189[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46789_48196 = state;
(statearr_46789_48196[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46790_48197 = state;
(statearr_46790_48197[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46781){
var G__46782 = cljs.core.first(seq46781);
var seq46781__$1 = cljs.core.next(seq46781);
var G__46783 = cljs.core.first(seq46781__$1);
var seq46781__$2 = cljs.core.next(seq46781__$1);
var G__46784 = cljs.core.first(seq46781__$2);
var seq46781__$3 = cljs.core.next(seq46781__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46782,G__46783,G__46784,seq46781__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46791 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46792){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46792 = meta46792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46793,meta46792__$1){
var self__ = this;
var _46793__$1 = this;
return (new cljs.core.async.t_cljs$core$async46791(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46792__$1));
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46793){
var self__ = this;
var _46793__$1 = this;
return self__.meta46792;
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46791.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46792","meta46792",-2065370297,null)], null);
}));

(cljs.core.async.t_cljs$core$async46791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46791");

(cljs.core.async.t_cljs$core$async46791.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46791.
 */
cljs.core.async.__GT_t_cljs$core$async46791 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46791(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46792){
return (new cljs.core.async.t_cljs$core$async46791(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46792));
});

}

return (new cljs.core.async.t_cljs$core$async46791(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46094__auto___48216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_46895){
var state_val_46896 = (state_46895[(1)]);
if((state_val_46896 === (7))){
var inst_46810 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46897_48219 = state_46895__$1;
(statearr_46897_48219[(2)] = inst_46810);

(statearr_46897_48219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (20))){
var inst_46822 = (state_46895[(7)]);
var state_46895__$1 = state_46895;
var statearr_46898_48220 = state_46895__$1;
(statearr_46898_48220[(2)] = inst_46822);

(statearr_46898_48220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (27))){
var state_46895__$1 = state_46895;
var statearr_46899_48221 = state_46895__$1;
(statearr_46899_48221[(2)] = null);

(statearr_46899_48221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (1))){
var inst_46797 = (state_46895[(8)]);
var inst_46797__$1 = calc_state();
var inst_46799 = (inst_46797__$1 == null);
var inst_46800 = cljs.core.not(inst_46799);
var state_46895__$1 = (function (){var statearr_46900 = state_46895;
(statearr_46900[(8)] = inst_46797__$1);

return statearr_46900;
})();
if(inst_46800){
var statearr_46901_48222 = state_46895__$1;
(statearr_46901_48222[(1)] = (2));

} else {
var statearr_46902_48223 = state_46895__$1;
(statearr_46902_48223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (24))){
var inst_46846 = (state_46895[(9)]);
var inst_46869 = (state_46895[(10)]);
var inst_46855 = (state_46895[(11)]);
var inst_46869__$1 = (inst_46846.cljs$core$IFn$_invoke$arity$1 ? inst_46846.cljs$core$IFn$_invoke$arity$1(inst_46855) : inst_46846.call(null,inst_46855));
var state_46895__$1 = (function (){var statearr_46903 = state_46895;
(statearr_46903[(10)] = inst_46869__$1);

return statearr_46903;
})();
if(cljs.core.truth_(inst_46869__$1)){
var statearr_46904_48226 = state_46895__$1;
(statearr_46904_48226[(1)] = (29));

} else {
var statearr_46905_48227 = state_46895__$1;
(statearr_46905_48227[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (4))){
var inst_46813 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46813)){
var statearr_46906_48228 = state_46895__$1;
(statearr_46906_48228[(1)] = (8));

} else {
var statearr_46907_48229 = state_46895__$1;
(statearr_46907_48229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (15))){
var inst_46840 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46840)){
var statearr_46908_48230 = state_46895__$1;
(statearr_46908_48230[(1)] = (19));

} else {
var statearr_46909_48231 = state_46895__$1;
(statearr_46909_48231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (21))){
var inst_46845 = (state_46895[(12)]);
var inst_46845__$1 = (state_46895[(2)]);
var inst_46846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46895__$1 = (function (){var statearr_46910 = state_46895;
(statearr_46910[(9)] = inst_46846);

(statearr_46910[(13)] = inst_46847);

(statearr_46910[(12)] = inst_46845__$1);

return statearr_46910;
})();
return cljs.core.async.ioc_alts_BANG_(state_46895__$1,(22),inst_46848);
} else {
if((state_val_46896 === (31))){
var inst_46877 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46877)){
var statearr_46911_48232 = state_46895__$1;
(statearr_46911_48232[(1)] = (32));

} else {
var statearr_46912_48233 = state_46895__$1;
(statearr_46912_48233[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (32))){
var inst_46854 = (state_46895[(14)]);
var state_46895__$1 = state_46895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46895__$1,(35),out,inst_46854);
} else {
if((state_val_46896 === (33))){
var inst_46845 = (state_46895[(12)]);
var inst_46822 = inst_46845;
var state_46895__$1 = (function (){var statearr_46913 = state_46895;
(statearr_46913[(7)] = inst_46822);

return statearr_46913;
})();
var statearr_46914_48237 = state_46895__$1;
(statearr_46914_48237[(2)] = null);

(statearr_46914_48237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (13))){
var inst_46822 = (state_46895[(7)]);
var inst_46829 = inst_46822.cljs$lang$protocol_mask$partition0$;
var inst_46830 = (inst_46829 & (64));
var inst_46831 = inst_46822.cljs$core$ISeq$;
var inst_46832 = (cljs.core.PROTOCOL_SENTINEL === inst_46831);
var inst_46833 = ((inst_46830) || (inst_46832));
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46833)){
var statearr_46915_48238 = state_46895__$1;
(statearr_46915_48238[(1)] = (16));

} else {
var statearr_46916_48239 = state_46895__$1;
(statearr_46916_48239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (22))){
var inst_46855 = (state_46895[(11)]);
var inst_46854 = (state_46895[(14)]);
var inst_46853 = (state_46895[(2)]);
var inst_46854__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46853,(0),null);
var inst_46855__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46853,(1),null);
var inst_46856 = (inst_46854__$1 == null);
var inst_46857 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46855__$1,change);
var inst_46858 = ((inst_46856) || (inst_46857));
var state_46895__$1 = (function (){var statearr_46917 = state_46895;
(statearr_46917[(11)] = inst_46855__$1);

(statearr_46917[(14)] = inst_46854__$1);

return statearr_46917;
})();
if(cljs.core.truth_(inst_46858)){
var statearr_46918_48247 = state_46895__$1;
(statearr_46918_48247[(1)] = (23));

} else {
var statearr_46919_48248 = state_46895__$1;
(statearr_46919_48248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (36))){
var inst_46845 = (state_46895[(12)]);
var inst_46822 = inst_46845;
var state_46895__$1 = (function (){var statearr_46920 = state_46895;
(statearr_46920[(7)] = inst_46822);

return statearr_46920;
})();
var statearr_46921_48251 = state_46895__$1;
(statearr_46921_48251[(2)] = null);

(statearr_46921_48251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (29))){
var inst_46869 = (state_46895[(10)]);
var state_46895__$1 = state_46895;
var statearr_46922_48253 = state_46895__$1;
(statearr_46922_48253[(2)] = inst_46869);

(statearr_46922_48253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (6))){
var state_46895__$1 = state_46895;
var statearr_46923_48254 = state_46895__$1;
(statearr_46923_48254[(2)] = false);

(statearr_46923_48254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (28))){
var inst_46865 = (state_46895[(2)]);
var inst_46866 = calc_state();
var inst_46822 = inst_46866;
var state_46895__$1 = (function (){var statearr_46924 = state_46895;
(statearr_46924[(15)] = inst_46865);

(statearr_46924[(7)] = inst_46822);

return statearr_46924;
})();
var statearr_46925_48256 = state_46895__$1;
(statearr_46925_48256[(2)] = null);

(statearr_46925_48256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (25))){
var inst_46891 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46926_48257 = state_46895__$1;
(statearr_46926_48257[(2)] = inst_46891);

(statearr_46926_48257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (34))){
var inst_46889 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46927_48258 = state_46895__$1;
(statearr_46927_48258[(2)] = inst_46889);

(statearr_46927_48258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (17))){
var state_46895__$1 = state_46895;
var statearr_46928_48259 = state_46895__$1;
(statearr_46928_48259[(2)] = false);

(statearr_46928_48259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (3))){
var state_46895__$1 = state_46895;
var statearr_46929_48260 = state_46895__$1;
(statearr_46929_48260[(2)] = false);

(statearr_46929_48260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (12))){
var inst_46893 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46895__$1,inst_46893);
} else {
if((state_val_46896 === (2))){
var inst_46797 = (state_46895[(8)]);
var inst_46802 = inst_46797.cljs$lang$protocol_mask$partition0$;
var inst_46803 = (inst_46802 & (64));
var inst_46804 = inst_46797.cljs$core$ISeq$;
var inst_46805 = (cljs.core.PROTOCOL_SENTINEL === inst_46804);
var inst_46806 = ((inst_46803) || (inst_46805));
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46806)){
var statearr_46930_48261 = state_46895__$1;
(statearr_46930_48261[(1)] = (5));

} else {
var statearr_46931_48262 = state_46895__$1;
(statearr_46931_48262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (23))){
var inst_46854 = (state_46895[(14)]);
var inst_46860 = (inst_46854 == null);
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46860)){
var statearr_46932_48263 = state_46895__$1;
(statearr_46932_48263[(1)] = (26));

} else {
var statearr_46933_48264 = state_46895__$1;
(statearr_46933_48264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (35))){
var inst_46880 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
if(cljs.core.truth_(inst_46880)){
var statearr_46934_48265 = state_46895__$1;
(statearr_46934_48265[(1)] = (36));

} else {
var statearr_46935_48266 = state_46895__$1;
(statearr_46935_48266[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (19))){
var inst_46822 = (state_46895[(7)]);
var inst_46842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46822);
var state_46895__$1 = state_46895;
var statearr_46936_48267 = state_46895__$1;
(statearr_46936_48267[(2)] = inst_46842);

(statearr_46936_48267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (11))){
var inst_46822 = (state_46895[(7)]);
var inst_46826 = (inst_46822 == null);
var inst_46827 = cljs.core.not(inst_46826);
var state_46895__$1 = state_46895;
if(inst_46827){
var statearr_46937_48268 = state_46895__$1;
(statearr_46937_48268[(1)] = (13));

} else {
var statearr_46938_48269 = state_46895__$1;
(statearr_46938_48269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (9))){
var inst_46797 = (state_46895[(8)]);
var state_46895__$1 = state_46895;
var statearr_46939_48270 = state_46895__$1;
(statearr_46939_48270[(2)] = inst_46797);

(statearr_46939_48270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (5))){
var state_46895__$1 = state_46895;
var statearr_46940_48271 = state_46895__$1;
(statearr_46940_48271[(2)] = true);

(statearr_46940_48271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (14))){
var state_46895__$1 = state_46895;
var statearr_46941_48273 = state_46895__$1;
(statearr_46941_48273[(2)] = false);

(statearr_46941_48273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (26))){
var inst_46855 = (state_46895[(11)]);
var inst_46862 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46855);
var state_46895__$1 = state_46895;
var statearr_46942_48274 = state_46895__$1;
(statearr_46942_48274[(2)] = inst_46862);

(statearr_46942_48274[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (16))){
var state_46895__$1 = state_46895;
var statearr_46943_48276 = state_46895__$1;
(statearr_46943_48276[(2)] = true);

(statearr_46943_48276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (38))){
var inst_46885 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46944_48277 = state_46895__$1;
(statearr_46944_48277[(2)] = inst_46885);

(statearr_46944_48277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (30))){
var inst_46846 = (state_46895[(9)]);
var inst_46847 = (state_46895[(13)]);
var inst_46855 = (state_46895[(11)]);
var inst_46872 = cljs.core.empty_QMARK_(inst_46846);
var inst_46873 = (inst_46847.cljs$core$IFn$_invoke$arity$1 ? inst_46847.cljs$core$IFn$_invoke$arity$1(inst_46855) : inst_46847.call(null,inst_46855));
var inst_46874 = cljs.core.not(inst_46873);
var inst_46875 = ((inst_46872) && (inst_46874));
var state_46895__$1 = state_46895;
var statearr_46945_48279 = state_46895__$1;
(statearr_46945_48279[(2)] = inst_46875);

(statearr_46945_48279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (10))){
var inst_46797 = (state_46895[(8)]);
var inst_46818 = (state_46895[(2)]);
var inst_46819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46818,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46818,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46818,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46822 = inst_46797;
var state_46895__$1 = (function (){var statearr_46946 = state_46895;
(statearr_46946[(16)] = inst_46821);

(statearr_46946[(17)] = inst_46820);

(statearr_46946[(7)] = inst_46822);

(statearr_46946[(18)] = inst_46819);

return statearr_46946;
})();
var statearr_46947_48281 = state_46895__$1;
(statearr_46947_48281[(2)] = null);

(statearr_46947_48281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (18))){
var inst_46837 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46948_48282 = state_46895__$1;
(statearr_46948_48282[(2)] = inst_46837);

(statearr_46948_48282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (37))){
var state_46895__$1 = state_46895;
var statearr_46949_48283 = state_46895__$1;
(statearr_46949_48283[(2)] = null);

(statearr_46949_48283[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (8))){
var inst_46797 = (state_46895[(8)]);
var inst_46815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46797);
var state_46895__$1 = state_46895;
var statearr_46950_48284 = state_46895__$1;
(statearr_46950_48284[(2)] = inst_46815);

(statearr_46950_48284[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__45999__auto__ = null;
var cljs$core$async$mix_$_state_machine__45999__auto____0 = (function (){
var statearr_46951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46951[(0)] = cljs$core$async$mix_$_state_machine__45999__auto__);

(statearr_46951[(1)] = (1));

return statearr_46951;
});
var cljs$core$async$mix_$_state_machine__45999__auto____1 = (function (state_46895){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_46895);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e46952){if((e46952 instanceof Object)){
var ex__46002__auto__ = e46952;
var statearr_46953_48301 = state_46895;
(statearr_46953_48301[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48303 = state_46895;
state_46895 = G__48303;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45999__auto__ = function(state_46895){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45999__auto____1.call(this,state_46895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45999__auto____0;
cljs$core$async$mix_$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45999__auto____1;
return cljs$core$async$mix_$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_46954 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_46954[(6)] = c__46094__auto___48216);

return statearr_46954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var G__46956 = arguments.length;
switch (G__46956) {
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
var G__46959 = arguments.length;
switch (G__46959) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46957_SHARP_){
if(cljs.core.truth_((p1__46957_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46957_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46957_SHARP_.call(null,topic)))){
return p1__46957_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46957_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46961 = meta46961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46962,meta46961__$1){
var self__ = this;
var _46962__$1 = this;
return (new cljs.core.async.t_cljs$core$async46960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46961__$1));
}));

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46962){
var self__ = this;
var _46962__$1 = this;
return self__.meta46961;
}));

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46961","meta46961",585881690,null)], null);
}));

(cljs.core.async.t_cljs$core$async46960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46960");

(cljs.core.async.t_cljs$core$async46960.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46960.
 */
cljs.core.async.__GT_t_cljs$core$async46960 = (function cljs$core$async$__GT_t_cljs$core$async46960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46961){
return (new cljs.core.async.t_cljs$core$async46960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46961));
});

}

return (new cljs.core.async.t_cljs$core$async46960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46094__auto___48361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47034){
var state_val_47035 = (state_47034[(1)]);
if((state_val_47035 === (7))){
var inst_47030 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47036_48363 = state_47034__$1;
(statearr_47036_48363[(2)] = inst_47030);

(statearr_47036_48363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (20))){
var state_47034__$1 = state_47034;
var statearr_47037_48364 = state_47034__$1;
(statearr_47037_48364[(2)] = null);

(statearr_47037_48364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (1))){
var state_47034__$1 = state_47034;
var statearr_47038_48365 = state_47034__$1;
(statearr_47038_48365[(2)] = null);

(statearr_47038_48365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (24))){
var inst_47013 = (state_47034[(7)]);
var inst_47022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47013);
var state_47034__$1 = state_47034;
var statearr_47039_48367 = state_47034__$1;
(statearr_47039_48367[(2)] = inst_47022);

(statearr_47039_48367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (4))){
var inst_46965 = (state_47034[(8)]);
var inst_46965__$1 = (state_47034[(2)]);
var inst_46966 = (inst_46965__$1 == null);
var state_47034__$1 = (function (){var statearr_47040 = state_47034;
(statearr_47040[(8)] = inst_46965__$1);

return statearr_47040;
})();
if(cljs.core.truth_(inst_46966)){
var statearr_47041_48371 = state_47034__$1;
(statearr_47041_48371[(1)] = (5));

} else {
var statearr_47042_48372 = state_47034__$1;
(statearr_47042_48372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (15))){
var inst_47007 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47043_48373 = state_47034__$1;
(statearr_47043_48373[(2)] = inst_47007);

(statearr_47043_48373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (21))){
var inst_47027 = (state_47034[(2)]);
var state_47034__$1 = (function (){var statearr_47044 = state_47034;
(statearr_47044[(9)] = inst_47027);

return statearr_47044;
})();
var statearr_47045_48378 = state_47034__$1;
(statearr_47045_48378[(2)] = null);

(statearr_47045_48378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (13))){
var inst_46989 = (state_47034[(10)]);
var inst_46991 = cljs.core.chunked_seq_QMARK_(inst_46989);
var state_47034__$1 = state_47034;
if(inst_46991){
var statearr_47046_48379 = state_47034__$1;
(statearr_47046_48379[(1)] = (16));

} else {
var statearr_47047_48380 = state_47034__$1;
(statearr_47047_48380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (22))){
var inst_47019 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
if(cljs.core.truth_(inst_47019)){
var statearr_47048_48381 = state_47034__$1;
(statearr_47048_48381[(1)] = (23));

} else {
var statearr_47049_48382 = state_47034__$1;
(statearr_47049_48382[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (6))){
var inst_47015 = (state_47034[(11)]);
var inst_47013 = (state_47034[(7)]);
var inst_46965 = (state_47034[(8)]);
var inst_47013__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46965) : topic_fn.call(null,inst_46965));
var inst_47014 = cljs.core.deref(mults);
var inst_47015__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47014,inst_47013__$1);
var state_47034__$1 = (function (){var statearr_47050 = state_47034;
(statearr_47050[(11)] = inst_47015__$1);

(statearr_47050[(7)] = inst_47013__$1);

return statearr_47050;
})();
if(cljs.core.truth_(inst_47015__$1)){
var statearr_47051_48393 = state_47034__$1;
(statearr_47051_48393[(1)] = (19));

} else {
var statearr_47052_48395 = state_47034__$1;
(statearr_47052_48395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (25))){
var inst_47024 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47053_48400 = state_47034__$1;
(statearr_47053_48400[(2)] = inst_47024);

(statearr_47053_48400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (17))){
var inst_46989 = (state_47034[(10)]);
var inst_46998 = cljs.core.first(inst_46989);
var inst_46999 = cljs.core.async.muxch_STAR_(inst_46998);
var inst_47000 = cljs.core.async.close_BANG_(inst_46999);
var inst_47001 = cljs.core.next(inst_46989);
var inst_46975 = inst_47001;
var inst_46976 = null;
var inst_46977 = (0);
var inst_46978 = (0);
var state_47034__$1 = (function (){var statearr_47054 = state_47034;
(statearr_47054[(12)] = inst_47000);

(statearr_47054[(13)] = inst_46977);

(statearr_47054[(14)] = inst_46978);

(statearr_47054[(15)] = inst_46976);

(statearr_47054[(16)] = inst_46975);

return statearr_47054;
})();
var statearr_47055_48456 = state_47034__$1;
(statearr_47055_48456[(2)] = null);

(statearr_47055_48456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (3))){
var inst_47032 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47034__$1,inst_47032);
} else {
if((state_val_47035 === (12))){
var inst_47009 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47056_48471 = state_47034__$1;
(statearr_47056_48471[(2)] = inst_47009);

(statearr_47056_48471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (2))){
var state_47034__$1 = state_47034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47034__$1,(4),ch);
} else {
if((state_val_47035 === (23))){
var state_47034__$1 = state_47034;
var statearr_47057_48476 = state_47034__$1;
(statearr_47057_48476[(2)] = null);

(statearr_47057_48476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (19))){
var inst_47015 = (state_47034[(11)]);
var inst_46965 = (state_47034[(8)]);
var inst_47017 = cljs.core.async.muxch_STAR_(inst_47015);
var state_47034__$1 = state_47034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47034__$1,(22),inst_47017,inst_46965);
} else {
if((state_val_47035 === (11))){
var inst_46975 = (state_47034[(16)]);
var inst_46989 = (state_47034[(10)]);
var inst_46989__$1 = cljs.core.seq(inst_46975);
var state_47034__$1 = (function (){var statearr_47058 = state_47034;
(statearr_47058[(10)] = inst_46989__$1);

return statearr_47058;
})();
if(inst_46989__$1){
var statearr_47059_48480 = state_47034__$1;
(statearr_47059_48480[(1)] = (13));

} else {
var statearr_47060_48481 = state_47034__$1;
(statearr_47060_48481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (9))){
var inst_47011 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47061_48482 = state_47034__$1;
(statearr_47061_48482[(2)] = inst_47011);

(statearr_47061_48482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (5))){
var inst_46972 = cljs.core.deref(mults);
var inst_46973 = cljs.core.vals(inst_46972);
var inst_46974 = cljs.core.seq(inst_46973);
var inst_46975 = inst_46974;
var inst_46976 = null;
var inst_46977 = (0);
var inst_46978 = (0);
var state_47034__$1 = (function (){var statearr_47062 = state_47034;
(statearr_47062[(13)] = inst_46977);

(statearr_47062[(14)] = inst_46978);

(statearr_47062[(15)] = inst_46976);

(statearr_47062[(16)] = inst_46975);

return statearr_47062;
})();
var statearr_47063_48487 = state_47034__$1;
(statearr_47063_48487[(2)] = null);

(statearr_47063_48487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (14))){
var state_47034__$1 = state_47034;
var statearr_47067_48492 = state_47034__$1;
(statearr_47067_48492[(2)] = null);

(statearr_47067_48492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (16))){
var inst_46989 = (state_47034[(10)]);
var inst_46993 = cljs.core.chunk_first(inst_46989);
var inst_46994 = cljs.core.chunk_rest(inst_46989);
var inst_46995 = cljs.core.count(inst_46993);
var inst_46975 = inst_46994;
var inst_46976 = inst_46993;
var inst_46977 = inst_46995;
var inst_46978 = (0);
var state_47034__$1 = (function (){var statearr_47068 = state_47034;
(statearr_47068[(13)] = inst_46977);

(statearr_47068[(14)] = inst_46978);

(statearr_47068[(15)] = inst_46976);

(statearr_47068[(16)] = inst_46975);

return statearr_47068;
})();
var statearr_47069_48501 = state_47034__$1;
(statearr_47069_48501[(2)] = null);

(statearr_47069_48501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (10))){
var inst_46977 = (state_47034[(13)]);
var inst_46978 = (state_47034[(14)]);
var inst_46976 = (state_47034[(15)]);
var inst_46975 = (state_47034[(16)]);
var inst_46983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46976,inst_46978);
var inst_46984 = cljs.core.async.muxch_STAR_(inst_46983);
var inst_46985 = cljs.core.async.close_BANG_(inst_46984);
var inst_46986 = (inst_46978 + (1));
var tmp47064 = inst_46977;
var tmp47065 = inst_46976;
var tmp47066 = inst_46975;
var inst_46975__$1 = tmp47066;
var inst_46976__$1 = tmp47065;
var inst_46977__$1 = tmp47064;
var inst_46978__$1 = inst_46986;
var state_47034__$1 = (function (){var statearr_47070 = state_47034;
(statearr_47070[(13)] = inst_46977__$1);

(statearr_47070[(14)] = inst_46978__$1);

(statearr_47070[(15)] = inst_46976__$1);

(statearr_47070[(16)] = inst_46975__$1);

(statearr_47070[(17)] = inst_46985);

return statearr_47070;
})();
var statearr_47071_48504 = state_47034__$1;
(statearr_47071_48504[(2)] = null);

(statearr_47071_48504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (18))){
var inst_47004 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47072_48505 = state_47034__$1;
(statearr_47072_48505[(2)] = inst_47004);

(statearr_47072_48505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (8))){
var inst_46977 = (state_47034[(13)]);
var inst_46978 = (state_47034[(14)]);
var inst_46980 = (inst_46978 < inst_46977);
var inst_46981 = inst_46980;
var state_47034__$1 = state_47034;
if(cljs.core.truth_(inst_46981)){
var statearr_47073_48506 = state_47034__$1;
(statearr_47073_48506[(1)] = (10));

} else {
var statearr_47074_48507 = state_47034__$1;
(statearr_47074_48507[(1)] = (11));

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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47075[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47075[(1)] = (1));

return statearr_47075;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47034){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47034);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47076){if((e47076 instanceof Object)){
var ex__46002__auto__ = e47076;
var statearr_47077_48520 = state_47034;
(statearr_47077_48520[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48526 = state_47034;
state_47034 = G__48526;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47078 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47078[(6)] = c__46094__auto___48361);

return statearr_47078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var G__47080 = arguments.length;
switch (G__47080) {
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
var G__47082 = arguments.length;
switch (G__47082) {
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
var G__47084 = arguments.length;
switch (G__47084) {
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
var c__46094__auto___48574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47123){
var state_val_47124 = (state_47123[(1)]);
if((state_val_47124 === (7))){
var state_47123__$1 = state_47123;
var statearr_47125_48575 = state_47123__$1;
(statearr_47125_48575[(2)] = null);

(statearr_47125_48575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (1))){
var state_47123__$1 = state_47123;
var statearr_47126_48579 = state_47123__$1;
(statearr_47126_48579[(2)] = null);

(statearr_47126_48579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (4))){
var inst_47087 = (state_47123[(7)]);
var inst_47089 = (inst_47087 < cnt);
var state_47123__$1 = state_47123;
if(cljs.core.truth_(inst_47089)){
var statearr_47127_48580 = state_47123__$1;
(statearr_47127_48580[(1)] = (6));

} else {
var statearr_47128_48581 = state_47123__$1;
(statearr_47128_48581[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (15))){
var inst_47119 = (state_47123[(2)]);
var state_47123__$1 = state_47123;
var statearr_47129_48582 = state_47123__$1;
(statearr_47129_48582[(2)] = inst_47119);

(statearr_47129_48582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (13))){
var inst_47112 = cljs.core.async.close_BANG_(out);
var state_47123__$1 = state_47123;
var statearr_47130_48586 = state_47123__$1;
(statearr_47130_48586[(2)] = inst_47112);

(statearr_47130_48586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (6))){
var state_47123__$1 = state_47123;
var statearr_47131_48587 = state_47123__$1;
(statearr_47131_48587[(2)] = null);

(statearr_47131_48587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (3))){
var inst_47121 = (state_47123[(2)]);
var state_47123__$1 = state_47123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47123__$1,inst_47121);
} else {
if((state_val_47124 === (12))){
var inst_47109 = (state_47123[(8)]);
var inst_47109__$1 = (state_47123[(2)]);
var inst_47110 = cljs.core.some(cljs.core.nil_QMARK_,inst_47109__$1);
var state_47123__$1 = (function (){var statearr_47132 = state_47123;
(statearr_47132[(8)] = inst_47109__$1);

return statearr_47132;
})();
if(cljs.core.truth_(inst_47110)){
var statearr_47133_48596 = state_47123__$1;
(statearr_47133_48596[(1)] = (13));

} else {
var statearr_47134_48601 = state_47123__$1;
(statearr_47134_48601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (2))){
var inst_47086 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47087 = (0);
var state_47123__$1 = (function (){var statearr_47135 = state_47123;
(statearr_47135[(9)] = inst_47086);

(statearr_47135[(7)] = inst_47087);

return statearr_47135;
})();
var statearr_47136_48605 = state_47123__$1;
(statearr_47136_48605[(2)] = null);

(statearr_47136_48605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (11))){
var inst_47087 = (state_47123[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47123,(10),Object,null,(9));
var inst_47096 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47087) : chs__$1.call(null,inst_47087));
var inst_47097 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47087) : done.call(null,inst_47087));
var inst_47098 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47096,inst_47097);
var state_47123__$1 = state_47123;
var statearr_47137_48607 = state_47123__$1;
(statearr_47137_48607[(2)] = inst_47098);


cljs.core.async.impl.ioc_helpers.process_exception(state_47123__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (9))){
var inst_47087 = (state_47123[(7)]);
var inst_47100 = (state_47123[(2)]);
var inst_47101 = (inst_47087 + (1));
var inst_47087__$1 = inst_47101;
var state_47123__$1 = (function (){var statearr_47138 = state_47123;
(statearr_47138[(10)] = inst_47100);

(statearr_47138[(7)] = inst_47087__$1);

return statearr_47138;
})();
var statearr_47139_48608 = state_47123__$1;
(statearr_47139_48608[(2)] = null);

(statearr_47139_48608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (5))){
var inst_47107 = (state_47123[(2)]);
var state_47123__$1 = (function (){var statearr_47140 = state_47123;
(statearr_47140[(11)] = inst_47107);

return statearr_47140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47123__$1,(12),dchan);
} else {
if((state_val_47124 === (14))){
var inst_47109 = (state_47123[(8)]);
var inst_47114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47109);
var state_47123__$1 = state_47123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47123__$1,(16),out,inst_47114);
} else {
if((state_val_47124 === (16))){
var inst_47116 = (state_47123[(2)]);
var state_47123__$1 = (function (){var statearr_47141 = state_47123;
(statearr_47141[(12)] = inst_47116);

return statearr_47141;
})();
var statearr_47142_48613 = state_47123__$1;
(statearr_47142_48613[(2)] = null);

(statearr_47142_48613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (10))){
var inst_47091 = (state_47123[(2)]);
var inst_47092 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47123__$1 = (function (){var statearr_47143 = state_47123;
(statearr_47143[(13)] = inst_47091);

return statearr_47143;
})();
var statearr_47144_48614 = state_47123__$1;
(statearr_47144_48614[(2)] = inst_47092);


cljs.core.async.impl.ioc_helpers.process_exception(state_47123__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47124 === (8))){
var inst_47105 = (state_47123[(2)]);
var state_47123__$1 = state_47123;
var statearr_47145_48615 = state_47123__$1;
(statearr_47145_48615[(2)] = inst_47105);

(statearr_47145_48615[(1)] = (5));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47146[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47146[(1)] = (1));

return statearr_47146;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47123){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47123);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47147){if((e47147 instanceof Object)){
var ex__46002__auto__ = e47147;
var statearr_47148_48616 = state_47123;
(statearr_47148_48616[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48617 = state_47123;
state_47123 = G__48617;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47149 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47149[(6)] = c__46094__auto___48574);

return statearr_47149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var G__47152 = arguments.length;
switch (G__47152) {
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
var c__46094__auto___48621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47184){
var state_val_47185 = (state_47184[(1)]);
if((state_val_47185 === (7))){
var inst_47163 = (state_47184[(7)]);
var inst_47164 = (state_47184[(8)]);
var inst_47163__$1 = (state_47184[(2)]);
var inst_47164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47163__$1,(0),null);
var inst_47165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47163__$1,(1),null);
var inst_47166 = (inst_47164__$1 == null);
var state_47184__$1 = (function (){var statearr_47186 = state_47184;
(statearr_47186[(9)] = inst_47165);

(statearr_47186[(7)] = inst_47163__$1);

(statearr_47186[(8)] = inst_47164__$1);

return statearr_47186;
})();
if(cljs.core.truth_(inst_47166)){
var statearr_47187_48623 = state_47184__$1;
(statearr_47187_48623[(1)] = (8));

} else {
var statearr_47188_48624 = state_47184__$1;
(statearr_47188_48624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (1))){
var inst_47153 = cljs.core.vec(chs);
var inst_47154 = inst_47153;
var state_47184__$1 = (function (){var statearr_47189 = state_47184;
(statearr_47189[(10)] = inst_47154);

return statearr_47189;
})();
var statearr_47190_48625 = state_47184__$1;
(statearr_47190_48625[(2)] = null);

(statearr_47190_48625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (4))){
var inst_47154 = (state_47184[(10)]);
var state_47184__$1 = state_47184;
return cljs.core.async.ioc_alts_BANG_(state_47184__$1,(7),inst_47154);
} else {
if((state_val_47185 === (6))){
var inst_47180 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47191_48626 = state_47184__$1;
(statearr_47191_48626[(2)] = inst_47180);

(statearr_47191_48626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (3))){
var inst_47182 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47184__$1,inst_47182);
} else {
if((state_val_47185 === (2))){
var inst_47154 = (state_47184[(10)]);
var inst_47156 = cljs.core.count(inst_47154);
var inst_47157 = (inst_47156 > (0));
var state_47184__$1 = state_47184;
if(cljs.core.truth_(inst_47157)){
var statearr_47193_48630 = state_47184__$1;
(statearr_47193_48630[(1)] = (4));

} else {
var statearr_47194_48632 = state_47184__$1;
(statearr_47194_48632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (11))){
var inst_47154 = (state_47184[(10)]);
var inst_47173 = (state_47184[(2)]);
var tmp47192 = inst_47154;
var inst_47154__$1 = tmp47192;
var state_47184__$1 = (function (){var statearr_47195 = state_47184;
(statearr_47195[(10)] = inst_47154__$1);

(statearr_47195[(11)] = inst_47173);

return statearr_47195;
})();
var statearr_47196_48633 = state_47184__$1;
(statearr_47196_48633[(2)] = null);

(statearr_47196_48633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (9))){
var inst_47164 = (state_47184[(8)]);
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47184__$1,(11),out,inst_47164);
} else {
if((state_val_47185 === (5))){
var inst_47178 = cljs.core.async.close_BANG_(out);
var state_47184__$1 = state_47184;
var statearr_47197_48639 = state_47184__$1;
(statearr_47197_48639[(2)] = inst_47178);

(statearr_47197_48639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (10))){
var inst_47176 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47198_48640 = state_47184__$1;
(statearr_47198_48640[(2)] = inst_47176);

(statearr_47198_48640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (8))){
var inst_47165 = (state_47184[(9)]);
var inst_47154 = (state_47184[(10)]);
var inst_47163 = (state_47184[(7)]);
var inst_47164 = (state_47184[(8)]);
var inst_47168 = (function (){var cs = inst_47154;
var vec__47159 = inst_47163;
var v = inst_47164;
var c = inst_47165;
return (function (p1__47150_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47150_SHARP_);
});
})();
var inst_47169 = cljs.core.filterv(inst_47168,inst_47154);
var inst_47154__$1 = inst_47169;
var state_47184__$1 = (function (){var statearr_47199 = state_47184;
(statearr_47199[(10)] = inst_47154__$1);

return statearr_47199;
})();
var statearr_47200_48642 = state_47184__$1;
(statearr_47200_48642[(2)] = null);

(statearr_47200_48642[(1)] = (2));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47201[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47201[(1)] = (1));

return statearr_47201;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47184){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47184);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47202){if((e47202 instanceof Object)){
var ex__46002__auto__ = e47202;
var statearr_47203_48647 = state_47184;
(statearr_47203_48647[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48648 = state_47184;
state_47184 = G__48648;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47204 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47204[(6)] = c__46094__auto___48621);

return statearr_47204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
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
var G__47206 = arguments.length;
switch (G__47206) {
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
var c__46094__auto___48650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47230){
var state_val_47231 = (state_47230[(1)]);
if((state_val_47231 === (7))){
var inst_47212 = (state_47230[(7)]);
var inst_47212__$1 = (state_47230[(2)]);
var inst_47213 = (inst_47212__$1 == null);
var inst_47214 = cljs.core.not(inst_47213);
var state_47230__$1 = (function (){var statearr_47232 = state_47230;
(statearr_47232[(7)] = inst_47212__$1);

return statearr_47232;
})();
if(inst_47214){
var statearr_47233_48652 = state_47230__$1;
(statearr_47233_48652[(1)] = (8));

} else {
var statearr_47234_48653 = state_47230__$1;
(statearr_47234_48653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (1))){
var inst_47207 = (0);
var state_47230__$1 = (function (){var statearr_47235 = state_47230;
(statearr_47235[(8)] = inst_47207);

return statearr_47235;
})();
var statearr_47236_48654 = state_47230__$1;
(statearr_47236_48654[(2)] = null);

(statearr_47236_48654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (4))){
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47230__$1,(7),ch);
} else {
if((state_val_47231 === (6))){
var inst_47225 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47237_48660 = state_47230__$1;
(statearr_47237_48660[(2)] = inst_47225);

(statearr_47237_48660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (3))){
var inst_47227 = (state_47230[(2)]);
var inst_47228 = cljs.core.async.close_BANG_(out);
var state_47230__$1 = (function (){var statearr_47238 = state_47230;
(statearr_47238[(9)] = inst_47227);

return statearr_47238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47230__$1,inst_47228);
} else {
if((state_val_47231 === (2))){
var inst_47207 = (state_47230[(8)]);
var inst_47209 = (inst_47207 < n);
var state_47230__$1 = state_47230;
if(cljs.core.truth_(inst_47209)){
var statearr_47239_48663 = state_47230__$1;
(statearr_47239_48663[(1)] = (4));

} else {
var statearr_47240_48664 = state_47230__$1;
(statearr_47240_48664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (11))){
var inst_47207 = (state_47230[(8)]);
var inst_47217 = (state_47230[(2)]);
var inst_47218 = (inst_47207 + (1));
var inst_47207__$1 = inst_47218;
var state_47230__$1 = (function (){var statearr_47241 = state_47230;
(statearr_47241[(10)] = inst_47217);

(statearr_47241[(8)] = inst_47207__$1);

return statearr_47241;
})();
var statearr_47242_48665 = state_47230__$1;
(statearr_47242_48665[(2)] = null);

(statearr_47242_48665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (9))){
var state_47230__$1 = state_47230;
var statearr_47243_48668 = state_47230__$1;
(statearr_47243_48668[(2)] = null);

(statearr_47243_48668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (5))){
var state_47230__$1 = state_47230;
var statearr_47244_48669 = state_47230__$1;
(statearr_47244_48669[(2)] = null);

(statearr_47244_48669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (10))){
var inst_47222 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47245_48670 = state_47230__$1;
(statearr_47245_48670[(2)] = inst_47222);

(statearr_47245_48670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (8))){
var inst_47212 = (state_47230[(7)]);
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47230__$1,(11),out,inst_47212);
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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47246[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47246[(1)] = (1));

return statearr_47246;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47230){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47230);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47247){if((e47247 instanceof Object)){
var ex__46002__auto__ = e47247;
var statearr_47248_48674 = state_47230;
(statearr_47248_48674[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48677 = state_47230;
state_47230 = G__48677;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47249 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47249[(6)] = c__46094__auto___48650);

return statearr_47249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47251 = (function (f,ch,meta47252){
this.f = f;
this.ch = ch;
this.meta47252 = meta47252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47253,meta47252__$1){
var self__ = this;
var _47253__$1 = this;
return (new cljs.core.async.t_cljs$core$async47251(self__.f,self__.ch,meta47252__$1));
}));

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47253){
var self__ = this;
var _47253__$1 = this;
return self__.meta47252;
}));

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47254 = (function (f,ch,meta47252,_,fn1,meta47255){
this.f = f;
this.ch = ch;
this.meta47252 = meta47252;
this._ = _;
this.fn1 = fn1;
this.meta47255 = meta47255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47256,meta47255__$1){
var self__ = this;
var _47256__$1 = this;
return (new cljs.core.async.t_cljs$core$async47254(self__.f,self__.ch,self__.meta47252,self__._,self__.fn1,meta47255__$1));
}));

(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47256){
var self__ = this;
var _47256__$1 = this;
return self__.meta47255;
}));

(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47250_SHARP_){
var G__47257 = (((p1__47250_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47250_SHARP_) : self__.f.call(null,p1__47250_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47257) : f1.call(null,G__47257));
});
}));

(cljs.core.async.t_cljs$core$async47254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47252","meta47252",1368436285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47251","cljs.core.async/t_cljs$core$async47251",793977564,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47255","meta47255",-52939841,null)], null);
}));

(cljs.core.async.t_cljs$core$async47254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47254");

(cljs.core.async.t_cljs$core$async47254.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47254.
 */
cljs.core.async.__GT_t_cljs$core$async47254 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47254(f__$1,ch__$1,meta47252__$1,___$2,fn1__$1,meta47255){
return (new cljs.core.async.t_cljs$core$async47254(f__$1,ch__$1,meta47252__$1,___$2,fn1__$1,meta47255));
});

}

return (new cljs.core.async.t_cljs$core$async47254(self__.f,self__.ch,self__.meta47252,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47258 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47258) : self__.f.call(null,G__47258));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47252","meta47252",1368436285,null)], null);
}));

(cljs.core.async.t_cljs$core$async47251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47251");

(cljs.core.async.t_cljs$core$async47251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47251.
 */
cljs.core.async.__GT_t_cljs$core$async47251 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47251(f__$1,ch__$1,meta47252){
return (new cljs.core.async.t_cljs$core$async47251(f__$1,ch__$1,meta47252));
});

}

return (new cljs.core.async.t_cljs$core$async47251(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47259 = (function (f,ch,meta47260){
this.f = f;
this.ch = ch;
this.meta47260 = meta47260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47261,meta47260__$1){
var self__ = this;
var _47261__$1 = this;
return (new cljs.core.async.t_cljs$core$async47259(self__.f,self__.ch,meta47260__$1));
}));

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47261){
var self__ = this;
var _47261__$1 = this;
return self__.meta47260;
}));

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47260","meta47260",987211766,null)], null);
}));

(cljs.core.async.t_cljs$core$async47259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47259");

(cljs.core.async.t_cljs$core$async47259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47259.
 */
cljs.core.async.__GT_t_cljs$core$async47259 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47259(f__$1,ch__$1,meta47260){
return (new cljs.core.async.t_cljs$core$async47259(f__$1,ch__$1,meta47260));
});

}

return (new cljs.core.async.t_cljs$core$async47259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47262 = (function (p,ch,meta47263){
this.p = p;
this.ch = ch;
this.meta47263 = meta47263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47264,meta47263__$1){
var self__ = this;
var _47264__$1 = this;
return (new cljs.core.async.t_cljs$core$async47262(self__.p,self__.ch,meta47263__$1));
}));

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47264){
var self__ = this;
var _47264__$1 = this;
return self__.meta47263;
}));

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47263","meta47263",-1036248209,null)], null);
}));

(cljs.core.async.t_cljs$core$async47262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47262");

(cljs.core.async.t_cljs$core$async47262.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47262.
 */
cljs.core.async.__GT_t_cljs$core$async47262 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47262(p__$1,ch__$1,meta47263){
return (new cljs.core.async.t_cljs$core$async47262(p__$1,ch__$1,meta47263));
});

}

return (new cljs.core.async.t_cljs$core$async47262(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47266 = arguments.length;
switch (G__47266) {
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
var c__46094__auto___48828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47287){
var state_val_47288 = (state_47287[(1)]);
if((state_val_47288 === (7))){
var inst_47283 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
var statearr_47289_48829 = state_47287__$1;
(statearr_47289_48829[(2)] = inst_47283);

(statearr_47289_48829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (1))){
var state_47287__$1 = state_47287;
var statearr_47290_48830 = state_47287__$1;
(statearr_47290_48830[(2)] = null);

(statearr_47290_48830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (4))){
var inst_47269 = (state_47287[(7)]);
var inst_47269__$1 = (state_47287[(2)]);
var inst_47270 = (inst_47269__$1 == null);
var state_47287__$1 = (function (){var statearr_47291 = state_47287;
(statearr_47291[(7)] = inst_47269__$1);

return statearr_47291;
})();
if(cljs.core.truth_(inst_47270)){
var statearr_47292_48833 = state_47287__$1;
(statearr_47292_48833[(1)] = (5));

} else {
var statearr_47293_48834 = state_47287__$1;
(statearr_47293_48834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (6))){
var inst_47269 = (state_47287[(7)]);
var inst_47274 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47269) : p.call(null,inst_47269));
var state_47287__$1 = state_47287;
if(cljs.core.truth_(inst_47274)){
var statearr_47294_48835 = state_47287__$1;
(statearr_47294_48835[(1)] = (8));

} else {
var statearr_47295_48836 = state_47287__$1;
(statearr_47295_48836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (3))){
var inst_47285 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47287__$1,inst_47285);
} else {
if((state_val_47288 === (2))){
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47287__$1,(4),ch);
} else {
if((state_val_47288 === (11))){
var inst_47277 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
var statearr_47296_48837 = state_47287__$1;
(statearr_47296_48837[(2)] = inst_47277);

(statearr_47296_48837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (9))){
var state_47287__$1 = state_47287;
var statearr_47297_48841 = state_47287__$1;
(statearr_47297_48841[(2)] = null);

(statearr_47297_48841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (5))){
var inst_47272 = cljs.core.async.close_BANG_(out);
var state_47287__$1 = state_47287;
var statearr_47298_48846 = state_47287__$1;
(statearr_47298_48846[(2)] = inst_47272);

(statearr_47298_48846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (10))){
var inst_47280 = (state_47287[(2)]);
var state_47287__$1 = (function (){var statearr_47299 = state_47287;
(statearr_47299[(8)] = inst_47280);

return statearr_47299;
})();
var statearr_47300_48847 = state_47287__$1;
(statearr_47300_48847[(2)] = null);

(statearr_47300_48847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (8))){
var inst_47269 = (state_47287[(7)]);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47287__$1,(11),out,inst_47269);
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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47301 = [null,null,null,null,null,null,null,null,null];
(statearr_47301[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47301[(1)] = (1));

return statearr_47301;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47287){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47287);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47302){if((e47302 instanceof Object)){
var ex__46002__auto__ = e47302;
var statearr_47303_48849 = state_47287;
(statearr_47303_48849[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48851 = state_47287;
state_47287 = G__48851;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47304 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47304[(6)] = c__46094__auto___48828);

return statearr_47304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47306 = arguments.length;
switch (G__47306) {
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
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47368){
var state_val_47369 = (state_47368[(1)]);
if((state_val_47369 === (7))){
var inst_47364 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47370_48864 = state_47368__$1;
(statearr_47370_48864[(2)] = inst_47364);

(statearr_47370_48864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (20))){
var inst_47334 = (state_47368[(7)]);
var inst_47345 = (state_47368[(2)]);
var inst_47346 = cljs.core.next(inst_47334);
var inst_47320 = inst_47346;
var inst_47321 = null;
var inst_47322 = (0);
var inst_47323 = (0);
var state_47368__$1 = (function (){var statearr_47371 = state_47368;
(statearr_47371[(8)] = inst_47320);

(statearr_47371[(9)] = inst_47345);

(statearr_47371[(10)] = inst_47321);

(statearr_47371[(11)] = inst_47323);

(statearr_47371[(12)] = inst_47322);

return statearr_47371;
})();
var statearr_47372_48868 = state_47368__$1;
(statearr_47372_48868[(2)] = null);

(statearr_47372_48868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (1))){
var state_47368__$1 = state_47368;
var statearr_47373_48869 = state_47368__$1;
(statearr_47373_48869[(2)] = null);

(statearr_47373_48869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (4))){
var inst_47309 = (state_47368[(13)]);
var inst_47309__$1 = (state_47368[(2)]);
var inst_47310 = (inst_47309__$1 == null);
var state_47368__$1 = (function (){var statearr_47374 = state_47368;
(statearr_47374[(13)] = inst_47309__$1);

return statearr_47374;
})();
if(cljs.core.truth_(inst_47310)){
var statearr_47375_48873 = state_47368__$1;
(statearr_47375_48873[(1)] = (5));

} else {
var statearr_47376_48874 = state_47368__$1;
(statearr_47376_48874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (15))){
var state_47368__$1 = state_47368;
var statearr_47380_48875 = state_47368__$1;
(statearr_47380_48875[(2)] = null);

(statearr_47380_48875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (21))){
var state_47368__$1 = state_47368;
var statearr_47381_48876 = state_47368__$1;
(statearr_47381_48876[(2)] = null);

(statearr_47381_48876[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (13))){
var inst_47320 = (state_47368[(8)]);
var inst_47321 = (state_47368[(10)]);
var inst_47323 = (state_47368[(11)]);
var inst_47322 = (state_47368[(12)]);
var inst_47330 = (state_47368[(2)]);
var inst_47331 = (inst_47323 + (1));
var tmp47377 = inst_47320;
var tmp47378 = inst_47321;
var tmp47379 = inst_47322;
var inst_47320__$1 = tmp47377;
var inst_47321__$1 = tmp47378;
var inst_47322__$1 = tmp47379;
var inst_47323__$1 = inst_47331;
var state_47368__$1 = (function (){var statearr_47382 = state_47368;
(statearr_47382[(8)] = inst_47320__$1);

(statearr_47382[(14)] = inst_47330);

(statearr_47382[(10)] = inst_47321__$1);

(statearr_47382[(11)] = inst_47323__$1);

(statearr_47382[(12)] = inst_47322__$1);

return statearr_47382;
})();
var statearr_47383_48880 = state_47368__$1;
(statearr_47383_48880[(2)] = null);

(statearr_47383_48880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (22))){
var state_47368__$1 = state_47368;
var statearr_47384_48881 = state_47368__$1;
(statearr_47384_48881[(2)] = null);

(statearr_47384_48881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (6))){
var inst_47309 = (state_47368[(13)]);
var inst_47318 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47309) : f.call(null,inst_47309));
var inst_47319 = cljs.core.seq(inst_47318);
var inst_47320 = inst_47319;
var inst_47321 = null;
var inst_47322 = (0);
var inst_47323 = (0);
var state_47368__$1 = (function (){var statearr_47385 = state_47368;
(statearr_47385[(8)] = inst_47320);

(statearr_47385[(10)] = inst_47321);

(statearr_47385[(11)] = inst_47323);

(statearr_47385[(12)] = inst_47322);

return statearr_47385;
})();
var statearr_47386_48883 = state_47368__$1;
(statearr_47386_48883[(2)] = null);

(statearr_47386_48883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (17))){
var inst_47334 = (state_47368[(7)]);
var inst_47338 = cljs.core.chunk_first(inst_47334);
var inst_47339 = cljs.core.chunk_rest(inst_47334);
var inst_47340 = cljs.core.count(inst_47338);
var inst_47320 = inst_47339;
var inst_47321 = inst_47338;
var inst_47322 = inst_47340;
var inst_47323 = (0);
var state_47368__$1 = (function (){var statearr_47387 = state_47368;
(statearr_47387[(8)] = inst_47320);

(statearr_47387[(10)] = inst_47321);

(statearr_47387[(11)] = inst_47323);

(statearr_47387[(12)] = inst_47322);

return statearr_47387;
})();
var statearr_47388_48884 = state_47368__$1;
(statearr_47388_48884[(2)] = null);

(statearr_47388_48884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (3))){
var inst_47366 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47368__$1,inst_47366);
} else {
if((state_val_47369 === (12))){
var inst_47354 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47389_48885 = state_47368__$1;
(statearr_47389_48885[(2)] = inst_47354);

(statearr_47389_48885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (2))){
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47368__$1,(4),in$);
} else {
if((state_val_47369 === (23))){
var inst_47362 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47390_48886 = state_47368__$1;
(statearr_47390_48886[(2)] = inst_47362);

(statearr_47390_48886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (19))){
var inst_47349 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47391_48889 = state_47368__$1;
(statearr_47391_48889[(2)] = inst_47349);

(statearr_47391_48889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (11))){
var inst_47320 = (state_47368[(8)]);
var inst_47334 = (state_47368[(7)]);
var inst_47334__$1 = cljs.core.seq(inst_47320);
var state_47368__$1 = (function (){var statearr_47392 = state_47368;
(statearr_47392[(7)] = inst_47334__$1);

return statearr_47392;
})();
if(inst_47334__$1){
var statearr_47393_48894 = state_47368__$1;
(statearr_47393_48894[(1)] = (14));

} else {
var statearr_47394_48895 = state_47368__$1;
(statearr_47394_48895[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (9))){
var inst_47356 = (state_47368[(2)]);
var inst_47357 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47368__$1 = (function (){var statearr_47395 = state_47368;
(statearr_47395[(15)] = inst_47356);

return statearr_47395;
})();
if(cljs.core.truth_(inst_47357)){
var statearr_47396_48896 = state_47368__$1;
(statearr_47396_48896[(1)] = (21));

} else {
var statearr_47397_48897 = state_47368__$1;
(statearr_47397_48897[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (5))){
var inst_47312 = cljs.core.async.close_BANG_(out);
var state_47368__$1 = state_47368;
var statearr_47398_48898 = state_47368__$1;
(statearr_47398_48898[(2)] = inst_47312);

(statearr_47398_48898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (14))){
var inst_47334 = (state_47368[(7)]);
var inst_47336 = cljs.core.chunked_seq_QMARK_(inst_47334);
var state_47368__$1 = state_47368;
if(inst_47336){
var statearr_47399_48899 = state_47368__$1;
(statearr_47399_48899[(1)] = (17));

} else {
var statearr_47400_48900 = state_47368__$1;
(statearr_47400_48900[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (16))){
var inst_47352 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47401_48901 = state_47368__$1;
(statearr_47401_48901[(2)] = inst_47352);

(statearr_47401_48901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (10))){
var inst_47321 = (state_47368[(10)]);
var inst_47323 = (state_47368[(11)]);
var inst_47328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47321,inst_47323);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47368__$1,(13),out,inst_47328);
} else {
if((state_val_47369 === (18))){
var inst_47334 = (state_47368[(7)]);
var inst_47343 = cljs.core.first(inst_47334);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47368__$1,(20),out,inst_47343);
} else {
if((state_val_47369 === (8))){
var inst_47323 = (state_47368[(11)]);
var inst_47322 = (state_47368[(12)]);
var inst_47325 = (inst_47323 < inst_47322);
var inst_47326 = inst_47325;
var state_47368__$1 = state_47368;
if(cljs.core.truth_(inst_47326)){
var statearr_47402_48903 = state_47368__$1;
(statearr_47402_48903[(1)] = (10));

} else {
var statearr_47403_48904 = state_47368__$1;
(statearr_47403_48904[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____0 = (function (){
var statearr_47404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__);

(statearr_47404[(1)] = (1));

return statearr_47404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____1 = (function (state_47368){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47368);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47405){if((e47405 instanceof Object)){
var ex__46002__auto__ = e47405;
var statearr_47406_48907 = state_47368;
(statearr_47406_48907[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48908 = state_47368;
state_47368 = G__48908;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__ = function(state_47368){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____1.call(this,state_47368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45999__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47407 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47407[(6)] = c__46094__auto__);

return statearr_47407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47409 = arguments.length;
switch (G__47409) {
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
var G__47411 = arguments.length;
switch (G__47411) {
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
var G__47413 = arguments.length;
switch (G__47413) {
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
var c__46094__auto___48922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47437){
var state_val_47438 = (state_47437[(1)]);
if((state_val_47438 === (7))){
var inst_47432 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47439_48923 = state_47437__$1;
(statearr_47439_48923[(2)] = inst_47432);

(statearr_47439_48923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (1))){
var inst_47414 = null;
var state_47437__$1 = (function (){var statearr_47440 = state_47437;
(statearr_47440[(7)] = inst_47414);

return statearr_47440;
})();
var statearr_47441_48924 = state_47437__$1;
(statearr_47441_48924[(2)] = null);

(statearr_47441_48924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (4))){
var inst_47417 = (state_47437[(8)]);
var inst_47417__$1 = (state_47437[(2)]);
var inst_47418 = (inst_47417__$1 == null);
var inst_47419 = cljs.core.not(inst_47418);
var state_47437__$1 = (function (){var statearr_47442 = state_47437;
(statearr_47442[(8)] = inst_47417__$1);

return statearr_47442;
})();
if(inst_47419){
var statearr_47443_48925 = state_47437__$1;
(statearr_47443_48925[(1)] = (5));

} else {
var statearr_47444_48926 = state_47437__$1;
(statearr_47444_48926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (6))){
var state_47437__$1 = state_47437;
var statearr_47445_48927 = state_47437__$1;
(statearr_47445_48927[(2)] = null);

(statearr_47445_48927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (3))){
var inst_47434 = (state_47437[(2)]);
var inst_47435 = cljs.core.async.close_BANG_(out);
var state_47437__$1 = (function (){var statearr_47446 = state_47437;
(statearr_47446[(9)] = inst_47434);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47437__$1,inst_47435);
} else {
if((state_val_47438 === (2))){
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47437__$1,(4),ch);
} else {
if((state_val_47438 === (11))){
var inst_47417 = (state_47437[(8)]);
var inst_47426 = (state_47437[(2)]);
var inst_47414 = inst_47417;
var state_47437__$1 = (function (){var statearr_47447 = state_47437;
(statearr_47447[(7)] = inst_47414);

(statearr_47447[(10)] = inst_47426);

return statearr_47447;
})();
var statearr_47448_48935 = state_47437__$1;
(statearr_47448_48935[(2)] = null);

(statearr_47448_48935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (9))){
var inst_47417 = (state_47437[(8)]);
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47437__$1,(11),out,inst_47417);
} else {
if((state_val_47438 === (5))){
var inst_47417 = (state_47437[(8)]);
var inst_47414 = (state_47437[(7)]);
var inst_47421 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47417,inst_47414);
var state_47437__$1 = state_47437;
if(inst_47421){
var statearr_47450_48936 = state_47437__$1;
(statearr_47450_48936[(1)] = (8));

} else {
var statearr_47451_48937 = state_47437__$1;
(statearr_47451_48937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (10))){
var inst_47429 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47452_48938 = state_47437__$1;
(statearr_47452_48938[(2)] = inst_47429);

(statearr_47452_48938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (8))){
var inst_47414 = (state_47437[(7)]);
var tmp47449 = inst_47414;
var inst_47414__$1 = tmp47449;
var state_47437__$1 = (function (){var statearr_47453 = state_47437;
(statearr_47453[(7)] = inst_47414__$1);

return statearr_47453;
})();
var statearr_47454_48939 = state_47437__$1;
(statearr_47454_48939[(2)] = null);

(statearr_47454_48939[(1)] = (2));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47455[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47455[(1)] = (1));

return statearr_47455;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47437){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47437);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47456){if((e47456 instanceof Object)){
var ex__46002__auto__ = e47456;
var statearr_47457_48940 = state_47437;
(statearr_47457_48940[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48941 = state_47437;
state_47437 = G__48941;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47458 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47458[(6)] = c__46094__auto___48922);

return statearr_47458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47460 = arguments.length;
switch (G__47460) {
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
var c__46094__auto___48947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47498){
var state_val_47499 = (state_47498[(1)]);
if((state_val_47499 === (7))){
var inst_47494 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47500_48952 = state_47498__$1;
(statearr_47500_48952[(2)] = inst_47494);

(statearr_47500_48952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (1))){
var inst_47461 = (new Array(n));
var inst_47462 = inst_47461;
var inst_47463 = (0);
var state_47498__$1 = (function (){var statearr_47501 = state_47498;
(statearr_47501[(7)] = inst_47463);

(statearr_47501[(8)] = inst_47462);

return statearr_47501;
})();
var statearr_47502_48960 = state_47498__$1;
(statearr_47502_48960[(2)] = null);

(statearr_47502_48960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (4))){
var inst_47466 = (state_47498[(9)]);
var inst_47466__$1 = (state_47498[(2)]);
var inst_47467 = (inst_47466__$1 == null);
var inst_47468 = cljs.core.not(inst_47467);
var state_47498__$1 = (function (){var statearr_47503 = state_47498;
(statearr_47503[(9)] = inst_47466__$1);

return statearr_47503;
})();
if(inst_47468){
var statearr_47504_48961 = state_47498__$1;
(statearr_47504_48961[(1)] = (5));

} else {
var statearr_47505_48962 = state_47498__$1;
(statearr_47505_48962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (15))){
var inst_47488 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47506_48970 = state_47498__$1;
(statearr_47506_48970[(2)] = inst_47488);

(statearr_47506_48970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (13))){
var state_47498__$1 = state_47498;
var statearr_47507_48971 = state_47498__$1;
(statearr_47507_48971[(2)] = null);

(statearr_47507_48971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (6))){
var inst_47463 = (state_47498[(7)]);
var inst_47484 = (inst_47463 > (0));
var state_47498__$1 = state_47498;
if(cljs.core.truth_(inst_47484)){
var statearr_47508_48975 = state_47498__$1;
(statearr_47508_48975[(1)] = (12));

} else {
var statearr_47509_48980 = state_47498__$1;
(statearr_47509_48980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (3))){
var inst_47496 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47498__$1,inst_47496);
} else {
if((state_val_47499 === (12))){
var inst_47462 = (state_47498[(8)]);
var inst_47486 = cljs.core.vec(inst_47462);
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47498__$1,(15),out,inst_47486);
} else {
if((state_val_47499 === (2))){
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47498__$1,(4),ch);
} else {
if((state_val_47499 === (11))){
var inst_47478 = (state_47498[(2)]);
var inst_47479 = (new Array(n));
var inst_47462 = inst_47479;
var inst_47463 = (0);
var state_47498__$1 = (function (){var statearr_47510 = state_47498;
(statearr_47510[(10)] = inst_47478);

(statearr_47510[(7)] = inst_47463);

(statearr_47510[(8)] = inst_47462);

return statearr_47510;
})();
var statearr_47511_48981 = state_47498__$1;
(statearr_47511_48981[(2)] = null);

(statearr_47511_48981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (9))){
var inst_47462 = (state_47498[(8)]);
var inst_47476 = cljs.core.vec(inst_47462);
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47498__$1,(11),out,inst_47476);
} else {
if((state_val_47499 === (5))){
var inst_47471 = (state_47498[(11)]);
var inst_47463 = (state_47498[(7)]);
var inst_47466 = (state_47498[(9)]);
var inst_47462 = (state_47498[(8)]);
var inst_47470 = (inst_47462[inst_47463] = inst_47466);
var inst_47471__$1 = (inst_47463 + (1));
var inst_47472 = (inst_47471__$1 < n);
var state_47498__$1 = (function (){var statearr_47512 = state_47498;
(statearr_47512[(11)] = inst_47471__$1);

(statearr_47512[(12)] = inst_47470);

return statearr_47512;
})();
if(cljs.core.truth_(inst_47472)){
var statearr_47513_48982 = state_47498__$1;
(statearr_47513_48982[(1)] = (8));

} else {
var statearr_47514_48983 = state_47498__$1;
(statearr_47514_48983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (14))){
var inst_47491 = (state_47498[(2)]);
var inst_47492 = cljs.core.async.close_BANG_(out);
var state_47498__$1 = (function (){var statearr_47516 = state_47498;
(statearr_47516[(13)] = inst_47491);

return statearr_47516;
})();
var statearr_47517_48984 = state_47498__$1;
(statearr_47517_48984[(2)] = inst_47492);

(statearr_47517_48984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (10))){
var inst_47482 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47518_48985 = state_47498__$1;
(statearr_47518_48985[(2)] = inst_47482);

(statearr_47518_48985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (8))){
var inst_47471 = (state_47498[(11)]);
var inst_47462 = (state_47498[(8)]);
var tmp47515 = inst_47462;
var inst_47462__$1 = tmp47515;
var inst_47463 = inst_47471;
var state_47498__$1 = (function (){var statearr_47519 = state_47498;
(statearr_47519[(7)] = inst_47463);

(statearr_47519[(8)] = inst_47462__$1);

return statearr_47519;
})();
var statearr_47520_48986 = state_47498__$1;
(statearr_47520_48986[(2)] = null);

(statearr_47520_48986[(1)] = (2));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47521[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47521[(1)] = (1));

return statearr_47521;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47498){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47498);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47522){if((e47522 instanceof Object)){
var ex__46002__auto__ = e47522;
var statearr_47523_48987 = state_47498;
(statearr_47523_48987[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48988 = state_47498;
state_47498 = G__48988;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47524 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47524[(6)] = c__46094__auto___48947);

return statearr_47524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47526 = arguments.length;
switch (G__47526) {
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
var c__46094__auto___49017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_47568){
var state_val_47569 = (state_47568[(1)]);
if((state_val_47569 === (7))){
var inst_47564 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47570_49019 = state_47568__$1;
(statearr_47570_49019[(2)] = inst_47564);

(statearr_47570_49019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (1))){
var inst_47527 = [];
var inst_47528 = inst_47527;
var inst_47529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47568__$1 = (function (){var statearr_47571 = state_47568;
(statearr_47571[(7)] = inst_47529);

(statearr_47571[(8)] = inst_47528);

return statearr_47571;
})();
var statearr_47572_49022 = state_47568__$1;
(statearr_47572_49022[(2)] = null);

(statearr_47572_49022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (4))){
var inst_47532 = (state_47568[(9)]);
var inst_47532__$1 = (state_47568[(2)]);
var inst_47533 = (inst_47532__$1 == null);
var inst_47534 = cljs.core.not(inst_47533);
var state_47568__$1 = (function (){var statearr_47573 = state_47568;
(statearr_47573[(9)] = inst_47532__$1);

return statearr_47573;
})();
if(inst_47534){
var statearr_47574_49024 = state_47568__$1;
(statearr_47574_49024[(1)] = (5));

} else {
var statearr_47575_49025 = state_47568__$1;
(statearr_47575_49025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (15))){
var inst_47558 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47576_49026 = state_47568__$1;
(statearr_47576_49026[(2)] = inst_47558);

(statearr_47576_49026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (13))){
var state_47568__$1 = state_47568;
var statearr_47577_49027 = state_47568__$1;
(statearr_47577_49027[(2)] = null);

(statearr_47577_49027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (6))){
var inst_47528 = (state_47568[(8)]);
var inst_47553 = inst_47528.length;
var inst_47554 = (inst_47553 > (0));
var state_47568__$1 = state_47568;
if(cljs.core.truth_(inst_47554)){
var statearr_47578_49028 = state_47568__$1;
(statearr_47578_49028[(1)] = (12));

} else {
var statearr_47579_49029 = state_47568__$1;
(statearr_47579_49029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (3))){
var inst_47566 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47568__$1,inst_47566);
} else {
if((state_val_47569 === (12))){
var inst_47528 = (state_47568[(8)]);
var inst_47556 = cljs.core.vec(inst_47528);
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47568__$1,(15),out,inst_47556);
} else {
if((state_val_47569 === (2))){
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47568__$1,(4),ch);
} else {
if((state_val_47569 === (11))){
var inst_47532 = (state_47568[(9)]);
var inst_47536 = (state_47568[(10)]);
var inst_47546 = (state_47568[(2)]);
var inst_47547 = [];
var inst_47548 = inst_47547.push(inst_47532);
var inst_47528 = inst_47547;
var inst_47529 = inst_47536;
var state_47568__$1 = (function (){var statearr_47580 = state_47568;
(statearr_47580[(11)] = inst_47548);

(statearr_47580[(12)] = inst_47546);

(statearr_47580[(7)] = inst_47529);

(statearr_47580[(8)] = inst_47528);

return statearr_47580;
})();
var statearr_47581_49053 = state_47568__$1;
(statearr_47581_49053[(2)] = null);

(statearr_47581_49053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (9))){
var inst_47528 = (state_47568[(8)]);
var inst_47544 = cljs.core.vec(inst_47528);
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47568__$1,(11),out,inst_47544);
} else {
if((state_val_47569 === (5))){
var inst_47532 = (state_47568[(9)]);
var inst_47536 = (state_47568[(10)]);
var inst_47529 = (state_47568[(7)]);
var inst_47536__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47532) : f.call(null,inst_47532));
var inst_47537 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47536__$1,inst_47529);
var inst_47538 = cljs.core.keyword_identical_QMARK_(inst_47529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47539 = ((inst_47537) || (inst_47538));
var state_47568__$1 = (function (){var statearr_47582 = state_47568;
(statearr_47582[(10)] = inst_47536__$1);

return statearr_47582;
})();
if(cljs.core.truth_(inst_47539)){
var statearr_47583_49058 = state_47568__$1;
(statearr_47583_49058[(1)] = (8));

} else {
var statearr_47584_49059 = state_47568__$1;
(statearr_47584_49059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (14))){
var inst_47561 = (state_47568[(2)]);
var inst_47562 = cljs.core.async.close_BANG_(out);
var state_47568__$1 = (function (){var statearr_47586 = state_47568;
(statearr_47586[(13)] = inst_47561);

return statearr_47586;
})();
var statearr_47587_49066 = state_47568__$1;
(statearr_47587_49066[(2)] = inst_47562);

(statearr_47587_49066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (10))){
var inst_47551 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47588_49070 = state_47568__$1;
(statearr_47588_49070[(2)] = inst_47551);

(statearr_47588_49070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (8))){
var inst_47532 = (state_47568[(9)]);
var inst_47536 = (state_47568[(10)]);
var inst_47528 = (state_47568[(8)]);
var inst_47541 = inst_47528.push(inst_47532);
var tmp47585 = inst_47528;
var inst_47528__$1 = tmp47585;
var inst_47529 = inst_47536;
var state_47568__$1 = (function (){var statearr_47589 = state_47568;
(statearr_47589[(7)] = inst_47529);

(statearr_47589[(8)] = inst_47528__$1);

(statearr_47589[(14)] = inst_47541);

return statearr_47589;
})();
var statearr_47590_49158 = state_47568__$1;
(statearr_47590_49158[(2)] = null);

(statearr_47590_49158[(1)] = (2));


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
var cljs$core$async$state_machine__45999__auto__ = null;
var cljs$core$async$state_machine__45999__auto____0 = (function (){
var statearr_47591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47591[(0)] = cljs$core$async$state_machine__45999__auto__);

(statearr_47591[(1)] = (1));

return statearr_47591;
});
var cljs$core$async$state_machine__45999__auto____1 = (function (state_47568){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_47568);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e47592){if((e47592 instanceof Object)){
var ex__46002__auto__ = e47592;
var statearr_47593_49160 = state_47568;
(statearr_47593_49160[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49161 = state_47568;
state_47568 = G__49161;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
cljs$core$async$state_machine__45999__auto__ = function(state_47568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45999__auto____1.call(this,state_47568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45999__auto____0;
cljs$core$async$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45999__auto____1;
return cljs$core$async$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_47594 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_47594[(6)] = c__46094__auto___49017);

return statearr_47594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
