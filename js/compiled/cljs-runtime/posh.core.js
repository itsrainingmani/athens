goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__47265,retrieve){
var map__47266 = p__47265;
var map__47266__$1 = (((((!((map__47266 == null))))?(((((map__47266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47266):map__47266);
var dcfg = map__47266__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__47269 = arguments.length;
switch (G__47269) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
}));

(posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__47270,db_id,conn,schema,base_filters){
var map__47271 = p__47270;
var map__47271__$1 = (((((!((map__47271 == null))))?(((((map__47271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47271):map__47271);
var posh_tree = map__47271__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.add_db.cljs$lang$maxFixedArity = 5);

posh.core.set_db = (function posh$core$set_db(var_args){
var G__47274 = arguments.length;
switch (G__47274) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
}));

(posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__47275,db_id,db,filter_pred){
var map__47276 = p__47275;
var map__47276__$1 = (((((!((map__47276 == null))))?(((((map__47276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47276):map__47276);
var posh_tree = map__47276__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47276__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47276__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47276__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.set_db.cljs$lang$maxFixedArity = 4);

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__47278,poshdb,tx_patterns){
var map__47279 = p__47278;
var map__47279__$1 = (((((!((map__47279 == null))))?(((((map__47279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47279):map__47279);
var posh_tree = map__47279__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47279__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47279__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__47281,poshdb,pull_pattern,eid){
var map__47282 = p__47281;
var map__47282__$1 = (((((!((map__47282 == null))))?(((((map__47282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47282):map__47282);
var posh_tree = map__47282__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47341 = arguments.length;
var i__4790__auto___47342 = (0);
while(true){
if((i__4790__auto___47342 < len__4789__auto___47341)){
args__4795__auto__.push((arguments[i__4790__auto___47342]));

var G__47343 = (i__4790__auto___47342 + (1));
i__4790__auto___47342 = G__47343;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__47287,query,args){
var map__47288 = p__47287;
var map__47288__$1 = (((((!((map__47288 == null))))?(((((map__47288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47288):map__47288);
var posh_tree = map__47288__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__47290 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__47290__$1 = (((((!((map__47290 == null))))?(((((map__47290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47290):map__47290);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47290__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47290__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_filter_q.cljs$lang$applyTo = (function (seq47284){
var G__47285 = cljs.core.first(seq47284);
var seq47284__$1 = cljs.core.next(seq47284);
var G__47286 = cljs.core.first(seq47284__$1);
var seq47284__$2 = cljs.core.next(seq47284__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47285,G__47286,seq47284__$2);
}));

posh.core.add_pull = (function posh$core$add_pull(p__47292,poshdb,pull_pattern,eid){
var map__47293 = p__47292;
var map__47293__$1 = (((((!((map__47293 == null))))?(((((map__47293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47293):map__47293);
var posh_tree = map__47293__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47293__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__47295,poshdb,pull_pattern,eids){
var map__47296 = p__47295;
var map__47296__$1 = (((((!((map__47296 == null))))?(((((map__47296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47296):map__47296);
var posh_tree = map__47296__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47349 = arguments.length;
var i__4790__auto___47350 = (0);
while(true){
if((i__4790__auto___47350 < len__4789__auto___47349)){
args__4795__auto__.push((arguments[i__4790__auto___47350]));

var G__47351 = (i__4790__auto___47350 + (1));
i__4790__auto___47350 = G__47351;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__47301,query,args){
var map__47302 = p__47301;
var map__47302__$1 = (((((!((map__47302 == null))))?(((((map__47302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47302):map__47302);
var posh_tree = map__47302__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4185__auto__ = cached;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var map__47304 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__47304__$1 = (((((!((map__47304 == null))))?(((((map__47304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47304):map__47304);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47304__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47304__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_q.cljs$lang$applyTo = (function (seq47298){
var G__47299 = cljs.core.first(seq47298);
var seq47298__$1 = cljs.core.next(seq47298);
var G__47300 = cljs.core.first(seq47298__$1);
var seq47298__$2 = cljs.core.next(seq47298__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47299,G__47300,seq47298__$2);
}));

posh.core.remove_item = (function posh$core$remove_item(p__47306,storage_key){
var map__47307 = p__47306;
var map__47307__$1 = (((((!((map__47307 == null))))?(((((map__47307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47307):map__47307);
var posh_tree = map__47307__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item(graph,storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__47309,db_id,tx,new_cache,storage_key){
var map__47310 = p__47309;
var map__47310__$1 = (((((!((map__47310 == null))))?(((((map__47310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47310):map__47310);
var posh_tree = map__47310__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47310__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47310__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?(function (){var fexpr__47313 = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis);
return (fexpr__47313.cljs$core$IFn$_invoke$arity$2 ? fexpr__47313.cljs$core$IFn$_invoke$arity$2(posh_tree,storage_key) : fexpr__47313.call(null,posh_tree,storage_key));
})():null);
var analysis = (function (){var or__4185__auto__ = reloaded;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return current_analysis;
}
})();
var map__47312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__47312__$1 = (((((!((map__47312 == null))))?(((((map__47312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47312):map__47312);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47312__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (((!(cljs.core.empty_QMARK_(outputs))))?(function (){var and__4174__auto__ = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4174__auto__)){
return posh.lib.datom_matcher.matching_datoms(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4174__auto__;
}
})():false);
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
}),new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__47315,poshdb,tx){
var map__47316 = p__47315;
var map__47316__$1 = (((((!((map__47316 == null))))?(((((map__47316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47316):map__47316);
var posh_tree = map__47316__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__47318,conns_results){
var map__47319 = p__47318;
var map__47319__$1 = (((((!((map__47319 == null))))?(((((map__47319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47319):map__47319);
var posh_tree = map__47319__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4582__auto__ = (function posh$core$after_transact_$_iter__47321(s__47322){
return (new cljs.core.LazySeq(null,(function (){
var s__47322__$1 = s__47322;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47322__$1);
if(temp__5735__auto__){
var s__47322__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47322__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47322__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47324 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47323 = (0);
while(true){
if((i__47323 < size__4581__auto__)){
var vec__47325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47323);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47325,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47325,(1),null);
cljs.core.chunk_append(b__47324,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__47357 = (i__47323 + (1));
i__47323 = G__47357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47324),posh$core$after_transact_$_iter__47321(cljs.core.chunk_rest(s__47322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47324),null);
}
} else {
var vec__47328 = cljs.core.first(s__47322__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47328,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47328,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__47321(cljs.core.rest(s__47322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changed,p__47331){
var vec__47332 = p__47331;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47332,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47332,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed,posh.core.cache_changes(new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,really_changed], 0)),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__47335){
var map__47336 = p__47335;
var map__47336__$1 = (((((!((map__47336 == null))))?(((((map__47336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47336):map__47336);
var posh_tree = map__47336__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv((function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,(function (){var fexpr__47338 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__47338.cljs$core$IFn$_invoke$arity$2 ? fexpr__47338.cljs$core$IFn$_invoke$arity$2(conn,tx) : fexpr__47338.call(null,conn,tx));
})());
}),cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=posh.core.js.map
