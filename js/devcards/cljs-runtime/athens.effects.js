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
var G__61439_61531 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61440_61532 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61439_61531,G__61440_61532) : re_frame.core.reg_fx.call(null,G__61439_61531,G__61440_61532));
var G__61441_61533 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61442_61534 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61441_61533,G__61442_61534) : re_frame.core.reg_fx.call(null,G__61441_61533,G__61442_61534));
var G__61443_61535 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61444_61536 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61443_61535,G__61444_61536) : re_frame.core.reg_fx.call(null,G__61443_61535,G__61444_61536));
var G__61445_61537 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61446_61538 = (function (p__61447){
var map__61448 = p__61447;
var map__61448__$1 = (((((!((map__61448 == null))))?(((((map__61448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61448):map__61448);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61492){
var state_val_61493 = (state_61492[(1)]);
if((state_val_61493 === (7))){
var inst_61459 = (state_61492[(7)]);
var inst_61459__$1 = (state_61492[(2)]);
var inst_61461 = (inst_61459__$1 == null);
var inst_61462 = cljs.core.not(inst_61461);
var state_61492__$1 = (function (){var statearr_61494 = state_61492;
(statearr_61494[(7)] = inst_61459__$1);

return statearr_61494;
})();
if(inst_61462){
var statearr_61495_61539 = state_61492__$1;
(statearr_61495_61539[(1)] = (8));

} else {
var statearr_61496_61540 = state_61492__$1;
(statearr_61496_61540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (1))){
var state_61492__$1 = state_61492;
var G__61497_61541 = method;
var G__61497_61542__$1 = (((G__61497_61541 instanceof cljs.core.Keyword))?G__61497_61541.fqn:null);
switch (G__61497_61542__$1) {
case "post":
var statearr_61498_61544 = state_61492__$1;
(statearr_61498_61544[(1)] = (3));


break;
case "get":
var statearr_61499_61545 = state_61492__$1;
(statearr_61499_61545[(1)] = (4));


break;
case "put":
var statearr_61500_61546 = state_61492__$1;
(statearr_61500_61546[(1)] = (5));


break;
case "delete":
var statearr_61501_61547 = state_61492__$1;
(statearr_61501_61547[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61497_61542__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (4))){
var state_61492__$1 = state_61492;
var statearr_61502_61548 = state_61492__$1;
(statearr_61502_61548[(2)] = cljs_http.client.get);

(statearr_61502_61548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (15))){
var inst_61459 = (state_61492[(7)]);
var state_61492__$1 = state_61492;
var statearr_61503_61549 = state_61492__$1;
(statearr_61503_61549[(2)] = inst_61459);

(statearr_61503_61549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (13))){
var inst_61472 = (state_61492[(2)]);
var state_61492__$1 = state_61492;
var statearr_61504_61550 = state_61492__$1;
(statearr_61504_61550[(2)] = inst_61472);

(statearr_61504_61550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (6))){
var state_61492__$1 = state_61492;
var statearr_61505_61551 = state_61492__$1;
(statearr_61505_61551[(2)] = cljs_http.client.delete$);

(statearr_61505_61551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (17))){
var inst_61482 = (state_61492[(8)]);
var inst_61484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61482);
var inst_61485 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61484) : re_frame.core.dispatch.call(null,inst_61484));
var state_61492__$1 = state_61492;
var statearr_61506_61552 = state_61492__$1;
(statearr_61506_61552[(2)] = inst_61485);

(statearr_61506_61552[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (3))){
var state_61492__$1 = state_61492;
var statearr_61507_61553 = state_61492__$1;
(statearr_61507_61553[(2)] = cljs_http.client.post);

(statearr_61507_61553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (12))){
var state_61492__$1 = state_61492;
var statearr_61508_61554 = state_61492__$1;
(statearr_61508_61554[(2)] = false);

(statearr_61508_61554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (2))){
var inst_61456 = (state_61492[(2)]);
var inst_61457 = (inst_61456.cljs$core$IFn$_invoke$arity$2 ? inst_61456.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61456.call(null,url,opts));
var state_61492__$1 = state_61492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61492__$1,(7),inst_61457);
} else {
if((state_val_61493 === (19))){
var inst_61490 = (state_61492[(2)]);
var state_61492__$1 = state_61492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61492__$1,inst_61490);
} else {
if((state_val_61493 === (11))){
var state_61492__$1 = state_61492;
var statearr_61509_61555 = state_61492__$1;
(statearr_61509_61555[(2)] = true);

(statearr_61509_61555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (9))){
var state_61492__$1 = state_61492;
var statearr_61510_61556 = state_61492__$1;
(statearr_61510_61556[(2)] = false);

(statearr_61510_61556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (5))){
var state_61492__$1 = state_61492;
var statearr_61511_61557 = state_61492__$1;
(statearr_61511_61557[(2)] = cljs_http.client.put);

(statearr_61511_61557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (14))){
var inst_61459 = (state_61492[(7)]);
var inst_61477 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61459);
var state_61492__$1 = state_61492;
var statearr_61512_61558 = state_61492__$1;
(statearr_61512_61558[(2)] = inst_61477);

(statearr_61512_61558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (16))){
var inst_61480 = (state_61492[(9)]);
var inst_61480__$1 = (state_61492[(2)]);
var inst_61481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61480__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61480__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61492__$1 = (function (){var statearr_61513 = state_61492;
(statearr_61513[(8)] = inst_61482);

(statearr_61513[(9)] = inst_61480__$1);

return statearr_61513;
})();
if(cljs.core.truth_(inst_61481)){
var statearr_61514_61559 = state_61492__$1;
(statearr_61514_61559[(1)] = (17));

} else {
var statearr_61515_61560 = state_61492__$1;
(statearr_61515_61560[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (10))){
var inst_61475 = (state_61492[(2)]);
var state_61492__$1 = state_61492;
if(cljs.core.truth_(inst_61475)){
var statearr_61516_61561 = state_61492__$1;
(statearr_61516_61561[(1)] = (14));

} else {
var statearr_61517_61562 = state_61492__$1;
(statearr_61517_61562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (18))){
var inst_61480 = (state_61492[(9)]);
var inst_61487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61480);
var inst_61488 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61487) : re_frame.core.dispatch.call(null,inst_61487));
var state_61492__$1 = state_61492;
var statearr_61518_61563 = state_61492__$1;
(statearr_61518_61563[(2)] = inst_61488);

(statearr_61518_61563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (8))){
var inst_61459 = (state_61492[(7)]);
var inst_61464 = inst_61459.cljs$lang$protocol_mask$partition0$;
var inst_61465 = (inst_61464 & (64));
var inst_61466 = inst_61459.cljs$core$ISeq$;
var inst_61467 = (cljs.core.PROTOCOL_SENTINEL === inst_61466);
var inst_61468 = ((inst_61465) || (inst_61467));
var state_61492__$1 = state_61492;
if(cljs.core.truth_(inst_61468)){
var statearr_61519_61564 = state_61492__$1;
(statearr_61519_61564[(1)] = (11));

} else {
var statearr_61520_61565 = state_61492__$1;
(statearr_61520_61565[(1)] = (12));

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
var statearr_61521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61521[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61521[(1)] = (1));

return statearr_61521;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61492){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61492);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61522){if((e61522 instanceof Object)){
var ex__36951__auto__ = e61522;
var statearr_61523_61566 = state_61492;
(statearr_61523_61566[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61567 = state_61492;
state_61492 = G__61567;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61492){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61524 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61524[(6)] = c__37015__auto__);

return statearr_61524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61445_61537,G__61446_61538) : re_frame.core.reg_fx.call(null,G__61445_61537,G__61446_61538));
var G__61525_61568 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61526_61569 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61527){
var map__61528 = p__61527;
var map__61528__$1 = (((((!((map__61528 == null))))?(((((map__61528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61528):map__61528);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61528__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61530 = action;
var G__61530__$1 = (((G__61530 instanceof cljs.core.Keyword))?G__61530.fqn:null);
switch (G__61530__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61530__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61525_61568,G__61526_61569) : re_frame.core.reg_fx.call(null,G__61525_61568,G__61526_61569));

//# sourceMappingURL=athens.effects.js.map
