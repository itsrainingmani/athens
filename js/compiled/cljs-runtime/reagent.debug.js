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
var G__51802__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51807__i = 0, G__51807__a = new Array(arguments.length -  0);
while (G__51807__i < G__51807__a.length) {G__51807__a[G__51807__i] = arguments[G__51807__i + 0]; ++G__51807__i;}
  args = new cljs.core.IndexedSeq(G__51807__a,0,null);
} 
return G__51802__delegate.call(this,args);};
G__51802.cljs$lang$maxFixedArity = 0;
G__51802.cljs$lang$applyTo = (function (arglist__51808){
var args = cljs.core.seq(arglist__51808);
return G__51802__delegate(args);
});
G__51802.cljs$core$IFn$_invoke$arity$variadic = G__51802__delegate;
return G__51802;
})()
);

(o.error = (function() { 
var G__51809__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51810__i = 0, G__51810__a = new Array(arguments.length -  0);
while (G__51810__i < G__51810__a.length) {G__51810__a[G__51810__i] = arguments[G__51810__i + 0]; ++G__51810__i;}
  args = new cljs.core.IndexedSeq(G__51810__a,0,null);
} 
return G__51809__delegate.call(this,args);};
G__51809.cljs$lang$maxFixedArity = 0;
G__51809.cljs$lang$applyTo = (function (arglist__51811){
var args = cljs.core.seq(arglist__51811);
return G__51809__delegate(args);
});
G__51809.cljs$core$IFn$_invoke$arity$variadic = G__51809__delegate;
return G__51809;
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
