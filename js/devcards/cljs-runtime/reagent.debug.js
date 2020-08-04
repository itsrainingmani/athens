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
var G__31532__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31533__i = 0, G__31533__a = new Array(arguments.length -  0);
while (G__31533__i < G__31533__a.length) {G__31533__a[G__31533__i] = arguments[G__31533__i + 0]; ++G__31533__i;}
  args = new cljs.core.IndexedSeq(G__31533__a,0,null);
} 
return G__31532__delegate.call(this,args);};
G__31532.cljs$lang$maxFixedArity = 0;
G__31532.cljs$lang$applyTo = (function (arglist__31534){
var args = cljs.core.seq(arglist__31534);
return G__31532__delegate(args);
});
G__31532.cljs$core$IFn$_invoke$arity$variadic = G__31532__delegate;
return G__31532;
})()
);

(o.error = (function() { 
var G__31535__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31536__i = 0, G__31536__a = new Array(arguments.length -  0);
while (G__31536__i < G__31536__a.length) {G__31536__a[G__31536__i] = arguments[G__31536__i + 0]; ++G__31536__i;}
  args = new cljs.core.IndexedSeq(G__31536__a,0,null);
} 
return G__31535__delegate.call(this,args);};
G__31535.cljs$lang$maxFixedArity = 0;
G__31535.cljs$lang$applyTo = (function (arglist__31537){
var args = cljs.core.seq(arglist__31537);
return G__31535__delegate(args);
});
G__31535.cljs$core$IFn$_invoke$arity$variadic = G__31535__delegate;
return G__31535;
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
