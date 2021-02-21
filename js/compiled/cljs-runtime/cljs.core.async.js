goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50476 = arguments.length;
switch (G__50476) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50477 = (function (f,blockable,meta50478){
this.f = f;
this.blockable = blockable;
this.meta50478 = meta50478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50479,meta50478__$1){
var self__ = this;
var _50479__$1 = this;
return (new cljs.core.async.t_cljs$core$async50477(self__.f,self__.blockable,meta50478__$1));
}));

(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50479){
var self__ = this;
var _50479__$1 = this;
return self__.meta50478;
}));

(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50478","meta50478",-742678817,null)], null);
}));

(cljs.core.async.t_cljs$core$async50477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50477");

(cljs.core.async.t_cljs$core$async50477.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50477.
 */
cljs.core.async.__GT_t_cljs$core$async50477 = (function cljs$core$async$__GT_t_cljs$core$async50477(f__$1,blockable__$1,meta50478){
return (new cljs.core.async.t_cljs$core$async50477(f__$1,blockable__$1,meta50478));
});

}

return (new cljs.core.async.t_cljs$core$async50477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50482 = arguments.length;
switch (G__50482) {
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
var G__50484 = arguments.length;
switch (G__50484) {
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
var G__50486 = arguments.length;
switch (G__50486) {
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
var val_51966 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51966) : fn1.call(null,val_51966));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51966) : fn1.call(null,val_51966));
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
var G__50488 = arguments.length;
switch (G__50488) {
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
var n__4613__auto___51973 = n;
var x_51974 = (0);
while(true){
if((x_51974 < n__4613__auto___51973)){
(a[x_51974] = x_51974);

var G__51975 = (x_51974 + (1));
x_51974 = G__51975;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50489 = (function (flag,meta50490){
this.flag = flag;
this.meta50490 = meta50490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50491,meta50490__$1){
var self__ = this;
var _50491__$1 = this;
return (new cljs.core.async.t_cljs$core$async50489(self__.flag,meta50490__$1));
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50491){
var self__ = this;
var _50491__$1 = this;
return self__.meta50490;
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50490","meta50490",-1569651673,null)], null);
}));

(cljs.core.async.t_cljs$core$async50489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50489");

(cljs.core.async.t_cljs$core$async50489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50489.
 */
cljs.core.async.__GT_t_cljs$core$async50489 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50489(flag__$1,meta50490){
return (new cljs.core.async.t_cljs$core$async50489(flag__$1,meta50490));
});

}

return (new cljs.core.async.t_cljs$core$async50489(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50492 = (function (flag,cb,meta50493){
this.flag = flag;
this.cb = cb;
this.meta50493 = meta50493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50494,meta50493__$1){
var self__ = this;
var _50494__$1 = this;
return (new cljs.core.async.t_cljs$core$async50492(self__.flag,self__.cb,meta50493__$1));
}));

(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50494){
var self__ = this;
var _50494__$1 = this;
return self__.meta50493;
}));

(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50493","meta50493",697967883,null)], null);
}));

(cljs.core.async.t_cljs$core$async50492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50492");

(cljs.core.async.t_cljs$core$async50492.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50492.
 */
cljs.core.async.__GT_t_cljs$core$async50492 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50492(flag__$1,cb__$1,meta50493){
return (new cljs.core.async.t_cljs$core$async50492(flag__$1,cb__$1,meta50493));
});

}

