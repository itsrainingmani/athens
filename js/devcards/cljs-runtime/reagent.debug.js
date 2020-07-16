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
var G__31557__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31561__i = 0, G__31561__a = new Array(arguments.length -  0);
while (G__31561__i < G__31561__a.length) {G__31561__a[G__31561__i] = arguments[G__31561__i + 0]; ++G__31561__i;}
  args = new cljs.core.IndexedSeq(G__31561__a,0,null);
} 
return G__31557__delegate.call(this,args);};
G__31557.cljs$lang$maxFixedArity = 0;
G__31557.cljs$lang$applyTo = (function (arglist__31562){
var args = cljs.core.seq(arglist__31562);
return G__31557__delegate(args);
});
G__31557.cljs$core$IFn$_invoke$arity$variadic = G__31557__delegate;
return G__31557;
})()
);

(o.error = (function() { 
var G__31563__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31564__i = 0, G__31564__a = new Array(arguments.length -  0);
while (G__31564__i < G__31564__a.length) {G__31564__a[G__31564__i] = arguments[G__31564__i + 0]; ++G__31564__i;}
  args = new cljs.core.IndexedSeq(G__31564__a,0,null);
} 
return G__31563__delegate.call(this,args);};
G__31563.cljs$lang$maxFixedArity = 0;
G__31563.cljs$lang$applyTo = (function (arglist__31565){
var args = cljs.core.seq(arglist__31565);
return G__31563__delegate(args);
});
G__31563.cljs$core$IFn$_invoke$arity$variadic = G__31563__delegate;
return G__31563;
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
