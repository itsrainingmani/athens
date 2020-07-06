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
var G__37057 = arguments.length;
switch (G__37057) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37058 = (function (f,blockable,meta37059){
this.f = f;
this.blockable = blockable;
this.meta37059 = meta37059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37060,meta37059__$1){
var self__ = this;
var _37060__$1 = this;
return (new cljs.core.async.t_cljs$core$async37058(self__.f,self__.blockable,meta37059__$1));
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37060){
var self__ = this;
var _37060__$1 = this;
return self__.meta37059;
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37059","meta37059",773853717,null)], null);
}));

(cljs.core.async.t_cljs$core$async37058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37058");

(cljs.core.async.t_cljs$core$async37058.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37058.
 */
cljs.core.async.__GT_t_cljs$core$async37058 = (function cljs$core$async$__GT_t_cljs$core$async37058(f__$1,blockable__$1,meta37059){
return (new cljs.core.async.t_cljs$core$async37058(f__$1,blockable__$1,meta37059));
});

}

return (new cljs.core.async.t_cljs$core$async37058(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37065 = arguments.length;
switch (G__37065) {
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
var G__37067 = arguments.length;
switch (G__37067) {
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
var G__37069 = arguments.length;
switch (G__37069) {
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
var val_38521 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38521) : fn1.call(null,val_38521));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38521) : fn1.call(null,val_38521));
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
var G__37071 = arguments.length;
switch (G__37071) {
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
var n__4666__auto___38532 = n;
var x_38533 = (0);
while(true){
if((x_38533 < n__4666__auto___38532)){
(a[x_38533] = x_38533);

var G__38534 = (x_38533 + (1));
x_38533 = G__38534;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37072 = (function (flag,meta37073){
this.flag = flag;
this.meta37073 = meta37073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37074,meta37073__$1){
var self__ = this;
var _37074__$1 = this;
return (new cljs.core.async.t_cljs$core$async37072(self__.flag,meta37073__$1));
}));

(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37074){
var self__ = this;
var _37074__$1 = this;
return self__.meta37073;
}));

(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37073","meta37073",-861559977,null)], null);
}));

(cljs.core.async.t_cljs$core$async37072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37072");

(cljs.core.async.t_cljs$core$async37072.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37072.
 */
cljs.core.async.__GT_t_cljs$core$async37072 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37072(flag__$1,meta37073){
return (new cljs.core.async.t_cljs$core$async37072(flag__$1,meta37073));
});

}

return (new cljs.core.async.t_cljs$core$async37072(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37075 = (function (flag,cb,meta37076){
this.flag = flag;
this.cb = cb;
this.meta37076 = meta37076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37077,meta37076__$1){
var self__ = this;
var _37077__$1 = this;
return (new cljs.core.async.t_cljs$core$async37075(self__.flag,self__.cb,meta37076__$1));
}));

(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37077){
var self__ = this;
var _37077__$1 = this;
return self__.meta37076;
}));

(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37076","meta37076",2069953740,null)], null);
}));

(cljs.core.async.t_cljs$core$async37075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37075");

(cljs.core.async.t_cljs$core$async37075.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37075.
 */
cljs.core.async.__GT_t_cljs$core$async37075 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37075(flag__$1,cb__$1,meta37076){
return (new cljs.core.async.t_cljs$core$async37075(flag__$1,cb__$1,meta37076));
});

}

