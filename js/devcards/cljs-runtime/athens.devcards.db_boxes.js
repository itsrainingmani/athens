goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.data_browser');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('goog.events.KeyCodes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__60745){
var map__60746 = p__60745;
var map__60746__$1 = (((((!((map__60746 == null))))?(((((map__60746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60746):map__60746);
var box = map__60746__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60746__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__60748 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60751){if((e60751 instanceof Error)){
var e = e60751;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60751;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60748,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60748,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60752_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60752_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_60792){
var state_val_60793 = (state_60792[(1)]);
if((state_val_60793 === (7))){
var state_60792__$1 = state_60792;
var statearr_60794_60854 = state_60792__$1;
(statearr_60794_60854[(2)] = false);

(statearr_60794_60854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (1))){
var inst_60754 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60755 = [false];
var inst_60756 = cljs.core.PersistentHashMap.fromArrays(inst_60754,inst_60755);
var inst_60757 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60756], 0));
var state_60792__$1 = state_60792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60792__$1,(2),inst_60757);
} else {
if((state_val_60793 === (4))){
var state_60792__$1 = state_60792;
var statearr_60795_60855 = state_60792__$1;
(statearr_60795_60855[(2)] = false);

(statearr_60795_60855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (13))){
var inst_60788 = alert("Failed to retrieve data from GitHub");
var state_60792__$1 = state_60792;
var statearr_60796_60856 = state_60792__$1;
(statearr_60796_60856[(2)] = inst_60788);

(statearr_60796_60856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (6))){
var state_60792__$1 = state_60792;
var statearr_60797_60857 = state_60792__$1;
(statearr_60797_60857[(2)] = true);

(statearr_60797_60857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (3))){
var inst_60759 = (state_60792[(7)]);
var inst_60764 = inst_60759.cljs$lang$protocol_mask$partition0$;
var inst_60765 = (inst_60764 & (64));
var inst_60766 = inst_60759.cljs$core$ISeq$;
var inst_60767 = (cljs.core.PROTOCOL_SENTINEL === inst_60766);
var inst_60768 = ((inst_60765) || (inst_60767));
var state_60792__$1 = state_60792;
if(cljs.core.truth_(inst_60768)){
var statearr_60798_60858 = state_60792__$1;
(statearr_60798_60858[(1)] = (6));

} else {
var statearr_60799_60859 = state_60792__$1;
(statearr_60799_60859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (12))){
var inst_60782 = (state_60792[(8)]);
var inst_60784 = athens.db.str_to_db_tx(inst_60782);
var inst_60785 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60784);
var inst_60786 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60792__$1 = (function (){var statearr_60800 = state_60792;
(statearr_60800[(9)] = inst_60785);

return statearr_60800;
})();
var statearr_60801_60860 = state_60792__$1;
(statearr_60801_60860[(2)] = inst_60786);

(statearr_60801_60860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (2))){
var inst_60759 = (state_60792[(7)]);
var inst_60759__$1 = (state_60792[(2)]);
var inst_60761 = (inst_60759__$1 == null);
var inst_60762 = cljs.core.not(inst_60761);
var state_60792__$1 = (function (){var statearr_60802 = state_60792;
(statearr_60802[(7)] = inst_60759__$1);

return statearr_60802;
})();
if(inst_60762){
var statearr_60803_60861 = state_60792__$1;
(statearr_60803_60861[(1)] = (3));

} else {
var statearr_60804_60862 = state_60792__$1;
(statearr_60804_60862[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (11))){
var inst_60780 = (state_60792[(2)]);
var inst_60781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60780,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60780,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60792__$1 = (function (){var statearr_60805 = state_60792;
(statearr_60805[(8)] = inst_60782);

return statearr_60805;
})();
if(cljs.core.truth_(inst_60781)){
var statearr_60806_60863 = state_60792__$1;
(statearr_60806_60863[(1)] = (12));

} else {
var statearr_60807_60864 = state_60792__$1;
(statearr_60807_60864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (9))){
var inst_60759 = (state_60792[(7)]);
var inst_60777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60759);
var state_60792__$1 = state_60792;
var statearr_60808_60865 = state_60792__$1;
(statearr_60808_60865[(2)] = inst_60777);

(statearr_60808_60865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (5))){
var inst_60775 = (state_60792[(2)]);
var state_60792__$1 = state_60792;
if(cljs.core.truth_(inst_60775)){
var statearr_60809_60866 = state_60792__$1;
(statearr_60809_60866[(1)] = (9));

} else {
var statearr_60810_60867 = state_60792__$1;
(statearr_60810_60867[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (14))){
var inst_60790 = (state_60792[(2)]);
var state_60792__$1 = state_60792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60792__$1,inst_60790);
} else {
if((state_val_60793 === (10))){
var inst_60759 = (state_60792[(7)]);
var state_60792__$1 = state_60792;
var statearr_60811_60868 = state_60792__$1;
(statearr_60811_60868[(2)] = inst_60759);

(statearr_60811_60868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60793 === (8))){
var inst_60772 = (state_60792[(2)]);
var state_60792__$1 = state_60792;
var statearr_60812_60869 = state_60792__$1;
(statearr_60812_60869[(2)] = inst_60772);

(statearr_60812_60869[(1)] = (5));


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
});
return (function() {
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____0 = (function (){
var statearr_60813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60813[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__);

(statearr_60813[(1)] = (1));

return statearr_60813;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____1 = (function (state_60792){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_60792);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e60814){if((e60814 instanceof Object)){
var ex__37206__auto__ = e60814;
var statearr_60815_60870 = state_60792;
(statearr_60815_60870[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60871 = state_60792;
state_60792 = G__60871;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__ = function(state_60792){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____1.call(this,state_60792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_60816 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_60816[(6)] = c__37270__auto__);

return statearr_60816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60817 = (function (meta60818){
this.meta60818 = meta60818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60819,meta60818__$1){
var self__ = this;
var _60819__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60817(meta60818__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60819){
var self__ = this;
var _60819__$1 = this;
return self__.meta60818;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60818","meta60818",-869804351,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60817");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60817.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60817");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60817.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60817 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60817(meta60818){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60817(meta60818));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60817(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60820 = (function (meta60821){
this.meta60821 = meta60821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60822,meta60821__$1){
var self__ = this;
var _60822__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60820(meta60821__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60822){
var self__ = this;
var _60822__$1 = this;
return self__.meta60821;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60821","meta60821",894335654,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60820");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60820.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60820");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60820.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60820 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60820(meta60821){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60820(meta60821));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60820(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60824 = arguments.length;
switch (G__60824) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60825){
var map__60826 = p__60825;
var map__60826__$1 = (((((!((map__60826 == null))))?(((((map__60826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60826):map__60826);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60828(s__60829){
return (new cljs.core.LazySeq(null,(function (){
var s__60829__$1 = s__60829;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60829__$1);
if(temp__5735__auto__){
var s__60829__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60829__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60829__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60831 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60830 = (0);
while(true){
if((i__60830 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60830);
cljs.core.chunk_append(b__60831,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60832 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60832) : athens.devcards.db_boxes.cell.call(null,G__60832));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60873 = (i__60830 + (1));
i__60830 = G__60873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60831),athens$devcards$db_boxes$cell_$_iter__60828(cljs.core.chunk_rest(s__60829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60831),null);
}
} else {
var v = cljs.core.first(s__60829__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60833 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60833) : athens.devcards.db_boxes.cell.call(null,G__60833));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60828(cljs.core.rest(s__60829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60834(s__60835){
return (new cljs.core.LazySeq(null,(function (){
var s__60835__$1 = s__60835;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60835__$1);
if(temp__5735__auto__){
var s__60835__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60835__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60835__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60837 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60836 = (0);
while(true){
if((i__60836 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60836);
cljs.core.chunk_append(b__60837,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60838 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60838) : athens.devcards.db_boxes.cell.call(null,G__60838));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60874 = (i__60836 + (1));
i__60836 = G__60874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60837),athens$devcards$db_boxes$cell_$_iter__60834(cljs.core.chunk_rest(s__60835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60837),null);
}
} else {
var v = cljs.core.first(s__60835__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60839 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60839) : athens.devcards.db_boxes.cell.call(null,G__60839));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60834(cljs.core.rest(s__60835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60840(s__60841){
return (new cljs.core.LazySeq(null,(function (){
var s__60841__$1 = s__60841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60841__$1);
if(temp__5735__auto__){
var s__60841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60841__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60841__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60843 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60842 = (0);
while(true){
if((i__60842 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60842);
cljs.core.chunk_append(b__60843,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60844) : athens.devcards.db_boxes.cell.call(null,G__60844));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60875 = (i__60842 + (1));
i__60842 = G__60875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60843),athens$devcards$db_boxes$cell_$_iter__60840(cljs.core.chunk_rest(s__60841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60843),null);
}
} else {
var v = cljs.core.first(s__60841__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60845 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60845) : athens.devcards.db_boxes.cell.call(null,G__60845));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60840(cljs.core.rest(s__60841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__60846 = cljs.core.deref(box_state);
var map__60846__$1 = (((((!((map__60846 == null))))?(((((map__60846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60846):map__60846);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60848 = (function (meta60849){
this.meta60849 = meta60849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60850,meta60849__$1){
var self__ = this;
var _60850__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60848(meta60849__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60850){
var self__ = this;
var _60850__$1 = this;
return self__.meta60849;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60849","meta60849",1292607569,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60848");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60848.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60848");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60848.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60848 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60848(meta60849){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60848(meta60849));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60848(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60851 = (function (meta60852){
this.meta60852 = meta60852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60853,meta60852__$1){
var self__ = this;
var _60853__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60851(meta60852__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60853){
var self__ = this;
var _60853__$1 = this;
return self__.meta60852;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60852","meta60852",1841280602,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60851");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60851.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60851");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60851.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60851 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60851(meta60852){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60851(meta60852));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60851(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
