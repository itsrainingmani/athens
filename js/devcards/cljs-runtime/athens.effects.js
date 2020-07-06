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
var G__61314_61406 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61315_61407 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61314_61406,G__61315_61407) : re_frame.core.reg_fx.call(null,G__61314_61406,G__61315_61407));
var G__61316_61408 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61317_61409 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61316_61408,G__61317_61409) : re_frame.core.reg_fx.call(null,G__61316_61408,G__61317_61409));
var G__61318_61410 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61319_61411 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61318_61410,G__61319_61411) : re_frame.core.reg_fx.call(null,G__61318_61410,G__61319_61411));
var G__61320_61412 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61321_61413 = (function (p__61322){
var map__61323 = p__61322;
var map__61323__$1 = (((((!((map__61323 == null))))?(((((map__61323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61323):map__61323);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_61367){
var state_val_61368 = (state_61367[(1)]);
if((state_val_61368 === (7))){
var inst_61334 = (state_61367[(7)]);
var inst_61334__$1 = (state_61367[(2)]);
var inst_61336 = (inst_61334__$1 == null);
var inst_61337 = cljs.core.not(inst_61336);
var state_61367__$1 = (function (){var statearr_61369 = state_61367;
(statearr_61369[(7)] = inst_61334__$1);

return statearr_61369;
})();
if(inst_61337){
var statearr_61370_61414 = state_61367__$1;
(statearr_61370_61414[(1)] = (8));

} else {
var statearr_61371_61415 = state_61367__$1;
(statearr_61371_61415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (1))){
var state_61367__$1 = state_61367;
var G__61372_61416 = method;
var G__61372_61417__$1 = (((G__61372_61416 instanceof cljs.core.Keyword))?G__61372_61416.fqn:null);
switch (G__61372_61417__$1) {
case "post":
var statearr_61373_61419 = state_61367__$1;
(statearr_61373_61419[(1)] = (3));


break;
case "get":
var statearr_61374_61420 = state_61367__$1;
(statearr_61374_61420[(1)] = (4));


break;
case "put":
var statearr_61375_61421 = state_61367__$1;
(statearr_61375_61421[(1)] = (5));


break;
case "delete":
var statearr_61376_61422 = state_61367__$1;
(statearr_61376_61422[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61372_61417__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (4))){
var state_61367__$1 = state_61367;
var statearr_61377_61423 = state_61367__$1;
(statearr_61377_61423[(2)] = cljs_http.client.get);

(statearr_61377_61423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (15))){
var inst_61334 = (state_61367[(7)]);
var state_61367__$1 = state_61367;
var statearr_61378_61424 = state_61367__$1;
(statearr_61378_61424[(2)] = inst_61334);

(statearr_61378_61424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (13))){
var inst_61347 = (state_61367[(2)]);
var state_61367__$1 = state_61367;
var statearr_61379_61425 = state_61367__$1;
(statearr_61379_61425[(2)] = inst_61347);

(statearr_61379_61425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (6))){
var state_61367__$1 = state_61367;
var statearr_61380_61426 = state_61367__$1;
(statearr_61380_61426[(2)] = cljs_http.client.delete$);

(statearr_61380_61426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (17))){
var inst_61357 = (state_61367[(8)]);
var inst_61359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61357);
var inst_61360 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61359) : re_frame.core.dispatch.call(null,inst_61359));
var state_61367__$1 = state_61367;
var statearr_61381_61427 = state_61367__$1;
(statearr_61381_61427[(2)] = inst_61360);

(statearr_61381_61427[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (3))){
var state_61367__$1 = state_61367;
var statearr_61382_61428 = state_61367__$1;
(statearr_61382_61428[(2)] = cljs_http.client.post);

(statearr_61382_61428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (12))){
var state_61367__$1 = state_61367;
var statearr_61383_61429 = state_61367__$1;
(statearr_61383_61429[(2)] = false);

(statearr_61383_61429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (2))){
var inst_61331 = (state_61367[(2)]);
var inst_61332 = (inst_61331.cljs$core$IFn$_invoke$arity$2 ? inst_61331.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61331.call(null,url,opts));
var state_61367__$1 = state_61367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61367__$1,(7),inst_61332);
} else {
if((state_val_61368 === (19))){
var inst_61365 = (state_61367[(2)]);
var state_61367__$1 = state_61367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61367__$1,inst_61365);
} else {
if((state_val_61368 === (11))){
var state_61367__$1 = state_61367;
var statearr_61384_61430 = state_61367__$1;
(statearr_61384_61430[(2)] = true);

(statearr_61384_61430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (9))){
var state_61367__$1 = state_61367;
var statearr_61385_61431 = state_61367__$1;
(statearr_61385_61431[(2)] = false);

(statearr_61385_61431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (5))){
var state_61367__$1 = state_61367;
var statearr_61386_61432 = state_61367__$1;
(statearr_61386_61432[(2)] = cljs_http.client.put);

(statearr_61386_61432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (14))){
var inst_61334 = (state_61367[(7)]);
var inst_61352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61334);
var state_61367__$1 = state_61367;
var statearr_61387_61433 = state_61367__$1;
(statearr_61387_61433[(2)] = inst_61352);

(statearr_61387_61433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (16))){
var inst_61355 = (state_61367[(9)]);
var inst_61355__$1 = (state_61367[(2)]);
var inst_61356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61355__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61355__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61367__$1 = (function (){var statearr_61388 = state_61367;
(statearr_61388[(9)] = inst_61355__$1);

(statearr_61388[(8)] = inst_61357);

return statearr_61388;
})();
if(cljs.core.truth_(inst_61356)){
var statearr_61389_61434 = state_61367__$1;
(statearr_61389_61434[(1)] = (17));

} else {
var statearr_61390_61435 = state_61367__$1;
(statearr_61390_61435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (10))){
var inst_61350 = (state_61367[(2)]);
var state_61367__$1 = state_61367;
if(cljs.core.truth_(inst_61350)){
var statearr_61391_61436 = state_61367__$1;
(statearr_61391_61436[(1)] = (14));

} else {
var statearr_61392_61437 = state_61367__$1;
(statearr_61392_61437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (18))){
var inst_61355 = (state_61367[(9)]);
var inst_61362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61355);
var inst_61363 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61362) : re_frame.core.dispatch.call(null,inst_61362));
var state_61367__$1 = state_61367;
var statearr_61393_61438 = state_61367__$1;
(statearr_61393_61438[(2)] = inst_61363);

(statearr_61393_61438[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61368 === (8))){
var inst_61334 = (state_61367[(7)]);
var inst_61339 = inst_61334.cljs$lang$protocol_mask$partition0$;
var inst_61340 = (inst_61339 & (64));
var inst_61341 = inst_61334.cljs$core$ISeq$;
var inst_61342 = (cljs.core.PROTOCOL_SENTINEL === inst_61341);
var inst_61343 = ((inst_61340) || (inst_61342));
var state_61367__$1 = state_61367;
if(cljs.core.truth_(inst_61343)){
var statearr_61394_61439 = state_61367__$1;
(statearr_61394_61439[(1)] = (11));

} else {
var statearr_61395_61440 = state_61367__$1;
(statearr_61395_61440[(1)] = (12));

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
var athens$effects$state_machine__36932__auto__ = null;
var athens$effects$state_machine__36932__auto____0 = (function (){
var statearr_61396 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61396[(0)] = athens$effects$state_machine__36932__auto__);

(statearr_61396[(1)] = (1));

return statearr_61396;
});
var athens$effects$state_machine__36932__auto____1 = (function (state_61367){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_61367);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e61397){if((e61397 instanceof Object)){
var ex__36935__auto__ = e61397;
var statearr_61398_61441 = state_61367;
(statearr_61398_61441[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61442 = state_61367;
state_61367 = G__61442;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
athens$effects$state_machine__36932__auto__ = function(state_61367){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36932__auto____0.call(this);
case 1:
return athens$effects$state_machine__36932__auto____1.call(this,state_61367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36932__auto____0;
athens$effects$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36932__auto____1;
return athens$effects$state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_61399 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_61399[(6)] = c__36999__auto__);

return statearr_61399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61320_61412,G__61321_61413) : re_frame.core.reg_fx.call(null,G__61320_61412,G__61321_61413));
var G__61400_61443 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61401_61444 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61402){
var map__61403 = p__61402;
var map__61403__$1 = (((((!((map__61403 == null))))?(((((map__61403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61403):map__61403);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61405 = action;
var G__61405__$1 = (((G__61405 instanceof cljs.core.Keyword))?G__61405.fqn:null);
switch (G__61405__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61405__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61400_61443,G__61401_61444) : re_frame.core.reg_fx.call(null,G__61400_61443,G__61401_61444));

//# sourceMappingURL=athens.effects.js.map
