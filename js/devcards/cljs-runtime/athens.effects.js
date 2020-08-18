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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60363){
var map__60364 = p__60363;
var map__60364__$1 = (((((!((map__60364 == null))))?(((((map__60364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60364):map__60364);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_60408){
var state_val_60409 = (state_60408[(1)]);
if((state_val_60409 === (7))){
var inst_60375 = (state_60408[(7)]);
var inst_60375__$1 = (state_60408[(2)]);
var inst_60377 = (inst_60375__$1 == null);
var inst_60378 = cljs.core.not(inst_60377);
var state_60408__$1 = (function (){var statearr_60410 = state_60408;
(statearr_60410[(7)] = inst_60375__$1);

return statearr_60410;
})();
if(inst_60378){
var statearr_60411_60446 = state_60408__$1;
(statearr_60411_60446[(1)] = (8));

} else {
var statearr_60412_60447 = state_60408__$1;
(statearr_60412_60447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (1))){
var state_60408__$1 = state_60408;
var G__60413_60448 = method;
var G__60413_60449__$1 = (((G__60413_60448 instanceof cljs.core.Keyword))?G__60413_60448.fqn:null);
switch (G__60413_60449__$1) {
case "post":
var statearr_60414_60451 = state_60408__$1;
(statearr_60414_60451[(1)] = (3));


break;
case "get":
var statearr_60415_60452 = state_60408__$1;
(statearr_60415_60452[(1)] = (4));


break;
case "put":
var statearr_60416_60453 = state_60408__$1;
(statearr_60416_60453[(1)] = (5));


break;
case "delete":
var statearr_60417_60454 = state_60408__$1;
(statearr_60417_60454[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60413_60449__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (4))){
var state_60408__$1 = state_60408;
var statearr_60418_60455 = state_60408__$1;
(statearr_60418_60455[(2)] = cljs_http.client.get);

(statearr_60418_60455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (15))){
var inst_60375 = (state_60408[(7)]);
var state_60408__$1 = state_60408;
var statearr_60419_60456 = state_60408__$1;
(statearr_60419_60456[(2)] = inst_60375);

(statearr_60419_60456[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (13))){
var inst_60388 = (state_60408[(2)]);
var state_60408__$1 = state_60408;
var statearr_60420_60457 = state_60408__$1;
(statearr_60420_60457[(2)] = inst_60388);

(statearr_60420_60457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (6))){
var state_60408__$1 = state_60408;
var statearr_60421_60458 = state_60408__$1;
(statearr_60421_60458[(2)] = cljs_http.client.delete$);

(statearr_60421_60458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (17))){
var inst_60398 = (state_60408[(8)]);
var inst_60400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60398);
var inst_60401 = re_frame.core.dispatch(inst_60400);
var state_60408__$1 = state_60408;
var statearr_60422_60459 = state_60408__$1;
(statearr_60422_60459[(2)] = inst_60401);

(statearr_60422_60459[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (3))){
var state_60408__$1 = state_60408;
var statearr_60423_60460 = state_60408__$1;
(statearr_60423_60460[(2)] = cljs_http.client.post);

(statearr_60423_60460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (12))){
var state_60408__$1 = state_60408;
var statearr_60424_60461 = state_60408__$1;
(statearr_60424_60461[(2)] = false);

(statearr_60424_60461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (2))){
var inst_60372 = (state_60408[(2)]);
var inst_60373 = (inst_60372.cljs$core$IFn$_invoke$arity$2 ? inst_60372.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60372.call(null,url,opts));
var state_60408__$1 = state_60408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60408__$1,(7),inst_60373);
} else {
if((state_val_60409 === (19))){
var inst_60406 = (state_60408[(2)]);
var state_60408__$1 = state_60408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60408__$1,inst_60406);
} else {
if((state_val_60409 === (11))){
var state_60408__$1 = state_60408;
var statearr_60425_60462 = state_60408__$1;
(statearr_60425_60462[(2)] = true);

(statearr_60425_60462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (9))){
var state_60408__$1 = state_60408;
var statearr_60426_60463 = state_60408__$1;
(statearr_60426_60463[(2)] = false);

(statearr_60426_60463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (5))){
var state_60408__$1 = state_60408;
var statearr_60427_60464 = state_60408__$1;
(statearr_60427_60464[(2)] = cljs_http.client.put);

(statearr_60427_60464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (14))){
var inst_60375 = (state_60408[(7)]);
var inst_60393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60375);
var state_60408__$1 = state_60408;
var statearr_60428_60465 = state_60408__$1;
(statearr_60428_60465[(2)] = inst_60393);

(statearr_60428_60465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (16))){
var inst_60396 = (state_60408[(9)]);
var inst_60396__$1 = (state_60408[(2)]);
var inst_60397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60396__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60396__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60408__$1 = (function (){var statearr_60429 = state_60408;
(statearr_60429[(8)] = inst_60398);

(statearr_60429[(9)] = inst_60396__$1);

return statearr_60429;
})();
if(cljs.core.truth_(inst_60397)){
var statearr_60430_60466 = state_60408__$1;
(statearr_60430_60466[(1)] = (17));

} else {
var statearr_60431_60467 = state_60408__$1;
(statearr_60431_60467[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (10))){
var inst_60391 = (state_60408[(2)]);
var state_60408__$1 = state_60408;
if(cljs.core.truth_(inst_60391)){
var statearr_60432_60468 = state_60408__$1;
(statearr_60432_60468[(1)] = (14));

} else {
var statearr_60433_60469 = state_60408__$1;
(statearr_60433_60469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (18))){
var inst_60396 = (state_60408[(9)]);
var inst_60403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60396);
var inst_60404 = re_frame.core.dispatch(inst_60403);
var state_60408__$1 = state_60408;
var statearr_60434_60470 = state_60408__$1;
(statearr_60434_60470[(2)] = inst_60404);

(statearr_60434_60470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60409 === (8))){
var inst_60375 = (state_60408[(7)]);
var inst_60380 = inst_60375.cljs$lang$protocol_mask$partition0$;
var inst_60381 = (inst_60380 & (64));
var inst_60382 = inst_60375.cljs$core$ISeq$;
var inst_60383 = (cljs.core.PROTOCOL_SENTINEL === inst_60382);
var inst_60384 = ((inst_60381) || (inst_60383));
var state_60408__$1 = state_60408;
if(cljs.core.truth_(inst_60384)){
var statearr_60435_60471 = state_60408__$1;
(statearr_60435_60471[(1)] = (11));

} else {
var statearr_60436_60472 = state_60408__$1;
(statearr_60436_60472[(1)] = (12));

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
var statearr_60437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60437[(0)] = athens$effects$state_machine__42493__auto__);

(statearr_60437[(1)] = (1));

return statearr_60437;
});
var athens$effects$state_machine__42493__auto____1 = (function (state_60408){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_60408);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e60438){var ex__42496__auto__ = e60438;
var statearr_60439_60473 = state_60408;
(statearr_60439_60473[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_60408[(4)]))){
var statearr_60440_60474 = state_60408;
(statearr_60440_60474[(1)] = cljs.core.first((state_60408[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60475 = state_60408;
state_60408 = G__60475;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
athens$effects$state_machine__42493__auto__ = function(state_60408){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42493__auto____0.call(this);
case 1:
return athens$effects$state_machine__42493__auto____1.call(this,state_60408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42493__auto____0;
athens$effects$state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42493__auto____1;
return athens$effects$state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_60441 = f__42529__auto__();
(statearr_60441[(6)] = c__42528__auto__);

return statearr_60441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60442){
var map__60443 = p__60442;
var map__60443__$1 = (((((!((map__60443 == null))))?(((((map__60443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60443):map__60443);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60443__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60443__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60443__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60445 = action;
var G__60445__$1 = (((G__60445 instanceof cljs.core.Keyword))?G__60445.fqn:null);
switch (G__60445__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60445__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
