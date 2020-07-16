goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__30888 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30888) : stop_at_QMARK_.call(null,G__30888));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__30889 = stop_at_QMARK_;
var G__30890 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__30889,G__30890) : posh.lib.q_analyze.take_until.call(null,G__30889,G__30890));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__30892 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30892) : rest_at_QMARK_.call(null,G__30892));
}
})())){
return ls;
} else {
var G__31269 = rest_at_QMARK_;
var G__31270 = cljs.core.rest(ls);
rest_at_QMARK_ = G__31269;
ls = G__31270;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__30893 = split_at_QMARK_;
var G__30894 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__30893,G__30894) : posh.lib.q_analyze.split_list_at.call(null,G__30893,G__30894));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__30895 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30895) : posh.lib.q_analyze.get_all_vars.call(null,G__30895));
})(),(function (){var G__30896 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30896) : posh.lib.q_analyze.get_all_vars.call(null,G__30896));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__30897 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30897) : posh.lib.q_analyze.get_all_vars.call(null,G__30897));
})(),cljs.core.first(query));
} else {
var G__30898 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30898) : posh.lib.q_analyze.get_all_vars.call(null,G__30898));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__30900 = cljs.core.rest(eav);
var G__30901 = (n - (1));
var G__30902 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__30903 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__30900,G__30901,G__30902,G__30903) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__30900,G__30901,G__30902,G__30903));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__30904 = cljs.core.rest(eav);
var G__30905 = (n - (1));
var G__30906 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__30907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__30904,G__30905,G__30906,G__30907) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__30904,G__30905,G__30906,G__30907));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__30908 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__30908) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__30908));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__30909 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__30909) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__30909));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__30910 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30910) : posh.lib.q_analyze.get_eavs.call(null,G__30910));
})(),(function (){var G__30911 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30911) : posh.lib.q_analyze.get_eavs.call(null,G__30911));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__30912 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30912) : posh.lib.q_analyze.get_eavs.call(null,G__30912));
})(),(function (){var G__30913 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30913) : posh.lib.q_analyze.get_eavs.call(null,G__30913));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__30915 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30915) : posh.lib.q_analyze.get_eavs.call(null,G__30915));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_30919 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_30919)) && ((cljs.core.count(ocr_30919) === 2)))){
try{var ocr_30919_0__30937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919,(0));
if(((cljs.core.vector_QMARK_(ocr_30919_0__30937)) && ((cljs.core.count(ocr_30919_0__30937) === 5)))){
try{var ocr_30919_0__30937_0__30940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919_0__30937,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30919_0__30937_0__30940,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919_0__30937,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919_0__30937,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919_0__30937,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30919,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__30953 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30953) : posh.lib.q_analyze.get_eavs.call(null,G__30953));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e30951){if((e30951 instanceof Error)){
var e__29985__auto__ = e30951;
if((e__29985__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto__;
}
} else {
throw e30951;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30950){if((e30950 instanceof Error)){
var e__29985__auto__ = e30950;
if((e__29985__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto__;
}
} else {
throw e30950;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30947){if((e30947 instanceof Error)){
var e__29985__auto__ = e30947;
if((e__29985__auto__ === cljs.core.match.backtrack)){
var G__30948 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30948) : posh.lib.q_analyze.get_eavs.call(null,G__30948));
} else {
throw e__29985__auto__;
}
} else {
throw e30947;

}
}} else {
var G__30954 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30954) : posh.lib.q_analyze.get_eavs.call(null,G__30954));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__30955){
var vec__30956 = p__30955;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30956,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30959_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__30959_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__30959_SHARP_);
} else {
return p1__30959_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30960 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30960) : posh.lib.q_analyze.count_qvars.call(null,G__30960));
})(),(function (){var G__30961 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30961) : posh.lib.q_analyze.count_qvars.call(null,G__30961));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__30962 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30962) : posh.lib.q_analyze.count_qvars.call(null,G__30962));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__30963(s__30964){
return (new cljs.core.LazySeq(null,(function (){
var s__30964__$1 = s__30964;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30964__$1);
if(temp__5735__auto__){
var s__30964__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30964__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30964__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30966 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30965 = (0);
while(true){
if((i__30965 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30965);
cljs.core.chunk_append(b__30966,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__31304 = (i__30965 + (1));
i__30965 = G__31304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30966),posh$lib$q_analyze$fill_qvar_set_$_iter__30963(cljs.core.chunk_rest(s__30964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30966),null);
}
} else {
var r = cljs.core.first(s__30964__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__30963(cljs.core.rest(s__30964__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__30967 = cljs.core.first(seq1);
var G__30968 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30967,G__30968) : f.call(null,G__30967,G__30968));
})(),(function (){var G__30969 = f;
var G__30970 = cljs.core.rest(seq1);
var G__30971 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__30969,G__30970,G__30971) : posh.lib.q_analyze.seq_merge_with.call(null,G__30969,G__30970,G__30971));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__30974){
var vec__30975 = p__30974;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30975,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30975,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30975,(2),null);
var eav = vec__30975;
var vec__30978 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30978,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981(s__30982){
return (new cljs.core.LazySeq(null,(function (){
var s__30982__$1 = s__30982;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30982__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__30982__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981_$_iter__30983(s__30984){
return (new cljs.core.LazySeq(null,((function (s__30982__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (){
var s__30984__$1 = s__30984;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30984__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__30984__$1,s__30982__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981_$_iter__30983_$_iter__30985(s__30986){
return (new cljs.core.LazySeq(null,((function (s__30984__$1,s__30982__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (){
var s__30986__$1 = s__30986;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__30986__$1);
if(temp__5735__auto____$2){
var s__30986__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__30986__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30986__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30988 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30987 = (0);
while(true){
if((i__30987 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30987);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30987,s__30986__$1,s__30984__$1,s__30982__$1,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p1__30972_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__30972_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__30987,s__30986__$1,s__30984__$1,s__30982__$1,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30987,s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p__30989){
var vec__30990 = p__30989;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__30987,s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30987,s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p1__30973_SHARP_){
if(cljs.core.truth_(p1__30973_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__30987,s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__30988,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__30988,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__31306 = (i__30987 + (1));
i__30987 = G__31306;
continue;
} else {
var G__31307 = (i__30987 + (1));
i__30987 = G__31307;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30988),posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981_$_iter__30983_$_iter__30985(cljs.core.chunk_rest(s__30986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30988),null);
}
} else {
var vv = cljs.core.first(s__30986__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30986__$1,s__30984__$1,s__30982__$1,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p1__30972_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__30972_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__30986__$1,s__30984__$1,s__30982__$1,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p__30993){
var vec__30994 = p__30993;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30994,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30994,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,exposed_qvars,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav){
return (function (p1__30973_SHARP_){
if(cljs.core.truth_(p1__30973_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__30986__$1,s__30984__$1,s__30982__$1,wildcard_count,exposed_qvars,vv,s__30986__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981_$_iter__30983_$_iter__30985(cljs.core.rest(s__30986__$2)));
} else {
var G__31308 = cljs.core.rest(s__30986__$2);
s__30986__$1 = G__31308;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30984__$1,s__30982__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,null,null));
});})(s__30984__$1,s__30982__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981_$_iter__30983(cljs.core.rest(s__30984__$1)));
} else {
var G__31309 = cljs.core.rest(s__30984__$1);
s__30984__$1 = G__31309;
continue;
}
} else {
return null;
}
break;
}
});})(s__30982__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
,null,null));
});})(s__30982__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30978,qe,qa,qv,vec__30975,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__30981(cljs.core.rest(s__30982__$1)));
} else {
var G__31310 = cljs.core.rest(s__30982__$1);
s__30982__$1 = G__31310;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_30997 = cljs.core.vec(eav);
var ocr_30998 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_30997)) && ((cljs.core.count(ocr_30997) === 3)))){
try{var ocr_30997_0__31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_0__31026,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31102){if((e31102 instanceof Error)){
var e__29985__auto__ = e31102;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30998)) && ((cljs.core.count(ocr_30998) === 3)))){
try{var ocr_30998_2__31031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31031 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31104){if((e31104 instanceof Error)){
var e__29985__auto____$1 = e31104;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31031 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31105){if((e31105 instanceof Error)){
var e__29985__auto____$2 = e31105;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31105;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31103){if((e31103 instanceof Error)){
var e__29985__auto____$1 = e31103;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31103;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31097){if((e31097 instanceof Error)){
var e__29985__auto__ = e31097;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_30998)) && ((cljs.core.count(ocr_30998) === 3)))){
try{var ocr_30998_1__31033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31033 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31100){if((e31100 instanceof Error)){
var e__29985__auto____$1 = e31100;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30998_1__31033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31033 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31101){if((e31101 instanceof Error)){
var e__29985__auto____$2 = e31101;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31101;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31099){if((e31099 instanceof Error)){
var e__29985__auto____$1 = e31099;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31098){if((e31098 instanceof Error)){
var e__29985__auto____$1 = e31098;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31098;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31039){if((e31039 instanceof Error)){
var e__29985__auto__ = e31039;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30998)) && ((cljs.core.count(ocr_30998) === 3)))){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31096){if((e31096 instanceof Error)){
var e__29985__auto____$1 = e31096;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31095){if((e31095 instanceof Error)){
var e__29985__auto____$1 = e31095;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31095;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31041){if((e31041 instanceof Error)){
var e__29985__auto____$1 = e31041;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31092){if((e31092 instanceof Error)){
var e__29985__auto____$2 = e31092;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31093){if((e31093 instanceof Error)){
var e__29985__auto____$3 = e31093;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31094){if((e31094 instanceof Error)){
var e__29985__auto____$4 = e31094;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31094;

}
}} else {
throw e__29985__auto____$3;
}
} else {
throw e31093;

}
}} else {
throw e__29985__auto____$2;
}
} else {
throw e31092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31091){if((e31091 instanceof Error)){
var e__29985__auto____$2 = e31091;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31042){if((e31042 instanceof Error)){
var e__29985__auto____$2 = e31042;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31090){if((e31090 instanceof Error)){
var e__29985__auto____$3 = e31090;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$3;
}
} else {
throw e31090;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31087){if((e31087 instanceof Error)){
var e__29985__auto____$3 = e31087;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
try{var ocr_30997_2__31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_2__31028,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31089){if((e31089 instanceof Error)){
var e__29985__auto____$4 = e31089;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31089;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31088){if((e31088 instanceof Error)){
var e__29985__auto____$4 = e31088;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31088;

}
}} else {
throw e__29985__auto____$3;
}
} else {
throw e31087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31043){if((e31043 instanceof Error)){
var e__29985__auto____$3 = e31043;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31086){if((e31086 instanceof Error)){
var e__29985__auto____$4 = e31086;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31086;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31085){if((e31085 instanceof Error)){
var e__29985__auto____$4 = e31085;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31044){if((e31044 instanceof Error)){
var e__29985__auto____$4 = e31044;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31084){if((e31084 instanceof Error)){
var e__29985__auto____$5 = e31084;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$5;
}
} else {
throw e31084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31083){if((e31083 instanceof Error)){
var e__29985__auto____$5 = e31083;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$5;
}
} else {
throw e31083;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31045){if((e31045 instanceof Error)){
var e__29985__auto____$5 = e31045;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31082){if((e31082 instanceof Error)){
var e__29985__auto____$6 = e31082;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$6;
}
} else {
throw e31082;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31081){if((e31081 instanceof Error)){
var e__29985__auto____$6 = e31081;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$6;
}
} else {
throw e31081;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31046){if((e31046 instanceof Error)){
var e__29985__auto____$6 = e31046;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30997_1__31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_1__31027,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31080){if((e31080 instanceof Error)){
var e__29985__auto____$7 = e31080;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31079){if((e31079 instanceof Error)){
var e__29985__auto____$7 = e31079;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31047){if((e31047 instanceof Error)){
var e__29985__auto____$7 = e31047;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
try{var ocr_30997_0__31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_0__31026,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31078){if((e31078 instanceof Error)){
var e__29985__auto____$8 = e31078;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$8;
}
} else {
throw e31078;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31077){if((e31077 instanceof Error)){
var e__29985__auto____$8 = e31077;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$8;
}
} else {
throw e31077;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31048){if((e31048 instanceof Error)){
var e__29985__auto____$8 = e31048;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
try{var ocr_30997_0__31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_0__31026,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31076){if((e31076 instanceof Error)){
var e__29985__auto____$9 = e31076;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$9;
}
} else {
throw e31076;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31075){if((e31075 instanceof Error)){
var e__29985__auto____$9 = e31075;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$9;
}
} else {
throw e31075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31049){if((e31049 instanceof Error)){
var e__29985__auto____$9 = e31049;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
try{var ocr_30997_0__31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_0__31026,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31074){if((e31074 instanceof Error)){
var e__29985__auto____$10 = e31074;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31074;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31073){if((e31073 instanceof Error)){
var e__29985__auto____$10 = e31073;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31073;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31050){if((e31050 instanceof Error)){
var e__29985__auto____$10 = e31050;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
try{var ocr_30997_0__31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30997_0__31026,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31072){if((e31072 instanceof Error)){
var e__29985__auto____$11 = e31072;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$11;
}
} else {
throw e31072;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31071){if((e31071 instanceof Error)){
var e__29985__auto____$11 = e31071;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$11;
}
} else {
throw e31071;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31051){if((e31051 instanceof Error)){
var e__29985__auto____$11 = e31051;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31070){if((e31070 instanceof Error)){
var e__29985__auto____$12 = e31070;
if((e__29985__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$12;
}
} else {
throw e31070;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31065){if((e31065 instanceof Error)){
var e__29985__auto____$12 = e31065;
if((e__29985__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31069){if((e31069 instanceof Error)){
var e__29985__auto____$13 = e31069;
if((e__29985__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$13;
}
} else {
throw e31069;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31066){if((e31066 instanceof Error)){
var e__29985__auto____$13 = e31066;
if((e__29985__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31068){if((e31068 instanceof Error)){
var e__29985__auto____$14 = e31068;
if((e__29985__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$14;
}
} else {
throw e31068;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31067){if((e31067 instanceof Error)){
var e__29985__auto____$14 = e31067;
if((e__29985__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$14;
}
} else {
throw e31067;

}
}} else {
throw e__29985__auto____$13;
}
} else {
throw e31066;

}
}} else {
throw e__29985__auto____$12;
}
} else {
throw e31065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31052){if((e31052 instanceof Error)){
var e__29985__auto____$12 = e31052;
if((e__29985__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31064){if((e31064 instanceof Error)){
var e__29985__auto____$13 = e31064;
if((e__29985__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$13;
}
} else {
throw e31064;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31063){if((e31063 instanceof Error)){
var e__29985__auto____$13 = e31063;
if((e__29985__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$13;
}
} else {
throw e31063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31053){if((e31053 instanceof Error)){
var e__29985__auto____$13 = e31053;
if((e__29985__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === true)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31062){if((e31062 instanceof Error)){
var e__29985__auto____$14 = e31062;
if((e__29985__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$14;
}
} else {
throw e31062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31061){if((e31061 instanceof Error)){
var e__29985__auto____$14 = e31061;
if((e__29985__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$14;
}
} else {
throw e31061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31054){if((e31054 instanceof Error)){
var e__29985__auto____$14 = e31054;
if((e__29985__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_30998_2__31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(2));
if((ocr_30998_2__31037 === false)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === true)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31060){if((e31060 instanceof Error)){
var e__29985__auto____$15 = e31060;
if((e__29985__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$15;
}
} else {
throw e31060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31056){if((e31056 instanceof Error)){
var e__29985__auto____$15 = e31056;
if((e__29985__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_30998_0__31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(0));
if((ocr_30998_0__31035 === false)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31058){if((e31058 instanceof Error)){
var e__29985__auto____$16 = e31058;
if((e__29985__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_30998_1__31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30998,(1));
if((ocr_30998_1__31036 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30997,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31059){if((e31059 instanceof Error)){
var e__29985__auto____$17 = e31059;
if((e__29985__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$17;
}
} else {
throw e31059;

}
}} else {
throw e__29985__auto____$16;
}
} else {
throw e31058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31057){if((e31057 instanceof Error)){
var e__29985__auto____$16 = e31057;
if((e__29985__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$16;
}
} else {
throw e31057;

}
}} else {
throw e__29985__auto____$15;
}
} else {
throw e31056;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31055){if((e31055 instanceof Error)){
var e__29985__auto____$15 = e31055;
if((e__29985__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$15;
}
} else {
throw e31055;

}
}} else {
throw e__29985__auto____$14;
}
} else {
throw e31054;

}
}} else {
throw e__29985__auto____$13;
}
} else {
throw e31053;

}
}} else {
throw e__29985__auto____$12;
}
} else {
throw e31052;

}
}} else {
throw e__29985__auto____$11;
}
} else {
throw e31051;

}
}} else {
throw e__29985__auto____$10;
}
} else {
throw e31050;

}
}} else {
throw e__29985__auto____$9;
}
} else {
throw e31049;

}
}} else {
throw e__29985__auto____$8;
}
} else {
throw e31048;

}
}} else {
throw e__29985__auto____$7;
}
} else {
throw e31047;

}
}} else {
throw e__29985__auto____$6;
}
} else {
throw e31046;

}
}} else {
throw e__29985__auto____$5;
}
} else {
throw e31045;

}
}} else {
throw e__29985__auto____$4;
}
} else {
throw e31044;

}
}} else {
throw e__29985__auto____$3;
}
} else {
throw e31043;

}
}} else {
throw e__29985__auto____$2;
}
} else {
throw e31042;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31040){if((e31040 instanceof Error)){
var e__29985__auto____$1 = e31040;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31040;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31038){if((e31038 instanceof Error)){
var e__29985__auto__ = e31038;
if((e__29985__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__29985__auto__;
}
} else {
throw e31038;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_31106 = cljs.core.vec(eav);
var ocr_31107 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_31106)) && ((cljs.core.count(ocr_31106) === 3)))){
try{var ocr_31106_0__31132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_0__31132,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_31106_2__31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_2__31134,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e31196){if((e31196 instanceof Error)){
var e__29985__auto__ = e31196;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_31107)) && ((cljs.core.count(ocr_31107) === 3)))){
try{var ocr_31107_2__31137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31137 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31198){if((e31198 instanceof Error)){
var e__29985__auto____$1 = e31198;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31137 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31199){if((e31199 instanceof Error)){
var e__29985__auto____$2 = e31199;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31199;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31197){if((e31197 instanceof Error)){
var e__29985__auto____$1 = e31197;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31197;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31191){if((e31191 instanceof Error)){
var e__29985__auto__ = e31191;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{var ocr_31106_2__31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_2__31134,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_31107)) && ((cljs.core.count(ocr_31107) === 3)))){
try{var ocr_31107_1__31139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31139 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31194){if((e31194 instanceof Error)){
var e__29985__auto____$1 = e31194;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31139 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31195){if((e31195 instanceof Error)){
var e__29985__auto____$2 = e31195;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31195;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31193){if((e31193 instanceof Error)){
var e__29985__auto____$1 = e31193;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31192){if((e31192 instanceof Error)){
var e__29985__auto____$1 = e31192;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31192;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31145){if((e31145 instanceof Error)){
var e__29985__auto__ = e31145;
if((e__29985__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_31107)) && ((cljs.core.count(ocr_31107) === 3)))){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_31106_2__31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_2__31134,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31190){if((e31190 instanceof Error)){
var e__29985__auto____$1 = e31190;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31189){if((e31189 instanceof Error)){
var e__29985__auto____$1 = e31189;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31147){if((e31147 instanceof Error)){
var e__29985__auto____$1 = e31147;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
try{var ocr_31106_2__31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_2__31134,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31186){if((e31186 instanceof Error)){
var e__29985__auto____$2 = e31186;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31187){if((e31187 instanceof Error)){
var e__29985__auto____$3 = e31187;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31188){if((e31188 instanceof Error)){
var e__29985__auto____$4 = e31188;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31188;

}
}} else {
throw e__29985__auto____$3;
}
} else {
throw e31187;

}
}} else {
throw e__29985__auto____$2;
}
} else {
throw e31186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31185){if((e31185 instanceof Error)){
var e__29985__auto____$2 = e31185;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$2;
}
} else {
throw e31185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31148){if((e31148 instanceof Error)){
var e__29985__auto____$2 = e31148;
if((e__29985__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
try{var ocr_31106_2__31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_2__31134,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31184){if((e31184 instanceof Error)){
var e__29985__auto____$3 = e31184;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$3;
}
} else {
throw e31184;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31183){if((e31183 instanceof Error)){
var e__29985__auto____$3 = e31183;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$3;
}
} else {
throw e31183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31149){if((e31149 instanceof Error)){
var e__29985__auto____$3 = e31149;
if((e__29985__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === true)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31182){if((e31182 instanceof Error)){
var e__29985__auto____$4 = e31182;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31181){if((e31181 instanceof Error)){
var e__29985__auto____$4 = e31181;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$4;
}
} else {
throw e31181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31150){if((e31150 instanceof Error)){
var e__29985__auto____$4 = e31150;
if((e__29985__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === false)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31180){if((e31180 instanceof Error)){
var e__29985__auto____$5 = e31180;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$5;
}
} else {
throw e31180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31179){if((e31179 instanceof Error)){
var e__29985__auto____$5 = e31179;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$5;
}
} else {
throw e31179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31151){if((e31151 instanceof Error)){
var e__29985__auto____$5 = e31151;
if((e__29985__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === true)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
try{var ocr_31106_1__31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_1__31133,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31178){if((e31178 instanceof Error)){
var e__29985__auto____$6 = e31178;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$6;
}
} else {
throw e31178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31175){if((e31175 instanceof Error)){
var e__29985__auto____$6 = e31175;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
try{var ocr_31106_0__31132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_0__31132,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31177){if((e31177 instanceof Error)){
var e__29985__auto____$7 = e31177;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31176){if((e31176 instanceof Error)){
var e__29985__auto____$7 = e31176;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31176;

}
}} else {
throw e__29985__auto____$6;
}
} else {
throw e31175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31152){if((e31152 instanceof Error)){
var e__29985__auto____$6 = e31152;
if((e__29985__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === false)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
try{var ocr_31106_0__31132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_0__31132,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31174){if((e31174 instanceof Error)){
var e__29985__auto____$7 = e31174;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31173){if((e31173 instanceof Error)){
var e__29985__auto____$7 = e31173;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$7;
}
} else {
throw e31173;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31153){if((e31153 instanceof Error)){
var e__29985__auto____$7 = e31153;
if((e__29985__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === true)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === false)){
try{var ocr_31106_0__31132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31106_0__31132,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31172){if((e31172 instanceof Error)){
var e__29985__auto____$8 = e31172;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$8;
}
} else {
throw e31172;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31166){if((e31166 instanceof Error)){
var e__29985__auto____$8 = e31166;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31170){if((e31170 instanceof Error)){
var e__29985__auto____$9 = e31170;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31171){if((e31171 instanceof Error)){
var e__29985__auto____$10 = e31171;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31171;

}
}} else {
throw e__29985__auto____$9;
}
} else {
throw e31170;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31167){if((e31167 instanceof Error)){
var e__29985__auto____$9 = e31167;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === false)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31169){if((e31169 instanceof Error)){
var e__29985__auto____$10 = e31169;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31168){if((e31168 instanceof Error)){
var e__29985__auto____$10 = e31168;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31168;

}
}} else {
throw e__29985__auto____$9;
}
} else {
throw e31167;

}
}} else {
throw e__29985__auto____$8;
}
} else {
throw e31166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31154){if((e31154 instanceof Error)){
var e__29985__auto____$8 = e31154;
if((e__29985__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === false)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31165){if((e31165 instanceof Error)){
var e__29985__auto____$9 = e31165;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$9;
}
} else {
throw e31165;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31164){if((e31164 instanceof Error)){
var e__29985__auto____$9 = e31164;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$9;
}
} else {
throw e31164;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31155){if((e31155 instanceof Error)){
var e__29985__auto____$9 = e31155;
if((e__29985__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === true)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31163){if((e31163 instanceof Error)){
var e__29985__auto____$10 = e31163;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31162){if((e31162 instanceof Error)){
var e__29985__auto____$10 = e31162;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$10;
}
} else {
throw e31162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31156){if((e31156 instanceof Error)){
var e__29985__auto____$10 = e31156;
if((e__29985__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_31107_2__31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(2));
if((ocr_31107_2__31143 === false)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === true)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31161){if((e31161 instanceof Error)){
var e__29985__auto____$11 = e31161;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$11;
}
} else {
throw e31161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31158){if((e31158 instanceof Error)){
var e__29985__auto____$11 = e31158;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_31107_0__31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(0));
if((ocr_31107_0__31141 === false)){
try{var ocr_31107_1__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31107,(1));
if((ocr_31107_1__31142 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31106,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31160){if((e31160 instanceof Error)){
var e__29985__auto____$12 = e31160;
if((e__29985__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$12;
}
} else {
throw e31160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31159){if((e31159 instanceof Error)){
var e__29985__auto____$12 = e31159;
if((e__29985__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$12;
}
} else {
throw e31159;

}
}} else {
throw e__29985__auto____$11;
}
} else {
throw e31158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31157){if((e31157 instanceof Error)){
var e__29985__auto____$11 = e31157;
if((e__29985__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$11;
}
} else {
throw e31157;

}
}} else {
throw e__29985__auto____$10;
}
} else {
throw e31156;

}
}} else {
throw e__29985__auto____$9;
}
} else {
throw e31155;

}
}} else {
throw e__29985__auto____$8;
}
} else {
throw e31154;

}
}} else {
throw e__29985__auto____$7;
}
} else {
throw e31153;

}
}} else {
throw e__29985__auto____$6;
}
} else {
throw e31152;

}
}} else {
throw e__29985__auto____$5;
}
} else {
throw e31151;

}
}} else {
throw e__29985__auto____$4;
}
} else {
throw e31150;

}
}} else {
throw e__29985__auto____$3;
}
} else {
throw e31149;

}
}} else {
throw e__29985__auto____$2;
}
} else {
throw e31148;

}
}} else {
throw e__29985__auto____$1;
}
} else {
throw e31147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31146){if((e31146 instanceof Error)){
var e__29985__auto____$1 = e31146;
if((e__29985__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29985__auto____$1;
}
} else {
throw e31146;

}
}} else {
throw e__29985__auto__;
}
} else {
throw e31145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31144){if((e31144 instanceof Error)){
var e__29985__auto__ = e31144;
if((e__29985__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__29985__auto__;
}
} else {
throw e31144;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31201){
var vec__31202 = p__31201;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31202,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__31200_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__31200_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31206){
var vec__31207 = p__31206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31207,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__31205_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__31205_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__31210 = cljs.core.rest(ins);
var G__31211 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__31210,G__31211) : posh.lib.q_analyze.just_qvars.call(null,G__31210,G__31211));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31212_SHARP_){
return cljs.core.zipmap(qvars,p1__31212_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__31213 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__31396 = var$;
var G__31397 = dbvarmap;
var G__31398 = cljs.core.rest(dbeavs);
var$ = G__31396;
dbvarmap = G__31397;
dbeavs = G__31398;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__31216 = cljs.core.rest(vars);
var G__31217 = dbvarmap;
var G__31218 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__31216,G__31217,G__31218) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__31216,G__31217,G__31218));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__31399 = (n + (1));
var G__31400 = cljs.core.rest(xs__$1);
n = G__31399;
xs__$1 = G__31400;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31219_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__31219_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__31219_SHARP_) : type.call(null,p1__31219_SHARP_));
} else {
return p1__31219_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__31220 = cljs.core.rest(ins);
var G__31221 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__31220,G__31221) : posh.lib.q_analyze.make_dbarg_map.call(null,G__31220,G__31221));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31222){
var vec__31223 = p__31222;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31223,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31223,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__31227_SHARP_,p2__31226_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__31226_SHARP_)){
return p1__31227_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__31231 = cljs.core._EQ_;
var expr__31232 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__31231.cljs$core$IFn$_invoke$arity$2 ? pred__31231.cljs$core$IFn$_invoke$arity$2((1),expr__31232) : pred__31231.call(null,(1),expr__31232)))){
return true;
} else {
if(cljs.core.truth_((pred__31231.cljs$core$IFn$_invoke$arity$2 ? pred__31231.cljs$core$IFn$_invoke$arity$2((3),expr__31232) : pred__31231.call(null,(3),expr__31232)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__31401 = cljs.core.first(remaining);
var G__31402 = cljs.core.rest(remaining);
clause = G__31401;
remaining = G__31402;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__31403 = cljs.core.first(remaining);
var G__31404 = cljs.core.rest(remaining);
clause = G__31403;
remaining = G__31404;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__31234(s__31235){
return (new cljs.core.LazySeq(null,(function (){
var s__31235__$1 = s__31235;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31235__$1);
if(temp__5735__auto__){
var s__31235__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31235__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31235__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31237 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31236 = (0);
while(true){
if((i__31236 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31236);
cljs.core.chunk_append(b__31237,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__31405 = (i__31236 + (1));
i__31236 = G__31405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31237),posh$lib$q_analyze$resolve_any_idents_$_iter__31234(cljs.core.chunk_rest(s__31235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31237),null);
}
} else {
var var_value = cljs.core.first(s__31235__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__31234(cljs.core.rest(s__31235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31242){
var vec__31243 = p__31242;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31246){
var vec__31247 = p__31246;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31250){
var vec__31251 = p__31250;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31254){
var vec__31255 = p__31254;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__31259 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__31260 = cljs.core.vec(r);
var fexpr__31258 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__31258.cljs$core$IFn$_invoke$arity$2 ? fexpr__31258.cljs$core$IFn$_invoke$arity$2(G__31259,G__31260) : fexpr__31258.call(null,G__31259,G__31260));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31261){
var vec__31262 = p__31261;
var seq__31263 = cljs.core.seq(vec__31262);
var first__31264 = cljs.core.first(seq__31263);
var seq__31263__$1 = cljs.core.next(seq__31263);
var db = first__31264;
var eav = seq__31263__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31265){
var vec__31266 = p__31265;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31266,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__31240_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__31240_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__31240_SHARP_) : linked_qvars.call(null,p1__31240_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__31240_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__31241_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__31241_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__31241_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
