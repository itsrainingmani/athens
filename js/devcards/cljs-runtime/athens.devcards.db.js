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
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_42999){
var state_val_43000 = (state_42999[(1)]);
if((state_val_43000 === (7))){
var state_42999__$1 = state_42999;
var statearr_43001_43035 = state_42999__$1;
(statearr_43001_43035[(2)] = false);

(statearr_43001_43035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (1))){
var inst_42962 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42963 = [false];
var inst_42964 = cljs.core.PersistentHashMap.fromArrays(inst_42962,inst_42963);
var inst_42965 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42964], 0));
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42999__$1,(2),inst_42965);
} else {
if((state_val_43000 === (4))){
var state_42999__$1 = state_42999;
var statearr_43003_43036 = state_42999__$1;
(statearr_43003_43036[(2)] = false);

(statearr_43003_43036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (13))){
var inst_42995 = alert("Failed to retrieve data from GitHub");
var state_42999__$1 = state_42999;
var statearr_43004_43037 = state_42999__$1;
(statearr_43004_43037[(2)] = inst_42995);

(statearr_43004_43037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (6))){
var state_42999__$1 = state_42999;
var statearr_43005_43038 = state_42999__$1;
(statearr_43005_43038[(2)] = true);

(statearr_43005_43038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (3))){
var inst_42967 = (state_42999[(7)]);
var inst_42972 = inst_42967.cljs$lang$protocol_mask$partition0$;
var inst_42973 = (inst_42972 & (64));
var inst_42974 = inst_42967.cljs$core$ISeq$;
var inst_42975 = (cljs.core.PROTOCOL_SENTINEL === inst_42974);
var inst_42976 = ((inst_42973) || (inst_42975));
var state_42999__$1 = state_42999;
if(cljs.core.truth_(inst_42976)){
var statearr_43006_43040 = state_42999__$1;
(statearr_43006_43040[(1)] = (6));

} else {
var statearr_43007_43041 = state_42999__$1;
(statearr_43007_43041[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (12))){
var inst_42990 = (state_42999[(8)]);
var inst_42992 = athens.db.str_to_db_tx(inst_42990);
var inst_42993 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42992) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42992));
var state_42999__$1 = state_42999;
var statearr_43008_43042 = state_42999__$1;
(statearr_43008_43042[(2)] = inst_42993);

(statearr_43008_43042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (2))){
var inst_42967 = (state_42999[(7)]);
var inst_42967__$1 = (state_42999[(2)]);
var inst_42969 = (inst_42967__$1 == null);
var inst_42970 = cljs.core.not(inst_42969);
var state_42999__$1 = (function (){var statearr_43009 = state_42999;
(statearr_43009[(7)] = inst_42967__$1);

return statearr_43009;
})();
if(inst_42970){
var statearr_43010_43043 = state_42999__$1;
(statearr_43010_43043[(1)] = (3));

} else {
var statearr_43011_43044 = state_42999__$1;
(statearr_43011_43044[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (11))){
var inst_42988 = (state_42999[(2)]);
var inst_42989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42988,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42988,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42999__$1 = (function (){var statearr_43012 = state_42999;
(statearr_43012[(8)] = inst_42990);

return statearr_43012;
})();
if(cljs.core.truth_(inst_42989)){
var statearr_43013_43045 = state_42999__$1;
(statearr_43013_43045[(1)] = (12));

} else {
var statearr_43014_43046 = state_42999__$1;
(statearr_43014_43046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (9))){
var inst_42967 = (state_42999[(7)]);
var inst_42985 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42967);
var state_42999__$1 = state_42999;
var statearr_43018_43047 = state_42999__$1;
(statearr_43018_43047[(2)] = inst_42985);

(statearr_43018_43047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (5))){
var inst_42983 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
if(cljs.core.truth_(inst_42983)){
var statearr_43019_43048 = state_42999__$1;
(statearr_43019_43048[(1)] = (9));

} else {
var statearr_43020_43049 = state_42999__$1;
(statearr_43020_43049[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (14))){
var inst_42997 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42999__$1,inst_42997);
} else {
if((state_val_43000 === (10))){
var inst_42967 = (state_42999[(7)]);
var state_42999__$1 = state_42999;
var statearr_43021_43050 = state_42999__$1;
(statearr_43021_43050[(2)] = inst_42967);

(statearr_43021_43050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (8))){
var inst_42980 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43022_43051 = state_42999__$1;
(statearr_43022_43051[(2)] = inst_42980);

(statearr_43022_43051[(1)] = (5));


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
var statearr_43023 = [null,null,null,null,null,null,null,null,null];
(statearr_43023[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__);

(statearr_43023[(1)] = (1));

return statearr_43023;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1 = (function (state_42999){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_42999);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e43024){if((e43024 instanceof Object)){
var ex__37206__auto__ = e43024;
var statearr_43025_43052 = state_42999;
(statearr_43025_43052[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43054 = state_42999;
state_42999 = G__43054;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__ = function(state_42999){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1.call(this,state_42999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_43027 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_43027[(6)] = c__37270__auto__);

return statearr_43027;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db43028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db43028 = (function (meta43029){
this.meta43029 = meta43029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db43028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43030,meta43029__$1){
var self__ = this;
var _43030__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db43028(meta43029__$1));
}));

(athens.devcards.db.t_athens$devcards$db43028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43030){
var self__ = this;
var _43030__$1 = this;
return self__.meta43029;
}));

(athens.devcards.db.t_athens$devcards$db43028.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db43028.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db43028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43029","meta43029",-2063696013,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db43028.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db43028.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db43028");

(athens.devcards.db.t_athens$devcards$db43028.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db43028");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db43028.
 */
athens.devcards.db.__GT_t_athens$devcards$db43028 = (function athens$devcards$db$__GT_t_athens$devcards$db43028(meta43029){
return (new athens.devcards.db.t_athens$devcards$db43028(meta43029));
});

}

return (new athens.devcards.db.t_athens$devcards$db43028(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db43032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db43032 = (function (meta43033){
this.meta43033 = meta43033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db43032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43034,meta43033__$1){
var self__ = this;
var _43034__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db43032(meta43033__$1));
}));

(athens.devcards.db.t_athens$devcards$db43032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43034){
var self__ = this;
var _43034__$1 = this;
return self__.meta43033;
}));

(athens.devcards.db.t_athens$devcards$db43032.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db43032.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db43032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43033","meta43033",1372340573,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db43032.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db43032.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db43032");

(athens.devcards.db.t_athens$devcards$db43032.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db43032");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db43032.
 */
athens.devcards.db.__GT_t_athens$devcards$db43032 = (function athens$devcards$db$__GT_t_athens$devcards$db43032(meta43033){
return (new athens.devcards.db.t_athens$devcards$db43032(meta43033));
});

}

return (new athens.devcards.db.t_athens$devcards$db43032(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
