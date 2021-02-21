goog.provide('athens.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boot","web","boot/web",-657960887),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),(function (_,___$1){
return athens.db.rfdb;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),(function (p__61269,p__61270){
var map__61271 = p__61269;
var map__61271__$1 = (((((!((map__61271 == null))))?(((((map__61271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61271):map__61271);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61271__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61272 = p__61270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61272,(0),null);
var filepath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61272,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","filepath","db/filepath",1097485287),filepath),new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["db/filepath",filepath], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","sync","db/sync",-624147024),(function (db,p__61276){
var vec__61277 = p__61276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61277,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","synced","db/synced",-1518558434),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","not-synced","db/not-synced",1154889658),(function (db,p__61280){
var vec__61281 = p__61280;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61281,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","synced","db/synced",-1518558434),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("athena","open","athena/open",1253777725),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","update-recent-items","athena/update-recent-items",-1049064820),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__61286){
var vec__61287 = p__61286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61287,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61287,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = (((function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = ((function (){var G__61293 = (function (){var opts__57808__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57809__auto__;
})();
var fexpr__61292 = (function (){var opts__57808__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.set((function (){var opts__57808__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1((function (){var opts__57808__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__57809__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__57809__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57809__auto__;
})();
return (fexpr__61292.cljs$core$IFn$_invoke$arity$1 ? fexpr__61292.cljs$core$IFn$_invoke$arity$1(G__61293) : fexpr__61292.call(null,G__61293));
})() == null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})())?(function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var opts__57808__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57809__auto__;
})(),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),(function (){var opts__57808__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.conj;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57809__auto__;
})(),(function (){var opts__57808__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57809__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61291){var e = e61291;
throw e;
}}):(function (db,p__61295){
var vec__61296 = p__61295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(1),null);
if(((function (){var fexpr__61299 = cljs.core.set(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1(db));
return (fexpr__61299.cljs$core$IFn$_invoke$arity$1 ? fexpr__61299.cljs$core$IFn$_invoke$arity$1(selected_page) : fexpr__61299.call(null,selected_page));
})() == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),cljs.core.conj,selected_page);
} else {
return null;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle-item","right-sidebar/toggle-item",-445072841),(function (db,p__61300){
var vec__61301 = p__61300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61301,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61301,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),item,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","set-width","right-sidebar/set-width",-1463800509),(function (db,p__61304){
var vec__61305 = p__61304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61305,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61305,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","width","right-sidebar/width",1529781304),width);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mouse-down","set","mouse-down/set",685623064),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mouse-down","unset","mouse-down/unset",-1566717652),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","close-item","right-sidebar/close-item",-2021662216),(function (db,p__61309){
var vec__61310 = p__61309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61310,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61310,(1),null);
var map__61313 = db;
var map__61313__$1 = (((((!((map__61313 == null))))?(((((map__61313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61313):map__61313);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733));
var G__61315 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),cljs.core.dissoc,uid);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(items))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61315,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),false);
} else {
return G__61315;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),(function (p__61316,p__61317){
var map__61318 = p__61316;
var map__61318__$1 = (((((!((map__61318 == null))))?(((((map__61318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61318):map__61318);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61319 = p__61317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(1),null);
var block = (function (){var G__61323 = cljs.core.deref(athens.db.dsdb);
var G__61324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__61325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__61323,G__61324,G__61325) : datascript.core.pull.call(null,G__61323,G__61324,G__61325));
})();
var new_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)], 0));
var new_items = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1(db),uid,new_item);
var inc_items = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc));
}),cljs.core.PersistentArrayMap.EMPTY,new_items);
var sorted_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k1], null));
})),inc_items);
var G__61326 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items)], null);
if(cljs.core.not(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61326,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
} else {
return G__61326;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (p__61327,p__61328){
var map__61329 = p__61327;
var map__61329__$1 = (((((!((map__61329 == null))))?(((((map__61329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61329):map__61329);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61330 = p__61328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid),new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,index], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editing","target","editing/target",-1618170463),(function (p__61334,p__61335){
var map__61336 = p__61334;
var map__61336__$1 = (((((!((map__61336 == null))))?(((((map__61336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61336):map__61336);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61337 = p__61335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61337,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61337,(1),null);
var uid = cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(target.id,"editable-uid-"));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),(function (db,p__61341){
var vec__61342 = p__61341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61342,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61342,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.conj,uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","remove-item","selected/remove-item",-1109760940),(function (db,p__61346){
var vec__61347 = p__61346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61347,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61347,(1),null);
var items = new cljs.core.Keyword("selected","items","selected/items",1686402211).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.filterv((function (p1__61345_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__61345_SHARP_,uid);
}),items));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","add-items","selected/add-items",142460854),(function (db,p__61350){
var vec__61351 = p__61350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61351,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61351,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.concat,uids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY);
}));
athens.events.select_up = (function athens$events$select_up(selected_items){
var first_item = cljs.core.first(selected_items);
var prev_block_uid_ = athens.db.prev_block_uid(first_item);
var prev_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),first_item], null));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var editing_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,editing_uid)){
return idx;
} else {
return null;
}
}),selected_items));
var n = cljs.core.count(selected_items);
var new_items = (((((editing_idx === (0))) && ((n > (1)))))?cljs.core.pop(selected_items):(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(prev_block))?selected_items:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),prev_block_uid_))?(function (){var parent_children = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61354_SHARP_){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(p1__61354_SHARP_);
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)));
var to_keep = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (!(cljs.core.contains_QMARK_(parent_children,x)));
}),selected_items);
var new_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_block_uid_], null),to_keep);
return new_vec;
})():cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_block_uid_], null),selected_items)
)));
return new_items;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","up","selected/up",921350754),(function (db,p__61355){
var vec__61356 = p__61355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61356,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61356,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),athens.events.select_up(selected_items));
}));
athens.events.select_down = (function athens$events$select_down(selected_items){
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var editing_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,editing_uid)){
return idx;
} else {
return null;
}
}),selected_items));
var last_item = cljs.core.last(selected_items);
var next_block_uid_ = athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2(last_item,true);
if((editing_idx > (0))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(selected_items,(1));
} else {
if(cljs.core.truth_(next_block_uid_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_items,next_block_uid_);
} else {
return selected_items;

}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","down","selected/down",-1806586329),(function (db,p__61359){
var vec__61360 = p__61359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61360,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61360,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),athens.events.select_down(selected_items));
}));
/**
 * We know that we only need to dec indices after the last block. The former blocks are necessarily going to remove all
 *   tail children, meaning we only need to be concerned with the last N blocks that are selected, adjacent siblings, to
 *   determine the minus-after value.
 */
