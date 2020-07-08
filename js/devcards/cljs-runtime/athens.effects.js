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
var G__61353_61445 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61354_61446 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61353_61445,G__61354_61446) : re_frame.core.reg_fx.call(null,G__61353_61445,G__61354_61446));
var G__61355_61447 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61356_61448 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61355_61447,G__61356_61448) : re_frame.core.reg_fx.call(null,G__61355_61447,G__61356_61448));
var G__61357_61449 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61358_61450 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61357_61449,G__61358_61450) : re_frame.core.reg_fx.call(null,G__61357_61449,G__61358_61450));
var G__61359_61451 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61360_61452 = (function (p__61361){
var map__61362 = p__61361;
var map__61362__$1 = (((((!((map__61362 == null))))?(((((map__61362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61362):map__61362);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61406){
var state_val_61407 = (state_61406[(1)]);
if((state_val_61407 === (7))){
var inst_61373 = (state_61406[(7)]);
var inst_61373__$1 = (state_61406[(2)]);
var inst_61375 = (inst_61373__$1 == null);
var inst_61376 = cljs.core.not(inst_61375);
var state_61406__$1 = (function (){var statearr_61408 = state_61406;
(statearr_61408[(7)] = inst_61373__$1);

return statearr_61408;
})();
if(inst_61376){
var statearr_61409_61453 = state_61406__$1;
(statearr_61409_61453[(1)] = (8));

} else {
var statearr_61410_61454 = state_61406__$1;
(statearr_61410_61454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (1))){
var state_61406__$1 = state_61406;
var G__61411_61455 = method;
var G__61411_61456__$1 = (((G__61411_61455 instanceof cljs.core.Keyword))?G__61411_61455.fqn:null);
switch (G__61411_61456__$1) {
case "post":
var statearr_61412_61458 = state_61406__$1;
(statearr_61412_61458[(1)] = (3));


break;
case "get":
var statearr_61413_61459 = state_61406__$1;
(statearr_61413_61459[(1)] = (4));


break;
case "put":
var statearr_61414_61460 = state_61406__$1;
(statearr_61414_61460[(1)] = (5));


break;
case "delete":
var statearr_61415_61461 = state_61406__$1;
(statearr_61415_61461[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61411_61456__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (4))){
var state_61406__$1 = state_61406;
var statearr_61416_61462 = state_61406__$1;
(statearr_61416_61462[(2)] = cljs_http.client.get);

(statearr_61416_61462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (15))){
var inst_61373 = (state_61406[(7)]);
var state_61406__$1 = state_61406;
var statearr_61417_61463 = state_61406__$1;
(statearr_61417_61463[(2)] = inst_61373);

(statearr_61417_61463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (13))){
var inst_61386 = (state_61406[(2)]);
var state_61406__$1 = state_61406;
var statearr_61418_61464 = state_61406__$1;
(statearr_61418_61464[(2)] = inst_61386);

(statearr_61418_61464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (6))){
var state_61406__$1 = state_61406;
var statearr_61419_61465 = state_61406__$1;
(statearr_61419_61465[(2)] = cljs_http.client.delete$);

(statearr_61419_61465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (17))){
var inst_61396 = (state_61406[(8)]);
var inst_61398 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61396);
var inst_61399 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61398) : re_frame.core.dispatch.call(null,inst_61398));
var state_61406__$1 = state_61406;
var statearr_61420_61466 = state_61406__$1;
(statearr_61420_61466[(2)] = inst_61399);

(statearr_61420_61466[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (3))){
var state_61406__$1 = state_61406;
var statearr_61421_61467 = state_61406__$1;
(statearr_61421_61467[(2)] = cljs_http.client.post);

(statearr_61421_61467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (12))){
var state_61406__$1 = state_61406;
var statearr_61422_61468 = state_61406__$1;
(statearr_61422_61468[(2)] = false);

(statearr_61422_61468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (2))){
var inst_61370 = (state_61406[(2)]);
var inst_61371 = (inst_61370.cljs$core$IFn$_invoke$arity$2 ? inst_61370.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61370.call(null,url,opts));
var state_61406__$1 = state_61406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61406__$1,(7),inst_61371);
} else {
if((state_val_61407 === (19))){
var inst_61404 = (state_61406[(2)]);
var state_61406__$1 = state_61406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61406__$1,inst_61404);
} else {
if((state_val_61407 === (11))){
var state_61406__$1 = state_61406;
var statearr_61423_61469 = state_61406__$1;
(statearr_61423_61469[(2)] = true);

(statearr_61423_61469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (9))){
var state_61406__$1 = state_61406;
var statearr_61424_61470 = state_61406__$1;
(statearr_61424_61470[(2)] = false);

(statearr_61424_61470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (5))){
var state_61406__$1 = state_61406;
var statearr_61425_61471 = state_61406__$1;
(statearr_61425_61471[(2)] = cljs_http.client.put);

(statearr_61425_61471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (14))){
var inst_61373 = (state_61406[(7)]);
var inst_61391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61373);
var state_61406__$1 = state_61406;
var statearr_61426_61472 = state_61406__$1;
(statearr_61426_61472[(2)] = inst_61391);

(statearr_61426_61472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (16))){
var inst_61394 = (state_61406[(9)]);
var inst_61394__$1 = (state_61406[(2)]);
var inst_61395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61394__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61394__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61406__$1 = (function (){var statearr_61427 = state_61406;
(statearr_61427[(8)] = inst_61396);

(statearr_61427[(9)] = inst_61394__$1);

return statearr_61427;
})();
if(cljs.core.truth_(inst_61395)){
var statearr_61428_61473 = state_61406__$1;
(statearr_61428_61473[(1)] = (17));

} else {
var statearr_61429_61474 = state_61406__$1;
(statearr_61429_61474[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (10))){
var inst_61389 = (state_61406[(2)]);
var state_61406__$1 = state_61406;
if(cljs.core.truth_(inst_61389)){
var statearr_61430_61475 = state_61406__$1;
(statearr_61430_61475[(1)] = (14));

} else {
var statearr_61431_61476 = state_61406__$1;
(statearr_61431_61476[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (18))){
var inst_61394 = (state_61406[(9)]);
var inst_61401 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61394);
var inst_61402 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61401) : re_frame.core.dispatch.call(null,inst_61401));
var state_61406__$1 = state_61406;
var statearr_61432_61477 = state_61406__$1;
(statearr_61432_61477[(2)] = inst_61402);

(statearr_61432_61477[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61407 === (8))){
var inst_61373 = (state_61406[(7)]);
var inst_61378 = inst_61373.cljs$lang$protocol_mask$partition0$;
var inst_61379 = (inst_61378 & (64));
var inst_61380 = inst_61373.cljs$core$ISeq$;
var inst_61381 = (cljs.core.PROTOCOL_SENTINEL === inst_61380);
var inst_61382 = ((inst_61379) || (inst_61381));
var state_61406__$1 = state_61406;
if(cljs.core.truth_(inst_61382)){
var statearr_61433_61478 = state_61406__$1;
(statearr_61433_61478[(1)] = (11));

} else {
var statearr_61434_61479 = state_61406__$1;
(statearr_61434_61479[(1)] = (12));

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
var statearr_61435 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61435[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61435[(1)] = (1));

return statearr_61435;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61406){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61406);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61436){if((e61436 instanceof Object)){
var ex__36951__auto__ = e61436;
var statearr_61437_61480 = state_61406;
(statearr_61437_61480[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61481 = state_61406;
state_61406 = G__61481;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61406){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61438 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61438[(6)] = c__37015__auto__);

return statearr_61438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61359_61451,G__61360_61452) : re_frame.core.reg_fx.call(null,G__61359_61451,G__61360_61452));
var G__61439_61482 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61440_61483 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61441){
var map__61442 = p__61441;
var map__61442__$1 = (((((!((map__61442 == null))))?(((((map__61442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61442):map__61442);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61444 = action;
var G__61444__$1 = (((G__61444 instanceof cljs.core.Keyword))?G__61444.fqn:null);
switch (G__61444__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61444__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61439_61482,G__61440_61483) : re_frame.core.reg_fx.call(null,G__61439_61482,G__61440_61483));

//# sourceMappingURL=athens.effects.js.map
