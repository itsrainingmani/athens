goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58568) : re_frame.core.dispatch.call(null,G__58568));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58569 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58570 = athens.db.dsdb;
var G__58571 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58569,G__58570,G__58571) : posh.reagent.q.call(null,G__58569,G__58570,G__58571));
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
return cljs.core.boolean$((function (){try{var vec__58573 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58573,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58573,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58573,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58572){if((e58572 instanceof Object)){
var _ = e58572;
return false;
} else {
throw e58572;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58576,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58577 = p__58576;
var map__58577__$1 = (((((!((map__58577 == null))))?(((((map__58577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58577):map__58577);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58579 = e.target.value;
var G__58580 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58579,G__58580) : athens.views.node_page.db_handler.call(null,G__58579,G__58580));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58581(s__58582){
return (new cljs.core.LazySeq(null,(function (){
var s__58582__$1 = s__58582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58582__$1);
if(temp__5735__auto__){
var s__58582__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58582__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58582__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58584 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58583 = (0);
while(true){
if((i__58583 < size__4581__auto__)){
var map__58585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58583);
var map__58585__$1 = (((((!((map__58585 == null))))?(((((map__58585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58585):map__58585);
var child = map__58585__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58585__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58584,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58718 = (i__58583 + (1));
i__58583 = G__58718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58584),athens$views$node_page$node_page_el_$_iter__58581(cljs.core.chunk_rest(s__58582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58584),null);
}
} else {
var map__58587 = cljs.core.first(s__58582__$2);
var map__58587__$1 = (((((!((map__58587 == null))))?(((((map__58587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58587):map__58587);
var child = map__58587__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58581(cljs.core.rest(s__58582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58589(s__58590){
return (new cljs.core.LazySeq(null,(function (){
var s__58590__$1 = s__58590;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58590__$1);
if(temp__5735__auto__){
var s__58590__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58590__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58590__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58592 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58591 = (0);
while(true){
if((i__58591 < size__4581__auto__)){
var vec__58593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58591);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58593,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58593,(1),null);
cljs.core.chunk_append(b__58592,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58591,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596(s__58597){
return (new cljs.core.LazySeq(null,((function (i__58591,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58597__$1 = s__58597;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58597__$1);
if(temp__5735__auto____$1){
var s__58597__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58597__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58597__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58599 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58598 = (0);
while(true){
if((i__58598 < size__4581__auto____$1)){
var vec__58600 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58598);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(1),null);
cljs.core.chunk_append(b__58599,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603(s__58604){
return (new cljs.core.LazySeq(null,((function (i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58604__$1 = s__58604;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58604__$1);
if(temp__5735__auto____$2){
var s__58604__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58604__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58604__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58606 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58605 = (0);
while(true){
if((i__58605 < size__4581__auto____$2)){
var map__58607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58605);
var map__58607__$1 = (((((!((map__58607 == null))))?(((((map__58607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58607):map__58607);
var block = map__58607__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58606,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,i__58598,i__58591,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58609(s__58610){
return (new cljs.core.LazySeq(null,((function (i__58605,i__58598,i__58591,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58610__$1 = s__58610;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58610__$1);
if(temp__5735__auto____$3){
var s__58610__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58610__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58610__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58612 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58611 = (0);
while(true){
if((i__58611 < size__4581__auto____$3)){
var map__58613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58611);
var map__58613__$1 = (((((!((map__58613 == null))))?(((((map__58613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58613):map__58613);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58611,i__58605,i__58598,i__58591,map__58613,map__58613__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58612,s__58610__$2,temp__5735__auto____$3,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58611,i__58605,i__58598,i__58591,map__58613,map__58613__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58612,s__58610__$2,temp__5735__auto____$3,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58719 = (i__58611 + (1));
i__58611 = G__58719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58612),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58609(cljs.core.chunk_rest(s__58610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58612),null);
}
} else {
var map__58615 = cljs.core.first(s__58610__$2);
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58605,i__58598,i__58591,map__58615,map__58615__$1,title__$1,string,uid__$2,s__58610__$2,temp__5735__auto____$3,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58605,i__58598,i__58591,map__58615,map__58615__$1,title__$1,string,uid__$2,s__58610__$2,temp__5735__auto____$3,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58609(cljs.core.rest(s__58610__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,i__58598,i__58591,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58605,i__58598,i__58591,map__58607,map__58607__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58606,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58720 = (i__58605 + (1));
i__58605 = G__58720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603(cljs.core.chunk_rest(s__58604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),null);
}
} else {
var map__58617 = cljs.core.first(s__58604__$2);
var map__58617__$1 = (((((!((map__58617 == null))))?(((((map__58617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58617):map__58617);
var block = map__58617__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58598,i__58591,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58619(s__58620){
return (new cljs.core.LazySeq(null,((function (i__58598,i__58591,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58620__$1 = s__58620;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58620__$1);
if(temp__5735__auto____$3){
var s__58620__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58620__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58620__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58622 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58621 = (0);
while(true){
if((i__58621 < size__4581__auto____$2)){
var map__58623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58621);
var map__58623__$1 = (((((!((map__58623 == null))))?(((((map__58623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58623):map__58623);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58622,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58621,i__58598,i__58591,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58621,i__58598,i__58591,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58721 = (i__58621 + (1));
i__58621 = G__58721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58619(cljs.core.chunk_rest(s__58620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),null);
}
} else {
var map__58625 = cljs.core.first(s__58620__$2);
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58598,i__58591,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58598,i__58591,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603_$_iter__58619(cljs.core.rest(s__58620__$2)));
}
} else {
return null;
}
break;
}
});})(i__58598,i__58591,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58598,i__58591,map__58617,map__58617__$1,block,uid__$1,parents,s__58604__$2,temp__5735__auto____$2,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58603(cljs.core.rest(s__58604__$2)));
}
} else {
return null;
}
break;
}
});})(i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58598,i__58591,vec__58600,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58599,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58722 = (i__58598 + (1));
i__58598 = G__58722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58599),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596(cljs.core.chunk_rest(s__58597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58599),null);
}
} else {
var vec__58627 = cljs.core.first(s__58597__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58627,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58627,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630(s__58631){
return (new cljs.core.LazySeq(null,((function (i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58631__$1 = s__58631;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58631__$1);
if(temp__5735__auto____$2){
var s__58631__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58631__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58631__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58633 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58632 = (0);
while(true){
if((i__58632 < size__4581__auto____$1)){
var map__58634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58632);
var map__58634__$1 = (((((!((map__58634 == null))))?(((((map__58634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58634):map__58634);
var block = map__58634__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58633,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58632,i__58591,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58636(s__58637){
return (new cljs.core.LazySeq(null,((function (i__58632,i__58591,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58637__$1 = s__58637;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58637__$1);
if(temp__5735__auto____$3){
var s__58637__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58637__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58637__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58639 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58638 = (0);
while(true){
if((i__58638 < size__4581__auto____$2)){
var map__58640 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58638);
var map__58640__$1 = (((((!((map__58640 == null))))?(((((map__58640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58640):map__58640);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58639,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58638,i__58632,i__58591,map__58640,map__58640__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58639,s__58637__$2,temp__5735__auto____$3,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58638,i__58632,i__58591,map__58640,map__58640__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58639,s__58637__$2,temp__5735__auto____$3,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58723 = (i__58638 + (1));
i__58638 = G__58723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58639),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58636(cljs.core.chunk_rest(s__58637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58639),null);
}
} else {
var map__58642 = cljs.core.first(s__58637__$2);
var map__58642__$1 = (((((!((map__58642 == null))))?(((((map__58642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58642):map__58642);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58632,i__58591,map__58642,map__58642__$1,title__$1,string,uid__$2,s__58637__$2,temp__5735__auto____$3,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58632,i__58591,map__58642,map__58642__$1,title__$1,string,uid__$2,s__58637__$2,temp__5735__auto____$3,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58636(cljs.core.rest(s__58637__$2)));
}
} else {
return null;
}
break;
}
});})(i__58632,i__58591,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58632,i__58591,map__58634,map__58634__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58633,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58724 = (i__58632 + (1));
i__58632 = G__58724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58633),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630(cljs.core.chunk_rest(s__58631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58633),null);
}
} else {
var map__58644 = cljs.core.first(s__58631__$2);
var map__58644__$1 = (((((!((map__58644 == null))))?(((((map__58644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58644):map__58644);
var block = map__58644__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58591,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58646(s__58647){
return (new cljs.core.LazySeq(null,((function (i__58591,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58647__$1 = s__58647;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58647__$1);
if(temp__5735__auto____$3){
var s__58647__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58647__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58647__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58649 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58648 = (0);
while(true){
if((i__58648 < size__4581__auto____$1)){
var map__58650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58648);
var map__58650__$1 = (((((!((map__58650 == null))))?(((((map__58650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58650):map__58650);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58649,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58648,i__58591,map__58650,map__58650__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58649,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58648,i__58591,map__58650,map__58650__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58649,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58725 = (i__58648 + (1));
i__58648 = G__58725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58646(cljs.core.chunk_rest(s__58647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),null);
}
} else {
var map__58652 = cljs.core.first(s__58647__$2);
var map__58652__$1 = (((((!((map__58652 == null))))?(((((map__58652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58652):map__58652);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58591,map__58652,map__58652__$1,title__$1,string,uid__$2,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58591,map__58652,map__58652__$1,title__$1,string,uid__$2,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630_$_iter__58646(cljs.core.rest(s__58647__$2)));
}
} else {
return null;
}
break;
}
});})(i__58591,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58591,map__58644,map__58644__$1,block,uid__$1,parents,s__58631__$2,temp__5735__auto____$2,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596_$_iter__58630(cljs.core.rest(s__58631__$2)));
}
} else {
return null;
}
break;
}
});})(i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58591,vec__58627,group_title,group,s__58597__$2,temp__5735__auto____$1,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58596(cljs.core.rest(s__58597__$2)));
}
} else {
return null;
}
break;
}
});})(i__58591,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58591,vec__58593,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58592,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58726 = (i__58591 + (1));
i__58591 = G__58726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58592),athens$views$node_page$node_page_el_$_iter__58589(cljs.core.chunk_rest(s__58590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58592),null);
}
} else {
var vec__58654 = cljs.core.first(s__58590__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58654,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58654,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657(s__58658){
return (new cljs.core.LazySeq(null,(function (){
var s__58658__$1 = s__58658;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58658__$1);
if(temp__5735__auto____$1){
var s__58658__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58658__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58658__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58660 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58659 = (0);
while(true){
if((i__58659 < size__4581__auto__)){
var vec__58661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58659);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58661,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58661,(1),null);
cljs.core.chunk_append(b__58660,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664(s__58665){
return (new cljs.core.LazySeq(null,((function (i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58665__$1 = s__58665;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58665__$1);
if(temp__5735__auto____$2){
var s__58665__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58665__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58665__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58667 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58666 = (0);
while(true){
if((i__58666 < size__4581__auto____$1)){
var map__58668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58666);
var map__58668__$1 = (((((!((map__58668 == null))))?(((((map__58668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58668):map__58668);
var block = map__58668__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58667,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58666,i__58659,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58670(s__58671){
return (new cljs.core.LazySeq(null,((function (i__58666,i__58659,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58671__$1 = s__58671;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58671__$1);
if(temp__5735__auto____$3){
var s__58671__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58671__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58671__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58673 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58672 = (0);
while(true){
if((i__58672 < size__4581__auto____$2)){
var map__58674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58672);
var map__58674__$1 = (((((!((map__58674 == null))))?(((((map__58674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58674):map__58674);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58673,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58672,i__58666,i__58659,map__58674,map__58674__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58673,s__58671__$2,temp__5735__auto____$3,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58672,i__58666,i__58659,map__58674,map__58674__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58673,s__58671__$2,temp__5735__auto____$3,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58727 = (i__58672 + (1));
i__58672 = G__58727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58670(cljs.core.chunk_rest(s__58671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),null);
}
} else {
var map__58676 = cljs.core.first(s__58671__$2);
var map__58676__$1 = (((((!((map__58676 == null))))?(((((map__58676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58676):map__58676);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58666,i__58659,map__58676,map__58676__$1,title__$1,string,uid__$2,s__58671__$2,temp__5735__auto____$3,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58666,i__58659,map__58676,map__58676__$1,title__$1,string,uid__$2,s__58671__$2,temp__5735__auto____$3,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58670(cljs.core.rest(s__58671__$2)));
}
} else {
return null;
}
break;
}
});})(i__58666,i__58659,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58666,i__58659,map__58668,map__58668__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58667,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58728 = (i__58666 + (1));
i__58666 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58667),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664(cljs.core.chunk_rest(s__58665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58667),null);
}
} else {
var map__58678 = cljs.core.first(s__58665__$2);
var map__58678__$1 = (((((!((map__58678 == null))))?(((((map__58678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58678):map__58678);
var block = map__58678__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58659,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58680(s__58681){
return (new cljs.core.LazySeq(null,((function (i__58659,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58681__$1 = s__58681;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58681__$1);
if(temp__5735__auto____$3){
var s__58681__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58681__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58681__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58683 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58682 = (0);
while(true){
if((i__58682 < size__4581__auto____$1)){
var map__58684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58682);
var map__58684__$1 = (((((!((map__58684 == null))))?(((((map__58684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58684):map__58684);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58683,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58682,i__58659,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58682,i__58659,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58729 = (i__58682 + (1));
i__58682 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58680(cljs.core.chunk_rest(s__58681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),null);
}
} else {
var map__58686 = cljs.core.first(s__58681__$2);
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58659,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58659,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664_$_iter__58680(cljs.core.rest(s__58681__$2)));
}
} else {
return null;
}
break;
}
});})(i__58659,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58659,map__58678,map__58678__$1,block,uid__$1,parents,s__58665__$2,temp__5735__auto____$2,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58664(cljs.core.rest(s__58665__$2)));
}
} else {
return null;
}
break;
}
});})(i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58659,vec__58661,group_title,group,c__4580__auto__,size__4581__auto__,b__58660,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58730 = (i__58659 + (1));
i__58659 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58660),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657(cljs.core.chunk_rest(s__58658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58660),null);
}
} else {
var vec__58688 = cljs.core.first(s__58658__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691(s__58692){
return (new cljs.core.LazySeq(null,(function (){
var s__58692__$1 = s__58692;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58692__$1);
if(temp__5735__auto____$2){
var s__58692__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58692__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58692__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58694 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58693 = (0);
while(true){
if((i__58693 < size__4581__auto__)){
var map__58695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58693);
var map__58695__$1 = (((((!((map__58695 == null))))?(((((map__58695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58695):map__58695);
var block = map__58695__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58694,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58693,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58697(s__58698){
return (new cljs.core.LazySeq(null,((function (i__58693,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
var s__58698__$1 = s__58698;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58698__$1);
if(temp__5735__auto____$3){
var s__58698__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58698__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58698__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58700 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58699 = (0);
while(true){
if((i__58699 < size__4581__auto____$1)){
var map__58701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58699);
var map__58701__$1 = (((((!((map__58701 == null))))?(((((map__58701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58701):map__58701);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58699,i__58693,map__58701,map__58701__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58700,s__58698__$2,temp__5735__auto____$3,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58699,i__58693,map__58701,map__58701__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58700,s__58698__$2,temp__5735__auto____$3,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58731 = (i__58699 + (1));
i__58699 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58700),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58697(cljs.core.chunk_rest(s__58698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58700),null);
}
} else {
var map__58703 = cljs.core.first(s__58698__$2);
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58703):map__58703);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58693,map__58703,map__58703__$1,title__$1,string,uid__$2,s__58698__$2,temp__5735__auto____$3,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58693,map__58703,map__58703__$1,title__$1,string,uid__$2,s__58698__$2,temp__5735__auto____$3,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58697(cljs.core.rest(s__58698__$2)));
}
} else {
return null;
}
break;
}
});})(i__58693,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
,null,null));
});})(i__58693,map__58695,map__58695__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58694,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58732 = (i__58693 + (1));
i__58693 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58694),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691(cljs.core.chunk_rest(s__58692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58694),null);
}
} else {
var map__58705 = cljs.core.first(s__58692__$2);
var map__58705__$1 = (((((!((map__58705 == null))))?(((((map__58705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58705):map__58705);
var block = map__58705__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58707(s__58708){
return (new cljs.core.LazySeq(null,(function (){
var s__58708__$1 = s__58708;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58708__$1);
if(temp__5735__auto____$3){
var s__58708__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58708__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58708__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58710 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58709 = (0);
while(true){
if((i__58709 < size__4581__auto__)){
var map__58711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58709);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58709,map__58711,map__58711__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58710,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58709,map__58711,map__58711__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58710,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58733 = (i__58709 + (1));
i__58709 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58707(cljs.core.chunk_rest(s__58708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),null);
}
} else {
var map__58713 = cljs.core.first(s__58708__$2);
var map__58713__$1 = (((((!((map__58713 == null))))?(((((map__58713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58713):map__58713);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58713,map__58713__$1,title__$1,string,uid__$2,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58713,map__58713__$1,title__$1,string,uid__$2,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691_$_iter__58707(cljs.core.rest(s__58708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58705,map__58705__$1,block,uid__$1,parents,s__58692__$2,temp__5735__auto____$2,vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657_$_iter__58691(cljs.core.rest(s__58692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58688,group_title,group,s__58658__$2,temp__5735__auto____$1,vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58589_$_iter__58657(cljs.core.rest(s__58658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58654,linked_or_unlinked,refs,s__58590__$2,temp__5735__auto__,map__58577,map__58577__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58589(cljs.core.rest(s__58590__$2)));
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
var map__58715 = athens.db.get_node_document(ident);
var map__58715__$1 = (((((!((map__58715 == null))))?(((((map__58715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58715):map__58715);
var node = map__58715__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58717) : re_frame.core.subscribe.call(null,G__58717));
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
