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
var G__31578__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31579__i = 0, G__31579__a = new Array(arguments.length -  0);
while (G__31579__i < G__31579__a.length) {G__31579__a[G__31579__i] = arguments[G__31579__i + 0]; ++G__31579__i;}
  args = new cljs.core.IndexedSeq(G__31579__a,0,null);
} 
return G__31578__delegate.call(this,args);};
G__31578.cljs$lang$maxFixedArity = 0;
G__31578.cljs$lang$applyTo = (function (arglist__31580){
var args = cljs.core.seq(arglist__31580);
return G__31578__delegate(args);
});
G__31578.cljs$core$IFn$_invoke$arity$variadic = G__31578__delegate;
return G__31578;
})()
);

(o.error = (function() { 
var G__31581__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31582__i = 0, G__31582__a = new Array(arguments.length -  0);
while (G__31582__i < G__31582__a.length) {G__31582__a[G__31582__i] = arguments[G__31582__i + 0]; ++G__31582__i;}
  args = new cljs.core.IndexedSeq(G__31582__a,0,null);
} 
return G__31581__delegate.call(this,args);};
G__31581.cljs$lang$maxFixedArity = 0;
G__31581.cljs$lang$applyTo = (function (arglist__31583){
var args = cljs.core.seq(arglist__31583);
return G__31581__delegate(args);
});
G__31581.cljs$core$IFn$_invoke$arity$variadic = G__31581__delegate;
return G__31581;
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
