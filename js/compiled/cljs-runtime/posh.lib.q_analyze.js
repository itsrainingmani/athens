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
var G__46839 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46839) : stop_at_QMARK_.call(null,G__46839));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__46840 = stop_at_QMARK_;
var G__46841 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__46840,G__46841) : posh.lib.q_analyze.take_until.call(null,G__46840,G__46841));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__46843 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46843) : rest_at_QMARK_.call(null,G__46843));
}
})())){
return ls;
} else {
var G__47220 = rest_at_QMARK_;
var G__47221 = cljs.core.rest(ls);
rest_at_QMARK_ = G__47220;
ls = G__47221;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__46844 = split_at_QMARK_;
var G__46845 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__46844,G__46845) : posh.lib.q_analyze.split_list_at.call(null,G__46844,G__46845));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__46846 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46846) : posh.lib.q_analyze.get_all_vars.call(null,G__46846));
})(),(function (){var G__46847 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46847) : posh.lib.q_analyze.get_all_vars.call(null,G__46847));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__46848 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46848) : posh.lib.q_analyze.get_all_vars.call(null,G__46848));
})(),cljs.core.first(query));
} else {
var G__46849 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46849) : posh.lib.q_analyze.get_all_vars.call(null,G__46849));

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
var G__46851 = cljs.core.rest(eav);
var G__46852 = (n - (1));
var G__46853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__46854 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__46851,G__46852,G__46853,G__46854) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__46851,G__46852,G__46853,G__46854));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__46855 = cljs.core.rest(eav);
var G__46856 = (n - (1));
var G__46857 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__46858 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__46855,G__46856,G__46857,G__46858) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__46855,G__46856,G__46857,G__46858));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__46859 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__46859) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__46859));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__46862 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__46862) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__46862));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__46865 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46865) : posh.lib.q_analyze.get_eavs.call(null,G__46865));
})(),(function (){var G__46866 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46866) : posh.lib.q_analyze.get_eavs.call(null,G__46866));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__46868 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46868) : posh.lib.q_analyze.get_eavs.call(null,G__46868));
})(),(function (){var G__46870 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46870) : posh.lib.q_analyze.get_eavs.call(null,G__46870));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__46872 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46872) : posh.lib.q_analyze.get_eavs.call(null,G__46872));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_46883 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_46883)) && ((cljs.core.count(ocr_46883) === 2)))){
try{var ocr_46883_0__46892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883,(0));
if(((cljs.core.vector_QMARK_(ocr_46883_0__46892)) && ((cljs.core.count(ocr_46883_0__46892) === 5)))){
try{var ocr_46883_0__46892_0__46894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883_0__46892,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46883_0__46892_0__46894,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883_0__46892,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883_0__46892,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883_0__46892,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46883,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__46904 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46904) : posh.lib.q_analyze.get_eavs.call(null,G__46904));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e46903){if((e46903 instanceof Error)){
var e__45936__auto__ = e46903;
if((e__45936__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto__;
}
} else {
throw e46903;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46902){if((e46902 instanceof Error)){
var e__45936__auto__ = e46902;
if((e__45936__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto__;
}
} else {
throw e46902;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46900){if((e46900 instanceof Error)){
var e__45936__auto__ = e46900;
if((e__45936__auto__ === cljs.core.match.backtrack)){
var G__46901 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46901) : posh.lib.q_analyze.get_eavs.call(null,G__46901));
} else {
throw e__45936__auto__;
}
} else {
throw e46900;

}
}} else {
var G__46905 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46905) : posh.lib.q_analyze.get_eavs.call(null,G__46905));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__46906){
var vec__46907 = p__46906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46907,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46910_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__46910_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__46910_SHARP_);
} else {
return p1__46910_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__46911 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46911) : posh.lib.q_analyze.count_qvars.call(null,G__46911));
})(),(function (){var G__46912 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46912) : posh.lib.q_analyze.count_qvars.call(null,G__46912));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__46913 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46913) : posh.lib.q_analyze.count_qvars.call(null,G__46913));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__46914(s__46915){
return (new cljs.core.LazySeq(null,(function (){
var s__46915__$1 = s__46915;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46915__$1);
if(temp__5735__auto__){
var s__46915__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46915__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46915__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46917 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46916 = (0);
while(true){
if((i__46916 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46916);
cljs.core.chunk_append(b__46917,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__47255 = (i__46916 + (1));
i__46916 = G__47255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46917),posh$lib$q_analyze$fill_qvar_set_$_iter__46914(cljs.core.chunk_rest(s__46915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46917),null);
}
} else {
var r = cljs.core.first(s__46915__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__46914(cljs.core.rest(s__46915__$2)));
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
return cljs.core.cons((function (){var G__46918 = cljs.core.first(seq1);
var G__46919 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46918,G__46919) : f.call(null,G__46918,G__46919));
})(),(function (){var G__46920 = f;
var G__46921 = cljs.core.rest(seq1);
var G__46922 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__46920,G__46921,G__46922) : posh.lib.q_analyze.seq_merge_with.call(null,G__46920,G__46921,G__46922));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__46925){
var vec__46926 = p__46925;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(2),null);
var eav = vec__46926;
var vec__46929 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932(s__46933){
return (new cljs.core.LazySeq(null,(function (){
var s__46933__$1 = s__46933;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46933__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__46933__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932_$_iter__46934(s__46935){
return (new cljs.core.LazySeq(null,((function (s__46933__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (){
var s__46935__$1 = s__46935;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46935__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__46935__$1,s__46933__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932_$_iter__46934_$_iter__46936(s__46937){
return (new cljs.core.LazySeq(null,((function (s__46935__$1,s__46933__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (){
var s__46937__$1 = s__46937;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__46937__$1);
if(temp__5735__auto____$2){
var s__46937__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__46937__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46937__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46939 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46938 = (0);
while(true){
if((i__46938 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46938);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46938,s__46937__$1,s__46935__$1,s__46933__$1,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p1__46923_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__46923_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__46938,s__46937__$1,s__46935__$1,s__46933__$1,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46938,s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p__46940){
var vec__46941 = p__46940;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46941,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46941,(1),null);
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
});})(i__46938,s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46938,s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p1__46924_SHARP_){
if(cljs.core.truth_(p1__46924_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__46938,s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__46939,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__46939,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__47257 = (i__46938 + (1));
i__46938 = G__47257;
continue;
} else {
var G__47258 = (i__46938 + (1));
i__46938 = G__47258;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46939),posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932_$_iter__46934_$_iter__46936(cljs.core.chunk_rest(s__46937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46939),null);
}
} else {
var vv = cljs.core.first(s__46937__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46937__$1,s__46935__$1,s__46933__$1,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p1__46923_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__46923_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__46937__$1,s__46935__$1,s__46933__$1,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p__46944){
var vec__46945 = p__46944;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46945,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46945,(1),null);
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
});})(s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,exposed_qvars,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav){
return (function (p1__46924_SHARP_){
if(cljs.core.truth_(p1__46924_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__46937__$1,s__46935__$1,s__46933__$1,wildcard_count,exposed_qvars,vv,s__46937__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932_$_iter__46934_$_iter__46936(cljs.core.rest(s__46937__$2)));
} else {
var G__47259 = cljs.core.rest(s__46937__$2);
s__46937__$1 = G__47259;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46935__$1,s__46933__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,null,null));
});})(s__46935__$1,s__46933__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932_$_iter__46934(cljs.core.rest(s__46935__$1)));
} else {
var G__47260 = cljs.core.rest(s__46935__$1);
s__46935__$1 = G__47260;
continue;
}
} else {
return null;
}
break;
}
});})(s__46933__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
,null,null));
});})(s__46933__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46929,qe,qa,qv,vec__46926,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__46932(cljs.core.rest(s__46933__$1)));
} else {
var G__47261 = cljs.core.rest(s__46933__$1);
s__46933__$1 = G__47261;
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
var ocr_46948 = cljs.core.vec(eav);
var ocr_46949 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_46948)) && ((cljs.core.count(ocr_46948) === 3)))){
try{var ocr_46948_0__46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_0__46977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47053){if((e47053 instanceof Error)){
var e__45936__auto__ = e47053;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46949)) && ((cljs.core.count(ocr_46949) === 3)))){
try{var ocr_46949_2__46982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46982 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47055){if((e47055 instanceof Error)){
var e__45936__auto____$1 = e47055;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46982 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47056){if((e47056 instanceof Error)){
var e__45936__auto____$2 = e47056;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47056;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e47055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47054){if((e47054 instanceof Error)){
var e__45936__auto____$1 = e47054;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47054;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e47053;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47048){if((e47048 instanceof Error)){
var e__45936__auto__ = e47048;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_46949)) && ((cljs.core.count(ocr_46949) === 3)))){
try{var ocr_46949_1__46984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46984 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47051){if((e47051 instanceof Error)){
var e__45936__auto____$1 = e47051;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46949_1__46984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46984 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47052){if((e47052 instanceof Error)){
var e__45936__auto____$2 = e47052;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47052;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e47051;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47050){if((e47050 instanceof Error)){
var e__45936__auto____$1 = e47050;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47049){if((e47049 instanceof Error)){
var e__45936__auto____$1 = e47049;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47049;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e47048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46990){if((e46990 instanceof Error)){
var e__45936__auto__ = e46990;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46949)) && ((cljs.core.count(ocr_46949) === 3)))){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47047){if((e47047 instanceof Error)){
var e__45936__auto____$1 = e47047;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47047;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47046){if((e47046 instanceof Error)){
var e__45936__auto____$1 = e47046;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47046;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46992){if((e46992 instanceof Error)){
var e__45936__auto____$1 = e46992;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47043){if((e47043 instanceof Error)){
var e__45936__auto____$2 = e47043;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47044){if((e47044 instanceof Error)){
var e__45936__auto____$3 = e47044;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47045){if((e47045 instanceof Error)){
var e__45936__auto____$4 = e47045;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47045;

}
}} else {
throw e__45936__auto____$3;
}
} else {
throw e47044;

}
}} else {
throw e__45936__auto____$2;
}
} else {
throw e47043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47042){if((e47042 instanceof Error)){
var e__45936__auto____$2 = e47042;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46993){if((e46993 instanceof Error)){
var e__45936__auto____$2 = e46993;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47041){if((e47041 instanceof Error)){
var e__45936__auto____$3 = e47041;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$3;
}
} else {
throw e47041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47038){if((e47038 instanceof Error)){
var e__45936__auto____$3 = e47038;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
try{var ocr_46948_2__46979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_2__46979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47040){if((e47040 instanceof Error)){
var e__45936__auto____$4 = e47040;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47040;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47039){if((e47039 instanceof Error)){
var e__45936__auto____$4 = e47039;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47039;

}
}} else {
throw e__45936__auto____$3;
}
} else {
throw e47038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46994){if((e46994 instanceof Error)){
var e__45936__auto____$3 = e46994;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47037){if((e47037 instanceof Error)){
var e__45936__auto____$4 = e47037;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47036){if((e47036 instanceof Error)){
var e__45936__auto____$4 = e47036;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46995){if((e46995 instanceof Error)){
var e__45936__auto____$4 = e46995;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47035){if((e47035 instanceof Error)){
var e__45936__auto____$5 = e47035;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$5;
}
} else {
throw e47035;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47034){if((e47034 instanceof Error)){
var e__45936__auto____$5 = e47034;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$5;
}
} else {
throw e47034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46996){if((e46996 instanceof Error)){
var e__45936__auto____$5 = e46996;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47033){if((e47033 instanceof Error)){
var e__45936__auto____$6 = e47033;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$6;
}
} else {
throw e47033;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47032){if((e47032 instanceof Error)){
var e__45936__auto____$6 = e47032;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$6;
}
} else {
throw e47032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46997){if((e46997 instanceof Error)){
var e__45936__auto____$6 = e46997;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46948_1__46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_1__46978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47031){if((e47031 instanceof Error)){
var e__45936__auto____$7 = e47031;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47031;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47030){if((e47030 instanceof Error)){
var e__45936__auto____$7 = e47030;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47030;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46998){if((e46998 instanceof Error)){
var e__45936__auto____$7 = e46998;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
try{var ocr_46948_0__46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_0__46977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47029){if((e47029 instanceof Error)){
var e__45936__auto____$8 = e47029;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$8;
}
} else {
throw e47029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47028){if((e47028 instanceof Error)){
var e__45936__auto____$8 = e47028;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$8;
}
} else {
throw e47028;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46999){if((e46999 instanceof Error)){
var e__45936__auto____$8 = e46999;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
try{var ocr_46948_0__46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_0__46977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47027){if((e47027 instanceof Error)){
var e__45936__auto____$9 = e47027;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$9;
}
} else {
throw e47027;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47026){if((e47026 instanceof Error)){
var e__45936__auto____$9 = e47026;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$9;
}
} else {
throw e47026;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47000){if((e47000 instanceof Error)){
var e__45936__auto____$9 = e47000;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
try{var ocr_46948_0__46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_0__46977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47025){if((e47025 instanceof Error)){
var e__45936__auto____$10 = e47025;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47025;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47024){if((e47024 instanceof Error)){
var e__45936__auto____$10 = e47024;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47001){if((e47001 instanceof Error)){
var e__45936__auto____$10 = e47001;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
try{var ocr_46948_0__46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46948_0__46977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47023){if((e47023 instanceof Error)){
var e__45936__auto____$11 = e47023;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$11;
}
} else {
throw e47023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47022){if((e47022 instanceof Error)){
var e__45936__auto____$11 = e47022;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$11;
}
} else {
throw e47022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47002){if((e47002 instanceof Error)){
var e__45936__auto____$11 = e47002;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47021){if((e47021 instanceof Error)){
var e__45936__auto____$12 = e47021;
if((e__45936__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$12;
}
} else {
throw e47021;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47016){if((e47016 instanceof Error)){
var e__45936__auto____$12 = e47016;
if((e__45936__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47020){if((e47020 instanceof Error)){
var e__45936__auto____$13 = e47020;
if((e__45936__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$13;
}
} else {
throw e47020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47017){if((e47017 instanceof Error)){
var e__45936__auto____$13 = e47017;
if((e__45936__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47019){if((e47019 instanceof Error)){
var e__45936__auto____$14 = e47019;
if((e__45936__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$14;
}
} else {
throw e47019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47018){if((e47018 instanceof Error)){
var e__45936__auto____$14 = e47018;
if((e__45936__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$14;
}
} else {
throw e47018;

}
}} else {
throw e__45936__auto____$13;
}
} else {
throw e47017;

}
}} else {
throw e__45936__auto____$12;
}
} else {
throw e47016;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47003){if((e47003 instanceof Error)){
var e__45936__auto____$12 = e47003;
if((e__45936__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47015){if((e47015 instanceof Error)){
var e__45936__auto____$13 = e47015;
if((e__45936__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$13;
}
} else {
throw e47015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47014){if((e47014 instanceof Error)){
var e__45936__auto____$13 = e47014;
if((e__45936__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$13;
}
} else {
throw e47014;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47004){if((e47004 instanceof Error)){
var e__45936__auto____$13 = e47004;
if((e__45936__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === true)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47013){if((e47013 instanceof Error)){
var e__45936__auto____$14 = e47013;
if((e__45936__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$14;
}
} else {
throw e47013;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47012){if((e47012 instanceof Error)){
var e__45936__auto____$14 = e47012;
if((e__45936__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$14;
}
} else {
throw e47012;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47005){if((e47005 instanceof Error)){
var e__45936__auto____$14 = e47005;
if((e__45936__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_46949_2__46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(2));
if((ocr_46949_2__46988 === false)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === true)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47011){if((e47011 instanceof Error)){
var e__45936__auto____$15 = e47011;
if((e__45936__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$15;
}
} else {
throw e47011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47007){if((e47007 instanceof Error)){
var e__45936__auto____$15 = e47007;
if((e__45936__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_46949_0__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(0));
if((ocr_46949_0__46986 === false)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47009){if((e47009 instanceof Error)){
var e__45936__auto____$16 = e47009;
if((e__45936__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_46949_1__46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46949,(1));
if((ocr_46949_1__46987 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46948,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47010){if((e47010 instanceof Error)){
var e__45936__auto____$17 = e47010;
if((e__45936__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$17;
}
} else {
throw e47010;

}
}} else {
throw e__45936__auto____$16;
}
} else {
throw e47009;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47008){if((e47008 instanceof Error)){
var e__45936__auto____$16 = e47008;
if((e__45936__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$16;
}
} else {
throw e47008;

}
}} else {
throw e__45936__auto____$15;
}
} else {
throw e47007;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47006){if((e47006 instanceof Error)){
var e__45936__auto____$15 = e47006;
if((e__45936__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$15;
}
} else {
throw e47006;

}
}} else {
throw e__45936__auto____$14;
}
} else {
throw e47005;

}
}} else {
throw e__45936__auto____$13;
}
} else {
throw e47004;

}
}} else {
throw e__45936__auto____$12;
}
} else {
throw e47003;

}
}} else {
throw e__45936__auto____$11;
}
} else {
throw e47002;

}
}} else {
throw e__45936__auto____$10;
}
} else {
throw e47001;

}
}} else {
throw e__45936__auto____$9;
}
} else {
throw e47000;

}
}} else {
throw e__45936__auto____$8;
}
} else {
throw e46999;

}
}} else {
throw e__45936__auto____$7;
}
} else {
throw e46998;

}
}} else {
throw e__45936__auto____$6;
}
} else {
throw e46997;

}
}} else {
throw e__45936__auto____$5;
}
} else {
throw e46996;

}
}} else {
throw e__45936__auto____$4;
}
} else {
throw e46995;

}
}} else {
throw e__45936__auto____$3;
}
} else {
throw e46994;

}
}} else {
throw e__45936__auto____$2;
}
} else {
throw e46993;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e46992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46991){if((e46991 instanceof Error)){
var e__45936__auto____$1 = e46991;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e46991;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e46990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46989){if((e46989 instanceof Error)){
var e__45936__auto__ = e46989;
if((e__45936__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__45936__auto__;
}
} else {
throw e46989;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_47057 = cljs.core.vec(eav);
var ocr_47058 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_47057)) && ((cljs.core.count(ocr_47057) === 3)))){
try{var ocr_47057_0__47083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_0__47083,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47057_2__47085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_2__47085,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e47147){if((e47147 instanceof Error)){
var e__45936__auto__ = e47147;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47058)) && ((cljs.core.count(ocr_47058) === 3)))){
try{var ocr_47058_2__47088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47088 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47149){if((e47149 instanceof Error)){
var e__45936__auto____$1 = e47149;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47088 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47150){if((e47150 instanceof Error)){
var e__45936__auto____$2 = e47150;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47150;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e47149;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47148){if((e47148 instanceof Error)){
var e__45936__auto____$1 = e47148;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47148;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e47147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47142){if((e47142 instanceof Error)){
var e__45936__auto__ = e47142;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{var ocr_47057_2__47085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_2__47085,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_47058)) && ((cljs.core.count(ocr_47058) === 3)))){
try{var ocr_47058_1__47090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47090 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47145){if((e47145 instanceof Error)){
var e__45936__auto____$1 = e47145;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47090 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47146){if((e47146 instanceof Error)){
var e__45936__auto____$2 = e47146;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47146;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e47145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47144){if((e47144 instanceof Error)){
var e__45936__auto____$1 = e47144;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47143){if((e47143 instanceof Error)){
var e__45936__auto____$1 = e47143;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47143;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e47142;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47096){if((e47096 instanceof Error)){
var e__45936__auto__ = e47096;
if((e__45936__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47058)) && ((cljs.core.count(ocr_47058) === 3)))){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47057_2__47085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_2__47085,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47141){if((e47141 instanceof Error)){
var e__45936__auto____$1 = e47141;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47141;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47140){if((e47140 instanceof Error)){
var e__45936__auto____$1 = e47140;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47140;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47098){if((e47098 instanceof Error)){
var e__45936__auto____$1 = e47098;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
try{var ocr_47057_2__47085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_2__47085,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47137){if((e47137 instanceof Error)){
var e__45936__auto____$2 = e47137;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47138){if((e47138 instanceof Error)){
var e__45936__auto____$3 = e47138;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47139){if((e47139 instanceof Error)){
var e__45936__auto____$4 = e47139;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47139;

}
}} else {
throw e__45936__auto____$3;
}
} else {
throw e47138;

}
}} else {
throw e__45936__auto____$2;
}
} else {
throw e47137;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47136){if((e47136 instanceof Error)){
var e__45936__auto____$2 = e47136;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$2;
}
} else {
throw e47136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47099){if((e47099 instanceof Error)){
var e__45936__auto____$2 = e47099;
if((e__45936__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
try{var ocr_47057_2__47085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_2__47085,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47135){if((e47135 instanceof Error)){
var e__45936__auto____$3 = e47135;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$3;
}
} else {
throw e47135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47134){if((e47134 instanceof Error)){
var e__45936__auto____$3 = e47134;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$3;
}
} else {
throw e47134;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47100){if((e47100 instanceof Error)){
var e__45936__auto____$3 = e47100;
if((e__45936__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === true)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47133){if((e47133 instanceof Error)){
var e__45936__auto____$4 = e47133;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47133;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47132){if((e47132 instanceof Error)){
var e__45936__auto____$4 = e47132;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$4;
}
} else {
throw e47132;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47101){if((e47101 instanceof Error)){
var e__45936__auto____$4 = e47101;
if((e__45936__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === false)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47131){if((e47131 instanceof Error)){
var e__45936__auto____$5 = e47131;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$5;
}
} else {
throw e47131;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47130){if((e47130 instanceof Error)){
var e__45936__auto____$5 = e47130;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$5;
}
} else {
throw e47130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47102){if((e47102 instanceof Error)){
var e__45936__auto____$5 = e47102;
if((e__45936__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === true)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
try{var ocr_47057_1__47084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_1__47084,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47129){if((e47129 instanceof Error)){
var e__45936__auto____$6 = e47129;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$6;
}
} else {
throw e47129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47126){if((e47126 instanceof Error)){
var e__45936__auto____$6 = e47126;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
try{var ocr_47057_0__47083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_0__47083,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47128){if((e47128 instanceof Error)){
var e__45936__auto____$7 = e47128;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47128;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47127){if((e47127 instanceof Error)){
var e__45936__auto____$7 = e47127;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47127;

}
}} else {
throw e__45936__auto____$6;
}
} else {
throw e47126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47103){if((e47103 instanceof Error)){
var e__45936__auto____$6 = e47103;
if((e__45936__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === false)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
try{var ocr_47057_0__47083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_0__47083,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47125){if((e47125 instanceof Error)){
var e__45936__auto____$7 = e47125;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47125;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47124){if((e47124 instanceof Error)){
var e__45936__auto____$7 = e47124;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$7;
}
} else {
throw e47124;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47104){if((e47104 instanceof Error)){
var e__45936__auto____$7 = e47104;
if((e__45936__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === true)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === false)){
try{var ocr_47057_0__47083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47057_0__47083,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47123){if((e47123 instanceof Error)){
var e__45936__auto____$8 = e47123;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$8;
}
} else {
throw e47123;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47117){if((e47117 instanceof Error)){
var e__45936__auto____$8 = e47117;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47121){if((e47121 instanceof Error)){
var e__45936__auto____$9 = e47121;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47122){if((e47122 instanceof Error)){
var e__45936__auto____$10 = e47122;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47122;

}
}} else {
throw e__45936__auto____$9;
}
} else {
throw e47121;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47118){if((e47118 instanceof Error)){
var e__45936__auto____$9 = e47118;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === false)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47120){if((e47120 instanceof Error)){
var e__45936__auto____$10 = e47120;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47120;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47119){if((e47119 instanceof Error)){
var e__45936__auto____$10 = e47119;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47119;

}
}} else {
throw e__45936__auto____$9;
}
} else {
throw e47118;

}
}} else {
throw e__45936__auto____$8;
}
} else {
throw e47117;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47105){if((e47105 instanceof Error)){
var e__45936__auto____$8 = e47105;
if((e__45936__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === false)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47116){if((e47116 instanceof Error)){
var e__45936__auto____$9 = e47116;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$9;
}
} else {
throw e47116;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47115){if((e47115 instanceof Error)){
var e__45936__auto____$9 = e47115;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$9;
}
} else {
throw e47115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47106){if((e47106 instanceof Error)){
var e__45936__auto____$9 = e47106;
if((e__45936__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === true)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47114){if((e47114 instanceof Error)){
var e__45936__auto____$10 = e47114;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47113){if((e47113 instanceof Error)){
var e__45936__auto____$10 = e47113;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$10;
}
} else {
throw e47113;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47107){if((e47107 instanceof Error)){
var e__45936__auto____$10 = e47107;
if((e__45936__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_47058_2__47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(2));
if((ocr_47058_2__47094 === false)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === true)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47112){if((e47112 instanceof Error)){
var e__45936__auto____$11 = e47112;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$11;
}
} else {
throw e47112;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47109){if((e47109 instanceof Error)){
var e__45936__auto____$11 = e47109;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_47058_0__47092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(0));
if((ocr_47058_0__47092 === false)){
try{var ocr_47058_1__47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47058,(1));
if((ocr_47058_1__47093 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47057,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47111){if((e47111 instanceof Error)){
var e__45936__auto____$12 = e47111;
if((e__45936__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$12;
}
} else {
throw e47111;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47110){if((e47110 instanceof Error)){
var e__45936__auto____$12 = e47110;
if((e__45936__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$12;
}
} else {
throw e47110;

}
}} else {
throw e__45936__auto____$11;
}
} else {
throw e47109;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47108){if((e47108 instanceof Error)){
var e__45936__auto____$11 = e47108;
if((e__45936__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$11;
}
} else {
throw e47108;

}
}} else {
throw e__45936__auto____$10;
}
} else {
throw e47107;

}
}} else {
throw e__45936__auto____$9;
}
} else {
throw e47106;

}
}} else {
throw e__45936__auto____$8;
}
} else {
throw e47105;

}
}} else {
throw e__45936__auto____$7;
}
} else {
throw e47104;

}
}} else {
throw e__45936__auto____$6;
}
} else {
throw e47103;

}
}} else {
throw e__45936__auto____$5;
}
} else {
throw e47102;

}
}} else {
throw e__45936__auto____$4;
}
} else {
throw e47101;

}
}} else {
throw e__45936__auto____$3;
}
} else {
throw e47100;

}
}} else {
throw e__45936__auto____$2;
}
} else {
throw e47099;

}
}} else {
throw e__45936__auto____$1;
}
} else {
throw e47098;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47097){if((e47097 instanceof Error)){
var e__45936__auto____$1 = e47097;
if((e__45936__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45936__auto____$1;
}
} else {
throw e47097;

}
}} else {
throw e__45936__auto__;
}
} else {
throw e47096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47095){if((e47095 instanceof Error)){
var e__45936__auto__ = e47095;
if((e__45936__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__45936__auto__;
}
} else {
throw e47095;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47152){
var vec__47153 = p__47152;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47151_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__47151_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47157){
var vec__47158 = p__47157;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47158,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47156_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__47156_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__47161 = cljs.core.rest(ins);
var G__47162 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__47161,G__47162) : posh.lib.q_analyze.just_qvars.call(null,G__47161,G__47162));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47163_SHARP_){
return cljs.core.zipmap(qvars,p1__47163_SHARP_);
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
var vec__47164 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47164,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47164,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47164,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47164,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__47347 = var$;
var G__47348 = dbvarmap;
var G__47349 = cljs.core.rest(dbeavs);
var$ = G__47347;
dbvarmap = G__47348;
dbeavs = G__47349;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__47167 = cljs.core.rest(vars);
var G__47168 = dbvarmap;
var G__47169 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__47167,G__47168,G__47169) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__47167,G__47168,G__47169));
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
var G__47350 = (n + (1));
var G__47351 = cljs.core.rest(xs__$1);
n = G__47350;
xs__$1 = G__47351;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47170_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__47170_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__47170_SHARP_) : type.call(null,p1__47170_SHARP_));
} else {
return p1__47170_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__47171 = cljs.core.rest(ins);
var G__47172 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__47171,G__47172) : posh.lib.q_analyze.make_dbarg_map.call(null,G__47171,G__47172));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47173){
var vec__47174 = p__47173;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__47178_SHARP_,p2__47177_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__47177_SHARP_)){
return p1__47178_SHARP_;
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
var pred__47182 = cljs.core._EQ_;
var expr__47183 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__47182.cljs$core$IFn$_invoke$arity$2 ? pred__47182.cljs$core$IFn$_invoke$arity$2((1),expr__47183) : pred__47182.call(null,(1),expr__47183)))){
return true;
} else {
if(cljs.core.truth_((pred__47182.cljs$core$IFn$_invoke$arity$2 ? pred__47182.cljs$core$IFn$_invoke$arity$2((3),expr__47183) : pred__47182.call(null,(3),expr__47183)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__47352 = cljs.core.first(remaining);
var G__47353 = cljs.core.rest(remaining);
clause = G__47352;
remaining = G__47353;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__47354 = cljs.core.first(remaining);
var G__47355 = cljs.core.rest(remaining);
clause = G__47354;
remaining = G__47355;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__47185(s__47186){
return (new cljs.core.LazySeq(null,(function (){
var s__47186__$1 = s__47186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47186__$1);
if(temp__5735__auto__){
var s__47186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47186__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47186__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47188 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47187 = (0);
while(true){
if((i__47187 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47187);
cljs.core.chunk_append(b__47188,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__47356 = (i__47187 + (1));
i__47187 = G__47356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47188),posh$lib$q_analyze$resolve_any_idents_$_iter__47185(cljs.core.chunk_rest(s__47186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47188),null);
}
} else {
var var_value = cljs.core.first(s__47186__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__47185(cljs.core.rest(s__47186__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47193){
var vec__47194 = p__47193;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47197){
var vec__47198 = p__47197;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47198,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47201){
var vec__47202 = p__47201;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47205){
var vec__47206 = p__47205;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__47210 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__47211 = cljs.core.vec(r);
var fexpr__47209 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__47209.cljs$core$IFn$_invoke$arity$2 ? fexpr__47209.cljs$core$IFn$_invoke$arity$2(G__47210,G__47211) : fexpr__47209.call(null,G__47210,G__47211));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47212){
var vec__47213 = p__47212;
var seq__47214 = cljs.core.seq(vec__47213);
var first__47215 = cljs.core.first(seq__47214);
var seq__47214__$1 = cljs.core.next(seq__47214);
var db = first__47215;
var eav = seq__47214__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47216){
var vec__47217 = p__47216;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__47191_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__47191_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__47191_SHARP_) : linked_qvars.call(null,p1__47191_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47191_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__47192_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__47192_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47192_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
