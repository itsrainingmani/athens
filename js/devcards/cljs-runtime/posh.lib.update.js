goog.provide('posh.lib.update');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.db');
posh.lib.update.update_pull = (function posh$lib$update$update_pull(p__37450,storage_key){
var map__37451 = p__37450;
var map__37451__$1 = (((((!((map__37451 == null))))?(((((map__37451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37451):map__37451);
var posh_tree = map__37451__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__37453 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_filter_pull = (function posh$lib$update$update_filter_pull(p__37456,storage_key){
var map__37457 = p__37456;
var map__37457__$1 = (((((!((map__37457 == null))))?(((((map__37457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37457):map__37457);
var posh_tree = map__37457__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__37459 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], null),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis))),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], 0));
});
posh.lib.update.update_pull_many = (function posh$lib$update$update_pull_many(p__37462,storage_key){
var map__37463 = p__37462;
var map__37463__$1 = (((((!((map__37463 == null))))?(((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37463):map__37463);
var posh_tree = map__37463__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37463__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37463__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__37465 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(2),null);
var eids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(3),null);
var analysis = posh.lib.pull_analyze.pull_many_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eids);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull_many], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_q_with_dbvarmap = (function posh$lib$update$update_q_with_dbvarmap(p__37468,storage_key){
var map__37469 = p__37468;
var map__37469__$1 = (((((!((map__37469 == null))))?(((((map__37469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37469):map__37469);
var posh_tree = map__37469__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));

var vec__37471 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(2),null);
var retrieve__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve));
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var poshdbmap = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37474){
var vec__37475 = p__37474;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb)]);
}),dbvarmap));
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37478){
var vec__37479 = p__37478;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(1),null);
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(poshdbmap,sym);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var analysis = posh.lib.q_analyze.q_analyze(dcfg,retrieve__$1,query,fixed_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137),dbvarmap,new cljs.core.Keyword(null,"analysis","analysis",-1362593389),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_q], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024))], null);
});
posh.lib.update.update_q = (function posh$lib$update$update_q(posh_tree,storage_key){
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key));
});
posh.lib.update.reduce_entities = (function posh$lib$update$reduce_entities(r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,x);
}),acc,xs);
}),cljs.core.PersistentHashSet.EMPTY,r);
});
posh.lib.update.filter_q_transform_analysis = (function posh$lib$update$filter_q_transform_analysis(analysis){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.update.reduce_entities(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(analysis))], null)], null),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_q], null)], 0)),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"patterns","patterns",1164082024)], 0));
});
posh.lib.update.update_filter_q = (function posh$lib$update$update_filter_q(posh_tree,storage_key){
return posh.lib.update.filter_q_transform_analysis(new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key)));
});
posh.lib.update.update_posh_item = (function posh$lib$update$update_posh_item(posh_tree,storage_key){
var G__37483 = cljs.core.first(storage_key);
var G__37483__$1 = (((G__37483 instanceof cljs.core.Keyword))?G__37483.fqn:null);
switch (G__37483__$1) {
case "pull":
return posh.lib.update.update_pull(posh_tree,storage_key);

break;
case "q":
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q(posh_tree,storage_key));

break;
case "filter-pull":
return posh.lib.update.update_filter_pull(posh_tree,storage_key);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37483__$1)].join('')));

}
});

//# sourceMappingURL=posh.lib.update.js.map
