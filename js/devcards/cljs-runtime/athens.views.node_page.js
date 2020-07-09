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
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58170) : re_frame.core.dispatch.call(null,G__58170));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58171 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58172 = athens.db.dsdb;
var G__58173 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58171,G__58172,G__58173) : posh.reagent.q.call(null,G__58171,G__58172,G__58173));
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
return cljs.core.boolean$((function (){try{var vec__58175 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58174){if((e58174 instanceof Object)){
var _ = e58174;
return false;
} else {
throw e58174;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58178,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58179 = p__58178;
var map__58179__$1 = (((((!((map__58179 == null))))?(((((map__58179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58179):map__58179);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58181 = e.target.value;
var G__58182 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58181,G__58182) : athens.views.node_page.db_handler.call(null,G__58181,G__58182));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58183(s__58184){
return (new cljs.core.LazySeq(null,(function (){
var s__58184__$1 = s__58184;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58184__$1);
if(temp__5735__auto__){
var s__58184__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58184__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58184__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58186 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58185 = (0);
while(true){
if((i__58185 < size__4581__auto__)){
var map__58187 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58185);
var map__58187__$1 = (((((!((map__58187 == null))))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58187):map__58187);
var child = map__58187__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58186,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58320 = (i__58185 + (1));
i__58185 = G__58320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58186),athens$views$node_page$node_page_el_$_iter__58183(cljs.core.chunk_rest(s__58184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58186),null);
}
} else {
var map__58189 = cljs.core.first(s__58184__$2);
var map__58189__$1 = (((((!((map__58189 == null))))?(((((map__58189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58189):map__58189);
var child = map__58189__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58183(cljs.core.rest(s__58184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58191(s__58192){
return (new cljs.core.LazySeq(null,(function (){
var s__58192__$1 = s__58192;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58192__$1);
if(temp__5735__auto__){
var s__58192__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58192__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58192__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58194 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58193 = (0);
while(true){
if((i__58193 < size__4581__auto__)){
var vec__58195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58193);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(1),null);
cljs.core.chunk_append(b__58194,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58193,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198(s__58199){
return (new cljs.core.LazySeq(null,((function (i__58193,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58199__$1 = s__58199;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58199__$1);
if(temp__5735__auto____$1){
var s__58199__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58199__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58199__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58201 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58200 = (0);
while(true){
if((i__58200 < size__4581__auto____$1)){
var vec__58202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58200);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58202,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58202,(1),null);
cljs.core.chunk_append(b__58201,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205(s__58206){
return (new cljs.core.LazySeq(null,((function (i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58206__$1 = s__58206;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58206__$1);
if(temp__5735__auto____$2){
var s__58206__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58206__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58206__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58208 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58207 = (0);
while(true){
if((i__58207 < size__4581__auto____$2)){
var map__58209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58207);
var map__58209__$1 = (((((!((map__58209 == null))))?(((((map__58209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58209):map__58209);
var block = map__58209__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58209__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58209__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58208,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58207,i__58200,i__58193,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58211(s__58212){
return (new cljs.core.LazySeq(null,((function (i__58207,i__58200,i__58193,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58212__$1 = s__58212;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58212__$1);
if(temp__5735__auto____$3){
var s__58212__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58212__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58212__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58214 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58213 = (0);
while(true){
if((i__58213 < size__4581__auto____$3)){
var map__58215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58213);
var map__58215__$1 = (((((!((map__58215 == null))))?(((((map__58215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58215):map__58215);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58213,i__58207,i__58200,i__58193,map__58215,map__58215__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58214,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58213,i__58207,i__58200,i__58193,map__58215,map__58215__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58214,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58321 = (i__58213 + (1));
i__58213 = G__58321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58211(cljs.core.chunk_rest(s__58212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),null);
}
} else {
var map__58217 = cljs.core.first(s__58212__$2);
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58207,i__58200,i__58193,map__58217,map__58217__$1,title__$1,string,uid__$2,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58207,i__58200,i__58193,map__58217,map__58217__$1,title__$1,string,uid__$2,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58211(cljs.core.rest(s__58212__$2)));
}
} else {
return null;
}
break;
}
});})(i__58207,i__58200,i__58193,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58207,i__58200,i__58193,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58322 = (i__58207 + (1));
i__58207 = G__58322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205(cljs.core.chunk_rest(s__58206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),null);
}
} else {
var map__58219 = cljs.core.first(s__58206__$2);
var map__58219__$1 = (((((!((map__58219 == null))))?(((((map__58219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58219):map__58219);
var block = map__58219__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58200,i__58193,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58221(s__58222){
return (new cljs.core.LazySeq(null,((function (i__58200,i__58193,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58222__$1 = s__58222;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58222__$1);
if(temp__5735__auto____$3){
var s__58222__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58222__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58222__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58224 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58223 = (0);
while(true){
if((i__58223 < size__4581__auto____$2)){
var map__58225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58223);
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58224,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58223,i__58200,i__58193,map__58225,map__58225__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58224,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58223,i__58200,i__58193,map__58225,map__58225__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58224,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58323 = (i__58223 + (1));
i__58223 = G__58323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58224),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58221(cljs.core.chunk_rest(s__58222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58224),null);
}
} else {
var map__58227 = cljs.core.first(s__58222__$2);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58200,i__58193,map__58227,map__58227__$1,title__$1,string,uid__$2,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58200,i__58193,map__58227,map__58227__$1,title__$1,string,uid__$2,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205_$_iter__58221(cljs.core.rest(s__58222__$2)));
}
} else {
return null;
}
break;
}
});})(i__58200,i__58193,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58200,i__58193,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58205(cljs.core.rest(s__58206__$2)));
}
} else {
return null;
}
break;
}
});})(i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58200,i__58193,vec__58202,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58201,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58324 = (i__58200 + (1));
i__58200 = G__58324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58201),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198(cljs.core.chunk_rest(s__58199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58201),null);
}
} else {
var vec__58229 = cljs.core.first(s__58199__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232(s__58233){
return (new cljs.core.LazySeq(null,((function (i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58233__$1 = s__58233;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58233__$1);
if(temp__5735__auto____$2){
var s__58233__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58233__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58233__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58235 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58234 = (0);
while(true){
if((i__58234 < size__4581__auto____$1)){
var map__58236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58234);
var map__58236__$1 = (((((!((map__58236 == null))))?(((((map__58236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58236):map__58236);
var block = map__58236__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58235,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58234,i__58193,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58238(s__58239){
return (new cljs.core.LazySeq(null,((function (i__58234,i__58193,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58239__$1 = s__58239;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58239__$1);
if(temp__5735__auto____$3){
var s__58239__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58239__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58239__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58241 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58240 = (0);
while(true){
if((i__58240 < size__4581__auto____$2)){
var map__58242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58240);
var map__58242__$1 = (((((!((map__58242 == null))))?(((((map__58242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58242):map__58242);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58241,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58240,i__58234,i__58193,map__58242,map__58242__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58241,s__58239__$2,temp__5735__auto____$3,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58240,i__58234,i__58193,map__58242,map__58242__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58241,s__58239__$2,temp__5735__auto____$3,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58325 = (i__58240 + (1));
i__58240 = G__58325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58241),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58238(cljs.core.chunk_rest(s__58239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58241),null);
}
} else {
var map__58244 = cljs.core.first(s__58239__$2);
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58234,i__58193,map__58244,map__58244__$1,title__$1,string,uid__$2,s__58239__$2,temp__5735__auto____$3,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58234,i__58193,map__58244,map__58244__$1,title__$1,string,uid__$2,s__58239__$2,temp__5735__auto____$3,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58238(cljs.core.rest(s__58239__$2)));
}
} else {
return null;
}
break;
}
});})(i__58234,i__58193,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58234,i__58193,map__58236,map__58236__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58235,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58326 = (i__58234 + (1));
i__58234 = G__58326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58235),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232(cljs.core.chunk_rest(s__58233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58235),null);
}
} else {
var map__58246 = cljs.core.first(s__58233__$2);
var map__58246__$1 = (((((!((map__58246 == null))))?(((((map__58246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58246):map__58246);
var block = map__58246__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58246__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58246__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58193,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58248(s__58249){
return (new cljs.core.LazySeq(null,((function (i__58193,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58249__$1 = s__58249;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58249__$1);
if(temp__5735__auto____$3){
var s__58249__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58249__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58249__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58251 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58250 = (0);
while(true){
if((i__58250 < size__4581__auto____$1)){
var map__58252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58250);
var map__58252__$1 = (((((!((map__58252 == null))))?(((((map__58252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58252):map__58252);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58251,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58250,i__58193,map__58252,map__58252__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58251,s__58249__$2,temp__5735__auto____$3,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58250,i__58193,map__58252,map__58252__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58251,s__58249__$2,temp__5735__auto____$3,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58327 = (i__58250 + (1));
i__58250 = G__58327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58251),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58248(cljs.core.chunk_rest(s__58249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58251),null);
}
} else {
var map__58254 = cljs.core.first(s__58249__$2);
var map__58254__$1 = (((((!((map__58254 == null))))?(((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58254):map__58254);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58193,map__58254,map__58254__$1,title__$1,string,uid__$2,s__58249__$2,temp__5735__auto____$3,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58193,map__58254,map__58254__$1,title__$1,string,uid__$2,s__58249__$2,temp__5735__auto____$3,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232_$_iter__58248(cljs.core.rest(s__58249__$2)));
}
} else {
return null;
}
break;
}
});})(i__58193,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58193,map__58246,map__58246__$1,block,uid__$1,parents,s__58233__$2,temp__5735__auto____$2,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198_$_iter__58232(cljs.core.rest(s__58233__$2)));
}
} else {
return null;
}
break;
}
});})(i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58193,vec__58229,group_title,group,s__58199__$2,temp__5735__auto____$1,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58198(cljs.core.rest(s__58199__$2)));
}
} else {
return null;
}
break;
}
});})(i__58193,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58193,vec__58195,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58194,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58328 = (i__58193 + (1));
i__58193 = G__58328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),athens$views$node_page$node_page_el_$_iter__58191(cljs.core.chunk_rest(s__58192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),null);
}
} else {
var vec__58256 = cljs.core.first(s__58192__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58256,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58256,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259(s__58260){
return (new cljs.core.LazySeq(null,(function (){
var s__58260__$1 = s__58260;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58260__$1);
if(temp__5735__auto____$1){
var s__58260__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58260__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58260__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58262 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58261 = (0);
while(true){
if((i__58261 < size__4581__auto__)){
var vec__58263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58261);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58263,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58263,(1),null);
cljs.core.chunk_append(b__58262,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266(s__58267){
return (new cljs.core.LazySeq(null,((function (i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58267__$1 = s__58267;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58267__$1);
if(temp__5735__auto____$2){
var s__58267__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58267__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58267__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58269 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58268 = (0);
while(true){
if((i__58268 < size__4581__auto____$1)){
var map__58270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58268);
var map__58270__$1 = (((((!((map__58270 == null))))?(((((map__58270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58270):map__58270);
var block = map__58270__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58270__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58270__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58269,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58268,i__58261,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58272(s__58273){
return (new cljs.core.LazySeq(null,((function (i__58268,i__58261,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58273__$1 = s__58273;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58273__$1);
if(temp__5735__auto____$3){
var s__58273__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58273__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58273__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58275 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58274 = (0);
while(true){
if((i__58274 < size__4581__auto____$2)){
var map__58276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58274);
var map__58276__$1 = (((((!((map__58276 == null))))?(((((map__58276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58276):map__58276);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58274,i__58268,i__58261,map__58276,map__58276__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58275,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58274,i__58268,i__58261,map__58276,map__58276__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58275,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58329 = (i__58274 + (1));
i__58274 = G__58329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58272(cljs.core.chunk_rest(s__58273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),null);
}
} else {
var map__58278 = cljs.core.first(s__58273__$2);
var map__58278__$1 = (((((!((map__58278 == null))))?(((((map__58278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58278):map__58278);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58268,i__58261,map__58278,map__58278__$1,title__$1,string,uid__$2,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58268,i__58261,map__58278,map__58278__$1,title__$1,string,uid__$2,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58272(cljs.core.rest(s__58273__$2)));
}
} else {
return null;
}
break;
}
});})(i__58268,i__58261,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58268,i__58261,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58330 = (i__58268 + (1));
i__58268 = G__58330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58269),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266(cljs.core.chunk_rest(s__58267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58269),null);
}
} else {
var map__58280 = cljs.core.first(s__58267__$2);
var map__58280__$1 = (((((!((map__58280 == null))))?(((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var block = map__58280__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58261,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58282(s__58283){
return (new cljs.core.LazySeq(null,((function (i__58261,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58283__$1 = s__58283;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58283__$1);
if(temp__5735__auto____$3){
var s__58283__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58283__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58283__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58285 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58284 = (0);
while(true){
if((i__58284 < size__4581__auto____$1)){
var map__58286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58284);
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58285,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58284,i__58261,map__58286,map__58286__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58285,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58284,i__58261,map__58286,map__58286__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58285,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58331 = (i__58284 + (1));
i__58284 = G__58331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58285),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58282(cljs.core.chunk_rest(s__58283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58285),null);
}
} else {
var map__58288 = cljs.core.first(s__58283__$2);
var map__58288__$1 = (((((!((map__58288 == null))))?(((((map__58288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58288):map__58288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58261,map__58288,map__58288__$1,title__$1,string,uid__$2,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58261,map__58288,map__58288__$1,title__$1,string,uid__$2,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266_$_iter__58282(cljs.core.rest(s__58283__$2)));
}
} else {
return null;
}
break;
}
});})(i__58261,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58261,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58266(cljs.core.rest(s__58267__$2)));
}
} else {
return null;
}
break;
}
});})(i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58261,vec__58263,group_title,group,c__4580__auto__,size__4581__auto__,b__58262,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58332 = (i__58261 + (1));
i__58261 = G__58332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58262),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259(cljs.core.chunk_rest(s__58260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58262),null);
}
} else {
var vec__58290 = cljs.core.first(s__58260__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293(s__58294){
return (new cljs.core.LazySeq(null,(function (){
var s__58294__$1 = s__58294;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58294__$1);
if(temp__5735__auto____$2){
var s__58294__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58294__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58294__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58296 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58295 = (0);
while(true){
if((i__58295 < size__4581__auto__)){
var map__58297 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58295);
var map__58297__$1 = (((((!((map__58297 == null))))?(((((map__58297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58297):map__58297);
var block = map__58297__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58297__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58297__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58296,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58295,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58299(s__58300){
return (new cljs.core.LazySeq(null,((function (i__58295,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
var s__58300__$1 = s__58300;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58300__$1);
if(temp__5735__auto____$3){
var s__58300__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58300__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58300__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58302 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58301 = (0);
while(true){
if((i__58301 < size__4581__auto____$1)){
var map__58303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58301);
var map__58303__$1 = (((((!((map__58303 == null))))?(((((map__58303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58303):map__58303);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58301,i__58295,map__58303,map__58303__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58302,s__58300__$2,temp__5735__auto____$3,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58301,i__58295,map__58303,map__58303__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58302,s__58300__$2,temp__5735__auto____$3,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58333 = (i__58301 + (1));
i__58301 = G__58333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58302),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58299(cljs.core.chunk_rest(s__58300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58302),null);
}
} else {
var map__58305 = cljs.core.first(s__58300__$2);
var map__58305__$1 = (((((!((map__58305 == null))))?(((((map__58305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58305):map__58305);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58295,map__58305,map__58305__$1,title__$1,string,uid__$2,s__58300__$2,temp__5735__auto____$3,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58295,map__58305,map__58305__$1,title__$1,string,uid__$2,s__58300__$2,temp__5735__auto____$3,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58299(cljs.core.rest(s__58300__$2)));
}
} else {
return null;
}
break;
}
});})(i__58295,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
,null,null));
});})(i__58295,map__58297,map__58297__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58296,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58334 = (i__58295 + (1));
i__58295 = G__58334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58296),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293(cljs.core.chunk_rest(s__58294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58296),null);
}
} else {
var map__58307 = cljs.core.first(s__58294__$2);
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var block = map__58307__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58309(s__58310){
return (new cljs.core.LazySeq(null,(function (){
var s__58310__$1 = s__58310;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58310__$1);
if(temp__5735__auto____$3){
var s__58310__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58310__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58310__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58312 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58311 = (0);
while(true){
if((i__58311 < size__4581__auto__)){
var map__58313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58311);
var map__58313__$1 = (((((!((map__58313 == null))))?(((((map__58313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58313):map__58313);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58312,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58311,map__58313,map__58313__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58312,s__58310__$2,temp__5735__auto____$3,map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58311,map__58313,map__58313__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58312,s__58310__$2,temp__5735__auto____$3,map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58335 = (i__58311 + (1));
i__58311 = G__58335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58312),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58309(cljs.core.chunk_rest(s__58310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58312),null);
}
} else {
var map__58315 = cljs.core.first(s__58310__$2);
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58315,map__58315__$1,title__$1,string,uid__$2,s__58310__$2,temp__5735__auto____$3,map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58315,map__58315__$1,title__$1,string,uid__$2,s__58310__$2,temp__5735__auto____$3,map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293_$_iter__58309(cljs.core.rest(s__58310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58307,map__58307__$1,block,uid__$1,parents,s__58294__$2,temp__5735__auto____$2,vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259_$_iter__58293(cljs.core.rest(s__58294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58290,group_title,group,s__58260__$2,temp__5735__auto____$1,vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58191_$_iter__58259(cljs.core.rest(s__58260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58256,linked_or_unlinked,refs,s__58192__$2,temp__5735__auto__,map__58179,map__58179__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58191(cljs.core.rest(s__58192__$2)));
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
var map__58317 = athens.db.get_node_document(ident);
var map__58317__$1 = (((((!((map__58317 == null))))?(((((map__58317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58317):map__58317);
var node = map__58317__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58319) : re_frame.core.subscribe.call(null,G__58319));
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
