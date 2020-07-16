goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.style_guide.color_group_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat( auto-fit, minmax(9rem, 1fr))",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"3rem 1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.devcards.style_guide.color_item_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null)], null);
athens.devcards.style_guide.text_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192)], null);
athens.devcards.style_guide.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Serif","serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Sans","sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Mono","monospace"], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61656 = (function (meta61657){
this.meta61657 = meta61657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61658,meta61657__$1){
var self__ = this;
var _61658__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61656(meta61657__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61658){
var self__ = this;
var _61658__$1 = this;
return self__.meta61657;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61659(s__61660){
return (new cljs.core.LazySeq(null,(function (){
var s__61660__$1 = s__61660;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61660__$1);
if(temp__5735__auto__){
var s__61660__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61660__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61660__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61662 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61661 = (0);
while(true){
if((i__61661 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61661);
cljs.core.chunk_append(b__61662,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__61691 = (i__61661 + (1));
i__61661 = G__61691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61662),athens$devcards$style_guide$iter__61659(cljs.core.chunk_rest(s__61660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61662),null);
}
} else {
var c = cljs.core.first(s__61660__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__61659(cljs.core.rest(s__61660__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61657","meta61657",226535982,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61656");

(athens.devcards.style_guide.t_athens$devcards$style_guide61656.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61656");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61656.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61656 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61656(meta61657){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61656(meta61657));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61656(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61663 = (function (meta61664){
this.meta61664 = meta61664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61665,meta61664__$1){
var self__ = this;
var _61665__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61663(meta61664__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61665){
var self__ = this;
var _61665__$1 = this;
return self__.meta61664;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61666(s__61667){
return (new cljs.core.LazySeq(null,(function (){
var s__61667__$1 = s__61667;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61667__$1);
if(temp__5735__auto__){
var s__61667__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61667__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61667__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61669 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61668 = (0);
while(true){
if((i__61668 < size__4581__auto__)){
var o = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61668);
cljs.core.chunk_append(b__61669,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__61692 = (i__61668 + (1));
i__61668 = G__61692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61669),athens$devcards$style_guide$iter__61666(cljs.core.chunk_rest(s__61667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61669),null);
}
} else {
var o = cljs.core.first(s__61667__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__61666(cljs.core.rest(s__61667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61664","meta61664",1984818678,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61663");

(athens.devcards.style_guide.t_athens$devcards$style_guide61663.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61663");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61663.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61663 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61663(meta61664){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61663(meta61664));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61663(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61670 = (function (meta61671){
this.meta61671 = meta61671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61672,meta61671__$1){
var self__ = this;
var _61672__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61670(meta61671__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61672){
var self__ = this;
var _61672__$1 = this;
return self__.meta61671;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61673(s__61674){
return (new cljs.core.LazySeq(null,(function (){
var s__61674__$1 = s__61674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61674__$1);
if(temp__5735__auto__){
var s__61674__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61674__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61674__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61676 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61675 = (0);
while(true){
if((i__61675 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61675);
cljs.core.chunk_append(b__61676,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61693 = (i__61675 + (1));
i__61675 = G__61693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61676),athens$devcards$style_guide$iter__61673(cljs.core.chunk_rest(s__61674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61676),null);
}
} else {
var t = cljs.core.first(s__61674__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61673(cljs.core.rest(s__61674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61671","meta61671",204863859,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61670");

(athens.devcards.style_guide.t_athens$devcards$style_guide61670.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61670");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61670.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61670 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61670(meta61671){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61670(meta61671));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61670(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61677 = (function (meta61678){
this.meta61678 = meta61678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61679,meta61678__$1){
var self__ = this;
var _61679__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61677(meta61678__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61679){
var self__ = this;
var _61679__$1 = this;
return self__.meta61678;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61680(s__61681){
return (new cljs.core.LazySeq(null,(function (){
var s__61681__$1 = s__61681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61681__$1);
if(temp__5735__auto__){
var s__61681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61681__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61681__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61683 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61682 = (0);
while(true){
if((i__61682 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61682);
cljs.core.chunk_append(b__61683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61694 = (i__61682 + (1));
i__61682 = G__61694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61683),athens$devcards$style_guide$iter__61680(cljs.core.chunk_rest(s__61681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61683),null);
}
} else {
var t = cljs.core.first(s__61681__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61680(cljs.core.rest(s__61681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61678","meta61678",436895999,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61677");

(athens.devcards.style_guide.t_athens$devcards$style_guide61677.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61677");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61677.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61677 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61677(meta61678){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61677(meta61678));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61677(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61684 = (function (meta61685){
this.meta61685 = meta61685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61686,meta61685__$1){
var self__ = this;
var _61686__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61684(meta61685__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61686){
var self__ = this;
var _61686__$1 = this;
return self__.meta61685;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61687(s__61688){
return (new cljs.core.LazySeq(null,(function (){
var s__61688__$1 = s__61688;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61688__$1);
if(temp__5735__auto__){
var s__61688__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61688__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61688__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61690 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61689 = (0);
while(true){
if((i__61689 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61689);
cljs.core.chunk_append(b__61690,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61695 = (i__61689 + (1));
i__61689 = G__61695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61690),athens$devcards$style_guide$iter__61687(cljs.core.chunk_rest(s__61688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61690),null);
}
} else {
var t = cljs.core.first(s__61688__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61687(cljs.core.rest(s__61688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61685","meta61685",1214048398,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61684");

(athens.devcards.style_guide.t_athens$devcards$style_guide61684.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61684");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61684.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61684 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61684(meta61685){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61684(meta61685));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61684(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
