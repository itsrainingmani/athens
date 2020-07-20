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
var G__31574__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31575__i = 0, G__31575__a = new Array(arguments.length -  0);
while (G__31575__i < G__31575__a.length) {G__31575__a[G__31575__i] = arguments[G__31575__i + 0]; ++G__31575__i;}
  args = new cljs.core.IndexedSeq(G__31575__a,0,null);
} 
return G__31574__delegate.call(this,args);};
G__31574.cljs$lang$maxFixedArity = 0;
G__31574.cljs$lang$applyTo = (function (arglist__31576){
var args = cljs.core.seq(arglist__31576);
return G__31574__delegate(args);
});
G__31574.cljs$core$IFn$_invoke$arity$variadic = G__31574__delegate;
return G__31574;
})()
);

(o.error = (function() { 
var G__31577__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31578__i = 0, G__31578__a = new Array(arguments.length -  0);
while (G__31578__i < G__31578__a.length) {G__31578__a[G__31578__i] = arguments[G__31578__i + 0]; ++G__31578__i;}
  args = new cljs.core.IndexedSeq(G__31578__a,0,null);
} 
return G__31577__delegate.call(this,args);};
G__31577.cljs$lang$maxFixedArity = 0;
G__31577.cljs$lang$applyTo = (function (arglist__31579){
var args = cljs.core.seq(arglist__31579);
return G__31577__delegate(args);
});
G__31577.cljs$core$IFn$_invoke$arity$variadic = G__31577__delegate;
return G__31577;
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
