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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61506 = (function (meta61507){
this.meta61507 = meta61507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61508,meta61507__$1){
var self__ = this;
var _61508__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61506(meta61507__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61508){
var self__ = this;
var _61508__$1 = this;
return self__.meta61507;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61506.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61506.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61507","meta61507",1966139931,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61506.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61506.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61506");

(athens.devcards.devtool.t_athens$devcards$devtool61506.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61506");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61506.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61506 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61506(meta61507){
return (new athens.devcards.devtool.t_athens$devcards$devtool61506(meta61507));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61506(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61509 = (function (meta61510){
this.meta61510 = meta61510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61511,meta61510__$1){
var self__ = this;
var _61511__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61509(meta61510__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61511){
var self__ = this;
var _61511__$1 = this;
return self__.meta61510;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61509.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61509.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.views.devtool.handler], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61510","meta61510",-594461302,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61509.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61509.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61509");

(athens.devcards.devtool.t_athens$devcards$devtool61509.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61509");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61509.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61509 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61509(meta61510){
return (new athens.devcards.devtool.t_athens$devcards$devtool61509(meta61510));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61509(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61512 = (function (meta61513){
this.meta61513 = meta61513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61514,meta61513__$1){
var self__ = this;
var _61514__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61512(meta61513__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61514){
var self__ = this;
var _61514__$1 = this;
return self__.meta61513;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61512.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61512.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.views.devtool.initial_state));

return athens.views.devtool.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61513","meta61513",1175652590,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61512.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61512.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61512");

(athens.devcards.devtool.t_athens$devcards$devtool61512.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61512");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61512.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61512 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61512(meta61513){
return (new athens.devcards.devtool.t_athens$devcards$devtool61512(meta61513));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61512(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61515 = (function (meta61516){
this.meta61516 = meta61516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61517,meta61516__$1){
var self__ = this;
var _61517__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61515(meta61516__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61517){
var self__ = this;
var _61517__$1 = this;
return self__.meta61516;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61515.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61515.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61516","meta61516",-378705163,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61515.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61515.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61515");

(athens.devcards.devtool.t_athens$devcards$devtool61515.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61515");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61515.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61515 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61515(meta61516){
return (new athens.devcards.devtool.t_athens$devcards$devtool61515(meta61516));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61515(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