athens.events.delete_selected = (function athens$events$delete_selected(selected_items){
var last_item = cljs.core.last(selected_items);
var selected_sibs_of_last = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__61366 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?selected","?selected",802438135,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?selected","?selected",802438135,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null)], null);
var G__61367 = cljs.core.deref(athens.db.dsdb);
var G__61368 = last_item;
var G__61369 = selected_items;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__61366,G__61367,G__61368,G__61369) : datascript.core.q.call(null,G__61366,G__61367,G__61368,G__61369));
})());
var vec__61363 = cljs.core.last(selected_sibs_of_last);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61363,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61363,(1),null);
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var n = cljs.core.count(selected_sibs_of_last);
return athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),order,n);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","delete","selected/delete",-812991161),(function (p__61371,p__61372){
var map__61373 = p__61371;
var map__61373__$1 = (((((!((map__61373 == null))))?(((((map__61373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61373):map__61373);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61374 = p__61372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61374,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61374,(1),null);
var retract_vecs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__61370_SHARP_){
return athens.db.retract_uid_recursively(p1__61370_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_items], 0));
var reindex_last_selected_parent = athens.events.delete_selected(selected_items);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(retract_vecs,reindex_last_selected_parent);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","set","alert/set",396257190),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,alert){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),(function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = alert;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61379){var e = e61379;
throw e;
}}):(function (db,alert){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),alert);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","unset","alert/unset",-421582694),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61380){var e = e61380;
throw e;
}}):(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","js","alert/js",1692948327),(function (_,p__61381){
var vec__61382 = p__61381;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61382,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61382,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("alert","js!","alert/js!",-1297535531),message], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","toggle","modal/toggle",1389100091),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("window","set-size","window/set-size",251809645),(function (_,p__61385){
var vec__61386 = p__61385;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61386,(0),null);
var vec__61389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61386,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ws/window-size",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","set","loading/set",102170502),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.assoc_in((function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),(function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61392){var e = e61392;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","unset","loading/unset",-44658566),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = cljs.core.assoc_in((function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),(function (){var opts__57808__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57809__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61393){var e = e61393;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),(function (db,p__61394){
var vec__61395 = p__61394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61395,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61395,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","reset","daily-notes/reset",1615543639),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","add","daily-notes/add",1566486218),(function (db,p__61398){
var vec__61399 = p__61398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61399,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61399,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-note","prev","daily-note/prev",428686172),(function (p__61402,p__61403){
var map__61404 = p__61402;
var map__61404__$1 = (((((!((map__61404 == null))))?(((((map__61404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61404):map__61404);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61404__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61405 = p__61403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(0),null);
var map__61408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(1),null);
var map__61408__$1 = (((((!((map__61408 == null))))?(((((map__61408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61408):map__61408);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),(function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid], null),items);
}));
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),title,uid], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),(function (p__61411,p__61412){
var map__61413 = p__61411;
var map__61413__$1 = (((((!((map__61413 == null))))?(((((map__61413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61413):map__61413);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61413__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61414 = p__61412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61414,(0),null);
var map__61417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61414,(1),null);
var map__61417__$1 = (((((!((map__61417 == null))))?(((((map__61417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61417):map__61417);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.conj,uid);
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),title,uid], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("get-db","init","get-db/init",-642889137),(function (p__61420,_){
var map__61421 = p__61420;
var map__61421__$1 = (((((!((map__61421 == null))))?(((((map__61421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61421):map__61421);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61421__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(athens.db.rfdb,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","get-db","http/get-db",-618568620)], null)
,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(rfdb)))], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","get-db","http/get-db",-618568620),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","set","alert/set",396257190)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786),(function (_,p__61423){
var vec__61424 = p__61423;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),new_db], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","get-db","local-storage/get-db",1436156387),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"datascript/DB")], null),(function (p__61427,_){
var map__61428 = p__61427;
var map__61428__$1 = (((((!((map__61428 == null))))?(((((map__61428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61428):map__61428);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61428__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(local_storage)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),(function (_,p__61430){
var vec__61431 = p__61430;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61431,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61431,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","set-theme","local-storage/set-theme",747726220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"theme/dark")], null),(function (p__61434,_){
var map__61435 = p__61434;
var map__61435__$1 = (((((!((map__61435 == null))))?(((((map__61435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61435):map__61435);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61435__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61435__$1,new cljs.core.Keyword(null,"db","db",993250759));
var is_dark = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",local_storage);
var theme = ((is_dark)?athens.style.THEME_DARK:athens.style.THEME_LIGHT);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("theme","dark","theme/dark",1860051576),is_dark),new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":root",athens.style.permute_color_opacities(theme)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("theme","toggle","theme/toggle",1382973879),(function (p__61437,_){
var map__61438 = p__61437;
var map__61438__$1 = (((((!((map__61438 == null))))?(((((map__61438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61438):map__61438);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dark_QMARK_ = new cljs.core.Keyword("theme","dark","theme/dark",1860051576).cljs$core$IFn$_invoke$arity$1(db);
var new_dark = cljs.core.not(dark_QMARK_);
var theme = (cljs.core.truth_(dark_QMARK_)?athens.style.THEME_LIGHT:athens.style.THEME_DARK);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("theme","dark","theme/dark",1860051576),new_dark),new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["theme/dark",new_dark], null),new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":root",athens.style.permute_color_opacities(theme)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact","transact",-267998670),(function (_,p__61441){
var vec__61442 = p__61441;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61442,(0),null);
var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61442,(1),null);
var synced_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","synced","db/synced",-1518558434)], null)));
var electron_QMARK_ = athens.util.electron_QMARK_();
if(cljs.core.truth_((function (){var and__4115__auto__ = synced_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return electron_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),tx_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","not-synced","db/not-synced",1154889658)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),tx_data], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),(function (_,p__61445){
var vec__61446 = p__61445;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61446,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61446,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","create","page/create",-1304816391),(function (_,p__61449){
var vec__61450 = p__61449;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(2),null);
var now = athens.util.now_ts();
var child_uid = athens.util.gen_block_uid();
var child = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","uid","block/uid",-1623585167),child_uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),child_uid], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","delete","page/delete",-1774686917),(function (_,p__61453){
var vec__61454 = p__61453;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454,(2),null);
var retract_blocks = athens.db.retract_uid_recursively(uid);
var delete_linked_refs = athens.db.replace_linked_refs(title);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(retract_blocks,delete_linked_refs);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205),(function (_,___$1){
var sidebar_ents = cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),i);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),(function (){var G__61457 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__61458 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__61457,G__61458) : datascript.core.q.call(null,G__61457,G__61458));
})())));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),sidebar_ents], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),(function (_,p__61459){
var vec__61460 = p__61459;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61460,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61460,(1),null);
var sidebar_ents_count = (function (){var or__4126__auto__ = (function (){var G__61465 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__61466 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__61465,G__61466) : datascript.core.q.call(null,G__61465,G__61466));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),sidebar_ents_count], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),(function (_,p__61467){
var vec__61468 = p__61467;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61468,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61468,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save","save",1850079149),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fs","write!","fs/write!",-1029545496),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__61471_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__61471_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__61472_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__61472_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),next], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),(function (_,p__61473){
var vec__61474 = p__61473;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61474,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61474,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4126__auto__ = athens.db.prev_block_uid(uid);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),(function (_,p__61477){
var vec__61478 = p__61477;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4126__auto__ = athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1(uid);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})()], null)], null);
}));
/**
 * If root and 0th child, 1) if value, no-op, 2) if blank value, delete only block.
 *   No-op if parent is missing.
 *   No-op if parent is prev-block and block has children.
 *   No-op if prev-sibling-block has children.
 *   Otherwise delete block and join with previous block
 *   If prev-block has children
 */
athens.events.backspace = (function athens$events$backspace(uid,value){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__61481 = block;
var map__61481__$1 = (((((!((map__61481 == null))))?(((((map__61481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61481):map__61481);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61481__$1,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var reindex = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var prev_block_uid_ = athens.db.prev_block_uid(uid);
var prev_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var prev_sib_order = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1));
var prev_sib = (function (){var G__61483 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null)], null);
var G__61484 = cljs.core.deref(athens.db.dsdb);
var G__61485 = athens.db.rules;
var G__61486 = uid;
var G__61487 = prev_sib_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61483,G__61484,G__61485,G__61486,G__61487) : datascript.core.q.call(null,G__61483,G__61484,G__61485,G__61486,G__61487));
})();
var prev_sib__$1 = athens.db.get_block(prev_sib);
var retract_block = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
if(cljs.core.not(parent)){
return null;
} else {
if(cljs.core.truth_(((cljs.core.empty_QMARK_(children))?(function (){var and__4115__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(and__4115__auto__)){
return (((order === (0))) && (clojure.string.blank_QMARK_(value)));
} else {
return and__4115__auto__;
}
})():false))){
var tx_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract_block,new_parent], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.not_empty(children);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(prev_sib__$1));
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.not_empty(children);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,prev_block);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),children);
var new_prev_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null),new cljs.core.Keyword("block","string","block/string",-2066596447),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(prev_block)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),children], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,retract_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_prev_block,new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(0),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),prev_block_uid_,cljs.core.count(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(prev_block))], null)], null)], null)], null);

}
}
}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backspace","backspace",-696007848),(function (_,p__61488){
var vec__61489 = p__61488;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61489,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61489,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61489,(2),null);
return athens.events.backspace(uid,value);
}));
athens.events.split_block = (function athens$events$split_block(uid,val,index){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__61492 = block;
var map__61492__$1 = (((((!((map__61492 == null))))?(((((map__61492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61492):map__61492);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61492__$1,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),index);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,index);
var new_uid = athens.util.gen_block_uid();
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),children);
var next_block = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(order + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),open,new cljs.core.Keyword("block","children","block/children",-1040716209),children,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),order));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
/**
 * Takes a block uid, its value, and the index to split the value string.
 *   It sets the value of the block to the head of (subs val 0 index)
 *   It then creates a new child block with the tail of the string set as its value and sets editing to that block.
 */
