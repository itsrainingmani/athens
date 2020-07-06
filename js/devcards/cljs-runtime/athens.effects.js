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
var G__83099_83191 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__83100_83192 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83099_83191,G__83100_83192) : re_frame.core.reg_fx.call(null,G__83099_83191,G__83100_83192));
var G__83101_83193 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__83102_83194 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83101_83193,G__83102_83194) : re_frame.core.reg_fx.call(null,G__83101_83193,G__83102_83194));
var G__83103_83195 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__83104_83196 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83103_83195,G__83104_83196) : re_frame.core.reg_fx.call(null,G__83103_83195,G__83104_83196));
var G__83105_83197 = new cljs.core.Keyword(null,"http","http",382524695);
var G__83106_83198 = (function (p__83107){
var map__83108 = p__83107;
var map__83108__$1 = (((((!((map__83108 == null))))?(((((map__83108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83108):map__83108);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83108__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83108__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83108__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83108__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83108__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__46094__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_83152){
var state_val_83153 = (state_83152[(1)]);
if((state_val_83153 === (7))){
var inst_83119 = (state_83152[(7)]);
var inst_83119__$1 = (state_83152[(2)]);
var inst_83121 = (inst_83119__$1 == null);
var inst_83122 = cljs.core.not(inst_83121);
var state_83152__$1 = (function (){var statearr_83154 = state_83152;
(statearr_83154[(7)] = inst_83119__$1);

return statearr_83154;
})();
if(inst_83122){
var statearr_83155_83199 = state_83152__$1;
(statearr_83155_83199[(1)] = (8));

} else {
var statearr_83156_83200 = state_83152__$1;
(statearr_83156_83200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (1))){
var state_83152__$1 = state_83152;
var G__83157_83201 = method;
var G__83157_83202__$1 = (((G__83157_83201 instanceof cljs.core.Keyword))?G__83157_83201.fqn:null);
switch (G__83157_83202__$1) {
case "post":
var statearr_83158_83204 = state_83152__$1;
(statearr_83158_83204[(1)] = (3));


break;
case "get":
var statearr_83159_83205 = state_83152__$1;
(statearr_83159_83205[(1)] = (4));


break;
case "put":
var statearr_83160_83206 = state_83152__$1;
(statearr_83160_83206[(1)] = (5));


break;
case "delete":
var statearr_83161_83207 = state_83152__$1;
(statearr_83161_83207[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83157_83202__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (4))){
var state_83152__$1 = state_83152;
var statearr_83162_83208 = state_83152__$1;
(statearr_83162_83208[(2)] = cljs_http.client.get);

(statearr_83162_83208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (15))){
var inst_83119 = (state_83152[(7)]);
var state_83152__$1 = state_83152;
var statearr_83163_83209 = state_83152__$1;
(statearr_83163_83209[(2)] = inst_83119);

(statearr_83163_83209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (13))){
var inst_83132 = (state_83152[(2)]);
var state_83152__$1 = state_83152;
var statearr_83164_83210 = state_83152__$1;
(statearr_83164_83210[(2)] = inst_83132);

(statearr_83164_83210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (6))){
var state_83152__$1 = state_83152;
var statearr_83165_83211 = state_83152__$1;
(statearr_83165_83211[(2)] = cljs_http.client.delete$);

(statearr_83165_83211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (17))){
var inst_83142 = (state_83152[(8)]);
var inst_83144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_83142);
var inst_83145 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_83144) : re_frame.core.dispatch.call(null,inst_83144));
var state_83152__$1 = state_83152;
var statearr_83166_83212 = state_83152__$1;
(statearr_83166_83212[(2)] = inst_83145);

(statearr_83166_83212[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (3))){
var state_83152__$1 = state_83152;
var statearr_83167_83213 = state_83152__$1;
(statearr_83167_83213[(2)] = cljs_http.client.post);

(statearr_83167_83213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (12))){
var state_83152__$1 = state_83152;
var statearr_83168_83214 = state_83152__$1;
(statearr_83168_83214[(2)] = false);

(statearr_83168_83214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (2))){
var inst_83116 = (state_83152[(2)]);
var inst_83117 = (inst_83116.cljs$core$IFn$_invoke$arity$2 ? inst_83116.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_83116.call(null,url,opts));
var state_83152__$1 = state_83152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83152__$1,(7),inst_83117);
} else {
if((state_val_83153 === (19))){
var inst_83150 = (state_83152[(2)]);
var state_83152__$1 = state_83152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83152__$1,inst_83150);
} else {
if((state_val_83153 === (11))){
var state_83152__$1 = state_83152;
var statearr_83169_83215 = state_83152__$1;
(statearr_83169_83215[(2)] = true);

(statearr_83169_83215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (9))){
var state_83152__$1 = state_83152;
var statearr_83170_83216 = state_83152__$1;
(statearr_83170_83216[(2)] = false);

(statearr_83170_83216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (5))){
var state_83152__$1 = state_83152;
var statearr_83171_83217 = state_83152__$1;
(statearr_83171_83217[(2)] = cljs_http.client.put);

(statearr_83171_83217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (14))){
var inst_83119 = (state_83152[(7)]);
var inst_83137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_83119);
var state_83152__$1 = state_83152;
var statearr_83172_83218 = state_83152__$1;
(statearr_83172_83218[(2)] = inst_83137);

(statearr_83172_83218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (16))){
var inst_83140 = (state_83152[(9)]);
var inst_83140__$1 = (state_83152[(2)]);
var inst_83141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_83140__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_83142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_83140__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_83152__$1 = (function (){var statearr_83173 = state_83152;
(statearr_83173[(9)] = inst_83140__$1);

(statearr_83173[(8)] = inst_83142);

return statearr_83173;
})();
if(cljs.core.truth_(inst_83141)){
var statearr_83174_83219 = state_83152__$1;
(statearr_83174_83219[(1)] = (17));

} else {
var statearr_83175_83220 = state_83152__$1;
(statearr_83175_83220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (10))){
var inst_83135 = (state_83152[(2)]);
var state_83152__$1 = state_83152;
if(cljs.core.truth_(inst_83135)){
var statearr_83176_83221 = state_83152__$1;
(statearr_83176_83221[(1)] = (14));

} else {
var statearr_83177_83222 = state_83152__$1;
(statearr_83177_83222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (18))){
var inst_83140 = (state_83152[(9)]);
var inst_83147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_83140);
var inst_83148 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_83147) : re_frame.core.dispatch.call(null,inst_83147));
var state_83152__$1 = state_83152;
var statearr_83178_83223 = state_83152__$1;
(statearr_83178_83223[(2)] = inst_83148);

(statearr_83178_83223[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83153 === (8))){
var inst_83119 = (state_83152[(7)]);
var inst_83124 = inst_83119.cljs$lang$protocol_mask$partition0$;
var inst_83125 = (inst_83124 & (64));
var inst_83126 = inst_83119.cljs$core$ISeq$;
var inst_83127 = (cljs.core.PROTOCOL_SENTINEL === inst_83126);
var inst_83128 = ((inst_83125) || (inst_83127));
var state_83152__$1 = state_83152;
if(cljs.core.truth_(inst_83128)){
var statearr_83179_83224 = state_83152__$1;
(statearr_83179_83224[(1)] = (11));

} else {
var statearr_83180_83225 = state_83152__$1;
(statearr_83180_83225[(1)] = (12));

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
var athens$effects$state_machine__45999__auto__ = null;
var athens$effects$state_machine__45999__auto____0 = (function (){
var statearr_83181 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83181[(0)] = athens$effects$state_machine__45999__auto__);

(statearr_83181[(1)] = (1));

return statearr_83181;
});
var athens$effects$state_machine__45999__auto____1 = (function (state_83152){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_83152);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e83182){if((e83182 instanceof Object)){
var ex__46002__auto__ = e83182;
var statearr_83183_83226 = state_83152;
(statearr_83183_83226[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_83152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83227 = state_83152;
state_83152 = G__83227;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
athens$effects$state_machine__45999__auto__ = function(state_83152){
switch(arguments.length){
case 0:
return athens$effects$state_machine__45999__auto____0.call(this);
case 1:
return athens$effects$state_machine__45999__auto____1.call(this,state_83152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__45999__auto____0;
athens$effects$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__45999__auto____1;
return athens$effects$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_83184 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_83184[(6)] = c__46094__auto__);

return statearr_83184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

return c__46094__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83105_83197,G__83106_83198) : re_frame.core.reg_fx.call(null,G__83105_83197,G__83106_83198));
var G__83185_83228 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__83186_83229 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__83187){
var map__83188 = p__83187;
var map__83188__$1 = (((((!((map__83188 == null))))?(((((map__83188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83188):map__83188);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83188__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83188__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83188__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83188__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__83190 = action;
var G__83190__$1 = (((G__83190 instanceof cljs.core.Keyword))?G__83190.fqn:null);
switch (G__83190__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83190__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83185_83228,G__83186_83229) : re_frame.core.reg_fx.call(null,G__83185_83228,G__83186_83229));

//# sourceMappingURL=athens.effects.js.map
