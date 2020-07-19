goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_(pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first(pattern);
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"_","_",-1201019570,null));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = ((cljs.core.set_QMARK_(p))?(function (){var G__29294 = cljs.core.first(datom);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29294) : p.call(null,G__29294));
})():false);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(datom));
}
}
})())){
var G__29307 = cljs.core.rest(pattern);
var G__29308 = cljs.core.rest(datom);
pattern = G__29307;
datom = G__29308;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some((function (p1__29295_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_(p1__29295_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__29299 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__29299)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__29299)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__29299)){
return true;
} else {
return cljs.core.some((function (p1__29298_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__29298_SHARP_);
}),datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__29301 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__29301)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__29301)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__29301)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29300_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__29300_SHARP_);
}),datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_(patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774),cljs.core.cons(cljs.core.vec(cljs.core.cons(entids,rest_datom)),new_patterns),new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963),leftover_patterns], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rest_datom,cljs.core.rest(cljs.core.first(patterns)))){
var G__29309 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(entids,((cljs.core.set_QMARK_(cljs.core.ffirst(patterns)))?cljs.core.ffirst(patterns):cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(patterns)], null))));
var G__29310 = rest_datom;
var G__29311 = cljs.core.rest(patterns);
var G__29312 = new_patterns;
var G__29313 = leftover_patterns;
entids = G__29309;
rest_datom = G__29310;
patterns = G__29311;
new_patterns = G__29312;
leftover_patterns = G__29313;
continue;
} else {
var G__29317 = entids;
var G__29318 = rest_datom;
var G__29319 = cljs.core.rest(patterns);
var G__29320 = new_patterns;
var G__29321 = cljs.core.cons(cljs.core.first(patterns),leftover_patterns);
entids = G__29317;
rest_datom = G__29318;
patterns = G__29319;
new_patterns = G__29320;
leftover_patterns = G__29321;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_(leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst(leftover_patterns);
return ((cljs.core.set_QMARK_(id)) || (typeof id === 'number'));
})()){
var r = posh.lib.datom_matcher.combine_entids(cljs.core.PersistentHashSet.EMPTY,cljs.core.rest(cljs.core.first(leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__29322 = new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774).cljs$core$IFn$_invoke$arity$1(r);
var G__29323 = new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963).cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__29322;
leftover_patterns = G__29323;
continue;
} else {
var G__29324 = cljs.core.cons(cljs.core.first(leftover_patterns),new_patterns);
var G__29325 = cljs.core.rest(leftover_patterns);
new_patterns = G__29324;
leftover_patterns = G__29325;
continue;
}
}
break;
}
});

//# sourceMappingURL=posh.lib.datom_matcher.js.map
