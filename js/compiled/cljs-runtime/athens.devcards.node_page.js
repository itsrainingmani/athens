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
var G__37901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37901) : re_frame.core.dispatch.call(null,G__37901));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__37902 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__37903 = athens.db.dsdb;
var G__37904 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__37902,G__37903,G__37904) : posh.reagent.q.call(null,G__37902,G__37903,G__37904));
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
return cljs.core.boolean$((function (){try{var vec__37906 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37906,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37906,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37906,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e37905){if((e37905 instanceof Object)){
var _ = e37905;
return false;
} else {
throw e37905;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__37909,editing_uid,ref_groups,timeline_page_QMARK_){
var map__37910 = p__37909;
var map__37910__$1 = (((((!((map__37910 == null))))?(((((map__37910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37910):map__37910);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__37912 = e.target.value;
var G__37913 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__37912,G__37913) : athens.devcards.node_page.db_handler.call(null,G__37912,G__37913));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),((cljs.core.not(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__37914(s__37915){
return (new cljs.core.LazySeq(null,(function (){
var s__37915__$1 = s__37915;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37915__$1);
if(temp__5735__auto__){
var s__37915__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37915__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37915__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37917 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37916 = (0);
while(true){
if((i__37916 < size__4581__auto__)){
var map__37918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37916);
var map__37918__$1 = (((((!((map__37918 == null))))?(((((map__37918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37918):map__37918);
var child = map__37918__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__37917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__38098 = (i__37916 + (1));
i__37916 = G__38098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37917),athens$devcards$node_page$node_page_el_$_iter__37914(cljs.core.chunk_rest(s__37915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37917),null);
}
} else {
var map__37920 = cljs.core.first(s__37915__$2);
var map__37920__$1 = (((((!((map__37920 == null))))?(((((map__37920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37920):map__37920);
var child = map__37920__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__37914(cljs.core.rest(s__37915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__37922(s__37923){
return (new cljs.core.LazySeq(null,(function (){
var s__37923__$1 = s__37923;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37923__$1);
if(temp__5735__auto__){
var s__37923__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37923__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37923__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37925 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37924 = (0);
while(true){
if((i__37924 < size__4581__auto__)){
var vec__37926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37924);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37926,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37926,(1),null);
cljs.core.chunk_append(b__37925,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__37924,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929(s__37930){
return (new cljs.core.LazySeq(null,((function (i__37924,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37930__$1 = s__37930;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37930__$1);
if(temp__5735__auto____$1){
var s__37930__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37930__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__37930__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__37932 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__37931 = (0);
while(true){
if((i__37931 < size__4581__auto____$1)){
var vec__37933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__37931);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37933,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37933,(1),null);
cljs.core.chunk_append(b__37932,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936(s__37937){
return (new cljs.core.LazySeq(null,((function (i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37937__$1 = s__37937;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__37937__$1);
if(temp__5735__auto____$2){
var s__37937__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__37937__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__37937__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__37939 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__37938 = (0);
while(true){
if((i__37938 < size__4581__auto____$2)){
var map__37940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__37938);
var map__37940__$1 = (((((!((map__37940 == null))))?(((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37940):map__37940);
var block = map__37940__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__37939,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__37938,i__37931,i__37924,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37942(s__37943){
return (new cljs.core.LazySeq(null,((function (i__37938,i__37931,i__37924,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37943__$1 = s__37943;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__37943__$1);
if(temp__5735__auto____$3){
var s__37943__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__37943__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__37943__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__37945 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__37944 = (0);
while(true){
if((i__37944 < size__4581__auto____$3)){
var map__37946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__37944);
var map__37946__$1 = (((((!((map__37946 == null))))?(((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37946):map__37946);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__37945,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37944,i__37938,i__37931,i__37924,map__37946,map__37946__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__37945,s__37943__$2,temp__5735__auto____$3,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37944,i__37938,i__37931,i__37924,map__37946,map__37946__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__37945,s__37943__$2,temp__5735__auto____$3,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38099 = (i__37944 + (1));
i__37944 = G__38099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37945),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37942(cljs.core.chunk_rest(s__37943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37945),null);
}
} else {
var map__37948 = cljs.core.first(s__37943__$2);
var map__37948__$1 = (((((!((map__37948 == null))))?(((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37948):map__37948);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37938,i__37931,i__37924,map__37948,map__37948__$1,title__$1,string,uid__$2,s__37943__$2,temp__5735__auto____$3,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37938,i__37931,i__37924,map__37948,map__37948__$1,title__$1,string,uid__$2,s__37943__$2,temp__5735__auto____$3,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37942(cljs.core.rest(s__37943__$2)));
}
} else {
return null;
}
break;
}
});})(i__37938,i__37931,i__37924,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37938,i__37931,i__37924,map__37940,map__37940__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__37939,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__38100 = (i__37938 + (1));
i__37938 = G__38100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37939),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936(cljs.core.chunk_rest(s__37937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37939),null);
}
} else {
var map__37950 = cljs.core.first(s__37937__$2);
var map__37950__$1 = (((((!((map__37950 == null))))?(((((map__37950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37950):map__37950);
var block = map__37950__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__37931,i__37924,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37952(s__37953){
return (new cljs.core.LazySeq(null,((function (i__37931,i__37924,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37953__$1 = s__37953;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__37953__$1);
if(temp__5735__auto____$3){
var s__37953__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__37953__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__37953__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__37955 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__37954 = (0);
while(true){
if((i__37954 < size__4581__auto____$2)){
var map__37956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__37954);
var map__37956__$1 = (((((!((map__37956 == null))))?(((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37956):map__37956);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__37955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37954,i__37931,i__37924,map__37956,map__37956__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__37955,s__37953__$2,temp__5735__auto____$3,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37954,i__37931,i__37924,map__37956,map__37956__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__37955,s__37953__$2,temp__5735__auto____$3,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38101 = (i__37954 + (1));
i__37954 = G__38101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37955),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37952(cljs.core.chunk_rest(s__37953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37955),null);
}
} else {
var map__37958 = cljs.core.first(s__37953__$2);
var map__37958__$1 = (((((!((map__37958 == null))))?(((((map__37958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37958):map__37958);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37931,i__37924,map__37958,map__37958__$1,title__$1,string,uid__$2,s__37953__$2,temp__5735__auto____$3,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37931,i__37924,map__37958,map__37958__$1,title__$1,string,uid__$2,s__37953__$2,temp__5735__auto____$3,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936_$_iter__37952(cljs.core.rest(s__37953__$2)));
}
} else {
return null;
}
break;
}
});})(i__37931,i__37924,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37931,i__37924,map__37950,map__37950__$1,block,uid__$1,parents,s__37937__$2,temp__5735__auto____$2,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37936(cljs.core.rest(s__37937__$2)));
}
} else {
return null;
}
break;
}
});})(i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37931,i__37924,vec__37933,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__37932,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__38102 = (i__37931 + (1));
i__37931 = G__38102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37932),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929(cljs.core.chunk_rest(s__37930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37932),null);
}
} else {
var vec__37960 = cljs.core.first(s__37930__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37960,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37960,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963(s__37964){
return (new cljs.core.LazySeq(null,((function (i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37964__$1 = s__37964;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__37964__$1);
if(temp__5735__auto____$2){
var s__37964__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__37964__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__37964__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__37966 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__37965 = (0);
while(true){
if((i__37965 < size__4581__auto____$1)){
var map__37967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__37965);
var map__37967__$1 = (((((!((map__37967 == null))))?(((((map__37967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37967):map__37967);
var block = map__37967__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__37966,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__37965,i__37924,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37970(s__37971){
return (new cljs.core.LazySeq(null,((function (i__37965,i__37924,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37971__$1 = s__37971;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__37971__$1);
if(temp__5735__auto____$3){
var s__37971__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__37971__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__37971__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__37973 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__37972 = (0);
while(true){
if((i__37972 < size__4581__auto____$2)){
var map__37976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__37972);
var map__37976__$1 = (((((!((map__37976 == null))))?(((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37976):map__37976);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__37973,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37972,i__37965,i__37924,map__37976,map__37976__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__37973,s__37971__$2,temp__5735__auto____$3,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37972,i__37965,i__37924,map__37976,map__37976__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__37973,s__37971__$2,temp__5735__auto____$3,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38103 = (i__37972 + (1));
i__37972 = G__38103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37973),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37970(cljs.core.chunk_rest(s__37971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37973),null);
}
} else {
var map__37984 = cljs.core.first(s__37971__$2);
var map__37984__$1 = (((((!((map__37984 == null))))?(((((map__37984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37984):map__37984);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37965,i__37924,map__37984,map__37984__$1,title__$1,string,uid__$2,s__37971__$2,temp__5735__auto____$3,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37965,i__37924,map__37984,map__37984__$1,title__$1,string,uid__$2,s__37971__$2,temp__5735__auto____$3,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37970(cljs.core.rest(s__37971__$2)));
}
} else {
return null;
}
break;
}
});})(i__37965,i__37924,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37965,i__37924,map__37967,map__37967__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__37966,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__38104 = (i__37965 + (1));
i__37965 = G__38104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963(cljs.core.chunk_rest(s__37964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),null);
}
} else {
var map__37988 = cljs.core.first(s__37964__$2);
var map__37988__$1 = (((((!((map__37988 == null))))?(((((map__37988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37988):map__37988);
var block = map__37988__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__37924,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37990(s__37991){
return (new cljs.core.LazySeq(null,((function (i__37924,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__37991__$1 = s__37991;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__37991__$1);
if(temp__5735__auto____$3){
var s__37991__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__37991__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__37991__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__37993 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__37992 = (0);
while(true){
if((i__37992 < size__4581__auto____$1)){
var map__38000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__37992);
var map__38000__$1 = (((((!((map__38000 == null))))?(((((map__38000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38000):map__38000);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__37993,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37992,i__37924,map__38000,map__38000__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__37993,s__37991__$2,temp__5735__auto____$3,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37992,i__37924,map__38000,map__38000__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__37993,s__37991__$2,temp__5735__auto____$3,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38105 = (i__37992 + (1));
i__37992 = G__38105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37993),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37990(cljs.core.chunk_rest(s__37991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37993),null);
}
} else {
var map__38006 = cljs.core.first(s__37991__$2);
var map__38006__$1 = (((((!((map__38006 == null))))?(((((map__38006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38006):map__38006);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37924,map__38006,map__38006__$1,title__$1,string,uid__$2,s__37991__$2,temp__5735__auto____$3,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__37924,map__38006,map__38006__$1,title__$1,string,uid__$2,s__37991__$2,temp__5735__auto____$3,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963_$_iter__37990(cljs.core.rest(s__37991__$2)));
}
} else {
return null;
}
break;
}
});})(i__37924,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37924,map__37988,map__37988__$1,block,uid__$1,parents,s__37964__$2,temp__5735__auto____$2,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929_$_iter__37963(cljs.core.rest(s__37964__$2)));
}
} else {
return null;
}
break;
}
});})(i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37924,vec__37960,group_title,group,s__37930__$2,temp__5735__auto____$1,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__37929(cljs.core.rest(s__37930__$2)));
}
} else {
return null;
}
break;
}
});})(i__37924,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__37924,vec__37926,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__37925,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__38106 = (i__37924 + (1));
i__37924 = G__38106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37925),athens$devcards$node_page$node_page_el_$_iter__37922(cljs.core.chunk_rest(s__37923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37925),null);
}
} else {
var vec__38009 = cljs.core.first(s__37923__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012(s__38013){
return (new cljs.core.LazySeq(null,(function (){
var s__38013__$1 = s__38013;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38013__$1);
if(temp__5735__auto____$1){
var s__38013__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38013__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38013__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38015 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38014 = (0);
while(true){
if((i__38014 < size__4581__auto__)){
var vec__38016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38014);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016,(1),null);
cljs.core.chunk_append(b__38015,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019(s__38020){
return (new cljs.core.LazySeq(null,((function (i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__38020__$1 = s__38020;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__38020__$1);
if(temp__5735__auto____$2){
var s__38020__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__38020__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38020__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38022 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38021 = (0);
while(true){
if((i__38021 < size__4581__auto____$1)){
var map__38023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__38021);
var map__38023__$1 = (((((!((map__38023 == null))))?(((((map__38023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38023):map__38023);
var block = map__38023__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38023__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38023__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__38022,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__38021,i__38014,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38025(s__38026){
return (new cljs.core.LazySeq(null,((function (i__38021,i__38014,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__38026__$1 = s__38026;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__38026__$1);
if(temp__5735__auto____$3){
var s__38026__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__38026__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__38026__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__38028 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__38027 = (0);
while(true){
if((i__38027 < size__4581__auto____$2)){
var map__38029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__38027);
var map__38029__$1 = (((((!((map__38029 == null))))?(((((map__38029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38029):map__38029);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38029__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38029__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38029__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__38028,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38027,i__38021,i__38014,map__38029,map__38029__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__38028,s__38026__$2,temp__5735__auto____$3,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38027,i__38021,i__38014,map__38029,map__38029__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__38028,s__38026__$2,temp__5735__auto____$3,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38107 = (i__38027 + (1));
i__38027 = G__38107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38028),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38025(cljs.core.chunk_rest(s__38026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38028),null);
}
} else {
var map__38032 = cljs.core.first(s__38026__$2);
var map__38032__$1 = (((((!((map__38032 == null))))?(((((map__38032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38032):map__38032);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38021,i__38014,map__38032,map__38032__$1,title__$1,string,uid__$2,s__38026__$2,temp__5735__auto____$3,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38021,i__38014,map__38032,map__38032__$1,title__$1,string,uid__$2,s__38026__$2,temp__5735__auto____$3,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38025(cljs.core.rest(s__38026__$2)));
}
} else {
return null;
}
break;
}
});})(i__38021,i__38014,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__38021,i__38014,map__38023,map__38023__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__38022,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__38108 = (i__38021 + (1));
i__38021 = G__38108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38022),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019(cljs.core.chunk_rest(s__38020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38022),null);
}
} else {
var map__38034 = cljs.core.first(s__38020__$2);
var map__38034__$1 = (((((!((map__38034 == null))))?(((((map__38034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38034):map__38034);
var block = map__38034__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38034__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38034__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__38014,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38036(s__38037){
return (new cljs.core.LazySeq(null,((function (i__38014,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__38037__$1 = s__38037;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__38037__$1);
if(temp__5735__auto____$3){
var s__38037__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__38037__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38037__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38039 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38038 = (0);
while(true){
if((i__38038 < size__4581__auto____$1)){
var map__38041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__38038);
var map__38041__$1 = (((((!((map__38041 == null))))?(((((map__38041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38041):map__38041);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38041__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__38039,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38038,i__38014,map__38041,map__38041__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__38039,s__38037__$2,temp__5735__auto____$3,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38038,i__38014,map__38041,map__38041__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__38039,s__38037__$2,temp__5735__auto____$3,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38109 = (i__38038 + (1));
i__38038 = G__38109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38036(cljs.core.chunk_rest(s__38037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),null);
}
} else {
var map__38043 = cljs.core.first(s__38037__$2);
var map__38043__$1 = (((((!((map__38043 == null))))?(((((map__38043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38043):map__38043);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38014,map__38043,map__38043__$1,title__$1,string,uid__$2,s__38037__$2,temp__5735__auto____$3,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38014,map__38043,map__38043__$1,title__$1,string,uid__$2,s__38037__$2,temp__5735__auto____$3,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019_$_iter__38036(cljs.core.rest(s__38037__$2)));
}
} else {
return null;
}
break;
}
});})(i__38014,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__38014,map__38034,map__38034__$1,block,uid__$1,parents,s__38020__$2,temp__5735__auto____$2,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38019(cljs.core.rest(s__38020__$2)));
}
} else {
return null;
}
break;
}
});})(i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__38014,vec__38016,group_title,group,c__4580__auto__,size__4581__auto__,b__38015,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__38110 = (i__38014 + (1));
i__38014 = G__38110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38015),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012(cljs.core.chunk_rest(s__38013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38015),null);
}
} else {
var vec__38045 = cljs.core.first(s__38013__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38045,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38045,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048(s__38049){
return (new cljs.core.LazySeq(null,(function (){
var s__38049__$1 = s__38049;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__38049__$1);
if(temp__5735__auto____$2){
var s__38049__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__38049__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38049__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38051 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38050 = (0);
while(true){
if((i__38050 < size__4581__auto__)){
var map__38052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38050);
var map__38052__$1 = (((((!((map__38052 == null))))?(((((map__38052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38052):map__38052);
var block = map__38052__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__38051,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__38050,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38054(s__38055){
return (new cljs.core.LazySeq(null,((function (i__38050,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
var s__38055__$1 = s__38055;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__38055__$1);
if(temp__5735__auto____$3){
var s__38055__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__38055__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38055__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38057 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38056 = (0);
while(true){
if((i__38056 < size__4581__auto____$1)){
var map__38058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__38056);
var map__38058__$1 = (((((!((map__38058 == null))))?(((((map__38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38058):map__38058);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__38057,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38056,i__38050,map__38058,map__38058__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__38057,s__38055__$2,temp__5735__auto____$3,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38056,i__38050,map__38058,map__38058__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__38057,s__38055__$2,temp__5735__auto____$3,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38111 = (i__38056 + (1));
i__38056 = G__38111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38057),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38054(cljs.core.chunk_rest(s__38055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38057),null);
}
} else {
var map__38060 = cljs.core.first(s__38055__$2);
var map__38060__$1 = (((((!((map__38060 == null))))?(((((map__38060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38060):map__38060);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38050,map__38060,map__38060__$1,title__$1,string,uid__$2,s__38055__$2,temp__5735__auto____$3,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38050,map__38060,map__38060__$1,title__$1,string,uid__$2,s__38055__$2,temp__5735__auto____$3,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38054(cljs.core.rest(s__38055__$2)));
}
} else {
return null;
}
break;
}
});})(i__38050,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
,null,null));
});})(i__38050,map__38052,map__38052__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__38051,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__38112 = (i__38050 + (1));
i__38050 = G__38112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38051),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048(cljs.core.chunk_rest(s__38049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38051),null);
}
} else {
var map__38062 = cljs.core.first(s__38049__$2);
var map__38062__$1 = (((((!((map__38062 == null))))?(((((map__38062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38062):map__38062);
var block = map__38062__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38064(s__38065){
return (new cljs.core.LazySeq(null,(function (){
var s__38065__$1 = s__38065;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__38065__$1);
if(temp__5735__auto____$3){
var s__38065__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__38065__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38065__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38067 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38066 = (0);
while(true){
if((i__38066 < size__4581__auto__)){
var map__38068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38066);
var map__38068__$1 = (((((!((map__38068 == null))))?(((((map__38068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38068):map__38068);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38068__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38068__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38068__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__38067,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38066,map__38068,map__38068__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__38067,s__38065__$2,temp__5735__auto____$3,map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__38066,map__38068,map__38068__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__38067,s__38065__$2,temp__5735__auto____$3,map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__38113 = (i__38066 + (1));
i__38066 = G__38113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38067),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38064(cljs.core.chunk_rest(s__38065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38067),null);
}
} else {
var map__38070 = cljs.core.first(s__38065__$2);
var map__38070__$1 = (((((!((map__38070 == null))))?(((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38070):map__38070);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38070,map__38070__$1,title__$1,string,uid__$2,s__38065__$2,temp__5735__auto____$3,map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__38070,map__38070__$1,title__$1,string,uid__$2,s__38065__$2,temp__5735__auto____$3,map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048_$_iter__38064(cljs.core.rest(s__38065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__38062,map__38062__$1,block,uid__$1,parents,s__38049__$2,temp__5735__auto____$2,vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012_$_iter__38048(cljs.core.rest(s__38049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__38045,group_title,group,s__38013__$2,temp__5735__auto____$1,vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__37922_$_iter__38012(cljs.core.rest(s__38013__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__38009,linked_or_unlinked,refs,s__37923__$2,temp__5735__auto__,map__37910,map__37910__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__37922(cljs.core.rest(s__37923__$2)));
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
var map__38072 = athens.db.get_node_document(ident);
var map__38072__$1 = (((((!((map__38072 == null))))?(((((map__38072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38072):map__38072);
var node = map__38072__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38072__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38072__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__38074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38074) : re_frame.core.subscribe.call(null,G__38074));
})());
var timeline_page_QMARK_ = athens.devcards.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
