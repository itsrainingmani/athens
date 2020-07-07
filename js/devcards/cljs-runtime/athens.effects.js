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
var G__61319_61411 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61320_61412 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61319_61411,G__61320_61412) : re_frame.core.reg_fx.call(null,G__61319_61411,G__61320_61412));
var G__61321_61413 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61322_61414 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61321_61413,G__61322_61414) : re_frame.core.reg_fx.call(null,G__61321_61413,G__61322_61414));
var G__61323_61415 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61324_61416 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61323_61415,G__61324_61416) : re_frame.core.reg_fx.call(null,G__61323_61415,G__61324_61416));
var G__61325_61417 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61326_61418 = (function (p__61327){
var map__61328 = p__61327;
var map__61328__$1 = (((((!((map__61328 == null))))?(((((map__61328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61328):map__61328);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61328__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61328__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61328__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61328__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61328__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_61372){
var state_val_61373 = (state_61372[(1)]);
if((state_val_61373 === (7))){
var inst_61339 = (state_61372[(7)]);
var inst_61339__$1 = (state_61372[(2)]);
var inst_61341 = (inst_61339__$1 == null);
var inst_61342 = cljs.core.not(inst_61341);
var state_61372__$1 = (function (){var statearr_61374 = state_61372;
(statearr_61374[(7)] = inst_61339__$1);

return statearr_61374;
})();
if(inst_61342){
var statearr_61375_61419 = state_61372__$1;
(statearr_61375_61419[(1)] = (8));

} else {
var statearr_61376_61420 = state_61372__$1;
(statearr_61376_61420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (1))){
var state_61372__$1 = state_61372;
var G__61377_61421 = method;
var G__61377_61422__$1 = (((G__61377_61421 instanceof cljs.core.Keyword))?G__61377_61421.fqn:null);
switch (G__61377_61422__$1) {
case "post":
var statearr_61378_61424 = state_61372__$1;
(statearr_61378_61424[(1)] = (3));


break;
case "get":
var statearr_61379_61425 = state_61372__$1;
(statearr_61379_61425[(1)] = (4));


break;
case "put":
var statearr_61380_61426 = state_61372__$1;
(statearr_61380_61426[(1)] = (5));


break;
case "delete":
var statearr_61381_61427 = state_61372__$1;
(statearr_61381_61427[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61377_61422__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (4))){
var state_61372__$1 = state_61372;
var statearr_61382_61428 = state_61372__$1;
(statearr_61382_61428[(2)] = cljs_http.client.get);

(statearr_61382_61428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (15))){
var inst_61339 = (state_61372[(7)]);
var state_61372__$1 = state_61372;
var statearr_61383_61429 = state_61372__$1;
(statearr_61383_61429[(2)] = inst_61339);

(statearr_61383_61429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (13))){
var inst_61352 = (state_61372[(2)]);
var state_61372__$1 = state_61372;
var statearr_61384_61430 = state_61372__$1;
(statearr_61384_61430[(2)] = inst_61352);

(statearr_61384_61430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (6))){
var state_61372__$1 = state_61372;
var statearr_61385_61431 = state_61372__$1;
(statearr_61385_61431[(2)] = cljs_http.client.delete$);

(statearr_61385_61431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (17))){
var inst_61362 = (state_61372[(8)]);
var inst_61364 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61362);
var inst_61365 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61364) : re_frame.core.dispatch.call(null,inst_61364));
var state_61372__$1 = state_61372;
var statearr_61386_61432 = state_61372__$1;
(statearr_61386_61432[(2)] = inst_61365);

(statearr_61386_61432[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (3))){
var state_61372__$1 = state_61372;
var statearr_61387_61433 = state_61372__$1;
(statearr_61387_61433[(2)] = cljs_http.client.post);

(statearr_61387_61433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (12))){
var state_61372__$1 = state_61372;
var statearr_61388_61434 = state_61372__$1;
(statearr_61388_61434[(2)] = false);

(statearr_61388_61434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (2))){
var inst_61336 = (state_61372[(2)]);
var inst_61337 = (inst_61336.cljs$core$IFn$_invoke$arity$2 ? inst_61336.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61336.call(null,url,opts));
var state_61372__$1 = state_61372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61372__$1,(7),inst_61337);
} else {
if((state_val_61373 === (19))){
var inst_61370 = (state_61372[(2)]);
var state_61372__$1 = state_61372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61372__$1,inst_61370);
} else {
if((state_val_61373 === (11))){
var state_61372__$1 = state_61372;
var statearr_61389_61435 = state_61372__$1;
(statearr_61389_61435[(2)] = true);

(statearr_61389_61435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (9))){
var state_61372__$1 = state_61372;
var statearr_61390_61436 = state_61372__$1;
(statearr_61390_61436[(2)] = false);

(statearr_61390_61436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (5))){
var state_61372__$1 = state_61372;
var statearr_61391_61437 = state_61372__$1;
(statearr_61391_61437[(2)] = cljs_http.client.put);

(statearr_61391_61437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (14))){
var inst_61339 = (state_61372[(7)]);
var inst_61357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61339);
var state_61372__$1 = state_61372;
var statearr_61392_61438 = state_61372__$1;
(statearr_61392_61438[(2)] = inst_61357);

(statearr_61392_61438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (16))){
var inst_61360 = (state_61372[(9)]);
var inst_61360__$1 = (state_61372[(2)]);
var inst_61361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61360__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61360__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61372__$1 = (function (){var statearr_61393 = state_61372;
(statearr_61393[(8)] = inst_61362);

(statearr_61393[(9)] = inst_61360__$1);

return statearr_61393;
})();
if(cljs.core.truth_(inst_61361)){
var statearr_61394_61439 = state_61372__$1;
(statearr_61394_61439[(1)] = (17));

} else {
var statearr_61395_61440 = state_61372__$1;
(statearr_61395_61440[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (10))){
var inst_61355 = (state_61372[(2)]);
var state_61372__$1 = state_61372;
if(cljs.core.truth_(inst_61355)){
var statearr_61396_61441 = state_61372__$1;
(statearr_61396_61441[(1)] = (14));

} else {
var statearr_61397_61442 = state_61372__$1;
(statearr_61397_61442[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (18))){
var inst_61360 = (state_61372[(9)]);
var inst_61367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61360);
var inst_61368 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61367) : re_frame.core.dispatch.call(null,inst_61367));
var state_61372__$1 = state_61372;
var statearr_61398_61443 = state_61372__$1;
(statearr_61398_61443[(2)] = inst_61368);

(statearr_61398_61443[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61373 === (8))){
var inst_61339 = (state_61372[(7)]);
var inst_61344 = inst_61339.cljs$lang$protocol_mask$partition0$;
var inst_61345 = (inst_61344 & (64));
var inst_61346 = inst_61339.cljs$core$ISeq$;
var inst_61347 = (cljs.core.PROTOCOL_SENTINEL === inst_61346);
var inst_61348 = ((inst_61345) || (inst_61347));
var state_61372__$1 = state_61372;
if(cljs.core.truth_(inst_61348)){
var statearr_61399_61444 = state_61372__$1;
(statearr_61399_61444[(1)] = (11));

} else {
var statearr_61400_61445 = state_61372__$1;
(statearr_61400_61445[(1)] = (12));

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
var athens$effects$state_machine__36936__auto__ = null;
var athens$effects$state_machine__36936__auto____0 = (function (){
var statearr_61401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61401[(0)] = athens$effects$state_machine__36936__auto__);

(statearr_61401[(1)] = (1));

return statearr_61401;
});
var athens$effects$state_machine__36936__auto____1 = (function (state_61372){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_61372);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e61402){if((e61402 instanceof Object)){
var ex__36939__auto__ = e61402;
var statearr_61403_61446 = state_61372;
(statearr_61403_61446[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61447 = state_61372;
state_61372 = G__61447;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
athens$effects$state_machine__36936__auto__ = function(state_61372){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36936__auto____0.call(this);
case 1:
return athens$effects$state_machine__36936__auto____1.call(this,state_61372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36936__auto____0;
athens$effects$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36936__auto____1;
return athens$effects$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_61404 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_61404[(6)] = c__37003__auto__);

return statearr_61404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61325_61417,G__61326_61418) : re_frame.core.reg_fx.call(null,G__61325_61417,G__61326_61418));
var G__61405_61448 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61406_61449 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61407){
var map__61408 = p__61407;
var map__61408__$1 = (((((!((map__61408 == null))))?(((((map__61408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61408):map__61408);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61410 = action;
var G__61410__$1 = (((G__61410 instanceof cljs.core.Keyword))?G__61410.fqn:null);
switch (G__61410__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61410__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61405_61448,G__61406_61449) : re_frame.core.reg_fx.call(null,G__61405_61448,G__61406_61449));

//# sourceMappingURL=athens.effects.js.map