athens.events.split_block_to_children = (function athens$events$split_block_to_children(uid,val,index){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),index);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,index);
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(-1)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head,new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"split-block-to-children","split-block-to-children",-669108006),(function (_,p__61494){
var vec__61495 = p__61494;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61495,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61495,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61495,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61495,(3),null);
return athens.events.split_block_to_children(uid,val,index);
}));
/**
 * If user presses enter at the start of non-empty string, push that block down and
 *   and start editing a new block in the position of originating block - 'bump up' 
 */
athens.events.bump_up = (function athens$events$bump_up(uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
/**
 * Add a new-block after block
 */
athens.events.new_block = (function athens$events$new_block(block,parent){
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
athens.events.add_child = (function athens$events$add_child(block){
var map__61498 = block;
var map__61498__$1 = (((((!((map__61498 == null))))?(((((map__61498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61498):map__61498);
var p_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61498__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var new_uid = athens.util.gen_block_uid();
var new_child = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","string","block/string",-2066596447),"",new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_child], null),athens.db.inc_after(p_eid,(-1)));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),p_eid,new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","add-child","enter/add-child",1358910429),(function (_,p__61500){
var vec__61501 = p__61500;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61501,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61501,(1),null);
return athens.events.add_child(block);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","split-block","enter/split-block",-120697549),(function (_,p__61504){
var vec__61505 = p__61504;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61505,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61505,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61505,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61505,(3),null);
return athens.events.split_block(uid,val,index);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","bump-up","enter/bump-up",-577547414),(function (_,p__61508){
var vec__61509 = p__61508;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(1),null);
return athens.events.bump_up(uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),(function (_,p__61512){
var vec__61513 = p__61512;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61513,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61513,(1),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61513,(2),null);
return athens.events.new_block(block,parent);
}));
/**
 * - If block is open, has children, and caret at end, create new child
 *   - If block is CLOSED, has children, and caret at end, add a sibling block.
 *   - If value is empty and a root block, add a sibling block.
 *   - If caret is not at start, split block in half.
 *   - If block has children and is closed, if at end, just add another child.
 *   - If block has children and is closed and is in middle of block, split block.
 *   - If value is empty, unindent.
 *   - If caret is at start and there is a value, create new block below but keep same block index.
 */
athens.events.enter = (function athens$events$enter(rfdb,uid,d_key_down){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var root_block_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent));
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var map__61516 = d_key_down;
var map__61516__$1 = (((((!((map__61516 == null))))?(((((map__61516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61516):map__61516);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var event = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword("block","open","block/open",-1875254829).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,cljs.core.count(value));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","add-child","enter/add-child",1358910429),block], null):(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword("block","open","block/open",-1875254829).cljs$core$IFn$_invoke$arity$1(block)))?(function (){var and__4115__auto__ = cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,cljs.core.count(value));
} else {
return and__4115__auto__;
}
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),block,parent], null):((((cljs.core.empty_QMARK_(value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context_root_uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent))) || (root_block_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),block,parent], null):(((!((start === (0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","split-block","enter/split-block",-120697549),uid,value,start], null):((cljs.core.empty_QMARK_(value))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid,d_key_down,context_root_uid], null):(cljs.core.truth_((((start === (0)))?value:false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","bump-up","enter/bump-up",-577547414),uid], null):null))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__61518,p__61519){
var map__61520 = p__61518;
var map__61520__$1 = (((((!((map__61520 == null))))?(((((map__61520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61520):map__61520);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61520__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61521 = p__61519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61521,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61521,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61521,(2),null);
return athens.events.enter(rfdb,uid,d_event);
}));
/**
 * When indenting a single block:
 *   - retract block from parent
 *   - make block the last child of older sibling
 *   - reindex parent
 *   Only indent a block if it is not the zeroth block (first child).
 * 
 *   Uses `value` to update block/string as well. Otherwise, if user changes block string and indents, the local string
 *   is reset to original value, since it has not been unfocused yet (which is currently the transaction that updates the string).
 */
athens.events.indent = (function athens$events$indent(uid,d_key_down){
var map__61525 = d_key_down;
var map__61525__$1 = (((((!((map__61525 == null))))?(((((map__61525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61525):map__61525);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61525__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61525__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61525__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) === (0));
if(block_zero_QMARK_){
return null;
} else {
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.db.get_older_sib(uid);
var new_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib)),new cljs.core.Keyword("block","string","block/string",-2066596447),value], null);
var reindex = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
var new_older_sib = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_older_sib,new_parent], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,start,end], null)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__61527){
var vec__61528 = p__61527;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(2),null);
return athens.events.indent(uid,d_event);
}));
/**
 * Only indent if all blocks are siblings, and first block is not already a zeroth child (root child).
 * 
 *   older-sib is the current older-sib, before indent happens, AKA the new parent.
 *   new-parent is current parent, not older-sib. new-parent becomes grandparent.
 *   Reindex parent, add blocks to end of older-sib.
 */
athens.events.indent_multi = (function athens$events$indent_multi(uids){
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61531_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61531_SHARP_], null));
}),uids);
var same_parent_QMARK_ = athens.db.same_parent_QMARK_(uids);
var n_blocks = cljs.core.count(blocks);
var first_block = cljs.core.first(blocks);
var last_block = cljs.core.last(blocks);
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(first_block) === (0));
if(((same_parent_QMARK_) && ((!(block_zero_QMARK_))))){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.first(uids)], null));
var older_sib = athens.db.get_older_sib(cljs.core.first(uids));
var n_sib = cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib));
var new_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),(idx + n_sib)], null);
}),blocks);
var new_older_sib = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new_blocks,new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var reindex = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_block),n_blocks);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),blocks);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_older_sib,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("indent","multi","indent/multi",-1413321465),(function (_,p__61532){
var vec__61533 = p__61532;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61533,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61533,(1),null);
return athens.events.indent_multi(uids);
}));
/**
 * If parent is context-root or has node/title (date page), no-op.
 *   Otherwise, block becomes direct older sibling of parent (parent-order +1). reindex parent and grandparent.
 * - inc-after for grandparent
 * - dec-after for parent
 */
