goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_42991){
var state_val_42992 = (state_42991[(1)]);
if((state_val_42992 === (7))){
var state_42991__$1 = state_42991;
var statearr_42993_43026 = state_42991__$1;
(statearr_42993_43026[(2)] = false);

(statearr_42993_43026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (1))){
var inst_42954 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42955 = [false];
var inst_42956 = cljs.core.PersistentHashMap.fromArrays(inst_42954,inst_42955);
var inst_42957 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42956], 0));
var state_42991__$1 = state_42991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42991__$1,(2),inst_42957);
} else {
if((state_val_42992 === (4))){
var state_42991__$1 = state_42991;
var statearr_42994_43028 = state_42991__$1;
(statearr_42994_43028[(2)] = false);

(statearr_42994_43028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (13))){
var inst_42987 = alert("Failed to retrieve data from GitHub");
var state_42991__$1 = state_42991;
var statearr_42995_43029 = state_42991__$1;
(statearr_42995_43029[(2)] = inst_42987);

(statearr_42995_43029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (6))){
var state_42991__$1 = state_42991;
var statearr_42996_43030 = state_42991__$1;
(statearr_42996_43030[(2)] = true);

(statearr_42996_43030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (3))){
var inst_42959 = (state_42991[(7)]);
var inst_42964 = inst_42959.cljs$lang$protocol_mask$partition0$;
var inst_42965 = (inst_42964 & (64));
var inst_42966 = inst_42959.cljs$core$ISeq$;
var inst_42967 = (cljs.core.PROTOCOL_SENTINEL === inst_42966);
var inst_42968 = ((inst_42965) || (inst_42967));
var state_42991__$1 = state_42991;
if(cljs.core.truth_(inst_42968)){
var statearr_42997_43031 = state_42991__$1;
(statearr_42997_43031[(1)] = (6));

} else {
var statearr_42998_43032 = state_42991__$1;
(statearr_42998_43032[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (12))){
var inst_42982 = (state_42991[(8)]);
var inst_42984 = athens.db.str_to_db_tx(inst_42982);
var inst_42985 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42984) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42984));
var state_42991__$1 = state_42991;
var statearr_42999_43033 = state_42991__$1;
(statearr_42999_43033[(2)] = inst_42985);

(statearr_42999_43033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (2))){
var inst_42959 = (state_42991[(7)]);
var inst_42959__$1 = (state_42991[(2)]);
var inst_42961 = (inst_42959__$1 == null);
var inst_42962 = cljs.core.not(inst_42961);
var state_42991__$1 = (function (){var statearr_43000 = state_42991;
(statearr_43000[(7)] = inst_42959__$1);

return statearr_43000;
})();
if(inst_42962){
var statearr_43001_43034 = state_42991__$1;
(statearr_43001_43034[(1)] = (3));

} else {
var statearr_43002_43035 = state_42991__$1;
(statearr_43002_43035[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (11))){
var inst_42980 = (state_42991[(2)]);
var inst_42981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42980,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42980,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42991__$1 = (function (){var statearr_43004 = state_42991;
(statearr_43004[(8)] = inst_42982);

return statearr_43004;
})();
if(cljs.core.truth_(inst_42981)){
var statearr_43005_43036 = state_42991__$1;
(statearr_43005_43036[(1)] = (12));

} else {
var statearr_43006_43037 = state_42991__$1;
(statearr_43006_43037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (9))){
var inst_42959 = (state_42991[(7)]);
var inst_42977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42959);
var state_42991__$1 = state_42991;
var statearr_43007_43038 = state_42991__$1;
(statearr_43007_43038[(2)] = inst_42977);

(statearr_43007_43038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (5))){
var inst_42975 = (state_42991[(2)]);
var state_42991__$1 = state_42991;
if(cljs.core.truth_(inst_42975)){
var statearr_43008_43039 = state_42991__$1;
(statearr_43008_43039[(1)] = (9));

} else {
var statearr_43009_43040 = state_42991__$1;
(statearr_43009_43040[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (14))){
var inst_42989 = (state_42991[(2)]);
var state_42991__$1 = state_42991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42991__$1,inst_42989);
} else {
if((state_val_42992 === (10))){
var inst_42959 = (state_42991[(7)]);
var state_42991__$1 = state_42991;
var statearr_43010_43041 = state_42991__$1;
(statearr_43010_43041[(2)] = inst_42959);

(statearr_43010_43041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42992 === (8))){
var inst_42972 = (state_42991[(2)]);
var state_42991__$1 = state_42991;
var statearr_43011_43042 = state_42991__$1;
(statearr_43011_43042[(2)] = inst_42972);

(statearr_43011_43042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____0 = (function (){
var statearr_43012 = [null,null,null,null,null,null,null,null,null];
(statearr_43012[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__);

(statearr_43012[(1)] = (1));

return statearr_43012;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1 = (function (state_42991){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_42991);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e43013){if((e43013 instanceof Object)){
var ex__37206__auto__ = e43013;
var statearr_43014_43043 = state_42991;
(statearr_43014_43043[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43044 = state_42991;
state_42991 = G__43044;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__ = function(state_42991){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1.call(this,state_42991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_43015 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_43015[(6)] = c__37270__auto__);

return statearr_43015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
})], null),"Reset DB"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db43019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db43019 = (function (meta43020){
this.meta43020 = meta43020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db43019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43021,meta43020__$1){
var self__ = this;
var _43021__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db43019(meta43020__$1));
}));

(athens.devcards.db.t_athens$devcards$db43019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43021){
var self__ = this;
var _43021__$1 = this;
return self__.meta43020;
}));

(athens.devcards.db.t_athens$devcards$db43019.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db43019.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42483__auto__,devcard_opts__42484__auto__){
var self__ = this;
var this__42483__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42484__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42502__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42502__auto__)){
return (function (data_atom__42503__auto__,owner__42504__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42502__auto__,data_atom__42503__auto__,owner__42504__auto__], null));
});
} else {
return reagent.core.as_element(v__42502__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42484__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db43019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43020","meta43020",-1487179915,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db43019.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db43019.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db43019");

(athens.devcards.db.t_athens$devcards$db43019.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db43019");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db43019.
 */
athens.devcards.db.__GT_t_athens$devcards$db43019 = (function athens$devcards$db$__GT_t_athens$devcards$db43019(meta43020){
return (new athens.devcards.db.t_athens$devcards$db43019(meta43020));
});

}

return (new athens.devcards.db.t_athens$devcards$db43019(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db43023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db43023 = (function (meta43024){
this.meta43024 = meta43024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db43023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43025,meta43024__$1){
var self__ = this;
var _43025__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db43023(meta43024__$1));
}));

(athens.devcards.db.t_athens$devcards$db43023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43025){
var self__ = this;
var _43025__$1 = this;
return self__.meta43024;
}));

(athens.devcards.db.t_athens$devcards$db43023.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db43023.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42483__auto__,devcard_opts__42484__auto__){
var self__ = this;
var this__42483__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42484__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42502__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__42502__auto__)){
return (function (data_atom__42503__auto__,owner__42504__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42502__auto__,data_atom__42503__auto__,owner__42504__auto__], null));
});
} else {
return reagent.core.as_element(v__42502__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42484__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db43023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43024","meta43024",-30983050,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db43023.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db43023.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db43023");

(athens.devcards.db.t_athens$devcards$db43023.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db43023");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db43023.
 */
athens.devcards.db.__GT_t_athens$devcards$db43023 = (function athens$devcards$db$__GT_t_athens$devcards$db43023(meta43024){
return (new athens.devcards.db.t_athens$devcards$db43023(meta43024));
});

}

return (new athens.devcards.db.t_athens$devcards$db43023(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
