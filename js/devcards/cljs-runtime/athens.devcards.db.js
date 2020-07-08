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
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_42741){
var state_val_42742 = (state_42741[(1)]);
if((state_val_42742 === (7))){
var state_42741__$1 = state_42741;
var statearr_42743_42774 = state_42741__$1;
(statearr_42743_42774[(2)] = false);

(statearr_42743_42774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (1))){
var inst_42703 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42704 = [false];
var inst_42705 = cljs.core.PersistentHashMap.fromArrays(inst_42703,inst_42704);
var inst_42706 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42705], 0));
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42741__$1,(2),inst_42706);
} else {
if((state_val_42742 === (4))){
var state_42741__$1 = state_42741;
var statearr_42744_42775 = state_42741__$1;
(statearr_42744_42775[(2)] = false);

(statearr_42744_42775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (13))){
var inst_42736 = alert("Failed to retrieve data from GitHub");
var state_42741__$1 = state_42741;
var statearr_42745_42776 = state_42741__$1;
(statearr_42745_42776[(2)] = inst_42736);

(statearr_42745_42776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (6))){
var state_42741__$1 = state_42741;
var statearr_42746_42777 = state_42741__$1;
(statearr_42746_42777[(2)] = true);

(statearr_42746_42777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (3))){
var inst_42708 = (state_42741[(7)]);
var inst_42713 = inst_42708.cljs$lang$protocol_mask$partition0$;
var inst_42714 = (inst_42713 & (64));
var inst_42715 = inst_42708.cljs$core$ISeq$;
var inst_42716 = (cljs.core.PROTOCOL_SENTINEL === inst_42715);
var inst_42717 = ((inst_42714) || (inst_42716));
var state_42741__$1 = state_42741;
if(cljs.core.truth_(inst_42717)){
var statearr_42747_42778 = state_42741__$1;
(statearr_42747_42778[(1)] = (6));

} else {
var statearr_42748_42779 = state_42741__$1;
(statearr_42748_42779[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (12))){
var inst_42731 = (state_42741[(8)]);
var inst_42733 = athens.db.str_to_db_tx(inst_42731);
var inst_42734 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42733) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42733));
var state_42741__$1 = state_42741;
var statearr_42749_42780 = state_42741__$1;
(statearr_42749_42780[(2)] = inst_42734);

(statearr_42749_42780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (2))){
var inst_42708 = (state_42741[(7)]);
var inst_42708__$1 = (state_42741[(2)]);
var inst_42710 = (inst_42708__$1 == null);
var inst_42711 = cljs.core.not(inst_42710);
var state_42741__$1 = (function (){var statearr_42750 = state_42741;
(statearr_42750[(7)] = inst_42708__$1);

return statearr_42750;
})();
if(inst_42711){
var statearr_42751_42781 = state_42741__$1;
(statearr_42751_42781[(1)] = (3));

} else {
var statearr_42752_42782 = state_42741__$1;
(statearr_42752_42782[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (11))){
var inst_42729 = (state_42741[(2)]);
var inst_42730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42729,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42729,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42741__$1 = (function (){var statearr_42753 = state_42741;
(statearr_42753[(8)] = inst_42731);

return statearr_42753;
})();
if(cljs.core.truth_(inst_42730)){
var statearr_42754_42783 = state_42741__$1;
(statearr_42754_42783[(1)] = (12));

} else {
var statearr_42755_42784 = state_42741__$1;
(statearr_42755_42784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (9))){
var inst_42708 = (state_42741[(7)]);
var inst_42726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42708);
var state_42741__$1 = state_42741;
var statearr_42756_42785 = state_42741__$1;
(statearr_42756_42785[(2)] = inst_42726);

(statearr_42756_42785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (5))){
var inst_42724 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
if(cljs.core.truth_(inst_42724)){
var statearr_42757_42786 = state_42741__$1;
(statearr_42757_42786[(1)] = (9));

} else {
var statearr_42758_42787 = state_42741__$1;
(statearr_42758_42787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (14))){
var inst_42738 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42741__$1,inst_42738);
} else {
if((state_val_42742 === (10))){
var inst_42708 = (state_42741[(7)]);
var state_42741__$1 = state_42741;
var statearr_42760_42788 = state_42741__$1;
(statearr_42760_42788[(2)] = inst_42708);

(statearr_42760_42788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (8))){
var inst_42721 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42761_42789 = state_42741__$1;
(statearr_42761_42789[(2)] = inst_42721);

(statearr_42761_42789[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____0 = (function (){
var statearr_42762 = [null,null,null,null,null,null,null,null,null];
(statearr_42762[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__);

(statearr_42762[(1)] = (1));

return statearr_42762;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____1 = (function (state_42741){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_42741);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e42763){if((e42763 instanceof Object)){
var ex__36951__auto__ = e42763;
var statearr_42764_42790 = state_42741;
(statearr_42764_42790[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42791 = state_42741;
state_42741 = G__42791;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__ = function(state_42741){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____1.call(this,state_42741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_42765 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_42765[(6)] = c__37015__auto__);

return statearr_42765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42766 = (function (meta42767){
this.meta42767 = meta42767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42768,meta42767__$1){
var self__ = this;
var _42768__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42766(meta42767__$1));
}));

(athens.devcards.db.t_athens$devcards$db42766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42768){
var self__ = this;
var _42768__$1 = this;
return self__.meta42767;
}));

(athens.devcards.db.t_athens$devcards$db42766.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42766.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42767","meta42767",-943765708,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42766.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42766.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42766");

(athens.devcards.db.t_athens$devcards$db42766.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42766");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42766.
 */
athens.devcards.db.__GT_t_athens$devcards$db42766 = (function athens$devcards$db$__GT_t_athens$devcards$db42766(meta42767){
return (new athens.devcards.db.t_athens$devcards$db42766(meta42767));
});

}

return (new athens.devcards.db.t_athens$devcards$db42766(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42770 = (function (meta42771){
this.meta42771 = meta42771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42772,meta42771__$1){
var self__ = this;
var _42772__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42770(meta42771__$1));
}));

(athens.devcards.db.t_athens$devcards$db42770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42772){
var self__ = this;
var _42772__$1 = this;
return self__.meta42771;
}));

(athens.devcards.db.t_athens$devcards$db42770.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42770.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42771","meta42771",289677524,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42770.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42770.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42770");

(athens.devcards.db.t_athens$devcards$db42770.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42770");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42770.
 */
athens.devcards.db.__GT_t_athens$devcards$db42770 = (function athens$devcards$db$__GT_t_athens$devcards$db42770(meta42771){
return (new athens.devcards.db.t_athens$devcards$db42770(meta42771));
});

}

return (new athens.devcards.db.t_athens$devcards$db42770(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
