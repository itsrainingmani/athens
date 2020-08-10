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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59309){
var map__59310 = p__59309;
var map__59310__$1 = (((((!((map__59310 == null))))?(((((map__59310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59310):map__59310);
var box = map__59310__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59310__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59312 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59315){if((e59315 instanceof Error)){
var e = e59315;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59315;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59312,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59312,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59316_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59316_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_59356){
var state_val_59357 = (state_59356[(1)]);
if((state_val_59357 === (7))){
var state_59356__$1 = state_59356;
var statearr_59358_59419 = state_59356__$1;
(statearr_59358_59419[(2)] = false);

(statearr_59358_59419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (1))){
var inst_59318 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59319 = [false];
var inst_59320 = cljs.core.PersistentHashMap.fromArrays(inst_59318,inst_59319);
var inst_59321 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59320], 0));
var state_59356__$1 = state_59356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59356__$1,(2),inst_59321);
} else {
if((state_val_59357 === (4))){
var state_59356__$1 = state_59356;
var statearr_59359_59420 = state_59356__$1;
(statearr_59359_59420[(2)] = false);

(statearr_59359_59420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (13))){
var inst_59352 = alert("Failed to retrieve data from GitHub");
var state_59356__$1 = state_59356;
var statearr_59360_59421 = state_59356__$1;
(statearr_59360_59421[(2)] = inst_59352);

(statearr_59360_59421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (6))){
var state_59356__$1 = state_59356;
var statearr_59361_59422 = state_59356__$1;
(statearr_59361_59422[(2)] = true);

(statearr_59361_59422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (3))){
var inst_59323 = (state_59356[(7)]);
var inst_59328 = inst_59323.cljs$lang$protocol_mask$partition0$;
var inst_59329 = (inst_59328 & (64));
var inst_59330 = inst_59323.cljs$core$ISeq$;
var inst_59331 = (cljs.core.PROTOCOL_SENTINEL === inst_59330);
var inst_59332 = ((inst_59329) || (inst_59331));
var state_59356__$1 = state_59356;
if(cljs.core.truth_(inst_59332)){
var statearr_59362_59423 = state_59356__$1;
(statearr_59362_59423[(1)] = (6));

} else {
var statearr_59363_59424 = state_59356__$1;
(statearr_59363_59424[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (12))){
var inst_59346 = (state_59356[(8)]);
var inst_59348 = athens.db.str_to_db_tx(inst_59346);
var inst_59349 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_59348);
var inst_59350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_59356__$1 = (function (){var statearr_59364 = state_59356;
(statearr_59364[(9)] = inst_59349);

return statearr_59364;
})();
var statearr_59365_59425 = state_59356__$1;
(statearr_59365_59425[(2)] = inst_59350);

(statearr_59365_59425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (2))){
var inst_59323 = (state_59356[(7)]);
var inst_59323__$1 = (state_59356[(2)]);
var inst_59325 = (inst_59323__$1 == null);
var inst_59326 = cljs.core.not(inst_59325);
var state_59356__$1 = (function (){var statearr_59366 = state_59356;
(statearr_59366[(7)] = inst_59323__$1);

return statearr_59366;
})();
if(inst_59326){
var statearr_59367_59426 = state_59356__$1;
(statearr_59367_59426[(1)] = (3));

} else {
var statearr_59368_59427 = state_59356__$1;
(statearr_59368_59427[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (11))){
var inst_59344 = (state_59356[(2)]);
var inst_59345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59344,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_59346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59344,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_59356__$1 = (function (){var statearr_59369 = state_59356;
(statearr_59369[(8)] = inst_59346);

return statearr_59369;
})();
if(cljs.core.truth_(inst_59345)){
var statearr_59370_59428 = state_59356__$1;
(statearr_59370_59428[(1)] = (12));

} else {
var statearr_59371_59429 = state_59356__$1;
(statearr_59371_59429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (9))){
var inst_59323 = (state_59356[(7)]);
var inst_59341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59323);
var state_59356__$1 = state_59356;
var statearr_59372_59430 = state_59356__$1;
(statearr_59372_59430[(2)] = inst_59341);

(statearr_59372_59430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (5))){
var inst_59339 = (state_59356[(2)]);
var state_59356__$1 = state_59356;
if(cljs.core.truth_(inst_59339)){
var statearr_59373_59431 = state_59356__$1;
(statearr_59373_59431[(1)] = (9));

} else {
var statearr_59374_59432 = state_59356__$1;
(statearr_59374_59432[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (14))){
var inst_59354 = (state_59356[(2)]);
var state_59356__$1 = state_59356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59356__$1,inst_59354);
} else {
if((state_val_59357 === (10))){
var inst_59323 = (state_59356[(7)]);
var state_59356__$1 = state_59356;
var statearr_59375_59433 = state_59356__$1;
(statearr_59375_59433[(2)] = inst_59323);

(statearr_59375_59433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59357 === (8))){
var inst_59336 = (state_59356[(2)]);
var state_59356__$1 = state_59356;
var statearr_59376_59434 = state_59356__$1;
(statearr_59376_59434[(2)] = inst_59336);

(statearr_59376_59434[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0 = (function (){
var statearr_59377 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59377[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__);

(statearr_59377[(1)] = (1));

return statearr_59377;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1 = (function (state_59356){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_59356);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e59378){var ex__42487__auto__ = e59378;
var statearr_59379_59435 = state_59356;
(statearr_59379_59435[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_59356[(4)]))){
var statearr_59380_59436 = state_59356;
(statearr_59380_59436[(1)] = cljs.core.first((state_59356[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59437 = state_59356;
state_59356 = G__59437;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__ = function(state_59356){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1.call(this,state_59356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_59381 = f__42520__auto__();
(statearr_59381[(6)] = c__42519__auto__);

return statearr_59381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59382 = (function (meta59383){
this.meta59383 = meta59383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59384,meta59383__$1){
var self__ = this;
var _59384__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59382(meta59383__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59384){
var self__ = this;
var _59384__$1 = this;
return self__.meta59383;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59383","meta59383",-1530328162,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59382");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59382.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59382");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59382.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59382 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59382(meta59383){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59382(meta59383));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59382(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59385 = (function (meta59386){
this.meta59386 = meta59386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59387,meta59386__$1){
var self__ = this;
var _59387__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59385(meta59386__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59387){
var self__ = this;
var _59387__$1 = this;
return self__.meta59386;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59386","meta59386",102028746,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59385");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59385");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59385.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59385 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59385(meta59386){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59385(meta59386));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59385(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__59389 = arguments.length;
switch (G__59389) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__59390){
var map__59391 = p__59390;
var map__59391__$1 = (((((!((map__59391 == null))))?(((((map__59391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59391):map__59391);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59393(s__59394){
return (new cljs.core.LazySeq(null,(function (){
var s__59394__$1 = s__59394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59394__$1);
if(temp__5735__auto__){
var s__59394__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59396 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59395 = (0);
while(true){
if((i__59395 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59395);
cljs.core.chunk_append(b__59396,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59397 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59397) : athens.devcards.db_boxes.cell.call(null,G__59397));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59439 = (i__59395 + (1));
i__59395 = G__59439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59396),athens$devcards$db_boxes$cell_$_iter__59393(cljs.core.chunk_rest(s__59394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59396),null);
}
} else {
var v = cljs.core.first(s__59394__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59398 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59398) : athens.devcards.db_boxes.cell.call(null,G__59398));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59393(cljs.core.rest(s__59394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59399(s__59400){
return (new cljs.core.LazySeq(null,(function (){
var s__59400__$1 = s__59400;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59400__$1);
if(temp__5735__auto__){
var s__59400__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59400__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59400__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59402 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59401 = (0);
while(true){
if((i__59401 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59401);
cljs.core.chunk_append(b__59402,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59403 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59403) : athens.devcards.db_boxes.cell.call(null,G__59403));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59440 = (i__59401 + (1));
i__59401 = G__59440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59402),athens$devcards$db_boxes$cell_$_iter__59399(cljs.core.chunk_rest(s__59400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59402),null);
}
} else {
var v = cljs.core.first(s__59400__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59404 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59404) : athens.devcards.db_boxes.cell.call(null,G__59404));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59399(cljs.core.rest(s__59400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59405(s__59406){
return (new cljs.core.LazySeq(null,(function (){
var s__59406__$1 = s__59406;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59406__$1);
if(temp__5735__auto__){
var s__59406__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59406__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59406__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59408 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59407 = (0);
while(true){
if((i__59407 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59407);
cljs.core.chunk_append(b__59408,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59409) : athens.devcards.db_boxes.cell.call(null,G__59409));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59441 = (i__59407 + (1));
i__59407 = G__59441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59408),athens$devcards$db_boxes$cell_$_iter__59405(cljs.core.chunk_rest(s__59406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59408),null);
}
} else {
var v = cljs.core.first(s__59406__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59410) : athens.devcards.db_boxes.cell.call(null,G__59410));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59405(cljs.core.rest(s__59406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
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
var map__59411 = cljs.core.deref(box_state);
var map__59411__$1 = (((((!((map__59411 == null))))?(((((map__59411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59411):map__59411);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59411__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59411__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59411__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59413 = (function (meta59414){
this.meta59414 = meta59414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59415,meta59414__$1){
var self__ = this;
var _59415__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59413(meta59414__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59415){
var self__ = this;
var _59415__$1 = this;
return self__.meta59414;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59414","meta59414",357542751,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59413");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59413.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59413");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59413.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59413 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59413(meta59414){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59413(meta59414));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59413(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59416 = (function (meta59417){
this.meta59417 = meta59417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59418,meta59417__$1){
var self__ = this;
var _59418__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59416(meta59417__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59418){
var self__ = this;
var _59418__$1 = this;
return self__.meta59417;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59417","meta59417",1861055591,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59416");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59416.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59416");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59416.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59416 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59416(meta59417){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59416(meta59417));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59416(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
