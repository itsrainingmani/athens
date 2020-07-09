goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31326__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31327__i = 0, G__31327__a = new Array(arguments.length -  0);
while (G__31327__i < G__31327__a.length) {G__31327__a[G__31327__i] = arguments[G__31327__i + 0]; ++G__31327__i;}
  args = new cljs.core.IndexedSeq(G__31327__a,0,null);
} 
return G__31326__delegate.call(this,args);};
G__31326.cljs$lang$maxFixedArity = 0;
G__31326.cljs$lang$applyTo = (function (arglist__31328){
var args = cljs.core.seq(arglist__31328);
return G__31326__delegate(args);
});
G__31326.cljs$core$IFn$_invoke$arity$variadic = G__31326__delegate;
return G__31326;
})()
);

(o.error = (function() { 
var G__31329__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31330__i = 0, G__31330__a = new Array(arguments.length -  0);
while (G__31330__i < G__31330__a.length) {G__31330__a[G__31330__i] = arguments[G__31330__i + 0]; ++G__31330__i;}
  args = new cljs.core.IndexedSeq(G__31330__a,0,null);
} 
return G__31329__delegate.call(this,args);};
G__31329.cljs$lang$maxFixedArity = 0;
G__31329.cljs$lang$applyTo = (function (arglist__31331){
var args = cljs.core.seq(arglist__31331);
return G__31329__delegate(args);
});
G__31329.cljs$core$IFn$_invoke$arity$variadic = G__31329__delegate;
return G__31329;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
