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
var G__61367_61459 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61368_61460 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61367_61459,G__61368_61460) : re_frame.core.reg_fx.call(null,G__61367_61459,G__61368_61460));
var G__61369_61461 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61370_61462 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61369_61461,G__61370_61462) : re_frame.core.reg_fx.call(null,G__61369_61461,G__61370_61462));
var G__61371_61463 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61372_61464 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61371_61463,G__61372_61464) : re_frame.core.reg_fx.call(null,G__61371_61463,G__61372_61464));
var G__61373_61465 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61374_61466 = (function (p__61375){
var map__61376 = p__61375;
var map__61376__$1 = (((((!((map__61376 == null))))?(((((map__61376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61376):map__61376);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61420){
var state_val_61421 = (state_61420[(1)]);
if((state_val_61421 === (7))){
var inst_61387 = (state_61420[(7)]);
var inst_61387__$1 = (state_61420[(2)]);
var inst_61389 = (inst_61387__$1 == null);
var inst_61390 = cljs.core.not(inst_61389);
var state_61420__$1 = (function (){var statearr_61422 = state_61420;
(statearr_61422[(7)] = inst_61387__$1);

return statearr_61422;
})();
if(inst_61390){
var statearr_61423_61467 = state_61420__$1;
(statearr_61423_61467[(1)] = (8));

} else {
var statearr_61424_61468 = state_61420__$1;
(statearr_61424_61468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (1))){
var state_61420__$1 = state_61420;
var G__61425_61469 = method;
var G__61425_61470__$1 = (((G__61425_61469 instanceof cljs.core.Keyword))?G__61425_61469.fqn:null);
switch (G__61425_61470__$1) {
case "post":
var statearr_61426_61472 = state_61420__$1;
(statearr_61426_61472[(1)] = (3));


break;
case "get":
var statearr_61427_61473 = state_61420__$1;
(statearr_61427_61473[(1)] = (4));


break;
case "put":
var statearr_61428_61474 = state_61420__$1;
(statearr_61428_61474[(1)] = (5));


break;
case "delete":
var statearr_61429_61475 = state_61420__$1;
(statearr_61429_61475[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61425_61470__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (4))){
var state_61420__$1 = state_61420;
var statearr_61430_61476 = state_61420__$1;
(statearr_61430_61476[(2)] = cljs_http.client.get);

(statearr_61430_61476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (15))){
var inst_61387 = (state_61420[(7)]);
var state_61420__$1 = state_61420;
var statearr_61431_61477 = state_61420__$1;
(statearr_61431_61477[(2)] = inst_61387);

(statearr_61431_61477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (13))){
var inst_61400 = (state_61420[(2)]);
var state_61420__$1 = state_61420;
var statearr_61432_61478 = state_61420__$1;
(statearr_61432_61478[(2)] = inst_61400);

(statearr_61432_61478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (6))){
var state_61420__$1 = state_61420;
var statearr_61433_61479 = state_61420__$1;
(statearr_61433_61479[(2)] = cljs_http.client.delete$);

(statearr_61433_61479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (17))){
var inst_61410 = (state_61420[(8)]);
var inst_61412 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61410);
var inst_61413 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61412) : re_frame.core.dispatch.call(null,inst_61412));
var state_61420__$1 = state_61420;
var statearr_61434_61480 = state_61420__$1;
(statearr_61434_61480[(2)] = inst_61413);

(statearr_61434_61480[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (3))){
var state_61420__$1 = state_61420;
var statearr_61435_61481 = state_61420__$1;
(statearr_61435_61481[(2)] = cljs_http.client.post);

(statearr_61435_61481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (12))){
var state_61420__$1 = state_61420;
var statearr_61436_61482 = state_61420__$1;
(statearr_61436_61482[(2)] = false);

(statearr_61436_61482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (2))){
var inst_61384 = (state_61420[(2)]);
var inst_61385 = (inst_61384.cljs$core$IFn$_invoke$arity$2 ? inst_61384.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61384.call(null,url,opts));
var state_61420__$1 = state_61420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61420__$1,(7),inst_61385);
} else {
if((state_val_61421 === (19))){
var inst_61418 = (state_61420[(2)]);
var state_61420__$1 = state_61420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61420__$1,inst_61418);
} else {
if((state_val_61421 === (11))){
var state_61420__$1 = state_61420;
var statearr_61437_61483 = state_61420__$1;
(statearr_61437_61483[(2)] = true);

(statearr_61437_61483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (9))){
var state_61420__$1 = state_61420;
var statearr_61438_61484 = state_61420__$1;
(statearr_61438_61484[(2)] = false);

(statearr_61438_61484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (5))){
var state_61420__$1 = state_61420;
var statearr_61439_61485 = state_61420__$1;
(statearr_61439_61485[(2)] = cljs_http.client.put);

(statearr_61439_61485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (14))){
var inst_61387 = (state_61420[(7)]);
var inst_61405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61387);
var state_61420__$1 = state_61420;
var statearr_61440_61486 = state_61420__$1;
(statearr_61440_61486[(2)] = inst_61405);

(statearr_61440_61486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (16))){
var inst_61408 = (state_61420[(9)]);
var inst_61408__$1 = (state_61420[(2)]);
var inst_61409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61408__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61420__$1 = (function (){var statearr_61441 = state_61420;
(statearr_61441[(9)] = inst_61408__$1);

(statearr_61441[(8)] = inst_61410);

return statearr_61441;
})();
if(cljs.core.truth_(inst_61409)){
var statearr_61442_61487 = state_61420__$1;
(statearr_61442_61487[(1)] = (17));

} else {
var statearr_61443_61488 = state_61420__$1;
(statearr_61443_61488[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (10))){
var inst_61403 = (state_61420[(2)]);
var state_61420__$1 = state_61420;
if(cljs.core.truth_(inst_61403)){
var statearr_61444_61489 = state_61420__$1;
(statearr_61444_61489[(1)] = (14));

} else {
var statearr_61445_61490 = state_61420__$1;
(statearr_61445_61490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (18))){
var inst_61408 = (state_61420[(9)]);
var inst_61415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61408);
var inst_61416 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61415) : re_frame.core.dispatch.call(null,inst_61415));
var state_61420__$1 = state_61420;
var statearr_61446_61491 = state_61420__$1;
(statearr_61446_61491[(2)] = inst_61416);

(statearr_61446_61491[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61421 === (8))){
var inst_61387 = (state_61420[(7)]);
var inst_61392 = inst_61387.cljs$lang$protocol_mask$partition0$;
var inst_61393 = (inst_61392 & (64));
var inst_61394 = inst_61387.cljs$core$ISeq$;
var inst_61395 = (cljs.core.PROTOCOL_SENTINEL === inst_61394);
var inst_61396 = ((inst_61393) || (inst_61395));
var state_61420__$1 = state_61420;
if(cljs.core.truth_(inst_61396)){
var statearr_61447_61492 = state_61420__$1;
(statearr_61447_61492[(1)] = (11));

} else {
var statearr_61448_61493 = state_61420__$1;
(statearr_61448_61493[(1)] = (12));

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
var statearr_61449 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61449[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61449[(1)] = (1));

return statearr_61449;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61420){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61420);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61450){if((e61450 instanceof Object)){
var ex__36951__auto__ = e61450;
var statearr_61451_61494 = state_61420;
(statearr_61451_61494[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61495 = state_61420;
state_61420 = G__61495;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61420){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61452 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61452[(6)] = c__37015__auto__);

return statearr_61452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61373_61465,G__61374_61466) : re_frame.core.reg_fx.call(null,G__61373_61465,G__61374_61466));
var G__61453_61496 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61454_61497 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61455){
var map__61456 = p__61455;
var map__61456__$1 = (((((!((map__61456 == null))))?(((((map__61456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61456):map__61456);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61456__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61456__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61456__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61456__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61458 = action;
var G__61458__$1 = (((G__61458 instanceof cljs.core.Keyword))?G__61458.fqn:null);
switch (G__61458__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61458__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61453_61496,G__61454_61497) : re_frame.core.reg_fx.call(null,G__61453_61496,G__61454_61497));

//# sourceMappingURL=athens.effects.js.map
