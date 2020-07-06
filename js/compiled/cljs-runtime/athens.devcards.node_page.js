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
var G__65842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65842) : re_frame.core.dispatch.call(null,G__65842));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65843 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65844 = athens.db.dsdb;
var G__65845 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65843,G__65844,G__65845) : posh.reagent.q.call(null,G__65843,G__65844,G__65845));
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
return cljs.core.boolean$((function (){try{var vec__65847 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e65846){if((e65846 instanceof Object)){
var _ = e65846;
return false;
} else {
throw e65846;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65850,editing_uid,ref_groups,timeline_page_QMARK_){
var map__65851 = p__65850;
var map__65851__$1 = (((((!((map__65851 == null))))?(((((map__65851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65851):map__65851);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65853 = e.target.value;
var G__65854 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65853,G__65854) : athens.devcards.node_page.db_handler.call(null,G__65853,G__65854));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),((cljs.core.not(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65855(s__65856){
return (new cljs.core.LazySeq(null,(function (){
var s__65856__$1 = s__65856;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65856__$1);
if(temp__5735__auto__){
var s__65856__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65856__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65856__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65858 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65857 = (0);
while(true){
if((i__65857 < size__4581__auto__)){
var map__65859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65857);
var map__65859__$1 = (((((!((map__65859 == null))))?(((((map__65859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65859):map__65859);
var child = map__65859__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65858,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__66012 = (i__65857 + (1));
i__65857 = G__66012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),athens$devcards$node_page$node_page_el_$_iter__65855(cljs.core.chunk_rest(s__65856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),null);
}
} else {
var map__65861 = cljs.core.first(s__65856__$2);
var map__65861__$1 = (((((!((map__65861 == null))))?(((((map__65861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65861):map__65861);
var child = map__65861__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65855(cljs.core.rest(s__65856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65863(s__65864){
return (new cljs.core.LazySeq(null,(function (){
var s__65864__$1 = s__65864;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65864__$1);
if(temp__5735__auto__){
var s__65864__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65864__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65864__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65866 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65865 = (0);
while(true){
if((i__65865 < size__4581__auto__)){
var vec__65867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65865);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65867,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65867,(1),null);
cljs.core.chunk_append(b__65866,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65865,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870(s__65871){
return (new cljs.core.LazySeq(null,((function (i__65865,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65871__$1 = s__65871;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65871__$1);
if(temp__5735__auto____$1){
var s__65871__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65871__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65871__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65873 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65872 = (0);
while(true){
if((i__65872 < size__4581__auto____$1)){
var vec__65874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65872);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65874,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65874,(1),null);
cljs.core.chunk_append(b__65873,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877(s__65878){
return (new cljs.core.LazySeq(null,((function (i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65878__$1 = s__65878;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65878__$1);
if(temp__5735__auto____$2){
var s__65878__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65878__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65878__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65880 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65879 = (0);
while(true){
if((i__65879 < size__4581__auto____$2)){
var map__65881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65879);
var map__65881__$1 = (((((!((map__65881 == null))))?(((((map__65881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65881):map__65881);
var block = map__65881__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65880,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65879,i__65872,i__65865,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65883(s__65884){
return (new cljs.core.LazySeq(null,((function (i__65879,i__65872,i__65865,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65884__$1 = s__65884;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65884__$1);
if(temp__5735__auto____$3){
var s__65884__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65884__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65884__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65886 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65885 = (0);
while(true){
if((i__65885 < size__4581__auto____$3)){
var map__65887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65885);
var map__65887__$1 = (((((!((map__65887 == null))))?(((((map__65887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65887):map__65887);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65886,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65885,i__65879,i__65872,i__65865,map__65887,map__65887__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65886,s__65884__$2,temp__5735__auto____$3,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65885,i__65879,i__65872,i__65865,map__65887,map__65887__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65886,s__65884__$2,temp__5735__auto____$3,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66016 = (i__65885 + (1));
i__65885 = G__66016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65886),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65883(cljs.core.chunk_rest(s__65884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65886),null);
}
} else {
var map__65889 = cljs.core.first(s__65884__$2);
var map__65889__$1 = (((((!((map__65889 == null))))?(((((map__65889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65889):map__65889);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65879,i__65872,i__65865,map__65889,map__65889__$1,title__$1,string,uid__$2,s__65884__$2,temp__5735__auto____$3,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65879,i__65872,i__65865,map__65889,map__65889__$1,title__$1,string,uid__$2,s__65884__$2,temp__5735__auto____$3,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65883(cljs.core.rest(s__65884__$2)));
}
} else {
return null;
}
break;
}
});})(i__65879,i__65872,i__65865,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65879,i__65872,i__65865,map__65881,map__65881__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65880,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66017 = (i__65879 + (1));
i__65879 = G__66017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65880),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877(cljs.core.chunk_rest(s__65878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65880),null);
}
} else {
var map__65891 = cljs.core.first(s__65878__$2);
var map__65891__$1 = (((((!((map__65891 == null))))?(((((map__65891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65891):map__65891);
var block = map__65891__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65872,i__65865,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65893(s__65894){
return (new cljs.core.LazySeq(null,((function (i__65872,i__65865,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65894__$1 = s__65894;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65894__$1);
if(temp__5735__auto____$3){
var s__65894__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65894__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65894__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65896 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65895 = (0);
while(true){
if((i__65895 < size__4581__auto____$2)){
var map__65897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65895);
var map__65897__$1 = (((((!((map__65897 == null))))?(((((map__65897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65897):map__65897);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65896,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65895,i__65872,i__65865,map__65897,map__65897__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65896,s__65894__$2,temp__5735__auto____$3,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65895,i__65872,i__65865,map__65897,map__65897__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65896,s__65894__$2,temp__5735__auto____$3,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66018 = (i__65895 + (1));
i__65895 = G__66018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65896),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65893(cljs.core.chunk_rest(s__65894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65896),null);
}
} else {
var map__65899 = cljs.core.first(s__65894__$2);
var map__65899__$1 = (((((!((map__65899 == null))))?(((((map__65899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65899):map__65899);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65872,i__65865,map__65899,map__65899__$1,title__$1,string,uid__$2,s__65894__$2,temp__5735__auto____$3,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65872,i__65865,map__65899,map__65899__$1,title__$1,string,uid__$2,s__65894__$2,temp__5735__auto____$3,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877_$_iter__65893(cljs.core.rest(s__65894__$2)));
}
} else {
return null;
}
break;
}
});})(i__65872,i__65865,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65872,i__65865,map__65891,map__65891__$1,block,uid__$1,parents,s__65878__$2,temp__5735__auto____$2,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65877(cljs.core.rest(s__65878__$2)));
}
} else {
return null;
}
break;
}
});})(i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65872,i__65865,vec__65874,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65873,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66019 = (i__65872 + (1));
i__65872 = G__66019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65873),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870(cljs.core.chunk_rest(s__65871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65873),null);
}
} else {
var vec__65901 = cljs.core.first(s__65871__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904(s__65905){
return (new cljs.core.LazySeq(null,((function (i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65905__$1 = s__65905;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65905__$1);
if(temp__5735__auto____$2){
var s__65905__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65905__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65905__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65907 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65906 = (0);
while(true){
if((i__65906 < size__4581__auto____$1)){
var map__65908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65906);
var map__65908__$1 = (((((!((map__65908 == null))))?(((((map__65908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65908):map__65908);
var block = map__65908__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65907,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65906,i__65865,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65910(s__65911){
return (new cljs.core.LazySeq(null,((function (i__65906,i__65865,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65911__$1 = s__65911;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65911__$1);
if(temp__5735__auto____$3){
var s__65911__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65911__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65911__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65913 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65912 = (0);
while(true){
if((i__65912 < size__4581__auto____$2)){
var map__65914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65912);
var map__65914__$1 = (((((!((map__65914 == null))))?(((((map__65914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65914):map__65914);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65913,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65912,i__65906,i__65865,map__65914,map__65914__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65913,s__65911__$2,temp__5735__auto____$3,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65912,i__65906,i__65865,map__65914,map__65914__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65913,s__65911__$2,temp__5735__auto____$3,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66020 = (i__65912 + (1));
i__65912 = G__66020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65913),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65910(cljs.core.chunk_rest(s__65911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65913),null);
}
} else {
var map__65916 = cljs.core.first(s__65911__$2);
var map__65916__$1 = (((((!((map__65916 == null))))?(((((map__65916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65916):map__65916);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65906,i__65865,map__65916,map__65916__$1,title__$1,string,uid__$2,s__65911__$2,temp__5735__auto____$3,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65906,i__65865,map__65916,map__65916__$1,title__$1,string,uid__$2,s__65911__$2,temp__5735__auto____$3,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65910(cljs.core.rest(s__65911__$2)));
}
} else {
return null;
}
break;
}
});})(i__65906,i__65865,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65906,i__65865,map__65908,map__65908__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65907,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66021 = (i__65906 + (1));
i__65906 = G__66021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65907),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904(cljs.core.chunk_rest(s__65905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65907),null);
}
} else {
var map__65918 = cljs.core.first(s__65905__$2);
var map__65918__$1 = (((((!((map__65918 == null))))?(((((map__65918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65918):map__65918);
var block = map__65918__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65865,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65920(s__65921){
return (new cljs.core.LazySeq(null,((function (i__65865,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65921__$1 = s__65921;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65921__$1);
if(temp__5735__auto____$3){
var s__65921__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65921__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65921__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65923 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65922 = (0);
while(true){
if((i__65922 < size__4581__auto____$1)){
var map__65924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65922);
var map__65924__$1 = (((((!((map__65924 == null))))?(((((map__65924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65924):map__65924);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65923,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65922,i__65865,map__65924,map__65924__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65923,s__65921__$2,temp__5735__auto____$3,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65922,i__65865,map__65924,map__65924__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65923,s__65921__$2,temp__5735__auto____$3,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66022 = (i__65922 + (1));
i__65922 = G__66022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65923),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65920(cljs.core.chunk_rest(s__65921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65923),null);
}
} else {
var map__65926 = cljs.core.first(s__65921__$2);
var map__65926__$1 = (((((!((map__65926 == null))))?(((((map__65926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65926):map__65926);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65865,map__65926,map__65926__$1,title__$1,string,uid__$2,s__65921__$2,temp__5735__auto____$3,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65865,map__65926,map__65926__$1,title__$1,string,uid__$2,s__65921__$2,temp__5735__auto____$3,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904_$_iter__65920(cljs.core.rest(s__65921__$2)));
}
} else {
return null;
}
break;
}
});})(i__65865,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65865,map__65918,map__65918__$1,block,uid__$1,parents,s__65905__$2,temp__5735__auto____$2,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870_$_iter__65904(cljs.core.rest(s__65905__$2)));
}
} else {
return null;
}
break;
}
});})(i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65865,vec__65901,group_title,group,s__65871__$2,temp__5735__auto____$1,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65870(cljs.core.rest(s__65871__$2)));
}
} else {
return null;
}
break;
}
});})(i__65865,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65865,vec__65867,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65866,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__66023 = (i__65865 + (1));
i__65865 = G__66023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65866),athens$devcards$node_page$node_page_el_$_iter__65863(cljs.core.chunk_rest(s__65864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65866),null);
}
} else {
var vec__65928 = cljs.core.first(s__65864__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65928,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65928,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931(s__65932){
return (new cljs.core.LazySeq(null,(function (){
var s__65932__$1 = s__65932;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65932__$1);
if(temp__5735__auto____$1){
var s__65932__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65932__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65932__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65934 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65933 = (0);
while(true){
if((i__65933 < size__4581__auto__)){
var vec__65935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65933);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935,(1),null);
cljs.core.chunk_append(b__65934,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938(s__65939){
return (new cljs.core.LazySeq(null,((function (i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65939__$1 = s__65939;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65939__$1);
if(temp__5735__auto____$2){
var s__65939__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65939__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65939__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65941 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65940 = (0);
while(true){
if((i__65940 < size__4581__auto____$1)){
var map__65942 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65940);
var map__65942__$1 = (((((!((map__65942 == null))))?(((((map__65942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65942):map__65942);
var block = map__65942__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65942__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65942__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65941,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65940,i__65933,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65944(s__65945){
return (new cljs.core.LazySeq(null,((function (i__65940,i__65933,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65945__$1 = s__65945;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65945__$1);
if(temp__5735__auto____$3){
var s__65945__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65945__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65945__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65947 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65946 = (0);
while(true){
if((i__65946 < size__4581__auto____$2)){
var map__65948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65946);
var map__65948__$1 = (((((!((map__65948 == null))))?(((((map__65948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65948):map__65948);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65946,i__65940,i__65933,map__65948,map__65948__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65947,s__65945__$2,temp__5735__auto____$3,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65946,i__65940,i__65933,map__65948,map__65948__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65947,s__65945__$2,temp__5735__auto____$3,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66024 = (i__65946 + (1));
i__65946 = G__66024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65947),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65944(cljs.core.chunk_rest(s__65945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65947),null);
}
} else {
var map__65950 = cljs.core.first(s__65945__$2);
var map__65950__$1 = (((((!((map__65950 == null))))?(((((map__65950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65950):map__65950);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65950__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65940,i__65933,map__65950,map__65950__$1,title__$1,string,uid__$2,s__65945__$2,temp__5735__auto____$3,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65940,i__65933,map__65950,map__65950__$1,title__$1,string,uid__$2,s__65945__$2,temp__5735__auto____$3,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65944(cljs.core.rest(s__65945__$2)));
}
} else {
return null;
}
break;
}
});})(i__65940,i__65933,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65940,i__65933,map__65942,map__65942__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65941,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66025 = (i__65940 + (1));
i__65940 = G__66025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65941),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938(cljs.core.chunk_rest(s__65939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65941),null);
}
} else {
var map__65952 = cljs.core.first(s__65939__$2);
var map__65952__$1 = (((((!((map__65952 == null))))?(((((map__65952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65952):map__65952);
var block = map__65952__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65933,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65954(s__65955){
return (new cljs.core.LazySeq(null,((function (i__65933,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65955__$1 = s__65955;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65955__$1);
if(temp__5735__auto____$3){
var s__65955__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65955__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65955__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65957 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65956 = (0);
while(true){
if((i__65956 < size__4581__auto____$1)){
var map__65958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65956);
var map__65958__$1 = (((((!((map__65958 == null))))?(((((map__65958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65958):map__65958);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65958__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65958__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65958__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65957,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65956,i__65933,map__65958,map__65958__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65957,s__65955__$2,temp__5735__auto____$3,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65956,i__65933,map__65958,map__65958__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65957,s__65955__$2,temp__5735__auto____$3,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66026 = (i__65956 + (1));
i__65956 = G__66026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65957),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65954(cljs.core.chunk_rest(s__65955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65957),null);
}
} else {
var map__65960 = cljs.core.first(s__65955__$2);
var map__65960__$1 = (((((!((map__65960 == null))))?(((((map__65960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65960):map__65960);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65933,map__65960,map__65960__$1,title__$1,string,uid__$2,s__65955__$2,temp__5735__auto____$3,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65933,map__65960,map__65960__$1,title__$1,string,uid__$2,s__65955__$2,temp__5735__auto____$3,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938_$_iter__65954(cljs.core.rest(s__65955__$2)));
}
} else {
return null;
}
break;
}
});})(i__65933,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65933,map__65952,map__65952__$1,block,uid__$1,parents,s__65939__$2,temp__5735__auto____$2,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65938(cljs.core.rest(s__65939__$2)));
}
} else {
return null;
}
break;
}
});})(i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65933,vec__65935,group_title,group,c__4580__auto__,size__4581__auto__,b__65934,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66027 = (i__65933 + (1));
i__65933 = G__66027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65934),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931(cljs.core.chunk_rest(s__65932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65934),null);
}
} else {
var vec__65962 = cljs.core.first(s__65932__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65962,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65962,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965(s__65966){
return (new cljs.core.LazySeq(null,(function (){
var s__65966__$1 = s__65966;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65966__$1);
if(temp__5735__auto____$2){
var s__65966__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65966__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65966__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65968 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65967 = (0);
while(true){
if((i__65967 < size__4581__auto__)){
var map__65969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65967);
var map__65969__$1 = (((((!((map__65969 == null))))?(((((map__65969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65969):map__65969);
var block = map__65969__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65968,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65967,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65971(s__65972){
return (new cljs.core.LazySeq(null,((function (i__65967,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
var s__65972__$1 = s__65972;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65972__$1);
if(temp__5735__auto____$3){
var s__65972__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65972__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65972__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65974 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65973 = (0);
while(true){
if((i__65973 < size__4581__auto____$1)){
var map__65975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65973);
var map__65975__$1 = (((((!((map__65975 == null))))?(((((map__65975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65975):map__65975);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65975__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65975__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65975__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65973,i__65967,map__65975,map__65975__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65974,s__65972__$2,temp__5735__auto____$3,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65973,i__65967,map__65975,map__65975__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65974,s__65972__$2,temp__5735__auto____$3,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66028 = (i__65973 + (1));
i__65973 = G__66028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65974),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65971(cljs.core.chunk_rest(s__65972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65974),null);
}
} else {
var map__65977 = cljs.core.first(s__65972__$2);
var map__65977__$1 = (((((!((map__65977 == null))))?(((((map__65977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65977):map__65977);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65977__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65977__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65977__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65967,map__65977,map__65977__$1,title__$1,string,uid__$2,s__65972__$2,temp__5735__auto____$3,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65967,map__65977,map__65977__$1,title__$1,string,uid__$2,s__65972__$2,temp__5735__auto____$3,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65971(cljs.core.rest(s__65972__$2)));
}
} else {
return null;
}
break;
}
});})(i__65967,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
,null,null));
});})(i__65967,map__65969,map__65969__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65968,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66029 = (i__65967 + (1));
i__65967 = G__66029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65968),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965(cljs.core.chunk_rest(s__65966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65968),null);
}
} else {
var map__65979 = cljs.core.first(s__65966__$2);
var map__65979__$1 = (((((!((map__65979 == null))))?(((((map__65979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65979):map__65979);
var block = map__65979__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65981(s__65982){
return (new cljs.core.LazySeq(null,(function (){
var s__65982__$1 = s__65982;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65982__$1);
if(temp__5735__auto____$3){
var s__65982__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65982__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65982__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65984 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65983 = (0);
while(true){
if((i__65983 < size__4581__auto__)){
var map__65985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65983);
var map__65985__$1 = (((((!((map__65985 == null))))?(((((map__65985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65985):map__65985);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65984,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65983,map__65985,map__65985__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65984,s__65982__$2,temp__5735__auto____$3,map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65983,map__65985,map__65985__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65984,s__65982__$2,temp__5735__auto____$3,map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66030 = (i__65983 + (1));
i__65983 = G__66030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65984),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65981(cljs.core.chunk_rest(s__65982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65984),null);
}
} else {
var map__65987 = cljs.core.first(s__65982__$2);
var map__65987__$1 = (((((!((map__65987 == null))))?(((((map__65987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65987):map__65987);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65987,map__65987__$1,title__$1,string,uid__$2,s__65982__$2,temp__5735__auto____$3,map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65987,map__65987__$1,title__$1,string,uid__$2,s__65982__$2,temp__5735__auto____$3,map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965_$_iter__65981(cljs.core.rest(s__65982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65979,map__65979__$1,block,uid__$1,parents,s__65966__$2,temp__5735__auto____$2,vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931_$_iter__65965(cljs.core.rest(s__65966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65962,group_title,group,s__65932__$2,temp__5735__auto____$1,vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65863_$_iter__65931(cljs.core.rest(s__65932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65928,linked_or_unlinked,refs,s__65864__$2,temp__5735__auto__,map__65851,map__65851__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65863(cljs.core.rest(s__65864__$2)));
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
var map__65989 = athens.db.get_node_document(ident);
var map__65989__$1 = (((((!((map__65989 == null))))?(((((map__65989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65989):map__65989);
var node = map__65989__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__65991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65991) : re_frame.core.subscribe.call(null,G__65991));
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
