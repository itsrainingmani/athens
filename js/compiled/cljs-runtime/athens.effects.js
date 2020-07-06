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
var G__29676_29841 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__29677_29842 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29676_29841,G__29677_29842) : re_frame.core.reg_fx.call(null,G__29676_29841,G__29677_29842));
var G__29678_29843 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__29679_29844 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29678_29843,G__29679_29844) : re_frame.core.reg_fx.call(null,G__29678_29843,G__29679_29844));
var G__29680_29845 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__29681_29846 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29680_29845,G__29681_29846) : re_frame.core.reg_fx.call(null,G__29680_29845,G__29681_29846));
var G__29682_29847 = new cljs.core.Keyword(null,"http","http",382524695);
var G__29683_29848 = (function (p__29684){
var map__29685 = p__29684;
var map__29685__$1 = (((((!((map__29685 == null))))?(((((map__29685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29685):map__29685);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29685__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29685__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29685__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29685__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29685__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__23115__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23116__auto__ = (function (){var switch__23092__auto__ = (function (state_29729){
var state_val_29730 = (state_29729[(1)]);
if((state_val_29730 === (7))){
var inst_29696 = (state_29729[(7)]);
var inst_29696__$1 = (state_29729[(2)]);
var inst_29698 = (inst_29696__$1 == null);
var inst_29699 = cljs.core.not(inst_29698);
var state_29729__$1 = (function (){var statearr_29731 = state_29729;
(statearr_29731[(7)] = inst_29696__$1);

return statearr_29731;
})();
if(inst_29699){
var statearr_29732_29849 = state_29729__$1;
(statearr_29732_29849[(1)] = (8));

} else {
var statearr_29733_29850 = state_29729__$1;
(statearr_29733_29850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (1))){
var state_29729__$1 = state_29729;
var G__29734_29851 = method;
var G__29734_29852__$1 = (((G__29734_29851 instanceof cljs.core.Keyword))?G__29734_29851.fqn:null);
switch (G__29734_29852__$1) {
case "post":
var statearr_29735_29854 = state_29729__$1;
(statearr_29735_29854[(1)] = (3));


break;
case "get":
var statearr_29736_29855 = state_29729__$1;
(statearr_29736_29855[(1)] = (4));


break;
case "put":
var statearr_29737_29856 = state_29729__$1;
(statearr_29737_29856[(1)] = (5));


break;
case "delete":
var statearr_29738_29857 = state_29729__$1;
(statearr_29738_29857[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29734_29852__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (4))){
var state_29729__$1 = state_29729;
var statearr_29741_29858 = state_29729__$1;
(statearr_29741_29858[(2)] = cljs_http.client.get);

(statearr_29741_29858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (15))){
var inst_29696 = (state_29729[(7)]);
var state_29729__$1 = state_29729;
var statearr_29745_29859 = state_29729__$1;
(statearr_29745_29859[(2)] = inst_29696);

(statearr_29745_29859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (13))){
var inst_29709 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
var statearr_29747_29860 = state_29729__$1;
(statearr_29747_29860[(2)] = inst_29709);

(statearr_29747_29860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (6))){
var state_29729__$1 = state_29729;
var statearr_29749_29861 = state_29729__$1;
(statearr_29749_29861[(2)] = cljs_http.client.delete$);

(statearr_29749_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (17))){
var inst_29719 = (state_29729[(8)]);
var inst_29721 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_29719);
var inst_29722 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_29721) : re_frame.core.dispatch.call(null,inst_29721));
var state_29729__$1 = state_29729;
var statearr_29754_29862 = state_29729__$1;
(statearr_29754_29862[(2)] = inst_29722);

(statearr_29754_29862[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (3))){
var state_29729__$1 = state_29729;
var statearr_29756_29863 = state_29729__$1;
(statearr_29756_29863[(2)] = cljs_http.client.post);

(statearr_29756_29863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (12))){
var state_29729__$1 = state_29729;
var statearr_29761_29864 = state_29729__$1;
(statearr_29761_29864[(2)] = false);

(statearr_29761_29864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (2))){
var inst_29693 = (state_29729[(2)]);
var inst_29694 = (inst_29693.cljs$core$IFn$_invoke$arity$2 ? inst_29693.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_29693.call(null,url,opts));
var state_29729__$1 = state_29729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29729__$1,(7),inst_29694);
} else {
if((state_val_29730 === (19))){
var inst_29727 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29729__$1,inst_29727);
} else {
if((state_val_29730 === (11))){
var state_29729__$1 = state_29729;
var statearr_29764_29865 = state_29729__$1;
(statearr_29764_29865[(2)] = true);

(statearr_29764_29865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (9))){
var state_29729__$1 = state_29729;
var statearr_29769_29866 = state_29729__$1;
(statearr_29769_29866[(2)] = false);

(statearr_29769_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (5))){
var state_29729__$1 = state_29729;
var statearr_29770_29867 = state_29729__$1;
(statearr_29770_29867[(2)] = cljs_http.client.put);

(statearr_29770_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (14))){
var inst_29696 = (state_29729[(7)]);
var inst_29714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29696);
var state_29729__$1 = state_29729;
var statearr_29773_29868 = state_29729__$1;
(statearr_29773_29868[(2)] = inst_29714);

(statearr_29773_29868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (16))){
var inst_29717 = (state_29729[(9)]);
var inst_29717__$1 = (state_29729[(2)]);
var inst_29718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29717__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_29719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29717__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_29729__$1 = (function (){var statearr_29774 = state_29729;
(statearr_29774[(8)] = inst_29719);

(statearr_29774[(9)] = inst_29717__$1);

return statearr_29774;
})();
if(cljs.core.truth_(inst_29718)){
var statearr_29777_29869 = state_29729__$1;
(statearr_29777_29869[(1)] = (17));

} else {
var statearr_29780_29871 = state_29729__$1;
(statearr_29780_29871[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (10))){
var inst_29712 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
if(cljs.core.truth_(inst_29712)){
var statearr_29784_29872 = state_29729__$1;
(statearr_29784_29872[(1)] = (14));

} else {
var statearr_29789_29873 = state_29729__$1;
(statearr_29789_29873[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (18))){
var inst_29717 = (state_29729[(9)]);
var inst_29724 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_29717);
var inst_29725 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_29724) : re_frame.core.dispatch.call(null,inst_29724));
var state_29729__$1 = state_29729;
var statearr_29793_29877 = state_29729__$1;
(statearr_29793_29877[(2)] = inst_29725);

(statearr_29793_29877[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (8))){
var inst_29696 = (state_29729[(7)]);
var inst_29701 = inst_29696.cljs$lang$protocol_mask$partition0$;
var inst_29702 = (inst_29701 & (64));
var inst_29703 = inst_29696.cljs$core$ISeq$;
var inst_29704 = (cljs.core.PROTOCOL_SENTINEL === inst_29703);
var inst_29705 = ((inst_29702) || (inst_29704));
var state_29729__$1 = state_29729;
if(cljs.core.truth_(inst_29705)){
var statearr_29796_29880 = state_29729__$1;
(statearr_29796_29880[(1)] = (11));

} else {
var statearr_29797_29881 = state_29729__$1;
(statearr_29797_29881[(1)] = (12));

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
var athens$effects$state_machine__23093__auto__ = null;
var athens$effects$state_machine__23093__auto____0 = (function (){
var statearr_29798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29798[(0)] = athens$effects$state_machine__23093__auto__);

(statearr_29798[(1)] = (1));

return statearr_29798;
});
var athens$effects$state_machine__23093__auto____1 = (function (state_29729){
while(true){
var ret_value__23094__auto__ = (function (){try{while(true){
var result__23095__auto__ = switch__23092__auto__(state_29729);
if(cljs.core.keyword_identical_QMARK_(result__23095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23095__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object)){
var ex__23096__auto__ = e29812;
var statearr_29818_29888 = state_29729;
(statearr_29818_29888[(5)] = ex__23096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29889 = state_29729;
state_29729 = G__29889;
continue;
} else {
return ret_value__23094__auto__;
}
break;
}
});
athens$effects$state_machine__23093__auto__ = function(state_29729){
switch(arguments.length){
case 0:
return athens$effects$state_machine__23093__auto____0.call(this);
case 1:
return athens$effects$state_machine__23093__auto____1.call(this,state_29729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__23093__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__23093__auto____0;
athens$effects$state_machine__23093__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__23093__auto____1;
return athens$effects$state_machine__23093__auto__;
})()
})();
var state__23117__auto__ = (function (){var statearr_29830 = (f__23116__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23116__auto__.cljs$core$IFn$_invoke$arity$0() : f__23116__auto__.call(null));
(statearr_29830[(6)] = c__23115__auto__);

return statearr_29830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23117__auto__);
}));

return c__23115__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29682_29847,G__29683_29848) : re_frame.core.reg_fx.call(null,G__29682_29847,G__29683_29848));
var G__29835_29890 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__29836_29891 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__29837){
var map__29838 = p__29837;
var map__29838__$1 = (((((!((map__29838 == null))))?(((((map__29838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29838):map__29838);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__29840 = action;
var G__29840__$1 = (((G__29840 instanceof cljs.core.Keyword))?G__29840.fqn:null);
switch (G__29840__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29840__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29835_29890,G__29836_29891) : re_frame.core.reg_fx.call(null,G__29835_29890,G__29836_29891));

//# sourceMappingURL=athens.effects.js.map
