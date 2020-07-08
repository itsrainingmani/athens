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
var G__61343_61435 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61344_61436 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61343_61435,G__61344_61436) : re_frame.core.reg_fx.call(null,G__61343_61435,G__61344_61436));
var G__61345_61437 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61346_61438 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61345_61437,G__61346_61438) : re_frame.core.reg_fx.call(null,G__61345_61437,G__61346_61438));
var G__61347_61439 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61348_61440 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61347_61439,G__61348_61440) : re_frame.core.reg_fx.call(null,G__61347_61439,G__61348_61440));
var G__61349_61441 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61350_61442 = (function (p__61351){
var map__61352 = p__61351;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37015__auto__ = (function (){var switch__36947__auto__ = (function (state_61396){
var state_val_61397 = (state_61396[(1)]);
if((state_val_61397 === (7))){
var inst_61363 = (state_61396[(7)]);
var inst_61363__$1 = (state_61396[(2)]);
var inst_61365 = (inst_61363__$1 == null);
var inst_61366 = cljs.core.not(inst_61365);
var state_61396__$1 = (function (){var statearr_61398 = state_61396;
(statearr_61398[(7)] = inst_61363__$1);

return statearr_61398;
})();
if(inst_61366){
var statearr_61399_61443 = state_61396__$1;
(statearr_61399_61443[(1)] = (8));

} else {
var statearr_61400_61444 = state_61396__$1;
(statearr_61400_61444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (1))){
var state_61396__$1 = state_61396;
var G__61401_61445 = method;
var G__61401_61446__$1 = (((G__61401_61445 instanceof cljs.core.Keyword))?G__61401_61445.fqn:null);
switch (G__61401_61446__$1) {
case "post":
var statearr_61402_61448 = state_61396__$1;
(statearr_61402_61448[(1)] = (3));


break;
case "get":
var statearr_61403_61449 = state_61396__$1;
(statearr_61403_61449[(1)] = (4));


break;
case "put":
var statearr_61404_61450 = state_61396__$1;
(statearr_61404_61450[(1)] = (5));


break;
case "delete":
var statearr_61405_61451 = state_61396__$1;
(statearr_61405_61451[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61401_61446__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (4))){
var state_61396__$1 = state_61396;
var statearr_61406_61452 = state_61396__$1;
(statearr_61406_61452[(2)] = cljs_http.client.get);

(statearr_61406_61452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (15))){
var inst_61363 = (state_61396[(7)]);
var state_61396__$1 = state_61396;
var statearr_61407_61453 = state_61396__$1;
(statearr_61407_61453[(2)] = inst_61363);

(statearr_61407_61453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (13))){
var inst_61376 = (state_61396[(2)]);
var state_61396__$1 = state_61396;
var statearr_61408_61454 = state_61396__$1;
(statearr_61408_61454[(2)] = inst_61376);

(statearr_61408_61454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (6))){
var state_61396__$1 = state_61396;
var statearr_61409_61455 = state_61396__$1;
(statearr_61409_61455[(2)] = cljs_http.client.delete$);

(statearr_61409_61455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (17))){
var inst_61386 = (state_61396[(8)]);
var inst_61388 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61386);
var inst_61389 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61388) : re_frame.core.dispatch.call(null,inst_61388));
var state_61396__$1 = state_61396;
var statearr_61410_61456 = state_61396__$1;
(statearr_61410_61456[(2)] = inst_61389);

(statearr_61410_61456[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (3))){
var state_61396__$1 = state_61396;
var statearr_61411_61457 = state_61396__$1;
(statearr_61411_61457[(2)] = cljs_http.client.post);

(statearr_61411_61457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (12))){
var state_61396__$1 = state_61396;
var statearr_61412_61458 = state_61396__$1;
(statearr_61412_61458[(2)] = false);

(statearr_61412_61458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (2))){
var inst_61360 = (state_61396[(2)]);
var inst_61361 = (inst_61360.cljs$core$IFn$_invoke$arity$2 ? inst_61360.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61360.call(null,url,opts));
var state_61396__$1 = state_61396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61396__$1,(7),inst_61361);
} else {
if((state_val_61397 === (19))){
var inst_61394 = (state_61396[(2)]);
var state_61396__$1 = state_61396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61396__$1,inst_61394);
} else {
if((state_val_61397 === (11))){
var state_61396__$1 = state_61396;
var statearr_61413_61459 = state_61396__$1;
(statearr_61413_61459[(2)] = true);

(statearr_61413_61459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (9))){
var state_61396__$1 = state_61396;
var statearr_61414_61460 = state_61396__$1;
(statearr_61414_61460[(2)] = false);

(statearr_61414_61460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (5))){
var state_61396__$1 = state_61396;
var statearr_61415_61461 = state_61396__$1;
(statearr_61415_61461[(2)] = cljs_http.client.put);

(statearr_61415_61461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (14))){
var inst_61363 = (state_61396[(7)]);
var inst_61381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61363);
var state_61396__$1 = state_61396;
var statearr_61416_61462 = state_61396__$1;
(statearr_61416_61462[(2)] = inst_61381);

(statearr_61416_61462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (16))){
var inst_61384 = (state_61396[(9)]);
var inst_61384__$1 = (state_61396[(2)]);
var inst_61385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61384__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61384__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61396__$1 = (function (){var statearr_61417 = state_61396;
(statearr_61417[(9)] = inst_61384__$1);

(statearr_61417[(8)] = inst_61386);

return statearr_61417;
})();
if(cljs.core.truth_(inst_61385)){
var statearr_61418_61463 = state_61396__$1;
(statearr_61418_61463[(1)] = (17));

} else {
var statearr_61419_61464 = state_61396__$1;
(statearr_61419_61464[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (10))){
var inst_61379 = (state_61396[(2)]);
var state_61396__$1 = state_61396;
if(cljs.core.truth_(inst_61379)){
var statearr_61420_61465 = state_61396__$1;
(statearr_61420_61465[(1)] = (14));

} else {
var statearr_61421_61466 = state_61396__$1;
(statearr_61421_61466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (18))){
var inst_61384 = (state_61396[(9)]);
var inst_61391 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61384);
var inst_61392 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61391) : re_frame.core.dispatch.call(null,inst_61391));
var state_61396__$1 = state_61396;
var statearr_61422_61467 = state_61396__$1;
(statearr_61422_61467[(2)] = inst_61392);

(statearr_61422_61467[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61397 === (8))){
var inst_61363 = (state_61396[(7)]);
var inst_61368 = inst_61363.cljs$lang$protocol_mask$partition0$;
var inst_61369 = (inst_61368 & (64));
var inst_61370 = inst_61363.cljs$core$ISeq$;
var inst_61371 = (cljs.core.PROTOCOL_SENTINEL === inst_61370);
var inst_61372 = ((inst_61369) || (inst_61371));
var state_61396__$1 = state_61396;
if(cljs.core.truth_(inst_61372)){
var statearr_61423_61468 = state_61396__$1;
(statearr_61423_61468[(1)] = (11));

} else {
var statearr_61424_61469 = state_61396__$1;
(statearr_61424_61469[(1)] = (12));

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
var athens$effects$state_machine__36948__auto__ = null;
var athens$effects$state_machine__36948__auto____0 = (function (){
var statearr_61425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61425[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61425[(1)] = (1));

return statearr_61425;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61396){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61396);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61426){if((e61426 instanceof Object)){
var ex__36951__auto__ = e61426;
var statearr_61427_61470 = state_61396;
(statearr_61427_61470[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61471 = state_61396;
state_61396 = G__61471;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61396){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37016__auto__ = (function (){var statearr_61428 = (f__37015__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37015__auto__.cljs$core$IFn$_invoke$arity$0() : f__37015__auto__.call(null));
(statearr_61428[(6)] = c__37014__auto__);

return statearr_61428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37016__auto__);
}));

return c__37014__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61349_61441,G__61350_61442) : re_frame.core.reg_fx.call(null,G__61349_61441,G__61350_61442));
var G__61429_61472 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61430_61473 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61431){
var map__61432 = p__61431;
var map__61432__$1 = (((((!((map__61432 == null))))?(((((map__61432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61432):map__61432);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61434 = action;
var G__61434__$1 = (((G__61434 instanceof cljs.core.Keyword))?G__61434.fqn:null);
switch (G__61434__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61434__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61429_61472,G__61430_61473) : re_frame.core.reg_fx.call(null,G__61429_61472,G__61430_61473));

//# sourceMappingURL=athens.effects.js.map
