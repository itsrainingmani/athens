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
var G__38914 = arguments.length;
switch (G__38914) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38915 = (function (f,blockable,meta38916){
this.f = f;
this.blockable = blockable;
this.meta38916 = meta38916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38917,meta38916__$1){
var self__ = this;
var _38917__$1 = this;
return (new cljs.core.async.t_cljs$core$async38915(self__.f,self__.blockable,meta38916__$1));
}));

(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38917){
var self__ = this;
var _38917__$1 = this;
return self__.meta38916;
}));

(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38916","meta38916",-1859194314,null)], null);
}));

(cljs.core.async.t_cljs$core$async38915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38915");

(cljs.core.async.t_cljs$core$async38915.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38915.
 */
cljs.core.async.__GT_t_cljs$core$async38915 = (function cljs$core$async$__GT_t_cljs$core$async38915(f__$1,blockable__$1,meta38916){
return (new cljs.core.async.t_cljs$core$async38915(f__$1,blockable__$1,meta38916));
});

}

return (new cljs.core.async.t_cljs$core$async38915(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38922 = arguments.length;
switch (G__38922) {
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
var G__38924 = arguments.length;
switch (G__38924) {
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
var G__38926 = arguments.length;
switch (G__38926) {
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
var val_40378 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40378) : fn1.call(null,val_40378));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40378) : fn1.call(null,val_40378));
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
var G__38928 = arguments.length;
switch (G__38928) {
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
var n__4666__auto___40389 = n;
var x_40390 = (0);
while(true){
if((x_40390 < n__4666__auto___40389)){
(a[x_40390] = x_40390);

var G__40391 = (x_40390 + (1));
x_40390 = G__40391;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38929 = (function (flag,meta38930){
this.flag = flag;
this.meta38930 = meta38930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38931,meta38930__$1){
var self__ = this;
var _38931__$1 = this;
return (new cljs.core.async.t_cljs$core$async38929(self__.flag,meta38930__$1));
}));

(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38931){
var self__ = this;
var _38931__$1 = this;
return self__.meta38930;
}));

(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38930","meta38930",-947903776,null)], null);
}));

(cljs.core.async.t_cljs$core$async38929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38929");

(cljs.core.async.t_cljs$core$async38929.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38929.
 */
cljs.core.async.__GT_t_cljs$core$async38929 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38929(flag__$1,meta38930){
return (new cljs.core.async.t_cljs$core$async38929(flag__$1,meta38930));
});

}

return (new cljs.core.async.t_cljs$core$async38929(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38936 = (function (flag,cb,meta38937){
this.flag = flag;
this.cb = cb;
this.meta38937 = meta38937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38938,meta38937__$1){
var self__ = this;
var _38938__$1 = this;
return (new cljs.core.async.t_cljs$core$async38936(self__.flag,self__.cb,meta38937__$1));
}));

(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38938){
var self__ = this;
var _38938__$1 = this;
return self__.meta38937;
}));

(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38937","meta38937",2072262606,null)], null);
}));

(cljs.core.async.t_cljs$core$async38936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38936");

(cljs.core.async.t_cljs$core$async38936.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38936.
 */
cljs.core.async.__GT_t_cljs$core$async38936 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38936(flag__$1,cb__$1,meta38937){
return (new cljs.core.async.t_cljs$core$async38936(flag__$1,cb__$1,meta38937));
});

}

