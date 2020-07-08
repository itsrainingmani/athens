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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__60323){
var map__60324 = p__60323;
var map__60324__$1 = (((((!((map__60324 == null))))?(((((map__60324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60324):map__60324);
var box = map__60324__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__60326 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60329){if((e60329 instanceof Error)){
var e = e60329;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60329;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60326,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60326,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60330_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60330_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_60370){
var state_val_60371 = (state_60370[(1)]);
if((state_val_60371 === (7))){
var state_60370__$1 = state_60370;
var statearr_60372_60432 = state_60370__$1;
(statearr_60372_60432[(2)] = false);

(statearr_60372_60432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (1))){
var inst_60332 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60333 = [false];
var inst_60334 = cljs.core.PersistentHashMap.fromArrays(inst_60332,inst_60333);
var inst_60335 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60334], 0));
var state_60370__$1 = state_60370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60370__$1,(2),inst_60335);
} else {
if((state_val_60371 === (4))){
var state_60370__$1 = state_60370;
var statearr_60373_60433 = state_60370__$1;
(statearr_60373_60433[(2)] = false);

(statearr_60373_60433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (13))){
var inst_60366 = alert("Failed to retrieve data from GitHub");
var state_60370__$1 = state_60370;
var statearr_60374_60434 = state_60370__$1;
(statearr_60374_60434[(2)] = inst_60366);

(statearr_60374_60434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (6))){
var state_60370__$1 = state_60370;
var statearr_60375_60435 = state_60370__$1;
(statearr_60375_60435[(2)] = true);

(statearr_60375_60435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (3))){
var inst_60337 = (state_60370[(7)]);
var inst_60342 = inst_60337.cljs$lang$protocol_mask$partition0$;
var inst_60343 = (inst_60342 & (64));
var inst_60344 = inst_60337.cljs$core$ISeq$;
var inst_60345 = (cljs.core.PROTOCOL_SENTINEL === inst_60344);
var inst_60346 = ((inst_60343) || (inst_60345));
var state_60370__$1 = state_60370;
if(cljs.core.truth_(inst_60346)){
var statearr_60376_60436 = state_60370__$1;
(statearr_60376_60436[(1)] = (6));

} else {
var statearr_60377_60437 = state_60370__$1;
(statearr_60377_60437[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (12))){
var inst_60360 = (state_60370[(8)]);
var inst_60362 = athens.db.str_to_db_tx(inst_60360);
var inst_60363 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60362);
var inst_60364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60370__$1 = (function (){var statearr_60378 = state_60370;
(statearr_60378[(9)] = inst_60363);

return statearr_60378;
})();
var statearr_60379_60438 = state_60370__$1;
(statearr_60379_60438[(2)] = inst_60364);

(statearr_60379_60438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (2))){
var inst_60337 = (state_60370[(7)]);
var inst_60337__$1 = (state_60370[(2)]);
var inst_60339 = (inst_60337__$1 == null);
var inst_60340 = cljs.core.not(inst_60339);
var state_60370__$1 = (function (){var statearr_60380 = state_60370;
(statearr_60380[(7)] = inst_60337__$1);

return statearr_60380;
})();
if(inst_60340){
var statearr_60381_60439 = state_60370__$1;
(statearr_60381_60439[(1)] = (3));

} else {
var statearr_60382_60440 = state_60370__$1;
(statearr_60382_60440[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (11))){
var inst_60358 = (state_60370[(2)]);
var inst_60359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60358,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60358,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60370__$1 = (function (){var statearr_60383 = state_60370;
(statearr_60383[(8)] = inst_60360);

return statearr_60383;
})();
if(cljs.core.truth_(inst_60359)){
var statearr_60384_60441 = state_60370__$1;
(statearr_60384_60441[(1)] = (12));

} else {
var statearr_60385_60442 = state_60370__$1;
(statearr_60385_60442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (9))){
var inst_60337 = (state_60370[(7)]);
var inst_60355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60337);
var state_60370__$1 = state_60370;
var statearr_60386_60443 = state_60370__$1;
(statearr_60386_60443[(2)] = inst_60355);

(statearr_60386_60443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (5))){
var inst_60353 = (state_60370[(2)]);
var state_60370__$1 = state_60370;
if(cljs.core.truth_(inst_60353)){
var statearr_60387_60444 = state_60370__$1;
(statearr_60387_60444[(1)] = (9));

} else {
var statearr_60388_60445 = state_60370__$1;
(statearr_60388_60445[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (14))){
var inst_60368 = (state_60370[(2)]);
var state_60370__$1 = state_60370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60370__$1,inst_60368);
} else {
if((state_val_60371 === (10))){
var inst_60337 = (state_60370[(7)]);
var state_60370__$1 = state_60370;
var statearr_60389_60446 = state_60370__$1;
(statearr_60389_60446[(2)] = inst_60337);

(statearr_60389_60446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60371 === (8))){
var inst_60350 = (state_60370[(2)]);
var state_60370__$1 = state_60370;
var statearr_60390_60447 = state_60370__$1;
(statearr_60390_60447[(2)] = inst_60350);

(statearr_60390_60447[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____0 = (function (){
var statearr_60391 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60391[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__);

(statearr_60391[(1)] = (1));

return statearr_60391;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____1 = (function (state_60370){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_60370);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e60392){if((e60392 instanceof Object)){
var ex__36951__auto__ = e60392;
var statearr_60393_60448 = state_60370;
(statearr_60393_60448[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60449 = state_60370;
state_60370 = G__60449;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__ = function(state_60370){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____1.call(this,state_60370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_60394 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_60394[(6)] = c__37015__auto__);

return statearr_60394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60395 = (function (meta60396){
this.meta60396 = meta60396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60397,meta60396__$1){
var self__ = this;
var _60397__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60395(meta60396__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60397){
var self__ = this;
var _60397__$1 = this;
return self__.meta60396;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60396","meta60396",2111821717,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60395");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60395.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60395");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60395.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60395 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60395(meta60396){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60395(meta60396));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60395(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60398 = (function (meta60399){
this.meta60399 = meta60399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60400,meta60399__$1){
var self__ = this;
var _60400__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60398(meta60399__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60400){
var self__ = this;
var _60400__$1 = this;
return self__.meta60399;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60399","meta60399",997010346,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60398");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60398.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60398");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60398.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60398 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60398(meta60399){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60398(meta60399));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60398(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60402 = arguments.length;
switch (G__60402) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60403){
var map__60404 = p__60403;
var map__60404__$1 = (((((!((map__60404 == null))))?(((((map__60404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60404):map__60404);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60404__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60404__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60406(s__60407){
return (new cljs.core.LazySeq(null,(function (){
var s__60407__$1 = s__60407;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60407__$1);
if(temp__5735__auto__){
var s__60407__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60407__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60407__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60409 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60408 = (0);
while(true){
if((i__60408 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60408);
cljs.core.chunk_append(b__60409,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60410 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60410) : athens.devcards.db_boxes.cell.call(null,G__60410));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60451 = (i__60408 + (1));
i__60408 = G__60451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60409),athens$devcards$db_boxes$cell_$_iter__60406(cljs.core.chunk_rest(s__60407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60409),null);
}
} else {
var v = cljs.core.first(s__60407__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60411 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60411) : athens.devcards.db_boxes.cell.call(null,G__60411));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60406(cljs.core.rest(s__60407__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60412(s__60413){
return (new cljs.core.LazySeq(null,(function (){
var s__60413__$1 = s__60413;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60413__$1);
if(temp__5735__auto__){
var s__60413__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60413__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60413__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60415 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60414 = (0);
while(true){
if((i__60414 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60414);
cljs.core.chunk_append(b__60415,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60416 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60416) : athens.devcards.db_boxes.cell.call(null,G__60416));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60452 = (i__60414 + (1));
i__60414 = G__60452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60415),athens$devcards$db_boxes$cell_$_iter__60412(cljs.core.chunk_rest(s__60413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60415),null);
}
} else {
var v = cljs.core.first(s__60413__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60417 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60417) : athens.devcards.db_boxes.cell.call(null,G__60417));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60412(cljs.core.rest(s__60413__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60418(s__60419){
return (new cljs.core.LazySeq(null,(function (){
var s__60419__$1 = s__60419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60419__$1);
if(temp__5735__auto__){
var s__60419__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60419__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60419__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60421 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60420 = (0);
while(true){
if((i__60420 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60420);
cljs.core.chunk_append(b__60421,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60422 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60422) : athens.devcards.db_boxes.cell.call(null,G__60422));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60453 = (i__60420 + (1));
i__60420 = G__60453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60421),athens$devcards$db_boxes$cell_$_iter__60418(cljs.core.chunk_rest(s__60419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60421),null);
}
} else {
var v = cljs.core.first(s__60419__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60423 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60423) : athens.devcards.db_boxes.cell.call(null,G__60423));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60418(cljs.core.rest(s__60419__$2)));
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
var map__60424 = cljs.core.deref(box_state);
var map__60424__$1 = (((((!((map__60424 == null))))?(((((map__60424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60424):map__60424);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60424__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60424__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60424__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60426 = (function (meta60427){
this.meta60427 = meta60427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60428,meta60427__$1){
var self__ = this;
var _60428__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60426(meta60427__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60428){
var self__ = this;
var _60428__$1 = this;
return self__.meta60427;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60427","meta60427",-2096707677,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60426");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60426.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60426");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60426.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60426 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60426(meta60427){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60426(meta60427));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60429 = (function (meta60430){
this.meta60430 = meta60430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60431,meta60430__$1){
var self__ = this;
var _60431__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60429(meta60430__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60431){
var self__ = this;
var _60431__$1 = this;
return self__.meta60430;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60430","meta60430",1549450360,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60429");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60429.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60429");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60429.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60429 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60429(meta60430){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60429(meta60430));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60429(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
