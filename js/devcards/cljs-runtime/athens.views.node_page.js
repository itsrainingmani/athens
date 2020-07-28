goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
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
var G__58570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58570) : re_frame.core.dispatch.call(null,G__58570));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58571 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58572 = athens.db.dsdb;
var G__58573 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58571,G__58572,G__58573) : posh.reagent.q.call(null,G__58571,G__58572,G__58573));
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
return cljs.core.boolean$((function (){try{var vec__58575 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58575,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58575,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58575,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58574){if((e58574 instanceof Object)){
var _ = e58574;
return false;
} else {
throw e58574;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58578_58726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58578_58726) : re_frame.core.dispatch.call(null,G__58578_58726));

var G__58579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58579) : re_frame.core.dispatch.call(null,G__58579));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58580 = block;
var map__58580__$1 = (((((!((map__58580 == null))))?(((((map__58580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58580):map__58580);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58581 = cljs.core.deref(state);
var map__58581__$1 = (((((!((map__58581 == null))))?(((((map__58581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58581):map__58581);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58581__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58581__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58581__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58584 = e.target.value;
var G__58585 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58584,G__58585) : athens.views.node_page.db_handler.call(null,G__58584,G__58585));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58586) : re_frame.core.dispatch.call(null,G__58586));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58587) : re_frame.core.dispatch.call(null,G__58587));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58588) : re_frame.core.dispatch.call(null,G__58588));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58589(s__58590){
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
var map__58593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58591);
var map__58593__$1 = (((((!((map__58593 == null))))?(((((map__58593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58593):map__58593);
var child = map__58593__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58593__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58592,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58727 = (i__58591 + (1));
i__58591 = G__58727;
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
var map__58595 = cljs.core.first(s__58590__$2);
var map__58595__$1 = (((((!((map__58595 == null))))?(((((map__58595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58595):map__58595);
var child = map__58595__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58589(cljs.core.rest(s__58590__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58597(s__58598){
return (new cljs.core.LazySeq(null,(function (){
var s__58598__$1 = s__58598;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58598__$1);
if(temp__5735__auto__){
var s__58598__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58598__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58598__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58600 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58599 = (0);
while(true){
if((i__58599 < size__4581__auto__)){
var vec__58601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58599);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(1),null);
cljs.core.chunk_append(b__58600,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58599,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604(s__58605){
return (new cljs.core.LazySeq(null,((function (i__58599,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58605__$1 = s__58605;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58605__$1);
if(temp__5735__auto____$1){
var s__58605__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58605__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58605__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58607 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58606 = (0);
while(true){
if((i__58606 < size__4581__auto____$1)){
var vec__58608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58606);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(1),null);
cljs.core.chunk_append(b__58607,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611(s__58612){
return (new cljs.core.LazySeq(null,((function (i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58612__$1 = s__58612;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58612__$1);
if(temp__5735__auto____$2){
var s__58612__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58612__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58612__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58614 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58613 = (0);
while(true){
if((i__58613 < size__4581__auto____$2)){
var map__58615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58613);
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var block__$1 = map__58615__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58614,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58613,i__58606,i__58599,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58617(s__58618){
return (new cljs.core.LazySeq(null,((function (i__58613,i__58606,i__58599,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58618__$1 = s__58618;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58618__$1);
if(temp__5735__auto____$3){
var s__58618__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58618__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58618__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58620 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58619 = (0);
while(true){
if((i__58619 < size__4581__auto____$3)){
var map__58621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58619);
var map__58621__$1 = (((((!((map__58621 == null))))?(((((map__58621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58621):map__58621);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58619,i__58613,i__58606,i__58599,map__58621,map__58621__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58620,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58619,i__58613,i__58606,i__58599,map__58621,map__58621__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58620,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58728 = (i__58619 + (1));
i__58619 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58617(cljs.core.chunk_rest(s__58618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),null);
}
} else {
var map__58623 = cljs.core.first(s__58618__$2);
var map__58623__$1 = (((((!((map__58623 == null))))?(((((map__58623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58623):map__58623);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58613,i__58606,i__58599,map__58623,map__58623__$1,title__$1,string,uid__$2,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58613,i__58606,i__58599,map__58623,map__58623__$1,title__$1,string,uid__$2,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58617(cljs.core.rest(s__58618__$2)));
}
} else {
return null;
}
break;
}
});})(i__58613,i__58606,i__58599,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58613,i__58606,i__58599,map__58615,map__58615__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58614,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58729 = (i__58613 + (1));
i__58613 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58614),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611(cljs.core.chunk_rest(s__58612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58614),null);
}
} else {
var map__58625 = cljs.core.first(s__58612__$2);
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var block__$1 = map__58625__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58606,i__58599,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58627(s__58628){
return (new cljs.core.LazySeq(null,((function (i__58606,i__58599,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58628__$1 = s__58628;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58628__$1);
if(temp__5735__auto____$3){
var s__58628__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58628__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58628__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58630 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58629 = (0);
while(true){
if((i__58629 < size__4581__auto____$2)){
var map__58631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58629);
var map__58631__$1 = (((((!((map__58631 == null))))?(((((map__58631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58631):map__58631);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58630,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58629,i__58606,i__58599,map__58631,map__58631__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58630,s__58628__$2,temp__5735__auto____$3,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58629,i__58606,i__58599,map__58631,map__58631__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58630,s__58628__$2,temp__5735__auto____$3,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58629 + (1));
i__58629 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58630),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58627(cljs.core.chunk_rest(s__58628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58630),null);
}
} else {
var map__58633 = cljs.core.first(s__58628__$2);
var map__58633__$1 = (((((!((map__58633 == null))))?(((((map__58633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58633):map__58633);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58606,i__58599,map__58633,map__58633__$1,title__$1,string,uid__$2,s__58628__$2,temp__5735__auto____$3,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58606,i__58599,map__58633,map__58633__$1,title__$1,string,uid__$2,s__58628__$2,temp__5735__auto____$3,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611_$_iter__58627(cljs.core.rest(s__58628__$2)));
}
} else {
return null;
}
break;
}
});})(i__58606,i__58599,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58606,i__58599,map__58625,map__58625__$1,block__$1,uid__$1,parents,s__58612__$2,temp__5735__auto____$2,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58611(cljs.core.rest(s__58612__$2)));
}
} else {
return null;
}
break;
}
});})(i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58606,i__58599,vec__58608,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58607,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58731 = (i__58606 + (1));
i__58606 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58607),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604(cljs.core.chunk_rest(s__58605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58607),null);
}
} else {
var vec__58635 = cljs.core.first(s__58605__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58635,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58635,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638(s__58639){
return (new cljs.core.LazySeq(null,((function (i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58639__$1 = s__58639;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58639__$1);
if(temp__5735__auto____$2){
var s__58639__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58639__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58639__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58641 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58640 = (0);
while(true){
if((i__58640 < size__4581__auto____$1)){
var map__58642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58640);
var map__58642__$1 = (((((!((map__58642 == null))))?(((((map__58642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58642):map__58642);
var block__$1 = map__58642__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58641,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58640,i__58599,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58644(s__58645){
return (new cljs.core.LazySeq(null,((function (i__58640,i__58599,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58645__$1 = s__58645;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58645__$1);
if(temp__5735__auto____$3){
var s__58645__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58645__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58645__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58647 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58646 = (0);
while(true){
if((i__58646 < size__4581__auto____$2)){
var map__58648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58646);
var map__58648__$1 = (((((!((map__58648 == null))))?(((((map__58648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58648):map__58648);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58647,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58646,i__58640,i__58599,map__58648,map__58648__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58647,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58646,i__58640,i__58599,map__58648,map__58648__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58647,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58646 + (1));
i__58646 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58644(cljs.core.chunk_rest(s__58645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),null);
}
} else {
var map__58650 = cljs.core.first(s__58645__$2);
var map__58650__$1 = (((((!((map__58650 == null))))?(((((map__58650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58650):map__58650);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58640,i__58599,map__58650,map__58650__$1,title__$1,string,uid__$2,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58640,i__58599,map__58650,map__58650__$1,title__$1,string,uid__$2,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58644(cljs.core.rest(s__58645__$2)));
}
} else {
return null;
}
break;
}
});})(i__58640,i__58599,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58640,i__58599,map__58642,map__58642__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58641,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58733 = (i__58640 + (1));
i__58640 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58641),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638(cljs.core.chunk_rest(s__58639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58641),null);
}
} else {
var map__58652 = cljs.core.first(s__58639__$2);
var map__58652__$1 = (((((!((map__58652 == null))))?(((((map__58652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58652):map__58652);
var block__$1 = map__58652__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58599,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58654(s__58655){
return (new cljs.core.LazySeq(null,((function (i__58599,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58655__$1 = s__58655;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58655__$1);
if(temp__5735__auto____$3){
var s__58655__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58655__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58655__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58657 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58656 = (0);
while(true){
if((i__58656 < size__4581__auto____$1)){
var map__58658 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58656);
var map__58658__$1 = (((((!((map__58658 == null))))?(((((map__58658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58658):map__58658);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58657,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58656,i__58599,map__58658,map__58658__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58657,s__58655__$2,temp__5735__auto____$3,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58656,i__58599,map__58658,map__58658__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58657,s__58655__$2,temp__5735__auto____$3,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58656 + (1));
i__58656 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58657),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58654(cljs.core.chunk_rest(s__58655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58657),null);
}
} else {
var map__58660 = cljs.core.first(s__58655__$2);
var map__58660__$1 = (((((!((map__58660 == null))))?(((((map__58660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58660):map__58660);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58599,map__58660,map__58660__$1,title__$1,string,uid__$2,s__58655__$2,temp__5735__auto____$3,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58599,map__58660,map__58660__$1,title__$1,string,uid__$2,s__58655__$2,temp__5735__auto____$3,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638_$_iter__58654(cljs.core.rest(s__58655__$2)));
}
} else {
return null;
}
break;
}
});})(i__58599,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58599,map__58652,map__58652__$1,block__$1,uid__$1,parents,s__58639__$2,temp__5735__auto____$2,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604_$_iter__58638(cljs.core.rest(s__58639__$2)));
}
} else {
return null;
}
break;
}
});})(i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58599,vec__58635,group_title,group,s__58605__$2,temp__5735__auto____$1,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58604(cljs.core.rest(s__58605__$2)));
}
} else {
return null;
}
break;
}
});})(i__58599,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58599,vec__58601,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58600,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58735 = (i__58599 + (1));
i__58599 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58600),athens$views$node_page$node_page_el_$_iter__58597(cljs.core.chunk_rest(s__58598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58600),null);
}
} else {
var vec__58662 = cljs.core.first(s__58598__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58662,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58662,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665(s__58666){
return (new cljs.core.LazySeq(null,(function (){
var s__58666__$1 = s__58666;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58666__$1);
if(temp__5735__auto____$1){
var s__58666__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58666__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58666__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58668 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58667 = (0);
while(true){
if((i__58667 < size__4581__auto__)){
var vec__58669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58667);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58669,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58669,(1),null);
cljs.core.chunk_append(b__58668,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672(s__58673){
return (new cljs.core.LazySeq(null,((function (i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58673__$1 = s__58673;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58673__$1);
if(temp__5735__auto____$2){
var s__58673__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58673__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58673__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58675 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58674 = (0);
while(true){
if((i__58674 < size__4581__auto____$1)){
var map__58676 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58674);
var map__58676__$1 = (((((!((map__58676 == null))))?(((((map__58676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58676):map__58676);
var block__$1 = map__58676__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58675,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58674,i__58667,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58678(s__58679){
return (new cljs.core.LazySeq(null,((function (i__58674,i__58667,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58679__$1 = s__58679;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58679__$1);
if(temp__5735__auto____$3){
var s__58679__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58679__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58679__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58681 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58680 = (0);
while(true){
if((i__58680 < size__4581__auto____$2)){
var map__58682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58680);
var map__58682__$1 = (((((!((map__58682 == null))))?(((((map__58682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58682):map__58682);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58681,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58680,i__58674,i__58667,map__58682,map__58682__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58681,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58680,i__58674,i__58667,map__58682,map__58682__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58681,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58736 = (i__58680 + (1));
i__58680 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58678(cljs.core.chunk_rest(s__58679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),null);
}
} else {
var map__58684 = cljs.core.first(s__58679__$2);
var map__58684__$1 = (((((!((map__58684 == null))))?(((((map__58684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58684):map__58684);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58674,i__58667,map__58684,map__58684__$1,title__$1,string,uid__$2,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58674,i__58667,map__58684,map__58684__$1,title__$1,string,uid__$2,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58678(cljs.core.rest(s__58679__$2)));
}
} else {
return null;
}
break;
}
});})(i__58674,i__58667,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58674,i__58667,map__58676,map__58676__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58675,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58737 = (i__58674 + (1));
i__58674 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58675),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672(cljs.core.chunk_rest(s__58673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58675),null);
}
} else {
var map__58686 = cljs.core.first(s__58673__$2);
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var block__$1 = map__58686__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58667,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58688(s__58689){
return (new cljs.core.LazySeq(null,((function (i__58667,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58689__$1 = s__58689;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58689__$1);
if(temp__5735__auto____$3){
var s__58689__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58689__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58689__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58691 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58690 = (0);
while(true){
if((i__58690 < size__4581__auto____$1)){
var map__58692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58690);
var map__58692__$1 = (((((!((map__58692 == null))))?(((((map__58692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58692):map__58692);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58690,i__58667,map__58692,map__58692__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58691,s__58689__$2,temp__5735__auto____$3,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58690,i__58667,map__58692,map__58692__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58691,s__58689__$2,temp__5735__auto____$3,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58738 = (i__58690 + (1));
i__58690 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58691),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58688(cljs.core.chunk_rest(s__58689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58691),null);
}
} else {
var map__58694 = cljs.core.first(s__58689__$2);
var map__58694__$1 = (((((!((map__58694 == null))))?(((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58694):map__58694);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58667,map__58694,map__58694__$1,title__$1,string,uid__$2,s__58689__$2,temp__5735__auto____$3,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58667,map__58694,map__58694__$1,title__$1,string,uid__$2,s__58689__$2,temp__5735__auto____$3,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672_$_iter__58688(cljs.core.rest(s__58689__$2)));
}
} else {
return null;
}
break;
}
});})(i__58667,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58667,map__58686,map__58686__$1,block__$1,uid__$1,parents,s__58673__$2,temp__5735__auto____$2,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58672(cljs.core.rest(s__58673__$2)));
}
} else {
return null;
}
break;
}
});})(i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58667,vec__58669,group_title,group,c__4580__auto__,size__4581__auto__,b__58668,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58739 = (i__58667 + (1));
i__58667 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665(cljs.core.chunk_rest(s__58666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),null);
}
} else {
var vec__58696 = cljs.core.first(s__58666__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58696,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58696,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699(s__58700){
return (new cljs.core.LazySeq(null,(function (){
var s__58700__$1 = s__58700;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58700__$1);
if(temp__5735__auto____$2){
var s__58700__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58700__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58700__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58702 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58701 = (0);
while(true){
if((i__58701 < size__4581__auto__)){
var map__58703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58701);
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58703):map__58703);
var block__$1 = map__58703__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58702,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58701,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58705(s__58706){
return (new cljs.core.LazySeq(null,((function (i__58701,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
var s__58706__$1 = s__58706;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58706__$1);
if(temp__5735__auto____$3){
var s__58706__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58706__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58706__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58708 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58707 = (0);
while(true){
if((i__58707 < size__4581__auto____$1)){
var map__58709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58707);
var map__58709__$1 = (((((!((map__58709 == null))))?(((((map__58709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58709):map__58709);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58708,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58707,i__58701,map__58709,map__58709__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58708,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58707,i__58701,map__58709,map__58709__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58708,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58740 = (i__58707 + (1));
i__58707 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58705(cljs.core.chunk_rest(s__58706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),null);
}
} else {
var map__58711 = cljs.core.first(s__58706__$2);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58701,map__58711,map__58711__$1,title__$1,string,uid__$2,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58701,map__58711,map__58711__$1,title__$1,string,uid__$2,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58705(cljs.core.rest(s__58706__$2)));
}
} else {
return null;
}
break;
}
});})(i__58701,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
,null,null));
});})(i__58701,map__58703,map__58703__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58702,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58741 = (i__58701 + (1));
i__58701 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58702),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699(cljs.core.chunk_rest(s__58700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58702),null);
}
} else {
var map__58713 = cljs.core.first(s__58700__$2);
var map__58713__$1 = (((((!((map__58713 == null))))?(((((map__58713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58713):map__58713);
var block__$1 = map__58713__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58715(s__58716){
return (new cljs.core.LazySeq(null,(function (){
var s__58716__$1 = s__58716;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58716__$1);
if(temp__5735__auto____$3){
var s__58716__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58716__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58716__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58718 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58717 = (0);
while(true){
if((i__58717 < size__4581__auto__)){
var map__58719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58717);
var map__58719__$1 = (((((!((map__58719 == null))))?(((((map__58719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58719):map__58719);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58718,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58717,map__58719,map__58719__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58718,s__58716__$2,temp__5735__auto____$3,map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58717,map__58719,map__58719__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58718,s__58716__$2,temp__5735__auto____$3,map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58742 = (i__58717 + (1));
i__58717 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58718),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58715(cljs.core.chunk_rest(s__58716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58718),null);
}
} else {
var map__58721 = cljs.core.first(s__58716__$2);
var map__58721__$1 = (((((!((map__58721 == null))))?(((((map__58721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58721):map__58721);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58721,map__58721__$1,title__$1,string,uid__$2,s__58716__$2,temp__5735__auto____$3,map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58721,map__58721__$1,title__$1,string,uid__$2,s__58716__$2,temp__5735__auto____$3,map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699_$_iter__58715(cljs.core.rest(s__58716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58713,map__58713__$1,block__$1,uid__$1,parents,s__58700__$2,temp__5735__auto____$2,vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665_$_iter__58699(cljs.core.rest(s__58700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58696,group_title,group,s__58666__$2,temp__5735__auto____$1,vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58597_$_iter__58665(cljs.core.rest(s__58666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58662,linked_or_unlinked,refs,s__58598__$2,temp__5735__auto__,map__58580,map__58580__$1,title,is_shortcut_QMARK_,children,uid,map__58581,map__58581__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58597(cljs.core.rest(s__58598__$2)));
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
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58723 = athens.db.get_node_document(ident);
var map__58723__$1 = (((((!((map__58723 == null))))?(((((map__58723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58723):map__58723);
var node = map__58723__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58725) : re_frame.core.subscribe.call(null,G__58725));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(athens.util.escape_str(title)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(athens.util.escape_str(title)))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
