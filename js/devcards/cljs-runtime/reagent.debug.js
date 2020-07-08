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
var G__31321__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31323__i = 0, G__31323__a = new Array(arguments.length -  0);
while (G__31323__i < G__31323__a.length) {G__31323__a[G__31323__i] = arguments[G__31323__i + 0]; ++G__31323__i;}
  args = new cljs.core.IndexedSeq(G__31323__a,0,null);
} 
return G__31321__delegate.call(this,args);};
G__31321.cljs$lang$maxFixedArity = 0;
G__31321.cljs$lang$applyTo = (function (arglist__31324){
var args = cljs.core.seq(arglist__31324);
return G__31321__delegate(args);
});
G__31321.cljs$core$IFn$_invoke$arity$variadic = G__31321__delegate;
return G__31321;
})()
);

(o.error = (function() { 
var G__31325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31326__i = 0, G__31326__a = new Array(arguments.length -  0);
while (G__31326__i < G__31326__a.length) {G__31326__a[G__31326__i] = arguments[G__31326__i + 0]; ++G__31326__i;}
  args = new cljs.core.IndexedSeq(G__31326__a,0,null);
} 
return G__31325__delegate.call(this,args);};
G__31325.cljs$lang$maxFixedArity = 0;
G__31325.cljs$lang$applyTo = (function (arglist__31327){
var args = cljs.core.seq(arglist__31327);
return G__31325__delegate(args);
});
G__31325.cljs$core$IFn$_invoke$arity$variadic = G__31325__delegate;
return G__31325;
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
