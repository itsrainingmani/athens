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
var G__61767_61859 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61768_61860 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61767_61859,G__61768_61860) : re_frame.core.reg_fx.call(null,G__61767_61859,G__61768_61860));
var G__61769_61861 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61770_61862 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61769_61861,G__61770_61862) : re_frame.core.reg_fx.call(null,G__61769_61861,G__61770_61862));
var G__61771_61863 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61772_61864 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61771_61863,G__61772_61864) : re_frame.core.reg_fx.call(null,G__61771_61863,G__61772_61864));
var G__61773_61865 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61774_61866 = (function (p__61775){
var map__61776 = p__61775;
var map__61776__$1 = (((((!((map__61776 == null))))?(((((map__61776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61776):map__61776);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61820){
var state_val_61821 = (state_61820[(1)]);
if((state_val_61821 === (7))){
var inst_61787 = (state_61820[(7)]);
var inst_61787__$1 = (state_61820[(2)]);
var inst_61789 = (inst_61787__$1 == null);
var inst_61790 = cljs.core.not(inst_61789);
var state_61820__$1 = (function (){var statearr_61822 = state_61820;
(statearr_61822[(7)] = inst_61787__$1);

return statearr_61822;
})();
if(inst_61790){
var statearr_61823_61867 = state_61820__$1;
(statearr_61823_61867[(1)] = (8));

} else {
var statearr_61824_61868 = state_61820__$1;
(statearr_61824_61868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (1))){
var state_61820__$1 = state_61820;
var G__61825_61869 = method;
var G__61825_61870__$1 = (((G__61825_61869 instanceof cljs.core.Keyword))?G__61825_61869.fqn:null);
switch (G__61825_61870__$1) {
case "post":
var statearr_61826_61872 = state_61820__$1;
(statearr_61826_61872[(1)] = (3));


break;
case "get":
var statearr_61827_61873 = state_61820__$1;
(statearr_61827_61873[(1)] = (4));


break;
case "put":
var statearr_61828_61874 = state_61820__$1;
(statearr_61828_61874[(1)] = (5));


break;
case "delete":
var statearr_61829_61875 = state_61820__$1;
(statearr_61829_61875[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61825_61870__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (4))){
var state_61820__$1 = state_61820;
var statearr_61830_61876 = state_61820__$1;
(statearr_61830_61876[(2)] = cljs_http.client.get);

(statearr_61830_61876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (15))){
var inst_61787 = (state_61820[(7)]);
var state_61820__$1 = state_61820;
var statearr_61831_61877 = state_61820__$1;
(statearr_61831_61877[(2)] = inst_61787);

(statearr_61831_61877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (13))){
var inst_61800 = (state_61820[(2)]);
var state_61820__$1 = state_61820;
var statearr_61832_61878 = state_61820__$1;
(statearr_61832_61878[(2)] = inst_61800);

(statearr_61832_61878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (6))){
var state_61820__$1 = state_61820;
var statearr_61833_61879 = state_61820__$1;
(statearr_61833_61879[(2)] = cljs_http.client.delete$);

(statearr_61833_61879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (17))){
var inst_61810 = (state_61820[(8)]);
var inst_61812 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61810);
var inst_61813 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61812) : re_frame.core.dispatch.call(null,inst_61812));
var state_61820__$1 = state_61820;
var statearr_61834_61880 = state_61820__$1;
(statearr_61834_61880[(2)] = inst_61813);

(statearr_61834_61880[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (3))){
var state_61820__$1 = state_61820;
var statearr_61835_61881 = state_61820__$1;
(statearr_61835_61881[(2)] = cljs_http.client.post);

(statearr_61835_61881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (12))){
var state_61820__$1 = state_61820;
var statearr_61836_61882 = state_61820__$1;
(statearr_61836_61882[(2)] = false);

(statearr_61836_61882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (2))){
var inst_61784 = (state_61820[(2)]);
var inst_61785 = (inst_61784.cljs$core$IFn$_invoke$arity$2 ? inst_61784.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61784.call(null,url,opts));
var state_61820__$1 = state_61820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61820__$1,(7),inst_61785);
} else {
if((state_val_61821 === (19))){
var inst_61818 = (state_61820[(2)]);
var state_61820__$1 = state_61820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61820__$1,inst_61818);
} else {
if((state_val_61821 === (11))){
var state_61820__$1 = state_61820;
var statearr_61837_61883 = state_61820__$1;
(statearr_61837_61883[(2)] = true);

(statearr_61837_61883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (9))){
var state_61820__$1 = state_61820;
var statearr_61838_61884 = state_61820__$1;
(statearr_61838_61884[(2)] = false);

(statearr_61838_61884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (5))){
var state_61820__$1 = state_61820;
var statearr_61839_61885 = state_61820__$1;
(statearr_61839_61885[(2)] = cljs_http.client.put);

(statearr_61839_61885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (14))){
var inst_61787 = (state_61820[(7)]);
var inst_61805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61787);
var state_61820__$1 = state_61820;
var statearr_61840_61886 = state_61820__$1;
(statearr_61840_61886[(2)] = inst_61805);

(statearr_61840_61886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (16))){
var inst_61808 = (state_61820[(9)]);
var inst_61808__$1 = (state_61820[(2)]);
var inst_61809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61808__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61808__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61820__$1 = (function (){var statearr_61841 = state_61820;
(statearr_61841[(9)] = inst_61808__$1);

(statearr_61841[(8)] = inst_61810);

return statearr_61841;
})();
if(cljs.core.truth_(inst_61809)){
var statearr_61842_61887 = state_61820__$1;
(statearr_61842_61887[(1)] = (17));

} else {
var statearr_61843_61888 = state_61820__$1;
(statearr_61843_61888[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (10))){
var inst_61803 = (state_61820[(2)]);
var state_61820__$1 = state_61820;
if(cljs.core.truth_(inst_61803)){
var statearr_61844_61889 = state_61820__$1;
(statearr_61844_61889[(1)] = (14));

} else {
var statearr_61845_61890 = state_61820__$1;
(statearr_61845_61890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (18))){
var inst_61808 = (state_61820[(9)]);
var inst_61815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61808);
var inst_61816 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61815) : re_frame.core.dispatch.call(null,inst_61815));
var state_61820__$1 = state_61820;
var statearr_61846_61891 = state_61820__$1;
(statearr_61846_61891[(2)] = inst_61816);

(statearr_61846_61891[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61821 === (8))){
var inst_61787 = (state_61820[(7)]);
var inst_61792 = inst_61787.cljs$lang$protocol_mask$partition0$;
var inst_61793 = (inst_61792 & (64));
var inst_61794 = inst_61787.cljs$core$ISeq$;
var inst_61795 = (cljs.core.PROTOCOL_SENTINEL === inst_61794);
var inst_61796 = ((inst_61793) || (inst_61795));
var state_61820__$1 = state_61820;
if(cljs.core.truth_(inst_61796)){
var statearr_61847_61892 = state_61820__$1;
(statearr_61847_61892[(1)] = (11));

} else {
var statearr_61848_61893 = state_61820__$1;
(statearr_61848_61893[(1)] = (12));

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
var athens$effects$state_machine__37203__auto__ = null;
var athens$effects$state_machine__37203__auto____0 = (function (){
var statearr_61849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61849[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61849[(1)] = (1));

return statearr_61849;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61820){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61820);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61850){if((e61850 instanceof Object)){
var ex__37206__auto__ = e61850;
var statearr_61851_61894 = state_61820;
(statearr_61851_61894[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61895 = state_61820;
state_61820 = G__61895;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61820){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61852 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61852[(6)] = c__37270__auto__);

return statearr_61852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61773_61865,G__61774_61866) : re_frame.core.reg_fx.call(null,G__61773_61865,G__61774_61866));
var G__61853_61896 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61854_61897 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61855){
var map__61856 = p__61855;
var map__61856__$1 = (((((!((map__61856 == null))))?(((((map__61856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61856):map__61856);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61858 = action;
var G__61858__$1 = (((G__61858 instanceof cljs.core.Keyword))?G__61858.fqn:null);
switch (G__61858__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61858__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61853_61896,G__61854_61897) : re_frame.core.reg_fx.call(null,G__61853_61896,G__61854_61897));

//# sourceMappingURL=athens.effects.js.map
