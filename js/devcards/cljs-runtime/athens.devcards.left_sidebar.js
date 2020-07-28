goog.provide('athens.devcards.left_sidebar');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('athens.views.left_sidebar');
goog.require('devcards.core');
goog.require('posh.reagent');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Create-Shortcut","Create-Shortcut",1916776015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Shortcut",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561 = (function (meta61562){
this.meta61562 = meta61562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61563,meta61562__$1){
var self__ = this;
var _61563__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561(meta61562__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61563){
var self__ = this;
var _61563__$1 = this;
return self__.meta61562;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48665__auto__,devcard_opts__48666__auto__){
var self__ = this;
var this__48665__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48666__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48684__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb));
var G__61564 = athens.db.dsdb;
var G__61565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),n,new cljs.core.Keyword("node","title","node/title",628940777),["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__61564,G__61565) : posh.reagent.transact_BANG_.call(null,G__61564,G__61565));
})], null),"Create Shortcut"], null);
if(cljs.core.fn_QMARK_(v__48684__auto__)){
return (function (data_atom__48685__auto__,owner__48686__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48684__auto__,data_atom__48685__auto__,owner__48686__auto__], null));
});
} else {
return reagent.core.as_element(v__48684__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48666__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61562","meta61562",-1661246186,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61561");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61561");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61561.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar61561 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar61561(meta61562){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561(meta61562));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61561(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Left-Sidebar","Left-Sidebar",8868535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Left-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566 = (function (meta61567){
this.meta61567 = meta61567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61568,meta61567__$1){
var self__ = this;
var _61568__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566(meta61567__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61568){
var self__ = this;
var _61568__$1 = this;
return self__.meta61567;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48665__auto__,devcard_opts__48666__auto__){
var self__ = this;
var this__48665__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48666__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48684__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar.left_sidebar], null)], null);
if(cljs.core.fn_QMARK_(v__48684__auto__)){
return (function (data_atom__48685__auto__,owner__48686__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48684__auto__,data_atom__48685__auto__,owner__48686__auto__], null));
});
} else {
return reagent.core.as_element(v__48684__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48666__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61567","meta61567",1935054877,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61566");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61566");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar61566.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar61566 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar61566(meta61567){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566(meta61567));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar61566(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.left_sidebar.js.map
