goog.provide('athens.devcards.athena');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.subs');
goog.require('athens.views.athena');
goog.require('athens.views.buttons');
goog.require('datascript.core');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56089 = (function (meta56090){
this.meta56090 = meta56090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56091,meta56090__$1){
var self__ = this;
var _56091__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56089(meta56090__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56091){
var self__ = this;
var _56091__$1 = this;
return self__.meta56090;
}));

(athens.devcards.athena.t_athens$devcards$athena56089.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56089.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
})], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56090","meta56090",303850984,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56089.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56089.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56089");

(athens.devcards.athena.t_athens$devcards$athena56089.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56089");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56089.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56089 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56089(meta56090){
return (new athens.devcards.athena.t_athens$devcards$athena56089(meta56090));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56089(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56092 = (function (meta56093){
this.meta56093 = meta56093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56094,meta56093__$1){
var self__ = this;
var _56094__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56092(meta56093__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56094){
var self__ = this;
var _56094__$1 = this;
return self__.meta56093;
}));

(athens.devcards.athena.t_athens$devcards$athena56092.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56092.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56093","meta56093",-2100641069,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56092.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56092.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56092");

(athens.devcards.athena.t_athens$devcards$athena56092.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56092");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56092.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56092 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56092(meta56093){
return (new athens.devcards.athena.t_athens$devcards$athena56092(meta56093));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56092(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56097 = (function (meta56098){
this.meta56098 = meta56098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56099,meta56098__$1){
var self__ = this;
var _56099__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56097(meta56098__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56099){
var self__ = this;
var _56099__$1 = this;
return self__.meta56098;
}));

(athens.devcards.athena.t_athens$devcards$athena56097.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56097.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__49619__auto__,devcard_opts__49620__auto__){
var self__ = this;
var this__49619__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__49620__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__49638__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null)], null);
if(cljs.core.fn_QMARK_(v__49638__auto__)){
return (function (data_atom__49639__auto__,owner__49640__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__49638__auto__,data_atom__49639__auto__,owner__49640__auto__], null));
});
} else {
return reagent.core.as_element(v__49638__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__49620__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56098","meta56098",-1482384450,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56097.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56097.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56097");

(athens.devcards.athena.t_athens$devcards$athena56097.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56097");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56097.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56097 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56097(meta56098){
return (new athens.devcards.athena.t_athens$devcards$athena56097(meta56098));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56097(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map
