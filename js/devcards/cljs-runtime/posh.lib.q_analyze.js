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
var G__37067 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37067) : stop_at_QMARK_.call(null,G__37067));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__37068 = stop_at_QMARK_;
var G__37069 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__37068,G__37069) : posh.lib.q_analyze.take_until.call(null,G__37068,G__37069));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__37071 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37071) : rest_at_QMARK_.call(null,G__37071));
}
})())){
return ls;
} else {
var G__37448 = rest_at_QMARK_;
var G__37449 = cljs.core.rest(ls);
rest_at_QMARK_ = G__37448;
ls = G__37449;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__37072 = split_at_QMARK_;
var G__37073 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__37072,G__37073) : posh.lib.q_analyze.split_list_at.call(null,G__37072,G__37073));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__37074 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37074) : posh.lib.q_analyze.get_all_vars.call(null,G__37074));
})(),(function (){var G__37075 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37075) : posh.lib.q_analyze.get_all_vars.call(null,G__37075));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__37076 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37076) : posh.lib.q_analyze.get_all_vars.call(null,G__37076));
})(),cljs.core.first(query));
} else {
var G__37077 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37077) : posh.lib.q_analyze.get_all_vars.call(null,G__37077));

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
var G__37079 = cljs.core.rest(eav);
var G__37080 = (n - (1));
var G__37081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__37082 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__37079,G__37080,G__37081,G__37082) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__37079,G__37080,G__37081,G__37082));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__37083 = cljs.core.rest(eav);
var G__37084 = (n - (1));
var G__37085 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__37086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__37083,G__37084,G__37085,G__37086) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__37083,G__37084,G__37085,G__37086));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__37087 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__37087) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__37087));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__37088 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__37088) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__37088));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__37091 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37091) : posh.lib.q_analyze.get_eavs.call(null,G__37091));
})(),(function (){var G__37092 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37092) : posh.lib.q_analyze.get_eavs.call(null,G__37092));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__37093 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37093) : posh.lib.q_analyze.get_eavs.call(null,G__37093));
})(),(function (){var G__37094 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37094) : posh.lib.q_analyze.get_eavs.call(null,G__37094));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__37096 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37096) : posh.lib.q_analyze.get_eavs.call(null,G__37096));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_37105 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_37105)) && ((cljs.core.count(ocr_37105) === 2)))){
try{var ocr_37105_0__37120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105,(0));
if(((cljs.core.vector_QMARK_(ocr_37105_0__37120)) && ((cljs.core.count(ocr_37105_0__37120) === 5)))){
try{var ocr_37105_0__37120_0__37122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105_0__37120,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37105_0__37120_0__37122,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105_0__37120,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105_0__37120,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105_0__37120,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37105,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__37132 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37132) : posh.lib.q_analyze.get_eavs.call(null,G__37132));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e37131){if((e37131 instanceof Error)){
var e__36164__auto__ = e37131;
if((e__36164__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto__;
}
} else {
throw e37131;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37130){if((e37130 instanceof Error)){
var e__36164__auto__ = e37130;
if((e__36164__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto__;
}
} else {
throw e37130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37128){if((e37128 instanceof Error)){
var e__36164__auto__ = e37128;
if((e__36164__auto__ === cljs.core.match.backtrack)){
var G__37129 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37129) : posh.lib.q_analyze.get_eavs.call(null,G__37129));
} else {
throw e__36164__auto__;
}
} else {
throw e37128;

}
}} else {
var G__37133 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37133) : posh.lib.q_analyze.get_eavs.call(null,G__37133));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__37134){
var vec__37135 = p__37134;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37138_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__37138_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__37138_SHARP_);
} else {
return p1__37138_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37139 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37139) : posh.lib.q_analyze.count_qvars.call(null,G__37139));
})(),(function (){var G__37140 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37140) : posh.lib.q_analyze.count_qvars.call(null,G__37140));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__37141 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37141) : posh.lib.q_analyze.count_qvars.call(null,G__37141));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__37142(s__37143){
return (new cljs.core.LazySeq(null,(function (){
var s__37143__$1 = s__37143;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37143__$1);
if(temp__5735__auto__){
var s__37143__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37143__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37143__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37145 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37144 = (0);
while(true){
if((i__37144 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37144);
cljs.core.chunk_append(b__37145,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__37482 = (i__37144 + (1));
i__37144 = G__37482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37145),posh$lib$q_analyze$fill_qvar_set_$_iter__37142(cljs.core.chunk_rest(s__37143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37145),null);
}
} else {
var r = cljs.core.first(s__37143__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__37142(cljs.core.rest(s__37143__$2)));
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
return cljs.core.cons((function (){var G__37146 = cljs.core.first(seq1);
var G__37147 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37146,G__37147) : f.call(null,G__37146,G__37147));
})(),(function (){var G__37148 = f;
var G__37149 = cljs.core.rest(seq1);
var G__37150 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__37148,G__37149,G__37150) : posh.lib.q_analyze.seq_merge_with.call(null,G__37148,G__37149,G__37150));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__37153){
var vec__37154 = p__37153;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37154,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37154,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37154,(2),null);
var eav = vec__37154;
var vec__37157 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160(s__37161){
return (new cljs.core.LazySeq(null,(function (){
var s__37161__$1 = s__37161;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37161__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__37161__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160_$_iter__37162(s__37163){
return (new cljs.core.LazySeq(null,((function (s__37161__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (){
var s__37163__$1 = s__37163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37163__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__37163__$1,s__37161__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160_$_iter__37162_$_iter__37164(s__37165){
return (new cljs.core.LazySeq(null,((function (s__37163__$1,s__37161__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (){
var s__37165__$1 = s__37165;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__37165__$1);
if(temp__5735__auto____$2){
var s__37165__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__37165__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37165__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37167 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37166 = (0);
while(true){
if((i__37166 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37166);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37166,s__37165__$1,s__37163__$1,s__37161__$1,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p1__37151_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__37151_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__37166,s__37165__$1,s__37163__$1,s__37161__$1,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37166,s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p__37168){
var vec__37169 = p__37168;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(1),null);
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
});})(i__37166,s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37166,s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p1__37152_SHARP_){
if(cljs.core.truth_(p1__37152_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__37166,s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__37167,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__37167,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__37484 = (i__37166 + (1));
i__37166 = G__37484;
continue;
} else {
var G__37485 = (i__37166 + (1));
i__37166 = G__37485;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37167),posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160_$_iter__37162_$_iter__37164(cljs.core.chunk_rest(s__37165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37167),null);
}
} else {
var vv = cljs.core.first(s__37165__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37165__$1,s__37163__$1,s__37161__$1,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p1__37151_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__37151_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__37165__$1,s__37163__$1,s__37161__$1,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p__37172){
var vec__37173 = p__37172;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(1),null);
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
});})(s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,exposed_qvars,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav){
return (function (p1__37152_SHARP_){
if(cljs.core.truth_(p1__37152_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__37165__$1,s__37163__$1,s__37161__$1,wildcard_count,exposed_qvars,vv,s__37165__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160_$_iter__37162_$_iter__37164(cljs.core.rest(s__37165__$2)));
} else {
var G__37486 = cljs.core.rest(s__37165__$2);
s__37165__$1 = G__37486;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37163__$1,s__37161__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,null,null));
});})(s__37163__$1,s__37161__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160_$_iter__37162(cljs.core.rest(s__37163__$1)));
} else {
var G__37488 = cljs.core.rest(s__37163__$1);
s__37163__$1 = G__37488;
continue;
}
} else {
return null;
}
break;
}
});})(s__37161__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
,null,null));
});})(s__37161__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37157,qe,qa,qv,vec__37154,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__37160(cljs.core.rest(s__37161__$1)));
} else {
var G__37489 = cljs.core.rest(s__37161__$1);
s__37161__$1 = G__37489;
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
var ocr_37176 = cljs.core.vec(eav);
var ocr_37177 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_37176)) && ((cljs.core.count(ocr_37176) === 3)))){
try{var ocr_37176_0__37205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_0__37205,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37281){if((e37281 instanceof Error)){
var e__36164__auto__ = e37281;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37177)) && ((cljs.core.count(ocr_37177) === 3)))){
try{var ocr_37177_2__37210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37210 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37283){if((e37283 instanceof Error)){
var e__36164__auto____$1 = e37283;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37210 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37284){if((e37284 instanceof Error)){
var e__36164__auto____$2 = e37284;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37284;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37282){if((e37282 instanceof Error)){
var e__36164__auto____$1 = e37282;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37282;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37276){if((e37276 instanceof Error)){
var e__36164__auto__ = e37276;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_37177)) && ((cljs.core.count(ocr_37177) === 3)))){
try{var ocr_37177_1__37212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37212 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37279){if((e37279 instanceof Error)){
var e__36164__auto____$1 = e37279;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37177_1__37212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37212 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37280){if((e37280 instanceof Error)){
var e__36164__auto____$2 = e37280;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37280;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37279;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37278){if((e37278 instanceof Error)){
var e__36164__auto____$1 = e37278;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37278;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37277){if((e37277 instanceof Error)){
var e__36164__auto____$1 = e37277;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37277;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37218){if((e37218 instanceof Error)){
var e__36164__auto__ = e37218;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37177)) && ((cljs.core.count(ocr_37177) === 3)))){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37275){if((e37275 instanceof Error)){
var e__36164__auto____$1 = e37275;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37274){if((e37274 instanceof Error)){
var e__36164__auto____$1 = e37274;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37220){if((e37220 instanceof Error)){
var e__36164__auto____$1 = e37220;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37271){if((e37271 instanceof Error)){
var e__36164__auto____$2 = e37271;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37272){if((e37272 instanceof Error)){
var e__36164__auto____$3 = e37272;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37273){if((e37273 instanceof Error)){
var e__36164__auto____$4 = e37273;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37273;

}
}} else {
throw e__36164__auto____$3;
}
} else {
throw e37272;

}
}} else {
throw e__36164__auto____$2;
}
} else {
throw e37271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37270){if((e37270 instanceof Error)){
var e__36164__auto____$2 = e37270;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37221){if((e37221 instanceof Error)){
var e__36164__auto____$2 = e37221;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37269){if((e37269 instanceof Error)){
var e__36164__auto____$3 = e37269;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$3;
}
} else {
throw e37269;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37266){if((e37266 instanceof Error)){
var e__36164__auto____$3 = e37266;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
try{var ocr_37176_2__37207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_2__37207,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37268){if((e37268 instanceof Error)){
var e__36164__auto____$4 = e37268;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37267){if((e37267 instanceof Error)){
var e__36164__auto____$4 = e37267;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37267;

}
}} else {
throw e__36164__auto____$3;
}
} else {
throw e37266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37222){if((e37222 instanceof Error)){
var e__36164__auto____$3 = e37222;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37265){if((e37265 instanceof Error)){
var e__36164__auto____$4 = e37265;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37265;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37264){if((e37264 instanceof Error)){
var e__36164__auto____$4 = e37264;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37264;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37223){if((e37223 instanceof Error)){
var e__36164__auto____$4 = e37223;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37263){if((e37263 instanceof Error)){
var e__36164__auto____$5 = e37263;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$5;
}
} else {
throw e37263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37262){if((e37262 instanceof Error)){
var e__36164__auto____$5 = e37262;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$5;
}
} else {
throw e37262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37224){if((e37224 instanceof Error)){
var e__36164__auto____$5 = e37224;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37261){if((e37261 instanceof Error)){
var e__36164__auto____$6 = e37261;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$6;
}
} else {
throw e37261;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37260){if((e37260 instanceof Error)){
var e__36164__auto____$6 = e37260;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$6;
}
} else {
throw e37260;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37225){if((e37225 instanceof Error)){
var e__36164__auto____$6 = e37225;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37176_1__37206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_1__37206,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37259){if((e37259 instanceof Error)){
var e__36164__auto____$7 = e37259;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37258){if((e37258 instanceof Error)){
var e__36164__auto____$7 = e37258;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37226){if((e37226 instanceof Error)){
var e__36164__auto____$7 = e37226;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
try{var ocr_37176_0__37205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_0__37205,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37257){if((e37257 instanceof Error)){
var e__36164__auto____$8 = e37257;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$8;
}
} else {
throw e37257;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37256){if((e37256 instanceof Error)){
var e__36164__auto____$8 = e37256;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$8;
}
} else {
throw e37256;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37227){if((e37227 instanceof Error)){
var e__36164__auto____$8 = e37227;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
try{var ocr_37176_0__37205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_0__37205,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37255){if((e37255 instanceof Error)){
var e__36164__auto____$9 = e37255;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$9;
}
} else {
throw e37255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37254){if((e37254 instanceof Error)){
var e__36164__auto____$9 = e37254;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$9;
}
} else {
throw e37254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37228){if((e37228 instanceof Error)){
var e__36164__auto____$9 = e37228;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
try{var ocr_37176_0__37205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_0__37205,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37253){if((e37253 instanceof Error)){
var e__36164__auto____$10 = e37253;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37252){if((e37252 instanceof Error)){
var e__36164__auto____$10 = e37252;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37229){if((e37229 instanceof Error)){
var e__36164__auto____$10 = e37229;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
try{var ocr_37176_0__37205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37176_0__37205,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37251){if((e37251 instanceof Error)){
var e__36164__auto____$11 = e37251;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$11;
}
} else {
throw e37251;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37250){if((e37250 instanceof Error)){
var e__36164__auto____$11 = e37250;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$11;
}
} else {
throw e37250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37230){if((e37230 instanceof Error)){
var e__36164__auto____$11 = e37230;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37249){if((e37249 instanceof Error)){
var e__36164__auto____$12 = e37249;
if((e__36164__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$12;
}
} else {
throw e37249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37244){if((e37244 instanceof Error)){
var e__36164__auto____$12 = e37244;
if((e__36164__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37248){if((e37248 instanceof Error)){
var e__36164__auto____$13 = e37248;
if((e__36164__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$13;
}
} else {
throw e37248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37245){if((e37245 instanceof Error)){
var e__36164__auto____$13 = e37245;
if((e__36164__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37247){if((e37247 instanceof Error)){
var e__36164__auto____$14 = e37247;
if((e__36164__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$14;
}
} else {
throw e37247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37246){if((e37246 instanceof Error)){
var e__36164__auto____$14 = e37246;
if((e__36164__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$14;
}
} else {
throw e37246;

}
}} else {
throw e__36164__auto____$13;
}
} else {
throw e37245;

}
}} else {
throw e__36164__auto____$12;
}
} else {
throw e37244;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37231){if((e37231 instanceof Error)){
var e__36164__auto____$12 = e37231;
if((e__36164__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37243){if((e37243 instanceof Error)){
var e__36164__auto____$13 = e37243;
if((e__36164__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$13;
}
} else {
throw e37243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37242){if((e37242 instanceof Error)){
var e__36164__auto____$13 = e37242;
if((e__36164__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$13;
}
} else {
throw e37242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37232){if((e37232 instanceof Error)){
var e__36164__auto____$13 = e37232;
if((e__36164__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === true)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37241){if((e37241 instanceof Error)){
var e__36164__auto____$14 = e37241;
if((e__36164__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$14;
}
} else {
throw e37241;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37240){if((e37240 instanceof Error)){
var e__36164__auto____$14 = e37240;
if((e__36164__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$14;
}
} else {
throw e37240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37233){if((e37233 instanceof Error)){
var e__36164__auto____$14 = e37233;
if((e__36164__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_37177_2__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(2));
if((ocr_37177_2__37216 === false)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === true)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37239){if((e37239 instanceof Error)){
var e__36164__auto____$15 = e37239;
if((e__36164__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$15;
}
} else {
throw e37239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37235){if((e37235 instanceof Error)){
var e__36164__auto____$15 = e37235;
if((e__36164__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_37177_0__37214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(0));
if((ocr_37177_0__37214 === false)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37237){if((e37237 instanceof Error)){
var e__36164__auto____$16 = e37237;
if((e__36164__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_37177_1__37215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37177,(1));
if((ocr_37177_1__37215 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37238){if((e37238 instanceof Error)){
var e__36164__auto____$17 = e37238;
if((e__36164__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$17;
}
} else {
throw e37238;

}
}} else {
throw e__36164__auto____$16;
}
} else {
throw e37237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37236){if((e37236 instanceof Error)){
var e__36164__auto____$16 = e37236;
if((e__36164__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$16;
}
} else {
throw e37236;

}
}} else {
throw e__36164__auto____$15;
}
} else {
throw e37235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37234){if((e37234 instanceof Error)){
var e__36164__auto____$15 = e37234;
if((e__36164__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$15;
}
} else {
throw e37234;

}
}} else {
throw e__36164__auto____$14;
}
} else {
throw e37233;

}
}} else {
throw e__36164__auto____$13;
}
} else {
throw e37232;

}
}} else {
throw e__36164__auto____$12;
}
} else {
throw e37231;

}
}} else {
throw e__36164__auto____$11;
}
} else {
throw e37230;

}
}} else {
throw e__36164__auto____$10;
}
} else {
throw e37229;

}
}} else {
throw e__36164__auto____$9;
}
} else {
throw e37228;

}
}} else {
throw e__36164__auto____$8;
}
} else {
throw e37227;

}
}} else {
throw e__36164__auto____$7;
}
} else {
throw e37226;

}
}} else {
throw e__36164__auto____$6;
}
} else {
throw e37225;

}
}} else {
throw e__36164__auto____$5;
}
} else {
throw e37224;

}
}} else {
throw e__36164__auto____$4;
}
} else {
throw e37223;

}
}} else {
throw e__36164__auto____$3;
}
} else {
throw e37222;

}
}} else {
throw e__36164__auto____$2;
}
} else {
throw e37221;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37220;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37219){if((e37219 instanceof Error)){
var e__36164__auto____$1 = e37219;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37219;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37218;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37217){if((e37217 instanceof Error)){
var e__36164__auto__ = e37217;
if((e__36164__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__36164__auto__;
}
} else {
throw e37217;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_37285 = cljs.core.vec(eav);
var ocr_37286 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_37285)) && ((cljs.core.count(ocr_37285) === 3)))){
try{var ocr_37285_0__37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_0__37311,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37285_2__37313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_2__37313,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e37375){if((e37375 instanceof Error)){
var e__36164__auto__ = e37375;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37286)) && ((cljs.core.count(ocr_37286) === 3)))){
try{var ocr_37286_2__37316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37316 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37377){if((e37377 instanceof Error)){
var e__36164__auto____$1 = e37377;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37316 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37378){if((e37378 instanceof Error)){
var e__36164__auto____$2 = e37378;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37378;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37377;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37376){if((e37376 instanceof Error)){
var e__36164__auto____$1 = e37376;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37376;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37370){if((e37370 instanceof Error)){
var e__36164__auto__ = e37370;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{var ocr_37285_2__37313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_2__37313,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_37286)) && ((cljs.core.count(ocr_37286) === 3)))){
try{var ocr_37286_1__37318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37318 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37373){if((e37373 instanceof Error)){
var e__36164__auto____$1 = e37373;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37318 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37374){if((e37374 instanceof Error)){
var e__36164__auto____$2 = e37374;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37374;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37372){if((e37372 instanceof Error)){
var e__36164__auto____$1 = e37372;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37371){if((e37371 instanceof Error)){
var e__36164__auto____$1 = e37371;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37371;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37324){if((e37324 instanceof Error)){
var e__36164__auto__ = e37324;
if((e__36164__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37286)) && ((cljs.core.count(ocr_37286) === 3)))){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37285_2__37313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_2__37313,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37369){if((e37369 instanceof Error)){
var e__36164__auto____$1 = e37369;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37368){if((e37368 instanceof Error)){
var e__36164__auto____$1 = e37368;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37326){if((e37326 instanceof Error)){
var e__36164__auto____$1 = e37326;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
try{var ocr_37285_2__37313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_2__37313,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37365){if((e37365 instanceof Error)){
var e__36164__auto____$2 = e37365;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37366){if((e37366 instanceof Error)){
var e__36164__auto____$3 = e37366;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37367){if((e37367 instanceof Error)){
var e__36164__auto____$4 = e37367;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37367;

}
}} else {
throw e__36164__auto____$3;
}
} else {
throw e37366;

}
}} else {
throw e__36164__auto____$2;
}
} else {
throw e37365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37364){if((e37364 instanceof Error)){
var e__36164__auto____$2 = e37364;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$2;
}
} else {
throw e37364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37327){if((e37327 instanceof Error)){
var e__36164__auto____$2 = e37327;
if((e__36164__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
try{var ocr_37285_2__37313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_2__37313,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37363){if((e37363 instanceof Error)){
var e__36164__auto____$3 = e37363;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$3;
}
} else {
throw e37363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37362){if((e37362 instanceof Error)){
var e__36164__auto____$3 = e37362;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$3;
}
} else {
throw e37362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37328){if((e37328 instanceof Error)){
var e__36164__auto____$3 = e37328;
if((e__36164__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === true)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37361){if((e37361 instanceof Error)){
var e__36164__auto____$4 = e37361;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37360){if((e37360 instanceof Error)){
var e__36164__auto____$4 = e37360;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$4;
}
} else {
throw e37360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37329){if((e37329 instanceof Error)){
var e__36164__auto____$4 = e37329;
if((e__36164__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === false)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37359){if((e37359 instanceof Error)){
var e__36164__auto____$5 = e37359;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$5;
}
} else {
throw e37359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37358){if((e37358 instanceof Error)){
var e__36164__auto____$5 = e37358;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$5;
}
} else {
throw e37358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37330){if((e37330 instanceof Error)){
var e__36164__auto____$5 = e37330;
if((e__36164__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === true)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
try{var ocr_37285_1__37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_1__37312,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37357){if((e37357 instanceof Error)){
var e__36164__auto____$6 = e37357;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$6;
}
} else {
throw e37357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37354){if((e37354 instanceof Error)){
var e__36164__auto____$6 = e37354;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
try{var ocr_37285_0__37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_0__37311,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37356){if((e37356 instanceof Error)){
var e__36164__auto____$7 = e37356;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37355){if((e37355 instanceof Error)){
var e__36164__auto____$7 = e37355;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37355;

}
}} else {
throw e__36164__auto____$6;
}
} else {
throw e37354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37331){if((e37331 instanceof Error)){
var e__36164__auto____$6 = e37331;
if((e__36164__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === false)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
try{var ocr_37285_0__37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_0__37311,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37353){if((e37353 instanceof Error)){
var e__36164__auto____$7 = e37353;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37352){if((e37352 instanceof Error)){
var e__36164__auto____$7 = e37352;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$7;
}
} else {
throw e37352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37332){if((e37332 instanceof Error)){
var e__36164__auto____$7 = e37332;
if((e__36164__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === true)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === false)){
try{var ocr_37285_0__37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37285_0__37311,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37351){if((e37351 instanceof Error)){
var e__36164__auto____$8 = e37351;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$8;
}
} else {
throw e37351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37345){if((e37345 instanceof Error)){
var e__36164__auto____$8 = e37345;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37349){if((e37349 instanceof Error)){
var e__36164__auto____$9 = e37349;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37350){if((e37350 instanceof Error)){
var e__36164__auto____$10 = e37350;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37350;

}
}} else {
throw e__36164__auto____$9;
}
} else {
throw e37349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37346){if((e37346 instanceof Error)){
var e__36164__auto____$9 = e37346;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === false)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37348){if((e37348 instanceof Error)){
var e__36164__auto____$10 = e37348;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37347){if((e37347 instanceof Error)){
var e__36164__auto____$10 = e37347;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37347;

}
}} else {
throw e__36164__auto____$9;
}
} else {
throw e37346;

}
}} else {
throw e__36164__auto____$8;
}
} else {
throw e37345;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37333){if((e37333 instanceof Error)){
var e__36164__auto____$8 = e37333;
if((e__36164__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === false)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37344){if((e37344 instanceof Error)){
var e__36164__auto____$9 = e37344;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$9;
}
} else {
throw e37344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37343){if((e37343 instanceof Error)){
var e__36164__auto____$9 = e37343;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$9;
}
} else {
throw e37343;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37334){if((e37334 instanceof Error)){
var e__36164__auto____$9 = e37334;
if((e__36164__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === true)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37342){if((e37342 instanceof Error)){
var e__36164__auto____$10 = e37342;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37342;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37341){if((e37341 instanceof Error)){
var e__36164__auto____$10 = e37341;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$10;
}
} else {
throw e37341;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37335){if((e37335 instanceof Error)){
var e__36164__auto____$10 = e37335;
if((e__36164__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_37286_2__37322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(2));
if((ocr_37286_2__37322 === false)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === true)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37340){if((e37340 instanceof Error)){
var e__36164__auto____$11 = e37340;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$11;
}
} else {
throw e37340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37337){if((e37337 instanceof Error)){
var e__36164__auto____$11 = e37337;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_37286_0__37320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(0));
if((ocr_37286_0__37320 === false)){
try{var ocr_37286_1__37321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37286,(1));
if((ocr_37286_1__37321 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37285,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37339){if((e37339 instanceof Error)){
var e__36164__auto____$12 = e37339;
if((e__36164__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$12;
}
} else {
throw e37339;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37338){if((e37338 instanceof Error)){
var e__36164__auto____$12 = e37338;
if((e__36164__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$12;
}
} else {
throw e37338;

}
}} else {
throw e__36164__auto____$11;
}
} else {
throw e37337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37336){if((e37336 instanceof Error)){
var e__36164__auto____$11 = e37336;
if((e__36164__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$11;
}
} else {
throw e37336;

}
}} else {
throw e__36164__auto____$10;
}
} else {
throw e37335;

}
}} else {
throw e__36164__auto____$9;
}
} else {
throw e37334;

}
}} else {
throw e__36164__auto____$8;
}
} else {
throw e37333;

}
}} else {
throw e__36164__auto____$7;
}
} else {
throw e37332;

}
}} else {
throw e__36164__auto____$6;
}
} else {
throw e37331;

}
}} else {
throw e__36164__auto____$5;
}
} else {
throw e37330;

}
}} else {
throw e__36164__auto____$4;
}
} else {
throw e37329;

}
}} else {
throw e__36164__auto____$3;
}
} else {
throw e37328;

}
}} else {
throw e__36164__auto____$2;
}
} else {
throw e37327;

}
}} else {
throw e__36164__auto____$1;
}
} else {
throw e37326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37325){if((e37325 instanceof Error)){
var e__36164__auto____$1 = e37325;
if((e__36164__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36164__auto____$1;
}
} else {
throw e37325;

}
}} else {
throw e__36164__auto__;
}
} else {
throw e37324;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37323){if((e37323 instanceof Error)){
var e__36164__auto__ = e37323;
if((e__36164__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__36164__auto__;
}
} else {
throw e37323;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37380){
var vec__37381 = p__37380;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37379_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__37379_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37385){
var vec__37386 = p__37385;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37386,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37386,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37384_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__37384_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__37389 = cljs.core.rest(ins);
var G__37390 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__37389,G__37390) : posh.lib.q_analyze.just_qvars.call(null,G__37389,G__37390));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37391_SHARP_){
return cljs.core.zipmap(qvars,p1__37391_SHARP_);
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
var vec__37392 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37392,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37392,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37392,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37392,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__37567 = var$;
var G__37568 = dbvarmap;
var G__37569 = cljs.core.rest(dbeavs);
var$ = G__37567;
dbvarmap = G__37568;
dbeavs = G__37569;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__37395 = cljs.core.rest(vars);
var G__37396 = dbvarmap;
var G__37397 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__37395,G__37396,G__37397) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__37395,G__37396,G__37397));
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
var G__37571 = (n + (1));
var G__37572 = cljs.core.rest(xs__$1);
n = G__37571;
xs__$1 = G__37572;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37398_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__37398_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__37398_SHARP_) : type.call(null,p1__37398_SHARP_));
} else {
return p1__37398_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__37399 = cljs.core.rest(ins);
var G__37400 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__37399,G__37400) : posh.lib.q_analyze.make_dbarg_map.call(null,G__37399,G__37400));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37401){
var vec__37402 = p__37401;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37402,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37402,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__37406_SHARP_,p2__37405_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__37405_SHARP_)){
return p1__37406_SHARP_;
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
var pred__37410 = cljs.core._EQ_;
var expr__37411 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__37410.cljs$core$IFn$_invoke$arity$2 ? pred__37410.cljs$core$IFn$_invoke$arity$2((1),expr__37411) : pred__37410.call(null,(1),expr__37411)))){
return true;
} else {
if(cljs.core.truth_((pred__37410.cljs$core$IFn$_invoke$arity$2 ? pred__37410.cljs$core$IFn$_invoke$arity$2((3),expr__37411) : pred__37410.call(null,(3),expr__37411)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__37574 = cljs.core.first(remaining);
var G__37575 = cljs.core.rest(remaining);
clause = G__37574;
remaining = G__37575;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__37576 = cljs.core.first(remaining);
var G__37577 = cljs.core.rest(remaining);
clause = G__37576;
remaining = G__37577;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__37413(s__37414){
return (new cljs.core.LazySeq(null,(function (){
var s__37414__$1 = s__37414;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37414__$1);
if(temp__5735__auto__){
var s__37414__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37414__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37414__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37416 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37415 = (0);
while(true){
if((i__37415 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37415);
cljs.core.chunk_append(b__37416,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__37578 = (i__37415 + (1));
i__37415 = G__37578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37416),posh$lib$q_analyze$resolve_any_idents_$_iter__37413(cljs.core.chunk_rest(s__37414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37416),null);
}
} else {
var var_value = cljs.core.first(s__37414__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__37413(cljs.core.rest(s__37414__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37421){
var vec__37422 = p__37421;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37422,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37422,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37425){
var vec__37426 = p__37425;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37429){
var vec__37430 = p__37429;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37433){
var vec__37434 = p__37433;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37434,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37434,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__37438 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__37439 = cljs.core.vec(r);
var fexpr__37437 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__37437.cljs$core$IFn$_invoke$arity$2 ? fexpr__37437.cljs$core$IFn$_invoke$arity$2(G__37438,G__37439) : fexpr__37437.call(null,G__37438,G__37439));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37440){
var vec__37441 = p__37440;
var seq__37442 = cljs.core.seq(vec__37441);
var first__37443 = cljs.core.first(seq__37442);
var seq__37442__$1 = cljs.core.next(seq__37442);
var db = first__37443;
var eav = seq__37442__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37444){
var vec__37445 = p__37444;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37445,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__37419_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__37419_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__37419_SHARP_) : linked_qvars.call(null,p1__37419_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__37419_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__37420_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__37420_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__37420_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
