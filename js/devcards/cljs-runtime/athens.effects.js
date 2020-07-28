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
var G__61791_61883 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61792_61884 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61791_61883,G__61792_61884) : re_frame.core.reg_fx.call(null,G__61791_61883,G__61792_61884));
var G__61793_61885 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61794_61886 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61793_61885,G__61794_61886) : re_frame.core.reg_fx.call(null,G__61793_61885,G__61794_61886));
var G__61795_61887 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61796_61888 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61795_61887,G__61796_61888) : re_frame.core.reg_fx.call(null,G__61795_61887,G__61796_61888));
var G__61797_61889 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61798_61890 = (function (p__61799){
var map__61800 = p__61799;
var map__61800__$1 = (((((!((map__61800 == null))))?(((((map__61800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61800):map__61800);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_61844){
var state_val_61845 = (state_61844[(1)]);
if((state_val_61845 === (7))){
var inst_61811 = (state_61844[(7)]);
var inst_61811__$1 = (state_61844[(2)]);
var inst_61813 = (inst_61811__$1 == null);
var inst_61814 = cljs.core.not(inst_61813);
var state_61844__$1 = (function (){var statearr_61846 = state_61844;
(statearr_61846[(7)] = inst_61811__$1);

return statearr_61846;
})();
if(inst_61814){
var statearr_61847_61891 = state_61844__$1;
(statearr_61847_61891[(1)] = (8));

} else {
var statearr_61848_61892 = state_61844__$1;
(statearr_61848_61892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (1))){
var state_61844__$1 = state_61844;
var G__61849_61893 = method;
var G__61849_61894__$1 = (((G__61849_61893 instanceof cljs.core.Keyword))?G__61849_61893.fqn:null);
switch (G__61849_61894__$1) {
case "post":
var statearr_61850_61896 = state_61844__$1;
(statearr_61850_61896[(1)] = (3));


break;
case "get":
var statearr_61851_61897 = state_61844__$1;
(statearr_61851_61897[(1)] = (4));


break;
case "put":
var statearr_61852_61898 = state_61844__$1;
(statearr_61852_61898[(1)] = (5));


break;
case "delete":
var statearr_61853_61899 = state_61844__$1;
(statearr_61853_61899[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61849_61894__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (4))){
var state_61844__$1 = state_61844;
var statearr_61854_61900 = state_61844__$1;
(statearr_61854_61900[(2)] = cljs_http.client.get);

(statearr_61854_61900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (15))){
var inst_61811 = (state_61844[(7)]);
var state_61844__$1 = state_61844;
var statearr_61855_61901 = state_61844__$1;
(statearr_61855_61901[(2)] = inst_61811);

(statearr_61855_61901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (13))){
var inst_61824 = (state_61844[(2)]);
var state_61844__$1 = state_61844;
var statearr_61856_61902 = state_61844__$1;
(statearr_61856_61902[(2)] = inst_61824);

(statearr_61856_61902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (6))){
var state_61844__$1 = state_61844;
var statearr_61857_61903 = state_61844__$1;
(statearr_61857_61903[(2)] = cljs_http.client.delete$);

(statearr_61857_61903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (17))){
var inst_61834 = (state_61844[(8)]);
var inst_61836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61834);
var inst_61837 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61836) : re_frame.core.dispatch.call(null,inst_61836));
var state_61844__$1 = state_61844;
var statearr_61858_61904 = state_61844__$1;
(statearr_61858_61904[(2)] = inst_61837);

(statearr_61858_61904[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (3))){
var state_61844__$1 = state_61844;
var statearr_61859_61905 = state_61844__$1;
(statearr_61859_61905[(2)] = cljs_http.client.post);

(statearr_61859_61905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (12))){
var state_61844__$1 = state_61844;
var statearr_61860_61906 = state_61844__$1;
(statearr_61860_61906[(2)] = false);

(statearr_61860_61906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (2))){
var inst_61808 = (state_61844[(2)]);
var inst_61809 = (inst_61808.cljs$core$IFn$_invoke$arity$2 ? inst_61808.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61808.call(null,url,opts));
var state_61844__$1 = state_61844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61844__$1,(7),inst_61809);
} else {
if((state_val_61845 === (19))){
var inst_61842 = (state_61844[(2)]);
var state_61844__$1 = state_61844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61844__$1,inst_61842);
} else {
if((state_val_61845 === (11))){
var state_61844__$1 = state_61844;
var statearr_61861_61907 = state_61844__$1;
(statearr_61861_61907[(2)] = true);

(statearr_61861_61907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (9))){
var state_61844__$1 = state_61844;
var statearr_61862_61908 = state_61844__$1;
(statearr_61862_61908[(2)] = false);

(statearr_61862_61908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (5))){
var state_61844__$1 = state_61844;
var statearr_61863_61909 = state_61844__$1;
(statearr_61863_61909[(2)] = cljs_http.client.put);

(statearr_61863_61909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (14))){
var inst_61811 = (state_61844[(7)]);
var inst_61829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61811);
var state_61844__$1 = state_61844;
var statearr_61864_61910 = state_61844__$1;
(statearr_61864_61910[(2)] = inst_61829);

(statearr_61864_61910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (16))){
var inst_61832 = (state_61844[(9)]);
var inst_61832__$1 = (state_61844[(2)]);
var inst_61833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61832__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61832__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61844__$1 = (function (){var statearr_61865 = state_61844;
(statearr_61865[(8)] = inst_61834);

(statearr_61865[(9)] = inst_61832__$1);

return statearr_61865;
})();
if(cljs.core.truth_(inst_61833)){
var statearr_61866_61911 = state_61844__$1;
(statearr_61866_61911[(1)] = (17));

} else {
var statearr_61867_61912 = state_61844__$1;
(statearr_61867_61912[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (10))){
var inst_61827 = (state_61844[(2)]);
var state_61844__$1 = state_61844;
if(cljs.core.truth_(inst_61827)){
var statearr_61868_61913 = state_61844__$1;
(statearr_61868_61913[(1)] = (14));

} else {
var statearr_61869_61914 = state_61844__$1;
(statearr_61869_61914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (18))){
var inst_61832 = (state_61844[(9)]);
var inst_61839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61832);
var inst_61840 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61839) : re_frame.core.dispatch.call(null,inst_61839));
var state_61844__$1 = state_61844;
var statearr_61870_61915 = state_61844__$1;
(statearr_61870_61915[(2)] = inst_61840);

(statearr_61870_61915[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61845 === (8))){
var inst_61811 = (state_61844[(7)]);
var inst_61816 = inst_61811.cljs$lang$protocol_mask$partition0$;
var inst_61817 = (inst_61816 & (64));
var inst_61818 = inst_61811.cljs$core$ISeq$;
var inst_61819 = (cljs.core.PROTOCOL_SENTINEL === inst_61818);
var inst_61820 = ((inst_61817) || (inst_61819));
var state_61844__$1 = state_61844;
if(cljs.core.truth_(inst_61820)){
var statearr_61871_61916 = state_61844__$1;
(statearr_61871_61916[(1)] = (11));

} else {
var statearr_61872_61917 = state_61844__$1;
(statearr_61872_61917[(1)] = (12));

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
var athens$effects$state_machine__43385__auto__ = null;
var athens$effects$state_machine__43385__auto____0 = (function (){
var statearr_61873 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61873[(0)] = athens$effects$state_machine__43385__auto__);

(statearr_61873[(1)] = (1));

return statearr_61873;
});
var athens$effects$state_machine__43385__auto____1 = (function (state_61844){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_61844);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e61874){if((e61874 instanceof Object)){
var ex__43388__auto__ = e61874;
var statearr_61875_61918 = state_61844;
(statearr_61875_61918[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61919 = state_61844;
state_61844 = G__61919;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
athens$effects$state_machine__43385__auto__ = function(state_61844){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43385__auto____0.call(this);
case 1:
return athens$effects$state_machine__43385__auto____1.call(this,state_61844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43385__auto____0;
athens$effects$state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43385__auto____1;
return athens$effects$state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_61876 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_61876[(6)] = c__43452__auto__);

return statearr_61876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

return c__43452__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61797_61889,G__61798_61890) : re_frame.core.reg_fx.call(null,G__61797_61889,G__61798_61890));
var G__61877_61920 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61878_61921 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61879){
var map__61880 = p__61879;
var map__61880__$1 = (((((!((map__61880 == null))))?(((((map__61880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61880):map__61880);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61882 = action;
var G__61882__$1 = (((G__61882 instanceof cljs.core.Keyword))?G__61882.fqn:null);
switch (G__61882__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61882__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61877_61920,G__61878_61921) : re_frame.core.reg_fx.call(null,G__61877_61920,G__61878_61921));

//# sourceMappingURL=athens.effects.js.map