athens.events.unindent = (function athens$events$unindent(uid,d_key_down,context_root_uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__61536 = d_key_down;
var map__61536__$1 = (((((!((map__61536 == null))))?(((((map__61536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61536):map__61536);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),context_root_uid)){
return null;
} else {
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.db.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1)),new cljs.core.Keyword("block","string","block/string",-2066596447),value], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent)));
var reindex_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_parent], null);
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
var new_grandpa = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_parent,new_grandpa], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,start,end], null)], null);

}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (p__61538,p__61539){
var map__61540 = p__61538;
var map__61540__$1 = (((((!((map__61540 == null))))?(((((map__61540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61540):map__61540);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61541 = p__61539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61541,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61541,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61541,(2),null);
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return athens.events.unindent(uid,d_event,context_root_uid);
}));
/**
 * Do not do anything if root block child or if blocks are not siblings.
 *   Otherwise, retract and assert new parent for each block, and reindex parent and grandparent.
 */
athens.events.unindent_multi = (function athens$events$unindent_multi(uids,context_root_uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.first(uids)], null));
var same_parent_QMARK_ = athens.db.same_parent_QMARK_(uids);
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),context_root_uid)){
return null;
} else {
if((!(same_parent_QMARK_))){
return null;
} else {
var grandpa = athens.db.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61545_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61545_SHARP_], null));
}),uids);
var o_parent = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
var n_blocks = cljs.core.count(blocks);
var last_block = cljs.core.last(blocks);
var reindex_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_block),n_blocks);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_parent], null);
var new_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,uid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(idx + (o_parent + (1)))], null);
}),uids);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_blocks,athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent),n_blocks));
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),blocks);
var new_grandpa = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_grandpa], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);

}
}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unindent","multi","unindent/multi",-555006624),(function (p__61546,p__61547){
var map__61548 = p__61546;
var map__61548__$1 = (((((!((map__61548 == null))))?(((((map__61548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61548):map__61548);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61548__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61549 = p__61547;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61549,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61549,(1),null);
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return athens.events.unindent_multi(uids,context_root_uid);
}));
/**
 * Order will always be 0
 */
athens.events.drop_child = (function athens$events$drop_child(source,source_parent,target){
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var reindex_source_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source));
var reindex_target_parent = athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),(-1));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reindex_target_parent,new_source_block)], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_source_parent,new_target_parent], null);
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","child","drop/child",621693610),(function (_,p__61553){
var vec__61554 = p__61553;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61554,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61554,(1),null);
var source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61554,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61554,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_child(source,source_parent,target)], null)], null);
}));
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
athens.events.drop_same_parent = (function athens$events$drop_same_parent(kind,source,parent,target){
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var target_above_QMARK_ = (t_order < s_order);
var _PLUS_or_ = ((target_above_QMARK_)?cljs.core._PLUS_:cljs.core._);
var above_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470));
var below_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883));
var lower_bound = ((((above_QMARK_) && (target_above_QMARK_)))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?t_order:s_order
));
var upper_bound = ((((above_QMARK_) && ((!(target_above_QMARK_)))))?t_order:((((below_QMARK_) && ((!(target_above_QMARK_)))))?(t_order + (1)):s_order
));
var reindex = (function (){var G__61557 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),(1)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__61558 = cljs.core.deref(athens.db.dsdb);
var G__61559 = athens.db.rules;
var G__61560 = _PLUS_or_;
var G__61561 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61562 = lower_bound;
var G__61563 = upper_bound;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__61557,G__61558,G__61559,G__61560,G__61561,G__61562,G__61563) : datascript.core.q.call(null,G__61557,G__61558,G__61559,G__61560,G__61561,G__61562,G__61563));
})();
var new_source_order = ((((above_QMARK_) && (target_above_QMARK_)))?t_order:((((above_QMARK_) && ((!(target_above_QMARK_)))))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?(t_order + (1)):((((below_QMARK_) && ((!(target_above_QMARK_)))))?t_order:null))));
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),new_source_order], null);
var new_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source_block], null),reindex);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_parent], null);
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","same","drop/same",1086933528),(function (_,p__61564){
var vec__61565 = p__61564;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(1),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(2),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_same_parent(kind,source,parent,target)], null)], null);
}));
/**
 * - Give source-block target-block's order.
 *   - inc-after target
 *   - dec-after source
 */
