goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.views.buttons');
goog.require('athens.views.devtool');
goog.require('datascript.db');
goog.require('devcards.core');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('reagent.ratom');
goog.require('shadow.remote.runtime.cljs.browser');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61161 = (function (meta61162){
this.meta61162 = meta61162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61163,meta61162__$1){
var self__ = this;
var _61163__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61161(meta61162__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61163){
var self__ = this;
var _61163__$1 = this;
return self__.meta61162;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61161.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61161.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61162","meta61162",-1278631427,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61161.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61161.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61161");

(athens.devcards.devtool.t_athens$devcards$devtool61161.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61161");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61161.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61161 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61161(meta61162){
return (new athens.devcards.devtool.t_athens$devcards$devtool61161(meta61162));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61161(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61164 = (function (meta61165){
this.meta61165 = meta61165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61166,meta61165__$1){
var self__ = this;
var _61166__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61164(meta61165__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61166){
var self__ = this;
var _61166__$1 = this;
return self__.meta61165;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61164.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61164.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.views.devtool.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61165","meta61165",1012410974,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61164.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61164.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61164");

(athens.devcards.devtool.t_athens$devcards$devtool61164.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61164");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61164.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61164 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61164(meta61165){
return (new athens.devcards.devtool.t_athens$devcards$devtool61164(meta61165));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61164(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61167 = (function (meta61168){
this.meta61168 = meta61168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61169,meta61168__$1){
var self__ = this;
var _61169__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61167(meta61168__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61169){
var self__ = this;
var _61169__$1 = this;
return self__.meta61168;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61167.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61167.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.views.devtool.initial_state));

return athens.views.devtool.eval_box_BANG_();
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset"], null)], null);
});
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61168","meta61168",230915,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61167.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61167.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61167");

(athens.devcards.devtool.t_athens$devcards$devtool61167.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61167");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61167.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61167 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61167(meta61168){
return (new athens.devcards.devtool.t_athens$devcards$devtool61167(meta61168));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61167(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61170 = (function (meta61171){
this.meta61171 = meta61171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61172,meta61171__$1){
var self__ = this;
var _61172__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61170(meta61171__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61172){
var self__ = this;
var _61172__$1 = this;
return self__.meta61171;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61170.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61170.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61171","meta61171",1640425851,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61170.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61170.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61170");

(athens.devcards.devtool.t_athens$devcards$devtool61170.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61170");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61170.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61170 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61170(meta61171){
return (new athens.devcards.devtool.t_athens$devcards$devtool61170(meta61171));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61170(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
