goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50474 = arguments.length;
switch (G__50474) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50475 = (function (f,blockable,meta50476){
this.f = f;
this.blockable = blockable;
this.meta50476 = meta50476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50477,meta50476__$1){
var self__ = this;
var _50477__$1 = this;
return (new cljs.core.async.t_cljs$core$async50475(self__.f,self__.blockable,meta50476__$1));
}));

(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50477){
var self__ = this;
var _50477__$1 = this;
return self__.meta50476;
}));

(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50476","meta50476",-1952431010,null)], null);
}));

(cljs.core.async.t_cljs$core$async50475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50475");

(cljs.core.async.t_cljs$core$async50475.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50475.
 */
cljs.core.async.__GT_t_cljs$core$async50475 = (function cljs$core$async$__GT_t_cljs$core$async50475(f__$1,blockable__$1,meta50476){
return (new cljs.core.async.t_cljs$core$async50475(f__$1,blockable__$1,meta50476));
});

}

return (new cljs.core.async.t_cljs$core$async50475(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50480 = arguments.length;
switch (G__50480) {
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
var G__50482 = arguments.length;
switch (G__50482) {
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
var G__50484 = arguments.length;
switch (G__50484) {
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
var val_51959 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51959) : fn1.call(null,val_51959));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51959) : fn1.call(null,val_51959));
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
var G__50486 = arguments.length;
switch (G__50486) {
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
var n__4613__auto___51966 = n;
var x_51967 = (0);
while(true){
if((x_51967 < n__4613__auto___51966)){
(a[x_51967] = x_51967);

var G__51968 = (x_51967 + (1));
x_51967 = G__51968;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50487 = (function (flag,meta50488){
this.flag = flag;
this.meta50488 = meta50488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50489,meta50488__$1){
var self__ = this;
var _50489__$1 = this;
return (new cljs.core.async.t_cljs$core$async50487(self__.flag,meta50488__$1));
}));

(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50489){
var self__ = this;
var _50489__$1 = this;
return self__.meta50488;
}));

(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50488","meta50488",-483039013,null)], null);
}));

(cljs.core.async.t_cljs$core$async50487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50487");

(cljs.core.async.t_cljs$core$async50487.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50487.
 */
cljs.core.async.__GT_t_cljs$core$async50487 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50487(flag__$1,meta50488){
return (new cljs.core.async.t_cljs$core$async50487(flag__$1,meta50488));
});

}

return (new cljs.core.async.t_cljs$core$async50487(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50490 = (function (flag,cb,meta50491){
this.flag = flag;
this.cb = cb;
this.meta50491 = meta50491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50492,meta50491__$1){
var self__ = this;
var _50492__$1 = this;
return (new cljs.core.async.t_cljs$core$async50490(self__.flag,self__.cb,meta50491__$1));
}));

(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50492){
var self__ = this;
var _50492__$1 = this;
return self__.meta50491;
}));

(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50491","meta50491",-603370204,null)], null);
}));

(cljs.core.async.t_cljs$core$async50490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50490");

(cljs.core.async.t_cljs$core$async50490.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50490.
 */
cljs.core.async.__GT_t_cljs$core$async50490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50490(flag__$1,cb__$1,meta50491){
return (new cljs.core.async.t_cljs$core$async50490(flag__$1,cb__$1,meta50491));
});

}

