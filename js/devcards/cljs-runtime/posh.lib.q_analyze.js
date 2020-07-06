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
var G__56304 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56304) : stop_at_QMARK_.call(null,G__56304));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__56308 = stop_at_QMARK_;
var G__56309 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__56308,G__56309) : posh.lib.q_analyze.take_until.call(null,G__56308,G__56309));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__56311 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56311) : rest_at_QMARK_.call(null,G__56311));
}
})())){
return ls;
} else {
var G__57050 = rest_at_QMARK_;
var G__57051 = cljs.core.rest(ls);
rest_at_QMARK_ = G__57050;
ls = G__57051;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__56312 = split_at_QMARK_;
var G__56313 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__56312,G__56313) : posh.lib.q_analyze.split_list_at.call(null,G__56312,G__56313));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__56315 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56315) : posh.lib.q_analyze.get_all_vars.call(null,G__56315));
})(),(function (){var G__56316 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56316) : posh.lib.q_analyze.get_all_vars.call(null,G__56316));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__56317 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56317) : posh.lib.q_analyze.get_all_vars.call(null,G__56317));
})(),cljs.core.first(query));
} else {
var G__56318 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56318) : posh.lib.q_analyze.get_all_vars.call(null,G__56318));

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
var G__56326 = cljs.core.rest(eav);
var G__56327 = (n - (1));
var G__56328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__56329 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__56326,G__56327,G__56328,G__56329) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__56326,G__56327,G__56328,G__56329));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__56330 = cljs.core.rest(eav);
var G__56331 = (n - (1));
var G__56332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__56333 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__56330,G__56331,G__56332,G__56333) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__56330,G__56331,G__56332,G__56333));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__56336 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__56336) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__56336));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__56337 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__56337) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__56337));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__56339 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56339) : posh.lib.q_analyze.get_eavs.call(null,G__56339));
})(),(function (){var G__56340 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56340) : posh.lib.q_analyze.get_eavs.call(null,G__56340));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__56341 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56341) : posh.lib.q_analyze.get_eavs.call(null,G__56341));
})(),(function (){var G__56342 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56342) : posh.lib.q_analyze.get_eavs.call(null,G__56342));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__56343 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56343) : posh.lib.q_analyze.get_eavs.call(null,G__56343));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_56349 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_56349)) && ((cljs.core.count(ocr_56349) === 2)))){
try{var ocr_56349_0__56354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349,(0));
if(((cljs.core.vector_QMARK_(ocr_56349_0__56354)) && ((cljs.core.count(ocr_56349_0__56354) === 5)))){
try{var ocr_56349_0__56354_0__56360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349_0__56354,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56349_0__56354_0__56360,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349_0__56354,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349_0__56354,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349_0__56354,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56349,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__56381 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56381) : posh.lib.q_analyze.get_eavs.call(null,G__56381));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e56380){if((e56380 instanceof Error)){
var e__55045__auto__ = e56380;
if((e__55045__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto__;
}
} else {
throw e56380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56379){if((e56379 instanceof Error)){
var e__55045__auto__ = e56379;
if((e__55045__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto__;
}
} else {
throw e56379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56377){if((e56377 instanceof Error)){
var e__55045__auto__ = e56377;
if((e__55045__auto__ === cljs.core.match.backtrack)){
var G__56378 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56378) : posh.lib.q_analyze.get_eavs.call(null,G__56378));
} else {
throw e__55045__auto__;
}
} else {
throw e56377;

}
}} else {
var G__56382 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56382) : posh.lib.q_analyze.get_eavs.call(null,G__56382));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__56383){
var vec__56384 = p__56383;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56387_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__56387_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__56387_SHARP_);
} else {
return p1__56387_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__56396 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56396) : posh.lib.q_analyze.count_qvars.call(null,G__56396));
})(),(function (){var G__56397 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56397) : posh.lib.q_analyze.count_qvars.call(null,G__56397));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__56398 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56398) : posh.lib.q_analyze.count_qvars.call(null,G__56398));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__56405(s__56406){
return (new cljs.core.LazySeq(null,(function (){
var s__56406__$1 = s__56406;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56406__$1);
if(temp__5735__auto__){
var s__56406__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56406__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56406__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56408 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56407 = (0);
while(true){
if((i__56407 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56407);
cljs.core.chunk_append(b__56408,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__57129 = (i__56407 + (1));
i__56407 = G__57129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56408),posh$lib$q_analyze$fill_qvar_set_$_iter__56405(cljs.core.chunk_rest(s__56406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56408),null);
}
} else {
var r = cljs.core.first(s__56406__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__56405(cljs.core.rest(s__56406__$2)));
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
return cljs.core.cons((function (){var G__56422 = cljs.core.first(seq1);
var G__56423 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__56422,G__56423) : f.call(null,G__56422,G__56423));
})(),(function (){var G__56424 = f;
var G__56425 = cljs.core.rest(seq1);
var G__56426 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__56424,G__56425,G__56426) : posh.lib.q_analyze.seq_merge_with.call(null,G__56424,G__56425,G__56426));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__56437){
var vec__56439 = p__56437;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56439,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56439,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56439,(2),null);
var eav = vec__56439;
var vec__56442 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445(s__56446){
return (new cljs.core.LazySeq(null,(function (){
var s__56446__$1 = s__56446;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56446__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__56446__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445_$_iter__56447(s__56448){
return (new cljs.core.LazySeq(null,((function (s__56446__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (){
var s__56448__$1 = s__56448;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56448__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__56448__$1,s__56446__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445_$_iter__56447_$_iter__56449(s__56450){
return (new cljs.core.LazySeq(null,((function (s__56448__$1,s__56446__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (){
var s__56450__$1 = s__56450;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__56450__$1);
if(temp__5735__auto____$2){
var s__56450__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56450__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56450__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56452 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56451 = (0);
while(true){
if((i__56451 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56451);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56451,s__56450__$1,s__56448__$1,s__56446__$1,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p1__56434_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__56434_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__56451,s__56450__$1,s__56448__$1,s__56446__$1,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56451,s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p__56455){
var vec__56456 = p__56455;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56456,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56456,(1),null);
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
});})(i__56451,s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56451,s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p1__56435_SHARP_){
if(cljs.core.truth_(p1__56435_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__56451,s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__56452,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__56452,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__57187 = (i__56451 + (1));
i__56451 = G__57187;
continue;
} else {
var G__57188 = (i__56451 + (1));
i__56451 = G__57188;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56452),posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445_$_iter__56447_$_iter__56449(cljs.core.chunk_rest(s__56450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56452),null);
}
} else {
var vv = cljs.core.first(s__56450__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56450__$1,s__56448__$1,s__56446__$1,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p1__56434_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__56434_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__56450__$1,s__56448__$1,s__56446__$1,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p__56462){
var vec__56463 = p__56462;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(1),null);
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
});})(s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,exposed_qvars,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav){
return (function (p1__56435_SHARP_){
if(cljs.core.truth_(p1__56435_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__56450__$1,s__56448__$1,s__56446__$1,wildcard_count,exposed_qvars,vv,s__56450__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445_$_iter__56447_$_iter__56449(cljs.core.rest(s__56450__$2)));
} else {
var G__57192 = cljs.core.rest(s__56450__$2);
s__56450__$1 = G__57192;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__56448__$1,s__56446__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,null,null));
});})(s__56448__$1,s__56446__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445_$_iter__56447(cljs.core.rest(s__56448__$1)));
} else {
var G__57193 = cljs.core.rest(s__56448__$1);
s__56448__$1 = G__57193;
continue;
}
} else {
return null;
}
break;
}
});})(s__56446__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
,null,null));
});})(s__56446__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56442,qe,qa,qv,vec__56439,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__56445(cljs.core.rest(s__56446__$1)));
} else {
var G__57194 = cljs.core.rest(s__56446__$1);
s__56446__$1 = G__57194;
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
var ocr_56469 = cljs.core.vec(eav);
var ocr_56470 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_56469)) && ((cljs.core.count(ocr_56469) === 3)))){
try{var ocr_56469_0__56498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_0__56498,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56680){if((e56680 instanceof Error)){
var e__55045__auto__ = e56680;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56470)) && ((cljs.core.count(ocr_56470) === 3)))){
try{var ocr_56470_2__56508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56508 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56685){if((e56685 instanceof Error)){
var e__55045__auto____$1 = e56685;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56508 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56686){if((e56686 instanceof Error)){
var e__55045__auto____$2 = e56686;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56686;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56685;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56681){if((e56681 instanceof Error)){
var e__55045__auto____$1 = e56681;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56681;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56661){if((e56661 instanceof Error)){
var e__55045__auto__ = e56661;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_56470)) && ((cljs.core.count(ocr_56470) === 3)))){
try{var ocr_56470_1__56510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56510 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56668){if((e56668 instanceof Error)){
var e__55045__auto____$1 = e56668;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56470_1__56510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56510 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56669){if((e56669 instanceof Error)){
var e__55045__auto____$2 = e56669;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56669;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56667){if((e56667 instanceof Error)){
var e__55045__auto____$1 = e56667;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56662){if((e56662 instanceof Error)){
var e__55045__auto____$1 = e56662;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56662;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56661;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56529){if((e56529 instanceof Error)){
var e__55045__auto__ = e56529;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56470)) && ((cljs.core.count(ocr_56470) === 3)))){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56660){if((e56660 instanceof Error)){
var e__55045__auto____$1 = e56660;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56653){if((e56653 instanceof Error)){
var e__55045__auto____$1 = e56653;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56533){if((e56533 instanceof Error)){
var e__55045__auto____$1 = e56533;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56644){if((e56644 instanceof Error)){
var e__55045__auto____$2 = e56644;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56645){if((e56645 instanceof Error)){
var e__55045__auto____$3 = e56645;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56646){if((e56646 instanceof Error)){
var e__55045__auto____$4 = e56646;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56646;

}
}} else {
throw e__55045__auto____$3;
}
} else {
throw e56645;

}
}} else {
throw e__55045__auto____$2;
}
} else {
throw e56644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56636){if((e56636 instanceof Error)){
var e__55045__auto____$2 = e56636;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56534){if((e56534 instanceof Error)){
var e__55045__auto____$2 = e56534;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56633){if((e56633 instanceof Error)){
var e__55045__auto____$3 = e56633;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$3;
}
} else {
throw e56633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56630){if((e56630 instanceof Error)){
var e__55045__auto____$3 = e56630;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
try{var ocr_56469_2__56500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_2__56500,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56632){if((e56632 instanceof Error)){
var e__55045__auto____$4 = e56632;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56631){if((e56631 instanceof Error)){
var e__55045__auto____$4 = e56631;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56631;

}
}} else {
throw e__55045__auto____$3;
}
} else {
throw e56630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56535){if((e56535 instanceof Error)){
var e__55045__auto____$3 = e56535;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56625){if((e56625 instanceof Error)){
var e__55045__auto____$4 = e56625;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56624){if((e56624 instanceof Error)){
var e__55045__auto____$4 = e56624;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56536){if((e56536 instanceof Error)){
var e__55045__auto____$4 = e56536;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56614){if((e56614 instanceof Error)){
var e__55045__auto____$5 = e56614;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$5;
}
} else {
throw e56614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56613){if((e56613 instanceof Error)){
var e__55045__auto____$5 = e56613;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$5;
}
} else {
throw e56613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56537){if((e56537 instanceof Error)){
var e__55045__auto____$5 = e56537;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56612){if((e56612 instanceof Error)){
var e__55045__auto____$6 = e56612;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$6;
}
} else {
throw e56612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56602){if((e56602 instanceof Error)){
var e__55045__auto____$6 = e56602;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$6;
}
} else {
throw e56602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56538){if((e56538 instanceof Error)){
var e__55045__auto____$6 = e56538;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56469_1__56499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_1__56499,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56600){if((e56600 instanceof Error)){
var e__55045__auto____$7 = e56600;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56599){if((e56599 instanceof Error)){
var e__55045__auto____$7 = e56599;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56539){if((e56539 instanceof Error)){
var e__55045__auto____$7 = e56539;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
try{var ocr_56469_0__56498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_0__56498,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56598){if((e56598 instanceof Error)){
var e__55045__auto____$8 = e56598;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$8;
}
} else {
throw e56598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56597){if((e56597 instanceof Error)){
var e__55045__auto____$8 = e56597;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$8;
}
} else {
throw e56597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56540){if((e56540 instanceof Error)){
var e__55045__auto____$8 = e56540;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
try{var ocr_56469_0__56498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_0__56498,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56596){if((e56596 instanceof Error)){
var e__55045__auto____$9 = e56596;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$9;
}
} else {
throw e56596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56595){if((e56595 instanceof Error)){
var e__55045__auto____$9 = e56595;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$9;
}
} else {
throw e56595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56541){if((e56541 instanceof Error)){
var e__55045__auto____$9 = e56541;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
try{var ocr_56469_0__56498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_0__56498,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56589){if((e56589 instanceof Error)){
var e__55045__auto____$10 = e56589;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56587){if((e56587 instanceof Error)){
var e__55045__auto____$10 = e56587;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56542){if((e56542 instanceof Error)){
var e__55045__auto____$10 = e56542;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
try{var ocr_56469_0__56498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56469_0__56498,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56586){if((e56586 instanceof Error)){
var e__55045__auto____$11 = e56586;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$11;
}
} else {
throw e56586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56585){if((e56585 instanceof Error)){
var e__55045__auto____$11 = e56585;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$11;
}
} else {
throw e56585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56543){if((e56543 instanceof Error)){
var e__55045__auto____$11 = e56543;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56583){if((e56583 instanceof Error)){
var e__55045__auto____$12 = e56583;
if((e__55045__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$12;
}
} else {
throw e56583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56573){if((e56573 instanceof Error)){
var e__55045__auto____$12 = e56573;
if((e__55045__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56582){if((e56582 instanceof Error)){
var e__55045__auto____$13 = e56582;
if((e__55045__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$13;
}
} else {
throw e56582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56574){if((e56574 instanceof Error)){
var e__55045__auto____$13 = e56574;
if((e__55045__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56577){if((e56577 instanceof Error)){
var e__55045__auto____$14 = e56577;
if((e__55045__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$14;
}
} else {
throw e56577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56575){if((e56575 instanceof Error)){
var e__55045__auto____$14 = e56575;
if((e__55045__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$14;
}
} else {
throw e56575;

}
}} else {
throw e__55045__auto____$13;
}
} else {
throw e56574;

}
}} else {
throw e__55045__auto____$12;
}
} else {
throw e56573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56545){if((e56545 instanceof Error)){
var e__55045__auto____$12 = e56545;
if((e__55045__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56569){if((e56569 instanceof Error)){
var e__55045__auto____$13 = e56569;
if((e__55045__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$13;
}
} else {
throw e56569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56567){if((e56567 instanceof Error)){
var e__55045__auto____$13 = e56567;
if((e__55045__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$13;
}
} else {
throw e56567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56547){if((e56547 instanceof Error)){
var e__55045__auto____$13 = e56547;
if((e__55045__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === true)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56563){if((e56563 instanceof Error)){
var e__55045__auto____$14 = e56563;
if((e__55045__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$14;
}
} else {
throw e56563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56562){if((e56562 instanceof Error)){
var e__55045__auto____$14 = e56562;
if((e__55045__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$14;
}
} else {
throw e56562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56548){if((e56548 instanceof Error)){
var e__55045__auto____$14 = e56548;
if((e__55045__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_56470_2__56515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(2));
if((ocr_56470_2__56515 === false)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === true)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56560){if((e56560 instanceof Error)){
var e__55045__auto____$15 = e56560;
if((e__55045__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$15;
}
} else {
throw e56560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56550){if((e56550 instanceof Error)){
var e__55045__auto____$15 = e56550;
if((e__55045__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_56470_0__56513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(0));
if((ocr_56470_0__56513 === false)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56552){if((e56552 instanceof Error)){
var e__55045__auto____$16 = e56552;
if((e__55045__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_56470_1__56514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56470,(1));
if((ocr_56470_1__56514 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56469,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56553){if((e56553 instanceof Error)){
var e__55045__auto____$17 = e56553;
if((e__55045__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$17;
}
} else {
throw e56553;

}
}} else {
throw e__55045__auto____$16;
}
} else {
throw e56552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56551){if((e56551 instanceof Error)){
var e__55045__auto____$16 = e56551;
if((e__55045__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$16;
}
} else {
throw e56551;

}
}} else {
throw e__55045__auto____$15;
}
} else {
throw e56550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56549){if((e56549 instanceof Error)){
var e__55045__auto____$15 = e56549;
if((e__55045__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$15;
}
} else {
throw e56549;

}
}} else {
throw e__55045__auto____$14;
}
} else {
throw e56548;

}
}} else {
throw e__55045__auto____$13;
}
} else {
throw e56547;

}
}} else {
throw e__55045__auto____$12;
}
} else {
throw e56545;

}
}} else {
throw e__55045__auto____$11;
}
} else {
throw e56543;

}
}} else {
throw e__55045__auto____$10;
}
} else {
throw e56542;

}
}} else {
throw e__55045__auto____$9;
}
} else {
throw e56541;

}
}} else {
throw e__55045__auto____$8;
}
} else {
throw e56540;

}
}} else {
throw e__55045__auto____$7;
}
} else {
throw e56539;

}
}} else {
throw e__55045__auto____$6;
}
} else {
throw e56538;

}
}} else {
throw e__55045__auto____$5;
}
} else {
throw e56537;

}
}} else {
throw e__55045__auto____$4;
}
} else {
throw e56536;

}
}} else {
throw e__55045__auto____$3;
}
} else {
throw e56535;

}
}} else {
throw e__55045__auto____$2;
}
} else {
throw e56534;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56530){if((e56530 instanceof Error)){
var e__55045__auto____$1 = e56530;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56530;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56528){if((e56528 instanceof Error)){
var e__55045__auto__ = e56528;
if((e__55045__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__55045__auto__;
}
} else {
throw e56528;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_56698 = cljs.core.vec(eav);
var ocr_56699 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_56698)) && ((cljs.core.count(ocr_56698) === 3)))){
try{var ocr_56698_0__56730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_0__56730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56698_2__56732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_2__56732,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e56913){if((e56913 instanceof Error)){
var e__55045__auto__ = e56913;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56699)) && ((cljs.core.count(ocr_56699) === 3)))){
try{var ocr_56699_2__56741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56741 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56919){if((e56919 instanceof Error)){
var e__55045__auto____$1 = e56919;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56741 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56920){if((e56920 instanceof Error)){
var e__55045__auto____$2 = e56920;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56920;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56914){if((e56914 instanceof Error)){
var e__55045__auto____$1 = e56914;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56914;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56902){if((e56902 instanceof Error)){
var e__55045__auto__ = e56902;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{var ocr_56698_2__56732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_2__56732,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_56699)) && ((cljs.core.count(ocr_56699) === 3)))){
try{var ocr_56699_1__56743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56743 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56907){if((e56907 instanceof Error)){
var e__55045__auto____$1 = e56907;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56743 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56908){if((e56908 instanceof Error)){
var e__55045__auto____$2 = e56908;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56908;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56907;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56906){if((e56906 instanceof Error)){
var e__55045__auto____$1 = e56906;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56906;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56903){if((e56903 instanceof Error)){
var e__55045__auto____$1 = e56903;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56903;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56902;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56778){if((e56778 instanceof Error)){
var e__55045__auto__ = e56778;
if((e__55045__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56699)) && ((cljs.core.count(ocr_56699) === 3)))){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56698_2__56732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_2__56732,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56901){if((e56901 instanceof Error)){
var e__55045__auto____$1 = e56901;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56900){if((e56900 instanceof Error)){
var e__55045__auto____$1 = e56900;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56780){if((e56780 instanceof Error)){
var e__55045__auto____$1 = e56780;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
try{var ocr_56698_2__56732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_2__56732,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56897){if((e56897 instanceof Error)){
var e__55045__auto____$2 = e56897;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56898){if((e56898 instanceof Error)){
var e__55045__auto____$3 = e56898;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56899){if((e56899 instanceof Error)){
var e__55045__auto____$4 = e56899;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56899;

}
}} else {
throw e__55045__auto____$3;
}
} else {
throw e56898;

}
}} else {
throw e__55045__auto____$2;
}
} else {
throw e56897;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56896){if((e56896 instanceof Error)){
var e__55045__auto____$2 = e56896;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$2;
}
} else {
throw e56896;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56781){if((e56781 instanceof Error)){
var e__55045__auto____$2 = e56781;
if((e__55045__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
try{var ocr_56698_2__56732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_2__56732,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56895){if((e56895 instanceof Error)){
var e__55045__auto____$3 = e56895;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$3;
}
} else {
throw e56895;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56894){if((e56894 instanceof Error)){
var e__55045__auto____$3 = e56894;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$3;
}
} else {
throw e56894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56782){if((e56782 instanceof Error)){
var e__55045__auto____$3 = e56782;
if((e__55045__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === true)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56893){if((e56893 instanceof Error)){
var e__55045__auto____$4 = e56893;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56893;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56892){if((e56892 instanceof Error)){
var e__55045__auto____$4 = e56892;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$4;
}
} else {
throw e56892;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56783){if((e56783 instanceof Error)){
var e__55045__auto____$4 = e56783;
if((e__55045__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === false)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56884){if((e56884 instanceof Error)){
var e__55045__auto____$5 = e56884;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$5;
}
} else {
throw e56884;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56883){if((e56883 instanceof Error)){
var e__55045__auto____$5 = e56883;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$5;
}
} else {
throw e56883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56785){if((e56785 instanceof Error)){
var e__55045__auto____$5 = e56785;
if((e__55045__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === true)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
try{var ocr_56698_1__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_1__56731,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56882){if((e56882 instanceof Error)){
var e__55045__auto____$6 = e56882;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$6;
}
} else {
throw e56882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56874){if((e56874 instanceof Error)){
var e__55045__auto____$6 = e56874;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
try{var ocr_56698_0__56730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_0__56730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56878){if((e56878 instanceof Error)){
var e__55045__auto____$7 = e56878;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56877){if((e56877 instanceof Error)){
var e__55045__auto____$7 = e56877;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56877;

}
}} else {
throw e__55045__auto____$6;
}
} else {
throw e56874;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56786){if((e56786 instanceof Error)){
var e__55045__auto____$6 = e56786;
if((e__55045__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === false)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
try{var ocr_56698_0__56730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_0__56730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56871){if((e56871 instanceof Error)){
var e__55045__auto____$7 = e56871;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56871;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56868){if((e56868 instanceof Error)){
var e__55045__auto____$7 = e56868;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$7;
}
} else {
throw e56868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56787){if((e56787 instanceof Error)){
var e__55045__auto____$7 = e56787;
if((e__55045__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === true)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === false)){
try{var ocr_56698_0__56730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56698_0__56730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56867){if((e56867 instanceof Error)){
var e__55045__auto____$8 = e56867;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$8;
}
} else {
throw e56867;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56841){if((e56841 instanceof Error)){
var e__55045__auto____$8 = e56841;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56855){if((e56855 instanceof Error)){
var e__55045__auto____$9 = e56855;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56858){if((e56858 instanceof Error)){
var e__55045__auto____$10 = e56858;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56858;

}
}} else {
throw e__55045__auto____$9;
}
} else {
throw e56855;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56842){if((e56842 instanceof Error)){
var e__55045__auto____$9 = e56842;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === false)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56851){if((e56851 instanceof Error)){
var e__55045__auto____$10 = e56851;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56851;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56845){if((e56845 instanceof Error)){
var e__55045__auto____$10 = e56845;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56845;

}
}} else {
throw e__55045__auto____$9;
}
} else {
throw e56842;

}
}} else {
throw e__55045__auto____$8;
}
} else {
throw e56841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56789){if((e56789 instanceof Error)){
var e__55045__auto____$8 = e56789;
if((e__55045__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === false)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56835){if((e56835 instanceof Error)){
var e__55045__auto____$9 = e56835;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$9;
}
} else {
throw e56835;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56826){if((e56826 instanceof Error)){
var e__55045__auto____$9 = e56826;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$9;
}
} else {
throw e56826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56790){if((e56790 instanceof Error)){
var e__55045__auto____$9 = e56790;
if((e__55045__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === true)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56819){if((e56819 instanceof Error)){
var e__55045__auto____$10 = e56819;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56813){if((e56813 instanceof Error)){
var e__55045__auto____$10 = e56813;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$10;
}
} else {
throw e56813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56791){if((e56791 instanceof Error)){
var e__55045__auto____$10 = e56791;
if((e__55045__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_56699_2__56751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(2));
if((ocr_56699_2__56751 === false)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === true)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56803){if((e56803 instanceof Error)){
var e__55045__auto____$11 = e56803;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$11;
}
} else {
throw e56803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56798){if((e56798 instanceof Error)){
var e__55045__auto____$11 = e56798;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_56699_0__56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(0));
if((ocr_56699_0__56749 === false)){
try{var ocr_56699_1__56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56699,(1));
if((ocr_56699_1__56750 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56698,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56801){if((e56801 instanceof Error)){
var e__55045__auto____$12 = e56801;
if((e__55045__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$12;
}
} else {
throw e56801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56799){if((e56799 instanceof Error)){
var e__55045__auto____$12 = e56799;
if((e__55045__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$12;
}
} else {
throw e56799;

}
}} else {
throw e__55045__auto____$11;
}
} else {
throw e56798;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56792){if((e56792 instanceof Error)){
var e__55045__auto____$11 = e56792;
if((e__55045__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$11;
}
} else {
throw e56792;

}
}} else {
throw e__55045__auto____$10;
}
} else {
throw e56791;

}
}} else {
throw e__55045__auto____$9;
}
} else {
throw e56790;

}
}} else {
throw e__55045__auto____$8;
}
} else {
throw e56789;

}
}} else {
throw e__55045__auto____$7;
}
} else {
throw e56787;

}
}} else {
throw e__55045__auto____$6;
}
} else {
throw e56786;

}
}} else {
throw e__55045__auto____$5;
}
} else {
throw e56785;

}
}} else {
throw e__55045__auto____$4;
}
} else {
throw e56783;

}
}} else {
throw e__55045__auto____$3;
}
} else {
throw e56782;

}
}} else {
throw e__55045__auto____$2;
}
} else {
throw e56781;

}
}} else {
throw e__55045__auto____$1;
}
} else {
throw e56780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56779){if((e56779 instanceof Error)){
var e__55045__auto____$1 = e56779;
if((e__55045__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__55045__auto____$1;
}
} else {
throw e56779;

}
}} else {
throw e__55045__auto__;
}
} else {
throw e56778;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56773){if((e56773 instanceof Error)){
var e__55045__auto__ = e56773;
if((e__55045__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__55045__auto__;
}
} else {
throw e56773;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56928){
var vec__56929 = p__56928;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56927_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__56927_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56933){
var vec__56934 = p__56933;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56934,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56932_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__56932_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__56941 = cljs.core.rest(ins);
var G__56942 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__56941,G__56942) : posh.lib.q_analyze.just_qvars.call(null,G__56941,G__56942));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56943_SHARP_){
return cljs.core.zipmap(qvars,p1__56943_SHARP_);
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
var vec__56954 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56954,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56954,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56954,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56954,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__57363 = var$;
var G__57364 = dbvarmap;
var G__57365 = cljs.core.rest(dbeavs);
var$ = G__57363;
dbvarmap = G__57364;
dbeavs = G__57365;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__56960 = cljs.core.rest(vars);
var G__56961 = dbvarmap;
var G__56962 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__56960,G__56961,G__56962) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__56960,G__56961,G__56962));
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
var G__57366 = (n + (1));
var G__57367 = cljs.core.rest(xs__$1);
n = G__57366;
xs__$1 = G__57367;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56966_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__56966_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__56966_SHARP_) : type.call(null,p1__56966_SHARP_));
} else {
return p1__56966_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__56967 = cljs.core.rest(ins);
var G__56968 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__56967,G__56968) : posh.lib.q_analyze.make_dbarg_map.call(null,G__56967,G__56968));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56970){
var vec__56971 = p__56970;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__56975_SHARP_,p2__56974_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__56974_SHARP_)){
return p1__56975_SHARP_;
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
var pred__56981 = cljs.core._EQ_;
var expr__56982 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__56981.cljs$core$IFn$_invoke$arity$2 ? pred__56981.cljs$core$IFn$_invoke$arity$2((1),expr__56982) : pred__56981.call(null,(1),expr__56982)))){
return true;
} else {
if(cljs.core.truth_((pred__56981.cljs$core$IFn$_invoke$arity$2 ? pred__56981.cljs$core$IFn$_invoke$arity$2((3),expr__56982) : pred__56981.call(null,(3),expr__56982)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__57368 = cljs.core.first(remaining);
var G__57369 = cljs.core.rest(remaining);
clause = G__57368;
remaining = G__57369;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__57370 = cljs.core.first(remaining);
var G__57371 = cljs.core.rest(remaining);
clause = G__57370;
remaining = G__57371;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__56990(s__56991){
return (new cljs.core.LazySeq(null,(function (){
var s__56991__$1 = s__56991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56991__$1);
if(temp__5735__auto__){
var s__56991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56991__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56991__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56993 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56992 = (0);
while(true){
if((i__56992 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56992);
cljs.core.chunk_append(b__56993,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__57373 = (i__56992 + (1));
i__56992 = G__57373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56993),posh$lib$q_analyze$resolve_any_idents_$_iter__56990(cljs.core.chunk_rest(s__56991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56993),null);
}
} else {
var var_value = cljs.core.first(s__56991__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__56990(cljs.core.rest(s__56991__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57010){
var vec__57011 = p__57010;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57011,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57011,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57014){
var vec__57015 = p__57014;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57015,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57018){
var vec__57019 = p__57018;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57019,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57019,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57022){
var vec__57023 = p__57022;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57023,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57023,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__57028 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__57029 = cljs.core.vec(r);
var fexpr__57027 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__57027.cljs$core$IFn$_invoke$arity$2 ? fexpr__57027.cljs$core$IFn$_invoke$arity$2(G__57028,G__57029) : fexpr__57027.call(null,G__57028,G__57029));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57032){
var vec__57033 = p__57032;
var seq__57034 = cljs.core.seq(vec__57033);
var first__57035 = cljs.core.first(seq__57034);
var seq__57034__$1 = cljs.core.next(seq__57034);
var db = first__57035;
var eav = seq__57034__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57037){
var vec__57041 = p__57037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57041,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__57005_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__57005_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__57005_SHARP_) : linked_qvars.call(null,p1__57005_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__57005_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__57006_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__57006_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__57006_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
