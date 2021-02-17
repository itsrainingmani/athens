goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50473 = arguments.length;
switch (G__50473) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50474 = (function (f,blockable,meta50475){
this.f = f;
this.blockable = blockable;
this.meta50475 = meta50475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50476,meta50475__$1){
var self__ = this;
var _50476__$1 = this;
return (new cljs.core.async.t_cljs$core$async50474(self__.f,self__.blockable,meta50475__$1));
}));

(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50476){
var self__ = this;
var _50476__$1 = this;
return self__.meta50475;
}));

(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50475","meta50475",-500499842,null)], null);
}));

(cljs.core.async.t_cljs$core$async50474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50474");

(cljs.core.async.t_cljs$core$async50474.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50474.
 */
cljs.core.async.__GT_t_cljs$core$async50474 = (function cljs$core$async$__GT_t_cljs$core$async50474(f__$1,blockable__$1,meta50475){
return (new cljs.core.async.t_cljs$core$async50474(f__$1,blockable__$1,meta50475));
});

}

return (new cljs.core.async.t_cljs$core$async50474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50479 = arguments.length;
switch (G__50479) {
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
var G__50481 = arguments.length;
switch (G__50481) {
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
var G__50483 = arguments.length;
switch (G__50483) {
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
var val_51960 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51960) : fn1.call(null,val_51960));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51960) : fn1.call(null,val_51960));
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
var G__50485 = arguments.length;
switch (G__50485) {
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
var n__4613__auto___51964 = n;
var x_51965 = (0);
while(true){
if((x_51965 < n__4613__auto___51964)){
(a[x_51965] = x_51965);

var G__51966 = (x_51965 + (1));
x_51965 = G__51966;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50486 = (function (flag,meta50487){
this.flag = flag;
this.meta50487 = meta50487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50488,meta50487__$1){
var self__ = this;
var _50488__$1 = this;
return (new cljs.core.async.t_cljs$core$async50486(self__.flag,meta50487__$1));
}));

(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50488){
var self__ = this;
var _50488__$1 = this;
return self__.meta50487;
}));

(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50487","meta50487",909597173,null)], null);
}));

(cljs.core.async.t_cljs$core$async50486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50486");

(cljs.core.async.t_cljs$core$async50486.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50486.
 */
cljs.core.async.__GT_t_cljs$core$async50486 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50486(flag__$1,meta50487){
return (new cljs.core.async.t_cljs$core$async50486(flag__$1,meta50487));
});

}

