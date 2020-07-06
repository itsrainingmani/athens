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
var c__23115__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23116__auto__ = (function (){var switch__23092__auto__ = (function (state_36462){
var state_val_36463 = (state_36462[(1)]);
if((state_val_36463 === (7))){
var state_36462__$1 = state_36462;
var statearr_36464_36486 = state_36462__$1;
(statearr_36464_36486[(2)] = false);

(statearr_36464_36486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (1))){
var inst_36425 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_36426 = [false];
var inst_36427 = cljs.core.PersistentHashMap.fromArrays(inst_36425,inst_36426);
var inst_36428 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_36427], 0));
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36462__$1,(2),inst_36428);
} else {
if((state_val_36463 === (4))){
var state_36462__$1 = state_36462;
var statearr_36465_36487 = state_36462__$1;
(statearr_36465_36487[(2)] = false);

(statearr_36465_36487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (13))){
var inst_36458 = alert("Failed to retrieve data from GitHub");
var state_36462__$1 = state_36462;
var statearr_36466_36488 = state_36462__$1;
(statearr_36466_36488[(2)] = inst_36458);

(statearr_36466_36488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (6))){
var state_36462__$1 = state_36462;
var statearr_36467_36489 = state_36462__$1;
(statearr_36467_36489[(2)] = true);

(statearr_36467_36489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (3))){
var inst_36430 = (state_36462[(7)]);
var inst_36435 = inst_36430.cljs$lang$protocol_mask$partition0$;
var inst_36436 = (inst_36435 & (64));
var inst_36437 = inst_36430.cljs$core$ISeq$;
var inst_36438 = (cljs.core.PROTOCOL_SENTINEL === inst_36437);
var inst_36439 = ((inst_36436) || (inst_36438));
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36439)){
var statearr_36468_36490 = state_36462__$1;
(statearr_36468_36490[(1)] = (6));

} else {
var statearr_36469_36491 = state_36462__$1;
(statearr_36469_36491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (12))){
var inst_36453 = (state_36462[(8)]);
var inst_36455 = athens.db.str_to_db_tx(inst_36453);
var inst_36456 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_36455) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_36455));
var state_36462__$1 = state_36462;
var statearr_36470_36492 = state_36462__$1;
(statearr_36470_36492[(2)] = inst_36456);

(statearr_36470_36492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (2))){
var inst_36430 = (state_36462[(7)]);
var inst_36430__$1 = (state_36462[(2)]);
var inst_36432 = (inst_36430__$1 == null);
var inst_36433 = cljs.core.not(inst_36432);
var state_36462__$1 = (function (){var statearr_36471 = state_36462;
(statearr_36471[(7)] = inst_36430__$1);

return statearr_36471;
})();
if(inst_36433){
var statearr_36472_36493 = state_36462__$1;
(statearr_36472_36493[(1)] = (3));

} else {
var statearr_36473_36494 = state_36462__$1;
(statearr_36473_36494[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (11))){
var inst_36451 = (state_36462[(2)]);
var inst_36452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36451,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_36453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36451,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_36462__$1 = (function (){var statearr_36474 = state_36462;
(statearr_36474[(8)] = inst_36453);

return statearr_36474;
})();
if(cljs.core.truth_(inst_36452)){
var statearr_36475_36495 = state_36462__$1;
(statearr_36475_36495[(1)] = (12));

} else {
var statearr_36476_36496 = state_36462__$1;
(statearr_36476_36496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (9))){
var inst_36430 = (state_36462[(7)]);
var inst_36448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36430);
var state_36462__$1 = state_36462;
var statearr_36477_36497 = state_36462__$1;
(statearr_36477_36497[(2)] = inst_36448);

(statearr_36477_36497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (5))){
var inst_36446 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36446)){
var statearr_36478_36498 = state_36462__$1;
(statearr_36478_36498[(1)] = (9));

} else {
var statearr_36479_36499 = state_36462__$1;
(statearr_36479_36499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (14))){
var inst_36460 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36462__$1,inst_36460);
} else {
if((state_val_36463 === (10))){
var inst_36430 = (state_36462[(7)]);
var state_36462__$1 = state_36462;
var statearr_36480_36500 = state_36462__$1;
(statearr_36480_36500[(2)] = inst_36430);

(statearr_36480_36500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (8))){
var inst_36443 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36481_36501 = state_36462__$1;
(statearr_36481_36501[(2)] = inst_36443);

(statearr_36481_36501[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____0 = (function (){
var statearr_36482 = [null,null,null,null,null,null,null,null,null];
(statearr_36482[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__);

(statearr_36482[(1)] = (1));

return statearr_36482;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____1 = (function (state_36462){
while(true){
var ret_value__23094__auto__ = (function (){try{while(true){
var result__23095__auto__ = switch__23092__auto__(state_36462);
if(cljs.core.keyword_identical_QMARK_(result__23095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23095__auto__;
}
break;
}
}catch (e36483){if((e36483 instanceof Object)){
var ex__23096__auto__ = e36483;
var statearr_36484_36502 = state_36462;
(statearr_36484_36502[(5)] = ex__23096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36503 = state_36462;
state_36462 = G__36503;
continue;
} else {
return ret_value__23094__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__ = function(state_36462){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____1.call(this,state_36462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__23093__auto__;
})()
})();
var state__23117__auto__ = (function (){var statearr_36485 = (f__23116__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23116__auto__.cljs$core$IFn$_invoke$arity$0() : f__23116__auto__.call(null));
(statearr_36485[(6)] = c__23115__auto__);

return statearr_36485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23117__auto__);
}));

return c__23115__auto__;
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

//# sourceMappingURL=athens.devcards.db.js.map
