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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60331){
var map__60332 = p__60331;
var map__60332__$1 = (((((!((map__60332 == null))))?(((((map__60332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60332):map__60332);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_60376){
var state_val_60377 = (state_60376[(1)]);
if((state_val_60377 === (7))){
var inst_60343 = (state_60376[(7)]);
var inst_60343__$1 = (state_60376[(2)]);
var inst_60345 = (inst_60343__$1 == null);
var inst_60346 = cljs.core.not(inst_60345);
var state_60376__$1 = (function (){var statearr_60378 = state_60376;
(statearr_60378[(7)] = inst_60343__$1);

return statearr_60378;
})();
if(inst_60346){
var statearr_60379_60414 = state_60376__$1;
(statearr_60379_60414[(1)] = (8));

} else {
var statearr_60380_60415 = state_60376__$1;
(statearr_60380_60415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (1))){
var state_60376__$1 = state_60376;
var G__60381_60416 = method;
var G__60381_60417__$1 = (((G__60381_60416 instanceof cljs.core.Keyword))?G__60381_60416.fqn:null);
switch (G__60381_60417__$1) {
case "post":
var statearr_60382_60419 = state_60376__$1;
(statearr_60382_60419[(1)] = (3));


break;
case "get":
var statearr_60383_60420 = state_60376__$1;
(statearr_60383_60420[(1)] = (4));


break;
case "put":
var statearr_60384_60421 = state_60376__$1;
(statearr_60384_60421[(1)] = (5));


break;
case "delete":
var statearr_60385_60422 = state_60376__$1;
(statearr_60385_60422[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60381_60417__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (4))){
var state_60376__$1 = state_60376;
var statearr_60386_60423 = state_60376__$1;
(statearr_60386_60423[(2)] = cljs_http.client.get);

(statearr_60386_60423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (15))){
var inst_60343 = (state_60376[(7)]);
var state_60376__$1 = state_60376;
var statearr_60387_60424 = state_60376__$1;
(statearr_60387_60424[(2)] = inst_60343);

(statearr_60387_60424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (13))){
var inst_60356 = (state_60376[(2)]);
var state_60376__$1 = state_60376;
var statearr_60388_60425 = state_60376__$1;
(statearr_60388_60425[(2)] = inst_60356);

(statearr_60388_60425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (6))){
var state_60376__$1 = state_60376;
var statearr_60389_60426 = state_60376__$1;
(statearr_60389_60426[(2)] = cljs_http.client.delete$);

(statearr_60389_60426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (17))){
var inst_60366 = (state_60376[(8)]);
var inst_60368 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60366);
var inst_60369 = re_frame.core.dispatch(inst_60368);
var state_60376__$1 = state_60376;
var statearr_60390_60427 = state_60376__$1;
(statearr_60390_60427[(2)] = inst_60369);

(statearr_60390_60427[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (3))){
var state_60376__$1 = state_60376;
var statearr_60391_60428 = state_60376__$1;
(statearr_60391_60428[(2)] = cljs_http.client.post);

(statearr_60391_60428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (12))){
var state_60376__$1 = state_60376;
var statearr_60392_60429 = state_60376__$1;
(statearr_60392_60429[(2)] = false);

(statearr_60392_60429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (2))){
var inst_60340 = (state_60376[(2)]);
var inst_60341 = (inst_60340.cljs$core$IFn$_invoke$arity$2 ? inst_60340.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60340.call(null,url,opts));
var state_60376__$1 = state_60376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60376__$1,(7),inst_60341);
} else {
if((state_val_60377 === (19))){
var inst_60374 = (state_60376[(2)]);
var state_60376__$1 = state_60376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60376__$1,inst_60374);
} else {
if((state_val_60377 === (11))){
var state_60376__$1 = state_60376;
var statearr_60393_60430 = state_60376__$1;
(statearr_60393_60430[(2)] = true);

(statearr_60393_60430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (9))){
var state_60376__$1 = state_60376;
var statearr_60394_60431 = state_60376__$1;
(statearr_60394_60431[(2)] = false);

(statearr_60394_60431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (5))){
var state_60376__$1 = state_60376;
var statearr_60395_60432 = state_60376__$1;
(statearr_60395_60432[(2)] = cljs_http.client.put);

(statearr_60395_60432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (14))){
var inst_60343 = (state_60376[(7)]);
var inst_60361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60343);
var state_60376__$1 = state_60376;
var statearr_60396_60433 = state_60376__$1;
(statearr_60396_60433[(2)] = inst_60361);

(statearr_60396_60433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (16))){
var inst_60364 = (state_60376[(9)]);
var inst_60364__$1 = (state_60376[(2)]);
var inst_60365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60364__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60364__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60376__$1 = (function (){var statearr_60397 = state_60376;
(statearr_60397[(9)] = inst_60364__$1);

(statearr_60397[(8)] = inst_60366);

return statearr_60397;
})();
if(cljs.core.truth_(inst_60365)){
var statearr_60398_60434 = state_60376__$1;
(statearr_60398_60434[(1)] = (17));

} else {
var statearr_60399_60435 = state_60376__$1;
(statearr_60399_60435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (10))){
var inst_60359 = (state_60376[(2)]);
var state_60376__$1 = state_60376;
if(cljs.core.truth_(inst_60359)){
var statearr_60400_60436 = state_60376__$1;
(statearr_60400_60436[(1)] = (14));

} else {
var statearr_60401_60437 = state_60376__$1;
(statearr_60401_60437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (18))){
var inst_60364 = (state_60376[(9)]);
var inst_60371 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60364);
var inst_60372 = re_frame.core.dispatch(inst_60371);
var state_60376__$1 = state_60376;
var statearr_60402_60438 = state_60376__$1;
(statearr_60402_60438[(2)] = inst_60372);

(statearr_60402_60438[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60377 === (8))){
var inst_60343 = (state_60376[(7)]);
var inst_60348 = inst_60343.cljs$lang$protocol_mask$partition0$;
var inst_60349 = (inst_60348 & (64));
var inst_60350 = inst_60343.cljs$core$ISeq$;
var inst_60351 = (cljs.core.PROTOCOL_SENTINEL === inst_60350);
var inst_60352 = ((inst_60349) || (inst_60351));
var state_60376__$1 = state_60376;
if(cljs.core.truth_(inst_60352)){
var statearr_60403_60439 = state_60376__$1;
(statearr_60403_60439[(1)] = (11));

} else {
var statearr_60404_60440 = state_60376__$1;
(statearr_60404_60440[(1)] = (12));

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
var athens$effects$state_machine__42484__auto__ = null;
var athens$effects$state_machine__42484__auto____0 = (function (){
var statearr_60405 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60405[(0)] = athens$effects$state_machine__42484__auto__);

(statearr_60405[(1)] = (1));

return statearr_60405;
});
var athens$effects$state_machine__42484__auto____1 = (function (state_60376){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_60376);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e60406){var ex__42487__auto__ = e60406;
var statearr_60407_60441 = state_60376;
(statearr_60407_60441[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_60376[(4)]))){
var statearr_60408_60442 = state_60376;
(statearr_60408_60442[(1)] = cljs.core.first((state_60376[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60443 = state_60376;
state_60376 = G__60443;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$effects$state_machine__42484__auto__ = function(state_60376){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42484__auto____0.call(this);
case 1:
return athens$effects$state_machine__42484__auto____1.call(this,state_60376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42484__auto____0;
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42484__auto____1;
return athens$effects$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_60409 = f__42520__auto__();
(statearr_60409[(6)] = c__42519__auto__);

return statearr_60409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60410){
var map__60411 = p__60410;
var map__60411__$1 = (((((!((map__60411 == null))))?(((((map__60411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60411):map__60411);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60413 = action;
var G__60413__$1 = (((G__60413 instanceof cljs.core.Keyword))?G__60413.fqn:null);
switch (G__60413__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60413__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
