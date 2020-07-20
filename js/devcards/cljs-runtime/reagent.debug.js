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
var G__31583__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31584__i = 0, G__31584__a = new Array(arguments.length -  0);
while (G__31584__i < G__31584__a.length) {G__31584__a[G__31584__i] = arguments[G__31584__i + 0]; ++G__31584__i;}
  args = new cljs.core.IndexedSeq(G__31584__a,0,null);
} 
return G__31583__delegate.call(this,args);};
G__31583.cljs$lang$maxFixedArity = 0;
G__31583.cljs$lang$applyTo = (function (arglist__31585){
var args = cljs.core.seq(arglist__31585);
return G__31583__delegate(args);
});
G__31583.cljs$core$IFn$_invoke$arity$variadic = G__31583__delegate;
return G__31583;
})()
);

(o.error = (function() { 
var G__31586__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31587__i = 0, G__31587__a = new Array(arguments.length -  0);
while (G__31587__i < G__31587__a.length) {G__31587__a[G__31587__i] = arguments[G__31587__i + 0]; ++G__31587__i;}
  args = new cljs.core.IndexedSeq(G__31587__a,0,null);
} 
return G__31586__delegate.call(this,args);};
G__31586.cljs$lang$maxFixedArity = 0;
G__31586.cljs$lang$applyTo = (function (arglist__31588){
var args = cljs.core.seq(arglist__31588);
return G__31586__delegate(args);
});
G__31586.cljs$core$IFn$_invoke$arity$variadic = G__31586__delegate;
return G__31586;
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