return (new cljs.core.async.t_cljs$core$async38936(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38941_SHARP_){
var G__38945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38941_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38945) : fret.call(null,G__38945));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38942_SHARP_){
var G__38946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38942_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38946) : fret.call(null,G__38946));
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
var G__40396 = (i + (1));
i = G__40396;
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
var len__4789__auto___40397 = arguments.length;
var i__4790__auto___40398 = (0);
while(true){
if((i__4790__auto___40398 < len__4789__auto___40397)){
args__4795__auto__.push((arguments[i__4790__auto___40398]));

var G__40399 = (i__4790__auto___40398 + (1));
i__4790__auto___40398 = G__40399;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38950){
var map__38951 = p__38950;
var map__38951__$1 = (((((!((map__38951 == null))))?(((((map__38951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38951):map__38951);
var opts = map__38951__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38947){
var G__38948 = cljs.core.first(seq38947);
var seq38947__$1 = cljs.core.next(seq38947);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38948,seq38947__$1);
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
var G__38956 = arguments.length;
switch (G__38956) {
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
var c__38856__auto___40402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_38981){
var state_val_38982 = (state_38981[(1)]);
if((state_val_38982 === (7))){
var inst_38977 = (state_38981[(2)]);
var state_38981__$1 = state_38981;
var statearr_38983_40403 = state_38981__$1;
(statearr_38983_40403[(2)] = inst_38977);

(statearr_38983_40403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (1))){
var state_38981__$1 = state_38981;
var statearr_38984_40404 = state_38981__$1;
(statearr_38984_40404[(2)] = null);

(statearr_38984_40404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (4))){
var inst_38960 = (state_38981[(7)]);
var inst_38960__$1 = (state_38981[(2)]);
var inst_38961 = (inst_38960__$1 == null);
var state_38981__$1 = (function (){var statearr_38985 = state_38981;
(statearr_38985[(7)] = inst_38960__$1);

return statearr_38985;
})();
if(cljs.core.truth_(inst_38961)){
var statearr_38986_40409 = state_38981__$1;
(statearr_38986_40409[(1)] = (5));

} else {
var statearr_38987_40410 = state_38981__$1;
(statearr_38987_40410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (13))){
var state_38981__$1 = state_38981;
var statearr_38988_40411 = state_38981__$1;
(statearr_38988_40411[(2)] = null);

(statearr_38988_40411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (6))){
var inst_38960 = (state_38981[(7)]);
var state_38981__$1 = state_38981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38981__$1,(11),to,inst_38960);
} else {
if((state_val_38982 === (3))){
var inst_38979 = (state_38981[(2)]);
var state_38981__$1 = state_38981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38981__$1,inst_38979);
} else {
if((state_val_38982 === (12))){
var state_38981__$1 = state_38981;
var statearr_38989_40413 = state_38981__$1;
(statearr_38989_40413[(2)] = null);

(statearr_38989_40413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (2))){
var state_38981__$1 = state_38981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38981__$1,(4),from);
} else {
if((state_val_38982 === (11))){
var inst_38970 = (state_38981[(2)]);
var state_38981__$1 = state_38981;
if(cljs.core.truth_(inst_38970)){
var statearr_38990_40416 = state_38981__$1;
(statearr_38990_40416[(1)] = (12));

} else {
var statearr_38991_40417 = state_38981__$1;
(statearr_38991_40417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (9))){
var state_38981__$1 = state_38981;
var statearr_38992_40418 = state_38981__$1;
(statearr_38992_40418[(2)] = null);

(statearr_38992_40418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (5))){
var state_38981__$1 = state_38981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38993_40420 = state_38981__$1;
(statearr_38993_40420[(1)] = (8));

} else {
var statearr_38994_40421 = state_38981__$1;
(statearr_38994_40421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (14))){
var inst_38975 = (state_38981[(2)]);
var state_38981__$1 = state_38981;
var statearr_38995_40422 = state_38981__$1;
(statearr_38995_40422[(2)] = inst_38975);

(statearr_38995_40422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (10))){
var inst_38967 = (state_38981[(2)]);
var state_38981__$1 = state_38981;
var statearr_38996_40424 = state_38981__$1;
(statearr_38996_40424[(2)] = inst_38967);

(statearr_38996_40424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38982 === (8))){
var inst_38964 = cljs.core.async.close_BANG_(to);
var state_38981__$1 = state_38981;
var statearr_38997_40427 = state_38981__$1;
(statearr_38997_40427[(2)] = inst_38964);

(statearr_38997_40427[(1)] = (10));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_38998 = [null,null,null,null,null,null,null,null];
(statearr_38998[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_38998[(1)] = (1));

return statearr_38998;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_38981){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_38981);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e38999){if((e38999 instanceof Object)){
var ex__38792__auto__ = e38999;
var statearr_39000_40428 = state_38981;
(statearr_39000_40428[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40429 = state_38981;
state_38981 = G__40429;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_38981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_38981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39001 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39001[(6)] = c__38856__auto___40402);

return statearr_39001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var process = (function (p__39002){
var vec__39003 = p__39002;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(1),null);
var job = vec__39003;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38856__auto___40431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39010){
var state_val_39011 = (state_39010[(1)]);
if((state_val_39011 === (1))){
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39010__$1,(2),res,v);
} else {
if((state_val_39011 === (2))){
var inst_39007 = (state_39010[(2)]);
var inst_39008 = cljs.core.async.close_BANG_(res);
var state_39010__$1 = (function (){var statearr_39012 = state_39010;
(statearr_39012[(7)] = inst_39007);

return statearr_39012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39010__$1,inst_39008);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_39013 = [null,null,null,null,null,null,null,null];
(statearr_39013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__);

(statearr_39013[(1)] = (1));

return statearr_39013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1 = (function (state_39010){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39010);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39014){if((e39014 instanceof Object)){
var ex__38792__auto__ = e39014;
var statearr_39015_40435 = state_39010;
(statearr_39015_40435[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40436 = state_39010;
state_39010 = G__40436;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = function(state_39010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1.call(this,state_39010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39016 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39016[(6)] = c__38856__auto___40431);

return statearr_39016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39017){
var vec__39018 = p__39017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(1),null);
var job = vec__39018;
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
var n__4666__auto___40437 = n;
var __40438 = (0);
while(true){
if((__40438 < n__4666__auto___40437)){
var G__39021_40439 = type;
var G__39021_40440__$1 = (((G__39021_40439 instanceof cljs.core.Keyword))?G__39021_40439.fqn:null);
switch (G__39021_40440__$1) {
case "compute":
var c__38856__auto___40442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40438,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = ((function (__40438,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function (state_39034){
var state_val_39035 = (state_39034[(1)]);
if((state_val_39035 === (1))){
var state_39034__$1 = state_39034;
var statearr_39036_40443 = state_39034__$1;
(statearr_39036_40443[(2)] = null);

(statearr_39036_40443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (2))){
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39034__$1,(4),jobs);
} else {
if((state_val_39035 === (3))){
var inst_39032 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39034__$1,inst_39032);
} else {
if((state_val_39035 === (4))){
var inst_39024 = (state_39034[(2)]);
var inst_39025 = process(inst_39024);
var state_39034__$1 = state_39034;
if(cljs.core.truth_(inst_39025)){
var statearr_39037_40444 = state_39034__$1;
(statearr_39037_40444[(1)] = (5));

} else {
var statearr_39038_40445 = state_39034__$1;
(statearr_39038_40445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (5))){
var state_39034__$1 = state_39034;
var statearr_39039_40446 = state_39034__$1;
(statearr_39039_40446[(2)] = null);

(statearr_39039_40446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (6))){
var state_39034__$1 = state_39034;
var statearr_39040_40447 = state_39034__$1;
(statearr_39040_40447[(2)] = null);

(statearr_39040_40447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39035 === (7))){
var inst_39030 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
var statearr_39041_40448 = state_39034__$1;
(statearr_39041_40448[(2)] = inst_39030);

(statearr_39041_40448[(1)] = (3));


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
});})(__40438,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
;
return ((function (__40438,switch__38788__auto__,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_39042 = [null,null,null,null,null,null,null];
(statearr_39042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__);

(statearr_39042[(1)] = (1));

return statearr_39042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1 = (function (state_39034){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39034);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39043){if((e39043 instanceof Object)){
var ex__38792__auto__ = e39043;
var statearr_39044_40449 = state_39034;
(statearr_39044_40449[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40450 = state_39034;
state_39034 = G__40450;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = function(state_39034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1.call(this,state_39034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__;
})()
;})(__40438,switch__38788__auto__,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
})();
var state__38858__auto__ = (function (){var statearr_39045 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39045[(6)] = c__38856__auto___40442);

return statearr_39045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
});})(__40438,c__38856__auto___40442,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
);


break;
case "async":
var c__38856__auto___40451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40438,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = ((function (__40438,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function (state_39058){
var state_val_39059 = (state_39058[(1)]);
if((state_val_39059 === (1))){
var state_39058__$1 = state_39058;
var statearr_39060_40460 = state_39058__$1;
(statearr_39060_40460[(2)] = null);

(statearr_39060_40460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (2))){
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39058__$1,(4),jobs);
} else {
if((state_val_39059 === (3))){
var inst_39056 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39058__$1,inst_39056);
} else {
if((state_val_39059 === (4))){
var inst_39048 = (state_39058[(2)]);
var inst_39049 = async(inst_39048);
var state_39058__$1 = state_39058;
if(cljs.core.truth_(inst_39049)){
var statearr_39061_40465 = state_39058__$1;
(statearr_39061_40465[(1)] = (5));

} else {
var statearr_39062_40466 = state_39058__$1;
(statearr_39062_40466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (5))){
var state_39058__$1 = state_39058;
var statearr_39063_40467 = state_39058__$1;
(statearr_39063_40467[(2)] = null);

(statearr_39063_40467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (6))){
var state_39058__$1 = state_39058;
var statearr_39064_40468 = state_39058__$1;
(statearr_39064_40468[(2)] = null);

(statearr_39064_40468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (7))){
var inst_39054 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
var statearr_39065_40470 = state_39058__$1;
(statearr_39065_40470[(2)] = inst_39054);

(statearr_39065_40470[(1)] = (3));


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
});})(__40438,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
;
return ((function (__40438,switch__38788__auto__,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_39066 = [null,null,null,null,null,null,null];
(statearr_39066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__);

(statearr_39066[(1)] = (1));

return statearr_39066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1 = (function (state_39058){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39058);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39067){if((e39067 instanceof Object)){
var ex__38792__auto__ = e39067;
var statearr_39068_40472 = state_39058;
(statearr_39068_40472[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40473 = state_39058;
state_39058 = G__40473;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = function(state_39058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1.call(this,state_39058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__;
})()
;})(__40438,switch__38788__auto__,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
})();
var state__38858__auto__ = (function (){var statearr_39069 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39069[(6)] = c__38856__auto___40451);

return statearr_39069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
});})(__40438,c__38856__auto___40451,G__39021_40439,G__39021_40440__$1,n__4666__auto___40437,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39021_40440__$1)].join('')));

}

var G__40474 = (__40438 + (1));
__40438 = G__40474;
continue;
} else {
}
break;
}

var c__38856__auto___40475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39091){
var state_val_39092 = (state_39091[(1)]);
if((state_val_39092 === (7))){
var inst_39087 = (state_39091[(2)]);
var state_39091__$1 = state_39091;
var statearr_39093_40478 = state_39091__$1;
(statearr_39093_40478[(2)] = inst_39087);

(statearr_39093_40478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39092 === (1))){
var state_39091__$1 = state_39091;
var statearr_39094_40479 = state_39091__$1;
(statearr_39094_40479[(2)] = null);

(statearr_39094_40479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39092 === (4))){
var inst_39072 = (state_39091[(7)]);
var inst_39072__$1 = (state_39091[(2)]);
var inst_39073 = (inst_39072__$1 == null);
var state_39091__$1 = (function (){var statearr_39095 = state_39091;
(statearr_39095[(7)] = inst_39072__$1);

return statearr_39095;
})();
if(cljs.core.truth_(inst_39073)){
var statearr_39096_40480 = state_39091__$1;
(statearr_39096_40480[(1)] = (5));

} else {
var statearr_39097_40481 = state_39091__$1;
(statearr_39097_40481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39092 === (6))){
var inst_39077 = (state_39091[(8)]);
var inst_39072 = (state_39091[(7)]);
var inst_39077__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39079 = [inst_39072,inst_39077__$1];
var inst_39080 = (new cljs.core.PersistentVector(null,2,(5),inst_39078,inst_39079,null));
var state_39091__$1 = (function (){var statearr_39098 = state_39091;
(statearr_39098[(8)] = inst_39077__$1);

return statearr_39098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39091__$1,(8),jobs,inst_39080);
} else {
if((state_val_39092 === (3))){
var inst_39089 = (state_39091[(2)]);
var state_39091__$1 = state_39091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39091__$1,inst_39089);
} else {
if((state_val_39092 === (2))){
var state_39091__$1 = state_39091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39091__$1,(4),from);
} else {
if((state_val_39092 === (9))){
var inst_39084 = (state_39091[(2)]);
var state_39091__$1 = (function (){var statearr_39099 = state_39091;
(statearr_39099[(9)] = inst_39084);

return statearr_39099;
})();
var statearr_39100_40482 = state_39091__$1;
(statearr_39100_40482[(2)] = null);

(statearr_39100_40482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39092 === (5))){
var inst_39075 = cljs.core.async.close_BANG_(jobs);
var state_39091__$1 = state_39091;
var statearr_39101_40483 = state_39091__$1;
(statearr_39101_40483[(2)] = inst_39075);

(statearr_39101_40483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39092 === (8))){
var inst_39077 = (state_39091[(8)]);
var inst_39082 = (state_39091[(2)]);
var state_39091__$1 = (function (){var statearr_39102 = state_39091;
(statearr_39102[(10)] = inst_39082);

return statearr_39102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39091__$1,(9),results,inst_39077);
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
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_39103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__);

(statearr_39103[(1)] = (1));

return statearr_39103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1 = (function (state_39091){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39091);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39104){if((e39104 instanceof Object)){
var ex__38792__auto__ = e39104;
var statearr_39105_40484 = state_39091;
(statearr_39105_40484[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40485 = state_39091;
state_39091 = G__40485;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = function(state_39091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1.call(this,state_39091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39106 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39106[(6)] = c__38856__auto___40475);

return statearr_39106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39144){
var state_val_39145 = (state_39144[(1)]);
if((state_val_39145 === (7))){
var inst_39140 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39146_40486 = state_39144__$1;
(statearr_39146_40486[(2)] = inst_39140);

(statearr_39146_40486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (20))){
var state_39144__$1 = state_39144;
var statearr_39147_40487 = state_39144__$1;
(statearr_39147_40487[(2)] = null);

(statearr_39147_40487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (1))){
var state_39144__$1 = state_39144;
var statearr_39148_40488 = state_39144__$1;
(statearr_39148_40488[(2)] = null);

(statearr_39148_40488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (4))){
var inst_39109 = (state_39144[(7)]);
var inst_39109__$1 = (state_39144[(2)]);
var inst_39110 = (inst_39109__$1 == null);
var state_39144__$1 = (function (){var statearr_39149 = state_39144;
(statearr_39149[(7)] = inst_39109__$1);

return statearr_39149;
})();
if(cljs.core.truth_(inst_39110)){
var statearr_39150_40489 = state_39144__$1;
(statearr_39150_40489[(1)] = (5));

} else {
var statearr_39151_40490 = state_39144__$1;
(statearr_39151_40490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (15))){
var inst_39122 = (state_39144[(8)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39144__$1,(18),to,inst_39122);
} else {
if((state_val_39145 === (21))){
var inst_39135 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39152_40491 = state_39144__$1;
(statearr_39152_40491[(2)] = inst_39135);

(statearr_39152_40491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (13))){
var inst_39137 = (state_39144[(2)]);
var state_39144__$1 = (function (){var statearr_39153 = state_39144;
(statearr_39153[(9)] = inst_39137);

return statearr_39153;
})();
var statearr_39154_40492 = state_39144__$1;
(statearr_39154_40492[(2)] = null);

(statearr_39154_40492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (6))){
var inst_39109 = (state_39144[(7)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(11),inst_39109);
} else {
if((state_val_39145 === (17))){
var inst_39130 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39130)){
var statearr_39155_40493 = state_39144__$1;
(statearr_39155_40493[(1)] = (19));

} else {
var statearr_39156_40494 = state_39144__$1;
(statearr_39156_40494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (3))){
var inst_39142 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39144__$1,inst_39142);
} else {
if((state_val_39145 === (12))){
var inst_39119 = (state_39144[(10)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(14),inst_39119);
} else {
if((state_val_39145 === (2))){
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(4),results);
} else {
if((state_val_39145 === (19))){
var state_39144__$1 = state_39144;
var statearr_39157_40495 = state_39144__$1;
(statearr_39157_40495[(2)] = null);

(statearr_39157_40495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (11))){
var inst_39119 = (state_39144[(2)]);
var state_39144__$1 = (function (){var statearr_39158 = state_39144;
(statearr_39158[(10)] = inst_39119);

return statearr_39158;
})();
var statearr_39159_40496 = state_39144__$1;
(statearr_39159_40496[(2)] = null);

(statearr_39159_40496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (9))){
var state_39144__$1 = state_39144;
var statearr_39160_40497 = state_39144__$1;
(statearr_39160_40497[(2)] = null);

(statearr_39160_40497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (5))){
var state_39144__$1 = state_39144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39161_40498 = state_39144__$1;
(statearr_39161_40498[(1)] = (8));

} else {
var statearr_39162_40499 = state_39144__$1;
(statearr_39162_40499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (14))){
var inst_39122 = (state_39144[(8)]);
var inst_39122__$1 = (state_39144[(2)]);
var inst_39123 = (inst_39122__$1 == null);
var inst_39124 = cljs.core.not(inst_39123);
var state_39144__$1 = (function (){var statearr_39163 = state_39144;
(statearr_39163[(8)] = inst_39122__$1);

return statearr_39163;
})();
if(inst_39124){
var statearr_39164_40500 = state_39144__$1;
(statearr_39164_40500[(1)] = (15));

} else {
var statearr_39165_40501 = state_39144__$1;
(statearr_39165_40501[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (16))){
var state_39144__$1 = state_39144;
var statearr_39166_40502 = state_39144__$1;
(statearr_39166_40502[(2)] = false);

(statearr_39166_40502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (10))){
var inst_39116 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39167_40503 = state_39144__$1;
(statearr_39167_40503[(2)] = inst_39116);

(statearr_39167_40503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (18))){
var inst_39127 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39168_40504 = state_39144__$1;
(statearr_39168_40504[(2)] = inst_39127);

(statearr_39168_40504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (8))){
var inst_39113 = cljs.core.async.close_BANG_(to);
var state_39144__$1 = state_39144;
var statearr_39169_40505 = state_39144__$1;
(statearr_39169_40505[(2)] = inst_39113);

(statearr_39169_40505[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_39170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__);

(statearr_39170[(1)] = (1));

return statearr_39170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1 = (function (state_39144){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39144);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39171){if((e39171 instanceof Object)){
var ex__38792__auto__ = e39171;
var statearr_39172_40506 = state_39144;
(statearr_39172_40506[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40507 = state_39144;
state_39144 = G__40507;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__ = function(state_39144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1.call(this,state_39144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39173 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39173[(6)] = c__38856__auto__);

return statearr_39173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
var G__39175 = arguments.length;
switch (G__39175) {
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
var G__39177 = arguments.length;
switch (G__39177) {
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
var G__39179 = arguments.length;
switch (G__39179) {
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
var c__38856__auto___40511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39205){
var state_val_39206 = (state_39205[(1)]);
if((state_val_39206 === (7))){
var inst_39201 = (state_39205[(2)]);
var state_39205__$1 = state_39205;
var statearr_39207_40512 = state_39205__$1;
(statearr_39207_40512[(2)] = inst_39201);

(statearr_39207_40512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (1))){
var state_39205__$1 = state_39205;
var statearr_39208_40513 = state_39205__$1;
(statearr_39208_40513[(2)] = null);

(statearr_39208_40513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (4))){
var inst_39182 = (state_39205[(7)]);
var inst_39182__$1 = (state_39205[(2)]);
var inst_39183 = (inst_39182__$1 == null);
var state_39205__$1 = (function (){var statearr_39209 = state_39205;
(statearr_39209[(7)] = inst_39182__$1);

return statearr_39209;
})();
if(cljs.core.truth_(inst_39183)){
var statearr_39210_40514 = state_39205__$1;
(statearr_39210_40514[(1)] = (5));

} else {
var statearr_39211_40515 = state_39205__$1;
(statearr_39211_40515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (13))){
var state_39205__$1 = state_39205;
var statearr_39212_40516 = state_39205__$1;
(statearr_39212_40516[(2)] = null);

(statearr_39212_40516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (6))){
var inst_39182 = (state_39205[(7)]);
var inst_39188 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39182) : p.call(null,inst_39182));
var state_39205__$1 = state_39205;
if(cljs.core.truth_(inst_39188)){
var statearr_39213_40517 = state_39205__$1;
(statearr_39213_40517[(1)] = (9));

} else {
var statearr_39214_40518 = state_39205__$1;
(statearr_39214_40518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (3))){
var inst_39203 = (state_39205[(2)]);
var state_39205__$1 = state_39205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39205__$1,inst_39203);
} else {
if((state_val_39206 === (12))){
var state_39205__$1 = state_39205;
var statearr_39215_40519 = state_39205__$1;
(statearr_39215_40519[(2)] = null);

(statearr_39215_40519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (2))){
var state_39205__$1 = state_39205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39205__$1,(4),ch);
} else {
if((state_val_39206 === (11))){
var inst_39182 = (state_39205[(7)]);
var inst_39192 = (state_39205[(2)]);
var state_39205__$1 = state_39205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39205__$1,(8),inst_39192,inst_39182);
} else {
if((state_val_39206 === (9))){
var state_39205__$1 = state_39205;
var statearr_39216_40520 = state_39205__$1;
(statearr_39216_40520[(2)] = tc);

(statearr_39216_40520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (5))){
var inst_39185 = cljs.core.async.close_BANG_(tc);
var inst_39186 = cljs.core.async.close_BANG_(fc);
var state_39205__$1 = (function (){var statearr_39217 = state_39205;
(statearr_39217[(8)] = inst_39185);

return statearr_39217;
})();
var statearr_39218_40521 = state_39205__$1;
(statearr_39218_40521[(2)] = inst_39186);

(statearr_39218_40521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (14))){
var inst_39199 = (state_39205[(2)]);
var state_39205__$1 = state_39205;
var statearr_39219_40522 = state_39205__$1;
(statearr_39219_40522[(2)] = inst_39199);

(statearr_39219_40522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (10))){
var state_39205__$1 = state_39205;
var statearr_39220_40523 = state_39205__$1;
(statearr_39220_40523[(2)] = fc);

(statearr_39220_40523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39206 === (8))){
var inst_39194 = (state_39205[(2)]);
var state_39205__$1 = state_39205;
if(cljs.core.truth_(inst_39194)){
var statearr_39221_40524 = state_39205__$1;
(statearr_39221_40524[(1)] = (12));

} else {
var statearr_39222_40525 = state_39205__$1;
(statearr_39222_40525[(1)] = (13));

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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_39223 = [null,null,null,null,null,null,null,null,null];
(statearr_39223[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_39223[(1)] = (1));

return statearr_39223;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39205){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39205);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39224){if((e39224 instanceof Object)){
var ex__38792__auto__ = e39224;
var statearr_39225_40526 = state_39205;
(statearr_39225_40526[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40527 = state_39205;
state_39205 = G__40527;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39226 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39226[(6)] = c__38856__auto___40511);

return statearr_39226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39247){
var state_val_39248 = (state_39247[(1)]);
if((state_val_39248 === (7))){
var inst_39243 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39249_40528 = state_39247__$1;
(statearr_39249_40528[(2)] = inst_39243);

(statearr_39249_40528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (1))){
var inst_39227 = init;
var state_39247__$1 = (function (){var statearr_39250 = state_39247;
(statearr_39250[(7)] = inst_39227);

return statearr_39250;
})();
var statearr_39251_40529 = state_39247__$1;
(statearr_39251_40529[(2)] = null);

(statearr_39251_40529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (4))){
var inst_39230 = (state_39247[(8)]);
var inst_39230__$1 = (state_39247[(2)]);
var inst_39231 = (inst_39230__$1 == null);
var state_39247__$1 = (function (){var statearr_39252 = state_39247;
(statearr_39252[(8)] = inst_39230__$1);

return statearr_39252;
})();
if(cljs.core.truth_(inst_39231)){
var statearr_39253_40530 = state_39247__$1;
(statearr_39253_40530[(1)] = (5));

} else {
var statearr_39254_40531 = state_39247__$1;
(statearr_39254_40531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (6))){
var inst_39234 = (state_39247[(9)]);
var inst_39227 = (state_39247[(7)]);
var inst_39230 = (state_39247[(8)]);
var inst_39234__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39227,inst_39230) : f.call(null,inst_39227,inst_39230));
var inst_39235 = cljs.core.reduced_QMARK_(inst_39234__$1);
var state_39247__$1 = (function (){var statearr_39255 = state_39247;
(statearr_39255[(9)] = inst_39234__$1);

return statearr_39255;
})();
if(inst_39235){
var statearr_39256_40532 = state_39247__$1;
(statearr_39256_40532[(1)] = (8));

} else {
var statearr_39257_40533 = state_39247__$1;
(statearr_39257_40533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (3))){
var inst_39245 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39247__$1,inst_39245);
} else {
if((state_val_39248 === (2))){
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39247__$1,(4),ch);
} else {
if((state_val_39248 === (9))){
var inst_39234 = (state_39247[(9)]);
var inst_39227 = inst_39234;
var state_39247__$1 = (function (){var statearr_39258 = state_39247;
(statearr_39258[(7)] = inst_39227);

return statearr_39258;
})();
var statearr_39259_40534 = state_39247__$1;
(statearr_39259_40534[(2)] = null);

(statearr_39259_40534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (5))){
var inst_39227 = (state_39247[(7)]);
var state_39247__$1 = state_39247;
var statearr_39260_40535 = state_39247__$1;
(statearr_39260_40535[(2)] = inst_39227);

(statearr_39260_40535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (10))){
var inst_39241 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39261_40536 = state_39247__$1;
(statearr_39261_40536[(2)] = inst_39241);

(statearr_39261_40536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (8))){
var inst_39234 = (state_39247[(9)]);
var inst_39237 = cljs.core.deref(inst_39234);
var state_39247__$1 = state_39247;
var statearr_39262_40537 = state_39247__$1;
(statearr_39262_40537[(2)] = inst_39237);

(statearr_39262_40537[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__38789__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38789__auto____0 = (function (){
var statearr_39263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39263[(0)] = cljs$core$async$reduce_$_state_machine__38789__auto__);

(statearr_39263[(1)] = (1));

return statearr_39263;
});
var cljs$core$async$reduce_$_state_machine__38789__auto____1 = (function (state_39247){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39247);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39264){if((e39264 instanceof Object)){
var ex__38792__auto__ = e39264;
var statearr_39265_40538 = state_39247;
(statearr_39265_40538[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40539 = state_39247;
state_39247 = G__40539;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38789__auto__ = function(state_39247){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38789__auto____1.call(this,state_39247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38789__auto____0;
cljs$core$async$reduce_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38789__auto____1;
return cljs$core$async$reduce_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39266 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39266[(6)] = c__38856__auto__);

return statearr_39266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39272){
var state_val_39273 = (state_39272[(1)]);
if((state_val_39273 === (1))){
var inst_39267 = cljs.core.async.reduce(f__$1,init,ch);
var state_39272__$1 = state_39272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39272__$1,(2),inst_39267);
} else {
if((state_val_39273 === (2))){
var inst_39269 = (state_39272[(2)]);
var inst_39270 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39269) : f__$1.call(null,inst_39269));
var state_39272__$1 = state_39272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39272__$1,inst_39270);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__38789__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38789__auto____0 = (function (){
var statearr_39274 = [null,null,null,null,null,null,null];
(statearr_39274[(0)] = cljs$core$async$transduce_$_state_machine__38789__auto__);

(statearr_39274[(1)] = (1));

return statearr_39274;
});
var cljs$core$async$transduce_$_state_machine__38789__auto____1 = (function (state_39272){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39272);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39275){if((e39275 instanceof Object)){
var ex__38792__auto__ = e39275;
var statearr_39276_40540 = state_39272;
(statearr_39276_40540[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40541 = state_39272;
state_39272 = G__40541;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38789__auto__ = function(state_39272){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38789__auto____1.call(this,state_39272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38789__auto____0;
cljs$core$async$transduce_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38789__auto____1;
return cljs$core$async$transduce_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39277 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39277[(6)] = c__38856__auto__);

return statearr_39277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
var G__39279 = arguments.length;
switch (G__39279) {
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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39304){
var state_val_39305 = (state_39304[(1)]);
if((state_val_39305 === (7))){
var inst_39286 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39306_40543 = state_39304__$1;
(statearr_39306_40543[(2)] = inst_39286);

(statearr_39306_40543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (1))){
var inst_39280 = cljs.core.seq(coll);
var inst_39281 = inst_39280;
var state_39304__$1 = (function (){var statearr_39307 = state_39304;
(statearr_39307[(7)] = inst_39281);

return statearr_39307;
})();
var statearr_39308_40544 = state_39304__$1;
(statearr_39308_40544[(2)] = null);

(statearr_39308_40544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (4))){
var inst_39281 = (state_39304[(7)]);
var inst_39284 = cljs.core.first(inst_39281);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39304__$1,(7),ch,inst_39284);
} else {
if((state_val_39305 === (13))){
var inst_39298 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39309_40545 = state_39304__$1;
(statearr_39309_40545[(2)] = inst_39298);

(statearr_39309_40545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (6))){
var inst_39289 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
if(cljs.core.truth_(inst_39289)){
var statearr_39310_40546 = state_39304__$1;
(statearr_39310_40546[(1)] = (8));

} else {
var statearr_39311_40547 = state_39304__$1;
(statearr_39311_40547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (3))){
var inst_39302 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39304__$1,inst_39302);
} else {
if((state_val_39305 === (12))){
var state_39304__$1 = state_39304;
var statearr_39312_40548 = state_39304__$1;
(statearr_39312_40548[(2)] = null);

(statearr_39312_40548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (2))){
var inst_39281 = (state_39304[(7)]);
var state_39304__$1 = state_39304;
if(cljs.core.truth_(inst_39281)){
var statearr_39313_40549 = state_39304__$1;
(statearr_39313_40549[(1)] = (4));

} else {
var statearr_39314_40550 = state_39304__$1;
(statearr_39314_40550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (11))){
var inst_39295 = cljs.core.async.close_BANG_(ch);
var state_39304__$1 = state_39304;
var statearr_39315_40551 = state_39304__$1;
(statearr_39315_40551[(2)] = inst_39295);

(statearr_39315_40551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (9))){
var state_39304__$1 = state_39304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39316_40552 = state_39304__$1;
(statearr_39316_40552[(1)] = (11));

} else {
var statearr_39317_40553 = state_39304__$1;
(statearr_39317_40553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (5))){
var inst_39281 = (state_39304[(7)]);
var state_39304__$1 = state_39304;
var statearr_39318_40554 = state_39304__$1;
(statearr_39318_40554[(2)] = inst_39281);

(statearr_39318_40554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (10))){
var inst_39300 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39319_40555 = state_39304__$1;
(statearr_39319_40555[(2)] = inst_39300);

(statearr_39319_40555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (8))){
var inst_39281 = (state_39304[(7)]);
var inst_39291 = cljs.core.next(inst_39281);
var inst_39281__$1 = inst_39291;
var state_39304__$1 = (function (){var statearr_39320 = state_39304;
(statearr_39320[(7)] = inst_39281__$1);

return statearr_39320;
})();
var statearr_39321_40556 = state_39304__$1;
(statearr_39321_40556[(2)] = null);

(statearr_39321_40556[(1)] = (2));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_39322 = [null,null,null,null,null,null,null,null];
(statearr_39322[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_39322[(1)] = (1));

return statearr_39322;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39304){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39304);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39323){if((e39323 instanceof Object)){
var ex__38792__auto__ = e39323;
var statearr_39324_40557 = state_39304;
(statearr_39324_40557[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40558 = state_39304;
state_39304 = G__40558;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39325 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39325[(6)] = c__38856__auto__);

return statearr_39325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39326 = (function (ch,cs,meta39327){
this.ch = ch;
this.cs = cs;
this.meta39327 = meta39327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39328,meta39327__$1){
var self__ = this;
var _39328__$1 = this;
return (new cljs.core.async.t_cljs$core$async39326(self__.ch,self__.cs,meta39327__$1));
}));

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39328){
var self__ = this;
var _39328__$1 = this;
return self__.meta39327;
}));

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39327","meta39327",182336026,null)], null);
}));

(cljs.core.async.t_cljs$core$async39326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39326");

(cljs.core.async.t_cljs$core$async39326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39326.
 */
cljs.core.async.__GT_t_cljs$core$async39326 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39326(ch__$1,cs__$1,meta39327){
return (new cljs.core.async.t_cljs$core$async39326(ch__$1,cs__$1,meta39327));
});

}

return (new cljs.core.async.t_cljs$core$async39326(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38856__auto___40559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39463){
var state_val_39464 = (state_39463[(1)]);
if((state_val_39464 === (7))){
var inst_39459 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39465_40560 = state_39463__$1;
(statearr_39465_40560[(2)] = inst_39459);

(statearr_39465_40560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (20))){
var inst_39362 = (state_39463[(7)]);
var inst_39374 = cljs.core.first(inst_39362);
var inst_39375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39374,(0),null);
var inst_39376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39374,(1),null);
var state_39463__$1 = (function (){var statearr_39466 = state_39463;
(statearr_39466[(8)] = inst_39375);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39376)){
var statearr_39467_40561 = state_39463__$1;
(statearr_39467_40561[(1)] = (22));

} else {
var statearr_39468_40562 = state_39463__$1;
(statearr_39468_40562[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (27))){
var inst_39331 = (state_39463[(9)]);
var inst_39404 = (state_39463[(10)]);
var inst_39411 = (state_39463[(11)]);
var inst_39406 = (state_39463[(12)]);
var inst_39411__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39404,inst_39406);
var inst_39412 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39411__$1,inst_39331,done);
var state_39463__$1 = (function (){var statearr_39469 = state_39463;
(statearr_39469[(11)] = inst_39411__$1);

return statearr_39469;
})();
if(cljs.core.truth_(inst_39412)){
var statearr_39470_40563 = state_39463__$1;
(statearr_39470_40563[(1)] = (30));

} else {
var statearr_39471_40564 = state_39463__$1;
(statearr_39471_40564[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (1))){
var state_39463__$1 = state_39463;
var statearr_39472_40565 = state_39463__$1;
(statearr_39472_40565[(2)] = null);

(statearr_39472_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (24))){
var inst_39362 = (state_39463[(7)]);
var inst_39381 = (state_39463[(2)]);
var inst_39382 = cljs.core.next(inst_39362);
var inst_39340 = inst_39382;
var inst_39341 = null;
var inst_39342 = (0);
var inst_39343 = (0);
var state_39463__$1 = (function (){var statearr_39473 = state_39463;
(statearr_39473[(13)] = inst_39342);

(statearr_39473[(14)] = inst_39340);

(statearr_39473[(15)] = inst_39381);

(statearr_39473[(16)] = inst_39343);

(statearr_39473[(17)] = inst_39341);

return statearr_39473;
})();
var statearr_39474_40566 = state_39463__$1;
(statearr_39474_40566[(2)] = null);

(statearr_39474_40566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (39))){
var state_39463__$1 = state_39463;
var statearr_39478_40567 = state_39463__$1;
(statearr_39478_40567[(2)] = null);

(statearr_39478_40567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (4))){
var inst_39331 = (state_39463[(9)]);
var inst_39331__$1 = (state_39463[(2)]);
var inst_39332 = (inst_39331__$1 == null);
var state_39463__$1 = (function (){var statearr_39479 = state_39463;
(statearr_39479[(9)] = inst_39331__$1);

return statearr_39479;
})();
if(cljs.core.truth_(inst_39332)){
var statearr_39480_40568 = state_39463__$1;
(statearr_39480_40568[(1)] = (5));

} else {
var statearr_39481_40569 = state_39463__$1;
(statearr_39481_40569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (15))){
var inst_39342 = (state_39463[(13)]);
var inst_39340 = (state_39463[(14)]);
var inst_39343 = (state_39463[(16)]);
var inst_39341 = (state_39463[(17)]);
var inst_39358 = (state_39463[(2)]);
var inst_39359 = (inst_39343 + (1));
var tmp39475 = inst_39342;
var tmp39476 = inst_39340;
var tmp39477 = inst_39341;
var inst_39340__$1 = tmp39476;
var inst_39341__$1 = tmp39477;
var inst_39342__$1 = tmp39475;
var inst_39343__$1 = inst_39359;
var state_39463__$1 = (function (){var statearr_39482 = state_39463;
(statearr_39482[(13)] = inst_39342__$1);

(statearr_39482[(14)] = inst_39340__$1);

(statearr_39482[(18)] = inst_39358);

(statearr_39482[(16)] = inst_39343__$1);

(statearr_39482[(17)] = inst_39341__$1);

return statearr_39482;
})();
var statearr_39483_40570 = state_39463__$1;
(statearr_39483_40570[(2)] = null);

(statearr_39483_40570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (21))){
var inst_39385 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39487_40571 = state_39463__$1;
(statearr_39487_40571[(2)] = inst_39385);

(statearr_39487_40571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (31))){
var inst_39411 = (state_39463[(11)]);
var inst_39415 = done(null);
var inst_39416 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39411);
var state_39463__$1 = (function (){var statearr_39488 = state_39463;
(statearr_39488[(19)] = inst_39415);

return statearr_39488;
})();
var statearr_39489_40573 = state_39463__$1;
(statearr_39489_40573[(2)] = inst_39416);

(statearr_39489_40573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (32))){
var inst_39404 = (state_39463[(10)]);
var inst_39403 = (state_39463[(20)]);
var inst_39406 = (state_39463[(12)]);
var inst_39405 = (state_39463[(21)]);
var inst_39418 = (state_39463[(2)]);
var inst_39419 = (inst_39406 + (1));
var tmp39484 = inst_39404;
var tmp39485 = inst_39403;
var tmp39486 = inst_39405;
var inst_39403__$1 = tmp39485;
var inst_39404__$1 = tmp39484;
var inst_39405__$1 = tmp39486;
var inst_39406__$1 = inst_39419;
var state_39463__$1 = (function (){var statearr_39490 = state_39463;
(statearr_39490[(10)] = inst_39404__$1);

(statearr_39490[(20)] = inst_39403__$1);

(statearr_39490[(12)] = inst_39406__$1);

(statearr_39490[(21)] = inst_39405__$1);

(statearr_39490[(22)] = inst_39418);

return statearr_39490;
})();
var statearr_39491_40581 = state_39463__$1;
(statearr_39491_40581[(2)] = null);

(statearr_39491_40581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (40))){
var inst_39431 = (state_39463[(23)]);
var inst_39435 = done(null);
var inst_39436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39431);
var state_39463__$1 = (function (){var statearr_39492 = state_39463;
(statearr_39492[(24)] = inst_39435);

return statearr_39492;
})();
var statearr_39493_40584 = state_39463__$1;
(statearr_39493_40584[(2)] = inst_39436);

(statearr_39493_40584[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (33))){
var inst_39422 = (state_39463[(25)]);
var inst_39424 = cljs.core.chunked_seq_QMARK_(inst_39422);
var state_39463__$1 = state_39463;
if(inst_39424){
var statearr_39494_40587 = state_39463__$1;
(statearr_39494_40587[(1)] = (36));

} else {
var statearr_39495_40588 = state_39463__$1;
(statearr_39495_40588[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (13))){
var inst_39352 = (state_39463[(26)]);
var inst_39355 = cljs.core.async.close_BANG_(inst_39352);
var state_39463__$1 = state_39463;
var statearr_39496_40589 = state_39463__$1;
(statearr_39496_40589[(2)] = inst_39355);

(statearr_39496_40589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (22))){
var inst_39375 = (state_39463[(8)]);
var inst_39378 = cljs.core.async.close_BANG_(inst_39375);
var state_39463__$1 = state_39463;
var statearr_39497_40592 = state_39463__$1;
(statearr_39497_40592[(2)] = inst_39378);

(statearr_39497_40592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (36))){
var inst_39422 = (state_39463[(25)]);
var inst_39426 = cljs.core.chunk_first(inst_39422);
var inst_39427 = cljs.core.chunk_rest(inst_39422);
var inst_39428 = cljs.core.count(inst_39426);
var inst_39403 = inst_39427;
var inst_39404 = inst_39426;
var inst_39405 = inst_39428;
var inst_39406 = (0);
var state_39463__$1 = (function (){var statearr_39498 = state_39463;
(statearr_39498[(10)] = inst_39404);

(statearr_39498[(20)] = inst_39403);

(statearr_39498[(12)] = inst_39406);

(statearr_39498[(21)] = inst_39405);

return statearr_39498;
})();
var statearr_39499_40595 = state_39463__$1;
(statearr_39499_40595[(2)] = null);

(statearr_39499_40595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (41))){
var inst_39422 = (state_39463[(25)]);
var inst_39438 = (state_39463[(2)]);
var inst_39439 = cljs.core.next(inst_39422);
var inst_39403 = inst_39439;
var inst_39404 = null;
var inst_39405 = (0);
var inst_39406 = (0);
var state_39463__$1 = (function (){var statearr_39500 = state_39463;
(statearr_39500[(10)] = inst_39404);

(statearr_39500[(27)] = inst_39438);

(statearr_39500[(20)] = inst_39403);

(statearr_39500[(12)] = inst_39406);

(statearr_39500[(21)] = inst_39405);

return statearr_39500;
})();
var statearr_39501_40596 = state_39463__$1;
(statearr_39501_40596[(2)] = null);

(statearr_39501_40596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (43))){
var state_39463__$1 = state_39463;
var statearr_39502_40597 = state_39463__$1;
(statearr_39502_40597[(2)] = null);

(statearr_39502_40597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (29))){
var inst_39447 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39503_40599 = state_39463__$1;
(statearr_39503_40599[(2)] = inst_39447);

(statearr_39503_40599[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (44))){
var inst_39456 = (state_39463[(2)]);
var state_39463__$1 = (function (){var statearr_39504 = state_39463;
(statearr_39504[(28)] = inst_39456);

return statearr_39504;
})();
var statearr_39505_40600 = state_39463__$1;
(statearr_39505_40600[(2)] = null);

(statearr_39505_40600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (6))){
var inst_39395 = (state_39463[(29)]);
var inst_39394 = cljs.core.deref(cs);
var inst_39395__$1 = cljs.core.keys(inst_39394);
var inst_39396 = cljs.core.count(inst_39395__$1);
var inst_39397 = cljs.core.reset_BANG_(dctr,inst_39396);
var inst_39402 = cljs.core.seq(inst_39395__$1);
var inst_39403 = inst_39402;
var inst_39404 = null;
var inst_39405 = (0);
var inst_39406 = (0);
var state_39463__$1 = (function (){var statearr_39506 = state_39463;
(statearr_39506[(10)] = inst_39404);

(statearr_39506[(29)] = inst_39395__$1);

(statearr_39506[(30)] = inst_39397);

(statearr_39506[(20)] = inst_39403);

(statearr_39506[(12)] = inst_39406);

(statearr_39506[(21)] = inst_39405);

return statearr_39506;
})();
var statearr_39507_40601 = state_39463__$1;
(statearr_39507_40601[(2)] = null);

(statearr_39507_40601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (28))){
var inst_39422 = (state_39463[(25)]);
var inst_39403 = (state_39463[(20)]);
var inst_39422__$1 = cljs.core.seq(inst_39403);
var state_39463__$1 = (function (){var statearr_39508 = state_39463;
(statearr_39508[(25)] = inst_39422__$1);

return statearr_39508;
})();
if(inst_39422__$1){
var statearr_39509_40602 = state_39463__$1;
(statearr_39509_40602[(1)] = (33));

} else {
var statearr_39510_40603 = state_39463__$1;
(statearr_39510_40603[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (25))){
var inst_39406 = (state_39463[(12)]);
var inst_39405 = (state_39463[(21)]);
var inst_39408 = (inst_39406 < inst_39405);
var inst_39409 = inst_39408;
var state_39463__$1 = state_39463;
if(cljs.core.truth_(inst_39409)){
var statearr_39511_40604 = state_39463__$1;
(statearr_39511_40604[(1)] = (27));

} else {
var statearr_39512_40605 = state_39463__$1;
(statearr_39512_40605[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (34))){
var state_39463__$1 = state_39463;
var statearr_39513_40606 = state_39463__$1;
(statearr_39513_40606[(2)] = null);

(statearr_39513_40606[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (17))){
var state_39463__$1 = state_39463;
var statearr_39514_40607 = state_39463__$1;
(statearr_39514_40607[(2)] = null);

(statearr_39514_40607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (3))){
var inst_39461 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39463__$1,inst_39461);
} else {
if((state_val_39464 === (12))){
var inst_39390 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39515_40608 = state_39463__$1;
(statearr_39515_40608[(2)] = inst_39390);

(statearr_39515_40608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (2))){
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39463__$1,(4),ch);
} else {
if((state_val_39464 === (23))){
var state_39463__$1 = state_39463;
var statearr_39516_40609 = state_39463__$1;
(statearr_39516_40609[(2)] = null);

(statearr_39516_40609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (35))){
var inst_39445 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39517_40610 = state_39463__$1;
(statearr_39517_40610[(2)] = inst_39445);

(statearr_39517_40610[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (19))){
var inst_39362 = (state_39463[(7)]);
var inst_39366 = cljs.core.chunk_first(inst_39362);
var inst_39367 = cljs.core.chunk_rest(inst_39362);
var inst_39368 = cljs.core.count(inst_39366);
var inst_39340 = inst_39367;
var inst_39341 = inst_39366;
var inst_39342 = inst_39368;
var inst_39343 = (0);
var state_39463__$1 = (function (){var statearr_39518 = state_39463;
(statearr_39518[(13)] = inst_39342);

(statearr_39518[(14)] = inst_39340);

(statearr_39518[(16)] = inst_39343);

(statearr_39518[(17)] = inst_39341);

return statearr_39518;
})();
var statearr_39519_40611 = state_39463__$1;
(statearr_39519_40611[(2)] = null);

(statearr_39519_40611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (11))){
var inst_39340 = (state_39463[(14)]);
var inst_39362 = (state_39463[(7)]);
var inst_39362__$1 = cljs.core.seq(inst_39340);
var state_39463__$1 = (function (){var statearr_39520 = state_39463;
(statearr_39520[(7)] = inst_39362__$1);

return statearr_39520;
})();
if(inst_39362__$1){
var statearr_39521_40612 = state_39463__$1;
(statearr_39521_40612[(1)] = (16));

} else {
var statearr_39522_40613 = state_39463__$1;
(statearr_39522_40613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (9))){
var inst_39392 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39523_40614 = state_39463__$1;
(statearr_39523_40614[(2)] = inst_39392);

(statearr_39523_40614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (5))){
var inst_39338 = cljs.core.deref(cs);
var inst_39339 = cljs.core.seq(inst_39338);
var inst_39340 = inst_39339;
var inst_39341 = null;
var inst_39342 = (0);
var inst_39343 = (0);
var state_39463__$1 = (function (){var statearr_39524 = state_39463;
(statearr_39524[(13)] = inst_39342);

(statearr_39524[(14)] = inst_39340);

(statearr_39524[(16)] = inst_39343);

(statearr_39524[(17)] = inst_39341);

return statearr_39524;
})();
var statearr_39525_40615 = state_39463__$1;
(statearr_39525_40615[(2)] = null);

(statearr_39525_40615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (14))){
var state_39463__$1 = state_39463;
var statearr_39526_40616 = state_39463__$1;
(statearr_39526_40616[(2)] = null);

(statearr_39526_40616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (45))){
var inst_39453 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39527_40617 = state_39463__$1;
(statearr_39527_40617[(2)] = inst_39453);

(statearr_39527_40617[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (26))){
var inst_39395 = (state_39463[(29)]);
var inst_39449 = (state_39463[(2)]);
var inst_39450 = cljs.core.seq(inst_39395);
var state_39463__$1 = (function (){var statearr_39528 = state_39463;
(statearr_39528[(31)] = inst_39449);

return statearr_39528;
})();
if(inst_39450){
var statearr_39529_40618 = state_39463__$1;
(statearr_39529_40618[(1)] = (42));

} else {
var statearr_39530_40619 = state_39463__$1;
(statearr_39530_40619[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (16))){
var inst_39362 = (state_39463[(7)]);
var inst_39364 = cljs.core.chunked_seq_QMARK_(inst_39362);
var state_39463__$1 = state_39463;
if(inst_39364){
var statearr_39531_40620 = state_39463__$1;
(statearr_39531_40620[(1)] = (19));

} else {
var statearr_39532_40621 = state_39463__$1;
(statearr_39532_40621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (38))){
var inst_39442 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39533_40622 = state_39463__$1;
(statearr_39533_40622[(2)] = inst_39442);

(statearr_39533_40622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (30))){
var state_39463__$1 = state_39463;
var statearr_39534_40623 = state_39463__$1;
(statearr_39534_40623[(2)] = null);

(statearr_39534_40623[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (10))){
var inst_39343 = (state_39463[(16)]);
var inst_39341 = (state_39463[(17)]);
var inst_39351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39341,inst_39343);
var inst_39352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39351,(0),null);
var inst_39353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39351,(1),null);
var state_39463__$1 = (function (){var statearr_39535 = state_39463;
(statearr_39535[(26)] = inst_39352);

return statearr_39535;
})();
if(cljs.core.truth_(inst_39353)){
var statearr_39536_40624 = state_39463__$1;
(statearr_39536_40624[(1)] = (13));

} else {
var statearr_39537_40625 = state_39463__$1;
(statearr_39537_40625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (18))){
var inst_39388 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39538_40626 = state_39463__$1;
(statearr_39538_40626[(2)] = inst_39388);

(statearr_39538_40626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (42))){
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39463__$1,(45),dchan);
} else {
if((state_val_39464 === (37))){
var inst_39422 = (state_39463[(25)]);
var inst_39331 = (state_39463[(9)]);
var inst_39431 = (state_39463[(23)]);
var inst_39431__$1 = cljs.core.first(inst_39422);
var inst_39432 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39431__$1,inst_39331,done);
var state_39463__$1 = (function (){var statearr_39539 = state_39463;
(statearr_39539[(23)] = inst_39431__$1);

return statearr_39539;
})();
if(cljs.core.truth_(inst_39432)){
var statearr_39540_40627 = state_39463__$1;
(statearr_39540_40627[(1)] = (39));

} else {
var statearr_39541_40628 = state_39463__$1;
(statearr_39541_40628[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (8))){
var inst_39342 = (state_39463[(13)]);
var inst_39343 = (state_39463[(16)]);
var inst_39345 = (inst_39343 < inst_39342);
var inst_39346 = inst_39345;
var state_39463__$1 = state_39463;
if(cljs.core.truth_(inst_39346)){
var statearr_39542_40633 = state_39463__$1;
(statearr_39542_40633[(1)] = (10));

} else {
var statearr_39543_40634 = state_39463__$1;
(statearr_39543_40634[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__38789__auto__ = null;
var cljs$core$async$mult_$_state_machine__38789__auto____0 = (function (){
var statearr_39544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39544[(0)] = cljs$core$async$mult_$_state_machine__38789__auto__);

(statearr_39544[(1)] = (1));

return statearr_39544;
});
var cljs$core$async$mult_$_state_machine__38789__auto____1 = (function (state_39463){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39463);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39545){if((e39545 instanceof Object)){
var ex__38792__auto__ = e39545;
var statearr_39546_40635 = state_39463;
(statearr_39546_40635[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40636 = state_39463;
state_39463 = G__40636;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38789__auto__ = function(state_39463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38789__auto____1.call(this,state_39463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38789__auto____0;
cljs$core$async$mult_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38789__auto____1;
return cljs$core$async$mult_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39547 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39547[(6)] = c__38856__auto___40559);

return statearr_39547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var G__39549 = arguments.length;
switch (G__39549) {
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
var len__4789__auto___40647 = arguments.length;
var i__4790__auto___40648 = (0);
while(true){
if((i__4790__auto___40648 < len__4789__auto___40647)){
args__4795__auto__.push((arguments[i__4790__auto___40648]));

var G__40649 = (i__4790__auto___40648 + (1));
i__4790__auto___40648 = G__40649;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39554){
var map__39555 = p__39554;
var map__39555__$1 = (((((!((map__39555 == null))))?(((((map__39555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39555):map__39555);
var opts = map__39555__$1;
var statearr_39557_40650 = state;
(statearr_39557_40650[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39558_40651 = state;
(statearr_39558_40651[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39559_40652 = state;
(statearr_39559_40652[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39550){
var G__39551 = cljs.core.first(seq39550);
var seq39550__$1 = cljs.core.next(seq39550);
var G__39552 = cljs.core.first(seq39550__$1);
var seq39550__$2 = cljs.core.next(seq39550__$1);
var G__39553 = cljs.core.first(seq39550__$2);
var seq39550__$3 = cljs.core.next(seq39550__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39551,G__39552,G__39553,seq39550__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39560 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39561){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39561 = meta39561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39562,meta39561__$1){
var self__ = this;
var _39562__$1 = this;
return (new cljs.core.async.t_cljs$core$async39560(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39561__$1));
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39562){
var self__ = this;
var _39562__$1 = this;
return self__.meta39561;
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39560.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39561","meta39561",1936271425,null)], null);
}));

(cljs.core.async.t_cljs$core$async39560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39560");

(cljs.core.async.t_cljs$core$async39560.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39560.
 */
cljs.core.async.__GT_t_cljs$core$async39560 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39560(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39561){
return (new cljs.core.async.t_cljs$core$async39560(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39561));
});

}

return (new cljs.core.async.t_cljs$core$async39560(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38856__auto___40660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39664){
var state_val_39665 = (state_39664[(1)]);
if((state_val_39665 === (7))){
var inst_39579 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
var statearr_39666_40665 = state_39664__$1;
(statearr_39666_40665[(2)] = inst_39579);

(statearr_39666_40665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (20))){
var inst_39591 = (state_39664[(7)]);
var state_39664__$1 = state_39664;
var statearr_39667_40668 = state_39664__$1;
(statearr_39667_40668[(2)] = inst_39591);

(statearr_39667_40668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (27))){
var state_39664__$1 = state_39664;
var statearr_39668_40673 = state_39664__$1;
(statearr_39668_40673[(2)] = null);

(statearr_39668_40673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (1))){
var inst_39566 = (state_39664[(8)]);
var inst_39566__$1 = calc_state();
var inst_39568 = (inst_39566__$1 == null);
var inst_39569 = cljs.core.not(inst_39568);
var state_39664__$1 = (function (){var statearr_39669 = state_39664;
(statearr_39669[(8)] = inst_39566__$1);

return statearr_39669;
})();
if(inst_39569){
var statearr_39670_40674 = state_39664__$1;
(statearr_39670_40674[(1)] = (2));

} else {
var statearr_39671_40675 = state_39664__$1;
(statearr_39671_40675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (24))){
var inst_39624 = (state_39664[(9)]);
var inst_39638 = (state_39664[(10)]);
var inst_39615 = (state_39664[(11)]);
var inst_39638__$1 = (inst_39615.cljs$core$IFn$_invoke$arity$1 ? inst_39615.cljs$core$IFn$_invoke$arity$1(inst_39624) : inst_39615.call(null,inst_39624));
var state_39664__$1 = (function (){var statearr_39672 = state_39664;
(statearr_39672[(10)] = inst_39638__$1);

return statearr_39672;
})();
if(cljs.core.truth_(inst_39638__$1)){
var statearr_39673_40676 = state_39664__$1;
(statearr_39673_40676[(1)] = (29));

} else {
var statearr_39674_40677 = state_39664__$1;
(statearr_39674_40677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (4))){
var inst_39582 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39582)){
var statearr_39675_40678 = state_39664__$1;
(statearr_39675_40678[(1)] = (8));

} else {
var statearr_39676_40679 = state_39664__$1;
(statearr_39676_40679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (15))){
var inst_39609 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39609)){
var statearr_39677_40680 = state_39664__$1;
(statearr_39677_40680[(1)] = (19));

} else {
var statearr_39678_40681 = state_39664__$1;
(statearr_39678_40681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (21))){
var inst_39614 = (state_39664[(12)]);
var inst_39614__$1 = (state_39664[(2)]);
var inst_39615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39614__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39614__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39614__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39664__$1 = (function (){var statearr_39679 = state_39664;
(statearr_39679[(11)] = inst_39615);

(statearr_39679[(12)] = inst_39614__$1);

(statearr_39679[(13)] = inst_39616);

return statearr_39679;
})();
return cljs.core.async.ioc_alts_BANG_(state_39664__$1,(22),inst_39617);
} else {
if((state_val_39665 === (31))){
var inst_39646 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39646)){
var statearr_39680_40682 = state_39664__$1;
(statearr_39680_40682[(1)] = (32));

} else {
var statearr_39681_40683 = state_39664__$1;
(statearr_39681_40683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (32))){
var inst_39623 = (state_39664[(14)]);
var state_39664__$1 = state_39664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39664__$1,(35),out,inst_39623);
} else {
if((state_val_39665 === (33))){
var inst_39614 = (state_39664[(12)]);
var inst_39591 = inst_39614;
var state_39664__$1 = (function (){var statearr_39682 = state_39664;
(statearr_39682[(7)] = inst_39591);

return statearr_39682;
})();
var statearr_39683_40684 = state_39664__$1;
(statearr_39683_40684[(2)] = null);

(statearr_39683_40684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (13))){
var inst_39591 = (state_39664[(7)]);
var inst_39598 = inst_39591.cljs$lang$protocol_mask$partition0$;
var inst_39599 = (inst_39598 & (64));
var inst_39600 = inst_39591.cljs$core$ISeq$;
var inst_39601 = (cljs.core.PROTOCOL_SENTINEL === inst_39600);
var inst_39602 = ((inst_39599) || (inst_39601));
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39602)){
var statearr_39684_40685 = state_39664__$1;
(statearr_39684_40685[(1)] = (16));

} else {
var statearr_39685_40686 = state_39664__$1;
(statearr_39685_40686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (22))){
var inst_39624 = (state_39664[(9)]);
var inst_39623 = (state_39664[(14)]);
var inst_39622 = (state_39664[(2)]);
var inst_39623__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39622,(0),null);
var inst_39624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39622,(1),null);
var inst_39625 = (inst_39623__$1 == null);
var inst_39626 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39624__$1,change);
var inst_39627 = ((inst_39625) || (inst_39626));
var state_39664__$1 = (function (){var statearr_39686 = state_39664;
(statearr_39686[(9)] = inst_39624__$1);

(statearr_39686[(14)] = inst_39623__$1);

return statearr_39686;
})();
if(cljs.core.truth_(inst_39627)){
var statearr_39687_40687 = state_39664__$1;
(statearr_39687_40687[(1)] = (23));

} else {
var statearr_39688_40688 = state_39664__$1;
(statearr_39688_40688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (36))){
var inst_39614 = (state_39664[(12)]);
var inst_39591 = inst_39614;
var state_39664__$1 = (function (){var statearr_39689 = state_39664;
(statearr_39689[(7)] = inst_39591);

return statearr_39689;
})();
var statearr_39690_40689 = state_39664__$1;
(statearr_39690_40689[(2)] = null);

(statearr_39690_40689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (29))){
var inst_39638 = (state_39664[(10)]);
var state_39664__$1 = state_39664;
var statearr_39691_40690 = state_39664__$1;
(statearr_39691_40690[(2)] = inst_39638);

(statearr_39691_40690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (6))){
var state_39664__$1 = state_39664;
var statearr_39692_40691 = state_39664__$1;
(statearr_39692_40691[(2)] = false);

(statearr_39692_40691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (28))){
var inst_39634 = (state_39664[(2)]);
var inst_39635 = calc_state();
var inst_39591 = inst_39635;
var state_39664__$1 = (function (){var statearr_39693 = state_39664;
(statearr_39693[(7)] = inst_39591);

(statearr_39693[(15)] = inst_39634);

return statearr_39693;
})();
var statearr_39694_40692 = state_39664__$1;
(statearr_39694_40692[(2)] = null);

(statearr_39694_40692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (25))){
var inst_39660 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
var statearr_39695_40693 = state_39664__$1;
(statearr_39695_40693[(2)] = inst_39660);

(statearr_39695_40693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (34))){
var inst_39658 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
var statearr_39696_40696 = state_39664__$1;
(statearr_39696_40696[(2)] = inst_39658);

(statearr_39696_40696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (17))){
var state_39664__$1 = state_39664;
var statearr_39697_40698 = state_39664__$1;
(statearr_39697_40698[(2)] = false);

(statearr_39697_40698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (3))){
var state_39664__$1 = state_39664;
var statearr_39698_40699 = state_39664__$1;
(statearr_39698_40699[(2)] = false);

(statearr_39698_40699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (12))){
var inst_39662 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39664__$1,inst_39662);
} else {
if((state_val_39665 === (2))){
var inst_39566 = (state_39664[(8)]);
var inst_39571 = inst_39566.cljs$lang$protocol_mask$partition0$;
var inst_39572 = (inst_39571 & (64));
var inst_39573 = inst_39566.cljs$core$ISeq$;
var inst_39574 = (cljs.core.PROTOCOL_SENTINEL === inst_39573);
var inst_39575 = ((inst_39572) || (inst_39574));
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39575)){
var statearr_39699_40700 = state_39664__$1;
(statearr_39699_40700[(1)] = (5));

} else {
var statearr_39700_40701 = state_39664__$1;
(statearr_39700_40701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (23))){
var inst_39623 = (state_39664[(14)]);
var inst_39629 = (inst_39623 == null);
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39629)){
var statearr_39701_40702 = state_39664__$1;
(statearr_39701_40702[(1)] = (26));

} else {
var statearr_39702_40703 = state_39664__$1;
(statearr_39702_40703[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (35))){
var inst_39649 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
if(cljs.core.truth_(inst_39649)){
var statearr_39703_40705 = state_39664__$1;
(statearr_39703_40705[(1)] = (36));

} else {
var statearr_39704_40706 = state_39664__$1;
(statearr_39704_40706[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (19))){
var inst_39591 = (state_39664[(7)]);
var inst_39611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39591);
var state_39664__$1 = state_39664;
var statearr_39705_40707 = state_39664__$1;
(statearr_39705_40707[(2)] = inst_39611);

(statearr_39705_40707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (11))){
var inst_39591 = (state_39664[(7)]);
var inst_39595 = (inst_39591 == null);
var inst_39596 = cljs.core.not(inst_39595);
var state_39664__$1 = state_39664;
if(inst_39596){
var statearr_39706_40708 = state_39664__$1;
(statearr_39706_40708[(1)] = (13));

} else {
var statearr_39707_40709 = state_39664__$1;
(statearr_39707_40709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (9))){
var inst_39566 = (state_39664[(8)]);
var state_39664__$1 = state_39664;
var statearr_39708_40715 = state_39664__$1;
(statearr_39708_40715[(2)] = inst_39566);

(statearr_39708_40715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (5))){
var state_39664__$1 = state_39664;
var statearr_39709_40717 = state_39664__$1;
(statearr_39709_40717[(2)] = true);

(statearr_39709_40717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (14))){
var state_39664__$1 = state_39664;
var statearr_39710_40720 = state_39664__$1;
(statearr_39710_40720[(2)] = false);

(statearr_39710_40720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (26))){
var inst_39624 = (state_39664[(9)]);
var inst_39631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39624);
var state_39664__$1 = state_39664;
var statearr_39711_40721 = state_39664__$1;
(statearr_39711_40721[(2)] = inst_39631);

(statearr_39711_40721[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (16))){
var state_39664__$1 = state_39664;
var statearr_39712_40727 = state_39664__$1;
(statearr_39712_40727[(2)] = true);

(statearr_39712_40727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (38))){
var inst_39654 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
var statearr_39713_40730 = state_39664__$1;
(statearr_39713_40730[(2)] = inst_39654);

(statearr_39713_40730[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (30))){
var inst_39624 = (state_39664[(9)]);
var inst_39615 = (state_39664[(11)]);
var inst_39616 = (state_39664[(13)]);
var inst_39641 = cljs.core.empty_QMARK_(inst_39615);
var inst_39642 = (inst_39616.cljs$core$IFn$_invoke$arity$1 ? inst_39616.cljs$core$IFn$_invoke$arity$1(inst_39624) : inst_39616.call(null,inst_39624));
var inst_39643 = cljs.core.not(inst_39642);
var inst_39644 = ((inst_39641) && (inst_39643));
var state_39664__$1 = state_39664;
var statearr_39714_40738 = state_39664__$1;
(statearr_39714_40738[(2)] = inst_39644);

(statearr_39714_40738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (10))){
var inst_39566 = (state_39664[(8)]);
var inst_39587 = (state_39664[(2)]);
var inst_39588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39587,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39587,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39587,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39591 = inst_39566;
var state_39664__$1 = (function (){var statearr_39715 = state_39664;
(statearr_39715[(16)] = inst_39589);

(statearr_39715[(17)] = inst_39588);

(statearr_39715[(7)] = inst_39591);

(statearr_39715[(18)] = inst_39590);

return statearr_39715;
})();
var statearr_39716_40743 = state_39664__$1;
(statearr_39716_40743[(2)] = null);

(statearr_39716_40743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (18))){
var inst_39606 = (state_39664[(2)]);
var state_39664__$1 = state_39664;
var statearr_39717_40744 = state_39664__$1;
(statearr_39717_40744[(2)] = inst_39606);

(statearr_39717_40744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (37))){
var state_39664__$1 = state_39664;
var statearr_39718_40745 = state_39664__$1;
(statearr_39718_40745[(2)] = null);

(statearr_39718_40745[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39665 === (8))){
var inst_39566 = (state_39664[(8)]);
var inst_39584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39566);
var state_39664__$1 = state_39664;
var statearr_39719_40746 = state_39664__$1;
(statearr_39719_40746[(2)] = inst_39584);

(statearr_39719_40746[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__38789__auto__ = null;
var cljs$core$async$mix_$_state_machine__38789__auto____0 = (function (){
var statearr_39720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39720[(0)] = cljs$core$async$mix_$_state_machine__38789__auto__);

(statearr_39720[(1)] = (1));

return statearr_39720;
});
var cljs$core$async$mix_$_state_machine__38789__auto____1 = (function (state_39664){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39664);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39721){if((e39721 instanceof Object)){
var ex__38792__auto__ = e39721;
var statearr_39722_40747 = state_39664;
(statearr_39722_40747[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40748 = state_39664;
state_39664 = G__40748;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38789__auto__ = function(state_39664){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38789__auto____1.call(this,state_39664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38789__auto____0;
cljs$core$async$mix_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38789__auto____1;
return cljs$core$async$mix_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39723 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39723[(6)] = c__38856__auto___40660);

return statearr_39723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var G__39725 = arguments.length;
switch (G__39725) {
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
var G__39728 = arguments.length;
switch (G__39728) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39726_SHARP_){
if(cljs.core.truth_((p1__39726_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39726_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39726_SHARP_.call(null,topic)))){
return p1__39726_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39726_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39729 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39730){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39730 = meta39730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39731,meta39730__$1){
var self__ = this;
var _39731__$1 = this;
return (new cljs.core.async.t_cljs$core$async39729(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39730__$1));
}));

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39731){
var self__ = this;
var _39731__$1 = this;
return self__.meta39730;
}));

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39730","meta39730",-922164995,null)], null);
}));

(cljs.core.async.t_cljs$core$async39729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39729");

(cljs.core.async.t_cljs$core$async39729.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39729.
 */
cljs.core.async.__GT_t_cljs$core$async39729 = (function cljs$core$async$__GT_t_cljs$core$async39729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39730){
return (new cljs.core.async.t_cljs$core$async39729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39730));
});

}

return (new cljs.core.async.t_cljs$core$async39729(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38856__auto___40751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39803){
var state_val_39804 = (state_39803[(1)]);
if((state_val_39804 === (7))){
var inst_39799 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39805_40752 = state_39803__$1;
(statearr_39805_40752[(2)] = inst_39799);

(statearr_39805_40752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (20))){
var state_39803__$1 = state_39803;
var statearr_39806_40753 = state_39803__$1;
(statearr_39806_40753[(2)] = null);

(statearr_39806_40753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (1))){
var state_39803__$1 = state_39803;
var statearr_39807_40754 = state_39803__$1;
(statearr_39807_40754[(2)] = null);

(statearr_39807_40754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (24))){
var inst_39782 = (state_39803[(7)]);
var inst_39791 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39782);
var state_39803__$1 = state_39803;
var statearr_39808_40755 = state_39803__$1;
(statearr_39808_40755[(2)] = inst_39791);

(statearr_39808_40755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (4))){
var inst_39734 = (state_39803[(8)]);
var inst_39734__$1 = (state_39803[(2)]);
var inst_39735 = (inst_39734__$1 == null);
var state_39803__$1 = (function (){var statearr_39809 = state_39803;
(statearr_39809[(8)] = inst_39734__$1);

return statearr_39809;
})();
if(cljs.core.truth_(inst_39735)){
var statearr_39810_40756 = state_39803__$1;
(statearr_39810_40756[(1)] = (5));

} else {
var statearr_39811_40757 = state_39803__$1;
(statearr_39811_40757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (15))){
var inst_39776 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39812_40758 = state_39803__$1;
(statearr_39812_40758[(2)] = inst_39776);

(statearr_39812_40758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (21))){
var inst_39796 = (state_39803[(2)]);
var state_39803__$1 = (function (){var statearr_39813 = state_39803;
(statearr_39813[(9)] = inst_39796);

return statearr_39813;
})();
var statearr_39814_40759 = state_39803__$1;
(statearr_39814_40759[(2)] = null);

(statearr_39814_40759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (13))){
var inst_39758 = (state_39803[(10)]);
var inst_39760 = cljs.core.chunked_seq_QMARK_(inst_39758);
var state_39803__$1 = state_39803;
if(inst_39760){
var statearr_39815_40760 = state_39803__$1;
(statearr_39815_40760[(1)] = (16));

} else {
var statearr_39816_40761 = state_39803__$1;
(statearr_39816_40761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (22))){
var inst_39788 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
if(cljs.core.truth_(inst_39788)){
var statearr_39817_40762 = state_39803__$1;
(statearr_39817_40762[(1)] = (23));

} else {
var statearr_39818_40763 = state_39803__$1;
(statearr_39818_40763[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (6))){
var inst_39784 = (state_39803[(11)]);
var inst_39782 = (state_39803[(7)]);
var inst_39734 = (state_39803[(8)]);
var inst_39782__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39734) : topic_fn.call(null,inst_39734));
var inst_39783 = cljs.core.deref(mults);
var inst_39784__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39783,inst_39782__$1);
var state_39803__$1 = (function (){var statearr_39819 = state_39803;
(statearr_39819[(11)] = inst_39784__$1);

(statearr_39819[(7)] = inst_39782__$1);

return statearr_39819;
})();
if(cljs.core.truth_(inst_39784__$1)){
var statearr_39820_40764 = state_39803__$1;
(statearr_39820_40764[(1)] = (19));

} else {
var statearr_39821_40765 = state_39803__$1;
(statearr_39821_40765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (25))){
var inst_39793 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39822_40766 = state_39803__$1;
(statearr_39822_40766[(2)] = inst_39793);

(statearr_39822_40766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (17))){
var inst_39758 = (state_39803[(10)]);
var inst_39767 = cljs.core.first(inst_39758);
var inst_39768 = cljs.core.async.muxch_STAR_(inst_39767);
var inst_39769 = cljs.core.async.close_BANG_(inst_39768);
var inst_39770 = cljs.core.next(inst_39758);
var inst_39744 = inst_39770;
var inst_39745 = null;
var inst_39746 = (0);
var inst_39747 = (0);
var state_39803__$1 = (function (){var statearr_39823 = state_39803;
(statearr_39823[(12)] = inst_39769);

(statearr_39823[(13)] = inst_39747);

(statearr_39823[(14)] = inst_39745);

(statearr_39823[(15)] = inst_39744);

(statearr_39823[(16)] = inst_39746);

return statearr_39823;
})();
var statearr_39824_40767 = state_39803__$1;
(statearr_39824_40767[(2)] = null);

(statearr_39824_40767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (3))){
var inst_39801 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39803__$1,inst_39801);
} else {
if((state_val_39804 === (12))){
var inst_39778 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39825_40768 = state_39803__$1;
(statearr_39825_40768[(2)] = inst_39778);

(statearr_39825_40768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (2))){
var state_39803__$1 = state_39803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39803__$1,(4),ch);
} else {
if((state_val_39804 === (23))){
var state_39803__$1 = state_39803;
var statearr_39826_40769 = state_39803__$1;
(statearr_39826_40769[(2)] = null);

(statearr_39826_40769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (19))){
var inst_39784 = (state_39803[(11)]);
var inst_39734 = (state_39803[(8)]);
var inst_39786 = cljs.core.async.muxch_STAR_(inst_39784);
var state_39803__$1 = state_39803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39803__$1,(22),inst_39786,inst_39734);
} else {
if((state_val_39804 === (11))){
var inst_39744 = (state_39803[(15)]);
var inst_39758 = (state_39803[(10)]);
var inst_39758__$1 = cljs.core.seq(inst_39744);
var state_39803__$1 = (function (){var statearr_39827 = state_39803;
(statearr_39827[(10)] = inst_39758__$1);

return statearr_39827;
})();
if(inst_39758__$1){
var statearr_39828_40770 = state_39803__$1;
(statearr_39828_40770[(1)] = (13));

} else {
var statearr_39829_40771 = state_39803__$1;
(statearr_39829_40771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (9))){
var inst_39780 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39830_40772 = state_39803__$1;
(statearr_39830_40772[(2)] = inst_39780);

(statearr_39830_40772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (5))){
var inst_39741 = cljs.core.deref(mults);
var inst_39742 = cljs.core.vals(inst_39741);
var inst_39743 = cljs.core.seq(inst_39742);
var inst_39744 = inst_39743;
var inst_39745 = null;
var inst_39746 = (0);
var inst_39747 = (0);
var state_39803__$1 = (function (){var statearr_39831 = state_39803;
(statearr_39831[(13)] = inst_39747);

(statearr_39831[(14)] = inst_39745);

(statearr_39831[(15)] = inst_39744);

(statearr_39831[(16)] = inst_39746);

return statearr_39831;
})();
var statearr_39832_40773 = state_39803__$1;
(statearr_39832_40773[(2)] = null);

(statearr_39832_40773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (14))){
var state_39803__$1 = state_39803;
var statearr_39836_40774 = state_39803__$1;
(statearr_39836_40774[(2)] = null);

(statearr_39836_40774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (16))){
var inst_39758 = (state_39803[(10)]);
var inst_39762 = cljs.core.chunk_first(inst_39758);
var inst_39763 = cljs.core.chunk_rest(inst_39758);
var inst_39764 = cljs.core.count(inst_39762);
var inst_39744 = inst_39763;
var inst_39745 = inst_39762;
var inst_39746 = inst_39764;
var inst_39747 = (0);
var state_39803__$1 = (function (){var statearr_39837 = state_39803;
(statearr_39837[(13)] = inst_39747);

(statearr_39837[(14)] = inst_39745);

(statearr_39837[(15)] = inst_39744);

(statearr_39837[(16)] = inst_39746);

return statearr_39837;
})();
var statearr_39838_40775 = state_39803__$1;
(statearr_39838_40775[(2)] = null);

(statearr_39838_40775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (10))){
var inst_39747 = (state_39803[(13)]);
var inst_39745 = (state_39803[(14)]);
var inst_39744 = (state_39803[(15)]);
var inst_39746 = (state_39803[(16)]);
var inst_39752 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39745,inst_39747);
var inst_39753 = cljs.core.async.muxch_STAR_(inst_39752);
var inst_39754 = cljs.core.async.close_BANG_(inst_39753);
var inst_39755 = (inst_39747 + (1));
var tmp39833 = inst_39745;
var tmp39834 = inst_39744;
var tmp39835 = inst_39746;
var inst_39744__$1 = tmp39834;
var inst_39745__$1 = tmp39833;
var inst_39746__$1 = tmp39835;
var inst_39747__$1 = inst_39755;
var state_39803__$1 = (function (){var statearr_39839 = state_39803;
(statearr_39839[(13)] = inst_39747__$1);

(statearr_39839[(14)] = inst_39745__$1);

(statearr_39839[(17)] = inst_39754);

(statearr_39839[(15)] = inst_39744__$1);

(statearr_39839[(16)] = inst_39746__$1);

return statearr_39839;
})();
var statearr_39840_40776 = state_39803__$1;
(statearr_39840_40776[(2)] = null);

(statearr_39840_40776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (18))){
var inst_39773 = (state_39803[(2)]);
var state_39803__$1 = state_39803;
var statearr_39841_40777 = state_39803__$1;
(statearr_39841_40777[(2)] = inst_39773);

(statearr_39841_40777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39804 === (8))){
var inst_39747 = (state_39803[(13)]);
var inst_39746 = (state_39803[(16)]);
var inst_39749 = (inst_39747 < inst_39746);
var inst_39750 = inst_39749;
var state_39803__$1 = state_39803;
if(cljs.core.truth_(inst_39750)){
var statearr_39842_40778 = state_39803__$1;
(statearr_39842_40778[(1)] = (10));

} else {
var statearr_39843_40779 = state_39803__$1;
(statearr_39843_40779[(1)] = (11));

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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_39844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39844[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_39844[(1)] = (1));

return statearr_39844;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39803){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39803);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39845){if((e39845 instanceof Object)){
var ex__38792__auto__ = e39845;
var statearr_39846_40780 = state_39803;
(statearr_39846_40780[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40781 = state_39803;
state_39803 = G__40781;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39847 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39847[(6)] = c__38856__auto___40751);

return statearr_39847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var G__39849 = arguments.length;
switch (G__39849) {
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
var G__39851 = arguments.length;
switch (G__39851) {
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
var G__39853 = arguments.length;
switch (G__39853) {
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
var c__38856__auto___40789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39892){
var state_val_39893 = (state_39892[(1)]);
if((state_val_39893 === (7))){
var state_39892__$1 = state_39892;
var statearr_39894_40790 = state_39892__$1;
(statearr_39894_40790[(2)] = null);

(statearr_39894_40790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (1))){
var state_39892__$1 = state_39892;
var statearr_39895_40791 = state_39892__$1;
(statearr_39895_40791[(2)] = null);

(statearr_39895_40791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (4))){
var inst_39856 = (state_39892[(7)]);
var inst_39858 = (inst_39856 < cnt);
var state_39892__$1 = state_39892;
if(cljs.core.truth_(inst_39858)){
var statearr_39896_40792 = state_39892__$1;
(statearr_39896_40792[(1)] = (6));

} else {
var statearr_39897_40793 = state_39892__$1;
(statearr_39897_40793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (15))){
var inst_39888 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
var statearr_39898_40794 = state_39892__$1;
(statearr_39898_40794[(2)] = inst_39888);

(statearr_39898_40794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (13))){
var inst_39881 = cljs.core.async.close_BANG_(out);
var state_39892__$1 = state_39892;
var statearr_39899_40797 = state_39892__$1;
(statearr_39899_40797[(2)] = inst_39881);

(statearr_39899_40797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (6))){
var state_39892__$1 = state_39892;
var statearr_39900_40798 = state_39892__$1;
(statearr_39900_40798[(2)] = null);

(statearr_39900_40798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (3))){
var inst_39890 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39892__$1,inst_39890);
} else {
if((state_val_39893 === (12))){
var inst_39878 = (state_39892[(8)]);
var inst_39878__$1 = (state_39892[(2)]);
var inst_39879 = cljs.core.some(cljs.core.nil_QMARK_,inst_39878__$1);
var state_39892__$1 = (function (){var statearr_39901 = state_39892;
(statearr_39901[(8)] = inst_39878__$1);

return statearr_39901;
})();
if(cljs.core.truth_(inst_39879)){
var statearr_39902_40799 = state_39892__$1;
(statearr_39902_40799[(1)] = (13));

} else {
var statearr_39903_40800 = state_39892__$1;
(statearr_39903_40800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (2))){
var inst_39855 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39856 = (0);
var state_39892__$1 = (function (){var statearr_39904 = state_39892;
(statearr_39904[(9)] = inst_39855);

(statearr_39904[(7)] = inst_39856);

return statearr_39904;
})();
var statearr_39905_40801 = state_39892__$1;
(statearr_39905_40801[(2)] = null);

(statearr_39905_40801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (11))){
var inst_39856 = (state_39892[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39892,(10),Object,null,(9));
var inst_39865 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39856) : chs__$1.call(null,inst_39856));
var inst_39866 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39856) : done.call(null,inst_39856));
var inst_39867 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39865,inst_39866);
var state_39892__$1 = state_39892;
var statearr_39906_40802 = state_39892__$1;
(statearr_39906_40802[(2)] = inst_39867);


cljs.core.async.impl.ioc_helpers.process_exception(state_39892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (9))){
var inst_39856 = (state_39892[(7)]);
var inst_39869 = (state_39892[(2)]);
var inst_39870 = (inst_39856 + (1));
var inst_39856__$1 = inst_39870;
var state_39892__$1 = (function (){var statearr_39907 = state_39892;
(statearr_39907[(10)] = inst_39869);

(statearr_39907[(7)] = inst_39856__$1);

return statearr_39907;
})();
var statearr_39908_40805 = state_39892__$1;
(statearr_39908_40805[(2)] = null);

(statearr_39908_40805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (5))){
var inst_39876 = (state_39892[(2)]);
var state_39892__$1 = (function (){var statearr_39909 = state_39892;
(statearr_39909[(11)] = inst_39876);

return statearr_39909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39892__$1,(12),dchan);
} else {
if((state_val_39893 === (14))){
var inst_39878 = (state_39892[(8)]);
var inst_39883 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39878);
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39892__$1,(16),out,inst_39883);
} else {
if((state_val_39893 === (16))){
var inst_39885 = (state_39892[(2)]);
var state_39892__$1 = (function (){var statearr_39910 = state_39892;
(statearr_39910[(12)] = inst_39885);

return statearr_39910;
})();
var statearr_39911_40806 = state_39892__$1;
(statearr_39911_40806[(2)] = null);

(statearr_39911_40806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (10))){
var inst_39860 = (state_39892[(2)]);
var inst_39861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39892__$1 = (function (){var statearr_39912 = state_39892;
(statearr_39912[(13)] = inst_39860);

return statearr_39912;
})();
var statearr_39913_40807 = state_39892__$1;
(statearr_39913_40807[(2)] = inst_39861);


cljs.core.async.impl.ioc_helpers.process_exception(state_39892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (8))){
var inst_39874 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
var statearr_39914_40810 = state_39892__$1;
(statearr_39914_40810[(2)] = inst_39874);

(statearr_39914_40810[(1)] = (5));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_39915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39915[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_39915[(1)] = (1));

return statearr_39915;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39892){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39892);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39916){if((e39916 instanceof Object)){
var ex__38792__auto__ = e39916;
var statearr_39917_40811 = state_39892;
(statearr_39917_40811[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40812 = state_39892;
state_39892 = G__40812;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39918 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39918[(6)] = c__38856__auto___40789);

return statearr_39918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var G__39921 = arguments.length;
switch (G__39921) {
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
var c__38856__auto___40814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39953){
var state_val_39954 = (state_39953[(1)]);
if((state_val_39954 === (7))){
var inst_39933 = (state_39953[(7)]);
var inst_39932 = (state_39953[(8)]);
var inst_39932__$1 = (state_39953[(2)]);
var inst_39933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39932__$1,(0),null);
var inst_39934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39932__$1,(1),null);
var inst_39935 = (inst_39933__$1 == null);
var state_39953__$1 = (function (){var statearr_39955 = state_39953;
(statearr_39955[(9)] = inst_39934);

(statearr_39955[(7)] = inst_39933__$1);

(statearr_39955[(8)] = inst_39932__$1);

return statearr_39955;
})();
if(cljs.core.truth_(inst_39935)){
var statearr_39956_40815 = state_39953__$1;
(statearr_39956_40815[(1)] = (8));

} else {
var statearr_39957_40816 = state_39953__$1;
(statearr_39957_40816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (1))){
var inst_39922 = cljs.core.vec(chs);
var inst_39923 = inst_39922;
var state_39953__$1 = (function (){var statearr_39958 = state_39953;
(statearr_39958[(10)] = inst_39923);

return statearr_39958;
})();
var statearr_39959_40817 = state_39953__$1;
(statearr_39959_40817[(2)] = null);

(statearr_39959_40817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (4))){
var inst_39923 = (state_39953[(10)]);
var state_39953__$1 = state_39953;
return cljs.core.async.ioc_alts_BANG_(state_39953__$1,(7),inst_39923);
} else {
if((state_val_39954 === (6))){
var inst_39949 = (state_39953[(2)]);
var state_39953__$1 = state_39953;
var statearr_39960_40818 = state_39953__$1;
(statearr_39960_40818[(2)] = inst_39949);

(statearr_39960_40818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (3))){
var inst_39951 = (state_39953[(2)]);
var state_39953__$1 = state_39953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39953__$1,inst_39951);
} else {
if((state_val_39954 === (2))){
var inst_39923 = (state_39953[(10)]);
var inst_39925 = cljs.core.count(inst_39923);
var inst_39926 = (inst_39925 > (0));
var state_39953__$1 = state_39953;
if(cljs.core.truth_(inst_39926)){
var statearr_39962_40819 = state_39953__$1;
(statearr_39962_40819[(1)] = (4));

} else {
var statearr_39963_40820 = state_39953__$1;
(statearr_39963_40820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (11))){
var inst_39923 = (state_39953[(10)]);
var inst_39942 = (state_39953[(2)]);
var tmp39961 = inst_39923;
var inst_39923__$1 = tmp39961;
var state_39953__$1 = (function (){var statearr_39964 = state_39953;
(statearr_39964[(11)] = inst_39942);

(statearr_39964[(10)] = inst_39923__$1);

return statearr_39964;
})();
var statearr_39965_40821 = state_39953__$1;
(statearr_39965_40821[(2)] = null);

(statearr_39965_40821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (9))){
var inst_39933 = (state_39953[(7)]);
var state_39953__$1 = state_39953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39953__$1,(11),out,inst_39933);
} else {
if((state_val_39954 === (5))){
var inst_39947 = cljs.core.async.close_BANG_(out);
var state_39953__$1 = state_39953;
var statearr_39966_40822 = state_39953__$1;
(statearr_39966_40822[(2)] = inst_39947);

(statearr_39966_40822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (10))){
var inst_39945 = (state_39953[(2)]);
var state_39953__$1 = state_39953;
var statearr_39967_40823 = state_39953__$1;
(statearr_39967_40823[(2)] = inst_39945);

(statearr_39967_40823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39954 === (8))){
var inst_39934 = (state_39953[(9)]);
var inst_39923 = (state_39953[(10)]);
var inst_39933 = (state_39953[(7)]);
var inst_39932 = (state_39953[(8)]);
var inst_39937 = (function (){var cs = inst_39923;
var vec__39928 = inst_39932;
var v = inst_39933;
var c = inst_39934;
return (function (p1__39919_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39919_SHARP_);
});
})();
var inst_39938 = cljs.core.filterv(inst_39937,inst_39923);
var inst_39923__$1 = inst_39938;
var state_39953__$1 = (function (){var statearr_39968 = state_39953;
(statearr_39968[(10)] = inst_39923__$1);

return statearr_39968;
})();
var statearr_39969_40824 = state_39953__$1;
(statearr_39969_40824[(2)] = null);

(statearr_39969_40824[(1)] = (2));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_39970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39970[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_39970[(1)] = (1));

return statearr_39970;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39953){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39953);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e39971){if((e39971 instanceof Object)){
var ex__38792__auto__ = e39971;
var statearr_39972_40825 = state_39953;
(statearr_39972_40825[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40826 = state_39953;
state_39953 = G__40826;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_39973 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_39973[(6)] = c__38856__auto___40814);

return statearr_39973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
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
var G__39975 = arguments.length;
switch (G__39975) {
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
var c__38856__auto___40828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_39999){
var state_val_40000 = (state_39999[(1)]);
if((state_val_40000 === (7))){
var inst_39981 = (state_39999[(7)]);
var inst_39981__$1 = (state_39999[(2)]);
var inst_39982 = (inst_39981__$1 == null);
var inst_39983 = cljs.core.not(inst_39982);
var state_39999__$1 = (function (){var statearr_40001 = state_39999;
(statearr_40001[(7)] = inst_39981__$1);

return statearr_40001;
})();
if(inst_39983){
var statearr_40002_40830 = state_39999__$1;
(statearr_40002_40830[(1)] = (8));

} else {
var statearr_40003_40831 = state_39999__$1;
(statearr_40003_40831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (1))){
var inst_39976 = (0);
var state_39999__$1 = (function (){var statearr_40004 = state_39999;
(statearr_40004[(8)] = inst_39976);

return statearr_40004;
})();
var statearr_40005_40832 = state_39999__$1;
(statearr_40005_40832[(2)] = null);

(statearr_40005_40832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (4))){
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39999__$1,(7),ch);
} else {
if((state_val_40000 === (6))){
var inst_39994 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40006_40833 = state_39999__$1;
(statearr_40006_40833[(2)] = inst_39994);

(statearr_40006_40833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (3))){
var inst_39996 = (state_39999[(2)]);
var inst_39997 = cljs.core.async.close_BANG_(out);
var state_39999__$1 = (function (){var statearr_40007 = state_39999;
(statearr_40007[(9)] = inst_39996);

return statearr_40007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39999__$1,inst_39997);
} else {
if((state_val_40000 === (2))){
var inst_39976 = (state_39999[(8)]);
var inst_39978 = (inst_39976 < n);
var state_39999__$1 = state_39999;
if(cljs.core.truth_(inst_39978)){
var statearr_40008_40835 = state_39999__$1;
(statearr_40008_40835[(1)] = (4));

} else {
var statearr_40009_40836 = state_39999__$1;
(statearr_40009_40836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (11))){
var inst_39976 = (state_39999[(8)]);
var inst_39986 = (state_39999[(2)]);
var inst_39987 = (inst_39976 + (1));
var inst_39976__$1 = inst_39987;
var state_39999__$1 = (function (){var statearr_40010 = state_39999;
(statearr_40010[(8)] = inst_39976__$1);

(statearr_40010[(10)] = inst_39986);

return statearr_40010;
})();
var statearr_40011_40837 = state_39999__$1;
(statearr_40011_40837[(2)] = null);

(statearr_40011_40837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (9))){
var state_39999__$1 = state_39999;
var statearr_40012_40840 = state_39999__$1;
(statearr_40012_40840[(2)] = null);

(statearr_40012_40840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (5))){
var state_39999__$1 = state_39999;
var statearr_40013_40842 = state_39999__$1;
(statearr_40013_40842[(2)] = null);

(statearr_40013_40842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (10))){
var inst_39991 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40014_40843 = state_39999__$1;
(statearr_40014_40843[(2)] = inst_39991);

(statearr_40014_40843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (8))){
var inst_39981 = (state_39999[(7)]);
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39999__$1,(11),out,inst_39981);
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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_40015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40015[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_40015[(1)] = (1));

return statearr_40015;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_39999){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_39999);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40016){if((e40016 instanceof Object)){
var ex__38792__auto__ = e40016;
var statearr_40017_40844 = state_39999;
(statearr_40017_40844[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40846 = state_39999;
state_39999 = G__40846;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_39999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_39999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40018 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40018[(6)] = c__38856__auto___40828);

return statearr_40018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40020 = (function (f,ch,meta40021){
this.f = f;
this.ch = ch;
this.meta40021 = meta40021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40022,meta40021__$1){
var self__ = this;
var _40022__$1 = this;
return (new cljs.core.async.t_cljs$core$async40020(self__.f,self__.ch,meta40021__$1));
}));

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40022){
var self__ = this;
var _40022__$1 = this;
return self__.meta40021;
}));

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40023 = (function (f,ch,meta40021,_,fn1,meta40024){
this.f = f;
this.ch = ch;
this.meta40021 = meta40021;
this._ = _;
this.fn1 = fn1;
this.meta40024 = meta40024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40025,meta40024__$1){
var self__ = this;
var _40025__$1 = this;
return (new cljs.core.async.t_cljs$core$async40023(self__.f,self__.ch,self__.meta40021,self__._,self__.fn1,meta40024__$1));
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40025){
var self__ = this;
var _40025__$1 = this;
return self__.meta40024;
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40019_SHARP_){
var G__40026 = (((p1__40019_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40019_SHARP_) : self__.f.call(null,p1__40019_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40026) : f1.call(null,G__40026));
});
}));

(cljs.core.async.t_cljs$core$async40023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40021","meta40021",-1919066305,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40020","cljs.core.async/t_cljs$core$async40020",-468001399,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40024","meta40024",135067965,null)], null);
}));

(cljs.core.async.t_cljs$core$async40023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40023");

(cljs.core.async.t_cljs$core$async40023.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40023.
 */
cljs.core.async.__GT_t_cljs$core$async40023 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40023(f__$1,ch__$1,meta40021__$1,___$2,fn1__$1,meta40024){
return (new cljs.core.async.t_cljs$core$async40023(f__$1,ch__$1,meta40021__$1,___$2,fn1__$1,meta40024));
});

}

return (new cljs.core.async.t_cljs$core$async40023(self__.f,self__.ch,self__.meta40021,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40027 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40027) : self__.f.call(null,G__40027));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40021","meta40021",-1919066305,null)], null);
}));

(cljs.core.async.t_cljs$core$async40020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40020");

(cljs.core.async.t_cljs$core$async40020.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40020.
 */
cljs.core.async.__GT_t_cljs$core$async40020 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40020(f__$1,ch__$1,meta40021){
return (new cljs.core.async.t_cljs$core$async40020(f__$1,ch__$1,meta40021));
});

}

return (new cljs.core.async.t_cljs$core$async40020(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40028 = (function (f,ch,meta40029){
this.f = f;
this.ch = ch;
this.meta40029 = meta40029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40030,meta40029__$1){
var self__ = this;
var _40030__$1 = this;
return (new cljs.core.async.t_cljs$core$async40028(self__.f,self__.ch,meta40029__$1));
}));

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40030){
var self__ = this;
var _40030__$1 = this;
return self__.meta40029;
}));

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40029","meta40029",-379468861,null)], null);
}));

(cljs.core.async.t_cljs$core$async40028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40028");

(cljs.core.async.t_cljs$core$async40028.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40028.
 */
cljs.core.async.__GT_t_cljs$core$async40028 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40028(f__$1,ch__$1,meta40029){
return (new cljs.core.async.t_cljs$core$async40028(f__$1,ch__$1,meta40029));
});

}

return (new cljs.core.async.t_cljs$core$async40028(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40031 = (function (p,ch,meta40032){
this.p = p;
this.ch = ch;
this.meta40032 = meta40032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40033,meta40032__$1){
var self__ = this;
var _40033__$1 = this;
return (new cljs.core.async.t_cljs$core$async40031(self__.p,self__.ch,meta40032__$1));
}));

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40033){
var self__ = this;
var _40033__$1 = this;
return self__.meta40032;
}));

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40032","meta40032",489839142,null)], null);
}));

(cljs.core.async.t_cljs$core$async40031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40031");

(cljs.core.async.t_cljs$core$async40031.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40031.
 */
cljs.core.async.__GT_t_cljs$core$async40031 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40031(p__$1,ch__$1,meta40032){
return (new cljs.core.async.t_cljs$core$async40031(p__$1,ch__$1,meta40032));
});

}

return (new cljs.core.async.t_cljs$core$async40031(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40035 = arguments.length;
switch (G__40035) {
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
var c__38856__auto___40851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_40056){
var state_val_40057 = (state_40056[(1)]);
if((state_val_40057 === (7))){
var inst_40052 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40058_40852 = state_40056__$1;
(statearr_40058_40852[(2)] = inst_40052);

(statearr_40058_40852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (1))){
var state_40056__$1 = state_40056;
var statearr_40059_40853 = state_40056__$1;
(statearr_40059_40853[(2)] = null);

(statearr_40059_40853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (4))){
var inst_40038 = (state_40056[(7)]);
var inst_40038__$1 = (state_40056[(2)]);
var inst_40039 = (inst_40038__$1 == null);
var state_40056__$1 = (function (){var statearr_40060 = state_40056;
(statearr_40060[(7)] = inst_40038__$1);

return statearr_40060;
})();
if(cljs.core.truth_(inst_40039)){
var statearr_40061_40854 = state_40056__$1;
(statearr_40061_40854[(1)] = (5));

} else {
var statearr_40062_40855 = state_40056__$1;
(statearr_40062_40855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (6))){
var inst_40038 = (state_40056[(7)]);
var inst_40043 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40038) : p.call(null,inst_40038));
var state_40056__$1 = state_40056;
if(cljs.core.truth_(inst_40043)){
var statearr_40063_40856 = state_40056__$1;
(statearr_40063_40856[(1)] = (8));

} else {
var statearr_40064_40857 = state_40056__$1;
(statearr_40064_40857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (3))){
var inst_40054 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40056__$1,inst_40054);
} else {
if((state_val_40057 === (2))){
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40056__$1,(4),ch);
} else {
if((state_val_40057 === (11))){
var inst_40046 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40065_40858 = state_40056__$1;
(statearr_40065_40858[(2)] = inst_40046);

(statearr_40065_40858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (9))){
var state_40056__$1 = state_40056;
var statearr_40066_40859 = state_40056__$1;
(statearr_40066_40859[(2)] = null);

(statearr_40066_40859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (5))){
var inst_40041 = cljs.core.async.close_BANG_(out);
var state_40056__$1 = state_40056;
var statearr_40067_40860 = state_40056__$1;
(statearr_40067_40860[(2)] = inst_40041);

(statearr_40067_40860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (10))){
var inst_40049 = (state_40056[(2)]);
var state_40056__$1 = (function (){var statearr_40068 = state_40056;
(statearr_40068[(8)] = inst_40049);

return statearr_40068;
})();
var statearr_40069_40861 = state_40056__$1;
(statearr_40069_40861[(2)] = null);

(statearr_40069_40861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (8))){
var inst_40038 = (state_40056[(7)]);
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40056__$1,(11),out,inst_40038);
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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_40070 = [null,null,null,null,null,null,null,null,null];
(statearr_40070[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_40070[(1)] = (1));

return statearr_40070;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_40056){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_40056);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40071){if((e40071 instanceof Object)){
var ex__38792__auto__ = e40071;
var statearr_40072_40862 = state_40056;
(statearr_40072_40862[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40863 = state_40056;
state_40056 = G__40863;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_40056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_40056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40073 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40073[(6)] = c__38856__auto___40851);

return statearr_40073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40075 = arguments.length;
switch (G__40075) {
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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_40137){
var state_val_40138 = (state_40137[(1)]);
if((state_val_40138 === (7))){
var inst_40133 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40139_40865 = state_40137__$1;
(statearr_40139_40865[(2)] = inst_40133);

(statearr_40139_40865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (20))){
var inst_40103 = (state_40137[(7)]);
var inst_40114 = (state_40137[(2)]);
var inst_40115 = cljs.core.next(inst_40103);
var inst_40089 = inst_40115;
var inst_40090 = null;
var inst_40091 = (0);
var inst_40092 = (0);
var state_40137__$1 = (function (){var statearr_40140 = state_40137;
(statearr_40140[(8)] = inst_40090);

(statearr_40140[(9)] = inst_40092);

(statearr_40140[(10)] = inst_40091);

(statearr_40140[(11)] = inst_40089);

(statearr_40140[(12)] = inst_40114);

return statearr_40140;
})();
var statearr_40141_40866 = state_40137__$1;
(statearr_40141_40866[(2)] = null);

(statearr_40141_40866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (1))){
var state_40137__$1 = state_40137;
var statearr_40142_40867 = state_40137__$1;
(statearr_40142_40867[(2)] = null);

(statearr_40142_40867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (4))){
var inst_40078 = (state_40137[(13)]);
var inst_40078__$1 = (state_40137[(2)]);
var inst_40079 = (inst_40078__$1 == null);
var state_40137__$1 = (function (){var statearr_40143 = state_40137;
(statearr_40143[(13)] = inst_40078__$1);

return statearr_40143;
})();
if(cljs.core.truth_(inst_40079)){
var statearr_40144_40868 = state_40137__$1;
(statearr_40144_40868[(1)] = (5));

} else {
var statearr_40145_40869 = state_40137__$1;
(statearr_40145_40869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (15))){
var state_40137__$1 = state_40137;
var statearr_40149_40870 = state_40137__$1;
(statearr_40149_40870[(2)] = null);

(statearr_40149_40870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (21))){
var state_40137__$1 = state_40137;
var statearr_40150_40871 = state_40137__$1;
(statearr_40150_40871[(2)] = null);

(statearr_40150_40871[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (13))){
var inst_40090 = (state_40137[(8)]);
var inst_40092 = (state_40137[(9)]);
var inst_40091 = (state_40137[(10)]);
var inst_40089 = (state_40137[(11)]);
var inst_40099 = (state_40137[(2)]);
var inst_40100 = (inst_40092 + (1));
var tmp40146 = inst_40090;
var tmp40147 = inst_40091;
var tmp40148 = inst_40089;
var inst_40089__$1 = tmp40148;
var inst_40090__$1 = tmp40146;
var inst_40091__$1 = tmp40147;
var inst_40092__$1 = inst_40100;
var state_40137__$1 = (function (){var statearr_40151 = state_40137;
(statearr_40151[(8)] = inst_40090__$1);

(statearr_40151[(9)] = inst_40092__$1);

(statearr_40151[(10)] = inst_40091__$1);

(statearr_40151[(11)] = inst_40089__$1);

(statearr_40151[(14)] = inst_40099);

return statearr_40151;
})();
var statearr_40152_40872 = state_40137__$1;
(statearr_40152_40872[(2)] = null);

(statearr_40152_40872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (22))){
var state_40137__$1 = state_40137;
var statearr_40153_40873 = state_40137__$1;
(statearr_40153_40873[(2)] = null);

(statearr_40153_40873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (6))){
var inst_40078 = (state_40137[(13)]);
var inst_40087 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40078) : f.call(null,inst_40078));
var inst_40088 = cljs.core.seq(inst_40087);
var inst_40089 = inst_40088;
var inst_40090 = null;
var inst_40091 = (0);
var inst_40092 = (0);
var state_40137__$1 = (function (){var statearr_40154 = state_40137;
(statearr_40154[(8)] = inst_40090);

(statearr_40154[(9)] = inst_40092);

(statearr_40154[(10)] = inst_40091);

(statearr_40154[(11)] = inst_40089);

return statearr_40154;
})();
var statearr_40155_40874 = state_40137__$1;
(statearr_40155_40874[(2)] = null);

(statearr_40155_40874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (17))){
var inst_40103 = (state_40137[(7)]);
var inst_40107 = cljs.core.chunk_first(inst_40103);
var inst_40108 = cljs.core.chunk_rest(inst_40103);
var inst_40109 = cljs.core.count(inst_40107);
var inst_40089 = inst_40108;
var inst_40090 = inst_40107;
var inst_40091 = inst_40109;
var inst_40092 = (0);
var state_40137__$1 = (function (){var statearr_40156 = state_40137;
(statearr_40156[(8)] = inst_40090);

(statearr_40156[(9)] = inst_40092);

(statearr_40156[(10)] = inst_40091);

(statearr_40156[(11)] = inst_40089);

return statearr_40156;
})();
var statearr_40157_40875 = state_40137__$1;
(statearr_40157_40875[(2)] = null);

(statearr_40157_40875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (3))){
var inst_40135 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40137__$1,inst_40135);
} else {
if((state_val_40138 === (12))){
var inst_40123 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40158_40876 = state_40137__$1;
(statearr_40158_40876[(2)] = inst_40123);

(statearr_40158_40876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (2))){
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40137__$1,(4),in$);
} else {
if((state_val_40138 === (23))){
var inst_40131 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40159_40877 = state_40137__$1;
(statearr_40159_40877[(2)] = inst_40131);

(statearr_40159_40877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (19))){
var inst_40118 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40160_40878 = state_40137__$1;
(statearr_40160_40878[(2)] = inst_40118);

(statearr_40160_40878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (11))){
var inst_40089 = (state_40137[(11)]);
var inst_40103 = (state_40137[(7)]);
var inst_40103__$1 = cljs.core.seq(inst_40089);
var state_40137__$1 = (function (){var statearr_40161 = state_40137;
(statearr_40161[(7)] = inst_40103__$1);

return statearr_40161;
})();
if(inst_40103__$1){
var statearr_40162_40879 = state_40137__$1;
(statearr_40162_40879[(1)] = (14));

} else {
var statearr_40163_40880 = state_40137__$1;
(statearr_40163_40880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (9))){
var inst_40125 = (state_40137[(2)]);
var inst_40126 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40137__$1 = (function (){var statearr_40164 = state_40137;
(statearr_40164[(15)] = inst_40125);

return statearr_40164;
})();
if(cljs.core.truth_(inst_40126)){
var statearr_40165_40881 = state_40137__$1;
(statearr_40165_40881[(1)] = (21));

} else {
var statearr_40166_40882 = state_40137__$1;
(statearr_40166_40882[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (5))){
var inst_40081 = cljs.core.async.close_BANG_(out);
var state_40137__$1 = state_40137;
var statearr_40167_40883 = state_40137__$1;
(statearr_40167_40883[(2)] = inst_40081);

(statearr_40167_40883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (14))){
var inst_40103 = (state_40137[(7)]);
var inst_40105 = cljs.core.chunked_seq_QMARK_(inst_40103);
var state_40137__$1 = state_40137;
if(inst_40105){
var statearr_40168_40884 = state_40137__$1;
(statearr_40168_40884[(1)] = (17));

} else {
var statearr_40169_40885 = state_40137__$1;
(statearr_40169_40885[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (16))){
var inst_40121 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40170_40889 = state_40137__$1;
(statearr_40170_40889[(2)] = inst_40121);

(statearr_40170_40889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (10))){
var inst_40090 = (state_40137[(8)]);
var inst_40092 = (state_40137[(9)]);
var inst_40097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40090,inst_40092);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40137__$1,(13),out,inst_40097);
} else {
if((state_val_40138 === (18))){
var inst_40103 = (state_40137[(7)]);
var inst_40112 = cljs.core.first(inst_40103);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40137__$1,(20),out,inst_40112);
} else {
if((state_val_40138 === (8))){
var inst_40092 = (state_40137[(9)]);
var inst_40091 = (state_40137[(10)]);
var inst_40094 = (inst_40092 < inst_40091);
var inst_40095 = inst_40094;
var state_40137__$1 = state_40137;
if(cljs.core.truth_(inst_40095)){
var statearr_40171_40890 = state_40137__$1;
(statearr_40171_40890[(1)] = (10));

} else {
var statearr_40172_40891 = state_40137__$1;
(statearr_40172_40891[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____0 = (function (){
var statearr_40173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40173[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__);

(statearr_40173[(1)] = (1));

return statearr_40173;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____1 = (function (state_40137){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_40137);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40174){if((e40174 instanceof Object)){
var ex__38792__auto__ = e40174;
var statearr_40175_40894 = state_40137;
(statearr_40175_40894[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40895 = state_40137;
state_40137 = G__40895;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__ = function(state_40137){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____1.call(this,state_40137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38789__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40176 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40176[(6)] = c__38856__auto__);

return statearr_40176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40178 = arguments.length;
switch (G__40178) {
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
var G__40180 = arguments.length;
switch (G__40180) {
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
var G__40182 = arguments.length;
switch (G__40182) {
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
var c__38856__auto___40900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_40206){
var state_val_40207 = (state_40206[(1)]);
if((state_val_40207 === (7))){
var inst_40201 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
var statearr_40208_40901 = state_40206__$1;
(statearr_40208_40901[(2)] = inst_40201);

(statearr_40208_40901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (1))){
var inst_40183 = null;
var state_40206__$1 = (function (){var statearr_40209 = state_40206;
(statearr_40209[(7)] = inst_40183);

return statearr_40209;
})();
var statearr_40210_40902 = state_40206__$1;
(statearr_40210_40902[(2)] = null);

(statearr_40210_40902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (4))){
var inst_40186 = (state_40206[(8)]);
var inst_40186__$1 = (state_40206[(2)]);
var inst_40187 = (inst_40186__$1 == null);
var inst_40188 = cljs.core.not(inst_40187);
var state_40206__$1 = (function (){var statearr_40211 = state_40206;
(statearr_40211[(8)] = inst_40186__$1);

return statearr_40211;
})();
if(inst_40188){
var statearr_40212_40903 = state_40206__$1;
(statearr_40212_40903[(1)] = (5));

} else {
var statearr_40213_40904 = state_40206__$1;
(statearr_40213_40904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (6))){
var state_40206__$1 = state_40206;
var statearr_40214_40905 = state_40206__$1;
(statearr_40214_40905[(2)] = null);

(statearr_40214_40905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (3))){
var inst_40203 = (state_40206[(2)]);
var inst_40204 = cljs.core.async.close_BANG_(out);
var state_40206__$1 = (function (){var statearr_40215 = state_40206;
(statearr_40215[(9)] = inst_40203);

return statearr_40215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40206__$1,inst_40204);
} else {
if((state_val_40207 === (2))){
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40206__$1,(4),ch);
} else {
if((state_val_40207 === (11))){
var inst_40186 = (state_40206[(8)]);
var inst_40195 = (state_40206[(2)]);
var inst_40183 = inst_40186;
var state_40206__$1 = (function (){var statearr_40216 = state_40206;
(statearr_40216[(7)] = inst_40183);

(statearr_40216[(10)] = inst_40195);

return statearr_40216;
})();
var statearr_40217_40906 = state_40206__$1;
(statearr_40217_40906[(2)] = null);

(statearr_40217_40906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (9))){
var inst_40186 = (state_40206[(8)]);
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40206__$1,(11),out,inst_40186);
} else {
if((state_val_40207 === (5))){
var inst_40183 = (state_40206[(7)]);
var inst_40186 = (state_40206[(8)]);
var inst_40190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40186,inst_40183);
var state_40206__$1 = state_40206;
if(inst_40190){
var statearr_40219_40907 = state_40206__$1;
(statearr_40219_40907[(1)] = (8));

} else {
var statearr_40220_40908 = state_40206__$1;
(statearr_40220_40908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (10))){
var inst_40198 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
var statearr_40221_40909 = state_40206__$1;
(statearr_40221_40909[(2)] = inst_40198);

(statearr_40221_40909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (8))){
var inst_40183 = (state_40206[(7)]);
var tmp40218 = inst_40183;
var inst_40183__$1 = tmp40218;
var state_40206__$1 = (function (){var statearr_40222 = state_40206;
(statearr_40222[(7)] = inst_40183__$1);

return statearr_40222;
})();
var statearr_40223_40910 = state_40206__$1;
(statearr_40223_40910[(2)] = null);

(statearr_40223_40910[(1)] = (2));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_40224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40224[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_40224[(1)] = (1));

return statearr_40224;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_40206){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_40206);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40225){if((e40225 instanceof Object)){
var ex__38792__auto__ = e40225;
var statearr_40226_40911 = state_40206;
(statearr_40226_40911[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40912 = state_40206;
state_40206 = G__40912;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_40206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_40206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40227 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40227[(6)] = c__38856__auto___40900);

return statearr_40227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40229 = arguments.length;
switch (G__40229) {
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
var c__38856__auto___40914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_40267){
var state_val_40268 = (state_40267[(1)]);
if((state_val_40268 === (7))){
var inst_40263 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
var statearr_40269_40915 = state_40267__$1;
(statearr_40269_40915[(2)] = inst_40263);

(statearr_40269_40915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (1))){
var inst_40230 = (new Array(n));
var inst_40231 = inst_40230;
var inst_40232 = (0);
var state_40267__$1 = (function (){var statearr_40270 = state_40267;
(statearr_40270[(7)] = inst_40231);

(statearr_40270[(8)] = inst_40232);

return statearr_40270;
})();
var statearr_40271_40916 = state_40267__$1;
(statearr_40271_40916[(2)] = null);

(statearr_40271_40916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (4))){
var inst_40235 = (state_40267[(9)]);
var inst_40235__$1 = (state_40267[(2)]);
var inst_40236 = (inst_40235__$1 == null);
var inst_40237 = cljs.core.not(inst_40236);
var state_40267__$1 = (function (){var statearr_40272 = state_40267;
(statearr_40272[(9)] = inst_40235__$1);

return statearr_40272;
})();
if(inst_40237){
var statearr_40273_40917 = state_40267__$1;
(statearr_40273_40917[(1)] = (5));

} else {
var statearr_40274_40918 = state_40267__$1;
(statearr_40274_40918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (15))){
var inst_40257 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
var statearr_40275_40919 = state_40267__$1;
(statearr_40275_40919[(2)] = inst_40257);

(statearr_40275_40919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (13))){
var state_40267__$1 = state_40267;
var statearr_40276_40920 = state_40267__$1;
(statearr_40276_40920[(2)] = null);

(statearr_40276_40920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (6))){
var inst_40232 = (state_40267[(8)]);
var inst_40253 = (inst_40232 > (0));
var state_40267__$1 = state_40267;
if(cljs.core.truth_(inst_40253)){
var statearr_40277_40921 = state_40267__$1;
(statearr_40277_40921[(1)] = (12));

} else {
var statearr_40278_40922 = state_40267__$1;
(statearr_40278_40922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (3))){
var inst_40265 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40267__$1,inst_40265);
} else {
if((state_val_40268 === (12))){
var inst_40231 = (state_40267[(7)]);
var inst_40255 = cljs.core.vec(inst_40231);
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40267__$1,(15),out,inst_40255);
} else {
if((state_val_40268 === (2))){
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40267__$1,(4),ch);
} else {
if((state_val_40268 === (11))){
var inst_40247 = (state_40267[(2)]);
var inst_40248 = (new Array(n));
var inst_40231 = inst_40248;
var inst_40232 = (0);
var state_40267__$1 = (function (){var statearr_40279 = state_40267;
(statearr_40279[(10)] = inst_40247);

(statearr_40279[(7)] = inst_40231);

(statearr_40279[(8)] = inst_40232);

return statearr_40279;
})();
var statearr_40280_40923 = state_40267__$1;
(statearr_40280_40923[(2)] = null);

(statearr_40280_40923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (9))){
var inst_40231 = (state_40267[(7)]);
var inst_40245 = cljs.core.vec(inst_40231);
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40267__$1,(11),out,inst_40245);
} else {
if((state_val_40268 === (5))){
var inst_40231 = (state_40267[(7)]);
var inst_40232 = (state_40267[(8)]);
var inst_40240 = (state_40267[(11)]);
var inst_40235 = (state_40267[(9)]);
var inst_40239 = (inst_40231[inst_40232] = inst_40235);
var inst_40240__$1 = (inst_40232 + (1));
var inst_40241 = (inst_40240__$1 < n);
var state_40267__$1 = (function (){var statearr_40281 = state_40267;
(statearr_40281[(12)] = inst_40239);

(statearr_40281[(11)] = inst_40240__$1);

return statearr_40281;
})();
if(cljs.core.truth_(inst_40241)){
var statearr_40282_40924 = state_40267__$1;
(statearr_40282_40924[(1)] = (8));

} else {
var statearr_40283_40925 = state_40267__$1;
(statearr_40283_40925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (14))){
var inst_40260 = (state_40267[(2)]);
var inst_40261 = cljs.core.async.close_BANG_(out);
var state_40267__$1 = (function (){var statearr_40285 = state_40267;
(statearr_40285[(13)] = inst_40260);

return statearr_40285;
})();
var statearr_40286_40926 = state_40267__$1;
(statearr_40286_40926[(2)] = inst_40261);

(statearr_40286_40926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (10))){
var inst_40251 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
var statearr_40287_40927 = state_40267__$1;
(statearr_40287_40927[(2)] = inst_40251);

(statearr_40287_40927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (8))){
var inst_40231 = (state_40267[(7)]);
var inst_40240 = (state_40267[(11)]);
var tmp40284 = inst_40231;
var inst_40231__$1 = tmp40284;
var inst_40232 = inst_40240;
var state_40267__$1 = (function (){var statearr_40288 = state_40267;
(statearr_40288[(7)] = inst_40231__$1);

(statearr_40288[(8)] = inst_40232);

return statearr_40288;
})();
var statearr_40289_40928 = state_40267__$1;
(statearr_40289_40928[(2)] = null);

(statearr_40289_40928[(1)] = (2));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_40290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40290[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_40290[(1)] = (1));

return statearr_40290;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_40267){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_40267);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40291){if((e40291 instanceof Object)){
var ex__38792__auto__ = e40291;
var statearr_40292_40929 = state_40267;
(statearr_40292_40929[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40930 = state_40267;
state_40267 = G__40930;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_40267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_40267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40293 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40293[(6)] = c__38856__auto___40914);

return statearr_40293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40295 = arguments.length;
switch (G__40295) {
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
var c__38856__auto___40932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_40337){
var state_val_40338 = (state_40337[(1)]);
if((state_val_40338 === (7))){
var inst_40333 = (state_40337[(2)]);
var state_40337__$1 = state_40337;
var statearr_40339_40933 = state_40337__$1;
(statearr_40339_40933[(2)] = inst_40333);

(statearr_40339_40933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (1))){
var inst_40296 = [];
var inst_40297 = inst_40296;
var inst_40298 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40337__$1 = (function (){var statearr_40340 = state_40337;
(statearr_40340[(7)] = inst_40297);

(statearr_40340[(8)] = inst_40298);

return statearr_40340;
})();
var statearr_40341_40934 = state_40337__$1;
(statearr_40341_40934[(2)] = null);

(statearr_40341_40934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (4))){
var inst_40301 = (state_40337[(9)]);
var inst_40301__$1 = (state_40337[(2)]);
var inst_40302 = (inst_40301__$1 == null);
var inst_40303 = cljs.core.not(inst_40302);
var state_40337__$1 = (function (){var statearr_40342 = state_40337;
(statearr_40342[(9)] = inst_40301__$1);

return statearr_40342;
})();
if(inst_40303){
var statearr_40343_40937 = state_40337__$1;
(statearr_40343_40937[(1)] = (5));

} else {
var statearr_40344_40938 = state_40337__$1;
(statearr_40344_40938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (15))){
var inst_40327 = (state_40337[(2)]);
var state_40337__$1 = state_40337;
var statearr_40345_40939 = state_40337__$1;
(statearr_40345_40939[(2)] = inst_40327);

(statearr_40345_40939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (13))){
var state_40337__$1 = state_40337;
var statearr_40346_40940 = state_40337__$1;
(statearr_40346_40940[(2)] = null);

(statearr_40346_40940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (6))){
var inst_40297 = (state_40337[(7)]);
var inst_40322 = inst_40297.length;
var inst_40323 = (inst_40322 > (0));
var state_40337__$1 = state_40337;
if(cljs.core.truth_(inst_40323)){
var statearr_40347_40941 = state_40337__$1;
(statearr_40347_40941[(1)] = (12));

} else {
var statearr_40348_40942 = state_40337__$1;
(statearr_40348_40942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (3))){
var inst_40335 = (state_40337[(2)]);
var state_40337__$1 = state_40337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40337__$1,inst_40335);
} else {
if((state_val_40338 === (12))){
var inst_40297 = (state_40337[(7)]);
var inst_40325 = cljs.core.vec(inst_40297);
var state_40337__$1 = state_40337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40337__$1,(15),out,inst_40325);
} else {
if((state_val_40338 === (2))){
var state_40337__$1 = state_40337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40337__$1,(4),ch);
} else {
if((state_val_40338 === (11))){
var inst_40305 = (state_40337[(10)]);
var inst_40301 = (state_40337[(9)]);
var inst_40315 = (state_40337[(2)]);
var inst_40316 = [];
var inst_40317 = inst_40316.push(inst_40301);
var inst_40297 = inst_40316;
var inst_40298 = inst_40305;
var state_40337__$1 = (function (){var statearr_40349 = state_40337;
(statearr_40349[(11)] = inst_40315);

(statearr_40349[(7)] = inst_40297);

(statearr_40349[(12)] = inst_40317);

(statearr_40349[(8)] = inst_40298);

return statearr_40349;
})();
var statearr_40350_40946 = state_40337__$1;
(statearr_40350_40946[(2)] = null);

(statearr_40350_40946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (9))){
var inst_40297 = (state_40337[(7)]);
var inst_40313 = cljs.core.vec(inst_40297);
var state_40337__$1 = state_40337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40337__$1,(11),out,inst_40313);
} else {
if((state_val_40338 === (5))){
var inst_40305 = (state_40337[(10)]);
var inst_40298 = (state_40337[(8)]);
var inst_40301 = (state_40337[(9)]);
var inst_40305__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40301) : f.call(null,inst_40301));
var inst_40306 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40305__$1,inst_40298);
var inst_40307 = cljs.core.keyword_identical_QMARK_(inst_40298,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40308 = ((inst_40306) || (inst_40307));
var state_40337__$1 = (function (){var statearr_40351 = state_40337;
(statearr_40351[(10)] = inst_40305__$1);

return statearr_40351;
})();
if(cljs.core.truth_(inst_40308)){
var statearr_40352_40948 = state_40337__$1;
(statearr_40352_40948[(1)] = (8));

} else {
var statearr_40353_40949 = state_40337__$1;
(statearr_40353_40949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (14))){
var inst_40330 = (state_40337[(2)]);
var inst_40331 = cljs.core.async.close_BANG_(out);
var state_40337__$1 = (function (){var statearr_40355 = state_40337;
(statearr_40355[(13)] = inst_40330);

return statearr_40355;
})();
var statearr_40356_40950 = state_40337__$1;
(statearr_40356_40950[(2)] = inst_40331);

(statearr_40356_40950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (10))){
var inst_40320 = (state_40337[(2)]);
var state_40337__$1 = state_40337;
var statearr_40357_40951 = state_40337__$1;
(statearr_40357_40951[(2)] = inst_40320);

(statearr_40357_40951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40338 === (8))){
var inst_40305 = (state_40337[(10)]);
var inst_40297 = (state_40337[(7)]);
var inst_40301 = (state_40337[(9)]);
var inst_40310 = inst_40297.push(inst_40301);
var tmp40354 = inst_40297;
var inst_40297__$1 = tmp40354;
var inst_40298 = inst_40305;
var state_40337__$1 = (function (){var statearr_40358 = state_40337;
(statearr_40358[(14)] = inst_40310);

(statearr_40358[(7)] = inst_40297__$1);

(statearr_40358[(8)] = inst_40298);

return statearr_40358;
})();
var statearr_40359_40952 = state_40337__$1;
(statearr_40359_40952[(2)] = null);

(statearr_40359_40952[(1)] = (2));


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
var cljs$core$async$state_machine__38789__auto__ = null;
var cljs$core$async$state_machine__38789__auto____0 = (function (){
var statearr_40360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40360[(0)] = cljs$core$async$state_machine__38789__auto__);

(statearr_40360[(1)] = (1));

return statearr_40360;
});
var cljs$core$async$state_machine__38789__auto____1 = (function (state_40337){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_40337);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e40361){if((e40361 instanceof Object)){
var ex__38792__auto__ = e40361;
var statearr_40362_40953 = state_40337;
(statearr_40362_40953[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40954 = state_40337;
state_40337 = G__40954;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs$core$async$state_machine__38789__auto__ = function(state_40337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38789__auto____1.call(this,state_40337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38789__auto____0;
cljs$core$async$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38789__auto____1;
return cljs$core$async$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_40363 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_40363[(6)] = c__38856__auto___40932);

return statearr_40363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
