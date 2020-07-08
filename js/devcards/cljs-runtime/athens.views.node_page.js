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
var G__58156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58156) : re_frame.core.dispatch.call(null,G__58156));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58157 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58158 = athens.db.dsdb;
var G__58159 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58157,G__58158,G__58159) : posh.reagent.q.call(null,G__58157,G__58158,G__58159));
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
return cljs.core.boolean$((function (){try{var vec__58161 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58160){if((e58160 instanceof Object)){
var _ = e58160;
return false;
} else {
throw e58160;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58164,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58165 = p__58164;
var map__58165__$1 = (((((!((map__58165 == null))))?(((((map__58165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58165):map__58165);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58167 = e.target.value;
var G__58168 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58167,G__58168) : athens.views.node_page.db_handler.call(null,G__58167,G__58168));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58169(s__58170){
return (new cljs.core.LazySeq(null,(function (){
var s__58170__$1 = s__58170;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58170__$1);
if(temp__5735__auto__){
var s__58170__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58170__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58170__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58172 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58171 = (0);
while(true){
if((i__58171 < size__4581__auto__)){
var map__58173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58171);
var map__58173__$1 = (((((!((map__58173 == null))))?(((((map__58173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58173):map__58173);
var child = map__58173__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58172,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58306 = (i__58171 + (1));
i__58171 = G__58306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),athens$views$node_page$node_page_el_$_iter__58169(cljs.core.chunk_rest(s__58170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),null);
}
} else {
var map__58175 = cljs.core.first(s__58170__$2);
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var child = map__58175__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58169(cljs.core.rest(s__58170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58177(s__58178){
return (new cljs.core.LazySeq(null,(function (){
var s__58178__$1 = s__58178;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58178__$1);
if(temp__5735__auto__){
var s__58178__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58178__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58178__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58180 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58179 = (0);
while(true){
if((i__58179 < size__4581__auto__)){
var vec__58181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58179);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(1),null);
cljs.core.chunk_append(b__58180,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58179,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184(s__58185){
return (new cljs.core.LazySeq(null,((function (i__58179,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58185__$1 = s__58185;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58185__$1);
if(temp__5735__auto____$1){
var s__58185__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58185__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58185__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58187 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58186 = (0);
while(true){
if((i__58186 < size__4581__auto____$1)){
var vec__58188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58186);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58188,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58188,(1),null);
cljs.core.chunk_append(b__58187,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191(s__58192){
return (new cljs.core.LazySeq(null,((function (i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58192__$1 = s__58192;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58192__$1);
if(temp__5735__auto____$2){
var s__58192__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58192__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58192__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58194 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58193 = (0);
while(true){
if((i__58193 < size__4581__auto____$2)){
var map__58195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58193);
var map__58195__$1 = (((((!((map__58195 == null))))?(((((map__58195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58195):map__58195);
var block = map__58195__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58194,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58193,i__58186,i__58179,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58197(s__58198){
return (new cljs.core.LazySeq(null,((function (i__58193,i__58186,i__58179,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58198__$1 = s__58198;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58198__$1);
if(temp__5735__auto____$3){
var s__58198__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58198__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58198__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58200 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58199 = (0);
while(true){
if((i__58199 < size__4581__auto____$3)){
var map__58201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58199);
var map__58201__$1 = (((((!((map__58201 == null))))?(((((map__58201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58201):map__58201);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58200,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58199,i__58193,i__58186,i__58179,map__58201,map__58201__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58200,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58199,i__58193,i__58186,i__58179,map__58201,map__58201__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58200,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58307 = (i__58199 + (1));
i__58199 = G__58307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58197(cljs.core.chunk_rest(s__58198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),null);
}
} else {
var map__58203 = cljs.core.first(s__58198__$2);
var map__58203__$1 = (((((!((map__58203 == null))))?(((((map__58203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58203):map__58203);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58193,i__58186,i__58179,map__58203,map__58203__$1,title__$1,string,uid__$2,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58193,i__58186,i__58179,map__58203,map__58203__$1,title__$1,string,uid__$2,s__58198__$2,temp__5735__auto____$3,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58197(cljs.core.rest(s__58198__$2)));
}
} else {
return null;
}
break;
}
});})(i__58193,i__58186,i__58179,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58193,i__58186,i__58179,map__58195,map__58195__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58194,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58308 = (i__58193 + (1));
i__58193 = G__58308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191(cljs.core.chunk_rest(s__58192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),null);
}
} else {
var map__58205 = cljs.core.first(s__58192__$2);
var map__58205__$1 = (((((!((map__58205 == null))))?(((((map__58205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58205):map__58205);
var block = map__58205__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58186,i__58179,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58207(s__58208){
return (new cljs.core.LazySeq(null,((function (i__58186,i__58179,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58208__$1 = s__58208;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58208__$1);
if(temp__5735__auto____$3){
var s__58208__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58208__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58208__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58210 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58209 = (0);
while(true){
if((i__58209 < size__4581__auto____$2)){
var map__58211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58209);
var map__58211__$1 = (((((!((map__58211 == null))))?(((((map__58211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58211):map__58211);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58210,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58209,i__58186,i__58179,map__58211,map__58211__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58210,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58209,i__58186,i__58179,map__58211,map__58211__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58210,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58309 = (i__58209 + (1));
i__58209 = G__58309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58207(cljs.core.chunk_rest(s__58208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),null);
}
} else {
var map__58213 = cljs.core.first(s__58208__$2);
var map__58213__$1 = (((((!((map__58213 == null))))?(((((map__58213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58213):map__58213);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58186,i__58179,map__58213,map__58213__$1,title__$1,string,uid__$2,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58186,i__58179,map__58213,map__58213__$1,title__$1,string,uid__$2,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191_$_iter__58207(cljs.core.rest(s__58208__$2)));
}
} else {
return null;
}
break;
}
});})(i__58186,i__58179,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58186,i__58179,map__58205,map__58205__$1,block,uid__$1,parents,s__58192__$2,temp__5735__auto____$2,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58191(cljs.core.rest(s__58192__$2)));
}
} else {
return null;
}
break;
}
});})(i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58186,i__58179,vec__58188,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58310 = (i__58186 + (1));
i__58186 = G__58310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184(cljs.core.chunk_rest(s__58185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),null);
}
} else {
var vec__58215 = cljs.core.first(s__58185__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218(s__58219){
return (new cljs.core.LazySeq(null,((function (i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58219__$1 = s__58219;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58219__$1);
if(temp__5735__auto____$2){
var s__58219__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58219__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58219__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58221 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58220 = (0);
while(true){
if((i__58220 < size__4581__auto____$1)){
var map__58222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58220);
var map__58222__$1 = (((((!((map__58222 == null))))?(((((map__58222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58222):map__58222);
var block = map__58222__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58221,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58220,i__58179,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58224(s__58225){
return (new cljs.core.LazySeq(null,((function (i__58220,i__58179,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58225__$1 = s__58225;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58225__$1);
if(temp__5735__auto____$3){
var s__58225__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58225__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58225__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58227 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58226 = (0);
while(true){
if((i__58226 < size__4581__auto____$2)){
var map__58228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58226);
var map__58228__$1 = (((((!((map__58228 == null))))?(((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58228):map__58228);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58227,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58226,i__58220,i__58179,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58226,i__58220,i__58179,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58311 = (i__58226 + (1));
i__58226 = G__58311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58224(cljs.core.chunk_rest(s__58225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),null);
}
} else {
var map__58230 = cljs.core.first(s__58225__$2);
var map__58230__$1 = (((((!((map__58230 == null))))?(((((map__58230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58230):map__58230);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58220,i__58179,map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58220,i__58179,map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58224(cljs.core.rest(s__58225__$2)));
}
} else {
return null;
}
break;
}
});})(i__58220,i__58179,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58220,i__58179,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58312 = (i__58220 + (1));
i__58220 = G__58312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218(cljs.core.chunk_rest(s__58219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),null);
}
} else {
var map__58232 = cljs.core.first(s__58219__$2);
var map__58232__$1 = (((((!((map__58232 == null))))?(((((map__58232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58232):map__58232);
var block = map__58232__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58179,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58234(s__58235){
return (new cljs.core.LazySeq(null,((function (i__58179,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58235__$1 = s__58235;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58235__$1);
if(temp__5735__auto____$3){
var s__58235__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58235__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58235__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58237 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58236 = (0);
while(true){
if((i__58236 < size__4581__auto____$1)){
var map__58238 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58236);
var map__58238__$1 = (((((!((map__58238 == null))))?(((((map__58238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58238):map__58238);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58236,i__58179,map__58238,map__58238__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58237,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58236,i__58179,map__58238,map__58238__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58237,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58313 = (i__58236 + (1));
i__58236 = G__58313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58237),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58234(cljs.core.chunk_rest(s__58235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58237),null);
}
} else {
var map__58240 = cljs.core.first(s__58235__$2);
var map__58240__$1 = (((((!((map__58240 == null))))?(((((map__58240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58240):map__58240);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58179,map__58240,map__58240__$1,title__$1,string,uid__$2,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58179,map__58240,map__58240__$1,title__$1,string,uid__$2,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218_$_iter__58234(cljs.core.rest(s__58235__$2)));
}
} else {
return null;
}
break;
}
});})(i__58179,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58179,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184_$_iter__58218(cljs.core.rest(s__58219__$2)));
}
} else {
return null;
}
break;
}
});})(i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58179,vec__58215,group_title,group,s__58185__$2,temp__5735__auto____$1,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58184(cljs.core.rest(s__58185__$2)));
}
} else {
return null;
}
break;
}
});})(i__58179,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58179,vec__58181,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58180,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58314 = (i__58179 + (1));
i__58179 = G__58314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),athens$views$node_page$node_page_el_$_iter__58177(cljs.core.chunk_rest(s__58178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),null);
}
} else {
var vec__58242 = cljs.core.first(s__58178__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245(s__58246){
return (new cljs.core.LazySeq(null,(function (){
var s__58246__$1 = s__58246;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58246__$1);
if(temp__5735__auto____$1){
var s__58246__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58246__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58246__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58248 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58247 = (0);
while(true){
if((i__58247 < size__4581__auto__)){
var vec__58249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58247);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58249,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58249,(1),null);
cljs.core.chunk_append(b__58248,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252(s__58253){
return (new cljs.core.LazySeq(null,((function (i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58253__$1 = s__58253;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58253__$1);
if(temp__5735__auto____$2){
var s__58253__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58253__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58253__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58255 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58254 = (0);
while(true){
if((i__58254 < size__4581__auto____$1)){
var map__58256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58254);
var map__58256__$1 = (((((!((map__58256 == null))))?(((((map__58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58256):map__58256);
var block = map__58256__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58255,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58254,i__58247,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58258(s__58259){
return (new cljs.core.LazySeq(null,((function (i__58254,i__58247,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58259__$1 = s__58259;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58259__$1);
if(temp__5735__auto____$3){
var s__58259__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58259__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58259__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58261 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58260 = (0);
while(true){
if((i__58260 < size__4581__auto____$2)){
var map__58262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58260);
var map__58262__$1 = (((((!((map__58262 == null))))?(((((map__58262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58262):map__58262);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58260,i__58254,i__58247,map__58262,map__58262__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58261,s__58259__$2,temp__5735__auto____$3,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58260,i__58254,i__58247,map__58262,map__58262__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58261,s__58259__$2,temp__5735__auto____$3,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58315 = (i__58260 + (1));
i__58260 = G__58315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58261),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58258(cljs.core.chunk_rest(s__58259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58261),null);
}
} else {
var map__58264 = cljs.core.first(s__58259__$2);
var map__58264__$1 = (((((!((map__58264 == null))))?(((((map__58264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58264):map__58264);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58254,i__58247,map__58264,map__58264__$1,title__$1,string,uid__$2,s__58259__$2,temp__5735__auto____$3,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58254,i__58247,map__58264,map__58264__$1,title__$1,string,uid__$2,s__58259__$2,temp__5735__auto____$3,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58258(cljs.core.rest(s__58259__$2)));
}
} else {
return null;
}
break;
}
});})(i__58254,i__58247,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58254,i__58247,map__58256,map__58256__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58255,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58316 = (i__58254 + (1));
i__58254 = G__58316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58255),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252(cljs.core.chunk_rest(s__58253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58255),null);
}
} else {
var map__58266 = cljs.core.first(s__58253__$2);
var map__58266__$1 = (((((!((map__58266 == null))))?(((((map__58266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58266):map__58266);
var block = map__58266__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58247,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58268(s__58269){
return (new cljs.core.LazySeq(null,((function (i__58247,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58269__$1 = s__58269;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58269__$1);
if(temp__5735__auto____$3){
var s__58269__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58269__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58269__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58271 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58270 = (0);
while(true){
if((i__58270 < size__4581__auto____$1)){
var map__58272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58270);
var map__58272__$1 = (((((!((map__58272 == null))))?(((((map__58272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58272):map__58272);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58271,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58270,i__58247,map__58272,map__58272__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58271,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58270,i__58247,map__58272,map__58272__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58271,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58317 = (i__58270 + (1));
i__58270 = G__58317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58271),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58268(cljs.core.chunk_rest(s__58269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58271),null);
}
} else {
var map__58274 = cljs.core.first(s__58269__$2);
var map__58274__$1 = (((((!((map__58274 == null))))?(((((map__58274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58274):map__58274);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58247,map__58274,map__58274__$1,title__$1,string,uid__$2,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58247,map__58274,map__58274__$1,title__$1,string,uid__$2,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252_$_iter__58268(cljs.core.rest(s__58269__$2)));
}
} else {
return null;
}
break;
}
});})(i__58247,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58247,map__58266,map__58266__$1,block,uid__$1,parents,s__58253__$2,temp__5735__auto____$2,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58252(cljs.core.rest(s__58253__$2)));
}
} else {
return null;
}
break;
}
});})(i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58247,vec__58249,group_title,group,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58318 = (i__58247 + (1));
i__58247 = G__58318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245(cljs.core.chunk_rest(s__58246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),null);
}
} else {
var vec__58276 = cljs.core.first(s__58246__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58276,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58276,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279(s__58280){
return (new cljs.core.LazySeq(null,(function (){
var s__58280__$1 = s__58280;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58280__$1);
if(temp__5735__auto____$2){
var s__58280__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58280__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58280__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58282 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58281 = (0);
while(true){
if((i__58281 < size__4581__auto__)){
var map__58283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58281);
var map__58283__$1 = (((((!((map__58283 == null))))?(((((map__58283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58283):map__58283);
var block = map__58283__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58282,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58281,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58285(s__58286){
return (new cljs.core.LazySeq(null,((function (i__58281,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
var s__58286__$1 = s__58286;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58286__$1);
if(temp__5735__auto____$3){
var s__58286__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58286__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58286__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58288 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58287 = (0);
while(true){
if((i__58287 < size__4581__auto____$1)){
var map__58289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58287);
var map__58289__$1 = (((((!((map__58289 == null))))?(((((map__58289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58289):map__58289);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58287,i__58281,map__58289,map__58289__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58288,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58287,i__58281,map__58289,map__58289__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58288,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58319 = (i__58287 + (1));
i__58287 = G__58319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58288),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58285(cljs.core.chunk_rest(s__58286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58288),null);
}
} else {
var map__58291 = cljs.core.first(s__58286__$2);
var map__58291__$1 = (((((!((map__58291 == null))))?(((((map__58291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58291):map__58291);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58281,map__58291,map__58291__$1,title__$1,string,uid__$2,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58281,map__58291,map__58291__$1,title__$1,string,uid__$2,s__58286__$2,temp__5735__auto____$3,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58285(cljs.core.rest(s__58286__$2)));
}
} else {
return null;
}
break;
}
});})(i__58281,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
,null,null));
});})(i__58281,map__58283,map__58283__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58282,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58320 = (i__58281 + (1));
i__58281 = G__58320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58282),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279(cljs.core.chunk_rest(s__58280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58282),null);
}
} else {
var map__58293 = cljs.core.first(s__58280__$2);
var map__58293__$1 = (((((!((map__58293 == null))))?(((((map__58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58293):map__58293);
var block = map__58293__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58295(s__58296){
return (new cljs.core.LazySeq(null,(function (){
var s__58296__$1 = s__58296;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58296__$1);
if(temp__5735__auto____$3){
var s__58296__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58296__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58296__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58298 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58297 = (0);
while(true){
if((i__58297 < size__4581__auto__)){
var map__58299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58297);
var map__58299__$1 = (((((!((map__58299 == null))))?(((((map__58299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58299):map__58299);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58298,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58297,map__58299,map__58299__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58298,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58297,map__58299,map__58299__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58298,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58321 = (i__58297 + (1));
i__58297 = G__58321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58298),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58295(cljs.core.chunk_rest(s__58296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58298),null);
}
} else {
var map__58301 = cljs.core.first(s__58296__$2);
var map__58301__$1 = (((((!((map__58301 == null))))?(((((map__58301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58301):map__58301);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58301,map__58301__$1,title__$1,string,uid__$2,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58301,map__58301__$1,title__$1,string,uid__$2,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279_$_iter__58295(cljs.core.rest(s__58296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58293,map__58293__$1,block,uid__$1,parents,s__58280__$2,temp__5735__auto____$2,vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245_$_iter__58279(cljs.core.rest(s__58280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58276,group_title,group,s__58246__$2,temp__5735__auto____$1,vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58177_$_iter__58245(cljs.core.rest(s__58246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58242,linked_or_unlinked,refs,s__58178__$2,temp__5735__auto__,map__58165,map__58165__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58177(cljs.core.rest(s__58178__$2)));
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
var map__58303 = athens.db.get_node_document(ident);
var map__58303__$1 = (((((!((map__58303 == null))))?(((((map__58303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58303):map__58303);
var node = map__58303__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58305) : re_frame.core.subscribe.call(null,G__58305));
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
