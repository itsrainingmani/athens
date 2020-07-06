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
var G__31312__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31313__i = 0, G__31313__a = new Array(arguments.length -  0);
while (G__31313__i < G__31313__a.length) {G__31313__a[G__31313__i] = arguments[G__31313__i + 0]; ++G__31313__i;}
  args = new cljs.core.IndexedSeq(G__31313__a,0,null);
} 
return G__31312__delegate.call(this,args);};
G__31312.cljs$lang$maxFixedArity = 0;
G__31312.cljs$lang$applyTo = (function (arglist__31314){
var args = cljs.core.seq(arglist__31314);
return G__31312__delegate(args);
});
G__31312.cljs$core$IFn$_invoke$arity$variadic = G__31312__delegate;
return G__31312;
})()
);

(o.error = (function() { 
var G__31315__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31319__i = 0, G__31319__a = new Array(arguments.length -  0);
while (G__31319__i < G__31319__a.length) {G__31319__a[G__31319__i] = arguments[G__31319__i + 0]; ++G__31319__i;}
  args = new cljs.core.IndexedSeq(G__31319__a,0,null);
} 
return G__31315__delegate.call(this,args);};
G__31315.cljs$lang$maxFixedArity = 0;
G__31315.cljs$lang$applyTo = (function (arglist__31320){
var args = cljs.core.seq(arglist__31320);
return G__31315__delegate(args);
});
G__31315.cljs$core$IFn$_invoke$arity$variadic = G__31315__delegate;
return G__31315;
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
