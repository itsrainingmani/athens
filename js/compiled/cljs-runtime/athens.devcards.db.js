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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58287){
var state_val_58288 = (state_58287[(1)]);
if((state_val_58288 === (7))){
var state_58287__$1 = state_58287;
var statearr_58289_58311 = state_58287__$1;
(statearr_58289_58311[(2)] = false);

(statearr_58289_58311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (1))){
var inst_58250 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58251 = [false];
var inst_58252 = cljs.core.PersistentHashMap.fromArrays(inst_58250,inst_58251);
var inst_58253 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58252], 0));
var state_58287__$1 = state_58287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58287__$1,(2),inst_58253);
} else {
if((state_val_58288 === (4))){
var state_58287__$1 = state_58287;
var statearr_58290_58312 = state_58287__$1;
(statearr_58290_58312[(2)] = false);

(statearr_58290_58312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (13))){
var inst_58283 = alert("Failed to retrieve data from GitHub");
var state_58287__$1 = state_58287;
var statearr_58291_58313 = state_58287__$1;
(statearr_58291_58313[(2)] = inst_58283);

(statearr_58291_58313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (6))){
var state_58287__$1 = state_58287;
var statearr_58292_58314 = state_58287__$1;
(statearr_58292_58314[(2)] = true);

(statearr_58292_58314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (3))){
var inst_58255 = (state_58287[(7)]);
var inst_58260 = inst_58255.cljs$lang$protocol_mask$partition0$;
var inst_58261 = (inst_58260 & (64));
var inst_58262 = inst_58255.cljs$core$ISeq$;
var inst_58263 = (cljs.core.PROTOCOL_SENTINEL === inst_58262);
var inst_58264 = ((inst_58261) || (inst_58263));
var state_58287__$1 = state_58287;
if(cljs.core.truth_(inst_58264)){
var statearr_58293_58315 = state_58287__$1;
(statearr_58293_58315[(1)] = (6));

} else {
var statearr_58294_58316 = state_58287__$1;
(statearr_58294_58316[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (12))){
var inst_58278 = (state_58287[(8)]);
var inst_58280 = athens.db.str_to_db_tx(inst_58278);
var inst_58281 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58280) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58280));
var state_58287__$1 = state_58287;
var statearr_58295_58317 = state_58287__$1;
(statearr_58295_58317[(2)] = inst_58281);

(statearr_58295_58317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (2))){
var inst_58255 = (state_58287[(7)]);
var inst_58255__$1 = (state_58287[(2)]);
var inst_58257 = (inst_58255__$1 == null);
var inst_58258 = cljs.core.not(inst_58257);
var state_58287__$1 = (function (){var statearr_58296 = state_58287;
(statearr_58296[(7)] = inst_58255__$1);

return statearr_58296;
})();
if(inst_58258){
var statearr_58297_58318 = state_58287__$1;
(statearr_58297_58318[(1)] = (3));

} else {
var statearr_58298_58319 = state_58287__$1;
(statearr_58298_58319[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (11))){
var inst_58276 = (state_58287[(2)]);
var inst_58277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58276,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58276,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58287__$1 = (function (){var statearr_58299 = state_58287;
(statearr_58299[(8)] = inst_58278);

return statearr_58299;
})();
if(cljs.core.truth_(inst_58277)){
var statearr_58300_58320 = state_58287__$1;
(statearr_58300_58320[(1)] = (12));

} else {
var statearr_58301_58321 = state_58287__$1;
(statearr_58301_58321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (9))){
var inst_58255 = (state_58287[(7)]);
var inst_58273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58255);
var state_58287__$1 = state_58287;
var statearr_58302_58322 = state_58287__$1;
(statearr_58302_58322[(2)] = inst_58273);

(statearr_58302_58322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (5))){
var inst_58271 = (state_58287[(2)]);
var state_58287__$1 = state_58287;
if(cljs.core.truth_(inst_58271)){
var statearr_58303_58323 = state_58287__$1;
(statearr_58303_58323[(1)] = (9));

} else {
var statearr_58304_58324 = state_58287__$1;
(statearr_58304_58324[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (14))){
var inst_58285 = (state_58287[(2)]);
var state_58287__$1 = state_58287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58287__$1,inst_58285);
} else {
if((state_val_58288 === (10))){
var inst_58255 = (state_58287[(7)]);
var state_58287__$1 = state_58287;
var statearr_58305_58325 = state_58287__$1;
(statearr_58305_58325[(2)] = inst_58255);

(statearr_58305_58325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58288 === (8))){
var inst_58268 = (state_58287[(2)]);
var state_58287__$1 = state_58287;
var statearr_58306_58326 = state_58287__$1;
(statearr_58306_58326[(2)] = inst_58268);

(statearr_58306_58326[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0 = (function (){
var statearr_58307 = [null,null,null,null,null,null,null,null,null];
(statearr_58307[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58307[(1)] = (1));

return statearr_58307;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58287){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58287);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58308){if((e58308 instanceof Object)){
var ex__38792__auto__ = e58308;
var statearr_58309_58327 = state_58287;
(statearr_58309_58327[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58328 = state_58287;
state_58287 = G__58328;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58287){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58310 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58310[(6)] = c__38856__auto__);

return statearr_58310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
