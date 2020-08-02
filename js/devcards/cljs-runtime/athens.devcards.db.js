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
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_49183){
var state_val_49184 = (state_49183[(1)]);
if((state_val_49184 === (7))){
var state_49183__$1 = state_49183;
var statearr_49185_49219 = state_49183__$1;
(statearr_49185_49219[(2)] = false);

(statearr_49185_49219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (1))){
var inst_49146 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49147 = [false];
var inst_49148 = cljs.core.PersistentHashMap.fromArrays(inst_49146,inst_49147);
var inst_49149 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49148], 0));
var state_49183__$1 = state_49183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49183__$1,(2),inst_49149);
} else {
if((state_val_49184 === (4))){
var state_49183__$1 = state_49183;
var statearr_49186_49220 = state_49183__$1;
(statearr_49186_49220[(2)] = false);

(statearr_49186_49220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (13))){
var inst_49179 = alert("Failed to retrieve data from GitHub");
var state_49183__$1 = state_49183;
var statearr_49187_49221 = state_49183__$1;
(statearr_49187_49221[(2)] = inst_49179);

(statearr_49187_49221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (6))){
var state_49183__$1 = state_49183;
var statearr_49188_49222 = state_49183__$1;
(statearr_49188_49222[(2)] = true);

(statearr_49188_49222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (3))){
var inst_49151 = (state_49183[(7)]);
var inst_49156 = inst_49151.cljs$lang$protocol_mask$partition0$;
var inst_49157 = (inst_49156 & (64));
var inst_49158 = inst_49151.cljs$core$ISeq$;
var inst_49159 = (cljs.core.PROTOCOL_SENTINEL === inst_49158);
var inst_49160 = ((inst_49157) || (inst_49159));
var state_49183__$1 = state_49183;
if(cljs.core.truth_(inst_49160)){
var statearr_49190_49223 = state_49183__$1;
(statearr_49190_49223[(1)] = (6));

} else {
var statearr_49191_49224 = state_49183__$1;
(statearr_49191_49224[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (12))){
var inst_49174 = (state_49183[(8)]);
var inst_49176 = athens.db.str_to_db_tx(inst_49174);
var inst_49177 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_49176) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_49176));
var state_49183__$1 = state_49183;
var statearr_49192_49225 = state_49183__$1;
(statearr_49192_49225[(2)] = inst_49177);

(statearr_49192_49225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (2))){
var inst_49151 = (state_49183[(7)]);
var inst_49151__$1 = (state_49183[(2)]);
var inst_49153 = (inst_49151__$1 == null);
var inst_49154 = cljs.core.not(inst_49153);
var state_49183__$1 = (function (){var statearr_49193 = state_49183;
(statearr_49193[(7)] = inst_49151__$1);

return statearr_49193;
})();
if(inst_49154){
var statearr_49194_49226 = state_49183__$1;
(statearr_49194_49226[(1)] = (3));

} else {
var statearr_49195_49227 = state_49183__$1;
(statearr_49195_49227[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (11))){
var inst_49172 = (state_49183[(2)]);
var inst_49173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49172,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49172,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49183__$1 = (function (){var statearr_49196 = state_49183;
(statearr_49196[(8)] = inst_49174);

return statearr_49196;
})();
if(cljs.core.truth_(inst_49173)){
var statearr_49197_49228 = state_49183__$1;
(statearr_49197_49228[(1)] = (12));

} else {
var statearr_49198_49229 = state_49183__$1;
(statearr_49198_49229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (9))){
var inst_49151 = (state_49183[(7)]);
var inst_49169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49151);
var state_49183__$1 = state_49183;
var statearr_49199_49230 = state_49183__$1;
(statearr_49199_49230[(2)] = inst_49169);

(statearr_49199_49230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (5))){
var inst_49167 = (state_49183[(2)]);
var state_49183__$1 = state_49183;
if(cljs.core.truth_(inst_49167)){
var statearr_49200_49231 = state_49183__$1;
(statearr_49200_49231[(1)] = (9));

} else {
var statearr_49201_49232 = state_49183__$1;
(statearr_49201_49232[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (14))){
var inst_49181 = (state_49183[(2)]);
var state_49183__$1 = state_49183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49183__$1,inst_49181);
} else {
if((state_val_49184 === (10))){
var inst_49151 = (state_49183[(7)]);
var state_49183__$1 = state_49183;
var statearr_49202_49233 = state_49183__$1;
(statearr_49202_49233[(2)] = inst_49151);

(statearr_49202_49233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49184 === (8))){
var inst_49164 = (state_49183[(2)]);
var state_49183__$1 = state_49183;
var statearr_49203_49234 = state_49183__$1;
(statearr_49203_49234[(2)] = inst_49164);

(statearr_49203_49234[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____0 = (function (){
var statearr_49204 = [null,null,null,null,null,null,null,null,null];
(statearr_49204[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__);

(statearr_49204[(1)] = (1));

return statearr_49204;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____1 = (function (state_49183){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_49183);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e49206){if((e49206 instanceof Object)){
var ex__43398__auto__ = e49206;
var statearr_49208_49236 = state_49183;
(statearr_49208_49236[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49237 = state_49183;
state_49183 = G__49237;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__ = function(state_49183){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____1.call(this,state_49183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_49210 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_49210[(6)] = c__43461__auto__);

return statearr_49210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49212 = (function (meta49213){
this.meta49213 = meta49213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49214,meta49213__$1){
var self__ = this;
var _49214__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49212(meta49213__$1));
}));

(athens.devcards.db.t_athens$devcards$db49212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49214){
var self__ = this;
var _49214__$1 = this;
return self__.meta49213;
}));

(athens.devcards.db.t_athens$devcards$db49212.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49212.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49213","meta49213",1539722775,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49212.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49212.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49212");

(athens.devcards.db.t_athens$devcards$db49212.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49212");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49212.
 */
athens.devcards.db.__GT_t_athens$devcards$db49212 = (function athens$devcards$db$__GT_t_athens$devcards$db49212(meta49213){
return (new athens.devcards.db.t_athens$devcards$db49212(meta49213));
});

}

return (new athens.devcards.db.t_athens$devcards$db49212(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49215 = (function (meta49216){
this.meta49216 = meta49216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49217,meta49216__$1){
var self__ = this;
var _49217__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49215(meta49216__$1));
}));

(athens.devcards.db.t_athens$devcards$db49215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49217){
var self__ = this;
var _49217__$1 = this;
return self__.meta49216;
}));

(athens.devcards.db.t_athens$devcards$db49215.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49215.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49216","meta49216",1810982025,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49215.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49215.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49215");

(athens.devcards.db.t_athens$devcards$db49215.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49215");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49215.
 */
athens.devcards.db.__GT_t_athens$devcards$db49215 = (function athens$devcards$db$__GT_t_athens$devcards$db49215(meta49216){
return (new athens.devcards.db.t_athens$devcards$db49215(meta49216));
});

}

return (new athens.devcards.db.t_athens$devcards$db49215(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
