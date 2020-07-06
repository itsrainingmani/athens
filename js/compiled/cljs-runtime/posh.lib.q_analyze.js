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
var G__68211 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__68211) : stop_at_QMARK_.call(null,G__68211));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__68214 = stop_at_QMARK_;
var G__68215 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__68214,G__68215) : posh.lib.q_analyze.take_until.call(null,G__68214,G__68215));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__68218 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__68218) : rest_at_QMARK_.call(null,G__68218));
}
})())){
return ls;
} else {
var G__68987 = rest_at_QMARK_;
var G__68988 = cljs.core.rest(ls);
rest_at_QMARK_ = G__68987;
ls = G__68988;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__68219 = split_at_QMARK_;
var G__68220 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__68219,G__68220) : posh.lib.q_analyze.split_list_at.call(null,G__68219,G__68220));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__68222 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68222) : posh.lib.q_analyze.get_all_vars.call(null,G__68222));
})(),(function (){var G__68223 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68223) : posh.lib.q_analyze.get_all_vars.call(null,G__68223));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__68224 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68224) : posh.lib.q_analyze.get_all_vars.call(null,G__68224));
})(),cljs.core.first(query));
} else {
var G__68225 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68225) : posh.lib.q_analyze.get_all_vars.call(null,G__68225));

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
var G__68232 = cljs.core.rest(eav);
var G__68233 = (n - (1));
var G__68234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__68235 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__68232,G__68233,G__68234,G__68235) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__68232,G__68233,G__68234,G__68235));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__68236 = cljs.core.rest(eav);
var G__68237 = (n - (1));
var G__68238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__68239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__68236,G__68237,G__68238,G__68239) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__68236,G__68237,G__68238,G__68239));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__68242 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__68242) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__68242));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__68243 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__68243) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__68243));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__68258 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68258) : posh.lib.q_analyze.get_eavs.call(null,G__68258));
})(),(function (){var G__68262 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68262) : posh.lib.q_analyze.get_eavs.call(null,G__68262));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__68263 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68263) : posh.lib.q_analyze.get_eavs.call(null,G__68263));
})(),(function (){var G__68264 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68264) : posh.lib.q_analyze.get_eavs.call(null,G__68264));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__68265 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68265) : posh.lib.q_analyze.get_eavs.call(null,G__68265));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_68266 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_68266)) && ((cljs.core.count(ocr_68266) === 2)))){
try{var ocr_68266_0__68277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266,(0));
if(((cljs.core.vector_QMARK_(ocr_68266_0__68277)) && ((cljs.core.count(ocr_68266_0__68277) === 5)))){
try{var ocr_68266_0__68277_0__68282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266_0__68277,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68266_0__68277_0__68282,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266_0__68277,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266_0__68277,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266_0__68277,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68266,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__68315 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68315) : posh.lib.q_analyze.get_eavs.call(null,G__68315));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e68310){if((e68310 instanceof Error)){
var e__66921__auto__ = e68310;
if((e__66921__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto__;
}
} else {
throw e68310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68306){if((e68306 instanceof Error)){
var e__66921__auto__ = e68306;
if((e__66921__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto__;
}
} else {
throw e68306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68297){if((e68297 instanceof Error)){
var e__66921__auto__ = e68297;
if((e__66921__auto__ === cljs.core.match.backtrack)){
var G__68302 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68302) : posh.lib.q_analyze.get_eavs.call(null,G__68302));
} else {
throw e__66921__auto__;
}
} else {
throw e68297;

}
}} else {
var G__68316 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68316) : posh.lib.q_analyze.get_eavs.call(null,G__68316));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__68319){
var vec__68320 = p__68319;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68320,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68323_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__68323_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__68323_SHARP_);
} else {
return p1__68323_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__68325 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68325) : posh.lib.q_analyze.count_qvars.call(null,G__68325));
})(),(function (){var G__68326 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68326) : posh.lib.q_analyze.count_qvars.call(null,G__68326));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__68327 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68327) : posh.lib.q_analyze.count_qvars.call(null,G__68327));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__68328(s__68329){
return (new cljs.core.LazySeq(null,(function (){
var s__68329__$1 = s__68329;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68329__$1);
if(temp__5735__auto__){
var s__68329__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68329__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68329__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68331 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68330 = (0);
while(true){
if((i__68330 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68330);
cljs.core.chunk_append(b__68331,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__69065 = (i__68330 + (1));
i__68330 = G__69065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68331),posh$lib$q_analyze$fill_qvar_set_$_iter__68328(cljs.core.chunk_rest(s__68329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68331),null);
}
} else {
var r = cljs.core.first(s__68329__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__68328(cljs.core.rest(s__68329__$2)));
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
return cljs.core.cons((function (){var G__68336 = cljs.core.first(seq1);
var G__68337 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68336,G__68337) : f.call(null,G__68336,G__68337));
})(),(function (){var G__68338 = f;
var G__68339 = cljs.core.rest(seq1);
var G__68340 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__68338,G__68339,G__68340) : posh.lib.q_analyze.seq_merge_with.call(null,G__68338,G__68339,G__68340));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__68351){
var vec__68352 = p__68351;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68352,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68352,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68352,(2),null);
var eav = vec__68352;
var vec__68355 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68355,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68355,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68355,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358(s__68359){
return (new cljs.core.LazySeq(null,(function (){
var s__68359__$1 = s__68359;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68359__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__68359__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358_$_iter__68360(s__68361){
return (new cljs.core.LazySeq(null,((function (s__68359__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (){
var s__68361__$1 = s__68361;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68361__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__68361__$1,s__68359__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358_$_iter__68360_$_iter__68362(s__68363){
return (new cljs.core.LazySeq(null,((function (s__68361__$1,s__68359__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (){
var s__68363__$1 = s__68363;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68363__$1);
if(temp__5735__auto____$2){
var s__68363__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68363__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68363__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68365 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68364 = (0);
while(true){
if((i__68364 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68364);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68364,s__68363__$1,s__68361__$1,s__68359__$1,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p1__68349_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__68349_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__68364,s__68363__$1,s__68361__$1,s__68359__$1,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68364,s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p__68367){
var vec__68368 = p__68367;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68368,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68368,(1),null);
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
});})(i__68364,s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68364,s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p1__68350_SHARP_){
if(cljs.core.truth_(p1__68350_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__68364,s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__68365,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__69075 = (i__68364 + (1));
i__68364 = G__69075;
continue;
} else {
var G__69076 = (i__68364 + (1));
i__68364 = G__69076;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68365),posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358_$_iter__68360_$_iter__68362(cljs.core.chunk_rest(s__68363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68365),null);
}
} else {
var vv = cljs.core.first(s__68363__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68363__$1,s__68361__$1,s__68359__$1,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p1__68349_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__68349_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__68363__$1,s__68361__$1,s__68359__$1,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p__68375){
var vec__68376 = p__68375;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68376,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68376,(1),null);
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
});})(s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,exposed_qvars,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav){
return (function (p1__68350_SHARP_){
if(cljs.core.truth_(p1__68350_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__68363__$1,s__68361__$1,s__68359__$1,wildcard_count,exposed_qvars,vv,s__68363__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358_$_iter__68360_$_iter__68362(cljs.core.rest(s__68363__$2)));
} else {
var G__69081 = cljs.core.rest(s__68363__$2);
s__68363__$1 = G__69081;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__68361__$1,s__68359__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,null,null));
});})(s__68361__$1,s__68359__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358_$_iter__68360(cljs.core.rest(s__68361__$1)));
} else {
var G__69082 = cljs.core.rest(s__68361__$1);
s__68361__$1 = G__69082;
continue;
}
} else {
return null;
}
break;
}
});})(s__68359__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
,null,null));
});})(s__68359__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68355,qe,qa,qv,vec__68352,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__68358(cljs.core.rest(s__68359__$1)));
} else {
var G__69083 = cljs.core.rest(s__68359__$1);
s__68359__$1 = G__69083;
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
var ocr_68382 = cljs.core.vec(eav);
var ocr_68383 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_68382)) && ((cljs.core.count(ocr_68382) === 3)))){
try{var ocr_68382_0__68416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_0__68416,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68628){if((e68628 instanceof Error)){
var e__66921__auto__ = e68628;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68383)) && ((cljs.core.count(ocr_68383) === 3)))){
try{var ocr_68383_2__68421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68421 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68630){if((e68630 instanceof Error)){
var e__66921__auto____$1 = e68630;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68421 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68631){if((e68631 instanceof Error)){
var e__66921__auto____$2 = e68631;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68631;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68629){if((e68629 instanceof Error)){
var e__66921__auto____$1 = e68629;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68629;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68619){if((e68619 instanceof Error)){
var e__66921__auto__ = e68619;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_68383)) && ((cljs.core.count(ocr_68383) === 3)))){
try{var ocr_68383_1__68423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68423 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68622){if((e68622 instanceof Error)){
var e__66921__auto____$1 = e68622;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68383_1__68423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68423 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68623){if((e68623 instanceof Error)){
var e__66921__auto____$2 = e68623;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68623;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68621){if((e68621 instanceof Error)){
var e__66921__auto____$1 = e68621;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68620){if((e68620 instanceof Error)){
var e__66921__auto____$1 = e68620;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68620;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68452){if((e68452 instanceof Error)){
var e__66921__auto__ = e68452;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68383)) && ((cljs.core.count(ocr_68383) === 3)))){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68606){if((e68606 instanceof Error)){
var e__66921__auto____$1 = e68606;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68605){if((e68605 instanceof Error)){
var e__66921__auto____$1 = e68605;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68455){if((e68455 instanceof Error)){
var e__66921__auto____$1 = e68455;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68597){if((e68597 instanceof Error)){
var e__66921__auto____$2 = e68597;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68598){if((e68598 instanceof Error)){
var e__66921__auto____$3 = e68598;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68599){if((e68599 instanceof Error)){
var e__66921__auto____$4 = e68599;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68599;

}
}} else {
throw e__66921__auto____$3;
}
} else {
throw e68598;

}
}} else {
throw e__66921__auto____$2;
}
} else {
throw e68597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68590){if((e68590 instanceof Error)){
var e__66921__auto____$2 = e68590;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68456){if((e68456 instanceof Error)){
var e__66921__auto____$2 = e68456;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68583){if((e68583 instanceof Error)){
var e__66921__auto____$3 = e68583;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$3;
}
} else {
throw e68583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68580){if((e68580 instanceof Error)){
var e__66921__auto____$3 = e68580;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
try{var ocr_68382_2__68418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_2__68418,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68582){if((e68582 instanceof Error)){
var e__66921__auto____$4 = e68582;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68581){if((e68581 instanceof Error)){
var e__66921__auto____$4 = e68581;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68581;

}
}} else {
throw e__66921__auto____$3;
}
} else {
throw e68580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68458){if((e68458 instanceof Error)){
var e__66921__auto____$3 = e68458;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68576){if((e68576 instanceof Error)){
var e__66921__auto____$4 = e68576;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68568){if((e68568 instanceof Error)){
var e__66921__auto____$4 = e68568;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68459){if((e68459 instanceof Error)){
var e__66921__auto____$4 = e68459;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68559){if((e68559 instanceof Error)){
var e__66921__auto____$5 = e68559;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$5;
}
} else {
throw e68559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68558){if((e68558 instanceof Error)){
var e__66921__auto____$5 = e68558;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$5;
}
} else {
throw e68558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68460){if((e68460 instanceof Error)){
var e__66921__auto____$5 = e68460;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68557){if((e68557 instanceof Error)){
var e__66921__auto____$6 = e68557;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$6;
}
} else {
throw e68557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68556){if((e68556 instanceof Error)){
var e__66921__auto____$6 = e68556;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$6;
}
} else {
throw e68556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68461){if((e68461 instanceof Error)){
var e__66921__auto____$6 = e68461;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68382_1__68417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_1__68417,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68548){if((e68548 instanceof Error)){
var e__66921__auto____$7 = e68548;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68547){if((e68547 instanceof Error)){
var e__66921__auto____$7 = e68547;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68462){if((e68462 instanceof Error)){
var e__66921__auto____$7 = e68462;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
try{var ocr_68382_0__68416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_0__68416,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68530){if((e68530 instanceof Error)){
var e__66921__auto____$8 = e68530;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$8;
}
} else {
throw e68530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68529){if((e68529 instanceof Error)){
var e__66921__auto____$8 = e68529;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$8;
}
} else {
throw e68529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68463){if((e68463 instanceof Error)){
var e__66921__auto____$8 = e68463;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
try{var ocr_68382_0__68416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_0__68416,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68521){if((e68521 instanceof Error)){
var e__66921__auto____$9 = e68521;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$9;
}
} else {
throw e68521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68519){if((e68519 instanceof Error)){
var e__66921__auto____$9 = e68519;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$9;
}
} else {
throw e68519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68464){if((e68464 instanceof Error)){
var e__66921__auto____$9 = e68464;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
try{var ocr_68382_0__68416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_0__68416,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68518){if((e68518 instanceof Error)){
var e__66921__auto____$10 = e68518;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68518;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68517){if((e68517 instanceof Error)){
var e__66921__auto____$10 = e68517;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68517;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68465){if((e68465 instanceof Error)){
var e__66921__auto____$10 = e68465;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
try{var ocr_68382_0__68416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68382_0__68416,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68516){if((e68516 instanceof Error)){
var e__66921__auto____$11 = e68516;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$11;
}
} else {
throw e68516;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68515){if((e68515 instanceof Error)){
var e__66921__auto____$11 = e68515;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$11;
}
} else {
throw e68515;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68467){if((e68467 instanceof Error)){
var e__66921__auto____$11 = e68467;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68510){if((e68510 instanceof Error)){
var e__66921__auto____$12 = e68510;
if((e__66921__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$12;
}
} else {
throw e68510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68486){if((e68486 instanceof Error)){
var e__66921__auto____$12 = e68486;
if((e__66921__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68499){if((e68499 instanceof Error)){
var e__66921__auto____$13 = e68499;
if((e__66921__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$13;
}
} else {
throw e68499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68487){if((e68487 instanceof Error)){
var e__66921__auto____$13 = e68487;
if((e__66921__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68498){if((e68498 instanceof Error)){
var e__66921__auto____$14 = e68498;
if((e__66921__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$14;
}
} else {
throw e68498;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68497){if((e68497 instanceof Error)){
var e__66921__auto____$14 = e68497;
if((e__66921__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$14;
}
} else {
throw e68497;

}
}} else {
throw e__66921__auto____$13;
}
} else {
throw e68487;

}
}} else {
throw e__66921__auto____$12;
}
} else {
throw e68486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68468){if((e68468 instanceof Error)){
var e__66921__auto____$12 = e68468;
if((e__66921__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68484){if((e68484 instanceof Error)){
var e__66921__auto____$13 = e68484;
if((e__66921__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$13;
}
} else {
throw e68484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68483){if((e68483 instanceof Error)){
var e__66921__auto____$13 = e68483;
if((e__66921__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$13;
}
} else {
throw e68483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68469){if((e68469 instanceof Error)){
var e__66921__auto____$13 = e68469;
if((e__66921__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === true)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68482){if((e68482 instanceof Error)){
var e__66921__auto____$14 = e68482;
if((e__66921__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$14;
}
} else {
throw e68482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68481){if((e68481 instanceof Error)){
var e__66921__auto____$14 = e68481;
if((e__66921__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$14;
}
} else {
throw e68481;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68470){if((e68470 instanceof Error)){
var e__66921__auto____$14 = e68470;
if((e__66921__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_68383_2__68427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(2));
if((ocr_68383_2__68427 === false)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === true)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68480){if((e68480 instanceof Error)){
var e__66921__auto____$15 = e68480;
if((e__66921__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$15;
}
} else {
throw e68480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68472){if((e68472 instanceof Error)){
var e__66921__auto____$15 = e68472;
if((e__66921__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_68383_0__68425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(0));
if((ocr_68383_0__68425 === false)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68478){if((e68478 instanceof Error)){
var e__66921__auto____$16 = e68478;
if((e__66921__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_68383_1__68426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68383,(1));
if((ocr_68383_1__68426 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68382,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68479){if((e68479 instanceof Error)){
var e__66921__auto____$17 = e68479;
if((e__66921__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$17;
}
} else {
throw e68479;

}
}} else {
throw e__66921__auto____$16;
}
} else {
throw e68478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68473){if((e68473 instanceof Error)){
var e__66921__auto____$16 = e68473;
if((e__66921__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$16;
}
} else {
throw e68473;

}
}} else {
throw e__66921__auto____$15;
}
} else {
throw e68472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68471){if((e68471 instanceof Error)){
var e__66921__auto____$15 = e68471;
if((e__66921__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$15;
}
} else {
throw e68471;

}
}} else {
throw e__66921__auto____$14;
}
} else {
throw e68470;

}
}} else {
throw e__66921__auto____$13;
}
} else {
throw e68469;

}
}} else {
throw e__66921__auto____$12;
}
} else {
throw e68468;

}
}} else {
throw e__66921__auto____$11;
}
} else {
throw e68467;

}
}} else {
throw e__66921__auto____$10;
}
} else {
throw e68465;

}
}} else {
throw e__66921__auto____$9;
}
} else {
throw e68464;

}
}} else {
throw e__66921__auto____$8;
}
} else {
throw e68463;

}
}} else {
throw e__66921__auto____$7;
}
} else {
throw e68462;

}
}} else {
throw e__66921__auto____$6;
}
} else {
throw e68461;

}
}} else {
throw e__66921__auto____$5;
}
} else {
throw e68460;

}
}} else {
throw e__66921__auto____$4;
}
} else {
throw e68459;

}
}} else {
throw e__66921__auto____$3;
}
} else {
throw e68458;

}
}} else {
throw e__66921__auto____$2;
}
} else {
throw e68456;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68453){if((e68453 instanceof Error)){
var e__66921__auto____$1 = e68453;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68453;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68451){if((e68451 instanceof Error)){
var e__66921__auto__ = e68451;
if((e__66921__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__66921__auto__;
}
} else {
throw e68451;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_68641 = cljs.core.vec(eav);
var ocr_68642 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_68641)) && ((cljs.core.count(ocr_68641) === 3)))){
try{var ocr_68641_0__68668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_0__68668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68641_2__68670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_2__68670,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e68833){if((e68833 instanceof Error)){
var e__66921__auto__ = e68833;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68642)) && ((cljs.core.count(ocr_68642) === 3)))){
try{var ocr_68642_2__68674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68674 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68838){if((e68838 instanceof Error)){
var e__66921__auto____$1 = e68838;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68674 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68839){if((e68839 instanceof Error)){
var e__66921__auto____$2 = e68839;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68839;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68834){if((e68834 instanceof Error)){
var e__66921__auto____$1 = e68834;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68834;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68823){if((e68823 instanceof Error)){
var e__66921__auto__ = e68823;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{var ocr_68641_2__68670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_2__68670,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_68642)) && ((cljs.core.count(ocr_68642) === 3)))){
try{var ocr_68642_1__68676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68676 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68827){if((e68827 instanceof Error)){
var e__66921__auto____$1 = e68827;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68676 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68828){if((e68828 instanceof Error)){
var e__66921__auto____$2 = e68828;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68828;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68826){if((e68826 instanceof Error)){
var e__66921__auto____$1 = e68826;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68824){if((e68824 instanceof Error)){
var e__66921__auto____$1 = e68824;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68824;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68721){if((e68721 instanceof Error)){
var e__66921__auto__ = e68721;
if((e__66921__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68642)) && ((cljs.core.count(ocr_68642) === 3)))){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68641_2__68670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_2__68670,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68818){if((e68818 instanceof Error)){
var e__66921__auto____$1 = e68818;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68817){if((e68817 instanceof Error)){
var e__66921__auto____$1 = e68817;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68728){if((e68728 instanceof Error)){
var e__66921__auto____$1 = e68728;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
try{var ocr_68641_2__68670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_2__68670,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68808){if((e68808 instanceof Error)){
var e__66921__auto____$2 = e68808;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68812){if((e68812 instanceof Error)){
var e__66921__auto____$3 = e68812;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68813){if((e68813 instanceof Error)){
var e__66921__auto____$4 = e68813;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68813;

}
}} else {
throw e__66921__auto____$3;
}
} else {
throw e68812;

}
}} else {
throw e__66921__auto____$2;
}
} else {
throw e68808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68807){if((e68807 instanceof Error)){
var e__66921__auto____$2 = e68807;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$2;
}
} else {
throw e68807;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68731){if((e68731 instanceof Error)){
var e__66921__auto____$2 = e68731;
if((e__66921__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
try{var ocr_68641_2__68670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_2__68670,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68801){if((e68801 instanceof Error)){
var e__66921__auto____$3 = e68801;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$3;
}
} else {
throw e68801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68800){if((e68800 instanceof Error)){
var e__66921__auto____$3 = e68800;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$3;
}
} else {
throw e68800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68735){if((e68735 instanceof Error)){
var e__66921__auto____$3 = e68735;
if((e__66921__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === true)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68797){if((e68797 instanceof Error)){
var e__66921__auto____$4 = e68797;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68796){if((e68796 instanceof Error)){
var e__66921__auto____$4 = e68796;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$4;
}
} else {
throw e68796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68736){if((e68736 instanceof Error)){
var e__66921__auto____$4 = e68736;
if((e__66921__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === false)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68793){if((e68793 instanceof Error)){
var e__66921__auto____$5 = e68793;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$5;
}
} else {
throw e68793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68792){if((e68792 instanceof Error)){
var e__66921__auto____$5 = e68792;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$5;
}
} else {
throw e68792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68737){if((e68737 instanceof Error)){
var e__66921__auto____$5 = e68737;
if((e__66921__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === true)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
try{var ocr_68641_1__68669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_1__68669,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68790){if((e68790 instanceof Error)){
var e__66921__auto____$6 = e68790;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$6;
}
} else {
throw e68790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68787){if((e68787 instanceof Error)){
var e__66921__auto____$6 = e68787;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
try{var ocr_68641_0__68668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_0__68668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68789){if((e68789 instanceof Error)){
var e__66921__auto____$7 = e68789;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68788){if((e68788 instanceof Error)){
var e__66921__auto____$7 = e68788;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68788;

}
}} else {
throw e__66921__auto____$6;
}
} else {
throw e68787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68738){if((e68738 instanceof Error)){
var e__66921__auto____$6 = e68738;
if((e__66921__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === false)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
try{var ocr_68641_0__68668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_0__68668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68786){if((e68786 instanceof Error)){
var e__66921__auto____$7 = e68786;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68785){if((e68785 instanceof Error)){
var e__66921__auto____$7 = e68785;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$7;
}
} else {
throw e68785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68739){if((e68739 instanceof Error)){
var e__66921__auto____$7 = e68739;
if((e__66921__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === true)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === false)){
try{var ocr_68641_0__68668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68641_0__68668,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68784){if((e68784 instanceof Error)){
var e__66921__auto____$8 = e68784;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$8;
}
} else {
throw e68784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68772){if((e68772 instanceof Error)){
var e__66921__auto____$8 = e68772;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68782){if((e68782 instanceof Error)){
var e__66921__auto____$9 = e68782;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68783){if((e68783 instanceof Error)){
var e__66921__auto____$10 = e68783;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68783;

}
}} else {
throw e__66921__auto____$9;
}
} else {
throw e68782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68773){if((e68773 instanceof Error)){
var e__66921__auto____$9 = e68773;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === false)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68781){if((e68781 instanceof Error)){
var e__66921__auto____$10 = e68781;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68774){if((e68774 instanceof Error)){
var e__66921__auto____$10 = e68774;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68774;

}
}} else {
throw e__66921__auto____$9;
}
} else {
throw e68773;

}
}} else {
throw e__66921__auto____$8;
}
} else {
throw e68772;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68740){if((e68740 instanceof Error)){
var e__66921__auto____$8 = e68740;
if((e__66921__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === false)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68767){if((e68767 instanceof Error)){
var e__66921__auto____$9 = e68767;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$9;
}
} else {
throw e68767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68766){if((e68766 instanceof Error)){
var e__66921__auto____$9 = e68766;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$9;
}
} else {
throw e68766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68741){if((e68741 instanceof Error)){
var e__66921__auto____$9 = e68741;
if((e__66921__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === true)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68761){if((e68761 instanceof Error)){
var e__66921__auto____$10 = e68761;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68758){if((e68758 instanceof Error)){
var e__66921__auto____$10 = e68758;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$10;
}
} else {
throw e68758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68744){if((e68744 instanceof Error)){
var e__66921__auto____$10 = e68744;
if((e__66921__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_68642_2__68687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(2));
if((ocr_68642_2__68687 === false)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === true)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68757){if((e68757 instanceof Error)){
var e__66921__auto____$11 = e68757;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$11;
}
} else {
throw e68757;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68749){if((e68749 instanceof Error)){
var e__66921__auto____$11 = e68749;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_68642_0__68685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(0));
if((ocr_68642_0__68685 === false)){
try{var ocr_68642_1__68686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68642,(1));
if((ocr_68642_1__68686 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68641,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68751){if((e68751 instanceof Error)){
var e__66921__auto____$12 = e68751;
if((e__66921__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$12;
}
} else {
throw e68751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68750){if((e68750 instanceof Error)){
var e__66921__auto____$12 = e68750;
if((e__66921__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$12;
}
} else {
throw e68750;

}
}} else {
throw e__66921__auto____$11;
}
} else {
throw e68749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68748){if((e68748 instanceof Error)){
var e__66921__auto____$11 = e68748;
if((e__66921__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$11;
}
} else {
throw e68748;

}
}} else {
throw e__66921__auto____$10;
}
} else {
throw e68744;

}
}} else {
throw e__66921__auto____$9;
}
} else {
throw e68741;

}
}} else {
throw e__66921__auto____$8;
}
} else {
throw e68740;

}
}} else {
throw e__66921__auto____$7;
}
} else {
throw e68739;

}
}} else {
throw e__66921__auto____$6;
}
} else {
throw e68738;

}
}} else {
throw e__66921__auto____$5;
}
} else {
throw e68737;

}
}} else {
throw e__66921__auto____$4;
}
} else {
throw e68736;

}
}} else {
throw e__66921__auto____$3;
}
} else {
throw e68735;

}
}} else {
throw e__66921__auto____$2;
}
} else {
throw e68731;

}
}} else {
throw e__66921__auto____$1;
}
} else {
throw e68728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68722){if((e68722 instanceof Error)){
var e__66921__auto____$1 = e68722;
if((e__66921__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66921__auto____$1;
}
} else {
throw e68722;

}
}} else {
throw e__66921__auto__;
}
} else {
throw e68721;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68720){if((e68720 instanceof Error)){
var e__66921__auto__ = e68720;
if((e__66921__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__66921__auto__;
}
} else {
throw e68720;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68845){
var vec__68846 = p__68845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68846,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68843_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__68843_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68852){
var vec__68853 = p__68852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68853,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68849_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__68849_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__68858 = cljs.core.rest(ins);
var G__68859 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__68858,G__68859) : posh.lib.q_analyze.just_qvars.call(null,G__68858,G__68859));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68861_SHARP_){
return cljs.core.zipmap(qvars,p1__68861_SHARP_);
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
var vec__68863 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__69315 = var$;
var G__69316 = dbvarmap;
var G__69317 = cljs.core.rest(dbeavs);
var$ = G__69315;
dbvarmap = G__69316;
dbeavs = G__69317;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__68870 = cljs.core.rest(vars);
var G__68871 = dbvarmap;
var G__68872 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__68870,G__68871,G__68872) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__68870,G__68871,G__68872));
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
var G__69318 = (n + (1));
var G__69319 = cljs.core.rest(xs__$1);
n = G__69318;
xs__$1 = G__69319;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68875_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__68875_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__68875_SHARP_) : type.call(null,p1__68875_SHARP_));
} else {
return p1__68875_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__68876 = cljs.core.rest(ins);
var G__68877 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__68876,G__68877) : posh.lib.q_analyze.make_dbarg_map.call(null,G__68876,G__68877));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68878){
var vec__68879 = p__68878;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68879,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68879,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__68883_SHARP_,p2__68882_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__68882_SHARP_)){
return p1__68883_SHARP_;
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
var pred__68893 = cljs.core._EQ_;
var expr__68894 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__68893.cljs$core$IFn$_invoke$arity$2 ? pred__68893.cljs$core$IFn$_invoke$arity$2((1),expr__68894) : pred__68893.call(null,(1),expr__68894)))){
return true;
} else {
if(cljs.core.truth_((pred__68893.cljs$core$IFn$_invoke$arity$2 ? pred__68893.cljs$core$IFn$_invoke$arity$2((3),expr__68894) : pred__68893.call(null,(3),expr__68894)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__69320 = cljs.core.first(remaining);
var G__69321 = cljs.core.rest(remaining);
clause = G__69320;
remaining = G__69321;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__69322 = cljs.core.first(remaining);
var G__69323 = cljs.core.rest(remaining);
clause = G__69322;
remaining = G__69323;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__68896(s__68897){
return (new cljs.core.LazySeq(null,(function (){
var s__68897__$1 = s__68897;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68897__$1);
if(temp__5735__auto__){
var s__68897__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68897__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68897__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68899 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68898 = (0);
while(true){
if((i__68898 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68898);
cljs.core.chunk_append(b__68899,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__69325 = (i__68898 + (1));
i__68898 = G__69325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68899),posh$lib$q_analyze$resolve_any_idents_$_iter__68896(cljs.core.chunk_rest(s__68897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68899),null);
}
} else {
var var_value = cljs.core.first(s__68897__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__68896(cljs.core.rest(s__68897__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68918){
var vec__68919 = p__68918;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68919,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68919,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68924){
var vec__68925 = p__68924;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68925,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68936){
var vec__68937 = p__68936;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68937,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68937,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68940){
var vec__68941 = p__68940;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68941,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68941,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__68949 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__68950 = cljs.core.vec(r);
var fexpr__68948 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__68948.cljs$core$IFn$_invoke$arity$2 ? fexpr__68948.cljs$core$IFn$_invoke$arity$2(G__68949,G__68950) : fexpr__68948.call(null,G__68949,G__68950));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68959){
var vec__68961 = p__68959;
var seq__68962 = cljs.core.seq(vec__68961);
var first__68963 = cljs.core.first(seq__68962);
var seq__68962__$1 = cljs.core.next(seq__68962);
var db = first__68963;
var eav = seq__68962__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68969){
var vec__68970 = p__68969;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68970,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__68916_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__68916_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__68916_SHARP_) : linked_qvars.call(null,p1__68916_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__68916_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__68917_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__68917_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__68917_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
