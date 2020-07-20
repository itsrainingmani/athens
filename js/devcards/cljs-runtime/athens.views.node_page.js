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
var G__58571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58571) : re_frame.core.dispatch.call(null,G__58571));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58572 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58573 = athens.db.dsdb;
var G__58574 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58572,G__58573,G__58574) : posh.reagent.q.call(null,G__58572,G__58573,G__58574));
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
return cljs.core.boolean$((function (){try{var vec__58576 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58575){if((e58575 instanceof Object)){
var _ = e58575;
return false;
} else {
throw e58575;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58579,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position){
var map__58580 = p__58579;
var map__58580__$1 = (((((!((map__58580 == null))))?(((((map__58580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58580):map__58580);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58582 = e.target.value;
var G__58583 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58582,G__58583) : athens.views.node_page.db_handler.call(null,G__58582,G__58583));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_page_menu_QMARK_,cljs.core.not),cljs.core.reset_BANG_(page_menu_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.target.getBoundingClientRect().left,new cljs.core.Keyword(null,"y","y",-1757859776),e.target.getBoundingClientRect().bottom], null)));
}),new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?true:null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.page_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join('')], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58584(s__58585){
return (new cljs.core.LazySeq(null,(function (){
var s__58585__$1 = s__58585;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58585__$1);
if(temp__5735__auto__){
var s__58585__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58585__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58585__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58587 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58586 = (0);
while(true){
if((i__58586 < size__4581__auto__)){
var map__58588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58586);
var map__58588__$1 = (((((!((map__58588 == null))))?(((((map__58588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58588):map__58588);
var child = map__58588__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58587,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58721 = (i__58586 + (1));
i__58586 = G__58721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58587),athens$views$node_page$node_page_el_$_iter__58584(cljs.core.chunk_rest(s__58585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58587),null);
}
} else {
var map__58590 = cljs.core.first(s__58585__$2);
var map__58590__$1 = (((((!((map__58590 == null))))?(((((map__58590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58590):map__58590);
var child = map__58590__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58584(cljs.core.rest(s__58585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58592(s__58593){
return (new cljs.core.LazySeq(null,(function (){
var s__58593__$1 = s__58593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58593__$1);
if(temp__5735__auto__){
var s__58593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58593__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58593__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58595 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58594 = (0);
while(true){
if((i__58594 < size__4581__auto__)){
var vec__58596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58594);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58596,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58596,(1),null);
cljs.core.chunk_append(b__58595,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58594,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599(s__58600){
return (new cljs.core.LazySeq(null,((function (i__58594,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58600__$1 = s__58600;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58600__$1);
if(temp__5735__auto____$1){
var s__58600__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58600__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58600__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58602 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58601 = (0);
while(true){
if((i__58601 < size__4581__auto____$1)){
var vec__58603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58601);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(1),null);
cljs.core.chunk_append(b__58602,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606(s__58607){
return (new cljs.core.LazySeq(null,((function (i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58607__$1 = s__58607;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58607__$1);
if(temp__5735__auto____$2){
var s__58607__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58607__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58607__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58609 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58608 = (0);
while(true){
if((i__58608 < size__4581__auto____$2)){
var map__58610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58608);
var map__58610__$1 = (((((!((map__58610 == null))))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58610):map__58610);
var block = map__58610__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58609,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58608,i__58601,i__58594,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58612(s__58613){
return (new cljs.core.LazySeq(null,((function (i__58608,i__58601,i__58594,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58613__$1 = s__58613;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58613__$1);
if(temp__5735__auto____$3){
var s__58613__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58613__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58613__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58615 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58614 = (0);
while(true){
if((i__58614 < size__4581__auto____$3)){
var map__58616 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58614);
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58615,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58614,i__58608,i__58601,i__58594,map__58616,map__58616__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58615,s__58613__$2,temp__5735__auto____$3,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58614,i__58608,i__58601,i__58594,map__58616,map__58616__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58615,s__58613__$2,temp__5735__auto____$3,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58722 = (i__58614 + (1));
i__58614 = G__58722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58615),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58612(cljs.core.chunk_rest(s__58613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58615),null);
}
} else {
var map__58618 = cljs.core.first(s__58613__$2);
var map__58618__$1 = (((((!((map__58618 == null))))?(((((map__58618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58618):map__58618);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58608,i__58601,i__58594,map__58618,map__58618__$1,title__$1,string,uid__$2,s__58613__$2,temp__5735__auto____$3,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58608,i__58601,i__58594,map__58618,map__58618__$1,title__$1,string,uid__$2,s__58613__$2,temp__5735__auto____$3,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58612(cljs.core.rest(s__58613__$2)));
}
} else {
return null;
}
break;
}
});})(i__58608,i__58601,i__58594,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58608,i__58601,i__58594,map__58610,map__58610__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58609,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58723 = (i__58608 + (1));
i__58608 = G__58723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606(cljs.core.chunk_rest(s__58607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),null);
}
} else {
var map__58620 = cljs.core.first(s__58607__$2);
var map__58620__$1 = (((((!((map__58620 == null))))?(((((map__58620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58620):map__58620);
var block = map__58620__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58601,i__58594,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58622(s__58623){
return (new cljs.core.LazySeq(null,((function (i__58601,i__58594,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58623__$1 = s__58623;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58623__$1);
if(temp__5735__auto____$3){
var s__58623__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58623__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58623__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58625 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58624 = (0);
while(true){
if((i__58624 < size__4581__auto____$2)){
var map__58626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58624);
var map__58626__$1 = (((((!((map__58626 == null))))?(((((map__58626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58626):map__58626);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58624,i__58601,i__58594,map__58626,map__58626__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58624,i__58601,i__58594,map__58626,map__58626__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58724 = (i__58624 + (1));
i__58624 = G__58724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58622(cljs.core.chunk_rest(s__58623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),null);
}
} else {
var map__58628 = cljs.core.first(s__58623__$2);
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58601,i__58594,map__58628,map__58628__$1,title__$1,string,uid__$2,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58601,i__58594,map__58628,map__58628__$1,title__$1,string,uid__$2,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606_$_iter__58622(cljs.core.rest(s__58623__$2)));
}
} else {
return null;
}
break;
}
});})(i__58601,i__58594,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58601,i__58594,map__58620,map__58620__$1,block,uid__$1,parents,s__58607__$2,temp__5735__auto____$2,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58606(cljs.core.rest(s__58607__$2)));
}
} else {
return null;
}
break;
}
});})(i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58601,i__58594,vec__58603,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58602,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58725 = (i__58601 + (1));
i__58601 = G__58725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58602),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599(cljs.core.chunk_rest(s__58600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58602),null);
}
} else {
var vec__58630 = cljs.core.first(s__58600__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633(s__58634){
return (new cljs.core.LazySeq(null,((function (i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58634__$1 = s__58634;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58634__$1);
if(temp__5735__auto____$2){
var s__58634__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58634__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58634__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58636 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58635 = (0);
while(true){
if((i__58635 < size__4581__auto____$1)){
var map__58637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58635);
var map__58637__$1 = (((((!((map__58637 == null))))?(((((map__58637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58637):map__58637);
var block = map__58637__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58636,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58635,i__58594,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58639(s__58640){
return (new cljs.core.LazySeq(null,((function (i__58635,i__58594,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58640__$1 = s__58640;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58640__$1);
if(temp__5735__auto____$3){
var s__58640__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58640__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58640__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58642 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58641 = (0);
while(true){
if((i__58641 < size__4581__auto____$2)){
var map__58643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58641);
var map__58643__$1 = (((((!((map__58643 == null))))?(((((map__58643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58643):map__58643);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58641,i__58635,i__58594,map__58643,map__58643__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58642,s__58640__$2,temp__5735__auto____$3,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58641,i__58635,i__58594,map__58643,map__58643__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58642,s__58640__$2,temp__5735__auto____$3,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58726 = (i__58641 + (1));
i__58641 = G__58726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58642),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58639(cljs.core.chunk_rest(s__58640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58642),null);
}
} else {
var map__58645 = cljs.core.first(s__58640__$2);
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58635,i__58594,map__58645,map__58645__$1,title__$1,string,uid__$2,s__58640__$2,temp__5735__auto____$3,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58635,i__58594,map__58645,map__58645__$1,title__$1,string,uid__$2,s__58640__$2,temp__5735__auto____$3,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58639(cljs.core.rest(s__58640__$2)));
}
} else {
return null;
}
break;
}
});})(i__58635,i__58594,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58635,i__58594,map__58637,map__58637__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58636,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58727 = (i__58635 + (1));
i__58635 = G__58727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58636),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633(cljs.core.chunk_rest(s__58634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58636),null);
}
} else {
var map__58647 = cljs.core.first(s__58634__$2);
var map__58647__$1 = (((((!((map__58647 == null))))?(((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58647):map__58647);
var block = map__58647__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58594,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58649(s__58650){
return (new cljs.core.LazySeq(null,((function (i__58594,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58650__$1 = s__58650;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58650__$1);
if(temp__5735__auto____$3){
var s__58650__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58650__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58650__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58652 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58651 = (0);
while(true){
if((i__58651 < size__4581__auto____$1)){
var map__58653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58651);
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58652,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58651,i__58594,map__58653,map__58653__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58651,i__58594,map__58653,map__58653__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58728 = (i__58651 + (1));
i__58651 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58649(cljs.core.chunk_rest(s__58650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),null);
}
} else {
var map__58655 = cljs.core.first(s__58650__$2);
var map__58655__$1 = (((((!((map__58655 == null))))?(((((map__58655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58655):map__58655);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58594,map__58655,map__58655__$1,title__$1,string,uid__$2,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58594,map__58655,map__58655__$1,title__$1,string,uid__$2,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633_$_iter__58649(cljs.core.rest(s__58650__$2)));
}
} else {
return null;
}
break;
}
});})(i__58594,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58594,map__58647,map__58647__$1,block,uid__$1,parents,s__58634__$2,temp__5735__auto____$2,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599_$_iter__58633(cljs.core.rest(s__58634__$2)));
}
} else {
return null;
}
break;
}
});})(i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58594,vec__58630,group_title,group,s__58600__$2,temp__5735__auto____$1,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58599(cljs.core.rest(s__58600__$2)));
}
} else {
return null;
}
break;
}
});})(i__58594,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58594,vec__58596,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58595,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58729 = (i__58594 + (1));
i__58594 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),athens$views$node_page$node_page_el_$_iter__58592(cljs.core.chunk_rest(s__58593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),null);
}
} else {
var vec__58657 = cljs.core.first(s__58593__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58657,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58657,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660(s__58661){
return (new cljs.core.LazySeq(null,(function (){
var s__58661__$1 = s__58661;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58661__$1);
if(temp__5735__auto____$1){
var s__58661__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58661__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58661__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58663 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58662 = (0);
while(true){
if((i__58662 < size__4581__auto__)){
var vec__58664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58662);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58664,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58664,(1),null);
cljs.core.chunk_append(b__58663,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667(s__58668){
return (new cljs.core.LazySeq(null,((function (i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58668__$1 = s__58668;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58668__$1);
if(temp__5735__auto____$2){
var s__58668__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58668__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58668__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58670 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58669 = (0);
while(true){
if((i__58669 < size__4581__auto____$1)){
var map__58671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58669);
var map__58671__$1 = (((((!((map__58671 == null))))?(((((map__58671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58671):map__58671);
var block = map__58671__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58670,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58669,i__58662,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58673(s__58674){
return (new cljs.core.LazySeq(null,((function (i__58669,i__58662,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58674__$1 = s__58674;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58674__$1);
if(temp__5735__auto____$3){
var s__58674__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58674__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58674__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58676 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58675 = (0);
while(true){
if((i__58675 < size__4581__auto____$2)){
var map__58677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58675);
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58676,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58675,i__58669,i__58662,map__58677,map__58677__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58676,s__58674__$2,temp__5735__auto____$3,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58675,i__58669,i__58662,map__58677,map__58677__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58676,s__58674__$2,temp__5735__auto____$3,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58675 + (1));
i__58675 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58673(cljs.core.chunk_rest(s__58674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),null);
}
} else {
var map__58679 = cljs.core.first(s__58674__$2);
var map__58679__$1 = (((((!((map__58679 == null))))?(((((map__58679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58679):map__58679);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58669,i__58662,map__58679,map__58679__$1,title__$1,string,uid__$2,s__58674__$2,temp__5735__auto____$3,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58669,i__58662,map__58679,map__58679__$1,title__$1,string,uid__$2,s__58674__$2,temp__5735__auto____$3,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58673(cljs.core.rest(s__58674__$2)));
}
} else {
return null;
}
break;
}
});})(i__58669,i__58662,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58669,i__58662,map__58671,map__58671__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58670,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58731 = (i__58669 + (1));
i__58669 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58670),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667(cljs.core.chunk_rest(s__58668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58670),null);
}
} else {
var map__58681 = cljs.core.first(s__58668__$2);
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var block = map__58681__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58662,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58683(s__58684){
return (new cljs.core.LazySeq(null,((function (i__58662,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58684__$1 = s__58684;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58684__$1);
if(temp__5735__auto____$3){
var s__58684__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58684__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58684__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58686 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58685 = (0);
while(true){
if((i__58685 < size__4581__auto____$1)){
var map__58687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58685);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58686,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58685,i__58662,map__58687,map__58687__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58685,i__58662,map__58687,map__58687__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58685 + (1));
i__58685 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58683(cljs.core.chunk_rest(s__58684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),null);
}
} else {
var map__58689 = cljs.core.first(s__58684__$2);
var map__58689__$1 = (((((!((map__58689 == null))))?(((((map__58689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58689):map__58689);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58662,map__58689,map__58689__$1,title__$1,string,uid__$2,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58662,map__58689,map__58689__$1,title__$1,string,uid__$2,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667_$_iter__58683(cljs.core.rest(s__58684__$2)));
}
} else {
return null;
}
break;
}
});})(i__58662,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58662,map__58681,map__58681__$1,block,uid__$1,parents,s__58668__$2,temp__5735__auto____$2,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58667(cljs.core.rest(s__58668__$2)));
}
} else {
return null;
}
break;
}
});})(i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58662,vec__58664,group_title,group,c__4580__auto__,size__4581__auto__,b__58663,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58733 = (i__58662 + (1));
i__58662 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58663),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660(cljs.core.chunk_rest(s__58661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58663),null);
}
} else {
var vec__58691 = cljs.core.first(s__58661__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58691,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58691,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694(s__58695){
return (new cljs.core.LazySeq(null,(function (){
var s__58695__$1 = s__58695;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58695__$1);
if(temp__5735__auto____$2){
var s__58695__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58695__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58695__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58697 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58696 = (0);
while(true){
if((i__58696 < size__4581__auto__)){
var map__58698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58696);
var map__58698__$1 = (((((!((map__58698 == null))))?(((((map__58698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58698):map__58698);
var block = map__58698__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58697,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58696,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58700(s__58701){
return (new cljs.core.LazySeq(null,((function (i__58696,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
var s__58701__$1 = s__58701;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58701__$1);
if(temp__5735__auto____$3){
var s__58701__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58701__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58701__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58703 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58702 = (0);
while(true){
if((i__58702 < size__4581__auto____$1)){
var map__58704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58702);
var map__58704__$1 = (((((!((map__58704 == null))))?(((((map__58704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58704):map__58704);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58703,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58702,i__58696,map__58704,map__58704__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58703,s__58701__$2,temp__5735__auto____$3,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58702,i__58696,map__58704,map__58704__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58703,s__58701__$2,temp__5735__auto____$3,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58702 + (1));
i__58702 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58703),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58700(cljs.core.chunk_rest(s__58701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58703),null);
}
} else {
var map__58706 = cljs.core.first(s__58701__$2);
var map__58706__$1 = (((((!((map__58706 == null))))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58706):map__58706);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58696,map__58706,map__58706__$1,title__$1,string,uid__$2,s__58701__$2,temp__5735__auto____$3,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58696,map__58706,map__58706__$1,title__$1,string,uid__$2,s__58701__$2,temp__5735__auto____$3,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58700(cljs.core.rest(s__58701__$2)));
}
} else {
return null;
}
break;
}
});})(i__58696,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
,null,null));
});})(i__58696,map__58698,map__58698__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58697,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58735 = (i__58696 + (1));
i__58696 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58697),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694(cljs.core.chunk_rest(s__58695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58697),null);
}
} else {
var map__58708 = cljs.core.first(s__58695__$2);
var map__58708__$1 = (((((!((map__58708 == null))))?(((((map__58708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58708):map__58708);
var block = map__58708__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58710(s__58711){
return (new cljs.core.LazySeq(null,(function (){
var s__58711__$1 = s__58711;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58711__$1);
if(temp__5735__auto____$3){
var s__58711__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58711__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58711__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58713 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58712 = (0);
while(true){
if((i__58712 < size__4581__auto__)){
var map__58714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58712);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58713,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58712,map__58714,map__58714__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58712,map__58714,map__58714__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58736 = (i__58712 + (1));
i__58712 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58710(cljs.core.chunk_rest(s__58711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),null);
}
} else {
var map__58716 = cljs.core.first(s__58711__$2);
var map__58716__$1 = (((((!((map__58716 == null))))?(((((map__58716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58716):map__58716);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58716,map__58716__$1,title__$1,string,uid__$2,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58716,map__58716__$1,title__$1,string,uid__$2,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694_$_iter__58710(cljs.core.rest(s__58711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58708,map__58708__$1,block,uid__$1,parents,s__58695__$2,temp__5735__auto____$2,vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660_$_iter__58694(cljs.core.rest(s__58695__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58691,group_title,group,s__58661__$2,temp__5735__auto____$1,vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58592_$_iter__58660(cljs.core.rest(s__58661__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58657,linked_or_unlinked,refs,s__58593__$2,temp__5735__auto__,map__58580,map__58580__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58592(cljs.core.rest(s__58593__$2)));
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
var map__58718 = athens.db.get_node_document(ident);
var map__58718__$1 = (((((!((map__58718 == null))))?(((((map__58718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58718):map__58718);
var node = map__58718__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58720) : re_frame.core.subscribe.call(null,G__58720));
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
