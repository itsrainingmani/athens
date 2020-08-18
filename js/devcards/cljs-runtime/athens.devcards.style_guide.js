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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60276 = (function (meta60277){
this.meta60277 = meta60277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60278,meta60277__$1){
var self__ = this;
var _60278__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60276(meta60277__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60278){
var self__ = this;
var _60278__$1 = this;
return self__.meta60277;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$devcards$style_guide$iter__60279(s__60280){
return (new cljs.core.LazySeq(null,(function (){
var s__60280__$1 = s__60280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60280__$1);
if(temp__5735__auto__){
var s__60280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60280__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60280__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60282 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60281 = (0);
while(true){
if((i__60281 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__60281);
cljs.core.chunk_append(b__60282,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__60311 = (i__60281 + (1));
i__60281 = G__60311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60282),athens$devcards$style_guide$iter__60279(cljs.core.chunk_rest(s__60280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60282),null);
}
} else {
var c = cljs.core.first(s__60280__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__60279(cljs.core.rest(s__60280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60277","meta60277",-175629759,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60276");

(athens.devcards.style_guide.t_athens$devcards$style_guide60276.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60276");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60276.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60276 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60276(meta60277){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60276(meta60277));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60276(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60283 = (function (meta60284){
this.meta60284 = meta60284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60285,meta60284__$1){
var self__ = this;
var _60285__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60283(meta60284__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60285){
var self__ = this;
var _60285__$1 = this;
return self__.meta60284;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$devcards$style_guide$iter__60286(s__60287){
return (new cljs.core.LazySeq(null,(function (){
var s__60287__$1 = s__60287;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60287__$1);
if(temp__5735__auto__){
var s__60287__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60287__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60287__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60289 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60288 = (0);
while(true){
if((i__60288 < size__4528__auto__)){
var o = cljs.core._nth(c__4527__auto__,i__60288);
cljs.core.chunk_append(b__60289,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__60312 = (i__60288 + (1));
i__60288 = G__60312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60289),athens$devcards$style_guide$iter__60286(cljs.core.chunk_rest(s__60287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60289),null);
}
} else {
var o = cljs.core.first(s__60287__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__60286(cljs.core.rest(s__60287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60284","meta60284",-400308738,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60283");

(athens.devcards.style_guide.t_athens$devcards$style_guide60283.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60283");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60283.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60283 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60283(meta60284){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60283(meta60284));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60283(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60290 = (function (meta60291){
this.meta60291 = meta60291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60292,meta60291__$1){
var self__ = this;
var _60292__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60290(meta60291__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60292){
var self__ = this;
var _60292__$1 = this;
return self__.meta60291;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$devcards$style_guide$iter__60293(s__60294){
return (new cljs.core.LazySeq(null,(function (){
var s__60294__$1 = s__60294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60294__$1);
if(temp__5735__auto__){
var s__60294__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60294__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60294__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60296 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60295 = (0);
while(true){
if((i__60295 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__60295);
cljs.core.chunk_append(b__60296,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60313 = (i__60295 + (1));
i__60295 = G__60313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60296),athens$devcards$style_guide$iter__60293(cljs.core.chunk_rest(s__60294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60296),null);
}
} else {
var t = cljs.core.first(s__60294__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60293(cljs.core.rest(s__60294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60291","meta60291",2139020261,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60290");

(athens.devcards.style_guide.t_athens$devcards$style_guide60290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60290");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60290.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60290 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60290(meta60291){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60290(meta60291));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60290(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60297 = (function (meta60298){
this.meta60298 = meta60298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60299,meta60298__$1){
var self__ = this;
var _60299__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60297(meta60298__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60299){
var self__ = this;
var _60299__$1 = this;
return self__.meta60298;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$devcards$style_guide$iter__60300(s__60301){
return (new cljs.core.LazySeq(null,(function (){
var s__60301__$1 = s__60301;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60301__$1);
if(temp__5735__auto__){
var s__60301__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60301__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60301__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60303 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60302 = (0);
while(true){
if((i__60302 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__60302);
cljs.core.chunk_append(b__60303,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60314 = (i__60302 + (1));
i__60302 = G__60314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60303),athens$devcards$style_guide$iter__60300(cljs.core.chunk_rest(s__60301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60303),null);
}
} else {
var t = cljs.core.first(s__60301__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60300(cljs.core.rest(s__60301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60298","meta60298",732240713,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60297");

(athens.devcards.style_guide.t_athens$devcards$style_guide60297.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60297");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60297.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60297 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60297(meta60298){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60297(meta60298));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60297(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60304 = (function (meta60305){
this.meta60305 = meta60305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60306,meta60305__$1){
var self__ = this;
var _60306__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60304(meta60305__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60306){
var self__ = this;
var _60306__$1 = this;
return self__.meta60305;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47726__auto__,devcard_opts__47727__auto__){
var self__ = this;
var this__47726__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47727__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47745__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$devcards$style_guide$iter__60307(s__60308){
return (new cljs.core.LazySeq(null,(function (){
var s__60308__$1 = s__60308;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60308__$1);
if(temp__5735__auto__){
var s__60308__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60308__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60308__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60310 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60309 = (0);
while(true){
if((i__60309 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__60309);
cljs.core.chunk_append(b__60310,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60315 = (i__60309 + (1));
i__60309 = G__60315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60310),athens$devcards$style_guide$iter__60307(cljs.core.chunk_rest(s__60308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60310),null);
}
} else {
var t = cljs.core.first(s__60308__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60307(cljs.core.rest(s__60308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47745__auto__)){
return (function (data_atom__47746__auto__,owner__47747__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47745__auto__,data_atom__47746__auto__,owner__47747__auto__], null));
});
} else {
return reagent.core.as_element(v__47745__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47727__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60305","meta60305",1286264648,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60304");

(athens.devcards.style_guide.t_athens$devcards$style_guide60304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60304");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60304.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60304 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60304(meta60305){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60304(meta60305));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60304(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
