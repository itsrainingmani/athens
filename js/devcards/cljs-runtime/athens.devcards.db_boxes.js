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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59350){
var map__59351 = p__59350;
var map__59351__$1 = (((((!((map__59351 == null))))?(((((map__59351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59351):map__59351);
var box = map__59351__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59351__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59353 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59356){if((e59356 instanceof Error)){
var e = e59356;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59356;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59353,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59353,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59357_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59357_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_59397){
var state_val_59398 = (state_59397[(1)]);
if((state_val_59398 === (7))){
var state_59397__$1 = state_59397;
var statearr_59399_59460 = state_59397__$1;
(statearr_59399_59460[(2)] = false);

(statearr_59399_59460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (1))){
var inst_59359 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59360 = [false];
var inst_59361 = cljs.core.PersistentHashMap.fromArrays(inst_59359,inst_59360);
var inst_59362 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59361], 0));
var state_59397__$1 = state_59397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59397__$1,(2),inst_59362);
} else {
if((state_val_59398 === (4))){
var state_59397__$1 = state_59397;
var statearr_59400_59461 = state_59397__$1;
(statearr_59400_59461[(2)] = false);

(statearr_59400_59461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (13))){
var inst_59393 = alert("Failed to retrieve data from GitHub");
var state_59397__$1 = state_59397;
var statearr_59401_59462 = state_59397__$1;
(statearr_59401_59462[(2)] = inst_59393);

(statearr_59401_59462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (6))){
var state_59397__$1 = state_59397;
var statearr_59402_59463 = state_59397__$1;
(statearr_59402_59463[(2)] = true);

(statearr_59402_59463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (3))){
var inst_59364 = (state_59397[(7)]);
var inst_59369 = inst_59364.cljs$lang$protocol_mask$partition0$;
var inst_59370 = (inst_59369 & (64));
var inst_59371 = inst_59364.cljs$core$ISeq$;
var inst_59372 = (cljs.core.PROTOCOL_SENTINEL === inst_59371);
var inst_59373 = ((inst_59370) || (inst_59372));
var state_59397__$1 = state_59397;
if(cljs.core.truth_(inst_59373)){
var statearr_59403_59464 = state_59397__$1;
(statearr_59403_59464[(1)] = (6));

} else {
var statearr_59404_59465 = state_59397__$1;
(statearr_59404_59465[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (12))){
var inst_59387 = (state_59397[(8)]);
var inst_59389 = athens.db.str_to_db_tx(inst_59387);
var inst_59390 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_59389);
var inst_59391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_59397__$1 = (function (){var statearr_59405 = state_59397;
(statearr_59405[(9)] = inst_59390);

return statearr_59405;
})();
var statearr_59406_59466 = state_59397__$1;
(statearr_59406_59466[(2)] = inst_59391);

(statearr_59406_59466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (2))){
var inst_59364 = (state_59397[(7)]);
var inst_59364__$1 = (state_59397[(2)]);
var inst_59366 = (inst_59364__$1 == null);
var inst_59367 = cljs.core.not(inst_59366);
var state_59397__$1 = (function (){var statearr_59407 = state_59397;
(statearr_59407[(7)] = inst_59364__$1);

return statearr_59407;
})();
if(inst_59367){
var statearr_59408_59467 = state_59397__$1;
(statearr_59408_59467[(1)] = (3));

} else {
var statearr_59409_59468 = state_59397__$1;
(statearr_59409_59468[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (11))){
var inst_59385 = (state_59397[(2)]);
var inst_59386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59385,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_59387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59385,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_59397__$1 = (function (){var statearr_59410 = state_59397;
(statearr_59410[(8)] = inst_59387);

return statearr_59410;
})();
if(cljs.core.truth_(inst_59386)){
var statearr_59411_59469 = state_59397__$1;
(statearr_59411_59469[(1)] = (12));

} else {
var statearr_59412_59470 = state_59397__$1;
(statearr_59412_59470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (9))){
var inst_59364 = (state_59397[(7)]);
var inst_59382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59364);
var state_59397__$1 = state_59397;
var statearr_59413_59471 = state_59397__$1;
(statearr_59413_59471[(2)] = inst_59382);

(statearr_59413_59471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (5))){
var inst_59380 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
if(cljs.core.truth_(inst_59380)){
var statearr_59414_59472 = state_59397__$1;
(statearr_59414_59472[(1)] = (9));

} else {
var statearr_59415_59473 = state_59397__$1;
(statearr_59415_59473[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (14))){
var inst_59395 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59397__$1,inst_59395);
} else {
if((state_val_59398 === (10))){
var inst_59364 = (state_59397[(7)]);
var state_59397__$1 = state_59397;
var statearr_59416_59474 = state_59397__$1;
(statearr_59416_59474[(2)] = inst_59364);

(statearr_59416_59474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (8))){
var inst_59377 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
var statearr_59417_59475 = state_59397__$1;
(statearr_59417_59475[(2)] = inst_59377);

(statearr_59417_59475[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____0 = (function (){
var statearr_59418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59418[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__);

(statearr_59418[(1)] = (1));

return statearr_59418;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1 = (function (state_59397){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_59397);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e59419){var ex__42496__auto__ = e59419;
var statearr_59420_59476 = state_59397;
(statearr_59420_59476[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_59397[(4)]))){
var statearr_59421_59477 = state_59397;
(statearr_59421_59477[(1)] = cljs.core.first((state_59397[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59478 = state_59397;
state_59397 = G__59478;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__ = function(state_59397){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1.call(this,state_59397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_59422 = f__42529__auto__();
(statearr_59422[(6)] = c__42528__auto__);

return statearr_59422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42530__auto__);
}));

return c__42528__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59423 = (function (meta59424){
this.meta59424 = meta59424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59425,meta59424__$1){
var self__ = this;
var _59425__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59423(meta59424__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59425){
var self__ = this;
var _59425__$1 = this;
return self__.meta59424;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59424","meta59424",398698323,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59423");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59423.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59423");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59423.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59423 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59423(meta59424){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59423(meta59424));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59423(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59426 = (function (meta59427){
this.meta59427 = meta59427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59428,meta59427__$1){
var self__ = this;
var _59428__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59426(meta59427__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59428){
var self__ = this;
var _59428__$1 = this;
return self__.meta59427;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59427","meta59427",1843951000,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59426");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59426.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59426");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59426.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59426 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59426(meta59427){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59426(meta59427));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__59430 = arguments.length;
switch (G__59430) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__59431){
var map__59432 = p__59431;
var map__59432__$1 = (((((!((map__59432 == null))))?(((((map__59432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59432):map__59432);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59434(s__59435){
return (new cljs.core.LazySeq(null,(function (){
var s__59435__$1 = s__59435;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59435__$1);
if(temp__5735__auto__){
var s__59435__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59435__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59435__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59437 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59436 = (0);
while(true){
if((i__59436 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59436);
cljs.core.chunk_append(b__59437,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59438 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59438) : athens.devcards.db_boxes.cell.call(null,G__59438));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59480 = (i__59436 + (1));
i__59436 = G__59480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59437),athens$devcards$db_boxes$cell_$_iter__59434(cljs.core.chunk_rest(s__59435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59437),null);
}
} else {
var v = cljs.core.first(s__59435__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59439 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59439) : athens.devcards.db_boxes.cell.call(null,G__59439));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59434(cljs.core.rest(s__59435__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59440(s__59441){
return (new cljs.core.LazySeq(null,(function (){
var s__59441__$1 = s__59441;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59441__$1);
if(temp__5735__auto__){
var s__59441__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59441__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59441__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59443 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59442 = (0);
while(true){
if((i__59442 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59442);
cljs.core.chunk_append(b__59443,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59444 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59444) : athens.devcards.db_boxes.cell.call(null,G__59444));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59481 = (i__59442 + (1));
i__59442 = G__59481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59443),athens$devcards$db_boxes$cell_$_iter__59440(cljs.core.chunk_rest(s__59441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59443),null);
}
} else {
var v = cljs.core.first(s__59441__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59445 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59445) : athens.devcards.db_boxes.cell.call(null,G__59445));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59440(cljs.core.rest(s__59441__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59446(s__59447){
return (new cljs.core.LazySeq(null,(function (){
var s__59447__$1 = s__59447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59447__$1);
if(temp__5735__auto__){
var s__59447__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59447__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59447__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59449 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59448 = (0);
while(true){
if((i__59448 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59448);
cljs.core.chunk_append(b__59449,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59450 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59450) : athens.devcards.db_boxes.cell.call(null,G__59450));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59482 = (i__59448 + (1));
i__59448 = G__59482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59449),athens$devcards$db_boxes$cell_$_iter__59446(cljs.core.chunk_rest(s__59447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59449),null);
}
} else {
var v = cljs.core.first(s__59447__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59451 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59451) : athens.devcards.db_boxes.cell.call(null,G__59451));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59446(cljs.core.rest(s__59447__$2)));
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
var map__59452 = cljs.core.deref(box_state);
var map__59452__$1 = (((((!((map__59452 == null))))?(((((map__59452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59452):map__59452);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59454 = (function (meta59455){
this.meta59455 = meta59455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59456,meta59455__$1){
var self__ = this;
var _59456__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59454(meta59455__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59456){
var self__ = this;
var _59456__$1 = this;
return self__.meta59455;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59455","meta59455",-332286415,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59454");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59454.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59454");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59454.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59454 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59454(meta59455){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59454(meta59455));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59454(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59457 = (function (meta59458){
this.meta59458 = meta59458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59459,meta59458__$1){
var self__ = this;
var _59459__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59457(meta59458__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59459){
var self__ = this;
var _59459__$1 = this;
return self__.meta59458;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59458","meta59458",621137430,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59457");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59457");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59457.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59457 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59457(meta59458){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59457(meta59458));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59457(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
