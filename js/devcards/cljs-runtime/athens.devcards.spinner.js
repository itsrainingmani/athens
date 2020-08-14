goog.provide('athens.devcards.spinner');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.spinner');
goog.require('devcards.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Default-Spinner","Default-Spinner",-290996500)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Default-Spinner",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner60263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner60263 = (function (meta60264){
this.meta60264 = meta60264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner60263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60265,meta60264__$1){
var self__ = this;
var _60265__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner60263(meta60264__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60265){
var self__ = this;
var _60265__$1 = this;
return self__.meta60264;
}));

(athens.devcards.spinner.t_athens$devcards$spinner60263.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner60263.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.spinner_style)], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60264","meta60264",-364249722,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner60263.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner60263.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner60263");

(athens.devcards.spinner.t_athens$devcards$spinner60263.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.spinner/t_athens$devcards$spinner60263");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner60263.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner60263 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner60263(meta60264){
return (new athens.devcards.spinner.t_athens$devcards$spinner60263(meta60264));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner60263(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Spinner-with-custom-message","Spinner-with-custom-message",-1987622770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Spinner-with-custom-message",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner60266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner60266 = (function (meta60267){
this.meta60267 = meta60267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner60266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60268,meta60267__$1){
var self__ = this;
var _60268__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner60266(meta60267__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60268){
var self__ = this;
var _60268__$1 = this;
return self__.meta60267;
}));

(athens.devcards.spinner.t_athens$devcards$spinner60266.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner60266.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.spinner.spinner_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Custom Loading Message"], null))], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60267","meta60267",-1778969091,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner60266.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner60266.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner60266");

(athens.devcards.spinner.t_athens$devcards$spinner60266.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.spinner/t_athens$devcards$spinner60266");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner60266.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner60266 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner60266(meta60267){
return (new athens.devcards.spinner.t_athens$devcards$spinner60266(meta60267));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner60266(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.spinner.js.map
