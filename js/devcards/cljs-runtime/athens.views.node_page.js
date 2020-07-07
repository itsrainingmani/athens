goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58085) : re_frame.core.dispatch.call(null,G__58085));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58086 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58087 = athens.db.dsdb;
var G__58088 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58086,G__58087,G__58088) : posh.reagent.q.call(null,G__58086,G__58087,G__58088));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58090 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58089){if((e58089 instanceof Object)){
var _ = e58089;
return false;
} else {
throw e58089;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58093,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58094 = p__58093;
var map__58094__$1 = (((((!((map__58094 == null))))?(((((map__58094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58094):map__58094);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58096 = e.target.value;
var G__58097 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58096,G__58097) : athens.views.node_page.db_handler.call(null,G__58096,G__58097));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58098(s__58099){
return (new cljs.core.LazySeq(null,(function (){
var s__58099__$1 = s__58099;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58099__$1);
if(temp__5735__auto__){
var s__58099__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58099__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58099__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58101 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58100 = (0);
while(true){
if((i__58100 < size__4581__auto__)){
var map__58102 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58100);
var map__58102__$1 = (((((!((map__58102 == null))))?(((((map__58102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58102):map__58102);
var child = map__58102__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58102__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58101,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58235 = (i__58100 + (1));
i__58100 = G__58235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58101),athens$views$node_page$node_page_el_$_iter__58098(cljs.core.chunk_rest(s__58099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58101),null);
}
} else {
var map__58104 = cljs.core.first(s__58099__$2);
var map__58104__$1 = (((((!((map__58104 == null))))?(((((map__58104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58104):map__58104);
var child = map__58104__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58098(cljs.core.rest(s__58099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58106(s__58107){
return (new cljs.core.LazySeq(null,(function (){
var s__58107__$1 = s__58107;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58107__$1);
if(temp__5735__auto__){
var s__58107__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58107__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58107__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58109 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58108 = (0);
while(true){
if((i__58108 < size__4581__auto__)){
var vec__58110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58108);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58110,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58110,(1),null);
cljs.core.chunk_append(b__58109,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58108,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113(s__58114){
return (new cljs.core.LazySeq(null,((function (i__58108,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58114__$1 = s__58114;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58114__$1);
if(temp__5735__auto____$1){
var s__58114__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58114__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58114__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58116 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58115 = (0);
while(true){
if((i__58115 < size__4581__auto____$1)){
var vec__58117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58115);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58117,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58117,(1),null);
cljs.core.chunk_append(b__58116,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120(s__58121){
return (new cljs.core.LazySeq(null,((function (i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58121__$1 = s__58121;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58121__$1);
if(temp__5735__auto____$2){
var s__58121__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58121__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58121__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58123 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58122 = (0);
while(true){
if((i__58122 < size__4581__auto____$2)){
var map__58124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58122);
var map__58124__$1 = (((((!((map__58124 == null))))?(((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58124):map__58124);
var block = map__58124__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58123,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58122,i__58115,i__58108,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58126(s__58127){
return (new cljs.core.LazySeq(null,((function (i__58122,i__58115,i__58108,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58127__$1 = s__58127;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58127__$1);
if(temp__5735__auto____$3){
var s__58127__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58127__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58127__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58129 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58128 = (0);
while(true){
if((i__58128 < size__4581__auto____$3)){
var map__58130 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58128);
var map__58130__$1 = (((((!((map__58130 == null))))?(((((map__58130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58130):map__58130);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58129,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58128,i__58122,i__58115,i__58108,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58128,i__58122,i__58115,i__58108,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58236 = (i__58128 + (1));
i__58128 = G__58236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58126(cljs.core.chunk_rest(s__58127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),null);
}
} else {
var map__58132 = cljs.core.first(s__58127__$2);
var map__58132__$1 = (((((!((map__58132 == null))))?(((((map__58132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58132):map__58132);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58122,i__58115,i__58108,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58122,i__58115,i__58108,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58126(cljs.core.rest(s__58127__$2)));
}
} else {
return null;
}
break;
}
});})(i__58122,i__58115,i__58108,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58122,i__58115,i__58108,map__58124,map__58124__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58123,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58237 = (i__58122 + (1));
i__58122 = G__58237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58123),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120(cljs.core.chunk_rest(s__58121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58123),null);
}
} else {
var map__58134 = cljs.core.first(s__58121__$2);
var map__58134__$1 = (((((!((map__58134 == null))))?(((((map__58134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58134):map__58134);
var block = map__58134__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58115,i__58108,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58136(s__58137){
return (new cljs.core.LazySeq(null,((function (i__58115,i__58108,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58137__$1 = s__58137;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58137__$1);
if(temp__5735__auto____$3){
var s__58137__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58137__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58137__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58139 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58138 = (0);
while(true){
if((i__58138 < size__4581__auto____$2)){
var map__58140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58138);
var map__58140__$1 = (((((!((map__58140 == null))))?(((((map__58140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58140):map__58140);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58140__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58140__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58140__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58139,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58138,i__58115,i__58108,map__58140,map__58140__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58139,s__58137__$2,temp__5735__auto____$3,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58138,i__58115,i__58108,map__58140,map__58140__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58139,s__58137__$2,temp__5735__auto____$3,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58238 = (i__58138 + (1));
i__58138 = G__58238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58139),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58136(cljs.core.chunk_rest(s__58137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58139),null);
}
} else {
var map__58142 = cljs.core.first(s__58137__$2);
var map__58142__$1 = (((((!((map__58142 == null))))?(((((map__58142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58142):map__58142);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58115,i__58108,map__58142,map__58142__$1,title__$1,string,uid__$2,s__58137__$2,temp__5735__auto____$3,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58115,i__58108,map__58142,map__58142__$1,title__$1,string,uid__$2,s__58137__$2,temp__5735__auto____$3,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120_$_iter__58136(cljs.core.rest(s__58137__$2)));
}
} else {
return null;
}
break;
}
});})(i__58115,i__58108,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58115,i__58108,map__58134,map__58134__$1,block,uid__$1,parents,s__58121__$2,temp__5735__auto____$2,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58120(cljs.core.rest(s__58121__$2)));
}
} else {
return null;
}
break;
}
});})(i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58115,i__58108,vec__58117,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58116,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58239 = (i__58115 + (1));
i__58115 = G__58239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113(cljs.core.chunk_rest(s__58114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),null);
}
} else {
var vec__58144 = cljs.core.first(s__58114__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147(s__58148){
return (new cljs.core.LazySeq(null,((function (i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58148__$1 = s__58148;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58148__$1);
if(temp__5735__auto____$2){
var s__58148__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58148__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58148__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58150 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58149 = (0);
while(true){
if((i__58149 < size__4581__auto____$1)){
var map__58151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58149);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var block = map__58151__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58150,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58149,i__58108,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58153(s__58154){
return (new cljs.core.LazySeq(null,((function (i__58149,i__58108,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58154__$1 = s__58154;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58154__$1);
if(temp__5735__auto____$3){
var s__58154__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58154__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58154__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58156 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58155 = (0);
while(true){
if((i__58155 < size__4581__auto____$2)){
var map__58157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58155);
var map__58157__$1 = (((((!((map__58157 == null))))?(((((map__58157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58157):map__58157);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58155,i__58149,i__58108,map__58157,map__58157__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58156,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58155,i__58149,i__58108,map__58157,map__58157__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58156,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58240 = (i__58155 + (1));
i__58155 = G__58240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58156),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58153(cljs.core.chunk_rest(s__58154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58156),null);
}
} else {
var map__58159 = cljs.core.first(s__58154__$2);
var map__58159__$1 = (((((!((map__58159 == null))))?(((((map__58159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58159):map__58159);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58149,i__58108,map__58159,map__58159__$1,title__$1,string,uid__$2,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58149,i__58108,map__58159,map__58159__$1,title__$1,string,uid__$2,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58153(cljs.core.rest(s__58154__$2)));
}
} else {
return null;
}
break;
}
});})(i__58149,i__58108,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58149,i__58108,map__58151,map__58151__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58150,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58241 = (i__58149 + (1));
i__58149 = G__58241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147(cljs.core.chunk_rest(s__58148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),null);
}
} else {
var map__58161 = cljs.core.first(s__58148__$2);
var map__58161__$1 = (((((!((map__58161 == null))))?(((((map__58161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58161):map__58161);
var block = map__58161__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58108,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58163(s__58164){
return (new cljs.core.LazySeq(null,((function (i__58108,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58164__$1 = s__58164;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58164__$1);
if(temp__5735__auto____$3){
var s__58164__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58164__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58164__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58166 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58165 = (0);
while(true){
if((i__58165 < size__4581__auto____$1)){
var map__58167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58165);
var map__58167__$1 = (((((!((map__58167 == null))))?(((((map__58167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58167):map__58167);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58165,i__58108,map__58167,map__58167__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58166,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58165,i__58108,map__58167,map__58167__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58166,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58242 = (i__58165 + (1));
i__58165 = G__58242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58166),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58163(cljs.core.chunk_rest(s__58164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58166),null);
}
} else {
var map__58169 = cljs.core.first(s__58164__$2);
var map__58169__$1 = (((((!((map__58169 == null))))?(((((map__58169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58169):map__58169);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58108,map__58169,map__58169__$1,title__$1,string,uid__$2,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58108,map__58169,map__58169__$1,title__$1,string,uid__$2,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147_$_iter__58163(cljs.core.rest(s__58164__$2)));
}
} else {
return null;
}
break;
}
});})(i__58108,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58108,map__58161,map__58161__$1,block,uid__$1,parents,s__58148__$2,temp__5735__auto____$2,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113_$_iter__58147(cljs.core.rest(s__58148__$2)));
}
} else {
return null;
}
break;
}
});})(i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58108,vec__58144,group_title,group,s__58114__$2,temp__5735__auto____$1,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58113(cljs.core.rest(s__58114__$2)));
}
} else {
return null;
}
break;
}
});})(i__58108,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58108,vec__58110,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58109,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58243 = (i__58108 + (1));
i__58108 = G__58243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),athens$views$node_page$node_page_el_$_iter__58106(cljs.core.chunk_rest(s__58107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),null);
}
} else {
var vec__58171 = cljs.core.first(s__58107__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174(s__58175){
return (new cljs.core.LazySeq(null,(function (){
var s__58175__$1 = s__58175;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58175__$1);
if(temp__5735__auto____$1){
var s__58175__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58175__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58175__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58177 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58176 = (0);
while(true){
if((i__58176 < size__4581__auto__)){
var vec__58178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58176);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(1),null);
cljs.core.chunk_append(b__58177,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181(s__58182){
return (new cljs.core.LazySeq(null,((function (i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58182__$1 = s__58182;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58182__$1);
if(temp__5735__auto____$2){
var s__58182__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58182__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58182__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58184 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58183 = (0);
while(true){
if((i__58183 < size__4581__auto____$1)){
var map__58185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58183);
var map__58185__$1 = (((((!((map__58185 == null))))?(((((map__58185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58185):map__58185);
var block = map__58185__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58184,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58183,i__58176,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58187(s__58188){
return (new cljs.core.LazySeq(null,((function (i__58183,i__58176,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58188__$1 = s__58188;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58188__$1);
if(temp__5735__auto____$3){
var s__58188__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58188__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58188__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58190 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58189 = (0);
while(true){
if((i__58189 < size__4581__auto____$2)){
var map__58191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58189);
var map__58191__$1 = (((((!((map__58191 == null))))?(((((map__58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58191):map__58191);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58189,i__58183,i__58176,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58189,i__58183,i__58176,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58244 = (i__58189 + (1));
i__58189 = G__58244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58187(cljs.core.chunk_rest(s__58188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),null);
}
} else {
var map__58193 = cljs.core.first(s__58188__$2);
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58183,i__58176,map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58183,i__58176,map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58187(cljs.core.rest(s__58188__$2)));
}
} else {
return null;
}
break;
}
});})(i__58183,i__58176,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58183,i__58176,map__58185,map__58185__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58184,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58245 = (i__58183 + (1));
i__58183 = G__58245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58184),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181(cljs.core.chunk_rest(s__58182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58184),null);
}
} else {
var map__58195 = cljs.core.first(s__58182__$2);
var map__58195__$1 = (((((!((map__58195 == null))))?(((((map__58195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58195):map__58195);
var block = map__58195__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58176,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58197(s__58198){
return (new cljs.core.LazySeq(null,((function (i__58176,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58198__$1 = s__58198;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58198__$1);
if(temp__5735__auto____$3){
var s__58198__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58198__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58198__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58200 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58199 = (0);
while(true){
if((i__58199 < size__4581__auto____$1)){
var map__58201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58199);
var map__58201__$1 = (((((!((map__58201 == null))))?(((((map__58201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58201):map__58201);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58200,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58199,i__58176,map__58201,map__58201__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58199,i__58176,map__58201,map__58201__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58246 = (i__58199 + (1));
i__58199 = G__58246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58197(cljs.core.chunk_rest(s__58198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),null);
}
} else {
var map__58203 = cljs.core.first(s__58198__$2);
var map__58203__$1 = (((((!((map__58203 == null))))?(((((map__58203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58203):map__58203);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58176,map__58203,map__58203__$1,title__$1,string,uid__$2,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58176,map__58203,map__58203__$1,title__$1,string,uid__$2,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181_$_iter__58197(cljs.core.rest(s__58198__$2)));
}
} else {
return null;
}
break;
}
});})(i__58176,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58176,map__58195,map__58195__$1,block,uid__$1,parents,s__58182__$2,temp__5735__auto____$2,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58181(cljs.core.rest(s__58182__$2)));
}
} else {
return null;
}
break;
}
});})(i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58176,vec__58178,group_title,group,c__4580__auto__,size__4581__auto__,b__58177,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58247 = (i__58176 + (1));
i__58176 = G__58247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174(cljs.core.chunk_rest(s__58175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),null);
}
} else {
var vec__58205 = cljs.core.first(s__58175__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58205,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58205,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208(s__58209){
return (new cljs.core.LazySeq(null,(function (){
var s__58209__$1 = s__58209;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58209__$1);
if(temp__5735__auto____$2){
var s__58209__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58209__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58209__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58211 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58210 = (0);
while(true){
if((i__58210 < size__4581__auto__)){
var map__58212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58210);
var map__58212__$1 = (((((!((map__58212 == null))))?(((((map__58212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58212):map__58212);
var block = map__58212__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58211,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58210,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58214(s__58215){
return (new cljs.core.LazySeq(null,((function (i__58210,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
var s__58215__$1 = s__58215;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58215__$1);
if(temp__5735__auto____$3){
var s__58215__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58215__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58215__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58217 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58216 = (0);
while(true){
if((i__58216 < size__4581__auto____$1)){
var map__58218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58216);
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58216,i__58210,map__58218,map__58218__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58217,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58216,i__58210,map__58218,map__58218__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58217,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58248 = (i__58216 + (1));
i__58216 = G__58248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58217),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58214(cljs.core.chunk_rest(s__58215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58217),null);
}
} else {
var map__58220 = cljs.core.first(s__58215__$2);
var map__58220__$1 = (((((!((map__58220 == null))))?(((((map__58220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58220):map__58220);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58210,map__58220,map__58220__$1,title__$1,string,uid__$2,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58210,map__58220,map__58220__$1,title__$1,string,uid__$2,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58214(cljs.core.rest(s__58215__$2)));
}
} else {
return null;
}
break;
}
});})(i__58210,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
,null,null));
});})(i__58210,map__58212,map__58212__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58211,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58249 = (i__58210 + (1));
i__58210 = G__58249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58211),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208(cljs.core.chunk_rest(s__58209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58211),null);
}
} else {
var map__58222 = cljs.core.first(s__58209__$2);
var map__58222__$1 = (((((!((map__58222 == null))))?(((((map__58222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58222):map__58222);
var block = map__58222__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58224(s__58225){
return (new cljs.core.LazySeq(null,(function (){
var s__58225__$1 = s__58225;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58225__$1);
if(temp__5735__auto____$3){
var s__58225__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58225__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58225__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58227 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58226 = (0);
while(true){
if((i__58226 < size__4581__auto__)){
var map__58228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58226);
var map__58228__$1 = (((((!((map__58228 == null))))?(((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58228):map__58228);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58227,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58226,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58226,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58250 = (i__58226 + (1));
i__58226 = G__58250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58224(cljs.core.chunk_rest(s__58225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),null);
}
} else {
var map__58230 = cljs.core.first(s__58225__$2);
var map__58230__$1 = (((((!((map__58230 == null))))?(((((map__58230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58230):map__58230);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208_$_iter__58224(cljs.core.rest(s__58225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58222,map__58222__$1,block,uid__$1,parents,s__58209__$2,temp__5735__auto____$2,vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174_$_iter__58208(cljs.core.rest(s__58209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58205,group_title,group,s__58175__$2,temp__5735__auto____$1,vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58106_$_iter__58174(cljs.core.rest(s__58175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58171,linked_or_unlinked,refs,s__58107__$2,temp__5735__auto__,map__58094,map__58094__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58106(cljs.core.rest(s__58107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58232 = athens.db.get_node_document(ident);
var map__58232__$1 = (((((!((map__58232 == null))))?(((((map__58232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58232):map__58232);
var node = map__58232__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58234) : re_frame.core.subscribe.call(null,G__58234));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
