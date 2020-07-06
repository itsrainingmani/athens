goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_65685){
var state_val_65686 = (state_65685[(1)]);
if((state_val_65686 === (7))){
var state_65685__$1 = state_65685;
var statearr_65687_65722 = state_65685__$1;
(statearr_65687_65722[(2)] = false);

(statearr_65687_65722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (1))){
var inst_65648 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_65649 = [false];
var inst_65650 = cljs.core.PersistentHashMap.fromArrays(inst_65648,inst_65649);
var inst_65651 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65650], 0));
var state_65685__$1 = state_65685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65685__$1,(2),inst_65651);
} else {
if((state_val_65686 === (4))){
var state_65685__$1 = state_65685;
var statearr_65688_65723 = state_65685__$1;
(statearr_65688_65723[(2)] = false);

(statearr_65688_65723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (13))){
var inst_65681 = alert("Failed to retrieve data from GitHub");
var state_65685__$1 = state_65685;
var statearr_65689_65725 = state_65685__$1;
(statearr_65689_65725[(2)] = inst_65681);

(statearr_65689_65725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (6))){
var state_65685__$1 = state_65685;
var statearr_65690_65727 = state_65685__$1;
(statearr_65690_65727[(2)] = true);

(statearr_65690_65727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (3))){
var inst_65653 = (state_65685[(7)]);
var inst_65658 = inst_65653.cljs$lang$protocol_mask$partition0$;
var inst_65659 = (inst_65658 & (64));
var inst_65660 = inst_65653.cljs$core$ISeq$;
var inst_65661 = (cljs.core.PROTOCOL_SENTINEL === inst_65660);
var inst_65662 = ((inst_65659) || (inst_65661));
var state_65685__$1 = state_65685;
if(cljs.core.truth_(inst_65662)){
var statearr_65691_65728 = state_65685__$1;
(statearr_65691_65728[(1)] = (6));

} else {
var statearr_65692_65729 = state_65685__$1;
(statearr_65692_65729[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (12))){
var inst_65676 = (state_65685[(8)]);
var inst_65678 = athens.db.str_to_db_tx(inst_65676);
var inst_65679 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_65678) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_65678));
var state_65685__$1 = state_65685;
var statearr_65693_65730 = state_65685__$1;
(statearr_65693_65730[(2)] = inst_65679);

(statearr_65693_65730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (2))){
var inst_65653 = (state_65685[(7)]);
var inst_65653__$1 = (state_65685[(2)]);
var inst_65655 = (inst_65653__$1 == null);
var inst_65656 = cljs.core.not(inst_65655);
var state_65685__$1 = (function (){var statearr_65694 = state_65685;
(statearr_65694[(7)] = inst_65653__$1);

return statearr_65694;
})();
if(inst_65656){
var statearr_65695_65731 = state_65685__$1;
(statearr_65695_65731[(1)] = (3));

} else {
var statearr_65696_65732 = state_65685__$1;
(statearr_65696_65732[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (11))){
var inst_65674 = (state_65685[(2)]);
var inst_65675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65674,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_65676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65674,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_65685__$1 = (function (){var statearr_65697 = state_65685;
(statearr_65697[(8)] = inst_65676);

return statearr_65697;
})();
if(cljs.core.truth_(inst_65675)){
var statearr_65698_65733 = state_65685__$1;
(statearr_65698_65733[(1)] = (12));

} else {
var statearr_65699_65734 = state_65685__$1;
(statearr_65699_65734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (9))){
var inst_65653 = (state_65685[(7)]);
var inst_65671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65653);
var state_65685__$1 = state_65685;
var statearr_65700_65735 = state_65685__$1;
(statearr_65700_65735[(2)] = inst_65671);

(statearr_65700_65735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (5))){
var inst_65669 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
if(cljs.core.truth_(inst_65669)){
var statearr_65701_65736 = state_65685__$1;
(statearr_65701_65736[(1)] = (9));

} else {
var statearr_65702_65737 = state_65685__$1;
(statearr_65702_65737[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (14))){
var inst_65683 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65685__$1,inst_65683);
} else {
if((state_val_65686 === (10))){
var inst_65653 = (state_65685[(7)]);
var state_65685__$1 = state_65685;
var statearr_65703_65739 = state_65685__$1;
(statearr_65703_65739[(2)] = inst_65653);

(statearr_65703_65739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (8))){
var inst_65666 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
var statearr_65704_65741 = state_65685__$1;
(statearr_65704_65741[(2)] = inst_65666);

(statearr_65704_65741[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____0 = (function (){
var statearr_65705 = [null,null,null,null,null,null,null,null,null];
(statearr_65705[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__);

(statearr_65705[(1)] = (1));

return statearr_65705;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____1 = (function (state_65685){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_65685);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e65706){if((e65706 instanceof Object)){
var ex__46002__auto__ = e65706;
var statearr_65707_65745 = state_65685;
(statearr_65707_65745[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65746 = state_65685;
state_65685 = G__65746;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__ = function(state_65685){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____1.call(this,state_65685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_65708 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_65708[(6)] = c__46094__auto__);

return statearr_65708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db65712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db65712 = (function (meta65713){
this.meta65713 = meta65713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db65712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65714,meta65713__$1){
var self__ = this;
var _65714__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db65712(meta65713__$1));
}));

(athens.devcards.db.t_athens$devcards$db65712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65714){
var self__ = this;
var _65714__$1 = this;
return self__.meta65713;
}));

(athens.devcards.db.t_athens$devcards$db65712.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db65712.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__64674__auto__,devcard_opts__64675__auto__){
var self__ = this;
var this__64674__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__64675__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__64697__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__64697__auto__)){
return (function (data_atom__64698__auto__,owner__64699__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__64697__auto__,data_atom__64698__auto__,owner__64699__auto__], null));
});
} else {
return reagent.core.as_element(v__64697__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__64675__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db65712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65713","meta65713",1705491840,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db65712.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db65712.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db65712");

(athens.devcards.db.t_athens$devcards$db65712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db65712");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db65712.
 */
athens.devcards.db.__GT_t_athens$devcards$db65712 = (function athens$devcards$db$__GT_t_athens$devcards$db65712(meta65713){
return (new athens.devcards.db.t_athens$devcards$db65712(meta65713));
});

}

return (new athens.devcards.db.t_athens$devcards$db65712(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db65715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db65715 = (function (meta65716){
this.meta65716 = meta65716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db65715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65717,meta65716__$1){
var self__ = this;
var _65717__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db65715(meta65716__$1));
}));

(athens.devcards.db.t_athens$devcards$db65715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65717){
var self__ = this;
var _65717__$1 = this;
return self__.meta65716;
}));

(athens.devcards.db.t_athens$devcards$db65715.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db65715.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__64674__auto__,devcard_opts__64675__auto__){
var self__ = this;
var this__64674__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__64675__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__64697__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__64697__auto__)){
return (function (data_atom__64698__auto__,owner__64699__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__64697__auto__,data_atom__64698__auto__,owner__64699__auto__], null));
});
} else {
return reagent.core.as_element(v__64697__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__64675__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db65715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65716","meta65716",-1621090845,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db65715.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db65715.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db65715");

(athens.devcards.db.t_athens$devcards$db65715.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db65715");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db65715.
 */
athens.devcards.db.__GT_t_athens$devcards$db65715 = (function athens$devcards$db$__GT_t_athens$devcards$db65715(meta65716){
return (new athens.devcards.db.t_athens$devcards$db65715(meta65716));
});

}

return (new athens.devcards.db.t_athens$devcards$db65715(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