return (new cljs.core.async.t_cljs$core$async37075(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37082_SHARP_){
var G__37086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37082_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37086) : fret.call(null,G__37086));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37083_SHARP_){
var G__37087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37083_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37087) : fret.call(null,G__37087));
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
var G__38539 = (i + (1));
i = G__38539;
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
var len__4789__auto___38540 = arguments.length;
var i__4790__auto___38541 = (0);
while(true){
if((i__4790__auto___38541 < len__4789__auto___38540)){
args__4795__auto__.push((arguments[i__4790__auto___38541]));

var G__38542 = (i__4790__auto___38541 + (1));
i__4790__auto___38541 = G__38542;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37092){
var map__37093 = p__37092;
var map__37093__$1 = (((((!((map__37093 == null))))?(((((map__37093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37093):map__37093);
var opts = map__37093__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37090){
var G__37091 = cljs.core.first(seq37090);
var seq37090__$1 = cljs.core.next(seq37090);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37091,seq37090__$1);
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
var G__37098 = arguments.length;
switch (G__37098) {
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
var c__36999__auto___38550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37126_38553 = state_37124__$1;
(statearr_37126_38553[(2)] = inst_37120);

(statearr_37126_38553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var state_37124__$1 = state_37124;
var statearr_37127_38554 = state_37124__$1;
(statearr_37127_38554[(2)] = null);

(statearr_37127_38554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37103 = (state_37124[(7)]);
var inst_37103__$1 = (state_37124[(2)]);
var inst_37104 = (inst_37103__$1 == null);
var state_37124__$1 = (function (){var statearr_37128 = state_37124;
(statearr_37128[(7)] = inst_37103__$1);

return statearr_37128;
})();
if(cljs.core.truth_(inst_37104)){
var statearr_37129_38556 = state_37124__$1;
(statearr_37129_38556[(1)] = (5));

} else {
var statearr_37130_38557 = state_37124__$1;
(statearr_37130_38557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var state_37124__$1 = state_37124;
var statearr_37131_38561 = state_37124__$1;
(statearr_37131_38561[(2)] = null);

(statearr_37131_38561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37103 = (state_37124[(7)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37124__$1,(11),to,inst_37103);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var state_37124__$1 = state_37124;
var statearr_37132_38562 = state_37124__$1;
(statearr_37132_38562[(2)] = null);

(statearr_37132_38562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (2))){
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37124__$1,(4),from);
} else {
if((state_val_37125 === (11))){
var inst_37113 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37113)){
var statearr_37133_38564 = state_37124__$1;
(statearr_37133_38564[(1)] = (12));

} else {
var statearr_37134_38565 = state_37124__$1;
(statearr_37134_38565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var state_37124__$1 = state_37124;
var statearr_37135_38566 = state_37124__$1;
(statearr_37135_38566[(2)] = null);

(statearr_37135_38566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (5))){
var state_37124__$1 = state_37124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37136_38567 = state_37124__$1;
(statearr_37136_38567[(1)] = (8));

} else {
var statearr_37137_38568 = state_37124__$1;
(statearr_37137_38568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_37118 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37138_38569 = state_37124__$1;
(statearr_37138_38569[(2)] = inst_37118);

(statearr_37138_38569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37110 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37139_38570 = state_37124__$1;
(statearr_37139_38570[(2)] = inst_37110);

(statearr_37139_38570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37107 = cljs.core.async.close_BANG_(to);
var state_37124__$1 = state_37124;
var statearr_37140_38572 = state_37124__$1;
(statearr_37140_38572[(2)] = inst_37107);

(statearr_37140_38572[(1)] = (10));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_37141 = [null,null,null,null,null,null,null,null];
(statearr_37141[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_37141[(1)] = (1));

return statearr_37141;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_37124){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37124);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37142){if((e37142 instanceof Object)){
var ex__36935__auto__ = e37142;
var statearr_37143_38575 = state_37124;
(statearr_37143_38575[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38576 = state_37124;
state_37124 = G__38576;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37144 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37144[(6)] = c__36999__auto___38550);

return statearr_37144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var process = (function (p__37145){
var vec__37146 = p__37145;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(1),null);
var job = vec__37146;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36999__auto___38577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37153){
var state_val_37154 = (state_37153[(1)]);
if((state_val_37154 === (1))){
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37153__$1,(2),res,v);
} else {
if((state_val_37154 === (2))){
var inst_37150 = (state_37153[(2)]);
var inst_37151 = cljs.core.async.close_BANG_(res);
var state_37153__$1 = (function (){var statearr_37155 = state_37153;
(statearr_37155[(7)] = inst_37150);

return statearr_37155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37153__$1,inst_37151);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_37156 = [null,null,null,null,null,null,null,null];
(statearr_37156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__);

(statearr_37156[(1)] = (1));

return statearr_37156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1 = (function (state_37153){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37153);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37157){if((e37157 instanceof Object)){
var ex__36935__auto__ = e37157;
var statearr_37158_38578 = state_37153;
(statearr_37158_38578[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38579 = state_37153;
state_37153 = G__38579;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = function(state_37153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1.call(this,state_37153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37159 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37159[(6)] = c__36999__auto___38577);

return statearr_37159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37160){
var vec__37161 = p__37160;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161,(1),null);
var job = vec__37161;
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
var n__4666__auto___38580 = n;
var __38581 = (0);
while(true){
if((__38581 < n__4666__auto___38580)){
var G__37164_38582 = type;
var G__37164_38583__$1 = (((G__37164_38582 instanceof cljs.core.Keyword))?G__37164_38582.fqn:null);
switch (G__37164_38583__$1) {
case "compute":
var c__36999__auto___38585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38581,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = ((function (__38581,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function (state_37177){
var state_val_37178 = (state_37177[(1)]);
if((state_val_37178 === (1))){
var state_37177__$1 = state_37177;
var statearr_37179_38586 = state_37177__$1;
(statearr_37179_38586[(2)] = null);

(statearr_37179_38586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (2))){
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37177__$1,(4),jobs);
} else {
if((state_val_37178 === (3))){
var inst_37175 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37177__$1,inst_37175);
} else {
if((state_val_37178 === (4))){
var inst_37167 = (state_37177[(2)]);
var inst_37168 = process(inst_37167);
var state_37177__$1 = state_37177;
if(cljs.core.truth_(inst_37168)){
var statearr_37180_38595 = state_37177__$1;
(statearr_37180_38595[(1)] = (5));

} else {
var statearr_37181_38600 = state_37177__$1;
(statearr_37181_38600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (5))){
var state_37177__$1 = state_37177;
var statearr_37182_38601 = state_37177__$1;
(statearr_37182_38601[(2)] = null);

(statearr_37182_38601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (6))){
var state_37177__$1 = state_37177;
var statearr_37183_38602 = state_37177__$1;
(statearr_37183_38602[(2)] = null);

(statearr_37183_38602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (7))){
var inst_37173 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
var statearr_37184_38603 = state_37177__$1;
(statearr_37184_38603[(2)] = inst_37173);

(statearr_37184_38603[(1)] = (3));


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
});})(__38581,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
;
return ((function (__38581,switch__36931__auto__,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_37185 = [null,null,null,null,null,null,null];
(statearr_37185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__);

(statearr_37185[(1)] = (1));

return statearr_37185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1 = (function (state_37177){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37177);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37186){if((e37186 instanceof Object)){
var ex__36935__auto__ = e37186;
var statearr_37187_38605 = state_37177;
(statearr_37187_38605[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38607 = state_37177;
state_37177 = G__38607;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = function(state_37177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1.call(this,state_37177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__;
})()
;})(__38581,switch__36931__auto__,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
})();
var state__37001__auto__ = (function (){var statearr_37188 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37188[(6)] = c__36999__auto___38585);

return statearr_37188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
});})(__38581,c__36999__auto___38585,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
);


break;
case "async":
var c__36999__auto___38608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38581,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = ((function (__38581,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function (state_37201){
var state_val_37202 = (state_37201[(1)]);
if((state_val_37202 === (1))){
var state_37201__$1 = state_37201;
var statearr_37203_38610 = state_37201__$1;
(statearr_37203_38610[(2)] = null);

(statearr_37203_38610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37202 === (2))){
var state_37201__$1 = state_37201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37201__$1,(4),jobs);
} else {
if((state_val_37202 === (3))){
var inst_37199 = (state_37201[(2)]);
var state_37201__$1 = state_37201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37201__$1,inst_37199);
} else {
if((state_val_37202 === (4))){
var inst_37191 = (state_37201[(2)]);
var inst_37192 = async(inst_37191);
var state_37201__$1 = state_37201;
if(cljs.core.truth_(inst_37192)){
var statearr_37204_38612 = state_37201__$1;
(statearr_37204_38612[(1)] = (5));

} else {
var statearr_37205_38613 = state_37201__$1;
(statearr_37205_38613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37202 === (5))){
var state_37201__$1 = state_37201;
var statearr_37206_38614 = state_37201__$1;
(statearr_37206_38614[(2)] = null);

(statearr_37206_38614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37202 === (6))){
var state_37201__$1 = state_37201;
var statearr_37207_38615 = state_37201__$1;
(statearr_37207_38615[(2)] = null);

(statearr_37207_38615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37202 === (7))){
var inst_37197 = (state_37201[(2)]);
var state_37201__$1 = state_37201;
var statearr_37208_38616 = state_37201__$1;
(statearr_37208_38616[(2)] = inst_37197);

(statearr_37208_38616[(1)] = (3));


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
});})(__38581,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
;
return ((function (__38581,switch__36931__auto__,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_37209 = [null,null,null,null,null,null,null];
(statearr_37209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__);

(statearr_37209[(1)] = (1));

return statearr_37209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1 = (function (state_37201){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37201);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37210){if((e37210 instanceof Object)){
var ex__36935__auto__ = e37210;
var statearr_37211_38617 = state_37201;
(statearr_37211_38617[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38618 = state_37201;
state_37201 = G__38618;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = function(state_37201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1.call(this,state_37201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__;
})()
;})(__38581,switch__36931__auto__,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
})();
var state__37001__auto__ = (function (){var statearr_37212 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37212[(6)] = c__36999__auto___38608);

return statearr_37212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
});})(__38581,c__36999__auto___38608,G__37164_38582,G__37164_38583__$1,n__4666__auto___38580,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37164_38583__$1)].join('')));

}

var G__38619 = (__38581 + (1));
__38581 = G__38619;
continue;
} else {
}
break;
}

var c__36999__auto___38620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37234){
var state_val_37235 = (state_37234[(1)]);
if((state_val_37235 === (7))){
var inst_37230 = (state_37234[(2)]);
var state_37234__$1 = state_37234;
var statearr_37236_38621 = state_37234__$1;
(statearr_37236_38621[(2)] = inst_37230);

(statearr_37236_38621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (1))){
var state_37234__$1 = state_37234;
var statearr_37237_38622 = state_37234__$1;
(statearr_37237_38622[(2)] = null);

(statearr_37237_38622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (4))){
var inst_37215 = (state_37234[(7)]);
var inst_37215__$1 = (state_37234[(2)]);
var inst_37216 = (inst_37215__$1 == null);
var state_37234__$1 = (function (){var statearr_37238 = state_37234;
(statearr_37238[(7)] = inst_37215__$1);

return statearr_37238;
})();
if(cljs.core.truth_(inst_37216)){
var statearr_37239_38623 = state_37234__$1;
(statearr_37239_38623[(1)] = (5));

} else {
var statearr_37240_38624 = state_37234__$1;
(statearr_37240_38624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (6))){
var inst_37220 = (state_37234[(8)]);
var inst_37215 = (state_37234[(7)]);
var inst_37220__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37221 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37222 = [inst_37215,inst_37220__$1];
var inst_37223 = (new cljs.core.PersistentVector(null,2,(5),inst_37221,inst_37222,null));
var state_37234__$1 = (function (){var statearr_37241 = state_37234;
(statearr_37241[(8)] = inst_37220__$1);

return statearr_37241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37234__$1,(8),jobs,inst_37223);
} else {
if((state_val_37235 === (3))){
var inst_37232 = (state_37234[(2)]);
var state_37234__$1 = state_37234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37234__$1,inst_37232);
} else {
if((state_val_37235 === (2))){
var state_37234__$1 = state_37234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37234__$1,(4),from);
} else {
if((state_val_37235 === (9))){
var inst_37227 = (state_37234[(2)]);
var state_37234__$1 = (function (){var statearr_37242 = state_37234;
(statearr_37242[(9)] = inst_37227);

return statearr_37242;
})();
var statearr_37243_38625 = state_37234__$1;
(statearr_37243_38625[(2)] = null);

(statearr_37243_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (5))){
var inst_37218 = cljs.core.async.close_BANG_(jobs);
var state_37234__$1 = state_37234;
var statearr_37244_38626 = state_37234__$1;
(statearr_37244_38626[(2)] = inst_37218);

(statearr_37244_38626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (8))){
var inst_37220 = (state_37234[(8)]);
var inst_37225 = (state_37234[(2)]);
var state_37234__$1 = (function (){var statearr_37245 = state_37234;
(statearr_37245[(10)] = inst_37225);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37234__$1,(9),results,inst_37220);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_37246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__);

(statearr_37246[(1)] = (1));

return statearr_37246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1 = (function (state_37234){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37234);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37247){if((e37247 instanceof Object)){
var ex__36935__auto__ = e37247;
var statearr_37248_38627 = state_37234;
(statearr_37248_38627[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38628 = state_37234;
state_37234 = G__38628;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = function(state_37234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1.call(this,state_37234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37249 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37249[(6)] = c__36999__auto___38620);

return statearr_37249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37287){
var state_val_37288 = (state_37287[(1)]);
if((state_val_37288 === (7))){
var inst_37283 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37289_38629 = state_37287__$1;
(statearr_37289_38629[(2)] = inst_37283);

(statearr_37289_38629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (20))){
var state_37287__$1 = state_37287;
var statearr_37290_38630 = state_37287__$1;
(statearr_37290_38630[(2)] = null);

(statearr_37290_38630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (1))){
var state_37287__$1 = state_37287;
var statearr_37291_38631 = state_37287__$1;
(statearr_37291_38631[(2)] = null);

(statearr_37291_38631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (4))){
var inst_37252 = (state_37287[(7)]);
var inst_37252__$1 = (state_37287[(2)]);
var inst_37253 = (inst_37252__$1 == null);
var state_37287__$1 = (function (){var statearr_37292 = state_37287;
(statearr_37292[(7)] = inst_37252__$1);

return statearr_37292;
})();
if(cljs.core.truth_(inst_37253)){
var statearr_37293_38632 = state_37287__$1;
(statearr_37293_38632[(1)] = (5));

} else {
var statearr_37294_38633 = state_37287__$1;
(statearr_37294_38633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (15))){
var inst_37265 = (state_37287[(8)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37287__$1,(18),to,inst_37265);
} else {
if((state_val_37288 === (21))){
var inst_37278 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37295_38634 = state_37287__$1;
(statearr_37295_38634[(2)] = inst_37278);

(statearr_37295_38634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (13))){
var inst_37280 = (state_37287[(2)]);
var state_37287__$1 = (function (){var statearr_37296 = state_37287;
(statearr_37296[(9)] = inst_37280);

return statearr_37296;
})();
var statearr_37297_38635 = state_37287__$1;
(statearr_37297_38635[(2)] = null);

(statearr_37297_38635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (6))){
var inst_37252 = (state_37287[(7)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37287__$1,(11),inst_37252);
} else {
if((state_val_37288 === (17))){
var inst_37273 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
if(cljs.core.truth_(inst_37273)){
var statearr_37298_38636 = state_37287__$1;
(statearr_37298_38636[(1)] = (19));

} else {
var statearr_37299_38637 = state_37287__$1;
(statearr_37299_38637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (3))){
var inst_37285 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37287__$1,inst_37285);
} else {
if((state_val_37288 === (12))){
var inst_37262 = (state_37287[(10)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37287__$1,(14),inst_37262);
} else {
if((state_val_37288 === (2))){
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37287__$1,(4),results);
} else {
if((state_val_37288 === (19))){
var state_37287__$1 = state_37287;
var statearr_37300_38638 = state_37287__$1;
(statearr_37300_38638[(2)] = null);

(statearr_37300_38638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (11))){
var inst_37262 = (state_37287[(2)]);
var state_37287__$1 = (function (){var statearr_37301 = state_37287;
(statearr_37301[(10)] = inst_37262);

return statearr_37301;
})();
var statearr_37302_38639 = state_37287__$1;
(statearr_37302_38639[(2)] = null);

(statearr_37302_38639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (9))){
var state_37287__$1 = state_37287;
var statearr_37303_38640 = state_37287__$1;
(statearr_37303_38640[(2)] = null);

(statearr_37303_38640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (5))){
var state_37287__$1 = state_37287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37304_38641 = state_37287__$1;
(statearr_37304_38641[(1)] = (8));

} else {
var statearr_37305_38642 = state_37287__$1;
(statearr_37305_38642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (14))){
var inst_37265 = (state_37287[(8)]);
var inst_37265__$1 = (state_37287[(2)]);
var inst_37266 = (inst_37265__$1 == null);
var inst_37267 = cljs.core.not(inst_37266);
var state_37287__$1 = (function (){var statearr_37306 = state_37287;
(statearr_37306[(8)] = inst_37265__$1);

return statearr_37306;
})();
if(inst_37267){
var statearr_37307_38643 = state_37287__$1;
(statearr_37307_38643[(1)] = (15));

} else {
var statearr_37308_38644 = state_37287__$1;
(statearr_37308_38644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (16))){
var state_37287__$1 = state_37287;
var statearr_37309_38645 = state_37287__$1;
(statearr_37309_38645[(2)] = false);

(statearr_37309_38645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (10))){
var inst_37259 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37310_38646 = state_37287__$1;
(statearr_37310_38646[(2)] = inst_37259);

(statearr_37310_38646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (18))){
var inst_37270 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37311_38647 = state_37287__$1;
(statearr_37311_38647[(2)] = inst_37270);

(statearr_37311_38647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (8))){
var inst_37256 = cljs.core.async.close_BANG_(to);
var state_37287__$1 = state_37287;
var statearr_37312_38648 = state_37287__$1;
(statearr_37312_38648[(2)] = inst_37256);

(statearr_37312_38648[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_37313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__);

(statearr_37313[(1)] = (1));

return statearr_37313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1 = (function (state_37287){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37287);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37314){if((e37314 instanceof Object)){
var ex__36935__auto__ = e37314;
var statearr_37315_38649 = state_37287;
(statearr_37315_38649[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38650 = state_37287;
state_37287 = G__38650;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__ = function(state_37287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1.call(this,state_37287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37316 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37316[(6)] = c__36999__auto__);

return statearr_37316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
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
var G__37318 = arguments.length;
switch (G__37318) {
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
var G__37320 = arguments.length;
switch (G__37320) {
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
var G__37322 = arguments.length;
switch (G__37322) {
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
var c__36999__auto___38654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37348){
var state_val_37349 = (state_37348[(1)]);
if((state_val_37349 === (7))){
var inst_37344 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37350_38655 = state_37348__$1;
(statearr_37350_38655[(2)] = inst_37344);

(statearr_37350_38655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (1))){
var state_37348__$1 = state_37348;
var statearr_37351_38656 = state_37348__$1;
(statearr_37351_38656[(2)] = null);

(statearr_37351_38656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (4))){
var inst_37325 = (state_37348[(7)]);
var inst_37325__$1 = (state_37348[(2)]);
var inst_37326 = (inst_37325__$1 == null);
var state_37348__$1 = (function (){var statearr_37352 = state_37348;
(statearr_37352[(7)] = inst_37325__$1);

return statearr_37352;
})();
if(cljs.core.truth_(inst_37326)){
var statearr_37353_38657 = state_37348__$1;
(statearr_37353_38657[(1)] = (5));

} else {
var statearr_37354_38658 = state_37348__$1;
(statearr_37354_38658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (13))){
var state_37348__$1 = state_37348;
var statearr_37355_38659 = state_37348__$1;
(statearr_37355_38659[(2)] = null);

(statearr_37355_38659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (6))){
var inst_37325 = (state_37348[(7)]);
var inst_37331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37325) : p.call(null,inst_37325));
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37331)){
var statearr_37356_38660 = state_37348__$1;
(statearr_37356_38660[(1)] = (9));

} else {
var statearr_37357_38661 = state_37348__$1;
(statearr_37357_38661[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (3))){
var inst_37346 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37348__$1,inst_37346);
} else {
if((state_val_37349 === (12))){
var state_37348__$1 = state_37348;
var statearr_37358_38662 = state_37348__$1;
(statearr_37358_38662[(2)] = null);

(statearr_37358_38662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (2))){
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37348__$1,(4),ch);
} else {
if((state_val_37349 === (11))){
var inst_37325 = (state_37348[(7)]);
var inst_37335 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37348__$1,(8),inst_37335,inst_37325);
} else {
if((state_val_37349 === (9))){
var state_37348__$1 = state_37348;
var statearr_37359_38663 = state_37348__$1;
(statearr_37359_38663[(2)] = tc);

(statearr_37359_38663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (5))){
var inst_37328 = cljs.core.async.close_BANG_(tc);
var inst_37329 = cljs.core.async.close_BANG_(fc);
var state_37348__$1 = (function (){var statearr_37360 = state_37348;
(statearr_37360[(8)] = inst_37328);

return statearr_37360;
})();
var statearr_37361_38664 = state_37348__$1;
(statearr_37361_38664[(2)] = inst_37329);

(statearr_37361_38664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (14))){
var inst_37342 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37362_38665 = state_37348__$1;
(statearr_37362_38665[(2)] = inst_37342);

(statearr_37362_38665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (10))){
var state_37348__$1 = state_37348;
var statearr_37363_38666 = state_37348__$1;
(statearr_37363_38666[(2)] = fc);

(statearr_37363_38666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (8))){
var inst_37337 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37337)){
var statearr_37364_38667 = state_37348__$1;
(statearr_37364_38667[(1)] = (12));

} else {
var statearr_37365_38668 = state_37348__$1;
(statearr_37365_38668[(1)] = (13));

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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_37366 = [null,null,null,null,null,null,null,null,null];
(statearr_37366[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_37366[(1)] = (1));

return statearr_37366;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_37348){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37348);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37367){if((e37367 instanceof Object)){
var ex__36935__auto__ = e37367;
var statearr_37368_38669 = state_37348;
(statearr_37368_38669[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38670 = state_37348;
state_37348 = G__38670;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_37348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_37348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37369 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37369[(6)] = c__36999__auto___38654);

return statearr_37369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37390){
var state_val_37391 = (state_37390[(1)]);
if((state_val_37391 === (7))){
var inst_37386 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37392_38671 = state_37390__$1;
(statearr_37392_38671[(2)] = inst_37386);

(statearr_37392_38671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (1))){
var inst_37370 = init;
var state_37390__$1 = (function (){var statearr_37393 = state_37390;
(statearr_37393[(7)] = inst_37370);

return statearr_37393;
})();
var statearr_37394_38672 = state_37390__$1;
(statearr_37394_38672[(2)] = null);

(statearr_37394_38672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (4))){
var inst_37373 = (state_37390[(8)]);
var inst_37373__$1 = (state_37390[(2)]);
var inst_37374 = (inst_37373__$1 == null);
var state_37390__$1 = (function (){var statearr_37395 = state_37390;
(statearr_37395[(8)] = inst_37373__$1);

return statearr_37395;
})();
if(cljs.core.truth_(inst_37374)){
var statearr_37396_38673 = state_37390__$1;
(statearr_37396_38673[(1)] = (5));

} else {
var statearr_37397_38674 = state_37390__$1;
(statearr_37397_38674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (6))){
var inst_37377 = (state_37390[(9)]);
var inst_37370 = (state_37390[(7)]);
var inst_37373 = (state_37390[(8)]);
var inst_37377__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37370,inst_37373) : f.call(null,inst_37370,inst_37373));
var inst_37378 = cljs.core.reduced_QMARK_(inst_37377__$1);
var state_37390__$1 = (function (){var statearr_37398 = state_37390;
(statearr_37398[(9)] = inst_37377__$1);

return statearr_37398;
})();
if(inst_37378){
var statearr_37399_38675 = state_37390__$1;
(statearr_37399_38675[(1)] = (8));

} else {
var statearr_37400_38676 = state_37390__$1;
(statearr_37400_38676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (3))){
var inst_37388 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37390__$1,inst_37388);
} else {
if((state_val_37391 === (2))){
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37390__$1,(4),ch);
} else {
if((state_val_37391 === (9))){
var inst_37377 = (state_37390[(9)]);
var inst_37370 = inst_37377;
var state_37390__$1 = (function (){var statearr_37401 = state_37390;
(statearr_37401[(7)] = inst_37370);

return statearr_37401;
})();
var statearr_37402_38677 = state_37390__$1;
(statearr_37402_38677[(2)] = null);

(statearr_37402_38677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (5))){
var inst_37370 = (state_37390[(7)]);
var state_37390__$1 = state_37390;
var statearr_37403_38678 = state_37390__$1;
(statearr_37403_38678[(2)] = inst_37370);

(statearr_37403_38678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (10))){
var inst_37384 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37404_38679 = state_37390__$1;
(statearr_37404_38679[(2)] = inst_37384);

(statearr_37404_38679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (8))){
var inst_37377 = (state_37390[(9)]);
var inst_37380 = cljs.core.deref(inst_37377);
var state_37390__$1 = state_37390;
var statearr_37405_38680 = state_37390__$1;
(statearr_37405_38680[(2)] = inst_37380);

(statearr_37405_38680[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36932__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36932__auto____0 = (function (){
var statearr_37406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37406[(0)] = cljs$core$async$reduce_$_state_machine__36932__auto__);

(statearr_37406[(1)] = (1));

return statearr_37406;
});
var cljs$core$async$reduce_$_state_machine__36932__auto____1 = (function (state_37390){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37390);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37407){if((e37407 instanceof Object)){
var ex__36935__auto__ = e37407;
var statearr_37408_38681 = state_37390;
(statearr_37408_38681[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38682 = state_37390;
state_37390 = G__38682;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36932__auto__ = function(state_37390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36932__auto____1.call(this,state_37390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36932__auto____0;
cljs$core$async$reduce_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36932__auto____1;
return cljs$core$async$reduce_$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37409 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37409[(6)] = c__36999__auto__);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37415){
var state_val_37416 = (state_37415[(1)]);
if((state_val_37416 === (1))){
var inst_37410 = cljs.core.async.reduce(f__$1,init,ch);
var state_37415__$1 = state_37415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37415__$1,(2),inst_37410);
} else {
if((state_val_37416 === (2))){
var inst_37412 = (state_37415[(2)]);
var inst_37413 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37412) : f__$1.call(null,inst_37412));
var state_37415__$1 = state_37415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37415__$1,inst_37413);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36932__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36932__auto____0 = (function (){
var statearr_37417 = [null,null,null,null,null,null,null];
(statearr_37417[(0)] = cljs$core$async$transduce_$_state_machine__36932__auto__);

(statearr_37417[(1)] = (1));

return statearr_37417;
});
var cljs$core$async$transduce_$_state_machine__36932__auto____1 = (function (state_37415){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37415);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37418){if((e37418 instanceof Object)){
var ex__36935__auto__ = e37418;
var statearr_37419_38683 = state_37415;
(statearr_37419_38683[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38684 = state_37415;
state_37415 = G__38684;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36932__auto__ = function(state_37415){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36932__auto____1.call(this,state_37415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36932__auto____0;
cljs$core$async$transduce_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36932__auto____1;
return cljs$core$async$transduce_$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37420 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37420[(6)] = c__36999__auto__);

return statearr_37420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
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
var G__37422 = arguments.length;
switch (G__37422) {
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
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37447){
var state_val_37448 = (state_37447[(1)]);
if((state_val_37448 === (7))){
var inst_37429 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37449_38686 = state_37447__$1;
(statearr_37449_38686[(2)] = inst_37429);

(statearr_37449_38686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (1))){
var inst_37423 = cljs.core.seq(coll);
var inst_37424 = inst_37423;
var state_37447__$1 = (function (){var statearr_37450 = state_37447;
(statearr_37450[(7)] = inst_37424);

return statearr_37450;
})();
var statearr_37451_38687 = state_37447__$1;
(statearr_37451_38687[(2)] = null);

(statearr_37451_38687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (4))){
var inst_37424 = (state_37447[(7)]);
var inst_37427 = cljs.core.first(inst_37424);
var state_37447__$1 = state_37447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37447__$1,(7),ch,inst_37427);
} else {
if((state_val_37448 === (13))){
var inst_37441 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37452_38688 = state_37447__$1;
(statearr_37452_38688[(2)] = inst_37441);

(statearr_37452_38688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (6))){
var inst_37432 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37432)){
var statearr_37453_38689 = state_37447__$1;
(statearr_37453_38689[(1)] = (8));

} else {
var statearr_37454_38690 = state_37447__$1;
(statearr_37454_38690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (3))){
var inst_37445 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37447__$1,inst_37445);
} else {
if((state_val_37448 === (12))){
var state_37447__$1 = state_37447;
var statearr_37455_38691 = state_37447__$1;
(statearr_37455_38691[(2)] = null);

(statearr_37455_38691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (2))){
var inst_37424 = (state_37447[(7)]);
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37424)){
var statearr_37456_38692 = state_37447__$1;
(statearr_37456_38692[(1)] = (4));

} else {
var statearr_37457_38693 = state_37447__$1;
(statearr_37457_38693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (11))){
var inst_37438 = cljs.core.async.close_BANG_(ch);
var state_37447__$1 = state_37447;
var statearr_37458_38694 = state_37447__$1;
(statearr_37458_38694[(2)] = inst_37438);

(statearr_37458_38694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (9))){
var state_37447__$1 = state_37447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37459_38695 = state_37447__$1;
(statearr_37459_38695[(1)] = (11));

} else {
var statearr_37460_38696 = state_37447__$1;
(statearr_37460_38696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (5))){
var inst_37424 = (state_37447[(7)]);
var state_37447__$1 = state_37447;
var statearr_37461_38697 = state_37447__$1;
(statearr_37461_38697[(2)] = inst_37424);

(statearr_37461_38697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (10))){
var inst_37443 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37462_38698 = state_37447__$1;
(statearr_37462_38698[(2)] = inst_37443);

(statearr_37462_38698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (8))){
var inst_37424 = (state_37447[(7)]);
var inst_37434 = cljs.core.next(inst_37424);
var inst_37424__$1 = inst_37434;
var state_37447__$1 = (function (){var statearr_37463 = state_37447;
(statearr_37463[(7)] = inst_37424__$1);

return statearr_37463;
})();
var statearr_37464_38699 = state_37447__$1;
(statearr_37464_38699[(2)] = null);

(statearr_37464_38699[(1)] = (2));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_37465 = [null,null,null,null,null,null,null,null];
(statearr_37465[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_37465[(1)] = (1));

return statearr_37465;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_37447){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37447);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37466){if((e37466 instanceof Object)){
var ex__36935__auto__ = e37466;
var statearr_37467_38700 = state_37447;
(statearr_37467_38700[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38701 = state_37447;
state_37447 = G__38701;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_37447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_37447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37468 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37468[(6)] = c__36999__auto__);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37469 = (function (ch,cs,meta37470){
this.ch = ch;
this.cs = cs;
this.meta37470 = meta37470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37471,meta37470__$1){
var self__ = this;
var _37471__$1 = this;
return (new cljs.core.async.t_cljs$core$async37469(self__.ch,self__.cs,meta37470__$1));
}));

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37471){
var self__ = this;
var _37471__$1 = this;
return self__.meta37470;
}));

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37470","meta37470",-2031466700,null)], null);
}));

(cljs.core.async.t_cljs$core$async37469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37469");

(cljs.core.async.t_cljs$core$async37469.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37469.
 */
cljs.core.async.__GT_t_cljs$core$async37469 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37469(ch__$1,cs__$1,meta37470){
return (new cljs.core.async.t_cljs$core$async37469(ch__$1,cs__$1,meta37470));
});

}

return (new cljs.core.async.t_cljs$core$async37469(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36999__auto___38719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37606){
var state_val_37607 = (state_37606[(1)]);
if((state_val_37607 === (7))){
var inst_37602 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37608_38720 = state_37606__$1;
(statearr_37608_38720[(2)] = inst_37602);

(statearr_37608_38720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (20))){
var inst_37505 = (state_37606[(7)]);
var inst_37517 = cljs.core.first(inst_37505);
var inst_37518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37517,(0),null);
var inst_37519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37517,(1),null);
var state_37606__$1 = (function (){var statearr_37609 = state_37606;
(statearr_37609[(8)] = inst_37518);

return statearr_37609;
})();
if(cljs.core.truth_(inst_37519)){
var statearr_37610_38721 = state_37606__$1;
(statearr_37610_38721[(1)] = (22));

} else {
var statearr_37611_38722 = state_37606__$1;
(statearr_37611_38722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (27))){
var inst_37554 = (state_37606[(9)]);
var inst_37549 = (state_37606[(10)]);
var inst_37474 = (state_37606[(11)]);
var inst_37547 = (state_37606[(12)]);
var inst_37554__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37547,inst_37549);
var inst_37555 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37554__$1,inst_37474,done);
var state_37606__$1 = (function (){var statearr_37612 = state_37606;
(statearr_37612[(9)] = inst_37554__$1);

return statearr_37612;
})();
if(cljs.core.truth_(inst_37555)){
var statearr_37613_38723 = state_37606__$1;
(statearr_37613_38723[(1)] = (30));

} else {
var statearr_37614_38724 = state_37606__$1;
(statearr_37614_38724[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (1))){
var state_37606__$1 = state_37606;
var statearr_37615_38725 = state_37606__$1;
(statearr_37615_38725[(2)] = null);

(statearr_37615_38725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (24))){
var inst_37505 = (state_37606[(7)]);
var inst_37524 = (state_37606[(2)]);
var inst_37525 = cljs.core.next(inst_37505);
var inst_37483 = inst_37525;
var inst_37484 = null;
var inst_37485 = (0);
var inst_37486 = (0);
var state_37606__$1 = (function (){var statearr_37616 = state_37606;
(statearr_37616[(13)] = inst_37486);

(statearr_37616[(14)] = inst_37524);

(statearr_37616[(15)] = inst_37485);

(statearr_37616[(16)] = inst_37484);

(statearr_37616[(17)] = inst_37483);

return statearr_37616;
})();
var statearr_37617_38726 = state_37606__$1;
(statearr_37617_38726[(2)] = null);

(statearr_37617_38726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (39))){
var state_37606__$1 = state_37606;
var statearr_37621_38727 = state_37606__$1;
(statearr_37621_38727[(2)] = null);

(statearr_37621_38727[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (4))){
var inst_37474 = (state_37606[(11)]);
var inst_37474__$1 = (state_37606[(2)]);
var inst_37475 = (inst_37474__$1 == null);
var state_37606__$1 = (function (){var statearr_37622 = state_37606;
(statearr_37622[(11)] = inst_37474__$1);

return statearr_37622;
})();
if(cljs.core.truth_(inst_37475)){
var statearr_37623_38728 = state_37606__$1;
(statearr_37623_38728[(1)] = (5));

} else {
var statearr_37624_38729 = state_37606__$1;
(statearr_37624_38729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (15))){
var inst_37486 = (state_37606[(13)]);
var inst_37485 = (state_37606[(15)]);
var inst_37484 = (state_37606[(16)]);
var inst_37483 = (state_37606[(17)]);
var inst_37501 = (state_37606[(2)]);
var inst_37502 = (inst_37486 + (1));
var tmp37618 = inst_37485;
var tmp37619 = inst_37484;
var tmp37620 = inst_37483;
var inst_37483__$1 = tmp37620;
var inst_37484__$1 = tmp37619;
var inst_37485__$1 = tmp37618;
var inst_37486__$1 = inst_37502;
var state_37606__$1 = (function (){var statearr_37625 = state_37606;
(statearr_37625[(13)] = inst_37486__$1);

(statearr_37625[(18)] = inst_37501);

(statearr_37625[(15)] = inst_37485__$1);

(statearr_37625[(16)] = inst_37484__$1);

(statearr_37625[(17)] = inst_37483__$1);

return statearr_37625;
})();
var statearr_37626_38730 = state_37606__$1;
(statearr_37626_38730[(2)] = null);

(statearr_37626_38730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (21))){
var inst_37528 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37630_38731 = state_37606__$1;
(statearr_37630_38731[(2)] = inst_37528);

(statearr_37630_38731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (31))){
var inst_37554 = (state_37606[(9)]);
var inst_37558 = done(null);
var inst_37559 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37554);
var state_37606__$1 = (function (){var statearr_37631 = state_37606;
(statearr_37631[(19)] = inst_37558);

return statearr_37631;
})();
var statearr_37632_38732 = state_37606__$1;
(statearr_37632_38732[(2)] = inst_37559);

(statearr_37632_38732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (32))){
var inst_37549 = (state_37606[(10)]);
var inst_37546 = (state_37606[(20)]);
var inst_37548 = (state_37606[(21)]);
var inst_37547 = (state_37606[(12)]);
var inst_37561 = (state_37606[(2)]);
var inst_37562 = (inst_37549 + (1));
var tmp37627 = inst_37546;
var tmp37628 = inst_37548;
var tmp37629 = inst_37547;
var inst_37546__$1 = tmp37627;
var inst_37547__$1 = tmp37629;
var inst_37548__$1 = tmp37628;
var inst_37549__$1 = inst_37562;
var state_37606__$1 = (function (){var statearr_37633 = state_37606;
(statearr_37633[(10)] = inst_37549__$1);

(statearr_37633[(20)] = inst_37546__$1);

(statearr_37633[(22)] = inst_37561);

(statearr_37633[(21)] = inst_37548__$1);

(statearr_37633[(12)] = inst_37547__$1);

return statearr_37633;
})();
var statearr_37634_38735 = state_37606__$1;
(statearr_37634_38735[(2)] = null);

(statearr_37634_38735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (40))){
var inst_37574 = (state_37606[(23)]);
var inst_37578 = done(null);
var inst_37579 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37574);
var state_37606__$1 = (function (){var statearr_37635 = state_37606;
(statearr_37635[(24)] = inst_37578);

return statearr_37635;
})();
var statearr_37636_38738 = state_37606__$1;
(statearr_37636_38738[(2)] = inst_37579);

(statearr_37636_38738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (33))){
var inst_37565 = (state_37606[(25)]);
var inst_37567 = cljs.core.chunked_seq_QMARK_(inst_37565);
var state_37606__$1 = state_37606;
if(inst_37567){
var statearr_37637_38739 = state_37606__$1;
(statearr_37637_38739[(1)] = (36));

} else {
var statearr_37638_38740 = state_37606__$1;
(statearr_37638_38740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (13))){
var inst_37495 = (state_37606[(26)]);
var inst_37498 = cljs.core.async.close_BANG_(inst_37495);
var state_37606__$1 = state_37606;
var statearr_37639_38741 = state_37606__$1;
(statearr_37639_38741[(2)] = inst_37498);

(statearr_37639_38741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (22))){
var inst_37518 = (state_37606[(8)]);
var inst_37521 = cljs.core.async.close_BANG_(inst_37518);
var state_37606__$1 = state_37606;
var statearr_37640_38742 = state_37606__$1;
(statearr_37640_38742[(2)] = inst_37521);

(statearr_37640_38742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (36))){
var inst_37565 = (state_37606[(25)]);
var inst_37569 = cljs.core.chunk_first(inst_37565);
var inst_37570 = cljs.core.chunk_rest(inst_37565);
var inst_37571 = cljs.core.count(inst_37569);
var inst_37546 = inst_37570;
var inst_37547 = inst_37569;
var inst_37548 = inst_37571;
var inst_37549 = (0);
var state_37606__$1 = (function (){var statearr_37641 = state_37606;
(statearr_37641[(10)] = inst_37549);

(statearr_37641[(20)] = inst_37546);

(statearr_37641[(21)] = inst_37548);

(statearr_37641[(12)] = inst_37547);

return statearr_37641;
})();
var statearr_37642_38745 = state_37606__$1;
(statearr_37642_38745[(2)] = null);

(statearr_37642_38745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (41))){
var inst_37565 = (state_37606[(25)]);
var inst_37581 = (state_37606[(2)]);
var inst_37582 = cljs.core.next(inst_37565);
var inst_37546 = inst_37582;
var inst_37547 = null;
var inst_37548 = (0);
var inst_37549 = (0);
var state_37606__$1 = (function (){var statearr_37643 = state_37606;
(statearr_37643[(10)] = inst_37549);

(statearr_37643[(20)] = inst_37546);

(statearr_37643[(27)] = inst_37581);

(statearr_37643[(21)] = inst_37548);

(statearr_37643[(12)] = inst_37547);

return statearr_37643;
})();
var statearr_37644_38749 = state_37606__$1;
(statearr_37644_38749[(2)] = null);

(statearr_37644_38749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (43))){
var state_37606__$1 = state_37606;
var statearr_37645_38750 = state_37606__$1;
(statearr_37645_38750[(2)] = null);

(statearr_37645_38750[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (29))){
var inst_37590 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37646_38755 = state_37606__$1;
(statearr_37646_38755[(2)] = inst_37590);

(statearr_37646_38755[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (44))){
var inst_37599 = (state_37606[(2)]);
var state_37606__$1 = (function (){var statearr_37647 = state_37606;
(statearr_37647[(28)] = inst_37599);

return statearr_37647;
})();
var statearr_37648_38756 = state_37606__$1;
(statearr_37648_38756[(2)] = null);

(statearr_37648_38756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (6))){
var inst_37538 = (state_37606[(29)]);
var inst_37537 = cljs.core.deref(cs);
var inst_37538__$1 = cljs.core.keys(inst_37537);
var inst_37539 = cljs.core.count(inst_37538__$1);
var inst_37540 = cljs.core.reset_BANG_(dctr,inst_37539);
var inst_37545 = cljs.core.seq(inst_37538__$1);
var inst_37546 = inst_37545;
var inst_37547 = null;
var inst_37548 = (0);
var inst_37549 = (0);
var state_37606__$1 = (function (){var statearr_37649 = state_37606;
(statearr_37649[(10)] = inst_37549);

(statearr_37649[(20)] = inst_37546);

(statearr_37649[(30)] = inst_37540);

(statearr_37649[(21)] = inst_37548);

(statearr_37649[(12)] = inst_37547);

(statearr_37649[(29)] = inst_37538__$1);

return statearr_37649;
})();
var statearr_37650_38757 = state_37606__$1;
(statearr_37650_38757[(2)] = null);

(statearr_37650_38757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (28))){
var inst_37565 = (state_37606[(25)]);
var inst_37546 = (state_37606[(20)]);
var inst_37565__$1 = cljs.core.seq(inst_37546);
var state_37606__$1 = (function (){var statearr_37651 = state_37606;
(statearr_37651[(25)] = inst_37565__$1);

return statearr_37651;
})();
if(inst_37565__$1){
var statearr_37652_38758 = state_37606__$1;
(statearr_37652_38758[(1)] = (33));

} else {
var statearr_37653_38759 = state_37606__$1;
(statearr_37653_38759[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (25))){
var inst_37549 = (state_37606[(10)]);
var inst_37548 = (state_37606[(21)]);
var inst_37551 = (inst_37549 < inst_37548);
var inst_37552 = inst_37551;
var state_37606__$1 = state_37606;
if(cljs.core.truth_(inst_37552)){
var statearr_37654_38760 = state_37606__$1;
(statearr_37654_38760[(1)] = (27));

} else {
var statearr_37655_38761 = state_37606__$1;
(statearr_37655_38761[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (34))){
var state_37606__$1 = state_37606;
var statearr_37656_38762 = state_37606__$1;
(statearr_37656_38762[(2)] = null);

(statearr_37656_38762[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (17))){
var state_37606__$1 = state_37606;
var statearr_37657_38763 = state_37606__$1;
(statearr_37657_38763[(2)] = null);

(statearr_37657_38763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (3))){
var inst_37604 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37606__$1,inst_37604);
} else {
if((state_val_37607 === (12))){
var inst_37533 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37658_38764 = state_37606__$1;
(statearr_37658_38764[(2)] = inst_37533);

(statearr_37658_38764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (2))){
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37606__$1,(4),ch);
} else {
if((state_val_37607 === (23))){
var state_37606__$1 = state_37606;
var statearr_37659_38765 = state_37606__$1;
(statearr_37659_38765[(2)] = null);

(statearr_37659_38765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (35))){
var inst_37588 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37660_38766 = state_37606__$1;
(statearr_37660_38766[(2)] = inst_37588);

(statearr_37660_38766[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (19))){
var inst_37505 = (state_37606[(7)]);
var inst_37509 = cljs.core.chunk_first(inst_37505);
var inst_37510 = cljs.core.chunk_rest(inst_37505);
var inst_37511 = cljs.core.count(inst_37509);
var inst_37483 = inst_37510;
var inst_37484 = inst_37509;
var inst_37485 = inst_37511;
var inst_37486 = (0);
var state_37606__$1 = (function (){var statearr_37661 = state_37606;
(statearr_37661[(13)] = inst_37486);

(statearr_37661[(15)] = inst_37485);

(statearr_37661[(16)] = inst_37484);

(statearr_37661[(17)] = inst_37483);

return statearr_37661;
})();
var statearr_37662_38768 = state_37606__$1;
(statearr_37662_38768[(2)] = null);

(statearr_37662_38768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (11))){
var inst_37505 = (state_37606[(7)]);
var inst_37483 = (state_37606[(17)]);
var inst_37505__$1 = cljs.core.seq(inst_37483);
var state_37606__$1 = (function (){var statearr_37663 = state_37606;
(statearr_37663[(7)] = inst_37505__$1);

return statearr_37663;
})();
if(inst_37505__$1){
var statearr_37664_38771 = state_37606__$1;
(statearr_37664_38771[(1)] = (16));

} else {
var statearr_37665_38772 = state_37606__$1;
(statearr_37665_38772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (9))){
var inst_37535 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37666_38777 = state_37606__$1;
(statearr_37666_38777[(2)] = inst_37535);

(statearr_37666_38777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (5))){
var inst_37481 = cljs.core.deref(cs);
var inst_37482 = cljs.core.seq(inst_37481);
var inst_37483 = inst_37482;
var inst_37484 = null;
var inst_37485 = (0);
var inst_37486 = (0);
var state_37606__$1 = (function (){var statearr_37667 = state_37606;
(statearr_37667[(13)] = inst_37486);

(statearr_37667[(15)] = inst_37485);

(statearr_37667[(16)] = inst_37484);

(statearr_37667[(17)] = inst_37483);

return statearr_37667;
})();
var statearr_37668_38788 = state_37606__$1;
(statearr_37668_38788[(2)] = null);

(statearr_37668_38788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (14))){
var state_37606__$1 = state_37606;
var statearr_37669_38789 = state_37606__$1;
(statearr_37669_38789[(2)] = null);

(statearr_37669_38789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (45))){
var inst_37596 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37670_38790 = state_37606__$1;
(statearr_37670_38790[(2)] = inst_37596);

(statearr_37670_38790[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (26))){
var inst_37538 = (state_37606[(29)]);
var inst_37592 = (state_37606[(2)]);
var inst_37593 = cljs.core.seq(inst_37538);
var state_37606__$1 = (function (){var statearr_37671 = state_37606;
(statearr_37671[(31)] = inst_37592);

return statearr_37671;
})();
if(inst_37593){
var statearr_37672_38791 = state_37606__$1;
(statearr_37672_38791[(1)] = (42));

} else {
var statearr_37673_38792 = state_37606__$1;
(statearr_37673_38792[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (16))){
var inst_37505 = (state_37606[(7)]);
var inst_37507 = cljs.core.chunked_seq_QMARK_(inst_37505);
var state_37606__$1 = state_37606;
if(inst_37507){
var statearr_37674_38793 = state_37606__$1;
(statearr_37674_38793[(1)] = (19));

} else {
var statearr_37675_38794 = state_37606__$1;
(statearr_37675_38794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (38))){
var inst_37585 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37676_38795 = state_37606__$1;
(statearr_37676_38795[(2)] = inst_37585);

(statearr_37676_38795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (30))){
var state_37606__$1 = state_37606;
var statearr_37677_38796 = state_37606__$1;
(statearr_37677_38796[(2)] = null);

(statearr_37677_38796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (10))){
var inst_37486 = (state_37606[(13)]);
var inst_37484 = (state_37606[(16)]);
var inst_37494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37484,inst_37486);
var inst_37495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37494,(0),null);
var inst_37496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37494,(1),null);
var state_37606__$1 = (function (){var statearr_37678 = state_37606;
(statearr_37678[(26)] = inst_37495);

return statearr_37678;
})();
if(cljs.core.truth_(inst_37496)){
var statearr_37679_38797 = state_37606__$1;
(statearr_37679_38797[(1)] = (13));

} else {
var statearr_37680_38798 = state_37606__$1;
(statearr_37680_38798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (18))){
var inst_37531 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37681_38799 = state_37606__$1;
(statearr_37681_38799[(2)] = inst_37531);

(statearr_37681_38799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (42))){
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37606__$1,(45),dchan);
} else {
if((state_val_37607 === (37))){
var inst_37565 = (state_37606[(25)]);
var inst_37574 = (state_37606[(23)]);
var inst_37474 = (state_37606[(11)]);
var inst_37574__$1 = cljs.core.first(inst_37565);
var inst_37575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37574__$1,inst_37474,done);
var state_37606__$1 = (function (){var statearr_37682 = state_37606;
(statearr_37682[(23)] = inst_37574__$1);

return statearr_37682;
})();
if(cljs.core.truth_(inst_37575)){
var statearr_37683_38800 = state_37606__$1;
(statearr_37683_38800[(1)] = (39));

} else {
var statearr_37684_38801 = state_37606__$1;
(statearr_37684_38801[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (8))){
var inst_37486 = (state_37606[(13)]);
var inst_37485 = (state_37606[(15)]);
var inst_37488 = (inst_37486 < inst_37485);
var inst_37489 = inst_37488;
var state_37606__$1 = state_37606;
if(cljs.core.truth_(inst_37489)){
var statearr_37685_38802 = state_37606__$1;
(statearr_37685_38802[(1)] = (10));

} else {
var statearr_37686_38803 = state_37606__$1;
(statearr_37686_38803[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36932__auto__ = null;
var cljs$core$async$mult_$_state_machine__36932__auto____0 = (function (){
var statearr_37687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37687[(0)] = cljs$core$async$mult_$_state_machine__36932__auto__);

(statearr_37687[(1)] = (1));

return statearr_37687;
});
var cljs$core$async$mult_$_state_machine__36932__auto____1 = (function (state_37606){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37606);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37688){if((e37688 instanceof Object)){
var ex__36935__auto__ = e37688;
var statearr_37689_38804 = state_37606;
(statearr_37689_38804[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38805 = state_37606;
state_37606 = G__38805;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36932__auto__ = function(state_37606){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36932__auto____1.call(this,state_37606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36932__auto____0;
cljs$core$async$mult_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36932__auto____1;
return cljs$core$async$mult_$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37690 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37690[(6)] = c__36999__auto___38719);

return statearr_37690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var G__37692 = arguments.length;
switch (G__37692) {
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
var len__4789__auto___38837 = arguments.length;
var i__4790__auto___38838 = (0);
while(true){
if((i__4790__auto___38838 < len__4789__auto___38837)){
args__4795__auto__.push((arguments[i__4790__auto___38838]));

var G__38839 = (i__4790__auto___38838 + (1));
i__4790__auto___38838 = G__38839;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37697){
var map__37698 = p__37697;
var map__37698__$1 = (((((!((map__37698 == null))))?(((((map__37698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37698):map__37698);
var opts = map__37698__$1;
var statearr_37700_38840 = state;
(statearr_37700_38840[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37701_38841 = state;
(statearr_37701_38841[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37702_38842 = state;
(statearr_37702_38842[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37693){
var G__37694 = cljs.core.first(seq37693);
var seq37693__$1 = cljs.core.next(seq37693);
var G__37695 = cljs.core.first(seq37693__$1);
var seq37693__$2 = cljs.core.next(seq37693__$1);
var G__37696 = cljs.core.first(seq37693__$2);
var seq37693__$3 = cljs.core.next(seq37693__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37694,G__37695,G__37696,seq37693__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37703 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37704){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37704 = meta37704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37705,meta37704__$1){
var self__ = this;
var _37705__$1 = this;
return (new cljs.core.async.t_cljs$core$async37703(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37704__$1));
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37705){
var self__ = this;
var _37705__$1 = this;
return self__.meta37704;
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37704","meta37704",-397043428,null)], null);
}));

(cljs.core.async.t_cljs$core$async37703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37703");

(cljs.core.async.t_cljs$core$async37703.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37703.
 */
cljs.core.async.__GT_t_cljs$core$async37703 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37703(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37704){
return (new cljs.core.async.t_cljs$core$async37703(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37704));
});

}

return (new cljs.core.async.t_cljs$core$async37703(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36999__auto___38843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37807){
var state_val_37808 = (state_37807[(1)]);
if((state_val_37808 === (7))){
var inst_37722 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37809_38844 = state_37807__$1;
(statearr_37809_38844[(2)] = inst_37722);

(statearr_37809_38844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (20))){
var inst_37734 = (state_37807[(7)]);
var state_37807__$1 = state_37807;
var statearr_37810_38845 = state_37807__$1;
(statearr_37810_38845[(2)] = inst_37734);

(statearr_37810_38845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (27))){
var state_37807__$1 = state_37807;
var statearr_37811_38846 = state_37807__$1;
(statearr_37811_38846[(2)] = null);

(statearr_37811_38846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (1))){
var inst_37709 = (state_37807[(8)]);
var inst_37709__$1 = calc_state();
var inst_37711 = (inst_37709__$1 == null);
var inst_37712 = cljs.core.not(inst_37711);
var state_37807__$1 = (function (){var statearr_37812 = state_37807;
(statearr_37812[(8)] = inst_37709__$1);

return statearr_37812;
})();
if(inst_37712){
var statearr_37813_38847 = state_37807__$1;
(statearr_37813_38847[(1)] = (2));

} else {
var statearr_37814_38848 = state_37807__$1;
(statearr_37814_38848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (24))){
var inst_37758 = (state_37807[(9)]);
var inst_37781 = (state_37807[(10)]);
var inst_37767 = (state_37807[(11)]);
var inst_37781__$1 = (inst_37758.cljs$core$IFn$_invoke$arity$1 ? inst_37758.cljs$core$IFn$_invoke$arity$1(inst_37767) : inst_37758.call(null,inst_37767));
var state_37807__$1 = (function (){var statearr_37815 = state_37807;
(statearr_37815[(10)] = inst_37781__$1);

return statearr_37815;
})();
if(cljs.core.truth_(inst_37781__$1)){
var statearr_37816_38849 = state_37807__$1;
(statearr_37816_38849[(1)] = (29));

} else {
var statearr_37817_38850 = state_37807__$1;
(statearr_37817_38850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (4))){
var inst_37725 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37725)){
var statearr_37818_38851 = state_37807__$1;
(statearr_37818_38851[(1)] = (8));

} else {
var statearr_37819_38852 = state_37807__$1;
(statearr_37819_38852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (15))){
var inst_37752 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37752)){
var statearr_37820_38853 = state_37807__$1;
(statearr_37820_38853[(1)] = (19));

} else {
var statearr_37821_38854 = state_37807__$1;
(statearr_37821_38854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (21))){
var inst_37757 = (state_37807[(12)]);
var inst_37757__$1 = (state_37807[(2)]);
var inst_37758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37757__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37757__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37757__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37807__$1 = (function (){var statearr_37822 = state_37807;
(statearr_37822[(9)] = inst_37758);

(statearr_37822[(13)] = inst_37759);

(statearr_37822[(12)] = inst_37757__$1);

return statearr_37822;
})();
return cljs.core.async.ioc_alts_BANG_(state_37807__$1,(22),inst_37760);
} else {
if((state_val_37808 === (31))){
var inst_37789 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37789)){
var statearr_37823_38855 = state_37807__$1;
(statearr_37823_38855[(1)] = (32));

} else {
var statearr_37824_38856 = state_37807__$1;
(statearr_37824_38856[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (32))){
var inst_37766 = (state_37807[(14)]);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37807__$1,(35),out,inst_37766);
} else {
if((state_val_37808 === (33))){
var inst_37757 = (state_37807[(12)]);
var inst_37734 = inst_37757;
var state_37807__$1 = (function (){var statearr_37825 = state_37807;
(statearr_37825[(7)] = inst_37734);

return statearr_37825;
})();
var statearr_37826_38857 = state_37807__$1;
(statearr_37826_38857[(2)] = null);

(statearr_37826_38857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (13))){
var inst_37734 = (state_37807[(7)]);
var inst_37741 = inst_37734.cljs$lang$protocol_mask$partition0$;
var inst_37742 = (inst_37741 & (64));
var inst_37743 = inst_37734.cljs$core$ISeq$;
var inst_37744 = (cljs.core.PROTOCOL_SENTINEL === inst_37743);
var inst_37745 = ((inst_37742) || (inst_37744));
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37745)){
var statearr_37827_38858 = state_37807__$1;
(statearr_37827_38858[(1)] = (16));

} else {
var statearr_37828_38859 = state_37807__$1;
(statearr_37828_38859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (22))){
var inst_37766 = (state_37807[(14)]);
var inst_37767 = (state_37807[(11)]);
var inst_37765 = (state_37807[(2)]);
var inst_37766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37765,(0),null);
var inst_37767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37765,(1),null);
var inst_37768 = (inst_37766__$1 == null);
var inst_37769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37767__$1,change);
var inst_37770 = ((inst_37768) || (inst_37769));
var state_37807__$1 = (function (){var statearr_37829 = state_37807;
(statearr_37829[(14)] = inst_37766__$1);

(statearr_37829[(11)] = inst_37767__$1);

return statearr_37829;
})();
if(cljs.core.truth_(inst_37770)){
var statearr_37830_38860 = state_37807__$1;
(statearr_37830_38860[(1)] = (23));

} else {
var statearr_37831_38861 = state_37807__$1;
(statearr_37831_38861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (36))){
var inst_37757 = (state_37807[(12)]);
var inst_37734 = inst_37757;
var state_37807__$1 = (function (){var statearr_37832 = state_37807;
(statearr_37832[(7)] = inst_37734);

return statearr_37832;
})();
var statearr_37833_38862 = state_37807__$1;
(statearr_37833_38862[(2)] = null);

(statearr_37833_38862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (29))){
var inst_37781 = (state_37807[(10)]);
var state_37807__$1 = state_37807;
var statearr_37834_38863 = state_37807__$1;
(statearr_37834_38863[(2)] = inst_37781);

(statearr_37834_38863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (6))){
var state_37807__$1 = state_37807;
var statearr_37835_38864 = state_37807__$1;
(statearr_37835_38864[(2)] = false);

(statearr_37835_38864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (28))){
var inst_37777 = (state_37807[(2)]);
var inst_37778 = calc_state();
var inst_37734 = inst_37778;
var state_37807__$1 = (function (){var statearr_37836 = state_37807;
(statearr_37836[(7)] = inst_37734);

(statearr_37836[(15)] = inst_37777);

return statearr_37836;
})();
var statearr_37837_38865 = state_37807__$1;
(statearr_37837_38865[(2)] = null);

(statearr_37837_38865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (25))){
var inst_37803 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37838_38866 = state_37807__$1;
(statearr_37838_38866[(2)] = inst_37803);

(statearr_37838_38866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (34))){
var inst_37801 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37839_38867 = state_37807__$1;
(statearr_37839_38867[(2)] = inst_37801);

(statearr_37839_38867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (17))){
var state_37807__$1 = state_37807;
var statearr_37840_38868 = state_37807__$1;
(statearr_37840_38868[(2)] = false);

(statearr_37840_38868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (3))){
var state_37807__$1 = state_37807;
var statearr_37841_38869 = state_37807__$1;
(statearr_37841_38869[(2)] = false);

(statearr_37841_38869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (12))){
var inst_37805 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37807__$1,inst_37805);
} else {
if((state_val_37808 === (2))){
var inst_37709 = (state_37807[(8)]);
var inst_37714 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37715 = (inst_37714 & (64));
var inst_37716 = inst_37709.cljs$core$ISeq$;
var inst_37717 = (cljs.core.PROTOCOL_SENTINEL === inst_37716);
var inst_37718 = ((inst_37715) || (inst_37717));
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37718)){
var statearr_37842_38870 = state_37807__$1;
(statearr_37842_38870[(1)] = (5));

} else {
var statearr_37843_38871 = state_37807__$1;
(statearr_37843_38871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (23))){
var inst_37766 = (state_37807[(14)]);
var inst_37772 = (inst_37766 == null);
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37772)){
var statearr_37844_38872 = state_37807__$1;
(statearr_37844_38872[(1)] = (26));

} else {
var statearr_37845_38873 = state_37807__$1;
(statearr_37845_38873[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (35))){
var inst_37792 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
if(cljs.core.truth_(inst_37792)){
var statearr_37846_38875 = state_37807__$1;
(statearr_37846_38875[(1)] = (36));

} else {
var statearr_37847_38876 = state_37807__$1;
(statearr_37847_38876[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (19))){
var inst_37734 = (state_37807[(7)]);
var inst_37754 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37734);
var state_37807__$1 = state_37807;
var statearr_37848_38878 = state_37807__$1;
(statearr_37848_38878[(2)] = inst_37754);

(statearr_37848_38878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (11))){
var inst_37734 = (state_37807[(7)]);
var inst_37738 = (inst_37734 == null);
var inst_37739 = cljs.core.not(inst_37738);
var state_37807__$1 = state_37807;
if(inst_37739){
var statearr_37849_38879 = state_37807__$1;
(statearr_37849_38879[(1)] = (13));

} else {
var statearr_37850_38880 = state_37807__$1;
(statearr_37850_38880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (9))){
var inst_37709 = (state_37807[(8)]);
var state_37807__$1 = state_37807;
var statearr_37851_38881 = state_37807__$1;
(statearr_37851_38881[(2)] = inst_37709);

(statearr_37851_38881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (5))){
var state_37807__$1 = state_37807;
var statearr_37852_38882 = state_37807__$1;
(statearr_37852_38882[(2)] = true);

(statearr_37852_38882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (14))){
var state_37807__$1 = state_37807;
var statearr_37853_38883 = state_37807__$1;
(statearr_37853_38883[(2)] = false);

(statearr_37853_38883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (26))){
var inst_37767 = (state_37807[(11)]);
var inst_37774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37767);
var state_37807__$1 = state_37807;
var statearr_37854_38884 = state_37807__$1;
(statearr_37854_38884[(2)] = inst_37774);

(statearr_37854_38884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (16))){
var state_37807__$1 = state_37807;
var statearr_37855_38886 = state_37807__$1;
(statearr_37855_38886[(2)] = true);

(statearr_37855_38886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (38))){
var inst_37797 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37856_38888 = state_37807__$1;
(statearr_37856_38888[(2)] = inst_37797);

(statearr_37856_38888[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (30))){
var inst_37758 = (state_37807[(9)]);
var inst_37759 = (state_37807[(13)]);
var inst_37767 = (state_37807[(11)]);
var inst_37784 = cljs.core.empty_QMARK_(inst_37758);
var inst_37785 = (inst_37759.cljs$core$IFn$_invoke$arity$1 ? inst_37759.cljs$core$IFn$_invoke$arity$1(inst_37767) : inst_37759.call(null,inst_37767));
var inst_37786 = cljs.core.not(inst_37785);
var inst_37787 = ((inst_37784) && (inst_37786));
var state_37807__$1 = state_37807;
var statearr_37857_38889 = state_37807__$1;
(statearr_37857_38889[(2)] = inst_37787);

(statearr_37857_38889[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (10))){
var inst_37709 = (state_37807[(8)]);
var inst_37730 = (state_37807[(2)]);
var inst_37731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37734 = inst_37709;
var state_37807__$1 = (function (){var statearr_37858 = state_37807;
(statearr_37858[(16)] = inst_37732);

(statearr_37858[(17)] = inst_37733);

(statearr_37858[(7)] = inst_37734);

(statearr_37858[(18)] = inst_37731);

return statearr_37858;
})();
var statearr_37859_38890 = state_37807__$1;
(statearr_37859_38890[(2)] = null);

(statearr_37859_38890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (18))){
var inst_37749 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37860_38893 = state_37807__$1;
(statearr_37860_38893[(2)] = inst_37749);

(statearr_37860_38893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (37))){
var state_37807__$1 = state_37807;
var statearr_37861_38894 = state_37807__$1;
(statearr_37861_38894[(2)] = null);

(statearr_37861_38894[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (8))){
var inst_37709 = (state_37807[(8)]);
var inst_37727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37709);
var state_37807__$1 = state_37807;
var statearr_37862_38895 = state_37807__$1;
(statearr_37862_38895[(2)] = inst_37727);

(statearr_37862_38895[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36932__auto__ = null;
var cljs$core$async$mix_$_state_machine__36932__auto____0 = (function (){
var statearr_37863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37863[(0)] = cljs$core$async$mix_$_state_machine__36932__auto__);

(statearr_37863[(1)] = (1));

return statearr_37863;
});
var cljs$core$async$mix_$_state_machine__36932__auto____1 = (function (state_37807){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37807);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37864){if((e37864 instanceof Object)){
var ex__36935__auto__ = e37864;
var statearr_37865_38896 = state_37807;
(statearr_37865_38896[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38897 = state_37807;
state_37807 = G__38897;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36932__auto__ = function(state_37807){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36932__auto____1.call(this,state_37807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36932__auto____0;
cljs$core$async$mix_$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36932__auto____1;
return cljs$core$async$mix_$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37866 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37866[(6)] = c__36999__auto___38843);

return statearr_37866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var G__37868 = arguments.length;
switch (G__37868) {
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
var G__37871 = arguments.length;
switch (G__37871) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37869_SHARP_){
if(cljs.core.truth_((p1__37869_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37869_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37869_SHARP_.call(null,topic)))){
return p1__37869_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37869_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37872 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37873){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37873 = meta37873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37874,meta37873__$1){
var self__ = this;
var _37874__$1 = this;
return (new cljs.core.async.t_cljs$core$async37872(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37873__$1));
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37874){
var self__ = this;
var _37874__$1 = this;
return self__.meta37873;
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37873","meta37873",1239507985,null)], null);
}));

(cljs.core.async.t_cljs$core$async37872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37872");

(cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37872.
 */
cljs.core.async.__GT_t_cljs$core$async37872 = (function cljs$core$async$__GT_t_cljs$core$async37872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37873){
return (new cljs.core.async.t_cljs$core$async37872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37873));
});

}

return (new cljs.core.async.t_cljs$core$async37872(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36999__auto___38904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_37946){
var state_val_37947 = (state_37946[(1)]);
if((state_val_37947 === (7))){
var inst_37942 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37948_38905 = state_37946__$1;
(statearr_37948_38905[(2)] = inst_37942);

(statearr_37948_38905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (20))){
var state_37946__$1 = state_37946;
var statearr_37949_38906 = state_37946__$1;
(statearr_37949_38906[(2)] = null);

(statearr_37949_38906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (1))){
var state_37946__$1 = state_37946;
var statearr_37950_38907 = state_37946__$1;
(statearr_37950_38907[(2)] = null);

(statearr_37950_38907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (24))){
var inst_37925 = (state_37946[(7)]);
var inst_37934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37925);
var state_37946__$1 = state_37946;
var statearr_37951_38908 = state_37946__$1;
(statearr_37951_38908[(2)] = inst_37934);

(statearr_37951_38908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (4))){
var inst_37877 = (state_37946[(8)]);
var inst_37877__$1 = (state_37946[(2)]);
var inst_37878 = (inst_37877__$1 == null);
var state_37946__$1 = (function (){var statearr_37952 = state_37946;
(statearr_37952[(8)] = inst_37877__$1);

return statearr_37952;
})();
if(cljs.core.truth_(inst_37878)){
var statearr_37953_38910 = state_37946__$1;
(statearr_37953_38910[(1)] = (5));

} else {
var statearr_37954_38911 = state_37946__$1;
(statearr_37954_38911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (15))){
var inst_37919 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37955_38912 = state_37946__$1;
(statearr_37955_38912[(2)] = inst_37919);

(statearr_37955_38912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (21))){
var inst_37939 = (state_37946[(2)]);
var state_37946__$1 = (function (){var statearr_37956 = state_37946;
(statearr_37956[(9)] = inst_37939);

return statearr_37956;
})();
var statearr_37957_38914 = state_37946__$1;
(statearr_37957_38914[(2)] = null);

(statearr_37957_38914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (13))){
var inst_37901 = (state_37946[(10)]);
var inst_37903 = cljs.core.chunked_seq_QMARK_(inst_37901);
var state_37946__$1 = state_37946;
if(inst_37903){
var statearr_37958_38915 = state_37946__$1;
(statearr_37958_38915[(1)] = (16));

} else {
var statearr_37959_38916 = state_37946__$1;
(statearr_37959_38916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (22))){
var inst_37931 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
if(cljs.core.truth_(inst_37931)){
var statearr_37960_38917 = state_37946__$1;
(statearr_37960_38917[(1)] = (23));

} else {
var statearr_37961_38918 = state_37946__$1;
(statearr_37961_38918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (6))){
var inst_37927 = (state_37946[(11)]);
var inst_37877 = (state_37946[(8)]);
var inst_37925 = (state_37946[(7)]);
var inst_37925__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37877) : topic_fn.call(null,inst_37877));
var inst_37926 = cljs.core.deref(mults);
var inst_37927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37926,inst_37925__$1);
var state_37946__$1 = (function (){var statearr_37962 = state_37946;
(statearr_37962[(11)] = inst_37927__$1);

(statearr_37962[(7)] = inst_37925__$1);

return statearr_37962;
})();
if(cljs.core.truth_(inst_37927__$1)){
var statearr_37963_38922 = state_37946__$1;
(statearr_37963_38922[(1)] = (19));

} else {
var statearr_37964_38923 = state_37946__$1;
(statearr_37964_38923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (25))){
var inst_37936 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37965_38924 = state_37946__$1;
(statearr_37965_38924[(2)] = inst_37936);

(statearr_37965_38924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (17))){
var inst_37901 = (state_37946[(10)]);
var inst_37910 = cljs.core.first(inst_37901);
var inst_37911 = cljs.core.async.muxch_STAR_(inst_37910);
var inst_37912 = cljs.core.async.close_BANG_(inst_37911);
var inst_37913 = cljs.core.next(inst_37901);
var inst_37887 = inst_37913;
var inst_37888 = null;
var inst_37889 = (0);
var inst_37890 = (0);
var state_37946__$1 = (function (){var statearr_37966 = state_37946;
(statearr_37966[(12)] = inst_37887);

(statearr_37966[(13)] = inst_37912);

(statearr_37966[(14)] = inst_37889);

(statearr_37966[(15)] = inst_37888);

(statearr_37966[(16)] = inst_37890);

return statearr_37966;
})();
var statearr_37967_38926 = state_37946__$1;
(statearr_37967_38926[(2)] = null);

(statearr_37967_38926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (3))){
var inst_37944 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37946__$1,inst_37944);
} else {
if((state_val_37947 === (12))){
var inst_37921 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37968_38927 = state_37946__$1;
(statearr_37968_38927[(2)] = inst_37921);

(statearr_37968_38927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (2))){
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37946__$1,(4),ch);
} else {
if((state_val_37947 === (23))){
var state_37946__$1 = state_37946;
var statearr_37969_38931 = state_37946__$1;
(statearr_37969_38931[(2)] = null);

(statearr_37969_38931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (19))){
var inst_37927 = (state_37946[(11)]);
var inst_37877 = (state_37946[(8)]);
var inst_37929 = cljs.core.async.muxch_STAR_(inst_37927);
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37946__$1,(22),inst_37929,inst_37877);
} else {
if((state_val_37947 === (11))){
var inst_37887 = (state_37946[(12)]);
var inst_37901 = (state_37946[(10)]);
var inst_37901__$1 = cljs.core.seq(inst_37887);
var state_37946__$1 = (function (){var statearr_37970 = state_37946;
(statearr_37970[(10)] = inst_37901__$1);

return statearr_37970;
})();
if(inst_37901__$1){
var statearr_37971_38932 = state_37946__$1;
(statearr_37971_38932[(1)] = (13));

} else {
var statearr_37972_38933 = state_37946__$1;
(statearr_37972_38933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (9))){
var inst_37923 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37973_38934 = state_37946__$1;
(statearr_37973_38934[(2)] = inst_37923);

(statearr_37973_38934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (5))){
var inst_37884 = cljs.core.deref(mults);
var inst_37885 = cljs.core.vals(inst_37884);
var inst_37886 = cljs.core.seq(inst_37885);
var inst_37887 = inst_37886;
var inst_37888 = null;
var inst_37889 = (0);
var inst_37890 = (0);
var state_37946__$1 = (function (){var statearr_37974 = state_37946;
(statearr_37974[(12)] = inst_37887);

(statearr_37974[(14)] = inst_37889);

(statearr_37974[(15)] = inst_37888);

(statearr_37974[(16)] = inst_37890);

return statearr_37974;
})();
var statearr_37975_38935 = state_37946__$1;
(statearr_37975_38935[(2)] = null);

(statearr_37975_38935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (14))){
var state_37946__$1 = state_37946;
var statearr_37979_38936 = state_37946__$1;
(statearr_37979_38936[(2)] = null);

(statearr_37979_38936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (16))){
var inst_37901 = (state_37946[(10)]);
var inst_37905 = cljs.core.chunk_first(inst_37901);
var inst_37906 = cljs.core.chunk_rest(inst_37901);
var inst_37907 = cljs.core.count(inst_37905);
var inst_37887 = inst_37906;
var inst_37888 = inst_37905;
var inst_37889 = inst_37907;
var inst_37890 = (0);
var state_37946__$1 = (function (){var statearr_37980 = state_37946;
(statearr_37980[(12)] = inst_37887);

(statearr_37980[(14)] = inst_37889);

(statearr_37980[(15)] = inst_37888);

(statearr_37980[(16)] = inst_37890);

return statearr_37980;
})();
var statearr_37981_38937 = state_37946__$1;
(statearr_37981_38937[(2)] = null);

(statearr_37981_38937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (10))){
var inst_37887 = (state_37946[(12)]);
var inst_37889 = (state_37946[(14)]);
var inst_37888 = (state_37946[(15)]);
var inst_37890 = (state_37946[(16)]);
var inst_37895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37888,inst_37890);
var inst_37896 = cljs.core.async.muxch_STAR_(inst_37895);
var inst_37897 = cljs.core.async.close_BANG_(inst_37896);
var inst_37898 = (inst_37890 + (1));
var tmp37976 = inst_37887;
var tmp37977 = inst_37889;
var tmp37978 = inst_37888;
var inst_37887__$1 = tmp37976;
var inst_37888__$1 = tmp37978;
var inst_37889__$1 = tmp37977;
var inst_37890__$1 = inst_37898;
var state_37946__$1 = (function (){var statearr_37982 = state_37946;
(statearr_37982[(12)] = inst_37887__$1);

(statearr_37982[(17)] = inst_37897);

(statearr_37982[(14)] = inst_37889__$1);

(statearr_37982[(15)] = inst_37888__$1);

(statearr_37982[(16)] = inst_37890__$1);

return statearr_37982;
})();
var statearr_37983_38938 = state_37946__$1;
(statearr_37983_38938[(2)] = null);

(statearr_37983_38938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (18))){
var inst_37916 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37984_38939 = state_37946__$1;
(statearr_37984_38939[(2)] = inst_37916);

(statearr_37984_38939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (8))){
var inst_37889 = (state_37946[(14)]);
var inst_37890 = (state_37946[(16)]);
var inst_37892 = (inst_37890 < inst_37889);
var inst_37893 = inst_37892;
var state_37946__$1 = state_37946;
if(cljs.core.truth_(inst_37893)){
var statearr_37985_38940 = state_37946__$1;
(statearr_37985_38940[(1)] = (10));

} else {
var statearr_37986_38941 = state_37946__$1;
(statearr_37986_38941[(1)] = (11));

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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_37987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37987[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_37987[(1)] = (1));

return statearr_37987;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_37946){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_37946);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e37988){if((e37988 instanceof Object)){
var ex__36935__auto__ = e37988;
var statearr_37989_38942 = state_37946;
(statearr_37989_38942[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38943 = state_37946;
state_37946 = G__38943;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_37946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_37946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_37990 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_37990[(6)] = c__36999__auto___38904);

return statearr_37990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var G__37992 = arguments.length;
switch (G__37992) {
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
var G__37994 = arguments.length;
switch (G__37994) {
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
var G__37996 = arguments.length;
switch (G__37996) {
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
var c__36999__auto___38947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38035){
var state_val_38036 = (state_38035[(1)]);
if((state_val_38036 === (7))){
var state_38035__$1 = state_38035;
var statearr_38037_38948 = state_38035__$1;
(statearr_38037_38948[(2)] = null);

(statearr_38037_38948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (1))){
var state_38035__$1 = state_38035;
var statearr_38038_38949 = state_38035__$1;
(statearr_38038_38949[(2)] = null);

(statearr_38038_38949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (4))){
var inst_37999 = (state_38035[(7)]);
var inst_38001 = (inst_37999 < cnt);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_38001)){
var statearr_38039_38950 = state_38035__$1;
(statearr_38039_38950[(1)] = (6));

} else {
var statearr_38040_38951 = state_38035__$1;
(statearr_38040_38951[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (15))){
var inst_38031 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38041_38952 = state_38035__$1;
(statearr_38041_38952[(2)] = inst_38031);

(statearr_38041_38952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (13))){
var inst_38024 = cljs.core.async.close_BANG_(out);
var state_38035__$1 = state_38035;
var statearr_38042_38953 = state_38035__$1;
(statearr_38042_38953[(2)] = inst_38024);

(statearr_38042_38953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (6))){
var state_38035__$1 = state_38035;
var statearr_38043_38954 = state_38035__$1;
(statearr_38043_38954[(2)] = null);

(statearr_38043_38954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (3))){
var inst_38033 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38035__$1,inst_38033);
} else {
if((state_val_38036 === (12))){
var inst_38021 = (state_38035[(8)]);
var inst_38021__$1 = (state_38035[(2)]);
var inst_38022 = cljs.core.some(cljs.core.nil_QMARK_,inst_38021__$1);
var state_38035__$1 = (function (){var statearr_38044 = state_38035;
(statearr_38044[(8)] = inst_38021__$1);

return statearr_38044;
})();
if(cljs.core.truth_(inst_38022)){
var statearr_38045_38955 = state_38035__$1;
(statearr_38045_38955[(1)] = (13));

} else {
var statearr_38046_38956 = state_38035__$1;
(statearr_38046_38956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (2))){
var inst_37998 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37999 = (0);
var state_38035__$1 = (function (){var statearr_38047 = state_38035;
(statearr_38047[(9)] = inst_37998);

(statearr_38047[(7)] = inst_37999);

return statearr_38047;
})();
var statearr_38048_38957 = state_38035__$1;
(statearr_38048_38957[(2)] = null);

(statearr_38048_38957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (11))){
var inst_37999 = (state_38035[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38035,(10),Object,null,(9));
var inst_38008 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37999) : chs__$1.call(null,inst_37999));
var inst_38009 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37999) : done.call(null,inst_37999));
var inst_38010 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38008,inst_38009);
var state_38035__$1 = state_38035;
var statearr_38049_38958 = state_38035__$1;
(statearr_38049_38958[(2)] = inst_38010);


cljs.core.async.impl.ioc_helpers.process_exception(state_38035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (9))){
var inst_37999 = (state_38035[(7)]);
var inst_38012 = (state_38035[(2)]);
var inst_38013 = (inst_37999 + (1));
var inst_37999__$1 = inst_38013;
var state_38035__$1 = (function (){var statearr_38050 = state_38035;
(statearr_38050[(7)] = inst_37999__$1);

(statearr_38050[(10)] = inst_38012);

return statearr_38050;
})();
var statearr_38051_38959 = state_38035__$1;
(statearr_38051_38959[(2)] = null);

(statearr_38051_38959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (5))){
var inst_38019 = (state_38035[(2)]);
var state_38035__$1 = (function (){var statearr_38052 = state_38035;
(statearr_38052[(11)] = inst_38019);

return statearr_38052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38035__$1,(12),dchan);
} else {
if((state_val_38036 === (14))){
var inst_38021 = (state_38035[(8)]);
var inst_38026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38021);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38035__$1,(16),out,inst_38026);
} else {
if((state_val_38036 === (16))){
var inst_38028 = (state_38035[(2)]);
var state_38035__$1 = (function (){var statearr_38053 = state_38035;
(statearr_38053[(12)] = inst_38028);

return statearr_38053;
})();
var statearr_38054_38960 = state_38035__$1;
(statearr_38054_38960[(2)] = null);

(statearr_38054_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (10))){
var inst_38003 = (state_38035[(2)]);
var inst_38004 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38035__$1 = (function (){var statearr_38055 = state_38035;
(statearr_38055[(13)] = inst_38003);

return statearr_38055;
})();
var statearr_38056_38961 = state_38035__$1;
(statearr_38056_38961[(2)] = inst_38004);


cljs.core.async.impl.ioc_helpers.process_exception(state_38035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (8))){
var inst_38017 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38057_38962 = state_38035__$1;
(statearr_38057_38962[(2)] = inst_38017);

(statearr_38057_38962[(1)] = (5));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38058[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38058[(1)] = (1));

return statearr_38058;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38035){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38035);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38059){if((e38059 instanceof Object)){
var ex__36935__auto__ = e38059;
var statearr_38060_38963 = state_38035;
(statearr_38060_38963[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38035;
state_38035 = G__38964;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38061 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38061[(6)] = c__36999__auto___38947);

return statearr_38061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var G__38064 = arguments.length;
switch (G__38064) {
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
var c__36999__auto___38966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38096){
var state_val_38097 = (state_38096[(1)]);
if((state_val_38097 === (7))){
var inst_38076 = (state_38096[(7)]);
var inst_38075 = (state_38096[(8)]);
var inst_38075__$1 = (state_38096[(2)]);
var inst_38076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38075__$1,(0),null);
var inst_38077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38075__$1,(1),null);
var inst_38078 = (inst_38076__$1 == null);
var state_38096__$1 = (function (){var statearr_38098 = state_38096;
(statearr_38098[(7)] = inst_38076__$1);

(statearr_38098[(9)] = inst_38077);

(statearr_38098[(8)] = inst_38075__$1);

return statearr_38098;
})();
if(cljs.core.truth_(inst_38078)){
var statearr_38099_38967 = state_38096__$1;
(statearr_38099_38967[(1)] = (8));

} else {
var statearr_38100_38968 = state_38096__$1;
(statearr_38100_38968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (1))){
var inst_38065 = cljs.core.vec(chs);
var inst_38066 = inst_38065;
var state_38096__$1 = (function (){var statearr_38101 = state_38096;
(statearr_38101[(10)] = inst_38066);

return statearr_38101;
})();
var statearr_38102_38969 = state_38096__$1;
(statearr_38102_38969[(2)] = null);

(statearr_38102_38969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (4))){
var inst_38066 = (state_38096[(10)]);
var state_38096__$1 = state_38096;
return cljs.core.async.ioc_alts_BANG_(state_38096__$1,(7),inst_38066);
} else {
if((state_val_38097 === (6))){
var inst_38092 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38103_38970 = state_38096__$1;
(statearr_38103_38970[(2)] = inst_38092);

(statearr_38103_38970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (3))){
var inst_38094 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38096__$1,inst_38094);
} else {
if((state_val_38097 === (2))){
var inst_38066 = (state_38096[(10)]);
var inst_38068 = cljs.core.count(inst_38066);
var inst_38069 = (inst_38068 > (0));
var state_38096__$1 = state_38096;
if(cljs.core.truth_(inst_38069)){
var statearr_38105_38971 = state_38096__$1;
(statearr_38105_38971[(1)] = (4));

} else {
var statearr_38106_38972 = state_38096__$1;
(statearr_38106_38972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (11))){
var inst_38066 = (state_38096[(10)]);
var inst_38085 = (state_38096[(2)]);
var tmp38104 = inst_38066;
var inst_38066__$1 = tmp38104;
var state_38096__$1 = (function (){var statearr_38107 = state_38096;
(statearr_38107[(10)] = inst_38066__$1);

(statearr_38107[(11)] = inst_38085);

return statearr_38107;
})();
var statearr_38108_38973 = state_38096__$1;
(statearr_38108_38973[(2)] = null);

(statearr_38108_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (9))){
var inst_38076 = (state_38096[(7)]);
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38096__$1,(11),out,inst_38076);
} else {
if((state_val_38097 === (5))){
var inst_38090 = cljs.core.async.close_BANG_(out);
var state_38096__$1 = state_38096;
var statearr_38109_38974 = state_38096__$1;
(statearr_38109_38974[(2)] = inst_38090);

(statearr_38109_38974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (10))){
var inst_38088 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38110_38978 = state_38096__$1;
(statearr_38110_38978[(2)] = inst_38088);

(statearr_38110_38978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (8))){
var inst_38066 = (state_38096[(10)]);
var inst_38076 = (state_38096[(7)]);
var inst_38077 = (state_38096[(9)]);
var inst_38075 = (state_38096[(8)]);
var inst_38080 = (function (){var cs = inst_38066;
var vec__38071 = inst_38075;
var v = inst_38076;
var c = inst_38077;
return (function (p1__38062_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38062_SHARP_);
});
})();
var inst_38081 = cljs.core.filterv(inst_38080,inst_38066);
var inst_38066__$1 = inst_38081;
var state_38096__$1 = (function (){var statearr_38111 = state_38096;
(statearr_38111[(10)] = inst_38066__$1);

return statearr_38111;
})();
var statearr_38112_38979 = state_38096__$1;
(statearr_38112_38979[(2)] = null);

(statearr_38112_38979[(1)] = (2));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38113[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38113[(1)] = (1));

return statearr_38113;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38096){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38096);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38114){if((e38114 instanceof Object)){
var ex__36935__auto__ = e38114;
var statearr_38115_38981 = state_38096;
(statearr_38115_38981[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38096;
state_38096 = G__38983;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38116 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38116[(6)] = c__36999__auto___38966);

return statearr_38116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
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
var G__38118 = arguments.length;
switch (G__38118) {
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
var c__36999__auto___38985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38142){
var state_val_38143 = (state_38142[(1)]);
if((state_val_38143 === (7))){
var inst_38124 = (state_38142[(7)]);
var inst_38124__$1 = (state_38142[(2)]);
var inst_38125 = (inst_38124__$1 == null);
var inst_38126 = cljs.core.not(inst_38125);
var state_38142__$1 = (function (){var statearr_38144 = state_38142;
(statearr_38144[(7)] = inst_38124__$1);

return statearr_38144;
})();
if(inst_38126){
var statearr_38145_38986 = state_38142__$1;
(statearr_38145_38986[(1)] = (8));

} else {
var statearr_38146_38987 = state_38142__$1;
(statearr_38146_38987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (1))){
var inst_38119 = (0);
var state_38142__$1 = (function (){var statearr_38147 = state_38142;
(statearr_38147[(8)] = inst_38119);

return statearr_38147;
})();
var statearr_38148_38988 = state_38142__$1;
(statearr_38148_38988[(2)] = null);

(statearr_38148_38988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (4))){
var state_38142__$1 = state_38142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38142__$1,(7),ch);
} else {
if((state_val_38143 === (6))){
var inst_38137 = (state_38142[(2)]);
var state_38142__$1 = state_38142;
var statearr_38149_38989 = state_38142__$1;
(statearr_38149_38989[(2)] = inst_38137);

(statearr_38149_38989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (3))){
var inst_38139 = (state_38142[(2)]);
var inst_38140 = cljs.core.async.close_BANG_(out);
var state_38142__$1 = (function (){var statearr_38150 = state_38142;
(statearr_38150[(9)] = inst_38139);

return statearr_38150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38142__$1,inst_38140);
} else {
if((state_val_38143 === (2))){
var inst_38119 = (state_38142[(8)]);
var inst_38121 = (inst_38119 < n);
var state_38142__$1 = state_38142;
if(cljs.core.truth_(inst_38121)){
var statearr_38151_38991 = state_38142__$1;
(statearr_38151_38991[(1)] = (4));

} else {
var statearr_38152_38992 = state_38142__$1;
(statearr_38152_38992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (11))){
var inst_38119 = (state_38142[(8)]);
var inst_38129 = (state_38142[(2)]);
var inst_38130 = (inst_38119 + (1));
var inst_38119__$1 = inst_38130;
var state_38142__$1 = (function (){var statearr_38153 = state_38142;
(statearr_38153[(10)] = inst_38129);

(statearr_38153[(8)] = inst_38119__$1);

return statearr_38153;
})();
var statearr_38154_38993 = state_38142__$1;
(statearr_38154_38993[(2)] = null);

(statearr_38154_38993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (9))){
var state_38142__$1 = state_38142;
var statearr_38155_38994 = state_38142__$1;
(statearr_38155_38994[(2)] = null);

(statearr_38155_38994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (5))){
var state_38142__$1 = state_38142;
var statearr_38156_38995 = state_38142__$1;
(statearr_38156_38995[(2)] = null);

(statearr_38156_38995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (10))){
var inst_38134 = (state_38142[(2)]);
var state_38142__$1 = state_38142;
var statearr_38157_38996 = state_38142__$1;
(statearr_38157_38996[(2)] = inst_38134);

(statearr_38157_38996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (8))){
var inst_38124 = (state_38142[(7)]);
var state_38142__$1 = state_38142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38142__$1,(11),out,inst_38124);
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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38158[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38158[(1)] = (1));

return statearr_38158;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38142){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38142);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38159){if((e38159 instanceof Object)){
var ex__36935__auto__ = e38159;
var statearr_38160_38997 = state_38142;
(statearr_38160_38997[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38998 = state_38142;
state_38142 = G__38998;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38161 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38161[(6)] = c__36999__auto___38985);

return statearr_38161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38163 = (function (f,ch,meta38164){
this.f = f;
this.ch = ch;
this.meta38164 = meta38164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38165,meta38164__$1){
var self__ = this;
var _38165__$1 = this;
return (new cljs.core.async.t_cljs$core$async38163(self__.f,self__.ch,meta38164__$1));
}));

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38165){
var self__ = this;
var _38165__$1 = this;
return self__.meta38164;
}));

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38166 = (function (f,ch,meta38164,_,fn1,meta38167){
this.f = f;
this.ch = ch;
this.meta38164 = meta38164;
this._ = _;
this.fn1 = fn1;
this.meta38167 = meta38167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38168,meta38167__$1){
var self__ = this;
var _38168__$1 = this;
return (new cljs.core.async.t_cljs$core$async38166(self__.f,self__.ch,self__.meta38164,self__._,self__.fn1,meta38167__$1));
}));

(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38168){
var self__ = this;
var _38168__$1 = this;
return self__.meta38167;
}));

(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38162_SHARP_){
var G__38169 = (((p1__38162_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38162_SHARP_) : self__.f.call(null,p1__38162_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38169) : f1.call(null,G__38169));
});
}));

(cljs.core.async.t_cljs$core$async38166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38164","meta38164",-1104638056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38163","cljs.core.async/t_cljs$core$async38163",1387296073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38167","meta38167",1255583046,null)], null);
}));

(cljs.core.async.t_cljs$core$async38166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38166");

(cljs.core.async.t_cljs$core$async38166.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38166.
 */
cljs.core.async.__GT_t_cljs$core$async38166 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38166(f__$1,ch__$1,meta38164__$1,___$2,fn1__$1,meta38167){
return (new cljs.core.async.t_cljs$core$async38166(f__$1,ch__$1,meta38164__$1,___$2,fn1__$1,meta38167));
});

}

return (new cljs.core.async.t_cljs$core$async38166(self__.f,self__.ch,self__.meta38164,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38170 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38170) : self__.f.call(null,G__38170));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38164","meta38164",-1104638056,null)], null);
}));

(cljs.core.async.t_cljs$core$async38163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38163");

(cljs.core.async.t_cljs$core$async38163.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38163.
 */
cljs.core.async.__GT_t_cljs$core$async38163 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38163(f__$1,ch__$1,meta38164){
return (new cljs.core.async.t_cljs$core$async38163(f__$1,ch__$1,meta38164));
});

}

return (new cljs.core.async.t_cljs$core$async38163(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38171 = (function (f,ch,meta38172){
this.f = f;
this.ch = ch;
this.meta38172 = meta38172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38173,meta38172__$1){
var self__ = this;
var _38173__$1 = this;
return (new cljs.core.async.t_cljs$core$async38171(self__.f,self__.ch,meta38172__$1));
}));

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38173){
var self__ = this;
var _38173__$1 = this;
return self__.meta38172;
}));

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38172","meta38172",-636721507,null)], null);
}));

(cljs.core.async.t_cljs$core$async38171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38171");

(cljs.core.async.t_cljs$core$async38171.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38171.
 */
cljs.core.async.__GT_t_cljs$core$async38171 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38171(f__$1,ch__$1,meta38172){
return (new cljs.core.async.t_cljs$core$async38171(f__$1,ch__$1,meta38172));
});

}

return (new cljs.core.async.t_cljs$core$async38171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38174 = (function (p,ch,meta38175){
this.p = p;
this.ch = ch;
this.meta38175 = meta38175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38176,meta38175__$1){
var self__ = this;
var _38176__$1 = this;
return (new cljs.core.async.t_cljs$core$async38174(self__.p,self__.ch,meta38175__$1));
}));

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38176){
var self__ = this;
var _38176__$1 = this;
return self__.meta38175;
}));

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38175","meta38175",-1877211707,null)], null);
}));

(cljs.core.async.t_cljs$core$async38174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38174");

(cljs.core.async.t_cljs$core$async38174.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38174.
 */
cljs.core.async.__GT_t_cljs$core$async38174 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38174(p__$1,ch__$1,meta38175){
return (new cljs.core.async.t_cljs$core$async38174(p__$1,ch__$1,meta38175));
});

}

return (new cljs.core.async.t_cljs$core$async38174(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38178 = arguments.length;
switch (G__38178) {
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
var c__36999__auto___39000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38199){
var state_val_38200 = (state_38199[(1)]);
if((state_val_38200 === (7))){
var inst_38195 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38201_39001 = state_38199__$1;
(statearr_38201_39001[(2)] = inst_38195);

(statearr_38201_39001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (1))){
var state_38199__$1 = state_38199;
var statearr_38202_39002 = state_38199__$1;
(statearr_38202_39002[(2)] = null);

(statearr_38202_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (4))){
var inst_38181 = (state_38199[(7)]);
var inst_38181__$1 = (state_38199[(2)]);
var inst_38182 = (inst_38181__$1 == null);
var state_38199__$1 = (function (){var statearr_38203 = state_38199;
(statearr_38203[(7)] = inst_38181__$1);

return statearr_38203;
})();
if(cljs.core.truth_(inst_38182)){
var statearr_38204_39003 = state_38199__$1;
(statearr_38204_39003[(1)] = (5));

} else {
var statearr_38205_39004 = state_38199__$1;
(statearr_38205_39004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (6))){
var inst_38181 = (state_38199[(7)]);
var inst_38186 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38181) : p.call(null,inst_38181));
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38186)){
var statearr_38206_39005 = state_38199__$1;
(statearr_38206_39005[(1)] = (8));

} else {
var statearr_38207_39006 = state_38199__$1;
(statearr_38207_39006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (3))){
var inst_38197 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38199__$1,inst_38197);
} else {
if((state_val_38200 === (2))){
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38199__$1,(4),ch);
} else {
if((state_val_38200 === (11))){
var inst_38189 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38208_39007 = state_38199__$1;
(statearr_38208_39007[(2)] = inst_38189);

(statearr_38208_39007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (9))){
var state_38199__$1 = state_38199;
var statearr_38209_39008 = state_38199__$1;
(statearr_38209_39008[(2)] = null);

(statearr_38209_39008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (5))){
var inst_38184 = cljs.core.async.close_BANG_(out);
var state_38199__$1 = state_38199;
var statearr_38210_39009 = state_38199__$1;
(statearr_38210_39009[(2)] = inst_38184);

(statearr_38210_39009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (10))){
var inst_38192 = (state_38199[(2)]);
var state_38199__$1 = (function (){var statearr_38211 = state_38199;
(statearr_38211[(8)] = inst_38192);

return statearr_38211;
})();
var statearr_38212_39010 = state_38199__$1;
(statearr_38212_39010[(2)] = null);

(statearr_38212_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (8))){
var inst_38181 = (state_38199[(7)]);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38199__$1,(11),out,inst_38181);
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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38213 = [null,null,null,null,null,null,null,null,null];
(statearr_38213[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38213[(1)] = (1));

return statearr_38213;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38199){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38199);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38214){if((e38214 instanceof Object)){
var ex__36935__auto__ = e38214;
var statearr_38215_39011 = state_38199;
(statearr_38215_39011[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39012 = state_38199;
state_38199 = G__39012;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38216 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38216[(6)] = c__36999__auto___39000);

return statearr_38216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38218 = arguments.length;
switch (G__38218) {
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
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38280){
var state_val_38281 = (state_38280[(1)]);
if((state_val_38281 === (7))){
var inst_38276 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
var statearr_38282_39014 = state_38280__$1;
(statearr_38282_39014[(2)] = inst_38276);

(statearr_38282_39014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (20))){
var inst_38246 = (state_38280[(7)]);
var inst_38257 = (state_38280[(2)]);
var inst_38258 = cljs.core.next(inst_38246);
var inst_38232 = inst_38258;
var inst_38233 = null;
var inst_38234 = (0);
var inst_38235 = (0);
var state_38280__$1 = (function (){var statearr_38283 = state_38280;
(statearr_38283[(8)] = inst_38257);

(statearr_38283[(9)] = inst_38235);

(statearr_38283[(10)] = inst_38234);

(statearr_38283[(11)] = inst_38232);

(statearr_38283[(12)] = inst_38233);

return statearr_38283;
})();
var statearr_38284_39015 = state_38280__$1;
(statearr_38284_39015[(2)] = null);

(statearr_38284_39015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (1))){
var state_38280__$1 = state_38280;
var statearr_38285_39016 = state_38280__$1;
(statearr_38285_39016[(2)] = null);

(statearr_38285_39016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (4))){
var inst_38221 = (state_38280[(13)]);
var inst_38221__$1 = (state_38280[(2)]);
var inst_38222 = (inst_38221__$1 == null);
var state_38280__$1 = (function (){var statearr_38286 = state_38280;
(statearr_38286[(13)] = inst_38221__$1);

return statearr_38286;
})();
if(cljs.core.truth_(inst_38222)){
var statearr_38287_39017 = state_38280__$1;
(statearr_38287_39017[(1)] = (5));

} else {
var statearr_38288_39018 = state_38280__$1;
(statearr_38288_39018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (15))){
var state_38280__$1 = state_38280;
var statearr_38292_39019 = state_38280__$1;
(statearr_38292_39019[(2)] = null);

(statearr_38292_39019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (21))){
var state_38280__$1 = state_38280;
var statearr_38293_39020 = state_38280__$1;
(statearr_38293_39020[(2)] = null);

(statearr_38293_39020[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (13))){
var inst_38235 = (state_38280[(9)]);
var inst_38234 = (state_38280[(10)]);
var inst_38232 = (state_38280[(11)]);
var inst_38233 = (state_38280[(12)]);
var inst_38242 = (state_38280[(2)]);
var inst_38243 = (inst_38235 + (1));
var tmp38289 = inst_38234;
var tmp38290 = inst_38232;
var tmp38291 = inst_38233;
var inst_38232__$1 = tmp38290;
var inst_38233__$1 = tmp38291;
var inst_38234__$1 = tmp38289;
var inst_38235__$1 = inst_38243;
var state_38280__$1 = (function (){var statearr_38294 = state_38280;
(statearr_38294[(14)] = inst_38242);

(statearr_38294[(9)] = inst_38235__$1);

(statearr_38294[(10)] = inst_38234__$1);

(statearr_38294[(11)] = inst_38232__$1);

(statearr_38294[(12)] = inst_38233__$1);

return statearr_38294;
})();
var statearr_38295_39021 = state_38280__$1;
(statearr_38295_39021[(2)] = null);

(statearr_38295_39021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (22))){
var state_38280__$1 = state_38280;
var statearr_38296_39022 = state_38280__$1;
(statearr_38296_39022[(2)] = null);

(statearr_38296_39022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (6))){
var inst_38221 = (state_38280[(13)]);
var inst_38230 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38221) : f.call(null,inst_38221));
var inst_38231 = cljs.core.seq(inst_38230);
var inst_38232 = inst_38231;
var inst_38233 = null;
var inst_38234 = (0);
var inst_38235 = (0);
var state_38280__$1 = (function (){var statearr_38297 = state_38280;
(statearr_38297[(9)] = inst_38235);

(statearr_38297[(10)] = inst_38234);

(statearr_38297[(11)] = inst_38232);

(statearr_38297[(12)] = inst_38233);

return statearr_38297;
})();
var statearr_38298_39023 = state_38280__$1;
(statearr_38298_39023[(2)] = null);

(statearr_38298_39023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (17))){
var inst_38246 = (state_38280[(7)]);
var inst_38250 = cljs.core.chunk_first(inst_38246);
var inst_38251 = cljs.core.chunk_rest(inst_38246);
var inst_38252 = cljs.core.count(inst_38250);
var inst_38232 = inst_38251;
var inst_38233 = inst_38250;
var inst_38234 = inst_38252;
var inst_38235 = (0);
var state_38280__$1 = (function (){var statearr_38299 = state_38280;
(statearr_38299[(9)] = inst_38235);

(statearr_38299[(10)] = inst_38234);

(statearr_38299[(11)] = inst_38232);

(statearr_38299[(12)] = inst_38233);

return statearr_38299;
})();
var statearr_38300_39024 = state_38280__$1;
(statearr_38300_39024[(2)] = null);

(statearr_38300_39024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (3))){
var inst_38278 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38280__$1,inst_38278);
} else {
if((state_val_38281 === (12))){
var inst_38266 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
var statearr_38301_39025 = state_38280__$1;
(statearr_38301_39025[(2)] = inst_38266);

(statearr_38301_39025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (2))){
var state_38280__$1 = state_38280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38280__$1,(4),in$);
} else {
if((state_val_38281 === (23))){
var inst_38274 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
var statearr_38302_39026 = state_38280__$1;
(statearr_38302_39026[(2)] = inst_38274);

(statearr_38302_39026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (19))){
var inst_38261 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
var statearr_38303_39027 = state_38280__$1;
(statearr_38303_39027[(2)] = inst_38261);

(statearr_38303_39027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (11))){
var inst_38232 = (state_38280[(11)]);
var inst_38246 = (state_38280[(7)]);
var inst_38246__$1 = cljs.core.seq(inst_38232);
var state_38280__$1 = (function (){var statearr_38304 = state_38280;
(statearr_38304[(7)] = inst_38246__$1);

return statearr_38304;
})();
if(inst_38246__$1){
var statearr_38305_39028 = state_38280__$1;
(statearr_38305_39028[(1)] = (14));

} else {
var statearr_38306_39029 = state_38280__$1;
(statearr_38306_39029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (9))){
var inst_38268 = (state_38280[(2)]);
var inst_38269 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38280__$1 = (function (){var statearr_38307 = state_38280;
(statearr_38307[(15)] = inst_38268);

return statearr_38307;
})();
if(cljs.core.truth_(inst_38269)){
var statearr_38308_39030 = state_38280__$1;
(statearr_38308_39030[(1)] = (21));

} else {
var statearr_38309_39031 = state_38280__$1;
(statearr_38309_39031[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (5))){
var inst_38224 = cljs.core.async.close_BANG_(out);
var state_38280__$1 = state_38280;
var statearr_38310_39032 = state_38280__$1;
(statearr_38310_39032[(2)] = inst_38224);

(statearr_38310_39032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (14))){
var inst_38246 = (state_38280[(7)]);
var inst_38248 = cljs.core.chunked_seq_QMARK_(inst_38246);
var state_38280__$1 = state_38280;
if(inst_38248){
var statearr_38311_39033 = state_38280__$1;
(statearr_38311_39033[(1)] = (17));

} else {
var statearr_38312_39034 = state_38280__$1;
(statearr_38312_39034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (16))){
var inst_38264 = (state_38280[(2)]);
var state_38280__$1 = state_38280;
var statearr_38313_39035 = state_38280__$1;
(statearr_38313_39035[(2)] = inst_38264);

(statearr_38313_39035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38281 === (10))){
var inst_38235 = (state_38280[(9)]);
var inst_38233 = (state_38280[(12)]);
var inst_38240 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38233,inst_38235);
var state_38280__$1 = state_38280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38280__$1,(13),out,inst_38240);
} else {
if((state_val_38281 === (18))){
var inst_38246 = (state_38280[(7)]);
var inst_38255 = cljs.core.first(inst_38246);
var state_38280__$1 = state_38280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38280__$1,(20),out,inst_38255);
} else {
if((state_val_38281 === (8))){
var inst_38235 = (state_38280[(9)]);
var inst_38234 = (state_38280[(10)]);
var inst_38237 = (inst_38235 < inst_38234);
var inst_38238 = inst_38237;
var state_38280__$1 = state_38280;
if(cljs.core.truth_(inst_38238)){
var statearr_38314_39036 = state_38280__$1;
(statearr_38314_39036[(1)] = (10));

} else {
var statearr_38315_39037 = state_38280__$1;
(statearr_38315_39037[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____0 = (function (){
var statearr_38316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38316[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__);

(statearr_38316[(1)] = (1));

return statearr_38316;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____1 = (function (state_38280){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38280);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38317){if((e38317 instanceof Object)){
var ex__36935__auto__ = e38317;
var statearr_38318_39038 = state_38280;
(statearr_38318_39038[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39039 = state_38280;
state_38280 = G__39039;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__ = function(state_38280){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____1.call(this,state_38280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36932__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38319 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38319[(6)] = c__36999__auto__);

return statearr_38319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38321 = arguments.length;
switch (G__38321) {
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
var G__38323 = arguments.length;
switch (G__38323) {
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
var G__38325 = arguments.length;
switch (G__38325) {
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
var c__36999__auto___39043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38349){
var state_val_38350 = (state_38349[(1)]);
if((state_val_38350 === (7))){
var inst_38344 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38351_39044 = state_38349__$1;
(statearr_38351_39044[(2)] = inst_38344);

(statearr_38351_39044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (1))){
var inst_38326 = null;
var state_38349__$1 = (function (){var statearr_38352 = state_38349;
(statearr_38352[(7)] = inst_38326);

return statearr_38352;
})();
var statearr_38353_39046 = state_38349__$1;
(statearr_38353_39046[(2)] = null);

(statearr_38353_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (4))){
var inst_38329 = (state_38349[(8)]);
var inst_38329__$1 = (state_38349[(2)]);
var inst_38330 = (inst_38329__$1 == null);
var inst_38331 = cljs.core.not(inst_38330);
var state_38349__$1 = (function (){var statearr_38354 = state_38349;
(statearr_38354[(8)] = inst_38329__$1);

return statearr_38354;
})();
if(inst_38331){
var statearr_38355_39047 = state_38349__$1;
(statearr_38355_39047[(1)] = (5));

} else {
var statearr_38356_39048 = state_38349__$1;
(statearr_38356_39048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (6))){
var state_38349__$1 = state_38349;
var statearr_38357_39049 = state_38349__$1;
(statearr_38357_39049[(2)] = null);

(statearr_38357_39049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (3))){
var inst_38346 = (state_38349[(2)]);
var inst_38347 = cljs.core.async.close_BANG_(out);
var state_38349__$1 = (function (){var statearr_38358 = state_38349;
(statearr_38358[(9)] = inst_38346);

return statearr_38358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38349__$1,inst_38347);
} else {
if((state_val_38350 === (2))){
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38349__$1,(4),ch);
} else {
if((state_val_38350 === (11))){
var inst_38329 = (state_38349[(8)]);
var inst_38338 = (state_38349[(2)]);
var inst_38326 = inst_38329;
var state_38349__$1 = (function (){var statearr_38359 = state_38349;
(statearr_38359[(10)] = inst_38338);

(statearr_38359[(7)] = inst_38326);

return statearr_38359;
})();
var statearr_38360_39053 = state_38349__$1;
(statearr_38360_39053[(2)] = null);

(statearr_38360_39053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (9))){
var inst_38329 = (state_38349[(8)]);
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38349__$1,(11),out,inst_38329);
} else {
if((state_val_38350 === (5))){
var inst_38329 = (state_38349[(8)]);
var inst_38326 = (state_38349[(7)]);
var inst_38333 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38329,inst_38326);
var state_38349__$1 = state_38349;
if(inst_38333){
var statearr_38362_39055 = state_38349__$1;
(statearr_38362_39055[(1)] = (8));

} else {
var statearr_38363_39059 = state_38349__$1;
(statearr_38363_39059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (10))){
var inst_38341 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38364_39061 = state_38349__$1;
(statearr_38364_39061[(2)] = inst_38341);

(statearr_38364_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (8))){
var inst_38326 = (state_38349[(7)]);
var tmp38361 = inst_38326;
var inst_38326__$1 = tmp38361;
var state_38349__$1 = (function (){var statearr_38365 = state_38349;
(statearr_38365[(7)] = inst_38326__$1);

return statearr_38365;
})();
var statearr_38366_39062 = state_38349__$1;
(statearr_38366_39062[(2)] = null);

(statearr_38366_39062[(1)] = (2));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38367[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38367[(1)] = (1));

return statearr_38367;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38349){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38349);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38368){if((e38368 instanceof Object)){
var ex__36935__auto__ = e38368;
var statearr_38369_39063 = state_38349;
(statearr_38369_39063[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39064 = state_38349;
state_38349 = G__39064;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38370 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38370[(6)] = c__36999__auto___39043);

return statearr_38370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38372 = arguments.length;
switch (G__38372) {
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
var c__36999__auto___39066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38410){
var state_val_38411 = (state_38410[(1)]);
if((state_val_38411 === (7))){
var inst_38406 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38412_39067 = state_38410__$1;
(statearr_38412_39067[(2)] = inst_38406);

(statearr_38412_39067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (1))){
var inst_38373 = (new Array(n));
var inst_38374 = inst_38373;
var inst_38375 = (0);
var state_38410__$1 = (function (){var statearr_38413 = state_38410;
(statearr_38413[(7)] = inst_38375);

(statearr_38413[(8)] = inst_38374);

return statearr_38413;
})();
var statearr_38414_39068 = state_38410__$1;
(statearr_38414_39068[(2)] = null);

(statearr_38414_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (4))){
var inst_38378 = (state_38410[(9)]);
var inst_38378__$1 = (state_38410[(2)]);
var inst_38379 = (inst_38378__$1 == null);
var inst_38380 = cljs.core.not(inst_38379);
var state_38410__$1 = (function (){var statearr_38415 = state_38410;
(statearr_38415[(9)] = inst_38378__$1);

return statearr_38415;
})();
if(inst_38380){
var statearr_38416_39069 = state_38410__$1;
(statearr_38416_39069[(1)] = (5));

} else {
var statearr_38417_39070 = state_38410__$1;
(statearr_38417_39070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (15))){
var inst_38400 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38418_39071 = state_38410__$1;
(statearr_38418_39071[(2)] = inst_38400);

(statearr_38418_39071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (13))){
var state_38410__$1 = state_38410;
var statearr_38419_39075 = state_38410__$1;
(statearr_38419_39075[(2)] = null);

(statearr_38419_39075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (6))){
var inst_38375 = (state_38410[(7)]);
var inst_38396 = (inst_38375 > (0));
var state_38410__$1 = state_38410;
if(cljs.core.truth_(inst_38396)){
var statearr_38420_39079 = state_38410__$1;
(statearr_38420_39079[(1)] = (12));

} else {
var statearr_38421_39080 = state_38410__$1;
(statearr_38421_39080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (3))){
var inst_38408 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38410__$1,inst_38408);
} else {
if((state_val_38411 === (12))){
var inst_38374 = (state_38410[(8)]);
var inst_38398 = cljs.core.vec(inst_38374);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38410__$1,(15),out,inst_38398);
} else {
if((state_val_38411 === (2))){
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38410__$1,(4),ch);
} else {
if((state_val_38411 === (11))){
var inst_38390 = (state_38410[(2)]);
var inst_38391 = (new Array(n));
var inst_38374 = inst_38391;
var inst_38375 = (0);
var state_38410__$1 = (function (){var statearr_38422 = state_38410;
(statearr_38422[(7)] = inst_38375);

(statearr_38422[(10)] = inst_38390);

(statearr_38422[(8)] = inst_38374);

return statearr_38422;
})();
var statearr_38423_39084 = state_38410__$1;
(statearr_38423_39084[(2)] = null);

(statearr_38423_39084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (9))){
var inst_38374 = (state_38410[(8)]);
var inst_38388 = cljs.core.vec(inst_38374);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38410__$1,(11),out,inst_38388);
} else {
if((state_val_38411 === (5))){
var inst_38383 = (state_38410[(11)]);
var inst_38378 = (state_38410[(9)]);
var inst_38375 = (state_38410[(7)]);
var inst_38374 = (state_38410[(8)]);
var inst_38382 = (inst_38374[inst_38375] = inst_38378);
var inst_38383__$1 = (inst_38375 + (1));
var inst_38384 = (inst_38383__$1 < n);
var state_38410__$1 = (function (){var statearr_38424 = state_38410;
(statearr_38424[(11)] = inst_38383__$1);

(statearr_38424[(12)] = inst_38382);

return statearr_38424;
})();
if(cljs.core.truth_(inst_38384)){
var statearr_38425_39088 = state_38410__$1;
(statearr_38425_39088[(1)] = (8));

} else {
var statearr_38426_39089 = state_38410__$1;
(statearr_38426_39089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (14))){
var inst_38403 = (state_38410[(2)]);
var inst_38404 = cljs.core.async.close_BANG_(out);
var state_38410__$1 = (function (){var statearr_38428 = state_38410;
(statearr_38428[(13)] = inst_38403);

return statearr_38428;
})();
var statearr_38429_39090 = state_38410__$1;
(statearr_38429_39090[(2)] = inst_38404);

(statearr_38429_39090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (10))){
var inst_38394 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38430_39091 = state_38410__$1;
(statearr_38430_39091[(2)] = inst_38394);

(statearr_38430_39091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (8))){
var inst_38383 = (state_38410[(11)]);
var inst_38374 = (state_38410[(8)]);
var tmp38427 = inst_38374;
var inst_38374__$1 = tmp38427;
var inst_38375 = inst_38383;
var state_38410__$1 = (function (){var statearr_38431 = state_38410;
(statearr_38431[(7)] = inst_38375);

(statearr_38431[(8)] = inst_38374__$1);

return statearr_38431;
})();
var statearr_38432_39092 = state_38410__$1;
(statearr_38432_39092[(2)] = null);

(statearr_38432_39092[(1)] = (2));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38433[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38433[(1)] = (1));

return statearr_38433;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38410){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38410);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38434){if((e38434 instanceof Object)){
var ex__36935__auto__ = e38434;
var statearr_38435_39096 = state_38410;
(statearr_38435_39096[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39097 = state_38410;
state_38410 = G__39097;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38436 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38436[(6)] = c__36999__auto___39066);

return statearr_38436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38438 = arguments.length;
switch (G__38438) {
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
var c__36999__auto___39099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_38480){
var state_val_38481 = (state_38480[(1)]);
if((state_val_38481 === (7))){
var inst_38476 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38482_39100 = state_38480__$1;
(statearr_38482_39100[(2)] = inst_38476);

(statearr_38482_39100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (1))){
var inst_38439 = [];
var inst_38440 = inst_38439;
var inst_38441 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38480__$1 = (function (){var statearr_38483 = state_38480;
(statearr_38483[(7)] = inst_38441);

(statearr_38483[(8)] = inst_38440);

return statearr_38483;
})();
var statearr_38484_39101 = state_38480__$1;
(statearr_38484_39101[(2)] = null);

(statearr_38484_39101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (4))){
var inst_38444 = (state_38480[(9)]);
var inst_38444__$1 = (state_38480[(2)]);
var inst_38445 = (inst_38444__$1 == null);
var inst_38446 = cljs.core.not(inst_38445);
var state_38480__$1 = (function (){var statearr_38485 = state_38480;
(statearr_38485[(9)] = inst_38444__$1);

return statearr_38485;
})();
if(inst_38446){
var statearr_38486_39102 = state_38480__$1;
(statearr_38486_39102[(1)] = (5));

} else {
var statearr_38487_39103 = state_38480__$1;
(statearr_38487_39103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (15))){
var inst_38470 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38488_39104 = state_38480__$1;
(statearr_38488_39104[(2)] = inst_38470);

(statearr_38488_39104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (13))){
var state_38480__$1 = state_38480;
var statearr_38489_39105 = state_38480__$1;
(statearr_38489_39105[(2)] = null);

(statearr_38489_39105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (6))){
var inst_38440 = (state_38480[(8)]);
var inst_38465 = inst_38440.length;
var inst_38466 = (inst_38465 > (0));
var state_38480__$1 = state_38480;
if(cljs.core.truth_(inst_38466)){
var statearr_38490_39112 = state_38480__$1;
(statearr_38490_39112[(1)] = (12));

} else {
var statearr_38491_39113 = state_38480__$1;
(statearr_38491_39113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (3))){
var inst_38478 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38480__$1,inst_38478);
} else {
if((state_val_38481 === (12))){
var inst_38440 = (state_38480[(8)]);
var inst_38468 = cljs.core.vec(inst_38440);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38480__$1,(15),out,inst_38468);
} else {
if((state_val_38481 === (2))){
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38480__$1,(4),ch);
} else {
if((state_val_38481 === (11))){
var inst_38444 = (state_38480[(9)]);
var inst_38448 = (state_38480[(10)]);
var inst_38458 = (state_38480[(2)]);
var inst_38459 = [];
var inst_38460 = inst_38459.push(inst_38444);
var inst_38440 = inst_38459;
var inst_38441 = inst_38448;
var state_38480__$1 = (function (){var statearr_38492 = state_38480;
(statearr_38492[(7)] = inst_38441);

(statearr_38492[(11)] = inst_38458);

(statearr_38492[(12)] = inst_38460);

(statearr_38492[(8)] = inst_38440);

return statearr_38492;
})();
var statearr_38493_39120 = state_38480__$1;
(statearr_38493_39120[(2)] = null);

(statearr_38493_39120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (9))){
var inst_38440 = (state_38480[(8)]);
var inst_38456 = cljs.core.vec(inst_38440);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38480__$1,(11),out,inst_38456);
} else {
if((state_val_38481 === (5))){
var inst_38441 = (state_38480[(7)]);
var inst_38444 = (state_38480[(9)]);
var inst_38448 = (state_38480[(10)]);
var inst_38448__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38444) : f.call(null,inst_38444));
var inst_38449 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38448__$1,inst_38441);
var inst_38450 = cljs.core.keyword_identical_QMARK_(inst_38441,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38451 = ((inst_38449) || (inst_38450));
var state_38480__$1 = (function (){var statearr_38494 = state_38480;
(statearr_38494[(10)] = inst_38448__$1);

return statearr_38494;
})();
if(cljs.core.truth_(inst_38451)){
var statearr_38495_39121 = state_38480__$1;
(statearr_38495_39121[(1)] = (8));

} else {
var statearr_38496_39122 = state_38480__$1;
(statearr_38496_39122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (14))){
var inst_38473 = (state_38480[(2)]);
var inst_38474 = cljs.core.async.close_BANG_(out);
var state_38480__$1 = (function (){var statearr_38498 = state_38480;
(statearr_38498[(13)] = inst_38473);

return statearr_38498;
})();
var statearr_38499_39123 = state_38480__$1;
(statearr_38499_39123[(2)] = inst_38474);

(statearr_38499_39123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (10))){
var inst_38463 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38500_39124 = state_38480__$1;
(statearr_38500_39124[(2)] = inst_38463);

(statearr_38500_39124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (8))){
var inst_38440 = (state_38480[(8)]);
var inst_38444 = (state_38480[(9)]);
var inst_38448 = (state_38480[(10)]);
var inst_38453 = inst_38440.push(inst_38444);
var tmp38497 = inst_38440;
var inst_38440__$1 = tmp38497;
var inst_38441 = inst_38448;
var state_38480__$1 = (function (){var statearr_38501 = state_38480;
(statearr_38501[(14)] = inst_38453);

(statearr_38501[(7)] = inst_38441);

(statearr_38501[(8)] = inst_38440__$1);

return statearr_38501;
})();
var statearr_38502_39125 = state_38480__$1;
(statearr_38502_39125[(2)] = null);

(statearr_38502_39125[(1)] = (2));


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
var cljs$core$async$state_machine__36932__auto__ = null;
var cljs$core$async$state_machine__36932__auto____0 = (function (){
var statearr_38503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38503[(0)] = cljs$core$async$state_machine__36932__auto__);

(statearr_38503[(1)] = (1));

return statearr_38503;
});
var cljs$core$async$state_machine__36932__auto____1 = (function (state_38480){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_38480);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e38504){if((e38504 instanceof Object)){
var ex__36935__auto__ = e38504;
var statearr_38505_39126 = state_38480;
(statearr_38505_39126[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39127 = state_38480;
state_38480 = G__39127;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
cljs$core$async$state_machine__36932__auto__ = function(state_38480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36932__auto____1.call(this,state_38480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36932__auto____0;
cljs$core$async$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36932__auto____1;
return cljs$core$async$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_38506 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_38506[(6)] = c__36999__auto___39099);

return statearr_38506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