return (new cljs.core.async.t_cljs$core$async50492(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50495_SHARP_){
var G__50497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50495_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50497) : fret.call(null,G__50497));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50496_SHARP_){
var G__50498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50496_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50498) : fret.call(null,G__50498));
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
var G__51984 = (i + (1));
i = G__51984;
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
var len__4736__auto___51985 = arguments.length;
var i__4737__auto___51986 = (0);
while(true){
if((i__4737__auto___51986 < len__4736__auto___51985)){
args__4742__auto__.push((arguments[i__4737__auto___51986]));

var G__51987 = (i__4737__auto___51986 + (1));
i__4737__auto___51986 = G__51987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50501){
var map__50502 = p__50501;
var map__50502__$1 = (((((!((map__50502 == null))))?(((((map__50502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50502):map__50502);
var opts = map__50502__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50499){
var G__50500 = cljs.core.first(seq50499);
var seq50499__$1 = cljs.core.next(seq50499);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50500,seq50499__$1);
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
var G__50505 = arguments.length;
switch (G__50505) {
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
var c__50418__auto___52002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50529){
var state_val_50530 = (state_50529[(1)]);
if((state_val_50530 === (7))){
var inst_50525 = (state_50529[(2)]);
var state_50529__$1 = state_50529;
var statearr_50531_52004 = state_50529__$1;
(statearr_50531_52004[(2)] = inst_50525);

(statearr_50531_52004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (1))){
var state_50529__$1 = state_50529;
var statearr_50532_52007 = state_50529__$1;
(statearr_50532_52007[(2)] = null);

(statearr_50532_52007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (4))){
var inst_50508 = (state_50529[(7)]);
var inst_50508__$1 = (state_50529[(2)]);
var inst_50509 = (inst_50508__$1 == null);
var state_50529__$1 = (function (){var statearr_50533 = state_50529;
(statearr_50533[(7)] = inst_50508__$1);

return statearr_50533;
})();
if(cljs.core.truth_(inst_50509)){
var statearr_50534_52010 = state_50529__$1;
(statearr_50534_52010[(1)] = (5));

} else {
var statearr_50535_52011 = state_50529__$1;
(statearr_50535_52011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (13))){
var state_50529__$1 = state_50529;
var statearr_50536_52012 = state_50529__$1;
(statearr_50536_52012[(2)] = null);

(statearr_50536_52012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (6))){
var inst_50508 = (state_50529[(7)]);
var state_50529__$1 = state_50529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50529__$1,(11),to,inst_50508);
} else {
if((state_val_50530 === (3))){
var inst_50527 = (state_50529[(2)]);
var state_50529__$1 = state_50529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50529__$1,inst_50527);
} else {
if((state_val_50530 === (12))){
var state_50529__$1 = state_50529;
var statearr_50537_52017 = state_50529__$1;
(statearr_50537_52017[(2)] = null);

(statearr_50537_52017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (2))){
var state_50529__$1 = state_50529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50529__$1,(4),from);
} else {
if((state_val_50530 === (11))){
var inst_50518 = (state_50529[(2)]);
var state_50529__$1 = state_50529;
if(cljs.core.truth_(inst_50518)){
var statearr_50538_52019 = state_50529__$1;
(statearr_50538_52019[(1)] = (12));

} else {
var statearr_50539_52020 = state_50529__$1;
(statearr_50539_52020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (9))){
var state_50529__$1 = state_50529;
var statearr_50540_52021 = state_50529__$1;
(statearr_50540_52021[(2)] = null);

(statearr_50540_52021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (5))){
var state_50529__$1 = state_50529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50541_52022 = state_50529__$1;
(statearr_50541_52022[(1)] = (8));

} else {
var statearr_50542_52023 = state_50529__$1;
(statearr_50542_52023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (14))){
var inst_50523 = (state_50529[(2)]);
var state_50529__$1 = state_50529;
var statearr_50543_52027 = state_50529__$1;
(statearr_50543_52027[(2)] = inst_50523);

(statearr_50543_52027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (10))){
var inst_50515 = (state_50529[(2)]);
var state_50529__$1 = state_50529;
var statearr_50544_52028 = state_50529__$1;
(statearr_50544_52028[(2)] = inst_50515);

(statearr_50544_52028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50530 === (8))){
var inst_50512 = cljs.core.async.close_BANG_(to);
var state_50529__$1 = state_50529;
var statearr_50545_52029 = state_50529__$1;
(statearr_50545_52029[(2)] = inst_50512);

(statearr_50545_52029[(1)] = (10));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_50546 = [null,null,null,null,null,null,null,null];
(statearr_50546[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_50546[(1)] = (1));

return statearr_50546;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_50529){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50529);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50547){var ex__50386__auto__ = e50547;
var statearr_50548_52030 = state_50529;
(statearr_50548_52030[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50529[(4)]))){
var statearr_50549_52031 = state_50529;
(statearr_50549_52031[(1)] = cljs.core.first((state_50529[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52032 = state_50529;
state_50529 = G__52032;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_50529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_50529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50550 = f__50419__auto__();
(statearr_50550[(6)] = c__50418__auto___52002);

return statearr_50550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var process = (function (p__50551){
var vec__50552 = p__50551;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(1),null);
var job = vec__50552;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50418__auto___52039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50559){
var state_val_50560 = (state_50559[(1)]);
if((state_val_50560 === (1))){
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50559__$1,(2),res,v);
} else {
if((state_val_50560 === (2))){
var inst_50556 = (state_50559[(2)]);
var inst_50557 = cljs.core.async.close_BANG_(res);
var state_50559__$1 = (function (){var statearr_50561 = state_50559;
(statearr_50561[(7)] = inst_50556);

return statearr_50561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50559__$1,inst_50557);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_50562 = [null,null,null,null,null,null,null,null];
(statearr_50562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__);

(statearr_50562[(1)] = (1));

return statearr_50562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1 = (function (state_50559){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50559);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50563){var ex__50386__auto__ = e50563;
var statearr_50564_52045 = state_50559;
(statearr_50564_52045[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50559[(4)]))){
var statearr_50565_52046 = state_50559;
(statearr_50565_52046[(1)] = cljs.core.first((state_50559[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52048 = state_50559;
state_50559 = G__52048;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = function(state_50559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1.call(this,state_50559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50566 = f__50419__auto__();
(statearr_50566[(6)] = c__50418__auto___52039);

return statearr_50566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50567){
var vec__50568 = p__50567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50568,(1),null);
var job = vec__50568;
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
var n__4613__auto___52052 = n;
var __52053 = (0);
while(true){
if((__52053 < n__4613__auto___52052)){
var G__50571_52054 = type;
var G__50571_52055__$1 = (((G__50571_52054 instanceof cljs.core.Keyword))?G__50571_52054.fqn:null);
switch (G__50571_52055__$1) {
case "compute":
var c__50418__auto___52057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52053,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = ((function (__52053,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function (state_50584){
var state_val_50585 = (state_50584[(1)]);
if((state_val_50585 === (1))){
var state_50584__$1 = state_50584;
var statearr_50586_52058 = state_50584__$1;
(statearr_50586_52058[(2)] = null);

(statearr_50586_52058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50585 === (2))){
var state_50584__$1 = state_50584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50584__$1,(4),jobs);
} else {
if((state_val_50585 === (3))){
var inst_50582 = (state_50584[(2)]);
var state_50584__$1 = state_50584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50584__$1,inst_50582);
} else {
if((state_val_50585 === (4))){
var inst_50574 = (state_50584[(2)]);
var inst_50575 = process(inst_50574);
var state_50584__$1 = state_50584;
if(cljs.core.truth_(inst_50575)){
var statearr_50587_52059 = state_50584__$1;
(statearr_50587_52059[(1)] = (5));

} else {
var statearr_50588_52060 = state_50584__$1;
(statearr_50588_52060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50585 === (5))){
var state_50584__$1 = state_50584;
var statearr_50589_52061 = state_50584__$1;
(statearr_50589_52061[(2)] = null);

(statearr_50589_52061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50585 === (6))){
var state_50584__$1 = state_50584;
var statearr_50590_52062 = state_50584__$1;
(statearr_50590_52062[(2)] = null);

(statearr_50590_52062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50585 === (7))){
var inst_50580 = (state_50584[(2)]);
var state_50584__$1 = state_50584;
var statearr_50591_52063 = state_50584__$1;
(statearr_50591_52063[(2)] = inst_50580);

(statearr_50591_52063[(1)] = (3));


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
});})(__52053,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
;
return ((function (__52053,switch__50382__auto__,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_50592 = [null,null,null,null,null,null,null];
(statearr_50592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__);

(statearr_50592[(1)] = (1));

return statearr_50592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1 = (function (state_50584){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50584);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50593){var ex__50386__auto__ = e50593;
var statearr_50594_52064 = state_50584;
(statearr_50594_52064[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50584[(4)]))){
var statearr_50595_52065 = state_50584;
(statearr_50595_52065[(1)] = cljs.core.first((state_50584[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52066 = state_50584;
state_50584 = G__52066;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = function(state_50584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1.call(this,state_50584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__;
})()
;})(__52053,switch__50382__auto__,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
})();
var state__50420__auto__ = (function (){var statearr_50596 = f__50419__auto__();
(statearr_50596[(6)] = c__50418__auto___52057);

return statearr_50596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
});})(__52053,c__50418__auto___52057,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
);


break;
case "async":
var c__50418__auto___52067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52053,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = ((function (__52053,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function (state_50609){
var state_val_50610 = (state_50609[(1)]);
if((state_val_50610 === (1))){
var state_50609__$1 = state_50609;
var statearr_50611_52068 = state_50609__$1;
(statearr_50611_52068[(2)] = null);

(statearr_50611_52068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50610 === (2))){
var state_50609__$1 = state_50609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50609__$1,(4),jobs);
} else {
if((state_val_50610 === (3))){
var inst_50607 = (state_50609[(2)]);
var state_50609__$1 = state_50609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50609__$1,inst_50607);
} else {
if((state_val_50610 === (4))){
var inst_50599 = (state_50609[(2)]);
var inst_50600 = async(inst_50599);
var state_50609__$1 = state_50609;
if(cljs.core.truth_(inst_50600)){
var statearr_50612_52069 = state_50609__$1;
(statearr_50612_52069[(1)] = (5));

} else {
var statearr_50613_52070 = state_50609__$1;
(statearr_50613_52070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50610 === (5))){
var state_50609__$1 = state_50609;
var statearr_50614_52071 = state_50609__$1;
(statearr_50614_52071[(2)] = null);

(statearr_50614_52071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50610 === (6))){
var state_50609__$1 = state_50609;
var statearr_50615_52072 = state_50609__$1;
(statearr_50615_52072[(2)] = null);

(statearr_50615_52072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50610 === (7))){
var inst_50605 = (state_50609[(2)]);
var state_50609__$1 = state_50609;
var statearr_50616_52073 = state_50609__$1;
(statearr_50616_52073[(2)] = inst_50605);

(statearr_50616_52073[(1)] = (3));


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
});})(__52053,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
;
return ((function (__52053,switch__50382__auto__,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_50617 = [null,null,null,null,null,null,null];
(statearr_50617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__);

(statearr_50617[(1)] = (1));

return statearr_50617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1 = (function (state_50609){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50609);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50618){var ex__50386__auto__ = e50618;
var statearr_50619_52076 = state_50609;
(statearr_50619_52076[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50609[(4)]))){
var statearr_50620_52078 = state_50609;
(statearr_50620_52078[(1)] = cljs.core.first((state_50609[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52079 = state_50609;
state_50609 = G__52079;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = function(state_50609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1.call(this,state_50609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__;
})()
;})(__52053,switch__50382__auto__,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
})();
var state__50420__auto__ = (function (){var statearr_50621 = f__50419__auto__();
(statearr_50621[(6)] = c__50418__auto___52067);

return statearr_50621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
});})(__52053,c__50418__auto___52067,G__50571_52054,G__50571_52055__$1,n__4613__auto___52052,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50571_52055__$1)].join('')));

}

var G__52081 = (__52053 + (1));
__52053 = G__52081;
continue;
} else {
}
break;
}

var c__50418__auto___52083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50643){
var state_val_50644 = (state_50643[(1)]);
if((state_val_50644 === (7))){
var inst_50639 = (state_50643[(2)]);
var state_50643__$1 = state_50643;
var statearr_50645_52085 = state_50643__$1;
(statearr_50645_52085[(2)] = inst_50639);

(statearr_50645_52085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50644 === (1))){
var state_50643__$1 = state_50643;
var statearr_50646_52087 = state_50643__$1;
(statearr_50646_52087[(2)] = null);

(statearr_50646_52087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50644 === (4))){
var inst_50624 = (state_50643[(7)]);
var inst_50624__$1 = (state_50643[(2)]);
var inst_50625 = (inst_50624__$1 == null);
var state_50643__$1 = (function (){var statearr_50647 = state_50643;
(statearr_50647[(7)] = inst_50624__$1);

return statearr_50647;
})();
if(cljs.core.truth_(inst_50625)){
var statearr_50648_52088 = state_50643__$1;
(statearr_50648_52088[(1)] = (5));

} else {
var statearr_50649_52089 = state_50643__$1;
(statearr_50649_52089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50644 === (6))){
var inst_50629 = (state_50643[(8)]);
var inst_50624 = (state_50643[(7)]);
var inst_50629__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50631 = [inst_50624,inst_50629__$1];
var inst_50632 = (new cljs.core.PersistentVector(null,2,(5),inst_50630,inst_50631,null));
var state_50643__$1 = (function (){var statearr_50650 = state_50643;
(statearr_50650[(8)] = inst_50629__$1);

return statearr_50650;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50643__$1,(8),jobs,inst_50632);
} else {
if((state_val_50644 === (3))){
var inst_50641 = (state_50643[(2)]);
var state_50643__$1 = state_50643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50643__$1,inst_50641);
} else {
if((state_val_50644 === (2))){
var state_50643__$1 = state_50643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50643__$1,(4),from);
} else {
if((state_val_50644 === (9))){
var inst_50636 = (state_50643[(2)]);
var state_50643__$1 = (function (){var statearr_50651 = state_50643;
(statearr_50651[(9)] = inst_50636);

return statearr_50651;
})();
var statearr_50652_52093 = state_50643__$1;
(statearr_50652_52093[(2)] = null);

(statearr_50652_52093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50644 === (5))){
var inst_50627 = cljs.core.async.close_BANG_(jobs);
var state_50643__$1 = state_50643;
var statearr_50653_52094 = state_50643__$1;
(statearr_50653_52094[(2)] = inst_50627);

(statearr_50653_52094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50644 === (8))){
var inst_50629 = (state_50643[(8)]);
var inst_50634 = (state_50643[(2)]);
var state_50643__$1 = (function (){var statearr_50654 = state_50643;
(statearr_50654[(10)] = inst_50634);

return statearr_50654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50643__$1,(9),results,inst_50629);
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
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_50655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__);

(statearr_50655[(1)] = (1));

return statearr_50655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1 = (function (state_50643){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50643);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50656){var ex__50386__auto__ = e50656;
var statearr_50657_52096 = state_50643;
(statearr_50657_52096[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50643[(4)]))){
var statearr_50658_52097 = state_50643;
(statearr_50658_52097[(1)] = cljs.core.first((state_50643[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52099 = state_50643;
state_50643 = G__52099;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = function(state_50643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1.call(this,state_50643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50659 = f__50419__auto__();
(statearr_50659[(6)] = c__50418__auto___52083);

return statearr_50659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


var c__50418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50697){
var state_val_50698 = (state_50697[(1)]);
if((state_val_50698 === (7))){
var inst_50693 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
var statearr_50699_52100 = state_50697__$1;
(statearr_50699_52100[(2)] = inst_50693);

(statearr_50699_52100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (20))){
var state_50697__$1 = state_50697;
var statearr_50700_52101 = state_50697__$1;
(statearr_50700_52101[(2)] = null);

(statearr_50700_52101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (1))){
var state_50697__$1 = state_50697;
var statearr_50701_52103 = state_50697__$1;
(statearr_50701_52103[(2)] = null);

(statearr_50701_52103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (4))){
var inst_50662 = (state_50697[(7)]);
var inst_50662__$1 = (state_50697[(2)]);
var inst_50663 = (inst_50662__$1 == null);
var state_50697__$1 = (function (){var statearr_50702 = state_50697;
(statearr_50702[(7)] = inst_50662__$1);

return statearr_50702;
})();
if(cljs.core.truth_(inst_50663)){
var statearr_50703_52106 = state_50697__$1;
(statearr_50703_52106[(1)] = (5));

} else {
var statearr_50704_52107 = state_50697__$1;
(statearr_50704_52107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (15))){
var inst_50675 = (state_50697[(8)]);
var state_50697__$1 = state_50697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50697__$1,(18),to,inst_50675);
} else {
if((state_val_50698 === (21))){
var inst_50688 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
var statearr_50705_52108 = state_50697__$1;
(statearr_50705_52108[(2)] = inst_50688);

(statearr_50705_52108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (13))){
var inst_50690 = (state_50697[(2)]);
var state_50697__$1 = (function (){var statearr_50706 = state_50697;
(statearr_50706[(9)] = inst_50690);

return statearr_50706;
})();
var statearr_50707_52109 = state_50697__$1;
(statearr_50707_52109[(2)] = null);

(statearr_50707_52109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (6))){
var inst_50662 = (state_50697[(7)]);
var state_50697__$1 = state_50697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50697__$1,(11),inst_50662);
} else {
if((state_val_50698 === (17))){
var inst_50683 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
if(cljs.core.truth_(inst_50683)){
var statearr_50708_52110 = state_50697__$1;
(statearr_50708_52110[(1)] = (19));

} else {
var statearr_50709_52111 = state_50697__$1;
(statearr_50709_52111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (3))){
var inst_50695 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50697__$1,inst_50695);
} else {
if((state_val_50698 === (12))){
var inst_50672 = (state_50697[(10)]);
var state_50697__$1 = state_50697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50697__$1,(14),inst_50672);
} else {
if((state_val_50698 === (2))){
var state_50697__$1 = state_50697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50697__$1,(4),results);
} else {
if((state_val_50698 === (19))){
var state_50697__$1 = state_50697;
var statearr_50710_52112 = state_50697__$1;
(statearr_50710_52112[(2)] = null);

(statearr_50710_52112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (11))){
var inst_50672 = (state_50697[(2)]);
var state_50697__$1 = (function (){var statearr_50711 = state_50697;
(statearr_50711[(10)] = inst_50672);

return statearr_50711;
})();
var statearr_50712_52113 = state_50697__$1;
(statearr_50712_52113[(2)] = null);

(statearr_50712_52113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (9))){
var state_50697__$1 = state_50697;
var statearr_50713_52114 = state_50697__$1;
(statearr_50713_52114[(2)] = null);

(statearr_50713_52114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (5))){
var state_50697__$1 = state_50697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50714_52115 = state_50697__$1;
(statearr_50714_52115[(1)] = (8));

} else {
var statearr_50715_52116 = state_50697__$1;
(statearr_50715_52116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (14))){
var inst_50675 = (state_50697[(8)]);
var inst_50675__$1 = (state_50697[(2)]);
var inst_50676 = (inst_50675__$1 == null);
var inst_50677 = cljs.core.not(inst_50676);
var state_50697__$1 = (function (){var statearr_50716 = state_50697;
(statearr_50716[(8)] = inst_50675__$1);

return statearr_50716;
})();
if(inst_50677){
var statearr_50717_52117 = state_50697__$1;
(statearr_50717_52117[(1)] = (15));

} else {
var statearr_50718_52118 = state_50697__$1;
(statearr_50718_52118[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (16))){
var state_50697__$1 = state_50697;
var statearr_50719_52119 = state_50697__$1;
(statearr_50719_52119[(2)] = false);

(statearr_50719_52119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (10))){
var inst_50669 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
var statearr_50720_52120 = state_50697__$1;
(statearr_50720_52120[(2)] = inst_50669);

(statearr_50720_52120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (18))){
var inst_50680 = (state_50697[(2)]);
var state_50697__$1 = state_50697;
var statearr_50721_52121 = state_50697__$1;
(statearr_50721_52121[(2)] = inst_50680);

(statearr_50721_52121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50698 === (8))){
var inst_50666 = cljs.core.async.close_BANG_(to);
var state_50697__$1 = state_50697;
var statearr_50722_52122 = state_50697__$1;
(statearr_50722_52122[(2)] = inst_50666);

(statearr_50722_52122[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_50723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__);

(statearr_50723[(1)] = (1));

return statearr_50723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1 = (function (state_50697){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50697);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50724){var ex__50386__auto__ = e50724;
var statearr_50725_52123 = state_50697;
(statearr_50725_52123[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50697[(4)]))){
var statearr_50726_52124 = state_50697;
(statearr_50726_52124[(1)] = cljs.core.first((state_50697[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52125 = state_50697;
state_50697 = G__52125;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__ = function(state_50697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1.call(this,state_50697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50727 = f__50419__auto__();
(statearr_50727[(6)] = c__50418__auto__);

return statearr_50727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

return c__50418__auto__;
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
var G__50729 = arguments.length;
switch (G__50729) {
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
var G__50731 = arguments.length;
switch (G__50731) {
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
var G__50733 = arguments.length;
switch (G__50733) {
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
var c__50418__auto___52129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50759){
var state_val_50760 = (state_50759[(1)]);
if((state_val_50760 === (7))){
var inst_50755 = (state_50759[(2)]);
var state_50759__$1 = state_50759;
var statearr_50761_52130 = state_50759__$1;
(statearr_50761_52130[(2)] = inst_50755);

(statearr_50761_52130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (1))){
var state_50759__$1 = state_50759;
var statearr_50762_52131 = state_50759__$1;
(statearr_50762_52131[(2)] = null);

(statearr_50762_52131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (4))){
var inst_50736 = (state_50759[(7)]);
var inst_50736__$1 = (state_50759[(2)]);
var inst_50737 = (inst_50736__$1 == null);
var state_50759__$1 = (function (){var statearr_50763 = state_50759;
(statearr_50763[(7)] = inst_50736__$1);

return statearr_50763;
})();
if(cljs.core.truth_(inst_50737)){
var statearr_50764_52132 = state_50759__$1;
(statearr_50764_52132[(1)] = (5));

} else {
var statearr_50765_52133 = state_50759__$1;
(statearr_50765_52133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (13))){
var state_50759__$1 = state_50759;
var statearr_50766_52134 = state_50759__$1;
(statearr_50766_52134[(2)] = null);

(statearr_50766_52134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (6))){
var inst_50736 = (state_50759[(7)]);
var inst_50742 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50736) : p.call(null,inst_50736));
var state_50759__$1 = state_50759;
if(cljs.core.truth_(inst_50742)){
var statearr_50767_52135 = state_50759__$1;
(statearr_50767_52135[(1)] = (9));

} else {
var statearr_50768_52136 = state_50759__$1;
(statearr_50768_52136[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (3))){
var inst_50757 = (state_50759[(2)]);
var state_50759__$1 = state_50759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50759__$1,inst_50757);
} else {
if((state_val_50760 === (12))){
var state_50759__$1 = state_50759;
var statearr_50769_52137 = state_50759__$1;
(statearr_50769_52137[(2)] = null);

(statearr_50769_52137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (2))){
var state_50759__$1 = state_50759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50759__$1,(4),ch);
} else {
if((state_val_50760 === (11))){
var inst_50736 = (state_50759[(7)]);
var inst_50746 = (state_50759[(2)]);
var state_50759__$1 = state_50759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50759__$1,(8),inst_50746,inst_50736);
} else {
if((state_val_50760 === (9))){
var state_50759__$1 = state_50759;
var statearr_50770_52138 = state_50759__$1;
(statearr_50770_52138[(2)] = tc);

(statearr_50770_52138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (5))){
var inst_50739 = cljs.core.async.close_BANG_(tc);
var inst_50740 = cljs.core.async.close_BANG_(fc);
var state_50759__$1 = (function (){var statearr_50771 = state_50759;
(statearr_50771[(8)] = inst_50739);

return statearr_50771;
})();
var statearr_50772_52139 = state_50759__$1;
(statearr_50772_52139[(2)] = inst_50740);

(statearr_50772_52139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (14))){
var inst_50753 = (state_50759[(2)]);
var state_50759__$1 = state_50759;
var statearr_50773_52140 = state_50759__$1;
(statearr_50773_52140[(2)] = inst_50753);

(statearr_50773_52140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (10))){
var state_50759__$1 = state_50759;
var statearr_50774_52141 = state_50759__$1;
(statearr_50774_52141[(2)] = fc);

(statearr_50774_52141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50760 === (8))){
var inst_50748 = (state_50759[(2)]);
var state_50759__$1 = state_50759;
if(cljs.core.truth_(inst_50748)){
var statearr_50775_52142 = state_50759__$1;
(statearr_50775_52142[(1)] = (12));

} else {
var statearr_50776_52143 = state_50759__$1;
(statearr_50776_52143[(1)] = (13));

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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_50777 = [null,null,null,null,null,null,null,null,null];
(statearr_50777[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_50777[(1)] = (1));

return statearr_50777;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_50759){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50759);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50778){var ex__50386__auto__ = e50778;
var statearr_50779_52144 = state_50759;
(statearr_50779_52144[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50759[(4)]))){
var statearr_50780_52145 = state_50759;
(statearr_50780_52145[(1)] = cljs.core.first((state_50759[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52146 = state_50759;
state_50759 = G__52146;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_50759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_50759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50781 = f__50419__auto__();
(statearr_50781[(6)] = c__50418__auto___52129);

return statearr_50781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var c__50418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50803){
var state_val_50804 = (state_50803[(1)]);
if((state_val_50804 === (7))){
var inst_50799 = (state_50803[(2)]);
var state_50803__$1 = state_50803;
var statearr_50805_52147 = state_50803__$1;
(statearr_50805_52147[(2)] = inst_50799);

(statearr_50805_52147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (1))){
var inst_50782 = init;
var inst_50783 = inst_50782;
var state_50803__$1 = (function (){var statearr_50806 = state_50803;
(statearr_50806[(7)] = inst_50783);

return statearr_50806;
})();
var statearr_50807_52148 = state_50803__$1;
(statearr_50807_52148[(2)] = null);

(statearr_50807_52148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (4))){
var inst_50786 = (state_50803[(8)]);
var inst_50786__$1 = (state_50803[(2)]);
var inst_50787 = (inst_50786__$1 == null);
var state_50803__$1 = (function (){var statearr_50808 = state_50803;
(statearr_50808[(8)] = inst_50786__$1);

return statearr_50808;
})();
if(cljs.core.truth_(inst_50787)){
var statearr_50809_52149 = state_50803__$1;
(statearr_50809_52149[(1)] = (5));

} else {
var statearr_50810_52150 = state_50803__$1;
(statearr_50810_52150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (6))){
var inst_50783 = (state_50803[(7)]);
var inst_50790 = (state_50803[(9)]);
var inst_50786 = (state_50803[(8)]);
var inst_50790__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50783,inst_50786) : f.call(null,inst_50783,inst_50786));
var inst_50791 = cljs.core.reduced_QMARK_(inst_50790__$1);
var state_50803__$1 = (function (){var statearr_50811 = state_50803;
(statearr_50811[(9)] = inst_50790__$1);

return statearr_50811;
})();
if(inst_50791){
var statearr_50812_52151 = state_50803__$1;
(statearr_50812_52151[(1)] = (8));

} else {
var statearr_50813_52152 = state_50803__$1;
(statearr_50813_52152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (3))){
var inst_50801 = (state_50803[(2)]);
var state_50803__$1 = state_50803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50803__$1,inst_50801);
} else {
if((state_val_50804 === (2))){
var state_50803__$1 = state_50803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50803__$1,(4),ch);
} else {
if((state_val_50804 === (9))){
var inst_50790 = (state_50803[(9)]);
var inst_50783 = inst_50790;
var state_50803__$1 = (function (){var statearr_50814 = state_50803;
(statearr_50814[(7)] = inst_50783);

return statearr_50814;
})();
var statearr_50815_52153 = state_50803__$1;
(statearr_50815_52153[(2)] = null);

(statearr_50815_52153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (5))){
var inst_50783 = (state_50803[(7)]);
var state_50803__$1 = state_50803;
var statearr_50816_52154 = state_50803__$1;
(statearr_50816_52154[(2)] = inst_50783);

(statearr_50816_52154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (10))){
var inst_50797 = (state_50803[(2)]);
var state_50803__$1 = state_50803;
var statearr_50817_52155 = state_50803__$1;
(statearr_50817_52155[(2)] = inst_50797);

(statearr_50817_52155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50804 === (8))){
var inst_50790 = (state_50803[(9)]);
var inst_50793 = cljs.core.deref(inst_50790);
var state_50803__$1 = state_50803;
var statearr_50818_52156 = state_50803__$1;
(statearr_50818_52156[(2)] = inst_50793);

(statearr_50818_52156[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__50383__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50383__auto____0 = (function (){
var statearr_50819 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50819[(0)] = cljs$core$async$reduce_$_state_machine__50383__auto__);

(statearr_50819[(1)] = (1));

return statearr_50819;
});
var cljs$core$async$reduce_$_state_machine__50383__auto____1 = (function (state_50803){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50803);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50820){var ex__50386__auto__ = e50820;
var statearr_50821_52157 = state_50803;
(statearr_50821_52157[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50803[(4)]))){
var statearr_50822_52158 = state_50803;
(statearr_50822_52158[(1)] = cljs.core.first((state_50803[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52159 = state_50803;
state_50803 = G__52159;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50383__auto__ = function(state_50803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50383__auto____1.call(this,state_50803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50383__auto____0;
cljs$core$async$reduce_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50383__auto____1;
return cljs$core$async$reduce_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50823 = f__50419__auto__();
(statearr_50823[(6)] = c__50418__auto__);

return statearr_50823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

return c__50418__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50829){
var state_val_50830 = (state_50829[(1)]);
if((state_val_50830 === (1))){
var inst_50824 = cljs.core.async.reduce(f__$1,init,ch);
var state_50829__$1 = state_50829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50829__$1,(2),inst_50824);
} else {
if((state_val_50830 === (2))){
var inst_50826 = (state_50829[(2)]);
var inst_50827 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50826) : f__$1.call(null,inst_50826));
var state_50829__$1 = state_50829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50829__$1,inst_50827);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50383__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50383__auto____0 = (function (){
var statearr_50831 = [null,null,null,null,null,null,null];
(statearr_50831[(0)] = cljs$core$async$transduce_$_state_machine__50383__auto__);

(statearr_50831[(1)] = (1));

return statearr_50831;
});
var cljs$core$async$transduce_$_state_machine__50383__auto____1 = (function (state_50829){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50829);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50832){var ex__50386__auto__ = e50832;
var statearr_50833_52162 = state_50829;
(statearr_50833_52162[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50829[(4)]))){
var statearr_50834_52163 = state_50829;
(statearr_50834_52163[(1)] = cljs.core.first((state_50829[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52167 = state_50829;
state_50829 = G__52167;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50383__auto__ = function(state_50829){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50383__auto____1.call(this,state_50829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50383__auto____0;
cljs$core$async$transduce_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50383__auto____1;
return cljs$core$async$transduce_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50835 = f__50419__auto__();
(statearr_50835[(6)] = c__50418__auto__);

return statearr_50835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

return c__50418__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50837 = arguments.length;
switch (G__50837) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_50862){
var state_val_50863 = (state_50862[(1)]);
if((state_val_50863 === (7))){
var inst_50844 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50864_52169 = state_50862__$1;
(statearr_50864_52169[(2)] = inst_50844);

(statearr_50864_52169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (1))){
var inst_50838 = cljs.core.seq(coll);
var inst_50839 = inst_50838;
var state_50862__$1 = (function (){var statearr_50865 = state_50862;
(statearr_50865[(7)] = inst_50839);

return statearr_50865;
})();
var statearr_50866_52170 = state_50862__$1;
(statearr_50866_52170[(2)] = null);

(statearr_50866_52170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (4))){
var inst_50839 = (state_50862[(7)]);
var inst_50842 = cljs.core.first(inst_50839);
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50862__$1,(7),ch,inst_50842);
} else {
if((state_val_50863 === (13))){
var inst_50856 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50867_52171 = state_50862__$1;
(statearr_50867_52171[(2)] = inst_50856);

(statearr_50867_52171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (6))){
var inst_50847 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
if(cljs.core.truth_(inst_50847)){
var statearr_50868_52173 = state_50862__$1;
(statearr_50868_52173[(1)] = (8));

} else {
var statearr_50869_52174 = state_50862__$1;
(statearr_50869_52174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (3))){
var inst_50860 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50862__$1,inst_50860);
} else {
if((state_val_50863 === (12))){
var state_50862__$1 = state_50862;
var statearr_50870_52175 = state_50862__$1;
(statearr_50870_52175[(2)] = null);

(statearr_50870_52175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (2))){
var inst_50839 = (state_50862[(7)]);
var state_50862__$1 = state_50862;
if(cljs.core.truth_(inst_50839)){
var statearr_50871_52176 = state_50862__$1;
(statearr_50871_52176[(1)] = (4));

} else {
var statearr_50872_52177 = state_50862__$1;
(statearr_50872_52177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (11))){
var inst_50853 = cljs.core.async.close_BANG_(ch);
var state_50862__$1 = state_50862;
var statearr_50873_52179 = state_50862__$1;
(statearr_50873_52179[(2)] = inst_50853);

(statearr_50873_52179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (9))){
var state_50862__$1 = state_50862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50874_52183 = state_50862__$1;
(statearr_50874_52183[(1)] = (11));

} else {
var statearr_50875_52184 = state_50862__$1;
(statearr_50875_52184[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (5))){
var inst_50839 = (state_50862[(7)]);
var state_50862__$1 = state_50862;
var statearr_50876_52185 = state_50862__$1;
(statearr_50876_52185[(2)] = inst_50839);

(statearr_50876_52185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (10))){
var inst_50858 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50877_52187 = state_50862__$1;
(statearr_50877_52187[(2)] = inst_50858);

(statearr_50877_52187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (8))){
var inst_50839 = (state_50862[(7)]);
var inst_50849 = cljs.core.next(inst_50839);
var inst_50839__$1 = inst_50849;
var state_50862__$1 = (function (){var statearr_50878 = state_50862;
(statearr_50878[(7)] = inst_50839__$1);

return statearr_50878;
})();
var statearr_50879_52188 = state_50862__$1;
(statearr_50879_52188[(2)] = null);

(statearr_50879_52188[(1)] = (2));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_50880 = [null,null,null,null,null,null,null,null];
(statearr_50880[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_50880[(1)] = (1));

return statearr_50880;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_50862){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_50862);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e50881){var ex__50386__auto__ = e50881;
var statearr_50882_52189 = state_50862;
(statearr_50882_52189[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_50862[(4)]))){
var statearr_50883_52190 = state_50862;
(statearr_50883_52190[(1)] = cljs.core.first((state_50862[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52191 = state_50862;
state_50862 = G__52191;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_50862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_50862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_50884 = f__50419__auto__();
(statearr_50884[(6)] = c__50418__auto__);

return statearr_50884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

return c__50418__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50886 = arguments.length;
switch (G__50886) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52193 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_52193(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52196 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_52196(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52199 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_52199(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52204 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_52204(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50887 = (function (ch,cs,meta50888){
this.ch = ch;
this.cs = cs;
this.meta50888 = meta50888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50889,meta50888__$1){
var self__ = this;
var _50889__$1 = this;
return (new cljs.core.async.t_cljs$core$async50887(self__.ch,self__.cs,meta50888__$1));
}));

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50889){
var self__ = this;
var _50889__$1 = this;
return self__.meta50888;
}));

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50887.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50888","meta50888",-1826443672,null)], null);
}));

(cljs.core.async.t_cljs$core$async50887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50887");

(cljs.core.async.t_cljs$core$async50887.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50887.
 */
cljs.core.async.__GT_t_cljs$core$async50887 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50887(ch__$1,cs__$1,meta50888){
return (new cljs.core.async.t_cljs$core$async50887(ch__$1,cs__$1,meta50888));
});

}

return (new cljs.core.async.t_cljs$core$async50887(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50418__auto___52213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51022){
var state_val_51023 = (state_51022[(1)]);
if((state_val_51023 === (7))){
var inst_51018 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51024_52216 = state_51022__$1;
(statearr_51024_52216[(2)] = inst_51018);

(statearr_51024_52216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (20))){
var inst_50923 = (state_51022[(7)]);
var inst_50935 = cljs.core.first(inst_50923);
var inst_50936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50935,(0),null);
var inst_50937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50935,(1),null);
var state_51022__$1 = (function (){var statearr_51025 = state_51022;
(statearr_51025[(8)] = inst_50936);

return statearr_51025;
})();
if(cljs.core.truth_(inst_50937)){
var statearr_51026_52217 = state_51022__$1;
(statearr_51026_52217[(1)] = (22));

} else {
var statearr_51027_52218 = state_51022__$1;
(statearr_51027_52218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (27))){
var inst_50965 = (state_51022[(9)]);
var inst_50972 = (state_51022[(10)]);
var inst_50892 = (state_51022[(11)]);
var inst_50967 = (state_51022[(12)]);
var inst_50972__$1 = cljs.core._nth(inst_50965,inst_50967);
var inst_50973 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50972__$1,inst_50892,done);
var state_51022__$1 = (function (){var statearr_51028 = state_51022;
(statearr_51028[(10)] = inst_50972__$1);

return statearr_51028;
})();
if(cljs.core.truth_(inst_50973)){
var statearr_51029_52223 = state_51022__$1;
(statearr_51029_52223[(1)] = (30));

} else {
var statearr_51030_52225 = state_51022__$1;
(statearr_51030_52225[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (1))){
var state_51022__$1 = state_51022;
var statearr_51031_52226 = state_51022__$1;
(statearr_51031_52226[(2)] = null);

(statearr_51031_52226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (24))){
var inst_50923 = (state_51022[(7)]);
var inst_50942 = (state_51022[(2)]);
var inst_50943 = cljs.core.next(inst_50923);
var inst_50901 = inst_50943;
var inst_50902 = null;
var inst_50903 = (0);
var inst_50904 = (0);
var state_51022__$1 = (function (){var statearr_51032 = state_51022;
(statearr_51032[(13)] = inst_50902);

(statearr_51032[(14)] = inst_50903);

(statearr_51032[(15)] = inst_50901);

(statearr_51032[(16)] = inst_50942);

(statearr_51032[(17)] = inst_50904);

return statearr_51032;
})();
var statearr_51033_52227 = state_51022__$1;
(statearr_51033_52227[(2)] = null);

(statearr_51033_52227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (39))){
var state_51022__$1 = state_51022;
var statearr_51037_52228 = state_51022__$1;
(statearr_51037_52228[(2)] = null);

(statearr_51037_52228[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (4))){
var inst_50892 = (state_51022[(11)]);
var inst_50892__$1 = (state_51022[(2)]);
var inst_50893 = (inst_50892__$1 == null);
var state_51022__$1 = (function (){var statearr_51038 = state_51022;
(statearr_51038[(11)] = inst_50892__$1);

return statearr_51038;
})();
if(cljs.core.truth_(inst_50893)){
var statearr_51039_52231 = state_51022__$1;
(statearr_51039_52231[(1)] = (5));

} else {
var statearr_51040_52232 = state_51022__$1;
(statearr_51040_52232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (15))){
var inst_50902 = (state_51022[(13)]);
var inst_50903 = (state_51022[(14)]);
var inst_50901 = (state_51022[(15)]);
var inst_50904 = (state_51022[(17)]);
var inst_50919 = (state_51022[(2)]);
var inst_50920 = (inst_50904 + (1));
var tmp51034 = inst_50902;
var tmp51035 = inst_50903;
var tmp51036 = inst_50901;
var inst_50901__$1 = tmp51036;
var inst_50902__$1 = tmp51034;
var inst_50903__$1 = tmp51035;
var inst_50904__$1 = inst_50920;
var state_51022__$1 = (function (){var statearr_51041 = state_51022;
(statearr_51041[(13)] = inst_50902__$1);

(statearr_51041[(14)] = inst_50903__$1);

(statearr_51041[(18)] = inst_50919);

(statearr_51041[(15)] = inst_50901__$1);

(statearr_51041[(17)] = inst_50904__$1);

return statearr_51041;
})();
var statearr_51042_52236 = state_51022__$1;
(statearr_51042_52236[(2)] = null);

(statearr_51042_52236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (21))){
var inst_50946 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51046_52237 = state_51022__$1;
(statearr_51046_52237[(2)] = inst_50946);

(statearr_51046_52237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (31))){
var inst_50972 = (state_51022[(10)]);
var inst_50976 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50972);
var state_51022__$1 = state_51022;
var statearr_51047_52240 = state_51022__$1;
(statearr_51047_52240[(2)] = inst_50976);

(statearr_51047_52240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (32))){
var inst_50965 = (state_51022[(9)]);
var inst_50964 = (state_51022[(19)]);
var inst_50966 = (state_51022[(20)]);
var inst_50967 = (state_51022[(12)]);
var inst_50978 = (state_51022[(2)]);
var inst_50979 = (inst_50967 + (1));
var tmp51043 = inst_50965;
var tmp51044 = inst_50964;
var tmp51045 = inst_50966;
var inst_50964__$1 = tmp51044;
var inst_50965__$1 = tmp51043;
var inst_50966__$1 = tmp51045;
var inst_50967__$1 = inst_50979;
var state_51022__$1 = (function (){var statearr_51048 = state_51022;
(statearr_51048[(9)] = inst_50965__$1);

(statearr_51048[(19)] = inst_50964__$1);

(statearr_51048[(21)] = inst_50978);

(statearr_51048[(20)] = inst_50966__$1);

(statearr_51048[(12)] = inst_50967__$1);

return statearr_51048;
})();
var statearr_51049_52241 = state_51022__$1;
(statearr_51049_52241[(2)] = null);

(statearr_51049_52241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (40))){
var inst_50991 = (state_51022[(22)]);
var inst_50995 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50991);
var state_51022__$1 = state_51022;
var statearr_51050_52242 = state_51022__$1;
(statearr_51050_52242[(2)] = inst_50995);

(statearr_51050_52242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (33))){
var inst_50982 = (state_51022[(23)]);
var inst_50984 = cljs.core.chunked_seq_QMARK_(inst_50982);
var state_51022__$1 = state_51022;
if(inst_50984){
var statearr_51051_52244 = state_51022__$1;
(statearr_51051_52244[(1)] = (36));

} else {
var statearr_51052_52245 = state_51022__$1;
(statearr_51052_52245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (13))){
var inst_50913 = (state_51022[(24)]);
var inst_50916 = cljs.core.async.close_BANG_(inst_50913);
var state_51022__$1 = state_51022;
var statearr_51053_52247 = state_51022__$1;
(statearr_51053_52247[(2)] = inst_50916);

(statearr_51053_52247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (22))){
var inst_50936 = (state_51022[(8)]);
var inst_50939 = cljs.core.async.close_BANG_(inst_50936);
var state_51022__$1 = state_51022;
var statearr_51054_52248 = state_51022__$1;
(statearr_51054_52248[(2)] = inst_50939);

(statearr_51054_52248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (36))){
var inst_50982 = (state_51022[(23)]);
var inst_50986 = cljs.core.chunk_first(inst_50982);
var inst_50987 = cljs.core.chunk_rest(inst_50982);
var inst_50988 = cljs.core.count(inst_50986);
var inst_50964 = inst_50987;
var inst_50965 = inst_50986;
var inst_50966 = inst_50988;
var inst_50967 = (0);
var state_51022__$1 = (function (){var statearr_51055 = state_51022;
(statearr_51055[(9)] = inst_50965);

(statearr_51055[(19)] = inst_50964);

(statearr_51055[(20)] = inst_50966);

(statearr_51055[(12)] = inst_50967);

return statearr_51055;
})();
var statearr_51056_52252 = state_51022__$1;
(statearr_51056_52252[(2)] = null);

(statearr_51056_52252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (41))){
var inst_50982 = (state_51022[(23)]);
var inst_50997 = (state_51022[(2)]);
var inst_50998 = cljs.core.next(inst_50982);
var inst_50964 = inst_50998;
var inst_50965 = null;
var inst_50966 = (0);
var inst_50967 = (0);
var state_51022__$1 = (function (){var statearr_51057 = state_51022;
(statearr_51057[(25)] = inst_50997);

(statearr_51057[(9)] = inst_50965);

(statearr_51057[(19)] = inst_50964);

(statearr_51057[(20)] = inst_50966);

(statearr_51057[(12)] = inst_50967);

return statearr_51057;
})();
var statearr_51058_52254 = state_51022__$1;
(statearr_51058_52254[(2)] = null);

(statearr_51058_52254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (43))){
var state_51022__$1 = state_51022;
var statearr_51059_52255 = state_51022__$1;
(statearr_51059_52255[(2)] = null);

(statearr_51059_52255[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (29))){
var inst_51006 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51060_52259 = state_51022__$1;
(statearr_51060_52259[(2)] = inst_51006);

(statearr_51060_52259[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (44))){
var inst_51015 = (state_51022[(2)]);
var state_51022__$1 = (function (){var statearr_51061 = state_51022;
(statearr_51061[(26)] = inst_51015);

return statearr_51061;
})();
var statearr_51062_52261 = state_51022__$1;
(statearr_51062_52261[(2)] = null);

(statearr_51062_52261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (6))){
var inst_50956 = (state_51022[(27)]);
var inst_50955 = cljs.core.deref(cs);
var inst_50956__$1 = cljs.core.keys(inst_50955);
var inst_50957 = cljs.core.count(inst_50956__$1);
var inst_50958 = cljs.core.reset_BANG_(dctr,inst_50957);
var inst_50963 = cljs.core.seq(inst_50956__$1);
var inst_50964 = inst_50963;
var inst_50965 = null;
var inst_50966 = (0);
var inst_50967 = (0);
var state_51022__$1 = (function (){var statearr_51063 = state_51022;
(statearr_51063[(28)] = inst_50958);

(statearr_51063[(9)] = inst_50965);

(statearr_51063[(19)] = inst_50964);

(statearr_51063[(20)] = inst_50966);

(statearr_51063[(27)] = inst_50956__$1);

(statearr_51063[(12)] = inst_50967);

return statearr_51063;
})();
var statearr_51064_52263 = state_51022__$1;
(statearr_51064_52263[(2)] = null);

(statearr_51064_52263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (28))){
var inst_50964 = (state_51022[(19)]);
var inst_50982 = (state_51022[(23)]);
var inst_50982__$1 = cljs.core.seq(inst_50964);
var state_51022__$1 = (function (){var statearr_51065 = state_51022;
(statearr_51065[(23)] = inst_50982__$1);

return statearr_51065;
})();
if(inst_50982__$1){
var statearr_51066_52271 = state_51022__$1;
(statearr_51066_52271[(1)] = (33));

} else {
var statearr_51067_52272 = state_51022__$1;
(statearr_51067_52272[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (25))){
var inst_50966 = (state_51022[(20)]);
var inst_50967 = (state_51022[(12)]);
var inst_50969 = (inst_50967 < inst_50966);
var inst_50970 = inst_50969;
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50970)){
var statearr_51068_52273 = state_51022__$1;
(statearr_51068_52273[(1)] = (27));

} else {
var statearr_51069_52274 = state_51022__$1;
(statearr_51069_52274[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (34))){
var state_51022__$1 = state_51022;
var statearr_51070_52278 = state_51022__$1;
(statearr_51070_52278[(2)] = null);

(statearr_51070_52278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (17))){
var state_51022__$1 = state_51022;
var statearr_51071_52279 = state_51022__$1;
(statearr_51071_52279[(2)] = null);

(statearr_51071_52279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (3))){
var inst_51020 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51022__$1,inst_51020);
} else {
if((state_val_51023 === (12))){
var inst_50951 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51072_52283 = state_51022__$1;
(statearr_51072_52283[(2)] = inst_50951);

(statearr_51072_52283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (2))){
var state_51022__$1 = state_51022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51022__$1,(4),ch);
} else {
if((state_val_51023 === (23))){
var state_51022__$1 = state_51022;
var statearr_51073_52287 = state_51022__$1;
(statearr_51073_52287[(2)] = null);

(statearr_51073_52287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (35))){
var inst_51004 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51074_52288 = state_51022__$1;
(statearr_51074_52288[(2)] = inst_51004);

(statearr_51074_52288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (19))){
var inst_50923 = (state_51022[(7)]);
var inst_50927 = cljs.core.chunk_first(inst_50923);
var inst_50928 = cljs.core.chunk_rest(inst_50923);
var inst_50929 = cljs.core.count(inst_50927);
var inst_50901 = inst_50928;
var inst_50902 = inst_50927;
var inst_50903 = inst_50929;
var inst_50904 = (0);
var state_51022__$1 = (function (){var statearr_51075 = state_51022;
(statearr_51075[(13)] = inst_50902);

(statearr_51075[(14)] = inst_50903);

(statearr_51075[(15)] = inst_50901);

(statearr_51075[(17)] = inst_50904);

return statearr_51075;
})();
var statearr_51076_52292 = state_51022__$1;
(statearr_51076_52292[(2)] = null);

(statearr_51076_52292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (11))){
var inst_50901 = (state_51022[(15)]);
var inst_50923 = (state_51022[(7)]);
var inst_50923__$1 = cljs.core.seq(inst_50901);
var state_51022__$1 = (function (){var statearr_51077 = state_51022;
(statearr_51077[(7)] = inst_50923__$1);

return statearr_51077;
})();
if(inst_50923__$1){
var statearr_51078_52294 = state_51022__$1;
(statearr_51078_52294[(1)] = (16));

} else {
var statearr_51079_52296 = state_51022__$1;
(statearr_51079_52296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (9))){
var inst_50953 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51080_52297 = state_51022__$1;
(statearr_51080_52297[(2)] = inst_50953);

(statearr_51080_52297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (5))){
var inst_50899 = cljs.core.deref(cs);
var inst_50900 = cljs.core.seq(inst_50899);
var inst_50901 = inst_50900;
var inst_50902 = null;
var inst_50903 = (0);
var inst_50904 = (0);
var state_51022__$1 = (function (){var statearr_51081 = state_51022;
(statearr_51081[(13)] = inst_50902);

(statearr_51081[(14)] = inst_50903);

(statearr_51081[(15)] = inst_50901);

(statearr_51081[(17)] = inst_50904);

return statearr_51081;
})();
var statearr_51082_52299 = state_51022__$1;
(statearr_51082_52299[(2)] = null);

(statearr_51082_52299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (14))){
var state_51022__$1 = state_51022;
var statearr_51083_52301 = state_51022__$1;
(statearr_51083_52301[(2)] = null);

(statearr_51083_52301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (45))){
var inst_51012 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51084_52303 = state_51022__$1;
(statearr_51084_52303[(2)] = inst_51012);

(statearr_51084_52303[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (26))){
var inst_50956 = (state_51022[(27)]);
var inst_51008 = (state_51022[(2)]);
var inst_51009 = cljs.core.seq(inst_50956);
var state_51022__$1 = (function (){var statearr_51085 = state_51022;
(statearr_51085[(29)] = inst_51008);

return statearr_51085;
})();
if(inst_51009){
var statearr_51086_52305 = state_51022__$1;
(statearr_51086_52305[(1)] = (42));

} else {
var statearr_51087_52308 = state_51022__$1;
(statearr_51087_52308[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (16))){
var inst_50923 = (state_51022[(7)]);
var inst_50925 = cljs.core.chunked_seq_QMARK_(inst_50923);
var state_51022__$1 = state_51022;
if(inst_50925){
var statearr_51088_52310 = state_51022__$1;
(statearr_51088_52310[(1)] = (19));

} else {
var statearr_51089_52311 = state_51022__$1;
(statearr_51089_52311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (38))){
var inst_51001 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51090_52313 = state_51022__$1;
(statearr_51090_52313[(2)] = inst_51001);

(statearr_51090_52313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (30))){
var state_51022__$1 = state_51022;
var statearr_51091_52314 = state_51022__$1;
(statearr_51091_52314[(2)] = null);

(statearr_51091_52314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (10))){
var inst_50902 = (state_51022[(13)]);
var inst_50904 = (state_51022[(17)]);
var inst_50912 = cljs.core._nth(inst_50902,inst_50904);
var inst_50913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50912,(0),null);
var inst_50914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50912,(1),null);
var state_51022__$1 = (function (){var statearr_51092 = state_51022;
(statearr_51092[(24)] = inst_50913);

return statearr_51092;
})();
if(cljs.core.truth_(inst_50914)){
var statearr_51093_52317 = state_51022__$1;
(statearr_51093_52317[(1)] = (13));

} else {
var statearr_51094_52318 = state_51022__$1;
(statearr_51094_52318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (18))){
var inst_50949 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51095_52319 = state_51022__$1;
(statearr_51095_52319[(2)] = inst_50949);

(statearr_51095_52319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (42))){
var state_51022__$1 = state_51022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51022__$1,(45),dchan);
} else {
if((state_val_51023 === (37))){
var inst_50991 = (state_51022[(22)]);
var inst_50892 = (state_51022[(11)]);
var inst_50982 = (state_51022[(23)]);
var inst_50991__$1 = cljs.core.first(inst_50982);
var inst_50992 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50991__$1,inst_50892,done);
var state_51022__$1 = (function (){var statearr_51096 = state_51022;
(statearr_51096[(22)] = inst_50991__$1);

return statearr_51096;
})();
if(cljs.core.truth_(inst_50992)){
var statearr_51097_52325 = state_51022__$1;
(statearr_51097_52325[(1)] = (39));

} else {
var statearr_51098_52326 = state_51022__$1;
(statearr_51098_52326[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (8))){
var inst_50903 = (state_51022[(14)]);
var inst_50904 = (state_51022[(17)]);
var inst_50906 = (inst_50904 < inst_50903);
var inst_50907 = inst_50906;
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50907)){
var statearr_51099_52327 = state_51022__$1;
(statearr_51099_52327[(1)] = (10));

} else {
var statearr_51100_52328 = state_51022__$1;
(statearr_51100_52328[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__50383__auto__ = null;
var cljs$core$async$mult_$_state_machine__50383__auto____0 = (function (){
var statearr_51101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51101[(0)] = cljs$core$async$mult_$_state_machine__50383__auto__);

(statearr_51101[(1)] = (1));

return statearr_51101;
});
var cljs$core$async$mult_$_state_machine__50383__auto____1 = (function (state_51022){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51022);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51102){var ex__50386__auto__ = e51102;
var statearr_51103_52330 = state_51022;
(statearr_51103_52330[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51022[(4)]))){
var statearr_51104_52331 = state_51022;
(statearr_51104_52331[(1)] = cljs.core.first((state_51022[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52332 = state_51022;
state_51022 = G__52332;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50383__auto__ = function(state_51022){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50383__auto____1.call(this,state_51022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50383__auto____0;
cljs$core$async$mult_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50383__auto____1;
return cljs$core$async$mult_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51105 = f__50419__auto__();
(statearr_51105[(6)] = c__50418__auto___52213);

return statearr_51105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var G__51107 = arguments.length;
switch (G__51107) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52336 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_52336(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52341 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_52341(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52344 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52344(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52349 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_52349(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52352 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52352(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52357 = arguments.length;
var i__4737__auto___52358 = (0);
while(true){
if((i__4737__auto___52358 < len__4736__auto___52357)){
args__4742__auto__.push((arguments[i__4737__auto___52358]));

var G__52359 = (i__4737__auto___52358 + (1));
i__4737__auto___52358 = G__52359;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51112){
var map__51113 = p__51112;
var map__51113__$1 = (((((!((map__51113 == null))))?(((((map__51113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51113):map__51113);
var opts = map__51113__$1;
var statearr_51115_52362 = state;
(statearr_51115_52362[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51116_52363 = state;
(statearr_51116_52363[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51117_52368 = state;
(statearr_51117_52368[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51108){
var G__51109 = cljs.core.first(seq51108);
var seq51108__$1 = cljs.core.next(seq51108);
var G__51110 = cljs.core.first(seq51108__$1);
var seq51108__$2 = cljs.core.next(seq51108__$1);
var G__51111 = cljs.core.first(seq51108__$2);
var seq51108__$3 = cljs.core.next(seq51108__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51109,G__51110,G__51111,seq51108__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51118 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51119){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51119 = meta51119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51120,meta51119__$1){
var self__ = this;
var _51120__$1 = this;
return (new cljs.core.async.t_cljs$core$async51118(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51119__$1));
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51120){
var self__ = this;
var _51120__$1 = this;
return self__.meta51119;
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51119","meta51119",-2081140963,null)], null);
}));

(cljs.core.async.t_cljs$core$async51118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51118");

(cljs.core.async.t_cljs$core$async51118.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51118.
 */
cljs.core.async.__GT_t_cljs$core$async51118 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51118(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51119){
return (new cljs.core.async.t_cljs$core$async51118(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51119));
});

}

return (new cljs.core.async.t_cljs$core$async51118(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50418__auto___52381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51222){
var state_val_51223 = (state_51222[(1)]);
if((state_val_51223 === (7))){
var inst_51137 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
var statearr_51224_52383 = state_51222__$1;
(statearr_51224_52383[(2)] = inst_51137);

(statearr_51224_52383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (20))){
var inst_51149 = (state_51222[(7)]);
var state_51222__$1 = state_51222;
var statearr_51225_52385 = state_51222__$1;
(statearr_51225_52385[(2)] = inst_51149);

(statearr_51225_52385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (27))){
var state_51222__$1 = state_51222;
var statearr_51226_52386 = state_51222__$1;
(statearr_51226_52386[(2)] = null);

(statearr_51226_52386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (1))){
var inst_51124 = (state_51222[(8)]);
var inst_51124__$1 = calc_state();
var inst_51126 = (inst_51124__$1 == null);
var inst_51127 = cljs.core.not(inst_51126);
var state_51222__$1 = (function (){var statearr_51227 = state_51222;
(statearr_51227[(8)] = inst_51124__$1);

return statearr_51227;
})();
if(inst_51127){
var statearr_51228_52388 = state_51222__$1;
(statearr_51228_52388[(1)] = (2));

} else {
var statearr_51229_52392 = state_51222__$1;
(statearr_51229_52392[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (24))){
var inst_51196 = (state_51222[(9)]);
var inst_51173 = (state_51222[(10)]);
var inst_51182 = (state_51222[(11)]);
var inst_51196__$1 = (inst_51173.cljs$core$IFn$_invoke$arity$1 ? inst_51173.cljs$core$IFn$_invoke$arity$1(inst_51182) : inst_51173.call(null,inst_51182));
var state_51222__$1 = (function (){var statearr_51230 = state_51222;
(statearr_51230[(9)] = inst_51196__$1);

return statearr_51230;
})();
if(cljs.core.truth_(inst_51196__$1)){
var statearr_51231_52393 = state_51222__$1;
(statearr_51231_52393[(1)] = (29));

} else {
var statearr_51232_52394 = state_51222__$1;
(statearr_51232_52394[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (4))){
var inst_51140 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51140)){
var statearr_51233_52397 = state_51222__$1;
(statearr_51233_52397[(1)] = (8));

} else {
var statearr_51234_52398 = state_51222__$1;
(statearr_51234_52398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (15))){
var inst_51167 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51167)){
var statearr_51235_52399 = state_51222__$1;
(statearr_51235_52399[(1)] = (19));

} else {
var statearr_51236_52400 = state_51222__$1;
(statearr_51236_52400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (21))){
var inst_51172 = (state_51222[(12)]);
var inst_51172__$1 = (state_51222[(2)]);
var inst_51173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51172__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51172__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51172__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51222__$1 = (function (){var statearr_51237 = state_51222;
(statearr_51237[(13)] = inst_51174);

(statearr_51237[(10)] = inst_51173);

(statearr_51237[(12)] = inst_51172__$1);

return statearr_51237;
})();
return cljs.core.async.ioc_alts_BANG_(state_51222__$1,(22),inst_51175);
} else {
if((state_val_51223 === (31))){
var inst_51204 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51204)){
var statearr_51238_52405 = state_51222__$1;
(statearr_51238_52405[(1)] = (32));

} else {
var statearr_51239_52406 = state_51222__$1;
(statearr_51239_52406[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (32))){
var inst_51181 = (state_51222[(14)]);
var state_51222__$1 = state_51222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51222__$1,(35),out,inst_51181);
} else {
if((state_val_51223 === (33))){
var inst_51172 = (state_51222[(12)]);
var inst_51149 = inst_51172;
var state_51222__$1 = (function (){var statearr_51240 = state_51222;
(statearr_51240[(7)] = inst_51149);

return statearr_51240;
})();
var statearr_51241_52409 = state_51222__$1;
(statearr_51241_52409[(2)] = null);

(statearr_51241_52409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (13))){
var inst_51149 = (state_51222[(7)]);
var inst_51156 = inst_51149.cljs$lang$protocol_mask$partition0$;
var inst_51157 = (inst_51156 & (64));
var inst_51158 = inst_51149.cljs$core$ISeq$;
var inst_51159 = (cljs.core.PROTOCOL_SENTINEL === inst_51158);
var inst_51160 = ((inst_51157) || (inst_51159));
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51160)){
var statearr_51242_52414 = state_51222__$1;
(statearr_51242_52414[(1)] = (16));

} else {
var statearr_51243_52415 = state_51222__$1;
(statearr_51243_52415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (22))){
var inst_51181 = (state_51222[(14)]);
var inst_51182 = (state_51222[(11)]);
var inst_51180 = (state_51222[(2)]);
var inst_51181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51180,(0),null);
var inst_51182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51180,(1),null);
var inst_51183 = (inst_51181__$1 == null);
var inst_51184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51182__$1,change);
var inst_51185 = ((inst_51183) || (inst_51184));
var state_51222__$1 = (function (){var statearr_51244 = state_51222;
(statearr_51244[(14)] = inst_51181__$1);

(statearr_51244[(11)] = inst_51182__$1);

return statearr_51244;
})();
if(cljs.core.truth_(inst_51185)){
var statearr_51245_52416 = state_51222__$1;
(statearr_51245_52416[(1)] = (23));

} else {
var statearr_51246_52417 = state_51222__$1;
(statearr_51246_52417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (36))){
var inst_51172 = (state_51222[(12)]);
var inst_51149 = inst_51172;
var state_51222__$1 = (function (){var statearr_51247 = state_51222;
(statearr_51247[(7)] = inst_51149);

return statearr_51247;
})();
var statearr_51248_52418 = state_51222__$1;
(statearr_51248_52418[(2)] = null);

(statearr_51248_52418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (29))){
var inst_51196 = (state_51222[(9)]);
var state_51222__$1 = state_51222;
var statearr_51249_52419 = state_51222__$1;
(statearr_51249_52419[(2)] = inst_51196);

(statearr_51249_52419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (6))){
var state_51222__$1 = state_51222;
var statearr_51250_52420 = state_51222__$1;
(statearr_51250_52420[(2)] = false);

(statearr_51250_52420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (28))){
var inst_51192 = (state_51222[(2)]);
var inst_51193 = calc_state();
var inst_51149 = inst_51193;
var state_51222__$1 = (function (){var statearr_51251 = state_51222;
(statearr_51251[(15)] = inst_51192);

(statearr_51251[(7)] = inst_51149);

return statearr_51251;
})();
var statearr_51252_52421 = state_51222__$1;
(statearr_51252_52421[(2)] = null);

(statearr_51252_52421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (25))){
var inst_51218 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
var statearr_51253_52422 = state_51222__$1;
(statearr_51253_52422[(2)] = inst_51218);

(statearr_51253_52422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (34))){
var inst_51216 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
var statearr_51254_52423 = state_51222__$1;
(statearr_51254_52423[(2)] = inst_51216);

(statearr_51254_52423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (17))){
var state_51222__$1 = state_51222;
var statearr_51255_52424 = state_51222__$1;
(statearr_51255_52424[(2)] = false);

(statearr_51255_52424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (3))){
var state_51222__$1 = state_51222;
var statearr_51256_52425 = state_51222__$1;
(statearr_51256_52425[(2)] = false);

(statearr_51256_52425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (12))){
var inst_51220 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51222__$1,inst_51220);
} else {
if((state_val_51223 === (2))){
var inst_51124 = (state_51222[(8)]);
var inst_51129 = inst_51124.cljs$lang$protocol_mask$partition0$;
var inst_51130 = (inst_51129 & (64));
var inst_51131 = inst_51124.cljs$core$ISeq$;
var inst_51132 = (cljs.core.PROTOCOL_SENTINEL === inst_51131);
var inst_51133 = ((inst_51130) || (inst_51132));
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51133)){
var statearr_51257_52426 = state_51222__$1;
(statearr_51257_52426[(1)] = (5));

} else {
var statearr_51258_52427 = state_51222__$1;
(statearr_51258_52427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (23))){
var inst_51181 = (state_51222[(14)]);
var inst_51187 = (inst_51181 == null);
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51187)){
var statearr_51259_52428 = state_51222__$1;
(statearr_51259_52428[(1)] = (26));

} else {
var statearr_51260_52429 = state_51222__$1;
(statearr_51260_52429[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (35))){
var inst_51207 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
if(cljs.core.truth_(inst_51207)){
var statearr_51261_52430 = state_51222__$1;
(statearr_51261_52430[(1)] = (36));

} else {
var statearr_51262_52431 = state_51222__$1;
(statearr_51262_52431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (19))){
var inst_51149 = (state_51222[(7)]);
var inst_51169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51149);
var state_51222__$1 = state_51222;
var statearr_51263_52432 = state_51222__$1;
(statearr_51263_52432[(2)] = inst_51169);

(statearr_51263_52432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (11))){
var inst_51149 = (state_51222[(7)]);
var inst_51153 = (inst_51149 == null);
var inst_51154 = cljs.core.not(inst_51153);
var state_51222__$1 = state_51222;
if(inst_51154){
var statearr_51264_52433 = state_51222__$1;
(statearr_51264_52433[(1)] = (13));

} else {
var statearr_51265_52434 = state_51222__$1;
(statearr_51265_52434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (9))){
var inst_51124 = (state_51222[(8)]);
var state_51222__$1 = state_51222;
var statearr_51266_52435 = state_51222__$1;
(statearr_51266_52435[(2)] = inst_51124);

(statearr_51266_52435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (5))){
var state_51222__$1 = state_51222;
var statearr_51267_52436 = state_51222__$1;
(statearr_51267_52436[(2)] = true);

(statearr_51267_52436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (14))){
var state_51222__$1 = state_51222;
var statearr_51268_52437 = state_51222__$1;
(statearr_51268_52437[(2)] = false);

(statearr_51268_52437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (26))){
var inst_51182 = (state_51222[(11)]);
var inst_51189 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51182);
var state_51222__$1 = state_51222;
var statearr_51269_52438 = state_51222__$1;
(statearr_51269_52438[(2)] = inst_51189);

(statearr_51269_52438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (16))){
var state_51222__$1 = state_51222;
var statearr_51270_52442 = state_51222__$1;
(statearr_51270_52442[(2)] = true);

(statearr_51270_52442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (38))){
var inst_51212 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
var statearr_51271_52443 = state_51222__$1;
(statearr_51271_52443[(2)] = inst_51212);

(statearr_51271_52443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (30))){
var inst_51174 = (state_51222[(13)]);
var inst_51173 = (state_51222[(10)]);
var inst_51182 = (state_51222[(11)]);
var inst_51199 = cljs.core.empty_QMARK_(inst_51173);
var inst_51200 = (inst_51174.cljs$core$IFn$_invoke$arity$1 ? inst_51174.cljs$core$IFn$_invoke$arity$1(inst_51182) : inst_51174.call(null,inst_51182));
var inst_51201 = cljs.core.not(inst_51200);
var inst_51202 = ((inst_51199) && (inst_51201));
var state_51222__$1 = state_51222;
var statearr_51272_52444 = state_51222__$1;
(statearr_51272_52444[(2)] = inst_51202);

(statearr_51272_52444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (10))){
var inst_51124 = (state_51222[(8)]);
var inst_51145 = (state_51222[(2)]);
var inst_51146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51145,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51145,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51145,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51149 = inst_51124;
var state_51222__$1 = (function (){var statearr_51273 = state_51222;
(statearr_51273[(16)] = inst_51148);

(statearr_51273[(17)] = inst_51147);

(statearr_51273[(7)] = inst_51149);

(statearr_51273[(18)] = inst_51146);

return statearr_51273;
})();
var statearr_51274_52448 = state_51222__$1;
(statearr_51274_52448[(2)] = null);

(statearr_51274_52448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (18))){
var inst_51164 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
var statearr_51275_52449 = state_51222__$1;
(statearr_51275_52449[(2)] = inst_51164);

(statearr_51275_52449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (37))){
var state_51222__$1 = state_51222;
var statearr_51276_52450 = state_51222__$1;
(statearr_51276_52450[(2)] = null);

(statearr_51276_52450[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (8))){
var inst_51124 = (state_51222[(8)]);
var inst_51142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51124);
var state_51222__$1 = state_51222;
var statearr_51277_52451 = state_51222__$1;
(statearr_51277_52451[(2)] = inst_51142);

(statearr_51277_52451[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__50383__auto__ = null;
var cljs$core$async$mix_$_state_machine__50383__auto____0 = (function (){
var statearr_51278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51278[(0)] = cljs$core$async$mix_$_state_machine__50383__auto__);

(statearr_51278[(1)] = (1));

return statearr_51278;
});
var cljs$core$async$mix_$_state_machine__50383__auto____1 = (function (state_51222){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51222);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51279){var ex__50386__auto__ = e51279;
var statearr_51280_52455 = state_51222;
(statearr_51280_52455[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51222[(4)]))){
var statearr_51281_52456 = state_51222;
(statearr_51281_52456[(1)] = cljs.core.first((state_51222[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52457 = state_51222;
state_51222 = G__52457;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50383__auto__ = function(state_51222){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50383__auto____1.call(this,state_51222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50383__auto____0;
cljs$core$async$mix_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50383__auto____1;
return cljs$core$async$mix_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51282 = f__50419__auto__();
(statearr_51282[(6)] = c__50418__auto___52381);

return statearr_51282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52458 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52458(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52459 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52459(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52460 = (function() {
var G__52461 = null;
var G__52461__1 = (function (p){
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
var G__52461__2 = (function (p,v){
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
G__52461 = function(p,v){
switch(arguments.length){
case 1:
return G__52461__1.call(this,p);
case 2:
return G__52461__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52461.cljs$core$IFn$_invoke$arity$1 = G__52461__1;
G__52461.cljs$core$IFn$_invoke$arity$2 = G__52461__2;
return G__52461;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51284 = arguments.length;
switch (G__51284) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52460(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52460(p,v);
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
var G__51287 = arguments.length;
switch (G__51287) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51285_SHARP_){
if(cljs.core.truth_((p1__51285_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51285_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51285_SHARP_.call(null,topic)))){
return p1__51285_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51285_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51288 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51289){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51289 = meta51289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51290,meta51289__$1){
var self__ = this;
var _51290__$1 = this;
return (new cljs.core.async.t_cljs$core$async51288(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51289__$1));
}));

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51290){
var self__ = this;
var _51290__$1 = this;
return self__.meta51289;
}));

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51289","meta51289",773177293,null)], null);
}));

(cljs.core.async.t_cljs$core$async51288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51288");

(cljs.core.async.t_cljs$core$async51288.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51288.
 */
cljs.core.async.__GT_t_cljs$core$async51288 = (function cljs$core$async$__GT_t_cljs$core$async51288(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51289){
return (new cljs.core.async.t_cljs$core$async51288(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51289));
});

}

return (new cljs.core.async.t_cljs$core$async51288(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50418__auto___52489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51362){
var state_val_51363 = (state_51362[(1)]);
if((state_val_51363 === (7))){
var inst_51358 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51364_52490 = state_51362__$1;
(statearr_51364_52490[(2)] = inst_51358);

(statearr_51364_52490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (20))){
var state_51362__$1 = state_51362;
var statearr_51365_52491 = state_51362__$1;
(statearr_51365_52491[(2)] = null);

(statearr_51365_52491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (1))){
var state_51362__$1 = state_51362;
var statearr_51366_52492 = state_51362__$1;
(statearr_51366_52492[(2)] = null);

(statearr_51366_52492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (24))){
var inst_51341 = (state_51362[(7)]);
var inst_51350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51341);
var state_51362__$1 = state_51362;
var statearr_51367_52493 = state_51362__$1;
(statearr_51367_52493[(2)] = inst_51350);

(statearr_51367_52493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (4))){
var inst_51293 = (state_51362[(8)]);
var inst_51293__$1 = (state_51362[(2)]);
var inst_51294 = (inst_51293__$1 == null);
var state_51362__$1 = (function (){var statearr_51368 = state_51362;
(statearr_51368[(8)] = inst_51293__$1);

return statearr_51368;
})();
if(cljs.core.truth_(inst_51294)){
var statearr_51369_52494 = state_51362__$1;
(statearr_51369_52494[(1)] = (5));

} else {
var statearr_51370_52495 = state_51362__$1;
(statearr_51370_52495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (15))){
var inst_51335 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51371_52496 = state_51362__$1;
(statearr_51371_52496[(2)] = inst_51335);

(statearr_51371_52496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (21))){
var inst_51355 = (state_51362[(2)]);
var state_51362__$1 = (function (){var statearr_51372 = state_51362;
(statearr_51372[(9)] = inst_51355);

return statearr_51372;
})();
var statearr_51373_52500 = state_51362__$1;
(statearr_51373_52500[(2)] = null);

(statearr_51373_52500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (13))){
var inst_51317 = (state_51362[(10)]);
var inst_51319 = cljs.core.chunked_seq_QMARK_(inst_51317);
var state_51362__$1 = state_51362;
if(inst_51319){
var statearr_51374_52501 = state_51362__$1;
(statearr_51374_52501[(1)] = (16));

} else {
var statearr_51375_52502 = state_51362__$1;
(statearr_51375_52502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (22))){
var inst_51347 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
if(cljs.core.truth_(inst_51347)){
var statearr_51376_52503 = state_51362__$1;
(statearr_51376_52503[(1)] = (23));

} else {
var statearr_51377_52504 = state_51362__$1;
(statearr_51377_52504[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (6))){
var inst_51293 = (state_51362[(8)]);
var inst_51341 = (state_51362[(7)]);
var inst_51343 = (state_51362[(11)]);
var inst_51341__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51293) : topic_fn.call(null,inst_51293));
var inst_51342 = cljs.core.deref(mults);
var inst_51343__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51342,inst_51341__$1);
var state_51362__$1 = (function (){var statearr_51378 = state_51362;
(statearr_51378[(7)] = inst_51341__$1);

(statearr_51378[(11)] = inst_51343__$1);

return statearr_51378;
})();
if(cljs.core.truth_(inst_51343__$1)){
var statearr_51379_52505 = state_51362__$1;
(statearr_51379_52505[(1)] = (19));

} else {
var statearr_51380_52506 = state_51362__$1;
(statearr_51380_52506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (25))){
var inst_51352 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51381_52507 = state_51362__$1;
(statearr_51381_52507[(2)] = inst_51352);

(statearr_51381_52507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (17))){
var inst_51317 = (state_51362[(10)]);
var inst_51326 = cljs.core.first(inst_51317);
var inst_51327 = cljs.core.async.muxch_STAR_(inst_51326);
var inst_51328 = cljs.core.async.close_BANG_(inst_51327);
var inst_51329 = cljs.core.next(inst_51317);
var inst_51303 = inst_51329;
var inst_51304 = null;
var inst_51305 = (0);
var inst_51306 = (0);
var state_51362__$1 = (function (){var statearr_51382 = state_51362;
(statearr_51382[(12)] = inst_51303);

(statearr_51382[(13)] = inst_51306);

(statearr_51382[(14)] = inst_51304);

(statearr_51382[(15)] = inst_51328);

(statearr_51382[(16)] = inst_51305);

return statearr_51382;
})();
var statearr_51383_52508 = state_51362__$1;
(statearr_51383_52508[(2)] = null);

(statearr_51383_52508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (3))){
var inst_51360 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51362__$1,inst_51360);
} else {
if((state_val_51363 === (12))){
var inst_51337 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51384_52511 = state_51362__$1;
(statearr_51384_52511[(2)] = inst_51337);

(statearr_51384_52511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (2))){
var state_51362__$1 = state_51362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51362__$1,(4),ch);
} else {
if((state_val_51363 === (23))){
var state_51362__$1 = state_51362;
var statearr_51385_52513 = state_51362__$1;
(statearr_51385_52513[(2)] = null);

(statearr_51385_52513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (19))){
var inst_51293 = (state_51362[(8)]);
var inst_51343 = (state_51362[(11)]);
var inst_51345 = cljs.core.async.muxch_STAR_(inst_51343);
var state_51362__$1 = state_51362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51362__$1,(22),inst_51345,inst_51293);
} else {
if((state_val_51363 === (11))){
var inst_51303 = (state_51362[(12)]);
var inst_51317 = (state_51362[(10)]);
var inst_51317__$1 = cljs.core.seq(inst_51303);
var state_51362__$1 = (function (){var statearr_51386 = state_51362;
(statearr_51386[(10)] = inst_51317__$1);

return statearr_51386;
})();
if(inst_51317__$1){
var statearr_51387_52515 = state_51362__$1;
(statearr_51387_52515[(1)] = (13));

} else {
var statearr_51388_52517 = state_51362__$1;
(statearr_51388_52517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (9))){
var inst_51339 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51389_52519 = state_51362__$1;
(statearr_51389_52519[(2)] = inst_51339);

(statearr_51389_52519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (5))){
var inst_51300 = cljs.core.deref(mults);
var inst_51301 = cljs.core.vals(inst_51300);
var inst_51302 = cljs.core.seq(inst_51301);
var inst_51303 = inst_51302;
var inst_51304 = null;
var inst_51305 = (0);
var inst_51306 = (0);
var state_51362__$1 = (function (){var statearr_51390 = state_51362;
(statearr_51390[(12)] = inst_51303);

(statearr_51390[(13)] = inst_51306);

(statearr_51390[(14)] = inst_51304);

(statearr_51390[(16)] = inst_51305);

return statearr_51390;
})();
var statearr_51391_52520 = state_51362__$1;
(statearr_51391_52520[(2)] = null);

(statearr_51391_52520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (14))){
var state_51362__$1 = state_51362;
var statearr_51395_52521 = state_51362__$1;
(statearr_51395_52521[(2)] = null);

(statearr_51395_52521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (16))){
var inst_51317 = (state_51362[(10)]);
var inst_51321 = cljs.core.chunk_first(inst_51317);
var inst_51322 = cljs.core.chunk_rest(inst_51317);
var inst_51323 = cljs.core.count(inst_51321);
var inst_51303 = inst_51322;
var inst_51304 = inst_51321;
var inst_51305 = inst_51323;
var inst_51306 = (0);
var state_51362__$1 = (function (){var statearr_51396 = state_51362;
(statearr_51396[(12)] = inst_51303);

(statearr_51396[(13)] = inst_51306);

(statearr_51396[(14)] = inst_51304);

(statearr_51396[(16)] = inst_51305);

return statearr_51396;
})();
var statearr_51397_52525 = state_51362__$1;
(statearr_51397_52525[(2)] = null);

(statearr_51397_52525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (10))){
var inst_51303 = (state_51362[(12)]);
var inst_51306 = (state_51362[(13)]);
var inst_51304 = (state_51362[(14)]);
var inst_51305 = (state_51362[(16)]);
var inst_51311 = cljs.core._nth(inst_51304,inst_51306);
var inst_51312 = cljs.core.async.muxch_STAR_(inst_51311);
var inst_51313 = cljs.core.async.close_BANG_(inst_51312);
var inst_51314 = (inst_51306 + (1));
var tmp51392 = inst_51303;
var tmp51393 = inst_51304;
var tmp51394 = inst_51305;
var inst_51303__$1 = tmp51392;
var inst_51304__$1 = tmp51393;
var inst_51305__$1 = tmp51394;
var inst_51306__$1 = inst_51314;
var state_51362__$1 = (function (){var statearr_51398 = state_51362;
(statearr_51398[(12)] = inst_51303__$1);

(statearr_51398[(13)] = inst_51306__$1);

(statearr_51398[(14)] = inst_51304__$1);

(statearr_51398[(16)] = inst_51305__$1);

(statearr_51398[(17)] = inst_51313);

return statearr_51398;
})();
var statearr_51399_52529 = state_51362__$1;
(statearr_51399_52529[(2)] = null);

(statearr_51399_52529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (18))){
var inst_51332 = (state_51362[(2)]);
var state_51362__$1 = state_51362;
var statearr_51400_52530 = state_51362__$1;
(statearr_51400_52530[(2)] = inst_51332);

(statearr_51400_52530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51363 === (8))){
var inst_51306 = (state_51362[(13)]);
var inst_51305 = (state_51362[(16)]);
var inst_51308 = (inst_51306 < inst_51305);
var inst_51309 = inst_51308;
var state_51362__$1 = state_51362;
if(cljs.core.truth_(inst_51309)){
var statearr_51401_52531 = state_51362__$1;
(statearr_51401_52531[(1)] = (10));

} else {
var statearr_51402_52532 = state_51362__$1;
(statearr_51402_52532[(1)] = (11));

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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51403[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51403[(1)] = (1));

return statearr_51403;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51362){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51362);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51404){var ex__50386__auto__ = e51404;
var statearr_51405_52536 = state_51362;
(statearr_51405_52536[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51362[(4)]))){
var statearr_51406_52537 = state_51362;
(statearr_51406_52537[(1)] = cljs.core.first((state_51362[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52538 = state_51362;
state_51362 = G__52538;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51407 = f__50419__auto__();
(statearr_51407[(6)] = c__50418__auto___52489);

return statearr_51407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var G__51409 = arguments.length;
switch (G__51409) {
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
var G__51411 = arguments.length;
switch (G__51411) {
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
var G__51413 = arguments.length;
switch (G__51413) {
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
var c__50418__auto___52551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51456){
var state_val_51457 = (state_51456[(1)]);
if((state_val_51457 === (7))){
var state_51456__$1 = state_51456;
var statearr_51458_52552 = state_51456__$1;
(statearr_51458_52552[(2)] = null);

(statearr_51458_52552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (1))){
var state_51456__$1 = state_51456;
var statearr_51459_52553 = state_51456__$1;
(statearr_51459_52553[(2)] = null);

(statearr_51459_52553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (4))){
var inst_51416 = (state_51456[(7)]);
var inst_51417 = (state_51456[(8)]);
var inst_51419 = (inst_51417 < inst_51416);
var state_51456__$1 = state_51456;
if(cljs.core.truth_(inst_51419)){
var statearr_51460_52557 = state_51456__$1;
(statearr_51460_52557[(1)] = (6));

} else {
var statearr_51461_52558 = state_51456__$1;
(statearr_51461_52558[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (15))){
var inst_51442 = (state_51456[(9)]);
var inst_51447 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51442);
var state_51456__$1 = state_51456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51456__$1,(17),out,inst_51447);
} else {
if((state_val_51457 === (13))){
var inst_51442 = (state_51456[(9)]);
var inst_51442__$1 = (state_51456[(2)]);
var inst_51443 = cljs.core.some(cljs.core.nil_QMARK_,inst_51442__$1);
var state_51456__$1 = (function (){var statearr_51462 = state_51456;
(statearr_51462[(9)] = inst_51442__$1);

return statearr_51462;
})();
if(cljs.core.truth_(inst_51443)){
var statearr_51463_52559 = state_51456__$1;
(statearr_51463_52559[(1)] = (14));

} else {
var statearr_51464_52560 = state_51456__$1;
(statearr_51464_52560[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (6))){
var state_51456__$1 = state_51456;
var statearr_51465_52561 = state_51456__$1;
(statearr_51465_52561[(2)] = null);

(statearr_51465_52561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (17))){
var inst_51449 = (state_51456[(2)]);
var state_51456__$1 = (function (){var statearr_51467 = state_51456;
(statearr_51467[(10)] = inst_51449);

return statearr_51467;
})();
var statearr_51468_52562 = state_51456__$1;
(statearr_51468_52562[(2)] = null);

(statearr_51468_52562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (3))){
var inst_51454 = (state_51456[(2)]);
var state_51456__$1 = state_51456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51456__$1,inst_51454);
} else {
if((state_val_51457 === (12))){
var _ = (function (){var statearr_51469 = state_51456;
(statearr_51469[(4)] = cljs.core.rest((state_51456[(4)])));

return statearr_51469;
})();
var state_51456__$1 = state_51456;
var ex51466 = (state_51456__$1[(2)]);
var statearr_51470_52563 = state_51456__$1;
(statearr_51470_52563[(5)] = ex51466);


if((ex51466 instanceof Object)){
var statearr_51471_52564 = state_51456__$1;
(statearr_51471_52564[(1)] = (11));

(statearr_51471_52564[(5)] = null);

} else {
throw ex51466;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (2))){
var inst_51415 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51416 = cnt;
var inst_51417 = (0);
var state_51456__$1 = (function (){var statearr_51472 = state_51456;
(statearr_51472[(7)] = inst_51416);

(statearr_51472[(8)] = inst_51417);

(statearr_51472[(11)] = inst_51415);

return statearr_51472;
})();
var statearr_51473_52565 = state_51456__$1;
(statearr_51473_52565[(2)] = null);

(statearr_51473_52565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (11))){
var inst_51421 = (state_51456[(2)]);
var inst_51422 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51456__$1 = (function (){var statearr_51474 = state_51456;
(statearr_51474[(12)] = inst_51421);

return statearr_51474;
})();
var statearr_51475_52566 = state_51456__$1;
(statearr_51475_52566[(2)] = inst_51422);

(statearr_51475_52566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (9))){
var inst_51417 = (state_51456[(8)]);
var _ = (function (){var statearr_51476 = state_51456;
(statearr_51476[(4)] = cljs.core.cons((12),(state_51456[(4)])));

return statearr_51476;
})();
var inst_51428 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51417) : chs__$1.call(null,inst_51417));
var inst_51429 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51417) : done.call(null,inst_51417));
var inst_51430 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51428,inst_51429);
var ___$1 = (function (){var statearr_51477 = state_51456;
(statearr_51477[(4)] = cljs.core.rest((state_51456[(4)])));

return statearr_51477;
})();
var state_51456__$1 = state_51456;
var statearr_51478_52567 = state_51456__$1;
(statearr_51478_52567[(2)] = inst_51430);

(statearr_51478_52567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (5))){
var inst_51440 = (state_51456[(2)]);
var state_51456__$1 = (function (){var statearr_51479 = state_51456;
(statearr_51479[(13)] = inst_51440);

return statearr_51479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51456__$1,(13),dchan);
} else {
if((state_val_51457 === (14))){
var inst_51445 = cljs.core.async.close_BANG_(out);
var state_51456__$1 = state_51456;
var statearr_51480_52568 = state_51456__$1;
(statearr_51480_52568[(2)] = inst_51445);

(statearr_51480_52568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (16))){
var inst_51452 = (state_51456[(2)]);
var state_51456__$1 = state_51456;
var statearr_51481_52569 = state_51456__$1;
(statearr_51481_52569[(2)] = inst_51452);

(statearr_51481_52569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (10))){
var inst_51417 = (state_51456[(8)]);
var inst_51433 = (state_51456[(2)]);
var inst_51434 = (inst_51417 + (1));
var inst_51417__$1 = inst_51434;
var state_51456__$1 = (function (){var statearr_51482 = state_51456;
(statearr_51482[(8)] = inst_51417__$1);

(statearr_51482[(14)] = inst_51433);

return statearr_51482;
})();
var statearr_51483_52570 = state_51456__$1;
(statearr_51483_52570[(2)] = null);

(statearr_51483_52570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51457 === (8))){
var inst_51438 = (state_51456[(2)]);
var state_51456__$1 = state_51456;
var statearr_51484_52571 = state_51456__$1;
(statearr_51484_52571[(2)] = inst_51438);

(statearr_51484_52571[(1)] = (5));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51485[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51485[(1)] = (1));

return statearr_51485;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51456){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51456);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51486){var ex__50386__auto__ = e51486;
var statearr_51487_52572 = state_51456;
(statearr_51487_52572[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51456[(4)]))){
var statearr_51488_52573 = state_51456;
(statearr_51488_52573[(1)] = cljs.core.first((state_51456[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52574 = state_51456;
state_51456 = G__52574;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51489 = f__50419__auto__();
(statearr_51489[(6)] = c__50418__auto___52551);

return statearr_51489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var G__51492 = arguments.length;
switch (G__51492) {
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
var c__50418__auto___52576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51524){
var state_val_51525 = (state_51524[(1)]);
if((state_val_51525 === (7))){
var inst_51503 = (state_51524[(7)]);
var inst_51504 = (state_51524[(8)]);
var inst_51503__$1 = (state_51524[(2)]);
var inst_51504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51503__$1,(0),null);
var inst_51505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51503__$1,(1),null);
var inst_51506 = (inst_51504__$1 == null);
var state_51524__$1 = (function (){var statearr_51526 = state_51524;
(statearr_51526[(9)] = inst_51505);

(statearr_51526[(7)] = inst_51503__$1);

(statearr_51526[(8)] = inst_51504__$1);

return statearr_51526;
})();
if(cljs.core.truth_(inst_51506)){
var statearr_51527_52577 = state_51524__$1;
(statearr_51527_52577[(1)] = (8));

} else {
var statearr_51528_52578 = state_51524__$1;
(statearr_51528_52578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (1))){
var inst_51493 = cljs.core.vec(chs);
var inst_51494 = inst_51493;
var state_51524__$1 = (function (){var statearr_51529 = state_51524;
(statearr_51529[(10)] = inst_51494);

return statearr_51529;
})();
var statearr_51530_52579 = state_51524__$1;
(statearr_51530_52579[(2)] = null);

(statearr_51530_52579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (4))){
var inst_51494 = (state_51524[(10)]);
var state_51524__$1 = state_51524;
return cljs.core.async.ioc_alts_BANG_(state_51524__$1,(7),inst_51494);
} else {
if((state_val_51525 === (6))){
var inst_51520 = (state_51524[(2)]);
var state_51524__$1 = state_51524;
var statearr_51531_52580 = state_51524__$1;
(statearr_51531_52580[(2)] = inst_51520);

(statearr_51531_52580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (3))){
var inst_51522 = (state_51524[(2)]);
var state_51524__$1 = state_51524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51524__$1,inst_51522);
} else {
if((state_val_51525 === (2))){
var inst_51494 = (state_51524[(10)]);
var inst_51496 = cljs.core.count(inst_51494);
var inst_51497 = (inst_51496 > (0));
var state_51524__$1 = state_51524;
if(cljs.core.truth_(inst_51497)){
var statearr_51533_52581 = state_51524__$1;
(statearr_51533_52581[(1)] = (4));

} else {
var statearr_51534_52582 = state_51524__$1;
(statearr_51534_52582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (11))){
var inst_51494 = (state_51524[(10)]);
var inst_51513 = (state_51524[(2)]);
var tmp51532 = inst_51494;
var inst_51494__$1 = tmp51532;
var state_51524__$1 = (function (){var statearr_51535 = state_51524;
(statearr_51535[(10)] = inst_51494__$1);

(statearr_51535[(11)] = inst_51513);

return statearr_51535;
})();
var statearr_51536_52583 = state_51524__$1;
(statearr_51536_52583[(2)] = null);

(statearr_51536_52583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (9))){
var inst_51504 = (state_51524[(8)]);
var state_51524__$1 = state_51524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51524__$1,(11),out,inst_51504);
} else {
if((state_val_51525 === (5))){
var inst_51518 = cljs.core.async.close_BANG_(out);
var state_51524__$1 = state_51524;
var statearr_51537_52584 = state_51524__$1;
(statearr_51537_52584[(2)] = inst_51518);

(statearr_51537_52584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (10))){
var inst_51516 = (state_51524[(2)]);
var state_51524__$1 = state_51524;
var statearr_51538_52585 = state_51524__$1;
(statearr_51538_52585[(2)] = inst_51516);

(statearr_51538_52585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51525 === (8))){
var inst_51505 = (state_51524[(9)]);
var inst_51503 = (state_51524[(7)]);
var inst_51494 = (state_51524[(10)]);
var inst_51504 = (state_51524[(8)]);
var inst_51508 = (function (){var cs = inst_51494;
var vec__51499 = inst_51503;
var v = inst_51504;
var c = inst_51505;
return (function (p1__51490_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51490_SHARP_);
});
})();
var inst_51509 = cljs.core.filterv(inst_51508,inst_51494);
var inst_51494__$1 = inst_51509;
var state_51524__$1 = (function (){var statearr_51539 = state_51524;
(statearr_51539[(10)] = inst_51494__$1);

return statearr_51539;
})();
var statearr_51540_52586 = state_51524__$1;
(statearr_51540_52586[(2)] = null);

(statearr_51540_52586[(1)] = (2));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51541[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51541[(1)] = (1));

return statearr_51541;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51524){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51524);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51542){var ex__50386__auto__ = e51542;
var statearr_51543_52587 = state_51524;
(statearr_51543_52587[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51524[(4)]))){
var statearr_51544_52588 = state_51524;
(statearr_51544_52588[(1)] = cljs.core.first((state_51524[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52589 = state_51524;
state_51524 = G__52589;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51545 = f__50419__auto__();
(statearr_51545[(6)] = c__50418__auto___52576);

return statearr_51545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
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
var G__51547 = arguments.length;
switch (G__51547) {
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
var c__50418__auto___52591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51571){
var state_val_51572 = (state_51571[(1)]);
if((state_val_51572 === (7))){
var inst_51553 = (state_51571[(7)]);
var inst_51553__$1 = (state_51571[(2)]);
var inst_51554 = (inst_51553__$1 == null);
var inst_51555 = cljs.core.not(inst_51554);
var state_51571__$1 = (function (){var statearr_51573 = state_51571;
(statearr_51573[(7)] = inst_51553__$1);

return statearr_51573;
})();
if(inst_51555){
var statearr_51574_52592 = state_51571__$1;
(statearr_51574_52592[(1)] = (8));

} else {
var statearr_51575_52593 = state_51571__$1;
(statearr_51575_52593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (1))){
var inst_51548 = (0);
var state_51571__$1 = (function (){var statearr_51576 = state_51571;
(statearr_51576[(8)] = inst_51548);

return statearr_51576;
})();
var statearr_51577_52594 = state_51571__$1;
(statearr_51577_52594[(2)] = null);

(statearr_51577_52594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (4))){
var state_51571__$1 = state_51571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51571__$1,(7),ch);
} else {
if((state_val_51572 === (6))){
var inst_51566 = (state_51571[(2)]);
var state_51571__$1 = state_51571;
var statearr_51578_52595 = state_51571__$1;
(statearr_51578_52595[(2)] = inst_51566);

(statearr_51578_52595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (3))){
var inst_51568 = (state_51571[(2)]);
var inst_51569 = cljs.core.async.close_BANG_(out);
var state_51571__$1 = (function (){var statearr_51579 = state_51571;
(statearr_51579[(9)] = inst_51568);

return statearr_51579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51571__$1,inst_51569);
} else {
if((state_val_51572 === (2))){
var inst_51548 = (state_51571[(8)]);
var inst_51550 = (inst_51548 < n);
var state_51571__$1 = state_51571;
if(cljs.core.truth_(inst_51550)){
var statearr_51580_52596 = state_51571__$1;
(statearr_51580_52596[(1)] = (4));

} else {
var statearr_51581_52597 = state_51571__$1;
(statearr_51581_52597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (11))){
var inst_51548 = (state_51571[(8)]);
var inst_51558 = (state_51571[(2)]);
var inst_51559 = (inst_51548 + (1));
var inst_51548__$1 = inst_51559;
var state_51571__$1 = (function (){var statearr_51582 = state_51571;
(statearr_51582[(10)] = inst_51558);

(statearr_51582[(8)] = inst_51548__$1);

return statearr_51582;
})();
var statearr_51583_52598 = state_51571__$1;
(statearr_51583_52598[(2)] = null);

(statearr_51583_52598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (9))){
var state_51571__$1 = state_51571;
var statearr_51584_52599 = state_51571__$1;
(statearr_51584_52599[(2)] = null);

(statearr_51584_52599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (5))){
var state_51571__$1 = state_51571;
var statearr_51585_52600 = state_51571__$1;
(statearr_51585_52600[(2)] = null);

(statearr_51585_52600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (10))){
var inst_51563 = (state_51571[(2)]);
var state_51571__$1 = state_51571;
var statearr_51586_52601 = state_51571__$1;
(statearr_51586_52601[(2)] = inst_51563);

(statearr_51586_52601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51572 === (8))){
var inst_51553 = (state_51571[(7)]);
var state_51571__$1 = state_51571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51571__$1,(11),out,inst_51553);
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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51587[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51587[(1)] = (1));

return statearr_51587;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51571){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51571);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51588){var ex__50386__auto__ = e51588;
var statearr_51589_52602 = state_51571;
(statearr_51589_52602[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51571[(4)]))){
var statearr_51590_52603 = state_51571;
(statearr_51590_52603[(1)] = cljs.core.first((state_51571[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52604 = state_51571;
state_51571 = G__52604;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51591 = f__50419__auto__();
(statearr_51591[(6)] = c__50418__auto___52591);

return statearr_51591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51593 = (function (f,ch,meta51594){
this.f = f;
this.ch = ch;
this.meta51594 = meta51594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51595,meta51594__$1){
var self__ = this;
var _51595__$1 = this;
return (new cljs.core.async.t_cljs$core$async51593(self__.f,self__.ch,meta51594__$1));
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51595){
var self__ = this;
var _51595__$1 = this;
return self__.meta51594;
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51596 = (function (f,ch,meta51594,_,fn1,meta51597){
this.f = f;
this.ch = ch;
this.meta51594 = meta51594;
this._ = _;
this.fn1 = fn1;
this.meta51597 = meta51597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51598,meta51597__$1){
var self__ = this;
var _51598__$1 = this;
return (new cljs.core.async.t_cljs$core$async51596(self__.f,self__.ch,self__.meta51594,self__._,self__.fn1,meta51597__$1));
}));

(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51598){
var self__ = this;
var _51598__$1 = this;
return self__.meta51597;
}));

(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51592_SHARP_){
var G__51599 = (((p1__51592_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51592_SHARP_) : self__.f.call(null,p1__51592_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51599) : f1.call(null,G__51599));
});
}));

(cljs.core.async.t_cljs$core$async51596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51594","meta51594",1388972713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51593","cljs.core.async/t_cljs$core$async51593",1087975794,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51597","meta51597",1666018177,null)], null);
}));

(cljs.core.async.t_cljs$core$async51596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51596");

(cljs.core.async.t_cljs$core$async51596.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51596.
 */
cljs.core.async.__GT_t_cljs$core$async51596 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51596(f__$1,ch__$1,meta51594__$1,___$2,fn1__$1,meta51597){
return (new cljs.core.async.t_cljs$core$async51596(f__$1,ch__$1,meta51594__$1,___$2,fn1__$1,meta51597));
});

}

return (new cljs.core.async.t_cljs$core$async51596(self__.f,self__.ch,self__.meta51594,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51600 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51600) : self__.f.call(null,G__51600));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51594","meta51594",1388972713,null)], null);
}));

(cljs.core.async.t_cljs$core$async51593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51593");

(cljs.core.async.t_cljs$core$async51593.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51593.
 */
cljs.core.async.__GT_t_cljs$core$async51593 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51593(f__$1,ch__$1,meta51594){
return (new cljs.core.async.t_cljs$core$async51593(f__$1,ch__$1,meta51594));
});

}

return (new cljs.core.async.t_cljs$core$async51593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51601 = (function (f,ch,meta51602){
this.f = f;
this.ch = ch;
this.meta51602 = meta51602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51603,meta51602__$1){
var self__ = this;
var _51603__$1 = this;
return (new cljs.core.async.t_cljs$core$async51601(self__.f,self__.ch,meta51602__$1));
}));

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51603){
var self__ = this;
var _51603__$1 = this;
return self__.meta51602;
}));

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51602","meta51602",-1604398313,null)], null);
}));

(cljs.core.async.t_cljs$core$async51601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51601");

(cljs.core.async.t_cljs$core$async51601.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51601.
 */
cljs.core.async.__GT_t_cljs$core$async51601 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51601(f__$1,ch__$1,meta51602){
return (new cljs.core.async.t_cljs$core$async51601(f__$1,ch__$1,meta51602));
});

}

return (new cljs.core.async.t_cljs$core$async51601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51604 = (function (p,ch,meta51605){
this.p = p;
this.ch = ch;
this.meta51605 = meta51605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51606,meta51605__$1){
var self__ = this;
var _51606__$1 = this;
return (new cljs.core.async.t_cljs$core$async51604(self__.p,self__.ch,meta51605__$1));
}));

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51606){
var self__ = this;
var _51606__$1 = this;
return self__.meta51605;
}));

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51605","meta51605",1707472006,null)], null);
}));

(cljs.core.async.t_cljs$core$async51604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51604");

(cljs.core.async.t_cljs$core$async51604.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51604.
 */
cljs.core.async.__GT_t_cljs$core$async51604 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51604(p__$1,ch__$1,meta51605){
return (new cljs.core.async.t_cljs$core$async51604(p__$1,ch__$1,meta51605));
});

}

return (new cljs.core.async.t_cljs$core$async51604(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51608 = arguments.length;
switch (G__51608) {
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
var c__50418__auto___52606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51629){
var state_val_51630 = (state_51629[(1)]);
if((state_val_51630 === (7))){
var inst_51625 = (state_51629[(2)]);
var state_51629__$1 = state_51629;
var statearr_51631_52607 = state_51629__$1;
(statearr_51631_52607[(2)] = inst_51625);

(statearr_51631_52607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (1))){
var state_51629__$1 = state_51629;
var statearr_51632_52608 = state_51629__$1;
(statearr_51632_52608[(2)] = null);

(statearr_51632_52608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (4))){
var inst_51611 = (state_51629[(7)]);
var inst_51611__$1 = (state_51629[(2)]);
var inst_51612 = (inst_51611__$1 == null);
var state_51629__$1 = (function (){var statearr_51633 = state_51629;
(statearr_51633[(7)] = inst_51611__$1);

return statearr_51633;
})();
if(cljs.core.truth_(inst_51612)){
var statearr_51634_52609 = state_51629__$1;
(statearr_51634_52609[(1)] = (5));

} else {
var statearr_51635_52610 = state_51629__$1;
(statearr_51635_52610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (6))){
var inst_51611 = (state_51629[(7)]);
var inst_51616 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51611) : p.call(null,inst_51611));
var state_51629__$1 = state_51629;
if(cljs.core.truth_(inst_51616)){
var statearr_51636_52611 = state_51629__$1;
(statearr_51636_52611[(1)] = (8));

} else {
var statearr_51637_52612 = state_51629__$1;
(statearr_51637_52612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (3))){
var inst_51627 = (state_51629[(2)]);
var state_51629__$1 = state_51629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51629__$1,inst_51627);
} else {
if((state_val_51630 === (2))){
var state_51629__$1 = state_51629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51629__$1,(4),ch);
} else {
if((state_val_51630 === (11))){
var inst_51619 = (state_51629[(2)]);
var state_51629__$1 = state_51629;
var statearr_51638_52613 = state_51629__$1;
(statearr_51638_52613[(2)] = inst_51619);

(statearr_51638_52613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (9))){
var state_51629__$1 = state_51629;
var statearr_51639_52614 = state_51629__$1;
(statearr_51639_52614[(2)] = null);

(statearr_51639_52614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (5))){
var inst_51614 = cljs.core.async.close_BANG_(out);
var state_51629__$1 = state_51629;
var statearr_51640_52615 = state_51629__$1;
(statearr_51640_52615[(2)] = inst_51614);

(statearr_51640_52615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (10))){
var inst_51622 = (state_51629[(2)]);
var state_51629__$1 = (function (){var statearr_51641 = state_51629;
(statearr_51641[(8)] = inst_51622);

return statearr_51641;
})();
var statearr_51642_52616 = state_51629__$1;
(statearr_51642_52616[(2)] = null);

(statearr_51642_52616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51630 === (8))){
var inst_51611 = (state_51629[(7)]);
var state_51629__$1 = state_51629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51629__$1,(11),out,inst_51611);
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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51643 = [null,null,null,null,null,null,null,null,null];
(statearr_51643[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51643[(1)] = (1));

return statearr_51643;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51629){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51629);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51644){var ex__50386__auto__ = e51644;
var statearr_51645_52617 = state_51629;
(statearr_51645_52617[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51629[(4)]))){
var statearr_51646_52618 = state_51629;
(statearr_51646_52618[(1)] = cljs.core.first((state_51629[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52619 = state_51629;
state_51629 = G__52619;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51647 = f__50419__auto__();
(statearr_51647[(6)] = c__50418__auto___52606);

return statearr_51647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51649 = arguments.length;
switch (G__51649) {
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
var c__50418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51711){
var state_val_51712 = (state_51711[(1)]);
if((state_val_51712 === (7))){
var inst_51707 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
var statearr_51713_52621 = state_51711__$1;
(statearr_51713_52621[(2)] = inst_51707);

(statearr_51713_52621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (20))){
var inst_51677 = (state_51711[(7)]);
var inst_51688 = (state_51711[(2)]);
var inst_51689 = cljs.core.next(inst_51677);
var inst_51663 = inst_51689;
var inst_51664 = null;
var inst_51665 = (0);
var inst_51666 = (0);
var state_51711__$1 = (function (){var statearr_51714 = state_51711;
(statearr_51714[(8)] = inst_51663);

(statearr_51714[(9)] = inst_51664);

(statearr_51714[(10)] = inst_51666);

(statearr_51714[(11)] = inst_51665);

(statearr_51714[(12)] = inst_51688);

return statearr_51714;
})();
var statearr_51715_52622 = state_51711__$1;
(statearr_51715_52622[(2)] = null);

(statearr_51715_52622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (1))){
var state_51711__$1 = state_51711;
var statearr_51716_52623 = state_51711__$1;
(statearr_51716_52623[(2)] = null);

(statearr_51716_52623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (4))){
var inst_51652 = (state_51711[(13)]);
var inst_51652__$1 = (state_51711[(2)]);
var inst_51653 = (inst_51652__$1 == null);
var state_51711__$1 = (function (){var statearr_51717 = state_51711;
(statearr_51717[(13)] = inst_51652__$1);

return statearr_51717;
})();
if(cljs.core.truth_(inst_51653)){
var statearr_51718_52624 = state_51711__$1;
(statearr_51718_52624[(1)] = (5));

} else {
var statearr_51719_52625 = state_51711__$1;
(statearr_51719_52625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (15))){
var state_51711__$1 = state_51711;
var statearr_51723_52626 = state_51711__$1;
(statearr_51723_52626[(2)] = null);

(statearr_51723_52626[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (21))){
var state_51711__$1 = state_51711;
var statearr_51724_52627 = state_51711__$1;
(statearr_51724_52627[(2)] = null);

(statearr_51724_52627[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (13))){
var inst_51663 = (state_51711[(8)]);
var inst_51664 = (state_51711[(9)]);
var inst_51666 = (state_51711[(10)]);
var inst_51665 = (state_51711[(11)]);
var inst_51673 = (state_51711[(2)]);
var inst_51674 = (inst_51666 + (1));
var tmp51720 = inst_51663;
var tmp51721 = inst_51664;
var tmp51722 = inst_51665;
var inst_51663__$1 = tmp51720;
var inst_51664__$1 = tmp51721;
var inst_51665__$1 = tmp51722;
var inst_51666__$1 = inst_51674;
var state_51711__$1 = (function (){var statearr_51725 = state_51711;
(statearr_51725[(8)] = inst_51663__$1);

(statearr_51725[(9)] = inst_51664__$1);

(statearr_51725[(10)] = inst_51666__$1);

(statearr_51725[(11)] = inst_51665__$1);

(statearr_51725[(14)] = inst_51673);

return statearr_51725;
})();
var statearr_51726_52635 = state_51711__$1;
(statearr_51726_52635[(2)] = null);

(statearr_51726_52635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (22))){
var state_51711__$1 = state_51711;
var statearr_51727_52636 = state_51711__$1;
(statearr_51727_52636[(2)] = null);

(statearr_51727_52636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (6))){
var inst_51652 = (state_51711[(13)]);
var inst_51661 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51652) : f.call(null,inst_51652));
var inst_51662 = cljs.core.seq(inst_51661);
var inst_51663 = inst_51662;
var inst_51664 = null;
var inst_51665 = (0);
var inst_51666 = (0);
var state_51711__$1 = (function (){var statearr_51728 = state_51711;
(statearr_51728[(8)] = inst_51663);

(statearr_51728[(9)] = inst_51664);

(statearr_51728[(10)] = inst_51666);

(statearr_51728[(11)] = inst_51665);

return statearr_51728;
})();
var statearr_51729_52637 = state_51711__$1;
(statearr_51729_52637[(2)] = null);

(statearr_51729_52637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (17))){
var inst_51677 = (state_51711[(7)]);
var inst_51681 = cljs.core.chunk_first(inst_51677);
var inst_51682 = cljs.core.chunk_rest(inst_51677);
var inst_51683 = cljs.core.count(inst_51681);
var inst_51663 = inst_51682;
var inst_51664 = inst_51681;
var inst_51665 = inst_51683;
var inst_51666 = (0);
var state_51711__$1 = (function (){var statearr_51730 = state_51711;
(statearr_51730[(8)] = inst_51663);

(statearr_51730[(9)] = inst_51664);

(statearr_51730[(10)] = inst_51666);

(statearr_51730[(11)] = inst_51665);

return statearr_51730;
})();
var statearr_51731_52638 = state_51711__$1;
(statearr_51731_52638[(2)] = null);

(statearr_51731_52638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (3))){
var inst_51709 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51711__$1,inst_51709);
} else {
if((state_val_51712 === (12))){
var inst_51697 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
var statearr_51732_52639 = state_51711__$1;
(statearr_51732_52639[(2)] = inst_51697);

(statearr_51732_52639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (2))){
var state_51711__$1 = state_51711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51711__$1,(4),in$);
} else {
if((state_val_51712 === (23))){
var inst_51705 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
var statearr_51733_52640 = state_51711__$1;
(statearr_51733_52640[(2)] = inst_51705);

(statearr_51733_52640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (19))){
var inst_51692 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
var statearr_51734_52641 = state_51711__$1;
(statearr_51734_52641[(2)] = inst_51692);

(statearr_51734_52641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (11))){
var inst_51663 = (state_51711[(8)]);
var inst_51677 = (state_51711[(7)]);
var inst_51677__$1 = cljs.core.seq(inst_51663);
var state_51711__$1 = (function (){var statearr_51735 = state_51711;
(statearr_51735[(7)] = inst_51677__$1);

return statearr_51735;
})();
if(inst_51677__$1){
var statearr_51736_52642 = state_51711__$1;
(statearr_51736_52642[(1)] = (14));

} else {
var statearr_51737_52643 = state_51711__$1;
(statearr_51737_52643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (9))){
var inst_51699 = (state_51711[(2)]);
var inst_51700 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51711__$1 = (function (){var statearr_51738 = state_51711;
(statearr_51738[(15)] = inst_51699);

return statearr_51738;
})();
if(cljs.core.truth_(inst_51700)){
var statearr_51739_52644 = state_51711__$1;
(statearr_51739_52644[(1)] = (21));

} else {
var statearr_51740_52645 = state_51711__$1;
(statearr_51740_52645[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (5))){
var inst_51655 = cljs.core.async.close_BANG_(out);
var state_51711__$1 = state_51711;
var statearr_51741_52646 = state_51711__$1;
(statearr_51741_52646[(2)] = inst_51655);

(statearr_51741_52646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (14))){
var inst_51677 = (state_51711[(7)]);
var inst_51679 = cljs.core.chunked_seq_QMARK_(inst_51677);
var state_51711__$1 = state_51711;
if(inst_51679){
var statearr_51742_52647 = state_51711__$1;
(statearr_51742_52647[(1)] = (17));

} else {
var statearr_51743_52648 = state_51711__$1;
(statearr_51743_52648[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (16))){
var inst_51695 = (state_51711[(2)]);
var state_51711__$1 = state_51711;
var statearr_51744_52649 = state_51711__$1;
(statearr_51744_52649[(2)] = inst_51695);

(statearr_51744_52649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (10))){
var inst_51664 = (state_51711[(9)]);
var inst_51666 = (state_51711[(10)]);
var inst_51671 = cljs.core._nth(inst_51664,inst_51666);
var state_51711__$1 = state_51711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51711__$1,(13),out,inst_51671);
} else {
if((state_val_51712 === (18))){
var inst_51677 = (state_51711[(7)]);
var inst_51686 = cljs.core.first(inst_51677);
var state_51711__$1 = state_51711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51711__$1,(20),out,inst_51686);
} else {
if((state_val_51712 === (8))){
var inst_51666 = (state_51711[(10)]);
var inst_51665 = (state_51711[(11)]);
var inst_51668 = (inst_51666 < inst_51665);
var inst_51669 = inst_51668;
var state_51711__$1 = state_51711;
if(cljs.core.truth_(inst_51669)){
var statearr_51745_52650 = state_51711__$1;
(statearr_51745_52650[(1)] = (10));

} else {
var statearr_51746_52651 = state_51711__$1;
(statearr_51746_52651[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____0 = (function (){
var statearr_51747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__);

(statearr_51747[(1)] = (1));

return statearr_51747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____1 = (function (state_51711){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51711);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51748){var ex__50386__auto__ = e51748;
var statearr_51749_52652 = state_51711;
(statearr_51749_52652[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51711[(4)]))){
var statearr_51750_52653 = state_51711;
(statearr_51750_52653[(1)] = cljs.core.first((state_51711[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52654 = state_51711;
state_51711 = G__52654;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__ = function(state_51711){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____1.call(this,state_51711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50383__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51751 = f__50419__auto__();
(statearr_51751[(6)] = c__50418__auto__);

return statearr_51751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

return c__50418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51753 = arguments.length;
switch (G__51753) {
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
var G__51755 = arguments.length;
switch (G__51755) {
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
var G__51757 = arguments.length;
switch (G__51757) {
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
var c__50418__auto___52658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51781){
var state_val_51782 = (state_51781[(1)]);
if((state_val_51782 === (7))){
var inst_51776 = (state_51781[(2)]);
var state_51781__$1 = state_51781;
var statearr_51783_52659 = state_51781__$1;
(statearr_51783_52659[(2)] = inst_51776);

(statearr_51783_52659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (1))){
var inst_51758 = null;
var state_51781__$1 = (function (){var statearr_51784 = state_51781;
(statearr_51784[(7)] = inst_51758);

return statearr_51784;
})();
var statearr_51785_52660 = state_51781__$1;
(statearr_51785_52660[(2)] = null);

(statearr_51785_52660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (4))){
var inst_51761 = (state_51781[(8)]);
var inst_51761__$1 = (state_51781[(2)]);
var inst_51762 = (inst_51761__$1 == null);
var inst_51763 = cljs.core.not(inst_51762);
var state_51781__$1 = (function (){var statearr_51786 = state_51781;
(statearr_51786[(8)] = inst_51761__$1);

return statearr_51786;
})();
if(inst_51763){
var statearr_51787_52661 = state_51781__$1;
(statearr_51787_52661[(1)] = (5));

} else {
var statearr_51788_52662 = state_51781__$1;
(statearr_51788_52662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (6))){
var state_51781__$1 = state_51781;
var statearr_51789_52663 = state_51781__$1;
(statearr_51789_52663[(2)] = null);

(statearr_51789_52663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (3))){
var inst_51778 = (state_51781[(2)]);
var inst_51779 = cljs.core.async.close_BANG_(out);
var state_51781__$1 = (function (){var statearr_51790 = state_51781;
(statearr_51790[(9)] = inst_51778);

return statearr_51790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51781__$1,inst_51779);
} else {
if((state_val_51782 === (2))){
var state_51781__$1 = state_51781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51781__$1,(4),ch);
} else {
if((state_val_51782 === (11))){
var inst_51761 = (state_51781[(8)]);
var inst_51770 = (state_51781[(2)]);
var inst_51758 = inst_51761;
var state_51781__$1 = (function (){var statearr_51791 = state_51781;
(statearr_51791[(7)] = inst_51758);

(statearr_51791[(10)] = inst_51770);

return statearr_51791;
})();
var statearr_51792_52664 = state_51781__$1;
(statearr_51792_52664[(2)] = null);

(statearr_51792_52664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (9))){
var inst_51761 = (state_51781[(8)]);
var state_51781__$1 = state_51781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51781__$1,(11),out,inst_51761);
} else {
if((state_val_51782 === (5))){
var inst_51761 = (state_51781[(8)]);
var inst_51758 = (state_51781[(7)]);
var inst_51765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51761,inst_51758);
var state_51781__$1 = state_51781;
if(inst_51765){
var statearr_51794_52665 = state_51781__$1;
(statearr_51794_52665[(1)] = (8));

} else {
var statearr_51795_52666 = state_51781__$1;
(statearr_51795_52666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (10))){
var inst_51773 = (state_51781[(2)]);
var state_51781__$1 = state_51781;
var statearr_51796_52667 = state_51781__$1;
(statearr_51796_52667[(2)] = inst_51773);

(statearr_51796_52667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51782 === (8))){
var inst_51758 = (state_51781[(7)]);
var tmp51793 = inst_51758;
var inst_51758__$1 = tmp51793;
var state_51781__$1 = (function (){var statearr_51797 = state_51781;
(statearr_51797[(7)] = inst_51758__$1);

return statearr_51797;
})();
var statearr_51798_52668 = state_51781__$1;
(statearr_51798_52668[(2)] = null);

(statearr_51798_52668[(1)] = (2));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51799[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51799[(1)] = (1));

return statearr_51799;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51781){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51781);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51800){var ex__50386__auto__ = e51800;
var statearr_51801_52669 = state_51781;
(statearr_51801_52669[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51781[(4)]))){
var statearr_51802_52670 = state_51781;
(statearr_51802_52670[(1)] = cljs.core.first((state_51781[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52671 = state_51781;
state_51781 = G__52671;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51803 = f__50419__auto__();
(statearr_51803[(6)] = c__50418__auto___52658);

return statearr_51803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51805 = arguments.length;
switch (G__51805) {
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
var c__50418__auto___52673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51843){
var state_val_51844 = (state_51843[(1)]);
if((state_val_51844 === (7))){
var inst_51839 = (state_51843[(2)]);
var state_51843__$1 = state_51843;
var statearr_51845_52674 = state_51843__$1;
(statearr_51845_52674[(2)] = inst_51839);

(statearr_51845_52674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (1))){
var inst_51806 = (new Array(n));
var inst_51807 = inst_51806;
var inst_51808 = (0);
var state_51843__$1 = (function (){var statearr_51846 = state_51843;
(statearr_51846[(7)] = inst_51807);

(statearr_51846[(8)] = inst_51808);

return statearr_51846;
})();
var statearr_51847_52675 = state_51843__$1;
(statearr_51847_52675[(2)] = null);

(statearr_51847_52675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (4))){
var inst_51811 = (state_51843[(9)]);
var inst_51811__$1 = (state_51843[(2)]);
var inst_51812 = (inst_51811__$1 == null);
var inst_51813 = cljs.core.not(inst_51812);
var state_51843__$1 = (function (){var statearr_51848 = state_51843;
(statearr_51848[(9)] = inst_51811__$1);

return statearr_51848;
})();
if(inst_51813){
var statearr_51849_52676 = state_51843__$1;
(statearr_51849_52676[(1)] = (5));

} else {
var statearr_51850_52677 = state_51843__$1;
(statearr_51850_52677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (15))){
var inst_51833 = (state_51843[(2)]);
var state_51843__$1 = state_51843;
var statearr_51851_52678 = state_51843__$1;
(statearr_51851_52678[(2)] = inst_51833);

(statearr_51851_52678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (13))){
var state_51843__$1 = state_51843;
var statearr_51852_52679 = state_51843__$1;
(statearr_51852_52679[(2)] = null);

(statearr_51852_52679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (6))){
var inst_51808 = (state_51843[(8)]);
var inst_51829 = (inst_51808 > (0));
var state_51843__$1 = state_51843;
if(cljs.core.truth_(inst_51829)){
var statearr_51853_52680 = state_51843__$1;
(statearr_51853_52680[(1)] = (12));

} else {
var statearr_51854_52681 = state_51843__$1;
(statearr_51854_52681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (3))){
var inst_51841 = (state_51843[(2)]);
var state_51843__$1 = state_51843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51843__$1,inst_51841);
} else {
if((state_val_51844 === (12))){
var inst_51807 = (state_51843[(7)]);
var inst_51831 = cljs.core.vec(inst_51807);
var state_51843__$1 = state_51843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51843__$1,(15),out,inst_51831);
} else {
if((state_val_51844 === (2))){
var state_51843__$1 = state_51843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51843__$1,(4),ch);
} else {
if((state_val_51844 === (11))){
var inst_51823 = (state_51843[(2)]);
var inst_51824 = (new Array(n));
var inst_51807 = inst_51824;
var inst_51808 = (0);
var state_51843__$1 = (function (){var statearr_51855 = state_51843;
(statearr_51855[(10)] = inst_51823);

(statearr_51855[(7)] = inst_51807);

(statearr_51855[(8)] = inst_51808);

return statearr_51855;
})();
var statearr_51856_52686 = state_51843__$1;
(statearr_51856_52686[(2)] = null);

(statearr_51856_52686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (9))){
var inst_51807 = (state_51843[(7)]);
var inst_51821 = cljs.core.vec(inst_51807);
var state_51843__$1 = state_51843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51843__$1,(11),out,inst_51821);
} else {
if((state_val_51844 === (5))){
var inst_51811 = (state_51843[(9)]);
var inst_51816 = (state_51843[(11)]);
var inst_51807 = (state_51843[(7)]);
var inst_51808 = (state_51843[(8)]);
var inst_51815 = (inst_51807[inst_51808] = inst_51811);
var inst_51816__$1 = (inst_51808 + (1));
var inst_51817 = (inst_51816__$1 < n);
var state_51843__$1 = (function (){var statearr_51857 = state_51843;
(statearr_51857[(11)] = inst_51816__$1);

(statearr_51857[(12)] = inst_51815);

return statearr_51857;
})();
if(cljs.core.truth_(inst_51817)){
var statearr_51858_52690 = state_51843__$1;
(statearr_51858_52690[(1)] = (8));

} else {
var statearr_51859_52691 = state_51843__$1;
(statearr_51859_52691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (14))){
var inst_51836 = (state_51843[(2)]);
var inst_51837 = cljs.core.async.close_BANG_(out);
var state_51843__$1 = (function (){var statearr_51861 = state_51843;
(statearr_51861[(13)] = inst_51836);

return statearr_51861;
})();
var statearr_51862_52692 = state_51843__$1;
(statearr_51862_52692[(2)] = inst_51837);

(statearr_51862_52692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (10))){
var inst_51827 = (state_51843[(2)]);
var state_51843__$1 = state_51843;
var statearr_51863_52693 = state_51843__$1;
(statearr_51863_52693[(2)] = inst_51827);

(statearr_51863_52693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51844 === (8))){
var inst_51816 = (state_51843[(11)]);
var inst_51807 = (state_51843[(7)]);
var tmp51860 = inst_51807;
var inst_51807__$1 = tmp51860;
var inst_51808 = inst_51816;
var state_51843__$1 = (function (){var statearr_51864 = state_51843;
(statearr_51864[(7)] = inst_51807__$1);

(statearr_51864[(8)] = inst_51808);

return statearr_51864;
})();
var statearr_51865_52694 = state_51843__$1;
(statearr_51865_52694[(2)] = null);

(statearr_51865_52694[(1)] = (2));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51866[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51866[(1)] = (1));

return statearr_51866;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51843){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51843);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51867){var ex__50386__auto__ = e51867;
var statearr_51868_52698 = state_51843;
(statearr_51868_52698[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51843[(4)]))){
var statearr_51869_52699 = state_51843;
(statearr_51869_52699[(1)] = cljs.core.first((state_51843[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52701 = state_51843;
state_51843 = G__52701;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51870 = f__50419__auto__();
(statearr_51870[(6)] = c__50418__auto___52673);

return statearr_51870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51872 = arguments.length;
switch (G__51872) {
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
var c__50418__auto___52703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51914){
var state_val_51915 = (state_51914[(1)]);
if((state_val_51915 === (7))){
var inst_51910 = (state_51914[(2)]);
var state_51914__$1 = state_51914;
var statearr_51916_52704 = state_51914__$1;
(statearr_51916_52704[(2)] = inst_51910);

(statearr_51916_52704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (1))){
var inst_51873 = [];
var inst_51874 = inst_51873;
var inst_51875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51914__$1 = (function (){var statearr_51917 = state_51914;
(statearr_51917[(7)] = inst_51875);

(statearr_51917[(8)] = inst_51874);

return statearr_51917;
})();
var statearr_51918_52705 = state_51914__$1;
(statearr_51918_52705[(2)] = null);

(statearr_51918_52705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (4))){
var inst_51878 = (state_51914[(9)]);
var inst_51878__$1 = (state_51914[(2)]);
var inst_51879 = (inst_51878__$1 == null);
var inst_51880 = cljs.core.not(inst_51879);
var state_51914__$1 = (function (){var statearr_51919 = state_51914;
(statearr_51919[(9)] = inst_51878__$1);

return statearr_51919;
})();
if(inst_51880){
var statearr_51920_52708 = state_51914__$1;
(statearr_51920_52708[(1)] = (5));

} else {
var statearr_51921_52709 = state_51914__$1;
(statearr_51921_52709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (15))){
var inst_51904 = (state_51914[(2)]);
var state_51914__$1 = state_51914;
var statearr_51922_52710 = state_51914__$1;
(statearr_51922_52710[(2)] = inst_51904);

(statearr_51922_52710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (13))){
var state_51914__$1 = state_51914;
var statearr_51923_52711 = state_51914__$1;
(statearr_51923_52711[(2)] = null);

(statearr_51923_52711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (6))){
var inst_51874 = (state_51914[(8)]);
var inst_51899 = inst_51874.length;
var inst_51900 = (inst_51899 > (0));
var state_51914__$1 = state_51914;
if(cljs.core.truth_(inst_51900)){
var statearr_51924_52712 = state_51914__$1;
(statearr_51924_52712[(1)] = (12));

} else {
var statearr_51925_52713 = state_51914__$1;
(statearr_51925_52713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (3))){
var inst_51912 = (state_51914[(2)]);
var state_51914__$1 = state_51914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51914__$1,inst_51912);
} else {
if((state_val_51915 === (12))){
var inst_51874 = (state_51914[(8)]);
var inst_51902 = cljs.core.vec(inst_51874);
var state_51914__$1 = state_51914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51914__$1,(15),out,inst_51902);
} else {
if((state_val_51915 === (2))){
var state_51914__$1 = state_51914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51914__$1,(4),ch);
} else {
if((state_val_51915 === (11))){
var inst_51882 = (state_51914[(10)]);
var inst_51878 = (state_51914[(9)]);
var inst_51892 = (state_51914[(2)]);
var inst_51893 = [];
var inst_51894 = inst_51893.push(inst_51878);
var inst_51874 = inst_51893;
var inst_51875 = inst_51882;
var state_51914__$1 = (function (){var statearr_51926 = state_51914;
(statearr_51926[(11)] = inst_51894);

(statearr_51926[(7)] = inst_51875);

(statearr_51926[(8)] = inst_51874);

(statearr_51926[(12)] = inst_51892);

return statearr_51926;
})();
var statearr_51927_52717 = state_51914__$1;
(statearr_51927_52717[(2)] = null);

(statearr_51927_52717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (9))){
var inst_51874 = (state_51914[(8)]);
var inst_51890 = cljs.core.vec(inst_51874);
var state_51914__$1 = state_51914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51914__$1,(11),out,inst_51890);
} else {
if((state_val_51915 === (5))){
var inst_51875 = (state_51914[(7)]);
var inst_51882 = (state_51914[(10)]);
var inst_51878 = (state_51914[(9)]);
var inst_51882__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51878) : f.call(null,inst_51878));
var inst_51883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51882__$1,inst_51875);
var inst_51884 = cljs.core.keyword_identical_QMARK_(inst_51875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51885 = ((inst_51883) || (inst_51884));
var state_51914__$1 = (function (){var statearr_51928 = state_51914;
(statearr_51928[(10)] = inst_51882__$1);

return statearr_51928;
})();
if(cljs.core.truth_(inst_51885)){
var statearr_51929_52725 = state_51914__$1;
(statearr_51929_52725[(1)] = (8));

} else {
var statearr_51930_52726 = state_51914__$1;
(statearr_51930_52726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (14))){
var inst_51907 = (state_51914[(2)]);
var inst_51908 = cljs.core.async.close_BANG_(out);
var state_51914__$1 = (function (){var statearr_51932 = state_51914;
(statearr_51932[(13)] = inst_51907);

return statearr_51932;
})();
var statearr_51933_52730 = state_51914__$1;
(statearr_51933_52730[(2)] = inst_51908);

(statearr_51933_52730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (10))){
var inst_51897 = (state_51914[(2)]);
var state_51914__$1 = state_51914;
var statearr_51934_52731 = state_51914__$1;
(statearr_51934_52731[(2)] = inst_51897);

(statearr_51934_52731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51915 === (8))){
var inst_51882 = (state_51914[(10)]);
var inst_51878 = (state_51914[(9)]);
var inst_51874 = (state_51914[(8)]);
var inst_51887 = inst_51874.push(inst_51878);
var tmp51931 = inst_51874;
var inst_51874__$1 = tmp51931;
var inst_51875 = inst_51882;
var state_51914__$1 = (function (){var statearr_51935 = state_51914;
(statearr_51935[(7)] = inst_51875);

(statearr_51935[(14)] = inst_51887);

(statearr_51935[(8)] = inst_51874__$1);

return statearr_51935;
})();
var statearr_51936_52737 = state_51914__$1;
(statearr_51936_52737[(2)] = null);

(statearr_51936_52737[(1)] = (2));


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
var cljs$core$async$state_machine__50383__auto__ = null;
var cljs$core$async$state_machine__50383__auto____0 = (function (){
var statearr_51937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51937[(0)] = cljs$core$async$state_machine__50383__auto__);

(statearr_51937[(1)] = (1));

return statearr_51937;
});
var cljs$core$async$state_machine__50383__auto____1 = (function (state_51914){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51914);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e51938){var ex__50386__auto__ = e51938;
var statearr_51939_52738 = state_51914;
(statearr_51939_52738[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51914[(4)]))){
var statearr_51940_52739 = state_51914;
(statearr_51940_52739[(1)] = cljs.core.first((state_51914[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52740 = state_51914;
state_51914 = G__52740;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs$core$async$state_machine__50383__auto__ = function(state_51914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50383__auto____1.call(this,state_51914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50383__auto____0;
cljs$core$async$state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50383__auto____1;
return cljs$core$async$state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_51941 = f__50419__auto__();
(statearr_51941[(6)] = c__50418__auto___52703);

return statearr_51941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
