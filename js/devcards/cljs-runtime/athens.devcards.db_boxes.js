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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59365){
var map__59366 = p__59365;
var map__59366__$1 = (((((!((map__59366 == null))))?(((((map__59366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59366):map__59366);
var box = map__59366__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59366__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59368 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59371){if((e59371 instanceof Error)){
var e = e59371;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59371;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59368,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59368,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59372_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59372_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__42528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42529__auto__ = (function (){var switch__42492__auto__ = (function (state_59412){
var state_val_59413 = (state_59412[(1)]);
if((state_val_59413 === (7))){
var state_59412__$1 = state_59412;
var statearr_59414_59475 = state_59412__$1;
(statearr_59414_59475[(2)] = false);

(statearr_59414_59475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (1))){
var inst_59374 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59375 = [false];
var inst_59376 = cljs.core.PersistentHashMap.fromArrays(inst_59374,inst_59375);
var inst_59377 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59376], 0));
var state_59412__$1 = state_59412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59412__$1,(2),inst_59377);
} else {
if((state_val_59413 === (4))){
var state_59412__$1 = state_59412;
var statearr_59415_59476 = state_59412__$1;
(statearr_59415_59476[(2)] = false);

(statearr_59415_59476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (13))){
var inst_59408 = alert("Failed to retrieve data from GitHub");
var state_59412__$1 = state_59412;
var statearr_59416_59477 = state_59412__$1;
(statearr_59416_59477[(2)] = inst_59408);

(statearr_59416_59477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (6))){
var state_59412__$1 = state_59412;
var statearr_59417_59478 = state_59412__$1;
(statearr_59417_59478[(2)] = true);

(statearr_59417_59478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (3))){
var inst_59379 = (state_59412[(7)]);
var inst_59384 = inst_59379.cljs$lang$protocol_mask$partition0$;
var inst_59385 = (inst_59384 & (64));
var inst_59386 = inst_59379.cljs$core$ISeq$;
var inst_59387 = (cljs.core.PROTOCOL_SENTINEL === inst_59386);
var inst_59388 = ((inst_59385) || (inst_59387));
var state_59412__$1 = state_59412;
if(cljs.core.truth_(inst_59388)){
var statearr_59418_59479 = state_59412__$1;
(statearr_59418_59479[(1)] = (6));

} else {
var statearr_59419_59480 = state_59412__$1;
(statearr_59419_59480[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (12))){
var inst_59402 = (state_59412[(8)]);
var inst_59404 = athens.db.str_to_db_tx(inst_59402);
var inst_59405 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_59404);
var inst_59406 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_59412__$1 = (function (){var statearr_59420 = state_59412;
(statearr_59420[(9)] = inst_59405);

return statearr_59420;
})();
var statearr_59421_59481 = state_59412__$1;
(statearr_59421_59481[(2)] = inst_59406);

(statearr_59421_59481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (2))){
var inst_59379 = (state_59412[(7)]);
var inst_59379__$1 = (state_59412[(2)]);
var inst_59381 = (inst_59379__$1 == null);
var inst_59382 = cljs.core.not(inst_59381);
var state_59412__$1 = (function (){var statearr_59422 = state_59412;
(statearr_59422[(7)] = inst_59379__$1);

return statearr_59422;
})();
if(inst_59382){
var statearr_59423_59482 = state_59412__$1;
(statearr_59423_59482[(1)] = (3));

} else {
var statearr_59424_59483 = state_59412__$1;
(statearr_59424_59483[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (11))){
var inst_59400 = (state_59412[(2)]);
var inst_59401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59400,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_59402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59400,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_59412__$1 = (function (){var statearr_59425 = state_59412;
(statearr_59425[(8)] = inst_59402);

return statearr_59425;
})();
if(cljs.core.truth_(inst_59401)){
var statearr_59426_59484 = state_59412__$1;
(statearr_59426_59484[(1)] = (12));

} else {
var statearr_59427_59485 = state_59412__$1;
(statearr_59427_59485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (9))){
var inst_59379 = (state_59412[(7)]);
var inst_59397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59379);
var state_59412__$1 = state_59412;
var statearr_59428_59486 = state_59412__$1;
(statearr_59428_59486[(2)] = inst_59397);

(statearr_59428_59486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (5))){
var inst_59395 = (state_59412[(2)]);
var state_59412__$1 = state_59412;
if(cljs.core.truth_(inst_59395)){
var statearr_59429_59487 = state_59412__$1;
(statearr_59429_59487[(1)] = (9));

} else {
var statearr_59430_59488 = state_59412__$1;
(statearr_59430_59488[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (14))){
var inst_59410 = (state_59412[(2)]);
var state_59412__$1 = state_59412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59412__$1,inst_59410);
} else {
if((state_val_59413 === (10))){
var inst_59379 = (state_59412[(7)]);
var state_59412__$1 = state_59412;
var statearr_59431_59489 = state_59412__$1;
(statearr_59431_59489[(2)] = inst_59379);

(statearr_59431_59489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59413 === (8))){
var inst_59392 = (state_59412[(2)]);
var state_59412__$1 = state_59412;
var statearr_59432_59490 = state_59412__$1;
(statearr_59432_59490[(2)] = inst_59392);

(statearr_59432_59490[(1)] = (5));


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
var statearr_59433 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59433[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__);

(statearr_59433[(1)] = (1));

return statearr_59433;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1 = (function (state_59412){
while(true){
var ret_value__42494__auto__ = (function (){try{while(true){
var result__42495__auto__ = switch__42492__auto__(state_59412);
if(cljs.core.keyword_identical_QMARK_(result__42495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42495__auto__;
}
break;
}
}catch (e59434){var ex__42496__auto__ = e59434;
var statearr_59435_59491 = state_59412;
(statearr_59435_59491[(2)] = ex__42496__auto__);


if(cljs.core.seq((state_59412[(4)]))){
var statearr_59436_59492 = state_59412;
(statearr_59436_59492[(1)] = cljs.core.first((state_59412[(4)])));

} else {
throw ex__42496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59493 = state_59412;
state_59412 = G__59493;
continue;
} else {
return ret_value__42494__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__ = function(state_59412){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1.call(this,state_59412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42493__auto__;
})()
})();
var state__42530__auto__ = (function (){var statearr_59437 = f__42529__auto__();
(statearr_59437[(6)] = c__42528__auto__);

return statearr_59437;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59438 = (function (meta59439){
this.meta59439 = meta59439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59440,meta59439__$1){
var self__ = this;
var _59440__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59438(meta59439__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59440){
var self__ = this;
var _59440__$1 = this;
return self__.meta59439;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59439","meta59439",-755364707,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59438");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59438.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59438");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59438.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59438 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59438(meta59439){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59438(meta59439));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59438(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59441 = (function (meta59442){
this.meta59442 = meta59442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59443,meta59442__$1){
var self__ = this;
var _59443__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59441(meta59442__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59443){
var self__ = this;
var _59443__$1 = this;
return self__.meta59442;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59442","meta59442",1881123168,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59441");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59441");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59441.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59441 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59441(meta59442){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59441(meta59442));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59441(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__59445 = arguments.length;
switch (G__59445) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__59446){
var map__59447 = p__59446;
var map__59447__$1 = (((((!((map__59447 == null))))?(((((map__59447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59447):map__59447);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59447__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59447__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59447__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59449(s__59450){
return (new cljs.core.LazySeq(null,(function (){
var s__59450__$1 = s__59450;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59450__$1);
if(temp__5735__auto__){
var s__59450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59450__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59450__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59452 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59451 = (0);
while(true){
if((i__59451 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59451);
cljs.core.chunk_append(b__59452,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59453 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59453) : athens.devcards.db_boxes.cell.call(null,G__59453));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59495 = (i__59451 + (1));
i__59451 = G__59495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59452),athens$devcards$db_boxes$cell_$_iter__59449(cljs.core.chunk_rest(s__59450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59452),null);
}
} else {
var v = cljs.core.first(s__59450__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59454) : athens.devcards.db_boxes.cell.call(null,G__59454));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59449(cljs.core.rest(s__59450__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59455(s__59456){
return (new cljs.core.LazySeq(null,(function (){
var s__59456__$1 = s__59456;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59456__$1);
if(temp__5735__auto__){
var s__59456__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59456__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59456__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59458 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59457 = (0);
while(true){
if((i__59457 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59457);
cljs.core.chunk_append(b__59458,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59459 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59459) : athens.devcards.db_boxes.cell.call(null,G__59459));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59496 = (i__59457 + (1));
i__59457 = G__59496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59458),athens$devcards$db_boxes$cell_$_iter__59455(cljs.core.chunk_rest(s__59456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59458),null);
}
} else {
var v = cljs.core.first(s__59456__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59460 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59460) : athens.devcards.db_boxes.cell.call(null,G__59460));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59455(cljs.core.rest(s__59456__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59461(s__59462){
return (new cljs.core.LazySeq(null,(function (){
var s__59462__$1 = s__59462;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59462__$1);
if(temp__5735__auto__){
var s__59462__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59462__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59462__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59464 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59463 = (0);
while(true){
if((i__59463 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59463);
cljs.core.chunk_append(b__59464,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59465 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59465) : athens.devcards.db_boxes.cell.call(null,G__59465));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59497 = (i__59463 + (1));
i__59463 = G__59497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59464),athens$devcards$db_boxes$cell_$_iter__59461(cljs.core.chunk_rest(s__59462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59464),null);
}
} else {
var v = cljs.core.first(s__59462__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59466 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59466) : athens.devcards.db_boxes.cell.call(null,G__59466));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59461(cljs.core.rest(s__59462__$2)));
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
var map__59467 = cljs.core.deref(box_state);
var map__59467__$1 = (((((!((map__59467 == null))))?(((((map__59467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59467):map__59467);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59467__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59467__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59467__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59469 = (function (meta59470){
this.meta59470 = meta59470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59471,meta59470__$1){
var self__ = this;
var _59471__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59469(meta59470__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59471){
var self__ = this;
var _59471__$1 = this;
return self__.meta59470;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59470","meta59470",-1403709632,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59469");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59469.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59469");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59469.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59469 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59469(meta59470){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59469(meta59470));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59469(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59472 = (function (meta59473){
this.meta59473 = meta59473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59474,meta59473__$1){
var self__ = this;
var _59474__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59472(meta59473__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59474){
var self__ = this;
var _59474__$1 = this;
return self__.meta59473;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59473","meta59473",-1123407519,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59472");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59472.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59472");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59472.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59472 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59472(meta59473){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59472(meta59473));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59472(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
