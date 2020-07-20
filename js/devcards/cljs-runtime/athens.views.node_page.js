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
goog.require('athens.views.dropdown');
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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58569) : re_frame.core.dispatch.call(null,G__58569));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58570 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58571 = athens.db.dsdb;
var G__58572 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58570,G__58571,G__58572) : posh.reagent.q.call(null,G__58570,G__58571,G__58572));
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
return cljs.core.boolean$((function (){try{var vec__58574 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58574,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58574,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58574,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58573){if((e58573 instanceof Object)){
var _ = e58573;
return false;
} else {
throw e58573;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58577,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position){
var map__58578 = p__58577;
var map__58578__$1 = (((((!((map__58578 == null))))?(((((map__58578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58578):map__58578);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58580 = e.target.value;
var G__58581 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58580,G__58581) : athens.views.node_page.db_handler.call(null,G__58580,G__58581));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_page_menu_QMARK_,cljs.core.not),cljs.core.reset_BANG_(page_menu_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.target.getBoundingClientRect().left,new cljs.core.Keyword(null,"y","y",-1757859776),e.target.getBoundingClientRect().bottom], null)));
}),new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?true:null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.page_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join('')], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58582(s__58583){
return (new cljs.core.LazySeq(null,(function (){
var s__58583__$1 = s__58583;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58583__$1);
if(temp__5735__auto__){
var s__58583__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58583__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58583__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58585 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58584 = (0);
while(true){
if((i__58584 < size__4581__auto__)){
var map__58586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58584);
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var child = map__58586__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58585,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58719 = (i__58584 + (1));
i__58584 = G__58719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58585),athens$views$node_page$node_page_el_$_iter__58582(cljs.core.chunk_rest(s__58583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58585),null);
}
} else {
var map__58588 = cljs.core.first(s__58583__$2);
var map__58588__$1 = (((((!((map__58588 == null))))?(((((map__58588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58588):map__58588);
var child = map__58588__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58582(cljs.core.rest(s__58583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58590(s__58591){
return (new cljs.core.LazySeq(null,(function (){
var s__58591__$1 = s__58591;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58591__$1);
if(temp__5735__auto__){
var s__58591__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58591__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58591__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58593 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58592 = (0);
while(true){
if((i__58592 < size__4581__auto__)){
var vec__58594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58592);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58594,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58594,(1),null);
cljs.core.chunk_append(b__58593,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58592,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597(s__58598){
return (new cljs.core.LazySeq(null,((function (i__58592,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58598__$1 = s__58598;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58598__$1);
if(temp__5735__auto____$1){
var s__58598__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58598__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58598__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58600 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58599 = (0);
while(true){
if((i__58599 < size__4581__auto____$1)){
var vec__58601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58599);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(1),null);
cljs.core.chunk_append(b__58600,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604(s__58605){
return (new cljs.core.LazySeq(null,((function (i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58605__$1 = s__58605;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58605__$1);
if(temp__5735__auto____$2){
var s__58605__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58605__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58605__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58607 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58606 = (0);
while(true){
if((i__58606 < size__4581__auto____$2)){
var map__58608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58606);
var map__58608__$1 = (((((!((map__58608 == null))))?(((((map__58608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58608):map__58608);
var block = map__58608__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58607,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58606,i__58599,i__58592,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58610(s__58611){
return (new cljs.core.LazySeq(null,((function (i__58606,i__58599,i__58592,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58611__$1 = s__58611;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58611__$1);
if(temp__5735__auto____$3){
var s__58611__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58611__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58611__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58613 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58612 = (0);
while(true){
if((i__58612 < size__4581__auto____$3)){
var map__58614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58612);
var map__58614__$1 = (((((!((map__58614 == null))))?(((((map__58614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58614):map__58614);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58613,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58612,i__58606,i__58599,i__58592,map__58614,map__58614__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58613,s__58611__$2,temp__5735__auto____$3,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58612,i__58606,i__58599,i__58592,map__58614,map__58614__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58613,s__58611__$2,temp__5735__auto____$3,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58720 = (i__58612 + (1));
i__58612 = G__58720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58610(cljs.core.chunk_rest(s__58611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),null);
}
} else {
var map__58616 = cljs.core.first(s__58611__$2);
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58606,i__58599,i__58592,map__58616,map__58616__$1,title__$1,string,uid__$2,s__58611__$2,temp__5735__auto____$3,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58606,i__58599,i__58592,map__58616,map__58616__$1,title__$1,string,uid__$2,s__58611__$2,temp__5735__auto____$3,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58610(cljs.core.rest(s__58611__$2)));
}
} else {
return null;
}
break;
}
});})(i__58606,i__58599,i__58592,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58606,i__58599,i__58592,map__58608,map__58608__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58607,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58721 = (i__58606 + (1));
i__58606 = G__58721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58607),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604(cljs.core.chunk_rest(s__58605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58607),null);
}
} else {
var map__58618 = cljs.core.first(s__58605__$2);
var map__58618__$1 = (((((!((map__58618 == null))))?(((((map__58618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58618):map__58618);
var block = map__58618__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58599,i__58592,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58620(s__58621){
return (new cljs.core.LazySeq(null,((function (i__58599,i__58592,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58621__$1 = s__58621;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58621__$1);
if(temp__5735__auto____$3){
var s__58621__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58621__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58621__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58623 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58622 = (0);
while(true){
if((i__58622 < size__4581__auto____$2)){
var map__58624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58622);
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58623,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58622,i__58599,i__58592,map__58624,map__58624__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58623,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58622,i__58599,i__58592,map__58624,map__58624__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58623,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58722 = (i__58622 + (1));
i__58622 = G__58722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58623),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58620(cljs.core.chunk_rest(s__58621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58623),null);
}
} else {
var map__58626 = cljs.core.first(s__58621__$2);
var map__58626__$1 = (((((!((map__58626 == null))))?(((((map__58626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58626):map__58626);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58599,i__58592,map__58626,map__58626__$1,title__$1,string,uid__$2,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58599,i__58592,map__58626,map__58626__$1,title__$1,string,uid__$2,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604_$_iter__58620(cljs.core.rest(s__58621__$2)));
}
} else {
return null;
}
break;
}
});})(i__58599,i__58592,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58599,i__58592,map__58618,map__58618__$1,block,uid__$1,parents,s__58605__$2,temp__5735__auto____$2,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58604(cljs.core.rest(s__58605__$2)));
}
} else {
return null;
}
break;
}
});})(i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58599,i__58592,vec__58601,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58600,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58723 = (i__58599 + (1));
i__58599 = G__58723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58600),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597(cljs.core.chunk_rest(s__58598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58600),null);
}
} else {
var vec__58628 = cljs.core.first(s__58598__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631(s__58632){
return (new cljs.core.LazySeq(null,((function (i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58632__$1 = s__58632;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58632__$1);
if(temp__5735__auto____$2){
var s__58632__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58632__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58632__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58634 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58633 = (0);
while(true){
if((i__58633 < size__4581__auto____$1)){
var map__58635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58633);
var map__58635__$1 = (((((!((map__58635 == null))))?(((((map__58635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58635):map__58635);
var block = map__58635__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58634,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58633,i__58592,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58637(s__58638){
return (new cljs.core.LazySeq(null,((function (i__58633,i__58592,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58638__$1 = s__58638;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58638__$1);
if(temp__5735__auto____$3){
var s__58638__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58638__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58638__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58640 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58639 = (0);
while(true){
if((i__58639 < size__4581__auto____$2)){
var map__58641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58639);
var map__58641__$1 = (((((!((map__58641 == null))))?(((((map__58641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58641):map__58641);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58640,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58639,i__58633,i__58592,map__58641,map__58641__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58640,s__58638__$2,temp__5735__auto____$3,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58639,i__58633,i__58592,map__58641,map__58641__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58640,s__58638__$2,temp__5735__auto____$3,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58724 = (i__58639 + (1));
i__58639 = G__58724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58640),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58637(cljs.core.chunk_rest(s__58638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58640),null);
}
} else {
var map__58643 = cljs.core.first(s__58638__$2);
var map__58643__$1 = (((((!((map__58643 == null))))?(((((map__58643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58643):map__58643);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58633,i__58592,map__58643,map__58643__$1,title__$1,string,uid__$2,s__58638__$2,temp__5735__auto____$3,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58633,i__58592,map__58643,map__58643__$1,title__$1,string,uid__$2,s__58638__$2,temp__5735__auto____$3,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58637(cljs.core.rest(s__58638__$2)));
}
} else {
return null;
}
break;
}
});})(i__58633,i__58592,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58633,i__58592,map__58635,map__58635__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58634,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58725 = (i__58633 + (1));
i__58633 = G__58725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58634),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631(cljs.core.chunk_rest(s__58632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58634),null);
}
} else {
var map__58645 = cljs.core.first(s__58632__$2);
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var block = map__58645__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58592,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58647(s__58648){
return (new cljs.core.LazySeq(null,((function (i__58592,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58648__$1 = s__58648;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58648__$1);
if(temp__5735__auto____$3){
var s__58648__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58648__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58648__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58650 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58649 = (0);
while(true){
if((i__58649 < size__4581__auto____$1)){
var map__58651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58649);
var map__58651__$1 = (((((!((map__58651 == null))))?(((((map__58651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58651):map__58651);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58649,i__58592,map__58651,map__58651__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58649,i__58592,map__58651,map__58651__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58726 = (i__58649 + (1));
i__58649 = G__58726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58647(cljs.core.chunk_rest(s__58648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),null);
}
} else {
var map__58653 = cljs.core.first(s__58648__$2);
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58592,map__58653,map__58653__$1,title__$1,string,uid__$2,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58592,map__58653,map__58653__$1,title__$1,string,uid__$2,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631_$_iter__58647(cljs.core.rest(s__58648__$2)));
}
} else {
return null;
}
break;
}
});})(i__58592,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58592,map__58645,map__58645__$1,block,uid__$1,parents,s__58632__$2,temp__5735__auto____$2,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597_$_iter__58631(cljs.core.rest(s__58632__$2)));
}
} else {
return null;
}
break;
}
});})(i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58592,vec__58628,group_title,group,s__58598__$2,temp__5735__auto____$1,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58597(cljs.core.rest(s__58598__$2)));
}
} else {
return null;
}
break;
}
});})(i__58592,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58592,vec__58594,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58593,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58727 = (i__58592 + (1));
i__58592 = G__58727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58593),athens$views$node_page$node_page_el_$_iter__58590(cljs.core.chunk_rest(s__58591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58593),null);
}
} else {
var vec__58655 = cljs.core.first(s__58591__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58655,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58655,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658(s__58659){
return (new cljs.core.LazySeq(null,(function (){
var s__58659__$1 = s__58659;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58659__$1);
if(temp__5735__auto____$1){
var s__58659__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58659__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58659__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58661 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58660 = (0);
while(true){
if((i__58660 < size__4581__auto__)){
var vec__58662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58660);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58662,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58662,(1),null);
cljs.core.chunk_append(b__58661,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665(s__58666){
return (new cljs.core.LazySeq(null,((function (i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58666__$1 = s__58666;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58666__$1);
if(temp__5735__auto____$2){
var s__58666__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58666__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58666__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58668 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58667 = (0);
while(true){
if((i__58667 < size__4581__auto____$1)){
var map__58669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58667);
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var block = map__58669__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58668,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58667,i__58660,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58671(s__58672){
return (new cljs.core.LazySeq(null,((function (i__58667,i__58660,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58672__$1 = s__58672;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58672__$1);
if(temp__5735__auto____$3){
var s__58672__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58672__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58672__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58674 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58673 = (0);
while(true){
if((i__58673 < size__4581__auto____$2)){
var map__58675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58673);
var map__58675__$1 = (((((!((map__58675 == null))))?(((((map__58675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58675):map__58675);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58674,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58673,i__58667,i__58660,map__58675,map__58675__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58674,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58673,i__58667,i__58660,map__58675,map__58675__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58674,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58728 = (i__58673 + (1));
i__58673 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58671(cljs.core.chunk_rest(s__58672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),null);
}
} else {
var map__58677 = cljs.core.first(s__58672__$2);
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58667,i__58660,map__58677,map__58677__$1,title__$1,string,uid__$2,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58667,i__58660,map__58677,map__58677__$1,title__$1,string,uid__$2,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58671(cljs.core.rest(s__58672__$2)));
}
} else {
return null;
}
break;
}
});})(i__58667,i__58660,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58667,i__58660,map__58669,map__58669__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58729 = (i__58667 + (1));
i__58667 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665(cljs.core.chunk_rest(s__58666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),null);
}
} else {
var map__58679 = cljs.core.first(s__58666__$2);
var map__58679__$1 = (((((!((map__58679 == null))))?(((((map__58679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58679):map__58679);
var block = map__58679__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58660,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58681(s__58682){
return (new cljs.core.LazySeq(null,((function (i__58660,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58682__$1 = s__58682;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58682__$1);
if(temp__5735__auto____$3){
var s__58682__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58682__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58682__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58684 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58683 = (0);
while(true){
if((i__58683 < size__4581__auto____$1)){
var map__58685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58683);
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58684,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58683,i__58660,map__58685,map__58685__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58684,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58683,i__58660,map__58685,map__58685__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58684,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58683 + (1));
i__58683 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58684),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58681(cljs.core.chunk_rest(s__58682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58684),null);
}
} else {
var map__58687 = cljs.core.first(s__58682__$2);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58660,map__58687,map__58687__$1,title__$1,string,uid__$2,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58660,map__58687,map__58687__$1,title__$1,string,uid__$2,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665_$_iter__58681(cljs.core.rest(s__58682__$2)));
}
} else {
return null;
}
break;
}
});})(i__58660,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58660,map__58679,map__58679__$1,block,uid__$1,parents,s__58666__$2,temp__5735__auto____$2,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58665(cljs.core.rest(s__58666__$2)));
}
} else {
return null;
}
break;
}
});})(i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58660,vec__58662,group_title,group,c__4580__auto__,size__4581__auto__,b__58661,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58731 = (i__58660 + (1));
i__58660 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58661),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658(cljs.core.chunk_rest(s__58659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58661),null);
}
} else {
var vec__58689 = cljs.core.first(s__58659__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58689,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58689,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692(s__58693){
return (new cljs.core.LazySeq(null,(function (){
var s__58693__$1 = s__58693;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58693__$1);
if(temp__5735__auto____$2){
var s__58693__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58693__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58693__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58695 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58694 = (0);
while(true){
if((i__58694 < size__4581__auto__)){
var map__58696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58694);
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var block = map__58696__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58695,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58694,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58698(s__58699){
return (new cljs.core.LazySeq(null,((function (i__58694,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
var s__58699__$1 = s__58699;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58699__$1);
if(temp__5735__auto____$3){
var s__58699__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58699__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58699__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58701 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58700 = (0);
while(true){
if((i__58700 < size__4581__auto____$1)){
var map__58702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58700);
var map__58702__$1 = (((((!((map__58702 == null))))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58702):map__58702);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58700,i__58694,map__58702,map__58702__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58701,s__58699__$2,temp__5735__auto____$3,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58700,i__58694,map__58702,map__58702__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58701,s__58699__$2,temp__5735__auto____$3,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58700 + (1));
i__58700 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58701),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58698(cljs.core.chunk_rest(s__58699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58701),null);
}
} else {
var map__58704 = cljs.core.first(s__58699__$2);
var map__58704__$1 = (((((!((map__58704 == null))))?(((((map__58704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58704):map__58704);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58694,map__58704,map__58704__$1,title__$1,string,uid__$2,s__58699__$2,temp__5735__auto____$3,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58694,map__58704,map__58704__$1,title__$1,string,uid__$2,s__58699__$2,temp__5735__auto____$3,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58698(cljs.core.rest(s__58699__$2)));
}
} else {
return null;
}
break;
}
});})(i__58694,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
,null,null));
});})(i__58694,map__58696,map__58696__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58695,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58733 = (i__58694 + (1));
i__58694 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58695),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692(cljs.core.chunk_rest(s__58693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58695),null);
}
} else {
var map__58706 = cljs.core.first(s__58693__$2);
var map__58706__$1 = (((((!((map__58706 == null))))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58706):map__58706);
var block = map__58706__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58708(s__58709){
return (new cljs.core.LazySeq(null,(function (){
var s__58709__$1 = s__58709;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58709__$1);
if(temp__5735__auto____$3){
var s__58709__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58709__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58709__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58711 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58710 = (0);
while(true){
if((i__58710 < size__4581__auto__)){
var map__58712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58710);
var map__58712__$1 = (((((!((map__58712 == null))))?(((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58712):map__58712);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58711,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58710,map__58712,map__58712__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58711,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58710,map__58712,map__58712__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58711,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58710 + (1));
i__58710 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58711),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58708(cljs.core.chunk_rest(s__58709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58711),null);
}
} else {
var map__58714 = cljs.core.first(s__58709__$2);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58714,map__58714__$1,title__$1,string,uid__$2,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58714,map__58714__$1,title__$1,string,uid__$2,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692_$_iter__58708(cljs.core.rest(s__58709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58706,map__58706__$1,block,uid__$1,parents,s__58693__$2,temp__5735__auto____$2,vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658_$_iter__58692(cljs.core.rest(s__58693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58689,group_title,group,s__58659__$2,temp__5735__auto____$1,vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58590_$_iter__58658(cljs.core.rest(s__58659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58655,linked_or_unlinked,refs,s__58591__$2,temp__5735__auto__,map__58578,map__58578__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58590(cljs.core.rest(s__58591__$2)));
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
var map__58716 = athens.db.get_node_document(ident);
var map__58716__$1 = (((((!((map__58716 == null))))?(((((map__58716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58716):map__58716);
var node = map__58716__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58718) : re_frame.core.subscribe.call(null,G__58718));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
var show_page_menu_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var page_menu_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
