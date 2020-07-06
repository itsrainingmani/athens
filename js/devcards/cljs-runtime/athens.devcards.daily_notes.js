goog.provide('athens.devcards.daily_notes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.node_page');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('goog.functions');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
goog.require('tick.locale_en_us');
athens.devcards.daily_notes.daily_notes_scroll_area_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh + 1px)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.25rem 0",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.devcards.daily_notes.daily_notes_page_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"16","16",1354114028).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"stretch",new cljs.core.Keyword(null,"margin","margin",-995903681),"1.25rem 2.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"0s",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh - 10rem)"], null);
athens.devcards.daily_notes.daily_notes_notional_page_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.daily_notes.daily_notes_page_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"4","4",-1197948085).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null)], 0));
athens.devcards.daily_notes.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.devcards.daily_notes.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.devcards.daily_notes.get_day = (function athens$devcards$daily_notes$get_day(var_args){
var G__58234 = arguments.length;
switch (G__58234) {
case 0:
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.devcards.daily_notes.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.devcards.daily_notes.title_format,day)], null);
}));

(athens.devcards.daily_notes.get_day.cljs$lang$maxFixedArity = 1);

athens.devcards.daily_notes.scroll_daily_notes = (function athens$devcards$daily_notes$scroll_daily_notes(_){
var daily_notes = cljs.core.deref((function (){var G__58235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58235) : re_frame.core.subscribe.call(null,G__58235));
})());
var from_bottom = document.getElementById("daily-notes").getBoundingClientRect().bottom;
var doc_height = document.documentElement.scrollHeight;
var delta = (from_bottom - doc_height);
if((delta < (1))){
var G__58236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1(cljs.core.count(daily_notes))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58236) : re_frame.core.dispatch.call(null,G__58236));
} else {
return null;
}
});
athens.devcards.daily_notes.db_scroll_daily_notes = goog.functions.debounce(athens.devcards.daily_notes.scroll_daily_notes,(500));
athens.devcards.daily_notes.daily_notes_panel = (function athens$devcards$daily_notes$daily_notes_panel(){
var note_refs = (function (){var G__58237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58237) : re_frame.core.subscribe.call(null,G__58237));
})();
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
var G__58238_58258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58238_58258) : re_frame.core.dispatch.call(null,G__58238_58258));
} else {
}

var eids = (function (){var G__58239 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__58240 = athens.db.dsdb;
var G__58241 = cljs.core.deref(note_refs);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58239,G__58240,G__58241) : posh.reagent.q.call(null,G__58239,G__58240,G__58241));
})();
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(eids)))){
var notes = (function (){var G__58242 = athens.db.dsdb;
var G__58243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58244 = cljs.core.deref(eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__58242,G__58243,G__58244) : posh.reagent.pull_many.call(null,G__58242,G__58243,G__58244));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#daily-notes","div#daily-notes",-1983155722),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_scroll_area_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$daily_notes$daily_notes_panel_$_iter__58245(s__58246){
return (new cljs.core.LazySeq(null,(function (){
var s__58246__$1 = s__58246;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58246__$1);
if(temp__5735__auto__){
var s__58246__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58246__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58246__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58248 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58247 = (0);
while(true){
if((i__58247 < size__4581__auto__)){
var map__58249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58247);
var map__58249__$1 = (((((!((map__58249 == null))))?(((((map__58249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58249):map__58249);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58248,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__58259 = (i__58247 + (1));
i__58247 = G__58259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),athens$devcards$daily_notes$daily_notes_panel_$_iter__58245(cljs.core.chunk_rest(s__58246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),null);
}
} else {
var map__58251 = cljs.core.first(s__58246__$2);
var map__58251__$1 = (((((!((map__58251 == null))))?(((((map__58251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58251):map__58251);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$daily_notes$daily_notes_panel_$_iter__58245(cljs.core.rest(s__58246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_notional_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Earlier"], null)], null)], null);
} else {
return null;
}
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.daily_notes","athens.devcards.daily_notes",1209821049),new cljs.core.Keyword(null,"Daily-Notes","Daily-Notes",1573091207)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Daily-Notes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.daily_notes !== 'undefined') && (typeof athens.devcards.daily_notes.t_athens$devcards$daily_notes58253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.daily_notes.t_athens$devcards$daily_notes58253 = (function (meta58254){
this.meta58254 = meta58254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58255,meta58254__$1){
var self__ = this;
var _58255__$1 = this;
return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58253(meta58254__$1));
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58255){
var self__ = this;
var _58255__$1 = this;
return self__.meta58254;
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.daily_notes.daily_notes_panel], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58254","meta58254",1915042873,null)], null);
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.cljs$lang$type = true);

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.cljs$lang$ctorStr = "athens.devcards.daily-notes/t_athens$devcards$daily_notes58253");

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58253.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.daily-notes/t_athens$devcards$daily_notes58253");
}));

/**
 * Positional factory function for athens.devcards.daily-notes/t_athens$devcards$daily_notes58253.
 */
athens.devcards.daily_notes.__GT_t_athens$devcards$daily_notes58253 = (function athens$devcards$daily_notes$__GT_t_athens$devcards$daily_notes58253(meta58254){
return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58253(meta58254));
});

}

return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58253(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.daily_notes.js.map