return (new cljs.core.async.t_cljs$core$async50486(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50489 = (function (flag,cb,meta50490){
this.flag = flag;
this.cb = cb;
this.meta50490 = meta50490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50491,meta50490__$1){
var self__ = this;
var _50491__$1 = this;
return (new cljs.core.async.t_cljs$core$async50489(self__.flag,self__.cb,meta50490__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50490","meta50490",-1569651673,null)], null);
}));

(cljs.core.async.t_cljs$core$async50489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50489");

(cljs.core.async.t_cljs$core$async50489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50489.
 */
cljs.core.async.__GT_t_cljs$core$async50489 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50489(flag__$1,cb__$1,meta50490){
return (new cljs.core.async.t_cljs$core$async50489(flag__$1,cb__$1,meta50490));
});

}

return (new cljs.core.async.t_cljs$core$async50489(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50492_SHARP_){
var G__50494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50492_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50494) : fret.call(null,G__50494));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50493_SHARP_){
var G__50495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50493_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50495) : fret.call(null,G__50495));
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
var G__51980 = (i + (1));
i = G__51980;
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
var len__4736__auto___51982 = arguments.length;
var i__4737__auto___51983 = (0);
while(true){
if((i__4737__auto___51983 < len__4736__auto___51982)){
args__4742__auto__.push((arguments[i__4737__auto___51983]));

var G__51984 = (i__4737__auto___51983 + (1));
i__4737__auto___51983 = G__51984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50498){
var map__50499 = p__50498;
var map__50499__$1 = (((((!((map__50499 == null))))?(((((map__50499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50499):map__50499);
var opts = map__50499__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50496){
var G__50497 = cljs.core.first(seq50496);
var seq50496__$1 = cljs.core.next(seq50496);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50497,seq50496__$1);
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
var G__50502 = arguments.length;
switch (G__50502) {
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
var c__50415__auto___51999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50526){
var state_val_50527 = (state_50526[(1)]);
if((state_val_50527 === (7))){
var inst_50522 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50528_52000 = state_50526__$1;
(statearr_50528_52000[(2)] = inst_50522);

(statearr_50528_52000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (1))){
var state_50526__$1 = state_50526;
var statearr_50529_52002 = state_50526__$1;
(statearr_50529_52002[(2)] = null);

(statearr_50529_52002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (4))){
var inst_50505 = (state_50526[(7)]);
var inst_50505__$1 = (state_50526[(2)]);
var inst_50506 = (inst_50505__$1 == null);
var state_50526__$1 = (function (){var statearr_50530 = state_50526;
(statearr_50530[(7)] = inst_50505__$1);

return statearr_50530;
})();
if(cljs.core.truth_(inst_50506)){
var statearr_50531_52005 = state_50526__$1;
(statearr_50531_52005[(1)] = (5));

} else {
var statearr_50532_52007 = state_50526__$1;
(statearr_50532_52007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (13))){
var state_50526__$1 = state_50526;
var statearr_50533_52009 = state_50526__$1;
(statearr_50533_52009[(2)] = null);

(statearr_50533_52009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (6))){
var inst_50505 = (state_50526[(7)]);
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50526__$1,(11),to,inst_50505);
} else {
if((state_val_50527 === (3))){
var inst_50524 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50526__$1,inst_50524);
} else {
if((state_val_50527 === (12))){
var state_50526__$1 = state_50526;
var statearr_50534_52013 = state_50526__$1;
(statearr_50534_52013[(2)] = null);

(statearr_50534_52013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (2))){
var state_50526__$1 = state_50526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50526__$1,(4),from);
} else {
if((state_val_50527 === (11))){
var inst_50515 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
if(cljs.core.truth_(inst_50515)){
var statearr_50535_52015 = state_50526__$1;
(statearr_50535_52015[(1)] = (12));

} else {
var statearr_50536_52017 = state_50526__$1;
(statearr_50536_52017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (9))){
var state_50526__$1 = state_50526;
var statearr_50537_52018 = state_50526__$1;
(statearr_50537_52018[(2)] = null);

(statearr_50537_52018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (5))){
var state_50526__$1 = state_50526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50538_52019 = state_50526__$1;
(statearr_50538_52019[(1)] = (8));

} else {
var statearr_50539_52020 = state_50526__$1;
(statearr_50539_52020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (14))){
var inst_50520 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50540_52021 = state_50526__$1;
(statearr_50540_52021[(2)] = inst_50520);

(statearr_50540_52021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (10))){
var inst_50512 = (state_50526[(2)]);
var state_50526__$1 = state_50526;
var statearr_50541_52025 = state_50526__$1;
(statearr_50541_52025[(2)] = inst_50512);

(statearr_50541_52025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50527 === (8))){
var inst_50509 = cljs.core.async.close_BANG_(to);
var state_50526__$1 = state_50526;
var statearr_50542_52026 = state_50526__$1;
(statearr_50542_52026[(2)] = inst_50509);

(statearr_50542_52026[(1)] = (10));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_50543 = [null,null,null,null,null,null,null,null];
(statearr_50543[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_50543[(1)] = (1));

return statearr_50543;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_50526){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50526);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50544){var ex__50383__auto__ = e50544;
var statearr_50545_52027 = state_50526;
(statearr_50545_52027[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50526[(4)]))){
var statearr_50546_52028 = state_50526;
(statearr_50546_52028[(1)] = cljs.core.first((state_50526[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52029 = state_50526;
state_50526 = G__52029;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_50526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_50526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50547 = f__50416__auto__();
(statearr_50547[(6)] = c__50415__auto___51999);

return statearr_50547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var process = (function (p__50548){
var vec__50549 = p__50548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50549,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50549,(1),null);
var job = vec__50549;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50415__auto___52036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50556){
var state_val_50557 = (state_50556[(1)]);
if((state_val_50557 === (1))){
var state_50556__$1 = state_50556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50556__$1,(2),res,v);
} else {
if((state_val_50557 === (2))){
var inst_50553 = (state_50556[(2)]);
var inst_50554 = cljs.core.async.close_BANG_(res);
var state_50556__$1 = (function (){var statearr_50558 = state_50556;
(statearr_50558[(7)] = inst_50553);

return statearr_50558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50556__$1,inst_50554);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_50559 = [null,null,null,null,null,null,null,null];
(statearr_50559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__);

(statearr_50559[(1)] = (1));

return statearr_50559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1 = (function (state_50556){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50556);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50560){var ex__50383__auto__ = e50560;
var statearr_50561_52043 = state_50556;
(statearr_50561_52043[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50556[(4)]))){
var statearr_50562_52044 = state_50556;
(statearr_50562_52044[(1)] = cljs.core.first((state_50556[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52045 = state_50556;
state_50556 = G__52045;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = function(state_50556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1.call(this,state_50556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50563 = f__50416__auto__();
(statearr_50563[(6)] = c__50415__auto___52036);

return statearr_50563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50564){
var vec__50565 = p__50564;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50565,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50565,(1),null);
var job = vec__50565;
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
var n__4613__auto___52049 = n;
var __52050 = (0);
while(true){
if((__52050 < n__4613__auto___52049)){
var G__50568_52051 = type;
var G__50568_52052__$1 = (((G__50568_52051 instanceof cljs.core.Keyword))?G__50568_52051.fqn:null);
switch (G__50568_52052__$1) {
case "compute":
var c__50415__auto___52054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52050,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = ((function (__52050,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function (state_50581){
var state_val_50582 = (state_50581[(1)]);
if((state_val_50582 === (1))){
var state_50581__$1 = state_50581;
var statearr_50583_52055 = state_50581__$1;
(statearr_50583_52055[(2)] = null);

(statearr_50583_52055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (2))){
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50581__$1,(4),jobs);
} else {
if((state_val_50582 === (3))){
var inst_50579 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50581__$1,inst_50579);
} else {
if((state_val_50582 === (4))){
var inst_50571 = (state_50581[(2)]);
var inst_50572 = process(inst_50571);
var state_50581__$1 = state_50581;
if(cljs.core.truth_(inst_50572)){
var statearr_50584_52056 = state_50581__$1;
(statearr_50584_52056[(1)] = (5));

} else {
var statearr_50585_52057 = state_50581__$1;
(statearr_50585_52057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (5))){
var state_50581__$1 = state_50581;
var statearr_50586_52058 = state_50581__$1;
(statearr_50586_52058[(2)] = null);

(statearr_50586_52058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (6))){
var state_50581__$1 = state_50581;
var statearr_50587_52059 = state_50581__$1;
(statearr_50587_52059[(2)] = null);

(statearr_50587_52059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (7))){
var inst_50577 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
var statearr_50588_52060 = state_50581__$1;
(statearr_50588_52060[(2)] = inst_50577);

(statearr_50588_52060[(1)] = (3));


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
});})(__52050,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
;
return ((function (__52050,switch__50379__auto__,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_50589 = [null,null,null,null,null,null,null];
(statearr_50589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__);

(statearr_50589[(1)] = (1));

return statearr_50589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1 = (function (state_50581){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50581);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50590){var ex__50383__auto__ = e50590;
var statearr_50591_52061 = state_50581;
(statearr_50591_52061[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50581[(4)]))){
var statearr_50592_52062 = state_50581;
(statearr_50592_52062[(1)] = cljs.core.first((state_50581[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52063 = state_50581;
state_50581 = G__52063;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = function(state_50581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1.call(this,state_50581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__;
})()
;})(__52050,switch__50379__auto__,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
})();
var state__50417__auto__ = (function (){var statearr_50593 = f__50416__auto__();
(statearr_50593[(6)] = c__50415__auto___52054);

return statearr_50593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
});})(__52050,c__50415__auto___52054,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
);


break;
case "async":
var c__50415__auto___52064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52050,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = ((function (__52050,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function (state_50606){
var state_val_50607 = (state_50606[(1)]);
if((state_val_50607 === (1))){
var state_50606__$1 = state_50606;
var statearr_50608_52065 = state_50606__$1;
(statearr_50608_52065[(2)] = null);

(statearr_50608_52065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50607 === (2))){
var state_50606__$1 = state_50606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50606__$1,(4),jobs);
} else {
if((state_val_50607 === (3))){
var inst_50604 = (state_50606[(2)]);
var state_50606__$1 = state_50606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50606__$1,inst_50604);
} else {
if((state_val_50607 === (4))){
var inst_50596 = (state_50606[(2)]);
var inst_50597 = async(inst_50596);
var state_50606__$1 = state_50606;
if(cljs.core.truth_(inst_50597)){
var statearr_50609_52066 = state_50606__$1;
(statearr_50609_52066[(1)] = (5));

} else {
var statearr_50610_52067 = state_50606__$1;
(statearr_50610_52067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50607 === (5))){
var state_50606__$1 = state_50606;
var statearr_50611_52068 = state_50606__$1;
(statearr_50611_52068[(2)] = null);

(statearr_50611_52068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50607 === (6))){
var state_50606__$1 = state_50606;
var statearr_50612_52069 = state_50606__$1;
(statearr_50612_52069[(2)] = null);

(statearr_50612_52069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50607 === (7))){
var inst_50602 = (state_50606[(2)]);
var state_50606__$1 = state_50606;
var statearr_50613_52071 = state_50606__$1;
(statearr_50613_52071[(2)] = inst_50602);

(statearr_50613_52071[(1)] = (3));


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
});})(__52050,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
;
return ((function (__52050,switch__50379__auto__,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_50614 = [null,null,null,null,null,null,null];
(statearr_50614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__);

(statearr_50614[(1)] = (1));

return statearr_50614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1 = (function (state_50606){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50606);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50615){var ex__50383__auto__ = e50615;
var statearr_50616_52074 = state_50606;
(statearr_50616_52074[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50606[(4)]))){
var statearr_50617_52075 = state_50606;
(statearr_50617_52075[(1)] = cljs.core.first((state_50606[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52077 = state_50606;
state_50606 = G__52077;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = function(state_50606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1.call(this,state_50606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__;
})()
;})(__52050,switch__50379__auto__,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
})();
var state__50417__auto__ = (function (){var statearr_50618 = f__50416__auto__();
(statearr_50618[(6)] = c__50415__auto___52064);

return statearr_50618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
});})(__52050,c__50415__auto___52064,G__50568_52051,G__50568_52052__$1,n__4613__auto___52049,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50568_52052__$1)].join('')));

}

var G__52080 = (__52050 + (1));
__52050 = G__52080;
continue;
} else {
}
break;
}

var c__50415__auto___52082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50640){
var state_val_50641 = (state_50640[(1)]);
if((state_val_50641 === (7))){
var inst_50636 = (state_50640[(2)]);
var state_50640__$1 = state_50640;
var statearr_50642_52083 = state_50640__$1;
(statearr_50642_52083[(2)] = inst_50636);

(statearr_50642_52083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (1))){
var state_50640__$1 = state_50640;
var statearr_50643_52084 = state_50640__$1;
(statearr_50643_52084[(2)] = null);

(statearr_50643_52084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (4))){
var inst_50621 = (state_50640[(7)]);
var inst_50621__$1 = (state_50640[(2)]);
var inst_50622 = (inst_50621__$1 == null);
var state_50640__$1 = (function (){var statearr_50644 = state_50640;
(statearr_50644[(7)] = inst_50621__$1);

return statearr_50644;
})();
if(cljs.core.truth_(inst_50622)){
var statearr_50645_52086 = state_50640__$1;
(statearr_50645_52086[(1)] = (5));

} else {
var statearr_50646_52088 = state_50640__$1;
(statearr_50646_52088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (6))){
var inst_50621 = (state_50640[(7)]);
var inst_50626 = (state_50640[(8)]);
var inst_50626__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50628 = [inst_50621,inst_50626__$1];
var inst_50629 = (new cljs.core.PersistentVector(null,2,(5),inst_50627,inst_50628,null));
var state_50640__$1 = (function (){var statearr_50647 = state_50640;
(statearr_50647[(8)] = inst_50626__$1);

return statearr_50647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50640__$1,(8),jobs,inst_50629);
} else {
if((state_val_50641 === (3))){
var inst_50638 = (state_50640[(2)]);
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50640__$1,inst_50638);
} else {
if((state_val_50641 === (2))){
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50640__$1,(4),from);
} else {
if((state_val_50641 === (9))){
var inst_50633 = (state_50640[(2)]);
var state_50640__$1 = (function (){var statearr_50648 = state_50640;
(statearr_50648[(9)] = inst_50633);

return statearr_50648;
})();
var statearr_50649_52093 = state_50640__$1;
(statearr_50649_52093[(2)] = null);

(statearr_50649_52093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (5))){
var inst_50624 = cljs.core.async.close_BANG_(jobs);
var state_50640__$1 = state_50640;
var statearr_50650_52095 = state_50640__$1;
(statearr_50650_52095[(2)] = inst_50624);

(statearr_50650_52095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (8))){
var inst_50626 = (state_50640[(8)]);
var inst_50631 = (state_50640[(2)]);
var state_50640__$1 = (function (){var statearr_50651 = state_50640;
(statearr_50651[(10)] = inst_50631);

return statearr_50651;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50640__$1,(9),results,inst_50626);
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
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_50652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__);

(statearr_50652[(1)] = (1));

return statearr_50652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1 = (function (state_50640){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50640);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50653){var ex__50383__auto__ = e50653;
var statearr_50654_52097 = state_50640;
(statearr_50654_52097[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50640[(4)]))){
var statearr_50655_52098 = state_50640;
(statearr_50655_52098[(1)] = cljs.core.first((state_50640[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52099 = state_50640;
state_50640 = G__52099;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = function(state_50640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1.call(this,state_50640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50656 = f__50416__auto__();
(statearr_50656[(6)] = c__50415__auto___52082);

return statearr_50656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


var c__50415__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50694){
var state_val_50695 = (state_50694[(1)]);
if((state_val_50695 === (7))){
var inst_50690 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
var statearr_50696_52100 = state_50694__$1;
(statearr_50696_52100[(2)] = inst_50690);

(statearr_50696_52100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (20))){
var state_50694__$1 = state_50694;
var statearr_50697_52101 = state_50694__$1;
(statearr_50697_52101[(2)] = null);

(statearr_50697_52101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (1))){
var state_50694__$1 = state_50694;
var statearr_50698_52102 = state_50694__$1;
(statearr_50698_52102[(2)] = null);

(statearr_50698_52102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (4))){
var inst_50659 = (state_50694[(7)]);
var inst_50659__$1 = (state_50694[(2)]);
var inst_50660 = (inst_50659__$1 == null);
var state_50694__$1 = (function (){var statearr_50699 = state_50694;
(statearr_50699[(7)] = inst_50659__$1);

return statearr_50699;
})();
if(cljs.core.truth_(inst_50660)){
var statearr_50700_52103 = state_50694__$1;
(statearr_50700_52103[(1)] = (5));

} else {
var statearr_50701_52104 = state_50694__$1;
(statearr_50701_52104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (15))){
var inst_50672 = (state_50694[(8)]);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50694__$1,(18),to,inst_50672);
} else {
if((state_val_50695 === (21))){
var inst_50685 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
var statearr_50702_52105 = state_50694__$1;
(statearr_50702_52105[(2)] = inst_50685);

(statearr_50702_52105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (13))){
var inst_50687 = (state_50694[(2)]);
var state_50694__$1 = (function (){var statearr_50703 = state_50694;
(statearr_50703[(9)] = inst_50687);

return statearr_50703;
})();
var statearr_50704_52106 = state_50694__$1;
(statearr_50704_52106[(2)] = null);

(statearr_50704_52106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (6))){
var inst_50659 = (state_50694[(7)]);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50694__$1,(11),inst_50659);
} else {
if((state_val_50695 === (17))){
var inst_50680 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
if(cljs.core.truth_(inst_50680)){
var statearr_50705_52107 = state_50694__$1;
(statearr_50705_52107[(1)] = (19));

} else {
var statearr_50706_52108 = state_50694__$1;
(statearr_50706_52108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (3))){
var inst_50692 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50694__$1,inst_50692);
} else {
if((state_val_50695 === (12))){
var inst_50669 = (state_50694[(10)]);
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50694__$1,(14),inst_50669);
} else {
if((state_val_50695 === (2))){
var state_50694__$1 = state_50694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50694__$1,(4),results);
} else {
if((state_val_50695 === (19))){
var state_50694__$1 = state_50694;
var statearr_50707_52109 = state_50694__$1;
(statearr_50707_52109[(2)] = null);

(statearr_50707_52109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (11))){
var inst_50669 = (state_50694[(2)]);
var state_50694__$1 = (function (){var statearr_50708 = state_50694;
(statearr_50708[(10)] = inst_50669);

return statearr_50708;
})();
var statearr_50709_52110 = state_50694__$1;
(statearr_50709_52110[(2)] = null);

(statearr_50709_52110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (9))){
var state_50694__$1 = state_50694;
var statearr_50710_52111 = state_50694__$1;
(statearr_50710_52111[(2)] = null);

(statearr_50710_52111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (5))){
var state_50694__$1 = state_50694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50711_52112 = state_50694__$1;
(statearr_50711_52112[(1)] = (8));

} else {
var statearr_50712_52113 = state_50694__$1;
(statearr_50712_52113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (14))){
var inst_50672 = (state_50694[(8)]);
var inst_50672__$1 = (state_50694[(2)]);
var inst_50673 = (inst_50672__$1 == null);
var inst_50674 = cljs.core.not(inst_50673);
var state_50694__$1 = (function (){var statearr_50713 = state_50694;
(statearr_50713[(8)] = inst_50672__$1);

return statearr_50713;
})();
if(inst_50674){
var statearr_50714_52114 = state_50694__$1;
(statearr_50714_52114[(1)] = (15));

} else {
var statearr_50715_52115 = state_50694__$1;
(statearr_50715_52115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (16))){
var state_50694__$1 = state_50694;
var statearr_50716_52116 = state_50694__$1;
(statearr_50716_52116[(2)] = false);

(statearr_50716_52116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (10))){
var inst_50666 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
var statearr_50717_52117 = state_50694__$1;
(statearr_50717_52117[(2)] = inst_50666);

(statearr_50717_52117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (18))){
var inst_50677 = (state_50694[(2)]);
var state_50694__$1 = state_50694;
var statearr_50718_52118 = state_50694__$1;
(statearr_50718_52118[(2)] = inst_50677);

(statearr_50718_52118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50695 === (8))){
var inst_50663 = cljs.core.async.close_BANG_(to);
var state_50694__$1 = state_50694;
var statearr_50719_52119 = state_50694__$1;
(statearr_50719_52119[(2)] = inst_50663);

(statearr_50719_52119[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_50720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__);

(statearr_50720[(1)] = (1));

return statearr_50720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1 = (function (state_50694){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50694);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50721){var ex__50383__auto__ = e50721;
var statearr_50722_52120 = state_50694;
(statearr_50722_52120[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50694[(4)]))){
var statearr_50723_52121 = state_50694;
(statearr_50723_52121[(1)] = cljs.core.first((state_50694[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52122 = state_50694;
state_50694 = G__52122;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__ = function(state_50694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1.call(this,state_50694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50724 = f__50416__auto__();
(statearr_50724[(6)] = c__50415__auto__);

return statearr_50724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

return c__50415__auto__;
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
var G__50726 = arguments.length;
switch (G__50726) {
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
var G__50728 = arguments.length;
switch (G__50728) {
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
var G__50730 = arguments.length;
switch (G__50730) {
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
var c__50415__auto___52126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50756){
var state_val_50757 = (state_50756[(1)]);
if((state_val_50757 === (7))){
var inst_50752 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
var statearr_50758_52127 = state_50756__$1;
(statearr_50758_52127[(2)] = inst_50752);

(statearr_50758_52127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (1))){
var state_50756__$1 = state_50756;
var statearr_50759_52128 = state_50756__$1;
(statearr_50759_52128[(2)] = null);

(statearr_50759_52128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (4))){
var inst_50733 = (state_50756[(7)]);
var inst_50733__$1 = (state_50756[(2)]);
var inst_50734 = (inst_50733__$1 == null);
var state_50756__$1 = (function (){var statearr_50760 = state_50756;
(statearr_50760[(7)] = inst_50733__$1);

return statearr_50760;
})();
if(cljs.core.truth_(inst_50734)){
var statearr_50761_52129 = state_50756__$1;
(statearr_50761_52129[(1)] = (5));

} else {
var statearr_50762_52130 = state_50756__$1;
(statearr_50762_52130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (13))){
var state_50756__$1 = state_50756;
var statearr_50763_52131 = state_50756__$1;
(statearr_50763_52131[(2)] = null);

(statearr_50763_52131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (6))){
var inst_50733 = (state_50756[(7)]);
var inst_50739 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50733) : p.call(null,inst_50733));
var state_50756__$1 = state_50756;
if(cljs.core.truth_(inst_50739)){
var statearr_50764_52132 = state_50756__$1;
(statearr_50764_52132[(1)] = (9));

} else {
var statearr_50765_52133 = state_50756__$1;
(statearr_50765_52133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (3))){
var inst_50754 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50756__$1,inst_50754);
} else {
if((state_val_50757 === (12))){
var state_50756__$1 = state_50756;
var statearr_50766_52134 = state_50756__$1;
(statearr_50766_52134[(2)] = null);

(statearr_50766_52134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (2))){
var state_50756__$1 = state_50756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50756__$1,(4),ch);
} else {
if((state_val_50757 === (11))){
var inst_50733 = (state_50756[(7)]);
var inst_50743 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50756__$1,(8),inst_50743,inst_50733);
} else {
if((state_val_50757 === (9))){
var state_50756__$1 = state_50756;
var statearr_50767_52135 = state_50756__$1;
(statearr_50767_52135[(2)] = tc);

(statearr_50767_52135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (5))){
var inst_50736 = cljs.core.async.close_BANG_(tc);
var inst_50737 = cljs.core.async.close_BANG_(fc);
var state_50756__$1 = (function (){var statearr_50768 = state_50756;
(statearr_50768[(8)] = inst_50736);

return statearr_50768;
})();
var statearr_50769_52136 = state_50756__$1;
(statearr_50769_52136[(2)] = inst_50737);

(statearr_50769_52136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (14))){
var inst_50750 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
var statearr_50770_52137 = state_50756__$1;
(statearr_50770_52137[(2)] = inst_50750);

(statearr_50770_52137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (10))){
var state_50756__$1 = state_50756;
var statearr_50771_52138 = state_50756__$1;
(statearr_50771_52138[(2)] = fc);

(statearr_50771_52138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (8))){
var inst_50745 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
if(cljs.core.truth_(inst_50745)){
var statearr_50772_52139 = state_50756__$1;
(statearr_50772_52139[(1)] = (12));

} else {
var statearr_50773_52140 = state_50756__$1;
(statearr_50773_52140[(1)] = (13));

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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_50774 = [null,null,null,null,null,null,null,null,null];
(statearr_50774[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_50774[(1)] = (1));

return statearr_50774;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_50756){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50756);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50775){var ex__50383__auto__ = e50775;
var statearr_50776_52141 = state_50756;
(statearr_50776_52141[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50756[(4)]))){
var statearr_50777_52142 = state_50756;
(statearr_50777_52142[(1)] = cljs.core.first((state_50756[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52143 = state_50756;
state_50756 = G__52143;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_50756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_50756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50778 = f__50416__auto__();
(statearr_50778[(6)] = c__50415__auto___52126);

return statearr_50778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var c__50415__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50800){
var state_val_50801 = (state_50800[(1)]);
if((state_val_50801 === (7))){
var inst_50796 = (state_50800[(2)]);
var state_50800__$1 = state_50800;
var statearr_50802_52144 = state_50800__$1;
(statearr_50802_52144[(2)] = inst_50796);

(statearr_50802_52144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (1))){
var inst_50779 = init;
var inst_50780 = inst_50779;
var state_50800__$1 = (function (){var statearr_50803 = state_50800;
(statearr_50803[(7)] = inst_50780);

return statearr_50803;
})();
var statearr_50804_52145 = state_50800__$1;
(statearr_50804_52145[(2)] = null);

(statearr_50804_52145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (4))){
var inst_50783 = (state_50800[(8)]);
var inst_50783__$1 = (state_50800[(2)]);
var inst_50784 = (inst_50783__$1 == null);
var state_50800__$1 = (function (){var statearr_50805 = state_50800;
(statearr_50805[(8)] = inst_50783__$1);

return statearr_50805;
})();
if(cljs.core.truth_(inst_50784)){
var statearr_50806_52146 = state_50800__$1;
(statearr_50806_52146[(1)] = (5));

} else {
var statearr_50807_52149 = state_50800__$1;
(statearr_50807_52149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (6))){
var inst_50783 = (state_50800[(8)]);
var inst_50780 = (state_50800[(7)]);
var inst_50787 = (state_50800[(9)]);
var inst_50787__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50780,inst_50783) : f.call(null,inst_50780,inst_50783));
var inst_50788 = cljs.core.reduced_QMARK_(inst_50787__$1);
var state_50800__$1 = (function (){var statearr_50808 = state_50800;
(statearr_50808[(9)] = inst_50787__$1);

return statearr_50808;
})();
if(inst_50788){
var statearr_50809_52153 = state_50800__$1;
(statearr_50809_52153[(1)] = (8));

} else {
var statearr_50810_52154 = state_50800__$1;
(statearr_50810_52154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (3))){
var inst_50798 = (state_50800[(2)]);
var state_50800__$1 = state_50800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50800__$1,inst_50798);
} else {
if((state_val_50801 === (2))){
var state_50800__$1 = state_50800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50800__$1,(4),ch);
} else {
if((state_val_50801 === (9))){
var inst_50787 = (state_50800[(9)]);
var inst_50780 = inst_50787;
var state_50800__$1 = (function (){var statearr_50811 = state_50800;
(statearr_50811[(7)] = inst_50780);

return statearr_50811;
})();
var statearr_50812_52155 = state_50800__$1;
(statearr_50812_52155[(2)] = null);

(statearr_50812_52155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (5))){
var inst_50780 = (state_50800[(7)]);
var state_50800__$1 = state_50800;
var statearr_50813_52156 = state_50800__$1;
(statearr_50813_52156[(2)] = inst_50780);

(statearr_50813_52156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (10))){
var inst_50794 = (state_50800[(2)]);
var state_50800__$1 = state_50800;
var statearr_50814_52157 = state_50800__$1;
(statearr_50814_52157[(2)] = inst_50794);

(statearr_50814_52157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50801 === (8))){
var inst_50787 = (state_50800[(9)]);
var inst_50790 = cljs.core.deref(inst_50787);
var state_50800__$1 = state_50800;
var statearr_50815_52158 = state_50800__$1;
(statearr_50815_52158[(2)] = inst_50790);

(statearr_50815_52158[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__50380__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50380__auto____0 = (function (){
var statearr_50816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50816[(0)] = cljs$core$async$reduce_$_state_machine__50380__auto__);

(statearr_50816[(1)] = (1));

return statearr_50816;
});
var cljs$core$async$reduce_$_state_machine__50380__auto____1 = (function (state_50800){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50800);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50817){var ex__50383__auto__ = e50817;
var statearr_50818_52160 = state_50800;
(statearr_50818_52160[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50800[(4)]))){
var statearr_50819_52161 = state_50800;
(statearr_50819_52161[(1)] = cljs.core.first((state_50800[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52162 = state_50800;
state_50800 = G__52162;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50380__auto__ = function(state_50800){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50380__auto____1.call(this,state_50800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50380__auto____0;
cljs$core$async$reduce_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50380__auto____1;
return cljs$core$async$reduce_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50820 = f__50416__auto__();
(statearr_50820[(6)] = c__50415__auto__);

return statearr_50820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

return c__50415__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50415__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50826){
var state_val_50827 = (state_50826[(1)]);
if((state_val_50827 === (1))){
var inst_50821 = cljs.core.async.reduce(f__$1,init,ch);
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50826__$1,(2),inst_50821);
} else {
if((state_val_50827 === (2))){
var inst_50823 = (state_50826[(2)]);
var inst_50824 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50823) : f__$1.call(null,inst_50823));
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50826__$1,inst_50824);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50380__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50380__auto____0 = (function (){
var statearr_50828 = [null,null,null,null,null,null,null];
(statearr_50828[(0)] = cljs$core$async$transduce_$_state_machine__50380__auto__);

(statearr_50828[(1)] = (1));

return statearr_50828;
});
var cljs$core$async$transduce_$_state_machine__50380__auto____1 = (function (state_50826){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50826);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50829){var ex__50383__auto__ = e50829;
var statearr_50830_52168 = state_50826;
(statearr_50830_52168[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50826[(4)]))){
var statearr_50831_52169 = state_50826;
(statearr_50831_52169[(1)] = cljs.core.first((state_50826[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52170 = state_50826;
state_50826 = G__52170;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50380__auto__ = function(state_50826){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50380__auto____1.call(this,state_50826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50380__auto____0;
cljs$core$async$transduce_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50380__auto____1;
return cljs$core$async$transduce_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50832 = f__50416__auto__();
(statearr_50832[(6)] = c__50415__auto__);

return statearr_50832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

return c__50415__auto__;
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
var G__50834 = arguments.length;
switch (G__50834) {
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
var c__50415__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_50859){
var state_val_50860 = (state_50859[(1)]);
if((state_val_50860 === (7))){
var inst_50841 = (state_50859[(2)]);
var state_50859__$1 = state_50859;
var statearr_50861_52172 = state_50859__$1;
(statearr_50861_52172[(2)] = inst_50841);

(statearr_50861_52172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (1))){
var inst_50835 = cljs.core.seq(coll);
var inst_50836 = inst_50835;
var state_50859__$1 = (function (){var statearr_50862 = state_50859;
(statearr_50862[(7)] = inst_50836);

return statearr_50862;
})();
var statearr_50863_52173 = state_50859__$1;
(statearr_50863_52173[(2)] = null);

(statearr_50863_52173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (4))){
var inst_50836 = (state_50859[(7)]);
var inst_50839 = cljs.core.first(inst_50836);
var state_50859__$1 = state_50859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50859__$1,(7),ch,inst_50839);
} else {
if((state_val_50860 === (13))){
var inst_50853 = (state_50859[(2)]);
var state_50859__$1 = state_50859;
var statearr_50864_52175 = state_50859__$1;
(statearr_50864_52175[(2)] = inst_50853);

(statearr_50864_52175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (6))){
var inst_50844 = (state_50859[(2)]);
var state_50859__$1 = state_50859;
if(cljs.core.truth_(inst_50844)){
var statearr_50865_52177 = state_50859__$1;
(statearr_50865_52177[(1)] = (8));

} else {
var statearr_50866_52178 = state_50859__$1;
(statearr_50866_52178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (3))){
var inst_50857 = (state_50859[(2)]);
var state_50859__$1 = state_50859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50859__$1,inst_50857);
} else {
if((state_val_50860 === (12))){
var state_50859__$1 = state_50859;
var statearr_50867_52179 = state_50859__$1;
(statearr_50867_52179[(2)] = null);

(statearr_50867_52179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (2))){
var inst_50836 = (state_50859[(7)]);
var state_50859__$1 = state_50859;
if(cljs.core.truth_(inst_50836)){
var statearr_50868_52180 = state_50859__$1;
(statearr_50868_52180[(1)] = (4));

} else {
var statearr_50869_52183 = state_50859__$1;
(statearr_50869_52183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (11))){
var inst_50850 = cljs.core.async.close_BANG_(ch);
var state_50859__$1 = state_50859;
var statearr_50870_52184 = state_50859__$1;
(statearr_50870_52184[(2)] = inst_50850);

(statearr_50870_52184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (9))){
var state_50859__$1 = state_50859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50871_52185 = state_50859__$1;
(statearr_50871_52185[(1)] = (11));

} else {
var statearr_50872_52186 = state_50859__$1;
(statearr_50872_52186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (5))){
var inst_50836 = (state_50859[(7)]);
var state_50859__$1 = state_50859;
var statearr_50873_52188 = state_50859__$1;
(statearr_50873_52188[(2)] = inst_50836);

(statearr_50873_52188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (10))){
var inst_50855 = (state_50859[(2)]);
var state_50859__$1 = state_50859;
var statearr_50874_52192 = state_50859__$1;
(statearr_50874_52192[(2)] = inst_50855);

(statearr_50874_52192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50860 === (8))){
var inst_50836 = (state_50859[(7)]);
var inst_50846 = cljs.core.next(inst_50836);
var inst_50836__$1 = inst_50846;
var state_50859__$1 = (function (){var statearr_50875 = state_50859;
(statearr_50875[(7)] = inst_50836__$1);

return statearr_50875;
})();
var statearr_50876_52194 = state_50859__$1;
(statearr_50876_52194[(2)] = null);

(statearr_50876_52194[(1)] = (2));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_50877 = [null,null,null,null,null,null,null,null];
(statearr_50877[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_50877[(1)] = (1));

return statearr_50877;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_50859){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_50859);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e50878){var ex__50383__auto__ = e50878;
var statearr_50879_52197 = state_50859;
(statearr_50879_52197[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_50859[(4)]))){
var statearr_50880_52198 = state_50859;
(statearr_50880_52198[(1)] = cljs.core.first((state_50859[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52199 = state_50859;
state_50859 = G__52199;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_50859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_50859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_50881 = f__50416__auto__();
(statearr_50881[(6)] = c__50415__auto__);

return statearr_50881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

return c__50415__auto__;
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
var G__50883 = arguments.length;
switch (G__50883) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_52206 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_52206(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52209 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_52209(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52215 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_52215(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52216 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_52216(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50884 = (function (ch,cs,meta50885){
this.ch = ch;
this.cs = cs;
this.meta50885 = meta50885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50886,meta50885__$1){
var self__ = this;
var _50886__$1 = this;
return (new cljs.core.async.t_cljs$core$async50884(self__.ch,self__.cs,meta50885__$1));
}));

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50886){
var self__ = this;
var _50886__$1 = this;
return self__.meta50885;
}));

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50884.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50885","meta50885",1452204516,null)], null);
}));

(cljs.core.async.t_cljs$core$async50884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50884");

(cljs.core.async.t_cljs$core$async50884.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50884.
 */
cljs.core.async.__GT_t_cljs$core$async50884 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50884(ch__$1,cs__$1,meta50885){
return (new cljs.core.async.t_cljs$core$async50884(ch__$1,cs__$1,meta50885));
});

}

return (new cljs.core.async.t_cljs$core$async50884(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50415__auto___52224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51019){
var state_val_51020 = (state_51019[(1)]);
if((state_val_51020 === (7))){
var inst_51015 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51021_52226 = state_51019__$1;
(statearr_51021_52226[(2)] = inst_51015);

(statearr_51021_52226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (20))){
var inst_50920 = (state_51019[(7)]);
var inst_50932 = cljs.core.first(inst_50920);
var inst_50933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50932,(0),null);
var inst_50934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50932,(1),null);
var state_51019__$1 = (function (){var statearr_51022 = state_51019;
(statearr_51022[(8)] = inst_50933);

return statearr_51022;
})();
if(cljs.core.truth_(inst_50934)){
var statearr_51023_52228 = state_51019__$1;
(statearr_51023_52228[(1)] = (22));

} else {
var statearr_51024_52229 = state_51019__$1;
(statearr_51024_52229[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (27))){
var inst_50964 = (state_51019[(9)]);
var inst_50969 = (state_51019[(10)]);
var inst_50889 = (state_51019[(11)]);
var inst_50962 = (state_51019[(12)]);
var inst_50969__$1 = cljs.core._nth(inst_50962,inst_50964);
var inst_50970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50969__$1,inst_50889,done);
var state_51019__$1 = (function (){var statearr_51025 = state_51019;
(statearr_51025[(10)] = inst_50969__$1);

return statearr_51025;
})();
if(cljs.core.truth_(inst_50970)){
var statearr_51026_52233 = state_51019__$1;
(statearr_51026_52233[(1)] = (30));

} else {
var statearr_51027_52234 = state_51019__$1;
(statearr_51027_52234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (1))){
var state_51019__$1 = state_51019;
var statearr_51028_52235 = state_51019__$1;
(statearr_51028_52235[(2)] = null);

(statearr_51028_52235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (24))){
var inst_50920 = (state_51019[(7)]);
var inst_50939 = (state_51019[(2)]);
var inst_50940 = cljs.core.next(inst_50920);
var inst_50898 = inst_50940;
var inst_50899 = null;
var inst_50900 = (0);
var inst_50901 = (0);
var state_51019__$1 = (function (){var statearr_51029 = state_51019;
(statearr_51029[(13)] = inst_50898);

(statearr_51029[(14)] = inst_50899);

(statearr_51029[(15)] = inst_50939);

(statearr_51029[(16)] = inst_50901);

(statearr_51029[(17)] = inst_50900);

return statearr_51029;
})();
var statearr_51030_52237 = state_51019__$1;
(statearr_51030_52237[(2)] = null);

(statearr_51030_52237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (39))){
var state_51019__$1 = state_51019;
var statearr_51034_52241 = state_51019__$1;
(statearr_51034_52241[(2)] = null);

(statearr_51034_52241[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (4))){
var inst_50889 = (state_51019[(11)]);
var inst_50889__$1 = (state_51019[(2)]);
var inst_50890 = (inst_50889__$1 == null);
var state_51019__$1 = (function (){var statearr_51035 = state_51019;
(statearr_51035[(11)] = inst_50889__$1);

return statearr_51035;
})();
if(cljs.core.truth_(inst_50890)){
var statearr_51036_52242 = state_51019__$1;
(statearr_51036_52242[(1)] = (5));

} else {
var statearr_51037_52244 = state_51019__$1;
(statearr_51037_52244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (15))){
var inst_50898 = (state_51019[(13)]);
var inst_50899 = (state_51019[(14)]);
var inst_50901 = (state_51019[(16)]);
var inst_50900 = (state_51019[(17)]);
var inst_50916 = (state_51019[(2)]);
var inst_50917 = (inst_50901 + (1));
var tmp51031 = inst_50898;
var tmp51032 = inst_50899;
var tmp51033 = inst_50900;
var inst_50898__$1 = tmp51031;
var inst_50899__$1 = tmp51032;
var inst_50900__$1 = tmp51033;
var inst_50901__$1 = inst_50917;
var state_51019__$1 = (function (){var statearr_51038 = state_51019;
(statearr_51038[(13)] = inst_50898__$1);

(statearr_51038[(14)] = inst_50899__$1);

(statearr_51038[(18)] = inst_50916);

(statearr_51038[(16)] = inst_50901__$1);

(statearr_51038[(17)] = inst_50900__$1);

return statearr_51038;
})();
var statearr_51039_52250 = state_51019__$1;
(statearr_51039_52250[(2)] = null);

(statearr_51039_52250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (21))){
var inst_50943 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51043_52254 = state_51019__$1;
(statearr_51043_52254[(2)] = inst_50943);

(statearr_51043_52254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (31))){
var inst_50969 = (state_51019[(10)]);
var inst_50973 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50969);
var state_51019__$1 = state_51019;
var statearr_51044_52255 = state_51019__$1;
(statearr_51044_52255[(2)] = inst_50973);

(statearr_51044_52255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (32))){
var inst_50961 = (state_51019[(19)]);
var inst_50964 = (state_51019[(9)]);
var inst_50963 = (state_51019[(20)]);
var inst_50962 = (state_51019[(12)]);
var inst_50975 = (state_51019[(2)]);
var inst_50976 = (inst_50964 + (1));
var tmp51040 = inst_50961;
var tmp51041 = inst_50963;
var tmp51042 = inst_50962;
var inst_50961__$1 = tmp51040;
var inst_50962__$1 = tmp51042;
var inst_50963__$1 = tmp51041;
var inst_50964__$1 = inst_50976;
var state_51019__$1 = (function (){var statearr_51045 = state_51019;
(statearr_51045[(19)] = inst_50961__$1);

(statearr_51045[(9)] = inst_50964__$1);

(statearr_51045[(20)] = inst_50963__$1);

(statearr_51045[(21)] = inst_50975);

(statearr_51045[(12)] = inst_50962__$1);

return statearr_51045;
})();
var statearr_51046_52262 = state_51019__$1;
(statearr_51046_52262[(2)] = null);

(statearr_51046_52262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (40))){
var inst_50988 = (state_51019[(22)]);
var inst_50992 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50988);
var state_51019__$1 = state_51019;
var statearr_51047_52263 = state_51019__$1;
(statearr_51047_52263[(2)] = inst_50992);

(statearr_51047_52263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (33))){
var inst_50979 = (state_51019[(23)]);
var inst_50981 = cljs.core.chunked_seq_QMARK_(inst_50979);
var state_51019__$1 = state_51019;
if(inst_50981){
var statearr_51048_52264 = state_51019__$1;
(statearr_51048_52264[(1)] = (36));

} else {
var statearr_51049_52268 = state_51019__$1;
(statearr_51049_52268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (13))){
var inst_50910 = (state_51019[(24)]);
var inst_50913 = cljs.core.async.close_BANG_(inst_50910);
var state_51019__$1 = state_51019;
var statearr_51050_52269 = state_51019__$1;
(statearr_51050_52269[(2)] = inst_50913);

(statearr_51050_52269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (22))){
var inst_50933 = (state_51019[(8)]);
var inst_50936 = cljs.core.async.close_BANG_(inst_50933);
var state_51019__$1 = state_51019;
var statearr_51051_52270 = state_51019__$1;
(statearr_51051_52270[(2)] = inst_50936);

(statearr_51051_52270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (36))){
var inst_50979 = (state_51019[(23)]);
var inst_50983 = cljs.core.chunk_first(inst_50979);
var inst_50984 = cljs.core.chunk_rest(inst_50979);
var inst_50985 = cljs.core.count(inst_50983);
var inst_50961 = inst_50984;
var inst_50962 = inst_50983;
var inst_50963 = inst_50985;
var inst_50964 = (0);
var state_51019__$1 = (function (){var statearr_51052 = state_51019;
(statearr_51052[(19)] = inst_50961);

(statearr_51052[(9)] = inst_50964);

(statearr_51052[(20)] = inst_50963);

(statearr_51052[(12)] = inst_50962);

return statearr_51052;
})();
var statearr_51053_52274 = state_51019__$1;
(statearr_51053_52274[(2)] = null);

(statearr_51053_52274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (41))){
var inst_50979 = (state_51019[(23)]);
var inst_50994 = (state_51019[(2)]);
var inst_50995 = cljs.core.next(inst_50979);
var inst_50961 = inst_50995;
var inst_50962 = null;
var inst_50963 = (0);
var inst_50964 = (0);
var state_51019__$1 = (function (){var statearr_51054 = state_51019;
(statearr_51054[(19)] = inst_50961);

(statearr_51054[(9)] = inst_50964);

(statearr_51054[(20)] = inst_50963);

(statearr_51054[(25)] = inst_50994);

(statearr_51054[(12)] = inst_50962);

return statearr_51054;
})();
var statearr_51055_52277 = state_51019__$1;
(statearr_51055_52277[(2)] = null);

(statearr_51055_52277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (43))){
var state_51019__$1 = state_51019;
var statearr_51056_52279 = state_51019__$1;
(statearr_51056_52279[(2)] = null);

(statearr_51056_52279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (29))){
var inst_51003 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51057_52281 = state_51019__$1;
(statearr_51057_52281[(2)] = inst_51003);

(statearr_51057_52281[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (44))){
var inst_51012 = (state_51019[(2)]);
var state_51019__$1 = (function (){var statearr_51058 = state_51019;
(statearr_51058[(26)] = inst_51012);

return statearr_51058;
})();
var statearr_51059_52283 = state_51019__$1;
(statearr_51059_52283[(2)] = null);

(statearr_51059_52283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (6))){
var inst_50953 = (state_51019[(27)]);
var inst_50952 = cljs.core.deref(cs);
var inst_50953__$1 = cljs.core.keys(inst_50952);
var inst_50954 = cljs.core.count(inst_50953__$1);
var inst_50955 = cljs.core.reset_BANG_(dctr,inst_50954);
var inst_50960 = cljs.core.seq(inst_50953__$1);
var inst_50961 = inst_50960;
var inst_50962 = null;
var inst_50963 = (0);
var inst_50964 = (0);
var state_51019__$1 = (function (){var statearr_51060 = state_51019;
(statearr_51060[(19)] = inst_50961);

(statearr_51060[(27)] = inst_50953__$1);

(statearr_51060[(9)] = inst_50964);

(statearr_51060[(20)] = inst_50963);

(statearr_51060[(12)] = inst_50962);

(statearr_51060[(28)] = inst_50955);

return statearr_51060;
})();
var statearr_51061_52288 = state_51019__$1;
(statearr_51061_52288[(2)] = null);

(statearr_51061_52288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (28))){
var inst_50961 = (state_51019[(19)]);
var inst_50979 = (state_51019[(23)]);
var inst_50979__$1 = cljs.core.seq(inst_50961);
var state_51019__$1 = (function (){var statearr_51062 = state_51019;
(statearr_51062[(23)] = inst_50979__$1);

return statearr_51062;
})();
if(inst_50979__$1){
var statearr_51063_52289 = state_51019__$1;
(statearr_51063_52289[(1)] = (33));

} else {
var statearr_51064_52291 = state_51019__$1;
(statearr_51064_52291[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (25))){
var inst_50964 = (state_51019[(9)]);
var inst_50963 = (state_51019[(20)]);
var inst_50966 = (inst_50964 < inst_50963);
var inst_50967 = inst_50966;
var state_51019__$1 = state_51019;
if(cljs.core.truth_(inst_50967)){
var statearr_51065_52292 = state_51019__$1;
(statearr_51065_52292[(1)] = (27));

} else {
var statearr_51066_52293 = state_51019__$1;
(statearr_51066_52293[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (34))){
var state_51019__$1 = state_51019;
var statearr_51067_52296 = state_51019__$1;
(statearr_51067_52296[(2)] = null);

(statearr_51067_52296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (17))){
var state_51019__$1 = state_51019;
var statearr_51068_52297 = state_51019__$1;
(statearr_51068_52297[(2)] = null);

(statearr_51068_52297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (3))){
var inst_51017 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51019__$1,inst_51017);
} else {
if((state_val_51020 === (12))){
var inst_50948 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51069_52298 = state_51019__$1;
(statearr_51069_52298[(2)] = inst_50948);

(statearr_51069_52298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (2))){
var state_51019__$1 = state_51019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51019__$1,(4),ch);
} else {
if((state_val_51020 === (23))){
var state_51019__$1 = state_51019;
var statearr_51070_52303 = state_51019__$1;
(statearr_51070_52303[(2)] = null);

(statearr_51070_52303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (35))){
var inst_51001 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51071_52305 = state_51019__$1;
(statearr_51071_52305[(2)] = inst_51001);

(statearr_51071_52305[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (19))){
var inst_50920 = (state_51019[(7)]);
var inst_50924 = cljs.core.chunk_first(inst_50920);
var inst_50925 = cljs.core.chunk_rest(inst_50920);
var inst_50926 = cljs.core.count(inst_50924);
var inst_50898 = inst_50925;
var inst_50899 = inst_50924;
var inst_50900 = inst_50926;
var inst_50901 = (0);
var state_51019__$1 = (function (){var statearr_51072 = state_51019;
(statearr_51072[(13)] = inst_50898);

(statearr_51072[(14)] = inst_50899);

(statearr_51072[(16)] = inst_50901);

(statearr_51072[(17)] = inst_50900);

return statearr_51072;
})();
var statearr_51073_52306 = state_51019__$1;
(statearr_51073_52306[(2)] = null);

(statearr_51073_52306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (11))){
var inst_50898 = (state_51019[(13)]);
var inst_50920 = (state_51019[(7)]);
var inst_50920__$1 = cljs.core.seq(inst_50898);
var state_51019__$1 = (function (){var statearr_51074 = state_51019;
(statearr_51074[(7)] = inst_50920__$1);

return statearr_51074;
})();
if(inst_50920__$1){
var statearr_51075_52308 = state_51019__$1;
(statearr_51075_52308[(1)] = (16));

} else {
var statearr_51076_52309 = state_51019__$1;
(statearr_51076_52309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (9))){
var inst_50950 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51077_52310 = state_51019__$1;
(statearr_51077_52310[(2)] = inst_50950);

(statearr_51077_52310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (5))){
var inst_50896 = cljs.core.deref(cs);
var inst_50897 = cljs.core.seq(inst_50896);
var inst_50898 = inst_50897;
var inst_50899 = null;
var inst_50900 = (0);
var inst_50901 = (0);
var state_51019__$1 = (function (){var statearr_51078 = state_51019;
(statearr_51078[(13)] = inst_50898);

(statearr_51078[(14)] = inst_50899);

(statearr_51078[(16)] = inst_50901);

(statearr_51078[(17)] = inst_50900);

return statearr_51078;
})();
var statearr_51079_52311 = state_51019__$1;
(statearr_51079_52311[(2)] = null);

(statearr_51079_52311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (14))){
var state_51019__$1 = state_51019;
var statearr_51080_52312 = state_51019__$1;
(statearr_51080_52312[(2)] = null);

(statearr_51080_52312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (45))){
var inst_51009 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51081_52313 = state_51019__$1;
(statearr_51081_52313[(2)] = inst_51009);

(statearr_51081_52313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (26))){
var inst_50953 = (state_51019[(27)]);
var inst_51005 = (state_51019[(2)]);
var inst_51006 = cljs.core.seq(inst_50953);
var state_51019__$1 = (function (){var statearr_51082 = state_51019;
(statearr_51082[(29)] = inst_51005);

return statearr_51082;
})();
if(inst_51006){
var statearr_51083_52316 = state_51019__$1;
(statearr_51083_52316[(1)] = (42));

} else {
var statearr_51084_52317 = state_51019__$1;
(statearr_51084_52317[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (16))){
var inst_50920 = (state_51019[(7)]);
var inst_50922 = cljs.core.chunked_seq_QMARK_(inst_50920);
var state_51019__$1 = state_51019;
if(inst_50922){
var statearr_51085_52318 = state_51019__$1;
(statearr_51085_52318[(1)] = (19));

} else {
var statearr_51086_52319 = state_51019__$1;
(statearr_51086_52319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (38))){
var inst_50998 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51087_52320 = state_51019__$1;
(statearr_51087_52320[(2)] = inst_50998);

(statearr_51087_52320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (30))){
var state_51019__$1 = state_51019;
var statearr_51088_52325 = state_51019__$1;
(statearr_51088_52325[(2)] = null);

(statearr_51088_52325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (10))){
var inst_50899 = (state_51019[(14)]);
var inst_50901 = (state_51019[(16)]);
var inst_50909 = cljs.core._nth(inst_50899,inst_50901);
var inst_50910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50909,(0),null);
var inst_50911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50909,(1),null);
var state_51019__$1 = (function (){var statearr_51089 = state_51019;
(statearr_51089[(24)] = inst_50910);

return statearr_51089;
})();
if(cljs.core.truth_(inst_50911)){
var statearr_51090_52327 = state_51019__$1;
(statearr_51090_52327[(1)] = (13));

} else {
var statearr_51091_52329 = state_51019__$1;
(statearr_51091_52329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (18))){
var inst_50946 = (state_51019[(2)]);
var state_51019__$1 = state_51019;
var statearr_51092_52330 = state_51019__$1;
(statearr_51092_52330[(2)] = inst_50946);

(statearr_51092_52330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (42))){
var state_51019__$1 = state_51019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51019__$1,(45),dchan);
} else {
if((state_val_51020 === (37))){
var inst_50979 = (state_51019[(23)]);
var inst_50889 = (state_51019[(11)]);
var inst_50988 = (state_51019[(22)]);
var inst_50988__$1 = cljs.core.first(inst_50979);
var inst_50989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50988__$1,inst_50889,done);
var state_51019__$1 = (function (){var statearr_51093 = state_51019;
(statearr_51093[(22)] = inst_50988__$1);

return statearr_51093;
})();
if(cljs.core.truth_(inst_50989)){
var statearr_51094_52335 = state_51019__$1;
(statearr_51094_52335[(1)] = (39));

} else {
var statearr_51095_52336 = state_51019__$1;
(statearr_51095_52336[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51020 === (8))){
var inst_50901 = (state_51019[(16)]);
var inst_50900 = (state_51019[(17)]);
var inst_50903 = (inst_50901 < inst_50900);
var inst_50904 = inst_50903;
var state_51019__$1 = state_51019;
if(cljs.core.truth_(inst_50904)){
var statearr_51096_52337 = state_51019__$1;
(statearr_51096_52337[(1)] = (10));

} else {
var statearr_51097_52338 = state_51019__$1;
(statearr_51097_52338[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__50380__auto__ = null;
var cljs$core$async$mult_$_state_machine__50380__auto____0 = (function (){
var statearr_51098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51098[(0)] = cljs$core$async$mult_$_state_machine__50380__auto__);

(statearr_51098[(1)] = (1));

return statearr_51098;
});
var cljs$core$async$mult_$_state_machine__50380__auto____1 = (function (state_51019){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51019);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51099){var ex__50383__auto__ = e51099;
var statearr_51100_52342 = state_51019;
(statearr_51100_52342[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51019[(4)]))){
var statearr_51101_52346 = state_51019;
(statearr_51101_52346[(1)] = cljs.core.first((state_51019[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52347 = state_51019;
state_51019 = G__52347;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50380__auto__ = function(state_51019){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50380__auto____1.call(this,state_51019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50380__auto____0;
cljs$core$async$mult_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50380__auto____1;
return cljs$core$async$mult_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51102 = f__50416__auto__();
(statearr_51102[(6)] = c__50415__auto___52224);

return statearr_51102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var G__51104 = arguments.length;
switch (G__51104) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52355 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_52355(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52358 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_52358(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52359 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52359(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52361 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_52361(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52365 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52365(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52368 = arguments.length;
var i__4737__auto___52369 = (0);
while(true){
if((i__4737__auto___52369 < len__4736__auto___52368)){
args__4742__auto__.push((arguments[i__4737__auto___52369]));

var G__52374 = (i__4737__auto___52369 + (1));
i__4737__auto___52369 = G__52374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51109){
var map__51110 = p__51109;
var map__51110__$1 = (((((!((map__51110 == null))))?(((((map__51110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51110):map__51110);
var opts = map__51110__$1;
var statearr_51112_52375 = state;
(statearr_51112_52375[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51113_52378 = state;
(statearr_51113_52378[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51114_52379 = state;
(statearr_51114_52379[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51105){
var G__51106 = cljs.core.first(seq51105);
var seq51105__$1 = cljs.core.next(seq51105);
var G__51107 = cljs.core.first(seq51105__$1);
var seq51105__$2 = cljs.core.next(seq51105__$1);
var G__51108 = cljs.core.first(seq51105__$2);
var seq51105__$3 = cljs.core.next(seq51105__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51106,G__51107,G__51108,seq51105__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51115 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51116){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51116 = meta51116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51117,meta51116__$1){
var self__ = this;
var _51117__$1 = this;
return (new cljs.core.async.t_cljs$core$async51115(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51116__$1));
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51117){
var self__ = this;
var _51117__$1 = this;
return self__.meta51116;
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51115.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51116","meta51116",-2039861363,null)], null);
}));

(cljs.core.async.t_cljs$core$async51115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51115");

(cljs.core.async.t_cljs$core$async51115.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51115.
 */
cljs.core.async.__GT_t_cljs$core$async51115 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51115(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51116){
return (new cljs.core.async.t_cljs$core$async51115(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51116));
});

}

return (new cljs.core.async.t_cljs$core$async51115(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50415__auto___52396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51219){
var state_val_51220 = (state_51219[(1)]);
if((state_val_51220 === (7))){
var inst_51134 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
var statearr_51221_52397 = state_51219__$1;
(statearr_51221_52397[(2)] = inst_51134);

(statearr_51221_52397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (20))){
var inst_51146 = (state_51219[(7)]);
var state_51219__$1 = state_51219;
var statearr_51222_52398 = state_51219__$1;
(statearr_51222_52398[(2)] = inst_51146);

(statearr_51222_52398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (27))){
var state_51219__$1 = state_51219;
var statearr_51223_52399 = state_51219__$1;
(statearr_51223_52399[(2)] = null);

(statearr_51223_52399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (1))){
var inst_51121 = (state_51219[(8)]);
var inst_51121__$1 = calc_state();
var inst_51123 = (inst_51121__$1 == null);
var inst_51124 = cljs.core.not(inst_51123);
var state_51219__$1 = (function (){var statearr_51224 = state_51219;
(statearr_51224[(8)] = inst_51121__$1);

return statearr_51224;
})();
if(inst_51124){
var statearr_51225_52400 = state_51219__$1;
(statearr_51225_52400[(1)] = (2));

} else {
var statearr_51226_52401 = state_51219__$1;
(statearr_51226_52401[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (24))){
var inst_51170 = (state_51219[(9)]);
var inst_51179 = (state_51219[(10)]);
var inst_51193 = (state_51219[(11)]);
var inst_51193__$1 = (inst_51170.cljs$core$IFn$_invoke$arity$1 ? inst_51170.cljs$core$IFn$_invoke$arity$1(inst_51179) : inst_51170.call(null,inst_51179));
var state_51219__$1 = (function (){var statearr_51227 = state_51219;
(statearr_51227[(11)] = inst_51193__$1);

return statearr_51227;
})();
if(cljs.core.truth_(inst_51193__$1)){
var statearr_51228_52402 = state_51219__$1;
(statearr_51228_52402[(1)] = (29));

} else {
var statearr_51229_52403 = state_51219__$1;
(statearr_51229_52403[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (4))){
var inst_51137 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51137)){
var statearr_51230_52404 = state_51219__$1;
(statearr_51230_52404[(1)] = (8));

} else {
var statearr_51231_52405 = state_51219__$1;
(statearr_51231_52405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (15))){
var inst_51164 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51164)){
var statearr_51232_52406 = state_51219__$1;
(statearr_51232_52406[(1)] = (19));

} else {
var statearr_51233_52407 = state_51219__$1;
(statearr_51233_52407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (21))){
var inst_51169 = (state_51219[(12)]);
var inst_51169__$1 = (state_51219[(2)]);
var inst_51170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51169__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51169__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51169__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51219__$1 = (function (){var statearr_51234 = state_51219;
(statearr_51234[(9)] = inst_51170);

(statearr_51234[(12)] = inst_51169__$1);

(statearr_51234[(13)] = inst_51171);

return statearr_51234;
})();
return cljs.core.async.ioc_alts_BANG_(state_51219__$1,(22),inst_51172);
} else {
if((state_val_51220 === (31))){
var inst_51201 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51201)){
var statearr_51235_52408 = state_51219__$1;
(statearr_51235_52408[(1)] = (32));

} else {
var statearr_51236_52409 = state_51219__$1;
(statearr_51236_52409[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (32))){
var inst_51178 = (state_51219[(14)]);
var state_51219__$1 = state_51219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51219__$1,(35),out,inst_51178);
} else {
if((state_val_51220 === (33))){
var inst_51169 = (state_51219[(12)]);
var inst_51146 = inst_51169;
var state_51219__$1 = (function (){var statearr_51237 = state_51219;
(statearr_51237[(7)] = inst_51146);

return statearr_51237;
})();
var statearr_51238_52413 = state_51219__$1;
(statearr_51238_52413[(2)] = null);

(statearr_51238_52413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (13))){
var inst_51146 = (state_51219[(7)]);
var inst_51153 = inst_51146.cljs$lang$protocol_mask$partition0$;
var inst_51154 = (inst_51153 & (64));
var inst_51155 = inst_51146.cljs$core$ISeq$;
var inst_51156 = (cljs.core.PROTOCOL_SENTINEL === inst_51155);
var inst_51157 = ((inst_51154) || (inst_51156));
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51157)){
var statearr_51239_52414 = state_51219__$1;
(statearr_51239_52414[(1)] = (16));

} else {
var statearr_51240_52415 = state_51219__$1;
(statearr_51240_52415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (22))){
var inst_51178 = (state_51219[(14)]);
var inst_51179 = (state_51219[(10)]);
var inst_51177 = (state_51219[(2)]);
var inst_51178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51177,(0),null);
var inst_51179__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51177,(1),null);
var inst_51180 = (inst_51178__$1 == null);
var inst_51181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51179__$1,change);
var inst_51182 = ((inst_51180) || (inst_51181));
var state_51219__$1 = (function (){var statearr_51241 = state_51219;
(statearr_51241[(14)] = inst_51178__$1);

(statearr_51241[(10)] = inst_51179__$1);

return statearr_51241;
})();
if(cljs.core.truth_(inst_51182)){
var statearr_51242_52419 = state_51219__$1;
(statearr_51242_52419[(1)] = (23));

} else {
var statearr_51243_52420 = state_51219__$1;
(statearr_51243_52420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (36))){
var inst_51169 = (state_51219[(12)]);
var inst_51146 = inst_51169;
var state_51219__$1 = (function (){var statearr_51244 = state_51219;
(statearr_51244[(7)] = inst_51146);

return statearr_51244;
})();
var statearr_51245_52421 = state_51219__$1;
(statearr_51245_52421[(2)] = null);

(statearr_51245_52421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (29))){
var inst_51193 = (state_51219[(11)]);
var state_51219__$1 = state_51219;
var statearr_51246_52422 = state_51219__$1;
(statearr_51246_52422[(2)] = inst_51193);

(statearr_51246_52422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (6))){
var state_51219__$1 = state_51219;
var statearr_51247_52423 = state_51219__$1;
(statearr_51247_52423[(2)] = false);

(statearr_51247_52423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (28))){
var inst_51189 = (state_51219[(2)]);
var inst_51190 = calc_state();
var inst_51146 = inst_51190;
var state_51219__$1 = (function (){var statearr_51248 = state_51219;
(statearr_51248[(7)] = inst_51146);

(statearr_51248[(15)] = inst_51189);

return statearr_51248;
})();
var statearr_51249_52427 = state_51219__$1;
(statearr_51249_52427[(2)] = null);

(statearr_51249_52427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (25))){
var inst_51215 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
var statearr_51250_52428 = state_51219__$1;
(statearr_51250_52428[(2)] = inst_51215);

(statearr_51250_52428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (34))){
var inst_51213 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
var statearr_51251_52429 = state_51219__$1;
(statearr_51251_52429[(2)] = inst_51213);

(statearr_51251_52429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (17))){
var state_51219__$1 = state_51219;
var statearr_51252_52430 = state_51219__$1;
(statearr_51252_52430[(2)] = false);

(statearr_51252_52430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (3))){
var state_51219__$1 = state_51219;
var statearr_51253_52431 = state_51219__$1;
(statearr_51253_52431[(2)] = false);

(statearr_51253_52431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (12))){
var inst_51217 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51219__$1,inst_51217);
} else {
if((state_val_51220 === (2))){
var inst_51121 = (state_51219[(8)]);
var inst_51126 = inst_51121.cljs$lang$protocol_mask$partition0$;
var inst_51127 = (inst_51126 & (64));
var inst_51128 = inst_51121.cljs$core$ISeq$;
var inst_51129 = (cljs.core.PROTOCOL_SENTINEL === inst_51128);
var inst_51130 = ((inst_51127) || (inst_51129));
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51130)){
var statearr_51254_52432 = state_51219__$1;
(statearr_51254_52432[(1)] = (5));

} else {
var statearr_51255_52433 = state_51219__$1;
(statearr_51255_52433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (23))){
var inst_51178 = (state_51219[(14)]);
var inst_51184 = (inst_51178 == null);
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51184)){
var statearr_51256_52434 = state_51219__$1;
(statearr_51256_52434[(1)] = (26));

} else {
var statearr_51257_52435 = state_51219__$1;
(statearr_51257_52435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (35))){
var inst_51204 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
if(cljs.core.truth_(inst_51204)){
var statearr_51258_52436 = state_51219__$1;
(statearr_51258_52436[(1)] = (36));

} else {
var statearr_51259_52437 = state_51219__$1;
(statearr_51259_52437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (19))){
var inst_51146 = (state_51219[(7)]);
var inst_51166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51146);
var state_51219__$1 = state_51219;
var statearr_51260_52438 = state_51219__$1;
(statearr_51260_52438[(2)] = inst_51166);

(statearr_51260_52438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (11))){
var inst_51146 = (state_51219[(7)]);
var inst_51150 = (inst_51146 == null);
var inst_51151 = cljs.core.not(inst_51150);
var state_51219__$1 = state_51219;
if(inst_51151){
var statearr_51261_52439 = state_51219__$1;
(statearr_51261_52439[(1)] = (13));

} else {
var statearr_51262_52440 = state_51219__$1;
(statearr_51262_52440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (9))){
var inst_51121 = (state_51219[(8)]);
var state_51219__$1 = state_51219;
var statearr_51263_52441 = state_51219__$1;
(statearr_51263_52441[(2)] = inst_51121);

(statearr_51263_52441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (5))){
var state_51219__$1 = state_51219;
var statearr_51264_52442 = state_51219__$1;
(statearr_51264_52442[(2)] = true);

(statearr_51264_52442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (14))){
var state_51219__$1 = state_51219;
var statearr_51265_52443 = state_51219__$1;
(statearr_51265_52443[(2)] = false);

(statearr_51265_52443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (26))){
var inst_51179 = (state_51219[(10)]);
var inst_51186 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51179);
var state_51219__$1 = state_51219;
var statearr_51266_52444 = state_51219__$1;
(statearr_51266_52444[(2)] = inst_51186);

(statearr_51266_52444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (16))){
var state_51219__$1 = state_51219;
var statearr_51267_52445 = state_51219__$1;
(statearr_51267_52445[(2)] = true);

(statearr_51267_52445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (38))){
var inst_51209 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
var statearr_51268_52446 = state_51219__$1;
(statearr_51268_52446[(2)] = inst_51209);

(statearr_51268_52446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (30))){
var inst_51170 = (state_51219[(9)]);
var inst_51179 = (state_51219[(10)]);
var inst_51171 = (state_51219[(13)]);
var inst_51196 = cljs.core.empty_QMARK_(inst_51170);
var inst_51197 = (inst_51171.cljs$core$IFn$_invoke$arity$1 ? inst_51171.cljs$core$IFn$_invoke$arity$1(inst_51179) : inst_51171.call(null,inst_51179));
var inst_51198 = cljs.core.not(inst_51197);
var inst_51199 = ((inst_51196) && (inst_51198));
var state_51219__$1 = state_51219;
var statearr_51269_52447 = state_51219__$1;
(statearr_51269_52447[(2)] = inst_51199);

(statearr_51269_52447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (10))){
var inst_51121 = (state_51219[(8)]);
var inst_51142 = (state_51219[(2)]);
var inst_51143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51142,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51142,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51142,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51146 = inst_51121;
var state_51219__$1 = (function (){var statearr_51270 = state_51219;
(statearr_51270[(16)] = inst_51144);

(statearr_51270[(17)] = inst_51143);

(statearr_51270[(18)] = inst_51145);

(statearr_51270[(7)] = inst_51146);

return statearr_51270;
})();
var statearr_51271_52448 = state_51219__$1;
(statearr_51271_52448[(2)] = null);

(statearr_51271_52448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (18))){
var inst_51161 = (state_51219[(2)]);
var state_51219__$1 = state_51219;
var statearr_51272_52449 = state_51219__$1;
(statearr_51272_52449[(2)] = inst_51161);

(statearr_51272_52449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (37))){
var state_51219__$1 = state_51219;
var statearr_51273_52450 = state_51219__$1;
(statearr_51273_52450[(2)] = null);

(statearr_51273_52450[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51220 === (8))){
var inst_51121 = (state_51219[(8)]);
var inst_51139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51121);
var state_51219__$1 = state_51219;
var statearr_51274_52458 = state_51219__$1;
(statearr_51274_52458[(2)] = inst_51139);

(statearr_51274_52458[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__50380__auto__ = null;
var cljs$core$async$mix_$_state_machine__50380__auto____0 = (function (){
var statearr_51275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51275[(0)] = cljs$core$async$mix_$_state_machine__50380__auto__);

(statearr_51275[(1)] = (1));

return statearr_51275;
});
var cljs$core$async$mix_$_state_machine__50380__auto____1 = (function (state_51219){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51219);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51276){var ex__50383__auto__ = e51276;
var statearr_51277_52470 = state_51219;
(statearr_51277_52470[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51219[(4)]))){
var statearr_51278_52474 = state_51219;
(statearr_51278_52474[(1)] = cljs.core.first((state_51219[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52475 = state_51219;
state_51219 = G__52475;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50380__auto__ = function(state_51219){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50380__auto____1.call(this,state_51219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50380__auto____0;
cljs$core$async$mix_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50380__auto____1;
return cljs$core$async$mix_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51279 = f__50416__auto__();
(statearr_51279[(6)] = c__50415__auto___52396);

return statearr_51279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52480 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52480(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52481 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52481(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52482 = (function() {
var G__52484 = null;
var G__52484__1 = (function (p){
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
var G__52484__2 = (function (p,v){
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
G__52484 = function(p,v){
switch(arguments.length){
case 1:
return G__52484__1.call(this,p);
case 2:
return G__52484__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52484.cljs$core$IFn$_invoke$arity$1 = G__52484__1;
G__52484.cljs$core$IFn$_invoke$arity$2 = G__52484__2;
return G__52484;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51281 = arguments.length;
switch (G__51281) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52482(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52482(p,v);
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
var G__51284 = arguments.length;
switch (G__51284) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51282_SHARP_){
if(cljs.core.truth_((p1__51282_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51282_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51282_SHARP_.call(null,topic)))){
return p1__51282_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51282_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51285 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51286){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51286 = meta51286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51287,meta51286__$1){
var self__ = this;
var _51287__$1 = this;
return (new cljs.core.async.t_cljs$core$async51285(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51286__$1));
}));

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51287){
var self__ = this;
var _51287__$1 = this;
return self__.meta51286;
}));

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51286","meta51286",111205872,null)], null);
}));

(cljs.core.async.t_cljs$core$async51285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51285");

(cljs.core.async.t_cljs$core$async51285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51285.
 */
cljs.core.async.__GT_t_cljs$core$async51285 = (function cljs$core$async$__GT_t_cljs$core$async51285(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51286){
return (new cljs.core.async.t_cljs$core$async51285(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51286));
});

}

return (new cljs.core.async.t_cljs$core$async51285(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50415__auto___52495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51359){
var state_val_51360 = (state_51359[(1)]);
if((state_val_51360 === (7))){
var inst_51355 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51361_52499 = state_51359__$1;
(statearr_51361_52499[(2)] = inst_51355);

(statearr_51361_52499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (20))){
var state_51359__$1 = state_51359;
var statearr_51362_52500 = state_51359__$1;
(statearr_51362_52500[(2)] = null);

(statearr_51362_52500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (1))){
var state_51359__$1 = state_51359;
var statearr_51363_52501 = state_51359__$1;
(statearr_51363_52501[(2)] = null);

(statearr_51363_52501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (24))){
var inst_51338 = (state_51359[(7)]);
var inst_51347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51338);
var state_51359__$1 = state_51359;
var statearr_51364_52502 = state_51359__$1;
(statearr_51364_52502[(2)] = inst_51347);

(statearr_51364_52502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (4))){
var inst_51290 = (state_51359[(8)]);
var inst_51290__$1 = (state_51359[(2)]);
var inst_51291 = (inst_51290__$1 == null);
var state_51359__$1 = (function (){var statearr_51365 = state_51359;
(statearr_51365[(8)] = inst_51290__$1);

return statearr_51365;
})();
if(cljs.core.truth_(inst_51291)){
var statearr_51366_52506 = state_51359__$1;
(statearr_51366_52506[(1)] = (5));

} else {
var statearr_51367_52507 = state_51359__$1;
(statearr_51367_52507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (15))){
var inst_51332 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51368_52508 = state_51359__$1;
(statearr_51368_52508[(2)] = inst_51332);

(statearr_51368_52508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (21))){
var inst_51352 = (state_51359[(2)]);
var state_51359__$1 = (function (){var statearr_51369 = state_51359;
(statearr_51369[(9)] = inst_51352);

return statearr_51369;
})();
var statearr_51370_52509 = state_51359__$1;
(statearr_51370_52509[(2)] = null);

(statearr_51370_52509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (13))){
var inst_51314 = (state_51359[(10)]);
var inst_51316 = cljs.core.chunked_seq_QMARK_(inst_51314);
var state_51359__$1 = state_51359;
if(inst_51316){
var statearr_51371_52511 = state_51359__$1;
(statearr_51371_52511[(1)] = (16));

} else {
var statearr_51372_52513 = state_51359__$1;
(statearr_51372_52513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (22))){
var inst_51344 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
if(cljs.core.truth_(inst_51344)){
var statearr_51373_52515 = state_51359__$1;
(statearr_51373_52515[(1)] = (23));

} else {
var statearr_51374_52516 = state_51359__$1;
(statearr_51374_52516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (6))){
var inst_51340 = (state_51359[(11)]);
var inst_51338 = (state_51359[(7)]);
var inst_51290 = (state_51359[(8)]);
var inst_51338__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51290) : topic_fn.call(null,inst_51290));
var inst_51339 = cljs.core.deref(mults);
var inst_51340__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51339,inst_51338__$1);
var state_51359__$1 = (function (){var statearr_51375 = state_51359;
(statearr_51375[(11)] = inst_51340__$1);

(statearr_51375[(7)] = inst_51338__$1);

return statearr_51375;
})();
if(cljs.core.truth_(inst_51340__$1)){
var statearr_51376_52517 = state_51359__$1;
(statearr_51376_52517[(1)] = (19));

} else {
var statearr_51377_52518 = state_51359__$1;
(statearr_51377_52518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (25))){
var inst_51349 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51378_52522 = state_51359__$1;
(statearr_51378_52522[(2)] = inst_51349);

(statearr_51378_52522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (17))){
var inst_51314 = (state_51359[(10)]);
var inst_51323 = cljs.core.first(inst_51314);
var inst_51324 = cljs.core.async.muxch_STAR_(inst_51323);
var inst_51325 = cljs.core.async.close_BANG_(inst_51324);
var inst_51326 = cljs.core.next(inst_51314);
var inst_51300 = inst_51326;
var inst_51301 = null;
var inst_51302 = (0);
var inst_51303 = (0);
var state_51359__$1 = (function (){var statearr_51379 = state_51359;
(statearr_51379[(12)] = inst_51303);

(statearr_51379[(13)] = inst_51300);

(statearr_51379[(14)] = inst_51325);

(statearr_51379[(15)] = inst_51301);

(statearr_51379[(16)] = inst_51302);

return statearr_51379;
})();
var statearr_51380_52523 = state_51359__$1;
(statearr_51380_52523[(2)] = null);

(statearr_51380_52523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (3))){
var inst_51357 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51359__$1,inst_51357);
} else {
if((state_val_51360 === (12))){
var inst_51334 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51381_52527 = state_51359__$1;
(statearr_51381_52527[(2)] = inst_51334);

(statearr_51381_52527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (2))){
var state_51359__$1 = state_51359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51359__$1,(4),ch);
} else {
if((state_val_51360 === (23))){
var state_51359__$1 = state_51359;
var statearr_51382_52528 = state_51359__$1;
(statearr_51382_52528[(2)] = null);

(statearr_51382_52528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (19))){
var inst_51340 = (state_51359[(11)]);
var inst_51290 = (state_51359[(8)]);
var inst_51342 = cljs.core.async.muxch_STAR_(inst_51340);
var state_51359__$1 = state_51359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51359__$1,(22),inst_51342,inst_51290);
} else {
if((state_val_51360 === (11))){
var inst_51300 = (state_51359[(13)]);
var inst_51314 = (state_51359[(10)]);
var inst_51314__$1 = cljs.core.seq(inst_51300);
var state_51359__$1 = (function (){var statearr_51383 = state_51359;
(statearr_51383[(10)] = inst_51314__$1);

return statearr_51383;
})();
if(inst_51314__$1){
var statearr_51384_52531 = state_51359__$1;
(statearr_51384_52531[(1)] = (13));

} else {
var statearr_51385_52533 = state_51359__$1;
(statearr_51385_52533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (9))){
var inst_51336 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51386_52534 = state_51359__$1;
(statearr_51386_52534[(2)] = inst_51336);

(statearr_51386_52534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (5))){
var inst_51297 = cljs.core.deref(mults);
var inst_51298 = cljs.core.vals(inst_51297);
var inst_51299 = cljs.core.seq(inst_51298);
var inst_51300 = inst_51299;
var inst_51301 = null;
var inst_51302 = (0);
var inst_51303 = (0);
var state_51359__$1 = (function (){var statearr_51387 = state_51359;
(statearr_51387[(12)] = inst_51303);

(statearr_51387[(13)] = inst_51300);

(statearr_51387[(15)] = inst_51301);

(statearr_51387[(16)] = inst_51302);

return statearr_51387;
})();
var statearr_51388_52535 = state_51359__$1;
(statearr_51388_52535[(2)] = null);

(statearr_51388_52535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (14))){
var state_51359__$1 = state_51359;
var statearr_51392_52538 = state_51359__$1;
(statearr_51392_52538[(2)] = null);

(statearr_51392_52538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (16))){
var inst_51314 = (state_51359[(10)]);
var inst_51318 = cljs.core.chunk_first(inst_51314);
var inst_51319 = cljs.core.chunk_rest(inst_51314);
var inst_51320 = cljs.core.count(inst_51318);
var inst_51300 = inst_51319;
var inst_51301 = inst_51318;
var inst_51302 = inst_51320;
var inst_51303 = (0);
var state_51359__$1 = (function (){var statearr_51393 = state_51359;
(statearr_51393[(12)] = inst_51303);

(statearr_51393[(13)] = inst_51300);

(statearr_51393[(15)] = inst_51301);

(statearr_51393[(16)] = inst_51302);

return statearr_51393;
})();
var statearr_51394_52540 = state_51359__$1;
(statearr_51394_52540[(2)] = null);

(statearr_51394_52540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (10))){
var inst_51303 = (state_51359[(12)]);
var inst_51300 = (state_51359[(13)]);
var inst_51301 = (state_51359[(15)]);
var inst_51302 = (state_51359[(16)]);
var inst_51308 = cljs.core._nth(inst_51301,inst_51303);
var inst_51309 = cljs.core.async.muxch_STAR_(inst_51308);
var inst_51310 = cljs.core.async.close_BANG_(inst_51309);
var inst_51311 = (inst_51303 + (1));
var tmp51389 = inst_51300;
var tmp51390 = inst_51301;
var tmp51391 = inst_51302;
var inst_51300__$1 = tmp51389;
var inst_51301__$1 = tmp51390;
var inst_51302__$1 = tmp51391;
var inst_51303__$1 = inst_51311;
var state_51359__$1 = (function (){var statearr_51395 = state_51359;
(statearr_51395[(12)] = inst_51303__$1);

(statearr_51395[(17)] = inst_51310);

(statearr_51395[(13)] = inst_51300__$1);

(statearr_51395[(15)] = inst_51301__$1);

(statearr_51395[(16)] = inst_51302__$1);

return statearr_51395;
})();
var statearr_51396_52541 = state_51359__$1;
(statearr_51396_52541[(2)] = null);

(statearr_51396_52541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (18))){
var inst_51329 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51397_52542 = state_51359__$1;
(statearr_51397_52542[(2)] = inst_51329);

(statearr_51397_52542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (8))){
var inst_51303 = (state_51359[(12)]);
var inst_51302 = (state_51359[(16)]);
var inst_51305 = (inst_51303 < inst_51302);
var inst_51306 = inst_51305;
var state_51359__$1 = state_51359;
if(cljs.core.truth_(inst_51306)){
var statearr_51398_52543 = state_51359__$1;
(statearr_51398_52543[(1)] = (10));

} else {
var statearr_51399_52544 = state_51359__$1;
(statearr_51399_52544[(1)] = (11));

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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51400[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51400[(1)] = (1));

return statearr_51400;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51359){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51359);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51401){var ex__50383__auto__ = e51401;
var statearr_51402_52545 = state_51359;
(statearr_51402_52545[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51359[(4)]))){
var statearr_51403_52546 = state_51359;
(statearr_51403_52546[(1)] = cljs.core.first((state_51359[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52547 = state_51359;
state_51359 = G__52547;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51404 = f__50416__auto__();
(statearr_51404[(6)] = c__50415__auto___52495);

return statearr_51404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var G__51406 = arguments.length;
switch (G__51406) {
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
var G__51408 = arguments.length;
switch (G__51408) {
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
var G__51410 = arguments.length;
switch (G__51410) {
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
var c__50415__auto___52551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51453){
var state_val_51454 = (state_51453[(1)]);
if((state_val_51454 === (7))){
var state_51453__$1 = state_51453;
var statearr_51455_52552 = state_51453__$1;
(statearr_51455_52552[(2)] = null);

(statearr_51455_52552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (1))){
var state_51453__$1 = state_51453;
var statearr_51456_52553 = state_51453__$1;
(statearr_51456_52553[(2)] = null);

(statearr_51456_52553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (4))){
var inst_51413 = (state_51453[(7)]);
var inst_51414 = (state_51453[(8)]);
var inst_51416 = (inst_51414 < inst_51413);
var state_51453__$1 = state_51453;
if(cljs.core.truth_(inst_51416)){
var statearr_51457_52554 = state_51453__$1;
(statearr_51457_52554[(1)] = (6));

} else {
var statearr_51458_52555 = state_51453__$1;
(statearr_51458_52555[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (15))){
var inst_51439 = (state_51453[(9)]);
var inst_51444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51439);
var state_51453__$1 = state_51453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51453__$1,(17),out,inst_51444);
} else {
if((state_val_51454 === (13))){
var inst_51439 = (state_51453[(9)]);
var inst_51439__$1 = (state_51453[(2)]);
var inst_51440 = cljs.core.some(cljs.core.nil_QMARK_,inst_51439__$1);
var state_51453__$1 = (function (){var statearr_51459 = state_51453;
(statearr_51459[(9)] = inst_51439__$1);

return statearr_51459;
})();
if(cljs.core.truth_(inst_51440)){
var statearr_51460_52556 = state_51453__$1;
(statearr_51460_52556[(1)] = (14));

} else {
var statearr_51461_52557 = state_51453__$1;
(statearr_51461_52557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (6))){
var state_51453__$1 = state_51453;
var statearr_51462_52558 = state_51453__$1;
(statearr_51462_52558[(2)] = null);

(statearr_51462_52558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (17))){
var inst_51446 = (state_51453[(2)]);
var state_51453__$1 = (function (){var statearr_51464 = state_51453;
(statearr_51464[(10)] = inst_51446);

return statearr_51464;
})();
var statearr_51465_52559 = state_51453__$1;
(statearr_51465_52559[(2)] = null);

(statearr_51465_52559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (3))){
var inst_51451 = (state_51453[(2)]);
var state_51453__$1 = state_51453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51453__$1,inst_51451);
} else {
if((state_val_51454 === (12))){
var _ = (function (){var statearr_51466 = state_51453;
(statearr_51466[(4)] = cljs.core.rest((state_51453[(4)])));

return statearr_51466;
})();
var state_51453__$1 = state_51453;
var ex51463 = (state_51453__$1[(2)]);
var statearr_51467_52560 = state_51453__$1;
(statearr_51467_52560[(5)] = ex51463);


if((ex51463 instanceof Object)){
var statearr_51468_52561 = state_51453__$1;
(statearr_51468_52561[(1)] = (11));

(statearr_51468_52561[(5)] = null);

} else {
throw ex51463;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (2))){
var inst_51412 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51413 = cnt;
var inst_51414 = (0);
var state_51453__$1 = (function (){var statearr_51469 = state_51453;
(statearr_51469[(11)] = inst_51412);

(statearr_51469[(7)] = inst_51413);

(statearr_51469[(8)] = inst_51414);

return statearr_51469;
})();
var statearr_51470_52562 = state_51453__$1;
(statearr_51470_52562[(2)] = null);

(statearr_51470_52562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (11))){
var inst_51418 = (state_51453[(2)]);
var inst_51419 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51453__$1 = (function (){var statearr_51471 = state_51453;
(statearr_51471[(12)] = inst_51418);

return statearr_51471;
})();
var statearr_51472_52563 = state_51453__$1;
(statearr_51472_52563[(2)] = inst_51419);

(statearr_51472_52563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (9))){
var inst_51414 = (state_51453[(8)]);
var _ = (function (){var statearr_51473 = state_51453;
(statearr_51473[(4)] = cljs.core.cons((12),(state_51453[(4)])));

return statearr_51473;
})();
var inst_51425 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51414) : chs__$1.call(null,inst_51414));
var inst_51426 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51414) : done.call(null,inst_51414));
var inst_51427 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51425,inst_51426);
var ___$1 = (function (){var statearr_51474 = state_51453;
(statearr_51474[(4)] = cljs.core.rest((state_51453[(4)])));

return statearr_51474;
})();
var state_51453__$1 = state_51453;
var statearr_51475_52564 = state_51453__$1;
(statearr_51475_52564[(2)] = inst_51427);

(statearr_51475_52564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (5))){
var inst_51437 = (state_51453[(2)]);
var state_51453__$1 = (function (){var statearr_51476 = state_51453;
(statearr_51476[(13)] = inst_51437);

return statearr_51476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51453__$1,(13),dchan);
} else {
if((state_val_51454 === (14))){
var inst_51442 = cljs.core.async.close_BANG_(out);
var state_51453__$1 = state_51453;
var statearr_51477_52565 = state_51453__$1;
(statearr_51477_52565[(2)] = inst_51442);

(statearr_51477_52565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (16))){
var inst_51449 = (state_51453[(2)]);
var state_51453__$1 = state_51453;
var statearr_51478_52566 = state_51453__$1;
(statearr_51478_52566[(2)] = inst_51449);

(statearr_51478_52566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (10))){
var inst_51414 = (state_51453[(8)]);
var inst_51430 = (state_51453[(2)]);
var inst_51431 = (inst_51414 + (1));
var inst_51414__$1 = inst_51431;
var state_51453__$1 = (function (){var statearr_51479 = state_51453;
(statearr_51479[(14)] = inst_51430);

(statearr_51479[(8)] = inst_51414__$1);

return statearr_51479;
})();
var statearr_51480_52567 = state_51453__$1;
(statearr_51480_52567[(2)] = null);

(statearr_51480_52567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51454 === (8))){
var inst_51435 = (state_51453[(2)]);
var state_51453__$1 = state_51453;
var statearr_51481_52568 = state_51453__$1;
(statearr_51481_52568[(2)] = inst_51435);

(statearr_51481_52568[(1)] = (5));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51482[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51482[(1)] = (1));

return statearr_51482;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51453){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51453);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51483){var ex__50383__auto__ = e51483;
var statearr_51484_52569 = state_51453;
(statearr_51484_52569[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51453[(4)]))){
var statearr_51485_52570 = state_51453;
(statearr_51485_52570[(1)] = cljs.core.first((state_51453[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52571 = state_51453;
state_51453 = G__52571;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51486 = f__50416__auto__();
(statearr_51486[(6)] = c__50415__auto___52551);

return statearr_51486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var G__51489 = arguments.length;
switch (G__51489) {
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
var c__50415__auto___52573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51521){
var state_val_51522 = (state_51521[(1)]);
if((state_val_51522 === (7))){
var inst_51500 = (state_51521[(7)]);
var inst_51501 = (state_51521[(8)]);
var inst_51500__$1 = (state_51521[(2)]);
var inst_51501__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51500__$1,(0),null);
var inst_51502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51500__$1,(1),null);
var inst_51503 = (inst_51501__$1 == null);
var state_51521__$1 = (function (){var statearr_51523 = state_51521;
(statearr_51523[(7)] = inst_51500__$1);

(statearr_51523[(9)] = inst_51502);

(statearr_51523[(8)] = inst_51501__$1);

return statearr_51523;
})();
if(cljs.core.truth_(inst_51503)){
var statearr_51524_52574 = state_51521__$1;
(statearr_51524_52574[(1)] = (8));

} else {
var statearr_51525_52575 = state_51521__$1;
(statearr_51525_52575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (1))){
var inst_51490 = cljs.core.vec(chs);
var inst_51491 = inst_51490;
var state_51521__$1 = (function (){var statearr_51526 = state_51521;
(statearr_51526[(10)] = inst_51491);

return statearr_51526;
})();
var statearr_51527_52576 = state_51521__$1;
(statearr_51527_52576[(2)] = null);

(statearr_51527_52576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (4))){
var inst_51491 = (state_51521[(10)]);
var state_51521__$1 = state_51521;
return cljs.core.async.ioc_alts_BANG_(state_51521__$1,(7),inst_51491);
} else {
if((state_val_51522 === (6))){
var inst_51517 = (state_51521[(2)]);
var state_51521__$1 = state_51521;
var statearr_51528_52577 = state_51521__$1;
(statearr_51528_52577[(2)] = inst_51517);

(statearr_51528_52577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (3))){
var inst_51519 = (state_51521[(2)]);
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51521__$1,inst_51519);
} else {
if((state_val_51522 === (2))){
var inst_51491 = (state_51521[(10)]);
var inst_51493 = cljs.core.count(inst_51491);
var inst_51494 = (inst_51493 > (0));
var state_51521__$1 = state_51521;
if(cljs.core.truth_(inst_51494)){
var statearr_51530_52578 = state_51521__$1;
(statearr_51530_52578[(1)] = (4));

} else {
var statearr_51531_52579 = state_51521__$1;
(statearr_51531_52579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (11))){
var inst_51491 = (state_51521[(10)]);
var inst_51510 = (state_51521[(2)]);
var tmp51529 = inst_51491;
var inst_51491__$1 = tmp51529;
var state_51521__$1 = (function (){var statearr_51532 = state_51521;
(statearr_51532[(11)] = inst_51510);

(statearr_51532[(10)] = inst_51491__$1);

return statearr_51532;
})();
var statearr_51533_52580 = state_51521__$1;
(statearr_51533_52580[(2)] = null);

(statearr_51533_52580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (9))){
var inst_51501 = (state_51521[(8)]);
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51521__$1,(11),out,inst_51501);
} else {
if((state_val_51522 === (5))){
var inst_51515 = cljs.core.async.close_BANG_(out);
var state_51521__$1 = state_51521;
var statearr_51534_52581 = state_51521__$1;
(statearr_51534_52581[(2)] = inst_51515);

(statearr_51534_52581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (10))){
var inst_51513 = (state_51521[(2)]);
var state_51521__$1 = state_51521;
var statearr_51535_52582 = state_51521__$1;
(statearr_51535_52582[(2)] = inst_51513);

(statearr_51535_52582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (8))){
var inst_51500 = (state_51521[(7)]);
var inst_51502 = (state_51521[(9)]);
var inst_51491 = (state_51521[(10)]);
var inst_51501 = (state_51521[(8)]);
var inst_51505 = (function (){var cs = inst_51491;
var vec__51496 = inst_51500;
var v = inst_51501;
var c = inst_51502;
return (function (p1__51487_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51487_SHARP_);
});
})();
var inst_51506 = cljs.core.filterv(inst_51505,inst_51491);
var inst_51491__$1 = inst_51506;
var state_51521__$1 = (function (){var statearr_51536 = state_51521;
(statearr_51536[(10)] = inst_51491__$1);

return statearr_51536;
})();
var statearr_51537_52583 = state_51521__$1;
(statearr_51537_52583[(2)] = null);

(statearr_51537_52583[(1)] = (2));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51538 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51538[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51538[(1)] = (1));

return statearr_51538;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51521){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51521);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51539){var ex__50383__auto__ = e51539;
var statearr_51540_52584 = state_51521;
(statearr_51540_52584[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51521[(4)]))){
var statearr_51541_52585 = state_51521;
(statearr_51541_52585[(1)] = cljs.core.first((state_51521[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52586 = state_51521;
state_51521 = G__52586;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51542 = f__50416__auto__();
(statearr_51542[(6)] = c__50415__auto___52573);

return statearr_51542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
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
var G__51544 = arguments.length;
switch (G__51544) {
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
var c__50415__auto___52588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51568){
var state_val_51569 = (state_51568[(1)]);
if((state_val_51569 === (7))){
var inst_51550 = (state_51568[(7)]);
var inst_51550__$1 = (state_51568[(2)]);
var inst_51551 = (inst_51550__$1 == null);
var inst_51552 = cljs.core.not(inst_51551);
var state_51568__$1 = (function (){var statearr_51570 = state_51568;
(statearr_51570[(7)] = inst_51550__$1);

return statearr_51570;
})();
if(inst_51552){
var statearr_51571_52589 = state_51568__$1;
(statearr_51571_52589[(1)] = (8));

} else {
var statearr_51572_52590 = state_51568__$1;
(statearr_51572_52590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (1))){
var inst_51545 = (0);
var state_51568__$1 = (function (){var statearr_51573 = state_51568;
(statearr_51573[(8)] = inst_51545);

return statearr_51573;
})();
var statearr_51574_52591 = state_51568__$1;
(statearr_51574_52591[(2)] = null);

(statearr_51574_52591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (4))){
var state_51568__$1 = state_51568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51568__$1,(7),ch);
} else {
if((state_val_51569 === (6))){
var inst_51563 = (state_51568[(2)]);
var state_51568__$1 = state_51568;
var statearr_51575_52592 = state_51568__$1;
(statearr_51575_52592[(2)] = inst_51563);

(statearr_51575_52592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (3))){
var inst_51565 = (state_51568[(2)]);
var inst_51566 = cljs.core.async.close_BANG_(out);
var state_51568__$1 = (function (){var statearr_51576 = state_51568;
(statearr_51576[(9)] = inst_51565);

return statearr_51576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51568__$1,inst_51566);
} else {
if((state_val_51569 === (2))){
var inst_51545 = (state_51568[(8)]);
var inst_51547 = (inst_51545 < n);
var state_51568__$1 = state_51568;
if(cljs.core.truth_(inst_51547)){
var statearr_51577_52593 = state_51568__$1;
(statearr_51577_52593[(1)] = (4));

} else {
var statearr_51578_52594 = state_51568__$1;
(statearr_51578_52594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (11))){
var inst_51545 = (state_51568[(8)]);
var inst_51555 = (state_51568[(2)]);
var inst_51556 = (inst_51545 + (1));
var inst_51545__$1 = inst_51556;
var state_51568__$1 = (function (){var statearr_51579 = state_51568;
(statearr_51579[(10)] = inst_51555);

(statearr_51579[(8)] = inst_51545__$1);

return statearr_51579;
})();
var statearr_51580_52595 = state_51568__$1;
(statearr_51580_52595[(2)] = null);

(statearr_51580_52595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (9))){
var state_51568__$1 = state_51568;
var statearr_51581_52596 = state_51568__$1;
(statearr_51581_52596[(2)] = null);

(statearr_51581_52596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (5))){
var state_51568__$1 = state_51568;
var statearr_51582_52597 = state_51568__$1;
(statearr_51582_52597[(2)] = null);

(statearr_51582_52597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (10))){
var inst_51560 = (state_51568[(2)]);
var state_51568__$1 = state_51568;
var statearr_51583_52598 = state_51568__$1;
(statearr_51583_52598[(2)] = inst_51560);

(statearr_51583_52598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51569 === (8))){
var inst_51550 = (state_51568[(7)]);
var state_51568__$1 = state_51568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51568__$1,(11),out,inst_51550);
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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51584[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51584[(1)] = (1));

return statearr_51584;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51568){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51568);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51585){var ex__50383__auto__ = e51585;
var statearr_51586_52599 = state_51568;
(statearr_51586_52599[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51568[(4)]))){
var statearr_51587_52600 = state_51568;
(statearr_51587_52600[(1)] = cljs.core.first((state_51568[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52601 = state_51568;
state_51568 = G__52601;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51588 = f__50416__auto__();
(statearr_51588[(6)] = c__50415__auto___52588);

return statearr_51588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51590 = (function (f,ch,meta51591){
this.f = f;
this.ch = ch;
this.meta51591 = meta51591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51592,meta51591__$1){
var self__ = this;
var _51592__$1 = this;
return (new cljs.core.async.t_cljs$core$async51590(self__.f,self__.ch,meta51591__$1));
}));

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51592){
var self__ = this;
var _51592__$1 = this;
return self__.meta51591;
}));

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51593 = (function (f,ch,meta51591,_,fn1,meta51594){
this.f = f;
this.ch = ch;
this.meta51591 = meta51591;
this._ = _;
this.fn1 = fn1;
this.meta51594 = meta51594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51595,meta51594__$1){
var self__ = this;
var _51595__$1 = this;
return (new cljs.core.async.t_cljs$core$async51593(self__.f,self__.ch,self__.meta51591,self__._,self__.fn1,meta51594__$1));
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51595){
var self__ = this;
var _51595__$1 = this;
return self__.meta51594;
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51589_SHARP_){
var G__51596 = (((p1__51589_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51589_SHARP_) : self__.f.call(null,p1__51589_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51596) : f1.call(null,G__51596));
});
}));

(cljs.core.async.t_cljs$core$async51593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51591","meta51591",-276546526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51590","cljs.core.async/t_cljs$core$async51590",197084969,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51594","meta51594",1388972713,null)], null);
}));

(cljs.core.async.t_cljs$core$async51593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51593");

(cljs.core.async.t_cljs$core$async51593.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51593.
 */
cljs.core.async.__GT_t_cljs$core$async51593 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51593(f__$1,ch__$1,meta51591__$1,___$2,fn1__$1,meta51594){
return (new cljs.core.async.t_cljs$core$async51593(f__$1,ch__$1,meta51591__$1,___$2,fn1__$1,meta51594));
});

}

return (new cljs.core.async.t_cljs$core$async51593(self__.f,self__.ch,self__.meta51591,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51597 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51597) : self__.f.call(null,G__51597));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51591","meta51591",-276546526,null)], null);
}));

(cljs.core.async.t_cljs$core$async51590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51590");

(cljs.core.async.t_cljs$core$async51590.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51590.
 */
cljs.core.async.__GT_t_cljs$core$async51590 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51590(f__$1,ch__$1,meta51591){
return (new cljs.core.async.t_cljs$core$async51590(f__$1,ch__$1,meta51591));
});

}

return (new cljs.core.async.t_cljs$core$async51590(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51598 = (function (f,ch,meta51599){
this.f = f;
this.ch = ch;
this.meta51599 = meta51599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51600,meta51599__$1){
var self__ = this;
var _51600__$1 = this;
return (new cljs.core.async.t_cljs$core$async51598(self__.f,self__.ch,meta51599__$1));
}));

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51600){
var self__ = this;
var _51600__$1 = this;
return self__.meta51599;
}));

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51599","meta51599",1405740860,null)], null);
}));

(cljs.core.async.t_cljs$core$async51598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51598");

(cljs.core.async.t_cljs$core$async51598.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51598.
 */
cljs.core.async.__GT_t_cljs$core$async51598 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51598(f__$1,ch__$1,meta51599){
return (new cljs.core.async.t_cljs$core$async51598(f__$1,ch__$1,meta51599));
});

}

return (new cljs.core.async.t_cljs$core$async51598(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async51601 = (function (p,ch,meta51602){
this.p = p;
this.ch = ch;
this.meta51602 = meta51602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51603,meta51602__$1){
var self__ = this;
var _51603__$1 = this;
return (new cljs.core.async.t_cljs$core$async51601(self__.p,self__.ch,meta51602__$1));
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

(cljs.core.async.t_cljs$core$async51601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
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
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51602","meta51602",-1604398313,null)], null);
}));

(cljs.core.async.t_cljs$core$async51601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51601");

(cljs.core.async.t_cljs$core$async51601.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51601.
 */
cljs.core.async.__GT_t_cljs$core$async51601 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51601(p__$1,ch__$1,meta51602){
return (new cljs.core.async.t_cljs$core$async51601(p__$1,ch__$1,meta51602));
});

}

return (new cljs.core.async.t_cljs$core$async51601(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51605 = arguments.length;
switch (G__51605) {
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
var c__50415__auto___52603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51626){
var state_val_51627 = (state_51626[(1)]);
if((state_val_51627 === (7))){
var inst_51622 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
var statearr_51628_52604 = state_51626__$1;
(statearr_51628_52604[(2)] = inst_51622);

(statearr_51628_52604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (1))){
var state_51626__$1 = state_51626;
var statearr_51629_52605 = state_51626__$1;
(statearr_51629_52605[(2)] = null);

(statearr_51629_52605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (4))){
var inst_51608 = (state_51626[(7)]);
var inst_51608__$1 = (state_51626[(2)]);
var inst_51609 = (inst_51608__$1 == null);
var state_51626__$1 = (function (){var statearr_51630 = state_51626;
(statearr_51630[(7)] = inst_51608__$1);

return statearr_51630;
})();
if(cljs.core.truth_(inst_51609)){
var statearr_51631_52606 = state_51626__$1;
(statearr_51631_52606[(1)] = (5));

} else {
var statearr_51632_52607 = state_51626__$1;
(statearr_51632_52607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (6))){
var inst_51608 = (state_51626[(7)]);
var inst_51613 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51608) : p.call(null,inst_51608));
var state_51626__$1 = state_51626;
if(cljs.core.truth_(inst_51613)){
var statearr_51633_52608 = state_51626__$1;
(statearr_51633_52608[(1)] = (8));

} else {
var statearr_51634_52613 = state_51626__$1;
(statearr_51634_52613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (3))){
var inst_51624 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51626__$1,inst_51624);
} else {
if((state_val_51627 === (2))){
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51626__$1,(4),ch);
} else {
if((state_val_51627 === (11))){
var inst_51616 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
var statearr_51635_52614 = state_51626__$1;
(statearr_51635_52614[(2)] = inst_51616);

(statearr_51635_52614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (9))){
var state_51626__$1 = state_51626;
var statearr_51636_52615 = state_51626__$1;
(statearr_51636_52615[(2)] = null);

(statearr_51636_52615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (5))){
var inst_51611 = cljs.core.async.close_BANG_(out);
var state_51626__$1 = state_51626;
var statearr_51637_52619 = state_51626__$1;
(statearr_51637_52619[(2)] = inst_51611);

(statearr_51637_52619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (10))){
var inst_51619 = (state_51626[(2)]);
var state_51626__$1 = (function (){var statearr_51638 = state_51626;
(statearr_51638[(8)] = inst_51619);

return statearr_51638;
})();
var statearr_51639_52620 = state_51626__$1;
(statearr_51639_52620[(2)] = null);

(statearr_51639_52620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (8))){
var inst_51608 = (state_51626[(7)]);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51626__$1,(11),out,inst_51608);
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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51640 = [null,null,null,null,null,null,null,null,null];
(statearr_51640[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51640[(1)] = (1));

return statearr_51640;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51626){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51626);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51641){var ex__50383__auto__ = e51641;
var statearr_51642_52621 = state_51626;
(statearr_51642_52621[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51626[(4)]))){
var statearr_51643_52622 = state_51626;
(statearr_51643_52622[(1)] = cljs.core.first((state_51626[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52623 = state_51626;
state_51626 = G__52623;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51644 = f__50416__auto__();
(statearr_51644[(6)] = c__50415__auto___52603);

return statearr_51644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51646 = arguments.length;
switch (G__51646) {
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
var c__50415__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51708){
var state_val_51709 = (state_51708[(1)]);
if((state_val_51709 === (7))){
var inst_51704 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51710_52625 = state_51708__$1;
(statearr_51710_52625[(2)] = inst_51704);

(statearr_51710_52625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (20))){
var inst_51674 = (state_51708[(7)]);
var inst_51685 = (state_51708[(2)]);
var inst_51686 = cljs.core.next(inst_51674);
var inst_51660 = inst_51686;
var inst_51661 = null;
var inst_51662 = (0);
var inst_51663 = (0);
var state_51708__$1 = (function (){var statearr_51711 = state_51708;
(statearr_51711[(8)] = inst_51663);

(statearr_51711[(9)] = inst_51660);

(statearr_51711[(10)] = inst_51685);

(statearr_51711[(11)] = inst_51661);

(statearr_51711[(12)] = inst_51662);

return statearr_51711;
})();
var statearr_51712_52626 = state_51708__$1;
(statearr_51712_52626[(2)] = null);

(statearr_51712_52626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (1))){
var state_51708__$1 = state_51708;
var statearr_51713_52627 = state_51708__$1;
(statearr_51713_52627[(2)] = null);

(statearr_51713_52627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (4))){
var inst_51649 = (state_51708[(13)]);
var inst_51649__$1 = (state_51708[(2)]);
var inst_51650 = (inst_51649__$1 == null);
var state_51708__$1 = (function (){var statearr_51714 = state_51708;
(statearr_51714[(13)] = inst_51649__$1);

return statearr_51714;
})();
if(cljs.core.truth_(inst_51650)){
var statearr_51715_52628 = state_51708__$1;
(statearr_51715_52628[(1)] = (5));

} else {
var statearr_51716_52629 = state_51708__$1;
(statearr_51716_52629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (15))){
var state_51708__$1 = state_51708;
var statearr_51720_52630 = state_51708__$1;
(statearr_51720_52630[(2)] = null);

(statearr_51720_52630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (21))){
var state_51708__$1 = state_51708;
var statearr_51721_52631 = state_51708__$1;
(statearr_51721_52631[(2)] = null);

(statearr_51721_52631[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (13))){
var inst_51663 = (state_51708[(8)]);
var inst_51660 = (state_51708[(9)]);
var inst_51661 = (state_51708[(11)]);
var inst_51662 = (state_51708[(12)]);
var inst_51670 = (state_51708[(2)]);
var inst_51671 = (inst_51663 + (1));
var tmp51717 = inst_51660;
var tmp51718 = inst_51661;
var tmp51719 = inst_51662;
var inst_51660__$1 = tmp51717;
var inst_51661__$1 = tmp51718;
var inst_51662__$1 = tmp51719;
var inst_51663__$1 = inst_51671;
var state_51708__$1 = (function (){var statearr_51722 = state_51708;
(statearr_51722[(14)] = inst_51670);

(statearr_51722[(8)] = inst_51663__$1);

(statearr_51722[(9)] = inst_51660__$1);

(statearr_51722[(11)] = inst_51661__$1);

(statearr_51722[(12)] = inst_51662__$1);

return statearr_51722;
})();
var statearr_51723_52632 = state_51708__$1;
(statearr_51723_52632[(2)] = null);

(statearr_51723_52632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (22))){
var state_51708__$1 = state_51708;
var statearr_51724_52633 = state_51708__$1;
(statearr_51724_52633[(2)] = null);

(statearr_51724_52633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (6))){
var inst_51649 = (state_51708[(13)]);
var inst_51658 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51649) : f.call(null,inst_51649));
var inst_51659 = cljs.core.seq(inst_51658);
var inst_51660 = inst_51659;
var inst_51661 = null;
var inst_51662 = (0);
var inst_51663 = (0);
var state_51708__$1 = (function (){var statearr_51725 = state_51708;
(statearr_51725[(8)] = inst_51663);

(statearr_51725[(9)] = inst_51660);

(statearr_51725[(11)] = inst_51661);

(statearr_51725[(12)] = inst_51662);

return statearr_51725;
})();
var statearr_51726_52634 = state_51708__$1;
(statearr_51726_52634[(2)] = null);

(statearr_51726_52634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (17))){
var inst_51674 = (state_51708[(7)]);
var inst_51678 = cljs.core.chunk_first(inst_51674);
var inst_51679 = cljs.core.chunk_rest(inst_51674);
var inst_51680 = cljs.core.count(inst_51678);
var inst_51660 = inst_51679;
var inst_51661 = inst_51678;
var inst_51662 = inst_51680;
var inst_51663 = (0);
var state_51708__$1 = (function (){var statearr_51727 = state_51708;
(statearr_51727[(8)] = inst_51663);

(statearr_51727[(9)] = inst_51660);

(statearr_51727[(11)] = inst_51661);

(statearr_51727[(12)] = inst_51662);

return statearr_51727;
})();
var statearr_51728_52635 = state_51708__$1;
(statearr_51728_52635[(2)] = null);

(statearr_51728_52635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (3))){
var inst_51706 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51708__$1,inst_51706);
} else {
if((state_val_51709 === (12))){
var inst_51694 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51729_52636 = state_51708__$1;
(statearr_51729_52636[(2)] = inst_51694);

(statearr_51729_52636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (2))){
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(4),in$);
} else {
if((state_val_51709 === (23))){
var inst_51702 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51730_52637 = state_51708__$1;
(statearr_51730_52637[(2)] = inst_51702);

(statearr_51730_52637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (19))){
var inst_51689 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51731_52638 = state_51708__$1;
(statearr_51731_52638[(2)] = inst_51689);

(statearr_51731_52638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (11))){
var inst_51674 = (state_51708[(7)]);
var inst_51660 = (state_51708[(9)]);
var inst_51674__$1 = cljs.core.seq(inst_51660);
var state_51708__$1 = (function (){var statearr_51732 = state_51708;
(statearr_51732[(7)] = inst_51674__$1);

return statearr_51732;
})();
if(inst_51674__$1){
var statearr_51733_52639 = state_51708__$1;
(statearr_51733_52639[(1)] = (14));

} else {
var statearr_51734_52640 = state_51708__$1;
(statearr_51734_52640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (9))){
var inst_51696 = (state_51708[(2)]);
var inst_51697 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51708__$1 = (function (){var statearr_51735 = state_51708;
(statearr_51735[(15)] = inst_51696);

return statearr_51735;
})();
if(cljs.core.truth_(inst_51697)){
var statearr_51736_52641 = state_51708__$1;
(statearr_51736_52641[(1)] = (21));

} else {
var statearr_51737_52642 = state_51708__$1;
(statearr_51737_52642[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (5))){
var inst_51652 = cljs.core.async.close_BANG_(out);
var state_51708__$1 = state_51708;
var statearr_51738_52643 = state_51708__$1;
(statearr_51738_52643[(2)] = inst_51652);

(statearr_51738_52643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (14))){
var inst_51674 = (state_51708[(7)]);
var inst_51676 = cljs.core.chunked_seq_QMARK_(inst_51674);
var state_51708__$1 = state_51708;
if(inst_51676){
var statearr_51739_52644 = state_51708__$1;
(statearr_51739_52644[(1)] = (17));

} else {
var statearr_51740_52645 = state_51708__$1;
(statearr_51740_52645[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (16))){
var inst_51692 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51741_52646 = state_51708__$1;
(statearr_51741_52646[(2)] = inst_51692);

(statearr_51741_52646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51709 === (10))){
var inst_51663 = (state_51708[(8)]);
var inst_51661 = (state_51708[(11)]);
var inst_51668 = cljs.core._nth(inst_51661,inst_51663);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51708__$1,(13),out,inst_51668);
} else {
if((state_val_51709 === (18))){
var inst_51674 = (state_51708[(7)]);
var inst_51683 = cljs.core.first(inst_51674);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51708__$1,(20),out,inst_51683);
} else {
if((state_val_51709 === (8))){
var inst_51663 = (state_51708[(8)]);
var inst_51662 = (state_51708[(12)]);
var inst_51665 = (inst_51663 < inst_51662);
var inst_51666 = inst_51665;
var state_51708__$1 = state_51708;
if(cljs.core.truth_(inst_51666)){
var statearr_51742_52647 = state_51708__$1;
(statearr_51742_52647[(1)] = (10));

} else {
var statearr_51743_52648 = state_51708__$1;
(statearr_51743_52648[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____0 = (function (){
var statearr_51744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__);

(statearr_51744[(1)] = (1));

return statearr_51744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____1 = (function (state_51708){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51708);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51745){var ex__50383__auto__ = e51745;
var statearr_51746_52649 = state_51708;
(statearr_51746_52649[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51708[(4)]))){
var statearr_51747_52650 = state_51708;
(statearr_51747_52650[(1)] = cljs.core.first((state_51708[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52651 = state_51708;
state_51708 = G__52651;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__ = function(state_51708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____1.call(this,state_51708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50380__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51748 = f__50416__auto__();
(statearr_51748[(6)] = c__50415__auto__);

return statearr_51748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

return c__50415__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51750 = arguments.length;
switch (G__51750) {
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
var G__51752 = arguments.length;
switch (G__51752) {
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
var G__51754 = arguments.length;
switch (G__51754) {
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
var c__50415__auto___52655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51778){
var state_val_51779 = (state_51778[(1)]);
if((state_val_51779 === (7))){
var inst_51773 = (state_51778[(2)]);
var state_51778__$1 = state_51778;
var statearr_51780_52656 = state_51778__$1;
(statearr_51780_52656[(2)] = inst_51773);

(statearr_51780_52656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (1))){
var inst_51755 = null;
var state_51778__$1 = (function (){var statearr_51781 = state_51778;
(statearr_51781[(7)] = inst_51755);

return statearr_51781;
})();
var statearr_51782_52657 = state_51778__$1;
(statearr_51782_52657[(2)] = null);

(statearr_51782_52657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (4))){
var inst_51758 = (state_51778[(8)]);
var inst_51758__$1 = (state_51778[(2)]);
var inst_51759 = (inst_51758__$1 == null);
var inst_51760 = cljs.core.not(inst_51759);
var state_51778__$1 = (function (){var statearr_51783 = state_51778;
(statearr_51783[(8)] = inst_51758__$1);

return statearr_51783;
})();
if(inst_51760){
var statearr_51784_52658 = state_51778__$1;
(statearr_51784_52658[(1)] = (5));

} else {
var statearr_51785_52659 = state_51778__$1;
(statearr_51785_52659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (6))){
var state_51778__$1 = state_51778;
var statearr_51786_52660 = state_51778__$1;
(statearr_51786_52660[(2)] = null);

(statearr_51786_52660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (3))){
var inst_51775 = (state_51778[(2)]);
var inst_51776 = cljs.core.async.close_BANG_(out);
var state_51778__$1 = (function (){var statearr_51787 = state_51778;
(statearr_51787[(9)] = inst_51775);

return statearr_51787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51778__$1,inst_51776);
} else {
if((state_val_51779 === (2))){
var state_51778__$1 = state_51778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51778__$1,(4),ch);
} else {
if((state_val_51779 === (11))){
var inst_51758 = (state_51778[(8)]);
var inst_51767 = (state_51778[(2)]);
var inst_51755 = inst_51758;
var state_51778__$1 = (function (){var statearr_51788 = state_51778;
(statearr_51788[(10)] = inst_51767);

(statearr_51788[(7)] = inst_51755);

return statearr_51788;
})();
var statearr_51789_52661 = state_51778__$1;
(statearr_51789_52661[(2)] = null);

(statearr_51789_52661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (9))){
var inst_51758 = (state_51778[(8)]);
var state_51778__$1 = state_51778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51778__$1,(11),out,inst_51758);
} else {
if((state_val_51779 === (5))){
var inst_51755 = (state_51778[(7)]);
var inst_51758 = (state_51778[(8)]);
var inst_51762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51758,inst_51755);
var state_51778__$1 = state_51778;
if(inst_51762){
var statearr_51791_52662 = state_51778__$1;
(statearr_51791_52662[(1)] = (8));

} else {
var statearr_51792_52663 = state_51778__$1;
(statearr_51792_52663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (10))){
var inst_51770 = (state_51778[(2)]);
var state_51778__$1 = state_51778;
var statearr_51793_52664 = state_51778__$1;
(statearr_51793_52664[(2)] = inst_51770);

(statearr_51793_52664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51779 === (8))){
var inst_51755 = (state_51778[(7)]);
var tmp51790 = inst_51755;
var inst_51755__$1 = tmp51790;
var state_51778__$1 = (function (){var statearr_51794 = state_51778;
(statearr_51794[(7)] = inst_51755__$1);

return statearr_51794;
})();
var statearr_51795_52665 = state_51778__$1;
(statearr_51795_52665[(2)] = null);

(statearr_51795_52665[(1)] = (2));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51796[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51796[(1)] = (1));

return statearr_51796;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51778){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51778);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51797){var ex__50383__auto__ = e51797;
var statearr_51798_52670 = state_51778;
(statearr_51798_52670[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51778[(4)]))){
var statearr_51799_52671 = state_51778;
(statearr_51799_52671[(1)] = cljs.core.first((state_51778[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52672 = state_51778;
state_51778 = G__52672;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51800 = f__50416__auto__();
(statearr_51800[(6)] = c__50415__auto___52655);

return statearr_51800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51802 = arguments.length;
switch (G__51802) {
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
var c__50415__auto___52674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51840){
var state_val_51841 = (state_51840[(1)]);
if((state_val_51841 === (7))){
var inst_51836 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51842_52675 = state_51840__$1;
(statearr_51842_52675[(2)] = inst_51836);

(statearr_51842_52675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (1))){
var inst_51803 = (new Array(n));
var inst_51804 = inst_51803;
var inst_51805 = (0);
var state_51840__$1 = (function (){var statearr_51843 = state_51840;
(statearr_51843[(7)] = inst_51805);

(statearr_51843[(8)] = inst_51804);

return statearr_51843;
})();
var statearr_51844_52676 = state_51840__$1;
(statearr_51844_52676[(2)] = null);

(statearr_51844_52676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (4))){
var inst_51808 = (state_51840[(9)]);
var inst_51808__$1 = (state_51840[(2)]);
var inst_51809 = (inst_51808__$1 == null);
var inst_51810 = cljs.core.not(inst_51809);
var state_51840__$1 = (function (){var statearr_51845 = state_51840;
(statearr_51845[(9)] = inst_51808__$1);

return statearr_51845;
})();
if(inst_51810){
var statearr_51846_52680 = state_51840__$1;
(statearr_51846_52680[(1)] = (5));

} else {
var statearr_51847_52681 = state_51840__$1;
(statearr_51847_52681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (15))){
var inst_51830 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51848_52682 = state_51840__$1;
(statearr_51848_52682[(2)] = inst_51830);

(statearr_51848_52682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (13))){
var state_51840__$1 = state_51840;
var statearr_51849_52683 = state_51840__$1;
(statearr_51849_52683[(2)] = null);

(statearr_51849_52683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (6))){
var inst_51805 = (state_51840[(7)]);
var inst_51826 = (inst_51805 > (0));
var state_51840__$1 = state_51840;
if(cljs.core.truth_(inst_51826)){
var statearr_51850_52684 = state_51840__$1;
(statearr_51850_52684[(1)] = (12));

} else {
var statearr_51851_52685 = state_51840__$1;
(statearr_51851_52685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (3))){
var inst_51838 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51840__$1,inst_51838);
} else {
if((state_val_51841 === (12))){
var inst_51804 = (state_51840[(8)]);
var inst_51828 = cljs.core.vec(inst_51804);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51840__$1,(15),out,inst_51828);
} else {
if((state_val_51841 === (2))){
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51840__$1,(4),ch);
} else {
if((state_val_51841 === (11))){
var inst_51820 = (state_51840[(2)]);
var inst_51821 = (new Array(n));
var inst_51804 = inst_51821;
var inst_51805 = (0);
var state_51840__$1 = (function (){var statearr_51852 = state_51840;
(statearr_51852[(7)] = inst_51805);

(statearr_51852[(8)] = inst_51804);

(statearr_51852[(10)] = inst_51820);

return statearr_51852;
})();
var statearr_51853_52690 = state_51840__$1;
(statearr_51853_52690[(2)] = null);

(statearr_51853_52690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (9))){
var inst_51804 = (state_51840[(8)]);
var inst_51818 = cljs.core.vec(inst_51804);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51840__$1,(11),out,inst_51818);
} else {
if((state_val_51841 === (5))){
var inst_51813 = (state_51840[(11)]);
var inst_51805 = (state_51840[(7)]);
var inst_51804 = (state_51840[(8)]);
var inst_51808 = (state_51840[(9)]);
var inst_51812 = (inst_51804[inst_51805] = inst_51808);
var inst_51813__$1 = (inst_51805 + (1));
var inst_51814 = (inst_51813__$1 < n);
var state_51840__$1 = (function (){var statearr_51854 = state_51840;
(statearr_51854[(12)] = inst_51812);

(statearr_51854[(11)] = inst_51813__$1);

return statearr_51854;
})();
if(cljs.core.truth_(inst_51814)){
var statearr_51855_52691 = state_51840__$1;
(statearr_51855_52691[(1)] = (8));

} else {
var statearr_51856_52692 = state_51840__$1;
(statearr_51856_52692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (14))){
var inst_51833 = (state_51840[(2)]);
var inst_51834 = cljs.core.async.close_BANG_(out);
var state_51840__$1 = (function (){var statearr_51858 = state_51840;
(statearr_51858[(13)] = inst_51833);

return statearr_51858;
})();
var statearr_51859_52693 = state_51840__$1;
(statearr_51859_52693[(2)] = inst_51834);

(statearr_51859_52693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (10))){
var inst_51824 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51860_52694 = state_51840__$1;
(statearr_51860_52694[(2)] = inst_51824);

(statearr_51860_52694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (8))){
var inst_51813 = (state_51840[(11)]);
var inst_51804 = (state_51840[(8)]);
var tmp51857 = inst_51804;
var inst_51804__$1 = tmp51857;
var inst_51805 = inst_51813;
var state_51840__$1 = (function (){var statearr_51861 = state_51840;
(statearr_51861[(7)] = inst_51805);

(statearr_51861[(8)] = inst_51804__$1);

return statearr_51861;
})();
var statearr_51862_52697 = state_51840__$1;
(statearr_51862_52697[(2)] = null);

(statearr_51862_52697[(1)] = (2));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51863[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51863[(1)] = (1));

return statearr_51863;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51840){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51840);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51864){var ex__50383__auto__ = e51864;
var statearr_51865_52698 = state_51840;
(statearr_51865_52698[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51840[(4)]))){
var statearr_51866_52699 = state_51840;
(statearr_51866_52699[(1)] = cljs.core.first((state_51840[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52700 = state_51840;
state_51840 = G__52700;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51867 = f__50416__auto__();
(statearr_51867[(6)] = c__50415__auto___52674);

return statearr_51867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51869 = arguments.length;
switch (G__51869) {
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
var c__50415__auto___52705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51911){
var state_val_51912 = (state_51911[(1)]);
if((state_val_51912 === (7))){
var inst_51907 = (state_51911[(2)]);
var state_51911__$1 = state_51911;
var statearr_51913_52706 = state_51911__$1;
(statearr_51913_52706[(2)] = inst_51907);

(statearr_51913_52706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (1))){
var inst_51870 = [];
var inst_51871 = inst_51870;
var inst_51872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51911__$1 = (function (){var statearr_51914 = state_51911;
(statearr_51914[(7)] = inst_51871);

(statearr_51914[(8)] = inst_51872);

return statearr_51914;
})();
var statearr_51915_52707 = state_51911__$1;
(statearr_51915_52707[(2)] = null);

(statearr_51915_52707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (4))){
var inst_51875 = (state_51911[(9)]);
var inst_51875__$1 = (state_51911[(2)]);
var inst_51876 = (inst_51875__$1 == null);
var inst_51877 = cljs.core.not(inst_51876);
var state_51911__$1 = (function (){var statearr_51916 = state_51911;
(statearr_51916[(9)] = inst_51875__$1);

return statearr_51916;
})();
if(inst_51877){
var statearr_51917_52715 = state_51911__$1;
(statearr_51917_52715[(1)] = (5));

} else {
var statearr_51918_52716 = state_51911__$1;
(statearr_51918_52716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (15))){
var inst_51901 = (state_51911[(2)]);
var state_51911__$1 = state_51911;
var statearr_51919_52720 = state_51911__$1;
(statearr_51919_52720[(2)] = inst_51901);

(statearr_51919_52720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (13))){
var state_51911__$1 = state_51911;
var statearr_51920_52721 = state_51911__$1;
(statearr_51920_52721[(2)] = null);

(statearr_51920_52721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (6))){
var inst_51871 = (state_51911[(7)]);
var inst_51896 = inst_51871.length;
var inst_51897 = (inst_51896 > (0));
var state_51911__$1 = state_51911;
if(cljs.core.truth_(inst_51897)){
var statearr_51921_52726 = state_51911__$1;
(statearr_51921_52726[(1)] = (12));

} else {
var statearr_51922_52727 = state_51911__$1;
(statearr_51922_52727[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (3))){
var inst_51909 = (state_51911[(2)]);
var state_51911__$1 = state_51911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51911__$1,inst_51909);
} else {
if((state_val_51912 === (12))){
var inst_51871 = (state_51911[(7)]);
var inst_51899 = cljs.core.vec(inst_51871);
var state_51911__$1 = state_51911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51911__$1,(15),out,inst_51899);
} else {
if((state_val_51912 === (2))){
var state_51911__$1 = state_51911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51911__$1,(4),ch);
} else {
if((state_val_51912 === (11))){
var inst_51875 = (state_51911[(9)]);
var inst_51879 = (state_51911[(10)]);
var inst_51889 = (state_51911[(2)]);
var inst_51890 = [];
var inst_51891 = inst_51890.push(inst_51875);
var inst_51871 = inst_51890;
var inst_51872 = inst_51879;
var state_51911__$1 = (function (){var statearr_51923 = state_51911;
(statearr_51923[(7)] = inst_51871);

(statearr_51923[(11)] = inst_51889);

(statearr_51923[(8)] = inst_51872);

(statearr_51923[(12)] = inst_51891);

return statearr_51923;
})();
var statearr_51924_52729 = state_51911__$1;
(statearr_51924_52729[(2)] = null);

(statearr_51924_52729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (9))){
var inst_51871 = (state_51911[(7)]);
var inst_51887 = cljs.core.vec(inst_51871);
var state_51911__$1 = state_51911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51911__$1,(11),out,inst_51887);
} else {
if((state_val_51912 === (5))){
var inst_51875 = (state_51911[(9)]);
var inst_51879 = (state_51911[(10)]);
var inst_51872 = (state_51911[(8)]);
var inst_51879__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51875) : f.call(null,inst_51875));
var inst_51880 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51879__$1,inst_51872);
var inst_51881 = cljs.core.keyword_identical_QMARK_(inst_51872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51882 = ((inst_51880) || (inst_51881));
var state_51911__$1 = (function (){var statearr_51925 = state_51911;
(statearr_51925[(10)] = inst_51879__$1);

return statearr_51925;
})();
if(cljs.core.truth_(inst_51882)){
var statearr_51926_52730 = state_51911__$1;
(statearr_51926_52730[(1)] = (8));

} else {
var statearr_51927_52734 = state_51911__$1;
(statearr_51927_52734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (14))){
var inst_51904 = (state_51911[(2)]);
var inst_51905 = cljs.core.async.close_BANG_(out);
var state_51911__$1 = (function (){var statearr_51929 = state_51911;
(statearr_51929[(13)] = inst_51904);

return statearr_51929;
})();
var statearr_51930_52735 = state_51911__$1;
(statearr_51930_52735[(2)] = inst_51905);

(statearr_51930_52735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (10))){
var inst_51894 = (state_51911[(2)]);
var state_51911__$1 = state_51911;
var statearr_51931_52736 = state_51911__$1;
(statearr_51931_52736[(2)] = inst_51894);

(statearr_51931_52736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51912 === (8))){
var inst_51875 = (state_51911[(9)]);
var inst_51871 = (state_51911[(7)]);
var inst_51879 = (state_51911[(10)]);
var inst_51884 = inst_51871.push(inst_51875);
var tmp51928 = inst_51871;
var inst_51871__$1 = tmp51928;
var inst_51872 = inst_51879;
var state_51911__$1 = (function (){var statearr_51932 = state_51911;
(statearr_51932[(7)] = inst_51871__$1);

(statearr_51932[(14)] = inst_51884);

(statearr_51932[(8)] = inst_51872);

return statearr_51932;
})();
var statearr_51933_52737 = state_51911__$1;
(statearr_51933_52737[(2)] = null);

(statearr_51933_52737[(1)] = (2));


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
var cljs$core$async$state_machine__50380__auto__ = null;
var cljs$core$async$state_machine__50380__auto____0 = (function (){
var statearr_51934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51934[(0)] = cljs$core$async$state_machine__50380__auto__);

(statearr_51934[(1)] = (1));

return statearr_51934;
});
var cljs$core$async$state_machine__50380__auto____1 = (function (state_51911){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51911);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e51935){var ex__50383__auto__ = e51935;
var statearr_51936_52738 = state_51911;
(statearr_51936_52738[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51911[(4)]))){
var statearr_51937_52739 = state_51911;
(statearr_51937_52739[(1)] = cljs.core.first((state_51911[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52740 = state_51911;
state_51911 = G__52740;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs$core$async$state_machine__50380__auto__ = function(state_51911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50380__auto____1.call(this,state_51911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50380__auto____0;
cljs$core$async$state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50380__auto____1;
return cljs$core$async$state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_51938 = f__50416__auto__();
(statearr_51938[(6)] = c__50415__auto___52705);

return statearr_51938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