athens.events.drop_diff_parent = (function athens$events$drop_diff_parent(kind,source,source_parent,target,target_parent){
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?t_order:(t_order + (1)))], null);
var reindex_source_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source));
var reindex_target_parent = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(t_order - (1)):t_order)));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_target_parent], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_source_parent,new_target_parent], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","diff","drop/diff",2132818350),(function (_,p__61568){
var vec__61569 = p__61568;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(1),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(2),null);
var source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(4),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61569,(5),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_diff_parent(kind,source,source_parent,target,target_parent)], null)], null);
}));
athens.events.drop_bullet = (function athens$events$drop_bullet(source_uid,target_uid,kind){
var source = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var same_parent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent);
var event = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","child","drop/child",621693610),source,source_parent,target], null):((same_parent_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","same","drop/same",1086933528),kind,source,source_parent,target], null):(((!(same_parent_QMARK_)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","diff","drop/diff",2132818350),kind,source,source_parent,target,target_parent], null):null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop","drop",364481611),(function (_,p__61572){
var vec__61573 = p__61572;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61573,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61573,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61573,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61573,(3),null);
return athens.events.drop_bullet(source_uid,target_uid,kind);
}));
athens.events.drop_multi_same_parent_all = (function athens$events$drop_multi_same_parent_all(kind,source_uids,parent,target){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61576_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61576_SHARP_], null));
}),source_uids);
var f_source = cljs.core.first(source_blocks);
var l_source = cljs.core.last(source_blocks);
var f_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(f_source);
var l_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(l_source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var target_above_QMARK_ = (t_order < f_s_order);
var _PLUS_or_ = ((target_above_QMARK_)?cljs.core._PLUS_:cljs.core._);
var above_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470));
var below_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883));
var lower_bound = ((((above_QMARK_) && (target_above_QMARK_)))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?t_order:l_s_order
));
var upper_bound = ((((above_QMARK_) && ((!(target_above_QMARK_)))))?t_order:((((below_QMARK_) && ((!(target_above_QMARK_)))))?(t_order + (1)):f_s_order
));
var n = cljs.core.count(source_uids);
var reindex = (function (){var G__61577 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__61578 = cljs.core.deref(athens.db.dsdb);
var G__61579 = athens.db.rules;
var G__61580 = _PLUS_or_;
var G__61581 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61582 = lower_bound;
var G__61583 = upper_bound;
var G__61584 = n;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$8 ? datascript.core.q.cljs$core$IFn$_invoke$arity$8(G__61577,G__61578,G__61579,G__61580,G__61581,G__61582,G__61583,G__61584) : datascript.core.q.call(null,G__61577,G__61578,G__61579,G__61580,G__61581,G__61582,G__61583,G__61584));
})();
var new_source_blocks = ((target_above_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = (function (){var G__61585 = (idx + t_order);
if(below_QMARK_){
return (G__61585 + (1));
} else {
return G__61585;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),source_blocks):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = (function (){var G__61586 = (t_order - idx);
if(above_QMARK_){
return (G__61586 - (1));
} else {
return G__61586;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),cljs.core.reverse(source_blocks)));
var new_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_source_blocks,reindex);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_parent], null);
return tx_data;
});
athens.events.drop_multi_same_source_parents = (function athens$events$drop_multi_same_source_parents(kind,source_uids,source_parent,target,target_parent){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61587_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61587_SHARP_], null));
}),source_uids);
var last_source = cljs.core.last(source_blocks);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var n = cljs.core.count(source_uids);
var new_source_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(idx + t_order):((idx + t_order) + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),source_blocks);
var reindex_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),last_s_order,n);
var bound = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(t_order - (1)):t_order);
var reindex_target_parent = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_source_blocks,athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),bound,n));
var retracts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null)], null);
}),source_uids);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_target_parent], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_source_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_target_parent], 0));
return tx_data;
});
/**
 * Only reindex after last target. plus-after
 */
