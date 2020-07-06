goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.breadcrumbs');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.devcards.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__58080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58080) : re_frame.core.dispatch.call(null,G__58080));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58081 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58082 = athens.db.dsdb;
var G__58083 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58081,G__58082,G__58083) : posh.reagent.q.call(null,G__58081,G__58082,G__58083));
})());
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
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
athens.devcards.node_page.group_by_parent = (function athens$devcards$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.devcards.node_page.get_data = (function athens$devcards$node_page$get_data(pattern){
return cljs.core.seq(athens.devcards.node_page.group_by_parent(athens.devcards.node_page.merge_parents_and_block(athens.devcards.node_page.get_ref_ids(pattern))));
});
athens.devcards.node_page.is_timeline_page = (function athens$devcards$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58085 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58085,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58085,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58085,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58084){if((e58084 instanceof Object)){
var _ = e58084;
return false;
} else {
throw e58084;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58088,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58089 = p__58088;
var map__58089__$1 = (((((!((map__58089 == null))))?(((((map__58089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58089):map__58089);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58091 = e.target.value;
var G__58092 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58091,G__58092) : athens.devcards.node_page.db_handler.call(null,G__58091,G__58092));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),((cljs.core.not(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58093(s__58094){
return (new cljs.core.LazySeq(null,(function (){
var s__58094__$1 = s__58094;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58094__$1);
if(temp__5735__auto__){
var s__58094__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58094__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58094__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58096 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58095 = (0);
while(true){
if((i__58095 < size__4581__auto__)){
var map__58097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58095);
var map__58097__$1 = (((((!((map__58097 == null))))?(((((map__58097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58097):map__58097);
var child = map__58097__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58096,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58256 = (i__58095 + (1));
i__58095 = G__58256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58096),athens$devcards$node_page$node_page_el_$_iter__58093(cljs.core.chunk_rest(s__58094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58096),null);
}
} else {
var map__58099 = cljs.core.first(s__58094__$2);
var map__58099__$1 = (((((!((map__58099 == null))))?(((((map__58099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58099):map__58099);
var child = map__58099__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58093(cljs.core.rest(s__58094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58101(s__58102){
return (new cljs.core.LazySeq(null,(function (){
var s__58102__$1 = s__58102;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58102__$1);
if(temp__5735__auto__){
var s__58102__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58102__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58102__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58104 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58103 = (0);
while(true){
if((i__58103 < size__4581__auto__)){
var vec__58105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58103);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(1),null);
cljs.core.chunk_append(b__58104,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58103,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108(s__58109){
return (new cljs.core.LazySeq(null,((function (i__58103,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58109__$1 = s__58109;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58109__$1);
if(temp__5735__auto____$1){
var s__58109__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58109__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58109__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58111 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58110 = (0);
while(true){
if((i__58110 < size__4581__auto____$1)){
var vec__58112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58110);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58112,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58112,(1),null);
cljs.core.chunk_append(b__58111,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115(s__58116){
return (new cljs.core.LazySeq(null,((function (i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58116__$1 = s__58116;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58116__$1);
if(temp__5735__auto____$2){
var s__58116__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58116__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58116__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58118 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58117 = (0);
while(true){
if((i__58117 < size__4581__auto____$2)){
var map__58119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58117);
var map__58119__$1 = (((((!((map__58119 == null))))?(((((map__58119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58119):map__58119);
var block = map__58119__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58118,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58117,i__58110,i__58103,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58121(s__58122){
return (new cljs.core.LazySeq(null,((function (i__58117,i__58110,i__58103,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58122__$1 = s__58122;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58122__$1);
if(temp__5735__auto____$3){
var s__58122__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58122__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58122__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58124 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58123 = (0);
while(true){
if((i__58123 < size__4581__auto____$3)){
var map__58125 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58123);
var map__58125__$1 = (((((!((map__58125 == null))))?(((((map__58125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58125):map__58125);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58124,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58123,i__58117,i__58110,i__58103,map__58125,map__58125__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58124,s__58122__$2,temp__5735__auto____$3,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58123,i__58117,i__58110,i__58103,map__58125,map__58125__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58124,s__58122__$2,temp__5735__auto____$3,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58260 = (i__58123 + (1));
i__58123 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58124),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58121(cljs.core.chunk_rest(s__58122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58124),null);
}
} else {
var map__58127 = cljs.core.first(s__58122__$2);
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58117,i__58110,i__58103,map__58127,map__58127__$1,title__$1,string,uid__$2,s__58122__$2,temp__5735__auto____$3,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58117,i__58110,i__58103,map__58127,map__58127__$1,title__$1,string,uid__$2,s__58122__$2,temp__5735__auto____$3,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58121(cljs.core.rest(s__58122__$2)));
}
} else {
return null;
}
break;
}
});})(i__58117,i__58110,i__58103,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58117,i__58110,i__58103,map__58119,map__58119__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58118,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58261 = (i__58117 + (1));
i__58117 = G__58261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58118),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115(cljs.core.chunk_rest(s__58116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58118),null);
}
} else {
var map__58129 = cljs.core.first(s__58116__$2);
var map__58129__$1 = (((((!((map__58129 == null))))?(((((map__58129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58129):map__58129);
var block = map__58129__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58110,i__58103,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58131(s__58132){
return (new cljs.core.LazySeq(null,((function (i__58110,i__58103,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58132__$1 = s__58132;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58132__$1);
if(temp__5735__auto____$3){
var s__58132__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58132__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58132__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58134 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58133 = (0);
while(true){
if((i__58133 < size__4581__auto____$2)){
var map__58135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58133);
var map__58135__$1 = (((((!((map__58135 == null))))?(((((map__58135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58135):map__58135);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58134,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58133,i__58110,i__58103,map__58135,map__58135__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58134,s__58132__$2,temp__5735__auto____$3,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58133,i__58110,i__58103,map__58135,map__58135__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58134,s__58132__$2,temp__5735__auto____$3,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58262 = (i__58133 + (1));
i__58133 = G__58262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58134),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58131(cljs.core.chunk_rest(s__58132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58134),null);
}
} else {
var map__58137 = cljs.core.first(s__58132__$2);
var map__58137__$1 = (((((!((map__58137 == null))))?(((((map__58137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58137):map__58137);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58110,i__58103,map__58137,map__58137__$1,title__$1,string,uid__$2,s__58132__$2,temp__5735__auto____$3,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58110,i__58103,map__58137,map__58137__$1,title__$1,string,uid__$2,s__58132__$2,temp__5735__auto____$3,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115_$_iter__58131(cljs.core.rest(s__58132__$2)));
}
} else {
return null;
}
break;
}
});})(i__58110,i__58103,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58110,i__58103,map__58129,map__58129__$1,block,uid__$1,parents,s__58116__$2,temp__5735__auto____$2,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58115(cljs.core.rest(s__58116__$2)));
}
} else {
return null;
}
break;
}
});})(i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58110,i__58103,vec__58112,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58111,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58263 = (i__58110 + (1));
i__58110 = G__58263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58111),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108(cljs.core.chunk_rest(s__58109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58111),null);
}
} else {
var vec__58139 = cljs.core.first(s__58109__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58139,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58139,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142(s__58143){
return (new cljs.core.LazySeq(null,((function (i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58143__$1 = s__58143;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58143__$1);
if(temp__5735__auto____$2){
var s__58143__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58143__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58143__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58145 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58144 = (0);
while(true){
if((i__58144 < size__4581__auto____$1)){
var map__58146 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58144);
var map__58146__$1 = (((((!((map__58146 == null))))?(((((map__58146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58146):map__58146);
var block = map__58146__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58145,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58144,i__58103,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58148(s__58149){
return (new cljs.core.LazySeq(null,((function (i__58144,i__58103,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58149__$1 = s__58149;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58149__$1);
if(temp__5735__auto____$3){
var s__58149__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58149__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58149__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58151 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58150 = (0);
while(true){
if((i__58150 < size__4581__auto____$2)){
var map__58152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58150);
var map__58152__$1 = (((((!((map__58152 == null))))?(((((map__58152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58152):map__58152);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58151,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58150,i__58144,i__58103,map__58152,map__58152__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58151,s__58149__$2,temp__5735__auto____$3,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58150,i__58144,i__58103,map__58152,map__58152__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58151,s__58149__$2,temp__5735__auto____$3,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58264 = (i__58150 + (1));
i__58150 = G__58264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58151),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58148(cljs.core.chunk_rest(s__58149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58151),null);
}
} else {
var map__58154 = cljs.core.first(s__58149__$2);
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58144,i__58103,map__58154,map__58154__$1,title__$1,string,uid__$2,s__58149__$2,temp__5735__auto____$3,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58144,i__58103,map__58154,map__58154__$1,title__$1,string,uid__$2,s__58149__$2,temp__5735__auto____$3,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58148(cljs.core.rest(s__58149__$2)));
}
} else {
return null;
}
break;
}
});})(i__58144,i__58103,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58144,i__58103,map__58146,map__58146__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58145,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58265 = (i__58144 + (1));
i__58144 = G__58265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58145),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142(cljs.core.chunk_rest(s__58143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58145),null);
}
} else {
var map__58156 = cljs.core.first(s__58143__$2);
var map__58156__$1 = (((((!((map__58156 == null))))?(((((map__58156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58156):map__58156);
var block = map__58156__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58103,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58158(s__58159){
return (new cljs.core.LazySeq(null,((function (i__58103,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58159__$1 = s__58159;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58159__$1);
if(temp__5735__auto____$3){
var s__58159__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58159__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58159__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58161 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58160 = (0);
while(true){
if((i__58160 < size__4581__auto____$1)){
var map__58162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58160);
var map__58162__$1 = (((((!((map__58162 == null))))?(((((map__58162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58162):map__58162);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58161,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58160,i__58103,map__58162,map__58162__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58161,s__58159__$2,temp__5735__auto____$3,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58160,i__58103,map__58162,map__58162__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58161,s__58159__$2,temp__5735__auto____$3,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58266 = (i__58160 + (1));
i__58160 = G__58266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58161),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58158(cljs.core.chunk_rest(s__58159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58161),null);
}
} else {
var map__58164 = cljs.core.first(s__58159__$2);
var map__58164__$1 = (((((!((map__58164 == null))))?(((((map__58164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58164):map__58164);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58103,map__58164,map__58164__$1,title__$1,string,uid__$2,s__58159__$2,temp__5735__auto____$3,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58103,map__58164,map__58164__$1,title__$1,string,uid__$2,s__58159__$2,temp__5735__auto____$3,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142_$_iter__58158(cljs.core.rest(s__58159__$2)));
}
} else {
return null;
}
break;
}
});})(i__58103,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58103,map__58156,map__58156__$1,block,uid__$1,parents,s__58143__$2,temp__5735__auto____$2,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108_$_iter__58142(cljs.core.rest(s__58143__$2)));
}
} else {
return null;
}
break;
}
});})(i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58103,vec__58139,group_title,group,s__58109__$2,temp__5735__auto____$1,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58108(cljs.core.rest(s__58109__$2)));
}
} else {
return null;
}
break;
}
});})(i__58103,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58103,vec__58105,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58104,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58267 = (i__58103 + (1));
i__58103 = G__58267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58104),athens$devcards$node_page$node_page_el_$_iter__58101(cljs.core.chunk_rest(s__58102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58104),null);
}
} else {
var vec__58166 = cljs.core.first(s__58102__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169(s__58170){
return (new cljs.core.LazySeq(null,(function (){
var s__58170__$1 = s__58170;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58170__$1);
if(temp__5735__auto____$1){
var s__58170__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58170__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58170__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58172 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58171 = (0);
while(true){
if((i__58171 < size__4581__auto__)){
var vec__58173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58171);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58173,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58173,(1),null);
cljs.core.chunk_append(b__58172,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176(s__58177){
return (new cljs.core.LazySeq(null,((function (i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58177__$1 = s__58177;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58177__$1);
if(temp__5735__auto____$2){
var s__58177__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58177__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58177__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58179 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58178 = (0);
while(true){
if((i__58178 < size__4581__auto____$1)){
var map__58180 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58178);
var map__58180__$1 = (((((!((map__58180 == null))))?(((((map__58180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58180):map__58180);
var block = map__58180__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58179,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58178,i__58171,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58182(s__58183){
return (new cljs.core.LazySeq(null,((function (i__58178,i__58171,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58183__$1 = s__58183;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58183__$1);
if(temp__5735__auto____$3){
var s__58183__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58183__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58183__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58185 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58184 = (0);
while(true){
if((i__58184 < size__4581__auto____$2)){
var map__58186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58184);
var map__58186__$1 = (((((!((map__58186 == null))))?(((((map__58186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58186):map__58186);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58185,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58184,i__58178,i__58171,map__58186,map__58186__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58185,s__58183__$2,temp__5735__auto____$3,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58184,i__58178,i__58171,map__58186,map__58186__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58185,s__58183__$2,temp__5735__auto____$3,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58268 = (i__58184 + (1));
i__58184 = G__58268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58185),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58182(cljs.core.chunk_rest(s__58183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58185),null);
}
} else {
var map__58188 = cljs.core.first(s__58183__$2);
var map__58188__$1 = (((((!((map__58188 == null))))?(((((map__58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188):map__58188);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58178,i__58171,map__58188,map__58188__$1,title__$1,string,uid__$2,s__58183__$2,temp__5735__auto____$3,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58178,i__58171,map__58188,map__58188__$1,title__$1,string,uid__$2,s__58183__$2,temp__5735__auto____$3,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58182(cljs.core.rest(s__58183__$2)));
}
} else {
return null;
}
break;
}
});})(i__58178,i__58171,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58178,i__58171,map__58180,map__58180__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58179,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58269 = (i__58178 + (1));
i__58178 = G__58269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58179),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176(cljs.core.chunk_rest(s__58177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58179),null);
}
} else {
var map__58190 = cljs.core.first(s__58177__$2);
var map__58190__$1 = (((((!((map__58190 == null))))?(((((map__58190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58190):map__58190);
var block = map__58190__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58171,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58192(s__58193){
return (new cljs.core.LazySeq(null,((function (i__58171,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58193__$1 = s__58193;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58193__$1);
if(temp__5735__auto____$3){
var s__58193__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58193__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58193__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58195 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58194 = (0);
while(true){
if((i__58194 < size__4581__auto____$1)){
var map__58196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58194);
var map__58196__$1 = (((((!((map__58196 == null))))?(((((map__58196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58196):map__58196);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58194,i__58171,map__58196,map__58196__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58195,s__58193__$2,temp__5735__auto____$3,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58194,i__58171,map__58196,map__58196__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58195,s__58193__$2,temp__5735__auto____$3,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58270 = (i__58194 + (1));
i__58194 = G__58270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58195),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58192(cljs.core.chunk_rest(s__58193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58195),null);
}
} else {
var map__58198 = cljs.core.first(s__58193__$2);
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58171,map__58198,map__58198__$1,title__$1,string,uid__$2,s__58193__$2,temp__5735__auto____$3,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58171,map__58198,map__58198__$1,title__$1,string,uid__$2,s__58193__$2,temp__5735__auto____$3,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176_$_iter__58192(cljs.core.rest(s__58193__$2)));
}
} else {
return null;
}
break;
}
});})(i__58171,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58171,map__58190,map__58190__$1,block,uid__$1,parents,s__58177__$2,temp__5735__auto____$2,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58176(cljs.core.rest(s__58177__$2)));
}
} else {
return null;
}
break;
}
});})(i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58171,vec__58173,group_title,group,c__4580__auto__,size__4581__auto__,b__58172,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58271 = (i__58171 + (1));
i__58171 = G__58271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169(cljs.core.chunk_rest(s__58170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),null);
}
} else {
var vec__58200 = cljs.core.first(s__58170__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58200,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58200,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203(s__58204){
return (new cljs.core.LazySeq(null,(function (){
var s__58204__$1 = s__58204;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58204__$1);
if(temp__5735__auto____$2){
var s__58204__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58204__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58204__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58206 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58205 = (0);
while(true){
if((i__58205 < size__4581__auto__)){
var map__58207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58205);
var map__58207__$1 = (((((!((map__58207 == null))))?(((((map__58207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58207):map__58207);
var block = map__58207__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58207__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58207__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58206,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58205,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58209(s__58210){
return (new cljs.core.LazySeq(null,((function (i__58205,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
var s__58210__$1 = s__58210;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58210__$1);
if(temp__5735__auto____$3){
var s__58210__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58210__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58210__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58212 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58211 = (0);
while(true){
if((i__58211 < size__4581__auto____$1)){
var map__58213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58211);
var map__58213__$1 = (((((!((map__58213 == null))))?(((((map__58213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58213):map__58213);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58211,i__58205,map__58213,map__58213__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58212,s__58210__$2,temp__5735__auto____$3,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58211,i__58205,map__58213,map__58213__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58212,s__58210__$2,temp__5735__auto____$3,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58272 = (i__58211 + (1));
i__58211 = G__58272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58212),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58209(cljs.core.chunk_rest(s__58210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58212),null);
}
} else {
var map__58215 = cljs.core.first(s__58210__$2);
var map__58215__$1 = (((((!((map__58215 == null))))?(((((map__58215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58215):map__58215);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58205,map__58215,map__58215__$1,title__$1,string,uid__$2,s__58210__$2,temp__5735__auto____$3,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58205,map__58215,map__58215__$1,title__$1,string,uid__$2,s__58210__$2,temp__5735__auto____$3,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58209(cljs.core.rest(s__58210__$2)));
}
} else {
return null;
}
break;
}
});})(i__58205,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
,null,null));
});})(i__58205,map__58207,map__58207__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58206,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58273 = (i__58205 + (1));
i__58205 = G__58273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58206),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203(cljs.core.chunk_rest(s__58204__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58206),null);
}
} else {
var map__58217 = cljs.core.first(s__58204__$2);
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var block = map__58217__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58219(s__58220){
return (new cljs.core.LazySeq(null,(function (){
var s__58220__$1 = s__58220;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58220__$1);
if(temp__5735__auto____$3){
var s__58220__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58220__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58220__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58222 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58221 = (0);
while(true){
if((i__58221 < size__4581__auto__)){
var map__58223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58221);
var map__58223__$1 = (((((!((map__58223 == null))))?(((((map__58223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58223):map__58223);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58221,map__58223,map__58223__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58222,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58221,map__58223,map__58223__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58222,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58274 = (i__58221 + (1));
i__58221 = G__58274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58219(cljs.core.chunk_rest(s__58220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),null);
}
} else {
var map__58225 = cljs.core.first(s__58220__$2);
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58225,map__58225__$1,title__$1,string,uid__$2,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58225,map__58225__$1,title__$1,string,uid__$2,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203_$_iter__58219(cljs.core.rest(s__58220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58217,map__58217__$1,block,uid__$1,parents,s__58204__$2,temp__5735__auto____$2,vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169_$_iter__58203(cljs.core.rest(s__58204__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58200,group_title,group,s__58170__$2,temp__5735__auto____$1,vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58101_$_iter__58169(cljs.core.rest(s__58170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58166,linked_or_unlinked,refs,s__58102__$2,temp__5735__auto__,map__58089,map__58089__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58101(cljs.core.rest(s__58102__$2)));
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
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var map__58227 = athens.db.get_node_document(ident);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var node = map__58227__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58229) : re_frame.core.subscribe.call(null,G__58229));
})());
var timeline_page_QMARK_ = athens.devcards.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58230 = (function (meta58231){
this.meta58231 = meta58231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58232,meta58231__$1){
var self__ = this;
var _58232__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58230(meta58231__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58232){
var self__ = this;
var _58232__$1 = this;
return self__.meta58231;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58230.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58230.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58231","meta58231",-1458793178,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58230.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58230.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58230");

(athens.devcards.node_page.t_athens$devcards$node_page58230.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58230");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58230.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58230 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58230(meta58231){
return (new athens.devcards.node_page.t_athens$devcards$node_page58230(meta58231));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58230(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
