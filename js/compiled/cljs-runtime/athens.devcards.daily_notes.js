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
var G__65993 = arguments.length;
switch (G__65993) {
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
var daily_notes = cljs.core.deref((function (){var G__65994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65994) : re_frame.core.subscribe.call(null,G__65994));
})());
var from_bottom = document.getElementById("daily-notes").getBoundingClientRect().bottom;
var doc_height = document.documentElement.scrollHeight;
var delta = (from_bottom - doc_height);
if((delta < (1))){
var G__65995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1(cljs.core.count(daily_notes))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65995) : re_frame.core.dispatch.call(null,G__65995));
} else {
return null;
}
});
athens.devcards.daily_notes.db_scroll_daily_notes = goog.functions.debounce(athens.devcards.daily_notes.scroll_daily_notes,(500));
athens.devcards.daily_notes.daily_notes_panel = (function athens$devcards$daily_notes$daily_notes_panel(){
var note_refs = (function (){var G__65996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65996) : re_frame.core.subscribe.call(null,G__65996));
})();
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
var G__65997_66014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65997_66014) : re_frame.core.dispatch.call(null,G__65997_66014));
} else {
}

var eids = (function (){var G__65998 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__65999 = athens.db.dsdb;
var G__66000 = cljs.core.deref(note_refs);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65998,G__65999,G__66000) : posh.reagent.q.call(null,G__65998,G__65999,G__66000));
})();
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(eids)))){
var notes = (function (){var G__66001 = athens.db.dsdb;
var G__66002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__66003 = cljs.core.deref(eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__66001,G__66002,G__66003) : posh.reagent.pull_many.call(null,G__66001,G__66002,G__66003));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#daily-notes","div#daily-notes",-1983155722),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_scroll_area_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$daily_notes$daily_notes_panel_$_iter__66004(s__66005){
return (new cljs.core.LazySeq(null,(function (){
var s__66005__$1 = s__66005;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66005__$1);
if(temp__5735__auto__){
var s__66005__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66005__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66005__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66007 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66006 = (0);
while(true){
if((i__66006 < size__4581__auto__)){
var map__66008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66006);
var map__66008__$1 = (((((!((map__66008 == null))))?(((((map__66008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66008):map__66008);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__66007,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__66015 = (i__66006 + (1));
i__66006 = G__66015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66007),athens$devcards$daily_notes$daily_notes_panel_$_iter__66004(cljs.core.chunk_rest(s__66005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66007),null);
}
} else {
var map__66010 = cljs.core.first(s__66005__$2);
var map__66010__$1 = (((((!((map__66010 == null))))?(((((map__66010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66010):map__66010);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66010__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$daily_notes$daily_notes_panel_$_iter__66004(cljs.core.rest(s__66005__$2)));
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

//# sourceMappingURL=athens.devcards.daily_notes.js.map
