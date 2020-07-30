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
var G__61805_61897 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61806_61898 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61805_61897,G__61806_61898) : re_frame.core.reg_fx.call(null,G__61805_61897,G__61806_61898));
var G__61807_61899 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61808_61900 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61807_61899,G__61808_61900) : re_frame.core.reg_fx.call(null,G__61807_61899,G__61808_61900));
var G__61809_61901 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61810_61902 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61809_61901,G__61810_61902) : re_frame.core.reg_fx.call(null,G__61809_61901,G__61810_61902));
var G__61811_61903 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61812_61904 = (function (p__61813){
var map__61814 = p__61813;
var map__61814__$1 = (((((!((map__61814 == null))))?(((((map__61814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61814):map__61814);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61814__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61814__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61814__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61814__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61814__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__44406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44407__auto__ = (function (){var switch__44338__auto__ = (function (state_61858){
var state_val_61859 = (state_61858[(1)]);
if((state_val_61859 === (7))){
var inst_61825 = (state_61858[(7)]);
var inst_61825__$1 = (state_61858[(2)]);
var inst_61827 = (inst_61825__$1 == null);
var inst_61828 = cljs.core.not(inst_61827);
var state_61858__$1 = (function (){var statearr_61860 = state_61858;
(statearr_61860[(7)] = inst_61825__$1);

return statearr_61860;
})();
if(inst_61828){
var statearr_61861_61905 = state_61858__$1;
(statearr_61861_61905[(1)] = (8));

} else {
var statearr_61862_61906 = state_61858__$1;
(statearr_61862_61906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (1))){
var state_61858__$1 = state_61858;
var G__61863_61907 = method;
var G__61863_61908__$1 = (((G__61863_61907 instanceof cljs.core.Keyword))?G__61863_61907.fqn:null);
switch (G__61863_61908__$1) {
case "post":
var statearr_61864_61910 = state_61858__$1;
(statearr_61864_61910[(1)] = (3));


break;
case "get":
var statearr_61865_61911 = state_61858__$1;
(statearr_61865_61911[(1)] = (4));


break;
case "put":
var statearr_61866_61912 = state_61858__$1;
(statearr_61866_61912[(1)] = (5));


break;
case "delete":
var statearr_61867_61913 = state_61858__$1;
(statearr_61867_61913[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61863_61908__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (4))){
var state_61858__$1 = state_61858;
var statearr_61868_61914 = state_61858__$1;
(statearr_61868_61914[(2)] = cljs_http.client.get);

(statearr_61868_61914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (15))){
var inst_61825 = (state_61858[(7)]);
var state_61858__$1 = state_61858;
var statearr_61869_61915 = state_61858__$1;
(statearr_61869_61915[(2)] = inst_61825);

(statearr_61869_61915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (13))){
var inst_61838 = (state_61858[(2)]);
var state_61858__$1 = state_61858;
var statearr_61870_61916 = state_61858__$1;
(statearr_61870_61916[(2)] = inst_61838);

(statearr_61870_61916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (6))){
var state_61858__$1 = state_61858;
var statearr_61871_61917 = state_61858__$1;
(statearr_61871_61917[(2)] = cljs_http.client.delete$);

(statearr_61871_61917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (17))){
var inst_61848 = (state_61858[(8)]);
var inst_61850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61848);
var inst_61851 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61850) : re_frame.core.dispatch.call(null,inst_61850));
var state_61858__$1 = state_61858;
var statearr_61872_61918 = state_61858__$1;
(statearr_61872_61918[(2)] = inst_61851);

(statearr_61872_61918[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (3))){
var state_61858__$1 = state_61858;
var statearr_61873_61919 = state_61858__$1;
(statearr_61873_61919[(2)] = cljs_http.client.post);

(statearr_61873_61919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (12))){
var state_61858__$1 = state_61858;
var statearr_61874_61920 = state_61858__$1;
(statearr_61874_61920[(2)] = false);

(statearr_61874_61920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (2))){
var inst_61822 = (state_61858[(2)]);
var inst_61823 = (inst_61822.cljs$core$IFn$_invoke$arity$2 ? inst_61822.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61822.call(null,url,opts));
var state_61858__$1 = state_61858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61858__$1,(7),inst_61823);
} else {
if((state_val_61859 === (19))){
var inst_61856 = (state_61858[(2)]);
var state_61858__$1 = state_61858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61858__$1,inst_61856);
} else {
if((state_val_61859 === (11))){
var state_61858__$1 = state_61858;
var statearr_61875_61921 = state_61858__$1;
(statearr_61875_61921[(2)] = true);

(statearr_61875_61921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (9))){
var state_61858__$1 = state_61858;
var statearr_61876_61922 = state_61858__$1;
(statearr_61876_61922[(2)] = false);

(statearr_61876_61922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (5))){
var state_61858__$1 = state_61858;
var statearr_61877_61923 = state_61858__$1;
(statearr_61877_61923[(2)] = cljs_http.client.put);

(statearr_61877_61923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (14))){
var inst_61825 = (state_61858[(7)]);
var inst_61843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61825);
var state_61858__$1 = state_61858;
var statearr_61878_61924 = state_61858__$1;
(statearr_61878_61924[(2)] = inst_61843);

(statearr_61878_61924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (16))){
var inst_61846 = (state_61858[(9)]);
var inst_61846__$1 = (state_61858[(2)]);
var inst_61847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61846__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61846__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61858__$1 = (function (){var statearr_61879 = state_61858;
(statearr_61879[(9)] = inst_61846__$1);

(statearr_61879[(8)] = inst_61848);

return statearr_61879;
})();
if(cljs.core.truth_(inst_61847)){
var statearr_61880_61925 = state_61858__$1;
(statearr_61880_61925[(1)] = (17));

} else {
var statearr_61881_61926 = state_61858__$1;
(statearr_61881_61926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (10))){
var inst_61841 = (state_61858[(2)]);
var state_61858__$1 = state_61858;
if(cljs.core.truth_(inst_61841)){
var statearr_61882_61927 = state_61858__$1;
(statearr_61882_61927[(1)] = (14));

} else {
var statearr_61883_61928 = state_61858__$1;
(statearr_61883_61928[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (18))){
var inst_61846 = (state_61858[(9)]);
var inst_61853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61846);
var inst_61854 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61853) : re_frame.core.dispatch.call(null,inst_61853));
var state_61858__$1 = state_61858;
var statearr_61884_61929 = state_61858__$1;
(statearr_61884_61929[(2)] = inst_61854);

(statearr_61884_61929[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61859 === (8))){
var inst_61825 = (state_61858[(7)]);
var inst_61830 = inst_61825.cljs$lang$protocol_mask$partition0$;
var inst_61831 = (inst_61830 & (64));
var inst_61832 = inst_61825.cljs$core$ISeq$;
var inst_61833 = (cljs.core.PROTOCOL_SENTINEL === inst_61832);
var inst_61834 = ((inst_61831) || (inst_61833));
var state_61858__$1 = state_61858;
if(cljs.core.truth_(inst_61834)){
var statearr_61885_61930 = state_61858__$1;
(statearr_61885_61930[(1)] = (11));

} else {
var statearr_61886_61931 = state_61858__$1;
(statearr_61886_61931[(1)] = (12));

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
var athens$effects$state_machine__44339__auto__ = null;
var athens$effects$state_machine__44339__auto____0 = (function (){
var statearr_61887 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61887[(0)] = athens$effects$state_machine__44339__auto__);

(statearr_61887[(1)] = (1));

return statearr_61887;
});
var athens$effects$state_machine__44339__auto____1 = (function (state_61858){
while(true){
var ret_value__44340__auto__ = (function (){try{while(true){
var result__44341__auto__ = switch__44338__auto__(state_61858);
if(cljs.core.keyword_identical_QMARK_(result__44341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44341__auto__;
}
break;
}
}catch (e61888){if((e61888 instanceof Object)){
var ex__44342__auto__ = e61888;
var statearr_61889_61932 = state_61858;
(statearr_61889_61932[(5)] = ex__44342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61933 = state_61858;
state_61858 = G__61933;
continue;
} else {
return ret_value__44340__auto__;
}
break;
}
});
athens$effects$state_machine__44339__auto__ = function(state_61858){
switch(arguments.length){
case 0:
return athens$effects$state_machine__44339__auto____0.call(this);
case 1:
return athens$effects$state_machine__44339__auto____1.call(this,state_61858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__44339__auto____0;
athens$effects$state_machine__44339__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__44339__auto____1;
return athens$effects$state_machine__44339__auto__;
})()
})();
var state__44408__auto__ = (function (){var statearr_61890 = (f__44407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44407__auto__.cljs$core$IFn$_invoke$arity$0() : f__44407__auto__.call(null));
(statearr_61890[(6)] = c__44406__auto__);

return statearr_61890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44408__auto__);
}));

return c__44406__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61811_61903,G__61812_61904) : re_frame.core.reg_fx.call(null,G__61811_61903,G__61812_61904));
var G__61891_61934 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61892_61935 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61893){
var map__61894 = p__61893;
var map__61894__$1 = (((((!((map__61894 == null))))?(((((map__61894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61894):map__61894);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61896 = action;
var G__61896__$1 = (((G__61896 instanceof cljs.core.Keyword))?G__61896.fqn:null);
switch (G__61896__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61896__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61891_61934,G__61892_61935) : re_frame.core.reg_fx.call(null,G__61891_61934,G__61892_61935));

//# sourceMappingURL=athens.effects.js.map
