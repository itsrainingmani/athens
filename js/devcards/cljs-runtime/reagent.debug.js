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
var G__31343__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31344__i = 0, G__31344__a = new Array(arguments.length -  0);
while (G__31344__i < G__31344__a.length) {G__31344__a[G__31344__i] = arguments[G__31344__i + 0]; ++G__31344__i;}
  args = new cljs.core.IndexedSeq(G__31344__a,0,null);
} 
return G__31343__delegate.call(this,args);};
G__31343.cljs$lang$maxFixedArity = 0;
G__31343.cljs$lang$applyTo = (function (arglist__31345){
var args = cljs.core.seq(arglist__31345);
return G__31343__delegate(args);
});
G__31343.cljs$core$IFn$_invoke$arity$variadic = G__31343__delegate;
return G__31343;
})()
);

(o.error = (function() { 
var G__31346__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31347__i = 0, G__31347__a = new Array(arguments.length -  0);
while (G__31347__i < G__31347__a.length) {G__31347__a[G__31347__i] = arguments[G__31347__i + 0]; ++G__31347__i;}
  args = new cljs.core.IndexedSeq(G__31347__a,0,null);
} 
return G__31346__delegate.call(this,args);};
G__31346.cljs$lang$maxFixedArity = 0;
G__31346.cljs$lang$applyTo = (function (arglist__31348){
var args = cljs.core.seq(arglist__31348);
return G__31346__delegate(args);
});
G__31346.cljs$core$IFn$_invoke$arity$variadic = G__31346__delegate;
return G__31346;
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
