goog.provide('athens.patterns');
goog.require('cljs.core');
athens.patterns.linked = (function athens$patterns$linked(string){
return cljs.core.re_pattern(["(\\[{2})",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"(\\]{2})","|","(#)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"|","(#\\[{2})",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"(\\]{2})"].join(''));
});
athens.patterns.unlinked = (function athens$patterns$unlinked(string){
return cljs.core.re_pattern(["[^\\[|#]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join(''));
});

//# sourceMappingURL=athens.patterns.js.map
