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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58234) : re_frame.core.dispatch.call(null,G__58234));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58235 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58236 = athens.db.dsdb;
var G__58237 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58235,G__58236,G__58237) : posh.reagent.q.call(null,G__58235,G__58236,G__58237));
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
return cljs.core.boolean$((function (){try{var vec__58239 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58239,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58239,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58239,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58238){if((e58238 instanceof Object)){
var _ = e58238;
return false;
} else {
throw e58238;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58242,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58243 = p__58242;
var map__58243__$1 = (((((!((map__58243 == null))))?(((((map__58243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58243):map__58243);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58245 = e.target.value;
var G__58246 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58245,G__58246) : athens.views.node_page.db_handler.call(null,G__58245,G__58246));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58247(s__58248){
return (new cljs.core.LazySeq(null,(function (){
var s__58248__$1 = s__58248;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58248__$1);
if(temp__5735__auto__){
var s__58248__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58248__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58248__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58250 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58249 = (0);
while(true){
if((i__58249 < size__4581__auto__)){
var map__58251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58249);
var map__58251__$1 = (((((!((map__58251 == null))))?(((((map__58251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58251):map__58251);
var child = map__58251__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58250,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58384 = (i__58249 + (1));
i__58249 = G__58384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58250),athens$views$node_page$node_page_el_$_iter__58247(cljs.core.chunk_rest(s__58248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58250),null);
}
} else {
var map__58253 = cljs.core.first(s__58248__$2);
var map__58253__$1 = (((((!((map__58253 == null))))?(((((map__58253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58253):map__58253);
var child = map__58253__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58247(cljs.core.rest(s__58248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58255(s__58256){
return (new cljs.core.LazySeq(null,(function (){
var s__58256__$1 = s__58256;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58256__$1);
if(temp__5735__auto__){
var s__58256__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58256__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58256__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58258 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58257 = (0);
while(true){
if((i__58257 < size__4581__auto__)){
var vec__58259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58257);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58259,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58259,(1),null);
cljs.core.chunk_append(b__58258,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58257,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262(s__58263){
return (new cljs.core.LazySeq(null,((function (i__58257,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58263__$1 = s__58263;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58263__$1);
if(temp__5735__auto____$1){
var s__58263__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58263__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58263__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58265 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58264 = (0);
while(true){
if((i__58264 < size__4581__auto____$1)){
var vec__58266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58264);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58266,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58266,(1),null);
cljs.core.chunk_append(b__58265,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269(s__58270){
return (new cljs.core.LazySeq(null,((function (i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58270__$1 = s__58270;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58270__$1);
if(temp__5735__auto____$2){
var s__58270__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58270__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58270__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58272 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58271 = (0);
while(true){
if((i__58271 < size__4581__auto____$2)){
var map__58273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58271);
var map__58273__$1 = (((((!((map__58273 == null))))?(((((map__58273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58273):map__58273);
var block = map__58273__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58272,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58271,i__58264,i__58257,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58275(s__58276){
return (new cljs.core.LazySeq(null,((function (i__58271,i__58264,i__58257,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58276__$1 = s__58276;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58276__$1);
if(temp__5735__auto____$3){
var s__58276__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58276__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58276__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58278 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58277 = (0);
while(true){
if((i__58277 < size__4581__auto____$3)){
var map__58279 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58277);
var map__58279__$1 = (((((!((map__58279 == null))))?(((((map__58279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58279):map__58279);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58278,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58277,i__58271,i__58264,i__58257,map__58279,map__58279__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58278,s__58276__$2,temp__5735__auto____$3,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58277,i__58271,i__58264,i__58257,map__58279,map__58279__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58278,s__58276__$2,temp__5735__auto____$3,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58385 = (i__58277 + (1));
i__58277 = G__58385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58278),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58275(cljs.core.chunk_rest(s__58276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58278),null);
}
} else {
var map__58281 = cljs.core.first(s__58276__$2);
var map__58281__$1 = (((((!((map__58281 == null))))?(((((map__58281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58281):map__58281);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58271,i__58264,i__58257,map__58281,map__58281__$1,title__$1,string,uid__$2,s__58276__$2,temp__5735__auto____$3,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58271,i__58264,i__58257,map__58281,map__58281__$1,title__$1,string,uid__$2,s__58276__$2,temp__5735__auto____$3,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58275(cljs.core.rest(s__58276__$2)));
}
} else {
return null;
}
break;
}
});})(i__58271,i__58264,i__58257,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58271,i__58264,i__58257,map__58273,map__58273__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58272,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58386 = (i__58271 + (1));
i__58271 = G__58386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58272),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269(cljs.core.chunk_rest(s__58270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58272),null);
}
} else {
var map__58283 = cljs.core.first(s__58270__$2);
var map__58283__$1 = (((((!((map__58283 == null))))?(((((map__58283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58283):map__58283);
var block = map__58283__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58264,i__58257,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58285(s__58286){
return (new cljs.core.LazySeq(null,((function (i__58264,i__58257,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58286__$1 = s__58286;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58286__$1);
if(temp__5735__auto____$3){
var s__58286__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58286__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58286__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58288 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58287 = (0);
while(true){
if((i__58287 < size__4581__auto____$2)){
var map__58289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58287);
var map__58289__$1 = (((((!((map__58289 == null))))?(((((map__58289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58289):map__58289);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58287,i__58264,i__58257,map__58289,map__58289__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58288,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58287,i__58264,i__58257,map__58289,map__58289__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58288,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58387 = (i__58287 + (1));
i__58287 = G__58387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58288),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58285(cljs.core.chunk_rest(s__58286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58288),null);
}
} else {
var map__58291 = cljs.core.first(s__58286__$2);
var map__58291__$1 = (((((!((map__58291 == null))))?(((((map__58291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58291):map__58291);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58264,i__58257,map__58291,map__58291__$1,title__$1,string,uid__$2,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58264,i__58257,map__58291,map__58291__$1,title__$1,string,uid__$2,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269_$_iter__58285(cljs.core.rest(s__58286__$2)));
}
} else {
return null;
}
break;
}
});})(i__58264,i__58257,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58264,i__58257,map__58283,map__58283__$1,block,uid__$1,parents,s__58270__$2,temp__5735__auto____$2,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58269(cljs.core.rest(s__58270__$2)));
}
} else {
return null;
}
break;
}
});})(i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58264,i__58257,vec__58266,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58388 = (i__58264 + (1));
i__58264 = G__58388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262(cljs.core.chunk_rest(s__58263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),null);
}
} else {
var vec__58293 = cljs.core.first(s__58263__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58293,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58293,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296(s__58297){
return (new cljs.core.LazySeq(null,((function (i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58297__$1 = s__58297;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58297__$1);
if(temp__5735__auto____$2){
var s__58297__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58297__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58297__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58299 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58298 = (0);
while(true){
if((i__58298 < size__4581__auto____$1)){
var map__58300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58298);
var map__58300__$1 = (((((!((map__58300 == null))))?(((((map__58300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58300):map__58300);
var block = map__58300__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58299,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58298,i__58257,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58302(s__58303){
return (new cljs.core.LazySeq(null,((function (i__58298,i__58257,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58303__$1 = s__58303;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58303__$1);
if(temp__5735__auto____$3){
var s__58303__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58303__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58303__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58305 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58304 = (0);
while(true){
if((i__58304 < size__4581__auto____$2)){
var map__58306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58304);
var map__58306__$1 = (((((!((map__58306 == null))))?(((((map__58306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58306):map__58306);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58304,i__58298,i__58257,map__58306,map__58306__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58305,s__58303__$2,temp__5735__auto____$3,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58304,i__58298,i__58257,map__58306,map__58306__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58305,s__58303__$2,temp__5735__auto____$3,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58389 = (i__58304 + (1));
i__58304 = G__58389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58305),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58302(cljs.core.chunk_rest(s__58303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58305),null);
}
} else {
var map__58308 = cljs.core.first(s__58303__$2);
var map__58308__$1 = (((((!((map__58308 == null))))?(((((map__58308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58308):map__58308);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58298,i__58257,map__58308,map__58308__$1,title__$1,string,uid__$2,s__58303__$2,temp__5735__auto____$3,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58298,i__58257,map__58308,map__58308__$1,title__$1,string,uid__$2,s__58303__$2,temp__5735__auto____$3,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58302(cljs.core.rest(s__58303__$2)));
}
} else {
return null;
}
break;
}
});})(i__58298,i__58257,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58298,i__58257,map__58300,map__58300__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58390 = (i__58298 + (1));
i__58298 = G__58390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58299),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296(cljs.core.chunk_rest(s__58297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58299),null);
}
} else {
var map__58310 = cljs.core.first(s__58297__$2);
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var block = map__58310__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58257,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58312(s__58313){
return (new cljs.core.LazySeq(null,((function (i__58257,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58313__$1 = s__58313;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58313__$1);
if(temp__5735__auto____$3){
var s__58313__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58313__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58313__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58315 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58314 = (0);
while(true){
if((i__58314 < size__4581__auto____$1)){
var map__58316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58314);
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58314,i__58257,map__58316,map__58316__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58315,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58314,i__58257,map__58316,map__58316__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58315,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58391 = (i__58314 + (1));
i__58314 = G__58391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58315),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58312(cljs.core.chunk_rest(s__58313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58315),null);
}
} else {
var map__58318 = cljs.core.first(s__58313__$2);
var map__58318__$1 = (((((!((map__58318 == null))))?(((((map__58318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58318):map__58318);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58257,map__58318,map__58318__$1,title__$1,string,uid__$2,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58257,map__58318,map__58318__$1,title__$1,string,uid__$2,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296_$_iter__58312(cljs.core.rest(s__58313__$2)));
}
} else {
return null;
}
break;
}
});})(i__58257,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58257,map__58310,map__58310__$1,block,uid__$1,parents,s__58297__$2,temp__5735__auto____$2,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262_$_iter__58296(cljs.core.rest(s__58297__$2)));
}
} else {
return null;
}
break;
}
});})(i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58257,vec__58293,group_title,group,s__58263__$2,temp__5735__auto____$1,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58262(cljs.core.rest(s__58263__$2)));
}
} else {
return null;
}
break;
}
});})(i__58257,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58257,vec__58259,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58258,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58392 = (i__58257 + (1));
i__58257 = G__58392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),athens$views$node_page$node_page_el_$_iter__58255(cljs.core.chunk_rest(s__58256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),null);
}
} else {
var vec__58320 = cljs.core.first(s__58256__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323(s__58324){
return (new cljs.core.LazySeq(null,(function (){
var s__58324__$1 = s__58324;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58324__$1);
if(temp__5735__auto____$1){
var s__58324__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58324__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58324__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58326 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58325 = (0);
while(true){
if((i__58325 < size__4581__auto__)){
var vec__58327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58325);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58327,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58327,(1),null);
cljs.core.chunk_append(b__58326,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330(s__58331){
return (new cljs.core.LazySeq(null,((function (i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58331__$1 = s__58331;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58331__$1);
if(temp__5735__auto____$2){
var s__58331__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58331__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58331__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58333 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58332 = (0);
while(true){
if((i__58332 < size__4581__auto____$1)){
var map__58334 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58332);
var map__58334__$1 = (((((!((map__58334 == null))))?(((((map__58334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58334):map__58334);
var block = map__58334__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58333,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58332,i__58325,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58336(s__58337){
return (new cljs.core.LazySeq(null,((function (i__58332,i__58325,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58337__$1 = s__58337;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58337__$1);
if(temp__5735__auto____$3){
var s__58337__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58337__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58337__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58339 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58338 = (0);
while(true){
if((i__58338 < size__4581__auto____$2)){
var map__58340 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58338);
var map__58340__$1 = (((((!((map__58340 == null))))?(((((map__58340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58340):map__58340);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58339,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58338,i__58332,i__58325,map__58340,map__58340__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58339,s__58337__$2,temp__5735__auto____$3,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58338,i__58332,i__58325,map__58340,map__58340__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58339,s__58337__$2,temp__5735__auto____$3,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58393 = (i__58338 + (1));
i__58338 = G__58393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58339),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58336(cljs.core.chunk_rest(s__58337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58339),null);
}
} else {
var map__58342 = cljs.core.first(s__58337__$2);
var map__58342__$1 = (((((!((map__58342 == null))))?(((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58342):map__58342);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58332,i__58325,map__58342,map__58342__$1,title__$1,string,uid__$2,s__58337__$2,temp__5735__auto____$3,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58332,i__58325,map__58342,map__58342__$1,title__$1,string,uid__$2,s__58337__$2,temp__5735__auto____$3,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58336(cljs.core.rest(s__58337__$2)));
}
} else {
return null;
}
break;
}
});})(i__58332,i__58325,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58332,i__58325,map__58334,map__58334__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58333,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58394 = (i__58332 + (1));
i__58332 = G__58394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58333),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330(cljs.core.chunk_rest(s__58331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58333),null);
}
} else {
var map__58344 = cljs.core.first(s__58331__$2);
var map__58344__$1 = (((((!((map__58344 == null))))?(((((map__58344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58344):map__58344);
var block = map__58344__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58325,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58346(s__58347){
return (new cljs.core.LazySeq(null,((function (i__58325,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58347__$1 = s__58347;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58347__$1);
if(temp__5735__auto____$3){
var s__58347__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58347__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58347__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58349 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58348 = (0);
while(true){
if((i__58348 < size__4581__auto____$1)){
var map__58350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58348);
var map__58350__$1 = (((((!((map__58350 == null))))?(((((map__58350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58350):map__58350);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58349,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58348,i__58325,map__58350,map__58350__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58349,s__58347__$2,temp__5735__auto____$3,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58348,i__58325,map__58350,map__58350__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58349,s__58347__$2,temp__5735__auto____$3,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58395 = (i__58348 + (1));
i__58348 = G__58395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58349),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58346(cljs.core.chunk_rest(s__58347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58349),null);
}
} else {
var map__58352 = cljs.core.first(s__58347__$2);
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58325,map__58352,map__58352__$1,title__$1,string,uid__$2,s__58347__$2,temp__5735__auto____$3,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58325,map__58352,map__58352__$1,title__$1,string,uid__$2,s__58347__$2,temp__5735__auto____$3,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330_$_iter__58346(cljs.core.rest(s__58347__$2)));
}
} else {
return null;
}
break;
}
});})(i__58325,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58325,map__58344,map__58344__$1,block,uid__$1,parents,s__58331__$2,temp__5735__auto____$2,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58330(cljs.core.rest(s__58331__$2)));
}
} else {
return null;
}
break;
}
});})(i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58325,vec__58327,group_title,group,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58396 = (i__58325 + (1));
i__58325 = G__58396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323(cljs.core.chunk_rest(s__58324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),null);
}
} else {
var vec__58354 = cljs.core.first(s__58324__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357(s__58358){
return (new cljs.core.LazySeq(null,(function (){
var s__58358__$1 = s__58358;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58358__$1);
if(temp__5735__auto____$2){
var s__58358__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58358__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58358__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58360 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58359 = (0);
while(true){
if((i__58359 < size__4581__auto__)){
var map__58361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58359);
var map__58361__$1 = (((((!((map__58361 == null))))?(((((map__58361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58361):map__58361);
var block = map__58361__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58361__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58361__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58360,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58359,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58363(s__58364){
return (new cljs.core.LazySeq(null,((function (i__58359,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
var s__58364__$1 = s__58364;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58364__$1);
if(temp__5735__auto____$3){
var s__58364__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58364__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58364__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58366 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58365 = (0);
while(true){
if((i__58365 < size__4581__auto____$1)){
var map__58367 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58365);
var map__58367__$1 = (((((!((map__58367 == null))))?(((((map__58367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58367):map__58367);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58366,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58365,i__58359,map__58367,map__58367__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58366,s__58364__$2,temp__5735__auto____$3,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58365,i__58359,map__58367,map__58367__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58366,s__58364__$2,temp__5735__auto____$3,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58397 = (i__58365 + (1));
i__58365 = G__58397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58366),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58363(cljs.core.chunk_rest(s__58364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58366),null);
}
} else {
var map__58369 = cljs.core.first(s__58364__$2);
var map__58369__$1 = (((((!((map__58369 == null))))?(((((map__58369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58369):map__58369);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58359,map__58369,map__58369__$1,title__$1,string,uid__$2,s__58364__$2,temp__5735__auto____$3,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58359,map__58369,map__58369__$1,title__$1,string,uid__$2,s__58364__$2,temp__5735__auto____$3,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58363(cljs.core.rest(s__58364__$2)));
}
} else {
return null;
}
break;
}
});})(i__58359,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
,null,null));
});})(i__58359,map__58361,map__58361__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58360,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58398 = (i__58359 + (1));
i__58359 = G__58398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58360),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357(cljs.core.chunk_rest(s__58358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58360),null);
}
} else {
var map__58371 = cljs.core.first(s__58358__$2);
var map__58371__$1 = (((((!((map__58371 == null))))?(((((map__58371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58371):map__58371);
var block = map__58371__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58373(s__58374){
return (new cljs.core.LazySeq(null,(function (){
var s__58374__$1 = s__58374;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58374__$1);
if(temp__5735__auto____$3){
var s__58374__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58374__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58374__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58376 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58375 = (0);
while(true){
if((i__58375 < size__4581__auto__)){
var map__58377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58375);
var map__58377__$1 = (((((!((map__58377 == null))))?(((((map__58377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58377):map__58377);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58376,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58375,map__58377,map__58377__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58376,s__58374__$2,temp__5735__auto____$3,map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58375,map__58377,map__58377__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58376,s__58374__$2,temp__5735__auto____$3,map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58399 = (i__58375 + (1));
i__58375 = G__58399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58376),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58373(cljs.core.chunk_rest(s__58374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58376),null);
}
} else {
var map__58379 = cljs.core.first(s__58374__$2);
var map__58379__$1 = (((((!((map__58379 == null))))?(((((map__58379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58379):map__58379);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58379,map__58379__$1,title__$1,string,uid__$2,s__58374__$2,temp__5735__auto____$3,map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58379,map__58379__$1,title__$1,string,uid__$2,s__58374__$2,temp__5735__auto____$3,map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357_$_iter__58373(cljs.core.rest(s__58374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58371,map__58371__$1,block,uid__$1,parents,s__58358__$2,temp__5735__auto____$2,vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323_$_iter__58357(cljs.core.rest(s__58358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58354,group_title,group,s__58324__$2,temp__5735__auto____$1,vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58255_$_iter__58323(cljs.core.rest(s__58324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58320,linked_or_unlinked,refs,s__58256__$2,temp__5735__auto__,map__58243,map__58243__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58255(cljs.core.rest(s__58256__$2)));
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
var map__58381 = athens.db.get_node_document(ident);
var map__58381__$1 = (((((!((map__58381 == null))))?(((((map__58381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58381):map__58381);
var node = map__58381__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58383) : re_frame.core.subscribe.call(null,G__58383));
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
