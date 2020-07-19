goog.provide('posh.lib.db');
goog.require('cljs.core');
goog.require('posh.lib.datom_matcher');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__30899 = cljs.core.first(poshdb);
var G__30899__$1 = (((G__30899 instanceof cljs.core.Keyword))?G__30899.fqn:null);
switch (G__30899__$1) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second(poshdb);

break;
case "filter-pull":
return cljs.core.second(poshdb);

break;
case "filter-q":
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(poshdb,(2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30899__$1)].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__30945 = cljs.core.cons(pdb,path);
var G__30946 = posh.lib.db.get_parent_db(pdb);
path = G__30945;
pdb = G__30946;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conns","conns",-1475268193).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbs","dbs",1889628467).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return cljs.core.second(poshdb);
} else {
var G__30947 = posh.lib.db.get_parent_db(poshdb);
poshdb = G__30947;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.db_id__GT_db(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs(posh_tree,posh.lib.db.poshdb__GT_db_id(poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_(tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var G__30913 = arguments.length;
switch (G__30913) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,filters,null);
}));

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__30917 = filters;
var map__30917__$1 = (((((!((map__30917 == null))))?(((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30917):map__30917);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,new cljs.core.Keyword(null,"since","since",315379842));
var with$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,new cljs.core.Keyword(null,"with","with",-1536296876));
var db__$1 = (function (){var or__4185__auto__ = db;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var fexpr__30919 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30919.cljs$core$IFn$_invoke$arity$1 ? fexpr__30919.cljs$core$IFn$_invoke$arity$1(conn) : fexpr__30919.call(null,conn));
}
})();
var db__$2 = (cljs.core.truth_(since)?(function (){var fexpr__30920 = new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30920.cljs$core$IFn$_invoke$arity$2 ? fexpr__30920.cljs$core$IFn$_invoke$arity$2(db__$1,since) : fexpr__30920.call(null,db__$1,since));
})():db__$1);
var db__$3 = (cljs.core.truth_(as_of)?(function (){var fexpr__30921 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30921.cljs$core$IFn$_invoke$arity$2 ? fexpr__30921.cljs$core$IFn$_invoke$arity$2(db__$2,as_of) : fexpr__30921.call(null,db__$2,as_of));
})():db__$2);
var db__$4 = (cljs.core.truth_(with$)?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__30923 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30923.cljs$core$IFn$_invoke$arity$2 ? fexpr__30923.cljs$core$IFn$_invoke$arity$2(db__$3,with$) : fexpr__30923.call(null,db__$3,with$));
})()):db__$3);
var db__$5 = (cljs.core.truth_(filter)?(function (){var G__30925 = db__$4;
var G__30926 = (((filter instanceof cljs.core.Symbol))?null:filter);
var fexpr__30924 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30924.cljs$core$IFn$_invoke$arity$2 ? fexpr__30924.cljs$core$IFn$_invoke$arity$2(G__30925,G__30926) : fexpr__30924.call(null,G__30925,G__30926));
})():db__$4);
return db__$5;
}));

(posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4);

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__30929,poshdb){
var map__30930 = p__30929;
var map__30930__$1 = (((((!((map__30930 == null))))?(((((map__30930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30930):map__30930);
var posh_tree = map__30930__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return posh.lib.db.db_id__GT_db(posh_tree,cljs.core.second(poshdb));
} else {
var G__30933 = (function (){var G__30935 = posh_tree;
var G__30936 = posh.lib.db.get_parent_db(poshdb);
return (posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2 ? posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2(G__30935,G__30936) : posh.lib.db.poshdb__GT_db.call(null,G__30935,G__30936));
})();
var G__30934 = posh.lib.db.make_filter_pred(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,poshdb)));
var fexpr__30932 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30932.cljs$core$IFn$_invoke$arity$2 ? fexpr__30932.cljs$core$IFn$_invoke$arity$2(G__30933,G__30934) : fexpr__30932.call(null,G__30933,G__30934));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id(poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.poshdb__GT_db(posh_tree,poshdb),new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});

//# sourceMappingURL=posh.lib.db.js.map