athens.events.drop_multi_diff_source_parents = (function athens$events$drop_multi_diff_source_parents(kind,source_uids,target,target_parent){
var filtered_children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61588_SHARP_){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(p1__61588_SHARP_);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),(function (){var G__61592 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("block","uid","block/uid",16946360,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?not-contains?","?not-contains?",835870690,null),new cljs.core.Symbol(null,"?source-uids","?source-uids",-26099172,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?not-contains?","?not-contains?",835870690,null),new cljs.core.Symbol(null,"?source-uids","?source-uids",-26099172,null),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null)], null);
var G__61593 = cljs.core.deref(athens.db.dsdb);
var G__61594 = athens.db.rules;
var G__61595 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(target);
var G__61596 = athens.db.not_contains_QMARK_;
var G__61597 = cljs.core.set(source_uids);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__61592,G__61593,G__61594,G__61595,G__61596,G__61597) : datascript.core.q.call(null,G__61592,G__61593,G__61594,G__61595,G__61596,G__61597));
})()));
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?t_order:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883))) && (athens.db.last_child_QMARK_(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(target)))))?t_order:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883)))?(t_order + (1)):null)));
var n = cljs.core.count(filtered_children);
var head = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(filtered_children,(0),index);
var tail = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(filtered_children,index,n);
var new_vec = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(head,source_uids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tail], 0));
var new_source_uids = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,uid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),idx], null);
}),new_vec);
var source_parents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61589_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61589_SHARP_], null));
}),source_uids);
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61590_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61590_SHARP_], null));
}),source_uids);
var last_s_parent = cljs.core.last(source_parents);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.last(source_blocks));
var n__$1 = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(last_s_parent));
}),source_parents));
var reindex_last_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),last_s_order,n__$1);
var source_parents__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61591_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61591_SHARP_], null));
}),source_uids);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (uid,parent){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
}),source_uids,source_parents__$1);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_source_uids], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_last_source_parent], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(retracts,new_target_parent);
cljs.core.identity(new_source_parent);

