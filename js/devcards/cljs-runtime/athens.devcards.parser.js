goog.provide('athens.devcards.parser');
goog.require('cljs.core');
goog.require('athens.views.blocks');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
athens.devcards.parser.strings = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This is a plain block","This is a [[page link]]","This is a [[nested [[page link]]]]","This is a #hashtag","This is a #[[long hashtag]]","This is a block ref: ((lxMRAb5Y5))","This is a **very** important block","This is an [external link](https://github.com/athensresearch/athens/)","This is an image: ![alt](https://raw.githubusercontent.com/athensresearch/athens/master/doc/athens-puk-patrick-unsplash.jpg)","This is a piece of `preformatted code` or ```monospace text```"], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.parser","athens.devcards.parser",1066018574),new cljs.core.Keyword(null,"Parse","Parse",382274654)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Parse",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.parser !== 'undefined') && (typeof athens.devcards.parser.t_athens$devcards$parser60171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.parser.t_athens$devcards$parser60171 = (function (meta60172){
this.meta60172 = meta60172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.parser.t_athens$devcards$parser60171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60173,meta60172__$1){
var self__ = this;
var _60173__$1 = this;
return (new athens.devcards.parser.t_athens$devcards$parser60171(meta60172__$1));
}));

(athens.devcards.parser.t_athens$devcards$parser60171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60173){
var self__ = this;
var _60173__$1 = this;
return self__.meta60172;
}));

(athens.devcards.parser.t_athens$devcards$parser60171.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.parser.t_athens$devcards$parser60171.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4529__auto__ = (function athens$devcards$parser$iter__60174(s__60175){
return (new cljs.core.LazySeq(null,(function (){
var s__60175__$1 = s__60175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60175__$1);
if(temp__5735__auto__){
var s__60175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60175__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60175__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60177 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60176 = (0);
while(true){
if((i__60176 < size__4528__auto__)){
var s = cljs.core._nth(c__4527__auto__,i__60176);
cljs.core.chunk_append(b__60177,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__60178 = (i__60176 + (1));
i__60176 = G__60178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60177),athens$devcards$parser$iter__60174(cljs.core.chunk_rest(s__60175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60177),null);
}
} else {
var s = cljs.core.first(s__60175__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),athens$devcards$parser$iter__60174(cljs.core.rest(s__60175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(athens.devcards.parser.strings);
})()], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.parser.t_athens$devcards$parser60171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60172","meta60172",1671833896,null)], null);
}));

(athens.devcards.parser.t_athens$devcards$parser60171.cljs$lang$type = true);

(athens.devcards.parser.t_athens$devcards$parser60171.cljs$lang$ctorStr = "athens.devcards.parser/t_athens$devcards$parser60171");

(athens.devcards.parser.t_athens$devcards$parser60171.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.parser/t_athens$devcards$parser60171");
}));

/**
 * Positional factory function for athens.devcards.parser/t_athens$devcards$parser60171.
 */
athens.devcards.parser.__GT_t_athens$devcards$parser60171 = (function athens$devcards$parser$__GT_t_athens$devcards$parser60171(meta60172){
return (new athens.devcards.parser.t_athens$devcards$parser60171(meta60172));
});

}

return (new athens.devcards.parser.t_athens$devcards$parser60171(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.parser.js.map
