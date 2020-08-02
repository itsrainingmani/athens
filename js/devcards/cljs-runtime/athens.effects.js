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
var G__61808_61900 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61809_61901 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61808_61900,G__61809_61901) : re_frame.core.reg_fx.call(null,G__61808_61900,G__61809_61901));
var G__61810_61902 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61811_61903 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61810_61902,G__61811_61903) : re_frame.core.reg_fx.call(null,G__61810_61902,G__61811_61903));
var G__61812_61904 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61813_61905 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61812_61904,G__61813_61905) : re_frame.core.reg_fx.call(null,G__61812_61904,G__61813_61905));
var G__61814_61906 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61815_61907 = (function (p__61816){
var map__61817 = p__61816;
var map__61817__$1 = (((((!((map__61817 == null))))?(((((map__61817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61817):map__61817);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61817__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61817__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61817__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61817__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61817__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_61861){
var state_val_61862 = (state_61861[(1)]);
if((state_val_61862 === (7))){
var inst_61828 = (state_61861[(7)]);
var inst_61828__$1 = (state_61861[(2)]);
var inst_61830 = (inst_61828__$1 == null);
var inst_61831 = cljs.core.not(inst_61830);
var state_61861__$1 = (function (){var statearr_61863 = state_61861;
(statearr_61863[(7)] = inst_61828__$1);

return statearr_61863;
})();
if(inst_61831){
var statearr_61864_61908 = state_61861__$1;
(statearr_61864_61908[(1)] = (8));

} else {
var statearr_61865_61909 = state_61861__$1;
(statearr_61865_61909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (1))){
var state_61861__$1 = state_61861;
var G__61866_61910 = method;
var G__61866_61911__$1 = (((G__61866_61910 instanceof cljs.core.Keyword))?G__61866_61910.fqn:null);
switch (G__61866_61911__$1) {
case "post":
var statearr_61867_61913 = state_61861__$1;
(statearr_61867_61913[(1)] = (3));


break;
case "get":
var statearr_61868_61914 = state_61861__$1;
(statearr_61868_61914[(1)] = (4));


break;
case "put":
var statearr_61869_61915 = state_61861__$1;
(statearr_61869_61915[(1)] = (5));


break;
case "delete":
var statearr_61870_61916 = state_61861__$1;
(statearr_61870_61916[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61866_61911__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (4))){
var state_61861__$1 = state_61861;
var statearr_61871_61917 = state_61861__$1;
(statearr_61871_61917[(2)] = cljs_http.client.get);

(statearr_61871_61917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (15))){
var inst_61828 = (state_61861[(7)]);
var state_61861__$1 = state_61861;
var statearr_61872_61918 = state_61861__$1;
(statearr_61872_61918[(2)] = inst_61828);

(statearr_61872_61918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (13))){
var inst_61841 = (state_61861[(2)]);
var state_61861__$1 = state_61861;
var statearr_61873_61919 = state_61861__$1;
(statearr_61873_61919[(2)] = inst_61841);

(statearr_61873_61919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (6))){
var state_61861__$1 = state_61861;
var statearr_61874_61920 = state_61861__$1;
(statearr_61874_61920[(2)] = cljs_http.client.delete$);

(statearr_61874_61920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (17))){
var inst_61851 = (state_61861[(8)]);
var inst_61853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61851);
var inst_61854 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61853) : re_frame.core.dispatch.call(null,inst_61853));
var state_61861__$1 = state_61861;
var statearr_61875_61921 = state_61861__$1;
(statearr_61875_61921[(2)] = inst_61854);

(statearr_61875_61921[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (3))){
var state_61861__$1 = state_61861;
var statearr_61876_61922 = state_61861__$1;
(statearr_61876_61922[(2)] = cljs_http.client.post);

(statearr_61876_61922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (12))){
var state_61861__$1 = state_61861;
var statearr_61877_61923 = state_61861__$1;
(statearr_61877_61923[(2)] = false);

(statearr_61877_61923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (2))){
var inst_61825 = (state_61861[(2)]);
var inst_61826 = (inst_61825.cljs$core$IFn$_invoke$arity$2 ? inst_61825.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61825.call(null,url,opts));
var state_61861__$1 = state_61861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61861__$1,(7),inst_61826);
} else {
if((state_val_61862 === (19))){
var inst_61859 = (state_61861[(2)]);
var state_61861__$1 = state_61861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61861__$1,inst_61859);
} else {
if((state_val_61862 === (11))){
var state_61861__$1 = state_61861;
var statearr_61878_61924 = state_61861__$1;
(statearr_61878_61924[(2)] = true);

(statearr_61878_61924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (9))){
var state_61861__$1 = state_61861;
var statearr_61879_61925 = state_61861__$1;
(statearr_61879_61925[(2)] = false);

(statearr_61879_61925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (5))){
var state_61861__$1 = state_61861;
var statearr_61880_61926 = state_61861__$1;
(statearr_61880_61926[(2)] = cljs_http.client.put);

(statearr_61880_61926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (14))){
var inst_61828 = (state_61861[(7)]);
var inst_61846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61828);
var state_61861__$1 = state_61861;
var statearr_61881_61927 = state_61861__$1;
(statearr_61881_61927[(2)] = inst_61846);

(statearr_61881_61927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (16))){
var inst_61849 = (state_61861[(9)]);
var inst_61849__$1 = (state_61861[(2)]);
var inst_61850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61849__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61849__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61861__$1 = (function (){var statearr_61882 = state_61861;
(statearr_61882[(8)] = inst_61851);

(statearr_61882[(9)] = inst_61849__$1);

return statearr_61882;
})();
if(cljs.core.truth_(inst_61850)){
var statearr_61883_61928 = state_61861__$1;
(statearr_61883_61928[(1)] = (17));

} else {
var statearr_61884_61929 = state_61861__$1;
(statearr_61884_61929[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (10))){
var inst_61844 = (state_61861[(2)]);
var state_61861__$1 = state_61861;
if(cljs.core.truth_(inst_61844)){
var statearr_61885_61930 = state_61861__$1;
(statearr_61885_61930[(1)] = (14));

} else {
var statearr_61886_61931 = state_61861__$1;
(statearr_61886_61931[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (18))){
var inst_61849 = (state_61861[(9)]);
var inst_61856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61849);
var inst_61857 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61856) : re_frame.core.dispatch.call(null,inst_61856));
var state_61861__$1 = state_61861;
var statearr_61887_61932 = state_61861__$1;
(statearr_61887_61932[(2)] = inst_61857);

(statearr_61887_61932[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61862 === (8))){
var inst_61828 = (state_61861[(7)]);
var inst_61833 = inst_61828.cljs$lang$protocol_mask$partition0$;
var inst_61834 = (inst_61833 & (64));
var inst_61835 = inst_61828.cljs$core$ISeq$;
var inst_61836 = (cljs.core.PROTOCOL_SENTINEL === inst_61835);
var inst_61837 = ((inst_61834) || (inst_61836));
var state_61861__$1 = state_61861;
if(cljs.core.truth_(inst_61837)){
var statearr_61888_61933 = state_61861__$1;
(statearr_61888_61933[(1)] = (11));

} else {
var statearr_61889_61934 = state_61861__$1;
(statearr_61889_61934[(1)] = (12));

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
var athens$effects$state_machine__43395__auto__ = null;
var athens$effects$state_machine__43395__auto____0 = (function (){
var statearr_61890 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61890[(0)] = athens$effects$state_machine__43395__auto__);

(statearr_61890[(1)] = (1));

return statearr_61890;
});
var athens$effects$state_machine__43395__auto____1 = (function (state_61861){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_61861);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e61891){if((e61891 instanceof Object)){
var ex__43398__auto__ = e61891;
var statearr_61892_61935 = state_61861;
(statearr_61892_61935[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61936 = state_61861;
state_61861 = G__61936;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
athens$effects$state_machine__43395__auto__ = function(state_61861){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43395__auto____0.call(this);
case 1:
return athens$effects$state_machine__43395__auto____1.call(this,state_61861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43395__auto____0;
athens$effects$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43395__auto____1;
return athens$effects$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_61893 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_61893[(6)] = c__43461__auto__);

return statearr_61893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61814_61906,G__61815_61907) : re_frame.core.reg_fx.call(null,G__61814_61906,G__61815_61907));
var G__61894_61937 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61895_61938 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61896){
var map__61897 = p__61896;
var map__61897__$1 = (((((!((map__61897 == null))))?(((((map__61897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61897):map__61897);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61899 = action;
var G__61899__$1 = (((G__61899 instanceof cljs.core.Keyword))?G__61899.fqn:null);
switch (G__61899__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61899__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61894_61937,G__61895_61938) : re_frame.core.reg_fx.call(null,G__61894_61937,G__61895_61938));

//# sourceMappingURL=athens.effects.js.map