return tx_data;
});
athens.events.drop_multi_child = (function athens$events$drop_multi_child(source_uids,target){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61598_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61598_SHARP_], null));
}),source_uids);
var source_parents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61599_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61599_SHARP_], null));
}),source_uids);
var last_source = cljs.core.last(source_blocks);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_source);
var last_s_parent = cljs.core.last(source_parents);
var new_source_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),idx], null);
}),source_blocks);
var n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(last_s_parent));
}),source_parents));
var reindex_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),last_s_order,n);
var reindex_target_parent = athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),(-1),n);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (uid,parent){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
}),source_uids,source_parents);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(reindex_target_parent,new_source_blocks)], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_source_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_target_parent], 0));
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","child","drop-multi/child",834016422),(function (_,p__61600){
var vec__61601 = p__61600;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(1),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_child(source_uid,target)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","same-all","drop-multi/same-all",2033979929),(function (_,p__61604){
var vec__61605 = p__61604;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(2),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_same_parent_all(kind,source_uids,parent,target)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","diff-source","drop-multi/diff-source",601642474),(function (_,p__61608){
var vec__61609 = p__61608;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61609,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61609,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61609,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61609,(3),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61609,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_diff_source_parents(kind,source_uids,target,target_parent)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","same-source","drop-multi/same-source",252787903),(function (_,p__61612){
var vec__61613 = p__61612;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(2),null);
var first_source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(4),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61613,(5),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_same_source_parents(kind,source_uids,first_source_parent,target,target_parent)], null)], null);
}));
/**
 * Cases:
 *   - the same 4 cases from drop-bullet
 *   - but also if blocks span across multiple parent levels
 */
