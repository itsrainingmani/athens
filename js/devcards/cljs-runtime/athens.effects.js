goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,datoms));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60356){
var map__60357 = p__60356;
var map__60357__$1 = (((((!((map__60357 == null))))?(((((map__60357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60357):map__60357);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_60401){
var state_val_60402 = (state_60401[(1)]);
if((state_val_60402 === (7))){
var inst_60368 = (state_60401[(7)]);
var inst_60368__$1 = (state_60401[(2)]);
var inst_60370 = (inst_60368__$1 == null);
var inst_60371 = cljs.core.not(inst_60370);
var state_60401__$1 = (function (){var statearr_60403 = state_60401;
(statearr_60403[(7)] = inst_60368__$1);

return statearr_60403;
})();
if(inst_60371){
var statearr_60404_60439 = state_60401__$1;
(statearr_60404_60439[(1)] = (8));

} else {
var statearr_60405_60440 = state_60401__$1;
(statearr_60405_60440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (1))){
var state_60401__$1 = state_60401;
var G__60406_60441 = method;
var G__60406_60442__$1 = (((G__60406_60441 instanceof cljs.core.Keyword))?G__60406_60441.fqn:null);
switch (G__60406_60442__$1) {
case "post":
var statearr_60407_60444 = state_60401__$1;
(statearr_60407_60444[(1)] = (3));


break;
case "get":
var statearr_60408_60445 = state_60401__$1;
(statearr_60408_60445[(1)] = (4));


break;
case "put":
var statearr_60409_60446 = state_60401__$1;
(statearr_60409_60446[(1)] = (5));


break;
case "delete":
var statearr_60410_60447 = state_60401__$1;
(statearr_60410_60447[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60406_60442__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (4))){
var state_60401__$1 = state_60401;
var statearr_60411_60448 = state_60401__$1;
(statearr_60411_60448[(2)] = cljs_http.client.get);

(statearr_60411_60448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (15))){
var inst_60368 = (state_60401[(7)]);
var state_60401__$1 = state_60401;
var statearr_60412_60449 = state_60401__$1;
(statearr_60412_60449[(2)] = inst_60368);

(statearr_60412_60449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (13))){
var inst_60381 = (state_60401[(2)]);
var state_60401__$1 = state_60401;
var statearr_60413_60450 = state_60401__$1;
(statearr_60413_60450[(2)] = inst_60381);

(statearr_60413_60450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (6))){
var state_60401__$1 = state_60401;
var statearr_60414_60451 = state_60401__$1;
(statearr_60414_60451[(2)] = cljs_http.client.delete$);

(statearr_60414_60451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (17))){
var inst_60391 = (state_60401[(8)]);
var inst_60393 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60391);
var inst_60394 = re_frame.core.dispatch(inst_60393);
var state_60401__$1 = state_60401;
var statearr_60415_60452 = state_60401__$1;
(statearr_60415_60452[(2)] = inst_60394);

(statearr_60415_60452[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (3))){
var state_60401__$1 = state_60401;
var statearr_60416_60453 = state_60401__$1;
(statearr_60416_60453[(2)] = cljs_http.client.post);

(statearr_60416_60453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (12))){
var state_60401__$1 = state_60401;
var statearr_60417_60454 = state_60401__$1;
(statearr_60417_60454[(2)] = false);

(statearr_60417_60454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (2))){
var inst_60365 = (state_60401[(2)]);
var inst_60366 = (inst_60365.cljs$core$IFn$_invoke$arity$2 ? inst_60365.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60365.call(null,url,opts));
var state_60401__$1 = state_60401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60401__$1,(7),inst_60366);
} else {
if((state_val_60402 === (19))){
var inst_60399 = (state_60401[(2)]);
var state_60401__$1 = state_60401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60401__$1,inst_60399);
} else {
if((state_val_60402 === (11))){
var state_60401__$1 = state_60401;
var statearr_60418_60455 = state_60401__$1;
(statearr_60418_60455[(2)] = true);

(statearr_60418_60455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (9))){
var state_60401__$1 = state_60401;
var statearr_60419_60456 = state_60401__$1;
(statearr_60419_60456[(2)] = false);

(statearr_60419_60456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (5))){
var state_60401__$1 = state_60401;
var statearr_60420_60457 = state_60401__$1;
(statearr_60420_60457[(2)] = cljs_http.client.put);

(statearr_60420_60457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (14))){
var inst_60368 = (state_60401[(7)]);
var inst_60386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60368);
var state_60401__$1 = state_60401;
var statearr_60421_60458 = state_60401__$1;
(statearr_60421_60458[(2)] = inst_60386);

(statearr_60421_60458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (16))){
var inst_60389 = (state_60401[(9)]);
var inst_60389__$1 = (state_60401[(2)]);
var inst_60390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60389__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60389__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60401__$1 = (function (){var statearr_60422 = state_60401;
(statearr_60422[(8)] = inst_60391);

(statearr_60422[(9)] = inst_60389__$1);

return statearr_60422;
})();
if(cljs.core.truth_(inst_60390)){
var statearr_60423_60459 = state_60401__$1;
(statearr_60423_60459[(1)] = (17));

} else {
var statearr_60424_60460 = state_60401__$1;
(statearr_60424_60460[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (10))){
var inst_60384 = (state_60401[(2)]);
var state_60401__$1 = state_60401;
if(cljs.core.truth_(inst_60384)){
var statearr_60425_60461 = state_60401__$1;
(statearr_60425_60461[(1)] = (14));

} else {
var statearr_60426_60462 = state_60401__$1;
(statearr_60426_60462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (18))){
var inst_60389 = (state_60401[(9)]);
var inst_60396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60389);
var inst_60397 = re_frame.core.dispatch(inst_60396);
var state_60401__$1 = state_60401;
var statearr_60427_60463 = state_60401__$1;
(statearr_60427_60463[(2)] = inst_60397);

(statearr_60427_60463[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60402 === (8))){
var inst_60368 = (state_60401[(7)]);
var inst_60373 = inst_60368.cljs$lang$protocol_mask$partition0$;
var inst_60374 = (inst_60373 & (64));
var inst_60375 = inst_60368.cljs$core$ISeq$;
var inst_60376 = (cljs.core.PROTOCOL_SENTINEL === inst_60375);
var inst_60377 = ((inst_60374) || (inst_60376));
var state_60401__$1 = state_60401;
if(cljs.core.truth_(inst_60377)){
var statearr_60428_60464 = state_60401__$1;
(statearr_60428_60464[(1)] = (11));

} else {
var statearr_60429_60465 = state_60401__$1;
(statearr_60429_60465[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__42493__auto__ = null;
var athens$effects$state_machine__42493__auto____0 = (function (){
var statearr_60430 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60430[(0)] = athens$effects$state_machine__42493__auto__);

(statearr_60430[(1)] = (1));

return statearr_60430;
});
var athens$effects$state_machine__42493__auto____1 = (function (state_60401){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_60401);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e60431){var ex__42496__auto__ = e60431;
var statearr_60432_60466 = state_60401;
(statearr_60432_60466[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_60401[(4)]))){
var statearr_60433_60467 = state_60401;
(statearr_60433_60467[(1)] = cljs.core.first((state_60401[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60468 = state_60401;
state_60401 = G__60468;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
athens$effects$state_machine__42493__auto__ = function(state_60401){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42493__auto____0.call(this);
case 1:
return athens$effects$state_machine__42493__auto____1.call(this,state_60401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42493__auto____0;
athens$effects$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42493__auto____1;
return athens$effects$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_60434 = f__42529__auto__();
(statearr_60434[(6)] = c__42528__auto__);

return statearr_60434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60435){
var map__60436 = p__60435;
var map__60436__$1 = (((((!((map__60436 == null))))?(((((map__60436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60436):map__60436);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60436__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60436__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60436__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60436__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60438 = action;
var G__60438__$1 = (((G__60438 instanceof cljs.core.Keyword))?G__60438.fqn:null);
switch (G__60438__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60438__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