return (new cljs.core.async.t_cljs$core$async50490(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50493_SHARP_){
var G__50495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50493_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50495) : fret.call(null,G__50495));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50494_SHARP_){
var G__50496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50494_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50496) : fret.call(null,G__50496));
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
var G__51977 = (i + (1));
i = G__51977;
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
var len__4736__auto___51979 = arguments.length;
var i__4737__auto___51980 = (0);
while(true){
if((i__4737__auto___51980 < len__4736__auto___51979)){
args__4742__auto__.push((arguments[i__4737__auto___51980]));

var G__51981 = (i__4737__auto___51980 + (1));
i__4737__auto___51980 = G__51981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50499){
var map__50500 = p__50499;
var map__50500__$1 = (((((!((map__50500 == null))))?(((((map__50500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50500):map__50500);
var opts = map__50500__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50497){
var G__50498 = cljs.core.first(seq50497);
var seq50497__$1 = cljs.core.next(seq50497);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50498,seq50497__$1);
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
var G__50503 = arguments.length;
switch (G__50503) {
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
var c__50416__auto___51986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50527){
var state_val_50528 = (state_50527[(1)]);
if((state_val_50528 === (7))){
var inst_50523 = (state_50527[(2)]);
var state_50527__$1 = state_50527;
var statearr_50529_51987 = state_50527__$1;
(statearr_50529_51987[(2)] = inst_50523);

(statearr_50529_51987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (1))){
var state_50527__$1 = state_50527;
var statearr_50530_51988 = state_50527__$1;
(statearr_50530_51988[(2)] = null);

(statearr_50530_51988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (4))){
var inst_50506 = (state_50527[(7)]);
var inst_50506__$1 = (state_50527[(2)]);
var inst_50507 = (inst_50506__$1 == null);
var state_50527__$1 = (function (){var statearr_50531 = state_50527;
(statearr_50531[(7)] = inst_50506__$1);

return statearr_50531;
})();
if(cljs.core.truth_(inst_50507)){
var statearr_50532_51990 = state_50527__$1;
(statearr_50532_51990[(1)] = (5));

} else {
var statearr_50533_51991 = state_50527__$1;
(statearr_50533_51991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (13))){
var state_50527__$1 = state_50527;
var statearr_50534_51992 = state_50527__$1;
(statearr_50534_51992[(2)] = null);

(statearr_50534_51992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (6))){
var inst_50506 = (state_50527[(7)]);
var state_50527__$1 = state_50527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50527__$1,(11),to,inst_50506);
} else {
if((state_val_50528 === (3))){
var inst_50525 = (state_50527[(2)]);
var state_50527__$1 = state_50527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50527__$1,inst_50525);
} else {
if((state_val_50528 === (12))){
var state_50527__$1 = state_50527;
var statearr_50535_51993 = state_50527__$1;
(statearr_50535_51993[(2)] = null);

(statearr_50535_51993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (2))){
var state_50527__$1 = state_50527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50527__$1,(4),from);
} else {
if((state_val_50528 === (11))){
var inst_50516 = (state_50527[(2)]);
var state_50527__$1 = state_50527;
if(cljs.core.truth_(inst_50516)){
var statearr_50536_51994 = state_50527__$1;
(statearr_50536_51994[(1)] = (12));

} else {
var statearr_50537_51995 = state_50527__$1;
(statearr_50537_51995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (9))){
var state_50527__$1 = state_50527;
var statearr_50538_51996 = state_50527__$1;
(statearr_50538_51996[(2)] = null);

(statearr_50538_51996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (5))){
var state_50527__$1 = state_50527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50539_51997 = state_50527__$1;
(statearr_50539_51997[(1)] = (8));

} else {
var statearr_50540_51998 = state_50527__$1;
(statearr_50540_51998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (14))){
var inst_50521 = (state_50527[(2)]);
var state_50527__$1 = state_50527;
var statearr_50541_51999 = state_50527__$1;
(statearr_50541_51999[(2)] = inst_50521);

(statearr_50541_51999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (10))){
var inst_50513 = (state_50527[(2)]);
var state_50527__$1 = state_50527;
var statearr_50542_52000 = state_50527__$1;
(statearr_50542_52000[(2)] = inst_50513);

(statearr_50542_52000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50528 === (8))){
var inst_50510 = cljs.core.async.close_BANG_(to);
var state_50527__$1 = state_50527;
var statearr_50543_52001 = state_50527__$1;
(statearr_50543_52001[(2)] = inst_50510);

(statearr_50543_52001[(1)] = (10));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_50544 = [null,null,null,null,null,null,null,null];
(statearr_50544[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_50544[(1)] = (1));

return statearr_50544;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_50527){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50527);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50545){var ex__50384__auto__ = e50545;
var statearr_50546_52002 = state_50527;
(statearr_50546_52002[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50527[(4)]))){
var statearr_50547_52003 = state_50527;
(statearr_50547_52003[(1)] = cljs.core.first((state_50527[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52004 = state_50527;
state_50527 = G__52004;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_50527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_50527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50548 = f__50417__auto__();
(statearr_50548[(6)] = c__50416__auto___51986);

return statearr_50548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var process = (function (p__50549){
var vec__50550 = p__50549;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(1),null);
var job = vec__50550;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50416__auto___52018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50557){
var state_val_50558 = (state_50557[(1)]);
if((state_val_50558 === (1))){
var state_50557__$1 = state_50557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50557__$1,(2),res,v);
} else {
if((state_val_50558 === (2))){
var inst_50554 = (state_50557[(2)]);
var inst_50555 = cljs.core.async.close_BANG_(res);
var state_50557__$1 = (function (){var statearr_50559 = state_50557;
(statearr_50559[(7)] = inst_50554);

return statearr_50559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50557__$1,inst_50555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_50560 = [null,null,null,null,null,null,null,null];
(statearr_50560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__);

(statearr_50560[(1)] = (1));

return statearr_50560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1 = (function (state_50557){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50557);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50561){var ex__50384__auto__ = e50561;
var statearr_50562_52022 = state_50557;
(statearr_50562_52022[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50557[(4)]))){
var statearr_50563_52024 = state_50557;
(statearr_50563_52024[(1)] = cljs.core.first((state_50557[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52026 = state_50557;
state_50557 = G__52026;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = function(state_50557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1.call(this,state_50557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50564 = f__50417__auto__();
(statearr_50564[(6)] = c__50416__auto___52018);

return statearr_50564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50565){
var vec__50566 = p__50565;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(1),null);
var job = vec__50566;
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
var n__4613__auto___52031 = n;
var __52032 = (0);
while(true){
if((__52032 < n__4613__auto___52031)){
var G__50569_52033 = type;
var G__50569_52034__$1 = (((G__50569_52033 instanceof cljs.core.Keyword))?G__50569_52033.fqn:null);
switch (G__50569_52034__$1) {
case "compute":
var c__50416__auto___52036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52032,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = ((function (__52032,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function (state_50582){
var state_val_50583 = (state_50582[(1)]);
if((state_val_50583 === (1))){
var state_50582__$1 = state_50582;
var statearr_50584_52038 = state_50582__$1;
(statearr_50584_52038[(2)] = null);

(statearr_50584_52038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50583 === (2))){
var state_50582__$1 = state_50582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50582__$1,(4),jobs);
} else {
if((state_val_50583 === (3))){
var inst_50580 = (state_50582[(2)]);
var state_50582__$1 = state_50582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50582__$1,inst_50580);
} else {
if((state_val_50583 === (4))){
var inst_50572 = (state_50582[(2)]);
var inst_50573 = process(inst_50572);
var state_50582__$1 = state_50582;
if(cljs.core.truth_(inst_50573)){
var statearr_50585_52041 = state_50582__$1;
(statearr_50585_52041[(1)] = (5));

} else {
var statearr_50586_52043 = state_50582__$1;
(statearr_50586_52043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50583 === (5))){
var state_50582__$1 = state_50582;
var statearr_50587_52044 = state_50582__$1;
(statearr_50587_52044[(2)] = null);

(statearr_50587_52044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50583 === (6))){
var state_50582__$1 = state_50582;
var statearr_50588_52045 = state_50582__$1;
(statearr_50588_52045[(2)] = null);

(statearr_50588_52045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50583 === (7))){
var inst_50578 = (state_50582[(2)]);
var state_50582__$1 = state_50582;
var statearr_50589_52046 = state_50582__$1;
(statearr_50589_52046[(2)] = inst_50578);

(statearr_50589_52046[(1)] = (3));


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
});})(__52032,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
;
return ((function (__52032,switch__50380__auto__,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_50590 = [null,null,null,null,null,null,null];
(statearr_50590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__);

(statearr_50590[(1)] = (1));

return statearr_50590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1 = (function (state_50582){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50582);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50591){var ex__50384__auto__ = e50591;
var statearr_50592_52047 = state_50582;
(statearr_50592_52047[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50582[(4)]))){
var statearr_50593_52048 = state_50582;
(statearr_50593_52048[(1)] = cljs.core.first((state_50582[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52049 = state_50582;
state_50582 = G__52049;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = function(state_50582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1.call(this,state_50582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__;
})()
;})(__52032,switch__50380__auto__,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
})();
var state__50418__auto__ = (function (){var statearr_50594 = f__50417__auto__();
(statearr_50594[(6)] = c__50416__auto___52036);

return statearr_50594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
});})(__52032,c__50416__auto___52036,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
);


break;
case "async":
var c__50416__auto___52050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52032,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = ((function (__52032,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function (state_50607){
var state_val_50608 = (state_50607[(1)]);
if((state_val_50608 === (1))){
var state_50607__$1 = state_50607;
var statearr_50609_52053 = state_50607__$1;
(statearr_50609_52053[(2)] = null);

(statearr_50609_52053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (2))){
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50607__$1,(4),jobs);
} else {
if((state_val_50608 === (3))){
var inst_50605 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50607__$1,inst_50605);
} else {
if((state_val_50608 === (4))){
var inst_50597 = (state_50607[(2)]);
var inst_50598 = async(inst_50597);
var state_50607__$1 = state_50607;
if(cljs.core.truth_(inst_50598)){
var statearr_50610_52058 = state_50607__$1;
(statearr_50610_52058[(1)] = (5));

} else {
var statearr_50611_52059 = state_50607__$1;
(statearr_50611_52059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (5))){
var state_50607__$1 = state_50607;
var statearr_50612_52060 = state_50607__$1;
(statearr_50612_52060[(2)] = null);

(statearr_50612_52060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (6))){
var state_50607__$1 = state_50607;
var statearr_50613_52062 = state_50607__$1;
(statearr_50613_52062[(2)] = null);

(statearr_50613_52062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (7))){
var inst_50603 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50614_52064 = state_50607__$1;
(statearr_50614_52064[(2)] = inst_50603);

(statearr_50614_52064[(1)] = (3));


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
});})(__52032,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
;
return ((function (__52032,switch__50380__auto__,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_50615 = [null,null,null,null,null,null,null];
(statearr_50615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__);

(statearr_50615[(1)] = (1));

return statearr_50615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1 = (function (state_50607){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50607);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50616){var ex__50384__auto__ = e50616;
var statearr_50617_52068 = state_50607;
(statearr_50617_52068[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50607[(4)]))){
var statearr_50618_52070 = state_50607;
(statearr_50618_52070[(1)] = cljs.core.first((state_50607[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52071 = state_50607;
state_50607 = G__52071;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = function(state_50607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1.call(this,state_50607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__;
})()
;})(__52032,switch__50380__auto__,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
})();
var state__50418__auto__ = (function (){var statearr_50619 = f__50417__auto__();
(statearr_50619[(6)] = c__50416__auto___52050);

return statearr_50619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
});})(__52032,c__50416__auto___52050,G__50569_52033,G__50569_52034__$1,n__4613__auto___52031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50569_52034__$1)].join('')));

}

var G__52075 = (__52032 + (1));
__52032 = G__52075;
continue;
} else {
}
break;
}

var c__50416__auto___52076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50641){
var state_val_50642 = (state_50641[(1)]);
if((state_val_50642 === (7))){
var inst_50637 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
var statearr_50643_52077 = state_50641__$1;
(statearr_50643_52077[(2)] = inst_50637);

(statearr_50643_52077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (1))){
var state_50641__$1 = state_50641;
var statearr_50644_52078 = state_50641__$1;
(statearr_50644_52078[(2)] = null);

(statearr_50644_52078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (4))){
var inst_50622 = (state_50641[(7)]);
var inst_50622__$1 = (state_50641[(2)]);
var inst_50623 = (inst_50622__$1 == null);
var state_50641__$1 = (function (){var statearr_50645 = state_50641;
(statearr_50645[(7)] = inst_50622__$1);

return statearr_50645;
})();
if(cljs.core.truth_(inst_50623)){
var statearr_50646_52079 = state_50641__$1;
(statearr_50646_52079[(1)] = (5));

} else {
var statearr_50647_52080 = state_50641__$1;
(statearr_50647_52080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (6))){
var inst_50627 = (state_50641[(8)]);
var inst_50622 = (state_50641[(7)]);
var inst_50627__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50629 = [inst_50622,inst_50627__$1];
var inst_50630 = (new cljs.core.PersistentVector(null,2,(5),inst_50628,inst_50629,null));
var state_50641__$1 = (function (){var statearr_50648 = state_50641;
(statearr_50648[(8)] = inst_50627__$1);

return statearr_50648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50641__$1,(8),jobs,inst_50630);
} else {
if((state_val_50642 === (3))){
var inst_50639 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50641__$1,inst_50639);
} else {
if((state_val_50642 === (2))){
var state_50641__$1 = state_50641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50641__$1,(4),from);
} else {
if((state_val_50642 === (9))){
var inst_50634 = (state_50641[(2)]);
var state_50641__$1 = (function (){var statearr_50649 = state_50641;
(statearr_50649[(9)] = inst_50634);

return statearr_50649;
})();
var statearr_50650_52081 = state_50641__$1;
(statearr_50650_52081[(2)] = null);

(statearr_50650_52081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (5))){
var inst_50625 = cljs.core.async.close_BANG_(jobs);
var state_50641__$1 = state_50641;
var statearr_50651_52082 = state_50641__$1;
(statearr_50651_52082[(2)] = inst_50625);

(statearr_50651_52082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (8))){
var inst_50627 = (state_50641[(8)]);
var inst_50632 = (state_50641[(2)]);
var state_50641__$1 = (function (){var statearr_50652 = state_50641;
(statearr_50652[(10)] = inst_50632);

return statearr_50652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50641__$1,(9),results,inst_50627);
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
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_50653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__);

(statearr_50653[(1)] = (1));

return statearr_50653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1 = (function (state_50641){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50641);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50654){var ex__50384__auto__ = e50654;
var statearr_50655_52083 = state_50641;
(statearr_50655_52083[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50641[(4)]))){
var statearr_50656_52084 = state_50641;
(statearr_50656_52084[(1)] = cljs.core.first((state_50641[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52085 = state_50641;
state_50641 = G__52085;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = function(state_50641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1.call(this,state_50641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50657 = f__50417__auto__();
(statearr_50657[(6)] = c__50416__auto___52076);

return statearr_50657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


var c__50416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50695){
var state_val_50696 = (state_50695[(1)]);
if((state_val_50696 === (7))){
var inst_50691 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
var statearr_50697_52086 = state_50695__$1;
(statearr_50697_52086[(2)] = inst_50691);

(statearr_50697_52086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (20))){
var state_50695__$1 = state_50695;
var statearr_50698_52087 = state_50695__$1;
(statearr_50698_52087[(2)] = null);

(statearr_50698_52087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (1))){
var state_50695__$1 = state_50695;
var statearr_50699_52088 = state_50695__$1;
(statearr_50699_52088[(2)] = null);

(statearr_50699_52088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (4))){
var inst_50660 = (state_50695[(7)]);
var inst_50660__$1 = (state_50695[(2)]);
var inst_50661 = (inst_50660__$1 == null);
var state_50695__$1 = (function (){var statearr_50700 = state_50695;
(statearr_50700[(7)] = inst_50660__$1);

return statearr_50700;
})();
if(cljs.core.truth_(inst_50661)){
var statearr_50701_52089 = state_50695__$1;
(statearr_50701_52089[(1)] = (5));

} else {
var statearr_50702_52090 = state_50695__$1;
(statearr_50702_52090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (15))){
var inst_50673 = (state_50695[(8)]);
var state_50695__$1 = state_50695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50695__$1,(18),to,inst_50673);
} else {
if((state_val_50696 === (21))){
var inst_50686 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
var statearr_50703_52091 = state_50695__$1;
(statearr_50703_52091[(2)] = inst_50686);

(statearr_50703_52091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (13))){
var inst_50688 = (state_50695[(2)]);
var state_50695__$1 = (function (){var statearr_50704 = state_50695;
(statearr_50704[(9)] = inst_50688);

return statearr_50704;
})();
var statearr_50705_52092 = state_50695__$1;
(statearr_50705_52092[(2)] = null);

(statearr_50705_52092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (6))){
var inst_50660 = (state_50695[(7)]);
var state_50695__$1 = state_50695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50695__$1,(11),inst_50660);
} else {
if((state_val_50696 === (17))){
var inst_50681 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
if(cljs.core.truth_(inst_50681)){
var statearr_50706_52093 = state_50695__$1;
(statearr_50706_52093[(1)] = (19));

} else {
var statearr_50707_52095 = state_50695__$1;
(statearr_50707_52095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (3))){
var inst_50693 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50695__$1,inst_50693);
} else {
if((state_val_50696 === (12))){
var inst_50670 = (state_50695[(10)]);
var state_50695__$1 = state_50695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50695__$1,(14),inst_50670);
} else {
if((state_val_50696 === (2))){
var state_50695__$1 = state_50695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50695__$1,(4),results);
} else {
if((state_val_50696 === (19))){
var state_50695__$1 = state_50695;
var statearr_50708_52097 = state_50695__$1;
(statearr_50708_52097[(2)] = null);

(statearr_50708_52097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (11))){
var inst_50670 = (state_50695[(2)]);
var state_50695__$1 = (function (){var statearr_50709 = state_50695;
(statearr_50709[(10)] = inst_50670);

return statearr_50709;
})();
var statearr_50710_52099 = state_50695__$1;
(statearr_50710_52099[(2)] = null);

(statearr_50710_52099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (9))){
var state_50695__$1 = state_50695;
var statearr_50711_52100 = state_50695__$1;
(statearr_50711_52100[(2)] = null);

(statearr_50711_52100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (5))){
var state_50695__$1 = state_50695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50712_52103 = state_50695__$1;
(statearr_50712_52103[(1)] = (8));

} else {
var statearr_50713_52104 = state_50695__$1;
(statearr_50713_52104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (14))){
var inst_50673 = (state_50695[(8)]);
var inst_50673__$1 = (state_50695[(2)]);
var inst_50674 = (inst_50673__$1 == null);
var inst_50675 = cljs.core.not(inst_50674);
var state_50695__$1 = (function (){var statearr_50714 = state_50695;
(statearr_50714[(8)] = inst_50673__$1);

return statearr_50714;
})();
if(inst_50675){
var statearr_50715_52107 = state_50695__$1;
(statearr_50715_52107[(1)] = (15));

} else {
var statearr_50716_52108 = state_50695__$1;
(statearr_50716_52108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (16))){
var state_50695__$1 = state_50695;
var statearr_50717_52109 = state_50695__$1;
(statearr_50717_52109[(2)] = false);

(statearr_50717_52109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (10))){
var inst_50667 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
var statearr_50718_52110 = state_50695__$1;
(statearr_50718_52110[(2)] = inst_50667);

(statearr_50718_52110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (18))){
var inst_50678 = (state_50695[(2)]);
var state_50695__$1 = state_50695;
var statearr_50719_52112 = state_50695__$1;
(statearr_50719_52112[(2)] = inst_50678);

(statearr_50719_52112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50696 === (8))){
var inst_50664 = cljs.core.async.close_BANG_(to);
var state_50695__$1 = state_50695;
var statearr_50720_52114 = state_50695__$1;
(statearr_50720_52114[(2)] = inst_50664);

(statearr_50720_52114[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_50721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__);

(statearr_50721[(1)] = (1));

return statearr_50721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1 = (function (state_50695){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50695);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50722){var ex__50384__auto__ = e50722;
var statearr_50723_52116 = state_50695;
(statearr_50723_52116[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50695[(4)]))){
var statearr_50724_52117 = state_50695;
(statearr_50724_52117[(1)] = cljs.core.first((state_50695[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52118 = state_50695;
state_50695 = G__52118;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__ = function(state_50695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1.call(this,state_50695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50725 = f__50417__auto__();
(statearr_50725[(6)] = c__50416__auto__);

return statearr_50725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));

return c__50416__auto__;
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
var G__50727 = arguments.length;
switch (G__50727) {
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
var G__50729 = arguments.length;
switch (G__50729) {
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
var G__50731 = arguments.length;
switch (G__50731) {
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
var c__50416__auto___52127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50757){
var state_val_50758 = (state_50757[(1)]);
if((state_val_50758 === (7))){
var inst_50753 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
var statearr_50759_52128 = state_50757__$1;
(statearr_50759_52128[(2)] = inst_50753);

(statearr_50759_52128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (1))){
var state_50757__$1 = state_50757;
var statearr_50760_52129 = state_50757__$1;
(statearr_50760_52129[(2)] = null);

(statearr_50760_52129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (4))){
var inst_50734 = (state_50757[(7)]);
var inst_50734__$1 = (state_50757[(2)]);
var inst_50735 = (inst_50734__$1 == null);
var state_50757__$1 = (function (){var statearr_50761 = state_50757;
(statearr_50761[(7)] = inst_50734__$1);

return statearr_50761;
})();
if(cljs.core.truth_(inst_50735)){
var statearr_50762_52130 = state_50757__$1;
(statearr_50762_52130[(1)] = (5));

} else {
var statearr_50763_52131 = state_50757__$1;
(statearr_50763_52131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (13))){
var state_50757__$1 = state_50757;
var statearr_50764_52132 = state_50757__$1;
(statearr_50764_52132[(2)] = null);

(statearr_50764_52132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (6))){
var inst_50734 = (state_50757[(7)]);
var inst_50740 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50734) : p.call(null,inst_50734));
var state_50757__$1 = state_50757;
if(cljs.core.truth_(inst_50740)){
var statearr_50765_52133 = state_50757__$1;
(statearr_50765_52133[(1)] = (9));

} else {
var statearr_50766_52134 = state_50757__$1;
(statearr_50766_52134[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (3))){
var inst_50755 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50757__$1,inst_50755);
} else {
if((state_val_50758 === (12))){
var state_50757__$1 = state_50757;
var statearr_50767_52135 = state_50757__$1;
(statearr_50767_52135[(2)] = null);

(statearr_50767_52135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (2))){
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50757__$1,(4),ch);
} else {
if((state_val_50758 === (11))){
var inst_50734 = (state_50757[(7)]);
var inst_50744 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50757__$1,(8),inst_50744,inst_50734);
} else {
if((state_val_50758 === (9))){
var state_50757__$1 = state_50757;
var statearr_50768_52136 = state_50757__$1;
(statearr_50768_52136[(2)] = tc);

(statearr_50768_52136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (5))){
var inst_50737 = cljs.core.async.close_BANG_(tc);
var inst_50738 = cljs.core.async.close_BANG_(fc);
var state_50757__$1 = (function (){var statearr_50769 = state_50757;
(statearr_50769[(8)] = inst_50737);

return statearr_50769;
})();
var statearr_50770_52137 = state_50757__$1;
(statearr_50770_52137[(2)] = inst_50738);

(statearr_50770_52137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (14))){
var inst_50751 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
var statearr_50771_52138 = state_50757__$1;
(statearr_50771_52138[(2)] = inst_50751);

(statearr_50771_52138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (10))){
var state_50757__$1 = state_50757;
var statearr_50772_52139 = state_50757__$1;
(statearr_50772_52139[(2)] = fc);

(statearr_50772_52139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (8))){
var inst_50746 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
if(cljs.core.truth_(inst_50746)){
var statearr_50773_52140 = state_50757__$1;
(statearr_50773_52140[(1)] = (12));

} else {
var statearr_50774_52141 = state_50757__$1;
(statearr_50774_52141[(1)] = (13));

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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_50775 = [null,null,null,null,null,null,null,null,null];
(statearr_50775[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_50775[(1)] = (1));

return statearr_50775;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_50757){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50757);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50776){var ex__50384__auto__ = e50776;
var statearr_50777_52142 = state_50757;
(statearr_50777_52142[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50757[(4)]))){
var statearr_50778_52143 = state_50757;
(statearr_50778_52143[(1)] = cljs.core.first((state_50757[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52144 = state_50757;
state_50757 = G__52144;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_50757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_50757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50779 = f__50417__auto__();
(statearr_50779[(6)] = c__50416__auto___52127);

return statearr_50779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var c__50416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50801){
var state_val_50802 = (state_50801[(1)]);
if((state_val_50802 === (7))){
var inst_50797 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
var statearr_50803_52145 = state_50801__$1;
(statearr_50803_52145[(2)] = inst_50797);

(statearr_50803_52145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (1))){
var inst_50780 = init;
var inst_50781 = inst_50780;
var state_50801__$1 = (function (){var statearr_50804 = state_50801;
(statearr_50804[(7)] = inst_50781);

return statearr_50804;
})();
var statearr_50805_52146 = state_50801__$1;
(statearr_50805_52146[(2)] = null);

(statearr_50805_52146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (4))){
var inst_50784 = (state_50801[(8)]);
var inst_50784__$1 = (state_50801[(2)]);
var inst_50785 = (inst_50784__$1 == null);
var state_50801__$1 = (function (){var statearr_50806 = state_50801;
(statearr_50806[(8)] = inst_50784__$1);

return statearr_50806;
})();
if(cljs.core.truth_(inst_50785)){
var statearr_50807_52147 = state_50801__$1;
(statearr_50807_52147[(1)] = (5));

} else {
var statearr_50808_52148 = state_50801__$1;
(statearr_50808_52148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (6))){
var inst_50784 = (state_50801[(8)]);
var inst_50781 = (state_50801[(7)]);
var inst_50788 = (state_50801[(9)]);
var inst_50788__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50781,inst_50784) : f.call(null,inst_50781,inst_50784));
var inst_50789 = cljs.core.reduced_QMARK_(inst_50788__$1);
var state_50801__$1 = (function (){var statearr_50809 = state_50801;
(statearr_50809[(9)] = inst_50788__$1);

return statearr_50809;
})();
if(inst_50789){
var statearr_50810_52149 = state_50801__$1;
(statearr_50810_52149[(1)] = (8));

} else {
var statearr_50811_52150 = state_50801__$1;
(statearr_50811_52150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (3))){
var inst_50799 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50801__$1,inst_50799);
} else {
if((state_val_50802 === (2))){
var state_50801__$1 = state_50801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50801__$1,(4),ch);
} else {
if((state_val_50802 === (9))){
var inst_50788 = (state_50801[(9)]);
var inst_50781 = inst_50788;
var state_50801__$1 = (function (){var statearr_50812 = state_50801;
(statearr_50812[(7)] = inst_50781);

return statearr_50812;
})();
var statearr_50813_52151 = state_50801__$1;
(statearr_50813_52151[(2)] = null);

(statearr_50813_52151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (5))){
var inst_50781 = (state_50801[(7)]);
var state_50801__$1 = state_50801;
var statearr_50814_52152 = state_50801__$1;
(statearr_50814_52152[(2)] = inst_50781);

(statearr_50814_52152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (10))){
var inst_50795 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
var statearr_50815_52153 = state_50801__$1;
(statearr_50815_52153[(2)] = inst_50795);

(statearr_50815_52153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (8))){
var inst_50788 = (state_50801[(9)]);
var inst_50791 = cljs.core.deref(inst_50788);
var state_50801__$1 = state_50801;
var statearr_50816_52154 = state_50801__$1;
(statearr_50816_52154[(2)] = inst_50791);

(statearr_50816_52154[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__50381__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50381__auto____0 = (function (){
var statearr_50817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50817[(0)] = cljs$core$async$reduce_$_state_machine__50381__auto__);

(statearr_50817[(1)] = (1));

return statearr_50817;
});
var cljs$core$async$reduce_$_state_machine__50381__auto____1 = (function (state_50801){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50801);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50818){var ex__50384__auto__ = e50818;
var statearr_50819_52155 = state_50801;
(statearr_50819_52155[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50801[(4)]))){
var statearr_50820_52156 = state_50801;
(statearr_50820_52156[(1)] = cljs.core.first((state_50801[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52157 = state_50801;
state_50801 = G__52157;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50381__auto__ = function(state_50801){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50381__auto____1.call(this,state_50801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50381__auto____0;
cljs$core$async$reduce_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50381__auto____1;
return cljs$core$async$reduce_$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50821 = f__50417__auto__();
(statearr_50821[(6)] = c__50416__auto__);

return statearr_50821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));

return c__50416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50827){
var state_val_50828 = (state_50827[(1)]);
if((state_val_50828 === (1))){
var inst_50822 = cljs.core.async.reduce(f__$1,init,ch);
var state_50827__$1 = state_50827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50827__$1,(2),inst_50822);
} else {
if((state_val_50828 === (2))){
var inst_50824 = (state_50827[(2)]);
var inst_50825 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50824) : f__$1.call(null,inst_50824));
var state_50827__$1 = state_50827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50827__$1,inst_50825);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50381__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50381__auto____0 = (function (){
var statearr_50829 = [null,null,null,null,null,null,null];
(statearr_50829[(0)] = cljs$core$async$transduce_$_state_machine__50381__auto__);

(statearr_50829[(1)] = (1));

return statearr_50829;
});
var cljs$core$async$transduce_$_state_machine__50381__auto____1 = (function (state_50827){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50827);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50830){var ex__50384__auto__ = e50830;
var statearr_50831_52158 = state_50827;
(statearr_50831_52158[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50827[(4)]))){
var statearr_50832_52159 = state_50827;
(statearr_50832_52159[(1)] = cljs.core.first((state_50827[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52160 = state_50827;
state_50827 = G__52160;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50381__auto__ = function(state_50827){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50381__auto____1.call(this,state_50827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50381__auto____0;
cljs$core$async$transduce_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50381__auto____1;
return cljs$core$async$transduce_$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50833 = f__50417__auto__();
(statearr_50833[(6)] = c__50416__auto__);

return statearr_50833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));

return c__50416__auto__;
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
var G__50835 = arguments.length;
switch (G__50835) {
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
var c__50416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_50860){
var state_val_50861 = (state_50860[(1)]);
if((state_val_50861 === (7))){
var inst_50842 = (state_50860[(2)]);
var state_50860__$1 = state_50860;
var statearr_50862_52162 = state_50860__$1;
(statearr_50862_52162[(2)] = inst_50842);

(statearr_50862_52162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (1))){
var inst_50836 = cljs.core.seq(coll);
var inst_50837 = inst_50836;
var state_50860__$1 = (function (){var statearr_50863 = state_50860;
(statearr_50863[(7)] = inst_50837);

return statearr_50863;
})();
var statearr_50864_52163 = state_50860__$1;
(statearr_50864_52163[(2)] = null);

(statearr_50864_52163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (4))){
var inst_50837 = (state_50860[(7)]);
var inst_50840 = cljs.core.first(inst_50837);
var state_50860__$1 = state_50860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50860__$1,(7),ch,inst_50840);
} else {
if((state_val_50861 === (13))){
var inst_50854 = (state_50860[(2)]);
var state_50860__$1 = state_50860;
var statearr_50865_52164 = state_50860__$1;
(statearr_50865_52164[(2)] = inst_50854);

(statearr_50865_52164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (6))){
var inst_50845 = (state_50860[(2)]);
var state_50860__$1 = state_50860;
if(cljs.core.truth_(inst_50845)){
var statearr_50866_52165 = state_50860__$1;
(statearr_50866_52165[(1)] = (8));

} else {
var statearr_50867_52166 = state_50860__$1;
(statearr_50867_52166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (3))){
var inst_50858 = (state_50860[(2)]);
var state_50860__$1 = state_50860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50860__$1,inst_50858);
} else {
if((state_val_50861 === (12))){
var state_50860__$1 = state_50860;
var statearr_50868_52167 = state_50860__$1;
(statearr_50868_52167[(2)] = null);

(statearr_50868_52167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (2))){
var inst_50837 = (state_50860[(7)]);
var state_50860__$1 = state_50860;
if(cljs.core.truth_(inst_50837)){
var statearr_50869_52168 = state_50860__$1;
(statearr_50869_52168[(1)] = (4));

} else {
var statearr_50870_52169 = state_50860__$1;
(statearr_50870_52169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (11))){
var inst_50851 = cljs.core.async.close_BANG_(ch);
var state_50860__$1 = state_50860;
var statearr_50871_52170 = state_50860__$1;
(statearr_50871_52170[(2)] = inst_50851);

(statearr_50871_52170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (9))){
var state_50860__$1 = state_50860;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50872_52171 = state_50860__$1;
(statearr_50872_52171[(1)] = (11));

} else {
var statearr_50873_52172 = state_50860__$1;
(statearr_50873_52172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (5))){
var inst_50837 = (state_50860[(7)]);
var state_50860__$1 = state_50860;
var statearr_50874_52173 = state_50860__$1;
(statearr_50874_52173[(2)] = inst_50837);

(statearr_50874_52173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (10))){
var inst_50856 = (state_50860[(2)]);
var state_50860__$1 = state_50860;
var statearr_50875_52174 = state_50860__$1;
(statearr_50875_52174[(2)] = inst_50856);

(statearr_50875_52174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50861 === (8))){
var inst_50837 = (state_50860[(7)]);
var inst_50847 = cljs.core.next(inst_50837);
var inst_50837__$1 = inst_50847;
var state_50860__$1 = (function (){var statearr_50876 = state_50860;
(statearr_50876[(7)] = inst_50837__$1);

return statearr_50876;
})();
var statearr_50877_52175 = state_50860__$1;
(statearr_50877_52175[(2)] = null);

(statearr_50877_52175[(1)] = (2));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_50878 = [null,null,null,null,null,null,null,null];
(statearr_50878[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_50878[(1)] = (1));

return statearr_50878;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_50860){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_50860);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e50879){var ex__50384__auto__ = e50879;
var statearr_50880_52176 = state_50860;
(statearr_50880_52176[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_50860[(4)]))){
var statearr_50881_52177 = state_50860;
(statearr_50881_52177[(1)] = cljs.core.first((state_50860[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52178 = state_50860;
state_50860 = G__52178;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_50860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_50860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_50882 = f__50417__auto__();
(statearr_50882[(6)] = c__50416__auto__);

return statearr_50882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));

return c__50416__auto__;
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
var G__50884 = arguments.length;
switch (G__50884) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_52180 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_52180(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52181 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_52181(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52182 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_52182(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52183 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_52183(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50885 = (function (ch,cs,meta50886){
this.ch = ch;
this.cs = cs;
this.meta50886 = meta50886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50887,meta50886__$1){
var self__ = this;
var _50887__$1 = this;
return (new cljs.core.async.t_cljs$core$async50885(self__.ch,self__.cs,meta50886__$1));
}));

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50887){
var self__ = this;
var _50887__$1 = this;
return self__.meta50886;
}));

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50885.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50886","meta50886",-1137597161,null)], null);
}));

(cljs.core.async.t_cljs$core$async50885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50885");

(cljs.core.async.t_cljs$core$async50885.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50885.
 */
cljs.core.async.__GT_t_cljs$core$async50885 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50885(ch__$1,cs__$1,meta50886){
return (new cljs.core.async.t_cljs$core$async50885(ch__$1,cs__$1,meta50886));
});

}

return (new cljs.core.async.t_cljs$core$async50885(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50416__auto___52184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51020){
var state_val_51021 = (state_51020[(1)]);
if((state_val_51021 === (7))){
var inst_51016 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51022_52185 = state_51020__$1;
(statearr_51022_52185[(2)] = inst_51016);

(statearr_51022_52185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (20))){
var inst_50921 = (state_51020[(7)]);
var inst_50933 = cljs.core.first(inst_50921);
var inst_50934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50933,(0),null);
var inst_50935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50933,(1),null);
var state_51020__$1 = (function (){var statearr_51023 = state_51020;
(statearr_51023[(8)] = inst_50934);

return statearr_51023;
})();
if(cljs.core.truth_(inst_50935)){
var statearr_51024_52186 = state_51020__$1;
(statearr_51024_52186[(1)] = (22));

} else {
var statearr_51025_52187 = state_51020__$1;
(statearr_51025_52187[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (27))){
var inst_50965 = (state_51020[(9)]);
var inst_50970 = (state_51020[(10)]);
var inst_50963 = (state_51020[(11)]);
var inst_50890 = (state_51020[(12)]);
var inst_50970__$1 = cljs.core._nth(inst_50963,inst_50965);
var inst_50971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50970__$1,inst_50890,done);
var state_51020__$1 = (function (){var statearr_51026 = state_51020;
(statearr_51026[(10)] = inst_50970__$1);

return statearr_51026;
})();
if(cljs.core.truth_(inst_50971)){
var statearr_51027_52188 = state_51020__$1;
(statearr_51027_52188[(1)] = (30));

} else {
var statearr_51028_52189 = state_51020__$1;
(statearr_51028_52189[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (1))){
var state_51020__$1 = state_51020;
var statearr_51029_52190 = state_51020__$1;
(statearr_51029_52190[(2)] = null);

(statearr_51029_52190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (24))){
var inst_50921 = (state_51020[(7)]);
var inst_50940 = (state_51020[(2)]);
var inst_50941 = cljs.core.next(inst_50921);
var inst_50899 = inst_50941;
var inst_50900 = null;
var inst_50901 = (0);
var inst_50902 = (0);
var state_51020__$1 = (function (){var statearr_51030 = state_51020;
(statearr_51030[(13)] = inst_50899);

(statearr_51030[(14)] = inst_50902);

(statearr_51030[(15)] = inst_50901);

(statearr_51030[(16)] = inst_50900);

(statearr_51030[(17)] = inst_50940);

return statearr_51030;
})();
var statearr_51031_52193 = state_51020__$1;
(statearr_51031_52193[(2)] = null);

(statearr_51031_52193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (39))){
var state_51020__$1 = state_51020;
var statearr_51035_52197 = state_51020__$1;
(statearr_51035_52197[(2)] = null);

(statearr_51035_52197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (4))){
var inst_50890 = (state_51020[(12)]);
var inst_50890__$1 = (state_51020[(2)]);
var inst_50891 = (inst_50890__$1 == null);
var state_51020__$1 = (function (){var statearr_51036 = state_51020;
(statearr_51036[(12)] = inst_50890__$1);

return statearr_51036;
})();
if(cljs.core.truth_(inst_50891)){
var statearr_51037_52198 = state_51020__$1;
(statearr_51037_52198[(1)] = (5));

} else {
var statearr_51038_52199 = state_51020__$1;
(statearr_51038_52199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (15))){
var inst_50899 = (state_51020[(13)]);
var inst_50902 = (state_51020[(14)]);
var inst_50901 = (state_51020[(15)]);
var inst_50900 = (state_51020[(16)]);
var inst_50917 = (state_51020[(2)]);
var inst_50918 = (inst_50902 + (1));
var tmp51032 = inst_50899;
var tmp51033 = inst_50901;
var tmp51034 = inst_50900;
var inst_50899__$1 = tmp51032;
var inst_50900__$1 = tmp51034;
var inst_50901__$1 = tmp51033;
var inst_50902__$1 = inst_50918;
var state_51020__$1 = (function (){var statearr_51039 = state_51020;
(statearr_51039[(13)] = inst_50899__$1);

(statearr_51039[(14)] = inst_50902__$1);

(statearr_51039[(15)] = inst_50901__$1);

(statearr_51039[(16)] = inst_50900__$1);

(statearr_51039[(18)] = inst_50917);

return statearr_51039;
})();
var statearr_51040_52200 = state_51020__$1;
(statearr_51040_52200[(2)] = null);

(statearr_51040_52200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (21))){
var inst_50944 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51044_52201 = state_51020__$1;
(statearr_51044_52201[(2)] = inst_50944);

(statearr_51044_52201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (31))){
var inst_50970 = (state_51020[(10)]);
var inst_50974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50970);
var state_51020__$1 = state_51020;
var statearr_51045_52202 = state_51020__$1;
(statearr_51045_52202[(2)] = inst_50974);

(statearr_51045_52202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (32))){
var inst_50965 = (state_51020[(9)]);
var inst_50964 = (state_51020[(19)]);
var inst_50963 = (state_51020[(11)]);
var inst_50962 = (state_51020[(20)]);
var inst_50976 = (state_51020[(2)]);
var inst_50977 = (inst_50965 + (1));
var tmp51041 = inst_50964;
var tmp51042 = inst_50963;
var tmp51043 = inst_50962;
var inst_50962__$1 = tmp51043;
var inst_50963__$1 = tmp51042;
var inst_50964__$1 = tmp51041;
var inst_50965__$1 = inst_50977;
var state_51020__$1 = (function (){var statearr_51046 = state_51020;
(statearr_51046[(21)] = inst_50976);

(statearr_51046[(9)] = inst_50965__$1);

(statearr_51046[(19)] = inst_50964__$1);

(statearr_51046[(11)] = inst_50963__$1);

(statearr_51046[(20)] = inst_50962__$1);

return statearr_51046;
})();
var statearr_51047_52203 = state_51020__$1;
(statearr_51047_52203[(2)] = null);

(statearr_51047_52203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (40))){
var inst_50989 = (state_51020[(22)]);
var inst_50993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50989);
var state_51020__$1 = state_51020;
var statearr_51048_52204 = state_51020__$1;
(statearr_51048_52204[(2)] = inst_50993);

(statearr_51048_52204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (33))){
var inst_50980 = (state_51020[(23)]);
var inst_50982 = cljs.core.chunked_seq_QMARK_(inst_50980);
var state_51020__$1 = state_51020;
if(inst_50982){
var statearr_51049_52206 = state_51020__$1;
(statearr_51049_52206[(1)] = (36));

} else {
var statearr_51050_52207 = state_51020__$1;
(statearr_51050_52207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (13))){
var inst_50911 = (state_51020[(24)]);
var inst_50914 = cljs.core.async.close_BANG_(inst_50911);
var state_51020__$1 = state_51020;
var statearr_51051_52208 = state_51020__$1;
(statearr_51051_52208[(2)] = inst_50914);

(statearr_51051_52208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (22))){
var inst_50934 = (state_51020[(8)]);
var inst_50937 = cljs.core.async.close_BANG_(inst_50934);
var state_51020__$1 = state_51020;
var statearr_51052_52209 = state_51020__$1;
(statearr_51052_52209[(2)] = inst_50937);

(statearr_51052_52209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (36))){
var inst_50980 = (state_51020[(23)]);
var inst_50984 = cljs.core.chunk_first(inst_50980);
var inst_50985 = cljs.core.chunk_rest(inst_50980);
var inst_50986 = cljs.core.count(inst_50984);
var inst_50962 = inst_50985;
var inst_50963 = inst_50984;
var inst_50964 = inst_50986;
var inst_50965 = (0);
var state_51020__$1 = (function (){var statearr_51053 = state_51020;
(statearr_51053[(9)] = inst_50965);

(statearr_51053[(19)] = inst_50964);

(statearr_51053[(11)] = inst_50963);

(statearr_51053[(20)] = inst_50962);

return statearr_51053;
})();
var statearr_51054_52214 = state_51020__$1;
(statearr_51054_52214[(2)] = null);

(statearr_51054_52214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (41))){
var inst_50980 = (state_51020[(23)]);
var inst_50995 = (state_51020[(2)]);
var inst_50996 = cljs.core.next(inst_50980);
var inst_50962 = inst_50996;
var inst_50963 = null;
var inst_50964 = (0);
var inst_50965 = (0);
var state_51020__$1 = (function (){var statearr_51055 = state_51020;
(statearr_51055[(25)] = inst_50995);

(statearr_51055[(9)] = inst_50965);

(statearr_51055[(19)] = inst_50964);

(statearr_51055[(11)] = inst_50963);

(statearr_51055[(20)] = inst_50962);

return statearr_51055;
})();
var statearr_51056_52215 = state_51020__$1;
(statearr_51056_52215[(2)] = null);

(statearr_51056_52215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (43))){
var state_51020__$1 = state_51020;
var statearr_51057_52217 = state_51020__$1;
(statearr_51057_52217[(2)] = null);

(statearr_51057_52217[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (29))){
var inst_51004 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51058_52218 = state_51020__$1;
(statearr_51058_52218[(2)] = inst_51004);

(statearr_51058_52218[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (44))){
var inst_51013 = (state_51020[(2)]);
var state_51020__$1 = (function (){var statearr_51059 = state_51020;
(statearr_51059[(26)] = inst_51013);

return statearr_51059;
})();
var statearr_51060_52219 = state_51020__$1;
(statearr_51060_52219[(2)] = null);

(statearr_51060_52219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (6))){
var inst_50954 = (state_51020[(27)]);
var inst_50953 = cljs.core.deref(cs);
var inst_50954__$1 = cljs.core.keys(inst_50953);
var inst_50955 = cljs.core.count(inst_50954__$1);
var inst_50956 = cljs.core.reset_BANG_(dctr,inst_50955);
var inst_50961 = cljs.core.seq(inst_50954__$1);
var inst_50962 = inst_50961;
var inst_50963 = null;
var inst_50964 = (0);
var inst_50965 = (0);
var state_51020__$1 = (function (){var statearr_51061 = state_51020;
(statearr_51061[(9)] = inst_50965);

(statearr_51061[(19)] = inst_50964);

(statearr_51061[(11)] = inst_50963);

(statearr_51061[(28)] = inst_50956);

(statearr_51061[(20)] = inst_50962);

(statearr_51061[(27)] = inst_50954__$1);

return statearr_51061;
})();
var statearr_51062_52220 = state_51020__$1;
(statearr_51062_52220[(2)] = null);

(statearr_51062_52220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (28))){
var inst_50980 = (state_51020[(23)]);
var inst_50962 = (state_51020[(20)]);
var inst_50980__$1 = cljs.core.seq(inst_50962);
var state_51020__$1 = (function (){var statearr_51063 = state_51020;
(statearr_51063[(23)] = inst_50980__$1);

return statearr_51063;
})();
if(inst_50980__$1){
var statearr_51064_52221 = state_51020__$1;
(statearr_51064_52221[(1)] = (33));

} else {
var statearr_51065_52222 = state_51020__$1;
(statearr_51065_52222[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (25))){
var inst_50965 = (state_51020[(9)]);
var inst_50964 = (state_51020[(19)]);
var inst_50967 = (inst_50965 < inst_50964);
var inst_50968 = inst_50967;
var state_51020__$1 = state_51020;
if(cljs.core.truth_(inst_50968)){
var statearr_51066_52223 = state_51020__$1;
(statearr_51066_52223[(1)] = (27));

} else {
var statearr_51067_52224 = state_51020__$1;
(statearr_51067_52224[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (34))){
var state_51020__$1 = state_51020;
var statearr_51068_52225 = state_51020__$1;
(statearr_51068_52225[(2)] = null);

(statearr_51068_52225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (17))){
var state_51020__$1 = state_51020;
var statearr_51069_52226 = state_51020__$1;
(statearr_51069_52226[(2)] = null);

(statearr_51069_52226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (3))){
var inst_51018 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51020__$1,inst_51018);
} else {
if((state_val_51021 === (12))){
var inst_50949 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51070_52227 = state_51020__$1;
(statearr_51070_52227[(2)] = inst_50949);

(statearr_51070_52227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (2))){
var state_51020__$1 = state_51020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51020__$1,(4),ch);
} else {
if((state_val_51021 === (23))){
var state_51020__$1 = state_51020;
var statearr_51071_52228 = state_51020__$1;
(statearr_51071_52228[(2)] = null);

(statearr_51071_52228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (35))){
var inst_51002 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51072_52229 = state_51020__$1;
(statearr_51072_52229[(2)] = inst_51002);

(statearr_51072_52229[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (19))){
var inst_50921 = (state_51020[(7)]);
var inst_50925 = cljs.core.chunk_first(inst_50921);
var inst_50926 = cljs.core.chunk_rest(inst_50921);
var inst_50927 = cljs.core.count(inst_50925);
var inst_50899 = inst_50926;
var inst_50900 = inst_50925;
var inst_50901 = inst_50927;
var inst_50902 = (0);
var state_51020__$1 = (function (){var statearr_51073 = state_51020;
(statearr_51073[(13)] = inst_50899);

(statearr_51073[(14)] = inst_50902);

(statearr_51073[(15)] = inst_50901);

(statearr_51073[(16)] = inst_50900);

return statearr_51073;
})();
var statearr_51074_52231 = state_51020__$1;
(statearr_51074_52231[(2)] = null);

(statearr_51074_52231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (11))){
var inst_50899 = (state_51020[(13)]);
var inst_50921 = (state_51020[(7)]);
var inst_50921__$1 = cljs.core.seq(inst_50899);
var state_51020__$1 = (function (){var statearr_51075 = state_51020;
(statearr_51075[(7)] = inst_50921__$1);

return statearr_51075;
})();
if(inst_50921__$1){
var statearr_51076_52233 = state_51020__$1;
(statearr_51076_52233[(1)] = (16));

} else {
var statearr_51077_52234 = state_51020__$1;
(statearr_51077_52234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (9))){
var inst_50951 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51078_52235 = state_51020__$1;
(statearr_51078_52235[(2)] = inst_50951);

(statearr_51078_52235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (5))){
var inst_50897 = cljs.core.deref(cs);
var inst_50898 = cljs.core.seq(inst_50897);
var inst_50899 = inst_50898;
var inst_50900 = null;
var inst_50901 = (0);
var inst_50902 = (0);
var state_51020__$1 = (function (){var statearr_51079 = state_51020;
(statearr_51079[(13)] = inst_50899);

(statearr_51079[(14)] = inst_50902);

(statearr_51079[(15)] = inst_50901);

(statearr_51079[(16)] = inst_50900);

return statearr_51079;
})();
var statearr_51080_52238 = state_51020__$1;
(statearr_51080_52238[(2)] = null);

(statearr_51080_52238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (14))){
var state_51020__$1 = state_51020;
var statearr_51081_52239 = state_51020__$1;
(statearr_51081_52239[(2)] = null);

(statearr_51081_52239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (45))){
var inst_51010 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51082_52240 = state_51020__$1;
(statearr_51082_52240[(2)] = inst_51010);

(statearr_51082_52240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (26))){
var inst_50954 = (state_51020[(27)]);
var inst_51006 = (state_51020[(2)]);
var inst_51007 = cljs.core.seq(inst_50954);
var state_51020__$1 = (function (){var statearr_51083 = state_51020;
(statearr_51083[(29)] = inst_51006);

return statearr_51083;
})();
if(inst_51007){
var statearr_51084_52241 = state_51020__$1;
(statearr_51084_52241[(1)] = (42));

} else {
var statearr_51085_52243 = state_51020__$1;
(statearr_51085_52243[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (16))){
var inst_50921 = (state_51020[(7)]);
var inst_50923 = cljs.core.chunked_seq_QMARK_(inst_50921);
var state_51020__$1 = state_51020;
if(inst_50923){
var statearr_51086_52247 = state_51020__$1;
(statearr_51086_52247[(1)] = (19));

} else {
var statearr_51087_52248 = state_51020__$1;
(statearr_51087_52248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (38))){
var inst_50999 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51088_52250 = state_51020__$1;
(statearr_51088_52250[(2)] = inst_50999);

(statearr_51088_52250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (30))){
var state_51020__$1 = state_51020;
var statearr_51089_52251 = state_51020__$1;
(statearr_51089_52251[(2)] = null);

(statearr_51089_52251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (10))){
var inst_50902 = (state_51020[(14)]);
var inst_50900 = (state_51020[(16)]);
var inst_50910 = cljs.core._nth(inst_50900,inst_50902);
var inst_50911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50910,(0),null);
var inst_50912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50910,(1),null);
var state_51020__$1 = (function (){var statearr_51090 = state_51020;
(statearr_51090[(24)] = inst_50911);

return statearr_51090;
})();
if(cljs.core.truth_(inst_50912)){
var statearr_51091_52252 = state_51020__$1;
(statearr_51091_52252[(1)] = (13));

} else {
var statearr_51092_52253 = state_51020__$1;
(statearr_51092_52253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (18))){
var inst_50947 = (state_51020[(2)]);
var state_51020__$1 = state_51020;
var statearr_51093_52256 = state_51020__$1;
(statearr_51093_52256[(2)] = inst_50947);

(statearr_51093_52256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (42))){
var state_51020__$1 = state_51020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51020__$1,(45),dchan);
} else {
if((state_val_51021 === (37))){
var inst_50980 = (state_51020[(23)]);
var inst_50890 = (state_51020[(12)]);
var inst_50989 = (state_51020[(22)]);
var inst_50989__$1 = cljs.core.first(inst_50980);
var inst_50990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50989__$1,inst_50890,done);
var state_51020__$1 = (function (){var statearr_51094 = state_51020;
(statearr_51094[(22)] = inst_50989__$1);

return statearr_51094;
})();
if(cljs.core.truth_(inst_50990)){
var statearr_51095_52257 = state_51020__$1;
(statearr_51095_52257[(1)] = (39));

} else {
var statearr_51096_52258 = state_51020__$1;
(statearr_51096_52258[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51021 === (8))){
var inst_50902 = (state_51020[(14)]);
var inst_50901 = (state_51020[(15)]);
var inst_50904 = (inst_50902 < inst_50901);
var inst_50905 = inst_50904;
var state_51020__$1 = state_51020;
if(cljs.core.truth_(inst_50905)){
var statearr_51097_52263 = state_51020__$1;
(statearr_51097_52263[(1)] = (10));

} else {
var statearr_51098_52264 = state_51020__$1;
(statearr_51098_52264[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__50381__auto__ = null;
var cljs$core$async$mult_$_state_machine__50381__auto____0 = (function (){
var statearr_51099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51099[(0)] = cljs$core$async$mult_$_state_machine__50381__auto__);

(statearr_51099[(1)] = (1));

return statearr_51099;
});
var cljs$core$async$mult_$_state_machine__50381__auto____1 = (function (state_51020){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51020);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51100){var ex__50384__auto__ = e51100;
var statearr_51101_52266 = state_51020;
(statearr_51101_52266[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51020[(4)]))){
var statearr_51102_52267 = state_51020;
(statearr_51102_52267[(1)] = cljs.core.first((state_51020[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52270 = state_51020;
state_51020 = G__52270;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50381__auto__ = function(state_51020){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50381__auto____1.call(this,state_51020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50381__auto____0;
cljs$core$async$mult_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50381__auto____1;
return cljs$core$async$mult_$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51103 = f__50417__auto__();
(statearr_51103[(6)] = c__50416__auto___52184);

return statearr_51103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var G__51105 = arguments.length;
switch (G__51105) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52276 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_52276(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52278 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_52278(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52279 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52279(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52282 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_52282(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52284 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52284(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52289 = arguments.length;
var i__4737__auto___52290 = (0);
while(true){
if((i__4737__auto___52290 < len__4736__auto___52289)){
args__4742__auto__.push((arguments[i__4737__auto___52290]));

var G__52291 = (i__4737__auto___52290 + (1));
i__4737__auto___52290 = G__52291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51110){
var map__51111 = p__51110;
var map__51111__$1 = (((((!((map__51111 == null))))?(((((map__51111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51111):map__51111);
var opts = map__51111__$1;
var statearr_51113_52292 = state;
(statearr_51113_52292[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51114_52293 = state;
(statearr_51114_52293[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51115_52294 = state;
(statearr_51115_52294[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51106){
var G__51107 = cljs.core.first(seq51106);
var seq51106__$1 = cljs.core.next(seq51106);
var G__51108 = cljs.core.first(seq51106__$1);
var seq51106__$2 = cljs.core.next(seq51106__$1);
var G__51109 = cljs.core.first(seq51106__$2);
var seq51106__$3 = cljs.core.next(seq51106__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51107,G__51108,G__51109,seq51106__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51116 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51117){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51117 = meta51117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51118,meta51117__$1){
var self__ = this;
var _51118__$1 = this;
return (new cljs.core.async.t_cljs$core$async51116(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51117__$1));
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51118){
var self__ = this;
var _51118__$1 = this;
return self__.meta51117;
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51116.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51117","meta51117",-841404475,null)], null);
}));

(cljs.core.async.t_cljs$core$async51116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51116");

(cljs.core.async.t_cljs$core$async51116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51116.
 */
cljs.core.async.__GT_t_cljs$core$async51116 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51116(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51117){
return (new cljs.core.async.t_cljs$core$async51116(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51117));
});

}

return (new cljs.core.async.t_cljs$core$async51116(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50416__auto___52313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51220){
var state_val_51221 = (state_51220[(1)]);
if((state_val_51221 === (7))){
var inst_51135 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
var statearr_51222_52314 = state_51220__$1;
(statearr_51222_52314[(2)] = inst_51135);

(statearr_51222_52314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (20))){
var inst_51147 = (state_51220[(7)]);
var state_51220__$1 = state_51220;
var statearr_51223_52315 = state_51220__$1;
(statearr_51223_52315[(2)] = inst_51147);

(statearr_51223_52315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (27))){
var state_51220__$1 = state_51220;
var statearr_51224_52319 = state_51220__$1;
(statearr_51224_52319[(2)] = null);

(statearr_51224_52319[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (1))){
var inst_51122 = (state_51220[(8)]);
var inst_51122__$1 = calc_state();
var inst_51124 = (inst_51122__$1 == null);
var inst_51125 = cljs.core.not(inst_51124);
var state_51220__$1 = (function (){var statearr_51225 = state_51220;
(statearr_51225[(8)] = inst_51122__$1);

return statearr_51225;
})();
if(inst_51125){
var statearr_51226_52320 = state_51220__$1;
(statearr_51226_52320[(1)] = (2));

} else {
var statearr_51227_52321 = state_51220__$1;
(statearr_51227_52321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (24))){
var inst_51194 = (state_51220[(9)]);
var inst_51171 = (state_51220[(10)]);
var inst_51180 = (state_51220[(11)]);
var inst_51194__$1 = (inst_51171.cljs$core$IFn$_invoke$arity$1 ? inst_51171.cljs$core$IFn$_invoke$arity$1(inst_51180) : inst_51171.call(null,inst_51180));
var state_51220__$1 = (function (){var statearr_51228 = state_51220;
(statearr_51228[(9)] = inst_51194__$1);

return statearr_51228;
})();
if(cljs.core.truth_(inst_51194__$1)){
var statearr_51229_52325 = state_51220__$1;
(statearr_51229_52325[(1)] = (29));

} else {
var statearr_51230_52326 = state_51220__$1;
(statearr_51230_52326[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (4))){
var inst_51138 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51138)){
var statearr_51231_52327 = state_51220__$1;
(statearr_51231_52327[(1)] = (8));

} else {
var statearr_51232_52331 = state_51220__$1;
(statearr_51232_52331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (15))){
var inst_51165 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51165)){
var statearr_51233_52332 = state_51220__$1;
(statearr_51233_52332[(1)] = (19));

} else {
var statearr_51234_52333 = state_51220__$1;
(statearr_51234_52333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (21))){
var inst_51170 = (state_51220[(12)]);
var inst_51170__$1 = (state_51220[(2)]);
var inst_51171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51170__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51170__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51170__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51220__$1 = (function (){var statearr_51235 = state_51220;
(statearr_51235[(12)] = inst_51170__$1);

(statearr_51235[(10)] = inst_51171);

(statearr_51235[(13)] = inst_51172);

return statearr_51235;
})();
return cljs.core.async.ioc_alts_BANG_(state_51220__$1,(22),inst_51173);
} else {
if((state_val_51221 === (31))){
var inst_51202 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51202)){
var statearr_51236_52334 = state_51220__$1;
(statearr_51236_52334[(1)] = (32));

} else {
var statearr_51237_52335 = state_51220__$1;
(statearr_51237_52335[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (32))){
var inst_51179 = (state_51220[(14)]);
var state_51220__$1 = state_51220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51220__$1,(35),out,inst_51179);
} else {
if((state_val_51221 === (33))){
var inst_51170 = (state_51220[(12)]);
var inst_51147 = inst_51170;
var state_51220__$1 = (function (){var statearr_51238 = state_51220;
(statearr_51238[(7)] = inst_51147);

return statearr_51238;
})();
var statearr_51239_52339 = state_51220__$1;
(statearr_51239_52339[(2)] = null);

(statearr_51239_52339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (13))){
var inst_51147 = (state_51220[(7)]);
var inst_51154 = inst_51147.cljs$lang$protocol_mask$partition0$;
var inst_51155 = (inst_51154 & (64));
var inst_51156 = inst_51147.cljs$core$ISeq$;
var inst_51157 = (cljs.core.PROTOCOL_SENTINEL === inst_51156);
var inst_51158 = ((inst_51155) || (inst_51157));
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51158)){
var statearr_51240_52342 = state_51220__$1;
(statearr_51240_52342[(1)] = (16));

} else {
var statearr_51241_52343 = state_51220__$1;
(statearr_51241_52343[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (22))){
var inst_51179 = (state_51220[(14)]);
var inst_51180 = (state_51220[(11)]);
var inst_51178 = (state_51220[(2)]);
var inst_51179__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51178,(0),null);
var inst_51180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51178,(1),null);
var inst_51181 = (inst_51179__$1 == null);
var inst_51182 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51180__$1,change);
var inst_51183 = ((inst_51181) || (inst_51182));
var state_51220__$1 = (function (){var statearr_51242 = state_51220;
(statearr_51242[(14)] = inst_51179__$1);

(statearr_51242[(11)] = inst_51180__$1);

return statearr_51242;
})();
if(cljs.core.truth_(inst_51183)){
var statearr_51243_52344 = state_51220__$1;
(statearr_51243_52344[(1)] = (23));

} else {
var statearr_51244_52345 = state_51220__$1;
(statearr_51244_52345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (36))){
var inst_51170 = (state_51220[(12)]);
var inst_51147 = inst_51170;
var state_51220__$1 = (function (){var statearr_51245 = state_51220;
(statearr_51245[(7)] = inst_51147);

return statearr_51245;
})();
var statearr_51246_52348 = state_51220__$1;
(statearr_51246_52348[(2)] = null);

(statearr_51246_52348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (29))){
var inst_51194 = (state_51220[(9)]);
var state_51220__$1 = state_51220;
var statearr_51247_52349 = state_51220__$1;
(statearr_51247_52349[(2)] = inst_51194);

(statearr_51247_52349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (6))){
var state_51220__$1 = state_51220;
var statearr_51248_52351 = state_51220__$1;
(statearr_51248_52351[(2)] = false);

(statearr_51248_52351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (28))){
var inst_51190 = (state_51220[(2)]);
var inst_51191 = calc_state();
var inst_51147 = inst_51191;
var state_51220__$1 = (function (){var statearr_51249 = state_51220;
(statearr_51249[(7)] = inst_51147);

(statearr_51249[(15)] = inst_51190);

return statearr_51249;
})();
var statearr_51250_52353 = state_51220__$1;
(statearr_51250_52353[(2)] = null);

(statearr_51250_52353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (25))){
var inst_51216 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
var statearr_51251_52357 = state_51220__$1;
(statearr_51251_52357[(2)] = inst_51216);

(statearr_51251_52357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (34))){
var inst_51214 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
var statearr_51252_52358 = state_51220__$1;
(statearr_51252_52358[(2)] = inst_51214);

(statearr_51252_52358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (17))){
var state_51220__$1 = state_51220;
var statearr_51253_52359 = state_51220__$1;
(statearr_51253_52359[(2)] = false);

(statearr_51253_52359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (3))){
var state_51220__$1 = state_51220;
var statearr_51254_52361 = state_51220__$1;
(statearr_51254_52361[(2)] = false);

(statearr_51254_52361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (12))){
var inst_51218 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51220__$1,inst_51218);
} else {
if((state_val_51221 === (2))){
var inst_51122 = (state_51220[(8)]);
var inst_51127 = inst_51122.cljs$lang$protocol_mask$partition0$;
var inst_51128 = (inst_51127 & (64));
var inst_51129 = inst_51122.cljs$core$ISeq$;
var inst_51130 = (cljs.core.PROTOCOL_SENTINEL === inst_51129);
var inst_51131 = ((inst_51128) || (inst_51130));
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51131)){
var statearr_51255_52364 = state_51220__$1;
(statearr_51255_52364[(1)] = (5));

} else {
var statearr_51256_52365 = state_51220__$1;
(statearr_51256_52365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (23))){
var inst_51179 = (state_51220[(14)]);
var inst_51185 = (inst_51179 == null);
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51185)){
var statearr_51257_52366 = state_51220__$1;
(statearr_51257_52366[(1)] = (26));

} else {
var statearr_51258_52367 = state_51220__$1;
(statearr_51258_52367[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (35))){
var inst_51205 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
if(cljs.core.truth_(inst_51205)){
var statearr_51259_52368 = state_51220__$1;
(statearr_51259_52368[(1)] = (36));

} else {
var statearr_51260_52369 = state_51220__$1;
(statearr_51260_52369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (19))){
var inst_51147 = (state_51220[(7)]);
var inst_51167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51147);
var state_51220__$1 = state_51220;
var statearr_51261_52371 = state_51220__$1;
(statearr_51261_52371[(2)] = inst_51167);

(statearr_51261_52371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (11))){
var inst_51147 = (state_51220[(7)]);
var inst_51151 = (inst_51147 == null);
var inst_51152 = cljs.core.not(inst_51151);
var state_51220__$1 = state_51220;
if(inst_51152){
var statearr_51262_52375 = state_51220__$1;
(statearr_51262_52375[(1)] = (13));

} else {
var statearr_51263_52376 = state_51220__$1;
(statearr_51263_52376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (9))){
var inst_51122 = (state_51220[(8)]);
var state_51220__$1 = state_51220;
var statearr_51264_52378 = state_51220__$1;
(statearr_51264_52378[(2)] = inst_51122);

(statearr_51264_52378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (5))){
var state_51220__$1 = state_51220;
var statearr_51265_52379 = state_51220__$1;
(statearr_51265_52379[(2)] = true);

(statearr_51265_52379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (14))){
var state_51220__$1 = state_51220;
var statearr_51266_52380 = state_51220__$1;
(statearr_51266_52380[(2)] = false);

(statearr_51266_52380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (26))){
var inst_51180 = (state_51220[(11)]);
var inst_51187 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51180);
var state_51220__$1 = state_51220;
var statearr_51267_52381 = state_51220__$1;
(statearr_51267_52381[(2)] = inst_51187);

(statearr_51267_52381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (16))){
var state_51220__$1 = state_51220;
var statearr_51268_52382 = state_51220__$1;
(statearr_51268_52382[(2)] = true);

(statearr_51268_52382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (38))){
var inst_51210 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
var statearr_51269_52383 = state_51220__$1;
(statearr_51269_52383[(2)] = inst_51210);

(statearr_51269_52383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (30))){
var inst_51171 = (state_51220[(10)]);
var inst_51180 = (state_51220[(11)]);
var inst_51172 = (state_51220[(13)]);
var inst_51197 = cljs.core.empty_QMARK_(inst_51171);
var inst_51198 = (inst_51172.cljs$core$IFn$_invoke$arity$1 ? inst_51172.cljs$core$IFn$_invoke$arity$1(inst_51180) : inst_51172.call(null,inst_51180));
var inst_51199 = cljs.core.not(inst_51198);
var inst_51200 = ((inst_51197) && (inst_51199));
var state_51220__$1 = state_51220;
var statearr_51270_52385 = state_51220__$1;
(statearr_51270_52385[(2)] = inst_51200);

(statearr_51270_52385[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (10))){
var inst_51122 = (state_51220[(8)]);
var inst_51143 = (state_51220[(2)]);
var inst_51144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51143,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51143,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51143,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51147 = inst_51122;
var state_51220__$1 = (function (){var statearr_51271 = state_51220;
(statearr_51271[(7)] = inst_51147);

(statearr_51271[(16)] = inst_51144);

(statearr_51271[(17)] = inst_51145);

(statearr_51271[(18)] = inst_51146);

return statearr_51271;
})();
var statearr_51272_52386 = state_51220__$1;
(statearr_51272_52386[(2)] = null);

(statearr_51272_52386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (18))){
var inst_51162 = (state_51220[(2)]);
var state_51220__$1 = state_51220;
var statearr_51273_52387 = state_51220__$1;
(statearr_51273_52387[(2)] = inst_51162);

(statearr_51273_52387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (37))){
var state_51220__$1 = state_51220;
var statearr_51274_52388 = state_51220__$1;
(statearr_51274_52388[(2)] = null);

(statearr_51274_52388[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51221 === (8))){
var inst_51122 = (state_51220[(8)]);
var inst_51140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51122);
var state_51220__$1 = state_51220;
var statearr_51275_52389 = state_51220__$1;
(statearr_51275_52389[(2)] = inst_51140);

(statearr_51275_52389[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__50381__auto__ = null;
var cljs$core$async$mix_$_state_machine__50381__auto____0 = (function (){
var statearr_51276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51276[(0)] = cljs$core$async$mix_$_state_machine__50381__auto__);

(statearr_51276[(1)] = (1));

return statearr_51276;
});
var cljs$core$async$mix_$_state_machine__50381__auto____1 = (function (state_51220){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51220);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51277){var ex__50384__auto__ = e51277;
var statearr_51278_52392 = state_51220;
(statearr_51278_52392[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51220[(4)]))){
var statearr_51279_52393 = state_51220;
(statearr_51279_52393[(1)] = cljs.core.first((state_51220[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52394 = state_51220;
state_51220 = G__52394;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50381__auto__ = function(state_51220){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50381__auto____1.call(this,state_51220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50381__auto____0;
cljs$core$async$mix_$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50381__auto____1;
return cljs$core$async$mix_$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51280 = f__50417__auto__();
(statearr_51280[(6)] = c__50416__auto___52313);

return statearr_51280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52399 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52399(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52402 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52402(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52407 = (function() {
var G__52408 = null;
var G__52408__1 = (function (p){
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
var G__52408__2 = (function (p,v){
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
G__52408 = function(p,v){
switch(arguments.length){
case 1:
return G__52408__1.call(this,p);
case 2:
return G__52408__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52408.cljs$core$IFn$_invoke$arity$1 = G__52408__1;
G__52408.cljs$core$IFn$_invoke$arity$2 = G__52408__2;
return G__52408;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51282 = arguments.length;
switch (G__51282) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52407(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52407(p,v);
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
var G__51285 = arguments.length;
switch (G__51285) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51283_SHARP_){
if(cljs.core.truth_((p1__51283_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51283_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51283_SHARP_.call(null,topic)))){
return p1__51283_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51283_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51286 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51287){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51287 = meta51287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51288,meta51287__$1){
var self__ = this;
var _51288__$1 = this;
return (new cljs.core.async.t_cljs$core$async51286(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51287__$1));
}));

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51288){
var self__ = this;
var _51288__$1 = this;
return self__.meta51287;
}));

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51287","meta51287",359744843,null)], null);
}));

(cljs.core.async.t_cljs$core$async51286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51286");

(cljs.core.async.t_cljs$core$async51286.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51286.
 */
cljs.core.async.__GT_t_cljs$core$async51286 = (function cljs$core$async$__GT_t_cljs$core$async51286(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51287){
return (new cljs.core.async.t_cljs$core$async51286(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51287));
});

}

return (new cljs.core.async.t_cljs$core$async51286(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50416__auto___52424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51360){
var state_val_51361 = (state_51360[(1)]);
if((state_val_51361 === (7))){
var inst_51356 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51362_52425 = state_51360__$1;
(statearr_51362_52425[(2)] = inst_51356);

(statearr_51362_52425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (20))){
var state_51360__$1 = state_51360;
var statearr_51363_52427 = state_51360__$1;
(statearr_51363_52427[(2)] = null);

(statearr_51363_52427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (1))){
var state_51360__$1 = state_51360;
var statearr_51364_52428 = state_51360__$1;
(statearr_51364_52428[(2)] = null);

(statearr_51364_52428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (24))){
var inst_51339 = (state_51360[(7)]);
var inst_51348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51339);
var state_51360__$1 = state_51360;
var statearr_51365_52429 = state_51360__$1;
(statearr_51365_52429[(2)] = inst_51348);

(statearr_51365_52429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (4))){
var inst_51291 = (state_51360[(8)]);
var inst_51291__$1 = (state_51360[(2)]);
var inst_51292 = (inst_51291__$1 == null);
var state_51360__$1 = (function (){var statearr_51366 = state_51360;
(statearr_51366[(8)] = inst_51291__$1);

return statearr_51366;
})();
if(cljs.core.truth_(inst_51292)){
var statearr_51367_52434 = state_51360__$1;
(statearr_51367_52434[(1)] = (5));

} else {
var statearr_51368_52435 = state_51360__$1;
(statearr_51368_52435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (15))){
var inst_51333 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51369_52436 = state_51360__$1;
(statearr_51369_52436[(2)] = inst_51333);

(statearr_51369_52436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (21))){
var inst_51353 = (state_51360[(2)]);
var state_51360__$1 = (function (){var statearr_51370 = state_51360;
(statearr_51370[(9)] = inst_51353);

return statearr_51370;
})();
var statearr_51371_52437 = state_51360__$1;
(statearr_51371_52437[(2)] = null);

(statearr_51371_52437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (13))){
var inst_51315 = (state_51360[(10)]);
var inst_51317 = cljs.core.chunked_seq_QMARK_(inst_51315);
var state_51360__$1 = state_51360;
if(inst_51317){
var statearr_51372_52438 = state_51360__$1;
(statearr_51372_52438[(1)] = (16));

} else {
var statearr_51373_52439 = state_51360__$1;
(statearr_51373_52439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (22))){
var inst_51345 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
if(cljs.core.truth_(inst_51345)){
var statearr_51374_52442 = state_51360__$1;
(statearr_51374_52442[(1)] = (23));

} else {
var statearr_51375_52443 = state_51360__$1;
(statearr_51375_52443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (6))){
var inst_51341 = (state_51360[(11)]);
var inst_51339 = (state_51360[(7)]);
var inst_51291 = (state_51360[(8)]);
var inst_51339__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51291) : topic_fn.call(null,inst_51291));
var inst_51340 = cljs.core.deref(mults);
var inst_51341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51340,inst_51339__$1);
var state_51360__$1 = (function (){var statearr_51376 = state_51360;
(statearr_51376[(11)] = inst_51341__$1);

(statearr_51376[(7)] = inst_51339__$1);

return statearr_51376;
})();
if(cljs.core.truth_(inst_51341__$1)){
var statearr_51377_52444 = state_51360__$1;
(statearr_51377_52444[(1)] = (19));

} else {
var statearr_51378_52446 = state_51360__$1;
(statearr_51378_52446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (25))){
var inst_51350 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51379_52450 = state_51360__$1;
(statearr_51379_52450[(2)] = inst_51350);

(statearr_51379_52450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (17))){
var inst_51315 = (state_51360[(10)]);
var inst_51324 = cljs.core.first(inst_51315);
var inst_51325 = cljs.core.async.muxch_STAR_(inst_51324);
var inst_51326 = cljs.core.async.close_BANG_(inst_51325);
var inst_51327 = cljs.core.next(inst_51315);
var inst_51301 = inst_51327;
var inst_51302 = null;
var inst_51303 = (0);
var inst_51304 = (0);
var state_51360__$1 = (function (){var statearr_51380 = state_51360;
(statearr_51380[(12)] = inst_51303);

(statearr_51380[(13)] = inst_51301);

(statearr_51380[(14)] = inst_51302);

(statearr_51380[(15)] = inst_51304);

(statearr_51380[(16)] = inst_51326);

return statearr_51380;
})();
var statearr_51381_52452 = state_51360__$1;
(statearr_51381_52452[(2)] = null);

(statearr_51381_52452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (3))){
var inst_51358 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51360__$1,inst_51358);
} else {
if((state_val_51361 === (12))){
var inst_51335 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51382_52454 = state_51360__$1;
(statearr_51382_52454[(2)] = inst_51335);

(statearr_51382_52454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (2))){
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51360__$1,(4),ch);
} else {
if((state_val_51361 === (23))){
var state_51360__$1 = state_51360;
var statearr_51383_52455 = state_51360__$1;
(statearr_51383_52455[(2)] = null);

(statearr_51383_52455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (19))){
var inst_51341 = (state_51360[(11)]);
var inst_51291 = (state_51360[(8)]);
var inst_51343 = cljs.core.async.muxch_STAR_(inst_51341);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51360__$1,(22),inst_51343,inst_51291);
} else {
if((state_val_51361 === (11))){
var inst_51301 = (state_51360[(13)]);
var inst_51315 = (state_51360[(10)]);
var inst_51315__$1 = cljs.core.seq(inst_51301);
var state_51360__$1 = (function (){var statearr_51384 = state_51360;
(statearr_51384[(10)] = inst_51315__$1);

return statearr_51384;
})();
if(inst_51315__$1){
var statearr_51385_52460 = state_51360__$1;
(statearr_51385_52460[(1)] = (13));

} else {
var statearr_51386_52461 = state_51360__$1;
(statearr_51386_52461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (9))){
var inst_51337 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51387_52462 = state_51360__$1;
(statearr_51387_52462[(2)] = inst_51337);

(statearr_51387_52462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (5))){
var inst_51298 = cljs.core.deref(mults);
var inst_51299 = cljs.core.vals(inst_51298);
var inst_51300 = cljs.core.seq(inst_51299);
var inst_51301 = inst_51300;
var inst_51302 = null;
var inst_51303 = (0);
var inst_51304 = (0);
var state_51360__$1 = (function (){var statearr_51388 = state_51360;
(statearr_51388[(12)] = inst_51303);

(statearr_51388[(13)] = inst_51301);

(statearr_51388[(14)] = inst_51302);

(statearr_51388[(15)] = inst_51304);

return statearr_51388;
})();
var statearr_51389_52465 = state_51360__$1;
(statearr_51389_52465[(2)] = null);

(statearr_51389_52465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (14))){
var state_51360__$1 = state_51360;
var statearr_51393_52466 = state_51360__$1;
(statearr_51393_52466[(2)] = null);

(statearr_51393_52466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (16))){
var inst_51315 = (state_51360[(10)]);
var inst_51319 = cljs.core.chunk_first(inst_51315);
var inst_51320 = cljs.core.chunk_rest(inst_51315);
var inst_51321 = cljs.core.count(inst_51319);
var inst_51301 = inst_51320;
var inst_51302 = inst_51319;
var inst_51303 = inst_51321;
var inst_51304 = (0);
var state_51360__$1 = (function (){var statearr_51394 = state_51360;
(statearr_51394[(12)] = inst_51303);

(statearr_51394[(13)] = inst_51301);

(statearr_51394[(14)] = inst_51302);

(statearr_51394[(15)] = inst_51304);

return statearr_51394;
})();
var statearr_51395_52471 = state_51360__$1;
(statearr_51395_52471[(2)] = null);

(statearr_51395_52471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (10))){
var inst_51303 = (state_51360[(12)]);
var inst_51301 = (state_51360[(13)]);
var inst_51302 = (state_51360[(14)]);
var inst_51304 = (state_51360[(15)]);
var inst_51309 = cljs.core._nth(inst_51302,inst_51304);
var inst_51310 = cljs.core.async.muxch_STAR_(inst_51309);
var inst_51311 = cljs.core.async.close_BANG_(inst_51310);
var inst_51312 = (inst_51304 + (1));
var tmp51390 = inst_51303;
var tmp51391 = inst_51301;
var tmp51392 = inst_51302;
var inst_51301__$1 = tmp51391;
var inst_51302__$1 = tmp51392;
var inst_51303__$1 = tmp51390;
var inst_51304__$1 = inst_51312;
var state_51360__$1 = (function (){var statearr_51396 = state_51360;
(statearr_51396[(12)] = inst_51303__$1);

(statearr_51396[(13)] = inst_51301__$1);

(statearr_51396[(14)] = inst_51302__$1);

(statearr_51396[(15)] = inst_51304__$1);

(statearr_51396[(17)] = inst_51311);

return statearr_51396;
})();
var statearr_51397_52474 = state_51360__$1;
(statearr_51397_52474[(2)] = null);

(statearr_51397_52474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (18))){
var inst_51330 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51398_52475 = state_51360__$1;
(statearr_51398_52475[(2)] = inst_51330);

(statearr_51398_52475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (8))){
var inst_51303 = (state_51360[(12)]);
var inst_51304 = (state_51360[(15)]);
var inst_51306 = (inst_51304 < inst_51303);
var inst_51307 = inst_51306;
var state_51360__$1 = state_51360;
if(cljs.core.truth_(inst_51307)){
var statearr_51399_52480 = state_51360__$1;
(statearr_51399_52480[(1)] = (10));

} else {
var statearr_51400_52481 = state_51360__$1;
(statearr_51400_52481[(1)] = (11));

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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51401[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51401[(1)] = (1));

return statearr_51401;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51360){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51360);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51402){var ex__50384__auto__ = e51402;
var statearr_51403_52482 = state_51360;
(statearr_51403_52482[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51360[(4)]))){
var statearr_51404_52483 = state_51360;
(statearr_51404_52483[(1)] = cljs.core.first((state_51360[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52484 = state_51360;
state_51360 = G__52484;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51405 = f__50417__auto__();
(statearr_51405[(6)] = c__50416__auto___52424);

return statearr_51405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var G__51407 = arguments.length;
switch (G__51407) {
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
var G__51409 = arguments.length;
switch (G__51409) {
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
var G__51411 = arguments.length;
switch (G__51411) {
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
var c__50416__auto___52488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51454){
var state_val_51455 = (state_51454[(1)]);
if((state_val_51455 === (7))){
var state_51454__$1 = state_51454;
var statearr_51456_52489 = state_51454__$1;
(statearr_51456_52489[(2)] = null);

(statearr_51456_52489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (1))){
var state_51454__$1 = state_51454;
var statearr_51457_52490 = state_51454__$1;
(statearr_51457_52490[(2)] = null);

(statearr_51457_52490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (4))){
var inst_51415 = (state_51454[(7)]);
var inst_51414 = (state_51454[(8)]);
var inst_51417 = (inst_51415 < inst_51414);
var state_51454__$1 = state_51454;
if(cljs.core.truth_(inst_51417)){
var statearr_51458_52491 = state_51454__$1;
(statearr_51458_52491[(1)] = (6));

} else {
var statearr_51459_52492 = state_51454__$1;
(statearr_51459_52492[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (15))){
var inst_51440 = (state_51454[(9)]);
var inst_51445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51440);
var state_51454__$1 = state_51454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51454__$1,(17),out,inst_51445);
} else {
if((state_val_51455 === (13))){
var inst_51440 = (state_51454[(9)]);
var inst_51440__$1 = (state_51454[(2)]);
var inst_51441 = cljs.core.some(cljs.core.nil_QMARK_,inst_51440__$1);
var state_51454__$1 = (function (){var statearr_51460 = state_51454;
(statearr_51460[(9)] = inst_51440__$1);

return statearr_51460;
})();
if(cljs.core.truth_(inst_51441)){
var statearr_51461_52493 = state_51454__$1;
(statearr_51461_52493[(1)] = (14));

} else {
var statearr_51462_52494 = state_51454__$1;
(statearr_51462_52494[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (6))){
var state_51454__$1 = state_51454;
var statearr_51463_52495 = state_51454__$1;
(statearr_51463_52495[(2)] = null);

(statearr_51463_52495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (17))){
var inst_51447 = (state_51454[(2)]);
var state_51454__$1 = (function (){var statearr_51465 = state_51454;
(statearr_51465[(10)] = inst_51447);

return statearr_51465;
})();
var statearr_51466_52496 = state_51454__$1;
(statearr_51466_52496[(2)] = null);

(statearr_51466_52496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (3))){
var inst_51452 = (state_51454[(2)]);
var state_51454__$1 = state_51454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51454__$1,inst_51452);
} else {
if((state_val_51455 === (12))){
var _ = (function (){var statearr_51467 = state_51454;
(statearr_51467[(4)] = cljs.core.rest((state_51454[(4)])));

return statearr_51467;
})();
var state_51454__$1 = state_51454;
var ex51464 = (state_51454__$1[(2)]);
var statearr_51468_52499 = state_51454__$1;
(statearr_51468_52499[(5)] = ex51464);


if((ex51464 instanceof Object)){
var statearr_51469_52501 = state_51454__$1;
(statearr_51469_52501[(1)] = (11));

(statearr_51469_52501[(5)] = null);

} else {
throw ex51464;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (2))){
var inst_51413 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51414 = cnt;
var inst_51415 = (0);
var state_51454__$1 = (function (){var statearr_51470 = state_51454;
(statearr_51470[(11)] = inst_51413);

(statearr_51470[(7)] = inst_51415);

(statearr_51470[(8)] = inst_51414);

return statearr_51470;
})();
var statearr_51471_52502 = state_51454__$1;
(statearr_51471_52502[(2)] = null);

(statearr_51471_52502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (11))){
var inst_51419 = (state_51454[(2)]);
var inst_51420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51454__$1 = (function (){var statearr_51472 = state_51454;
(statearr_51472[(12)] = inst_51419);

return statearr_51472;
})();
var statearr_51473_52503 = state_51454__$1;
(statearr_51473_52503[(2)] = inst_51420);

(statearr_51473_52503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (9))){
var inst_51415 = (state_51454[(7)]);
var _ = (function (){var statearr_51474 = state_51454;
(statearr_51474[(4)] = cljs.core.cons((12),(state_51454[(4)])));

return statearr_51474;
})();
var inst_51426 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51415) : chs__$1.call(null,inst_51415));
var inst_51427 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51415) : done.call(null,inst_51415));
var inst_51428 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51426,inst_51427);
var ___$1 = (function (){var statearr_51475 = state_51454;
(statearr_51475[(4)] = cljs.core.rest((state_51454[(4)])));

return statearr_51475;
})();
var state_51454__$1 = state_51454;
var statearr_51476_52506 = state_51454__$1;
(statearr_51476_52506[(2)] = inst_51428);

(statearr_51476_52506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (5))){
var inst_51438 = (state_51454[(2)]);
var state_51454__$1 = (function (){var statearr_51477 = state_51454;
(statearr_51477[(13)] = inst_51438);

return statearr_51477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51454__$1,(13),dchan);
} else {
if((state_val_51455 === (14))){
var inst_51443 = cljs.core.async.close_BANG_(out);
var state_51454__$1 = state_51454;
var statearr_51478_52508 = state_51454__$1;
(statearr_51478_52508[(2)] = inst_51443);

(statearr_51478_52508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (16))){
var inst_51450 = (state_51454[(2)]);
var state_51454__$1 = state_51454;
var statearr_51479_52509 = state_51454__$1;
(statearr_51479_52509[(2)] = inst_51450);

(statearr_51479_52509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (10))){
var inst_51415 = (state_51454[(7)]);
var inst_51431 = (state_51454[(2)]);
var inst_51432 = (inst_51415 + (1));
var inst_51415__$1 = inst_51432;
var state_51454__$1 = (function (){var statearr_51480 = state_51454;
(statearr_51480[(14)] = inst_51431);

(statearr_51480[(7)] = inst_51415__$1);

return statearr_51480;
})();
var statearr_51481_52510 = state_51454__$1;
(statearr_51481_52510[(2)] = null);

(statearr_51481_52510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51455 === (8))){
var inst_51436 = (state_51454[(2)]);
var state_51454__$1 = state_51454;
var statearr_51482_52514 = state_51454__$1;
(statearr_51482_52514[(2)] = inst_51436);

(statearr_51482_52514[(1)] = (5));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51483[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51483[(1)] = (1));

return statearr_51483;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51454){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51454);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51484){var ex__50384__auto__ = e51484;
var statearr_51485_52515 = state_51454;
(statearr_51485_52515[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51454[(4)]))){
var statearr_51486_52516 = state_51454;
(statearr_51486_52516[(1)] = cljs.core.first((state_51454[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52517 = state_51454;
state_51454 = G__52517;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51487 = f__50417__auto__();
(statearr_51487[(6)] = c__50416__auto___52488);

return statearr_51487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var G__51490 = arguments.length;
switch (G__51490) {
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
var c__50416__auto___52519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51522){
var state_val_51523 = (state_51522[(1)]);
if((state_val_51523 === (7))){
var inst_51502 = (state_51522[(7)]);
var inst_51501 = (state_51522[(8)]);
var inst_51501__$1 = (state_51522[(2)]);
var inst_51502__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51501__$1,(0),null);
var inst_51503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51501__$1,(1),null);
var inst_51504 = (inst_51502__$1 == null);
var state_51522__$1 = (function (){var statearr_51524 = state_51522;
(statearr_51524[(7)] = inst_51502__$1);

(statearr_51524[(9)] = inst_51503);

(statearr_51524[(8)] = inst_51501__$1);

return statearr_51524;
})();
if(cljs.core.truth_(inst_51504)){
var statearr_51525_52520 = state_51522__$1;
(statearr_51525_52520[(1)] = (8));

} else {
var statearr_51526_52521 = state_51522__$1;
(statearr_51526_52521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (1))){
var inst_51491 = cljs.core.vec(chs);
var inst_51492 = inst_51491;
var state_51522__$1 = (function (){var statearr_51527 = state_51522;
(statearr_51527[(10)] = inst_51492);

return statearr_51527;
})();
var statearr_51528_52522 = state_51522__$1;
(statearr_51528_52522[(2)] = null);

(statearr_51528_52522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (4))){
var inst_51492 = (state_51522[(10)]);
var state_51522__$1 = state_51522;
return cljs.core.async.ioc_alts_BANG_(state_51522__$1,(7),inst_51492);
} else {
if((state_val_51523 === (6))){
var inst_51518 = (state_51522[(2)]);
var state_51522__$1 = state_51522;
var statearr_51529_52523 = state_51522__$1;
(statearr_51529_52523[(2)] = inst_51518);

(statearr_51529_52523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (3))){
var inst_51520 = (state_51522[(2)]);
var state_51522__$1 = state_51522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51522__$1,inst_51520);
} else {
if((state_val_51523 === (2))){
var inst_51492 = (state_51522[(10)]);
var inst_51494 = cljs.core.count(inst_51492);
var inst_51495 = (inst_51494 > (0));
var state_51522__$1 = state_51522;
if(cljs.core.truth_(inst_51495)){
var statearr_51531_52524 = state_51522__$1;
(statearr_51531_52524[(1)] = (4));

} else {
var statearr_51532_52525 = state_51522__$1;
(statearr_51532_52525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (11))){
var inst_51492 = (state_51522[(10)]);
var inst_51511 = (state_51522[(2)]);
var tmp51530 = inst_51492;
var inst_51492__$1 = tmp51530;
var state_51522__$1 = (function (){var statearr_51533 = state_51522;
(statearr_51533[(10)] = inst_51492__$1);

(statearr_51533[(11)] = inst_51511);

return statearr_51533;
})();
var statearr_51534_52526 = state_51522__$1;
(statearr_51534_52526[(2)] = null);

(statearr_51534_52526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (9))){
var inst_51502 = (state_51522[(7)]);
var state_51522__$1 = state_51522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51522__$1,(11),out,inst_51502);
} else {
if((state_val_51523 === (5))){
var inst_51516 = cljs.core.async.close_BANG_(out);
var state_51522__$1 = state_51522;
var statearr_51535_52527 = state_51522__$1;
(statearr_51535_52527[(2)] = inst_51516);

(statearr_51535_52527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (10))){
var inst_51514 = (state_51522[(2)]);
var state_51522__$1 = state_51522;
var statearr_51536_52528 = state_51522__$1;
(statearr_51536_52528[(2)] = inst_51514);

(statearr_51536_52528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (8))){
var inst_51492 = (state_51522[(10)]);
var inst_51502 = (state_51522[(7)]);
var inst_51503 = (state_51522[(9)]);
var inst_51501 = (state_51522[(8)]);
var inst_51506 = (function (){var cs = inst_51492;
var vec__51497 = inst_51501;
var v = inst_51502;
var c = inst_51503;
return (function (p1__51488_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51488_SHARP_);
});
})();
var inst_51507 = cljs.core.filterv(inst_51506,inst_51492);
var inst_51492__$1 = inst_51507;
var state_51522__$1 = (function (){var statearr_51537 = state_51522;
(statearr_51537[(10)] = inst_51492__$1);

return statearr_51537;
})();
var statearr_51538_52529 = state_51522__$1;
(statearr_51538_52529[(2)] = null);

(statearr_51538_52529[(1)] = (2));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51539[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51539[(1)] = (1));

return statearr_51539;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51522){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51522);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51540){var ex__50384__auto__ = e51540;
var statearr_51541_52530 = state_51522;
(statearr_51541_52530[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51522[(4)]))){
var statearr_51542_52531 = state_51522;
(statearr_51542_52531[(1)] = cljs.core.first((state_51522[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52532 = state_51522;
state_51522 = G__52532;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51543 = f__50417__auto__();
(statearr_51543[(6)] = c__50416__auto___52519);

return statearr_51543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
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
var G__51545 = arguments.length;
switch (G__51545) {
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
var c__50416__auto___52555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51569){
var state_val_51570 = (state_51569[(1)]);
if((state_val_51570 === (7))){
var inst_51551 = (state_51569[(7)]);
var inst_51551__$1 = (state_51569[(2)]);
var inst_51552 = (inst_51551__$1 == null);
var inst_51553 = cljs.core.not(inst_51552);
var state_51569__$1 = (function (){var statearr_51571 = state_51569;
(statearr_51571[(7)] = inst_51551__$1);

return statearr_51571;
})();
if(inst_51553){
var statearr_51572_52560 = state_51569__$1;
(statearr_51572_52560[(1)] = (8));

} else {
var statearr_51573_52561 = state_51569__$1;
(statearr_51573_52561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (1))){
var inst_51546 = (0);
var state_51569__$1 = (function (){var statearr_51574 = state_51569;
(statearr_51574[(8)] = inst_51546);

return statearr_51574;
})();
var statearr_51575_52562 = state_51569__$1;
(statearr_51575_52562[(2)] = null);

(statearr_51575_52562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (4))){
var state_51569__$1 = state_51569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51569__$1,(7),ch);
} else {
if((state_val_51570 === (6))){
var inst_51564 = (state_51569[(2)]);
var state_51569__$1 = state_51569;
var statearr_51576_52563 = state_51569__$1;
(statearr_51576_52563[(2)] = inst_51564);

(statearr_51576_52563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (3))){
var inst_51566 = (state_51569[(2)]);
var inst_51567 = cljs.core.async.close_BANG_(out);
var state_51569__$1 = (function (){var statearr_51577 = state_51569;
(statearr_51577[(9)] = inst_51566);

return statearr_51577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51569__$1,inst_51567);
} else {
if((state_val_51570 === (2))){
var inst_51546 = (state_51569[(8)]);
var inst_51548 = (inst_51546 < n);
var state_51569__$1 = state_51569;
if(cljs.core.truth_(inst_51548)){
var statearr_51578_52564 = state_51569__$1;
(statearr_51578_52564[(1)] = (4));

} else {
var statearr_51579_52565 = state_51569__$1;
(statearr_51579_52565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (11))){
var inst_51546 = (state_51569[(8)]);
var inst_51556 = (state_51569[(2)]);
var inst_51557 = (inst_51546 + (1));
var inst_51546__$1 = inst_51557;
var state_51569__$1 = (function (){var statearr_51580 = state_51569;
(statearr_51580[(10)] = inst_51556);

(statearr_51580[(8)] = inst_51546__$1);

return statearr_51580;
})();
var statearr_51581_52566 = state_51569__$1;
(statearr_51581_52566[(2)] = null);

(statearr_51581_52566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (9))){
var state_51569__$1 = state_51569;
var statearr_51582_52567 = state_51569__$1;
(statearr_51582_52567[(2)] = null);

(statearr_51582_52567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (5))){
var state_51569__$1 = state_51569;
var statearr_51583_52568 = state_51569__$1;
(statearr_51583_52568[(2)] = null);

(statearr_51583_52568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (10))){
var inst_51561 = (state_51569[(2)]);
var state_51569__$1 = state_51569;
var statearr_51584_52569 = state_51569__$1;
(statearr_51584_52569[(2)] = inst_51561);

(statearr_51584_52569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51570 === (8))){
var inst_51551 = (state_51569[(7)]);
var state_51569__$1 = state_51569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51569__$1,(11),out,inst_51551);
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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51585[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51585[(1)] = (1));

return statearr_51585;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51569){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51569);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51586){var ex__50384__auto__ = e51586;
var statearr_51587_52573 = state_51569;
(statearr_51587_52573[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51569[(4)]))){
var statearr_51588_52574 = state_51569;
(statearr_51588_52574[(1)] = cljs.core.first((state_51569[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52575 = state_51569;
state_51569 = G__52575;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51589 = f__50417__auto__();
(statearr_51589[(6)] = c__50416__auto___52555);

return statearr_51589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51591 = (function (f,ch,meta51592){
this.f = f;
this.ch = ch;
this.meta51592 = meta51592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51593,meta51592__$1){
var self__ = this;
var _51593__$1 = this;
return (new cljs.core.async.t_cljs$core$async51591(self__.f,self__.ch,meta51592__$1));
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51593){
var self__ = this;
var _51593__$1 = this;
return self__.meta51592;
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51594 = (function (f,ch,meta51592,_,fn1,meta51595){
this.f = f;
this.ch = ch;
this.meta51592 = meta51592;
this._ = _;
this.fn1 = fn1;
this.meta51595 = meta51595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51596,meta51595__$1){
var self__ = this;
var _51596__$1 = this;
return (new cljs.core.async.t_cljs$core$async51594(self__.f,self__.ch,self__.meta51592,self__._,self__.fn1,meta51595__$1));
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51596){
var self__ = this;
var _51596__$1 = this;
return self__.meta51595;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51590_SHARP_){
var G__51597 = (((p1__51590_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51590_SHARP_) : self__.f.call(null,p1__51590_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51597) : f1.call(null,G__51597));
});
}));

(cljs.core.async.t_cljs$core$async51594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51592","meta51592",402010430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51591","cljs.core.async/t_cljs$core$async51591",777632970,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51595","meta51595",911476009,null)], null);
}));

(cljs.core.async.t_cljs$core$async51594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51594");

(cljs.core.async.t_cljs$core$async51594.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51594.
 */
cljs.core.async.__GT_t_cljs$core$async51594 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51594(f__$1,ch__$1,meta51592__$1,___$2,fn1__$1,meta51595){
return (new cljs.core.async.t_cljs$core$async51594(f__$1,ch__$1,meta51592__$1,___$2,fn1__$1,meta51595));
});

}

return (new cljs.core.async.t_cljs$core$async51594(self__.f,self__.ch,self__.meta51592,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51598 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51598) : self__.f.call(null,G__51598));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51592","meta51592",402010430,null)], null);
}));

(cljs.core.async.t_cljs$core$async51591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51591");

(cljs.core.async.t_cljs$core$async51591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51591.
 */
cljs.core.async.__GT_t_cljs$core$async51591 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51591(f__$1,ch__$1,meta51592){
return (new cljs.core.async.t_cljs$core$async51591(f__$1,ch__$1,meta51592));
});

}

return (new cljs.core.async.t_cljs$core$async51591(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51599 = (function (f,ch,meta51600){
this.f = f;
this.ch = ch;
this.meta51600 = meta51600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51601,meta51600__$1){
var self__ = this;
var _51601__$1 = this;
return (new cljs.core.async.t_cljs$core$async51599(self__.f,self__.ch,meta51600__$1));
}));

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51601){
var self__ = this;
var _51601__$1 = this;
return self__.meta51600;
}));

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51600","meta51600",1035762852,null)], null);
}));

(cljs.core.async.t_cljs$core$async51599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51599");

(cljs.core.async.t_cljs$core$async51599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51599.
 */
cljs.core.async.__GT_t_cljs$core$async51599 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51599(f__$1,ch__$1,meta51600){
return (new cljs.core.async.t_cljs$core$async51599(f__$1,ch__$1,meta51600));
});

}

return (new cljs.core.async.t_cljs$core$async51599(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51602 = (function (p,ch,meta51603){
this.p = p;
this.ch = ch;
this.meta51603 = meta51603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51604,meta51603__$1){
var self__ = this;
var _51604__$1 = this;
return (new cljs.core.async.t_cljs$core$async51602(self__.p,self__.ch,meta51603__$1));
}));

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51604){
var self__ = this;
var _51604__$1 = this;
return self__.meta51603;
}));

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51603","meta51603",-1538006993,null)], null);
}));

(cljs.core.async.t_cljs$core$async51602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51602");

(cljs.core.async.t_cljs$core$async51602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51602.
 */
cljs.core.async.__GT_t_cljs$core$async51602 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51602(p__$1,ch__$1,meta51603){
return (new cljs.core.async.t_cljs$core$async51602(p__$1,ch__$1,meta51603));
});

}

return (new cljs.core.async.t_cljs$core$async51602(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51606 = arguments.length;
switch (G__51606) {
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
var c__50416__auto___52595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51627){
var state_val_51628 = (state_51627[(1)]);
if((state_val_51628 === (7))){
var inst_51623 = (state_51627[(2)]);
var state_51627__$1 = state_51627;
var statearr_51629_52596 = state_51627__$1;
(statearr_51629_52596[(2)] = inst_51623);

(statearr_51629_52596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (1))){
var state_51627__$1 = state_51627;
var statearr_51630_52597 = state_51627__$1;
(statearr_51630_52597[(2)] = null);

(statearr_51630_52597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (4))){
var inst_51609 = (state_51627[(7)]);
var inst_51609__$1 = (state_51627[(2)]);
var inst_51610 = (inst_51609__$1 == null);
var state_51627__$1 = (function (){var statearr_51631 = state_51627;
(statearr_51631[(7)] = inst_51609__$1);

return statearr_51631;
})();
if(cljs.core.truth_(inst_51610)){
var statearr_51632_52601 = state_51627__$1;
(statearr_51632_52601[(1)] = (5));

} else {
var statearr_51633_52602 = state_51627__$1;
(statearr_51633_52602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (6))){
var inst_51609 = (state_51627[(7)]);
var inst_51614 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51609) : p.call(null,inst_51609));
var state_51627__$1 = state_51627;
if(cljs.core.truth_(inst_51614)){
var statearr_51634_52603 = state_51627__$1;
(statearr_51634_52603[(1)] = (8));

} else {
var statearr_51635_52604 = state_51627__$1;
(statearr_51635_52604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (3))){
var inst_51625 = (state_51627[(2)]);
var state_51627__$1 = state_51627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51627__$1,inst_51625);
} else {
if((state_val_51628 === (2))){
var state_51627__$1 = state_51627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51627__$1,(4),ch);
} else {
if((state_val_51628 === (11))){
var inst_51617 = (state_51627[(2)]);
var state_51627__$1 = state_51627;
var statearr_51636_52606 = state_51627__$1;
(statearr_51636_52606[(2)] = inst_51617);

(statearr_51636_52606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (9))){
var state_51627__$1 = state_51627;
var statearr_51637_52609 = state_51627__$1;
(statearr_51637_52609[(2)] = null);

(statearr_51637_52609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (5))){
var inst_51612 = cljs.core.async.close_BANG_(out);
var state_51627__$1 = state_51627;
var statearr_51638_52610 = state_51627__$1;
(statearr_51638_52610[(2)] = inst_51612);

(statearr_51638_52610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (10))){
var inst_51620 = (state_51627[(2)]);
var state_51627__$1 = (function (){var statearr_51639 = state_51627;
(statearr_51639[(8)] = inst_51620);

return statearr_51639;
})();
var statearr_51640_52611 = state_51627__$1;
(statearr_51640_52611[(2)] = null);

(statearr_51640_52611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51628 === (8))){
var inst_51609 = (state_51627[(7)]);
var state_51627__$1 = state_51627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51627__$1,(11),out,inst_51609);
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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51641 = [null,null,null,null,null,null,null,null,null];
(statearr_51641[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51641[(1)] = (1));

return statearr_51641;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51627){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51627);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51642){var ex__50384__auto__ = e51642;
var statearr_51643_52615 = state_51627;
(statearr_51643_52615[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51627[(4)]))){
var statearr_51644_52616 = state_51627;
(statearr_51644_52616[(1)] = cljs.core.first((state_51627[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52617 = state_51627;
state_51627 = G__52617;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51645 = f__50417__auto__();
(statearr_51645[(6)] = c__50416__auto___52595);

return statearr_51645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51647 = arguments.length;
switch (G__51647) {
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
var c__50416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51709){
var state_val_51710 = (state_51709[(1)]);
if((state_val_51710 === (7))){
var inst_51705 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
var statearr_51711_52619 = state_51709__$1;
(statearr_51711_52619[(2)] = inst_51705);

(statearr_51711_52619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (20))){
var inst_51675 = (state_51709[(7)]);
var inst_51686 = (state_51709[(2)]);
var inst_51687 = cljs.core.next(inst_51675);
var inst_51661 = inst_51687;
var inst_51662 = null;
var inst_51663 = (0);
var inst_51664 = (0);
var state_51709__$1 = (function (){var statearr_51712 = state_51709;
(statearr_51712[(8)] = inst_51663);

(statearr_51712[(9)] = inst_51664);

(statearr_51712[(10)] = inst_51686);

(statearr_51712[(11)] = inst_51661);

(statearr_51712[(12)] = inst_51662);

return statearr_51712;
})();
var statearr_51713_52620 = state_51709__$1;
(statearr_51713_52620[(2)] = null);

(statearr_51713_52620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (1))){
var state_51709__$1 = state_51709;
var statearr_51714_52621 = state_51709__$1;
(statearr_51714_52621[(2)] = null);

(statearr_51714_52621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (4))){
var inst_51650 = (state_51709[(13)]);
var inst_51650__$1 = (state_51709[(2)]);
var inst_51651 = (inst_51650__$1 == null);
var state_51709__$1 = (function (){var statearr_51715 = state_51709;
(statearr_51715[(13)] = inst_51650__$1);

return statearr_51715;
})();
if(cljs.core.truth_(inst_51651)){
var statearr_51716_52622 = state_51709__$1;
(statearr_51716_52622[(1)] = (5));

} else {
var statearr_51717_52623 = state_51709__$1;
(statearr_51717_52623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (15))){
var state_51709__$1 = state_51709;
var statearr_51721_52624 = state_51709__$1;
(statearr_51721_52624[(2)] = null);

(statearr_51721_52624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (21))){
var state_51709__$1 = state_51709;
var statearr_51722_52625 = state_51709__$1;
(statearr_51722_52625[(2)] = null);

(statearr_51722_52625[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (13))){
var inst_51663 = (state_51709[(8)]);
var inst_51664 = (state_51709[(9)]);
var inst_51661 = (state_51709[(11)]);
var inst_51662 = (state_51709[(12)]);
var inst_51671 = (state_51709[(2)]);
var inst_51672 = (inst_51664 + (1));
var tmp51718 = inst_51663;
var tmp51719 = inst_51661;
var tmp51720 = inst_51662;
var inst_51661__$1 = tmp51719;
var inst_51662__$1 = tmp51720;
var inst_51663__$1 = tmp51718;
var inst_51664__$1 = inst_51672;
var state_51709__$1 = (function (){var statearr_51723 = state_51709;
(statearr_51723[(8)] = inst_51663__$1);

(statearr_51723[(9)] = inst_51664__$1);

(statearr_51723[(14)] = inst_51671);

(statearr_51723[(11)] = inst_51661__$1);

(statearr_51723[(12)] = inst_51662__$1);

return statearr_51723;
})();
var statearr_51724_52626 = state_51709__$1;
(statearr_51724_52626[(2)] = null);

(statearr_51724_52626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (22))){
var state_51709__$1 = state_51709;
var statearr_51725_52627 = state_51709__$1;
(statearr_51725_52627[(2)] = null);

(statearr_51725_52627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (6))){
var inst_51650 = (state_51709[(13)]);
var inst_51659 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51650) : f.call(null,inst_51650));
var inst_51660 = cljs.core.seq(inst_51659);
var inst_51661 = inst_51660;
var inst_51662 = null;
var inst_51663 = (0);
var inst_51664 = (0);
var state_51709__$1 = (function (){var statearr_51726 = state_51709;
(statearr_51726[(8)] = inst_51663);

(statearr_51726[(9)] = inst_51664);

(statearr_51726[(11)] = inst_51661);

(statearr_51726[(12)] = inst_51662);

return statearr_51726;
})();
var statearr_51727_52628 = state_51709__$1;
(statearr_51727_52628[(2)] = null);

(statearr_51727_52628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (17))){
var inst_51675 = (state_51709[(7)]);
var inst_51679 = cljs.core.chunk_first(inst_51675);
var inst_51680 = cljs.core.chunk_rest(inst_51675);
var inst_51681 = cljs.core.count(inst_51679);
var inst_51661 = inst_51680;
var inst_51662 = inst_51679;
var inst_51663 = inst_51681;
var inst_51664 = (0);
var state_51709__$1 = (function (){var statearr_51728 = state_51709;
(statearr_51728[(8)] = inst_51663);

(statearr_51728[(9)] = inst_51664);

(statearr_51728[(11)] = inst_51661);

(statearr_51728[(12)] = inst_51662);

return statearr_51728;
})();
var statearr_51729_52629 = state_51709__$1;
(statearr_51729_52629[(2)] = null);

(statearr_51729_52629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (3))){
var inst_51707 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51709__$1,inst_51707);
} else {
if((state_val_51710 === (12))){
var inst_51695 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
var statearr_51730_52630 = state_51709__$1;
(statearr_51730_52630[(2)] = inst_51695);

(statearr_51730_52630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (2))){
var state_51709__$1 = state_51709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51709__$1,(4),in$);
} else {
if((state_val_51710 === (23))){
var inst_51703 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
var statearr_51731_52631 = state_51709__$1;
(statearr_51731_52631[(2)] = inst_51703);

(statearr_51731_52631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (19))){
var inst_51690 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
var statearr_51732_52632 = state_51709__$1;
(statearr_51732_52632[(2)] = inst_51690);

(statearr_51732_52632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (11))){
var inst_51675 = (state_51709[(7)]);
var inst_51661 = (state_51709[(11)]);
var inst_51675__$1 = cljs.core.seq(inst_51661);
var state_51709__$1 = (function (){var statearr_51733 = state_51709;
(statearr_51733[(7)] = inst_51675__$1);

return statearr_51733;
})();
if(inst_51675__$1){
var statearr_51734_52633 = state_51709__$1;
(statearr_51734_52633[(1)] = (14));

} else {
var statearr_51735_52634 = state_51709__$1;
(statearr_51735_52634[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (9))){
var inst_51697 = (state_51709[(2)]);
var inst_51698 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51709__$1 = (function (){var statearr_51736 = state_51709;
(statearr_51736[(15)] = inst_51697);

return statearr_51736;
})();
if(cljs.core.truth_(inst_51698)){
var statearr_51737_52635 = state_51709__$1;
(statearr_51737_52635[(1)] = (21));

} else {
var statearr_51738_52636 = state_51709__$1;
(statearr_51738_52636[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (5))){
var inst_51653 = cljs.core.async.close_BANG_(out);
var state_51709__$1 = state_51709;
var statearr_51739_52637 = state_51709__$1;
(statearr_51739_52637[(2)] = inst_51653);

(statearr_51739_52637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (14))){
var inst_51675 = (state_51709[(7)]);
var inst_51677 = cljs.core.chunked_seq_QMARK_(inst_51675);
var state_51709__$1 = state_51709;
if(inst_51677){
var statearr_51740_52638 = state_51709__$1;
(statearr_51740_52638[(1)] = (17));

} else {
var statearr_51741_52639 = state_51709__$1;
(statearr_51741_52639[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (16))){
var inst_51693 = (state_51709[(2)]);
var state_51709__$1 = state_51709;
var statearr_51742_52640 = state_51709__$1;
(statearr_51742_52640[(2)] = inst_51693);

(statearr_51742_52640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51710 === (10))){
var inst_51664 = (state_51709[(9)]);
var inst_51662 = (state_51709[(12)]);
var inst_51669 = cljs.core._nth(inst_51662,inst_51664);
var state_51709__$1 = state_51709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51709__$1,(13),out,inst_51669);
} else {
if((state_val_51710 === (18))){
var inst_51675 = (state_51709[(7)]);
var inst_51684 = cljs.core.first(inst_51675);
var state_51709__$1 = state_51709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51709__$1,(20),out,inst_51684);
} else {
if((state_val_51710 === (8))){
var inst_51663 = (state_51709[(8)]);
var inst_51664 = (state_51709[(9)]);
var inst_51666 = (inst_51664 < inst_51663);
var inst_51667 = inst_51666;
var state_51709__$1 = state_51709;
if(cljs.core.truth_(inst_51667)){
var statearr_51743_52641 = state_51709__$1;
(statearr_51743_52641[(1)] = (10));

} else {
var statearr_51744_52642 = state_51709__$1;
(statearr_51744_52642[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____0 = (function (){
var statearr_51745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51745[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__);

(statearr_51745[(1)] = (1));

return statearr_51745;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____1 = (function (state_51709){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51709);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51746){var ex__50384__auto__ = e51746;
var statearr_51747_52643 = state_51709;
(statearr_51747_52643[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51709[(4)]))){
var statearr_51748_52644 = state_51709;
(statearr_51748_52644[(1)] = cljs.core.first((state_51709[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52645 = state_51709;
state_51709 = G__52645;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__ = function(state_51709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____1.call(this,state_51709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50381__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51749 = f__50417__auto__();
(statearr_51749[(6)] = c__50416__auto__);

return statearr_51749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));

return c__50416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51751 = arguments.length;
switch (G__51751) {
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
var G__51753 = arguments.length;
switch (G__51753) {
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
var G__51755 = arguments.length;
switch (G__51755) {
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
var c__50416__auto___52649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51779){
var state_val_51780 = (state_51779[(1)]);
if((state_val_51780 === (7))){
var inst_51774 = (state_51779[(2)]);
var state_51779__$1 = state_51779;
var statearr_51781_52650 = state_51779__$1;
(statearr_51781_52650[(2)] = inst_51774);

(statearr_51781_52650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (1))){
var inst_51756 = null;
var state_51779__$1 = (function (){var statearr_51782 = state_51779;
(statearr_51782[(7)] = inst_51756);

return statearr_51782;
})();
var statearr_51783_52651 = state_51779__$1;
(statearr_51783_52651[(2)] = null);

(statearr_51783_52651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (4))){
var inst_51759 = (state_51779[(8)]);
var inst_51759__$1 = (state_51779[(2)]);
var inst_51760 = (inst_51759__$1 == null);
var inst_51761 = cljs.core.not(inst_51760);
var state_51779__$1 = (function (){var statearr_51784 = state_51779;
(statearr_51784[(8)] = inst_51759__$1);

return statearr_51784;
})();
if(inst_51761){
var statearr_51785_52652 = state_51779__$1;
(statearr_51785_52652[(1)] = (5));

} else {
var statearr_51786_52653 = state_51779__$1;
(statearr_51786_52653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (6))){
var state_51779__$1 = state_51779;
var statearr_51787_52654 = state_51779__$1;
(statearr_51787_52654[(2)] = null);

(statearr_51787_52654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (3))){
var inst_51776 = (state_51779[(2)]);
var inst_51777 = cljs.core.async.close_BANG_(out);
var state_51779__$1 = (function (){var statearr_51788 = state_51779;
(statearr_51788[(9)] = inst_51776);

return statearr_51788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51779__$1,inst_51777);
} else {
if((state_val_51780 === (2))){
var state_51779__$1 = state_51779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51779__$1,(4),ch);
} else {
if((state_val_51780 === (11))){
var inst_51759 = (state_51779[(8)]);
var inst_51768 = (state_51779[(2)]);
var inst_51756 = inst_51759;
var state_51779__$1 = (function (){var statearr_51789 = state_51779;
(statearr_51789[(7)] = inst_51756);

(statearr_51789[(10)] = inst_51768);

return statearr_51789;
})();
var statearr_51790_52655 = state_51779__$1;
(statearr_51790_52655[(2)] = null);

(statearr_51790_52655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (9))){
var inst_51759 = (state_51779[(8)]);
var state_51779__$1 = state_51779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51779__$1,(11),out,inst_51759);
} else {
if((state_val_51780 === (5))){
var inst_51756 = (state_51779[(7)]);
var inst_51759 = (state_51779[(8)]);
var inst_51763 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51759,inst_51756);
var state_51779__$1 = state_51779;
if(inst_51763){
var statearr_51792_52656 = state_51779__$1;
(statearr_51792_52656[(1)] = (8));

} else {
var statearr_51793_52657 = state_51779__$1;
(statearr_51793_52657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (10))){
var inst_51771 = (state_51779[(2)]);
var state_51779__$1 = state_51779;
var statearr_51794_52658 = state_51779__$1;
(statearr_51794_52658[(2)] = inst_51771);

(statearr_51794_52658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51780 === (8))){
var inst_51756 = (state_51779[(7)]);
var tmp51791 = inst_51756;
var inst_51756__$1 = tmp51791;
var state_51779__$1 = (function (){var statearr_51795 = state_51779;
(statearr_51795[(7)] = inst_51756__$1);

return statearr_51795;
})();
var statearr_51796_52659 = state_51779__$1;
(statearr_51796_52659[(2)] = null);

(statearr_51796_52659[(1)] = (2));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51797[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51797[(1)] = (1));

return statearr_51797;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51779){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51779);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51798){var ex__50384__auto__ = e51798;
var statearr_51799_52660 = state_51779;
(statearr_51799_52660[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51779[(4)]))){
var statearr_51800_52661 = state_51779;
(statearr_51800_52661[(1)] = cljs.core.first((state_51779[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52662 = state_51779;
state_51779 = G__52662;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51801 = f__50417__auto__();
(statearr_51801[(6)] = c__50416__auto___52649);

return statearr_51801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51803 = arguments.length;
switch (G__51803) {
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
var c__50416__auto___52664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51841){
var state_val_51842 = (state_51841[(1)]);
if((state_val_51842 === (7))){
var inst_51837 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
var statearr_51843_52665 = state_51841__$1;
(statearr_51843_52665[(2)] = inst_51837);

(statearr_51843_52665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (1))){
var inst_51804 = (new Array(n));
var inst_51805 = inst_51804;
var inst_51806 = (0);
var state_51841__$1 = (function (){var statearr_51844 = state_51841;
(statearr_51844[(7)] = inst_51806);

(statearr_51844[(8)] = inst_51805);

return statearr_51844;
})();
var statearr_51845_52666 = state_51841__$1;
(statearr_51845_52666[(2)] = null);

(statearr_51845_52666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (4))){
var inst_51809 = (state_51841[(9)]);
var inst_51809__$1 = (state_51841[(2)]);
var inst_51810 = (inst_51809__$1 == null);
var inst_51811 = cljs.core.not(inst_51810);
var state_51841__$1 = (function (){var statearr_51846 = state_51841;
(statearr_51846[(9)] = inst_51809__$1);

return statearr_51846;
})();
if(inst_51811){
var statearr_51847_52667 = state_51841__$1;
(statearr_51847_52667[(1)] = (5));

} else {
var statearr_51848_52668 = state_51841__$1;
(statearr_51848_52668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (15))){
var inst_51831 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
var statearr_51849_52669 = state_51841__$1;
(statearr_51849_52669[(2)] = inst_51831);

(statearr_51849_52669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (13))){
var state_51841__$1 = state_51841;
var statearr_51850_52670 = state_51841__$1;
(statearr_51850_52670[(2)] = null);

(statearr_51850_52670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (6))){
var inst_51806 = (state_51841[(7)]);
var inst_51827 = (inst_51806 > (0));
var state_51841__$1 = state_51841;
if(cljs.core.truth_(inst_51827)){
var statearr_51851_52671 = state_51841__$1;
(statearr_51851_52671[(1)] = (12));

} else {
var statearr_51852_52672 = state_51841__$1;
(statearr_51852_52672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (3))){
var inst_51839 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51841__$1,inst_51839);
} else {
if((state_val_51842 === (12))){
var inst_51805 = (state_51841[(8)]);
var inst_51829 = cljs.core.vec(inst_51805);
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51841__$1,(15),out,inst_51829);
} else {
if((state_val_51842 === (2))){
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51841__$1,(4),ch);
} else {
if((state_val_51842 === (11))){
var inst_51821 = (state_51841[(2)]);
var inst_51822 = (new Array(n));
var inst_51805 = inst_51822;
var inst_51806 = (0);
var state_51841__$1 = (function (){var statearr_51853 = state_51841;
(statearr_51853[(7)] = inst_51806);

(statearr_51853[(8)] = inst_51805);

(statearr_51853[(10)] = inst_51821);

return statearr_51853;
})();
var statearr_51854_52673 = state_51841__$1;
(statearr_51854_52673[(2)] = null);

(statearr_51854_52673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (9))){
var inst_51805 = (state_51841[(8)]);
var inst_51819 = cljs.core.vec(inst_51805);
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51841__$1,(11),out,inst_51819);
} else {
if((state_val_51842 === (5))){
var inst_51806 = (state_51841[(7)]);
var inst_51805 = (state_51841[(8)]);
var inst_51809 = (state_51841[(9)]);
var inst_51814 = (state_51841[(11)]);
var inst_51813 = (inst_51805[inst_51806] = inst_51809);
var inst_51814__$1 = (inst_51806 + (1));
var inst_51815 = (inst_51814__$1 < n);
var state_51841__$1 = (function (){var statearr_51855 = state_51841;
(statearr_51855[(12)] = inst_51813);

(statearr_51855[(11)] = inst_51814__$1);

return statearr_51855;
})();
if(cljs.core.truth_(inst_51815)){
var statearr_51856_52674 = state_51841__$1;
(statearr_51856_52674[(1)] = (8));

} else {
var statearr_51857_52675 = state_51841__$1;
(statearr_51857_52675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (14))){
var inst_51834 = (state_51841[(2)]);
var inst_51835 = cljs.core.async.close_BANG_(out);
var state_51841__$1 = (function (){var statearr_51859 = state_51841;
(statearr_51859[(13)] = inst_51834);

return statearr_51859;
})();
var statearr_51860_52676 = state_51841__$1;
(statearr_51860_52676[(2)] = inst_51835);

(statearr_51860_52676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (10))){
var inst_51825 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
var statearr_51861_52677 = state_51841__$1;
(statearr_51861_52677[(2)] = inst_51825);

(statearr_51861_52677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (8))){
var inst_51805 = (state_51841[(8)]);
var inst_51814 = (state_51841[(11)]);
var tmp51858 = inst_51805;
var inst_51805__$1 = tmp51858;
var inst_51806 = inst_51814;
var state_51841__$1 = (function (){var statearr_51862 = state_51841;
(statearr_51862[(7)] = inst_51806);

(statearr_51862[(8)] = inst_51805__$1);

return statearr_51862;
})();
var statearr_51863_52678 = state_51841__$1;
(statearr_51863_52678[(2)] = null);

(statearr_51863_52678[(1)] = (2));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51864[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51864[(1)] = (1));

return statearr_51864;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51841){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51841);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51865){var ex__50384__auto__ = e51865;
var statearr_51866_52679 = state_51841;
(statearr_51866_52679[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51841[(4)]))){
var statearr_51867_52680 = state_51841;
(statearr_51867_52680[(1)] = cljs.core.first((state_51841[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52681 = state_51841;
state_51841 = G__52681;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51868 = f__50417__auto__();
(statearr_51868[(6)] = c__50416__auto___52664);

return statearr_51868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51870 = arguments.length;
switch (G__51870) {
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
var c__50416__auto___52683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50417__auto__ = (function (){var switch__50380__auto__ = (function (state_51912){
var state_val_51913 = (state_51912[(1)]);
if((state_val_51913 === (7))){
var inst_51908 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
var statearr_51914_52684 = state_51912__$1;
(statearr_51914_52684[(2)] = inst_51908);

(statearr_51914_52684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (1))){
var inst_51871 = [];
var inst_51872 = inst_51871;
var inst_51873 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51912__$1 = (function (){var statearr_51915 = state_51912;
(statearr_51915[(7)] = inst_51873);

(statearr_51915[(8)] = inst_51872);

return statearr_51915;
})();
var statearr_51916_52685 = state_51912__$1;
(statearr_51916_52685[(2)] = null);

(statearr_51916_52685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (4))){
var inst_51876 = (state_51912[(9)]);
var inst_51876__$1 = (state_51912[(2)]);
var inst_51877 = (inst_51876__$1 == null);
var inst_51878 = cljs.core.not(inst_51877);
var state_51912__$1 = (function (){var statearr_51917 = state_51912;
(statearr_51917[(9)] = inst_51876__$1);

return statearr_51917;
})();
if(inst_51878){
var statearr_51918_52686 = state_51912__$1;
(statearr_51918_52686[(1)] = (5));

} else {
var statearr_51919_52687 = state_51912__$1;
(statearr_51919_52687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (15))){
var inst_51902 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
var statearr_51920_52688 = state_51912__$1;
(statearr_51920_52688[(2)] = inst_51902);

(statearr_51920_52688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (13))){
var state_51912__$1 = state_51912;
var statearr_51921_52689 = state_51912__$1;
(statearr_51921_52689[(2)] = null);

(statearr_51921_52689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (6))){
var inst_51872 = (state_51912[(8)]);
var inst_51897 = inst_51872.length;
var inst_51898 = (inst_51897 > (0));
var state_51912__$1 = state_51912;
if(cljs.core.truth_(inst_51898)){
var statearr_51922_52690 = state_51912__$1;
(statearr_51922_52690[(1)] = (12));

} else {
var statearr_51923_52691 = state_51912__$1;
(statearr_51923_52691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (3))){
var inst_51910 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51912__$1,inst_51910);
} else {
if((state_val_51913 === (12))){
var inst_51872 = (state_51912[(8)]);
var inst_51900 = cljs.core.vec(inst_51872);
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51912__$1,(15),out,inst_51900);
} else {
if((state_val_51913 === (2))){
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51912__$1,(4),ch);
} else {
if((state_val_51913 === (11))){
var inst_51880 = (state_51912[(10)]);
var inst_51876 = (state_51912[(9)]);
var inst_51890 = (state_51912[(2)]);
var inst_51891 = [];
var inst_51892 = inst_51891.push(inst_51876);
var inst_51872 = inst_51891;
var inst_51873 = inst_51880;
var state_51912__$1 = (function (){var statearr_51924 = state_51912;
(statearr_51924[(7)] = inst_51873);

(statearr_51924[(11)] = inst_51890);

(statearr_51924[(8)] = inst_51872);

(statearr_51924[(12)] = inst_51892);

return statearr_51924;
})();
var statearr_51925_52692 = state_51912__$1;
(statearr_51925_52692[(2)] = null);

(statearr_51925_52692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (9))){
var inst_51872 = (state_51912[(8)]);
var inst_51888 = cljs.core.vec(inst_51872);
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51912__$1,(11),out,inst_51888);
} else {
if((state_val_51913 === (5))){
var inst_51873 = (state_51912[(7)]);
var inst_51880 = (state_51912[(10)]);
var inst_51876 = (state_51912[(9)]);
var inst_51880__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51876) : f.call(null,inst_51876));
var inst_51881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51880__$1,inst_51873);
var inst_51882 = cljs.core.keyword_identical_QMARK_(inst_51873,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51883 = ((inst_51881) || (inst_51882));
var state_51912__$1 = (function (){var statearr_51926 = state_51912;
(statearr_51926[(10)] = inst_51880__$1);

return statearr_51926;
})();
if(cljs.core.truth_(inst_51883)){
var statearr_51927_52693 = state_51912__$1;
(statearr_51927_52693[(1)] = (8));

} else {
var statearr_51928_52694 = state_51912__$1;
(statearr_51928_52694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (14))){
var inst_51905 = (state_51912[(2)]);
var inst_51906 = cljs.core.async.close_BANG_(out);
var state_51912__$1 = (function (){var statearr_51930 = state_51912;
(statearr_51930[(13)] = inst_51905);

return statearr_51930;
})();
var statearr_51931_52695 = state_51912__$1;
(statearr_51931_52695[(2)] = inst_51906);

(statearr_51931_52695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (10))){
var inst_51895 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
var statearr_51932_52696 = state_51912__$1;
(statearr_51932_52696[(2)] = inst_51895);

(statearr_51932_52696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (8))){
var inst_51880 = (state_51912[(10)]);
var inst_51872 = (state_51912[(8)]);
var inst_51876 = (state_51912[(9)]);
var inst_51885 = inst_51872.push(inst_51876);
var tmp51929 = inst_51872;
var inst_51872__$1 = tmp51929;
var inst_51873 = inst_51880;
var state_51912__$1 = (function (){var statearr_51933 = state_51912;
(statearr_51933[(7)] = inst_51873);

(statearr_51933[(8)] = inst_51872__$1);

(statearr_51933[(14)] = inst_51885);

return statearr_51933;
})();
var statearr_51934_52697 = state_51912__$1;
(statearr_51934_52697[(2)] = null);

(statearr_51934_52697[(1)] = (2));


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
var cljs$core$async$state_machine__50381__auto__ = null;
var cljs$core$async$state_machine__50381__auto____0 = (function (){
var statearr_51935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51935[(0)] = cljs$core$async$state_machine__50381__auto__);

(statearr_51935[(1)] = (1));

return statearr_51935;
});
var cljs$core$async$state_machine__50381__auto____1 = (function (state_51912){
while(true){
var ret_value__50382__auto__ = (function (){try{while(true){
var result__50383__auto__ = switch__50380__auto__(state_51912);
if(cljs.core.keyword_identical_QMARK_(result__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50383__auto__;
}
break;
}
}catch (e51936){var ex__50384__auto__ = e51936;
var statearr_51937_52698 = state_51912;
(statearr_51937_52698[(2)] = ex__50384__auto__);


if(cljs.core.seq((state_51912[(4)]))){
var statearr_51938_52699 = state_51912;
(statearr_51938_52699[(1)] = cljs.core.first((state_51912[(4)])));

} else {
throw ex__50384__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52700 = state_51912;
state_51912 = G__52700;
continue;
} else {
return ret_value__50382__auto__;
}
break;
}
});
cljs$core$async$state_machine__50381__auto__ = function(state_51912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50381__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50381__auto____1.call(this,state_51912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50381__auto____0;
cljs$core$async$state_machine__50381__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50381__auto____1;
return cljs$core$async$state_machine__50381__auto__;
})()
})();
var state__50418__auto__ = (function (){var statearr_51939 = f__50417__auto__();
(statearr_51939[(6)] = c__50416__auto___52683);

return statearr_51939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50418__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