athens.events.drop_bullet_multi = (function athens$events$drop_bullet_multi(source_uids,target_uid,kind){
var same_parent_all_QMARK_ = athens.db.same_parent_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_uids,target_uid));
var same_parent_source_QMARK_ = athens.db.same_parent_QMARK_(source_uids);
var diff_parents_source_QMARK_ = (!(same_parent_source_QMARK_));
var target = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var first_source_uid = cljs.core.first(source_uids);
var first_source_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),first_source_uid], null));
var target_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var event = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","child","drop-multi/child",834016422),source_uids,target], null):((same_parent_all_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","same-all","drop-multi/same-all",2033979929),kind,source_uids,first_source_parent,target], null):((diff_parents_source_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","diff-source","drop-multi/diff-source",601642474),kind,source_uids,target,target_parent], null):((same_parent_source_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","same-source","drop-multi/same-source",252787903),kind,source_uids,first_source_parent,target,target_parent], null):null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-multi","drop-multi",-339580846),(function (_,p__61616){
var vec__61617 = p__61616;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(3),null);
return athens.events.drop_bullet_multi(uids,target_uid,kind);
}));
athens.events.text_to_blocks = (function athens$events$text_to_blocks(text,uid,root_order){
var lines = clojure.string.split_lines(text);
var left_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61621_SHARP_){
return cljs.core.count(cljs.core.first(p1__61621_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61620_SHARP_){
return cljs.core.re_find(/^\s*(-|\*)?/,p1__61620_SHARP_);
}),lines));
var sanitize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return clojure.string.replace(x,/^\s*(-|\*)?\s*/,"");
}),lines);
var blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(((-1) * idx) - (1)),new cljs.core.Keyword("block","string","block/string",-2066596447),x,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid()], null);
}),sanitize);
var n = cljs.core.count(blocks);
var parents = (function (){var i = (1);
var res = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(blocks)], null);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i)){
return res;
} else {
var G__61688 = (i + (1));
var G__61689 = (function (){var j = (i - (1));
while(true){
if((j < (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i));
} else {
var curr_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(left_counts,i);
var prev_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(left_counts,j,null);
if((prev_count < curr_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,j)),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i)], null));
} else {
var G__61690 = (j - (1));
j = G__61690;
continue;
}
}
break;
}
})();
i = G__61688;
res = G__61689;
continue;
}
break;
}
})();
var tx_data = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__61622){
var vec__61623 = p__61622;
var _tempid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623,(0),null);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623,(1),null);
var order = (0);
var res = cljs.core.PersistentVector.EMPTY;
var data = blocks__$1;
while(true){
var map__61628 = cljs.core.first(data);
var map__61628__$1 = (((((!((map__61628 == null))))?(((((map__61628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61628):map__61628);
var block = map__61628__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
if((block == null)){
return res;
} else {
if((children == null)){
var new_res = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.deref(root_order))], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(root_order,cljs.core.inc);

var G__61691 = order;
var G__61692 = new_res;
var G__61693 = cljs.core.next(data);
order = G__61691;
res = G__61692;
data = G__61693;
continue;
} else {
var G__61694 = (order + (1));
var G__61695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.assoc_in(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","order","block/order",-1429282437)], null),order));
var G__61696 = cljs.core.next(data);
order = G__61694;
res = G__61695;
data = G__61696;
continue;

}
}
break;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._GT_),cljs.core.group_by(new cljs.core.Keyword("db","id","db/id",-1388397098),parents))], 0));
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste","paste",1975741548),(function (_,p__61630){
var vec__61631 = p__61630;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(2),null);
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__61634 = block;
var map__61634__$1 = (((((!((map__61634 == null))))?(((((map__61634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61634):map__61634);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var map__61635 = athens.keybindings.destruct_target(document.activeElement);
var map__61635__$1 = (((((!((map__61635 == null))))?(((((map__61635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61635):map__61635);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"value","value",305978217));
var empty_block_QMARK_ = ((clojure.string.blank_QMARK_(value)) && (cljs.core.empty_QMARK_(children)));
var block_start_QMARK_ = (start === (0));
var parent_QMARK_ = (function (){var and__4115__auto__ = children;
if(cljs.core.truth_(and__4115__auto__)){
return open;
} else {
return and__4115__auto__;
}
})();
var start_idx = ((empty_block_QMARK_)?order:((block_start_QMARK_)?order:(cljs.core.truth_(parent_QMARK_)?(0):(order + (1))
)));
var root_order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(start_idx);
var parent = (cljs.core.truth_(parent_QMARK_)?block:athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))
);
var paste_tx_data = athens.events.text_to_blocks(text,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),root_order);
var n = (cljs.core.deref(root_order) - start_idx);
var start_reindex = ((block_start_QMARK_)?(order - (1)):(cljs.core.truth_(parent_QMARK_)?(-1):order
));
var amount = ((empty_block_QMARK_)?(n - (1)):n
);
var reindex = athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),start_reindex,amount);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(reindex,paste_tx_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((empty_block_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null):null)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),((block_start_QMARK_)?(function (){var block__$1 = new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(cljs.core.first(paste_tx_data));
var map__61638 = block__$1;
var map__61638__$1 = (((((!((map__61638 == null))))?(((((map__61638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61638):map__61638);
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var n__$1 = cljs.core.count(string);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid__$1,n__$1], null);
})():null)], null)], null);
}));
athens.events.left_sidebar_drop_above = (function athens$events$left_sidebar_drop_above(s_order,t_order){
var source_eid = (function (){var G__61640 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__61641 = cljs.core.deref(athens.db.dsdb);
var G__61642 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__61640,G__61641,G__61642) : datascript.core.q.call(null,G__61640,G__61641,G__61642));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),(((s_order < t_order))?(t_order - (1)):t_order)], null);
var inc_or_dec = (((s_order < t_order))?cljs.core.dec:cljs.core.inc);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__61643 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__61644 = cljs.core.deref(athens.db.dsdb);
var G__61645 = s_order;
var G__61646 = (((s_order < t_order))?t_order:(t_order - (1)));
var G__61647 = athens.events.between;
var G__61648 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__61643,G__61644,G__61645,G__61646,G__61647,G__61648) : datascript.core.q.call(null,G__61643,G__61644,G__61645,G__61646,G__61647,G__61648));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-above","left-sidebar/drop-above",75584917),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__61649){
var vec__61650 = p__61649;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61650,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61650,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61650,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61653){var e = e61653;
throw e;
}}):(function (_,p__61654){
var vec__61655 = p__61654;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61655,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61655,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61655,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
})));
athens.events.left_sidebar_drop_below = (function athens$events$left_sidebar_drop_below(s_order,t_order){
var source_eid = (function (){var G__61658 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__61659 = cljs.core.deref(athens.db.dsdb);
var G__61660 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__61658,G__61659,G__61660) : datascript.core.q.call(null,G__61658,G__61659,G__61660));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),t_order], null);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__61661 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__61662 = cljs.core.deref(athens.db.dsdb);
var G__61663 = s_order;
var G__61664 = (t_order + (1));
var G__61665 = athens.events.between;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61661,G__61662,G__61663,G__61664,G__61665) : datascript.core.q.call(null,G__61661,G__61662,G__61663,G__61664,G__61665));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-below","left-sidebar/drop-below",1291292866),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__61666){
var vec__61667 = p__61666;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61667,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61667,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61667,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__57808__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__57809__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__57809__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57809__auto__;
}catch (e61670){var e = e61670;
throw e;
}}):(function (_,p__61671){
var vec__61672 = p__61671;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61672,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61672,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61672,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
})));
/**
 * Ignores case. If title is `test`:
 *   test 1     -> [[test 1]]
 *   TEST 10    -> [[test 10]]
 *   [[attest]] -> [[at[[test]]`
 */
athens.events.link_unlinked_reference = (function athens$events$link_unlinked_reference(string,title){
var ignore_case_title = cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));
var new_str = clojure.string.replace(string,ignore_case_title,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''));
return new_str;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),(function (_,p__61675){
var vec__61676 = p__61675;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61676,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61676,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61676,(2),null);
var map__61679 = block;
var map__61679__$1 = (((((!((map__61679 == null))))?(((((map__61679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61679):map__61679);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61679__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61679__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = athens.events.link_unlinked_reference(string,title);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unlinked-references","link-all","unlinked-references/link-all",1891274179),(function (_,p__61681){
var vec__61682 = p__61681;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61682,(0),null);
var unlinked_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61682,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61682,(2),null);
var new_str_tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61685){
var map__61686 = p__61685;
var map__61686__$1 = (((((!((map__61686 == null))))?(((((map__61686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61686):map__61686);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = athens.events.link_unlinked_reference(string,title);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unlinked_refs,unlinked_refs], 0)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_str_tx_data], null)], null);
}));

//# sourceMappingURL=athens.events.js.map
