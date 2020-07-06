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
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_42783){
var state_val_42784 = (state_42783[(1)]);
if((state_val_42784 === (7))){
var state_42783__$1 = state_42783;
var statearr_42785_42813 = state_42783__$1;
(statearr_42785_42813[(2)] = false);

(statearr_42785_42813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (1))){
var inst_42746 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42747 = [false];
var inst_42748 = cljs.core.PersistentHashMap.fromArrays(inst_42746,inst_42747);
var inst_42749 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42748], 0));
var state_42783__$1 = state_42783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42783__$1,(2),inst_42749);
} else {
if((state_val_42784 === (4))){
var state_42783__$1 = state_42783;
var statearr_42786_42814 = state_42783__$1;
(statearr_42786_42814[(2)] = false);

(statearr_42786_42814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (13))){
var inst_42779 = alert("Failed to retrieve data from GitHub");
var state_42783__$1 = state_42783;
var statearr_42787_42815 = state_42783__$1;
(statearr_42787_42815[(2)] = inst_42779);

(statearr_42787_42815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (6))){
var state_42783__$1 = state_42783;
var statearr_42788_42816 = state_42783__$1;
(statearr_42788_42816[(2)] = true);

(statearr_42788_42816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (3))){
var inst_42751 = (state_42783[(7)]);
var inst_42756 = inst_42751.cljs$lang$protocol_mask$partition0$;
var inst_42757 = (inst_42756 & (64));
var inst_42758 = inst_42751.cljs$core$ISeq$;
var inst_42759 = (cljs.core.PROTOCOL_SENTINEL === inst_42758);
var inst_42760 = ((inst_42757) || (inst_42759));
var state_42783__$1 = state_42783;
if(cljs.core.truth_(inst_42760)){
var statearr_42789_42817 = state_42783__$1;
(statearr_42789_42817[(1)] = (6));

} else {
var statearr_42790_42818 = state_42783__$1;
(statearr_42790_42818[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (12))){
var inst_42774 = (state_42783[(8)]);
var inst_42776 = athens.db.str_to_db_tx(inst_42774);
var inst_42777 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42776) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42776));
var state_42783__$1 = state_42783;
var statearr_42791_42819 = state_42783__$1;
(statearr_42791_42819[(2)] = inst_42777);

(statearr_42791_42819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (2))){
var inst_42751 = (state_42783[(7)]);
var inst_42751__$1 = (state_42783[(2)]);
var inst_42753 = (inst_42751__$1 == null);
var inst_42754 = cljs.core.not(inst_42753);
var state_42783__$1 = (function (){var statearr_42792 = state_42783;
(statearr_42792[(7)] = inst_42751__$1);

return statearr_42792;
})();
if(inst_42754){
var statearr_42793_42820 = state_42783__$1;
(statearr_42793_42820[(1)] = (3));

} else {
var statearr_42794_42821 = state_42783__$1;
(statearr_42794_42821[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (11))){
var inst_42772 = (state_42783[(2)]);
var inst_42773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42772,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42772,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42783__$1 = (function (){var statearr_42795 = state_42783;
(statearr_42795[(8)] = inst_42774);

return statearr_42795;
})();
if(cljs.core.truth_(inst_42773)){
var statearr_42796_42822 = state_42783__$1;
(statearr_42796_42822[(1)] = (12));

} else {
var statearr_42797_42823 = state_42783__$1;
(statearr_42797_42823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (9))){
var inst_42751 = (state_42783[(7)]);
var inst_42769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42751);
var state_42783__$1 = state_42783;
var statearr_42798_42824 = state_42783__$1;
(statearr_42798_42824[(2)] = inst_42769);

(statearr_42798_42824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (5))){
var inst_42767 = (state_42783[(2)]);
var state_42783__$1 = state_42783;
if(cljs.core.truth_(inst_42767)){
var statearr_42799_42825 = state_42783__$1;
(statearr_42799_42825[(1)] = (9));

} else {
var statearr_42800_42826 = state_42783__$1;
(statearr_42800_42826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (14))){
var inst_42781 = (state_42783[(2)]);
var state_42783__$1 = state_42783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42783__$1,inst_42781);
} else {
if((state_val_42784 === (10))){
var inst_42751 = (state_42783[(7)]);
var state_42783__$1 = state_42783;
var statearr_42801_42827 = state_42783__$1;
(statearr_42801_42827[(2)] = inst_42751);

(statearr_42801_42827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42784 === (8))){
var inst_42764 = (state_42783[(2)]);
var state_42783__$1 = state_42783;
var statearr_42802_42828 = state_42783__$1;
(statearr_42802_42828[(2)] = inst_42764);

(statearr_42802_42828[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0 = (function (){
var statearr_42803 = [null,null,null,null,null,null,null,null,null];
(statearr_42803[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__);

(statearr_42803[(1)] = (1));

return statearr_42803;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1 = (function (state_42783){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_42783);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e42804){if((e42804 instanceof Object)){
var ex__36935__auto__ = e42804;
var statearr_42805_42829 = state_42783;
(statearr_42805_42829[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42830 = state_42783;
state_42783 = G__42830;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__ = function(state_42783){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1.call(this,state_42783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_42806 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_42806[(6)] = c__36999__auto__);

return statearr_42806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42807 = (function (meta42808){
this.meta42808 = meta42808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42809,meta42808__$1){
var self__ = this;
var _42809__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42807(meta42808__$1));
}));

(athens.devcards.db.t_athens$devcards$db42807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42809){
var self__ = this;
var _42809__$1 = this;
return self__.meta42808;
}));

(athens.devcards.db.t_athens$devcards$db42807.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42807.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42808","meta42808",-1226438216,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42807.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42807.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42807");

(athens.devcards.db.t_athens$devcards$db42807.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42807");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42807.
 */
athens.devcards.db.__GT_t_athens$devcards$db42807 = (function athens$devcards$db$__GT_t_athens$devcards$db42807(meta42808){
return (new athens.devcards.db.t_athens$devcards$db42807(meta42808));
});

}

return (new athens.devcards.db.t_athens$devcards$db42807(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42810 = (function (meta42811){
this.meta42811 = meta42811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42812,meta42811__$1){
var self__ = this;
var _42812__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42810(meta42811__$1));
}));

(athens.devcards.db.t_athens$devcards$db42810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42812){
var self__ = this;
var _42812__$1 = this;
return self__.meta42811;
}));

(athens.devcards.db.t_athens$devcards$db42810.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42810.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42811","meta42811",-1894749182,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42810.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42810.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42810");

(athens.devcards.db.t_athens$devcards$db42810.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42810");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42810.
 */
athens.devcards.db.__GT_t_athens$devcards$db42810 = (function athens$devcards$db$__GT_t_athens$devcards$db42810(meta42811){
return (new athens.devcards.db.t_athens$devcards$db42810(meta42811));
});

}

return (new athens.devcards.db.t_athens$devcards$db42810(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
