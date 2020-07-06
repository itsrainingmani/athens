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
var G__79962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__79962) : re_frame.core.dispatch.call(null,G__79962));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__79963 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__79964 = athens.db.dsdb;
var G__79965 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__79963,G__79964,G__79965) : posh.reagent.q.call(null,G__79963,G__79964,G__79965));
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
return cljs.core.boolean$((function (){try{var vec__79967 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79967,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79967,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79967,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e79966){if((e79966 instanceof Object)){
var _ = e79966;
return false;
} else {
throw e79966;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__79970,editing_uid,ref_groups,timeline_page_QMARK_){
var map__79971 = p__79970;
var map__79971__$1 = (((((!((map__79971 == null))))?(((((map__79971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79971):map__79971);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79971__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79971__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79971__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__79973 = e.target.value;
var G__79974 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__79973,G__79974) : athens.devcards.node_page.db_handler.call(null,G__79973,G__79974));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),((cljs.core.not(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__79975(s__79976){
return (new cljs.core.LazySeq(null,(function (){
var s__79976__$1 = s__79976;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__79976__$1);
if(temp__5735__auto__){
var s__79976__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79976__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__79976__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__79978 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__79977 = (0);
while(true){
if((i__79977 < size__4581__auto__)){
var map__79979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__79977);
var map__79979__$1 = (((((!((map__79979 == null))))?(((((map__79979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79979):map__79979);
var child = map__79979__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79979__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__79978,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__80133 = (i__79977 + (1));
i__79977 = G__80133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79978),athens$devcards$node_page$node_page_el_$_iter__79975(cljs.core.chunk_rest(s__79976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79978),null);
}
} else {
var map__79981 = cljs.core.first(s__79976__$2);
var map__79981__$1 = (((((!((map__79981 == null))))?(((((map__79981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79981):map__79981);
var child = map__79981__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79981__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__79975(cljs.core.rest(s__79976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__79983(s__79984){
return (new cljs.core.LazySeq(null,(function (){
var s__79984__$1 = s__79984;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__79984__$1);
if(temp__5735__auto__){
var s__79984__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79984__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__79984__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__79986 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__79985 = (0);
while(true){
if((i__79985 < size__4581__auto__)){
var vec__79987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__79985);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79987,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79987,(1),null);
cljs.core.chunk_append(b__79986,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__79985,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990(s__79991){
return (new cljs.core.LazySeq(null,((function (i__79985,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__79991__$1 = s__79991;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__79991__$1);
if(temp__5735__auto____$1){
var s__79991__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79991__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__79991__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__79993 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__79992 = (0);
while(true){
if((i__79992 < size__4581__auto____$1)){
var vec__79994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__79992);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79994,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79994,(1),null);
cljs.core.chunk_append(b__79993,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997(s__79998){
return (new cljs.core.LazySeq(null,((function (i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__79998__$1 = s__79998;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__79998__$1);
if(temp__5735__auto____$2){
var s__79998__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79998__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__79998__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__80000 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__79999 = (0);
while(true){
if((i__79999 < size__4581__auto____$2)){
var map__80001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__79999);
var map__80001__$1 = (((((!((map__80001 == null))))?(((((map__80001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80001):map__80001);
var block = map__80001__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80001__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80001__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__80000,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__79999,i__79992,i__79985,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80003(s__80004){
return (new cljs.core.LazySeq(null,((function (i__79999,i__79992,i__79985,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80004__$1 = s__80004;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80004__$1);
if(temp__5735__auto____$3){
var s__80004__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80004__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__80004__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__80006 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__80005 = (0);
while(true){
if((i__80005 < size__4581__auto____$3)){
var map__80007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__80005);
var map__80007__$1 = (((((!((map__80007 == null))))?(((((map__80007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80007):map__80007);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80007__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80007__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80007__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80006,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80005,i__79999,i__79992,i__79985,map__80007,map__80007__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__80006,s__80004__$2,temp__5735__auto____$3,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80005,i__79999,i__79992,i__79985,map__80007,map__80007__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__80006,s__80004__$2,temp__5735__auto____$3,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80141 = (i__80005 + (1));
i__80005 = G__80141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80006),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80003(cljs.core.chunk_rest(s__80004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80006),null);
}
} else {
var map__80009 = cljs.core.first(s__80004__$2);
var map__80009__$1 = (((((!((map__80009 == null))))?(((((map__80009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80009):map__80009);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80009__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80009__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80009__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79999,i__79992,i__79985,map__80009,map__80009__$1,title__$1,string,uid__$2,s__80004__$2,temp__5735__auto____$3,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__79999,i__79992,i__79985,map__80009,map__80009__$1,title__$1,string,uid__$2,s__80004__$2,temp__5735__auto____$3,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80003(cljs.core.rest(s__80004__$2)));
}
} else {
return null;
}
break;
}
});})(i__79999,i__79992,i__79985,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79999,i__79992,i__79985,map__80001,map__80001__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__80000,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__80143 = (i__79999 + (1));
i__79999 = G__80143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80000),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997(cljs.core.chunk_rest(s__79998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80000),null);
}
} else {
var map__80011 = cljs.core.first(s__79998__$2);
var map__80011__$1 = (((((!((map__80011 == null))))?(((((map__80011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80011):map__80011);
var block = map__80011__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80011__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80011__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__79992,i__79985,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80013(s__80014){
return (new cljs.core.LazySeq(null,((function (i__79992,i__79985,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80014__$1 = s__80014;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80014__$1);
if(temp__5735__auto____$3){
var s__80014__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80014__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__80014__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__80016 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__80015 = (0);
while(true){
if((i__80015 < size__4581__auto____$2)){
var map__80017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__80015);
var map__80017__$1 = (((((!((map__80017 == null))))?(((((map__80017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80017):map__80017);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80017__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80017__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80017__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80016,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80015,i__79992,i__79985,map__80017,map__80017__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80016,s__80014__$2,temp__5735__auto____$3,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80015,i__79992,i__79985,map__80017,map__80017__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80016,s__80014__$2,temp__5735__auto____$3,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80144 = (i__80015 + (1));
i__80015 = G__80144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80016),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80013(cljs.core.chunk_rest(s__80014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80016),null);
}
} else {
var map__80019 = cljs.core.first(s__80014__$2);
var map__80019__$1 = (((((!((map__80019 == null))))?(((((map__80019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80019):map__80019);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80019__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80019__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80019__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79992,i__79985,map__80019,map__80019__$1,title__$1,string,uid__$2,s__80014__$2,temp__5735__auto____$3,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__79992,i__79985,map__80019,map__80019__$1,title__$1,string,uid__$2,s__80014__$2,temp__5735__auto____$3,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997_$_iter__80013(cljs.core.rest(s__80014__$2)));
}
} else {
return null;
}
break;
}
});})(i__79992,i__79985,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79992,i__79985,map__80011,map__80011__$1,block,uid__$1,parents,s__79998__$2,temp__5735__auto____$2,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__79997(cljs.core.rest(s__79998__$2)));
}
} else {
return null;
}
break;
}
});})(i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79992,i__79985,vec__79994,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__79993,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__80145 = (i__79992 + (1));
i__79992 = G__80145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79993),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990(cljs.core.chunk_rest(s__79991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79993),null);
}
} else {
var vec__80021 = cljs.core.first(s__79991__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80021,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80021,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024(s__80025){
return (new cljs.core.LazySeq(null,((function (i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80025__$1 = s__80025;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__80025__$1);
if(temp__5735__auto____$2){
var s__80025__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__80025__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80025__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80027 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80026 = (0);
while(true){
if((i__80026 < size__4581__auto____$1)){
var map__80028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80026);
var map__80028__$1 = (((((!((map__80028 == null))))?(((((map__80028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80028):map__80028);
var block = map__80028__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80028__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80028__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__80027,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__80026,i__79985,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80030(s__80031){
return (new cljs.core.LazySeq(null,((function (i__80026,i__79985,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80031__$1 = s__80031;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80031__$1);
if(temp__5735__auto____$3){
var s__80031__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80031__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__80031__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__80033 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__80032 = (0);
while(true){
if((i__80032 < size__4581__auto____$2)){
var map__80034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__80032);
var map__80034__$1 = (((((!((map__80034 == null))))?(((((map__80034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80034):map__80034);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80034__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80034__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80034__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80033,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80032,i__80026,i__79985,map__80034,map__80034__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80033,s__80031__$2,temp__5735__auto____$3,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80032,i__80026,i__79985,map__80034,map__80034__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80033,s__80031__$2,temp__5735__auto____$3,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80146 = (i__80032 + (1));
i__80032 = G__80146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80033),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80030(cljs.core.chunk_rest(s__80031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80033),null);
}
} else {
var map__80036 = cljs.core.first(s__80031__$2);
var map__80036__$1 = (((((!((map__80036 == null))))?(((((map__80036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80036):map__80036);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80036__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80036__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80036__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80026,i__79985,map__80036,map__80036__$1,title__$1,string,uid__$2,s__80031__$2,temp__5735__auto____$3,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80026,i__79985,map__80036,map__80036__$1,title__$1,string,uid__$2,s__80031__$2,temp__5735__auto____$3,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80030(cljs.core.rest(s__80031__$2)));
}
} else {
return null;
}
break;
}
});})(i__80026,i__79985,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__80026,i__79985,map__80028,map__80028__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80027,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__80147 = (i__80026 + (1));
i__80026 = G__80147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80027),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024(cljs.core.chunk_rest(s__80025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80027),null);
}
} else {
var map__80038 = cljs.core.first(s__80025__$2);
var map__80038__$1 = (((((!((map__80038 == null))))?(((((map__80038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80038):map__80038);
var block = map__80038__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80038__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80038__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__79985,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80040(s__80041){
return (new cljs.core.LazySeq(null,((function (i__79985,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80041__$1 = s__80041;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80041__$1);
if(temp__5735__auto____$3){
var s__80041__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80041__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80041__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80043 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80042 = (0);
while(true){
if((i__80042 < size__4581__auto____$1)){
var map__80044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80042);
var map__80044__$1 = (((((!((map__80044 == null))))?(((((map__80044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80044):map__80044);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80044__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80044__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80044__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80043,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80042,i__79985,map__80044,map__80044__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80043,s__80041__$2,temp__5735__auto____$3,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80042,i__79985,map__80044,map__80044__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80043,s__80041__$2,temp__5735__auto____$3,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80148 = (i__80042 + (1));
i__80042 = G__80148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80043),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80040(cljs.core.chunk_rest(s__80041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80043),null);
}
} else {
var map__80046 = cljs.core.first(s__80041__$2);
var map__80046__$1 = (((((!((map__80046 == null))))?(((((map__80046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80046):map__80046);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80046__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80046__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80046__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79985,map__80046,map__80046__$1,title__$1,string,uid__$2,s__80041__$2,temp__5735__auto____$3,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__79985,map__80046,map__80046__$1,title__$1,string,uid__$2,s__80041__$2,temp__5735__auto____$3,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024_$_iter__80040(cljs.core.rest(s__80041__$2)));
}
} else {
return null;
}
break;
}
});})(i__79985,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79985,map__80038,map__80038__$1,block,uid__$1,parents,s__80025__$2,temp__5735__auto____$2,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990_$_iter__80024(cljs.core.rest(s__80025__$2)));
}
} else {
return null;
}
break;
}
});})(i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79985,vec__80021,group_title,group,s__79991__$2,temp__5735__auto____$1,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__79990(cljs.core.rest(s__79991__$2)));
}
} else {
return null;
}
break;
}
});})(i__79985,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__79985,vec__79987,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__79986,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__80149 = (i__79985 + (1));
i__79985 = G__80149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79986),athens$devcards$node_page$node_page_el_$_iter__79983(cljs.core.chunk_rest(s__79984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79986),null);
}
} else {
var vec__80048 = cljs.core.first(s__79984__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80048,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80048,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051(s__80052){
return (new cljs.core.LazySeq(null,(function (){
var s__80052__$1 = s__80052;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80052__$1);
if(temp__5735__auto____$1){
var s__80052__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80052__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80052__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80054 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80053 = (0);
while(true){
if((i__80053 < size__4581__auto__)){
var vec__80055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80053);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80055,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80055,(1),null);
cljs.core.chunk_append(b__80054,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058(s__80059){
return (new cljs.core.LazySeq(null,((function (i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80059__$1 = s__80059;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__80059__$1);
if(temp__5735__auto____$2){
var s__80059__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__80059__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80059__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80061 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80060 = (0);
while(true){
if((i__80060 < size__4581__auto____$1)){
var map__80062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80060);
var map__80062__$1 = (((((!((map__80062 == null))))?(((((map__80062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80062):map__80062);
var block = map__80062__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80062__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80062__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__80061,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__80060,i__80053,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80064(s__80065){
return (new cljs.core.LazySeq(null,((function (i__80060,i__80053,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80065__$1 = s__80065;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80065__$1);
if(temp__5735__auto____$3){
var s__80065__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80065__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__80065__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__80067 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__80066 = (0);
while(true){
if((i__80066 < size__4581__auto____$2)){
var map__80068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__80066);
var map__80068__$1 = (((((!((map__80068 == null))))?(((((map__80068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80068):map__80068);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80068__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80068__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80068__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80067,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80066,i__80060,i__80053,map__80068,map__80068__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80067,s__80065__$2,temp__5735__auto____$3,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80066,i__80060,i__80053,map__80068,map__80068__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__80067,s__80065__$2,temp__5735__auto____$3,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80150 = (i__80066 + (1));
i__80066 = G__80150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80067),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80064(cljs.core.chunk_rest(s__80065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80067),null);
}
} else {
var map__80070 = cljs.core.first(s__80065__$2);
var map__80070__$1 = (((((!((map__80070 == null))))?(((((map__80070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80070):map__80070);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80070__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80070__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80070__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80060,i__80053,map__80070,map__80070__$1,title__$1,string,uid__$2,s__80065__$2,temp__5735__auto____$3,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80060,i__80053,map__80070,map__80070__$1,title__$1,string,uid__$2,s__80065__$2,temp__5735__auto____$3,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80064(cljs.core.rest(s__80065__$2)));
}
} else {
return null;
}
break;
}
});})(i__80060,i__80053,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__80060,i__80053,map__80062,map__80062__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__80061,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__80151 = (i__80060 + (1));
i__80060 = G__80151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80061),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058(cljs.core.chunk_rest(s__80059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80061),null);
}
} else {
var map__80072 = cljs.core.first(s__80059__$2);
var map__80072__$1 = (((((!((map__80072 == null))))?(((((map__80072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80072):map__80072);
var block = map__80072__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80072__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80072__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__80053,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80074(s__80075){
return (new cljs.core.LazySeq(null,((function (i__80053,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80075__$1 = s__80075;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80075__$1);
if(temp__5735__auto____$3){
var s__80075__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80075__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80075__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80077 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80076 = (0);
while(true){
if((i__80076 < size__4581__auto____$1)){
var map__80078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80076);
var map__80078__$1 = (((((!((map__80078 == null))))?(((((map__80078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80078):map__80078);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80078__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80078__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80078__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80077,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80076,i__80053,map__80078,map__80078__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80077,s__80075__$2,temp__5735__auto____$3,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80076,i__80053,map__80078,map__80078__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80077,s__80075__$2,temp__5735__auto____$3,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80152 = (i__80076 + (1));
i__80076 = G__80152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80077),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80074(cljs.core.chunk_rest(s__80075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80077),null);
}
} else {
var map__80080 = cljs.core.first(s__80075__$2);
var map__80080__$1 = (((((!((map__80080 == null))))?(((((map__80080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80080):map__80080);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80080__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80080__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80080__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80053,map__80080,map__80080__$1,title__$1,string,uid__$2,s__80075__$2,temp__5735__auto____$3,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80053,map__80080,map__80080__$1,title__$1,string,uid__$2,s__80075__$2,temp__5735__auto____$3,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058_$_iter__80074(cljs.core.rest(s__80075__$2)));
}
} else {
return null;
}
break;
}
});})(i__80053,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__80053,map__80072,map__80072__$1,block,uid__$1,parents,s__80059__$2,temp__5735__auto____$2,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80058(cljs.core.rest(s__80059__$2)));
}
} else {
return null;
}
break;
}
});})(i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__80053,vec__80055,group_title,group,c__4580__auto__,size__4581__auto__,b__80054,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__80153 = (i__80053 + (1));
i__80053 = G__80153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80054),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051(cljs.core.chunk_rest(s__80052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80054),null);
}
} else {
var vec__80082 = cljs.core.first(s__80052__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80082,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80082,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085(s__80086){
return (new cljs.core.LazySeq(null,(function (){
var s__80086__$1 = s__80086;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__80086__$1);
if(temp__5735__auto____$2){
var s__80086__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__80086__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80086__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80088 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80087 = (0);
while(true){
if((i__80087 < size__4581__auto__)){
var map__80089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80087);
var map__80089__$1 = (((((!((map__80089 == null))))?(((((map__80089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80089):map__80089);
var block = map__80089__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80089__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80089__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__80088,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__80087,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80091(s__80092){
return (new cljs.core.LazySeq(null,((function (i__80087,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
var s__80092__$1 = s__80092;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80092__$1);
if(temp__5735__auto____$3){
var s__80092__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80092__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80092__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80094 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80093 = (0);
while(true){
if((i__80093 < size__4581__auto____$1)){
var map__80095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80093);
var map__80095__$1 = (((((!((map__80095 == null))))?(((((map__80095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80095):map__80095);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80095__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80095__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80095__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80094,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80093,i__80087,map__80095,map__80095__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80094,s__80092__$2,temp__5735__auto____$3,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80093,i__80087,map__80095,map__80095__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__80094,s__80092__$2,temp__5735__auto____$3,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80154 = (i__80093 + (1));
i__80093 = G__80154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80094),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80091(cljs.core.chunk_rest(s__80092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80094),null);
}
} else {
var map__80097 = cljs.core.first(s__80092__$2);
var map__80097__$1 = (((((!((map__80097 == null))))?(((((map__80097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80097):map__80097);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80087,map__80097,map__80097__$1,title__$1,string,uid__$2,s__80092__$2,temp__5735__auto____$3,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80087,map__80097,map__80097__$1,title__$1,string,uid__$2,s__80092__$2,temp__5735__auto____$3,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80091(cljs.core.rest(s__80092__$2)));
}
} else {
return null;
}
break;
}
});})(i__80087,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
,null,null));
});})(i__80087,map__80089,map__80089__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__80088,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__80155 = (i__80087 + (1));
i__80087 = G__80155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80088),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085(cljs.core.chunk_rest(s__80086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80088),null);
}
} else {
var map__80099 = cljs.core.first(s__80086__$2);
var map__80099__$1 = (((((!((map__80099 == null))))?(((((map__80099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80099):map__80099);
var block = map__80099__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80099__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80099__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80101(s__80102){
return (new cljs.core.LazySeq(null,(function (){
var s__80102__$1 = s__80102;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__80102__$1);
if(temp__5735__auto____$3){
var s__80102__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__80102__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80102__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80104 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80103 = (0);
while(true){
if((i__80103 < size__4581__auto__)){
var map__80105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80103);
var map__80105__$1 = (((((!((map__80105 == null))))?(((((map__80105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80105):map__80105);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80105__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80105__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80105__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__80104,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80103,map__80105,map__80105__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__80104,s__80102__$2,temp__5735__auto____$3,map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__80103,map__80105,map__80105__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__80104,s__80102__$2,temp__5735__auto____$3,map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__80156 = (i__80103 + (1));
i__80103 = G__80156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80104),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80101(cljs.core.chunk_rest(s__80102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80104),null);
}
} else {
var map__80107 = cljs.core.first(s__80102__$2);
var map__80107__$1 = (((((!((map__80107 == null))))?(((((map__80107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80107):map__80107);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__80107,map__80107__$1,title__$1,string,uid__$2,s__80102__$2,temp__5735__auto____$3,map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__80107,map__80107__$1,title__$1,string,uid__$2,s__80102__$2,temp__5735__auto____$3,map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085_$_iter__80101(cljs.core.rest(s__80102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__80099,map__80099__$1,block,uid__$1,parents,s__80086__$2,temp__5735__auto____$2,vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051_$_iter__80085(cljs.core.rest(s__80086__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__80082,group_title,group,s__80052__$2,temp__5735__auto____$1,vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__79983_$_iter__80051(cljs.core.rest(s__80052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__80048,linked_or_unlinked,refs,s__79984__$2,temp__5735__auto__,map__79971,map__79971__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__79983(cljs.core.rest(s__79984__$2)));
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
var map__80109 = athens.db.get_node_document(ident);
var map__80109__$1 = (((((!((map__80109 == null))))?(((((map__80109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80109):map__80109);
var node = map__80109__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__80111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__80111) : re_frame.core.subscribe.call(null,G__80111));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page80112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page80112 = (function (meta80113){
this.meta80113 = meta80113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page80112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80114,meta80113__$1){
var self__ = this;
var _80114__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page80112(meta80113__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page80112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80114){
var self__ = this;
var _80114__$1 = this;
return self__.meta80113;
}));

(athens.devcards.node_page.t_athens$devcards$node_page80112.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page80112.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__64674__auto__,devcard_opts__64675__auto__){
var self__ = this;
var this__64674__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__64675__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__64697__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__64697__auto__)){
return (function (data_atom__64698__auto__,owner__64699__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__64697__auto__,data_atom__64698__auto__,owner__64699__auto__], null));
});
} else {
return reagent.core.as_element(v__64697__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__64675__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page80112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta80113","meta80113",-1100683305,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page80112.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page80112.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page80112");

(athens.devcards.node_page.t_athens$devcards$node_page80112.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page80112");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page80112.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page80112 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page80112(meta80113){
return (new athens.devcards.node_page.t_athens$devcards$node_page80112(meta80113));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page80112(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
