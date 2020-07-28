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
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_49173){
var state_val_49174 = (state_49173[(1)]);
if((state_val_49174 === (7))){
var state_49173__$1 = state_49173;
var statearr_49175_49208 = state_49173__$1;
(statearr_49175_49208[(2)] = false);

(statearr_49175_49208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (1))){
var inst_49135 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49136 = [false];
var inst_49137 = cljs.core.PersistentHashMap.fromArrays(inst_49135,inst_49136);
var inst_49138 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49137], 0));
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49173__$1,(2),inst_49138);
} else {
if((state_val_49174 === (4))){
var state_49173__$1 = state_49173;
var statearr_49176_49210 = state_49173__$1;
(statearr_49176_49210[(2)] = false);

(statearr_49176_49210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (13))){
var inst_49169 = alert("Failed to retrieve data from GitHub");
var state_49173__$1 = state_49173;
var statearr_49177_49211 = state_49173__$1;
(statearr_49177_49211[(2)] = inst_49169);

(statearr_49177_49211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (6))){
var state_49173__$1 = state_49173;
var statearr_49178_49212 = state_49173__$1;
(statearr_49178_49212[(2)] = true);

(statearr_49178_49212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (3))){
var inst_49140 = (state_49173[(7)]);
var inst_49146 = inst_49140.cljs$lang$protocol_mask$partition0$;
var inst_49147 = (inst_49146 & (64));
var inst_49148 = inst_49140.cljs$core$ISeq$;
var inst_49149 = (cljs.core.PROTOCOL_SENTINEL === inst_49148);
var inst_49150 = ((inst_49147) || (inst_49149));
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49150)){
var statearr_49179_49213 = state_49173__$1;
(statearr_49179_49213[(1)] = (6));

} else {
var statearr_49180_49214 = state_49173__$1;
(statearr_49180_49214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (12))){
var inst_49164 = (state_49173[(8)]);
var inst_49166 = athens.db.str_to_db_tx(inst_49164);
var inst_49167 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_49166) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_49166));
var state_49173__$1 = state_49173;
var statearr_49181_49215 = state_49173__$1;
(statearr_49181_49215[(2)] = inst_49167);

(statearr_49181_49215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (2))){
var inst_49140 = (state_49173[(7)]);
var inst_49140__$1 = (state_49173[(2)]);
var inst_49142 = (inst_49140__$1 == null);
var inst_49143 = cljs.core.not(inst_49142);
var state_49173__$1 = (function (){var statearr_49183 = state_49173;
(statearr_49183[(7)] = inst_49140__$1);

return statearr_49183;
})();
if(inst_49143){
var statearr_49184_49216 = state_49173__$1;
(statearr_49184_49216[(1)] = (3));

} else {
var statearr_49185_49217 = state_49173__$1;
(statearr_49185_49217[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (11))){
var inst_49162 = (state_49173[(2)]);
var inst_49163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49162,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49162,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49173__$1 = (function (){var statearr_49186 = state_49173;
(statearr_49186[(8)] = inst_49164);

return statearr_49186;
})();
if(cljs.core.truth_(inst_49163)){
var statearr_49187_49218 = state_49173__$1;
(statearr_49187_49218[(1)] = (12));

} else {
var statearr_49188_49219 = state_49173__$1;
(statearr_49188_49219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (9))){
var inst_49140 = (state_49173[(7)]);
var inst_49159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49140);
var state_49173__$1 = state_49173;
var statearr_49189_49220 = state_49173__$1;
(statearr_49189_49220[(2)] = inst_49159);

(statearr_49189_49220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (5))){
var inst_49157 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49157)){
var statearr_49190_49221 = state_49173__$1;
(statearr_49190_49221[(1)] = (9));

} else {
var statearr_49191_49222 = state_49173__$1;
(statearr_49191_49222[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (14))){
var inst_49171 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49173__$1,inst_49171);
} else {
if((state_val_49174 === (10))){
var inst_49140 = (state_49173[(7)]);
var state_49173__$1 = state_49173;
var statearr_49192_49223 = state_49173__$1;
(statearr_49192_49223[(2)] = inst_49140);

(statearr_49192_49223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (8))){
var inst_49154 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49193_49224 = state_49173__$1;
(statearr_49193_49224[(2)] = inst_49154);

(statearr_49193_49224[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____0 = (function (){
var statearr_49194 = [null,null,null,null,null,null,null,null,null];
(statearr_49194[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__);

(statearr_49194[(1)] = (1));

return statearr_49194;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____1 = (function (state_49173){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_49173);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e49195){if((e49195 instanceof Object)){
var ex__43388__auto__ = e49195;
var statearr_49196_49225 = state_49173;
(statearr_49196_49225[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49226 = state_49173;
state_49173 = G__49226;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__ = function(state_49173){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____1.call(this,state_49173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_49197 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_49197[(6)] = c__43452__auto__);

return statearr_49197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49201 = (function (meta49202){
this.meta49202 = meta49202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49203,meta49202__$1){
var self__ = this;
var _49203__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49201(meta49202__$1));
}));

(athens.devcards.db.t_athens$devcards$db49201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49203){
var self__ = this;
var _49203__$1 = this;
return self__.meta49202;
}));

(athens.devcards.db.t_athens$devcards$db49201.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49201.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48665__auto__,devcard_opts__48666__auto__){
var self__ = this;
var this__48665__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48666__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48684__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__48684__auto__)){
return (function (data_atom__48685__auto__,owner__48686__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48684__auto__,data_atom__48685__auto__,owner__48686__auto__], null));
});
} else {
return reagent.core.as_element(v__48684__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48666__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49202","meta49202",1266601608,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49201.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49201.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49201");

(athens.devcards.db.t_athens$devcards$db49201.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49201");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49201.
 */
athens.devcards.db.__GT_t_athens$devcards$db49201 = (function athens$devcards$db$__GT_t_athens$devcards$db49201(meta49202){
return (new athens.devcards.db.t_athens$devcards$db49201(meta49202));
});

}

return (new athens.devcards.db.t_athens$devcards$db49201(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49205 = (function (meta49206){
this.meta49206 = meta49206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49207,meta49206__$1){
var self__ = this;
var _49207__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49205(meta49206__$1));
}));

(athens.devcards.db.t_athens$devcards$db49205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49207){
var self__ = this;
var _49207__$1 = this;
return self__.meta49206;
}));

(athens.devcards.db.t_athens$devcards$db49205.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49205.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48665__auto__,devcard_opts__48666__auto__){
var self__ = this;
var this__48665__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48666__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48684__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__48684__auto__)){
return (function (data_atom__48685__auto__,owner__48686__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48684__auto__,data_atom__48685__auto__,owner__48686__auto__], null));
});
} else {
return reagent.core.as_element(v__48684__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48666__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49206","meta49206",-399439743,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49205");

(athens.devcards.db.t_athens$devcards$db49205.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49205");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49205.
 */
athens.devcards.db.__GT_t_athens$devcards$db49205 = (function athens$devcards$db$__GT_t_athens$devcards$db49205(meta49206){
return (new athens.devcards.db.t_athens$devcards$db49205(meta49206));
});

}

return (new athens.devcards.db.t_athens$devcards$db49205(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
