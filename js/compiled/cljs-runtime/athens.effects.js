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
var G__52195_52287 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__52196_52288 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52195_52287,G__52196_52288) : re_frame.core.reg_fx.call(null,G__52195_52287,G__52196_52288));
var G__52197_52289 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__52198_52290 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52197_52289,G__52198_52290) : re_frame.core.reg_fx.call(null,G__52197_52289,G__52198_52290));
var G__52199_52291 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__52200_52292 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52199_52291,G__52200_52292) : re_frame.core.reg_fx.call(null,G__52199_52291,G__52200_52292));
var G__52201_52293 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52202_52294 = (function (p__52203){
var map__52204 = p__52203;
var map__52204__$1 = (((((!((map__52204 == null))))?(((((map__52204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52204):map__52204);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_52248){
var state_val_52249 = (state_52248[(1)]);
if((state_val_52249 === (7))){
var inst_52215 = (state_52248[(7)]);
var inst_52215__$1 = (state_52248[(2)]);
var inst_52217 = (inst_52215__$1 == null);
var inst_52218 = cljs.core.not(inst_52217);
var state_52248__$1 = (function (){var statearr_52250 = state_52248;
(statearr_52250[(7)] = inst_52215__$1);

return statearr_52250;
})();
if(inst_52218){
var statearr_52251_52299 = state_52248__$1;
(statearr_52251_52299[(1)] = (8));

} else {
var statearr_52252_52300 = state_52248__$1;
(statearr_52252_52300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (1))){
var state_52248__$1 = state_52248;
var G__52253_52301 = method;
var G__52253_52302__$1 = (((G__52253_52301 instanceof cljs.core.Keyword))?G__52253_52301.fqn:null);
switch (G__52253_52302__$1) {
case "post":
var statearr_52254_52304 = state_52248__$1;
(statearr_52254_52304[(1)] = (3));


break;
case "get":
var statearr_52255_52306 = state_52248__$1;
(statearr_52255_52306[(1)] = (4));


break;
case "put":
var statearr_52256_52307 = state_52248__$1;
(statearr_52256_52307[(1)] = (5));


break;
case "delete":
var statearr_52257_52308 = state_52248__$1;
(statearr_52257_52308[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52253_52302__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (4))){
var state_52248__$1 = state_52248;
var statearr_52258_52309 = state_52248__$1;
(statearr_52258_52309[(2)] = cljs_http.client.get);

(statearr_52258_52309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (15))){
var inst_52215 = (state_52248[(7)]);
var state_52248__$1 = state_52248;
var statearr_52259_52310 = state_52248__$1;
(statearr_52259_52310[(2)] = inst_52215);

(statearr_52259_52310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (13))){
var inst_52228 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52260_52311 = state_52248__$1;
(statearr_52260_52311[(2)] = inst_52228);

(statearr_52260_52311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (6))){
var state_52248__$1 = state_52248;
var statearr_52261_52312 = state_52248__$1;
(statearr_52261_52312[(2)] = cljs_http.client.delete$);

(statearr_52261_52312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (17))){
var inst_52238 = (state_52248[(8)]);
var inst_52240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52238);
var inst_52241 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52240) : re_frame.core.dispatch.call(null,inst_52240));
var state_52248__$1 = state_52248;
var statearr_52262_52313 = state_52248__$1;
(statearr_52262_52313[(2)] = inst_52241);

(statearr_52262_52313[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (3))){
var state_52248__$1 = state_52248;
var statearr_52263_52314 = state_52248__$1;
(statearr_52263_52314[(2)] = cljs_http.client.post);

(statearr_52263_52314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (12))){
var state_52248__$1 = state_52248;
var statearr_52264_52315 = state_52248__$1;
(statearr_52264_52315[(2)] = false);

(statearr_52264_52315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (2))){
var inst_52212 = (state_52248[(2)]);
var inst_52213 = (inst_52212.cljs$core$IFn$_invoke$arity$2 ? inst_52212.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52212.call(null,url,opts));
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52248__$1,(7),inst_52213);
} else {
if((state_val_52249 === (19))){
var inst_52246 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52248__$1,inst_52246);
} else {
if((state_val_52249 === (11))){
var state_52248__$1 = state_52248;
var statearr_52265_52316 = state_52248__$1;
(statearr_52265_52316[(2)] = true);

(statearr_52265_52316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (9))){
var state_52248__$1 = state_52248;
var statearr_52266_52317 = state_52248__$1;
(statearr_52266_52317[(2)] = false);

(statearr_52266_52317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (5))){
var state_52248__$1 = state_52248;
var statearr_52267_52318 = state_52248__$1;
(statearr_52267_52318[(2)] = cljs_http.client.put);

(statearr_52267_52318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (14))){
var inst_52215 = (state_52248[(7)]);
var inst_52233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52215);
var state_52248__$1 = state_52248;
var statearr_52268_52319 = state_52248__$1;
(statearr_52268_52319[(2)] = inst_52233);

(statearr_52268_52319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (16))){
var inst_52236 = (state_52248[(9)]);
var inst_52236__$1 = (state_52248[(2)]);
var inst_52237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52236__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52236__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52248__$1 = (function (){var statearr_52269 = state_52248;
(statearr_52269[(9)] = inst_52236__$1);

(statearr_52269[(8)] = inst_52238);

return statearr_52269;
})();
if(cljs.core.truth_(inst_52237)){
var statearr_52270_52320 = state_52248__$1;
(statearr_52270_52320[(1)] = (17));

} else {
var statearr_52271_52321 = state_52248__$1;
(statearr_52271_52321[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (10))){
var inst_52231 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52231)){
var statearr_52272_52322 = state_52248__$1;
(statearr_52272_52322[(1)] = (14));

} else {
var statearr_52273_52323 = state_52248__$1;
(statearr_52273_52323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (18))){
var inst_52236 = (state_52248[(9)]);
var inst_52243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52236);
var inst_52244 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52243) : re_frame.core.dispatch.call(null,inst_52243));
var state_52248__$1 = state_52248;
var statearr_52274_52324 = state_52248__$1;
(statearr_52274_52324[(2)] = inst_52244);

(statearr_52274_52324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (8))){
var inst_52215 = (state_52248[(7)]);
var inst_52220 = inst_52215.cljs$lang$protocol_mask$partition0$;
var inst_52221 = (inst_52220 & (64));
var inst_52222 = inst_52215.cljs$core$ISeq$;
var inst_52223 = (cljs.core.PROTOCOL_SENTINEL === inst_52222);
var inst_52224 = ((inst_52221) || (inst_52223));
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52224)){
var statearr_52275_52325 = state_52248__$1;
(statearr_52275_52325[(1)] = (11));

} else {
var statearr_52276_52326 = state_52248__$1;
(statearr_52276_52326[(1)] = (12));

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
var athens$effects$state_machine__38789__auto__ = null;
var athens$effects$state_machine__38789__auto____0 = (function (){
var statearr_52277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52277[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52277[(1)] = (1));

return statearr_52277;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52248){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52248);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52278){if((e52278 instanceof Object)){
var ex__38792__auto__ = e52278;
var statearr_52279_52327 = state_52248;
(statearr_52279_52327[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52328 = state_52248;
state_52248 = G__52328;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52248){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_52280 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_52280[(6)] = c__38856__auto__);

return statearr_52280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52201_52293,G__52202_52294) : re_frame.core.reg_fx.call(null,G__52201_52293,G__52202_52294));
var G__52281_52329 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52282_52330 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52283){
var map__52284 = p__52283;
var map__52284__$1 = (((((!((map__52284 == null))))?(((((map__52284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52284):map__52284);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52286 = action;
var G__52286__$1 = (((G__52286 instanceof cljs.core.Keyword))?G__52286.fqn:null);
switch (G__52286__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52286__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52281_52329,G__52282_52330) : re_frame.core.reg_fx.call(null,G__52281_52329,G__52282_52330));

//# sourceMappingURL=athens.effects.js.map
