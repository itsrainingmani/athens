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
var c__44403__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44404__auto__ = (function (){var switch__44338__auto__ = (function (state_50127){
var state_val_50128 = (state_50127[(1)]);
if((state_val_50128 === (7))){
var state_50127__$1 = state_50127;
var statearr_50129_50162 = state_50127__$1;
(statearr_50129_50162[(2)] = false);

(statearr_50129_50162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (1))){
var inst_50090 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50091 = [false];
var inst_50092 = cljs.core.PersistentHashMap.fromArrays(inst_50090,inst_50091);
var inst_50093 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50092], 0));
var state_50127__$1 = state_50127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50127__$1,(2),inst_50093);
} else {
if((state_val_50128 === (4))){
var state_50127__$1 = state_50127;
var statearr_50130_50163 = state_50127__$1;
(statearr_50130_50163[(2)] = false);

(statearr_50130_50163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (13))){
var inst_50123 = alert("Failed to retrieve data from GitHub");
var state_50127__$1 = state_50127;
var statearr_50131_50164 = state_50127__$1;
(statearr_50131_50164[(2)] = inst_50123);

(statearr_50131_50164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (6))){
var state_50127__$1 = state_50127;
var statearr_50132_50165 = state_50127__$1;
(statearr_50132_50165[(2)] = true);

(statearr_50132_50165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (3))){
var inst_50095 = (state_50127[(7)]);
var inst_50100 = inst_50095.cljs$lang$protocol_mask$partition0$;
var inst_50101 = (inst_50100 & (64));
var inst_50102 = inst_50095.cljs$core$ISeq$;
var inst_50103 = (cljs.core.PROTOCOL_SENTINEL === inst_50102);
var inst_50104 = ((inst_50101) || (inst_50103));
var state_50127__$1 = state_50127;
if(cljs.core.truth_(inst_50104)){
var statearr_50134_50167 = state_50127__$1;
(statearr_50134_50167[(1)] = (6));

} else {
var statearr_50135_50168 = state_50127__$1;
(statearr_50135_50168[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (12))){
var inst_50118 = (state_50127[(8)]);
var inst_50120 = athens.db.str_to_db_tx(inst_50118);
var inst_50121 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_50120) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_50120));
var state_50127__$1 = state_50127;
var statearr_50136_50169 = state_50127__$1;
(statearr_50136_50169[(2)] = inst_50121);

(statearr_50136_50169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (2))){
var inst_50095 = (state_50127[(7)]);
var inst_50095__$1 = (state_50127[(2)]);
var inst_50097 = (inst_50095__$1 == null);
var inst_50098 = cljs.core.not(inst_50097);
var state_50127__$1 = (function (){var statearr_50137 = state_50127;
(statearr_50137[(7)] = inst_50095__$1);

return statearr_50137;
})();
if(inst_50098){
var statearr_50138_50170 = state_50127__$1;
(statearr_50138_50170[(1)] = (3));

} else {
var statearr_50139_50171 = state_50127__$1;
(statearr_50139_50171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (11))){
var inst_50116 = (state_50127[(2)]);
var inst_50117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50116,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50116,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50127__$1 = (function (){var statearr_50140 = state_50127;
(statearr_50140[(8)] = inst_50118);

return statearr_50140;
})();
if(cljs.core.truth_(inst_50117)){
var statearr_50141_50172 = state_50127__$1;
(statearr_50141_50172[(1)] = (12));

} else {
var statearr_50142_50173 = state_50127__$1;
(statearr_50142_50173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (9))){
var inst_50095 = (state_50127[(7)]);
var inst_50113 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50095);
var state_50127__$1 = state_50127;
var statearr_50143_50174 = state_50127__$1;
(statearr_50143_50174[(2)] = inst_50113);

(statearr_50143_50174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (5))){
var inst_50111 = (state_50127[(2)]);
var state_50127__$1 = state_50127;
if(cljs.core.truth_(inst_50111)){
var statearr_50144_50175 = state_50127__$1;
(statearr_50144_50175[(1)] = (9));

} else {
var statearr_50145_50176 = state_50127__$1;
(statearr_50145_50176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (14))){
var inst_50125 = (state_50127[(2)]);
var state_50127__$1 = state_50127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50127__$1,inst_50125);
} else {
if((state_val_50128 === (10))){
var inst_50095 = (state_50127[(7)]);
var state_50127__$1 = state_50127;
var statearr_50146_50177 = state_50127__$1;
(statearr_50146_50177[(2)] = inst_50095);

(statearr_50146_50177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50128 === (8))){
var inst_50108 = (state_50127[(2)]);
var state_50127__$1 = state_50127;
var statearr_50147_50178 = state_50127__$1;
(statearr_50147_50178[(2)] = inst_50108);

(statearr_50147_50178[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____0 = (function (){
var statearr_50148 = [null,null,null,null,null,null,null,null,null];
(statearr_50148[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__);

(statearr_50148[(1)] = (1));

return statearr_50148;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____1 = (function (state_50127){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_50127);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e50149){if((e50149 instanceof Object)){
var ex__44342__auto__ = e50149;
var statearr_50150_50179 = state_50127;
(statearr_50150_50179[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50180 = state_50127;
state_50127 = G__50180;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__ = function(state_50127){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____1.call(this,state_50127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__44339__auto__;
})()
})();
var state__44405__auto__ = (function (){var statearr_50151 = (f__44404__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44404__auto__.cljs$core$IFn$_invoke$arity$0() : f__44404__auto__.call(null));
(statearr_50151[(6)] = c__44403__auto__);

return statearr_50151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44405__auto__);
}));

return c__44403__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50155 = (function (meta50156){
this.meta50156 = meta50156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50157,meta50156__$1){
var self__ = this;
var _50157__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50155(meta50156__$1));
}));

(athens.devcards.db.t_athens$devcards$db50155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50157){
var self__ = this;
var _50157__$1 = this;
return self__.meta50156;
}));

(athens.devcards.db.t_athens$devcards$db50155.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50155.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50156","meta50156",1640219768,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50155.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50155.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50155");

(athens.devcards.db.t_athens$devcards$db50155.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50155");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50155.
 */
athens.devcards.db.__GT_t_athens$devcards$db50155 = (function athens$devcards$db$__GT_t_athens$devcards$db50155(meta50156){
return (new athens.devcards.db.t_athens$devcards$db50155(meta50156));
});

}

return (new athens.devcards.db.t_athens$devcards$db50155(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50159 = (function (meta50160){
this.meta50160 = meta50160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50161,meta50160__$1){
var self__ = this;
var _50161__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50159(meta50160__$1));
}));

(athens.devcards.db.t_athens$devcards$db50159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50161){
var self__ = this;
var _50161__$1 = this;
return self__.meta50160;
}));

(athens.devcards.db.t_athens$devcards$db50159.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50159.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50160","meta50160",1989396544,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50159.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50159.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50159");

(athens.devcards.db.t_athens$devcards$db50159.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50159");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50159.
 */
athens.devcards.db.__GT_t_athens$devcards$db50159 = (function athens$devcards$db$__GT_t_athens$devcards$db50159(meta50160){
return (new athens.devcards.db.t_athens$devcards$db50159(meta50160));
});

}

return (new athens.devcards.db.t_athens$devcards$db50159(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
